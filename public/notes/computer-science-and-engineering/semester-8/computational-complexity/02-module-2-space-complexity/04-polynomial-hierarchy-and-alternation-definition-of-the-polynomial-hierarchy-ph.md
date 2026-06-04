---
title: "Polynomial Hierarchy and Alternation - Definition of the polynomial hierarchy (PH)"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca16"
status: "completed"
scrapedAt: "2026-05-20T17:23:55.701Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: Polynomial Hierarchy (PH) and Alternation

### Definition of the Polynomial Hierarchy (PH)

This section delves into the fundamental definition of the Polynomial Hierarchy, a crucial concept in understanding the relative difficulty of computational problems beyond NP.

---

### Learning Outcomes Covered:

*   **Define the Polynomial Hierarchy (PH):** Understand the formal definition and structure of PH.
*   **Explain the role of alternation:** Grasp how alternation contributes to the power of complexity classes within PH.
*   **Characterize PH classes (e.g., $\Sigma_i^P$, $\Pi_i^P$, $\Delta_i^P$):** Understand the specific types of problems solved by these classes.
*   **Understand the relationship between PH classes:** Recognize the inclusions and potential equalities within the hierarchy.
*   **Appreciate the significance of PH:** Understand why PH is important for classifying problems and understanding the limits of efficient computation.

---

### Key Concepts and Definitions:

#### 1. The Need for a Hierarchy Beyond NP

*   **NP (Nondeterministic Polynomial Time):** The class of decision problems for which a "yes" instance can be verified in polynomial time by a deterministic Turing machine (given a certificate/witness). Problems like SAT are in NP.
*   **NP-completeness:** Problems that are "hardest" in NP. If any NP-complete problem can be solved in polynomial time, then P = NP.
*   **The Limitation of NP:** While NP captures a significant class of problems, many problems seem "harder" than NP-complete problems but not necessarily intractable. The Polynomial Hierarchy aims to capture these intermediate levels of complexity.

#### 2. Quantifiers and Alternation

The Polynomial Hierarchy is built upon the idea of **alternating quantifiers** over a polynomial number of variables.

*   **Existential Quantifier ($\exists$):** "There exists..."
*   **Universal Quantifier ($\forall$):** "For all..."

**Alternation** refers to the pattern of these quantifiers.

#### 3. Defining the Levels of the Polynomial Hierarchy ($\Sigma_i^P$, $\Pi_i^P$, $\Delta_i^P$)

The Polynomial Hierarchy is a tower of complexity classes, indexed by a non-negative integer $i$. Each level represents a class of problems defined by a specific pattern of existential and universal quantifiers, where the verification can be done in polynomial time.

**Core Idea:** A problem is in a class at level $i$ if it can be solved by a polynomial-time Turing machine that makes at most $i$ "calls" to an NP oracle, or equivalently, by a nondeterministic Turing machine with a specific alternation pattern of existential and universal quantifiers.

**Formal Definitions (using Oracle Machines):**

*   **$\Delta_0^P = \Sigma_0^P = \Pi_0^P = P$**: The class of problems solvable in polynomial time by a deterministic Turing machine. This is the base of the hierarchy.

*   **$\Sigma_i^P$ (Sigma-i-P):** A decision problem $L$ is in $\Sigma_i^P$ if there exists a polynomial $p(n)$ and a polynomial-time predicate $R(x, y_1, \dots, y_k)$ such that:
    $x \in L \iff \exists y_1 \forall y_2 \exists y_3 \dots Q y_k R(x, y_1, \dots, y_k)$
    where $Q$ is $\exists$ if $k$ is odd and $\forall$ if $k$ is even, and $|y_j| \le p(n)$ for all $j$.

    *   **Intuition:** The problem can be solved by first guessing a "yes" witness (existential), then a "no" witness that must be refuted (universal), then a "yes" witness, and so on, for $i$ levels of alternation.

*   **$\Pi_i^P$ (Pi-i-P):** A decision problem $L$ is in $\Pi_i^P$ if there exists a polynomial $p(n)$ and a polynomial-time predicate $R(x, y_1, \dots, y_k)$ such that:
    $x \in L \iff \forall y_1 \exists y_2 \forall y_3 \dots Q y_k R(x, y_1, \dots, y_k)$
    where $Q$ is $\forall$ if $k$ is odd and $\exists$ if $k$ is even, and $|y_j| \le p(n)$ for all $j$.

    *   **Intuition:** The problem can be solved by first guessing a "no" witness that must be refuted (universal), then a "yes" witness that must be satisfied (existential), and so on, for $i$ levels of alternation.

*   **$\Delta_i^P$ (Delta-i-P):** A decision problem $L$ is in $\Delta_i^P$ if there exists a polynomial $p(n)$ and a polynomial-time predicate $R(x, y_1, \dots, y_k)$ such that:
    $x \in L \iff \exists y_1 \forall y_2 \exists y_3 \dots \forall y_k R(x, y_1, \dots, y_k)$ (for some $k \le i$)
    **OR**
    $x \in L \iff \forall y_1 \exists y_2 \forall y_3 \dots \exists y_k R(x, y_1, \dots, y_k)$ (for some $k \le i$)

    More commonly, $\Delta_i^P$ is defined as the class of problems solvable in polynomial time using an oracle for $\Sigma_{i-1}^P$ (or $\Pi_{i-1}^P$).
    $\Delta_i^P = P^{ \Sigma_{i-1}^P } = P^{ \Pi_{i-1}^P }$
    This means a $\Delta_i^P$ machine can solve a problem by making a polynomial number of calls to an NP oracle, or to an oracle for any problem in $\Sigma_{i-1}^P$ or $\Pi_{i-1}^P$.

**Alternative Definition using Oracle Machines:**

This is a more common and often clearer way to define the hierarchy.

*   **$P^A$**: The class of decision problems solvable in polynomial time by a deterministic Turing machine that has access to an oracle for language $A$. The oracle can answer membership questions for $A$ in one time step.

*   **$\Delta_i^P = P^{NP^{i-1}}$**: Problems solvable in polynomial time with $i-1$ calls to an NP oracle. This implies using an NP oracle, then an NP oracle on its output, and so on, $i-1$ times.

*   **$\Sigma_i^P = NP^{NP^{i-1}}$**: Problems solvable by a *nondeterministic* polynomial-time Turing machine with access to an NP oracle $i-1$ times.

*   **$\Pi_i^P = coNP^{NP^{i-1}}$**: Problems solvable by a *co-nondeterministic* polynomial-time Turing machine with access to an NP oracle $i-1$ times. Equivalently, problems in $\Sigma_i^P$ whose complements are also in $\Sigma_i^P$.

**Let's refine the oracle definition to align with the alternating quantifiers more directly:**

*   $\Delta_0^P = \Sigma_0^P = \Pi_0^P = P$

*   $\Sigma_1^P = NP$ (Existential quantifier: $\exists$ polynomial witness)
    *   $x \in L \iff \exists y R(x, y)$ where $R$ is poly-time computable.
    *   $L \in NP$ can be solved with one call to an NP oracle, so $\Sigma_1^P = P^{NP^0} = P^{P} = P$. This is not quite right.
    *   **Correct Oracle Definition:**
        *   $\Delta_0^P = P$
        *   $\Sigma_1^P = NP$ (A nondeterministic machine makes one guess for $\exists$)
        *   $\Pi_1^P = coNP$ (A machine that verifies a $\forall$ quantifier can be thought of as a co-nondeterministic machine).
        *   $\Delta_2^P = P^{NP}$ (Polynomial-time computation with an NP oracle)
        *   $\Sigma_2^P = NP^{NP}$ (Nondeterministic computation with an NP oracle)
        *   $\Pi_2^P = coNP^{NP}$ (Co-nondeterministic computation with an NP oracle)

    Let's use the most common definition based on alternations:

    *   **$\Delta_0^P = \Sigma_0^P = \Pi_0^P = P$**

    *   **For $i \ge 0$:**
        *   **$\Sigma_{i+1}^P = \text{NP}^{\Sigma_i^P}$** (Problems solvable in nondeterministic polynomial time with an oracle for $\Sigma_i^P$)
        *   **$\Pi_{i+1}^P = \text{coNP}^{\Sigma_i^P}$** (Problems whose complements are solvable in nondeterministic polynomial time with an oracle for $\Sigma_i^P$)
        *   **$\Delta_{i+1}^P = P^{\Sigma_i^P}$** (Problems solvable in polynomial time with an oracle for $\Sigma_i^P$)

    **This definition implies the alternating quantifiers:**

    *   $L \in \Sigma_i^P \iff \exists y_1 \forall y_2 \exists y_3 \dots Q_i y_i R(x, y_1, \dots, y_i)$
        where $|y_j| \le p(n)$, $R$ is polynomial-time computable, and $Q_i = \exists$ if $i$ is odd, $Q_i = \forall$ if $i$ is even.

    *   $L \in \Pi_i^P \iff \forall y_1 \exists y_2 \forall y_3 \dots Q'_i y_i R(x, y_1, \dots, y_i)$
        where $|y_j| \le p(n)$, $R$ is polynomial-time computable, and $Q'_i = \forall$ if $i$ is odd, $Q'_i = \exists$ if $i$ is even.

    *   $L \in \Delta_i^P \iff L \in \Sigma_i^P \text{ or } L \in \Pi_i^P$ (this is a simplification; the oracle definition is more accurate). The oracle definition $P^{\Sigma_{i-1}^P}$ means a deterministic machine making polynomial calls to a $\Sigma_{i-1}^P$ oracle.

#### 4. The Structure of the Polynomial Hierarchy

*   **Inclusions:** For all $i \ge 0$:
    $\Delta_i^P \subseteq \Sigma_i^P \subseteq \Delta_{i+1}^P$
    $\Delta_i^P \subseteq \Pi_i^P \subseteq \Delta_{i+1}^P$

    *   **Proof Sketch:**
        *   $\Sigma_i^P \subseteq \Delta_{i+1}^P$: A nondeterministic machine with a $\Sigma_i^P$ oracle can be simulated by a deterministic machine making one call to the $\Sigma_i^P$ oracle.
        *   $\Delta_i^P \subseteq \Sigma_i^P$: A deterministic polynomial-time computation can be seen as a trivial nondeterministic computation (or a computation with no quantifiers).
        *   $\Sigma_i^P \subseteq \Pi_{i+1}^P$: This follows from the fact that $NP^A \subseteq coNP^A$ is not necessarily true, but $NP^A \subseteq \text{coNP}^{NP^A}$. The key is that if a problem is $\Sigma_i^P$, its complement is $\Pi_i^P$. And $\Sigma_i^P \subseteq \Delta_{i+1}^P$. Since $\Pi_{i+1}^P = coNP^{\Sigma_i^P}$, and $\Sigma_i^P$ can contain hard problems, we need to be careful with this inclusion. The standard inclusion is $\Sigma_i^P \subseteq \Delta_{i+1}^P$ and $\Pi_i^P \subseteq \Delta_{i+1}^P$.
        *   **Correct Inclusions:**
            *   $\Delta_i^P \subseteq \Sigma_i^P$
            *   $\Delta_i^P \subseteq \Pi_i^P$
            *   $\Sigma_i^P \subseteq \Delta_{i+1}^P$
            *   $\Pi_i^P \subseteq \Delta_{i+1}^P$

*   **The Collapse of the Hierarchy:**
    *   The Polynomial Hierarchy **collapses** if $\Sigma_k^P = \Sigma_{k+1}^P$ for some $k$.
    *   If the hierarchy collapses at any level $k$, it collapses at all higher levels, meaning $\Sigma_k^P = \Sigma_{k+1}^P = \Sigma_{k+2}^P = \dots = PH$.
    *   **Crucially, if $PH$ collapses, then $P = NP$.** This is because $\Sigma_2^P = NP^{NP}$. If $\Sigma_2^P = NP$, then $P^{NP} = NP$. And if $P^{NP} = NP$, then $NP$ problems with polynomial-time oracle calls are still in $NP$.
    *   Specifically, if $\Sigma_k^P = \Sigma_{k+1}^P$ for any $k \ge 1$, then $\Sigma_k^P = \Pi_k^P = \Delta_k^P$, and $PH$ collapses to $\Delta_k^P$. If $P=NP$, then $\Sigma_1^P = \Sigma_2^P = \dots = PH$.

#### 5. Examples of PH Classes

*   **$\Delta_0^P = P$**: Satisfiability of Boolean formulas with no quantifiers (e.g., propositional calculus).

*   **$\Sigma_1^P = NP$**:
    *   **Satisfiability (SAT):** Given a propositional formula, is there an assignment of truth values to its variables that makes the formula true?
        $x \in SAT \iff \exists a_1, \dots, a_n \in \{0, 1\} \text{ such that } F(a_1, \dots, a_n) \text{ is true.}$
        This is $\exists y R(x, y)$, where $R$ is checking the formula with a given assignment.

*   **$\Pi_1^P = coNP$**:
    *   **Tautology:** Given a propositional formula, is it true for all assignments of truth values to its variables?
        $x \in TAUT \iff \forall a_1, \dots, a_n \in \{0, 1\} \text{ such that } F(a_1, \dots, a_n) \text{ is true.}$
        This is $\forall y R(x, y)$, where $R$ is checking the formula with a given assignment.

*   **$\Sigma_2^P$**: Problems solvable with one NP oracle call.
    *   **Example: Quantified Boolean Formulas (QBF) with 2 quantifiers:**
        *   $\exists x_1 \forall x_2 \text{ SAT}(x_1, x_2)$: Given a Boolean formula with variables $x_1, \dots, x_n, y_1, \dots, y_m$. Is there an assignment to $x_1$ such that for *every* assignment to $y_2$, the formula is satisfiable with $x_1$ fixed and $y_2$ assigned?
        *   This can be rephrased: $\exists x_1 \text{ SAT}(x_1, \text{SAT}_2)$, where $\text{SAT}_2$ is a problem that takes an assignment to $y_2$ and checks if the original formula is satisfiable for that $y_2$. The inner SAT is an NP oracle call.

*   **$\Pi_2^P$**: Problems solvable with one coNP oracle call.
    *   **Example: Quantified Boolean Formulas (QBF) with 2 quantifiers:**
        *   $\forall x_1 \exists x_2 \text{ SAT}(x_1, x_2)$: Given a Boolean formula. Is it true that for *every* assignment to $x_1$, there exists an assignment to $x_2$ such that the formula is satisfiable?

*   **$\Delta_2^P$**: Problems solvable in polynomial time with an NP oracle.
    *   Many problems that are NP-hard but not necessarily NP-complete can be found here if they are not reducible to $\Sigma_1^P$ or $\Pi_1^P$.

#### 6. Significance of the Polynomial Hierarchy

*   **Refining Complexity:** PH provides a more granular classification of problems than just P, NP, and coNP. It helps us understand problems that are "harder than NP-complete" but not necessarily PSPACE-complete.
*   **Understanding the Limits of Efficient Algorithms:** If PH collapses to a low level (e.g., $\Sigma_k^P = P$), it would imply significant breakthroughs in solving NP-hard problems. The lack of known collapses suggests that problems at higher levels of PH are genuinely harder to solve.
*   **Relationship to Other Complexity Classes:** PH is related to other important classes like PSPACE (Polynomial Space). It is known that $PH \subseteq PSPACE$. If $PH = PSPACE$, it would have profound implications.
*   **Foundation for Further Study:** PH is a stepping stone to understanding more complex hierarchies and concepts in complexity theory.

---

### Practice Questions/Exercises:

1.  **Definition Recall:** State the definition of $\Sigma_2^P$ using alternating quantifiers and using oracle machines.
2.  **Inclusion Proof:** Explain why $\Sigma_1^P \subseteq \Delta_2^P$.
3.  **Problem Classification:**
    Consider the following problem:
    **3-Colorability (restated):** Given a graph $G=(V,E)$, is it possible to color the vertices of $G$ with at most 3 colors such that no two adjacent vertices have the same color? (This is NP-complete).
    Now consider this variation:
    **Quantified 3-Colorability:** Given a graph $G=(V,E)$ and a set of variables $V_1, V_2$ representing assignments for vertices in $V$, is there an assignment of colors to vertices in $V_1$ such that for every assignment of colors to vertices in $V_2$, the graph $G$ is 3-colorable?
    Which level of the Polynomial Hierarchy do you think "Quantified 3-Colorability" belongs to? Justify your answer.
4.  **Collapse Implication:** If $P=NP$, what can you say about the structure of the Polynomial Hierarchy?
5.  **Example Identification:**
    *   Is the problem "Given a SAT formula $\phi$, is there a satisfying assignment where the first $k$ variables are set to true?" likely in $\Sigma_1^P$ or $\Pi_1^P$?
    *   Is the problem "Given a SAT formula $\phi$, for all assignments of the first $k$ variables, is the formula satisfiable?" likely in $\Sigma_1^P$ or $\Pi_1^P$?

---

### Answers to Practice Questions:

1.  **Definition Recall:**
    *   **Using Alternating Quantifiers:** A decision problem $L$ is in $\Sigma_2^P$ if there exists a polynomial $p(n)$ and a polynomial-time predicate $R(x, y_1, y_2)$ such that $x \in L \iff \exists y_1 \forall y_2 R(x, y_1, y_2)$, where $|y_1| \le p(n)$ and $|y_2| \le p(n)$.
    *   **Using Oracle Machines:** $L \in \Sigma_2^P$ if $L \in NP^{NP}$. This means there is a nondeterministic Turing machine that runs in polynomial time and has access to an oracle for some language in NP. Alternatively, $L \in \Delta_2^P = P^{NP}$ means there is a deterministic Turing machine that runs in polynomial time and has access to an oracle for some language in NP. $\Sigma_2^P = NP^{NP}$.

2.  **Inclusion Proof ($\Sigma_1^P \subseteq \Delta_2^P$):**
    $\Sigma_1^P = NP$.
    $\Delta_2^P = P^{NP}$.
    A problem in NP is solvable by a nondeterministic Turing machine in polynomial time. A problem in $P^{NP}$ is solvable by a deterministic Turing machine that can make calls to an NP oracle.
    To show $\Sigma_1^P \subseteq \Delta_2^P$, we need to show that if a problem $L$ is in $NP$, it can be solved by a deterministic machine with an NP oracle. This is trivial: the deterministic machine simply simulates the NP machine. It makes one nondeterministic guess (which the NP oracle can do) and then proceeds. More formally, a nondeterministic Turing machine $M$ solving $L$ can be simulated by a deterministic Turing machine $M'$ that makes one call to an NP oracle. The NP oracle effectively "makes the nondeterministic choice" for $M'$. So, if $L \in NP$, then $L \in P^{NP}$.

3.  **Problem Classification:**
    The "Quantified 3-Colorability" problem can be expressed as:
    Given a graph $G=(V,E)$, is there an assignment to vertices in $V_1$ such that for every assignment to vertices in $V_2$, the graph $G$ is 3-colorable?
    Let $n = |V|$. Assume $|V_1| = k_1$ and $|V_2| = k_2$.
    This is equivalent to:
    $\exists \text{ assignment } A_1 \text{ for } V_1 \text{ of size } k_1 \text{ such that } \forall \text{ assignment } A_2 \text{ for } V_2 \text{ of size } k_2, \text{ the graph } G \text{ is 3-colorable with assignments } A_1 \cup A_2 \text{ to } V.$
    Let $R(G, A_1, A_2)$ be a predicate that checks if graph $G$ is 3-colorable given the assignments $A_1$ and $A_2$. The 3-colorability check itself is in NP.
    The problem structure is $\exists y_1 \forall y_2 R'(G, y_1, y_2)$, where $y_1$ represents assignments for $V_1$ and $y_2$ represents assignments for $V_2$. The predicate $R'$ is effectively checking 3-colorability.
    The problem is of the form $\exists y_1 \forall y_2 \text{ SAT}_{3-COLOR}(G, y_1, y_2)$. This is a $\Sigma_2^P$-complete problem.
    Therefore, "Quantified 3-Colorability" belongs to $\Sigma_2^P$.

4.  **Collapse Implication:**
    If $P=NP$, then $\Sigma_1^P = NP$.
    We know that $\Sigma_i^P \subseteq \Delta_{i+1}^P$.
    Also, $\Sigma_1^P \subseteq \Sigma_2^P \subseteq \Delta_3^P \subseteq \dots$.
    If $P=NP$, then $\Sigma_1^P = P$. This is incorrect. If $P=NP$, then $\Sigma_1^P = NP = P$. This also doesn't fit.
    The correct implication: If $P=NP$, then $\Sigma_1^P = NP$.
    Since $\Sigma_k^P \subseteq \Delta_{k+1}^P$, and $\Delta_1^P=P$, $\Sigma_1^P=NP$.
    If $P=NP$, then $\Sigma_1^P = \Sigma_2^P = \Sigma_3^P = \dots$.
    Specifically, if $P=NP$, then $NP^{NP} = NP$. This implies $\Sigma_2^P = NP$.
    Since $\Sigma_i^P \subseteq \Sigma_{i+1}^P \subseteq \Delta_{i+2}^P$, if $\Sigma_1^P = \Sigma_2^P = NP$, then the hierarchy collapses. All levels become equal to $NP$.
    So, if $P=NP$, then $PH$ collapses to $NP$ (or $P$, since $P=NP$). All classes $\Sigma_i^P, \Pi_i^P, \Delta_i^P$ become equal to $P$.

5.  **Example Identification:**
    *   "Given a SAT formula $\phi$, is there a satisfying assignment where the first $k$ variables are set to true?"
        This is a question of existence for a satisfying assignment, with an additional constraint on some variables.
        $x \in L \iff \exists \text{ assignment } a \text{ for all vars, such that } \phi(a) \text{ is true AND } a \text{ satisfies constraint on first } k \text{ vars.}$
        This can be written as $\exists y R(x, y)$ where $y$ is an assignment for the remaining variables, and $R$ checks the formula and the constraint. This is in $NP = \Sigma_1^P$.

    *   "Given a SAT formula $\phi$, for all assignments of the first $k$ variables, is the formula satisfiable?"
        This is a question about "for all" assignments.
        $x \in L \iff \forall \text{ assignment } a' \text{ for first } k \text{ vars, } \exists \text{ assignment } a'' \text{ for remaining vars, such that } \phi(a' \text{ extended by } a'') \text{ is true.}$
        This has the structure $\forall y_1 \exists y_2 R(x, y_1, y_2)$. This is in $\Pi_2^P$.

---

### Important Points to Remember:

*   The Polynomial Hierarchy (PH) extends the notions of P, NP, and coNP by considering **alternating quantifiers**.
*   **Levels:** $\Delta_i^P$, $\Sigma_i^P$, and $\Pi_i^P$ define increasing levels of complexity based on the number of quantifier alternations or oracle calls.
*   **Oracle Definition:** A common and practical definition is $\Sigma_i^P = NP^{\Sigma_{i-1}^P}$ and $\Delta_i^P = P^{\Sigma_{i-1}^P}$.
*   **Inclusions:** $\Delta_i^P \subseteq \Sigma_i^P \subseteq \Delta_{i+1}^P$ and $\Delta_i^P \subseteq \Pi_i^P \subseteq \Delta_{i+1}^P$.
*   **Collapse:** If the hierarchy collapses at any level $k$ ($\Sigma_k^P = \Sigma_{k+1}^P$), it collapses everywhere, and it implies $P=NP$.
*   **Significance:** PH helps classify problems harder than NP-complete problems and provides insights into the limits of efficient computation.
*   **PSPACE:** It is known that $PH \subseteq PSPACE$. The question of whether $PH = PSPACE$ is open.

---
