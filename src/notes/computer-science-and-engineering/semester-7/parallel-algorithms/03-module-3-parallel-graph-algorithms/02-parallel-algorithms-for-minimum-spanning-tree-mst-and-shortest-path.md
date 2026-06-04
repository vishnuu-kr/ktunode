---
title: "Parallel algorithms for minimum spanning tree (MST) and shortest path."
subject: "PARALLEL ALGORITHMS"
module: "Module 3: Parallel Graph Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c701"
status: "completed"
scrapedAt: "2026-05-20T17:08:53.621Z"
---
# Module 3: Parallel Graph Algorithms - Minimum Spanning Tree (MST) and Shortest Path

## Table of Contents

1.  **Introduction to Parallel Graph Algorithms**
2.  **Parallel Minimum Spanning Tree (MST) Algorithms**
    *   2.1. What is a Minimum Spanning Tree?
    *   2.2. Applications of MST
    *   2.3. Challenges in Parallelizing MST Algorithms
    *   2.4. Key Parallel MST Algorithms
        *   2.4.1. Parallel Prim's Algorithm
        *   2.4.2. Parallel Kruskal's Algorithm
        *   2.4.3. Borůvka's Algorithm and its Parallelization
    *   2.5. Performance Metrics and Analysis
3.  **Parallel Shortest Path Algorithms**
    *   3.1. What is a Shortest Path?
    *   3.2. Applications of Shortest Path
    *   3.3. Challenges in Parallelizing Shortest Path Algorithms
    *   3.4. Key Parallel Shortest Path Algorithms
        *   3.4.1. Parallel Dijkstra's Algorithm
        *   3.4.2. Parallel Bellman-Ford Algorithm
        *   3.4.3. Parallel All-Pairs Shortest Path (APSP) Algorithms (e.g., Floyd-Warshall)
    *   3.5. Performance Metrics and Analysis
4.  **Comparison and Applications**
5.  **Practice Questions and Exercises**

---

## 1. Introduction to Parallel Graph Algorithms

*   **Graph:** A collection of vertices (nodes) and edges connecting pairs of vertices.
*   **Parallelism:** Executing multiple computations simultaneously to speed up a task.
*   **Parallel Graph Algorithms:** Algorithms designed to run on parallel computing architectures (e.g., multi-core processors, clusters) to solve graph-related problems.
*   **Why Parallelize Graph Algorithms?**
    *   Graphs in real-world applications (social networks, road networks, biological networks) can be massive, making sequential algorithms too slow.
    *   Parallelism can significantly reduce computation time.
*   **Key Considerations for Parallel Graph Algorithms:**
    *   **Data Partitioning/Decomposition:** How to divide the graph data (vertices, edges) among processors.
    *   **Task Decomposition:** How to divide the algorithmic steps among processors.
    *   **Communication Overhead:** The cost of processors exchanging information. Minimizing this is crucial for performance.
    *   **Load Balancing:** Distributing the workload evenly among processors.
    *   **Synchronization:** Ensuring processors coordinate their actions correctly.

---

## 2. Parallel Minimum Spanning Tree (MST) Algorithms

### 2.1. What is a Minimum Spanning Tree?

*   **Spanning Tree:** A subgraph of a connected, undirected graph that includes all vertices and is a tree (i.e., it has no cycles and is connected).
*   **Minimum Spanning Tree (MST):** A spanning tree with the smallest possible total edge weight.
*   **Key Properties:**
    *   If all edge weights are distinct, the MST is unique.
    *   An MST of a connected graph with $V$ vertices has exactly $V-1$ edges.
*   **Example:** Consider a graph representing cities and roads connecting them, with road lengths as edge weights. An MST would connect all cities with the minimum total road length, forming a network without redundant connections.

### 2.2. Applications of MST

*   **Network Design:** Designing the cheapest possible networks (e.g., laying cables, pipelines, electrical grids).
*   **Clustering:** Grouping data points based on similarity.
*   **Image Segmentation:** Partitioning an image into meaningful regions.
*   **Circuit Design:** Connecting components with minimal wire length.
*   **Approximation Algorithms:** Used as a subroutine in solving other NP-hard problems.

### 2.3. Challenges in Parallelizing MST Algorithms

*   **Detecting and Avoiding Cycles:** Ensuring that added edges do not form cycles can be complex in a distributed setting.
*   **Global Information Requirements:** Algorithms like Prim's inherently need to consider all edges or vertices not yet in the MST.
*   **Load Imbalance:** Different parts of the graph might require more processing, leading to uneven work distribution.
*   **Data Dependencies:** The choice of an edge in one step might depend on decisions made by other processors.

### 2.4. Key Parallel MST Algorithms

Several classical MST algorithms have been adapted for parallel execution:

#### 2.4.1. Parallel Prim's Algorithm

*   **Sequential Prim's:** Starts from an arbitrary vertex and iteratively adds the minimum-weight edge connecting a vertex in the growing MST to a vertex outside it.
*   **Parallel Approaches:**
    *   **Multiple Sources:** Start multiple Prim's instances from different vertices. When two growing trees merge, they can be combined. This requires a mechanism to manage the "frontier" (edges connecting to the outside) efficiently.
    *   **Bucket-based Prim's:** Organize edges by weight into buckets. Process buckets in increasing order of weight. In parallel, multiple processors can work on edges within the same bucket.
    *   **Graph Partitioning:** Partition the graph and run Prim's on subgraphs. Then, use a mechanism (e.g., Borůvka's phases) to connect the MSTs of subgraphs.
*   **Challenge:** Efficiently managing the priority queue of edges in a distributed manner is a significant hurdle.

#### 2.4.2. Parallel Kruskal's Algorithm

*   **Sequential Kruskal's:** Sorts all edges by weight and iteratively adds the next smallest edge if it doesn't form a cycle. Uses a Disjoint Set Union (DSU) data structure to detect cycles.
*   **Parallel Approaches:**
    *   **Parallel Sorting:** The primary bottleneck in sequential Kruskal's is sorting. Parallel sorting algorithms (e.g., parallel merge sort, quicksort) can be used.
    *   **Parallel DSU:** Implementing DSU operations (find and union) efficiently in parallel is key. This can involve techniques like path compression and union by rank/size.
    *   **Edge Partitioning:** Divide edges among processors. Each processor sorts its subset of edges and then merges them. DSU operations are then performed in parallel.
*   **Example:**
    1.  Divide the edges of a graph among $P$ processors.
    2.  Each processor sorts its assigned edges.
    3.  A global merge sort or selection algorithm identifies the overall $k$-th smallest edge.
    4.  Processors perform DSU operations in parallel to check for cycles.
*   **Advantages:** More amenable to parallelization than Prim's due to the readily parallelizable sorting step and the localized nature of DSU operations (if implemented carefully).

#### 2.4.3. Borůvka's Algorithm and its Parallelization

*   **Sequential Borůvka's:** Works in phases. In each phase, every vertex (or component) finds its minimum-weight edge connecting it to a *different* component. These edges are added to the MST. Components are then merged.
*   **Parallel Borůvka's:** This algorithm is naturally parallel.
    *   **Phases:** The algorithm proceeds in synchronous phases.
    *   **Step 1 (Find Minimum Edge):** Each vertex (or component) in parallel finds its minimum-weight edge to another component. This involves local computations and communication to find the minimum edge.
    *   **Step 2 (Add Edges and Merge):** The selected minimum edges are added. If an edge connects two components, they are merged. This merge operation can be efficiently handled by a parallel DSU structure.
    *   **Convergence:** The number of components halves in each phase, ensuring polynomial convergence (logarithmic number of phases).
*   **Example:**
    *   **Phase 1:** Each vertex finds its cheapest outgoing edge. If vertex A's cheapest edge is to B, and B's cheapest edge is to A, they form a component.
    *   **Phase 2:** The newly formed components now find their cheapest edges to other components.
*   **Advantages:**
    *   Highly parallelizable as work within a phase is largely independent.
    *   Requires fewer communication rounds than some parallelizations of Prim's or Kruskal's.
    *   Relatively simple to implement in a parallel setting.
*   **Important Point:** Borůvka's is often considered one of the most efficient parallel MST algorithms.

### 2.5. Performance Metrics and Analysis

*   **Speedup:** $S(P) = T_1 / T_P$, where $T_1$ is the execution time on one processor and $T_P$ is the execution time on $P$ processors.
*   **Efficiency:** $E(P) = S(P) / P$. Measures how well the processors are utilized.
*   **Work:** Total amount of computation performed. A good parallel algorithm should ideally have work close to the sequential algorithm.
*   **Span/Depth:** The length of the longest dependency chain in the parallel execution. This limits the achievable speedup.

---

## 3. Parallel Shortest Path Algorithms

### 3.1. What is a Shortest Path?

*   **Shortest Path Problem:** Given a graph with weighted edges, find a path between two vertices such that the sum of the weights of the edges on the path is minimized.
*   **Types:**
    *   **Single-Source Shortest Path (SSSP):** Find shortest paths from one source vertex to all other vertices.
    *   **All-Pairs Shortest Path (APSP):** Find shortest paths between all pairs of vertices.
*   **Constraints:**
    *   **Non-negative Edge Weights:** Required for Dijkstra's.
    *   **Negative Edge Weights (but no negative cycles):** Required for Bellman-Ford.
    *   **Negative Cycles:** The shortest path is undefined or can be infinitely negative.

### 3.2. Applications of Shortest Path

*   **Navigation Systems:** Finding the shortest route between two locations (e.g., Google Maps, GPS).
*   **Network Routing:** Determining the best path for data packets in communication networks.
*   **Logistics and Transportation:** Planning efficient delivery routes.
*   **Resource Allocation:** Finding optimal paths for resource utilization.
*   **Analysis of Social Networks:** Identifying connections and influence.

### 3.3. Challenges in Parallelizing Shortest Path Algorithms

*   **Data Dependencies:** The shortest path to a vertex often depends on the shortest paths to its predecessors. This creates dependencies that can be hard to resolve in parallel.
*   **Dynamic Updates:** As paths are discovered, they might update distances to other vertices, requiring synchronization.
*   **Load Imbalance:** In SSSP, if the graph is sparse or has a specific structure, some processors might get stuck with much more work.
*   **Communication Overhead:** Processors need to exchange distance updates, which can be frequent.
*   **Handling Negative Weights/Cycles:** Parallelizing algorithms that handle negative weights adds complexity.

### 3.4. Key Parallel Shortest Path Algorithms

#### 3.4.1. Parallel Dijkstra's Algorithm

*   **Sequential Dijkstra's:** Uses a priority queue to greedily select the vertex with the smallest tentative distance that has not yet been finalized.
*   **Parallel Approaches:**
    *   **Parallel Priority Queue:** Implementing a distributed priority queue is complex. Techniques include:
        *   **Partitioning the Priority Queue:** Divide the PQ among processors.
        *   **Distributed PQ:** Each processor manages a local PQ, and a coordinator handles global operations.
    *   **Vertex-based Parallelism:** Assign subsets of vertices to processors. Each processor updates distances for its assigned vertices and their neighbors.
    *   **Bucket-based Dijkstra:** Similar to bucket-based Prim's. Group vertices by their tentative distances. Process buckets in order. Within a bucket, processing can be parallelized.
    *   **Redistribution of Work:** If some processors become idle, they can pick up work from busy processors.
*   **Example (Bucket-based):**
    1.  Initialize distances. Create buckets for distances.
    2.  Process vertices in order of their distance.
    3.  For a given distance $d$, all vertices with distance $d$ are processed in parallel.
    4.  When a vertex $u$ is finalized, its neighbors $v$ are updated. If $dist(v)$ changes, $v$ is moved to a new bucket corresponding to its new distance.
*   **Challenge:** Managing the dynamic updates and the priority queue efficiently in parallel is the main difficulty.

#### 3.4.2. Parallel Bellman-Ford Algorithm

*   **Sequential Bellman-Ford:** Relaxes all edges $|V|-1$ times. It can detect negative cycles.
*   **Parallel Approach:**
    *   **Synchronous Relaxation:** The algorithm proceeds in rounds. In each round, all edges are relaxed in parallel.
    *   **Data Parallelism:** Each processor can be responsible for relaxing a subset of the edges.
    *   **Synchronization:** After each round, all processors synchronize to ensure that the latest distance updates are available for the next round.
*   **Example:**
    1.  Initialize distances from the source to all other vertices.
    2.  For $i = 1$ to $|V|-1$:
        *   In parallel, for each edge $(u, v)$ with weight $w$:
            *   $dist(v) = \min(dist(v), dist(u) + w)$
        *   Synchronize all processors.
    3.  (Optional) Perform one more round to detect negative cycles.
*   **Advantages:**
    *   Easier to parallelize than Dijkstra's because its structure is based on a fixed number of rounds of edge relaxation.
    *   Suitable for graphs with negative edge weights (without negative cycles).
*   **Disadvantages:**
    *   Can be slower than Dijkstra's on graphs with non-negative weights due to its $O(|V| \cdot |E|)$ complexity.
    *   The synchronization step between rounds can be a bottleneck.

#### 3.4.3. Parallel All-Pairs Shortest Path (APSP) Algorithms

*   **Sequential Floyd-Warshall:** Uses dynamic programming. $dist(i, j, k)$ is the shortest path from $i$ to $j$ using only intermediate vertices from $\{1, ..., k\}$.
    *   $dist(i, j, k) = \min(dist(i, j, k-1), dist(i, k, k-1) + dist(k, j, k-1))$
*   **Parallel Floyd-Warshall:**
    *   **Block Matrix Multiplication Analogy:** The Floyd-Warshall algorithm can be viewed as a series of matrix multiplications over the $(\min, +)$ algebra.
    *   **Parallel Matrix Multiplication Techniques:** Adapt parallel matrix multiplication algorithms (e.g., Cannon's, SUMMA) to the $(\min, +)$ algebra.
    *   **Data Partitioning:** Divide the distance matrix into blocks and distribute them among processors.
    *   **Algorithm Steps:**
        1.  Initialize the distance matrix.
        2.  For $k = 1$ to $|V|$:
            *   For all pairs $(i, j)$ in parallel:
                *   $dist(i, j) = \min(dist(i, j), dist(i, k) + dist(k, j))$
            *   Synchronization might be needed depending on partitioning.
*   **Other Parallel APSP:**
    *   **Running SSSP from each vertex in parallel:** If there are $P$ processors, you can run $P$ instances of a parallel SSSP algorithm. For $V$ vertices, this would require approximately $V/P$ parallel SSSP runs.
    *   **Parallel BFS for unweighted graphs:** If the graph is unweighted, BFS can find shortest paths. Parallel BFS algorithms can be used.
*   **Advantages:** Naturally parallelizable if you run $V$ SSSP computations. Floyd-Warshall parallelizes well by treating it like matrix operations.
*   **Disadvantages:** $O(V^3)$ complexity for Floyd-Warshall can be prohibitive for very large graphs. Running $V$ SSSP computations is $V \times (\text{parallel SSSP complexity})$.

### 3.5. Performance Metrics and Analysis

*   **Same as MST:** Speedup, Efficiency, Work, Span.
*   **Bottlenecks:**
    *   **Communication:** Frequent updates in Dijkstra's, synchronization in Bellman-Ford.
    *   **Load Balancing:** Uneven distribution of work, especially in Dijkstra's and BFS-based approaches.
    *   **Priority Queue Management:** For parallel Dijkstra.

---

## 4. Comparison and Applications

| Algorithm Type | Parallel Strengths | Parallel Weaknesses | Best Suited For |
| :------------- | :----------------- | :------------------ | :---------------- |
| **MST**        |                    |                     |                   |
| Prim's         | Can be efficient with good PQ implementation | PQ complexity, dynamic updates | Dense graphs, when starting vertex is known |
| Kruskal's      | Parallel sorting, DSU is manageable | Parallel sort efficiency, DSU implementation | Sparse graphs, when edge list is readily available |
| Borůvka's      | Naturally parallel, few communication rounds | Needs careful DSU implementation | Generally good for dense and sparse graphs, robust parallelization |
| **Shortest Path** |                    |                     |                   |
| Dijkstra's     | Efficient with non-negative weights if PQ is good | PQ implementation, dynamic updates, load balancing | Graphs with non-negative weights |
| Bellman-Ford   | Synchronous updates are simple to parallelize | Slower on non-negative graphs, synchronization bottleneck | Graphs with negative weights (no negative cycles) |
| Floyd-Warshall | Matrix-operation like parallelism | High $O(V^3)$ complexity | Small to medium sized graphs, all-pairs requirement |
| Parallel BFS   | Efficient for unweighted | Not applicable for weighted | Unweighted graphs |

---

## 5. Practice Questions and Exercises

**Question 1 (MST):**
Describe the main challenge in parallelizing Prim's algorithm compared to Kruskal's algorithm.

**Answer 1:**
The main challenge in parallelizing Prim's algorithm lies in efficiently managing the priority queue of edges connecting the growing MST to the rest of the graph in a distributed manner. This is inherently a global operation. Kruskal's algorithm, on the other hand, benefits from parallel sorting of edges and the relatively localized operations of the Disjoint Set Union (DSU) data structure.

**Question 2 (Shortest Path):**
What is the primary advantage of using parallel Bellman-Ford over parallel Dijkstra's algorithm, and what is its main disadvantage?

**Answer 2:**
*   **Advantage:** Parallel Bellman-Ford is suitable for graphs with negative edge weights (as long as there are no negative cycles), which is a capability that Dijkstra's algorithm lacks. Its parallelization is also more straightforward due to its iterative, round-based structure.
*   **Disadvantage:** On graphs with only non-negative edge weights, parallel Bellman-Ford is generally slower than parallel Dijkstra's because its complexity is higher ($O(|V| \cdot |E|)$ vs. potentially $O(\log V)$ or $O(1)$ per vertex in parallel Dijkstra's, depending on the PQ). The synchronization between relaxation rounds can also be a bottleneck.

**Question 3 (Borůvka's):**
Explain why Borůvka's algorithm is considered naturally parallel.

**Answer 3:**
Borůvka's algorithm operates in phases. In each phase, every component independently finds its minimum-weight outgoing edge to a different component. These computations are local to each component. Once these edges are identified, they are added, and components are merged. This process is highly synchronous and parallelizable because the work within each phase can be performed concurrently by different processors without significant interdependencies, except for the final component merging step.

**Question 4 (Conceptual):**
You are designing a parallel algorithm for finding the shortest paths in a very large road network with millions of intersections (vertices) and roads (edges). Assume road travel times (edge weights) are non-negative. Which algorithm would you lean towards, and why? Consider both SSSP and APSP.

**Answer 4:**
For finding shortest paths in a very large road network with non-negative edge weights:

*   **For Single-Source Shortest Path (SSSP):** A parallel version of **Dijkstra's algorithm** would be the primary choice. The non-negative weights are a direct fit for Dijkstra's. The key would be to implement an efficient parallel priority queue or use a bucket-based approach to manage the frontier of vertices to be explored. Load balancing would be a crucial aspect to consider.

*   **For All-Pairs Shortest Path (APSP):**
    *   Running $V$ parallel SSSP computations (using parallel Dijkstra's) is a viable strategy. If the network is massive, $O(V^3)$ of Floyd-Warshall would likely be too slow.
    *   If the network is geographically clustered, one might consider hybrid approaches where local SSSP runs are performed, and then paths between clusters are computed, or a multi-source shortest path approach might be adapted.

    The dominant factor is the scale: millions of vertices make $O(V^3)$ infeasible. Therefore, a parallel SSSP approach is generally preferred.

**Question 5 (Exercise):**
Consider a graph with vertices {A, B, C, D} and edges {(A,B,1), (A,C,5), (B,C,2), (B,D,6), (C,D,3)}.
(a) Find the MST using Kruskal's algorithm.
(b) Find the MST using Prim's algorithm (starting from A).
(c) Imagine a parallel version of Kruskal's where edges are split: Processor 1 gets {(A,B,1), (B,D,6)} and Processor 2 gets {(A,C,5), (B,C,2), (C,D,3)}. Briefly describe how they might collaborate to find the MST.

**Answer 5:**
**(a) Kruskal's Algorithm:**
1.  Sort edges by weight: (A,B,1), (B,C,2), (C,D,3), (A,C,5), (B,D,6)
2.  Add (A,B,1): Components {A,B}, {C}, {D}. MST = {(A,B,1)}
3.  Add (B,C,2): Components {A,B,C}, {D}. MST = {(A,B,1), (B,C,2)}
4.  Add (C,D,3): Components {A,B,C,D}. MST = {(A,B,1), (B,C,2), (C,D,3)}
    *   (A,C,5) would form a cycle (A-B-C-A).
    *   (B,D,6) would form a cycle (B-C-D-B).
MST edges: (A,B,1), (B,C,2), (C,D,3). Total weight = 6.

**(b) Prim's Algorithm (Starting from A):**
1.  Start with MST = {A}. Frontier edges: (A,B,1), (A,C,5).
2.  Add minimum weight edge from frontier: (A,B,1). MST = {A,B}. Frontier edges: (A,C,5), (B,C,2), (B,D,6).
3.  Add minimum weight edge from frontier: (B,C,2). MST = {A,B,C}. Frontier edges: (A,C,5 - now redundant), (C,D,3), (B,D,6). (Note: (A,C,5) is no longer an external edge as both A and C are in MST).
4.  Add minimum weight edge from frontier: (C,D,3). MST = {A,B,C,D}. Frontier edges: (B,D,6 - now redundant).
MST edges: (A,B,1), (B,C,2), (C,D,3). Total weight = 6.

**(c) Parallel Kruskal's Collaboration:**
1.  **Processor 1:** Sorts its edges: (A,B,1), (B,D,6). Identifies (A,B,1) as its smallest edge.
2.  **Processor 2:** Sorts its edges: (B,C,2), (C,D,3), (A,C,5). Identifies (B,C,2) as its smallest edge.
3.  **Global Coordination/Merging:**
    *   A central coordinator (or a distributed process) needs to determine the globally smallest edge. This might involve processors sending their smallest candidate edge. Let's say (A,B,1) from P1 is the smallest.
    *   P1 and P2 perform DSU operations for (A,B,1). Say they can add it. Components {A,B}, {C}, {D}.
    *   Now, edges need to be considered in global sorted order. The next smallest edge might be (B,C,2) from P2.
    *   P1 and P2 would use a parallel DSU structure to check if adding (B,C,2) creates a cycle. Since B is in component {A,B} and C is in component {C}, they are distinct. They can be unioned: {A,B,C}, {D}.
    *   This process continues. For each globally smallest edge that doesn't form a cycle, the relevant processor(s) perform the DSU operation, and components are merged. The key is efficient parallel sorting and parallel DSU operations.

---

## 6. Important Points to Remember

*   **Parallelism vs. Sequential:** Focus on how parallel algorithms break down tasks and manage communication/synchronization to achieve speedup.
*   **MST Algorithms:**
    *   **Borůvka's** is often favored for parallelization due to its phased, component-wise approach.
    *   **Kruskal's** benefits from parallel sorting.
    *   **Prim's** faces challenges with parallelizing its priority queue.
*   **Shortest Path Algorithms:**
    *   **Dijkstra's** is efficient for non-negative weights but complex to parallelize effectively due to the priority queue.
    *   **Bellman-Ford** is easier to parallelize (synchronous rounds) and handles negative weights, but is slower on graphs with only positive weights.
    *   **APSP** often relies on running multiple SSSP computations in parallel or parallel matrix-like operations.
*   **Metrics:** Always consider speedup, efficiency, communication overhead, and load balancing when evaluating parallel algorithms.
*   **Graph Representation:** The choice of graph representation (adjacency list vs. matrix) can also impact parallel performance. Adjacency lists are often preferred for sparse graphs.
*   **Data Structures:** Efficient parallel implementations of data structures like Disjoint Set Union and priority queues are critical.
