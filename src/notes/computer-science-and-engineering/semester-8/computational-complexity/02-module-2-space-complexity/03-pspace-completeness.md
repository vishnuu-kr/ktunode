---
title: "PSPACE-completeness."
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca15"
status: "completed"
scrapedAt: "2026-05-20T17:23:55.008Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: PSPACE-completeness

This topic delves into the complexity class PSPACE and its complete problems, providing a deeper understanding of the limits of polynomial-space computation.

### Learning Outcomes:

*   **Understand the definition of PSPACE:** Grasp what it means for a problem to be solvable within polynomial space.
*   **Define PSPACE-completeness:** Comprehend the criteria for a problem to be PSPACE-complete.
*   **Recognize the relationship between PSPACE and other complexity classes:** Understand how PSPACE relates to P, NP, PSPACE, and other relevant classes.
*   **Analyze the PSPACE-completeness of important problems:** Study classic examples of PSPACE-complete problems and why they are considered so.
*   **Appreciate the significance of PSPACE-completeness:** Understand the implications of PSPACE-completeness for algorithm design and problem solvability.

---

### 1. Understanding the Definition of PSPACE

**Definition:** PSPACE is the class of decision problems that can be solved by a deterministic Turing machine using a polynomial amount of *space* with respect to the input size.

*   **Space Complexity:** The amount of memory (tape cells) a Turing machine uses to process an input. We are interested in the *maximum* space used throughout the computation.
*   **Polynomial Space:** If the input size is $n$, the machine uses at most $O(n^k)$ space for some constant $k$.
*   **Decision Problem:** A problem where the answer is either "yes" or "no."

**Key Idea:** PSPACE focuses on *memory constraints* rather than *time constraints*. A problem in PSPACE might take an exponential amount of time, but it can be solved using only a polynomial amount of extra memory.

**Formal Definition (using Turing Machines):**
A language $L$ is in PSPACE if there exists a deterministic Turing machine $M$ such that:
1.  For every input string $x$:
    *   If $x \in L$, then $M$ halts and accepts $x$.
    *   If $x \notin L$, then $M$ halts and rejects $x$.
2.  There exists a polynomial $p(n)$ such that for every input string $x$ of length $n$, the space used by $M$ on input $x$ is at most $p(n)$.

**Relationship with other Complexity Classes:**

*   **P $\subseteq$ PSPACE:** Any problem solvable in polynomial time is also solvable in polynomial space. A polynomial-time algorithm can be simulated by a polynomial-space algorithm by simply keeping track of the time steps used within the polynomial space bound.
*   **NP $\subseteq$ PSPACE:** Any problem solvable in polynomial time by a non-deterministic Turing machine is also solvable in polynomial space by a deterministic Turing machine. This is a non-trivial result. One way to see this is that a non-deterministic TM can be simulated by a deterministic TM that systematically explores all possible computation paths. If the non-deterministic TM runs in polynomial time, the depth of the computation tree is polynomial, and thus, the number of active paths to explore at any point is bounded. A deterministic simulation can explore these paths one by one, keeping track of the current state in polynomial space.
*   **PSPACE $\subseteq$ EXPSPACE:** Any problem solvable in polynomial space is solvable in exponential space (a trivial inclusion, as polynomial is always less than or equal to exponential).
*   **NP $\subseteq$ PSPACE:** This implies that if NP-complete problems were PSPACE-complete (which they are not), then P = PSPACE.

---

### 2. Defining PSPACE-completeness

**Definition:** A problem $C$ is **PSPACE-complete** if:
1.  $C \in \text{PSPACE}$ (i.e., $C$ is in the class PSPACE).
2.  For every problem $A \in \text{PSPACE}$, $A$ is polynomial-time reducible to $C$ (i.e., $A \leq_P C$).

**Polynomial-Time Reducibility ($A \leq_P C$):**
A language $A$ is polynomial-time reducible to a language $C$ if there exists a polynomial-time computable function $f$ such that for every string $x$:
$x \in A \iff f(x) \in C$.

**Significance of PSPACE-completeness:**

*   **Hardest Problems in PSPACE:** PSPACE-complete problems are the "hardest" problems in PSPACE. If we can find a polynomial-time algorithm for any PSPACE-complete problem, then we can solve *every* problem in PSPACE in polynomial time. This would imply **P = PSPACE**.
*   **No known polynomial-time algorithms:** Currently, no polynomial-time algorithms are known for any PSPACE-complete problem. This strongly suggests that P $\neq$ PSPACE.

**Key Analogy:** PSPACE-completeness is to PSPACE what NP-completeness is to NP.

---

### 3. Relationship between PSPACE and Other Complexity Classes

We've already touched upon this, but let's summarize and highlight key points:

*   **P $\subseteq$ NP $\subseteq$ PSPACE $\subseteq$ EXPSPACE**
*   **Implication of PSPACE-complete:** If any PSPACE-complete problem can be solved in polynomial time, then P = PSPACE.
*   **Implication of PSPACE-complete:** If P = PSPACE, then P = NP, P = coNP, and so on for all levels of the polynomial hierarchy.
*   **Implication of PSPACE-complete:** If any PSPACE-complete problem can be solved in polynomial space, it doesn't tell us much, as all problems in PSPACE are solvable in polynomial space by definition. The crucial reduction is to *polynomial time*.

---

### 4. Analyzing the PSPACE-Completeness of Important Problems

Here are some classic examples of PSPACE-complete problems. Showing that a problem is PSPACE-complete typically involves two steps:
1.  Show that the problem is in PSPACE.
2.  Show that a known PSPACE-complete problem is polynomial-time reducible to it.

A common technique for the second step is to reduce **Quantified Boolean Formulas (QBF)** to the problem at hand. QBF is a canonical PSPACE-complete problem.

#### 4.1. Quantified Boolean Formulas (QBF)

**Definition:** The language of true quantified Boolean formulas.
A formula is of the form $\exists x_1 \forall x_2 \exists x_3 \dots Q x_n \phi(x_1, \dots, x_n)$, where $\phi$ is a Boolean formula in conjunctive normal form (CNF) and $Q$ is either $\exists$ or $\forall$.

**Problem:** Given a quantified Boolean formula, is it true?

**Example:**
$(\exists x_1 \forall x_2 (x_1 \lor \neg x_2) \land (\neg x_1 \lor x_2))$
*   If $x_1$ is true, we need $\forall x_2 ((T \lor \neg x_2) \land (\neg T \lor x_2))$. This simplifies to $\forall x_2 (T \land F \lor x_2)$, which is $\forall x_2 (x_2)$. This is true if $x_2$ is true. So, if $x_1$ is true, the formula is only true if $x_2$ is true. However, the quantifier for $x_2$ is $\forall$, so we need it to be true for all $x_2$. If $x_2$ is false, the second clause becomes $(F \lor F)$ which is false. Thus, if $x_1$ is true, the whole formula is false.
*   If $x_1$ is false, we need $\forall x_2 ((F \lor \neg x_2) \land (\neg F \lor x_2))$. This simplifies to $\forall x_2 (\neg x_2 \land T \lor x_2)$, which is $\forall x_2 (\neg x_2 \lor x_2)$. This is always true.
So, the formula is true.

**Why QBF is PSPACE-complete:**

*   **In PSPACE:** A deterministic TM can decide QBF by systematically evaluating the formula. The depth of the quantification is at most $n$ (number of variables). The evaluation of a single assignment for $\phi$ takes polynomial time. The machine can explore all assignments for a variable in a fixed order (e.g., all true, then all false for $\exists$, or all true then all false for $\forall$), keeping track of the current quantified variable and its assignment in polynomial space.
*   **Reducibility from all of PSPACE:** It can be shown that any problem in PSPACE can be reduced to QBF. This is typically done by showing that the computation of a polynomial-space bounded TM can be encoded as a QBF.

#### 4.2. Generalized Chess (and other games)

**Problem:** Given a board of an $n \times n$ grid, a starting position for two players, and a set of rules, can the first player win, assuming optimal play from both sides? (The rules can be complex, defining movement, capture, and winning conditions).

**Example:** A simplified version could be Checkers on a small board.

**Why it's PSPACE-complete:**

*   **In PSPACE:** The game tree for a game like chess can be enormous (exponential). However, to determine if a position is winning, we only need to know the states of the board and the current player. The game must end, and the length of any game is bounded (otherwise, it's a draw). The state of the board can be represented in polynomial space. A deterministic TM can explore the game tree using recursion, and the depth of recursion is the maximum number of moves in a game, which is polynomial for many games (or bounded). The state of the recursion stack needs polynomial space.
*   **Reducibility:** It has been shown that QBF can be reduced to generalized games. This is done by encoding the steps of a polynomial-space computation as moves in the game.

#### 4.3. Boolean Satisfiability (SAT) on Bounded Depth Circuits (AC0-$)

While SAT itself is NP-complete, variants can be PSPACE-complete.
Consider **$\text{NQSAT}_k$**: Given a Boolean circuit of depth $k$ that takes $n$ inputs and outputs a single bit, can the circuit evaluate to 1 for some input? This is actually in P, not PSPACE.

A better example of a PSPACE-complete problem related to SAT is:
**$\text{2-SAT with Counting}$**: Given a 2-CNF formula $\phi$, does there exist *exactly one* satisfying assignment? This is still not PSPACE-complete.

The PSPACE-complete problems often involve **quantification over variables** or **sequences of moves** where the number of steps or variables can be large.

#### 4.4. TQBF (True Quantified Boolean Formulas) is PSPACE-complete

As mentioned, TQBF is the canonical PSPACE-complete problem.

#### 4.5. Context-Free Grammar Membership with Exponential Input Size

If the grammar is fixed and the input string can be exponentially long, then membership can be PSPACE-complete. However, for fixed polynomial-sized input, it's PSPACE.

#### 4.6. Generalized Geography

**Problem:** Given a directed graph $G=(V,E)$ and a starting vertex $v$, can the first player win a game where players take turns moving a token from its current vertex to an adjacent vertex. A vertex cannot be visited more than once. The last player to move wins.

**Why it's PSPACE-complete:**

*   **In PSPACE:** Similar to chess, the state is the current vertex and the set of visited vertices. The number of vertices is $n$. Keeping track of visited vertices requires polynomial space. The game depth is at most $n$. A TM can explore the game tree.
*   **Reducibility:** It can be shown that QBF can be reduced to Generalized Geography. The graph is constructed to represent the computation of a polynomial-space Turing machine, and the game moves correspond to the machine's transitions.

#### 4.7. Linear Bounded Automata (LBA) Membership

**Problem:** Given a Linear Bounded Automaton $M$ and a string $x$, does $M$ accept $x$?
An LBA is a Turing machine whose tape is bounded by a linear function of the input length (i.e., $O(n)$).

**Why it's PSPACE-complete:**

*   **In PSPACE:** By definition, LBAs operate in polynomial space.
*   **Reducibility:** LBAs can simulate any polynomial-space computation. Therefore, any PSPACE problem can be reduced to LBA membership.

---

### 5. Significance of PSPACE-Completeness

*   **Understanding Computational Limits:** PSPACE-completeness highlights problems that are likely intractable not just in time, but also in terms of memory. If we find a PSPACE-complete problem that is *not* in P, it would mean P $\neq$ PSPACE.
*   **Implications for Algorithm Design:** If a problem is PSPACE-complete, it suggests that we should not expect to find efficient (polynomial-time) algorithms for it. Instead, we might look for:
    *   Approximation algorithms (if applicable).
    *   Algorithms that work for restricted instances of the problem.
    *   Algorithms that are efficient for *average-case* inputs.
    *   Heuristics.
*   **Connections to Real-World Problems:** Many real-world problems, such as planning, game playing, and circuit verification, fall into the PSPACE complexity class. Understanding their PSPACE-completeness helps us gauge their inherent difficulty.

---

### 6. Important Points to Remember

*   **SPACE vs. TIME:** PSPACE is about *space* complexity, not *time*. Problems in PSPACE can take exponential time.
*   **PSPACE is "large":** PSPACE contains NP, and thus also P and coNP. If PSPACE were equal to P, it would have profound implications for complexity theory.
*   **PSPACE-complete = Hardest in PSPACE:** If you can solve one PSPACE-complete problem efficiently, you can solve all of PSPACE efficiently.
*   **QBF is the canonical problem:** Many proofs of PSPACE-completeness involve reducing from QBF.
*   **Games are often PSPACE-complete:** Problems involving optimal strategies in games with potentially long sequences of moves frequently fall into PSPACE.
*   **The "completeness" is key:** Just being in PSPACE is not enough to be PSPACE-complete. The problem must also be "hard" in the sense that all other PSPACE problems can be reduced to it.

---

### Practice Questions/Exercises:

1.  **Explain the difference between P and PSPACE in terms of resource usage.**
2.  **If a problem is NP-complete, is it necessarily in PSPACE? Justify your answer.**
3.  **Consider a hypothetical scenario where someone claims to have found a polynomial-time algorithm for Generalized Geography. What would be the implications for the relationship between P and PSPACE?**
4.  **Is the language {($M, x$) | $M$ is a deterministic TM that uses $O(\log n)$ space on input $x$ and accepts $x$ } in PSPACE? Explain.** (Hint: $n$ is the length of input $x$).
5.  **Why is it difficult to prove that P $\neq$ NP and P $\neq$ PSPACE?**
6.  **True or False: If a problem is PSPACE-complete, it means that no efficient (polynomial-time) algorithm can exist for it.** Explain your reasoning.

---

### Answers to Practice Questions:

1.  **P** is the class of decision problems solvable in **polynomial time**. This means the time taken by the algorithm grows polynomially with the input size. **PSPACE** is the class of decision problems solvable in **polynomial space**. This means the amount of memory used by the algorithm grows polynomially with the input size. A PSPACE algorithm might take exponential time, but it uses limited memory.

2.  **Yes, NP problems are necessarily in PSPACE.** This is because a non-deterministic Turing machine that solves an NP problem in polynomial time can be simulated by a deterministic Turing machine using polynomial space. The deterministic machine can explore the computation paths of the non-deterministic machine. Since the time is polynomial, the number of steps and the depth of the computation tree are polynomial. Keeping track of the current state and the path taken can be done within polynomial space.

3.  If someone found a polynomial-time algorithm for Generalized Geography, and knowing that Generalized Geography is PSPACE-complete, this would imply that **P = PSPACE**. This is because, by definition of PSPACE-completeness, any problem in PSPACE could be reduced to Generalized Geography in polynomial time. If Generalized Geography can be solved in polynomial time, then all problems in PSPACE can also be solved in polynomial time.

4.  **Yes, the language is in PSPACE.** The input size is $n$ (the length of $x$ plus the encoding of $M$). The TM $M$ itself operates within $O(\log n)$ space. A deterministic TM simulating $M$ would need to keep track of the configuration of $M$, which requires $O(\log n)$ space. This is a polynomial amount of space relative to the input size $n$. The simulation would also need space to store the input string $x$, which is $n$. However, the problem is about the *additional* space used by the simulator. If the simulator uses polynomial space, the problem is in PSPACE. The description of $M$ can be part of the input. The critical part is how much *extra* space is needed beyond the input. If $M$ uses $O(\log n)$ space, a simulator for $M$ can also operate using $O(\log n)$ space (e.g., by simulating $M$'s tape head and state). The problem is whether *there exists* a TM that solves this language in polynomial space. A TM that checks the definition of $M$ (which is encoded in the input) and its operation within $O(\log n)$ space would satisfy the condition.

5.  It is difficult to prove that P $\neq$ NP and P $\neq$ PSPACE because we currently lack the mathematical tools to distinguish between problems that are efficiently solvable and those that are not, particularly when dealing with non-deterministic computation or very large state spaces (like those in PSPACE). The main obstacle is the lack of a provably efficient way to simulate or bound computations without resorting to techniques that themselves lead to exponential blow-ups.

6.  **False.** If a problem is PSPACE-complete, it means that it is one of the "hardest" problems in PSPACE. If we could find a polynomial-time algorithm for *any* PSPACE-complete problem, then *all* problems in PSPACE could be solved in polynomial time, which would imply **P = PSPACE**. However, the existence of a PSPACE-complete problem does not automatically mean that no polynomial-time algorithm exists; it only means that if such an algorithm were found, it would have massive implications for complexity theory. Currently, no polynomial-time algorithms are known for PSPACE-complete problems, leading many to believe that P $\neq$ PSPACE.
