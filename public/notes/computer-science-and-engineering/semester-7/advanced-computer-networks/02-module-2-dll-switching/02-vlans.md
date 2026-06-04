---
title: "VLANs"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c436"
status: "completed"
scrapedAt: "2026-05-20T16:59:59.068Z"
---
# Advanced Computer Networks: Module 2 - DLL Switching: VLANs

---

## 1. Introduction to VLANs

**Learning Outcome:** Understand the fundamental concept and purpose of Virtual Local Area Networks (VLANs).

### 1.1 What is a VLAN?

*   **Definition:** A Virtual Local Area Network (VLAN) is a logical grouping of network devices that are interconnected as if they were on the same Layer 2 broadcast domain, regardless of their physical location.
*   **Purpose:** VLANs allow for the segmentation of a physical network into multiple, independent, logical networks. This is achieved by assigning ports on a switch to specific VLANs.
*   **Analogy:** Imagine a large office building with many departments. Instead of having separate physical wiring for each department (which would be costly and inefficient), you can use VLANs to logically divide the building's network into departmental segments, even if the devices from different departments are plugged into the same physical switch.

### 1.2 Why use VLANs?

*   **Broadcast Domain Reduction:** Each VLAN constitutes a separate broadcast domain. This significantly reduces the number of broadcast messages that travel across the network, improving performance and reducing network congestion.
    *   **Example:** In a large network without VLANs, a broadcast from one device would be sent to all devices on the network. With VLANs, a broadcast in VLAN 10 will only be sent to devices in VLAN 10.
*   **Enhanced Security:** VLANs isolate traffic between different groups of devices. This prevents unauthorized access and improves security by limiting the scope of potential breaches.
    *   **Example:** A VLAN can be created for the finance department, preventing employees in the HR department from accessing sensitive financial data, even if they are connected to the same physical switch.
*   **Improved Network Management:** VLANs simplify network administration by allowing administrators to group users and devices logically rather than physically.
    *   **Example:** When a user moves their desk, their network connection can remain in the same VLAN without needing to re-cable or reconfigure IP addresses extensively.
*   **Cost Savings:** VLANs reduce the need for extensive re-cabling and purchasing of additional switches as the network grows or requirements change.
*   **Application Performance:** By segmenting the network, VLANs can improve the performance of specific applications by isolating their traffic and reducing contention.
    *   **Example:** VoIP traffic can be placed in a dedicated VLAN to prioritize it and ensure clear call quality, unaffected by other network traffic.

---

## 2. VLAN Tagging (IEEE 802.1Q)

**Learning Outcome:** Explain the mechanism used for VLAN tagging, specifically IEEE 802.1Q.

### 2.1 The Need for Tagging

*   **Problem:** When traffic from different VLANs needs to traverse a single link (e.g., between two switches), the switches need a way to identify which VLAN the frame belongs to.
*   **Solution:** VLAN tagging adds extra information to the Ethernet frame to identify the VLAN ID.

### 2.2 IEEE 802.1Q Standard

*   **Definition:** IEEE 802.1Q is the industry standard protocol for VLAN tagging. It defines how VLAN information is inserted into an Ethernet frame.
*   **How it works:**
    1.  An extra 4-byte tag field is inserted into the Ethernet header of an Ethernet frame.
    2.  This tag field contains information such as the **VLAN ID (VID)**, which uniquely identifies the VLAN the frame belongs to.
    3.  The tag also includes a **Priority Code Point (PCP)** for Quality of Service (QoS) and a **Drop Eligible Indicator (DEI)**.

### 2.3 Frame Format with 802.1Q Tag

```
+-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+
| Dest MAC (6)    | Src MAC (6)     |  802.1Q Tag (4) | EtherType (2)   | Payload (46-1500) | FCS (4)         |
+-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+

802.1Q Tag Structure (4 Bytes):
+-----------------+-----------------+-----------------+-----------------+
|   TPID (2)      |  PCP (3)        | DEI (1)         | VID (12)        |
+-----------------+-----------------+-----------------+-----------------+
```

*   **TPID (Tag Protocol Identifier):** Identifies the frame as an 802.1Q-tagged frame. Typically set to `0x8100`.
*   **PCP (Priority Code Point):** Used for QoS marking, indicating the priority of the frame (0-7).
*   **DEI (Drop Eligible Indicator):** Formerly Canonical Format Indicator (CFI). Used to indicate frames that can be dropped during network congestion.
*   **VID (VLAN Identifier):** The actual VLAN ID (0-4095).
    *   **VLAN IDs 0 and 4095** are reserved.
    *   Valid VIDs are typically **1 to 4094**.

### 2.4 Types of Ports and VLAN Tagging

*   **Access Ports:**
    *   **Purpose:** Connect end devices (PCs, printers, servers) to the network.
    *   **VLAN Membership:** An access port is assigned to a single VLAN.
    *   **Tagging:** Frames entering an access port from an end device are untagged. The switch **adds** the appropriate 802.1Q tag to the frame before forwarding it to another switch or device within the same VLAN. Frames leaving an access port for an end device have the tag **removed** by the switch.
*   **Trunk Ports:**
    *   **Purpose:** Connect switches to other switches, or switches to routers. They carry traffic for multiple VLANs.
    *   **VLAN Membership:** A trunk port can carry traffic for many VLANs.
    *   **Tagging:** Frames on a trunk port are **802.1Q tagged** to indicate their VLAN membership.
    *   **Native VLAN:** A special VLAN for untagged traffic on a trunk port. Frames belonging to the native VLAN are sent untagged over the trunk. All devices on the trunk link must be configured with the same native VLAN for untagged traffic to be processed correctly. This is often used for management purposes.

**Important Point to Remember:** For inter-switch communication, all links must be configured as trunk ports, and both switches must agree on the allowed VLANs and the native VLAN on that trunk.

---

## 3. VLAN Implementation and Configuration

**Learning Outcome:** Describe the concepts of static and dynamic VLAN assignment, and the role of VLAN Trunking Protocol (VTP).

### 3.1 VLAN Assignment Methods

#### 3.1.1 Static VLAN Assignment (Port-Based VLANs)

*   **Concept:** The administrator manually assigns each switch port to a specific VLAN.
*   **Pros:**
    *   Simple to configure.
    *   Predictable and easy to understand.
*   **Cons:**
    *   Time-consuming for large networks.
    *   Difficult to manage when users move frequently.
    *   Requires manual reconfiguration on the switch whenever a device moves or changes VLAN.
*   **Configuration Example (Cisco IOS):**
    ```
    Switch> enable
    Switch# configure terminal
    Switch(config)# interface GigabitEthernet0/1
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 10
    Switch(config-if)# exit
    ```

#### 3.1.2 Dynamic VLAN Assignment

*   **Concept:** VLAN membership is assigned dynamically to ports based on the MAC address of the connected device.
*   **Mechanism:** Requires a **VLAN Management Application (VMM)** or a **Network Access Control (NAC)** system that maintains a database mapping MAC addresses to VLANs. When a device connects, the switch queries the VMM to determine the correct VLAN for the port.
*   **Pros:**
    *   Automates VLAN assignment.
    *   Simplifies management for mobile users.
*   **Cons:**
    *   Requires additional infrastructure (VMM/NAC).
    *   Initial setup and maintenance of the MAC address database can be complex.
    *   Security risks if the VMM is compromised.
*   **Protocols:**
    *   **VMPS (VLAN Membership Policy Server):** A Cisco proprietary protocol for dynamic VLAN assignment.
    *   **802.1X with RADIUS:** A more modern and standardized approach where the RADIUS server handles authentication and VLAN assignment.

### 3.2 VLAN Trunking Protocol (VTP)

*   **Purpose:** VTP is a Cisco proprietary protocol that allows switches to synchronize their VLAN database information across a network. This reduces the need for manual VLAN configuration on every switch.
*   **Key Concepts:**
    *   **VTP Domain:** A group of switches that share VTP information.
    *   **VTP Modes:**
        *   **Server Mode:** Can create, modify, and delete VLANs and will propagate these changes to other switches in the domain.
        *   **Client Mode:** Receives VLAN information from servers and synchronizes its database. Cannot create or modify VLANs.
        *   **Transparent Mode:** Does not participate in VTP. It forwards VTP advertisements but does not process them. VLANs can be created and managed locally on transparent switches.
    *   **VTP Versions:** VTPv1, VTPv2, and VTPv3. VTPv3 is more robust, supporting trunking for more than one VLAN per link and providing better security.
    *   **Revision Number:** VTP uses a revision number to determine the most up-to-date VLAN database. When a switch receives a VTP advertisement with a higher revision number, it updates its VLAN database.
*   **How it works:**
    1.  Switches in a VTP domain exchange VTP advertisements.
    2.  If a server mode switch updates its VLAN database, it increments its revision number and sends out a new advertisement.
    3.  Client switches receive this advertisement. If the revision number is higher than their current revision number, they update their VLAN database and set their revision number accordingly.
*   **Configuration Example (Cisco IOS):**
    ```
    Switch> enable
    Switch# configure terminal
    Switch(config)# vtp mode server
    Switch(config)# vtp domain MY_VTP_DOMAIN
    Switch(config)# vtp password CISCO123
    Switch(config)# exit
    ```
*   **Important Considerations for VTP:**
    *   **VTP Pruning:** VTP pruning can be used to prevent unnecessary VLAN traffic from being sent over trunk links, saving bandwidth.
    *   **VTP Domain Consistency:** All switches in a VTP domain should have the same VTP domain name and password.
    *   **Revision Number Mismanagement:** A common issue is a switch with a high revision number being introduced into a domain, overwriting the existing VLAN configuration. It's often recommended to reset the revision number to 0 on a new switch before joining a VTP domain.
    *   **VTP Transparent Mode:** Useful for specific segments of the network where you don't want VTP to propagate changes.

---

## 4. Inter-VLAN Routing

**Learning Outcome:** Explain how routing between different VLANs is accomplished.

### 4.1 The Need for Inter-VLAN Routing

*   **Problem:** Devices in different VLANs cannot communicate directly at Layer 2. They reside in separate broadcast domains.
*   **Solution:** A Layer 3 device (a router or a Layer 3 switch) is required to route traffic between VLANs.

### 4.2 Methods for Inter-VLAN Routing

#### 4.2.1 Router-on-a-Stick (ROAS)

*   **Concept:** A single physical interface on a router is connected to a trunk port on a switch. The router uses subinterfaces, one for each VLAN, to route traffic between them.
*   **Configuration:**
    1.  **Switch Configuration:**
        *   Configure the link between the switch and router as a trunk port.
        *   Specify the allowed VLANs on the trunk.
    2.  **Router Configuration:**
        *   Create subinterfaces on the router's physical interface, one for each VLAN.
        *   Configure an IP address on each subinterface, which will serve as the default gateway for that VLAN.
        *   Encapsulate the traffic on each subinterface using the appropriate 802.1Q tag.
*   **Example Configuration (Cisco IOS):**
    *   **Switch Configuration:**
        ```
        Switch# configure terminal
        Switch(config)# interface GigabitEthernet0/24  // Connected to Router
        Switch(config-if)# switchport mode trunk
        Switch(config-if)# switchport trunk allowed vlan 10,20
        Switch(config-if)# exit
        ```
    *   **Router Configuration:**
        ```
        Router# configure terminal
        Router(config)# interface GigabitEthernet0/0
        Router(config-if)# no ip address
        Router(config-if)# no shutdown
        Router(config-if)# exit
        Router(config)# interface GigabitEthernet0/0.10
        Router(config-if)# encapsulation dot1Q 10  // VLAN ID 10
        Router(config-if)# ip address 192.168.10.1 255.255.255.0 // Gateway for VLAN 10
        Router(config-if)# exit
        Router(config)# interface GigabitEthernet0/0.20
        Router(config-if)# encapsulation dot1Q 20  // VLAN ID 20
        Router(config-if)# ip address 192.168.20.1 255.255.255.0 // Gateway for VLAN 20
        Router(config-if)# exit
        ```
*   **Pros:**
    *   Cost-effective as it uses a single router interface.
    *   Relatively easy to implement.
*   **Cons:**
    *   Can become a bottleneck if high traffic volume exists between VLANs due to limited bandwidth on the single trunk link.
    *   Requires manual configuration of subinterfaces for each VLAN.

#### 4.2.2 Layer 3 Switching (Switched Virtual Interfaces - SVIs)

*   **Concept:** A Layer 3 switch can perform routing between VLANs internally without needing an external router. Each VLAN is associated with a Switched Virtual Interface (SVI), which is a logical interface representing the VLAN on the switch.
*   **Configuration:**
    1.  **Create VLANs:** Define the VLANs on the switch.
    2.  **Assign ports to VLANs:** Configure access ports for end devices.
    3.  **Create SVIs:** Create a logical interface for each VLAN.
    4.  **Assign IP addresses to SVIs:** Configure an IP address on each SVI, which serves as the default gateway for devices in that VLAN.
    5.  **Enable IP routing:** Activate IP routing globally on the Layer 3 switch.
*   **Example Configuration (Cisco IOS):**
    ```
    Switch# configure terminal
    Switch(config)# vlan 10
    Switch(config-vlan)# name SALES
    Switch(config-vlan)# exit
    Switch(config)# vlan 20
    Switch(config-vlan)# name MARKETING
    Switch(config-vlan)# exit

    Switch(config)# interface GigabitEthernet0/1
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 10
    Switch(config-if)# exit
    Switch(config)# interface GigabitEthernet0/2
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 20
    Switch(config-if)# exit

    Switch(config)# interface vlan 10
    Switch(config-if)# ip address 192.168.10.1 255.255.255.0  // Gateway for VLAN 10
    Switch(config-if)# no shutdown
    Switch(config-if)# exit
    Switch(config)# interface vlan 20
    Switch(config-if)# ip address 192.168.20.1 255.255.255.0  // Gateway for VLAN 20
    Switch(config-if)# no shutdown
    Switch(config-if)# exit

    Switch(config)# ip routing // Enable routing globally
    Switch(config)# exit
    ```
*   **Pros:**
    *   Higher performance compared to ROAS as routing occurs in hardware.
    *   Simplifies network design by consolidating routing and switching functions.
    *   More scalable.
*   **Cons:**
    *   Requires a Layer 3 switch, which can be more expensive than a Layer 2 switch.

---

## 5. VLAN Management and Security

**Learning Outcome:** Discuss considerations for VLAN management and security best practices.

### 5.1 VLAN Management Considerations

*   **VLAN Planning and Design:**
    *   Define VLANs based on functional groups (e.g., departments, servers, voice, data) or security requirements.
    *   Document VLAN assignments and IP addressing schemes.
*   **IP Addressing:**
    *   Assign unique IP subnets to each VLAN.
    *   Use private IP address ranges (RFC 1918) for internal networks.
*   **Naming Conventions:**
    *   Use consistent and descriptive naming conventions for VLANs.
*   **Trunking Configuration:**
    *   Explicitly allow only necessary VLANs on trunk links to minimize broadcast traffic and potential security risks.
    *   Configure the native VLAN consistently on both ends of a trunk.
*   **VTP Management:**
    *   If using VTP, ensure consistent domain names, passwords, and VTP modes across the network.
    *   Understand the implications of revision numbers.

### 5.2 VLAN Security Best Practices

*   **Default VLAN (VLAN 1):**
    *   **Avoid using VLAN 1 for user traffic.** Management traffic and many default configurations use VLAN 1, making it a potential security risk.
    *   Change the default VLAN ID or disable it for user access.
*   **Native VLAN:**
    *   **Do not use VLAN 1 as the native VLAN** on trunk ports.
    *   Configure a dedicated, unused VLAN as the native VLAN for trunk links. This prevents unintended traffic from being placed in VLAN 1.
*   **VLAN Pruning:**
    *   Configure VLAN pruning on trunk links to prevent unnecessary broadcast traffic from traversing to other switches. This limits the scope of broadcasts and potential reconnaissance.
*   **Access Control Lists (ACLs):**
    *   Implement ACLs on Layer 3 interfaces (SVIs or router interfaces) to control traffic flow between VLANs, enforcing security policies.
*   **Port Security:**
    *   Configure port security on access ports to restrict the number of MAC addresses allowed on a port or to bind specific MAC addresses to a port, mitigating unauthorized device connections.
*   **Dynamic VLANs and 802.1X:**
    *   Use dynamic VLAN assignment with 802.1X authentication to ensure that only authorized users and devices can access the network and are placed in the correct VLAN.
*   **VTP Security:**
    *   Use strong, complex passwords for VTP.
    *   Consider VTPv3 for its enhanced security features.
    *   If VTP is not strictly necessary, consider using transparent mode or disabling VTP and managing VLANs manually on each switch.
*   **Management VLAN:**
    *   Create a separate VLAN for network management devices (e.g., management interfaces of switches, routers, firewalls) to isolate management traffic from user data.

---

## 6. Practice Questions and Exercises

**Question 1:**
What is the primary benefit of using VLANs in terms of network performance?

**Answer:**
The primary benefit is the reduction of broadcast domain size. Each VLAN forms its own broadcast domain, meaning broadcasts are contained within that VLAN, leading to less network congestion and improved performance.

---

**Question 2:**
Explain the role of the 802.1Q tag in an Ethernet frame. What are the key fields within the tag?

**Answer:**
The 802.1Q tag is inserted into an Ethernet frame to identify the VLAN membership of the frame. The key fields within the tag are:
*   **TPID (Tag Protocol Identifier):** Identifies the frame as 802.1Q tagged.
*   **PCP (Priority Code Point):** Used for Quality of Service (QoS) marking.
*   **DEI (Drop Eligible Indicator):** Indicates frames that can be dropped during congestion.
*   **VID (VLAN Identifier):** The actual VLAN ID.

---

**Question 3:**
Differentiate between an access port and a trunk port on a switch.

**Answer:**
*   **Access Port:** Connects to end devices (PCs, printers) and is assigned to a single VLAN. Frames entering from an end device are untagged, and the switch adds the VLAN tag. Frames leaving for an end device have the tag removed.
*   **Trunk Port:** Connects switches to other switches or routers and carries traffic for multiple VLANs. Frames on a trunk port are 802.1Q tagged to indicate their VLAN membership.

---

**Question 4:**
Describe the "Router-on-a-Stick" (ROAS) method of inter-VLAN routing. What is a potential drawback?

**Answer:**
ROAS involves connecting a single trunk link from a switch to a router. The router uses subinterfaces, each configured with an 802.1Q encapsulation for a specific VLAN and assigned an IP address to act as the default gateway for that VLAN.
A potential drawback is that the single trunk link can become a bandwidth bottleneck if there is high traffic volume between VLANs.

---

**Question 5:**
List three security best practices related to VLAN implementation.

**Answer:**
Three security best practices are:
1.  **Avoid using the default VLAN (VLAN 1) for user traffic.**
2.  **Configure a dedicated, unused VLAN as the native VLAN on trunk ports.**
3.  **Implement VLAN pruning to limit broadcast traffic and potential exposure.**

---

**Question 6 (Configuration Exercise):**
You have a switch and need to:
1.  Create VLAN 20 named "Accounting".
2.  Assign interface GigabitEthernet0/5 to VLAN 20 as an access port.
3.  Configure interface GigabitEthernet0/10 as a trunk port allowing VLANs 10 and 20.

Provide the Cisco IOS commands to accomplish this.

**Answer:**
```
Switch# configure terminal
Switch(config)# vlan 20
Switch(config-vlan)# name Accounting
Switch(config-vlan)# exit

Switch(config)# interface GigabitEthernet0/5
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
Switch(config-if)# exit

Switch(config)# interface GigabitEthernet0/10
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20
Switch(config-if)# exit
```

---

## 7. Important Points to Remember

*   **VLANs logically segment a physical network into smaller broadcast domains.**
*   **IEEE 802.1Q is the standard for VLAN tagging.**
*   **Access ports are for end devices, Trunk ports are for inter-switch communication.**
*   **Inter-VLAN routing requires a Layer 3 device (router or L3 switch).**
*   **VTP (VLAN Trunking Protocol) automates VLAN database synchronization.**
*   **Security best practices are crucial for effective VLAN deployment (avoid VLAN 1, secure native VLAN, etc.).**
*   **Proper planning and documentation are essential for VLAN management.**

---
This concludes the study notes for VLANs in Advanced Computer Networks, Module 2: DLL Switching.
