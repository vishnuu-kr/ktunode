---
title: "Adding Express to Node.js"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0db"
status: "completed"
scrapedAt: "2026-05-20T17:13:02.893Z"
---
# WEB PROGRAMMING - Module 3: JavaScript Runtime Environment: Node.js

## Topic: Adding Express to Node.js

---

### **1. Introduction to Express.js**

**What is Express.js?**

*   Express.js is a **minimalist and flexible Node.js web application framework** that provides a robust set of features for web and mobile applications.
*   It's often referred to as the **de facto standard** for building web servers in Node.js due to its simplicity, speed, and extensive middleware ecosystem.
*   Express is **unopinionated**, meaning it doesn't force you to adopt specific project structures or coding patterns, giving you the freedom to build applications as you see fit.

**Why use Express?**

*   **Simplifies Server Creation:** Handles the complexities of HTTP requests and responses, routing, middleware, and templating.
*   **Efficient Routing:** Allows you to define how your application responds to different HTTP requests (GET, POST, PUT, DELETE) for specific URL paths.
*   **Middleware Architecture:** Enables you to add functionality to your request processing pipeline.
*   **Templating Engine Integration:** Easily integrates with various templating engines (like EJS, Pug, Handlebars) to render dynamic HTML.
*   **Large Community and Ecosystem:** Benefits from a vast collection of middleware and tools that extend its capabilities.

---

### **2. Installation of Express.js**

**Prerequisites:**

*   **Node.js and npm (Node Package Manager) installed.** You can download them from [nodejs.org](https://nodejs.org/).

**Steps to Install Express:**

1.  **Create a New Project Directory:**
    ```bash
    mkdir my-express-app
    cd my-express-app
    ```

2.  **Initialize a Node.js Project:** This creates a `package.json` file, which manages your project's dependencies and metadata.
    ```bash
    npm init -y
    ```
    (The `-y` flag accepts all default options.)

3.  **Install Express:** This downloads the Express package and its dependencies into your `node_modules` folder and adds it to your `package.json` file as a dependency.
    ```bash
    npm install express
    ```

**Key Concepts:**

*   **`package.json`:** A JSON file that holds metadata about your Node.js project, including its dependencies, scripts, and version.
*   **`node_modules/`:** A directory where all the installed packages and their dependencies are stored.
*   **`npm install`:** The command used to install packages listed in `package.json` or specific packages.

---

### **3. Creating a Basic Express Server**

**Core Components of an Express Server:**

*   **`require('express')`:** Imports the Express module.
*   **`express()`:** Creates an instance of the Express application.
*   **Routes:** Define how the application responds to requests to specific endpoints (URLs) and HTTP methods.
*   **Middleware:** Functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.
*   **`app.listen(port, callback)`:** Starts an HTTP server and listens for connections on the specified port.

**Example: A Simple "Hello World" Server**

1.  **Create a file named `app.js` (or `server.js`)** in your project directory.

2.  **Add the following code to `app.js`:**

    ```javascript
    // 1. Import the express module
    const express = require('express');

    // 2. Create an Express application instance
    const app = express();

    // 3. Define the port the server will listen on
    const port = 3000; // You can choose any available port

    // 4. Define a route handler for the root URL ('/') and the GET method
    app.get('/', (req, res) => {
      res.send('Hello World!'); // Send a response back to the client
    });

    // 5. Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```

3.  **Run the server from your terminal:**
    ```bash
    node app.js
    ```

4.  **Open your web browser** and navigate to `http://localhost:3000`. You should see "Hello World!".

**Explanation of the Code:**

*   `const express = require('express');`: Imports the Express library.
*   `const app = express();`: Creates an Express application object. This object has methods for routing HTTP requests, configuring middleware, and rendering views.
*   `const port = 3000;`: Sets the port number for the server.
*   `app.get('/', (req, res) => { ... });`: This is a **route handler**.
    *   `app.get`: Specifies that this handler will respond to HTTP GET requests.
    *   `'/'`: This is the **path** or **endpoint**. It means the handler will be executed when a request is made to the root URL of the server.
    *   `(req, res) => { ... }`: This is the **callback function** that gets executed when a matching request is received.
        *   `req` (request): An object containing information about the incoming request (headers, query parameters, body, etc.).
        *   `res` (response): An object used to send a response back to the client.
    *   `res.send('Hello World!');`: Sends the string "Hello World!" as the response body to the client.
*   `app.listen(port, () => { ... });`: Starts the server. The callback function is executed once the server has started successfully, typically to log a message indicating that the server is running.

---

### **4. Understanding Routing in Express**

**What is Routing?**

*   Routing is the process of **determining how an application responds to a client request to a particular endpoint**, which is an URI (Uniform Resource Identifier) and a specific HTTP request method (GET, POST, PUT, DELETE, etc.).

**Basic Routing Methods:**

Express provides methods on the `app` object that correspond to HTTP methods:

*   `app.METHOD(PATH, HANDLER)`
    *   `METHOD`: An HTTP method, in lowercase (e.g., `get`, `post`, `put`, `delete`).
    *   `PATH`: A path on the server.
    *   `HANDLER`: The callback function executed when the route is matched.

**Common HTTP Methods and their Use Cases:**

*   **`GET`**: Retrieve data from a specified resource. (e.g., fetching a user's profile, getting a list of products).
*   **`POST`**: Submit data to be processed to a specified resource. (e.g., creating a new user, submitting a form).
*   **`PUT`**: Update a specified resource. (e.g., updating a user's profile).
*   **`DELETE`**: Delete a specified resource. (e.g., deleting a product).
*   **`PATCH`**: Apply partial modifications to a resource.

**Example: Multiple Routes**

Modify `app.js` to include more routes:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Route for the root URL (GET request)
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for '/about' (GET request)
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route for '/users' (GET request)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users); // Send JSON response
});

// Route with route parameters (e.g., /users/1)
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId; // Access route parameters
  res.send(`You requested user with ID: ${userId}`);
});

// Route for handling POST requests to '/submit'
app.post('/submit', (req, res) => {
  res.send('Data submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**Running and Testing:**

*   Run `node app.js`.
*   **Browser:**
    *   `http://localhost:3000/` -> "Welcome to the homepage!"
    *   `http://localhost:3000/about` -> "This is the about page."
    *   `http://localhost:3000/users` -> `[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]` (JSON output)
    *   `http://localhost:3000/users/123` -> "You requested user with ID: 123"
*   **Testing POST requests:** You'll need tools like `curl` or Postman for POST requests.
    *   Using `curl`:
        ```bash
        curl -X POST http://localhost:3000/submit
        ```
        Output: `Data submitted successfully!`

**Key Concepts:**

*   **Route Path:** The URL the request targets (e.g., `/`, `/about`, `/users/:userId`).
*   **Route Handler:** The function executed for a matching route and method.
*   **`req.params`:** An object containing route parameters extracted from the URL path (e.g., `userId` in `/users/:userId`).
*   **`res.json(object)`:** Sends a JSON response to the client. This method automatically sets the `Content-Type` header to `application/json`.

---

### **5. Middleware in Express.js**

**What is Middleware?**

*   Middleware functions are **functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle.**
*   Middleware functions can perform the following tasks:
    *   Execute any code.
    *   Make changes to the request and response objects.
    *   End the request-response cycle.
    *   Call the next middleware function in the stack. If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function.

**Types of Middleware:**

1.  **Application-level Middleware:**
    *   Bound to the `app` object using `app.use()` or a specific HTTP method (`app.get()`, `app.post()`).
    *   Can be mounted on specific paths or run for all requests.

2.  **Router-level Middleware:**
    *   Similar to application-level middleware but are bound to an instance of `express.Router()`.

3.  **Error-handling Middleware:**
    *   Have four arguments instead of three: `err`, `req`, `res`, `next`.
    *   Used to catch and process errors.

4.  **Built-in Middleware:**
    *   Provided by Express itself (e.g., `express.json()`, `express.urlencoded()`, `express.static()`).

5.  **Third-party Middleware:**
    *   Packages installed via npm (e.g., `cors`, `morgan`).

**Common Built-in Middleware:**

*   **`express.json()`**: Parses incoming requests with JSON payloads. It populates `req.body` with the parsed JSON data.
*   **`express.urlencoded({ extended: true })`**: Parses incoming requests with URL-encoded payloads. It populates `req.body` with the parsed form data. `extended: true` allows for rich objects and arrays to be encoded.
*   **`express.static(root)`**: Serves static files (HTML, CSS, JavaScript, images) from a specified directory.

**Example: Using Built-in Middleware for POST Requests**

To handle POST requests with data in the body (e.g., from an HTML form), you need to use `express.urlencoded()` or `express.json()`.

Modify `app.js`:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies (e.g., from API requests)
app.use(express.json());

// Route for the homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>Simple Form Submission</h1>
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle POST requests to '/submit'
app.post('/submit', (req, res) => {
  console.log('Request Body:', req.body); // Access parsed data from req.body
  const { name, email } = req.body;
  res.send(`Thank you, ${name}! Your email is ${email}.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**Running and Testing:**

*   Run `node app.js`.
*   Navigate to `http://localhost:3000/`.
*   Fill out the form and click "Submit".
*   You should see the "Thank you..." message, and the server's console will log the submitted data.

**Example: Using `express.static()`**

Let's create a `public` folder for static files.

1.  **Create a folder named `public`** in your project directory.
2.  **Create a file named `index.html`** inside the `public` folder:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Static Page</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>This is a static HTML file!</h1>
      <p>Served by Express static middleware.</p>
    </body>
    </html>
    ```
3.  **Create a file named `style.css`** inside the `public` folder:

    ```css
    body {
      font-family: sans-serif;
      background-color: #f0f0f0;
      color: #333;
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      color: #007bff;
    }
    ```
4.  **Modify `app.js` to include `express.static()`:**

    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    // Middleware to serve static files from the 'public' directory
    app.use(express.static('public'));

    // Optional: Route for API or dynamic content if you have other routes
    // app.get('/api/data', (req, res) => {
    //   res.json({ message: 'This is API data' });
    // });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```

**Running and Testing:**

*   Run `node app.js`.
*   Navigate to `http://localhost:3000/`. Express will automatically look for `index.html` in the `public` folder and serve it.
*   Navigate to `http://localhost:3000/style.css` to see the CSS file being served.

**Important Points about Middleware Order:**

*   Middleware functions are executed in the order they are added to the middleware stack.
*   Placing `app.use(express.static('public'))` before other routes means that if a file with the requested path exists in the `public` directory, it will be served, and subsequent route handlers will not be executed for that request.

---

### **6. Handling Different HTTP Methods and Route Parameters**

**Revisiting Route Methods:**

*   `app.get(path, handler)`
*   `app.post(path, handler)`
*   `app.put(path, handler)`
*   `app.delete(path, handler)`
*   `app.patch(path, handler)`
*   `app.all(path, handler)`: Matches all HTTP methods. Useful for common logic across methods.

**Route Parameters:**

*   Used to capture values from the URL path.
*   Defined by adding a colon `:` before the parameter name in the path.
*   Accessible via `req.params`.

**Example: More Advanced Routing**

Let's combine different methods and parameters.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing JSON request bodies

// In-memory data store (replace with a database in real applications)
let books = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' }
];
let nextBookId = 3; // To generate unique IDs for new books

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a specific book by ID
app.get('/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId); // Convert ID to integer
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found'); // Send 404 status code
  }
});

// POST a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: nextBookId++,
    title: req.body.title,
    author: req.body.author
  };
  // Basic validation
  if (!newBook.title || !newBook.author) {
    return res.status(400).send('Title and author are required.');
  }
  books.push(newBook);
  res.status(201).json(newBook); // Send 201 Created status code
});

// PUT (update) a book by ID
app.put('/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    // Update properties if they exist in the request body
    if (req.body.title) {
      books[bookIndex].title = req.body.title;
    }
    if (req.body.author) {
      books[bookIndex].author = req.body.author;
    }
    res.json(books[bookIndex]);
  } else {
    res.status(404).send('Book not found');
  }
});

// DELETE a book by ID
app.delete('/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const initialLength = books.length;
  books = books.filter(b => b.id !== bookId); // Filter out the book to delete

  if (books.length < initialLength) {
    res.status(200).send(`Book with ID ${bookId} deleted successfully.`);
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**Testing with `curl`:**

*   **GET all books:** `curl http://localhost:3000/books`
*   **GET book with ID 1:** `curl http://localhost:3000/books/1`
*   **POST a new book:**
    ```bash
    curl -X POST http://localhost:3000/books \
    -H "Content-Type: application/json" \
    -d '{"title": "1984", "author": "George Orwell"}'
    ```
*   **PUT (update) book with ID 2:**
    ```bash
    curl -X PUT http://localhost:3000/books/2 \
    -H "Content-Type: application/json" \
    -d '{"title": "Pride and Prejudice (Revised)"}'
    ```
*   **DELETE book with ID 1:** `curl -X DELETE http://localhost:3000/books/1`

**Key Concepts:**

*   **HTTP Status Codes:** `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`. Essential for indicating the outcome of an API request.
*   **`parseInt()`**: Converts a string to an integer. Important for route parameters that are expected to be numbers.
*   **`req.body`**: Contains the parsed data from the request body, populated by middleware like `express.json()` or `express.urlencoded()`.
*   **`res.status(statusCode)`**: Sets the HTTP status code for the response.

---

### **7. Error Handling in Express**

**The Need for Error Handling:**

*   Unexpected errors can occur during request processing (e.g., database connection issues, invalid input).
*   Proper error handling prevents your server from crashing and provides informative feedback to the client.

**Express Error Handling Middleware:**

*   Express has a special type of middleware for handling errors.
*   It's defined with **four parameters**: `(err, req, res, next)`.
*   It must be defined **after** all other `app.use()` and route handlers.

**Example: Basic Error Handling**

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route that might throw an error
app.get('/error-route', (req, res, next) => {
  // Simulate an error
  const err = new Error('Something went wrong on this route!');
  err.status = 500; // Optionally set a status code
  next(err); // Pass the error to the next error-handling middleware
});

// A regular route
app.get('/', (req, res) => {
  res.send('Server is running fine!');
});

// --- Error Handling Middleware ---
// This must be defined LAST
app.use((err, req, res, next) => {
  console.error('An error occurred:', err.stack); // Log the error stack trace

  // Send a generic error response
  res.status(err.status || 500).send({
    message: err.message || 'Internal Server Error',
    // In production, you might not want to send the stack trace to the client
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**Running and Testing:**

*   Run `node app.js`.
*   Navigate to `http://localhost:3000/error-route`.
*   You will see the error message from your error handler. The console will also log the error stack.
*   Navigate to `http://localhost:3000/`. This should still work fine.

**Important Considerations for Error Handling:**

*   **Log Errors:** Always log errors to the server's console or a dedicated logging service.
*   **Client Response:** Send a meaningful but not overly revealing error message to the client. Avoid sending sensitive details like stack traces in production.
*   **Status Codes:** Use appropriate HTTP status codes to indicate the type of error.
*   **`next(err)`:** This is crucial for passing an error to the next error-handling middleware in the chain. If you don't call `next(err)`, the error might not be handled correctly.
*   **Catching Uncaught Exceptions:** For errors that occur outside the request-response cycle (e.g., in asynchronous operations without proper error handling), you might need to use `process.on('uncaughtException', ...)` and `process.on('unhandledRejection', ...)` to gracefully shut down your server.

---

### **8. Learning Outcomes Recap and Key Takeaways**

**Covered Learning Outcomes:**

*   **Understanding the role of Express.js:** You now understand that Express is a powerful framework that simplifies building web applications in Node.js.
*   **Installation and setup of Express:** You know how to install Express using npm and initialize a Node.js project.
*   **Creating a basic Express server:** You can create a functional HTTP server that listens on a port and responds to requests.
*   **Implementing routing:** You can define different endpoints and HTTP methods to handle various client requests.
*   **Utilizing middleware:** You understand the concept of middleware and how to use built-in middleware like `express.json()`, `express.urlencoded()`, and `express.static()`.
*   **Handling request data (body, params):** You can access and process data sent in the request body and URL parameters.
*   **Basic error handling:** You can implement middleware to catch and manage errors gracefully.

**Important Points to Remember:**

*   **Express is a framework, not a replacement for Node.js:** It builds upon Node.js's capabilities.
*   **Middleware is the heart of Express:** It allows for modular and extensible request processing.
*   **Order matters:** The order in which middleware and routes are defined significantly impacts how requests are handled.
*   **`req.body` needs middleware:** You must use `express.json()` or `express.urlencoded()` to parse request bodies.
*   **`res.send()`, `res.json()`, `res.status()`:** Key methods for sending responses.
*   **`next()`:** Essential for passing control between middleware.
*   **Error handling middleware needs 4 arguments and must be last.**
*   **`npm install express`** is the command to add Express to your project.

---

### **9. Practice Questions and Exercises**

**Question 1:**

What is the primary purpose of Express.js in the context of Node.js web programming?
a) To provide a new JavaScript runtime environment.
b) To simplify the process of building web servers and APIs.
c) To manage databases for Node.js applications.
d) To create desktop applications with Node.js.

**Question 2:**

Which command is used to install the Express.js package in a Node.js project?
a) `npm init express`
b) `npm install express`
c) `node install express`
d) `yarn add express`

**Question 3:**

If you want to serve static files like HTML, CSS, and JavaScript from a folder named `public`, which built-in Express middleware would you use?
a) `express.json()`
b) `express.urlencoded()`
c) `express.static('public')`
d) `express.router()`

**Question 4:**

What is the role of the `next()` function in Express middleware?
a) It immediately terminates the request-response cycle.
b) It forwards the request to the next middleware function or route handler in the stack.
c) It sends the final response back to the client.
d) It logs the request details to the console.

**Question 5:**

Which of the following is a valid way to define a route handler for a GET request to the `/users` path?
a) `app.post('/users', (req, res) => { ... })`
b) `app.get('/users', (req, res) => { ... })`
c) `app.put('/users', (req, res) => { ... })`
d) `app.delete('/users', (req, res) => { ... })`

**Question 6 (Exercise):**

Create a new Node.js project. Install Express. Create a server that:
*   Listens on port 5000.
*   Has a GET route for `/info` that returns a JSON object: `{ "appName": "MyExpressApp", "version": "1.0.0" }`.
*   Has a POST route for `/data` that expects a JSON body with a `message` property and responds with `You sent: [message content]`.
*   If a route is not found, it should respond with a 404 "Not Found" message using a middleware.

**Answers:**

1.  **b)** To simplify the process of building web servers and APIs.
2.  **b)** `npm install express`
3.  **c)** `express.static('public')`
4.  **b)** It forwards the request to the next middleware function or route handler in the stack.
5.  **b)** `app.get('/users', (req, res) => { ... })`

**Answer to Exercise 6:**

Create a file named `server.js`:

```javascript
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET route for /info
app.get('/info', (req, res) => {
  res.json({ "appName": "MyExpressApp", "version": "1.0.0" });
});

// POST route for /data
app.post('/data', (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).send('Message property is required in the request body.');
  }
  res.send(`You sent: ${message}`);
});

// 404 Not Found middleware (must be last)
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

**To test this exercise:**

1.  Save the code as `server.js`.
2.  Run `npm init -y` and `npm install express` in the same directory.
3.  Run `node server.js`.
4.  **Test GET /info:** Open `http://localhost:5000/info` in your browser.
5.  **Test POST /data (using curl):**
    ```bash
    curl -X POST http://localhost:5000/data \
    -H "Content-Type: application/json" \
    -d '{"message": "Hello Express!"}'
    ```
6.  **Test 404:** Navigate to `http://localhost:5000/nonexistent-route`.
