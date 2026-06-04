---
title: "Analysis of DC Electric circuits: Mesh current method – matrix representation - Solution of network equations."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94a0"
status: "completed"
scrapedAt: "2026-05-23T16:02:24.420Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits

## Topic: Analysis of DC Electric Circuits: Mesh Current Method – Matrix Representation – Solution of Network Equations

Welcome, everyone, to our journey into the fascinating world of electrical and electronics engineering! Today, we're diving deep into a crucial topic: **analyzing DC electric circuits**. Specifically, we'll be mastering the **Mesh Current Method**, understanding how to represent these circuits using **matrices**, and then learning how to **solve the resulting network equations**. This is foundational stuff, and by the end of this session, you'll be able to confidently tackle complex DC circuits, a skill that directly relates to our **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**.

### The Need for Systematic Analysis: Beyond Simple Series and Parallel

We've already touched upon basic series and parallel circuits. You know how to add resistances in series, right? And how to use the reciprocal rule for parallel resistors. That's like navigating a straight road. But real-world circuits are often more like a city map – with multiple loops and branches. Just applying Ohm's law directly to every single resistor in a complex network can quickly become overwhelming. We need a more systematic, powerful approach.

Think about it like this: imagine you're trying to figure out how much water flows through different pipes in a building's plumbing system. If it's just one pipe from the tank to a tap, it’s easy. But if there are multiple pipes branching out, feeding different floors, and some pipes might even loop back, you need a proper method to calculate the flow in each segment. That's exactly what circuit analysis techniques do for us, but with electric current instead of water.

The **Mesh Current Method** is one such powerful technique. It’s particularly elegant because it simplifies the process of setting up equations for circuits with multiple loops. As authors like D. P. Kothari and I. J. Nagrath mention in their foundational texts, systematic methods are key to handling circuit complexity.

### Understanding the Mesh Current Method

So, what exactly is a "mesh"? In circuit analysis, a **mesh** is a fundamental, non-reducible loop within a circuit diagram. It’s like a closed path that doesn't contain any other closed paths within it.

The **Mesh Current Method**, sometimes also referred to as the loop analysis method, involves assigning an independent current to each mesh in the circuit. These assigned currents are assumed to flow around the respective meshes. The beauty of this method is that it directly leverages Kirchhoff's Voltage Law (KVL). Remember KVL? The sum of voltage drops around any closed loop in a circuit is zero.

**How does it work?**

1.  **Identify the Meshes:** First, we need to visually identify all the independent meshes in the circuit. A mesh is a planar loop that does not enclose any other loop.
2.  **Assign Mesh Currents:** For each identified mesh, we assign a hypothetical current. We usually denote these currents with symbols like $I_1, I_2, I_3$, etc., and assume they flow in a consistent direction (say, clockwise) around their respective meshes.
3.  **Apply KVL to Each Mesh:** For each mesh, we write a KVL equation. In this equation, the voltages are expressed in terms of the assigned mesh currents and the circuit elements (resistors, voltage sources, etc.). This is where the real power of the mesh method comes in.
    *   **Voltage Drop across a Resistor:** If a resistor $R$ is exclusively part of a single mesh (say, mesh 1), the voltage drop across it due to its mesh current $I_1$ is simply $I_1R$.
    *   **Voltage Drop across a Resistor Shared by Two Meshes:** This is the crucial part. If a resistor $R$ is common to two adjacent meshes, say mesh 1 and mesh 2, and their assumed currents are $I_1$ and $I_2$ respectively, then the *actual* current flowing through that shared resistor will be the difference between these two mesh currents. For example, if $I_1$ and $I_2$ are both assumed to flow clockwise through the shared resistor, and $I_1$ is larger, the net current through the resistor will be $(I_1 - I_2)$ in the direction of $I_1$. The voltage drop across this resistor will then be $(I_1 - I_2)R$.
    *   **Voltage Sources:** Voltage sources contribute directly to the voltage sum in the KVL equation. If a voltage source $V$ is traversed in the direction of current flow (from – to +), it adds to the voltage rise, while traversing from + to – adds to the voltage drop. It's often easier to think about the polarity: if the assumed mesh current flows from the positive terminal to the negative terminal of a voltage source within its mesh, it's a voltage drop. If it flows from negative to positive, it's a voltage rise.

4.  **Formulate the System of Equations:** By applying KVL to each mesh, we'll end up with a system of linear equations where the unknowns are the mesh currents ($I_1, I_2, I_3$, etc.).
5.  **Solve the System:** The final step is to solve this system of equations to find the values of the mesh currents. Once we have the mesh currents, we can easily calculate the actual current through any branch and the voltage across any element in the circuit.

### An Everyday Analogy: Navigating a City with Multiple Roads

Let's try an analogy. Imagine you are a courier in a city with several interconnected streets and roundabouts (intersections). You want to deliver packages, and you need to know how much distance you cover on each specific street segment.

*   **Meshes** are like the main circular routes or distinct areas of the city you can traverse without retracing your steps within that specific loop.
*   **Mesh Currents** are like hypothetical "flows" you assign to each of these routes. You might say, "I'll send a principal flow $I_1$ around Route A, and a principal flow $I_2$ around Route B."
*   **Shared Resistors** are like streets that are part of *both* Route A and Route B. The actual traffic on that shared street is the net flow from the two routes. If your Route A flow is strong and your Route B flow is weak in the same direction on that street, the street will be more utilized by your Route A flow.
*   **KVL** is like summing up all the directional movements. If you move along a route, you might cover some distance on street X, then street Y, then street Z, and perhaps pass a landmark that gives you energy (like a voltage source). The sum of these movements and energy gains/losses around a complete route must balance out.

By assigning these hypothetical flows to the main routes, you can then calculate the actual traffic on every single street segment.

### Matrix Representation: Organizing the Equations

Now, as our circuits get more complex, the system of linear equations can become quite large. This is where **matrix representation** comes into play. Matrices are simply rectangular arrays of numbers, symbols, or expressions arranged in rows and columns. They provide a concise and organized way to represent and solve systems of linear equations.

Let’s consider a circuit with $N$ meshes. We'll have $N$ mesh currents, say $I_1, I_2, \ldots, I_N$. Our KVL analysis will yield $N$ linear equations:

$a_{11}I_1 + a_{12}I_2 + \ldots + a_{1N}I_N = v_1$
$a_{21}I_1 + a_{22}I_2 + \ldots + a_{2N}I_N = v_2$
...
$a_{N1}I_1 + a_{N2}I_2 + \ldots + a_{NN}I_N = v_N$

Here, $a_{ij}$ represents the coefficient associated with the interaction between mesh current $I_j$ and mesh current $I_i$, and $v_i$ represents the net voltage source in mesh $i$.

This system of equations can be neatly written in matrix form as:

$$ \mathbf{A} \mathbf{I} = \mathbf{V} $$

Where:
*   $\mathbf{A}$ is the **coefficient matrix** (an $N \times N$ matrix) whose elements are $a_{ij}$.
*   $\mathbf{I}$ is the **unknowns vector** (an $N \times 1$ column matrix) containing the mesh currents:
    $$ \mathbf{I} = \begin{bmatrix} I_1 \\ I_2 \\ \vdots \\ I_N \end{bmatrix} $$
*   $\mathbf{V}$ is the **source vector** (an $N \times 1$ column matrix) containing the net voltage sources:
    $$ \mathbf{V} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_N \end{bmatrix} $$

**Constructing the Coefficient Matrix $\mathbf{A}$:**

The elements $a_{ij}$ of the coefficient matrix have specific meanings:

*   **Diagonal Elements ($a_{ii}$):** These represent the total resistance of all the resistors within mesh $i$. For example, $a_{11}$ is the sum of all resistances in mesh 1. These are always positive.
*   **Off-Diagonal Elements ($a_{ij}$ where $i \neq j$):** These represent the negative of the total resistance of resistors common to both mesh $i$ and mesh $j$. If meshes $i$ and $j$ do not share any resistors, then $a_{ij} = 0$. Remember the minus sign! This is where many students make mistakes. If resistor $R_{12}$ is common to mesh 1 and mesh 2, then $a_{12} = -R_{12}$ and $a_{21} = -R_{12}$.

**Constructing the Source Vector $\mathbf{V}$:**

The elements $v_i$ of the source vector represent the net voltage sources in mesh $i$.
*   If a voltage source $V$ in mesh $i$ has its positive terminal aligned with the assumed direction of $I_i$, it contributes positively to $v_i$.
*   If a voltage source $V$ in mesh $i$ has its negative terminal aligned with the assumed direction of $I_i$, it contributes negatively to $v_i$.
*   If there are multiple voltage sources in a mesh, $v_i$ is the algebraic sum of these sources.
*   Current sources can also be incorporated, but they typically require conversion to their Thevenin equivalent voltage sources or a slightly modified approach, which we might explore later if time permits. For now, focus on voltage sources.

This matrix formulation, as discussed in texts like Schaum's Outline of Basic Electrical Engineering, is incredibly powerful because it allows us to use established mathematical techniques for solving linear systems. This directly helps us achieve **CO1** by providing a structured way to solve complex DC circuits.

### Solution of Network Equations

Once we have the matrix equation $\mathbf{A} \mathbf{I} = \mathbf{V}$, we need to solve for the unknown current vector $\mathbf{I}$. There are several methods for this:

1.  **Matrix Inversion:** If the matrix $\mathbf{A}$ is invertible (which it usually is for well-defined circuits), we can find the inverse matrix $\mathbf{A}^{-1}$. Then, the solution for $\mathbf{I}$ is:
    $$ \mathbf{I} = \mathbf{A}^{-1} \mathbf{V} $$
    Calculating the inverse of a matrix can be done manually for small matrices (2x2, 3x3) using methods like finding the adjugate matrix and dividing by the determinant. For larger matrices, computational tools are used.

2.  **Cramer's Rule:** This method uses determinants to solve for each unknown variable. For a system with $N$ variables, we calculate $N+1$ determinants. For example, to find $I_k$, we replace the $k$-th column of the coefficient matrix $\mathbf{A}$ with the source vector $\mathbf{V}$, call this new matrix $\mathbf{A}_k$, and then:
    $$ I_k = \frac{\det(\mathbf{A}_k)}{\det(\mathbf{A})} $$
    While conceptually clear, calculating determinants for larger matrices can be tedious manually.

3.  **Gaussian Elimination (Row Reduction):** This is a systematic procedure to transform the augmented matrix $[\mathbf{A} | \mathbf{V}]$ into row-echelon form, from which the values of the unknowns can be easily found. This is generally the most practical method for manual calculation for slightly larger systems.

**Exam Tip:** For exams, you'll often be asked to set up the mesh equations and the matrix representation. Solving 2x2 or possibly 3x3 systems might be expected, so be comfortable with basic matrix inversion or Cramer's rule for these cases. For larger circuits, setting up the matrix is usually the primary task.

### Example: A Simple Two-Mesh Circuit

Let's walk through an example to solidify our understanding. Consider the following circuit:

[Imagine a circuit diagram here with two loops (meshes).
Mesh 1 contains a 5 Ohm resistor, a 2 Ohm resistor, and a 10V voltage source (positive terminal up).
Mesh 2 is adjacent to Mesh 1 and contains a 2 Ohm resistor (shared with Mesh 1), a 3 Ohm resistor, and a 5V voltage source (positive terminal down, relative to the clockwise mesh current).
Let's assume the clockwise direction for both mesh currents, $I_1$ and $I_2$.]

**Step 1: Identify Meshes and Assign Currents**
We have two meshes. Let's assign clockwise mesh currents $I_1$ to the left mesh and $I_2$ to the right mesh.

**Step 2: Apply KVL to Each Mesh**

*   **Mesh 1 (Left Loop):**
    *   Start from the bottom-left corner, moving clockwise.
    *   Across the 10V source: we move from – to +, so it’s a voltage rise of +10V.
    *   Across the 5 Ohm resistor: this resistor is only in mesh 1. Voltage drop is $5I_1$.
    *   Across the 2 Ohm resistor (shared): this resistor is common to mesh 1 and mesh 2. The current from mesh 1 is $I_1$ (clockwise), and from mesh 2 is $I_2$ (clockwise). The net current through the 2 Ohm resistor is $(I_1 - I_2)$. The voltage drop is $2(I_1 - I_2)$.
    *   KVL Equation for Mesh 1: $10 - 5I_1 - 2(I_1 - I_2) = 0$
    *   Simplifying: $10 - 5I_1 - 2I_1 + 2I_2 = 0$
    *   $7I_1 - 2I_2 = 10$

*   **Mesh 2 (Right Loop):**
    *   Start from the bottom-right corner, moving clockwise.
    *   Across the 2 Ohm resistor (shared): current from mesh 2 is $I_2$, current from mesh 1 is $I_1$. Net current is $(I_2 - I_1)$. Voltage drop is $2(I_2 - I_1)$.
    *   Across the 3 Ohm resistor: this resistor is only in mesh 2. Voltage drop is $3I_2$.
    *   Across the 5V source: we move from + to –, so it’s a voltage drop of -5V.
    *   KVL Equation for Mesh 2: $2(I_2 - I_1) + 3I_2 - 5 = 0$
    *   Simplifying: $2I_2 - 2I_1 + 3I_2 - 5 = 0$
    *   $-2I_1 + 5I_2 = 5$

**Step 3: Formulate the Matrix Equation**

We have the system of equations:
1.  $7I_1 - 2I_2 = 10$
2.  $-2I_1 + 5I_2 = 5$

In matrix form $\mathbf{A} \mathbf{I} = \mathbf{V}$:

$$ \begin{bmatrix} 7 & -2 \\ -2 & 5 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 10 \\ 5 \end{bmatrix} $$

Here:
*   $\mathbf{A} = \begin{bmatrix} 7 & -2 \\ -2 & 5 \end{bmatrix}$ (Note the positive diagonal elements representing total resistance in each mesh, and negative off-diagonal elements for shared resistors.)
*   $\mathbf{I} = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$
*   $\mathbf{V} = \begin{bmatrix} 10 \\ 5 \end{bmatrix}$

**Step 4: Solve the System**

Let's use matrix inversion for this 2x2 case.
First, find the determinant of $\mathbf{A}$:
$\det(\mathbf{A}) = (7 \times 5) - (-2 \times -2) = 35 - 4 = 31$.

Next, find the inverse of $\mathbf{A}$:
$$ \mathbf{A}^{-1} = \frac{1}{\det(\mathbf{A})} \begin{bmatrix} 5 & -(-2) \\ -(-2) & 7 \end{bmatrix} = \frac{1}{31} \begin{bmatrix} 5 & 2 \\ 2 & 7 \end{bmatrix} $$

Now, multiply $\mathbf{A}^{-1}$ by $\mathbf{V}$ to find $\mathbf{I}$:
$$ \mathbf{I} = \mathbf{A}^{-1} \mathbf{V} = \frac{1}{31} \begin{bmatrix} 5 & 2 \\ 2 & 7 \end{bmatrix} \begin{bmatrix} 10 \\ 5 \end{bmatrix} $$
$$ \mathbf{I} = \frac{1}{31} \begin{bmatrix} (5 \times 10) + (2 \times 5) \\ (2 \times 10) + (7 \times 5) \end{bmatrix} $$
$$ \mathbf{I} = \frac{1}{31} \begin{bmatrix} 50 + 10 \\ 20 + 35 \end{bmatrix} $$
$$ \mathbf{I} = \frac{1}{31} \begin{bmatrix} 60 \\ 55 \end{bmatrix} $$
$$ \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 60/31 \\ 55/31 \end{bmatrix} $$

So, $I_1 \approx 1.94 \, A$ and $I_2 \approx 1.77 \, A$.

**Interpreting the Results:**

*   The current through the 5 Ohm resistor is $I_1 = 60/31 \, A$.
*   The current through the 3 Ohm resistor is $I_2 = 55/31 \, A$.
*   The current through the shared 2 Ohm resistor is $I_{12} = I_1 - I_2 = (60/31) - (55/31) = 5/31 \, A$. Since $I_1 > I_2$, the current flows from left to right through this resistor.

This method, as detailed by Chinmoy Saha et al. in "Basic Electronics: Principles and Applications," provides a structured way to find these currents. It directly helps in achieving **CO1**.

### Connection to Course Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits:** The Mesh Current Method is a direct application of KVL and Ohm's Law. Understanding its systematic approach, matrix representation, and solution techniques empowers you to solve circuits that are too complex for basic series/parallel analysis. You're moving from just knowing the laws to *applying* them effectively.
*   **Understanding Network Equations:** This topic explicitly focuses on setting up and solving network equations, which is a core part of circuit analysis.
*   **Foundation for More Advanced Topics:** The ability to represent circuit problems in matrix form and solve them is a precursor to understanding more advanced techniques in circuit theory and even in areas like control systems and signal processing, where matrix methods are ubiquitous.

### Summary and Key Takeaways

Let's recap the essentials of the Mesh Current Method:

*   **Purpose:** To analyze complex DC circuits efficiently by focusing on loops (meshes).
*   **Core Principle:** Applying Kirchhoff's Voltage Law (KVL) to each mesh.
*   **Key Steps:** Identify meshes, assign mesh currents, write KVL for each mesh considering shared elements, form matrix equations, and solve for the currents.
*   **Matrix Representation:** Organizing circuit equations into $\mathbf{A} \mathbf{I} = \mathbf{V}$ for systematic solution.
    *   Diagonal elements of $\mathbf{A}$ are the sum of resistances in the mesh.
    *   Off-diagonal elements $a_{ij}$ are the negative of shared resistances between mesh $i$ and mesh $j$.
    *   Elements of $\mathbf{V}$ are the net voltage sources in each mesh, considering polarity.
*   **Solution Methods:** Matrix inversion, Cramer's Rule, or Gaussian elimination.

Remember this: the mesh current method converts a circuit problem into an algebraic problem. By mastering this, you gain a powerful tool for your electrical engineering toolkit. It’s about seeing the underlying mathematical structure in the physical circuit.

---

### Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** What is a "mesh" in the context of circuit analysis?
    **Answer:** A mesh is a fundamental, non-reducible loop within a circuit diagram. It's a closed path that does not contain any other closed paths within it. For example, in a circuit with multiple interconnected loops, a mesh is the smallest possible loop.

2.  **Question:** Explain the significance of the off-diagonal elements in the coefficient matrix ($\mathbf{A}$) when using the mesh current method.
    **Answer:** The off-diagonal elements, $a_{ij}$ (where $i \neq j$), in the coefficient matrix represent the negative of the sum of resistances common to both mesh $i$ and mesh $j$. If meshes $i$ and $j$ do not share any resistors, the element $a_{ij}$ is zero. This signifies the mutual influence of currents in adjacent meshes through shared components.

3.  **Question:** How are voltage sources treated when setting up the source vector ($\mathbf{V}$) in the mesh current method?
    **Answer:** For each mesh, the corresponding element in the source vector $\mathbf{V}$ is the algebraic sum of voltage sources within that mesh. If a voltage source's positive terminal is in the direction of the assumed mesh current, it's considered a positive contribution. If its negative terminal is in the direction of the assumed mesh current, it's a negative contribution.

**Exam-Oriented Questions:**

1.  **Question:** For the circuit shown below, (a) write the mesh current equations, and (b) express these equations in matrix form $\mathbf{A} \mathbf{I} = \mathbf{V}$.
    [Imagine a circuit with two meshes.
    Mesh 1: 5V source (positive terminal up), 10 Ohm resistor, and a 4 Ohm resistor (shared).
    Mesh 2: 15V source (positive terminal down), 6 Ohm resistor, and the shared 4 Ohm resistor.
    Assume clockwise mesh currents $I_1$ and $I_2$.]

    **Answer:**
    *   **Step 1: Identify Meshes and Assign Currents:** Two meshes, clockwise currents $I_1$ and $I_2$.
    *   **Step 2: Apply KVL:**
        *   **Mesh 1:** Moving clockwise from bottom-left:
            *   +5V (source, - to +)
            *   10 Ohm resistor: $10I_1$
            *   4 Ohm resistor (shared): $4(I_1 - I_2)$
            KVL: $5 - 10I_1 - 4(I_1 - I_2) = 0$
            Simplifying: $5 - 10I_1 - 4I_1 + 4I_2 = 0 \implies -14I_1 + 4I_2 = -5$

        *   **Mesh 2:** Moving clockwise from bottom-right:
            *   4 Ohm resistor (shared): $4(I_2 - I_1)$
            *   6 Ohm resistor: $6I_2$
            *   -15V (source, + to -)
            KVL: $4(I_2 - I_1) + 6I_2 - 15 = 0$
            Simplifying: $4I_2 - 4I_1 + 6I_2 - 15 = 0 \implies -4I_1 + 10I_2 = 15$

    *   **Step 3: Matrix Form:**
        The mesh current equations are:
        $-14I_1 + 4I_2 = -5$
        $-4I_1 + 10I_2 = 15$

        In matrix form $\mathbf{A} \mathbf{I} = \mathbf{V}$:
        $$ \begin{bmatrix} -14 & 4 \\ -4 & 10 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} -5 \\ 15 \end{bmatrix} $$

2.  **Question:** Given the matrix equation for a DC circuit's mesh analysis:
    $$ \begin{bmatrix} 6 & -2 \\ -2 & 8 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 12 \\ -6 \end{bmatrix} $$
    Find the values of $I_1$ and $I_2$ using matrix inversion.

    **Answer:**
    *   The matrix equation is $\mathbf{A} \mathbf{I} = \mathbf{V}$, where $\mathbf{A} = \begin{bmatrix} 6 & -2 \\ -2 & 8 \end{bmatrix}$, $\mathbf{I} = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$, and $\mathbf{V} = \begin{bmatrix} 12 \\ -6 \end{bmatrix}$.
    *   Calculate the determinant of $\mathbf{A}$:
        $\det(\mathbf{A}) = (6 \times 8) - (-2 \times -2) = 48 - 4 = 44$.
    *   Calculate the inverse of $\mathbf{A}$:
        $$ \mathbf{A}^{-1} = \frac{1}{44} \begin{bmatrix} 8 & -(-2) \\ -(-2) & 6 \end{bmatrix} = \frac{1}{44} \begin{bmatrix} 8 & 2 \\ 2 & 6 \end{bmatrix} $$
    *   Solve for $\mathbf{I} = \mathbf{A}^{-1} \mathbf{V}$:
        $$ \mathbf{I} = \frac{1}{44} \begin{bmatrix} 8 & 2 \\ 2 & 6 \end{bmatrix} \begin{bmatrix} 12 \\ -6 \end{bmatrix} $$
        $$ \mathbf{I} = \frac{1}{44} \begin{bmatrix} (8 \times 12) + (2 \times -6) \\ (2 \times 12) + (6 \times -6) \end{bmatrix} $$
        $$ \mathbf{I} = \frac{1}{44} \begin{bmatrix} 96 - 12 \\ 24 - 36 \end{bmatrix} $$
        $$ \mathbf{I} = \frac{1}{44} \begin{bmatrix} 84 \\ -12 \end{bmatrix} $$
        $$ \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 84/44 \\ -12/44 \end{bmatrix} = \begin{bmatrix} 21/11 \\ -3/11 \end{bmatrix} $$
    *   Therefore, $I_1 = \frac{21}{11} \, A$ and $I_2 = -\frac{3}{11} \, A$.
