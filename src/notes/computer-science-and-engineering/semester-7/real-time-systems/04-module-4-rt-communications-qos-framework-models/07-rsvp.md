---
title: "RSVP"
subject: "REAL TIME SYSTEMS"
module: "Module 4: RT communications: QoS framework, models"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c335"
status: "completed"
scrapedAt: "2026-05-20T17:10:26.622Z"
---
# Real-Time Systems: Module 4 - RT Communications: QoS Framework, Models - RSVP

## Introduction to RSVP

**Resource reSerVation Protocol (RSVP)** is a signaling protocol used for establishing quality of service (QoS) parameters on network paths. It is designed to reserve resources along a data path to support flow-based QoS. RSVP is an integral part of the Integrated Services (IntServ) model for QoS in IP networks.

---

## Learning Outcomes Covered

This document will cover the following learning outcomes:

*   **Understanding RSVP's Role in QoS:** How RSVP fits into the broader QoS framework and its purpose in guaranteeing performance for real-time applications.
*   **RSVP Message Types:** Detailed explanation of the different message types used by RSVP and their functions.
*   **RSVP Operation and Flow Establishment:** Step-by-step breakdown of how RSVP establishes and maintains QoS reservations for data flows.
*   **RSVP States:** Understanding the states maintained by RSVP-aware nodes along a path.
*   **RSVP and Routing:** How RSVP interacts with underlying routing protocols.
*   **RSVP Variants and Extensions:** Brief overview of common RSVP variants and extensions.
*   **Advantages and Disadvantages of RSVP:** A balanced perspective on RSVP's strengths and weaknesses.

---

## 1. RSVP's Role in QoS

RSVP is a key signaling protocol for **guaranteed or controlled-service QoS** in IP networks. It aims to provide end-to-end QoS by allowing applications to request specific levels of service for their data flows.

**Key Concepts:**

*   **Quality of Service (QoS):** The ability of a network to provide different levels of service to different network applications. This can include metrics like bandwidth, delay, jitter, and packet loss.
*   **Integrated Services (IntServ):** A QoS model that provides per-flow QoS guarantees by reserving resources along the entire path. RSVP is the signaling protocol for IntServ.
*   **Resource Reservation:** The process of allocating network resources (like buffer space and bandwidth) to specific data flows to meet their QoS requirements.
*   **Signaling Protocol:** A protocol used to establish, maintain, and tear down communication sessions and their associated QoS parameters.

**How RSVP fits into the QoS framework:**

*   RSVP operates alongside packet forwarding. It doesn't forward data packets itself; instead, it signals to routers along the path to reserve resources for a particular data flow.
*   It works in conjunction with a **classifier** (which identifies which packets belong to a specific flow) and a **scheduler** (which enforces the reserved QoS).
*   RSVP is **receiver-oriented**: the receiver initiates the reservation request. This is a key difference from other signaling protocols.

**Example:**

Imagine a video conferencing application that needs a guaranteed bandwidth of 5 Mbps and a maximum delay of 100ms. RSVP messages would be sent by the receiver to the sender, signaling to each router along the path to reserve these resources for the video stream.

---

## 2. RSVP Message Types

RSVP uses several distinct message types to manage reservations.

**Key Concepts:**

*   **Flow Specification (Tspec):** Describes the traffic characteristics of a flow, including its rate, burstiness, and packet size.
*   **Resource Specification (Rspec):** Describes the desired QoS parameters, such as bandwidth and delay.
*   **Session:** A logical connection for a particular data flow, defined by a destination address, protocol, and destination port.

**RSVP Message Types:**

*   **PATH Message:**
    *   **Purpose:** Sent by the sender to establish a soft state in the network for a particular session. It is sent periodically to maintain the reservation.
    *   **Function:** It travels from the sender to the receiver, propagating downstream. Each RSVP-aware router along the path records the sender's address and forwards the message.
    *   **State Created:** Creates **PATH state** in each RSVP-aware router, which stores the sender's address and the outgoing interface.
    *   **Example:** A sender's application initiating a call might send a PATH message to the receiver.

*   **RESV Message:**
    *   **Purpose:** Sent by the receiver back to the sender along the path established by the PATH message. It requests resources for the session.
    *   **Function:** It travels upstream from the receiver to the sender. Each RSVP-aware router receives the RESV message, checks if it can satisfy the requested QoS, and if so, makes a reservation and forwards the message to the previous hop (towards the sender).
    *   **State Created:** Creates **RSVP session state** in each RSVP-aware router, which includes the flow specification (Tspec) and resource specification (Rspec), and marks the reservation for the specific sender.
    *   **Example:** The receiver of the video conference call sends a RESV message to request the reserved bandwidth and delay.

*   **PATH_ERR Message:**
    *   **Purpose:** Sent by a router to the sender if a PATH message cannot be processed or if there's an error along the path.
    *   **Function:** Propagates upstream towards the sender.
    *   **Example:** If a router along the path is not RSVP-aware or doesn't have sufficient resources to even propagate the PATH message.

*   **RESV_ERR Message:**
    *   **Purpose:** Sent by a router to the receiver if a RESV message cannot be processed or if a reservation fails at that hop.
    *   **Function:** Propagates downstream towards the receiver.
    *   **Example:** If a router can't fulfill the requested bandwidth for the RESV message.

*   **PATH_TEAR Message:**
    *   **Purpose:** Sent by the sender to explicitly tear down an established reservation.
    *   **Function:** Propagates downstream along the path. It removes the PATH state and implicitly tears down any corresponding RESV state.

*   **RESV_TEAR Message:**
    *   **Purpose:** Sent by the receiver to explicitly tear down an established reservation.
    *   **Function:** Propagates upstream along the path. It removes the RESV state.

*   **ADSPEC Message:**
    *   **Purpose:** Carries information about the available QoS parameters (like guaranteed bandwidth, maximum delay) along the path.
    *   **Function:** Sent downstream with PATH messages. Receivers can use this information to adjust their reservation requests.

*   **ERROR Message:**
    *   **Purpose:** General error reporting.

**Important Point to Remember:** RSVP uses a **soft state** mechanism. This means that reservations are not permanent and must be refreshed periodically by sending new PATH and RESV messages. If a reservation is not refreshed within a certain timeout period, it is automatically torn down. This makes RSVP resilient to temporary network failures.

---

## 3. RSVP Operation and Flow Establishment

RSVP follows a two-phase process to establish and maintain reservations.

**Phase 1: Path Establishment (Sender to Receiver)**

1.  **Sender Initiates:** The sender's application, needing QoS, sends a **PATH message** to the receiver(s).
2.  **PATH Message Propagation:**
    *   The PATH message travels downstream towards the receiver.
    *   Each RSVP-aware router on the path:
        *   Records the sender's address and the outgoing interface in its **PATH state**.
        *   Forwards the PATH message to the next hop towards the receiver.
        *   **Important:** PATH messages are typically sent periodically to maintain the soft state.
3.  **Receiver Receives PATH:** The receiver gets the PATH message, potentially including **ADSPEC** information about the available QoS.

**Phase 2: Reservation Establishment (Receiver to Sender)**

1.  **Receiver Initiates Reservation:** The receiver's application decides to request QoS (e.g., based on the ADSPEC or application needs) and sends a **RESV message** back towards the sender.
2.  **RESV Message Propagation:**
    *   The RESV message travels upstream from the receiver to the sender.
    *   Each RSVP-aware router on the path:
        *   Examines the RESV message, which contains the desired **Tspec** and **Rspec**.
        *   Checks its local policies and available resources (e.g., buffer space, bandwidth for the corresponding traffic class) to see if it can satisfy the request.
        *   **If it can:**
            *   Configures its packet scheduler and classifier to provide the requested QoS for the flow originating from that sender.
            *   Creates **RSVP session state** which includes the Tspec, Rspec, and sender address.
            *   Forwards the RESV message to the previous hop (towards the sender).
        *   **If it cannot:**
            *   It may send a **RESV_ERR** message back to the receiver indicating the failure and potentially the reason. The reservation along this path is not established.
3.  **Sender Receives RESV:** If the RESV message successfully reaches the sender, the reservation is established.

**Maintaining the Reservation (Soft State)**

*   **Periodic Refresh:** Both PATH and RESV messages are sent periodically.
    *   The sender continues to send PATH messages to refresh the PATH state in routers.
    *   The receiver continues to send RESV messages to refresh the RESV state (reservation) in routers.
*   **Timeout:** If a router doesn't receive a refreshing PATH or RESV message within a defined timeout period, it automatically tears down the corresponding state and the reservation.

**Tearing Down a Reservation:**

*   An application can explicitly request to stop the reservation by sending a **PATH_TEAR** message (sender) or **RESV_TEAR** message (receiver). These messages propagate along the path and remove the RSVP state.

---

## 4. RSVP States

RSVP-aware routers maintain crucial state information to manage reservations.

**Key States:**

*   **PATH State:**
    *   **Stored in:** RSVP-aware routers along the data path from sender to receiver.
    *   **Information:**
        *   Sender's address.
        *   Outgoing interface (for the PATH message).
        *   [Optional] ADSPEC information.
        *   Timeouts for refreshing this state.
    *   **Purpose:** To enable RESV messages to be sent back to the correct sender and to maintain the path for data flow.

*   **RSVP Session State (RESV State):**
    *   **Stored in:** RSVP-aware routers where a reservation is made (along the path from receiver to sender).
    *   **Information:**
        *   Session identifier (destination, protocol, port).
        *   Sender Tspec (traffic characteristics).
        *   Sender Rspec (requested QoS).
        *   Sender address.
        *   Ingress interface (from which the PATH message arrived).
        *   Outgoing interface (towards the next hop towards the sender).
        *   Timeouts for refreshing this state.
    *   **Purpose:** To inform the packet scheduler/classifier about the required QoS parameters for the specific flow. This state is tied to the reservation.

**Soft State Mechanism:**

*   Both PATH and RSVP Session states are **soft states**. They are not permanent.
*   They are maintained by periodic refresh messages (PATH and RESV).
*   If refresh messages stop arriving, the states naturally expire and are removed, effectively tearing down the reservation. This is crucial for adapting to changing network conditions and application demands.

---

## 5. RSVP and Routing

RSVP relies on the underlying IP routing infrastructure to deliver its messages. However, it needs to interact with routing to ensure that reservations are made along the **actual data path**.

**Key Interactions:**

*   **PATH Message and Forwarding:** The PATH message follows the same path as IP data packets. Routers forward PATH messages based on their IP routing tables.
*   **RESV Message and Reverse Path:** The RESV message follows the **Reverse Path Forwarding (RPF)** principle. This means a router expecting a RESV message for a specific session will only accept it if it arrives on the interface that corresponds to the path from which it received the PATH message (or the reported reverse path).
    *   **How is the reverse path determined?**
        *   The PATH message typically carries information about the forward path.
        *   Routers can infer the reverse path from the source address of the PATH message and their own routing tables.
        *   Alternatively, some RSVP implementations can explicitly carry reverse path information in the PATH message.
*   **Routing Changes:** If the IP routing table changes (e.g., due to a routing protocol update), the data path might change. RSVP needs to adapt.
    *   When a router detects a change in the next hop for a particular destination in its routing table, it needs to update its RSVP state accordingly.
    *   If a reservation is established on an old path that is no longer used by data, it will naturally expire due to lack of PATH refreshes along that path. New reservations will be established on the new data path.
*   **No Route:** If there's no route to the sender or receiver, RSVP cannot establish a reservation.

**Example:**

If a router's routing table indicates that traffic for destination X should be forwarded out interface G, it will forward the PATH message out G. When it receives a RESV message for a session originating from X, it will expect it on the interface from which it received the PATH message or via RPF. If the routing table changes and traffic for X now goes out interface H, subsequent PATH messages will follow H, and RESV messages will be expected back along that new reverse path.

---

## 6. RSVP Variants and Extensions

RSVP has been extended and adapted to address various network scenarios and requirements.

**Key Variants/Extensions:**

*   **RSVP-TE (RSVP - Traffic Engineering):**
    *   **Purpose:** Extends RSVP to support the establishment of **explicitly routed paths** and **Label Switched Paths (LSPs)** in MPLS networks.
    *   **Key Features:**
        *   **Explicit Routing:** Allows administrators to specify the exact sequence of hops for a reservation.
        *   **Path Information:** PATH messages carry explicit route information.
        *   **Label Information:** RESV messages carry MPLS labels.
        *   **Management:** Primarily used for traffic engineering and controlling traffic flows in MPLS backbone networks.
    *   **Example:** MPLS networks use RSVP-TE to set up LSPs with guaranteed bandwidth for high-priority traffic.

*   **RSVP over ATM:** RSVP was adapted to signal QoS over ATM networks, which have their own QoS mechanisms.

*   **RSVP Extensions for Multicast:** RSVP can be used to establish multicast reservations, where a single reservation can be shared among multiple receivers for a multicast group.

*   **RSVP with IntServ and DiffServ:**
    *   While IntServ (using RSVP) provides per-flow guarantees, it scales poorly in large networks due to state overhead in routers.
    *   **Differentiated Services (DiffServ)** offers a more scalable approach using per-class QoS.
    *   **Bridging IntServ and DiffServ:** RSVP can be used to signal to DiffServ routers to configure specific forwarding behaviors (e.g., assign traffic to a particular class of service). This is sometimes referred to as "per-flow RSVP to per-class DiffServ mapping."

**Important Point to Remember:** RSVP's significant state overhead per flow makes it difficult to scale to very large networks. This has led to the adoption of DiffServ for large-scale QoS, with RSVP often used in smaller networks or as a signaling mechanism for specific traffic engineering or advanced QoS scenarios.

---

## 7. Advantages and Disadvantages of RSVP

**Advantages:**

*   **End-to-End QoS Guarantees:** Provides strong guarantees for applications that require specific performance levels (bandwidth, delay, jitter).
*   **Receiver-Initiated:** The receiver controls the reservation, allowing applications to request QoS only when needed.
*   **Soft State Mechanism:** Makes reservations dynamic and resilient to transient failures. Reservations are automatically torn down if not refreshed.
*   **Clear Separation of Signaling and Data:** RSVP signals for QoS, while IP handles data forwarding.
*   **Well-Defined Message Types:** Structured protocol with clear functions for each message.

**Disadvantages:**

*   **Scalability Issues:** Maintaining per-flow state in every RSVP-aware router can lead to significant memory and processing overhead, making it difficult to scale to large networks (e.g., the Internet).
*   **Router Complexity:** Requires RSVP-aware routers, which are more complex than standard IP routers.
*   **State Management Overhead:** The continuous exchange of PATH and RESV messages to maintain soft state consumes network resources.
*   **Dependence on Accurate Tspec/Rspec:** If applications specify incorrect traffic or resource requirements, QoS guarantees may not be met.
*   **Interaction with IP Routing:** While it follows IP paths, dynamic routing changes can sometimes lead to complexities in reservation management.

---

## Practice Questions and Answers

**Question 1:**
What is the primary function of the RSVP PATH message?
a) To request resources for a data flow.
b) To establish a soft state in the network for a session and signal the sender's address.
c) To tear down an existing reservation.
d) To report errors encountered during reservation setup.

**Answer 1:**
b) To establish a soft state in the network for a session and signal the sender's address.

---

**Question 2:**
Describe the "soft state" mechanism in RSVP and explain why it's important.

**Answer 2:**
The "soft state" mechanism in RSVP means that reservations are not permanent and must be periodically refreshed by sending new PATH and RESV messages. If these refresh messages are not received by a router within a defined timeout period, the router automatically tears down the corresponding RSVP state and the reservation.
This is important because:
*   **Adaptability:** It allows RSVP to adapt to dynamic changes in network conditions and application demands.
*   **Resilience:** It makes the reservation process resilient to temporary network failures. If a link or router goes down temporarily, the reservation will expire naturally, and a new one can be established once the network is back online.
*   **Resource Management:** It prevents the accumulation of stale reservations, freeing up resources when they are no longer needed.

---

**Question 3:**
A video conferencing application requires guaranteed bandwidth and low jitter. Which RSVP message would the receiver send back to the sender to request these QoS parameters?
a) PATH
b) PATH_ERR
c) RESV
d) RESV_TEAR

**Answer 3:**
c) RESV

---

**Question 4:**
How does RSVP interact with IP routing to ensure reservations are made along the correct data path?

**Answer 4:**
RSVP relies on IP routing to deliver its messages.
1.  **PATH messages** follow the same path as IP data packets, determined by the IP routing tables of the routers.
2.  **RESV messages** follow the reverse path. Routers expect RESV messages to arrive on the interface from which they received the PATH message or via Reverse Path Forwarding (RPF). This ensures that the reservation is associated with the correct sender and path.
When IP routing tables change, the data path might change. RSVP needs to adapt by:
*   Following the new path with subsequent PATH messages.
*   Accepting RESV messages on the new reverse path.
*   Old reservations on the now-unused path will naturally expire due to the soft state mechanism.

---

**Question 5:**
What is RSVP-TE primarily used for, and how does it differ from basic RSVP?

**Answer 5:**
RSVP-TE (RSVP - Traffic Engineering) is primarily used to establish explicitly routed paths and Label Switched Paths (LSPs) in MPLS networks.
It differs from basic RSVP in that:
*   **Explicit Routing:** RSVP-TE allows administrators to define the exact sequence of hops for a path, rather than relying on dynamic IP routing.
*   **MPLS Integration:** It carries MPLS label information in its messages to set up LSPs.
*   **Traffic Engineering Focus:** Its main goal is traffic engineering and controlling traffic flows in complex IP/MPLS networks for optimization and performance guarantees.

---

## Important Points to Remember Summary

*   **RSVP** is a signaling protocol for **IntServ** to provide **end-to-end QoS guarantees**.
*   It is **receiver-oriented**.
*   Key messages: **PATH** (sender to receiver, establishes path state) and **RESV** (receiver to sender, establishes reservation state).
*   Uses a **soft state** mechanism, requiring periodic refreshes.
*   Maintains **PATH state** (sender info) and **RSVP Session State** (reservation details).
*   Relies on **IP routing** for message delivery and uses **RPF** for RESV messages.
*   **Scalability** is a major concern due to per-flow state.
*   **RSVP-TE** is an extension for **traffic engineering** in **MPLS** networks with explicit routing.
*   RSVP provides strong guarantees but is complex and less scalable than DiffServ for very large networks.
