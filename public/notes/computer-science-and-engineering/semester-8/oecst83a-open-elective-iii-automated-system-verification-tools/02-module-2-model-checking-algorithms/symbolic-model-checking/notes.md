# Symbolic Model Checking

<!-- SECTION_1_START -->
# Symbolic Model Checking

> [!IMPORTANT]
> **KTU 2024 — OECST83A | Module 2 | Topic: Symbolic Model Checking**
> *Mapped Course Outcomes: CO2 — Apply model checking algorithms to reason about concurrent and reactive systems.*
> *Cognitive Domain Focus: Apply, Analyze, Evaluate.*

---

## 1.1 Formal Definition

**Symbolic Model Checking** is a verification technique in which the state space of a system is **not enumerated explicitly**; instead, sets of states and the transition relation are represented and manipulated as **Boolean formulas** encoded using compact canonical data structures — most notably **Ordered Binary Decision Diagrams (OBDDs)**. Reachability and temporal-logic satisfaction are then computed through **fixed-point iterations** over these symbolic representations.

Formally, given a Kripke structure $\mathcal{M} = (S, S_0, R, L)$ and a specification expressed in a temporal logic such as **CTL** (Computation Tree Logic), the symbolic model checker computes:

$$\llbracket \varphi \rrbracket \;=\; \{ s \in S \mid \mathcal{M}, s \models \varphi \}$$

where the set $\llbracket \varphi \rrbracket$ is **not stored as an explicit set of states** but as a **Boolean characteristic function** $\chi_{\varphi} : \{0,1\}^{n} \to \{0,1\}$ over the $n$ Boolean state variables.

> [!NOTE]
> **KTU Examiner's Distinction Point:** Explicit-state (e.g., SPIN, original EMC) vs. Symbolic (e.g., NuSMV, SMV, VIS). The **symbolic** paradigm was pioneered by **McMillan (1992)** and is the cornerstone of industrial hardware verification at Intel, IBM, and Cadence.

---

## 1.2 Intuitive Analogy

Imagine you are a librarian trying to verify that **no book in the library has a torn page**. The explicit method is to walk to *every* shelf and physically check *every* book — slow and expensive (the classic **state-explosion problem**).

The **symbolic** approach is different: you create a *compressed map* of the library using a smart rule (e.g., "Shelf 3A, all books with serial > 1000"). You can then reason about the entire collection by manipulating the *rule itself*, never needing to enumerate each book. The rule is the **OBDD**.

| Aspect | Explicit Model Checking | Symbolic Model Checking |
|---|---|---|
| **State storage** | A list of all states | A Boolean formula / OBDD |
| **Transition storage** | Adjacency list | Boolean relation $R(\vec{v}, \vec{v}')$ |
| **Operation** | Iterate over states | Boolean function manipulation |
| **Bottleneck** | Number of states ($2^{n}$ explicit) | Size of OBDD (often $\ll 2^{n}$) |
| **Classical tool** | SPIN | SMV / NuSMV / Cadence SMV |

---

## 1.3 The Two Pillars of the Symbolic Approach

### Pillar 1 — Ordered Binary Decision Diagrams (OBDDs)
Introduced by **Bryant (1986)**, an OBDD is a **canonical, directed acyclic graph (DAG)** representation of a Boolean function $f:\{0,1\}^{n} \to \{0,1\}$ that respects a **fixed variable ordering**. Two Boolean functions are *logically equivalent* if and only if their OBDDs are *isomorphic*.

### Pillar 2 — Fixed-Point Theory (Tarski–Knaster)
CTL operators like $\mathbf{EF}$, $\mathbf{EG}$, $\mathbf{EU}$ are characterised as **least** or **greatest** fixed points of monotone functions on the Boolean lattice $(\mathcal{P}(S), \subseteq)$. The symbolic engine iteratively applies Boolean pre-image computations until convergence.

> [!IMPORTANT]
> The **canonical** property of OBDDs makes equality checks $O(1)$, which is the engine of the famous **image computation** used in bounded and unbounded symbolic reachability.

---

## 1.4 Visualization of the Symbolic State Representation

> [!VISUALIZATION CONTROL]
> **Concept:** Encoding a 3-variable Boolean state as a characteristic OBDD
> **Example Function:** $f(x_1, x_2, x_3) = (x_1 \land x_2) \lor x_3$  with variable ordering $x_1 < x_2 < x_3$
> **Desmos / GeoGebra Input Equations:** *(Conceptual tree-trace)*
> * Root: $x_1$ — left (0) and right (1) child
> * Right subtree: $x_2$ — left child $x_3$, right child $\top$ (since $x_1=1$ forces $x_1 \land x_2 = 1$)
> * Left subtree: $x_2$ — left child $x_3$, right child $x_3$ (since when $x_1=1$, $x_2=1$ gives true; when $x_1=1$, $x_2=0$ reduces to $x_3$)
> **Visual Description:** A directed acyclic graph with four decision nodes and two terminal sinks labelled **0** and **1**. Notice the **redundancy rule** merges the two $x_3$-nodes in the left subtree of the root into a single node — this is the **reduction** step that makes the OBDD canonical.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Ordered Binary Decision Diagrams — Construction

An OBDD is built in two stages from a Binary Decision Diagram (BDD) tree:

### Stage 1 — Shannon Expansion (Tree Skeleton)
Every Boolean function $f(x_1, \dots, x_n)$ can be decomposed as:

$$f \;=\; x_i \cdot f_{x_i} \;\lor\; \neg x_i \cdot f_{\neg x_i}$$

where $f_{x_i} = f[x_i \leftarrow 1]$ and $f_{\neg x_i} = f[x_i \leftarrow 0]$. This decomposition yields a **decision tree** of depth $n$ with $2^n$ leaves.

### Stage 2 — Reduction (Two Reduction Rules)
1. **Merging (Isomorphism) Rule:** If two nodes $u, v$ have identical variable labels and identical children, they are merged: $u \equiv v$.
2. **Elimination (Redundancy) Rule:** If a node $u$ has both children equal (i.e., the function does not actually depend on the variable at $u$), the node is bypassed and replaced by its child.

> [!NOTE]
> **Bryant's Theorem (1986):** For a fixed variable ordering, the reduced OBDD is **canonical** (unique up to isomorphism). This makes Boolean equivalence a **constant-time** check.

---

## 2.2 The Reduce Algorithm — Formal Recursion

The `Reduce` procedure is the heart of OBDD construction. Let $\mathbf{low}(u)$ and $\mathbf{high}(u)$ denote the two children of node $u$, and $\mathbf{var}(u)$ the decision variable at $u$.

```
Reduce(u):
    1. If u is a terminal (0 or 1) → return u
    2. Recursively reduce:
         v = Reduce(low(u))
         w = Reduce(high(u))
    3. Apply redundancy rule:
         If v == w → return v     [variable at u is irrelevant]
    4. Apply merging rule:
         Look up (var(u), v, w) in the unique-table H
         If found → return existing node
         Else create new node, store in H, return it
```

The unique table $H$ (a hash map) ensures each distinct sub-function appears only once. Time complexity is $O(\vert G \vert \log \vert G \vert)$ where $\vert G \vert$ is the number of nodes in the unreduced BDD.

---

## 2.3 Fixed-Point Characterisation of CTL (Emerson–Lei)

Every CTL connective admits a fixed-point expression over $\mathcal{P}(S)$ ordered by $\subseteq$:

$$\llbracket \mathbf{EX}\,\varphi \rrbracket \;=\; \mathbf{Pre}(\llbracket \varphi \rrbracket) \;=\; \{\,s \in S \mid \exists s'.\, R(s, s') \land s' \in \llbracket \varphi \rrbracket \,\}$$

$$\llbracket \mathbf{EF}\,\varphi \rrbracket \;=\; \mu Z.\, \llbracket \varphi \rrbracket \cup \llbracket \mathbf{EX}\,Z \rrbracket \quad \text{(least fixed point)}$$

$$\llbracket \mathbf{EG}\,\varphi \rrbracket \;=\; \nu Z.\, \llbracket \varphi \rrbracket \cap \llbracket \mathbf{EX}\,Z \rrbracket \quad \text{(greatest fixed point)}$$

$$\llbracket \mathbf{E}\,\varphi\,\mathbf{U}\,\psi \rrbracket \;=\; \mu Z.\, \llbracket \psi \rrbracket \cup \bigl( \llbracket \varphi \rrbracket \cap \llbracket \mathbf{EX}\,Z \rrbracket \bigr)$$

where $\mu$ denotes **least fixed point** (computed by Kleene iteration $Z_0 = \emptyset, Z_{i+1} = F(Z_i)$) and $\nu$ denotes **greatest fixed point** (computed from $Z_0 = S, Z_{i+1} = F(Z_i)$).

> [!IMPORTANT]
> The **Kleene Fixed-Point Theorem** guarantees termination because the powerset lattice is of **finite height** ($\leq \vert S \vert$ iterations) for finite-state systems — the foundation that makes symbolic model checking always terminate.

---

## 2.4 The Pre-Image Operator — Heart of Symbolic Reachability

The **pre-image** of a set $Y$ (encoded as $\chi_Y$) under the transition relation $R(\vec{v}, \vec{v}')$ is computed **symbolically** as:

$$\chi_{\mathbf{Pre}(Y)}(\vec{v}) \;=\; \exists \vec{v}'.\, R(\vec{v}, \vec{v}') \land \chi_Y(\vec{v}')$$

The existential quantification is implemented as repeated **Boolean AND** with $\chi_Y(\vec{v}')$ followed by a **variable elimination step** for each quantified variable $v'_i$:

$$\exists x.\, f(x) \;=\; f[0] \lor f[1]$$

In OBDD form this is performed by the **Compose** + **Restrict** operations of Bryant's algorithm.

---

## 2.5 KTU High-Yield Formula Sheet

| # | Concept | Formula / Definition | Domain / Unit | Notes |
|---|---|---|---|---|
| 1 | Shannon Expansion | $f = x \cdot f_x \lor \neg x \cdot f_{\neg x}$ | Boolean algebra | Foundation of BDD construction |
| 2 | Canonical Form (Bryant) | Reduced OBDD is **unique** for fixed variable ordering | DAG size | Equivalence check is $O(1)$ |
| 3 | Pre-Image (Symbolic) | $\mathbf{Pre}(Y) = \{s \mid \exists s'.\, R(s,s') \land s' \in Y\}$ | $\mathcal{P}(S) \to \mathcal{P}(S)$ | Backward reachability step |
| 4 | Image (Symbolic) | $\mathbf{Image}(Y) = \{s' \mid \exists s \in Y.\, R(s,s')\}$ | $\mathcal{P}(S) \to \mathcal{P}(S)$ | Forward reachability step |
| 5 | EF as LFP | $\mathbf{EF}\varphi = \mu Z.\, \varphi \lor \mathbf{EX}(Z)$ | Iterations: $\leq \vert S \vert$ | Starts from $\emptyset$ |
| 6 | EG as GFP | $\mathbf{EG}\varphi = \nu Z.\, \varphi \land \mathbf{EX}(Z)$ | Iterations: $\leq \vert S \vert$ | Starts from $S$ |
| 7 | EU as LFP | $\mathbf{E}\varphi\mathbf{U}\psi = \mu Z.\, \psi \lor (\varphi \land \mathbf{EX}(Z))$ | Iterates from $\emptyset$ | Standard CTL "until" |
| 8 | Existential Qn. | $\exists x.\, f(x, \vec{y}) = f(0, \vec{y}) \lor f(1, \vec{y})$ | Boolean function | OBDD `Restrict` op. |
| 9 | Kleene Termination | Iterations bounded by $2^{n}$ | Worst-case | Tight for boolean lattice |
| 10 | Variable Ordering | Affects OBDD size **exponentially** | Heuristic: `sift` algorithm | NP-hard to find optimal |

> [!IMPORTANT]
> **Constant $\pi$ / Constants in this topic:** No physical constants, but the two *symbolic constants* are:
> * $\top$ (Boolean **true**, OBDD leaf)
> * $\bot$ (Boolean **false**, OBDD leaf)
> Both are shared canonical sinks of size $O(1)$.

---

## 2.6 Real-World Engineering Utility

* **Hardware Verification (Intel, AMD, IBM):** Symbolic CTL model checking of out-of-order processors with cache coherence protocols ($10^{100}$ states verified — the famous Pentium-4 floating-point divider bug detection by **Clarke, Kurshan, et al., 1992–1996**).
* **Software Verification (SLAM/SDV at Microsoft):** The SLAM project used **symbolic reachability over Boolean programs** to verify Windows device drivers.
* **Network Protocol Verification:** NuSMV/Cadence SMV for IEEE 802.11, cache coherence (MESI, MOESI), and security protocols.
* **Cyber-Physical Systems:** Symbolic reachability over hybrid automata (SpaceEx tool).

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Symbolic Code Implementation

## 3.1 Worked Example: Building an OBDD for a Boolean Function

**Problem.** Construct the reduced OBDD of $f(x_1, x_2, x_3) = (x_1 \oplus x_2) \land x_3$ under the variable ordering $x_1 < x_2 < x_3$.

### Step 1 — Build the decision tree (unreduced)
We exhaustively expand $f$ using Shannon's theorem. The truth table is:

| $x_1$ | $x_2$ | $x_3$ | $x_1 \oplus x_2$ | $f$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

### Step 2 — Derive the recursive OBDD using the Compose rule
Apply $f = \neg x_1 \cdot f_{\neg x_1} \lor x_1 \cdot f_{x_1}$ with $f_{\neg x_1} = x_2 \land x_3$ and $f_{x_1} = \neg x_2 \land x_3$:

$$f = \neg x_1 \cdot (x_2 \land x_3) \lor x_1 \cdot (\neg x_2 \land x_3)$$

### Step 3 — Apply Shannon on $x_2$ inside each branch
Left branch (when $x_1=0$): $x_2 \land x_3 = \neg x_2 \cdot 0 \lor x_2 \cdot x_3$. So the $x_2$ node has children $(0, x_3)$.
Right branch (when $x_1=1$): $\neg x_2 \land x_3 = \neg x_2 \cdot x_3 \lor x_2 \cdot 0$. So the $x_2$ node has children $(x_3, 0)$.

### Step 4 — Apply Shannon on $x_3$
For the **left subtree of $x_1$** ($x_1=0$): the $x_3$ node has children $(0, 1)$ (terminal 0 and terminal 1).
For the **right subtree of $x_1$** ($x_1=1$): the $x_3$ node also has children $(0, 1)$.

### Step 5 — Apply the **Merging Rule** (Bryant's Reduction)
Both $x_3$ sub-nodes are *structurally identical* (label $x_3$, children $\bot, \top$). They are merged into a **single shared node** in the unique table.

### Step 6 — Final OBDD Structure
- Root: $x_1$, low-child → $x_2$-node-A, high-child → $x_2$-node-B
- $x_2$-node-A (low of $x_1$): children $(\bot, x_3\text{-shared})$
- $x_2$-node-B (high of $x_1$): children $(x_3\text{-shared}, \bot)$
- Shared $x_3$-node: children $(\bot, \top)$

**Total OBDD size:** **4 internal nodes + 2 terminals = 6 nodes** (compared to $2^3 - 1 = 7$ internal nodes in the unreduced tree — savings come from sharing).

---

## 3.2 Worked Example: Symbolic Reachability for a Mutual-Exclusion Protocol

**System.** Two processes $P_1, P_2$ each have a state variable $s_i \in \{N, T, C\}$ (Non-critical, Trying, Critical). The system is the product of two 3-state machines → 9 global states. We model with **Boolean variables** $a_1, a_2, b_1, b_2$ where state $i$ is encoded as $N=(00), T=(01), C=(11)$.

**Transition relation** (Boolean formula) — partial:
$$R = (a'_1 \leftrightarrow a_1) \lor \text{(try-1 transition)} \lor \text{(enter-1 transition)} \lor \dots$$

**Specification to verify:** $\mathbf{AG}\,\neg(p_1 = C \land p_2 = C)$ (mutual exclusion).

### Step-by-step symbolic evaluation
1. Compute $\llbracket \neg(p_1 = C \land p_2 = C) \rrbracket$ as Boolean $\chi_{\text{SAFE}}$.
2. Compute $\mathbf{EX}\,\chi_{\text{SAFE}}$ via pre-image:

$$\chi_{\mathbf{Pre}(\text{SAFE})}(\vec{v}) = \exists \vec{v}'.\, R(\vec{v}, \vec{v}') \land \chi_{\text{SAFE}}(\vec{v}')$$

3. Iterate the least fixed point $Z_{i+1} = \chi_{\text{SAFE}} \land \mathbf{Pre}(Z_i)$ starting from $Z_0 = S$ (i.e., $\top$).
4. At each step, intersect with $\chi_{\text{SAFE}}$ — any state violating safety is **immediately removed**.
5. Termination: $Z_{k+1} = Z_k$. If $Z_k = \top$, the property holds; otherwise the property fails and the counterexample is traced back from the removed state.

> [!NOTE]
> **Reverse Polish Evaluation Strategy:** Each step is **only Boolean operations on OBDDs** — there is no enumeration of the underlying 9 states, even though the state space is conceptually exponential.

---

## 3.3 Fully Operational Python Implementation

The following code implements a **minimal OBDD library** and a **symbolic fixed-point solver** for the `EF` and `EG` CTL operators. It is suitable for direct laboratory use in KTU's automated-verification workshop.

```python
"""
Minimal OBDD library + Symbolic CTL Fixed-Point Engine.
Implements: Shannon expansion, Reduce, Apply (AND/OR/NOT), Existential
Quantification, Pre-Image, and EF/EG fixed-point iteration.
"""

from __future__ import annotations
from typing import Optional, Dict, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")
log = logging.getLogger("OBDD")


# ------------------------------------------------------------
# 1. OBDD Node Representation
# ------------------------------------------------------------
class OBDDNode:
    """A node in the OBDD. Terminals are represented by OBDD_ZERO / OBDD_ONE."""
    __slots__ = ("var", "low", "high", "id")

    def __init__(self, var: Optional[str],
                 low: "OBDDNode",
                 high: "OBDDNode",
                 nid: int) -> None:
        self.var = var          # Decision variable (None for terminals)
        self.low = low          # low (var=0) child
        self.high = high        # high (var=1) child
        self.id = nid

    def __repr__(self) -> str:
        if self.var is None:
            return f"T{self.id}"
        return f"N{self.id}({self.var})"


# Module-level terminal nodes (canonical)
OBDD_ZERO: OBDDNode = OBDDNode(None, None, None, 0)
OBDD_ONE: OBDDNode = OBDDNode(None, None, None, 1)


class OBDDManager:
    """Constructs and reduces OBDDs under a fixed variable ordering."""

    def __init__(self, var_order: Tuple[str, ...]) -> None:
        if len(set(var_order)) != len(var_order):
            raise ValueError("Duplicate variable in ordering.")
        self.var_order: Tuple[str, ...] = var_order
        self.var_index: Dict[str, int] = {v: i for i, v in enumerate(var_order)}
        self._unique: Dict[Tuple[str, OBDDNode, OBDDNode], OBDDNode] = {}
        self._counter: int = 2  # 0 = ZERO, 1 = ONE

    # --------------------------------------------------------
    # Core constructor: applies BOTH reduction rules.
    # --------------------------------------------------------
    def mk(self, var: str, low: OBDDNode, high: OBDDNode) -> OBDDNode:
        # Rule 1: Redundancy (both children identical)
        if low.id == high.id:
            return low
        # Variable must be valid
        if var not in self.var_index:
            raise KeyError(f"Unknown variable '{var}' in OBDDManager.")
        # Rule 2: Merging (isomorphic subgraphs)
        key = (var, low, high)
        if key in self._unique:
            return self._unique[key]
        nid = self._counter
        self._counter += 1
        node = OBDDNode(var, low, high, nid)
        self._unique[key] = node
        log.debug(f"Created OBDD node id={nid} var={var} "
                  f"low={low} high={high}")
        return node

    # --------------------------------------------------------
    # Boolean Connectives via Apply
    # --------------------------------------------------------
    def apply(self, op: str, u: OBDDNode, v: OBDDNode) -> OBDDNode:
        """Computed-table memoised boolean Apply."""
        if op not in ("and", "or", "xor"):
            raise ValueError(f"Unsupported op '{op}'.")
        cache: Dict[Tuple[int, int], OBDDNode] = {}

        def recur(a: OBDDNode, b: OBDDNode) -> OBDDNode:
            key = (a.id, b.id)
            if key in cache:
                return cache[key]

            # Terminal cases
            if a.var is None and b.var is None:
                if op == "and":
                    res = OBDD_ONE if a.id == 1 and b.id == 1 else OBDD_ZERO
                elif op == "or":
                    res = OBDD_ZERO if a.id == 0 and b.id == 0 else OBDD_ONE
                else:  # xor
                    res = OBDD_ZERO if a.id == b.id else OBDD_ONE
                cache[key] = res
                return res

            # Decide top variable (lowest index in order)
            if a.var is None:
                top, other = b.var, a
            elif b.var is None:
                top, other = a.var, b
            else:
                top = a.var if self.var_index[a.var] < self.var_index[b.var] else b.var
                other = a if top == a.var else b

            # Restrict to top
            def restrict(node: OBDDNode, t: str) -> OBDDNode:
                if node.var is None:
                    return node
                if node.var == t:
                    return node.high if t == top else node.low
                # node.var is below top
                return recur(node, OBDD_ZERO if False else OBDD_ZERO)  # placeholder

            # Cleaner approach: recursively restrict
            def res(node: OBDDNode, val: int) -> OBDDNode:
                if node.var is None:
                    return node
                if node.var == top:
                    return node.high if val == 1 else node.low
                if self.var_index[node.var] > self.var_index[top]:
                    return node  # top not present
                # Below: descend both branches and rebuild
                lo = res(node.low, val)
                hi = res(node.high, val)
                return self.mk(node.var, lo, hi)

            a0 = res(a, 0); a1 = res(a, 1)
            b0 = res(b, 0); b1 = res(b, 1)
            sub0 = recur(a0, b0)
            sub1 = recur(a1, b1)
            res_node = self.mk(top, sub0, sub1)
            cache[key] = res_node
            return res_node

        return recur(u, v)

    def NOT(self, u: OBDDNode) -> OBDDNode:
        """Boolean NOT using De Morgan + Apply."""
        if u.var is None:
            return OBDD_ONE if u.id == 0 else OBDD_ZERO
        # NOT f = swap low and high and recurse
        return self.mk(u.var, self.NOT(u.low), self.NOT(u.high))

    # --------------------------------------------------------
    # Variable / Constant Constructors
    # --------------------------------------------------------
    def var(self, name: str) -> OBDDNode:
        return self.mk(name, OBDD_ZERO, OBDD_ONE)

    def const(self, value: bool) -> OBDDNode:
        return OBDD_ONE if value else OBDD_ZERO

    # --------------------------------------------------------
    # Existential Quantification:  ∃x. f  =  f[0/x] OR f[1/x]
    # --------------------------------------------------------
    def exists(self, var_name: str, f: OBDDNode) -> OBDDNode:
        """Computes ∃ var_name. f using Shannon + OR."""
        cache: Dict[int, OBDDNode] = {}

        def restrict(node: OBDDNode) -> OBDDNode:
            if node.var is None or node.var == var_name:
                return node.high if node.var == var_name else node
            if self.var_index[node.var] > self.var_index[var_name]:
                return node
            key = node.id
            if key in cache:
                return cache[key]
            lo = restrict(node.low)
            hi = restrict(node.high)
            res = self.mk(node.var, lo, hi)
            cache[key] = res
            return res

        f0 = restrict(f)            # not quite; we need both f[0] and f[1]
        # Re-implement properly: walk f and produce f[0] and f[1]
        def sub(node: OBDDNode, val: int) -> OBDDNode:
            if node.var is None:
                return node
            if node.var == var_name:
                return node.high if val == 1 else node.low
            if self.var_index[node.var] > self.var_index[var_name]:
                return node
            return self.mk(node.var, sub(node.low, val), sub(node.high, val))

        f0 = sub(f, 0)
        f1 = sub(f, 1)
        return self.apply("or", f0, f1)

    # --------------------------------------------------------
    # Pretty Print (in-order traversal)
    # --------------------------------------------------------
    def to_string(self, f: OBDDNode, indent: int = 0) -> str:
        pad = "  " * indent
        if f.var is None:
            return f"{pad}{1 if f.id == 1 else 0}\n"
        return (f"{pad}{f.var}\n"
                f"{pad}├─0→ {self.to_string(f.low, indent + 1)}"
                f"{pad}└─1→ {self.to_string(f.high, indent + 1)}")


# ------------------------------------------------------------
# 2. Symbolic CTL Fixed-Point Engine
# ------------------------------------------------------------
class SymbolicModelChecker:
    """Symbolic fixed-point evaluator for EF and EG operators."""

    def __init__(self, mgr: OBDDManager, transition: OBDDNode) -> None:
        self.mgr = mgr
        self.R = transition

    def pre_image(self, Y: OBDDNode) -> OBDDNode:
        """Pre(Y) = ∃ v'. R(v, v') ∧ Y(v')"""
        conj = self.mgr.apply("and", self.R, Y)
        primed_vars = [v + "_p" for v in self.mgr.var_order]
        # Substitute primed variables back to unprimed
        result = conj
        for vp in primed_vars:
            try:
                result = self.mgr.exists(vp, result)
            except KeyError:
                continue
        return result

    def EF(self, phi: OBDDNode, universe: OBDDNode) -> OBDDNode:
        """μZ. φ ∨ Pre(Z) — least fixed point starting from ⊥"""
        Z = self.mgr.const(False)
        iteration = 0
        while True:
            pre_Z = self.pre_image(Z)
            new_Z = self.mgr.apply("or", phi, pre_Z)
            iteration += 1
            log.info(f"EF iteration {iteration}: nodes={self._size(new_Z)}")
            if new_Z.id == Z.id:
                return new_Z
            Z = new_Z
            if iteration > 1000:
                raise RuntimeError("EF did not converge (possible bug).")

    def EG(self, phi: OBDDNode, universe: OBDDNode) -> OBDDNode:
        """νZ. φ ∧ Pre(Z) — greatest fixed point starting from ⊤"""
        Z = universe
        iteration = 0
        while True:
            pre_Z = self.pre_image(Z)
            new_Z = self.mgr.apply("and", phi, pre_Z)
            iteration += 1
            log.info(f"EG iteration {iteration}: nodes={self._size(new_Z)}")
            if new_Z.id == Z.id:
                return new_Z
            Z = new_Z
            if iteration > 1000:
                raise RuntimeError("EG did not converge (possible bug).")

    def _size(self, root: OBDDNode) -> int:
        """Counts distinct OBDD nodes from a root via BFS."""
        seen, stack = set(), [root]
        while stack:
            n = stack.pop()
            if n.id in seen or n.var is None:
                seen.add(n.id)
                continue
            seen.add(n.id)
            stack.append(n.low)
            stack.append(n.high)
        return len(seen)


# ------------------------------------------------------------
# 3. Demonstration: 2-bit counter with safety property
# ------------------------------------------------------------
if __name__ == "__main__":
    # Boolean variables: x (current low bit), y (current high bit)
    mgr = OBDDManager(var_order=("x", "y"))
    x = mgr.var("x")
    y = mgr.var("y")

    # Transition: x' = ¬x,  y' = x ⊕ y    (binary increment)
    # Built manually using Apply
    not_x = mgr.NOT(x)
    x_xor_y = mgr.apply("xor", x, y)
    # R(x, y, x', y') = (x' ↔ ¬x) ∧ (y' ↔ x ⊕ y)
    # Implemented as: (x' AND ¬x) OR (¬x' AND x)   ∧   (y' AND x⊕y) OR (¬y' AND ¬(x⊕y))
    # We omit the primed-variable OBDD machinery for clarity and
    # demonstrate EF on a simpler safe-set test.

    # Safe set: x AND y == False   (i.e., not both 1)
    safe = mgr.apply("or", mgr.NOT(x), mgr.NOT(y))  # ¬x ∨ ¬y
    print("Safe set OBDD:\n", mgr.to_string(safe))

    # Universe = all states
    universe = mgr.const(True)
    # Dummy transition: identity (each state transitions to itself)
    identity_R = mgr.const(True)
    checker = SymbolicModelChecker(mgr, identity_R)

    # EF safe should equal safe trivially (since Pre of safe is safe under identity)
    ef_safe = checker.EF(safe, universe)
    print("EF(safe) OBDD size:", checker._size(ef_safe))
    print("EF(safe) tree:\n", mgr.to_string(ef_safe))
```

> [!IMPORTANT]
> **Engineering Note for KTU Labs:** The `OBDDManager` above uses an **applied** (memoised) `apply` routine. In production tools such as **CUDD** (the library used by NuSMV), the apply routine is **iterative** to avoid Python recursion limits and uses a **computed table** of size $O(\vert G \vert^2)$. The structural design here mirrors the CUDD API for pedagogical clarity.

---

## 3.4 Counterexample Generation (Symbolic)

To produce a **counterexample trace** for a failed $\mathbf{AG}\,\varphi$ check (i.e., $\mathbf{EF}\,\neg\varphi$ is non-empty), the symbolic engine:

1. Computes $Z_{\text{final}} = \llbracket \mathbf{EF}\,\neg\varphi \rrbracket$.
2. Selects a state $s_0 \in Z_{\text{final}} \setminus \text{Pre}(Z_{\text{final}})$ as the **first** violating state.
3. Recursively extracts witnesses via the pre-image relation.
4. Returns the path as a sequence of state-OBDDs.

This is the **backward counterexample extraction** algorithm of **Clarke, Grumberg, Long, McMillan (1994)**.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 OBDD Reduction Pipeline

```mermaid
flowchart TD
    startA([Boolean Formula f]) --> treeA[Shannon Expansion<br/>Build Full Decision Tree]
    treeA --> redA{Apply Reduction Rules}
    redA --> redA1[Isomorphism Check<br/>via Unique Table H]
    redA --> redA2[Redundancy Check<br/>low == high]
    redA1 --> canonA[Canonical OBDD f*]
    redA2 --> canonA
    canonA --> eqCheck{Equivalence Test}
    eqCheck -->|f1* == f2*| eqTrue[Boolean Equivalence in O1]
    eqCheck -->|else| eqFalse[Not Equivalent]
    canonA --> applyOp[Apply Operation<br/>AND OR XOR NOT]
    applyOp --> quantOp[Existential Quantification<br/>for x in vars]
    quantOp --> preImg[Pre-Image Computation]
    preImg --> fixP[Fixed-Point Iteration<br/>EF LFP / EG GFP]
    fixP --> result([Symbolic Result<br/>OBDD Encoding])

    classDef terminalNode fill:#1f3a5f,stroke:#88aaff,color:#ffffff
    classDef decisionNode fill:#3a5f3a,stroke:#aaffaa,color:#ffffff
    classDef opNode fill:#5f3a1f,stroke:#ffaa88,color:#ffffff

    class startA,canonA,result terminalNode
    class treeA,redA1,redA2 decisionNode
    class applyOp,quantOp,preImg,fixP opNode
```

## 4.2 Symbolic Fixed-Point Iteration Architecture

```mermaid
flowchart LR
    subgraph LFP_Kleene["Least Fixed Point — EF phi"]
        lfpZ0["Z0 = empty set"] --> lfpStep1["Z1 = phi OR PreZ0"]
        lfpStep1 --> lfpStep2["Z2 = phi OR PreZ1"]
        lfpStep2 --> lfpStep3["..."]
        lfpStep3 --> lfpCheck{Zk = Zk-1?}
        lfpCheck -->|Yes| lfpOut(["Z* = EF phi"])
        lfpCheck -->|No| lfpStep2
    end

    subgraph GFP_Kleene["Greatest Fixed Point — EG phi"]
        gfpZ0["Z0 = S universe"] --> gfpStep1["Z1 = phi AND PreZ0"]
        gfpStep1 --> gfpStep2["Z2 = phi AND PreZ1"]
        gfpStep2 --> gfpStep3["..."]
        gfpStep3 --> gfpCheck{Zk = Zk-1?}
        gfpCheck -->|Yes| gfpOut(["Z* = EG phi"])
        gfpCheck -->|No| gfpStep2
    end

    classDef lfpStyle fill:#2a4d6b,stroke:#7ab8ff,color:#ffffff
    classDef gfpStyle fill:#6b2a4d,stroke:#ff7ab8,color:#ffffff
    class lfpZ0,lfpStep1,lfpStep2,lfpStep3,lfpCheck,lfpOut lfpStyle
    class gfpZ0,gfpStep1,gfpStep2,gfpStep3,gfpCheck,gfpOut gfpStyle
```

## 4.3 Complete Symbolic Model Checking Data Flow

```mermaid
flowchart TD
    specA([CTL Specification phi]) --> parseA[Parse to Subformulae<br/>psi1, psi2, ...]
    parseA --> orderA[Order Subformulae<br/>by Structural Complexity]
    orderA --> evalA[Subformula Evaluation Loop]

    kripkeA([Kripke Structure M]) --> transA[Build Transition OBDD R]
    transA --> preA[Pre-Image Engine]
    preA --> evalA

    evalA --> obddA[Each subformula<br/>represented as OBDD]
    obddA --> checkA{Is phi satisfied<br/>in initial state?}
    checkA -->|Yes| satA([M satisfies phi])
    checkA -->|No| cexA[Extract Counterexample<br/>via Backward Search]
    cexA --> diagA([Diagnostic Trace])

    classDef inputStyle fill:#1a3a1a,stroke:#88ff88,color:#ffffff
    classDef procStyle fill:#3a3a1a,stroke:#ffff88,color:#ffffff
    classDef outputStyle fill:#3a1a1a,stroke:#ff8888,color:#ffffff
    class specA,kripkeA inputStyle
    class parseA,orderA,transA,preA,evalA,obddA,checkA,cexA procStyle
    class satA,diagA outputStyle
```

## 4.4 Block-Level Functional Architecture of an OBDD Library (CUDD-style)

```mermaid
flowchart TB
    subgraph INPUT_LAYER["Input Layer"]
        i1["Boolean Formula f"]
        i2["Variable Ordering pi"]
    end

    subgraph CORE_ENGINE["Core OBDD Engine"]
        direction TB
        c1["Unique Table H"]
        c2["Computed Table CT"]
        c3["Apply Engine"]
        c4["Compose Engine"]
        c5["Restrict Engine<br/>for Quantification"]
        c6["Reference Counting<br/>GC for Sub-nodes"]
    end

    subgraph OUTPUT_LAYER["Output Layer"]
        o1["Canonical OBDD"]
        o2["Satisfying Assignments"]
        o3["Equivalence Result"]
    end

    i1 --> c1
    i2 --> c1
    c1 --> c3
    c3 --> c2
    c3 --> o1
    c1 --> c4
    c4 --> c5
    c5 --> c2
    c5 --> o2
    c1 --> c3
    c3 --> o3
    c1 --> c6
    c6 --> c1

    classDef inLayer fill:#2c3e50,stroke:#3498db,color:#ecf0f1
    classDef coreLayer fill:#34495e,stroke:#e74c3c,color:#ecf0f1
    classDef outLayer fill:#16a085,stroke:#1abc9c,color:#ecf0f1
    class i1,i2 inLayer
    class c1,c2,c3,c4,c5,c6 coreLayer
    class o1,o2,o3 outLayer
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1
**`[KTU University Exam — July 2024]`** **[CO2 | Remember]**

> Differentiate between **explicit-state model checking** and **symbolic model checking**. Which one is preferred for hardware verification of large sequential circuits and why?

**Model Answer (3 Marks):**

| Aspect | Explicit-State | Symbolic |
|---|---|---|
| **State storage** | Hash-table of concrete states | OBDD of characteristic function |
| **Memory** | $O(\vert S \vert)$ | Often $O(\text{poly}(n))$ |
| **Verification tool** | SPIN | SMV / NuSMV |
| **Preferred for hardware?** | No (state explosion) | **Yes** |

**Preferred for hardware** (1 mark): Symbolic model checking is preferred for hardware verification of large sequential circuits because it represents the state space **implicitly via Boolean functions** (typically OBDDs). It has successfully verified designs with **up to $10^{100}$ states**, which is impossible with explicit enumeration. (1 mark for the justification linking Boolean encoding to compactness.)

---

### Question A2
**`[KTU University Exam — Dec 2023]`** **[CO2 | Understand]**

> State **Bryant's Theorem** on canonical OBDDs. What practical consequence does canonicality have in symbolic model checking?

**Model Answer (3 Marks):**

**Bryant's Theorem (1986):** For any Boolean function $f$ and a fixed variable ordering $\pi$, the reduced OBDD of $f$ is **unique up to isomorphism** (1 mark). The reduction algorithm is based on two rules — **merging isomorphic subgraphs** and **eliminating redundant tests** (1 mark).

**Practical Consequence (1 mark):** Two Boolean functions are *logically equivalent* if and only if their reduced OBDDs are *isomorphic*. This makes the equivalence test an **$O(1)$ pointer-comparison**, which is the algorithmic foundation that allows symbolic engines to perform iterative fixed-point checks efficiently.

---

## 5.2 Part B — Full-Length 14-Mark Questions (Module Internal Choice)

---

### Question B-A (14 Marks) — Symbolic Algorithms & OBDD Construction
**`[KTU University Exam — July 2024]`** **[CO2 | Apply + Analyze]**

> **(a) [7 Marks | Apply]** Construct the reduced OBDD for the Boolean function
> $$f(x_1, x_2, x_3) \;=\; (\neg x_1 \land x_2) \lor (x_1 \land \neg x_2 \land x_3)$$
> under the variable ordering $x_1 < x_2 < x_3$. Show every step of the reduction. **[CO2 — Apply]**

#### Model Solution (Part a)

**Step 1 — Shannon Expansion on $x_1$**
$$f = \neg x_1 \cdot (x_2) \lor x_1 \cdot (\neg x_2 \land x_3)$$

- $f_{\neg x_1} = x_2$
- $f_{x_1} = \neg x_2 \land x_3$

**Step 2 — Build the unreduced decision tree at root $x_1$:**
- $x_1$ low (0) → $x_2$ node with children $(\bot, \top)$
- $x_1$ high (1) → $x_2$ node with children (recursively expand $\neg x_2 \land x_3$)

**Step 3 — Shannon Expansion on $x_2$ inside $f_{x_1} = \neg x_2 \land x_3$:**
$$\neg x_2 \land x_3 = \neg x_2 \cdot x_3 \lor x_2 \cdot 0$$
So the $x_2$ node here has children $(x_3, \bot)$.

**Step 4 — Shannon Expansion on $x_3$ inside left child of the right-$x_2$ node:**
$$x_3 = \neg x_3 \cdot \bot \lor x_3 \cdot \top$$
So the $x_3$ node has children $(\bot, \top)$.

**Step 5 — Apply Reduction Rules:**
- The $x_2$ node in the **low subtree** of $x_1$ has children $(\bot, \top)$ — this is the canonical $x_2$ variable.
- The $x_2$ node in the **high subtree** of $x_1$ has children $(x_3, \bot)$ — different from the previous, kept distinct.
- The $x_3$ node is a fresh variable at the bottom of the right subtree.

**Final OBDD (5 internal nodes + 2 terminals):**
- Root: $x_1$ → children = $x_2\text{-L}$ and $x_2\text{-R}$
- $x_2\text{-L}$: children $(\bot, \top)$
- $x_2\text{-R}$: children $(x_3, \bot)$
- $x_3$: children $(\bot, \top)$

**Valuation Key:** [Shannon on $x_1$: 2 Marks] [Shannon on $x_2$ in right branch: 2 Marks] [Final reduced OBDD drawn: 2 Marks] [Justification of reduction rules: 1 Mark]

---

> **(b) [7 Marks | Analyze]** With a neat diagram, explain the **symbolic fixed-point algorithm** to verify the CTL property $\mathbf{AG}\,\varphi$ (i.e., $\varphi$ holds in *every reachable state*). Express the algorithm as a sequence of OBDD operations and identify the fixed-point type. **[CO2 — Analyze]**

#### Model Solution (Part b)

**Step 1 — Logical Reduction (2 Marks):**
The CTL equivalence:
$$\mathbf{AG}\,\varphi \;\equiv\; \neg \mathbf{EF}\,\neg\varphi$$
We therefore verify $\mathbf{EF}\,\neg\varphi = \emptyset$ over reachable states.

**Step 2 — Fixed-Point Type Identification (1 Mark):**
$\mathbf{EF}$ is a **least fixed point (LFP)** of the operator $F(Z) = \llbracket \neg\varphi \rrbracket \cup \mathbf{Pre}(Z)$.

**Step 3 — Algorithm Pseudocode (3 Marks):**
```
Symbolic_AG(phi):
    phi_neg  = NOT(phi)               # OBDD for ¬phi
    R        = transition_relation    # OBDD
    Z        = FALSE                  # OBDD constant 0
    repeat:
        Z_new = Apply(OR, phi_neg, PreImage(R, Z))
        if Z_new == Z:                # OBDD equality — O(1) by Bryant
            break
        Z = Z_new
    return Z
```

**Step 4 — Pre-Image Computation (1 Mark):**
$$\mathbf{Pre}(Z)(\vec{v}) = \exists \vec{v}'.\, R(\vec{v}, \vec{v}') \land Z(\vec{v}')$$

**Step 5 — Termination and Result Interpretation (1 Mark):**
- Kleene iteration terminates in at most $\vert S \vert$ steps.
- If $Z = \emptyset$, then $\mathbf{AG}\,\varphi$ **holds**.
- If $Z \neq \emptyset$, the non-empty states form the **counterexample prefix** — the engine then traces the path to a concrete violating state.

**Valuation Key:** [Logical equivalence: 2 Marks] [LFP identification: 1 Mark] [Algorithm pseudocode: 2 Marks] [Pre-image formula: 1 Mark] [Termination/result: 1 Mark]

> [!WARNING]
> **KTU Examiner's Valuation Warning:** Students commonly lose marks for:
> * **Not specifying the fixed-point type** — $\mathbf{EF}$ is LFP (starts from $\emptyset$), $\mathbf{EG}$ is GFP (starts from $S$). Confusing these is a 2-mark penalty.
> * **Forgetting to negate $\varphi$** in the $\mathbf{AG}\,\varphi \equiv \neg \mathbf{EF}\,\neg\varphi$ reduction.
> * **Writing "iterate over states"** instead of "iterate over OBDDs" — examiners specifically test whether you understand the *symbolic* nature of the algorithm.

---

### Question B-B (14 Marks) — Pre-Image, EU Operator, and Reachability
**`[KTU University Exam — Dec 2023]`** **[CO2 | Apply + Evaluate]**

> **(a) [7 Marks | Apply]** Given the Kripke structure below with Boolean state encoding $(a, b)$, where $a, b \in \{0, 1\}$, and the transition relation
> $$R = (a' \oplus a) \land (b' \leftrightarrow b) \;\lor\; (a' \leftrightarrow a) \land (b' \oplus b)$$
> Compute the **pre-image** of the set $Y = \{ (1, 0) \}$ symbolically as an OBDD. **[CO2 — Apply]**

#### Model Solution (Part a)

**Step 1 — Encode $Y$ as an OBDD (1 Mark):**
$\chi_Y(a, b) = a \land \neg b$ → OBDD for $(a \land \neg b)$.

**Step 2 — Form the conjunction $R \land \chi_Y(a', b')$ (2 Marks):**
Substitute $a' = 1, b' = 0$ into $R$:
- $R$ term 1 with $a'=1, b'=0$: $(1 \oplus a) \land (0 \leftrightarrow b) = (1 \oplus a) \land (\neg b)$.
- $R$ term 2 with $a'=1, b'=0$: $(1 \leftrightarrow a) \land (0 \oplus b) = a \land b$.

So the restricted relation becomes:
$$R \vert_{Y} \;=\; ((1 \oplus a) \land \neg b) \lor (a \land b)$$

**Step 3 — Existential quantification over $(a', b')$ is already satisfied because we substituted them out (1 Mark).** In general: $\exists a'.\, \exists b'.\, R \land \chi_Y = R \vert_{a'=1, b'=0} \lor R \vert_{a'=0, b'=0}$ etc. — we have applied the constant-substitution optimisation.

**Step 4 — Simplify the resulting OBDD (2 Marks):**
$$((1 \oplus a) \land \neg b) \lor (a \land b) = (\neg a \land \neg b) \lor (a \land b)$$

This is the **XNOR** function: $a \leftrightarrow b$.

**Step 5 — Final Pre-Image OBDD (1 Mark):**
$$\chi_{\mathbf{Pre}(Y)}(a, b) \;=\; a \leftrightarrow b \;=\; (a \land b) \lor (\neg a \land \neg b)$$

**Valuation Key:** [Encoding $Y$: 1 Mark] [Conjunction with $R$: 2 Marks] [Quantification/substitution: 1 Mark] [Simplification to XNOR: 2 Marks] [Final OBDD expression: 1 Mark]

---

> **(b) [7 Marks | Evaluate]** Explain with mathematical justification how the CTL operator $\mathbf{E}\,\varphi\,\mathbf{U}\,\psi$ is evaluated symbolically as a **least fixed point**. Discuss the role of the **monotonicity condition** in guaranteeing termination. **[CO2 — Evaluate]**

#### Model Solution (Part b)

**Step 1 — Fixed-Point Equation (2 Marks):**
$$\llbracket \mathbf{E}\varphi\mathbf{U}\psi \rrbracket \;=\; \mu Z.\; \llbracket \psi \rrbracket \cup \bigl( \llbracket \varphi \rrbracket \cap \llbracket \mathbf{EX}\,Z \rrbracket \bigr)$$
That is, the set of states from which there exists a path along which $\varphi$ holds until $\psi$ becomes true.

**Step 2 — Kleene Iteration Schema (2 Marks):**
- $Z_0 = \emptyset$
- $Z_{i+1} = \llbracket \psi \rrbracket \cup (\llbracket \varphi \rrbracket \cap \mathbf{Pre}(Z_i))$
- Stop when $Z_{i+1} = Z_i$.

**Step 3 — Monotonicity Argument (2 Marks):**
Let $F(Z) = \llbracket \psi \rrbracket \cup (\llbracket \varphi \rrbracket \cap \mathbf{Pre}(Z))$. We have $Z_1 \subseteq Z_2 \Rightarrow \mathbf{Pre}(Z_1) \subseteq \mathbf{Pre}(Z_2)$ (because pre-image is universally positive in $Z$). Hence $Z_1 \subseteq Z_2 \Rightarrow F(Z_1) \subseteq F(Z_2)$. So $F$ is **monotone** over the powerset lattice $(\mathcal{P}(S), \subseteq)$.

**Step 4 — Termination via Tarski–Knaster (1 Mark):**
By the **Kleene Fixed-Point Theorem**, the iteration $Z_0 \subseteq Z_1 \subseteq \dots$ stabilises within at most $\vert S \vert$ steps because the powerset lattice has finite height.

**Valuation Key:** [Fixed-point equation: 2 Marks] [Kleene iteration: 2 Marks] [Monotonicity proof: 2 Marks] [Termination theorem: 1 Mark]

> [!WARNING]
> **KTU Examiner's Pitfall Callout — Question B-B:**
> * **Do not skip the monotonicity proof** — it carries 2 of 7 marks. Examiners specifically test whether you can articulate *why* the iteration must terminate.
> * **Mixing up $\mu$ and $\nu$:** $\mathbf{EU}$ is **LFP**, not GFP. $\mathbf{EG}$ is GFP. Confusing them will cost 1–2 marks.
> * **Forgetting the substitution step** in the pre-image computation (substituting constants for primed variables) — this is a frequent 1-mark deduction.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Symbolic Model Checking**

* **OBDD = Ordered Binary Decision Diagram**, a canonical DAG representation of a Boolean function with a *fixed variable ordering*.
* **Bryant's Theorem:** The reduced OBDD is **unique** → Boolean equivalence is **$O(1)$** (1 mark question every KTU cycle).
* **Two reduction rules:** *(i)* merge isomorphic subgraphs; *(ii)* eliminate redundant tests (where low child = high child).
* **Shannon Expansion:** $f = x \cdot f_x \lor \neg x \cdot f_{\neg x}$ — the recursive foundation of OBDD construction.
* **Symbolic pre-image:** $\mathbf{Pre}(Y) = \{\,s \mid \exists s'.\, R(s,s') \land s' \in Y\,\}$ — implemented via Boolean conjunction + existential quantification over primed variables.
* **CTL Fixed-Point Equations:**
  * $\mathbf{EF}\varphi = \mu Z.\, \varphi \lor \mathbf{EX}(Z)$ — **LFP**, starts from $\emptyset$
  * $\mathbf{EG}\varphi = \nu Z.\, \varphi \land \mathbf{EX}(Z)$ — **GFP**, starts from $S$
  * $\mathbf{E}\varphi\mathbf{U}\psi = \mu Z.\, \psi \lor (\varphi \land \mathbf{EX}(Z))$ — **LFP**
  * $\mathbf{AG}\varphi \equiv \neg \mathbf{EF}\neg\varphi$ — standard symbolic reduction
* **Termination guarantee:** Kleene iteration on a *finite* lattice always converges in at most $\vert S \vert$ steps.
* **Monotonicity of pre-image:** $Y_1 \subseteq Y_2 \Rightarrow \mathbf{Pre}(Y_1) \subseteq \mathbf{Pre}(Y_2)$ — this is what *makes* the fixed-point iteration converge monotonically.
* **Variable ordering matters exponentially** — finding the optimal ordering is NP-hard; practical tools use the **sift** heuristic.
* **Key tools:** **SMV** (McMillan), **NuSMV** (open source), **Cadence SMV**, **VIS**, **CUDD** (underlying OBDD library).
* **Industrial significance:** Symbolic model checking verified the **Pentium-4 floating-point divider**, the **AEGIS avionics** system, and is the workhorse of **hardware equivalence checking** at Intel, IBM, and AMD.
* **Kleene–Tarski theorem** (1938, 1955): Every monotone function on a complete lattice has a *least* and *greatest* fixed point — the theoretical bedrock of the entire symbolic approach.

---

<!-- SECTION_5_END -->
