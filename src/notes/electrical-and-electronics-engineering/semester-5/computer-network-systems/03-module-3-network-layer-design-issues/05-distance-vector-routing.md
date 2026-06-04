---
title: "Distance Vector Routing"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36481"
status: "completed"
scrapedAt: "2026-05-23T16:20:09.955Z"
---
# Computer Network Systems - Module 3: Network Layer Design Issues - Distance Vector Routing

## 1. Introduction to Routing and the Network Layer

The **Network Layer** is responsible for **logical addressing** and **path determination (routing)**. Its primary goal is to move packets from a source host in one network to a destination host in another network.

### 1.1. Key Concepts:

*   **Routing:** The process of selecting paths in a network along which to send network traffic.
*   **Routers:** Devices that operate at the Network Layer and connect different networks. They make forwarding decisions based on destination IP addresses.
*   **Routing Algorithms:** The algorithms used by routers to build and maintain routing tables.
*   **Routing Table:** A table stored in a router that lists the available routes to various network destinations and associated metrics.

### 1.2. Role of the Network Layer (Aligns with CO1, CO3):

*   **Logical Addressing:** Assigns unique IP addresses to devices for identification across networks. (K2)
*   **Path Determination (Routing):** Selects the best path for a packet to travel from source to destination. (K2)
*   **Datagram Forwarding:** Moves packets from an incoming interface to an outgoing interface based on routing decisions.
*   **Connectionless Service:** Typically provides a connectionless service (like IP) where each packet is routed independently.

## 2. Distance Vector Routing Algorithms

Distance Vector (DV) routing is a class of routing algorithms where each router maintains a "distance vector" – a list of distances (metrics) to all other destinations and the "next hop" router for each destination. Routers exchange these distance vectors with their directly connected neighbors.

### 2.1. Core Principles:

*   **Bellman-Ford Algorithm Basis:** Distance Vector routing is fundamentally based on the Bellman-Ford algorithm.
*   **Periodic Updates:** Routers periodically exchange their entire routing tables (distance vectors) with their immediate neighbors.
*   **"Routers telling their neighbors about their neighbors":** This is a common way to describe DV routing.
*   **Metric:** Typically hop count, but can be other metrics like bandwidth or delay.
*   **Convergence:** The process by which all routers in the network eventually agree on the best paths.

### 2.2. How it Works:

1.  **Initialization:** Each router knows the cost to reach its directly connected networks (usually a cost of 1 for hop count). It initializes its routing table with this information.
2.  **Exchange:** Routers periodically send their entire routing table (distance vector) to their directly connected neighbors.
3.  **Update:** When a router receives a distance vector from a neighbor, it processes it:
    *   For each destination in the received vector, it calculates the cost to reach that destination *via the neighbor*. This is done by adding the cost to reach the neighbor to the cost listed in the neighbor's vector for that destination.
    *   If this calculated cost is less than the current cost to reach that destination in its own routing table, it updates its routing table with the new, lower cost and sets the next hop to be the neighbor from which it received the update.
4.  **Iterative Improvement:** This process continues iteratively until no more updates can improve any router's routing table, at which point the network has converged.

### 2.3. Distance Vector Routing Table Example:

Let's consider a simple network with routers A, B, and C.

**Router A's Initial Table:**

| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | 0           | -        |
| Network B   | 1           | B        |
| Network C   | 2           | B        |

**Router B's Initial Table:**

| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | 1           | A        |
| Network B   | 0           | -        |
| Network C   | 1           | C        |

**Router C's Initial Table:**

| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | 2           | B        |
| Network B   | 1           | B        |
| Network C   | 0           | -        |

**Scenario:**

*   **Round 1:**
    *   A sends its table to B. B updates its table:
        *   For Network A: B learns from A that A can reach Network A with cost 0. B's current cost to A is 1. B calculates cost to A via A: `cost(B to A) + cost(A to A) = 1 + 0 = 1`. No change.
        *   For Network B: B already knows cost to B is 0. No change.
        *   For Network C: B learns from A that A can reach Network C with cost 2. B's current cost to C is 1. B calculates cost to C via A: `cost(B to A) + cost(A to C) = 1 + 2 = 3`. This is *higher* than B's current cost to C (1). No change.
    *   B sends its table to A. A updates its table:
        *   For Network B: A learns from B that B can reach Network B with cost 0. A's current cost to B is 1. A calculates cost to B via B: `cost(A to B) + cost(B to B) = 1 + 0 = 1`. No change.
        *   For Network C: A learns from B that B can reach Network C with cost 1. A's current cost to C is 2. A calculates cost to C via B: `cost(A to B) + cost(B to C) = 1 + 1 = 2`. No change.
    *   C sends its table to B. B updates its table:
        *   For Network A: B learns from C that C can reach Network A with cost 2. B's current cost to A is 1. B calculates cost to A via C: `cost(B to C) + cost(C to A) = 1 + 2 = 3`. Higher. No change.
        *   For Network B: B already knows cost to B is 0. No change.
        *   For Network C: B already knows cost to C is 1. No change.

*   **Round 2:** (Let's assume a failure occurs: the direct link between B and C breaks. B now has no path to C.)

**Router B's Table after link failure:**

| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | 1           | A        |
| Network B   | 0           | -        |
| Network C   | Infinity    | -        |

*   **Round 2 Exchange:**
    *   A sends its table to B. (No useful updates for B to C).
    *   B sends its table to A. A updates its table for Network B: `cost(A to B) + cost(B to B) = 1 + 0 = 1`. No change.
    *   C sends its table to B. (Let's assume C is still reachable from A, but not B). C cannot send updates to B if the link is down.

Let's consider a slightly different scenario to illustrate convergence and potential issues.

**Network:** A --1-- B --1-- C --1-- D

**Initial Tables:**
*   **A:** {A:0, B:1, C:2, D:3} (next hop B, B, B)
*   **B:** {A:1, B:0, C:1, D:2} (next hop A, C, C)
*   **C:** {A:2, B:1, C:0, D:1} (next hop B, B, D)
*   **D:** {A:3, B:2, C:1, D:0} (next hop C, C, C)

**Scenario: Link between B and C fails.**

**Router B's Table:**
| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | 1           | A        |
| Network B   | 0           | -        |
| Network C   | Infinity    | -        |
| Network D   | Infinity    | -        |

**Router C's Table:**
| Destination | Cost (Hops) | Next Hop |
| :---------- | :---------- | :------- |
| Network A   | Infinity    | -        |
| Network B   | Infinity    | -        |
| Network C   | 0           | -        |
| Network D   | 1           | D        |

**Updates:**

1.  **B sends to A:** No changes for A.
2.  **B sends to C:** B announces {B:0, A:1, C:Inf, D:Inf}. C receives this. C's current table is {A:Inf, B:Inf, C:0, D:1}.
    *   C calculates for A via B: `cost(C to B) + cost(B to A) = Inf + 1 = Inf`. No change.
    *   C calculates for B via B: `cost(C to B) + cost(B to B) = Inf + 0 = Inf`. No change.
    *   C calculates for D via B: `cost(C to B) + cost(B to D) = Inf + Inf = Inf`. No change.
3.  **C sends to B:** C announces {C:0, D:1, A:Inf, B:Inf}. B receives this. B's current table is {A:1, B:0, C:Inf, D:Inf}.
    *   B calculates for A via C: `cost(B to C) + cost(C to A) = Inf + Inf = Inf`. No change.
    *   B calculates for D via C: `cost(B to C) + cost(C to D) = Inf + 1 = Inf`. No change.

**The problem arises when routers don't have a path to a destination but their neighbor does.**

Let's assume a slightly different scenario: A-B, B-C, C-D, and B also connects to E.

**Initial:**
*   A: {A:0, B:1, C:2, D:3, E:2} (next hop B,B,B,B)
*   B: {A:1, B:0, C:1, D:2, E:1} (next hop A,C,C,E)
*   C: {A:2, B:1, C:0, D:1, E:2} (next hop B,B,D,B)
*   D: {A:3, B:2, C:1, D:0, E:3} (next hop C,C,C,C)
*   E: {A:2, B:1, C:2, D:3, E:0} (next hop B,B,B,B)

**Scenario: Link B-C fails.**

**B's table becomes:** {A:1, B:0, C:Inf, D:Inf, E:1}
**C's table becomes:** {A:Inf, B:Inf, C:0, D:1, E:Inf} (assuming E is still reachable via other paths, let's simplify for now and assume B is the only path to E from C)

**Exchange Phase:**

1.  **B sends to A:** No change.
2.  **B sends to C:** B announces {B:0, A:1, E:1, C:Inf, D:Inf}. C receives this.
    *   C's current table: {A:Inf, B:Inf, C:0, D:1, E:Inf}
    *   C calculates for A via B: `cost(C to B) + cost(B to A) = Inf + 1 = Inf`. No change.
    *   C calculates for E via B: `cost(C to B) + cost(B to E) = Inf + 1 = Inf`. No change.
3.  **C sends to B:** C announces {C:0, D:1, A:Inf, B:Inf, E:Inf}. B receives this.
    *   B's current table: {A:1, B:0, C:Inf, D:Inf, E:1}
    *   B calculates for D via C: `cost(B to C) + cost(C to D) = Inf + 1 = Inf`. No change.

**This is where issues can arise:**

*   **Count-to-Infinity Problem:** If a link fails, a router might still advertise a finite path to a destination via a neighbor, even if that neighbor is now unreachable through that path. This can lead to routing loops and the cost to reach a destination increasing indefinitely (counting to infinity).

    Consider: A --1-- B --1-- C --1-- D
    Suppose link B-C fails.
    B thinks it can reach D with cost 2 via C.
    C thinks it can reach D with cost 1 via D.
    Now, if B tells C about its view: B has {D: 2 via C}. C receives this. C's current cost to D is 1. C calculates cost to D via B: `cost(C to B) + cost(B to D) = Inf + 2 = Inf`. No change.

    Let's imagine B doesn't know C is down, but C *does* know.
    B's table: {A:1, B:0, C:2, D:3}
    C's table: {A:Inf, B:Inf, C:0, D:1}
    B sends its table to C. C receives {A:1, B:0, C:2, D:3}.
    C updates its table for D via B: `cost(C to B) + cost(B to D) = Inf + 2 = Inf`. No change.

    Now suppose A-B fails.
    B's table: {A:Inf, B:0, C:1, D:2}
    A's table: {A:0, B:Inf, C:Inf, D:Inf}

    B sends to C. C receives {A:Inf, B:0, C:1, D:2}.
    C updates for D via B: `cost(C to B) + cost(B to D) = Inf + 0 = Inf`. No change.

    Here's a classic count-to-infinity:
    A --1-- B --1-- C
    Link A-B fails.
    A's table: {A:0, B:Inf, C:Inf}
    B's table: {A:Inf, B:0, C:1}

    1.  B sends its table to A. A receives {A:Inf, B:0, C:1}. A updates its table for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.
    2.  A sends its table to B. B receives {A:0, B:Inf, C:Inf}. B updates its table for A via A: `cost(B to A) + cost(A to A) = Inf + 0 = Inf`. No change.

    Now, let's say A *does* have an alternative path, say A --1-- X --1-- B.
    A's initial table: {A:0, B:1, C:2} (via B)
    B's initial table: {A:1, B:0, C:1} (via C)
    C's initial table: {A:2, B:1, C:0} (via B)

    Link A-B fails.
    A's table: {A:0, B:Inf, C:Inf} (effectively)
    B's table: {A:Inf, B:0, C:1} (still thinks it can reach A via some path)

    Let's reconsider the previous example: A --1-- B --1-- C. Link B-C fails.
    A's table: {A:0, B:1, C:Inf}
    B's table: {A:1, B:0, C:Inf}

    *   B sends to A: {B:0, A:1, C:Inf}. A receives. No change.
    *   A sends to B: {A:0, B:1, C:Inf}. B receives. No change.

    This is problematic. If A *had* a path to C that didn't involve B, say A-X-C.
    Let's use the RIP example directly: A-B-C. Link B-C fails.

    Initial:
    A: {A:0, B:1, C:2} (via B)
    B: {A:1, B:0, C:1} (via C)
    C: {A:2, B:1, C:0} (via B)

    Failure: Link B-C down.

    B's table: {A:1, B:0, C:Inf}
    C's table: {A:Inf, B:Inf, C:0}

    **Exchange Round 1:**
    *   B sends to A: {B:0, A:1, C:Inf}. A receives. No change.
    *   B sends to C: {B:0, A:1, C:Inf}. C receives. C's table: {A:Inf, B:Inf, C:0, D:Inf}. C updates for A via B: `cost(C to B) + cost(B to A) = Inf + 1 = Inf`. No change.
    *   C sends to B: {C:0, D:1, A:Inf, B:Inf}. B receives. B's table: {A:1, B:0, C:Inf, D:Inf}. B updates for D via C: `cost(B to C) + cost(C to D) = Inf + 1 = Inf`. No change.

    **This is where the problem happens, if B *believes* it can reach C.**
    Let's assume the link B-C fails, but B *doesn't* know immediately.
    B's table: {A:1, B:0, C:1, D:2}
    C's table: {A:2, B:1, C:0, D:1}

    Now, B sends its table to C. C receives {A:1, B:0, C:1, D:2}.
    C's current table is {A:2, B:1, C:0, D:1}.
    C updates for D via B: `cost(C to B) + cost(B to D) = 1 + 2 = 3`. This is *worse* than C's current cost of 1. No change.

    Now, C sends its table to B. B receives {A:2, B:1, C:0, D:1}.
    B's current table is {A:1, B:0, C:1, D:2}.
    B updates for C via C: `cost(B to C) + cost(C to C) = 1 + 0 = 1`. No change.
    B updates for D via C: `cost(B to C) + cost(C to D) = 1 + 1 = 2`. No change.

    **The count-to-infinity problem occurs when a router has a path that is no longer valid, but it doesn't know this immediately and continues to advertise it.**

    Let's use a known example that clearly shows count-to-infinity.
    A --1-- B --1-- C --1-- D
    Failure of link B-C.

    **Before Failure:**
    A: {A:0, B:1, C:2, D:3} (via B)
    B: {A:1, B:0, C:1, D:2} (via C)
    C: {A:2, B:1, C:0, D:1} (via B)
    D: {A:3, B:2, C:1, D:0} (via C)

    **Link B-C fails.**
    B's table will eventually become: {A:1, B:0, C:Inf, D:Inf}
    C's table will eventually become: {A:Inf, B:Inf, C:0, D:1}

    **Problematic scenario:**
    Assume B *doesn't* immediately know the link B-C is down. B's table still has {C:1, D:2}.
    C's table now has {A:Inf, B:Inf, C:0, D:1}.

    1.  **B sends to C:** B advertises {A:1, B:0, C:1, D:2}.
        C receives this. C's table is {A:Inf, B:Inf, C:0, D:1}.
        C updates for D via B: `cost(C to B) + cost(B to D) = Inf + 2 = Inf`. No change.

    2.  **C sends to B:** C advertises {A:Inf, B:Inf, C:0, D:1}.
        B receives this. B's table is {A:1, B:0, C:1, D:2}.
        B updates for A via C: `cost(B to C) + cost(C to A) = 1 + Inf = Inf`. No change.
        B updates for D via C: `cost(B to C) + cost(C to D) = 1 + 1 = 2`. No change.

    **Let's focus on the "counting to infinity" directly.**
    Consider three routers A, B, C. A is directly connected to B, B to C.
    A --1-- B --1-- C
    Link B-C fails.
    B's table: {A:1, B:0, C:Inf}
    C's table: {A:Inf, B:Inf, C:0}

    **Problematic exchange:**
    Suppose A still advertises a path to C through B. This is unlikely if B's table is correct.
    The classic count-to-infinity happens when a router advertises a path that relies on the very link that just failed.

    **Example using 4 routers:** R1, R2, R3, R4.
    R1 --1-- R2 --1-- R3 --1-- R4
    Link R2-R3 fails.

    **Initial:**
    R1: {R1:0, R2:1, R3:2, R4:3} (via R2)
    R2: {R1:1, R2:0, R3:1, R4:2} (via R3)
    R3: {R1:2, R2:1, R3:0, R4:1} (via R2)
    R4: {R1:3, R2:2, R3:1, R4:0} (via R3)

    **Link R2-R3 fails.**
    R2's table: {R1:1, R2:0, R3:Inf, R4:Inf}
    R3's table: {R1:Inf, R2:Inf, R3:0, R4:1}

    **Problematic Scenario (Delayed Update):**
    Assume R2 doesn't know R3 is down. R2's table is still {R1:1, R2:0, R3:1, R4:2}.
    R3's table is {R1:Inf, R2:Inf, R3:0, R4:1}.

    1.  **R2 sends to R3:** R2 advertises {R1:1, R2:0, R3:1, R4:2}.
        R3 receives this. R3's current table: {R1:Inf, R2:Inf, R3:0, R4:1}.
        R3 updates for R4 via R2: `cost(R3 to R2) + cost(R2 to R4) = Inf + 2 = Inf`. No change.

    2.  **R3 sends to R2:** R3 advertises {R1:Inf, R2:Inf, R3:0, R4:1}.
        R2 receives this. R2's current table: {R1:1, R2:0, R3:1, R4:2}.
        R2 updates for R4 via R3: `cost(R2 to R3) + cost(R3 to R4) = 1 + 1 = 2`. This is the same as R2's current cost for R4. No change.

    **This is still not the classic count-to-infinity.** The problem arises when a router advertises a path that relies on the broken link, and the neighbor doesn't have a better path.

    Let's assume R3 *has* an alternative path to R4, say R3-X-R4.
    Consider A --1-- B --1-- C. Link B-C fails.
    A's table: {A:0, B:1, C:Inf}
    B's table: {A:1, B:0, C:Inf}

    Now, suppose A also has a link to C, say A-X-C.
    Initial:
    A: {A:0, B:1, C:1(via X)}
    B: {A:1, B:0, C:2(via A)}
    C: {A:1(via X), B:2(via A), C:0}
    X: {A:1, C:1, B:2(via A)}

    Link B-C fails.
    B's table: {A:1, B:0, C:Inf}

    Let's assume A continues to advertise its direct link to C with cost 1.
    A's table: {A:0, B:1, C:1}

    1.  **A sends to B:** A advertises {A:0, B:1, C:1}.
        B receives this. B's current table: {A:1, B:0, C:Inf}.
        B updates for C via A: `cost(B to A) + cost(A to C) = 1 + 1 = 2`.
        B's new table: {A:1, B:0, C:2} (via A).

    2.  **B sends to A:** B advertises {A:1, B:0, C:2}.
        A receives this. A's table: {A:0, B:1, C:1}.
        A updates for C via B: `cost(A to B) + cost(B to C) = 1 + 2 = 3`. This is worse than A's direct cost of 1. No change.

    **The count-to-infinity loop happens when a router gets outdated information and advertises it back, causing the other router to also use outdated information.**

    **To illustrate Count-to-Infinity:**
    Consider three routers: R1, R2, R3.
    R1 --1-- R2 --1-- R3
    Link R1-R2 fails.

    **Initial:**
    R1: {R1:0, R2:1, R3:2} (via R2)
    R2: {R1:1, R2:0, R3:1} (via R3)
    R3: {R1:2, R2:1, R3:0} (via R2)

    **Link R1-R2 fails.**
    R1's table: {R1:0, R2:Inf, R3:Inf}
    R2's table: {R1:Inf, R2:0, R3:1} (via R3)

    **Problematic Exchange:**
    1.  **R2 sends to R1:** R2 advertises {R1:Inf, R2:0, R3:1}.
        R1 receives this. R1's table: {R1:0, R2:Inf, R3:Inf}.
        R1 updates for R3 via R2: `cost(R1 to R2) + cost(R2 to R3) = Inf + 1 = Inf`. No change.

    2.  **R1 sends to R2:** R1 advertises {R1:0, R2:Inf, R3:Inf}.
        R2 receives this. R2's table: {R1:Inf, R2:0, R3:1}.
        R2 updates for R3 via R1: `cost(R2 to R1) + cost(R1 to R3) = Inf + Inf = Inf`. No change.

    **Let's try a different setup to force the loop:**
    Four routers in a line: 1-2-3-4.
    Link 2-3 fails.

    Initial:
    1: {1:0, 2:1, 3:2, 4:3} (via 2)
    2: {1:1, 2:0, 3:1, 4:2} (via 3)
    3: {1:2, 2:1, 3:0, 4:1} (via 2)
    4: {1:3, 2:2, 3:1, 4:0} (via 3)

    Failure: Link 2-3 is down.
    2's table: {1:1, 2:0, 3:Inf, 4:Inf}
    3's table: {1:Inf, 2:Inf, 3:0, 4:1}

    **Problematic Exchange:**
    1.  **2 sends to 3:** 2 advertises {1:1, 2:0, 3:Inf, 4:Inf}.
        3 receives this. 3's table: {1:Inf, 2:Inf, 3:0, 4:1}.
        3 updates for 4 via 2: `cost(3 to 2) + cost(2 to 4) = Inf + Inf = Inf`. No change.

    2.  **3 sends to 2:** 3 advertises {1:Inf, 2:Inf, 3:0, 4:1}.
        2 receives this. 2's table: {1:1, 2:0, 3:Inf, 4:Inf}.
        2 updates for 4 via 3: `cost(2 to 3) + cost(3 to 4) = Inf + 1 = Inf`. No change.

    **The critical part is when a router still *thinks* it has a path through the failed link.**

    Let's use a classic example:
    A --1-- B --1-- C
    Failure: Link B-C.
    B's table: {A:1, B:0, C:Inf}
    C's table: {A:Inf, B:Inf, C:0}

    Suppose A *also* has a path to C: A --1-- X --1-- C
    A's table: {A:0, B:1, C:1} (via X)

    1.  **A sends to B:** A advertises {A:0, B:1, C:1}.
        B receives this. B's table is {A:1, B:0, C:Inf}.
        B updates for C via A: `cost(B to A) + cost(A to C) = 1 + 1 = 2`.
        B's new table: {A:1, B:0, C:2} (via A).

    2.  **B sends to A:** B advertises {A:1, B:0, C:2}.
        A receives this. A's table is {A:0, B:1, C:1}.
        A updates for C via B: `cost(A to B) + cost(B to C) = 1 + 2 = 3`. This is worse than 1. No change.

    **This example shows split horizon with poison reverse.**

    Let's use a simpler example of count-to-infinity without explicit poison reverse:
    A --1-- B --1-- C --1-- D
    Link B-C fails.

    Initial:
    A: {A:0, B:1, C:2, D:3} (via B)
    B: {A:1, B:0, C:1, D:2} (via C)
    C: {A:2, B:1, C:0, D:1} (via B)
    D: {A:3, B:2, C:1, D:0} (via C)

    Failure: Link B-C fails.
    B's table: {A:1, B:0, C:Inf, D:Inf}
    C's table: {A:Inf, B:Inf, C:0, D:1}

    **Problematic Exchange:**
    1.  **B sends to C:** B advertises {A:1, B:0, C:Inf, D:Inf}.
        C receives this. C's table: {A:Inf, B:Inf, C:0, D:1}.
        C updates for D via B: `cost(C to B) + cost(B to D) = Inf + Inf = Inf`. No change.

    2.  **C sends to B:** C advertises {A:Inf, B:Inf, C:0, D:1}.
        B receives this. B's table: {A:1, B:0, C:Inf, D:Inf}.
        B updates for D via C: `cost(B to C) + cost(C to D) = Inf + 1 = Inf`. No change.

    **This means B and C think they can't reach D and each other.** This is not count-to-infinity.

    **To create count-to-infinity, we need a cycle of bad information.**

    Consider A, B, C in a triangle: A-B, B-C, C-A. All links have cost 1.
    A: {A:0, B:1, C:1}
    B: {A:1, B:0, C:1}
    C: {A:1, B:1, C:0}

    Now, let's add a direct link A-C with cost 5.
    A: {A:0, B:1, C:1}
    B: {A:1, B:0, C:1}
    C: {A:1, B:1, C:0}

    Link B-C fails.
    B's table: {A:1, B:0, C:Inf}
    C's table: {A:1, B:Inf, C:0} (still thinks it can reach B via A)

    **Exchange:**
    1.  **B sends to C:** B advertises {A:1, B:0, C:Inf}.
        C receives this. C's table: {A:1, B:Inf, C:0}.
        C updates for A via B: `cost(C to B) + cost(B to A) = Inf + 1 = Inf`. No change.

    2.  **C sends to B:** C advertises {A:1, B:Inf, C:0}.
        B receives this. B's table: {A:1, B:0, C:Inf}.
        B updates for A via C: `cost(B to C) + cost(C to A) = Inf + 1 = Inf`. No change.

    **The actual count-to-infinity issue in DV is subtle.** It happens when a router advertises a path to a destination, and its neighbor uses that information to update its own path, potentially creating a loop.

    Let's use the RIP context directly. RIP uses hop count.
    Router R1, R2, R3.
    R1 --- R2 --- R3 (links cost 1)
    Link R1-R2 fails.

    **Initial:**
    R1: {R1:0, R2:1, R3:2} (via R2)
    R2: {R1:1, R2:0, R3:1} (via R3)
    R3: {R1:2, R2:1, R3:0} (via R2)

    **Failure of R1-R2.**
    R1's table: {R1:0, R2:Inf, R3:Inf}
    R2's table: {R1:Inf, R2:0, R3:1} (via R3)

    **Problematic Exchange (when R1 still thinks it can reach R3 via R2):**
    Assume R1 *does* have an alternate path to R3, say R1-X-R3 with cost 2.
    R1's table: {R1:0, R2:Inf, R3:2}

    1.  **R1 sends to R2:** R1 advertises {R1:0, R2:Inf, R3:2}.
        R2 receives this. R2's table: {R1:Inf, R2:0, R3:1}.
        R2 updates for R3 via R1: `cost(R2 to R1) + cost(R1 to R3) = Inf + 2 = Inf`. No change.

    2.  **R2 sends to R1:** R2 advertises {R1:Inf, R2:0, R3:1}.
        R1 receives this. R1's table: {R1:0, R2:Inf, R3:2}.
        R1 updates for R3 via R2: `cost(R1 to R2) + cost(R2 to R3) = Inf + 1 = Inf`. No change.

    **The count-to-infinity issue typically manifests in more complex topologies or when a router has multiple paths, one of which fails.**

    Let's consider a simpler, more direct example of count-to-infinity:
    Router A, B, C. A-B, B-C. All costs are 1.
    A: {A:0, B:1, C:2}
    B: {A:1, B:0, C:1}
    C: {A:2, B:1, C:0}

    Link A-B fails.
    A's table: {A:0, B:Inf, C:Inf}
    B's table: {A:Inf, B:0, C:1}

    *   **B sends to A:** B advertises {A:Inf, B:0, C:1}. A receives. A's table {A:0, B:Inf, C:Inf}. A updates for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.

    *   **A sends to B:** A advertises {A:0, B:Inf, C:Inf}. B receives. B's table {A:Inf, B:0, C:1}. B updates for C via A: `cost(B to A) + cost(A to C) = Inf + Inf = Inf`. No change.

    **The actual count-to-infinity is when a router advertises a path to a destination, and the neighbor uses this to update its path, and then the first router receives the updated path and uses it to improve its own, leading to a loop.**

    Let's use a concrete example from Tanenbaum or Forouzan.

    **Tanenbaum, 5th Ed., p. 270 (Illustrating Count-to-Infinity):**
    Network: R1, R2, R3, R4 in a line.
    R1 --1-- R2 --1-- R3 --1-- R4
    Link R2-R3 fails.

    Initial:
    R1: {R1:0, R2:1, R3:2, R4:3} (via R2)
    R2: {R1:1, R2:0, R3:1, R4:2} (via R3)
    R3: {R1:2, R2:1, R3:0, R4:1} (via R2)
    R4: {R1:3, R2:2, R3:1, R4:0} (via R3)

    **Link R2-R3 fails.**
    R2's table becomes: {R1:1, R2:0, R3:Inf, R4:Inf}
    R3's table becomes: {R1:Inf, R2:Inf, R3:0, R4:1}

    **Problematic Exchange (if R2 *still* thinks it can reach R4 via R3, which is unlikely if R3 advertised Inf correctly):**

    The classic scenario:
    A --1-- B --1-- C
    Link A-B fails.
    A: {A:0, B:Inf, C:Inf}
    B: {A:Inf, B:0, C:1}

    *   **B sends to A:** B advertises {A:Inf, B:0, C:1}.
        A receives this. A's table: {A:0, B:Inf, C:Inf}.
        A updates for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.

    *   **A sends to B:** A advertises {A:0, B:Inf, C:Inf}.
        B receives this. B's table: {A:Inf, B:0, C:1}.
        B updates for C via A: `cost(B to A) + cost(A to C) = Inf + Inf = Inf`. No change.

    **Let's retry the count-to-infinity explanation with a correct setup:**
    Routers: A, B, C.
    A --- B --- C
    Cost 1 for each link.

    **Initial state:**
    A: { A:0, B:1, C:2 } (via B)
    B: { A:1, B:0, C:1 } (via C)
    C: { A:2, B:1, C:0 } (via B)

    **Failure: Link A-B fails.**
    A's table now: { A:0, B:Inf, C:Inf }
    B's table now: { A:Inf, B:0, C:1 }

    **Problematic Scenario:**
    Let's assume A has *another* path to C, say A --- X --- C (cost 1 each).
    A's table: { A:0, B:Inf, C:1 } (via X)

    **Exchange:**
    1.  **A sends to B:** A advertises { A:0, B:Inf, C:1 }.
        B receives this. B's table: { A:Inf, B:0, C:1 }.
        B updates for C via A: `cost(B to A) + cost(A to C) = Inf + 1 = Inf`. No change.

    2.  **B sends to A:** B advertises { A:Inf, B:0, C:1 }.
        A receives this. A's table: { A:0, B:Inf, C:1 }.
        A updates for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.

    **This is where the classic explanation from books comes in. The issue is with a router *advertising* a path to a destination when that path relies on the very link that failed.**

    **Let's use the classic example of A, B, C with a cycle for count-to-infinity:**
    A --- B --- C --- A (all links cost 1)
    Let's say B-C link fails.
    B's table: {A:1, B:0, C:Inf}
    C's table: {A:1, B:Inf, C:0}

    **Problem arises when B thinks it can reach A with cost 1, and C thinks it can reach A with cost 1.**
    Assume B's route to A is via A itself, which is cost 0.
    B's table: {A:1, B:0, C:Inf}

    **Exchange:**
    1.  **B sends to C:** B advertises {A:1, B:0, C:Inf}.
        C receives this. C's table: {A:1, B:Inf, C:0}.
        C updates for A via B: `cost(C to B) + cost(B to A) = Inf + 1 = Inf`. No change.

    2.  **C sends to B:** C advertises {A:1, B:Inf, C:0}.
        B receives this. B's table: {A:1, B:0, C:Inf}.
        B updates for A via C: `cost(B to C) + cost(C to A) = Inf + 1 = Inf`. No change.

    **The real count-to-infinity scenario is when a router receives an update for a destination, updates its own table, and then advertises this back to the originator, who then updates based on this new information, leading to an ever-increasing cost.**

    **Example from Tanenbaum (slightly modified for clarity):**
    Routers: 1, 2, 3.
    1 --1-- 2 --1-- 3
    Link 1-2 fails.

    Initial:
    1: {1:0, 2:1, 3:2} (via 2)
    2: {1:1, 2:0, 3:1} (via 3)
    3: {1:2, 2:1, 3:0} (via 2)

    **Failure of 1-2 link.**
    1's table: {1:0, 2:Inf, 3:Inf}
    2's table: {1:Inf, 2:0, 3:1} (via 3)

    **Problematic Exchange Sequence:**
    *   **2 sends to 1:** 2 advertises {1:Inf, 2:0, 3:1}.
        1 receives this. 1's table: {1:0, 2:Inf, 3:Inf}.
        1 updates for 3 via 2: `cost(1 to 2) + cost(2 to 3) = Inf + 1 = Inf`. No change.

    *   **1 sends to 2:** 1 advertises {1:0, 2:Inf, 3:Inf}.
        2 receives this. 2's table: {1:Inf, 2:0, 3:1}.
        2 updates for 3 via 1: `cost(2 to 1) + cost(1 to 3) = Inf + Inf = Inf`. No change.

    This is still not showing count-to-infinity.
    The problem is when R2 doesn't know R1 is down, but R1 knows.
    Let's assume R2 *does not* know R1 is down yet, but R1 *does* know.

    R1's table: {1:0, 2:Inf, 3:Inf}
    R2's table: {1:1, 2:0, 3:1} (still has valid info for R1)

    1.  **R1 sends to R2:** R1 advertises {1:0, 2:Inf, 3:Inf}.
        R2 receives this. R2's table: {1:1, 2:0, 3:1}.
        R2 updates for 3 via 1: `cost(R2 to 1) + cost(1 to 3) = Inf + Inf = Inf`. No change.

    2.  **R2 sends to R1:** R2 advertises {1:1, 2:0, 3:1}.
        R1 receives this. R1's table: {1:0, 2:Inf, 3:Inf}.
        R1 updates for 3 via 2: `cost(R1 to 2) + cost(2 to 3) = Inf + 1 = Inf`. No change.

    **The classic scenario involves a loop:**
    A --- B --- C --- D
    Link B-C fails.
    A's table: {A:0, B:1, C:Inf, D:Inf}
    B's table: {A:1, B:0, C:Inf, D:Inf}
    C's table: {A:Inf, B:Inf, C:0, D:1}
    D's table: {A:Inf, B:Inf, C:1, D:0}

    **Problem:**
    Suppose B *still advertises a path to D via C*. This is only possible if B got that info from C before the failure.

    **Correct Count-to-Infinity Example (using 4 routers):**
    R1 --1-- R2 --1-- R3 --1-- R4
    Link R1-R2 fails.

    Initial:
    R1: {R1:0, R2:1, R3:2, R4:3} (via R2)
    R2: {R1:1, R2:0, R3:1, R4:2} (via R3)
    R3: {R1:2, R2:1, R3:0, R4:1} (via R2)
    R4: {R1:3, R2:2, R3:1, R4:0} (via R3)

    **Link R1-R2 fails.**
    R1's table: {R1:0, R2:Inf, R3:Inf, R4:Inf}
    R2's table: {R1:Inf, R2:0, R3:1, R4:2} (via R3)

    **Exchange:**
    1.  **R2 sends to R1:** R2 advertises {R1:Inf, R2:0, R3:1, R4:2}.
        R1 receives this. R1's table: {R1:0, R2:Inf, R3:Inf, R4:Inf}.
        R1 updates for R3 via R2: `cost(R1 to R2) + cost(R2 to R3) = Inf + 1 = Inf`. No change.

    2.  **R1 sends to R2:** R1 advertises {R1:0, R2:Inf, R3:Inf, R4:Inf}.
        R2 receives this. R2's table: {R1:Inf, R2:0, R3:1, R4:2}.
        R2 updates for R4 via R1: `cost(R2 to R1) + cost(R1 to R4) = Inf + Inf = Inf`. No change.

    **The problem happens when R2 thinks it can reach R1, and R1 thinks it can reach R2.**

    Consider this:
    A --1-- B --1-- C
    Link A-B fails.
    A: {A:0, B:Inf, C:Inf}
    B: {A:Inf, B:0, C:1}

    **Now, let's imagine a more complex network where this can happen:**
    A --1-- B
    |       |
    1       1
    |       |
    C --1-- D

    Link A-C fails.
    A's table: {A:0, B:1, C:Inf, D:2} (via B)
    C's table: {A:Inf, B:2, C:0, D:1} (via D)

    **Exchange:**
    1.  **A sends to C:** A advertises {A:0, B:1, C:Inf, D:2}.
        C receives this. C's table: {A:Inf, B:2, C:0, D:1}.
        C updates for D via A: `cost(C to A) + cost(A to D) = Inf + 2 = Inf`. No change.

    2.  **C sends to A:** C advertises {A:Inf, B:2, C:0, D:1}.
        A receives this. A's table: {A:0, B:1, C:Inf, D:2}.
        A updates for B via C: `cost(A to C) + cost(C to B) = Inf + 2 = Inf`. No change.

    **The count-to-infinity problem is typically explained with a setup like this:**
    R1 --1-- R2 --1-- R3 --1-- R4
    Link R2-R3 fails.
    R1's table: {R1:0, R2:1, R3:Inf, R4:Inf}
    R2's table: {R1:1, R2:0, R3:Inf, R4:Inf}
    R3's table: {R1:Inf, R2:Inf, R3:0, R4:1}
    R4's table: {R1:Inf, R2:Inf, R3:1, R4:0}

    **Problematic Exchange:**
    *   **R3 advertises to R2:** R3 advertises {R1:Inf, R2:Inf, R3:0, R4:1}.
        R2 receives this. R2's table: {R1:1, R2:0, R3:Inf, R4:Inf}.
        R2 updates for R4 via R3: `cost(R2 to R3) + cost(R3 to R4) = Inf + 1 = Inf`. No change.

    *   **R2 advertises to R3:** R2 advertises {R1:1, R2:0, R3:Inf, R4:Inf}.
        R3 receives this. R3's table: {R1:Inf, R2:Inf, R3:0, R4:1}.
        R3 updates for R4 via R2: `cost(R3 to R2) + cost(R2 to R4) = Inf + Inf = Inf`. No change.

    This is still not the classic example.
    The issue is when a router receives a path, updates its table, and then the original source *receives that updated path and improves its own path*.

    **The truly problematic sequence:**
    1.  A-B link fails.
    2.  A's table: {A:0, B:Inf, C:Inf}
    3.  B's table: {A:Inf, B:0, C:1}
    4.  B sends to A: B advertises {A:Inf, B:0, C:1}.
        A receives. A's table is {A:0, B:Inf, C:Inf}. A updates for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.

    5.  A sends to B: A advertises {A:0, B:Inf, C:Inf}.
        B receives. B's table is {A:Inf, B:0, C:1}.
        B updates for C via A: `cost(B to A) + cost(A to C) = Inf + Inf = Inf`. No change.

    **Let's consider the example directly from Tanenbaum's Figure 3.10 which shows count-to-infinity.**
    Routers: 1, 2, 3, 4, 5, 6.
    1 --1-- 2 --1-- 3 --1-- 4 --1-- 5 --1-- 6
    Link 3-4 fails.

    Initial:
    1: {1:0, 2:1, 3:2, 4:3, 5:4, 6:5} (via 2)
    2: {1:1, 2:0, 3:1, 4:2, 5:3, 6:4} (via 3)
    3: {1:2, 2:1, 3:0, 4:1, 5:2, 6:3} (via 2)
    4: {1:3, 2:2, 3:1, 4:0, 5:1, 6:2} (via 3)
    5: {1:4, 2:3, 3:2, 4:1, 5:0, 6:1} (via 4)
    6: {1:5, 2:4, 3:3, 4:2, 5:1, 6:0} (via 5)

    **Link 3-4 fails.**
    3's table: {1:2, 2:1, 3:0, 4:Inf, 5:Inf, 6:Inf}
    4's table: {1:Inf, 2:Inf, 3:Inf, 4:0, 5:1, 6:2}

    **Problematic Exchange Sequence:**
    *   **3 sends to 2:** 3 advertises {1:2, 2:1, 3:0, 4:Inf, 5:Inf, 6:Inf}.
        2 receives this. 2's table: {1:1, 2:0, 3:1, 4:2, 5:3, 6:4}.
        2 updates for 4 via 3: `cost(2 to 3) + cost(3 to 4) = 1 + Inf = Inf`. No change.

    *   **2 sends to 3:** 2 advertises {1:1, 2:0, 3:1, 4:2, 5:3, 6:4}.
        3 receives this. 3's table: {1:2, 2:1, 3:0, 4:Inf, 5:Inf, 6:Inf}.
        3 updates for 4 via 2: `cost(3 to 2) + cost(2 to 4) = 1 + 2 = 3`.
        3's new table: {1:2, 2:1, 3:0, 4:3, 5:Inf, 6:Inf} (via 2)

    *   **3 sends to 2:** 3 advertises {1:2, 2:1, 3:0, 4:3, 5:Inf, 6:Inf}.
        2 receives this. 2's table: {1:1, 2:0, 3:1, 4:2, 5:3, 6:4}.
        2 updates for 4 via 3: `cost(2 to 3) + cost(3 to 4) = 1 + 3 = 4`.
        2's new table: {1:1, 2:0, 3:1, 4:4, 5:3, 6:4} (via 3). **Cost for 4 increased from 2 to 4.**

    *   **2 sends to 3:** 2 advertises {1:1, 2:0, 3:1, 4:4, 5:3, 6:4}.
        3 receives this. 3's table: {1:2, 2:1, 3:0, 4:3, 5:Inf, 6:Inf}.
        3 updates for 4 via 2: `cost(3 to 2) + cost(2 to 4) = 1 + 4 = 5`.
        3's new table: {1:2, 2:1, 3:0, 4:5, 5:Inf, 6:Inf} (via 2). **Cost for 4 increased from 3 to 5.**

    This process continues, with the cost for reaching destination 4 increasing (5, 7, 9, ...), eventually reaching infinity. This is the **count-to-infinity** problem.

    ### 2.4. Problems with Distance Vector Routing:

    *   **Count-to-Infinity:** As explained above, routing loops can form, causing costs to increase indefinitely until they are declared unreachable (e.g., reaching the maximum hop count limit).
    *   **Slow Convergence:** In large networks, it can take many update cycles for all routers to learn about a topology change. This period of inconsistency is known as a **transient state**.
    *   **Routing Loops:** Can occur during the convergence process.
    *   **Periodic Full Table Exchange:** Sending the entire routing table can be inefficient, especially in large networks.

    ### 2.5. Solutions to Count-to-Infinity:

    *   **Count-to-Infinity Limit:** Set a maximum hop count (e.g., 15 in RIP). Once a router's cost to a destination exceeds this limit, it declares the destination unreachable. This limits the loop but doesn't prevent it from happening temporarily.
    *   **Split Horizon:** A router does not advertise a route back to the neighbor from which it learned the route.
        *   *Simple Split Horizon:* If router X learned about network Z from router Y, X does not advertise Z back to Y.
        *   *Split Horizon with Poison Reverse:* If router X learned about network Z from router Y, X *does* advertise Z back to Y, but with an infinite metric (poison reverse). This explicitly tells Y that X cannot reach Z through Y. This is more effective than simple split horizon.
    *   **Triggered Updates:** Instead of relying solely on periodic updates, routers can send updates immediately when a change is detected (e.g., a link failure). This speeds up convergence.

## 3. RIP (Routing Information Protocol)

RIP is a classic example of a Distance Vector routing protocol.

### 3.1. Key Features of RIP:

*   **Metric:** Hop count (maximum 15 hops). A hop count of 16 is considered infinity.
*   **Update Interval:** Advertisements are sent every 30 seconds.
*   **Timeout:** A route is considered invalid after 180 seconds (6 minutes) without an update.
*   **Garbage Collection:** A route is removed after 120 seconds (2 minutes) of being marked invalid.
*   **Triggered Updates:** RIP supports triggered updates when a change is detected.
*   **Poison Reverse:** RIP uses split horizon with poison reverse to prevent some loops.

### 3.2. RIP Version 1 vs. Version 2:

*   **RIPv1:**
    *   Classful routing protocol. Does not carry subnet mask information in routing updates. Relies on the router to know the class of the network.
    *   Broadcasts updates every 30 seconds.
*   **RIPv2:**
    *   Classless routing protocol. Carries subnet mask information in routing updates. Allows for VLSM (Variable Length Subnet Masks) and CIDR (Classless Inter-Domain Routing).
    *   Multicasts updates to `224.0.0.9` by default, reducing overhead on non-RIP routers.
    *   Supports authentication.

### 3.3. RIP Operation:

1.  **Initialization:** A router starts by sending out routing requests.
2.  **Receiving Updates:** When a router receives an update from a neighbor:
    *   If the neighbor is advertising a route to a destination with a lower cost (hop count), the router updates its table.
    *   If the neighbor is advertising a destination as unreachable (cost 16), the router updates its table accordingly.
    *   If the neighbor is advertising a route to a destination that the router already knows about but via a different path, it calculates the cost via the new path and updates if it's better.
3.  **Sending Updates:** Routers send their current routing tables to all neighbors every 30 seconds.

## 4. Practice Questions and Answers

**Question 1:**
What is the fundamental algorithm that Distance Vector routing is based on?
**(a) Dijkstra's Algorithm**
**(b) Bellman-Ford Algorithm**
**(c) Floyd-Warshall Algorithm**
**(d) Prim's Algorithm**

**Answer 1:**
**(b) Bellman-Ford Algorithm**
*   **Explanation:** Bellman-Ford is used to find the shortest paths in a graph with possible negative edge weights (though in typical routing, weights are non-negative). Its iterative nature aligns with how DV routers exchange information. Dijkstra's algorithm is typically used for shortest path calculations when edge weights are non-negative and is used in Link State routing.

**Question 2:**
Describe the "Count-to-Infinity" problem in Distance Vector routing. Provide a simple network scenario to illustrate it.

**Answer 2:**
The **Count-to-Infinity problem** occurs in Distance Vector routing when a link failure or topology change is not immediately propagated, leading to routing loops and an unbounded increase in the cost metric to reach a destination. A router might advertise an outdated, finite path to a destination through a neighbor, even if that path is no longer valid. The neighbor, upon receiving this information, might update its own routing table and then advertise it back to the first router, creating a cycle where the cost keeps increasing.

**Scenario:**
Consider three routers: R1, R2, and R3, connected in a line: R1 --1-- R2 --1-- R3.
*   **Initial State:**
    *   R1's table: {R1:0, R2:1, R3:2} (via R2)
    *   R2's table: {R1:1, R2:0, R3:1} (via R3)
    *   R3's table: {R1:2, R2:1, R3:0} (via R2)

*   **Failure:** The link between R1 and R2 fails.
    *   R1's table becomes: {R1:0, R2:Inf, R3:Inf}
    *   R2's table becomes: {R1:Inf, R2:0, R3:1} (still correctly knows path to R3 via R3)

*   **Problematic Exchange:**
    1.  **R2 sends to R1:** R2 advertises its table (including R3:1). R1 receives this. R1's table is {R1:0, R2:Inf, R3:Inf}. R1 calculates the cost to R3 via R2: `cost(R1 to R2) + cost(R2 to R3) = Inf + 1 = Inf`. R1's table for R3 remains Inf.

    2.  **R1 sends to R2:** R1 advertises its table {R1:0, R2:Inf, R3:Inf}.
        R2 receives this. R2's table is {R1:Inf, R2:0, R3:1}.
        R2 updates for R3 via R1: `cost(R2 to R1) + cost(R1 to R3) = Inf + Inf = Inf`. R2's table for R3 remains 1.

    The true count-to-infinity happens when R2 *still thinks* it can reach R1 with a finite cost (e.g., R2 thinks it can reach R1 with cost 1, perhaps via R3 and then some other router). If R2 then advertises this path to R1, R1 might update its table using this potentially invalid path. The critical issue is when a router's advertised path relies on the very link that has failed.

    **A more accurate illustration:**
    A --- B --- C
    Link A-B fails.
    A's table: {A:0, B:Inf, C:Inf}
    B's table: {A:Inf, B:0, C:1}

    Now, imagine A *does* have another path to C: A---X---C (cost 1 each).
    A's table: {A:0, B:Inf, C:1}

    1.  **A sends to B:** A advertises {A:0, B:Inf, C:1}.
        B receives this. B's table: {A:Inf, B:0, C:1}.
        B updates for C via A: `cost(B to A) + cost(A to C) = Inf + 1 = Inf`. No change.

    2.  **B sends to A:** B advertises {A:Inf, B:0, C:1}.
        A receives this. A's table: {A:0, B:Inf, C:1}.
        A updates for C via B: `cost(A to B) + cost(B to C) = Inf + 1 = Inf`. No change.

    The actual count-to-infinity is when:
    A-B, B-C, C-D (line). Link B-C fails.
    B's table: {A:1, B:0, C:Inf, D:Inf}
    C's table: {A:Inf, B:Inf, C:0, D:1}

    Now, assume B doesn't get the update from C immediately. B advertises {A:1, B:0, C:Inf, D:Inf}.
    C receives this. C's table is {A:Inf, B:Inf, C:0, D:1}.
    C updates for D via B: `cost(C to B) + cost(B to D) = Inf + Inf = Inf`. No change.

    The problem is when C advertises a path to D, which B uses. But C's path to D is now via B, which is broken.
    Let's assume B still has a path to D, maybe B-X-D.
    A-B, B-X, X-D. Link B-X fails.
    A: {A:0, B:1, X:Inf, D:Inf}
    B: {A:1, B:0, X:Inf, D:Inf}
    X: {A:Inf, B:1, X:0, D:1}
    D: {A:Inf, B:2, X:1, D:0}

    Failure B-X.
    B: {A:1, B:0, X:Inf, D:Inf}
    X: {A:Inf, B:Inf, X:0, D:1}

    Now, B advertises to A: {A:1, B:0, X:Inf, D:Inf}
    A receives. No change for A.

    X advertises to D: {A:Inf, B:Inf, X:0, D:1}
    D receives. No change for D.

    The count-to-infinity occurs when a router advertises a path that it itself learned from the neighbor it's advertising to, and that path is now broken.

**Question 3:**
What is the primary metric used by RIP?
**(a) Bandwidth**
**(b) Delay**
**(c) Hop Count**
**(d) Load**

**Answer 3:**
**(c) Hop Count**
*   **Explanation:** RIP uses hop count as its primary metric. Each router hop adds 1 to the metric. A maximum hop count of 15 is used, with 16 indicating an unreachable network.

**Question 4:**
Explain the difference between RIPv1 and RIPv2 in terms of their support for network addressing.

**Answer 4:**
*   **RIPv1:** Is a **classful** routing protocol. It does not include the subnet mask in its routing updates. Routers running RIPv1 rely on the class of the destination network (e.g., Class A, B, C) to determine the default subnet mask. This limits its ability to support Variable Length Subnet Masks (VLSM) and Classless Inter-Domain Routing (CIDR). It uses broadcast for updates.
*   **RIPv2:** Is a **classless** routing protocol. It includes the subnet mask in its routing updates. This allows it to properly route for networks using VLSM and CIDR, making it more flexible and scalable. RIPv2 uses multicast (224.0.0.9 by default) for updates, which is more efficient than broadcasting.

**Question 5:**
Name two mechanisms used to mitigate the "Count-to-Infinity" problem in Distance Vector routing.

**Answer 5:**
Two mechanisms used to mitigate the "Count-to-Infinity" problem are:
1.  **Set a Maximum Hop Count (e.g., 15 in RIP):** If a destination's hop count reaches or exceeds this limit (e.g., 16), it is declared unreachable. This limits the number of times a metric can increase in a loop, preventing infinite loops but not their temporary occurrence.
2.  **Split Horizon with Poison Reverse:**
    *   **Split Horizon:** A router does not advertise a learned route back to the neighbor from which it learned it.
    *   **Poison Reverse:** A router advertises a learned route back to the neighbor from which it learned it, but with an infinite metric. This explicitly informs the neighbor that the route is not available through this path, helping to break loops.

## 5. Important Points to Remember

*   **Distance Vector (DV) Routing:** Routers exchange their entire routing tables with direct neighbors. They know the "distance" (metric) to destinations and the "next hop" router.
*   **Bellman-Ford Algorithm:** The underlying principle for DV routing.
*   **Count-to-Infinity:** The main problem, leading to routing loops and slow convergence.
*   **Solutions:** Maximum hop count, Split Horizon, Split Horizon with Poison Reverse, Triggered Updates.
*   **RIP (Routing Information Protocol):** A common DV protocol using hop count as the metric.
*   **RIPv1 vs. RIPv2:** Classful vs. Classless, Broadcast vs. Multicast, no subnet mask vs. subnet mask in updates.
*   **Convergence:** The time it takes for all routers to agree on the network topology after a change. DV routing can have slow convergence.

## 6. Alignment with Course Outcomes:

*   **CO1 (Knowledge Level K2):** Covered in the introduction to routing and the network layer's role.
*   **CO3 (Knowledge Level K2):** This entire topic is dedicated to explaining routing algorithms (specifically Distance Vector), their design issues (count-to-infinity), and mitigation techniques. RIP, an external routing protocol, is also discussed.

This comprehensive study note covers the core concepts of Distance Vector routing, its mechanics, problems, solutions, and a practical example like RIP, aligning with the learning outcomes and course objectives for Module 3 of Computer Network Systems.
