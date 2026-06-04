---
title: "HTTP"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649e"
status: "completed"
scrapedAt: "2026-05-23T16:20:30.976Z"
---
This is a comprehensive study guide for HTTP within the context of Module 4: Transport Service - Services Provided to the Upper Layers of your Computer Network Systems course. It aims to cover all learning outcomes, incorporate textbook content, and align with course objectives.

## Module 4: Transport Service – Services Provided to the Upper Layers
### Topic: HTTP (Hypertext Transfer Protocol)

---

### **1. Introduction to HTTP and its Role in the Network Stack**

*   **What is HTTP?**
    *   HTTP stands for **Hypertext Transfer Protocol**.
    *   It is the **foundation of data communication for the World Wide Web (WWW)**.
    *   It is an **application layer protocol** that defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.
    *   HTTP is a **request-response protocol**.

*   **HTTP's Position in the OSI and TCP/IP Models:**
    *   **OSI Model:** HTTP operates at the **Application Layer (Layer 7)**.
    *   **TCP/IP Model:** HTTP operates at the **Application Layer**.

*   **Services Provided by HTTP:**
    *   **Retrieving Resources:** The primary function of HTTP is to retrieve resources (like HTML files, images, CSS, JavaScript) from a server.
    *   **Transferring Data:** It facilitates the transfer of data between clients (browsers) and servers.
    *   **Facilitating Web Browsing:** It is the backbone of how web browsers interact with web servers to display web pages.

*   **Relationship with Transport Layer:**
    *   HTTP typically relies on **TCP (Transmission Control Protocol)** for reliable, ordered, and error-checked delivery of data.
    *   TCP provides the **transport service** that HTTP needs to ensure requests and responses are delivered accurately.
    *   HTTP leverages TCP's connection-oriented nature to establish a communication channel between client and server.

*   **Key Concept:** HTTP is an **application-level protocol** that sits on top of the transport layer (usually TCP). It defines the rules for web communication.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Discusses HTTP in the context of application layer protocols and their reliance on transport services. (Likely Chapter 20 or similar for application layer).
    *   **Forouzan (5th Ed.):** Explains HTTP as a stateless protocol and its interaction with TCP. (Likely Chapter 22 or similar for application layer protocols).
    *   **Kurose & Ross (6th Ed.):** Dedicates a significant portion to HTTP, explaining its request-response mechanism, persistence, and caching. (Likely Chapter 2: Introduction to the Application Layer).

---

### **2. HTTP Message Format**

HTTP messages are structured into two main types: **Requests** (from client to server) and **Responses** (from server to client).

#### **2.1. HTTP Request Message**

*   **Structure:**
    1.  **Request Line:** Contains the HTTP method, the path to the resource, and the HTTP version.
    2.  **Header Fields:** Provide additional information about the request (e.g., client type, accepted content types).
    3.  **Empty Line:** Marks the end of the headers.
    4.  **Entity Body (Optional):** Contains data being sent to the server (e.g., form data in a POST request).

*   **Request Line Components:**
    *   **Method:** Specifies the action to be performed on the resource. Common methods include:
        *   **GET:** Requests to retrieve a specified resource. It should only retrieve data and have no other effect. (Idempotent and Safe)
        *   **POST:** Requests that the server accept the entity enclosed in the request as a new subordinate of the web for the specified URI. (Not idempotent, Not Safe)
        *   **PUT:** Requests that the enclosed entity be stored under the supplied URI. (Idempotent, Not Safe)
        *   **DELETE:** Requests that the server delete the resource identified by the URI. (Idempotent, Not Safe)
        *   **HEAD:** Similar to GET, but the server must not return a message body in the response. Useful for retrieving metadata. (Idempotent and Safe)
        *   **OPTIONS:** Requests that the server return the HTTP methods that the server supports for the requested resource. (Idempotent and Safe)
        *   **TRACE:** Performs a message loop-back test along the path to the target resource. (Idempotent and Safe)
    *   **Request-URI:** The path to the resource on the server.
    *   **HTTP-Version:** The version of HTTP being used (e.g., `HTTP/1.1`, `HTTP/2`).

*   **Common Header Fields:**
    *   `Host`: The domain name of the server. (Required in HTTP/1.1)
    *   `User-Agent`: Information about the client's browser and operating system.
    *   `Accept`: Specifies the media types the client can understand (e.g., `text/html`, `image/jpeg`).
    *   `Accept-Language`: Specifies the preferred language for the response.
    *   `Cookie`: Sends cookies previously set by the server.
    *   `Content-Type`: The MIME type of the entity-body (e.g., `application/x-www-form-urlencoded`).
    *   `Content-Length`: The size of the entity-body in bytes.

*   **Example HTTP Request:**

    ```http
    GET /index.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    ```

#### **2.2. HTTP Response Message**

*   **Structure:**
    1.  **Status Line:** Contains the HTTP version, a status code, and a status message.
    2.  **Header Fields:** Provide additional information about the response (e.g., server type, content type, last modified date).
    3.  **Empty Line:** Marks the end of the headers.
    4.  **Entity Body (Optional):** Contains the requested resource (e.g., HTML content, image data).

*   **Status Line Components:**
    *   **HTTP-Version:** The version of HTTP being used.
    *   **Status Code:** A three-digit integer indicating the result of the request.
    *   **Reason Phrase:** A short textual description of the status code.

*   **Status Code Categories:**
    *   **1xx (Informational):** The request was received, continuing process. (Rarely used in practice).
    *   **2xx (Success):** The action was successfully received, understood, and accepted.
        *   `200 OK`: The request has succeeded.
        *   `201 Created`: The request has been fulfilled and resulted in a new resource being created.
        *   `204 No Content`: The server successfully processed the request, but is not returning any content.
    *   **3xx (Redirection):** Further action needs to be taken by the user agent to fulfill the request.
        *   `301 Moved Permanently`: The requested resource has been assigned a new permanent URI.
        *   `302 Found`: The requested resource resides temporarily under another URI.
        *   `304 Not Modified`: Used as part of the HTTP caching mechanism.
    *   **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled.
        *   `400 Bad Request`: The server cannot or will not process the request due to something that is perceived to be a client error.
        *   `401 Unauthorized`: Authentication is required and has failed or has not yet been provided.
        *   `403 Forbidden`: The server understood the request, but refuses to authorize it.
        *   `404 Not Found`: The server has not found anything matching the request URI.
    *   **5xx (Server Error):** The server failed to fulfill an apparently valid request.
        *   `500 Internal Server Error`: A generic error message, given when an unexpected condition was encountered.
        *   `503 Service Unavailable`: The server is currently unable to handle the request due to a temporary overloading or maintenance.

*   **Common Header Fields:**
    *   `Server`: Information about the server software.
    *   `Content-Type`: The MIME type of the entity-body.
    *   `Content-Length`: The size of the entity-body in bytes.
    *   `Last-Modified`: The date and time the requested resource was last modified.
    *   `Set-Cookie`: Sends cookies to the client.
    *   `Location`: Used in redirects to specify the new URI.

*   **Example HTTP Response:**

    ```http
    HTTP/1.1 200 OK
    Date: Tue, 15 Nov 1994 08:12:31 GMT
    Server: Apache/2.4.41 (Ubuntu)
    Last-Modified: Sat, 13 Nov 1994 10:02:00 GMT
    ETag: "33e7-2e01-3412"
    Content-Length: 8705
    Content-Type: text/html; charset=UTF-8

    <!DOCTYPE html>
    <html>
    <head>
        <title>Example Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
    </html>
    ```

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Likely covers the basic structure of HTTP messages and status codes.
    *   **Forouzan (5th Ed.):** Provides detailed explanations of request and response headers and status codes.
    *   **Kurose & Ross (6th Ed.):** Offers a clear breakdown of message formats with examples, including headers like `Host`, `User-Agent`, `Accept`, and status codes.

---

### **3. HTTP Versions and Evolution**

HTTP has evolved over time to improve performance and features.

#### **3.1. HTTP/1.0**

*   **Key Characteristics:**
    *   **Connection per Request:** A new TCP connection was established for each HTTP request/response pair. This led to significant overhead and latency.
    *   **Stateless:** Each request was treated independently. No context was maintained between requests.
    *   **Limited Header Fields:** Simpler header fields compared to later versions.
    *   **Implicit Content-Length:** Often relied on the connection closing to indicate the end of data.

*   **Limitations:** Inefficient for fetching multiple resources from the same server due to repeated connection establishment.

#### **3.2. HTTP/1.1**

*   **Key Improvements:**
    *   **Persistent Connections (Keep-Alive):** Allows multiple HTTP requests and responses to be sent over a single TCP connection. This significantly reduces connection establishment overhead.
        *   **Pipelining:** Allows multiple requests to be sent without waiting for the responses to the previous ones. However, responses still had to be received in the order the requests were sent, which could lead to head-of-line blocking.
    *   **Host Header:** Enabled virtual hosting, allowing multiple websites to be hosted on a single IP address.
    *   **Caching Enhancements:** Introduced new caching control headers (e.g., `ETag`, `If-Modified-Since`) for more efficient caching.
    *   **Chunked Transfer Encoding:** Allows servers to send data in chunks, useful when the total size of the response is not known beforehand.
    *   **More Robust Header Fields:** Introduced features like `Content-Length` (explicitly required), `Cache-Control`, `If-None-Match`, etc.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Will detail the advantages of persistent connections and new headers introduced in HTTP/1.1.
    *   **Forouzan (5th Ed.):** Provides a thorough comparison between HTTP/1.0 and HTTP/1.1, highlighting the improvements.
    *   **Kurose & Ross (6th Ed.):** Explains persistent connections, pipelining, and the `Host` header in detail.

#### **3.3. HTTP/2**

*   **Key Goals:** Improve performance by addressing limitations of HTTP/1.1.
*   **Key Features:**
    *   **Binary Protocol:** Messages are serialized into binary frames, making parsing more efficient and less error-prone than text-based HTTP/1.1.
    *   **Multiplexing:** Allows multiple requests and responses to be sent concurrently over a single TCP connection without head-of-line blocking at the application layer. Streams are independent.
    *   **Stream Prioritization:** Allows clients to indicate to the server which resources are most important, enabling the server to send critical resources first.
    *   **Header Compression (HPACK):** Compresses redundant header information between requests, significantly reducing overhead.
    *   **Server Push:** Allows the server to proactively send resources to the client that it anticipates the client will need, without waiting for an explicit request.

*   **Benefits:** Faster page loading times, reduced server load, improved efficiency.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** May offer an overview of HTTP/2 as a more recent development.
    *   **Forouzan (5th Ed.):** Will likely cover HTTP/2 in later chapters or sections as an evolution of web protocols.
    *   **Kurose & Ross (6th Ed.):** Often includes discussions on newer protocols like HTTP/2, explaining multiplexing and header compression.

#### **3.4. HTTP/3**

*   **Key Goal:** Address head-of-line blocking that can still occur at the TCP layer in HTTP/2 (when packets are lost).
*   **Key Technology:** Uses **QUIC (Quick UDP Internet Connections)** as its transport protocol instead of TCP. QUIC is built on top of UDP.
*   **Key Features (inherited from QUIC):**
    *   **Multiplexing without Head-of-Line Blocking:** QUIC's stream multiplexing is implemented at the transport layer, so packet loss in one stream does not affect others.
    *   **0-RTT and 1-RTT Connection Establishment:** Faster connection establishment than TCP (reduced latency).
    *   **Connection Migration:** Allows a connection to persist even if the client's IP address or port changes (e.g., switching from Wi-Fi to cellular).
    *   **Improved Congestion Control:** Built-in mechanisms for better congestion management.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Likely to have limited coverage of HTTP/3 as it's a very recent protocol.
    *   **Forouzan (5th Ed.):** May offer a brief introduction to HTTP/3 and QUIC.
    *   **Kurose & Ross (6th Ed.):** Advanced editions might include discussions on HTTP/3 and QUIC.

*   **Important Point to Remember:** HTTP/2 and HTTP/3 significantly enhance web performance by addressing the limitations of HTTP/1.1, primarily through multiplexing and header compression. HTTP/3's shift to QUIC is a major architectural change.

---

### **4. HTTP Features and Concepts**

#### **4.1. Statelessness**

*   **Definition:** HTTP is fundamentally a stateless protocol. This means that the server does not maintain any memory of previous requests from a particular client. Each request is processed independently.
*   **Implication:** To track user sessions or maintain state across multiple requests, application-level mechanisms are required.

#### **4.2. Stateful Operations using Cookies**

*   **What are Cookies?** Small pieces of data that a server sends to a client's browser. The browser stores these cookies and sends them back to the same server with subsequent requests.
*   **How they work:**
    1.  Server sends a `Set-Cookie` header in an HTTP response.
    2.  Browser stores the cookie.
    3.  On subsequent requests to the same domain, the browser includes the cookie in the `Cookie` header.
*   **Purpose:** Used for session management, personalization, tracking, and authentication.
*   **Example:** Logging into a website. The server sends a session ID cookie. The browser sends this cookie with each subsequent request, allowing the server to recognize the authenticated user.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Will explain how statelessness is managed using cookies for stateful applications.
    *   **Forouzan (5th Ed.):** Provides a detailed explanation of the `Set-Cookie` and `Cookie` headers and their role in session management.
    *   **Kurose & Ross (6th Ed.):** Covers cookies extensively as a mechanism to overcome HTTP's statelessness.

#### **4.3. Caching**

*   **Purpose:** To improve performance by storing copies of frequently accessed resources (web pages, images) closer to the user (e.g., in the browser's cache or an intermediary proxy cache).
*   **Mechanism:**
    *   When a client requests a resource, the server can include caching headers like `Cache-Control`, `Expires`, `ETag`, and `Last-Modified`.
    *   If the resource hasn't changed, the server can respond with `304 Not Modified`, and the client uses its cached copy.
*   **Benefits:** Reduces server load, decreases network traffic, speeds up page loading.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Discusses caching as a performance enhancement technique.
    *   **Forouzan (5th Ed.):** Explains caching mechanisms and relevant headers.
    *   **Kurose & Ross (6th Ed.):** Provides a thorough explanation of conditional GET requests and caching headers.

#### **4.4. HTTP Authentication**

*   **Purpose:** To secure web resources and ensure that only authorized users can access them.
*   **Common Methods:**
    *   **Basic Authentication:** The client sends username and password encoded in Base64 in the `Authorization` header. (Less secure as it's easily decoded).
    *   **Digest Authentication:** A more secure method where credentials are not sent directly but are calculated using a hash-based challenge-response mechanism.
    *   **Token-Based Authentication (e.g., JWT):** After initial login, the server issues a token that the client includes in subsequent requests.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** May touch upon authentication mechanisms for web services.
    *   **Forouzan (5th Ed.):** Likely covers HTTP authentication schemes.
    *   **Kurose & Ross (6th Ed.):** Will explain the `Authorization` and `WWW-Authenticate` headers used for authentication.

#### **4.5. HTTPS (HTTP Secure)**

*   **What is HTTPS?** It's HTTP layered over an encryption protocol, primarily **TLS (Transport Layer Security)**, formerly SSL (Secure Sockets Layer).
*   **Purpose:** To provide confidentiality (encryption), integrity (data cannot be tampered with), and authentication (verifying the server's identity).
*   **Mechanism:**
    1.  Client initiates a connection to the server.
    2.  TLS handshake occurs to negotiate encryption algorithms and exchange certificates.
    3.  Once the secure channel is established, HTTP messages are encrypted and transmitted over TLS.
*   **Port:** Typically uses port 443 (while HTTP uses port 80).

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Discusses the importance of security and how TLS/SSL is used to secure application protocols like HTTP.
    *   **Forouzan (5th Ed.):** Provides a detailed explanation of TLS/SSL and its role in HTTPS.
    *   **Kurose & Ross (6th Ed.):** Explains the basics of public-key cryptography and how it's used in TLS for secure web communication.

*   **Important Point to Remember:** HTTPS is crucial for protecting sensitive data transmitted over the web. It's a must-have for e-commerce, online banking, and any site handling user credentials.

---

### **5. HTTP and its Relation to Transport Layer Services (CO4)**

*   **Transport Service Provided by TCP to HTTP:**
    *   **Reliable Data Transfer:** TCP ensures that HTTP requests and responses arrive at their destination without loss or corruption. If packets are lost, TCP retransmits them.
    *   **Ordered Delivery:** TCP guarantees that data segments are delivered to the HTTP application in the order they were sent.
    *   **Connection Establishment and Termination:** TCP provides a reliable connection-oriented service, managing the setup and teardown of the communication channel.
    *   **Flow Control:** TCP prevents a fast sender from overwhelming a slow receiver, ensuring that data is sent at a manageable rate.
    *   **Congestion Control:** TCP helps to prevent network congestion by adjusting the sending rate based on network conditions.

*   **How HTTP Leverages TCP:**
    *   HTTP relies on TCP to ensure that its messages are delivered reliably.
    *   The request-response nature of HTTP fits well with TCP's connection-oriented model.
    *   HTTP clients (browsers) initiate TCP connections to HTTP servers.
    *   Once the connection is established, HTTP requests are sent as data streams over TCP.
    *   The responses are received as data streams from TCP, which HTTP then parses.

*   **Impact of TCP's Reliability on HTTP:** Without TCP's reliable delivery, HTTP would need to implement its own mechanisms for error detection and retransmission, which would be highly complex and inefficient.

*   **Referencing:**
    *   **Tanenbaum (5th Ed.):** Explicitly discusses how application layer protocols depend on the services provided by the transport layer.
    *   **Forouzan (5th Ed.):** Details the transport layer services (reliability, flow control, etc.) and how they are utilized by application layer protocols like HTTP.
    *   **Kurose & Ross (6th Ed.):** Dedicates a chapter to transport layer protocols (TCP and UDP) and their services, then shows how HTTP relies on TCP.

*   **Alignment with CO4:** This section directly addresses CO4 by explaining the services provided by the transport layer (TCP) and how the application layer protocol HTTP utilizes these services for its functionality.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Describe the primary function of HTTP and its role in the World Wide Web. (K2)

**Question 2:**
What is the fundamental difference between an HTTP request and an HTTP response? List at least three common header fields found in an HTTP request.

**Question 3:**
Explain the concept of "statelessness" in HTTP and how cookies are used to overcome this limitation for maintaining user sessions.

**Question 4:**
Compare and contrast HTTP/1.0 and HTTP/1.1, highlighting at least two key improvements introduced in HTTP/1.1.

**Question 5:**
What are the main advantages of HTTP/2 over HTTP/1.1? Briefly describe multiplexing and header compression.

**Question 6:**
Explain the purpose of HTTPS and the role of TLS/SSL in providing secure web communication.

**Question 7:**
If a web browser requests a page and receives a `304 Not Modified` status code, what does this imply about the browser's cache and the server's response?

**Question 8:**
Why is HTTP considered an application layer protocol, and which transport layer protocol is it most commonly associated with? What services does this transport protocol provide that HTTP relies on? (CO4, K2)

---

### **7. Answers to Practice Questions**

**Answer 1:**
HTTP (Hypertext Transfer Protocol) is the application layer protocol that forms the foundation of data communication for the World Wide Web. Its primary function is to enable the retrieval of resources, such as HTML files, images, and other web content, from web servers by clients (web browsers). It defines the rules for how web clients and servers exchange messages.

**Answer 2:**
*   **HTTP Request:** Sent from the client (e.g., browser) to the server, indicating an action to be performed on a resource.
*   **HTTP Response:** Sent from the server back to the client, containing the status of the request and potentially the requested resource.

Common header fields in an HTTP request:
*   `Host`: Specifies the domain name of the server.
*   `User-Agent`: Provides information about the client's browser and OS.
*   `Accept`: Indicates the media types the client can process.

**Answer 3:**
"Statelessness" in HTTP means that the server does not store any information about previous requests from a particular client. Each request is treated as an independent transaction. To maintain state, such as remembering that a user is logged in, servers use **cookies**. A server sends a `Set-Cookie` header with a unique identifier (e.g., a session ID). The browser stores this cookie and sends it back to the server with subsequent requests in the `Cookie` header, allowing the server to recognize the client and maintain session information.

**Answer 4:**
Key improvements of HTTP/1.1 over HTTP/1.0 include:
1.  **Persistent Connections (Keep-Alive):** HTTP/1.1 allows multiple requests and responses to be sent over a single TCP connection, reducing the overhead of establishing new connections for each interaction. HTTP/1.0 typically closed the connection after each request-response cycle.
2.  **Host Header:** HTTP/1.1 introduced the `Host` header, enabling virtual hosting on web servers. This allows multiple websites with different domain names to be hosted on a single IP address. HTTP/1.0 did not have this capability, making it difficult to host multiple sites on one server.
3.  **Pipelining (though with limitations):** HTTP/1.1 allowed multiple requests to be sent over a single connection without waiting for each response, though responses had to be processed in order.

**Answer 5:**
Main advantages of HTTP/2 over HTTP/1.1:
*   **Multiplexing:** HTTP/2 allows multiple requests and responses to be interleaved and transmitted concurrently over a single TCP connection without head-of-line blocking at the application layer. This means a slow response to one request doesn't block others.
*   **Header Compression (HPACK):** HTTP/2 uses HPACK to compress redundant header information between requests. This significantly reduces the amount of data that needs to be transmitted, improving efficiency and speed, especially with many small requests.

**Answer 6:**
HTTPS (HTTP Secure) is the secure version of HTTP. It provides security through encryption, data integrity, and server authentication by layering HTTP over **TLS/SSL (Transport Layer Security/Secure Sockets Layer)**. TLS/SSL encrypts the HTTP messages exchanged between the client and server, ensuring that sensitive data (like passwords, credit card numbers) cannot be read by eavesdroppers. It also provides mechanisms to verify that the client is communicating with the legitimate server and not an imposter.

**Answer 7:**
If a web browser receives a `304 Not Modified` status code, it implies that the resource the browser requested has not changed since the last time it was fetched. The browser likely had a cached copy of the resource. The browser sent a conditional GET request (using headers like `If-Modified-Since` or `If-None-Match`). The server checked the condition and, finding no changes, responded with `304 Not Modified`. This tells the browser to use its existing cached copy, saving bandwidth and reducing server load.

**Answer 8:**
HTTP is considered an application layer protocol because it deals with the specific tasks of data formatting, communication rules, and resource retrieval for the World Wide Web. It sits above the transport layer, utilizing its services.

HTTP is most commonly associated with **TCP (Transmission Control Protocol)**. TCP provides the following crucial services that HTTP relies on:
*   **Reliable Data Transfer:** Ensures all parts of the HTTP message arrive correctly and in order.
*   **Ordered Delivery:** Guarantees that segments are reassembled in the correct sequence.
*   **Flow Control:** Prevents the sender from overwhelming the receiver.
*   **Congestion Control:** Helps manage network traffic to avoid collapse.

---

### **8. Important Points to Remember**

*   HTTP is the protocol for the Web.
*   It's a request-response, stateless protocol.
*   TCP is its primary transport layer partner, providing reliability and order.
*   Key to web browsing: GET (retrieve), POST (submit data).
*   Status codes are vital for understanding request outcomes (2xx = success, 4xx = client error, 5xx = server error).
*   Cookies enable statefulness.
*   Caching improves performance.
*   HTTPS provides security (encryption, integrity, authentication).
*   HTTP/2 and HTTP/3 offer significant performance improvements over HTTP/1.1 through multiplexing and other optimizations.

---
