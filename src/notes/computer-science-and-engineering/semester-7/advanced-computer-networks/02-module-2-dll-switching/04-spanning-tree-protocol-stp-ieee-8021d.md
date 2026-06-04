---
title: "Spanning Tree Protocol (STP) - IEEE 802.1D"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c438"
status: "completed"
scrapedAt: "2026-05-20T17:00:00.513Z"
---
# Advanced Computer Networks: Module 2 - DLL Switching

## Topic: Spanning Tree Protocol (STP) - IEEE 802.1D

---

### **1. Introduction to Spanning Tree Protocol (STP)**

**1.1 The Problem of Bridged Networks: Loops**

*   **Bridges and Switches:** Devices that operate at Layer 2 (Data Link Layer) of the OSI model, forwarding frames based on MAC addresses.
*   **Redundancy in Networks:** To improve reliability and availability, network designers often implement redundant links between bridges/switches.
*   **The Loop Problem:** Without a mechanism to manage redundancy, redundant links create **loops** in the Layer 2 network.
*   **Consequences of Loops:**
    *   **Broadcast Storms:** Frames are endlessly forwarded within the loop, consuming excessive bandwidth and CPU resources, leading to network collapse.
    *   **MAC Address Table Instability:** Switches learn MAC addresses by observing the source MAC address of incoming frames. In a loop, a MAC address can be learned on multiple ports simultaneously, causing the switch to repeatedly update its MAC address table, leading to inconsistent forwarding.
    *   **Multiple Frame Copies:** A single frame can be delivered multiple times to the destination, causing application issues.

**1.2 The Solution: Spanning Tree Protocol (STP)**

*   **Purpose:** STP is a **Layer 2 protocol** designed to prevent loops in Ethernet networks that have redundant links.
*   **Mechanism:** STP operates by blocking redundant paths, creating a single, loop-free logical topology from the physical topology.
*   **IEEE Standard:** The most common implementation is **IEEE 802.1D**.

---

### **2. STP Operation and Concepts**

**2.1 Root Bridge Election**

*   **Root Bridge:** The central point of the spanning tree. All other bridges/switches calculate their shortest path to the Root Bridge.
*   **Bridge ID (BID):** A unique identifier for each bridge, consisting of:
    *   **Bridge Priority:** A configurable value (default 32768). Lower priority values are preferred.
    *   **MAC Address:** A unique hardware address. If priorities are equal, the bridge with the lowest MAC address is chosen.
*   **Process:**
    1.  All bridges initially assume they are the Root Bridge and send out **Bridge Protocol Data Units (BPDUs)**.
    2.  BPDUs contain the sender's BID.
    3.  When a bridge receives a BPDU from another bridge with a lower BID, it realizes that the sender has a better BID and ceases to consider itself the Root Bridge.
    4.  The bridge with the lowest BID becomes the **Root Bridge**.

**Example:**

| Switch | Bridge Priority | MAC Address   | BID                      |
| :----- | :-------------- | :------------ | :----------------------- |
| SW1    | 32768           | 00:11:22:AA:AA:AA | 32768:00:11:22:AA:AA:AA  |
| SW2    | 32768           | 00:11:22:BB:BB:BB | 32768:00:11:22:BB:BB:BB  |
| SW3    | 4096            | 00:11:22:CC:CC:CC | 4096:00:11:22:CC:CC:CC  |

*   SW3 will be elected as the Root Bridge because it has the lowest Bridge Priority (4096). If SW1 and SW2 had the same priority, SW1 would be elected over SW2 due to its lower MAC address.

**2.2 Root Port Election**

*   **Root Port:** The port on a non-root bridge that has the **shortest path cost** to the Root Bridge.
*   **Path Cost:** The sum of the costs of all the links on the path to the Root Bridge. Lower cost is better.
*   **Port Cost Values (IEEE 802.1D):**
    *   1000 Mbps (Gigabit Ethernet): 19
    *   100 Mbps (Fast Ethernet): 19
    *   10 Mbps (Ethernet): 100
    *   *Note: Newer standards (802.1w, 802.1s) use different, more granular cost values.*
*   **Process:**
    1.  Each non-root bridge examines the path cost to the Root Bridge through each of its ports.
    2.  The port with the lowest path cost to the Root Bridge is designated as the **Root Port**.
    3.  If there's a tie in path cost, the port with the lowest **neighbor BID** is chosen. If still tied, the port with the lowest **neighbor port identifier** is chosen.

**Example (Continuing from above, assuming SW3 is Root):**

*   **Switch A:** Connected to SW3 (Root) via a 100Mbps link (Cost 19).
    *   Root Port on Switch A: The port connected to SW3 (Cost 19).
*   **Switch B:** Connected to SW3 (Root) via a 100Mbps link (Cost 19) AND to Switch A via a 100Mbps link (Cost 19).
    *   Path 1 (via SW3): Cost 19.
    *   Path 2 (via Switch A): Switch A's Root Port cost (19) + Link cost to Switch A (19) = 38.
    *   Root Port on Switch B: The port connected to SW3 (Cost 19).

**2.3 Designated Port Election**

*   **Designated Port:** On each network segment (link between two bridges/switches), the port on the bridge that has the **shortest path cost** to the Root Bridge.
*   **Process:**
    1.  On a link, both connected bridges will calculate their path cost to the Root Bridge.
    2.  The bridge with the lower path cost to the Root Bridge will have its port on that segment declared the **Designated Port**.
    3.  If the path costs are equal, the bridge with the lower BID will have its port declared the Designated Port.
    4.  The Designated Port is responsible for forwarding traffic onto that segment.

**Example (Link between Switch A and Switch B):**

*   Assume Switch A has a path cost of 19 to the Root.
*   Assume Switch B has a path cost of 19 to the Root.
*   If Switch A has a lower BID than Switch B:
    *   The port on Switch A connected to Switch B is the **Designated Port**.
    *   The port on Switch B connected to Switch A is a **Non-Designated Port** (and will likely be blocked).

**2.4 Blocking Ports**

*   **Blocking Port:** Any port that is not a Root Port or a Designated Port is put into a **blocking state**.
*   **Purpose:** Blocking ports prevents loops by ensuring there's only one active path between any two network segments.
*   **Blocking Port Behavior:** Does not forward user data frames, does not learn MAC addresses from these ports. It still listens to BPDUs to monitor for topology changes.

---

### **3. STP States**

STP ports transition through several states during operation:

*   **Blocking:** Receives BPDUs but does not forward data frames or learn MAC addresses. This is the initial state for non-Root, non-Designated ports to prevent loops.
*   **Listening:** Receives BPDUs, learns the Root Bridge, Root Port, and Designated Ports. It **does not** forward data frames or learn MAC addresses. The port remains in this state for a **Forward Delay** timer (typically 15 seconds).
*   **Learning:** Continues to receive BPDUs, learns MAC addresses from incoming frames, but **does not** forward data frames. The port remains in this state for another **Forward Delay** timer (typically 15 seconds).
*   **Forwarding:** Fully functional. Receives BPDUs, forwards data frames, and learns MAC addresses. This is the state for Root Ports and Designated Ports.
*   **Disabled:** The port is administratively shut down. It does not participate in STP.

**State Transition Timer:**

*   **Forward Delay:** A timer (default 15 seconds) used to transition from Listening to Learning, and from Learning to Forwarding. The total time in Listening and Learning states is typically 2 * Forward Delay = 30 seconds before a port can become operational. This delay allows the spanning tree to stabilize.

---

### **4. STP Message Exchange (BPDUs)**

*   **Bridge Protocol Data Units (BPDUs):** Special Layer 2 frames used by switches to exchange STP information.
*   **BPDU Content:**
    *   Root Bridge ID
    *   Root Path Cost
    *   Sender Bridge ID
    *   Sender Port ID
    *   Hello Time (default 2 seconds)
    *   Max Age (default 20 seconds)
    *   Forward Delay (default 15 seconds)
*   **BPDU Generation:** The Root Bridge periodically sends BPDUs (Hello BPDUs) out all its ports. Other switches relay these BPDUs.
*   **BPDU Aging:** If a switch does not receive a BPDU on a port for a period of **Max Age** (default 20 seconds) + **Hello Time** (default 2 seconds), it assumes the topology has changed and may initiate a recalculation.

---

### **5. STP Timers and Their Impact**

*   **Hello Time (default 2 seconds):** The interval at which the Root Bridge sends BPDUs.
*   **Max Age (default 20 seconds):** The time a switch will hold onto a BPDU before considering the information stale. If a BPDU is not received within this time, the switch will consider the sender of the BPDU to be gone and may re-evaluate the topology.
*   **Forward Delay (default 15 seconds):** The time a port spends in the Listening and Learning states before transitioning to Forwarding. This delay helps prevent temporary loops during topology changes.

**Impact of Timers:**

*   **Faster Convergence:** Reducing timers can lead to faster convergence after a topology change, but increases BPDU traffic.
*   **Slower Convergence:** Increasing timers reduces BPDU traffic but slows down convergence.

---

### **6. Topology Changes and Reconvergence**

*   **Topology Change Notification (TCN) BPDU:** When a link goes up or down on a switch, it sends a TCN BPDU towards the Root Bridge.
*   **Propagation:** The TCN BPDU propagates up the spanning tree to the Root Bridge.
*   **Action:** When the Root Bridge receives a TCN BPDU, it sends a Topology Change Notification message down to all switches.
*   **Port Flushing:** Switches receiving this notification will flush the MAC address table entries learned on ports *other than* the Root Port and the port that received the topology change notification. This is crucial to ensure switches learn correct MAC addresses on the new stable topology.
*   **Convergence Delay:** The time it takes for STP to reconverge after a topology change is approximately **Max Age + Forward Delay** (e.g., 20 + 15 = 35 seconds). During this time, some ports might temporarily move to blocking or forwarding, potentially causing transient loops or packet loss.

---

### **7. STP Parameters and Configuration**

*   **Setting the Root Bridge:** Manually configure a switch with a very low bridge priority (e.g., 0 or 4096) to ensure it becomes the Root Bridge. This is often done on a core switch.
*   **Port Roles:**
    *   Root Port
    *   Designated Port
    *   Non-Designated Port (Blocked)
*   **Port States:**
    *   Blocking
    *   Listening
    *   Learning
    *   Forwarding
    *   Disabled

**Example Configuration Snippet (Cisco IOS):**

```
! To make SW1 the root bridge
spanning-tree vlan 1 priority 4096

! To set a port to be the root port if connected to the root
interface GigabitEthernet0/1
 spanning-tree portfast // Not recommended for inter-switch links
 spanning-tree cost 19 // Explicitly set cost for a 100 Mbps link (default is usually fine)

! To make a port a Designated Port with a lower cost to be preferred
interface GigabitEthernet0/2
 spanning-tree cost 5 // Lower cost to be preferred as a designated port
```

---

### **8. Practice Questions and Exercises**

**Question 1:**
What is the primary problem that the Spanning Tree Protocol (STP) is designed to prevent in bridged networks?
a) High latency
b) Broadcast storms
c) IP address conflicts
d) Excessive CPU utilization on end-user devices

**Question 2:**
What are the two main components of a Bridge ID (BID)?
a) IP Address and MAC Address
b) Bridge Priority and MAC Address
c) VLAN ID and Port Number
d) Switch Model and Firmware Version

**Question 3:**
On a non-root switch, what is the role of the Root Port?
a) The port with the shortest path cost to the Root Bridge.
b) The port with the lowest MAC address on the switch.
c) The port that forwards traffic to end-user devices.
d) The port that blocks redundant traffic.

**Question 4:**
If two switches have the same bridge priority, which factor is used to break the tie in electing the Root Bridge?
a) The switch with the highest MAC address.
b) The switch with the lowest MAC address.
c) The switch with the most connected ports.
d) The switch that first sent a BPDU.

**Question 5:**
Name the STP port states and briefly describe the function of each.

---

### **9. Answers to Practice Questions**

**Answer 1:**
b) Broadcast storms
*   **Explanation:** STP's main purpose is to prevent loops, which lead to broadcast storms and MAC address table instability.

**Answer 2:**
b) Bridge Priority and MAC Address
*   **Explanation:** The BID is composed of the bridge priority and the bridge's MAC address.

**Answer 3:**
a) The port with the shortest path cost to the Root Bridge.
*   **Explanation:** The Root Port is the port that provides the best path towards the Root Bridge.

**Answer 4:**
b) The switch with the lowest MAC address.
*   **Explanation:** When bridge priorities are equal, the switch with the numerically lowest MAC address wins the Root Bridge election.

**Answer 5:**
*   **Disabled:** The port is administratively shut down and does not participate in STP.
*   **Blocking:** Receives BPDUs, but does not forward data frames or learn MAC addresses. Prevents loops.
*   **Listening:** Receives BPDUs, determines Root Bridge, Root Port, and Designated Ports. Does not forward data or learn MAC addresses. Takes the Forward Delay timer.
*   **Learning:** Continues to receive BPDUs, learns MAC addresses. Does not forward data frames. Takes another Forward Delay timer.
*   **Forwarding:** Fully functional. Forwards data frames and learns MAC addresses. This is the state for Root Ports and Designated Ports.

---

### **10. Important Points to Remember**

*   **STP is essential for Layer 2 loop prevention.**
*   **The Root Bridge is the foundation of the spanning tree.**
*   **Root Port selection is based on the shortest path cost to the Root Bridge.**
*   **Designated Port selection is based on the shortest path cost to the Root Bridge on a given segment.**
*   **Blocking ports are crucial for breaking redundant paths and preventing loops.**
*   **BPDUs are the communication mechanism for STP.**
*   **STP convergence can take time (typically 30-50 seconds), during which packet loss or transient loops may occur.**
*   **Manually configuring the Root Bridge priority is a common best practice for network stability.**
*   **STP (IEEE 802.1D) is a foundational protocol, but newer versions like RSTP (Rapid STP - IEEE 802.1w) and MSTP (Multiple STP - IEEE 802.1s) offer faster convergence and more flexibility.**

---
