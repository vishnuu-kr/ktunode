---
title: "Source transformation"
subject: "NETWORK THEORY"
module: "Module 1: Network fundamentals  and analysis methods:"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9874"
status: "completed"
scrapedAt: "2026-05-23T16:08:28.737Z"
---
# Network Theory: Module 1 - Network Fundamentals and Analysis Methods

## Topic: Source Transformation

Welcome, everyone! Today, we're diving into a really neat technique in network analysis called **Source Transformation**. You know, sometimes when we look at a circuit, it seems a bit intimidating, maybe with a bunch of voltage sources and resistors in series, or current sources and resistors in parallel. Source transformation is like a superpower that lets us simplify these circuits without changing their behavior at all! This technique is a direct application of some fundamental ideas we've been building upon, and it really helps us prepare for applying other theorems like **Mesh Analysis** (CO1) and **Node Analysis** (CO1), and even simplifying circuits before applying **Superposition** or **Thevenin's/Norton's Theorem** (CO2).

Think about it this way: imagine you have a complex problem to solve. Sometimes, the easiest way to tackle it is to break it down into simpler, equivalent pieces, right? Source transformation does exactly that for circuits. It allows us to convert voltage sources in series with resistors into equivalent current sources in parallel with resistors, and vice-versa. And the beauty of it is, this transformation doesn't alter the voltage across or current through any other part of the circuit – that's the key to its power!

### Understanding the "Why": Equivalence is Key

Before we jump into the "how," let's quickly recap what makes one circuit element or combination equivalent to another. In essence, two circuits are equivalent if they behave identically when connected to the same external load. For source transformation, we're focusing on the equivalence between a voltage source ($V_S$) in series with a resistor ($R_S$) and a current source ($I_S$) in parallel with a resistor ($R_P$).

**(CO2: Apply network theorems to analyze electrical networks)**

The core principle behind source transformation stems from the basic relationship between voltage and current in a resistor: Ohm's Law. As we'll see, the conditions for equivalence hinge on maintaining the same terminal characteristics.

### The Two Sides of the Coin: Voltage to Current and Current to Voltage

Source transformation has two main forms:

#### 1. Voltage Source in Series with a Resistor to a Current Source in Parallel with a Resistor

Imagine you have a voltage source, let's call it $V_S$, connected in series with a resistor, $R$.
*   **Visualizing the Original Circuit:** You can picture this as a battery (the voltage source) connected to a resistor. The current flowing out of this combination depends on the total resistance in the circuit. The voltage across the resistor is also a key factor.

    (A simple diagram would show a voltage source symbol with a '+' and '-' terminal, followed by a resistor symbol, connected in series.)

*   **The Equivalent Transformation:** This series combination can be replaced by an ideal current source, $I_S$, in parallel with a resistor, $R$.

    (A diagram would show a current source symbol with an arrow, and a resistor symbol connected in parallel to the current source's terminals.)

*   **How do we find the values?** This is where Ohm's Law and the concept of equivalence really shine.
    *   The value of the equivalent current source, $I_S$, is simply the current that would flow through the resistor $R$ in the original series circuit if its terminals were short-circuited. So, $I_S = \frac{V_S}{R}$.
    *   The value of the parallel resistor in the equivalent circuit is the *same* resistance, $R$. So, $R_P = R$.

*   **Why is this equivalent?** Let's consider the terminal characteristics.
    *   **Open Circuit:** If we open-circuit the terminals of the original series combination, the current flowing out is zero, and the voltage across the terminals is simply $V_S$.
    *   Now, consider the equivalent parallel combination. If we open-circuit its terminals, the current source still pushes $I_S$ current. However, since the terminals are open, no current flows through the parallel resistor. Thus, the voltage across the terminals of the parallel combination is the voltage across the parallel resistor, which is $I_S \times R$. Substituting $I_S = \frac{V_S}{R}$, we get $I_S \times R = \frac{V_S}{R} \times R = V_S$. So, the open-circuit voltage is the same!
    *   **Short Circuit:** If we short-circuit the terminals of the original series combination, the voltage across the terminals is zero, and the current flowing out is $I = \frac{V_S}{R}$ (limited only by $R$).
    *   For the equivalent parallel combination, if we short-circuit the terminals, the voltage across them is zero. The current from the current source $I_S$ now has two paths: through the parallel resistor and through the short circuit. Since the short circuit has zero resistance, all the current from $I_S$ will flow through the short. Thus, the short-circuit current is $I_S = \frac{V_S}{R}$. The short-circuit current is also the same!

This dual satisfaction of open-circuit and short-circuit conditions is what guarantees the equivalence of the two circuits. This is a fundamental concept echoed in theorems like Thevenin's and Norton's, where equivalent voltage and current sources are derived.

**(CO2: Apply network theorems to analyze electrical networks)**

#### 2. Current Source in Parallel with a Resistor to a Voltage Source in Series with a Resistor

This is simply the reverse of the first transformation.
*   **Visualizing the Original Circuit:** You have an ideal current source, $I_S$, with a resistor, $R$, connected in parallel across its terminals.

    (Diagram showing a current source symbol with an arrow, and a resistor symbol in parallel.)

*   **The Equivalent Transformation:** This parallel combination can be replaced by an ideal voltage source, $V_S$, in series with a resistor, $R$.

    (Diagram showing a voltage source symbol with '+' and '-' terminals, followed by a resistor symbol in series.)

*   **How do we find the values?**
    *   The value of the equivalent voltage source, $V_S$, is the voltage that would appear across the resistor $R$ in the original parallel circuit if its terminals were open-circuited. So, $V_S = I_S \times R$.
    *   The value of the series resistor in the equivalent circuit is the *same* resistor, $R$. So, $R_S = R$.

*   **Why is this equivalent?** Again, let's check the terminal behavior.
    *   **Open Circuit:** If we open-circuit the terminals of the original parallel combination, no current flows through the parallel resistor. All the current from the current source $I_S$ flows out of the terminals. So, the open-circuit current is $I_S$. The voltage across the terminals is the voltage across the resistor, which is $I_S \times R$.
    *   Now, consider the equivalent series combination. If we open-circuit its terminals, the current source $I_S$ (which is now in series with $R$ and connected to the terminals) drives current. The voltage across the terminals will be the voltage across the entire series combination. Since the terminals are open, no current flows out, meaning the current through the series resistor is zero. Therefore, the voltage across the terminals is equal to the voltage of the voltage source, $V_S$. Substituting $V_S = I_S \times R$, we get $V_S = I_S \times R$, which is the same as the open-circuit voltage from the original circuit.
    *   **Short Circuit:** If we short-circuit the terminals of the original parallel combination, the voltage across the terminals becomes zero. The current from the current source $I_S$ splits between the parallel resistor $R$ and the short circuit. Since the short has zero resistance, all the current $I_S$ will flow through the short circuit, and the current through the resistor $R$ is zero. So, the short-circuit current is $I_S$.
    *   For the equivalent series combination, if we short-circuit the terminals, the voltage across the terminals is zero. This means the voltage across the series resistor $R$ is also zero (because $V_{terminal} = V_S - V_R$, and $V_{terminal}=0$). If the voltage across $R$ is zero, no current flows through $R$. Therefore, the entire current from the voltage source $V_S$ must flow out of the terminals. The short-circuit current is thus equal to $\frac{V_S}{R}$ (limited by $R$ in series). Substituting $V_S = I_S \times R$, we get $\frac{I_S \times R}{R} = I_S$. The short-circuit current is the same!

This consistency across different load conditions is what makes source transformation a valid simplification technique. It's all about preserving the terminal behavior of the sub-circuit we are transforming.

### When Can We Use Source Transformation?

This is a crucial point. Source transformation is applicable for ideal voltage and current sources.
*   **Ideal Voltage Source:** Can be transformed when it is in **series** with a resistor.
*   **Ideal Current Source:** Can be transformed when it is in **parallel** with a resistor.

**What about dependent sources?** This is a common point of confusion and a frequent exam question. Source transformation, in its basic form, **cannot** be directly applied to dependent sources. Why? Because the relationship between the dependent source and the voltage/current it depends on is intrinsically tied to its position and connection within the circuit. Transforming it might break this dependency relationship, leading to an incorrect analysis. However, the *resistor* associated with a dependent source (whether in series with a voltage source or in parallel with a current source) *can* still be transformed if that voltage/current source itself is independent. We'll often use source transformation *in conjunction* with analysis methods like node or mesh analysis, which can handle dependent sources, but we don't transform the dependent source itself.

**(CO1: Analyze electrical networks using mesh and node methods) - Source transformation is a preparatory step for these methods.**

### Let's Look at Some Examples (Making it Real!)

**(Analogy: Imagine you're cooking. You have a whole chicken, or you can buy pre-cut chicken pieces. Both can lead to the same final dish, but one might be easier to work with depending on your recipe. Source transformation is like choosing the right chicken cut for your cooking method!)**

**Example 1: Simplifying a Branch**

Consider a simple circuit with a 10V voltage source in series with a 2-ohm resistor. Let's say this branch is connected to the rest of a larger circuit.

*   **Original:** A 10V source in series with a 2$\Omega$ resistor.
*   **Transformation:**
    *   The equivalent current source value is $I_S = \frac{V_S}{R} = \frac{10V}{2\Omega} = 5A$.
    *   The parallel resistor is $R_P = 2\Omega$.
*   **Result:** We can replace the 10V source and 2$\Omega$ resistor with a 5A current source in parallel with a 2$\Omega$ resistor.

**(Relatable Situation:** Imagine you're powering a small LED from a battery pack. You could use a 9V battery in series with a current-limiting resistor. Or, you could use a different power supply that acts more like a constant current source, say 20mA, with a very small internal resistance. Source transformation helps us see that these can be equivalent ways to deliver power under certain conditions.)

**Example 2: Multiple Transformations to Reach a Goal**

Let's say we want to find the current through a specific resistor in a more complex circuit.

**(Imagine a simple circuit with a few interconnected components. We can transform series voltage sources with resistors into parallel current sources with resistors, and vice-versa, to simplify the circuit, perhaps to isolate a particular branch or to make a node analysis easier.)**

Consider a circuit with a 12V source in series with a 3$\Omega$ resistor. This combination is in parallel with a 6A current source. And this whole parallel setup is then connected in series with a 1$\Omega$ resistor. Our goal might be to find the current through that final 1$\Omega$ resistor.

1.  **First Transformation:** Let's transform the 12V source in series with the 3$\Omega$ resistor.
    *   Equivalent current source: $I_S = \frac{12V}{3\Omega} = 4A$.
    *   Parallel resistor: $R_P = 3\Omega$.
    *   So, we replace the (12V in series with 3$\Omega$) with (4A in parallel with 3$\Omega$).

2.  **Circuit After First Transformation:** Now we have a 4A current source in parallel with a 3$\Omega$ resistor, and this whole block is in parallel with the original 6A current source. This entire parallel combination is in series with the 1$\Omega$ resistor.

3.  **Combining Parallel Current Sources:** Two current sources in parallel add if they are in the same direction. Let's assume the 4A and 6A sources are in the same direction. The total current is $4A + 6A = 10A$. This combined 10A current source is in parallel with the two 3$\Omega$ resistors.

4.  **Combining Parallel Resistors:** Two 3$\Omega$ resistors in parallel result in an equivalent resistance of $\frac{3\Omega \times 3\Omega}{3\Omega + 3\Omega} = \frac{9}{6}\Omega = 1.5\Omega$.

5.  **Circuit After Simplification:** Now we have a 10A current source in parallel with a 1.5$\Omega$ resistor, which is then in series with the final 1$\Omega$ resistor.

6.  **Second Transformation (Optional, to find voltage across the 1.5$\Omega$ for instance, or to analyze differently):** We could transform the 10A current source in parallel with 1.5$\Omega$ back into a voltage source.
    *   Equivalent voltage source: $V_S = I_S \times R_P = 10A \times 1.5\Omega = 15V$.
    *   Series resistor: $R_S = 1.5\Omega$.
    *   So, we replace (10A in parallel with 1.5$\Omega$) with (15V in series with 1.5$\Omega$).

7.  **Final Circuit for Analysis:** The circuit now consists of a 15V source in series with a 1.5$\Omega$ resistor, and this whole thing is in series with a 1$\Omega$ resistor. This is a very simple series circuit! The total resistance is $1.5\Omega + 1\Omega = 2.5\Omega$. The total current flowing from the 15V source is $\frac{15V}{2.5\Omega} = 6A$. This current of 6A flows through the 1$\Omega$ resistor.

**(Exam Tip:** Notice how we can use transformations to simplify the circuit to a point where it's just a simple series or parallel circuit, making it trivial to find currents and voltages. This is a common strategy in exams to reduce complexity, especially when trying to find a single current or voltage using a combination of methods.)

**(CO1: Analyze electrical networks using mesh and node methods)** Source transformation is an excellent preprocessing step for mesh and node analysis. By transforming complex parts of the circuit into simpler equivalent forms, we can significantly reduce the number of loops or nodes required, making the application of these methods much more straightforward. For example, transforming a voltage source in series with a resistor into a current source in parallel with a resistor can help eliminate voltage source loops in mesh analysis or simplify node voltage equations.

### Common Pitfalls and What to Remember

*   **Series vs. Parallel:** Always ensure you're transforming a voltage source *in series* with a resistor and a current source *in parallel* with a resistor. Mixing these up is a common mistake.
*   **Dependent Sources:** Reiterate: **Do not** directly transform dependent sources. They require special handling.
*   **Direction/Polarity:** Pay close attention to the direction of current sources and the polarity of voltage sources during transformation. A mismatch can lead to incorrect results.
    *   When transforming $V_S$ (with polarity) in series with $R$ to $I_S$ parallel to $R$, the current $I_S$ should flow in the same direction as the current would flow out of the positive terminal of $V_S$.
    *   When transforming $I_S$ (with direction) in parallel with $R$ to $V_S$ in series with $R$, the positive terminal of $V_S$ should be on the side where the current $I_S$ would naturally flow through $R$.
*   **Resistor Value:** The resistance value *remains the same* in the transformation. Only the source type and its connection configuration change.

**(Summary for Recall):**
*   **V-series-R** $\iff$ **I-parallel-R**
*   $I_S = V_S / R$
*   $V_S = I_S \times R$
*   The resistor value ($R$) is the same in both configurations.
*   Valid for ideal sources. Not directly for dependent sources.

### Connection to Course Outcomes Revisited

*   **(CO1: Analyze electrical networks using mesh and node methods)**: Source transformation is a powerful tool to simplify circuits *before* applying mesh and node analysis. By reducing complex source arrangements, we can create sparser incidence matrices or fewer loops, making the setup and solution of equations much easier. For instance, a voltage source in series with a branch can be turned into a current source in parallel, which might then combine with another current source, simplifying a mesh into a single node for node analysis.
*   **(CO2: Apply network theorems to analyze electrical networks)**: Source transformation is a fundamental theorem in itself, showing the equivalence between different source configurations. It's a building block for understanding other theorems like Thevenin's and Norton's, which also involve equivalent sources. It allows us to simplify circuit segments, making it easier to apply superposition or calculate Thevenin/Norton equivalents.
*   **(CO3: Analyze transient behavior of electrical networks using Laplace transforms)**: While source transformation itself is a DC analysis technique, the simplified circuits it produces can then be analyzed using Laplace transforms for transient behavior if there are reactive components (capacitors and inductors). The simplification process using source transformation can make the Laplace domain circuit much more manageable.
*   **(CO4: Identify the network functions and parameters of single-port and two-port networks)**: Understanding source transformation helps in simplifying complex driving point impedances or transfer functions. When you're looking at a complex network from two terminals, you might want to simplify the internal circuitry using source transformations to find the equivalent resistance or impedance seen from those terminals.

**(Exam Focus):** Be prepared to simplify circuits using source transformation to solve for currents or voltages in a specific element. You might also be asked to identify whether a transformation is valid or not, especially concerning dependent sources. Often, questions will involve a circuit where you need to perform one or more source transformations to arrive at a solvable configuration.

### Conclusion

Source transformation is a beautiful technique that, at its heart, is about equivalence. By understanding that an ideal voltage source in series with a resistor behaves identically to an ideal current source in parallel with the same resistor, we gain a powerful tool for simplifying circuit analysis. It's a step that can save you a lot of algebra and reduce the chances of errors when tackling more complex networks. Keep practicing, and you'll find yourself instinctively transforming circuits to make them easier to handle!

---

## Sample Questions with Answers

**1. Conceptual Question:**
Can a dependent voltage source in series with a resistor be transformed into an equivalent current source in parallel with a resistor? Explain why or why not.

**Answer:**
No, a dependent voltage source in series with a resistor cannot be directly transformed using the standard source transformation technique. The reason is that the value of a dependent source is not independent; it is controlled by a voltage or current elsewhere in the circuit. The simple relationship $I_S = V_S/R$ or $V_S = I_S \times R$ relies on $V_S$ and $I_S$ being independent sources. Transforming a dependent source would alter its functional relationship with the controlling variable, leading to an incorrect circuit model and analysis. While the resistor can still be transformed if it's part of a different, independent source transformation, the dependent source itself must remain in its original configuration.

**2. Exam-Oriented Question:**
For the circuit shown below, use source transformation to find the current $I$ through the 4 $\Omega$ resistor.

*(Imagine a circuit diagram: A 20V voltage source in series with a 5 $\Omega$ resistor. This combination is connected in parallel with a branch containing a 3A current source in series with a 2 $\Omega$ resistor. The whole parallel combination is then connected in series with a 4 $\Omega$ resistor. The current $I$ is flowing through this 4 $\Omega$ resistor.)*

**Solution:**

**Step 1: Transform the voltage source branch.**
The 20V voltage source in series with the 5 $\Omega$ resistor can be transformed into a current source parallel to a resistor.
*   Equivalent current source: $I_{S1} = \frac{V_{S1}}{R_1} = \frac{20V}{5\Omega} = 4A$.
*   Parallel resistor: $R_{P1} = 5\Omega$.
The direction of this current source is the same as the current flowing out of the positive terminal of the 20V source.

**Step 2: Redraw the circuit after the first transformation.**
Now the circuit consists of:
*   A 4A current source in parallel with a 5 $\Omega$ resistor.
*   This combination is in parallel with the original branch of a 3A current source in series with a 2 $\Omega$ resistor.
*   The entire parallel network is in series with a 4 $\Omega$ resistor, through which current $I$ flows.

**Step 3: Combine parallel current sources.**
Let's assume the 4A current source (from Step 1) and the original 3A current source are in the same direction.
*   Total current source: $I_{total} = 4A + 3A = 7A$.

**Step 4: Combine parallel resistors.**
The resistors in parallel with the combined current source are 5 $\Omega$ and 2 $\Omega$.
*   Equivalent parallel resistance: $R_{parallel} = \frac{R_{P1} \times R_2}{R_{P1} + R_2} = \frac{5\Omega \times 2\Omega}{5\Omega + 2\Omega} = \frac{10}{7}\Omega$.

**Step 5: Redraw the simplified circuit.**
The circuit now has a 7A current source in parallel with a $\frac{10}{7}\Omega$ resistor. This entire combination is in series with the 4 $\Omega$ resistor.

**Step 6: Transform the simplified parallel network into a series voltage source.**
We can transform the 7A current source in parallel with $\frac{10}{7}\Omega$ into a voltage source in series with a resistor.
*   Equivalent voltage source: $V_{S\_eq} = I_{total} \times R_{parallel} = 7A \times \frac{10}{7}\Omega = 10V$.
*   Series resistor: $R_{S\_eq} = \frac{10}{7}\Omega$.
The polarity of this voltage source is such that its positive terminal is where the current 7A was flowing towards.

**Step 7: Analyze the final simple series circuit.**
The circuit now consists of a 10V voltage source in series with a $\frac{10}{7}\Omega$ resistor, and this combination is in series with the 4 $\Omega$ resistor.
*   Total resistance in the series circuit: $R_{total} = R_{S\_eq} + R_3 = \frac{10}{7}\Omega + 4\Omega = \frac{10 + 28}{7}\Omega = \frac{38}{7}\Omega$.

**Step 8: Calculate the current $I$.**
The current $I$ is the total current flowing in this simple series circuit.
*   $I = \frac{V_{S\_eq}}{R_{total}} = \frac{10V}{\frac{38}{7}\Omega} = \frac{10 \times 7}{38} A = \frac{70}{38} A = \frac{35}{19} A$.

Therefore, the current $I$ through the 4 $\Omega$ resistor is $\frac{35}{19} A$.

**3. Conceptual/Application Question:**
You are asked to find the voltage across a particular resistor in a network. You notice a voltage source with a resistor in series, and nearby is a current source with a resistor in parallel. Which transformation would you choose if you want to simplify the circuit for nodal analysis, and why?

**Answer:**
If the goal is to simplify the circuit for nodal analysis, and you have a voltage source in series with a resistor, transforming it into a current source in parallel with that same resistor is often beneficial. This is because node analysis focuses on the currents entering and leaving nodes. A parallel current source directly contributes to the nodal current equation. A voltage source in series, however, creates a "supernode" or requires additional steps in nodal analysis if it's not connected to the reference node. Transforming it to a parallel current source can help consolidate current contributions at nodes and potentially reduce the number of nodes or the complexity of the nodal equations. Conversely, if you have a current source in parallel with a resistor, and you want to simplify for mesh analysis, transforming it to a voltage source in series with the resistor might be more advantageous, as mesh analysis deals with voltage loops. The choice depends on the specific circuit configuration and the analysis method being used.
