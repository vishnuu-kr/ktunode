---
title: "Mesh networks"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c629"
status: "completed"
scrapedAt: "2026-05-20T17:07:11.755Z"
---
# High Performance Computing: Module 2 - Parallel Computers

## Topic: Mesh Networks

---

### 1. Introduction to Mesh Networks

Mesh networks are a fundamental interconnection topology used in parallel computers, especially in distributed memory systems. They offer a structured and regular way to connect processing elements (PEs) or nodes.

**Key Concepts:**

*   **Topology:** The arrangement of connections between nodes in a parallel computer.
*   **Processing Element (PE):** A fundamental unit of computation in a parallel system, often a CPU or a processor core.
*   **Node:** A processing element along with its associated memory and network interface.
*   **Interconnection Network:** The system that connects the nodes in a parallel computer, enabling communication between them.

**Definition:**

A **mesh network** is an interconnection topology where processing elements are arranged in a grid-like structure. Each PE is typically connected to its nearest neighbors (up, down, left, right).

---

### 2. Types of Mesh Networks

Mesh networks can be classified based on their dimensions and how the edges are handled.

#### 2.1. k-Dimensional Mesh (k-Mesh)

**Definition:**

A k-dimensional mesh is a generalization of a 2D mesh to k dimensions. A k-mesh with dimensions $n_1, n_2, \dots, n_k$ has $N = n_1 \times n_2 \times \dots \times n_k$ nodes. Each node can be uniquely identified by a k-tuple $(d_1, d_2, \dots, d_k)$, where $0 \le d_i < n_i$.

**Key Concepts:**

*   **Dimensions:** The number of axes along which the grid is extended.
*   **Degree of a Node:** The number of connections a node has. For an internal node in a k-mesh, the degree is $2k$. Boundary nodes have fewer connections.

**Examples:**

*   **1D Mesh (Linear Array):** A single row or column of nodes. Each node (except the ends) is connected to two neighbors.
    *   Example: Nodes arranged in a line: `0 - 1 - 2 - 3`
*   **2D Mesh (Grid):** The most common type. Nodes are arranged in rows and columns. Each internal node is connected to 4 neighbors.
    *   Example: A 3x3 mesh:
        ```
        (0,0) - (0,1) - (0,2)
          |       |       |
        (1,0) - (1,1) - (1,2)
          |       |       |
        (2,0) - (2,1) - (2,2)
        ```
*   **3D Mesh:** Nodes arranged in a cube-like structure. Each internal node is connected to 6 neighbors.
    *   Example: A 2x2x2 mesh (8 nodes)
        ```
        Layer 0:        Layer 1:
        (0,0,0) - (0,1,0)      (0,0,1) - (0,1,1)
          |       |              |       |
        (1,0,0) - (1,1,0)      (1,0,1) - (1,1,1)
        ```
        (Connections between layers are implied, e.g., (0,0,0) connects to (0,0,1))

#### 2.2. Torus Networks (m-ary n-cube)

**Definition:**

A torus network is a mesh network where the connections wrap around at the edges, forming a torus shape. This eliminates boundary nodes and gives all nodes the same degree.

**Key Concepts:**

*   **Wrapping Connections:** Edges of the mesh are connected to the opposite edges.
*   **Regularity:** All nodes have the same number of connections (degree).

**Examples:**

*   **1D Torus (Ring):** A linear array where the first and last nodes are connected.
    *   Example: `0 - 1 - 2 - 3 - 0`
*   **2D Torus:** A 2D mesh where rows wrap around and columns wrap around.
    *   Example: A 3x3 Torus:
        ```
        (0,0) - (0,1) - (0,2) --- (0,0)  (wrap around)
          |       |       |
        (1,0) - (1,1) - (1,2)
          |       |       |
        (2,0) - (2,1) - (2,2) --- (2,0)  (wrap around)
          |       |       |
        (0,0) --- (1,0) --- (2,0) --- (0,0) (wrap around columns)
        ```
        (The diagram above is a simplified representation. In a true 2D torus, both row and column wrap-arounds exist.)
*   **m-ary n-cube:** A more general term, often referring to a d-dimensional mesh where each dimension has 'm' nodes. A d-dimensional m-ary mesh is often called an m-ary d-cube. A torus extends this by adding wrap-around connections.

---

### 3. Properties of Mesh Networks

The performance of a parallel system is significantly influenced by its interconnection network. Mesh networks have several key properties:

#### 3.1. Degree of a Node

**Definition:**

The **degree** of a node is the number of communication links connected to it.

**Key Concepts:**

*   **Local vs. Global Communication:** Higher degree can facilitate faster communication with more nodes.
*   **Hardware Complexity:** Higher degree means more wires and ports per node, increasing cost and complexity.

**Examples:**

*   **2D Mesh:**
    *   Internal nodes: Degree 4
    *   Edge nodes (not corners): Degree 3
    *   Corner nodes: Degree 2
*   **2D Torus:**
    *   All nodes: Degree 4

#### 3.2. Diameter

**Definition:**

The **diameter** of a network is the maximum shortest path distance between any two nodes in the network. It represents the maximum number of hops a message might need to travel between any two nodes.

**Key Concepts:**

*   **Latency:** A smaller diameter generally leads to lower communication latency.
*   **Communication Overhead:** Longer paths can increase the time spent on message routing.

**Examples:**

*   **1D Mesh (N nodes):** Diameter is $N-1$.
*   **2D Mesh ($n \times m$ nodes):** Diameter is $(n-1) + (m-1)$. For an $n \times n$ mesh, it's $2(n-1)$.
*   **1D Torus (N nodes):** Diameter is $\lfloor N/2 \rfloor$.
*   **2D Torus ($n \times m$ nodes):** Diameter is $\lfloor n/2 \rfloor + \lfloor m/2 \rfloor$. For an $n \times n$ torus, it's $2 \lfloor n/2 \rfloor$.

#### 3.3. Bisection Width

**Definition:**

The **bisection width** of a network is the minimum number of links that must be removed to divide the network into two equal halves. It indicates the maximum bandwidth between the two halves.

**Key Concepts:**

*   **Scalability:** A higher bisection width generally implies better scalability, as communication bandwidth between larger partitions of the network is higher.
*   **Bottleneck:** A low bisection width can create a bottleneck for parallel applications that heavily communicate between different parts of the processor set.

**Examples:**

*   **1D Mesh (N nodes):** Bisection width is 1.
*   **2D Mesh ($n \times m$ nodes):** Bisection width is $\min(n, m)$. For an $n \times n$ mesh, it's $n$.
*   **1D Torus (N nodes):** Bisection width is 2.
*   **2D Torus ($n \times m$ nodes):** Bisection width is $n + m$. For an $n \times n$ torus, it's $2n$.

#### 3.4. Bandwidth and Latency

**Definition:**

*   **Bandwidth:** The rate at which data can be transmitted over a communication link.
*   **Latency:** The time it takes for a message to travel from the source to the destination.

**Key Concepts:**

*   **Network Performance:** Both bandwidth and latency are crucial for efficient parallel computation.
*   **Message Passing:** Parallel programs often rely on message passing for inter-process communication. The efficiency of message passing is directly affected by network latency and bandwidth.

**Impact of Mesh Topology:**

*   **Latency:** Generally increases with the diameter. Torus networks tend to have lower latency than meshes due to their smaller diameter.
*   **Bandwidth:** Related to bisection width. Torus networks generally offer higher bisection bandwidth than meshes.

---

### 4. Advantages and Disadvantages of Mesh Networks

Mesh networks, despite their simplicity, have trade-offs that make them suitable for certain applications and architectures.

#### 4.1. Advantages

*   **Simple to Implement:** The regular structure makes routing algorithms and hardware implementation relatively straightforward.
*   **Scalability (to a degree):** Can be scaled to a large number of nodes by increasing dimensions.
*   **Low Cost:** Compared to highly connected networks like fully connected networks, meshes are more cost-effective due to limited connections per node.
*   **Good for Localized Communication:** Applications with strong locality (i.e., processes primarily communicate with their neighbors) perform well on mesh networks. Many scientific simulations exhibit such locality.

#### 4.2. Disadvantages

*   **Higher Latency for Non-Local Communication:** For nodes that are far apart, messages must traverse multiple hops, leading to higher latency.
*   **Limited Bisection Bandwidth:** The bisection bandwidth can become a bottleneck for applications requiring extensive global communication or for very large systems.
*   **Boundary Effects:** In non-toroidal meshes, boundary nodes have fewer connections, which can affect performance for some communication patterns.
*   **Routing Complexity (can be):** While simple routing exists, optimizing routing for performance can still be challenging, especially in larger or higher-dimensional meshes.

---

### 5. Routing in Mesh Networks

Efficient routing is critical for performance in mesh networks.

**Key Concepts:**

*   **Routing Algorithm:** A set of rules that determine the path a message takes from its source to its destination.
*   **Dimension-Order Routing (DOR):** A common routing scheme where messages are routed along one dimension at a time until they reach their target coordinate in that dimension, then move to the next dimension.

**Examples of Routing (2D Mesh):**

*   **Dimension-Order Routing (DOR):**
    *   Suppose a message needs to go from node $(x_1, y_1)$ to $(x_2, y_2)$.
    *   **Step 1 (X-dimension):** Route the message horizontally from $x_1$ to $x_2$. If $x_1 < x_2$, move right. If $x_1 > x_2$, move left.
    *   **Step 2 (Y-dimension):** Once the message reaches column $x_2$, route it vertically from $y_1$ to $y_2$. If $y_1 < y_2$, move down. If $y_1 > y_2$, move up.
    *   **Deadlock:** DOR can be prone to deadlock if the order of dimension traversal is not carefully chosen. For example, if some messages can move left and then down, while others can move down and then left, a deadlock can occur.
    *   **Dimension-Turn Restriction:** To avoid deadlock, a common strategy is to enforce a specific order of dimension traversal (e.g., always X then Y) or restrict turns. For instance, if a message is moving in the X dimension, it might not be allowed to move in the Y dimension until it reaches its target X coordinate.

**Other Routing Schemes:**

*   **Adaptive Routing:** Allows messages to choose different paths based on network congestion, potentially improving performance but increasing complexity.
*   **Wormhole Routing:** A flow-control mechanism where a message is divided into flits (flow control digits). A flit traverses the network, and when the header flit arrives at a router, it can reserve the necessary buffer space and output link for the rest of the message, allowing subsequent flits to flow through without waiting for the entire message to arrive. This reduces latency by pipelining message delivery.

---

### 6. Practice Questions and Exercises

**Question 1:**

Consider a $4 \times 4$ 2D mesh network.
a) What is the degree of an internal node?
b) What is the degree of a corner node?
c) What is the diameter of this network?
d) What is the bisection width of this network?

**Answer 1:**

a) An internal node in a $4 \times 4$ 2D mesh has 4 neighbors (up, down, left, right). So, its degree is **4**.
b) A corner node (e.g., (0,0)) has 2 neighbors (right and down). So, its degree is **2**.
c) The diameter of an $n \times m$ mesh is $(n-1) + (m-1)$. For a $4 \times 4$ mesh, $n=4, m=4$. Diameter = $(4-1) + (4-1) = 3 + 3 = \textbf{6}$.
d) The bisection width of an $n \times m$ mesh is $\min(n, m)$. For a $4 \times 4$ mesh, $\min(4, 4) = \textbf{4}$.

**Question 2:**

Compare and contrast a 2D mesh and a 2D torus of the same size (e.g., $4 \times 4$). Discuss the differences in their diameter and bisection width. Which topology would generally be preferred for an application requiring frequent, long-distance communication? Justify your answer.

**Answer 2:**

**Comparison:**

*   **2D Mesh:** Nodes arranged in a grid, no wrap-around connections. Boundary nodes have fewer connections.
*   **2D Torus:** Nodes arranged in a grid with wrap-around connections in both dimensions. All nodes have the same degree.

**Differences in Properties:**

| Property        | $4 \times 4$ 2D Mesh | $4 \times 4$ 2D Torus |
| :-------------- | :------------------ | :------------------- |
| Node Degree     | 2, 3, or 4          | 4                    |
| Diameter        | 6                   | $2 \lfloor 4/2 \rfloor = 4$ |
| Bisection Width | 4                   | $4 + 4 = 8$          |

**Justification for Long-Distance Communication:**

For an application requiring frequent, long-distance communication, the **2D Torus** would generally be preferred.

*   **Lower Diameter:** The torus has a significantly lower diameter (4 vs. 6 for the mesh). This means that messages between distant nodes will take fewer hops, reducing latency.
*   **Higher Bisection Width:** The torus has a higher bisection width (8 vs. 4 for the mesh). This provides greater aggregate bandwidth between partitions of the network, which is crucial for applications that have a lot of communication that needs to be spread across the system.

While the mesh is simpler to implement and might be sufficient for applications with strong locality, the torus offers better performance characteristics for more global communication patterns.

**Question 3:**

Explain how Dimension-Order Routing (DOR) works in a 3D mesh and why a specific ordering of dimensions is important to prevent deadlocks.

**Answer 3:**

**Dimension-Order Routing (DOR) in a 3D Mesh:**

In a 3D mesh, nodes can be represented by coordinates $(x, y, z)$. DOR routes a message from a source $(x_1, y_1, z_1)$ to a destination $(x_2, y_2, z_2)$ by traversing the dimensions in a fixed order. A common order is X, then Y, then Z.

1.  **X-Dimension Routing:** The message is first routed horizontally along the X-axis until it reaches the correct X-coordinate ($x_2$). The router at each hop in the X-dimension only needs to consider its neighbors along the X-axis.
2.  **Y-Dimension Routing:** Once the message reaches the target X-coordinate, it is then routed vertically along the Y-axis until it reaches the correct Y-coordinate ($y_2$).
3.  **Z-Dimension Routing:** Finally, once the message reaches the target Y-coordinate, it is routed along the Z-axis until it reaches the correct Z-coordinate ($z_2$).

**Preventing Deadlocks with DOR:**

DOR can be susceptible to deadlocks if the routing choices create cyclic dependencies for resource (buffer/link) allocation. For example, if a message could move Left then Up, and another message could move Up then Left, a deadlock could occur if the first message acquired the "Left" resource and the second message acquired the "Up" resource simultaneously.

To prevent deadlocks using DOR, a strict ordering of dimensions is maintained, and a rule is enforced to prevent "turning back" on a dimension once it has been traversed. A common strategy is:

*   **Strict Dimension Order:** Always route along dimension 1, then dimension 2, then dimension 3, etc.
*   **No Backward Turns:** Once a message has moved in a certain direction along a dimension (e.g., moved from $x_1$ to $x_1+1$), it cannot move in the opposite direction along that same dimension later in its path.

**Example of Deadlock Prevention:**

Consider a 2D mesh and a routing strategy that allows moving Right/Left and Up/Down. If we don't enforce an order, a message going from (0,0) to (1,1) could first move Right to (1,0) and then wait for a path Down. Another message going from (1,1) to (0,0) could first move Down to (1,0) and then wait for a path Left. If both messages are at (1,0) and waiting for different resources, a deadlock can occur.

However, if we enforce **Dimension-Order Routing (X then Y)**:
*   Message 1 (0,0) to (1,1): Moves Right to (1,0), then Down to (1,1).
*   Message 2 (1,0) to (0,1): Moves Left to (0,0), then Up to (0,1).

In this scenario, if a message is moving horizontally (in the X dimension), it will eventually reach its target X-coordinate. Once it's at the target X-coordinate, it can then start moving vertically (in the Y dimension) without interfering with messages that are still moving horizontally. The strict ordering ensures that a message never needs to go back in a dimension it has already "passed" in the ordered sequence.

---

### 7. Important Points to Remember

*   **Mesh networks** are characterized by their grid-like structure.
*   **Toroidal meshes** (torus networks) add wrap-around connections, leading to higher regularity and often better performance.
*   Key performance metrics for interconnection networks are **degree**, **diameter**, and **bisection width**.
*   **Diameter** impacts latency, while **bisection width** impacts aggregate bandwidth.
*   Mesh networks are good for **localized communication** due to their simple structure and low cost.
*   Their main drawback is **higher latency for non-local communication** and potentially limited bisection bandwidth for very large systems.
*   **Dimension-Order Routing (DOR)** is a common, simple routing strategy for meshes, but requires careful ordering to avoid **deadlocks**.
*   Understanding these trade-offs is crucial for selecting appropriate network topologies for different parallel computing applications and architectures.

---
