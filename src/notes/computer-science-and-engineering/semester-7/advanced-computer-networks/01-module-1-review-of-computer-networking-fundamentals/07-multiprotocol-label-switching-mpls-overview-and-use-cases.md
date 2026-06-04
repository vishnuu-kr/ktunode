---
title: "Multiprotocol Label Switching (MPLS): Overview and Use Cases"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c42f"
status: "completed"
scrapedAt: "2026-05-20T16:59:54.750Z"
---
# ADVANCED COMPUTER NETWORKS: Module 1 - Review of Computer Networking Fundamentals

## Topic: Multiprotocol Label Switching (MPLS): Overview and Use Cases

### 1. Learning Outcomes

*   **Understand the fundamental concepts of MPLS:** What it is, why it was developed, and its core principles.
*   **Identify the key components and terminology of MPLS:** Labels, Label Switching Routers (LSRs), Label Edge Routers (LERs), Label Switched Paths (LSPs), Label Distribution Protocol (LDP), etc.
*   **Explain how MPLS forwards traffic:** The data forwarding plane and control plane separation.
*   **Differentiate MPLS from traditional IP routing:** Advantages and disadvantages.
*   **Explore common use cases of MPLS:** VPNs, Traffic Engineering, QoS, etc.
*   **Understand the benefits MPLS offers over traditional IP networks.**

---

### 2. Introduction to MPLS

**What is MPLS?**

*   Multiprotocol Label Switching (MPLS) is a high-performance, scalable routing technique for telecommunications networks.
*   It directs data from one node to the next based on **short path labels** rather than long network addresses.
*   MPLS can use various transport protocols, such as IP, Ethernet, and ATM. The "Multiprotocol" in its name signifies this flexibility.
*   It is primarily used in the **core of service provider networks** to efficiently forward large volumes of traffic.

**Why was MPLS developed?**

*   **Scalability of IP Routing:** As IP networks grew, traditional hop-by-hop IP routing became computationally intensive, especially with complex routing tables.
*   **Performance:** MPLS aims to improve forwarding speed by using fixed-length labels instead of variable-length IP addresses for routing decisions.
*   **Traffic Engineering:** MPLS provides explicit control over the path that traffic takes through the network, enabling better resource utilization and performance optimization.
*   **Quality of Service (QoS):** MPLS allows for differentiated treatment of traffic based on its importance.
*   **Virtual Private Networks (VPNs):** MPLS is a foundational technology for building secure and efficient VPNs over a shared infrastructure.

---

### 3. Key Concepts and Terminology

**A. Labels:**

*   **Definition:** Short, fixed-length identifiers that are inserted into a packet header at the ingress edge of an MPLS network.
*   **Purpose:** Labels indicate the path a packet should take through the MPLS network. They are independent of the underlying network layer protocol (e.g., IP).
*   **Label Stack:** Multiple labels can be stacked, allowing for hierarchical routing and support for different services (e.g., VPN labels on top of LSP labels).
*   **Label Value:** Typically a numerical value.
*   **Label Binding:** A label is associated with a specific Forwarding Equivalence Class (FEC).

**B. Forwarding Equivalence Class (FEC):**

*   **Definition:** A group of packets that are treated the same way by the MPLS network with respect to forwarding and resource allocation.
*   **Examples:**
    *   All IP packets destined for a specific IP prefix.
    *   All packets belonging to a specific VPN.
    *   All packets requiring a specific QoS treatment.
*   **Significance:** MPLS routers make forwarding decisions based on FECs, and then assign a label to each FEC.

**C. Label Switching Routers (LSRs):**

*   **Definition:** Routers within the MPLS core that participate in label switching.
*   **Functionality:**
    *   Receive packets with MPLS labels.
    *   Examine the label.
    *   Perform a lookup in their **Label Information Base (LIB)**.
    *   Based on the lookup, swap the incoming label with a new outgoing label.
    *   Forward the packet to the next hop.
*   **Key Characteristic:** LSRs do not typically examine the network layer (e.g., IP) header for forwarding decisions once the label is present.

**D. Label Edge Routers (LERs):**

*   **Definition:** Routers at the edge of the MPLS network that are responsible for label assignment and removal.
*   **Ingress LER (In-LER):**
    *   Receives packets from non-MPLS networks (e.g., standard IP packets).
    *   Determines the FEC for the packet based on its network layer header.
    *   Performs a LIB lookup to find the appropriate label for that FEC.
    *   **Pushes** (adds) the label onto the packet.
    *   Forwards the labeled packet to the first LSR in the MPLS path.
*   **Egress LER (Out-LER):**
    *   Receives labeled packets from the MPLS core.
    *   **Pops** (removes) the label from the packet.
    *   Forwards the packet to its final destination on the non-MPLS network.

**E. Label Switched Path (LSP):**

*   **Definition:** A pre-determined, unidirectional path through the MPLS network along which labeled packets are forwarded.
*   **Establishment:** LSPs are typically established by a signaling protocol.
*   **Hop-by-Hop vs. Explicit Routing:** LSPs can be established hop-by-hop (default) or via explicit routing, where specific LSRs are designated for the path.
*   **Analogy:** Similar to a virtual circuit in ATM or Frame Relay.

**F. Label Distribution Protocol (LDP):**

*   **Definition:** A control plane protocol used by LSRs to dynamically establish LSPs by exchanging label mapping information.
*   **Functionality:**
    *   LSRs discover each other and establish LDP sessions.
    *   They exchange information about label bindings for specific FECs.
    *   LDP helps build the Label Information Base (LIB) on each LSR.
*   **Relationship with IP Routing:** LDP relies on an underlying IP routing protocol (e.g., OSPF, IS-IS) to discover next hops and establish reachability.

**G. Resource Reservation Protocol (RSVP):**

*   **Definition:** A signaling protocol often used in conjunction with MPLS for traffic engineering and QoS.
*   **MPLS-TE (Traffic Engineering):** RSVP-TE extends RSVP to allow for explicit path establishment and bandwidth reservation for LSPs.
*   **Functionality:** Used to signal path setup, bandwidth allocation, and potentially QoS parameters along an LSP.

---

### 4. How MPLS Forwards Traffic

MPLS separates the network into two planes: the **Control Plane** and the **Data Plane**.

**A. Control Plane:**

*   **Function:** Responsible for building and maintaining routing information and label mappings.
*   **Protocols:** Routing protocols (OSPF, IS-IS, BGP), Label Distribution Protocols (LDP), and Signaling Protocols (RSVP-TE).
*   **Outcome:** Populates the Label Information Base (LIB) on each LSR. The LIB contains mappings between FECs and labels.

**B. Data Plane:**

*   **Function:** Responsible for forwarding the actual data packets based on the information in the control plane.
*   **Process:**
    1.  **Ingress LER:**
        *   Receives a packet (e.g., IP packet).
        *   Determines the FEC.
        *   Looks up the FEC in its LIB to find the appropriate incoming label.
        *   **Pushes** a label onto the packet header.
        *   Forwards the labeled packet to the next hop, which is typically an LSR.
    2.  **LSRs in the Core:**
        *   Receive a labeled packet.
        *   Examine the label at the top of the stack.
        *   Lookup the label in its LIB to find the outgoing label and the next hop.
        *   **Swaps** the incoming label with the outgoing label.
        *   Forwards the packet to the next hop.
    3.  **Egress LER:**
        *   Receives the labeled packet.
        *   **Pops** the label.
        *   Forwards the packet to its final destination.

**Example of Label Swapping:**

Imagine a path: **LER1 (Ingress) -> LSR1 -> LSR2 -> LER2 (Egress)**

*   **LER1 (Ingress):** Receives an IP packet for destination X. FEC for X is assigned label L1. LER1 pushes L1. Packet: [L1] -> LSR1
*   **LSR1:** Receives packet with L1. Looks up L1 in its LIB. LIB says L1 maps to FEC Y, next hop is LSR2, outgoing label is L2. LSR1 swaps L1 with L2. Packet: [L2] -> LSR2
*   **LSR2:** Receives packet with L2. Looks up L2 in its LIB. LIB says L2 maps to FEC Z, next hop is LER2, outgoing label is L3. LSR2 swaps L2 with L3. Packet: [L3] -> LER2
*   **LER2 (Egress):** Receives packet with L3. Pops L3. Forwards the original IP packet to destination X.

---

### 5. MPLS vs. Traditional IP Routing

| Feature                | Traditional IP Routing                                   | MPLS                                                                  |
| :--------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Forwarding Decision**| Based on Layer 3 (IP address) lookup at each hop.        | Based on Layer 2.5 (Label) lookup at intermediate hops.               |
| **Processing Overhead**| High; requires examining IP header, ACLs, etc. at each hop. | Lower; faster lookup based on fixed-length labels.                  |
| **Path Control**       | Limited; relies on IP routing protocols to determine paths. | High; allows for explicit path control and traffic engineering.       |
| **VPN Support**        | Typically requires separate physical networks or complex overlay technologies. | Built-in support for efficient Layer 3 VPNs and Layer 2 VPNs.         |
| **QoS Support**        | Can be implemented, but often complex and less granular. | Enhanced QoS capabilities through traffic classes and label manipulation. |
| **Scalability**        | Can become a bottleneck in large core networks.          | Designed for scalability in core networks due to label switching.     |
| **Protocol Independence**| Network layer protocol dependent (primarily IP).         | Multiprotocol; can carry IP, Ethernet, ATM, etc.                      |
| **Complexity**         | Relatively simpler at the forwarding plane.              | More complex control plane due to label distribution and signaling.  |

---

### 6. Common Use Cases of MPLS

**A. MPLS VPNs:**

*   **Concept:** MPLS is a cornerstone for building scalable and secure VPNs, allowing service providers to offer private network services to customers over a shared infrastructure.
*   **Types:**
    *   **MPLS Layer 3 VPNs (RFC 4364):**
        *   Customers connect to the provider's network via PE (Provider Edge) routers.
        *   The provider uses **BGP** with **MP-BGP extensions** to exchange customer routes between PE routers.
        *   Each customer VPN is assigned a **Route Distinguisher (RD)** and a set of **Route Targets (RTs)** to segregate their routing information.
        *   Packets are labeled with an **inner label** (for the LSP) and an **outer label** (for the VPN).
        *   Benefits: Scalability, security, isolation between VPNs.
    *   **MPLS Layer 2 VPNs (e.g., VPLS, VPWS):**
        *   **VPWS (Virtual Private Wire Service):** Emulates a leased line between two customer sites over the MPLS network (point-to-point).
        *   **VPLS (Virtual Private LAN Service):** Emulates an Ethernet LAN over the MPLS network, allowing multiple customer sites to be connected as if they were on the same Ethernet segment (multipoint-to-multipoint).
*   **Example:** A company with multiple branches can connect them all securely using an MPLS VPN service offered by a telecom provider.

**B. MPLS Traffic Engineering (MPLS-TE):**

*   **Concept:** Enables explicit control over traffic paths to optimize network resource utilization, avoid congestion, and meet performance requirements (e.g., latency, bandwidth).
*   **How it works:**
    *   Uses protocols like **RSVP-TE** to establish LSPs with specific constraints (e.g., bandwidth, hop count, specific intermediate nodes).
    *   Allows for the creation of **detours** or **backup paths** for resilience.
    *   Can be used to load-balance traffic across multiple paths.
*   **Example:** A streaming service might use MPLS-TE to ensure its high-bandwidth video traffic takes a low-latency path through the network, avoiding congested links.

**C. Quality of Service (QoS) with MPLS:**

*   **Concept:** MPLS can prioritize and provide differentiated treatment to different types of traffic.
*   **Mechanisms:**
    *   **Expedited Forwarding (EF):** For time-sensitive traffic like voice and video. Guarantees low latency, low jitter, and low packet loss.
    *   **Assured Forwarding (AF):** For traffic that requires a certain level of service but not strict guarantees. Traffic is placed into different classes with different probabilities of dropping.
    *   **Class Selector (CS):** For backward compatibility with IP Precedence.
*   **Label Stack:** The QoS class can be indicated in the **Traffic Class (TC)** field of the MPLS label, allowing intermediate LSRs to make forwarding decisions based on QoS.
*   **Example:** A company might prioritize VoIP calls over email traffic using MPLS QoS, ensuring clear conversations even during periods of high network usage.

**D. Pseudowires:**

*   **Concept:** A pseudowire is a point-to-point connection that simulates a specific Layer 2 or Layer 3 service across an MPLS network.
*   **Purpose:** Used to carry traffic from older or non-IP protocols over an MPLS backbone, or to emulate specific services like ATM or Ethernet.
*   **Example:** Carrying legacy TDM (Time-Division Multiplexing) traffic over an MPLS network using techniques like Circuit Emulation Service over MPLS (CESoMPLS).

---

### 7. Benefits of MPLS

*   **High Performance:** Faster forwarding due to label switching.
*   **Scalability:** Reduces routing table size and complexity in the core.
*   **Traffic Engineering:** Explicit path control for optimization and resilience.
*   **Enhanced QoS:** Differentiated service for various traffic types.
*   **VPN Support:** Efficient and secure delivery of private network services.
*   **Protocol Independence:** Can carry various network layer protocols.
*   **Reduced Complexity in the Core:** LSRs perform simple label swaps, offloading complex IP lookups to edge devices.

---

### 8. Limitations of MPLS

*   **Complexity:** Requires specialized knowledge and configuration for control plane protocols (LDP, RSVP-TE).
*   **Cost:** MPLS-enabled hardware and expertise can be more expensive.
*   **Lack of End-to-End Visibility (in some cases):** The core network is treated as a "black hole" for packets once labeled.
*   **Interoperability:** Can be challenging to integrate with non-MPLS networks or older equipment.
*   **Transition:** Migrating from traditional IP to MPLS can be a complex undertaking.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a label in MPLS?
A. To identify the destination IP address.
B. To indicate the path a packet should take through the MPLS network.
C. To enforce security policies on packets.
D. To signify the Quality of Service level of a packet.

**Question 2:**
Which of the following protocols is responsible for establishing LSPs by exchanging label mappings?
A. BGP
B. OSPF
C. LDP
D. HTTP

**Question 3:**
An Ingress LER is responsible for which of the following actions?
A. Popping labels from incoming packets.
B. Swapping labels in the MPLS core.
C. Pushing labels onto packets and determining their FEC.
D. Maintaining the routing tables for the entire MPLS network.

**Question 4:**
Explain the difference between a Label Switched Path (LSP) and an IP route.

**Question 5:**
Describe how MPLS enables Layer 3 VPNs. Mention key components like RDs and RTs.

---

### 10. Answers to Practice Questions

**Answer 1:**
**B. To indicate the path a packet should take through the MPLS network.**
*Explanation:* Labels are used by MPLS routers to make forwarding decisions, guiding the packet along a pre-defined path (LSP).

**Answer 2:**
**C. LDP**
*Explanation:* LDP (Label Distribution Protocol) is the primary control plane protocol used to dynamically assign labels to FECs and establish LSPs.

**Answer 3:**
**C. Pushing labels onto packets and determining their FEC.**
*Explanation:* The Ingress LER is the entry point into the MPLS network. It examines non-MPLS packets, determines their Forwarding Equivalence Class (FEC), and pushes an appropriate MPLS label onto the packet before forwarding it into the MPLS core.

**Answer 4:**
*   **IP Route:** A path determined by a router based on destination IP addresses and routing tables (e.g., from OSPF, BGP). The decision is made hop-by-hop based on the IP header.
*   **MPLS LSP:** A pre-determined, unidirectional path established by a signaling protocol (like LDP or RSVP-TE). Once established, MPLS traffic follows this path based on label swapping, without the need for full IP header lookups at intermediate hops. LSPs offer more explicit control over the path taken.

**Answer 5:**
MPLS Layer 3 VPNs allow service providers to offer private network connectivity to multiple customers over a shared MPLS infrastructure.
*   **PE Routers:** Provider Edge routers connect customer sites to the MPLS network.
*   **Route Distinguisher (RD):** An RD is prepended to an IP prefix to make it globally unique across the provider's network. This allows different customers to use the same IP address space without conflict.
*   **Route Target (RT):** RTs are used as BGP extended communities to control the import and export of VPN routes between VRFs (Virtual Routing and Forwarding instances) on PE routers. When a PE router imports routes with a specific RT, they are added to the VRF. When it exports routes with an RT, it advertises them to other PE routers that are configured to import that RT.
*   **MP-BGP:** Multiprotocol BGP is used to carry the VPN-IPv4 (or VPN-IPv6) address family, including the RDs and RTs, between PE routers.
*   **Labeling:** VPN traffic is typically labeled with two labels: an outer label for the LSP to route the packet through the MPLS core, and an inner label that identifies the specific VPN the packet belongs to. This inner label is used by the egress PE router to direct the packet to the correct customer VRF.

---

### 9. Important Points to Remember

*   **MPLS is not a replacement for IP; it's an enhancement.** It leverages IP for reachability but uses labels for faster forwarding in the core.
*   The core of an MPLS network consists of **LSRs** that perform label swapping.
*   The edges of an MPLS network consist of **LERs** that push and pop labels.
*   **LDP** is crucial for dynamic label distribution.
*   **MPLS-TE** is vital for advanced traffic management and path control.
*   MPLS VPNs are a key application, offering secure and scalable private network services.
*   MPLS can improve **QoS** by enabling differentiated traffic treatment.
*   The **label stack** allows for multiple services or routing contexts on a single packet.
