---
title: "Space Complexity - Space complexity classes: L, NL, PSPACE"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 2: Space Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca13"
status: "completed"
scrapedAt: "2026-05-20T17:23:53.614Z"
---
# Computational Complexity: Module 2 - Space Complexity

## Topic: Space Complexity Classes: L, NL, PSPACE

This module delves into the fascinating world of space complexity, focusing on specific complexity classes that help us categorize computational problems based on the amount of memory they require. We will explore **L**, **NL**, and **PSPACE**, understanding their definitions, relationships, and implications.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define and understand the concepts of deterministic space complexity and non-deterministic space complexity.
*   Define and explain the complexity classes **L**, **NL**, and **PSPACE**.
*   Understand the relationships between these complexity classes.
*   Analyze the space complexity of algorithms and problems.
*   Recognize common problems belonging to these classes.
*   Understand the significance of Savitch's Theorem.

---

### 1. Deterministic vs. Non-deterministic Space Complexity

Before diving into the classes, it's crucial to understand the distinction between deterministic and non-deterministic computation in the context of space.

#### 1.1 Deterministic Space Complexity

*   **Definition:** A Turing machine is deterministic if, for any given state and symbol on the tape, there is *exactly one* possible transition.
*   **Space Complexity:** The space complexity of a deterministic Turing machine (DTM) $M$ on an input $x$ is the maximum number of tape cells $M$ uses during its computation on $x$, starting from the initial configuration. We denote this by $S_M(x)$.
*   **Space Complexity Function:** A DTM $M$ has space complexity $f(n)$ if $S_M(x) \le f(|x|)$ for all inputs $x$ of length $n$.

#### 1.2 Non-deterministic Space Complexity

*   **Definition:** A Turing machine is non-deterministic if, for any given state and symbol on the tape, there can be *multiple* possible transitions.
*   **Computation:** A non-deterministic Turing machine (NTM) accepts an input $x$ if there exists *at least one* sequence of transitions (a "computation path") that leads to an accepting state.
*   **Space Complexity:** The space complexity of an NTM $M$ on an input $x$ is the maximum number of tape cells *any* computation path of $M$ uses on $x$. This is because we are interested in the *worst-case* memory usage across all possible computation paths.
*   **Space Complexity Function:** An NTM $M$ has space complexity $f(n)$ if for every input $x$ of length $n$, all computation paths of $M$ use at most $f(n)$ tape cells.

**Key Distinction:** For time complexity, non-determinism allows for multiple computations to run in parallel, potentially finishing faster. For space complexity, non-determinism doesn't inherently "save" space; it means we are interested in the space used by *any* valid computation path.

---

### 2. Space Complexity Classes

Now, let's define the key complexity classes:

#### 2.1 Class L (Logarithmic Space)

*   **Definition:** $\mathbf{L}$ is the class of decision problems solvable by a deterministic Turing machine that uses at most $O(\log n)$ work tape cells, where $n$ is the length of the input. The input tape is read-only.
*   **Memory Constraint:** The machine can only access a small, logarithmic amount of auxiliary memory, regardless of the input size. This means the machine can only remember a limited amount of information.
*   **Key Properties:**
    *   Any problem in L can be solved efficiently in terms of space.
    *   L is a subset of P (polynomial time) and also a subset of NL.
*   **Important Note:** The input itself is usually assumed to be on a read-only tape. The $O(\log n)$ space refers to the *additional* or *work* tape space.

**Example Problems in L:**

*   **Reachability in a Directed Acyclic Graph (DAG):** Given a DAG $G=(V,E)$ and two vertices $u, v \in V$, is there a path from $u$ to $v$?
    *   **Algorithm Idea:** We can perform a Depth First Search (DFS) or Breadth First Search (BFS) to find the path. To keep track of visited nodes during DFS/BFS, we need to store the path from the starting node to the current node. In a graph with $n$ vertices, the longest possible simple path has length $n-1$. However, to implement DFS/BFS efficiently on a graph represented by an adjacency list or matrix, we only need to store the current node and the path taken to reach it. This can be done using a stack. The maximum depth of the recursion (or stack) is the length of the path, which can be at most $n$.
    *   **The Logarithmic Trick:** The key here is how the graph is represented. If the graph is represented by its adjacency matrix $A$, where $A_{ij}=1$ if there's an edge from $i$ to $j$, then to check if there's a path from $u$ to $v$, we can use a recursive function `path(current, target)`:
        ```
        path(current, target):
          if current == target: return true
          for each neighbor neighbor of current:
            if path(neighbor, target): return true
          return false
        ```
        This recursive approach seems to need stack space proportional to the path length ($O(n)$). However, a DTM can simulate this process without explicit recursion. It can use a stack to store the nodes to visit. Critically, if the graph is given by its adjacency matrix, and we need to iterate through neighbors of a node, we can do this by scanning a row of the matrix.
        To get to $O(\log n)$ space, we can consider a slightly different approach. We want to know if there's a path of length at most $n$ from $u$ to $v$. This can be framed as checking if the $(u,v)$-th entry of $A^n$ is non-zero. Computing $A^n$ naively takes $O(n^3)$ time and space. However, we can use binary exponentiation (repeated squaring) to compute $A^n$ in $O(\log n)$ matrix multiplications. Each matrix multiplication of $n \times n$ matrices requires $O(n^3)$ arithmetic operations. But if we think about the *space* required to check reachability, we can use a recursive algorithm with space $O(\log n)$ for the recursion stack and $O(\log n)$ for node indices.
        A more standard explanation for reachability in $O(\log n)$ space for a graph with $n$ vertices represented by its adjacency matrix is as follows:
        We want to check if there's a path from $s$ to $t$.
        Let `path(u, v, k)` be a function that returns true if there is a path from $u$ to $v$ of length at most $k$.
        `path(u, v, k)`:
          If $k=0$: return $u=v$.
          If $k=1$: return $u=v$ or there's an edge $(u, v)$.
          If $k > 1$:
            For each vertex $w$:
              If `path(u, w, k/2)` and `path(w, v, k - k/2)`:
                Return true.
            Return false.
        We can then call `path(s, t, n)`. The values $u, v, w, k$ can be represented using $O(\log n)$ bits. The depth of this recursion is $O(\log n)$. Each recursive call uses $O(\log n)$ space for its parameters. So, the total space complexity is $O(\log n \times \log n)$, which is often simplified to $O(\log n)$ if we are careful about how we represent the graph and perform the checks. The key is that we only need to pass the current nodes and the remaining path length.
        *For a more precise explanation of $O(\log n)$ space reachability, consider a Turing machine that keeps track of the current vertex $u$, the target vertex $v$, and a counter $k$. It can explore paths by iterating through neighbors. The actual $O(\log n)$ space for reachability usually relies on the fact that we can represent the current vertex index and the target vertex index, and use a counter for the path length. The machine can keep track of the current vertex and explore its neighbors. To avoid cycles, it needs to remember the path taken so far. However, this can be done implicitly. A DTM can simulate a DFS by maintaining a stack. The stack stores the sequence of vertices visited. The maximum depth of this stack can be $n$. But if we are looking for a path of length *at most* $n$, the $O(\log n)$ space comes from representing node indices and the counter. The common algorithm relies on a recursive check `CanReach(u, v, k)` which checks if $v$ is reachable from $u$ in at most $k$ steps. This is done by checking if there exists an intermediate vertex $w$ such that $v$ is reachable from $w$ in at most $k-1$ steps and there is an edge from $u$ to $w$. The base cases are reachability in 0 or 1 step. This recursive structure, with $k$ decreasing, can be implemented in $O(\log k)$ stack space (or $O(\log n)$ since $k \le n$). Each state in the computation needs to store the current node, the target node, and the path length, all of which can be represented in $O(\log n)$ bits.*

*   **Integer Multiplication:** Multiplying two $n$-bit integers.
    *   **Algorithm Idea:** The standard grade-school multiplication algorithm requires $O(n^2)$ time but can be implemented with $O(n)$ space to store the intermediate sums and the result. However, faster algorithms like Karatsuba or FFT-based multiplication also have space requirements that are polylogarithmic in $n$ or even logarithmic.
    *   For basic multiplication, the product of two $n$-bit numbers can be up to $2n$ bits. A DTM can perform this using $O(n)$ space for the operands and $O(n)$ space for the result and intermediate calculations. However, if we are just considering the *space required to represent the numbers and perform the calculation*, the intermediate sums can grow up to $2n$ bits. For a $O(\log n)$ space complexity, we might be looking at simpler versions or specific operations.
    *   *Correction:* Integer multiplication itself is not typically cited as an $O(\log n)$ space problem for arbitrary-sized inputs in the same way reachability is. The $O(\log n)$ space often refers to problems where the "state" of the computation can be encoded in $O(\log n)$ bits, and the problem doesn't require storing large portions of the input or intermediate results.

*   **Checking if a Number is Prime:** Using algorithms like the Miller-Rabin primality test.
    *   **Algorithm Idea:** Primality testing has been a long-standing challenge. Polynomial-time algorithms exist (AKS primality test), but they are not necessarily space-efficient. Probabilistic polynomial-time algorithms like Miller-Rabin are more practical. Miller-Rabin involves modular exponentiation and checking certain conditions. The numbers involved in these calculations can be large, but the number of bits required to represent them and intermediate values during modular exponentiation is related to the input number's size. A number $N$ requires $O(\log N)$ bits to represent. The Miller-Rabin test performs arithmetic operations on numbers up to $N$. The space required is primarily for storing these numbers and a few variables, which is $O(\log N)$ bits. If the input is an $n$-bit number, then $N \approx 2^n$, so $\log N \approx n$. Therefore, the space is $O(n)$.
    *   *Clarification:* The statement that checking primality is in L is based on the AKS primality test, which is deterministic and runs in polynomial time. The space complexity of AKS is indeed polynomial in $\log n$. More specifically, it is known that primality testing can be done in deterministic space $O((\log n)^2)$. So, if the question is about an $n$-bit number, then it's $O((\log n)^2)$ space. If we consider the input size $N$ itself, then it's $O((\log N)^2)$. However, the standard input size is the number of bits, $n$. So $O((\log n)^2)$ is more accurate. The problem "Is the input number prime?" where the input is the number itself (not its bit representation) would be in L. But typically, the input size is the number of bits.

*   **Sorting:** While sorting generally requires more space (e.g., $O(n)$ for merge sort), certain restricted versions or specific sorting algorithms might fit into L if the range of values is limited. However, general sorting of $n$ items is not in L.

*   **Recognizing Palindromes:** Given a string, is it a palindrome?
    *   **Algorithm Idea:** Compare the first character with the last, the second with the second-to-last, and so on. This requires maintaining pointers to the current characters being compared. The pointers themselves need $O(\log n)$ bits to represent their positions. The process can be done iteratively or recursively. The state needed is just the current pair of indices to compare, which takes $O(\log n)$ space.

---

#### 2.2 Class NL (Non-deterministic Logarithmic Space)

*   **Definition:** **NL** is the class of decision problems solvable by a non-deterministic Turing machine that uses at most $O(\log n)$ work tape cells.
*   **Memory Constraint:** Similar to L, the machine has limited auxiliary memory. However, it uses non-determinism.
*   **Key Properties:**
    *   NL contains L ($\mathbf{L} \subseteq \mathbf{NL}$). Any problem solvable deterministically in $O(\log n)$ space is also solvable non-deterministically in $O(\log n)$ space.
    *   NL is contained within PSPACE ($\mathbf{NL} \subseteq \mathbf{PSPACE}$).
    *   **Symmetric Property:** A crucial property of NL is that it is closed under complement. This means if a problem is in NL, its complement is also in NL. This is a non-trivial result.
*   **Non-deterministic Turing Machine Configuration:** A configuration of an NTM can be described by its state, the position of the head on the input tape, and the contents of the work tapes. For a machine using $O(\log n)$ space, the number of tape cells used is bounded by $c \log n$. The positions of heads and the contents of these cells can be represented using $O(\log n)$ bits.

**Example Problems in NL:**

*   **Reachability in a Directed Graph:** Given a directed graph $G=(V,E)$ and two vertices $u, v \in V$, is there a path from $u$ to $v$?
    *   **Algorithm Idea:** An NTM can solve this very elegantly. The NTM starts at vertex $u$. It can non-deterministically guess the next vertex in a path. If it reaches $v$, it accepts. To ensure it doesn't get stuck in an infinite loop or use too much space, the NTM can use its $O(\log n)$ work tape to keep track of the current vertex and a counter for the path length. The path length is bounded by $n$ (number of vertices). The NTM can nondeterministically explore paths, and if any path reaches $v$ within $n$ steps, it accepts. The state of the NTM can be: (current_vertex, path_length_counter). The current vertex requires $O(\log n)$ bits, and the path length counter requires $O(\log n)$ bits. Thus, the total space is $O(\log n)$.

*   **Satisfiability of Quantified Boolean Formulas (QBF) for simple cases:** For example, $\exists x_1 \forall x_2 \exists x_3 \dots \phi$. If the quantifiers alternate and start with $\exists$, it might be in NL. However, general QBF is PSPACE-complete.

*   **3-Colorability:** Can a graph be colored with 3 colors such that no two adjacent vertices have the same color?
    *   **Algorithm Idea:** This is a classic NP-complete problem. However, its space complexity is not directly obvious. A non-deterministic approach could involve guessing colors for each vertex. If vertex $v$ is assigned color $c$, we need to check if any neighbor of $v$ has color $c$. This guessing and checking process can be managed with $O(\log n)$ space. The NTM guesses a color for vertex $v_1$, then $v_2$, and so on. For each vertex, it needs to check its already-colored neighbors. The state can include the current vertex being colored and the colors assigned so far (which can be encoded efficiently).

**Connection to Reachability:** The problem of reachability in a directed graph is often used as a canonical NL-complete problem. Many other NL problems can be reduced to it.

---

#### 2.3 Class PSPACE (Polynomial Space)

*   **Definition:** **PSPACE** is the class of decision problems solvable by a deterministic Turing machine that uses at most $O(p(n))$ work tape cells, where $p(n)$ is a polynomial in $n$.
*   **Memory Constraint:** The machine has a polynomial amount of auxiliary memory. This is a significant amount compared to L and NL.
*   **Key Properties:**
    *   $\mathbf{L} \subseteq \mathbf{NL} \subseteq \mathbf{PSPACE}$.
    *   $\mathbf{P} \subseteq \mathbf{PSPACE}$ and $\mathbf{NP} \subseteq \mathbf{PSPACE}$. (Since polynomial time TMs also use polynomial space).
    *   PSPACE is believed to be strictly larger than P and NP.
*   **Space-Time Tradeoff:** Savitch's Theorem shows a strong connection between deterministic space complexity and deterministic time complexity.

**Example Problems in PSPACE:**

*   **Quantified Boolean Formulas (QBF):** Given a Boolean formula with universally ($\forall$) and existentially ($\exists$) quantified variables, is the formula true? For example: $\exists x_1 \forall x_2 \exists x_3 ( (x_1 \lor \neg x_2) \land (x_2 \lor x_3) )$.
    *   **Algorithm Idea:** A DTM can decide QBF by systematically trying all assignments for the quantified variables. For $\exists x_i$, it branches. For $\forall x_i$, it branches and checks if *all* branches are true. This recursive structure naturally leads to a polynomial space requirement. The depth of the recursion is the number of variables, and each recursive call stores the current variable assignment and the subformula. If there are $m$ variables, this can be $O(m)$ space. For a formula with $n$ as input size, $m$ is usually bounded by $n$. The actual evaluation of QBF can be done in space proportional to the number of variables, which is $O(n)$ space. Therefore, QBF is in PSPACE.
    *   **PSPACE-Completeness:** QBF is PSPACE-complete, meaning it's one of the "hardest" problems in PSPACE.

*   **Tiling Problems:** For example, the Euclidean Tiling problem: Given a finite set of tile types, can a given region be tiled using these tiles?
    *   **Algorithm Idea:** The decision to place a tile at a certain position can depend on the placement of neighboring tiles. This dependency structure can lead to complex configurations. A DTM can explore possible tilings using a strategy that requires polynomial space to keep track of which parts of the region are tiled and what tiles are available.

*   **Generalized Chess/Go (on an $n \times n$ board):** Given a position in a game like chess or Go on an $n \times n$ board, does the current player have a winning strategy?
    *   **Algorithm Idea:** A winning strategy involves a sequence of moves. The game tree can be exponentially large in terms of the number of moves. However, to determine a winning strategy, we only need to explore the game tree up to a certain depth (e.g., the maximum number of moves in a game). A DTM can use recursion to explore this tree. For each move, it needs to store the current board state and the possible next moves. If the game is guaranteed to end, the depth of the game tree might be large, but the state space of the board itself might be manageable. For an $n \times n$ board, the number of cells is $n^2$. Representing the board state requires $O(n^2)$ space. The recursion depth for determining a winning strategy can also be polynomial in the board size. Hence, these games are in PSPACE.

*   **Satisfiability of Boolean Formulas (SAT):** While SAT is NP-complete, it is also in PSPACE. This is because any problem in NP is also in PSPACE (since NP problems can be solved in polynomial time, and polynomial time implies polynomial space).

---

### 3. Relationships Between Complexity Classes

The known relationships between these classes are:

$\mathbf{L} \subseteq \mathbf{NL} \subseteq \mathbf{PSPACE}$

*   **L $\subseteq$ NL:** As mentioned, any DTM is also an NTM. If a problem is solvable in $O(\log n)$ deterministic space, it's trivially solvable in $O(\log n)$ non-deterministic space.
*   **NL $\subseteq$ PSPACE:** This is where Savitch's Theorem comes into play.

---

### 4. Savitch's Theorem

Savitch's Theorem establishes a powerful connection between deterministic and non-deterministic space complexity.

*   **Statement:** For any function $f(n) \ge \log n$, if a language $L$ is accepted by a non-deterministic Turing machine using $O(f(n))$ space, then $L$ is accepted by a deterministic Turing machine using $O((f(n))^2)$ space.
    *   **Formally:** $\mathbf{NL} \subseteq \mathbf{SPACE}((\log n)^2)$.

*   **Implication:** This theorem shows that non-determinism does not offer a significant advantage in terms of *space* complexity. While non-determinism can be exponentially faster than determinism in time (as in the P vs. NP question), it only squares the space complexity.

*   **Proof Sketch:** The proof uses a recursive approach to simulate the NTM. A DTM can check if an NTM can reach a certain configuration from another in a given number of steps. This check is done recursively. To check if an NTM $M$ can go from configuration $C_1$ to $C_2$ in at most $k$ steps:
    *   If $k=0$, check if $C_1 = C_2$.
    *   If $k=1$, check if $C_1$ can transition to $C_2$ in one step.
    *   If $k > 1$, the DTM guesses an intermediate configuration $C_{mid}$. Then, it recursively checks if $M$ can go from $C_1$ to $C_{mid}$ in at most $k/2$ steps, AND if $M$ can go from $C_{mid}$ to $C_2$ in at most $k - k/2$ steps.
    The space required for this recursive simulation is proportional to the depth of the recursion multiplied by the space needed per call. If the NTM uses $O(f(n))$ space, the number of possible configurations is exponential in $f(n)$. However, we only care about configurations reachable within $f(n)$ space. The total number of steps an NTM might take before accepting or rejecting is also exponential in the number of states and tape cells. But for a decision problem, we can bound the computation. If an NTM accepts, it must do so within a certain number of steps.
    The key idea for the space bound: the recursive function `CanReach(C_start, C_end, k_steps)` only needs to store the current configurations ($C_start, C_end$) and the number of steps ($k_steps$). If the NTM uses $f(n)$ space, then each configuration can be described using $O(f(n))$ bits. The number of steps can be bounded by something exponential in $f(n)$. The recursion depth for the simulation is $O(\log(\text{max_steps}))$. So, if $k$ is the number of steps, we need $O(\log k)$ depth. Each state in the recursive call needs $O(f(n))$ space. If $k$ is exponential in $f(n)$, then $\log k$ is polynomial in $f(n)$. If $f(n) = \log n$, then $\log k$ is also logarithmic, and the space is $O((\log n)^2)$. If $f(n)$ is any polynomial $p(n)$, then $\log k$ is polynomial in $p(n)$, and the total space is $O((p(n))^2)$.

*   **For NL:** Since $\mathbf{NL} = \mathbf{coNL}$ (the complexity class of problems whose complements are in NL), Savitch's theorem implies that $\mathbf{NL} \subseteq \mathbf{SPACE}((\log n)^2)$.
    Since $\mathbf{L} \subseteq \mathbf{NL}$, we have $\mathbf{L} \subseteq \mathbf{NL} \subseteq \mathbf{SPACE}((\log n)^2)$.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define the complexity class **L** and provide two distinct problems that are known to be in **L**. Briefly explain why one of them is in **L**.

**Question 2:**
What is the main difference between the space complexity of a deterministic Turing machine and a non-deterministic Turing machine when considering the space used?

**Question 3:**
Explain why the problem of checking reachability in a directed graph can be solved by a non-deterministic Turing machine in $O(\log n)$ space.

**Question 4:**
State Savitch's Theorem. What are its implications for the relationship between deterministic and non-deterministic space complexity classes?

**Question 5:**
Is it known whether $\mathbf{L} = \mathbf{NL}$? Justify your answer.

**Question 6:**
Which of the following complexity classes is generally considered to be the "largest" among L, NL, and PSPACE? Briefly explain why.

---

### Answers to Practice Questions

**Answer 1:**
**L** is the class of decision problems solvable by a deterministic Turing machine using at most $O(\log n)$ work tape cells, where $n$ is the input length.

*   **Problem 1: Palindrome Recognition:** Given a string, determine if it reads the same forwards and backwards.
    *   **Explanation:** A DTM can solve this by using two pointers, one starting at the beginning and one at the end of the string. It compares the characters at these pointers. If they match, it moves the pointers inwards. This requires storing the positions of the two pointers, which can be done using $O(\log n)$ bits (to represent the indices). The comparison itself is a constant-time operation. The process continues until the pointers meet or cross.
*   **Problem 2: Reachability in a DAG:** Given a directed acyclic graph $G=(V,E)$ and two vertices $u, v \in V$, determine if there is a path from $u$ to $v$.
    *   **Explanation:** (As discussed in Section 2.1) A DTM can perform a search (like DFS) starting from $u$. It needs to keep track of the current node and the path taken. By carefully managing the recursion or stack, it can be shown that this can be done using $O(\log n)$ space, especially when the graph is represented efficiently. The key is that in a DAG, there are no cycles to worry about, simplifying the state management.

**Answer 2:**
For a deterministic Turing machine, the space complexity is the maximum number of tape cells used by *that specific* computation path for a given input. For a non-deterministic Turing machine, the space complexity is defined as the maximum number of tape cells used by *any* computation path for a given input. The NTM accepts if *at least one* path accepts, but we still consider the space used by all possible paths.

**Answer 3:**
A non-deterministic Turing machine can solve reachability in a directed graph in $O(\log n)$ space by using its non-determinism to "guess" the next vertex in a path from the current vertex $u$ to the target vertex $v$.
The NTM can maintain its current vertex and a counter for the number of steps taken.
*   It starts at vertex $u$ with a step count of 0.
*   In each step, it can nondeterministically choose one of the outgoing edges from its current vertex and transition to the adjacent vertex. It increments the step count.
*   If it reaches vertex $v$, it accepts.
*   To ensure termination and bound space, the NTM can also track the path length. If the path length exceeds $n$ (the number of vertices), it can reject, as any simple path cannot be longer than $n-1$. The state of the NTM (current vertex, step count) can be stored using $O(\log n)$ bits.

**Answer 4:**
**Savitch's Theorem:** For any function $f(n) \ge \log n$, if a language $L$ is accepted by a non-deterministic Turing machine using $O(f(n))$ space, then $L$ is accepted by a deterministic Turing machine using $O((f(n))^2)$ space.
**Implications:**
*   It implies that $\mathbf{NL} \subseteq \mathbf{SPACE}((\log n)^2)$. This means that the power of non-determinism in terms of space is limited; it doesn't provide exponential savings, only a quadratic increase in space complexity for a deterministic simulation.
*   It shows that the gap between deterministic and non-deterministic space complexity is much smaller than the gap between deterministic and non-deterministic time complexity (P vs. NP).

**Answer 5:**
No, it is **not known** whether $\mathbf{L} = \mathbf{NL}$. Most computer scientists believe that $\mathbf{L} \neq \mathbf{NL}$, but there is no proof for this. However, it is known that if $\mathbf{L} = \mathbf{NL}$, then it would have significant implications for other complexity classes, potentially implying $\mathbf{P} = \mathbf{NP}$ or other major breakthroughs.

**Answer 6:**
Among **L**, **NL**, and **PSPACE**, **PSPACE** is generally considered the "largest" in terms of the types of problems it can encompass.
*   **L** is the most restrictive, requiring only logarithmic space.
*   **NL** allows for non-determinism, which is more powerful than L, but still constrained by logarithmic space.
*   **PSPACE** allows for polynomial space, which is significantly more memory than logarithmic space. Many problems that are considered computationally difficult (like QBF) reside in PSPACE. The inclusions $\mathbf{L} \subseteq \mathbf{NL} \subseteq \mathbf{PSPACE}$ demonstrate this hierarchy.

---

### Important Points to Remember:

*   **Space complexity** measures the amount of auxiliary memory used by an algorithm.
*   **L** problems are solvable with minimal memory (logarithmic).
*   **NL** problems can leverage non-determinism but are still limited to logarithmic space.
*   **PSPACE** problems can use polynomial memory, making them capable of solving a wider range of complex problems.
*   **Savitch's Theorem** ($ \mathbf{NL} \subseteq \mathbf{SPACE}((\log n)^2) $) highlights that non-determinism offers only a quadratic space advantage over determinism.
*   The relationship $\mathbf{L} \subseteq \mathbf{NL} \subseteq \mathbf{PSPACE}$ holds.
*   The question of whether $\mathbf{L} = \mathbf{NL}$ remains open.
*   Reachability in directed graphs is a canonical NL-complete problem.
*   QBF is a canonical PSPACE-complete problem.

---
This concludes Module 2's topic on Space Complexity Classes: L, NL, PSPACE.
