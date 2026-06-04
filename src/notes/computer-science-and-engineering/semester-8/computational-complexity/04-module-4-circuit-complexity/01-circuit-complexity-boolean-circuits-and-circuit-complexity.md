---
title: "Circuit Complexity - Boolean circuits and circuit complexity"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 4: Circuit Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca21"
status: "completed"
scrapedAt: "2026-05-20T17:24:02.236Z"
---
# Computational Complexity: Module 4 - Circuit Complexity

## Topic: Boolean Circuits and Circuit Complexity

---

### 1. Introduction to Boolean Circuits

**Learning Outcome:** Understand the basic model of computation using Boolean circuits.

**Key Concepts:**

*   **Boolean Circuit:** A computational model composed of interconnected logic gates that perform Boolean operations on input bits.
*   **Logic Gates:** Basic building blocks of a Boolean circuit. The most common gates are:
    *   **NOT (Inverter):** Takes one input and outputs its negation (0 becomes 1, 1 becomes 0).
    *   **AND:** Takes two or more inputs and outputs 1 if and only if all inputs are 1.
    *   **OR:** Takes two or more inputs and outputs 1 if and only if at least one input is 1.
    *   **(Optional but often used) NAND (NOT-AND):** Takes two or more inputs and outputs 0 if and only if all inputs are 1.
    *   **(Optional but often used) NOR (NOT-OR):** Takes two or more inputs and outputs 0 if and only if at least one input is 1.
*   **Inputs:** Variables representing the input bits to the circuit.
*   **Outputs:** The final result computed by the circuit.
*   **Structure:**
    *   Circuits are directed acyclic graphs (DAGs).
    *   **Input gates:** Represent input variables.
    *   **Internal gates:** Perform logical operations.
    *   **Output gates:** Produce the final output.
*   **Completeness of a Gate Set:** A set of gates is functionally complete if any Boolean function can be computed by a circuit using only gates from that set.
    *   Example: {AND, OR, NOT} is a complete set.
    *   Example: {NAND} is a complete set.
    *   Example: {AND, OR} is *not* a complete set (cannot compute NOT).

**Example:** Computing the XOR (Exclusive OR) function.

The XOR function outputs 1 if exactly one of its inputs is 1. For two inputs `a` and `b`:
*   `a XOR b = (a AND NOT b) OR (NOT a AND b)`

**Boolean Circuit for XOR:**

```
     a ----> NOT ----> AND ----> OR
           /           ^       ^
          /           /       /
         b ----> NOT ----> AND
```

*   Input gates: `a`, `b`
*   Internal gates: `NOT`, `AND`, `OR`
*   Output gate: `OR`

---

### 2. Measures of Circuit Complexity

**Learning Outcome:** Quantify the complexity of a Boolean circuit.

**Key Concepts:**

*   **Circuit Size:** The number of gates in a circuit. Typically, we count only the "functional" gates (AND, OR, NOT, etc.) and not the input "gates" that just pass through values.
*   **Circuit Depth:** The length of the longest path from an input gate to an output gate in the circuit. This corresponds to the minimum number of sequential operations required.
*   **Fan-in:** The maximum number of inputs to any gate in the circuit.
    *   **Uniform Fan-in:** All gates have the same fan-in (e.g., binary gates with fan-in 2).
    *   **Unbounded Fan-in:** Gates can have an arbitrary number of inputs.
*   **Fan-out:** The maximum number of times an output of a gate is used as an input to other gates.

**Definitions:**

*   **Size (S(C)):** The total number of gates in circuit `C`.
*   **Depth (D(C)):** The length of the longest path from any input to any output in circuit `C`.
*   **Complexity of a Boolean Function (f):** The minimum size (or depth) of a circuit that computes `f`. This is often denoted as `Size(f)` or `Depth(f)`.

**Example:** Consider the XOR circuit again.

```
     a ----> NOT ----> AND ----> OR
           /           ^       ^
          /           /       /
         b ----> NOT ----> AND
```

*   **Size:** 2 NOT gates, 2 AND gates, 1 OR gate. Total size = 5 gates.
*   **Depth:**
    *   Path 1: `a` -> NOT -> AND -> OR (Length 3)
    *   Path 2: `b` -> NOT -> AND -> OR (Length 3)
    *   Path 3: `a` -> AND (no NOT for b) - not a valid path to output from both inputs.
    *   Path 4: `b` -> AND (no NOT for a) - not a valid path to output from both inputs.
    *   The longest path is from `a` through NOT, AND, OR, or from `b` through NOT, AND, OR.
    *   Depth = 3 (if we consider input variables as level 0, NOT gates are level 1, AND gates are level 2, OR gate is level 3).

**Important Note:** The complexity of a function is the *minimum* complexity over all possible circuits computing that function.

---

### 3. Circuit Complexity Classes

**Learning Outcome:** Relate circuit complexity to complexity classes like P, NP, and NC.

**Key Concepts:**

*   **Complexity Class:** A set of computational problems that can be solved within certain resource bounds (e.g., time, space, circuit size, circuit depth).
*   **Uniformity:** For circuits to be equivalent to Turing machines, we often require *uniformity* conditions. A family of circuits $\{C_n\}_{n \in \mathbb{N}}$ is uniform if there is a polynomial-time Turing machine that, given `n`, outputs a description of circuit $C_n$. This ensures that the circuit for a given input size can be constructed efficiently.

**Complexity Classes Defined by Circuits:**

*   **P/poly (Polynomial-time computable functions with polynomial advice):** Functions computable by polynomial-size circuits. A function `f` is in P/poly if there exists a polynomial `p(n)` and a family of circuits $\{C_n\}_{n \in \mathbb{N}}$ such that:
    *   $C_n$ has at most $p(n)$ gates.
    *   $C_n$ has `n` input bits.
    *   $C_n$ computes `f(x)` for any `n`-bit input `x`.
    *   The circuit family is *uniform*.
    *   **Important:** P $\subseteq$ P/poly. Any problem solvable in polynomial time can be solved by a polynomial-size circuit.

*   **NC (Nick's Class):** Problems solvable by *polylogarithmic depth* circuits with *polynomial size*. Specifically, a problem is in NC if there exists a uniform family of circuits $\{C_n\}_{n \in \mathbb{N}}$ such that:
    *   $C_n$ computes the function for `n` bits.
    *   The size of $C_n$ is polynomial in `n` (e.g., $O(n^k)$ for some `k`).
    *   The depth of $C_n$ is polylogarithmic in `n` (e.g., $O((\log n)^m)$ for some `m`).
    *   **Significance:** NC problems are considered "efficiently parallelizable" because the depth is very small relative to the size.

*   **AC (Asymmetric/Alternating Cost):** Circuits with *unbounded fan-in* gates.
    *   **AC$^0$:** Uniform circuits with AND, OR, NOT gates (bounded fan-in), polynomial size, and constant depth. Any function computable in constant depth with polynomial size and bounded fan-in gates.
    *   **AC$^k$:** Uniform circuits with unbounded fan-in AND, OR, NOT gates, polynomial size, and depth $O(\log^k n)$.

**Relationship between Classes:**

*   **NC $\subseteq$ P/poly:** If a problem is in NC, it has polylogarithmic depth and polynomial size circuits, which are a subset of polynomial size circuits.
*   **AC$^0$ $\subseteq$ NC:** Constant depth circuits (AC$^0$) are a special case of polylogarithmic depth circuits (NC).
*   **P $\subseteq$ P/poly:** As mentioned before, problems solvable in polynomial time can be solved by polynomial-size circuits.
*   **NC = co-NC:** A significant result showing that problems solvable by polylogarithmic depth circuits with AND/OR/NOT gates are as hard as their complements in terms of circuit complexity.
*   **NP:** It is not known if NP $\subseteq$ NC or if NP $\subseteq$ P/poly. The fact that NP-complete problems are believed to require super-polynomial circuit size is a key aspect of complexity theory.

**Key Result:** The circuit complexity of **Majority function** (outputs 1 if the number of 1s in the input is greater than the number of 0s).
*   **Majority function requires Omega(n) gates.** This means no polynomial-size circuit can compute it if we only have AND, OR, NOT gates.
*   **Majority function requires Omega(log n) depth.**
*   However, if we allow **unbounded fan-in** gates, the Majority function can be computed in **AC$^0$ (constant depth)**. This highlights the importance of gate restrictions.

---

### 4. Universality and Completeness of Gate Sets

**Learning Outcome:** Understand what makes a set of gates universal for Boolean circuit construction.

**Key Concepts:**

*   **Universality of Gate Sets:** A set of logic gates is **universal** if any Boolean function can be computed by a circuit built using only gates from that set.
*   **Functionally Complete:** This is the technical term for universality in this context.

**Examples of Universal Gate Sets:**

1.  **{AND, OR, NOT}:** This is the most intuitive universal set.
    *   AND: basic conjunction.
    *   OR: basic disjunction.
    *   NOT: negation.
    *   Any Boolean function can be expressed in Disjunctive Normal Form (DNF) or Conjunctive Normal Form (CNF), which can be constructed using these gates.

2.  **{NAND}:** The NAND gate is a very powerful single gate.
    *   **NOT(a) = NAND(a, a)**
    *   **AND(a, b) = NOT(NAND(a, b)) = NAND(NAND(a, b), NAND(a, b))**
    *   **OR(a, b) = NAND(NOT(a), NOT(b)) = NAND(NAND(a, a), NAND(b, b))**
    *   Since NAND can simulate NOT, AND, and OR, it is universal.

3.  **{NOR}:** Similar to NAND, NOR is also a universal gate.
    *   **NOT(a) = NOR(a, a)**
    *   **OR(a, b) = NOT(NOR(a, b)) = NOR(NOR(a, b), NOR(a, b))**
    *   **AND(a, b) = NOR(NOT(a), NOT(b)) = NOR(NOR(a, a), NOR(b, b))**
    *   NOR can also simulate NOT, AND, and OR.

**Non-Universal Gate Sets:**

*   **{AND}:** Cannot compute NOT. If you only have AND, you can only output 1 if all inputs are 1. You cannot get a 0 from a single input 1.
*   **{OR}:** Cannot compute NOT. If you only have OR, you can only output 0 if all inputs are 0. You cannot get a 1 from a single input 0.
*   **{AND, OR}:** Cannot compute NOT.

**Importance:** Understanding universal gate sets is crucial for designing circuits efficiently, especially in hardware implementation where specific gate types might be more readily available or efficient.

---

### 5. Practice Questions and Exercises

**Question 1:**
Construct a Boolean circuit for the function $f(a, b, c) = (a \land \neg b) \lor (b \land c)$. Specify the gates used and the number of gates.

**Answer 1:**
The function is $f(a, b, c) = (a \land \neg b) \lor (b \land c)$.

Circuit construction:
1.  Compute $\neg b$ using a NOT gate.
2.  Compute $a \land \neg b$ using an AND gate with inputs $a$ and $\neg b$.
3.  Compute $b \land c$ using an AND gate with inputs $b$ and $c$.
4.  Compute the OR of the two AND gate outputs using an OR gate.

Gates used: 1 NOT, 2 AND, 1 OR.
Total number of gates = 4.

**Circuit Diagram:**
```
     a ----> AND ----> OR
           ^           ^
          /           /
     b ----> NOT ----> AND
           ^           ^
          /           /
     c --------------
```

**Question 2:**
Consider a circuit computing the AND of `n` input bits: $f(x_1, x_2, \ldots, x_n) = x_1 \land x_2 \land \ldots \land x_n$.
What is the minimum circuit size and depth using AND gates only (assuming gates can have arbitrary fan-in)?

**Answer 2:**
To compute the AND of `n` bits, we need to combine all `n` inputs.
*   **Minimum Circuit Size:** We need one gate that takes all `n` inputs and outputs their AND. So, the size is 1 (assuming we only count functional gates, and this is an `n`-input AND gate). If we were restricted to 2-input AND gates, it would be `n-1` gates arranged in a tree structure.
*   **Minimum Circuit Depth:** With an `n`-input AND gate, the depth is 1 (the single gate). If restricted to 2-input AND gates, the depth would be $\log_2 n$ (in a balanced tree).

**Question 3:**
Is the set of gates {AND, NOT} universal for Boolean circuits? Justify your answer.

**Answer 3:**
No, the set of gates {AND, NOT} is **not universal**.
Justification: This set cannot compute the OR function. If you only have AND and NOT gates, you can express functions like $\neg (a \land b)$, $a \land b$, $\neg a$, $\neg b$, $\neg a \land \neg b$, etc. However, you cannot directly obtain $a \lor b$. For instance, if $a=0$ and $b=0$, $a \lor b = 0$. With {AND, NOT}, any combination of these gates will result in an output that is either 0 or 1 when all inputs are 0 (e.g., $\neg(0 \land \neg 0) = \neg(0 \land 1) = \neg 0 = 1$), not necessarily 0. The OR function requires a way to output 1 if *any* input is 1.

**Question 4:**
Suppose a problem can be solved by a uniform family of Boolean circuits with polynomial size and constant depth (AC$^0$). Can this problem be solved in polynomial time (P)? Explain.

**Answer 4:**
Yes, if a problem can be solved by a uniform family of Boolean circuits with polynomial size and constant depth (AC$^0$), then it can be solved in polynomial time (P).

Explanation:
A uniform circuit family $\{C_n\}_{n \in \mathbb{N}}$ implies that there's a polynomial-time Turing machine that can construct the circuit $C_n$ for any input size $n$. If $C_n$ has polynomial size, say $S(n) = O(n^k)$ for some constant $k$, then constructing this circuit takes $O(n^k)$ time. Once the circuit $C_n$ is constructed, evaluating it for a specific $n$-bit input `x` takes time proportional to the number of gates, which is $O(n^k)$ for polynomial size, and even faster (constant time) for constant depth evaluation. Therefore, the total time to solve the problem for an input of size `n` is polynomial in `n`.

**Question 5:**
What is the significance of polylogarithmic depth (NC class) in terms of parallel computation?

**Answer 5:**
Problems in the NC class (solvable by uniform circuits with polynomial size and polylogarithmic depth) are considered **efficiently parallelizable**.

Significance:
*   **Parallel Time:** The depth of a circuit corresponds to the minimum number of sequential steps required to compute the output. A depth of $O((\log n)^m)$ means that the computation can be performed in a number of steps that grows very slowly with the input size, even when parallel processing is considered.
*   **Number of Processors:** With $P(n)$ processors, a circuit of depth $D(n)$ can be evaluated in $O(D(n))$ time. If $D(n)$ is polylogarithmic and the size $S(n)$ is polynomial, we can achieve efficient parallel computation. For example, if a problem is in NC, it can be solved in polylogarithmic time on a polynomial number of processors (specifically, $O(S(n))$ processors can evaluate the circuit in $O(D(n))$ time). This is in contrast to problems in P, which may require linear or polynomial time on a single processor, but might not be efficiently parallelizable if they require large depths.

---

### 6. Important Points to Remember

*   **Boolean Circuits:** A fundamental model of computation using logic gates.
*   **Complexity Measures:** Size and depth are primary measures of circuit complexity.
*   **Universality:** Sets like {NAND} or {AND, OR, NOT} are universal.
*   **P/poly:** Problems solvable by polynomial-size circuits. P $\subseteq$ P/poly.
*   **NC:** Problems solvable by polylogarithmic depth and polynomial size circuits. These are efficiently parallelizable.
*   **AC$^0$:** Constant depth, polynomial size circuits (often with unbounded fan-in). Demonstrates that relaxing depth can be powerful (e.g., Majority).
*   **Circuit Complexity vs. Time Complexity:** While related (P $\subseteq$ P/poly), they are not identical. The structure of circuits provides a different lens to view computational power. The difficulty of problems like NP-completeness is often framed in terms of the circuit complexity required to solve them.
*   **Uniformity:** Crucial for relating circuit complexity to Turing machine complexity classes.

---
