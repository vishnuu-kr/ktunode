---
title: "World Wide Web (WWW) - Architectural overview"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649d"
status: "completed"
scrapedAt: "2026-05-23T16:20:30.206Z"
---
# Computer Network Systems - Module 4: Transport Service - Services Provided to the Upper Layers

## Topic: World Wide Web (WWW) - Architectural Overview

This module focuses on the services provided by the transport layer and how these services are utilized by the application layer. The World Wide Web (WWW) is a prime example of a complex application that heavily relies on transport layer services.

---

### 1. Introduction to the World Wide Web (WWW)

The World Wide Web (WWW), often simply called the Web, is a global information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet. It's arguably the most successful application of the Internet.

**Key Concepts:**

*   **Information Space:** A vast collection of interconnected documents and resources.
*   **Web Resource:** Anything that can be uniquely identified by a URL (e.g., a web page, an image, a video).
*   **Uniform Resource Locator (URL):** A string of characters used to identify a resource on the Internet. It typically includes the protocol, domain name, and path to the resource.
    *   *Example:* `https://www.example.com/path/to/document.html`
*   **Hypertext:** Text that contains links to other text. This allows users to navigate between related pieces of information.
*   **Client-Server Architecture:** The Web operates on a client-server model.

**Textbook References:**

*   **Tanenbaum:** Discusses the Web as a major application layer protocol, highlighting its client-server nature and the underlying protocols. (Chapter 6: Application Layer)
*   **Forouzan:** Explains the Web's structure and how it uses HTTP for communication. (Chapter 13: Application Layer: The World Wide Web)

---

### 2. WWW Architectural Overview

The WWW architecture is characterized by its distributed nature and the interaction between clients (web browsers) and servers (web servers).

**Key Components:**

1.  **Web Browser (Client):**
    *   A software application that requests and displays web resources.
    *   Examples: Chrome, Firefox, Safari, Edge.
    *   **Functionality:**
        *   Parses URLs.
        *   Sends HTTP requests to web servers.
        *   Receives HTTP responses.
        *   Renders HTML, CSS, JavaScript, and displays images, videos, etc.
        *   Manages caching, cookies, and history.

2.  **Web Server (Server):**
    *   A software application that listens for incoming HTTP requests from clients.
    *   Upon receiving a request, it processes it and sends back an HTTP response containing the requested resource or an error message.
    *   Examples: Apache HTTP Server, Nginx, Microsoft IIS.
    *   **Functionality:**
        *   Listens on specific ports (usually port 80 for HTTP, port 443 for HTTPS).
        *   Interprets HTTP requests.
        *   Retrieves requested resources (HTML files, images, etc.).
        *   May execute server-side scripts (e.g., PHP, Python, Java) to generate dynamic content.
        *   Sends HTTP responses back to the client.

3.  **Uniform Resource Locator (URL):**
    *   The address of a web resource.
    *   **Format:** `protocol://hostname:port/path?query#fragment`
        *   `protocol`: The scheme used to access the resource (e.g., `http`, `https`, `ftp`).
        *   `hostname`: The domain name or IP address of the server.
        *   `port`: The port number the server is listening on (default for HTTP is 80, for HTTPS is 443).
        *   `path`: The location of the resource on the server's file system.
        *   `query`: Optional parameters passed to the server.
        *   `fragment`: Specifies a specific part of the resource (e.g., a section of an HTML page).

4.  **Hypertext Transfer Protocol (HTTP):**
    *   The application protocol for distributed, collaborative, hypermedia information systems.
    *   It's the foundation of data communication for the World Wide Web.
    *   **Key Characteristics:**
        *   **Request-Response Protocol:** Clients send requests, and servers send responses.
        *   **Stateless:** Each request is independent. The server doesn't remember previous requests from the same client (though mechanisms like cookies are used to maintain state).
        *   **Text-based:** HTTP messages are human-readable text.
        *   **Connectionless (historically):** Each request-response pair typically involved establishing and closing a TCP connection. Modern HTTP (HTTP/1.1 and later) uses persistent connections for efficiency.

**Textbook References:**

*   **Tanenbaum:** Provides a detailed look at HTTP's role and structure. (Chapter 6)
*   **Forouzan:** Explains the client-server model and the process of requesting and receiving web pages. (Chapter 13)
*   **Kurose & Ross:** Emphasizes the application-layer nature of HTTP and its interaction with transport protocols. (Chapter 2: Application Layer Protocols)

---

### 3. How a Web Page is Accessed (Illustrative Example)

Let's trace the journey of a user requesting a web page:

1.  **User Input:** The user types a URL (e.g., `http://www.example.com/index.html`) into their web browser.
2.  **DNS Lookup:**
    *   The browser needs to find the IP address of `www.example.com`.
    *   It queries a Domain Name System (DNS) server.
    *   DNS translates the domain name into an IP address (e.g., `192.168.1.100`).
3.  **TCP Connection Establishment:**
    *   The browser initiates a TCP connection to the web server at `192.168.1.100` on port 80 (the default HTTP port).
    *   This involves the three-way handshake: SYN -> SYN-ACK -> ACK.
4.  **HTTP Request:**
    *   Once the TCP connection is established, the browser sends an HTTP `GET` request to the server.
    *   *Example HTTP GET Request:*
        ```http
        GET /index.html HTTP/1.1
        Host: www.example.com
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
        Connection: keep-alive
        ```
5.  **HTTP Response:**
    *   The web server receives the `GET` request, finds the `index.html` file, and sends an HTTP response back to the browser.
    *   *Example HTTP Response:*
        ```http
        HTTP/1.1 200 OK
        Date: Mon, 23 May 2024 10:00:00 GMT
        Server: Apache/2.4.41 (Ubuntu)
        Content-Type: text/html; charset=UTF-8
        Content-Length: 1234
        Connection: keep-alive

        <!DOCTYPE html>
        <html>
        <head>
            <title>Example Page</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a sample web page.</p>
            <img src="image.jpg" alt="Example Image">
        </body>
        </html>
        ```
6.  **Rendering:**
    *   The browser receives the response, parses the HTML content, and starts rendering the page.
    *   If the HTML includes references to other resources (like `image.jpg`), the browser will repeat steps 3-5 for each of these resources, often using the same TCP connection if it's persistent (HTTP/1.1+).
7.  **Connection Closure (or Reuse):**
    *   After all resources are transferred, the TCP connection might be closed or kept open for subsequent requests.

**Textbook References:**

*   **Forouzan:** Provides a step-by-step walkthrough of a web page access. (Chapter 13)
*   **Kurose & Ross:** Uses a similar example to illustrate HTTP message structure and interaction. (Chapter 2)

---

### 4. Key Protocols Involved in WWW Access

Understanding the Web's architecture requires understanding the roles of various protocols working together.

1.  **Hypertext Transfer Protocol (HTTP):**
    *   **Purpose:** Defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands.
    *   **Versions:**
        *   **HTTP/1.0:** Basic, stateless, each request opens a new connection.
        *   **HTTP/1.1:** Introduced persistent connections (keep-alive) for efficiency, pipelining, and caching improvements.
        *   **HTTP/2:** Introduced multiplexing (multiple requests over a single connection), header compression, and server push for faster loading.
        *   **HTTP/3:** Uses QUIC (built on UDP) instead of TCP, further improving performance and reducing latency.
    *   **Methods (Verbs):**
        *   `GET`: Requests a representation of the specified resource.
        *   `POST`: Submits data to be processed to a specified resource.
        *   `PUT`: Uploads a representation of the specified resource.
        *   `DELETE`: Deletes the specified resource.
        *   `HEAD`: Asks for the headers that would be returned if a `GET` request was made.
        *   `OPTIONS`: Describes the communication options for the target resource.
    *   **Status Codes:** Indicate the outcome of an HTTP request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).

2.  **Hypertext Transfer Protocol Secure (HTTPS):**
    *   **Purpose:** The secure version of HTTP, using TLS/SSL to encrypt communication between the client and server.
    *   **Benefits:** Provides confidentiality, integrity, and authentication.
    *   **Mechanism:** Typically involves establishing a TLS/SSL connection *before* sending HTTP requests.

3.  **Uniform Resource Locator (URL):**
    *   As discussed, the addressing scheme for web resources.

4.  **Domain Name System (DNS):**
    *   **Purpose:** Translates human-readable domain names into machine-readable IP addresses.
    *   **Role in WWW:** Essential for clients to locate web servers.

5.  **Transmission Control Protocol (TCP):**
    *   **Purpose:** Provides reliable, ordered, and error-checked delivery of a stream of bytes between applications running on hosts communicating via an IP network.
    *   **Role in WWW:** HTTP and HTTPS run on top of TCP. TCP ensures that the entire HTTP request and response messages arrive correctly and in order. It handles:
        *   Connection establishment (three-way handshake).
        *   Flow control.
        *   Congestion control.
        *   Error detection and correction.
        *   Ordered delivery.

6.  **Internet Protocol (IP):**
    *   **Purpose:** Responsible for addressing hosts and routing packets of data from a source to a destination across one or more IP networks.
    *   **Role in WWW:** Underlies TCP/IP. Ensures that packets containing HTTP requests/responses reach the correct destination IP address.

**Textbook References:**

*   **Tanenbaum:** Explains the layered approach and how HTTP relies on TCP. (Chapter 6, Chapter 5: Transport Layer)
*   **Forouzan:** Details the functions of HTTP and its relationship with TCP. (Chapter 13, Chapter 5: Transport Layer)
*   **Kurose & Ross:** Dedicates significant attention to HTTP's mechanics and its dependence on TCP. (Chapter 2, Chapter 3: Transport Layer)
*   **Stevens (TCP/IP Illustrated):** Offers deep insights into TCP's implementation and its role in supporting application protocols like HTTP. (Volume 1)

---

### 5. Important Points to Remember

*   **Client-Server Model:** The WWW is fundamentally a client-server architecture.
*   **HTTP is the core protocol:** It defines the communication language between browsers and servers.
*   **URLs are essential:** They provide a standardized way to locate resources.
*   **TCP provides reliability:** HTTP runs on top of TCP to ensure data integrity and order.
*   **DNS is critical for access:** It resolves domain names to IP addresses.
*   **HTTPS adds security:** Encrypting communication for sensitive data.
*   **The Web is layered:** HTTP relies on TCP, which relies on IP, and so on. This is a key aspect of network system design.

---

### 6. Relation to Course Outcomes

This topic directly supports:

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   The WWW's operation demonstrates the layered architecture (Application layer - HTTP, Transport layer - TCP, Network layer - IP, etc.).
    *   It showcases key protocols like HTTP, TCP, and DNS.

*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   **Transport Layer (TCP):** Services like reliable data transfer, flow control, and congestion control are implicitly used by HTTP to ensure smooth and efficient web page loading.
    *   **Application Layer (HTTP, DNS):** The WWW itself is a prime example of an application layer service. The notes detail how HTTP provides request/response mechanisms for accessing resources, and DNS provides name resolution.

---

### 7. Practice Questions and Answers

**Question 1:**
Describe the primary role of HTTP in the World Wide Web architecture.
**Answer:**
HTTP (Hypertext Transfer Protocol) is the application-layer protocol that defines the format of messages exchanged between web clients (browsers) and web servers. It dictates how requests are made for web resources (like HTML pages, images, etc.) and how servers respond to these requests, making it the foundation for accessing information on the Web.

**Question 2:**
Explain the necessity of DNS in the process of accessing a web page.
**Answer:**
DNS (Domain Name System) is necessary because users typically remember domain names (e.g., `www.google.com`), but computers communicate using IP addresses. When a user enters a URL, the browser uses DNS to translate the domain name into the corresponding IP address of the web server hosting the resource. Without DNS, users would have to remember IP addresses, making web navigation impractical.

**Question 3:**
What services does TCP provide to HTTP that make web browsing reliable?
**Answer:**
TCP (Transmission Control Protocol) provides several crucial services to HTTP:
*   **Reliable Data Transfer:** Ensures that all parts of an HTTP request and response are delivered without loss or corruption.
*   **Ordered Delivery:** Guarantees that data segments are delivered in the correct sequence, allowing the browser to reassemble the HTTP message properly.
*   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver, ensuring efficient data transfer.
*   **Congestion Control:** Helps manage network traffic to avoid overloading the network and causing delays.

**Question 4:**
Differentiate between HTTP and HTTPS.
**Answer:**
HTTP (Hypertext Transfer Protocol) is the standard protocol for transferring web data and is unencrypted. HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses TLS/SSL (Transport Layer Security/Secure Sockets Layer) to encrypt the communication between the client and server. This encryption ensures confidentiality (preventing eavesdropping), integrity (preventing data tampering), and authentication of the server.

**Question 5:**
Imagine you are a web server. A browser requests `http://www.example.com/about.html`. Outline the key steps your server would take to respond.
**Answer:**
1.  **Listen on Port 80:** The server must be listening for incoming TCP connections on port 80 (the default for HTTP).
2.  **Accept TCP Connection:** Upon receiving a SYN packet, the server participates in the TCP three-way handshake (SYN-ACK, then waits for ACK) to establish a connection with the client.
3.  **Receive HTTP Request:** The server reads the incoming TCP segment(s) to reconstruct the client's HTTP `GET` request for `/about.html`.
4.  **Process Request:** The server interprets the request, identifying the requested resource (`/about.html`).
5.  **Locate Resource:** The server searches its file system for the `about.html` file.
6.  **Construct HTTP Response:**
    *   If found, it creates a `200 OK` status line.
    *   It sets appropriate headers (e.g., `Content-Type: text/html`, `Content-Length`).
    *   It reads the content of `about.html`.
    *   If not found, it creates a `404 Not Found` status line and an appropriate error message.
7.  **Send HTTP Response:** The server sends the complete HTTP response back to the client over the established TCP connection.
8.  **Manage Connection:** Depending on the HTTP version and `Connection` header, the server might keep the connection open for further requests or close it.

---

This comprehensive overview of the World Wide Web's architectural aspects provides a strong foundation for understanding how application-layer services leverage transport layer functionalities, a core concept in computer network systems.
