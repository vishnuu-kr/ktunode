---
title: "Complete problems for each level of PH"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca17"
status: "completed"
scrapedAt: "2026-05-20T17:23:56.394Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: Complete Problems for Each Level of the Polynomial Hierarchy (PH)

This module focuses on **Space Complexity**, which measures the amount of memory (or space) an algorithm uses to solve a problem. We will specifically explore **complete problems** for each level of the **Polynomial Hierarchy (PH)**, building upon our understanding of complexity classes.

---

### 1. Review of Core Concepts

Before diving into complete problems for the PH, let's quickly recap essential concepts.

*   **Space Complexity:**
    *   Measures the amount of memory an algorithm requires as a function of the input size.
    *   Typically denoted by $S(n)$, where $n$ is the input size.
    *   Examples of space complexity classes:
        *   **$L$ (Logarithmic Space):** Algorithms that use at most $O(\log n)$ space.
        *   **$NL$ (Non-deterministic Logarithmic Space):** Problems solvable by a non-deterministic Turing machine using at most $O(\log n)$ space.
        *   **$P$ (Polynomial Time):** Problems solvable by a deterministic Turing machine in polynomial time.
        *   **$NP$ (Non-deterministic Polynomial Time):** Problems solvable by a non-deterministic Turing machine in polynomial time.
        *   **$coNP$:** Problems whose complements are in $NP$.

*   **Reductions:**
    *   A way to show that one problem is "harder" than another.
    *   **Many-one reduction ($m$-reduction):** A function $f$ reduces problem $A$ to problem $B$ if for every instance $x$ of $A$, $x$ is in $A$ if and only if $f(x)$ is in $B$. The function $f$ must be computable in polynomial time (for $P$-reductions).
    *   **Log-space reduction ($l$-reduction):** A reduction that can be computed using logarithmic space. These are crucial for defining completeness in space complexity. If $A$ is $l$-reducible to $B$, and $B$ is in a complexity class $\mathcal{C}$, then $A$ is also in $\mathcal{C}$.

*   **Complete Problems:**
    *   A problem $P$ is **complete** for a complexity class $\mathcal{C}$ if:
        1.  $P \in \mathcal{C}$.
        2.  Every problem $Q \in \mathcal{C}$ is $l$-reducible to $P$.
    *   Complete problems represent the "hardest" problems in a complexity class. If a complete problem can be solved efficiently (e.g., in polynomial time), then the entire class can be solved efficiently.

*   **The Polynomial Hierarchy (PH):**
    *   An extension of $NP$ and $coNP$ that captures problems with more complex quantifier alternations.
    *   Defined inductively:
        *   $\Sigma_0^P = \Delta_0^P = \text{co}\Delta_0^P = P$
        *   $\Sigma_{k+1}^P = \text{NP}^{\Sigma_k^P}$ (problems solvable in polynomial time with an NP oracle for $\Sigma_k^P$ problems)
        *   $\Delta_{k+1}^P = P^{\Sigma_k^P}$ (problems solvable in polynomial time with a $\Sigma_k^P$ oracle)
        *   $\text{co}\Sigma_{k+1}^P = \text{coNP}^{\Sigma_k^P}$ (problems whose complements are in $\Sigma_{k+1}^P$)
    *   Equivalently, using alternating quantifiers:
        *   $\Sigma_k^P$: $\exists x_1 \forall x_2 \exists x_3 \dots Q_k x_k P(x_1, \dots, x_k)$, where $P$ is a polynomial-time predicate.
        *   $\text{co}\Sigma_k^P$: $\forall x_1 \exists x_2 \forall x_3 \dots \neg Q_k x_k P(x_1, \dots, x_k)$.
        *   $\Delta_k^P$: Problems solvable in polynomial time using an oracle for $\Sigma_{k-1}^P$ or $\text{co}\Sigma_{k-1}^P$.
    *   The union of all levels forms the Polynomial Hierarchy: $PH = \bigcup_{k=0}^\infty \Sigma_k^P$.
    *   If $\Sigma_k^P = \Sigma_{k+1}^P$ for any $k$, then $PH$ collapses to $\Sigma_k^P$.

---

### 2. Space Complexity Classes and the PH

While the PH is typically defined in terms of **polynomial time** and oracles, the concept of complete problems extends to space complexity. The important classes we'll consider are:

*   **$L$:** Decision problems solvable by a deterministic Turing machine using $O(\log n)$ space.
*   **$NL$:** Decision problems solvable by a non-deterministic Turing machine using $O(\log n)$ space.
*   **$PSPACE$:** Decision problems solvable by a deterministic Turing machine using $O(n^k)$ space for some constant $k$.
*   **$NPSPACE$:** Decision problems solvable by a non-deterministic Turing machine using $O(n^k)$ space for some constant $k$.

**Key Theorem:** $L \subseteq NL \subseteq P \subseteq NP \subseteq PSPACE = NPSPACE$. (The equality $PSPACE = NPSPACE$ is a fundamental result, provable via simulation of NTMs by DTMs using exponentially more space, which can then be compressed down to polynomial space by simulating state-space transitions efficiently).

The Polynomial Hierarchy can also be defined using **space-bounded** machines with oracles. However, a critical point is that adding a polynomial-time oracle to a space-bounded machine doesn't necessarily increase its space bound in a straightforward way. For this topic, we'll focus on the standard definitions of PH levels and their complete problems, with the understanding that log-space reductions are paramount.

---

### 3. Complete Problems for Levels of the PH

We will now explore complete problems for the initial levels of the PH, primarily focusing on how their definitions naturally lead to the quantifier structures that characterize these levels. The standard reductions used here are **log-space reductions**.

#### 3.1. $L$-complete Problems

**Definition:** A problem is $L$-complete if it is in $L$ and every problem in $L$ can be log-space reduced to it.

*   **Key Concept:** Problems in $L$ often involve simple satisfiability or membership checks where the computation can be guided by keeping track of a limited amount of information (logarithmically in the input size).

*   **Example Problem: Quantified Boolean Formulas (QBF) with limited quantifiers**

    Consider a variant of Quantified Boolean Formulas (QBF) where the number of alternations is very small.

    *   **$\text{GT}$-FORMULA:** Given a Boolean formula $\phi$ with variables $x_1, \dots, x_n$, does the formula represent a tautology?
        *   This is equivalent to checking if $\forall x_1 \dots \forall x_n \phi$ is true.
        *   This problem is actually **coNP-complete**.

    *   **$L$-Complete Problem: $\text{VAL-FORMULA}$** (or simpler variants like $\text{GT}$-FORMULA for a fixed variable assignment)
        A common $L$-complete problem involves evaluating a simple arithmetic or logical expression.

        *   **$\text{VAL-PATH}$ (Graph Reachability):** Given a directed graph $G=(V, E)$ and two vertices $s, t \in V$, does a path exist from $s$ to $t$?
            *   **Proof Sketch:**
                *   **Membership in $L$:** A deterministic Turing machine can solve this in $O(\log |V|)$ space. It can maintain a pointer to the current vertex and iteratively explore outgoing edges. A breadth-first search (BFS) or depth-first search (DFS) can be implemented with a stack whose depth is bounded by the number of vertices, which requires $O(\log |V|)$ space to store vertex identifiers. However, to avoid cycles and repeated visits, we need to mark visited nodes. A more careful implementation of DFS can achieve $O(\log |V|)$ space by storing the current path.
                *   **$l$-Reduction from any $L$ problem:** Any problem in $L$ can be reduced to graph reachability. The configuration of a log-space Turing machine can be encoded as a vertex in a configuration graph. Reachability between the initial configuration and an accepting configuration then becomes the problem.

        *   **$\text{GT}$-FORMULA (Restricted):** A Boolean formula $\phi$ with variables $x_1, \dots, x_n$ where we want to determine if $\exists x_1 \forall x_2 \phi$ is true.
            *   While $\exists x_1 \forall x_2 \phi$ is $\Delta_2^P$-complete, a restricted version where the formula structure is very simple can be $L$-complete. The key is that the evaluation can be done with limited state.

**Important Point:** The canonical $L$-complete problem is often cited as the evaluation of a Boolean formula with a very specific structure, or reachability in a graph where the number of nodes is encoded. For instance, **$\text{PATH}$** (undirected graph reachability) is $L$-complete.

#### 3.2. $NL$-complete Problems

**Definition:** A problem is $NL$-complete if it is in $NL$ and every problem in $NL$ can be log-space reduced to it.

*   **Key Concept:** Problems in $NL$ involve non-deterministic choices that can be resolved with limited memory. The ability to guess and verify using $O(\log n)$ space defines $NL$.

*   **Example Problem: Quantified Boolean Formulas (QBF) with two quantifiers**

    *   **$\text{QBF}_{\forall \exists}$:** Given a Boolean formula of the form $\forall x_1 \exists y_1 \forall x_2 \exists y_2 \dots \forall x_k \exists y_k \phi(x_1, y_1, \dots, x_k, y_k)$, where $\phi$ is a polynomial-size DNF or CNF formula, is the formula true?

    *   **$\text{2-QBF}$:** Given a quantified Boolean formula of the form $\forall x_1 \dots \forall x_k \exists y_1 \dots \exists y_m \phi(x_1, \dots, x_k, y_1, \dots, y_m)$, where $\phi$ is a polynomial-size, quantifier-free Boolean formula, is the formula true?
        *   This is $\Sigma_2^P$-complete in terms of time complexity. However, for space complexity, **$\text{2-QBF}$** can be shown to be **$NL$-complete** when the second block of quantifiers is existential ($\exists$). More generally, formulas of the form $\forall x_1 \dots \forall x_k \exists y_1 \dots \exists y_m \phi$ are $\Sigma_k^P$-complete in time. For space, a common $NL$-complete problem is related to reachability with specific graph structures.

    *   **The Standard $NL$-complete Problem: $\text{GAP}$ (Graph Accessibility Problem)**
        *   **Definition:** Given a directed graph $G=(V,E)$ and two vertices $s, t \in V$, does there exist a path from $s$ to $t$?
        *   **Proof Sketch:**
            *   **Membership in $NL$:** On a non-deterministic Turing machine, we can guess the sequence of vertices along a path from $s$ to $t$. For each step in the path, we guess the next vertex. The machine accepts if it reaches $t$. The space needed is to store the current vertex and the next vertex to guess, which is $O(\log |V|)$ space.
            *   **$l$-Reduction from any $NL$ problem:** Similar to the $L$-completeness proof for graph reachability, any problem in $NL$ can be encoded as a configuration graph. The computation of an $NL$ machine can be viewed as a search for an accepting path in its configuration graph. Thus, any $NL$ problem can be reduced to $\text{GAP}$.

**Important Point:** **$\text{GAP}$** (Graph Accessibility Problem) is the canonical $NL$-complete problem. The fact that it's in $NL$ and that all $NL$ problems reduce to it makes it fundamental.

#### 3.3. $L$ vs. $NL$ and the Significance of $\text{GAP}$

*   **$\text{GAP}$ in $L$:** A significant result by Immerman and Szelepcsényi showed that $NL = coNL$. Moreover, **$\text{GAP}$ can be solved in $L$**. This means that the $NL$-complete problem $\text{GAP}$ is actually in $L$. This implies that $L = NL$.
    *   **Immerman-Szelepcsényi Theorem:** For Turing machines with a read-only input tape, $NL = coNL$. This means that if a problem is verifiable with $O(\log n)$ space non-deterministically, then its complement is also verifiable with $O(\log n)$ space non-deterministically.
    *   **$\text{GAP}$ in $L$:** The proof involves a clever iterative deepening DFS-like approach or by considering the "reverse" graph and searching for paths from $t$ to $s$ in the reversed graph. This allows for a deterministic log-space algorithm.

*   **Implication:** If $L = NL$, then $L$-complete problems are also $NL$-complete. This collapse is a major difference between time complexity (where $P \neq NP$ is widely believed) and space complexity.

---

### 4. Complete Problems for Higher Levels of the PH (Space Complexity Perspective)

While the standard definitions of PH levels ($ \Sigma_k^P, \Delta_k^P $) are time-based, we can consider the complexity of problems with quantifier alternations using space-bounded machines. The crucial aspect remains **log-space reducibility**.

Let's consider the complexity classes defined by quantifier alternations with polynomial space bounds, and their complete problems.

*   **$\text{PSPACE}$ (Polynomial Space):**
    *   **Definition:** Problems solvable by a deterministic Turing machine in polynomial space.
    *   **Complete Problem:** **$\text{QBF}$ (General Quantified Boolean Formulas)**
        *   **Definition:** Given a quantified Boolean formula $\exists x_1 \forall x_2 \exists x_3 \dots Q_k x_k \phi(x_1, \dots, x_k)$, where $\phi$ is a polynomial-size Boolean formula, is the formula true?
        *   **Proof Sketch:**
            *   **Membership in $\text{PSPACE}$:** A deterministic Turing machine can evaluate such a formula by recursively evaluating subformulas. The depth of the recursion is bounded by the number of quantifiers, and at each level, we store the current assignment of variables. The total space required is polynomial in the formula size.
            *   **$l$-Reduction from any $\text{PSPACE}$ problem:** Any problem solvable in polynomial space can be encoded as a QBF. The configurations of a polynomial-space Turing machine can be represented as vertices in a game graph, and the satisfiability of the game corresponds to the QBF.

*   **$\Sigma_k^P$ and $\text{co}\Sigma_k^P$ (Space Complexity Perspective):**
    *   We can define classes like $\Sigma_k^{\text{SPACE}}(S(n))$ and $\Delta_k^{\text{SPACE}}(S(n))$ which are solvable by k-alternating Turing machines using space $S(n)$. For $S(n) = \log n$, this relates to the standard PH.

    *   **$\Sigma_k^P$ Complete Problems (Space-based):**
        These problems typically involve checking the satisfiability of formulas with $k$ alternations of quantifiers, where the quantifiers bind variables that are polynomially bounded.

        *   **$\text{GQBF}_k$:** Given a quantified Boolean formula with $k$ blocks of alternating quantifiers starting with $\exists$, and a polynomial-size quantifier-free formula $\phi$, is the formula true?
            *   Example: $\exists x_1 \forall x_2 \exists x_3 \dots Q_k x_k \phi$
            *   These problems are complete for $\Sigma_k^P$ in terms of **polynomial time**. For **space complexity**, their completeness is tied to specific classes like $LOGSPACE(\text{POLY})$ or related concepts if we strictly adhere to $O(\log n)$ space machines for definition.

    *   **$\Delta_k^P$ Complete Problems (Space-based):**
        These involve polynomial time computations with an oracle for $\Sigma_{k-1}^P$ or $\text{co}\Sigma_{k-1}^P$ problems. For space, this would translate to machines that can perform a limited number of oracle calls with logarithmic space.

    *   **Focus on Reducibility:** The key challenge in defining complete problems for PH levels in space complexity is that adding a polynomial-time oracle to a logarithmic-space machine doesn't neatly fit into the standard PH definition, which relies on time bounds. However, if we consider the complexity of evaluating formulas with specific quantifier depths using log-space machines, we get insights.

**Let's connect these to common examples used in complexity theory:**

*   **$\text{SAT}$ (Boolean Satisfiability):** This is the canonical **NP-complete** problem. In terms of space complexity, $\text{SAT}$ is in $\text{NPSPACE}$. Since $\text{NP} \subseteq \text{PSPACE}$, $\text{SAT}$ is also in $\text{PSPACE}$. The $L$-reduction from any $NP$ problem to $\text{SAT}$ is standard.

*   **$\text{coSAT}$:** This is the complement of $\text{SAT}$, and it is **coNP-complete**.

*   **$\text{TQBF}$ (True Quantified Boolean Formulas):** This is the canonical **PSPACE-complete** problem. As shown above, it can be solved in polynomial space and any polynomial-space problem reduces to it via log-space reductions.

**How do these relate to PH levels in space?**

While directly defining complete problems for $\Sigma_k^P$ and $\Delta_k^P$ *purely* in terms of $O(\log n)$ space can be subtle due to the nature of oracle calls and quantifier alternation, we can consider the evaluation of quantified formulas with specific depths and quantifier types.

*   **Problems equivalent to $\Sigma_k^P$ in time:** These typically involve checking formulas of the form $\exists x_1 \forall x_2 \dots Q_k x_k \phi$. If we can evaluate these with limited memory, they belong to lower space classes.

*   **The core idea:** The structure of the PH corresponds to the depth of nested alternating quantifiers. For space complexity, the critical question is how many levels of quantifiers we can effectively "unroll" or evaluate using only $O(\log n)$ auxiliary space.

**Consider the following hierarchy based on quantifier depth and space:**

*   **$L$:** Corresponds to simple predicate evaluation or graph reachability.
*   **$NL$:** Corresponds to graph reachability, which can be solved in $L$.
*   **$\text{PSPACE}$:** Corresponds to the evaluation of general QBFs.

**What about intermediate levels like $\Sigma_2^P$ and $\Delta_2^P$?**

*   A common approach to understand these levels in space is to consider the complexity of evaluating formulas with a fixed number of quantifier alternations.

*   **$\Sigma_2^P$ related problems:** Formulas of the form $\exists x \forall y \phi(x, y)$, where $\phi$ is polynomial. Evaluating this requires checking for each assignment to $x$, whether for *all* assignments to $y$, $\phi$ holds. This nested structure can be evaluated in $O(\log n)$ space if done carefully. For example, **$\text{SAT}$ restricted to formulas of the form $\exists \vec{x} \forall \vec{y} \phi(\vec{x}, \vec{y})$** might be related to $\Sigma_2^P$ in time, and its space complexity would be lower.

*   **The Challenge:** The standard PH complete problems are defined with polynomial time complexity in mind. Translating them directly to log-space completeness for PH levels is not straightforward. However, problems whose *definition* mirrors the quantifier alternations of PH levels, and which can be evaluated with logarithmic space, are key.

**Revisiting $\text{GAP}$ and the $L=NL$ implication:**

Since $\text{GAP}$ is $NL$-complete and is also in $L$, it means $L=NL$. This collapse simplifies the first few levels of the space complexity hierarchy compared to the time complexity hierarchy.

**Beyond $NL$ in Space:**

*   **$\text{PSPACE}$:** We know $\text{PSPACE}$ is the class of problems solvable in polynomial space. **$\text{TQBF}$** is the complete problem.
*   **Relationship to PH:** It is known that $PH \subseteq PSPACE$.
*   **$\Delta_2^P$ complete problems in space:** These are often related to problems solvable in polynomial time with an NP oracle. Evaluating formulas like $\forall x \exists y \phi$ with certain constraints on $\phi$ can be candidates.

**A Common Viewpoint:**

When discussing complete problems for PH levels *in the context of space complexity*, the focus often shifts to understanding the complexity of evaluating formulas with specific quantifier structures using log-space machines.

*   **$L$-complete:** $\text{GAP}$ (even though it's $NL$-complete, and $L=NL$).
*   **$NL$-complete:** $\text{GAP}$.
*   **$PSPACE$-complete:** $\text{TQBF}$.

The complexity of intermediate levels like $\Sigma_2^P, \Delta_2^P$, etc., in terms of space is less commonly associated with a single, universally cited "complete problem" in the same way as $\text{SAT}$ for $NP$ or $\text{TQBF}$ for $PSPACE$. This is partly because the standard PH definitions are time-based, and the direct translation to space hierarchy completeness is complex. However, research explores classes like **$\text{LOGSPACE}(\text{POLY})$** and related quantifier hierarchies.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain why the **Graph Accessibility Problem ($\text{GAP}$)** is considered $NL$-complete. Briefly outline the proof steps for both membership in $NL$ and the reduction from any $NL$ problem to $\text{GAP}$.

**Question 2:**
What is the significance of the Immerman-Szelepcsényi theorem for the relationship between $L$ and $NL$? How does this affect the concept of complete problems for these classes?

**Question 3:**
What is the canonical complete problem for $\text{PSPACE}$? Briefly describe its definition and why it is $\text{PSPACE}$-complete.

**Question 4:**
Consider a problem $P$ that is defined as follows: "Given a Boolean formula $\phi$ with variables $x_1, \dots, x_n$, is $\exists x_1 \forall x_2 \phi$ true?"
(a) What time complexity class is this problem complete for in the standard PH definition?
(b) What can you say about its space complexity and potential complete problem status in space, keeping in mind the quantifier alternation and evaluation needs?

**Question 5:**
True or False: If a problem is $L$-complete, it is also $NL$-complete. Justify your answer.

---

### 6. Answers to Practice Questions

**Answer 1:**
*   **Membership in $NL$:** $\text{GAP}$ is in $NL$ because a non-deterministic Turing machine can guess a path from the source $s$ to the target $t$. At each step, it non-deterministically chooses the next vertex to visit along an edge. The machine accepts if it reaches $t$. This process requires storing the current vertex and the next vertex to guess, which can be done with $O(\log |V|)$ space.
*   **$l$-Reduction from any $NL$ problem:** Any problem in $NL$ can be formulated as finding an accepting path in the configuration graph of a non-deterministic Turing machine. The configuration graph has vertices representing the states of the machine. An edge exists if the machine can transition from one configuration to another. For any $NL$ problem, we can construct its configuration graph and a corresponding $s$ and $t$. Then, solving the $NL$ problem is equivalent to solving $\text{GAP}$ on this configuration graph. This construction can be performed using a log-space reduction.

**Answer 2:**
The Immerman-Szelepcsényi theorem states that $NL = coNL$. This means that problems verifiable in nondeterministic logarithmic space are also verifiable in deterministic logarithmic space (as $NL$ can be simulated in $L$). This has a significant implication: since $\text{GAP}$ is $NL$-complete and can be solved in $L$, it implies that $L=NL$. If $L=NL$, then the complete problems for $L$ and $NL$ are essentially the same problem ($\text{GAP}$).

**Answer 3:**
The canonical complete problem for $\text{PSPACE}$ is **True Quantified Boolean Formulas ($\text{TQBF}$)**.
*   **Definition:** Given a quantified Boolean formula of the form $\exists x_1 \forall x_2 \exists x_3 \dots Q_k x_k \phi(x_1, \dots, x_k)$, where $\phi$ is a quantifier-free Boolean formula with variables $x_1, \dots, x_k$, is the formula true?
*   **$\text{PSPACE}$-completeness:**
    *   **Membership in $\text{PSPACE}$:** $\text{TQBF}$ is in $\text{PSPACE}$ because a deterministic Turing machine can evaluate the truth of such a formula by recursively evaluating its subformulas. The recursion depth is bounded by the number of quantifiers, and the space required to store the current partial assignment and the formula structure is polynomial in the input size.
    *   **$l$-Reduction from any $\text{PSPACE}$ problem:** Any problem solvable in polynomial space can be encoded as a $\text{TQBF}$ instance. This encoding involves representing the configurations of a polynomial-space Turing machine as variables in a quantified Boolean formula. The satisfiability of the formula corresponds to the solvability of the original problem.

**Answer 4:**
(a) This problem, $\exists x_1 \forall x_2 \phi$, is an instance of a quantified Boolean formula with two alternating quantifiers, starting with $\exists$. In the context of the **Polynomial Hierarchy**, this problem is **$\Sigma_2^P$-complete** (in terms of time complexity).

(b) For space complexity:
*   This problem involves checking for the existence of an assignment for $x_1$ such that for all assignments to $x_2$, $\phi$ holds.
*   A deterministic algorithm can iterate through all possible assignments for $x_1$. For each assignment to $x_1$, it needs to verify if for all assignments to $x_2$, $\phi$ is true. This inner verification ($\forall x_2 \phi$) can be done with $O(\log n)$ space by recursively evaluating $\phi$ for all assignments to $x_2$.
*   The outer loop iterates through $x_1$. The total space required would be related to storing the current assignment for $x_1$ and the state of the inner verification, likely within polynomial space. Specifically, such problems can often be evaluated in **polynomial space**.
*   Identifying a single "complete problem" for intermediate $\Sigma_k^P$ or $\Delta_k^P$ levels in space complexity is less straightforward than for $L, NL, PSPACE$. However, problems with this specific quantifier structure are representative of the complexity at this level.

**Answer 5:**
**True**. Since $L \subseteq NL$, if a problem is $L$-complete, it means it's one of the hardest problems in $L$. As $L=NL$ (due to the Immerman-Szelepcsényi theorem and the fact that $\text{GAP}$ is in $L$), all problems in $NL$ can be reduced to $L$-complete problems. Therefore, $L$-complete problems are also $NL$-complete.

---

### 7. Important Points to Remember

*   **Log-space reductions ($l$-reductions)** are crucial for defining completeness in space complexity classes.
*   **$\text{GAP}$ (Graph Accessibility Problem)** is the canonical $NL$-complete problem.
*   The **Immerman-Szelepcsényi theorem** proves $NL = coNL$ and leads to the collapse $L = NL$. This is a major difference from time complexity.
*   **$\text{TQBF}$ (True Quantified Boolean Formulas)** is the canonical $\text{PSPACE}$-complete problem.
*   While the Polynomial Hierarchy ($\text{PH}$) is typically defined using time complexity, the structure of quantifier alternations is central. Problems involving evaluation of formulas with specific quantifier depths can be related to levels of the PH in space.
*   The completeness of problems for higher levels of the PH ($\Sigma_k^P, \Delta_k^P$) in space complexity is a more complex topic and often involves specialized problems whose definitions mirror the quantifier structures of these classes.
