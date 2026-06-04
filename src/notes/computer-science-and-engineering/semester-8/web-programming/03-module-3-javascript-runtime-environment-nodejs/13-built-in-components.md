---
title: "Built- in components"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc44"
status: "completed"
scrapedAt: "2026-05-20T17:28:35.022Z"
---
# Module 3: JavaScript Runtime Environment: Node.js

## Topic: Built-in Components

This module explores the core components that make Node.js a powerful and versatile JavaScript runtime environment. We'll delve into the essential built-in modules that provide functionalities for various tasks, from file system operations to network communication.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the purpose and functionality of core Node.js built-in modules.**
*   **Utilize the `os` module for operating system information.**
*   **Interact with the file system using the `fs` module for reading, writing, and managing files.**
*   **Handle paths effectively with the `path` module.**
*   **Manage processes and child processes with the `process` and `child_process` modules.**
*   **Implement event-driven programming using the `events` module.**
*   **Understand and utilize the `http` and `https` modules for creating web servers and making requests.**
*   **Work with buffers and binary data using the `buffer` module.**
*   **Explore other essential built-in modules and their use cases.**

---

### 1. Introduction to Node.js Built-in Modules

Node.js provides a rich set of built-in modules that extend JavaScript's capabilities beyond the browser. These modules are readily available without the need for external installations and are fundamental to building server-side applications.

*   **What are Built-in Modules?**
    *   Pre-compiled C++ libraries that are part of the Node.js distribution.
    *   They offer low-level access to system resources and functionalities.
    *   Examples include file system access, networking, operating system information, and event handling.
*   **Why are they important?**
    *   They provide essential functionalities for server-side development that are not available in the browser's JavaScript environment.
    *   They are highly optimized for performance.
    *   They form the foundation for many higher-level Node.js libraries and frameworks.
*   **How to use them?**
    *   Using the `require()` function.
    *   `const moduleName = require('module-name');`

---

### 2. The `os` Module: Operating System Information

The `os` module provides information about the operating system on which Node.js is running.

*   **Key functionalities:**
    *   **CPU Architecture:** `os.arch()` - Returns the CPU architecture of the Node.js process.
    *   **Number of CPU Cores:** `os.cpus()` - Returns an array containing information about each CPU core.
    *   **End-of-Line Marker:** `os.EOL` - The end-of-line marker for the current OS ('\n' on POSIX, '\r\n' on Windows).
    *   **Hostname:** `os.hostname()` - Returns the network name of the computer.
    *   **Platform:** `os.platform()` - Returns the operating system platform name (e.g., 'linux', 'darwin', 'win32').
    *   **Total System Memory:** `os.totalmem()` - Returns the total amount of system memory in bytes.
    *   **Free System Memory:** `os.freemem()` - Returns the total amount of free system memory in bytes.
    *   **User Information:** `os.userInfo()` - Returns a `userInfo` object containing the username, UID, GID, and shell of the current user.
    *   **Network Interfaces:** `os.networkInterfaces()` - Returns an object containing network interface details.

*   **Example:**

    ```javascript
    const os = require('os');

    console.log(`CPU Architecture: ${os.arch()}`);
    console.log(`Number of CPU Cores: ${os.cpus().length}`);
    console.log(`End of Line Marker: ${JSON.stringify(os.EOL)}`);
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`Total Memory: ${os.totalmem()} bytes`);
    console.log(`Free Memory: ${os.freemem()} bytes`);
    console.log(`User Info: ${JSON.stringify(os.userInfo())}`);
    console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces())}`);
    ```

---

### 3. The `fs` Module: File System Operations

The `fs` module provides a comprehensive set of asynchronous and synchronous methods for interacting with the file system.

*   **Key functionalities:**
    *   **Reading Files:**
        *   `fs.readFile(path, [options], callback)`: Asynchronously reads the entire contents of a file.
        *   `fs.readFileSync(path, [options])`: Synchronously reads the entire contents of a file.
    *   **Writing Files:**
        *   `fs.writeFile(path, data, [options], callback)`: Asynchronously writes data to a file, replacing the file if it already exists.
        *   `fs.writeFileSync(path, data, [options])`: Synchronously writes data to a file.
    *   **Appending to Files:**
        *   `fs.appendFile(path, data, [options], callback)`: Asynchronously appends data to a file, creating the file if it doesn't exist.
        *   `fs.appendFileSync(path, data, [options])`: Synchronously appends data to a file.
    *   **Deleting Files:**
        *   `fs.unlink(path, callback)`: Asynchronously deletes a file.
        *   `fs.unlinkSync(path)`: Synchronously deletes a file.
    *   **Creating Directories:**
        *   `fs.mkdir(path, [options], callback)`: Asynchronously creates a directory.
        *   `fs.mkdirSync(path, [options])`: Synchronously creates a directory.
    *   **Reading Directory Contents:**
        *   `fs.readdir(path, [options], callback)`: Asynchronously reads the contents of a directory.
        *   `fs.readdirSync(path, [options])`: Synchronously reads the contents of a directory.
    *   **Checking File/Directory Existence:**
        *   `fs.exists(path, callback)`: (Deprecated in favor of `fs.access()`) Checks if a file or directory exists.
        *   `fs.access(path, [mode], callback)`: Tests a user's permissions for the file.
    *   **Getting File Stats:**
        *   `fs.stat(path, callback)`: Asynchronously gets file status information.
        *   `fs.statSync(path)`: Synchronously gets file status information.

*   **Asynchronous vs. Synchronous:**
    *   **Asynchronous:** Non-blocking. The operation is performed in the background, and a callback function is executed upon completion. This is generally preferred for I/O operations to keep the event loop free.
    *   **Synchronous:** Blocking. The operation must complete before the next line of code is executed. This can lead to performance issues if not used carefully.

*   **Example (Asynchronous Read and Write):**

    ```javascript
    const fs = require('fs');

    // Read a file
    fs.readFile('hello.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);

      // Write to a file
      const newData = data.toUpperCase();
      fs.writeFile('output.txt', newData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File written successfully!');
      });
    });
    ```

*   **Example (Synchronous Read and Write):**

    ```javascript
    const fs = require('fs');

    try {
      const data = fs.readFileSync('hello.txt', 'utf8');
      console.log('File content:', data);

      const newData = data.toLowerCase();
      fs.writeFileSync('output_sync.txt', newData, 'utf8');
      console.log('File written successfully (sync)!');
    } catch (err) {
      console.error('Error:', err);
    }
    ```

*   **Important Note:** Always handle errors when working with the `fs` module, especially for I/O operations.

---

### 4. The `path` Module: Handling File Paths

The `path` module provides utilities for working with file and directory paths in a cross-platform way.

*   **Key functionalities:**
    *   **Joining Path Segments:** `path.join([...paths])` - Joins all given path segments together using the platform-specific separator.
    *   **Resolving Path:** `path.resolve([...paths])` - Resolves a sequence of paths or path segments into an absolute path.
    *   **Extracting Filename:** `path.basename(path[, ext])` - Returns the last portion of a path.
    *   **Extracting Directory Name:** `path.dirname(path)` - Returns the directory name of a path.
    *   **Extracting File Extension:** `path.extname(path)` - Returns the extension of the path, from the last '.' to the end of the string in the last portion of the path.
    *   **Normalizing a Path:** `path.normalize(path)` - Normalizes a path, resolving '..', '.', and duplicate path segments.
    *   **Checking if Path is Absolute:** `path.isAbsolute(path)` - Determines whether the given path is an absolute path.

*   **Example:**

    ```javascript
    const path = require('path');

    const filePath = '/usr/local/bin/node.exe';

    console.log(`Basename: ${path.basename(filePath)}`); // node.exe
    console.log(`Dirname: ${path.dirname(filePath)}`);   // /usr/local/bin
    console.log(`Extension: ${path.extname(filePath)}`); // .exe

    const joinedPath = path.join(__dirname, 'data', 'file.json');
    console.log(`Joined Path: ${joinedPath}`);

    const absolutePath = path.resolve('data', 'file.json');
    console.log(`Resolved Path: ${absolutePath}`);

    console.log(`Is Absolute: ${path.isAbsolute(filePath)}`); // true
    console.log(`Is Absolute: ${path.isAbsolute('relative/path')}`); // false
    ```

*   **Importance of `__dirname` and `__filename`:**
    *   `__dirname`: The directory name of the currently executing script.
    *   `__filename`: The file name of the currently executing script.
    *   These are global variables available in Node.js modules and are crucial for constructing correct paths.

---

### 5. The `process` Module: Managing Processes

The `process` module provides information about, and control over, the current Node.js process.

*   **Key functionalities:**
    *   **Process ID (PID):** `process.pid` - The PID of the current Node.js process.
    *   **Platform:** `process.platform` - The operating system platform.
    *   **Node.js Version:** `process.version` - The Node.js version string.
    *   **Environment Variables:** `process.env` - An object containing the user environment variables.
    *   **Command Line Arguments:** `process.argv` - An array containing the command-line arguments passed to the Node.js process. `process.argv[0]` is the node executable path, `process.argv[1]` is the path to the script being executed, and subsequent elements are the actual arguments.
    *   **Exiting the Process:** `process.exit([code])` - Terminates the Node.js process synchronously. A `code` of 0 indicates success, while a non-zero code indicates an error.
    *   **Current Working Directory:** `process.cwd()` - Returns the current working directory of the Node.js process.
    *   **Emitting Events:** `process.on(eventName, listener)` - Registers a listener for a specific event. Common events include:
        *   `'exit'`: Emitted when the Node.js process is about to exit.
        *   `'uncaughtException'`: Emitted when an uncaught JavaScript exception bubbles up to the event loop.
        *   `'SIGINT'`: Emitted when the process receives an interrupt signal (e.g., Ctrl+C).

*   **Example:**

    ```javascript
    console.log(`Process ID: ${process.pid}`);
    console.log(`Platform: ${process.platform}`);
    console.log(`Node.js Version: ${process.version}`);
    console.log('Environment Variables:', process.env);
    console.log('Command Line Arguments:', process.argv);
    console.log(`Current Working Directory: ${process.cwd()}`);

    // Handle SIGINT (Ctrl+C)
    process.on('SIGINT', () => {
      console.log('\nReceived SIGINT. Exiting gracefully...');
      process.exit(0); // Exit with success code
    });

    // Example of exiting with an error code
    // setTimeout(() => {
    //   console.log('Exiting with an error...');
    //   process.exit(1); // Exit with error code
    // }, 2000);
    ```

---

### 6. The `child_process` Module: Spawning Processes

The `child_process` module allows you to spawn child processes and interact with them. This is useful for running external commands or separating tasks into different processes.

*   **Key functionalities:**
    *   **`spawn(command, [args], [options])`:** Spawns a new process using the given command. It returns a `ChildProcess` object with streams (`stdin`, `stdout`, `stderr`) for communication. This is generally preferred for long-running processes or when dealing with large amounts of data as it streams.
    *   **`exec(command, [options], callback)`:** Executes a command in a shell and buffers the output. It's suitable for short commands with small output.
    *   **`execFile(file, [args], [options], callback)`:** Similar to `exec`, but it executes a file directly without spawning a shell. This is generally more efficient and safer than `exec` when you know the exact executable.
    *   **`fork(modulePath, [args], [options])`:** A special method for spawning new Node.js processes. It's a way to create child processes that are also Node.js processes, enabling inter-process communication (IPC).

*   **Example (using `spawn`):**

    ```javascript
    const { spawn } = require('child_process');

    const ls = spawn('ls', ['-lh', '/']); // Command to list directory contents

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    ```

*   **Example (using `exec`):**

    ```javascript
    const { exec } = require('child_process');

    exec('ls -lh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
    ```

*   **Inter-Process Communication (IPC) with `fork`:**
    *   When using `fork`, child processes inherit a special `send()` method on their `process.send` object for sending messages to the parent process and an `on('message', ...)` event to receive messages.

---

### 7. The `events` Module: Event-Driven Architecture

The `events` module is fundamental to Node.js's event-driven, non-blocking I/O model. It allows you to create and handle custom events.

*   **The `EventEmitter` Class:**
    *   Most Node.js objects that emit events (like `http.Server`, `fs.ReadStream`) are instances of `EventEmitter`.
    *   You can create your own classes that inherit from `EventEmitter`.
*   **Key functionalities:**
    *   **`on(eventName, listener)`:** Registers a listener function for the given `eventName`.
    *   **`emit(eventName[, ...args])`:** Emits an event, calling the listeners registered for that event with the provided arguments.
    *   **`once(eventName, listener)`:** Registers a listener function that will be called at most once for the given `eventName`.
    *   **`removeListener(eventName, listener)`:** Removes a specific listener function for the given `eventName`.
    *   **`removeAllListeners([eventName])`:** Removes all listeners or listeners for a specific `eventName`.

*   **Example:**

    ```javascript
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter();

    // Register a listener for the 'greet' event
    myEmitter.on('greet', (name) => {
      console.log(`Hello, ${name}!`);
    });

    // Register a listener that will be called only once
    myEmitter.once('userLoggedIn', (userId) => {
      console.log(`Welcome back, User ID: ${userId}`);
    });

    // Emit events
    myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!
    myEmitter.emit('userLoggedIn', 123); // Output: Welcome back, User ID: 123
    myEmitter.emit('userLoggedIn', 456); // This won't trigger the 'once' listener again

    // You can emit multiple arguments
    myEmitter.on('dataReceived', (data1, data2) => {
      console.log(`Received: ${data1}, ${data2}`);
    });
    myEmitter.emit('dataReceived', 'message1', 'message2');
    ```

---

### 8. The `http` and `https` Modules: Web Servers and Clients

These modules are essential for building web servers and making HTTP requests in Node.js.

*   **`http` Module:**
    *   **Creating a Server:** `http.createServer([options], requestListener)`
        *   The `requestListener` is a function that's automatically passed a `request` object and a `response` object.
        *   `request` object: Represents the incoming request from the client.
        *   `response` object: Represents the outgoing response to the client.
    *   **Key `response` methods:**
        *   `response.writeHead(statusCode, [statusMessage], [headers])`: Writes the response header.
        *   `response.write(chunk, [encoding])`: Writes a chunk of the response body.
        *   `response.end([data], [encoding])`: Ends the response process. You can optionally pass data as the last argument.
    *   **Listening for Connections:** `server.listen(port, [hostname], [callback])`

*   **`https` Module:**
    *   Similar to the `http` module, but it handles HTTPS connections and requires an SSL certificate and private key.

*   **Example (Simple HTTP Server):**

    ```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
      res.statusCode = 200; // OK
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!\n');
    });

    const port = 3000;
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
    ```

*   **Making HTTP Requests (Client-side):**
    *   The `http` module also provides methods for making outgoing HTTP requests.
    *   `http.request(options[, callback])`

*   **Example (Making a GET Request):**

    ```javascript
    const http = require('http');

    const options = {
      hostname: 'jsonplaceholder.typicode.com',
      port: 80,
      path: '/todos/1',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('Response body:', JSON.parse(data));
      });
    });

    req.on('error', (error) => {
      console.error('Error making request:', error);
    });

    req.end(); // Important to call req.end() for GET requests
    ```

---

### 9. The `buffer` Module: Working with Binary Data

Buffers are Node.js's way of handling raw binary data. They are fixed-size chunks of memory that can be written to and read from.

*   **Key functionalities:**
    *   **Creating Buffers:**
        *   `Buffer.from(string[, encoding])`: Creates a new buffer from a string.
        *   `Buffer.from(array)`: Creates a new buffer from an array of bytes.
        *   `Buffer.alloc(size[, fill, [encoding]])`: Creates a new buffer of a specified `size`, optionally filled with a value.
        *   `Buffer.allocUnsafe(size)`: Creates a new buffer of a specified `size`, but the memory is not initialized, making it potentially faster but less safe.
    *   **Reading from Buffers:**
        *   `buffer.toString([encoding[, start[, end]]])`: Converts the buffer to a string.
        *   `buffer.readUInt8([offset])`, `buffer.readInt8([offset])`, etc.: Reads a number of a specific type at a given `offset`.
    *   **Writing to Buffers:**
        *   `buffer.write(string[, offset[, length[, encoding]]])`: Writes a string to the buffer.
        *   `buffer.writeUInt8(value, offset)`, `buffer.writeInt8(value, offset)`, etc.: Writes a number of a specific type at a given `offset`.
    *   **Buffer Length:** `buffer.length` - The size of the buffer in bytes.

*   **Example:**

    ```javascript
    // Create a buffer from a string
    const buf1 = Buffer.from('Hello Node.js', 'utf8');
    console.log('Buffer from string:', buf1);
    console.log('Buffer to string:', buf1.toString('utf8'));

    // Create a buffer from an array of bytes
    const buf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); // 'buffer' in ASCII
    console.log('Buffer from array:', buf2.toString());

    // Allocate a buffer
    const buf3 = Buffer.alloc(10, 0); // Allocate 10 bytes, filled with 0s
    console.log('Allocated buffer:', buf3);

    // Writing to a buffer
    buf3.write('ABC', 0, 3, 'ascii');
    console.log('Buffer after writing ABC:', buf3);

    // Reading a byte
    console.log('Byte at index 0:', buf3.readUInt8(0)); // ASCII of 'A'
    ```

---

### 10. Other Essential Built-in Modules

*   **`url` Module:** For parsing and manipulating URLs.
    *   `new URL(urlString[, base])`
*   **`querystring` Module:** For parsing and formatting URL query strings.
    *   `querystring.parse(str[, sep[, eq[, options]]])`
    *   `querystring.stringify(obj[, sep[, eq[, options]]])`
*   **`util` Module:** A collection of utility functions, including asynchronous utilities, object inspection, and more.
    *   `util.promisify(original)`: Promisifies a function.
    *   `util.inspect(object[, options])`: Returns a string representation of an object.
*   **`crypto` Module:** For cryptographic functionality like hashing and encryption.
*   **`stream` Module:** For working with data streams (readable, writable, duplex, transform). This is a more advanced topic but crucial for efficient data handling.

---

### Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the `os` module in Node.js? Provide an example of one piece of information you can retrieve using this module.

**Question 2:**
Explain the difference between asynchronous and synchronous operations in the `fs` module. Which is generally preferred and why?

**Question 3:**
Using the `path` module, write a Node.js snippet to get the directory name of the current script.

**Question 4:**
How can you access environment variables in Node.js? What command-line argument represents the path of the script being executed?

**Question 5:**
Which `child_process` method is best suited for spawning a long-running process that streams data? Briefly explain why.

**Question 6:**
Write a simple Node.js program that creates an `EventEmitter` and registers a listener for a custom event named `'data'`. Then, emit this event with some data.

**Question 7:**
What is the purpose of `Buffer.alloc()` versus `Buffer.allocUnsafe()`?

**Question 8:**
What is the purpose of the `req` and `res` objects in an `http` server's `requestListener` function?

---

### Answers to Practice Questions

**Answer 1:**
The `os` module provides information about the operating system on which Node.js is running. An example of information you can retrieve is the CPU architecture using `os.arch()`.

**Answer 2:**
Asynchronous operations don't block the Node.js event loop, allowing other tasks to run while the I/O operation completes. Synchronous operations block the event loop until the operation is finished. Asynchronous operations are generally preferred for I/O in Node.js to maintain responsiveness and prevent performance bottlenecks.

**Answer 3:**
```javascript
const path = require('path');
console.log(`Directory name: ${path.dirname(__filename)}`);
```

**Answer 4:**
You can access environment variables using `process.env`. The command-line argument that represents the path of the script being executed is `process.argv[1]`.

**Answer 5:**
The `spawn()` method is best suited for spawning long-running processes that stream data. This is because `spawn()` streams data incrementally as it becomes available, preventing memory issues that can arise from buffering large amounts of data with `exec()` or `execFile()`.

**Answer 6:**
```javascript
const EventEmitter = require('events');

class DataEmitter extends EventEmitter {}
const dataEmitter = new DataEmitter();

dataEmitter.on('data', (payload) => {
  console.log('Received data:', payload);
});

dataEmitter.emit('data', { message: 'This is some data.' });
```

**Answer 7:**
`Buffer.alloc(size)` creates a new buffer of a specified size and initializes all its memory to `0`, making it safe to use. `Buffer.allocUnsafe(size)` creates a buffer of the specified size without initializing its memory. While potentially faster, the allocated memory might contain previously used data, making it less safe for sensitive operations.

**Answer 8:**
*   The `req` (request) object represents the incoming request from the client, providing details like the URL, HTTP method, headers, and request body.
*   The `res` (response) object represents the outgoing response to the client, allowing you to set status codes, headers, and send the response body.

---

### Important Points to Remember

*   **`require()` is the gateway to built-in modules.**
*   **Understand the difference between asynchronous and synchronous operations** for `fs` and `child_process` to write efficient code.
*   **Always handle errors** when performing I/O operations or spawning child processes.
*   **The `path` module is crucial for cross-platform compatibility** when working with file paths.
*   **`process.argv` and `process.env`** are vital for understanding how your Node.js application interacts with its environment and command-line arguments.
*   **`EventEmitter` is the core of Node.js's event-driven nature.**
*   **`http` and `https` modules are fundamental for building web servers and clients.**
*   **Buffers are essential for handling binary data** and are used internally by many Node.js modules.
*   **`__dirname` and `__filename`** are global variables that are indispensable for path manipulation.
