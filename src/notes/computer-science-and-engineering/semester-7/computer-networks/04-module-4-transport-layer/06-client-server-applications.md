---
title: "Client-server applications"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c93e"
status: "completed"
scrapedAt: "2026-05-20T17:02:53.928Z"
---
# Computer Networks: Module 4 - Transport Layer: Client-Server Applications

## Introduction

The Transport Layer, sitting between the Application Layer and the Network Layer, is responsible for providing end-to-end communication services for applications. One of the most fundamental paradigms in network applications is the **client-server model**. This module delves into this model, exploring its characteristics, the protocols that support it (primarily TCP and UDP), and how applications leverage them.

---

## Learning Outcomes Covered:

*   **Understand the fundamental client-server model:** Its architecture, roles, and common examples.
*   **Differentiate between client and server processes:** How they are identified and interact.
*   **Explain the role of sockets in client-server communication:** How they facilitate message exchange.
*   **Compare and contrast TCP and UDP as transport layer protocols for client-server applications:** Their suitability for different application needs.
*   **Discuss common client-server application examples and their reliance on specific transport layer protocols:** e.g., Web browsing (HTTP), Email (SMTP), File transfer (FTP), DNS.
*   **Understand the concepts of connection-oriented and connectionless communication in the context of client-server applications.**

---

## 1. The Client-Server Model

The client-server model is a distributed application structure that partitions tasks or workloads between providers of a resource or service, called **servers**, and service requesters, called **clients**.

### 1.1. Key Concepts and Definitions

*   **Client:** A process that initiates a request for service from a server. Clients are typically user-facing applications.
    *   *Example:* Your web browser requesting a webpage from a web server.
*   **Server:** A process that listens for and responds to requests from clients. Servers typically manage resources or provide services.
    *   *Example:* A web server hosting webpages and serving them to browsers.
*   **Request:** A message sent by a client to a server, asking for a specific service or data.
*   **Response:** A message sent by a server to a client, fulfilling the client's request or providing information.
*   **Service:** An action or data provided by the server to the client.

### 1.2. Architecture

*   **Centralized:** Servers are often centralized, serving multiple clients simultaneously.
*   **Asynchronous Interaction:** Clients and servers don't necessarily need to be active at the same time. A server can be always on, waiting for requests.
*   **Scalability:** The model can be scaled by adding more servers or increasing server capacity.

### 1.3. Common Examples

*   **World Wide Web (WWW):** Web browsers (clients) request web pages from web servers.
*   **Email:** Email clients (e.g., Outlook, Gmail app) send and receive emails through mail servers (SMTP, POP3/IMAP).
*   **File Transfer Protocol (FTP):** FTP clients transfer files to and from FTP servers.
*   **Domain Name System (DNS):** DNS clients (e.g., your computer) query DNS servers to resolve domain names into IP addresses.
*   **Online Gaming:** Game clients connect to game servers to participate in multiplayer games.
*   **Instant Messaging:** Messaging clients connect to messaging servers to exchange messages.

---

## 2. Identifying Client and Server Processes

On a host, multiple applications might be running. The Transport Layer needs a way to identify specific processes to deliver data to the correct application.

### 2.1. Key Concepts and Definitions

*   **Process:** An instance of a program running on a host.
*   **Port Number:** A 16-bit integer used by the Transport Layer to identify a specific process on a host. Ports are associated with services.
    *   *Well-known ports (0-1023):* Reserved for widely used services (e.g., HTTP on port 80, FTP on port 21, DNS on port 53).
    *   *Registered ports (1024-49151):* For applications that register their port numbers with IANA.
    *   *Dynamic/Private ports (49152-65535):* For temporary use or proprietary applications.

### 2.2. The Role of Sockets

A **socket** is an endpoint of communication in a network. It represents an interface that applications use to send and receive data. A socket is typically defined by a combination of:

*   **IP Address:** Identifies the host.
*   **Port Number:** Identifies the process on that host.

Therefore, a socket is uniquely identified by a `(IP address, port number)` pair.

### 2.3. How They Interact

1.  **Server:**
    *   The server application binds to a well-known or registered port.
    *   It listens for incoming connection requests on that port.
2.  **Client:**
    *   The client application doesn't need to bind to a specific port initially. It can use an ephemeral (dynamic) port.
    *   It initiates a connection to the server's IP address and well-known port.
3.  **Communication:**
    *   Once a connection is established (for connection-oriented protocols), or messages are exchanged, data is sent from the client's socket to the server's socket, and vice versa.

*   *Example:* A web browser (client) wants to fetch `www.example.com`.
    *   The browser finds the IP address of `www.example.com` (e.g., 93.184.216.34) using DNS.
    *   The browser initiates a connection to the server at `93.184.216.34` on port `80` (the standard HTTP port).
    *   The browser's socket might be `(client_IP, ephemeral_port)`.
    *   The server's socket is `(93.184.216.34, 80)`.

---

## 3. Transport Layer Protocols for Client-Server Applications

The Transport Layer provides two main protocols: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). The choice between them significantly impacts the behavior and reliability of client-server applications.

### 3.1. TCP (Transmission Control Protocol)

TCP is a **connection-oriented**, **reliable**, and **ordered** transport protocol.

*   **Connection-Oriented:**
    *   Before data transfer, TCP establishes a logical connection between the client and server using a **three-way handshake**.
    *   This handshake ensures that both parties are ready to communicate and agree on initial sequence numbers.
*   **Reliable Data Transfer:**
    *   **Acknowledgments (ACKs):** The receiver sends acknowledgments for data received. If the sender doesn't receive an ACK within a timeout, it retransmits the data.
    *   **Sequence Numbers:** Data is divided into segments, each with a sequence number. This allows the receiver to reassemble segments in the correct order and detect missing segments.
*   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver. The receiver advertises its available buffer space.
*   **Congestion Control:** Manages the rate at which data is sent into the network to avoid overwhelming network routers.
*   **Ordered Data Delivery:** Ensures that data segments are delivered to the application layer in the order they were sent.
*   **Connection Termination:** A graceful shutdown process (four-way handshake) is used to close the connection.

#### 3.1.1. Suitability for Client-Server Applications

TCP is suitable for applications where **reliability and ordered delivery are critical**. Losing data or receiving it out of order would render the application unusable.

#### 3.1.2. Examples

*   **HTTP/HTTPS (Web Browsing):** Essential for downloading web pages accurately and in order.
*   **FTP (File Transfer):** Guarantees that files are transferred completely and without corruption.
*   **SMTP (Email Sending):** Ensures emails are sent reliably.
*   **SSH (Secure Shell):** For secure remote login and command execution.

### 3.2. UDP (User Datagram Protocol)

UDP is a **connectionless**, **unreliable**, and **unordered** transport protocol.

*   **Connectionless:**
    *   No handshake is required to send data. Each UDP datagram is sent independently.
*   **Unreliable:**
    *   No acknowledgments. No retransmissions.
    *   No guarantee that datagrams will arrive at the destination.
    *   Datagrams can be lost, duplicated, or arrive out of order.
*   **No Flow Control or Congestion Control:** UDP sends data as fast as the application dictates, potentially leading to packet loss if the network or receiver cannot keep up.
*   **No Ordered Delivery:** Datagrams can arrive in any order.

#### 3.2.1. Suitability for Client-Server Applications

UDP is suitable for applications where:

*   **Speed is more important than reliability:** Low latency is crucial.
*   **Occasional data loss is acceptable:** Applications can tolerate some missing data.
*   **Reliability is handled by the application layer:** The application itself implements mechanisms for retransmission or error correction if needed.

#### 3.2.2. Examples

*   **DNS (Domain Name System):** Simple queries and responses are typically small and fast. If a DNS query is lost, the client can simply retransmit it.
*   **DHCP (Dynamic Host Configuration Protocol):** Used for IP address assignment, requires fast responses.
*   **VoIP (Voice over IP) and Video Conferencing:** Real-time communication where slight data loss is preferable to delays caused by retransmissions.
*   **Online Gaming:** Game state updates need to be delivered quickly; a slightly outdated packet is better than a delayed one.
*   **Streaming Media:** Similar to VoIP, prioritizing timely delivery over perfect reliability.

---

## 4. Common Client-Server Application Examples

Here's a deeper dive into how common applications utilize the client-server model and transport protocols.

### 4.1. World Wide Web (HTTP/HTTPS)

*   **Client:** Web Browser (e.g., Chrome, Firefox, Safari)
*   **Server:** Web Server (e.g., Apache, Nginx)
*   **Service:** Requesting and serving web pages, images, scripts, etc.
*   **Transport Protocol:** **TCP**
    *   **Why TCP?** It's crucial that web pages are delivered completely and in the correct order for proper rendering. Lost packets would result in broken images or incomplete pages.
*   **Socket Example:**
    *   Client: `(Client_IP, Client_Ephemeral_Port)`
    *   Server: `(Web_Server_IP, 80)` for HTTP or `(Web_Server_IP, 443)` for HTTPS.

### 4.2. Email (SMTP, POP3, IMAP)

*   **Client:** Email Client (e.g., Outlook, Thunderbird, Gmail App)
*   **Server:** Mail Server
    *   **SMTP Server:** For sending emails.
    *   **POP3/IMAP Server:** For receiving/retrieving emails.
*   **Service:** Sending and receiving email messages.
*   **Transport Protocol:** **TCP**
    *   **Why TCP?** Email content must be transmitted reliably. Any loss or corruption of email data is unacceptable.
*   **Socket Examples:**
    *   Sending (SMTP): Client `(Client_IP, Client_Ephemeral_Port)` to Server `(SMTP_Server_IP, 25)` (or 587/465 for secure versions).
    *   Receiving (POP3): Client `(Client_IP, Client_Ephemeral_Port)` to Server `(POP3_Server_IP, 110)` (or 995 for secure POP3).
    *   Receiving (IMAP): Client `(Client_IP, Client_Ephemeral_Port)` to Server `(IMAP_Server_IP, 143)` (or 993 for secure IMAP).

### 4.3. File Transfer Protocol (FTP)

*   **Client:** FTP Client (e.g., FileZilla, command-line `ftp`)
*   **Server:** FTP Server
*   **Service:** Uploading and downloading files.
*   **Transport Protocol:** **TCP**
    *   **Why TCP?** File integrity is paramount. FTP relies on TCP's reliability to ensure that files are transferred without errors or missing parts.
*   **Socket Examples:**
    *   **Control Connection:** Used for commands and responses (e.g., `ls`, `get`, `put`). Usually uses port 21.
        *   Client: `(Client_IP, Client_Ephemeral_Port_Control)`
        *   Server: `(FTP_Server_IP, 21)`
    *   **Data Connection:** Used for actual file transfer. This connection is established dynamically.
        *   *Active Mode:* Server initiates connection to client on a specific port.
        *   *Passive Mode:* Client initiates connection to server on a specified data port.

### 4.4. Domain Name System (DNS)

*   **Client:** Any device needing to resolve a domain name (e.g., your computer, smartphone).
*   **Server:** DNS Server (e.g., Google DNS 8.8.8.8)
*   **Service:** Translating human-readable domain names (e.g., `www.google.com`) into IP addresses (e.g., `172.217.160.142`).
*   **Transport Protocol:** Primarily **UDP**, sometimes TCP for larger responses or zone transfers.
    *   **Why UDP?** DNS queries are typically small and require quick responses. If a UDP packet is lost, the client can simply retry the query. The overhead of establishing a TCP connection for each small query would be inefficient. Large DNS records or zone transfers might use TCP for reliability.
*   **Socket Example:**
    *   Client: `(Client_IP, Client_Ephemeral_Port)`
    *   Server: `(DNS_Server_IP, 53)`

---

## 5. Connection-Oriented vs. Connectionless Communication

### 5.1. Connection-Oriented (TCP)

*   **Setup:** Requires a handshake to establish a connection before data transfer.
*   **Data Transfer:** Data is sent in reliable, ordered streams.
*   **Teardown:** Requires a process to close the connection.
*   **State:** Both client and server maintain state information about the connection (sequence numbers, window sizes, etc.).
*   **Pros:** High reliability, guaranteed order, flow and congestion control.
*   **Cons:** Higher overhead due to connection setup/teardown and state maintenance, can introduce latency.

### 5.2. Connectionless (UDP)

*   **Setup:** No handshake; data can be sent immediately.
*   **Data Transfer:** Data is sent in discrete packets (datagrams).
*   **Teardown:** No formal teardown process.
*   **State:** No connection state is maintained by the protocol itself.
*   **Pros:** Lower overhead, faster (no connection setup delay), simpler.
*   **Cons:** Unreliable delivery, no guaranteed order, no built-in flow/congestion control.

---

## 6. Important Points to Remember

*   **Client-Server is a fundamental paradigm:** It structures how many network applications operate.
*   **Processes are identified by Port Numbers:** Combined with IP addresses, they form sockets.
*   **Sockets are endpoints for communication:** Applications use them to send and receive data.
*   **TCP is for reliability and order:** Essential for applications where data integrity is paramount (web, email, file transfer).
*   **UDP is for speed and low overhead:** Suitable for applications that can tolerate some data loss or handle reliability themselves (DNS, VoIP, gaming).
*   **Application needs dictate protocol choice:** Always consider the requirements of your application when deciding between TCP and UDP.
*   **Well-known ports:** Standard ports are assigned to common services to facilitate client discovery.

---

## Practice Questions/Exercises

**Question 1:**
Explain the roles of a client and a server in the client-server model. Provide an example of each.

**Question 2:**
What is a socket? How is it identified, and what is its purpose in network communication?

**Question 3:**
Compare and contrast TCP and UDP. List at least two key differences and two similarities.

**Question 4:**
For each of the following applications, state whether TCP or UDP is generally preferred and explain why:
    a) Streaming a live video lecture.
    b) Downloading a software update.
    c) Making a DNS query to find the IP address of a website.

**Question 5:**
Describe the "three-way handshake" in TCP. What is its purpose?

**Question 6:**
If a client application is sending a large file to a server, which transport layer protocol is more appropriate and why?

---

## Answers

**Answer 1:**
*   **Client:** A process that initiates a request for service or resources from a server. Example: A web browser requesting a webpage.
*   **Server:** A process that waits for and responds to requests from clients, providing services or resources. Example: A web server hosting and serving web pages.

**Answer 2:**
A **socket** is an endpoint of communication in a network. It is identified by a combination of an **IP address** and a **port number** (e.g., `(IP_Address:Port_Number)`). Its purpose is to provide an interface for applications to send and receive data over the network, allowing them to communicate with specific processes on other hosts.

**Answer 3:**
*   **Differences:**
    *   **Reliability:** TCP is reliable (guarantees delivery), UDP is unreliable (no guarantees).
    *   **Connection Type:** TCP is connection-oriented (requires handshake), UDP is connectionless (no handshake).
    *   **Order:** TCP guarantees ordered delivery, UDP does not.
    *   **Overhead:** TCP has higher overhead, UDP has lower overhead.
*   **Similarities:**
    *   Both are Transport Layer protocols.
    *   Both use port numbers to identify processes.
    *   Both can be used by client-server applications.

**Answer 4:**
    a) **Streaming a live video lecture:** **UDP** is generally preferred. The priority is real-time delivery. Occasional frame drops are more acceptable than delays caused by TCP's retransmissions, which would disrupt the live stream.
    b) **Downloading a software update:** **TCP** is preferred. Software updates must be delivered completely and without corruption. Any lost packets would render the update unusable.
    c) **Making a DNS query:** **UDP** is generally preferred. DNS queries are typically small, fast, and stateless. If a query is lost, the client can easily resend it. The overhead of TCP connection setup for each query would be inefficient.

**Answer 5:**
The three-way handshake in TCP is a process used to establish a reliable connection between a client and a server. It involves three steps:
1.  **SYN:** The client sends a SYN (synchronize) segment to the server.
2.  **SYN-ACK:** The server acknowledges the SYN by sending a SYN-ACK segment back to the client.
3.  **ACK:** The client acknowledges the SYN-ACK by sending an ACK segment back to the server.
Its purpose is to ensure that both the client and server are ready to communicate, have agreed on initial sequence numbers, and have established a logical connection.

**Answer 6:**
**TCP** is more appropriate for sending a large file. This is because file integrity is critical. TCP's reliability features, such as acknowledgments and retransmissions, guarantee that the entire file will be transferred correctly without any missing or corrupted parts. UDP's unreliability would risk data loss, which is unacceptable for file transfers.
