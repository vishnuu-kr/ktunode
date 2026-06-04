---
title: "Verification of Superposition theorem. *"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 1: Verification of Superposition theorem. *"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ce2"
status: "completed"
scrapedAt: "2026-05-23T16:11:52.533Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 1: Verification of Superposition Theorem

---

### 1. Introduction to Circuit Theorems

*   **Purpose:** Circuit theorems simplify the analysis of complex electrical circuits, especially those with multiple independent sources.
*   **Importance:** They allow us to break down complex problems into simpler, manageable parts, making analysis and design more efficient.
*   **Textbook Reference:** Both Sawhney (Chapter on Network Theorems) and Gupta (Chapter on Network Theorems) provide foundational explanations of various circuit theorems. Kalsi's "Electronic Instrumentation" may also touch upon these theorems in the context of measurement techniques.

---

### 2. The Superposition Theorem

#### 2.1. Statement of the Theorem

*   **Definition:** The Superposition Theorem states that in any linear bilateral network containing multiple independent sources, the total current or voltage between any two points is the algebraic sum of the currents or voltages produced by each individual independent source, acting alone, with all other independent sources turned off.
*   **Key Conditions:**
    *   **Linearity:** The network must be linear. This means that the voltage-current relationship for each element is linear (e.g., resistors). Non-linear components like diodes or transistors violate this condition.
    *   **Bilaterality:** The network must be bilateral, meaning that the current-voltage relationship is the same regardless of the direction of current flow (e.g., resistors, inductors, capacitors).
    *   **Independent Sources:** The theorem applies to networks with multiple *independent* sources (voltage or current). Dependent sources require modification or different theorems for analysis.
*   **Textbook Reference:** Sawhney and Gupta dedicate significant sections to the Superposition Theorem, detailing its statement, conditions, and application.

#### 2.2. How to Apply the Superposition Theorem

To verify the Superposition Theorem for a circuit with multiple sources, follow these steps:

1.  **Identify Independent Sources:** Determine all independent voltage and current sources in the circuit.
2.  **Analyze with One Source at a Time:**
    *   **Turn Off Other Sources:** For each independent source you analyze, all *other* independent sources must be deactivated:
        *   **Voltage Sources:** Replace with a short circuit (zero voltage).
        *   **Current Sources:** Replace with an open circuit (zero current).
    *   **Calculate Response:** Calculate the desired response (voltage across a specific component or current through a specific branch) due to the *single active* source.
3.  **Sum the Individual Responses:** Algebraically sum the responses calculated in step 2 to obtain the total response when all sources are acting simultaneously.
4.  **Direct Analysis (for Verification):** Analyze the original circuit with *all* independent sources acting simultaneously using standard circuit analysis techniques (e.g., Kirchhoff's Voltage Law (KVL), Kirchhoff's Current Law (KCL), nodal analysis, mesh analysis).
5.  **Compare Results:** Compare the total response obtained from the Superposition Theorem (step 3) with the response obtained from the direct analysis (step 4). They should be equal.

#### 2.3. Turning Off Sources

*   **Voltage Source (Short Circuit):** A voltage source maintains a constant voltage difference between its terminals. When turned off, the voltage difference becomes zero, effectively connecting the terminals directly – a short circuit.
*   **Current Source (Open Circuit):** A current source forces a constant current to flow through it. When turned off, the current becomes zero, meaning no current can flow through that branch – an open circuit.
*   **Textbook Reference:** Sawhney and Gupta clearly illustrate these principles with diagrams.

---

### 3. Verification of Superposition Theorem in the Lab

**Objective:** To experimentally verify that the total current in a branch or voltage across a component in a linear circuit with multiple sources is the sum of the currents or voltages produced by each source acting alone.

**Prerequisites:** Basic understanding of Ohm's Law, KVL, KCL, and the ability to use multimeters for voltage and current measurements.

**Course Outcomes Alignment:**
*   **CO2: Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3)** - This experiment directly addresses this outcome.
*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3)** - While this experiment focuses on DC, the principles of superposition extend to AC circuits where phasor analysis is used. Understanding the DC application is foundational.

#### 3.1. Experimental Setup

*   **Components:**
    *   DC Voltage Sources (e.g., variable DC power supplies)
    *   Resistors of known values
    *   Connecting wires
    *   Breadboard or terminal strips
    *   Multimeters (Ammeters and Voltmeters)
*   **Circuit Diagram:** A typical circuit for verification will involve at least two independent DC voltage sources and several resistors arranged in a network.

    *Example Circuit:*
    Consider a circuit with two voltage sources, $V_1$ and $V_2$, and three resistors, $R_1$, $R_2$, and $R_3$. We might want to measure the current through $R_2$ (let's call it $I_{R2}$).

    ```
    +-------R1-------+
    |                |
    V1 (+)           R2
    | (-)            |
    +-------R3-------+
    |                |
    V2 (+)           <-- Branch where we measure current
    | (-)
    ```
    *(Note: This is a simplified representation. A proper lab circuit would be more detailed.)*

#### 3.2. Experimental Procedure

1.  **Build the Circuit:** Construct the circuit on a breadboard or terminal strip using the specified component values. Ensure all connections are secure.
2.  **Method 1: Direct Analysis (All Sources ON)**
    *   Set both voltage sources ($V_1$, $V_2$) to their desired values.
    *   Measure the current through the target branch (e.g., $R_2$) using an ammeter. Let this be $I_{total}$.
    *   Measure relevant voltages across components using voltmeters if required.
3.  **Method 2: Superposition Analysis (Individual Sources)**
    *   **Step 2a: Source $V_1$ ON, $V_2$ OFF:**
        *   Turn off $V_2$ by replacing it with a short circuit.
        *   Keep $V_1$ ON at its specified value.
        *   Measure the current through the target branch (e.g., $R_2$) due to $V_1$ alone. Let this be $I_{1}$.
    *   **Step 2b: Source $V_2$ ON, $V_1$ OFF:**
        *   Turn off $V_1$ by replacing it with a short circuit.
        *   Keep $V_2$ ON at its specified value.
        *   Measure the current through the target branch (e.g., $R_2$) due to $V_2$ alone. Let this be $I_{2}$.
4.  **Verification:**
    *   Calculate the sum of individual currents: $I_{superposition} = I_{1} + I_{2}$.
    *   Compare $I_{superposition}$ with $I_{total}$ measured in Method 1.

#### 3.3. Data Recording and Analysis

*   **Table Format:** A table is essential for organizing measured and calculated values.

    | Parameter         | Value (with both sources ON) | Value (with V1 ON, V2 OFF) | Value (with V2 ON, V1 OFF) | Calculated Superposition Sum ($I_1 + I_2$) | $\%$ Error |
    | :---------------- | :--------------------------- | :------------------------- | :------------------------- | :----------------------------------------- | :-------- |
    | $V_1$ (Volts)     |                              |                            |                            |                                            |           |
    | $V_2$ (Volts)     |                              |                            |                            |                                            |           |
    | $R_1$ (Ohms)      |                              |                            |                            |                                            |           |
    | $R_2$ (Ohms)      |                              |                            |                            |                                            |           |
    | $R_3$ (Ohms)      |                              |                            |                            |                                            |           |
    | Current through $R_2$ ($I_{total}$) (Amps) |                              |                            |                            |                                            |           |
    | Current through $R_2$ ($I_1$) (Amps)      |                              |                            |                            |                                            |           |
    | Current through $R_2$ ($I_2$) (Amps)      |                              |                            |                            |                                            |           |

*   **Calculations:**
    *   Calculate the percentage error:
        $\% \text{Error} = \frac{|I_{total} - (I_1 + I_2)|}{|I_{total}|} \times 100\%$
*   **Textbook Reference:** Sawhney and Gupta often include example experimental procedures and data tables for verifying network theorems.

---

### 4. Key Concepts and Definitions

*   **Linear Circuit:** A circuit where the voltage-current relationship of its components is linear. This implies that the principle of superposition holds.
*   **Bilateral Circuit:** A circuit where the current-voltage relationship is the same for current flowing in either direction. Resistors, inductors, and capacitors are bilateral.
*   **Independent Source:** A source whose voltage or current is independent of other parameters in the circuit. They are represented by circles.
*   **Dependent Source:** A source whose voltage or current is dependent on a voltage or current elsewhere in the circuit. They are represented by diamonds. The Superposition Theorem as stated does not directly apply to circuits with dependent sources without modification.
*   **Short Circuit:** A connection with negligible resistance, effectively making the voltage across it zero.
*   **Open Circuit:** A break in a circuit, preventing current flow, effectively making the current through it zero.
*   **Algebraic Sum:** The sum considering the signs (polarities) of the currents or voltages.

---

### 5. Examples and Applications

#### 5.1. Theoretical Example

Consider the circuit below with $V_1 = 10$V, $V_2 = 5$V, $R_1 = 2\Omega$, $R_2 = 3\Omega$, $R_3 = 4\Omega$. Calculate the current through $R_2$.

```
    +-------R1-------+
    |                |
    V1 (+)           R2
    | (-)            |
    +-------R3-------+
    |                |
    V2 (+)           <-- Branch where we measure current
    | (-)
```

**Solution using Superposition:**

1.  **Source $V_1$ ON, $V_2$ OFF:**
    *   Replace $V_2$ with a short circuit.
    *   Circuit becomes: $V_1$ in series with $R_1$ and $R_3$ in parallel, with $R_2$ connected across the parallel combination.
    *   Equivalent resistance of $R_1 || R_3$: $R_{13} = \frac{R_1 \times R_3}{R_1 + R_3} = \frac{2 \times 4}{2 + 4} = \frac{8}{6} = \frac{4}{3}\Omega$.
    *   Total resistance seen by $V_1$: $R_{total1} = R_{13} + R_2 = \frac{4}{3} + 3 = \frac{4 + 9}{3} = \frac{13}{3}\Omega$.
    *   Current from $V_1$: $I_{V1} = \frac{V_1}{R_{total1}} = \frac{10}{13/3} = \frac{30}{13}$A.
    *   Using current division to find current through $R_2$ ($I_{1}$):
        $I_{1} = I_{V1} \times \frac{R_3}{R_2 + R_3} = \frac{30}{13} \times \frac{4}{3 + 4} = \frac{30}{13} \times \frac{4}{7} = \frac{120}{91}$A.

2.  **Source $V_2$ ON, $V_1$ OFF:**
    *   Replace $V_1$ with a short circuit.
    *   Circuit becomes: $V_2$ in series with $R_3$ and $R_1$ in parallel, with $R_2$ connected across the parallel combination.
    *   Equivalent resistance of $R_3 || R_1$: $R_{31} = \frac{R_3 \times R_1}{R_3 + R_1} = \frac{4 \times 2}{4 + 2} = \frac{8}{6} = \frac{4}{3}\Omega$.
    *   Total resistance seen by $V_2$: $R_{total2} = R_{31} + R_2 = \frac{4}{3} + 3 = \frac{13}{3}\Omega$.
    *   Current from $V_2$: $I_{V2} = \frac{V_2}{R_{total2}} = \frac{5}{13/3} = \frac{15}{13}$A.
    *   Using current division to find current through $R_2$ ($I_{2}$):
        $I_{2} = I_{V2} \times \frac{R_1}{R_1 + R_2} = \frac{15}{13} \times \frac{2}{2 + 3} = \frac{15}{13} \times \frac{2}{5} = \frac{30}{65} = \frac{6}{13}$A.

3.  **Total Current:**
    *   $I_{R2} = I_{1} + I_{2} = \frac{120}{91} + \frac{6}{13} = \frac{120}{91} + \frac{6 \times 7}{13 \times 7} = \frac{120}{91} + \frac{42}{91} = \frac{162}{91}$A.
    *   $I_{R2} \approx 1.78$A.

**Direct Analysis (for comparison):**
*   Using nodal analysis or mesh analysis on the original circuit would yield the same result. (This would be a good exercise to verify the theorem manually).

#### 5.2. Applications in Instrumentation

*   **Measurement of Small Currents:** When measuring a small current in a branch containing multiple sources, the Superposition Theorem can help predict the expected current and identify the contribution of each source.
*   **Analyzing complex power supplies:** While typically dealing with DC, the principles of breaking down a circuit based on individual sources are fundamental in understanding how complex circuits behave.
*   **Textbook Reference:** While not explicitly detailed for Superposition, Kalsi's "Electronic Instrumentation" discusses measurement techniques that might be applied to circuits where theorems like Superposition are used for analysis.

---

### 6. Important Points to Remember

*   **Linearity is Crucial:** The Superposition Theorem *only* applies to linear circuits. If there are any non-linear elements (diodes, transistors, etc.), this theorem cannot be used directly.
*   **Deactivate Sources Correctly:** Always replace voltage sources with short circuits and current sources with open circuits when considering the effect of a single source.
*   **Algebraic Sum:** Remember to sum the currents/voltages algebraically, taking into account their directions/polarities.
*   **Independent Sources Only:** The standard statement of the theorem applies to independent sources.
*   **Verification:** The lab experiment involves comparing the result of direct analysis with the sum of individual analyses.
*   **Ideal Components:** The theorems are typically derived assuming ideal components (ideal voltage/current sources, zero resistance wires, etc.). Real-world components may introduce small deviations.

---

### 7. Practice Questions and Exercises

**Question 1:**
State the Superposition Theorem and the conditions under which it is applicable.

**Answer:**
The Superposition Theorem states that in any linear bilateral network containing multiple independent sources, the total current or voltage between any two points is the algebraic sum of the currents or voltages produced by each individual independent source, acting alone, with all other independent sources turned off.
Conditions:
1.  The circuit must be **linear**.
2.  The circuit must be **bilateral**.
3.  The theorem applies to **independent sources**.

**Question 2:**
In the circuit below, calculate the current through resistor $R_3$ using the Superposition Theorem.
$V_1 = 6$V, $V_2 = 4$V, $R_1 = 2\Omega$, $R_2 = 3\Omega$, $R_3 = 5\Omega$.

```
      +-----R1-----+
      |            |
      V1 (+)       R2
      | (-)        |
      +-----R3-----+
      |            |
      V2 (+)       <-- Branch where we measure current
      | (-)
```

**Answer:**

*   **Step 1: $V_1$ ON, $V_2$ OFF**
    *   Replace $V_2$ with a short circuit.
    *   $R_1$ and $R_3$ are in parallel: $R_{13} = \frac{2 \times 5}{2 + 5} = \frac{10}{7}\Omega$.
    *   Total resistance seen by $V_1$: $R_{total1} = R_{13} + R_2 = \frac{10}{7} + 3 = \frac{10 + 21}{7} = \frac{31}{7}\Omega$.
    *   Current from $V_1$: $I_{V1} = \frac{6}{31/7} = \frac{42}{31}$A.
    *   Current through $R_3$ ($I_{1}$): Using current division:
        $I_{1} = I_{V1} \times \frac{R_2}{R_2 + R_3} = \frac{42}{31} \times \frac{3}{3 + 5} = \frac{42}{31} \times \frac{3}{8} = \frac{126}{248} = \frac{63}{124}$A.

*   **Step 2: $V_2$ ON, $V_1$ OFF**
    *   Replace $V_1$ with a short circuit.
    *   $R_3$ and $R_1$ are in parallel: $R_{31} = \frac{5 \times 2}{5 + 2} = \frac{10}{7}\Omega$.
    *   Total resistance seen by $V_2$: $R_{total2} = R_{31} + R_2 = \frac{10}{7} + 3 = \frac{31}{7}\Omega$.
    *   Current from $V_2$: $I_{V2} = \frac{4}{31/7} = \frac{28}{31}$A.
    *   Current through $R_3$ ($I_{2}$): Using current division:
        $I_{2} = I_{V2} \times \frac{R_1}{R_1 + R_3} = \frac{28}{31} \times \frac{2}{2 + 5} = \frac{28}{31} \times \frac{2}{7} = \frac{56}{217} = \frac{8}{31}$A.

*   **Step 3: Total Current**
    *   $I_{R3} = I_{1} + I_{2} = \frac{63}{124} + \frac{8}{31} = \frac{63}{124} + \frac{8 \times 4}{31 \times 4} = \frac{63}{124} + \frac{32}{124} = \frac{95}{124}$A.
    *   $I_{R3} \approx 0.766$A.

**Question 3:**
Which of the following would make a circuit non-linear, thus invalidating the Superposition Theorem?
a) A resistor
b) A voltage source
c) A diode
d) An inductor

**Answer:**
c) A diode. Diodes are non-linear components because their voltage-current relationship is not a straight line. Resistors, voltage sources (assuming ideal), and inductors are typically considered linear elements in basic circuit analysis.

---

### 8. Conclusion

The Superposition Theorem is a powerful tool for simplifying the analysis of linear circuits with multiple independent sources. Its practical verification in the lab provides hands-on experience in applying theoretical concepts and using measurement instruments accurately. Understanding this theorem is fundamental to analyzing more complex circuits encountered in electrical engineering and instrumentation.

---
**References:**

*   Sawhney, A. K. *A course in Electrical and Electronic Measurements & Instrumentation.* Dhanpat Rai Publishers.
*   Gupta, J. B. *A course in Electrical & Electronic Measurement & Instrumentation.* S. K. Kataria & Sons Publishers.
*   Kalsi, H. S. *Electronic Instrumentation.* Tata McGraw Hill.
