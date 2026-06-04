---
title: "Virtual Circuit networks"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c921"
status: "completed"
scrapedAt: "2026-05-20T17:02:35.936Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Virtual Circuit Networks

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   Understand the concept of a virtual circuit.
*   Differentiate between virtual circuit networks and datagram networks.
*   Explain the three phases of virtual circuit operation: setup, data transfer, and teardown.
*   Identify the advantages and disadvantages of virtual circuit networks.
*   Recognize common examples of virtual circuit networks.

---

### 1. Understanding the Concept of a Virtual Circuit

A **virtual circuit (VC)** is a connection-oriented networking concept that provides a logical path between two endpoints in a network. Although data packets are transmitted independently, the network maintains state information for each virtual circuit, allowing for a more predictable and controlled communication flow.

*   **Analogy:** Imagine a dedicated phone call. Once the connection is established, all subsequent conversations flow along that established line, even if the underlying physical infrastructure might be shared with many other calls.

#### Key Concepts:

*   **Connection-Oriented:** Requires an explicit setup phase before data transfer begins.
*   **Logical Path:** A sequence of network nodes and links that data packets follow. It's not a physically dedicated wire but a configured route.
*   **State Information:** The network maintains information about each active virtual circuit, such as source, destination, and the path taken.
*   **Switching:** Network switches maintain entries in a **virtual circuit table** to identify incoming packets belonging to a specific VC.

---

### 2. Differentiating Virtual Circuit Networks from Datagram Networks

The primary distinction lies in how connection establishment and packet routing are handled.

| Feature           | Virtual Circuit Networks                                   | Datagram Networks                                            |
| :---------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| **Connection**    | Connection-oriented                                        | Connectionless                                               |
| **Setup Phase**   | Required (establishes a logical path)                      | Not required                                                 |
| **Packet Routing**| All packets follow the same pre-determined path            | Each packet is routed independently                          |
| **State**         | Network nodes maintain state for each VC                   | Network nodes do not maintain state for individual packets |
| **Addressing**    | Uses short virtual circuit identifiers (VCI) within the network | Uses full destination addresses for each packet              |
| **Guarantees**    | Can offer more guaranteed Quality of Service (QoS)         | Typically offers best-effort delivery                        |
| **Overhead**      | Higher initial overhead due to setup                       | Lower initial overhead, but potentially higher per-packet overhead |
| **Flexibility**   | Less flexible in adapting to network changes               | More flexible, as each packet can find an alternative route  |
| **Examples**      | ATM, Frame Relay                                           | IP (Internet Protocol)                                       |

**Example:**

*   **Virtual Circuit:** Sending a large file. You set up a VC, ensuring all parts of the file travel in order and with guaranteed bandwidth.
*   **Datagram:** Sending individual emails. Each email can take a different route, and there's no guarantee of arrival order or speed.

---

### 3. Explaining the Three Phases of Virtual Circuit Operation

Virtual circuit networks typically involve three distinct phases:

#### 3.1. Phase 1: Virtual Circuit Setup

*   **Purpose:** To establish a logical path between the source and destination and to allocate resources (if applicable).
*   **Process:**
    1.  **Request:** The source sends a `SETUP` request to the network. This request typically contains the destination address.
    2.  **Path Determination:** Each intermediate switch receives the `SETUP` request. It consults its routing tables to determine the next hop and the local VCI to assign for this new circuit.
    3.  **Resource Allocation (Optional):** If the network supports QoS, resources like bandwidth or buffer space might be reserved along the determined path.
    4.  **Forwarding:** The `SETUP` request is forwarded to the next switch, with a new local VCI assigned.
    5.  **Confirmation:** Once the `SETUP` request reaches the destination, the destination sends a `CONNECT` acknowledgement back to the source, typically along the same path in reverse.
    6.  **VC Table Update:** Each switch along the path updates its virtual circuit table to map the incoming VCI to the outgoing VCI and the next hop.

*   **Key Elements:** `SETUP` message, `CONNECT` message, Virtual Circuit Table entries at each switch.

#### 3.2. Phase 2: Data Transfer

*   **Purpose:** To transmit user data packets across the established virtual circuit.
*   **Process:**
    1.  **Packet Encapsulation:** The source encapsulates user data into packets. Each packet is tagged with the VCI assigned during the setup phase.
    2.  **Switching:** When a switch receives a packet for a virtual circuit:
        *   It looks up the incoming VCI in its virtual circuit table.
        *   It retrieves the corresponding outgoing VCI and the next hop.
        *   It forwards the packet to the next hop with the new VCI.
    3.  **Ordered Delivery:** Because all packets for a given VC follow the same path, they are typically delivered in the order they were sent.

*   **Key Elements:** Data packets with VCIs, Virtual Circuit Table lookups.

#### 3.3. Phase 3: Virtual Circuit Teardown

*   **Purpose:** To release the resources and remove the state information associated with a virtual circuit.
*   **Process:**
    1.  **Request:** The source or destination sends a `RELEASE` or `TEARDOWN` message to the network.
    2.  **Path Traversal:** The `RELEASE` message traverses the virtual circuit path.
    3.  **State Removal:** Each switch along the path receives the `RELEASE` message and removes the corresponding entry from its virtual circuit table.
    4.  **Acknowledgement (Optional):** An acknowledgement might be sent back to the originator to confirm the teardown.

*   **Key Elements:** `RELEASE` message, removal of VC table entries.

---

### 4. Identifying Advantages and Disadvantages of Virtual Circuit Networks

#### 4.1. Advantages:

*   **Ordered Delivery:** Packets are guaranteed to arrive in the order they were sent, simplifying application development.
*   **QoS Support:** Facilitates the implementation of Quality of Service (QoS) guarantees, such as bandwidth reservation, delay bounds, and jitter control.
*   **Flow Control and Error Control:** Can integrate flow and error control mechanisms more easily at the network layer.
*   **Efficient Switching:** Once the VC is established, switching is fast as it only involves looking up a VCI and forwarding.
*   **Simpler Addressing:** Internal network routing uses shorter VCIs instead of full destination addresses, reducing overhead.

#### 4.2. Disadvantages:

*   **Initial Setup Overhead:** The setup phase requires extra signaling messages, increasing initial latency.
*   **Resource Overhead:** Maintaining state information in each switch consumes memory and processing power.
*   **Less Flexibility:** If a link in a VC fails, the entire VC must be re-established, unlike datagram networks where packets can be rerouted.
*   **Single Point of Failure:** A failure in the setup phase or a switch failure can disrupt the entire VC.
*   **Not Ideal for Bursty Traffic:** The overhead of establishing and tearing down VCs can be inefficient for very short or bursty data transmissions.

---

### 5. Recognizing Common Examples of Virtual Circuit Networks

*   **ATM (Asynchronous Transfer Mode):** A widely deployed network technology that uses fixed-size cells and virtual circuits for high-speed data, voice, and video.
*   **Frame Relay:** A cost-effective WAN technology that uses virtual circuits (Permanent Virtual Circuits - PVCs and Switched Virtual Circuits - SVCs) to connect geographically dispersed locations.
*   **X.25:** An older packet-switched network protocol that heavily relies on virtual circuits for reliable data communication.

---

### 6. Important Points to Remember

*   **Virtual Circuits are logical connections**, not physically dedicated lines.
*   **Connection-oriented** is the defining characteristic.
*   The **three phases (Setup, Data Transfer, Teardown)** are crucial to understanding VC operation.
*   **Virtual Circuit Tables** in switches are essential for forwarding.
*   VC networks are good for **guaranteed QoS** but have higher **initial overhead**.
*   **ATM and Frame Relay** are classic examples.

---

### Practice Questions and Exercises

**Question 1:**

What are the three distinct phases of operation in a virtual circuit network? Briefly describe the purpose of each phase.

**Answer:**

The three phases are:
1.  **Setup:** To establish a logical path and allocate resources.
2.  **Data Transfer:** To transmit user data packets along the established path.
3.  **Teardown:** To release resources and remove the virtual circuit state.

---

**Question 2:**

Explain how a packet is forwarded through a network in a virtual circuit system. What information is used at each switch?

**Answer:**

When a switch receives a packet for a virtual circuit, it uses the **Virtual Circuit Identifier (VCI)** present in the packet. It looks up this VCI in its **virtual circuit table** to find the corresponding **outgoing VCI** and the **next hop**. The packet is then forwarded to the next hop with the new VCI.

---

**Question 3:**

Compare and contrast virtual circuit networks with datagram networks regarding packet routing and state maintenance.

**Answer:**

*   **Packet Routing:** In VC networks, all packets for a given VC follow a pre-determined path established during the setup phase. In datagram networks, each packet is routed independently based on its destination address, and packets may take different paths.
*   **State Maintenance:** VC networks require intermediate switches to maintain state information for each active VC. Datagram networks are stateless at the network layer; switches only process individual packets without remembering past ones.

---

**Question 4:**

List two advantages and two disadvantages of using virtual circuit networks.

**Answer:**

**Advantages:**
*   Ordered delivery of packets.
*   Support for Quality of Service (QoS) guarantees.

**Disadvantages:**
*   Higher initial setup latency.
*   Less flexible in adapting to network link failures.

---

**Question 5:**

If a network switch fails in a virtual circuit network, what is the likely impact on ongoing communications?

**Answer:**

If a switch fails on the path of an active virtual circuit, that entire virtual circuit will likely be disrupted. The communication will stop until a new virtual circuit is established. This highlights the vulnerability of VC networks to switch failures.

---
