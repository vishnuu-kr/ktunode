---
title: "Thevenin’s theorem"
subject: "NETWORK THEORY"
module: "Module 2: Network theorems and applications : Superposition theorem"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da510"
status: "completed"
scrapedAt: "2026-05-23T17:41:10.503Z"
---
# NETWORK THEORY: MODULE 2 - NETWORK THEOREMS AND APPLICATIONS

## Topic: Thevenin's Theorem

Welcome, everyone! Today, we're diving into one of the most powerful and widely used tools in our Network Theory arsenal: **Thevenin's Theorem**. You might wonder, with all the methods we have like nodal and mesh analysis, why do we need another one? Well, Thevenin's theorem isn't just another method; it's a simplification technique. It allows us to take a complex network and represent it as a very simple equivalent circuit, making analysis, especially for finding voltages and currents through a specific component, significantly easier. This is particularly useful when you have a complex source circuit feeding into a load, and you want to see how different loads would behave without re-analyzing the entire complex circuit every time.

This theorem directly supports our **Course Outcome 2: Apply network theorems to analyze electrical networks (Knowledge Level: K3)**. By understanding and applying Thevenin's theorem, you're gaining a practical skill in simplifying circuit analysis.

### What is Thevenin's Theorem All About?

Imagine you have a really complicated electrical system, like the wiring inside a smartphone or a large industrial control panel. Within this system, there's a specific component, let's say a tiny LED or a specific sensor, that you're interested in. Analyzing the entire complex system just to find the voltage across or current through that one component can be incredibly tedious and time-consuming.

Thevenin's theorem, first proposed by Léon Charles Thévenin, a French telegraph engineer, offers an elegant solution. It states that **any linear, two-terminal electrical network can be replaced by an equivalent circuit consisting of a single voltage source (Vth) in series with a single resistor (Rth).**

Think of it like this: If you're trying to understand how a particular house uses electricity, you don't need to know the intricate details of the entire power grid supplying your city. For practical purposes related to that house, the entire power grid can be simplified to a single voltage source (the nominal voltage supplied to your neighborhood) and a very small internal resistance. Thevenin's theorem does the same for any part of an electrical network.

Our textbooks, like "Basic Engineering Circuit Analysis" by Irwin and Nelms and "Network Analysis by Van Valkenburg," provide rigorous mathematical proofs for this. But for us, the key takeaway is the simplification it offers.

### The Key Components: Vth and Rth

To apply Thevenin's theorem, we need to determine two crucial values for our equivalent circuit:

1.  **Thevenin Voltage (Vth):** This is the open-circuit voltage across the two terminals of the original network. In simpler terms, if you disconnect the load and leave the two terminals where the load was connected open, Vth is the voltage you would measure between those terminals. This is our simplified "voltage source."

2.  **Thevenin Resistance (Rth):** This is the equivalent resistance of the network looking back into the two terminals, with all independent sources *turned off* or *zeroed out*.
    *   **For voltage sources:** Turn them off by replacing them with a short circuit (a wire).
    *   **For current sources:** Turn them off by replacing them with an open circuit (removing them).

This Rth is the "internal resistance" of our simplified equivalent circuit.

### How to Find Vth and Rth: The Step-by-Step Process

Let's break down the practical steps to finding these values. Suppose we have a circuit and we want to simplify it from the perspective of a specific load resistor, R_L, connected between terminals A and B.

**Step 1: Identify the Terminals and the Load.**
Clearly mark the two terminals (let's call them A and B) across which you want to find the equivalent circuit. This is usually where your load component is connected.

**Step 2: Calculate the Thevenin Voltage (Vth).**
*   **Remove the load:** Disconnect the load resistor (R_L) from terminals A and B.
*   **Calculate open-circuit voltage:** Now, calculate the voltage across terminals A and B. This is Vth. Since there's no load connected, this is the "open-circuit voltage." For linear networks, you can use any standard analysis technique you're comfortable with, such as:
    *   Nodal Analysis (CO1)
    *   Mesh Analysis (CO1)
    *   Voltage Divider Rule
    *   Current Divider Rule

    *Real-world analogy:* Imagine you're trying to figure out the voltage supplied to your TV. You unplug the TV. The voltage you measure at the wall socket (before plugging anything back in) is your Vth.

**Step 3: Calculate the Thevenin Resistance (Rth).**
*   **Deactivate independent sources:**
    *   Replace all **independent voltage sources** with **short circuits** (a piece of wire, resistance is 0).
    *   Replace all **independent current sources** with **open circuits** (remove them, resistance is infinite).
    *   *Important note:* Dependent sources are *not* turned off. They remain in the circuit and their behavior is dependent on other circuit elements.

*   **Calculate equivalent resistance:** Look into terminals A and B (the same terminals where the load was connected) and calculate the total equivalent resistance of the circuit. This is Rth.
    *   If you have only resistors, this is simply combining series and parallel resistances.
    *   If the circuit becomes a bit more complex after deactivating sources, you might need to use series/parallel combinations, Delta-Wye (Δ-Y) transformations, or other simplification techniques.

    *Real-world analogy:* To find the "internal resistance" of the power outlet, you'd conceptually remove the TV and then try to see how much resistance the wiring itself presents to the flow of electricity, assuming the power plant is supplying a fixed voltage.

    *A common scenario in exams:* Often, after turning off sources, Rth is calculated by finding the resistance between terminals A and B. If there are only resistors, it's usually a straightforward series-parallel combination. Sometimes, you might be asked to find the resistance by applying a test voltage or current source at the terminals and calculating the resulting current or voltage, which is especially useful if Rth calculation via source deactivation is tricky.

**Step 4: Draw the Thevenin Equivalent Circuit.**
Once you have Vth and Rth, you draw the equivalent circuit: a voltage source Vth in series with a resistor Rth, connected to the terminals A and B.

### Putting it into Practice: An Example

Let's say we have a simple circuit with a 10V voltage source in series with a 2-ohm resistor, and this combination is in parallel with a 5-ohm resistor. We want to find the Thevenin equivalent circuit seen by a load resistor, R_L, of 3 ohms connected across the parallel combination.

*   **Terminals:** Let A and B be the terminals where R_L is connected.

*   **Step 2: Finding Vth:**
    *   Remove R_L. Terminals A and B are now open.
    *   The circuit is a 10V source in series with a 2-ohm resistor, and this is connected to a 5-ohm resistor. So, we have a voltage divider.
    *   The voltage across the 5-ohm resistor (which is the voltage across terminals A and B) is:
        $V_{AB} = V_{th} = 10V * \frac{5\Omega}{2\Omega + 5\Omega} = 10V * \frac{5}{7} \approx 7.14V$

*   **Step 3: Finding Rth:**
    *   Turn off the 10V independent voltage source. Replace it with a short circuit (0 ohms).
    *   Now we have a 0V source (short circuit) in series with a 2-ohm resistor, and this combination is in parallel with a 5-ohm resistor.
    *   Looking into terminals A and B, we see the 5-ohm resistor. The 2-ohm resistor is now in parallel with the short circuit, which means the 2-ohm resistor is also effectively shorted out (because the current will take the path of least resistance – the short circuit).
    *   So, the equivalent resistance seen between A and B is just the 5-ohm resistor.
    *   $R_{th} = 5\Omega$

*   **Step 4: Thevenin Equivalent Circuit:**
    *   Our Thevenin equivalent circuit is a 7.14V voltage source in series with a 5-ohm resistor. If we reconnect our original R_L = 3 ohms to this equivalent circuit, we can easily find the current and voltage across it.

    *Exam tip:* Make sure you correctly identify what is connected across the terminals *after* removing the load. In this example, the 5-ohm resistor was across the terminals, not the voltage source and 2-ohm resistor combination.

### Applications and Why it's So Useful

The power of Thevenin's theorem really shines when you need to analyze the behavior of a circuit with different load resistances.

*   **Load Analysis:** Suppose you want to see how your circuit behaves with R_L = 1 ohm, then 5 ohms, then 10 ohms. Instead of re-analyzing the entire original complex circuit each time, you just connect each R_L to the *same* simple Thevenin equivalent circuit. This is a massive time-saver! This aligns with **CO2**.

*   **Modeling Complex Sources:** It's used extensively to model complex power sources. For example, the output of a real power supply can be approximated as a Thevenin equivalent circuit (a voltage source with some internal series resistance). This helps understand voltage regulation and limitations.

*   **Simplification for Design:** In circuit design, engineers might isolate a section of a larger system and represent it by its Thevenin equivalent to simplify the design and analysis of other connected parts.

*   **Understanding Maximum Power Transfer:** A classic application is determining the condition for maximum power transfer to a load. Thevenin's theorem shows that maximum power is transferred when the load resistance ($R_L$) is equal to the Thevenin resistance ($R_{th}$). This is a very common exam question.

### Thevenin's Theorem vs. Norton's Theorem (A Quick Look Ahead)

It's worth mentioning that Thevenin's theorem has a very close cousin: Norton's theorem. Norton's theorem states that any linear, two-terminal network can be replaced by an equivalent circuit consisting of a **single current source (In) in parallel with a single resistor (Rn)**. The relationship is that $V_{th} = I_{n} * R_{th} = I_{n} * R_{n}$, and $R_{th} = R_{n}$. So, they are duals of each other. If you're comfortable with Thevenin, understanding Norton is straightforward.

### Important Considerations and Common Pitfalls

*   **Linearity is Key:** Thevenin's theorem *only* applies to linear circuits. This means circuits containing only resistors, capacitors, inductors, and linear dependent/independent sources. If you have non-linear elements like diodes or transistors operating outside their linear region, you cannot directly apply Thevenin's theorem.

*   **Dependent Sources:** Remember to keep dependent sources in the circuit when calculating Rth. They are not turned off. If Rth calculation becomes difficult with dependent sources, you'll often use the method of injecting a test voltage or current source.

*   **Open Circuit vs. Short Circuit:** Be very careful when replacing sources. Voltage sources become short circuits (0 resistance), and current sources become open circuits (infinite resistance). A common mistake is to short a current source or open a voltage source.

*   **Calculating Rth with Dependent Sources:** When dependent sources are present, calculating $R_{th}$ by simply combining passive elements in series/parallel after deactivating independent sources might not be sufficient. The standard method is to:
    1.  Deactivate all independent sources.
    2.  Apply a test voltage source ($V_x$) or a test current source ($I_x$) at the terminals A and B.
    3.  Calculate the resulting current ($I_x$) or voltage ($V_x$) at those terminals.
    4.  $R_{th} = V_x / I_x$.
    This method can sometimes be more involved but is robust.

*   **Superposition and Thevenin:** While Thevenin's theorem is often presented alongside superposition (as they both deal with simplifying networks), they are distinct. Superposition analyzes the contribution of each source independently, while Thevenin's theorem replaces a complex network with a simple equivalent. They can be used together, though. For example, you might use superposition to find $V_{th}$ in a circuit with multiple independent sources. This ties back to our **Module 2 theme of Network Theorems and Applications**.

### Summary: Remember This!

*   Thevenin's theorem simplifies any linear, two-terminal network into an equivalent circuit of a **voltage source ($V_{th}$) in series with a resistor ($R_{th}$)**.
*   **$V_{th}$** is the **open-circuit voltage** across the terminals.
*   **$R_{th}$** is the **equivalent resistance** looking back into the terminals with all **independent sources deactivated**.
*   Deactivating sources: Voltage sources become **short circuits**, current sources become **open circuits**.
*   Keep dependent sources active when calculating $R_{th}$.
*   The theorem is incredibly useful for analyzing how different loads affect a circuit without re-analyzing the entire complex source network.

This theorem is fundamental, and mastering it will make analyzing many complex circuits feel much more manageable. It's a direct application of your understanding of circuit analysis techniques, supporting **CO2**.

---

## Sample Questions and Answers

**1. Conceptual Question:**
Explain the core principle of Thevenin's theorem and why it is a valuable tool in circuit analysis.

**Answer:**
The core principle of Thevenin's theorem is that any complex, linear, two-terminal electrical network can be represented by a simpler equivalent circuit consisting of a single voltage source ($V_{th}$) in series with a single resistor ($R_{th}$). This is valuable because it significantly simplifies the analysis of circuits, especially when a particular component (the "load") is of interest. Instead of analyzing the entire complex network repeatedly for different load conditions, one can analyze the complex network once to find its Thevenin equivalent, and then easily analyze the behavior of various loads connected to this simple equivalent circuit. This saves considerable time and effort, particularly in design and testing phases.

**2. Exam-Oriented Question:**
Find the Thevenin equivalent circuit seen by the 4-ohm resistor in the following circuit.
*(Assume a circuit diagram is provided here, e.g., a 12V source in series with a 2-ohm resistor, which is then in parallel with a 6-ohm resistor. The 4-ohm resistor is connected across the parallel combination.)*

**Solution:**
Let's assume the circuit is: A 12V voltage source is in series with a 2-ohm resistor ($R_1$). This series combination is connected in parallel with a 6-ohm resistor ($R_2$). A 4-ohm load resistor ($R_L$) is connected across the parallel combination of $R_1$-series-source and $R_2$. Let the terminals be A and B where $R_L$ is connected.

*   **Step 1: Find $V_{th}$ (Open-Circuit Voltage):**
    *   Remove the 4-ohm resistor. Terminals A and B are open.
    *   The circuit consists of a 12V source in series with 2 ohms, in parallel with 6 ohms. The voltage across the parallel combination is what we need.
    *   The total resistance of the branch with the source is $R_{branch} = 2\Omega$ (assuming the voltage source itself has no internal resistance). The parallel branch has $R_2 = 6\Omega$.
    *   We need the voltage across the 6-ohm resistor. This requires finding the total current from the 12V source first, then considering how it splits, or more simply, finding the voltage across the equivalent parallel resistance.
    *   Let's redraw the intent: The 12V source is in series with a 2-ohm resistor. *This entire combination* is then connected across the 6-ohm resistor. This is not how parallel is usually depicted. Let's assume a more standard configuration: A 12V source, a 2-ohm resistor, and a 6-ohm resistor are connected such that the 12V source is in series with the 2-ohm resistor, and this entire series combination is in parallel with the 6-ohm resistor. The 4-ohm resistor is then connected across the points where the 6-ohm resistor is connected.

    *   **Revised interpretation (more common exam setup):** A 12V voltage source is in series with a 2-ohm resistor. This series combination is connected *in parallel* with a 6-ohm resistor. Let's call the nodes where these parallel branches meet X and Y. The 4-ohm load resistor ($R_L$) is connected between terminals A and B, where A and B are the nodes across the 6-ohm resistor. In this case, the 12V source and 2-ohm resistor are *not* in parallel with the 6-ohm resistor directly, but rather the circuit might be: 12V source, then a 2-ohm resistor, then a node. From this node, one branch goes through a 6-ohm resistor to a second node. Another branch from the first node goes through the 4-ohm load to the second node. This also seems unlikely for a simple Thevenin problem.

    *   **Most probable interpretation for a Thevenin problem:** A 12V source is in series with a 2-ohm resistor ($R_1$). This combination is then connected *in parallel* with a 6-ohm resistor ($R_2$). The terminals A and B are across the 6-ohm resistor. The 4-ohm resistor is the load *we are analyzing for*, but it is *not* part of the original network being simplified. The problem implies the original network *includes* the 12V source, 2-ohm resistor, and 6-ohm resistor. The terminals A and B are across the 6-ohm resistor.
        *   To find $V_{th}$, we need the voltage across the 6-ohm resistor. This is a voltage divider. The total resistance in the circuit is the 2-ohm resistor in series with the 6-ohm resistor (since the source is ideal and provides voltage, the current from the source will flow through the 2-ohm and then the 6-ohm resistor).
        *   $V_{th} = 12V \times \frac{6\Omega}{2\Omega + 6\Omega} = 12V \times \frac{6}{8} = 12V \times \frac{3}{4} = 9V$.

*   **Step 2: Find $R_{th}$:**
    *   Deactivate the 12V independent voltage source by replacing it with a short circuit (0 ohms).
    *   Now, looking into terminals A and B (across the 6-ohm resistor), we have the 2-ohm resistor in series with the short-circuited voltage source. This combination is in parallel with the 6-ohm resistor.
    *   The 2-ohm resistor is now in series with 0 ohms (the shorted source). So, the total resistance of that branch is 2 ohms.
    *   This 2-ohm resistance is in parallel with the 6-ohm resistor.
    *   $R_{th} = \frac{2\Omega \times 6\Omega}{2\Omega + 6\Omega} = \frac{12}{8} \Omega = 1.5\Omega$.

*   **Step 3: Draw the Thevenin Equivalent Circuit:**
    *   The Thevenin equivalent circuit consists of a 9V voltage source in series with a 1.5-ohm resistor. If we then connect the 4-ohm load to this, we can easily find the current and voltage across the load.
    *   Current through the load: $I_L = \frac{V_{th}}{R_{th} + R_L} = \frac{9V}{1.5\Omega + 4\Omega} = \frac{9V}{5.5\Omega} \approx 1.636A$.
    *   Voltage across the load: $V_L = I_L \times R_L = 1.636A \times 4\Omega \approx 6.545V$.

**Reasoning:** This question tests the ability to identify the terminals, correctly calculate the open-circuit voltage using basic circuit analysis (voltage division in this case), and correctly deactivate the source and calculate the equivalent resistance. The interpretation of how the components are connected is crucial.

**3. Conceptual Application Question:**
Consider a power amplifier circuit designed to drive a speaker. How could Thevenin's theorem be used to model the output stage of the amplifier and predict its performance with different speakers?

**Answer:**
The output stage of a power amplifier, when viewed as a source driving a load (the speaker), can be complex. It might involve transistors, resistors, and capacitors. Thevenin's theorem allows us to simplify this complex output stage into an equivalent circuit of a voltage source ($V_{th}$) and a series resistance ($R_{th}$).
*   $V_{th}$ would represent the maximum possible open-circuit voltage the amplifier can produce.
*   $R_{th}$ would represent the amplifier's output impedance.

By finding these values, engineers can:
1.  **Predict Output Voltage/Current:** For any given speaker (load resistance), the voltage across and current through the speaker can be easily calculated using the simple Thevenin equivalent.
2.  **Determine Load Matching:** They can determine the optimal speaker impedance that will draw maximum power from the amplifier (when the speaker's impedance is matched to $R_{th}$).
3.  **Analyze Power Dissipation:** Understand how much power is dissipated within the amplifier itself ($R_{th}$) versus how much is delivered to the speaker.
4.  **Design Considerations:** If the amplifier's $R_{th}$ is too high, it might indicate poor output stage design or component limitations.

Essentially, it allows for quick analysis and design iteration without needing to simulate or build the entire amplifier circuit for every different speaker impedance tested. This directly supports **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
