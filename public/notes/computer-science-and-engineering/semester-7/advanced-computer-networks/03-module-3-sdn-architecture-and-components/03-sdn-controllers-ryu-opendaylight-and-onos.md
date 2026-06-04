---
title: "SDN Controllers - Ryu, OpenDaylight, and ONOS"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 3: SDN Architecture and Components "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c442"
status: "completed"
scrapedAt: "2026-05-20T17:00:09.898Z"
---
# Advanced Computer Networks - Module 3: SDN Architecture and Components

## Topic: SDN Controllers - Ryu, OpenDaylight, and ONOS

This module delves into the heart of Software-Defined Networking (SDN) by exploring its most crucial component: the SDN Controller. We will examine three prominent open-source SDN controllers: Ryu, OpenDaylight, and ONOS, understanding their architectures, functionalities, and how they enable the programmability of networks.

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

1.  **Describe the role and importance of SDN controllers** in enabling network programmability and centralized management.
2.  **Differentiate between the architectural designs and core functionalities** of Ryu, OpenDaylight, and ONOS.
3.  **Identify key components and their interactions** within the Ryu, OpenDaylight, and ONOS frameworks.
4.  **Explain the application development models and APIs** supported by each controller.
5.  **Discuss the strengths, weaknesses, and typical use cases** for Ryu, OpenDaylight, and ONOS.
6.  **Compare and contrast the suitability of each controller** for different network environments and requirements.

---

### **1. The Role and Importance of SDN Controllers**

#### **1.1 What is an SDN Controller?**

*   **Definition:** An SDN controller is the **brain of the SDN architecture**. It's a logically centralized software application that communicates with network devices (switches, routers) via southbound APIs and with network applications via northbound APIs.
*   **Centralized Control:** It provides a **unified and global view** of the network, allowing for centralized decision-making and policy enforcement.
*   **Network Programmability:** It abstracts the underlying network hardware, exposing its functionalities through programmable interfaces, thus enabling dynamic configuration and control.
*   **Key Functions:**
    *   **Topology Discovery:** Identifying network devices and their interconnections.
    *   **Forwarding Rule Management:** Programming flow tables in network devices (e.g., OpenFlow).
    *   **Policy Enforcement:** Implementing security policies, QoS, traffic engineering, etc.
    *   **Network State Monitoring:** Gathering information about device status and traffic.
    *   **Application Integration:** Providing interfaces for network applications to interact with the network.

#### **1.2 Importance of SDN Controllers**

*   **Agility and Flexibility:** Enables rapid deployment of new services and network configurations.
*   **Operational Efficiency:** Automates tasks, reduces manual configuration errors, and simplifies network management.
*   **Innovation:** Fosters the development of new network applications and services without needing to modify hardware.
*   **Cost Reduction:** Potential for using commodity hardware and reducing vendor lock-in.

---

### **2. Ryu Controller**

#### **2.1 Architecture and Core Functionalities**

*   **Python-based:** Ryu is a popular **open-source SDN controller written in Python**. This makes it accessible and easy to develop for, especially for those familiar with Python.
*   **Modular Design:** Ryu follows a highly modular architecture, allowing developers to easily add or remove functionalities.
*   **Core Components:**
    *   **App Manager:** Manages the lifecycle of SDN applications.
    *   **Datapath Manager:** Interacts with network switches to program their forwarding tables.
    *   **Event Bus:** Facilitates communication between different modules and applications.
    *   **API Modules:** Provides southbound (e.g., OpenFlow, Netconf) and northbound APIs.
*   **Southbound APIs:** Primarily supports **OpenFlow**, but also has experimental support for other protocols like Netconf.
*   **Northbound APIs:** Exposes RESTful APIs for network applications to interact with.

#### **2.2 Application Development and APIs**

*   **Python as Primary Language:** Applications for Ryu are typically written in Python.
*   **Event-driven Programming:** Ryu applications are designed to respond to events occurring in the network (e.g., new device connection, packet arrival).
*   **RESTful Northbound API:** Allows external applications to discover network topology, get device stats, and program flow rules.

#### **2.3 Strengths, Weaknesses, and Use Cases**

*   **Strengths:**
    *   **Ease of Development:** Python's simplicity makes it quick to prototype and develop applications.
    *   **Lightweight:** Generally more lightweight than other controllers, making it suitable for research and smaller deployments.
    *   **Flexibility:** Modular design allows for customization.
*   **Weaknesses:**
    *   **Scalability:** May not be as robust for very large-scale, complex production networks compared to more enterprise-grade controllers.
    *   **Maturity:** While mature, it might not have the extensive feature set or support of larger projects for all enterprise scenarios.
*   **Use Cases:**
    *   **Research and Education:** Widely used in academic research for experimenting with SDN concepts.
    *   **Prototyping and Development:** Ideal for developing and testing new SDN applications and protocols.
    *   **Small-scale Deployments:** Suitable for smaller networks or proof-of-concept deployments.

#### **Example Scenario: Simple Packet Forwarding with Ryu**

Imagine you want to build a simple firewall application in Ryu.

1.  **Event:** A packet arrives at a switch.
2.  **Ryu App:** The Ryu application receives an "Packet-In" event from the switch.
3.  **Logic:** The application inspects the packet's source and destination IP addresses.
4.  **Action:** If the packet matches a "block" rule, the application sends an "Flow-Mod" message back to the switch instructing it to drop similar packets in the future. If it's allowed, it might send a "Packet-Out" message to forward the packet or install a forwarding rule.

---

### **3. OpenDaylight (ODL)**

#### **3.1 Architecture and Core Functionalities**

*   **Java-based Framework:** OpenDaylight is a **highly modular, Java-based open-source SDN controller framework**. It's designed to be extensible and scalable.
*   **Service-Oriented Architecture (SOA):** Built on a service-oriented architecture, where functionalities are exposed as services.
*   **Core Components:**
    *   **OpenDaylight Controller Kernel:** The core platform.
    *   **Modules/Features:** Functionalities are implemented as modules (e.g., OpenFlow plugin, Netconf plugin, Topology service).
    *   **Data Store:** Centralized repository for network configuration and state.
    *   **MD-SAL (Model-Driven Service Abstraction Layer):** A key component for abstracting network devices and services using YANG models.
*   **Southbound APIs:** Supports a wide range of protocols including **OpenFlow, Netconf, SNMP, BGP-LS**, and others.
*   **Northbound APIs:** Exposes **RESTCONF and REST APIs** for application integration.

#### **3.2 Application Development and APIs**

*   **Java and OSGi:** Applications are typically developed as OSGi bundles in Java.
*   **YANG Models and MD-SAL:** Applications interact with network state and configuration through YANG models and the MD-SAL, which provides a consistent interface to underlying network devices.
*   **RESTCONF/REST Northbound API:** Allows external applications to manage network resources, query state, and deploy configurations.

#### **3.3 Strengths, Weaknesses, and Use Cases**

*   **Strengths:**
    *   **Scalability and Robustness:** Designed for enterprise-grade deployments with high scalability and reliability.
    *   **Extensive Feature Set:** Offers a broad range of features and protocol support.
    *   **Vendor Neutrality:** Promotes interoperability and avoids vendor lock-in.
    *   **Strong Community Support:** Backed by a large and active community, including major networking vendors.
*   **Weaknesses:**
    *   **Complexity:** Can be more complex to set up and manage compared to lighter controllers due to its extensive feature set.
    *   **Resource Intensive:** Java-based and feature-rich nature can lead to higher resource consumption.
    *   **Steeper Learning Curve:** Development can have a steeper learning curve due to OSGi and MD-SAL concepts.
*   **Use Cases:**
    *   **Enterprise Networks:** Ideal for large enterprise data centers and campus networks.
    *   **Service Provider Networks:** Used in carrier networks for network virtualization and service automation.
    *   **Network Function Virtualization (NFV):** Plays a significant role in orchestrating virtual network functions.

#### **Example Scenario: Automating VLAN Provisioning with OpenDaylight**

1.  **Application:** A cloud management platform needs to provision a new VLAN for a customer.
2.  **Northbound API:** The platform calls OpenDaylight's Northbound API (e.g., RESTCONF) to request the creation of a new VLAN and associate it with specific ports.
3.  **MD-SAL:** OpenDaylight's MD-SAL translates this request into a YANG model.
4.  **Southbound Plugin:** The OpenFlow plugin (or relevant plugin) then translates the YANG model into OpenFlow messages.
5.  **Switch Programming:** These OpenFlow messages are sent to the network switches to create the VLAN tagging rules and forward the traffic appropriately.

---

### **4. ONOS (Open Network Operating System)**

#### **4.1 Architecture and Core Functionalities**

*   **Java-based Platform:** ONOS is another **Java-based open-source SDN controller platform**, with a strong focus on **carrier-grade capabilities, scalability, and high availability**.
*   **Distributed Architecture:** Designed to be distributed from the ground up, allowing for fault tolerance and scalability by running multiple instances.
*   **Core Components:**
    *   **Mastership Controller:** Manages the distributed nature and assigns responsibilities to controller instances.
    *   **Service Directory:** Enables communication between distributed controller instances.
    *   **Applications:** Core functionalities are built as applications that run on the ONOS platform.
    *   **Network Services:** Provides abstractions for network functions like connectivity, topology, and device management.
*   **Southbound APIs:** Supports **OpenFlow, Netconf, BGP-LS, PCEP**, and other protocols relevant for carrier networks.
*   **Northbound APIs:** Offers **REST APIs** for application integration.

#### **4.2 Application Development and APIs**

*   **Java Applications:** Applications are typically developed in Java.
*   **Microservices-like Approach:** ONOS applications are often developed as independent services that communicate via the ONOS internal API.
*   **RESTful Northbound API:** Provides a unified interface for external applications to interact with the ONOS controller.

#### **4.3 Strengths, Weaknesses, and Use Cases**

*   **Strengths:**
    *   **High Availability and Scalability:** Its distributed architecture makes it ideal for carrier-grade networks where uptime and performance are critical.
    *   **Fault Tolerance:** Can continue to operate even if some controller instances fail.
    *   **Performance:** Optimized for high-throughput packet processing and control.
    *   **Carrier Focus:** Developed with the specific needs of service providers in mind.
*   **Weaknesses:**
    *   **Complexity:** Similar to OpenDaylight, its distributed nature and feature set can lead to complexity in setup and management.
    *   **Resource Intensive:** Requires significant resources to run effectively.
    *   **Learning Curve:** Developing distributed applications for ONOS can have a steeper learning curve.
*   **Use Cases:**
    *   **Service Provider Networks:** Primary target for telecommunication companies for managing complex, large-scale networks.
    *   **Network Virtualization:** Used for orchestrating virtual networks and services.
    *   **Software-Defined Radio (SDR) Networks:** Applications in wireless networking.
    *   **Large-scale Data Centers:** Where scalability and high availability are paramount.

#### **Example Scenario: Traffic Engineering in a Service Provider Network with ONOS**

1.  **Monitoring:** ONOS continuously monitors network link utilization and latency using BGP-LS and other telemetry data.
2.  **Application:** A traffic engineering application within ONOS analyzes this data to identify congested links.
3.  **Decision:** Based on predefined policies, the application decides to reroute traffic from a congested link to an underutilized one.
4.  **Flow Programming:** ONOS programs the forwarding rules in the relevant switches using OpenFlow to enforce this new traffic path.
5.  **Distributed Operation:** If one ONOS instance fails, other instances take over seamlessly due to its distributed architecture.

---

### **5. Comparison of Ryu, OpenDaylight, and ONOS**

| Feature                 | Ryu                                       | OpenDaylight (ODL)                                 | ONOS (Open Network Operating System)               |
| :---------------------- | :---------------------------------------- | :------------------------------------------------- | :------------------------------------------------- |
| **Primary Language**    | Python                                    | Java                                               | Java                                               |
| **Architecture**        | Modular, Monolithic (can be distributed)  | Modular, Service-Oriented                          | Distributed, Microservices-like                    |
| **Focus**               | Research, Prototyping, Education, Small Deployments | Enterprise Networks, Data Centers, NFV, General Purpose SDN | Carrier Networks, High Availability, Scalability   |
| **Scalability**         | Moderate                                  | High                                               | Very High (Carrier-Grade)                          |
| **Availability**        | Single instance (can be clustered)        | High (through clustering)                          | High (Built-in Distributed, Fault-Tolerant)        |
| **Ease of Development** | High (Python)                             | Moderate (Java, OSGi, YANG)                        | Moderate to High (Java, Distributed Systems)       |
| **Feature Set**         | Basic to Intermediate                     | Extensive, Broad Protocol Support                  | Comprehensive, Carrier-focused                     |
| **Resource Usage**      | Low to Moderate                           | Moderate to High                                   | High                                               |
| **Key Technologies**    | OpenFlow, REST APIs                       | OpenFlow, Netconf, YANG, MD-SAL, RESTCONF, REST APIs | OpenFlow, Netconf, BGP-LS, PCEP, REST APIs       |
| **Community**           | Active, Research-oriented                 | Very Large, Vendor-backed, Enterprise-focused      | Large, Carrier-focused                             |

---

### **6. Key Concepts and Definitions to Remember**

*   **SDN Controller:** The central brain of an SDN network, responsible for managing and programming network devices.
*   **Southbound APIs:** Interfaces between the controller and network devices (e.g., OpenFlow).
*   **Northbound APIs:** Interfaces between the controller and network applications (e.g., REST APIs).
*   **OpenFlow:** A standard protocol that allows SDN controllers to communicate with and control the forwarding planes of network switches.
*   **YANG Data Modeling Language:** A data modeling language used to define the structure and configuration of network devices and services, often used with OpenDaylight.
*   **MD-SAL (Model-Driven Service Abstraction Layer):** A core component in OpenDaylight that provides a consistent, model-driven way to access and manage network state and configuration.
*   **OSGi:** A modularity framework for Java, commonly used by OpenDaylight for its modular architecture.
*   **Distributed Architecture:** A system where multiple controller instances work together to provide scalability and fault tolerance, as seen in ONOS.
*   **High Availability (HA):** The ability of a system to remain operational and accessible even in the event of failures.

---

### **7. Practice Questions/Exercises**

**Question 1:**
Which of the following SDN controllers is primarily written in Python and is often favored for research and prototyping due to its ease of development?
A) OpenDaylight
B) ONOS
C) Ryu
D) Floodlight

**Question 2:**
What is the primary purpose of the MD-SAL in OpenDaylight?
A) To define network device configurations using YANG models.
B) To provide a service-oriented abstraction layer for network access.
C) To manage the distributed nature of the controller.
D) To facilitate communication between network applications and the controller.

**Question 3:**
Which SDN controller is specifically designed with carrier-grade capabilities, high availability, and a distributed architecture in mind?
A) Ryu
B) OpenDaylight
C) ONOS
D) Floodlight

**Question 4:**
You are tasked with building a simple application to analyze packet headers and block traffic from a specific IP address on a small test network. Which controller would be the most suitable starting point, and why?

**Question 5:**
Compare and contrast the northbound API approaches of Ryu and OpenDaylight.

---

### **Answers to Practice Questions**

**Answer 1:**
C) Ryu

**Answer 2:**
B) To provide a service-oriented abstraction layer for network access.
*Explanation:* MD-SAL is crucial for abstracting network device capabilities and services through YANG models, enabling consistent interaction.

**Answer 3:**
C) ONOS

**Answer 4:**
Ryu would be the most suitable starting point.
*Reasoning:* Ryu's Python-based nature and modularity make it easy to develop and test applications quickly for research or small-scale scenarios. Its simplicity allows for faster prototyping of packet inspection and rule installation logic.

**Answer 5:**
*   **Ryu:** Primarily exposes a **RESTful API** for its northbound interface. This allows external applications to interact with Ryu by sending HTTP requests (GET, POST, PUT, DELETE) to specific endpoints to get network information or configure the network.
*   **OpenDaylight (ODL):** Offers both **REST APIs** and the more standardized **RESTCONF API**. RESTCONF is built on REST principles but is specifically designed for accessing data defined in YANG models. This provides a more structured and standardized way for applications to interact with OpenDaylight's data store and services, making it more robust for enterprise integration.

---

### **Important Points to Remember:**

*   **Controller as the Central Hub:** The SDN controller is the orchestrator, the brains that make the network programmable and manageable.
*   **Choice of Controller Matters:** The selection of a controller depends heavily on the network's scale, complexity, required features, and the development expertise available.
*   **Ryu for Simplicity and Learning:** Ideal for educational purposes, research, and quick prototyping due to its Python base.
*   **OpenDaylight for Enterprise and Flexibility:** A powerful, feature-rich framework for enterprise data centers and diverse network environments, leveraging YANG modeling.
*   **ONOS for Carrier-Grade and Resilience:** Built for the demanding requirements of service providers, emphasizing distributed operation and high availability.
*   **Interoperability:** While standards like OpenFlow exist, the specific implementations and extensions in each controller can influence interoperability.
*   **Northbound APIs are Key for Application Development:** The ease and richness of northbound APIs determine how effectively network applications can leverage the controller's capabilities.

---
