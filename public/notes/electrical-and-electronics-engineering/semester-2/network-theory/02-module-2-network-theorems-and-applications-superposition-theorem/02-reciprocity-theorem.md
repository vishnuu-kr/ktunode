---
title: "Reciprocity theorem"
subject: "NETWORK THEORY"
module: "Module 2: Network theorems and applications : Superposition theorem"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f987a"
status: "completed"
scrapedAt: "2026-05-23T16:08:33.170Z"
---
# Network Theory: Module 2 - Network Theorems and Applications

## Topic: Reciprocity Theorem

Welcome, everyone! Today, we're diving into another powerful tool in our network analysis arsenal: the **Reciprocity Theorem**. Now, you've already been introduced to the Superposition Theorem, which helps us deal with networks containing multiple independent sources by looking at their individual effects. The Reciprocity Theorem, while seemingly simpler, offers a unique perspective, especially for networks with certain characteristics. It's a theorem that truly highlights the inherent symmetry within electrical circuits.

### Understanding the Essence: What is Reciprocity?

At its heart, reciprocity means **fairness** or **mutual exchange**. In our context, it speaks to a symmetrical relationship between excitation (the source) and response (the current or voltage at another point).

Think about it this way: Imagine you're pushing a swing. If you push it with a certain force and it moves a certain distance, and then you were to somehow *pull* it from that resulting position with the same force, it would move back to its original starting point. There's a symmetry there, a back-and-forth fairness. The Reciprocity Theorem applies this idea to our electrical networks.

**Definition:** The Reciprocity Theorem states that in any linear, bilateral network, if an excitation (voltage source $V$) applied at one point produces a response (current $I$) at another point, then the same excitation ($V$) applied at the second point will produce the same response ($I$) at the first point.

Let's break down the key terms here:

*   **Linear Network:** This is crucial. The theorem only applies to networks where the components (resistors, inductors, capacitors) behave linearly. This means their impedance doesn't change with the voltage or current applied. So, Ohm's Law ($V=IR$) holds true. Most passive components we deal with in introductory circuit analysis are linear.
*   **Bilateral Network:** This means the components behave the same way regardless of the direction of current flow. For instance, a resistor works just as well with current flowing one way as it does the other. Diodes, on the other hand, are *unilateral* – they conduct primarily in one direction – and hence, the reciprocity theorem *does not* apply to networks containing diodes.
*   **Excitation:** This is our input – typically a voltage or current source.
*   **Response:** This is what we're measuring – usually a current or voltage at a different location in the network.

**Connecting to Course Outcomes:**

This theorem directly supports **CO2: Apply network theorems to analyze electrical networks** (Knowledge Level: K3). By understanding reciprocity, you gain another efficient method for analyzing circuit behavior without necessarily performing the full analysis from scratch every time. It simplifies the problem when you're interested in the relationship between two specific points in a network. It also builds upon the foundational understanding of linear and bilateral elements, which is key to many other aspects of network analysis.

### The Mathematical Foundation

Let's formalize this. Consider a linear, bilateral network.

*   **Scenario 1:** An independent voltage source $V_s$ is placed in series with an impedance $Z_1$ at one location (let's call it Port 1). This source drives a current $I_x$ through an impedance $Z_x$ at another location (Port 2).
*   **Scenario 2:** Now, we move the voltage source $V_s$ to Port 2, placing it in series with impedance $Z_x$. We then measure the current $I_y$ flowing through impedance $Z_1$ at Port 1.

The Reciprocity Theorem states that if the network is linear and bilateral:

$$I_x = I_y$$

when $V_s$ is the same in both cases.

Alternatively, if we are measuring voltage as the response:

*   **Scenario 1:** A current source $I_s$ is placed at Port 1, producing a voltage $V_x$ across an element at Port 2.
*   **Scenario 2:** The same current source $I_s$ is moved to Port 2, producing a voltage $V_y$ across the element at Port 1.

Then,

$$V_x = V_y$$

**A Little Insight from Textbooks:**

As R. Mark Nelms and J. David Irwin mention in "Basic Engineering Circuit Analysis," the reciprocity theorem is a consequence of the symmetry of the impedance matrix of a bilateral network. If you've encountered network parameters like $z$-parameters (impedance parameters), you'll know that for a passive, reciprocal network, the off-diagonal elements are equal ($z_{12} = z_{21}$). This mathematical relationship is the bedrock of the reciprocity theorem. Similarly, Sudhakar and Shyammohan, in "Circuits and Networks," emphasize that the theorem holds for networks containing only resistors, inductors, capacitors, and linear transformers.

### Visualizing Reciprocity: An Everyday Analogy

Imagine you have a very well-organized library. Let's say the librarian (our source) places a specific book (our excitation) on a particular shelf (Port 1). You, as a reader (the measurement point), go to another shelf (Port 2) and pick up a specific book from there (the response).

Now, if the librarian instead placed that *same* specific book on shelf (Port 2), and you went to shelf (Port 1) to pick up *your* specific book, the "effort" or the "connection" between the original book's location and your book's location would be the same. It's like the library's layout is inherently balanced. If picking up book A at location B leads to finding book X at location Y, then picking up book A at location Y leads to finding book X at location B. This requires the library to be "fair" – the path between any two locations works the same way regardless of which end you start from. This "fairness" is our bilateral and linear property.

### How and When to Use the Reciprocity Theorem

The Reciprocity Theorem is particularly useful in situations where:

1.  **Analyzing the transfer characteristics between two points:** When you're interested in how a source at one location affects a response at another, and you suspect symmetry or want to simplify measurements.
2.  **Verification:** It can be used to verify analysis results. If you've calculated a current and then swapped source and measurement, you can cross-check your work.
3.  **Antenna theory (though beyond this immediate scope):** In radio communication, antennas exhibit reciprocity. A transmitting antenna's radiation pattern is the same as its receiving pattern at a particular frequency. This is a classic application.

**Important Note:** The reciprocity theorem applies to networks with *only one* independent source at a time. If you have multiple independent sources, you would need to use the Superposition Theorem first to zero out all but one source, then apply reciprocity for each source.

### Illustrative Example

Let's consider a simple circuit to demonstrate this theorem.

**Circuit:**
A network with two loops.
Loop 1: Contains a 5V voltage source ($V_s$) in series with a 2 $\Omega$ resistor ($R_1$).
Loop 2: Contains a 3 $\Omega$ resistor ($R_2$).
The two loops are coupled through a common impedance (say, a mutual inductance or simply interconnected resistors). Let's make it simple: let the top wire of $R_1$ be connected to one end of $R_2$, and the bottom wire of $R_1$ be connected to the other end of $R_2$. The loops are essentially connected at two points.

**Scenario 1:**
*   Place $V_s = 5V$ in series with $R_1 = 2 \Omega$ in the first loop.
*   Measure the current $I_1$ flowing through $R_2 = 3 \Omega$ in the second loop.

Let's assume the total resistance in the path of $V_s$ is $R_{total1} = R_1 + R_{effective\_from\_loop2} = 2 \Omega + \text{some effective resistance}$. And the current flowing through $R_2$ will be a fraction of the total current, depending on the circuit configuration.

*(Self-correction for a cleaner example)*: A better demonstration involves a slightly more structured network. Let's use a T-network or Pi-network where reciprocity is more evident.

**Revised Example (using a simple bridge-like structure):**

Consider a network where a 10V source is connected between points A and B, and we measure the current through a resistor connected between points C and D.

**Circuit Description:**
*   Points A and B are connected by a 2 Ohm resistor ($R_{AB}$).
*   Points C and D are connected by a 3 Ohm resistor ($R_{CD}$).
*   Point A is connected to C by a 4 Ohm resistor ($R_{AC}$).
*   Point B is connected to D by a 5 Ohm resistor ($R_{BD}$).
*   We can add a connection between A and D ($R_{AD}$) and B and C ($R_{BC}$) to make it more general. Let's assume $R_{AD} = 6 \Omega$ and $R_{BC} = 7 \Omega$. This is a fairly general linear, bilateral network.

**Scenario 1: Source at AB, Response at CD**
*   Apply a 10V source between A and B.
*   Measure the current $I_{CD}$ flowing through $R_{CD}$.

Let's assume, through mesh or nodal analysis (applying CO1), we find that $I_{CD} = 0.5$ A.
(Note: We won't perform the full nodal/mesh analysis here as the focus is reciprocity, but imagine we did and got this result.)

**Scenario 2: Source at CD, Response at AB**
*   Now, remove the source from AB.
*   Place the *same* 10V source between C and D.
*   Measure the current $I_{AB}$ flowing through $R_{AB}$.

According to the Reciprocity Theorem, if the network is linear and bilateral (which it is, with only resistors), the current $I_{AB}$ measured in the second scenario will be equal to the current $I_{CD}$ measured in the first scenario.

**Therefore, $I_{AB} = I_{CD} = 0.5$ A.**

**How is this useful?**
If finding $I_{CD}$ in Scenario 1 was very complex, but finding $I_{AB}$ in Scenario 2 was simpler (perhaps due to symmetry or a less complex circuit configuration around AB), we could perform the simpler analysis and use reciprocity to know the result of the more complex one. This is a direct application of **CO2**.

### Practical Considerations and Pitfalls

*   **Non-linearity:** The biggest pitfall is applying this to non-linear elements. If your circuit has transistors, diodes, or even saturable inductors, reciprocity breaks down. Remember what Franklin F. Kuo says about ensuring the network is linear and bilateral.
*   **Multiple Sources:** As mentioned, it's a single-source theorem. If you have multiple independent sources, you *must* disable all but one at a time to apply reciprocity.
*   **Direction of Current:** Always be mindful of the direction you define for the response current in both scenarios. The equality holds for currents defined in consistent opposite directions.

### Reciprocity and Superposition

You might wonder how this relates to the Superposition Theorem. They are distinct but complementary:

*   **Superposition** deals with multiple *independent sources*. It allows us to break down a complex circuit with many sources into simpler circuits, each with only one source, and then sum the individual responses.
*   **Reciprocity** deals with the *transfer impedance* or *transfer admittance* between two points in a network. It relates the response at one point due to an excitation at another, and vice-versa.

You can use them together! If you have a network with two sources and you want to find the current at point Y due to source A at point X, and then also check the current at point X due to source B at point Z, you might use superposition to isolate each source, and then use reciprocity if the analysis of source A's effect at Y is easier by considering its effect at X.

### Summary: Key Takeaways

To wrap up our discussion on the Reciprocity Theorem:

*   It applies to **linear and bilateral** networks.
*   It states that the ratio of response to excitation is the same when the positions of excitation and response are **interchanged**.
*   It's a **single-source** theorem.
*   It's a powerful tool for simplifying analysis and understanding the symmetry of circuit behavior.
*   It complements other theorems like Superposition, rather than replacing them.

Remember this: If you see a symmetrical relationship between where you're putting a source and where you're measuring, or if you want to simplify a measurement by "swapping" the source and measurement points, the Reciprocity Theorem is your friend!

---

## Sample Questions and Answers

Here are a few questions to test your understanding and how you might see this in an exam:

**Q1. (Conceptual)** State the conditions under which the Reciprocity Theorem is applicable.
**Answer:** The Reciprocity Theorem is applicable to networks that are **linear** and **bilateral**. Linear means component behavior (like resistance) doesn't change with voltage or current. Bilateral means components conduct equally in both directions (e.g., resistors, inductors, capacitors, but not diodes).

**Q2. (Application/Exam-Oriented)** In the circuit shown below (imagine a circuit diagram: a voltage source $V_s$ in series with a 5 $\Omega$ resistor connected between points P and Q, and a 10 $\Omega$ resistor connected between points R and S. Points P and R are connected by a 2 $\Omega$ resistor, and points Q and S are connected by a 3 $\Omega$ resistor), a voltage source of 12V is applied between P and Q, and the current measured through the 10 $\Omega$ resistor between R and S is found to be 0.5A. If the 12V source is now moved to be connected between R and S, what will be the current through the 5 $\Omega$ resistor (connected between P and Q)?

**(Circuit Diagram Suggestion: Think of a two-mesh circuit, perhaps a simplified bridge or ladder structure.)**

**Answer:**
The network consists of resistors, which are linear and bilateral. We are given a scenario where:
*   Excitation: $V_s = 12V$ applied between P and Q.
*   Response: Current $I_{RS} = 0.5A$ through the $10 \Omega$ resistor between R and S.

The Reciprocity Theorem states that if the excitation and response locations are interchanged, the response magnitude will be the same. So, if we:
*   Apply the same excitation: $V_s = 12V$ between R and S.
*   Measure the response: Current $I_{PQ}$ through the $5 \Omega$ resistor between P and Q.

According to the Reciprocity Theorem, $I_{PQ}$ will be equal to $I_{RS}$.
Therefore, the current through the $5 \Omega$ resistor will be **0.5A**.

**Q3. (Conceptual/Pitfall)** Can the Reciprocity Theorem be directly applied to a circuit containing a single diode biased in its forward region? Explain why or why not.
**Answer:** No, the Reciprocity Theorem **cannot** be directly applied to a circuit containing a single diode biased in its forward region. This is because a diode is a **unilateral** element. It conducts current primarily in one direction (forward bias) and blocks it in the other (reverse bias). The bilateral property, which is a fundamental requirement for the Reciprocity Theorem, is violated. The behavior of current flow and voltage drop across a diode is not symmetrical with respect to the direction of current.

**Q4. (Connection to other theorems)** How does the Reciprocity Theorem differ from the Superposition Theorem in terms of the problems they address?
**Answer:**
*   **Superposition Theorem:** Deals with networks containing **multiple independent sources**. It breaks down the problem by considering the effect of each source *individually* (while deactivating others) and then summing these effects linearly. It's about handling multiple excitations.
*   **Reciprocity Theorem:** Deals with the **transfer relationship** between an excitation at one point and a response at another point in a network. It focuses on the symmetry of this relationship, allowing the positions of excitation and response to be swapped. It's about the inherent symmetry of the network itself regarding input/output locations.

While they are different, they can be used in conjunction. For example, if you have a network with multiple sources and you want to find the response at point Y due to source A at point X, you would use superposition to isolate source A, and then reciprocity might simplify the calculation of that isolated response if the network structure allows.
