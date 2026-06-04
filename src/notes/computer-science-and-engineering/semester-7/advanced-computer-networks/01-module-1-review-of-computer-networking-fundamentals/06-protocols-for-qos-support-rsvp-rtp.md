---
title: "Protocols for QoS support - RSVP, RTP"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c42e"
status: "completed"
scrapedAt: "2026-05-20T16:59:54.034Z"
---
# Advanced Computer Networks: Module 1 - Review of Computer Networking Fundamentals

## Topic: Protocols for QoS Support - RSVP, RTP

---

### 1. Introduction to Quality of Service (QoS)

**Key Concept:** Quality of Service (QoS) refers to the mechanisms and policies that manage network traffic to provide differentiated levels of service to different applications, users, or data flows. It ensures that certain types of traffic receive preferential treatment over others, guaranteeing performance parameters like bandwidth, latency, jitter, and packet loss.

**Why is QoS Needed?**

*   **Real-time Applications:** Applications like VoIP (Voice over IP), video conferencing, and online gaming are highly sensitive to network impairments. They require low latency, minimal jitter, and guaranteed bandwidth.
*   **Differentiated Services:** Different users or applications might have varying requirements. QoS allows network administrators to prioritize critical traffic over less critical traffic (e.g., prioritizing business-critical video conferences over casual web browsing).
*   **Resource Management:** Networks have finite resources (bandwidth, processing power). QoS helps in allocating these resources efficiently to meet the demands of various traffic types.

**Key QoS Metrics:**

*   **Bandwidth:** The maximum rate of data transfer across a network path.
*   **Latency (Delay):** The time it takes for a packet to travel from its source to its destination.
*   **Jitter:** The variation in latency between successive packets of a data stream. High jitter can be detrimental to real-time applications.
*   **Packet Loss:** The percentage of packets that fail to reach their destination.

---

### 2. Resource Reservation Protocol (RSVP)

**Learning Outcome:** Understand the fundamental principles and operation of RSVP for establishing and maintaining QoS-aware network paths.

**Key Concepts:**

*   **Signaling Protocol:** RSVP is a signaling protocol used to request specific QoS parameters for a data flow. It's *not* a data forwarding protocol itself.
*   **End-to-End Reservation:** RSVP enables an application at an end-host to request QoS from routers along the path to the destination.
*   **Soft State:** RSVP maintains a "soft state" for each reservation. This means that the reservation information must be periodically refreshed by the sender. If the refresh messages stop, the reservation times out. This makes it dynamic and responsive to changes.
*   **Two-Phase Operation:**
    1.  **PATH Message:** Sent by the sender downstream to establish a path. It carries information about the sender and the requested QoS parameters. Routers along the path store this information in a "PATH\_STATE" block.
    2.  **RESV Message:** Sent by the receiver upstream towards the sender. It requests the QoS specified in the PATH message. Routers that receive a RESV message allocate the requested resources (if available) and pass the RESV message upstream.

**RSVP Message Types:**

*   **PATH:** Initiates the reservation process and defines the desired route.
*   **RESV:** Requests resources for a flow.
*   **PATH_ERR:** Sent upstream to indicate an error in the PATH message.
*   **RESV_ERR:** Sent downstream to indicate an error in the RESV message.
*   **PATH_TEAR:** Used to tear down an existing reservation.
*   **RESV_TEAR:** Used to tear down an existing reservation.

**RSVP Session:**

*   A session is defined by a destination address, protocol, and destination port.
*   Within a session, a flow is defined by the sender's address and port.

**RSVP Reservation Styles:**

RSVP supports different ways of allocating resources to a flow:

*   **Fixed Filter (FF):** Allocates a fixed set of resources to a specific sender. Each sender gets its own dedicated reservation.
    *   *Example:* A video conference call where each participant has their own dedicated bandwidth.
*   **Dynamic Filter (DF):** Allocates resources to a flow from any sender within a certain group. The allocated resources can be shared among senders.
    *   *Example:* A multicast stream where all receivers share the same reserved bandwidth.
*   **Wildcard Filter (WF):** Allocates resources to all senders in a session. All senders share the same reservation. This is generally not used for individual QoS control.

**RSVP States in Routers:**

Routers maintain RSVP states for each reservation, typically including:

*   **PATH State:** Information about the sender and the upstream router.
*   **Adspec (Advertisement Specification):** Information about the sender's traffic characteristics.
*   **Tspec (Traffic Specification):** Information about the requested QoS parameters (e.g., token bucket parameters for bandwidth and burstiness).
*   **FlowSpec:** The actual QoS parameters allocated by the router.

**RSVP Operation Example:**

1.  **Sender S** wants to send high-priority video to **Receiver R**.
2.  **S** sends a **PATH** message to **R**. The PATH message travels through routers R1, R2, R3.
3.  Each router (R1, R2, R3) creates a **PATH\_STATE** block for this flow.
4.  **R** receives the PATH message. **R** now knows the path from **S** to **R**.
5.  **R** sends a **RESV** message back towards **S**. The RESV message carries the desired **FlowSpec** (e.g., minimum bandwidth, maximum jitter).
6.  As the RESV message travels upstream, each router (R3, R2, R1) checks if it can allocate the requested resources.
7.  If a router can allocate the resources, it creates an **RSVP Session State** and installs it. It then forwards the RESV message upstream.
8.  If a router cannot allocate resources, it sends a **RESV\_ERR** message downstream.
9.  Once **S** receives the RESV message (indicating successful reservation), it starts sending data with the requested QoS.
10. **S** periodically re-sends PATH messages, and **R** periodically re-sends RESV messages to maintain the soft state and keep the reservation active.

**Important Points to Remember about RSVP:**

*   RSVP is a **signaling protocol**, not a data forwarding protocol.
*   It establishes **end-to-end reservations** for QoS.
*   It uses a **soft state** mechanism that requires periodic refreshes.
*   It has a **two-phase operation** (PATH and RESV messages).
*   It defines **reservation styles** (FF, DF, WF) for resource allocation.
*   RSVP itself doesn't **perform** QoS, it signals to the network elements (like routers) to *perform* QoS using mechanisms like **IntServ (Integrated Services)**.

---

### 3. Real-time Transport Protocol (RTP)

**Learning Outcome:** Understand the role and functionalities of RTP in providing real-time data transmission and its relationship with RSVP.

**Key Concepts:**

*   **Real-time Data Transport:** RTP is an **application-layer protocol** designed to transmit real-time data such as audio and video over IP networks.
*   **Payload Type Agnostic:** RTP can carry various types of real-time data payloads, such as audio codecs (G.711, G.729) or video codecs (H.264).
*   **Companion Protocol: RTCP (RTP Control Protocol):** RTP is almost always used with RTCP. RTCP provides out-of-band control information for an RTP session, including synchronization, QoS feedback, and participant identification.
*   **UDP as Transport Layer:** RTP typically runs over UDP, which is a connectionless and unreliable transport protocol. UDP's overhead is lower than TCP, making it suitable for real-time applications where occasional packet loss is acceptable, but retransmissions would introduce unacceptable delays.

**RTP Packet Structure:**

| Bit 0-0   | Bit 1     | Bit 2-3   | Bit 4-7     | Bit 8-15       | Bit 16-31        |
| :-------- | :-------- | :-------- | :---------- | :------------- | :--------------- |
| Version   | P (Padding) | X (Ext.)  | CC (CSRCs)  | M (Marker)     | PT (Payload Type)|
| Sequence Number                            |
| Timestamp                                  |
| Synchronization Source (SSRC) Identifier                   |
| Contributing Source (CSRC) Identifiers (if CC > 0) |
| Payload                                    |
| Padding (if P = 1)                         |

*   **Version (V):** Identifies the version of the RTP protocol (currently 2).
*   **P (Padding):** If set, the last byte of the packet contains the number of padding bytes.
*   **X (Extension):** If set, the fixed header is followed by an extension header.
*   **CC (CSRC Count):** Indicates the number of CSRCs present in the header.
*   **M (Marker):** Used by higher-level protocols to mark significant events (e.g., the end of a voice utterance).
*   **PT (Payload Type):** Identifies the payload format (e.g., codec).
*   **Sequence Number:** Incremented for each RTP data packet sent. Detects packet loss and reordering.
*   **Timestamp:** The time of packet generation, sampled at a fixed rate. Used for playout synchronization and jitter calculation.
*   **SSRC (Synchronization Source):** A unique identifier for the source of an RTP stream.
*   **CSRC (Contributing Source):** Identifiers for sources that have contributed to this packet (e.g., in a mixing scenario).
*   **Payload:** The actual application data (audio, video).

**RTCP Functions:**

*   **QoS Feedback:** Receivers send RTCP Receiver Reports (RR) back to senders to report on packet loss, jitter, and round-trip delay. This feedback can be used to adapt the transmission rate or codec.
*   **Synchronization:** RTCP can synchronize multiple media streams (e.g., audio and video) using the timestamps.
*   **Participant Identification:** RTCP provides information about participants in an RTP session (e.g., sender reports).
*   **Session Control:** Allows for joining and leaving RTP sessions.

**RTP and RSVP Relationship:**

*   **RSVP sets up the network path with QoS guarantees.** It tells routers to reserve resources and prioritize certain traffic.
*   **RTP carries the actual real-time data.** The RTP packets are then treated according to the QoS established by RSVP.
*   RTP relies on RSVP (or other QoS mechanisms) to ensure its data packets arrive with acceptable quality. Without RSVP, RTP packets would be treated as best-effort traffic.
*   RTCP feedback from RTP can indirectly influence RSVP signaling or other dynamic QoS adjustments.

**Example:**

1.  A VoIP application at **User A** wants to send audio to **User B**.
2.  **User A's application** uses **RSVP** to request a certain bandwidth and low latency for its audio flow to **User B**.
3.  **Routers along the path** honor the RSVP reservation and provide the guaranteed QoS.
4.  **User A's application** then uses **RTP** to encapsulate the audio data into packets and send them over UDP.
5.  These RTP packets are prioritized and forwarded by the routers according to the RSVP reservation.
6.  **User B's application** receives the RTP packets. It uses **RTCP** to provide feedback to **User A** about the quality of the received audio (e.g., packet loss, jitter). This feedback can help adjust the audio codec or inform the user about network conditions.

**Important Points to Remember about RTP:**

*   RTP is for **real-time data transport** (audio, video).
*   It typically runs over **UDP**.
*   It is always used with **RTCP** for control and feedback.
*   RTP packets contain **sequence numbers** and **timestamps** for ordering and synchronization.
*   RTP **relies on underlying QoS mechanisms like RSVP** to provide actual guarantees.

---

### 4. Comparison and Interaction

**RSVP vs. RTP:**

| Feature         | RSVP                                      | RTP                                        |
| :-------------- | :---------------------------------------- | :----------------------------------------- |
| **Layer**       | Network Layer (Layer 3) Signaling         | Application Layer (Layer 7) Data Transport |
| **Function**    | Establishes and maintains QoS reservations | Carries real-time data (audio, video)      |
| **Protocol**    | Signaling protocol                        | Data transport protocol                    |
| **Transport**   | Typically UDP                             | Typically UDP                              |
| **State**       | Maintains reservation states in routers   | No inherent QoS state management           |
| **Interaction** | Enables QoS for RTP traffic               | Relies on RSVP for QoS                     |

**How they work together:**

RSVP is the "control plane" that sets up the QoS path, and RTP is the "data plane" that carries the actual data over that QoS-enabled path.

**Limitations of RSVP/IntServ:**

*   **Scalability:** The soft state maintenance in every router for every flow can be resource-intensive and may not scale well in large networks with millions of flows.
*   **Router Complexity:** Routers need to maintain significant state information, increasing their processing load and memory requirements.

**Rise of Differentiated Services (DiffServ):**

Due to scalability issues with RSVP/IntServ, **Differentiated Services (DiffServ)** emerged as an alternative QoS architecture. DiffServ marks packets with a DSCP (Differentiated Services Code Point) at the network edge, and core routers provide QoS based on these markings without maintaining per-flow state. RTP packets can be marked with DSCP values by the application or edge routers to receive differentiated treatment in a DiffServ network.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of RSVP in supporting Quality of Service in computer networks?

**Answer:** RSVP is a signaling protocol used to establish and maintain end-to-end QoS reservations for data flows. It allows applications to request specific quality parameters like bandwidth, delay, and jitter from the network.

**Question 2:**

Explain the "soft state" mechanism used by RSVP. Why is it important?

**Answer:** The soft state mechanism means that reservation information is not permanent. Senders and receivers must periodically send refresh messages (PATH and RESV) to keep the reservation active. This is important for dynamic network conditions, allowing reservations to be automatically torn down if they are no longer needed or if a sender fails.

**Question 3:**

Differentiate between RSVP's Fixed Filter (FF) and Dynamic Filter (DF) reservation styles. Provide an example scenario for each.

**Answer:**
*   **Fixed Filter (FF):** Allocates a specific amount of resources to a single sender for a session.
    *   *Example:* A dedicated voice channel for a specific user in a call where each participant has a guaranteed separate connection.
*   **Dynamic Filter (DF):** Allocates resources to a flow from any sender within a group, allowing shared resources.
    *   *Example:* A multicast video conference where multiple participants are receiving the stream, and the allocated bandwidth is shared among all active receivers for that stream.

**Question 4:**

What is the role of RTCP in an RTP session?

**Answer:** RTCP is the control protocol that complements RTP. Its roles include providing QoS feedback (packet loss, jitter, delay), synchronizing multiple media streams, and identifying participants in an RTP session.

**Question 5:**

Explain why RTP typically runs over UDP rather than TCP.

**Answer:** RTP typically runs over UDP because UDP is a connectionless and lightweight protocol. For real-time applications like voice and video, occasional packet loss is often preferable to the delay introduced by TCP's retransmission mechanisms and connection establishment overhead.

**Question 6:**

How do RSVP and RTP typically interact to achieve QoS for real-time applications?

**Answer:** RSVP establishes the QoS-enabled path by signaling to routers to reserve resources. RTP then carries the actual real-time data (audio/video) packets over this path, and these packets are treated by the network according to the QoS parameters set by RSVP.

---

### 6. Important Points to Remember

*   **QoS:** Essential for real-time applications, focusing on bandwidth, latency, jitter, and packet loss.
*   **RSVP:** A signaling protocol for **end-to-end QoS reservation**. It uses a **soft state** and a **two-phase (PATH/RESV)** mechanism. It's the "control plane" for QoS.
*   **RTP:** An **application-layer protocol** for **real-time data transport** (audio/video). It runs over UDP and relies on RTCP for control. It's the "data plane" carrying the actual traffic.
*   **RTCP:** The **control protocol for RTP**, providing feedback, synchronization, and participant identification.
*   **RSVP and RTP Synergy:** RSVP *enables* the quality for RTP traffic by setting up the network path with QoS guarantees.
*   **Scalability Concerns:** RSVP/IntServ faced scalability challenges, leading to the development of DiffServ.
*   **Underlying Mechanisms:** RSVP signals for QoS, but the actual QoS provisioning (like bandwidth allocation or queuing) is performed by routers using mechanisms often associated with the **Integrated Services (IntServ)** model.

---
---
