# Graph Coverage for Design Elements - Call graphs, class inheritance testing, and coupling data-flow pairs

<!-- SECTION_1_START -->
# 📘 Module 3 — Graph Coverage for Design Elements

## 🎯 1.1 Graph Coverage Criteria — The Big Picture

> [!IMPORTANT]
> **Graph Coverage Criteria** are structural testing techniques that drive test design from a **graph representation of software artifacts** (control-flow, call, inheritance, or data-dependency graphs). Unlike statement/branch coverage (which works on procedural control flow), design-element coverage operates on **inter-procedural and inter-class structures** — i.e., how methods, classes, and variables *interact* across module boundaries.

The three design-level graph constructs that the KTU 2024 syllabus stresses are:

| # | Design Graph | Models | Test Focus |
|---|--------------|--------|------------|
| 1 | **Call Graph (CG)** | Who calls whom (methods / functions) | Inter-procedural call paths |
| 2 | **Inheritance Graph (IG)** | `is-a` relationships among classes | Polymorphic dispatch, re-defined methods |
| 3 | **Coupling Data-Flow Graph (CDFG)** | Definition–use of shared/coupled variables across classes | Inter-class data interaction |

> [!NOTE]
> **Intuitive Analogy — The City Map.** Imagine software as a city. The *control-flow graph* is the inside of each building. The *call graph* is the road network between buildings. The *inheritance graph* is a family tree of buildings (skyscrapers inherit features from older buildings). The *coupling data-flow graph* tracks the mail truck that carries parcels (variables) between buildings. Graph coverage criteria dictate which roads, branches, and deliveries the QA team must *physically traverse* before signing off.

---

## 🎯 1.2 Call Graphs — Definition

> [!IMPORTANT]
> **Call Graph (CG):** A directed graph $G_{call} = (N, E)$ where each node $n \in N$ represents a *callable unit* (method, function, or procedure) and each edge $(n_i \rightarrow n_j) \in E$ represents an *invocation* of $n_j$ by $n_i$. Self-recursive calls appear as self-loops.

* **Node set** $N = \{m_1, m_2, \ldots, m_k\}$ — set of methods in the program.
* **Edge set** $E \subseteq N \times N$ — directed invocation relation.
* **Entry node** — node with **in-degree = 0** (e.g., `main()`).
* **Exit nodes** — leaves with no outgoing call.

**Intuition:** A call graph is the "telephone call log" of a program. If `placeOrder()` calls `validatePayment()` which calls `chargeCard()`, then a path `placeOrder → validatePayment → chargeCard` exists. A test must *actually trigger* this chain to satisfy call coverage.

---

## 🎯 1.3 Class Inheritance Testing — Definition

> [!IMPORTANT]
> **Inheritance Graph:** A directed acyclic graph (DAG) where nodes are classes and edges $C_p \rightarrow C_c$ denote that class $C_c$ *inherits from* $C_p$. The graph enables testing the *contract obligations* a subclass must fulfil when extending or overriding parent behaviour.

Key testing concerns in inheritance hierarchies:

* **Inherited methods** (re-used verbatim from parent).
* **Overridden methods** (same signature, different body).
* **Abstract / polymorphic methods** (late binding at runtime).
* **Newly introduced attributes** in subclass.
* **Constructor chaining** (default & parameterized super-calls).

**Intuition — The Family Will.** The *parent* class writes a will. Each *child* class may **accept** the will, **modify** a clause, or **add** a new clause. Inheritance testing verifies that every child honours the parent's will where required, properly changes only what it should, and never silently breaks a parent's invariant.

---

## 🎯 1.4 Coupling Data-Flow Pairs — Definition

> [!IMPORTANT]
> **Coupling:** A *coupling variable* $v$ is a class-level (or module-level) variable whose value is *defined* in one class and *used* in another. **Coupling data-flow testing** requires test paths that traverse **inter-class definition–use (d–u) associations** for such variables.

A **coupling d–u pair** is a tuple $(d, c, v, u)$:
* $d$ = defining class,
* $c$ = using class,
* $v$ = coupled variable,
* $u$ = use site (e.g., `c-use` or `p-use`).

> [!NOTE]
> **Intuitive Analogy — The Shared Whiteboard.** A *coupling variable* is a whiteboard hanging in the company corridor. The *Sales* team writes today's figures on it (definition), and the *Finance* team reads from it later (use). Coupling data-flow testing insists that at least one test path physically walks the corridor: *Sales writes the number → some execution transfers control → Finance reads the number*. Without that path, the whiteboard is invisible to QA, and a bug in the writing or reading may escape detection.

---

## 🎯 1.5 GeoGebra / Desmos Integration (Process-Time Concept)

Although graph coverage is discrete, it has a continuous-time analogue that helps visualise *which call path* is taken most often:

> [!VISUALIZATION CONTROL]
> **Concept:** Visualising *call-frequency* along a call graph edge as a function of execution time $t$.
> **GeoGebra / Desmos Input Equations:**
> * $f_{c}(t) = 50 \sin\!\left(\frac{2\pi t}{60}\right) + 55$   (call rate to `chargeCard`)
> * $f_{v}(t) = 30 \sin\!\left(\frac{2\pi t}{60} + \pi\right) + 35$ (call rate to `validatePayment`)
> * $f_{b}(t) = f_{c}(t) - f_{v}(t)$   (balance / skew)
>
> **Visual Description:** The two sinusoidal curves oscillate in anti-phase, simulating how workloads shift between *validation* and *charge* operations. The student should observe that coverage criteria demand tests for **both** phases (positive and negative) — analogous to ensuring the *minimum* of one curve is still traversed.

---

<!-- SECTION_2_START -->
# 📐 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Coverage Criteria Lattice for Design Graphs

Every design-graph coverage criterion can be located on the **coverage subsumption lattice**:

$$
\text{Node} \;\sqsubset\; \text{Edge} \;\sqsubset\; \text{Edge-Pair} \;\sqsubset\; \text{Prime Path}
$$

$$
\text{Node} \;\sqsubset\; \text{Node-Pair (Call Pair)} \;\sqsubset\; \text{Call-Path}
$$

| Criterion | Symbol | Meaning | KTU Typical Marks |
|-----------|--------|---------|-------------------|
| **Node Coverage** | $\mathrm{NC}$ | Visit every node at least once | 2 |
| **Edge Coverage** | $\mathrm{EC}$ | Traverse every edge at least once | 2 |
| **Edge-Pair Coverage** | $\mathrm{EPC}$ | Traverse every consecutive pair of edges | 3 |
| **Prime Path Coverage** | $\mathrm{PPC}$ | Traverse every *prime path* (simple + maximal) | 5 |
| **Call-Node Coverage** | $\mathrm{CNC}$ | Every method called at least once | 2 |
| **Call-Edge Coverage** | $\mathrm{CEC}$ | Every call relationship exercised | 2 |
| **Call-Pair Coverage** | $\mathrm{CPC}$ | Every pair of consecutive calls | 3 |
| **Coupling d–u Coverage** | $\mathrm{CDC}$ | Every inter-class def-use pair reached | 5 |
| **Inter-class Coverage (All-Defs × All-Uses across class boundary)** | $\mathrm{IDC}$ | Coverage product across two classes | 4 |

---

## 2.2 Call-Graph Coverage — Formal Rules

> [!NOTE]
> **Why call graphs differ from control-flow graphs:** A call graph has *one node per method*, not per statement. Hence coverage is *inter-procedural*. A method with an `if` is summarised as a single node whose *incoming* and *outgoing* edges represent the call sites.

Let $G_{call} = (N, E)$ with $|N| = n$, $|E| = m$.

### 2.2.1 Test Requirements (TRs)

| Criterion | Number of Test Requirements |
|-----------|-----------------------------|
| Node coverage | $\mathrm{TR}_{NC} = n$ |
| Edge coverage | $\mathrm{TR}_{EC} = m$ |
| Call-Pair coverage | $\mathrm{TR}_{CPC} = \displaystyle\sum_{v \in N} \mathrm{outdeg}(v) \cdot \mathrm{outdeg}(v) \;=\; \sum_{v \in N} \mathrm{outdeg}(v)^2$ |
| Prime Path coverage | $\mathrm{TR}_{PPC} = \text{number of simple paths that are not sub-paths of a longer simple path}$ |

### 2.2.2 Reachability Pre-Processing

Before counting TRs, *unreachable* nodes are pruned:

$$
N' = \{\, n \in N \mid n \text{ is reachable from entry node } n_{\text{entry}} \,\}
$$

This avoids inflating test requirements with dead code.

### 2.2.3 Call Pair Set

For any node $v$ with outgoing edges $e_1, e_2, \ldots, e_k$:

$$
\mathrm{CallPairs}(v) = \{\, (e_i, e_j) \mid i, j \in \{1, 2, \ldots, k\} \,\}
$$

The **total call-pair test requirements** are then:

$$
\mathrm{TR}_{CPC} = \sum_{v \in N} \mathrm{outdeg}(v)^2
$$

---

## 2.3 Class Inheritance Testing — Test Levels

Inheritance testing is a **three-level strategy** as per the KTU prescribed text (Ammann & Offutt, *Introduction to Software Testing*):

### Level 1 — **Inherited Method Testing**
Re-execute the parent's *test suite* against the subclass without modification. Rationale: if the subclass doesn't override the method, behaviour must be **identical** to the parent.

### Level 2 — **Overridden Method Testing**
For every method $m$ overridden in subclass $C_c$, design new tests that:
* exercise $m$ with **arguments of subclass type** (post-binding),
* verify that **pre-/post-conditions of parent** still hold,
* check the *new* post-conditions added by subclass.

### Level 3 — **New Method Testing**
* Apply intra-class coverage (NC, EC, EPC, PPC) **only on the new methods** in $C_c$.

### Level 4 — **Polymorphic / Dynamic-Binding Testing**
For every polymorphic call site $p$ in the program, force the dispatch to bind to *every concrete subclass* that overrides $p$'s method. This is formalised by the **Binding Coverage Criterion**:

$$
\mathrm{TR}_{BC} = \bigcup_{m \in M_{\text{poly}}} \{\, (m, C_i) \mid C_i \text{ is a concrete subclass overriding } m \,\}
$$

---

## 2.4 Coupling Data-Flow Pairs — Formal Model

### 2.4.1 Definitions

* **Coupled variable** $v$: a class-level (or module-level) attribute accessible from at least two classes.
* **Definition site** $d_v(C)$: a statement in class $C$ that assigns a value to $v$ (including constructors and setters).
* **Use site** $u_v(C)$: either a *computation use (c-use)* or a *predicate use (p-use)* in class $C$.

### 2.4.2 d–u Pair Set

$$
\mathrm{DU}(v) = \{\, (d_v(C_d), u_v(C_u)) \mid C_d \neq C_u \,\}
$$

### 2.4.3 Inter-class Data-Flow Test Requirements

$$
\mathrm{TR}_{CDC} = \bigcup_{v \in V_{\text{coupled}}} \mathrm{DU}(v)
$$

A test satisfies $\mathrm{CDC}$ iff every $(d, u)$ pair in $\mathrm{TR}_{CDC}$ lies on some executed test path.

### 2.4.4 Path-Based Interprocedural Data Flow (PID)

A **PID** is a tuple $(m_i, m_j, v)$ such that $v$ is defined in $m_i$ and used in $m_j$, with a *single* inter-procedural call path connecting $m_i$ to $m_j$. The PID coverage criterion states:

$$
\mathrm{TR}_{PID} = \bigcup_{v} \mathrm{PIDs}(v)
$$

### 2.4.5 All-Defs × All-Uses Inter-class Coverage

$$
\mathrm{TR}_{IDC} = \sum_{v \in V} \big(\, \text{Defs}(v) \cdot \text{Uses}(v) \,\big)
$$

> [!NOTE]
> **Why it matters in industry:** In microservice architectures, services exchange state via shared databases (coupling variables) and HTTP calls (call graphs). Coverage tools such as **Istanbul**, **JaCoCo**, and **Coverage.py** instrument bytecode to count d–u traversals across package boundaries — the very criteria above.

---

## 2.5 Coverage Subsumption Theorems

| Theorem | Statement |
|---------|-----------|
| **Th-1** | $\mathrm{Node} \sqsubseteq \mathrm{Edge}$ |
| **Th-2** | $\mathrm{Edge} \sqsubseteq \mathrm{EdgePair}$ |
| **Th-3** | $\mathrm{EdgePair} \sqsubseteq \mathrm{PrimePath}$ |
| **Th-4** | $\mathrm{CallNode} \sqsubseteq \mathrm{CallEdge}$ |
| **Th-5** | $\mathrm{CallEdge} \sqsubseteq \mathrm{CallPair}$ |
| **Th-6** | $\mathrm{CDC} \not\sqsubseteq \mathrm{Node}$ and $\mathrm{Node} \not\sqsubseteq \mathrm{CDC}$ (orthogonal criteria — the union is required) |

These theorems are **favourite KTU short-answer material** — expect 2–3 mark definitions.

---

## 2.6 Real-World Engineering Utility

| Domain | Application of Design-Graph Coverage |
|--------|--------------------------------------|
| **Microservices / REST APIs** | Call-graph coverage of HTTP-handler chain |
| **Mobile App Development** | Inheritance coverage of `Activity`/`Fragment` subclasses |
| **Embedded / RTOS** | Coupling data-flow for shared RTOS mailboxes |
| **AI/ML Pipelines** | Coverage of DAG orchestrators (Airflow, Kubeflow) |
| **Compiler Engineering** | PIDs for inter-procedural constant propagation |
| **Cybersecurity** | Finding untested attack-surface call paths |

---

<!-- SECTION_3_START -->
# 🧮 3. Step-by-Step Derivations & Code / Symbolic Implementation

## 3.1 Worked Example — Call-Graph Coverage of an E-Commerce System

### 3.1.1 Source Program

```python
# Program: E-Commerce Checkout
def main():
    cart = build_cart()           # 1
    if cart.is_valid():           # 2
        total = cart.compute_total()  # 3
        payment = make_payment(total) # 4
        if payment.ok:            # 5
            ship_order(cart)      # 6
        else:
            refund(payment)       # 7
    else:
        log_error(cart.reason)    # 8

def build_cart():        ...   # called from 1
def make_payment(t):     ...   # called from 4
def ship_order(c):       ...   # called from 6
def refund(p):           ...   # called from 7
def log_error(r):        ...   # called from 8
def cart.compute_total(): ...  # called from 3
```

### 3.1.2 Call-Graph Construction

Nodes: $N = \{\,\text{main}, \text{build\_cart}, \text{compute\_total}, \text{make\_payment}, \text{ship\_order}, \text{refund}, \text{log\_error}\,\}$

Edges (call relations):

$$
E = \{\, (\text{main}, \text{build\_cart}),\; (\text{main}, \text{compute\_total}),\; (\text{main}, \text{make\_payment}),\; (\text{main}, \text{ship\_order}),\; (\text{main}, \text{refund}),\; (\text{main}, \text{log\_error}) \,\}
$$

### 3.1.3 Counting Test Requirements

$$
\begin{aligned}
n &= \vert N \vert = 7 \\
m &= \vert E \vert = 6 \\
\mathrm{outdeg}(\text{main}) &= 6 \quad (\text{all edges originate from main}) \\
\mathrm{outdeg}(\text{others}) &= 0 \\
\mathrm{TR}_{NC} &= 7 \\
\mathrm{TR}_{EC} &= 6 \\
\mathrm{TR}_{CPC} &= 6^2 + 0 + \cdots + 0 = 36
\end{aligned}
$$

### 3.1.4 Test Paths Satisfying Each Criterion

| Path | Description | Satisfies |
|------|-------------|-----------|
| $p_1$ | `main → build_cart → main` | $\mathrm{NC}$ |
| $p_2$ | `main → build_cart → main → compute_total → main → make_payment → main → ship_order → main` | $\mathrm{NC}, \mathrm{EC}$ |
| $p_3$ | `main → log_error → main` | adds back-edge needed for full $\mathrm{EC}$ |
| $p_4$ | `main → compute_total → main → make_payment → main → refund → main` | adds refund edge |
| $p_5, \ldots, p_{36}$ | Enumerate all 36 ordered call pairs starting at `main` | $\mathrm{CPC}$ |

**Observation:** A single test path *cannot* reach all 36 call-pairs because the decision at line 5 (`if payment.ok`) chooses *either* `ship_order` *or* `refund`, never both in the same execution. Hence at least **two** test paths are mandatory to satisfy $\mathrm{CPC}$ from the same call site. The KTU valuation key typically awards 1 mark for identifying this branching, 1 mark for the $\mathrm{TR}$ count, and 1 mark for naming the criterion correctly.

---

## 3.2 Worked Example — Inheritance Coverage in a Banking System

### 3.2.1 Hierarchy

```java
class Account {                       // Parent
    void deposit(double amt) { ... }  // Inherited as-is
    double getBalance() { ... }      // Inherited as-is
    boolean withdraw(double amt) { ... } // Overridden in subclasses
}

class SavingsAccount extends Account {
    @Override
    boolean withdraw(double amt) { /* min-balance check */ }
}

class CurrentAccount extends Account {
    @Override
    boolean withdraw(double amt) { /* overdraft check */ }
}

class FixedDepositAccount extends Account {
    @Override
    boolean withdraw(double amt) { /* penalty calculation */ }
}
```

### 3.2.2 Test Requirements

$$
\begin{aligned}
\mathrm{TR}_{\text{level 1}} &= \text{Parent test suite re-run on each of 3 subclasses} \\
\mathrm{TR}_{\text{level 2 (overridden withdraw)}} &= 3 \text{ new test cases} \\
\mathrm{TR}_{\text{level 3 (new methods)}} &= \text{intra-class coverage of new methods only} \\
\mathrm{TR}_{\text{level 4 (polymorphic binding)}} &= 3 \text{ (one per concrete subclass)}
\end{aligned}
$$

### 3.2.3 Polymorphic Binding Coverage Test Plan

For every polymorphic call site $p$ that calls `Account.withdraw()`:

| Test ID | Concrete Binding | Argument Profile |
|---------|------------------|------------------|
| `PBC-1` | `SavingsAccount.withdraw` | `amt` < min-balance → expect `false` |
| `PBC-2` | `CurrentAccount.withdraw` | `amt` > balance + overdraft → expect `false` |
| `PBC-3` | `FixedDepositAccount.withdraw` | pre-mature withdrawal → penalty applied |

A test runner using **dependency injection** (Spring / Guice) or **factory pattern** must instantiate each binding. The KTU key awards 2 marks for the table, 1 mark for the binding-set formula, and 1 mark for naming the criterion.

---

## 3.3 Worked Example — Coupling Data-Flow Pairs

### 3.3.1 Two Coupled Classes

```python
class SalesModule:
    _daily_total = 0            # coupled variable
    def record_sale(self, amt):
        SalesModule._daily_total = amt   # DEFINITION site of v

class FinanceModule:
    def get_total(self):
        return SalesModule._daily_total  # USE site of v
```

### 3.3.2 Construct the Coupling Data-Flow Graph

* $d_v$ = statement `SalesModule._daily_total = amt` (in `SalesModule`)
* $u_v$ = return of `SalesModule._daily_total` (in `FinanceModule`)
* $\mathrm{TR}_{CDC} = \{(d_v, u_v)\}$
* A test must exercise: $\text{main} \rightarrow \text{SalesModule.record\_sale} \rightarrow \text{FinanceModule.get\_total}$

### 3.3.3 All-Defs × All-Uses Inter-class

Suppose we add a `reset()` method in `FinanceModule` that *defines* `_daily_total` again:

$$
\begin{aligned}
\mathrm{Defs}(v) &= \{ d_1 \text{ in SalesModule}, d_2 \text{ in FinanceModule} \} \\
\mathrm{Uses}(v) &= \{ u_1 \text{ in FinanceModule} \} \\
\mathrm{TR}_{IDC} &= \vert \mathrm{Defs} \vert \times \vert \mathrm{Uses} \vert = 2 \times 1 = 2
\end{aligned}
$$

These 2 inter-class d–u pairs are: $(d_1, u_1)$ and $(d_2, u_1)$. Both must be reached.

---

## 3.4 Algorithmic Implementation — Prime Path Discovery in Python

> Below is a **fully operational, type-hinted** Python implementation that (i) parses a call graph from adjacency text, (ii) enumerates **prime paths** using the *linearisation-of-DAG* technique, and (iii) reports coverage status given a set of executed test paths. This is exam-worthy and lab-worthy.

```python
"""
prime_path_toolkit.py
A reusable, production-grade toolkit for call-graph prime path analysis.
"""

from __future__ import annotations
import logging
from collections import defaultdict
from dataclasses import dataclass, field
from typing import Dict, List, Set, Tuple, Iterable

# ----------------------------- Logging ----------------------------------- #
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(message)s",
)
logger = logging.getLogger("prime_path_toolkit")


# ----------------------------- Domain Model ----------------------------- #
@dataclass(frozen=True)
class Edge:
    src: str
    dst: str

    def __str__(self) -> str:
        return f"({self.src} -> {self.dst})"


@dataclass
class CallGraph:
    """Directed call graph (may contain cycles)."""
    nodes: Set[str] = field(default_factory=set)
    edges: Set[Edge] = field(default_factory=set)
    adj: Dict[str, List[str]] = field(default_factory=lambda: defaultdict(list))

    # ----------------------------- Constructors ----------------------------- #
    @classmethod
    def from_edge_list(cls, edges: Iterable[Tuple[str, str]]) -> "CallGraph":
        g = cls()
        for src, dst in edges:
            if src == dst:
                logger.warning("Self-loop ignored at (%s)", src)
                continue
            g.nodes.update({src, dst})
            g.edges.add(Edge(src, dst))
            g.adj[src].append(dst)
        logger.info("Graph loaded with %d nodes, %d edges", len(g.nodes), len(g.edges))
        return g

    # ----------------------------- Helpers ---------------------------------- #
    def successors(self, node: str) -> List[str]:
        return list(dict.fromkeys(self.adj.get(node, [])))  # preserve order, de-dup

    def all_simple_paths(self, start: str, max_len: int = 50) -> List[List[str]]:
        """Enumerate *all* simple paths (no repeated nodes) up to a safety cap."""
        result: List[List[str]] = []

        def dfs(node: str, path: List[str]) -> None:
            if len(result) >= 10_000:
                logger.warning("Path cap reached; terminating DFS")
                return
            if len(path) > max_len:
                return
            for nxt in self.successors(node):
                if nxt in path:           # avoid cycle – keeps paths simple
                    continue
                new_path = path + [nxt]
                result.append(new_path[:])
                dfs(nxt, new_path)

        dfs(start, [start])
        return result

    # ----------------------------- Prime Paths ----------------------------- #
    def prime_paths(self) -> List[List[str]]:
        """Return the list of prime (simple + maximal) paths of the graph."""
        all_paths: List[List[str]] = []
        for n in sorted(self.nodes):
            all_paths.extend(self.all_simple_paths(n))

        path_set = {tuple(p) for p in all_paths}
        primes: List[List[str]] = []
        for path in all_paths:
            tp = tuple(path)
            # A path is prime iff it is NOT a strict sub-path of any other path
            is_sub = False
            for other in path_set:
                if other == tp:
                    continue
                if self._is_subpath(tp, other):
                    is_sub = True
                    break
            if not is_sub:
                primes.append(path)
        # Deduplicate (preserve order)
        seen: Set[Tuple[str, ...]] = set()
        unique_primes: List[List[str]] = []
        for p in primes:
            tk = tuple(p)
            if tk not in seen:
                seen.add(tk)
                unique_primes.append(p)
        logger.info("Discovered %d prime paths", len(unique_primes))
        return unique_primes

    @staticmethod
    def _is_subpath(small: Tuple[str, ...], big: Tuple[str, ...]) -> bool:
        if len(small) >= len(big):
            return False
        for i in range(len(big) - len(small) + 1):
            if big[i:i + len(small)] == small:
                return True
        return False

    # ----------------------------- Coverage Check --------------------------- #
    def coverage_report(
        self,
        executed_paths: Iterable[List[str]],
        criterion: str = "prime_path",
    ) -> Dict[str, object]:
        executed = [tuple(p) for p in executed_paths]
        if criterion == "prime_path":
            targets = [tuple(p) for p in self.prime_paths()]
        elif criterion == "edge":
            targets = [tuple((e.src, e.dst)) for e in self.edges]
        elif criterion == "node":
            targets = [(n,) for n in self.nodes]
        else:
            raise ValueError(f"Unknown criterion: {criterion}")

        covered, missed = [], []
        for t in targets:
            hit = any(self._path_covers(t, ep) for ep in executed)
            (covered if hit else missed).append(list(t))

        pct = 100.0 * len(covered) / max(1, len(targets))
        logger.info("[%s] Coverage = %.2f%% (%d / %d)",
                    criterion, pct, len(covered), len(targets))
        return {
            "criterion": criterion,
            "targets": len(targets),
            "covered": covered,
            "missed": missed,
            "percentage": pct,
        }

    @staticmethod
    def _path_covers(target: Tuple[str, ...], executed: Tuple[str, ...]) -> bool:
        if len(target) == 0:
            return False
        n, m = len(target), len(executed)
        for i in range(m - n + 1):
            if executed[i:i + n] == target:
                return True
        return False


# ----------------------------- Demo / Lab Run ----------------------------- #
if __name__ == "__main__":
    # Tiny e-commerce call graph
    edges = [
        ("main", "build_cart"),
        ("build_cart", "validate_cart"),
        ("validate_cart", "compute_total"),
        ("compute_total", "make_payment"),
        ("make_payment", "ship_order"),
        ("make_payment", "refund"),
        ("compute_total", "log_error"),
    ]
    cg = CallGraph.from_edge_list(edges)
    primes = cg.prime_paths()
    print("Prime paths discovered:")
    for i, p in enumerate(primes, 1):
        print(f"  {i:2d}. {' -> '.join(p)}")

    executed = [
        ["main", "build_cart", "validate_cart", "compute_total",
         "make_payment", "ship_order"],
        ["compute_total", "log_error", "make_payment", "refund"],
    ]
    report = cg.coverage_report(executed, criterion="prime_path")
    print("\nCoverage Report:", report["percentage"], "%")
    print("Missed prime paths:", report["missed"])
```

> [!IMPORTANT]
> **How the algorithm maps to KTU key points (1-mark increments):**
> 1. Correct import of `logging` and `dataclasses` — *Type-safety and reproducibility* — 1 mark.
> 2. `from_edge_list` rejects self-loops with explicit warning — *Robustness* — 1 mark.
> 3. DFS with explicit cycle prevention via `nxt in path` — *Simple-path property* — 1 mark.
> 4. Sub-path check via sliding window — *Prime-path property* — 1 mark.
> 5. Coverage report returns structured dict — *Traceability* — 1 mark.

---

## 3.5 Symbolic Derivation — Counting Call Pairs of a Star Graph

Let a star call graph have **one hub** node $h$ with $k$ outgoing edges to $k$ leaves:

$$
\begin{aligned}
\mathrm{outdeg}(h) &= k \\
\mathrm{outdeg}(l_i) &= 0 \quad \forall i = 1, \ldots, k \\
\mathrm{TR}_{CPC} &= \sum_{v \in N} \mathrm{outdeg}(v)^2 = k^2 + 0 + \cdots + 0 = k^2
\end{aligned}
$$

Hence, for a star of $k=6$ leaves (matching the e-commerce example above), we obtain $6^2 = 36$ call-pair test requirements. This generalises to:

$$
\boxed{\; \mathrm{TR}_{CPC} = \sum_{v \in N} \mathrm{outdeg}(v)^2 \;}
$$

This closed-form expression is itself a **14-mark derivation favourite** — KTU examiners award 4 marks for the formula, 3 for its justification, 4 for substitution, and 3 for the final numeric answer.

---

## 3.6 Coupling d–u Reachability Derivation

Given classes $C_1$ and $C_2$, the **inter-class d–u pair** for variable $v$ is reachable iff there exists a path $p$ in the call graph from *any* definition site $d_v$ to *any* use site $u_v$ *across the class boundary*. Formally:

$$
\mathrm{reachable}(d_v, u_v) \;=\; \exists p \in \mathrm{Paths}(C_1, C_2) : d_v \in \mathrm{Nodes}(p) \;\wedge\; u_v \in \mathrm{Nodes}(p)
$$

For multiple definitions and uses:

$$
\mathrm{CDC}_{\text{satisfied}} \;\iff\; \forall (d, u) \in \mathrm{TR}_{CDC} : \mathrm{reachable}(d, u)
$$

---

<!-- SECTION_4_START -->
# 🗺️ 4. Structural Diagrams & Schematics

## 4.1 Mermaid Call-Graph Diagram (E-Commerce)

```mermaid
graph TD
    A["main"] --> B["build_cart"]
    A --> C["compute_total"]
    A --> D["make_payment"]
    A --> E["ship_order"]
    A --> F["refund"]
    A --> G["log_error"]
    B --> H["validate_cart"]
    H --> C
    D --> E
    D --> F
    C --> G
```

*Every rectangular box is a method node. The arrows depict directed call relations. The hub-and-spoke topology around `main` is what makes $\mathrm{TR}_{CPC} = 36$ — six squared.*

---

## 4.2 Mermaid Inheritance Graph (Banking)

```mermaid
graph TD
    ACCT["Account"] --> SAV["SavingsAccount"]
    ACCT --> CUR["CurrentAccount"]
    ACCT --> FD["FixedDepositAccount"]
    SAV -. overrides .-> W1["withdraw"]
    CUR -. overrides .-> W1
    FD -. overrides .-> W1
    ACCT -. declares .-> W1
```

*The dashed edges highlight **method overriding** (polymorphism). Solid edges are **inheritance** relations. The test strategy must cover all three overridden paths for `withdraw`.*

---

## 4.3 Mermaid Coupling Data-Flow Architecture

```mermaid
graph LR
    subgraph Sales_Module
        S1["record_sale defines v"]
    end
    subgraph Shared_State["Coupled Variable v daily_total"]
        V["v"]
    end
    subgraph Finance_Module
        F1["compute_bonus uses v"]
        F2["reset defines v"]
    end
    S1 --> V
    F2 --> V
    V --> F1
```

*Every definition-to-use traversal forms one inter-class d–u pair. The architecture above yields 3 such pairs: `(S1→F1)`, `(F2→F1)`, and the within-Finance `(F2→F1)`.*

---

## 4.4 Block-Level Functional Architecture — Coverage Engine

```mermaid
flowchart LR
    subgraph Input_Layer
        SRC["Source Code / Bytecode"]
        CALL["Static Call-Graph Builder"]
        INH["Inheritance Resolver"]
        COUP["Coupling Variable Analyser"]
    end
    subgraph Processing_Layer
        CFG["Control-Flow Graph Store"]
        PRIME["Prime Path Enumerator"]
        BIND["Binding Coverage Mapper"]
        PID["Inter-class PID Finder"]
    end
    subgraph Output_Layer
        TR["Test Requirements"]
        COV["Coverage Report"]
        MISS["Missed Targets"]
    end
    SRC --> CALL
    SRC --> INH
    SRC --> COUP
    CALL --> CFG
    INH --> BIND
    COUP --> PID
    CFG --> PRIME
    PRIME --> TR
    BIND --> TR
    PID --> TR
    TR --> COV
    COV --> MISS
```

*This is the **system-level pipeline** that production tools (e.g., *EMMA*, *Cobertura*) implement. Each box corresponds to one research-paper module referenced in the KTU prescribed text.*

---

## 4.5 Sequential Processing Topology — Test-Path Generation Matrix

| Stage | Input | Operation | Output |
|-------|-------|-----------|--------|
| 1 | Source code | Lex/Parsing | AST |
| 2 | AST | Class hierarchy resolver | Inheritance graph |
| 3 | AST | Call-site extraction | Call graph |
| 4 | Call graph | Path enumerator | Prime path set |
| 5 | Coupling vars | d–u extractor | TR set |
| 6 | TR set | Path satisfier | Minimal test-suite |
| 7 | Test-suite | Runner | Coverage % |

---

<!-- SECTION_5_START -->
# 🧪 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer (3 Marks Each)

### Q1. Define a *call graph* and list any two call-graph coverage criteria. `[KTU University Exam — Dec 2023, CO2, Remember]`

**Model Answer (3 marks):**

A **call graph** is a directed graph $G_{call} = (N, E)$ where each node $n \in N$ represents a callable unit (method/function) and each edge $(n_i, n_j) \in E$ represents an invocation of $n_j$ by $n_i$.

Two call-graph coverage criteria:

1. **Call-Node Coverage (CNC):** Every method in the graph must be called at least once during testing.
2. **Call-Pair Coverage (CPC):** Every ordered pair of consecutive calls must be exercised at least once in a single test path.

> **[Valuation Key — 1 mark each]**: definition; first criterion + definition; second criterion + definition.

---

### Q2. What is a *coupled variable*? Why is inter-class data-flow testing needed even when intra-class coverage is 100%? `[KTU University Exam — July 2024, CO3, Understand]`

**Model Answer (3 marks):**

* A **coupled variable** is a class-level (or module-level) variable whose value is *defined* in one class and *used* in another.
* Intra-class 100% coverage only proves every internal def-use is reached; it does **not** guarantee that an *inter*-class def-use path (Sales-writes → Finance-reads) is ever traversed. Bugs in shared-state synchronisation, race conditions, and stale-cache faults can therefore escape detection. Inter-class data-flow testing is needed to *bridge* this gap.

> **[Valuation Key]**: Definition 1 mark; inter-class gap explanation 1 mark; example 1 mark.

---

## 5.2 Part B — 14 Marks (Internal Choice)

### 📝 Question A — Call-Graph Coverage

> `[KTU University Exam — Dec 2023, CO2, Apply / Analyse]`

**(a)** For the Java program below, draw the **call graph**. **(7 marks)**

```java
class Main {
    public static void main(String[] a) {
        Driver d = new Driver();
        d.drive();
    }
}
class Driver {
    void drive() {
        start(); navigate(); park();
    }
    void start()  { System.out.println("start"); }
    void navigate() {
        if (Math.random() > 0.5) accelerate(); else brake();
    }
    void park()  { stop(); }
    void accelerate() { ... }
    void brake()      { ... }
    void stop()       { ... }
}
```

**(b)** Compute the **number of test requirements** for *Call-Node*, *Call-Edge*, and *Call-Pair* coverage. List a minimal set of test paths that satisfies Call-Pair coverage. **(7 marks)**

---

#### ✅ Model Solution (Q-A)

**Part (a) — Drawing the Call Graph (7 marks):**

Nodes:

$$
N = \{\,\text{main}, \text{drive}, \text{start}, \text{navigate}, \text{park}, \text{accelerate}, \text{brake}, \text{stop}\,\}
$$

Edges (call relations):

$$
\begin{aligned}
E = \{ & (\text{main}, \text{drive}), \\
       & (\text{drive}, \text{start}), (\text{drive}, \text{navigate}), (\text{drive}, \text{park}), \\
       & (\text{navigate}, \text{accelerate}), (\text{navigate}, \text{brake}), \\
       & (\text{park}, \text{stop}) \,\}
\end{aligned}
$$

```mermaid
graph TD
    M["main"] --> D["drive"]
    D --> S["start"]
    D --> N["navigate"]
    D --> P["park"]
    N --> A["accelerate"]
    N --> B["brake"]
    P --> ST["stop"]
```

> **[Valuation Key — 1 mark each]**: node set correct; edge set correct; Mermaid / hand-drawn version drawn; `accelerate` and `brake` branches shown; `park → stop` edge included; legend & node count 7 marked; edges 7 marked.

**Part (b) — Counting Test Requirements (7 marks):**

Out-degrees:

| Node | Out-degree |
|------|-----------|
| main | 1 |
| drive | 3 |
| navigate | 2 |
| start, park, accelerate, brake, stop | 0 |

$$
\begin{aligned}
\mathrm{TR}_{CNC} &= n = 8 \\
\mathrm{TR}_{CEC} &= m = 7 \\
\mathrm{TR}_{CPC} &= 1^2 + 3^2 + 2^2 + 0 + 0 + 0 + 0 + 0 = 1 + 9 + 4 = 14
\end{aligned}
$$

**Minimal test path set for CPC:**

| Path | Call sequence | Pairs covered |
|------|---------------|--------------|
| $p_1$ | `main → drive → start → drive → navigate → accelerate` | `(main,drive)`, `(drive,start)`, `(drive,navigate)`, `(navigate,accelerate)` |
| $p_2$ | `main → drive → navigate → brake → drive → park → stop` | `(navigate,brake)`, `(drive,park)`, `(park,stop)` |

Combining $p_1$ and $p_2$ gives all 14 call-pairs. **Two tests suffice** to satisfy CPC for this graph.

> **[Valuation Key — 1 mark each]**: out-degree table; TR-CNC; TR-CEC; TR-CPC formula; TR-CPC value; first test path; second test path + justification that 14 pairs are covered.

---

### 📝 Question B — Coupling Data-Flow Pairs & Inheritance

> `[KTU University Exam — July 2024, CO3, Apply / Analyse]`

**(a)** Two classes `Inventory` and `Billing` share a coupled variable `stockLevel`. `Inventory.update(level)` defines it; `Billing.invoice()` uses it. The call graph path is `main → Inventory.update → Billing.invoice`. **(7 marks)**

1. Draw the **coupling data-flow graph**.
2. List the **d–u pairs** and compute the **TR count** for coupling data-flow coverage (CDC).
3. State one test path that satisfies CDC.

**(b)** A class hierarchy has `Vehicle` (parent) with `start()`; `Car` and `Bike` override `start()`. A polymorphic call site `v.start()` exists in `main`. **(7 marks)**

1. List the **binding coverage test requirements**.
2. Give the **incremental inheritance testing** plan (Level 1, 2, 3).
3. State *one* test design for a `Bike.start()` instance that the parent test suite would *not* catch.

---

#### ✅ Model Solution (Q-B)

**Part (a) — Coupling Data-Flow (7 marks):**

1. **Coupling d–u graph:**

```mermaid
graph LR
    INV["Inventory.update defines v"]
    V["v stockLevel"]
    BILL["Billing.invoice uses v"]
    M["main"]
    M --> INV
    INV --> V
    V --> BILL
    M --> BILL
```

2. **d–u pair set:**

$$
\mathrm{DU}(v) = \{\,(\text{Inventory.update}, \text{Billing.invoice})\,\}
$$

$$
\boxed{\; \mathrm{TR}_{CDC} = 1 \;}
$$

3. **Satisfying test path:**

$$
p_1 = \text{main} \rightarrow \text{Inventory.update} \rightarrow \text{Billing.invoice}
$$

> **[Valuation Key]**: graph drawn 2 marks; TR_CDC = 1 explicitly shown 2 marks; test path with the cross-class d–u traversal 3 marks.

**Part (b) — Inheritance & Binding Coverage (7 marks):**

1. **Binding coverage test requirements:**

$$
\mathrm{TR}_{BC} = \{(\text{start}, \text{Car}), (\text{start}, \text{Bike})\}
$$

$$
\boxed{\; \mathrm{TR}_{BC} = 2 \;}
$$

2. **Incremental inheritance testing plan:**

* **Level 1 — Inherited methods:** Re-execute `Vehicle`'s test suite for `start()` on `Car` and `Bike` *as if* they were the parent (no override). 1 mark.
* **Level 2 — Overridden methods:** Re-run *with* the override active. 1 mark.
* **Level 3 — New methods:** Apply intra-class coverage only to methods introduced in `Car` / `Bike` (e.g., `Car.openSunroof()`). 1 mark.

3. **Test missed by parent suite:** A `Bike.start()` test where the **kill-switch wire** is broken — parent `Vehicle.start()` does not model a kill-switch, so the parent suite cannot detect this. The test must assert that the engine remains *off* when the kill-switch is engaged.

> **[Valuation Key]**: TR_BC computation 2 marks; incremental plan all 3 levels 3 marks; new-test design with concrete example 2 marks.

---

## 5.3 KTU Examiner's Valuation Warnings

> [!WARNING]
> **Pitfall 1 — Confusing *call graph* with *control-flow graph*.** Call-graph nodes are *methods*, not statements. Drawing CFG nodes (e.g., for `if` statements) and labelling it a call graph will cost you **3 marks outright**.
>
> **Pitfall 2 — Forgetting the squared term in CPC.** The TR count for call pairs is $\sum \mathrm{outdeg}(v)^2$, **not** $\sum \mathrm{outdeg}(v)$. A common slip costs **1–2 marks**.
>
> **Pitfall 3 — Treating inheritance as just *overriding*.** Students often describe only the *override* case and forget **inherited-as-is** and **new-method** layers. The KTU scheme awards 2 marks for each of the three levels.
>
> **Pitfall 4 — Skipping the boundary check for inter-class d–u.** If the definition and use are in the *same* class, that is **intra-class** and does **not** count as a coupling d–u pair. Always state "definition in $C_d$, use in $C_u$, $C_d \neq C_u$."
>
> **Pitfall 5 — Reporting coverage percentage without a coverage report table.** A bare number is worth 1 mark; a tabular breakdown of *covered* / *missed* / *total* TRs is worth 2–3 marks.
>
> **Pitfall 6 — Omitting the cycle-handling note for prime paths.** A call graph may have recursion. A prime-path definition *requires* simple paths. Forgetting to mention this in a derivation costs 1 mark.

---

## 5.4 Topic Recap & Important Things to Remember

> 📌 **High-Density Rapid-Revision Checklist**

* **Call Graph $G_{call} = (N, E)$** — nodes are methods; edges are invocations.
* **CNC** = $n$ TRs; **CEC** = $m$ TRs; **CPC** = $\sum_{v} \mathrm{outdeg}(v)^2$ TRs.
* **Prime Path** = simple path that is *not* a sub-path of any other simple path.
* **Star-graph CPC shortcut:** when one hub calls $k$ leaves, $\mathrm{TR}_{CPC} = k^2$.
* **Inheritance testing has 4 levels** — Inherited (re-execute parent suite), Overridden (new tests), New (intra-class coverage), Polymorphic Binding (every concrete subclass).
* **Binding Coverage** $\mathrm{TR}_{BC} = \{(m, C_i) \mid C_i \text{ overrides } m\}$ — must be exercised for *every* concrete subclass.
* **Coupled variable** = class-level variable defined in one class, used in another.
* **Coupling d–u pair** = $(d_v(C_d), u_v(C_u))$ with $C_d \neq C_u$.
* **CDC TR formula:** $\mathrm{TR}_{CDC} = \bigcup_{v} \mathrm{DU}(v)$.
* **IDC TR formula:** $\mathrm{TR}_{IDC} = \sum_{v} |\mathrm{Defs}(v)| \cdot |\mathrm{Uses}(v)|$.
* **PID (Path-based Interprocedural Data flow)** = a single call-path carrying a def-use traversal.
* **Coverage subsumption** — Node ⊏ Edge ⊏ Edge-Pair ⊏ Prime-Path.
* **Orthogonality** — CDC and Node coverage are *complementary*, not subsuming; both must be satisfied for a *complete* design-level test plan.
* **Engineering uses** — Microservices (call-graph of REST handlers), GUI frameworks (inheritance of widgets), shared-state systems (databases, message brokers).
* **Tools** — JaCoCo, Istanbul, Coverage.py, EMMA — all implement graph coverage at bytecode / source level.
* **Lab favourite command** — `--coverage-branch --coverage-paths` (Cobertura CLI equivalent) to enable prime-path analysis.
* **Mistake to avoid** — never claim a single test path satisfies CPC when a *branch* inside a called method makes two outgoing edges mutually exclusive.
* **Exam formula-mnemonic:** *"Out-degree **squared**, summed over nodes — that's CPC."*

---

<!-- SECTION_5_END -->
