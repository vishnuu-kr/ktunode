---
title: "Requests"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0d1"
status: "completed"
scrapedAt: "2026-05-20T17:12:54.578Z"
---
# Module 2: Scripting Languages - Requests

This module delves into how scripting languages interact with web resources through the concept of **Requests**. We'll explore what constitutes a request, how it's formed, and how scripting languages facilitate sending and processing these requests.

## Learning Outcomes:

Upon successful completion of this topic, you should be able to:

1.  **Understand the fundamental concept of a web request.**
2.  **Identify and explain the key components of an HTTP request.**
3.  **Differentiate between HTTP request methods (GET, POST, PUT, DELETE, etc.) and their use cases.**
4.  **Explain the role of headers in HTTP requests.**
5.  **Understand how to send and process requests using a scripting language (e.g., JavaScript, Python).**
6.  **Explain the concept of query parameters and their significance.**
7.  **Describe how to handle responses to requests.**

---

## 1. Understanding the Fundamental Concept of a Web Request

At its core, a web request is a **message sent from a client (like your web browser or a script) to a server, asking for a specific resource or action.** Think of it as a question or a command directed at the web server.

*   **Client:** The entity initiating the request (e.g., a web browser, a script running on your computer, a mobile app).
*   **Server:** The computer hosting the web resource or service that the client is trying to access.
*   **Resource:** Anything that can be requested from a server, such as an HTML file, an image, a CSS file, a JavaScript file, or data from an API.
*   **Action:** What the client wants the server to do, such as retrieve data, submit data, or update data.

**Analogy:** Imagine you're at a library. You walk up to the librarian (the server) and ask for a specific book (the resource). Your request is your question to the librarian.

---

## 2. Key Components of an HTTP Request

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. A web request is typically formatted according to the HTTP protocol. The main components of an HTTP request are:

### 2.1. Request Line

This is the first line of the HTTP request and contains three essential pieces of information:

*   **HTTP Method:** Specifies the action the client wants to perform on the resource.
*   **Request Target (URI/URL):** Identifies the resource the client is interested in.
*   **HTTP Version:** Indicates the version of the HTTP protocol being used (e.g., HTTP/1.1, HTTP/2).

**Format:** `METHOD /path/to/resource HTTP/1.1`

**Example:**
`GET /index.html HTTP/1.1`

### 2.2. Headers

Headers provide additional information about the request or the client. They are key-value pairs, with the key followed by a colon and then the value.

**Common Request Headers:**

*   **`Host`:** Specifies the domain name of the server (required for HTTP/1.1 and later).
    *   *Example:* `Host: www.example.com`
*   **`User-Agent`:** Identifies the client software (browser, operating system, etc.).
    *   *Example:* `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`
*   **`Accept`:** Informs the server about the types of content the client can understand.
    *   *Example:* `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`
*   **`Accept-Language`:** Specifies the preferred natural languages for the response.
    *   *Example:* `Accept-Language: en-US,en;q=0.5`
*   **`Content-Type`:** Indicates the media type of the request body (used with POST, PUT).
    *   *Example:* `Content-Type: application/json`
*   **`Content-Length`:** The size of the request body in bytes.
    *   *Example:* `Content-Length: 1234`
*   **`Cookie`:** Sends cookies previously set by the server.
    *   *Example:* `Cookie: sessionID=abc123xyz; theme=dark`

### 2.3. Body (Optional)

The request body contains the data being sent to the server. This is typically used with methods like `POST` and `PUT` to submit data.

*   **For `GET` and `DELETE` requests, the body is usually empty.**
*   **For `POST` and `PUT` requests, the body can contain data like form submissions, JSON objects, or file uploads.**

---

## 3. Differentiating Between HTTP Request Methods

HTTP methods define the *type* of action the client intends to perform on the resource. They are crucial for distinguishing between retrieving, creating, updating, or deleting data.

| Method      | Description                                                                                                          | Idempotent? | Safe? | Common Use Cases                                                                                                                               |
| :---------- | :------------------------------------------------------------------------------------------------------------------- | :---------- | :---- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **`GET`**   | Requests to retrieve a representation of the specified resource. Data is typically sent in the URL (query parameters). | Yes         | Yes   | Fetching web pages, images, API data.                                                                                                          |
| **`POST`**  | Submits data to the specified resource, often causing a change in state or side effects on the server.               | No          | No    | Submitting form data, uploading files, creating new resources.                                                                                 |
| **`PUT`**   | Replaces all current representations of the target resource with the request payload.                                  | Yes         | No    | Updating an existing resource entirely, creating a resource if it doesn't exist at a specific URL.                                             |
| **`DELETE`**| Deletes the specified resource.                                                                                      | Yes         | No    | Removing a resource from the server.                                                                                                           |
| **`PATCH`** | Applies partial modifications to a resource.                                                                         | No          | No    | Updating only specific fields of a resource without replacing the entire resource.                                                             |
| **`HEAD`**  | Identical to `GET`, but the server MUST NOT return a message body in the response.                                   | Yes         | Yes   | Useful for retrieving metadata about a resource (e.g., `Content-Type`, `Last-Modified`) without downloading the entire content.                     |
| **`OPTIONS`**| Describes the communication options for the target resource.                                                         | Yes         | Yes   | Used to check which HTTP methods are allowed on a specific URL.                                                                                |

**Important Concepts:**

*   **Idempotent:** An operation is idempotent if making the same request multiple times produces the same result as making it once. `GET`, `PUT`, and `DELETE` are generally idempotent.
*   **Safe:** A request is considered safe if it does not alter the state of the server. `GET`, `HEAD`, and `OPTIONS` are safe methods.

---

## 4. The Role of Headers in HTTP Requests

As mentioned earlier, headers provide crucial metadata. They allow clients and servers to communicate important context about the request and the desired response.

*   **Enabling Communication:** Headers act as a language for clients and servers to understand each other's capabilities and intentions.
*   **Customization:** They allow for fine-grained control over how requests are handled and how responses are formatted.
*   **Security:** Headers like `Authorization` are used for authentication.
*   **Caching:** Headers like `Cache-Control` and `If-Modified-Since` help manage resource caching.
*   **Content Negotiation:** Headers like `Accept` and `Accept-Language` allow the client to specify its preferences.

---

## 5. Sending and Processing Requests Using Scripting Languages

Scripting languages like JavaScript (especially in the browser and Node.js) and Python are widely used to make HTTP requests.

### 5.1. JavaScript (Client-Side - Browser)

The primary way to make requests in the browser is using the `fetch` API or the older `XMLHttpRequest` object.

#### 5.1.1. The `fetch` API

`fetch` provides a modern, promise-based interface for making network requests.

```javascript
// Example GET request using fetch
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parses the response body as JSON
  })
  .then(data => {
    console.log(data); // Process the retrieved data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Example POST request using fetch
fetch('https://api.example.com/users', {
  method: 'POST', // Specify the method
  headers: {
    'Content-Type': 'application/json' // Set the content type
  },
  body: JSON.stringify({ // Convert data to JSON string
    name: 'John Doe',
    email: 'john.doe@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log('User created:', data))
  .catch(error => console.error('Error creating user:', error));
```

#### 5.1.2. `XMLHttpRequest` (Older)

While `fetch` is preferred, `XMLHttpRequest` is still relevant.

```javascript
// Example GET request using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/products', true); // Method, URL, Async

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Network error');
};

xhr.send(); // Send the request
```

### 5.2. Python (Server-Side and Scripting)

Python's `requests` library is the de facto standard for making HTTP requests.

```python
import requests
import json

# Example GET request using requests
try:
    response = requests.get('https://api.example.com/posts')
    response.raise_for_status() # Raise an exception for bad status codes (4xx or 5xx)
    posts = response.json() # Parse JSON response
    print(posts)
except requests.exceptions.RequestException as e:
    print(f"Error fetching posts: {e}")

# Example POST request using requests
user_data = {
    'username': 'jane_doe',
    'password': 'securepassword123'
}

try:
    response = requests.post('https://api.example.com/register', json=user_data) # 'json' parameter automatically sets Content-Type to application/json
    response.raise_for_status()
    print('Registration successful:', response.json())
except requests.exceptions.RequestException as e:
    print(f"Error registering user: {e}")

# Example with custom headers
headers = {'User-Agent': 'MyPythonScript/1.0'}
try:
    response = requests.get('https://api.example.com/info', headers=headers)
    response.raise_for_status()
    print('Info:', response.json())
except requests.exceptions.RequestException as e:
    print(f"Error fetching info: {e}")
```

---

## 6. Explaining the Concept of Query Parameters

Query parameters are a way to send additional data to the server as part of a URL. They are appended to the end of the URL after a question mark (`?`). Multiple parameters are separated by an ampersand (`&`).

*   **Format:** `URL?key1=value1&key2=value2`
*   **Purpose:** To filter, sort, or specify options for the requested resource.
*   **Method:** Primarily used with `GET` requests, as the parameters are part of the URL.

**Example:**

*   `https://www.example.com/products?category=electronics&sort=price_asc`
    *   Here, `category=electronics` is one query parameter, and `sort=price_asc` is another.
    *   The server would likely filter the products to show only those in the "electronics" category and sort them by price in ascending order.

**In scripting languages:**

*   **JavaScript (`fetch`):** You can construct the URL with query parameters manually or use the `URLSearchParams` API.

    ```javascript
    const url = new URL('https://api.example.com/search');
    url.searchParams.append('q', 'web programming');
    url.searchParams.append('limit', '10');
    console.log(url.toString()); // https://api.example.com/search?q=web+programming&limit=10

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
    ```

*   **Python (`requests`):** The `params` argument in `requests.get` is a convenient way to handle query parameters.

    ```python
    params = {
        'query': 'scripting languages',
        'page': 2
    }
    response = requests.get('https://api.example.com/articles', params=params)
    print(response.url) # Prints the full URL with parameters: https://api.example.com/articles?query=scripting+languages&page=2
    ```

---

## 7. Describing How to Handle Responses to Requests

Once a server receives a request, it processes it and sends back an HTTP response. Scripting languages are used to interpret and act upon this response.

### 7.1. Key Components of an HTTP Response

*   **Status Line:**
    *   **HTTP Version:** The version of the HTTP protocol.
    *   **Status Code:** A 3-digit number indicating the outcome of the request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
    *   **Reason Phrase:** A short text description of the status code.
    *   *Example:* `HTTP/1.1 200 OK`

*   **Headers:** Similar to request headers, response headers provide metadata about the response.
    *   **`Content-Type`:** The media type of the response body (e.g., `text/html`, `application/json`).
    *   **`Content-Length`:** The size of the response body.
    *   **`Server`:** Information about the server software.
    *   **`Set-Cookie`:** Used to send cookies to the client.

*   **Body (Optional):** The actual content requested by the client (e.g., HTML, JSON data, image data).

### 7.2. Handling Responses in Scripting Languages

#### 7.2.1. JavaScript (`fetch` API)

*   **`response.ok`:** A boolean property that is true if the status code is in the 2xx range (successful).
*   **`response.status`:** The HTTP status code.
*   **`response.statusText`:** The HTTP reason phrase.
*   **`response.headers`:** An object containing the response headers.
*   **`response.text()`:** Returns the response body as a string (promise).
*   **`response.json()`:** Parses the response body as JSON (promise).
*   **`response.blob()`:** Returns the response body as a Blob object.

```javascript
fetch('/api/data')
  .then(response => {
    if (response.ok) {
      return response.json(); // Process as JSON
    } else {
      // Handle errors
      console.error(`Error: ${response.status} ${response.statusText}`);
      return Promise.reject(`Error: ${response.status}`);
    }
  })
  .then(data => {
    // Use the JSON data
    console.log(data.message);
  })
  .catch(error => {
    console.error('Fetch operation failed:', error);
  });
```

#### 7.2.2. Python (`requests` Library)

*   **`response.status_code`:** The HTTP status code.
*   **`response.text`:** The response body as a string.
*   **`response.json()`:** Parses the response body as JSON.
*   **`response.headers`:** A dictionary containing the response headers.
*   **`response.raise_for_status()`:** Raises an `HTTPError` for bad responses (4xx or 5xx).

```python
try:
    response = requests.get('https://api.example.com/users')
    response.raise_for_status() # Checks for HTTP errors

    user_data = response.json()
    print(f"Total users: {len(user_data)}")
    for user in user_data:
        print(f"- {user['name']} ({user['email']})")

except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error occurred: {http_err}") # Specific HTTP error
except requests.exceptions.ConnectionError as conn_err:
    print(f"Connection error occurred: {conn_err}") # Network-related error
except requests.exceptions.Timeout as timeout_err:
    print(f"Timeout error occurred: {timeout_err}") # Request timed out
except requests.exceptions.RequestException as err:
    print(f"An unexpected error occurred: {err}") # Other request errors
```

---

## Practice Questions & Exercises

**Question 1:**
What are the three main components of the first line of an HTTP request?

**Question 2:**
Which HTTP method is considered "safe" and "idempotent"? Explain why.

**Question 3:**
You need to send a large amount of data to a server to create a new record. Which HTTP method would be most appropriate, and what header would you likely use to indicate the data format?

**Question 4:**
What is the purpose of query parameters, and how are they typically appended to a URL?

**Question 5:**
Write a JavaScript snippet using `fetch` to make a `GET` request to `https://jsonplaceholder.typicode.com/posts/1` and log the `title` of the post to the console.

**Question 6:**
Write a Python snippet using `requests` to make a `POST` request to `https://jsonplaceholder.typicode.com/posts` with the following JSON body: `{"title": "My New Post", "body": "This is the content.", "userId": 1}`. Print the `id` of the newly created post.

---

## Practice Questions & Exercises - Answers

**Answer 1:**
The three main components of the first line of an HTTP request are:
1.  **HTTP Method:** (e.g., GET, POST)
2.  **Request Target (URI/URL):** (e.g., `/index.html`)
3.  **HTTP Version:** (e.g., HTTP/1.1)

**Answer 2:**
The `GET` method is considered both "safe" and "idempotent".
*   **Safe:** It is designed to retrieve data from the server without causing any changes to the server's state.
*   **Idempotent:** Making a `GET` request multiple times for the same resource will have the same effect as making it just once (it will always retrieve the same data, assuming the resource hasn't been changed by another request in the meantime).

**Answer 3:**
The most appropriate HTTP method would be **`POST`**.
You would likely use the **`Content-Type`** header to indicate the data format, for example:
*   `Content-Type: application/json` (for JSON data)
*   `Content-Type: application/x-www-form-urlencoded` (for standard HTML form data)

**Answer 4:**
Query parameters are used to send additional data to the server as part of a URL, typically to filter, sort, or specify options for the requested resource. They are appended to the URL after a question mark (`?`), with multiple parameters separated by an ampersand (`&`).

**Answer 5:**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.title);
  })
  .catch(error => {
    console.error('Error fetching post:', error);
  });
```

**Answer 6:**

```python
import requests

post_data = {
    "title": "My New Post",
    "body": "This is the content.",
    "userId": 1
}

try:
    response = requests.post('https://jsonplaceholder.typicode.com/posts', json=post_data)
    response.raise_for_status()
    new_post = response.json()
    print(f"New post created with ID: {new_post['id']}")
except requests.exceptions.RequestException as e:
    print(f"Error creating post: {e}")
```

---

## Important Points to Remember:

*   **HTTP is stateless:** Each request is independent; the server doesn't inherently remember previous requests from the same client. Cookies and sessions are used to manage state.
*   **`GET` vs. `POST`:** Use `GET` for retrieving data and `POST` for submitting data that changes the server's state. Avoid sending sensitive information in `GET` requests as it's visible in the URL.
*   **Error Handling:** Always include robust error handling when making requests (e.g., checking `response.ok`, using `try-except` blocks, handling network errors).
*   **JSON is common:** JSON is the most prevalent data format for API requests and responses.
*   **Headers are crucial:** Don't underestimate the importance of request and response headers for communication and functionality.
*   **Asynchronous Operations:** In JavaScript, `fetch` and `XMLHttpRequest` are asynchronous, meaning they don't block the main thread while waiting for a response. This is vital for responsive web applications.
