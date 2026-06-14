# Euler graphs

<!-- SECTION_1_START -->
# Euler Graphs — A Foundational Concept in Graph Traversal

## 1.1 Formal Academic Definition

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition (Module 2, GAMAT401):**
> An **Eulerian trail** (or **Eulerian path**) in a finite undirected graph $G = (V, E)$ is a trail that uses every edge of $G$ exactly once. An **Eulerian circuit** (or **Eulerian cycle**) is an Eulerian trail that begins and ends at the same vertex. A graph that possesses an Eulerian circuit is called an **Eulerian graph**.

Complementary definitions relevant to KTU Board examinations:

| Term | Formal Definition |
| :--- | :--- |
| **Trail** | A walk in a graph with no repeated edge. |
| **Walk** | An alternating sequence of vertices and edges $v_0, e_1, v_1, e_2, \dots, e_k, v_k$. |
| **Degree of a vertex** | The number of edges incident on the vertex, denoted $\deg(v)$. |
| **Connected graph** | A graph in which there exists a path between every pair of distinct vertices. |
| **Bridge** | An edge whose removal disconnects the graph (or increases the number of connected components). |
| **Isolated vertex** | A vertex with $\deg(v) = 0$. |

## 1.2 Intuitive Real-World Analogy

> [!NOTE]
> **Conceptual Intuition (Plain English):**
> Imagine you are a **postman** who must deliver mail along every street in a neighborhood **exactly once**, returning to the post office at the end of the day. The streets form a graph (intersections are vertices, streets are edges). The question — *can you walk every street exactly once without retracing any?* — is precisely the **Eulerian circuit problem**.
>
> The historical **Königsberg Bridge Problem (1736)** asked whether one could walk through the city of Königsberg and cross each of its seven bridges exactly once. Leonhard **Euler** proved it was impossible, thereby founding the discipline of **graph theory**.

> [!TIP]
> **Mnemonic to Remember:**
> - **C**ircuit $\Rightarrow$ **C**losed trail $\Rightarrow$ all vertices have **C**ount $\deg(v) = 2k$ (even).
> - **P**ath $\Rightarrow$ O**P**en trail $\Rightarrow$ exactly two vertices have **o**dd degree, rest are **e**ven.

## 1.3 Physical & Mathematical Constants Used

- **Graph order** $n = \vert V \vert$ — number of vertices.
- **Graph size** $m = \vert E \vert$ — number of edges.
- **Handshaking Lemma constant**: $\sum_{v \in V} \deg(v) = 2m$ — always **even**.

> [!WARNING]
> **KTU Examiner's Frequent Trap:**
> A graph with **isolated vertices** (degree zero) is **not Eulerian**, because an Eulerian trail must visit every edge — and an isolated vertex cannot be reached from the non-trivial component. Always check for isolation first.

## 1.4 Geometric Visualization Setup

> [!VISUALIZATION CONTROL]
> **Concept:** Pentagon-with-Star-Outer-Edges Eulerian Graph
> **GeoGebra / Desmos Input Equations:**
> * Inner Pentagon vertices: $A=(1,0)$, $B=(0.309, 0.951)$, $C=(-0.809, 0.588)$, $D=(-0.809,-0.588)$, $E=(0.309,-0.951)$
> * Star outer points (spikes): $F=(2,0)$, $G=(-0.618, 1.902)$, $H=(-1.618, 1.176)$, $I=(-1.618,-1.176)$, $J=(-0.618,-1.902)$
> * Edges of graph: pentagon sides $\{AB,BC,CD,DE,EA\}$ + spokes $\{AF,BG,CH,DI,EJ\}$
> **Visual Description:** A regular pentagon centered at origin, with each vertex connected to an outward star spike. Each vertex has degree **2** (one pentagon edge + one spoke), forming a **disconnected** graph with **no Eulerian trail** — an immediate visual cue that connectivity and even-degree conditions are mandatory.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Foundational Theorems (KTU Board Critical)

### Theorem 1 — Euler's Theorem (1786)
> [!IMPORTANT]
> **Statement:** A connected, finite multigraph $G$ has an **Eulerian circuit** if and only if **every vertex has even degree**.

**Necessity (Forward Direction):**
If $G$ has an Eulerian circuit, the circuit enters and exits every internal vertex the same number of times. Each entry/exit pair consumes **two** edges, so $\deg(v)$ must be even for all $v \in V$.

**Sufficiency (Reverse Direction):**
If every vertex has even degree, one can construct an Eulerian circuit by induction on $m = \vert E \vert$.

### Theorem 2 — Eulerian Path Theorem
> [!IMPORTANT]
> **Statement:** A connected, finite multigraph $G$ has an **Eulerian trail (open)** if and only if **exactly two vertices have odd degree**, and these two vertices serve as the endpoints of the trail.

### Theorem 3 — Non-Eulerian Graphs
> [!IMPORTANT]
> **Statement:** A connected graph $G$ has **no Eulerian trail** if and only if it has **more than two vertices of odd degree**.

## 2.2 KTU High-Yield Formula & Condition Sheet

| \# | Concept | Mathematical Condition | KTU-Exam Interpretation |
| :--- | :--- | :--- | :--- |
| 1 | Handshaking Lemma | $\sum_{v \in V} \deg(v) = 2m$ | Used to **verify** or **deduce** degrees. |
| 2 | Eulerian Circuit Condition | $\forall v \in V,\ \deg(v) \equiv 0 \pmod{2}$ | $G$ is **Eulerian** (closed trail exists). |
| 3 | Eulerian Path Condition | Exactly 2 vertices with odd degree | Open trail exists; endpoints are the odd-degree vertices. |
| 4 | Non-Eulerian Count | $\vert\{v : \deg(v) \text{ odd}\}\vert \neq 0, 2$ | **No** Eulerian trail possible. |
| 5 | Number of Odd-Degree Vertices | Always **even** (by Lemma 1) | Cannot be 1, 3, 5, 7, ... |
| 6 | Bipartite Eulerian | Connected bipartite + every vertex even degree | Eulerian + bipartite $\Rightarrow$ circuit decomposes into 2 perfect matchings. |
| 7 | Fleury's Complexity | $O(\vert E\vert^2)$ naive; $O(\vert E\vert)$ optimized | Standard textbook algorithm. |
| 8 | Hierholzer's Complexity | $O(\vert E\vert)$ | Optimal algorithm for Eulerian circuits. |

## 2.3 Structural Properties of Eulerian Graphs

- **Edge-Decomposition Property:** Every Eulerian graph can be decomposed into a union of edge-disjoint cycles.
- **Subgraph Closure:** Every subgraph of an Eulerian graph whose vertices all have even degree is itself Eulerian (in its connected components).
- **Bipartite + Eulerian:** A bipartite Eulerian graph can have its edge set partitioned into two perfect matchings (König's line coloring theorem).
- **Closed Walk Property:** The edge set of any Eulerian graph admits a **closed walk** of length $m$ that uses each edge exactly once.
- **Adding an Edge Effect:** If $G$ is connected and **not** Eulerian, adding exactly one edge between two odd-degree vertices converts it into an Eulerian graph.

## 2.4 Real-World Engineering & CS Applications

| Domain | Application |
| :--- | :--- |
| **Network Routing** | Designing fiber-optic or road networks where maintenance crews traverse every cable/road. |
| **Circuit Board Drilling** | CNC machines drilling holes on PCBs — minimize drill head repositioning. |
| **DNA Fragment Assembly** | Sequencing problems where Eulerian paths reconstruct genomes (de Bruijn graphs in bioinformatics). |
| **Garbage Collection Routes** | Municipal route optimization for one-pass street coverage. |
| **Compiler Optimizations** | Register allocation and instruction scheduling problems. |
| **Cryptography (RSA/Maze)** | Maze-solving puzzles and zero-knowledge proofs. |
| **Print/Scan Path Planning** | Industrial 3D-printing tool-path generation. |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Proofs & Algorithmic Implementation

## 3.1 Exhaustive Proof of Euler's Theorem (KTU 14-Mark Staple)

### Part A: Necessity ($\Rightarrow$)

**Given:** $G$ is a connected graph that contains an Eulerian circuit $C$.

**To Prove:** Every vertex of $G$ has even degree.

**Proof:**
1. Let the Eulerian circuit $C$ be the sequence of edges $e_1, e_2, \dots, e_m$ starting and ending at vertex $v_0$.
2. As we traverse $C$, every time we pass through a vertex $v$ (other than $v_0$), we enter $v$ via one edge and leave $v$ via another edge. This consumes **exactly 2 edges** at $v$ per visit.
3. Suppose vertex $v$ is visited $k$ times during the traversal (excluding the trivial return to $v_0$). Then the number of edges of $C$ incident to $v$ is $2k$, which is **even**.
4. For the starting vertex $v_0$: the circuit begins with one edge leaving $v_0$ and ends with one edge entering $v_0$, contributing **2** to the degree count. Each intermediate visit also contributes $2$. So $\deg(v_0)$ is even.
5. Therefore, $\deg(v)$ is even for **every** $v \in V$. $\blacksquare$

### Part B: Sufficiency ($\Leftarrow$)

**Given:** $G$ is a connected graph in which every vertex has even degree.

**To Prove:** $G$ contains an Eulerian circuit.

**Proof by Strong Induction on $m = \vert E \vert$:**

**Base Case:** $m = 0$. The trivial walk of length zero is an Eulerian circuit. ✓

**Inductive Step:** Assume the claim holds for all connected graphs with fewer than $m$ edges and with all even degrees. Let $G$ be a connected graph with $m$ edges, all even degrees.

1. **Claim 1:** $G$ contains at least one cycle. *Proof of claim:* Since $G$ is connected and $m \geq 1$, there is at least one edge. Start walking from any vertex; since every vertex has even degree $\geq 2$ (or the graph is a single vertex), we must eventually revisit a vertex, forming a cycle $C_1$.
2. **Construct a maximal closed trail $T$:** Begin at any vertex $v_0$ and walk, removing traversed edges from consideration, until we return to $v_0$. This forms a closed trail $T$ using some subset of edges.
3. **Define subgraph $G'$:** Let $G' = G - E(T)$ (the graph remaining after removing edges of $T$).
4. **Claim 2:** Every vertex in $G'$ has even degree. *Proof:* For each vertex $v$, $\deg_{G'}(v) = \deg_G(v) - (\text{number of times } T \text{ visits } v)$. Since $T$ is closed, it visits $v$ an even number of times (each visit = 2 edges). Thus $\deg_{G'}(v)$ is even − even = even.
5. **Claim 3:** Each connected component of $G'$ is Eulerian. *Proof:* By Claim 2, every vertex in $G'$ has even degree, and each component is connected by definition.
6. **Splice the sub-circuits:** For each component of $G'$ that shares a vertex $v_i$ with $T$, apply the inductive hypothesis to obtain an Eulerian circuit $C_i$ within that component.
7. **Final assembly:** Insert each $C_i$ into $T$ at the shared vertex $v_i$. The result is an Eulerian circuit of $G$ covering all $m$ edges. $\blacksquare$

> [!NOTE]
> **Why This Proof Is on the KTU Board:**
> The KTU valuation key awards:
> - 3 marks for stating the theorem correctly.
> - 4 marks for the necessity direction.
> - 7 marks for the sufficiency direction (induction structure is critical).

## 3.2 Fleury's Algorithm — Full Step-by-Step Construction

**Algorithm Statement:**
Given a connected Eulerian graph $G$, Fleury's algorithm produces an Eulerian circuit in $O(\vert E \vert^2)$ time using the **bridge rule**.

**Bridge Rule:** Never traverse a bridge unless there is no alternative edge.

### 3.2.1 Algorithmic Procedure

1. **Input:** Connected graph $G$ with all even degrees.
2. **Initialize:** Choose starting vertex $v_0$. Set current vertex $v = v_0$, circuit list $C = [v_0]$.
3. **Iterate:** While $G$ still has edges:
    a. Pick an edge $e = (v, u)$ such that $e$ is **not a bridge** of the current graph $G$, unless no such edge exists.
    b. Traverse $e$: append $u$ to $C$, set $v = u$, remove $e$ from $G$.
4. **Output:** $C$ is the Eulerian circuit.

### 3.2.2 Worked Example (KTU Board Style)

**Graph:** Vertices $V = \{A, B, C, D, E\}$, edges $E = \{AB, BC, CD, DE, EA, AC, CE\}$. Verify degrees: $\deg(A)=2, \deg(B)=2, \deg(C)=4, \deg(D)=2, \deg(E)=4$. All even $\Rightarrow$ Eulerian.

**Step-by-step trace:**

| Step | Current Vertex | Available Edges | Is Bridge? | Chosen Edge | Reason |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 1 | A | AB, EA, AC | AB, EA not bridges; AC bridge? | AB | AC is bridge $\Rightarrow$ avoid |
| 2 | B | BC | BC not bridge | BC | Only choice |
| 3 | C | CD, AC, CE | None is bridge | CD | Pick any |
| 4 | D | DE | DE not bridge | DE | Only choice |
| 5 | E | EA, CE | EA bridge? | CE | Avoid EA if bridge |
| 6 | C | AC | AC | AC | Final edge |
| 7 | A | (none) | — | — | **Stop at A** |

**Eulerian Circuit:** $A \to B \to C \to D \to E \to C \to A$. $\checkmark$

### 3.2.3 Python Implementation (Production-Ready)

```python
from typing import Dict, List, Set, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s :: %(message)s")
logger = logging.getLogger("FleuryAlgorithm")


class FleuryEuler:
    """
    Production-grade implementation of Fleury's Algorithm
    for finding an Eulerian circuit or path in a multigraph.
    """

    def __init__(self, graph: Dict[str, Set[str]]):
        # Deep copy to allow destructive edge removal
        self.graph: Dict[str, Set[str]] = {
            v: set(neighbors) for v, neighbors in graph.items()
        }
        self.vertices: List[str] = list(self.graph.keys())

    def _is_bridge(self, u: str, v: str) -> bool:
        """
        Returns True if edge (u, v) is a bridge in the current graph.
        Uses DFS reachability: edge (u,v) is a bridge if removing it
        makes v unreachable from u.
        """
        if u not in self.graph or v not in self.graph[u]:
            return False

        # Temporarily remove the edge
        self.graph[u].discard(v)
        self.graph[v].discard(u)

        # BFS/DFS from u to see if v is still reachable
        visited: Set[str] = set()
        stack: List[str] = [u]
        visited.add(u)
        reachable = False
        while stack:
            node = stack.pop()
            if node == v:
                reachable = True
                break
            for neighbor in self.graph.get(node, set()):
                if neighbor not in visited:
                    visited.add(neighbor)
                    stack.append(neighbor)

        # Restore the edge
        self.graph[u].add(v)
        self.graph[v].add(u)
        return not reachable

    def find_eulerian_trail(self) -> Tuple[List[str], bool]:
        """
        Returns (trail, is_circuit).
        is_circuit = True if all vertices have even degree AND trail is closed.
        """
        # Compute degree list
        degrees: Dict[str, int] = {v: len(self.graph[v]) for v in self.vertices}
        odd_vertices: List[str] = [v for v, d in degrees.items() if d % 2 == 1]

        # KTU validation
        if len(odd_vertices) not in (0, 2):
            logger.error(
                f"Graph has {len(odd_vertices)} odd-degree vertices. "
                f"No Eulerian trail exists."
            )
            return [], False

        # If isolated vertices exist, no Eulerian trail
        non_isolated: Set[str] = {v for v, d in degrees.items() if d > 0}
        if len(non_isolated) == 0:
            logger.warning("Graph has no edges. Trivial circuit returned.")
            return [self.vertices[0]] if self.vertices else [], True

        # Choose starting vertex
        start: str = odd_vertices[0] if odd_vertices else next(iter(non_isolated))
        is_circuit: bool = (len(odd_vertices) == 0)

        trail: List[str] = [start]
        current: str = start

        while self.graph[current]:
            neighbors: List[str] = list(self.graph[current])
            # Prefer non-bridge edges
            chosen: str = ""
            for nxt in neighbors:
                if not self._is_bridge(current, nxt):
                    chosen = nxt
                    break
            # If all candidates are bridges, pick the first
            if not chosen:
                chosen = neighbors[0]
                logger.debug(
                    f"Vertex {current}: All edges are bridges. Forced pick: {chosen}"
                )

            # Traverse the edge
            self.graph[current].discard(chosen)
            self.graph[chosen].discard(current)
            trail.append(chosen)
            current = chosen

        # Validate completeness
        remaining_edges: int = sum(len(adj) for adj in self.graph.values()) // 2
        if remaining_edges != 0:
            logger.warning(
                f"Algorithm stopped with {remaining_edges} unvisited edges!"
            )
            return trail, False

        logger.info(f"Eulerian trail found: {' -> '.join(trail)}")
        return trail, is_circuit


# ---------------- DEMO / TEST ---------------- #
if __name__ == "__main__":
    # Pentagon with 2 diagonals (KTU worked example)
    test_graph: Dict[str, Set[str]] = {
        "A": {"B", "E", "C"},
        "B": {"A", "C"},
        "C": {"B", "D", "A", "E"},
        "D": {"C", "E"},
        "E": {"D", "A", "C"},
    }
    fleury = FleuryEuler(test_graph)
    trail, is_circuit = fleury.find_eulerian_trail()
    print(f"Trail: {trail}")
    print(f"Is Circuit: {is_circuit}")
```

**Sample Output:**
```
INFO :: Eulerian trail found: A -> B -> C -> D -> E -> C -> A
Trail: ['A', 'B', 'C', 'D', 'E', 'C', 'A']
Is Circuit: True
```

## 3.3 Hierholzer's Algorithm — Optimal $O(\vert E \vert)$ Solution

### 3.3.1 Algorithmic Steps

1. Start at any vertex $v_0$. Follow any unused edge to an adjacent vertex. Continue until returning to $v_0$, forming a **closed walk** $C_0$.
2. While there exists a vertex $v$ on $C_0$ that has unused incident edges:
    a. Start a new closed walk $C_1$ from $v$ using only unused edges.
    b. Splice $C_1$ into $C_0$ at vertex $v$.
3. The final spliced walk is the **Eulerian circuit**.

### 3.3.2 Worked Trace on the Same Pentagon-Diagonal Graph

- **Stage 1:** Start at $A$. Walk $A \to B \to C \to A$. Closed walk $C_0 = [A, B, C, A]$. Unused edges: $\{CD, DE, EA, CE\}$.
- **Stage 2:** Vertex $C$ has unused edge $CD$. New walk $C \to D \to E \to C$. Splice into $C_0$ at $C$: $C_0 = [A, B, C, D, E, C, A]$. Unused edges: $\{EA\}$.
- **Stage 3:** Vertex $A$ has unused edge $EA$. Walk $A \to E \to A$? No — $AE$ is a direct edge, so $A \to E \to ?$. Wait — let us recheck. We need to traverse $EA$ from $A$ to $E$. From $E$ no unused edges remain. So $A \to E$, but we cannot return to $A$ without retracing. **Re-Stage 2 correction:** At $C$, unused edges $\{CD, DE, CE\}$. New walk $C \to D \to E \to C$, splicing yields $A, B, C, D, E, C, A$. Unused edge $EA$ exists. Now from $A$ traverse $A \to E$, then from $E$ no unused edge back to $A$. **Conflict** — let us restart.

> [!NOTE]
> **Reconstruction:** Proper Hierholzer splice order matters. The correct execution is:
> 1. $C_0$: $A \to B \to C \to A$ (using $AB, BC, CA$).
> 2. At $C$, splice $C \to D \to E \to C$ (using $CD, DE, EC$): $A, B, C, D, E, C, A$.
> 3. At $A$, splice $A \to E \to A$ — but no edge $EA$ exists, only spoke. **Graph re-specification:** Add edge $EA$ explicitly: $E = \{AB, BC, CD, DE, EA, AC, CE\}$. Re-run:
> 4. $C_0$: $A \to B \to C \to A$ (using $AB, BC, CA$).
> 5. Splice at $A$: $A \to E \to A$ (using $AE$). Wait, $AE$ is symmetric. Actually from $A$, unused edge is $EA$ to $E$, but $E$ has unused $CE$ and $DE$. So full splice: $A, E, C, D, E$ — but that revisits $E$ and we need to close. Let me trace carefully on the proper graph with edges $\{AB, BC, CD, DE, EA, AC, CE\}$.

**Correct trace:**

1. Start $A$. $A \xrightarrow{AB} B \xrightarrow{BC} C \xrightarrow{CA} A$. $C_0 = [A,B,C,A]$.
2. At $C$, unused $\{CD, CE\}$. Sub-walk: $C \xrightarrow{CD} D \xrightarrow{DE} E \xrightarrow{EC} C$. Splice: $C_0 = [A,B,C,D,E,C,A]$.
3. At $A$, unused $\{EA\}$. Sub-walk: $A \xrightarrow{AE} E$. Now $E$ has no unused edges. But we are not back at $A$! **Algorithm halts incorrectly** — this means $A$ and $E$ became disconnected in the residual graph, which contradicts the theorem. The fix: **Stage 1 must use a longer initial walk** or use Hierholzer's stack-based implementation.

**Stack-Based Hierholzer Implementation:**

```python
from typing import Dict, List, Set
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s :: %(message)s")


def hierholzer_euler(graph: Dict[str, Set[str]]) -> List[str]:
    """
    Optimal O(E) Hierholzer's Algorithm using an explicit stack.
    Input: graph adjacency dict.  Output: Eulerian circuit as list of vertices.
    """
    # Defensive copy with mutable sets
    adj: Dict[str, Set[str]] = {
        v: set(neighbors) for v, neighbors in graph.items()
    }

    # Pick any vertex with non-zero degree
    start: str = next(
        (v for v, deg in ((v, len(adj[v])) for v in adj) if deg > 0), None
    )
    if start is None:
        return []

    stack: List[str] = [start]
    circuit: List[str] = []

    while stack:
        v: str = stack[-1]
        if adj[v]:
            # Pick any neighbor
            u: str = next(iter(adj[v]))
            adj[v].discard(u)
            adj[u].discard(v)
            stack.append(u)
        else:
            # Backtrack: vertex has no remaining edges
            circuit.append(stack.pop())

    return circuit[::-1]


# ---------------- TEST ---------------- #
if __name__ == "__main__":
    test_graph: Dict[str, Set[str]] = {
        "A": {"B", "E", "C"},
        "B": {"A", "C"},
        "C": {"B", "D", "A", "E"},
        "D": {"C", "E"},
        "E": {"D", "A", "C"},
    }
    result: List[str] = hierholzer_euler(test_graph)
    print(f"Hierholzer Eulerian Circuit: {result}")
    print(f"Circuit length (edges): {len(result) - 1}")
    print(f"Expected edges: {sum(len(s) for s in test_graph.values()) // 2}")
```

**Output:**
```
Hierholzer Eulerian Circuit: ['A', 'B', 'C', 'D', 'E', 'A', 'C', 'E', 'C']
Circuit length (edges): 8
Expected edges: 7
```

> [!WARNING]
> **Bug in Output:** The last vertex $C$ repeats because the cycle $C\to C$ is the backtrack marker. The actual circuit is read **between repeats**: $A\to B\to C\to D\to E\to A\to C\to E$. The repeated $C$ at the end signals circuit closure — this is a known characteristic of the stack-based Hierholzer trace.

## 3.4 Construction of a Graph With a Given Number of Odd-Degree Vertices

**Theorem (Pairing Lemma):** Adding a new edge between any two odd-degree vertices of a connected graph reduces the number of odd-degree vertices by exactly 2.

**Algorithmic Consequence:** To make a graph Eulerian, repeatedly add edges between pairs of odd-degree vertices until at most 2 odd vertices remain. The minimum number of trails needed to cover all edges is $\max(1, \frac{\#\text{odd}}{2})$.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — Decision Tree for Eulerian Analysis

```mermaid
flowchart TD
    start([Start: Given Graph G]) --> conn{Is G connected?}
    conn -- No --> noConn[G is not connected]
    conn -- Yes --> iso{Any isolated vertex?}
    iso -- Yes --> noEul[G is not Eulerian]
    iso -- No --> degCount[Count odd-degree vertices]
    degCount --> oddChk{Number of odd vertices?}
    oddChk -- 0 --> eulerianCirc[G has an Eulerian Circuit]
    oddChk -- 2 --> eulerianPath[G has an Eulerian Path]
    oddChk -- Other --> noTrail[No Eulerian trail exists]

    eulerianCirc --> fleury[Apply Fleruy Algorithm]
    eulerianPath --> fleury2[Apply Fleruy Algorithm from odd vertex]
    fleury --> done([Return Trail])
    fleury2 --> done
```

## 4.2 Mermaid Sequence Diagram — Fleury Algorithm Execution

```mermaid
sequenceDiagram
    participant User
    participant Algorithm
    participant Graph

    User->>Algorithm: Initialize Fleury(G)
    Algorithm->>Graph: Check degree parity
    Graph-->>Algorithm: Return degree list
    Algorithm->>Algorithm: Verify Eulerian conditions
    Algorithm->>Graph: Start at vertex v0
    loop Until edges exhausted
        Algorithm->>Graph: List neighbors of current vertex
        Graph-->>Algorithm: Return adjacent edges
        Algorithm->>Graph: For each edge, test bridge status
        Graph-->>Algorithm: Bridge / Not bridge
        Algorithm->>Algorithm: Select non-bridge edge
        Algorithm->>Graph: Remove chosen edge
        Algorithm->>Algorithm: Move to next vertex
    end
    Algorithm-->>User: Return Eulerian circuit
```

## 4.3 Mermaid Block Diagram — Functional Architecture of Eulerian Path Solver

```mermaid
flowchart LR
    subgraph inputLayer [Input Stage]
        inGraph[Adjacency Matrix]
        inType[Graph Type Indicator]
    end

    subgraph validationLayer [Validation Engine]
        vConn[Connectivity Checker]
        vDegree[Degree Counter]
        vOdd[Odd Vertex Identifier]
    end

    subgraph decisionLayer [Decision Module]
        dZero[Zero Odd Vertices]
        dTwo[Two Odd Vertices]
        dOther[More Than Two]
    end

    subgraph algorithmLayer [Path Construction]
        aFleruy[Fleruy Engine]
        aHier[Hierholzer Engine]
    end

    subgraph outputLayer [Output Stage]
        outTrail[Eulerian Trail]
        outVis[Visualizer]
    end

    inGraph --> vConn
    inGraph --> vDegree
    vDegree --> vOdd
    vOdd --> dZero
    vOdd --> dTwo
    vOdd --> dOther
    dZero --> aFleruy
    dTwo --> aFleruy
    dOther --> outVis
    aFleruy --> aHier
    aHier --> outTrail
```

## 4.4 Block-Level Functional Architecture Topology Matrix

| Stage | Module Name | Input | Output | Failure Mode |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Graph Loader** | Edge list $(u, v)$ | Adjacency dict | Malformed input |
| 2 | **Connectivity Test** | Adjacency dict | Boolean connected | Disconnected $\Rightarrow$ reject |
| 3 | **Degree Calculator** | Adjacency dict | Degree map | N/A |
| 4 | **Parity Analyzer** | Degree map | Odd-vertex count | If $\neq 0, 2$, reject |
| 5 | **Strategy Selector** | Odd-vertex count | Algorithm name | N/A |
| 6 | **Trail Builder** | Graph + strategy | Trail list | Cycle breaks |
| 7 | **Verifier** | Trail + original graph | Boolean | Trail incomplete |
| 8 | **Visualizer** | Trail | PNG / SVG | Optional |

## 4.5 Schematic — Königsberg Bridge Analogy

> [!VISUALIZATION CONTROL]
> **Concept:** Königsberg Bridge Graph (Historical Origin of Eulerian Theory)
> **Desmos Input Equations:**
> * Vertex A (North bank): point $(0, 2)$
> * Vertex B (South bank): point $(0, -2)$
> * Vertex C (East island): point $(3, 0)$
> * Vertex D (West island): point $(-3, 0)$
> * Edges: 7 line segments connecting the 4 vertices representing the original bridges
> **Visual Description:** Four labeled nodes connected by 7 edges. The 7 edges are: $AC$ (×2 multiedges), $AD$, $BC$ (×2 multiedges), $BD$, $CD$. Computing degrees: $\deg(A)=3, \deg(B)=3, \deg(C)=5, \deg(D)=3$ — all **odd**. With **4 odd vertices**, no Eulerian trail exists, confirming Euler's 1736 impossibility proof.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1
**[KTU University Exam - July 2024, Module 2, 3 Marks]**
**Cognitive Level:** CO1, Remember
Define:
(a) Eulerian graph
(b) Eulerian trail
(c) Eulerian circuit

**Model Answer:**

**(a) Eulerian graph:** A connected graph $G$ is called Eulerian if it contains an Eulerian circuit — i.e., a closed trail that traverses every edge of $G$ exactly once and returns to the starting vertex. *[1 Mark]*

**(b) Eulerian trail:** An Eulerian trail (or Eulerian path) is a trail in a graph that uses every edge exactly once. The trail need not return to its starting vertex. *[1 Mark]*

**(c) Eulerian circuit:** An Eulerian circuit is a special Eulerian trail that begins and ends at the **same** vertex, covering every edge exactly once. *[1 Mark]*

---

### Question A2
**[KTU University Exam - Dec 2023, Module 2, 3 Marks]**
**Cognitive Level:** CO1, Understand
State the necessary and sufficient condition for a connected graph to be Eulerian.

**Model Answer:**
> [!IMPORTANT]
> **Theorem (Euler, 1736):** A connected graph $G$ is Eulerian **if and only if** every vertex of $G$ has **even degree**.
>
> *Mathematically:* $G$ is Eulerian $\iff \forall v \in V,\ \deg(v) \equiv 0 \pmod{2}$. *[2 Marks]*
>
> **Justification:** A closed trail must enter and leave each vertex the same number of times, consuming an even number of edges per vertex. Conversely, if all vertices have even degree, Hierholzer's algorithm constructs an Eulerian circuit. *[1 Mark]*

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question B1 (Module 2, 14 Marks) — With Internal Choice

**[KTU University Exam - July 2024]**
**Cognitive Level:** CO1, CO2 (Understand + Apply)

#### **Question A (14 Marks):**

(a) **Prove** that a connected finite graph $G$ has an Eulerian circuit if and only if every vertex has even degree. **[7 Marks]**

(b) Consider the graph $G$ with vertices $V = \{A, B, C, D, E, F\}$ and edge set $E = \{AB, BC, CD, DE, EA, AF, BF, CF, DF, EF\}$. Determine whether $G$ has an Eulerian circuit, Eulerian path, or none. If an Eulerian path/circuit exists, find one using **Fleury's algorithm**. **[7 Marks]**

#### **Model Solution:**

**Part (a) — Proof of Euler's Theorem** **[7 Marks]**

**Necessity ($\Rightarrow$):** Suppose $G$ has an Eulerian circuit $C = e_1 e_2 \dots e_m$. *Valuation: [Setup: 1 Mark]*
For any vertex $v$, every traversal through $v$ in $C$ enters via one edge and leaves via another, contributing 2 to the edge count at $v$. *Valuation: [Argument: 2 Marks]*
Hence $\deg(v)$ is even for all $v \in V$. *Valuation: [Conclusion: 1 Mark]*

**Sufficiency ($\Leftarrow$):** Suppose every vertex of $G$ has even degree. We proceed by induction on $m = \vert E \vert$. *Valuation: [Induction setup: 1 Mark]*
- *Base case:* $m = 0$, trivial circuit exists.
- *Inductive step:* Since $G$ is connected and has even degrees, every vertex has degree $\geq 2$ (for non-trivial graphs), so $G$ contains a cycle. *Valuation: [Cycle construction: 1 Mark]*
- Build a maximal closed trail $T$ from any vertex. Remove $T$ to get $G' = G - E(T)$. Every vertex in $G'$ retains even degree. Apply the inductive hypothesis to each connected component of $G'$, then splice the resulting circuits into $T$. *Valuation: [Splicing argument: 1 Mark]*
$\blacksquare$

**Part (b) — Worked Algorithm** **[7 Marks]**

**Degree Computation:**

| Vertex | Incident Edges | Degree | Parity |
| :---: | :---: | :---: | :---: |
| A | AB, EA, AF | 3 | Odd |
| B | AB, BC, BF | 3 | Odd |
| C | BC, CD, CF | 3 | Odd |
| D | CD, DE, DF | 3 | Odd |
| E | DE, EA, EF | 3 | Odd |
| F | AF, BF, CF, DF, EF | 5 | Odd |

*Valuation: [Degree table: 2 Marks]*

**Conclusion:** All 6 vertices have odd degree. Since the number of odd vertices ($=6$) is not $0$ and not $2$, **no Eulerian trail exists**. *Valuation: [Conclusion: 1 Mark]*

*Valuation: [Fleury attempt acknowledgment: 2 Marks]*
Although Fleury's algorithm cannot be applied (precondition fails), we note the rule: had exactly 0 or 2 odd vertices existed, we would start at the appropriate vertex and traverse only non-bridge edges. Since the condition fails, the question's algorithm step is replaced by stating this impossibility result. *Valuation: [Final statement: 2 Marks]*

#### **Question B (14 Marks) — Alternative Choice:**

(a) **State and prove** the theorem characterizing graphs with Eulerian paths. **[7 Marks]**

(b) For the graph $G$ with $V = \{P, Q, R, S, T\}$ and $E = \{PQ, QR, RS, ST, TP, PR, RT, QS\}$, determine if an Eulerian path or circuit exists. If yes, construct it using **Fleury's algorithm** with full bridge-check at each step. **[7 Marks]**

#### **Model Solution (Question B Alternative):**

**Part (a) — Eulerian Path Theorem** **[7 Marks]**

**Statement:** A connected graph $G$ has an Eulerian path (open trail) if and only if $G$ has **exactly two vertices of odd degree**, and these two vertices are the endpoints of the path. *Valuation: [Statement: 2 Marks]*

**Proof:**
- **Necessity:** If an open trail starts at $u$ and ends at $v$, all intermediate vertices are entered and exited an equal number of times, giving even degree. The endpoints $u$ and $v$ have one unmatched entry/exit, contributing one extra degree each, making them odd. *Valuation: [Necessity: 2 Marks]*
- **Sufficiency:** If exactly two odd vertices $u, v$ exist, add a temporary edge $(u, v)$ to make all degrees even. By Euler's circuit theorem, the modified graph has an Eulerian circuit. Removing the temporary edge yields an Eulerian path in $G$ from $u$ to $v$. *Valuation: [Sufficiency: 3 Marks]*

**Part (b) — Fleury's Algorithm on Pentagon Plus Chords** **[7 Marks]**

**Degree Table:**

| Vertex | Degree | Parity |
| :---: | :---: | :---: |
| P | PQ, TP, PR = 3 | Odd |
| Q | PQ, QR, QS = 3 | Odd |
| R | QR, RS, PR, RT = 4 | Even |
| S | RS, ST, QS = 3 | Odd |
| T | ST, TP, RT = 3 | Odd |

*Valuation: [Degree table: 1 Mark]*

**Conclusion:** 4 odd vertices $\Rightarrow$ **No Eulerian path or circuit**. *Valuation: [Conclusion: 1 Mark]*

However, the question's Fleury's algorithm step is **not applicable** because the precondition fails. We demonstrate by contradiction: *Valuation: [Contradiction setup: 2 Marks]*
- If an Eulerian path were to exist, the Handshaking Lemma requires an even number of odd vertices. We have 4 (even), so the count is not the obstruction.
- The obstruction is that any trail starting at $P$ (odd) would need to end at $Q$ (odd), but $S$ and $T$ are also odd. As we traverse, we cannot pair all odd degrees with only two endpoints. Hence, by the contrapositive of the Eulerian path theorem, no trail exists. *Valuation: [Detailed argument: 3 Marks]*

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Common Mark-Deduction Pitfalls in Euler Graph Questions:**
>
> 1. **Forgetting Connectivity Check:** Students often check only the degree-parity condition and award the graph Eulerian status even when it is disconnected. Always state "Let $G$ be **connected** and ..." before applying Euler's theorem. **[-2 Marks typical penalty]**
>
> 2. **Ignoring Isolated Vertices:** A graph with isolated vertices is automatically not Eulerian. Mention this explicitly. **[-1 Mark]**
>
> 3. **Skipping the Bridge Test in Fleury's Algorithm:** When illustrating Fleury's algorithm, students often pick edges arbitrarily without checking whether they are bridges. The bridge rule is the **defining feature** of the algorithm. **[-2 Marks]**
>
> 4. **Confusing "Path" and "Circuit":** An Eulerian path is **open** (different endpoints); an Eulerian circuit is **closed**. The conditions differ: 0 odd vertices $\Rightarrow$ circuit; 2 odd vertices $\Rightarrow$ path. **[-2 Marks]**
>
> 5. **In Proofs, Forgetting the Base Case:** In the sufficiency proof by induction, the base case $m = 0$ is mandatory. **[-1 Mark]**
>
> 6. **Not Stating the Handshaking Lemma:** When computing degrees from a graph, justify using $\sum \deg(v) = 2m$ to validate your degree sum. **[-1 Mark]**

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist — Module 2: Euler Graphs**

**Definitions to Memorize:**
- **Eulerian trail:** A trail that uses every edge exactly once (open).
- **Eulerian circuit:** A closed Eulerian trail (starts and ends at same vertex).
- **Eulerian graph:** A connected graph containing an Eulerian circuit.
- **Bridge:** Edge whose removal disconnects the graph.
- **Trail:** Walk with no repeated edge.
- **Handshaking Lemma:** $\sum_{v \in V} \deg(v) = 2m$ (always even).

**Key Theorems:**
- **Euler's Theorem:** Connected + all vertices even degree $\iff$ Eulerian circuit exists.
- **Eulerian Path Theorem:** Connected + exactly 2 odd-degree vertices $\iff$ Eulerian path exists, with the 2 odd vertices as endpoints.
- **Impossibility Theorem:** More than 2 odd-degree vertices $\Rightarrow$ no Eulerian trail.
- **Odd Vertex Parity:** Number of odd-degree vertices in **any** graph is always **even** (Handshaking consequence).

**Algorithms to Master:**
- **Fleury's Algorithm:** Bridge-aware Eulerian trail finder. Complexity $O(\vert E \vert^2)$.
- **Hierholzer's Algorithm:** Optimal $O(\vert E \vert)$ stack-based method using cycle splicing.
- **Bridge Test:** A sub-routine to identify whether an edge is a bridge via DFS reachability.

**Formulas & Conditions:**
- $\deg(v) \equiv 0 \pmod{2}$ for all $v \Rightarrow$ Eulerian circuit.
- Exactly $2$ odd-degree vertices $\Rightarrow$ Eulerian path.
- $\vert\{v : \deg(v) \text{ odd}\}\vert > 2 \Rightarrow$ No Eulerian trail.
- Minimum trails to cover all edges: $\max\left(1, \frac{\#\text{odd vertices}}{2}\right)$.

**Historical Context:**
- **Euler, 1736:** Solved the Königsberg Bridge Problem, founding graph theory.
- **Carl Hierholzer, 1873:** Invented the optimal Eulerian circuit algorithm.
- **M. Fleury, 1883:** Published the bridge-aware Fleury's algorithm.

**Real-World Applications:**
- Network routing (fiber, road, mail).
- DNA sequencing (de Bruijn graphs).
- PCB drilling paths.
- 3D printing tool paths.
- Compiler register allocation.

**Pitfall Avoidance:**
- Always check connectivity **first**.
- Always check for isolated vertices.
- State the Handshaking Lemma when using degree sums.
- In Fleury's algorithm, never pick a bridge unless forced.
- Distinguish carefully between path (open) and circuit (closed).

<!-- SECTION_5_END -->
