---
title: "Rapid Spanning Tree Protocol (RSTP) - IEEE 802.1w"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c439"
status: "completed"
scrapedAt: "2026-05-20T17:00:01.513Z"
---
# Advanced Computer Networks - Module 2: DLL Switching

## Topic: Rapid Spanning Tree Protocol (RSTP) - IEEE 802.1w

---

### **Introduction**

The Spanning Tree Protocol (STP) (IEEE 802.1d) was designed to prevent loops in bridged networks. However, its slow convergence time when topology changes occur was a significant drawback, especially in larger and more dynamic networks. Rapid Spanning Tree Protocol (RSTP), defined in IEEE 802.1w, addresses these limitations by providing a much faster and more efficient mechanism for loop prevention and topology convergence.

---

### **1. Understanding the Need for RSTP: Limitations of STP (IEEE 802.1d)**

Before diving into RSTP, it's crucial to understand the shortcomings of its predecessor.

*   **Slow Convergence:** The primary issue with STP is its slow convergence time. When a link fails or a new link is added, STP can take 30-50 seconds to converge. This is due to the timers it uses (Forward Delay, Max Age).
    *   **Timers in STP:**
        *   **Hello Time:** (Default 2 seconds) The interval at which BPDUs are sent by Root Bridges.
        *   **Max Age:** (Default 20 seconds) The maximum time a switch will retain a BPDU before considering the Root Bridge lost.
        *   **Forward Delay:** (Default 15 seconds) The time a port remains in Listening and Learning states before transitioning to Forwarding. This is applied twice during port state transitions.
*   **Port States:** STP has five port states:
    *   **Disabled:** The port is administratively shut down.
    *   **Blocking:** The port receives BPDUs but does not forward user traffic or learn MAC addresses.
    *   **Listening:** The port is preparing to forward traffic and is actively participating in the spanning tree calculation, but still doesn't forward user traffic or learn MAC addresses.
    *   **Learning:** The port learns MAC addresses but does not forward user traffic.
    *   **Forwarding:** The port forwards user traffic and learns MAC addresses.
*   **Port Roles:** STP has three port roles:
    *   **Root Port:** The port on a non-Root Bridge that has the lowest path cost to the Root Bridge.
    *   **Designated Port:** The port on a network segment that has the lowest path cost to the Root Bridge. Only one designated port per segment.
    *   **Blocked Port:** Any port that is not a Root Port or a Designated Port. These ports prevent loops.

**Key Point:** The long timers in STP were intentionally designed to allow BPDUs to propagate throughout the network and ensure all switches had an accurate view of the topology before enabling forwarding. However, this leads to significant downtime during topology changes.

---

### **2. Introduction to RSTP (IEEE 802.1w)**

RSTP significantly improves upon STP by reducing convergence time to a matter of seconds, often milliseconds. It achieves this through several key enhancements:

*   **Faster Convergence Mechanisms:**
    *   **Edge Ports:** Ports connected to end devices (like PCs or servers) that are configured as "edge ports" can transition to the Forwarding state immediately, without waiting for timers. They do not generate topology change notifications.
    *   **Point-to-Point Links:** RSTP assumes that links between switches are point-to-point. On these links, if a switch receives a superior BPDU (indicating a better path to the root or a better root bridge), it can immediately transition its existing Root Port to Forwarding and put its other port in a discarding state.
    *   **Proposal/Agreement Mechanism:** This handshake mechanism allows switches to negotiate port roles and states much faster than the passive waiting of STP.
*   **Reduced Port States:** RSTP simplifies the port states from five to three:
    *   **Discarding:** This state combines the STP Disabled, Blocking, and Listening states. The port does not forward user traffic and does not learn MAC addresses.
    *   **Learning:** The port learns MAC addresses but does not forward user traffic.
    *   **Forwarding:** The port forwards user traffic and learns MAC addresses.
*   **New Port Roles:** RSTP introduces two new port roles to complement the existing ones:
    *   **Alternate Port:** A port that provides an alternative path to the Root Bridge. If the Root Port fails, an Alternate Port can transition to the Root Port role.
    *   **Backup Port:** A port that provides a redundant path to a network segment where another port on the same switch is already Designated. If the Designated Port fails, a Backup Port can transition to the Designated Port role.

**Key Point:** RSTP aims to have all non-edge ports converge to either the Forwarding or Discarding state quickly, and to move to Forwarding only when absolutely necessary.

---

### **3. RSTP Port States and Roles Explained**

Let's delve deeper into the RSTP port states and roles.

#### **3.1 RSTP Port States**

*   **Discarding:**
    *   The port is not participating in forwarding user traffic.
    *   The port is not learning MAC addresses.
    *   The port still receives BPDUs to maintain the spanning tree topology.
    *   This state replaces STP's Disabled, Blocking, and Listening states.
*   **Learning:**
    *   The port is not forwarding user traffic.
    *   The port *is* learning MAC addresses from incoming frames.
    *   This state is similar to STP's Learning state.
*   **Forwarding:**
    *   The port is forwarding user traffic.
    *   The port is learning MAC addresses.
    *   This state is similar to STP's Forwarding state.

#### **3.2 RSTP Port Roles**

The selection of port roles in RSTP is similar to STP but with the addition of new roles for faster convergence.

1.  **Root Port:**
    *   On each non-Root Bridge, the port with the lowest path cost to the Root Bridge.
    *   This is the primary path to the Root Bridge.
    *   RSTP maintains **one** Root Port per switch.

2.  **Designated Port:**
    *   On each network segment, the port with the lowest path cost to the Root Bridge.
    *   This port is responsible for forwarding traffic onto that segment.
    *   There is **one** Designated Port per segment.

3.  **Alternate Port:**
    *   A port that is not a Root Port but provides an alternative path to the Root Bridge.
    *   If the current Root Port fails, an Alternate Port can transition to the Root Port role quickly.
    *   These ports remain in the **Discarding** state until needed.

4.  **Backup Port:**
    *   A port on a switch that provides a redundant path to a segment where another port on the *same* switch is already Designated.
    *   This occurs when multiple ports on the same switch connect to the same segment (e.g., using a hub, which is uncommon in modern networks, or in specific configurations).
    *   If the Designated Port on that segment fails, the Backup Port can transition to the Designated Port role.
    *   These ports also remain in the **Discarding** state until needed.

**Example:** Imagine three switches (SW1, SW2, SW3) connected in a triangle, with SW1 being the Root Bridge.

*   SW2's port connected to SW1 will be its Root Port (assuming the link has the lowest cost).
*   SW3's port connected to SW1 will be its Root Port.
*   The port on SW1 connected to SW2 will be Designated for that segment.
*   The port on SW1 connected to SW3 will be Designated for that segment.
*   SW2's port connected to SW3:
    *   If SW2 has a higher path cost to the root through this link than its Root Port, this port will become an **Alternate Port**.
    *   If SW3 has a higher path cost to the root through this link than its Root Port, SW3's port connected to SW2 will become an **Alternate Port**.

**How Alternate/Backup Ports help:** If SW2's Root Port to SW1 fails, its Alternate Port to SW3 can immediately transition to the Root Port role, bypassing the Listening and Learning states.

---

### **4. RSTP Operations and Convergence**

RSTP's speed is achieved through active participation and negotiation rather than passive waiting.

#### **4.1 RSTP BPDU Format and Fields**

RSTP uses a similar BPDU format to STP but with key differences:

*   **Protocol Version:** Set to 2 for RSTP.
*   **BPDU Type:**
    *   **0x02:** Configuration BPDU (similar to STP)
    *   **0x00:** Topology Change Notification (TCN) BPDU (RSTP uses its own mechanism, but can still send traditional TCNs for backward compatibility or if a link goes down unexpectedly).
*   **Port Role:** A new field indicating the role of the port sending the BPDU (Root, Designated, Alternate, Backup).
*   **Port State:** A field indicating the current state of the port sending the BPDU (Discarding, Learning, Forwarding).
*   **Flags:** Crucial for RSTP's rapid convergence:
    *   **Proposal Flag (P):** Sent by a switch proposing to become the Designated Port for a segment.
    *   **Agreement Flag (A):** Sent by a switch acknowledging a proposal, indicating agreement.
    *   **Topology Change Flag (T):** Indicates a topology change has occurred. RSTP manages TCNs differently.
    *   **Forwarding Change Flag (F):** Indicates a port has transitioned to or from the Forwarding state.

#### **4.2 Proposal/Agreement Mechanism**

This is the cornerstone of RSTP's speed. When a switch considers one of its ports to be a Designated Port on a link, it sends a BPDU with the **Proposal (P)** flag set.

1.  **Switch A (Proposing):** Sends a BPDU with the P flag to its neighbor on a potential Designated Port. This BPDU proposes that this port should be the Designated Port for that link.
2.  **Switch B (Receiving Proposal):**
    *   If Switch B determines that the incoming port from Switch A is a better Root Port than its current Root Port, it will:
        *   Put all its other non-edge ports connected to the same segment into **Discarding**.
        *   Put its current Root Port into **Discarding** (temporarily).
        *   Send a BPDU back to Switch A with the **Agreement (A)** flag set.
    *   If Switch B does not accept the proposal (e.g., it has a superior path to the root through this link), it will send a BPDU with the A flag set but without agreeing to the proposal. This is typically when the neighbor is the root.
3.  **Switch A (Receiving Agreement):** Once Switch A receives the A flag from Switch B for the proposed port, it knows that Switch B has accepted its proposal and has also taken the necessary steps to ensure no loops. Switch A's proposed port can then immediately transition to **Forwarding**.

**Example:** Two switches, SW1 and SW2, are connected. SW1 is the Root Bridge.

*   SW1 sends BPDUs from its port towards SW2.
*   SW2 receives a BPDU from SW1 indicating SW1 is the Root. SW2 designates its port connected to SW1 as its Root Port.
*   Now, consider a second link between SW1 and SW2.
    *   SW1 wants to designate its port on this second link as Designated. It sends a BPDU with the **Proposal (P)** flag to SW2.
    *   SW2 receives this BPDU. It compares the path cost from SW1 via this new link with its current Root Port (the first link). If the new link is a better path, SW2 performs the following:
        *   It puts its *other* non-edge ports into Discarding.
        *   It puts its current Root Port into Discarding.
        *   It sends an **Agreement (A)** BPDU back to SW1 on that second link.
    *   SW1 receives the A BPDU. It now knows SW2 has agreed. SW1's proposed port on the second link can immediately go to **Forwarding**. SW2's port receiving this BPDU will also transition to Forwarding, becoming the new Root Port if it's the best path.

#### **4.3 Edge Ports**

*   An Edge Port is a port that is connected directly to an end station.
*   **Configuration:** These ports are manually configured as "edge ports" on the switch.
*   **Behavior:**
    *   They transition directly to the **Forwarding** state immediately upon activation.
    *   They do not generate Topology Change Notifications (TCNs) when they go up or down. This prevents unnecessary reconvergence events in the entire network for local link failures on end devices.
    *   If an edge port receives a BPDU, it loses its edge port status and becomes a non-edge port, behaving like a regular switch port.

**Important:** Only ports connected to end devices should be configured as edge ports. Configuring a port connected to another switch as an edge port can create loops.

#### **4.4 Link Types**

RSTP categorizes links to determine how quickly ports can transition.

*   **Point-to-Point Links:**
    *   These are typically full-duplex links between two switches.
    *   On these links, RSTP can use the Proposal/Agreement mechanism for very fast convergence.
    *   When a switch receives a superior BPDU on a port that is not currently its Root Port, it can immediately propose its current Root Port to become forwarding if the superior BPDU is from a better root.

*   **Shared Links:**
    *   These are half-duplex links where multiple devices can transmit simultaneously, but only one at a time.
    *   RSTP treats these links more cautiously, similar to STP, as it cannot guarantee unidirectional communication.
    *   They do not participate in the rapid Proposal/Agreement mechanism.

**Key Point:** Most modern networks use full-duplex point-to-point links between switches, allowing RSTP to operate at its full speed.

#### **4.5 Topology Change Handling in RSTP**

RSTP significantly improves topology change handling:

1.  **Edge Port Detection:** When an edge port goes down, no TCN is generated.
2.  **Non-Edge Port Change:** When a non-edge port (Root, Designated, Alternate, Backup) transitions to or from the **Forwarding** state:
    *   The switch sets the **Topology Change (T)** flag in the BPDUs it sends out on all its *non-edge* ports.
    *   It also sets the **Forwarding Change (F)** flag.
    *   When a switch receives a BPDU with the T flag set, it considers this a topology change event.
    *   The switch then flushes MAC addresses learned on all its **non-edge** ports.
    *   After flushing, it will start learning MAC addresses on all non-edge ports again. This process is much faster than STP's timer-based flushing.
3.  **BPDU Guard and Root Guard:** These features are still relevant and work with RSTP.

**Key Point:** RSTP's TCN mechanism is more efficient because it doesn't require a separate TCN BPDU flood. The T flag in regular BPDUs propagates the change, and the F flag ensures that ports that were in forwarding but are no longer are also handled.

---

### **5. RSTP Configuration and Verification**

#### **5.1 Basic Configuration**

On most Cisco-compatible devices, RSTP is often enabled by default or can be enabled with a simple command.

```bash
// Enter global configuration mode
configure terminal

// Enable RSTP (often the default, but good to know)
spanning-tree mode rapid-pvst  // For Per-VLAN Spanning Tree Plus with RSTP
spanning-tree mode rapid-stp   // For globally enabled RSTP (less common now, PVST+ is preferred)

// Configure a port as an edge port
interface GigabitEthernet0/1
 description Uplink to SW2
 spanning-tree portfast // This command enables edge port functionality
 spanning-tree bpduguard enable // Recommended for edge ports
 exit

// Configure port priorities, costs (advanced)
// interface GigabitEthernet0/2
//  spanning-tree cost 50
//  spanning-tree priority 64
// exit
```

**Note:** `spanning-tree portfast` is the command to enable edge port functionality. `spanning-tree bpduguard enable` is highly recommended for ports configured with `portfast` to prevent loops if an unauthorized switch is connected.

#### **5.2 Verification Commands**

*   **Show spanning-tree:**
    *   Displays the spanning tree information for all VLANs.
    *   Look for port roles (Root, Designated, Alternate, Backup) and states (Discarding, Learning, Forwarding).
    *   Pay attention to the "Root Path Cost" and "Cost" columns.
    *   Check for "Edge" next to portfast-enabled ports.

    ```bash
    show spanning-tree
    ```

*   **Show spanning-tree active:**
    *   Shows only the active ports in the spanning tree.

    ```bash
    show spanning-tree active
    ```

*   **Show spanning-tree interface <interface-id> [detail]:**
    *   Shows detailed information about a specific interface.

    ```bash
    show spanning-tree interface GigabitEthernet0/1
    ```

*   **Show spanning-tree summary:**
    *   Provides a summary of spanning tree status, including the number of root ports, designated ports, etc.

    ```bash
    show spanning-tree summary
    ```

---

### **6. Advantages of RSTP over STP**

*   **Faster Convergence:** The most significant advantage. Typically converges in seconds or milliseconds, compared to 30-50 seconds for STP.
*   **Reduced Port States:** Simplifies the states and makes the protocol easier to understand and manage.
*   **Edge Port Feature:** Provides immediate transition to forwarding for end-device connections, improving user experience.
*   **Point-to-Point Link Handling:** Leverages full-duplex links for rapid proposal/agreement mechanisms.
*   **Improved Topology Change Handling:** More efficient TCN propagation and MAC address table flushing.
*   **Backward Compatibility:** Can interoperate with STP (though the network will converge at STP's slower speed if STP devices are present).

---

### **7. Practice Questions and Exercises**

**Question 1:** What are the three port states in RSTP?
**Answer:** Discarding, Learning, Forwarding.

**Question 2:** Explain the purpose of an Alternate Port in RSTP.
**Answer:** An Alternate Port provides a backup path to the Root Bridge. If the current Root Port fails, an Alternate Port can quickly transition to the Root Port role, enabling faster convergence.

**Question 3:** What is the main advantage of RSTP over traditional STP (IEEE 802.1d)?
**Answer:** Faster convergence time. RSTP can converge in seconds or milliseconds, while STP takes 30-50 seconds.

**Question 4:** How does RSTP achieve faster convergence on point-to-point links?
**Answer:** Through the Proposal/Agreement mechanism. A switch proposes a port to be designated, and the neighbor responds with an agreement if it accepts the proposal and makes necessary state changes on its own ports.

**Question 5:** What is the function of an "edge port" in RSTP, and what is the command to configure it on a Cisco-compatible switch?
**Answer:** An edge port is connected to an end device. It transitions to the Forwarding state immediately and does not generate topology change notifications when it goes up or down. The command is `spanning-tree portfast`.

**Question 6:** If a non-edge port on an RSTP switch fails, how does the switch inform other switches about this topology change?
**Answer:** The switch sets the Topology Change (T) flag and Forwarding Change (F) flag in the BPDUs it sends on its non-edge ports. This triggers other switches to flush MAC addresses learned on their non-edge ports and start learning again.

**Question 7:** A switch has two ports connected to the same network segment, and both ports on this switch are designated for that segment. What is the role of the second designated port?
**Answer:** It would be a Backup Port. This indicates a redundant path to the segment where another port on the same switch is already the Designated Port.

---

### **8. Important Points to Remember**

*   RSTP (IEEE 802.1w) is designed for faster convergence than STP (IEEE 802.1d).
*   Key improvements include reduced port states (Discarding, Learning, Forwarding), new port roles (Alternate, Backup), edge ports, and the Proposal/Agreement mechanism.
*   **Edge Ports** are crucial for fast access layer convergence.
*   The **Proposal/Agreement mechanism** is central to RSTP's speed on point-to-point links.
*   RSTP uses T and F flags in BPDUs for more efficient topology change notifications.
*   Always configure edge ports with **BPDU Guard** for security.
*   While RSTP is faster, ensure all switches in the VLAN/domain are running RSTP for maximum benefit. If STP devices are present, the entire network will operate at STP's slower convergence speed.
*   RSTP is a link-layer protocol used in Layer 2 switching to prevent loops.

---
