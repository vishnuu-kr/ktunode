---
title: "edge-expanders"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 3: Expanders "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c406"
status: "completed"
scrapedAt: "2026-05-20T17:11:58.732Z"
---
# Topics in Theoretical Computer Science: Module 3: Expanders - Edge-Expanders

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the concept of expanders and their fundamental properties.
*   Define and characterize edge-expanders.
*   Explain the importance of expanders in various computer science applications.
*   Analyze the spectral properties of graphs related to expansion.
*   Discuss different constructions and bounds for expanders.
*   Understand the probabilistic method and its application in proving the existence of expanders.

---

## 1. Introduction to Expanders

### 1.1 What are Expanders?

Expanders are **highly connected graphs**. While traditional connectivity measures (like vertex connectivity or edge connectivity) are important, expanders exhibit strong expansion properties even in sparse graphs. Intuitively, if you take a small set of vertices, the number of edges leaving that set is significantly larger than the size of the set itself.

### 1.2 Why are Expanders Important?

Despite their sparseness (often with degree proportional to $\log n$, where $n$ is the number of vertices), expanders possess remarkable properties that make them crucial in:

*   **Error-correcting codes:** Designing efficient codes that can correct errors in transmission.
*   **Computer networks:** Building robust and efficient network topologies.
*   **Randomized algorithms:** Constructing pseudorandom generators and derandomization techniques.
*   **Complexity theory:** Understanding the limits of computation and proving lower bounds.
*   **Graph theory:** Studying graph structure and properties.

### 1.3 Key Idea: Expansion

The core idea behind expanders is that any "small" subset of vertices is connected to "many" vertices outside the subset. This prevents the graph from being easily partitioned or having bottlenecks.

---

## 2. Edge-Expanders: Definition and Characterization

### 2.1 Definition of Edge Expansion

Let $G = (V, E)$ be a graph. For any non-empty subset of vertices $S \subseteq V$, let $\partial S$ denote the **edge boundary** of $S$, which is the set of edges that have exactly one endpoint in $S$.
$$ \partial S = \{ (u, v) \in E \mid u \in S, v \notin S \} $$

The **edge expansion** of a subset $S$ is defined as:
$$ h_E(S) = \frac{|\partial S|}{|S|} $$

An **edge-expander** is a regular graph $G$ such that for every non-empty proper subset $S \subset V$ (i.e., $S \neq \emptyset$ and $S \neq V$), we have:
$$ h_E(S) \ge \beta $$
where $\beta > 0$ is a constant called the **edge-expansion constant**.

### 2.2 k-Regular Graphs

Most discussions of expanders focus on **regular graphs**, where every vertex has the same degree. Let $G$ be a $k$-regular graph. The total number of edges is $|E| = \frac{nk}{2}$.

For a $k$-regular graph, the edge expansion can be related to the size of the neighbourhood:
Let $N(S)$ be the set of neighbours of $S$. The number of edges leaving $S$ is $|\partial S|$.
We know that $\sum_{v \in S} \deg(v) = k|S|$. These edges are either within $S$ or go outside $S$.
$$ k|S| = |\partial S| + \sum_{v \in S} |N(v) \cap S| $$
This gives:
$$ |\partial S| = k|S| - \sum_{v \in S} |N(v) \cap S| $$

The edge expansion condition $h_E(S) \ge \beta$ becomes:
$$ \frac{|\partial S|}{|S|} \ge \beta $$
$$ k|S| - \sum_{v \in S} |N(v) \cap S| \ge \beta |S| $$
$$ |\partial S| \ge \beta |S| $$

### 2.3 Alternative Characterization via Degree

For a $k$-regular graph, the edge expansion property can be rephrased: for any $S \subseteq V$ with $1 \le |S| \le n/2$, we have $|\partial S| \ge \beta |S|$.
The condition for $|S| > n/2$ is symmetric because if $|S| > n/2$, then $|V \setminus S| < n/2$, and $|\partial S| = |\partial (V \setminus S)|$. So we only need to consider $|S| \le n/2$.

**Important Point:** For any subset $S$, $|\partial S| \ge k - \max_{v \in S} |N(v) \cap S|$. The expansion property requires this to be large.

### 2.4 Spectral Expansion (Connection to Eigenvalues)

A crucial insight into expanders comes from their **spectral properties**. The adjacency matrix $A$ of a $k$-regular graph has eigenvalues $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$.
For a $k$-regular graph, the largest eigenvalue is $\lambda_1 = k$ (corresponding to the all-ones vector).
The **spectral gap** is defined as $\lambda(G) = \max_{i \neq 1} |\lambda_i|$.

**Alon-Boppana Theorem:** A graph is an expander if and only if its largest eigenvalue (excluding the trivial one) is sufficiently small relative to the degree. More precisely, a $k$-regular graph with adjacency matrix $A$ is an expander if there exists a constant $\epsilon > 0$ such that for all $i > 1$, $|\lambda_i| \le (1-\epsilon)k$.

**Cheeger Inequality (for Edge Expansion):** For a $k$-regular graph $G$, the edge expansion $\beta$ is related to the spectral gap $\lambda(G)$ by:
$$ \frac{1}{2} \lambda(G) \le \beta \le \sqrt{2k \lambda(G)} $$
or more commonly stated as:
$$ \beta \ge \frac{k - \lambda(G)}{2} $$

This inequality is fundamental because it connects a combinatorial property (edge expansion) to an algebraic property (eigenvalues of the adjacency matrix). A small spectral gap implies good expansion.

**Why is this true?** The proof involves relating the expansion to the smallest non-zero eigenvalue of the graph Laplacian. For a $k$-regular graph, the smallest non-zero eigenvalue of the Laplacian is $\mu_{min} = k - \lambda(G)$. The Cheeger inequality for vertex expansion is $\frac{\mu_{min}}{2} \le h_V(G)$, and for edge expansion, it is related.

**Example:**
Consider a graph that is almost bipartite. It might have a large connected component and a small, weakly connected component. This would have a small spectral gap but poor expansion. Conversely, a graph with a large spectral gap is likely to be a good expander.

---

## 3. Constructions of Edge-Expanders

### 3.1 Existence via Probabilistic Method

One of the most powerful ways to show the existence of expanders is using the **probabilistic method**. We don't construct them explicitly yet, but we prove they exist with high probability.

**Setup:**
Consider a $k$-regular graph on $n$ vertices.

**Method:**
1.  **Randomly choose edges:** Pick $nk/2$ edges uniformly at random from all possible $\binom{n}{2}$ edges.
2.  **Enforce regularity:** This method doesn't guarantee regularity directly. A better approach is to fix the degree of each vertex to $k$.
3.  **Consider the "bad" subsets:** What if there's a subset $S$ with small expansion?
    For a specific subset $S$ of size $|S|=s$, the number of edges connecting $S$ to $V \setminus S$ is $|\partial S|$.
    The total number of edges connecting $S$ to $V \setminus S$ is at most $s(n-s)$.
    The probability that a randomly chosen edge connects $S$ to $V \setminus S$ is $\frac{s(n-s)}{\binom{n}{2}}$.
    The expected number of edges leaving $S$ in a random graph (not necessarily regular) is $s(n-s) \frac{m}{\binom{n}{2}}$, where $m$ is the number of edges.

A more rigorous probabilistic construction for $k$-regular expanders on $n$ vertices ($n$ is even, $k$ is even):

**Algorithm:**
1.  Create $n$ vertices, labeled $0, 1, \ldots, n-1$.
2.  For each vertex $i$, connect it to $k/2$ neighbours "to the right" and $k/2$ neighbours "to the left" modulo $n$.
    Specifically, vertex $i$ is connected to $(i \pm 1) \pmod n$, $(i \pm 2) \pmod n$, ..., $(i \pm k/2) \pmod n$.
    This creates a Cayley graph.

**Analysis of Expansion:**
To analyze the expansion, we can use the spectral properties. The eigenvalues of such Cayley graphs are well-understood. For specific constructions like the **Lubotzky-Phillips-Sarnak (LPS) graphs**, it can be shown that $\lambda(G) \le 2\sqrt{k-1} + \epsilon$, which leads to good expansion.

**Bounds on Expansion:**
The probabilistic method shows that for any $\epsilon > 0$, there exist $k$-regular expander graphs for any $k \ge 2$ with expansion $\beta \ge (1-\epsilon)k$. Specifically, for a fixed $k$, one can construct $k$-regular expanders with $\lambda(G) \le 2\sqrt{k-1} + o(1)$.

**Pigeonhole Principle Argument (Simple Bound):**
Let's consider a subset $S$. $|\partial S|$ is the number of edges leaving $S$.
The total number of edges is $m = nk/2$.
If a graph is not an expander, there exists $S$ with $|S|=s$ such that $|\partial S| < \beta s$.
The number of edges within $S$ is at most $\binom{s}{2}$.
The total number of edges incident to vertices in $S$ is $ks$.
These edges are either within $S$ or connect to $V \setminus S$.
$$ ks = \text{edges within } S + |\partial S| $$
$$ ks \le \binom{s}{2} + |\partial S| $$
If $|\partial S| < \beta s$, then
$$ ks < \binom{s}{2} + \beta s $$
$$ s(k-\beta) < \frac{s(s-1)}{2} $$
$$ k-\beta < \frac{s-1}{2} $$
If we want expansion for all $s \le n/2$, we need this to hold for all $s$.
This implies that $k-\beta$ must be less than $(n/2 - 1)/2 = n/4 - 1/2$.
This shows that if $\beta$ is small, then we can have small subsets $S$.
To have good expansion $\beta \approx k$, we need $k-\beta$ to be small.

### 3.2 Explicit Constructions

While the probabilistic method proves existence, explicit constructions are crucial for practical applications.

**1. Cayley Graphs:**
As mentioned, graphs constructed as Cayley graphs of groups are often good expanders.
Let $G$ be a finite group and $S$ be a symmetric set of generators (if $s \in S$, then $s^{-1} \in S$). The Cayley graph $Cay(G, S)$ has vertices as elements of $G$ and edges $(g, gs)$ for $g \in G, s \in S$. If $S$ has size $k$, the graph is $k$-regular.
Examples:
*   **Using $\mathbb{Z}_n$:** The $(i \pm j) \pmod n$ construction described earlier is a Cayley graph of $\mathbb{Z}_n$.
*   **Using $PSL_2(\mathbb{F}_p)$:** Margulis proved that certain Cayley graphs of $PSL_2(\mathbb{F}_p)$ are expanders. This was a landmark result showing explicit constructions.

**2. Algebraic Constructions (e.g., Lubotzky-Phillips-Sarnak Graphs):**
These are specific families of $k$-regular graphs that are proven to be expanders. They are constructed using number theoretic properties, often related to Galois representations and properties of primes. For a fixed degree $k$, these graphs have eigenvalues bounded by $2\sqrt{k-1} + o(1)$, which is the best possible bound.

**3. Superconcentrators:**
These are a type of graph that exhibits strong expansion properties, particularly for routing signals in a network. The term "superconcentrator" implies that any $m$ vertices in one partition are connected to $m$ distinct vertices in another partition.

---

## 4. Applications of Edge-Expanders

Edge-expanders are powerful tools in theoretical computer science. Here are some key applications:

### 4.1 Error Correcting Codes

*   **Low-Density Parity-Check (LDPC) Codes:** Expanders form the backbone of many LDPC codes. The Tanner graph of an LDPC code is often designed to be an expander. This structure ensures that local errors don't propagate uncontrollably, allowing for efficient decoding.
*   **Concatenated Codes:** Combining multiple layers of codes can achieve very low error rates. Expanders can be used in the inner or outer codes for efficient decoding.

### 4.2 Randomized Algorithms and Derandomization

*   **Pseudorandom Generators (PRGs):** Expanders can be used to construct PRGs for certain problems. By composing a weak pseudorandom source with an expander, one can obtain a stronger pseudorandom source.
*   **Derandomization:** Many randomized algorithms exist for problems where efficient deterministic solutions are unknown. Expanders can often be used to replace the random bits in these algorithms with a deterministic construction, leading to deterministic polynomial-time algorithms. For example, in network routing or sorting.

### 4.3 Computer Networks

*   **Robust Topologies:** Expanders provide highly resilient network structures. If some links fail, the connectivity remains strong.
*   **Efficient Routing:** Their expansion properties allow for efficient routing of information with low latency and contention.

### 4.4 Complexity Theory

*   **Gap Amplification:** Expanders are used to amplify small gaps in computational complexity classes, helping to prove lower bounds.
*   **Circuit Lower Bounds:** They play a role in proving lower bounds for certain types of Boolean circuits.

---

## 5. Practice Questions and Exercises

**Question 1:** Define the edge expansion $h_E(S)$ for a subset of vertices $S$ in a graph $G=(V,E)$. What does it mean for a $k$-regular graph to be an edge-expander?

**Answer 1:**
The edge expansion of a non-empty subset of vertices $S \subseteq V$ is defined as $h_E(S) = \frac{|\partial S|}{|S|}$, where $\partial S$ is the set of edges with exactly one endpoint in $S$.
A $k$-regular graph $G$ is an edge-expander if there exists a constant $\beta > 0$ such that for every non-empty proper subset $S \subset V$, $h_E(S) \ge \beta$.

---

**Question 2:** State the relationship between the spectral gap $\lambda(G)$ of a $k$-regular graph and its edge expansion $\beta$, according to the Cheeger inequality.

**Answer 2:**
The Cheeger inequality for a $k$-regular graph relates its edge expansion $\beta$ and its spectral gap $\lambda(G) = \max_{i \neq 1} |\lambda_i|$ (where $\lambda_i$ are eigenvalues of the adjacency matrix) by:
$$ \beta \ge \frac{k - \lambda(G)}{2} $$

---

**Question 3:**
Consider a path graph $P_n$ with $n$ vertices and $n-1$ edges, where vertices are $0, 1, \dots, n-1$ and edges are $(i, i+1)$ for $0 \le i < n-1$.
*   Is this graph regular? If not, what are the degrees?
*   Calculate the edge expansion for a subset $S = \{0, 1, \dots, s-1\}$ for $1 \le s \le n-1$.
*   Based on your calculation, would you consider $P_n$ to be an edge-expander?

**Answer 3:**
*   The graph $P_n$ is not regular. The endpoints (vertex 0 and vertex $n-1$) have degree 1, and all other vertices ($1, \dots, n-2$) have degree 2.
*   Let $S = \{0, 1, \dots, s-1\}$, where $1 \le s \le n-1$.
    The edges incident to vertices in $S$ are $(i, i+1)$ for $0 \le i < s$.
    The edges with at least one endpoint in $S$ are:
    *   Edges within $S$: $(i, i+1)$ for $0 \le i < s-1$. There are $s-1$ such edges.
    *   Edges connecting $S$ to $V \setminus S$: Only the edge $(s-1, s)$ has one endpoint in $S$ (vertex $s-1$) and the other in $V \setminus S$ (vertex $s$), provided $s < n$.
    So, $|\partial S| = 1$ for $1 \le s < n$.
    The edge expansion is $h_E(S) = \frac{|\partial S|}{|S|} = \frac{1}{s}$.
*   As $s$ can be as small as 1, $h_E(S)$ can be $1$. As $s$ increases, $h_E(S)$ decreases, approaching $1/(n-1)$ for $s=n-1$.
    For $P_n$ to be an edge-expander, there must exist a constant $\beta > 0$ such that $h_E(S) \ge \beta$ for *all* non-empty proper subsets $S$. Since $h_E(S) = 1/s$, for $s$ large enough (e.g., $s > 1/\beta$), the condition will fail. Thus, $P_n$ is **not** an edge-expander. It has poor expansion, especially for larger subsets.

---

**Question 4:**
Suppose we have a $k$-regular graph $G$ with $n$ vertices. If $S$ is a subset of vertices with $|S|=s$, and $|\partial S| < \delta s$ for some $\delta < k$.
Show that $s$ must be sufficiently large. (Hint: Consider the total number of edges incident to vertices in $S$.)

**Answer 4:**
In a $k$-regular graph, the sum of degrees of vertices in $S$ is $k \cdot s$. Each of these edges is either an internal edge (both endpoints in $S$) or an edge in the boundary $\partial S$.
Let $E(S, S)$ be the set of edges with both endpoints in $S$. Then $|E(S, S)| = \frac{1}{2} \sum_{v \in S} |N(v) \cap S|$.
We have $k s = 2|E(S, S)| + |\partial S|$.
Given $|\partial S| < \delta s$:
$k s < 2|E(S, S)| + \delta s$
$s(k - \delta) < 2|E(S, S)|$

Also, the number of internal edges $|E(S, S)|$ is at most the number of pairs of vertices in $S$, which is $\binom{s}{2} = \frac{s(s-1)}{2}$.
So, $s(k - \delta) < 2 \cdot \frac{s(s-1)}{2}$
$s(k - \delta) < s(s-1)$
Assuming $s > 0$, we can divide by $s$:
$k - \delta < s - 1$
$s > k - \delta + 1$

This shows that if the expansion is poor ($|\partial S| < \delta s$ with $\delta < k$), then the size of the subset $s$ cannot be arbitrarily small. It must be larger than $k-\delta+1$. If $k-\delta+1$ is small relative to $n$, this condition doesn't guarantee good expansion. A true expander requires $|\partial S| \ge \beta s$ for *all* $s \le n/2$.

---

## 6. Important Points to Remember

*   **Expanders are sparse but highly connected.** Their connectivity is measured by the expansion of small sets.
*   **Edge expansion $h_E(S) = |\partial S| / |S|$** quantifies how many edges leave a set $S$ relative to its size.
*   **The spectral gap $\lambda(G)$ is a key indicator of expansion.** A small spectral gap implies good expansion. The Cheeger inequality formalizes this.
*   The **probabilistic method** proves the existence of expanders, but explicit constructions are needed for applications.
*   **Cayley graphs and algebraic constructions** (like LPS graphs) provide explicit families of expanders.
*   Expanders have wide-ranging applications in **coding theory, algorithms, network design, and complexity theory**.
*   **Path graphs and cycle graphs are generally NOT expanders** as their expansion properties degrade for larger subsets.

---
