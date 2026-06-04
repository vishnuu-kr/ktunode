---
title: "Overview of the Internet, Protocol layering (Book 1 Ch 1)"
subject: "COMPUTER NETWORKS"
module: "Module 1: Overview of the Internet, Protocol layering (Book 1 Ch 1)"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b51e"
status: "completed"
scrapedAt: "2026-05-20T16:43:27.580Z"
---
# Computer Networks: Module 1 - Overview of the Internet & Protocol Layering (Book 1, Ch 1)

## 1. Overview of the Internet

**1.1 Learning Outcomes:**

*   Describe the basic components of the Internet.
*   Explain the difference between network edge and network core.
*   Identify various access networks and their characteristics.
*   Define packet switching and circuit switching and their trade-offs.
*   Explain the concepts of delay, loss, and throughput in networks.

**1.2 Key Concepts & Definitions:**

*   **The Internet:** A global network of interconnected computer networks, using the Internet Protocol suite (TCP/IP) to communicate with each other. Think of it as a "network of networks."

*   **Network Edge:**  The part of the network where end systems (hosts) connect to the network. This includes computers, smartphones, servers, etc.

*   **Network Core:** The mesh of interconnected routers that forward packets between end systems.

*   **Access Networks:** The networks that connect end systems to the first router (edge router) on the path to the Internet. Examples include DSL, Cable, Ethernet, WiFi, and Cellular.

*   **ISP (Internet Service Provider):**  A company that provides Internet access to users and organizations.  Examples: Comcast, Verizon, AT&T.

*   **Protocols:** Define the format, order of messages sent and received among network entities, and actions taken on message transmission or receipt.

**1.3 Components of the Internet:**

*   **Hosts (End Systems):** Devices that run applications (e.g., web browsers, email clients).
*   **Communication Links:** Physical media that transmit data (e.g., copper wire, fiber optic cable, radio waves).
*   **Routers:** Forward packets between networks.
*   **ISPs:** Provide access to the Internet.
*   **Protocols:** Govern the communication between network entities.
*   **Standards:** Allow different systems to communicate.

**1.4 Network Edge vs. Network Core:**

| Feature        | Network Edge                                  | Network Core                                     |
|----------------|-----------------------------------------------|--------------------------------------------------|
| Location        | End Systems and Access Networks                | Interconnected Routers and High-Speed Links     |
| Function       | Hosts run applications, Access to the internet | Forwarding packets, Routing, Congestion Control |
| Examples        | PCs, Smartphones, Ethernet, WiFi, DSL         | Routers, Optical Fiber Networks                  |

**1.5 Access Networks:**

*   **DSL (Digital Subscriber Line):** Uses existing telephone lines.  Speeds vary based on distance from the central office.  Asymmetric (different upload and download speeds).

    *   **ADSL (Asymmetric DSL):** Common type of DSL, download speeds are typically faster than upload speeds.
*   **Cable:** Uses coaxial cable infrastructure used for cable TV. Shared access medium – bandwidth can vary.

    *   **HFC (Hybrid Fiber Coax):** Common type of cable internet access. Fiber optic cable carries the signal to a node near the user, and coaxial cable connects the node to the user's home.
*   **Ethernet:** Commonly used in homes, universities, and offices.  Uses twisted-pair copper wire.  Generally provides high bandwidth.
*   **WiFi (Wireless LAN):** Uses radio waves to transmit data.  Based on the IEEE 802.11 standard.  Limited range, but provides mobility.
*   **Cellular:** Uses radio waves to transmit data between mobile devices and base stations.  Technologies include 4G LTE and 5G.

**1.6 Packet Switching vs. Circuit Switching:**

*   **Circuit Switching:**  Establishes a dedicated path (circuit) between sender and receiver *before* data transmission.  Resources are reserved for the entire duration of the communication.

    *   **Example:** Traditional telephone networks.
    *   **Advantages:** Guaranteed bandwidth, low delay (once the circuit is established).
    *   **Disadvantages:** Inefficient use of resources (bandwidth reserved even when idle), connection setup time.

*   **Packet Switching:**  Data is divided into packets.  Each packet contains a destination address and travels independently through the network.  Routers forward packets based on their destination address.

    *   **Example:** The Internet.
    *   **Advantages:** Efficient use of resources (bandwidth allocated on demand), more flexible.
    *   **Disadvantages:** Possible delay and loss, no guaranteed bandwidth.

**1.7 Delay, Loss, and Throughput:**

*   **Delay:** The time it takes for a packet to travel from sender to receiver. Types of delay include:

    *   **Nodal Processing Delay:** Time spent processing the packet at the router (e.g., error checking, determining the next hop).
    *   **Queuing Delay:** Time spent waiting in the router's queue (buffer) before being transmitted. Varies depending on network congestion.
    *   **Transmission Delay:** Time required to push all the packet's bits onto the link.  Calculated as `packet size / link bandwidth`.
    *   **Propagation Delay:** Time it takes for a bit to travel from one router to the next. Calculated as `distance / propagation speed`.

*   **Loss:** When packets are dropped by routers due to buffer overflow (queue is full).

*   **Throughput:**  The rate at which data is delivered from sender to receiver.

    *   **Instantaneous Throughput:** The rate at a given point in time.
    *   **Average Throughput:** The average rate over a period of time.

**1.8 Practice Questions:**

1.  What is the difference between the network edge and the network core? Give examples of each.
    *   **Answer:** The network edge consists of end systems (hosts) and access networks, where applications run and users connect to the internet (e.g., PCs, DSL lines). The network core consists of the interconnected routers and high-speed links that forward packets between end systems (e.g., routers, fiber optic networks).

2.  Explain the difference between circuit switching and packet switching. What are the advantages and disadvantages of each?
    *   **Answer:** Circuit switching establishes a dedicated path before transmission, guaranteeing bandwidth but wasting resources when idle. Packet switching divides data into packets that travel independently, utilizing resources efficiently but introducing potential delays and losses. See section 1.6 for a detailed comparison.

3.  Calculate the transmission delay for a 1000-byte packet on a 10 Mbps link.
    *   **Answer:** Transmission delay = (packet size in bits) / (link bandwidth) = (1000 bytes * 8 bits/byte) / (10 Mbps) = (8000 bits) / (10,000,000 bits/second) = 0.0008 seconds = 0.8 milliseconds.

4. What are the four types of delay in a network? Describe each.
    *   **Answer:** Nodal processing delay, queuing delay, transmission delay, and propagation delay. See section 1.7 for detailed descriptions of each.

**1.9 Important Points to Remember:**

*   The Internet is a complex system built upon various technologies and protocols.
*   Understanding the basic components and architectures is crucial for comprehending how networks function.
*   Packet switching is the foundation of the modern Internet, offering flexibility and efficiency.
*   Network performance is affected by delay, loss, and throughput, which are important metrics to consider.

## 2. Protocol Layering

**2.1 Learning Outcomes:**

*   Explain the concept of protocol layering and its benefits.
*   Describe the OSI model and the TCP/IP model.
*   Identify the functions of each layer in the TCP/IP model.
*   Explain the concept of encapsulation.

**2.2 Key Concepts & Definitions:**

*   **Protocol Layering:**  Organizing network functionality into a stack of layers, each layer providing a specific service to the layer above it and relying on the services of the layer below it.

*   **Layer:** A distinct level of abstraction in the network architecture, responsible for a specific set of functions.

*   **Protocol Stack:** The set of protocols used by a network device, organized into layers.

*   **Interface:** The boundary between two adjacent layers, defining how they interact.

*   **Encapsulation:** The process of adding header information to data as it passes down through the protocol stack.  Each layer adds its own header, which contains information needed by the corresponding layer on the receiving side.

*   **Decapsulation:** The process of removing header information as data passes up through the protocol stack on the receiving side.

**2.3 Benefits of Protocol Layering:**

*   **Modularity:**  Each layer can be developed and modified independently.
*   **Abstraction:** Hides the complexity of the underlying layers.  Simplifies network design and implementation.
*   **Interoperability:** Enables different systems to communicate by adhering to standard protocols at each layer.
*   **Ease of Maintenance:**  Problems can be isolated and fixed more easily.

**2.4 The OSI (Open Systems Interconnection) Model:**

*   A conceptual model that standardizes the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology.

*   **Layers:**
    *   **Layer 7: Application Layer:** Provides network services to applications (e.g., HTTP, SMTP, FTP).
    *   **Layer 6: Presentation Layer:** Handles data representation and encryption.
    *   **Layer 5: Session Layer:** Manages connections between applications.
    *   **Layer 4: Transport Layer:** Provides reliable or unreliable data transfer (e.g., TCP, UDP).
    *   **Layer 3: Network Layer:** Handles routing of packets (e.g., IP).
    *   **Layer 2: Data Link Layer:** Provides error-free transmission of data frames between adjacent nodes (e.g., Ethernet, WiFi).
    *   **Layer 1: Physical Layer:** Transmits raw bits over a communication channel (e.g., cables, radio waves).

**2.5 The TCP/IP Model:**

*   A practical model used in the Internet.  Simpler than the OSI model.

*   **Layers:**
    *   **Application Layer:** (Combines OSI layers 5-7) Provides network services to applications (e.g., HTTP, SMTP, FTP).
    *   **Transport Layer:** (Same as OSI) Provides reliable or unreliable data transfer (e.g., TCP, UDP).
    *   **Network Layer:** (Same as OSI) Handles routing of packets (e.g., IP).
    *   **Data Link Layer:** (Combines OSI layers 1-2) Provides error-free transmission of data frames between adjacent nodes (e.g., Ethernet, WiFi).

**2.6 Functions of Each Layer in the TCP/IP Model:**

| Layer          | Function                                                              | Example Protocols |
|----------------|-----------------------------------------------------------------------|-------------------|
| Application     | Provides network services to applications.                            | HTTP, SMTP, DNS, FTP |
| Transport       | Provides reliable or unreliable data transfer between applications.    | TCP, UDP           |
| Network         | Handles routing of packets between different networks.              | IP, ICMP           |
| Data Link       | Provides error-free transmission of data frames within a single network. | Ethernet, WiFi     |

**2.7 Encapsulation Example:**

1.  **Application Layer:** An application (e.g., a web browser) creates data.
2.  **Transport Layer:** The transport layer (e.g., TCP) adds a header to the data, creating a segment.  This header includes information like source and destination port numbers.
3.  **Network Layer:** The network layer (IP) adds another header to the segment, creating a packet. This header includes source and destination IP addresses.
4.  **Data Link Layer:** The data link layer (e.g., Ethernet) adds a frame header and trailer to the packet, creating a frame. The header includes source and destination MAC addresses.
5.  **Physical Layer:** The physical layer transmits the frame as a stream of bits over the network medium.

**2.8 Practice Questions:**

1.  What is protocol layering, and what are its benefits?
    *   **Answer:** Protocol layering is organizing network functionality into a stack of layers, each providing a specific service. Benefits include modularity, abstraction, interoperability, and ease of maintenance. See section 2.3 for more details.

2.  Compare and contrast the OSI model and the TCP/IP model.
    *   **Answer:** The OSI model is a more comprehensive theoretical model with seven layers, while the TCP/IP model is a practical model with four layers used in the Internet. The TCP/IP model combines some of the OSI layers.

3.  Explain the concept of encapsulation.
    *   **Answer:** Encapsulation is the process of adding header information to data as it passes down through the protocol stack. Each layer adds its own header, which contains information needed by the corresponding layer on the receiving side.  See section 2.7 for an example.

4.  What is the purpose of the transport layer? Give two examples of transport layer protocols.
     *   **Answer:** The transport layer provides reliable or unreliable data transfer between applications.  Examples: TCP and UDP.

**2.9 Important Points to Remember:**

*   Protocol layering simplifies network design and implementation by dividing complex tasks into smaller, manageable modules.
*   The TCP/IP model is the foundation of the Internet and is essential for understanding how network communication works.
*   Encapsulation is a key process that allows data to be transmitted efficiently through the network.
