---
title: "Mesh analysis"
subject: "NETWORK THEORY"
module: "Module 1: Network fundamentals  and analysis methods:"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da50a"
status: "completed"
scrapedAt: "2026-05-23T17:41:06.329Z"
---
# NETWORK THEORY: Module 1: Network Fundamentals and Analysis Methods - Mesh Analysis

Hello everyone, and welcome back to Network Theory! Today, we’re diving into a really powerful tool for understanding our electrical circuits: **Mesh Analysis**. This is a fundamental technique, and mastering it will directly help us achieve **Course Outcome 1 (CO1)** – analyzing electrical networks using both mesh and node methods. We'll be building on our foundational understanding of circuits and setting ourselves up for later concepts.

Think of a complex circuit, like the wiring inside your smartphone or a car's electrical system. It’s not just a few simple loops. There are many interconnected paths. How do we systematically figure out the current flowing through each component? That’s where mesh analysis shines. It's a systematic approach, much like finding your way through a city by focusing on distinct blocks or "meshes" rather than trying to track every single street.

## Understanding the "Mesh" Concept

Before we jump into the "how," let's clarify what we mean by a "mesh." Imagine a planar circuit – one that can be drawn on a flat surface without any wires crossing each other, except at junctions. A mesh, in this context, is a **fundamental loop** of the circuit. It's a closed path that contains no other closed paths within it. Think of it as the smallest possible "window" or "enclosure" in your circuit diagram.

We don't need to get bogged down in complex graph theory definitions for now. The key idea is that we'll assign a current to flow around each of these fundamental loops. These are called **mesh currents**. Crucially, these mesh currents are *not* necessarily the actual currents flowing through individual circuit elements. Instead, they are a set of independent currents that, when combined, determine the actual branch currents. This is a really important distinction to remember.

## Why Mesh Analysis? Its Connection to CO1

Our goal here, as stated in **CO1**, is to *analyze* electrical networks. Mesh analysis allows us to do just that by converting a circuit problem into a system of linear equations. Each mesh current becomes an unknown variable. By applying Kirchhoff's Voltage Law (KVL) to each mesh, we generate a set of equations, and solving this system tells us the value of each mesh current. Once we have the mesh currents, we can easily deduce the actual current flowing through any component in the circuit. This systematic approach avoids the redundancies that can happen when simply applying KVL to arbitrary loops.

Think of it like this: Imagine you have a complex road network. Instead of trying to describe the flow of every single car on every single street, you define a set of main arterial routes (our meshes) and the traffic flow (mesh currents) along these routes. From these arterial flows, you can figure out how many cars are actually turning onto or off of side streets.

## The Steps to Performing Mesh Analysis

Now, let's get practical. How do we actually *do* mesh analysis? It’s a step-by-step process, and keeping these steps in mind will be crucial for tackling exam problems.

### Step 1: Identify and Number the Meshes

First, look at your circuit diagram. Identify all the non-overlapping, fundamental loops. These are your meshes. Give each mesh a unique number or label (e.g., Mesh 1, Mesh 2, or $i_1, i_2$). It’s a good practice to draw arrows inside each mesh to indicate the assumed direction of the mesh current. Usually, a clockwise direction is chosen for consistency, but the direction itself doesn't matter as long as you are consistent with your sign conventions.

### Step 2: Assign Mesh Currents

Assign a unique mesh current variable to each identified mesh. As I mentioned, these are assumed to flow in a consistent direction (typically clockwise) around their respective meshes. Let's call them $i_1, i_2, i_3, \dots, i_n$ for $n$ meshes.

### Step 3: Apply Kirchhoff's Voltage Law (KVL) to Each Mesh

This is the core of the method. For each mesh, we write a KVL equation. Remember KVL: the sum of all voltage drops around any closed loop is zero. When writing the KVL equation for a particular mesh, consider the voltage drops across resistors and the voltage rises/drops across sources.

*   **Resistors:** If a resistor is part of only one mesh (let's say Mesh 1), its voltage drop is simply $V_R = i_1 R$. If it's common to two meshes (e.g., Mesh 1 and Mesh 2), and the mesh currents flow in opposite directions through it, the voltage drop in the KVL equation for Mesh 1 will be $i_1 R - i_2 R$. The term with the mesh current of the mesh you're currently analyzing is positive, and the term with the adjacent mesh current is subtracted because it's flowing in the opposite direction. This is a critical point where many students make sign errors.
*   **Voltage Sources:** If you traverse a voltage source from negative to positive in the direction of your mesh current, it's a voltage rise (+V). If you traverse from positive to negative, it's a voltage drop (-V).
*   **Current Sources:** A current source in a mesh introduces a slight complication. If a current source is *only* in one mesh, it directly dictates the value of that mesh current (e.g., if the current source is 5A and flows in the same direction as mesh current $i_1$, then $i_1 = 5A$). If a current source is shared between two meshes, it creates a constraint between the two mesh currents. This is handled using a "supermesh" concept, which we'll touch upon later.

### Step 4: Formulate and Solve the System of Equations

After applying KVL to each mesh, you'll have a system of $n$ linear equations with $n$ unknowns (the mesh currents $i_1, i_2, \dots, i_n$). This system can be solved using various methods: substitution, elimination, Cramer's rule, or matrix methods. For circuits with more than 2 or 3 meshes, using matrix methods (like Gaussian elimination or your calculator's matrix solver) is highly recommended.

### Step 5: Calculate Branch Currents and Element Voltages (If Needed)

Once you've solved for the mesh currents, you can find the actual current flowing through any branch of the circuit. If a branch is part of only one mesh, its current is simply the mesh current. If a branch is common to two meshes, its current is the difference between the two mesh currents. From branch currents, you can then calculate the voltage across any element using Ohm's Law ($V=IR$).

This entire process directly supports **CO1** by providing a structured method to analyze the circuit.

## Illustrative Example: A Simple Circuit

Let's walk through a simple example. Imagine a circuit with two loops.

**(Imagine a circuit diagram here: A 10V voltage source in series with a 2-ohm resistor, and this combination is in parallel with a branch containing a 3-ohm resistor and a 5-ohm resistor in series. The two loops are formed by the voltage source/2-ohm resistor and the 3-ohm/5-ohm branch.)**

Let's say the voltage source is on the left, with its positive terminal up. This source is in series with a 2 $\Omega$ resistor. This branch forms the left loop. This branch is then connected in parallel with another branch containing a 3 $\Omega$ resistor, followed by a 5 $\Omega$ resistor, forming the right loop.

1.  **Identify Meshes:** We have two meshes. Let's call the left mesh "Mesh 1" and the right mesh "Mesh 2".
2.  **Assign Mesh Currents:** Let's assume clockwise mesh currents $i_1$ for Mesh 1 and $i_2$ for Mesh 2.
3.  **Apply KVL:**
    *   **For Mesh 1 (Left Loop):** Starting from the bottom-left corner and going clockwise:
        *   Across the voltage source: We go from negative to positive, so it's a +10V rise.
        *   Across the 2 $\Omega$ resistor: The current $i_1$ flows through it. So, it's a voltage drop $2i_1$.
        *   Across the 3 $\Omega$ resistor: This resistor is common to both meshes. $i_1$ flows through it in one direction, and $i_2$ flows through it in the opposite direction. So, for Mesh 1, the voltage drop is $3i_1 - 3i_2$.
        *   KVL Equation for Mesh 1: $10 - 2i_1 - (3i_1 - 3i_2) = 0$
            Simplifying: $10 - 5i_1 + 3i_2 = 0$  or  $5i_1 - 3i_2 = 10$  (Equation 1)

    *   **For Mesh 2 (Right Loop):** Starting from the bottom-left corner and going clockwise:
        *   Across the 3 $\Omega$ resistor: This is common to both meshes. For Mesh 2, the current is $i_2$ and the opposing current is $i_1$. So, the voltage drop is $3i_2 - 3i_1$.
        *   Across the 5 $\Omega$ resistor: The current $i_2$ flows through it. So, it's a voltage drop $5i_2$.
        *   KVL Equation for Mesh 2: $(3i_2 - 3i_1) + 5i_2 = 0$
            Simplifying: $-3i_1 + 8i_2 = 0$  (Equation 2)

4.  **Solve the System:** We now have a system of two linear equations:
    1.  $5i_1 - 3i_2 = 10$
    2.  $-3i_1 + 8i_2 = 0$

    From Equation 2, we can express $i_1$ in terms of $i_2$: $i_1 = \frac{8}{3}i_2$.
    Substitute this into Equation 1:
    $5\left(\frac{8}{3}i_2\right) - 3i_2 = 10$
    $\frac{40}{3}i_2 - 3i_2 = 10$
    $\left(\frac{40}{3} - \frac{9}{3}\right)i_2 = 10$
    $\frac{31}{3}i_2 = 10$
    $i_2 = \frac{30}{31}$ Amperes (approximately 0.968 A)

    Now, find $i_1$:
    $i_1 = \frac{8}{3}i_2 = \frac{8}{3} \times \frac{30}{31} = \frac{8 \times 10}{31} = \frac{80}{31}$ Amperes (approximately 2.58 A)

5.  **Calculate Branch Currents:**
    *   Current through the 2 $\Omega$ resistor: This is just $i_1 = \frac{80}{31}$ A.
    *   Current through the 3 $\Omega$ resistor: This is the difference between $i_1$ and $i_2$ (assuming $i_1$ is "down" and $i_2$ is "up" through it for simplicity in visualizing branch current direction, or more formally, the current is $i_1 - i_2$ or $i_2 - i_1$ depending on the direction of interest). Let's say we want the current flowing from left to right through the 3 $\Omega$ resistor. This direction is the same as $i_1$ and opposite to $i_2$. So, the branch current is $i_1 - i_2 = \frac{80}{31} - \frac{30}{31} = \frac{50}{31}$ A.
    *   Current through the 5 $\Omega$ resistor: This is simply $i_2 = \frac{30}{31}$ A.

See how by following the steps, we've found the currents in each part of the circuit? This gives us the complete picture, enabling analysis. This process is fundamental for **CO1**.

## Handling Special Cases: Current Sources

What happens when our circuit contains current sources? This is where things can get a bit tricky, but also very insightful.

### Current Source in a Single Mesh

If a current source is located in a branch that belongs to *only one mesh*, it simplifies the problem considerably. For that specific mesh, the mesh current is directly determined by the current source.

*   **Example:** If a 5A current source is in series with a resistor in Mesh 1, and its direction is the same as our assumed $i_1$, then we immediately know $i_1 = 5$A. We can then substitute this value into the KVL equations for other meshes that might share a common element with Mesh 1. This reduces the number of simultaneous equations we need to solve.

### Current Source Between Two Meshes (The Supermesh)

This is a common scenario and requires a technique called the **supermesh**. When a current source is shared between two meshes, we cannot directly write a KVL equation for either of those meshes as usual, because the voltage across the current source is unknown.

Instead, we treat the two meshes that share the current source as a single, larger loop – the **supermesh**. We then write a single KVL equation for this supermesh. The voltage drops across the current source itself are simply ignored in this supermesh KVL equation.

However, we still need two independent equations to solve for the two unknown mesh currents. The second equation comes from applying KCL (Kirchhoff's Current Law) at the node *between* the two meshes where the current source is connected. This KCL equation expresses the relationship between the two mesh currents due to the current source.

*   **Analogy:** Imagine two rooms connected by a door. If the door is an "airtight seal" (a current source), you can't talk about the temperature in Room 1 or Room 2 independently using their individual walls. Instead, you talk about the entire "house" (supermesh) and then use the information about the door (the KCL relationship between the airflows/currents) to figure out the specifics.

Let's say Mesh 1 and Mesh 2 share a current source of $I_s$. If $i_1$ flows in one direction through the source and $i_2$ flows in the opposite direction, the KCL equation at the node where they meet would be: $i_1 - i_2 = I_s$ (or $i_2 - i_1 = I_s$, depending on the assumed directions). This equation, combined with the KVL equation for the supermesh, forms the system we solve.

This technique is vital for correctly applying mesh analysis in more complex scenarios, again aligning with **CO1**.

## Handling Dependent Sources

Mesh analysis works perfectly well with dependent sources (voltage or current sources whose values depend on other voltages or currents in the circuit). The process remains the same:

1.  Define your mesh currents.
2.  Write your KVL equations for each mesh, including the dependent source.
3.  The dependent source will introduce additional unknown variables (the variable it depends on).
4.  You'll need to write additional constraint equations based on the definition of the dependent source. For example, if a voltage source's value is $5v_x$, and $v_x$ is the voltage across a specific resistor (say, $R_1$), you'll write $v_x = i_k R_1$ (where $i_k$ is the mesh current through $R_1$).

This might expand your system of equations, but the core method of applying KVL remains. This demonstrates the robustness of mesh analysis for various circuit configurations, aiding in the analysis aspect of **CO1**.

## Advantages and Disadvantages of Mesh Analysis

Every method has its strengths and weaknesses. Understanding these helps us choose the best tool for the job.

### Advantages:

*   **Systematic and Organized:** Mesh analysis provides a structured way to solve circuits, reducing the chance of missing equations or making logical errors.
*   **Ideal for Circuits with More Loops than Nodes:** If a circuit has many loops but relatively few nodes, mesh analysis is often more efficient than nodal analysis. For instance, a circuit with many series elements forming multiple loops will benefit from mesh analysis.
*   **Handles Series Elements Naturally:** It naturally accounts for voltage drops across series combinations of components within a mesh.

### Disadvantages:

*   **Requires Planar Circuits:** Mesh analysis is strictly applicable only to planar circuits. If a circuit cannot be drawn on a flat surface without crossing wires (e.g., bridges or complex interconnections), mesh analysis isn't directly applicable. In such cases, nodal analysis or other techniques might be more suitable.
*   **Can Be Tedious for Many Meshes:** For circuits with a very large number of meshes, solving the resulting system of linear equations can become computationally intensive.
*   **Sign Errors:** The most common pitfall is making errors with signs, especially when dealing with common resistors and the direction of mesh currents. Paying close attention to these details is paramount.

Remembering these pros and cons is important. Sometimes, a question might implicitly suggest which method to use by the circuit's topology. This awareness helps in efficiently addressing **CO1**.

## Connection to Course Outcomes: A Quick Recap

*   **CO1: Analyze electrical networks using mesh and node methods:** Today, we've focused entirely on the mesh method. By systematically applying KVL and solving the resulting equations, we directly achieve the analysis objective. This is the primary outcome for this topic.
*   **CO2: Apply network theorems to analyze electrical networks:** While mesh analysis itself isn't a "theorem" like Superposition or Thevenin's, it's a fundamental analysis technique that *enables* the application and verification of these theorems. For example, after solving for all branch currents using mesh analysis, you could then use Ohm's Law and KCL/KVL to find equivalent resistances or voltages needed for Thevenin/Norton equivalents.
*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms:** Mesh analysis, as we've discussed it, applies to DC circuits or AC circuits where phasors are used (implicitly assuming sinusoidal steady-state). For transient analysis involving capacitors and inductors changing over time, we'll adapt this method using Laplace transforms, which is a topic for later modules, but the foundational structured approach of mesh analysis will be the basis.
*   **CO4: Identify the network functions and parameters of single-port and two-port networks:** Mesh analysis helps us determine the relationships between voltages and currents in a network. These relationships are precisely what network functions and parameters (like impedance, admittance, ABCD parameters) are all about. Once we have our mesh currents and branch currents, we can derive these parameters.

So, you see, mesh analysis is not just an isolated technique; it's a building block for many other important concepts in network theory.

## Common Pitfalls and Exam Tips

Let's talk about how you're likely to see this in exams and how to avoid common mistakes.

*   **Sign Errors:** I cannot stress this enough. Always be meticulous with your sign conventions when applying KVL, especially for resistors common to multiple meshes. If a resistor is shared by mesh $i_a$ and $i_b$, and you are writing the equation for mesh $i_a$, the contribution of that resistor is $R \cdot i_a - R \cdot i_b$. The mesh current of the mesh you are analyzing comes first and is positive.
*   **Current Source Placement:** Be particularly careful when a current source is present. Identify if it's in a single mesh or shared. Use the supermesh technique correctly if it's shared.
*   **Planarity:** Always check if the circuit is planar. If it's not, mesh analysis might not be the best first approach, or you might need to redraw or use alternative methods.
*   **Number of Equations:** Ensure you have the correct number of independent equations for the number of unknown mesh currents. For $n$ meshes, you should have $n$ equations.
*   **Solving the System:** Use a calculator's matrix solver for systems larger than 2x2. Manually solving large systems is error-prone and time-consuming. Double-check your input into the calculator.
*   **Relationship between Mesh and Branch Currents:** Remember that mesh currents are artificial constructs. The actual current in a branch might be a mesh current or the difference between two mesh currents. Clearly define and calculate these when asked.

**Exam Tip:** Often, questions will ask for the current through a specific resistor or the voltage across a specific component. So, after you've solved for all the mesh currents, remember to do that final step to get the actual branch current or voltage.

## Sample Questions with Answers

Here are a couple of practice questions to solidify your understanding.

**Question 1 (Conceptual):**
What is the primary advantage of using mesh analysis over arbitrarily chosen loops when applying Kirchhoff's Voltage Law?

**Answer 1:**
The primary advantage of mesh analysis is its systematic nature. By defining currents for fundamental loops (meshes), it ensures that each loop is considered independently and that the resulting system of equations is linearly independent. This systematic approach avoids redundant loops and ensures that all voltage drops and sources are accounted for precisely once per mesh in the KVL equation, leading to a solvable and correct system of equations representing the entire circuit. Arbitrarily chosen loops might result in overlapping segments or missing voltage sources, making the system of equations harder to set up correctly and solve.

**Question 2 (Application/Exam-Oriented):**
For the circuit shown below (assume a simple 2-mesh circuit with resistors and one voltage source, similar to the example we discussed, but let's keep it general), determine the current through the 3 $\Omega$ resistor using mesh analysis.

**(Diagram: A circuit with two meshes. Mesh 1 contains a 12V voltage source in series with a 2 $\Omega$ resistor, then connected to a 3 $\Omega$ resistor. Mesh 2 contains the 3 $\Omega$ resistor connected in series with a 5 $\Omega$ resistor and a 6 $\Omega$ resistor. The 12V source is assumed to be on the left, positive terminal up.)**

**Solution 2:**
Let's define our meshes and currents:
Mesh 1: Clockwise current $i_1$.
Mesh 2: Clockwise current $i_2$.

The 3 $\Omega$ resistor is common to both meshes.

**KVL for Mesh 1:**
Starting from the bottom left, going clockwise:
$+12V$ (source) $- 2\Omega \cdot i_1 - 3\Omega \cdot (i_1 - i_2) = 0$
$12 - 2i_1 - 3i_1 + 3i_2 = 0$
$12 - 5i_1 + 3i_2 = 0$
$5i_1 - 3i_2 = 12$  (Equation 1)

**KVL for Mesh 2:**
Starting from the bottom left, going clockwise:
$+3\Omega \cdot (i_2 - i_1) + 5\Omega \cdot i_2 + 6\Omega \cdot i_2 = 0$
$3i_2 - 3i_1 + 5i_2 + 6i_2 = 0$
$-3i_1 + 14i_2 = 0$  (Equation 2)

Now, we solve the system of equations:
1. $5i_1 - 3i_2 = 12$
2. $-3i_1 + 14i_2 = 0$

From Equation 2, $3i_1 = 14i_2$, so $i_1 = \frac{14}{3}i_2$.

Substitute this into Equation 1:
$5\left(\frac{14}{3}i_2\right) - 3i_2 = 12$
$\frac{70}{3}i_2 - 3i_2 = 12$
$\left(\frac{70}{3} - \frac{9}{3}\right)i_2 = 12$
$\frac{61}{3}i_2 = 12$
$i_2 = \frac{12 \times 3}{61} = \frac{36}{61}$ Amperes.

Now, find $i_1$:
$i_1 = \frac{14}{3}i_2 = \frac{14}{3} \times \frac{36}{61} = \frac{14 \times 12}{61} = \frac{168}{61}$ Amperes.

The current through the 3 $\Omega$ resistor is the difference between $i_1$ and $i_2$. Assuming the current flows from Mesh 1 into Mesh 2 through the 3 $\Omega$ resistor, this current is $i_1 - i_2$.
Current through 3 $\Omega$ resistor = $i_1 - i_2 = \frac{168}{61} - \frac{36}{61} = \frac{132}{61}$ Amperes.

So, by carefully applying KVL and solving the simultaneous equations, we found the current through the specified resistor. This process is key to mastering **CO1**.

That wraps up our discussion on Mesh Analysis. It’s a powerful technique that will serve you well. Practice these steps with various circuits from your textbooks (like Irwin/Nelms or Van Valkenburg) to build confidence. We’ll build on this foundation in our next session!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
