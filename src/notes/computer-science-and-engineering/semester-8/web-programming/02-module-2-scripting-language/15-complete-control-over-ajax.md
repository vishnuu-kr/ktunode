---
title: "Complete Control over AJAX"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc31"
status: "completed"
scrapedAt: "2026-05-20T17:28:22.830Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Complete Control over AJAX

---

### Learning Outcomes:

This module aims to equip you with a thorough understanding and practical skills in controlling AJAX (Asynchronous JavaScript and XML) requests, allowing you to build dynamic and responsive web applications. By the end of this topic, you will be able to:

*   **Understand the fundamental principles of AJAX:** Grasp how AJAX enables asynchronous communication between the browser and the server without page reloads.
*   **Master the `XMLHttpRequest` object:** Learn to create, configure, and manage `XMLHttpRequest` objects for making various HTTP requests.
*   **Handle different HTTP request methods:** Implement GET, POST, PUT, DELETE, and other HTTP methods using AJAX.
*   **Manage request states and responses:** Understand the lifecycle of an AJAX request, including states and how to process server responses (text, JSON, XML).
*   **Implement error handling and debugging:** Develop strategies to identify and resolve issues during AJAX communication.
*   **Explore advanced AJAX techniques:** Learn about asynchronous vs. synchronous requests, request cancellation, setting headers, and handling cross-origin requests (CORS).
*   **Leverage modern JavaScript features for AJAX:** Utilize `fetch` API and libraries to simplify and enhance AJAX operations.

---

### 1. Understanding the Fundamental Principles of AJAX

**What is AJAX?**

AJAX (Asynchronous JavaScript and XML) is not a single technology, but rather a **set of web development techniques** used on the client-side to create asynchronous web applications. It allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means the user doesn't have to wait for the entire page to reload.

**Key Concepts:**

*   **Asynchronous Communication:** The browser sends a request to the server and continues to perform other tasks (like rendering the page or responding to user input) while waiting for the server's response. This is in contrast to synchronous requests, which block the browser until the response is received.
*   **Client-Server Model:** AJAX operates within the traditional client-server architecture of the web. The browser (client) requests resources or data from a web server.
*   **Data Exchange Formats:** While XML was historically the primary data format, modern AJAX commonly uses **JSON (JavaScript Object Notation)** due to its simplicity and direct compatibility with JavaScript. Other formats like plain text are also used.
*   **No Page Reloads:** The primary benefit of AJAX is that it allows parts of a web page to be updated without requiring a full page refresh, leading to a smoother and more interactive user experience.

**How it Works (Simplified Flow):**

1.  An event occurs on the web page (e.g., button click, user input).
2.  JavaScript code creates an `XMLHttpRequest` object (or uses `fetch`).
3.  The JavaScript code configures the request (method, URL, data).
4.  The request is sent to the server.
5.  The server processes the request and sends back a response.
6.  JavaScript receives the response and updates the HTML DOM (Document Object Model) of the web page, often without a visible interruption to the user.

---

### 2. Mastering the `XMLHttpRequest` Object

The `XMLHttpRequest` object is the cornerstone of traditional AJAX. It provides the interface for communicating with a web server.

**Creating an `XMLHttpRequest` Object:**

The way to create an `XMLHttpRequest` object varies slightly across different browsers. A common cross-browser way is:

```javascript
function createXMLHttpRequest() {
    var xhr;
    if (window.XMLHttpRequest) {
        // Modern browsers
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // Internet Explorer 6, 7
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

var xhr = createXMLHttpRequest();
```

**Key Methods and Properties:**

*   **`open(method, url, async)`:**
    *   `method`: The HTTP method to use (e.g., `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`).
    *   `url`: The URL of the resource on the server.
    *   `async` (optional): A boolean indicating whether the request should be asynchronous (`true`, default) or synchronous (`false`). **Asynchronous is highly recommended.**

    ```javascript
    xhr.open("GET", "data.json", true); // Asynchronous GET request
    ```

*   **`send(data)`:**
    *   `data` (optional): The data to send to the server in the body of the request. This is typically used with `POST` or `PUT` requests.

    ```javascript
    xhr.send(null); // For GET requests, data is null
    // For POST requests:
    // xhr.setRequestHeader("Content-Type", "application/json"); // Set Content-Type header
    // xhr.send(JSON.stringify({ name: "John Doe", age: 30 }));
    ```

*   **`onreadystatechange`:**
    *   An event handler that is called every time the `readyState` property of the `XMLHttpRequest` object changes. This is where you process the response.

    ```javascript
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) { // Request is complete
            if (xhr.status === 200) { // HTTP status 200 OK
                // Process the response
                console.log(xhr.responseText);
            } else {
                // Handle errors
                console.error("Request failed. Status:", xhr.status);
            }
        }
    };
    ```

*   **`readyState`:**
    *   A property that holds the status of the `XMLHttpRequest` object. It can have the following values:
        *   `0` (UNSENT): `open()` has not been called yet.
        *   `1` (OPENED): `open()` has been called, but `send()` has not been called.
        *   `2` (HEADERS_RECEIVED): `send()` has been called, and the headers and status are available.
        *   `3` (LOADING): Downloading; `responseText` holds partial data.
        *   `4` (DONE): The operation is complete.

*   **`status`:**
    *   A property that holds the HTTP status code of the response (e.g., 200 for OK, 404 for Not Found, 500 for Internal Server Error).

*   **`statusText`:**
    *   A property that holds the HTTP status text (e.g., "OK", "Not Found").

*   **`responseText`:**
    *   A property that holds the response from the server as a string.

*   **`responseXML`:**
    *   A property that holds the response from the server as XML Document object, if the response was formatted as XML.

*   **`setRequestHeader(header, value)`:**
    *   Sets a request header. This must be called *after* `open()` and *before* `send()`. Common headers include `Content-Type`.

    ```javascript
    xhr.setRequestHeader("Content-Type", "application/json");
    ```

*   **`getAllResponseHeaders()`:**
    *   Returns all the response headers as a string.

*   **`getResponseHeader(header)`:**
    *   Returns a specific response header as a string.

---

### 3. Handling Different HTTP Request Methods

AJAX can be used to make requests using various HTTP methods.

**GET Request:**

Used to retrieve data from a specified resource. Data is typically passed in the URL as query parameters.

```javascript
var xhr = createXMLHttpRequest();
xhr.open("GET", "api/users?id=123", true); // Fetch user with ID 123

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("User data:", xhr.responseText);
    }
};
xhr.send(null);
```

**POST Request:**

Used to submit data to be processed by a specified resource, often resulting in a change in server state or side effects. Data is sent in the request body.

```javascript
var xhr = createXMLHttpRequest();
xhr.open("POST", "api/users", true);

// Set the Content-Type header to indicate we are sending JSON
xhr.setRequestHeader("Content-Type", "application/json");

var userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
};

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) { // 201 Created
        console.log("User created:", xhr.responseText);
    } else if (xhr.readyState === XMLHttpRequest.DONE) {
        console.error("Failed to create user. Status:", xhr.status);
    }
};

// Send the data as a JSON string
xhr.send(JSON.stringify(userData));
```

**PUT Request:**

Used to update a resource on the server or create it if it doesn't exist. Similar to POST in that data is sent in the request body.

```javascript
var xhr = createXMLHttpRequest();
xhr.open("PUT", "api/users/123", true); // Update user with ID 123

xhr.setRequestHeader("Content-Type", "application/json");

var updatedUserData = {
    email: "jane.doe.updated@example.com"
};

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("User updated successfully.");
    } else if (xhr.readyState === XMLHttpRequest.DONE) {
        console.error("Failed to update user. Status:", xhr.status);
    }
};

xhr.send(JSON.stringify(updatedUserData));
```

**DELETE Request:**

Used to delete a specified resource.

```javascript
var xhr = createXMLHttpRequest();
xhr.open("DELETE", "api/users/123", true); // Delete user with ID 123

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) { // 204 No Content
        console.log("User deleted successfully.");
    } else if (xhr.readyState === XMLHttpRequest.DONE) {
        console.error("Failed to delete user. Status:", xhr.status);
    }
};

xhr.send(null);
```

---

### 4. Managing Request States and Responses

Understanding the `readyState` and `status` is crucial for managing AJAX requests and processing their responses correctly.

**Processing Responses:**

*   **`xhr.responseText`:** Access the response body as a string.
*   **`xhr.responseXML`:** Access the response body as an XML DOM object (if the server sent XML).
*   **`xhr.getResponseHeader('Content-Type')`:** Check the `Content-Type` to know how to parse the `responseText`.

**Handling JSON Responses:**

If the server returns JSON, you can parse it into a JavaScript object using `JSON.parse()`.

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        try {
            var data = JSON.parse(xhr.responseText);
            console.log("Parsed JSON data:", data);
            // Now you can use data.name, data.age, etc.
            document.getElementById("userName").innerText = data.name;
        } catch (e) {
            console.error("Error parsing JSON:", e);
        }
    }
};
```

**Handling XML Responses:**

If the server returns XML, you can use `xhr.responseXML` and DOM manipulation methods.

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var xmlDoc = xhr.responseXML;
        if (xmlDoc) {
            var users = xmlDoc.getElementsByTagName("user");
            for (var i = 0; i < users.length; i++) {
                var name = users[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                console.log("User name:", name);
            }
        }
    }
};
```

**Important HTTP Status Codes to Know:**

*   `200 OK`: The request was successful.
*   `201 Created`: The request resulted in a new resource being created.
*   `204 No Content`: The request was successful, but there's no content to return (often for DELETE requests).
*   `301 Moved Permanently`: The requested resource has been permanently moved to a new URL.
*   `400 Bad Request`: The server could not understand the request due to invalid syntax.
*   `401 Unauthorized`: The client must authenticate itself to get the requested response.
*   `403 Forbidden`: The client does not have access rights to the content.
*   `404 Not Found`: The server cannot find the requested resource.
*   `500 Internal Server Error`: The server encountered an unexpected condition that prevented it from fulfilling the request.

---

### 5. Implementing Error Handling and Debugging

Robust error handling is essential for reliable AJAX applications.

**Common Error Scenarios:**

*   **Network Errors:** Server is down, no internet connection, invalid URL.
*   **Server Errors:** Server-side exceptions (`5xx` status codes), invalid data on server.
*   **Client-Side Errors:** Malformed requests, incorrect headers, issues parsing responses.

**Strategies for Error Handling:**

*   **Check `xhr.readyState` and `xhr.status`:** Always check if `readyState` is `DONE` (4) and `status` is `200` (or other success codes like `201`, `204`) before processing the response.
*   **`onerror` Event Handler:** The `XMLHttpRequest` object has an `onerror` event that fires when a network-level error occurs (e.g., network down, DNS lookup failure). This is a more direct way to catch network issues than relying solely on `onreadystatechange`.

    ```javascript
    xhr.onerror = function() {
        console.error("Network error occurred during the request.");
    };
    ```

*   **`try...catch` Blocks:** Use `try...catch` when parsing responses (especially JSON) to handle potential parsing errors.
*   **Logging:** Use `console.log()` and `console.error()` extensively to track the state of your AJAX requests and diagnose issues.
*   **Browser Developer Tools:** Utilize the Network tab in browser developer tools (Chrome DevTools, Firefox Developer Edition) to inspect requests, responses, headers, and status codes. This is your most powerful debugging tool.
*   **Check `statusText`:** For non-200 statuses, `statusText` can sometimes provide a hint.

**Example with Error Handling:**

```javascript
function fetchData(url, callback) {
    var xhr = createXMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(null, xhr.responseText); // Success
            } else {
                callback(new Error("Request failed with status: " + xhr.status + " " + xhr.statusText), null); // Error
            }
        }
    };

    xhr.onerror = function() {
        callback(new Error("Network error occurred."), null); // Network Error
    };

    xhr.send(null);
}

fetchData("api/data", function(error, response) {
    if (error) {
        console.error("Failed to fetch data:", error);
    } else {
        console.log("Data received:", response);
        // Process response...
    }
});
```

---

### 6. Exploring Advanced AJAX Techniques

**Asynchronous vs. Synchronous Requests:**

*   **Asynchronous (Default & Recommended):** The browser is not blocked. The `onreadystatechange` handler is called when the state changes. This is crucial for a responsive UI.
*   **Synchronous:** The browser is blocked until the request completes. The `onreadystatechange` handler is not typically used; you check `readyState` and `status` directly after calling `send()`. **Avoid synchronous requests in modern web development as they freeze the UI and lead to a poor user experience.**

    ```javascript
    // SYNCHRONOUS (AVOID THIS)
    // xhr.open("GET", "data.json", false); // false means synchronous
    // xhr.send(null);
    // if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.responseText);
    // }
    ```

**Request Cancellation:**

The `abort()` method cancels a pending `XMLHttpRequest`. This is useful if the user navigates away from the page or performs an action that makes the request irrelevant.

```javascript
var xhr = createXMLHttpRequest();
xhr.open("GET", "long_running_request.php", true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // ... process response or handle error
    }
};

xhr.send(null);

// Later, if you need to cancel:
// xhr.abort();
// console.log("Request aborted.");
```

**Setting Request Headers:**

As seen in POST/PUT examples, `setRequestHeader(name, value)` is used to add custom headers or modify default ones. This is essential for specifying `Content-Type`, authentication tokens, etc.

```javascript
xhr.setRequestHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN");
xhr.setRequestHeader("X-Custom-Header", "MyValue");
```

**Handling Cross-Origin Requests (CORS):**

By default, browsers enforce the **Same-Origin Policy**, which prevents a web page from making AJAX requests to a different origin (protocol, domain, or port) than the one that served the page.

*   **Cross-Origin Resource Sharing (CORS)** is a mechanism that allows restricted resources on a web page to be requested from another domain.
*   The **server** must explicitly grant permission for cross-origin requests by sending specific HTTP headers (e.g., `Access-Control-Allow-Origin`).
*   When a browser makes a cross-origin request, it might first send a "preflight" request (using the `OPTIONS` HTTP method) to check if the server allows the actual request.

**Example of `Access-Control-Allow-Origin` header (on the server side):**

```
Access-Control-Allow-Origin: *  // Allows any origin
Access-Control-Allow-Origin: https://www.your-allowed-domain.com // Allows specific origin
```

**If you encounter CORS errors:**

*   Check browser console for CORS-related error messages.
*   Ensure the server is configured to send the appropriate `Access-Control-Allow-Origin` header.
*   For development, you might use browser extensions or proxy servers that bypass CORS, but this is not a production solution.

---

### 7. Leveraging Modern JavaScript Features for AJAX

While `XMLHttpRequest` is fundamental, modern JavaScript offers more convenient and powerful ways to handle AJAX.

**The `fetch` API:**

Introduced in ES6, `fetch` is a more modern and flexible API for making network requests. It's promise-based, making asynchronous operations cleaner.

**Basic `fetch` Usage:**

```javascript
fetch('api/data') // Makes a GET request by default
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Or response.json() for JSON data
    })
    .then(data => {
        console.log("Data from fetch:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
```

**`fetch` with Options (POST request):**

```javascript
fetch('api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alice', age: 25 })
})
.then(response => {
    if (response.ok) {
        return response.json(); // Assuming server responds with JSON
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then(userData => {
    console.log("User created:", userData);
})
.catch(error => {
    console.error("Fetch error:", error);
});
```

**Advantages of `fetch` over `XMLHttpRequest`:**

*   **Promise-based:** Easier to chain asynchronous operations with `.then()` and `.catch()`.
*   **Cleaner API:** More intuitive for common tasks.
*   **Request/Response Objects:** Uses distinct `Request` and `Response` objects.
*   **Broader Capabilities:** Supports newer HTTP features like streams.

**Limitations of `fetch` (compared to XHR):**

*   No built-in `abort()` method (though `AbortController` can be used).
*   Does not provide upload progress by default.
*   `fetch` does not automatically reject on HTTP error statuses (e.g., 404, 500); you must check `response.ok` or `response.status` manually.

**JavaScript Libraries (e.g., Axios):**

Libraries like Axios abstract away much of the complexity of AJAX requests, providing features like:

*   Browser and Node.js support.
*   Interceptors for request and response handling.
*   Automatic JSON transformation.
*   Request cancellation.
*   Upload progress.
*   Better error handling.

**Example with Axios:**

```javascript
// Assuming you've included Axios via CDN or installed it
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get('/api/users?id=123')
    .then(response => {
        console.log("Axios GET response:", response.data); // Axios automatically parses JSON
    })
    .catch(error => {
        console.error("Axios error:", error);
    });

axios.post('/api/users', { name: 'Bob', age: 40 })
    .then(response => {
        console.log("Axios POST response:", response.data);
    })
    .catch(error => {
        console.error("Axios error:", error);
    });
```

---

### Practice Questions and Exercises

**Question 1: `XMLHttpRequest` State Management**

What are the five possible values for the `readyState` property of an `XMLHttpRequest` object, and what does each one signify?

**Answer:**
1.  `0` (UNSENT): `open()` has not been called yet.
2.  `1` (OPENED): `open()` has been called, but `send()` has not been called.
3.  `2` (HEADERS_RECEIVED): `send()` has been called, and the headers and status are available.
4.  `3` (LOADING): Downloading; `responseText` holds partial data.
5.  `4` (DONE): The operation is complete.

---

**Question 2: Handling Successful JSON Response**

Write a JavaScript snippet using `XMLHttpRequest` that makes a GET request to `/api/products`. If the request is successful (status 200) and the response is JSON, parse the JSON and log the `name` of the first product to the console. Assume the JSON response looks like this: `[{"id": 1, "name": "Laptop"}, {"id": 2, "name": "Mouse"}]`.

**Answer:**

```javascript
function getProducts() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/products", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var products = JSON.parse(xhr.responseText);
                    if (products && products.length > 0) {
                        console.log("First product name:", products[0].name);
                    } else {
                        console.log("No products found.");
                    }
                } catch (e) {
                    console.error("Error parsing JSON:", e);
                }
            } else {
                console.error("Request failed. Status:", xhr.status);
            }
        }
    };

    xhr.onerror = function() {
        console.error("Network error occurred.");
    };

    xhr.send(null);
}

// Call the function to initiate the request
// getProducts();
```

---

**Question 3: `fetch` API vs. `XMLHttpRequest`**

List at least three advantages of using the `fetch` API over the traditional `XMLHttpRequest` object for making AJAX requests.

**Answer:**
1.  **Promise-based:** `fetch` uses promises, making asynchronous code easier to write and manage with `.then()` and `.catch()`.
2.  **Cleaner API:** `fetch` has a more modern and intuitive API, separating request and response logic.
3.  **Automatic JSON parsing (with `response.json()`):** While XHR requires `JSON.parse()`, `fetch` provides a `response.json()` method that returns a promise resolving with the parsed JSON.
4.  **Supports modern web standards:** `fetch` is built on newer web platform APIs.

---

**Question 4: Error Scenario Identification**

You are trying to load data from a server using `xhr.open("GET", "/api/nonexistent-data", true);`. The server is running, but the requested resource does not exist. What `xhr.status` code would you expect to receive, and what error handling mechanism would be most appropriate to catch this?

**Answer:**
You would expect to receive an `xhr.status` code of `404 Not Found`.

The most appropriate error handling mechanism to catch this specific scenario (a server-side error that returns a non-200 status code) is to check the `xhr.status` property within the `onreadystatechange` handler when `xhr.readyState` is `4` (DONE).

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Success
        } else {
            // Handle non-200 status codes, including 404
            console.error("Request failed with status:", xhr.status, xhr.statusText);
        }
    }
};
```

---

### Important Points to Remember:

*   **Always use asynchronous requests (`async = true`)** for a responsive user interface.
*   **Properly check `xhr.readyState === XMLHttpRequest.DONE` and `xhr.status === 200`** before processing a successful response.
*   **Use `JSON.stringify()`** to send JavaScript objects as JSON in the request body, and **`JSON.parse()`** to convert JSON strings from the server into JavaScript objects.
*   **Set the `Content-Type` header** appropriately, especially for POST and PUT requests.
*   **Implement comprehensive error handling** for network issues, server errors, and response parsing.
*   **Utilize browser developer tools** extensively for debugging AJAX requests.
*   **Understand CORS** and how to handle cross-origin requests (server-side configuration is key).
*   Consider using **modern APIs like `fetch` or libraries like Axios** for cleaner and more powerful AJAX implementations.
*   AJAX is about **asynchronous communication** to update parts of a web page without a full reload.

---
