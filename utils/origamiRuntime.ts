
// Helper class to load and run Origami WASM
export class OrigamiRuntime {
    private static instance: OrigamiRuntime;
    private wasmModule: WebAssembly.WebAssemblyInstantiatedSource | null = null;
    private go: any; // Go WASM runtime instance
    private consoleOutput: string[] = [];

    private constructor() {
        // Initialize Go WASM runtime
        if (!(window as any).Go) {
             throw new Error("Go WASM runtime not loaded. Please include wasm_exec.js");
        }
        this.go = new (window as any).Go();
    }

    public static getInstance(): OrigamiRuntime {
        if (!OrigamiRuntime.instance) {
            OrigamiRuntime.instance = new OrigamiRuntime();
        }
        return OrigamiRuntime.instance;
    }

    public async load(wasmUrl: string) {
        if (this.wasmModule) return;

        try {
            const response = await fetch(wasmUrl);
            const buffer = await response.arrayBuffer();
            
            // Hook console.log to capture stdout from Go WASM
            const originalLog = console.log;
            console.log = (...args) => {
                const line = args.join(" ");
                this.consoleOutput.push(line);
                originalLog(...args);
            };

            const result = await WebAssembly.instantiate(buffer, this.go.importObject);
            this.wasmModule = result;
            
            // Run the WASM instance
            this.go.run(this.wasmModule.instance);
            
        } catch (e) {
            console.error("Failed to load Origami WASM:", e);
            throw e;
        }
    }

    public async runCode(code: string): Promise<string> {
        this.consoleOutput = []; // Clear previous logs

        // This assumes the WASM exposes a function `origamiRun(code)` on window
        if ((window as any).origamiRun) {
            try {
                const result = await (window as any).origamiRun(code);
                
                // Combine stdout logs with the function return value
                let finalOutput = this.consoleOutput.join("\n");
                if (result) {
                    finalOutput += (finalOutput ? "\n" : "") + result;
                }
                return finalOutput;
            } catch (e: any) {
                return `Error: ${e.message}`;
            }
        }
        
        console.warn("WASM function 'origamiRun' not found. Is WASM loaded?");
        return "WASM runtime not ready.";
    }
}
