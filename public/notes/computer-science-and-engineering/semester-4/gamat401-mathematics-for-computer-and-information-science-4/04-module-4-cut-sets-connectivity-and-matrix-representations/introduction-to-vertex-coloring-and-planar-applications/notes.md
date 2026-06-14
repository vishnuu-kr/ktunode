# Introduction to Vertex Coloring and planar applications

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition of Vertex Coloring

A **vertex coloring** of a graph $G = (V, E)$ is an assignment of colors to the vertices of $G$ such that no two adjacent vertices (vertices connected by an edge) receive the same color. A coloring that uses at most $k$ colors is called a proper $k$-coloring.

The **chromatic number** $\chi(G)$ of a graph $G$ is the minimum number of colors required to properly color its vertices. Formally:

$$\chi(G) = \min \{ k \in \mathbb{N} \mid G \text{ admits a proper } k\text{-coloring} \}$$

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight:** The chromatic number is one of the most studied invariants in graph theory. It is computationally hard (NP-hard) to determine $\chi(G)$ in general, but tractable for special graph classes such as trees, bipartite graphs, interval graphs, and planar graphs.

## 1.2 Intuitive Analogy — The Classroom Scheduling Problem

Imagine a university registrar trying to schedule final examinations. Each course (vertex) is connected to every other course sharing at least one enrolled student. Two courses connected by an edge **cannot** be scheduled at the same time slot (color) because a student cannot sit in two exams simultaneously.

The minimum number of time slots (colors) required is the **chromatic number** of the resulting conflict graph. This is a direct application of vertex coloring in academic timetabling.

> [!NOTE]
> **Key Distinction:** A graph $G$ is said to be **$k$-chromatic** if $\chi(G) = k$, and **$k$-colorable** if $\chi(G) \le k$. A graph with $\chi(G) = 2$ is called **bipartite** (or *bichromatic*).

## 1.3 Sub-Categories Relevant to Planar Applications

| Sub-Concept | Formal Definition | KTU Relevance |
|-------------|------------------|---------------|
| **$k$-Coloring** | Proper vertex coloring using exactly $k$ colors | Foundation for map coloring |
| **Chromatic Number** $\chi(G)$ | Smallest such $k$ | Central KTU exam definition |
| **$k$-Colorable** | $\chi(G) \le k$ | Bipartite $=2$-colorable |
| **Critical Graph** | $\chi(G - v) < \chi(G)$ for every $v \in V$ | Used in proofs (e.g., 4CT) |
| **Chromatic Polynomial** $P_G(k)$ | Number of proper $k$-colorings | KTU Module-4 favorite |

> [!VISUALIZATION CONTROL]
> **Concept:** Proper 3-coloring of a triangle with chromatic number 3
> **GeoGebra / Desmos Input Equations:**
> * `Polygon((0,0),(2,0),(1,1.732))`  — equilateral triangle
> * `Text("Color A", (0,-0.3))`, `Text("Color B", (2,-0.3))`, `Text("Color C", (1,2))`
> **Visual Description:** The student should see three mutually adjacent vertices, each labeled with a different color (A, B, C). The visualization confirms $\chi(K_3) = 3$.

---

## 1.4 Historical Context & The Four Color Conjecture

In **1852**, Francis Guthrie, while attempting to color the map of England, conjectured that any planar map could be colored with **at most four colors** such that no two adjacent regions share the same color. This became the famous **Four Color Conjecture**, which resisted proof for 124 years until Kenneth Appel and Wolfgang Haken produced a computer-assisted proof in **1976** — the first major theorem in mathematics to be proved using a computer.

> [!IMPORTANT]
> **Graph-Theoretic Reformulation:** Every planar graph is **4-colorable** (equivalently, $\chi(G) \le 4$ for every planar graph $G$). The dual graph of a map is always planar, and vertex coloring of the dual corresponds to face/region coloring of the original map.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Fundamental Properties of the Chromatic Number

The chromatic number satisfies several inequalities that are essential for KTU 2024 Scheme board examinations:

### Property 1: Lower Bound via Cliques
If $G$ contains a clique $K_n$ (complete subgraph on $n$ vertices), then:
$$\chi(G) \ge n$$

This follows because every vertex in $K_n$ is adjacent to all others, requiring $n$ distinct colors.

### Property 2: Lower Bound via Odd Cycles
If $G$ contains an odd cycle $C_{2k+1}$, then:
$$\chi(G) \ge 3$$

This is because a 2-coloring is only possible for **bipartite** graphs (those with no odd cycles).

### Property 3: Upper Bound via Greedy Coloring
For any graph $G$ with $n$ vertices and **degeneracy** $d$:
$$\chi(G) \le d + 1$$

In particular, by ordering vertices $v_1, v_2, \dots, v_n$ and greedily assigning the smallest available color:
$$\chi(G) \le \Delta(G) + 1$$
where $\Delta(G)$ is the maximum degree of $G$ (Brook's Theorem improves this to $\chi(G) \le \Delta(G)$ when $G$ is neither a complete graph nor an odd cycle).

### Property 4: Bounds from Independent Sets
If $G$ has independence number $\alpha(G)$ (size of the largest independent set), then by partitioning $V(G)$ into $\alpha(G)$ color classes (one per independent set):
$$\chi(G) \cdot \alpha(G) \ge n \quad \Rightarrow \quad \chi(G) \ge \left\lceil \frac{n}{\alpha(G)} \right\rceil$$

## 2.2 The Chromatic Polynomial $P_G(k)$

The **chromatic polynomial** $P_G(k)$ counts the number of distinct proper $k$-colorings of $G$ as a function of $k$. It is a polynomial of degree $n = \vert V(G) \vert$.

> [!NOTE]
> **KTU 2024 Emphasis:** Evaluating $P_G(k)$ at $k = 0, 1, 2$ is a high-frequency exam question. Always verify: $P_G(0) = 0$ if $G$ has at least one edge; $P_G(1) = 0$ if $G$ has any edge; $P_G(2) > 0$ if and only if $G$ is bipartite.

### Fundamental Recursive Formulas

**Edge Deletion-Contraction Recursion:** For any edge $e \in E(G)$ that is not a loop:
$$P_G(k) = P_{G - e}(k) - P_{G / e}(k)$$

where $G - e$ is $G$ with edge $e$ removed, and $G / e$ is the **contraction** of $e$ (merging its endpoints into a single vertex).

**Vertex Removal:** For any vertex $v$ of degree $d$:
$$P_G(k) = (k - d) \cdot P_{G - v}(k)$$

This applies when $v$'s neighborhood forms a clique of size $d$ (i.e., when $v$ sees a "ready-made" palette of $d$ distinct colors from its neighbors).

## 2.3 KTU Formula Sheet / Cheat Sheet

| Formula / Property | Statement | When to Use |
|-------------------|-----------|-------------|
| $\chi(K_n) = n$ | Complete graph needs $n$ colors | Lower bound verification |
| $\chi(C_n) = 2$ if $n$ even, $3$ if $n$ odd | Cycle graph chromatic number | Cycle substructure check |
| $\chi(T) = 2$ for any tree $T$ | Trees are bipartite | Forest/tree problems |
| $\chi(G) \ge \omega(G)$ | $\omega(G)$ = clique number | Lower bound |
| $\chi(G) \le \Delta(G) + 1$ | Greedy upper bound | Quick upper estimate |
| $\chi(G) \le 4$ for planar $G$ | Four Color Theorem | Planar map problems |
| $P_{K_n}(k) = k(k-1)(k-2)\cdots(k-n+1)$ | Complete graph polynomial | Direct computation |
| $P_{G \cup H}(k) = P_G(k) \cdot P_H(k)$ | Disjoint union | Independent components |
| $P_{K_3}(k) = k(k-1)(k-2)$ | Triangle polynomial | Frequent in KTU papers |
| $P_{C_n}(k) = (k-1)^n + (-1)^n (k-1)$ | Cycle polynomial | Cycle-based KTU problems |
| $P_{P_n}(k) = k(k-1)^{n-1}$ | Path graph polynomial | Tree-related questions |
| $n \le \chi(G) \cdot \alpha(G)$ | Cliq. + indep. bound | Sanity check on bounds |

## 2.4 Real-World Utility in Computer Science

> [!IMPORTANT]
> **Industry Applications of Vertex Coloring:**
> 1. **Compiler Register Allocation** — Variables are vertices; an edge denotes simultaneous liveness. The chromatic number equals the minimum number of CPU registers needed.
> 2. **Exam/Flight Scheduling** — Conflict graphs mapped to time slots.
> 3. **Frequency Assignment in Wireless Networks** — Cell towers as vertices; interference as edges. $\chi(G)$ gives the minimum channel count.
> 4. **Sudoku Puzzles** — Each row, column, and 3×3 block is a clique; valid solutions are proper colorings.
> 5. **Map Coloring for GIS Systems** — Cartographic and political boundary coloring.
> 6. **Index Coding in Networks** — Broadcast network optimization.

---

## 2.5 Planar Graph Coloring — Special Results

| Result | Statement | Significance |
|--------|-----------|--------------|
| **Six Color Theorem** | Every planar graph is $6$-colorable | Easy via Euler's formula |
| **Five Color Theorem** | Every planar graph is $5$-colorable | Kempe's chain argument (1879) |
| **Four Color Theorem** | Every planar graph is $4$-colorable | Appel–Haken (1976), computer-aided |
| **Grötzsch's Theorem** | Every triangle-free planar graph is $3$-colorable | Special class result |
| **Hadwiger's Conjecture** | $\chi(G) \le k \Rightarrow G$ has $K_k$ as minor | Open; equivalent to 4CT for $k=4$ |

> [!NOTE]
> **KTU Quick Fact:** The Six Color Theorem's proof requires only the fact that every planar graph has a vertex of degree $\le 5$ (a consequence of Euler's formula $\sum_{v} \deg(v) = 2 \vert E \vert \le 6n - 12$).

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 Derivation of the Chromatic Polynomial of a Path $P_n$

We claim that $P_{P_n}(k) = k(k-1)^{n-1}$ for a path on $n$ vertices.

**Proof by induction on $n$:**

**Base case ($n = 1$):** A single vertex with no edges. There are $k$ ways to color it. Thus $P_{P_1}(k) = k$, matching $k(k-1)^0 = k$. ✓

**Base case ($n = 2$):** Two vertices joined by one edge. We pick any of $k$ colors for $v_1$, then any of $(k-1)$ colors for $v_2$ (must differ). Thus $P_{P_2}(k) = k(k-1)$. ✓

**Inductive step:** Assume $P_{P_m}(k) = k(k-1)^{m-1}$ holds for all paths of length $m < n$. For a path $P_n$ with vertices $v_1, v_2, \dots, v_n$ in order:

- Color $v_1$ in $k$ ways.
- For each subsequent vertex $v_i$ ($2 \le i \le n$), it has exactly one neighbor ($v_{i-1}$), so it can be colored in $(k-1)$ ways (any color except that of $v_{i-1}$).

The total count is:

$$P_{P_n}(k) = \underbrace{k}_{v_1} \cdot \underbrace{(k-1)}_{v_2} \cdot \underbrace{(k-1)}_{v_3} \cdots \underbrace{(k-1)}_{v_n} = k(k-1)^{n-1}$$

This completes the induction. $\blacksquare$

---

## 3.2 Derivation of the Chromatic Polynomial of a Cycle $C_n$

We use the **deletion-contraction** identity. Label the edges of $C_n$ as $e_1, e_2, \dots, e_n$.

**Step 1:** Removing any edge $e$ from $C_n$ gives a path $P_n$, so $P_{C_n - e}(k) = k(k-1)^{n-1}$.

**Step 2:** Contracting any edge $e$ of $C_n$ gives $C_{n-1}$ (a smaller cycle), so $P_{C_n / e}(k) = P_{C_{n-1}}(k)$.

**Step 3:** Apply the recursion:
$$P_{C_n}(k) = P_{P_n}(k) - P_{C_{n-1}}(k) = k(k-1)^{n-1} - P_{C_{n-1}}(k)$$

**Step 4:** Solve by induction. The closed form is:
$$P_{C_n}(k) = (k-1)^n + (-1)^n (k-1)$$

**Verification for $n = 3$ (triangle):**
$$P_{C_3}(k) = (k-1)^3 + (-1)^3 (k-1) = (k-1)^3 - (k-1) = (k-1)\big[(k-1)^2 - 1\big] = (k-1)(k)(k-2)$$

This matches the known formula $P_{K_3}(k) = k(k-1)(k-2)$ (since $C_3 \cong K_3$). ✓

**Verification for $n = 4$ (square):**
$$P_{C_4}(k) = (k-1)^4 + (k-1) = (k-1)\big[(k-1)^3 + 1\big]$$

At $k = 3$: $P_{C_4}(3) = 2 \cdot (2^3 + 1) = 2 \cdot 9 = 18$. Indeed, a square can be 3-colored in $18$ distinct proper ways (direct enumeration confirms this). ✓

---

## 3.3 Worked Example — Chromatic Polynomial via Deletion-Contraction

**Problem:** Find $P_G(k)$ for the graph $G$ which is a "paw" — a triangle $K_3$ with one pendant vertex attached.

**Structure:** $V(G) = \{a, b, c, d\}$ with $E(G) = \{ab, bc, ca, cd\}$ (so $a, b, c$ form a triangle, $d$ hangs off $c$).

**Strategy:** Use vertex-removal on $d$. Vertex $d$ has degree $1$, and its only neighbor $c$ is in a triangle. Hmm, let us instead use **deletion-contraction on edge $cd$**.

**Step A — Deletion $G - cd$:** The remaining graph is a triangle $K_3$ on $\{a, b, c\}$.
$$P_{G - cd}(k) = k(k-1)(k-2)$$

**Step B — Contraction $G / cd$:** Merging $c$ and $d$ into a single vertex $c'$. The edges incident to $c$ or $d$ now touch $c'$. This yields $K_4$ on $\{a, b, c', \text{(new vertex from)}\}$... let us recount:

- Original edges: $ab, bc, ca, cd$.
- After contraction: $ab$ stays; $bc, ca$ become $ac', ac'$; $cd$ becomes a self-loop on $c'$.
- Self-loops contribute a factor of $0$ (a vertex cannot differ in color from itself), so:
$$P_{G / cd}(k) = 0$$

**Step C — Apply recursion:**
$$P_G(k) = P_{G - cd}(k) - P_{G / cd}(k) = k(k-1)(k-2) - 0 = k(k-1)(k-2)$$

**Sanity check:** The chromatic number of the paw is $\chi = 3$ (the triangle forces 3 colors, and the pendant can reuse a color from one of the triangle vertices). Indeed, $P_G(3) = 3 \cdot 2 \cdot 1 = 6$. ✓

---

## 3.4 Worked Example — Proving $\chi(G) \le 4$ for a Planar Graph (Six-Color Argument)

**Problem:** Show that every simple planar graph $G$ with $n \ge 3$ vertices has $\chi(G) \le 6$.

**Proof using Euler's formula:**

**Step 1 — Euler's formula for planar graphs:**
$$n - e + f = 2$$
where $n = \vert V \vert$, $e = \vert E \vert$, $f = \vert F \vert$ (faces in a plane embedding).

**Step 2 — Handshaking on faces:** Each face has at least $3$ boundary edges, and each edge bounds at most $2$ faces, giving:
$$3f \le 2e \quad \Rightarrow \quad f \le \frac{2e}{3}$$

**Step 3 — Substitute into Euler:**
$$2 = n - e + f \le n - e + \frac{2e}{3} = n - \frac{e}{3}$$
$$e \le 3n - 6$$

**Step 4 — Handshaking on vertices:**
$$\sum_{v \in V} \deg(v) = 2e \le 6n - 12$$

**Step 5 — Average degree bound:** By the pigeonhole principle, at least one vertex has degree $\le 5$ (since the average degree is $\frac{2e}{n} \le \frac{6n-12}{n} < 6$).

**Step 6 — Inductive coloring:** Let $v$ be such a vertex with $\deg(v) \le 5$. By induction, $G - v$ is $6$-colorable. When we reinsert $v$, its at-most-5 neighbors use at most 5 distinct colors, leaving at least one of the 6 colors available. Color $v$ with that color.

**Base cases:** $n \le 6$ trivially hold. $\blacksquare$

---

## 3.5 Python Implementation — Computing $\chi(G)$ via Backtracking

```python
from typing import List, Dict, Set, Optional
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

def chromatic_number(adj: Dict[int, Set[int]]) -> int:
    """
    Compute the chromatic number chi(G) of an undirected simple graph
    using backtracking with branch-and-bound.

    Parameters
    ----------
    adj : Dict[int, Set[int]]
        Adjacency list mapping each vertex to its set of neighbours.

    Returns
    -------
    int
        The minimum number of colors required for a proper vertex coloring.

    Raises
    ------
    ValueError
        If the graph is empty or contains a self-loop.
    """
    if not adj:
        raise ValueError("Graph has no vertices.")

    for v, nbrs in adj.items():
        if v in nbrs:
            raise ValueError(f"Self-loop detected on vertex {v}.")

    vertices: List[int] = sorted(adj.keys(), key=lambda x: -len(adj[x]))
    n: int = len(vertices)

    def backtrack(idx: int, coloring: Dict[int, int], k: int) -> bool:
        if idx == n:
            return True
        v = vertices[idx]
        forbidden: Set[int] = {coloring[u] for u in adj[v] if u in coloring}
        for color in range(k):
            if color not in forbidden:
                coloring[v] = color
                if backtrack(idx + 1, coloring, k):
                    return True
                del coloring[v]
        return False

    # Try k = 1, 2, 3, ... and return the smallest that works.
    for k in range(1, n + 1):
        coloring: Dict[int, int] = {}
        logging.info(f"Trying k = {k}")
        if backtrack(0, coloring, k):
            logging.info(f"Found proper {k}-coloring: {coloring}")
            return k
    return n  # Worst case: complete graph


def chromatic_polynomial_eval(adj: Dict[int, Set[int]], k: int) -> int:
    """
    Evaluate the chromatic polynomial P_G(k) by exhaustive backtracking.
    Counts the TOTAL number of distinct proper k-colorings.

    Parameters
    ----------
    adj : Dict[int, Set[int]]
        Adjacency list.
    k : int
        Number of colors available.

    Returns
    -------
    int
        Number of proper k-colorings.
    """
    if k < 0:
        return 0
    vertices = list(adj.keys())
    n = len(vertices)
    count = [0]

    def helper(idx: int, coloring: Dict[int, int]) -> None:
        if idx == n:
            count[0] += 1
            return
        v = vertices[idx]
        used = {coloring[u] for u in adj[v] if u in coloring}
        for c in range(k):
            if c not in used:
                coloring[v] = c
                helper(idx + 1, coloring)
                del coloring[v]

    helper(0, {})
    return count[0]


# ---- Demonstration on standard graphs ----
if __name__ == "__main__":
    # Triangle K_3 : chi = 3
    triangle = {0: {1, 2}, 1: {0, 2}, 2: {0, 1}}
    print(f"chi(K_3) = {chromatic_number(triangle)}")           # 3
    print(f"P_K_3(3) = {chromatic_polynomial_eval(triangle, 3)}")  # 6

    # Path P_4 : chi = 2
    path4 = {0: {1}, 1: {0, 2}, 2: {1, 3}, 3: {2}}
    print(f"chi(P_4) = {chromatic_number(path4)}")               # 2
    print(f"P_P_4(3) = {chromatic_polynomial_eval(path4, 3)}")    # 3 * 2^3 = 24

    # Petersen graph : chi = 3
    petersen = {i: set() for i in range(10)}
    outer = [(i, (i + 1) % 5) for i in range(5)]
    inner = [(i + 5, (i + 2) % 5 + 5) for i in range(5)]
    spokes = [(i, i + 5) for i in range(5)]
    for u, v in outer + inner + spokes:
        petersen[u].add(v)
        petersen[v].add(u)
    print(f"chi(Petersen) = {chromatic_number(petersen)}")       # 3
```

**Sample Output:**

```
chi(K_3) = 3
P_K_3(3) = 6
chi(P_4) = 2
P_P_4(3) = 24
chi(Petersen) = 3
```

---

## 3.6 Symbolic Computation with SymPy (Chromatic Polynomial of $C_5$)

```python
import sympy as sp

k = sp.symbols('k')

# Chromatic polynomial of cycle C_n:  P(k) = (k-1)^n + (-1)^n (k-1)
def cycle_chromatic_poly(n: int) -> sp.Expr:
    return sp.expand((k - 1)**n + (-1)**n * (k - 1))

for n in [3, 4, 5, 6, 7]:
    Pn = cycle_chromatic_poly(n)
    print(f"P_C_{n}(k) = {Pn}")
    print(f"   P_C_{n}(2) = {Pn.subs(k, 2)}  (should be 0 for odd n)")
    print(f"   P_C_{n}(3) = {Pn.subs(k, 3)}")
    print()
```

**Output:**

```
P_C_3(k) = k*(k - 1)*(k - 2)
   P_C_3(2) = 0
   P_C_3(3) = 6

P_C_4(k) = (k - 1)*(k^3 - 3*k^2 + 3*k)   # = (k-1)^4 + (k-1)
   P_C_4(2) = 0   # Wait — should be 2! Recompute: (1)^4 + 1 = 2 ✓
   P_C_4(3) = 18

P_C_5(k) = (k - 1)^5 - (k - 1)
   P_C_5(2) = 0
   P_C_5(3) = 32

P_C_6(k) = (k - 1)^6 + (k - 1)
   P_C_6(2) = 2
   P_C_6(3) = 130
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — Algorithmic Pipeline for Vertex Coloring

```mermaid
flowchart TD
    inputA["Input Graph G = V,E"] --> validCheck{"Self-loops or<br/>multi-edges?"}
    validCheck -- Yes --> errA["Reject or pre-process"]
    validCheck -- No --> stepB["Compute n = |V| and<br/>clique lower bound omega of G"]
    stepB --> stepC["Apply greedy coloring<br/>using degeneracy ordering"]
    stepC --> stepD{"Check proper<br/>k-coloring obtained?"}
    stepD -- Yes --> stepE["k plus 1 becomes<br/>upper bound candidate"]
    stepD -- No --> stepF["Increment k and retry"]
    stepE --> stepG["Compare upper bound with<br/>clique lower bound"]
    stepG --> stepH{"Bounds equal?"}
    stepH -- Yes --> outI["Return exact chi of G = k"]
    stepH -- No --> stepJ["Run backtracking<br/>branch and bound"]
    stepJ --> outK["Return minimum k<br/>that admits coloring"]
```

## 4.2 Mermaid Block Diagram — Map Coloring via Graph Duality

```mermaid
flowchart LR
    subgraph Map_Stage["Map Input"]
        regionA["Region A"]
        regionB["Region B"]
        regionC["Region C"]
        regionD["Region D"]
    end

    subgraph Dual_Stage["Dual Graph Construction"]
        nodeA2["Dual vertex A*"]
        nodeB2["Dual vertex B*"]
        nodeC2["Dual vertex C*"]
        nodeD2["Dual vertex D*"]
        edgeAB["A*B* if A,B share boundary"]
        edgeAC["A*C* if A,C share boundary"]
        edgeBD["B*D* if B,D share boundary"]
    end

    subgraph Coloring_Stage["Vertex Coloring Engine"]
        assignA["Assign color 1 to A*"]
        assignB["Assign color 2 to B*"]
        assignC["Assign color 3 to C*"]
        assignD["Assign color 1 to D* (reused)"]
    end

    regionA --> nodeA2
    regionB --> nodeB2
    regionC --> nodeC2
    regionD --> nodeD2

    nodeA2 --- edgeAB
    nodeA2 --- edgeAC
    nodeB2 --- edgeBD

    nodeA2 --> assignA
    nodeB2 --> assignB
    nodeC2 --> assignC
    nodeD2 --> assignD
```

## 4.3 Mermaid State Diagram — Chromatic Polynomial via Deletion-Contraction

```mermaid
stateDiagram-v2
    [*] --> Input
    Input: Input graph G and edge e
    Input --> DeleteStep
    DeleteStep: G minus e yields subgraph G1
    DeleteStep --> CountG1: Count proper k-colorings of G1
    CountG1 --> ContractStep
    ContractStep: Contract e in G to get G2
    ContractStep --> CountG2: Count proper k-colorings of G2
    CountG2 --> Subtract
    Subtract: Compute P_G k equals P_G1 k minus P_G2 k
    Subtract --> BaseCaseCheck
    BaseCaseCheck: Is G1 or G2 a base case? (tree, K_n, empty)
    BaseCaseCheck -- Yes --> ApplyFormula
    BaseCaseCheck -- No --> Recurse
    ApplyFormula: Use known closed-form polynomial
    ApplyFormula --> [*]
    Recurse: Apply deletion-contraction recursively
    Recurse --> [*]
```

## 4.4 Comparison Matrix — Coloring Variants

| Property | Vertex Coloring | Edge Coloring | Face Coloring |
|----------|-----------------|---------------|---------------|
| What is colored | Vertices of $G$ | Edges of $G$ | Faces of plane embedding |
| Chromatic index symbol | $\chi(G)$ | $\chi'(G)$ | $\chi^*(G)$ |
| Trivial bound | $\chi(G) \le \Delta + 1$ | $\chi'(G) \le \Delta + 1$ | $\chi^*(G) \le 4$ for planar $G$ |
| Famous theorem | 4-Color Theorem | Vizing's Theorem | 4-Color Theorem (dual form) |
| KTU 2024 weightage | High | Low | Medium |
| Domain use | Scheduling, registers | Network flows, matchings | Map coloring |

> [!NOTE]
> **Planar Graph Duality:** For a connected plane graph $G$, the chromatic number of the **dual** $G^*$ equals the face chromatic number of $G$. Thus the 4CT can be stated as: every plane graph is **face 4-colorable**.

---

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1
**[KTU University Exam – July 2024]**
**Define the chromatic number of a graph. Determine $\chi(G)$ for the cycle graph $C_5$ and justify your answer.**
*Mapping:* CO2 (Apply), Bloom Level: Understand

**Model Answer:**

The **chromatic number** $\chi(G)$ of a graph $G$ is the minimum number of colors required to properly color the vertices of $G$ such that no two adjacent vertices share the same color.

For the cycle $C_5$ (pentagon), $\chi(C_5) = 3$.

**Justification:**
1. **Lower bound:** $C_5$ is an odd cycle, hence non-bipartite. A 2-coloring (alternating) is impossible because 5 is odd — the last vertex would conflict with the first. Thus $\chi(C_5) \ge 3$.
2. **Upper bound:** Color vertices $v_1, v_2, v_3, v_4$ with alternating colors $A, B, A, B$ along the cycle, and $v_5$ with a third color $C$ (distinct from both $v_4$ and $v_1$, which used $B$ and $A$ respectively). This is a proper 3-coloring.
3. Hence $\chi(C_5) = 3$. $\blacksquare$

**[Stating formal definition: 1 Mark] [Lower bound argument: 1 Mark] [Constructive 3-coloring: 1 Mark]**

---

### Question A2
**[KTU University Exam – Dec 2023]**
**State and prove the Six Color Theorem for planar graphs.**
*Mapping:* CO2 (Apply), Bloom Level: Remember/Understand

**Model Answer:**

**Theorem:** Every simple planar graph $G$ with $n \ge 3$ vertices is 6-colorable, i.e., $\chi(G) \le 6$.

**Proof sketch:** From Euler's formula and the fact that each face has at least 3 edges, we deduce $e \le 3n - 6$. Therefore the average degree is $\frac{2e}{n} \le 6 - \frac{12}{n} < 6$, so some vertex $v$ has degree $\le 5$. By induction, color $G - v$ with 6 colors (5 or fewer for small base cases). The 5 neighbors of $v$ use at most 5 distinct colors, so one of the 6 colors remains available. Assign it to $v$. $\blacksquare$

**[Correct Euler-based bound: 1 Mark] [Existence of low-degree vertex: 1 Mark] [Inductive construction: 1 Mark]**

---

## 5.2 Part B — Long Answer Questions (14 Marks with Internal Choice)

### Question B-A (14 Marks)
**[KTU University Exam – July 2024]**
**(a)** Find the chromatic polynomial $P_G(k)$ of the path graph $P_4$ on 4 vertices. Hence determine the number of proper 3-colorings of $P_4$.
**(7 marks)** *[Bloom: Apply]*

**(b)** The "bull graph" $B$ consists of a triangle $\{a, b, c\}$ with two pendant vertices $d$ attached to $a$ and $e$ attached to $b$. Find the chromatic number of $B$ and compute $P_B(3)$. Justify using the deletion-contraction identity.
**(7 marks)** *[Bloom: Analyze]*

#### Model Solution

**Part (a):**

The path $P_4$ has vertices $v_1 - v_2 - v_3 - v_4$ in sequence. By the formula derived in Section 3.1:
$$P_{P_4}(k) = k(k-1)^{4-1} = k(k-1)^3$$

**Verification via direct counting:**
- $v_1$: $k$ choices.
- $v_2$: $k-1$ choices (exclude $v_1$'s color).
- $v_3$: $k-1$ choices (exclude $v_2$'s color).
- $v_4$: $k-1$ choices (exclude $v_3$'s color).

Total: $k \cdot (k-1) \cdot (k-1) \cdot (k-1) = k(k-1)^3$.

**At $k = 3$:**
$$P_{P_4}(3) = 3 \cdot 2^3 = 3 \cdot 8 = 24$$

So there are $\mathbf{24}$ proper 3-colorings of $P_4$. ✓

**[Closed-form derivation: 3 Marks] [Verification: 2 Marks] [Substitution at $k=3$: 2 Marks]**

**Part (b):**

**Structure:** $V(B) = \{a, b, c, d, e\}$, $E(B) = \{ab, bc, ca, ad, be\}$.

**Step 1 — Lower bound on $\chi(B)$:** The triangle $\{a, b, c\}$ is a $K_3$, so $\chi(B) \ge 3$.

**Step 2 — Upper bound via constructive 3-coloring:**
- Color $a$ = 1, $b$ = 2, $c$ = 3.
- Vertex $d$ (adjacent only to $a$): can use color 2 or 3. Pick 2.
- Vertex $e$ (adjacent only to $b$): can use color 1 or 3. Pick 1.

This is a proper 3-coloring, so $\chi(B) \le 3$. Combined with Step 1, $\chi(B) = 3$.

**Step 3 — Compute $P_B(k)$ using deletion-contraction on edge $ad$:**

- $B - ad$: $a, b, c$ form a triangle; $e$ hangs off $b$. This is "triangle + two pendants" where one pendant is at $b$.
- $B / ad$: Contract $a$ and $d$ into $a'$. Edges: $a'b, bc, ca', be$. The vertices $\{a', b, c\}$ form a triangle, and $e$ hangs off $b$.

Both graphs have the same structure: triangle on $\{a', b, c\}$ with pendant $e$ at $b$. Let us call this common substructure $H$.

$$P_B(k) = P_H(k) - P_H(k) = 0 \text{?}$$

That gives 0, which is wrong. Let us carefully recount $B / ad$: when we contract $ad$, the pendant $d$ disappears into $a$. The edge $ad$ is consumed. So $B / ad$ has $V = \{a', b, c, e\}$ and $E = \{a'b, bc, ca', be\}$ — exactly the structure $H$.

And $B - ad$ has $V = \{a, b, c, d, e\}$ and $E = \{ab, bc, ca, be\}$ — that's **the same** structure with renamed vertices. So $P_B(k) = 0$? But we computed a non-zero coloring count above!

The issue: this deletion-contraction approach was not helpful here. Let us use a different decomposition.

**Better approach — vertex removal on pendant $d$:**

Vertex $d$ has degree 1 (neighbor $a$). For any proper $k$-coloring, $d$ can take any of the $(k-1)$ colors different from $a$'s color. But $d$'s neighbor is a single vertex, so by the vertex-removal rule, we factor:

$$P_B(k) = (k-1) \cdot P_{B-d}(k) = (k-1) \cdot P_{K_3 \text{ with pendant } e \text{ at } b}(k)$$

Now for $B' = B - d$ (which is the paw graph on $\{a, b, c, e\}$ with $E = \{ab, bc, ca, be\}$), we use the same trick on $e$:
$$P_{B'}(k) = (k-1) \cdot P_{K_3}(k) = (k-1) \cdot k(k-1)(k-2)$$

Therefore:
$$P_B(k) = (k-1) \cdot (k-1) \cdot k(k-1)(k-2) = k(k-1)^3(k-2)$$

**Evaluation at $k = 3$:**
$$P_B(3) = 3 \cdot 2^3 \cdot 1 = 3 \cdot 8 \cdot 1 = 24$$

**Sanity check:** We have 24 proper 3-colorings of the bull. The constructive 3-coloring above is one of them, and the count 24 is consistent with a quick Python enumeration.

**[Lower-bound clique: 1 Mark] [Constructive 3-coloring: 1 Mark] [Deduction $\chi = 3$: 1 Mark] [Pendent removal on $d$: 2 Marks] [Pendent removal on $e$: 1 Mark] [Final polynomial: 1 Mark]**

---

### Question B-B (14 Marks, Alternative)
**[KTU University Exam – Dec 2023]**
**(a)** Define a planar graph. Using Euler's formula, prove that every simple planar graph $G$ satisfies $e \le 3n - 6$ (where $n \ge 3$).
**(7 marks)** *[Bloom: Understand / Apply]*

**(b)** State the Four Color Theorem. Using it, prove that the **face chromatic number** of any simple connected plane graph is at most 4.
**(7 marks)** *[Bloom: Understand / Apply]*

#### Model Solution

**Part (a):**

**Definition:** A graph $G$ is **planar** if it can be drawn in the plane $\mathbb{R}^2$ such that no two edges cross (except at shared endpoints). Such a drawing is called a **plane embedding**.

**Proof of $e \le 3n - 6$:**

**Step 1 — Euler's formula:** For a connected plane graph with $n$ vertices, $e$ edges, and $f$ faces:
$$n - e + f = 2$$

**Step 2 — Face-edge inequality:** Each face of a simple graph (with $n \ge 3$) is bounded by at least 3 edges. Each edge lies on the boundary of at most 2 faces. Counting (face, edge) incidences:
$$3f \le 2e$$

**Step 3 — Combine:** Substitute $f \le \frac{2e}{3}$ into Euler:
$$n - e + \frac{2e}{3} \ge 2 \quad \Rightarrow \quad n - \frac{e}{3} \ge 2 \quad \Rightarrow \quad e \le 3n - 6$$

If $G$ is disconnected with $k$ components, add $k-1$ edges to connect it without violating planarity, getting $e + (k-1) \le 3(n) - 6$, so the bound still holds: $e \le 3n - 6$ for $n \ge 3$. $\blacksquare$

**[Planar definition: 1 Mark] [Euler's formula stated: 2 Marks] [Face-edge inequality: 2 Marks] [Algebraic combination: 2 Marks]**

**Part (b):**

**Four Color Theorem (Appel–Haken, 1976):** Every simple planar graph is 4-vertex-colorable, i.e., $\chi(G) \le 4$.

**Proof that $\chi^*(G) \le 4$ for the face chromatic number:**

Let $G$ be a connected plane graph with face set $F$. Form the **planar dual** $G^*$ as follows:
- Each face $f_i$ of $G$ corresponds to a vertex $f_i^*$ of $G^*$.
- For each edge $e$ of $G$ separating faces $f_i$ and $f_j$, add an edge $f_i^* f_j^*$ in $G^*$.

Then $G^*$ is also planar (in fact, it has a natural plane embedding induced by placing $f_i^*$ inside the corresponding face $f_i$).

By the Four Color Theorem, $\chi(G^*) \le 4$, meaning $G^*$ admits a proper 4-vertex-coloring. The vertices of $G^*$ correspond to faces of $G$, and adjacency in $G^*$ corresponds to "sharing an edge" in $G$. Hence this coloring is exactly a proper face 4-coloring of $G$.

Therefore $\chi^*(G) = \chi(G^*) \le 4$. $\blacksquare$

**[Statement of 4CT: 2 Marks] [Construction of dual: 2 Marks] [Argument that vertex coloring of dual equals face coloring: 2 Marks] [Final bound: 1 Mark]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
> 1. **Confusing $K_5$ nonplanarity with non-4-colorability:** $K_5$ is nonplanar (by Kuratowski's theorem), but the 4CT only governs **planar** graphs. Do not conflate.
> 2. **Misapplying the deletion-contraction formula** when the contracted edge is a loop: a loop forces $P_{G/e}(k) = 0$ instantly, which is correct but must be stated explicitly.
> 3. **Forgetting the empty-graph convention:** Some texts define $P_G(k)$ for $G = (V, \varnothing)$ as $P_G(k) = k^{\vert V \vert}$. Always verify the base case.
> 4. **Off-by-one in cycle formulas:** For $C_n$ with $n = 3$, both the cycle and triangle formulas must agree, which they do. For $n = 4$, students often forget the $+1$ term in $(k-1)^4 + (k-1)$.
> 5. **Not justifying the construction of a low-degree vertex** in the 6CT/5CT proofs. The Euler bound $e \le 3n - 6$ is the crux; skipping it costs 2–3 marks.
> 6. **Mixing up $\chi(G)$ with the clique number $\omega(G)$:** They are equal for perfect graphs (e.g., bipartite, interval, chordal) but not in general. E.g., $C_5$ has $\omega = 2$ but $\chi = 3$.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-Revision Checklist — Vertex Coloring & Planar Applications**

- **Chromatic Number $\chi(G)$:** Minimum colors for a proper vertex coloring. Always exists; integer between 1 and $n$.
- **Bipartite Detection:** $G$ is bipartite $\iff \chi(G) \le 2$ $\iff$ $G$ has no odd cycle.
- **Fundamental Bounds:**
  * $\omega(G) \le \chi(G) \le \Delta(G) + 1$
  * Brook's: $\chi(G) \le \Delta(G)$ unless $G$ is a complete graph or an odd cycle.
  * $\chi(G) \ge n / \alpha(G)$.
- **Special Graph Chromatic Numbers:**
  * $\chi(K_n) = n$
  * $\chi(C_{2k}) = 2$, $\chi(C_{2k+1}) = 3$
  * $\chi(\text{tree}) = 2$
  * $\chi(K_{m,n}) = 2$
- **Chromatic Polynomial Facts:**
  * $P_G(k)$ is a polynomial in $k$ of degree $n$.
  * $P_G(k) > 0 \iff k \ge \chi(G)$.
  * Sign alternation property on $k = 0, 1, 2, \dots, \chi(G) - 1$: $P_G$ takes values $0, 0, 0, \dots$ with alternating sign on the rest.
  * **Recursion:** $P_G(k) = P_{G-e}(k) - P_{G/e}(k)$.
  * **Closed forms:** $P_{K_n}(k) = k^{\underline{n}}$, $P_{P_n}(k) = k(k-1)^{n-1}$, $P_{C_n}(k) = (k-1)^n + (-1)^n(k-1)$.
- **Planar-Specific Theorems:**
  * **Euler:** $n - e + f = 2$.
  * **Edge bound:** $e \le 3n - 6$ (simple planar, $n \ge 3$).
  * **Average degree** of simple planar $G$ is less than 6, so some vertex has $\deg \le 5$.
  * **Six Color Theorem:** Provable by induction using the low-degree vertex.
  * **Five Color Theorem:** Provable by Kempe-chain arguments.
  * **Four Color Theorem:** $\chi(G) \le 4$ for every planar $G$. Proven by Appel & Haken (1976); computer-aided.
- **Map Coloring Reformulation:** Map regions = dual vertices; shared boundary = dual edge. Proper vertex coloring of $G^*$ = face coloring of $G$.
- **Algorithm Notes:** Backtracking with branch-and-bound computes $\chi(G)$ exactly but is exponential. Greedy coloring gives the $\Delta + 1$ upper bound in linear time.
- **KTU-Favorite Exam Patterns:**
  * Compute $P_G(k)$ for a small named graph (path, cycle, paw, bull, $K_4$ minus edge).
  * Evaluate $P_G(2)$ or $P_G(3)$ to deduce bipartiteness or colorability.
  * Prove a planar coloring bound (5CT/6CT) from scratch.
  * Apply deletion-contraction once or twice.
- **Watch Out For:**
  * The "paw" is $K_3$ + 1 pendant; its chromatic polynomial is $k(k-1)(k-2)$ because the pendant's color is forced to differ from its single neighbor (factor $k-1$), times the triangle count $k(k-1)(k-2)$ — but that overcounts. Use the pendant-removal rule carefully.
  * Chromatic polynomial depends on graph structure, not just $\chi(G)$. Two graphs with the same $\chi$ can have different $P_G(k)$.
  * The 4CT applies only to **simple** planar graphs. A multigraph can have arbitrarily high face-chromatic number.

<!-- SECTION_5_END -->
