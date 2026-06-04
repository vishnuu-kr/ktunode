---
title: "Web application: HTTP, Message format"
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff043"
status: "completed"
scrapedAt: "2026-05-23T17:59:58.359Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction
## Topic: Web Application: HTTP, Message Format

---

### **Introduction to the Topic**

This section delves into the **Hypertext Transfer Protocol (HTTP)**, the foundational protocol for data communication on the World Wide Web. We will explore its role as a **request-response protocol** and dissect the structure and components of HTTP messages, which are the building blocks of web interactions. Understanding HTTP is crucial for comprehending how web browsers fetch and display web pages, making it a cornerstone for anyone learning about computer networks and web applications.

---

### **Learning Outcomes Covered**

*   **CO1 (Summarize principles and components of computer networks):** Understanding HTTP's role as an application layer protocol within the TCP/IP suite contributes to summarizing networking principles.
*   **CO2 (Demonstrate protocols and functions of different layers):** This topic directly addresses a key protocol (HTTP) and its function at the application layer.
*   **CO2 (Demonstrate protocols and functions of different layers):** Examining HTTP message formats helps in demonstrating the detailed functions of application layer protocols.

---

### **Key Concepts and Definitions**

#### **1. What is HTTP?**

*   **Definition:** HTTP (Hypertext Transfer Protocol) is an **application layer protocol** used for transmitting hypermedia documents, such as HTML. It is the foundation of data communication for the World Wide Web.
*   **Request-Response Protocol:** HTTP operates on a client-server model. A **client** (typically a web browser) sends an **HTTP request** to a **server**, and the server responds with an **HTTP response**.
*   **Stateless Protocol:** By default, HTTP is stateless. This means that each request from the client to the server is treated as an independent transaction. The server does not remember any previous requests from the same client.
*   **Text-based Protocol:** HTTP messages are human-readable text, making it easier to debug and understand.
*   **Runs over TCP:** HTTP typically runs on top of **Transmission Control Protocol (TCP)**, which provides reliable and ordered data delivery. TCP ensures that HTTP messages are delivered without errors and in the correct sequence.

#### **2. How HTTP Works (Simplified)**

1.  **Client Initiation:** The user enters a URL (Uniform Resource Locator) in their web browser.
2.  **DNS Lookup:** The browser resolves the hostname in the URL to an IP address using the Domain Name System (DNS).
3.  **TCP Connection:** The browser establishes a TCP connection to the web server at the resolved IP address, typically on port 80 for HTTP or port 443 for HTTPS.
4.  **HTTP Request:** The browser sends an HTTP request message to the server, asking for a specific resource (e.g., an HTML file, an image).
5.  **Server Processing:** The web server receives the request, processes it, retrieves the requested resource, and prepares an HTTP response.
6.  **HTTP Response:** The server sends the HTTP response message back to the browser.
7.  **Browser Rendering:** The browser receives the response, parses the content (e.g., HTML), and renders the web page to the user.
8.  **Connection Closure (or Reuse):** The TCP connection can be closed or kept open for subsequent requests (persistent connections).

#### **3. HTTP Message Format**

HTTP messages are broadly categorized into two types: **Request Messages** and **Response Messages**. Both follow a similar structure:

*   **Start-line:** The first line of the message, indicating the type of message and its purpose.
*   **Header Section:** A series of lines containing attribute-value pairs that provide metadata about the message.
*   **Empty Line:** A blank line separating the header section from the message body.
*   **Message Body (Optional):** Contains the actual data being transmitted (e.g., HTML content, form data).

##### **3.1. HTTP Request Message Format**

```
<Request-Line>
<Headers>
<CRLF>
[<Entity-Body>]
```

*   **Request-Line:**
    *   **Method:** Specifies the HTTP method to be performed on the resource (e.g., `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`).
    *   **URL/Path:** The path to the requested resource on the server.
    *   **HTTP Version:** The version of HTTP being used (e.g., `HTTP/1.1`, `HTTP/2`).

    **Example Request-Line:**
    ```
    GET /index.html HTTP/1.1
    ```
    *   `GET`: The method (retrieve a resource).
    *   `/index.html`: The path to the HTML file.
    *   `HTTP/1.1`: The HTTP protocol version.

*   **Headers:** Key-value pairs that provide additional information. Common headers include:
    *   `Host`: The domain name of the server. (Required in HTTP/1.1)
        *   *Example:* `Host: www.example.com`
    *   `User-Agent`: Information about the client making the request (e.g., browser type and version).
        *   *Example:* `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`
    *   `Accept`: Specifies the media types the client can understand (e.g., `text/html`, `image/jpeg`).
        *   *Example:* `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`
    *   `Accept-Language`: Specifies the preferred languages for the response.
        *   *Example:* `Accept-Language: en-US,en;q=0.5`
    *   `Connection`: Controls whether the network connection is persistent or not.
        *   *Example:* `Connection: keep-alive` (keeps the connection open for multiple requests) or `Connection: close` (closes after the response).
    *   `Content-Type`: Specifies the media type of the entity-body in POST/PUT requests.
        *   *Example:* `Content-Type: application/x-www-form-urlencoded`
    *   `Content-Length`: The size of the entity-body in bytes.
        *   *Example:* `Content-Length: 1024`
    *   `Cookie`: Sends cookies previously stored by the server.
        *   *Example:* `Cookie: session_id=abc123xyz`

*   **Entity-Body:** Contains data sent to the server, typically with `POST` or `PUT` requests.
    *   *Example (for a POST request with form data):* `name=John+Doe&age=30`

##### **3.2. HTTP Response Message Format**

```
<Status-Line>
<Headers>
<CRLF>
[<Entity-Body>]
```

*   **Status-Line:**
    *   **HTTP Version:** The version of HTTP being used.
    *   **Status Code:** A three-digit code indicating the outcome of the request.
    *   **Reason Phrase:** A short, human-readable description of the status code.

    **Example Status-Line:**
    ```
    HTTP/1.1 200 OK
    ```
    *   `HTTP/1.1`: The HTTP protocol version.
    *   `200`: The status code, indicating success.
    *   `OK`: The reason phrase.

*   **Common Status Codes:**
    *   **2xx (Success):**
        *   `200 OK`: The request was successful.
        *   `201 Created`: The request resulted in the creation of a new resource.
        *   `204 No Content`: The request was successful, but there is no content to return.
    *   **3xx (Redirection):**
        *   `301 Moved Permanently`: The requested resource has been permanently moved to a new URL.
        *   `302 Found` (or `307 Temporary Redirect`): The requested resource has been temporarily moved.
    *   **4xx (Client Error):**
        *   `400 Bad Request`: The server could not understand the request due to invalid syntax.
        *   `401 Unauthorized`: Authentication is required and has failed or has not yet been provided.
        *   `403 Forbidden`: The server understood the request but refuses to authorize it.
        *   `404 Not Found`: The server cannot find the requested resource.
    *   **5xx (Server Error):**
        *   `500 Internal Server Error`: The server encountered an unexpected condition that prevented it from fulfilling the request.
        *   `503 Service Unavailable`: The server is currently unable to handle the request.

*   **Headers:** Similar to request headers, but with specific response headers. Common ones include:
    *   `Server`: Information about the server software.
        *   *Example:* `Server: Apache/2.4.41 (Ubuntu)`
    *   `Date`: The date and time the response was generated.
        *   *Example:* `Date: Tue, 15 Nov 2023 10:00:00 GMT`
    *   `Content-Type`: The media type of the entity-body.
        *   *Example:* `Content-Type: text/html; charset=UTF-8`
    *   `Content-Length`: The size of the entity-body in bytes.
        *   *Example:* `Content-Length: 5123`
    *   `Last-Modified`: The date and time the requested resource was last modified.
        *   *Example:* `Last-Modified: Mon, 13 Nov 2023 14:30:00 GMT`
    *   `Set-Cookie`: Instructs the client to store a cookie.
        *   *Example:* `Set-Cookie: user_session=abcdef12345; Expires=Wed, 15 Nov 2023 10:00:00 GMT; HttpOnly`
    *   `Location`: Used in redirects (3xx status codes) to specify the new URL.
        *   *Example:* `Location: /new-page.html`

*   **Entity-Body:** Contains the actual requested resource (e.g., HTML page, image data).

#### **4. HTTP Versions**

*   **HTTP/1.0:** Early version, typically closed the connection after each request-response pair. Less efficient.
*   **HTTP/1.1:** Introduced persistent connections (keeping connections open for multiple requests), pipelining (sending multiple requests without waiting for responses), caching improvements, and more features. Most widely used for a long time.
*   **HTTP/2:** Introduced multiplexing (allowing multiple requests and responses over a single connection simultaneously), header compression, server push, and binary framing, leading to significant performance improvements.
*   **HTTP/3:** Built upon HTTP/2 but uses **QUIC** (Quick UDP Internet Connections) instead of TCP as the transport layer. QUIC aims to further reduce latency by eliminating head-of-line blocking at the transport layer.

---

### **Examples and Illustrations**

**Example 1: Fetching a Web Page (Simplified HTTP/1.1 Interaction)**

**Client (Browser) sends a Request:**

```
GET /products.html HTTP/1.1
Host: www.store.com
User-Agent: MyBrowser/1.0
Accept: text/html
Connection: keep-alive

```

**Server (Web Server) at www.store.com receives the request.** It finds `products.html` and prepares a response.

**Server sends a Response:**

```
HTTP/1.1 200 OK
Date: Tue, 15 Nov 2023 10:05:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 1250
Last-Modified: Mon, 13 Nov 2023 15:00:00 GMT
Connection: keep-alive

<!DOCTYPE html>
<html>
<head>
    <title>Our Products</title>
</head>
<body>
    <h1>Welcome to our products page!</h1>
    <p>Here are our latest offerings...</p>
    <!-- ... more HTML content ... -->
</body>
</html>
```

**Browser receives the response, parses the HTML, and displays the page.** The `Connection: keep-alive` header suggests the connection remains open for future requests.

**Example 2: Submitting Form Data (POST Request)**

A user fills out a login form with username "alice" and password "securepwd".

**Client sends a POST Request:**

```
POST /login HTTP/1.1
Host: www.auth.com
User-Agent: MyBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 26
Connection: close

username=alice&password=securepwd
```

**Server receives the POST request, processes the username and password.**

**Server sends a Response (e.g., redirecting to a dashboard):**

```
HTTP/1.1 302 Found
Date: Tue, 15 Nov 2023 10:10:00 GMT
Server: Nginx/1.18.0
Location: /dashboard.html
Content-Length: 0
Connection: close

```

The browser receives this, sees the `302 Found` status and `Location` header, and then initiates a new GET request for `/dashboard.html`. The `Connection: close` header indicates the previous connection will be terminated.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Textbook and Reference Material Integration**

*   **Kurose & Ross (Chapter 6: Application Layer):** This chapter provides a comprehensive overview of application layer protocols, including HTTP. It explains HTTP's role, its request-response nature, and details the structure of HTTP messages. The concepts of client-server architecture and the sequence of operations are thoroughly covered. The text emphasizes HTTP's statelessness and the evolution of its versions.
*   **Forouzan (Chapter 15: Application Layer):** Forouzan also covers HTTP as a primary application layer protocol. It breaks down the components of HTTP requests and responses, including the start-line, headers, and body, with detailed explanations of common methods and status codes. The book likely uses clear diagrams to illustrate message structures.
*   **Peterson & Davie:** Likely discusses HTTP in the context of the overall web architecture and its interaction with TCP. It might offer a systems-level perspective on how HTTP requests are processed by servers and clients.
*   **Tanenbaum & Wetherall:** Would cover HTTP as part of the application layer, potentially comparing its design choices and evolution against other application protocols.

---

### **Alignment with Course Outcomes**

*   **CO1 (Summarize principles and components):** Understanding HTTP as an application layer protocol operating over TCP helps in summarizing the layered architecture of computer networks and the fundamental principles of client-server communication.
*   **CO2 (Demonstrate protocols and functions):** This topic directly addresses the protocol HTTP and details its functions in web browsing. By analyzing the message formats, we demonstrate the specific mechanisms used at the application layer to exchange information.
*   **CO2 (Demonstrate protocols and functions):** Understanding the different HTTP methods (`GET`, `POST`, etc.) and status codes allows for a deeper demonstration of how application-layer protocols facilitate specific actions and communicate outcomes.

---

### **Important Points to Remember**

*   **HTTP is a stateless, request-response protocol.**
*   HTTP typically uses **TCP** for reliable transport.
*   HTTP messages consist of a **start-line, headers, and an optional body.**
*   **Request messages** use methods like `GET` and `POST`.
*   **Response messages** use status codes (e.g., `200 OK`, `404 Not Found`) and reason phrases.
*   **Headers** provide essential metadata for both requests and responses.
*   **Persistent connections** (`Connection: keep-alive`) improve performance by reusing TCP connections.
*   **HTTP/1.1** is widely adopted, while **HTTP/2 and HTTP/3** offer significant performance enhancements.

---

### **Practice Questions and Exercises**

**Question 1:**

Describe the basic flow of communication between a web browser and a web server using HTTP. Mention the roles of both the client and the server.

**Answer:**
The web browser (client) initiates the communication by sending an HTTP request to the web server. The server receives the request, processes it, and sends an HTTP response back to the browser. The browser then displays the requested content (e.g., a web page). This is a client-server, request-response model.

**Question 2:**

What are the three main parts of an HTTP message? Briefly explain each part.

**Answer:**
1.  **Start-line:** The first line of the message, specifying the request method and URL (for requests) or the protocol version, status code, and reason phrase (for responses).
2.  **Header Section:** Contains key-value pairs that provide metadata about the message (e.g., `Host`, `User-Agent`, `Content-Type`).
3.  **Message Body (Optional):** Contains the actual data being transmitted, such as HTML content or form data.

**Question 3:**

Given the following HTTP request snippet, identify the HTTP method, the requested resource, and the HTTP version.

```
GET /images/logo.png HTTP/1.1
Host: www.company.com
```

**Answer:**
*   **HTTP Method:** `GET`
*   **Requested Resource:** `/images/logo.png`
*   **HTTP Version:** `HTTP/1.1`

**Question 4:**

What is the primary purpose of the `Content-Type` header in an HTTP request and an HTTP response? Provide an example for each.

**Answer:**
*   **In a request:** The `Content-Type` header indicates the media type of the data being sent in the request body, typically for `POST` or `PUT` requests.
    *   *Example:* `Content-Type: application/x-www-form-urlencoded` (for form submissions)
*   **In a response:** The `Content-Type` header indicates the media type of the data being sent in the response body.
    *   *Example:* `Content-Type: text/html; charset=UTF-8` (for an HTML page)

**Question 5:**

Explain the concept of HTTP being a "stateless" protocol. What are the implications of this statelessness?

**Answer:**
HTTP is stateless because each request from the client to the server is treated independently. The server does not store any information about previous requests from the same client. This simplifies server design. However, it means that if a web application needs to maintain state (like a logged-in user session), it must use mechanisms like cookies or session IDs passed in HTTP headers.

---

### **Further Exploration (Optional)**

*   **HTTPS:** Explore how HTTP Secure (HTTPS) uses TLS/SSL to encrypt communication.
*   **HTTP Methods:** Dive deeper into other HTTP methods like `PUT`, `DELETE`, `OPTIONS`, and `HEAD`.
*   **Caching:** Learn how HTTP headers like `Cache-Control` and `ETag` are used for web caching.
*   **Cookies and Sessions:** Understand how state is maintained across stateless HTTP requests.

---