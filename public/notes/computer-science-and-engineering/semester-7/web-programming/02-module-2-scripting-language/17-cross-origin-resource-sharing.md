---
title: "Cross-Origin Resource Sharing"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0d3"
status: "completed"
scrapedAt: "2026-05-20T17:12:56.449Z"
---
# WEB PROGRAMMING: Module 2 - Scripting Language

## Topic: Cross-Origin Resource Sharing (CORS)

---

### 1. Introduction to CORS

*   **What is CORS?**
    *   CORS is a security mechanism implemented by web browsers.
    *   It allows web pages from one **origin** to request resources from a server on a different **origin**.
    *   Without CORS, browsers would block such requests by default to prevent malicious websites from accessing sensitive data on other websites.

*   **What is an "Origin"?**
    *   An origin is defined by the **scheme (protocol)**, **host (domain name)**, and **port** of a URL.
    *   **Same Origin Policy (SOP):** This is the fundamental security principle that CORS bypasses. The SOP dictates that a script running on one origin can only interact with resources from that same origin.
    *   **Examples of Origins:**
        *   `http://example.com`
        *   `https://example.com`
        *   `http://www.example.com`
        *   `http://example.com:8080`

*   **Why is CORS Necessary?**
    *   Modern web applications often fetch data from multiple domains (e.g., APIs hosted on different servers, content delivery networks).
    *   CORS enables these cross-origin requests, making web development more flexible and powerful.
    *   **Example Scenario:** A JavaScript application hosted on `https://myapp.com` needs to fetch user data from an API hosted on `https://api.data.com`. Without CORS, the browser would block this request.

---

### 2. Understanding Cross-Origin Requests

*   **The Problem:** When a script on `https://myapp.com` tries to make a request (e.g., using `fetch` or `XMLHttpRequest`) to `https://api.data.com`, the browser checks the origins.
    *   Origin of the script: `https://myapp.com`
    *   Origin of the resource: `https://api.data.com`
    *   Since the origins are different, the browser enforces the SOP and blocks the request, often resulting in a CORS error in the console.

*   **How CORS Works:**
    *   CORS works by the **server** on the target origin (the one being requested) explicitly granting permission for the browser to allow requests from other origins.
    *   This permission is communicated through special HTTP response headers sent back from the server.

---

### 3. CORS Mechanisms and HTTP Headers

CORS relies on specific HTTP headers exchanged between the browser and the server.

*   **A. Simple Requests:**
    *   These are GET, HEAD, or POST requests with specific allowed headers and no custom headers.
    *   The browser sends the request to the server.
    *   The server responds with an **`Access-Control-Allow-Origin`** header.
    *   If the `Origin` header in the request matches a value in the `Access-Control-Allow-Origin` header (or if it's a wildcard `*`), the browser allows the response to be read by the script.

    *   **Browser Sends:**
        ```
        GET /data HTTP/1.1
        Host: api.data.com
        Origin: https://myapp.com
        User-Agent: ...
        Accept: ...
        ```

    *   **Server Responds (Allowed):**
        ```
        HTTP/1.1 200 OK
        Access-Control-Allow-Origin: https://myapp.com
        Content-Type: application/json
        ...
        ```
        or
        ```
        HTTP/1.1 200 OK
        Access-Control-Allow-Origin: *
        Content-Type: application/json
        ...
        ```

    *   **Server Responds (Blocked - if no CORS header or mismatch):**
        ```
        HTTP/1.1 200 OK
        Content-Type: application/json
        ...
        ```
        The browser will then block the response for the script.

*   **B. Preflighted Requests:**
    *   These are requests that are not "simple" (e.g., requests using methods other than GET, HEAD, POST; requests with custom headers like `X-Requested-With` or `Authorization`; requests with `Content-Type` other than `application/json`, `application/x-www-form-urlencoded`, or `multipart/form-data`).
    *   Before the actual request is sent, the browser automatically sends an **`OPTIONS` request** to the server. This is called a **preflight request**.
    *   The preflight request informs the server about the actual request that the browser intends to make.

    *   **Browser Sends (Preflight Request):**
        ```
        OPTIONS /data HTTP/1.1
        Host: api.data.com
        Origin: https://myapp.com
        Access-Control-Request-Method: PUT
        Access-Control-Request-Headers: Content-Type, Authorization
        User-Agent: ...
        Accept: ...
        ```

    *   **Server Responds to Preflight:**
        *   The server must respond to the `OPTIONS` request with specific CORS headers to indicate whether the actual request is allowed.

        *   **Server Responds (Allowed):**
            ```
            HTTP/1.1 204 No Content
            Access-Control-Allow-Origin: https://myapp.com
            Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS
            Access-Control-Allow-Headers: Content-Type, Authorization
            Access-Control-Max-Age: 86400  // Cache preflight response for 24 hours
            ```

        *   **Server Responds (Blocked):** If any of the required `Access-Control-*` headers are missing or don't match what the browser requested, the browser will block the actual request.

    *   **Browser Sends (Actual Request - if preflight is successful):**
        *   If the preflight response indicates the request is allowed, the browser then sends the actual `PUT` request.

        ```
        PUT /data HTTP/1.1
        Host: api.data.com
        Origin: https://myapp.com
        Content-Type: application/json
        Authorization: Bearer abcdef12345
        User-Agent: ...
        Accept: ...
        ```

    *   **Server Responds to Actual Request:**
        *   The server still needs to include the `Access-Control-Allow-Origin` header in the actual response.
        *   It may also include other headers like `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` (though these are more for preflight).

---

### 4. Key CORS HTTP Response Headers (Server-Side)

These are headers that the **server** sends back to the browser to control cross-origin access.

*   **`Access-Control-Allow-Origin`**:
    *   **Purpose:** Specifies which origins are permitted to access the resource.
    *   **Value:**
        *   `*`: Wildcard, allows any origin. Use with caution as it offers broad access.
        *   `https://myapp.com`: Specific origin allowed.
        *   `null`: For `file://` URLs.
    *   **Important:** If omitted or mismatched for a cross-origin request, the browser blocks the response.

*   **`Access-Control-Allow-Methods`**:
    *   **Purpose:** Used in preflight responses to specify which HTTP methods (e.g., GET, POST, PUT, DELETE) are allowed for the requested resource.
    *   **Value:** A comma-separated list of allowed methods (e.g., `GET, POST, PUT, OPTIONS`).

*   **`Access-Control-Allow-Headers`**:
    *   **Purpose:** Used in preflight responses to specify which custom HTTP headers (e.g., `Content-Type`, `Authorization`, `X-Requested-With`) are allowed in the actual request.
    *   **Value:** A comma-separated list of allowed header names (e.g., `Content-Type, Authorization, X-Custom-Header`).

*   **`Access-Control-Allow-Credentials`**:
    *   **Purpose:** Specifies whether the browser should send credentials (like cookies, authorization headers, or TLS client certificates) in the cross-origin request.
    *   **Value:** `true` or `false`.
    *   **Important:** If set to `true`, the `Access-Control-Allow-Origin` header **cannot** be `*`. It must be a specific origin.

*   **`Access-Control-Expose-Headers`**:
    *   **Purpose:** By default, JavaScript can only access a limited set of response headers (e.g., `Content-Type`, `Cache-Control`). This header allows the server to specify which custom response headers JavaScript should be able to read.
    *   **Value:** A comma-separated list of header names (e.g., `Content-Length, X-My-Custom-Header`).

*   **`Access-Control-Max-Age`**:
    *   **Purpose:** Specifies how long the results of a preflight request can be cached by the browser. This can improve performance by reducing the number of `OPTIONS` requests.
    *   **Value:** The duration in seconds (e.g., `86400` for 24 hours).

---

### 5. Key CORS HTTP Request Headers (Browser-Side)

These are headers that the **browser** automatically adds to requests.

*   **`Origin`**:
    *   **Purpose:** Sent by the browser to the server, indicating the origin of the script that initiated the request.
    *   **Example:** `Origin: https://myapp.com`

*   **`Access-Control-Request-Method`**:
    *   **Purpose:** Sent by the browser in a preflight `OPTIONS` request, indicating the HTTP method of the actual request (e.g., `GET`, `POST`, `PUT`).
    *   **Example:** `Access-Control-Request-Method: PUT`

*   **`Access-Control-Request-Headers`**:
    *   **Purpose:** Sent by the browser in a preflight `OPTIONS` request, indicating which custom headers will be included in the actual request.
    *   **Example:** `Access-Control-Request-Headers: Content-Type, Authorization`

---

### 6. Common CORS Issues and Solutions

*   **Issue: "No 'Access-Control-Allow-Origin' header is present on the requested resource."**
    *   **Cause:** The server did not include `Access-Control-Allow-Origin` in its response.
    *   **Solution:** Configure the server to send the correct `Access-Control-Allow-Origin` header.

*   **Issue: Preflight request fails.**
    *   **Cause:** The server's `OPTIONS` response is missing or incorrectly configured `Access-Control-Allow-Methods` or `Access-Control-Allow-Headers`.
    *   **Solution:** Ensure the server's `OPTIONS` handler correctly responds with `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods` (listing the actual methods used), and `Access-Control-Allow-Headers` (listing the actual headers used).

*   **Issue: Trying to send cookies or authorization headers.**
    *   **Cause:** The server does not allow credentials or the browser is not configured to send them.
    *   **Solution:**
        1.  On the server, set `Access-Control-Allow-Credentials: true`.
        2.  On the server, set `Access-Control-Allow-Origin` to a *specific* origin (e.g., `https://myapp.com`), not `*`.
        3.  On the client-side JavaScript (e.g., using `fetch` or `XMLHttpRequest`), set the `credentials` option to `'include'` or `'same-origin'`. For `XMLHttpRequest`, use `xhr.withCredentials = true;`.

*   **Issue: Trying to access custom response headers.**
    *   **Cause:** The custom header is not included in the `Access-Control-Expose-Headers` response from the server.
    *   **Solution:** Configure the server to include the desired custom headers in the `Access-Control-Expose-Headers` response.

---

### 7. Working with CORS in Practice (Examples)

*   **Client-Side (JavaScript using `fetch`):**

    ```javascript
    // Example of a simple GET request
    fetch('https://api.example.com/users')
        .then(response => {
            // Check if the response was successful (status code 200-299)
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // For cross-origin requests, the browser checks CORS headers here.
            // If CORS is not configured properly on the server,
            // the .then() block might not even be reached, or an error might be thrown.
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Common CORS errors appear here in the console.
        });

    // Example of a POST request with custom headers and credentials
    fetch('https://api.example.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_TOKEN_HERE',
            'X-Custom-Header': 'MyValue'
        },
        body: JSON.stringify({ name: 'New Gadget' }),
        credentials: 'include' // To send cookies/auth headers
    })
        .then(response => response.json())
        .then(data => console.log('Product created:', data))
        .catch(error => console.error('Error creating product:', error));
    ```

*   **Server-Side (Conceptual - Node.js with Express):**

    ```javascript
    const express = require('express');
    const cors = require('cors'); // Using the 'cors' middleware
    const app = express();

    // Basic CORS setup: Allow requests from any origin
    // app.use(cors());

    // More specific CORS setup: Allow requests from a specific origin
    const corsOptions = {
      origin: 'https://myapp.com', // The frontend origin
      methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
      allowedHeaders: 'Content-Type,Authorization,X-Custom-Header', // Allowed custom headers
      credentials: true, // Allow cookies and authorization headers
      optionsSuccessStatus: 204 // For preflight requests, send 204 No Content
    };
    app.use(cors(corsOptions));

    app.get('/data', (req, res) => {
      // For requests that are not preflighted, you still need to set origin in the response.
      // The 'cors' middleware usually handles this automatically based on options.
      // If manually setting headers:
      // res.setHeader('Access-Control-Allow-Origin', 'https://myapp.com');
      res.json({ message: 'Hello from the API!' });
    });

    // Handle preflight requests for routes that need them (if cors middleware doesn't catch them all)
    // This is generally handled by the 'cors' middleware itself.
    // If you're not using a middleware, you'd need explicit OPTIONS handlers.
    // For example:
    // app.options('/data', cors(corsOptions), (req, res) => {
    //   res.sendStatus(204);
    // });

    app.listen(3000, () => {
      console.log('API server listening on port 3000');
    });
    ```

---

### 8. Learning Outcomes Checklist

Let's ensure all learning outcomes are covered:

*   **Understand the problem that CORS solves:**
    *   Covered in **1. Introduction to CORS** and **2. Understanding Cross-Origin Requests**.
    *   **Key Concept:** Same Origin Policy (SOP).

*   **Identify what constitutes an "origin":**
    *   Covered in **1. Introduction to CORS**.
    *   **Key Concept:** Scheme + Host + Port.

*   **Differentiate between same-origin and cross-origin requests:**
    *   Covered in **1. Introduction to CORS** and **2. Understanding Cross-Origin Requests**.

*   **Explain the role of the browser and server in CORS:**
    *   Covered in **2. Understanding Cross-Origin Requests** and **3. CORS Mechanisms and HTTP Headers**.
    *   **Key Concept:** Browser enforces SOP, server grants permission via headers.

*   **Describe simple vs. preflighted requests:**
    *   Covered in **3. CORS Mechanisms and HTTP Headers**.
    *   **Key Concept:** Simple requests don't need preflight; Preflighted requests use `OPTIONS`.

*   **Identify and explain key CORS-related HTTP headers:**
    *   Covered in **3. CORS Mechanisms and HTTP Headers**, **4. Key CORS HTTP Response Headers**, and **5. Key CORS HTTP Request Headers**.
    *   **Key Headers:** `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, `Access-Control-Allow-Credentials`, `Access-Control-Expose-Headers`, `Access-Control-Request-Method`, `Access-Control-Request-Headers`, `Origin`.

*   **Configure CORS on the server-side (conceptually):**
    *   Covered in **7. Working with CORS in Practice (Examples)** (server-side example).

*   **Implement cross-origin requests on the client-side (conceptually):**
    *   Covered in **7. Working with CORS in Practice (Examples)** (client-side example).

*   **Troubleshoot common CORS errors:**
    *   Covered in **6. Common CORS Issues and Solutions**.

---

### 9. Practice Questions

**Question 1:**
Which of the following *best* defines an "origin" in the context of web security and CORS?
a) The website's favicon
b) The IP address of the server
c) The combination of scheme, host, and port
d) The domain name alone

**Question 2:**
A JavaScript script running on `https://frontend.com` makes a `fetch` request to `https://api.backend.com/data`. What is the "origin" of the request initiator?
a) `https://api.backend.com`
b) `https://frontend.com`
c) `https://api.backend.com/data`
d) `https://frontend.com/data`

**Question 3:**
Which HTTP request method does the browser use for a "preflight" request before sending a non-simple cross-origin request?
a) GET
b) POST
c) PUT
d) OPTIONS

**Question 4:**
Which CORS response header is used by the server to explicitly allow a specific origin to access its resources?
a) `Access-Control-Allow-Methods`
b) `Access-Control-Allow-Headers`
c) `Access-Control-Allow-Origin`
d) `Access-Control-Expose-Headers`

**Question 5:**
If a server wants to allow JavaScript code to read a custom response header named `X-Total-Count`, which CORS response header should it include in its response, and what would its value be?
a) `Access-Control-Allow-Headers: X-Total-Count`
b) `Access-Control-Allow-Credentials: X-Total-Count`
c) `Access-Control-Expose-Headers: X-Total-Count`
d) `Access-Control-Allow-Origin: X-Total-Count`

**Question 6:**
You are making a `POST` request with `Content-Type: application/json` and an `Authorization` header from `https://my-app.org` to `https://my-api.net`. Is this request considered "simple" or "preflighted"? Explain why.

**Question 7:**
If `Access-Control-Allow-Origin: *` is sent by the server, can the client-side JavaScript code also send cookies with the request? Why or why not?

---

### 10. Practice Questions Answers

**Answer 1:**
c) The combination of scheme, host, and port.
*Explanation: An origin is defined by scheme (http/https), host (domain name), and port (e.g., 80, 443, 8080).*

**Answer 2:**
b) `https://frontend.com`
*Explanation: The `Origin` header sent by the browser reflects where the script making the request is hosted.*

**Answer 3:**
d) OPTIONS
*Explanation: The browser sends an `OPTIONS` request to the server to ask for permission before making the actual request.*

**Answer 4:**
c) `Access-Control-Allow-Origin`
*Explanation: This header is crucial for allowing specific origins to interact with the resource.*

**Answer 5:**
c) `Access-Control-Expose-Headers: X-Total-Count`
*Explanation: `Access-Control-Expose-Headers` is used to whitelist custom response headers that the browser should make available to JavaScript.*

**Answer 6:**
This request is **preflighted**.
*Explanation: While the method (`POST`) and `Content-Type` (`application/json`) are part of "simple" requests, the inclusion of the `Authorization` header makes it non-simple. Therefore, the browser will first send an `OPTIONS` preflight request.*

**Answer 7:**
No.
*Explanation: If `Access-Control-Allow-Origin` is set to `*`, the server cannot also set `Access-Control-Allow-Credentials` to `true`. For credentials to be sent, `Access-Control-Allow-Origin` must be set to a specific origin (e.g., `https://my-app.org`).*

---

### **Important Points to Remember:**

*   **CORS is a browser security feature.** It's enforced by the client-side.
*   **Servers control CORS policy.** They explicitly grant permission via HTTP headers.
*   **`Access-Control-Allow-Origin` is mandatory** for any cross-origin request to succeed.
*   **`*` for `Access-Control-Allow-Origin` is permissive** but has limitations, especially with credentials.
*   **Preflight requests (`OPTIONS`) are for more complex requests** and require specific server configuration for `Allow-Methods` and `Allow-Headers`.
*   **Credentials (cookies, auth headers) require explicit server permission (`Access-Control-Allow-Credentials: true`) and a specific origin in `Access-Control-Allow-Origin`.**
*   **Troubleshooting CORS errors usually involves inspecting browser console logs and the network tab** to see the request and response headers.
