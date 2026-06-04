---
title: "Relationship between PH and other classes."
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca18"
status: "completed"
scrapedAt: "2026-05-20T17:23:57.094Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: Relationship between PH and Other Classes

This module explores the fascinating landscape of complexity classes, focusing on how space complexity dictates the resources required to solve problems. Today, we delve into the intricate relationships between the Polynomial Hierarchy (PH) and other prominent complexity classes, particularly those related to space.

### Learning Outcomes:

Upon completing this topic, you will be able to:

1.  **Define the Polynomial Hierarchy (PH)** and its constituent levels.
2.  **Understand the concept of space-bounded computation** and its implications for complexity classes.
3.  **Analyze the relationships between PH and space complexity classes**, such as PSPACE, L, and NL.
4.  **Explain how alternating Turing machines (ATMs)** are used to define and understand space complexity classes, including their connection to PH.
5.  **Discuss the implications of collapse results** (e.g., $\Sigma_k^P = \Sigma_{k+1}^P$ or PSPACE = PH) for our understanding of computational difficulty.

---

### 1. Defining the Polynomial Hierarchy (PH)

The Polynomial Hierarchy (PH) is a generalization of the classes P and NP. It captures problems that can be solved by polynomial-time Turing machines with access to an oracle, where the oracle calls are nested in a hierarchical fashion.

*   **Key Concept: Oracles:** An oracle is a hypothetical device that can solve a specific problem in constant time. For complexity classes, an oracle represents the ability to solve problems in a *given* complexity class.

*   **Definition:**
    *   **$\Sigma_0^P = \Delta_0^P = \Pi_0^P = P$**: The class of problems solvable in polynomial time.
    *   **$\Sigma_k^P = NP^{\Sigma_{k-1}^P}$**: A problem is in $\Sigma_k^P$ if it can be solved by a polynomial-time non-deterministic Turing machine (NTM) with an oracle for $\Sigma_{k-1}^P$. This essentially means an NTM that can make polynomial calls to a $\Sigma_{k-1}^P$ oracle.
    *   **$\Pi_k^P = coNP^{\Sigma_{k-1}^P}$**: A problem is in $\Pi_k^P$ if its complement is in $\Sigma_k^P$. Equivalently, it can be solved by a polynomial-time NTM that makes polynomial calls to a $\Sigma_{k-1}^P$ oracle, but with existential quantifiers for `no` and universal quantifiers for `yes`. More formally, $\Pi_k^P = \text{co}\Sigma_k^P$.
    *   **$\Delta_k^P = P^{\Sigma_{k-1}^P}$**: A problem is in $\Delta_k^P$ if it can be solved by a polynomial-time deterministic Turing machine (DTM) with an oracle for $\Sigma_{k-1}^P$. This means a DTM that makes a polynomial number of calls to a $\Sigma_{k-1}^P$ oracle.

*   **The Hierarchy Structure:**
    *   The hierarchy is non-decreasing: $P = \Sigma_0^P \subseteq \Sigma_1^P \subseteq \Sigma_2^P \subseteq \dots$ and $P = \Delta_0^P \subseteq \Delta_1^P \subseteq \Delta_2^P \subseteq \dots$.
    *   It's also known that $\Sigma_k^P \subseteq \Delta_{k+1}^P$ and $\Pi_k^P \subseteq \Delta_{k+1}^P$.
    *   The most common relationship is $\Sigma_k^P \subseteq \Delta_{k+1}^P \subseteq \Sigma_{k+1}^P$.
    *   **NP = $\Sigma_1^P$**
    *   **coNP = $\Pi_1^P$**
    *   **$\Delta_2^P$** represents problems solvable in polynomial time using NP oracles.
    *   **$\Sigma_2^P$** represents problems solvable by an NTM with an NP oracle (i.e., $\exists$ polynomial, $\forall$ polynomial, $\exists$ polynomial).

*   **Example: Quantified Boolean Formulas (QBF)**
    *   A classic example of PH-complete problems.
    *   Consider a boolean formula $\phi$ with variables $x_1, \dots, x_n$.
    *   **$\text{QBF}_{\forall \exists}$**: A formula of the form $\forall x_1 \exists x_2 \forall x_3 \dots \exists x_n \phi(x_1, \dots, x_n)$, where $\phi$ is a DNF formula. This is $\Sigma_2^P$-complete.
    *   **$\text{QBF}_{\exists \forall}$**: A formula of the form $\exists x_1 \forall x_2 \exists x_3 \dots \forall x_n \phi(x_1, \dots, x_n)$, where $\phi$ is a CNF formula. This is $\Pi_2^P$-complete.

*   **Important Point:** If at any level $k$, $\Sigma_k^P = \Sigma_{k+1}^P$, then the entire hierarchy collapses to that level: $\text{PH} = \Sigma_k^P$.

---

### 2. Space-Bounded Computation

Space complexity measures the amount of memory (tape cells or stack depth) a Turing machine uses to solve a problem, as a function of the input size.

*   **Key Concept: Space Complexity Classes:**
    *   **L (Logarithmic Space):** Problems solvable by a DTM using $O(\log n)$ space. This means the machine can only access a read-only input tape, a write-only output tape, and a read-write work tape whose size is logarithmic in the input size.
    *   **NL (Non-deterministic Logarithmic Space):** Problems solvable by an NTM using $O(\log n)$ space.
    *   **$\text{coNL}$ (Complement of NL):** Problems whose complements are in NL.
    *   **PSPACE (Polynomial Space):** Problems solvable by a DTM using $O(n^k)$ space for some constant $k$. Typically, we consider $O(n)$ space for PSPACE-completeness proofs.

*   **Relationship between Time and Space:**
    *   If a problem is solvable in time $T(n)$, it's also solvable in space $T(n)$ (by storing the computation trace).
    *   If a problem is solvable in space $S(n)$, it's solvable in time $2^{O(S(n))}$. This is because the number of configurations of a machine using $S(n)$ space is $2^{O(S(n))}$.

*   **Implications of Space Bounds:**
    *   $L \subseteq P \subseteq PSPACE$.
    *   $NL \subseteq NP \subseteq PSPACE$.

---

### 3. Relationships between PH and Space Complexity Classes

The Polynomial Hierarchy is closely related to space complexity classes, particularly PSPACE.

*   **PSPACE and PH:**
    *   **Theorem:** $\text{PH} \subseteq \text{PSPACE}$.
        *   **Proof Intuition:** Any problem in $\Sigma_k^P$ can be solved by a polynomial-time machine with an oracle for $\Sigma_{k-1}^P$. This oracle call can be simulated by a non-deterministic polynomial-time machine that makes a polynomial number of guesses for the oracle's output. The entire computation, if unrolled, would involve nested quantifiers.
        *   A more formal proof uses the fact that a polynomial-time computation can be verified in polynomial space. By simulating the polynomial-time oracle calls within a polynomial space bound, we can show that any problem in PH is in PSPACE.
        *   The key is that a polynomial number of calls to a $\Sigma_k^P$ oracle can be simulated using $O(\log n)$ stack depth for the NTM simulating the oracle, plus the space for the underlying computation. The total space remains polynomial.

    *   **The Converse is Not Proven:** It is not known if PSPACE $\subseteq$ PH. This is a major open question in complexity theory.
        *   If PSPACE $\subseteq$ PH, then $\text{PH}$ would collapse to a finite level (e.g., $\text{PH} = \Delta_k^P$ for some $k$). This is highly unlikely.

*   **$\text{L}$ and $\text{NL}$ in relation to PH:**
    *   **Theorem:** $\text{L} \subseteq \text{NL} \subseteq \text{P} \subseteq \text{NP} \subseteq \text{PH}$.
    *   **Relationship to Levels of PH:**
        *   **$\text{L}$ and $\text{NL}$:** These classes represent very limited computational resources. They are generally considered to be "below" NP.
        *   **$\text{NL} \subseteq \text{P}$**: This is a known result, proven by Immerman and Szelepcsényi.
        *   **$\text{NL} \subseteq \text{PH}$**: Since $NL \subseteq P$ and $P \subseteq PH$, this inclusion holds.
        *   **$\text{L} \subseteq \text{PH}$**: Similarly, since $L \subseteq P$ and $P \subseteq PH$, this inclusion also holds.

*   **Focus on Space Bounds and Quantifiers:**
    *   The levels of PH can be thought of in terms of quantified propositional logic.
    *   $\Sigma_k^P$ corresponds to formulas with $k$ blocks of alternating quantifiers, starting with $\exists$, followed by polynomial-time decidability.
    *   Consider the relationship between space-bounded computation and alternations. Alternating Turing Machines (ATMs) provide a powerful model for understanding complexity classes related to space.

---

### 4. Alternating Turing Machines (ATMs) and their Connection to Space Complexity Classes

Alternating Turing Machines (ATMs) generalize non-deterministic Turing machines by introducing *universal* states in addition to existential states. This ability to branch universally and existentially is crucial for understanding the structure of complexity classes, especially those related to space.

*   **Definition of ATM:**
    *   An ATM has states categorized as **existential (exists, $\exists$)** and **universal (for all, $\forall$)**.
    *   An ATM accepts an input string if:
        *   If in an existential state, it accepts if *at least one* of its possible next configurations leads to acceptance.
        *   If in a universal state, it accepts if *all* of its possible next configurations lead to acceptance.
    *   The computation is a tree. Acceptance depends on the outcome of this tree.

*   **Space Complexity Classes Defined by ATMs:**
    *   **L = DSPACE(log n)**: Deterministic Turing Machines using $O(\log n)$ space.
    *   **NL = NSPACE(log n)**: Non-deterministic Turing Machines using $O(\log n)$ space.
    *   **AL = ATSPACE(log n)**: Alternating Turing Machines using $O(\log n)$ space.

*   **Key Theorem:** $\text{AL} = \text{P}$.
    *   **Intuition:** An ATM with a logarithmic space bound can explore its computation tree efficiently. For existential states, it guesses a path. For universal states, it needs to verify that all paths lead to acceptance. With logarithmic space, this verification can be done deterministically.
    *   **Implication:** This shows that the power of alternation is equivalent to polynomial time *when the space bound is logarithmic*.

*   **Relationship between ATM Space and PH:**
    *   The hierarchy of space-bounded ATMs directly corresponds to the Polynomial Hierarchy.
    *   Let $\text{APSPACE}(f(n))$ be the class of problems decidable by an ATM in space $f(n)$.
    *   **Theorem:** $\text{APSPACE}(f(n)) = \text{DSPACE}(f(n))$ for certain $f(n)$ (specifically, when $f(n) \ge \log n$). This means alternating computation with $f(n)$ space is no more powerful than deterministic computation with $f(n)$ space. This highlights the power of alternation but also its limitations when the space bound is not exponentially larger than time.

    *   **Crucial Connection to PH:** The levels of the Polynomial Hierarchy can be characterized by the number of alternations in a space-bounded ATM computation.
        *   **$\Sigma_k^P$**: Equivalent to problems solvable by an ATM in polynomial time that makes at most $k$ alternations of existential and universal states, starting with an existential state.
        *   **$\Pi_k^P$**: Equivalent to problems solvable by an ATM in polynomial time that makes at most $k$ alternations, starting with a universal state.
        *   **$\Delta_k^P$**: Equivalent to problems solvable by an ATM in polynomial time that makes at most $k$ alternations, where the first block of alternations can be either existential or universal.

    *   **Space is More Powerful than Time for Alternations:**
        *   While $AL = P$, the situation changes when we consider larger space bounds.
        *   **$\text{PSPACE} = \text{APSPACE}(\text{poly}(n))$**: A problem is in PSPACE if and only if it can be solved by an ATM using polynomial space. This is a very important result.
        *   **PH vs. PSPACE:** Since PH $\subseteq$ PSPACE, and PSPACE can be characterized by polynomial-space ATMs, the relationship is that PH is "contained within" the computational power of polynomial-space ATMs. The question is whether PSPACE *itself* collapses to a finite level of PH.

*   **Important Point:** The equivalence $AL = P$ means that the computational power of alternation is already captured by polynomial time if the space is logarithmic. The hierarchy arises when we consider *nested* alternations in polynomial time, which can be simulated by polynomial space.

---

### 5. Implications of Collapse Results

The relationships between these classes are contingent on whether certain collapses occur.

*   **Collapse of PH:**
    *   If $\text{PH}$ collapses to a finite level, for example, if $\Sigma_k^P = \Sigma_{k+1}^P$ for some $k$, then the entire hierarchy collapses: $\text{PH} = \Sigma_k^P$.
    *   This would have profound implications:
        *   It would imply that problems solvable by very complex combinations of oracles can be solved by simpler combinations.
        *   Many problems currently believed to be in PSPACE but not in NP (like QBF) would likely be in NP.
        *   The perceived hierarchy of difficulty would flatten significantly.
    *   It is widely believed that $\text{PH}$ does not collapse, meaning $\Sigma_k^P \subsetneq \Sigma_{k+1}^P$ for all $k$.

*   **PSPACE = PH:**
    *   If PSPACE were equal to PH, it would mean that every problem solvable in polynomial space is also solvable by a polynomial-time machine with a bounded number of oracle calls (from some level of PH).
    *   This is also considered highly unlikely. If PSPACE = PH, then PH collapses.

*   **NL = P:**
    *   This is a significant open problem. If NL = P, it would mean that problems solvable by non-deterministic machines using logarithmic space are equivalent to problems solvable by deterministic machines using polynomial time.
    *   This would have implications for graph reachability problems, as the standard NL-complete problem (Graph Reachability) would be solvable in polynomial time deterministically, which is already known. However, it would imply that *all* problems in NL are in P.

*   **$\text{coNL} = \text{NL}$**: This is a known result, also proven by Immerman and Szelepcsényi. This symmetry for NL is important.

---

### Summary of Key Relationships:

*   **Hierarchical Containment:** $L \subseteq NL \subseteq P \subseteq NP \subseteq PH \subseteq PSPACE$.
*   **ATM Connection:**
    *   $AL = P$ (Alternating Logarithmic Space = Polynomial Time)
    *   $APSPACE(\text{poly}(n)) = PSPACE$ (Alternating Polynomial Space = Polynomial Space)
    *   Levels of PH correspond to bounded alternations in polynomial time ATMs.

*   **Open Questions:**
    *   Does PSPACE $\subseteq$ PH? (Likely no)
    *   Does PH collapse to a finite level? (Likely no)
    *   Is NL = P? (Unknown, but many believe NL $\subsetneq$ P)

---

### Practice Questions:

1.  **Define $\Sigma_2^P$ and $\Pi_2^P$ using oracle machines and quantify the types of quantifiers involved.**
2.  **Explain why PH is contained within PSPACE.**
3.  **What is the significance of the relationship $AL = P$? How does it relate to the power of alternations in computation?**
4.  **If it were proven that PSPACE = PH, what would be the immediate consequences for our understanding of computational complexity and the structure of the Polynomial Hierarchy?**
5.  **Consider the problem of deciding if a Boolean formula $\phi(x_1, \dots, x_n)$ is a tautology. Is this problem related to any specific level of the Polynomial Hierarchy? If so, which one, and why?**
6.  **Why is it believed that PH does not collapse? What would be the implications if it did?**

---

### Answers to Practice Questions:

1.  **$\Sigma_2^P$**: A problem is in $\Sigma_2^P$ if it can be solved by a polynomial-time Turing machine with an oracle for NP. This means there exists a polynomial $p(n)$ and a polynomial-time deterministic Turing machine $M$ such that for an input $x$:
    *   $x \in L \iff \exists y, |y| \le p(|x|), \forall z, |z| \le p(|x|), M(x, y, z, \text{oracle}(y)) = \text{accept}$.
    *   Here, the oracle is for NP, which can be thought of as a membership test for an NP relation. The quantifiers are $\exists$ (for the NTM's choice of the string $y$ to query the NP oracle) and $\forall$ (for the NP oracle's own internal existential choice).
    *   In terms of QBF, it corresponds to formulas of the form $\exists x_1 \forall x_2 \dots \exists x_k \phi$, where $\phi$ is a propositional formula.

    **$\Pi_2^P$**: A problem is in $\Pi_2^P$ if its complement is in $\Sigma_2^P$. This means there exists a polynomial $p(n)$ and a polynomial-time deterministic Turing machine $M$ such that for an input $x$:
    *   $x \in L \iff \forall y, |y| \le p(|x|), \exists z, |z| \le p(|x|), M(x, y, z, \text{oracle}(y)) = \text{accept}$.
    *   Here, the quantifiers are $\forall$ (for the NTM's choice of the string $y$ to query the NP oracle) and $\exists$ (for the NP oracle's own internal existential choice).
    *   In terms of QBF, it corresponds to formulas of the form $\forall x_1 \exists x_2 \dots \forall x_k \phi$.

2.  **Explanation for PH $\subseteq$ PSPACE:**
    Any problem in $\Sigma_k^P$ can be solved by a polynomial-time NTM with an NP oracle. This can be simulated by a DTM using polynomial space. The simulation involves:
    *   **Unrolling the Oracle Calls:** An NP oracle call $\exists w, R(x,w)$ can be simulated by a DTM trying all possible strings $w$ of appropriate length.
    *   **Nested Structure:** The polynomial-time computation with nested oracle calls can be unfolded into a sequence of polynomial-time steps and oracle calls. Each oracle call itself can be simulated by a polynomial-time non-deterministic computation.
    *   **Space Usage:** A polynomial-time computation can be simulated using polynomial space. When this is done for nested calls, the total space used remains polynomial. For example, a $\Sigma_2^P$ problem involves $\exists y$ (query to NP) and the NP oracle itself is $\exists w$. This translates to $\exists y \exists w$. The simulation of these nested existential quantifiers can be done in polynomial space. The number of alternations in PH is bounded by $k$, and the polynomial space bound allows for simulating a sufficient number of alternations.

3.  **Significance of $AL = P$**:
    The equality $AL = P$ means that problems solvable by Alternating Turing Machines using logarithmic space are exactly the problems solvable by Deterministic Turing Machines in polynomial time.
    *   **Power of Alternation:** This result highlights that the power of alternation, when combined with a logarithmic space constraint, is equivalent to the power of polynomial time computation. The ability to branch universally and existentially allows an ATM to explore its computation tree efficiently. With $O(\log n)$ space, the ATM can deterministically check all necessary branches.
    *   **Complexity Landscape:** It shows that simple alternation models (with minimal space) don't go beyond polynomial time. The real complexity power comes from the *nesting* of alternations and the *amount* of space available to manage these alternations.

4.  **Consequences of PSPACE = PH**:
    If PSPACE = PH, it would imply that the entire Polynomial Hierarchy collapses to a finite level. For example, if PSPACE $\subseteq \Sigma_k^P$ for some fixed $k$, then PH = $\Sigma_k^P$. This would be a monumental collapse:
    *   **Flattening of Difficulty:** Problems that are currently considered significantly harder than NP (like QBF, which is PSPACE-complete) would be shown to be solvable within a bounded number of oracle calls from NP. This would drastically reduce the perceived differences in difficulty between various complexity classes.
    *   **Implications for Cryptography and AI:** Many problems believed to be hard (and the basis for cryptographic systems) would likely become efficiently solvable. This would have massive implications for computer science.
    *   **Unlikely Scenario:** Most complexity theorists believe this collapse is not true, as it would imply very strong structural properties of computation that are not observed.

5.  **Tautology Problem and PH:**
    The problem of deciding if a Boolean formula $\phi$ is a tautology is equivalent to checking if $\phi$ is true for *all* possible assignments of its variables.
    *   This can be expressed as $\forall x_1 \forall x_2 \dots \forall x_n, \phi(x_1, \dots, x_n)$, where $\phi$ is a propositional formula.
    *   This is the definition of $\Pi_1^P$-complete problems (or coNP-complete problems).
    *   Therefore, the tautology problem is in $\Pi_1^P$ (which is equivalent to coNP), and it is $\Pi_1^P$-complete.

6.  **Why PH is Believed Not to Collapse, and Implications:**
    *   **Belief in Strict Hierarchy:** The prevailing belief is that the complexity hierarchy is strict. This means that $\Sigma_k^P \subsetneq \Sigma_{k+1}^P$ for all $k$. If this is true, then PSPACE cannot be contained within any finite level of PH.
    *   **Evidence from Problem Hardness:** Many problems in PSPACE (like QBF) are known to be significantly harder than problems in NP. If PH collapsed to NP, it would imply these PSPACE-complete problems are in NP, which contradicts current understanding and computational evidence.
    *   **Structure of Computations:** The strict hierarchy is crucial for the fine-grained classification of computational problems. A collapse would simplify this landscape drastically, suggesting that the ability to add more layers of oracle calls or alternations doesn't fundamentally increase the computational power beyond a certain point.
    *   **Implications of Collapse:** If PH were to collapse, it would mean that the resources modeled by PSPACE can be achieved with much weaker models, such as polynomial-time computation with a limited number of NP oracle calls. This would revolutionize computer science, making many currently intractable problems tractable.

---

**Important Points to Remember:**

*   **PH is a hierarchy of complexity classes built upon NP and coNP using oracles.**
*   **$\text{PH} \subseteq \text{PSPACE}$** is a proven result. The converse, PSPACE $\subseteq$ PH, is an open problem and is widely believed to be false.
*   **Alternating Turing Machines (ATMs)** are crucial for understanding space complexity and its relationship to PH.
*   **$AL = P$** shows that the power of alternation with logarithmic space is equivalent to polynomial time.
*   **Levels of PH correspond to bounded alternations in polynomial-time ATMs.**
*   **Collapse results (e.g., PSPACE = PH or $\Sigma_k^P = \Sigma_{k+1}^P$) are generally believed not to occur**, as they would imply a significant simplification of the computational complexity landscape.
