---
title: "Savitch's theorem and NL-completeness"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca14"
status: "completed"
scrapedAt: "2026-05-20T17:23:54.311Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: Savitch's Theorem and NL-Completeness

---

### Learning Outcomes

*   **Understand the relationship between NSPACE and PSPACE.**
*   **Explain Savitch's Theorem and its implications.**
*   **Define and understand NL (Non-deterministic Logarithmic Space).**
*   **Explain the concept of NL-completeness.**
*   **Understand the significance of the Immerman-Szelepcsényi Theorem.**
*   **Recognize examples of NL-complete problems.**

---

### 1. Understanding the Relationship Between NSPACE and PSPACE

*   **Space Complexity:** Measures the amount of memory (tape cells or variables) a Turing machine needs to solve a problem, as a function of the input size.
*   **Logarithmic Space (L):** A Turing machine operates in logarithmic space if it uses $O(\log n)$ space, where $n$ is the input size. This space is typically used for storing pointers, counters, and the current state.
*   **Non-deterministic Logarithmic Space (NL):** A non-deterministic Turing machine (NTM) operates in $O(\log n)$ space. NTMs can explore multiple computation paths simultaneously.
*   **Polynomial Space (PSPACE):** A deterministic Turing machine (DTM) operates in polynomial space if it uses $O(n^k)$ space for some constant $k$, where $n$ is the input size. This means the space grows polynomially with the input size.
*   **Non-deterministic Polynomial Space (NPSPACE):** An NTM operates in polynomial space if it uses $O(n^k)$ space.

**Key Relationship:**

*   **L $\subseteq$ NL $\subseteq$ PSPACE $\subseteq$ NPSPACE**
*   We know that any problem solvable in logarithmic space (L) can also be solved in non-deterministic logarithmic space (NL).
*   Similarly, any problem solvable in non-deterministic polynomial space (NPSPACE) can also be solved in deterministic polynomial space (PSPACE). This is because an NTM's computation can be simulated by a DTM by exploring all possible paths, and if the NTM uses polynomial space, the DTM will also use polynomial space.

The crucial question that Savitch's Theorem addresses is the relationship between NL and PSPACE.

---

### 2. Savitch's Theorem and Its Implications

**Savitch's Theorem:** For any function $f(n) \ge \log n$,
$NSPACE(f(n)) \subseteq SPACE(f(n)^2)$.

**In simpler terms:** If a problem can be solved by a non-deterministic Turing machine using $f(n)$ space, then it can be solved by a deterministic Turing machine using $(f(n))^2$ space.

**Implications:**

*   **PSPACE vs. NPSPACE:** Since $NPSPACE(n^k) = PSPACE(n^{2k})$, and $n^{2k}$ is still polynomial, we have $NPSPACE = PSPACE$. This means that adding non-determinism to polynomial space computation does not increase the power of computation.
*   **NL vs. PSPACE:** Applying Savitch's Theorem with $f(n) = \log n$, we get $NL \subseteq SPACE((\log n)^2)$. This is a significant result as it shows that problems solvable in non-deterministic logarithmic space can be solved in *deterministic * *quadratic* logarithmic space. This is a tight bound, as it is known that $L \subseteq NL$, and $L$ is strictly contained in $SPACE((\log n)^2)$.

**Proof Idea for Savitch's Theorem (Intuition):**

The core idea is to deterministically simulate a non-deterministic computation. Consider an NTM $M$ that uses $O(f(n))$ space. A computation path of $M$ can be represented as a sequence of choices made at each non-deterministic step.

To deterministically check if $M$ accepts an input $w$, we need to determine if there *exists* a sequence of choices that leads to an accepting state. A brute-force search of all possible choice sequences would require exponential space.

Savitch's theorem uses a **depth-first search (DFS)** or **iterative deepening** approach on the computation tree. To check if a path of length $k$ exists from configuration $C_1$ to configuration $C_2$, we can write a recursive function:

```
function CanReach(current_config, target_config, steps_left):
  if current_config == target_config and steps_left >= 0:
    return true
  if steps_left < 0:
    return false

  // Explore all possible next configurations from current_config
  // Each non-deterministic choice leads to a new configuration
  for each next_config in PossibleNextConfigs(current_config):
    if CanReach(next_config, target_config, steps_left - 1):
      return true

  return false
```

The problem is that the number of configurations can be large ($2^{O(f(n))}$), and the number of steps can also be large.

The key insight is that we don't need to explore *all* possible paths in full. Instead, we can deterministically search for a path of a specific length. If we want to check if there's a path of length $k$ from $A$ to $B$, we can do it in space $O(f(n) + \log k)$ by recursively searching for paths of length $k/2$ from $A$ to some intermediate configuration $C$, and then from $C$ to $B$.

The maximum number of steps an NTM using $f(n)$ space can take before repeating a configuration is exponential in $f(n)$. If $M$ uses $f(n)$ space, it has at most $2^{O(f(n))}$ configurations. Thus, any accepting computation must have a path of length at most $2^{O(f(n))}$.

The recursive function `CanReach(current_config, target_config, steps_left)` can be implemented deterministically. The `steps_left` parameter decreases. To avoid recomputing the same subproblems, we can use memoization, but that would require too much space. The DFS approach implicitly handles this.

The actual simulation involves a recursive function that checks if a configuration `u` can reach configuration `v` in at most `m` steps. This can be done by:
1. If `m=0`, check if `u=v`.
2. If `m > 0`, iterate through all possible configurations `w` reachable from `u` in one step. For each `w`, recursively check if `w` can reach `v` in `m-1` steps.

The crucial part is that the depth of recursion is related to the number of steps allowed, and the space used at each recursive call is proportional to the size of a configuration ($O(f(n))$) plus the stack space for recursion ($O(\log(\text{number of steps}))$). The number of steps can be up to $2^{O(f(n))}$. Thus, the total space becomes $O(f(n) + \log(2^{O(f(n))})) = O(f(n) + O(f(n))) = O(f(n))$. This is not quite right.

A more precise argument for Savitch's theorem:
To check if configuration $u$ can reach configuration $v$ in at most $m$ steps:
`Check(u, v, m)`:
*   If $m=0$: return $u=v$.
*   If $m>0$:
    *   For each configuration $w$ reachable from $u$ in 1 step:
        *   If `Check(w, v, m-1)` returns true, then return true.
    *   Return false.

The number of configurations is $2^{s \cdot f(n)}$ where $s$ is a constant.
The maximum number of steps can be $2^{s \cdot f(n)}$.
The depth of recursion can be $2^{s \cdot f(n)}$.
The space used at each recursive call is $O(f(n))$ for storing configurations and $O(\log(\text{max steps})) = O(f(n))$ for the counter.
This suggests $O(f(n))$ space, but this is incorrect.

The correct way to implement this deterministically uses a recursive procedure that explores the computation tree. The procedure `VERIFY(current_config, target_config, k)` checks if `target_config` is reachable from `current_config` in at most `k` steps.

`VERIFY(u, v, k)`:
1. If $k=0$: return $u==v$.
2. For each configuration $w$ reachable from $u$ in one step:
   If `VERIFY(w, v, k-1)`: return true.
3. Return false.

The key observation is that when simulating an NTM, the number of configurations $N$ is $2^{O(f(n))}$. We need to check if there is an accepting configuration $a$ reachable from the initial configuration $s$ in $N$ steps.
The recursive function `VERIFY` can be modified to take $O(f(n))$ space for storing configurations and $O(\log N)$ for the counter $k$.
The recursion depth for `VERIFY(s, a, N)` is $N$. However, we can reduce the depth by dividing the number of steps.

Consider `CHECK(u, v, k)`: checks if $v$ is reachable from $u$ in $k$ steps.
`CHECK(u, v, k)`:
1. If $k=0$: return $u=v$.
2. If $k=1$: return $u \to v$ ( $v$ is a configuration reachable from $u$ in 1 step).
3. If $k$ is even:
    *   Let $m = k/2$.
    *   For each configuration $w$ reachable from $u$ in $m$ steps:
        *   If `CHECK(w, v, m)`: return true.
    *   Return false.
4. If $k$ is odd:
    *   Let $m = (k-1)/2$.
    *   For each configuration $w$ reachable from $u$ in $m$ steps:
        *   If `CHECK(w, v, m+1)`: return true.
    *   Return false.

This recursive formulation reduces the number of steps by roughly half at each step. The depth of recursion becomes $O(\log(\text{number of steps})) = O(\log(2^{O(f(n))})) = O(f(n))$.
At each level of recursion, we need to store the current configuration and the target configuration, which takes $O(f(n))$ space. The recursion stack also uses $O(f(n))$ space. Therefore, the total space is $O(f(n)^2)$.

**Example:** Consider a simple NTM that needs to reach state $q_{accept}$ from $q_{start}$ within $2^k$ steps using $O(k)$ space. The number of configurations is $2^{O(k)}$. Savitch's theorem states we can do this deterministically in $O(k^2)$ space.

---

### 3. Defining and Understanding NL (Non-deterministic Logarithmic Space)

*   **NL Class:** The set of all decision problems that can be solved by a Non-deterministic Turing Machine (NTM) using $O(\log n)$ space, where $n$ is the input size.

**Key Characteristics of NL:**

*   **Non-determinism:** The machine can make choices.
*   **Logarithmic Space:** The "scratchpad" or auxiliary memory is limited to $O(\log n)$ cells. This means the NTM can only store a limited amount of information about the input and its computation.
*   **Decision Problems:** Problems with a YES/NO answer.

**What can be stored in $O(\log n)$ space?**

*   Pointers to positions in the input string.
*   Counters (e.g., how many steps taken).
*   The current state of the machine.
*   A limited number of auxiliary variables, where the values of these variables are bounded by some polynomial in $n$.

**Example of an NL problem:**

*   **Reachability in a Directed Graph:**
    Given a directed graph $G = (V, E)$ and two vertices $s, t \in V$, does there exist a path from $s$ to $t$?

    **How an NTM solves this in NL:**
    The input is typically represented as an adjacency list or matrix. Let $n$ be the size of the input representation.
    The NTM needs $O(\log |V|)$ space to store:
    1.  The current vertex it's exploring.
    2.  A counter to limit the path length (to prevent infinite loops in cycles). The maximum path length can be $|V|$, so a counter of size $O(\log |V|)$ is sufficient.

    **Algorithm:**
    1.  Start at vertex $s$.
    2.  If the current vertex is $t$, accept.
    3.  If the path length counter exceeds $|V|$, reject.
    4.  For the current vertex $u$:
        *   Non-deterministically choose a neighbor $v$ of $u$.
        *   Move to vertex $v$.
        *   Increment the path length counter.
        *   Repeat from step 2.

    This NTM uses $O(\log |V|)$ space to store the current vertex and the path length. The adjacency list/matrix itself is part of the input and doesn't count towards the auxiliary space.

---

### 4. Explaining the Concept of NL-Completeness

*   **Reducibility:** A way to transform an instance of problem A into an instance of problem B such that a solution to B can be used to solve A.
*   **Logarithmic Space Reducibility (L-reduction):** Problem A is L-reducible to problem B (denoted $A \le_L B$) if there exists a deterministic Turing machine that transforms any instance $x$ of A into an instance $y$ of B in $O(\log |x|)$ space, and the answer to A is YES if and only if the answer to B is YES.

    **Crucial point for L-reductions:** The reduction must be computable in logarithmic space. This means the transformation process itself doesn't require much memory.

*   **NL-Completeness:** A problem P is **NL-complete** if:
    1.  $P \in NL$. (The problem is solvable in NL.)
    2.  For every problem $Q \in NL$, $Q \le_L P$. (Any problem in NL can be reduced to P using an L-reduction.)

**Significance of NL-Completeness:**

*   If we find an NL-complete problem that is *not* in L, then $NL \neq L$.
*   If we find an L-reduction from any problem in NL to a problem P, and P is in L, then all of NL is contained within L.
*   NL-completeness helps us understand the difficulty of problems within the NL complexity class. If we can prove a problem is NL-complete, it's considered "hardest" in NL.

---

### 5. Understanding the Significance of the Immerman-Szelepcsényi Theorem

**Immerman-Szelepcsényi Theorem:** $NL = coNL$.

*   **coNL:** The class of problems whose complements are in NL. If a problem is in coNL, it means if the answer is NO, then its complement has a YES answer that can be found by an NTM in NL.

**What the theorem means:**

This theorem is highly counter-intuitive. It states that if a problem can be solved by an NTM in NL, then its complement can also be solved by an NTM in NL. In other words, the class NL is closed under complementation.

**Proof Idea (Szelepcsényi's Proof for Reachability):**

The proof for reachability demonstrates this closure. For the complement of reachability (i.e., "is there NO path from $s$ to $t$?"), an NTM can guess a path and verify that it does *not* lead to $t$, or that it's a dead end. However, a more constructive proof is needed for the general theorem.

The general proof involves constructing an NTM for the complement problem. For reachability, if the NTM for reachability non-deterministically guesses a path and verifies it, the complement would need to verify that *no* such path exists. This is tricky for NTMs.

The key insight is to construct an NTM that checks if there are *k* distinct paths from a source to a target. By exploiting non-determinism cleverly, one can show that if there's no path of length $N$ (where $N$ is the number of configurations), then there are also no paths of length $N+1$, etc.

**More generally:** Consider an NTM $M$ for a problem $A \in NL$. Let $s$ be an input. $M$ accepts $s$ if there exists a path $p$ in its computation tree. The complement problem $coA$ is: does there *not* exist such a path?

The proof constructs an NTM $M'$ for $coA$. $M'$ on input $s$ will try to simulate $M$, but in a way that it can detect the absence of an accepting path. The proof involves building a new NTM that can "count" paths or explore alternatives.

The theorem is remarkable because it shows that for the low-complexity class NL, non-determinism doesn't offer any additional power compared to deterministic computation in terms of solving complement problems. This is in stark contrast to classes like P, where $P \neq NP$, implying $NP$ is not closed under complementation.

---

### 6. Recognizing Examples of NL-Complete Problems

**Key NL-Complete Problems:**

1.  **Reachability in a Directed Graph (PATH):**
    *   **Instance:** A directed graph $G=(V,E)$ and vertices $s, t \in V$.
    *   **Question:** Is there a path from $s$ to $t$ in $G$?
    *   This is the canonical NL-complete problem.

2.  **St-Connectivity:**
    *   **Instance:** A directed graph $G=(V,E)$ and two distinct vertices $s, t \in V$.
    *   **Question:** Are $s$ and $t$ in the same strongly connected component? (Equivalently, is there a path from $s$ to $t$ AND a path from $t$ to $s$?)
    *   This is also NL-complete.

3.  **2-SAT (Satisfiability of 2-Conjunctive Normal Form):**
    *   **Instance:** A Boolean formula in 2-CNF (conjunction of clauses, where each clause is a disjunction of at most two literals, e.g., $(x_1 \lor \neg x_2) \land (\neg x_1 \lor x_3)$).
    *   **Question:** Is there an assignment of truth values to the variables that makes the formula true?
    *   The connection to graph theory is via implication graphs. A clause $(a \lor b)$ is equivalent to $(\neg a \implies b) \land (\neg b \implies a)$. 2-SAT is NL-complete.

4.  **Many other problems:** Problems related to finding paths, connectivity, and certain types of logical satisfiability are often found to be NL-complete.

**How to recognize an NL-complete problem:**

If you can show that a problem $A$ is in NL and that the canonical NL-complete problem (like PATH) can be L-reduced to $A$, then $A$ is NL-complete.

**Example of reduction:** Showing 2-SAT is NL-complete involves reducing 2-SAT to PATH.
For a 2-CNF formula $\phi$:
*   Create a directed graph where each variable $x_i$ and its negation $\neg x_i$ correspond to nodes in the graph.
*   For each clause $(a \lor b)$, add two directed edges: $\neg a \to b$ and $\neg b \to a$. These edges represent the implications derived from the clause.
*   The formula $\phi$ is satisfiable if and only if for no variable $x_i$, there is a path from $x_i$ to $\neg x_i$ AND a path from $\neg x_i$ to $x_i$ in the graph.
*   This condition can be checked by running PATH twice (or by checking for strong connectivity). The graph construction and the checks are all doable in logarithmic space.

---

### Important Points to Remember

*   **Savitch's Theorem:** $NSPACE(f(n)) \subseteq SPACE(f(n)^2)$. This implies $PSPACE = NPSPACE$. It also shows $NL \subseteq SPACE((\log n)^2)$.
*   **NL:** Problems solvable by an NTM in $O(\log n)$ space.
*   **NL-completeness:** A problem is NL-complete if it's in NL and every other problem in NL can be L-reduced to it.
*   **L-reduction:** A transformation computable in logarithmic space.
*   **Immerman-Szelepcsényi Theorem:** $NL = coNL$. NL is closed under complementation.
*   **Canonical NL-complete problem:** Reachability in directed graphs.
*   **Key implication:** If $L = NL$, then many problems we think are harder would be solvable very efficiently (in logarithmic space). Currently, it is widely believed that $L \neq NL$.

---

### Practice Questions

**Question 1:**
State Savitch's Theorem and explain its significance regarding the relationship between NSPACE and PSPACE.

**Question 2:**
Define the complexity class NL. Provide an example of a problem that belongs to NL and explain why it belongs to NL.

**Question 3:**
What does it mean for a problem to be NL-complete? What is the importance of the Immerman-Szelepcsényi Theorem in the context of NL?

**Question 4:**
Consider the following problem:
**Input:** A configuration of a 2-player game on a board, and the current player.
**Question:** Does the current player have a winning strategy?
Assume the game is finite, has no draws, and is played on a board where the total number of possible board configurations is bounded by $2^{O(n)}$, where $n$ is the input size describing the current state.
Is this problem likely to be in NL, PSPACE, or something else? Justify your answer. (Hint: Think about alternating Turing machines and their relation to PSPACE).

**Question 5:**
Explain why Reachability in a directed graph is considered an NL-complete problem.

---

### Answers to Practice Questions

**Answer 1:**
Savitch's Theorem states that for any function $f(n) \ge \log n$, $NSPACE(f(n)) \subseteq SPACE(f(n)^2)$.
**Significance:**
*   **PSPACE = NPSPACE:** By setting $f(n) = n^k$, we get $NSPACE(n^k) \subseteq SPACE((n^k)^2) = SPACE(n^{2k})$. Since $SPACE(n^{2k})$ is still polynomial space, and $NPSPACE$ is known to be contained in $PSPACE$, this implies $PSPACE = NPSPACE$. Non-determinism does not increase the power of computation when dealing with polynomial space.
*   **NL $\subseteq$ SPACE($(\log n)^2$):** By setting $f(n) = \log n$, we get $NL = NSPACE(\log n) \subseteq SPACE((\log n)^2)$. This means that any problem solvable by a non-deterministic Turing machine in logarithmic space can be solved by a deterministic Turing machine in quadratic logarithmic space.

**Answer 2:**
The complexity class NL (Non-deterministic Logarithmic Space) consists of all decision problems solvable by a non-deterministic Turing machine (NTM) that uses at most $O(\log n)$ auxiliary space, where $n$ is the input size.

**Example:** Reachability in a directed graph.
**Instance:** A directed graph $G=(V,E)$ and vertices $s, t \in V$.
**Question:** Is there a path from $s$ to $t$ in $G$?

**Why it belongs to NL:** An NTM can solve this problem by:
1.  Storing the current vertex $u$ it is visiting (requires $O(\log |V|)$ space).
2.  Storing a counter for the path length (e.g., up to $|V|$) (requires $O(\log |V|)$ space).
3.  Starting at $s$.
4.  At each step, non-deterministically choosing a neighbor $v$ of the current vertex $u$, moving to $v$, and incrementing the path counter.
5.  If the current vertex becomes $t$, the machine accepts.
6.  If the path counter exceeds $|V|$, the machine rejects to avoid infinite loops.
The total auxiliary space used is dominated by storing the current vertex and the counter, which is $O(\log |V|)$. Since $|V|$ is bounded by a polynomial in the input size $n$, this is $O(\log n)$ space.

**Answer 3:**
A problem $P$ is **NL-complete** if:
1.  $P \in NL$ (The problem is solvable in non-deterministic logarithmic space).
2.  For every problem $Q \in NL$, $Q \le_L P$ (There exists a logarithmic space reduction from $Q$ to $P$).

The importance of the **Immerman-Szelepcsényi Theorem** ($NL = coNL$) is that it proves NL is closed under complementation. This means that if a problem can be solved by an NTM in NL, then its complement problem can also be solved by an NTM in NL. This is a rare property for complexity classes and indicates a certain symmetry or lack of "hardness differentiation" within NL, unlike the P vs. NP scenario where $NP \neq coNP$ is widely believed.

**Answer 4:**
This problem is related to game theory. The question of whether the current player has a winning strategy in a finite, deterministic, perfect information game (without draws) is known to be **PSPACE-complete**.

**Justification:**
*   A winning strategy involves making moves that guarantee a win, regardless of the opponent's moves. This can be thought of as an alternating sequence of choices: "I choose a move such that (for all opponent moves, I choose a move such that...)"
*   Such alternating quantifiers ("there exists", "for all") are characteristic of PSPACE.
*   The game tree can be explored. The depth of the game tree can be exponential in the input size $n$ (e.g., if $n$ describes a board of size $k \times k$, the game could last $O(k^2)$ moves). Deterministically exploring this tree requires space proportional to the depth, which can be exponential.
*   However, if we use an **Alternating Turing Machine (ATM)**, we can model this directly. An ATM uses two types of states: existential (like NTMs) and universal (like a "for all" quantifier). An ATM accepts if there is an alternating sequence of choices leading to an accepting state.
*   It is known that $ATIME(f(n)) = PSPACE(f(n))$ and $APACE(f(n)) = PSPACE(f(n))$ for certain time/space bounds. In this case, the game tree exploration can be done by an ATM in polynomial space. Since the number of configurations is $2^{O(n)}$, the game can be explored in $O(n)$ levels, requiring polynomial space.
*   The problem is in PSPACE because we can deterministically explore the game tree in polynomial space by keeping track of the current board state and whose turn it is, and recursively determining if a winning strategy exists. For a given state, the current player wins if there is *any* move to a state from which the *next* player loses. The next player loses if *all* their possible moves lead to states from which the *original* player wins. This structure directly maps to PSPACE.

Therefore, the problem is likely in PSPACE.

**Answer 5:**
Reachability in a directed graph is considered an NL-complete problem because:
1.  **It is in NL:** As explained in the answer to Question 2, an NTM can solve the reachability problem by non-deterministically guessing a path and using $O(\log n)$ space to store the current node and path length.

2.  **All problems in NL are L-reducible to it:** This is the crucial part. It has been proven that any problem in NL can be transformed (via an L-reduction) into an instance of the reachability problem. The specific L-reduction often involves constructing a computation graph for an NTM solving a general NL problem. The nodes of this graph represent configurations of the NTM, and edges represent transitions between configurations. An accepting computation path in the NTM corresponds to a path in this graph from the initial configuration to an accepting configuration. This construction of the graph and the verification of paths can be performed using only logarithmic space. Since Reachability is the target problem of this reduction, and the reduction itself is in L, Reachability is NL-hard. Since it's also in NL, it is NL-complete.
