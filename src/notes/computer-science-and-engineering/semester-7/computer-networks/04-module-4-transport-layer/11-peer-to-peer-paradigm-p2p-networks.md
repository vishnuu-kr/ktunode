---
title: "Peer-to-peer paradigm - P2P Networks."
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c943"
status: "completed"
scrapedAt: "2026-05-20T17:02:57.458Z"
---
# Computer Networks: Module 4 - Transport Layer

## Topic: Peer-to-Peer (P2P) Paradigm - P2P Networks

---

### **Introduction to Peer-to-Peer (P2P) Networks**

*   **Definition:** A peer-to-peer (P2P) network is a distributed network architecture where individual computers (peers) share resources and communicate directly with each other, without the need for a central server. Each peer acts as both a client and a server.

*   **Contrast with Client-Server Model:**
    *   **Client-Server:** A central server provides resources, and clients request them. The server is a single point of failure and can become a bottleneck.
    *   **P2P:** Decentralized, no single point of failure, and resources are distributed among peers.

---

### **Learning Outcome 1: Understanding the Peer-to-Peer (P2P) paradigm**

#### **Key Characteristics of P2P Networks:**

*   **Decentralization:** No central authority or server is required for the network to function.
*   **Resource Sharing:** Peers directly share resources such as files, processing power, and bandwidth.
*   **Direct Communication:** Peers communicate with each other directly, often using IP addresses and transport layer protocols.
*   **Scalability:** P2P networks can scale well as more peers join, increasing the overall capacity and availability of resources.
*   **Fault Tolerance:** The failure of a single peer does not necessarily bring down the entire network.
*   **Dynamic Nature:** Peers can join and leave the network at any time, making it a dynamic environment.

#### **Types of P2P Networks:**

1.  **Unstructured P2P Networks:**
    *   **Description:** Peers join the network without any specific organization. When a peer wants to find a resource, it broadcasts a query to other peers.
    *   **How it Works:** Query flooding or random walks are used to locate resources. If a peer has the requested resource, it responds directly to the querying peer.
    *   **Pros:** Simple to implement.
    *   **Cons:** Inefficient resource discovery, high network overhead due to flooding, potential for query loops.
    *   **Examples:** Early versions of Napster (though it had a central index), Gnutella.

2.  **Structured P2P Networks:**
    *   **Description:** Peers are organized in a specific way, often using a distributed hash table (DHT). This structure allows for efficient resource discovery.
    *   **How it Works:** Each peer is responsible for a specific range of keys (hashes). When a resource is added, its hash is used to determine which peer is responsible for storing information about it. To find a resource, a peer calculates its hash and queries the peer responsible for that hash.
    *   **Pros:** Efficient resource discovery, guaranteed resource location (if present).
    *   **Cons:** More complex to implement, requires mechanisms to maintain the structure when peers join/leave.
    *   **Examples:** Chord, Kademlia, Pastry, Tapestry (often used in systems like BitTorrent).

3.  **Hybrid P2P Networks:**
    *   **Description:** Combines elements of both client-server and P2P architectures. Often involves a central server for indexing or coordination, but the actual data transfer happens directly between peers.
    *   **How it Works:** A central server maintains a list of available resources and the peers that have them. Clients query the server to find resources, and then connect directly to the peers providing them.
    *   **Pros:** Efficient search and discovery, improved scalability compared to purely client-server.
    *   **Cons:** Still has a central point of control/failure for indexing.
    *   **Examples:** Napster (original), Kazaa.

---

### **Learning Outcome 2: Applications of P2P Networks**

#### **Major Applications:**

*   **File Sharing:**
    *   **Description:** The most common application of P2P networks. Users share files directly with each other.
    *   **Examples:**
        *   **BitTorrent:** A protocol for peer-to-peer file sharing. Files are broken into small pieces, and peers download and upload these pieces simultaneously. Trackers or DHTs help peers find each other.
        *   **eMule, FrostWire:** Other popular file-sharing clients.

*   **Instant Messaging & Communication:**
    *   **Description:** Some instant messaging clients use P2P for direct chat or file transfers between users.
    *   **Examples:** Skype (historically used P2P for calls and presence), Tox.

*   **Content Distribution Networks (CDNs):**
    *   **Description:** P2P principles can be used to distribute content more efficiently, especially for video streaming or large software updates.
    *   **Examples:** Akamai's (some) CDN solutions, peer-assisted delivery for updates (e.g., Windows Update Delivery Optimization).

*   **Collaborative Applications:**
    *   **Description:** Applications that allow multiple users to work on shared documents or projects in real-time.
    *   **Examples:** Some collaborative editing tools.

*   **Cryptocurrencies and Blockchain:**
    *   **Description:** The underlying infrastructure of many cryptocurrencies relies on P2P networks for transaction propagation and ledger maintenance.
    *   **Examples:** Bitcoin, Ethereum.

---

### **Learning Outcome 3: Transport Layer Protocols and P2P Networks**

#### **Role of Transport Layer in P2P:**

*   **Direct Communication:** The transport layer (primarily TCP and UDP) enables direct communication between peers.
*   **Reliability and Flow Control (TCP):**
    *   **TCP (Transmission Control Protocol):** Provides reliable, ordered, and error-checked delivery of data. This is crucial for ensuring that file pieces or messages are transferred correctly.
    *   **Use Cases in P2P:** Downloading file pieces, establishing connections between peers for data transfer.

*   **Low Overhead and Speed (UDP):**
    *   **UDP (User Datagram Protocol):** Offers a faster, connectionless, and less reliable data transfer.
    *   **Use Cases in P2P:**
        *   **Discovery Protocols:** Broadcasting queries for resources.
        *   **Real-time Applications:** Where slight data loss is acceptable for speed (e.g., some aspects of VoIP).
        *   **DHT Updates:** Announcing presence or resource availability.

*   **Addressing and Port Numbers:**
    *   Peers use IP addresses to identify each other and port numbers to identify specific applications or services running on a peer. For example, a BitTorrent client might listen on a specific UDP port for incoming tracker connections or peer discovery.

*   **Transport Layer Security (TLS/SSL):**
    *   While not inherent to the P2P *paradigm*, many modern P2P applications use TLS/SSL to secure the communication channels between peers, ensuring data confidentiality and integrity.

---

### **Learning Outcome 4: Challenges and Considerations in P2P Networks**

#### **Key Challenges:**

*   **Security:**
    *   **Malware Distribution:** P2P networks can be used to distribute malicious software.
    *   **Data Tampering:** Ensuring the integrity of shared files.
    *   **Sybil Attacks:** A malicious entity creating multiple fake identities (peers) to gain disproportionate influence or disrupt the network.

*   **Privacy:**
    *   **IP Address Exposure:** Peers' IP addresses are often visible to other connected peers, which can be a privacy concern.
    *   **Content Monitoring:** ISPs or authorities might monitor P2P traffic.

*   **Resource Availability and Churn:**
    *   **Peers Joining/Leaving:** The dynamic nature means resources might be temporarily unavailable if the peers holding them go offline.
    *   **"Leechers" vs. "Seeders":** In file sharing, "leeches" download without uploading, potentially harming the availability of the file. "Seeders" upload content that has already been downloaded.

*   **Scalability Issues (Unstructured Networks):**
    *   **Flooding Overhead:** Unstructured networks can suffer from excessive traffic due to query flooding, especially as the network grows.

*   **Legal and Copyright Issues:**
    *   **Unauthorized Sharing:** P2P networks are often associated with the illegal sharing of copyrighted material.

*   **NAT Traversal:**
    *   **Problem:** Most devices are behind Network Address Translators (NATs) or firewalls, which prevent direct incoming connections. This makes it difficult for peers to discover and connect to each other.
    *   **Solutions:**
        *   **UPnP (Universal Plug and Play):** Allows applications to automatically configure router settings to allow incoming connections.
        *   **STUN (Session Traversal Utilities for NAT):** Helps clients discover their public IP address and port mapping.
        *   **TURN (Traversal Using Relays around NAT):** Acts as a relay server when direct P2P connections are not possible.
        *   **Hole Punching:** Techniques to establish direct connections through NATs.

---

### **Learning Outcome 5: Examples and Technologies**

#### **BitTorrent Protocol:**

*   **How it works:**
    1.  A `.torrent` file (or magnet link) contains metadata about the files to be shared and the tracker's address (or DHT information).
    2.  A BitTorrent client connects to the tracker (or DHT) to find other peers sharing the same file.
    3.  Peers download file pieces from multiple sources simultaneously and upload pieces they have already downloaded to others.
    4.  The client keeps track of which pieces it has and requests missing pieces from other peers.
    5.  The entire file is assembled upon downloading all pieces.

*   **Key Concepts:**
    *   **Tracker:** A server that coordinates peers in a swarm.
    *   **Peers:** Clients participating in the swarm.
    *   **Seeds:** Peers that have the complete file and are only uploading.
    *   **Leechers:** Peers that are downloading the file and may also be uploading pieces they have.
    *   **Swarm:** The group of peers sharing a specific file.
    *   **Pieces:** Files are broken into small, manageable chunks.
    *   **Hashing:** Used to verify the integrity of downloaded pieces.
    *   **DHT (Distributed Hash Table):** Increasingly used to replace trackers for more decentralized discovery.

#### **Distributed Hash Tables (DHTs) - e.g., Kademlia:**

*   **Concept:** A distributed system that provides a lookup service similar to a hash table: key-value pairs are stored, and any participating node can efficiently retrieve the value associated with a given key.
*   **How it works (Simplified Kademlia):**
    *   Each node and resource is assigned a unique ID (usually a large random number).
    *   A distance metric (often XOR distance) is used to define proximity between IDs.
    *   Each node maintains routing information (a routing table) about other nodes in the network, organized by the distance of their IDs.
    *   When searching for a resource (identified by its key/ID), a node queries nodes progressively closer to the target ID.
    *   The resource's owner (or a node responsible for it) stores the value.

---

### **Important Points to Remember:**

*   P2P is about **decentralized resource sharing** among equals (peers).
*   **No single point of failure** is a key advantage.
*   **Scalability** is generally better than traditional client-server for certain tasks.
*   **Transport Layer protocols (TCP/UDP)** are fundamental for peer-to-peer communication.
*   **NAT traversal** is a critical technical challenge.
*   **Security, privacy, and legal concerns** are significant considerations for P2P deployments.
*   **Structured P2P (DHTs)** offer more efficient resource discovery than unstructured P2P.
*   **BitTorrent** is a prime example of a successful P2P file-sharing system.

---

### **Practice Questions & Exercises**

**Question 1:**
Differentiate between the client-server model and the peer-to-peer model. Mention at least two advantages of the P2P model over the client-server model.

**Answer 1:**
*   **Client-Server:** Centralized, clients request resources from a server.
*   **P2P:** Decentralized, peers share resources directly with each other.
*   **Advantages of P2P:**
    1.  **No Single Point of Failure:** The failure of one peer doesn't affect the entire network.
    2.  **Improved Scalability:** As more peers join, the network's capacity and resource availability increase.
    3.  **Reduced Server Costs:** No need for powerful, dedicated servers to host all resources.

**Question 2:**
Explain the concept of a Distributed Hash Table (DHT) in the context of structured P2P networks. How does it improve resource discovery compared to unstructured P2P networks?

**Answer 2:**
A DHT is a decentralized system that maps keys to values, allowing any peer to efficiently look up associated values. In structured P2P networks, DHTs organize peers and resources based on unique IDs. Each peer is responsible for a portion of the key space. When searching for a resource, a peer uses the DHT to find the specific peer(s) responsible for that resource's key, leading to efficient and targeted lookups. This contrasts with unstructured networks, which often rely on flooding queries across the network, leading to higher overhead and less efficient discovery.

**Question 3:**
What is the primary challenge posed by NAT devices in establishing direct peer-to-peer connections, and what are some common techniques used to overcome it?

**Answer 3:**
The primary challenge posed by NAT (Network Address Translation) is that it hides the internal IP addresses of devices behind a single public IP address and acts as a firewall, preventing direct incoming connections from external peers. Common techniques to overcome this include:
*   **UPnP (Universal Plug and Play):** Allows applications to automatically configure router settings to open ports.
*   **STUN (Session Traversal Utilities for NAT):** Helps peers discover their public IP address and the type of NAT they are behind.
*   **Hole Punching:** Techniques that try to establish direct connections by sending packets to each other simultaneously after discovering their public endpoints via a rendezvous server.
*   **TURN (Traversal Using Relays around NAT):** Acts as a relay server when direct P2P connections fail, forwarding traffic between peers.

**Question 4:**
In the BitTorrent protocol, what is the role of a "tracker" or a "DHT"?

**Answer 4:**
A tracker is a server that keeps track of the peers in a "swarm" (a group of peers sharing a specific file). It helps peers find each other. A DHT (Distributed Hash Table) serves a similar purpose but in a decentralized manner. It allows peers to discover other peers participating in the swarm without the need for a central tracker server, making the discovery process more robust and less prone to single points of failure.

**Question 5:**
Briefly explain two security concerns associated with P2P networks.

**Answer 5:**
Two security concerns are:
1.  **Malware Distribution:** P2P networks can be used by malicious actors to distribute viruses, worms, spyware, and other harmful software disguised as legitimate files.
2.  **Sybil Attacks:** An attacker can create numerous fake identities (peers) to gain undue influence over the network, disrupt its operation, or spread misinformation.

---
