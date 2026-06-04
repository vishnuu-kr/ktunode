---
title: "Analysis of DC Electric circuits: Mesh current method - matrix representation - Solution of network equations."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c66"
status: "completed"
scrapedAt: "2026-05-20T16:38:55.843Z"
---
## Module 1: Elementary Concepts of DC Electric Circuits
### Topic: Analysis of DC Electric Circuits: Mesh Current Method, Matrix Representation, and Solution of Network Equations

Welcome, future electrical and electronics engineers, to our journey into the fascinating world of circuits! In this session, we're going to delve deeper into how we analyze Direct Current (DC) electric circuits. We've already touched upon fundamental concepts like current and voltage and explored the handy Voltage and Current Division Rules. Today, we're leveling up our analytical skills by introducing a powerful technique: the **Mesh Current Method**. This method is crucial for solving more complex circuits, and understanding it will directly help us achieve **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**.

### Understanding the "Why": Moving Beyond Simple Circuits

Think about the circuits you've encountered so far. Often, they are fairly straightforward – a few components in series or parallel. The Voltage and Current Division Rules are perfect for those. But what happens when a circuit has multiple loops, multiple voltage sources, and components connected in a more intricate way? Trying to apply Ohm's Law and Kirchhoff's Laws directly to every single node and branch can become quite tedious, prone to errors, and frankly, a bit overwhelming.

This is where systematic methods like the Mesh Current Method come in. They provide a structured approach to break down a complex problem into a set of manageable equations. It’s like having a blueprint for solving any DC circuit puzzle!

### Introducing the Mesh Current Method: A New Perspective

So, what exactly is the Mesh Current Method? Imagine a spider web. The Mesh Current Method treats each closed loop (or "mesh") in a circuit as if it had its own circulating current. We don't worry about the actual physical current flowing through each *branch* initially. Instead, we define hypothetical "mesh currents."

**Key Idea:** Instead of analyzing branch currents directly, we define currents that flow around each **independent closed loop** (mesh) within the circuit.

Let's define what a "mesh" is in this context. A mesh is a loop in a circuit that does not contain any other loops within it. Think of it as the smallest possible rectangular or polygonal path you can trace within the circuit diagram.

**Why is this helpful?** By defining these mesh currents, we automatically satisfy Kirchhoff's Current Law (KCL) at every node. Why? Because at any node, the sum of all mesh currents flowing *into* it will equal the sum of all mesh currents flowing *out* of it. This simplifies our analysis significantly.

### Steps to Applying the Mesh Current Method

Let's break down the process step-by-step. Imagine we have a circuit and we want to analyze it using this method.

**Step 1: Identify the Meshes**
First, carefully examine your circuit diagram and identify all the independent closed loops, or meshes. You want to pick a set of meshes that "cover" all the components in the circuit, but without redundant loops. Typically, you'll want the minimum number of meshes required.

*   **Analogy:** Think of a multi-story building with interconnected rooms. Each room can be considered a small loop. But if you have rooms connected, you might want to define a path that goes around a whole floor or a section of the building as a larger loop.

**Step 2: Assign Mesh Currents**
Assign a hypothetical current to each identified mesh. It’s common practice to assign a direction, usually clockwise, for each mesh current. Let's say we have $n$ meshes; we’ll have mesh currents $I_1, I_2, ..., I_n$.

*   **Important Note:** The direction you choose for the mesh current is arbitrary. If your calculation results in a negative value for a mesh current, it simply means the actual current flows in the opposite direction to what you assumed. Don't be alarmed by negative currents!

**Step 3: Apply Kirchhoff's Voltage Law (KVL) to Each Mesh**
Now, for each mesh, we'll apply KVL. We'll traverse each mesh and sum up the voltage drops and rises. Remember, the voltage drop across a resistor $R$ due to a current $I$ is $IR$.

*   **Key Consideration:** When a resistor is part of *two* meshes, the current flowing through it will be the *difference* between the two mesh currents. For instance, if a resistor $R$ is shared between mesh 1 (with current $I_1$) and mesh 2 (with current $I_2$), and both $I_1$ and $I_2$ are assumed to flow in the same direction through $R$ (e.g., clockwise), the voltage drop across $R$ will be $(I_1 - I_2)R$ or $(I_2 - I_1)R$, depending on which mesh current you are considering.
    *   If you are writing the KVL equation for **Mesh 1**, and $I_1$ flows in one direction through $R$ and $I_2$ flows in the opposite direction through $R$, the voltage drop in Mesh 1's equation will be $+IR$. If both mesh currents are assumed to flow in the *same* direction through that resistor, say from top to bottom, and $I_1$ is the current of the mesh you're analyzing, and $I_2$ is the current of the adjacent mesh, the voltage drop will be $(I_1 - I_2)R$. This is a crucial point and a common source of error!

**Step 4: Formulate the System of Equations**
After applying KVL to each mesh, you will have a system of linear equations, where the unknowns are the mesh currents ($I_1, I_2, ..., I_n$). The number of equations will be equal to the number of meshes you identified.

**Step 5: Solve the System of Equations**
Once you have your system of equations, you can solve them using various algebraic methods (like substitution or elimination) or, more powerfully, using matrix methods. This is where the matrix representation comes in.

### Matrix Representation: Organizing the Equations

For larger circuits, solving the system of equations algebraically can be cumbersome. This is where linear algebra and matrix representation become indispensable tools. As suggested by D. P. Kothari and I. J. Nagrath in their extensive works on electrical engineering, a systematic matrix formulation can greatly simplify the process.

Let's consider a circuit with $n$ meshes. The system of KVL equations can be represented in matrix form as:

$[R] [I] = [V]$

Where:
*   $[R]$ is the **resistance matrix** (an $n \times n$ matrix).
*   $[I]$ is the **mesh current vector** (an $n \times 1$ column vector, with elements $I_1, I_2, ..., I_n$).
*   $[V]$ is the **voltage vector** (an $n \times 1$ column vector, representing the net voltage sources in each mesh).

Let's break down how to construct these matrices:

**Constructing the Resistance Matrix $[R]$:**

The element $R_{ij}$ of the resistance matrix represents the *mutual resistance* between mesh $i$ and mesh $j$.

*   **Diagonal Elements ($R_{ii}$):** The diagonal element $R_{ii}$ is the **sum of all resistances in mesh $i$**.
*   **Off-Diagonal Elements ($R_{ij}$ for $i \neq j$):** The off-diagonal element $R_{ij}$ is the **negative of the sum of resistances common to both mesh $i$ and mesh $j$**. If there is no resistance common to mesh $i$ and mesh $j$, then $R_{ij} = 0$.

*   **Example:** Consider a resistor $R_{12}$ that is common to mesh 1 and mesh 2. When writing the KVL for mesh 1, the voltage drop across $R_{12}$ due to $I_1$ and $I_2$ will be $(I_1 - I_2)R_{12}$. So, in the equation for mesh 1, the term involving $I_2$ will be $-I_2R_{12}$. Hence, $R_{12} = -R_{12}$ (where the second $R_{12}$ is the resistance value). Similarly, in the equation for mesh 2, the term involving $I_1$ will be $-I_1R_{12}$, meaning $R_{21} = -R_{12}$.

**Constructing the Voltage Vector $[V]$:**

The element $V_i$ of the voltage vector represents the **sum of voltage rises in mesh $i$**. We sum up the voltage sources within mesh $i$. If the assumed direction of the mesh current flows from the negative terminal to the positive terminal of a voltage source, it's a voltage rise (positive term). If it flows from positive to negative, it's a voltage drop (negative term).

*   **Example:** If mesh $i$ contains a voltage source $V_{a}$ where the current $I_i$ flows from the negative to the positive terminal, it contributes $+V_a$ to $V_i$. If it contains a voltage source $V_{b}$ where $I_i$ flows from positive to negative, it contributes $-V_b$ to $V_i$.

### Solution of Network Equations: Bringing it all Together

Once we have the matrix equation $[R] [I] = [V]$, solving for the mesh currents $[I]$ is a matter of solving this system of linear equations.

The most common and efficient way to solve this is by using matrix inversion:

$[I] = [R]^{-1} [V]$

Here, $[R]^{-1}$ is the inverse of the resistance matrix. Calculating the inverse of a matrix can be done using various methods, such as Gauss-Jordan elimination or by using the adjugate matrix method (especially for smaller matrices). For more complex circuits, computational tools (like MATLAB, Python with NumPy, or even advanced calculators) are often used.

**Exam Tip:** For exams, you'll typically be dealing with circuits that result in 2x2 or 3x3 matrices. Practicing the inversion of these small matrices is key. Remember the determinant of a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ is $ad-bc$. The inverse is $\frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.

### Let's Look at an Example (Visualizing the Process)

Imagine a simple circuit with two meshes.

**(Draw a diagram of a simple two-mesh circuit here. Let's assume: Mesh 1 has a 10V source and resistors R1, R2, R3. Mesh 2 has a 5V source and resistors R2, R4, R5. R2 is common to both meshes. Let's assign values: R1=2Ω, R2=3Ω, R3=4Ω, R4=5Ω, R5=6Ω. Let the 10V source be in mesh 1, positive at the top. Let the 5V source be in mesh 2, positive at the bottom.)**

Let's say we've identified our two meshes and assigned clockwise currents $I_1$ and $I_2$.

**Applying KVL:**

*   **Mesh 1 (Clockwise):**
    Starting from the bottom-left corner and moving clockwise:
    Voltage rise from 10V source: $+10$
    Voltage drop across $R_1$: $+I_1 R_1$
    Voltage drop across $R_2$: $+(I_1 - I_2) R_2$ (assuming $I_1$ and $I_2$ flow in the same direction through $R_2$, i.e., downwards)
    Voltage drop across $R_3$: $+I_1 R_3$
    So, KVL for Mesh 1: $10 = I_1 R_1 + (I_1 - I_2) R_2 + I_1 R_3$

*   **Mesh 2 (Clockwise):**
    Starting from the bottom-left corner and moving clockwise:
    Voltage drop across $R_2$: $+(I_2 - I_1) R_2$ (for Mesh 2's perspective, $I_2$ is in the same direction, $I_1$ opposite)
    Voltage drop across $R_4$: $+I_2 R_4$
    Voltage drop across $R_5$: $+I_2 R_5$
    Voltage rise from 5V source: $-5$ (since $I_2$ flows from positive to negative terminal)
    So, KVL for Mesh 2: $(I_2 - I_1) R_2 + I_2 R_4 + I_2 R_5 - 5 = 0$
    Rearranging: $-5 = -(I_2 - I_1) R_2 - I_2 R_4 - I_2 R_5$
    This can be written as: $5 = (I_1 - I_2) R_2 + I_2 R_4 + I_2 R_5$

**Formulating the Matrix Equation:**

Let's substitute the resistor values:
$R_1=2\Omega, R_2=3\Omega, R_3=4\Omega, R_4=5\Omega, R_5=6\Omega$

*   **Mesh 1 Equation:**
    $10 = I_1(2) + (I_1 - I_2)(3) + I_1(4)$
    $10 = 2I_1 + 3I_1 - 3I_2 + 4I_1$
    $10 = 9I_1 - 3I_2$

*   **Mesh 2 Equation:**
    $5 = (I_1 - I_2)(3) + I_2(5) + I_2(6)$
    $5 = 3I_1 - 3I_2 + 5I_2 + 6I_2$
    $5 = 3I_1 + 8I_2$

So, our system of equations is:
1) $9I_1 - 3I_2 = 10$
2) $3I_1 + 8I_2 = 5$

Now, let's construct the matrices:

**Resistance Matrix $[R]$:**
*   $R_{11}$ = Sum of resistances in Mesh 1 = $R_1 + R_2 + R_3 = 2 + 3 + 4 = 9$
*   $R_{22}$ = Sum of resistances in Mesh 2 = $R_2 + R_4 + R_5 = 3 + 5 + 6 = 14$
*   $R_{12}$ = Negative of resistance common to Mesh 1 and Mesh 2 = $-R_2 = -3$
*   $R_{21}$ = Negative of resistance common to Mesh 2 and Mesh 1 = $-R_2 = -3$

So, $[R] = \begin{bmatrix} 9 & -3 \\ 3 & 14 \end{bmatrix}$

**Mesh Current Vector $[I]$:**
$[I] = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

**Voltage Vector $[V]$:**
*   $V_1$ = Net voltage in Mesh 1. The 10V source has current flowing from - to +. So, $+10$. No other sources. $V_1 = 10$.
*   $V_2$ = Net voltage in Mesh 2. The 5V source has current flowing from + to -. So, $-5$. No other sources. $V_2 = -5$.
    *(Correction: My initial derivation for Mesh 2 KVL was: $(I_2 - I_1) R_2 + I_2 R_4 + I_2 R_5 - 5 = 0$. This means the sum of voltage *drops* equals the sum of voltage *rises*. The $-5$ represents a voltage drop across the 5V source since $I_2$ flows from + to -. Let's rewrite our KVL equations to be consistent: sum of voltage rises = sum of voltage drops.)*

Let's re-derive KVL consistently: Sum of voltage rises = Sum of voltage drops.

*   **Mesh 1 (Clockwise):**
    Voltage rise: $10$ (from the 10V source)
    Voltage drops: $I_1 R_1 + (I_1 - I_2) R_2 + I_1 R_3$
    Equation: $10 = I_1 R_1 + (I_1 - I_2) R_2 + I_1 R_3$
    $10 = 2I_1 + 3(I_1 - I_2) + 4I_1$
    $10 = 2I_1 + 3I_1 - 3I_2 + 4I_1$
    $10 = 9I_1 - 3I_2$

*   **Mesh 2 (Clockwise):**
    Voltage rise: $0$ (no sources where current flows from - to +)
    Voltage drops: $(I_2 - I_1) R_2 + I_2 R_4 + I_2 R_5 + 5$ (the 5V source is a drop if current flows from + to -, which it does in mesh 2's loop traversal)
    Equation: $0 = (I_2 - I_1) R_2 + I_2 R_4 + I_2 R_5 + 5$
    $0 = 3(I_2 - I_1) + 5I_2 + 6I_2 + 5$
    $0 = 3I_2 - 3I_1 + 5I_2 + 6I_2 + 5$
    $0 = -3I_1 + 14I_2 + 5$
    Rearranging for the $[R][I] = [V]$ form where $[V]$ has rises on the right:
    $3I_1 - 14I_2 = 5$

Okay, there seems to be a discrepancy between the matrix method construction and my KVL formulation for the voltage vector. Let's stick to the standard form: **Sum of voltages around a loop = 0**.

*   **Mesh 1 (Clockwise):**
    $-10$ (drop across 10V source) $+ I_1 R_1 + (I_1 - I_2) R_2 + I_1 R_3 = 0$
    $2I_1 + 3(I_1 - I_2) + 4I_1 = 10$
    $9I_1 - 3I_2 = 10$ (This matches our previous one)

*   **Mesh 2 (Clockwise):**
    $-(I_2 - I_1) R_2 - I_2 R_4 - I_2 R_5 - 5$ (drop across 5V source) $= 0$
    $-(3)(I_2 - I_1) - 5I_2 - 6I_2 - 5 = 0$
    $-3I_2 + 3I_1 - 5I_2 - 6I_2 - 5 = 0$
    $3I_1 - 14I_2 - 5 = 0$
    $3I_1 - 14I_2 = 5$

Now the system of equations is:
1) $9I_1 - 3I_2 = 10$
2) $3I_1 - 14I_2 = 5$

**Matrix Form:**
$[R] = \begin{bmatrix} 9 & -3 \\ 3 & -14 \end{bmatrix}$, $[I] = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$, $[V] = \begin{bmatrix} 10 \\ 5 \end{bmatrix}$

The matrix equation is:
$\begin{bmatrix} 9 & -3 \\ 3 & -14 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 10 \\ 5 \end{bmatrix}$

**Solving using Matrix Inversion:**

First, calculate the determinant of $[R]$:
$\det([R]) = (9)(-14) - (-3)(3) = -126 - (-9) = -126 + 9 = -117$

Now, find the inverse of $[R]$:
$[R]^{-1} = \frac{1}{-117} \begin{bmatrix} -14 & -(-3) \\ -3 & 9 \end{bmatrix} = \frac{1}{-117} \begin{bmatrix} -14 & 3 \\ -3 & 9 \end{bmatrix} = \begin{bmatrix} \frac{14}{117} & -\frac{3}{117} \\ \frac{3}{117} & -\frac{9}{117} \end{bmatrix}$

Finally, multiply $[R]^{-1}$ by $[V]$:
$[I] = [R]^{-1} [V] = \begin{bmatrix} \frac{14}{117} & -\frac{3}{117} \\ \frac{3}{117} & -\frac{9}{117} \end{bmatrix} \begin{bmatrix} 10 \\ 5 \end{bmatrix}$

$I_1 = (\frac{14}{117})(10) + (-\frac{3}{117})(5) = \frac{140 - 15}{117} = \frac{125}{117}$ Amperes
$I_2 = (\frac{3}{117})(10) + (-\frac{9}{117})(5) = \frac{30 - 45}{117} = \frac{-15}{117}$ Amperes

So, $I_1 \approx 1.068$ A and $I_2 \approx -0.128$ A.
The negative value for $I_2$ indicates that the actual current in mesh 2 flows in the counter-clockwise direction, opposite to our initial assumption.

**From Mesh Currents to Branch Currents:**
Once you have the mesh currents, you can easily find the current in any branch. For example, the current through $R_1$ is $I_1$. The current through $R_3$ is $I_1$. The current through $R_4$ is $I_2$. The current through $R_5$ is $I_2$. The current through the common resistor $R_2$ is $(I_1 - I_2)$.

This method, as discussed in texts like "Basic Electrical Engineering" by D. P. Kothari and I. J. Nagrath, provides a systematic way to analyze even quite complex DC networks, ensuring all components and their interrelationships are accounted for. It’s a fundamental skill that builds directly on our understanding of Kirchhoff's laws.

### Connecting to Course Outcomes

*   **CO1 (Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits):** This entire topic is a direct application of KVL and Ohm's law. By learning the Mesh Current Method and its matrix representation, we are gaining a powerful tool to solve circuits that might be too complex for simple direct application of these laws, thereby fulfilling CO1. The ability to solve for currents and voltages in various branches directly contributes to this outcome.

### Summary and Key Takeaways

*   The **Mesh Current Method** is a systematic technique for analyzing DC circuits by defining hypothetical currents flowing in independent closed loops (meshes).
*   It simplifies the application of KVL by ensuring KCL is implicitly satisfied at nodes.
*   The core of the method is setting up a system of linear equations based on KVL for each mesh.
*   **Matrix representation** ($[R][I] = [V]$) organizes these equations, making them solvable using linear algebra techniques.
*   The **resistance matrix $[R]$** has diagonal elements summing resistances in a mesh, and off-diagonal elements being the negative of common resistances between meshes.
*   The **voltage vector $[V]$** sums the voltage rises in each mesh.
*   Solving for $[I]$ by inverting $[R]$ and multiplying by $[V]$ ($[I] = [R]^{-1}[V]$) gives the mesh currents.
*   Remember the sign conventions when KVL is applied, especially for voltage sources and resistors shared between meshes.

Mastering this method will give you confidence in tackling a wide variety of DC circuit problems. Keep practicing, and don't hesitate to draw out your circuits and trace the loops carefully!

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the primary advantage of using the Mesh Current Method over directly applying Kirchhoff's laws to every node and branch in a complex circuit?
    **Answer:** The Mesh Current Method provides a structured and systematic approach. By defining mesh currents, it automatically satisfies Kirchhoff's Current Law (KCL) at all nodes, reducing the number of independent equations needed and minimizing the chances of error, especially in circuits with many interconnected loops. It's more efficient than analyzing branch currents individually.

2.  **Question:** In the resistance matrix $[R]$ for the Mesh Current Method, why are the off-diagonal elements typically negative?
    **Answer:** The off-diagonal element $R_{ij}$ (where $i \neq j$) represents the mutual resistance between mesh $i$ and mesh $j$. When applying KVL to mesh $i$, if a resistor $R_{ij}$ is common to both meshes $i$ and $j$, the current from mesh $j$ ($I_j$) will flow in the opposite direction to the assumed current of mesh $i$ ($I_i$) through this shared resistor. Therefore, the voltage drop across this resistor in the KVL equation for mesh $i$ will be $-(I_j)R_{ij}$, leading to a negative coefficient for $I_j$ in the equation for mesh $i$, hence $R_{ij} = -R_{ij}$ (value).

**Exam-Oriented Questions:**

1.  **Question:** For the following circuit (imagine a diagram similar to the example used above, but with specific component values), derive the matrix equation $[R][I] = [V]$ for the mesh currents $I_1$ and $I_2$.
    **(Assume a circuit diagram with R1=1Ω, R2=2Ω, R3=3Ω, R4=4Ω, R5=5Ω. A 12V source in Mesh 1, positive at the top. A 6V source in Mesh 2, positive at the bottom. R2 is common to both meshes. All other resistors are within their respective single meshes.)**

    **Solution:**
    Let $I_1$ and $I_2$ be the clockwise mesh currents for Mesh 1 and Mesh 2, respectively.

    *   **Mesh 1 KVL (Sum of voltage drops = 0):**
        $-12V + I_1(R_1) + (I_1 - I_2)R_2 + I_1(R_3) = 0$
        $I_1(R_1 + R_2 + R_3) - I_2(R_2) = 12V$
        Substitute values: $R_1=1, R_2=2, R_3=3$
        $I_1(1 + 2 + 3) - I_2(2) = 12$
        $6I_1 - 2I_2 = 12$

    *   **Mesh 2 KVL (Sum of voltage drops = 0):**
        $-(I_2 - I_1)R_2 - I_2(R_4) - I_2(R_5) - 6V = 0$
        $I_1(R_2) - I_2(R_2 + R_4 + R_5) = 6V$
        Substitute values: $R_2=2, R_4=4, R_5=5$
        $I_1(2) - I_2(2 + 4 + 5) = 6$
        $2I_1 - 11I_2 = 6$

    *   **Matrix Equation:**
        The system of equations is:
        $6I_1 - 2I_2 = 12$
        $2I_1 - 11I_2 = 6$

        In matrix form $[R][I] = [V]$:
        $[R] = \begin{bmatrix} 6 & -2 \\ 2 & -11 \end{bmatrix}$
        $[I] = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$
        $[V] = \begin{bmatrix} 12 \\ 6 \end{bmatrix}$

        Thus, the matrix equation is:
        $\begin{bmatrix} 6 & -2 \\ 2 & -11 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 12 \\ 6 \end{bmatrix}$

2.  **Question:** Given the matrix equation for a circuit:
    $\begin{bmatrix} 5 & -2 \\ -2 & 10 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 20 \\ -10 \end{bmatrix}$
    Calculate the values of $I_1$ and $I_2$.

    **Solution:**
    We need to solve the system:
    1) $5I_1 - 2I_2 = 20$
    2) $-2I_1 + 10I_2 = -10$

    Using matrix inversion:
    $[R] = \begin{bmatrix} 5 & -2 \\ -2 & 10 \end{bmatrix}$
    $\det([R]) = (5)(10) - (-2)(-2) = 50 - 4 = 46$
    $[R]^{-1} = \frac{1}{46} \begin{bmatrix} 10 & -(-2) \\ -(-2) & 5 \end{bmatrix} = \frac{1}{46} \begin{bmatrix} 10 & 2 \\ 2 & 5 \end{bmatrix}$

    $[I] = [R]^{-1} [V] = \frac{1}{46} \begin{bmatrix} 10 & 2 \\ 2 & 5 \end{bmatrix} \begin{bmatrix} 20 \\ -10 \end{bmatrix}$

    $I_1 = \frac{1}{46} [(10)(20) + (2)(-10)] = \frac{1}{46} [200 - 20] = \frac{180}{46} = \frac{90}{23} \approx 3.91$ Amperes

    $I_2 = \frac{1}{46} [(2)(20) + (5)(-10)] = \frac{1}{46} [40 - 50] = \frac{-10}{46} = -\frac{5}{23} \approx -0.22$ Amperes

    So, $I_1 = \frac{90}{23}$ A and $I_2 = -\frac{5}{23}$ A.
