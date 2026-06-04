---
title: "Introduction – Uses of computer networks"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 1: Introduction – Uses of computer networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36460"
status: "completed"
scrapedAt: "2026-05-23T16:19:46.317Z"
---
# Computer Network Systems: Module 1 - Introduction & Uses of Computer Networks

This module introduces the fundamental concepts of computer networks, their various uses, and the basic building blocks that enable communication between devices.

## Module 1: Introduction – Uses of Computer Networks

### Topic Introduction – Uses of Computer Networks

---

## 1. What is a Computer Network?

A computer network is a collection of interconnected computers and other devices that can communicate and share resources with each other.

**Key Concepts:**
*   **Interconnection:** Devices are linked together through various physical or wireless media.
*   **Communication:** Devices exchange data and information.
*   **Resource Sharing:** Users can access and utilize shared resources like printers, files, and internet connections.

**Example:** Your home Wi-Fi network connecting your laptop, smartphone, and smart TV is a computer network.

**Reference:**
*   **Tanenbaum (5th ed.):** Defines a network as a collection of computers that can communicate with each other.
*   **Forouzan (5th ed.):** Describes networking as the process of establishing connections between devices.

---

## 2. Objectives and Uses of Computer Networks

Computer networks serve a wide range of purposes, enhancing productivity, collaboration, and access to information.

**Key Concepts:**
*   **Resource Sharing:**
    *   **Hardware Sharing:** Printers, scanners, storage devices.
        *   *Example:* Multiple users in an office sharing a single network printer.
    *   **Software Sharing:** Applications, databases.
        *   *Example:* Accessing a centralized customer database from different workstations.
    *   **Data Sharing:** Files, documents, multimedia.
        *   *Example:* Sharing project documents on a shared network drive.
*   **Communication:**
    *   **Electronic Mail (Email):** Sending and receiving messages.
        *   *Example:* Sending an email to a colleague across the country.
    *   **Instant Messaging (IM):** Real-time text-based conversations.
        *   *Example:* Using WhatsApp or Slack for quick chats.
    *   **Voice over IP (VoIP):** Voice communication over networks.
        *   *Example:* Making a video call using Skype or Zoom.
    *   **Video Conferencing:** Real-time visual and audio communication.
        *   *Example:* Participating in a virtual meeting with remote team members.
*   **Information Sharing:**
    *   **World Wide Web (WWW):** Accessing information from websites.
        *   *Example:* Browsing news articles or researching a topic online.
    *   **Databases:** Storing and retrieving vast amounts of data.
        *   *Example:* Accessing a university library's online catalog.
*   **Business and Commerce:**
    *   **E-commerce:** Buying and selling goods and services online.
        *   *Example:* Purchasing items from Amazon or eBay.
    *   **Online Banking:** Managing financial accounts remotely.
        *   *Example:* Checking account balances or transferring funds.
*   **Entertainment:**
    *   **Online Gaming:** Playing games with other users over the internet.
        *   *Example:* Participating in multiplayer online games.
    *   **Streaming Media:** Watching videos or listening to music online.
        *   *Example:* Streaming movies on Netflix or music on Spotify.
*   **Education:**
    *   **Online Learning Platforms:** Accessing course materials and interacting with instructors/peers.
        *   *Example:* Enrolling in online courses on Coursera or edX.
    *   **Research Collaboration:** Sharing research data and findings.
        *   *Example:* Collaborating on a scientific paper with researchers globally.

**Reference:**
*   **Peterson & Davie (5th ed.):** Emphasizes the economic and social benefits derived from network capabilities.
*   **Kurose & Ross (6th ed.):** Highlights the transformative impact of the internet and its applications.

**Highligh Important Point to Remember:** Resource sharing and communication are the two primary pillars driving the widespread adoption and utility of computer networks.

---

## 3. Types of Computer Networks (Based on Scale/Geography)

Networks can be categorized by their geographical extent.

**Key Concepts:**
*   **Personal Area Network (PAN):**
    *   **Definition:** A network for interconnecting devices around a person's workspace.
    *   **Range:** Typically a few meters.
    *   **Technologies:** Bluetooth, Infrared.
    *   *Example:* Connecting a wireless headset to a smartphone.
*   **Local Area Network (LAN):**
    *   **Definition:** A network confined to a relatively small geographical area, such as an office building, a home, or a campus.
    *   **Range:** Up to a few kilometers.
    *   **Technologies:** Ethernet, Wi-Fi.
    *   *Example:* The network in your university's computer lab.
*   **Metropolitan Area Network (MAN):**
    *   **Definition:** A network that spans a city or a large campus. It is larger than a LAN but smaller than a WAN.
    *   **Range:** Tens of kilometers.
    *   **Technologies:** Fiber optics, high-speed leased lines.
    *   *Example:* A network connecting different branches of a company within a city.
*   **Wide Area Network (WAN):**
    *   **Definition:** A network that covers a large geographical area, often connecting multiple LANs across cities, countries, or even continents.
    *   **Range:** Hundreds or thousands of kilometers.
    *   **Technologies:** Leased lines, MPLS, satellite links.
    *   *Example:* The Internet is the largest WAN.

**Reference:**
*   **Forouzan (5th ed.):** Provides detailed explanations and diagrams for each network type based on geographical span.
*   **Halsall (5th ed.):** Discusses the evolution of network technologies that enable these different scales.

**Highligh Important Point to Remember:** The classification of networks by scale helps understand the scope of communication and the technologies employed.

---

## 4. Network Topologies (Brief Introduction)

A network topology refers to the arrangement of the elements (links, nodes, etc.) of a computer network.

**Key Concepts:**
*   **Bus Topology:** All devices are connected to a single communication line (bus).
    *   *Pros:* Simple, inexpensive.
    *   *Cons:* Single point of failure, performance degrades with more devices.
*   **Star Topology:** All devices are connected to a central hub or switch.
    *   *Pros:* Easy to manage, failure of one node doesn't affect others.
    *   *Cons:* Central hub is a single point of failure, requires more cabling.
*   **Ring Topology:** Devices are connected in a closed loop.
    *   *Pros:* Orderly data transfer.
    *   *Cons:* Single point of failure (if one device fails, the whole ring can break), difficult to add/remove devices.
*   **Mesh Topology:** Every device is connected to every other device.
    *   *Pros:* Highly reliable, redundant paths.
    *   *Cons:* Extremely complex and expensive to implement.
*   **Hybrid Topology:** Combination of two or more different topologies.
    *   *Example:* A star-bus topology.

**Reference:**
*   **Tanenbaum (5th ed.):** Introduces the concept of topology as a fundamental aspect of network design.
*   **Forouzan (5th ed.):** Illustrates various topologies with clear diagrams.

**Highligh Important Point to Remember:** The choice of topology significantly impacts network performance, cost, and reliability.

---

## 5. Network Architecture: Client-Server vs. Peer-to-Peer

These are two fundamental models for how resources and tasks are distributed in a network.

**Key Concepts:**

### 5.1. Client-Server Model
*   **Description:** Dedicated servers provide services to client devices.
*   **Roles:**
    *   **Server:** A powerful computer that provides resources or services (e.g., file server, web server, mail server).
    *   **Client:** A device that requests services from a server (e.g., your laptop accessing a website).
*   **Characteristics:**
    *   Centralized control.
    *   Easier to manage and secure.
    *   Scalable.
    *   Requires dedicated server hardware and software.
*   **Example:** When you browse a website, your computer (client) requests the webpage from a web server.

### 5.2. Peer-to-Peer (P2P) Model
*   **Description:** All computers on the network have equal capabilities and responsibilities. Each computer can act as both a client and a server.
*   **Roles:** No dedicated server; each peer can share resources and request resources from other peers.
*   **Characteristics:**
    *   Decentralized.
    *   Can be cheaper to implement as no dedicated server is needed.
    *   More difficult to manage and secure.
    *   Performance can be inconsistent depending on the active peers.
*   **Example:** File-sharing networks like BitTorrent, where users download files from and upload files to each other.

**Reference:**
*   **Tanenbaum (5th ed.):** Contrasts these two models extensively, discussing their pros and cons.
*   **Kurose & Ross (6th ed.):** Explains how the client-server architecture underpins many internet applications.

**Highligh Important Point to Remember:** The client-server model is prevalent for large-scale, reliable services, while P2P is suitable for distributed tasks and informal sharing.

---

## 6. Learning Outcome Coverage

This module directly addresses **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**

While this specific topic focuses on the "Uses of Computer Networks" and the fundamental concepts, it lays the groundwork for understanding:

*   **What computer networks are:** Defining the core concept.
*   **Why we use them:** Highlighting the practical applications.
*   **Basic structures:** Introducing topologies and architectural models.

Future modules will delve deeper into layered architecture, protocols, and physical media, building upon the foundational understanding established here.

---

## 7. Practice Questions

**Question 1:**
What is the primary advantage of a star topology over a bus topology?

**Answer:**
The primary advantage of a star topology over a bus topology is its improved reliability. In a star topology, if one node or cable fails, only that particular node is affected, and the rest of the network continues to operate. In contrast, a failure in the bus cable of a bus topology can bring down the entire network.

**Question 2:**
Name three common uses of computer networks.

**Answer:**
Three common uses of computer networks are:
1.  **Resource Sharing:** Sharing printers, files, or internet connections.
2.  **Communication:** Email, instant messaging, VoIP.
3.  **Information Access:** Browsing the World Wide Web, accessing online databases.

**Question 3:**
Differentiate between a Client-Server model and a Peer-to-Peer model.

**Answer:**
In a **Client-Server** model, dedicated servers provide services to client devices. Clients request services, and servers fulfill those requests. This model offers centralized control and easier management. In a **Peer-to-Peer** (P2P) model, all devices are peers with equal capabilities and responsibilities. Each peer can act as both a client and a server, sharing resources and requesting them from other peers without a central authority.

**Question 4:**
Which type of network would be most appropriate for connecting computers within a single office building?
a) PAN
b) LAN
c) MAN
d) WAN

**Answer:**
b) LAN

**Question 5:**
Give an example of a technology commonly used in a PAN.

**Answer:**
Bluetooth is a common technology used in a PAN, for example, connecting a wireless keyboard or mouse to a computer.

---

## 8. Key Takeaways

*   Computer networks are essential for modern communication, collaboration, and resource sharing.
*   Networks are categorized by their geographical scope (PAN, LAN, MAN, WAN).
*   Network topologies (Bus, Star, Ring, Mesh) define the physical or logical arrangement of devices.
*   The Client-Server and Peer-to-Peer models represent different approaches to resource and task distribution within a network.
*   Understanding these fundamental concepts is crucial for comprehending more advanced networking topics.

---
This concludes Module 1, Topic: Introduction – Uses of Computer Networks. The next modules will build upon this foundation to explore the layered architecture, protocols, and physical media involved in computer networking.
