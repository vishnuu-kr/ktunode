---
title: "Routing Protocols - RIP, OSPF, BGP"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c42c"
status: "completed"
scrapedAt: "2026-05-20T16:59:52.590Z"
---
# Advanced Computer Networks: Module 1 - Review of Computer Networking Fundamentals

## Topic: Routing Protocols - RIP, OSPF, BGP

### 1. Introduction to Routing Protocols

*   **Purpose:** Routing protocols are essential for discovering and maintaining the best paths for data packets to travel across a network. They enable routers to share information about network topology and available routes.
*   **Goal:** To ensure efficient and reliable delivery of data, even in the face of network changes (e.g., link failures, new routers).
*   **Key Functions:**
    *   **Discovering routes:** Learning about reachable networks.
    *   **Maintaining routing tables:** Keeping an up-to-date record of the best paths.
    *   **Responding to network changes:** Adapting to topology modifications.
*   **Classification of Routing Protocols:**
    *   **Interior Gateway Protocols (IGPs):** Used within an autonomous system (AS) – a collection of networks under a single administrative control.
        *   **Examples:** RIP, OSPF, EIGRP (Cisco proprietary).
    *   **Exterior Gateway Protocols (EGPs):** Used between autonomous systems.
        *   **Example:** BGP.

### 2. Distance-Vector Routing Protocols (e.g., RIP)

#### 2.1. Key Concepts and Definitions

*   **Distance Vector:** Routers exchange their entire routing tables with their directly connected neighbors. They rely on the "distance" (metric) and "vector" (direction/next-hop) information received from neighbors to build their own routing tables.
*   **Metric:** In RIP, the metric is **hop count**. The path with the fewest hops is considered the best.
*   **Convergence:** The process by which all routers in a network agree on the same routing information.
*   **Periodic Updates:** Routers send their entire routing tables to neighbors at regular intervals (e.g., every 30 seconds for RIP).
*   **"Routing by Rumor":** Routers don't have complete knowledge of the network topology; they rely on information passed down from their neighbors.

#### 2.2. Routing Information Protocol (RIP)

*   **Type:** Distance-vector IGP.
*   **Metric:** Hop count (maximum of 15 hops; 16 is considered infinite/unreachable).
*   **Update Mechanism:** Routers periodically broadcast their entire routing tables to their directly connected neighbors.
*   **Convergence Speed:** Relatively slow, especially in large or unstable networks.
*   **Advantages:**
    *   Simple to configure and understand.
    *   Low CPU and memory overhead.
*   **Disadvantages:**
    *   **Slow convergence:** Can take a long time to adapt to network changes.
    *   **Count-to-infinity problem:** Can occur in unstable networks where routing loops can form, leading to routes being advertised with ever-increasing hop counts.
    *   **Limited scalability:** Not suitable for large networks due to hop count limit and periodic full table updates.
    *   **Bandwidth consumption:** Periodic full table updates can consume significant bandwidth, especially in busy networks.
    *   **No support for VLSM (Variable Length Subnet Masking) in RIPv1:** RIPv2 supports VLSM.

#### 2.3. RIP Variants

*   **RIPv1:**
    *   Classful routing protocol (does not advertise subnet masks in updates).
    *   Requires classful network boundaries.
    *   Broadcasts updates.
*   **RIPv2:**
    *   Classless routing protocol (advertises subnet masks).
    *   Supports VLSM.
    *   Multicasts updates (to 224.0.0.9 by default), reducing unnecessary traffic.
    *   Supports authentication.

#### 2.4. Example: RIP Operation

Imagine three routers R1, R2, and R3 connected in a line: R1 --- R2 --- R3.

1.  **Initial State:**
    *   R1 knows about network A (directly connected).
    *   R2 knows about network B (directly connected) and network A (via R1, hop count 1).
    *   R3 knows about network C (directly connected) and network B (via R2, hop count 1).

2.  **R1 sends its routing table to R2:**
    *   R1 advertises: "Network A is reachable with 0 hops."

3.  **R2 receives R1's update:**
    *   R2 adds 1 to the hop count for network A, so it knows: "Network A is reachable via R1 with 1 hop."

4.  **R2 sends its routing table to R1 and R3:**
    *   R2 advertises: "Network A is reachable with 1 hop (via R1)."
    *   R2 advertises: "Network B is reachable with 0 hops."

5.  **R3 receives R2's update:**
    *   R3 adds 1 to the hop count for network B, so it knows: "Network B is reachable via R2 with 1 hop."

This process continues as routers exchange information and build their routing tables.

### 3. Link-State Routing Protocols (e.g., OSPF)

#### 3.1. Key Concepts and Definitions

*   **Link State:** Routers build a complete map (topology database) of the network by exchanging Link State Advertisements (LSAs). Each LSA describes the router's directly connected links and their states.
*   **Link State Advertisements (LSAs):** Packets containing information about a router's neighbors and the cost of the links to them.
*   **Topology Database:** A collection of all LSAs received from all routers in an area. This database is identical on all routers within an area.
*   **Dijkstra's Algorithm (Shortest Path First - SPF):** Used by each router to calculate the shortest path to every other network based on the topology database.
*   **Cost:** A metric assigned to links, typically based on bandwidth (higher bandwidth = lower cost).
*   **Areas:** OSPF divides large networks into smaller, manageable areas to reduce the size of the topology database and the processing required.
    *   **Backbone Area (Area 0):** All other areas must connect to the backbone area.
    *   **Non-Backbone Areas:** Other areas connected to the backbone.
*   **Adjacency:** A relationship established between two routers that have become neighbors and are exchanging LSAs.
*   **Designated Router (DR) and Backup Designated Router (BDR):** On broadcast multi-access networks (like Ethernet), a DR and BDR are elected to reduce the number of adjacencies and LSA flooding.
    *   DR: Acts as a central point for LSA exchange.
    *   BDR: Takes over if the DR fails.

#### 3.2. Open Shortest Path First (OSPF)

*   **Type:** Link-state IGP.
*   **Metric:** Cost (inverse function of bandwidth, e.g., Cost = 100 Mbps / Interface Bandwidth).
*   **Update Mechanism:** Routers exchange LSAs only when a change occurs or periodically (every 30 minutes) to ensure LSAs are fresh. Updates are sent to specific multicast addresses.
*   **Convergence Speed:** Much faster than RIP because only changes are flooded, and the SPF algorithm is efficient.
*   **Advantages:**
    *   Fast convergence.
    *   Scalable through the use of areas.
    *   Efficient LSA flooding (only changes are sent).
    *   Supports VLSM and CIDR (Classless Inter-Domain Routing).
    *   Load balancing over equal-cost paths.
*   **Disadvantages:**
    *   More complex to configure and understand than RIP.
    *   Higher CPU and memory requirements due to SPF calculations and maintaining the topology database.

#### 3.3. OSPF States and Adjacencies

Routers transition through several states to establish an adjacency:

1.  **Down:** Initial state.
2.  **Init:** Router has received an OSPF hello packet but has not yet acknowledged the sender.
3.  **Two-Way:** Routers have acknowledged each other by sending hello packets. If DR/BDR election is required, it happens in this state.
4.  **ExStart:** Routers negotiate parameters for exchanging LSAs (e.g., master/slave relationship).
5.  **Exchange:** Routers exchange LSDB (Link State Database) summaries.
6.  **Loading:** Routers request and receive full LSAs from neighbors.
7.  **Full:** Adjacency is established; routers are synchronized and exchanging LSAs.

#### 3.4. OSPF LSA Types

*   **Type 1 (Router LSA):** Generated by every router for each link it has connected to an area. Describes the router's links to the network.
*   **Type 2 (Network LSA):** Generated by the DR on multi-access networks. Lists all routers on that segment.
*   **Type 3 (Summary LSA):** Generated by an Area Border Router (ABR) to advertise routes to other areas.
*   **Type 4 (ASBR Summary LSA):** Generated by an ABR to advertise routes to an Autonomous System Boundary Router (ASBR).
*   **Type 5 (External LSA):** Generated by an ASBR to advertise routes learned from external routing protocols (e.g., BGP).
*   **(Other LSA types exist for specific scenarios, like NSSA, but these are the most common.)**

#### 3.5. Example: OSPF Operation

Consider a network with R1, R2, and R3, all connected to a switch (segment X). R1 also connects to network A, R2 to network B, and R3 to network C.

1.  **Neighbor Discovery:** R1, R2, and R3 send OSPF hello packets on segment X.
2.  **DR/BDR Election:** If the segment requires it, a DR and BDR are elected. Let's say R2 becomes DR, and R3 becomes BDR.
3.  **Adjacency:**
    *   R1 becomes adjacent with R2 (DR) and R3 (BDR).
    *   R2 (DR) becomes adjacent with R1 and R3.
    *   R3 (BDR) becomes adjacent with R1 and R2.
    *   On multi-access segments, routers only form full adjacencies with the DR and BDR, not with every other router.
4.  **LSA Exchange:**
    *   R1 generates a Type 1 LSA for its interface connected to segment X and sends it to the DR (R2). It also generates a Type 1 for network A.
    *   R2 generates a Type 1 LSA for its interfaces connected to segment X and network B. It also generates a Type 2 LSA for segment X, listing itself (DR) and R1 and R3 as participants.
    *   R3 generates a Type 1 LSA for its interfaces connected to segment X and network C.
    *   These LSAs are flooded to all routers in the area.
5.  **Topology Database:** Each router builds its topology database containing all received LSAs.
6.  **SPF Calculation:** Each router runs Dijkstra's algorithm on its topology database to calculate the shortest path to all destinations.
7.  **Routing Table Population:** The calculated paths are installed into the routing table.

### 4. Path-Vector Routing Protocols (e.g., BGP)

#### 4.1. Key Concepts and Definitions

*   **Path Vector:** Routers exchange routing information that includes the sequence of Autonomous Systems (ASes) that a route has traversed. This sequence is the "path vector."
*   **Autonomous System (AS):** A collection of IP networks and routers under the control of one entity (e.g., an ISP, a large corporation) that presents a common routing policy to the Internet. Each AS is assigned a unique AS Number (ASN).
*   **Border Gateway Protocol (BGP):** The de facto standard Exterior Gateway Protocol (EGP) used to exchange routing information between ASes on the Internet.
*   **AS Path:** The sequence of ASNs that a route has traversed from its origin to the current AS.
*   **Policy-Based Routing:** BGP's primary strength lies in its ability to implement complex routing policies based on various attributes, not just path length.
*   **Attributes:** BGP uses a variety of attributes to select the best path, including:
    *   **AS_PATH:** The AS path of the route. Shorter AS paths are generally preferred.
    *   **NEXT_HOP:** The IP address of the next router to which the packet should be sent.
    *   **ORIGIN:** Indicates how the route was learned (e.g., IGP, EGP, incomplete).
    *   **LOCAL_PREF:** A path attribute used within an AS to influence outbound path selection. Higher is preferred.
    *   **MED (Multi-Exit Discriminator):** An optional attribute used to influence inbound path selection from another AS. Lower is generally preferred.
    *   **Community Attributes:** Used to tag routes for policy application.
*   **BGP Neighbors (Peers):** BGP routers establish TCP connections (port 179) with each other to exchange routing information.
    *   **eBGP (External BGP):** Between routers in different ASes.
    *   **iBGP (Internal BGP):** Between routers in the same AS.
*   **Path Selection Algorithm:** BGP has a complex path selection algorithm that evaluates multiple attributes to choose the best path when multiple paths to the same destination exist.

#### 4.2. Border Gateway Protocol (BGP)

*   **Type:** Path-vector EGP.
*   **Metric:** No single metric like hop count or cost. Path selection is based on a sophisticated algorithm that evaluates numerous path attributes.
*   **Update Mechanism:** BGP routers establish a TCP connection and exchange update messages containing reachability information (prefix and AS path). Updates are incremental, sent only when changes occur.
*   **Convergence Speed:** Can be slow compared to IGPs, as BGP is designed for stability and policy enforcement rather than rapid convergence.
*   **Advantages:**
    *   **Scalability:** Designed to handle the vast routing tables of the global Internet.
    *   **Policy Control:** Enables granular control over routing paths based on business agreements and network policies.
    *   **Loop Prevention:** The AS path attribute inherently prevents loops between ASes.
    *   **Route Aggregation:** Supports aggregation to reduce routing table size.
*   **Disadvantages:**
    *   **Complexity:** Highly complex to configure and troubleshoot.
    *   **Slow Convergence:** Can take minutes for routing changes to propagate.
    *   **Resource Intensive:** Requires significant CPU and memory resources.

#### 4.3. BGP Message Types

*   **OPEN:** Sent by a BGP router to establish a peering session.
*   **UPDATE:** Carries routing information, including prefixes and path attributes.
*   **NOTIFICATION:** Sent when an error condition occurs.
*   **KEEPALIVE:** Sent periodically to maintain the BGP session.
