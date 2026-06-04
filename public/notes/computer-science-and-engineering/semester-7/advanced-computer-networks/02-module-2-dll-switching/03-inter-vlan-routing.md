---
title: "Inter-VLAN Routing"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c437"
status: "completed"
scrapedAt: "2026-05-20T16:59:59.767Z"
---
# Advanced Computer Networks: Module 2 - DLL Switching

## Topic: Inter-VLAN Routing

### Learning Outcomes:

*   **Understand the need for Inter-VLAN Routing:** Explain why routing between different VLANs is necessary.
*   **Identify different methods of Inter-VLAN Routing:** Differentiate between the various approaches to achieve inter-VLAN communication.
*   **Configure Router-on-a-Stick:** Detail the steps and concepts involved in configuring the Router-on-a-Stick method.
*   **Configure Layer 3 Switches:** Explain how Layer 3 switches facilitate inter-VLAN routing and describe their configuration.
*   **Analyze and troubleshoot Inter-VLAN Routing:** Identify common issues and apply troubleshooting techniques for inter-VLAN connectivity.

---

### 1. The Need for Inter-VLAN Routing

**Key Concept:** VLANs (Virtual Local Area Networks) segment a physical network into multiple logical broadcast domains. While this enhances security, performance, and manageability by isolating traffic within each VLAN, it also creates communication silos. Devices in different VLANs cannot directly communicate with each other without a routing mechanism.

**Why Inter-VLAN Routing is Necessary:**

*   **Resource Sharing:** Users in one VLAN may need to access resources (servers, printers, etc.) located in another VLAN.
*   **Application Requirements:** Some applications are designed to operate across different segments of a network.
*   **Business Continuity:** Different departments or user groups might be assigned to different VLANs for organizational purposes, but still require inter-departmental communication.
*   **Security Policy Enforcement:** While VLANs provide isolation, specific security policies might allow or deny traffic between certain VLANs. Routing is the gateway through which these policies are enforced.

**Analogy:** Think of VLANs as different floors in a building. Each floor is a separate, isolated environment. To move between floors, you need a staircase or an elevator, which acts as the "router" between these floors.

---

### 2. Methods of Inter-VLAN Routing

There are two primary methods for achieving Inter-VLAN Routing:

#### a) Router-on-a-Stick (ROAS)

**Key Concept:** This is a legacy but still widely used method where a single physical router interface is used to route traffic between multiple VLANs. This is achieved by using **subinterfaces** and **802.1q trunking**.

**How it Works:**

1.  **VLAN Creation:** VLANs are created on the switches.
2.  **Trunk Link:** A trunk link is configured between the switch and the router. This trunk link carries traffic for multiple VLANs.
3.  **Subinterfaces:** The physical router interface is divided into multiple logical subinterfaces, one for each VLAN that needs to be routed.
4.  **VLAN Tagging (802.1q):** Each subinterface is configured to recognize and associate with a specific VLAN using 802.1q VLAN tagging. When traffic enters the router from a subinterface, the router knows which VLAN the traffic belongs to.
5.  **IP Addressing:** Each subinterface is assigned an IP address within the IP subnet corresponding to the VLAN it represents. This IP address acts as the **default gateway** for devices in that VLAN.
6.  **Routing:** When a device in VLAN A wants to communicate with a device in VLAN B, the traffic is sent to the default gateway (the router's subinterface for VLAN A). The router then routes the traffic to the appropriate subinterface for VLAN B and forwards it to the destination device.

**Advantages:**

*   Cost-effective, as only one router interface is needed.
*   Simpler to understand and configure for smaller networks.

**Disadvantages:**

*   **Bottleneck:** The single physical router interface can become a performance bottleneck as all inter-VLAN traffic passes through it.
*   **Scalability Issues:** As the number of VLANs increases, the configuration on the router becomes more complex.
*   **Reliability:** If the single physical interface fails, all inter-VLAN communication stops.

#### b) Layer 3 Switches

**Key Concept:** A Layer 3 switch combines the functionality of a Layer 2 switch with the routing capabilities of a router. Each VLAN is assigned a Switched Virtual Interface (SVI), which acts as its default gateway.

**How it Works:**

1.  **VLAN Creation:** VLANs are created on the Layer 3 switch.
2.  **SVI Creation:** A Switched Virtual Interface (SVI) is created for each VLAN that needs to participate in routing. This SVI is essentially a virtual interface that represents the VLAN on the switch.
3.  **IP Addressing:** Each SVI is assigned an IP address within the IP subnet corresponding to the VLAN it represents. This IP address serves as the default gateway for devices in that VLAN.
4.  **ARP (Address Resolution Protocol):** The Layer 3 switch uses ARP to resolve the MAC addresses of devices within each VLAN.
5.  **Routing:** When a device in VLAN A wants to communicate with a device in VLAN B, the traffic is sent to the default gateway (the SVI for VLAN A). The Layer 3 switch, being aware of the IP addresses and corresponding SVIs for both VLANs, routes the traffic directly between the SVIs without needing an external router.

**Advantages:**

*   **Higher Performance:** Routing is performed in hardware on the switch ASIC, leading to significantly faster inter-VLAN routing compared to ROAS.
*   **Scalability:** Easily scalable by creating more SVIs for new VLANs.
*   **Simplified Network Design:** Reduces the need for an external router solely for inter-VLAN routing.
*   **Improved Port Density:** More VLANs can be supported without consuming physical router ports.

**Disadvantages:**

*   **Higher Cost:** Layer 3 switches are generally more expensive than Layer 2 switches.
*   **Complexity:** Configuration can be more complex for advanced routing features.

---

### 3. Configuring Router-on-a-Stick (ROAS)

**Prerequisites:**

*   A router with at least one Ethernet interface.
*   A Layer 2 switch capable of 802.1q trunking.
*   Knowledge of basic router and switch configuration.

**Configuration Steps:**

#### On the Switch:

1.  **Create VLANs:**
    ```
    Switch> enable
    Switch# configure terminal
    Switch(config)# vlan 10
    Switch(config-vlan)# name Sales
    Switch(config-vlan)# exit
    Switch(config)# vlan 20
    Switch(config-vlan)# name Marketing
    Switch(config-vlan)# exit
    ```

2.  **Assign Ports to VLANs:**
    ```
    Switch(config)# interface GigabitEthernet0/1  // Port connected to host in Sales VLAN
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 10
    Switch(config-if)# exit
    Switch(config)# interface GigabitEthernet0/2  // Port connected to host in Marketing VLAN
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 20
    Switch(config-if)# exit
    ```

3.  **Configure the Trunk Link to the Router:**
    ```
    Switch(config)# interface GigabitEthernet0/24 // Port connected to the router
    Switch(config-if)# switchport mode trunk
    Switch(config-if)# switchport trunk allowed vlan 10,20 // Specify allowed VLANs
    Switch(config-if)# no shutdown
    Switch(config-if)# exit
    ```

#### On the Router:

1.  **Create Subinterfaces:**
    ```
    Router> enable
    Router# configure terminal
    Router(config)# interface GigabitEthernet0/0  // Physical interface connected to the switch
    Router(config-if)# no ip address
    Router(config-if)# no shutdown
    ```

2.  **Configure Subinterface for VLAN 10 (Sales):**
    ```
    Router(config)# interface GigabitEthernet0/0.10 // '.10' indicates VLAN ID
    Router(config-subif)# description Gateway for Sales VLAN
    Router(config-subif)# encapsulation dot1Q 10 // Specify 802.1q encapsulation and VLAN ID
    Router(config-subif)# ip address 192.168.10.1 255.255.255.0 // IP address for Sales VLAN gateway
    Router(config-subif)# no shutdown
    Router(config-subif)# exit
    ```

3.  **Configure Subinterface for VLAN 20 (Marketing):**
    ```
    Router(config)# interface GigabitEthernet0/0.20 // '.20' indicates VLAN ID
    Router(config-subif)# description Gateway for Marketing VLAN
    Router(config-subif)# encapsulation dot1Q 20 // Specify 802.1q encapsulation and VLAN ID
    Router(config-subif)# ip address 192.168.20.1 255.255.255.0 // IP address for Marketing VLAN gateway
    Router(config-subif)# no shutdown
    Router(config-subif)# exit
    ```

4.  **Enable IP Routing (if not already enabled):**
    ```
    Router(config)# ip routing
    ```

**Host Configuration:**

*   Devices in VLAN 10 (Sales) should have an IP address in the 192.168.10.0/24 subnet and their default gateway set to 192.168.10.1.
*   Devices in VLAN 20 (Marketing) should have an IP address in the 192.168.20.0/24 subnet and their default gateway set to 192.168.20.1.

---

### 4. Configuring Layer 3 Switches

**Prerequisites:**

*   A Layer 3 switch capable of routing.
*   Basic switch configuration knowledge.

**Configuration Steps:**

1.  **Create VLANs:**
    ```
    L3Switch> enable
    L3Switch# configure terminal
    L3Switch(config)# vlan 10
    L3Switch(config-vlan)# name Sales
    L3Switch(config-vlan)# exit
    L3Switch(config)# vlan 20
    L3Switch(config-vlan)# name Marketing
    L3Switch(config-vlan)# exit
    ```

2.  **Create Switched Virtual Interfaces (SVIs):**
    ```
    L3Switch(config)# interface Vlan10
    L3Switch(config-if)# description Gateway for Sales VLAN
    L3Switch(config-if)# ip address 192.168.10.1 255.255.255.0
    L3Switch(config-if)# no shutdown
    L3Switch(config-if)# exit
    L3Switch(config)# interface Vlan20
    L3Switch(config-if)# description Gateway for Marketing VLAN
    L3Switch(config-if)# ip address 192.168.20.1 255.255.255.0
    L3Switch(config-if)# no shutdown
    L3Switch(config-if)# exit
    ```

3.  **Assign Ports to VLANs:**
    ```
    L3Switch(config)# interface GigabitEthernet0/1 // Port connected to host in Sales VLAN
    L3Switch(config-if)# switchport mode access
    L3Switch(config-if)# switchport access vlan 10
    L3Switch(config-if)# exit
    L3Switch(config)# interface GigabitEthernet0/2 // Port connected to host in Marketing VLAN
    L3Switch(config-if)# switchport mode access
    L3Switch(config-if)# switchport access vlan 20
    L3Switch(config-if)# exit
    ```

4.  **Enable IP Routing (crucial for L3 switches):**
    ```
    L3Switch(config)# ip routing
    ```

**Host Configuration:**

*   Devices in VLAN 10 (Sales) should have an IP address in the 192.168.10.0/24 subnet and their default gateway set to 192.168.10.1.
*   Devices in VLAN 20 (Marketing) should have an IP address in the 192.168.20.0/24 subnet and their default gateway set to 192.168.20.1.

---

### 5. Analyzing and Troubleshooting Inter-VLAN Routing

**Common Issues and Solutions:**

*   **No Connectivity Between VLANs:**
    *   **Check Default Gateway:** Ensure hosts have the correct default gateway configured, matching the router subinterface or SVI IP address.
    *   **Check IP Addresses and Subnets:** Verify that hosts have IP addresses within the correct subnet for their VLAN and that the subnet masks are correct.
    *   **Check Router/L3 Switch Routing Configuration:**
        *   **ROAS:** Ensure subinterfaces are up, correctly encapsulated, and have the right IP addresses. Check that the `ip routing` command is enabled on the router.
        *   **L3 Switch:** Verify that SVIs are created, up, and have the correct IP addresses. Ensure `ip routing` is enabled on the switch.
    *   **Check Trunk Configuration:** Ensure the trunk link between the switch and router (for ROAS) or between switches (if SVIs are on different switches in a multi-switch environment) is correctly configured to allow the relevant VLANs.
    *   **Check Access Control Lists (ACLs):** ACLs on the router or Layer 3 switch might be blocking traffic between VLANs. Review and adjust ACLs as needed.

*   **VLANs Not Tagged Correctly on Trunk:**
    *   **ROAS:** On the router subinterface, ensure `encapsulation dot1Q <VLAN_ID>` is correctly configured. On the switch trunk port, verify that the VLANs are allowed.
    *   **L3 Switch:** If using Layer 3 switches in a multi-switch topology for inter-VLAN routing, ensure trunk links between switches are configured to allow the necessary VLANs.

*   **SVI/Subinterface is Down:**
    *   **ROAS:** Check if the physical interface on the router and the corresponding physical interface on the switch are `no shutdown`. Ensure the trunk link on the switch is also `no shutdown`.
    *   **L3 Switch:** Ensure the `interface VlanX` is configured with `no shutdown`.

*   **ARP Issues:**
    *   **Check ARP Tables:** Use `show ip arp` on the router or L3 switch to see if the gateway IP addresses are resolving to the correct MAC addresses.
    *   **Broadcast Storms:** Excessive broadcasts can interfere with ARP.

**Troubleshooting Tools and Commands:**

*   `ping`: To test basic connectivity.
*   `traceroute` (or `tracert` on Windows): To identify the path traffic takes and where it might be failing.
*   `show ip interface brief` (Router/L3 Switch): To check the status of interfaces and SVIs.
*   `show vlan brief` (Switch): To verify VLAN creation and port assignments.
*   `show interfaces trunk` (Switch): To check the status of trunk links and allowed VLANs.
*   `show ip route` (Router/L3 Switch): To view the routing table and ensure routes to different VLAN subnets exist.
*   `show running-config`: To review the current configuration.
*   `debug ip packet` (Router/L3 Switch - use with caution): Can provide detailed information about packets being processed.

---

### Important Points to Remember

*   **VLANs segment broadcast domains, but they don't inherently allow communication between segments.** Routing is required.
*   **Router-on-a-Stick (ROAS)** uses subinterfaces and 802.1q tagging on a single router interface.
*   **Layer 3 Switches** perform routing directly using Switched Virtual Interfaces (SVIs), offering better performance.
*   Each VLAN that needs to be routed must have a **default gateway** configured, which is typically an IP address on a router subinterface or an SVI.
*   The **`ip routing` command** is essential on routers and Layer 3 switches to enable routing functionality.
*   **Trunk links** are critical for carrying traffic for multiple VLANs between switches and routers (ROAS).
*   **Troubleshooting** involves systematically checking IP addressing, subnetting, default gateways, interface status, and routing configurations.
*   **ACLs** can be used to control traffic flow between VLANs, so always check them if connectivity is blocked.

---

### Practice Questions/Exercises

**Question 1:** A network administrator wants to segment the network into two VLANs (VLAN 10 for Sales and VLAN 20 for Marketing). Devices in VLAN 10 need to access a server in VLAN 20. Which of the following is the most cost-effective method to achieve this if the administrator only has a single router with one available Ethernet port?

a) Use a Layer 3 switch with SVIs for both VLANs.
b) Configure Router-on-a-Stick.
c) Create a separate router for each VLAN.
d) Directly connect devices in VLAN 10 to devices in VLAN 20.

**Question 2:** On a Layer 3 switch, what is the term for the virtual interface configured to provide a default gateway for a specific VLAN?

a) Router Interface
b) Subinterface
c) Switched Virtual Interface (SVI)
d) VLAN Interface

**Question 3:** You have configured Router-on-a-Stick for VLAN 10 (192.168.10.0/24) and VLAN 20 (192.168.20.0/24). A user in VLAN 10 cannot reach a device in VLAN 20. You verify that the user's IP address is 192.168.10.5 with a default gateway of 192.168.10.1. The router's GigabitEthernet0/0.10 subinterface is configured with 192.168.10.1 and 192.168.10.20 with 192.168.20.1. The trunk link is correctly configured. What is a likely cause of the problem?

a) The router's `ip routing` command is not enabled.
b) The switch port connected to the host in VLAN 10 is configured as a trunk port.
c) The device in VLAN 20 does not have a default gateway.
d) The router's GigabitEthernet0/0.20 subinterface is missing the `encapsulation dot1Q 20` command.

**Question 4:** Explain the primary advantage of using a Layer 3 switch for inter-VLAN routing over the Router-on-a-Stick method.

**Question 5:** You are configuring a trunk link between a Layer 2 switch and a router for Router-on-a-Stick. Which command on the switch would allow traffic for VLANs 10, 30, and 50 to pass over this trunk?

a) `switchport trunk allowed vlan add 10,30,50`
b) `switchport trunk allowed vlan 10,30,50`
c) `switchport trunk native vlan 10,30,50`
d) `switchport trunk allowed vlan except 10,30,50`

---

### Answers to Practice Questions

**Answer 1:**
b) Configure Router-on-a-Stick.
*   **Explanation:** Router-on-a-Stick is specifically designed to route traffic between multiple VLANs using a single router interface, making it cost-effective when only one router port is available.

**Answer 2:**
c) Switched Virtual Interface (SVI)
*   **Explanation:** SVIs are the virtual interfaces created on Layer 3 switches to act as the default gateway for their respective VLANs.

**Answer 3:**
d) The router's GigabitEthernet0/0.20 subinterface is missing the `encapsulation dot1Q 20` command.
*   **Explanation:** If the subinterface for VLAN 20 is missing the correct 802.1q encapsulation, the router will not be able to properly process or route traffic destined for VLAN 20. While other options could cause issues, the missing encapsulation is a direct cause for a failure to reach VLAN 20 from VLAN 10 if the router is responsible for routing. If the router's `ip routing` is not enabled (a), it would affect all routing. If the switch port were a trunk (b), it would be incorrect for an end device. If the device in VLAN 20 doesn't have a default gateway (c), it wouldn't be able to initiate communication to other VLANs but would still be reachable.

**Answer 4:**
The primary advantage of using a Layer 3 switch for inter-VLAN routing over Router-on-a-Stick is **performance**. Layer 3 switches perform routing in hardware using their ASICs, which is significantly faster than the software-based routing performed by a router's CPU in the Router-on-a-Stick method. This leads to lower latency and higher throughput for inter-VLAN traffic.

**Answer 5:**
b) `switchport trunk allowed vlan 10,30,50`
*   **Explanation:** This command explicitly permits only VLANs 10, 30, and 50 to traverse the trunk link. The `add` keyword in option (a) is for dynamically adding VLANs that already exist on the switch, and `except` in option (d) is for excluding specific VLANs.
