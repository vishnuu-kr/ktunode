---
title: "File Transfer Protocol (FTP)"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649f"
status: "completed"
scrapedAt: "2026-05-23T16:20:31.743Z"
---
## Computer Network Systems: Module 4 - Transport Service: Services Provided to the Upper Layers

### Topic: File Transfer Protocol (FTP)

---

### **1. Introduction to File Transfer Protocol (FTP)**

*   **Definition:** FTP (File Transfer Protocol) is a standard network protocol used for the transfer of computer files between a client and server on a computer network. It is one of the oldest and most widely used application layer protocols.
*   **Purpose:** FTP facilitates the uploading and downloading of files, as well as browsing remote directories and managing files on a remote host.
*   **Client-Server Model:** FTP operates on a client-server architecture.
    *   **FTP Client:** Initiates the connection and requests file transfers.
    *   **FTP Server:** Listens for incoming connections and provides files and directory services.
*   **Role in Transport Service:** FTP relies on the services provided by the Transport Layer, primarily TCP, to ensure reliable and ordered delivery of data. This aligns with **CO4: Explain the services provided by the transport layer and application layer.**

---

### **2. How FTP Works: Control and Data Connections**

FTP uses **two separate TCP connections** to operate:

*   **Control Connection (Port 21):**
    *   Established when the FTP client initiates a connection to the FTP server.
    *   Used for sending FTP commands (e.g., `USER`, `PASS`, `LIST`, `RETR` for retrieve, `STOR` for store) and receiving server responses.
    *   This connection remains open throughout the entire FTP session until explicitly closed.
    *   **Key Concept:** Command-response interaction.
    *   **Reference:** Tanenbaum (5th ed.) discusses the separation of control and data for efficiency and robustness.

*   **Data Connection (Port 20 by default, or dynamically assigned):**
    *   Established for each file transfer or directory listing operation.
    *   Used to transfer the actual file data or directory listing.
    *   This connection is opened, data is transferred, and then it is closed.
    *   **Key Concept:** Separate channel for data transfer.
    *   **Reference:** Forouzan (5th ed.) provides a clear explanation of the two-channel architecture and its implications.

#### **2.1. FTP Transfer Modes**

FTP supports three main transfer modes, affecting how data is formatted on the data connection:

*   **Stream Mode (Default):**
    *   Data is sent as a continuous stream of bytes.
    *   The receiver is responsible for identifying record boundaries.
    *   Suitable for binary files.
    *   **Reference:** Kurose & Ross (6th ed.) mentions stream-based transmission as a common transport service characteristic.

*   **Block Mode:**
    *   Data is transferred in blocks, with each block preceded by a header containing its size.
    *   Provides some overhead for control information per block.

*   **Compressed Mode:**
    *   Data is compressed before transmission to reduce bandwidth usage.
    *   The receiver decompresses the data.
    *   Can be useful for large files with repetitive content.

#### **2.2. FTP Data Connection Establishment Modes**

The way the data connection is established further distinguishes FTP operation:

*   **Active Mode:**
    *   **Client initiates:** The client sends a `PORT` command to the server, specifying its IP address and a port number where it will listen for the data connection.
    *   **Server initiates:** The server then opens a data connection from its port 20 to the client's specified port.
    *   **Problem:** Firewalls often block incoming connections initiated by the server, making Active Mode problematic in many network environments.
    *   **Reference:** Stevens (2005) provides an in-depth look at TCP port assignments and socket creation for active mode.

*   **Passive Mode:**
    *   **Client initiates:** The client sends a `PASV` command to the server.
    *   **Server responds:** The server opens a random, high-numbered port and informs the client about it via the control connection.
    *   **Client initiates:** The client then initiates the data connection from its own random port to the server's designated port.
    *   **Advantage:** This mode is generally preferred because the client initiates both connections, making it more firewall-friendly.
    *   **Reference:** Peterson & Dave (5th ed.) discuss how passive mode simplifies firewall traversal.

---

### **3. FTP Commands and Responses**

FTP uses a set of commands to control the file transfer process. These commands are sent over the control connection.

#### **3.1. Common FTP Commands**

*   **User Authentication:**
    *   `USER <username>`: Specifies the username for logging in.
    *   `PASS <password>`: Specifies the password for authentication.
    *   `QUIT`: Terminates the FTP session.

*   **Directory and File Management:**
    *   `CWD <directory>`: Changes the current working directory on the server.
    *   `CDUP`: Changes to the parent directory.
    *   `PWD`: Prints the current working directory.
    *   `LIST`: Lists the contents of the current directory (usually in a human-readable format).
    *   `NLST`: Lists the contents of the current directory (usually in a raw format).
    *   `MKD <directory>`: Creates a new directory.
    *   `RMD <directory>`: Removes an empty directory.
    *   `DELE <filename>`: Deletes a file.
    *   `RNFR <oldfilename>`: Rename FROM command.
    *   `RNTO <newfilename>`: Rename TO command.

*   **File Transfer:**
    *   `RETR <filename>`: Retrieves a file from the server (download).
    *   `STOR <filename>`: Stores a file on the server (upload).
    *   `APPE <filename>`: Appends a file to the end of a file on the server.
    *   `TYPE <mode>`: Sets the data transfer type (e.g., `I` for image/binary, `A` for ASCII).

*   **Data Connection Control:**
    *   `PORT <host-ip>,<port1>,<port2>`: Sets up the data connection in Active Mode. The host IP and port are encoded.
    *   `PASV`: Requests the server to enter Passive Mode.

#### **3.2. FTP Server Responses**

Server responses are three-digit codes indicating the status of a command.

*   **1xx:** Positive preliminary reply (e.g., command waiting for confirmation).
*   **2xx:** Positive completion reply (e.g., command successful).
    *   `200 OK`: Command successful.
    *   `220 Service ready for new user`: Welcome message.
    *   `221 Service closing control connection. Logged out.`: Graceful logout.
    *   `227 Entering Passive Mode (h1,h2,h3,h4,p1,p2)`: Server ready for passive connection.
*   **3xx:** Positive intermediate reply (e.g., command needs more information).
    *   `331 User name okay, need password`: Password required.
*   **4xx:** Transient negative completion reply (e.g., command failed, but might succeed if retried).
    *   `421 Service not available, closing control connection.`: Server overloaded.
*   **5xx:** Permanent negative completion reply (e.g., command failed, will not succeed).
    *   `530 Not logged in.`: Authentication required.
    *   `550 Requested action not taken. File unavailable.`: File not found.

**Example Interaction (Simplified):**

```
Client: USER anonymous
Server: 331 Guest login ok, send your email address as password.
Client: PASS user@example.com
Server: 230 Guest access granted, read-only file system.

Client: CWD /pub/files
Server: 250 Directory changed to /pub/files

Client: TYPE I
Server: 200 Type set to I

Client: PASV
Server: 227 Entering Passive Mode (192,168,1,100,20,30) ; Port 5150

Client: RETR my_document.txt
Server: 150 Opening BINARY mode data connection for file transfer.
<--- Data Transfer Occurs on Port 5150 --->
Server: 226 Transfer complete.

Client: QUIT
Server: 221 Goodbye.
```

---

### **4. FTP and Security Concerns**

FTP's original design prioritized simplicity and functionality over security.

*   **Plaintext Credentials:** Usernames and passwords are sent in plaintext over the control connection, making them vulnerable to sniffing.
*   **Unencrypted Data:** File contents are also transferred in plaintext.
*   **Vulnerability to Man-in-the-Middle Attacks:** Without encryption, sensitive data can be intercepted and modified.

#### **4.1. Solutions for Secure File Transfer**

To address these security concerns, more secure protocols have emerged:

*   **FTPS (FTP Secure):**
    *   Adds TLS/SSL encryption to FTP.
    *   Can operate in either an **explicit** (client requests secure connection after initial connection) or **implicit** (connection is secured from the start) mode.
    *   Uses port 990 for implicit FTPS and port 21 for explicit FTPS.
    *   **Reference:** Stallings (2004) covers various encryption methods for network protocols.

*   **SFTP (SSH File Transfer Protocol):**
    *   **Not related to FTP**, despite the name.
    *   Runs over SSH (Secure Shell) protocol.
    *   Provides secure file transfer, directory listing, and file management.
    *   Uses a single connection on port 22.
    *   **Reference:** Halsall (5th ed.) often discusses the evolution of secure protocols, including SSH.

---

### **5. FTP vs. HTTP for File Transfer**

While both FTP and HTTP can transfer files, they have different primary purposes and characteristics:

*   **FTP:**
    *   **Primary Purpose:** Dedicated file transfer, directory navigation, and file management.
    *   **Two Connections:** Control and data channels.
    *   **Stateful:** Maintains a session state for the user.
    *   **Commands:** Specific FTP commands.

*   **HTTP:**
    *   **Primary Purpose:** Retrieving web pages and resources.
    *   **Single Connection (typically):** Although HTTP/2 and HTTP/3 can multiplex.
    *   **Stateless (by default):** Each request is independent, though sessions are managed using cookies.
    *   **Commands:** GET, POST, PUT, DELETE etc.
    *   **Ubiquitous:** Integrated into web browsers.

**When to use which:**

*   Use FTP for bulk file transfers, managing remote file systems, and when a dedicated file transfer application is preferred.
*   Use HTTP for downloading files linked from web pages or for simple file uploads that are part of a web application.

---

### **6. Practice Questions and Exercises**

**Question 1:** Explain the necessity of two separate connections in FTP. What are the advantages of this separation?

**Answer:** FTP uses two separate TCP connections:
1.  **Control Connection:** For sending commands and receiving server responses.
2.  **Data Connection:** For transferring the actual file content or directory listings.
The advantages of this separation are:
*   **Efficiency:** The control connection can remain open, allowing multiple data transfers to be initiated and managed without re-establishing control.
*   **Robustness:** If a data transfer fails, the control connection can remain active, allowing the user to retry or issue other commands.
*   **Flexibility:** Different transfer modes (ASCII, Binary) and connection establishment methods (Active, Passive) can be managed independently.

**Question 2:** Describe the difference between Active FTP and Passive FTP. Which mode is generally preferred and why?

**Answer:**
*   **Active FTP:** The client informs the server of the IP address and port where it will listen for the data connection (`PORT` command). The server then initiates the data connection from its port 20 to the client's specified port.
*   **Passive FTP:** The client requests the server to enter passive mode (`PASV` command). The server opens a random port and informs the client. The client then initiates the data connection from its own port to the server's specified port.

Passive FTP is generally preferred because it is more firewall-friendly. In Active FTP, the server initiates an incoming connection to the client, which is often blocked by client-side firewalls. In Passive FTP, the client initiates both connections, which is typically allowed by firewalls.

**Question 3:** If you were to transfer a sensitive file over a network, would you use standard FTP or SFTP? Justify your answer.

**Answer:** I would use SFTP. Standard FTP transmits usernames, passwords, and file data in plaintext, making them vulnerable to interception and eavesdropping. SFTP, which runs over SSH, encrypts all communication, including credentials and file data, providing a secure channel for sensitive information.

**Question 4:** What is the default port for the FTP control connection?

**Answer:** 21.

**Question 5:** List three common FTP commands and their functions.

**Answer:**
*   `USER <username>`: Authenticates the user.
*   `RETR <filename>`: Retrieves (downloads) a file from the server.
*   `STOR <filename>`: Stores (uploads) a file to the server.
*   `LIST`: Lists the contents of the current directory.
*   `QUIT`: Terminates the FTP session.

---

### **7. Important Points to Remember**

*   FTP operates using two separate TCP connections: one for control and one for data.
*   The control connection is persistent throughout the session, while the data connection is established for each transfer.
*   FTP supports Active and Passive modes for data connection establishment, with Passive mode being more firewall-friendly.
*   Standard FTP is insecure as credentials and data are sent in plaintext.
*   FTPS and SFTP are secure alternatives to standard FTP.
*   FTP is primarily for file transfer and management, distinct from HTTP's role in web browsing.
*   FTP commands and responses are standardized text-based interactions.

---

### **8. Alignment with Course Outcomes**

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network. (Knowledge Level: K2)**
    *   This topic demonstrates a key application layer protocol (FTP) and its reliance on the transport layer (TCP), illustrating the layered architecture. It highlights how protocols enable communication.

*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)**
    *   FTP is a prime example of an application layer service that leverages the reliable stream delivery services of the transport layer (TCP) for file transfer. It showcases how application protocols utilize underlying transport services.

---
This concludes the study notes for File Transfer Protocol (FTP) within Module 4. Remember to consult the provided textbooks for more in-depth details and examples.
