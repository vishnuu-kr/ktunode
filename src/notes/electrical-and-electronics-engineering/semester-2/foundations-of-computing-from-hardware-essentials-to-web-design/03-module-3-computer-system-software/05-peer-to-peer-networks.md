---
title: "Peer-to-Peer networks"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 3: Computer System Software "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f975f"
status: "completed"
scrapedAt: "2026-05-23T16:07:01.212Z"
---
# Module 3: Computer System Software - Peer-to-Peer Networks

Welcome everyone! In this session, we're going to dive into a fascinating area of computer networking: **Peer-to-Peer (P2P) Networks**. We've already touched upon how computers communicate, and now we're going to explore a model that's quite different from the traditional client-server setup you might be more familiar with. This topic directly relates to **Course Outcome 3 (CO3)**, where we aim to explain computer network architecture and necessary protocols. Understanding P2P networks helps us grasp alternative ways resources can be shared and accessed.

## What Exactly is a Peer-to-Peer Network?

Think about how you usually access information online. Most of the time, you're acting as a "client." You request a webpage from a web server, or you download a file from a download server. This is the **client-server model**, and it's been the backbone of the internet for a long time. In this model, there are distinct roles: servers are powerful machines that hold and provide resources, while clients are typically individual computers that request those resources.

Now, imagine a network where every computer on that network can act as *both* a client *and* a server. This is the essence of a **Peer-to-Peer (P2P) network**. Instead of relying on a central server for everything, each computer (or "peer") in the network shares its own resources (like files, processing power, or network bandwidth) directly with other peers.

Let's use an analogy. Imagine a classroom.

*   **Client-Server:** In a traditional classroom setup, the teacher is the "server." They have all the books, the whiteboard, and they dispense information to the students (the "clients"). Students primarily receive information from the teacher. If you want to borrow a book, you ask the teacher.

*   **Peer-to-Peer:** Now, imagine a classroom where *every* student has some books they're willing to share, and every student can also ask any other student for a book. If Sarah has a math book you need, you can ask Sarah directly. If John has notes you missed, you can ask John. Everyone is both a source of information and a consumer of information. This is much closer to how a P2P network operates!

As Schneider and Gersting mention in their "Invitation to Computer Science," P2P networks decentralize resource sharing. This decentralization is a key characteristic and often leads to increased efficiency and resilience.

### Key Characteristics of P2P Networks:

*   **Decentralization:** No single point of control or failure. Resources are distributed across the network.
*   **Resource Sharing:** Peers share their own resources directly with other peers. This can include files, printers, storage space, or even processing power.
*   **Equal Roles:** Each computer on the network has the same capabilities and responsibilities. They are all "peers."
*   **Scalability:** As more peers join, the total capacity of the network can increase because each new peer brings its own resources.
*   **Resilience:** If one peer goes offline, the network can usually continue to function, as other peers can still share resources.

## How Do P2P Networks Work?

So, how do these "peers" find each other and share resources? This is where the underlying network architecture and protocols come into play, aligning with **CO3**. In a P2P network, there isn't a central directory or master server that keeps track of who has what. Instead, peers often rely on:

1.  **Direct Connections:** Peers might know the network addresses of other peers they want to connect with. This is common in smaller, more managed P2P networks.

2.  **Discovery Mechanisms:** For larger, more dynamic networks (like those used for file sharing), peers need ways to discover other available peers and the resources they offer. This can involve:
    *   **Flooding:** A peer that wants to find a resource sends a request to all its known neighbors. These neighbors then forward the request to *their* neighbors, and so on, until the resource is found or a predefined limit is reached. Think of it like shouting a question in a crowded room – everyone hears it and might pass it along if they know the answer.
    *   **Indexing Servers (Hybrid P2P):** Some P2P systems use a central server, but *only* for indexing. This server doesn't store the actual files but maintains a list of which peers have which files. When you search for a file, you first query the index server to find out which peers have it, and then you connect directly to those peers to download. This is a bit like a library catalog – it tells you where the book is, but it isn't the book itself. Englander's "The Architecture of Computer Hardware, Systems Software, & Networking" often discusses how systems evolve to combine different architectural approaches for efficiency.

3.  **Protocol Stacks:** Just like any other network, P2P networks rely on protocols for communication. These protocols define the rules for how data is formatted, transmitted, and received. For example, TCP/IP is fundamental. Specific P2P applications will have their own protocols on top of these for tasks like searching, transferring, and managing shared resources.

Remember, the beauty of P2P is that **every participant is an equal**. This is a fundamental difference from client-server models where you have dedicated providers and consumers.

## Types of P2P Networks

P2P networks aren't a monolith; they come in different flavors, often distinguished by how they manage the discovery of resources and peers.

### 1. Pure P2P (Unstructured)

In a pure P2P network, there is no central coordination or organization. All peers are equal, and there's no predefined structure for how they connect or discover resources. When a peer wants to find something, it might broadcast its request widely (flooding).

*   **Example:** Early file-sharing systems like Napster (though it had a central index) and Gnutella are often cited here. Gnutella, for instance, used flooding to locate files.
*   **Pros:** Highly decentralized, resilient.
*   **Cons:** Inefficient discovery (can create network traffic), hard to manage, can be slow to find resources if flooding isn't optimized.

### 2. Hybrid P2P

This is a more common approach. It combines elements of P2P with some degree of centralization, typically for managing the network or facilitating resource discovery.

*   **Example:** Napster used a central server to index files. When a user searched for a song, their client would query the index server. The index server would then respond with a list of peers sharing that song. The client would then connect *directly* to those peers to download. Skype (in its earlier versions) also used hybrid P2P, with central servers for login and contact list management, but peer-to-peer connections for actual voice and video calls.
*   **Pros:** More efficient resource discovery than pure P2P, easier to manage, better performance.
*   **Cons:** Relies on the central index server, making it a potential single point of failure (though usually less critical than in a pure client-server model).

### 3. Structured P2P

These networks are highly organized. Peers and resources are placed in specific locations within the network structure based on a defined algorithm. This allows for very efficient searching.

*   **Example:** Distributed Hash Tables (DHTs) are a prime example. Technologies like Kademlia, used by BitTorrent, fall into this category. In a DHT, each peer and each piece of data is assigned a unique identifier. The network is structured so that you can efficiently find the peer responsible for a given piece of data by its identifier. It's like having a perfectly organized filing system where you know exactly which cabinet and folder to look in for any document.
*   **Pros:** Highly efficient and fast resource discovery, scalable.
*   **Cons:** More complex to implement and maintain, can be less resilient to peers joining and leaving frequently compared to unstructured P2P.

The choice of P2P architecture impacts performance, scalability, and resilience. As we learn about network architectures in **CO3**, it's crucial to see how these different models leverage various techniques.

## Applications of P2P Networks

You might be surprised at how prevalent P2P technology is. Beyond the obvious file sharing, it powers many essential services.

### 1. File Sharing

This is perhaps the most well-known application. Services like BitTorrent allow users to download large files by breaking them into smaller pieces and downloading those pieces from many different peers simultaneously. As you download, you also upload pieces you've already acquired, contributing to the network. This is a brilliant example of **CO1 (Identify the fundamental components and the working of an IT environment)** because it shows a distributed system in action.

*   **Analogy:** Imagine building a LEGO castle. Instead of one person having all the bricks, everyone has a few bricks. You ask your friends if they have the specific bricks you need for your wall. As you get bricks, you also share any extra bricks you have with others who might need them.

### 2. Content Delivery Networks (CDNs)

While CDNs often use client-server principles, some leverage P2P techniques to distribute content more efficiently, especially for live streaming or very popular video content. Multiple users downloading the same stream can share data amongst themselves, reducing the load on origin servers.

### 3. Communication and Collaboration Tools

*   **Early Instant Messaging:** Some early instant messaging services used P2P for direct user-to-user communication once a connection was established through a central server.
*   **Voice over IP (VoIP):** As mentioned with Skype, P2P can be used for direct voice and video calls between users. This is a direct application of **CO3** in explaining network communication.

### 4. Blockchain and Cryptocurrencies

This is a massive area where P2P is fundamental. Bitcoin, Ethereum, and other cryptocurrencies operate on decentralized P2P networks. Every transaction is broadcast to the network, validated by peers, and added to a shared ledger (the blockchain) that all peers maintain. This is a prime example of distributed ledger technology, a core concept in modern IT.

*   **Think about it:** How would a cryptocurrency work if there was one central bank or server? It wouldn't be decentralized! P2P is essential for the trustless nature of these systems.

### 5. Distributed Computing

Some P2P networks allow users to contribute their idle CPU time to large-scale scientific computations or simulations. Projects like SETI@home (Search for Extraterrestrial Intelligence) used to leverage this. This shows how even the "hardware essentials" (**CO1**) can be pooled.

## Advantages and Disadvantages of P2P Networks

Like any technology, P2P networks have their strengths and weaknesses. Understanding these helps us appreciate why different network models are chosen for different tasks.

### Advantages:

*   **Cost-Effective:** No need for expensive, dedicated server hardware. Each peer contributes its own resources.
*   **Scalability:** As more users join, the network's capacity often increases because each new user brings resources. This contrasts with client-server, where adding more clients increases the load on the *same* server.
*   **Resilience/Fault Tolerance:** If one or even many peers go offline, the network can continue to operate. There's no single point of failure that can bring down the entire system, which is a significant advantage in distributed systems.
*   **Efficiency:** For certain tasks, like distributing large files to many users, P2P can be more efficient than client-server. Instead of one server sending the file to 1000 users, 1000 users are collectively distributing pieces of the file among themselves.

### Disadvantages:

*   **Security Concerns:** Because resources are shared directly between peers, security can be a major issue. Malware, viruses, and unauthorized access can be risks. Unlike a controlled server environment, it's harder to enforce security policies on individual peers.
*   **Resource Availability:** The availability of a resource depends on whether the peer sharing it is online and willing to share. If the peer hosting the file you need goes offline, you can't access it.
*   **Network Traffic:** In unstructured P2P networks, broadcasting requests (flooding) can consume significant bandwidth and create network congestion.
*   **Management Complexity:** Managing a large P2P network, especially an unstructured one, can be difficult. There's no central authority to enforce rules or manage users.
*   **Performance Variability:** Performance can be inconsistent, depending on the number of peers available, their connection speeds, and the resources they are sharing.

## P2P vs. Client-Server: A Quick Recap

It’s important to distinguish P2P from client-server. Schneider and Gersting often highlight this contrast.

| Feature           | Client-Server Model                                 | Peer-to-Peer (P2P) Model                                 |
| :---------------- | :-------------------------------------------------- | :------------------------------------------------------- |
| **Architecture**  | Centralized; dedicated servers and clients.         | Decentralized; all nodes are peers, acting as both.    |
| **Resource Mgmt** | Resources stored on servers.                        | Resources distributed and shared among peers.            |
| **Scalability**   | Can be costly; server is often a bottleneck.      | Generally more scalable; adding peers adds capacity.     |
| **Fault Tolerance** | Single point of failure (server).                 | More resilient; no single point of failure.              |
| **Security**      | Easier to manage centrally.                         | More challenging to manage; depends on individual peers. |
| **Cost**          | Requires dedicated, often expensive servers.        | Leverages existing peer resources, often lower cost.     |
| **Examples**      | Web browsing, email, most corporate networks.       | File sharing (BitTorrent), cryptocurrencies, some VoIP.  |

Understanding these differences is key for **CO3** when we discuss network architecture. It's not about one being "better," but about which model is best suited for a particular task.

## Connecting to Web Design (CO4)

While P2P networks are primarily about system software and networking, they have indirect connections to web design, especially concerning **CO4: Develop simple interactive web pages and validate the inputs.**

*   **Decentralized Content:** Imagine a future where parts of a website's content are stored and served by users themselves via P2P principles. This could make websites more resilient and faster to load for users who are also peers.
*   **Web Development Tools:** Some distributed version control systems (like Git, though not strictly P2P in its primary network protocol for servers like GitHub) and collaboration tools can have P2P-like characteristics in how code is shared and synchronized.
*   **JavaScript in P2P:** Technologies like WebRTC (Web Real-Time Communication) enable peer-to-peer connections directly within web browsers using JavaScript. This allows for direct video calls, file sharing, and other P2P applications without needing plugins. So, the JavaScript you learn for building interactive web pages (CO4) can actually be the foundation for enabling P2P functionality *within* a web browser!

It's a bit like learning to build a house (web design) and then learning about how to build community structures that can directly connect houses (P2P networking). The fundamental building blocks are related!

## What to Remember for Exams

When preparing for exams on P2P networks, focus on:

1.  **The core definition:** What makes a network peer-to-peer (equal roles, decentralized sharing).
2.  **Key differences from client-server:** This is a very common exam question. Be ready to compare and contrast their architecture, scalability, and fault tolerance.
3.  **Types of P2P networks:** Pure, Hybrid, and Structured. Understand their characteristics, pros, and cons, and be able to provide examples for each.
4.  **Applications:** Know the common uses of P2P technology (file sharing, blockchain, VoIP).
5.  **Advantages and Disadvantages:** Be prepared to list and explain these.

Think about the **"why"**: *why* would someone choose a P2P model over client-server? Usually, it's for resilience, cost, or scalability in specific scenarios.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual knowledge and exam-style recall.

**Question 1 (Conceptual):**
Explain why a P2P network is often considered more resilient to failures than a traditional client-server network.

**Answer:**
A P2P network is more resilient because it lacks a single point of failure. In a client-server model, if the central server goes down, the entire network or service can become unavailable. In a P2P network, resources and responsibilities are distributed among many peers. If one peer goes offline, other peers can continue to share their resources, and the network as a whole can still function. For example, in BitTorrent, if one peer sharing a file stops, others can still provide the file pieces to the network. This distributed nature makes the system robust against individual node failures. This directly relates to **CO3** by illustrating network fault tolerance.

**Question 2 (Exam-Oriented Recall):**
Napster is a classic example of which type of P2P network?
a) Pure P2P
b) Hybrid P2P
c) Structured P2P
d) Client-Server

**Answer:**
b) Hybrid P2P

**Reasoning:** Napster used a central server to maintain an index of all shared files. When a user searched for a file, their client would query this index server. The index server would then provide a list of peers that had the file. The actual file transfer then happened directly between peers. This combination of a central index server and peer-to-peer file transfer is characteristic of a hybrid P2P model.

**Question 3 (Application & Comparison):**
Describe one advantage and one disadvantage of using a P2P network for file sharing compared to a client-server approach.

**Answer:**

*   **Advantage:** **Scalability and Efficiency for Distribution.** In a P2P file sharing system like BitTorrent, as more users download a popular file, they also start uploading pieces of that file to other users. This distributes the bandwidth load away from a single source server to many users, making it highly scalable. The more people who want the file, the more sources there are for it. This is often more efficient than a client-server model where one server has to serve all download requests. This relates to **CO1** by showing how IT environments utilize resources.

*   **Disadvantage:** **Security Risks.** In a P2P network, you are directly connecting to and downloading files from other unknown users. This increases the risk of downloading malware, viruses, or corrupted files. Unlike a controlled server environment where security measures can be strictly enforced, security in P2P is highly dependent on the individual peers, making it more vulnerable. This is a critical consideration when thinking about system software security.
