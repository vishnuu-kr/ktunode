---
title: "Node voltage methods-matrix representation-solution of network equations by matrix methods - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits:"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0d0"
status: "completed"
scrapedAt: "2026-05-23T17:34:16.951Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits

## Topic: Node Voltage Methods

Welcome, everyone, to our exploration of DC electric circuits! In this section, we're going to dive into a powerful technique for analyzing these circuits: the **Node Voltage Method**.

Think about a complex circuit with many loops and branches. Trying to figure out the voltage at every single point and the current flowing through every component using just Ohm's Law and Kirchhoff's Laws can become quite cumbersome, right? That's where systematic methods like node voltage analysis come to our rescue. It's like having a well-organized map to navigate a complicated city, rather than just wandering around hoping to find your way.

### What Exactly is a Node?

Before we jump into the method, let's clarify what we mean by a "node" in a circuit. A **node** is simply a point in a circuit where two or more circuit elements are connected. It's a junction. Imagine wires coming together; that junction is a node. In many practical circuits, we can often treat the terminals of components as nodes. The key idea is that all points connected by an ideal, zero-resistance wire are considered to be part of the *same* node, and thus, they all have the same electrical potential (voltage).

### The Core Idea: Voltage at the Nodes

The Node Voltage Method, as the name suggests, focuses on finding the **voltages at each principal node** within the circuit. What are "principal nodes"? These are the nodes where three or more components are connected. We typically pick one node and assign it a reference potential, usually **0 Volts**. This is our ground or reference point. Everything else in the circuit is then measured relative to this reference node. It’s like setting sea level as zero altitude; we measure mountains and trenches based on that.

Once we establish the voltage at all the principal nodes, we can easily determine the voltage across any component and, using Ohm's Law, the current flowing through it. This is a significant advantage: we solve for voltages, and currents become a straightforward calculation.

### Applying Kirchhoff's Current Law (KCL)

The fundamental principle behind the node voltage method is **Kirchhoff's Current Law (KCL)**. Remember KCL? It states that the algebraic sum of currents entering a node is equal to the algebraic sum of currents leaving that node. Or, more simply, the sum of all currents entering any node must be zero.

So, for each principal node (except our reference node), we'll write down a KCL equation. How do we express the currents in these equations? We express them in terms of the unknown node voltages and the resistances of the branches connected to that node.

Let's say we have a node, let's call it node 'A', and it has a voltage $V_A$. If there's a resistor $R_1$ connecting node 'A' to node 'B' (with voltage $V_B$), the current flowing from A to B through $R_1$ can be expressed as $(V_A - V_B) / R_1$ by Ohm's Law. If node 'A' is connected to our reference node (0V) via resistor $R_2$, the current from A to the reference is $(V_A - 0) / R_2 = V_A / R_2$.

By applying KCL at each principal node, we generate a system of linear equations. The number of equations will be equal to the number of principal nodes minus one (since we designate one as the reference).

### Example: A Simple Circuit

Let's illustrate this with a simple example, something you might find in a textbook like Kothari and Nagrath. Consider a circuit with two non-reference nodes, A and B, and a reference node (ground).

Imagine node A is connected to a voltage source, then to a resistor $R_1$, which connects to node B. Node B is then connected via resistor $R_2$ to ground, and also via resistor $R_3$ to node A. (This is just a conceptual example to get the idea across).

*   **Step 1: Identify Nodes:** We'd label our nodes. Let's say the junction between the voltage source and $R_1$ is node A, and the junction between $R_1$, $R_2$, and $R_3$ is node B. The negative terminal of the voltage source and the other end of $R_2$ are connected to ground, which we designate as our reference node (0V).

*   **Step 2: Assign Node Voltages:** We assign unknown voltages $V_A$ and $V_B$ to nodes A and B respectively. The reference node has a voltage of 0V.

*   **Step 3: Write KCL Equations:**
    *   **At Node A:** We'd sum the currents leaving node A. Current through $R_1$ to B: $(V_A - V_B) / R_1$. Current through $R_3$ back to A: $(V_A - V_B) / R_3$. (Oops, I made a slight error in my conceptual example. Let's assume $R_3$ connects A to B as well, for simplicity in this illustration. A more typical setup might have $R_3$ connecting A to a different point or source.) Let's rephrase: Assume $R_1$ connects A to B, $R_2$ connects B to ground, and $R_3$ connects A to ground. And maybe a voltage source is connected to node A.
    *   Let's try a more classic setup. Two nodes, A and B. Node A connected to a voltage source $V_s$ and resistor $R_1$. $R_1$ connects to node B. Node B connected to ground via $R_2$, and also connected to node A via $R_3$.
        *   At Node A: Sum of currents leaving A = 0.
            *   Current through $R_1$ to B: $(V_A - V_B) / R_1$
            *   Current through $R_3$ to B: $(V_A - V_B) / R_3$
            *   Current from voltage source to A: Let's assume the positive terminal of $V_s$ is connected to A. If $V_s$ is connected between node A and ground, then $V_A$ would be equal to $V_s$. This simplifies things, but let's consider a case where $V_s$ is connected to node A from some other reference. A better approach for node voltage is when voltage sources are *between* nodes or between a node and reference.

    Okay, let's refine the example for clarity, as you'd find in Kothari and Nagrath or Schaum's Outline.

    Consider a circuit with two independent current sources $I_1$ and $I_2$, and resistors $R_{11}$, $R_{12}$, $R_{13}$, $R_{22}$, $R_{23}$. Let node 1 and node 2 be our principal nodes, and node 3 be the reference (ground).

    *   **At Node 1:**
        *   Sum of currents leaving node 1 = 0.
        *   Current leaving through $R_{11}$ to ground: $(V_1 - 0) / R_{11} = V_1 / R_{11}$
        *   Current leaving through $R_{12}$ to node 2: $(V_1 - V_2) / R_{12}$
        *   Current leaving through $R_{13}$ to ground: $(V_1 - 0) / R_{13} = V_1 / R_{13}$
        *   Current entering from source $I_1$: $+I_1$

        So, the KCL equation at node 1 is:
        $V_1/R_{11} + (V_1 - V_2)/R_{12} + V_1/R_{13} = I_1$

    *   **At Node 2:**
        *   Sum of currents leaving node 2 = 0.
        *   Current leaving through $R_{22}$ to ground: $(V_2 - 0) / R_{22} = V_2 / R_{22}$
        *   Current leaving through $R_{23}$ to ground: $(V_2 - 0) / R_{23} = V_2 / R_{23}$
        *   Current leaving through $R_{12}$ to node 1: $(V_2 - V_1) / R_{12}$
        *   Current entering from source $I_2$: $+I_2$

        So, the KCL equation at node 2 is:
        $(V_2 - V_1)/R_{12} + V_2/R_{22} + V_2/R_{23} = I_2$

    Notice how each current is expressed as a difference in voltage divided by resistance. If a resistor is connected to the reference node, the voltage difference is simply the node voltage itself.

### Matrix Representation

Now, this is where things get really organized, especially for larger circuits. Our system of linear equations can be neatly expressed in matrix form. This is a crucial concept, tying into **Course Outcome CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. Understanding matrix methods allows us to efficiently solve for the unknown node voltages, which directly helps in determining currents and voltages across circuit elements.

Let's rearrange our KCL equations into a standard form:

**At Node 1:**
$V_1 (1/R_{11} + 1/R_{12} + 1/R_{13}) - V_2 (1/R_{12}) = I_1$

**At Node 2:**
$-V_1 (1/R_{12}) + V_2 (1/R_{12} + 1/R_{22} + 1/R_{23}) = I_2$

We can represent these equations in the matrix form: **AX = B**, where:

*   **A** is the **coefficient matrix**. Its elements are the conductances (1/resistance) and their negative values.
*   **X** is the **unknowns vector**, containing the node voltages ($V_1, V_2, \dots$).
*   **B** is the **constants vector**, containing the independent current sources.

For our example:

```
[ (1/R11 + 1/R12 + 1/R13)   -1/R12      ] [ V1 ]   [ I1 ]
[ -1/R12                      (1/R12 + 1/R22 + 1/R23) ] [ V2 ] = [ I2 ]
```

Let's denote $G_{ij} = 1/R_{ij}$ (conductance between node i and node j) and $G_{ii} = \sum_{k} 1/R_{ik}$ (sum of conductances connected to node i). Let $I_i$ be the net current entering node i.

The general form of the KCL equation at node 'k' is:
$\sum_{j} G_{kj} (V_k - V_j) = I_k$

Where:
*   $V_k$ is the voltage at node k.
*   $V_j$ is the voltage at an adjacent node j.
*   $G_{kj}$ is the conductance between node k and node j.
*   If node k is connected to the reference (ground), the term becomes $G_{k0} (V_k - 0) = G_{k0} V_k$.
*   $I_k$ is the total current entering node k from independent current sources.

Expanding and grouping by node voltages:
For node k: $V_k \sum_{j \ne k} G_{kj} - \sum_{j \ne k} G_{kj} V_j = I_k$

If there are 'n' principal nodes, we can write this as an $n \times n$ matrix equation:

$$
\begin{bmatrix}
G_{11} & G_{12} & \dots & G_{1n} \\
G_{21} & G_{22} & \dots & G_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
G_{n1} & G_{n2} & \dots & G_{nn}
\end{bmatrix}
\begin{bmatrix}
V_1 \\
V_2 \\
\vdots \\
V_n
\end{bmatrix}
=
\begin{bmatrix}
I_1 \\
I_2 \\
\vdots \\
I_n
\end{bmatrix}
$$

Here:
*   $G_{kk}$ is the sum of all conductances connected to node k (the "self-conductance").
*   $G_{kj}$ (for $k \ne j$) is the negative of the conductance connecting node k and node j.
*   $I_k$ is the algebraic sum of all independent current sources connected to node k. If a current source enters the node, it's positive; if it leaves, it's negative.

Remember this: the matrix **G** is symmetric if only resistors are present. This is a useful observation from many textbooks like Del Toro's "Electrical Engineering Fundamentals."

### Solution of Network Equations by Matrix Methods

So, we have our equation **AX = B**. How do we solve for **X** (our node voltages)? There are several ways to solve a system of linear equations represented in matrix form.

1.  **Matrix Inversion:**
    If we can find the inverse of matrix **A**, denoted as **A**⁻¹, then we can solve for **X**:
    **AX = B**
    **A**⁻¹ **AX = A**⁻¹ **B**
    **IX = A**⁻¹ **B**
    **X = A**⁻¹ **B**

    The inverse of a matrix can be calculated using various methods (e.g., using the adjoint matrix and determinant). This is mathematically sound but can be computationally intensive for large matrices.

2.  **Cramer's Rule:**
    Cramer's rule is another analytical method. For a system **AX = B**, the solution for $V_k$ is given by $V_k = \det(A_k) / \det(A)$, where $A_k$ is the matrix **A** with its k-th column replaced by the vector **B**. This is good for understanding the relationships but also becomes complex for larger systems.

3.  **Numerical Methods (Iterative Solutions):**
    For circuits with many nodes, direct methods like inversion or Cramer's rule can be too slow or require too much memory. Numerical methods are often preferred.

    *   **Gauss-Seidel Method (an iterative approach):** This is a popular iterative method for solving linear systems. Starting with an initial guess for the node voltages, we repeatedly update each voltage using the equations.
        From the KCL equation for node k:
        $V_k = \frac{1}{G_{kk}} \left( I_k - \sum_{j \ne k} G_{kj} V_j \right)$

        In the Gauss-Seidel method, when we calculate $V_k$ at iteration $(m+1)$, we use the most recently calculated values for $V_j$ from the current iteration. If $j < k$, we use $V_j^{(m+1)}$; if $j > k$, we use $V_j^{(m)}$.

        This process is repeated until the voltages converge to a stable solution (i.e., the change in voltage between successive iterations is very small). This method is particularly effective when the diagonal elements of the matrix **G** are significantly larger than the off-diagonal elements (a property often found in practical circuits).

    *   **Gaussian Elimination:** This is a direct method. It systematically transforms the augmented matrix [A | B] into row-echelon form, making it easy to solve using back-substitution. It's a fundamental algorithm taught in linear algebra.

**Why is this important for your learning?** It directly relates to **CO1** by providing a systematic way to *apply* circuit laws. For exam purposes, you might be asked to set up the matrix equations, or solve a small system using inversion or Cramer's rule. Understanding the setup is key.

### Numerical Problems

Let's work through a numerical example, which is often how these concepts are tested.

**Problem:** Find the node voltages $V_1$ and $V_2$ in the circuit shown below using the node voltage method.

(Imagine a circuit diagram here:
*   Node 1 connected to ground via $R_1 = 2 \Omega$.
*   Node 1 connected to node 2 via $R_2 = 1 \Omega$.
*   Node 2 connected to ground via $R_3 = 3 \Omega$.
*   A current source $I_1 = 5A$ entering node 1.
*   A current source $I_2 = 2A$ entering node 2.)

**Solution:**

1.  **Identify Nodes:** We have two principal nodes, labeled 1 and 2. We designate the bottom node as the reference (ground, 0V).

2.  **Assign Node Voltages:** Let the voltages at node 1 and node 2 be $V_1$ and $V_2$ respectively.

3.  **Write KCL Equations:**

    *   **At Node 1:**
        Sum of currents leaving node 1 = 0.
        Current through $R_1$ to ground: $(V_1 - 0) / R_1 = V_1 / 2$
        Current through $R_2$ to node 2: $(V_1 - V_2) / R_2 = (V_1 - V_2) / 1$
        Current source $I_1$ is entering node 1, so it's +5A leaving (or -5A entering). Let's stick to the convention: sum of currents *leaving* node = 0. So, the source *provides* current *to* the node. If we are writing currents *leaving*, then a source *entering* is a negative current leaving. Or, simpler: sum of currents entering = sum of currents leaving.
        Let's use the convention: Sum of currents *leaving* the node is zero.
        Current leaving through $R_1$: $V_1/2$
        Current leaving through $R_2$: $(V_1 - V_2)/1$
        Current source $I_1$ *enters* node 1. So, as a current *leaving*, it is $-I_1 = -5A$.

        KCL at Node 1: $V_1/2 + (V_1 - V_2)/1 = -5$
        Multiply by 2 to clear fractions: $V_1 + 2(V_1 - V_2) = -10$
        $V_1 + 2V_1 - 2V_2 = -10$
        $3V_1 - 2V_2 = -10$  (Equation 1)

    *   **At Node 2:**
        Sum of currents leaving node 2 = 0.
        Current through $R_2$ to node 1: $(V_2 - V_1) / R_2 = (V_2 - V_1) / 1$
        Current through $R_3$ to ground: $(V_2 - 0) / R_3 = V_2 / 3$
        Current source $I_2$ *enters* node 2. So, as a current *leaving*, it is $-I_2 = -2A$.

        KCL at Node 2: $(V_2 - V_1)/1 + V_2/3 = -2$
        Multiply by 3 to clear fractions: $3(V_2 - V_1) + V_2 = -6$
        $3V_2 - 3V_1 + V_2 = -6$
        $-3V_1 + 4V_2 = -6$  (Equation 2)

4.  **Matrix Representation:**
    We have the system of equations:
    1) $3V_1 - 2V_2 = -10$
    2) $-3V_1 + 4V_2 = -6$

    In matrix form **AX = B**:
    $$
    \begin{bmatrix}
    3 & -2 \\
    -3 & 4
    \end{bmatrix}
    \begin{bmatrix}
    V_1 \\
    V_2
    \end{bmatrix}
    =
    \begin{bmatrix}
    -10 \\
    -6
    \end{bmatrix}
    $$

    Here, $A = \begin{bmatrix} 3 & -2 \\ -3 & 4 \end{bmatrix}$, $X = \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$, $B = \begin{bmatrix} -10 \\ -6 \end{bmatrix}$.

5.  **Solution using Matrix Inversion:**
    First, find the determinant of A:
    $\det(A) = (3 \times 4) - (-2 \times -3) = 12 - 6 = 6$.

    Next, find the inverse of A, $A^{-1}$:
    For a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the inverse is $\frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.

    So, $A^{-1} = \frac{1}{6} \begin{bmatrix} 4 & 2 \\ 3 & 3 \end{bmatrix} = \begin{bmatrix} 4/6 & 2/6 \\ 3/6 & 3/6 \end{bmatrix} = \begin{bmatrix} 2/3 & 1/3 \\ 1/2 & 1/2 \end{bmatrix}$.

    Now, calculate **X = A**⁻¹ **B**:
    $$
    \begin{bmatrix}
    V_1 \\
    V_2
    \end{bmatrix}
    =
    \begin{bmatrix}
    2/3 & 1/3 \\
    1/2 & 1/2
    \end{bmatrix}
    \begin{bmatrix}
    -10 \\
    -6
    \end{bmatrix}
    $$

    $V_1 = (2/3 \times -10) + (1/3 \times -6) = -20/3 - 6/3 = -26/3$ Volts.
    $V_2 = (1/2 \times -10) + (1/2 \times -6) = -10/2 - 6/2 = -16/2 = -8$ Volts.

    So, $V_1 = -26/3 \approx -8.67$ V and $V_2 = -8$ V.

    **Wait!** Let me recheck my KCL setup for current sources. A common convention is that positive currents *leave* the node. If a source *enters* the node, it represents a negative current leaving.

    Let's rewrite the KCL using the *standard* formulation where $G_{kk}$ is the sum of conductances connected to node k, and $G_{kj}$ ($k \neq j$) is the negative of conductance between k and j, and $I_k$ is the net current *entering* node k.

    At Node 1:
    Conductances connected to node 1: $1/R_1$ (to ground) and $1/R_2$ (to node 2).
    $G_{11} = 1/R_1 + 1/R_2 = 1/2 + 1/1 = 1/2 + 2/2 = 3/2$.
    Conductance between node 1 and 2: $G_{12} = -1/R_2 = -1/1 = -1$.

    At Node 2:
    Conductances connected to node 2: $1/R_2$ (to node 1) and $1/R_3$ (to ground).
    $G_{22} = 1/R_2 + 1/R_3 = 1/1 + 1/3 = 3/3 + 1/3 = 4/3$.
    Conductance between node 2 and 1: $G_{21} = -1/R_2 = -1/1 = -1$.

    Current sources:
    $I_1 = 5A$ enters node 1. So, $I_1 = 5A$.
    $I_2 = 2A$ enters node 2. So, $I_2 = 2A$.

    The matrix equation is:
    $$
    \begin{bmatrix}
    G_{11} & G_{12} \\
    G_{21} & G_{22}
    \end{bmatrix}
    \begin{bmatrix}
    V_1 \\
    V_2
    \end{bmatrix}
    =
    \begin{bmatrix}
    I_1 \\
    I_2
    \end{bmatrix}
    $$
    $$
    \begin{bmatrix}
    3/2 & -1 \\
    -1 & 4/3
    \end{bmatrix}
    \begin{bmatrix}
    V_1 \\
    V_2
    \end{bmatrix}
    =
    \begin{bmatrix}
    5 \\
    2
    \end{bmatrix}
    $$

    Let's solve this using Cramer's rule for verification.
    $\det(A) = (3/2 \times 4/3) - (-1 \times -1) = (12/6) - 1 = 2 - 1 = 1$.

    For $V_1$: Replace the first column with B.
    $$
    A_1 = \begin{bmatrix}
    5 & -1 \\
    2 & 4/3
    \end{bmatrix}
    $$
    $\det(A_1) = (5 \times 4/3) - (-1 \times 2) = 20/3 + 2 = 20/3 + 6/3 = 26/3$.
    $V_1 = \det(A_1) / \det(A) = (26/3) / 1 = 26/3$ Volts.

    For $V_2$: Replace the second column with B.
    $$
    A_2 = \begin{bmatrix}
    3/2 & 5 \\
    -1 & 2
    \end{bmatrix}
    $$
    $\det(A_2) = (3/2 \times 2) - (5 \times -1) = 3 - (-5) = 3 + 5 = 8$.
    $V_2 = \det(A_2) / \det(A) = 8 / 1 = 8$ Volts.

    **So, $V_1 = 26/3$ V and $V_2 = 8$ V.** This feels much more like typical results, and the determinant of 1 simplifies the calculation nicely, often chosen for example problems.

    **Important Check:** Let's verify these voltages with KCL at node 1.
    Current leaving through $R_1$: $V_1/R_1 = (26/3) / 2 = 26/6 = 13/3$ A.
    Current leaving through $R_2$: $(V_1 - V_2) / R_2 = (26/3 - 8) / 1 = (26/3 - 24/3) / 1 = 2/3$ A.
    Sum of currents leaving = $13/3 + 2/3 = 15/3 = 5$ A.
    The current source $I_1$ enters node 1 with 5A. So, sum of currents leaving = sum of currents entering. This checks out!

    This rigorous approach using the standard matrix formulation is essential. Always pay close attention to the sign conventions for current sources and the structure of the matrix elements. This is a common area where students might make mistakes.

### Connection to Course Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.**
    The node voltage method is a direct application of KCL. By setting up and solving the system of linear equations, we are applying these fundamental concepts to find unknown quantities (voltages). The matrix representation provides a systematic and scalable way to do this, which is crucial for analyzing more complex circuits that might appear in exams or real-world applications. This method helps us understand the behavior of circuits under DC conditions.

### Recap and Key Takeaways

*   The Node Voltage Method solves for voltages at circuit nodes by applying KCL.
*   A reference node (ground) is always chosen as 0V.
*   KCL equations are written for each non-reference node in terms of node voltages and branch conductances.
*   The system of KCL equations can be represented as **AX = B**, where **A** is the conductance matrix, **X** is the vector of node voltages, and **B** is the vector of current sources.
*   The matrix **A** has diagonal elements $G_{kk}$ (sum of conductances connected to node k) and off-diagonal elements $G_{kj} = -1/R_{kj}$ (negative of conductance between node k and j).
*   The vector **B** contains the net current sources entering each node.
*   The system can be solved using matrix inversion, Cramer's rule, or iterative numerical methods.
*   Mastering the setup of the KCL equations and the corresponding matrix is key to success.

Remember this: the node voltage method is incredibly versatile and forms the basis for many advanced circuit analysis techniques. It's a cornerstone of understanding how electrical systems behave.

---

## Sample Questions with Answers

1.  **Conceptual Question:** Explain the fundamental principle behind the Node Voltage Method.
    **Answer:** The Node Voltage Method is based on Kirchhoff's Current Law (KCL). KCL states that the algebraic sum of currents entering any node in an electrical circuit is equal to the algebraic sum of currents leaving that node (or, equivalently, the sum of all currents at a node is zero). The method focuses on finding the unknown voltage at each principal node by expressing branch currents in terms of these node voltages and branch resistances, and then applying KCL.

2.  **Conceptual Question:** What is the significance of the "reference node" in node voltage analysis?
    **Answer:** The reference node, often called the ground node, is assigned a voltage of 0 Volts. This node serves as a common reference point for all other node voltages in the circuit. By establishing a reference, we convert all potential differences into absolute node voltages, simplifying the application of KCL and Ohm's Law. Without a reference, we would only be able to determine voltage differences between nodes, not their absolute potentials.

3.  **Problem-Solving Question:** For the circuit given below, write down the node voltage equations and the corresponding matrix equation **AX = B**. Do not solve for the voltages.

    *(Imagine a circuit diagram with three nodes: Node 1, Node 2, and Node 3 (ground).
    *   Node 1 connected to ground via $R_1 = 5 \Omega$.
    *   Node 1 connected to Node 2 via $R_2 = 2 \Omega$.
    *   Node 2 connected to ground via $R_3 = 4 \Omega$.
    *   A current source $I_1 = 10A$ entering Node 1.
    *   A current source $I_2 = 3A$ leaving Node 2.)*

    **Answer:**
    Let $V_1$ and $V_2$ be the voltages at Node 1 and Node 2, respectively. Node 3 is the reference (0V).

    **KCL at Node 1:**
    Currents leaving Node 1:
    *   Through $R_1$ to ground: $V_1 / R_1 = V_1 / 5$
    *   Through $R_2$ to Node 2: $(V_1 - V_2) / R_2 = (V_1 - V_2) / 2$
    Current source $I_1$ enters Node 1, so it's $-I_1 = -10A$ as a current leaving.

    Equation: $V_1/5 + (V_1 - V_2)/2 = -10$
    Multiply by 10: $2V_1 + 5(V_1 - V_2) = -100$
    $2V_1 + 5V_1 - 5V_2 = -100$
    $7V_1 - 5V_2 = -100$

    **KCL at Node 2:**
    Currents leaving Node 2:
    *   Through $R_2$ to Node 1: $(V_2 - V_1) / R_2 = (V_2 - V_1) / 2$
    *   Through $R_3$ to ground: $V_2 / R_3 = V_2 / 4$
    Current source $I_2$ leaves Node 2, so it's $+I_2 = +3A$ as a current leaving.

    Equation: $(V_2 - V_1)/2 + V_2/4 = 3$
    Multiply by 4: $2(V_2 - V_1) + V_2 = 12$
    $2V_2 - 2V_1 + V_2 = 12$
    $-2V_1 + 3V_2 = 12$

    **Matrix Equation AX = B:**
    $$
    \begin{bmatrix}
    7 & -5 \\
    -2 & 3
    \end{bmatrix}
    \begin{bmatrix}
    V_1 \\
    V_2
    \end{bmatrix}
    =
    \begin{bmatrix}
    -100 \\
    12
    \end{bmatrix}
    $$

4.  **Problem-Solving Question:** Solve the following system of equations using matrix inversion to find $V_1$ and $V_2$.

    $2V_1 - V_2 = 10$
    $-V_1 + 3V_2 = -5$

    **Answer:**
    The matrix equation is:
    $$
    A = \begin{bmatrix}
    2 & -1 \\
    -1 & 3
    \end{bmatrix}, \quad X = \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}, \quad B = \begin{bmatrix} 10 \\ -5 \end{bmatrix}
    $$

    1.  **Determinant of A:**
        $\det(A) = (2 \times 3) - (-1 \times -1) = 6 - 1 = 5$.

    2.  **Inverse of A:**
        $A^{-1} = \frac{1}{5} \begin{bmatrix} 3 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} 3/5 & 1/5 \\ 1/5 & 2/5 \end{bmatrix}$.

    3.  **Solve for X:**
        $X = A^{-1} B$
        $$
        \begin{bmatrix}
        V_1 \\
        V_2
        \end{bmatrix}
        =
        \begin{bmatrix}
        3/5 & 1/5 \\
        1/5 & 2/5
        \end{bmatrix}
        \begin{bmatrix}
        10 \\
        -5
        \end{bmatrix}
        $$
        $V_1 = (3/5 \times 10) + (1/5 \times -5) = 30/5 - 5/5 = 6 - 1 = 5$ Volts.
        $V_2 = (1/5 \times 10) + (2/5 \times -5) = 10/5 - 10/5 = 2 - 2 = 0$ Volts.

        **Solution:** $V_1 = 5$ V and $V_2 = 0$ V.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
