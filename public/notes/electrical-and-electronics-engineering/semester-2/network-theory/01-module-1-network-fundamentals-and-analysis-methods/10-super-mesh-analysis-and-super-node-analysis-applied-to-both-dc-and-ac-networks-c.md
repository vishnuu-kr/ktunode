---
title: "Super-mesh analysis and super-node analysis applied to both DC and AC networks containing independent and dependent sources."
subject: "NETWORK THEORY"
module: "Module 1: Network fundamentals  and analysis methods:"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9878"
status: "completed"
scrapedAt: "2026-05-23T16:08:31.711Z"
---
# Network Theory: Module 1 - Network Fundamentals and Analysis Methods

## Topic: Super-mesh Analysis and Super-node Analysis in DC and AC Networks

Welcome back, everyone! In our journey through Network Theory, we've already established the foundational principles of circuit analysis using Kirchhoff's Laws, Mesh analysis, and Nodal analysis. These methods are powerful, allowing us to determine currents and voltages in various network configurations. However, as you’ll often find in real-world engineering challenges, circuits aren’t always neatly structured. Sometimes, we encounter situations that make direct application of standard mesh or nodal analysis a bit… awkward. Today, we’re going to tackle these slightly more complex scenarios using two specialized techniques: **Super-mesh Analysis** and **Super-node Analysis**. These are essentially extensions of our existing methods, designed to handle specific circuit configurations elegantly. And importantly, we’ll see how they apply equally well to both DC and AC networks, including those with those tricky dependent sources.

### Connecting to Our Course Objectives

Before we dive in, let's quickly see how this topic aligns with what we aim to achieve in this course.

*   **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4)**: This is precisely what we’re doing! Super-mesh and super-node are just enhanced versions of these fundamental methods. We’re moving beyond basic application to *analyzing* more complex networks.
*   **CO2: Apply network theorems to analyze electrical networks (Knowledge Level: K3)**: While not direct theorems like Superposition or Thevenin, these methods are essential *tools* for applying mesh and nodal analysis, which are core to understanding network behavior. You’ll be *applying* your knowledge of basic mesh and nodal analysis in new ways.

Think of it this way: you've learned to drive a car. Now we're learning to handle a stick shift or navigate a tricky roundabout. It's the same skill, just a more advanced application.

---

### Revisiting the Fundamentals: What Makes Analysis Awkward?

Let’s remind ourselves why we need these specialized techniques.

*   **Mesh Analysis Recap**: We use mesh analysis when we have independent and dependent voltage sources or resistors. The core idea is to write KVL equations for each independent loop (mesh) in the circuit. What happens if a **current source** sits *between* two meshes? This current source, by definition, dictates the current flowing through it, but it doesn't fit neatly into a single mesh equation. Trying to assign a mesh current to it leads to over-constraint.
*   **Nodal Analysis Recap**: We use nodal analysis when we have independent and dependent current sources or resistors. The core idea is to write KCL equations at each essential node. What happens if a **voltage source** connects *two nodes*? A voltage source forces a specific voltage difference between its terminals. If it connects two nodes that we'd normally define for nodal analysis, the voltage relationship between those two nodes is already known, making it difficult to write an independent KCL equation for each.

These situations, where a current source is shared between two meshes or a voltage source connects two essential nodes, are the prime candidates for our super-techniques. And yes, this applies whether our sources are DC (constant values) or AC (phasors, represented by magnitudes and phase angles).

---

### 1. Super-mesh Analysis: Taming the Shared Current Source

Imagine you’re in a bustling marketplace (the network), and you want to track the flow of people (current). Mesh analysis is like defining specific aisles (meshes) and counting how many people pass through each aisle.

#### The Problem: Current Source Between Meshes

Consider a scenario where a current source is directly connected between two meshes.

*   **DC Example:** Two loops sharing a 5A DC current source.
*   **AC Example:** Two meshes sharing a 2∠0° A AC current source.

If we try to apply standard mesh analysis, we'd assign mesh currents to each loop. Let’s say $I_1$ for loop 1 and $I_2$ for loop 2. The current source is *in* loop 1 and also *in* loop 2. If the current source dictates a current of, say, 3A flowing upwards, then the current $I_1$ through that branch must be 3A (or -3A, depending on direction), and the current $I_2$ through that branch must also be 3A (or -3A). This means $I_1 = I_2 = 3A$ (or $I_1 = -3A$ and $I_2 = -3A$, etc.). This is a constraint that reduces the number of independent mesh equations we need to form, but it’s an awkward way to handle it.

#### The Solution: The Super-mesh

Instead of trying to force the current source into individual mesh equations, we treat the two meshes it connects as a **single, larger mesh**, a “super-mesh.”

**How it works:**

1.  **Identify the Super-mesh:** Locate the meshes that share a common current source.
2.  **Remove the Current Source:** Mentally (or physically, on paper) remove the current source that connects these meshes.
3.  **Formulate the Super-mesh Equation:** Write a single KVL equation for this newly formed larger mesh, treating it as one big loop. This equation will involve the mesh currents of the individual meshes that were merged. The key is to correctly express the current flowing through the shared current source branch in terms of the involved mesh currents. If the current source is $I_s$ and it flows from mesh 1 into mesh 2, and the mesh currents are $I_1$ and $I_2$, the relationship is typically $I_1 - I_2 = I_s$ or $I_2 - I_1 = I_s$, depending on the assumed directions of $I_1$ and $I_2$ relative to the source.
4.  **Write Remaining Mesh Equations:** Write KVL equations for all other meshes that were *not* part of the super-mesh, as usual.
5.  **Solve the System:** You’ll now have a system of linear equations including the super-mesh equation and the equations for the other independent meshes. Solve this system to find all unknown mesh currents.

#### Dealing with Dependent Sources in Super-mesh

What if there’s a dependent source involved? The procedure remains the same! The dependent source will appear in the KVL equations just as it normally would. Remember, dependent sources depend on a voltage or current elsewhere in the circuit. We’ll need to express that controlling voltage or current in terms of our assumed mesh currents.

*   **Example Scenario:** A voltage-controlled voltage source (VCVS) where the controlling voltage is across a resistor in one of the meshes involved in the super-mesh. You'll write the KVL equation for the super-mesh, and when you encounter the VCVS, you'll substitute its value based on the voltage in that mesh, which itself is expressed using the mesh current of that mesh.

#### DC vs. AC in Super-mesh

The underlying principle is KVL, which holds true for both DC and AC circuits.

*   **DC:** Resistances are just numbers, and DC sources are constant values.
*   **AC:** Resistances become impedances (e.g., $R$, $j\omega L$, $\frac{1}{j\omega C}$), and AC sources are represented by phasors (magnitude and phase). We perform KVL using complex arithmetic (phasors).

**Analogy Time:** Imagine a group of friends (mesh currents) planning a road trip. They decide to combine their routes to cover a specific highway stretch (the current source) together. They form a "super-group" for that stretch, agreeing on a coordinated pace and direction ($I_1 - I_2 = I_s$). For other, independent stretches of the journey, each friend still plans their own route independently.

**Example:** (Let's sketch this out mentally as if on a whiteboard)

Consider a circuit with three meshes. Mesh 1 and Mesh 2 share a 5A current source pointing upwards. Mesh 3 is separate.

*   Assume mesh currents $I_1$ (clockwise in mesh 1), $I_2$ (clockwise in mesh 2), and $I_3$ (clockwise in mesh 3).
*   The current source is shared between mesh 1 and mesh 2. The current through it is 5A upwards.
*   If $I_1$ flows clockwise in mesh 1, the current it contributes upwards through the source branch is $I_1$.
*   If $I_2$ flows clockwise in mesh 2, the current it contributes upwards through the source branch is $-I_2$.
*   Therefore, the constraint equation is $I_1 - (-I_2) = 5$ or $I_1 + I_2 = 5$. This is the relationship dictated by the current source.

Now, we form the super-mesh by merging mesh 1 and mesh 2. We remove the current source. We write one KVL equation for this larger loop that encompasses both original meshes. Let's say this super-mesh loop has voltages $V_a, V_b, V_c, V_d$ around it. The sum of these voltages (including voltage drops across resistors, voltage rises/falls across voltage sources) must be zero. The key is that the currents contributing to voltage drops in the branches that *were* part of the original meshes are $I_1$ and $I_2$.

**Crucial Point:** The current source itself does *not* appear as a voltage drop or rise in the super-mesh KVL equation. Its effect is captured by the relationship between the mesh currents (e.g., $I_1 - I_2 = I_s$).

---

### 2. Super-node Analysis: Handling the Shared Voltage Source

Now, let’s switch our perspective. Instead of looking at loops, we’re looking at connection points – the nodes. Nodal analysis is about Kirchhoff’s Current Law (KCL) at these nodes.

#### The Problem: Voltage Source Between Nodes

What if a voltage source is connected between two nodes that we would typically apply KCL to?

*   **DC Example:** A 10V DC source connected between nodes A and B.
*   **AC Example:** A 5∠30° V AC source connected between nodes C and D.

If we try to apply standard nodal analysis, we might define node voltages $V_A$ and $V_B$. But the voltage source tells us directly that $V_A - V_B = 10V$ (or $V_B - V_A = 10V$, depending on polarity). This means $V_A$ and $V_B$ are not independent. If we try to write KCL at node A and node B independently, we’ll find we have fewer independent equations than unknowns, or we end up with redundant equations.

#### The Solution: The Super-node

To handle this, we create a **super-node**. This super-node encompasses the two nodes connected by the voltage source, plus the voltage source itself.

**How it works:**

1.  **Identify the Super-node:** Locate the nodes connected by a voltage source.
2.  **Enclose the Voltage Source:** Treat the two nodes and the voltage source connecting them as a single, larger node – the super-node.
3.  **Formulate the Super-node Equation:** Apply KCL to this entire super-node. This means summing all currents *leaving* the super-node and setting it equal to zero. The currents leaving the super-node are the currents flowing away from *all* the original nodes that were merged, excluding any current that goes *into* the voltage source itself (which is accounted for by the super-node's internal constraint).
4.  **Write the Constraint Equation:** Write an equation that expresses the relationship between the voltages of the two nodes connected by the voltage source, using the known value of the voltage source. If the voltage source $V_s$ is connected with positive terminal at node A and negative at node B, this constraint is simply $V_A - V_B = V_s$.
5.  **Write Remaining Node Equations:** Write KCL equations for all other essential nodes that were *not* part of the super-node, as usual.
6.  **Solve the System:** You’ll have a system of linear equations including the super-node KCL equation and the voltage source constraint equation (and any other node equations). Solve this system to find all unknown node voltages.

#### Dealing with Dependent Sources in Super-node

Dependent sources are handled just like in standard nodal analysis. If a dependent current source is involved, it will contribute to the KCL equation of the super-node (or any other node). If a dependent voltage source is involved, it will appear in the constraint equation for the super-node or contribute to the KCL of a non-super-node. The key is always to express the controlling voltage or current in terms of the node voltages of the circuit.

*   **Example Scenario:** A current-controlled current source (CCCS) where the controlling current is flowing through a resistor connected to one of the nodes in the super-node. The KCL for the super-node will include this CCCS, and you’ll substitute its value using the node voltage of the connected resistor.

#### DC vs. AC in Super-node

Again, KCL is fundamental. The transformation from DC to AC involves replacing resistances with impedances and voltages/currents with phasors.

*   **DC:** Node voltages are scalar values.
*   **AC:** Node voltages are phasors (complex numbers). We use complex arithmetic to solve the system of equations.

**Analogy Time:** Imagine you’re managing a team, and two key team members (nodes A and B) have a very close working relationship, always coordinating their efforts based on a specific performance metric (the voltage source). Instead of tracking each of them individually for every task, you treat them as a “super-team” for tasks that involve their coordinated effort. You sum up all external tasks handled by this super-team (super-node KCL). For internal coordination, you know their relationship ($V_A - V_B = V_s$). Other team members (other nodes) are managed individually.

**Example:** (Visualizing on a whiteboard)

Consider a circuit with three essential nodes: A, B, and G (ground, usually 0V). A 10V DC voltage source is connected between nodes A and B, with the positive terminal at A.

*   Assume node voltages $V_A, V_B, V_G$ (where $V_G = 0$).
*   Standard nodal analysis would require KCL at A and KCL at B.
*   But, we know $V_A - V_B = 10V$. This is our constraint.

To use super-node analysis:
1.  We create a super-node encompassing nodes A and B, and the 10V source.
2.  We apply KCL to this super-node. This means summing all currents leaving the super-node. Currents leaving node A (that don't go into the source) and currents leaving node B (that don't go into the source) are summed.
3.  We also have the constraint equation: $V_A - V_B = 10V$.
4.  If there were other nodes, say C, we’d write KCL at C as usual.
5.  We solve the system of equations: (KCL at super-node) + ($V_A - V_B = 10V$) + (KCL at node C) to find $V_A, V_B, V_C$.

**Important Note:** When applying KCL to the super-node, any current that flows *into* or *out of* the voltage source itself is not explicitly written as a separate term. The voltage source's effect is entirely captured by the constraint equation. Currents flowing from other branches *into* the super-node are treated as incoming currents for the KCL sum, and currents flowing *out* are treated as outgoing.

---

### Handling Dependent Sources with Super-methods: The Key is Consistency

Let’s zoom in on how dependent sources interact with these methods, as this is often where students get a bit tripped up. Remember, dependent sources depend on a voltage across a component or a current through a component elsewhere in the circuit.

#### Super-mesh with Dependent Sources

Suppose a voltage-controlled voltage source (VCVS) $k v_x$ is present in one of the meshes involved in a super-mesh.

1.  **Identify $v_x$**: Determine which voltage $v_x$ controls the source. Express $v_x$ in terms of the mesh currents of the meshes involved in the super-mesh or other meshes. For example, if $v_x$ is the voltage across a resistor $R$ in mesh 1, and $R$ has assumed current $I_1$, then $v_x = I_1 R$ (or $-I_1 R$ depending on polarity).
2.  **Incorporate in Super-mesh KVL**: When you write the KVL for the super-mesh, the VCVS will appear as a voltage rise or drop. Substitute the expression for $v_x$ (in terms of mesh currents) into the value of the VCVS.
3.  **The constraint equation remains:** The relation dictated by the shared current source ($I_a - I_b = I_s$) is still vital.

#### Super-node with Dependent Sources

Suppose a current-controlled current source (CCCS) $k i_x$ is present and contributes to the KCL of a super-node.

1.  **Identify $i_x$**: Determine which current $i_x$ controls the source. Express $i_x$ in terms of the node voltages of the circuit. For example, if $i_x$ is the current flowing from node P to node Q through a resistor $R_{PQ}$, and we know $V_P$ and $V_Q$, then $i_x = (V_P - V_Q) / R_{PQ}$.
2.  **Incorporate in Super-node KCL**: When you write the KCL for the super-node, the CCCS contributes a current value. Substitute the expression for $i_x$ (in terms of node voltages) into the value of the CCCS.
3.  **The constraint equation remains:** The relation dictated by the shared voltage source ($V_a - V_b = V_s$) is still essential.

**Remember this:** The fundamental principle is that the controlling variable ($v_x$ or $i_x$) *must* be expressed in terms of the analysis variables (mesh currents for super-mesh, node voltages for super-node).

---

### Applying to AC Networks: The Power of Phasors

The concepts are identical for AC networks, but we work with phasors and impedances.

*   **Super-mesh in AC:** Resistances become impedances ($Z$). Voltage sources and current sources are phasors ($\mathbf{V}_s, \mathbf{I}_s$). KVL equations are written using complex numbers. The super-mesh equation will be a sum of voltage drops across impedances and voltage sources (represented as phasors). The constraint from the shared current source will be $\mathbf{I}_1 - \mathbf{I}_2 = \mathbf{I}_s$.
*   **Super-node in AC:** Resistances become impedances ($Z$). Voltage sources and current sources are phasors ($\mathbf{V}_s, \mathbf{I}_s$). KCL equations are written using complex numbers. The super-node KCL will sum currents through impedances (expressed as node voltage differences divided by impedance) and currents from current sources (phasors). The constraint from the shared voltage source will be $\mathbf{V}_A - \mathbf{V}_B = \mathbf{V}_s$.

**Textbook Connection:** You’ll find detailed examples and explanations in chapters dealing with AC circuit analysis in your textbooks, particularly in Irwin & Nelms, and Kuo. They often illustrate these techniques with complex impedance networks. Sudhakar & Shyammohan and Van Valkenburg also provide solid grounding in AC analysis.

---

### Summary and Key Takeaways

Let’s consolidate what we’ve learned. Super-mesh and super-node are not new fundamental laws, but rather clever applications of Kirchhoff's Laws to simplify analysis in circuits with specific configurations.

*   **Super-mesh** is used when a **current source** is common to two meshes. You merge those meshes into a single “super-mesh” and write one KVL equation for it, plus the constraint equation for the current source, and KVL for other independent meshes.
*   **Super-node** is used when a **voltage source** connects two essential nodes. You treat those nodes and the source as a single “super-node” and apply KCL to it, along with the constraint equation for the voltage source, and KCL for other independent nodes.
*   These techniques are equally valid for **DC and AC networks**. For AC, use impedances and phasors.
*   **Dependent sources** are handled by ensuring their controlling variables are expressed in terms of the analysis variables (mesh currents or node voltages).

These methods are powerful tools that will significantly speed up your analysis for specific circuit types. Mastering them means you can efficiently tackle more complex network problems, fulfilling CO1 and demonstrating CO2 by applying foundational analysis methods.

---

### Sample Questions and Answers

**Q1. (Conceptual)** When would you choose to use super-mesh analysis over standard mesh analysis?

**Answer:** You would choose super-mesh analysis when a **current source** is connected between two adjacent meshes. In standard mesh analysis, a current source within a single mesh can be directly incorporated, or its value directly sets a mesh current. However, when it bridges two meshes, directly assigning independent mesh currents to both becomes problematic as the source's value dictates a relationship between them. Super-mesh analysis elegantly handles this by treating the two meshes and the current source as a single, larger loop, simplifying the equation formulation.

**Q2. (Conceptual)** What is the primary constraint equation established when using super-node analysis for a voltage source $V_s$ connected between nodes X and Y (positive terminal at X)?

**Answer:** The primary constraint equation is simply the direct relationship given by the voltage source: $V_X - V_Y = V_s$. This equation directly links the potentials of the two nodes connected by the voltage source, reducing the number of independent node voltages.

**Q3. (Application - DC)** Consider a circuit where Mesh 1 and Mesh 2 share a 3A current source directed upwards. Mesh 1 has resistances $R_1, R_2$ and a voltage source $V_1$. Mesh 2 has resistances $R_3, R_4$ and a voltage source $V_2$. If the current source is between nodes A and B, and $I_1$ is the clockwise mesh current for Mesh 1, and $I_2$ is the clockwise mesh current for Mesh 2, write the constraint equation relating $I_1$ and $I_2$ due to the current source.

**Answer:** Let's assume the current source is located between two branches, one in Mesh 1 and one in Mesh 2. If $I_1$ is the clockwise current in Mesh 1, the current flowing upwards through the source branch from Mesh 1 is $I_1$. If $I_2$ is the clockwise current in Mesh 2, the current flowing upwards through the source branch from Mesh 2 is $-I_2$. Since the source supplies 3A upwards, we have:
$I_1 - (-I_2) = 3$
$I_1 + I_2 = 3$ A

**Q4. (Application - AC)** In an AC circuit, a voltage source of $5 \angle 30^\circ$ V is connected between nodes P and Q (positive at P). You are using nodal analysis and have decided to create a super-node for P and Q. Write the constraint equation for the node voltages $V_P$ and $V_Q$.

**Answer:** The constraint equation directly reflects the voltage source connected between nodes P and Q. With the positive terminal at P, the relationship is:
$V_P - V_Q = 5 \angle 30^\circ$ V

**Q5. (Conceptual - Dependent Sources)** If a voltage-controlled current source (VCCS) depends on the voltage across a resistor in a mesh that is part of a super-mesh, how is this handled in the super-mesh analysis?

**Answer:** When writing the KVL equation for the super-mesh, the VCCS will appear as a current source term contributing to the current balance. The value of this VCCS, $k v_x$, will be substituted using the expression for $v_x$. Since $v_x$ is the voltage across a resistor in one of the involved meshes, it can be expressed in terms of the mesh currents associated with those meshes. For example, if $v_x$ is across resistor $R$ in mesh 'm' with current $I_m$, and the source is in the super-mesh of meshes 'a' and 'b', you'd write $v_x = I_m R$, and then substitute this into the VCCS value within the super-mesh KVL equation. The constraint equation for the common current source ($I_a - I_b = I_s$) remains separate.

**Q6. (Exam Style - AC Super-mesh)** For the circuit shown below (imagine a circuit diagram here with three meshes. Mesh 1 and 2 share a 2∠0° A current source directed upwards. Mesh 1 has a 10Ω resistor and a 5∠0° V voltage source. Mesh 2 has a 20Ω resistor. Mesh 3 has a 30Ω resistor and a 10∠90° V voltage source. Mesh 1 and 3 share a 20Ω resistor. Mesh 2 and 3 share a 40Ω resistor.), write the KVL equation for the super-mesh formed by Mesh 1 and Mesh 2. Assume clockwise mesh currents $I_1$, $I_2$, and $I_3$.

**Answer:**
First, identify the super-mesh: Meshes 1 and 2 share the 2∠0° A current source.
We are merging Mesh 1 and Mesh 2 into a single super-mesh. Let's trace the loop of this merged mesh. The current source itself does not contribute a voltage drop/rise in the KVL equation of the super-mesh; its effect is captured by the constraint.
Let's assume the current source is between node X (in Mesh 1) and node Y (in Mesh 2), with current flowing from X to Y.
The current $I_1$ flows clockwise in Mesh 1. The current flowing upwards through the source branch is $I_1$.
The current $I_2$ flows clockwise in Mesh 2. The current flowing upwards through the source branch is $-I_2$.
The constraint equation is $I_1 - (-I_2) = 2 \angle 0^\circ$, or $I_1 + I_2 = 2 \angle 0^\circ$.

Now, for the super-mesh KVL: We traverse the combined loop of Mesh 1 and Mesh 2.
Starting from a reference point and moving clockwise:
1.  Voltage drop across 10Ω resistor in Mesh 1: $10 I_1$
2.  Voltage drop across 5∠0° V source (assuming positive terminal is encountered second, so it's a voltage rise): $+5 \angle 0^\circ$ V
3.  Voltage drop across 20Ω resistor in Mesh 2: $20 I_2$
4.  Voltage drop across 40Ω resistor (shared between Mesh 2 and 3): The current flowing through it in the super-mesh direction is $I_2$. So, $40 I_2$.
5.  Voltage drop across 20Ω resistor (shared between Mesh 1 and 3): The current flowing through it in the super-mesh direction is $I_1$. So, $20 I_1$.

Summing these voltage drops and sources in the super-mesh KVL:
$10 I_1 + 5 \angle 0^\circ + 20 I_2 + 40 I_2 + 20 I_1 = 0$
$30 I_1 + 60 I_2 + 5 \angle 0^\circ = 0$

This is the KVL equation for the super-mesh. Remember that this equation, along with the constraint equation ($I_1 + I_2 = 2 \angle 0^\circ$) and the KVL for Mesh 3, would form the system to solve for $I_1, I_2, I_3$.
