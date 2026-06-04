---
title: "Mobile ad hoc networks and wireless sensor networks"
subject: "WIRELESS SENSOR NETWORKS"
module: "Module 3: Mobile ad hoc networks and wireless sensor networks"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5a1"
status: "completed"
scrapedAt: "2026-05-23T20:16:19.943Z"
---
# WIRELESS SENSOR NETWORKS - Module 3: Mobile Ad Hoc Networks and Wireless Sensor Networks

This module delves into the fascinating world of Mobile Ad Hoc Networks (MANETs) and Wireless Sensor Networks (WSNs), exploring their unique characteristics, architectures, and the protocols that govern their operation. We will build upon foundational wireless concepts to understand the specialized needs and challenges of these dynamic network environments.

---

## **Introduction to Mobile Ad Hoc Networks (MANETs) and Wireless Sensor Networks (WSNs)**

**CO1: Explain the principles of wireless networks concepts and their standards. (Knowledge Level: K2)**
**CO2: Illustrate various concepts on the basics of wireless sensor networks and mobile adhoc networks. (Knowledge Level: K2)**

**Key Concepts & Definitions:**

*   **Wireless Network:** A network that uses radio waves as the medium for communication. Examples include Wi-Fi, Bluetooth, cellular networks, and satellite communication.
*   **Ad Hoc Network:** A decentralized wireless network. Data is routed from node to node through the network. MANETs are a type of ad hoc network where mobile devices can communicate directly with each other without a fixed infrastructure.
*   **Infrastructure Network:** A network that relies on a central point of control or access, such as an Access Point (AP) in Wi-Fi or a base station in cellular networks.

**Comparison: Infrastructure Networks vs. Ad Hoc Networks**

| Feature        | Infrastructure Network                             | Ad Hoc Network                                        |
| :------------- | :------------------------------------------------- | :---------------------------------------------------- |
| **Topology**   | Fixed, centralized (e.g., star, mesh with APs)   | Dynamic, decentralized, constantly changing           |
| **Mobility**   | Limited to devices connecting to APs              | High mobility of all nodes, no central control        |
| **Management** | Centralized management (e.g., AP configuration)    | Decentralized, self-organizing, self-configuring    |
| **Deployment** | Requires pre-installed infrastructure (APs)      | Spontaneous, no pre-existing infrastructure required |
| **Examples**   | Wi-Fi networks in homes/offices, cellular networks | Military battlefield communications, disaster recovery |

---

## **Module 3.1: Mobile Ad Hoc Networks (MANETs)**

**CO2: Illustrate various concepts on the basics of wireless sensor networks and mobile adhoc networks. (Knowledge Level: K2)**

**Key Concepts & Definitions:**

*   **Mobile Ad Hoc Network (MANET):** A collection of mobile nodes that communicate with each other wirelessly, forming a temporary network without the aid of any pre-existing infrastructure like routers or access points. Each node acts as a router, forwarding packets for other nodes.
*   **Self-Organizing:** MANETs can configure themselves without manual intervention.
*   **Self-Healing:** If a node fails or a link breaks, the network can automatically reconfigure itself to maintain connectivity.
*   **Dynamic Topology:** The network topology changes frequently as nodes move, join, or leave the network.
*   **Limited Bandwidth:** Wireless communication typically has lower bandwidth compared to wired networks.
*   **Limited Power:** Mobile nodes operate on battery power, requiring efficient protocols.
*   **Mobility Management:** A critical challenge is to maintain routing information and connectivity in the face of constant node movement.

**Architectural Considerations for MANETs:**

*   **Node Mobility:**
    *   **Random Waypoint Model:** A popular simulation model where nodes move to random locations at random speeds.
    *   **Reference:** *Ad Hoc Wireless Networks: Architectures and Protocols* by Murthy & Manoj often discusses various mobility models.
*   **Routing:** Because there's no central router, MANETs require specialized routing protocols. These are typically categorized into:
    *   **Proactive Routing Protocols:** Maintain routes to all other nodes in the network at all times. They have high overhead but low latency.
        *   **Table-Driven Routing:** Each node maintains one or more routing tables.
            *   **Example:** **DSDV (Destination-Sequenced Distance-Vector Routing)** - based on the Bellman-Ford algorithm, uses sequence numbers to avoid routing loops.
            *   **Example:** **OLSR (Optimized Link State Routing)** - a link-state protocol that reduces the overhead of flooding by using an MPR (Multipoint Relay) set.
    *   **Reactive Routing Protocols (On-Demand Routing):** Routes are established only when needed. They have lower overhead but higher latency.
        *   **Example:** **AODV (Ad hoc On-demand Distance Vector Routing)** - combines aspects of DSDV and DSR. It uses route discovery and route maintenance.
        *   **Example:** **DSR (Dynamic Source Routing)** - a source-initiated routing protocol where the source node discovers a route to the destination. The entire route is included in the packet header.
    *   **Hybrid Routing Protocols:** Combine proactive and reactive approaches.
        *   **Example:** **ZRP (Zone Routing Protocol)** - each node maintains proactive routing information to nodes within its "zone" and uses reactive routing for nodes outside its zone.

**Challenges in MANETs:**

*   **Routing Overhead:** Frequent updates and route discovery can consume significant bandwidth.
*   **Packet Delivery Ratio:** Mobility and link failures can lead to packet loss.
*   **Latency:** Finding routes and re-routing can introduce delays.
*   **Security:** Ad hoc networks are more vulnerable to attacks due to their open nature.
*   **Power Management:** Efficiently managing node energy is crucial for network lifetime.

**Practice Question (MANETs):**

1.  Explain the primary difference between proactive and reactive routing protocols in MANETs. Provide one example for each category and briefly describe its mechanism.
2.  What is the significance of "self-organizing" in the context of MANETs?

**Answers:**

1.  **Proactive routing protocols** maintain up-to-date routes to all destinations in the network at all times, ensuring low latency for communication but incurring higher overhead for route maintenance. **Reactive routing protocols**, on the other hand, establish routes only when needed, minimizing overhead but introducing higher latency due to the route discovery process.
    *   **Proactive Example:** DSDV (Destination-Sequenced Distance-Vector Routing). It uses distance-vector routing with sequence numbers to prevent loops.
    *   **Reactive Example:** AODV (Ad hoc On-demand Distance Vector Routing). It uses route discovery when a route is needed and route maintenance to handle link breakages.
2.  "Self-organizing" in MANETs means that the network can automatically configure itself and establish communication links without any central authority or manual intervention. Nodes dynamically discover each other and form routes, adapting to changes in the network topology caused by node movement.

---

## **Module 3.2: Wireless Sensor Networks (WSNs)**

**CO1: Explain the principles of wireless networks concepts and their standards. (Knowledge Level: K2)**
**CO2: Illustrate various concepts on the basics of wireless sensor networks and mobile adhoc networks. (Knowledge Level: K2)**
**CO3: Develop single node wireless sensor architecture (Knowledge Level: K3)**
**CO4: Analyse the network architecture and the communication protocols of wireless sensor networks (Knowledge Level: K4)**

**Key Concepts & Definitions:**

*   **Wireless Sensor Network (WSN):** A network of spatially distributed autonomous devices called "sensors," which are used to monitor physical or environmental conditions, such as temperature, sound, vibration, pressure, motion, or pollutants, and to cooperatively pass their data through the network to a main location (base station or gateway).
*   **Sensor Node:** The fundamental building block of a WSN. Typically consists of:
    *   **Sensing Unit:** Transducer to convert physical phenomena into electrical signals.
    *   **Processing Unit:** Microcontroller for data processing, protocol execution, and storage.
    *   **Communication Unit:** Transceiver for wireless communication.
    *   **Power Unit:** Battery, possibly with energy harvesting capabilities.
*   **Base Station (Sink Node):** A gateway that collects data from sensor nodes and often communicates with external networks or users. It usually has more processing power and energy resources.
*   **Data Aggregation/Fusion:** Combining and processing data from multiple sensors to derive more meaningful information and reduce redundancy.
*   **Energy Efficiency:** A paramount concern in WSNs due to the limited power of sensor nodes.
*   **Scalability:** The ability to support a large number of sensor nodes.
*   **Reliability:** Ensuring data accuracy and network availability despite node failures or environmental disruptions.

**Characteristics of WSNs:**

*   **Dense Deployment:** Often deployed in large numbers, creating a high node density.
*   **Low Cost:** Individual sensor nodes are typically inexpensive.
*   **Limited Resources:** Sensor nodes have constrained processing power, memory, and battery life.
*   **Event-Driven or Periodic Sampling:** Sensors collect data either in response to specific events or at regular intervals.
*   **Local Data Processing:** Data often undergoes local processing before being transmitted to reduce communication overhead.

**WSN Network Architectures:**

*   **Flat Architecture:** All nodes have similar capabilities and roles. Data is typically routed directly to the base station or through multi-hop communication.
*   **Hierarchical (Clustered) Architecture:**
    *   Nodes are organized into clusters.
    *   Each cluster has a **Cluster Head (CH)** responsible for:
        *   Collecting data from cluster members.
        *   Aggregating and processing data.
        *   Communicating with other CHs or the base station.
    *   **Benefits:** Reduces communication overhead, improves scalability, and can distribute energy consumption.
    *   **Reference:** *Protocols And Architectures for Wireless Sensor Networks* by Karl & Willig extensively covers various WSN architectures, including clustered approaches.

**Single Node Wireless Sensor Architecture (CO3):**

A typical sensor node architecture includes:

1.  **Sensing Unit:**
    *   **Transducer:** Converts the physical quantity (e.g., temperature, light) into an electrical signal.
    *   **Analog-to-Digital Converter (ADC):** Converts the analog signal from the transducer into a digital format for processing.
    *   **Reference:** Fundamentals of Wireless Sensor Networks - Theory and Practice by Dargie & Poellabauer discusses sensor hardware and conversion processes.

2.  **Processing Unit:**
    *   **Microcontroller (MCU):** The "brain" of the node. Executes sensor reading tasks, data processing algorithms, communication protocols, and power management. Examples include small embedded processors like ARM Cortex-M series.
    *   **Memory:**
        *   **RAM:** For temporary data storage and program execution.
        *   **ROM/Flash:** For storing firmware, operating system, and application code.

3.  **Communication Unit:**
    *   **Transceiver:** Handles sending and receiving data wirelessly.
    *   **Radio Module:** Implements the wireless communication protocol (e.g., IEEE 802.15.4 for Zigbee).
    *   **Antenna:** For transmitting and receiving radio signals.
    *   **Reference:** Wireless Communications and Networks by William Stallings provides insights into radio communication principles relevant to transceivers.

4.  **Power Unit:**
    *   **Battery:** Provides the primary energy source.
    *   **Power Management Circuitry:** Optimizes energy consumption (e.g., putting the MCU to sleep, turning off the radio when not in use).
    *   **Energy Harvesting (Optional):** Solar panels, thermoelectric generators, etc., to replenish energy.

**Example Single Node Architecture:**

Imagine a temperature sensor node:
*   **Sensing Unit:** A thermistor (transducer) connected to an ADC.
*   **Processing Unit:** A low-power microcontroller (e.g., an ESP32 or a Nordic nRF52 series) with integrated RAM and Flash memory.
*   **Communication Unit:** A radio module (e.g., LoRa or Zigbee) with an antenna.
*   **Power Unit:** A small Li-ion battery with a power management IC.

The MCU reads the temperature from the thermistor via the ADC, processes the data (e.g., converts raw ADC values to Celsius), and then uses the radio module to transmit the temperature reading to a nearby cluster head or the base station.

---

## **Module 3.3: WSN Communication Protocols and Architectures**

**CO4: Analyse the network architecture and the communication protocols of wireless sensor networks (Knowledge Level: K4)**

**Key Concepts & Definitions:**

*   **WSN Protocols:** Designed specifically for resource-constrained wireless sensor nodes and the unique requirements of WSNs (energy efficiency, reliability, scalability).
*   **Cross-Layer Design:** Protocols in WSNs often interact and optimize across different layers of the network stack (e.g., MAC, routing, and application layers) to achieve better performance.
*   **Data-Centricity:** Focus on the data itself rather than the location of nodes. Queries are often data-oriented (e.g., "What is the average temperature in region X?").

**WSN Protocol Stack (Simplified):**

While different WSN protocols are designed, they generally fit within a conceptual stack:

*   **Physical Layer:** Concerned with the physical transmission of bits (modulation, frequency bands, signal strength). Often uses standards like IEEE 802.15.4.
*   **Data Link Layer (MAC Protocol):** Manages access to the shared wireless medium, ensuring reliable communication between adjacent nodes and addressing issues like collisions.
    *   **Examples:**
        *   **TDMA (Time Division Multiple Access):** Nodes transmit in assigned time slots to avoid collisions.
        *   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Nodes listen before transmitting and use backoff mechanisms.
        *   **LEACH (Low-Energy Adaptive Clustering Hierarchy):** A MAC protocol integrated with a clustering protocol, designed for energy efficiency.
*   **Network Layer (Routing Protocol):** Enables multi-hop communication from sensor nodes to the base station. Focuses on energy efficiency and data aggregation.
    *   **Examples:**
        *   **LEACH (Low-Energy Adaptive Clustering Hierarchy):** A prominent clustering-based routing protocol that minimizes energy consumption by rotating cluster heads.
        *   **PEGASIS (Power-Efficient Gathering in Sensor Information Systems):** An improvement over LEACH, forming a chain of nodes to transmit data.
        *   **SPIN (Sensor Protocols for Information via Negotiation):** A data-centric protocol that uses metadata negotiation to disseminate data efficiently.
        *   **CODA (Continuous Monitoring and Data Aggregation):** Focuses on robust data aggregation and fault tolerance.
*   **Transport Layer:** Ensures reliable delivery of data, but often with lighter weight protocols than TCP (e.g., UDP-like behavior, or custom protocols like **PSFQ (Payload-Sensing Queuing)** or **RAMP (Reliable Ad hoc Message Protocol)**).
*   **Application Layer:** Handles data collection, processing, and interaction with users or external systems.

**Analysis of WSN Protocol Architectures (CO4):**

**LEACH (Low-Energy Adaptive Clustering Hierarchy):**

*   **Architecture:** Hierarchical (clustered).
*   **How it works:**
    1.  **Cluster Formation:** Nodes randomly select themselves to be cluster heads (CHs) with a certain probability. CHs broadcast an advertisement. Non-CH nodes choose the closest CH to join.
    2.  **TDMA Scheduling:** CHs create TDMA schedules for their cluster members, assigning time slots for data transmission.
    3.  **Data Transmission:** Nodes transmit data to their CH during their allocated time slot.
    4.  **Data Aggregation:** CHs aggregate data from their members.
    5.  **Cluster Head Rotation:** To distribute energy load, CHs are rotated periodically.
*   **Analysis:**
    *   **Energy Efficiency:** High, as nodes transmit directly to their CH, minimizing transmission distance. Rotation of CHs prevents premature battery depletion of a few nodes.
    *   **Scalability:** Good, as clustering reduces the communication overhead for routing.
    *   **Overhead:** Cluster formation and CH selection add overhead.
    *   **Hotspot Problem:** CHs can become overloaded and drain their batteries faster, especially if they are far from the base station.
    *   **Reference:** *Protocols And Architectures for Wireless Sensor Networks* by Karl & Willig provides an in-depth analysis of LEACH and its variants.

**PEGASIS (Power-Efficient Gathering in Sensor Information Systems):**

*   **Architecture:** Chain-based.
*   **How it works:**
    1.  Nodes form a chain, where each node transmits its data to its neighbor in the chain, and the last node in the chain transmits to the base station.
    2.  Data travels up the chain, being aggregated at each node.
    3.  The chain is re-formed periodically to distribute energy consumption.
*   **Analysis:**
    *   **Energy Efficiency:** Potentially better than LEACH for certain network configurations as it aims to minimize the number of long-distance transmissions.
    *   **Latency:** Can be higher than LEACH due to the sequential nature of data transmission in the chain.
    *   **Adaptability:** Less adaptive to dynamic changes in topology compared to clustering.
    *   **Reference:** Covered in texts like *Fundamentals of Wireless Sensor Networks - Theory and Practice* by Dargie & Poellabauer.

**SPIN (Sensor Protocols for Information via Negotiation):**

*   **Architecture:** Data-centric, decentralized.
*   **How it works:** Nodes advertise the data they have using metadata. Other nodes interested in that data perform a negotiation to receive it.
*   **Analysis:**
    *   **Data-Centricity:** Efficient for situations where specific data is needed.
    *   **Energy Efficiency:** Reduces redundant data transmissions.
    *   **Complexity:** Negotiation process can add complexity.
    *   **Reference:** Discussed in *Ad Hoc Wireless Networks: Architectures and Protocols* by Murthy & Manoj as a WSN-specific routing approach.

**Practice Questions (WSNs):**

1.  Describe the main components of a single sensor node in a WSN. (CO3)
2.  Analyze the advantages and disadvantages of a hierarchical (clustered) WSN architecture compared to a flat architecture. (CO4)
3.  Explain the core principle of the LEACH protocol and how it aims to achieve energy efficiency. (CO4)

**Answers:**

1.  A single sensor node typically consists of:
    *   **Sensing Unit:** Includes a transducer to detect physical phenomena and an ADC to convert analog signals to digital.
    *   **Processing Unit:** A microcontroller to process data, execute protocols, and manage operations.
    *   **Communication Unit:** A transceiver for wireless transmission and reception.
    *   **Power Unit:** A battery and power management circuitry to supply energy.
2.  **Hierarchical (Clustered) Architecture:**
    *   **Advantages:**
        *   **Reduced Communication Overhead:** Data is aggregated locally by cluster heads, reducing the number of messages sent to the base station.
        *   **Improved Scalability:** Handles large numbers of nodes more effectively.
        *   **Energy Distribution:** Cluster heads can be rotated, distributing the energy burden.
    *   **Disadvantages:**
        *   **Cluster Head Overhead:** Cluster heads have more processing and communication load.
        *   **Intra-cluster Communication:** Requires efficient intra-cluster communication protocols.
        *   **Overhead for Clustering:** The process of forming and maintaining clusters adds overhead.
    **Flat Architecture:**
    *   **Advantages:** Simpler to implement, no cluster formation overhead.
    *   **Disadvantages:** High communication overhead due to direct multi-hop routing to the base station, potential for faster battery depletion of nodes near the base station (hotspots).
3.  The core principle of the LEACH protocol is **clustering** and **cluster head rotation**. It divides the sensor network into clusters. Within each cluster, sensor nodes transmit their data to a designated **Cluster Head (CH)**. The CH aggregates the data and then transmits it to the base station. To distribute the energy load, CHs are **rotated** periodically, meaning different nodes take turns being CHs. This rotation helps prevent any single node from being drained of power too quickly, thus extending the overall network lifetime.

---

## **Important Points to Remember**

*   **MANETs vs. WSNs:** While both are wireless and can be ad hoc, MANETs focus on mobility and general communication between devices, whereas WSNs focus on sensing environmental data from a large number of dedicated sensor nodes, with a strong emphasis on energy efficiency and data aggregation.
*   **Resource Constraints:** The defining characteristic of WSNs is the severe resource limitations of sensor nodes (power, memory, processing). This drives the need for specialized protocols.
*   **Energy Efficiency is Key:** In WSNs, protocols are designed to minimize energy consumption to maximize network lifetime.
*   **Data-Centricity:** WSN communication is often driven by the data itself, not necessarily by the identity or location of individual nodes.
*   **Routing Protocols:** Different routing protocols exist for MANETs (proactive, reactive, hybrid) and WSNs (clustering, chain-based, data-centric), each with its trade-offs in terms of overhead, latency, and energy consumption.
*   **Cross-Layer Design:** WSNs often benefit from protocols that optimize across different layers of the network stack.

---

## **Conclusion**

Module 3 has provided a foundational understanding of Mobile Ad Hoc Networks and Wireless Sensor Networks. We have explored their distinct characteristics, architectures, and the critical role of specialized protocols in addressing their unique challenges, particularly the inherent resource constraints of WSNs. The ability to design and analyze these networks is crucial for a wide range of applications, from environmental monitoring to military operations and smart city initiatives.

---
**(End of Module 3 Notes)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
