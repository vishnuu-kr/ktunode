---
title: "vertex-expanders"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 3: Expanders "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c407"
status: "completed"
scrapedAt: "2026-05-20T17:11:59.922Z"
---
# Module 3: Expanders - Vertex-Expanders

## 1. Introduction to Expanders and Vertex-Expanders

### 1.1 What are Expanders?

*   **High-Level Idea:** Expanders are sparse graphs that have strong connectivity properties. Despite having relatively few edges (sparse), they behave like dense graphs in terms of how "connected" different parts of the graph are.
*   **Contrast with Dense Graphs:** Dense graphs (like complete graphs) are highly connected but have many edges. Expanders offer a way to achieve good connectivity with a minimal number of edges.
*   **Applications:** Expanders are fundamental building blocks in many areas of computer science, including:
    *   **Error-correcting codes:** Designing codes that can recover from errors.
    *   **Network design:** Creating robust and efficient communication networks.
    *   **Randomized algorithms:** Providing pseudorandomness and ensuring efficient mixing.
    *   **Complexity theory:** Proving lower bounds for computational problems.

### 1.2 What are Vertex-Expanders?

*   **Focus:** Vertex-expanders specifically deal with the connectivity of *sets of vertices*. They measure how well a small set of vertices can connect to the rest of the graph.
*   **Analogy:** Imagine a social network. A vertex-expander would be a network where even a small group of people (vertices) has many connections to people outside their group.

### 1.3 Formal Definition of Vertex-Expanders

Let $G = (V, E)$ be a graph. For any non-empty proper subset of vertices $S \subset V$ (meaning $S \neq \emptyset$ and $S \neq V$), let $\partial S$ be the set of vertices in $V \setminus S$ that are adjacent to at least one vertex in $S$. This set is called the **boundary** or **cut** of $S$.

A graph $G$ is a **$(k, c)$-vertex-expander** if for every subset of vertices $S \subset V$ with $|S| \le |V|/2$, we have $|\partial S| \ge c|S|$.

*   **$k$**: This parameter often relates to the minimum degree of the graph (though it's not always strictly the minimum degree itself, but a lower bound related to it). A graph with a minimum degree of $k$ is a natural candidate for being a vertex-expander.
*   **$c$**: This is the **expansion rate**. It tells us that the boundary of any small set of vertices is at least $c$ times the size of the set itself. A larger $c$ indicates better expansion.
*   **$|S| \le |V|/2$**: This condition ensures we are focusing on "small" sets of vertices. If a set is larger than half the graph, its complement is smaller, and we can analyze the expansion of the complement.

**Alternative Definition (using degree):**

A graph $G$ with minimum degree $\delta$ is a **$(k, c)$-vertex-expander** if for every subset of vertices $S \subset V$ with $|S| \le k$, we have $|\partial S| \ge c|S|$.

*   This definition is often used when $k$ is related to the minimum degree. For instance, if the minimum degree is $\delta$, we might consider $k = \delta$.

### 1.4 Key Concepts and Definitions Summary

*   **Graph $G=(V, E)$**: A set of vertices $V$ and a set of edges $E$ connecting pairs of vertices.
*   **Proper Subset $S \subset V$**: $S$ is a subset of $V$, but $S \neq \emptyset$ and $S \neq V$.
*   **Boundary $\partial S$**: The set of vertices in $V \setminus S$ adjacent to at least one vertex in $S$.
*   **$(k, c)$-vertex-expander**: A graph where for every $S \subset V$ with $|S| \le |V|/2$, $|\partial S| \ge c|S|$.

## 2. Properties and Significance of Vertex-Expanders

### 2.1 Why are Vertex-Expanders Important?

*   **Connectivity from Sparsity:** They demonstrate that strong connectivity can be achieved with very few edges. This is crucial for efficient and scalable designs.
*   **Robustness:** Graphs with good expansion properties are less likely to be disconnected by removing a few vertices or edges.
*   **Efficient Information Spreading:** In networks, expansion ensures that information or signals can spread quickly throughout the graph.

### 2.2 Relationship with Other Expansion Notions (Brief Mention)

*   **Edge-Expanders:** Focus on the size of the boundary of sets of *edges*. A graph is an edge-expander if for every set of edges $F$, the number of vertices adjacent to edges in $F$ is large.
*   **Spectral Expanders:** Relate expansion properties to the eigenvalues of the graph's adjacency matrix. The "second largest eigenvalue" (or spectral gap) is a key indicator of expansion.

**Important Point to Remember:** While related, vertex-expansion and edge-expansion are distinct properties. A graph can be a good vertex-expander without being a good edge-expander, and vice-versa.

### 2.3 Examples of Graphs and their Expansion Properties

*   **Path Graph $P_n$**:
    *   Consider a path $1-2-3-...-n$.
    *   Let $S = \{1\}$. Then $\partial S = \{2\}$, so $|\partial S| = 1$. $|S|=1$. The ratio is $1/1 = 1$.
    *   Let $S = \{1, 2, ..., m\}$ for $m < n/2$. The boundary is $\partial S = \{m+1\}$. So $|\partial S|=1$.
    *   This shows path graphs are **poor** vertex-expanders. The boundary size doesn't grow with $|S|$.

*   **Cycle Graph $C_n$**:
    *   Consider a cycle $1-2-...-n-1$.
    *   Let $S = \{1, 2, ..., m\}$ for $m < n/2$. The boundary is $\partial S = \{m+1, n\}$. So $|\partial S| = 2$.
    *   The ratio is $2/m$. As $m$ increases, this ratio decreases.
    *   Cycle graphs are **better** than path graphs but still not strong expanders.

*   **Complete Graph $K_n$**:
    *   Let $S$ be any proper subset of $V$. Then $V \setminus S$ contains vertices not in $S$.
    *   Every vertex in $V \setminus S$ is connected to every vertex in $S$.
    *   So, $\partial S = V \setminus S$.
    *   For $|S| \le |V|/2$, $|V \setminus S| \ge |V|/2$.
    *   We need $|\partial S| \ge c|S|$. This means $|V \setminus S| \ge c|S|$.
    *   Since $|V \setminus S|$ is at least $|S|$, complete graphs are excellent vertex-expanders (with a large $c$ if we choose $|S|$ small enough, or $c \approx 1$ if we consider $|S|$ closer to $|V|/2$).
    *   **However**, complete graphs are very dense ($O(n^2)$ edges), which is often what we want to avoid.

*   **Regular Graphs (e.g., $d$-regular graphs)**:
    *   These are graphs where every vertex has degree $d$.
    *   A $d$-regular graph can be a good vertex-expander. The expansion property depends on how the edges are distributed.

### 2.4 Explicit Constructions of Vertex-Expanders

Constructing graphs that are provably vertex-expanders with a certain expansion rate is a significant area of research.

*   **Algebraic Constructions:** Many of the most famous explicit constructions of expanders rely on number theory and algebra.
    *   **Lubotzky-Phillips-Sarnak (LPS) graphs:** These are Ramanujan graphs (a type of spectral expander) and are known to be good vertex-expanders. They are constructed using quaternion algebras and matrix groups.
    *   **Ramanujan Graphs:** Graphs whose adjacency matrix eigenvalues are well-bounded. They exhibit strong expansion properties.

*   **Probabilistic Methods:** The probabilistic method is used to prove the *existence* of expanders.
    *   **Theorem (Erdos):** For any $\epsilon > 0$, there exists a graph with $n$ vertices and $O(n)$ edges that is a $(c, \epsilon)$-vertex-expander for some constant $c$. This theorem shows that "randomly" chosen sparse graphs are likely to be expanders.
    *   **How it works (simplified):** Consider a random $d$-regular graph. The probability that a small set $S$ has a small boundary is low. By the union bound, the probability that *any* small set has a small boundary is also low, implying the existence of a graph where all small sets have large boundaries.

**Important Point to Remember:** While the probabilistic method proves existence, it doesn't give an explicit construction. Algebraic constructions are needed for practical use.

## 3. Analyzing Vertex Expansion

### 3.1 The Role of Degree

*   **Lower Bound:** The degree of vertices plays a crucial role. If a vertex $v \in S$, its neighbors can be in $S$ or in $\partial S$.
*   **Minimum Degree $\delta$**: For any vertex $v \in S$, at least one of its neighbors must be in $\partial S$ if $S$ is not the entire graph.
*   **If $v \in S$ has $d(v)$ neighbors:** At most $d(v)-1$ neighbors can also be in $S$ (if we assume $S$ does not contain all neighbours of $v$). If $v$ has $k$ neighbours in $S$, then $d(v)-k$ neighbours must be in $\partial S$.
*   **Summing over $S$:** Summing the degrees of vertices in $S$: $\sum_{v \in S} d(v) = \sum_{v \in S} |N(v) \cap S| + \sum_{v \in S} |N(v) \cap \partial S|$.
*   $N(v)$ is the set of neighbors of $v$.
*   $|\partial S| = | \cup_{v \in S} (N(v) \setminus S) |$.

### 3.2 Lower Bounds on Expansion

*   **Simple Bound:** If $G$ is a $d$-regular graph, and $S$ is a proper subset of $V$, then any vertex $v \in S$ has $d$ neighbors. If $v$ has $i$ neighbors in $S$, it has $d-i$ neighbors in $\partial S$.
    *   $\sum_{v \in S} (d - |N(v) \cap S|) = \sum_{v \in S} |N(v) \cap \partial S|$.
    *   The right side counts edges between $S$ and $\partial S$, but each edge is counted once for each endpoint in $S$. So, $\sum_{v \in S} |N(v) \cap \partial S| = |\text{edges between S and } \partial S|$.
    *   The total number of edges incident to $S$ is $\sum_{v \in S} d(v) = |S| \cdot d$.
    *   These edges are either within $S$ or between $S$ and $\partial S$.
    *   Let $E(S, \partial S)$ be the number of edges between $S$ and $\partial S$.
    *   $|S| \cdot d = \sum_{v \in S} |N(v) \cap S| + E(S, \partial S)$.
    *   The number of edges within $S$ is at most $|S| \cdot (\text{max degree within S})$.
    *   This doesn't directly give $|\partial S|$ efficiently.

*   **Using the definition:** For any $S \subset V$, $S \neq \emptyset$, $S \neq V$:
    *   $|\partial S| \ge \frac{\sum_{v \in S} (d(v) - |N(v) \cap S|)}{|V \setminus S|}$. This isn't quite right.

*   **Correct Approach using degrees:**
    Consider a set $S$. Let $E(S, V \setminus S)$ be the set of edges connecting $S$ to $V \setminus S$. Then $|\partial S| = |\{v \in V \setminus S \mid \exists u \in S, (u,v) \in E\}|$.
    The number of edges between $S$ and $V \setminus S$ is at least $|\partial S| \times 1$ (since each vertex in $\partial S$ has at least one neighbor in $S$).
    On the other hand, the sum of degrees of vertices in $S$ is $\sum_{v \in S} d(v)$.
    These edges are either within $S$ or connect $S$ to $V \setminus S$.
    Let $E_{in}(S)$ be the number of edges with both endpoints in $S$.
    $\sum_{v \in S} d(v) = 2 E_{in}(S) + E(S, V \setminus S)$.
    If $G$ is $d$-regular, $\sum_{v \in S} d(v) = |S| \cdot d$.
    So, $|S| \cdot d = 2 E_{in}(S) + E(S, V \setminus S)$.
    We know $E(S, V \setminus S) \ge |\partial S|$ (since each vertex in $\partial S$ is connected to at least one vertex in S).
    Therefore, $|S| \cdot d \ge |\partial S|$. This gives a trivial lower bound of $d$ if $|S|=1$.

    **More refined bound:**
    $E(S, V \setminus S) \le |S| \cdot |\text{max degree of vertices in } V \setminus S|$.
    $|S| \cdot d = 2 E_{in}(S) + E(S, V \setminus S)$.
    $|\partial S| = |\{v \in V \setminus S \mid \exists u \in S, (u,v) \in E\}|$.
    Let's use the fact that for any $v \in \partial S$, it has at least one neighbor in $S$.
    So, $E(S, V \setminus S) \ge |\partial S|$.
    Also, $E(S, V \setminus S) \le \sum_{v \in S} d(v) = |S|d$.
    This implies $|\partial S| \le |S|d$.

    **The key insight comes from considering the complement.**
    Let $S$ be a subset with $|S| \le |V|/2$.
    We want to show $|\partial S| \ge c|S|$.
    Consider the set $S$. The number of edges connecting $S$ to $V \setminus S$ is $E(S, V \setminus S)$.
    We know $E(S, V \setminus S) \le |S| \cdot d$.
    Also, $E(S, V \setminus S) = \sum_{v \in \partial S} |N(v) \cap S|$.
    Since each vertex in $\partial S$ is connected to $S$, $|N(v) \cap S| \ge 1$.
    If $G$ is $d$-regular, then $E(S, V \setminus S) \le \sum_{v \in \partial S} d = |\partial S| d$.
    So, $|\partial S| \cdot d \ge E(S, V \setminus S)$.
    We have $|S| \cdot d = 2 E_{in}(S) + E(S, V \setminus S)$.
    $E(S, V \setminus S) = |S| \cdot d - 2 E_{in}(S)$.
    $|\partial S| \ge E(S, V \setminus S) / d = (|S| \cdot d - 2 E_{in}(S)) / d = |S| - 2 E_{in}(S) / d$.
    This inequality isn't always helpful if $E_{in}(S)$ is large.

    **The spectral approach is more powerful for proving strong bounds.**

### 3.3 Spectral Gap and Vertex Expansion

*   **Adjacency Matrix:** Let $A$ be the adjacency matrix of $G$.
*   **Eigenvalues:** Let $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$ be the eigenvalues of $A$. For a $d$-regular graph, $\lambda_1 = d$.
*   **Spectral Gap:** The spectral gap is defined as $\lambda_2$. For a $d$-regular graph, the spectral gap is $d - \lambda_2$.
*   **Alon-Boppana Bound:** There exist infinite families of $d$-regular graphs such that their spectral gap is at least $2\sqrt{d^2 - 1} - o(d)$, which is close to $2\sqrt{d-1}$. This is a remarkable result showing that sparse graphs can have large spectral gaps.
*   **Relationship (Chen's Theorem for Vertex Expansion):** For a $d$-regular graph $G$, if $\lambda_2 \le \alpha d$ for some $\alpha < 1$, then $G$ is a $(d, 1-\alpha - \epsilon)$-vertex-expander for any $\epsilon > 0$.
    *   Specifically, $|\partial S| \ge \left( \frac{d - \lambda_2}{2d} \right) |S|$ for $|S| \le |V|/2$.
    *   This means a graph with a small $\lambda_2$ (relative to $d$) is a good vertex-expander.

**Important Point to Remember:** A large spectral gap (small $\lambda_2$) is equivalent to good vertex expansion for regular graphs.

## 4. Applications of Vertex-Expanders

### 4.1 Expanders in Network Design

*   **Robustness:** Networks based on expander graphs are resilient to node or link failures. The "gap" in connectivity is large, so removing a few nodes doesn't disconnect the network significantly.
*   **Efficiency:** They allow for efficient communication. For example, broadcasting a message can be done quickly.
*   **Scalability:** Expanding networks can scale well, maintaining connectivity properties as the network grows.

### 4.2 Expanders in Computing and Theoretical Computer Science

*   **Pseudorandomness:** Expanders are "almost random" graphs. They can be used to construct pseudorandom generators (PRGs) from sources of randomness.
*   **Derandomization:** Used to convert randomized algorithms into deterministic ones by replacing random choices with deterministic paths through an expander graph.
*   **Complexity Theory:**
    *   **Graph Homomorphism:** Used to prove lower bounds for graph homomorphism problems.
    *   **Circuit Complexity:** Used in the construction of small circuits for various computational tasks.

### 4.3 Superconcentrators

*   **Definition:** Superconcentrators are directed graphs where for any two disjoint subsets of vertices $A$ and $B$, there are $|A|$ vertex-disjoint paths from $A$ to $B$.
*   **Expander Connection:** Expanders are used in the construction of superconcentrators. By carefully arranging expander graphs, one can build structures that guarantee the existence of many disjoint paths.

## 5. Practice Questions and Exercises

---

### **Question 1:**

Let $G=(V,E)$ be a graph. Define the boundary of a set $S \subset V$, denoted by $\partial S$.

**Answer:**
The boundary of $S$, denoted by $\partial S$, is the set of vertices in $V \setminus S$ that are adjacent to at least one vertex in $S$. Formally, $\partial S = \{v \in V \setminus S \mid \exists u \in S, (u,v) \in E\}$.

---

### **Question 2:**

What does it mean for a graph $G$ to be a $(k, c)$-vertex-expander?

**Answer:**
A graph $G$ is a $(k, c)$-vertex-expander if for every subset of vertices $S \subset V$ such that $|S| \le k$, the size of its boundary is at least $c|S|$, i.e., $|\partial S| \ge c|S|$. Often, $k$ is taken to be $|V|/2$.

---

### **Question 3:**

Consider a path graph $P_4$ with vertices $V=\{1, 2, 3, 4\}$ and edges $E=\{(1,2), (2,3), (3,4)\}$.
Is $P_4$ a vertex-expander? If so, what are some possible values for $k$ and $c$?

**Answer:**
Let's test some subsets $S$:
*   $S = \{1\}$. $|S|=1$. $V \setminus S = \{2,3,4\}$. Neighbors of $1$ are $\{2\}$. So $\partial S = \{2\}$. $|\partial S| = 1$. Ratio $|\partial S|/|S| = 1/1 = 1$.
*   $S = \{1, 2\}$. $|S|=2$. $V \setminus S = \{3,4\}$. Neighbors of $1$ are $\{2\}$. Neighbors of $2$ are $\{1,3\}$. Neighbors of $S$ in $V \setminus S$ are $\{3\}$. So $\partial S = \{3\}$. $|\partial S| = 1$. Ratio $|\partial S|/|S| = 1/2$.
*   $S = \{4\}$. $|S|=1$. $\partial S = \{3\}$. $|\partial S| = 1$. Ratio is 1.
*   $S = \{3, 4\}$. $|S|=2$. $V \setminus S = \{1,2\}$. Neighbors of $3$ are $\{2,4\}$. Neighbors of $4$ are $\{3\}$. Neighbors of $S$ in $V \setminus S$ are $\{2\}$. So $\partial S = \{2\}$. $|\partial S| = 1$. Ratio $|\partial S|/|S| = 1/2$.

For $S=\{1,2\}$, $|S|=2$ and $|\partial S|=1$. If we consider $k \ge 2$, then for $|S|=2$, we need $|\partial S| \ge c \cdot 2$. Since $|\partial S|=1$, we need $1 \ge 2c$, so $c \le 1/2$.
If we choose $S=\{1,2,3\}$, $|S|=3$. $V \setminus S = \{4\}$. Neighbors of $S$ in $V \setminus S$ are $\{4\}$. $\partial S = \{4\}$. $|\partial S|=1$. Ratio $|\partial S|/|S| = 1/3$.
For $S=\{1,2,3\}$, $|S|=3$. If $k \ge 3$, we need $|\partial S| \ge c \cdot 3$. Since $|\partial S|=1$, we need $1 \ge 3c$, so $c \le 1/3$.

Since the ratio $|\partial S|/|S|$ decreases as $|S|$ increases, the path graph $P_4$ does not have a constant expansion rate $c > 0$ for all $|S|$ up to $|V|/2$.
So, $P_4$ is **not a good vertex-expander**. It is a $(0,0)$-vertex-expander (trivially), but not for any positive $c$.

---

### **Question 4:**

Explain why a graph with a large spectral gap is likely to be a good vertex-expander.

**Answer:**
For a $d$-regular graph, the spectral gap is $d - \lambda_2$, where $\lambda_2$ is the second largest eigenvalue. Alon's theorem relates the spectral gap to vertex expansion. Specifically, it states that for a $d$-regular graph, for any set $S$, $|\partial S| \ge \frac{d - \lambda_2}{2d} |S|$.
If the spectral gap $d - \lambda_2$ is large, then the ratio $\frac{d - \lambda_2}{2d}$ is also large (approaching 1/2 as $\lambda_2$ approaches 0, and can be larger if $\lambda_2$ is negative). This means that the size of the boundary $|\partial S|$ is a significant fraction of the size of the set $S$, which is the definition of good vertex expansion. A small $\lambda_2$ (relative to $d$) implies strong connectivity properties, ensuring that even small sets of vertices have many connections to the rest of the graph.

---

### **Question 5:**

What is the main limitation of using complete graphs as expanders in practice?

**Answer:**
The main limitation is their **density**. Complete graphs $K_n$ have $O(n^2)$ edges. While they exhibit excellent expansion properties, this quadratic number of edges makes them impractical for large-scale applications where sparsity ($O(n)$ edges) is desired for efficiency and scalability.

---

## 6. Important Points to Remember

*   **Vertex-expansion** quantifies how well small sets of vertices connect to the rest of the graph.
*   A **$(k, c)$-vertex-expander** guarantees that for any set $S$ with $|S| \le k$, its boundary $|\partial S|$ is at least $c|S|$.
*   **Sparse graphs** with good expansion properties are crucial for efficient and robust designs in networks and algorithms.
*   **Path graphs are poor expanders**, while **complete graphs are excellent but dense**.
*   **Algebraic constructions** (like LPS graphs) provide explicit families of sparse vertex-expanders.
*   The **probabilistic method** proves the existence of expanders but doesn't give explicit constructions.
*   The **spectral gap** of a regular graph (related to its second largest eigenvalue) is a key indicator of its vertex expansion properties. A larger spectral gap implies better expansion.
*   Expanders have applications in **network design, derandomization, complexity theory, and superconcentrators**.
