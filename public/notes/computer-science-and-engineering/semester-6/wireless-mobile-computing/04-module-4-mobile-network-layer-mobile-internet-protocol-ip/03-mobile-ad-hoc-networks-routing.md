---
title: "Mobile ad-hoc networks – Routing"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 4: Mobile network layer – Mobile Internet Protocol (IP)"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb90"
status: "completed"
scrapedAt: "2026-05-20T16:58:08.436Z"
---
# WIRELESS & MOBILE COMPUTING - Module 4: Mobile Network Layer - Mobile IP - Mobile Ad-hoc Networks Routing

## Introduction to Mobile Ad-hoc Networks (MANETs) and Routing

Mobile Ad-hoc Networks (MANETs) are self-configuring, infrastructure-less networks of mobile devices connected wirelessly.  These networks can form and operate without any pre-existing infrastructure like access points or base stations.  Nodes in a MANET can move freely and organize themselves arbitrarily; thus, the network topology may change rapidly and unpredictably over time. This dynamic nature presents significant challenges, particularly in routing.

**Learning Outcomes:**

*   Understand the characteristics and challenges of routing in MANETs.
*   Describe different routing protocols for MANETs (Proactive, Reactive, Hybrid).
*   Compare and contrast the advantages and disadvantages of various routing protocols.
*   Explain the concepts behind Destination-Sequenced Distance-Vector (DSDV), Ad-hoc On-demand Distance Vector (AODV), and Dynamic Source Routing (DSR).
*   Analyze the performance considerations for MANET routing protocols.

### 1. Characteristics and Challenges of Routing in MANETs

**Key Concepts and Definitions:**

*   **MANET:**  Mobile Ad-hoc Network.  A self-configuring, infrastructure-less network of mobile devices connected wirelessly.
*   **Node:** A mobile device participating in the MANET.
*   **Ad-hoc:** Formed spontaneously without pre-existing infrastructure.
*   **Routing:**  The process of selecting a path for data to travel from a source node to a destination node in the network.
*   **Topology:**  The structure of the network, defined by the connections between nodes.
*   **Wireless Link:**  The connection between two nodes using radio waves.
*   **Packet:** A unit of data transmitted across the network.
*   **Path:**  A sequence of nodes through which data travels from source to destination.
*   **Mobility:**  The movement of nodes within the network.

**Challenges of Routing in MANETs:**

*   **Dynamic Topology:**  Node mobility causes frequent changes in network topology, making it difficult to maintain accurate routing information.
*   **Limited Bandwidth:**  Wireless links have limited bandwidth, which can be easily consumed by routing overhead.
*   **Power Constraints:**  Mobile devices operate on battery power, so energy-efficient routing is crucial.
*   **Security:**  The open wireless environment makes MANETs vulnerable to security threats.
*   **Scalability:**  Routing protocols must be able to handle a large number of nodes.
*   **Hidden Terminal Problem:**  Occurs when nodes are within range of a common node, but not each other.  This can lead to collisions.
*   **Exposed Terminal Problem:** A node transmits to a receiving node. A nearby node is prevented from transmitting because it senses activity at the sender, even though it would not interfere with the receiver's reception.
*   **Resource Constraints:** Mobile devices have limited processing power and memory.

**Important Points to Remember:**

*   The dynamic nature of MANETs makes traditional routing protocols designed for wired networks unsuitable.
*   Energy efficiency is a critical consideration in MANET routing.

### 2. Different Routing Protocols for MANETs

MANET routing protocols can be broadly classified into three categories:

*   **Proactive (Table-Driven):**  These protocols maintain routing information for all nodes in the network, regardless of whether there is data to be sent.  Each node maintains a routing table containing paths to all other nodes.

    *   **Advantages:**  Low latency, as routes are readily available.
    *   **Disadvantages:** High overhead due to periodic updates, even when there is no traffic. Inefficient in large, dynamic networks.

    *   **Examples:** Destination-Sequenced Distance-Vector (DSDV), Optimized Link State Routing (OLSR)

*   **Reactive (On-Demand):**  These protocols discover routes only when needed.  When a node wants to send data to a destination, it initiates a route discovery process.

    *   **Advantages:** Lower overhead compared to proactive protocols, as routing information is only maintained for active routes. Scalable to large networks.
    *   **Disadvantages:** Higher latency during route discovery, as routes must be established before data can be sent.

    *   **Examples:** Ad-hoc On-demand Distance Vector (AODV), Dynamic Source Routing (DSR)

*   **Hybrid:**  These protocols combine the advantages of both proactive and reactive approaches. They use proactive routing for nodes within a certain radius and reactive routing for nodes beyond that radius.

    *   **Advantages:** Can balance latency and overhead.
    *   **Disadvantages:** More complex to implement and configure.

    *   **Examples:** Zone Routing Protocol (ZRP)

**Example:**

Imagine a group of hikers using walkie-talkies in a forest (MANET).

*   **Proactive (DSDV):**  Each hiker constantly announces their position to everyone else, so everyone always knows how to reach each other.  This is useful if everyone is talking frequently, but wastes battery if they are mostly silent.
*   **Reactive (AODV/DSR):** If hiker A wants to talk to hiker B, hiker A shouts, "Can anyone hear hiker B?".  The message is relayed until it reaches hiker B, establishing a route. This saves battery when people are talking infrequently.
*   **Hybrid (ZRP):** Each hiker constantly knows the location of hikers within a small group (a zone).  If they want to talk to someone outside their zone, they use a reactive approach to find them.

### 3. DSDV, AODV, and DSR Routing Protocols

**3.1. Destination-Sequenced Distance-Vector (DSDV):**

*   **Type:** Proactive.
*   **Mechanism:**  Each node maintains a routing table with the best path to every other node in the network. Each entry in the routing table includes a sequence number assigned by the destination node.  Sequence numbers are used to prevent routing loops and ensure that the most recent information is used.
*   **Route Updates:** Nodes periodically broadcast their routing tables to their neighbors.  Updates contain the distance (hop count) to each destination and the destination's sequence number.
*   **Advantages:** Simple to implement, relatively low latency.
*   **Disadvantages:**  High overhead due to periodic updates, consumes significant bandwidth and power.  Scalability issues in large networks.
*   **Example:** A node determines the shortest path to another node based on the hop count. If multiple paths exist, the path with the higher sequence number is preferred. If sequence numbers are equal, the path with the smaller hop count is selected.

**3.2. Ad-hoc On-demand Distance Vector (AODV):**

*   **Type:** Reactive.
*   **Mechanism:** AODV discovers routes on-demand, only when a node needs to send data to a destination for which it does not have a valid route.  It uses Route Request (RREQ), Route Reply (RREP), and Route Error (RERR) messages to establish and maintain routes.
*   **Route Discovery:** When a node wants to send data to a destination, it broadcasts a RREQ message.  The RREQ is forwarded by intermediate nodes until it reaches the destination or a node that has a valid route to the destination.
*   **Route Reply:**  The destination or the intermediate node with a valid route sends a RREP message back to the source node, following the reverse path of the RREQ.
*   **Route Maintenance:**  When a link in a route breaks, the node detecting the break sends a RERR message to the source node. The source node then invalidates the route and initiates a new route discovery process if necessary.
*   **Advantages:**  Lower overhead compared to DSDV, scalable to larger networks.
*   **Disadvantages:** Higher latency during route discovery, susceptible to route breaks and delays due to mobility.
*   **Example:** When a mobile node wants to transmit data to another node and finds no route to that node in its routing table, it broadcasts an RREQ message to find a path.

**3.3. Dynamic Source Routing (DSR):**

*   **Type:** Reactive.
*   **Mechanism:** DSR is a source routing protocol, meaning that the source node includes the complete sequence of hops to the destination in the packet header.  It also uses route discovery and route maintenance mechanisms.
*   **Route Discovery:** When a node wants to send data to a destination, it broadcasts a RREQ message. Each intermediate node appends its address to the RREQ before forwarding it.
*   **Route Reply:**  When the RREQ reaches the destination, the destination sends a RREP message back to the source node, containing the complete path from the source to the destination, which it obtained from the accumulated addresses in the RREQ.
*   **Route Maintenance:**  When a link in a route breaks, the node detecting the break sends a RERR message to the source node, indicating the broken link. The source node can then use an alternative route from its route cache or initiate a new route discovery.
*   **Advantages:** Simple to implement, no need for periodic updates, multiple routes can be maintained in the route cache.
*   **Disadvantages:** Higher overhead due to the source routing header, which can be significant for long routes. Susceptible to stale route entries in the route cache.
*   **Example:** A packet routed via DSR will contain a header that includes all intermediate nodes to reach the destination node. For example, the header could indicate the route as "Node A -> Node B -> Node C -> Destination Node".

**Comparison Table:**

| Feature         | DSDV                | AODV                 | DSR                  |
|-----------------|---------------------|----------------------|----------------------|
| Protocol Type   | Proactive          | Reactive             | Reactive             |
| Routing Table   | Maintained        | On-Demand            | Route Cache          |
| Route Discovery | Not Applicable     | RREQ/RREP           | RREQ/RREP           |
| Route Updates   | Periodic Broadcast  | RERR                | RERR                |
| Overhead        | High                | Moderate             | High (header size)    |
| Latency         | Low                 | Moderate             | Moderate             |
| Scalability     | Poor                | Good                 | Good                 |

### 4. Performance Considerations for MANET Routing Protocols

The performance of MANET routing protocols is influenced by several factors:

*   **Packet Delivery Ratio:**  The percentage of packets that are successfully delivered to their intended destination.  Affected by mobility, link failures, and congestion.
*   **Routing Overhead:**  The amount of control traffic generated by the routing protocol.  High overhead can consume bandwidth and power.
*   **End-to-End Delay:**  The time it takes for a packet to travel from the source to the destination.  Affected by route discovery latency, queuing delays, and transmission delays.
*   **Throughput:**  The rate at which data can be successfully transmitted over the network.
*   **Energy Consumption:**  The amount of energy consumed by the nodes in the network.  A critical metric for battery-powered devices.
*   **Scalability:**  The ability of the protocol to maintain performance as the network size increases.
*   **Mobility:** The velocity of nodes influences performance. Higher mobility leads to more route breaks and increased overhead.

**Factors affecting protocol choice:**

*   **Network size and density:** DSDV may be suitable for small, relatively static networks, while AODV and DSR are more scalable to larger, more dynamic networks.
*   **Mobility pattern:** Highly mobile networks may benefit from protocols with robust route maintenance mechanisms.
*   **Traffic pattern:** Networks with frequent communication may benefit from proactive protocols, while networks with infrequent communication may be better suited for reactive protocols.
*   **Power constraints:** Energy-efficient protocols are essential for battery-powered devices.

**Important Points to Remember:**

*   There is no single "best" routing protocol for all MANET scenarios. The optimal choice depends on the specific application and network characteristics.
*   Simulation and experimental evaluation are essential for comparing the performance of different routing protocols.

## Practice Questions and Exercises:

**1.  What are the primary challenges of routing in MANETs, and how do they differ from routing in wired networks?**

**Answer:** The primary challenges are: dynamic topology, limited bandwidth, power constraints, security vulnerabilities, and scalability issues. These differ from wired networks due to the infrastructure-less, mobile nature of MANETs where the network topology changes constantly. Wired networks have a fixed infrastructure and dedicated links.

**2.  Explain the key differences between proactive, reactive, and hybrid routing protocols for MANETs. Provide examples of each.**

**Answer:**
    *   **Proactive:** Maintains routing information for all nodes, regardless of traffic. Example: DSDV.
    *   **Reactive:** Discovers routes only when needed. Example: AODV, DSR.
    *   **Hybrid:** Combines proactive and reactive approaches. Example: ZRP.
    The key difference lies in how and when routing information is maintained/discovered.

**3.  Compare and contrast AODV and DSR in terms of their route discovery and maintenance mechanisms, as well as their advantages and disadvantages.**

**Answer:** Both AODV and DSR are reactive.
    *   **AODV:** Uses RREQ/RREP for route discovery, maintains routing tables at intermediate nodes, uses RERR for route maintenance. Advantages: lower header overhead compared to DSR. Disadvantages: Relies on intermediate nodes maintaining accurate routing information, subject to routing loops.
    *   **DSR:** Uses RREQ/RREP for route discovery, source routing (complete path in the header), uses RERR for route maintenance. Advantages: Simple to implement, avoids routing loops. Disadvantages: High header overhead, susceptible to stale route entries in the route cache.

**4.  Under what circumstances would you choose DSDV over AODV or DSR, and why?**

**Answer:**  DSDV might be preferred in a *small*, *relatively static* MANET where low latency is crucial and power consumption is less of a concern. DSDV's proactive nature provides routes quickly, but its overhead makes it unsuitable for larger, more dynamic networks where AODV or DSR would be better choices.

**5.  Describe how node mobility impacts the performance of MANET routing protocols. How can protocols be designed to mitigate the effects of mobility?**

**Answer:** Node mobility causes frequent route breaks, increased routing overhead, and reduced packet delivery ratio. Protocols can mitigate these effects through:
    *   **Route maintenance mechanisms:** Quickly detect and repair broken routes (e.g., RERR messages in AODV and DSR).
    *   **Multipath routing:** Maintain multiple paths to a destination to provide redundancy.
    *   **Link stability prediction:** Choose routes based on the predicted stability of links.
    *   **Faster route discovery:** Employ optimized route discovery algorithms to quickly find alternative routes.
    *   **Adaptive beaconing:** Adjust beaconing frequency based on node mobility.

**6.  What are the trade-offs between energy consumption and routing overhead in MANETs? How can routing protocols be designed to minimize energy consumption?**

**Answer:** Increasing routing overhead generally means higher energy consumption, as nodes spend more time transmitting and processing control packets.  Protocols can minimize energy consumption by:
    *   **Reducing routing overhead:** Using reactive protocols instead of proactive protocols, using localized route discovery, and optimizing control message sizes.
    *   **Minimizing packet retransmissions:** Using reliable transport protocols and error correction codes.
    *   **Using sleep modes:**  Allowing nodes to enter low-power sleep modes when idle.
    *   **Load balancing:** Distributing traffic evenly across the network to avoid overloading any single node.
    *   **Topology control:** Managing the network topology to minimize the number of hops required to reach a destination.

## Important Points to Remember:

*   **MANETs are inherently dynamic:** This dynamism affects all aspects of routing.
*   **Power is a scarce resource:** Efficient routing is vital for prolonging network lifetime.
*   **Security is paramount:** MANETs are vulnerable, so security mechanisms must be integrated into routing protocols.
*   **The best routing protocol depends on the specific application requirements and network conditions.** Always consider network size, node mobility, traffic patterns, and power constraints.
