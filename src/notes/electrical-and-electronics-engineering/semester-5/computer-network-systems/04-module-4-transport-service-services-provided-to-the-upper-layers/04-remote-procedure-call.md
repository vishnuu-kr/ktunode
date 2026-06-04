---
title: "Remote procedure call"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36495"
status: "completed"
scrapedAt: "2026-05-23T16:20:24.233Z"
---
# Computer Network Systems: Module 4 - Transport Service
## Topic: Remote Procedure Call (RPC)

---

### Introduction

Remote Procedure Call (RPC) is a fundamental concept in distributed computing that allows a program to execute a procedure (function or method) on a remote computer as if it were a local procedure. This abstraction simplifies the development of distributed applications by hiding the complexities of network communication. RPC acts as a crucial service provided by the transport layer (or often implemented within the application layer, leveraging transport services) to the upper layers, enabling seamless interaction between processes residing on different machines.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of Remote Procedure Call (RPC).
*   Explain the client-server model in the context of RPC.
*   Describe the stages involved in an RPC execution.
*   Discuss the advantages and disadvantages of RPC.
*   Identify common RPC mechanisms and protocols.
*   Relate RPC to the services provided by the transport layer.

---

### Core Concepts and Definitions

*   **Distributed Computing:** A field of computer science that studies distributed systems. A distributed system is a collection of independent computers that appears to its users as a single coherent system.
*   **Procedure Call:** A mechanism in programming that transfers control to a procedure (function/method) when that procedure is invoked.
*   **Remote Procedure Call (RPC):** A protocol that allows a program on one computer to execute a procedure on another computer without the programmer explicitly coding the details of the remote interaction.
*   **Client:** The process that initiates the RPC request.
*   **Server:** The process that hosts the procedure being called and executes the request.
*   **Stub:** A piece of code that acts as a proxy for the remote procedure. There are client-side stubs and server-side stubs.
    *   **Client Stub (or Proxy):** Resides with the client. It marshals the parameters, sends the request message to the server, and unmarshals the reply.
    *   **Server Stub (or Skeleton):** Resides with the server. It receives the request message, unmarshals the parameters, calls the actual procedure, marshals the return values, and sends the reply message back to the client.
*   **Marshalling (or Data Sieving/Serialization):** The process of converting data structures or objects into a format that can be transmitted over a network. This typically involves converting data types into a standardized byte stream.
*   **Unmarshalling (or Deserialization):** The reverse process of marshalling, where the received byte stream is converted back into data structures or objects on the receiving end.
*   **Binding:** The process of establishing a connection between the client and the server, including identifying the server's address and the specific procedure to be called.

---

### How RPC Works: The RPC Execution Flow

The execution of an RPC involves a series of steps, typically orchestrated by the client and server stubs:

1.  **Client Makes a Local Call:** The client application calls a procedure that is actually part of the client stub, not the real remote procedure. This call appears as a normal, local function call to the application developer.
    *   *Example (Conceptual):* `result = calculate_sum(a, b);` where `calculate_sum` is the remote procedure.

2.  **Client Stub Execution (Marshalling):** The client stub receives the parameters from the client application.
    *   It marshals (serializes) these parameters into a message format suitable for network transmission. This might involve converting data types (e.g., integers, strings, complex data structures) into a standard byte representation.
    *   It encapsulates the marshalled parameters along with information about the procedure to be called (e.g., procedure identifier, server address).

3.  **Client Transport Layer:** The client stub hands the message to the client's transport layer (e.g., TCP or UDP).
    *   The transport layer adds its own headers (e.g., port numbers, sequence numbers) and delivers the message to the server's transport layer.

4.  **Server Transport Layer:** The server's transport layer receives the message and delivers it to the server stub.

5.  **Server Stub Execution (Unmarshalling & Procedure Call):** The server stub receives the message from the transport layer.
    *   It unmarshals (deserializes) the parameters from the message.
    *   It identifies the requested procedure and calls the actual procedure on the server machine with the unmarshalled parameters.

6.  **Server Procedure Execution:** The actual server procedure executes, performing the requested operation.

7.  **Server Stub Execution (Marshalling Return Values):** Once the server procedure completes, it returns any result values to the server stub.
    *   The server stub marshals these return values into a reply message.

8.  **Server Transport Layer:** The server stub sends the reply message back to the client's transport layer.

9.  **Client Transport Layer:** The client's transport layer receives the reply message and delivers it to the client stub.

10. **Client Stub Execution (Unmarshalling Reply):** The client stub receives the reply message.
    *   It unmarshals the return values from the message.

11. **Client Returns to Application:** The client stub returns the unmarshalled results to the original client application, completing the RPC.

---

### Advantages of RPC

*   **Simplifies Distributed Programming:** Hides network communication complexities, making distributed applications easier to develop and maintain. Programmers can focus on the logic rather than network protocols. (Relates to CO4: Explain the services provided by the transport layer and application layer).
*   **Provides a Clear Abstraction:** Presents a familiar procedure call interface to developers.
*   **Platform Independence (often):** Well-designed RPC systems can allow communication between programs written in different languages and running on different operating systems and hardware architectures.
*   **Efficiency:** Can be more efficient than explicit message passing for many distributed tasks.

---

### Disadvantages of RPC

*   **Complexity in Implementation:** Designing and implementing a robust RPC system can be complex, especially handling issues like error handling, fault tolerance, and security.
*   **Performance Overhead:** Marshalling, unmarshalling, and network transmission introduce overhead compared to local procedure calls.
*   **Tight Coupling:** Can lead to tight coupling between client and server. If the server's interface changes, clients might need to be updated.
*   **Failure Handling:** Dealing with network failures, server crashes, or timeouts requires careful design and implementation. The original paper by Birrell and Nelson (1984) highlighted the challenges of failure handling.
*   **Parameter Passing Semantics:** Achieving true "call by reference" semantics across a network can be difficult and inefficient.

---

### RPC Mechanisms and Protocols

Various RPC mechanisms and protocols have been developed over time, each with its own characteristics.

#### 1. Sun RPC (ONC RPC)

*   **Developed by:** Sun Microsystems.
*   **Key Features:**
    *   **XDR (External Data Representation):** A language-independent, machine-independent data representation standard used for marshalling and unmarshalling data. (Tanenbaum, 5th ed., Chapter 9)
    *   **Port Mapper:** A service that helps clients find the correct port number for a given RPC service on a server. Servers register their services with the port mapper.
    *   **Transport Independence:** Can operate over both TCP and UDP. UDP is often preferred for its lower overhead, but TCP is used for reliability when needed.
    *   **Idempotency:** Supports the concept of idempotent operations, where repeating an operation multiple times has the same effect as performing it once, which is crucial for handling retransmissions.
*   **Usage:** Widely used in UNIX-based systems, notably for Network File System (NFS).

#### 2. DCE RPC (Distributed Computing Environment RPC)

*   **Developed by:** Open Software Foundation (OSF).
*   **Key Features:**
    *   **IDL (Interface Definition Language):** Uses a formal IDL to describe the interface between client and server. This helps in generating client and server stubs automatically.
    *   **Platform and Language Independence:** Designed to be highly portable across different platforms and languages.
    *   **Security Features:** Incorporates authentication and authorization mechanisms.
*   **Usage:** Used in various enterprise environments.

#### 3. XML-RPC and SOAP

*   **XML-RPC:** An early RPC protocol that uses XML for encoding messages and HTTP as the transport protocol.
    *   **Simplicity:** Relatively simple to implement.
    *   **Interoperability:** Can achieve interoperability between different platforms and languages.
*   **SOAP (Simple Object Access Protocol):** A more feature-rich protocol for exchanging structured information in the implementation of web services.
    *   **XML-based:** Uses XML for message formatting.
    *   **Extensible:** Supports various transport protocols (HTTP, SMTP, etc.) and security features (WS-Security).
    *   **Complex:** More verbose and complex than XML-RPC.
*   **Relationship to RPC:** While not traditional RPC in the sense of direct procedure calls, they serve a similar purpose of enabling remote interaction between applications, often in a web service context.

#### 4. gRPC (Google Remote Procedure Call)

*   **Developed by:** Google.
*   **Key Features:**
    *   **Protocol Buffers (Protobuf):** Uses Protocol Buffers as its Interface Definition Language (IDL) and as its message interchange format. Protobuf is a language-neutral, platform-neutral, extensible mechanism for serializing structured data. It is more efficient than XML and JSON. (Kurose & Ross, 6th ed., Chapter 8 discusses application-layer protocols like HTTP, which RPC often leverages.)
    *   **HTTP/2:** Uses HTTP/2 as its transport protocol, enabling features like multiplexing, header compression, and server push, leading to improved performance.
    *   **Performance:** Known for its high performance and efficiency.
    *   **Language Support:** Supports a wide range of programming languages.
*   **Usage:** Widely adopted for microservices and API development.

---

### Relationship to Transport Layer Services (CO4)

RPC heavily relies on the services provided by the transport layer.

*   **Connection Establishment/Termination:** RPC mechanisms often leverage TCP for reliable connection establishment and termination. This ensures that messages are delivered in order and without loss.
*   **Data Transfer:** The transport layer provides reliable or unreliable data transfer. For RPC, reliability is usually crucial, making TCP a common choice. UDP might be used in specific scenarios where performance is paramount and the application layer handles reliability. (Forouzan, 5th ed., Chapter 13, discusses TCP and UDP services).
*   **Port Numbers:** The transport layer's port numbers are essential for directing RPC messages to the correct server process on the destination machine. The client stub needs to know the server's IP address and the port number associated with the RPC service.
*   **Segmentation and Reassembly:** The transport layer handles the segmentation of large RPC messages into smaller packets for transmission and reassembly of packets at the receiving end.

While RPC itself is often considered an application-layer protocol or a framework that simplifies application-layer interactions, its implementation relies directly on the underlying transport service.

---

### Practical Example: Sun RPC (NFS)

Consider the Network File System (NFS), which uses Sun RPC.

*   A client wants to read a file from a remote server.
*   The NFS client application calls an NFS function (e.g., `read_file`).
*   This call is intercepted by the client-side NFS RPC stub.
*   The client stub marshals the request parameters (file handle, offset, count) using XDR.
*   It then packages these into an RPC message, specifying the NFS service and `read` procedure.
*   This RPC message is sent via UDP to the NFS server's well-known port (or a port obtained from the port mapper).
*   The NFS server's RPC implementation receives the message.
*   The server stub unmarshals the parameters using XDR.
*   It then calls the actual NFS server procedure that performs the file read operation.
*   The results (file data, status) are marshalled by the server stub, sent back via UDP, and unmarshalled by the client stub to be returned to the NFS client application.

This demonstrates how RPC abstracts the network communication, allowing the client and server to interact as if they were calling local functions.

---

### Important Points to Remember

*   **Abstraction:** RPC's primary goal is to abstract network communication for programmers.
*   **Client Stub & Server Stub:** These are critical components that handle marshalling/unmarshalling and message passing.
*   **Marshalling/Unmarshalling:** Essential for converting data between application formats and network-transmittable formats.
*   **Transport Layer Dependence:** RPC relies heavily on services like connection management, reliable data transfer, and port addressing from the transport layer.
*   **Failure Handling:** A significant challenge in RPC design.
*   **Evolution:** RPC mechanisms have evolved from early systems like Sun RPC to modern, high-performance solutions like gRPC.

---

### Practice Questions and Exercises

**Question 1:** What is the primary purpose of Remote Procedure Call (RPC)?
    *   A) To encrypt data for secure transmission.
    *   B) To provide a way for programs on different machines to communicate as if they were calling local procedures.
    *   C) To manage IP addresses within a network.
    *   D) To route network traffic efficiently.

**Question 2:** Which component of an RPC system is responsible for converting data structures into a network-transmittable format?
    *   A) Client Stub
    *   B) Server Stub
    *   C) Marshalling
    *   D) Transport Layer

**Question 3:** Explain the role of the client stub in an RPC call.

**Question 4:** How does RPC relate to the services provided by the transport layer? Provide at least two examples.

**Question 5:** Discuss one advantage and one disadvantage of using RPC.

---

### Answers

**Answer 1:**
    *   **B) To provide a way for programs on different machines to communicate as if they were calling local procedures.**
    *   *Explanation:* RPC's core function is to simplify distributed programming by offering a familiar procedure call interface across network boundaries.

**Answer 2:**
    *   **C) Marshalling**
    *   *Explanation:* Marshalling is the process of converting data structures into a format suitable for network transmission. Both client and server stubs perform marshalling and unmarshalling.

**Answer 3:**
    The client stub acts as a proxy for the remote procedure on the client side. Its key roles include:
    1.  Receiving the parameters from the client application.
    2.  Marshalling these parameters into a message format.
    3.  Sending the request message to the server via the client's transport layer.
    4.  Receiving the reply message from the server.
    5.  Unmarshalling the return values from the reply message.
    6.  Returning the results to the client application.

**Answer 4:**
    RPC relies heavily on transport layer services for communication. Here are two examples:
    1.  **Reliable Data Transfer:** RPC often requires guaranteed delivery and ordered message sequencing. The transport layer, particularly TCP, provides this reliability, ensuring that RPC messages arrive correctly and in the expected order. Without this, marshalling and unmarshalling would be prone to errors. (Tanenbaum, 5th ed., Chapter 9).
    2.  **Port Addressing:** The transport layer uses port numbers to direct incoming RPC messages to the correct server process. The client stub needs to know the server's IP address and the specific port number associated with the target RPC service for the message to reach the correct destination on the server machine. (Forouzan, 5th ed., Chapter 13).

**Answer 5:**
    *   **Advantage:** Simplifies distributed programming by providing a familiar procedure call abstraction, hiding the complexities of network communication. Programmers don't need to directly handle sockets or message formatting.
    *   **Disadvantage:** Can introduce significant performance overhead due to the processes of marshalling, unmarshalling, and network transmission, making it slower than local procedure calls. Additionally, handling network failures and ensuring fault tolerance can be complex.

---
