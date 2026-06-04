---
title: "Data link layer - Data link layer design issues"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3646e"
status: "completed"
scrapedAt: "2026-05-23T16:19:56.131Z"
---
# Computer Network Systems: Module 2 - Data Link Layer Design Issues

This module delves into the critical role of the Data Link Layer in computer networking. We will explore the fundamental design issues that the data link layer addresses to ensure reliable and efficient data transfer between directly connected nodes.

**Prerequisites:** Basic understanding of networking concepts, including the OSI model and the purpose of different layers.

---

## 1. Introduction to the Data Link Layer

The Data Link Layer (Layer 2) is responsible for providing reliable node-to-node data transfer. It takes data from the Network Layer (Layer 3) and encapsulates it into frames for transmission over the physical medium.

**Key Functions:**

*   **Framing:** Dividing the bit stream from the physical layer into manageable units called frames.
*   **Physical Addressing:** Adding physical (MAC) addresses to the frames to identify the source and destination nodes on the local network.
*   **Flow Control:** Managing the transmission rate of the sender to prevent overwhelming the receiver.
*   **Error Control:** Detecting and potentially correcting errors that occur during transmission.
*   **Access Control:** Determining which device on a shared medium gets to transmit next.

**Tanenbaum (5th Ed.) Chapter 3:** Provides a foundational overview of the data link layer, its services, and fundamental concepts.
**Forouzan (5th Ed.) Chapter 5:** Offers a comprehensive explanation of framing, error control, and flow control mechanisms.

---

## 2. Data Link Layer Design Issues

The design of the data link layer involves addressing several key challenges to ensure efficient and reliable communication.

### 2.1. Services Provided to the Network Layer

The data link layer can offer different levels of service to the network layer, impacting the complexity and efficiency of the overall network.

*   **Unacknowledged Service:**
    *   The data link layer simply transmits frames without checking for errors or acknowledging their receipt.
    *   This is typically used in networks where the physical layer or higher layers are assumed to handle error detection and correction.
    *   **Example:** Ethernet often provides an unacknowledged service.
*   **Acknowledged Service:**
    *   The data link layer provides reliable delivery by requiring an acknowledgment (ACK) from the receiver for each received frame.
    *   If an ACK is not received within a certain time, the sender retransmits the frame.
    *   This adds overhead but significantly improves reliability.
    *   **Example:** PPP (Point-to-Point Protocol) often provides an acknowledged service.

**Tanenbaum (5th Ed.) Chapter 3.1:** Discusses the different types of services the data link layer can offer, including virtual circuit and datagram service, and their implications.
**Forouzan (5th Ed.) Chapter 5.1:** Explains the services offered by the data link layer, focusing on the framing aspect.

---

### 2.2. Framing

Framing is the process of segmenting the bit stream from the physical layer into discrete units called frames. The data link layer needs a mechanism to identify the start and end of each frame.

**Methods for Framing:**

*   **Character Count:**
    *   Frames are preceded by a header containing the number of characters in the frame.
    *   **Problem:** If the count field is corrupted, the receiver loses synchronization and cannot correctly identify subsequent frames.
    *   **Example:** Early protocols like CDC's BISYNC used this method.
*   **Flag Byte Stuffing (or Byte Stuffing):**
    *   A special flag byte (e.g., `01111110`) is used to mark the beginning and end of a frame.
    *   To avoid the flag byte appearing within the data, a special escape byte (e.g., `01111101`) is inserted before any flag byte in the data. If an escape byte itself appears in the data, another escape byte is inserted before it.
    *   **Example:** HDLC (High-Level Data Link Control) and PPP use byte stuffing.
    *   **Illustration:**
        *   Data: `01111110 00000001 01111110 00000010` (contains a flag byte within)
        *   After stuffing: `01111110 00000001 01111101 01111110 00000010 01111110` (escape byte `01111101` inserted before the internal flag byte)
*   **Bit Stuffing:**
    *   Similar to byte stuffing but operates on bits.
    *   A flag sequence (e.g., `01111110`) marks the start and end of a frame.
    *   If five consecutive `1`s appear in the data, a `0` is automatically inserted after the fifth `1`. The receiver removes this inserted `0`.
    *   **Example:** HDLC uses bit stuffing.
    *   **Illustration:**
        *   Data: `01111110 000011111100001111110` (contains consecutive `1`s)
        *   After stuffing: `01111110 000011111011000011111010 01111110` (a `0` is inserted after every fifth `1`)
*   **Physical Layer Coding Violations:**
    *   Used in some Ethernet standards.
    *   Certain bit patterns that are illegal according to the physical layer coding scheme are used as frame delimiters.
    *   **Example:** Manchester encoding uses voltage transitions. The pattern `11` or `00` with no transition in the middle of a symbol is illegal and can be used as a delimiter.

**Tanenbaum (5th Ed.) Chapter 3.2:** Details various framing techniques, with a focus on byte stuffing and bit stuffing, explaining their mechanisms and advantages.
**Forouzan (5th Ed.) Chapter 5.2:** Provides in-depth explanations and diagrams for character count, flag byte stuffing, and bit stuffing.
**Kurose & Ross (6th Ed.) Chapter 4:** Discusses framing in the context of link layer protocols like PPP.

---

### 2.3. Error Control

The data link layer is responsible for detecting and, in some cases, correcting errors that occur during transmission over the physical medium.

**Error Detection Mechanisms:**

*   **Parity Codes:**
    *   Adds a single bit (parity bit) to each block of data to make the total number of `1`s either even (even parity) or odd (odd parity).
    *   Can detect single-bit errors.
    *   **Weakness:** Cannot detect an even number of errors (e.g., two bits flipped).
    *   **Example:** ASCII transmission often used parity.
*   **Checksum:**
    *   Treats the data as a sequence of numbers (e.g., 16-bit words).
    *   Adds these numbers together, and the one's complement of the sum is sent as the checksum.
    *   The receiver performs the same addition and takes the one's complement. If the result is all `1`s, it indicates no error.
    *   More effective than parity for detecting burst errors.
    *   **Example:** Used in TCP and UDP headers.
*   **Cyclic Redundancy Check (CRC):**
    *    Treats the data as a binary number and performs polynomial division by a predefined generator polynomial. The remainder of this division is the CRC code, which is appended to the data.
    *   The receiver performs the same division. If the remainder is zero, the data is likely error-free.
    *   **Strength:** Very effective at detecting burst errors and multiple errors. It's the most common error detection method in modern networking.
    *   **Example:** Ethernet, Wi-Fi, and many other protocols use CRC.
    *   **Generator Polynomial:** A mathematical polynomial defining the CRC algorithm. Common examples are CRC-8, CRC-16, CRC-32.

**Error Correction Mechanisms:**

*   **Forward Error Correction (FEC):**
    *   Adds redundant bits to the data in such a way that the receiver can not only detect but also correct a certain number of errors without retransmission.
    *   More complex than error detection but can be beneficial in environments with high error rates or where retransmission is costly (e.g., satellite communication).
    *   **Example:** Hamming codes, Reed-Solomon codes.

**Tanenbaum (5th Ed.) Chapter 3.3:** Covers error detection and correction techniques, explaining parity, checksums, and CRC with mathematical details.
**Forouzan (5th Ed.) Chapter 5.3:** Provides detailed explanations of error detection methods, including parity, checksum, and CRC, with examples of calculations.
**Peterson & Davie (5th Ed.) Chapter 4:** Discusses error detection and correction in the context of reliable data transfer.

---

### 2.4. Flow Control

Flow control ensures that a fast sender does not overwhelm a slow receiver. It manages the rate at which data is sent.

**Mechanisms for Flow Control:**

*   **Stop-and-Wait:**
    *   The sender transmits one frame and then stops and waits for an acknowledgment from the receiver before sending the next frame.
    *   **Pros:** Simple to implement.
    *   **Cons:** Inefficient for long propagation delays and high bandwidth, as the sender is idle for most of the time.
    *   **Example:** Simple implementations of acknowledged services.
*   **Sliding Window:**
    *   The sender maintains a "window" of frames that it can send without waiting for individual acknowledgments.
    *   The receiver also maintains a window of frames it is prepared to accept.
    *   The window size dictates how many unacknowledged frames can be in transit.
    *   **Acknowledgments:** Receiver sends acknowledgments for frames it has successfully received. These acknowledgments "slide" the sender's window forward.
    *   **Types of Sliding Window Protocols:**
        *   **Go-Back-N (GBN):** If a frame is lost or corrupted, the sender retransmits that frame and all subsequent frames that were already sent. This is inefficient as it discards and retransmits correctly received frames.
        *   **Selective Repeat (SR):** The sender retransmits only the lost or corrupted frames. The receiver buffers out-of-order frames until they can be delivered in the correct sequence. This is more efficient but more complex.
    *   **Example:** TCP uses a sliding window mechanism.

**Tanenbaum (5th Ed.) Chapter 3.4:** Elaborates on flow control, explaining Stop-and-Wait and the concepts behind sliding window protocols (GBN and SR).
**Forouzan (5th Ed.) Chapter 5.4:** Provides detailed explanations and diagrams for Stop-and-Wait and Sliding Window protocols, illustrating their operations.
**Kurose & Ross (6th Ed.) Chapter 4:** Discusses flow control in the context of reliable data transfer protocols.

---

### 2.5. Multiple Access Control

On shared network media (like early Ethernet or wireless LANs), multiple devices compete for access to the transmission medium. Multiple access control protocols manage this competition.

**Types of Multiple Access Protocols:**

*   **Channel Partitioning Protocols:**
    *   Divide the channel into smaller pieces (time slots, frequency bands, or codes) and allocate these pieces to different devices.
    *   **Time Division Multiple Access (TDMA):** The channel is divided into time slots, and each station gets a slot to transmit.
    *   **Frequency Division Multiple Access (FDMA):** The channel is divided into frequency bands, and each station is allocated a band.
    *   **Code Division Multiple Access (CDMA):** Uses unique spreading codes to allow multiple stations to transmit simultaneously on the same frequency.
    *   **Example:** TDMA used in some cellular networks, FDMA in radio broadcasting.
*   **Random Access Protocols:**
    *   Devices transmit whenever they have data to send. If a collision occurs (multiple devices transmit simultaneously), they detect it and reschedule their transmission.
    *   **ALOHA:** A very simple protocol where a station transmits immediately. If a collision occurs, it waits for a random time and tries again.
        *   **Pure ALOHA:** Transmit anytime.
        *   **Slotted ALOHA:** Time is divided into slots, and stations can only transmit at the beginning of a slot. This improves efficiency.
    *   **Carrier Sense Multiple Access (CSMA):** Before transmitting, a station "listens" to the channel (carrier sense). If the channel is busy, it waits. If it's idle, it transmits.
        *   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Used in wired Ethernet. Stations listen for collisions while transmitting. If a collision is detected, they stop transmitting, send a jamming signal, and back off for a random period before trying again.
        *   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Used in wireless networks (like Wi-Fi) where collision detection is difficult. Stations try to avoid collisions by waiting for a random period, using RTS/CTS (Request to Send/Clear to Send) handshakes, and using acknowledgment frames.
    *   **Example:** CSMA/CD is fundamental to Ethernet, CSMA/CA is fundamental to Wi-Fi.
*   **Controlled Access Protocols:**
    *   Access to the medium is controlled in a deterministic way.
    *   **Token Passing:** A special frame called a "token" circulates around a ring or bus. A station can only transmit if it possesses the token. After transmitting, it passes the token to the next station.
    *   **Poll/Select:** A master station polls slave stations to see if they have data to send.

**Tanenbaum (5th Ed.) Chapter 3.5:** Provides a comprehensive overview of multiple access protocols, including ALOHA, CSMA/CD, CSMA/CA, and token passing.
**Forouzan (5th Ed.) Chapter 5.5:** Focuses on the MAC sublayer and discusses various MAC protocols like ALOHA, CSMA/CD, and token passing.
**Kurose & Ross (6th Ed.) Chapter 4:** Explains multiple access protocols in the context of shared link-layer technologies.

---

## 3. Connecting to the Course Outcomes

This module's content directly addresses several course outcomes:

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   Understanding the role of the data link layer within the OSI model is crucial.
    *   The design issues (framing, error control, flow control) highlight the protocols and mechanisms that enable communication over physical media.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   The entire module is dedicated to the data link layer.
    *   Multiple access control protocols (CSMA/CD for Ethernet, CSMA/CA for Wi-Fi) are core to understanding MAC sublayer operations.
    *   The design issues are directly applicable to how Ethernet and Wi-Fi function.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   While this module focuses on Layer 2, understanding its role in enabling Layer 3 (routing) is important. Flow control can indirectly impact congestion.
*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   The data link layer provides services (e.g., reliable transfer) that the transport layer might rely on or build upon.

---

## 4. Key Points to Remember

*   The Data Link Layer ensures reliable node-to-node data transfer.
*   **Framing** is essential for segmenting data into frames, with byte stuffing and bit stuffing being common methods.
*   **Error Control** (detection and correction) is vital for data integrity, with CRC being a widely used and robust technique.
*   **Flow Control** (Stop-and-Wait, Sliding Window) prevents sender overload and maximizes channel utilization.
*   **Multiple Access Control** is critical for managing access to shared media, with CSMA/CD (Ethernet) and CSMA/CA (Wi-Fi) being prevalent.
*   The specific services and mechanisms employed by the data link layer can vary significantly depending on the protocol and the network environment.

---

## 5. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  Which of the following is NOT a primary design issue of the data link layer?
    a) Framing
    b) Routing
    c) Flow Control
    d) Error Control

    **Answer:** b) Routing (Routing is primarily a Layer 3 function)

2.  Which framing method uses a special character inserted before a control character that might appear in the data?
    a) Bit Stuffing
    b) Character Count
    c) Physical Layer Coding Violations
    d) Byte Stuffing

    **Answer:** d) Byte Stuffing

3.  Which error detection technique is most effective at detecting burst errors?
    a) Parity Check
    b) Checksum
    c) Cyclic Redundancy Check (CRC)
    d) Longitudinal Redundancy Check (LRC)

    **Answer:** c) Cyclic Redundancy Check (CRC)

4.  In the Stop-and-Wait flow control protocol, what happens after the sender transmits a frame?
    a) It immediately transmits the next frame.
    b) It waits for an acknowledgment before transmitting the next frame.
    c) It retransmits the frame until an acknowledgment is received.
    d) It transmits the frame and waits for a timeout period.

    **Answer:** b) It waits for an acknowledgment before transmitting the next frame.

5.  CSMA/CD is typically used in:
    a) Wireless LANs
    b) Token Ring Networks
    c) Ethernet
    d) FDDI

    **Answer:** c) Ethernet

**Short Answer Questions:**

1.  Explain the difference between unacknowledged and acknowledged services provided by the data link layer.
    **Answer:** An unacknowledged service does not guarantee error-free delivery and does not involve acknowledgments. An acknowledged service ensures reliable delivery through acknowledgments and retransmissions of lost or corrupted frames.

2.  Describe the purpose of bit stuffing and provide a simple example of how it works.
    **Answer:** Bit stuffing is used to prevent the data pattern from matching the frame delimiter. When five consecutive `1`s appear in the data stream, a `0` is inserted after the fifth `1`. The receiver removes this inserted `0` if it follows five consecutive `1`s. Example: Data `01111110` becomes `011111010` if it's not a flag.

3.  What is the fundamental problem with the Character Count framing method?
    **Answer:** If the character count field itself gets corrupted during transmission, the receiver loses synchronization and cannot correctly interpret the boundaries of subsequent frames, leading to widespread data corruption.

4.  How does the Selective Repeat sliding window protocol differ from Go-Back-N?
    **Answer:** Selective Repeat only retransmits the specific frames that were lost or corrupted, while Go-Back-N retransmits the faulty frame and all subsequent frames that had already been sent, even if they were received correctly.

5.  Why is CSMA/CA used in wireless networks instead of CSMA/CD?
    **Answer:** In wireless networks, it's difficult to reliably detect collisions while transmitting due to the "hidden terminal problem" and the fact that a station's own transmission can drown out incoming signals. CSMA/CA aims to avoid collisions by introducing mechanisms like back-off timers and RTS/CTS handshakes before transmission.

**Practical Exercise:**

Consider the following bit sequence that needs to be transmitted using bit stuffing, with the flag sequence `01111110`.

Data: `101111110011111110111`

Determine the transmitted bit sequence after applying bit stuffing.

**Solution:**

*   Original data: `101111110011111110111`
*   The first `01111110` is the flag.
*   Inside the data, we have `111111`. After the fifth `1`, we insert a `0`.
    *   `1011111` **`0`** `1100111111` **`0`** `10111`
*   The final sequence: `01111110` `10111110110011111010111` `01111110`

**Transmitted Bit Sequence:** `011111101011111011001111101011101111110`

---
This concludes Module 2 on Data Link Layer Design Issues. Understanding these fundamental concepts is crucial for building and analyzing computer networks.
