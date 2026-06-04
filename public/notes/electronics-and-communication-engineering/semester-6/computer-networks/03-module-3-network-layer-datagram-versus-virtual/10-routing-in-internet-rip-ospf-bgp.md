---
title: "Routing in Internet – RIP, OSPF, BGP."
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff056"
status: "completed"
scrapedAt: "2026-05-23T18:00:12.056Z"
---
# Computer Networks: Module 3 - Network Layer: Routing in the Internet (RIP, OSPF, BGP)

## 1. Introduction to Routing in the Internet

Routing is the process of selecting paths in a network along which to send network traffic. In the internet, this is a complex task due to its vast scale, dynamic nature, and the need to handle diverse traffic. The network layer is responsible for routing packets from source to destination.

**Key Concepts:**

*   **Routing:** The process of determining the path a packet takes from its source to its destination across a network.
*   **Routers:** Devices that forward packets between networks. They examine the destination IP address of a packet and consult their routing tables to determine the next hop.
*   **Routing Table:** A data structure within a router that stores information about network destinations and their corresponding next hops or outgoing interfaces.
*   **Routing Algorithm:** The algorithm used by routers to build and maintain their routing tables. These algorithms aim to find the "best" path, often defined as the shortest or least congested path.

**Learning Outcomes Covered:** CO1, CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapters 4 (Introduction to Network Layer, Forwarding and Routing)
*   Forouzan: Chapters 13 (Network Layer: Routing Protocols)

---

## 2. Routing Paradigms: Datagram vs. Virtual Circuit

While the topic focuses on routing protocols, understanding the underlying routing paradigms is crucial.

**2.1. Datagram Routing:**

*   **Concept:** Each packet is routed independently based on its destination address. Routers maintain routing tables, but there is no pre-established path for a connection.
*   **Characteristics:**
    *   **Connectionless:** No prior setup is required before sending data.
    *   **Stateless Routers:** Routers don't need to maintain state information about individual connections.
    *   **Robustness:** If a router fails, packets can be rerouted through alternative paths.
    *   **Ordering:** Packets may arrive out of order because they can take different paths.
*   **Internet Implementation:** The Internet Protocol (IP) uses datagram routing.

**2.2. Virtual Circuit Routing:**

*   **Concept:** A fixed path (virtual circuit) is established between the source and destination before any data packets are sent. All packets belonging to that connection follow the same path.
*   **Characteristics:**
    *   **Connection-Oriented:** A setup phase is required to establish the virtual circuit.
    *   **Stateful Routers:** Routers maintain state information about each virtual circuit.
    *   **Ordered Delivery:** Packets generally arrive in order.
    *   **Efficiency:** Can be more efficient for transmitting large amounts of data once established.
*   **Examples:** Frame Relay, ATM.

**Important Point to Remember:** The Internet's success is largely attributed to its datagram approach, offering scalability and resilience.

**Learning Outcomes Covered:** CO1, CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.1 (Introduction to Network Layer)
*   Forouzan: Chapter 12 (Network Layer: Virtual-Circuit and Datagram Networks)

---

## 3. Routing Algorithms: Classification

Routing algorithms can be broadly classified into two main types:

**3.1. Distance-Vector Routing:**

*   **Concept:** Each router periodically exchanges its entire routing table with its directly connected neighbors. Routers compute their routing tables based on the information received from their neighbors.
*   **Algorithm:** Bellman-Ford algorithm is the basis for most distance-vector algorithms.
*   **Metrics:** Typically uses hop count as the primary metric (i.e., the number of routers a packet must traverse).
*   **Advantages:** Simple to implement.
*   **Disadvantages:**
    *   **Slow Convergence:** Can take a long time for routing information to propagate throughout the network, especially after a topology change.
    *   **Count-to-Infinity Problem:** Can lead to routing loops where a packet is repeatedly forwarded between two or more routers. Mechanisms like split horizon and poison reverse are used to mitigate this.
*   **Example Protocols:** RIP (Routing Information Protocol)

**3.2. Link-State Routing:**

*   **Concept:** Each router broadcasts information about its directly connected links (neighbors and the "cost" or "weight" of those links) to all other routers in the network. Each router then builds a complete map (topology) of the network and uses a shortest path algorithm (like Dijkstra's) to compute the best path to every destination.
*   **Algorithm:** Dijkstra's algorithm is typically used.
*   **Metrics:** Can use various metrics, such as bandwidth, delay, reliability, or cost.
*   **Advantages:**
    *   **Fast Convergence:** Changes in the network topology are quickly propagated.
    *   **No Count-to-Infinity Problem:** Each router has a global view of the network, preventing loops.
*   **Disadvantages:**
    *   More complex to implement.
    *   Requires more computational power and memory on routers.
    *   Broadcasts can consume significant bandwidth.
*   **Example Protocols:** OSPF (Open Shortest Path First)

**Important Point to Remember:** The choice between distance-vector and link-state depends on the network's size, complexity, and desired convergence speed.

**Learning Outcomes Covered:** CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.2 (Introduction to Routing Algorithms)
*   Forouzan: Chapter 13.1 (Distance-Vector Routing Algorithms), 13.2 (Link-State Routing Algorithms)

---

## 4. Interior Gateway Protocols (IGPs)

IGPs are used to route packets *within* an autonomous system (AS). An AS is a collection of networks under a single administrative control.

**4.1. RIP (Routing Information Protocol)**

*   **Type:** Distance-Vector Routing Protocol.
*   **Metrics:** Hop Count. The maximum hop count is typically 15. A hop count of 16 is considered infinity, meaning a destination is unreachable.
*   **Operation:**
    *   Routers periodically (every 30 seconds) send their entire routing tables to their neighbors.
    *   When a router receives a routing update, it updates its own table.
    *   If a destination becomes unreachable, its hop count is set to 16.
*   **Versions:**
    *   **RIPv1:** Classful routing protocol (does not send subnet masks in updates), leading to issues with discontiguous networks.
    *   **RIPv2:** Classless routing protocol (sends subnet masks), addressing RIPv1's limitations.
*   **Timers:**
    *   **Update Timer:** How often routing tables are sent (e.g., 30 seconds).
    *   **Invalid Timer:** How long a route is considered valid before it must be retransmitted (e.g., 180 seconds).
    *   **Hold-down Timer:** Prevents a router from advertising a potentially incorrect route after a link failure or route invalidation (e.g., 180 seconds).
*   **Count-to-Infinity Mitigation:**
    *   **Split Horizon:** A router does not advertise a route back to the neighbor from which it learned the route.
    *   **Poison Reverse:** A router advertises a route back to its neighbor with an infinite metric (hop count 16) if it learned that route from that neighbor.
*   **Use Case:** Historically popular for small to medium-sized networks due to its simplicity. Less common in modern enterprise networks.

**Example:**
Imagine Router A learns about network X from Router B with a hop count of 2. Router A will not advertise network X back to Router B (split horizon). If Router A later learns about network X from Router C with a hop count of 3, it will update its table.

**Important Points to Remember about RIP:**
*   Simple, but slow to converge.
*   Hop count as the sole metric can lead to suboptimal routing.
*   Maximum hop count of 15 limits network size.

**Learning Outcomes Covered:** CO1, CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.2.1 (Distance-Vector Algorithms)
*   Forouzan: Chapter 13.1.1 (Distance-Vector Routing: Routing by Vector)

---

**4.2. OSPF (Open Shortest Path First)**

*   **Type:** Link-State Routing Protocol.
*   **Metrics:** Cost (typically inversely proportional to link bandwidth). The sum of the costs along a path determines the best path.
*   **Operation:**
    *   **Discovery:** Routers send "hello" packets to discover neighbors and establish adjacencies.
    *   **Flooding:** Once adjacencies are formed, routers exchange Link-State Advertisements (LSAs) describing their directly connected links. LSAs are flooded throughout the OSPF area.
    *   **Topology Map:** Each router builds an identical map of the network's topology.
    *   **Shortest Path Tree:** Dijkstra's algorithm is run on the topology map to calculate the shortest path to every destination.
*   **Hierarchy:**
    *   **Autonomous System (AS):** A collection of IP networks and routers under the control of one entity.
    *   **Areas:** OSPF allows an AS to be divided into areas. This reduces the size of the link-state database and the frequency of link-state flooding, improving scalability.
        *   **Backbone Area (Area 0):** All other areas must connect to the backbone area.
        *   **Regular Areas:** Standard areas within the AS.
        *   **Stub Areas:** Areas that do not receive external routes, reducing routing table size.
    *   **Router Types:**
        *   **Internal Router:** All interfaces belong to the same OSPF area.
        *   **Backbone Router:** Has at least one interface in the backbone area.
        *   **Area Border Router (ABR):** Connects an area to the backbone area.
        *   **Autonomous System Boundary Router (ASBR):** Connects the AS to external networks (e.g., other ASes).
*   **Convergence:** Much faster than RIP due to efficient flooding and the use of Dijkstra's algorithm.
*   **Use Case:** Widely used in enterprise networks and by ISPs for routing within their own networks.

**Example:**
Consider two routers connected by a 10 Mbps link and another pair by a 100 Mbps link. If the cost of a link is inversely proportional to its bandwidth, the 100 Mbps link will have a lower cost. OSPF will prefer to send traffic over the 100 Mbps link if it leads to a destination.

**Important Points to Remember about OSPF:**
*   Link-state protocol, fast convergence.
*   Uses Dijkstra's algorithm.
*   Supports hierarchical design with areas for scalability.
*   Cost metric is more flexible than hop count.

**Learning Outcomes Covered:** CO1, CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.2.2 (Link-State Algorithms)
*   Forouzan: Chapter 13.2.2 (Link-State Routing: State of a Link)

---

## 5. Exterior Gateway Protocol (EGP)

EGPs are used to route packets *between* different autonomous systems.

**5.1. BGP (Border Gateway Protocol)**

*   **Type:** Path-Vector Routing Protocol. It's considered the de facto routing protocol of the Internet.
*   **Purpose:** To exchange routing information between different ASes on the Internet, enabling end-to-end packet delivery.
*   **Metrics:** Not just hop count or link cost, but a set of **path attributes** that are used to determine the "best" path. These attributes are propagated by BGP routers.
*   **Operation:**
    *   **Peering:** BGP routers (peers) establish TCP connections (port 179) with each other.
    *   **Path Advertisement:** When an AS acquires a new network prefix, it advertises this prefix along with a sequence of AS numbers (AS_PATH) that the prefix has traversed.
    *   **Policy Enforcement:** BGP is heavily policy-driven. ISPs and organizations use BGP policies to influence how traffic enters and leaves their networks.
    *   **Path Selection:** When a BGP router receives multiple paths to a destination, it uses a complex set of criteria (path attributes) to select the best path.
*   **Key Path Attributes:**
    *   **AS_PATH:** A list of AS numbers that the route has traversed. Used to detect and prevent routing loops and also influences path selection (shorter AS_PATH is often preferred).
    *   **NEXT_HOP:** The IP address of the BGP router that is the next hop to reach the destination prefix. This is usually an IP address within the AS advertising the route.
    *   **ORIGIN:** Indicates how the route was learned (e.g., IGP, EGP, Incomplete).
    *   **LOCAL_PREF:** An attribute used within an AS to influence outbound path selection. Higher LOCAL_PREF is preferred.
    *   **MULTI_EXIT_DISC (MED):** Used to suggest to an external AS which gateway router to use for traffic entering its AS.
    *   **COMMUNITY:** Optional attributes used to group prefixes for policy application.
*   **BGP Message Types:**
    *   **OPEN:** Establishes a BGP session.
    *   **UPDATE:** Advertises network prefixes and their attributes, or withdraws previously advertised prefixes.
    *   **NOTIFICATION:** Reports errors or alerts.
    *   **KEEPALIVE:** Keeps sessions alive and detects failures.
*   **BGP States:** Idle, Connect, Active, OpenSent, OpenConfirm, Established.
*   **Use Case:** The routing protocol of the global Internet, connecting different ISPs and large organizations.

**Example:**
Consider two ISPs, ISP A and ISP B, both connected to ISP C. ISP A announces its customer networks to ISP C. ISP C, in turn, announces these networks to ISP B. The AS_PATH for ISP A's networks as seen by ISP B would include the AS numbers of ISP A and ISP C. ISP A might set a higher LOCAL_PREF for traffic destined for its customers to influence how its own customers route traffic.

**Important Points to Remember about BGP:**
*   Path-vector protocol, the backbone of Internet routing.
*   Focuses on reachability and policy between ASes.
*   Uses a rich set of path attributes for path selection.
*   Relies on TCP for reliable transport.
*   Scalable and designed for the global Internet.

**Learning Outcomes Covered:** CO1, CO2, CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.3 (Routing in the Internet: BGP)
*   Forouzan: Chapter 13.3 (Path-Vector Routing: BGP)

---

## 6. Hierarchical Routing

As the Internet grew, a flat routing scheme became unmanageable. Hierarchical routing divides the routing problem into smaller, more manageable parts.

*   **Concept:** The Internet is partitioned into groups of routers, each group forming an **Autonomous System (AS)**.
*   **Intra-AS Routing (Interior Gateway Protocols):** Routers within an AS use protocols like OSPF or RIP to exchange routing information.
*   **Inter-AS Routing (Exterior Gateway Protocol):** Routers at the boundaries of ASes use protocols like BGP to exchange reachability information between ASes.
*   **Benefits:**
    *   **Scalability:** Reduces the size of routing tables and the amount of routing traffic.
    *   **Administrative Autonomy:** Allows each AS to manage its own internal routing policies.
    *   **Policy Control:** Enables ASes to control how traffic enters and leaves their networks.

**Example:**
Each ISP (e.g., Comcast, Verizon, AT&T) is an Autonomous System. Routers within Comcast's network use OSPF for internal routing. Comcast routers at the edge of their network use BGP to exchange routing information with routers from Verizon and AT&T.

**Learning Outcomes Covered:** CO3

**Textbook References:**
*   Kurose & Ross: Chapter 4.3 (Routing in the Internet: BGP)
*   Forouzan: Chapter 13.3 (Path-Vector Routing: BGP)

---

## 7. Practice Questions and Answers

**Question 1:** What is the primary difference between a distance-vector routing protocol and a link-state routing protocol?

**Answer:**
*   **Distance-Vector:** Routers exchange their entire routing tables with their direct neighbors and calculate routes based on this information (e.g., RIP). They only know about their neighbors' routes.
*   **Link-State:** Routers discover their neighbors and the cost of their links and flood this information to all other routers. Each router then builds a complete network topology map and runs a shortest path algorithm (e.g., OSPF). They have a global view of the network.

**Question 2:** Which routing protocol is the de facto standard for routing between Autonomous Systems on the Internet? Why?

**Answer:** BGP (Border Gateway Protocol). It is used because it is designed for the scale and complexity of the Internet, allowing different administrative domains (ASes) to exchange reachability information while enforcing routing policies through its path attributes.

**Question 3:** Explain the "count-to-infinity" problem in distance-vector routing and how mechanisms like split horizon and poison reverse help to mitigate it.

**Answer:**
The count-to-infinity problem occurs when a link fails, and routing information propagates incorrectly, leading to a loop where routers repeatedly increase the hop count for a destination until it reaches infinity.
*   **Split Horizon:** A router does not advertise a route back to the interface from which it learned that route. This prevents immediate loops.
*   **Poison Reverse:** If a router learns a route from neighbor A, it advertises that route back to neighbor A with an infinite metric (hop count 16 in RIP). This explicitly tells neighbor A that this path is no longer valid from this router's perspective.

**Question 4:** What is the main metric used by OSPF, and how does it differ from the metric used by RIP?

**Answer:**
*   **OSPF:** Uses "cost," which is typically inversely proportional to link bandwidth. This allows for more intelligent path selection based on link speed.
*   **RIP:** Primarily uses "hop count." This is a simpler metric but can lead to suboptimal routing if a path with fewer hops has a slower link than a path with more hops.

**Question 5:** Imagine a small corporate network where all routers are under the same administrative control. Which type of routing protocol would be most appropriate for routing within this network, and why? Provide an example.

**Answer:** An Interior Gateway Protocol (IGP) would be most appropriate. Given the requirement for efficient and fast convergence in a corporate network, **OSPF** would be a suitable choice. It offers faster convergence than RIP and allows for better control over routing paths using its cost metric. RIP could also be used for very simple networks, but OSPF is generally preferred for its advantages.

**Question 6:** Define an Autonomous System (AS) and explain its role in hierarchical routing.

**Answer:**
An Autonomous System (AS) is a collection of IP networks and routers that are under the control of a single administrative entity. In hierarchical routing:
*   IGPs (like OSPF, RIP) handle routing **within** an AS.
*   EGPs (like BGP) handle routing **between** different ASes.
This division allows for scalability and administrative control, as each AS can manage its internal routing independently while cooperating with other ASes through BGP for global reachability.

---

## 8. Summary of Key Protocols

| Protocol | Type        | Scope    | Metric       | Convergence | Complexity | Example Use Case                                      |
| :------- | :---------- | :------- | :----------- | :---------- | :--------- | :---------------------------------------------------- |
| **RIP**  | Distance-Vector | Intra-AS | Hop Count    | Slow        | Low        | Small, simple networks (less common now)              |
| **OSPF** | Link-State  | Intra-AS | Cost (Bandwidth) | Fast        | Medium     | Enterprise networks, ISP internal routing             |
| **BGP**  | Path-Vector | Inter-AS | Path Attributes | Varies (Policy driven) | High       | Global Internet routing between ISPs and organizations |

---

## 9. Connecting to Course Outcomes

*   **CO1 (Principles, Switching, Delay, Layers):** Understanding routing is fundamental to the network layer's role in delivering packets. The selection of protocols (RIP, OSPF, BGP) reflects different approaches to managing network scale and complexity, impacting overall delay.
*   **CO2 (Protocols, Layer Functions):** This entire topic is about network layer protocols and their functions in facilitating end-to-end communication. RIP, OSPF, and BGP are core examples.
*   **CO3 (Routing and Addressing):** This is the primary focus. We analyze the algorithms and decision-making processes (routing) used by routers, and how these protocols enable packets to find their destinations across complex networks, often relying on IP addressing.
*   **CO4 (Physical Standards):** While not directly about physical standards, the choice of routing protocol can influence how efficiently higher layers utilize the underlying physical infrastructure. For example, OSPF's cost metric directly considers link bandwidth.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
