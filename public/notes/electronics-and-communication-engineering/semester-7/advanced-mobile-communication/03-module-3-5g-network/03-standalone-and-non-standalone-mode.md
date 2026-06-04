---
title: "Standalone and non-standalone mode"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 3: 5G Network"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0f5"
status: "completed"
scrapedAt: "2026-05-23T18:04:44.546Z"
---
# ADVANCED MOBILE COMMUNICATION - Module 3: 5G Network

## Topic: Standalone (SA) and Non-Standalone (NSA) Modes

### Learning Outcomes:

*   Understand the fundamental differences between 5G Standalone (SA) and Non-Standalone (NSA) network deployments.
*   Analyze the architectural implications and benefits of each deployment mode.
*   Evaluate the role of different network components in NSA and SA deployments.
*   Identify the key characteristics and use cases that favor one mode over the other.

### Course Outcomes Alignment:

*   **CO1: Illustrate the evolution from 1G to 5G (Knowledge Level: K2)** - Understanding NSA and SA is crucial to grasping the capabilities and advancements of 5G compared to previous generations.
*   **CO2: Explain the basics of 5G (Knowledge Level: K2)** - This topic directly addresses fundamental 5G deployment strategies and their underlying technologies.
*   **CO3: Illustrate 5G network (Knowledge Level: K2)** - The distinction between NSA and SA defines two primary ways a 5G network is architected and functions.
*   **CO4: Describe the current state and challenges ahead in 5G (Knowledge Level: K2)** - The transition from NSA to SA is a significant aspect of the current 5G rollout and its future development.

---

### 1. Introduction to 5G Deployment Modes

The deployment of 5G New Radio (NR) can be categorized into two main modes: **Non-Standalone (NSA)** and **Standalone (SA)**. These modes represent different architectural approaches and have distinct implications for network capabilities, performance, and the rollout strategy.

*   **Non-Standalone (NSA):** A mode where the 5G NR radio access network (RAN) is deployed but relies on the existing 4G LTE Evolved Packet Core (EPC) for control plane functions.
*   **Standalone (SA):** A mode where both the 5G NR RAN and the 5G Core (5GC) are deployed, enabling full end-to-end 5G capabilities.

---

### 2. 5G Non-Standalone (NSA) Mode

NSA mode is often the initial step for operators deploying 5G. It leverages the existing investments in 4G infrastructure to accelerate the introduction of 5G services and capacity.

#### 2.1 Architecture

*   **Key Components:**
    *   **5G NR Radio Access Network (RAN):** Provides the radio interface for 5G devices.
    *   **4G LTE Evolved Packet Core (EPC):** Handles control plane signaling, mobility management, and data session management.
    *   **Master Node (MN):** The evolved NodeB (eNB) in the 4G network, responsible for the control plane anchor.
    *   **Secondary Node (SN):** The gNB in the 5G network, providing the radio access.
*   **Anchoring:** In NSA, the control plane is anchored in the 4G EPC. This means that user device control signaling, such as connection establishment, registration, and mobility management, is handled by the 4G core.
*   **Dual Connectivity:** NSA utilizes **Dual Connectivity (DC)**. A user device can simultaneously connect to both the 4G LTE eNB and the 5G NR gNB. Data can be aggregated from both links, providing enhanced data rates.
*   **Deployment Options (3GPP):** NSA deployments are defined by several options, with **Option 3** being the most common:
    *   **Option 3 (3a, 3x):** The UE is connected to the 4G eNB for control and optionally for user plane, and to the 5G gNB for user plane data. The 5G gNB is anchored to the 4G eNB.
        *   **Option 3:** User plane aggregated between eNB and gNB.
        *   **Option 3a:** User plane only from gNB.
        *   **Option 3x:** User plane aggregated between eNB and gNB, with split bearer on the eNB side.
*   **Benefits of NSA:**
    *   **Faster Time-to-Market:** Allows operators to deploy 5G capabilities quickly by leveraging existing 4G core networks.
    *   **Cost-Effective:** Reduces the need for immediate and full-scale 5G Core deployment.
    *   **Enhanced Data Speeds:** Provides higher downlink speeds due to the combination of 4G and 5G radio access.
    *   **Increased Capacity:** Offloads traffic from congested 4G networks.

#### 2.2 Characteristics and Use Cases

*   **Primary Use Case:** Enhanced Mobile Broadband (eMBB) – delivering faster data speeds and higher capacity for smartphones and other mobile devices.
*   **Limitations:**
    *   Does not fully support ultra-low latency or massive machine-type communications (mMTC) due to the reliance on the 4G EPC, which is not designed for these capabilities.
    *   Control plane latency remains high as it is managed by the 4G core.
    *   Network slicing capabilities are limited as they are typically enabled by the 5G Core.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### 2.3 Reference to Textbooks

*   **Dahlman, Skold, & Parkvall (2016):** While this edition predates the full standardization of 5G NSA, it provides the foundational understanding of LTE-Advanced Pro features like carrier aggregation and dual connectivity, which are precursors to NSA functionality. Concepts like "carrier aggregation between different radio access technologies" are relevant.
*   **Ahmadi (2019):** This book thoroughly covers 5G NR architecture and deployment, dedicating significant chapters to NSA modes, including detailed explanations of Option 3 and its variants. It highlights how NSA allows operators to deploy 5G NR as an overlay to their existing LTE EPC.

---

### 3. 5G Standalone (SA) Mode

SA mode represents the true realization of 5G's potential, offering a fully independent 5G network from the radio access all the way to the core.

#### 3.1 Architecture

*   **Key Components:**
    *   **5G NR Radio Access Network (RAN):** Provides the radio interface for 5G devices.
    *   **5G Core (5GC):** A new, cloud-native, service-based architecture designed for 5G. It handles control plane functions, mobility management, session management, and more.
*   **Core Network Functions:** The 5GC comprises several Network Functions (NFs) such as:
    *   **AMF (Access and Mobility Management Function):** Handles connection, registration, and mobility management.
    *   **SMF (Session Management Function):** Manages user data sessions, IP address allocation, and QoS.
    *   **UPF (User Plane Function):** Handles user data packet routing and forwarding.
    *   **NRF (NF Repository Function):** Enables service discovery for NFs.
    *   **UDR (User Data Repository):** Stores subscription data and user profiles.
*   **No EPC Dependency:** SA mode completely disconnects from the 4G EPC. Devices connect directly to the 5G RAN, and all control plane signaling goes through the 5G Core.
*   **Benefits of SA:**
    *   **Ultra-Low Latency:** The 5GC is designed for low-latency communication, enabling new applications.
    *   **Massive Machine Type Communications (mMTC):** Optimized for supporting a massive number of connected devices with low power consumption.
    *   **Network Slicing:** Enables the creation of virtual, isolated networks on a shared infrastructure, each tailored to specific service requirements (e.g., eMBB slice, URLLC slice, mMTC slice).
    *   **Enhanced Mobility:** Improved handover and mobility management.
    *   **Edge Computing:** Facilitates the deployment of computing resources closer to the user, reducing latency.
    *   **New Service Capabilities:** Supports advanced 5G services not possible with NSA.

#### 3.2 Characteristics and Use Cases

*   **Primary Use Cases:**
    *   **Ultra-Reliable Low-Latency Communications (URLLC):** Industrial automation, remote surgery, autonomous driving.
    *   **Massive Machine Type Communications (mMTC):** Smart cities, IoT deployments, smart agriculture.
    *   **Enhanced Mobile Broadband (eMBB):** Still provides superior data speeds and capacity.
*   **Complexity:** SA deployment is more complex and requires a complete overhaul or upgrade of the core network.

#### 3.3 Reference to Textbooks

*   **Ahmadi (2019):** This book provides in-depth coverage of the 5G Core architecture and the design principles of the Service-Based Architecture (SBA). It details the functions of various NFs and explains how SA mode enables the full suite of 5G capabilities, including URLLC, mMTC, and network slicing.
*   **Cox (2020):** Offers a high-level yet comprehensive overview of the 5G network, including the evolution from NSA to SA. It explains the benefits and applications of SA, emphasizing its role in enabling new industrial and critical communications.
*   **Prasad (2016):** This early outlook on 5G discusses the vision for a converged network that supports diverse services. While the specific core functions weren't fully defined at the time, it foreshadows the need for a flexible and service-oriented core to enable advanced 5G use cases, aligning with the concept of SA.

---

### 4. Comparison: NSA vs. SA

| Feature           | Non-Standalone (NSA)                                      | Standalone (SA)                                             |
| :---------------- | :-------------------------------------------------------- | :---------------------------------------------------------- |
| **Core Network**  | Relies on 4G EPC                                          | Uses 5G Core (5GC)                                          |
| **Control Plane** | Anchored in 4G EPC                                        | Anchored in 5G Core                                         |
| **Data Plane**    | Can aggregate 4G and 5G                                   | Primarily 5G, can also leverage other access if designed    |
| **Deployment Speed** | Faster, leverages existing infrastructure                  | Slower, requires full 5G Core deployment                    |
| **Latency**       | Inherits some 4G latency characteristics                  | Ultra-low latency achievable                                |
| **Network Slicing** | Limited or not fully supported                            | Fully supported                                             |
| **mMTC Support**  | Not optimized                                             | Optimized                                                   |
| **URLLC Support** | Not supported                                             | Supported                                                   |
| **Complexity**    | Lower, incremental upgrade                                | Higher, complete new core                                   |
| **Use Cases**     | Enhanced Mobile Broadband (eMBB)                          | eMBB, URLLC, mMTC, mission-critical services                |
| **Example Option**| Option 3 (3, 3a, 3x)                                      | Option 2 (5G gNB connected to 5GC)                          |

---

### 5. Key Concepts and Definitions

*   **5G New Radio (NR):** The global standard for the air interface of 5G networks.
*   **Evolved Packet Core (EPC):** The core network architecture used in 4G LTE.
*   **5G Core (5GC):** The new, cloud-native, service-based core network for 5G.
*   **Dual Connectivity (DC):** A technique allowing a user device to connect to multiple radio access technologies or base stations simultaneously.
*   **Service-Based Architecture (SBA):** A fundamental design principle of the 5G Core where network functions communicate through services.
*   **Network Slicing:** The ability to create multiple virtual, isolated end-to-end networks on top of a common physical infrastructure.
*   **Enhanced Mobile Broadband (eMBB):** A 5G service category focusing on high data speeds and capacity.
*   **Ultra-Reliable Low-Latency Communications (URLLC):** A 5G service category for applications requiring high reliability and minimal delay.
*   **Massive Machine Type Communications (mMTC):** A 5G service category for supporting a vast number of low-power IoT devices.
*   **Master Node (MN):** In NSA, the base station (eNB) that controls the control plane signaling.
*   **Secondary Node (SN):** In NSA, the base station (gNB) that provides additional user plane capacity.

---

### 6. Important Points to Remember

*   **NSA is a stepping stone to SA:** Most operators begin with NSA to quickly offer 5G speeds before committing to a full 5G Core rollout.
*   **SA unlocks the full potential of 5G:** Features like ultra-low latency, massive IoT, and network slicing are only fully realized in SA mode.
*   **Control plane is the key differentiator:** Whether the control plane is handled by the 4G EPC (NSA) or the 5GC (SA) dictates many of the network's capabilities.
*   **Dual Connectivity is central to NSA:** It allows the user device to benefit from both 4G and 5G radio links.
*   **5G Core is a paradigm shift:** It's not just an upgrade; it's a complete redesign based on cloud-native principles and service-based interfaces.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the primary difference between 5G Non-Standalone (NSA) and Standalone (SA) modes in terms of their core network dependency.

**Answer:**
The primary difference lies in their core network. 5G NSA relies on the existing 4G Evolved Packet Core (EPC) for control plane functions, while 5G SA utilizes the new 5G Core (5GC) for both control and user plane functions.

**Question 2:**
Which 5G deployment mode is best suited for applications requiring ultra-low latency, such as autonomous driving or industrial automation? Justify your answer.

**Answer:**
Standalone (SA) mode is best suited for ultra-low latency applications. This is because the 5G Core (5GC) is designed from the ground up to support low-latency communication, and it can manage control and user plane traffic more efficiently than the 4G EPC used in NSA. SA also enables network slicing, which can guarantee the required latency for critical applications.

**Question 3:**
What is Dual Connectivity (DC) in the context of NSA deployments, and what benefit does it provide to the user device?

**Answer:**
Dual Connectivity (DC) in NSA deployments allows a user device to simultaneously connect to both a 4G LTE base station (eNB) and a 5G NR base station (gNB). The benefit it provides is the aggregation of data from both radio links, leading to higher peak data rates and improved overall throughput for the user.

**Question 4:**
Identify two key capabilities that are enabled by 5G SA but are either limited or not supported in 5G NSA.

**Answer:**
Two key capabilities enabled by 5G SA but limited/not supported in 5G NSA are:
1.  **Network Slicing:** SA allows for the creation of dedicated, isolated network slices for different services, which is not fully achievable with NSA.
2.  **Ultra-Reliable Low-Latency Communications (URLLC):** The independent 5G Core in SA is crucial for achieving the very low latency and high reliability required by URLLC applications.

---