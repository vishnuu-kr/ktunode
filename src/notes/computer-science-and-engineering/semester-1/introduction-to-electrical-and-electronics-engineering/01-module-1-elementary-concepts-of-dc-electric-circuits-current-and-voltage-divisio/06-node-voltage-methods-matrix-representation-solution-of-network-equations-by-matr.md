---
title: "Node voltage methods-matrix representation-solution of network equations by matrix methods - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c67"
status: "completed"
scrapedAt: "2026-05-20T16:38:57.702Z"
---
## Module 1: Elementary Concepts of DC Electric Circuits
### Topic: Node Voltage Methods, Matrix Representation, and Solution of Network Equations by Matrix Methods

Welcome everyone to our exciting journey into the world of electrical and electronics engineering! Today, we're diving deep into Module 1, specifically focusing on a powerful technique for analyzing DC electric circuits: the **Node Voltage Method**. This method, along with its matrix representation and solution techniques, is absolutely fundamental to understanding how electrical networks behave. It’s like learning a secret code to unlock the mysteries of current and voltage within any circuit.

You might have already encountered concepts like Ohm's Law, Kirchhoff's Voltage Law (KVL), and Kirchhoff's Current Law (KCL), and perhaps even the Voltage and Current Division rules. These are our building blocks. The Node Voltage Method takes these fundamental laws and organizes them into a systematic approach, making it incredibly efficient to solve even complex circuits.

Remember, our overarching goal in this course, especially for **Course Outcome 1 (CO1)**, is to "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits." The Node Voltage Method is a prime example of how we do exactly that. It allows us to analyze circuits and predict how they will behave, which is crucial for designing and troubleshooting any electrical system.

### Understanding the Foundation: Nodes and Node Voltage

Before we jump into the method itself, let's clarify a couple of key terms.

*   **Node:** In an electrical circuit, a node is simply a point where two or more circuit elements (like resistors, voltage sources, current sources) are connected. Think of it as an intersection on a road network. All points connected by a single wire are considered to be the same node, even if that wire is long.
*   **Node Voltage:** The "node voltage method" refers to assigning a voltage to each node in the circuit relative to a **reference node**. This reference node is usually chosen as the node with the lowest potential, often the negative terminal of a battery or the ground symbol. We typically assign it a voltage of 0 volts. All other node voltages are then measured with respect to this reference.

Why is this approach so useful? Well, imagine a busy intersection. Instead of tracking every single car individually, we can talk about the flow of traffic *at* the intersection. Similarly, by understanding the voltage at each key point (node) in a circuit, we can understand the overall behavior of the currents flowing through it.

### The Node Voltage Method: A Step-by-Step Approach

Let's break down how we apply the Node Voltage Method. It's a systematic process, so once you learn the steps, you can tackle any circuit.

**Step 1: Identify and Mark the Nodes**
First, carefully examine your circuit diagram and identify all the distinct connection points where three or more components meet. These are your principal nodes. You'll also have nodes where only two components connect, but usually, we focus on the junctions involving three or more.

**Step 2: Select a Reference Node**
Choose one node as your reference node. As mentioned, this is typically the ground or the negative terminal of the main voltage source. Mark it clearly with the ground symbol (usually three horizontal lines). Let's call the voltage at the reference node $V_{ref} = 0$ V.

**Step 3: Assign Node Voltages to Other Nodes**
Assign a unique voltage variable to each of the remaining non-reference nodes. For instance, if you have three non-reference nodes, you might label their voltages as $V_1$, $V_2$, and $V_3$. These variables represent the voltage of that node with respect to the reference node.

**Step 4: Apply Kirchhoff's Current Law (KCL) at Each Non-Reference Node**
This is the heart of the method. For each non-reference node, we write a KCL equation. Remember, KCL states that the algebraic sum of currents entering a node is equal to the sum of currents leaving the node. Or, more simply, the sum of all currents at a node is zero.

When applying KCL, we express the currents flowing through each branch connected to the node in terms of the node voltages. For a resistor connected between two nodes, say node A (voltage $V_A$) and node B (voltage $V_B$), the current flowing from A to B through that resistor is given by Ohm's Law: $I_{AB} = (V_A - V_B) / R$.

So, at each non-reference node, you'll write an equation summing the currents leaving that node:

*   If a current source is connected to the node, you'll include its value (positive if leaving, negative if entering).
*   For resistors connected to the node, you'll express the current leaving the node as $(V_{node} - V_{other\_node}) / R$.

Let's take an example to make this crystal clear. Imagine a node, let's call it Node 1, with voltage $V_1$. Suppose it's connected to the reference node (0V) through a resistor $R_1$, and to another node, Node 2 (voltage $V_2$), through a resistor $R_2$. If there's a current source $I_1$ flowing *out* of Node 1, the KCL equation at Node 1 would look like this:

Current leaving through $R_1$: $(V_1 - 0) / R_1 = V_1 / R_1$
Current leaving through $R_2$: $(V_1 - V_2) / R_2$
Current source $I_1$: $+I_1$ (since it's leaving)

So, the KCL equation at Node 1 is:
$\frac{V_1}{R_1} + \frac{V_1 - V_2}{R_2} + I_1 = 0$

If the current source $I_1$ was flowing *into* the node, it would be $-I_1$.

**Step 5: Solve the System of Linear Equations**
After applying KCL to all non-reference nodes, you will have a system of linear equations. The number of equations will be equal to the number of non-reference nodes. These equations will have the node voltages ($V_1, V_2, \ldots$) as the unknowns.

This is where matrix representation comes in handy.

### Matrix Representation: Organizing for Solution

The system of linear equations we obtain from the Node Voltage Method can be elegantly represented in matrix form. This makes it systematic and ready for powerful solution techniques, especially those readily available in software or calculators.

Consider a general system of $n$ linear equations with $n$ unknowns ($x_1, x_2, \ldots, x_n$):

$a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n = b_2$
$\vdots$
$a_{n1}x_1 + a_{n2}x_2 + \ldots + a_{nn}x_n = b_n$

This can be written in matrix form as:
$AX = B$

Where:
*   $A$ is the coefficient matrix (containing the $a_{ij}$ values)
*   $X$ is the variable matrix (containing the unknowns $x_i$)
*   $B$ is the constant matrix (containing the $b_i$ values)

In our circuit analysis context:
*   The unknowns ($X$) are the node voltages ($V_1, V_2, \ldots, V_n$).
*   The coefficients in matrix $A$ are derived from the reciprocal of resistances and conductances connected to the nodes.
*   The constants in matrix $B$ are typically related to the independent current sources connected to the nodes.

Let's revisit the KCL equation for Node 1 we wrote earlier:
$\frac{V_1}{R_1} + \frac{V_1 - V_2}{R_2} + I_1 = 0$

We can rearrange this to group terms by node voltages:
$(\frac{1}{R_1} + \frac{1}{R_2})V_1 - \frac{1}{R_2}V_2 = -I_1$

Notice a pattern here?

*   The coefficient of $V_1$ is the sum of conductances connected to Node 1.
*   The coefficient of $V_2$ is the negative of the conductance connecting Node 1 to Node 2.
*   The right-hand side is the negative of the current source leaving Node 1.

If we had another node, Node 2, with voltage $V_2$, and it was connected to Node 1 via $R_2$ and to the reference (0V) via $R_3$, and had a current source $I_2$ leaving it, its KCL equation would be:
$\frac{V_2 - V_1}{R_2} + \frac{V_2 - 0}{R_3} + I_2 = 0$
Rearranging:
$-\frac{1}{R_2}V_1 + (\frac{1}{R_3} + \frac{1}{R_2})V_2 = -I_2$

Now, let's put these two equations into matrix form:

$\begin{bmatrix}
(\frac{1}{R_1} + \frac{1}{R_2}) & -\frac{1}{R_2} \\
-\frac{1}{R_2} & (\frac{1}{R_3} + \frac{1}{R_2})
\end{bmatrix}
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix} =
\begin{bmatrix}
-I_1 \\
-I_2
\end{bmatrix}$

This is our $AX = B$ form. The matrix $A$ is often called the **admittance matrix** (denoted by $\mathbf{Y}$), and $B$ is the current vector (denoted by $\mathbf{I}$). So, we have $\mathbf{Y}V = \mathbf{I}$, where $V$ is the vector of node voltages.

*   **Diagonal elements of $\mathbf{Y}$ ($\mathbf{Y}_{ii}$):** These are the sum of conductances connected to node $i$. Remember, conductance is the reciprocal of resistance ($G = 1/R$). So, $\mathbf{Y}_{ii} = \sum G_{ik}$, where $G_{ik}$ is the conductance of the branch connecting node $i$ to node $k$.
*   **Off-diagonal elements of $\mathbf{Y}$ ($\mathbf{Y}_{ij}$, where $i \neq j$):** These are the negative of the conductance of the branch connecting node $i$ to node $j$. So, $\mathbf{Y}_{ij} = -G_{ij}$.
*   **Elements of $\mathbf{I}$ ($\mathbf{I}_i$):** These are the sum of currents entering node $i$ from independent current sources. If a current source $I$ is leaving node $i$, it contributes $-I$ to $\mathbf{I}_i$. If it's entering, it contributes $+I$.

This matrix formulation is a direct consequence of applying KCL systematically. It's a very structured way to represent the circuit's connectivity and element values.

### Solving Network Equations by Matrix Methods

Once we have the matrix equation $\mathbf{Y}V = \mathbf{I}$, we need to solve for the voltage vector $V$.

**1. Using the Inverse Matrix:**
The most direct way to solve for $V$ is by multiplying both sides of the equation by the inverse of the admittance matrix, $\mathbf{Y}^{-1}$:

$\mathbf{Y}^{-1} (\mathbf{Y}V) = \mathbf{Y}^{-1} \mathbf{I}$
$(\mathbf{Y}^{-1} \mathbf{Y}) V = \mathbf{Y}^{-1} \mathbf{I}$
$IV = \mathbf{Y}^{-1} \mathbf{I}$ (where $I$ is the identity matrix)
$V = \mathbf{Y}^{-1} \mathbf{I}$

So, if you can calculate the inverse of the admittance matrix and multiply it by the current vector, you directly get the node voltages. This is straightforward for small matrices but becomes computationally intensive for larger circuits. However, this is precisely what calculators and software do!

**2. Cramer's Rule:**
For systems with a manageable number of variables (say, 2x2 or 3x3), Cramer's Rule is a viable method. It expresses each variable as a ratio of determinants. For our system $\mathbf{Y}V = \mathbf{I}$, to find $V_i$:

$V_i = \frac{\det(\mathbf{Y}_i)}{\det(\mathbf{Y})}$

Where $\det(\mathbf{Y}_i)$ is the determinant of the matrix formed by replacing the $i$-th column of $\mathbf{Y}$ with the current vector $\mathbf{I}$.

**3. Gaussian Elimination:**
This is a general method for solving systems of linear equations. It involves performing a series of elementary row operations on the augmented matrix $[\mathbf{Y} | \mathbf{I}]$ to transform the $\mathbf{Y}$ matrix into an upper triangular form. Then, back-substitution is used to find the variables. This is a common algorithm implemented in computational solvers.

**Key Takeaway for Exams:** While you might not be asked to manually invert a 5x5 matrix by hand in an exam, you *will* be asked to set up the matrix equation and possibly solve a 2x2 or 3x3 system. Understanding how the matrix elements arise from the circuit is crucial for **CO1**.

### Handling Special Cases: Voltage Sources and Ideal Current Sources

*   **Ideal Current Sources:** As we saw, ideal current sources are straightforward. They directly contribute to the constant vector $\mathbf{I}$.
*   **Ideal Voltage Sources:** These require a slight modification or an auxiliary node. If a voltage source $V_s$ is connected between node $i$ and node $j$, you can't directly write a current expression as $(V_i - V_j)/R$ for the voltage source branch.
    *   **Method 1: Supernode.** If the voltage source is between two non-reference nodes (say, $V_1$ and $V_2$), you can create a "supernode" that encompasses both $V_1$ and $V_2$. You write a KCL equation for this supernode. Additionally, you write a voltage constraint equation: $V_1 - V_2 = V_s$ (or $V_2 - V_1 = V_s$, depending on polarity). This gives you one more equation to solve the system.
    *   **Method 2: Matrix Manipulation.** You can also adjust the matrix formulation. If $V_s$ is connected between node $i$ and the reference node, then $V_i = V_s$. This means $V_i$ is known and you can treat it as a constant, effectively reducing the size of your system by one. If it's between node $i$ and node $j$, you might express one voltage in terms of the other ($V_i = V_j + V_s$) and substitute it into the KCL equations.

### Numerical Problems and Examples

Let's walk through a couple of examples to solidify our understanding.

**Example 1: A Simple Two-Loop Circuit**

Consider a circuit with two loops, three resistors, and two voltage sources.

*   A voltage source $V_1 = 10$ V is connected to Node 1.
*   Node 1 is connected to Node 2 through a resistor $R_{12} = 2 \Omega$.
*   Node 2 is connected to the reference (ground, 0V) through a resistor $R_{20} = 3 \Omega$.
*   There is also a resistor $R_{10} = 4 \Omega$ connecting Node 1 to the reference.

Let's choose Node 2 as our reference node ($V_2 = 0$ V). Wait, that's not ideal. Let's rephrase: Node 2 is connected to a point we will call ground. Let's use the common convention: The negative terminal of $V_1$ is connected to ground, and there's a resistor $R_{10}$ from Node 1 to ground, and $R_{20}$ from Node 2 to ground.

Let's redefine the circuit for clarity:

*   Voltage source $V_1 = 10$ V, with its positive terminal at Node 1 and negative terminal at ground (0V).
*   Resistor $R_1 = 4 \Omega$ between Node 1 and ground.
*   Resistor $R_2 = 2 \Omega$ between Node 1 and Node 2.
*   Resistor $R_3 = 3 \Omega$ between Node 2 and ground.

Here, Node 1 and Node 2 are our non-reference nodes. The ground is our reference node (0V).

**Applying Node Voltage Method:**

**Node 1:**
*   Current leaving through $R_1$: $V_1/R_1 = V_1/4$
*   Current leaving through $R_2$: $(V_1 - V_2)/R_2 = (V_1 - V_2)/2$
*   Current from voltage source $V_1$: $10$ V is connected, positive terminal at Node 1. This means $V_1$ is directly determined by the source. $V_1 = 10$ V.

**Node 2:**
*   Current leaving through $R_2$: $(V_2 - V_1)/R_2 = (V_2 - V_1)/2$
*   Current leaving through $R_3$: $V_2/R_3 = V_2/3$

The KCL equation for Node 2 is:
$\frac{V_2 - V_1}{2} + \frac{V_2}{3} = 0$

Now we have a system of equations:
1.  $V_1 = 10$ V
2.  $\frac{V_2 - V_1}{2} + \frac{V_2}{3} = 0$

Substitute $V_1 = 10$ into the second equation:
$\frac{V_2 - 10}{2} + \frac{V_2}{3} = 0$
Multiply by 6 to clear denominators:
$3(V_2 - 10) + 2V_2 = 0$
$3V_2 - 30 + 2V_2 = 0$
$5V_2 = 30$
$V_2 = 6$ V

So, the node voltages are $V_1 = 10$ V and $V_2 = 6$ V.

**Matrix Representation for this example (if we had to solve for both simultaneously):**

Let's consider a slightly modified circuit to illustrate the matrix setup better, where $V_1$ isn't directly known and the voltage source is between two nodes.

Imagine:
*   $R_1 = 4 \Omega$ (Node 1 to Ground)
*   $R_2 = 2 \Omega$ (Node 1 to Node 2)
*   $R_3 = 3 \Omega$ (Node 2 to Ground)
*   Voltage source $V_s = 5$ V, positive terminal at Node 1, negative at Node 2.
*   Current source $I_1 = 2$ A, entering Node 1.

Let's assign node voltages $V_1$ and $V_2$. Ground is 0V.

**Node 1 (KCL):**
Current leaving through $R_1$: $V_1/R_1 = V_1/4$
Current leaving through $R_2$: $(V_1 - V_2)/R_2 = (V_1 - V_2)/2$
Current from $I_1$: $-I_1 = -2$ A (since it's entering)
Equation: $\frac{V_1}{4} + \frac{V_1 - V_2}{2} - 2 = 0$
Rearranging: $(\frac{1}{4} + \frac{1}{2})V_1 - \frac{1}{2}V_2 = 2$
$\frac{3}{4}V_1 - \frac{1}{2}V_2 = 2$

**Node 2 (KCL):**
Current leaving through $R_2$: $(V_2 - V_1)/R_2 = (V_2 - V_1)/2$
Current leaving through $R_3$: $V_2/R_3 = V_2/3$
Equation: $\frac{V_2 - V_1}{2} + \frac{V_2}{3} = 0$
Rearranging: $-\frac{1}{2}V_1 + (\frac{1}{2} + \frac{1}{3})V_2 = 0$
$-\frac{1}{2}V_1 + \frac{5}{6}V_2 = 0$

Now we have our system:
1.  $\frac{3}{4}V_1 - \frac{1}{2}V_2 = 2$
2.  $-\frac{1}{2}V_1 + \frac{5}{6}V_2 = 0$

Let's incorporate the voltage source $V_s = 5$ V between Node 1 and Node 2 ($V_1 - V_2 = 5$). This is where the supernode concept or direct substitution is helpful.

Using substitution: $V_1 = V_2 + 5$. Substitute this into the KCL equations.

From Node 2 KCL:
$-\frac{1}{2}(V_2 + 5) + \frac{5}{6}V_2 = 0$
$-\frac{1}{2}V_2 - \frac{5}{2} + \frac{5}{6}V_2 = 0$
$(-\frac{1}{2} + \frac{5}{6})V_2 = \frac{5}{2}$
$(-\frac{3}{6} + \frac{5}{6})V_2 = \frac{5}{2}$
$\frac{2}{6}V_2 = \frac{5}{2}$
$\frac{1}{3}V_2 = \frac{5}{2}$
$V_2 = \frac{5}{2} \times 3 = \frac{15}{2} = 7.5$ V

Now find $V_1$:
$V_1 = V_2 + 5 = 7.5 + 5 = 12.5$ V

So, $V_1 = 12.5$ V and $V_2 = 7.5$ V.

**Matrix Setup for the problem *without* the voltage source:**

If there was no voltage source, just current sources $I_1=2$A into Node 1 and $I_2=1$A into Node 2.

Node 1 KCL: $\frac{V_1}{4} + \frac{V_1 - V_2}{2} - 2 = 0 \implies \frac{3}{4}V_1 - \frac{1}{2}V_2 = 2$
Node 2 KCL: $\frac{V_2 - V_1}{2} + \frac{V_2}{3} - 1 = 0 \implies -\frac{1}{2}V_1 + \frac{5}{6}V_2 = 1$

Matrix Form:
$\begin{bmatrix}
3/4 & -1/2 \\
-1/2 & 5/6
\end{bmatrix}
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix} =
\begin{bmatrix}
2 \\
1
\end{bmatrix}$

This is $\mathbf{Y}V = \mathbf{I}$.
$\mathbf{Y} = \begin{bmatrix} 0.75 & -0.5 \\ -0.5 & 0.8333 \end{bmatrix}$ and $\mathbf{I} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.

Solving this matrix equation would give us $V_1$ and $V_2$.

**Example 2: Handling a Voltage Source Between Nodes (Supernode Approach)**

Let's use the same circuit as the last matrix example, but now with the $V_s = 5$ V source between Node 1 and Node 2, and no current sources.

*   $R_1 = 4 \Omega$ (Node 1 to Ground)
*   $R_2 = 2 \Omega$ (Node 1 to Node 2)
*   $R_3 = 3 \Omega$ (Node 2 to Ground)
*   Voltage source $V_s = 5$ V, positive terminal at Node 1, negative at Node 2.

**Step 1 & 2:** Nodes are 1 and 2. Ground is reference.
**Step 3:** Assign $V_1, V_2$.
**Step 4:** Apply KCL.
*   At Node 1: Current leaving through $R_1$ + Current leaving through $R_2$ = 0
    $\frac{V_1}{R_1} + \frac{V_1 - V_2}{R_2} = 0$
    $\frac{V_1}{4} + \frac{V_1 - V_2}{2} = 0$
    $(\frac{1}{4} + \frac{1}{2})V_1 - \frac{1}{2}V_2 = 0 \implies \frac{3}{4}V_1 - \frac{1}{2}V_2 = 0$

*   At Node 2: Current leaving through $R_2$ + Current leaving through $R_3$ = 0
    $\frac{V_2 - V_1}{R_2} + \frac{V_2}{R_3} = 0$
    $\frac{V_2 - V_1}{2} + \frac{V_2}{3} = 0$
    $-\frac{1}{2}V_1 + (\frac{1}{2} + \frac{1}{3})V_2 = 0 \implies -\frac{1}{2}V_1 + \frac{5}{6}V_2 = 0$

Now, we also have the voltage constraint: $V_1 - V_2 = V_s = 5$ V.

We have three equations and two unknowns if we try to directly solve, which is one too many. This is where the supernode concept is powerful.

**Supernode Approach:**
Combine Node 1 and Node 2 into a single "supernode". Apply KCL to the supernode. All currents leaving the supernode must sum to zero.
Currents leaving the supernode:
*   Through $R_1$ (from Node 1): $V_1/R_1 = V_1/4$
*   Through $R_3$ (from Node 2): $V_2/R_3 = V_2/3$

KCL at Supernode: $\frac{V_1}{4} + \frac{V_2}{3} = 0$

Now we have two equations:
1.  Supernode KCL: $\frac{V_1}{4} + \frac{V_2}{3} = 0$
2.  Voltage Constraint: $V_1 - V_2 = 5$

We can rewrite these as:
1.  $\frac{3}{12}V_1 + \frac{4}{12}V_2 = 0 \implies 3V_1 + 4V_2 = 0$
2.  $V_1 - V_2 = 5$

Now we have a standard system of two linear equations with two unknowns.
From (2), $V_1 = V_2 + 5$. Substitute into (1):
$3(V_2 + 5) + 4V_2 = 0$
$3V_2 + 15 + 4V_2 = 0$
$7V_2 = -15$
$V_2 = -15/7$ V $\approx -2.14$ V

Then, $V_1 = V_2 + 5 = -15/7 + 5 = -15/7 + 35/7 = 20/7$ V $\approx 2.86$ V

**Matrix Representation for Supernode:**
To represent this using matrices for solving:
Equation 1: $3V_1 + 4V_2 = 0$
Equation 2: $1V_1 - 1V_2 = 5$

$\begin{bmatrix}
3 & 4 \\
1 & -1
\end{bmatrix}
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix} =
\begin{bmatrix}
0 \\
5
\end{bmatrix}$

Here, the admittance matrix looks different because we've combined elements and incorporated the voltage source constraint differently. The "coefficients" are derived from the conductances and the voltage source relationship.

### Why is this Important for You? (Connecting to Course Outcomes)

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** The Node Voltage Method is a direct application of KCL and Ohm's Law, and the matrix method is a powerful way to organize and solve the resulting equations. Mastering this directly addresses CO1. You'll be able to analyze any DC circuit you encounter, whether it's for power distribution, a sensor circuit, or part of a larger system.
*   Understanding the matrix representation helps in grasping how complex circuits can be broken down into a systematic mathematical form. This is foundational for more advanced circuit analysis techniques and also for understanding how simulation software (like SPICE) works.
*   The ability to solve these systems, even with a calculator or software, is a key engineering skill. It shows you can model a physical system using mathematical tools.

### Summary: The Power of Node Voltage Analysis

*   **Systematic approach:** Node Voltage Method provides a consistent way to analyze circuits.
*   **KCL is key:** It's built upon Kirchhoff's Current Law.
*   **Node voltages:** We define voltages at nodes with respect to a reference node.
*   **Matrix form:** Admittance matrix ($\mathbf{Y}$) and current vector ($\mathbf{I}$) lead to $\mathbf{Y}V = \mathbf{I}$.
*   **Solving matrices:** Inverse matrix, Cramer's Rule, or Gaussian elimination are standard methods.
*   **Voltage sources:** Require special handling (supernodes or substitution).

Remember this: the Node Voltage Method is your tool for dissecting circuits and understanding how currents and voltages behave at every critical junction. It's a foundational technique that will serve you well throughout your engineering career.

---

### Sample Questions and Answers

**Q1. Conceptual:** State the fundamental law used to derive the node voltage equations.
**Answer:** The fundamental law used is Kirchhoff's Current Law (KCL), which states that the algebraic sum of currents entering any node in an electrical circuit is equal to the sum of currents leaving that node.

**Q2. Conceptual:** What is a reference node in the context of the node voltage method?
**Answer:** A reference node is a chosen node in a circuit to which all other node voltages are referred. It is typically assigned a voltage of 0 volts, often represented by the ground symbol.

**Q3. Numerical:** For a circuit with three non-reference nodes, how many independent node voltage equations will be generated using the node voltage method?
**Answer:** There will be three independent node voltage equations, one for each non-reference node.

**Q4. Numerical Setup:** Consider a circuit with two non-reference nodes, Node 1 and Node 2. Node 1 is connected to the reference node via a $5 \Omega$ resistor and to Node 2 via a $10 \Omega$ resistor. Node 2 is connected to the reference node via a $20 \Omega$ resistor. A current source of $3$ A is entering Node 1, and a current source of $1$ A is leaving Node 2. Write down the nodal equations.

**Answer:**
Let $V_1$ and $V_2$ be the voltages at Node 1 and Node 2, respectively.
**Node 1:**
Currents leaving Node 1:
1. Through $5 \Omega$ resistor: $V_1/5$
2. Through $10 \Omega$ resistor: $(V_1 - V_2)/10$
3. Current source: $-3$ A (since it's entering)

KCL at Node 1: $\frac{V_1}{5} + \frac{V_1 - V_2}{10} - 3 = 0$
Multiplying by 10: $2V_1 + (V_1 - V_2) - 30 = 0$
$3V_1 - V_2 = 30$

**Node 2:**
Currents leaving Node 2:
1. Through $10 \Omega$ resistor: $(V_2 - V_1)/10$
2. Through $20 \Omega$ resistor: $V_2/20$
3. Current source: $1$ A (since it's leaving)

KCL at Node 2: $\frac{V_2 - V_1}{10} + \frac{V_2}{20} + 1 = 0$
Multiplying by 20: $2(V_2 - V_1) + V_2 + 20 = 0$
$2V_2 - 2V_1 + V_2 + 20 = 0$
$-2V_1 + 3V_2 = -20$

So the nodal equations are:
1. $3V_1 - V_2 = 30$
2. $-2V_1 + 3V_2 = -20$

**Q5. Matrix Setup:** Convert the nodal equations from Q4 into matrix form ($AX=B$).

**Answer:**
The nodal equations are:
$3V_1 - 1V_2 = 30$
$-2V_1 + 3V_2 = -20$

In matrix form $AX=B$:
$\begin{bmatrix}
3 & -1 \\
-2 & 3
\end{bmatrix}
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix} =
\begin{bmatrix}
30 \\
-20
\end{bmatrix}$

Here, $A = \begin{bmatrix} 3 & -1 \\ -2 & 3 \end{bmatrix}$, $X = \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$, and $B = \begin{bmatrix} 30 \\ -20 \end{bmatrix}$.

**Q6. Conceptual/Exam Focus:** What is the significance of the diagonal elements in the admittance matrix derived from the Node Voltage method?
**Answer:** The diagonal element $Y_{ii}$ of the admittance matrix represents the sum of all conductances connected to node $i$. In other words, it's the total conductance "looking into" node $i$ when all other nodes are assumed to be at zero potential (grounded). It reflects the self-admittance of the node.

**Q7. Conceptual/Exam Focus:** What is the significance of the off-diagonal elements in the admittance matrix derived from the Node Voltage method?
**Answer:** The off-diagonal element $Y_{ij}$ (where $i \neq j$) represents the negative of the conductance of the branch connecting node $i$ to node $j$. It quantifies the mutual coupling or interaction between node $i$ and node $j$ through conductive paths. It's always negative if a direct resistive path exists between the two nodes.

**Q8. Numerical Calculation (using a calculator for inversion/solving):** Solve the matrix equation from Q5 to find $V_1$ and $V_2$.

**Answer:**
We have $\begin{bmatrix} 3 & -1 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 30 \\ -20 \end{bmatrix}$.

Using a calculator or matrix inversion:
$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$
$\det(A) = (3 \times 3) - (-1 \times -2) = 9 - 2 = 7$
$\text{adj}(A) = \begin{bmatrix} 3 & 1 \\ 2 & 3 \end{bmatrix}$
$A^{-1} = \frac{1}{7} \begin{bmatrix} 3 & 1 \\ 2 & 3 \end{bmatrix}$

$X = A^{-1}B = \frac{1}{7} \begin{bmatrix} 3 & 1 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 30 \\ -20 \end{bmatrix}$
$X = \frac{1}{7} \begin{bmatrix} (3 \times 30) + (1 \times -20) \\ (2 \times 30) + (3 \times -20) \end{bmatrix}$
$X = \frac{1}{7} \begin{bmatrix} 90 - 20 \\ 60 - 60 \end{bmatrix}$
$X = \frac{1}{7} \begin{bmatrix} 70 \\ 0 \end{bmatrix} = \begin{bmatrix} 10 \\ 0 \end{bmatrix}$

So, $V_1 = 10$ V and $V_2 = 0$ V.

**Q9. Conceptual (Voltage Source Handling):** How would you approach a circuit analysis using the node voltage method if a voltage source of $12$ V (positive terminal at Node A, negative at Node B) is present between two non-reference nodes A and B?
**Answer:** You would typically use the "supernode" concept. Create a single node that encompasses both Node A and Node B. Write the KCL equation for this supernode, summing all currents leaving it through external branches. Then, you would write a separate voltage constraint equation relating $V_A$ and $V_B$: $V_A - V_B = 12$ V (assuming A's positive terminal is connected to the positive side of the source). These two equations, along with any other node equations, form the system to be solved. Alternatively, you can express one node voltage in terms of the other ($V_A = V_B + 12$) and substitute this into the KCL equations to reduce the number of unknowns.
