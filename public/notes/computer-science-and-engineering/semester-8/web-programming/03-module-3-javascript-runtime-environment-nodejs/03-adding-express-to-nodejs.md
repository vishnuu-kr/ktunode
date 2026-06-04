---
title: "Adding Express to Node.js"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc3a"
status: "completed"
scrapedAt: "2026-05-20T17:28:28.294Z"
---
# WEB PROGRAMMING - Module 3: JavaScript Runtime Environment: Node.js

## Topic: Adding Express to Node.js

---

### 1. Introduction to Express.js

*   **What is Express.js?**
    *   Express is a **minimalist and flexible Node.js web application framework** that provides a robust set of features for web and mobile applications.
    *   It's often described as the **de facto standard** for building web servers with Node.js.
    *   Express simplifies the process of creating APIs and web applications by handling many common tasks for you.

*   **Why use Express?**
    *   **Simplifies Server Creation:** Handles HTTP requests, routing, middleware, and response generation.
    *   **Reduces Boilerplate Code:** You don't need to write code for basic HTTP server functionalities from scratch.
    *   **Modular Design:** Encourages the use of middleware, allowing you to add functionalities easily.
    *   **Large Community and Ecosystem:** Abundant libraries and resources available.
    *   **Performance:** Known for its speed and efficiency.

---

### 2. Installing Express.js

*   **Prerequisites:**
    *   **Node.js and npm (Node Package Manager) installed.** You can verify this by opening your terminal/command prompt and running:
        ```bash
        node -v
        npm -v
        ```
    *   If you don't have them installed, download from [nodejs.org](https://nodejs.org/).

*   **Steps to Install Express:**

    1.  **Create a new project directory:**
        ```bash
        mkdir my-express-app
        cd my-express-app
        ```

    2.  **Initialize a Node.js project:** This creates a `package.json` file to manage your project's dependencies and metadata.
        ```bash
        npm init -y
        ```
        (The `-y` flag automatically accepts all default options.)

    3.  **Install Express:** Use npm to install the Express package.
        ```bash
        npm install express
        ```
        This will download Express and its dependencies into a `node_modules` folder and record it in your `package.json` file.

*   **Verifying Installation:**
    *   After installation, you'll see a `node_modules` folder and `package-lock.json` file.
    *   You can also check your `package.json` file; `express` should be listed under `dependencies`.

---

### 3. Creating a Basic Express Server

*   **The Core Components:**
    *   **`require('express')`:** Imports the Express module.
    *   **`express()`:** Creates an Express application instance.
    *   **Routes:** Define how the application responds to requests to specific endpoints (URLs) and HTTP methods (GET, POST, etc.).
    *   **Middleware:** Functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.
    *   **`app.listen()`:** Starts the server and makes it listen for connections on a specified port.

*   **Example: A Simple "Hello World" Server**

    1.  **Create a new file** (e.g., `app.js`) in your project directory.

    2.  **Write the following code:**

        ```javascript
        // 1. Import the express module
        const express = require('express');

        // 2. Create an Express application instance
        const app = express();

        // Define the port the server will listen on
        const port = 3000;

        // 3. Define a route handler for the root URL ("/")
        app.get('/', (req, res) => {
          res.send('Hello World!'); // Send a response to the client
        });

        // 4. Start the server
        app.listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
        });
        ```

*   **Running the Server:**
    *   Open your terminal in the project directory.
    *   Execute the script:
        ```bash
        node app.js
        ```
    *   You should see the message: `Server is running on http://localhost:3000`

*   **Testing the Server:**
    *   Open your web browser and go to `http://localhost:3000`.
    *   You should see the text "Hello World!".

---

### 4. Understanding Routing in Express

*   **What is Routing?**
    *   Routing is the process of determining how an application responds to a client request to a particular endpoint (a URI, or request URL), and a particular HTTP request method (GET, POST, PUT, DELETE, etc.).

*   **HTTP Methods Supported by Express:**
    *   `app.get(path, handler)`: Handles GET requests.
    *   `app.post(path, handler)`: Handles POST requests.
    *   `app.put(path, handler)`: Handles PUT requests.
    *   `app.delete(path, handler)`: Handles DELETE requests.
    *   `app.all(path, handler)`: Handles all HTTP methods.
    *   And others like `patch`, `options`, `head`.

*   **Route Parameters:**
    *   You can capture values from the URL path as parameters.
    *   Use a colon (`:`) to define a parameter in the route path.

    ```javascript
    // Example: Route with a parameter
    app.get('/users/:userId', (req, res) => {
      const userId = req.params.userId; // Access the parameter
      res.send(`You requested user with ID: ${userId}`);
    });
    ```
    *   If you visit `http://localhost:3000/users/123`, the response will be "You requested user with ID: 123".

*   **Query Strings:**
    *   Data can be passed in the URL after a `?`.
    *   Express makes these parameters available in `req.query`.

    ```javascript
    // Example: Route with query strings
    app.get('/search', (req, res) => {
      const searchTerm = req.query.q; // Access the query parameter 'q'
      res.send(`You searched for: ${searchTerm}`);
    });
    ```
    *   If you visit `http://localhost:3000/search?q=javascript`, the response will be "You searched for: javascript".

*   **Express Router:**
    *   For larger applications, it's good practice to modularize routes using `express.Router()`.
    *   This allows you to group related route handlers and export them as middleware.

    **Example (`routes/userRoutes.js`):**
    ```javascript
    const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {
      res.send('List of users');
    });

    router.get('/:userId', (req, res) => {
      res.send(`User details for ID: ${req.params.userId}`);
    });

    module.exports = router;
    ```

    **In `app.js`:**
    ```javascript
    const express = require('express');
    const app = express();
    const userRoutes = require('./routes/userRoutes'); // Import the router

    const port = 3000;

    // Mount the user routes under the '/users' path
    app.use('/users', userRoutes);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```
    *   Now, `GET /users` will respond with "List of users", and `GET /users/456` will respond with "User details for ID: 456".

---

### 5. Middleware in Express

*   **What is Middleware?**
    *   Middleware functions are functions that have access to the `request` object (`req`), the `response` object (`res`), and the `next` middleware function in the application’s request-response cycle.
    *   They can:
        *   Execute any code.
        *   Make changes to the request and response objects.
        *   End the request-response cycle.
        *   Call the next middleware function in the stack using `next()`.

*   **Types of Middleware:**
    *   **Application-level middleware:** Bound to `app` object using `app.use()` or `app.METHOD()`.
    *   **Router-level middleware:** Bound to an `express.Router()` instance.
    *   **Error-handling middleware:** Special type with four arguments: `(err, req, res, next)`.
    *   **Built-in middleware:** Provided by Express (e.g., `express.json()`, `express.urlencoded()`, `express.static()`).
    *   **Third-party middleware:** Middleware packages installed via npm (e.g., `body-parser`, `cors`).

*   **Using Middleware:**

    1.  **Application-level Middleware:**
        ```javascript
        // Middleware to log every request
        app.use((req, res, next) => {
          console.log(`${req.method} ${req.url}`);
          next(); // Pass control to the next middleware or route handler
        });

        // A route handler
        app.get('/', (req, res) => {
          res.send('Home Page');
        });
        ```
        *   When you visit `/`, you'll see the log message in the console before the "Home Page" is sent.

    2.  **Route-specific Middleware:**
        ```javascript
        const adminMiddleware = (req, res, next) => {
          if (req.query.admin === 'true') {
            next(); // Allow access if query param is 'true'
          } else {
            res.status(403).send('Forbidden: Admin access required.');
          }
        };

        app.get('/admin', adminMiddleware, (req, res) => {
          res.send('Welcome to the Admin Panel!');
        });
        ```
        *   Visiting `/admin?admin=true` will show the welcome message.
        *   Visiting `/admin` or `/admin?admin=false` will result in a "Forbidden" response.

    3.  **Built-in Middleware Examples:**
        *   **`express.json()`:** Parses incoming requests with JSON payloads.
            ```javascript
            app.use(express.json()); // For parsing application/json
            ```
        *   **`express.urlencoded({ extended: true })`:** Parses incoming requests with URL-encoded payloads.
            ```javascript
            app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
            ```
        *   **`express.static(path)`:** Serves static files (HTML, CSS, JS, images) from a specified directory.
            ```javascript
            app.use(express.static('public')); // Serve files from the 'public' folder
            ```
            *   You would create a `public` folder and place your `index.html` or other assets there. Then, accessing `http://localhost:3000/index.html` would serve the file.

---

### 6. Handling Different HTTP Methods and Responses

*   **Sending Various Response Types:**
    *   **`res.send(body)`:** Sends the HTTP response (can be a string, buffer, object, or array). Express automatically sets the `Content-Type` header.
    *   **`res.json(body)`:** Sends a JSON response. It automatically stringifies the JavaScript object and sets the `Content-Type` to `application/json`.
    *   **`res.render(view, options)`:** Used for server-side rendering (e.g., with template engines like EJS, Pug). Not covered in depth here, but important to know.
    *   **`res.redirect(url)`:** Redirects the client to a different URL.
    *   **`res.status(code)`:** Sets the HTTP status code for the response. This method is chainable with `res.send()`, `res.json()`, etc.

*   **Examples:**

    ```javascript
    app.get('/data', (req, res) => {
      const data = {
        message: 'This is some JSON data',
        status: 'success'
      };
      res.json(data); // Sends JSON response
    });

    app.post('/submit', (req, res) => {
      console.log('Received data:', req.body); // Assumes express.json() is used
      res.status(201).send('Data submitted successfully!'); // Sends plain text with status 201
    });

    app.get('/about', (req, res) => {
      res.redirect('/contact'); // Redirects to the /contact page
    });

    app.get('/contact', (req, res) => {
      res.send('Contact Us Page');
    });

    // Example of sending HTML content
    app.get('/html', (req, res) => {
      res.send('<h1>Welcome to our HTML Page</h1><p>This is paragraph content.</p>');
    });
    ```

---

### 7. Important Points to Remember

*   **`node_modules` Folder:** This folder contains all your project's dependencies. **Never commit this folder to version control (like Git).** Use a `.gitignore` file.
*   **`package.json`:** This file is crucial. It lists your project's dependencies and scripts.
*   **`package-lock.json`:** This file locks down the exact versions of your dependencies, ensuring consistent installations across different environments.
*   **`next()` Function:** Always call `next()` in your middleware if you want the request to continue to the next middleware or route handler. If you don't call `next()` and don't send a response, the request will hang.
*   **Order of Middleware Matters:** Middleware functions are executed in the order they are defined or mounted using `app.use()`.
*   **Error Handling:** Implement dedicated error-handling middleware for gracefully managing errors.
*   **Port Numbers:** Choose a port that isn't already in use (common development ports are 3000, 8080, 5000).

---

### 8. Practice Questions and Exercises

**Exercise 1: Basic Express Server**

1.  Create a new Node.js project.
2.  Install Express.
3.  Create a server that listens on port `4000`.
4.  Implement a route for `/home` that sends the text "Welcome Home!".
5.  Implement a route for `/about` that sends a JSON object: `{ "appName": "MyExpressApp", "version": "1.0" }`.

**Exercise 2: Routing with Parameters**

1.  Using the server from Exercise 1, add a new route `/users/:username`.
2.  This route should accept a `username` parameter in the URL.
3.  The response should be: `Hello, [username]!`.
4.  Test it with a URL like `/users/Alice`.

**Exercise 3: Middleware for Logging**

1.  Add application-level middleware to your server that logs the HTTP method and the requested URL for every incoming request.
2.  Ensure the `next()` function is called so that routes are still processed.

---

### Answers to Practice Questions

**Answer to Exercise 1:**

```javascript
// app.js
const express = require('express');
const app = express();
const port = 4000;

// Route for /home
app.get('/home', (req, res) => {
  res.send('Welcome Home!');
});

// Route for /about
app.get('/about', (req, res) => {
  res.json({ "appName": "MyExpressApp", "version": "1.0" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**Answer to Exercise 2:**

Add this to your `app.js` from Exercise 1:

```javascript
// Add this route
app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});
```

**Answer to Exercise 3:**

Modify your `app.js` from Exercise 1 (or 2):

```javascript
const express = require('express');
const app = express();
const port = 4000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware/route handler
});

// Route for /home
app.get('/home', (req, res) => {
  res.send('Welcome Home!');
});

// Route for /about
app.get('/about', (req, res) => {
  res.json({ "appName": "MyExpressApp", "version": "1.0" });
});

// Route with parameter
app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

---
