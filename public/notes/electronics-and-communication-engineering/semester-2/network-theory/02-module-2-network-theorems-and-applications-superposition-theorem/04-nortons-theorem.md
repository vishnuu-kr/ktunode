---
title: "Norton’s theorem"
subject: "NETWORK THEORY"
module: "Module 2: Network theorems and applications : Superposition theorem"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da511"
status: "completed"
scrapedAt: "2026-05-23T17:41:11.334Z"
---
# Network Theory: Module 2 - Network Theorems and Applications
## Topic: Norton's Theorem

Welcome back, everyone! In our journey through analyzing electrical networks, we've already touched upon some powerful tools. Today, we're diving into another fundamental concept that will simplify our lives immensely when dealing with complex circuits: **Norton's Theorem**.

You might be thinking, "Another theorem? Do we really need *more* ways to solve circuits?" The answer is a resounding yes! Think of these theorems as different lenses through which we can view a circuit. Each lens might highlight a particular aspect, making it easier to solve a specific problem. Norton's theorem, much like its close cousin Thévenin's theorem (which we'll implicitly be comparing it to), offers a remarkably simplified equivalent for any linear, two-terminal circuit.

### The Core Idea: Simplification through Equivalence

At its heart, Norton's theorem tells us that **any linear, bilateral, two-terminal electrical network can be replaced by an equivalent circuit consisting of a current source in parallel with a resistor.**

Let's break that down.

*   **Linear:** This means the components in the network (resistors, independent sources, dependent sources) all behave linearly. For instance, Ohm's Law ($V=IR$) holds true. If you double the voltage across a resistor, the current also doubles.
*   **Bilateral:** This means the circuit behaves the same way regardless of the direction of current flow. Most passive components like resistors are bilateral.
*   **Two-Terminal:** We are interested in what happens *between* two specific points in the network. We want to analyze the behavior of a load connected to these two terminals.

So, instead of dealing with a potentially complicated network of sources and resistors, we can boil it down to just two components: a single current source and a single resistor connected in parallel. This equivalent circuit will behave *exactly* the same as the original complex network with respect to the two terminals.

This is incredibly powerful. Imagine you have a complex circuit and you want to see how different loads affect it. If you can reduce the complex circuit to a simple Norton equivalent, you can then easily swap out different loads and quickly calculate the current or voltage without re-analyzing the entire complex circuit each time. It's like having a universal adapter for circuit analysis!

### What are the Components of the Norton Equivalent?

The Norton equivalent circuit has two key components:

1.  **The Norton Current ($I_N$)**: This is the equivalent current source. It represents the current that would flow *out* of the Norton equivalent circuit when its terminals are short-circuited.
2.  **The Norton Resistance ($R_N$)**: This is the equivalent resistance seen from the terminals of the network when all independent sources are turned off.

Notice the parallel connection. This is a crucial distinction from Thévenin's theorem, which uses a voltage source in series with a resistor. In fact, there's a direct relationship between the Thévenin equivalent and the Norton equivalent. If you have a Thévenin equivalent with voltage $V_{Th}$ and resistance $R_{Th}$, the corresponding Norton equivalent will have:

*   Norton Current, $I_N = \frac{V_{Th}}{R_{Th}}$
*   Norton Resistance, $R_N = R_{Th}$

This means if you've already found the Thévenin equivalent, you can easily derive the Norton equivalent, and vice-versa! It's like having two different perspectives on the same underlying truth of the circuit.

### How to Find the Norton Equivalent: A Step-by-Step Guide

Let's get practical. How do we actually calculate $I_N$ and $R_N$ for a given network? The process is quite systematic, and you'll find it builds upon techniques we've already discussed, like mesh and nodal analysis.

**Step 1: Find the Norton Current ($I_N$)**

*   **Concept:** $I_N$ is the current that flows when the two terminals of the network (let's call them A and B) are short-circuited.
*   **Procedure:**
    1.  Remove the load connected to the terminals A and B (if any).
    2.  Connect a short circuit directly across terminals A and B.
    3.  Calculate the current flowing *through this short circuit*. This current is $I_N$. You'll typically use nodal analysis, mesh analysis, or even basic circuit laws to find this short-circuit current.
*   **Example Analogy:** Imagine you want to know how much water flows out of a tap when you open it fully. $I_N$ is like measuring that maximum flow rate when the tap is wide open (short-circuited).

**Step 2: Find the Norton Resistance ($R_N$)**

There are two primary ways to find $R_N$.

*   **Method A: Turn Off Independent Sources**
    *   **Concept:** $R_N$ is the equivalent resistance seen looking into the terminals A and B of the original network, with all independent sources deactivated.
    *   **Procedure:**
        1.  Deactivate all **independent** voltage sources by replacing them with short circuits (their internal resistance is zero, like a perfect wire).
        2.  Deactivate all **independent** current sources by replacing them with open circuits (their internal resistance is infinite, like a break in the wire).
        3.  *Dependent sources are NOT turned off.* They continue to influence the circuit.
        4.  Calculate the equivalent resistance seen between terminals A and B. This is $R_N$. You can use series/parallel resistor combinations, or if dependent sources are present, you might need to inject a test voltage or current and calculate the resulting current or voltage, respectively.
    *   **Example Analogy:** Think about testing a water pipe system. You turn off the main water supply (independent sources) and then check how much resistance the pipes themselves offer to water flow.

*   **Method B: Using the Thévenin Equivalence Relationship**
    *   **Concept:** If you already know $V_{Th}$ and $R_{Th}$, you can directly compute $R_N = R_{Th}$.
    *   **Procedure:**
        1.  Calculate the open-circuit voltage ($V_{oc}$) between terminals A and B. This is your $V_{Th}$.
        2.  Calculate $R_{Th}$ by deactivating independent sources as described in Method A.
        3.  Then, $R_N = R_{Th}$.
    *   **When to use this?** This method is particularly useful if you've already worked through the Thévenin equivalent for the same circuit, or if calculating the open-circuit voltage is significantly easier than the short-circuit current (or vice-versa).

**Step 3: Draw the Norton Equivalent Circuit**

Once you have $I_N$ and $R_N$, you draw the equivalent circuit:

*   A current source with value $I_N$.
*   A resistor with value $R_N$, connected in parallel with the current source.
*   Connect these two parallel components to the original terminals A and B.

### Connecting to Course Outcomes

Let's see how this topic directly supports our course objectives:

*   **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4)**
    *   To find $I_N$, you *absolutely* need to be proficient in nodal and mesh analysis. When the terminals are short-circuited, the current calculation often becomes a direct application of these techniques. Finding $R_N$ (especially when dependent sources are involved) might also require injecting a test source, which is solved using nodal or mesh methods.
*   **CO2: Apply network theorems to analyze electrical networks (Knowledge Level: K3)**
    *   This is the very essence of what we're doing! Norton's theorem is a prime example of applying a theorem to simplify network analysis. We're learning to substitute a complex network with a simpler equivalent, which is a core skill for analyzing circuits efficiently.
*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4)**
    *   While Norton's theorem itself is primarily for steady-state or DC analysis, the techniques used to find $R_N$ (especially deactivating sources) and the resulting equivalent circuit (a current source in parallel with a resistor) are fundamental building blocks for transient analysis. For instance, if your circuit contains capacitors or inductors, their impedance ($1/sC$ or $sL$) will be part of the calculation for $R_N$ (or $Z_{Th}$), and the resulting Norton equivalent will itself be a circuit you can then analyze with Laplace transforms.
*   **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2)**
    *   The Norton equivalent circuit is a classic example of a single-port network. The equivalent current source and resistor define the behavior of this port. Understanding how to derive this equivalent circuit is a stepping stone to understanding more complex two-port network parameters like impedance parameters (z), admittance parameters (y), and hybrid parameters (h).

### Examples to Visualize and Understand

Let's work through a couple of examples. Forget the typical textbook examples for a moment, and think of it this way:

**Example 1: The "Battery Pack" Analogy**

Imagine you have a sophisticated power bank (your complex network) that can charge various devices. You want to know how much current it can deliver to a specific phone (your load). Instead of trying to understand every single circuit board inside the power bank, you just want to know its "output characteristic."

Norton's theorem says you can represent this power bank as a simple equivalent:

*   **$I_N$ (Norton Current):** This is the maximum current the power bank can deliver if you short-circuit its output terminals (which is *not* recommended in real life, but useful for analysis!). It's the "raw power" it can push out.
*   **$R_N$ (Norton Resistance):** This represents the internal resistance of the power bank. A lower $R_N$ means the power bank can deliver more current without its voltage dropping significantly.

If you connect your phone (a load resistor, say $R_L$) to this power bank, the current flowing into your phone will be:

$I_{phone} = \frac{I_N \times R_N}{R_N + R_L}$

This formula is derived directly from the Norton equivalent: the current $I_N$ splits between $R_N$ and $R_L$. Since they are in parallel, the voltage across them is the same. The total current flowing *into* the parallel combination is $I_N$. Using current division, the current through $R_L$ is $I_N \times \frac{R_N}{R_N + R_L}$.

**Example 2: A Practical Circuit**

Let's consider a simple circuit to find its Norton equivalent.

**(Imagine a circuit diagram here: A 12V independent voltage source in series with a 2-ohm resistor. This combination is then connected in parallel with a 4-ohm resistor. We are interested in the terminals across the 4-ohm resistor.)**

Let's label the terminals across the 4-ohm resistor as A and B.

**Step 1: Find $I_N$ (Short-circuit current)**

*   Remove the 4-ohm resistor.
*   Connect a short circuit across terminals A and B.
*   Now, the circuit consists of a 12V source in series with a 2-ohm resistor, and this series combination is connected to a short circuit (0 ohms).
*   The total resistance in this loop is 2 ohms.
*   Using Ohm's Law, the current flowing from the 12V source is $I = \frac{V}{R} = \frac{12V}{2\Omega} = 6A$.
*   This entire 6A current will flow through the short circuit at terminals A and B.
*   Therefore, $I_N = 6A$.

**Step 2: Find $R_N$ (Deactivate sources)**

*   Turn off the independent voltage source: replace it with a short circuit.
*   We are left with the 2-ohm resistor and the 4-ohm resistor (which we are looking into the terminals of).
*   The 2-ohm resistor is now directly connected to the terminals A and B (because the voltage source it was in series with is shorted).
*   The 4-ohm resistor is also connected to terminals A and B.
*   So, we have a 2-ohm resistor and a 4-ohm resistor in parallel between terminals A and B.
*   The equivalent resistance is $R_N = \frac{2\Omega \times 4\Omega}{2\Omega + 4\Omega} = \frac{8\Omega^2}{6\Omega} = \frac{4}{3}\Omega$.

**Step 3: Draw the Norton Equivalent**

The Norton equivalent circuit consists of:

*   A current source of 6A.
*   A resistor of $\frac{4}{3}\Omega$ in parallel with the current source.
*   These two are connected to terminals A and B.

Now, if we wanted to know the current through a 3-ohm load connected to A and B, we could use this equivalent. The current through the 3-ohm load ($R_L$) would be:

$I_{load} = I_N \times \frac{R_N}{R_N + R_L} = 6A \times \frac{\frac{4}{3}\Omega}{\frac{4}{3}\Omega + 3\Omega} = 6A \times \frac{\frac{4}{3}}{\frac{4+9}{3}} = 6A \times \frac{4}{13} = \frac{24}{13}A \approx 1.846A$.

This is much simpler than re-analyzing the original circuit every time you change the load!

### Important Considerations and Pitfalls

*   **Linearity is Key:** Norton's theorem, like Thévenin's, applies *only* to linear circuits. If your circuit contains non-linear elements like diodes or transistors (without linearization), these theorems won't work directly.
*   **Dependent Sources:** Remember to keep dependent sources active when calculating $R_N$. This is a common mistake. If you have dependent sources, you often need to inject a test source or calculate the open-circuit voltage and short-circuit current and use the relationship $R_N = V_{oc} / I_{sc}$.
*   **Sign Conventions:** Pay close attention to the direction of current for $I_N$ and the polarity of voltage when calculating $V_{oc}$. Consistency is vital.
*   **$R_N$ vs. $R_{Th}$:** Always remember that $R_N = R_{Th}$. This is a direct conversion.
*   **Superposition Theorem Connection:** While this topic is nested under "Superposition theorem" in the module structure, the direct application of Norton's theorem doesn't always *require* superposition. However, the *techniques* used to find $I_N$ or $R_N$ might involve superposition (e.g., if you were to calculate $I_N$ by considering the contribution from each independent source individually). The module structure is likely grouping these fundamental simplification theorems together.

### Summary - What to Remember

*   **Norton's Theorem:** Any linear, two-terminal network can be replaced by a current source ($I_N$) in parallel with a resistor ($R_N$).
*   **$I_N$ (Norton Current):** The current through a short circuit connected across the terminals.
*   **$R_N$ (Norton Resistance):** The equivalent resistance seen from the terminals when independent sources are turned off. Also, $R_N = R_{Th}$.
*   **Finding $R_N$:** Deactivate independent sources (voltage sources -> short circuit; current sources -> open circuit). Dependent sources remain. Calculate resistance. If dependent sources are present, you might need to inject a test voltage/current.
*   **Power of Simplification:** Reduces complex networks to simple, analyzable equivalents, saving time when analyzing different load conditions.

### Sample Questions and Answers

**1. Conceptual Question:**
Explain why Norton's theorem is useful in analyzing electrical networks.

**Answer:**
Norton's theorem is useful because it simplifies complex linear two-terminal networks into a very basic equivalent circuit: a current source in parallel with a resistor. This simplification is invaluable for several reasons:
*   **Efficiency:** It allows us to quickly determine the behavior of a network when different loads are connected without re-analyzing the entire complex network each time.
*   **Understanding:** It provides a fundamental insight into the "driving point" characteristics of a network, revealing its inherent current-supplying capability ($I_N$) and its internal resistance ($R_N$).
*   **Foundation for Further Analysis:** The process of finding the Norton equivalent uses core circuit analysis techniques (nodal, mesh), reinforcing those skills. The equivalent circuit itself can then be a starting point for other analyses, including transient behavior if reactive components are involved.

**2. Calculation Question:**
Find the Norton equivalent circuit for the network shown below, looking into terminals a-b.

**(Imagine a circuit diagram here: A 6V independent voltage source in series with a 3-ohm resistor. This series combination is then connected in parallel with a 2-ohm resistor. We are interested in the terminals across the 2-ohm resistor.)**

**Solution:**
Let's label the terminals across the 2-ohm resistor as a and b.

**Step 1: Find $I_N$ (Short-circuit current at a-b)**
*   Replace the 2-ohm resistor with a short circuit.
*   The circuit now has a 6V source in series with a 3-ohm resistor, connected to a short circuit.
*   The total resistance in the loop is 3 ohms.
*   The current flowing from the source is $I = \frac{V}{R} = \frac{6V}{3\Omega} = 2A$.
*   This 2A current flows through the short circuit across a-b.
*   Therefore, $I_N = 2A$.

**Step 2: Find $R_N$ (Deactivate independent sources)**
*   Deactivate the 6V voltage source by replacing it with a short circuit.
*   We are looking into terminals a-b. The original 2-ohm resistor is connected between a-b.
*   The 3-ohm resistor (which was in series with the voltage source) is now also connected directly across terminals a-b (because the voltage source was shorted).
*   So, we have the 2-ohm resistor and the 3-ohm resistor in parallel between terminals a-b.
*   $R_N = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{3\Omega \times 2\Omega}{3\Omega + 2\Omega} = \frac{6\Omega^2}{5\Omega} = 1.2\Omega$.

**Step 3: Draw the Norton Equivalent Circuit**
The Norton equivalent circuit consists of a 2A current source in parallel with a 1.2-ohm resistor, connected to terminals a-b.

**3. Conceptual/Application Question:**
A complex linear network is to be replaced by its Norton equivalent. If the short-circuit current ($I_N$) is found to be 5A and the equivalent resistance ($R_N$) is calculated as 10 ohms, what would be the current flowing through a 15-ohm load connected to the terminals?

**Answer:**
The Norton equivalent circuit consists of a 5A current source in parallel with a 10-ohm resistor. When a 15-ohm load resistor ($R_L$) is connected to these terminals, the current will split between $R_N$ and $R_L$. Using the current division rule for parallel branches:

$I_{load} = I_N \times \frac{R_N}{R_N + R_L}$
$I_{load} = 5A \times \frac{10\Omega}{10\Omega + 15\Omega}$
$I_{load} = 5A \times \frac{10}{25}$
$I_{load} = 5A \times \frac{2}{5}$
$I_{load} = 2A$

Thus, the current flowing through the 15-ohm load would be 2A. This demonstrates how easily we can analyze the effect of the load once the Norton equivalent is known.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
