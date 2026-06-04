---
title: "Cross-Origin Resource Sharing"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc32"
status: "completed"
scrapedAt: "2026-05-20T17:28:23.533Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Cross-Origin Resource Sharing (CORS)

---

### 1. Introduction to CORS

*   **What is CORS?**
    *   CORS is a security mechanism that allows web pages to request resources from a domain different from the one the page originated from.
    *   It's a **browser security feature**, not a server security feature.
    *   It's implemented through **HTTP headers**.

*   **Why is CORS necessary?**
    *   **Same-Origin Policy (SOP)**: By default, browsers enforce the SOP to prevent malicious scripts from reading sensitive data from a different origin.
    *   **Problem:** Without CORS, a JavaScript running on `http://example.com` cannot make an AJAX request to `http://api.anotherdomain.com`. This severely limits the ability to build complex web applications that utilize multiple services or APIs.
    *   **Solution:** CORS provides a way for servers to explicitly grant permission to specific origins to access their resources.

---

### 2. Understanding Origins

*   **Definition of Origin:** An origin is defined by the combination of:
    *   **Scheme (Protocol):** e.g., `http`, `https`
    *   **Hostname (Domain):** e.g., `example.com`, `api.example.com`
    *   **Port:** e.g., `80` (default for HTTP), `443` (default for HTTPS), `8080`

*   **Examples of Origins:**
    *   `http://www.example.com`
    *   `https://api.example.com:8443`
    *   `http://localhost:3000`

*   **Same vs. Different Origins:**
    *   `http://www.example.com` and `http://www.example.com` are the **same origin**.
    *   `http://www.example.com` and `https://www.example.com` are **different origins** (due to scheme difference).
    *   `http://www.example.com` and `http://api.example.com` are **different origins** (due to hostname difference).
    *   `http://www.example.com` and `http://www.example.com:8080` are **different origins** (due to port difference).

---

### 3. How CORS Works: The Request/Response Flow

CORS involves a client (browser) and a server. When a browser encounters a cross-origin request initiated by JavaScript:

1.  **Browser checks the SOP:** The browser first determines if the request is cross-origin.
2.  **Browser sends the request:** If it's cross-origin, the browser automatically adds specific **Origin** and potentially other CORS-related headers to the request.
3.  **Server responds:** The server receives the request and, if it's configured to allow cross-origin requests, it includes CORS-related headers in its response.
4.  **Browser checks the response:** The browser examines the CORS headers in the server's response.
5.  **Access granted or denied:**
    *   If the response headers indicate permission, the browser allows the JavaScript to access the response.
    *   If the response headers do not indicate permission, the browser blocks the request and throws a CORS error in the console, even if the server successfully processed the request.

---

### 4. Key CORS HTTP Headers

CORS is controlled by a set of request and response headers.

#### 4.1. Request Headers (Sent by the Browser)

*   **`Origin`**:
    *   **Purpose:** Informs the server about the origin of the request.
    *   **Format:** `Origin: <scheme>://<hostname>:<port>`
    *   **Example:** `Origin: http://localhost:3000`

*   **`Access-Control-Request-Method`**:
    *   **Purpose:** Sent by the browser before a "non-simple" request (like PUT, DELETE, custom methods) to ask the server for permission to use a specific HTTP method.
    *   **Format:** `Access-Control-Request-Method: <HTTP method>`
    *   **Example:** `Access-Control-Request-Method: PUT`

*   **`Access-Control-Request-Headers`**:
    *   **Purpose:** Sent by the browser before a "non-simple" request to inform the server which custom HTTP headers will be included in the actual request.
    *   **Format:** `Access-Control-Request-Headers: <header-name-1>, <header-name-2>, ...`
    *   **Example:** `Access-Control-Request-Headers: Content-Type, Authorization`

#### 4.2. Response Headers (Sent by the Server)

*   **`Access-Control-Allow-Origin`**:
    *   **Purpose:** The most important CORS header. It specifies which origins are allowed to access the resource.
    *   **Format:**
        *   `Access-Control-Allow-Origin: <origin>` (e.g., `http://localhost:3000`) - Allows a specific origin.
        *   `Access-Control-Allow-Origin: *` - Allows any origin (use with caution!).
    *   **Example:** `Access-Control-Allow-Origin: http://localhost:3000`

*   **`Access-Control-Allow-Methods`**:
    *   **Purpose:** Specifies the HTTP methods that are allowed for cross-origin requests to the resource.
    *   **Format:** `Access-Control-Allow-Methods: <method-1>, <method-2>, ...`
    *   **Example:** `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`

*   **`Access-Control-Allow-Headers`**:
    *   **Purpose:** Specifies which HTTP headers are allowed in cross-origin requests. This is crucial when the request includes custom headers.
    *   **Format:** `Access-Control-Allow-Headers: <header-name-1>, <header-name-2>, ...`
    *   **Example:** `Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With`

*   **`Access-Control-Allow-Credentials`**:
    *   **Purpose:** Indicates whether the server allows credentials (like cookies, HTTP authentication, or client-side certificates) to be included in cross-origin requests.
    *   **Format:** `Access-Control-Allow-Credentials: true` or `false` (default is `false`).
    *   **Important:** If `Access-Control-Allow-Credentials` is `true`, `Access-Control-Allow-Origin` cannot be `*`. It must be a specific origin.

*   **`Access-Control-Expose-Headers`**:
    *   **Purpose:** By default, browsers only expose certain "safe" headers to JavaScript. This header allows servers to specify which *additional* headers should be made accessible to the browser's JavaScript.
    *   **Format:** `Access-Control-Expose-Headers: <header-name-1>, <header-name-2>, ...`
    *   **Example:** `Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Header`

*   **`Access-Control-Max-Age`**:
    *   **Purpose:** Specifies how long the results of a preflight request (see below) can be cached by the browser. This reduces the number of preflight requests made for subsequent requests.
    *   **Format:** `Access-Control-Max-Age: <seconds>`
    *   **Example:** `Access-Control-Max-Age: 86400` (1 day)

---

### 5. CORS Request Types: Simple vs. Non-Simple Requests

CORS categorizes requests into two types based on their characteristics:

#### 5.1. Simple Requests

These requests are considered "safe" and don't require a preflight request. They meet all of the following criteria:

*   **HTTP Method:** `GET`, `HEAD`, or `POST`.
*   **Headers:**
    *   No custom headers.
    *   Only headers with limited allowed values: `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` (with specific values: `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`).
*   **Request Body:** No `Blob` or `FormData` (though `FormData` can sometimes be considered simple if it doesn't contain certain complex data types).

**How they work:**
Browser sends the request directly with an `Origin` header. Server responds with `Access-Control-Allow-Origin`.

#### 5.2. Non-Simple Requests

Any request that does **not** meet the criteria for a simple request. This includes:

*   **HTTP Methods:** `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `CONNECT`, `TRACE`, `PUT`, etc.
*   **Custom Headers:** Any header not in the "simple" list (e.g., `Authorization`, `X-API-Key`, `Content-Type: application/json`).
*   **Request Body Types:** `application/json`, `application/xml`, `Blob` (unless specifically allowed), `FormData` with complex data.

**How they work: The Preflight Request (`OPTIONS` method)**

For non-simple requests, the browser first sends an **`OPTIONS` request** to the server. This is called a **preflight request**.

*   **Purpose of Preflight:** To determine if the actual request is safe to send. The server responds to the preflight request by indicating which methods, headers, and origins are allowed.
*   **Preflight Request Headers:**
    *   `Origin`: The origin of the request.
    *   `Access-Control-Request-Method`: The actual HTTP method the browser wants to use (e.g., `PUT`).
    *   `Access-Control-Request-Headers`: The actual headers the browser wants to use (e.g., `Content-Type, Authorization`).
*   **Preflight Response Headers:**
    *   `Access-Control-Allow-Origin`: Which origins are allowed.
    *   `Access-Control-Allow-Methods`: Which methods are allowed.
    *   `Access-Control-Allow-Headers`: Which headers are allowed.
    *   `Access-Control-Max-Age`: Caching time for the preflight response.
    *   `Access-Control-Allow-Credentials`: If credentials are allowed.

*   **Browser Action after Preflight:**
    1.  If the preflight response indicates that the requested method, headers, and origin are allowed, the browser proceeds to send the actual non-simple request.
    2.  If the preflight response indicates that the request is not allowed, the browser aborts the request and throws a CORS error.

---

### 6. CORS with Credentials (Cookies, Authentication)

*   **The Challenge:** When a browser makes a cross-origin request, it typically sends cookies automatically if the domain matches the cookie's domain. However, the SOP prevents JavaScript from accessing the response of such a request if credentials are involved.
*   **The Solution: `Access-Control-Allow-Credentials: true`**
    *   The server must explicitly set this header to `true` in its response.
    *   **Crucial Rule:** When `Access-Control-Allow-Credentials` is `true`, the `Access-Control-Allow-Origin` header **must** be a specific origin (e.g., `http://localhost:3000`). It **cannot** be `*`. This is a security measure to prevent anonymous access to resources that require authentication.
*   **Browser's Behavior:** When `Access-Control-Allow-Credentials: true` is present in the response, the browser will:
    *   Send credentials (like cookies) with the request.
    *   Allow the JavaScript to access the response data.
*   **JavaScript Configuration:** When making requests with credentials in JavaScript (e.g., using `fetch` or `XMLHttpRequest`), you must set the `credentials` option to `'include'` or `'same-origin'`.
    *   `fetch(url, { credentials: 'include' });`
    *   `xhr.withCredentials = true;`

---

### 7. Common CORS Errors and Troubleshooting

*   **"No 'Access-Control-Allow-Origin' header is present on the requested resource."**
    *   **Cause:** The server did not include the `Access-Control-Allow-Origin` header in its response, or it didn't match the requesting origin.
    *   **Fix:** Configure the server to send the correct `Access-Control-Allow-Origin` header.

*   **"Request header field <header-name> is not allowed by Access-Control-Allow-Headers in preflight response."**
    *   **Cause:** The actual request includes a custom header (or a `Content-Type` other than the simple ones) that was not listed in the `Access-Control-Allow-Headers` response from the preflight request.
    *   **Fix:** Ensure the `Access-Control-Allow-Headers` in the server's preflight response includes the required headers.

*   **"The value of the 'Access-Control-Allow-Methods' header in the response is not valid for the CORS request."**
    *   **Cause:** The HTTP method used in the actual request (e.g., `PUT`) was not listed in the `Access-Control-Allow-Methods` response from the preflight request.
    *   **Fix:** Ensure the `Access-Control-Allow-Methods` in the server's preflight response includes the required HTTP methods.

*   **"The 'Access-Control-Allow-Origin' header contains '*' when the value of 'Access-Control-Allow-Credentials' is true."**
    *   **Cause:** You have set `Access-Control-Allow-Credentials: true` on the server, but `Access-Control-Allow-Origin` is set to `*`.
    *   **Fix:** Change `Access-Control-Allow-Origin` to the specific origin making the request.

*   **Troubleshooting Steps:**
    1.  **Check Browser Developer Console:** Look for explicit CORS error messages.
    2.  **Inspect Network Requests:** Use the browser's developer tools (Network tab) to examine the request and response headers.
        *   Look for the `Origin` header in the outgoing request.
        *   Look for the `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, and `Access-Control-Allow-Credentials` headers in the server's response.
        *   Check if a preflight `OPTIONS` request was sent and what its response was.
    3.  **Verify Server Configuration:** Ensure your backend server is correctly configured to send the necessary CORS headers. This depends on your server-side language/framework (e.g., Express.js, Node.js, Spring Boot, Django, Flask).
    4.  **Test with a Specific Origin:** If you're using `Access-Control-Allow-Origin: *`, try changing it to the exact origin of your frontend application to rule out any wildcard issues.
    5.  **Consider `credentials: 'include'` in Fetch/XHR:** If dealing with cookies or authentication, ensure your JavaScript is configured to send them.

---

### 8. Practical Examples

#### Example 1: Simple GET Request

*   **Frontend Origin:** `http://localhost:8080`
*   **Backend API Origin:** `http://api.example.com`
*   **Frontend Action:** `fetch('http://api.example.com/users')`

*   **Browser Sends:**
    ```
    GET /users HTTP/1.1
    Host: api.example.com
    Origin: http://localhost:8080
    ... other headers ...
    ```

*   **Backend Responds (if configured correctly):**
    ```
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: http://localhost:8080
    Content-Type: application/json
    ... other headers ...

    [{"id": 1, "name": "Alice"}]
    ```

*   **Browser Action:** Allows JavaScript to access the response.

#### Example 2: Non-Simple POST Request with JSON and Custom Header

*   **Frontend Origin:** `http://localhost:8080`
*   **Backend API Origin:** `http://api.example.com`
*   **Frontend Action:**
    ```javascript
    fetch('http://api.example.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'your-secret-key'
      },
      body: JSON.stringify({ name: 'New Product' })
    });
    ```

*   **Step 1: Browser Sends Preflight Request:**
    ```
    OPTIONS /products HTTP/1.1
    Host: api.example.com
    Origin: http://localhost:8080
    Access-Control-Request-Method: POST
    Access-Control-Request-Headers: content-type, x-api-key
    ... other headers ...
    ```

*   **Step 2: Backend Responds to Preflight:**
    ```
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: http://localhost:8080
    Access-Control-Allow-Methods: GET, POST, PUT, DELETE
    Access-Control-Allow-Headers: Content-Type, X-API-Key
    Access-Control-Max-Age: 86400
    ... other headers ...
    ```

*   **Step 3: Browser Sends Actual Request (if preflight is successful):**
    ```
    POST /products HTTP/1.1
    Host: api.example.com
    Origin: http://localhost:8080
    Content-Type: application/json
    X-API-Key: your-secret-key
    Content-Length: ...
    ... other headers ...

    {"name": "New Product"}
    ```

*   **Step 4: Backend Responds to Actual Request:**
    ```
    HTTP/1.1 201 Created
    Access-Control-Allow-Origin: http://localhost:8080
    Content-Type: application/json
    ... other headers ...

    {"id": 123, "name": "New Product"}
    ```

*   **Browser Action:** Allows JavaScript to access the response.

#### Example 3: Cross-Origin Request with Credentials

*   **Frontend Origin:** `http://localhost:8080`
*   **Backend API Origin:** `http://api.example.com`
*   **Frontend Action:**
    ```javascript
    fetch('http://api.example.com/profile', {
      credentials: 'include' // Important for sending cookies
    });
    ```

*   **Browser Sends:**
    ```
    GET /profile HTTP/1.1
    Host: api.example.com
    Origin: http://localhost:8080
    Cookie: session_id=abc123; ... // Browser automatically adds cookies
    ... other headers ...
    ```

*   **Backend Responds (if configured correctly):**
    ```
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: http://localhost:8080 // MUST be specific!
    Access-Control-Allow-Credentials: true         // Must be true
    Content-Type: application/json
    ... other headers ...

    {"username": "user1", "email": "user1@example.com"}
    ```

*   **Browser Action:** Allows JavaScript to access the response because `credentials: 'include'` was used and the server allowed it.

---

### 9. Important Points to Remember

*   **CORS is a browser security mechanism.** The server *allows* it, but the browser *enforces* it.
*   **CORS errors are client-side errors** from the browser's perspective, even though they indicate a server configuration issue.
*   **`Access-Control-Allow-Origin: *` is convenient but insecure** if you need to protect resources or handle credentials. Always specify origins when possible, especially when `Access-Control-Allow-Credentials: true`.
*   **Preflight requests (`OPTIONS`) are essential** for non-simple requests and must be handled by the server.
*   **`Access-Control-Allow-Credentials: true` requires specific `Access-Control-Allow-Origin`** and must be configured on both the server and the client's JavaScript request.
*   **Server configuration is key.** Ensure your backend framework or server is set up to send the correct CORS headers.
*   **Check your browser's developer console network tab** for detailed information about CORS errors.

---

### 10. Practice Questions

1.  **Define "origin" in the context of web security and CORS. Provide three examples of origins that are considered different from `http://www.example.com`**.
2.  **Explain the purpose of the Same-Origin Policy (SOP). How does CORS relate to the SOP?**
3.  **What is the difference between a "simple request" and a "non-simple request" in CORS? Give an example of each.**
4.  **What is a "preflight request" in CORS? What HTTP method is used for it, and what is its purpose?**
5.  **List and describe the function of at least three important CORS response headers.**
6.  **Under what circumstances would you need to use the `Access-Control-Allow-Credentials: true` header? What is a critical restriction when using this header?**
7.  **A user reports a CORS error in their browser when trying to fetch data from your API. The error message is: "Access to fetch at 'http://api.example.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header is missing." What is the most likely cause of this error, and how would you fix it?**
8.  **Your JavaScript code needs to send a `PUT` request to an API endpoint and include a custom header called `X-Auth-Token`. What CORS mechanism will the browser use for this request, and what response headers must the server provide for the request to succeed?**

---

### 11. Answers to Practice Questions

1.  **Definition of Origin:** An origin is a combination of scheme (protocol), hostname (domain), and port.
    *   **Examples:**
        *   `https://www.example.com` (different scheme)
        *   `http://api.example.com` (different hostname)
        *   `http://www.example.com:8080` (different port)
        *   `http://sub.example.com` (different hostname)

2.  **Purpose of SOP:** The SOP prevents a JavaScript code running on one origin from accessing or manipulating resources from a different origin. This is a fundamental security measure to prevent malicious websites from stealing sensitive data or performing unauthorized actions on behalf of the user.
    *   **CORS Relation:** CORS is an extension to the SOP that allows controlled cross-origin access. It provides a mechanism for servers to grant permission to specific origins to bypass the SOP for certain resources.

3.  **Simple Request vs. Non-Simple Request:**
    *   **Simple Request:** A request that uses `GET`, `HEAD`, or `POST` methods and includes only specific allowed headers (like `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` with specific MIME types). These requests are sent directly by the browser without a preflight.
        *   **Example:** A `GET` request to `/api/items` with default headers.
    *   **Non-Simple Request:** Any request that does not meet the criteria for a simple request. This includes using methods like `PUT`, `DELETE`, `PATCH`, or including custom headers, or `Content-Type` values like `application/json`. These require a preflight `OPTIONS` request.
        *   **Example:** A `POST` request to `/api/items` with `Content-Type: application/json` and an `Authorization` header.

4.  **Preflight Request:**
    *   **HTTP Method:** `OPTIONS`.
    *   **Purpose:** Before sending a non-simple request, the browser sends an `OPTIONS` request to the target server to "check" if the actual request (with its method and headers) is allowed from the requesting origin. The server's response to this `OPTIONS` request determines if the browser will proceed with the actual request.

5.  **Important CORS Response Headers:**
    *   **`Access-Control-Allow-Origin`**: Specifies which origins are permitted to access the resource. Can be a specific origin or `*` (use with caution).
    *   **`Access-Control-Allow-Methods`**: Lists the HTTP methods allowed for cross-origin requests (e.g., `GET, POST, PUT, DELETE`).
    *   **`Access-Control-Allow-Headers`**: Lists the HTTP headers allowed in cross-origin requests (e.g., `Content-Type, Authorization`).
    *   **`Access-Control-Allow-Credentials`**: Indicates if credentials (cookies, auth) can be sent with the request. Must be `true` for credentialed requests, and in this case, `Access-Control-Allow-Origin` cannot be `*`.
    *   **`Access-Control-Expose-Headers`**: Allows JavaScript to access specific response headers that are not exposed by default.
    *   **`Access-Control-Max-Age`**: Sets the duration for which the preflight response can be cached.

6.  **`Access-Control-Allow-Credentials: true`:**
    *   **Circumstances:** You need this header when your cross-origin request involves sending credentials, such as cookies, HTTP authentication headers, or client-side certificates. It tells the browser that it's safe to send credentials and to allow JavaScript to access the response.
    *   **Critical Restriction:** When `Access-Control-Allow-Credentials` is set to `true`, the `Access-Control-Allow-Origin` header **must** specify a particular origin (e.g., `http://localhost:3000`). It **cannot** be set to `*` (wildcard) for security reasons.

7.  **Error: "Access-Control-Allow-Origin header is missing."**
    *   **Most Likely Cause:** The server did not include the `Access-Control-Allow-Origin` header in its response, or the value it sent did not match the requesting origin (`http://localhost:3000`).
    *   **Fix:** Configure your backend server to add the `Access-Control-Allow-Origin` header to all API responses. The value should be set to `http://localhost:3000` to explicitly allow requests from your frontend.

8.  **Request with `PUT` and `X-Auth-Token`:**
    *   **CORS Mechanism:** This is a non-simple request because it uses the `PUT` method and includes a custom header (`X-Auth-Token`). Therefore, the browser will first send a **preflight `OPTIONS` request**.
    *   **Required Server Response Headers (for the preflight `OPTIONS` request):**
        *   `Access-Control-Allow-Origin: http://localhost:3000` (or your specific frontend origin)
        *   `Access-Control-Allow-Methods: GET, POST, PUT, DELETE` (must include `PUT`)
        *   `Access-Control-Allow-Headers: Content-Type, X-Auth-Token` (must include `Content-Type` and `X-Auth-Token`)
    *   **Required Server Response Headers (for the actual `PUT` request):**
        *   `Access-Control-Allow-Origin: http://localhost:3000` (must match the origin)
        *   Potentially `Access-Control-Expose-Headers: ...` if you want to expose custom response headers.

---
