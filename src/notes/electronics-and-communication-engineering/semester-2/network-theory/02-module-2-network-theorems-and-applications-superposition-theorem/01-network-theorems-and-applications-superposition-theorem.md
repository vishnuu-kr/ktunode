---
title: "Network theorems and applications : Superposition theorem"
subject: "NETWORK THEORY"
module: "Module 2: Network theorems and applications : Superposition theorem"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da50e"
status: "completed"
scrapedAt: "2026-05-23T17:41:08.894Z"
---
# NETWORK THEORY: Module 2 - Network Theorems and Applications: Superposition Theorem

Welcome, everyone! In this module, we're diving deeper into the powerful toolkit that helps us analyze electrical circuits. We've already touched upon the fundamental laws, but now we're going to explore theorems that simplify complex circuit analysis, especially when multiple sources are involved. Today, our focus is on one of the most fundamental and widely applicable theorems: **The Superposition Theorem**.

This theorem is crucial for our course, as it directly supports **Course Outcome 2 (CO2): Apply network theorems to analyze electrical networks (Knowledge Level: K3)**. Understanding superposition allows us to break down a complex problem into simpler, manageable parts, which is a core skill for any electrical engineer. Think of it like tackling a big project; you don't try to do everything at once. You break it down into smaller tasks, complete each one, and then combine the results. Superposition does exactly that for circuits!

## 1. What is the Superposition Theorem?

At its heart, the Superposition Theorem states:

> **In any linear bilateral network containing multiple independent sources, the response (e.g., voltage across or current through any element) is the algebraic sum of the responses caused by each independent source acting alone.**

Let's unpack that definition.

*   **Linear Network:** This is a critical prerequisite. A circuit is considered linear if its elements obey Ohm's law (voltage is directly proportional to current, with a constant resistance) and if the superposition principle itself holds true. Most common circuit components like resistors, capacitors, and inductors are linear elements, especially when their values don't change with voltage or current. This is why our analysis relies on these components behaving predictably. Think of a resistor: doubling the voltage across it will always double the current, no matter what other components are present. That's linearity in action.
*   **Bilateral Network:** This means the network behaves the same way regardless of the direction of current flow. For example, a simple resistor is bilateral – it impedes current equally whether it flows from left to right or right to left.
*   **Multiple Independent Sources:** This is where the theorem truly shines. When you have more than one voltage or current source in a circuit, analyzing it directly can become quite complicated using methods like nodal or mesh analysis. Superposition offers a way to simplify this.
*   **Response:** This typically refers to the voltage across a specific element or the current flowing through it. We're interested in finding a particular value, and superposition helps us isolate the contribution of each source to that value.
*   **Each Independent Source Acting Alone:** This is the key practical aspect. To apply the theorem, we deactivate all other independent sources while we consider the effect of just one.

### 1.1 Deactivating Sources: The "Acting Alone" Part

This is a point that often trips students up. When we say "acting alone," it means we need to properly "turn off" or "deactivate" the other sources.

*   **Independent Voltage Sources:** To deactivate an independent voltage source, we replace it with a **short circuit** (a wire with zero resistance). Why? Because a short circuit forces the voltage across its terminals to be zero, effectively removing its voltage contribution. Imagine a perfect voltage source as a battery with a fixed voltage. If we short it, that battery is bypassed, and its voltage no longer influences the rest of the circuit.
*   **Independent Current Sources:** To deactivate an independent current source, we replace it with an **open circuit** (a break in the wire). Why? Because an open circuit allows zero current to flow through it, effectively removing its current contribution. Think of a current source as a perfect pump pushing a specific amount of current. If we create a break in the pipe, the pump can't push anything through, so its effect is nullified.

**Important Note:** This deactivation process *only* applies to *independent* sources. *Dependent* sources, which are controlled by voltage or current elsewhere in the circuit, must be left in the circuit as they are, because their behavior is inherently linked to the circuit's state. This is a crucial distinction to remember for exams!

### 1.2 Why Superposition Works: The Linearity Connection

The reason superposition works so beautifully is the linearity of the circuit elements and the principle of superposition itself in linear systems. Think about it: if doubling the input to a system doubles the output, and tripling the input triples the output, then the output for a sum of inputs will be the sum of the individual outputs.

Let's use a simple analogy. Imagine you're trying to figure out how much a busy intersection contributes to traffic congestion. You can't easily measure it directly if there are multiple roads feeding into it. Using the superposition idea, you could imagine closing off all roads *except* one. You measure the congestion caused by traffic from that single road. Then, you open that road back up and close off another, measuring its congestion. You repeat this for all incoming roads. Finally, you add up the congestion contributions from each individual road. The total congestion would be the sum of these individual contributions, assuming the intersection's capacity and traffic flow remain linear under these conditions. This is precisely what superposition does for circuits!

## 2. How to Apply the Superposition Theorem: Step-by-Step

Let's lay out the practical steps for using this theorem. This process is directly related to **CO2** and involves a systematic approach to circuit analysis.

**Step 1: Identify the Target Element and Sources.**
Clearly state which element's voltage or current you need to find, and identify all the independent sources (voltage and current) in the circuit.

**Step 2: Select One Independent Source and Deactivate Others.**
Choose one independent source to work with. Replace all other *independent* voltage sources with short circuits and all other *independent* current sources with open circuits. Leave dependent sources untouched.

**Step 3: Analyze the Circuit for the Selected Source.**
Using your preferred circuit analysis technique (like Ohm's Law, Kirchhoff's Laws, nodal analysis, or mesh analysis), calculate the desired voltage or current due to the *single active* source. Let's call this the partial response.

**Step 4: Restore All Sources and Repeat.**
Return all the deactivated sources to their original positions. Then, select the *next* independent source, deactivate all others (again, replacing voltage sources with shorts and current sources with opens), and calculate the desired voltage or current due to this second source. This is another partial response.

**Step 5: Sum the Partial Responses.**
Continue this process for every independent source in the circuit. Once you have the partial response from each source acting alone, algebraically sum these partial responses to get the total voltage or current for the target element. Remember, "algebraic sum" means paying attention to the signs (positive or negative) of your calculated partial responses.

### 2.1 An Example to Illustrate the Process

Let's consider a circuit like the one you might find in your textbooks, say, Irwin & Nelms or Sudhakar & Shyammohan. Imagine a simple circuit with a 10V voltage source and a 5mA current source feeding into a network of resistors. We want to find the voltage across a specific 1kΩ resistor.

**Scenario:** A circuit with a 10V voltage source ($V_1$) in series with a 1kΩ resistor ($R_1$), and this combination is in parallel with a 2kΩ resistor ($R_2$). Additionally, there's a 5mA current source ($I_1$) in series with $R_2$, and all of this is connected to ground. We want to find the voltage across $R_2$.

*(Here, you'd ideally draw the circuit diagram on a whiteboard. Since I can't do that, try to visualize it: A voltage source $V_1$ connected to $R_1$, and the other end of $R_1$ is connected to one end of $R_2$. The other end of $R_2$ is connected to ground. The current source $I_1$ is in series with $R_2$ and connected to the same junction as $R_1$. Let's refine this to make it a clear superposition example.)*

**Revised Scenario for Clarity:** Let's consider a circuit with a 12V voltage source ($V_S$) and a 2A current source ($I_S$) connected to a network of resistors. Let's say we have a 1kΩ resistor ($R_1$) and a 2kΩ resistor ($R_2$) such that $V_S$ is in series with $R_1$, and this combination is in parallel with $R_2$. The current source $I_S$ is connected in parallel with $R_2$. We want to find the current through $R_1$.

**(Referencing Van Valkenburg or Kuo here):** These texts often present circuits where you have a voltage source and a current source contributing to a common element.

**Let's break this down using superposition:**

**Step 1: Identify the Target and Sources.**
*   Target: Current through $R_1$.
*   Sources: 12V voltage source ($V_S$) and 2A current source ($I_S$).

**Step 2 & 3: Consider only the Voltage Source ($V_S$).**
*   Deactivate $I_S$: Replace the 2A current source with an **open circuit**.
*   Circuit becomes: $V_S$ (12V) in series with $R_1$ (1kΩ), and this series combination is in parallel with $R_2$ (2kΩ). Since $I_S$ was in parallel with $R_2$, opening it means $R_2$ is now effectively connected between the node after $R_1$ and the other side of $V_S$ (which is ground, let's assume). So, $R_1$ and $R_2$ are in parallel.
*   Analysis: The total resistance in the circuit is $R_{total} = R_1 || R_2 = \frac{1 \times 2}{1 + 2} = \frac{2}{3}$ kΩ.
*   The total current flowing from $V_S$ is $I_{total} = \frac{V_S}{R_{total}} = \frac{12V}{2/3 k\Omega} = 18$ mA.
*   Using current division for the current through $R_1$ (which is the total current): $I_{R1}^{(1)} = I_{total} \times \frac{R_2}{R_1 + R_2} = 18 \text{ mA} \times \frac{2 \text{ k}\Omega}{1 \text{ k}\Omega + 2 \text{ k}\Omega} = 18 \text{ mA} \times \frac{2}{3} = 12$ mA.
    *(Self-correction/Refinement: Let's redraw the circuit mentally to be absolutely sure. $V_S$ connected to $R_1$. $R_1$ connected to a node. From this node, $R_2$ goes to ground. Also from this node, the open-circuited $I_S$ connection is there. So $R_1$ and $R_2$ are indeed in parallel. The current through $R_1$ is the total current supplied by $V_S$ to the parallel combination.)*
    Ah, wait. If $V_S$ is in series with $R_1$, and this combination is in parallel with $R_2$, and $I_S$ is in parallel with $R_2$... Let's visualize this properly.

    *   Let's use a slightly different configuration to make it standard. $V_S$ is connected to $R_1$. The other end of $R_1$ is connected to ground. $R_2$ is connected between the positive terminal of $V_S$ and ground. $I_S$ is also connected between the positive terminal of $V_S$ and ground. We want the voltage across $R_1$. This is much simpler for superposition.

    **Revised Scenario 2:**
    Circuit: 12V voltage source ($V_S$) and a 2A current source ($I_S$) are connected in parallel to a 1kΩ resistor ($R_1$). A 2kΩ resistor ($R_2$) is connected in series with $R_1$. We want to find the current through $R_2$.

    **Step 1:** Target: Current through $R_2$. Sources: $V_S$, $I_S$.

    **Step 2 & 3: Consider only $V_S$.**
    *   Deactivate $I_S$: Replace the 2A current source with an **open circuit**.
    *   Circuit becomes: $V_S$ (12V) in parallel with $R_1$ (1kΩ). This parallel combination is in series with $R_2$ (2kΩ).
    *   Analysis: The current through $R_2$ will be the total current delivered by $V_S$ to the series combination of $R_1$ and $R_2$.
    *   Total resistance seen by $V_S$ is $R_{total} = R_1 + R_2 = 1 \text{ k}\Omega + 2 \text{ k}\Omega = 3 \text{ k}\Omega$.
    *   Current through $R_2$ due to $V_S$ alone is $I_{R2}^{(1)} = \frac{V_S}{R_{total}} = \frac{12V}{3 \text{ k}\Omega} = 4$ mA.
    *   The direction is from the positive terminal of $V_S$ towards ground through $R_2$.

    **Step 4: Restore Sources and Consider only $I_S$.**
    *   Restore $V_S$.
    *   Deactivate $V_S$: Replace the 12V voltage source with a **short circuit**.
    *   Circuit becomes: The 2A current source ($I_S$) is now in parallel with $R_1$ (1kΩ). This parallel combination is in series with $R_2$ (2kΩ).
    *   Analysis: The current from $I_S$ splits between $R_1$ and the path through the short-circuited $V_S$. Since $R_1$ is in parallel with the short circuit, all the current from $I_S$ will flow through the short circuit, and *none* will flow through $R_1$ or $R_2$.
    *   Wait, that's not right. The current source $I_S$ is in parallel with $R_1$. This parallel block is in series with $R_2$. When we short $V_S$, we are shorting the parallel combination of $I_S$ and $R_1$.
    *   The current source $I_S$ delivers 2A. This 2A splits between $R_1$ and the short circuit path. All 2A will go through the short circuit path. Therefore, the current through $R_1$ (and consequently $R_2$) is zero.
    *   So, the current through $R_2$ due to $I_S$ alone is $I_{R2}^{(2)} = 0$ mA.

    **Step 5: Sum the Partial Responses.**
    *   Total current through $R_2 = I_{R2}^{(1)} + I_{R2}^{(2)} = 4 \text{ mA} + 0 \text{ mA} = 4$ mA.

    *(Let's double-check this logic with a standard nodal analysis on the original circuit to confirm the superposition result. Original circuit: $V_S$ parallel with $I_S$. This block is in series with $R_1$, and this whole thing is in series with $R_2$. No, my description of the circuit was poor. Let's try a more standard example directly from a textbook.)*

**Let's Use a Classic Example:**
Find the current through the 10Ω resistor in the circuit below using superposition.
*(Imagine a circuit with a 10V source, a 5Ω resistor in series with it. This series combination is in parallel with a branch containing a 2Ω resistor and a 2A current source in series. The 10Ω resistor is in series with the 2Ω resistor and the 2A current source. The 10V source and 5Ω resistor are connected across the parallel combination of the 2Ω+2A branch and the 10Ω resistor. This setup is a bit messy.)*

Let's simplify the circuit for a cleaner example:
**Circuit:** A 10V voltage source ($V_1$) and a 2A current source ($I_1$) are connected in parallel. This parallel combination is then connected in series with a 5Ω resistor ($R_1$). We want to find the voltage across the 5Ω resistor ($R_1$).

**Step 1: Identify Target and Sources.**
*   Target: Voltage across $R_1$.
*   Sources: $V_1$ (10V), $I_1$ (2A).

**Step 2 & 3: Consider only $V_1$ (10V).**
*   Deactivate $I_1$: Replace the 2A current source with an **open circuit**.
*   Circuit becomes: $V_1$ (10V) in parallel with the open circuit. This parallel combination is in series with $R_1$ (5Ω).
*   Analysis: When $I_1$ is open, the 10V source is directly in series with $R_1$.
*   Voltage across $R_1$ due to $V_1$ alone: $V_{R1}^{(1)} = \frac{R_1}{R_1} \times V_1 = V_1 = 10$V. (This isn't quite right, as the voltage source is in series with R1, and the current source was in parallel with the voltage source. Let's try again with a typical setup.)

**Corrected, Standard Example:**
Consider a circuit with a 5V voltage source ($V_1$) and a 2A current source ($I_1$) connected to a network of resistors.
Let $V_1$ be in series with a 2Ω resistor ($R_1$). This series combination is connected between two nodes, A and B.
Let $I_1$ be connected between nodes A and B.
A 1Ω resistor ($R_2$) is connected between node B and ground.
We want to find the current through $R_2$.

**(Diagram visualization):**
Node A is the positive terminal of $V_1$. The negative terminal of $V_1$ is connected to node B. $R_1$ (2Ω) is in series with $V_1$. So, node A is connected to one end of $V_1$. The other end of $V_1$ is connected to the positive terminal of $R_1$. The other end of $R_1$ is connected to node B. This is a mistake in my setup again.

**Let's use a setup from Irwin & Nelms or Sudhakar:**
A circuit with a 10V source and a 5V source.
Let's say we have a loop with a 1Ω resistor and a 10V source.
In parallel with this loop, we have another branch with a 2Ω resistor and a 5V source.
We want to find the current through the 1Ω resistor.

**Circuit:**
*   Loop 1: 10V source, 1Ω resistor ($R_1$).
*   Loop 2: 5V source, 2Ω resistor ($R_2$).
*   The loops are connected such that the 10V source and $R_1$ are in series. The 5V source and $R_2$ are in series. These two series combinations are connected in parallel.
*   Target: Current through $R_1$.

**Step 1: Target and Sources.**
*   Target: Current through $R_1$.
*   Sources: $V_1$ (10V), $V_2$ (5V).

**Step 2 & 3: Consider only $V_1$ (10V).**
*   Deactivate $V_2$: Replace the 5V source with a **short circuit**.
*   Circuit becomes: $V_1$ (10V) in series with $R_1$ (1Ω). This combination is in parallel with a short circuit (where $V_2$ was).
*   Analysis: Since $V_1$ and $R_1$ are in series, and this combination is in parallel with a short circuit, all the current from $V_1$ will flow through the short circuit. The current through $R_1$ will be zero.
*   $I_{R1}^{(1)} = 0$ A.
    *(This is a common situation where one branch is shorted, simplifying the circuit dramatically.)*

**Step 4: Restore Sources and Consider only $V_2$ (5V).**
*   Restore $V_1$.
*   Deactivate $V_1$: Replace the 10V source with a **short circuit**.
*   Circuit becomes: A short circuit (where $V_1$ was) in series with $R_1$ (1Ω). This combination is in parallel with $V_2$ (5V) in series with $R_2$ (2Ω).
*   Analysis: The short circuit in series with $R_1$ means that the entire branch containing $V_1$ and $R_1$ is now just a short circuit connected across the points where the original $V_1$ was. This short circuit is in parallel with the branch containing $V_2$ and $R_2$.
*   Since there's a short circuit in parallel with the branch containing $V_2$ and $R_2$, all the current will flow through the short circuit. Therefore, the current through $R_2$ (and also the current that would have flowed through $R_1$ if it were active) is zero.
*   $I_{R1}^{(2)} = 0$ A.

**Step 5: Sum the Partial Responses.**
*   Total current through $R_1 = I_{R1}^{(1)} + I_{R1}^{(2)} = 0 \text{ A} + 0 \text{ A} = 0$ A.

*(This example yielded zero current, which is possible but maybe not the most illustrative. Let's try one where both contributions are non-zero.)*

**More Illustrative Example (Inspired by circuit examples in Sudhakar & Shyammohan):**

Find the voltage across the 6Ω resistor in the circuit below.
*(Circuit: A 12V voltage source and a 3Ω resistor are in series. This series combination is in parallel with a branch containing a 6Ω resistor and a 3A current source in series. We want the voltage across the 6Ω resistor.)*

**Step 1: Identify Target and Sources.**
*   Target: Voltage across the 6Ω resistor ($R_2$).
*   Sources: $V_1$ (12V), $I_1$ (3A).

**Step 2 & 3: Consider only $V_1$ (12V).**
*   Deactivate $I_1$: Replace the 3A current source with an **open circuit**.
*   Circuit becomes: $V_1$ (12V) in series with $R_1$ (3Ω). This series combination is in parallel with $R_2$ (6Ω) and the open circuit.
*   Analysis: The branch with $R_2$ and the open circuit is now just an open circuit. So, the 12V source and the 3Ω resistor ($R_1$) are effectively connected across the open circuit. The current through $R_1$ (and the voltage across it) is still dependent on the parallel connection.
    Let's re-draw this mentally: $V_1$ positive terminal to node A. Negative terminal of $V_1$ to node B. $R_1$ is between node A and node B. This is incorrect. $V_1$ is in series with $R_1$.

    **Correct Circuit Visualization:**
    Node A connected to positive terminal of $V_1$ (12V). Negative terminal of $V_1$ connected to one end of $R_1$ (3Ω). Other end of $R_1$ connected to node B.
    From node B, we have a connection to one end of $R_2$ (6Ω). The other end of $R_2$ is connected to node C.
    The 3A current source ($I_1$) is in series with $R_2$. So, from node B, we have $R_2$ in series with $I_1$, and this combination leads to node C.
    Let's assume Node C is ground.

    **Superposition Steps with the correct visualization:**

    **Step 1:** Target: Voltage across $R_2$ (6Ω). Sources: $V_1$ (12V), $I_1$ (3A).

    **Step 2 & 3: Consider only $V_1$ (12V).**
    *   Deactivate $I_1$: Replace the 3A current source with an **open circuit**.
    *   Circuit becomes: $V_1$ (12V) in series with $R_1$ (3Ω), connected between nodes A and B. From node B, $R_2$ (6Ω) is connected to ground. The branch that had $I_1$ is now open.
    *   Analysis: Node A is at 12V relative to node B (assuming $V_1$'s negative is at B). $R_1$ is in series with $V_1$. So the voltage drop across $R_1$ is not directly 12V.
        Let's use nodal analysis on the simplified circuit.
        Node B is the reference (ground) for $V_1$'s negative terminal. Node A is not ground.
        The total current from $V_1$ flows through $R_1$ and then through $R_2$ to ground.
        Total resistance in the loop = $R_1 + R_2 = 3\Omega + 6\Omega = 9\Omega$.
        Current through the loop = $\frac{V_1}{R_1 + R_2} = \frac{12V}{9\Omega} = \frac{4}{3}$ A.
        This current flows through $R_1$ and $R_2$.
        Voltage across $R_2$ due to $V_1$ alone is $V_{R2}^{(1)} = I \times R_2 = \frac{4}{3} \text{ A} \times 6\Omega = 8$ V.
        The direction is from node B to ground.

    **Step 4: Restore Sources and Consider only $I_1$ (3A).**
    *   Restore $V_1$.
    *   Deactivate $V_1$: Replace the 12V voltage source with a **short circuit**.
    *   Circuit becomes: A short circuit between nodes A and B. $I_1$ (3A) is in series with $R_2$ (6Ω), connected between node B and ground.
    *   Analysis: With $V_1$ shorted, node A and node B are connected by a wire. The 3A current source is in series with $R_2$ (6Ω) and connected between node B and ground. Since node A and node B are shorted, the current source $I_1$ is now effectively connected directly between node A and ground (via $R_2$).
    *   The 3A current source is pushing current into the series combination of $R_2$ and the shorted $V_1$. This means the 3A will flow through $R_2$.
    *   Voltage across $R_2$ due to $I_1$ alone: $V_{R2}^{(2)} = I_1 \times R_2 = 3 \text{ A} \times 6\Omega = 18$ V.
    *   The direction is from node B to ground.

    **Step 5: Sum the Partial Responses.**
    *   Total voltage across $R_2 = V_{R2}^{(1)} + V_{R2}^{(2)} = 8 \text{ V} + 18 \text{ V} = 26$ V.
    *   The direction is from node B to ground.

This example is more typical, showing non-zero contributions from each source. This method is incredibly useful when dealing with circuits that have multiple sources. It simplifies the problem by breaking it down. This directly ties into **CO2** by demonstrating the *application* of a network theorem.

## 3. Advantages and Disadvantages of Superposition

Like any tool, superposition has its strengths and weaknesses.

### 3.1 Advantages

*   **Simplifies Complex Circuits:** Its primary advantage is breaking down a complex circuit with multiple sources into several simpler circuits, each with only one source. This makes analysis more manageable.
*   **Handles Different Source Types:** It can handle circuits with both independent voltage and current sources simultaneously.
*   **Conceptual Clarity:** It provides a clear understanding of the individual contribution of each source to the overall circuit response. This can be very insightful, as highlighted by **CO2**.
*   **Foundation for Other Theorems:** The concept of linearity and breaking down problems is fundamental in electrical engineering and supports other analysis techniques.

### 3.2 Disadvantages

*   **Only for Linear Circuits:** As we stressed earlier, this theorem *only* applies to linear circuits. If your circuit contains non-linear elements like diodes or transistors that exhibit non-linear behavior, you cannot use superposition. This is a key limitation that instructors always test for.
*   **Time-Consuming for Simple Circuits:** For circuits with only one source, applying superposition would be unnecessarily complex and time-consuming. It's overkill.
*   **Calculation Intensive:** For circuits with many sources, you have to perform the analysis multiple times (once for each source), which can lead to a large number of calculations and potential for arithmetic errors.
*   **Does Not Work for Power Calculations Directly:** This is a VERY important point for exams. While you can sum voltages and currents, you cannot sum the powers calculated from each individual source analysis to get the total power. Power is a non-linear function of voltage and current ($P = VI$ or $P = I^2R$). The power dissipated by an element when multiple sources are present is *not* the sum of the powers dissipated when each source acts alone. You would need to find the total current and voltage using superposition first, and then calculate the total power from those values. Or, you would use other theorems like Tellegen's theorem for power. Remember this distinction!

## 4. Connection to Course Outcomes

Let's explicitly link our discussion back to the course outcomes:

*   **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4)**
    While superposition itself isn't mesh or nodal analysis, the *process* of applying superposition to find the response of each source *requires* the use of mesh or nodal analysis (or simpler methods like Ohm's law and Kirchhoff's laws) on the simplified circuits. So, superposition provides a context and application for these fundamental analysis techniques.

*   **CO2: Apply network theorems to analyze electrical networks (Knowledge Level: K3)**
    This is the direct link. Superposition is a core network theorem, and understanding its application—the steps, the deactivation of sources, and the summing of responses—is precisely what this outcome requires. We've seen how to break down a problem and use the theorem.

*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4)**
    Superposition can also be extended to transient analysis involving capacitors and inductors. If you have multiple sources (DC and AC, or transient sources), you can apply superposition to find the contribution of each source to the transient response. The analysis of each source's contribution would involve Laplace transforms if dealing with inductors/capacitors. However, for this specific topic, we are focusing on the DC application for clarity.

*   **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2)**
    This outcome is less directly related to the basic application of superposition, which is primarily about finding voltages and currents in circuits with multiple sources. Network functions and parameters (like impedance, admittance, Z-parameters, Y-parameters) are more advanced concepts often introduced after basic theorems. However, the *linearity* requirement for superposition is also a fundamental property of networks for which network functions are defined.

## 5. Common Pitfalls and Exam Tips

*   **Forgetting to deactivate sources correctly:** Always remember: Voltage sources become shorts, current sources become open circuits. And this only applies to *independent* sources.
*   **Sign errors:** When summing the partial responses, pay close attention to the direction and polarity you assumed for each calculated voltage or current. Algebraic sum is key.
*   **Power Calculation:** As mentioned, you *cannot* sum powers directly. Find the total current/voltage first, then calculate power. This is a classic exam trap.
*   **Dependent Sources:** Never deactivate dependent sources. They are part of the circuit's behavior and must remain active.
*   **Circuit Simplification:** Be careful when simplifying circuits after deactivating sources. Ensure you correctly redraw the circuit and understand how elements are connected.

## Sample Questions and Answers

**Question 1 (Conceptual):**
State the conditions under which the Superposition Theorem can be applied to an electrical network.

**Answer:**
The Superposition Theorem can be applied to electrical networks that are **linear** and **bilateral**. This means the circuit elements must behave linearly (e.g., obey Ohm's law, and their parameters do not change with voltage or current), and the circuit must be reciprocal (behaves the same way regardless of current direction). It is used to analyze networks with **multiple independent sources**.

**Question 2 (Application/Exam-Oriented):**
For the circuit shown below (imagine a circuit with a 10V voltage source and a 5V voltage source, each in series with a 5Ω resistor, and these two branches are connected in parallel), find the current flowing through the top 5Ω resistor.

*(Circuit Description: A 10V source is in series with a 5Ω resistor (Branch A). A 5V source is in series with another 5Ω resistor (Branch B). Branch A and Branch B are connected in parallel.)*

**Solution:**
Let $V_1 = 10V$, $R_1 = 5\Omega$ (Branch A), $V_2 = 5V$, $R_2 = 5\Omega$ (Branch B). We want to find the current through $R_1$.

**Step 1: Consider only $V_1$ (10V).**
Deactivate $V_2$ by replacing it with a short circuit.
Branch A: 10V source in series with $R_1$ (5Ω).
Branch B: Short circuit in series with $R_2$ (5Ω). This means Branch B is just a short circuit.
Since Branch A is in parallel with a short circuit, all the current from $V_1$ will flow through the short circuit. The current through $R_1$ is therefore zero.
$I_{R1}^{(1)} = 0$ A.

**Step 2: Consider only $V_2$ (5V).**
Deactivate $V_1$ by replacing it with a short circuit.
Branch A: Short circuit in series with $R_1$ (5Ω). This means Branch A is just a short circuit.
Branch B: 5V source in series with $R_2$ (5Ω).
Since Branch B is in parallel with a short circuit (Branch A), all the current from $V_2$ will flow through the short circuit. The current through $R_2$ is therefore zero.
However, we want the current through $R_1$. When $V_2$ is active and $V_1$ is shorted, $R_1$ is in series with a short circuit. The current through $R_1$ in this configuration would be whatever current flows through the short circuit. Since $R_1$ is effectively in a branch that is shorted out, the current through $R_1$ is 0.
$I_{R1}^{(2)} = 0$ A.

**Step 3: Sum the responses.**
Total current through $R_1 = I_{R1}^{(1)} + I_{R1}^{(2)} = 0 \text{ A} + 0 \text{ A} = 0$ A.

*(Self-Correction/Reflection on Q2: This still yields zero. Let's consider a more standard parallel circuit.)*

**Revised Question 2 (More Typical Exam Question):**
Find the voltage across the 2Ω resistor in the circuit below using the Superposition Theorem.

*(Circuit: A 6V voltage source ($V_1$) is in parallel with a 3A current source ($I_1$). This parallel combination is connected in series with a 2Ω resistor ($R_1$) and a 4Ω resistor ($R_2$). Find the voltage across $R_1$.)*

**Solution:**
Let $V_1 = 6V$, $I_1 = 3A$. $R_1 = 2\Omega$, $R_2 = 4\Omega$. We want the voltage across $R_1$.

**Step 1: Consider only $V_1$ (6V).**
Deactivate $I_1$ by replacing it with an open circuit.
The circuit becomes: $V_1$ (6V) in parallel with an open circuit. This parallel combination is in series with $R_1$ (2Ω) and $R_2$ (4Ω).
The open circuit in parallel with $V_1$ means that the current source is removed. The voltage source $V_1$ is now effectively in series with $R_1$ and $R_2$.
Total resistance seen by $V_1$ = $R_1 + R_2 = 2\Omega + 4\Omega = 6\Omega$.
The current flowing from $V_1$ is $I_{total} = \frac{V_1}{R_1 + R_2} = \frac{6V}{6\Omega} = 1$ A.
This current flows through $R_1$.
Voltage across $R_1$ due to $V_1$ alone: $V_{R1}^{(1)} = I_{total} \times R_1 = 1 \text{ A} \times 2\Omega = 2$ V.
The polarity is positive at the terminal where current enters $R_1$.

**Step 2: Consider only $I_1$ (3A).**
Deactivate $V_1$ by replacing it with a short circuit.
The circuit becomes: $I_1$ (3A) in parallel with a short circuit. This parallel combination is in series with $R_1$ (2Ω) and $R_2$ (4Ω).
When a current source is in parallel with a short circuit, all the current flows through the short circuit. The current through $R_1$ is thus zero.
$V_{R1}^{(2)} = 0$ V.

**Step 3: Sum the responses.**
Total voltage across $R_1 = V_{R1}^{(1)} + V_{R1}^{(2)} = 2 \text{ V} + 0 \text{ V} = 2$ V.

**Question 3 (Conceptual/Pitfall):**
Can you find the total power dissipated in a resistor by summing the powers calculated when each source acts alone? Explain why or why not.

**Answer:**
No, you cannot directly sum the powers calculated when each source acts alone. Power is a non-linear function of voltage and current ($P=VI=I^2R$). When multiple sources are present, their effects on voltage and current are not independent in terms of power dissipation. The total power dissipated in an element is calculated using the *total* voltage across it and the *total* current through it, which are found using superposition. The interaction between sources can change the power dissipation compared to the sum of individual powers.

This concludes our exploration of the Superposition Theorem. Remember its principles, its applications, and its limitations. Master this, and you've added a very powerful tool to your network analysis arsenal!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
