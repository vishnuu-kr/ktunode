---
title: "Asynchronous JavaScript and XML - AJAX : Making Asynchronous Requests"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc30"
status: "completed"
scrapedAt: "2026-05-20T17:28:22.133Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Asynchronous JavaScript and XML (AJAX) - Making Asynchronous Requests

This module delves into Asynchronous JavaScript and XML (AJAX), a powerful technique that allows web pages to update content dynamically without requiring a full page reload. We will focus on the core aspect of making asynchronous requests.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the concept of asynchronous operations in web development.**
*   **Explain the purpose and benefits of AJAX.**
*   **Identify the core components involved in making an AJAX request.**
*   **Differentiate between synchronous and asynchronous requests.**
*   **Implement AJAX requests using the `XMLHttpRequest` object.**
*   **Handle responses from the server, including success and error scenarios.**
*   **Understand the role of data formats like JSON in AJAX communication.**
*   **Explore modern alternatives for making AJAX requests (e.g., `fetch` API).**

---

### 1. Understanding Asynchronous Operations

#### 1.1 What is Asynchronous?

*   **Definition:** An asynchronous operation is a task that can run in the background without blocking the main execution thread of your program. When an asynchronous operation is initiated, your program doesn't wait for it to complete. Instead, it continues with other tasks and is notified later when the asynchronous operation finishes.

#### 1.2 Synchronous vs. Asynchronous Requests

*   **Synchronous Request:**
    *   The browser waits for the server's response before continuing to execute subsequent JavaScript code.
    *   During the wait, the user interface (UI) can become unresponsive, leading to a poor user experience.
    *   Example: A traditional form submission that redirects the user to a new page.

*   **Asynchronous Request:**
    *   The browser sends the request to the server and continues executing the rest of the JavaScript code.
    *   When the server's response is received, a predefined callback function is executed to handle the data.
    *   This allows the UI to remain interactive and responsive.

#### 1.3 Benefits of Asynchronous Operations (AJAX)

*   **Improved User Experience:**
    *   **Dynamic Content Updates:** Parts of a web page can be updated without reloading the entire page.
    *   **Responsiveness:** The UI remains interactive during background operations.
*   **Reduced Bandwidth Usage:** Only the necessary data is transferred between the client and server.
*   **Increased Efficiency:** Allows for parallel processing of tasks.
*   **Richer User Interfaces:** Enables features like live search suggestions, infinite scrolling, and real-time data feeds.

---

### 2. Asynchronous JavaScript and XML (AJAX)

#### 2.1 What is AJAX?

*   **Definition:** AJAX (Asynchronous JavaScript and XML) is a set of web development techniques that use JavaScript to create asynchronous web applications. It allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes.
*   **Key Components of AJAX:**
    *   **HTML/XHTML and CSS:** For presentation.
    *   **DOM (Document Object Model):** For dynamic display and interaction with the data.
    *   **JavaScript:** The scripting language that orchestrates the asynchronous requests and updates the DOM.
    *   **XML (or other formats like JSON):** The data format for exchanging information with the server. While the name contains "XML," JSON is now far more common.
    *   **`XMLHttpRequest` object (or `fetch` API):** The core mechanism for making asynchronous requests from the browser.

#### 2.2 Purpose of AJAX

*   To build more interactive and dynamic web applications that mimic the behavior of desktop applications.
*   To improve performance and user experience by minimizing full page reloads.

---

### 3. Making Asynchronous Requests with `XMLHttpRequest`

The `XMLHttpRequest` (XHR) object is the traditional and foundational way to make AJAX requests in JavaScript.

#### 3.1 Creating an `XMLHttpRequest` Object

```javascript
// For modern browsers
const xhr = new XMLHttpRequest();

// For older Internet Explorer versions (less common now)
// const xhr = new ActiveXObject("Microsoft.XMLHTTP");
```

**Important Point to Remember:** Always instantiate `XMLHttpRequest` within a `try...catch` block or check for its existence to ensure compatibility across different browsers.

#### 3.2 Opening a Request (`open()` method)

The `open()` method initializes a request. It takes three arguments:

1.  **`method` (string):** The HTTP request method (e.g., `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`).
2.  **`url` (string):** The URL of the resource to fetch.
3.  **`async` (boolean, optional):** Specifies whether the request should be asynchronous (`true`, default) or synchronous (`false`). **For AJAX, this should always be `true`.**

```javascript
xhr.open('GET', 'data.json', true); // Asynchronous GET request
```

#### 3.3 Sending the Request (`send()` method)

The `send()` method sends the request to the server.

*   For `GET` requests, `send()` can be called with no arguments or with `null`.
*   For `POST` requests, `send()` takes the request body as an argument.

```javascript
// For GET requests
xhr.send();

// For POST requests (e.g., sending form data)
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the content type
xhr.send('name=John&age=30');
```

**Important Point to Remember:** For `POST` requests, you often need to set the `Content-Type` header before calling `send()` to inform the server about the format of the data being sent.

#### 3.4 Handling Responses (`onreadystatechange` and `onload`)

The `XMLHttpRequest` object has several properties and events to track the state of the request and handle the response.

##### 3.4.1 `onreadystatechange` Event

This event fires every time the `readyState` property changes.

*   **`readyState` Property:** Indicates the status of the request.
    *   `0`: UNSENT - `open()` has not been called yet.
    *   `1`: OPENED - `open()` has been called.
    *   `2`: HEADERS_RECEIVED - `send()` has been called, and headers and status are available.
    *   `3`: LOADING - Downloading; responseText holds partial data.
    *   `4`: DONE - The operation is complete.

*   **`status` Property:** The HTTP status code of the response (e.g., `200` for OK, `404` for Not Found, `500` for Internal Server Error).
*   **`statusText` Property:** The HTTP status message (e.g., "OK", "Not Found").
*   **`responseText` Property:** The response from the server as a string.
*   **`responseXML` Property:** The response from the server as XML (if the `Content-Type` was XML).

```javascript
xhr.onreadystatechange = function() {
  // Check if the request is complete (readyState === 4)
  // and if the request was successful (status === 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Process the response
    console.log(xhr.responseText);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    // Handle errors
    console.error('Error:', xhr.status, xhr.statusText);
  }
};
```

##### 3.4.2 `onload` Event (More Modern Approach)

The `onload` event fires when the request has completed successfully (i.e., `readyState` is 4 and the `status` is in the 2xx range). This is often preferred over `onreadystatechange` for simpler success handling.

```javascript
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Process the successful response
    console.log(xhr.responseText);
  } else {
    // Handle errors
    console.error('Error:', xhr.status, xhr.statusText);
  }
};
```

##### 3.4.3 `onerror` Event

This event fires when there's a network-level error (e.g., the server is unreachable).

```javascript
xhr.onerror = function() {
  console.error('A network error occurred.');
};
```

#### 3.5 Example: Fetching Data from a JSON File

Let's assume you have a file named `users.json` in your project directory with the following content:

```json
[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]
```

Here's the JavaScript to fetch and display this data:

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', 'users.json', true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the JSON string into a JavaScript object
    const users = JSON.parse(xhr.responseText);

    // Display the users
    console.log('Users:', users);
    const userList = document.getElementById('userList'); // Assuming you have a div with id 'userList'
    if (userList) {
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
        userList.appendChild(listItem);
      });
    }
  } else {
    console.error('Failed to load users. Status:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Network error while fetching users.');
};

xhr.send();
```

---

### 4. Role of Data Formats (JSON)

*   **JSON (JavaScript Object Notation):**
    *   **Definition:** A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
    *   **Structure:** Consists of key-value pairs (objects) and ordered lists of values (arrays).
    *   **Usage in AJAX:** JSON is the de facto standard for exchanging data between the client and server in AJAX. It's more efficient and easier to work with in JavaScript than XML.
    *   **Parsing JSON:** The `JSON.parse()` method in JavaScript is used to convert a JSON string into a JavaScript object.
    *   **Stringifying JavaScript Objects:** The `JSON.stringify()` method converts a JavaScript object into a JSON string (useful when sending data to the server with `POST`).

**Example:**

```javascript
// JavaScript Object
const user = {
  name: "Charlie",
  age: 25
};

// Convert to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: {"name":"Charlie","age":25}

// Convert JSON string back to JavaScript Object
const parsedUser = JSON.parse('{"name":"Charlie","age":25}');
console.log(parsedUser.name); // Output: Charlie
```

---

### 5. Modern Alternatives: The `fetch` API

The `fetch` API is a more modern and flexible interface for making asynchronous network requests. It's promise-based, making asynchronous code easier to manage.

#### 5.1 Basic `fetch` Usage

```javascript
fetch('users.json')
  .then(response => {
    // Check if the response is OK (status in the 200-299 range)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(users => {
    // Process the JSON data
    console.log('Users (fetch):', users);
    // Update the DOM with user data
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
```

#### 5.2 Key Differences from `XMLHttpRequest`

*   **Promise-based:** Uses `.then()` and `.catch()` for handling responses and errors, leading to cleaner asynchronous code.
*   **More Readable:** Generally considered more readable and easier to use.
*   **Separation of Concerns:** The `Response` object separates concerns like headers, status, and body content.
*   **Streaming:** Supports streaming of responses, which can be beneficial for large data.

---

### 6. Practice Questions & Exercises

**Question 1:**
What is the primary benefit of using AJAX in web development?

**Question 2:**
Which property of the `XMLHttpRequest` object indicates the current state of the request? List at least three possible values and their meanings.

**Question 3:**
Explain the difference between `onreadystatechange` and `onload` events for an `XMLHttpRequest` object.

**Question 4:**
If a server returns a status code of `404` for an AJAX request, what does this typically indicate?

**Question 5:**
Write a JavaScript code snippet using `XMLHttpRequest` to fetch data from a URL `'https://api.example.com/data'`. Assume the data is in JSON format. Log the response text to the console on success and an error message on failure.

**Question 6:**
What is JSON and why is it commonly used with AJAX?

**Question 7:**
How would you make a `POST` request using `XMLHttpRequest` to send a JSON payload to a server endpoint `'https://api.example.com/submit'`?

---

### Answers to Practice Questions

**Answer 1:**
The primary benefit of using AJAX is to **update parts of a web page dynamically without requiring a full page reload**, leading to a more interactive and responsive user experience.

**Answer 2:**
The `readyState` property indicates the current state of the request. Possible values include:
*   `0` (UNSENT): `open()` has not been called yet.
*   `1` (OPENED): `open()` has been called.
*   `2` (HEADERS_RECEIVED): `send()` has been called, and headers and status are available.
*   `3` (LOADING): Downloading; `responseText` holds partial data.
*   `4` (DONE): The operation is complete.

**Answer 3:**
*   **`onreadystatechange`**: This event fires every time the `readyState` property of the `XMLHttpRequest` object changes. It's used to check the state and status of the request throughout its lifecycle. You need to explicitly check `xhr.readyState === 4` and `xhr.status === 200` (or other success codes) to process the response.
*   **`onload`**: This event fires *only* when the request has completed successfully (i.e., `readyState` is `4` and the `status` is in the 2xx range). It's a more concise way to handle successful responses.

**Answer 4:**
A status code of `404` typically indicates that the **requested resource could not be found on the server**.

**Answer 5:**

```javascript
const xhr = new XMLHttpRequest();
const url = 'https://api.example.com/data';

xhr.open('GET', url, true); // 'true' for asynchronous

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Success!
    console.log('Response Text:', xhr.responseText);
    // If it's JSON, you might parse it:
    // try {
    //   const data = JSON.parse(xhr.responseText);
    //   console.log('Parsed Data:', data);
    // } catch (e) {
    //   console.error('Error parsing JSON:', e);
    // }
  } else {
    // Request failed, but a response was received
    console.error('Request failed. Status:', xhr.status, xhr.statusText);
  }
};

xhr.onerror = function() {
  // Network error (e.g., server unreachable)
  console.error('Network error occurred during the request.');
};

xhr.send();
```

**Answer 6:**
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is commonly used with AJAX because it is **easy for both humans to read and write and easy for machines to parse and generate**. In JavaScript, it's straightforward to convert JSON strings received from the server into JavaScript objects using `JSON.parse()`, making it efficient to work with data.

**Answer 7:**

```javascript
const xhr = new XMLHttpRequest();
const url = 'https://api.example.com/submit';
const dataToSend = {
  message: 'Hello from AJAX!',
  timestamp: Date.now()
};

// Convert JavaScript object to JSON string
const jsonPayload = JSON.stringify(dataToSend);

xhr.open('POST', url, true); // 'true' for asynchronous

// Set the Content-Type header to indicate we're sending JSON
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Data submitted successfully:', xhr.responseText);
  } else {
    console.error('Failed to submit data. Status:', xhr.status, xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error('Network error occurred while submitting data.');
};

xhr.send(jsonPayload); // Send the JSON string as the request body
```

---

### Important Points to Remember:

*   **Always use `true` for the third argument of `xhr.open()` to ensure asynchronous requests.**
*   **Check `xhr.readyState === 4` and `xhr.status === 200` (or `xhr.status` within 200-299 range) to process successful responses.**
*   **Handle `xhr.onerror` for network-level failures.**
*   **Use `JSON.parse()` to convert JSON strings from the server into JavaScript objects.**
*   **Use `JSON.stringify()` to convert JavaScript objects into JSON strings when sending data to the server, especially with `POST` requests.**
*   **Set the `Content-Type` header appropriately (e.g., `'application/json'`, `'application/x-www-form-urlencoded'`) before sending `POST` requests.**
*   **The `fetch` API is a modern, promise-based alternative to `XMLHttpRequest` and is generally preferred for new development.**
*   **AJAX makes web applications more dynamic and responsive by avoiding full page reloads.**
