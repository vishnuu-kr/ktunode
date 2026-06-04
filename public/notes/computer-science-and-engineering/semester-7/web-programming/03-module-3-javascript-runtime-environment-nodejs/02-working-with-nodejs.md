---
title: "Working with Node.js"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0da"
status: "completed"
scrapedAt: "2026-05-20T17:13:01.873Z"
---
# Module 3: JavaScript Runtime Environment - Node.js

## Topic: Working with Node.js

---

### **1. Introduction to Node.js**

*   **What is Node.js?**
    *   Node.js is an **open-source, cross-platform JavaScript runtime environment** that allows developers to run JavaScript code **outside of a web browser**.
    *   It's built on **Google's V8 JavaScript engine**, the same engine that powers Google Chrome.
    *   Node.js enables JavaScript to be used for **server-side programming**, building scalable network applications, command-line tools, and much more.

*   **Key Features of Node.js:**
    *   **Event-Driven, Non-Blocking I/O:** This is a core principle that makes Node.js highly efficient for handling concurrent operations.
        *   **Event Loop:** A mechanism that continuously checks for events and executes associated callback functions.
        *   **Non-Blocking I/O:** Operations (like reading files or making network requests) don't halt the execution of other code while they wait for a response. Instead, they register a callback function that will be executed when the operation completes.
    *   **Single-Threaded:** Node.js primarily uses a single thread for executing JavaScript code. However, it leverages worker threads and its asynchronous nature to handle multiple requests concurrently.
    *   **Cross-Platform:** Runs on Windows, macOS, Linux, and other operating systems.
    *   **NPM (Node Package Manager):** The world's largest ecosystem of open-source libraries. NPM is used to install, manage, and share JavaScript packages.

*   **Why Use Node.js?**
    *   **Unified Language for Frontend and Backend:** Use JavaScript for both client-side and server-side development, simplifying development and code sharing.
    *   **High Performance:** Excellent for I/O-bound applications due to its non-blocking nature.
    *   **Scalability:** Easily scales to handle a large number of concurrent connections.
    *   **Large Community and Ecosystem:** Access to a vast array of modules and tools through NPM.
    *   **Real-time Applications:** Well-suited for applications requiring real-time data updates, like chat applications, live dashboards, and online gaming.

---

### **2. Installation and Setup**

*   **Downloading Node.js:**
    *   Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
    *   Download the **LTS (Long Term Support)** version for most users, as it's more stable and recommended for production environments. The Current version offers the latest features but might be less stable.

*   **Verifying Installation:**
    *   Open your terminal or command prompt.
    *   Run the following commands:
        ```bash
        node -v
        npm -v
        ```
    *   These commands should display the installed versions of Node.js and NPM, respectively.

*   **Basic Project Setup:**
    *   Create a new directory for your Node.js project.
    *   Navigate to that directory in your terminal.
    *   Run `npm init` to create a `package.json` file.
        *   `package.json` is a manifest file that describes your project, its dependencies, and other metadata.
        *   You'll be prompted to answer questions about your project (name, version, description, entry point, etc.). You can press Enter to accept defaults.

---

### **3. Running Node.js Code**

*   **Creating a JavaScript File:**
    *   Create a file (e.g., `app.js` or `index.js`) within your project directory.
    *   Write your JavaScript code in this file.

*   **Executing Node.js Files:**
    *   Open your terminal and navigate to your project directory.
    *   Run the file using the `node` command:
        ```bash
        node app.js
        ```

*   **Using the Node.js REPL (Read-Eval-Print Loop):**
    *   The REPL is an interactive environment for testing small snippets of JavaScript code.
    *   Open the REPL by typing `node` in your terminal.
    *   You can type JavaScript code directly and press Enter to execute it.
    *   Type `.exit` or `Ctrl+C` twice to exit the REPL.

---

### **4. Understanding the Node.js Runtime Environment**

*   **Global Objects:**
    *   Node.js provides several global objects that are available everywhere without needing to import them.
    *   **`global`:** The global namespace object, similar to `window` in browsers.
    *   **`process`:** Provides information about and control over the current Node.js process (e.g., `process.argv` for command-line arguments, `process.env` for environment variables).
    *   **`__dirname`:** The directory name of the current module.
    *   **`__filename`:** The file name of the current module.
    *   **`console`:** Used for logging messages to the console (e.g., `console.log()`, `console.error()`).

*   **Modules in Node.js:**
    *   Node.js uses a **module system** to organize code into reusable pieces.
    *   **Core Modules:** Built-in modules provided by Node.js (e.g., `fs` for file system operations, `http` for creating web servers, `path` for handling file paths).
    *   **Local Modules:** Modules you create yourself.
    *   **Third-Party Modules:** Modules installed via NPM.

*   **`require()` Function:**
    *   Used to import modules in Node.js (CommonJS module system).
    *   **Syntax:** `const moduleName = require('module-name');`
    *   **Example:**
        ```javascript
        // Import the built-in 'fs' module
        const fs = require('fs');

        // Import a local module (assuming it's in a file named 'myModule.js')
        const myModule = require('./myModule');
        ```

*   **`module.exports`:**
    *   Used to export values (functions, objects, variables) from a module to make them accessible to other modules.
    *   **Example (in `myModule.js`):**
        ```javascript
        const greet = (name) => {
            return `Hello, ${name}!`;
        };

        module.exports = {
            greet: greet
        };
        ```
    *   **Example (in another file importing `myModule.js`):**
        ```javascript
        const myModule = require('./myModule');
        console.log(myModule.greet('World')); // Output: Hello, World!
        ```

---

### **5. Working with the File System (`fs` Module)**

*   The `fs` module provides a way to interact with the file system on your computer.

*   **Synchronous vs. Asynchronous Operations:**
    *   **Synchronous:** Blocking operations that execute one after another. Can be simpler for small scripts but can block the event loop for longer operations.
    *   **Asynchronous:** Non-blocking operations that use callbacks or Promises. Recommended for most server-side applications to maintain responsiveness.

*   **Common `fs` Methods:**
    *   **Reading Files:**
        *   **Synchronous:** `fs.readFileSync(path, [options])`
            *   Returns the file content as a Buffer or string.
            *   Example: `const data = fs.readFileSync('myFile.txt', 'utf8');`
        *   **Asynchronous:** `fs.readFile(path, [options], callback)`
            *   The `callback` function receives `(err, data)`.
            *   Example:
                ```javascript
                fs.readFile('myFile.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error("Error reading file:", err);
                        return;
                    }
                    console.log(data);
                });
                ```
    *   **Writing Files:**
        *   **Synchronous:** `fs.writeFileSync(path, data, [options])`
            *   Example: `fs.writeFileSync('newFile.txt', 'This is some content.');`
        *   **Asynchronous:** `fs.writeFile(path, data, [options], callback)`
            *   Example:
                ```javascript
                fs.writeFile('newFile.txt', 'This is some content.', (err) => {
                    if (err) {
                        console.error("Error writing file:", err);
                        return;
                    }
                    console.log("File written successfully!");
                });
                ```
    *   **Appending to Files:**
        *   **Synchronous:** `fs.appendFileSync(path, data, [options])`
        *   **Asynchronous:** `fs.appendFile(path, data, [options], callback)`
    *   **Checking File Existence:**
        *   **Synchronous:** `fs.existsSync(path)` (returns `true` or `false`)
        *   **Asynchronous:** `fs.access(path, [mode], callback)` (checks permissions)
    *   **Creating Directories:**
        *   **Synchronous:** `fs.mkdirSync(path, [options])`
        *   **Asynchronous:** `fs.mkdir(path, [options], callback)`
    *   **Reading Directory Contents:**
        *   **Synchronous:** `fs.readdirSync(path)`
        *   **Asynchronous:** `fs.readdir(path, [options], callback)`

---

### **6. Working with NPM (Node Package Manager)**

*   **What is NPM?**
    *   The default package manager for Node.js.
    *   Used to install, manage, and share JavaScript libraries and dependencies for your projects.

*   **Key NPM Commands:**
    *   **`npm init`:** Initializes a new Node.js project and creates `package.json`.
    *   **`npm install <package-name>` (or `npm i <package-name>`):** Installs a specific package and adds it to your `node_modules` directory and `dependencies` in `package.json`.
        *   `npm install <package-name> --save-dev` (or `-D`): Installs a package as a development dependency (e.g., testing frameworks, build tools).
    *   **`npm install`:** Installs all dependencies listed in `package.json` (useful when cloning a project).
    *   **`npm update`:** Updates packages to their latest versions according to `package.json`.
    *   **`npm uninstall <package-name>`:** Uninstalls a package.
    *   **`npm list`:** Lists all installed packages in the current project.
    *   **`npm search <keyword>`:** Searches for packages on the NPM registry.
    *   **`npm run <script-name>`:** Executes scripts defined in the `scripts` section of `package.json`.

*   **`package.json` and Dependencies:**
    *   `dependencies`: Packages required for your application to run in production.
    *   `devDependencies`: Packages only needed during development (testing, building, linting).
    *   `^` (Caret): Indicates that the dependency can be updated to the latest minor or patch version. (e.g., `"express": "^4.17.1"`)
    *   `~` (Tilde): Indicates that the dependency can be updated to the latest patch version. (e.g., `"lodash": "~4.17.21"`)

---

### **7. Creating a Simple Web Server**

*   Node.js is excellent for building web servers.
*   The built-in `http` module is used for this.

*   **Basic Server Structure:**
    ```javascript
    // Import the http module
    const http = require('http');

    // Define the hostname and port
    const hostname = '127.0.0.1'; // localhost
    const port = 3000;

    // Create the server
    const server = http.createServer((req, res) => {
        // req: Incoming request object
        // res: Server response object

        // Set the response header: status code and content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        // Send the response body
        res.end('Hello, World!\n');
    });

    // Start the server and listen on the specified port and hostname
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
    ```

*   **Running the Server:**
    1.  Save the code as `server.js`.
    2.  Open your terminal, navigate to the directory, and run: `node server.js`
    3.  Open your web browser and go to `http://localhost:3000/`. You should see "Hello, World!".

*   **Handling Different Routes and Methods:**
    *   You can inspect `req.url` to get the requested path and `req.method` to get the HTTP method (GET, POST, etc.) to handle different requests.
    *   For more complex routing, you would typically use frameworks like Express.js.

---

### **8. Asynchronous Programming in Node.js**

*   **Callbacks:** The traditional way to handle asynchronous operations. A function passed as an argument to another function, to be executed later.
    *   **Callback Hell (Pyramid of Doom):** Nested callbacks can make code difficult to read and maintain.

*   **Promises:** A more structured way to handle asynchronous operations. Represents the eventual result of an asynchronous operation.
    *   **States:** Pending, Fulfilled (Resolved), Rejected.
    *   **Methods:** `.then()` for successful completion, `.catch()` for errors.
    *   **Example:**
        ```javascript
        function asyncOperation(value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (value > 0) {
                        resolve(`Success with ${value}`);
                    } else {
                        reject(new Error('Value must be positive'));
                    }
                }, 1000);
            });
        }

        asyncOperation(5)
            .then(result => console.log(result)) // Output: Success with 5
            .catch(error => console.error(error));

        asyncOperation(-2)
            .then(result => console.log(result))
            .catch(error => console.error(error.message)); // Output: Value must be positive
        ```

*   **Async/Await:** Syntactic sugar built on top of Promises, making asynchronous code look more like synchronous code.
    *   The `async` keyword before a function declaration makes it an asynchronous function, which implicitly returns a Promise.
    *   The `await` keyword can only be used inside an `async` function. It pauses the execution of the `async` function until the Promise settles (resolves or rejects) and returns the resolved value or throws the rejected error.
    *   **Example:**
        ```javascript
        async function handleAsync() {
            try {
                const result1 = await asyncOperation(10);
                console.log(result1); // Output: Success with 10

                const result2 = await asyncOperation(20);
                console.log(result2); // Output: Success with 20
            } catch (error) {
                console.error(error.message);
            }
        }

        handleAsync();
        ```

---

### **9. Event Emitters**

*   Node.js uses the `events` module and the `EventEmitter` class to implement the observer pattern, which is fundamental to its event-driven architecture.
*   **Observer Pattern:** A design pattern where an object (the "subject" or "emitter") maintains a list of its dependents (the "observers" or "listeners") and notifies them automatically of any state changes.

*   **Key Concepts:**
    *   **`EventEmitter`:** A class that emits named events.
    *   **`on(eventName, listener)`:** Registers a listener function for a specific event.
    *   **`emit(eventName, [...args])`:** Triggers an event, calling all listeners for that event.
    *   **`once(eventName, listener)`:** Registers a listener that will be called at most once.
    *   **`removeListener(eventName, listener)`:** Removes a specific listener.

*   **Example:**
    ```javascript
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter();

    // Register a listener
    myEmitter.on('myevent', (arg1, arg2) => {
        console.log('Event received:', arg1, arg2);
    });

    // Register another listener that runs only once
    myEmitter.once('onceevent', () => {
        console.log('This will only be logged once.');
    });

    // Emit events
    myEmitter.emit('myevent', 'hello', 'world'); // Output: Event received: hello world
    myEmitter.emit('myevent', 'another', 'message'); // Output: Event received: another message

    myEmitter.emit('onceevent'); // Output: This will only be logged once.
    myEmitter.emit('onceevent'); // No output for this second call
    ```

---

### **10. Error Handling in Node.js**

*   **Synchronous Errors:** Caught using `try...catch` blocks.
*   **Asynchronous Errors:**
    *   **Callbacks:** Errors are typically passed as the first argument to the callback function. Always check for `err`.
    *   **Promises:** Use `.catch()` or `try...catch` with `async/await`.
    *   **Event Emitters:**
        *   Listeners for an event named `'error'` are a special case. If an `'error'` event is emitted and there are no listeners for it, Node.js will throw an unhandled error, typically crashing the process.
        *   It's crucial to handle `'error'` events or have a general error handler.
*   **`process.on('uncaughtException', handler)`:** Catches synchronous errors that are not caught by `try...catch`. **Use with extreme caution.** It's generally better to fix the root cause of unhandled exceptions rather than relying on this. It might be used for logging and graceful shutdown.
*   **`process.on('unhandledRejection', handler)`:** Catches unhandled promise rejections.

---

### **Practice Questions/Exercises:**

1.  **Question:** What is the primary advantage of Node.js's event-driven, non-blocking I/O model?
    *   **Answer:** It allows Node.js to handle many concurrent operations efficiently without blocking the main thread, leading to high performance and scalability, especially for I/O-bound applications.

2.  **Question:** Explain the purpose of `package.json`.
    *   **Answer:** `package.json` is a manifest file that describes a Node.js project. It includes metadata about the project, lists its dependencies, defines scripts for common tasks (like starting the server or running tests), and specifies the entry point of the application.

3.  **Question:** Write a Node.js script that reads the content of a file named `data.txt` asynchronously and prints it to the console. If an error occurs, it should print an error message.
    ```javascript
    // Assume data.txt exists with some content
    const fs = require('fs');

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Failed to read data.txt:", err.message);
            return;
        }
        console.log("File content:");
        console.log(data);
    });
    ```

4.  **Question:** How do you install a package named `lodash` as a development dependency using NPM?
    *   **Answer:** `npm install lodash --save-dev` or `npm i lodash -D`

5.  **Question:** What is the difference between `require('module')` and `require('./local_module')`?
    *   **Answer:** `require('module')` is used to import core Node.js modules or third-party modules installed via NPM (which Node.js knows how to find in the `node_modules` directory). `require('./local_module')` is used to import local JavaScript files within your project, where `./` indicates the relative path from the current file.

6.  **Question:** Briefly explain the role of `async` and `await` in Node.js.
    *   **Answer:** `async` and `await` are keywords used to write asynchronous JavaScript code that looks and behaves more like synchronous code. `async` declares a function that returns a Promise, and `await` pauses the execution of an `async` function until a Promise settles, making it easier to work with asynchronous operations without callback hell.

---

### **Important Points to Remember:**

*   **Node.js is NOT a browser.** It's a server-side JavaScript runtime.
*   **Event Loop & Non-Blocking I/O** are fundamental to Node.js performance.
*   **NPM** is your best friend for managing project dependencies.
*   **`package.json`** is the blueprint for your Node.js project.
*   **`require()` and `module.exports`** are how you manage modules (CommonJS).
*   Always handle errors, especially **`'error'` events** on `EventEmitter`s.
*   Prefer **asynchronous operations** over synchronous ones in server-side code to keep the application responsive.
*   **Promises** and **`async/await`** are modern and preferred ways to handle asynchronous code.
