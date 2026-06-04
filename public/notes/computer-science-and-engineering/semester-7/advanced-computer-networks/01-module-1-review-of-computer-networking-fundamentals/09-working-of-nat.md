---
title: "Working of NAT"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c431"
status: "completed"
scrapedAt: "2026-05-20T16:59:56.208Z"
---
# ADVANCED COMPUTER NETWORKS

## Module 1: Review of Computer Networking Fundamentals

### Topic: Working of NAT (Network Address Translation)

---

### 1. Introduction to NAT

Network Address Translation (NAT) is a networking technique used to remap one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device. In simpler terms, it allows multiple devices on a private network to share a single public IP address when communicating with the internet.

**Key Concepts:**

*   **Private IP Addresses:** These are IP addresses that are not routable on the public internet and are designated for use within private networks (e.g., homes, offices). Examples include the `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16` address ranges.
*   **Public IP Addresses:** These are IP addresses that are globally unique and routable on the public internet. They are assigned by Internet Service Providers (ISPs).
*   **NAT Device:** This is typically a router or a firewall that sits at the boundary between a private network and the public internet. It performs the address translation.
*   **NAT Table (or Translation Table):** A table maintained by the NAT device that stores mappings between private IP addresses/ports and public IP addresses/ports.

**Why is NAT necessary?**

*   **IPv4 Address Exhaustion:** The primary driver for NAT was the limited number of IPv4 addresses available. NAT allows many devices to use a small pool of public IP addresses.
*   **Security:** By hiding the internal IP addresses of devices, NAT provides a basic layer of security, making it harder for external entities to directly scan or attack internal hosts.
*   **Flexibility:** Organizations can use private IP addresses internally without needing to register them with a global authority. They only need a single public IP address from their ISP.

---

### 2. Types of NAT

There are several types of NAT, each with slightly different mechanisms and use cases:

#### 2.1. Static NAT (One-to-One NAT)

*   **Description:** A static NAT configuration maps a single private IP address to a single public IP address. This mapping is permanent and manually configured on the NAT device.
*   **Purpose:** Primarily used for making specific internal servers (like web servers or mail servers) accessible from the public internet.
*   **How it works:**
    1.  An internal device with a private IP address (e.g., 192.168.1.10) needs to communicate with an external server.
    2.  The NAT device is configured to map 192.168.1.10 to a specific public IP address (e.g., 203.0.113.1).
    3.  When traffic leaves the private network, the source IP address (192.168.1.10) is replaced with the public IP address (203.0.113.1).
    4.  When return traffic arrives at the public IP address (203.0.113.1), the NAT device knows to forward it to the internal private IP address (192.168.1.10).
*   **Example:** A company's web server at `192.168.1.50` is mapped to a public IP address `203.0.113.5`. When a user on the internet requests the website, they access `203.0.113.5`. The NAT router translates this to `192.168.1.50` internally.

#### 2.2. Dynamic NAT (Many-to-Many NAT)

*   **Description:** Dynamic NAT maps private IP addresses to public IP addresses from a pool of available public IP addresses. The mapping is temporary and assigned on a first-come, first-served basis.
*   **Purpose:** Allows multiple internal users to access the internet without requiring a dedicated public IP for each.
*   **How it works:**
    1.  A pool of public IP addresses is defined on the NAT device.
    2.  When an internal device initiates a connection to the internet, the NAT device selects an available public IP address from the pool and assigns it to the private IP address for the duration of the session.
    3.  Once the session ends, the public IP address is returned to the pool.
*   **Limitation:** The number of concurrent users that can access the internet is limited by the size of the public IP address pool.
*   **Example:** A company has a pool of 5 public IP addresses (`203.0.113.10` to `203.0.113.14`). 10 internal devices (e.g., `192.168.1.1` to `192.168.1.10`) want to access the internet. The first 5 devices will be assigned one public IP each. If the 6th device tries to connect, it will have to wait until one of the first 5 devices releases its public IP.

#### 2.3. Port Address Translation (PAT) / NAT Overload (Many-to-One NAT)

*   **Description:** PAT is the most common form of NAT. It allows multiple private IP addresses to share a **single** public IP address. It achieves this by using different source port numbers for each outgoing connection.
*   **Purpose:** Maximizes the use of a single public IP address, making it highly efficient for home users and small to medium-sized businesses.
*   **How it works:**
    1.  The NAT device uses its single public IP address.
    2.  When an internal device (e.g., `192.168.1.10` on port 50000) initiates a connection to an external server (e.g., `8.8.8.8` on port 80).
    3.  The NAT device translates the source IP address to its public IP address (e.g., `203.0.113.1`) and assigns a unique source port number (e.g., port 49152).
    4.  The NAT table entry would look like: `(192.168.1.10:50000) <-> (203.0.113.1:49152)`.
    5.  When the external server sends a response back to `203.0.113.1` on port `49152`, the NAT device looks up its table, sees that this port is mapped to `192.168.1.10:50000`, and forwards the packet accordingly.
*   **Key Aspect:** The combination of the public IP address and the unique source port number creates a unique identifier for each connection.
*   **Example:**
    *   **Device 1:** `192.168.1.10` (Port 50000) -> `203.0.113.1` (Port 49152)
    *   **Device 2:** `192.168.1.11` (Port 50001) -> `203.0.113.1` (Port 49153)
    *   **Device 3:** `192.168.1.10` (Port 50002) -> `203.0.113.1` (Port 49154)
    All these internal devices share the single public IP address `203.0.113.1`. The NAT device uses different outgoing ports to differentiate between the connections.

#### 2.4. Other NAT Variants (Briefly)

*   **Reverse NAT:** Used to map an external IP address to an internal private IP address. Often used to make internal servers visible to the outside world (similar to static NAT but often used with PAT).
*   **NAT64:** Used to enable IPv6-only clients to communicate with IPv4-only servers.
*   **DNS64:** Works in conjunction with NAT64. It synthesizes IPv6 addresses for IPv4-only destinations so that an IPv6-only client can query a DNS server and get an IPv6 address to send to.

---

### 3. The NAT Process in Detail (PAT Example)

Let's trace a typical outgoing connection from a private network using PAT:

1.  **Internal Device Initiation:** A user on a laptop with private IP `192.168.1.10` wants to visit `www.example.com` (which resolves to public IP `93.184.216.34`). The laptop sends a TCP SYN packet to port 80 on `93.184.216.34`. The source port on the laptop is, for example, `51000`.
    *   Packet: `Source: 192.168.1.10:51000` -> `Destination: 93.184.216.34:80`

2.  **NAT Router Interception:** The packet reaches the NAT router at the edge of the private network.

3.  **NAT Translation:** The NAT router performs the following:
    *   **Changes Source IP:** Replaces `192.168.1.10` with its public IP address, say `203.0.113.100`.
    *   **Changes Source Port:** Selects an available port from its pool, say `60000`, and uses it as the new source port.
    *   **Updates NAT Table:** Creates an entry in its NAT table:
        `Internal IP:Port` | `Public IP:Port`
        --------------------|--------------------
        `192.168.1.10:51000` | `203.0.113.100:60000`

4.  **Packet Forwarding:** The modified packet is sent out to the internet.
    *   Packet: `Source: 203.0.113.100:60000` -> `Destination: 93.184.216.34:80`

5.  **Server Response:** The web server at `93.184.216.34` receives the request and sends a response back. The response is addressed to the public IP and port from which it received the request.
    *   Packet: `Source: 93.184.216.34:80` -> `Destination: 203.0.113.100:60000`

6.  **NAT Router Receives Response:** The NAT router receives the response packet on its public interface at port `60000`.

7.  **Reverse NAT Translation:** The NAT router consults its NAT table:
    *   It finds the entry matching the destination IP and port (`203.0.113.100:60000`).
    *   It learns that this mapping corresponds to the internal IP and port `192.168.1.10:51000`.
    *   **Changes Destination IP:** Replaces `203.0.113.100` with `192.168.1.10`.
    *   **Changes Destination Port:** Replaces `60000` with `51000`.

8.  **Packet Forwarding to Internal Device:** The NAT router forwards the translated packet to the internal laptop.
    *   Packet: `Source: 93.184.216.34:80` -> `Destination: 192.168.1.10:51000`

9.  **Internal Device Receives Response:** The laptop receives the response and processes it.

---

### 4. NAT Implementation and Configuration Considerations

*   **NAT Device:** Typically implemented on routers, firewalls, or dedicated NAT devices.
*   **Configuration:**
    *   **Inside/Outside Interfaces:** Identifying which interface is connected to the private network (inside) and which is connected to the public network (outside).
    *   **NAT Pool (for Dynamic NAT):** Defining the range of public IP addresses available for translation.
    *   **Access Control Lists (ACLs):** Often used in conjunction with NAT to specify which traffic should be translated and to control access.
    *   **Port Forwarding (Static NAT for inbound traffic):** Configuring the NAT device to map specific external ports to internal IP addresses and ports for services hosted internally.
*   **Stateful vs. Stateless NAT:** Most modern NAT implementations are stateful, meaning they track active connections (using the NAT table) to correctly translate return traffic. Stateless NAT would be more like a simple address substitution without tracking sessions, which is less common and less practical for most internet use cases.

---

### 5. Advantages and Disadvantages of NAT

#### 5.1. Advantages

*   **IPv4 Address Conservation:** Crucial for mitigating IPv4 address exhaustion.
*   **Security:** Hides internal network structure and IP addresses, providing a degree of anonymity and acting as a buffer.
*   **Flexibility:** Allows for the use of private IP address schemes internally without requiring globally unique addresses for every device.
*   **Cost Savings:** Organizations can acquire fewer public IP addresses from ISPs.
*   **Simpler Network Management:** Internal IP addresses can be managed independently of public IP address assignments.

#### 5.2. Disadvantages

*   **Breaks End-to-End Connectivity:** For certain applications that rely on direct end-to-end IP communication (e.g., some peer-to-peer applications, VoIP protocols that embed IP addresses in payloads), NAT can cause issues.
*   **Complexity:** Adds complexity to network configuration and troubleshooting.
*   **Performance Overhead:** The translation process consumes processing power on the NAT device, which can introduce latency.
*   **Difficulties with Inbound Connections:** Initiating connections from the internet to devices behind NAT requires explicit configuration (like port forwarding) which can be cumbersome.
*   **Application Layer Gateways (ALGs):** Some applications embed IP address information within their data payloads. NAT devices may need special ALGs to inspect and modify this embedded information to ensure proper functionality.
*   **IPv6 Transition:** While NAT was a solution for IPv4, it is generally not considered necessary or desirable in IPv6, which has a vast address space. The transition to IPv6 aims to restore end-to-end connectivity.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary reason for the widespread use of NAT?
A. To improve network performance
B. To enhance network security
C. To conserve IPv4 addresses
D. To simplify network configuration

**Question 2:**
Which type of NAT maps a single private IP address to a single public IP address permanently?
A. Dynamic NAT
B. PAT (NAT Overload)
C. Static NAT
D. Reverse NAT

**Question 3:**
If a home router allows multiple devices in the house to access the internet using a single public IP address provided by the ISP, what type of NAT is most likely being used?
A. Static NAT
B. Dynamic NAT
C. PAT (NAT Overload)
D. NAT64

**Question 4:**
Describe the role of the NAT table in PAT.

**Question 5:**
An internal device `192.168.1.50` with source port `50000` sends a packet to an external server `1.2.3.4` on port `80`. The NAT router has a public IP address of `10.0.0.1`. If the NAT router uses PAT and assigns an outgoing port `55000` to this connection, what will be the source IP and port of the packet as it leaves the NAT router?

---

### 7. Answers to Practice Questions

**Answer 1:**
C. To conserve IPv4 addresses
*(While NAT provides security and can simplify some aspects, its primary driver was the exhaustion of IPv4 addresses.)*

**Answer 2:**
C. Static NAT
*(Static NAT creates a fixed, one-to-one mapping between an internal and external IP address.)*

**Answer 3:**
C. PAT (NAT Overload)
*(PAT is the most common method for allowing many private devices to share a single public IP address by using different port numbers.)*

**Answer 4:**
The NAT table in PAT stores mappings between internal private IP addresses and their source ports, and the public IP address and the unique source port assigned by the NAT device for each active connection. This table allows the NAT device to correctly translate incoming response packets back to the original internal device and port.

**Answer 5:**
The source IP will be `10.0.0.1` and the source port will be `55000`.

---

### 8. Important Points to Remember

*   **NAT is a firewall:** It provides a security benefit by hiding internal IP addresses.
*   **PAT is the most common type of NAT:** It allows many devices to share one public IP using port numbers.
*   **NAT translates IP addresses and/or port numbers** in the IP header of packets.
*   **NAT breaks true end-to-end IP connectivity** for some applications.
*   **Troubleshooting NAT issues** often involves checking NAT tables and port forwarding configurations.
*   **IPv6 aims to eliminate the need for NAT** due to its vast address space.

---
