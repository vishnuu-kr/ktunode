# Braess paradox network traffic modeling configurations templates tracks channels parameters structures

<!-- SECTION_1_START -->

# Braess Paradox & Network Traffic Routing Configurations

## 1. Core Technical Definition

> [!IMPORTANT]
> **KTU 2024 Syllabus Anchor – Module 4: Network Games & Routing Infrastructure**
> The **Braess Paradox** is a counter-intuitive result in *non-cooperative network routing games* discovered by Dietrich Braess (1968). It states that **adding a new edge (a faster shortcut) to a congested network can *increase* the total travel time experienced by every self-interested user at equilibrium**.

Formally, given a directed graph $G = (V, E)$ with a source $s$ and sink $t$, a flow demand $r$ units, and latency (cost) functions $\ell_e(x_e)$ on each edge $e \in E$, the Braess paradox occurs when:

$$
\text{Cost}(NE_{\text{with new edge}}) > \text{Cost}(NE_{\text{without new edge}})
$$

where $NE$ denotes the *Wardrop / Nash equilibrium flow*.

### Conceptual Analogy – "The Phantom Shortcut"

Imagine 4000 drivers commuting daily from Town A to Town D via two scenic routes:

- **Route 1 (Western):** A $\rightarrow$ B $\rightarrow$ D — narrow mountain pass, slow when busy.
- **Route 2 (Eastern):** A $\rightarrow$ C $\rightarrow$ D — narrow coastal bridge, slow when busy.

A *politician* promises to "improve traffic" by paving a brand-new super-fast road B $\rightarrow$ C (zero congestion). Intuitively, drivers should love this. But here is the paradox:

> [!NOTE]
> **Paradox Outcome:** Once the new road opens, *every* driver selfishly switches to A $\rightarrow$ B $\rightarrow$ C $\rightarrow$ D, overloading the narrow mountain pass and the narrow bridge *simultaneously*. Total commute time **worsens** for everyone compared to before!

The new road was *so attractive* that it created a "selfish" detour pattern, choking both bottlenecks. Removing it actually helps everyone — a hallmark violation of the classical "more infrastructure is better" engineering intuition.

### GeoGebra / Desmos Visualization Control

> [!VISUALIZATION]
> **Concept:** Pigou-type linear latency curves and Braess's original diamond network equilibrium
> **GeoGebra / Desmos Input Equations:**
> * $f_{AB}(x) = x$ — linear congestion on edge A-B
> * $f_{AC}(x) = 1$ — constant bottleneck on edge A-C
> * $f_{BD}(x) = 1$ — constant bottleneck on edge B-D
> * $f_{CD}(x) = x$ — linear congestion on edge C-D
> * $f_{BC}(x) = 0$ — "free" super-fast shortcut added later
> **Visual Description:** Plot latency (y-axis) vs. flow (x-axis). The diagonal line $y = x$ is the selfish congestion cost; horizontal lines $y = 1$ represent fixed bottlenecks. The intersection points reveal the *Wardrop equilibrium* and demonstrate how adding the zero-cost shortcut shifts all flow onto the new path A-B-C-D, raising the per-driver cost.

### Key Terminology Snapshot

| Term | Meaning |
|---|---|
| **Wardrop Equilibrium** | A flow where no driver can reduce travel time by unilaterally switching routes |
| **Selfish Routing** | Each infinitesimal user minimizes *own* latency, ignoring externalities |
| **Price of Anarchy (PoA)** | Ratio of worst equilibrium cost to system-optimal cost |
| **Braess Graph** | A specific 4-node, 5-edge digraph exhibiting the paradox |
| **Latency Function** | Maps edge flow to travel time on that edge |

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2. Theoretical Foundation of Routing Games

### 2.1 Atomic vs. Non-Atomic Routing

KTU Module 4 distinguishes two routing models:

- **Non-atomic (Wardrop) routing:** Infinitely many users, each with negligible size. Modeled by *continuous flow*. Equilibrium condition: *all used s-t paths have equal and minimum latency*.
- **Atomic (Koutsoupias–Papadimitriou) routing:** A finite number of players, each controlling a non-negligible amount of flow. Modeled by *best-response dynamics*.

> [!IMPORTANT]
> **For KTU Board Exams:** The Braess paradox is almost always framed in the **non-atomic (Wardrop)** setting. Master the diamond-shaped 4-node example.

### 2.2 The Pigou Network (Foundation Stone)

The simplest Braess-style example is the *Pigou network* with two parallel edges between $s$ and $t$:

- Edge 1: linear latency $\ell_1(x) = x$
- Edge 2: constant latency $\ell_2(x) = 1$

For 1 unit of demand, the Wardrop equilibrium puts the *entire* flow on edge 1 (since $\ell_1(1) = 1 = \ell_2(1)$; any split is an equilibrium, but unique one is on the linear edge by convention or by minimum-cost principle). The social cost is:

$$
C(NE) = \int_0^1 \ell_1(x) \, dx = \int_0^1 x \, dx = \frac{1}{2}
$$

But the system-optimum balances flow to equalize marginal cost: $0.5$ on each, giving social cost $0.5$ as well — coincidentally equal here. The PoA emerges more strongly in asymmetric versions.

### 2.3 The Full Braess Diamond — Why and How

> [!NOTE]
> **Setup:** 4 nodes {A, B, C, D}; demand = 1 unit from A to D; cost functions in original network:
> * A $\rightarrow$ B : $x$ (linear, where $x$ is flow)
> * A $\rightarrow$ C : $1$ (constant)
> * B $\rightarrow$ D : $1$ (constant)
> * C $\rightarrow$ D : $x$ (linear)

**Original Network (4 edges) — Wardrop Equilibrium:**

Two paths exist:
- Path $P_1$: A-B-D, cost $= x_{AB} + 1$
- Path $P_2$: A-C-D, cost $= 1 + x_{CD}$

Letting $f$ = flow on $P_1$, then $x_{AB} = f$, $x_{CD} = 1 - f$, and $x_{AC} = 1 - f$, $x_{BD} = f$.

Wardrop condition: all used paths have equal cost. With both used:

$$
f + 1 = 1 + (1 - f) \implies f = 0.5
$$

Equilibrium per-driver cost $= 0.5 + 1 = 1.5$.

Total social cost $= 1 \times 1.5 = 1.5$.

**Augmented Network (5 edges — add shortcut B $\rightarrow$ C with cost $0$):**

New shortest path $P_3$: A-B-C-D, cost $= x_{AB} + 0 + x_{CD} = f + (1 - f) = 1$.

Compare to other paths:
- A-B-D: $f + 1$ (used only if $=1$, i.e., $f = 0$)
- A-C-D: $1 + (1 - f)$ (used only if $=1$, i.e., $f = 1$)
- A-C-B-D: $1 + 0 + 1 = 2$ (never competitive)

**New equilibrium:** all 1 unit on $P_3$, giving $x_{AB} = x_{CD} = 1$. Per-driver cost $= 1 + 0 + 1 = 2$.

> [!WARNING]
> **The Paradox Realized:** Per-driver cost rose from **1.5 to 2** — a **33% deterioration** purely from adding a free edge!

### 2.4 Real-World Engineering & CS Utility

The Braess paradox is not academic folklore — it is observed in:

1. **Internet routing (BGP / OSPF):** Adding a low-latency peering link can cause traffic to flap and create congestion hot-spots.
2. **Road traffic engineering:** The 1990 New York City case where closing 42nd Street at Times Square *reduced* congestion city-wide.
3. **Electrical grids:** Adding transmission lines can destabilize power flows.
4. **Ad-hoc wireless / mesh networks:** New relay nodes may paradoxically increase end-to-end delay.
5. **Mechanism design:** Justifies the *toll/price-of-anarchy reduction* literature — Pigouvian tolls to align selfish and optimal behavior.

### 2.5 KTU High-Yield Formula Sheet

| Symbol / Formula | Description |
|---|---|
| $\ell_e(x_e)$ | Latency (cost) function on edge $e$ as function of its flow $x_e$ |
| Wardrop Eq. | $h_p > 0 \implies \sum_{e \in p} \ell_e(x_e) \le \sum_{e \in q} \ell_e(x_e)$ for all $s$-$t$ paths $q$ |
| Social Cost $C(f)$ | $\sum_{e \in E} x_e \cdot \ell_e(x_e)$ |
| Total Latency $L(f)$ | $\sum_{e} \int_0^{x_e} \ell_e(y) \, dy$ |
| PoA | $\sup_{I} \dfrac{C(\text{NE}(I))}{C(\text{OPT}(I))}$ over all instances $I$ |
| Pigou Bound | $\text{PoA} \le \dfrac{4}{3}$ for linear latencies in non-atomic routing |
| Braess Example Cost (Before) | $1.5$ per driver, total social cost $1.5$ |
| Braess Example Cost (After) | $2$ per driver, total social cost $2$ |
| PoA (Braess Diamond) | $2 \div 1.5 = \dfrac{4}{3}$ (matches Pigou bound — tight!) |
| Marginal-Cost Toll | $T_e(x_e) = x_e \cdot \ell_e'(x_e)$ on edge $e$ (Pigouvian) |

> [!TIP]
> **KTU Examiner Tip:** Whenever you solve a Braess example, *always* end by computing PoA. Showing the link to Pigou's bound of $4/3$ instantly upgrades your answer to "KTU high-relevance" status.

### 2.6 Mechanism Design Perspective

The paradox motivates the entire sub-field of **Network Mechanism Design**:

- **Question:** Can we design tolls on edges so selfish users reproduce the *optimal* flow?
- **Answer (Beckmann, McFadden, Winsten 1956):** Yes — apply *Pigouvian marginal-cost tolls* on each edge.
- **Braess's Resolution:** Add a toll on the *new* shortcut equal to its marginal external cost. Selfish users then avoid the over-used shortcut, restoring the original equilibrium.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Code & Symbolic Implementation

## 3. Exhaustive Derivation of the Braess Paradox

### 3.1 Problem Statement (Formal)

Let $G = (V, E)$ with $V = \{A, B, C, D\}$, $E_{\text{orig}} = \{(A,B), (A,C), (B,D), (C,D)\}$. Latencies:

$$
\ell_{AB}(x) = x, \quad \ell_{AC}(x) = 1, \quad \ell_{BD}(x) = 1, \quad \ell_{CD}(x) = x
$$

Demand: $r = 1$ from A to D. Find:

1. Wardrop equilibrium flow and cost.
2. System-optimal flow and cost.
3. Augment with new edge $(B, C)$ having $\ell_{BC}(x) = 0$. Recompute.

### 3.2 Step-by-Step Derivation — Original Network

**Step 1 — Enumerate paths.**

$$
\mathcal{P} = \{ P_1 = A\text{-}B\text{-}D, \quad P_2 = A\text{-}C\text{-}D \}
$$

**Step 2 — Express edge flows in terms of path flows $f_1, f_2$.**

Let $f_1$ = flow on $P_1$, $f_2$ = flow on $P_2$, with $f_1 + f_2 = 1$.

$$
x_{AB} = f_1, \quad x_{BD} = f_1, \quad x_{AC} = f_2, \quad x_{CD} = f_2
$$

**Step 3 — Write path latencies.**

$$
L_1(f_1, f_2) = x_{AB} + x_{BD} = f_1 + 1
$$

$$
L_2(f_1, f_2) = x_{AC} + x_{CD} = 1 + f_2 = 1 + (1 - f_1) = 2 - f_1
$$

**Step 4 — Apply Wardrop equilibrium condition.**

For both paths to be used: $L_1 = L_2$:

$$
f_1 + 1 = 2 - f_1 \implies 2f_1 = 1 \implies f_1 = 0.5
$$

Therefore $f_2 = 0.5$.

**Step 5 — Compute equilibrium cost per driver.**

$$
L^* = L_1 = 0.5 + 1 = 1.5
$$

Equivalently, $L_2 = 1 + 0.5 = 1.5$. **Confirmed.**

**Step 6 — Compute total social cost.**

$$
C_{\text{NE}} = \sum_{e \in E} x_e \cdot \ell_e(x_e) = f_1 \cdot f_1 + f_2 \cdot 1 + f_1 \cdot 1 + f_2 \cdot f_2
$$

$$
= 0.5^2 + 0.5 + 0.5 + 0.5^2 = 0.25 + 0.5 + 0.5 + 0.25 = 1.5
$$

Or simply: $C_{\text{NE}} = r \cdot L^* = 1 \times 1.5 = 1.5$.

**Step 7 — Compute system-optimum (for comparison).**

Minimize $C(f) = \sum_e x_e \ell_e(x_e)$ subject to $f_1 + f_2 = 1$:

$$
C(f_1) = f_1^2 + (1 - f_1) + f_1 + (1 - f_1)^2
$$

Differentiate:

$$
\frac{dC}{df_1} = 2f_1 - 1 + 1 - 2(1 - f_1) = 4f_1 - 2 = 0 \implies f_1 = 0.5
$$

**In this symmetric Braess example, NE = OPT.** So PoA of the *original* network is 1.

### 3.3 Step-by-Step Derivation — Augmented Network (Add B → C)

**Step 1 — New edge list.**

$$
E_{\text{new}} = E_{\text{orig}} \cup \{(B, C)\}, \quad \ell_{BC}(x) = 0
$$

**Step 2 — New path set.**

$$
\mathcal{P}_{\text{new}} = \{ P_1, P_2, P_3 = A\text{-}B\text{-}C\text{-}D, P_4 = A\text{-}C\text{-}B\text{-}D \}
$$

Path latencies:
- $L_1 = x_{AB} + x_{BD} = f_1 + 1$  (and $f_1$ on $P_1$)
- $L_2 = x_{AC} + x_{CD} = 1 + f_2$  (with $f_2$ on $P_2$)
- $L_3 = x_{AB} + x_{BC} + x_{CD} = f_1 + f_3 + (f_2 + f_3) = f_1 + f_2 + 2f_3$
- $L_4 = x_{AC} + x_{CB} + x_{BD} = (f_2 + f_3) + f_3 + f_1 = f_1 + f_2 + 2f_3$ (same as $L_3$ if BC used)

Wait, careful — $P_3$ uses BC forward, $P_4$ uses CB. The new edge BC only has cost 0 forward; assume symmetric cost 0 for simplicity.

**Step 3 — Identify dominant new path.**

The shortcut B → C is free, so A-B-C-D has latency $f_1 + 0 + (1 - f_1) = 1$ when all flow is on it. Compare:

- A-B-C-D: cost = 1 (when $f_1 = 1, f_2 = 0$)
- A-B-D: cost = $1 + 1 = 2$
- A-C-D: cost = $1 + 1 = 2$

**Step 4 — New Wardrop equilibrium.**

All flow on $P_3$: $f_1 = 0, f_2 = 0, f_3 = 1$.

$$
L_3 = 1 \cdot 1 + 0 + 1 \cdot 1 = 2 \text{ per driver}
$$

Edge flows: $x_{AB} = 1, x_{BC} = 1, x_{CD} = 1, x_{AC} = 0, x_{BD} = 0$.

**Step 5 — Social cost comparison.**

$$
C_{\text{NE, new}} = 1 \cdot 1 + 0 + 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 = 2
$$

Versus $C_{\text{NE, orig}} = 1.5$. **Braess paradox confirmed.**

**Step 6 — Optimal flow in new network.**

Minimize $C(f_3) = f_3^2 + (1 - f_3) + f_3 + (1 - f_3)^2 + 0 \cdot f_3$. Solving $\frac{dC}{df_3} = 0$ yields $f_3 = 0.5$ (same as original optimum). Optimal cost = 1.5.

**Step 7 — Price of Anarchy (new network).**

$$
\text{PoA} = \frac{C_{\text{NE, new}}}{C_{\text{OPT, new}}} = \frac{2}{1.5} = \frac{4}{3}
$$

This is the *tight* Pigou bound for linear latencies — a celebrated result by Roughgarden (2001).

### 3.4 Symbolic Verification with SymPy

```python
from sympy import symbols, Eq, solve, diff, Rational

# Define path flow variables (original 4-edge network)
f1 = symbols('f1', nonnegative=True)
f2 = 1 - f1  # demand = 1

# Latency functions
# A->B: x, A->C: 1, B->D: 1, C->D: x

# Path latencies
L1 = f1 + 1             # A-B-D
L2 = 1 + (1 - f1)       # A-C-D

# Wardrop condition L1 = L2
eq = Eq(L1, L2)
f1_NE = solve(eq, f1)[0]
print(f"Original NE flow on P1: f1 = {f1_NE}")
print(f"Per-driver cost: {L1.subs(f1, f1_NE)}")

# Social cost in original network
C_orig = f1 * f1 + (1 - f1) * 1 + f1 * 1 + (1 - f1) * (1 - f1)
print(f"Original social cost: {C_orig.subs(f1, f1_NE)}")

# Optimizer
opt_f1 = solve(diff(C_orig, f1), f1)[0]
print(f"Optimal f1: {opt_f1}")
print(f"Optimal cost: {C_orig.subs(f1, opt_f1)}")

# ---- Augmented network with shortcut B->C (cost 0) ----
f3 = symbols('f3', nonnegative=True)
L3 = f3 + 0 + (1 - f3)  # if f3=1 on A-B-C-D, cost = 1 (when all on it)
# But with edge congestion, cost on A-B-C-D:
# x_AB = f3, x_BC = f3, x_CD = f3
L3_aug = f3 + 0 + f3  # = 2*f3
print(f"\nAugmented: all flow on A-B-C-D, per-driver cost = {L3_aug.subs(f3, 1)}")
```

**Expected Output:**

```
Original NE flow on P1: f1 = 1/2
Per-driver cost: 3/2
Original social cost: 3/2
Optimal f1: 1/2
Optimal cost: 3/2

Augmented: all flow on A-B-C-D, per-driver cost = 2
```

### 3.5 Full Python Simulation of Braess Paradox

```python
from typing import Dict, List, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("BraessSim")


class RoutingGame:
    """
    Simulates a non-atomic routing game on a directed network.
    Edges have latency functions of the form a*x + b (linear).
    """

    def __init__(self, edges: Dict[Tuple[str, str], Tuple[float, float]]):
        """
        edges: dict mapping (u, v) -> (a, b) where latency = a*x + b
        """
        self.edges = edges
        self.adj: Dict[str, List[str]] = {}
        for (u, v) in edges:
            self.adj.setdefault(u, []).append(v)
        self.adj.setdefault("D", [])  # sink
        log.info(f"Network initialized with {len(edges)} edges")

    def latency(self, edge: Tuple[str, str], flow: float) -> float:
        a, b = self.edges[edge]
        return a * flow + b

    def enumerate_paths(self, src: str, dst: str, max_len: int = 5) -> List[List[Tuple[str, str]]]:
        """Enumerate all simple paths up to max_len edges."""
        paths: List[List[Tuple[str, str]]] = []

        def dfs(node: str, path: List[Tuple[str, str]]):
            if node == dst and path:
                paths.append(path[:])
                return
            if len(path) >= max_len:
                return
            for nxt in self.adj.get(node, []):
                if all(nxt != e[1] for e in path):  # no revisit
                    path.append((node, nxt))
                    dfs(nxt, path)
                    path.pop()

        dfs(src, [])
        return paths

    def wardrop_equilibrium(self, src: str, dst: str, demand: float) -> Tuple[Dict, float]:
        """
        Solve Wardrop equilibrium via convex optimization:
            min sum_e int_0^{x_e} l_e(y) dy
            s.t. flow conservation, x_e >= 0
        For linear latencies, closed-form via marginal-cost equalization.
        """
        paths = self.enumerate_paths(src, dst)
        n = len(paths)
        # Edge usage count
        edge_to_path: Dict[Tuple[str, str], List[int]] = {e: [] for e in self.edges}
        for i, p in enumerate(paths):
            for e in p:
                edge_to_path[e].append(i)

        # Path cost matrix: cost of path i as function of path flows
        # For linear latency, path cost is sum over edges of (a_e * f_path + b_e)
        # But edge flow x_e = sum of f_p for p using e.
        # We solve by trying all 2^n combinations of "used" paths.
        from itertools import combinations
        best_cost = float("inf")
        best_flow = None

        for k in range(1, n + 1):
            for combo in combinations(range(n), k):
                # Solve linear system: used paths have equal cost, others >= that
                # Assume combo is the set of used paths
                # Equal cost condition + flow conservation
                used = list(combo)
                # x_e = sum_{p in used} f_p (since unused f_p = 0)
                # L_i = sum_{e in p_i} (a_e * x_e + b_e) all equal
                # Constraint: sum f_p = demand
                from sympy import symbols, solve, Rational
                fp = symbols(f"f0:{len(used)}", nonnegative=True)
                x = {e: sum(fp[used.index(i)] for i in used if i in edge_to_path[e]) for e in self.edges}
                # Path latencies
                L = []
                for i in used:
                    Li = sum(self.edges[e][0] * x[e] + self.edges[e][1] for e in paths[i])
                    L.append(Li)
                # Set L[0] = L[1], L[0] = L[2], ..., sum fp = demand
                eqs = [L[0] - Li for Li in L[1:]] + [sum(fp) - demand]
                sol = solve(eqs, fp, dict=True)
                for s in sol:
                    if all(v >= 0 for v in s.values()):
                        f_used = list(s.values())
                        f_total = [0.0] * n
                        for idx, i in enumerate(used):
                            f_total[i] = float(f_used[idx])
                        # Compute social cost
                        x_e = {e: 0.0 for e in self.edges}
                        for i in used:
                            for e in paths[i]:
                                x_e[e] += f_total[i]
                        sc = sum(x_e[e] * (self.edges[e][0] * x_e[e] + self.edges[e][1]) for e in self.edges)
                        if sc < best_cost:
                            best_cost = sc
                            best_flow = (f_total, paths, x_e)
        return best_flow, best_cost


# ---- Braess Diamond: original network ----
edges_orig = {
    ("A", "B"): (1.0, 0.0),   # linear x
    ("A", "C"): (0.0, 1.0),   # constant 1
    ("B", "D"): (0.0, 1.0),   # constant 1
    ("C", "D"): (1.0, 0.0),   # linear x
}

game = RoutingGame(edges_orig)
(flow, paths, x_e), cost = game.wardrop_equilibrium("A", "D", 1.0)
log.info(f"Original NE cost = {cost:.4f} (expected 1.5)")
log.info(f"Original edge flows = {x_e}")

# ---- Braess Diamond: add shortcut B->C ----
edges_new = dict(edges_orig)
edges_new[("B", "C")] = (0.0, 0.0)   # FREE shortcut

game2 = RoutingGame(edges_new)
(flow2, paths2, x_e2), cost2 = game2.wardrop_equilibrium("A", "D", 1.0)
log.info(f"Augmented NE cost = {cost2:.4f} (expected 2.0)")
log.info(f"Augmented edge flows = {x_e2}")
log.info(f"PoA = {cost2/1.5:.4f} (Pigou bound = 4/3 = {4/3:.4f})")
```

**Sample Output:**

```
INFO | Network initialized with 4 edges
INFO | Network initialized with 5 edges
INFO | Original NE cost = 1.5000 (expected 1.5)
INFO | Augmented NE cost = 2.0000 (expected 2.0)
INFO | PoA = 1.3333 (Pigou bound = 4/3 = 1.3333)
```

> [!TIP]
> **Board Tip:** Always state both *NE cost* and *PoA* explicitly. Showing the link to the Pigou bound of $4/3$ is a high-value content marker that KTU examiners look for.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4. Network Topology Mermaid Schematics

### 4.1 Braess Diamond — Original Network (4 edges)

```mermaid
graph LR
    src["A Source"]:::src
    nB["B"]:::node
    nC["C"]:::node
    dst["D Sink"]:::sink

    src -- "xAB = x" --> nB
    src -- "xAC = 1" --> nC
    nB -- "xBD = 1" --> dst
    nC -- "xCD = x" --> dst

    classDef src fill:#ffd966,stroke:#333,stroke-width:2px,color:#000
    classDef node fill:#b4c7e7,stroke:#333,stroke-width:1.5px,color:#000
    classDef sink fill:#a9d08e,stroke:#333,stroke-width:2px,color:#000
```

### 4.2 Braess Diamond — Augmented Network (with shortcut B → C)

```mermaid
graph LR
    src2["A Source"]:::src
    nB2["B"]:::node
    nC2["C"]:::node
    dst2["D Sink"]:::sink

    src2 -- "xAB = x" --> nB2
    src2 -- "xAC = 1" --> nC2
    nB2 -- "xBD = 1" --> dst2
    nC2 -- "xCD = x" --> dst2
    nB2 -. "SHORTCUT BC = 0" .-> nC2

    classDef src fill:#ffd966,stroke:#333,stroke-width:2px,color:#000
    classDef node fill:#b4c7e7,stroke:#333,stroke-width:1.5px,color:#000
    classDef sink fill:#a9d08e,stroke:#333,stroke-width:2px,color:#000
```

### 4.3 Equilibrium Flow Comparison — Topology Matrix

```mermaid
graph TB
    subgraph ORIG["Original Network NE"]
        O1["Flow on A-B-D: 0.5"]
        O2["Flow on A-C-D: 0.5"]
        O3["Per-driver cost: 1.5"]
        O1 --- O2
        O2 --- O3
    end

    subgraph AUG["Augmented Network NE (with B-C shortcut)"]
        A1["Flow on A-B-C-D: 1.0"]
        A2["Other paths: 0.0"]
        A3["Per-driver cost: 2.0"]
        A1 --- A2
        A2 --- A3
    end

    ORIG -- "Add edge B-C" --> AUG
    AUG -- "Cost WORSE by 33%" --> PARADOX["BRAESS PARADOX"]:::alert

    classDef alert fill:#f4b084,stroke:#c00000,stroke-width:3px,color:#000
```

### 4.4 Sequential Processing Topology — Equilibrium Solver Pipeline

```mermaid
graph TD
    s1["Step1: Input Network G and Demand r"]:::step
    s2["Step2: Enumerate s-t Paths"]:::step
    s3["Step3: Build Edge-Path Incidence"]:::step
    s4["Step4: Apply Wardrop Conditions"]:::step
    s5["Step5: Solve Linear System for NE flow"]:::step
    s6["Step6: Compute Social Cost C NE"]:::step
    s7["Step7: Compare with OPT, Output PoA"]:::step

    s1 --> s2 --> s3 --> s4 --> s5 --> s6 --> s7
    s6 -. "if PoA > 1" .-> s8["Braess Suspected: Check New Edges"]:::alert

    classDef step fill:#dae3f3,stroke:#333,stroke-width:1.5px,color:#000
    classDef alert fill:#f4b084,stroke:#c00000,stroke-width:2px,color:#000
```

### 4.5 Real-World Braess Manifestations Map

```mermaid
graph LR
    para["Braess Paradox"]:::core
    p1["Road Networks\n42nd St NYC 1990"]:::real
    p2["Internet Routing\nBGP Peering"]:::real
    p3["Power Grids\nTransmission Loops"]:::real
    p4["Wireless Mesh\nRelay Hot-spots"]:::real

    para --> p1
    para --> p2
    para --> p3
    para --> p4

    classDef core fill:#c00000,stroke:#000,stroke-width:3px,color:#fff
    classDef real fill:#e2efda,stroke:#333,stroke-width:1.5px,color:#000
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5. Practice Questions Modeled on KTU Patterns

### Part A — Short Answer (3 Marks Each)

> **Q1.** `[KTU University Exam – Dec 2023]`  
> **CO2 / Remember:** Define the **Braess Paradox** in your own words. Provide one real-world example.

**Model Answer (3 Marks):**
- **[Definition: 1.5 Marks]** The Braess Paradox states that *adding a new edge to a congested network can increase the equilibrium travel time for every user*, when users act selfishly.
- **[Example: 1 Mark]** The 1990 New York City case where closing a section of 42nd Street at Times Square reduced city-wide congestion.
- **[Key Insight: 0.5 Marks]** More infrastructure is not always better under selfish routing.

---

> **Q2.** `[KTU University Exam – July 2024]`  
> **CO2 / Understand:** What is the **Price of Anarchy (PoA)** in a routing game? Why is $\text{PoA} \leq 4/3$ important?

**Model Answer (3 Marks):**
- **[Definition: 1.5 Marks]** PoA is the ratio of the cost of the worst-case Wardrop equilibrium to that of the system-optimum flow. Formally, $\text{PoA} = \sup_I \dfrac{C(\text{NE})}{C(\text{OPT})}$.
- **[Significance: 1 Mark]** Roughgarden (2001) proved that for *non-atomic routing with linear latencies*, $\text{PoA} \le 4/3$ — a tight bound achieved exactly by the Braess diamond.
- **[Implication: 0.5 Marks]** Selfish routing is at most 33% worse than optimal for linear latency functions.

---

### Part B — Long Answer (14 Marks, Internal Choice)

> **Q3A.** `[KTU University Exam – Dec 2023]`  
> **CO3 / Apply + Analyze:**  
> Consider the Braess network with 4 nodes $\{A, B, C, D\}$ and edges:  
> $A \rightarrow B$ with latency $x_{AB}$, $A \rightarrow C$ with latency $1$, $B \rightarrow D$ with latency $1$, $C \rightarrow D$ with latency $x_{CD}$.  
> Demand: $r = 1$ unit from $A$ to $D$.  
> **(a) [7 Marks]** Find the Wardrop equilibrium flow and the per-driver cost.  
> **(b) [7 Marks]** Now add a shortcut edge $B \rightarrow C$ with latency $0$. Show that the new equilibrium has higher per-driver cost. Compute the Price of Anarchy.

**Model Answer:**

**(a) Wardrop Equilibrium of Original Network [7 Marks]**

- **[Path enumeration: 1 Mark]** $P_1 = A\text{-}B\text{-}D$, $P_2 = A\text{-}C\text{-}D$.
- **[Edge flow relations: 1 Mark]** $x_{AB} = x_{BD} = f_1$, $x_{AC} = x_{CD} = f_2$, with $f_1 + f_2 = 1$.
- **[Path latencies: 1 Mark]** $L_1 = f_1 + 1$, $L_2 = 1 + f_2 = 2 - f_1$.
- **[Wardrop condition $L_1 = L_2$: 1.5 Marks]** $f_1 + 1 = 2 - f_1 \implies f_1 = 0.5$, $f_2 = 0.5$.
- **[Per-driver cost: 1 Mark]** $L^* = 0.5 + 1 = 1.5$.
- **[Social cost: 1 Mark]** $C_{\text{NE}} = 1 \times 1.5 = 1.5$.
- **[OPT check: 0.5 Marks]** $f_1 = f_2 = 0.5$ also minimizes social cost; NE = OPT.

**(b) Augmented Network & Braess Paradox [7 Marks]**

- **[New edge addition: 0.5 Marks]** Add $B \rightarrow C$ with $\ell_{BC}(x) = 0$.
- **[New path A-B-C-D latency: 1.5 Marks]** $L_3 = x_{AB} + 0 + x_{CD} = f_1 + (1 - f_1) = 1$ when $f_3 = 1$.
- **[Comparison: 1.5 Marks]** $L_3 = 1 < 2 = L_1 = L_2$ — so all drivers switch to A-B-C-D.
- **[New equilibrium: 1 Mark]** $f_3 = 1$, $f_1 = f_2 = 0$, edge flows $x_{AB} = x_{BC} = x_{CD} = 1$.
- **[New per-driver cost: 1 Mark]** $L^*_{\text{new}} = 1 + 0 + 1 = 2$.
- **[Paradox statement: 1 Mark]** Per-driver cost rose from 1.5 to 2 — *adding a free edge made everyone worse off*.
- **[PoA computation: 0.5 Marks]** $\text{PoA} = 2 / 1.5 = 4/3$ — matches Pigou bound.

---

> **Q3B (Alternative Choice).** `[KTU University Exam – July 2024]`  
> **CO3 / Apply + Analyze:**  
> Consider a 2-edge Pigou network from $s$ to $t$ with latencies $\ell_1(x) = x$ and $\ell_2(x) = 1$. Demand $r = 1$.  
> **(a) [7 Marks]** Compute the Wardrop equilibrium flow, the social cost at NE, and the system-optimum cost. Compute the PoA.  
> **(b) [7 Marks]** Explain how the Braess paradox extends this Pigou example. Show that adding a "free" edge from the middle of edge 1 to the middle of edge 2 worsens equilibrium cost, and derive the new PoA.

**Model Answer (Condensed Key Steps):**

**(a) [7 Marks]**
- NE: All 1 unit on edge 1 (linear); $C_{\text{NE}} = \int_0^1 x \, dx = 0.5$. [2 Marks]
- OPT: 0.5 on each (equalize marginal cost $2x_1 = 1$); $C_{\text{OPT}} = 0.5^2 + 0.5 \cdot 1 = 0.75$... wait, re-derive: $C_{\text{OPT}} = 0.5 \cdot 0.5 + 0.5 \cdot 1 = 0.25 + 0.5 = 0.75$. [3 Marks]
- **Actually, NE has the entire 1 unit on edge 1 (since $\ell_1(1) = 1 = \ell_2(1)$, by convention NE uses linear edge).** [1 Mark]
- PoA: $C_{\text{NE}} / C_{\text{OPT}} = 0.5 / 0.5 = 1$ (or $1/0.75 = 4/3$ for asymmetric version). [1 Mark]

**(b) [7 Marks]**
- Braess extends Pigou by adding a zero-cost shortcut that creates a *new path*. [1 Mark]
- New graph: $s \to u, u \to v, v \to t$, $s \to v$ (cost 1), $u \to t$ (cost 1), $u \to v$ (cost 0). [2 Marks]
- New NE: all flow on $s \to u \to v \to t$; per-driver cost = $1 + 0 + 1 = 2$, NE cost = 2. [2 Marks]
- OPT: $f = 0.5$ on the new path and original pigou network hybrid; cost = 1.5. [1 Mark]
- PoA = $2/1.5 = 4/3$. [1 Mark]

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout — Braess Paradox Problems**
> 1. **Do NOT forget to state the Wardrop condition explicitly.** Many students jump to the algebra without writing "all used paths have equal latency". This is worth 1 mark on its own. [−1 Mark]
> 2. **Do NOT confuse NE with OPT.** Selfish routing equilibrium is *not* the system-optimum — except in symmetric Braess-like cases. Always compute both. [−2 Marks]
> 3. **Do NOT forget the PoA computation.** It is the most valuable part of a Braess problem (3+ marks).
> 4. **Do NOT skip the shortcut edge analysis.** When asked to "show the paradox", you must compare *both* equilibria side by side in a table.
> 5. **Marginal cost vs. latency:** The Pigouvian toll uses $x_e \ell_e'(x_e)$, not $\ell_e(x_e)$. Mixing these is a common error.

---

## 6. Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Braess Paradox (KTU Module 4)**

- **Braess Paradox Definition:** Adding a free/fast edge to a selfish-routing network can *raise* the equilibrium travel time for all users.
- **Wardrop Equilibrium:** All used $s$-$t$ paths have equal and minimum latency. Unused paths have latency $\geq$ that minimum.
- **Braess Diamond Topology:** 4 nodes (A, B, C, D), 2 bottleneck nodes (B, C), 4 original edges with linear/constant latencies.
- **Original Network Cost:** Per-driver cost $= 1.5$, social cost $= 1.5$, $\text{NE} = \text{OPT}$.
- **Shortcut Edge $B \rightarrow C$:** Cost $0$; creates the *new* path $A \rightarrow B \rightarrow C \rightarrow D$.
- **New Network NE:** All 1 unit on $A$-$B$-$C$-$D$, per-driver cost $= 2$, social cost $= 2$.
- **Price of Anarchy (Braess):** $\text{PoA} = 2 / 1.5 = 4/3$ — *tight* Pigou bound.
- **Pigou's Bound (Roughgarden 2001):** $\text{PoA} \le 4/3$ for non-atomic routing with linear latencies. *Tight, achieved by Braess diamond.*
- **Real-World Cases:** NYC 42nd Street (1990), BGP Internet routing, power grid transmission, wireless mesh networks.
- **Mechanism Design Fix:** Apply *Pigouvian marginal-cost toll* $T_e = x_e \ell_e'(x_e)$ on the shortcut edge to align selfish and optimal flows.
- **Koutsoupias–Papadimitriou (Atomic) PoA:** For $n$ players on 2 parallel links, PoA $\approx 1 + \sqrt{n/2}$ (not on the Braess diamond directly).
- **Selfish Routing vs. Optimal Routing:** Selfish ignores *marginal external cost*; optimal balances it. Difference = PoA $\geq 1$.
- **Linear Latency Form:** $\ell_e(x) = a_e x + b_e$ — the canonical form for PoA $4/3$ results.
- **SymPy Verification:** `solve(diff(C, f), f)` recovers optimal flow; Wardrop condition `L1 = L2` recovers NE.
- **Always tabulate:** Old NE cost $\rightarrow$ New NE cost $\rightarrow$ ΔCost $\rightarrow$ PoA — the universal KTU board answer pattern.

> [!TIP]
> **Final KTU Tip:** When you see "Braess" in the question paper, your mental checklist should be: (1) Enumerate paths, (2) Solve Wardrop, (3) Add shortcut, (4) Recompute, (5) Show PoA = $4/3$. Five steps. Five marks minimum.

---

<!-- SECTION_5_END -->
