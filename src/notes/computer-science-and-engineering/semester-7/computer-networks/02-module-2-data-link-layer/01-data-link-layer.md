---
title: "Data Link Layer:-"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c924"
status: "completed"
scrapedAt: "2026-05-20T17:02:37.345Z"
---
# Computer Networks: Module 2 - Data Link Layer

This module delves into the Data Link Layer, the second layer of the OSI model, responsible for reliable data transfer between adjacent network nodes.

---

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the **purpose and responsibilities** of the Data Link Layer.
*   Explain **error detection and correction** techniques.
*   Describe various **flow control mechanisms**.
*   Analyze different **access control methods** for shared media.
*   Discuss the principles of **framing** in data transmission.
*   Understand the concepts of **error control, flow control, and access control** as they relate to the Data Link Layer.
*   Recognize the role of the Data Link Layer in **bridging and switching**.

---

## 1. Purpose and Responsibilities of the Data Link Layer

The Data Link Layer (Layer 2) sits between the Network Layer (Layer 3) and the Physical Layer (Layer 1). Its primary responsibilities are to ensure reliable data transfer between **directly connected nodes** on the same physical network segment.

### Key Responsibilities:

*   **Framing:** Encapsulating Network Layer (Layer 3) packets into frames for transmission over the Physical Layer. This involves adding headers and trailers.
*   **Physical Addressing:** Using MAC (Media Access Control) addresses to uniquely identify devices on a local network.
*   **Flow Control:** Managing the rate of data transmission to prevent a fast sender from overwhelming a slow receiver.
*   **Error Control:** Detecting and correcting errors that may occur during transmission over the physical medium.
*   **Access Control:** Regulating how devices gain access to a shared communication medium.
*   **Link Management:** Establishing, maintaining, and terminating logical links between adjacent nodes.

### Relationship with Other Layers:

*   **Above:** Receives data packets (datagrams) from the Network Layer.
*   **Below:** Passes frames to the Physical Layer for transmission as bits.

---

## 2. Framing

Framing is the process of dividing a stream of bits from the Physical Layer into discrete units called **frames**. Each frame is then transmitted as a single unit. The Data Link Layer adds control information (header and trailer) to the raw data from the Network Layer.

### Types of Framing Methods:

*   **Fixed-Size Framing:** All frames have the same size. Simple but inefficient as it wastes bandwidth if data is shorter than frame size. Not commonly used.

*   **Variable-Size Framing:** Frames can have varying sizes. Requires mechanisms to delineate frame boundaries.
    *   **Character Count:** Includes a count field in the header indicating the number of characters in the frame.
        *   **Disadvantage:** If the count field is corrupted, the receiver loses synchronization.
    *   **Flag Byte Stuffing (or Byte Stuffing):** Uses a special flag byte (e.g., `01111110`) to mark the beginning and end of a frame. To avoid confusion if the flag byte appears in the data, a "stuffing" mechanism is employed.
        *   **Mechanism:** If a flag byte pattern appears within the data, a special escape byte (e.g., `01111101`) is inserted before it. When the frame is received, the escape byte is removed, and the following flag byte is interpreted correctly.
        *   **Example:**
            *   Data: `011111100000111111011111110`
            *   Transmitted Frame: `01111110` (flag) `01111101` (escape) `01111110` (flag) `000011111101` (stuffing) `1111110` (flag) `01111110` (flag)
    *   **Bit Stuffing (or Bit Stuffing):** Similar to byte stuffing but operates on bits. Uses a flag bit pattern (e.g., `01111110`).
        *   **Mechanism:** If five consecutive `1`s appear in the data, a `0` is inserted after them.
        *   **Example:**
            *   Data: `01111110000011111101111110`
            *   Transmitted Frame: `01111110` (flag) `01111101` (stuffed `0`) `00001111110` (original data) `1111110` (original data) `01111110` (flag)
    *   **Physical Layer Coding Violations:** Some physical layer encoding schemes (like Manchester encoding) have properties that can be used to detect frame boundaries. This is less common.

---

## 3. Error Detection and Correction

Communication channels are prone to noise, which can corrupt bits during transmission. The Data Link Layer implements mechanisms to detect and, in some cases, correct these errors.

### Error Detection:

These techniques add redundant bits to the data, allowing the receiver to check for inconsistencies.

*   **Parity Check:**
    *   **Concept:** Adds a single parity bit to each character or block of data. The parity bit is set such that the total number of `1`s in the transmitted unit is either even (even parity) or odd (odd parity).
    *   **Even Parity:** The parity bit is set to `1` if the number of `1`s in the data is odd, making the total even. It's set to `0` if the number of `1`s is already even.
    *   **Odd Parity:** The parity bit is set to `1` if the number of `1`s is even, making the total odd. It's set to `0` if the number of `1`s is already odd.
    *   **Limitations:** Can only detect single-bit errors or an even number of bit errors. Cannot detect an odd number of bit errors.
    *   **Example (Even Parity):**
        *   Data: `1011001` (3 ones)
        *   Parity Bit: `1` (to make total ones 4 - even)
        *   Transmitted: `10110011`
*   **Checksum:**
    *   **Concept:** Divides the data into segments of a fixed size. The segments are treated as binary numbers and added together using one's complement arithmetic. The one's complement of the sum (the checksum) is appended to the data. The receiver performs the same addition and checks if the result is all `1`s.
    *   **Advantages:** Simple to implement and can detect multiple bit errors.
    *   **Limitations:** Not very robust against specific error patterns.
*   **Cyclic Redundancy Check (CRC):**
    *   **Concept:** A more robust and widely used error detection technique. Treats the data as a binary polynomial and performs polynomial division by a pre-defined generator polynomial. The remainder of this division is the CRC checksum, which is appended to the data.
    *   **Generator Polynomial (G(x)):** A polynomial chosen by the standard (e.g., CRC-8, CRC-16, CRC-32).
    *   **Calculation:**
        1.  Append *n* zero bits to the end of the data, where *n* is the degree of the generator polynomial.
        2.  Divide the augmented data polynomial by the generator polynomial using binary arithmetic (XOR operations).
        3.  The remainder is the CRC checksum.
    *   **Detection Capability:** CRC can detect most common errors, including single-bit errors, double-bit errors, odd numbers of bit errors, and burst errors (consecutive bit errors) up to the degree of the generator polynomial.
    *   **Example (Conceptual):**
        *   Data: `1101`
        *   Generator: `101` (degree 2)
        *   Augmented Data: `110100`
        *   Divide `110100` by `101` (using XOR for subtraction):
            ```
                11100
            101|110100
               101
               ---
                111
                101
                ---
                 100
                 000
                 ---
                 100  (Remainder = CRC)
            ```
        *   Transmitted frame: `1101100`

### Error Correction:

Error correction techniques not only detect errors but also attempt to correct them at the receiver without requiring retransmission.

*   **Forward Error Correction (FEC):**
    *   **Concept:** Adds significant redundancy to the data, allowing the receiver to reconstruct the original data even if some bits are corrupted.
    *   **Examples:** Hamming codes, Reed-Solomon codes.
    *   **Advantages:** Useful in scenarios where retransmission is not feasible (e.g., satellite communication, broadcasting).
    *   **Disadvantages:** Requires more overhead (more redundant bits) compared to error detection.

---

## 4. Flow Control

Flow control is essential to manage the rate of data transmission between sender and receiver. It prevents a fast sender from overwhelming a slow receiver, which could lead to data loss.

### Mechanisms:

*   **Stop-and-Wait:**
    *   **Concept:** The sender transmits one frame and then stops, waiting for an acknowledgment (ACK) from the receiver before sending the next frame.
    *   **Pros:** Simple to implement.
    *   **Cons:** Inefficient for networks with high latency, as the sender spends most of its time waiting for ACKs. The utilization of the link is low.
    *   **Example:** Sender sends Frame 1. Receiver receives Frame 1 and sends ACK1. Sender receives ACK1 and sends Frame 2.
*   **Sliding Window Protocols:**
    *   **Concept:** Allows the sender to transmit multiple frames without waiting for an ACK for each individual frame. The sender maintains a "window" of frames it can send, and the receiver maintains a "window" of frames it can accept. The size of these windows determines the efficiency.
    *   **Key Components:**
        *   **Sequence Numbers:** Each frame is assigned a unique sequence number.
        *   **Window Size:** The maximum number of unacknowledged frames that the sender can transmit.
        *   **Acknowledgments (ACKs):** The receiver sends ACKs to inform the sender which frames have been successfully received.
    *   **Types of Sliding Window Protocols:**
        *   **Go-Back-N:**
            *   **Sender Window:** Can send up to `W` unacknowledged frames.
            *   **Receiver Window:** Can only accept frames in sequence. If a frame is out of order, the receiver discards it and all subsequent frames until the missing frame arrives. The sender retransmits the lost frame and all subsequent frames in its window.
            *   **Efficiency:** Moderate.
            *   **Example:** Sender sends frames 0, 1, 2, 3. Receiver expects frame 0. Receives 0, sends ACK0. Receives 1, sends ACK1. Receives 3 (out of order). Discards 3. Sender receives ACK0, ACK1. Sender sends frames 0, 1, 2, 3. Receiver has 0, 1, expects 2. Receives 3. Discards 3.
        *   **Selective Repeat:**
            *   **Sender Window:** Can send up to `W` unacknowledged frames.
            *   **Receiver Window:** Can accept out-of-order frames and buffers them. The receiver sends individual ACKs for each received frame. The sender only retransmits the frames for which it does not receive an ACK.
            *   **Efficiency:** High.
            *   **Example:** Sender sends frames 0, 1, 2, 3. Receiver expects frame 0. Receives 0, sends ACK0. Receives 2, sends ACK2. Receives 1, sends ACK1. Sender receives ACK0, ACK1, ACK2. Sender 3 is lost. Sender retransmits only frame 3.
    *   **Acknowledgement Strategies:**
        *   **Cumulative ACK:** An ACK indicates that all frames up to that sequence number have been received.
        *   **Individual ACK:** An ACK for each specific frame.
    *   **Timeout:** If the sender does not receive an ACK for a frame within a certain time period (timeout), it assumes the frame or its ACK was lost and retransmits the frame.

---

## 5. Access Control Methods (Media Access Control - MAC)

In shared network environments (like old Ethernet or Wi-Fi), multiple devices may attempt to transmit data simultaneously. Access control mechanisms ensure that only one device transmits at a time, preventing collisions.

### Types of Access Control:

*   **Contention-Based Access:**
    *   **Concept:** Devices contend for access to the medium. If a collision occurs, devices back off and try again.
    *   **ALOHA:**
        *   **Pure ALOHA:** A station transmits whenever it has data. If a collision occurs (detected by no ACK), the station waits a random amount of time before retransmitting.
        *   **Slotted ALOHA:** Time is divided into slots. Stations can only transmit at the beginning of a slot. This reduces the probability of collisions compared to Pure ALOHA.
    *   **Carrier Sense Multiple Access (CSMA):**
        *   **Concept:** Stations listen to the medium (carrier sense) before transmitting. If the medium is busy, they wait. If it's idle, they transmit.
        *   **Collision Detection (CSMA/CD):** If a collision is detected during transmission, the station stops transmitting, sends a jam signal to alert other stations, and then enters a random backoff procedure. Used in wired Ethernet.
        *   **Collision Avoidance (CSMA/CA):** Stations use mechanisms to avoid collisions before they occur, such as random backoff periods before transmitting and sending a Request to Send (RTS) and Clear to Send (CTS) mechanism. Used in Wi-Fi.
*   **Controlled Access (Deterministic Access):**
    *   **Concept:** Access to the medium is scheduled or granted in a controlled manner, eliminating collisions.
    *   **Token Passing:**
        *   **Concept:** A special frame called a "token" circulates around the network. A station can transmit data only if it possesses the token. After transmitting, it passes the token to the next station.
        *   **Advantages:** No collisions, fair access.
        *   **Disadvantages:** If the token is lost, the network can become inoperative. If a station holds the token for too long, others may starve.
        *   **Examples:** Token Ring, FDDI.
    *   **Demand Assignment:**
        *   **Concept:** Access is granted based on demand, often using a central controller or distributed algorithms. Examples include Time Division Multiple Access (TDMA) and Frequency Division Multiple Access (FDMA), though these are more common at the Physical Layer for cellular networks, they have conceptual links to access control.

---

## 6. Error Control

Error control mechanisms are implemented within the Data Link Layer to ensure the integrity of data transmitted between adjacent nodes.

### Types of Error Control:

*   **Error Detection (as discussed in Section 3):** The receiver checks for errors using parity, checksum, or CRC. If an error is detected, the frame is typically discarded.
*   **Error Correction (as discussed in Section 3):** The receiver attempts to correct errors without retransmission.

### Feedback-Based Error Control (using retransmission):

This is the most common approach for error control.

*   **Stop-and-Wait ARQ (Automatic Repeat reQuest):**
    *   **Mechanism:** Sender sends a frame and waits for an ACK. If ACK is not received within a timeout, it retransmits. If a corrupted frame is received, the receiver discards it and does not send an ACK. The sender's timeout will trigger retransmission.
    *   **Problem:** If the ACK is lost, the sender will retransmit an already received frame, leading to duplicate frames.
*   **Go-Back-N ARQ:**
    *   **Mechanism:** Sender can send multiple frames. If a frame is lost or corrupted, the receiver discards it and all subsequent frames. The sender, upon timeout or receiving a negative acknowledgment (NACK) for the lost frame, retransmits the lost frame and all subsequent frames in its window.
*   **Selective Repeat ARQ:**
    *   **Mechanism:** Sender can send multiple frames. The receiver acknowledges each frame individually. If a frame is lost or corrupted, only that specific frame is retransmitted. The receiver buffers out-of-order frames.

---

## 7. The Role of the Data Link Layer in Bridging and Switching

Data Link Layer devices, such as bridges and switches, play a crucial role in local area networks (LANs). They operate at Layer 2 and use MAC addresses to forward frames.

*   **Bridges:**
    *   Connect two or more network segments.
    *   Learn MAC addresses of devices on each segment by examining the source MAC address of incoming frames.
    *   Maintain a **forwarding table** (or MAC address table) mapping MAC addresses to network segments.
    *   Forward frames only to the segment where the destination MAC address resides, reducing traffic congestion.
    *   **Decision Process:**
        1.  Receive a frame.
        2.  Examine the destination MAC address.
        3.  If the destination MAC is on the same segment as the source, discard the frame (filter).
        4.  If the destination MAC is on a different segment, forward the frame to that segment.
        5.  If the destination MAC is unknown, broadcast the frame to all segments except the one it came from.
        6.  Learn the source MAC address and its associated segment.
*   **Switches:**
    *   Are essentially multi-port bridges.
    *   Provide dedicated bandwidth to each connected device, leading to higher performance compared to hubs.
    *   Use the MAC address table to forward frames directly to the intended destination port.
    *   **Store-and-Forward:** Switches typically receive the entire frame, check for errors (e.g., using CRC), and then forward it if it's error-free.
    *   **Cut-Through:** Switches forward frames as soon as the destination MAC address is read, without waiting for the entire frame. This is faster but might forward corrupted frames.

---

## Key Concepts and Definitions to Remember:

*   **MAC Address:** A unique hardware address assigned to network interface cards (NICs).
*   **Frame:** A unit of data at the Data Link Layer.
*   **Framing:** The process of encapsulating data into frames.
*   **Error Detection:** Techniques to identify if data has been corrupted (e.g., parity, checksum, CRC).
*   **Error Correction:** Techniques to fix corrupted data (e.g., FEC).
*   **Flow Control:** Managing data transmission rate to prevent receiver overload.
*   **Stop-and-Wait:** Simple flow control where sender waits for ACK.
*   **Sliding Window:** Flow control allowing multiple frames to be in transit.
*   **Go-Back-N ARQ:** Sliding window where lost frames cause retransmission of subsequent frames.
*   **Selective Repeat ARQ:** Sliding window where only lost frames are retransmitted.
*   **Access Control:** Mechanisms for managing access to a shared medium (e.g., CSMA/CD, CSMA/CA, Token Passing).
*   **Collision:** When two or more devices transmit simultaneously on a shared medium.
*   **Bridge:** A Layer 2 device connecting network segments and forwarding based on MAC addresses.
*   **Switch:** A multi-port bridge providing dedicated bandwidth and efficient forwarding.
*   **Forwarding Table (MAC Address Table):** Used by bridges and switches to map MAC addresses to ports.

---

## Practice Questions

1.  **Explain the primary responsibilities of the Data Link Layer.**
2.  **Describe the concept of bit stuffing and provide an example of how it works.**
3.  **How does a CRC calculation help in detecting errors? What are its advantages over a simple parity check?**
4.  **Compare and contrast Stop-and-Wait flow control with a sliding window protocol.**
5.  **What is the difference between CSMA/CD and CSMA/CA? Where are they typically used?**
6.  **If a sender uses a Go-Back-N ARQ protocol and frame 5 is lost, what frames does the receiver expect next, and what frames will the sender retransmit?**
7.  **How does a switch use MAC addresses to forward frames? What happens if the destination MAC address is not in its forwarding table?**
8.  **Consider a scenario where a data frame contains the bit pattern `0111111001111110`. If the Data Link Layer uses bit stuffing with the flag `01111110`, what will the transmitted frame look like?**
9.  **Explain why flow control is necessary in computer networks.**
10. **What is the role of an acknowledgment (ACK) in error control protocols?**

---

## Answers to Practice Questions

1.  **Primary responsibilities of the Data Link Layer:**
    *   Framing
    *   Physical Addressing (MAC addresses)
    *   Flow Control
    *   Error Control (detection and correction)
    *   Access Control
    *   Link Management

2.  **Bit Stuffing:** Bit stuffing is a framing method where a `0` bit is inserted after five consecutive `1`s in the data to prevent misinterpretation of the flag sequence (`01111110`). This ensures that the flag sequence only appears at the start and end of a frame.
    **Example:** Data: `0111111100111111`
    Transmitted Frame: `01111110` (flag) `01111101` (stuffing) `1001111101` (stuffing) `10` (flag)

3.  **CRC:** CRC uses polynomial division to generate a remainder (checksum). This remainder is highly sensitive to bit errors, allowing CRC to detect a wider range of errors (single-bit, double-bit, odd number of bits, burst errors) compared to a parity check, which can only reliably detect single-bit errors or an even number of bit errors.

4.  **Stop-and-Wait vs. Sliding Window:**
    *   **Stop-and-Wait:** Sends one frame, waits for ACK, then sends the next. Simple but inefficient for high latency/bandwidth due to long waiting periods. Low link utilization.
    *   **Sliding Window:** Allows multiple frames to be in transit. Sender maintains a window of unacknowledged frames. Receiver has a window of acceptable frames. More efficient, higher link utilization. Examples: Go-Back-N, Selective Repeat.

5.  **CSMA/CD vs. CSMA/CA:**
    *   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Stations listen before transmitting, and if a collision is detected during transmission, they stop, jam, and back off. Used in wired Ethernet.
    *   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Stations attempt to avoid collisions by using mechanisms like random backoff and RTS/CTS. Used in wireless (Wi-Fi).

6.  **Go-Back-N ARQ (Frame 5 lost):**
    *   **Receiver Expects:** The receiver will be expecting frame 5. It will discard any frames it receives after frame 4 until frame 5 arrives.
    *   **Sender Retransmits:** The sender will retransmit frame 5 and all subsequent frames it had already sent in its window (e.g., frames 6, 7, 8, etc.) after it times out waiting for an ACK for frame 5.

7.  **Switch and MAC Addresses:** A switch learns the MAC addresses of connected devices and the ports they are connected to by examining the source MAC address of incoming frames. It stores this information in a MAC address table (forwarding table). When a frame arrives, the switch looks up the destination MAC address in its table.
    *   **If found:** The switch forwards the frame only to the port associated with that MAC address.
    *   **If not found:** The switch floods (broadcasts) the frame to all ports except the one it arrived on, hoping the destination device will respond. The next frame from that destination will then be learned and added to the table.

8.  **Bit Stuffing Example:**
    *   Data: `0111111001111110`
    *   Flag: `01111110`
    *   First `01111110` is the start flag.
    *   Next data: `0111111` (six consecutive ones). The sender will insert a `0` after the fifth `1`: `01111101`.
    *   Remaining data: `01111110` is the end flag.
    *   Transmitted Frame: `01111110` (start flag) `01111101` (stuffed data) `01111110` (end flag)

9.  **Necessity of Flow Control:** Flow control is necessary to prevent a high-speed sender from overwhelming a low-speed receiver. Without it, the receiver might drop incoming data packets because its buffer is full, leading to data loss and inefficient communication.

10. **Role of ACK:** An acknowledgment (ACK) is a control frame sent by the receiver to the sender to confirm the successful reception of a data frame(s). It informs the sender that it can proceed to send the next frame(s) or that the transmitted data has been received without errors. In ARQ protocols, ACKs are crucial for the sender to know when to retransmit lost or corrupted frames.

---
