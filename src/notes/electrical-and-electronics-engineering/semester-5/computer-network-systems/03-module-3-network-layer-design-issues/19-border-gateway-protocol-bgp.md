---
title: "Border Gateway Protocol (BGP)"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3648f"
status: "completed"
scrapedAt: "2026-05-23T16:20:20.554Z"
---
# Computer Network Systems: Module 3 - Network Layer Design Issues

## Topic: Border Gateway Protocol (BGP)

---

### 1. Introduction to Routing Protocols

*   **Purpose of Routing:** To determine the best path for data packets to travel from a source to a destination network.
*   **Types of Routing Protocols:**
    *   **Interior Gateway Protocols (IGPs):** Used within an Autonomous System (AS). Examples include RIP, OSPF, IS-IS.
        *   **Goal:** Minimize hop count or convergence time.
        *   **Complexity:** Generally simpler.
    *   **Exterior Gateway Protocols (EGPs):** Used between Autonomous Systems (ASes). The primary example is BGP.
        *   **Goal:** Policy-based routing, path selection based on business and administrative policies, not just shortest path.
        *   **Complexity:** Significantly more complex.

**Relation to Course Outcomes:**
*   **CO3:** This section directly addresses the need to understand routing algorithms and external routing protocols.

**Textbook/Reference Integration:**
*   Tanenbaum, "Computer Networks": Discusses the distinction between IGPs and EGPs and the fundamental role of routing.
*   Forouzan, "Data Communication and Networking": Provides a good overview of routing concepts and classifications.
*   Kurose & Ross, "Computer Networking: A Top-Down Approach": Explains the internet's routing architecture and the need for inter-domain routing.

---

### 2. The Need for an Exterior Gateway Protocol (EGP)

*   **The Internet as a Network of Networks:** The internet is not a single, monolithic network. It's a collection of independently administered networks called **Autonomous Systems (ASes)**.
*   **Inter-AS Routing Challenges:**
    *   **Scale:** The number of ASes is vast, making hop-count routing infeasible.
    *   **Policy Requirements:** ASes are operated by different organizations with different business goals, security requirements, and traffic engineering needs. They need to control how traffic enters and leaves their AS.
    *   **Trust and Administration:** ASes are administratively independent, so routing information must be exchanged between trusted entities.
*   **Limitations of IGPs for Inter-AS Routing:**
    *   **Metric:** IGPs typically use metrics like hop count or link cost, which don't reflect business policies or traffic engineering preferences.
    *   **Policy Enforcement:** IGPs lack the mechanisms to enforce complex routing policies.
    *   **Scalability:** IGPs are not designed to scale to the size of the global internet.

**Relation to Course Outcomes:**
*   **CO3:** Highlights why external routing protocols are necessary and the limitations of internal ones.

**Textbook/Reference Integration:**
*   Peterson & Davie, "Computer Networks – A Systems Approach": Explains the AS model and the challenges of routing between them.
*   Stallings, "Computer Networking with Internet Protocols": Details the historical context and evolution leading to BGP.

---

### 3. Introduction to the Border Gateway Protocol (BGP)

*   **Definition:** BGP is the de facto standard Exterior Gateway Protocol (EGP) used to exchange routing and reachability information between different Autonomous Systems (ASes) on the internet.
*   **BGP's Role:** It's the "glue" that holds the internet together, enabling ASes to advertise what IP address prefixes they can reach.
*   **Type of Protocol:** BGP is a **Path-Vector Routing Protocol**.
    *   **Path-Vector:** Instead of just advertising the cost to reach a destination, BGP advertises the *sequence of ASes* that must be traversed to reach a destination network prefix. This allows for policy-based route selection.

**Key Concepts:**
*   **Autonomous System (AS):** A collection of IP networks and routers under the control of a single entity (e.g., an ISP, a large corporation) that presents a common routing policy to the internet. ASes are assigned unique AS Numbers (ASNs) by regional internet registries (RIRs).
*   **Network Prefix:** A block of IP addresses, typically represented in CIDR (Classless Inter-Domain Routing) notation (e.g., 192.168.1.0/24).
*   **BGP Speaker:** A router running BGP.
*   **BGP Peer (Neighbor):** Two BGP speakers that have established a BGP session to exchange routing information.
*   **BGP Session:** A reliable, TCP-based connection (port 179) between two BGP peers.

**Relation to Course Outcomes:**
*   **CO1:** Understanding ASes and network prefixes is fundamental to network architecture.
*   **CO3:** Directly covers BGP as an external routing protocol.

**Textbook/Reference Integration:**
*   Tanenbaum, "Computer Networks": Provides a solid introduction to BGP's role in the internet hierarchy.
*   Forouzan, "Data Communication and Networking": Explains BGP as a key EGP and its path-vector nature.
*   Stevens, "TCP/IP Illustrated Volume 1": Offers deep insights into BGP's TCP/IP implementation details.

---

### 4. BGP Message Types and Operations

BGP uses a reliable transport mechanism (TCP) to exchange routing information. It primarily uses four types of messages:

1.  **OPEN:**
    *   Sent by a BGP speaker to establish a connection with a peer.
    *   Negotiates BGP version, AS number, and BGP identifier.
    *   Must be the first message exchanged.
2.  **UPDATE:**
    *   The most important message type.
    *   Used to advertise new network prefixes or withdraw previously advertised ones.
    *   **Components of an UPDATE message:**
        *   **Withdrawn Routes:** List of network prefixes being withdrawn.
        *   **Path Attributes:** Information about the path to the advertised network prefixes. These are crucial for policy-based routing.
        *   **NLRI (Network Layer Reachability Information):** The actual network prefixes being advertised.
3.  **NOTIFICATION:**
    *   Sent to signal an error condition or to gracefully close a BGP session.
    *   Includes an error code and sub-code, indicating the reason for the notification.
4.  **KEEPALIVE:**
    *   Sent periodically to maintain an established BGP session and indicate that the speaker is still alive.
    *   If KEEPALIVE messages are not received within a configured hold timer, the session is considered down.

**BGP Operation Stages:**
1.  **Establishment:** BGP speakers establish TCP connections (port 179). They then exchange OPEN messages to negotiate parameters and establish a BGP session.
2.  **Peering:** Once the session is established, peers exchange UPDATE messages to advertise reachable network prefixes and their associated path attributes.
3.  **Route Selection:** Each BGP speaker receives multiple path advertisements for the same prefix from different peers. It uses a decision process based on path attributes and local policies to select the "best" path.
4.  **Maintenance:** KEEPALIVE messages are sent to maintain the session. If a TCP connection fails or a notification is received, the session is torn down, and affected routes are withdrawn.

**Relation to Course Outcomes:**
*   **CO1:** Understanding protocol messages is key to network architecture.
*   **CO3:** Details the operational aspects of an external routing protocol.

**Textbook/Reference Integration:**
*   Forouzan, "Data Communication and Networking": Explains the different BGP message types and their functions.
*   Stevens, "TCP/IP Illustrated Volume 1": Provides detailed analysis of BGP message formats and states.
*   Kurose & Ross, "Computer Networking: A Top-Down Approach": Illustrates the message exchange for route advertisement.

---

### 5. BGP Path Attributes

Path attributes are key-value pairs that describe the path to a network prefix and are used by BGP speakers to select the best route. They are fundamental to BGP's policy-based routing.

**Classes of Path Attributes:**

*   **Well-Known Mandatory:** Must be recognized by all BGP speakers and must be present in all UPDATE messages.
    *   **AS_PATH:** The sequence of AS numbers traversed to reach the destination network. This is the most important attribute for preventing routing loops and for policy implementation.
        *   *Example:* `AS_PATH: 64512 64513 64514` means the path goes through AS 64512, then AS 64513, then AS 64514 to reach the advertised prefix.
*   **Well-Known Discretionary:** Must be recognized by all BGP speakers but are optional.
    *   **ORIGIN:** Indicates how the network prefix entered BGP.
        *   `IGP` (0): Prefix originated within the AS. (Most preferred)
        *   `EGP` (1): Prefix learned from an EGP (obsolete).
        *   `Incomplete` (2): Prefix learned from an external source (e.g., redistribution from an IGP). (Least preferred)
    *   **NEXT_HOP:** The IP address of the next-hop router on the path to the destination network. This is the IP address of the BGP speaker advertising the route, as seen by the peer.
    *   **NEXT_ORIGIN:** Identifies the origin AS of the route.
*   **Optional Transitive:** May or may not be recognized by a BGP speaker. If not recognized, it must be passed along to peers (transitive).
    *   **COMMUNITY:** Allows ASes to tag routes with specific attributes that can be used for policy enforcement. Communities are a set of user-defined tags (often 32-bit values).
        *   *Example:* A common community is `NO_EXPORT`, which prevents a route from being advertised outside the current AS.
    *   **LOCAL_PREF:** Used within an AS to influence the outbound path selection. Higher LOCAL_PREF values are preferred. This is a strong local preference.
*   **Optional Non-Transitive:** May or may not be recognized. If not recognized, it is *not* passed along to peers (non-transitive).
    *   **MULTI_EXIT_DISCRIMINATOR (MED):** Used to influence how other ASes route traffic *into* the originating AS. Lower MED values are preferred. It's an optional hint.
    *   **ATOMIC_AGGREGATE:** Indicates that the path includes a network that is an aggregate of more specific routes, and one or more constituent routes were not included in the advertisement.

**BGP Route Selection Process (Simplified):**

When a BGP speaker receives multiple paths for the same destination prefix, it selects the "best" path using a deterministic algorithm. The typical order of preference is:

1.  **Highest Weight (Cisco proprietary):** Not part of the standard BGP attributes but widely used.
2.  **Highest LOCAL_PREF:** Determines preference within an AS.
3.  **Locally Originated Paths:** Paths that originate within the AS (ORIGIN = IGP).
4.  **Shortest AS_PATH:** Fewer ASes in the path.
5.  **Lowest ORIGIN Type:** IGP < EGP < Incomplete.
6.  **Lowest MED:** Influences inbound traffic.
7.  **AS_PATH Selection (e.g., oldest path, lowest neighbor ASN):** Tie-breaking rules.
8.  **Lowest Router ID:** Identifier of the BGP speaker originating the path.
9.  **Lowest Neighbor IP Address:** Tie-breaking rule.

**Relation to Course Outcomes:**
*   **CO3:** Directly addresses the attributes used in external routing and how they influence path selection.

**Textbook/Reference Integration:**
*   Tanenbaum, "Computer Networks": Explains the role of path attributes in policy routing.
*   Forouzan, "Data Communication and Networking": Details each path attribute and its significance.
*   Kurose & Ross, "Computer Networking: A Top-Down Approach": Uses examples to illustrate how path attributes affect route choice.
*   Peterson & Davie, "Computer Networks – A Systems Approach": Discusses the trade-offs and complexity of path attributes for policy.
*   Stevens, "TCP/IP Illustrated Volume 1": Provides low-level details on how attributes are encoded.

---

### 6. BGP Peer Types

BGP peers can be classified based on their location relative to each other and their AS membership.

*   **iBGP (Internal BGP):**
    *   Peering between BGP speakers within the **same** Autonomous System.
    *   **Key Characteristics:**
        *   **Full Mesh Requirement:** To ensure all routers within an AS learn all external routes, all iBGP speakers within an AS must peer with each other (full mesh). This can be problematic for large ASes.
        *   **Route Reflection and Confederations:** Solutions to the full mesh requirement. Route reflectors allow specific iBGP speakers to reflect routes to other iBGP speakers, reducing the need for a full mesh. Confederations partition an AS into smaller sub-ASes.
        *   **AS_PATH Attribute:** iBGP does not modify the AS_PATH attribute.
        *   **NEXT_HOP Attribute:** When an iBGP speaker receives a route from an eBGP peer, the NEXT_HOP attribute is set to the IP address of the eBGP peer. For reachability to this NEXT_HOP, the iBGP speaker relies on its IGP. If the NEXT_HOP is not reachable via the IGP, the route is discarded.
        *   **LOCAL_PREF:** Used extensively within an AS for outbound traffic engineering.
*   **eBGP (External BGP):**
    *   Peering between BGP speakers in **different** Autonomous Systems.
    *   **Key Characteristics:**
        *   **Policy Enforcement:** Primarily used to exchange routing information between ASes, enforcing administrative and business policies.
        *   **AS_PATH Attribute:** The originating AS number is prepended to the AS_PATH attribute. This is crucial for loop detection.
        *   **NEXT_HOP Attribute:** The NEXT_HOP attribute is the IP address of the eBGP peer advertising the route. The AS advertising the route typically advertises reachability to this NEXT_HOP IP.
        *   **LOCAL_PREF:** Not used between different ASes (as it's an internal policy mechanism).
        *   **Peer Assumption:** eBGP peers are assumed to be directly connected or have a path via an IGP.

**Relation to Course Outcomes:**
*   **CO3:** Differentiates between internal and external routing contexts and how BGP behaves in each.

**Textbook/Reference Integration:**
*   Tanenbaum, "Computer Networks": Explains the distinction between iBGP and eBGP and their operational differences.
*   Forouzan, "Data Communication and Networking": Covers the configuration and implications of iBGP vs. eBGP.
*   Kurose & Ross, "Computer Networking: A Top-Down Approach": Provides clear explanations and diagrams of iBGP and eBGP scenarios.

---

### 7. BGP Route Propagation and Loop Prevention

*   **Route Propagation:**
    *   An AS receives routes from its eBGP neighbors.
    *   These routes are then processed, potentially modified (e.g., adding LOCAL_PREF, prepending AS_PATH), and advertised to its iBGP neighbors.
    *   iBGP speakers within the AS learn these routes and advertise them to their eBGP neighbors (again, processing and modifying attributes).
*   **BGP Loop Prevention:**
    *   **AS_PATH Check:** The primary mechanism. If a BGP speaker receives an UPDATE message for a prefix and its own AS number is already present in the AS_PATH attribute, it discards the update. This prevents AS-level loops.
    *   **iBGP Split Horizon Rule:** An iBGP speaker will not advertise a route learned from an iBGP peer to another iBGP peer. This is to avoid internal loops and reduce overhead. (This is why route reflection or confederations are needed).
    *   **NEXT_HOP Reachability:** If the NEXT_HOP specified in an UPDATE message is not reachable from the receiving router (typically via its IGP), the route is discarded.

**Relation to Course Outcomes:**
*   **CO3:** Directly discusses the mechanisms that ensure stable routing and prevent loops, a key aspect of routing algorithms.

**Textbook/Reference Integration:**
*   Tanenbaum, "Computer Networks": Details the AS_PATH loop prevention mechanism.
*   Forouzan, "Data Communication and Networking": Explains how BGP ensures loop-free paths.
*   Peterson & Davie, "Computer Networks – A Systems Approach": Analyzes the robustness and loop prevention strategies in inter-domain routing.

---

### 8. BGP in Practice: Policy Routing and Traffic Engineering

*   **Policy Routing:** BGP's strength lies in its ability to implement complex routing policies based on business agreements, costs, performance, and legal requirements, not just shortest paths.
    *   **Influencing Inbound Traffic:**
        *   **MED:** Announcing a lower MED to a specific peer can encourage them to send traffic to your AS via that peer.
        *   **COMMUNITY Attributes:** Using custom communities to signal preferences to upstream providers.
        *   **AS_PATH Prepending:** Announcing a path with your AS number prepended multiple times to make it appear longer, deterring traffic from using that path.
    *   **Influencing Outbound Traffic:**
        *   **LOCAL_PREF:** Setting a higher LOCAL_PREF for routes learned from a preferred upstream provider ensures that traffic exits your AS through that provider.
        *   **COMMUNITY Attributes:** Using communities to influence how upstream providers peer with you or to apply specific traffic treatment.
        *   **Selecting Preferred Peers:** Configuring BGP to prefer routes learned from specific peers over others.
*   **Traffic Engineering:** The process of optimizing network traffic flow to improve performance and resource utilization. BGP is a primary tool for this at the inter-AS level.
    *   **Selecting Upstream Providers:** ASes might have multiple upstream ISPs. BGP policies help choose which ISP to send traffic through based on cost, performance, or capacity.
    *   **Load Balancing:** While not its primary strength, BGP can be used to distribute traffic across multiple links or paths to different destinations.
    *   **BGP Communities for Traffic Management:** ISPs often define specific communities that customers can use to influence traffic flow, like "prefer this path for traffic engineering."

**Relation to Course Outcomes:**
*   **CO3:** Directly addresses the practical application of external routing protocols for policy and quality of service.

**Textbook/Reference Integration:**
*   Kurose & Ross, "Computer Networking: A Top-Down Approach": Provides excellent scenarios of how ISPs use BGP for policy and traffic engineering.
*   Peterson & Davie, "Computer Networks – A Systems Approach": Discusses the economic and policy drivers behind BGP configurations.
*   Halsall, "Computer Networking and the Internet": Offers practical insights into how BGP is configured in real-world networks.

---

### 9. BGP Session States

BGP routers go through several states during the establishment and maintenance of a peering session.

1.  **Idle:** The initial state. The BGP process is not running.
2.  **Connect:** The BGP speaker is attempting to establish a TCP connection with its peer.
3.  **Active:** The BGP speaker is trying to find a peer by sending OPEN messages and attempting to establish a TCP connection.
4.  **OpenSent:** The BGP speaker has sent an OPEN message and is waiting for an OPEN message from the peer.
5.  **OpenConfirm:** The BGP speaker has received a valid OPEN message from the peer and sent a KEEPALIVE message. It's waiting for the peer to acknowledge the session establishment.
6.  **Established:** The BGP session is successfully established. Peers can now exchange UPDATE, NOTIFICATION, and KEEPALIVE messages.

**Relation to Course Outcomes:**
*   **CO1:** Understanding session states is part of understanding protocol operation.
*   **CO3:** Illustrates the state management required for a robust routing protocol.

**Textbook/Reference Integration:**
*   Stevens, "TCP/IP Illustrated Volume 1": Provides a deep dive into the BGP state machine.
*   Forouzan, "Data Communication and Networking": Offers a clear overview of the BGP session states.

---

### 10. Key Takeaways and Important Points to Remember

*   **BGP is an Exterior Gateway Protocol (EGP).** It operates *between* Autonomous Systems (ASes).
*   **It's a Path-Vector protocol.** It advertises the AS path, not just a cost.
*   **Policy, not just shortest path.** BGP's primary goal is to enable ASes to enforce routing policies.
*   **The Internet's routing backbone.** BGP is essential for inter-AS connectivity.
*   **AS Numbers (ASNs) are crucial.** They identify unique administrative domains.
*   **Key path attributes:** AS_PATH, ORIGIN, NEXT_HOP, LOCAL_PREF, MED, COMMUNITY.
*   **Loop prevention:** Primarily through AS_PATH checks and the iBGP split-horizon rule.
*   **iBGP vs. eBGP:** Understand the distinct behaviors and purposes.
*   **TCP Port 179:** BGP uses TCP for reliable communication.
*   **Scalability:** BGP is designed to handle the immense scale of the internet.

---

### Practice Questions and Answers

**Q1. What is the primary purpose of BGP, and how does it differ from Interior Gateway Protocols (IGPs)?**

**Answer:**
The primary purpose of BGP is to exchange routing information *between* different Autonomous Systems (ASes) on the internet. This allows ASes to advertise what network prefixes they can reach and to make policy-driven decisions about how to route traffic between them.
IGPs, on the other hand, operate *within* a single AS and are typically focused on finding the shortest or most efficient path based on metrics like hop count or link cost. IGPs lack the sophisticated policy enforcement mechanisms required for inter-AS routing.

**Q2. Explain the role of the AS_PATH attribute in BGP.**

**Answer:**
The AS_PATH attribute is a sequence of AS numbers that a routing update has traversed to reach a destination network prefix. Its primary roles are:
1.  **Loop Prevention:** BGP routers check the AS_PATH attribute; if they encounter their own AS number in the path, they discard the update to prevent routing loops at the AS level.
2.  **Policy Enforcement:** ASes can manipulate the AS_PATH (e.g., by prepending their AS number) to influence how other ASes route traffic towards them, making their paths appear longer and less desirable.
3.  **Path Selection:** When selecting the best path, BGP typically prefers paths with shorter AS_PATH lengths, assuming all other factors are equal.

**Q3. Differentiate between iBGP and eBGP.**

**Answer:**
*   **eBGP (External BGP):** Used for peering between BGP routers in *different* Autonomous Systems. Its main function is to exchange reachability information between ASes and to enforce inter-AS policies. When an eBGP route is advertised, the AS_PATH attribute has the originating AS number prepended.
*   **iBGP (Internal BGP):** Used for peering between BGP routers within the *same* Autonomous System. Its purpose is to distribute external routes learned via eBGP to all routers within the AS. iBGP does not prepend the AS number to the AS_PATH. A key challenge with iBGP is the need for a full mesh or the use of route reflectors/confederations to ensure all routers learn the necessary routes without creating internal loops. When an iBGP router advertises a route learned from an eBGP peer to another iBGP peer, it typically does not change the NEXT_HOP attribute, relying on the IGP to provide reachability to that NEXT_HOP.

**Q4. Which BGP path attribute is primarily used to influence inbound traffic into an AS, and which is used to influence outbound traffic from an AS?**

**Answer:**
*   **Inbound Traffic:** The **MED (Multi-Exit Discriminator)** attribute is used to influence how other ASes route traffic *into* your AS. A lower MED is generally preferred by the receiving AS. While not a strong policy tool, it can be used as a hint. Policy is often enforced more strongly via advertised prefixes and AS path manipulation.
*   **Outbound Traffic:** **LOCAL_PREF** is the primary attribute used to influence outbound traffic from an AS. A higher LOCAL_PREF value is preferred by routers within the AS, allowing administrators to select preferred upstream providers or paths for traffic leaving their network.

**Q5. What is the fundamental problem that iBGP's split-horizon rule tries to solve, and what are the common solutions?**

**Answer:**
The iBGP split-horizon rule states that an iBGP speaker will not advertise a route learned from an iBGP peer to another iBGP peer. This prevents routing loops within the AS.
The problem this creates is that for all routers in an AS to learn all external routes, each iBGP speaker must establish a BGP peering session with *every other* iBGP speaker in the same AS, forming a "full mesh." This becomes unmanageable in large ASes.
Common solutions include:
1.  **Route Reflection:** A designated router (route reflector) reflects routes learned from its clients to other clients, reducing the need for a full mesh.
2.  **BGP Confederations:** The AS is partitioned into smaller sub-ASes. iBGP peerings are then established only between routers within the same sub-AS, and confederation-specific mechanisms handle inter-sub-AS routing.

---
