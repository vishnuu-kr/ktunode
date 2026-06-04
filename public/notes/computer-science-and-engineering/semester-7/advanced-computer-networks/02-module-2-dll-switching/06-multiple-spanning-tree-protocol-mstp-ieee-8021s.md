---
title: "Multiple Spanning Tree Protocol (MSTP) - IEEE 802.1s"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c43a"
status: "completed"
scrapedAt: "2026-05-20T17:00:02.864Z"
---
# Advanced Computer Networks: Module 2 - DLL Switching

## Topic: Multiple Spanning Tree Protocol (MSTP) - IEEE 802.1s

This module explores advanced concepts in Data Link Layer (DLL) switching, with a particular focus on the Multiple Spanning Tree Protocol (MSTP). MSTP is a crucial protocol for ensuring loop-free network topologies in complex switched Ethernet environments, while also optimizing bandwidth utilization.

---

### 1. Introduction to Spanning Tree Protocols (STPs)

Before delving into MSTP, it's essential to understand the foundational concepts of Spanning Tree Protocol (STP) and its evolution.

*   **The Problem of Loops:** In a switched Ethernet network, redundant links are often implemented for high availability. However, without a mechanism to control these redundancies, forwarding loops can form. These loops cause:
    *   **Broadcast Storms:** Frames are endlessly forwarded between switches, consuming excessive bandwidth and CPU resources.
    *   **MAC Address Table Instability:** Switches constantly update their MAC address tables as frames arrive from multiple ports for the same MAC address, leading to unpredictable forwarding.
    *   **Duplicate Frames:** End devices receive multiple copies of the same frame.

*   **Spanning Tree Protocol (STP) - IEEE 802.1D:**
    *   **Purpose:** To create a logically loop-free topology by blocking redundant paths.
    *   **Key Concepts:**
        *   **Root Bridge:** The central switch in the STP topology, elected based on the lowest Bridge ID (priority + MAC address).
        *   **Root Port:** The port on a non-root bridge that has the lowest path cost to the Root Bridge.
        *   **Designated Port:** The port on a network segment with the lowest path cost to the Root Bridge. Only one Designated Port per segment.
        *   **Blocking Port:** A port that is intentionally blocked to prevent loops. It does not forward user traffic but still receives BPDUs.
        *   **Forwarding Port:** Ports that are active and forwarding user traffic.
        *   **Bridge ID (BID):** A unique identifier for each switch, composed of Bridge Priority and MAC Address.
        *   **Path Cost:** A metric associated with link speed; lower cost indicates a preferred path.
        *   **Bridge Protocol Data Unit (BPDU):** Control messages exchanged between switches to build and maintain the STP topology.

*   **Rapid Spanning Tree Protocol (RSTP) - IEEE 802.1w:**
    *   **Improvements over STP:** Significantly faster convergence times, reducing the impact of link failures.
    *   **New Port Roles:**
        *   **Alternate Port:** A port that provides an alternative path to the Root Bridge. It is in a discarding state (similar to blocking in STP) but can quickly transition to forwarding if the Root Port fails.
        *   **Backup Port:** A port that provides a redundant path to a segment where another port on the same switch is already Designated. It is in a discarding state.
    *   **BPDU Handling:** RSTP BPDUs are sent by all switches, not just the Root Bridge, allowing for faster detection of topology changes.

---

### 2. Limitations of STP and RSTP for Modern Networks

While STP and RSTP prevent loops, they have limitations in supporting diverse traffic requirements and optimizing bandwidth.

*   **Single Spanning Tree Instance:** STP and RSTP create a single logical spanning tree that covers the entire Layer 2 network. This means:
    *   **Suboptimal Path Selection:** For different types of traffic (e.g., voice, data, video), the path chosen by the single spanning tree might not be the most efficient.
    *   **Underutilization of Redundant Links:** All redundant paths are blocked by default, even if they could be used for carrying different traffic flows.
    *   **VLAN-Based Blocking:** Blocking is on a per-link basis, not per-VLAN. If a link is blocked for one VLAN, it's blocked for all VLANs.

---

### 3. Introduction to Multiple Spanning Tree Protocol (MSTP) - IEEE 802.1s

MSTP addresses the limitations of STP and RSTP by allowing for the creation of multiple spanning tree instances, each mapped to a group of VLANs.

*   **Purpose:** To create multiple independent spanning tree instances, allowing for better load balancing and more efficient use of network resources.

*   **Key Concepts:**

    *   **MST Region:** A collection of switches that have the same MST configuration (MST format version, MST name, MST revision number). Switches within an MST region communicate using MST BPDUs.
    *   **MST Instance (MSTI):** A distinct spanning tree that covers a specific set of VLANs. Each MSTI has its own Root Bridge, Root Ports, and Designated Ports.
    *   **Common Spanning Tree (CST):** The legacy STP/RSTP instance that remains active and handles all VLANs not explicitly mapped to an MSTI.
    *   **MST Configuration:** Defined by three parameters:
        *   **MST Format Version:** Specifies the version of the MSTP protocol being used.
        *   **MST Name:** A user-defined string that identifies the MST region.
        *   **MST Revision Number:** A numerical value that indicates the current revision of the MST configuration. All switches in an MST region must have the same revision number for their configuration to be considered consistent.

    *   **VLAN-to-MSTI Mapping:** Administrators define which VLANs are grouped into specific MSTIs. This allows for different spanning tree topologies for different traffic types.

    *   **MST BPDU:** Extended BPDUs used by MSTP switches to exchange information about MST regions and their configurations.

    *   **Internal Spanning Tree (IST):** A special instance that runs within the MST region. It is responsible for forwarding BPDUs between the MST region and the outside world (i.e., switches not part of the same MST region) and for handling VLANs not explicitly assigned to other MSTIs. The IST always has an MSTI ID of 0.

*   **MSTP Port Roles (within an MSTI):** Similar to RSTP, but applied on a per-MSTI basis.

    *   **Master Port:** The port in an MSTI that provides the best path towards the Root Bridge for that specific MSTI. Analogous to the Root Port in STP/RSTP.
    *   **Designated Port:** The port on a network segment that provides the best path towards the Root Bridge for that specific MSTI. Analogous to the Designated Port in STP/RSTP.
    *   **Alternate Port:** A port that provides an alternative path towards the Root Bridge for a specific MSTI. It is in a discarding state.
    *   **Backup Port:** A port that provides a redundant path to a segment where another port on the same switch is already Designated for a specific MSTI. It is in a discarding state.
    *   **Disabled Port:** A port that is administratively shut down.

*   **MSTP Port States (within an MSTI):**

    *   **Discarding:** The port does not forward frames (except BPDUs) and does not learn MAC addresses. Analogous to Blocking/Listening/Disabled in STP.
    *   **Learning:** The port does not forward frames but learns MAC addresses.
    *   **Forwarding:** The port forwards frames and learns MAC addresses.

---

### 4. How MSTP Works

MSTP operates by building multiple spanning trees, each optimized for a specific group of VLANs.

*   **MST Region Formation:**
    1.  Switches with identical MST Configuration (Name, Revision, Format Version) form an MST region.
    2.  Within an MST region, all switches participate in the IST (MSTI 0).
    3.  For each defined MSTI, a separate spanning tree is calculated.

*   **Root Bridge Election (per MSTI):**
    1.  For each MSTI, a Root Bridge is elected based on the Bridge ID. This election is independent for each MSTI.
    2.  Switches within an MST region can have different Root Bridges for different MSTIs.

*   **Path Cost Calculation (per MSTI):**
    1.  The path cost to the Root Bridge is calculated for each MSTI, based on the link costs.
    2.  **Link Cost:** Predefined based on link speed (e.g., 10 Gbps = 2, 1 Gbps = 4, 100 Mbps = 19). These costs can be manually adjusted.
    3.  **Total Path Cost:** The sum of link costs from a port to the Root Bridge for a specific MSTI.

*   **BPDU Exchange and MSTI Calculation:**
    1.  Switches within an MST region exchange MST BPDUs.
    2.  Each MST BPDU carries information about the MST configuration and the Root Bridge for each MSTI within the region.
    3.  Switches use this information to calculate the optimal spanning tree for each MSTI.
    4.  Redundant links are blocked selectively for each MSTI, allowing other links to be active for different MSTIs.

*   **Interoperability with Non-MST Switches:**
    *   MSTP switches also run the Common Spanning Tree (CST).
    *   BPDUs from non-MST switches are processed by the IST (MSTI 0) of the MST region.
    *   MST BPDUs are encapsulated within CST BPDUs when traversing across non-MST segments to maintain the MST region's context.

---

### 5. MST Configuration and Implementation

Configuring MSTP involves defining the MST region and mapping VLANs to MSTIs.

*   **Configuration Steps (Typical Cisco IOS Example):**

    1.  **Enter MST configuration mode:**
        ```
        Switch# configure terminal
        Switch(config)# spanning-tree mst configuration
        ```

    2.  **Define MST Region Name:**
        ```
        Switch(config-mst)# name <region-name>
        ```
        *Example:* `name Sales_Network`

    3.  **Define MST Revision Number:**
        ```
        Switch(config-mst)# revision <revision-number>
        ```
        *Example:* `revision 5`

    4.  **Define MST Format Version:**
        ```
        Switch(config-mst)# format is ieee
        ```
        (This is the default and recommended setting)

    5.  **Map VLANs to MST Instances:**
        ```
        Switch(config-mst)# instance <instance-id> vlan <vlan-list>
        ```
        *Example:*
        ```
        instance 1 vlan 10,20,30
        instance 2 vlan 40,50
        instance 3 vlan 60-70
        ```

    6.  **Exit MST configuration mode:**
        ```
        Switch(config-mst)# exit
        ```

    7.  **Apply MST configuration to interfaces (optional but recommended):**
        *   By default, MSTP is enabled globally. You might need to configure MST for specific VLANs on interfaces.
        *   Ensure interfaces are in the correct VLANs.

*   **Verification Commands:**

    *   `show spanning-tree mst`: Displays the MST configuration and status of MSTIs.
    *   `show spanning-tree mst summary`: Provides a summary of MST instances and their status.
    *   `show spanning-tree mst detail`: Shows detailed information about each MSTI, including root bridge, port roles, etc.
    *   `show spanning-tree mst configuration`: Displays the current MST region configuration.

---

### 6. Advantages of MSTP

MSTP offers significant advantages over STP and RSTP in complex networks.

*   **Improved Bandwidth Utilization:** Allows for multiple spanning tree instances, enabling load balancing across redundant links. Different traffic types can use different paths.
*   **Faster Convergence:** While not as fast as RSTP on a per-link failure, MSTP offers faster convergence for topology changes within an MST region compared to STP.
*   **Scalability:** Manages complex topologies more efficiently by grouping VLANs and creating distinct spanning trees.
*   **Simplified Configuration for VLAN Groups:** Administrators can group VLANs with similar traffic patterns and apply specific spanning tree policies to them.
*   **Interoperability:** Can coexist with STP and RSTP environments.

---

### 7. Disadvantages and Considerations of MSTP

*   **Complexity:** MSTP is more complex to configure and manage than STP or RSTP due to the introduction of regions, instances, and mappings.
*   **Configuration Consistency:** Maintaining consistent MST configurations across all switches in an MST region is critical. Mismatched configurations can lead to unexpected behavior.
*   **Troubleshooting:** Diagnosing issues in an MSTP environment can be more challenging due to the multiple layers of spanning tree instances.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of Spanning Tree Protocol (STP)?
a) To increase the number of redundant links in a network.
b) To ensure a loop-free Layer 2 topology by blocking redundant paths.
c) To improve the speed of data transmission by optimizing routing paths.
d) To provide IP addressing for devices on the network.

**Question 2:**
Which of the following are limitations of traditional STP/RSTP in modern networks? (Select all that apply)
a) Inability to prevent broadcast storms.
b) Creation of a single spanning tree instance, leading to suboptimal path selection for different traffic types.
c) Very slow convergence times in response to link failures.
d) Underutilization of redundant links.

**Question 3:**
What are the three key parameters that define an MST Region?
a) IP Address, Subnet Mask, Default Gateway
b) VLAN IDs, Port Speeds, Duplex Settings
c) MST Format Version, MST Name, MST Revision Number
d) Root Bridge Priority, Root Port Cost, Designated Port Role

**Question 4:**
Explain the concept of VLAN-to-MSTI mapping in MSTP and its benefit.

**Question 5:**
If a switch has MST configurations with different Revision Numbers but the same Name and Format Version, what will happen?
a) The switches will form separate MST regions.
b) The switches will form a single MST region, but instability may occur.
c) The switches will ignore the MST configuration and revert to STP.
d) The switches will immediately become non-operational.

---

### 9. Answers to Practice Questions

**Answer 1:**
b) To ensure a loop-free Layer 2 topology by blocking redundant paths.

**Answer 2:**
b) Creation of a single spanning tree instance, leading to suboptimal path selection for different traffic types.
d) Underutilization of redundant links.

**Answer 3:**
c) MST Format Version, MST Name, MST Revision Number

**Answer 4:**
VLAN-to-MSTI mapping in MSTP allows administrators to group specific VLANs and assign them to particular Multiple Spanning Tree Instances (MSTIs). The benefit of this is that each MSTI can have its own independent spanning tree topology, rooted on its own Root Bridge and with its own set of active and blocked ports. This enables:
*   **Load Balancing:** Different traffic types (e.g., voice, video, data) can be mapped to different MSTIs, each potentially using a different path through the network, thus distributing traffic and utilizing redundant links more effectively.
*   **Optimized Path Selection:** For specific groups of VLANs, administrators can tailor the spanning tree to select the most efficient paths for their traffic, rather than relying on a single, potentially suboptimal path for all traffic.

**Answer 5:**
b) The switches will form a single MST region, but instability may occur.
*Explanation:* While the Name and Format Version are the same, the differing Revision Number indicates a configuration mismatch. MSTP will attempt to reconcile this, but it can lead to unpredictable behavior and network instability as switches try to converge with inconsistent information. Ideally, all switches within an MST region must have identical MST configurations.

---

### 10. Important Points to Remember

*   **MSTP is an extension of RSTP (IEEE 802.1w) and STP (IEEE 802.1D).**
*   **MSTP allows for multiple spanning tree instances, each mapping to a group of VLANs.**
*   **An MST Region is defined by a consistent MST Name, Format Version, and Revision Number.**
*   **The IST (Instance 0) is the Common Spanning Tree within an MST region and handles inter-region communication.**
*   **MSTP improves bandwidth utilization and load balancing by allowing different traffic types to use different paths.**
*   **Configuration consistency within an MST region is paramount for stability.**
*   **MSTP is more complex to configure and troubleshoot than STP or RSTP.**
*   **Understanding port roles (Master, Designated, Alternate, Backup) and states (Discarding, Learning, Forwarding) within each MSTI is crucial.**
*   **Link costs are used to determine the best path to the Root Bridge for each MSTI.**
