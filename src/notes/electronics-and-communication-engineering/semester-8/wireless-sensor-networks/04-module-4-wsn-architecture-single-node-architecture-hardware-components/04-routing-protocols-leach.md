---
title: "Routing protocols-LEACH"
subject: "WIRELESS SENSOR NETWORKS"
module: "Module 4: WSN architecture: Single node architecture: Hardware components"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5ae"
status: "completed"
scrapedAt: "2026-05-23T20:16:28.801Z"
---
# WIRELESS SENSOR NETWORKS - Module 4: WSN Architecture: Single Node Architecture: Hardware Components

## Topic: Routing Protocols - LEACH

This module delves into the fundamental building blocks of a Wireless Sensor Network (WSN), focusing on the architecture of a single sensor node and the crucial aspect of routing protocols. Specifically, we will explore the **Low-Energy Adaptive Clustering Hierarchy (LEACH)** protocol, a pioneering and influential routing protocol for WSNs.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Explain the need for energy-efficient routing in WSNs.**
*   **Describe the operation of the LEACH protocol in detail.**
*   **Identify the advantages and disadvantages of LEACH.**
*   **Compare LEACH with other fundamental routing approaches.**
*   **Understand the role of cluster heads in LEACH.**
*   **Analyze the impact of LEACH on network lifetime.**

---

### 2. Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO2: Illustrate various concepts on the basics of wireless sensor networks and mobile ad hoc networks. (Knowledge Level: K2)**
    *   Understanding LEACH provides a practical example of basic WSN concepts like clustering and multi-hop communication.
*   **CO4: Analyze the network architecture and the communication protocols of wireless sensor networks (Knowledge Level: K4)**
    *   LEACH is a key communication protocol, and analyzing its mechanisms allows for a deeper understanding of WSN network architecture and its challenges.

---

### 3. Introduction to Routing in WSNs

In a WSN, sensor nodes are typically battery-powered and deployed in large numbers. They are responsible for sensing data and transmitting it to a base station (sink). Efficient routing is paramount to prolonging the network's operational lifetime. Without effective routing, nodes close to the base station could quickly deplete their energy and render the network defunct.

**Key Concepts:**

*   **Data Collection:** Gathering information from the environment.
*   **Data Forwarding:** Transmitting collected data.
*   **Energy Efficiency:** Minimizing energy consumption during communication and computation.
*   **Network Lifetime:** The duration for which the WSN can function effectively.
*   **Base Station (Sink):** A fixed or mobile node responsible for collecting data from all sensor nodes.

**Challenge:**

The primary challenge in WSN routing is **energy conservation**. Nodes have limited battery power, and communication is a significant energy drain. Traditional routing protocols designed for general wireless networks are often unsuitable for WSNs due to their stringent energy constraints.

---

### 4. LEACH: Low-Energy Adaptive Clustering Hierarchy

LEACH is a **cluster-based routing protocol** designed to reduce energy consumption in WSNs. It aims to distribute the energy load more evenly among the nodes by forming clusters and electing cluster heads (CHs).

**Core Idea:**

Instead of all nodes directly transmitting data to the base station, LEACH organizes nodes into **clusters**. Within each cluster, nodes aggregate their sensed data and transmit it to their designated CH. The CH then aggregates the data from its cluster members and transmits it to the base station. This reduces the number of long-distance transmissions, thereby saving energy.

**Key Features of LEACH:**

*   **Clustering:** Nodes self-organize into clusters.
*   **Cluster Heads (CHs):** Nodes elected to collect and aggregate data from their cluster members.
*   **Rotation of CHs:** CHs are rotated periodically to distribute energy consumption.
*   **Data Aggregation:** CHs combine data from multiple nodes, reducing the amount of data transmitted to the base station.
*   **Adaptive Transmission Power:** Nodes adjust their transmission power based on their distance to the CH or base station.

---

### 5. LEACH Operation - Stages and Phases

LEACH operates in distinct **rounds**, and each round is divided into two phases:

#### 5.1. Setup Phase

The purpose of the setup phase is to form clusters and select cluster heads.

1.  **CH Election (Randomized):**
    *   Each node generates a random number between 0 and 1.
    *   A node becomes a potential CH if its random number is less than a threshold, $p$.
    *   The threshold $p$ determines the desired percentage of CHs in the network.
    *   **Formula for Probability of becoming a CH:**
        $P(node \in CH) = p$
    *   The ideal number of CHs is often set to be around 5% of the total number of nodes in the network.

2.  **CH Announcement:**
    *   Nodes that have been elected as CHs broadcast an **announcement message** (e.g., `CLUSTER-HEAD-ANNOUNCE`) to all other nodes.

3.  **Cluster Formation:**
    *   Non-CH nodes receive the announcement messages from nearby CHs.
    *   Each non-CH node decides which CH to join based on the **received signal strength** of the announcement message (typically the strongest signal).
    *   The non-CH node then sends a **join request message** (e.g., `JOIN-REQUEST`) to its chosen CH.

4.  **Cluster Head Confirmation:**
    *   Upon receiving join requests, each CH acknowledges the join requests from its members by sending a **confirmation message** (e.g., `CLUSTER-JOIN-CONFIRM`). This confirms to the node that it has successfully joined the cluster.
    *   CHs maintain a list of their cluster members.

#### 5.2. Steady-State Phase

The purpose of the steady-state phase is to transmit sensed data to the base station. This phase is typically longer than the setup phase to amortize the overhead of cluster formation.

1.  **Data Sensing and Transmission to CH:**
    *   Each non-CH node senses the environment and aggregates its sensed data.
    *   Nodes in a cluster transmit their aggregated data to their respective CH using **Time Division Multiple Access (TDMA)** scheduling.
    *   Each CH assigns a **TDMA slot** to each of its member nodes. This prevents collisions within a cluster.

2.  **Data Aggregation at CH:**
    *   Each CH receives data from its cluster members during their assigned TDMA slots.
    *   The CH then aggregates all the received data into a single message. This aggregation process can involve simple averaging, summing, or more complex fusion techniques.

3.  **Data Transmission to Base Station:**
    *   Once all data for the round has been received, the CH transmits the aggregated data to the base station.
    *   LEACH utilizes **adaptive transmission power**. Nodes adjust their transmission power to reach the CH or base station with the minimum required power. This is a crucial energy-saving feature.
    *   In the original LEACH, CHs broadcast their aggregated data to the base station. Subsequent versions might introduce multi-hop routing from CHs to the base station if the base station is far away.

**Cycle Repetition:**

After the steady-state phase, the network returns to the setup phase for the next round. The process of electing new CHs is repeated, and a new set of clusters is formed. This rotation helps distribute the energy burden of being a CH across different nodes, preventing premature depletion of any single node's battery.

---

### 6. Key Concepts and Definitions

*   **Cluster:** A group of sensor nodes that coordinate their data collection and transmission through a designated cluster head.
*   **Cluster Head (CH):** A node elected within a cluster responsible for receiving data from its members, aggregating it, and transmitting it to the base station.
*   **Non-Cluster Head Node:** A regular sensor node that senses data and sends it to its assigned cluster head.
*   **TDMA (Time Division Multiple Access):** A channel access method that divides the time available for communication into slots, assigning each node a specific slot to transmit. This prevents intra-cluster collisions.
*   **Adaptive Transmission Power:** The ability of a node to dynamically adjust its radio transmission power based on the distance to the intended receiver, minimizing energy usage.
*   **Round:** A complete cycle of LEACH operation, consisting of a setup phase and a steady-state phase.

---

### 7. Advantages of LEACH

*   **Reduced Energy Consumption:** By minimizing direct transmissions to the base station and utilizing data aggregation, LEACH significantly reduces the overall energy consumption of the network.
*   **Extended Network Lifetime:** The rotation of CHs distributes the energy load, preventing nodes from becoming bottlenecks and prolonging the network's operational lifespan.
*   **Scalability:** LEACH can be scaled to accommodate a large number of sensor nodes.
*   **Self-Organization:** Nodes automatically form clusters without requiring manual configuration.
*   **Data Aggregation:** Reduces redundant data transmission, saving bandwidth and energy.

---

### 8. Disadvantages of LEACH

*   **Overhead of CH Election:** The initial setup phase, involving message broadcasts and join requests, can introduce overhead and consume energy.
*   **Random CH Selection:** The random selection of CHs might not always result in an optimal distribution of CHs, potentially leading to some clusters being too large or too small.
*   **No Guarantee of Optimal Clusters:** LEACH does not guarantee that clusters will be perfectly balanced in terms of node count or proximity to the CH.
*   **Dependence on CH Performance:** If a CH fails, its entire cluster can be affected.
*   **Assumption of Symmetric Link:** The original LEACH assumes that the transmission power required to reach the base station from any node is the same as that required to reach the node from the base station, which may not always hold true.
*   **Limited to Single-Hop to Base Station:** In its basic form, LEACH assumes CHs transmit directly to the base station. If the base station is far away, this can still be energy-intensive for CHs.

---

### 9. Variations and Extensions of LEACH

LEACH has inspired numerous variants and extensions to address its limitations. Some notable ones include:

*   **LEACH-C (LEACH-Centralized):** This variant uses a centralized approach for CH selection. A base station or a cluster coordinator determines the optimal CHs and assigns nodes to clusters. This can lead to better energy distribution but introduces a single point of failure and higher communication overhead to the center.
*   **LEACH-B (LEACH-Base):** This version modifies the CH selection probability to account for residual energy, favoring nodes with more battery life.
*   **TEEN (Threshold-sensitive Energy Efficient Sensor Network Protocol):** Designed for monitoring time-critical events, TEEN uses a threshold-based approach for data reporting.
*   **APTEEN (Adaptive Threshold-sensitive Energy Efficient Sensor Network Protocol):** An enhancement of TEEN that combines threshold-based and cluster-based approaches.

---

### 10. Comparison with Other Routing Approaches

While LEACH is cluster-based, other WSN routing paradigms exist:

*   **Flooding:** Every node transmits data to all its neighbors. This is simple but highly inefficient in terms of energy.
*   **Gossiping:** Similar to flooding but with a probabilistic approach to forwarding messages. Reduces redundancy but can still be energy-intensive.
*   **Data-Centric Routing (e.g., Directed Diffusion):** Focuses on the data itself rather than specific nodes. Data interests are diffused, and nodes that can satisfy these interests report back. LEACH can be seen as a precursor or component of more complex data-centric approaches.
*   **Hierarchical Routing (e.g., LEACH):** Organizes nodes into hierarchies (clusters) to reduce communication overhead and improve energy efficiency.

---

### 11. Important Points to Remember

*   **LEACH is a proactive, cluster-based routing protocol.**
*   **The primary goal of LEACH is energy conservation.**
*   **The protocol operates in rounds, each with a setup and a steady-state phase.**
*   **Cluster heads are dynamically elected and rotated.**
*   **TDMA scheduling is used within clusters to avoid collisions.**
*   **Adaptive transmission power is a key feature for energy saving.**
*   **LEACH significantly extends network lifetime compared to non-hierarchical protocols.**
*   **The random nature of CH selection can lead to sub-optimal clustering.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 12. Textbook and Reference Material Integration

This topic draws heavily from the principles of wireless ad hoc networks and WSN architectures.

*   **Murthy & Manoj (2nd Ed., 2017):** Chapters discussing hierarchical routing, clustering algorithms, and energy-aware protocols in ad hoc networks will provide the foundational concepts that LEACH builds upon. The principles of multi-hop communication and node mobility (though LEACH is primarily for static sensors, the underlying principles are relevant) are covered.
*   **Karl & Willig (2nd Ed., 2017):** Chapters on WSN architecture, MAC protocols, and energy-efficient communication strategies are directly relevant. Their discussion on the challenges of resource-constrained devices in WSNs sets the stage for why protocols like LEACH are necessary. They likely discuss the trade-offs between communication overhead and energy savings.
*   **Stallings (2nd Ed., 2017):** While more general to wireless communications, Stallings' work on medium access control (MAC) protocols will provide context for TDMA, which is a core component of LEACH.
*   **Dargie & Poellabauer (2nd Ed., 2019):** This book is specifically focused on WSNs and will offer detailed discussions on various routing protocols, including LEACH. Their analysis of energy consumption models and network lifetime metrics will be crucial for understanding LEACH's performance.

---

### 13. Practice Questions and Exercises

**Section A: Conceptual Understanding (K2 Level)**

1.  **What is the primary objective of the LEACH protocol?**
    *   **Answer:** To minimize energy consumption and extend the lifetime of a Wireless Sensor Network by employing a hierarchical, cluster-based routing approach.

2.  **Describe the two main phases of a LEACH round.**
    *   **Answer:** The two main phases are the **Setup Phase** (for cluster formation and CH selection) and the **Steady-State Phase** (for data sensing, aggregation, and transmission).

3.  **What is the role of a Cluster Head (CH) in LEACH?**
    *   **Answer:** A CH is responsible for receiving data from its cluster members, aggregating this data, and then transmitting the aggregated data to the base station.

4.  **Explain the TDMA scheduling used in LEACH.**
    *   **Answer:** Within a cluster, TDMA scheduling is used by the CH to assign specific time slots to each member node. This ensures that only one node transmits at a time within the cluster, preventing collisions and allowing the CH to effectively aggregate data.

5.  **Why is the rotation of Cluster Heads important in LEACH?**
    *   **Answer:** Rotating CHs distributes the significant energy burden of data aggregation and long-range transmission to the base station among different nodes. This prevents any single node from depleting its battery too quickly, thus extending the overall network lifetime.

**Section B: Application and Analysis (K4 Level)**

6.  **Consider a WSN with 100 nodes. If LEACH aims to have approximately 5% of nodes as CHs in each round, how many CHs would be elected in a typical round? If a node has a 0.1 probability of becoming a CH, what is the expected number of CHs?**
    *   **Answer:**
        *   Target CHs: 5% of 100 nodes = 0.05 * 100 = 5 CHs.
        *   Expected number of CHs with probability $p=0.1$: If each node independently decides to become a CH with probability $p$, the expected number of CHs is $N \times p$, where $N$ is the total number of nodes. So, $100 \times 0.1 = 10$ CHs.
        *   *Note:* The protocol aims for a target percentage, and the random process might deviate. In practice, the threshold $p$ is adjusted to achieve the desired CH count.

7.  **LEACH utilizes adaptive transmission power. How does this contribute to energy efficiency? Provide a scenario.**
    *   **Answer:** Adaptive transmission power allows nodes to transmit data using only the necessary power to reach the intended receiver (CH or base station). This is much more energy-efficient than using a fixed, maximum transmission power for all transmissions.
    *   **Scenario:** Imagine a node that is very close to its CH. Instead of using high power to transmit its data, it adjusts its transmission power to a much lower level. This significantly reduces the energy consumed by its radio transmitter compared to a node that is far from the CH and requires higher power.

8.  **Discuss a potential issue with the random CH selection process in LEACH and how it might affect network performance.**
    *   **Answer:** A potential issue is that the random selection might lead to an uneven distribution of CHs. For instance, in one round, CHs might be clustered in one corner of the network, leaving other areas underserved or requiring nodes in those areas to transmit over longer distances to reach a CH. This can lead to higher energy consumption for some nodes and potentially create coverage holes or isolated nodes. It could also result in some clusters being too large (many members, high load on CH) or too small (inefficient use of CHs).

9.  **Compare the energy efficiency of LEACH with a simple flooding protocol.**
    *   **Answer:** LEACH is significantly more energy-efficient than flooding. In flooding, every node transmits its data to all its neighbors, leading to massive redundancy and rapid energy depletion. LEACH, by grouping nodes into clusters and having only CHs transmit to the base station (and using TDMA within clusters), drastically reduces the number of transmissions and the distance of many transmissions, leading to a much longer network lifetime.

10. **If a CH fails during the steady-state phase, what is the likely impact on its cluster members and the overall network?**
    *   **Answer:** If a CH fails during the steady-state phase, its cluster members will be unable to transmit their sensed data to the base station through that CH. This means the data from those members for that round will be lost. The overall network might continue to function, but the data from the failed CH's cluster will be missing. In the next round, the failed node will not be a CH, and its former members will likely join a new CH, assuming the failure was permanent. If the failure is temporary, the cluster might be re-formed.

---