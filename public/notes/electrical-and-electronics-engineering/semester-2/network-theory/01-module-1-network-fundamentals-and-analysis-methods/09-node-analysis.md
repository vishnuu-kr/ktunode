---
title: "Node analysis"
subject: "NETWORK THEORY"
module: "Module 1: Network fundamentals  and analysis methods:"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9877"
status: "completed"
scrapedAt: "2026-05-23T16:08:30.961Z"
---
# Network Theory: Module 1 - Network Fundamentals and Analysis Methods
## Topic: Node Analysis

Welcome, everyone, to our journey through Network Theory! Today, we're diving into a powerful technique for analyzing electrical circuits: **Node Analysis**. This method is fundamental to understanding how currents and voltages behave within any network, and it directly ties into our Course Outcome 1: "Analyze electrical networks using mesh and node methods." As we go through this, keep in mind that mastering node analysis will equip you with the skills to dissect even complex circuits, which is crucial for many of the problems you'll encounter in your studies and future careers.

Think of an electrical circuit like a city’s water system. Each pipe is a wire, each junction where pipes meet is a node, and the flow of water is the electric current. Node analysis helps us figure out the pressure (voltage) at each junction and how much water (current) is flowing through each pipe.

### What is a Node?

Before we jump into the analysis, let's clarify what we mean by a "node." In circuit theory, a **node** is simply a point where two or more circuit elements are connected. It's a junction. Sometimes, you might hear this referred to as a "junction" or a "connection point."

Now, the real power of node analysis comes from focusing on the *voltages* at these nodes. We often don't know these voltages initially, and our goal is to find them. Why is this so useful? Well, once we know the voltage at each node, we can easily determine the current flowing through any element connected to those nodes. This is a direct application of Ohm's Law ($V=IR$). If we know the voltage across a resistor, and we know its resistance, finding the current is a piece of cake!

### The Principle Behind Node Analysis: Kirchhoff's Current Law (KCL)

Node analysis is fundamentally built upon **Kirchhoff's Current Law (KCL)**. Do you remember KCL? It states that the algebraic sum of currents entering a node is equal to the algebraic sum of currents leaving the node. Or, put simply, the total current entering a node must equal the total current leaving it. No current is lost or gained at a node; it just redistributes.

Imagine a busy intersection in a city. Cars arriving from different roads must depart on other roads. The total number of cars entering the intersection at any moment must equal the total number of cars leaving it. KCL is the electrical equivalent of this traffic rule.

### Setting Up Node Equations

So, how do we translate KCL into equations for circuit analysis? Here's the step-by-step process:

1.  **Identify all the nodes in the circuit.** Look for all the points where three or more components meet.
2.  **Choose a reference node (ground).** This is a very important step! We designate one node as having a voltage of 0 volts. This is our "ground" reference. Think of it as sea level. All other node voltages are measured relative to this ground. In circuit diagrams, the ground symbol (often three horizontal lines, or an inverted triangle) clearly indicates this reference.
3.  **Assign a voltage variable to each non-reference node.** We usually use a capital 'V' followed by the node number or letter, like $V_1$, $V_2$, etc. These are the unknown voltages we want to find. This is where our learning outcome of "analyzing electrical networks" really kicks in – we are setting up the framework to solve for these unknown quantities.
4.  **Apply KCL at each non-reference node.** For each node that isn't our reference node, we write a KCL equation. Here's the trick: we express the currents leaving the node in terms of the node voltages and the resistances (or impedances in AC circuits).

Let's consider a simple example to illustrate step 4. Suppose we have a node, let's call it Node 1, and it's connected to three elements:
*   A resistor $R_1$ connected to the reference node (ground).
*   A resistor $R_2$ connected to another non-reference node, Node 2 ($V_2$).
*   A resistor $R_3$ connected to yet another non-reference node, Node 3 ($V_3$).

If we decide to write the KCL equation for Node 1, and we assume currents $I_1$, $I_2$, and $I_3$ are *leaving* Node 1 through $R_1$, $R_2$, and $R_3$ respectively, then our KCL equation will be:

$I_1 + I_2 + I_3 = 0$

Now, how do we express these currents in terms of node voltages? Using Ohm's Law!

*   **Current through $R_1$ (leaving Node 1 towards ground):** The voltage at Node 1 is $V_1$, and the voltage at the ground node is 0. So, the voltage *across* $R_1$ is $V_1 - 0 = V_1$. The current $I_1$ leaving Node 1 is therefore $(V_1 - 0) / R_1 = V_1 / R_1$.

*   **Current through $R_2$ (leaving Node 1 towards Node 2):** The voltage at Node 1 is $V_1$, and the voltage at Node 2 is $V_2$. The current leaving Node 1 and entering Node 2 would be $(V_1 - V_2) / R_2$. If we consider the current *leaving* Node 1, it's the voltage at Node 1 minus the voltage at the other end, divided by the resistance. So, if $I_2$ is leaving Node 1 and going towards Node 2, then $I_2 = (V_1 - V_2) / R_2$.

*   **Current through $R_3$ (leaving Node 1 towards Node 3):** Similarly, if $I_3$ is leaving Node 1 and going towards Node 3, then $I_3 = (V_1 - V_3) / R_3$.

So, our KCL equation for Node 1 becomes:

$\frac{V_1}{R_1} + \frac{V_1 - V_2}{R_2} + \frac{V_1 - V_3}{R_3} = 0$

See how we've expressed everything in terms of the unknown node voltages $V_1$, $V_2$, and $V_3$? This is the core of node analysis.

#### What About Voltage Sources?

Voltage sources complicate things slightly, but don't worry, they're manageable.

*   **Independent Voltage Source:** If an independent voltage source is connected between a non-reference node and the reference node (ground), it directly sets the voltage of that non-reference node. For example, if a 5V source is connected between Node 1 and ground, then $V_1 = 5V$. You don't need to write a KCL equation for that node; the voltage is already known!

*   **Supernode:** What if a voltage source is connected *between two non-reference nodes*? Let's say a voltage source $V_s$ is between Node 1 and Node 2, such that $V_1 - V_2 = V_s$. We can't directly write a current equation for Node 1 or Node 2 without involving the current through the voltage source, which we don't know yet. This is where the concept of a **supernode** comes in handy. We treat the two nodes connected by the voltage source as a single "supernode." We write a KCL equation for this supernode, summing all currents leaving it. The voltage source equation ($V_1 - V_2 = V_s$) then provides the second equation needed to solve for $V_1$ and $V_2$. This is a clever way to handle these situations, and it's a concept often tested. Van Valkenburg (Revised 3/e, 2019) and Irwin & Nelms (12/e, 2020) provide excellent explanations and examples of supernodes.

#### What About Current Sources?

Current sources are actually quite friendly in node analysis!

*   **Independent Current Source:** If an independent current source $I_s$ is entering a node, it contributes positively to the sum of currents leaving the node if we write it as $I_s$ leaving (which is negative current entering), or negatively if we are summing currents leaving. It's often easier to think about the direction of the current source: if the source injects current *into* a node, and we're summing currents *leaving* that node, the source's value will appear as a negative term in the equation. Conversely, if the source is extracting current *from* the node, it will appear as a positive term.

    For example, if a current source $I_s$ is *leaving* Node 1 towards another part of the circuit, and we are writing the KCL equation for Node 1, the term would be $+I_s$. If the current source $I_s$ is *entering* Node 1 from another part of the circuit, the term in the KCL equation for Node 1 (sum of currents leaving) would be $-I_s$.

### The System of Equations and Solution

After applying KCL to all non-reference nodes, we'll end up with a system of linear algebraic equations. The number of equations will be equal to the number of non-reference nodes.

For a circuit with $N$ nodes, and choosing one as reference, we'll have $N-1$ non-reference nodes. If there are $m$ voltage sources connected between non-reference nodes (creating $m$ supernodes), and no other special configurations, we'll have $(N-1) - m$ standard nodes and $m$ supernodes, leading to a total of $N-1$ equations.

Once we have this system of equations, we solve them using standard algebraic techniques. You can use:

*   **Substitution:** Solve one equation for one variable and substitute it into the others.
*   **Elimination:** Add or subtract equations to eliminate variables.
*   **Matrix Methods (like Cramer's Rule or Gaussian Elimination):** This is particularly useful for circuits with many nodes, as it can be efficiently solved using calculators or computer software. This aligns with CO1, as matrix methods are a powerful analysis tool.

Let's recall a general form of a node equation for a node $k$:

$\sum_{j=1}^{N} V_j G_{kj} = I_{k,external}$

where:
*   $V_j$ is the voltage at node $j$.
*   $G_{kj}$ is the conductance between node $k$ and node $j$. (Remember, conductance $G = 1/R$).
*   $G_{kk}$ is the sum of all conductances connected to node $k$.
*   $I_{k,external}$ is the total current entering node $k$ from external current sources.

This general form is elegantly presented in textbooks like Kuo's "Network Analysis and Synthesis" (2/e, 2012).

### Example Walkthrough: A Simple Circuit

Let's put this into practice. Consider a circuit with three nodes, labeled 0, 1, and 2, where Node 0 is our reference (ground).

*   A 2 $\Omega$ resistor ($R_1$) is connected between Node 1 and Node 0.
*   A 3 $\Omega$ resistor ($R_2$) is connected between Node 1 and Node 2.
*   A 4 $\Omega$ resistor ($R_3$) is connected between Node 2 and Node 0.
*   A 10V voltage source is connected between Node 1 and Node 0, with the positive terminal at Node 1.
*   A 5A current source is connected, *entering* Node 2.

Let's analyze this step-by-step:

1.  **Nodes:** We have nodes 0, 1, and 2. Node 0 is our reference.
2.  **Reference Node:** Node 0 is ground ($V_0 = 0V$).
3.  **Voltage Variables:** We need to find $V_1$ and $V_2$.
4.  **Voltage Source:** The 10V source is between Node 1 and ground ($V_0$). This directly tells us that $V_1 = 10V$. How neat is that! We've already solved for one unknown. We don't need to write a KCL equation for Node 1. This is an important observation – voltage sources connected to ground simplify the problem significantly.
5.  **Apply KCL at Node 2:** We need to write a KCL equation for Node 2. Let's assume the current leaving Node 2 through $R_2$ is $I_{2-1}$, and the current leaving Node 2 through $R_3$ is $I_{2-0}$. The 5A current source is *entering* Node 2.

    So, our KCL equation for Node 2 (sum of currents leaving equals zero) will be:
    $I_{2-1} + I_{2-0} - (\text{current entering from 5A source}) = 0$
    $I_{2-1} + I_{2-0} - 5A = 0$

    Now, let's express $I_{2-1}$ and $I_{2-0}$ using Ohm's Law and node voltages:

    *   $I_{2-1}$ (current leaving Node 2 towards Node 1): Voltage at Node 2 is $V_2$, voltage at Node 1 is $V_1$. So, $I_{2-1} = (V_2 - V_1) / R_2 = (V_2 - V_1) / 3$.
    *   $I_{2-0}$ (current leaving Node 2 towards Node 0): Voltage at Node 2 is $V_2$, voltage at Node 0 is $0V$. So, $I_{2-0} = (V_2 - 0) / R_3 = V_2 / 4$.

    Substituting these into our KCL equation:
    $\frac{V_2 - V_1}{3} + \frac{V_2}{4} - 5 = 0$

    We already know $V_1 = 10V$. Let's substitute that:
    $\frac{V_2 - 10}{3} + \frac{V_2}{4} - 5 = 0$

    Now, we solve for $V_2$:
    Multiply by 12 (the LCM of 3 and 4) to clear the denominators:
    $4(V_2 - 10) + 3V_2 - 12 \times 5 = 0$
    $4V_2 - 40 + 3V_2 - 60 = 0$
    $7V_2 - 100 = 0$
    $7V_2 = 100$
    $V_2 = \frac{100}{7}$ Volts

And there you have it! We found the node voltages: $V_1 = 10V$ and $V_2 = \frac{100}{7}V$. From these, we can calculate the current through any resistor. For instance, the current through $R_2$ (from Node 1 to Node 2) would be $(V_1 - V_2) / R_2 = (10 - \frac{100}{7}) / 3 = (\frac{70-100}{7}) / 3 = \frac{-30}{21} = -\frac{10}{7}A$. The negative sign simply means the current actually flows from Node 2 to Node 1, which makes sense since $V_1 > V_2$. This ability to find currents is directly linked to our overall goal in network analysis.

### Connection to Course Outcomes

Let's explicitly map how node analysis helps us achieve our course objectives:

*   **CO1: Analyze electrical networks using mesh and node methods.** Node analysis is one of the primary tools for this. By systematically applying KCL and solving the resulting system of equations, we dissect the network to find unknown voltages and currents. This is a core analysis technique.

*   **CO2: Apply network theorems to analyze electrical networks.** While node analysis is a direct method, the voltages and currents derived from it can then be used to apply theorems like Superposition, Thevenin's, or Norton's. For example, once you find $V_1$ and $V_2$, you can easily find the current through a specific resistor by considering it as the load in a larger circuit and then applying Thevenin's theorem to the rest of the circuit.

*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms.** Node analysis in its basic form is for DC or steady-state AC circuits with resistors. However, the principles extend to circuits with capacitors and inductors. When inductors and capacitors are present, their impedance ($sL$ for inductors, $1/(sC)$ for capacitors) replaces resistance, and the node equations become equations in the Laplace domain ($s$). Solving these node equations in the $s$-domain gives you the network's response in the Laplace domain, which can then be transformed back to the time domain to understand transient behavior. So, while we're focusing on the resistive case here, the foundation is crucial for transient analysis later.

*   **CO4: Identify the network functions and parameters of single-port and two-port networks.** Network functions and parameters (like impedance, admittance, ABCD parameters, etc.) are often derived using node analysis or its extensions. For example, to find the input impedance of a network (which is a single-port characteristic), you might apply a test voltage source at the port, set up node equations, and solve for the current entering the port. The ratio of voltage to current is then the input impedance.

### Advantages and Pitfalls

**Advantages of Node Analysis:**

*   **Efficient for circuits with many parallel elements or few voltage sources.** If your circuit has more current sources than voltage sources, node analysis often leads to simpler equations.
*   **Directly yields node voltages.** This is often what we are interested in.
*   **Systematic approach.** Provides a clear, structured way to solve circuits.

**Common Pitfalls to Avoid:**

*   **Incorrectly identifying nodes.** Double-check all your connection points.
*   **Forgetting to assign a reference node (ground).** Essential for defining voltages.
*   **Incorrectly assigning signs for currents leaving/entering nodes or current sources.** Always be consistent with your assumed current directions.
*   **Errors in setting up equations for voltage sources between non-reference nodes (supernodes).** Remember the voltage source equation and the supernode KCL equation.
*   **Algebraic mistakes when solving the system of equations.** This is probably the most common error! Use a calculator or matrix methods for complex systems.
*   **Confusing voltage sources and current sources.** They are handled differently.

Remember, practice is key. The more circuits you analyze using node method, the more comfortable you'll become with these steps and potential pitfalls.

### Summary

Node analysis is a powerful technique rooted in Kirchhoff's Current Law. By assigning voltage variables to nodes (with one node as a reference) and writing KCL equations at each non-reference node, we can express currents in terms of node voltages using Ohm's Law. This results in a system of linear equations that can be solved to find all unknown node voltages. This method is fundamental to circuit analysis and forms the basis for understanding more complex network behaviors and parameters, directly contributing to CO1, and laying groundwork for CO3 and CO4. Pay close attention to voltage sources, current sources, and the concept of supernodes to master this technique.

---

## Sample Questions with Answers

**Q1. (Conceptual) State Kirchhoff's Current Law (KCL) and explain its significance in node analysis.**

**Answer:**
Kirchhoff's Current Law (KCL) states that the algebraic sum of currents entering a node (or junction) is equal to the algebraic sum of currents leaving the node. Alternatively, it can be stated that the algebraic sum of all currents at any node is zero.

Significance in Node Analysis: Node analysis is entirely based on KCL. By applying KCL at each non-reference node, we set up a system of equations. Each equation represents the conservation of charge at that node. The currents leaving the node are expressed using Ohm's Law in terms of the unknown node voltages and known resistances (or admittances). Solving these KCL-derived equations allows us to determine the voltage at each node, which is the primary goal of node analysis.

**Q2. (Application) For the circuit shown below, use node analysis to find the voltage $V_x$.**

[Imagine a circuit here: Node 1 and Node 2 are non-reference. Node 0 is ground.
- A 2 $\Omega$ resistor ($R_1$) is between Node 1 and Node 0.
- A 3 $\Omega$ resistor ($R_2$) is between Node 1 and Node 2.
- A 5 $\Omega$ resistor ($R_3$) is between Node 2 and Node 0.
- A 2A current source ($I_1$) is entering Node 1.
- A 3A current source ($I_2$) is leaving Node 2.
- The voltage we want to find, $V_x$, is the voltage at Node 2, i.e., $V_2$.]

**Answer:**
1.  **Identify Nodes:** Nodes 0 (ground), 1, and 2.
2.  **Reference Node:** Node 0 is ground ($V_0 = 0V$).
3.  **Voltage Variables:** We need to find $V_1$ and $V_2$ (where $V_x = V_2$).
4.  **Apply KCL at Node 1:**
    Currents leaving Node 1 are through $R_1$ and $R_2$.
    Current entering Node 1 is the 2A source.
    KCL at Node 1: $\frac{V_1 - V_0}{R_1} + \frac{V_1 - V_2}{R_2} - I_1 = 0$
    Substitute values: $\frac{V_1 - 0}{2} + \frac{V_1 - V_2}{3} - 2 = 0$
    $\frac{V_1}{2} + \frac{V_1 - V_2}{3} - 2 = 0$
    Multiply by 6: $3V_1 + 2(V_1 - V_2) - 12 = 0$
    $3V_1 + 2V_1 - 2V_2 - 12 = 0$
    $5V_1 - 2V_2 = 12$  (Equation 1)

5.  **Apply KCL at Node 2:**
    Currents leaving Node 2 are through $R_2$ and $R_3$, and the 3A source is leaving.
    KCL at Node 2: $\frac{V_2 - V_1}{R_2} + \frac{V_2 - V_0}{R_3} + I_2 = 0$
    Substitute values: $\frac{V_2 - V_1}{3} + \frac{V_2 - 0}{5} + 3 = 0$
    $\frac{V_2 - V_1}{3} + \frac{V_2}{5} + 3 = 0$
    Multiply by 15: $5(V_2 - V_1) + 3V_2 + 45 = 0$
    $5V_2 - 5V_1 + 3V_2 + 45 = 0$
    $-5V_1 + 8V_2 = -45$ (Equation 2)

6.  **Solve the System of Equations:**
    We have:
    (1) $5V_1 - 2V_2 = 12$
    (2) $-5V_1 + 8V_2 = -45$

    Add Equation 1 and Equation 2 to eliminate $V_1$:
    $(5V_1 - 2V_2) + (-5V_1 + 8V_2) = 12 + (-45)$
    $6V_2 = -33$
    $V_2 = \frac{-33}{6} = -\frac{11}{2} = -5.5$ Volts

    Therefore, $V_x = V_2 = -5.5$ V.

**Q3. (Understanding Supernode) Consider a circuit with two non-reference nodes, Node 1 and Node 2, connected by a 10V voltage source with its positive terminal at Node 1. If you were to write the KCL equations for this scenario, what would be the key equations you'd use, and why is the concept of a 'supernode' introduced?**

**Answer:**
When a voltage source connects two non-reference nodes (say $V_1$ and $V_2$), we cannot directly write KCL equations for Node 1 and Node 2 without knowing the current through the voltage source. This is where the concept of a **supernode** is used.

1.  **Voltage Source Equation:** The voltage source itself provides one equation relating the node voltages:
    $V_1 - V_2 = 10V$ (assuming the positive terminal of the 10V source is at Node 1).

2.  **Supernode KCL Equation:** We treat Node 1 and Node 2 together as a single "supernode." We then sum all currents leaving this entire supernode and set it to zero. Any current leaving Node 1 towards another part of the circuit (not Node 2) or leaving Node 2 towards another part of the circuit (not Node 1) is included. The currents through the voltage source itself are not explicitly written in this KCL equation because we are considering the total current balance for the combined region.

    Let's say Node 1 is connected to a resistor $R_{1a}$ (leading to ground) and Node 2 is connected to a resistor $R_{2b}$ (leading to ground). The supernode KCL equation would look something like:
    (Current leaving Node 1 via $R_{1a}$) + (Current leaving Node 2 via $R_{2b}$) = 0
    $\frac{V_1 - V_{ground}}{R_{1a}} + \frac{V_2 - V_{ground}}{R_{2b}} = 0$

By combining the voltage source equation ($V_1 - V_2 = 10V$) with this supernode KCL equation, we obtain a system of two linear equations with two unknowns ($V_1$ and $V_2$), which can then be solved. The "supernode" concept effectively allows us to handle voltage sources between non-reference nodes by creating a larger boundary for KCL application, which simplifies the formulation of our system of equations.
