---
title: "Multicast Routing Protocols."
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c937"
status: "completed"
scrapedAt: "2026-05-20T17:02:49.784Z"
---
# Computer Networks: Module 3 - Network Layer: Multicast Routing Protocols

---

## Learning Outcomes Covered:

*   Understanding the need for multicast routing.
*   Familiarity with different multicast routing protocols.
*   Knowledge of the fundamental principles behind multicast routing.
*   Ability to differentiate between various multicast routing approaches.
*   Awareness of the challenges and complexities of multicast routing.

---

## 1. Introduction to Multicast

### 1.1 What is Multicast?

*   **Definition:** Multicast is a network communication method that allows a single sender to transmit data to a group of specific receivers simultaneously.
*   **Contrast with Unicast:** Unicast sends data from one sender to one receiver.
*   **Contrast with Broadcast:** Broadcast sends data from one sender to all receivers on a network segment.
*   **Efficiency:** Multicast is highly efficient for one-to-many or many-to-many communication, as it avoids sending duplicate copies of the same packet.

### 1.2 Need for Multicast Routing

*   **Bandwidth Saving:** Significantly reduces network bandwidth consumption compared to unicast for group communication. Imagine sending a video conference to 100 people – unicast would send 100 copies, multicast only one (or a few, along the optimal paths).
*   **Reduced Server Load:** The source doesn't need to manage individual connections to each receiver.
*   **Scalability:** Enables scalable deployment of applications like:
    *   Video conferencing and streaming
    *   Online gaming
    *   Stock ticker services
    *   Software distribution
    *   Voice over IP (VoIP) conferencing

### 1.3 Key Concepts in Multicast Routing

*   **Multicast Group:** A logical group of hosts that have joined a multicast session. Hosts can join or leave groups dynamically.
*   **Multicast Address:** A specific IP address range (Class D: 224.0.0.0 to 239.255.255.255) used to identify a multicast group.
*   **Multicast Source:** The host sending data to a multicast group.
*   **Multicast Receiver:** A host that has joined a multicast group and is listening for data.
*   **Multicast Tree:** A tree structure formed by routers to deliver multicast packets efficiently from the source(s) to all members of a group.

---

## 2. Multicast Routing Approaches

Multicast routing protocols primarily focus on how to build and maintain these multicast trees. They can be broadly categorized into two main types:

### 2.1 Tree-Based Multicast Routing

This approach builds a single distribution tree for each source and group pair (or for a group across all sources).

#### 2.1.1 Dense Mode Protocols

*   **Principle:** Assume that for any multicast group, there are receivers everywhere. They flood multicast traffic throughout the network and then prune branches that do not lead to any receivers.
*   **Mechanism:** Uses explicit **Join** and **Prune** messages.
*   **Pros:** Simple to implement, quick to establish distribution paths.
*   **Cons:** Can be inefficient in sparse-mode networks (where receivers are scattered) due to initial flooding.
*   **Key Protocols:**
    *   **DVMRP (Distance Vector Multicast Routing Protocol):**
        *   **Description:** An early multicast routing protocol that uses a distance-vector approach to build and maintain multicast distribution trees.
        *   **How it works:** Routers maintain a table of the best next-hop router for each multicast group. They flood multicast datagrams and then use Prune messages to eliminate unnecessary branches.
        *   **Tree Type:** Source-Specific Trees (SST) or Shared Trees. DVMRP typically uses Source-Specific Trees.
        *   **Example:** If Router A receives a multicast packet and it has no downstream receivers for that group, it sends a Prune message back to the upstream router.
    *   **PIM-DM (Protocol Independent Multicast - Dense Mode):**
        *   **Description:** A protocol that can run on top of any unicast routing protocol (hence "protocol independent"). It also floods and prunes.
        *   **How it works:** Routers form a "zero-density" assumption. They flood multicast traffic into a network. If a router receives traffic for a group it doesn't have receivers for, it sends a Prune message back to the source. To maintain connectivity, routers periodically send Join messages to ensure their branches are not pruned prematurely.
        *   **Tree Type:** Source-Specific Trees (SST).
        *   **Key Feature:** Uses a **Graft** message to quickly add a branch back into the distribution tree if a new receiver joins.
        *   **Example:** A router receiving a flood of multicast packets for a group. If it has no local receivers for that group, it sends a Prune message upstream. However, if a receiver joins that branch, the router sends a Graft message to the upstream router to re-establish the path.

#### 2.1.2 Sparse Mode Protocols

*   **Principle:** Assume that receivers are scattered and not present everywhere. They only send multicast traffic on specific paths where receivers have explicitly requested it.
*   **Mechanism:** Uses **Join** messages to explicitly signal the desire to receive multicast traffic.
*   **Pros:** More efficient in sparse networks.
*   **Cons:** Can have higher initial setup delay, more complex state management.
*   **Key Protocols:**
    *   **CBT (Core-Based Trees):**
        *   **Description:** Builds a single shared distribution tree for each multicast group, with a designated "core" router.
        *   **How it works:** All receivers send explicit Join messages towards the core. The core then forwards multicast traffic to the group members.
        *   **Tree Type:** Shared Tree.
        *   **Pros:** Simpler state management than PIM-SM (as only one tree per group).
        *   **Cons:** The core can become a bottleneck.
    *   **PIM-SM (Protocol Independent Multicast - Sparse Mode):**
        *   **Description:** The most widely used multicast routing protocol today. It can build both shared trees and source-specific trees.
        *   **How it works:**
            1.  **Receiver Joins:** Receivers send **Join** messages to a **Rendezvous Point (RP)** router.
            2.  **RP Receives:** The RP builds a shared tree towards the receivers.
            3.  **Source Sends:** When a source starts sending, it sends traffic to the RP (often using unicast initially until it learns the multicast distribution path).
            4.  **RP Forwards:** The RP forwards the multicast traffic down the shared tree.
            5.  **Source-Specific Tree Formation (Optional but common):** As receivers receive traffic, they can send **Join** messages directly towards the source, eventually leading to the formation of an optimal Source-Specific Tree (SST). This is often preferred for performance.
        *   **Tree Type:** Initially a Shared Tree, then optionally transitions to Source-Specific Trees (SST).
        *   **Key Components:**
            *   **Rendezvous Point (RP):** A central router that acts as an initial meeting point for sources and receivers.
            *   **RP Discovery:** Routers need to know which router is the RP for a given group. This can be done statically or dynamically using protocols like **Auto-RP** or **BSR (Bootstrap Router)**.
            *   **Join Messages:** Sent by receivers to the RP.
            *   **Register Messages:** Sent by the first router to receive traffic from a new source to the RP.
            *   **Encapsulation:** Register messages encapsulate multicast packets within unicast IP packets.
        *   **Example:**
            *   A video conference starts. Receivers join a multicast group. Their routers send Join messages to the designated RP.
            *   The first router sending the video data to the group sends its data via a Register message to the RP.
            *   The RP then forwards the video traffic down the shared tree to all joined receivers.
            *   Later, receivers might send explicit joins towards the actual video source to establish a more direct, source-specific path.

### 2.2 Other Multicast Routing Concepts

*   **MOSPF (Multicast Open Shortest Path First):** An extension of OSPF that supports multicast routing. It maintains per-group state and builds multicast trees based on OSPF's link-state information. Less common in practice now.
*   **MBONE (Multicast Backbone):** An experimental network built on top of the existing IP infrastructure (using IP tunneling) to deliver multicast traffic across the internet before native multicast support was widespread. Still relevant for understanding the history and evolution.

---

## 3. Multicast Routing Protocols in Practice

### 3.1 Rendezvous Point (RP) Management in PIM-SM

*   **Static RP Configuration:** Manually configuring RP addresses on all routers. Simple but not scalable.
*   **Auto-RP:** A Cisco proprietary protocol where specific routers advertise themselves as RPs for certain groups.
*   **BSR (Bootstrap Router):** An IETF standard protocol where routers elect a BSR, which then collects RP information and disseminates it to the rest of the network.

### 3.2 Building Source-Specific Trees (SSTs) in PIM-SM

*   **Process:**
    1.  A receiver's first multicast packet arrives from the shared tree.
    2.  The router connected to the receiver checks its unicast routing table for the shortest path back to the source.
    3.  It sends a **Join** message towards the source.
    4.  As the Join message travels upstream, routers along the path create the multicast forwarding state for the SST.
    5.  Once the SST is established, multicast traffic flows directly from the source to the receiver along the SST, bypassing the RP.
*   **Benefit:** Optimal path and reduced load on the RP.

### 3.3 Challenges in Multicast Routing

*   **State Management:** Routers need to maintain state for each multicast group and source, which can be memory-intensive.
*   **Complexity:** The algorithms and message exchanges are more complex than unicast routing.
*   **Firewall Traversal:** Multicast traffic often uses UDP, which can be problematic for stateful firewalls. Specific firewall configurations are needed.
*   **Security:** Ensuring only authorized sources can send to groups and preventing denial-of-service attacks on multicast streams.
*   **Deployment:** Requires widespread support across routers and network infrastructure.

---

## 4. Practice Questions and Answers

**Question 1:** What is the primary advantage of using multicast over unicast for group communication?
    *   A) Lower latency
    *   B) Reduced bandwidth consumption
    *   C) Simpler protocol design
    *   D) Increased security

**Answer:** B) Reduced bandwidth consumption. Multicast sends only one copy of a packet to multiple destinations, unlike unicast which sends a separate copy to each destination.

---

**Question 2:** Which type of multicast routing protocol assumes receivers are present everywhere and floods traffic initially?
    *   A) Sparse Mode Protocols
    *   B) Dense Mode Protocols
    *   C) Core-Based Trees
    *   D) Source-Specific Trees

**Answer:** B) Dense Mode Protocols. Protocols like PIM-DM and DVMRP operate on the dense mode assumption, flooding traffic and then pruning unnecessary branches.

---

**Question 3:** In PIM-SM, what is the role of the Rendezvous Point (RP)?
    *   A) To act as the ultimate source of multicast data.
    *   B) To discover new multicast receivers.
    *   C) To serve as an initial meeting point for sources and receivers to build distribution trees.
    *   D) To manage unicast routing tables for multicast data.

**Answer:** C) To serve as an initial meeting point for sources and receivers to build distribution trees. Receivers join towards the RP, and sources send initial traffic to the RP.

---

**Question 4:** Explain the difference between a shared tree and a source-specific tree in the context of multicast routing.

**Answer:**
*   **Shared Tree:** A single distribution tree for a multicast group that can be used by multiple sources. All receivers for a given group share the same tree structure. The core-based approach (CBT) and the initial PIM-SM approach (using the RP) create shared trees.
*   **Source-Specific Tree (SST):** A dedicated distribution tree for each specific source-receiver pair (or group of receivers from a specific source). This allows for more optimal paths from the source to the receivers, as it doesn't necessarily go through an RP. PIM-SM can transition from a shared tree to SSTs for better efficiency.

---

**Question 5:** What message does a router send back to an upstream router to indicate that a particular branch of the multicast distribution tree is no longer needed because there are no receivers down that path?
    *   A) Join
    *   B) Graft
    *   C) Prune
    *   D) Register

**Answer:** C) Prune. The Prune message is used to remove branches from the multicast distribution tree when no receivers are present.

---

## 5. Important Points to Remember

*   **Multicast is for efficiency:** Key for one-to-many communication.
*   **Class D IP addresses:** Used for multicast group identification.
*   **Dense vs. Sparse:** Crucial distinction for protocol behavior. Dense floods, Sparse explicitly joins.
*   **PIM is dominant:** PIM-DM and PIM-SM are the most common protocols.
*   **RP in PIM-SM:** Essential for shared tree formation and can be managed statically or dynamically.
*   **SSTs improve PIM-SM:** Offer better paths by going directly from source to receiver.
*   **State management is a challenge:** Routers need to track active multicast sessions.
*   **Grafting:** A mechanism in dense-mode protocols to quickly re-establish a pruned branch.

---
