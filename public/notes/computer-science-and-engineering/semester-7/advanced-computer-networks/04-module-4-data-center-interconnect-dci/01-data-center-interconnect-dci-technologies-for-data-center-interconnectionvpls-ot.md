---
title: "Data Center Interconnect (DCI) - Technologies for Data Center Interconnection(VPLS, OTV, and VXLAN)"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 4: Data Center Interconnect (DCI) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c44a"
status: "completed"
scrapedAt: "2026-05-20T17:00:16.378Z"
---
# Advanced Computer Networks: Module 4 - Data Center Interconnect (DCI)

## Topic: Data Center Interconnect (DCI) - Technologies for Data Center Interconnection (VPLS, OTV, and VXLAN)

### 1. Introduction to Data Center Interconnect (DCI)

**1.1 What is Data Center Interconnect (DCI)?**

*   **Definition:** DCI refers to the technologies and methods used to connect two or more data centers, enabling them to share resources, provide business continuity, and support distributed applications.
*   **Purpose of DCI:**
    *   **Disaster Recovery (DR) / Business Continuity (BC):** Replicating data and applications to a secondary data center to maintain operations in case of a primary data center failure.
    *   **Load Balancing:** Distributing traffic and workloads across multiple data centers for improved performance and availability.
    *   **Resource Sharing:** Allowing applications and services in one data center to access resources (e.g., storage, compute) in another.
    *   **Geographic Distribution:** Supporting applications that require low latency access for users in different geographical locations.
    *   **Cloud Integration:** Connecting on-premises data centers to public cloud environments.

**1.2 Key Requirements for DCI:**

*   **Scalability:** Ability to handle growing traffic volumes and increasing numbers of connected data centers.
*   **Low Latency:** Minimizing delay for real-time applications and inter-data center communication.
*   **High Bandwidth:** Providing sufficient capacity to transfer large datasets and support application demands.
*   **Resiliency and Reliability:** Ensuring continuous operation through redundant paths and fast failover mechanisms.
*   **Layer 2 Extension:** Enabling the seamless extension of Layer 2 networks (VLANs) across multiple data centers, crucial for certain applications.
*   **Security:** Protecting data in transit between data centers.

**1.3 Importance of DCI in Modern Networking:**

*   With the rise of cloud computing, hybrid cloud strategies, and the need for resilience, robust DCI solutions are essential for modern enterprise IT infrastructure.

---

### 2. VPLS (Virtual Private LAN Service)

**2.1 What is VPLS?**

*   **Definition:** VPLS is a Layer 2 VPN technology that emulates an Ethernet LAN across a packet-switched network (like MPLS). It allows multiple sites to be part of the same broadcast domain, as if they were directly connected via a single Ethernet switch.
*   **How it Works:**
    *   VPLS uses Label Distribution Protocol (LDP) or BGP to establish signaling tunnels between Provider Edge (PE) routers.
    *   Each VPLS instance is identified by a unique Virtual Switch Instance (VSI).
    *   VPLS operates as a "provider bridge" service.
    *   **"Martini" Mode (RFC 4448):** Uses MPLS Pseudowires (PWs) to transport Ethernet frames.
    *   **"Kompella" Mode (RFC 4761):** Uses BGP for signaling and MPLS PWs.
*   **Key Features:**
    *   **Layer 2 Extension:** Extends Layer 2 broadcast domains across geographically dispersed locations.
    *   **Any-to-Any Connectivity:** Supports full mesh or partial mesh connectivity between participating sites.
    *   **Seamless Mobility:** Allows devices to move between sites without requiring IP address changes.
    *   **Ease of Migration:** Simplifies the migration of legacy applications that rely on Layer 2 connectivity.

**2.2 VPLS for DCI:**

*   **Use Case:** Connecting multiple data centers at Layer 2, allowing them to share the same IP subnets and broadcast domains. This is critical for applications that require contiguous Layer 2 connectivity, such as active-active disaster recovery scenarios or distributed databases.
*   **Advantages:**
    *   Provides a true Layer 2 extension.
    *   Supports existing IP addressing schemes without modification.
    *   Simpler for applications that are not IP-aware and rely on MAC addresses and broadcast traffic.
*   **Disadvantages:**
    *   **Scalability Limitations:** Broadcast domains can become large and inefficient with many sites.
    *   **Spanning Tree Protocol (STP) Issues:** STP can block links in a full mesh VPLS, leading to suboptimal utilization and potential instability if not managed carefully.
    *   **IP Address Collisions:** If not properly managed, can lead to IP address conflicts between sites.
    *   **Protocol Overhead:** Requires specific signaling protocols (LDP/BGP) and MPLS infrastructure.

**2.3 Example Scenario:**

Imagine two data centers (DC1 and DC2) needing to share a common Layer 2 network for a critical application. VPLS can be used to extend the VLAN from DC1 to DC2. Servers in both data centers would appear to be on the same subnet, allowing seamless communication and failover.

---

### 3. OTV (Overlay Transport Virtualization)

**3.1 What is OTV?**

*   **Definition:** OTV is Cisco's proprietary technology that extends Layer 2 segments over a Layer 3 transport network. It encapsulates Layer 2 traffic within Layer 3 packets, allowing Layer 2 extension without building a full mesh of Layer 2 tunnels.
*   **How it Works:**
    *   OTV is deployed on data center edge devices (e.g., Nexus switches).
    *   It creates an "overlay" network over the existing "underlay" Layer 3 network.
    *   **Control Plane:** Uses a proprietary protocol (similar to BGP) to exchange MAC address reachability information between OTV edge devices.
    *   **Data Plane:** Encapsulates Layer 2 frames (using a proprietary header) into Layer 3 IP packets for transport.
    *   **MAC Address Propagation:** Only MAC addresses that need to be advertised to other data centers are propagated. This significantly reduces MAC address table size on PE devices compared to VPLS.
    *   **Edge Device Functionality:** OTV edge devices act as MAC address translators and MAC address routers.
*   **Key Features:**
    *   **Layer 2 Extension over Layer 3:** The primary benefit, allowing L2 connectivity across routed networks.
    *   **Selective MAC Advertisement:** Reduces control plane and data plane overhead compared to full VPLS.
    *   **Scalability:** More scalable than VPLS for large-scale L2 extensions due to reduced MAC flooding.
    *   **Loop Prevention:** Built-in mechanisms to prevent Layer 2 loops.
    *   **Active-Active Data Centers:** Facilitates active-active DC deployments.

**3.2 OTV for DCI:**

*   **Use Case:** Connecting multiple data centers where a Layer 3 transport network already exists or can be easily provisioned. It's particularly useful for extending specific VLANs or subnets across data centers for DR, load balancing, or migration.
*   **Advantages:**
    *   Leverages existing Layer 3 infrastructure, simplifying deployment.
    *   More scalable than VPLS for large deployments due to selective MAC advertisement.
    *   Reduces the need for complex Layer 2 topologies.
*   **Disadvantages:**
    *   **Proprietary Technology:** Specific to Cisco hardware.
    *   **Control Plane Complexity:** While more efficient than VPLS broadcast, the OTV control plane can be complex to manage.
    *   **Potential for MAC Flapping:** If not configured carefully, rapid MAC address movements between sites can lead to instability.
    *   **Encapsulation Overhead:** Adds a proprietary header to encapsulated frames.

**3.3 Example Scenario:**

An organization has two data centers connected by a robust Layer 3 IP network. They need to extend a critical subnet (e.g., 192.168.10.0/24) to allow for a disaster recovery solution. OTV can be deployed on the edge routers of each data center, encapsulating traffic for that subnet and sending it over the Layer 3 network. This makes servers on that subnet reachable across both data centers without requiring a full Layer 2 mesh.

---

### 4. VXLAN (Virtual Extensible LAN)

**4.1 What is VXLAN?**

*   **Definition:** VXLAN is a Layer 2 over Layer 3 tunneling protocol that creates virtual Layer 2 networks (VLANs) on top of an existing IP network. It encapsulates Layer 2 Ethernet frames within UDP/IP packets, allowing the creation of large numbers of isolated Layer 2 segments.
*   **How it Works:**
    *   **Encapsulation:** An Ethernet frame is encapsulated within a UDP header, followed by an IP header, and then sent across the Layer 3 network.
    *   **VXLAN Network Identifier (VNI):** A 24-bit identifier that allows for up to 16 million logical Layer 2 segments, overcoming the limitations of traditional VLANs (4096).
    *   **MAC Address Inundation:** To handle MAC address learning and forwarding, VXLAN typically uses a control plane (like BGP EVPN) or a multicast-based flood-and-learn mechanism.
    *   **Tunnel End Points (TEPs):** Devices that perform VXLAN encapsulation and decapsulation.
    *   **Underlay Network:** The underlying IP network (IPv4 or IPv6) that carries the VXLAN encapsulated traffic.
*   **Key Features:**
    *   **Massive Scalability:** Supports up to 16 million segments, vastly exceeding VLAN capacity.
    *   **Layer 2 Extension over Layer 3:** Extends Layer 2 segments across Layer 3 boundaries.
    *   **Decoupling of Tenant Networks from Underlay:** Allows for flexible network segmentation and multi-tenancy.
    *   **Overcomes VLAN limitations:** Eliminates the 4094 VLAN ID constraint.
    *   **Foundation for Network Virtualization:** Enables the creation of complex virtual network topologies.

**4.2 VXLAN for DCI:**

*   **Use Case:** Connecting multiple data centers to extend Layer 2 segments, but with a focus on scalability and multi-tenancy. It's ideal for cloud environments, large-scale data centers, and scenarios requiring extensive network segmentation.
*   **Advantages:**
    *   **High Scalability:** Supports a massive number of segments, essential for large, multi-tenant environments.
    *   **Efficient Use of IP Network:** Encapsulates traffic within UDP/IP, making it efficient for transport.
    *   **Flexibility:** Allows for dynamic creation and management of virtual networks.
    *   **Interoperability:** VXLAN is an IETF standard, promoting vendor interoperability.
    *   **Integration with SDN/NFV:** A key enabler for software-defined networking and network functions virtualization.
*   **Disadvantages:**
    *   **Control Plane Complexity:** Requires a sophisticated control plane (e.g., BGP EVPN) for efficient MAC address learning and forwarding. Without it, flood-and-learn can be inefficient.
    *   **Troubleshooting:** Can be more complex to troubleshoot due to multiple layers of encapsulation.
    *   **Broadcast Domain Management:** Needs careful management to avoid the issues of large broadcast domains, even with increased segment capacity.

**4.3 Example Scenario:**

A cloud provider needs to offer isolated Layer 2 networks to multiple tenants, with some tenants requiring connectivity between their on-premises data center and their cloud instances. VXLAN can be used to create these isolated virtual networks, extending them from the on-premises DC to the cloud provider's infrastructure. Each tenant's network gets a unique VNI, ensuring isolation.

---

### 5. Comparison of VPLS, OTV, and VXLAN for DCI

| Feature            | VPLS                                   | OTV (Cisco proprietary)                 | VXLAN                                     |
| :----------------- | :------------------------------------- | :-------------------------------------- | :---------------------------------------- |
| **Layer**          | Layer 2                                | Layer 2 over Layer 3                    | Layer 2 over Layer 3                      |
| **Protocol**       | MPLS Pseudowires                       | Proprietary encapsulation               | UDP/IP encapsulation                      |
| **Scalability (Segments)** | Limited by VPLS instance and control plane | Good, selective MAC advertisement       | Extremely high (16 million VNIs)          |
| **Underlay Requirement** | MPLS network                           | Layer 3 IP network                      | Layer 3 IP network                        |
| **MAC Address Management** | Full MAC propagation, potentially inefficient | Selective MAC advertisement, more efficient | Requires control plane (e.g., BGP EVPN)   |
| **Broadcast Domain** | Extends Layer 2 broadcast domain       | Extends specific Layer 2 segments       | Extends specific Layer 2 segments         |
| **Standards**      | IETF (RFC 4448, 4761)                  | Cisco Proprietary                       | IETF (RFC 7348)                           |
| **Use Case Focus** | Legacy apps, direct L2 extension       | Active-active DC, L2 extension over L3  | Cloud, multi-tenancy, massive scalability |
| **Control Plane**  | LDP/BGP for signaling                  | Proprietary control plane               | BGP EVPN, Flood & Learn (less efficient)  |

---

### 6. Key Concepts and Definitions Recap

*   **DCI:** Connecting multiple data centers for resilience, resource sharing, etc.
*   **VPLS:** Layer 2 VPN emulation over MPLS, creating a bridged LAN across sites.
*   **OTV:** Cisco's proprietary solution for extending Layer 2 segments over a Layer 3 network using encapsulation.
*   **VXLAN:** IETF standard for Layer 2 over Layer 3 tunneling using UDP/IP encapsulation, offering massive scalability.
*   **VNI (VXLAN Network Identifier):** 24-bit identifier for VXLAN segments.
*   **TEP (Tunnel Endpoint):** Device performing VXLAN encapsulation/decapsulation.
*   **Underlay Network:** The physical IP network that carries the encapsulated traffic.
*   **Overlay Network:** The virtual network created on top of the underlay network.
*   **MAC Address Table:** The table on network devices that maps MAC addresses to interface/next-hop information.

---

### 7. Practice Questions and Exercises

**Question 1:**
Which DCI technology is known for its ability to extend Layer 2 broadcast domains across multiple sites and is often used for legacy applications that require contiguous Layer 2 connectivity?
    a) OTV
    b) VXLAN
    c) VPLS
    d) MPLS

**Question 2:**
What is the primary advantage of VXLAN over traditional VLANs in terms of scalability?
    a) It reduces broadcast traffic.
    b) It supports up to 16 million segments.
    c) It works only at Layer 3.
    d) It uses a simpler control plane.

**Question 3:**
Explain the main difference in how VPLS and OTV handle MAC address advertisement between data centers.

**Question 4:**
A network administrator needs to connect two data centers that are far apart and connected by a robust IP backbone. They need to extend a specific subnet to enable active-active application deployment. Which technology would be a good fit, considering its ability to leverage existing Layer 3 infrastructure and its scalability for this purpose?
    a) VPLS
    b) OTV
    c) Traditional STP
    d) RIP

**Question 5:**
What is the function of a VNI in VXLAN?

---

### 8. Answers to Practice Questions

**Answer 1:**
c) VPLS
    *   **Explanation:** VPLS is designed to emulate a bridged LAN, extending broadcast domains and supporting Layer 2 protocols across sites, making it suitable for legacy applications.

**Answer 2:**
b) It supports up to 16 million segments.
    *   **Explanation:** VXLAN's 24-bit VNI allows for a massive number of logical Layer 2 segments, overcoming the 4094 limit of VLANs.

**Answer 3:**
*   **VPLS:** Typically propagates all learned MAC addresses across the VPLS pseudowires. This can lead to larger MAC address tables on edge devices and increased control plane overhead if many devices are active.
*   **OTV:** Uses a more selective approach. It advertises only the MAC addresses that are necessary to reach devices in other data centers. This reduces the MAC address table size on OTV edge devices and improves control plane efficiency.

**Answer 4:**
b) OTV
    *   **Explanation:** OTV is designed to extend Layer 2 segments over an existing Layer 3 IP network, making it ideal for connecting geographically dispersed data centers and supporting active-active scenarios. VXLAN would also be a good fit due to its L2 over L3 nature and scalability, but OTV is a more direct Cisco-centric solution for this type of L2 extension over L3. VPLS would require an MPLS underlay, which might not be present in a typical IP backbone.

**Answer 5:**
The VNI (VXLAN Network Identifier) is a 24-bit value used in VXLAN encapsulation to identify and logically segment virtual Layer 2 networks. It acts similarly to a VLAN ID but with a much larger address space (up to 16 million).

---

### 9. Important Points to Remember

*   **DCI is critical for modern IT infrastructure:** Enabling DR, load balancing, and resource sharing.
*   **Layer 2 extension is a common requirement:** Many applications still rely on Layer 2 connectivity for proper functioning.
*   **VPLS:** Best for direct Layer 2 extension where an MPLS underlay is available, but can have scalability issues.
*   **OTV:** A Cisco-specific solution for Layer 2 extension over a Layer 3 network, offering better scalability than VPLS for L2 extension scenarios.
*   **VXLAN:** The most scalable solution, an IETF standard, ideal for cloud environments and multi-tenancy, but requires a robust control plane (like BGP EVPN) for efficient operation.
*   **Choice of technology depends on requirements:** Consider underlay network availability, scalability needs, vendor support, and application dependencies.
*   **Control Plane is Key:** For OTV and especially VXLAN, the control plane mechanism for MAC address learning and forwarding is crucial for performance and scalability.
