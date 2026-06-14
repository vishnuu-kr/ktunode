# Working with Node.js

<!-- SECTION_1_START -->
# Working with Node.js — Core Technical Definition & Intuitive Overview

> [!NOTE]
> **KTU 2024 Scheme (PECST742 — Module 3):** Node.js is the JavaScript **runtime environment** that executes JavaScript code **outside of a web browser**, primarily on the server side, powering modern back-end web applications, REST APIs, and real-time services.

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**Node.js** is an open-source, cross-platform, **server-side JavaScript runtime environment** built on Google Chrome's **V8 JavaScript Engine**. It uses an **event-driven, non-blocking I/O architecture** that makes it lightweight and efficient for building fast, scalable, network-driven applications.

Key components of the definition (as per KTU board examination standards):

- **Runtime Environment** — Provides the necessary infrastructure (memory, CPU bindings, file system access) to execute JavaScript outside a browser sandbox.
- **V8 Engine** — Compiles JavaScript directly into native machine code using **Just-In-Time (JIT)** compilation, originally developed by Google for Chrome.
- **libuv Library** — A multi-platform C library that provides the **event loop**, **thread pool**, and asynchronous I/O primitives.
- **Single-Threaded Event Loop** — A single main thread manages all client requests by delegating blocking operations to the worker thread pool and processing results via callbacks.

> [!IMPORTANT]
> **KTU Board Terminology — Memorize this phrase:** *"Node.js is a JavaScript runtime built on Chrome's V8 engine that uses an event-driven, non-blocking I/O model for building highly scalable server-side applications."* Examiners award 1 mark for this exact wording.

## 1.2 Conceptual Analogy / Intuition

> [!TIP]
> **The Restaurant Analogy** 🍽️
>
> Imagine a **single efficient head chef** (the *event loop thread*) in a busy restaurant. Customers keep ordering food.
>
> - **Traditional (Blocking) Approach (e.g., Apache + thread-per-request):** The chef takes one order, stands at the stove and waits until that dish is fully cooked *before taking the next order*. With 100 customers, you need 100 chefs (threads), each one wasting time standing idle.
> - **Node.js (Non-Blocking) Approach:** The chef takes an order, places it on the fire, sets a **timer callback**, and *immediately* takes the next order. When the timer rings, the chef comes back and serves the dish. **One chef can serve hundreds of customers efficiently.**
>
> This is precisely why Node.js handles **massive concurrent connections** with minimal memory overhead.

## 1.3 Node.js Execution Context — How a Script Runs

When you execute `node app.js`, the following sequence occurs:

1. The V8 engine **parses** the JavaScript source code into an Abstract Syntax Tree (AST).
2. V8's **Ignition interpreter** generates bytecode and the **TurboFan JIT compiler** optimizes hot code paths into machine code.
3. Node.js bindings load the **libuv event loop**.
4. The top-level code executes synchronously.
5. Pending asynchronous callbacks (I/O, timers) are queued and processed in subsequent loop iterations.

## 1.4 Standard Metrics & Constants (KTU High-Yield)

> [!IMPORTANT]
> **Critical Constants You Must Memorize:**
>
> - **Default Thread Pool Size (libuv):** `4 threads` (configurable via `UV_THREADPOOL_SIZE` environment variable, maximum **1024**).
> - **Default TCP Port for HTTP:** `80` (development uses `3000` or `8080`).
> - **Node.js Creator:** **Ryan Dahl** — released on **May 27, 2009**.
> - **Current Stable Major Versions:** LTS (Long-Term Support) lines — **18.x, 20.x, 22.x**.
> - **Default Package Manager:** **npm (Node Package Manager)** — world's largest software registry.

## 1.5 GeoGebra / Desmos Integration

> [!VISUALIZATION CONTROL]
> **Concept:** Event Loop Throughput vs. Thread-Based Throughput
>
> **GeoGebra / Desmos Input Equations:**
>
> * `f(x) = 1000 * (1 - exp(-0.5 * x))`  *(Blocking/Threaded model — diminishing returns)*
> * `g(x) = 100 * log(x + 1)`  *(Non-blocking/Event Loop model — sustained linear-ish growth)*
>
> **Visual Description:** Plot both curves on the same axes where *x* = number of concurrent clients and *y* = requests handled per second. Observe that the threaded model plateaus rapidly (context-switch overhead), while Node.js sustains growth due to non-blocking I/O. This visually demonstrates why **one Node.js process can outperform multi-threaded servers at high concurrency.**

## 1.6 Why Node.js Matters in 2024 Engineering Practice

- **Full-Stack JavaScript** — Same language on front-end (React/Angular) and back-end (Node.js).
- **Microservices & REST APIs** — Used by **Netflix, LinkedIn, PayPal, Uber, NASA**.
- **Real-Time Applications** — Chat apps, live notifications, collaborative tools (Socket.io).
- **IoT & Streaming** — Lightweight footprint suits edge devices.
- **Serverless Functions** — AWS Lambda, Azure Functions natively support Node.js.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Node.js Architecture Stack

Node.js is a layered architecture. The top layer is your JavaScript application; the bottom is the operating system kernel.

- **Application Layer (JavaScript Code):** Your `.js` files, npm modules.
- **Node.js Bindings (C++):** Wrappers that expose C/C++ APIs to JavaScript (`fs`, `http`, `crypto`).
- **V8 JavaScript Engine:** Compiles and executes JS into machine code.
- **libuv Library:** The *heart* of Node.js — manages the event loop, thread pool, and async I/O.
- **Operating System Kernel:** Underlying system calls for networking, file I/O, DNS.

## 2.2 The Event Loop — Phases of Execution (KTU High-Priority Topic)

The event loop is a **continuous cycle** with six distinct phases. Each phase has a **FIFO callback queue**.

| Phase | Code Name | Operations Handled |
|---|---|---|
| **Timers** | `timers` | Executes callbacks scheduled by `setTimeout()` and `setInterval()`. |
| **Pending Callbacks** | `pending` | I/O callbacks deferred from the previous loop iteration. |
| **Idle / Prepare** | `prepare` | Internal use only — invoked between I/O polling phases. |
| **Poll** | `poll` | Retrieves new I/O events; executes their callbacks. **This is the most critical phase.** |
| **Check** | `check` | Executes `setImmediate()` callbacks. |
| **Close Callbacks** | `close` | Executes `close` event handlers (e.g., `socket.on('close')`). |

> [!IMPORTANT]
> **`process.nextTick()` and `Promise.then()` are MICROTASKS**, executed **immediately after the current operation** completes, *before* the event loop continues to the next phase. They have **higher priority** than timers.

### 2.2.1 Event Loop Execution Algorithm

The event loop repeats the following pseudo-logic on every iteration:

1. If there are pending **microtasks** (Promise callbacks, `process.nextTick`), drain them completely.
2. Enter the **Timers** phase → execute any expired timer callbacks.
3. Enter the **Pending Callbacks** phase → execute deferred I/O callbacks.
4. Enter the **Poll** phase:
   - If the poll queue is not empty, iterate through callbacks synchronously until exhausted (or system-dependent limit reached).
   - If the poll queue is empty:
     - If there are `setImmediate()` callbacks queued → proceed to Check phase.
     - If no pending callbacks and no immediate → wait for new I/O events to arrive.
5. Enter the **Check** phase → execute all `setImmediate()` callbacks.
6. Enter the **Close Callbacks** phase → execute close handlers.
7. **Loop back** to step 1.

## 2.3 Module Systems in Node.js

Node.js supports two module systems:

### 2.3.1 CommonJS (Default, Synchronous Loading)

- Uses `require()` to import and `module.exports` to export.
- Modules are **cached** after the first load (singleton pattern).
- **Synchronous** file reads during import.

### 2.3.2 ES Modules (ECMAScript Standard, Asynchronous Loading)

- Uses `import` / `export` syntax.
- Must either use `.mjs` extension OR set `"type": "module"` in `package.json`.
- **Static analysis** enables tree-shaking.

## 2.4 Core Node.js Global Objects (KTU Board Favorite)

| Global Object | Purpose |
|---|---|
| `global` | The global namespace object (analogous to `window` in browsers). |
| `__dirname` | Absolute path of the **directory** containing the current module. |
| `__filename` | Absolute path of the **current file**. |
| `process` | Provides information about, and control over, the current Node.js process. |
| `console` | Standard output/error logging. |
| `Buffer` | Handles raw binary data outside the V8 heap. |
| `module` | Reference to the current module. |
| `exports` | Reference to `module.exports`. |

## 2.5 Process Object — Critical Properties

| Property / Method | Description |
|---|---|
| `process.pid` | Process ID of the current Node.js process. |
| `process.version` | Node.js version string (e.g., `'v20.10.0'`). |
| `process.platform` | OS platform: `'linux'`, `'darwin'`, `'win32'`. |
| `process.cwd()` | Returns the current working directory. |
| `process.env` | Object containing user environment variables. |
| `process.argv` | Command-line arguments array. |
| `process.exit([code])` | Terminates the process with an optional exit code. |
| `process.on('exit', cb)` | Registers a callback for the exit event. |

## 2.6 KTU Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> **CRITICAL: This table contains no vertical pipe `|` characters inside cell content to preserve markdown integrity.**

| Concept | Syntax / Formula | Description |
|---|---|---|
| Run a script | `node filename.js` | Executes a JavaScript file using Node. |
| Initialize project | `npm init -y` | Creates `package.json` with defaults. |
| Install package (local) | `npm install express` | Installs into `node_modules` and saves to `dependencies`. |
| Install package (dev) | `npm install --save-dev nodemon` | Installs as a development dependency. |
| Global install | `npm install -g package-name` | Installs system-wide. |
| Run script | `npm run scriptname` | Executes a custom script defined in `package.json`. |
| Uninstall | `npm uninstall package-name` | Removes package and updates `package.json`. |
| Import CommonJS | `const x = require('module')` | Synchronous module import. |
| Export CommonJS | `module.exports = value` | Default export. |
| Named Export CommonJS | `exports.fn = function() \textbraceleft...\textbraceright` | Multiple exports. |
| Import ES Module | `import x from 'module'` | Default import. |
| Named Import ES Module | `import \textbraceleft fn \textbraceright from 'module'` | Named import. |
| Set Timeout | `setTimeout(cb, ms)` | Schedules a one-time callback. |
| Set Interval | `setInterval(cb, ms)` | Schedules a repeating callback. |
| Set Immediate | `setImmediate(cb)` | Executes after I/O in the current iteration. |
| Next Tick | `process.nextTick(cb)` | Highest priority microtask. |
| Read file async | `await fs.promises.readFile(path, 'utf8')` | Asynchronous file read using promises. |
| Create HTTP server | `http.createServer((req, res) =\textgreater \textbraceleft...\textbraceright).listen(port)` | Starts a server on the specified port. |
| Send response | `res.statusCode = 200; res.end('Hello')` | Sends an HTTP response. |
| Process env | `process.env.NODE_ENV` | Access environment variable. |
| REPL exit | `.exit` or `Ctrl + C` (twice) | Exits the interactive REPL. |

## 2.7 Real-World Engineering Utility

- **API Rate Calculation:** For a server processing `N` requests per second with each request taking `T` milliseconds, the maximum **steady-state throughput** is bounded by Little's Law: $L = \lambda \cdot W$, where $L$ is concurrent requests, $\lambda$ is throughput, $W$ is average wait time.
- **Connection Memory Cost:** A traditional thread per connection consumes ~**1 MB of stack memory** per thread, while a Node.js connection uses ~**2 KB** — a **500x reduction** in memory footprint.
- **Production Use Case:** PayPal reported a **35% decrease in response time** and **40% reduction in file count** after migrating from Java to Node.js.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3.1 Verifying Node.js Installation

First, confirm Node.js is installed and check the version. This is the foundational setup step.

```bash
# Command to check Node.js version
node --version
# Expected output: v20.10.0 (or similar)

# Command to check npm version
npm --version
# Expected output: 10.2.3 (or similar)
```

**Logic Step:** The `--version` flag queries the installed binary and prints the version string defined in the binary's metadata.

## 3.2 Node.js REPL (Read-Eval-Print Loop)

The REPL is an **interactive shell** for testing JavaScript expressions line-by-line. Type `node` in the terminal to enter it.

```bash
$ node
Welcome to Node.js v20.10.0
Type ".help" for more information.
> 2 + 2
4
> const greet = (name) => `Hello, ${name}!`
undefined
> greet('KTU')
'Hello, KTU!'
> .exit
```

**REPL Special Commands (KTU Board Favorite):**

- `.help` — Lists all REPL commands.
- `.break` — Aborts multi-line input.
- `.clear` — Resets the REPL context.
- `.save filename` — Saves the current session to a file.
- `.load filename` — Loads a file into the REPL.
- `.exit` — Exits the REPL.

## 3.3 Writing and Executing Your First Node.js Script

**Step 1:** Create a file named `first-script.js`.

**Step 2:** Add the following fully functional code with strict type checking and error handling:

```javascript
// File: first-script.js
// Demonstrates core Node.js fundamentals with strict error handling

"use strict"; // Enforces strict mode for safer JavaScript

// 1. Access command-line arguments
const args: string[] = process.argv.slice(2);
console.log("Command-line arguments received:", args);

// 2. Use process information
console.log(`Node.js Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Process ID: ${process.pid}`);
console.log(`Current Working Directory: ${process.cwd()}`);

// 3. Use __filename and __dirname (CommonJS globals)
console.log(`File location: ${__filename}`);
console.log(`Directory location: ${__dirname}`);

// 4. Environment variables
const nodeEnv: string = process.env.NODE_ENV || "development";
console.log(`Environment: ${nodeEnv}`);

// 5. Function with error logging
const calculateFactorial = (n: number): number => {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

try {
  const input: number = parseInt(args[0] || "5", 10);
  const result: number = calculateFactorial(input);
  console.log(`Factorial of ${input} = ${result}`);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Error occurred:", error.message);
  } else {
    console.error("Unknown error occurred");
  }
}
```

**Step 3:** Execute the script.

```bash
node first-script.js 7
```

**Expected Output:**

```text
Command-line arguments received: [ '7' ]
Node.js Version: v20.10.0
Platform: linux
Process ID: 12345
Current Working Directory: /home/user/projects
File location: /home/user/projects/first-script.js
Directory location: /home/user/projects
Environment: development
Factorial of 7 = 5040
```

## 3.4 Working with the File System (fs Module)

The `fs` module is **THE most tested topic** in KTU exams for this module. Below is a comprehensive, production-grade example.

```javascript
// File: file-system-demo.js
import * as fs from 'fs';
import * as path from 'path';

// 3.4.1 Write a file using Promises API (modern, recommended)
const writeFileExample = async (): Promise<void> => {
  const filePath: string = path.join(__dirname, 'data.txt');
  const content: string = 'Hello, KTU Web Programming Students!\nWelcome to Node.js.';
  
  try {
    await fs.promises.writeFile(filePath, content, 'utf8');
    console.log(`[SUCCESS] File written at: ${filePath}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`[WRITE ERROR] ${error.message}`);
    }
  }
};

// 3.4.2 Read a file asynchronously
const readFileExample = async (): Promise<void> => {
  const filePath: string = path.join(__dirname, 'data.txt');
  
  try {
    const data: string = await fs.promises.readFile(filePath, 'utf8');
    console.log(`[READ CONTENT]\n${data}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`[READ ERROR] ${error.message}`);
    }
  }
};

// 3.4.3 Append to a file
const appendFileExample = async (): Promise<string> => {
  const filePath: string = path.join(__dirname, 'data.txt');
  const additionalContent: string = `\nAppended at: ${new Date().toISOString()}`;
  
  await fs.promises.appendFile(filePath, additionalContent, 'utf8');
  return filePath;
};

// 3.4.4 Check if file exists using fs.access
const fileExistsExample = async (filePath: string): Promise<boolean> => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

// 3.4.5 Get file metadata (stats)
const getFileStats = async (filePath: string): Promise<void> => {
  try {
    const stats: fs.Stats = await fs.promises.stat(filePath);
    console.log(`[FILE STATS]`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${stats.birthtime}`);
    console.log(`Modified: ${stats.mtime}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
    console.log(`Is File: ${stats.isFile()}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`[STAT ERROR] ${error.message}`);
    }
  }
};

// 3.4.6 Delete a file
const deleteFileExample = async (filePath: string): Promise<void> => {
  try {
    await fs.promises.unlink(filePath);
    console.log(`[DELETED] ${filePath}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`[DELETE ERROR] ${error.message}`);
    }
  }
};

// Main execution flow with sequential awaits
const main = async (): Promise<void> => {
  console.log('--- FILE SYSTEM DEMO START ---');
  
  await writeFileExample();
  await readFileExample();
  
  const savedPath: string = await appendFileExample();
  console.log(`[APPENDED] to ${savedPath}`);
  
  const exists: boolean = await fileExistsExample(savedPath);
  console.log(`File exists check: ${exists}`);
  
  await getFileStats(savedPath);
  
  // Uncomment the next line to delete the file
  // await deleteFileExample(savedPath);
  
  console.log('--- FILE SYSTEM DEMO END ---');
};

main().catch((err: Error) => console.error('Fatal Error:', err.message));
```

**Logic Walkthrough:**

- `fs.promises.writeFile()` — Creates or overwrites a file with the given content. Returns a `Promise<void>`.
- `fs.promises.readFile()` — Reads the entire file content. The `'utf8'` encoding returns a `string`; omitting it returns a `Buffer`.
- `fs.promises.appendFile()` — Appends content to an existing file (creates it if absent).
- `fs.promises.access()` — Tests file/directory permissions using `fs.constants.F_OK` (existence), `R_OK` (read), `W_OK` (write).
- `fs.promises.stat()` — Returns an `fs.Stats` object with file metadata.
- `fs.promises.unlink()` — Deletes a file (analogous to the Unix `rm` command).

## 3.5 Creating an HTTP Server (Foundation of Every Node.js Web App)

```javascript
// File: server.js
import * as http from 'http';
import * as url from 'url';

// Define port with environment fallback
const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = '127.0.0.1';

// Request handler with full type annotations
const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void => {
  // Parse the incoming URL
  const parsedUrl: url.UrlWithParsedQuery = url.parse(req.url || '', true);
  const pathname: string = parsedUrl.pathname || '/';
  const method: string = req.method || 'GET';
  
  // Set default headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  
  console.log(`[${new Date().toISOString()}] ${method} ${pathname}`);
  
  // Routing logic
  if (pathname === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: 'Welcome to the KTU Node.js Server!',
      endpoints: ['/', '/api', '/about', '/time']
    }));
  } else if (pathname === '/api' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      students: 60,
      course: 'Web Programming (PECST742)',
      module: 3
    }));
  } else if (pathname === '/time' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      currentTime: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({
      error: 'Route not found',
      path: pathname
    }));
  }
};

// Create the server
const server: http.Server = http.createServer(requestHandler);

// Start listening with error handling
server.listen(PORT, HOST, (): void => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log('Press Ctrl + C to stop the server.');
});

// Handle server-level errors
server.on('error', (err: Error): void => {
  console.error(`[SERVER ERROR] ${err.message}`);
  process.exit(1);
});

// Graceful shutdown
const gracefulShutdown = (signal: string): void => {
  console.log(`\n[SHUTDOWN] Received ${signal}. Closing server...`);
  server.close((): void => {
    console.log('[SHUTDOWN] Server closed cleanly.');
    process.exit(0);
  });
};

process.on('SIGINT', (): void => gracefulShutdown('SIGINT'));
process.on('SIGTERM', (): void => gracefulShutdown('SIGTERM'));
```

**Mathematical Representation of Request Flow:**

$$
\text{Request} \rightarrow \text{Event Loop} \rightarrow \text{Callback Queue} \rightarrow \text{Request Handler} \rightarrow \text{Response}
$$

**Step-by-step derivation of the response time formula** (for a single client):

$$
T_{\text{response}} = T_{\text{queue}} + T_{\text{processing}} + T_{\text{transmission}}
$$

where:

- $T_{\text{queue}}$ = time the request waits in the event loop queue (typically negligible for low load).
- $T_{\text{processing}}$ = time the JavaScript callback takes to execute (CPU-bound operations).
- $T_{\text{transmission}}$ = time to send the response over the network.

For $N$ concurrent clients, the **total waiting time** under a non-blocking model is:

$$
T_{\text{total}} = \sum_{i=1}^{N} \left( T_{\text{queue},i} + T_{\text{processing},i} + T_{\text{transmission},i} \right)
$$

> [!IMPORTANT]
> Since Node.js **does not block** during I/O, $T_{\text{queue},i}$ for I/O-bound operations approaches zero, yielding near-linear scalability up to the single thread's CPU limit.

## 3.6 Modules — CommonJS Implementation

```javascript
// File: math-operations.js (Custom Module - CommonJS)
// Define multiple exports using the exports object

const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

// Export individual functions
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
```

```javascript
// File: app.js (Consumer)
"use strict";

// CommonJS require - returns the exports object
const math = require('./math-operations.js');

const x: number = 20;
const y: number = 5;

console.log(`${x} + ${y} = ${math.add(x, y)}`);     // 25
console.log(`${x} - ${y} = ${math.subtract(x, y)}`); // 15
console.log(`${x} * ${y} = ${math.multiply(x, y)}`); // 100

try {
  console.log(`${x} / ${y} = ${math.divide(x, y)}`); // 4
  console.log(`${x} / 0 = ${math.divide(x, 0)}`);     // Throws error
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error(`Caught: ${err.message}`);
  }
}
```

**Logic Explanation:** When you call `require('./math-operations.js')`, Node.js:
1. Resolves the absolute path using the `Module._resolveFilename` algorithm.
2. Checks the require cache — if present, returns the cached `module.exports`.
3. Otherwise, reads the file synchronously, wraps it in a function (IIFE), and evaluates it.
4. Returns the `module.exports` object.

## 3.7 Event Emitter — Foundation of the Event Loop

```javascript
// File: emitter-demo.js
import { EventEmitter } from 'events';

// Create a custom event emitter instance
class TaskRunner extends EventEmitter {
  private taskCount: number = 0;
  
  public runTask(taskName: string): void {
    this.taskCount += 1;
    console.log(`Task #${this.taskCount} started: ${taskName}`);
    
    // Simulate async work
    setImmediate((): void => {
      this.emit('complete', { id: this.taskCount, name: taskName });
    });
  }
}

const runner: TaskRunner = new TaskRunner();

// Register event listeners
runner.on('complete', (data: { id: number; name: string }): void => {
  console.log(`Listener 1: Task "${data.name}" (ID: ${data.id}) completed.`);
});

runner.on('complete', (data: { id: number; name: string }): void => {
  console.log(`Listener 2: Notifying administrator about task ${data.id}.`);
});

// Execute tasks
runner.runTask('Database Backup');
runner.runTask('Email Digest');
runner.runTask('Report Generation');
```

## 3.8 npm (Node Package Manager) — Complete Workflow

**Step 1:** Initialize a project.

```bash
mkdir ktu-web-app && cd ktu-web-app
npm init -y
```

**Step 2:** Install a package (e.g., the `chalk` library for colored terminal output).

```bash
npm install chalk
```

This creates a `node_modules` folder and adds `chalk` to the `dependencies` section of `package.json`.

**Step 3:** Install a development dependency (e.g., `nodemon` for auto-restart on file changes).

```bash
npm install --save-dev nodemon
```

**Step 4:** Add custom scripts to `package.json`.

```json
{
  "name": "ktu-web-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"No tests yet\" && exit 0"
  },
  "dependencies": {
    "chalk": "^5.3.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

**Step 5:** Run the custom script.

```bash
npm run dev
```

**Step 6:** Uninstall a package.

```bash
npm uninstall chalk
```

## 3.9 Asynchronous Patterns — async/await in Node.js

```javascript
// File: async-demo.js
import * as fs from 'fs';

const readMultipleFiles = async (filePaths: string[]): Promise<string[]> => {
  const contents: string[] = [];
  
  // Sequential reading (one after another)
  for (const filePath of filePaths) {
    try {
      const data: string = await fs.promises.readFile(filePath, 'utf8');
      contents.push(data);
      console.log(`Read: ${filePath} (${data.length} bytes)`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Failed to read ${filePath}: ${error.message}`);
      }
    }
  }
  
  return contents;
};

const readFilesParallel = async (filePaths: string[]): Promise<string[]> => {
  // Parallel reading using Promise.all
  const readPromises: Promise<string>[] = filePaths.map(
    (filePath: string): Promise<string> => fs.promises.readFile(filePath, 'utf8')
  );
  
  return await Promise.all(readPromises);
};

// Main execution
const main = async (): Promise<void> => {
  const files: string[] = ['file1.txt', 'file2.txt', 'file3.txt'];
  
  console.log('--- Sequential Read ---');
  const sequential: string[] = await readMultipleFiles(files);
  console.log(`Total content length: ${sequential.reduce((sum, c) => sum + c.length, 0)}`);
  
  console.log('--- Parallel Read ---');
  try {
    const parallel: string[] = await readFilesParallel(files);
    console.log(`Total content length: ${parallel.reduce((sum, c) => sum + c.length, 0)}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Parallel read failed: ${error.message}`);
    }
  }
};

main().catch((err: Error) => console.error('Fatal:', err.message));
```

**Execution Time Comparison:**

$$
T_{\text{sequential}} = \sum_{i=1}^{N} T_{\text{read},i} = N \cdot T_{\text{avg}}
$$

$$
T_{\text{parallel}} \approx \max(T_{\text{read},1}, T_{\text{read},2}, \dots, T_{\text{read},N}) = T_{\text{max}}
$$

For $N = 3$ files each taking 100 ms:

- Sequential: $T_{\text{sequential}} = 3 \cdot 100 = 300 \text{ ms}$.
- Parallel: $T_{\text{parallel}} \approx 100 \text{ ms}$ — a **3x speedup**.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Node.js High-Level Architecture

```mermaid
graph TD
    A[JavaScript Application Code] --> B[Node.js API Modules]
    B --> C[Node.js Bindings C++]
    C --> D[V8 JavaScript Engine]
    C --> E[libuv Library]
    D --> F[Operating System Kernel]
    E --> F
    F --> G[Hardware CPU and Memory]
    B --> H[NPM Package Registry]
    H --> B
```

> [!IMPORTANT]
> **Diagram Interpretation:** Your JavaScript code calls Node.js API functions. The bindings layer (C++) translates these calls into V8 engine instructions and libuv async operations. libuv then interfaces with the OS kernel to perform I/O. NPM provides external packages that extend your application.

## 4.2 Event Loop Phases — Sequential Flow

```mermaid
flowchart TD
    start([Program Start]) --> init[Initialize V8 and libuv]
    init --> top[Execute Top-Level Code]
    top --> micro{Microtasks Queue Empty?}
    micro -->|No| drainmicro[Drain Microtasks: process.nextTick and Promise]
    drainmicro --> micro
    micro -->|Yes| timers[Timers Phase: setTimeout and setInterval]
    timers --> pending[Pending Callbacks Phase]
    pending --> idle[Idle and Prepare Phase Internal]
    idle --> poll[Poll Phase: I/O Callbacks]
    poll --> check[Check Phase: setImmediate]
    check --> close[Close Callbacks Phase]
    close --> micro
    close --> exit([Program End])
```

## 4.3 Request Processing Flow in an HTTP Server

```mermaid
sequenceDiagram
    participant Client
    participant NodeMain as Node.js Main Thread
    participant EventLoop as Event Loop
    participant WorkerPool as libuv Thread Pool
    participant FileSys as File System / Database

    Client->>NodeMain: HTTP Request Arrives
    NodeMain->>EventLoop: Register Request Callback
    EventLoop->>NodeMain: Dequeue Callback (Poll Phase)
    NodeMain->>NodeMain: Execute Handler (Synchronous)
    NodeMain->>WorkerPool: Delegate I/O Operation
    WorkerPool->>FileSys: Read File / Query DB
    FileSys-->>WorkerPool: Return Data
    WorkerPool-->>EventLoop: Callback with Result
    EventLoop->>NodeMain: Execute Result Callback
    NodeMain-->>Client: HTTP Response Sent
```

## 4.4 Module Loading Sequence (CommonJS)

```mermaid
graph LR
    A[require call] --> B{Path Resolved}
    B --> C{Already Cached?}
    C -->|Yes| D[Return Cached module.exports]
    C -->|No| E[Read File from Disk]
    E --> F[Wrap in IIFE Function]
    F --> G[Execute Module Code]
    G --> H[Store in module.exports]
    H --> I[Add to Require Cache]
    I --> D
```

## 4.5 File System Operations — Decision Matrix

| Operation | Sync Method | Async (Callback) | Async (Promise) | Use Case |
|---|---|---|---|---|
| **Read File** | `fs.readFileSync()` | `fs.readFile()` | `fs.promises.readFile()` | Loading config, templates |
| **Write File** | `fs.writeFileSync()` | `fs.writeFile()` | `fs.promises.writeFile()` | Saving logs, user data |
| **Append File** | `fs.appendFileSync()` | `fs.appendFile()` | `fs.promises.appendFile()` | Log files |
| **Delete File** | `fs.unlinkSync()` | `fs.unlink()` | `fs.promises.unlink()` | Cleanup |
| **Check Exists** | `fs.existsSync()` | `fs.exists()` | `fs.promises.access()` | Pre-flight checks |
| **Get Stats** | `fs.statSync()` | `fs.stat()` | `fs.promises.stat()` | File metadata |

> [!TIP]
> **Best Practice Rule:** Use **async methods** in production servers to avoid blocking the event loop. Use **sync methods** only in CLI tools, startup scripts, or one-time initialization code.

## 4.6 npm Workflow — Block-Level Functional Architecture

```mermaid
graph TD
    A[Developer Terminal] --> B[npm CLI]
    B --> C{Query Package Registry}
    C --> D[npmjs.com Registry]
    D --> E[Fetch Package Tarball]
    E --> F[Extract to node_modules]
    F --> G[Update package.json]
    G --> H[Generate package-lock.json]
    B --> I[Run Custom Scripts]
    I --> J[Execute package.json scripts]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Question 1: Core Definition of Node.js

**[KTU University Exam — July 2023]** — *CO1, Remember*

**Question:** Define Node.js. List any four features of Node.js.

**Model Answer:**

> Node.js is an open-source, cross-platform, server-side JavaScript runtime environment built on Google Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

> **[Defining Node.js: 2 Marks]**
> **[Listing four features: 1 Mark — 0.25 each]**

**Four Features of Node.js:**

1. **Asynchronous and Event-Driven** — All APIs of the Node.js library are asynchronous (non-blocking). A Node.js-based server never waits for an API to return data; it moves to the next API call.
2. **Single-Threaded but Highly Scalable** — Uses a single-threaded event loop model. The event mechanism helps the server respond in a non-blocking way, making it highly scalable.
3. **Very Fast** — Built on Google Chrome's V8 JavaScript Engine, which compiles JavaScript directly into native machine code, resulting in extremely fast execution.
4. **No Buffering** — Node.js applications never buffer data. They simply output the data in chunks.

---

### Question 2: Event Loop Explanation

**[KTU University Exam — Dec 2023]** — *CO1, Understand*

**Question:** What is the Node.js event loop? Explain any three of its phases.

**Model Answer:**

> The event loop is the **heart of Node.js** — a continuously running loop that picks up callback functions from the event queue and executes them one by one. It enables non-blocking I/O operations despite Node.js being single-threaded.

> **[Defining the event loop: 1 Mark]**
> **[Explaining three phases: 2 Marks — 0.66 each]**

**Three Phases of the Event Loop:**

1. **Timers Phase:** This phase executes callbacks scheduled by `setTimeout()` and `setInterval()`. A timer specifies the *threshold* (minimum time) after which the callback may execute, not the exact time.
2. **Poll Phase:** This phase retrieves new I/O events and executes their callbacks. If there are no pending callbacks, it will block here waiting for new I/O events to be added. This is the most critical phase as it handles the bulk of I/O.
3. **Check Phase:** This phase executes callbacks scheduled by `setImmediate()`. These callbacks are executed immediately after the poll phase completes, before the event loop continues.

---

## Part B — Long Answer Questions (14 Marks Each)

### Question Choice A: HTTP Server with File System Operations

**[KTU University Exam — July 2024]** — *CO1, CO2, CO3 | Apply / Create*

**(a)** With a neat diagram, explain the architecture of Node.js. List and explain any five core modules of Node.js. **[7 Marks]**

**(b)** Write a complete Node.js program to create an HTTP server that reads the contents of a text file `student.txt` from the file system and returns the content as the HTTP response. Handle all error cases properly. **[7 Marks]**

---

#### Solution to Part (a)

**Node.js Architecture Diagram (Block-Level Representation):**

```mermaid
graph TD
    A[JavaScript Application] --> B[Node.js Standard Library]
    B --> C[Node.js Core Modules]
    C --> D[C++ Bindings Layer]
    D --> E[V8 JavaScript Engine]
    D --> F[libuv C Library]
    E --> G[Operating System]
    F --> G
    G --> H[Hardware]
```

**Five Core Modules Explanation:**

| Module | Purpose | Example Method |
|---|---|---|
| `http` | Creates HTTP server and client. | `http.createServer()` |
| `fs` | File system operations (read, write, delete). | `fs.readFile()` |
| `path` | Handles and transforms file paths. | `path.join()` |
| `os` | Provides OS-related utility methods. | `os.platform()` |
| `events` | Implements the EventEmitter pattern. | `EventEmitter.on()` |

**Valuation Key Points:**

- **[Neat architecture diagram with all layers: 3 Marks]**
- **[Correctly listing five core modules: 2 Marks — 0.4 each]**
- **[Brief explanation of each module's purpose: 2 Marks — 0.4 each]**

---

#### Solution to Part (b)

**Complete Node.js Program:**

```javascript
// File: student-server.js
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const PORT: number = 3000;
const HOST: string = '127.0.0.1';
const FILE_NAME: string = 'student.txt';
const FILE_PATH: string = path.join(__dirname, FILE_NAME);

const requestHandler = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<void> => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/' && req.method === 'GET') {
    try {
      // Check if file exists
      await fs.promises.access(FILE_PATH, fs.constants.F_OK);
      
      // Read the file asynchronously
      const data: string = await fs.promises.readFile(FILE_PATH, 'utf8');
      
      res.statusCode = 200;
      res.end(`Student Data:\n${data}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes('ENOENT')) {
          res.statusCode = 404;
          res.end(`Error: File "${FILE_NAME}" not found.`);
        } else {
          res.statusCode = 500;
          res.end(`Server Error: ${error.message}`);
        }
      }
    }
  } else {
    res.statusCode = 404;
    res.end('Route not found. Use GET / to read the file.');
  }
};

const server: http.Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    requestHandler(req, res).catch((err: Error) => {
      console.error('Unhandled error:', err.message);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  }
);

server.listen(PORT, HOST, (): void => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
```

**Valuation Key Points:**

- **[Proper imports and constants: 1 Mark]**
- **[Correct use of `http.createServer()`: 1 Mark]**
- **[Asynchronous file read with `fs.promises.readFile()`: 2 Marks]**
- **[Error handling with try-catch and proper HTTP status codes: 2 Marks]**
- **[Correct response handling with `res.end()`: 1 Mark]**

---

### Question Choice B: Modules, npm, and Event Emitter

**[KTU University Exam — Dec 2024]** — *CO2, CO3 | Apply / Analyze*

**(a)** Explain the CommonJS module system in Node.js. Write a program demonstrating how to create a custom module that exports multiple functions and import it into another file. **[7 Marks]**

**(b)** What is npm? List and explain any five important npm commands. Write a Node.js program using the `events` module to create a custom event emitter that emits a 'data-received' event when data is processed. **[7 Marks]**

---

#### Solution to Part (a)

**CommonJS Module System Explanation:**

The CommonJS module system is the **default module specification** used by Node.js. It uses the `require()` function to import modules and `module.exports` (or `exports`) to export values. Modules are **loaded synchronously** and **cached** after the first load, ensuring that subsequent `require()` calls return the same instance (singleton pattern).

> **[Explaining CommonJS: 2 Marks]**
> **[Custom module code: 2.5 Marks]**
> **[Importing and using the module: 2.5 Marks]**

**Custom Module — `stringUtils.js`:**

```javascript
// File: stringUtils.js (Custom Module)

const reverseString = (input: string): string => {
  return input.split('').reverse().join('');
};

const countVowels = (input: string): number => {
  const matches: RegExpMatchArray | null = input.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
};

const toTitleCase = (input: string): string => {
  return input
    .toLowerCase()
    .split(' ')
    .map((word: string): string => 
      word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ''
    )
    .join(' ');
};

const isPalindrome = (input: string): boolean => {
  const cleaned: string = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};

// Export all functions as named exports
exports.reverseString = reverseString;
exports.countVowels = countVowels;
exports.toTitleCase = toTitleCase;
exports.isPalindrome = isPalindrome;
```

**Importing and Using the Module — `app.js`:**

```javascript
// File: app.js (Consumer Module)
"use strict";

const stringUtils = require('./stringUtils.js');

const testString: string = "Hello KTU Students";

console.log(`Original: ${testString}`);
console.log(`Reversed: ${stringUtils.reverseString(testString)}`);
console.log(`Vowel count: ${stringUtils.countVowels(testString)}`);
console.log(`Title case: ${stringUtils.toTitleCase(testString)}`);
console.log(`Is "madam" a palindrome? ${stringUtils.isPalindrome("madam")}`);
console.log(`Is "hello" a palindrome? ${stringUtils.isPalindrome("hello")}`);
```

**Expected Output:**

```text
Original: Hello KTU Students
Reversed: stnedutS UTK olleH
Vowel count: 4
Title case: Hello Ktu Students
Is "madam" a palindrome? true
Is "hello" a palindrome? false
```

---

#### Solution to Part (b)

**npm Definition:**

> npm (Node Package Manager) is the **default package manager** for Node.js and the **world's largest software registry**. It allows developers to install, share, manage, and publish open-source JavaScript packages from the [npmjs.com](https://www.npmjs.com) registry.

> **[Defining npm: 1 Mark]**
> **[Five npm commands with explanation: 2 Marks — 0.4 each]**
> **[Event Emitter program: 4 Marks]**

**Five Important npm Commands:**

| Command | Purpose |
|---|---|
| `npm init` | Initializes a new `package.json` file interactively. |
| `npm install <pkg>` | Downloads and installs a package into `node_modules`. |
| `npm install --save-dev <pkg>` | Installs a package as a development dependency. |
| `npm uninstall <pkg>` | Removes a package and updates `package.json`. |
| `npm run <script>` | Executes a custom script defined in `package.json`. |

**Custom Event Emitter Program:**

```javascript
// File: data-processor.js
import { EventEmitter } from 'events';

// Custom class extending EventEmitter
class DataProcessor extends EventEmitter {
  private dataQueue: string[];
  
  constructor() {
    super();
    this.dataQueue = [];
  }
  
  // Add data to the queue and emit events
  public processData(data: string): void {
    console.log(`[PROCESSING] Received: "${data}"`);
    this.dataQueue.push(data);
    
    // Simulate async processing
    setImmediate((): void => {
      const processed: string = data.toUpperCase();
      this.emit('data-received', {
        original: data,
        processed: processed,
        queueLength: this.dataQueue.length,
        timestamp: new Date().toISOString()
      });
    });
  }
}

// Create an instance
const processor: DataProcessor = new DataProcessor();

// Register multiple listeners for the 'data-received' event
processor.on('data-received', (payload: {
  original: string;
  processed: string;
  queueLength: number;
  timestamp: string;
}): void => {
  console.log(`[LISTENER 1] Processed: "${payload.processed}"`);
  console.log(`[LISTENER 1] Queue length: ${payload.queueLength}`);
});

processor.on('data-received', (payload: {
  original: string;
  processed: string;
  queueLength: number;
  timestamp: string;
}): void => {
  console.log(`[LISTENER 2] Timestamp: ${payload.timestamp}`);
});

// Emit events by processing data
processor.processData('KTU Module 3');
processor.processData('Node.js Event Emitter');
processor.processData('Web Programming Exam');
```

**Expected Output:**

```text
[PROCESSING] Received: "KTU Module 3"
[LISTENER 1] Processed: "KTU MODULE 3"
[LISTENER 1] Queue length: 1
[LISTENER 2] Timestamp: 2024-...
[PROCESSING] Received: "Node.js Event Emitter"
[LISTENER 1] Processed: "NODE.JS EVENT EMITTER"
[LISTENER 1] Queue length: 2
[LISTENER 2] Timestamp: 2024-...
[PROCESSING] Received: "Web Programming Exam"
[LISTENER 1] Processed: "WEB PROGRAMMING EXAM"
[LISTENER 1] Queue length: 3
[LISTENER 2] Timestamp: 2024-...
```

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
>
> 1. **Do not** use `fs.readFileSync()` in an HTTP server handler — this **blocks the event loop** and is the #1 reason students lose 2 marks.
> 2. **Always** handle the `error` event when working with EventEmitter — unhandled errors crash the Node.js process and lose 1 mark.
> 3. **Forgetting to call `res.end()`** leaves the client hanging and wastes 1 mark in the HTTP question.
> 4. **Confusing `module.exports` and `exports`** — assigning a new object to `exports` (e.g., `exports = function() {}`) **breaks the reference**; always use `module.exports` for reassignment.
> 5. **Missing `Content-Type` header** in HTTP responses — KTU examiners specifically look for this in the server program and deduct 0.5 marks.
> 6. **In npm questions**, students often write `npm install` without specifying a package name — this is wrong; always write `npm install <package-name>`.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist for "Working with Node.js":**

- **Node.js** is a JavaScript runtime built on Chrome's **V8 engine** using an **event-driven, non-blocking I/O model**.
- **Creator:** Ryan Dahl (2009). **Package Manager:** npm.
- **V8 Engine:** Compiles JavaScript to native machine code using JIT compilation → fast execution.
- **libuv:** C library that provides the event loop and thread pool for async I/O operations.
- **Event Loop Phases (in order):** Timers → Pending Callbacks → Idle/Prepare → Poll → Check → Close Callbacks.
- **Microtasks** (`process.nextTick`, `Promise.then`) have **higher priority** than all event loop phases and execute after every phase boundary.
- **Single-Threaded Nature:** Node.js uses one main thread for JavaScript execution; heavy CPU work blocks all clients. Use **Worker Threads** for CPU-bound parallelism.
- **Default Thread Pool Size:** 4 threads (configurable via `UV_THREADPOOL_SIZE`, max 1024).
- **Two Module Systems:** CommonJS (`require`/`module.exports`, synchronous, default) and ES Modules (`import`/`export`, asynchronous, requires `.mjs` or `"type": "module"`).
- **Module Caching:** Once loaded, a module's `module.exports` is cached. Subsequent `require()` calls return the same reference.
- **HTTP Server:** Created with `http.createServer((req, res) => { ... }).listen(port)`. The request handler receives `IncomingMessage` and `ServerResponse` objects.
- **HTTP Response Methods:** `res.statusCode = 200`, `res.setHeader('Content-Type', '...')`, `res.end(data)`.
- **fs Module Best Practice:** Always use `fs.promises.*` (Promise-based API) or callback API in production servers. Avoid sync methods in request handlers.
- **fs Key Methods:** `readFile`, `writeFile`, `appendFile`, `unlink` (delete), `stat` (metadata), `access` (exists check).
- **Event Emitter:** All Node.js async I/O is built on the EventEmitter pattern. Use `emitter.on('eventName', callback)` to listen and `emitter.emit('eventName', data)` to trigger.
- **REPL Commands:** `.help`, `.exit`, `.save`, `.load`, `.break`, `.clear`.
- **Process Object:** `process.argv` (CLI args), `process.env` (environment vars), `process.cwd()` (current directory), `process.pid` (process ID), `process.version` (Node version), `process.exit(code)`.
- **Global Objects:** `__dirname`, `__filename`, `global`, `console`, `Buffer`, `module`, `exports`.
- **npm Workflow:** `npm init -y` → `npm install <pkg>` → `npm run <script>` → `npm uninstall <pkg>`.
- **package.json:** Central project manifest defining dependencies, dev dependencies, and custom scripts.
- **package-lock.json:** Auto-generated lock file that pins exact dependency versions for reproducible installs.
- **Node.js vs Browser JavaScript:** Node.js has access to the file system, OS, and network; browsers have `document` and `window`. Node.js has no DOM.
- **SetImmediate vs setTimeout(fn, 0):** `setImmediate` runs **after** I/O in the Check phase; `setTimeout(fn, 0)` runs in the Timers phase. The order between them is **non-deterministic** when called from the main module context.
- **Blocking Detection Rule:** If a function name ends with `Sync` (e.g., `readFileSync`), it is **synchronous** and blocks the event loop.
- **Production Tip:** Use `nodemon` (`npm install -g nodemon`) during development for automatic server restart on file changes.

<!-- SECTION_5_END -->
