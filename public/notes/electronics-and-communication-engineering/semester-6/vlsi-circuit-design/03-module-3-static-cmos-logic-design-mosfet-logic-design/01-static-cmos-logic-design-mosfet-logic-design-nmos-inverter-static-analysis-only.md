---
title: "Static CMOS Logic Design : MOSFET Logic Design - NMOS Inverter (Static analysis only)"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefc9"
status: "completed"
scrapedAt: "2026-05-23T18:03:40.449Z"
---
# VLSI Circuit Design - Module 3: Static CMOS Logic Design - MOSFET Logic Design

## Topic: NMOS Inverter (Static Analysis Only)

This module delves into the fundamental building blocks of digital integrated circuits, focusing on static CMOS logic. We will start by analyzing the NMOS inverter, a crucial component, from a static analysis perspective. This understanding is foundational for designing more complex CMOS circuits.

### 1. Introduction to Static CMOS Logic

**Key Concept:** Static CMOS logic refers to combinational logic circuits that have a DC path from the output to either VDD or Ground in *all* valid steady-state conditions. This means there's no reliance on charge leakage or clock signals to maintain the output state, leading to predictable behavior and reduced power consumption in the steady state.

**Importance:** Static CMOS logic is the dominant logic family in modern VLSI design due to its inherent robustness, low static power dissipation, and predictable switching characteristics.

**Course Outcome Alignment:** This section contributes to **CO1** by introducing fundamental logic families used in VLSI design methodologies.

### 2. The NMOS Inverter: Structure and Operation

**Key Concept:** An NMOS inverter is a simple logic gate that implements the Boolean NOT function. Its output is the inverse of its input. In its most basic form, it uses an NMOS transistor acting as the switching element and a pull-up resistor.

**Structure:**

*   **NMOS Transistor:** Acts as the pull-down network (PDN). It connects the output to Ground when the input is HIGH.
*   **Pull-up Resistor:** Connects the output to the positive power supply (VDD). This ensures the output is HIGH when the NMOS transistor is OFF.

**Idealized Operation (Conceptual):**

*   **Input = HIGH (Logic '1'):** The NMOS transistor is turned ON. It acts like a closed switch, pulling the output to Ground (Logic '0').
*   **Input = LOW (Logic '0'):** The NMOS transistor is turned OFF. It acts like an open switch. The pull-up resistor then pulls the output to VDD (Logic '1').

**Important Note:** While the NMOS inverter is a foundational concept, in **static CMOS logic design**, the pull-up resistor is replaced by a PMOS transistor, forming the more robust CMOS inverter. This section focuses on the conceptual understanding derived from a basic NMOS inverter.

**Reference:** Kang, Leblebici, Kim (4/e) often introduces basic inverter structures as a starting point for logic families.

### 3. Static Analysis of an NMOS Inverter with a Resistor Load

**Key Concept:** Static analysis involves evaluating the circuit's behavior at steady-state conditions, typically at the voltage thresholds for logic '0' and '1'. We are interested in the output voltage levels and the current flowing through the circuit in these stable states.

**Circuit Diagram:**

```
     VDD
      |
     [R]
      |
   o----o---- Vout
   |    |
   in   |
   >|   |
   >|   |
   >|   |
   (NMOS)
     |
    GND
```

**Analysis:**

**Case 1: Input = LOW (Vin = 0V)**

*   The gate-source voltage ($V_{GS}$) of the NMOS transistor is 0V.
*   The NMOS transistor is in the cutoff region (OFF). It acts as an open circuit.
*   No current flows through the NMOS transistor.
*   The output voltage ($V_{out}$) is determined by the pull-up resistor and is pulled to VDD.
*   $V_{out} \approx V_{DD}$ (Logic '1')
*   Current from VDD to GND: $I_{DD} \approx 0$

**Case 2: Input = HIGH (Vin = VDD)**

*   The gate-source voltage ($V_{GS}$) of the NMOS transistor is VDD.
*   Assuming VDD is greater than the threshold voltage ($V_{th}$) of the NMOS transistor, the NMOS transistor is in the saturation region (acting as a non-linear resistor).
*   Current flows from VDD through the resistor and the NMOS transistor to GND.
*   The output voltage ($V_{out}$) is determined by the voltage drop across the NMOS transistor.
*   $V_{out} = V_{DD} - I_{DS} \cdot R$
*   The current $I_{DS}$ is approximately given by:
    $I_{DS} \approx \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$ (for saturation)
    where:
    *   $\mu_n$: electron mobility
    *   $C_{ox}$: gate oxide capacitance per unit area
    *   $W/L$: aspect ratio of the NMOS transistor
    *   $V_{GS}$: Gate-Source voltage (here, Vin = VDD)
    *   $V_{th}$: Threshold voltage of the NMOS transistor

*   In an ideal NMOS inverter with a resistive load, the output voltage when HIGH ($V_{OH}$) is ideally VDD, and the output voltage when LOW ($V_{OL}$) is ideally 0V. However, the resistive load introduces a voltage drop.

**Important Points to Remember:**

*   **Static Power Dissipation:** In the case of an NMOS inverter with a resistive load, there is a static power dissipation when the input is HIGH because current flows continuously from VDD to GND through the resistor and the ON NMOS. This is a major drawback of NMOS logic compared to CMOS.
*   **Noise Margins:** The noise margins ($NM_H$ and $NM_L$) are crucial for determining the robustness of a logic gate against noise.
    *   $NM_H = V_{IH} - V_{OH}$ (where $V_{IH}$ is the input voltage required to guarantee a HIGH output)
    *   $NM_L = V_{OL} - V_{IL}$ (where $V_{IL}$ is the input voltage that transitions to a LOW output)
    *   For an NMOS inverter with a resistor, the $NM_H$ is typically poor because $V_{OH}$ is VDD, but the switching threshold ($V_M$) can be significantly above $V_{th}$.

**Course Outcome Alignment:** This section directly contributes to **CO3** by enabling the analysis of basic logic circuits, understanding their operational characteristics under steady-state conditions.

### 4. Comparison with CMOS Inverter (Conceptual)

**Key Concept:** While this section focuses on NMOS, it's important to contrast it with the CMOS inverter to appreciate the advantages of CMOS. A CMOS inverter uses a PMOS transistor as the pull-up network and an NMOS transistor as the pull-down network.

**CMOS Inverter Structure:**

```
     VDD
      |
     (PMOS)
      |
   o----o---- Vout
   |    |
   in   |
        >|
        >|
        >|
      (NMOS)
        |
       GND
```

**Static Behavior of CMOS Inverter:**

*   **Input = LOW (Logic '0'):**
    *   PMOS is ON (acts like a closed switch).
    *   NMOS is OFF (acts like an open switch).
    *   Output is pulled to VDD. $V_{out} \approx V_{DD}$.
    *   No current flows from VDD to GND.
*   **Input = HIGH (Logic '1'):**
    *   PMOS is OFF (acts like an open switch).
    *   NMOS is ON (acts like a closed switch).
    *   Output is pulled to Ground. $V_{out} \approx 0V$.
    *   No current flows from VDD to GND.

**Key Advantage of CMOS:**

*   **Zero Static Power Dissipation:** In both steady-state conditions (input HIGH or LOW), there is no direct path from VDD to Ground. Power is consumed only during switching. This is the primary reason for the dominance of CMOS technology.
*   **Rail-to-Rail Output:** CMOS inverters provide output voltages that swing very close to VDD and Ground, offering good noise margins.

**Reference:** Weste & Eshraghian (2/e) extensively covers CMOS logic families and their advantages.

### 5. Practice Questions and Exercises

**Question 1:**
Describe the state of the NMOS transistor in an NMOS inverter when the input voltage is 0V. What is the approximate output voltage?

**Answer 1:**
When the input voltage is 0V, the gate-source voltage ($V_{GS}$) of the NMOS transistor is 0V. This turns the NMOS transistor OFF (it enters the cutoff region). Since the NMOS transistor acts as an open circuit, the output voltage is pulled up to VDD through the pull-up resistor. Thus, the output voltage is approximately $V_{DD}$ (Logic '1').

**Question 2:**
What is the primary disadvantage of using an NMOS inverter with a resistive load in static CMOS logic design compared to a CMOS inverter?

**Answer 2:**
The primary disadvantage is static power dissipation. In an NMOS inverter with a resistive load, current flows from VDD to Ground through the resistor and the ON NMOS transistor when the input is HIGH. This continuous current flow leads to significant power consumption even when the circuit is not switching. A CMOS inverter, in contrast, has zero static power dissipation in steady-state conditions.

**Question 3:**
If an NMOS inverter has a pull-up resistor of $R = 10k\Omega$ and the NMOS transistor has $V_{th} = 0.7V$, $k_n = 100\mu A/V^2$, and $W/L = 10$, what would be the approximate output voltage when the input is $V_{in} = 5V$ (assuming $V_{DD} = 5V$ and the NMOS operates in saturation)?

**Answer 3:**
*   When $V_{in} = 5V$, $V_{GS} = 5V$.
*   The NMOS is in saturation because $V_{GS} > V_{th}$ (5V > 0.7V).
*   Calculate the drain current ($I_{DS}$):
    $I_{DS} = \frac{1}{2} k_n \frac{W}{L} (V_{GS} - V_{th})^2$
    $I_{DS} = \frac{1}{2} (100\mu A/V^2) (5V - 0.7V)^2$
    $I_{DS} = 50\mu A/V^2 (4.3V)^2$
    $I_{DS} = 50\mu A/V^2 (18.49V^2)$
    $I_{DS} = 924.5\mu A$
*   Calculate the output voltage ($V_{out}$) using Ohm's law for the resistor:
    $V_{out} = V_{DD} - I_{DS} \cdot R$
    $V_{out} = 5V - (924.5 \times 10^{-6} A) \cdot (10 \times 10^3 \Omega)$
    $V_{out} = 5V - 9.245V$
    $V_{out} = -4.245V$

    **Correction:** The calculation above assumes the NMOS acts as a current source and the resistor voltage drop is applied. This demonstrates a flaw in the simple resistive model. In reality, the output voltage would be higher than the threshold voltage. A more accurate analysis would involve solving the transistor equation and the Ohm's law equation simultaneously.

    **Revisiting Static Analysis:** The goal of static analysis is to understand the *steady-state* output levels.
    *   When Vin = HIGH (VDD), the NMOS is ON. The output voltage $V_{out}$ will be the voltage at the drain of the NMOS transistor. This voltage will be greater than $V_{th}$ but less than $V_{DD}$ due to the voltage drop across the resistor R and the current through the NMOS.
    *   To find the exact $V_{out}$ in the ON state, we would need to solve:
        $V_{out} = V_{DD} - I_{DS} \cdot R$
        where $I_{DS} = \frac{1}{2} k_n \frac{W}{L} (V_{in} - V_{th})^2$ (assuming $V_{in} \ge V_{th}$ and saturation)
        This is a quadratic equation for $V_{out}$ if $V_{in}$ is treated as a variable. However, if $V_{in}$ is fixed, we solve for $I_{DS}$ first, then $V_{out}$.

    Let's assume $V_{in}=V_{DD}=5V$ and $V_{th}=0.7V$, $k'_n=100\mu A/V^2$, $W/L=10$, $R=10k\Omega$.
    $I_{DS} = \frac{1}{2} (100\mu A/V^2) (5-0.7)^2 = 924.5\mu A$
    $V_{out} = 5V - (924.5 \times 10^{-6} A)(10 \times 10^3 \Omega) = 5V - 9.245V = -4.245V$. This result is incorrect. This indicates that the transistor might not be in saturation at this $V_{out}$.

    A better approach for static analysis: Assume $V_{out}$ and check if the transistor is in saturation.
    Let's find the switching threshold $V_M$ where $V_{out} = V_{in}$.
    If $V_{in} < V_{th}$, $V_{out} = V_{DD}$.
    If $V_{in} > V_{th}$, the NMOS is ON.
    Let's assume the transistor is in saturation: $I_{DS} = \frac{1}{2}k'_n (W/L) (V_{in}-V_{th})^2$.
    $V_{out} = V_{DD} - I_{DS} R$.
    We need to solve for $V_{in}$ where $V_{out}=V_{in}$ (for the switching threshold).
    $V_{in} = V_{DD} - \frac{1}{2}k'_n (W/L) (V_{in}-V_{th})^2 R$
    This is a cubic equation.

    **For static analysis questions on NMOS inverter with resistor load:**
    *   **Input LOW:** $V_{out} \approx V_{DD}$.
    *   **Input HIGH:** $V_{out}$ will be a voltage between $V_{th}$ and $V_{DD}$, determined by the voltage division between R and the effective resistance of the NMOS transistor. The exact value requires solving transistor equations. The key point for static analysis is that it's not 0V.

**Question 4:**
Explain the concept of "rail-to-rail" output swing and why it's advantageous.

**Answer 4:**
"Rail-to-rail" output swing means that the output voltage of a logic gate can reach very close to the power supply rails, VDD (for logic '1') and Ground (for logic '0'). This is advantageous because it maximizes the voltage difference between the HIGH and LOW states, leading to:
1.  **Improved Noise Margins:** Larger voltage swings mean that the circuit is less susceptible to noise, as there's more "room" for voltage fluctuations before an incorrect logic state is inferred.
2.  **Faster Switching:** A larger voltage swing generally allows for faster transitions between logic states.
3.  **Reduced Sensitivity to Threshold Variations:** The circuit is less affected by variations in transistor threshold voltages.

CMOS inverters achieve near rail-to-rail swing, which is a significant improvement over NMOS logic with resistive loads.

### 6. Important Points to Remember

*   **Static CMOS logic** has no DC path from VDD to Ground in steady-state.
*   The **NMOS inverter** is a fundamental logic gate, but its practical implementation in static logic uses a CMOS inverter (PMOS + NMOS).
*   **Static analysis** focuses on steady-state behavior (input HIGH and LOW).
*   An NMOS inverter with a **resistive pull-up** has **static power dissipation** when the input is HIGH.
*   CMOS inverters offer **zero static power dissipation** and **rail-to-rail output swings**, making them superior for static logic.
*   Understanding the NMOS inverter's operation is crucial for grasping the working principles of more complex CMOS circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References and Further Reading

*   **Kang, Leblebici, Kim (4/e):** Chapters on basic logic gates and MOS transistor theory.
*   **Weste & Eshraghian (2/e):** Chapters detailing CMOS logic families and inverter analysis.
*   **Rabaey (2/e):** Provides a good overview of basic digital integrated circuit design principles.

This concludes the study notes on the NMOS inverter from a static analysis perspective. The next steps in Module 3 will build upon this foundation to explore the fully static CMOS inverter in detail.