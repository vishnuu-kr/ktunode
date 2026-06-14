# DFA State Minimization

<!-- SECTION_1_START -->
# DFA State Minimization — Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

A **Deterministic Finite Automaton (DFA)** is formally defined as a 5-tuple:

$$
M = (Q, \Sigma, \delta, q_0, F)
$$

where:
- $Q$ is a finite non-empty set of **states**.
- $\Sigma$ is a finite non-empty set of input symbols called the **alphabet**.
- $\delta : Q \times \Sigma \rightarrow Q$ is the **transition function**.
- $q_0 \in Q$ is the **start state**.
- $F \subseteq Q$ is the set of **final (accepting) states**.

> [!IMPORTANT]
> **DFA State Minimization (KTU Definition):** The process of converting a given DFA $M$ into an equivalent DFA $M'$ such that $L(M) = L(M')$ and $M'$ has the **minimum possible number of states**. The minimized DFA is **unique up to state renaming** (isomorphism).

## 1.2 Intuitive Analogy — "The Redundant Subway Map"

Imagine a city's subway map drawn by three different artists, where every artist added a few unnecessary transfer stations. Some stations are *unreachable* (no line actually passes through them), and some stations are *equivalent* (going through either station leads to exactly the same set of destinations no matter which train you board).

DFA minimization is the process of **redrawing the cleanest possible map**:
1. **Erase unreachable stations** — they are dead infrastructure.
2. **Merge equivalent stations** — if two stations behave identically for every possible future trip, they are the *same station* in disguise.

> [!NOTE]
> **Equivalence of States:** Two states $q_i$ and $q_j$ are **equivalent** (written $q_i \equiv q_j$) if for every input string $w \in \Sigma^*$, either both $\delta^*(q_i, w)$ and $\delta^*(q_j, w)$ are accepting states, or both are non-accepting. Otherwise, they are **distinguishable**.

## 1.3 Two States Are *Distinguishable* If…

There exists **at least one string** $w$ that makes one path accept and the other reject. The shortest such $w$ is called the **distinguishing string** for the pair.

> [!VISUALIZATION CONTROL]
> **Concept:** Behavioural Trace of Two States on Common Input
> **GeoGebra / Desmos Input Equations:**
> * $f_{q_i}(x) = $ sequence of visited states from $q_i$ on input string $x$
> * $f_{q_j}(x) = $ sequence of visited states from $q_j$ on input string $x$
> **Visual Description:** Plot two horizontal timelines starting at $q_i$ and $q_j$. As you feed symbols, the timelines branch downward. If a path ever lands in $F$ from one and not the other, the pair is "separated" — draw a red dotted vertical line at that step.

## 1.4 Why Is Minimization Important in Engineering?

| Domain | Use Case |
|---|---|
| **Compiler Design** | Lexical analyzer state tables are minimized to reduce memory footprint. |
| **Hardware (FPGA/ASIC)** | Sequential circuits are encoded with minimum flip-flops. |
| **Pattern Matching** | Tools like `grep` and intrusion-detection systems rely on minimal DFAs for fast matching. |
| **Model Checking** | Smaller state spaces mean faster verification of finite-state systems. |
| **Regex Engines** | A regex is internally compiled to a minimal DFA (e.g., RE2, Google's regular expression library). |

The standard **time complexity** of DFA minimization is:
- Table-filling method: $O(n^2 \cdot \mid\Sigma\mid)$ where $n = \mid Q \mid$.
- Partition refinement (Hopcroft): $O(n \cdot \log n)$.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Pre-Mini
