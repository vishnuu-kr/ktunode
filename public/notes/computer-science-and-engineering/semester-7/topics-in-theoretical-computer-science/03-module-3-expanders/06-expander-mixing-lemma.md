---
title: "Expander Mixing Lemma"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 3: Expanders "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c409"
status: "completed"
scrapedAt: "2026-05-20T17:12:01.795Z"
---
# Module 3: Expanders - Expander Mixing Lemma

## Introduction

This module delves into the fascinating world of expanders, a class of graphs with remarkable properties related to connectivity and mixing. We will begin by understanding the fundamental concept of expanders and then focus on a crucial tool for analyzing their behavior: the **Expander Mixing Lemma**. This lemma provides powerful bounds on how quickly random walks on expander graphs converge to a stationary distribution, a property fundamental to many applications of expanders.

---

## Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand the definition of expander graphs and their key properties.**
*   **Define and explain the Expander Mixing Lemma.**
*   **Identify the significance and applications of the Expander Mixing Lemma.**
*   **Apply the Expander Mixing Lemma to analyze the mixing time of random walks on expander graphs.**
*   **Relate the Expander Mixing Lemma to the spectral gap of a graph.**

---

## 1. Expander Graphs: A Quick Recap

Before diving into the Expander Mixing Lemma, let's briefly revisit the definition and core ideas of expander graphs.

### 1.1 Definition of Expanders

An **expander graph** is a graph that is "highly connected" in a specific, quantitative sense. Intuitively, it's a graph where any small set of vertices has a large neighborhood.

**Formal Definition:**

A **family of $(n, d, \epsilon)$-expanders** is a sequence of $d$-regular graphs $G_n = (V_n, E_n)$ with $|V_n| = n$, where $d$ is a constant, such that for any subset of vertices $S \subseteq V_n$, the size of its neighborhood $N(S)$ satisfies:

$|N(S)| \ge (1 + \epsilon)|S|$

where $N(S) = \{v \in V_n \setminus S \mid \exists u \in S \text{ such that } (u, v) \in E_n\}$ is the set of vertices adjacent to $S$ but not in $S$. $\epsilon > 0$ is a constant that quantifies the expansion property.

**Key Properties:**

*   **High Connectivity:** Expander graphs are "almost" fully connected.
*   **Lack of Bottlenecks:** They avoid having small cuts that disconnect the graph.
*   **Efficient Mixing:** Random walks on expanders tend to mix quickly, meaning they reach a state where each vertex is visited with roughly equal probability.

---

## 2. The Expander Mixing Lemma

The Expander Mixing Lemma is a fundamental result that quantifies how quickly a random walk on an expander graph "mixes" or converges to its stationary distribution. It relates the probability of a random walk starting at one vertex and ending at another vertex after a certain number of steps to the stationary distribution.

### 2.1 Setting the Stage: Random Walks on Graphs

Consider a $d$-regular graph $G=(V, E)$. A **random walk** on $G$ is a process where we start at some vertex $v_0$, and at each step, we move to a randomly chosen neighbor of the current vertex.

*   **Transition Matrix ($P$):** Let $P$ be the transition matrix of the random walk. $P_{uv} = 1/d$ if $(u, v) \in E$, and $P_{uv} = 0$ otherwise.
*   **Stationary Distribution ($\pi$):** For a connected, undirected graph, the stationary distribution of a random walk is uniform: $\pi_v = 1/n$ for all $v \in V$, where $n = |V|$. This means that in the long run, the probability of being at any vertex $v$ is $1/n$.
*   **Distribution After $k$ Steps:** If $\mu_0$ is the initial probability distribution over vertices, then the distribution after $k$ steps is $\mu_k = \mu_0 P^k$.

### 2.2 The Expander Mixing Lemma Statement

The Expander Mixing Lemma provides a bound on the difference between the probability of transitioning from vertex $u$ to vertex $v$ in $k$ steps and the stationary probability.

**Lemma Statement:**

Let $G=(V,E)$ be a $d$-regular graph with $n$ vertices. Let $P$ be its transition matrix. For any two vertices $u, v \in V$ and any number of steps $k \ge 1$, the following inequality holds:

$| (P^k)_{uv} - \frac{1}{n} | \le \lambda^k \cdot \max_{w} | \pi_w - \frac{1}{n} |$

where:

*   $(P^k)_{uv}$ is the probability of transitioning from vertex $u$ to vertex $v$ in exactly $k$ steps.
*   $\frac{1}{n}$ is the stationary probability of being at vertex $v$.
*   $\lambda$ is the **second largest eigenvalue** (in magnitude) of the transition matrix $P$. This is often referred to as the **spectral gap**.
*   $\pi_w$ is the stationary distribution at vertex $w$ (which is $1/n$ in our case for a connected graph).

**Simplified and More Common Form for Expander Graphs:**

For expander graphs, we often consider the deviation from the uniform distribution for any initial distribution. The lemma can be stated in terms of total variation distance, but a more intuitive form is:

Let $G$ be a $d$-regular graph with $n$ vertices and spectral gap $\lambda$ (i.e., $| \mu_i | \le \lambda$ for all eigenvalues $\mu_i$ except the largest one, which is 1).
Then for any vertex $v$ and any distribution $\nu$ on $V$, let $\nu P^k$ be the distribution after $k$ steps. The total variation distance between $\nu P^k$ and the uniform distribution $\mathbf{u} = (1/n, \ldots, 1/n)$ satisfies:

$||\nu P^k - \mathbf{u}||_{TV} \le \sqrt{2 \frac{1-\lambda}{1+\lambda}} \cdot \lambda^k \cdot ||\nu - \mathbf{u}||_{TV}$

A more direct consequence of the spectral gap, and often what people refer to when discussing the "mixing lemma," is:

For any two vertices $u, v$ and any $k \ge 0$:

$| (P^k)_{uv} - \frac{1}{n} | \le \left( \frac{\sqrt{d_{u}d_{v}}}{d} \right) \left( \frac{\lambda}{d} \right)^k$

where $d_u, d_v$ are the degrees of $u, v$ (which are $d$ for $d$-regular graphs). For $d$-regular graphs, this simplifies to:

$| (P^k)_{uv} - \frac{1}{n} | \le \left( \frac{d}{d} \right) \left( \frac{\lambda}{d} \right)^k = \left( \frac{\lambda}{d} \right)^k$

**Key Insight:** The term $\frac{\lambda}{d}$ is crucial. For expander graphs, the spectral gap $\lambda$ is significantly smaller than $d$. This implies that $\frac{\lambda}{d}$ is a constant less than 1, and as $k$ increases, $\left( \frac{\lambda}{d} \right)^k$ decays exponentially.

**Intuitively:** The lemma states that after a number of steps $k$ proportional to $\log n / (\text{gap})$, the probability of being at any vertex $v$ starting from any vertex $u$ is very close to the uniform probability $1/n$.

### 2.3 The Spectral Gap and Its Importance

The **spectral gap** of a graph is a measure of its connectivity. It's related to the eigenvalues of the graph Laplacian or the transition matrix.

*   **Eigenvalues of the Transition Matrix $P$:** For a $d$-regular graph, the eigenvalues of $P$ are related to the eigenvalues of the adjacency matrix $A$ by $\mu_i = \lambda_i / d$, where $\lambda_i$ are the eigenvalues of $A$. The eigenvalues of $A$ for a connected graph are in the range $[-d, d]$.
*   **Second Largest Eigenvalue ($\lambda$):** The largest eigenvalue is always $d$ (corresponding to the all-ones eigenvector). The spectral gap is defined as $d - \lambda_{max\_abs}$, where $\lambda_{max\_abs}$ is the largest eigenvalue in magnitude other than $d$. For undirected graphs, this is often denoted as $\lambda$, and the bound becomes $|(P^k)_{uv} - 1/n| \le ( \lambda / d )^k$.
*   **Relationship to Expansion:** A non-zero spectral gap is equivalent to the graph being an expander. The larger the spectral gap (i.e., the smaller $\lambda/d$), the better the expansion properties and the faster the mixing.

### 2.4 Significance and Applications

The Expander Mixing Lemma has profound implications and numerous applications:

*   **Rapid Mixing of Random Walks:** It guarantees that random walks on expander graphs converge to the stationary distribution in a logarithmic number of steps (with respect to $n$). This is much faster than arbitrary graphs, where mixing can take $O(n^2)$ steps.
*   **Probabilistic Algorithms:** Many randomized algorithms rely on random walks for sampling from distributions or performing computations. The lemma ensures the efficiency of these algorithms when applied to expander graphs. Examples include:
    *   **Sampling from the cut polytope.**
    *   **Computing determinants of matrices.**
    *   **Constructing pseudorandom generators.**
*   **Error-Correcting Codes:** Expanders are used to construct powerful error-correcting codes (e.g., explicit constructions of codes with near-optimal parameters).
*   **Distributed Computing:** They are useful for designing efficient communication protocols in distributed systems.
*   **Computer Science Theory:** They are fundamental building blocks in areas like complexity theory and cryptography.

---

## 3. Applying the Expander Mixing Lemma: Mixing Time

The lemma allows us to estimate the **mixing time** of a random walk, which is the number of steps required for the walk to become "close" to the stationary distribution.

**Definition of Mixing Time:**

The mixing time, often denoted by $t_{mix}(G)$, is the minimum $k$ such that for all initial distributions $\nu$, the total variation distance between $\nu P^k$ and the uniform distribution $\mathbf{u}$ is at most a small constant $\epsilon$.

$t_{mix}(G) = \min \{k \mid ||\nu P^k - \mathbf{u}||_{TV} \le \epsilon \text{ for all } \nu\}$

**Using the Lemma to Bound Mixing Time:**

From the lemma $|(P^k)_{uv} - 1/n| \le (\lambda/d)^k$, we want to find $k$ such that $(\lambda/d)^k$ is small, say $1/n^c$ for some constant $c$.

$(\lambda/d)^k \le \frac{1}{n^c}$

Taking the logarithm of both sides:

$k \log(\lambda/d) \le -c \log n$

$k \ge \frac{-c \log n}{\log(\lambda/d)}$

Since $\log(\lambda/d)$ is negative, and we want to bound $k$ from above, we get:

$k \approx \frac{\log n}{-\log(\lambda/d)} \approx O(\log n / (1 - \lambda/d))$

For expander graphs, $(1 - \lambda/d)$ is a constant, so the mixing time is $O(\log n)$. This is a significant improvement over general graphs.

---

## 4. Examples

Let's consider some intuitive examples to illustrate the concept.

### 4.1 Example: A Complete Graph $K_n$

*   **Properties:** A complete graph $K_n$ is $d$-regular with $d = n-1$. It has excellent connectivity.
*   **Eigenvalues:** The eigenvalues of $K_n$ are $n-1$ (once) and $-1$ ($n-1$ times).
*   **Spectral Gap:** For the transition matrix, the eigenvalues are $1$ (once) and $-1/(n-1)$ ($n-1$ times). So, $\lambda = 1/(n-1)$.
*   **$\lambda/d$:** $\frac{\lambda}{d} = \frac{1/(n-1)}{n-1} = \frac{1}{(n-1)^2}$.
*   **Mixing Time Bound:** The mixing time is roughly $O(\log n / (1 - 1/(n-1)^2)) = O(\log n)$. This indicates very fast mixing, as expected for a complete graph.

### 4.2 Example: A Path Graph $P_n$

*   **Properties:** A path graph with $n$ vertices is not regular. The endpoints have degree 1, and internal vertices have degree 2. For simplicity, let's consider a cycle graph $C_n$ which is $2$-regular.
*   **Cycle Graph $C_n$:** $d=2$. The eigenvalues of the adjacency matrix of $C_n$ are $2 \cos(2\pi j/n)$ for $j=0, \ldots, n-1$.
*   **Second Largest Eigenvalue:** The second largest eigenvalue (in magnitude) is $2 \cos(2\pi/n) \approx 2(1 - \frac{1}{2}(\frac{2\pi}{n})^2) = 2 - \frac{4\pi^2}{n^2}$.
*   **Spectral Gap:** For the transition matrix, the eigenvalues are $\cos(2\pi j/n)$. The largest is 1, and the second largest (in magnitude) is $\cos(2\pi/n) \approx 1 - \frac{2\pi^2}{n^2}$. So, $\lambda \approx 1 - \frac{2\pi^2}{n^2}$.
*   **$\lambda/d$:** $\frac{\lambda}{d} \approx \frac{1 - 2\pi^2/n^2}{2} \approx 1 - \frac{\pi^2}{n^2}$.
*   **Mixing Time Bound:** The mixing time is roughly $O(\log n / (1 - (1 - \pi^2/n^2))) = O(\log n / (\pi^2/n^2)) = O(n^2 \log n)$. This is much slower than for expanders and indicates poorer mixing.

**Expander Graphs vs. Cycle Graphs:** Expander graphs achieve $O(\log n)$ mixing time because their spectral gap is bounded away from 1, meaning $\lambda/d$ is a constant significantly less than 1. For the cycle graph, $\lambda/d$ approaches 1 as $n$ grows, leading to slower mixing.

---

## 5. Practice Questions and Answers

**Question 1:**

Define what it means for a graph to be an expander. What property do expanders possess that makes them "highly connected"?

**Answer 1:**

A graph is an expander if any small set of vertices has a neighborhood that is significantly larger than the set itself. Formally, for a $d$-regular graph on $n$ vertices to be an $(n, d, \epsilon)$-expander, every subset of vertices $S$ must satisfy $|N(S)| \ge (1 + \epsilon)|S|$, where $N(S)$ is the set of neighbors of $S$ outside of $S$. This property quantifies their high connectivity by ensuring that there are no "bottlenecks" or sparse cuts.

**Question 2:**

State the Expander Mixing Lemma in terms of the transition probability $(P^k)_{uv}$ and the stationary distribution. What is the significance of the term $\lambda/d$?

**Answer 2:**

The Expander Mixing Lemma states that for a $d$-regular graph with spectral gap $\lambda$, the difference between the probability of transitioning from vertex $u$ to vertex $v$ in $k$ steps and the uniform probability $1/n$ is bounded by:

$| (P^k)_{uv} - \frac{1}{n} | \le \left( \frac{\lambda}{d} \right)^k$

The term $\lambda/d$ is significant because it represents the "rate of convergence" of the random walk. For expander graphs, $\lambda/d$ is a constant strictly less than 1. As $k$ increases, $(\lambda/d)^k$ decreases exponentially, meaning the probability distribution rapidly approaches the uniform stationary distribution. The smaller $\lambda/d$ is, the faster the mixing.

**Question 3:**

If a graph is a $(n, d, \epsilon)$-expander, what can we say about its mixing time?

**Answer 3:**

A graph that is a $(n, d, \epsilon)$-expander typically has a spectral gap that is bounded away from $d$. This means that the ratio $\lambda/d$ is bounded by a constant less than 1. Consequently, the Expander Mixing Lemma implies that the mixing time of a random walk on such a graph is $O(\log n)$. This means the walk reaches the stationary distribution much faster than in general graphs.

**Question 4:**

Consider a random walk on a graph where the second largest eigenvalue of the transition matrix is $\lambda = 1.5$ and the graph is $d=3$ regular.
a) Is this graph likely an expander?
b) Estimate the bound for $|(P^k)_{uv} - 1/n|$ for this graph.

**Answer 4:**

a) For a graph to be an expander, the spectral gap should be significantly less than $d$. Here, $\lambda = 1.5$ and $d=3$. The ratio $\lambda/d = 1.5/3 = 0.5$. This is a good value, indicating strong expansion. A common condition for expanders is $\lambda \le c\sqrt{d}$ for some constant $c$, or more directly that $\lambda/d$ is bounded by a constant less than 1. A value of $0.5$ suggests it is likely an expander.

b) Using the lemma, the bound is:
$| (P^k)_{uv} - \frac{1}{n} | \le \left( \frac{\lambda}{d} \right)^k = \left( \frac{1.5}{3} \right)^k = (0.5)^k$

This means that the deviation from the uniform distribution halves with each step.

**Question 5:**

Explain the connection between the spectral gap and the expansion property of a graph.

**Answer 5:**

The spectral gap (specifically, the difference between the largest and second largest eigenvalues in magnitude, or $d-\lambda$ for regular graphs) is a quantitative measure of a graph's connectivity. A larger spectral gap implies better expansion properties. Intuitively, the eigenvalues of a graph's Laplacian (or related matrices like the transition matrix) capture how "spread out" the eigenvectors are. Eigenvectors associated with small eigenvalues tend to be more "spread out" or "flat," corresponding to properties like expansion and rapid mixing. A large spectral gap means that the eigenvectors corresponding to larger eigenvalues (which might represent more localized structures or bottlenecks) are well separated from the dominant eigenvalue (representing uniform distribution). This separation is what drives the rapid mixing behavior observed in expander graphs.

---

## 6. Important Points to Remember

*   **Expander Definition:** Any small set of vertices has a large neighborhood. This is quantified by $|N(S)| \ge (1+\epsilon)|S|$.
*   **Expander Mixing Lemma:** It bounds the difference between the probability of a random walk reaching a vertex in $k$ steps and the uniform stationary probability: $|(P^k)_{uv} - 1/n| \le (\lambda/d)^k$.
*   **Spectral Gap ($\lambda$):** The second largest eigenvalue in magnitude of the transition matrix (or related matrices) is crucial. A smaller $\lambda/d$ indicates better expansion and faster mixing.
*   **Mixing Time:** For expanders, the mixing time is $O(\log n)$, meaning random walks converge to the stationary distribution very quickly.
*   **Applications:** The lemma underpins the efficiency of algorithms and constructions in areas like probabilistic algorithms, coding theory, and computer science theory.
*   **Relationship:** A non-zero spectral gap is equivalent to a graph being an expander. The size of the spectral gap determines the quality of expansion and the speed of mixing.

---
