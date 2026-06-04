---
title: "Hands-on: Linux Kernel Implementation of Routing Table and Caches, Routing Cache Implementation Overview, Adding new entry in the Routing Table using ip command (Book 3 Ch 14)"
subject: "COMPUTER NETWORKS"
module: "Module 2: Transport Layer: Services, Protocols, UDP, TCP  (Book 1 Ch 3)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b526"
status: "completed"
scrapedAt: "2026-05-20T16:43:32.526Z"
---
## COMPUTER NETWORKS: Transport Layer & Linux Routing Table Implementation

**Module 2: Transport Layer: Services, Protocols, UDP, TCP (Book 1 Ch 3) & Hands-on: Linux Kernel Implementation of Routing Table and Caches, Routing Cache Implementation Overview, Adding new entry in the Routing Table using ip command (Book 3 Ch 14)**

**Description:** This module covers the fundamental concepts of the Transport Layer in computer networks, focusing on its services, the UDP and TCP protocols, and delves into the Linux kernel implementation of routing tables and caches, including practical exercises using the `ip` command.

**Learning Outcomes:**

*   Understand the services provided by the Transport Layer.
*   Differentiate between UDP and TCP protocols, including their characteristics and applications.
*   Describe the Linux Kernel implementation of the routing table and routing caches.
*   Understand the architecture of the routing cache and its purpose.
*   Learn to add new entries to the routing table using the `ip` command.

---

**I. Transport Layer: Services & Protocols (Book 1 Ch 3)**

**A.  Transport Layer Overview**

*   **Definition:** The Transport Layer is the layer in the TCP/IP model that provides logical communication between application processes running on different hosts. It lies above the Network Layer and below the Application Layer.
*   **Role:**  Bridges the gap between the application's needs and the underlying network infrastructure.
*   **Key Responsibilities:**
    *   **Process-to-Process Communication:** Delivering data to the correct application (process) on the destination host.  Uses port numbers to identify specific applications.
    *   **Segmentation & Reassembly:**  Breaking large application data into smaller segments suitable for network transmission and reassembling them at the destination.
    *   **Multiplexing & Demultiplexing:**  Allowing multiple applications on a host to share the same network connection (multiplexing) and directing incoming data to the appropriate application (demultiplexing).
    *   **Connection Management:** Establishing, maintaining, and terminating connections between applications.
    *   **Error Control:**  Detecting and correcting errors introduced during transmission (not always present - depends on the protocol).
    *   **Flow Control:**  Preventing a fast sender from overwhelming a slow receiver.
    *   **Congestion Control:** Preventing network congestion by adjusting the sending rate of hosts.

**B. UDP (User Datagram Protocol)**

*   **Characteristics:**
    *   **Connectionless:**  No formal connection establishment or termination process.
    *   **Unreliable:** No guarantee of delivery, order, or data integrity.
    *   **Simple:** Minimal overhead, making it fast and efficient.
    *   **Datagram-Oriented:** Each application message is treated as an independent datagram.
*   **Header Structure:**
    *   Source Port (16 bits): Port number of the sending process.
    *   Destination Port (16 bits): Port number of the receiving process.
    *   Length (16 bits): Length of the UDP datagram (header + data) in bytes.
    *   Checksum (16 bits): Optional checksum to detect errors.
*   **Applications:**
    *   Streaming media (where occasional packet loss is acceptable).
    *   Online games (low latency is crucial).
    *   DNS (Domain Name System).
    *   VoIP (Voice over IP) – sometimes.
    *   Applications where speed is more important than reliability.
*   **Advantages:**  Low overhead, fast, suitable for applications tolerant of some data loss.
*   **Disadvantages:**  Unreliable, no built-in error recovery, no flow control, no congestion control.

**C. TCP (Transmission Control Protocol)**

*   **Characteristics:**
    *   **Connection-Oriented:**  Requires a connection to be established before data transfer.  Uses a three-way handshake.
    *   **Reliable:** Guarantees delivery of data in the correct order and without errors. Uses acknowledgements (ACKs) and retransmissions.
    *   **Byte-Stream Oriented:**  Treats data as a continuous stream of bytes.
    *   **Full-Duplex:**  Data can be transmitted in both directions simultaneously.
*   **Header Structure:**
    *   Source Port (16 bits): Port number of the sending process.
    *   Destination Port (16 bits): Port number of the receiving process.
    *   Sequence Number (32 bits): Sequence number of the first byte in the current segment.
    *   Acknowledgment Number (32 bits): Sequence number of the next byte expected from the other end.
    *   Header Length (4 bits): Length of the TCP header in 32-bit words.
    *   Reserved (6 bits): Reserved for future use.
    *   Flags (6 bits): Control flags (e.g., SYN, ACK, FIN, RST, PSH, URG).
    *   Window Size (16 bits): Advertised receive window size (used for flow control).
    *   Checksum (16 bits): Checksum to detect errors.
    *   Urgent Pointer (16 bits):  Indicates the location of urgent data within the segment.
*   **Three-Way Handshake:**
    1.  **SYN:**  Client sends a SYN (synchronize) segment to the server, indicating its intention to establish a connection.
    2.  **SYN-ACK:**  Server responds with a SYN-ACK (synchronize-acknowledgment) segment, acknowledging the client's SYN and sending its own SYN.
    3.  **ACK:**  Client sends an ACK (acknowledgment) segment to the server, acknowledging the server's SYN-ACK.  The connection is now established.
*   **Applications:**
    *   Web browsing (HTTP).
    *   Email (SMTP, POP3, IMAP).
    *   File transfer (FTP).
    *   Remote login (SSH, Telnet).
*   **Advantages:**  Reliable data transfer, ordered delivery, flow control, congestion control.
*   **Disadvantages:**  More overhead than UDP, slower due to connection establishment and error recovery, more complex.

**D.  Comparing UDP and TCP**

| Feature          | UDP                                | TCP                               |
| ---------------- | ---------------------------------- | ---------------------------------- |
| Connection       | Connectionless                       | Connection-Oriented                   |
| Reliability      | Unreliable                         | Reliable                            |
| Ordering         | No guaranteed ordering             | Guaranteed ordering                 |
| Error Control    | Minimal (Checksum Optional)        | Comprehensive (Checksum, Retransmission) |
| Flow Control     | No flow control                    | Flow control                        |
| Congestion Control | No congestion control              | Congestion control                  |
| Overhead         | Low                                | High                                |
| Speed            | Fast                               | Slower                              |
| Use Cases        | Streaming, DNS, Online Games        | Web browsing, Email, File Transfer  |

**Practice Questions (Book 1 Ch 3):**

1.  **What is the primary function of the Transport Layer?**
    *   *Answer: To provide logical communication between application processes running on different hosts.*
2.  **Explain the difference between UDP and TCP in terms of reliability.**
    *   *Answer: UDP is unreliable, providing no guarantee of delivery. TCP is reliable, guaranteeing delivery of data in the correct order and without errors.*
3.  **Describe the three-way handshake used by TCP.**
    *   *Answer: See section C above.*
4.  **Give an example of an application that would benefit from using UDP.**
    *   *Answer: Online gaming, where low latency is more important than guaranteed delivery.*
5.  **Give an example of an application that would benefit from using TCP.**
    *   *Answer: Email, where reliable delivery of messages is essential.*

**Important Points to Remember:**

*   The Transport Layer provides the abstraction of a reliable channel on top of an unreliable network.
*   UDP is suitable for applications where speed and low overhead are prioritized, even at the cost of some data loss.
*   TCP is suitable for applications where reliable data transfer is essential, even if it means higher overhead and slower speed.

---

**II. Linux Kernel Implementation of Routing Table and Caches (Book 3 Ch 14)**

**A. Routing Table Fundamentals**

*   **Definition:** The routing table is a data structure stored in a router or a host that contains information about the network topology and the best paths (routes) to reach various destination networks.
*   **Purpose:** To determine the next hop for outgoing packets.
*   **Key Components (Typical Routing Table Entry):**
    *   **Destination Network:** The IP address of the destination network or host.
    *   **Netmask/Prefix Length:** Specifies the size of the network address.
    *   **Gateway:** The IP address of the next hop router.  If the destination is on the directly connected network, this field is usually 0.0.0.0 or the interface name.
    *   **Interface:** The network interface on which to send packets to reach the destination.
    *   **Metric/Cost:**  A numerical value representing the cost of using a particular route (lower is usually better).
    *   **Flags:**  Indicate characteristics of the route (e.g., UP, GATEWAY, HOST).
*   **Routing Algorithm:**  The algorithm (e.g., shortest path, distance vector, link-state) used to build and update the routing table.
*   **Longest Prefix Match:**  When forwarding a packet, the router selects the route with the longest prefix length that matches the destination IP address.  This ensures that packets are routed to the most specific destination network.

**B. Linux Kernel Routing Table Implementation**

*   **Data Structure:** In the Linux kernel, the routing table is implemented using a sophisticated data structure that allows for efficient searching and updating. While the exact implementation details can vary depending on the kernel version, a common approach involves using a *fib_trie* (Forwarding Information Base Trie) data structure for IPv4 routing. For IPv6, *radix trees* are often used.
*   **Key Kernel Structures:**
    *   `rtable`: This structure represents a routing table entry.  It contains fields such as the destination address, gateway, output device (`dev`), and various routing metrics.
    *   `fib_table`: This structure represents the overall routing table.
    *   `fib_node`:  Nodes in the *fib_trie* structure.
*   **Routing Table Lookup Process:**
    1.  The kernel receives a packet.
    2.  The destination IP address is extracted from the packet header.
    3.  The kernel searches the routing table for the best matching route based on the longest prefix match.
    4.  If a matching route is found, the packet is forwarded to the next hop router or directly to the destination host using the specified interface.
    5.  If no matching route is found, the packet is dropped.

**C. Routing Cache Implementation Overview**

*   **Purpose:** To speed up the routing process by caching recently used routes. Looking up a route in the cache is much faster than searching the entire routing table.
*   **Architecture:** The routing cache typically uses a hash table or a similar data structure for efficient lookups.
*   **Cache Hit vs. Cache Miss:**
    *   **Cache Hit:**  When a route is found in the cache, it's called a cache hit. The packet can be forwarded quickly using the cached information.
    *   **Cache Miss:**  When a route is not found in the cache, it's called a cache miss. The kernel must perform a full routing table lookup. The route is then added to the cache for future use.
*   **Cache Invalidation:**  Routes in the cache may become invalid due to network changes. The kernel needs to invalidate (remove) outdated entries from the cache to ensure correct routing. This can be triggered by events such as link failures or routing table updates.  Time-to-live (TTL) values are often used to expire entries that haven't been used recently.
*   **Relationship to the Routing Table:**  The routing cache is populated based on information from the routing table.  It is a *cache* of routing table entries, not an independent source of routing information.

**D. Adding New Entry in the Routing Table using `ip` command (Book 3 Ch 14)**

*   **The `ip` command:**  A powerful command-line utility for managing network interfaces, routing tables, and other network settings in Linux.  Replaces the older `ifconfig` and `route` commands.
*   **Syntax for adding a route:**

    ```bash
    sudo ip route add <destination_network>/<prefix_length> via <gateway_ip> dev <interface>
    ```

    *   `<destination_network>`: The IP address of the destination network.
    *   `<prefix_length>`: The network mask, expressed as the number of leading bits that are set to 1.  For example, `/24` represents a subnet mask of 255.255.255.0.
    *   `<gateway_ip>`: The IP address of the next hop router.  If the destination is on the directly connected network, you can omit the `via` clause.
    *   `<interface>`: The network interface to use for reaching the destination.

*   **Example:**

    ```bash
    sudo ip route add 192.168.10.0/24 via 192.168.1.1 dev eth0
    ```

    This command adds a route to the network 192.168.10.0/24, specifying that packets should be sent to the gateway 192.168.1.1 using the eth0 interface.

*   **Adding a default route:**

    ```bash
    sudo ip route add default via <gateway_ip> dev <interface>
    ```

    This command adds a default route, which is used for packets destined for networks not explicitly listed in the routing table.

*   **Deleting a route:**

    ```bash
    sudo ip route del <destination_network>/<prefix_length>
    ```

    Example:

    ```bash
    sudo ip route del 192.168.10.0/24
    ```

*   **Listing the routing table:**

    ```bash
    ip route show
    ```

    or

    ```bash
    route -n
    ```
*   **Important Considerations:**
    *   You typically need root privileges (using `sudo`) to modify the routing table.
    *   Routes added using the `ip` command are typically not persistent across reboots. To make routes persistent, you need to configure them in a network configuration file (specific to your Linux distribution).  For example, on Debian/Ubuntu, you might edit `/etc/network/interfaces` or use NetworkManager.
    *   Incorrect routing table entries can cause network connectivity issues.  Test your changes carefully.

**Practice Questions (Book 3 Ch 14):**

1.  **What is the purpose of the routing table?**
    *   *Answer: To determine the next hop for outgoing packets based on their destination IP address.*
2.  **Explain the concept of "longest prefix match" in routing.**
    *   *Answer: When forwarding a packet, the router selects the route with the longest prefix length that matches the destination IP address. This ensures that packets are routed to the most specific destination network.*
3.  **What is the purpose of the routing cache?**
    *   *Answer: To speed up the routing process by caching recently used routes, avoiding the need to repeatedly search the routing table.*
4.  **What is the difference between a routing table and a routing cache?**
    *   *Answer: The routing table is the primary source of routing information.  The routing cache is a temporary storage of frequently used routing table entries, used to improve performance.*
5.  **Write the `ip` command to add a route to the network 10.0.0.0/24 via the gateway 192.168.0.1 using the eth0 interface.**
    *   *Answer: `sudo ip route add 10.0.0.0/24 via 192.168.0.1 dev eth0`*
6.  **Write the `ip` command to add a default gateway of 192.168.1.1 using the wlan0 interface.**
    *   *Answer: `sudo ip route add default via 192.168.1.1 dev wlan0`*
7. **What is the command to list the routing table on a Linux system?**
    *Answer: `ip route show` or `route -n`*

**Important Points to Remember:**

*   The routing table is essential for directing network traffic.
*   The routing cache improves routing performance.
*   The `ip` command is a powerful tool for managing routing tables in Linux.
*   Be careful when modifying the routing table, as incorrect entries can disrupt network connectivity.  Always test changes in a controlled environment before implementing them in a production network.
*   Routes added via the `ip` command are typically non-persistent unless configured to be persistent via system configuration files.
