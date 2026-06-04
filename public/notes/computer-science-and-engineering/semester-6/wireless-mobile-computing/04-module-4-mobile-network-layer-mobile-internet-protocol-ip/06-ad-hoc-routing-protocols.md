---
title: "Ad-hoc routing protocols;"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 4: Mobile network layer – Mobile Internet Protocol (IP)"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb93"
status: "completed"
scrapedAt: "2026-05-20T16:58:10.575Z"
---
# WIRELESS & MOBILE COMPUTING - Module 4: Mobile Network Layer - Mobile IP: Ad-hoc Routing Protocols

## 1. Introduction to Ad-hoc Routing Protocols

*   **Definition:** Ad-hoc routing protocols are designed for Mobile Ad-hoc Networks (MANETs), which are self-configuring networks of mobile devices connected wirelessly without a fixed infrastructure like base stations or access points. These protocols enable nodes to discover routes to each other and maintain communication as they move around.

*   **Key Characteristics of MANETs:**
    *   **Dynamic Topology:** Nodes are mobile, causing frequent changes in network topology.
    *   **Limited Bandwidth:** Wireless links have limited bandwidth compared to wired networks.
    *   **Energy Constraints:** Mobile devices operate on batteries, so energy efficiency is crucial.
    *   **Security Vulnerabilities:** Wireless links are more susceptible to eavesdropping and attacks.
    *   **Multi-hop routing:** Nodes may need to relay packets to reach distant destinations.
    *   **Infrastructureless:** No fixed infrastructure is required.

*   **Why Ad-hoc Routing is Necessary:** Traditional routing protocols (like RIP or OSPF) are not suitable for MANETs due to their reliance on fixed infrastructure and relatively stable topologies. Ad-hoc protocols are designed to handle the dynamic nature and resource constraints of MANETs.

## 2. Learning Outcomes

*   **Understand the challenges and requirements of ad-hoc routing.**
*   **Describe the main types of ad-hoc routing protocols (proactive, reactive, and hybrid).**
*   **Explain the operation of specific ad-hoc routing protocols like DSDV, AODV, and DSR.**
*   **Compare and contrast the performance characteristics of different ad-hoc routing protocols.**
*   **Identify factors affecting the performance of ad-hoc routing protocols.**
*   **Describe the security considerations for Ad-hoc routing protocols**

## 3. Challenges and Requirements of Ad-hoc Routing

*   **Dynamic Topology:**  The constant movement of nodes leads to frequent route changes, requiring protocols to be adaptive and resilient.

*   **Routing Overhead:** Control packets (e.g., route discovery packets) consume bandwidth and energy. Minimizing overhead is crucial.

*   **Route Discovery and Maintenance:** Protocols must efficiently discover new routes and maintain existing ones in the face of topology changes.

*   **Energy Efficiency:**  Mobile devices have limited battery life, so protocols should minimize energy consumption.

*   **Scalability:** Protocols should perform well as the network size increases.

*   **Security:**  Protecting routes from malicious attacks and ensuring data integrity is essential.

*   **Quality of Service (QoS):** Providing guarantees about bandwidth, delay, and packet loss is challenging in dynamic environments.

## 4. Types of Ad-hoc Routing Protocols

Ad-hoc routing protocols can be classified into three main categories:

*   **Proactive (Table-Driven) Routing Protocols:**
    *   Maintain routing information for all destinations in the network at all times.
    *   Each node stores routing tables that are continuously updated.
    *   **Advantages:** Low latency for packet delivery since routes are always available.
    *   **Disadvantages:** High overhead due to continuous updates, even when there's no data to send.  Less suitable for larger, highly dynamic networks.
    *   **Example:** Destination-Sequenced Distance-Vector (DSDV)

*   **Reactive (On-Demand) Routing Protocols:**
    *   Discover routes only when needed.
    *   When a node needs to send data to a destination, it initiates a route discovery process.
    *   **Advantages:** Low overhead when there's little traffic. More suitable for larger and highly dynamic networks.
    *   **Disadvantages:** Higher latency due to the need to discover routes before sending data.
    *   **Examples:** Ad-hoc On-demand Distance Vector (AODV), Dynamic Source Routing (DSR)

*   **Hybrid Routing Protocols:**
    *   Combine elements of both proactive and reactive routing.
    *   They typically use a proactive approach within a local region and a reactive approach for more distant destinations.
    *   **Advantages:**  Attempt to balance the trade-offs between overhead and latency.
    *   **Disadvantages:** More complex to implement and manage.
    *   **Example:** Zone Routing Protocol (ZRP)

## 5. Specific Ad-hoc Routing Protocols

### 5.1. Destination-Sequenced Distance-Vector (DSDV)

*   **Type:** Proactive
*   **Description:**
    *   Each node maintains a routing table with the best route to each destination.
    *   Each entry in the routing table is tagged with a *sequence number* created by the destination node. Higher sequence numbers indicate more recent routes.
    *   Updates are propagated periodically or when changes occur, using distance vectors.
    *   Sequence numbers are used to prevent routing loops.
*   **Operation:**
    *   Nodes periodically broadcast their routing tables.
    *   Each routing table entry contains:
        *   Destination address
        *   Next hop address
        *   Distance (number of hops)
        *   Sequence number assigned by the destination
    *   Nodes update their routing tables based on received updates, choosing routes with the lowest distance and highest sequence number.
*   **Advantages:**
    *   Simple to implement.
    *   Routes are readily available.
*   **Disadvantages:**
    *   High overhead due to periodic updates.
    *   Scalability issues for large networks.

### 5.2. Ad-hoc On-demand Distance Vector (AODV)

*   **Type:** Reactive
*   **Description:**
    *   Routes are established only when needed.
    *   Uses *route request (RREQ)* and *route reply (RREP)* control messages for route discovery.
    *   Maintains route validity using *route error (RERR)* messages.
*   **Operation:**
    1.  **Route Discovery:**
        *   When a source node wants to send data to a destination and doesn't have a route, it broadcasts an RREQ.
        *   Intermediate nodes forward the RREQ until it reaches the destination or an intermediate node with a valid route to the destination.
        *   The RREQ includes the source address, destination address, sequence numbers, and hop count.
    2.  **Route Reply:**
        *   The destination or an intermediate node with a valid route generates an RREP and sends it back to the source node along the reverse path of the RREQ.
        *   Intermediate nodes update their routing tables with the route information.
    3.  **Route Maintenance:**
        *   If a link breaks, the node detects the break and generates an RERR message.
        *   The RERR message is propagated to the source node, invalidating the route.
        *   The source node then initiates a new route discovery if needed.
*   **Advantages:**
    *   Lower overhead compared to DSDV (only discovers routes when needed).
    *   Adaptable to dynamic topologies.
*   **Disadvantages:**
    *   Higher latency due to route discovery process.
    *   Potential for route discovery storms (broadcasting RREQs can consume significant bandwidth).

### 5.3. Dynamic Source Routing (DSR)

*   **Type:** Reactive
*   **Description:**
    *   Similar to AODV in being reactive but uses *source routing*.
    *   The source node determines the entire path to the destination and includes the complete sequence of hops in the packet header.
    *   Nodes do not maintain routing tables; they simply forward packets based on the source route.
*   **Operation:**
    1.  **Route Discovery:**
        *   The source node broadcasts an RREQ containing the destination address and a unique ID.
        *   Intermediate nodes append their own address to the RREQ and forward it.
        *   When the RREQ reaches the destination, it contains the complete path taken.
    2.  **Route Reply:**
        *   The destination sends an RREP back to the source node, containing the recorded path from the RREQ.
        *   The source node caches the route in its *route cache*.
    3.  **Data Transmission:**
        *   The source node includes the complete path in the header of each data packet.
        *   Intermediate nodes simply forward the packet to the next hop in the path.
    4.  **Route Maintenance:**
        *   If a link breaks, the node sends a *route error* message to the source node.
        *   The source node removes the broken route from its cache and may initiate a new route discovery.
*   **Advantages:**
    *   Simple to implement.
    *   Avoids routing loops.
    *   Can discover multiple routes to a destination.
*   **Disadvantages:**
    *   High overhead due to large packet headers (containing the entire source route).
    *   Stale routes can remain in the route cache.

## 6. Comparison of Ad-hoc Routing Protocols

| Feature           | DSDV                           | AODV                           | DSR                             |
| ----------------- | ------------------------------ | ------------------------------ | -------------------------------- |
| Protocol Type      | Proactive                      | Reactive                       | Reactive                         |
| Route Discovery   | Periodic updates               | On-demand (RREQ/RREP)           | On-demand (RREQ/RREP)             |
| Route Maintenance  | Periodic updates               | RERR messages                  | RERR messages                   |
| Routing Table      | Maintained at each node       | Maintained at each node       | Not maintained at intermediate nodes, only at source|
| Overhead          | High (periodic updates)        | Moderate (on-demand discovery) | High (large packet headers)      |
| Packet Header Size | Small                          | Small                          | Large (source route)             |
| Route Loops       | Avoided with sequence numbers   | Avoided with sequence numbers   | Avoided due to source routing  |
| Complexity        | Simple                         | Moderate                       | Simple                           |
| Scalability       | Limited                        | Better than DSDV               | Better than DSDV                 |

## 7. Factors Affecting the Performance of Ad-hoc Routing Protocols

*   **Mobility:**  Higher mobility leads to more frequent route changes, increasing overhead and latency.
*   **Network Density:**  Denser networks can provide more alternative routes, but also increase contention and interference.
*   **Traffic Load:** Higher traffic load increases congestion and packet loss.
*   **Network Size:** Larger networks require more efficient route discovery and maintenance mechanisms.
*   **Node Capabilities:**  Battery life, processing power, and memory capacity of nodes affect their ability to participate in routing.
*   **Channel Quality:**  Wireless channel conditions (e.g., interference, fading) affect link reliability and packet delivery.
*   **Security threats:**  Malicious nodes can introduce false routing information, disrupt routes, or eavesdrop on traffic.

## 8. Security Considerations for Ad-hoc Routing Protocols

MANETs are particularly vulnerable to security threats due to the open and dynamic nature of the wireless environment. Key security considerations include:

*   **Eavesdropping:** Wireless communication is susceptible to eavesdropping, requiring encryption to protect data confidentiality.
*   **Impersonation:** Malicious nodes can impersonate legitimate nodes to inject false routing information or intercept traffic.
*   **Denial-of-Service (DoS) Attacks:** Attackers can flood the network with bogus control packets or data packets, disrupting routing and communication.
*   **Routing Attacks:**
    *   **Blackhole Attack:** A malicious node advertises itself as having the shortest path to all destinations, attracting traffic and then dropping the packets.
    *   **Grayhole Attack:** A node selectively drops packets, making it difficult to detect.
    *   **Wormhole Attack:** Two colluding malicious nodes create a tunnel to bypass several nodes in the network, potentially disrupting routing.
*   **Security Measures:**
    *   **Authentication:**  Verifying the identity of nodes participating in routing. Cryptographic techniques like digital signatures and certificates can be used.
    *   **Integrity Checks:**  Ensuring that routing messages have not been tampered with.  Hash functions and Message Authentication Codes (MACs) can be used.
    *   **Intrusion Detection Systems (IDS):** Monitoring network traffic for suspicious activity and detecting potential attacks.
    *   **Secure Routing Protocols:**  Designing routing protocols with built-in security mechanisms (e.g., secure versions of AODV or DSR).  This often involves integrating cryptographic primitives into the protocol operation.
    *   **Trust Management:**  Establishing trust relationships among nodes based on their behavior and reputation.

## 9. Practice Questions

1.  **Explain the difference between proactive and reactive routing protocols. Give an example of each.**
    *   *Answer:* Proactive protocols maintain routing information for all destinations at all times, leading to low latency but high overhead. Example: DSDV. Reactive protocols discover routes only when needed, resulting in lower overhead but higher latency. Example: AODV.

2.  **Describe how AODV handles route discovery and route maintenance.**
    *   *Answer:* AODV uses RREQ and RREP messages for route discovery. When a route is needed, the source broadcasts an RREQ. The destination or an intermediate node with a valid route replies with an RREP. Route maintenance is done using RERR messages, which are sent when a link breaks, invalidating the route at the source.

3.  **What are the advantages and disadvantages of DSR compared to AODV?**
    *   *Answer:* Advantages of DSR: Simplicity, avoidance of routing loops, and ability to discover multiple routes. Disadvantages: High overhead due to large packet headers containing the source route, and potential for stale routes in the route cache.

4.  **How does mobility impact the performance of ad-hoc routing protocols?**
    *   *Answer:* Higher mobility leads to more frequent route changes, increasing overhead (due to route discovery and maintenance) and latency (as routes break and need to be re-established).

5.  **What are some common security threats in MANETs, and how can they be mitigated?**
     *   *Answer:* Common threats include eavesdropping, impersonation, DoS attacks, blackhole attacks, and grayhole attacks. Mitigation techniques include authentication, integrity checks, intrusion detection systems, secure routing protocols, and trust management.

6.  **What is a hybrid routing protocol, and what are its benefits? Give one example.**
     *   *Answer:* A hybrid routing protocol combines proactive and reactive approaches.  It might use a proactive approach within a small local area, and a reactive approach for communication outside that area. The benefit is attempting to balance overhead with latency, giving better scaling and performance than either pure proactive or reactive methods.  An example is Zone Routing Protocol (ZRP).

## 10. Important Points to Remember

*   MANETs are characterized by their dynamic topology, limited bandwidth, and energy constraints.
*   Ad-hoc routing protocols are essential for enabling communication in MANETs.
*   Proactive protocols (e.g., DSDV) maintain routes continuously, while reactive protocols (e.g., AODV, DSR) discover routes on demand.
*   Hybrid protocols (e.g., ZRP) attempt to balance the trade-offs between proactive and reactive approaches.
*   Mobility, network density, traffic load, network size, node capabilities, and channel quality significantly affect the performance of ad-hoc routing protocols.
*   Security is a critical concern in MANETs, and appropriate security measures are needed to protect against various attacks.
*   The choice of the appropriate routing protocol depends on the specific application and network characteristics.
