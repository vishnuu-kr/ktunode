---
title: "Routing"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb89"
status: "completed"
scrapedAt: "2026-05-20T16:58:04.147Z"
---
## Module 3: Spread Spectrum - Direct Sequence - Routing

These notes cover the topic of Routing in the context of Direct Sequence Spread Spectrum (DSSS) and more broadly, wireless and mobile computing.

**Learning Outcomes:**

*   Understand the challenges of routing in wireless ad-hoc networks.
*   Describe and compare different routing protocols used in wireless networks (Proactive, Reactive, Hybrid).
*   Explain the working principles of specific routing protocols like DSDV, AODV, and DSR.
*   Analyze the performance of different routing protocols based on key metrics (e.g., latency, throughput, overhead).
*   Discuss the impact of mobility on routing protocols.
*   Identify potential security vulnerabilities related to routing in wireless networks.

---

**1. Challenges of Routing in Wireless Ad-Hoc Networks**

Wireless ad-hoc networks (WANETs) present unique challenges for routing compared to wired networks.

*   **Dynamic Topology:**
    *   Nodes can move freely, leading to frequent changes in network topology.
    *   Link failures and path breaks are common due to node mobility, interference, or power limitations.
    *   **Impact:** Routing protocols must adapt quickly to these changes.

*   **Limited Bandwidth:**
    *   Wireless channels have lower bandwidth compared to wired links.
    *   Sharing the channel between multiple nodes introduces further limitations.
    *   **Impact:** Routing protocols should minimize control overhead to conserve bandwidth.

*   **Energy Constraints:**
    *   Nodes are typically battery-powered and have limited energy resources.
    *   **Impact:** Routing protocols must be energy-efficient to prolong network lifetime.  Consider energy-aware routing metrics.

*   **Interference and Fading:**
    *   Wireless signals are susceptible to interference from other devices and fading due to obstacles.
    *   **Impact:** Routing protocols need to select reliable paths to ensure successful data delivery.

*   **Security:**
    *   Wireless communication is vulnerable to eavesdropping and malicious attacks.
    *   **Impact:** Routing protocols should incorporate security mechanisms to protect against unauthorized access and data manipulation.

*   **Hidden and Exposed Terminal Problems:**
    *   **Hidden Terminal:** Two nodes may be out of range of each other but within range of a common node, leading to collisions.
    *   **Exposed Terminal:** A node may be prevented from transmitting because a nearby node is transmitting, even if the two transmissions would not interfere with each other.
    *   **Impact:** These problems degrade network performance and require specialized MAC layer mechanisms (like RTS/CTS) and routing protocols to mitigate.

*   **Scalability:**
    *   Routing protocols need to scale efficiently to accommodate a large number of nodes.
    *   **Impact:** Protocols that rely on flooding or maintaining global topology information may not be suitable for large networks.

**2. Classification of Routing Protocols**

Wireless routing protocols can be broadly classified into three categories:

*   **Proactive (Table-Driven) Routing Protocols:**
    *   Each node maintains routing tables that store information about all other nodes in the network.
    *   Tables are updated periodically or when topology changes are detected.
    *   **Pros:** Low latency, as routes are readily available.
    *   **Cons:** High overhead, as tables are maintained even when no data is being transmitted. Not suitable for highly mobile or large networks.
    *   **Example:** Destination-Sequenced Distance Vector (DSDV).

*   **Reactive (On-Demand) Routing Protocols:**
    *   Routes are discovered only when needed. A node initiates a route discovery process when it wants to send data to a destination for which it doesn't have a route.
    *   **Pros:** Low overhead, as routes are created only when required. Suitable for highly mobile or large networks.
    *   **Cons:** High latency, as route discovery can take time.
    *   **Example:** Ad-hoc On-Demand Distance Vector (AODV), Dynamic Source Routing (DSR).

*   **Hybrid Routing Protocols:**
    *   Combine the advantages of proactive and reactive approaches.
    *   Use proactive routing within a certain neighborhood and reactive routing for distant nodes.
    *   **Pros:** Balance between overhead and latency.
    *   **Cons:** More complex to implement and manage.
    *   **Example:** Zone Routing Protocol (ZRP).

**3. Specific Routing Protocols: DSDV, AODV, DSR**

*   **Destination-Sequenced Distance Vector (DSDV): Proactive**

    *   Each node maintains a routing table with the best route to all other nodes in the network, along with a *sequence number* for each destination.
    *   Sequence numbers are used to distinguish between stale and new routes, preventing routing loops.
    *   Nodes periodically broadcast their routing tables to their neighbors.
    *   Updates can be either *full dumps* (entire routing table) or *incremental updates* (only changes).
    *   **Strengths:** Simple to implement, readily available routes.
    *   **Weaknesses:** High overhead, not suitable for highly mobile networks, susceptible to stale routing information.

    *   **Example:**  Node A wants to send a packet to Node C. If Node A's routing table indicates that the shortest path to C is via Node B with sequence number 5, A will forward the packet to B. If A receives an update indicating a better route to C via Node D with sequence number 6, A will update its routing table.

*   **Ad-hoc On-Demand Distance Vector (AODV): Reactive**

    *   Routes are discovered on demand using a *route discovery* process.
    *   A node that needs a route to a destination broadcasts a *Route Request (RREQ)* message.
    *   Nodes receiving the RREQ forward it until it reaches the destination or an intermediate node that has a valid route to the destination.
    *   The destination (or intermediate node) replies with a *Route Reply (RREP)* message, which is unicast back to the source along the reverse path of the RREQ.
    *   Nodes along the path update their routing tables to include the route to the destination.
    *   *Route Error (RERR)* messages are used to invalidate broken routes.  Nodes that detect a link break send RERR messages to upstream nodes that use the broken link.
    *   **Strengths:** Low overhead, suitable for mobile networks.
    *   **Weaknesses:** Higher latency during route discovery, susceptible to routing loops (mitigated by sequence numbers).

    *   **Example:** Node A wants to send a packet to Node C, but doesn't have a route. A broadcasts a RREQ. Node B receives the RREQ and forwards it. Node C receives the RREQ. C unicasts a RREP back to A along the path C-B-A. Nodes B and A update their routing tables.

*   **Dynamic Source Routing (DSR): Reactive**

    *   Similar to AODV, routes are discovered on demand.
    *   However, DSR uses *source routing*. The entire route is included in the packet header.
    *   During route discovery, the RREQ accumulates the addresses of the nodes it traverses.
    *   The RREP contains the complete path from the source to the destination.
    *   Nodes cache routes learned from RREQs and RREPs.
    *   *Route Error (RERR)* messages are used to invalidate broken routes.  The node originating the packet with a broken route segment is responsible for finding a new path.
    *   **Strengths:** Simple to implement, avoids routing loops, can use multiple paths to a destination.
    *   **Weaknesses:** High overhead due to large packet headers, stale route caches can cause performance degradation.

    *   **Example:** Node A wants to send a packet to Node C. A broadcasts a RREQ. When the RREQ reaches C through the path A-B-C, C sends a RREP back to A containing the path [A, B, C]. Subsequent packets from A to C will have the header [A, B, C]. If the link B-C breaks, B sends a RERR to A. A then initiates a new route discovery process.

**4. Performance Metrics for Routing Protocols**

*   **Packet Delivery Ratio (PDR):** The ratio of successfully delivered data packets to the total number of sent data packets. Higher PDR indicates better reliability.

*   **Average End-to-End Delay (Latency):** The average time it takes for a data packet to travel from the source to the destination. Lower delay is desirable.

*   **Throughput:** The rate at which data is successfully delivered over the network. Higher throughput is preferred.

*   **Routing Overhead:** The amount of control traffic (e.g., RREQs, RREPs, RERRs) generated by the routing protocol. Lower overhead is better. Can be measured in number of control packets or bytes.

*   **Energy Consumption:** The average energy consumed by each node in the network due to routing operations. Lower energy consumption is desirable for longer network lifetime.

*   **Route Acquisition Time:** The time required to find a route from the source to the destination.  Critical for reactive protocols.

*   **Route Optimality:**  How close the selected route is to the shortest path (in terms of hops or other metrics).

**5. Impact of Mobility on Routing Protocols**

Mobility significantly impacts the performance of routing protocols.

*   **Increased Route Breaks:** Higher mobility leads to more frequent link failures and path breaks, requiring more route discoveries and updates.

*   **Increased Routing Overhead:** Route updates and discoveries generate more control traffic, consuming bandwidth and energy.

*   **Reduced Packet Delivery Ratio:** Unstable routes can cause packets to be lost or delayed, reducing PDR.

*   **Higher Latency:** Route discovery and repair mechanisms increase the average end-to-end delay.

*   **Protocol Suitability:**
    *   **Proactive protocols** struggle with high mobility due to the constant need to update routing tables.
    *   **Reactive protocols** are better suited for mobile networks, but frequent route discoveries can still be a bottleneck.
    *   Mobility-aware protocols, which adapt their behavior based on node mobility patterns, can improve performance.

**6. Security Vulnerabilities Related to Routing in Wireless Networks**

Wireless routing protocols are vulnerable to various security attacks.

*   **Blackhole Attack:** A malicious node advertises itself as having the shortest path to all destinations, attracting traffic and then dropping packets.

*   **Grayhole Attack:** Similar to blackhole, but the malicious node selectively drops packets, making it harder to detect.

*   **Wormhole Attack:** Two malicious nodes create a tunnel between them, forwarding packets directly across the tunnel and bypassing legitimate nodes.

*   **Sybil Attack:** A malicious node creates multiple identities, allowing it to control a larger portion of the network and disrupt routing.

*   **Denial-of-Service (DoS) Attack:** Overwhelming the network with control traffic, preventing legitimate nodes from communicating.

*   **Routing Table Poisoning:**  Malicious nodes inject false routing information into the network, disrupting routes and causing traffic to be misdirected.

*   **Authentication Spoofing:** Impersonating a legitimate node to gain access to the network and inject malicious data.

**Mitigation Techniques:**

*   **Authentication:** Using cryptographic mechanisms to verify the identity of nodes and prevent unauthorized access.
*   **Intrusion Detection Systems (IDS):** Monitoring network traffic for suspicious behavior and detecting attacks.
*   **Trust Management:** Building trust relationships between nodes based on their behavior and reputation.
*   **Secure Routing Protocols:** Designing routing protocols that incorporate security mechanisms to protect against attacks.  Example: ARIADNE (secure DSR variant).
*   **Data Encryption:** Encrypting data packets to prevent eavesdropping and data manipulation.

---

**Practice Questions and Exercises:**

1.  **Question:** Explain the key differences between proactive and reactive routing protocols. Provide an example of each.
    *   **Answer:** Proactive protocols maintain routing tables proactively, leading to low latency but high overhead (e.g., DSDV). Reactive protocols discover routes on demand, resulting in low overhead but higher latency (e.g., AODV).

2.  **Question:** How does AODV handle broken links?
    *   **Answer:** When a node detects a broken link, it sends a RERR message to upstream nodes that use the broken link. These nodes then invalidate the route and may initiate a new route discovery if needed.

3.  **Question:** What are the advantages and disadvantages of source routing as used in DSR?
    *   **Answer:** Advantages: Simple to implement, avoids routing loops, can use multiple paths. Disadvantages: High overhead due to large packet headers, stale route caches.

4.  **Question:** What is a blackhole attack, and how can it affect a wireless network?
    *   **Answer:** A blackhole attack is when a malicious node advertises itself as having the shortest path to all destinations, attracting traffic and then dropping it. This can severely disrupt network communication and prevent data delivery.

5.  **Exercise:** Consider a small ad-hoc network with 5 nodes (A, B, C, D, E). A wants to send data to E.  Draw a diagram illustrating the route discovery process in AODV. Assume the initial route is A-B-C-E. Then, suppose the link C-E breaks. Illustrate how AODV recovers from this broken link.

6.  **Exercise:**  Research and compare the energy consumption characteristics of DSDV, AODV, and DSR. What factors contribute to their different energy consumption profiles?

---

**Important Points to Remember:**

*   Wireless routing protocols are designed to address the unique challenges of ad-hoc networks, such as dynamic topology, limited bandwidth, and energy constraints.
*   Proactive protocols maintain routing tables proactively, while reactive protocols discover routes on demand.
*   DSDV, AODV, and DSR are widely used routing protocols with different characteristics.
*   Performance metrics like PDR, latency, throughput, and overhead are used to evaluate routing protocols.
*   Mobility significantly impacts the performance of routing protocols, requiring adaptive mechanisms.
*   Security vulnerabilities, such as blackhole attacks, can compromise the integrity of routing in wireless networks.  Employing security measures is crucial.
*   The choice of a routing protocol depends on the specific requirements of the network, such as size, mobility, and energy constraints.

These notes provide a solid foundation for understanding routing in the context of wireless and mobile computing, particularly within the scope of spread spectrum techniques like Direct Sequence Spread Spectrum.  Remember to consult additional resources and research papers for a deeper understanding of this complex and evolving field.
