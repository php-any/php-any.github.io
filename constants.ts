import { Project } from "./types";

export const HOME_FEATURES = {
  en: [
    {
      id: "concurrency",
      title: "Go-Powered Concurrency",
      description:
        "Spawn lightweight actors that communicate via message passing. Go's goroutines meet PHP's simple syntax.",
      code: `// 并发示例
echo "Main thread started\\n";

function worker($id: int) {
  echo "Worker {$id} started\\n";
}

// 生成轻量级线程 (goroutine)
spawn worker(1);
spawn worker(2);

echo "Main thread finished\\n";
`,
    },
    {
      id: "types",
      title: "Refined Types",
      description:
        "Strong typing with runtime flexibility. Express complex constraints that are validated at compile time.",
      code: `// 类型系统示例
function add($a: int, $b: int): int {
  return $a + $b;
}

$res = add(10, 20);
echo "10 + 20 = {$res}\\n";

// 类型错误会在编译时捕获
// $err = add("1", "2"); 
`,
    },
    {
      id: "interop",
      title: "Seamless Go Interop",
      description:
        "Call Go functions and use Go structs directly. No FFI, no glue code, just seamless integration.",
      code: `// Go 互操作示例
// 目前 WASM 环境支持部分内置函数

$arr = [1, 2, 3];
$sum = 0;
foreach ($arr as $v) {
  $sum += $v;
}
echo "Sum: {$sum}\\n";
`,
    },
  ],
  zh: [
    {
      id: "concurrency",
      title: "Go 驱动的并发",
      description:
        "生成通过消息传递进行通信的轻量级 Actor。Go 的 Goroutine 遇上 PHP 的简洁语法。",
      code: `// 并发示例
echo "Main thread started\\n";

function worker($id: int) {
  echo "Worker {$id} started\\n";
}

// 生成轻量级线程 (goroutine)
spawn worker(1);
spawn worker(2);

echo "Main thread finished\\n";
`,
    },
    {
      id: "types",
      title: "精炼类型系统",
      description:
        "强类型与运行时灵活性的结合。直接在类型系统中表达复杂的约束，并在编译时进行验证。",
      code: `// 类型系统示例
function add($a: int, $b: int): int {
  return $a + $b;
}

$res = add(10, 20);
echo "10 + 20 = {$res}\\n";

// 类型错误会在编译时捕获
// $err = add("1", "2"); 
`,
    },
    {
      id: "interop",
      title: "无缝 Go 互操作",
      description:
        "直接调用 Go 函数和使用 Go 结构体。没有 FFI，没有胶水代码，只有无缝集成。",
      code: `// Go 互操作示例
// 目前 WASM 环境支持部分内置函数

$arr = [1, 2, 3];
$sum = 0;
foreach ($arr as $v) {
  $sum += $v;
}
echo "Sum: {$sum}\\n";
`,
    },
  ],
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "hello-world",
    name: "Hello World",
    description: "Output and Function example",
    files: {
      "main.zy": {
        name: "main.zy",
        language: "origami",
        isEntry: true,
        content: `// 输出与返回示例

echo "Hello Origami from WASM!\\n";

function add($a: int, $b: int): int {
  return $a + $b;
}

$x = add(3, 5);
echo "3 + 5 = {$x}\\n";
`,
      },
    },
  },
  {
    id: "arrays",
    name: "Arrays",
    description: "Array methods: map, filter, join",
    files: {
      "main.zy": {
        name: "main.zy",
        language: "origami",
        isEntry: true,
        content: `// 数组链式方法示例

$nums = [1,2,3,4,5];
$doubled = $nums->map(($n) => $n * 2);
$evens = $nums->filter(($n) => $n % 2 == 0);

echo "doubled: ".$doubled->join(",")."\\n";
echo "evens: ".$evens->join(",")."\\n";
`,
      },
    },
  },
  {
    id: "control-flow",
    name: "Control Flow",
    description: "if, for, foreach, recursion",
    files: {
      "main.zy": {
        name: "main.zy",
        language: "origami",
        isEntry: true,
        content: `// 控制结构示例：if / for / foreach

function fib($n: int): int {
  if ($n <= 1) {
    return $n;
  }
  return fib($n - 1) + fib($n - 2);
}

$nums = [1, 2, 3, 4, 5];
$sum = 0;
for ($i = 0; $i < 5; $i = $i + 1) {
  $sum = $sum + $nums[$i];
}
echo "sum via for: {$sum}\\n";

$sum2 = 0;
foreach ($nums as $n) {
  $sum2 = $sum2 + $n;
}
echo "sum via foreach: {$sum2}\\n";

echo "fib(8) = " . fib(8) . "\\n";
`,
      },
    },
  },
  {
    id: "strings",
    name: "Strings",
    description: "String manipulation methods",
    files: {
      "main.zy": {
        name: "main.zy",
        language: "origami",
        isEntry: true,
        content: `// 字符串操作示例
$s = "  Hello, Origami wasm!  ";

echo "原始: '{$s}'\\n";
echo "trim: '" . $s->trim() . "'\\n";
echo "toUpper: " . $s->toUpperCase() . "\\n";
echo "toLower: " . $s->toLowerCase() . "\\n";
echo "startsWith('  He'): ";
echo $s->startsWith("  He") ? "true\\n" : "false\\n";
echo "endsWith('!  '): ";
echo $s->endsWith("!  ") ? "true\\n" : "false\\n";

$idx = $s->indexOf("Origami");
echo "indexOf('Origami'): {$idx}\\n";

$sub = $s->substring(2, 7);
echo "substring(2,7): '{$sub}'\\n";

$repl = $s->replace("wasm", "WASM");
echo "replace: '{$repl}'\\n";

return "done";
`,
      },
    },
  },
];

export const SHOWCASE_PROJECTS = {
  en: [
    {
      id: 1,
      title: "Cosmos Desktop",
      description:
        "Cross-platform creative suite built with Origami WebView. Merges Web UI flexibility with native Go performance.",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
      tags: ["GUI", "WebView", "Desktop"],
      author: "CreativeLabs",
    },
    {
      id: 2,
      title: "Bolt IM",
      description:
        "Enterprise-grade chat infrastructure supporting 1M+ concurrent users per node with sub-millisecond latency.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      tags: ["IM", "WebSocket", "Concurrency"],
      author: "ConnectTech",
    },
    {
      id: 3,
      title: "HyperScale API",
      description:
        "Payment processing gateway handling $5B daily transaction volume. Replaced legacy Java stack with 1/10th resources.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["FinTech", "High Performance", "API"],
      author: "FinCore",
    },
    {
      id: 4,
      title: "Nebula Engine",
      description:
        "Real-time game server engine utilizing Actor model for zero-lock physics synchronization.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Game Server", "Actor Model", "Real-time"],
      author: "PixelForge",
    },
  ],
  zh: [
    {
      id: 1,
      title: "Cosmos Desktop (宇宙桌面)",
      description:
        "使用 Origami WebView 构建的跨平台创意套件。融合了 Web UI 的灵活性与原生 Go 的高性能。",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
      tags: ["GUI", "WebView", "桌面应用"],
      author: "CreativeLabs",
    },
    {
      id: 2,
      title: "Bolt IM (闪电通讯)",
      description:
        "企业级聊天基础设施，单节点支持 100 万+ 并发用户，延迟低于 1 毫秒。",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      tags: ["即时通讯", "WebSocket", "高并发"],
      author: "ConnectTech",
    },
    {
      id: 3,
      title: "HyperScale API (超大规模网关)",
      description:
        "日处理 50 亿美元交易额的支付网关。替代了旧的 Java 技术栈，仅使用 1/10 的资源。",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["金融科技", "高性能", "API"],
      author: "FinCore",
    },
    {
      id: 4,
      title: "Nebula Engine (星云引擎)",
      description: "利用 Actor 模型实现零锁物理同步的实时游戏服务器引擎。",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["游戏服务器", "Actor 模型", "实时"],
      author: "PixelForge",
    },
  ],
};

export const CODE_EXAMPLES = {
  en: [
    {
      category: "Basics",
      title: "Hello World",
      description: "Basic syntax and function definition.",
      code: `// 基础语法示例
echo "Hello Origami!\\n";

function greet($name: string) {
    echo "Hello, {$name}\\n";
}

greet("User");
`,
    },
    {
      category: "Data Structures",
      title: "Array Processing",
      description: "Using map and filter on arrays.",
      code: `// 数组处理示例
$nums = [1, 2, 3, 4, 5];

// 使用 map 转换
$doubled = $nums->map(($n) => $n * 2);
echo "Doubled: " . $doubled->join(", ") . "\\n";

// 使用 filter 过滤
$evens = $nums->filter(($n) => $n % 2 == 0);
echo "Evens: " . $evens->join(", ") . "\\n";
`,
    },
    {
      category: "Algorithms",
      title: "Fibonacci",
      description: "Recursive function call.",
      code: `// 递归示例
function fib($n: int): int {
    if ($n <= 1) return $n;
    return fib($n - 1) + fib($n - 2);
}

echo "fib(10) = " . fib(10) . "\\n";
`,
    },
  ],
  zh: [
    {
      category: "基础",
      title: "Hello World",
      description: "基本语法和函数定义。",
      code: `// 基础语法示例
echo "Hello Origami!\\n";

function greet($name: string) {
    echo "Hello, {$name}\\n";
}

greet("User");
`,
    },
    {
      category: "数据结构",
      title: "数组处理",
      description: "在数组上使用 map 和 filter。",
      code: `// 数组处理示例
$nums = [1, 2, 3, 4, 5];

// 使用 map 转换
$doubled = $nums->map(($n) => $n * 2);
echo "Doubled: " . $doubled->join(", ") . "\\n";

// 使用 filter 过滤
$evens = $nums->filter(($n) => $n % 2 == 0);
echo "Evens: " . $evens->join(", ") . "\\n";
`,
    },
    {
      category: "算法",
      title: "斐波那契数列",
      description: "递归函数调用。",
      code: `// 递归示例
function fib($n: int): int {
    if ($n <= 1) return $n;
    return fib($n - 1) + fib($n - 2);
}

echo "fib(10) = " . fib(10) . "\\n";
`,
    },
  ],
};
