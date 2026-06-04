---
title: "Link Layer Services of link layer"
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff058"
status: "completed"
scrapedAt: "2026-05-23T18:00:12.779Z"
---
# Computer Networks: Module 4 - Link Layer Services

## Introduction to the Link Layer

The Link Layer (also known as the Data Link Layer or Layer 2) is the second layer in the TCP/IP model and the OSI model. Its primary responsibility is to provide a reliable and efficient data transfer service between two directly connected nodes over a physical medium. This layer sits between the Network Layer (Layer 3) and the Physical Layer (Layer 1).

**Key Concepts:**

*   **Framing:** The Link Layer takes packets from the Network Layer and encapsulates them into **frames** for transmission over the physical medium.
*   **Physical Addressing (MAC Addressing):** Each network interface card (NIC) has a unique, globally assigned **Media Access Control (MAC) address**. The Link Layer uses these MAC addresses to identify the source and destination of frames on a local network segment.
*   **Error Detection and Correction:** The Link Layer implements mechanisms to detect and, in some cases, correct errors introduced during transmission over the physical medium.
*   **Flow Control:** This service prevents a fast sender from overwhelming a slow receiver, ensuring that data is transmitted at a rate the receiver can handle.
*   **Medium Access Control (MAC):** On shared network media (like older Ethernet or Wi-Fi), the Link Layer manages how multiple devices can access the medium without causing excessive collisions.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding the principles and components of computer networks, including the role of the Link Layer in switching and its relationship with other layers.
*   **CO2 (K2):** Demonstrating the protocols and functions of the Link Layer, such as framing, error detection, and flow control.
*   **CO4 (K3):** Utilizing knowledge of physical communication standards which are directly influenced by Link Layer protocols.

**Textbook References:**

*   **Kurose & Ross (Chapter 5):** Provides a comprehensive overview of Link Layer services, framing, error detection, flow control, and popular Link Layer protocols like Ethernet and Wi-Fi.
*   **Forouzan (Chapter 4):** Focuses on data link layer framing, error control, and flow control, with detailed explanations of error detection and correction techniques.

---

## 1. Framing

The Link Layer takes datagrams from the Network Layer and encapsulates them into frames for transmission. This requires defining the boundaries of a frame.

**Key Concepts:**

*   **Frame Delimitation:** Frames need start and end markers to delineate their boundaries.
*   **Payload:** The data portion of the frame, which is the datagram from the Network Layer.
*   **Header:** Contains control information, including source and destination MAC addresses, and EtherType/Protocol field.
*   **Trailer:** Often contains error detection codes (e.g., CRC).

**Framing Methods:**

*   **Character Count:** The header contains a field indicating the number of characters (octets) in the frame.
    *   **Challenge:** If the count field is corrupted, the receiver loses synchronization.
*   **Byte Stuffing (Octet Stuffing):** Special flag bytes are used to mark the beginning and end of a frame. If a flag byte appears within the data, it is "stuffed" by inserting an extra byte.
    *   **Example:** A byte `01111110` might be the flag byte. If the data contains `01111110`, it is sent as `01111110` followed by a special escape byte (e.g., `01111111`).
    *   **Kurose & Ross (Section 5.1.1):** Discusses character stuffing and the need for byte stuffing to avoid misinterpreting data bytes as frame delimiters.
*   **Bit Stuffing:** Similar to byte stuffing but operates at the bit level. A special flag sequence (e.g., `01111110`) marks the frame boundary. If five consecutive `1`s appear in the data, a `0` is inserted.
    *   **Example:** Data `011111110` becomes `0111110110`.
    *   **Forouzan (Section 4-2):** Provides a detailed explanation of bit stuffing with examples.
*   **Physical Layer Coding Violations:** Some physical layer encoding schemes (like Manchester encoding or MLT-3) have inherent violations that can be used to signal frame boundaries, particularly at the start.

**Important Point to Remember:** Framing is essential for the Link Layer to know where one frame ends and the next begins, allowing for proper processing and reassembly of data.

---

## 2. Error Detection and Correction

Transmission errors can occur due to noise, interference, or signal degradation. The Link Layer uses techniques to detect these errors and, in some cases, correct them.

**Key Concepts:**

*   **Error Detection:** Mechanisms that inform the receiver whether the received frame has likely been corrupted.
*   **Error Correction:** Mechanisms that not only detect errors but also attempt to reconstruct the original data.

**Error Detection Techniques:**

*   **Parity Checking:**
    *   **Single Parity:** A single parity bit is added to each data unit (e.g., byte) to make the total number of `1`s either even (even parity) or odd (odd parity).
    *   **How it works:** If a frame has an odd number of bit errors, parity checking will detect it. However, if there are an even number of bit errors, parity checking will fail to detect it.
    *   **Example:** Data `1101001`.
        *   Even Parity: Needs one more `1` to be even. Parity bit = `1`. Transmitted: `11010011`.
        *   Odd Parity: Needs zero more `1`s to be odd. Parity bit = `0`. Transmitted: `11010010`.
    *   **Two-Dimensional Parity:** Parity bits are calculated for each bit position across multiple frames. This can detect up to three bit errors.
*   **Cyclic Redundancy Check (CRC):**
    *   **Concept:** Treats the frame's bit string as a polynomial. A generator polynomial ($G(x)$) is agreed upon. The sender appends a number of bits (the CRC checksum) to the data such that the resulting number is exactly divisible by $G(x)$. The receiver performs the same division and checks if the remainder is zero.
    *   **Process:**
        1.  Let the data polynomial be $D(x)$.
        2.  Sender computes $D(x) \cdot x^r$, where $r$ is the degree of $G(x)$.
        3.  Sender computes the remainder $R(x) = (D(x) \cdot x^r) \pmod{G(x)}$.
        4.  Sender appends $R(x)$ (as bits) to the data to form the frame.
        5.  Receiver computes $(Received Frame) \pmod{G(x)}$. If the remainder is zero, the frame is likely error-free.
    *   **Strengths:** Very effective at detecting burst errors (multiple consecutive bit errors). Commonly used in Ethernet, Wi-Fi, and many other protocols.
    *   **Kurose & Ross (Section 5.2.2):** Explains CRC generation and detection with polynomial arithmetic.
    *   **Forouzan (Section 4-3):** Provides a detailed mathematical explanation and algorithmic approach to CRC.
*   **Checksum:**
    *   **Concept:** The sender treats the data as a sequence of binary numbers, sums them up, and then takes the one's complement of the sum. This one's complement is the checksum, which is transmitted. The receiver performs the same operation on the received data and compares the result with the received checksum.
    *   **Pros:** Simpler to implement than CRC.
    *   **Cons:** Less effective than CRC, especially at detecting certain error patterns. Used in TCP and IP headers.
    *   **Kurose & Ross (Section 5.2.1):** Introduces checksum as a simpler alternative to CRC.

**Error Correction Techniques:**

*   **Forward Error Correction (FEC):** The receiver can correct a certain number of errors without retransmission.
    *   **Hamming Codes:** A type of FEC code that can detect and correct single-bit errors. More complex versions can correct multiple errors.
    *   **Reed-Solomon Codes:** More powerful FEC codes used in applications like CDs, DVDs, and satellite communications, capable of correcting burst errors.
    *   **Trade-off:** FEC requires adding more redundant bits, which reduces the efficiency (throughput) of the link.

**Important Point to Remember:** Error detection is a trade-off between the overhead of adding redundancy bits and the reliability of the data transmission. CRC is the most common and robust error detection method used in Link Layer protocols.

---

## 3. Flow Control

Flow control ensures that a sender does not transmit data faster than the receiver can process it. This prevents buffer overflow at the receiver and lost data.

**Key Concepts:**

*   **Sender:** Transmits data.
*   **Receiver:** Receives data and processes it.
*   **Buffer:** Temporary storage at the receiver.
*   **Acknowledgement (ACK):** A control frame sent by the receiver to confirm successful reception of data.
*   **Sequence Number:** Identifies the order of frames.

**Flow Control Mechanisms:**

*   **Stop-and-Wait:**
    *   **How it works:** The sender transmits one frame and then waits for an acknowledgement from the receiver before sending the next frame.
    *   **Pros:** Simple to implement.
    *   **Cons:** Very inefficient, especially on links with high latency or long distances, as the sender is idle for most of the time.
    *   **Example:** Imagine sending a letter and waiting for a confirmation postcard before sending the next letter.
*   **Sliding Window:**
    *   **How it works:** The sender maintains a "window" of frames that it can transmit without waiting for acknowledgements. The receiver also maintains a window of frames it expects. The sender slides its window forward as acknowledgements arrive.
    *   **Key Parameters:**
        *   **Sender Window Size ($W_s$):** The maximum number of unacknowledged frames the sender can have outstanding.
        *   **Receiver Window Size ($W_r$):** The maximum number of frames the receiver can accept out of order.
        *   **Sequence Numbers:** Used to identify frames and their order.
    *   **Protocols:**
        *   **Go-Back-N:** If a frame is lost or corrupted, the sender retransmits that frame and all subsequent frames that were already sent. This is inefficient if only one frame is lost.
        *   **Selective Repeat:** If a frame is lost or corrupted, only that specific frame is retransmitted. The receiver buffers out-of-order frames and delivers them in the correct sequence once all preceding frames arrive. This is more efficient but requires more complex buffering at the receiver.
    *   **Kurose & Ross (Section 5.3):** Discusses the concepts of flow control and error control, introducing stop-and-wait and sliding window mechanisms.
    *   **Forouzan (Section 4-4):** Provides detailed explanations of stop-and-wait and the sliding window protocols (Go-Back-N and Selective Repeat).

**Important Point to Remember:** Flow control is crucial for maintaining stable communication and preventing data loss due to receiver overload. Sliding window protocols are significantly more efficient than stop-and-wait.

---

## 4. Medium Access Control (MAC)

On broadcast (shared) media, multiple devices can attempt to transmit data simultaneously, leading to collisions. MAC protocols are used to regulate access to the shared medium.

**Key Concepts:**

*   **Shared Medium:** A single communication channel accessible by multiple devices.
*   **Collision:** When two or more devices transmit simultaneously on a shared medium, their signals interfere, corrupting the data.
*   **Collision Domain:** A network segment where collisions can occur.

**Types of MAC Protocols:**

*   **Contention-Based MAC Protocols:** Devices contend for access to the medium.
    *   **ALOHA:**
        *   **Pure ALOHA:** A device transmits whenever it has data. If a collision occurs, it waits a random amount of time before retransmitting.
        *   **Slotted ALOHA:** Time is divided into slots. Devices can only transmit at the beginning of a slot. This reduces the probability of collisions compared to Pure ALOHA.
        *   **Pros:** Simple.
        *   **Cons:** Inefficient, especially at higher loads, due to frequent collisions.
    *   **Carrier Sense Multiple Access (CSMA):**
        *   **Carrier Sense:** Devices listen to the medium before transmitting. If the medium is busy, they wait.
        *   **Multiple Access:** Multiple devices share the same medium.
        *   **CSMA/CD (Collision Detection) - Used in Ethernet:**
            *   **How it works:**
                1.  Listen before transmitting.
                2.  If the medium is idle, transmit.
                3.  If a collision is detected during transmission, stop transmitting, send a jam signal to ensure all other nodes detect the collision, and then wait for a random backoff period before attempting to transmit again.
            *   **Kurose & Ross (Section 5.4.1):** Detailed explanation of CSMA/CD and its operation.
            *   **Forouzan (Section 5-3):** Covers CSMA/CD, including the backoff algorithm.
    *   **CSMA/CA (Collision Avoidance) - Used in Wi-Fi:**
        *   **How it works:** Devices are generally less able to detect collisions when transmitting (e.g., due to hidden node problem). So, they try to *avoid* collisions by:
            1.  Listening to the medium.
            2.  If idle, waiting a random Interframe Space (IFS) and then transmitting.
            3.  Using acknowledgements for transmitted frames.
            4.  Employing a backoff mechanism similar to CSMA/CD.
        *   **Kurose & Ross (Section 5.4.2):** Explains CSMA/CA and its use in Wi-Fi.
        *   **Forouzan (Section 5-4):** Discusses CSMA/CA in detail.

*   **Controlled Access MAC Protocols:** Devices take turns accessing the medium in a more organized fashion.
    *   **Token Passing:**
        *   **How it works:** A special frame called a "token" circulates around the network. Only the device holding the token is allowed to transmit. After transmitting, it passes the token to the next device.
        *   **Pros:** No collisions, predictable access time.
        *   **Cons:** If the token is lost, the network can halt. If a device fails to pass the token, it can cause problems.
        *   **Examples:** Token Ring, FDDI.
    *   **Poll-Based Protocols:** A central controller polls devices to see if they have data to send.

**Important Point to Remember:** MAC protocols are essential for managing access to shared network media, preventing collisions and ensuring fair sharing of bandwidth. CSMA/CD (Ethernet) and CSMA/CA (Wi-Fi) are the most prevalent MAC protocols in modern networking.

---

## 5. Link Layer Addressing (MAC Addressing)

The Link Layer uses physical addresses, known as MAC addresses, to identify network interfaces within a local network segment.

**Key Concepts:**

*   **MAC Address:** A 48-bit unique identifier burned into the Network Interface Card (NIC) by the manufacturer.
*   **Format:** Typically represented as six pairs of hexadecimal digits separated by colons or hyphens (e.g., `00:1A:2B:3C:4D:5E`).
*   **Uniqueness:** Assumed to be globally unique. The first three bytes (Organizationally Unique Identifier - OUI) are assigned to manufacturers by the IEEE, and the last three bytes are assigned by the manufacturer to each device.
*   **Scope:** MAC addresses are only relevant within a local network (e.g., an Ethernet segment, a Wi-Fi network). Routers use IP addresses to forward packets between networks, stripping off the Link Layer header and creating a new one for each hop.
*   **ARP (Address Resolution Protocol):**
    *   **Purpose:** To map an IP address (Layer 3) to a MAC address (Layer 2) within a local network.
    *   **How it works:**
        1.  A host wants to send a packet to an IP address on its local network.
        2.  It broadcasts an ARP request: "Who has IP address X.X.X.X? Tell [its own MAC address]."
        3.  The host with IP address X.X.X.X responds with an ARP reply: "IP address X.X.X.X is at MAC address Y:Y:Y:Y:Y:Y."
        4.  The requesting host caches this IP-to-MAC mapping for future use.
    *   **Kurose & Ross (Section 5.5):** Explains MAC addressing and the role of ARP in bridging the gap between Layer 2 and Layer 3.
    *   **Forouzan (Section 6-1):** Provides detailed information on ARP.

**Important Point to Remember:** MAC addresses are essential for directed communication within a local network segment, and ARP is the critical protocol that translates logical (IP) addresses to physical (MAC) addresses.

---

## 6. Link Layer Switches

Switches are Link Layer devices that connect multiple network segments and forward frames based on MAC addresses.

**Key Concepts:**

*   **Forwarding:** A switch learns the MAC addresses of devices connected to its ports and forwards incoming frames only to the port associated with the destination MAC address.
*   **Learning:** Switches build a **MAC address table** (also known as a forwarding table or CAM table) by examining the source MAC addresses of incoming frames.
*   **Switching Logic:**
    1.  When a frame arrives at a port, the switch looks at the destination MAC address in the frame's header.
    2.  It consults its MAC address table:
        *   **If the destination MAC address is in the table and associated with a different port:** The frame is forwarded *only* to that specific port.
        *   **If the destination MAC address is in the table and associated with the same port the frame arrived on:** The frame is dropped (no need to forward it back).
        *   **If the destination MAC address is not in the table (or is a broadcast/multicast address):** The frame is flooded to all ports except the one it arrived on.
*   **No Collisions (within a switch port):** Unlike hubs, switches create separate collision domains for each port, significantly reducing collisions and improving performance.
*   **Forwarding vs. Filtering:**
    *   **Forwarding:** Sending a frame to its destination port.
    *   **Filtering:** Dropping a frame because its destination is on the same input port.
*   **Spanning Tree Protocol (STP):** Used to prevent loops in networks with redundant links. If a switch floods a frame and it returns to the same switch via another port, it creates a loop, which can lead to broadcast storms and network instability. STP blocks redundant paths.

**Kurose & Ross (Section 5.6):** Discusses the operation of switches and their role in building local area networks.
**Forouzan (Chapter 5):** Covers switches in detail, including forwarding, filtering, learning, and spanning tree concepts.

**Example of Switch Operation:**

Imagine a switch with 4 ports:
*   Port 1: Connected to PC A (MAC: AA:AA:AA:AA:AA:AA)
*   Port 2: Connected to PC B (MAC: BB:BB:BB:BB:BB:BB)
*   Port 3: Connected to PC C (MAC: CC:CC:CC:CC:CC:CC)
*   Port 4: Connected to another switch

1.  PC A sends a frame to PC B. Frame arrives at Port 1 with Source MAC AA:AA:AA:AA:AA:AA and Destination MAC BB:BB:BB:BB:BB:BB.
    *   Switch learns: Port 1 -> AA:AA:AA:AA:AA:AA.
    *   Switch looks for BB:BB:BB:BB:BB:BB. If not found, it floods to Ports 2, 3, 4.
2.  PC B receives the frame (if flooded) and sends an acknowledgement to PC A. Frame arrives at Port 2 with Source MAC BB:BB:BB:BB:BB:BB and Destination MAC AA:AA:AA:AA:AA:AA.
    *   Switch learns: Port 2 -> BB:BB:BB:BB:BB:BB.
    *   Switch looks for AA:AA:AA:AA:AA:AA. It finds it in its table, associated with Port 1.
    *   Switch forwards the frame *only* to Port 1.

**Important Point to Remember:** Switches are intelligent Link Layer devices that improve network efficiency by forwarding frames only to the necessary ports, unlike hubs which broadcast all traffic.

---

## Practice Questions and Answers

**Question 1:** Explain the purpose of framing in the Link Layer. What are the common methods used for framing?

**Answer:** Framing is the process of encapsulating a network layer datagram into a Link Layer frame. It defines the boundaries of the frame, allowing the receiver to know where a frame begins and ends. Common methods include character count, byte stuffing, bit stuffing, and physical layer coding violations. Bit stuffing and byte stuffing are more robust as they avoid relying solely on counts.

**Question 2:** Why is error detection important in the Link Layer? Describe the working principle of CRC.

**Answer:** Error detection is crucial because the physical medium can introduce errors during transmission. The Link Layer detects these errors to ensure data integrity. CRC (Cyclic Redundancy Check) treats the data as a binary polynomial and divides it by a pre-defined generator polynomial. The remainder of this division (the checksum) is appended to the data. The receiver performs the same division and checks if the remainder is zero, indicating error-free transmission. CRC is effective at detecting burst errors.

**Question 3:** What is the difference between flow control and error control?

**Answer:**
*   **Flow Control:** Manages the rate of data transmission to prevent a fast sender from overwhelming a slow receiver. It ensures that the receiver can process all incoming data.
*   **Error Control:** Detects and potentially corrects errors that occur during transmission. It aims to ensure the accuracy and integrity of the transmitted data.

**Question 4:** How does CSMA/CD work in Ethernet?

**Answer:** CSMA/CD (Carrier Sense Multiple Access with Collision Detection) works as follows:
1.  **Listen:** Before transmitting, a station listens to the channel.
2.  **Transmit:** If the channel is idle, it transmits.
3.  **Detect:** While transmitting, if it detects a collision (another station also transmitting), it stops transmitting.
4.  **Jam:** It sends a jam signal to ensure all other stations detect the collision.
5.  **Backoff:** It waits for a random amount of time (using a backoff algorithm) before attempting to transmit again.

**Question 5:** What is the role of ARP? How does a host use ARP to find the MAC address of another host on the same local network?

**Answer:** ARP (Address Resolution Protocol) maps an IP address to a MAC address on a local network. A host wanting to communicate with another host on the same network broadcasts an ARP request containing the target IP address. The host with that IP address responds with its MAC address. The requesting host caches this mapping for future use.

**Question 6:** How does a switch learn MAC addresses and forward frames?

**Answer:** A switch learns MAC addresses by examining the source MAC address of incoming frames and storing the mapping between the MAC address and the port it arrived on in its MAC address table. When a frame arrives, the switch checks the destination MAC address. If it's in the table and mapped to a different port, the switch forwards the frame only to that port. If the destination MAC is not in the table, it floods the frame to all ports (except the incoming one).

---

## Important Points to Remember:

*   The Link Layer bridges the gap between the Network Layer and the Physical Layer.
*   Framing is essential to delineate Link Layer frames.
*   Error detection (especially CRC) and correction are vital for reliable data transfer.
*   Flow control mechanisms (like sliding windows) prevent data loss due to receiver overload.
*   MAC protocols (CSMA/CD, CSMA/CA) manage access to shared media to avoid collisions.
*   MAC addresses are physical, hardware addresses used for local network communication.
*   Switches are Link Layer devices that forward frames based on MAC addresses, improving network efficiency.
*   ARP is critical for translating logical IP addresses to physical MAC addresses.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Further Reading:

*   **Kurose & Ross (Chapter 5):** Link Layer Services, Ethernet, Hubs, Switches, and PPP.
*   **Forouzan (Chapters 4 & 5):** Data Link Layer: Framing, Flow Control, Error Control, Medium Access Control, and Wired/Wireless LANs.

---