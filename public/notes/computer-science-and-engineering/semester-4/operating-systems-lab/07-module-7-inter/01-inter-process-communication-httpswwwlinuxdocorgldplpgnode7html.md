---
title: "Inter-process Communication (https://www.linuxdoc.org/LDP/lpg/node7.html)"
subject: "OPERATING SYSTEMS LAB"
module: "Module 7: Inter"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b491"
status: "completed"
scrapedAt: "2026-05-20T16:14:53.288Z"
---
# OPERATING SYSTEMS LAB - Module 7: Inter - Inter-process Communication (IPC)

**Based on: https://www.linuxdoc.org/LDP/lpg/node7.html**

## Introduction

This module focuses on Inter-Process Communication (IPC), a fundamental concept in operating systems that allows different processes to exchange data and synchronize their execution. Effective IPC is crucial for building complex, modular, and efficient applications.

## Learning Outcomes

By the end of this module, you should be able to:

*   Define Inter-Process Communication (IPC) and explain its importance.
*   Describe different IPC mechanisms, including pipes, shared memory, message queues, and sockets.
*   Compare and contrast the advantages and disadvantages of each IPC mechanism.
*   Understand the concepts of synchronization and mutual exclusion in the context of IPC.
*   Implement basic IPC mechanisms in a programming environment (e.g., using C/C++ on Linux).
*   Choose the appropriate IPC mechanism for a given scenario.
*   Explain the concept of Remote Procedure Call (RPC).

## 1. What is Inter-Process Communication (IPC)?

*   **Definition:** IPC refers to the mechanisms and protocols that allow different processes to communicate and synchronize their actions.  These processes can be running on the same machine or on different machines connected through a network.

*   **Importance:**
    *   **Modularity:** Allows complex applications to be broken down into smaller, independent processes that can communicate with each other.
    *   **Resource Sharing:** Processes can share resources like data, files, and devices.
    *   **Performance:** Parallel processing by different processes can improve overall performance.
    *   **Convenience:**  Allows specialized processes to perform specific tasks, providing a clean separation of concerns.
    *   **System structure:** Microkernels and other architectures rely heavily on IPC.

## 2. Types of IPC Mechanisms

### 2.1 Pipes

*   **Definition:** A unidirectional data channel between two related processes (usually parent and child).  Data flows in a first-in, first-out (FIFO) manner.

*   **Types:**
    *   **Named Pipes (FIFOs):** Can be used by unrelated processes. They are created as special files on the file system.
    *   **Unnamed Pipes:** Created using the `pipe()` system call and are used for communication between a parent process and its child process.

*   **Key Concepts:**
    *   **Unidirectional:** Data flows in one direction only.
    *   **FIFO:** Data is read in the same order it was written.
    *   **Blocking:** Read operations block if there is no data in the pipe, and write operations block if the pipe is full (default behavior).  Non-blocking I/O can be configured.
    *   **Limited Buffer Size:** Pipes have a finite buffer size (typically 4KB to 64KB), which can limit the amount of data that can be transferred at once.

*   **Example (Unnamed Pipes - C):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <string.h>

    int main() {
        int pipefd[2];  // File descriptors for the pipe (read end, write end)
        pid_t pid;
        char buffer[256];

        if (pipe(pipefd) == -1) {
            perror("pipe");
            exit(EXIT_FAILURE);
        }

        pid = fork();

        if (pid == -1) {
            perror("fork");
            exit(EXIT_FAILURE);
        }

        if (pid == 0) { // Child process (reader)
            close(pipefd[1]); // Close write end in the child

            read(pipefd[0], buffer, sizeof(buffer));
            printf("Child received: %s\n", buffer);

            close(pipefd[0]); // Close read end
            exit(EXIT_SUCCESS);
        } else { // Parent process (writer)
            close(pipefd[0]); // Close read end in the parent

            char message[] = "Hello from the parent!";
            write(pipefd[1], message, strlen(message) + 1); // Write the message

            close(pipefd[1]); // Close write end
            wait(NULL); // Wait for the child to finish
            exit(EXIT_SUCCESS);
        }

        return 0;
    }
    ```

*   **Advantages:**
    *   Simple to use for basic communication.
    *   Built-in mechanisms in most operating systems.

*   **Disadvantages:**
    *   Unidirectional communication.
    *   Limited buffer size.
    *   For unnamed pipes, only works between related processes.

### 2.2 Shared Memory

*   **Definition:**  A region of memory that is shared by multiple processes. This allows processes to access and modify the same data directly, without the need for copying.

*   **Key Concepts:**
    *   **Fastest IPC Mechanism:**  Processes access the same memory region, eliminating the overhead of data copying.
    *   **Synchronization Required:**  Crucial to implement synchronization mechanisms (e.g., semaphores, mutexes) to prevent race conditions and data corruption.
    *   **Operating System Support:**  Typically managed by the operating system.
    *   **Segment Identifier:** Processes attach to the shared memory segment using an identifier.

*   **Example (Shared Memory - C with POSIX):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <sys/shm.h>
    #include <sys/stat.h>
    #include <fcntl.h>
    #include <sys/mman.h>

    #define SHM_NAME "/my_shared_memory"
    #define SHM_SIZE 4096

    int main() {
        int shm_fd;
        void *ptr;
        pid_t pid;

        /* create the shared memory segment */
        shm_fd = shm_open(SHM_NAME, O_CREAT | O_RDWR, 0666);
        if (shm_fd == -1) {
            perror("shm_open");
            exit(1);
        }

        /* configure the size of the shared memory segment */
        if (ftruncate(shm_fd, SHM_SIZE) == -1) {
            perror("ftruncate");
            exit(1);
        }

        /* map the shared memory segment to the address space of the process */
        ptr = mmap(0, SHM_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
        if (ptr == MAP_FAILED) {
            perror("mmap");
            exit(1);
        }

        close(shm_fd); // Close the file descriptor; mapping persists.

        pid = fork();

        if (pid == -1) {
            perror("fork");
            exit(EXIT_FAILURE);
        }

        if (pid == 0) { // Child process (writer)
            sprintf((char *)ptr, "Hello from the child!");
            printf("Child wrote: %s\n", (char *)ptr);
            exit(EXIT_SUCCESS);

        } else { // Parent process (reader)
            wait(NULL); // Wait for the child
            printf("Parent read: %s\n", (char *)ptr);

            /* remove the shared memory segment */
            if (shm_unlink(SHM_NAME) == -1) {
                perror("shm_unlink");
                exit(1);
            }
            exit(EXIT_SUCCESS);
        }

        return 0;
    }
    ```

*   **Advantages:**
    *   Very fast data transfer.
    *   Efficient for large data transfers.

*   **Disadvantages:**
    *   Requires careful synchronization to avoid race conditions.
    *   More complex to implement compared to pipes.
    *   Potential for data corruption if synchronization is not properly managed.

### 2.3 Message Queues

*   **Definition:**  Allows processes to send and receive messages to each other.  Messages are stored in a queue until the recipient process retrieves them.

*   **Key Concepts:**
    *   **Message Types:** Each message can have a type, allowing processes to prioritize or filter messages.
    *   **Asynchronous Communication:** Processes can send messages without waiting for a response (non-blocking).
    *   **Kernel Managed:** Message queues are typically managed by the operating system kernel.
    *   **FIFO or Priority Based:** Messages can be retrieved in FIFO order or based on priority.

*   **Example (Message Queues - System V - C):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <sys/types.h>
    #include <sys/ipc.h>
    #include <sys/msg.h>
    #include <errno.h>

    #define MSG_KEY 1234

    struct msgbuf {
        long mtype;       /* message type, must be > 0 */
        char mtext[256];  /* message data */
    };

    int main() {
        int msgid;
        struct msgbuf message;

        // Create a message queue
        msgid = msgget(MSG_KEY, 0666 | IPC_CREAT);
        if (msgid == -1) {
            perror("msgget");
            exit(EXIT_FAILURE);
        }

        pid_t pid = fork();

        if (pid == -1) {
            perror("fork");
            exit(EXIT_FAILURE);
        }

        if (pid == 0) { // Child process (sender)
            message.mtype = 1; // Message type
            strcpy(message.mtext, "Hello from the child process!");

            if (msgsnd(msgid, &message, strlen(message.mtext) + 1, 0) == -1) {
                perror("msgsnd");
                exit(EXIT_FAILURE);
            }
            printf("Child: Sent message.\n");
            exit(EXIT_SUCCESS);
        } else { // Parent process (receiver)
            if (msgrcv(msgid, &message, sizeof(message.mtext), 1, 0) == -1) {
                perror("msgrcv");
                exit(EXIT_FAILURE);
            }
            printf("Parent: Received message: %s\n", message.mtext);

            // Remove the message queue
            if (msgctl(msgid, IPC_RMID, NULL) == -1) {
                perror("msgctl");
                exit(EXIT_FAILURE);
            }
            printf("Parent: Message queue removed.\n");
            wait(NULL);
            exit(EXIT_SUCCESS);
        }

        return 0;
    }
    ```

*   **Advantages:**
    *   Asynchronous communication.
    *   Messages can be prioritized.
    *   Provides a structured way to exchange data.

*   **Disadvantages:**
    *   Overhead of copying messages.
    *   Limited message size.
    *   Requires kernel involvement.

### 2.4 Sockets

*   **Definition:**  A communication endpoint that allows processes to communicate over a network (including the same machine). Sockets provide a generic interface for network communication using various protocols (e.g., TCP, UDP).

*   **Key Concepts:**
    *   **Network Communication:**  Primary mechanism for communication between processes on different machines.
    *   **Client-Server Model:**  Typically used in a client-server architecture.
    *   **Address and Port:**  Each socket is identified by an IP address and a port number.
    *   **Connection-Oriented (TCP) vs. Connectionless (UDP):** TCP provides reliable, ordered delivery of data, while UDP is faster but unreliable.
    *   **Stream vs. Datagram:** TCP is stream-oriented, while UDP is datagram-oriented.

*   **Example (Sockets - TCP - C - simplified):**  (This requires significant code, but here's the basic outline for a client-server example)

    **Server (simplified):**

    ```c
    // Create a socket
    // Bind the socket to an address and port
    // Listen for incoming connections
    // Accept a connection
    // Read data from the socket
    // Send data to the socket
    // Close the socket
    ```

    **Client (simplified):**

    ```c
    // Create a socket
    // Connect to the server's address and port
    // Send data to the socket
    // Read data from the socket
    // Close the socket
    ```
    (Complete examples demonstrating TCP and UDP socket communication are readily available online and are beyond the scope of this brief note.)

*   **Advantages:**
    *   Versatile for both local and network communication.
    *   Supports various communication protocols.
    *   Widely used and well-supported.

*   **Disadvantages:**
    *   More complex to implement compared to other IPC mechanisms.
    *   Overhead of network communication.

## 3. Comparison of IPC Mechanisms

| Feature           | Pipes        | Shared Memory | Message Queues | Sockets          |
|-------------------|--------------|---------------|----------------|------------------|
| Speed             | Moderate     | Fastest       | Moderate       | Slow (Network)   |
| Complexity        | Simple       | Complex       | Moderate       | Complex          |
| Data Transfer     | Stream       | Direct Access | Messages       | Stream/Datagram    |
| Synchronization    | Implicit     | Explicit      | Implicit       | Implicit/Explicit |
| Scope             | Related/Unrelated (Named) | Unrelated      | Unrelated      | Unrelated (Network) |
| Kernel Involvement | Yes          | Yes           | Yes            | Yes              |
| Network           | No           | No            | No             | Yes              |

## 4. Synchronization and Mutual Exclusion in IPC

*   **Race Condition:** Occurs when multiple processes access and modify shared data concurrently, and the final result depends on the order of execution.

*   **Critical Section:** A section of code that accesses shared resources.

*   **Mutual Exclusion:** Ensures that only one process can be in a critical section at a time.

*   **Synchronization Mechanisms:**
    *   **Semaphores:** Integer variables that can be used to control access to shared resources.
    *   **Mutexes (Mutual Exclusion Locks):** Binary semaphores that provide exclusive access to a resource.
    *   **Condition Variables:**  Allow processes to wait for a specific condition to become true before proceeding.
    *   **Spin Locks:**  Busy-waiting locks that are suitable for short critical sections. (Use with caution due to CPU consumption).

*   **Example (Using Semaphores for Shared Memory):**

    ```c
    // In the shared memory example, you would need to add semaphore code:

    // 1. Create a semaphore using sem_open.  (Requires linking with -pthread)
    // 2. Before accessing shared memory, use sem_wait to acquire the semaphore.
    // 3. After accessing shared memory, use sem_post to release the semaphore.
    // 4. On program exit, use sem_close and sem_unlink to clean up.

    // This greatly increases the complexity, but it's essential to prevent
    // data corruption in shared memory.
    ```

## 5. Choosing the Right IPC Mechanism

*   **Data Volume:** For large data transfers, shared memory is often the best choice.
*   **Communication Frequency:** For frequent, small messages, message queues or pipes may be suitable.
*   **Network Communication:** Sockets are essential for communication between processes on different machines.
*   **Synchronization Requirements:** If complex synchronization is needed, shared memory with semaphores/mutexes or message queues may be appropriate.
*   **Complexity:** Pipes are the simplest to use for basic communication.
*   **Security:**  Consider security implications when choosing an IPC mechanism, especially for sensitive data.

## 6. Remote Procedure Call (RPC)

*   **Definition:**  A protocol that allows a program on one computer to execute a procedure on another computer as if it were a local procedure call.

*   **Key Concepts:**
    *   **Client-Server Architecture:**  The client calls a procedure on the server.
    *   **Stub Functions:**  Client and server stubs handle the marshalling (converting data to a format suitable for transmission) and unmarshalling of data.
    *   **Network Communication:**  RPC relies on underlying network protocols (e.g., TCP, UDP) to transmit data.
    *   **Middleware:**  RPC frameworks (e.g., gRPC, Apache Thrift) provide tools and libraries for building RPC-based applications.

*   **Example:**  A client application on a user's machine calls a procedure on a remote server to retrieve data from a database.  The RPC framework handles the details of transmitting the request, executing the procedure on the server, and returning the result to the client.

*   **Advantages:**
    *   Simplifies distributed application development.
    *   Allows applications to access remote resources easily.

*   **Disadvantages:**
    *   Adds complexity to the system.
    *   Network latency can affect performance.
    *   Requires careful error handling to deal with network failures.

## Practice Questions/Exercises

1.  **Question:** What is Inter-Process Communication (IPC) and why is it important?
    **Answer:** IPC refers to the mechanisms and protocols that allow different processes to communicate and synchronize their actions. It's important for modularity, resource sharing, performance, and building complex applications.

2.  **Question:** Explain the difference between named and unnamed pipes.
    **Answer:** Unnamed pipes are used for communication between related processes (e.g., parent and child), while named pipes (FIFOs) can be used by unrelated processes.

3.  **Question:** What is the main advantage and disadvantage of using shared memory for IPC?
    **Answer:** Advantage: Very fast data transfer. Disadvantage: Requires careful synchronization to avoid race conditions and data corruption.

4.  **Question:** What are the advantages of using message queues for IPC?
    **Answer:** Asynchronous communication, messages can be prioritized, and provides a structured way to exchange data.

5.  **Question:** Why is synchronization important when using shared memory?  What synchronization mechanisms can be used?
    **Answer:** Synchronization is crucial to prevent race conditions and data corruption when multiple processes access and modify shared memory concurrently. Semaphores, mutexes, and condition variables can be used.

6.  **Exercise:** Write a simple C program that uses unnamed pipes to allow a parent process to send a message to its child process. (See example code above.)

7.  **Exercise:**  Research the `pthread` library in C and how to use mutexes to protect access to shared data.  Create a small program that spawns multiple threads, each incrementing a shared counter, and use a mutex to ensure thread safety.

8.  **Exercise:**  Explore the `socket()` system call in C. Write a "hello world" TCP server/client program.

## Important Points to Remember

*   IPC is essential for building modular and efficient applications.
*   Choose the appropriate IPC mechanism based on the specific requirements of your application.
*   Synchronization is critical when using shared memory to prevent race conditions.
*   Sockets are necessary for communication between processes on different machines.
*   Understand the tradeoffs between different IPC mechanisms in terms of speed, complexity, and synchronization.
*   Always handle errors appropriately when using IPC mechanisms. Check return values of system calls and take appropriate actions.
*   Clean up resources (e.g., shared memory segments, message queues) when they are no longer needed to avoid resource leaks.
