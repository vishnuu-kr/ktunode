---
title: "Verification of    (a) Thevenin’s theorem and Maximum Power Transfer theorem.*"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 2: Verification of    (a) Thevenin’s theorem and Maximum Power Transfer theorem.*"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ce4"
status: "completed"
scrapedAt: "2026-05-23T16:11:53.261Z"
---
## CIRCUITS AND MEASUREMENTS LAB - Module 2: Verification of Thevenin's Theorem and Maximum Power Transfer Theorem

**Subject:** CIRCUITS AND MEASUREMENTS LAB
**Module:** Module 2: Verification of (a) Thevenin’s theorem and Maximum Power Transfer theorem.
**Topic:** Verification of (a) Thevenin’s Theorem and Maximum Power Transfer Theorem.

---

### **1. Introduction to Network Theorems**

Network theorems are fundamental tools used to simplify complex electrical circuits, making them easier to analyze and understand. They allow us to replace complex parts of a circuit with simpler equivalent circuits without altering the behavior of the rest of the circuit. This module focuses on two crucial theorems: Thevenin's Theorem and the Maximum Power Transfer Theorem.

**Course Outcome Alignment:**
*   **CO2:** Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3) - This module directly addresses this CO by requiring experimental verification of these theorems.

**Textbook References:**
*   **Sawhney, A. K.** (Chapter on Network Theorems): Likely covers the theoretical basis and application of Thevenin's and MPT theorems.
*   **Gupta, J. B.** (Chapter on Network Theorems): Will also provide theoretical explanations and possibly examples.
*   **Kalsi, H. S.** (Chapter on Network Theorems or DC Circuit Analysis): May offer a perspective on simplifying circuit analysis using these theorems.

---

### **2. Thevenin's Theorem**

**2.1. Statement of Thevenin's Theorem:**

Thevenin's theorem states that any linear, bilateral two-terminal network containing independent sources and impedances can be replaced by an equivalent circuit consisting of a single voltage source, $V_{th}$, in series with a single impedance, $Z_{th}$ (or resistance, $R_{th}$, for DC circuits). This equivalent circuit will deliver the same voltage and current to any load connected across its terminals as the original network.

**2.2. Key Concepts and Definitions:**

*   **Linear Network:** A network where the voltage-current relationship is linear (obeys Ohm's law and Kirchhoff's laws).
*   **Bilateral Network:** A network where the current-current relationship is the same regardless of the direction of current flow.
*   **Two-Terminal Network:** A part of a circuit that has only two connection points (terminals) for external connection.
*   **Independent Sources:** Voltage or current sources whose output is not dependent on the circuit parameters (e.g., constant voltage source, constant current source).
*   **Thevenin Voltage ($V_{th}$ or $E_{th}$):** The open-circuit voltage across the two terminals of the network. This is the voltage that would be measured if no load were connected.
*   **Thevenin Resistance ($R_{th}$ or $Z_{th}$):** The equivalent resistance of the network as seen from the two terminals, with all independent sources turned off.
    *   For voltage sources, turning them off means replacing them with a short circuit.
    *   For current sources, turning them off means replacing them with an open circuit.
*   **Equivalent Circuit:** A simplified circuit (a voltage source $V_{th}$ in series with $R_{th}$) that behaves identically to the original complex network at its terminals.

**2.3. Procedure for Finding Thevenin Equivalent:**

1.  **Identify the Terminals:** Clearly mark the two terminals across which the equivalent circuit is to be found. Let's call them A and B.
2.  **Calculate Thevenin Voltage ($V_{th}$):**
    *   Remove the load connected across terminals A and B.
    *   Calculate the open-circuit voltage across terminals A and B. This can be done using Kirchhoff's laws (KCL, KVL), voltage division, current division, or other circuit analysis techniques.
3.  **Calculate Thevenin Resistance ($R_{th}$):**
    *   Turn off all independent sources in the original network.
    *   Calculate the equivalent resistance looking into terminals A and B.
        *   If the network contains only resistors, this is a straightforward calculation of series and parallel combinations.
        *   If the network contains dependent sources, you'll need to inject a test voltage or current source at the terminals and calculate the resulting current or voltage.
        *   Alternatively, if the network contains only resistors, $R_{th}$ can also be found by calculating the ratio of $V_{th}$ to the short-circuit current ($I_{sc}$) at terminals A and B: $R_{th} = V_{th} / I_{sc}$.
4.  **Construct Thevenin Equivalent Circuit:** Draw a circuit with a voltage source $V_{th}$ in series with a resistor $R_{th}$ connected across the terminals A and B.

**2.4. Verification of Thevenin's Theorem:**

*   **Method 1: Using a Load Resistor:**
    1.  Construct the original circuit with a known load resistor ($R_L$) connected to terminals A and B.
    2.  Measure the current through $R_L$ and the voltage across $R_L$ using an ammeter and voltmeter respectively.
    3.  Calculate the expected current and voltage across $R_L$ using the Thevenin equivalent circuit ($I_L = V_{th} / (R_{th} + R_L)$, $V_L = I_L \times R_L$).
    4.  Compare the measured values with the calculated values. They should be approximately equal (within experimental error).
*   **Method 2: Using Different Load Resistors:**
    1.  Repeat Method 1 for several different values of $R_L$.
    2.  For each $R_L$, compare the measured load current and voltage with the values calculated using the Thevenin equivalent. Consistent agreement across various loads verifies the theorem.

**2.5. Example:**

Consider a simple circuit with a 10V voltage source, a 2kΩ resistor, and a 1kΩ resistor in series, with a load resistor $R_L = 500\Omega$ connected across the 1kΩ resistor.

**Original Circuit:**
```
      +-------[ 2kΩ ]-------+-------[ 1kΩ ]-------+
      |                       |                     |
     10V                      A                     B
      |                       |                     |
      ------------------------+-------[ R_L ]-------+
```

**Steps to find Thevenin Equivalent:**

1.  **Terminals:** A and B.
2.  **$V_{th}$ (Open-circuit voltage at A-B):** Remove $R_L$. The circuit is a simple series circuit.
    *   Total resistance = 2kΩ + 1kΩ = 3kΩ
    *   Current in the circuit = $10V / 3kΩ = 10/3 mA$.
    *   $V_{th}$ is the voltage across the 1kΩ resistor.
    *   $V_{th} = (10/3 mA) \times 1kΩ = 10/3 V \approx 3.33V$.
3.  **$R_{th}$:** Turn off the 10V source (replace with short circuit).
    *   The circuit now consists of the 2kΩ resistor and the 1kΩ resistor in series.
    *   Looking into terminals A and B, we see the 1kΩ resistor directly. The 2kΩ resistor is shorted out.
    *   Therefore, $R_{th} = 1kΩ$.

**Thevenin Equivalent Circuit:**
```
      +-------[ R_th = 1kΩ ]-------+
      |                            |
    V_th = 3.33V                   A
      |                            |
      -----------------------------+
```

**Verification with $R_L = 500\Omega$:**

*   **Measured:** Connect $R_L = 500\Omega$ to terminals A and B of the original circuit and measure the current through $R_L$ and the voltage across $R_L$.
*   **Calculated (using Thevenin equivalent):**
    *   $I_L = V_{th} / (R_{th} + R_L) = 3.33V / (1kΩ + 500Ω) = 3.33V / 1500Ω = 2.22mA$.
    *   $V_L = I_L \times R_L = 2.22mA \times 500Ω = 1.11V$.

**Important Point to Remember:** When calculating $R_{th}$, ensure all *independent* sources are deactivated. Dependent sources, if present, are not deactivated and must be accounted for when calculating $R_{th}$.

---

### **3. Maximum Power Transfer Theorem**

**3.1. Statement of Maximum Power Transfer Theorem:**

The theorem states that for a given linear source network, maximum power is transferred from the source to the load when the load impedance ($Z_L$) is equal to the complex conjugate of the source impedance ($Z_S$). For DC circuits with only resistors, this simplifies to the load resistance ($R_L$) being equal to the source resistance ($R_{th}$).

**3.2. Key Concepts and Definitions:**

*   **Source Impedance ($Z_S$):** The impedance of the source network as seen from its output terminals. In the context of Thevenin's theorem, the Thevenin resistance ($R_{th}$) and Thevenin reactance ($X_{th}$) together form the source impedance ($Z_S = R_{th} + jX_{th}$).
*   **Load Impedance ($Z_L$):** The impedance of the load connected to the source network ($Z_L = R_L + jX_L$).
*   **Complex Conjugate:** For an impedance $Z = R + jX$, its complex conjugate is $Z^* = R - jX$.
*   **Power Transfer:** The rate at which energy is delivered from the source to the load.

**3.3. Derivation (for DC circuits with resistors):**

Consider a DC circuit where the source is represented by its Thevenin equivalent: a voltage source $V_{th}$ in series with a resistance $R_{th}$. Let the load be a resistor $R_L$.

*   **Current in the circuit:** $I = V_{th} / (R_{th} + R_L)$
*   **Power delivered to the load ($P_L$):** $P_L = I^2 R_L = (V_{th} / (R_{th} + R_L))^2 R_L$
    $P_L = V_{th}^2 \times R_L / (R_{th} + R_L)^2$

To find the condition for maximum power, we differentiate $P_L$ with respect to $R_L$ and set the derivative to zero:

$dP_L / dR_L = V_{th}^2 \times \frac{(R_{th} + R_L)^2 \times 1 - R_L \times 2(R_{th} + R_L)}{(R_{th} + R_L)^4} = 0$

$(R_{th} + R_L)^2 - 2R_L(R_{th} + R_L) = 0$
$(R_{th} + R_L) [ (R_{th} + R_L) - 2R_L ] = 0$
$(R_{th} + R_L) [ R_{th} - R_L ] = 0$

Since $R_{th} + R_L$ cannot be zero, we have:
$R_{th} - R_L = 0$
$R_L = R_{th}$

**Conclusion:** Maximum power is delivered to the load when the load resistance $R_L$ is equal to the Thevenin resistance $R_{th}$.

**3.4. Maximum Power ($P_{L_{max}}$):**

When $R_L = R_{th}$:
$P_{L_{max}} = V_{th}^2 \times R_{th} / (R_{th} + R_{th})^2 = V_{th}^2 \times R_{th} / (2R_{th})^2 = V_{th}^2 \times R_{th} / (4R_{th}^2) = V_{th}^2 / (4R_{th})$

Also, since $V_{th} = I_{sc} \times R_{th}$,
$P_{L_{max}} = (I_{sc} \times R_{th})^2 / (4R_{th}) = I_{sc}^2 \times R_{th}^2 / (4R_{th}) = I_{sc}^2 \times R_{th} / 4$

**Efficiency at Maximum Power Transfer:**

When $R_L = R_{th}$, the total resistance in the circuit is $2R_{th}$.
The current is $I = V_{th} / (2R_{th})$.
Power delivered to the load: $P_L = I^2 R_L = (V_{th} / (2R_{th}))^2 R_{th} = V_{th}^2 / (4R_{th})$.
Power delivered by the source (total power): $P_{total} = I^2 (R_{th} + R_L) = (V_{th} / (2R_{th}))^2 (2R_{th}) = V_{th}^2 / (2R_{th})$.
Alternatively, $P_{total} = V_{th} \times I = V_{th} \times (V_{th} / (2R_{th})) = V_{th}^2 / (2R_{th})$.

Efficiency ($\eta$) = (Power delivered to load / Total power delivered by source) $\times 100\%$
$\eta = (V_{th}^2 / (4R_{th})) / (V_{th}^2 / (2R_{th})) \times 100\% = (1/4) / (1/2) \times 100\% = 0.5 \times 100\% = 50\%$

**Important Point to Remember:** At maximum power transfer, the efficiency is only 50%. This means half the power is dissipated in the internal resistance of the source ($R_{th}$), and half is delivered to the load ($R_L$).

**3.5. Verification of Maximum Power Transfer Theorem:**

1.  **Determine the Thevenin Equivalent:** First, find the Thevenin equivalent circuit ($V_{th}$ and $R_{th}$) of the source network.
2.  **Calculate the Optimal Load Resistance:** From the Thevenin equivalent, determine the value of $R_L$ that should result in maximum power transfer ($R_{L_{optimal}} = R_{th}$).
3.  **Experiment with Different Load Resistances:**
    *   Connect various load resistors ($R_L$) across the terminals of the original circuit (or its Thevenin equivalent). Include values around $R_{th}$.
    *   For each $R_L$, measure the voltage across the load ($V_L$) and the current through the load ($I_L$).
    *   Calculate the power delivered to the load for each $R_L$ using $P_L = V_L \times I_L$ or $P_L = I_L^2 \times R_L$.
4.  **Plot the Results:** Plot the power delivered to the load ($P_L$) on the y-axis against the load resistance ($R_L$) on the x-axis.
5.  **Identify Maximum Power:** The plot should show a peak at $R_L = R_{th}$, indicating maximum power transfer. The maximum power value should be close to the theoretically calculated $P_{L_{max}} = V_{th}^2 / (4R_{th})$.

**3.6. Example:**

Using the same circuit as the Thevenin example, where $V_{th} = 3.33V$ and $R_{th} = 1kΩ$.

**Optimal Load Resistance:** $R_{L_{optimal}} = R_{th} = 1kΩ$.

**Theoretical Maximum Power:** $P_{L_{max}} = V_{th}^2 / (4R_{th}) = (3.33V)^2 / (4 \times 1000Ω) \approx 11.09V^2 / 4000Ω \approx 2.77mW$.

**Experimental Verification:**

| $R_L$ (Ω) | $V_L$ (V) (Measured) | $I_L$ (mA) (Measured) | $P_L = V_L \times I_L$ (mW) | Calculated $P_L = (3.33/(1+R_L/1000))^2 \times R_L$ (mW) |
| :-------- | :------------------- | :-------------------- | :-------------------------- | :--------------------------------------------------------- |
| 100       | 0.30                 | 3.00                  | 0.90                        | $(3.33/(1+0.1))^2 \times 0.1 \approx 0.90$                  |
| 500       | 1.10                 | 2.20                  | 2.42                        | $(3.33/(1+0.5))^2 \times 0.5 \approx 2.42$                  |
| **1000**  | **1.66**             | **1.66**              | **2.76**                    | $(3.33/(1+1))^2 \times 1 \approx 2.77$                      |
| 1500      | 2.00                 | 1.33                  | 2.66                        | $(3.33/(1+1.5))^2 \times 1.5 \approx 2.66$                  |
| 2000      | 2.22                 | 1.11                  | 2.46                        | $(3.33/(1+2))^2 \times 2 \approx 2.46$                      |

*Note: Measured values are approximate and will vary due to component tolerances and measurement errors.*

The table shows that the power delivered to the load is maximum when $R_L = 1000\Omega (1kΩ)$, which is equal to $R_{th}$.

**Important Point to Remember:** For AC circuits, maximum power transfer occurs when $Z_L = Z_S^*$, meaning $R_L = R_{th}$ and $X_L = -X_{th}$. This usually involves tuning the load reactance to cancel out the source reactance.

---

### **4. Practical Considerations and Lab Setup**

*   **Component Tolerances:** Real resistors, capacitors, and inductors have tolerances. This will affect the accuracy of your measurements.
*   **Internal Resistance of Meters:** Ammeters have a very low internal resistance, and voltmeters have a very high internal resistance. These can affect the circuit behavior, especially in low-voltage or high-impedance circuits. Always consider the impact of the meters.
*   **Power Supply Stability:** Ensure the DC power supply is stable and provides the specified voltage.
*   **Wire Resistance:** The resistance of connecting wires can be significant in low-resistance circuits.
*   **Safety:** Always follow laboratory safety procedures.

**Lab Setup for Verification:**

*   **Components:** DC power supply, resistors of various values, breadboard, connecting wires.
*   **Measuring Instruments:** Digital Multimeter (DMM) capable of measuring DC voltage and current.

**Steps for Experiment:**

**A. Verification of Thevenin's Theorem:**

1.  **Construct the original circuit:** Set up the circuit as per the given schematic. Choose a section of the circuit to simplify (e.g., a part of the circuit connected to a load resistor).
2.  **Measure $V_{th}$:** Remove the load and measure the voltage across the chosen terminals (A-B) using a voltmeter.
3.  **Measure $R_{th}$:**
    *   Deactivate all independent sources.
    *   Measure the equivalent resistance across the terminals (A-B) using an ohmmeter.
    *   *Alternatively:* Short the terminals (A-B) and measure the current flowing from the deactivated voltage source (or into the circuit if an independent current source was removed). Calculate $R_{th} = V_{th} / I_{sc}$.
4.  **Connect a Load Resistor ($R_L$):** Connect a known load resistor across terminals A-B.
5.  **Measure Load Voltage and Current:** Measure the voltage across $R_L$ and the current through $R_L$.
6.  **Compare:** Calculate the expected load voltage and current using the Thevenin equivalent ($V_{th}, R_{th}$) and compare with the measured values. Repeat for a few different values of $R_L$.

**B. Verification of Maximum Power Transfer Theorem:**

1.  **Determine $R_{th}$:** Find the Thevenin equivalent resistance ($R_{th}$) of the source network using the procedure above.
2.  **Set up Loads:** Prepare a set of load resistors with values that include $R_{th}$ and values both smaller and larger than $R_{th}$.
3.  **Measure Load Power:** For each load resistor ($R_L$), measure the voltage across it ($V_L$) and the current through it ($I_L$). Calculate the power $P_L = V_L \times I_L$.
4.  **Plot and Analyze:** Plot $P_L$ versus $R_L$. Observe the peak power at $R_L = R_{th}$.

---

### **5. Practice Questions and Answers**

**Question 1:** State Thevenin's theorem and explain the steps to find the Thevenin equivalent circuit.

**Answer:** Thevenin's theorem states that any linear, bilateral two-terminal network can be replaced by an equivalent circuit consisting of a single voltage source ($V_{th}$) in series with a single resistance ($R_{th}$).
Steps:
1.  Identify terminals A and B.
2.  Calculate $V_{th}$ by finding the open-circuit voltage across A-B.
3.  Calculate $R_{th}$ by deactivating all independent sources and finding the equivalent resistance looking into A-B.
4.  Construct the equivalent circuit with $V_{th}$ in series with $R_{th}$ across A-B.

**Question 2:** For a given DC circuit, how do you deactivate an independent voltage source and an independent current source?

**Answer:** An independent voltage source is deactivated by replacing it with a short circuit (0V). An independent current source is deactivated by replacing it with an open circuit (0A).

**Question 3:** According to the Maximum Power Transfer Theorem, when is maximum power delivered to a load resistance $R_L$ in a DC circuit?

**Answer:** Maximum power is delivered to the load resistance $R_L$ when $R_L$ is equal to the Thevenin equivalent resistance ($R_{th}$) of the source network.

**Question 4:** If a DC source network has a Thevenin voltage $V_{th} = 12V$ and a Thevenin resistance $R_{th} = 100\Omega$, what is the maximum power that can be delivered to a load?

**Answer:**
Maximum power $P_{L_{max}} = V_{th}^2 / (4R_{th})$
$P_{L_{max}} = (12V)^2 / (4 \times 100\Omega)$
$P_{L_{max}} = 144V^2 / 400\Omega = 0.36W = 360mW$.

**Question 5:** You are given a circuit and asked to verify Thevenin's Theorem. You measure the load current with a load resistor $R_L = 2k\Omega$ connected. You then calculate the Thevenin equivalent and find $V_{th} = 5V$ and $R_{th} = 1k\Omega$. What load current would you expect to measure and what is the expected load voltage?

**Answer:**
Expected Load Current ($I_L$) = $V_{th} / (R_{th} + R_L)$
$I_L = 5V / (1k\Omega + 2k\Omega) = 5V / 3000\Omega = 1.67mA$.

Expected Load Voltage ($V_L$) = $I_L \times R_L$
$V_L = 1.67mA \times 2k\Omega = 3.34V$.

**Question 6:** What is the efficiency of power transfer when maximum power is delivered to the load?

**Answer:** The efficiency of power transfer at maximum power transfer is 50%.

---

### **6. Important Points to Remember**

*   **Thevenin's Theorem** simplifies any linear network to a single voltage source and a series resistance.
*   To find **$V_{th}$**, remove the load and measure the open-circuit voltage.
*   To find **$R_{th}$**, deactivate all independent sources and calculate the equivalent resistance. Short voltage sources, open current sources.
*   **Maximum Power Transfer Theorem** states $R_L = R_{th}$ for DC circuits for maximum power delivery.
*   At maximum power transfer, the **efficiency is 50%**.
*   Always consider **component tolerances** and the **internal resistance of meters** during experimental verification.
*   For **AC circuits**, the condition for maximum power transfer is $Z_L = Z_S^*$.

---

### **7. Course Outcome Alignment Summary**

This module directly contributes to:

*   **CO2: Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3)**. The entire module is dedicated to the theoretical understanding and practical verification of Thevenin's and Maximum Power Transfer theorems through circuit setup and measurement.

While not directly assessed in this module, the understanding of simplifying circuits through theorems like Thevenin's is foundational for analyzing more complex circuits, which would later relate to CO1 (RLC circuit analysis). The practical aspect of taking measurements aligns with the general "measurements" aspect of the lab course.
