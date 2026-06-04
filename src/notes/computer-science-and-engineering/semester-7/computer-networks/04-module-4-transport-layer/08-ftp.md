---
title: "FTP."
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c940"
status: "completed"
scrapedAt: "2026-05-20T17:02:55.357Z"
---
# Module 4: Transport Layer - FTP

## 1. Introduction to FTP

**File Transfer Protocol (FTP)** is a standard network protocol used for the transfer of computer files between a client and server on a computer network. It is built on top of the Transmission Control Protocol (TCP) and operates at the Application Layer of the OSI model.

**Key Concepts:**

*   **Client-Server Architecture:** FTP operates on a client-server model.
    *   **FTP Client:** Initiates the connection and requests file transfers from the server.
    *   **FTP Server:** Listens for incoming client connections, manages files, and responds to client requests.
*   **Control Connection:** Used for sending commands (e.g., login, list files, change directory) and receiving responses.
*   **Data Connection:** Used for transferring the actual file data. This connection is established *after* the control connection is set up.
*   **Port Numbers:**
    *   **Control Connection:** Typically uses **port 21**.
    *   **Data Connection:** The port number for the data connection is negotiated.

**Why is FTP important?**

*   Efficient file transfer across networks.
*   Enables remote file management.
*   Widely used for website content uploads and downloads.

## 2. How FTP Works

FTP establishes two separate connections:

1.  **Control Connection (Command Channel):**
    *   The FTP client initiates a TCP connection to the FTP server on port 21.
    *   This connection is persistent throughout the FTP session.
    *   Commands (e.g., `USER`, `PASS`, `LIST`, `RETR`, `STOR`) are sent from the client to the server.
    *   Responses (status codes and messages) are sent from the server to the client.

2.  **Data Connection (Data Channel):**
    *   This connection is opened *on demand* for each file transfer or directory listing.
    *   The **mode** of data transfer determines how the data connection is established:
        *   **Active Mode:**
            *   The **client** opens a random port (e.g., `client_port_number`) and listens for a connection.
            *   The client sends a `PORT` command to the server, specifying its IP address and `client_port_number`.
            *   The **server** then initiates a TCP connection from its port 20 to the specified client port.
            *   **Diagram:**
                ```
                Client                                       Server
                +-----------------+                     +-----------------+
                | Open client_port|                     |                 |
                |                 |                     |                 |
                | Send PORT <IP, port>|------------------>| Port 21 (Control)|
                |                 |                     |                 |
                |                 | <------------------ | Port 20 (Data)  |
                | Open data_port  |                     |                 |
                +-----------------+                     +-----------------+
                ```
            *   **Pros:** Simpler for the server.
            *   **Cons:** Can be problematic with firewalls on the client side, as they might block incoming connections from the server.

        *   **Passive Mode:**
            *   The **client** sends a `PASV` (or `EPSV` for extended passive) command to the server.
            *   The **server** opens a random port (e.g., `server_port_number`) and listens for a connection.
            *   The server sends its IP address and `server_port_number` back to the client.
            *   The **client** then initiates a TCP connection from a random port on its side to the specified server port.
            *   **Diagram:**
                ```
                Client                                       Server
                +-----------------+                     +-----------------+
                | Port 21 (Control)|------------------>| Port 21 (Control)|
                |                 |                     |                 |
                | Send PASV       |------------------>| Open server_port|
                |                 | <------------------ | <IP, server_port>|
                | Open client_data_port|
                |                 |------------------>| Server_port (Data)|
                +-----------------+                     +-----------------+
                ```
            *   **Pros:** More firewall-friendly for clients.
            *   **Cons:** Requires the server to manage listening on multiple ports.

**Important Note:** FTP's use of separate control and data connections, especially in active mode, can create challenges for network devices like firewalls and Network Address Translators (NATs) which may not be aware of the dynamically established data connection.

## 3. FTP Modes of Data Transfer

FTP supports different modes for transferring data, affecting how the data is formatted:

*   **ASCII Mode:**
    *   Used for transferring **text files** (e.g., `.txt`, `.html`, `.java`, `.c`).
    *   During transfer, FTP performs line ending conversions between different operating systems (e.g., CRLF on Windows to LF on Unix).
    *   **Conversions:**
        *   Windows (CRLF) -> Unix (LF)
        *   Unix (LF) -> Windows (CRLF)
    *   **Caution:** Do **not** use ASCII mode for binary files, as it can corrupt them.

*   **Binary Mode (Image Mode):**
    *   Used for transferring **non-text files** (e.g., `.jpg`, `.exe`, `.zip`, `.doc`).
    *   Data is transferred as a raw sequence of bytes without any interpretation or modification.
    *   This is the most common and safest mode for most file types.

*   **EBCDIC Mode:**
    *   Used for transferring files between systems that use the Extended Binary Coded Decimal Interchange Code character encoding. Less common in modern networks.

**Key Commands Related to Modes:**

*   `TYPE A` or `ASCII`: Sets the transfer type to ASCII.
*   `TYPE I` or `BINARY`: Sets the transfer type to Binary.
*   `TYPE E`: Sets the transfer type to EBCDIC.

## 4. Common FTP Commands

FTP commands are text-based and sent over the control connection. Here are some of the most common ones:

| Command       | Description                                                        | Example Usage                               |
| :------------ | :----------------------------------------------------------------- | :------------------------------------------ |
| `USER <name>` | Identifies the user to the server.                                 | `USER anonymous`                            |
| `PASS <pwd>`  | Sends the user's password.                                         | `PASS mypassword`                           |
| `QUIT`        | Terminates the FTP session.                                        | `QUIT`                                      |
| `HELP`        | Requests a list of supported commands.                             | `HELP`                                      |
| `NOOP`        | No operation. Can be used to keep a connection alive.              | `NOOP`                                      |
| `LIST`        | Lists files and directories in the current directory (detailed).   | `LIST`                                      |
| `NLST`        | Lists files and directories in a simpler, less detailed format.    | `NLST`                                      |
| `PWD`         | Prints the current working directory on the server.                | `PWD`                                       |
| `CWD <dir>`   | Changes the current working directory on the server.               | `CWD public_html`                           |
| `CDUP`        | Changes to the parent directory.                                   | `CDUP`                                      |
| `RETR <file>` | Downloads a file from the server.                                  | `RETR mydocument.pdf`                       |
| `STOR <file>` | Uploads a file from the client to the server.                      | `STOR image.jpg`                            |
| `DELE <file>` | Deletes a file on the server.                                      | `DELE old_file.txt`                         |
| `RMD <dir>`   | Removes (deletes) a directory on the server.                       | `RMD temp_folder`                           |
| `MKD <dir>`   | Creates a new directory on the server.                             | `MKD new_uploads`                          |
| `PORT <h1,h2,h3,h4,p1,p2>` | Specifies the IP address and port for the data connection (Active Mode). Example: `PORT 192,168,1,100,4,5` represents IP 192.168.1.100 and port 1024+5=1029. | `PORT 192,168,1,100,4,5`                    |
| `PASV`        | Requests the server to enter Passive Mode.                         | `PASV`                                      |
| `TYPE <type>` | Sets the file transfer type (ASCII, Binary, EBCDIC).               | `TYPE I`                                    |
| `SYST`        | Returns the operating system type of the server.                   | `SYST`                                      |

## 5. FTP Security Concerns and Solutions

**FTP is inherently insecure.**

*   **Plaintext Transmission:** Usernames, passwords, and data are transmitted in plaintext over the network. This makes them vulnerable to eavesdropping (sniffing) by attackers.
*   **Lack of Encryption:** No encryption is used by default, leaving sensitive information exposed.

**Solutions and Secure Alternatives:**

*   **FTPS (FTP Secure):**
    *   Adds a layer of security by using SSL/TLS (Secure Sockets Layer/Transport Layer Security) to encrypt the control and/or data connections.
    *   **Implicit FTPS:** The SSL/TLS handshake happens *before* any FTP commands are exchanged, typically on a different port (e.g., 990).
    *   **Explicit FTPS:** The SSL/TLS handshake is initiated *after* the standard FTP control connection is established, using the `AUTH TLS` or `AUTH SSL` command, typically on port 21.
    *   **Pros:** Inherits the FTP command structure, often easier to integrate for existing FTP implementations.
    *   **Cons:** Can still face firewall issues with passive mode due to the encryption layer.

*   **SFTP (SSH File Transfer Protocol):**
    *   **Not related to FTP** despite the similar name.
    *   It is a *file transfer protocol that runs over SSH (Secure Shell)*.
    *   All commands and data are transmitted securely encrypted within the SSH tunnel.
    *   Typically uses **port 22** (the same as SSH).
    *   **Pros:** Robust security, single port for both control and data, generally more firewall-friendly.
    *   **Cons:** Requires an SSH server and client, different command set than traditional FTP (though many clients abstract this).

**When to use which:**

*   **FTPS:** If you need to maintain compatibility with existing FTP infrastructure but require encryption.
*   **SFTP:** For new deployments or when maximum security and ease of firewall traversal are priorities.

## 6. FTP Server and Client Implementations

*   **FTP Servers:**
    *   **vsftpd (Very Secure FTP Daemon):** A popular, lightweight, and secure FTP server for Linux/Unix systems.
    *   **ProFTPD:** A highly configurable FTP server.
    *   **FileZilla Server:** A free FTP server for Windows.
    *   **Microsoft IIS FTP:** Built-in FTP server for Windows Server.

*   **FTP Clients:**
    *   **FileZilla:** A very popular, free, open-source FTP, FTPS, and SFTP client for Windows, macOS, and Linux.
    *   **WinSCP:** A free SFTP, FTP, WebDAV, S3, and SCP client for Windows.
    *   **Cyberduck:** A free FTP, SFTP, WebDAV, S3, and OpenStack Swift client for Windows and macOS.
    *   **Command-line `ftp` client:** Available on most operating systems.

## 7. Practice Questions and Exercises

1.  **Question:** What are the two distinct connections established by FTP, and what are their primary purposes?
    **Answer:**
    *   **Control Connection:** Used for sending commands and receiving server responses. It is typically established on port 21.
    *   **Data Connection:** Used for the actual transfer of file content or directory listings. Its port number is negotiated.

2.  **Question:** Differentiate between FTP's Active and Passive modes. Which mode is generally preferred for clients behind firewalls, and why?
    **Answer:**
    *   **Active Mode:** The server initiates the data connection from its port 20 to a port specified by the client.
    *   **Passive Mode:** The client initiates the data connection to a port specified by the server.
    *   **Passive Mode** is generally preferred for clients behind firewalls because it avoids the need for the firewall to allow incoming connections from the server to the client, which is often restricted.

3.  **Question:** When should you use ASCII transfer mode, and what is the risk of using it for binary files?
    **Answer:**
    *   ASCII transfer mode should be used for plain text files (e.g., `.txt`, `.html`, `.java`).
    *   Using ASCII mode for binary files (e.g., `.jpg`, `.exe`, `.zip`) can corrupt them because ASCII mode performs line ending conversions and other character substitutions that are not appropriate for binary data.

4.  **Question:** What are the main security vulnerabilities of traditional FTP, and what are two common secure alternatives?
    **Answer:**
    *   **Vulnerabilities:** Transmission of usernames, passwords, and data in plaintext, making them susceptible to eavesdropping.
    *   **Secure Alternatives:** FTPS (FTP over SSL/TLS) and SFTP (SSH File Transfer Protocol).

5.  **Exercise:** Imagine you are trying to download a PDF document named `report.pdf` from an FTP server. What FTP commands would you likely use (in order), assuming you are logged in and the file is in your current directory?
    **Answer:**
    1.  `TYPE I` (to ensure binary transfer for the PDF)
    2.  `RETR report.pdf` (to download the file)

6.  **Exercise:** You are configuring an FTP server. What port does the control connection typically use? What port does the server use for data in Active Mode?
    **Answer:**
    *   Control Connection: Port 21.
    *   Server Data Port (Active Mode): Port 20.

## 8. Important Points to Remember

*   FTP uses **two separate connections**: one for control and one for data.
*   **Port 21** is for the control connection.
*   **Active vs. Passive mode** dictates who initiates the data connection and affects firewall compatibility. Passive mode is generally more client-friendly.
*   **ASCII mode** is for text files; **Binary mode** is for all other file types. Always use Binary mode unless you specifically need ASCII translation.
*   Traditional FTP is **insecure** due to plaintext transmission.
*   **FTPS** and **SFTP** are secure alternatives that encrypt data. SFTP is often preferred for its robustness and simplicity.
*   Understand the difference between **FTPS** (FTP over SSL/TLS) and **SFTP** (SSH File Transfer Protocol).

---
