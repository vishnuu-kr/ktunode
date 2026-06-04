---
title: "(b) Calculation of Norton’s equivalent circuit (calculation only)."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 2: Verification of    (a) Thevenin’s theorem and Maximum Power Transfer theorem.*"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ce5"
status: "completed"
scrapedAt: "2026-05-23T16:11:53.974Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 2: Verification of (a) Thevenin’s theorem and Maximum Power Transfer theorem.

### Topic (b): Calculation of Norton’s Equivalent Circuit (Calculation Only)

---

### 1. Introduction to Norton's Theorem

Norton's Theorem is a fundamental concept in circuit analysis that simplifies complex linear electrical networks. It states that any linear electrical network, regardless of its complexity, can be replaced by an equivalent circuit consisting of a single **current source (I_N)** in parallel with a single **impedance (Z_N)**. This equivalent circuit behaves identically to the original network with respect to any two terminals.

This topic focuses solely on the **calculation** of the Norton's equivalent circuit parameters, I_N and Z_N. We will not be performing experimental verification in this lab session.

---

### 2. Key Concepts and Definitions

*   **Linear Network:** A network where the relationship between voltage and current is linear (obeys Ohm's Law and Kirchhoff's Laws).
*   **Equivalent Circuit:** A simplified representation of a complex circuit that exhibits the same terminal characteristics.
*   **Norton Current (I_N):** The current that flows through the short-circuited terminals of the original network.
*   **Norton Impedance (Z_N) / Norton Resistance (R_N):** The equivalent impedance seen from the terminals when all independent sources within the network are deactivated.

---

### 3. Relationship between Thevenin and Norton Equivalent Circuits

Norton's Theorem is closely related to Thevenin's Theorem. A Thevenin equivalent circuit consists of a voltage source (V_th) in series with an impedance (Z_th). A Norton equivalent circuit consists of a current source (I_N) in parallel with an impedance (Z_N).

The conversion between the two is straightforward:

*   **Norton Current (I_N) = Thevenin Voltage (V_th) / Thevenin Impedance (Z_th)**
    *   $I_N = V_{th} / Z_{th}$
*   **Norton Impedance (Z_N) = Thevenin Impedance (Z_th)**
    *   $Z_N = Z_{th}$

This relationship is crucial as if you've already calculated the Thevenin equivalent, finding the Norton equivalent is trivial.

---

### 4. Calculating Norton's Equivalent Circuit Parameters

To calculate the Norton's equivalent circuit for a given linear network with respect to two designated terminals (let's call them A and B), we need to determine two parameters:

#### 4.1. Calculation of Norton Current (I_N)

The Norton current ($I_N$) is the current that would flow through the terminals A and B if they were **short-circuited**.

**Steps:**

1.  **Identify the terminals:** Designate the two terminals (A and B) across which you want to find the Norton equivalent.
2.  **Short-circuit the terminals:** Imagine replacing the load (or the connection between terminals A and B) with a short circuit (a wire with zero resistance).
3.  **Calculate the current:** Analyze the resulting circuit to determine the current flowing through the short circuit. This current is $I_N$.
    *   **Methods for calculation:**
        *   **Mesh Analysis:** If the short circuit introduces a new loop, mesh analysis can be effective.
        *   **Nodal Analysis:** If the short circuit simplifies node connections, nodal analysis can be useful.
        *   **Superposition Theorem:** If the circuit contains multiple independent sources, the current through the short circuit can be calculated by considering each source individually (while deactivating others) and summing the results.
        *   **Source Transformation:** If the circuit contains voltage sources in series with resistors, they can be transformed into equivalent current sources in parallel with resistors.

#### 4.2. Calculation of Norton Impedance (Z_N)

The Norton impedance ($Z_N$) is the equivalent impedance seen looking into the terminals A and B when all independent voltage and current sources in the original network are **deactivated**.

**Steps:**

1.  **Identify the terminals:** Again, designate the two terminals (A and B).
2.  **Deactivate independent sources:**
    *   Replace all independent **voltage sources** with **short circuits** (0 resistance).
    *   Replace all independent **current sources** with **open circuits** (infinite resistance).
    *   Dependent sources remain in the circuit.
3.  **Calculate the equivalent impedance:** Calculate the total impedance seen looking into terminals A and B of this modified circuit. This impedance is $Z_N$.
    *   **Methods for calculation:**
        *   **Series and Parallel Combinations:** If the deactivated circuit simplifies to standard series and parallel resistor configurations, use those rules.
        *   **Using a Test Source:** If the circuit remains complex after deactivating sources, inject a known test voltage source ($V_{test}$) or test current source ($I_{test}$) at terminals A and B.
            *   If a voltage source ($V_{test}$) is injected, calculate the resulting current ($I_{test}$) flowing out of the positive terminal of the source. Then, $Z_N = V_{test} / I_{test}$.
            *   If a current source ($I_{test}$) is injected, calculate the resulting voltage ($V_{test}$) across the terminals. Then, $Z_N = V_{test} / I_{test}$.
            *   It is often convenient to choose $V_{test} = 1V$ or $I_{test} = 1A$ for simpler calculations.

---

### 5. Example Calculation

Let's consider a simple circuit to demonstrate the calculation process.

**Problem:** Find the Norton's equivalent circuit for the network shown below with respect to terminals A and B.

**(Imagine a circuit diagram here: A 12V voltage source in series with a 2 Ohm resistor, connected to a parallel combination of a 4 Ohm resistor and a 6 Ohm resistor. Terminals A and B are across the 6 Ohm resistor.)**

**Circuit Description:**
*   Voltage Source ($V_s$): 12V
*   Resistor 1 ($R_1$): 2 $\Omega$
*   Resistor 2 ($R_2$): 4 $\Omega$
*   Resistor 3 ($R_3$): 6 $\Omega$
*   Terminals A and B are across $R_3$.

---

#### 5.1. Calculation of Norton Current ($I_N$)

1.  **Short-circuit terminals A and B:** Replace $R_3$ with a short circuit.
2.  **Analyze the circuit:** The circuit now consists of $V_s$ in series with $R_1$, and this combination is in parallel with $R_2$. The short circuit is connected across $R_2$. The current $I_N$ is the current flowing through the short circuit across $R_2$.

    *   When terminals A and B are short-circuited, $R_3$ is bypassed.
    *   The current from the source ($V_s$) flows through $R_1$.
    *   After $R_1$, the current splits. One path is through $R_2$, and the other is through the short circuit directly back to the negative terminal of the source.
    *   Since the short circuit has zero resistance, all the current that reaches the junction after $R_1$ will preferentially flow through the short circuit (infinite current is not practical here, but in terms of current division, the short circuit offers zero opposition). The current through $R_2$ becomes zero.
    *   However, a more precise way to think about it in this simplified example: the short circuit connects the node between $R_1$ and the parallel combination directly to the negative terminal of the source. This effectively shorts out $R_2$ and $R_3$ *together*.
    *   The equivalent resistance seen by the source is $R_1$ (2 $\Omega$) in series with the parallel combination of $R_2$ (4 $\Omega$) and the short circuit (0 $\Omega$). The parallel combination of any resistance with a short circuit is a short circuit. So, the equivalent resistance of the circuit is just $R_1$.
    *   The total current supplied by the source is $I_{total} = V_s / R_1 = 12V / 2\Omega = 6A$.
    *   This total current flows through $R_1$. After $R_1$, it reaches the junction where terminals A and B are shorted. The current $I_N$ is the current flowing through this short.

    Let's re-evaluate this with a focus on the shorted path. The short connects the top end of $R_2$ and $R_3$ to the bottom end of $R_2$ and $R_3$.
    *   The current flows from the source, through $R_1$.
    *   At the node after $R_1$, the current encounters two parallel paths: $R_2$ and the short circuit (across $R_3$).
    *   The Norton current $I_N$ is the current flowing through the short.
    *   Consider the voltage at the node after $R_1$ (let's call it Node X) with respect to the negative terminal of the source. The voltage at the negative terminal is 0V.
    *   The current through $R_1$ is $12V / 2\Omega = 6A$.
    *   The voltage at Node X is $12V$.
    *   The short circuit is across terminals A and B, which are across $R_3$. This means the voltage across $R_3$ is 0V.
    *   If the voltage across $R_3$ is 0V, then the current through $R_3$ is also 0V / $R_3$ = 0A.
    *   The current from the source ($6A$) flows through $R_1$. At the junction after $R_1$, it splits between $R_2$ and the short circuit.
    *   The voltage at the top of $R_2$ and $R_3$ (Node X) is $12V$. The voltage at the bottom of $R_2$ and $R_3$ is the voltage at the negative terminal of the source, which is 0V.
    *   Therefore, the voltage across the parallel combination of $R_2$ and the short circuit is $12V$.
    *   Current through $R_2$: $I_{R2} = V_X / R_2 = 12V / 4\Omega = 3A$.
    *   The current $I_N$ is the current through the short circuit, which bypasses $R_2$ and $R_3$. This is not the current we need.

    **Let's use a different approach for clarity:**
    *   Short A and B. The current $I_{SC}$ flows from A to B.
    *   The circuit is: 12V source in series with 2$\Omega$. This combination is in parallel with 4$\Omega$. The short is connected across the 4$\Omega$ resistor.
    *   This is incorrect. The short is connected across the terminals A and B, which are the terminals of the 6$\Omega$ resistor.
    *   So, replace the 6$\Omega$ resistor with a short.
    *   The circuit is now: 12V source in series with 2$\Omega$ resistor. This combination is in parallel with 4$\Omega$ resistor. The short circuit is effectively in parallel with the 4$\Omega$ resistor and also in parallel with the 6$\Omega$ resistor (which is now a short).
    *   This implies the circuit is a 12V source in series with a 2$\Omega$ resistor, and this entire branch is in parallel with a 4$\Omega$ resistor AND a short circuit.
    *   The current $I_N$ is the current flowing through the short circuit.
    *   The total current from the source is $I_{total} = 12V / 2\Omega = 6A$.
    *   This current of 6A arrives at the junction where the 2$\Omega$ resistor meets the parallel combination of 4$\Omega$ and the short circuit.
    *   All of this 6A will flow through the short circuit, as it offers zero resistance.
    *   **Therefore, $I_N = 6A$.**

    *(Self-correction: The previous interpretation of "shorting out R2 and R3 together" was correct in its effect on the total circuit, but the definition of $I_N$ is specifically the current through the short itself at terminals A and B.)*

#### 5.2. Calculation of Norton Impedance ($Z_N$)

1.  **Deactivate independent sources:** Replace the 12V voltage source with a short circuit.
2.  **Analyze the circuit:** The circuit now consists of:
    *   A short circuit where the voltage source was.
    *   A 2$\Omega$ resistor ($R_1$) in series with the short circuit. This combination is in parallel with a 4$\Omega$ resistor ($R_2$).
    *   Terminals A and B are across the original position of the 6$\Omega$ resistor ($R_3$).
    *   We are looking into terminals A and B.

    The circuit looks like this after deactivating the source:
    *   The 2$\Omega$ resistor ($R_1$) is now connected between the positive and negative terminals of the shorted voltage source.
    *   The 4$\Omega$ resistor ($R_2$) is connected in parallel with the 6$\Omega$ resistor ($R_3$).
    *   Terminals A and B are across the 6$\Omega$ resistor.

    Let's visualize the connections:
    *   The negative terminal of the source (ground) is connected to the bottom of $R_1$.
    *   The positive terminal of the source is connected to the top of $R_1$.
    *   After deactivating the voltage source, the top of $R_1$ is connected to the bottom of $R_1$ by a short circuit. This means $R_1$ is shorted out.
    *   So, effectively, the original circuit structure from the perspective of terminals A and B after deactivating the source is just the parallel combination of $R_2$ and $R_3$.
    *   We need to find the impedance seen looking into terminals A and B. Terminals A and B are across $R_3$.
    *   The effective circuit for finding $Z_N$ is $R_2$ in parallel with $R_3$.

    *   $Z_N = R_2 || R_3 = (R_2 \times R_3) / (R_2 + R_3)$
    *   $Z_N = (4 \Omega \times 6 \Omega) / (4 \Omega + 6 \Omega)$
    *   $Z_N = 24 \Omega^2 / 10 \Omega$
    *   $Z_N = 2.4 \Omega$

#### 5.3. Norton's Equivalent Circuit

The Norton's equivalent circuit consists of:
*   A current source $I_N = 6A$
*   In parallel with an impedance $Z_N = 2.4 \Omega$

*(Self-correction: The initial interpretation of $R_1$ being shorted out was correct. The impedance seen looking into A and B is indeed the parallel combination of $R_2$ and $R_3$.)*

---

### 6. Practice Questions

**Question 1:**
For the circuit shown below, find the Norton's equivalent circuit with respect to terminals A and B.

**(Imagine a circuit diagram: A 5V voltage source in series with a 1 Ohm resistor, connected in parallel with a 10 Ohm resistor. Terminals A and B are across the 10 Ohm resistor.)**

**Solution 1:**
*   **Circuit:**
    *   $V_s = 5V$
    *   $R_1 = 1 \Omega$
    *   $R_2 = 10 \Omega$
    *   Terminals A and B across $R_2$.

*   **Norton Current ($I_N$):**
    1.  Short terminals A and B (short the 10 $\Omega$ resistor).
    2.  The circuit becomes a 5V source in series with a 1 $\Omega$ resistor, in parallel with a 10 $\Omega$ resistor and a short circuit.
    3.  The total current from the source is $I_{total} = V_s / R_1 = 5V / 1\Omega = 5A$.
    4.  This 5A current flows through $R_1$ and reaches the junction where it splits between the 10 $\Omega$ resistor and the short circuit.
    5.  All 5A will flow through the short circuit.
    6.  Therefore, $I_N = 5A$.

*   **Norton Impedance ($Z_N$):**
    1.  Deactivate the 5V voltage source by replacing it with a short circuit.
    2.  The 1 $\Omega$ resistor ($R_1$) is now in series with the short circuit. This entire combination is in parallel with the 10 $\Omega$ resistor ($R_2$).
    3.  The impedance seen looking into terminals A and B (across $R_2$) is the parallel combination of $R_1$ (which is effectively shorted due to the voltage source being shorted) and $R_2$. No, this is incorrect.
    4.  When the voltage source is shorted, the 1 $\Omega$ resistor is directly connected between the two nodes that were the terminals of the voltage source. The 10 $\Omega$ resistor is connected between these same two nodes.
    5.  Therefore, we are looking into terminals A and B, which are across the 10 $\Omega$ resistor. The effective circuit connected to these terminals is the 1 $\Omega$ resistor connected between the same two points.
    6.  So, $Z_N$ is the resistance seen when looking into terminals A and B with the voltage source shorted. The 1 $\Omega$ resistor is connected between the two points that the 10 $\Omega$ resistor is also connected to.
    7.  This means the 1 $\Omega$ resistor is in parallel with the 10 $\Omega$ resistor.
    8.  $Z_N = R_1 || R_2 = (1 \Omega \times 10 \Omega) / (1 \Omega + 10 \Omega) = 10 \Omega^2 / 11 \Omega = 0.909 \Omega$.

*   **Norton's Equivalent Circuit:**
    *   Current Source $I_N = 5A$ in parallel with Impedance $Z_N = 0.909 \Omega$.

**Question 2:**
Consider a circuit with a 10V voltage source in series with a 2 $\Omega$ resistor, and this combination is in parallel with a 5 $\Omega$ resistor. Find the Norton's equivalent circuit with respect to the terminals of the 5 $\Omega$ resistor.

**Solution 2:**
*   **Circuit:**
    *   $V_s = 10V$
    *   $R_1 = 2 \Omega$
    *   $R_2 = 5 \Omega$
    *   Terminals A and B across $R_2$.

*   **Norton Current ($I_N$):**
    1.  Short terminals A and B (short the 5 $\Omega$ resistor).
    2.  The circuit now has the 10V source in series with 2 $\Omega$ in parallel with a 5 $\Omega$ resistor and a short circuit.
    3.  The total current from the source is $I_{total} = 10V / 2\Omega = 5A$.
    4.  This 5A current flows through the 2 $\Omega$ resistor and reaches the junction where it splits between the 5 $\Omega$ resistor and the short circuit.
    5.  All 5A will flow through the short circuit.
    6.  Therefore, $I_N = 5A$.

*   **Norton Impedance ($Z_N$):**
    1.  Deactivate the 10V voltage source by replacing it with a short circuit.
    2.  The 2 $\Omega$ resistor ($R_1$) is now in series with the short circuit. This combination is in parallel with the 5 $\Omega$ resistor ($R_2$).
    3.  The impedance seen looking into terminals A and B (across $R_2$) is the parallel combination of the 2 $\Omega$ resistor and the 5 $\Omega$ resistor.
    4.  $Z_N = R_1 || R_2 = (2 \Omega \times 5 \Omega) / (2 \Omega + 5 \Omega) = 10 \Omega^2 / 7 \Omega = 1.428 \Omega$.

*   **Norton's Equivalent Circuit:**
    *   Current Source $I_N = 5A$ in parallel with Impedance $Z_N = 1.428 \Omega$.

---

### 7. Important Points to Remember

*   **Definition of $I_N$:** It's the current through the SHORT-CIRCUITED terminals.
*   **Definition of $Z_N$:** It's the equivalent impedance looking into the terminals when ALL INDEPENDENT sources are DEACTIVATED (voltage sources to short, current sources to open).
*   **Relationship with Thevenin:** $I_N = V_{th} / Z_{th}$ and $Z_N = Z_{th}$. If you can find one equivalent, you can easily find the other.
*   **Calculation Methods:** Superposition, source transformation, mesh, nodal, and test source injection are all valid methods for calculating $I_N$ and $Z_N$. Choose the method that simplifies the circuit analysis the most.
*   **Dependent Sources:** Remember that dependent sources are NOT deactivated when calculating $Z_N$. They remain in the circuit and influence the resulting impedance.

---
