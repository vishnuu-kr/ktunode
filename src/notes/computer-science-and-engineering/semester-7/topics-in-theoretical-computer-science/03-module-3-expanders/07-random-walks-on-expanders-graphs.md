---
title: "Random walks on expanders graphs"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 3: Expanders "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c40a"
status: "completed"
scrapedAt: "2026-05-20T17:12:02.787Z"
---
# Module 3: Expanders - Random Walks on Expander Graphs

This module delves into the fascinating world of expander graphs and, specifically, how random walks behave on them. Expanders are a class of sparse graphs with remarkably strong connectivity properties, and understanding random walks on these graphs reveals their powerful applications in various areas of computer science.

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the concept of a random walk on a graph.
*   Define and characterize expander graphs.
*   Analyze the mixing time of a random walk on an expander graph.
*   Explain the relationship between expansion properties and rapid mixing.
*   Discuss applications of rapid mixing on expander graphs.

---

## 1. The Concept of a Random Walk on a Graph

A random walk on a graph is a stochastic process that moves from one vertex to another along the edges of the graph. At each step, the walker chooses an adjacent vertex uniformly at random and moves to it.

### Key Concepts and Definitions:

*   **Graph:** A set of vertices ($V$) and a set of edges ($E$) connecting pairs of vertices.
*   **Undirected Graph:** Edges have no direction.
*   **Regular Graph:** A graph where every vertex has the same degree (number of incident edges).
*   **Markov Chain:** A sequence of random variables where the probability of each state depends only on the previous state. A random walk on a graph can be modeled as a Markov chain.
*   **Transition Probability:** The probability of moving from one vertex to another. For a uniform random walk on an undirected $d$-regular graph, the transition probability $P_{uv}$ from vertex $u$ to vertex $v$ is:
    *   $P_{uv} = \frac{1}{d}$ if $u$ and $v$ are adjacent.
    *   $P_{uv} = 0$ otherwise.
*   **Stationary Distribution:** A probability distribution over the vertices that remains unchanged after one step of the random walk. For a connected, non-bipartite graph, the stationary distribution $\pi$ is uniform: $\pi(v) = \frac{1}{|V|}$ for all vertices $v$.

### Example: Random Walk on a Path Graph

Consider a path graph with 4 vertices: $V = \{1, 2, 3, 4\}$, $E = \{(1,2), (2,3), (3,4)\}$.

*   Vertex 1 has degree 1.
*   Vertex 2 has degree 2.
*   Vertex 3 has degree 2.
*   Vertex 4 has degree 1.

This is not a regular graph. Let's consider a 3-regular graph instead.

### Example: Random Walk on a 3-Regular Cycle Graph

Consider a cycle graph with 4 vertices: $V = \{1, 2, 3, 4\}$, $E = \{(1,2), (2,3), (3,4), (4,1)\}$. This is a 2-regular graph.

*   From vertex 1, you can move to vertex 2 or vertex 4 with probability 1/2 each.
*   From vertex 2, you can move to vertex 1 or vertex 3 with probability 1/2 each.

This random walk will eventually converge to a uniform distribution over the vertices.

---

## 2. Expander Graphs

Expander graphs are sparse graphs that exhibit strong connectivity properties. Despite having few edges (and thus low degree), they are well-connected, meaning any cut separating the graph into two non-trivial sets of vertices must have many edges crossing it.

### Key Concepts and Definitions:

*   **Cut:** A partition of the vertex set $V$ into two non-empty sets, $S$ and $V \setminus S$.
*   **Edge Cut:** The set of edges that have one endpoint in $S$ and the other in $V \setminus S$.
*   **Size of a Cut:** The number of edges in the edge cut.
*   **Expansion (h(G)):** The minimum ratio of the size of an edge cut to the size of the smaller partition set over all possible cuts.
    *   For a graph $G=(V, E)$, $h(G) = \min_{\substack{S \subseteq V \\ 0 < |S| \le |V|/2}} \frac{|E(S, V \setminus S)|}{|S|}$, where $E(S, V \setminus S)$ is the set of edges between $S$ and $V \setminus S$.
*   **Expander Graph:** A graph $G$ with $n$ vertices and maximum degree $\Delta$ that has a non-trivial expansion, typically requiring $h(G) \ge c$ for some constant $c > 0$.
*   **Normalized Expansion:** For a $d$-regular graph, the normalized expansion is defined as $\Theta(G) = \min_{\substack{S \subseteq V \\ 0 < |S| \le |V|/2}} \frac{|E(S, V \setminus S)|}{d|S|}$. This is related to the second largest eigenvalue of the adjacency matrix.

### Characterizations of Expanders:

Expanders can be characterized in several equivalent ways:

1.  **Edge Expansion:** As defined above, requiring a constant minimum number of edges crossing any non-trivial cut relative to the size of the smaller partition.
2.  **Vertex Expansion:** Similar to edge expansion, but considering paths from a set of vertices to the remaining vertices.
3.  **Eigenvalue Gap:** For a $d$-regular graph, let $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$ be the eigenvalues of its adjacency matrix, with $\lambda_1 = d$. The graph is an expander if $\lambda_2$ is significantly smaller than $d$. Specifically, $|\lambda_i| \le \lambda_2$ for all $i > 1$. The **normalized eigenvalue gap** is often used: $\lambda_2 / d$. Expanders are graphs with a small normalized eigenvalue gap, i.e., $\lambda_2 / d \le \epsilon$ for some small $\epsilon < 1$.
    *   **Why is this important?** The magnitude of the second largest eigenvalue is directly related to how quickly a random walk mixes.

### Example: A Dense vs. Sparse Graph

*   **Dense Graph (e.g., Complete Graph $K_n$):** A complete graph has $\binom{n}{2}$ edges. Any cut of size $k$ has $k(n-k)$ edges crossing it. The expansion is high.
*   **Sparse Graph (e.g., a Grid Graph):** A grid graph can be sparse, but its expansion properties might be limited, especially for cuts that follow the grid lines.

### Example: Cayley Graphs as Expanders

Many constructions of expander graphs are based on Cayley graphs of groups. For instance, the Ramanujan graphs are a family of regular graphs that are provably expanders with the smallest possible second largest eigenvalue for their degree.

---

## 3. Random Walks on Expander Graphs and Mixing Time

A crucial property of random walks on expander graphs is their ability to "mix" rapidly. This means the distribution of the walker's position quickly approaches the stationary (uniform) distribution.

### Key Concepts and Definitions:

*   **Mixing Time:** The number of steps it takes for the random walk to get "close" to the stationary distribution, regardless of the starting vertex.
*   **Total Variation Distance:** A common metric to measure the difference between two probability distributions $\mu$ and $\nu$ on the same state space $\Omega$:
    *   $d_{TV}(\mu, \nu) = \frac{1}{2} \sum_{x \in \Omega} |\mu(x) - \nu(x)|$
*   **Mixing Time ($\tau_{mix}(\epsilon)$):** The minimum number of steps $t$ such that for any starting vertex $u$, the distribution of the walker after $t$ steps, $P^t(u, \cdot)$, is within a certain $\epsilon$ total variation distance from the stationary distribution $\pi$:
    *   $d_{TV}(P^t(u, \cdot), \pi) \le \epsilon$

### Mixing Time on Expander Graphs:

Expanders are characterized by their rapid mixing property. A key result states that for a $d$-regular graph with normalized eigenvalue gap $\lambda_2/d$, the mixing time is roughly $O(\frac{1}{\epsilon^2} \log \frac{1}{\epsilon})$, where $\epsilon$ is the desired closeness to the stationary distribution. More formally, for a $d$-regular graph $G$ with adjacency matrix $A$, the total variation distance between $P^t(u, \cdot)$ and $\pi$ is bounded by:

$d_{TV}(P^t(u, \cdot), \pi) \le \left(\frac{\lambda_2}{d}\right)^t \sqrt{\frac{|V|}{|V|}}$ (for starting vertex $u$ where $P^0(u, \cdot)$ is concentrated at $u$)
$d_{TV}(P^t(u, \cdot), \pi) \le \left(\frac{\lambda_2}{d}\right)^t$ (more generally, for any starting vertex $u$)

If the graph is an expander, $\lambda_2/d$ is small, meaning $(\lambda_2/d)^t$ decreases exponentially with $t$.

**Theorem:** For a $d$-regular graph $G$ with $n$ vertices, mixing time $\tau_{mix}(\epsilon) = O\left(\frac{1}{\log(d/\lambda_2)}\log\left(\frac{1}{\epsilon}\right)\right)$.

If $\lambda_2/d$ is bounded by a constant $\alpha < 1$, then $\tau_{mix}(\epsilon) = O(\log(1/\epsilon))$.

### The Connection Between Expansion and Rapid Mixing:

The spectral properties (eigenvalue gap) and the combinatorial properties (expansion) of a graph are deeply intertwined.

*   **Eigenvalue Gap implies Expansion:** A small eigenvalue gap implies good edge expansion. If $\lambda_2/d$ is small, it means the adjacency matrix is "close" to a matrix where all rows are the stationary distribution.
*   **Expansion implies Eigenvalue Gap:** Conversely, good expansion implies a small eigenvalue gap. Intuitively, if a graph has many edges crossing any cut, it's harder to partition the vertices into sets that are "almost disconnected" (which would lead to a larger second eigenvalue).

The proof of this relationship often involves techniques like the Cheeger inequality.

---

## 4. Applications of Rapid Mixing on Expander Graphs

The rapid mixing property of random walks on expander graphs has significant applications in various areas of theoretical computer science:

### Key Applications:

1.  **Sampling and Counting:**
    *   **Approximate Counting:** Estimating the number of solutions to a combinatorial problem (e.g., the number of perfect matchings in a bipartite graph). Random walks can be used to sample configurations from a space, and the mixing time determines how efficiently we can get a representative sample.
    *   **Sampling from Distributions:** Generating random samples from complex probability distributions, especially those arising in statistical physics or constraint satisfaction problems.

2.  **Randomized Algorithms:**
    *   **Graph Property Testing:** Quickly checking if a graph has certain properties (e.g., bipartiteness, expansion properties).
    *   **Network Design:** Constructing robust and efficient networks. Expander graphs are used in constructing error-correcting codes and communication networks.
    *   **Derandomization:** Using expander graphs to transform randomized algorithms into deterministic ones. For example, the Nisan-Wigderson pseudorandom generator relies on expander graphs.

3.  **Computer Networks:**
    *   **Routing:** Efficiently routing information through a network. Random walks can help find short paths or spread information quickly.
    *   **Load Balancing:** Distributing tasks or data across network nodes.

4.  **Theoretical Computer Science Research:**
    *   **Complexity Theory:** Understanding the limits of computation and the power of randomness.
    *   **Cryptography:** Constructing secure pseudorandom generators.

### Example: Approximate Counting of Spanning Trees

The Matrix Tree Theorem gives a way to count spanning trees exactly, but it involves determinants which can be computationally expensive for large graphs. Algorithms based on random walks can approximate this count more efficiently by sampling spanning trees from a distribution that mixes rapidly on expander-like structures within the graph.

### Example: Pseudorandom Generators

A key result by Impagliazzo and Wigderson shows that if one-way functions exist, then Expanders (specifically, Cayley graphs with small eigenvalue gaps) can be used to construct efficient pseudorandom generators. A pseudorandom generator takes a short random seed and produces a longer sequence of bits that is computationally indistinguishable from a truly random sequence.

---

## Practice Questions and Exercises

**Question 1:**

What is the primary characteristic of an expander graph that makes random walks on it mix rapidly?

**Answer:** The primary characteristic is its strong connectivity, often quantified by a large edge expansion or a small normalized eigenvalue gap ($\lambda_2/d$). This ensures that any cut has a proportionally large number of edges crossing it, and spectral properties indicate a fast convergence to the uniform distribution.

**Question 2:**

Consider a simple cycle graph with $n$ vertices, $C_n$. What is the degree of each vertex? What is the stationary distribution of a random walk on $C_n$?

**Answer:**
*   The degree of each vertex in $C_n$ is 2.
*   The stationary distribution $\pi$ of a random walk on $C_n$ (which is connected and bipartite) is uniform over all vertices. So, $\pi(v) = \frac{1}{n}$ for every vertex $v$.

**Question 3:**

Explain the concept of mixing time and why it's important for applications involving random walks.

**Answer:** Mixing time is the number of steps a random walk needs to take to reach a state where its distribution is close to the stationary distribution, regardless of the starting vertex. It's important because it dictates how quickly the random process "forgets" its starting position and behaves like a truly random sample. Faster mixing times mean more efficient algorithms for sampling, counting, and other applications.

**Question 4:**

How does the normalized eigenvalue gap $\lambda_2/d$ relate to the mixing time of a random walk on a $d$-regular graph?

**Answer:** A smaller normalized eigenvalue gap ($\lambda_2/d$) leads to a faster mixing time. The total variation distance from the stationary distribution decays exponentially with the number of steps $t$ as $(\lambda_2/d)^t$. Thus, a smaller ratio implies a faster convergence.

**Question 5:**

Give one example of an application where the rapid mixing property of random walks on expander graphs is utilized.

**Answer:** Approximate counting is a key application. For instance, estimating the number of perfect matchings in a bipartite graph can be done by using a random walk on a related Markov chain that mixes rapidly on expander-like structures.

---

## Important Points to Remember

*   **Expanders are sparse but well-connected:** This is the defining paradox that makes them so powerful.
*   **Random walks on graphs are Markov chains:** Their behavior is governed by transition probabilities.
*   **Stationary distribution:** For connected non-bipartite graphs, the uniform distribution is the stationary distribution.
*   **Mixing time measures convergence:** It quantifies how quickly a random walk reaches its stationary distribution.
*   **Eigenvalue gap is key to rapid mixing:** A small $\lambda_2/d$ ratio indicates fast mixing.
*   **Spectral and combinatorial properties are linked:** Expansion and eigenvalue gaps are closely related.
*   **Wide range of applications:** Expanders and their rapid mixing properties are fundamental to algorithms in sampling, counting, cryptography, and network design.

---
