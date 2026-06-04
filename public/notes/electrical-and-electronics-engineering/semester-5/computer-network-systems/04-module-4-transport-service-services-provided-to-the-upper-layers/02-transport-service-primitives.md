---
title: "Transport service primitives"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36493"
status: "completed"
scrapedAt: "2026-05-23T16:20:22.811Z"
---
# Computer Network Systems: Module 4 - Transport Service - Transport Service Primitives

This document provides comprehensive study notes on **Transport Service Primitives**, a crucial topic within Module 4 of Computer Network Systems. These primitives define the interface between the Transport Layer and the Application Layer, dictating how applications request and utilize transport services.

---

## 1. Introduction to Transport Service Primitives

The Transport Layer is responsible for providing reliable, end-to-end communication services to applications running on different hosts. It sits between the Application Layer and the Network Layer. To achieve this, the Transport Layer exposes a set of **service primitives** to the Application Layer. These primitives are essentially commands or requests that an application can issue to the Transport Layer to initiate, manage, and terminate communication.

**Key Concept:** Service primitives define the interface between two layers in a protocol stack. They specify the operations that can be performed and the parameters associated with those operations.

**Analogy:** Think of service primitives as the buttons and controls on a remote control for your TV. You press a button (primitive) to perform an action like changing the channel or adjusting the volume. The TV (Transport Layer) receives the command and performs the action.

**Textbook Reference:**
*   **Tanenbaum (5th ed., Chapter 6):** Discusses the services provided by the Transport Layer and the abstract interface it offers to the Application Layer.
*   **Forouzan (5th ed., Chapter 16):** Introduces the concept of primitives as the language of communication between adjacent layers.

**Course Outcome Alignment:**
*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)** - Understanding service primitives is fundamental to explaining the services the Transport Layer offers.

---

## 2. Types of Transport Service Primitives

Service primitives are typically categorized based on the type of operation they represent. The most common primitives include:

*   **REQUEST:** An application requests a service.
*   **INDICATION:** The Transport Layer indicates that a service has been requested by a remote peer or that an event has occurred.
*   **RESPONSE:** An application responds to an indication from the Transport Layer.
*   **CONFIRM:** The Transport Layer confirms that a service has been completed.

**Key Concept:** The combination of these primitive types forms the basis of the interactions between applications and the Transport Layer.

---

## 3. Common Transport Service Primitives and Their Usage

Let's explore the common service primitives and how they are used in various scenarios, such as connection establishment, data transfer, and connection termination.

### 3.1. Connection Establishment Primitives

Establishing a connection is a fundamental service. The following primitives are typically involved:

*   **`LISTEN` (REQUEST):**
    *   **Purpose:** A server application uses this primitive to indicate that it is ready to accept incoming connection requests. It essentially tells the Transport Layer to start listening on a specific port.
    *   **Parameters:** Typically includes the port number to listen on.
    *   **Example:** A web server application on port 80 would issue a `LISTEN` request to the Transport Layer.

*   **`CONNECT` (REQUEST):**
    *   **Purpose:** A client application uses this primitive to initiate a connection to a remote server.
    *   **Parameters:**
        *   Remote address and port number of the server.
        *   Optionally, local address and port number, quality of service parameters.
    *   **Example:** A web browser trying to connect to a web server would issue a `CONNECT` request specifying the server's IP address and port 80.

*   **`CONNECT` (INDICATION):**
    *   **Purpose:** The Transport Layer receives a `CONNECT` request from a remote peer and indicates this to the local server application.
    *   **Parameters:**
        *   Remote address and port number of the client.
        *   Optionally, local address and port number, quality of service parameters.
    *   **Example:** When a web browser initiates a `CONNECT` request to a web server, the server's Transport Layer will issue a `CONNECT` INDICATION to the web server application, informing it that a client wants to connect.

*   **`ACCEPT` (RESPONSE):**
    *   **Purpose:** The server application uses this primitive to accept an incoming connection request indicated by a `CONNECT` INDICATION.
    *   **Parameters:** None specific to the primitive itself, but it confirms the previous `CONNECT` INDICATION.
    *   **Example:** Upon receiving a `CONNECT` INDICATION from a web browser, the web server application might issue an `ACCEPT` RESPONSE to establish the connection.

*   **`CONNECT` (CONFIRM):**
    *   **Purpose:** The Transport Layer uses this primitive to confirm to the client application that the connection has been successfully established. This confirmation might be received after the server accepts the connection.
    *   **Parameters:** Success/failure status, local and remote addresses.
    *   **Example:** After the server accepts the connection, the client's Transport Layer issues a `CONNECT` CONFIRM to the client application, indicating the connection is ready.

**Visualizing Connection Establishment:**

```
     Application Layer (Client)             Application Layer (Server)
              |                                      |
              | 1. CONNECT (REQUEST)                 |
              V                                      |
Transport Layer (Client)                Transport Layer (Server)
              |                                      |
              | -------> (Network Layer) ------->   |
              |                                      |
              | 2. CONNECT (INDICATION)              |
              |                                      |
              |                                      V
              |                                Transport Layer (Server)
              |                                      |
              |                                      | 3. ACCEPT (RESPONSE)
              |                                      |
              |                                      V
              |                                Application Layer (Server)
              | <------ (Network Layer) <-------   |
              |                                      |
              | 4. CONNECT (CONFIRM)                 |
              V                                      |
Transport Layer (Client)                Transport Layer (Server)
              |                                      |
              |-------- Connection Established --------|
```

**Textbook Reference:**
*   **Kurose & Ross (6th ed., Chapter 5):** Explains the three-way handshake (SYN, SYN-ACK, ACK) used by TCP for connection establishment and how it relates to these primitives.
*   **Peterson & Davie (5th ed., Chapter 6):** Details the phases of connection establishment in transport protocols.

---

### 3.2. Data Transfer Primitives

Once a connection is established, data can be exchanged.

*   **`SEND` (REQUEST):**
    *   **Purpose:** An application uses this primitive to send data to the remote peer.
    *   **Parameters:**
        *   Data buffer containing the data to be sent.
        *   Length of the data.
    *   **Example:** A chat application would issue `SEND` requests to transmit messages.

*   **`RECEIVE` (REQUEST):**
    *   **Purpose:** An application uses this primitive to indicate its readiness to receive data. This is often used in connection-oriented services where the receiver polls for data.
    *   **Parameters:**
        *   Buffer to store the received data.
        *   Maximum buffer size.
    *   **Example:** An application might issue a `RECEIVE` request to prepare for incoming data.

*   **`DATA` (INDICATION):**
    *   **Purpose:** The Transport Layer receives data from the remote peer and indicates it to the local application.
    *   **Parameters:**
        *   Received data.
        *   Length of the data.
        *   Source address (if not implicitly known from the connection).
    *   **Example:** When data arrives from a remote peer, the Transport Layer issues a `DATA` INDICATION to the application.

**Important Note:** In some Transport Layer implementations (like TCP), the `RECEIVE` REQUEST might not be explicit. The Transport Layer might buffer data and notify the application when data is available via a `DATA` INDICATION without a preceding `RECEIVE` REQUEST. This is often referred to as a **"push" model** versus a **"pull" model**.

**Textbook Reference:**
*   **Stevens (2005, Chapter 14):** Provides detailed insights into TCP's data transfer mechanisms, including how data is sent and received.
*   **Halsall (5th ed., Chapter 7):** Discusses reliable data transfer and the mechanisms used to ensure data integrity and order.

---

### 3.3. Connection Termination Primitives

When communication is no longer needed, the connection must be gracefully terminated.

*   **`DISCONNECT` (REQUEST):**
    *   **Purpose:** An application uses this primitive to initiate the termination of an established connection.
    *   **Parameters:** Optionally, a reason for disconnection or user data.
    *   **Example:** When a user closes a chat window, the application would issue a `DISCONNECT` request.

*   **`DISCONNECT` (INDICATION):**
    *   **Purpose:** The Transport Layer receives a `DISCONNECT` request from the remote peer and indicates this to the local application.
    *   **Parameters:** Optionally, a reason for disconnection or user data from the remote peer.
    *   **Example:** If the remote end of a connection initiates a disconnect, the local Transport Layer issues a `DISCONNECT` INDICATION.

*   **`DISCONNECT` (CONFIRM):**
    *   **Purpose:** The Transport Layer uses this primitive to confirm to the application that the disconnection process has been completed.
    *   **Parameters:** Success/failure status.
    *   **Example:** After the connection is fully torn down, a `DISCONNECT` CONFIRM is sent to the application.

**Visualizing Connection Termination:**

```
     Application Layer (Active Side)       Application Layer (Passive Side)
              |                                      |
              | 1. DISCONNECT (REQUEST)              |
              V                                      |
Transport Layer (Active Side)         Transport Layer (Passive Side)
              |                                      |
              | -------> (Network Layer) ------->   |
              |                                      |
              | 2. DISCONNECT (INDICATION)           |
              |                                      |
              |                                      V
              |                                Transport Layer (Passive Side)
              |                                      |
              |                                      | 3. DISCONNECT (RESPONSE/CONFIRM)
              |                                      |
              |                                      V
              |                                Application Layer (Passive Side)
              | <------ (Network Layer) <-------   |
              |                                      |
              | 4. DISCONNECT (CONFIRM)              |
              V                                      |
Transport Layer (Active Side)         Transport Layer (Passive Side)
              |                                      |
              |-------- Connection Terminated --------|
```

**Textbook Reference:**
*   **Tanenbaum (5th ed., Chapter 6):** Discusses the different ways connections can be terminated, including graceful and abrupt closures.
*   **Forouzan (5th ed., Chapter 16):** May cover specific examples of connection termination in protocols like TCP.

---

## 4. Additional Primitives and Service Models

While the above are common, some Transport Layer services might offer additional primitives or operate under different service models.

*   **`DATA.TICKET` (REQUEST/INDICATION):** In some sophisticated scenarios, a primitive might be used to handle urgent data or data that needs special priority.
*   **`UNITDATA` (REQUEST/INDICATION):** For connectionless services (like UDP), where there's no explicit connection establishment, primitives like `UNITDATA` are used to send and receive individual datagrams. This bypasses the connection establishment/termination phases.

**Service Models:**

*   **Connection-Oriented:** Requires a connection to be established before data transfer. Examples: TCP. Uses primitives like `CONNECT`, `SEND`, `RECEIVE`, `DISCONNECT`.
*   **Connectionless:** No prior connection setup is needed. Each data unit is sent independently. Examples: UDP. Uses primitives like `SENDTO` and `RECVFROM` (or `UNITDATA` equivalent).

**Course Outcome Alignment:**
*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)** - Understanding different service models and primitives helps explain the variety of transport services.

---

## 5. Importance of Service Primitives

*   **Abstract Interface:** They provide a standardized, abstract interface, hiding the complexities of the underlying Transport Layer implementation (e.g., whether it's TCP or UDP, specific flow control or congestion control mechanisms).
*   **Layered Independence:** Applications are shielded from the specifics of the Network Layer or lower layers, promoting modularity and easier development.
*   **Protocol Independence:** An application doesn't need to know if the Transport Layer is implementing TCP or some other protocol; it just uses the primitives.
*   **Flexibility:** Allows for different types of Transport Layer services (reliable, unreliable, sequenced, unsequenced) to be offered using a consistent set of primitives.

**Textbook Reference:**
*   **Peterson & Davie (5th ed., Chapter 6):** Emphasizes the role of the transport layer interface in providing well-defined services.

---

## 6. Practice Questions and Exercises

**Question 1:**
Which service primitive is used by a server application to indicate its readiness to accept incoming connection requests?
a) `CONNECT` (REQUEST)
b) `LISTEN` (REQUEST)
c) `ACCEPT` (RESPONSE)
d) `DISCONNECT` (REQUEST)

**Answer 1:**
b) `LISTEN` (REQUEST)

**Question 2:**
Describe the typical sequence of primitives involved in establishing a connection-oriented communication session from the perspective of both the client and the server.

**Answer 2:**
**Client Side:**
1.  `CONNECT` (REQUEST): Client initiates connection.
2.  `CONNECT` (CONFIRM): Client receives confirmation of successful connection.

**Server Side:**
1.  `LISTEN` (REQUEST): Server starts listening for incoming connections.
2.  `CONNECT` (INDICATION): Server is notified of an incoming connection request.
3.  `ACCEPT` (RESPONSE): Server accepts the connection request.

**Question 3:**
For connectionless transport services (like UDP), what type of primitive would be used to send a single data packet without prior setup?
a) `SEND` (REQUEST)
b) `CONNECT` (REQUEST)
c) `UNITDATA` (REQUEST)
d) `LISTEN` (REQUEST)

**Answer 3:**
c) `UNITDATA` (REQUEST)

**Question 4:**
What is the primary benefit of using service primitives to define the interface between the Application Layer and the Transport Layer?

**Answer 4:**
Service primitives provide an **abstract interface** that hides the complexities of the underlying Transport Layer implementation, promoting layer independence and protocol independence. This allows applications to use transport services without needing to know the specifics of how they are provided.

**Question 5:**
When a remote host initiates the termination of a connection, what primitive does the local Transport Layer issue to the local application?

**Answer 5:**
`DISCONNECT` (INDICATION)

---

## 7. Important Points to Remember

*   **Primitives are the language:** Service primitives are the commands and notifications exchanged between the Application Layer and the Transport Layer.
*   **Four types:** REQUEST, INDICATION, RESPONSE, CONFIRM.
*   **Connection establishment:** Involves `LISTEN`, `CONNECT`, `ACCEPT`.
*   **Data transfer:** Involves `SEND`, `RECEIVE`, `DATA`.
*   **Connection termination:** Involves `DISCONNECT`.
*   **Connectionless services:** Use primitives like `UNITDATA` and bypass connection setup/teardown.
*   **Abstraction is key:** Primitives provide a standardized way to access transport services, making applications independent of underlying implementation details.
*   **Understanding these primitives is crucial for understanding how applications interact with the transport layer and the services it provides.**

---

This comprehensive set of notes covers the essential aspects of Transport Service Primitives, aligning with the learning outcomes and course objectives for Module 4. Remember to consult the provided textbooks for deeper insights and specific examples related to different transport protocols.
