---
title: "Connection establishment & release"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649a"
status: "completed"
scrapedAt: "2026-05-23T16:20:27.935Z"
---
# Computer Network Systems - Module 4: Transport Service - Connection Establishment & Release

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental concepts of connection-oriented services in transport layer protocols.
*   Describe the process of establishing a connection between two endpoints.
*   Explain the different phases of connection establishment, including the three-way handshake.
*   Detail the mechanisms for releasing an established connection.
*   Discuss the importance of reliable data transfer and flow control in connection management.
*   Relate connection establishment and release to the services provided by the transport layer to upper layers.

## Introduction to Connection-Oriented Services

The transport layer provides two fundamental types of service to the application layer:

1.  **Connectionless Service:** Each packet (datagram) is treated independently. There is no prior setup or tear-down of a connection. This is like sending individual postcards.
    *   **Example:** UDP (User Datagram Protocol)
2.  **Connection-Oriented Service:** A logical connection is established between the two endpoints before data transfer begins. This connection is maintained throughout the communication and then released. This is like making a phone call.

This module focuses on **connection-oriented services**, specifically on the crucial processes of **connection establishment** and **connection release**. These processes are essential for ensuring reliable and ordered data delivery, which is a key service provided by the transport layer.

## Connection Establishment

Connection establishment is the process of setting up a reliable communication channel between two transport layer entities (e.g., two TCP ports on different hosts). This phase is critical for synchronizing parameters and ensuring that both ends are ready to communicate.

### Why is Connection Establishment Necessary?

*   **Resource Allocation:** Both endpoints might need to allocate buffers, port numbers, and other resources for the new connection.
*   **Synchronization:** Sequence numbers and acknowledgment numbers need to be synchronized to ensure ordered and reliable data delivery.
*   **Negotiation of Parameters:** Certain communication parameters (e.g., maximum segment size, window size) might need to be negotiated.
*   **Confirmation of Reachability:** It confirms that the destination is reachable and ready to accept data.

### The Three-Way Handshake (TCP)

The most common and robust method for connection establishment is the **three-way handshake**, widely used by TCP (Transmission Control Protocol). This handshake involves three messages exchanged between the client (initiator) and the server (listener).

**Key Concepts:**

*   **SYN (Synchronize Sequence Numbers):** A control flag bit set to 1 to indicate a connection request.
*   **ACK (Acknowledgement):** A control flag bit set to 1 to acknowledge received data.
*   **Sequence Number (Seq):** A number assigned to the first byte of data in a segment.
*   **Acknowledgement Number (Ack):** The sequence number of the *next* byte the sender expects to receive.

**Phases of the Three-Way Handshake:**

1.  **Client to Server: SYN**
    *   The client wants to establish a connection.
    *   It sends a segment with the **SYN** flag set to 1.
    *   The client picks an initial **sequence number** (let's call it `Client_ISN`).
    *   **Example:** Client sends `SYN; Seq = Client_ISN`

2.  **Server to Client: SYN-ACK**
    *   The server receives the SYN segment.
    *   If the server is willing to accept the connection, it responds with a segment that has **SYN** and **ACK** flags set to 1.
    *   The server picks its own initial **sequence number** (let's call it `Server_ISN`).
    *   The server acknowledges the client's SYN by setting the **acknowledgement number** to `Client_ISN + 1`.
    *   **Example:** Server sends `SYN, ACK; Seq = Server_ISN; Ack = Client_ISN + 1`

3.  **Client to Server: ACK**
    *   The client receives the SYN-ACK segment.
    *   The client acknowledges the server's SYN by sending a segment with the **ACK** flag set to 1.
    *   The client sets the **acknowledgement number** to `Server_ISN + 1`.
    *   The sequence number for this segment is `Client_ISN + 1`.
    *   **Example:** Client sends `ACK; Seq = Client_ISN + 1; Ack = Server_ISN + 1`

**Upon receiving the final ACK, the connection is considered established, and data transfer can begin.**

**Diagrammatic Representation:**

```
      Client                                      Server
      ------                                      ------

1. SYN; Seq=X -------------------------------->

                                    2. SYN, ACK; Seq=Y; Ack=X+1

3. ACK; Seq=X+1; Ack=Y+1 ------------------------>

      (Connection Established)
```

**Tanenbaum, 5th Ed., Chapter 7 (Transport Layer):** Tanenbaum discusses connection establishment in the context of TCP, highlighting the need for synchronization of sequence numbers and the use of the three-way handshake to prevent delayed duplicate connections.

**Forouzan, 5th Ed., Chapter 18 (Transport Layer: TCP):** Forouzan provides a detailed explanation of the TCP connection establishment, including the three-way handshake and the role of flags like SYN and ACK. He also touches upon the optional parameters that can be negotiated during this phase.

**Kurose & Ross, 6th Ed., Chapter 5 (Transport Layer):** Kurose and Ross explain connection establishment as a crucial step in providing reliable data transfer, emphasizing how the handshake ensures that both sides are ready and have agreed on initial sequence numbers.

### Handling Timeouts and Retransmissions

The three-way handshake is also robust against network issues like packet loss. If a SYN, SYN-ACK, or ACK segment is lost, the sender will eventually time out and retransmit the segment. This prevents half-open connections and ensures that the connection is only established when both sides confirm readiness.

### Connection Establishment Issues

*   **Half-Open Connections:** A connection where one side thinks the connection is established, but the other side has lost the final ACK and is unaware. This can lead to resource wastage.
*   **Delayed Duplicate Connections:** A new connection request arriving at the server long after the previous instance of the connection has terminated. The three-way handshake prevents the server from mistaking this old request for a new one by verifying the sequence numbers.

## Connection Release

Once data transfer is complete, the connection must be gracefully terminated to free up resources and inform the other end. Connection release is typically a more complex process than establishment due to the need to ensure all data has been delivered and acknowledged.

### Why is Connection Release Necessary?

*   **Resource Deallocation:** Releasing buffers, port numbers, and other connection-specific resources at both ends.
*   **Notification:** Informing the other end that no more data will be sent.
*   **Graceful Termination:** Ensuring that any remaining in-flight data is acknowledged before the connection is fully closed.

### Termination Modes

There are two primary modes for connection termination:

1.  **Full-Duplex Termination:** Both sides can send data independently. When one side finishes sending, it can close its sending side of the connection, while the other side can continue sending until it also finishes.
2.  **Simultaneous Close:** Both sides finish sending at roughly the same time and decide to close the connection simultaneously.

### Common Connection Release Mechanisms (TCP)

TCP uses a four-way handshake for connection release, involving the **FIN (Finish)** control flag.

**Key Concepts:**

*   **FIN (Finish):** A control flag bit set to 1 to indicate that the sender has no more data to send.
*   **ACK (Acknowledgement):** Used to acknowledge received FIN segments.

**Phases of the Four-Way Handshake:**

1.  **One Side Initiates Closure (e.g., Client): FIN**
    *   The client has finished sending data and wants to close its end of the connection.
    *   It sends a segment with the **FIN** flag set to 1.
    *   The client's sequence number remains as expected.
    *   **Example:** Client sends `FIN; Seq = S1`

2.  **Other Side Acknowledges (Server): ACK**
    *   The server receives the FIN segment.
    *   It acknowledges the FIN by sending an **ACK** segment.
    *   The acknowledgement number is `S1 + 1`.
    *   The server might still have data to send to the client, so it does not immediately send a FIN back. It enters a **CLOSE_WAIT** state.
    *   **Example:** Server sends `ACK; Seq = S2; Ack = S1 + 1`

3.  **Other Side Initiates Closure (Server): FIN**
    *   After the server finishes sending its remaining data and is ready to close, it sends its own **FIN** segment.
    *   **Example:** Server sends `FIN; Seq = S2`

4.  **First Side Acknowledges (Client): ACK**
    *   The client receives the server's FIN segment.
    *   It acknowledges the server's FIN by sending an **ACK** segment.
    *   The acknowledgement number is `S2 + 1`.
    *   The client enters a **TIME_WAIT** state to ensure that the server has received the final ACK and to handle any delayed packets from the previous connection.
    *   **Example:** Client sends `ACK; Seq = S1 + 1; Ack = S2 + 1`

**Upon expiry of the TIME_WAIT timer at the client and the connection closing at the server after sending the final ACK, the connection is fully released.**

**Diagrammatic Representation:**

```
      Client                                      Server
      ------                                      ------

1. FIN; Seq=S1 -------------------------------->

                                    2. ACK; Seq=S2; Ack=S1+1

                                    3. FIN; Seq=S2 ----------------------------->

                 4. ACK; Seq=S1+1; Ack=S2+1 ---------------->

      (Connection Closed at Server)   (Connection Closed at Client after TIME_WAIT)
```

**Tanenbaum, 5th Ed., Chapter 7:** Tanenbaum details the four-way handshake for TCP connection termination, explaining the roles of FIN and ACK flags and the potential for half-closed connections.

**Forouzan, 5th Ed., Chapter 18:** Forouzan elaborates on the TCP connection termination process, including the concept of a "half-closed" connection and the importance of the TIME_WAIT state to prevent issues with delayed packets.

**Kurose & Ross, 6th Ed., Chapter 5:** Kurose and Ross describe connection termination as a crucial aspect of robust communication, highlighting how the exchange of FIN flags ensures that both parties agree on the end of data transmission.

### Other Termination Scenarios

*   **Simultaneous FIN (Abrupt Close):** In some cases, both sides might send FINs simultaneously. This can lead to a faster closure but requires careful handling of acknowledgments to ensure both FINs are acknowledged. TCP handles this by allowing one side to immediately acknowledge the received FIN and send its own ACK.

*   **Abrupt Termination (RST - Reset):** A `RST` flag can be used to immediately terminate a connection, often in response to an error or an unexpected situation. This is a forceful closure and does not involve a handshake.

**Stevens, TCP/IP Illustrated Vol. 1:** Stevens provides an in-depth analysis of TCP states and transitions, including detailed explanations of connection establishment and termination handshakes, and the rationale behind TCP's robust handling of various scenarios.

### The `TIME_WAIT` State

The `TIME_WAIT` state at the client after sending the final ACK is crucial:

*   **Handles Delayed Packets:** It ensures that any old duplicate packets that might still be in the network from the previous connection instance will be discarded by the server before the client reuses the connection's port numbers.
*   **Ensures Final ACK Reaches Server:** It allows time for the server to receive the final ACK. If the ACK is lost, the server will retransmit its FIN, and the client in `TIME_WAIT` state can resend the ACK.

## Importance of Connection Establishment & Release to Upper Layers

The transport layer's ability to establish and release connections reliably is fundamental to the services it provides to applications:

*   **Reliable Data Transfer:** The connection establishment phase synchronizes sequence numbers, which is the foundation for reliable data transfer mechanisms (like retransmissions and acknowledgments) provided by protocols like TCP.
*   **Ordered Data Delivery:** The synchronized sequence numbers are used to reassemble data in the correct order at the receiving end.
*   **Flow Control:** During the connection setup, parameters like window sizes can be negotiated, enabling flow control mechanisms to prevent a fast sender from overwhelming a slow receiver.
*   **Congestion Control:** While not directly part of establishment/release, the state maintained during a connection allows for dynamic adjustments for congestion control.
*   **Application Interface:** Applications don't need to worry about the underlying network's reliability or order issues. They can simply establish a connection, send data, and release the connection, relying on the transport layer to handle the complexities.

**CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)**
This topic directly supports CO4 by explaining how the transport layer's connection management contributes to reliable data transfer, a key service it offers to applications.

## Summary of Key Points to Remember

*   **Connection-Oriented Service:** Requires a logical connection setup before data transfer and a teardown afterward.
*   **Three-Way Handshake (TCP):** Essential for establishing a connection, involving SYN, SYN-ACK, and ACK segments to synchronize sequence numbers.
*   **Four-Way Handshake (TCP):** Used for graceful connection release, involving FIN and ACK segments to ensure all data is sent and acknowledged.
*   **FIN Flag:** Indicates the end of data transmission from a specific direction.
*   **ACK Flag:** Used to acknowledge received segments.
*   **TIME_WAIT State:** Crucial for preventing issues with delayed packets after connection release.
*   **RST Flag:** Used for abrupt connection termination.
*   **Reliability:** Connection establishment and release are foundational for reliable data transfer, ordered delivery, and flow control services provided by the transport layer.

## Practice Questions and Answers

**Question 1:** What is the primary purpose of the three-way handshake in TCP connection establishment?
**Answer:** The primary purpose is to synchronize initial sequence numbers between the client and server and to confirm that both ends are ready to communicate, preventing issues like delayed duplicate connections.

**Question 2:** Explain the role of the FIN flag in TCP connection release.
**Answer:** The FIN flag is used by a transport layer entity to indicate that it has no more data to send. It signals the intention to close the connection from that side.

**Question 3:** Why is the TIME_WAIT state important in TCP connection release?
**Answer:** The TIME_WAIT state is important to handle delayed duplicate packets that might still be in the network from a previous connection instance. It also ensures that the final ACK sent by the initiator reaches the responder, allowing it to properly close the connection.

**Question 4:** Differentiate between a graceful connection release and an abrupt connection release.
**Answer:** A graceful connection release involves a handshake (like TCP's four-way handshake) where both sides exchange FIN and ACK segments to ensure all data is transferred and acknowledged before closing. An abrupt connection release, using the RST flag, immediately terminates the connection without a handshake, potentially leading to lost data.

**Question 5:** Consider a scenario where a client sends a SYN request to a server, but the SYN-ACK response from the server is lost. What will happen?
**Answer:** The client will eventually time out waiting for the SYN-ACK. It will then retransmit the SYN segment. If the SYN-ACK is still not received after several retransmissions, the client will give up and terminate the connection attempt.
