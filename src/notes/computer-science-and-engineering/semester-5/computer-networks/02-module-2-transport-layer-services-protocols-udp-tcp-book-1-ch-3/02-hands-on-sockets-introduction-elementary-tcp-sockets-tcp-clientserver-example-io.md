---
title: "Hands-on: Sockets Introduction, Elementary TCP Sockets, TCP Client/Server Example, I/O Multiplexing: The select and poll Functions (Book 2 Ch 3 to 6), Elementary UDP Sockets (Book 2 Ch 8), Advanced I/O Functions (Book 2 Ch 14)"
subject: "COMPUTER NETWORKS"
module: "Module 2: Transport Layer: Services, Protocols, UDP, TCP  (Book 1 Ch 3)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b524"
status: "completed"
scrapedAt: "2026-05-20T16:43:31.132Z"
---
# COMPUTER NETWORKS - Module 2: Transport Layer - Hands-on Sockets

**Module 2: Transport Layer: Services, Protocols, UDP, TCP (Book 1 Ch 3)**

**Topic: Hands-on: Sockets Introduction, Elementary TCP Sockets, TCP Client/Server Example, I/O Multiplexing: The select and poll Functions (Book 2 Ch 3 to 6), Elementary UDP Sockets (Book 2 Ch 8), Advanced I/O Functions (Book 2 Ch 14)**

**Book 1: Computer Networking: A Top-Down Approach (Kurose & Ross, or equivalent)**
**Book 2: UNIX Network Programming, Volume 1: The Sockets Networking API (Stevens, Fenner, Rudloff)**

## Learning Outcomes:

*   Understand the concept of sockets and their role in network programming.
*   Implement basic TCP client and server applications.
*   Implement basic UDP client and server applications.
*   Understand and use I/O multiplexing techniques (select and poll).
*   Understand and utilize advanced I/O functions for non-blocking and asynchronous operations.
*   Distinguish between TCP and UDP sockets and choose the appropriate protocol for a given application.
*   Explain the key differences between blocking and non-blocking I/O.

## 1. Sockets Introduction (Book 2 Ch 3)

*   **Definition:** A socket is an endpoint of a two-way communication link between two programs running on the network. It's an abstraction layer that allows applications to send and receive data over a network.  Sockets are typically implemented using system calls provided by the operating system.

*   **Socket API:** The Socket API (Application Programming Interface) provides functions to create, bind, listen, connect, send, and receive data using sockets.

*   **Socket Address Structure:** Holds addressing information, including:
    *   **Address Family:**  `AF_INET` (IPv4), `AF_INET6` (IPv6)
    *   **IP Address:** The IP address of the host (e.g., 127.0.0.1 for localhost)
    *   **Port Number:** A 16-bit integer identifying a specific process on a host. Port numbers 0-1023 are well-known ports (reserved for common services). Ports 1024-49151 are registered ports, and 49152-65535 are dynamic/private ports.

*   **Socket Types:**
    *   `SOCK_STREAM`:  Provides sequenced, reliable, two-way, connection-based byte streams. Used for TCP.
    *   `SOCK_DGRAM`:  Provides connectionless, unreliable datagram service.  Used for UDP.
    *   `SOCK_RAW`: Provides access to underlying network protocols. Requires special privileges.

*   **Key System Calls:**
    *   `socket()`: Creates a socket.  Takes domain (e.g., `AF_INET`), type (e.g., `SOCK_STREAM`), and protocol (e.g., `IPPROTO_TCP`) as arguments. Returns a socket descriptor (an integer).
    *   `bind()`: Assigns an address (IP address and port number) to a socket.
    *   `listen()`:  For TCP servers, listens for incoming connections on a socket.  Specifies the maximum number of pending connections in the queue.
    *   `connect()`: For TCP clients, establishes a connection to a server.
    *   `accept()`: For TCP servers, accepts a connection request from a client, creating a *new* socket dedicated to that connection.
    *   `send()`: Sends data over a socket.
    *   `recv()`: Receives data from a socket.
    *   `close()`: Closes a socket, releasing resources.

*   **Example (Conceptual):**

    ```
    // Server
    socket() -> bind() -> listen() -> accept() -> recv()/send() -> close()

    // Client
    socket() -> connect() -> send()/recv() -> close()
    ```

## 2. Elementary TCP Sockets (Book 2 Ch 4)

*   **TCP Client-Server Model:**  TCP is connection-oriented.  The server listens on a known port.  The client initiates a connection to the server's port.

*   **TCP Three-Way Handshake:** The process of establishing a TCP connection:
    1.  **SYN (Synchronize):** Client sends a SYN packet to the server.
    2.  **SYN-ACK (Synchronize-Acknowledge):** Server sends a SYN-ACK packet to the client, acknowledging the SYN and including its own SYN.
    3.  **ACK (Acknowledge):** Client sends an ACK packet to the server, acknowledging the server's SYN.

*   **TCP Connection Termination:**  Typically involves a four-way handshake (FIN packets).

*   **`socket`, `bind`, `listen`, `accept`, `connect`, `send`, `recv`, `close`:** Covered in Sockets Introduction, but specific implementations and considerations for TCP are crucial.

*   **Byte Ordering:** Networks use network byte order (Big Endian). Host machines may use a different byte order (Little Endian).  Functions like `htons()` (host to network short), `htonl()` (host to network long), `ntohs()` (network to host short), and `ntohl()` (network to host long) are used to convert between host and network byte orders.

*   **`inet_pton` and `inet_ntop`:** Functions to convert between human-readable IP addresses (e.g., "192.168.1.1") and binary representations (struct `in_addr` or `in6_addr`).

*   **Example (Simplified TCP Server):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <unistd.h>
    #include <sys/socket.h>
    #include <netinet/in.h>

    #define PORT 8080
    #define BUFFER_SIZE 1024

    int main() {
        int server_fd, new_socket;
        struct sockaddr_in address;
        int addrlen = sizeof(address);
        char buffer[BUFFER_SIZE] = {0};
        char *hello = "Hello from server";

        // Creating socket file descriptor
        if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
            perror("socket failed");
            exit(EXIT_FAILURE);
        }

        address.sin_family = AF_INET;
        address.sin_addr.s_addr = INADDR_ANY;
        address.sin_port = htons(PORT);

        // Binding socket to the address and port
        if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
            perror("bind failed");
            exit(EXIT_FAILURE);
        }

        // Listening for incoming connections
        if (listen(server_fd, 3) < 0) {
            perror("listen failed");
            exit(EXIT_FAILURE);
        }

        printf("Listening on port %d...\n", PORT);

        // Accepting incoming connections
        if ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) < 0) {
            perror("accept failed");
            exit(EXIT_FAILURE);
        }

        // Receiving data from the client
        read(new_socket, buffer, BUFFER_SIZE);
        printf("Received: %s\n", buffer);

        // Sending data to the client
        send(new_socket, hello, strlen(hello), 0);
        printf("Hello message sent\n");

        close(new_socket);
        close(server_fd);
        return 0;
    }
    ```

*   **Example (Simplified TCP Client):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <unistd.h>
    #include <sys/socket.h>
    #include <netinet/in.h>

    #define PORT 8080
    #define BUFFER_SIZE 1024

    int main() {
        int sock = 0;
        struct sockaddr_in serv_addr;
        char buffer[BUFFER_SIZE] = {0};
        char *hello = "Hello from client";

        // Creating socket file descriptor
        if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
            printf("\n Socket creation error \n");
            return -1;
        }

        serv_addr.sin_family = AF_INET;
        serv_addr.sin_port = htons(PORT);

        // Convert IPv4 and IPv6 addresses from text to binary form
        if(inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr)<=0) {
            printf("\nInvalid address/ Address not supported \n");
            return -1;
        }

        // Connecting to the server
        if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
            printf("\nConnection Failed \n");
            return -1;
        }

        // Sending data to the server
        send(sock, hello, strlen(hello), 0);
        printf("Hello message sent\n");

        // Receiving data from the server
        read(sock, buffer, BUFFER_SIZE);
        printf("Received: %s\n", buffer);

        close(sock);
        return 0;
    }
    ```

## 3. TCP Client/Server Example (Book 2 Ch 5)

*   **Iterative Server:** Handles one client at a time. After processing a client's request, it returns to listening for new connections.  The examples above are iterative servers.

*   **Concurrent Server:** Handles multiple clients concurrently. This can be achieved using:
    *   **Multiple Processes (Forking):**  The server forks a new process for each client connection.  The parent process continues to listen for new connections, while the child process handles the client.
    *   **Multiple Threads:**  The server creates a new thread for each client connection.
    *   **I/O Multiplexing (select/poll):**  A single process handles multiple client connections using non-blocking I/O and the `select` or `poll` functions.

*   **Stateful vs. Stateless Servers:**
    *   **Stateful:** Maintains information about the client between requests (e.g., user login session).
    *   **Stateless:** Each request is independent of previous requests (e.g., simple web server serving static files).

*   **Error Handling:**  Crucial for robust server applications.  Check return values of system calls and handle errors appropriately (e.g., log errors, send error messages to the client, close connections).

## 4. I/O Multiplexing: The select and poll Functions (Book 2 Ch 6)

*   **Problem:** Blocking I/O.  A process waiting for data on one socket will block, preventing it from handling other connections.

*   **Solution:** I/O Multiplexing.  Allows a single process to monitor multiple file descriptors (including sockets) and determine which are ready for reading, writing, or have an exception condition.

*   **`select()` function:**
    *   **Purpose:** Monitors multiple file descriptors for readability, writability, and exception conditions.
    *   **Arguments:**
        *   `nfds`: The highest-numbered file descriptor in any of the sets, plus 1.
        *   `readfds`:  A pointer to a `fd_set` containing the file descriptors to be monitored for readability.
        *   `writefds`: A pointer to a `fd_set` containing the file descriptors to be monitored for writability.
        *   `exceptfds`: A pointer to a `fd_set` containing the file descriptors to be monitored for exception conditions.
        *   `timeout`:  A pointer to a `struct timeval` specifying the maximum amount of time to wait.  Can be `NULL` (block indefinitely), a specific time interval, or a zero time interval (non-blocking).
    *   **Return Value:**  The number of file descriptors that are ready, 0 if the timeout expires, or -1 on error.
    *   **`fd_set` Macros:**
        *   `FD_ZERO(fd_set *set)`: Clears a file descriptor set.
        *   `FD_SET(int fd, fd_set *set)`: Adds a file descriptor to a set.
        *   `FD_CLR(int fd, fd_set *set)`: Removes a file descriptor from a set.
        *   `FD_ISSET(int fd, fd_set *set)`: Checks if a file descriptor is in the set.

*   **`poll()` function:**
    *   **Purpose:** Similar to `select()`, but provides more flexibility and scalability.
    *   **Arguments:**
        *   `fds`:  A pointer to an array of `struct pollfd` structures.
        *   `nfds`: The number of entries in the `fds` array.
        *   `timeout`: The maximum amount of time to wait (in milliseconds).
    *   **`struct pollfd`:**  Contains:
        *   `fd`:  The file descriptor to be monitored.
        *   `events`:  The events to be monitored for (e.g., `POLLIN` for readability, `POLLOUT` for writability).
        *   `revents`:  The events that actually occurred.
    *   **Return Value:** The number of file descriptors that have events to report, 0 if the timeout expires, or -1 on error.

*   **Key Differences between `select` and `poll`:**
    *   **Scalability:** `poll` is generally more scalable than `select`, especially with a large number of file descriptors.  `select` typically has a fixed maximum number of file descriptors (often 1024).
    *   **Data Structure:** `select` uses `fd_set`, which is a bitmask.  `poll` uses an array of `struct pollfd`, which is more flexible.
    *   **Overhead:**  `select` requires rebuilding the `fd_set` on each call. `poll` preserves the `fds` array between calls.
    *   **Portability:** `select` is more widely supported on older systems.

*   **Example (Conceptual I/O Multiplexing using `select`):**

    ```c
    // Create sockets, bind, listen

    fd_set readfds;
    int max_fd = listener_socket; // The listener socket fd

    while (1) {
        FD_ZERO(&readfds);
        FD_SET(listener_socket, &readfds); // Add listener socket

        // Add connected client sockets to readfds
        for (int i = 0; i < num_clients; i++) {
            FD_SET(client_sockets[i], &readfds);
            if (client_sockets[i] > max_fd) {
                max_fd = client_sockets[i];
            }
        }

        int activity = select(max_fd + 1, &readfds, NULL, NULL, NULL);

        if (activity < 0) {
            perror("select error");
            exit(1);
        }

        // If something happened on the listener socket, then its an incoming connection
        if (FD_ISSET(listener_socket, &readfds)) {
            // accept a new connection
            // Add the new socket to the client_sockets array
        }

        // Else its some IO operation on some other socket
        for (int i = 0; i < num_clients; i++) {
            if (FD_ISSET(client_sockets[i], &readfds)) {
                // Handle data from client_sockets[i]
                //Read from socket.
                //if read returns 0 -> client disconnected
                //if read returns -1 -> error
            }
        }
    }

    close(listener_socket);
    ```

## 5. Elementary UDP Sockets (Book 2 Ch 8)

*   **UDP (User Datagram Protocol):** Connectionless, unreliable protocol.  Provides a simple way to send datagrams (packets) without establishing a connection.

*   **Advantages:**
    *   Low overhead (no connection establishment).
    *   Suitable for applications where some packet loss is acceptable (e.g., streaming media, online games).

*   **Disadvantages:**
    *   Unreliable (no guarantee of delivery).
    *   Packets may arrive out of order.
    *   Limited message size (due to IP fragmentation).

*   **`socket`, `bind`, `sendto`, `recvfrom`, `close`:** Covered in Sockets Introduction, but specific implementations and considerations for UDP are crucial.  No `listen` or `accept` functions are used in UDP.

*   **`sendto()` function:**
    *   **Purpose:** Sends a datagram to a specific destination address.
    *   **Arguments:**
        *   `sockfd`: The socket descriptor.
        *   `buf`: The buffer containing the data to be sent.
        *   `len`: The length of the data in the buffer.
        *   `flags`:  Flags (usually 0).
        *   `dest_addr`:  A pointer to a `struct sockaddr` containing the destination address (IP address and port number).
        *   `addrlen`: The size of the `dest_addr` structure.

*   **`recvfrom()` function:**
    *   **Purpose:** Receives a datagram from a socket and obtains the sender's address.
    *   **Arguments:**
        *   `sockfd`: The socket descriptor.
        *   `buf`: The buffer to receive the data.
        *   `len`: The maximum length of the data to receive.
        *   `flags`: Flags (usually 0).
        *   `src_addr`:  A pointer to a `struct sockaddr` to store the sender's address.
        *   `addrlen`: A pointer to a `socklen_t` variable that specifies the size of the `src_addr` structure.  This variable must be initialized before calling `recvfrom()`.  On return, it will contain the actual size of the address stored in `src_addr`.

*   **UDP Client-Server Interaction:**

    1.  **Server:** Creates a UDP socket, binds it to a known address (IP address and port number).
    2.  **Client:** Creates a UDP socket (does *not* need to bind it to a specific address - the OS will assign a dynamic port).  Sends a datagram to the server using `sendto()`.
    3.  **Server:** Receives the datagram using `recvfrom()`, which also provides the client's address.
    4.  **Server:** Sends a response to the client using `sendto()` and the client's address obtained from `recvfrom()`.
    5.  **Client:** Receives the response using `recvfrom()`.

*   **Example (Simplified UDP Server):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <unistd.h>
    #include <sys/socket.h>
    #include <netinet/in.h>

    #define PORT 8080
    #define BUFFER_SIZE 1024

    int main() {
        int sockfd;
        struct sockaddr_in servaddr, cliaddr;
        char buffer[BUFFER_SIZE] = {0};
        char *hello = "Hello from UDP server";

        // Creating socket file descriptor
        if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
            perror("socket creation failed");
            exit(EXIT_FAILURE);
        }

        memset(&servaddr, 0, sizeof(servaddr));
        memset(&cliaddr, 0, sizeof(cliaddr));

        // Filling server information
        servaddr.sin_family = AF_INET; // IPv4
        servaddr.sin_addr.s_addr = INADDR_ANY;
        servaddr.sin_port = htons(PORT);

        // Bind the socket with the server address
        if (bind(sockfd, (const struct sockaddr *)&servaddr, sizeof(servaddr)) < 0) {
            perror("bind failed");
            exit(EXIT_FAILURE);
        }

        int len, n;
        len = sizeof(cliaddr);  //len is value/result
        printf("Listening for UDP packets on port %d...\n", PORT);

        n = recvfrom(sockfd, (char *)buffer, BUFFER_SIZE, MSG_WAITALL, (struct sockaddr *)&cliaddr, &len);
        buffer[n] = '\0';
        printf("Client : %s\n", buffer);
        sendto(sockfd, (const char *)hello, strlen(hello), MSG_CONFIRM, (const struct sockaddr *)&cliaddr, len);
        printf("Hello message sent.\n");

        close(sockfd);
        return 0;
    }
    ```

*   **Example (Simplified UDP Client):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <unistd.h>
    #include <sys/socket.h>
    #include <netinet/in.h>

    #define PORT 8080
    #define BUFFER_SIZE 1024

    int main() {
        int sockfd;
        char buffer[BUFFER_SIZE];
        char *hello = "Hello from UDP client";
        struct sockaddr_in servaddr;

        // Creating socket file descriptor
        if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
            perror("socket creation failed");
            exit(EXIT_FAILURE);
        }

        memset(&servaddr, 0, sizeof(servaddr));

        // Filling server information
        servaddr.sin_family = AF_INET;
        servaddr.sin_port = htons(PORT);
        servaddr.sin_addr.s_addr = inet_addr("127.0.0.1");

        int n, len;

        sendto(sockfd, (const char *)hello, strlen(hello), MSG_CONFIRM, (const struct sockaddr *)&servaddr, sizeof(servaddr));
        printf("Hello message sent.\n");

        n = recvfrom(sockfd, (char *)buffer, BUFFER_SIZE, MSG_WAITALL, NULL, NULL);
        buffer[n] = '\0';
        printf("Server : %s\n", buffer);

        close(sockfd);
        return 0;
    }
    ```

## 6. Advanced I/O Functions (Book 2 Ch 14)

*   **Non-Blocking I/O:** Sockets can be configured to operate in non-blocking mode.  If a read or write operation cannot be completed immediately, it returns an error (typically `EAGAIN` or `EWOULDBLOCK`) instead of blocking the process.

*   **Setting a Socket to Non-Blocking:**

    *   Using `fcntl()`:

        ```c
        #include <fcntl.h>
        int flags = fcntl(sockfd, F_GETFL, 0);
        fcntl(sockfd, F_SETFL, flags | O_NONBLOCK);
        ```

*   **Asynchronous I/O (AIO):** Allows a process to initiate an I/O operation and continue processing other tasks while the I/O operation is in progress.  The process is notified when the I/O operation completes (e.g., via a signal or a callback function).  AIO is more complex to implement than non-blocking I/O but can provide better performance for certain applications.

*   **`readv` and `writev` (Scatter/Gather I/O):** Allow reading data from multiple buffers into a single socket, or writing data from a single socket into multiple buffers, in a single system call.  This can improve performance by reducing the number of system calls.

*   **Memory-Mapped I/O (mmap):** Maps a file into the process's address space.  Allows accessing file data as if it were in memory.  Can be very efficient for reading large files.

*   **Benefits of Advanced I/O Functions:**

    *   Increased concurrency and responsiveness.
    *   Improved performance by reducing system call overhead.
    *   More efficient use of system resources.

## Important Points to Remember:

*   **Error Handling:** Always check the return values of system calls and handle errors appropriately.
*   **Byte Ordering:**  Use `htons`, `htonl`, `ntohs`, and `ntohl` to convert between host and network byte orders.
*   **Blocking vs. Non-Blocking I/O:** Understand the difference and choose the appropriate mode for your application.
*   **TCP vs. UDP:** Understand the trade-offs and choose the appropriate protocol.
*   **Resource Management:**  Always close sockets when you are finished with them to release resources.
*   **Security:** Be aware of potential security vulnerabilities in network applications (e.g., buffer overflows, denial-of-service attacks).

## Practice Questions/Exercises:

1.  **Write a simple TCP echo server.** The server should receive data from the client and send the same data back to the client.
    *   **Answer:** (See a variation of the TCP server example provided earlier.  Modify the `send()` to send back the `buffer` received from the client instead of the hardcoded "Hello from server" message).

2.  **Write a simple UDP echo server.** Similar to the TCP echo server, but using UDP.
    *   **Answer:** (See a variation of the UDP server example provided earlier.  Modify the `sendto()` to send back the `buffer` received from the client instead of the hardcoded "Hello from UDP server" message. Use the `cliaddr` and `len` obtained from `recvfrom()`.)

3.  **Explain the difference between `select` and `poll`. When would you choose one over the other?**
    *   **Answer:** (See the comparison section in the I/O Multiplexing section above.  `poll` is generally more scalable and has less overhead for a large number of file descriptors. `select` is more portable but often limited to a maximum number of file descriptors.)

4.  **How do you set a socket to non-blocking mode? Why would you want to do that?**
    *   **Answer:** (Use `fcntl()` with `O_NONBLOCK` flag.  See the Advanced I/O Functions section.  Non-blocking I/O allows a process to handle multiple I/O operations concurrently without blocking.)

5.  **What is the purpose of the `bind()` system call?**
    *   **Answer:**  `bind()` assigns an address (IP address and port number) to a socket. This is essential for servers so that clients know where to connect. Clients may or may not `bind` explicitly (the OS can assign a dynamic port if they don't).

6.  **Describe the TCP three-way handshake.**
    *   **Answer:** (See the Elementary TCP Sockets section.)

7.  **What are the advantages and disadvantages of using UDP?**
    *   **Answer:** (See the Elementary UDP Sockets section.)

8.  **Write a TCP client that connects to a server and sends a file.** (Requires combining TCP client concepts with file I/O).
    *   **Answer:** (Conceptual Outline:
        1. Open the file for reading.
        2. Create a TCP socket and connect to the server.
        3. Read chunks of data from the file.
        4. Send each chunk of data to the server using `send()`.
        5. After sending the entire file, close the socket and the file.)

This comprehensive set of notes provides a strong foundation for understanding and implementing socket programming in computer networks. Remember to practice writing code and experimenting with different scenarios to solidify your understanding. Good luck!
