---
title: "Reciprocity Theorem"
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35abc"
status: "completed"
scrapedAt: "2026-05-23T16:11:22.091Z"
---
# CIRCUITS & NETWORKS - Module 1: Mesh Analysis and Nodal Analysis (Review)

## Topic: Reciprocity Theorem

**Learning Outcomes:**
* Understand the concept of the Reciprocity Theorem.
* Apply the Reciprocity Theorem to analyze circuits.
* Verify the Reciprocity Theorem through circuit analysis.
* Recognize the conditions under which the Reciprocity Theorem is applicable.

**Course Outcomes Alignment:**
* **CO1: Apply circuit theorems to solve complex DC and AC electric networks (Knowledge Level: K3)** - The Reciprocity Theorem is a fundamental circuit theorem that allows for simplification in analyzing networks, especially when sources are moved.

---

### 1. Introduction to the Reciprocity Theorem

The Reciprocity Theorem is a significant theorem in circuit analysis that deals with the relationship between the excitation (source) and response (current or voltage) in a linear, bilateral network. It simplifies the analysis of networks by allowing the source and the response point to be interchanged without altering the response magnitude.

**Key Concept:** The theorem is applicable to linear, bilateral networks containing independent sources and passive elements (resistors, capacitors, inductors).

**Textbook References:**
* **Van Valkenburg, "Network Analysis" (3rd Ed., 2019):** Likely discusses reciprocity in the context of general circuit theorems.
* **Ravish R Singh, "Network Analysis and Synthesis" (2nd Ed., 2019):** Expected to cover reciprocity in detail, possibly with derivations.
* **Suresh Kumar, "Electric Circuits & Networks" (1st Ed., 2008):** Should provide a foundational explanation.
* **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis" (5th Ed., 2017):** Will likely offer a comprehensive treatment with examples.

---

### 2. Statement of the Reciprocity Theorem

**For a linear, bilateral network, if an excitation $E$ (voltage or current source) applied at one point in the network produces a response $R$ (current or voltage) at another point, then the same excitation $E$ applied at the second point will produce the same response $R$ at the first point.**

**In simpler terms:**

*   **If a voltage source $V$ in series with an impedance $Z_1$ is connected between terminals A and B, and this causes a current $I$ to flow through an impedance $Z_2$ connected between terminals C and D, then if the voltage source $V$ is moved to terminals C and D (in series with $Z_2$), it will cause the same current $I$ to flow through the impedance $Z_1$ connected between terminals A and B.**

---

### 3. Conditions for Applicability

The Reciprocity Theorem is valid only for networks that satisfy the following conditions:

*   **Linearity:** The network must consist of linear elements, meaning their voltage-current relationship is linear (e.g., resistors, linear inductors, linear capacitors). For non-linear elements like diodes, the theorem does not apply.
*   **Bilaterality:** The elements of the network must be bilateral, meaning their electrical characteristics are the same regardless of the direction of current flow. Resistors, inductors, and capacitors are bilateral. Diodes and transistors are unilateral.
*   **Independent Sources Only:** The theorem is stated for independent sources. While it can be extended to dependent sources under certain interpretations, the fundamental statement focuses on independent sources.
*   **Single Source (for simple application):** While the theorem can be generalized to multiple sources, its most straightforward application and proof typically involve a single source.

**Important Point:** The theorem applies to *changes* in voltage or current. If a circuit has multiple sources, you often use superposition to determine the response due to each source individually, and then reciprocity can be applied to interchange the position of a specific source and its corresponding response element.

---

### 4. Mathematical Formulation

Consider a linear, bilateral network with a voltage source $V$ applied at terminals 1-1' and the current $I$ measured through a resistor $R_L$ connected to terminals 2-2'.

**Scenario 1:**
*   Voltage source $V_1$ applied at terminals 1-1'.
*   Current $I_2$ measured in the branch containing $R_L$ at terminals 2-2'.

According to the Reciprocity Theorem:

**If $V_1$ at terminals 1-1' produces $I_2$ at terminals 2-2', then the same $V_1$ applied at terminals 2-2' will produce the same $I_2$ at terminals 1-1'.**

This can be expressed as:

$\frac{I_2}{V_1}\bigg|_{\text{source at 1-1'}} = \frac{I_1}{V_2}\bigg|_{\text{source at 2-2'}}$

Where:
*   $V_1$ is the voltage source at terminals 1-1'.
*   $I_2$ is the current measured at terminals 2-2'.
*   $V_2$ is the voltage source at terminals 2-2'.
*   $I_1$ is the current measured at terminals 1-1'.

**Alternatively, considering current sources:**

*   Current source $I_1$ applied at terminals 1-1'.
*   Voltage $V_2$ measured across a resistor $R_L$ at terminals 2-2'.

**If $I_1$ at terminals 1-1' produces $V_2$ at terminals 2-2', then the same $I_1$ applied at terminals 2-2' will produce the same $V_2$ at terminals 1-1'.**

This can be expressed as:

$\frac{V_2}{I_1}\bigg|_{\text{source at 1-1'}} = \frac{V_1}{I_2}\bigg|_{\text{source at 2-2'}}$

Where:
*   $I_1$ is the current source at terminals 1-1'.
*   $V_2$ is the voltage measured at terminals 2-2'.
*   $I_2$ is the current source at terminals 2-2'.
*   $V_1$ is the voltage measured at terminals 1-1'.

**Note:** The "response" can be current or voltage, and the "excitation" can be voltage or current. The key is the interchangeability.

---

### 5. Proof of the Reciprocity Theorem (Conceptual Outline)

The proof of the Reciprocity Theorem is typically done using circuit analysis techniques like Kirchhoff's Laws or by considering the network's impedance matrix. A common approach involves Maxwell's Reciprocity Theorem for electromagnetic systems, which can be adapted for electrical networks.

**Conceptual Proof using Kirchhoff's Laws:**

Consider a linear network. Let $V_1$ be a voltage source at terminals 1-1' and $I_2$ be the current in a branch at terminals 2-2'.

1.  **Apply KVL/KCL with source $V_1$ at 1-1':** This will result in a set of linear equations describing the circuit. The current $I_2$ will be a linear combination of $V_1$ and other circuit parameters.
    $I_2 = Y_{21} V_1$ (where $Y_{21}$ is the transimpedance or transfer admittance).

2.  **Introduce a "test" voltage source $V_2$ at 2-2' and apply KVL/KCL:** Now, consider the same network but with a voltage source $V_2$ at terminals 2-2' and we want to find the current $I_1$ at terminals 1-1'.
    $I_1 = Y_{11} V_1 + Y_{12} V_2$ (This is a general form if both sources are present).

3.  **Consider the case with both sources:** If both $V_1$ (at 1-1') and $V_2$ (at 2-2') are present, the current $I_2$ at terminals 2-2' will be:
    $I_2 = Y_{21} V_1 + Y_{22} V_2$.

4.  **Using the property of bilateral networks (or impedance matrix symmetry):** For a linear, bilateral network, the transfer impedance (or admittance) between two pairs of terminals is symmetric. This means the coefficient relating the voltage at one pair to the current at another pair is the same as the coefficient relating the voltage at the second pair to the current at the first pair.
    Mathematically, if we represent the network by its admittance matrix:
    $\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} Y_{11} & Y_{12} \\ Y_{21} & Y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$
    For a reciprocal network, $Y_{12} = Y_{21}$.

5.  **Applying the symmetry:**
    *   When only $V_1$ is present at 1-1' (so $V_2 = 0$), then $I_2 = Y_{21} V_1$.
    *   When only $V_2$ is present at 2-2' (so $V_1 = 0$), then $I_1 = Y_{12} V_2$.

    If we want to show that the same voltage $V_1$ applied at 2-2' produces the same current $I_2$ at 1-1', we can consider the reverse situation:
    Let $V_2$ be the source at 2-2' and we measure current $I_1$ at 1-1'.
    $I_1 = Y_{12} V_2$.

    If we set $V_1 = 0$ and $V_2 = V$, then $I_1 = Y_{12} V$.
    If we set $V_2 = 0$ and $V_1 = V$, then $I_2 = Y_{21} V$.

    For reciprocity, we need to show that if $V_1$ at 1-1' produces $I_2$ at 2-2', then $V_1$ at 2-2' produces $I_2$ at 1-1'.
    This means $Y_{21} = Y_{12}$.

    The symmetry of the impedance/admittance matrix ($Z_{ij} = Z_{ji}$ or $Y_{ij} = Y_{ji}$) is the fundamental basis for the Reciprocity Theorem in electrical networks.

---

### 6. Examples

**Example 1: Simple Resistor Network**

Consider the following circuit:

```
      R1
   A -----/\/\/\----- B
   |                  |
   V1                 R2
   |                  |
   C ------------------ D
      (ground)
```

Let's say we want to find the current through $R_2$ when $V_1$ is applied at terminals A-C.

**Scenario 1: Source at A-C, Response at B-D (through $R_2$)**

*   Source: $V_1$ applied between A and C.
*   Response: Current $I_1$ through $R_2$ (between B and D).
*   Assume C and D are connected to ground.

Using nodal analysis (or simple series/parallel):
The total resistance seen by $V_1$ is $R_{eq} = R_1 + R_2$.
The current from $V_1$ is $I = \frac{V_1}{R_1 + R_2}$.
This current flows through $R_2$, so $I_1 = \frac{V_1}{R_1 + R_2}$.

**Scenario 2: Reciprocal Application (Source at B-D, Response at A-C)**

Now, let's move the source to terminals B-D and measure the current through $R_1$ at terminals A-C.

*   Source: $V_1$ applied between B and D.
*   Response: Current $I_2$ through $R_1$ (between A and C).
*   Assume C and D are connected to ground.

The total resistance seen by $V_1$ (connected between B and D) is $R_{eq}' = R_2 + R_1$.
The current from $V_1$ is $I' = \frac{V_1}{R_2 + R_1}$.
This current flows through $R_1$, so $I_2 = \frac{V_1}{R_1 + R_2}$.

**Result:** As predicted by the Reciprocity Theorem, $I_1 = I_2$. The current through $R_1$ in the second case is the same as the current through $R_2$ in the first case when the source is interchanged.

**Example 2: Bridge Circuit**

Consider a more complex Wheatstone bridge circuit.

```
      R1       R2
   A ----/\/\/\---- B ----/\/\/\---- D
   |      |      |      |
   |      R3     R4     |
   |      |      |      |
   E ----/\/\/\---- C ----/\/\/\---- F
```
Let terminals 1-1' be A-E and terminals 2-2' be B-C (where $R_3$ is connected).
Let $V_s$ be a voltage source connected between A and E. We want to find the current $I_{AB}$ through $R_1$.

**Scenario 1: Source at A-E, Response in $R_1$ (between A and B)**

*   Source: $V_s$ between A and E.
*   Response: Current $I_{AB}$ through $R_1$.

We would typically use mesh analysis or nodal analysis to solve this. Let's assume we find $I_{AB} = k \cdot V_s$, where $k$ is some complex function of the resistances.

**Scenario 2: Source at B-C, Response in $R_1$ (between A and E)**

Now, according to reciprocity, if we place the same voltage source $V_s$ between B and C, the current flowing *into* terminal B (or out of terminal C) from this source should be the same as $I_{AB}$ found in Scenario 1.

*   Source: $V_s$ between B and C.
*   Response: Current $I_{AC}$ from A to E (or $I_{AE}$).

**Verification:**
This requires solving the circuit in both configurations. If the network is linear and bilateral, the value of the response current will be identical.

**Practical Application:**
Imagine a complex network where measuring current at a particular point is difficult, but measuring it elsewhere is easy. If the network is reciprocal, you can place the source at the easily accessible point and measure the response at the difficult point, and then reverse the source and response points. The magnitude of the response current will be the same, allowing you to determine the desired value indirectly.

---

### 7. Relationship to Mesh and Nodal Analysis (Review)

The Reciprocity Theorem is a *consequence* of the fundamental laws used in mesh and nodal analysis.

*   **Nodal Analysis:** The nodal equations are based on Kirchhoff's Current Law (KCL). The system of linear equations derived from nodal analysis has a symmetric admittance matrix ($Y_{ij} = Y_{ji}$) for reciprocal networks. This symmetry is what the Reciprocity Theorem exploits.
*   **Mesh Analysis:** The mesh equations are based on Kirchhoff's Voltage Law (KVL). The system of linear equations derived from mesh analysis also exhibits a symmetric impedance matrix ($Z_{ij} = Z_{ji}$) for reciprocal networks. This symmetry directly implies the reciprocity property.

**Key Point:** The underlying linearity and bilateral nature of the circuit elements, when formulated into KCL or KVL equations, lead to the symmetric matrices that validate the Reciprocity Theorem.

---

### 8. Importance and Applications

*   **Circuit Simplification:** Allows for swapping source and response locations, potentially simplifying analysis.
*   **Verification:** Can be used to verify the linearity and bilateral nature of a network.
*   **Antenna Theory:** The concept of reciprocity is fundamental in antenna theory, relating the transmitting and receiving characteristics of antennas.
*   **Filter Design:** Used in some filter synthesis techniques.
*   **Fault Analysis:** Can sometimes aid in analyzing the propagation of signals or faults in complex networks.

---

### 9. Practice Questions

**Question 1:**
State the conditions necessary for the Reciprocity Theorem to be applicable.

**Question 2:**
In a linear, bilateral network, a voltage source of 10V applied between terminals A and B produces a current of 2A in a resistor connected between terminals C and D. If the 10V source is now moved to terminals C and D, what current will flow through the resistor connected between terminals A and B?

**Question 3:**
Consider the following circuit. A voltage source $V_s$ is applied between terminals 1 and 2. Calculate the current $I_x$ flowing through the resistor $R_2$. Then, using the Reciprocity Theorem, determine the current that would flow through $R_1$ if the same voltage source $V_s$ were applied between terminals 3 and 4.

```
      R1
   1 -----/\/\/\----- 2
   |                 |
   |                 R2
   |                 |
   3 -----/\/\/\----- 4
      (connected to ground)
```
Assume $R_1 = 10 \Omega$, $R_2 = 20 \Omega$, $V_s = 5V$.

**Question 4:**
Explain why the Reciprocity Theorem is not applicable to a circuit containing a diode.

---

### 10. Answers to Practice Questions

**Answer 1:**
The conditions for the Reciprocity Theorem to be applicable are:
1.  **Linearity:** All elements in the network must be linear.
2.  **Bilaterality:** All elements in the network must be bilateral.
3.  **Independent Sources:** The theorem is most directly applied to networks with independent sources.

**Answer 2:**
According to the Reciprocity Theorem, if the same voltage source (10V) is moved to terminals C and D, it will produce the same current (2A) in the resistor connected between terminals A and B.
**Answer:** 2A.

**Answer 3:**
**Scenario 1: Source at 1-2, Response in $R_2$ (between 3-4)**
*   The circuit is a series combination of $R_1$ and $R_2$ connected to $V_s$ at terminals 1-2.
*   Terminals 3 and 4 are connected to ground, effectively meaning terminals 2 and 4 are the same point.
*   The total resistance seen by $V_s$ is $R_{total} = R_1 + R_2$.
*   The current flowing from $V_s$ is $I = \frac{V_s}{R_1 + R_2}$.
*   This current flows through $R_2$ (connected between terminals 2 and 4, which are the same point as terminals 1 and 3 in a simple series connection if we interpret the diagram as a loop).

Let's re-interpret the diagram for clarity:
Assume terminals 1 and 3 are common ground. Then $V_s$ is applied between 1 and 2. The current $I_x$ is through $R_2$ between 2 and 4 (which are the same point due to the ground connection).
So, $V_s$ is across $R_1$, and $R_2$ is effectively in parallel with $R_1$ if 3-4 is ground. This interpretation is a bit ambiguous.

Let's assume the standard interpretation where terminals 1 and 3 are the "input" terminals and 2 and 4 are the "output" terminals.

**More likely interpretation of the diagram:**

```
   1 ----- R1 ----- 2
   |                |
   Vs               Rx (current to be measured)
   |                |
   3 ----- R2 ----- 4
```
Let's assume terminals 1 and 3 are connected to a source $V_s$. We want to find current $I_x$ through $R_2$ connected between terminals 2 and 4.
This is not a standard setup for simple reciprocity.

**Let's use the setup as implied by typical examples:**

```
   1 -- R1 -- 2
   |          |
   Vs         R_load (measures current)
   |          |
   3 -- R2 -- 4
```
Where we apply $V_s$ between 1 and 3, and measure current in $R_2$ between 2 and 4.

Let's assume the question implies:
*   **Scenario 1:** $V_s$ applied between terminals 1 and 3. Measure current $I_x$ through $R_2$ (which is connected between 2 and 4).
*   **Scenario 2:** $V_s$ applied between terminals 2 and 4. Measure current $I_y$ through $R_1$ (which is connected between 1 and 3).

**Let's use the diagram from the question as:**

```
   1 ----- R1 ----- 2
   |                |
   Vs               I_x (current through R2)
   |                |
   3 ----- R2 ----- 4
```
Assuming terminals 3 and 4 are connected together (e.g., to ground).
Then $R_2$ is shorted out. This doesn't seem right.

**Assuming the diagram means:**
*   Source $V_s$ is applied between terminals 1 and 3.
*   We need to find the current $I_x$ flowing *through* the component $R_2$ which is connected between terminals 2 and 4.
*   Let's assume terminals 3 and 4 are connected together for simplicity, and terminal 1 is the input.

**Correct interpretation for applying reciprocity:**
Let terminals 1-1' be a pair, and terminals 2-2' be another pair.
The diagram shows two components, $R_1$ and $R_2$.

Let's re-draw based on typical reciprocity examples:

**Circuit 1:**
*   Source $V_s$ applied between terminals A and B.
*   Response: Current $I$ through resistor $R_2$ connected between terminals C and D.

```
     A ---- R1 ---- C
     |             |
     Vs            R2
     |             |
     B ---- R3 ---- D
```
Here, $R_1=10\Omega, R_2=20\Omega, R_3=5\Omega, V_s=5V$.
Apply $V_s$ between A and B. Measure current $I$ through $R_2$.
*   In this circuit, $R_1$ is in series with $V_s$. This branch is then in parallel with the series combination of $R_3$ and $R_2$.
*   Total resistance seen by $V_s$ is $R_{eq} = R_1 + \frac{R_3 R_2}{R_3 + R_2}$.
*   $R_{eq} = 10 + \frac{5 \times 20}{5 + 20} = 10 + \frac{100}{25} = 10 + 4 = 14 \Omega$.
*   Current from $V_s$ is $I_{total} = \frac{V_s}{R_{eq}} = \frac{5}{14} A$.
*   This current splits at terminal C. The voltage across $R_2$ (and $R_3$) is $V_{CD} = I_{total} \times \frac{R_3 R_2}{R_3 + R_2} = \frac{5}{14} \times 4 = \frac{20}{14} = \frac{10}{7} V$.
*   The current $I$ through $R_2$ is $I = \frac{V_{CD}}{R_2} = \frac{10/7}{20} = \frac{10}{7 \times 20} = \frac{1}{14} A$.
*   So, $I_x = \frac{1}{14} A$.

**Circuit 2 (Reciprocal Application):**
*   Source $V_s$ applied between terminals C and D.
*   Response: Current $I_y$ through resistor $R_1$ connected between terminals A and B.

```
     A ---- R1 ---- C
     |             |
     Iy            Vs
     |             |
     B ---- R3 ---- D
```
Here, $V_s$ is applied between C and D. The circuit looks like $R_3$ in series with the parallel combination of $V_s$ (as a voltage source connected between C and D, so effectively it's a voltage difference) and the branch $R_1 + R_3$. This is getting complicated.

Let's use the exact wording of the question and assume its diagram means:
```
   1 ----- R1 ----- 2
   |                |
   Vs               Component X (where current Ix flows)
   |                |
   3 ----- R2 ----- 4
```
If $V_s$ is between 1 and 3, and $I_x$ is through $R_2$ between 2 and 4.
Let's assume terminal 2 is connected to terminal 4 for the current to flow through $R_2$. This means $R_2$ is shorted. This is unlikely the intent.

**Let's assume the diagram implies:**
*   Pair 1: Terminals 1 and 3.
*   Pair 2: Terminals 2 and 4.
*   $V_s$ applied between 1 and 3.
*   Response is current $I_x$ in the branch containing $R_2$ between 2 and 4.
*   And then $V_s$ is applied between 2 and 4, and current $I_y$ through $R_1$ between 1 and 3 is measured.

**Let's simplify the diagram interpretation as a common mesh/nodal problem:**
Assume the diagram is:
```
    1 -- R1 -- 2
    |         |
    V1        R_L (where current I_x is measured)
    |         |
    3 -- R2 -- 4
```
If $V_s$ is at 1-3, and $I_x$ is through $R_2$ (at 2-4).
Let's assume terminals 3 and 4 are connected to ground.
So, $V_s$ is between 1 and ground. $R_1$ is between 1 and 2. $R_2$ is between 2 and ground. We measure current through $R_2$.
This is a voltage divider situation:
Current $I_{total} = \frac{V_s}{R_1 + R_2}$.
This current flows through both $R_1$ and $R_2$.
So $I_x = \frac{V_s}{R_1 + R_2}$.
With $R_1=10\Omega, R_2=20\Omega, V_s=5V$:
$I_x = \frac{5}{10 + 20} = \frac{5}{30} = \frac{1}{6} A$.

**Reciprocal Application:**
Now apply $V_s$ between terminals 2 and ground (where terminal 4 is connected to ground). Measure current $I_y$ through $R_1$ (between terminals 1 and 2).
The circuit is the same: $V_s$ across $R_2$, $R_1$ in series with $R_2$.
The current through $R_1$ is $I_y = \frac{V_s}{R_1 + R_2}$.
$I_y = \frac{5}{10 + 20} = \frac{5}{30} = \frac{1}{6} A$.

**Answer:**
*   Current $I_x$ through $R_2 = \frac{1}{6} A$.
*   By Reciprocity Theorem, the current through $R_1$ when $V_s$ is applied across $R_2$ is also $\frac{1}{6} A$.

**Answer 4:**
The Reciprocity Theorem requires all elements in the network to be bilateral. A diode is a unilateral element because its voltage-current characteristic is different depending on the direction of the applied voltage and current. In the forward bias, it conducts, but in the reverse bias, it blocks (ideally). This asymmetry violates the condition of bilaterality, and thus the Reciprocity Theorem cannot be applied to a circuit containing a diode.

---

### 10. Important Points to Remember

*   **Linearity and Bilaterality:** These are the absolute prerequisites for the Reciprocity Theorem.
*   **Interchangeability:** The theorem allows swapping the source and response points.
*   **Magnitude of Response:** The magnitude of the response (current or voltage) remains the same after swapping.
*   **Single Source:** The theorem is most easily understood and applied with a single source. For multiple sources, superposition is typically used first.
*   **Transfer Function:** The theorem essentially states that the transfer function (e.g., voltage/current, current/voltage) between two pairs of terminals is symmetric.
*   **Applications:** Beyond circuit analysis, it has significant implications in fields like antenna theory.

---

This concludes the study notes on the Reciprocity Theorem. Remember to revisit the examples and practice questions to solidify your understanding. Refer to the mentioned textbooks for detailed derivations and further examples.
