---
title: "Biasing of p-channel and n-channel MOSFET circuits"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8b"
status: "completed"
scrapedAt: "2026-05-23T16:18:46.821Z"
---
# Module 3: MOSFETs - Biasing of p-channel and n-channel MOSFET Circuits

This module focuses on understanding and implementing various biasing techniques for both n-channel and p-channel MOSFETs. Proper biasing is crucial for establishing a stable operating point (Q-point) in the saturation region, enabling MOSFETs to function as amplifiers. This will build upon your understanding of MOSFET operation and is essential for achieving the design and analysis objectives outlined in the course outcomes, particularly CO3.

## Learning Outcomes:

By the end of this module, you will be able to:

*   **Understand the necessity of biasing MOSFETs:** Explain why biasing is required for MOSFETs to operate as amplifiers.
*   **Identify and explain different biasing techniques for n-channel MOSFETs:** Detail the circuit configurations and operational principles of various biasing methods for n-channel MOSFETs.
*   **Analyze n-channel MOSFET circuits for different biasing techniques:** Calculate key parameters like VGS, ID, VDS, and other quiescent values for circuits employing different biasing methods.
*   **Determine the stability of n-channel MOSFET biased circuits:** Evaluate how well a biasing circuit maintains the Q-point against variations in device parameters and supply voltages.
*   **Identify and explain different biasing techniques for p-channel MOSFETs:** Detail the circuit configurations and operational principles of various biasing methods for p-channel MOSFETs.
*   **Analyze p-channel MOSFET circuits for different biasing techniques:** Calculate key parameters like VSG, ID, VSD, and other quiescent values for circuits employing different biasing methods.
*   **Compare and contrast different biasing techniques:** Discuss the advantages and disadvantages of each biasing method in terms of stability, complexity, and performance.

## 1. Introduction to MOSFET Biasing

### 1.1 Why Biasing is Necessary

MOSFETs, like BJTs, need to be biased to establish a stable **operating point (Q-point)**. The Q-point represents the DC values of drain current ($I_D$) and drain-source voltage ($V_{DS}$) when no AC signal is applied.

*   **For amplification:** To amplify an AC signal, the MOSFET must operate in the **saturation region**. The Q-point must be set within this region so that small variations in the gate-source voltage ($V_{GS}$) cause corresponding variations in drain current ($I_D$), without clipping the output signal.
*   **Stability:** Biasing aims to make the Q-point relatively insensitive to variations in:
    *   **Threshold Voltage ($V_{TH}$):** This parameter can vary significantly between devices of the same type due to manufacturing tolerances.
    *   **Transconductance ($k'$):** The process transconductance parameter ($k' = \mu_n C_{ox}$) also varies with temperature and manufacturing.
    *   **Temperature:** Device characteristics change with temperature.

**(Reference: Boylested & Nashelsky, Chapter 13; Sedra & Smith, Chapter 5)**

### 1.2 N-channel vs. P-channel MOSFETs

It's crucial to remember the fundamental differences in current flow and voltage polarities:

| Feature           | N-channel MOSFET (NMOS)                                | P-channel MOSFET (PMOS)                                |
| :---------------- | :----------------------------------------------------- | :----------------------------------------------------- |
| Majority Carriers | Electrons                                              | Holes                                                  |
| Channel Formation | Requires $V_{GS} > V_{TH}$ (positive)                   | Requires $V_{SG} > |V_{TH}|$ (positive, $V_{GS} < V_{TH}$ where $V_{TH}$ is negative) |
| Current Direction | Drain current ($I_D$) flows from Drain to Source       | Drain current ($I_D$) flows from Source to Drain       |
| Voltage Polarities | $V_{DS}$ is typically positive; $V_{GS}$ is typically positive | $V_{SD}$ is typically positive; $V_{SG}$ is typically positive |
| $V_{TH}$          | Typically positive                                     | Typically negative                                     |

**(Reference: Bell, Chapter 7; Razavi, Chapter 4)**

## 2. Biasing Techniques for N-channel MOSFETs

We will primarily focus on establishing the gate-source voltage ($V_{GS}$) to ensure operation in the saturation region ($V_{DS} \ge V_{GS} - V_{TH}$). The drain current in saturation is given by:

$I_D = \frac{1}{2} k' \frac{W}{L} (V_{GS} - V_{TH})^2$

where $k' = \mu_n C_{ox}$.

### 2.1 Fixed Biasing (Zero Bias)

*   **Circuit:** The gate is connected to a fixed DC voltage ($V_{GG}$) through a resistor ($R_G$). The source is connected to ground.

    ```
        VDD
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    VGG --RG--   NMOS
    |   |   |
    ----|-----
        |
        Source (Ground)
    ```

*   **Analysis:**
    *   $V_{GS} = V_{GG}$ (assuming no voltage drop across $R_G$ in DC analysis)
    *   $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GG} - V_{TH})^2$
    *   $V_{DS} = V_{DD} - I_D R_D$

*   **Stability:** Very poor. The Q-point is highly dependent on $V_{GG}$ and $V_{TH}$. Any variation in $V_{TH}$ directly affects $I_D$.

*   **Key Point:** Rarely used in practice due to poor stability. It assumes $V_{GG}$ is sufficient to turn on the MOSFET and set $V_{GS} > V_{TH}$.

### 2.2 Self-Biasing (Source Biasing)

*   **Circuit:** A resistor ($R_S$) is placed in series with the source. The gate is connected to ground (or a fixed DC voltage).

    ```
        VDD
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    |   |   RS
    |   |   |
    ----|-----
        Source (Ground)
    ```

*   **Analysis:**
    *   $V_{GS} = V_{G} - V_S$
    *   Since the gate is usually connected to ground directly or through a large resistor ($R_G$ to ground, not shown for simplicity here, but would be present in a real circuit), $V_G = 0$.
    *   $V_S = I_D R_S$
    *   Therefore, $V_{GS} = -I_D R_S$.
    *   For saturation, we need $V_{GS} > V_{TH}$. This implies that $I_D$ must be such that $-I_D R_S > V_{TH}$. Since $I_D$ is positive, this requires $V_{TH}$ to be negative for this configuration, which is not standard for NMOS. **This configuration is typically used for PMOS where $V_{TH}$ is negative and $V_{GS}$ is negative.**

    *   **Corrected analysis for NMOS (with a positive $V_{TH}$):** For NMOS, $V_{GS}$ must be positive. Self-biasing with the source resistor $R_S$ and gate connected to ground results in $V_{GS} = -I_D R_S$. If $V_{TH}$ is positive, this configuration inherently forces the MOSFET into cutoff if $I_D=0$, which is not useful for amplification.

    *   **Revised Self-Biasing (common for NMOS):** The gate is biased to a positive voltage ($V_{GG}$) through $R_G$, and the source resistor $R_S$ is used.

    ```
        VDD
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    VGG --RG--   NMOS
    |   |   |
    ----|-----
        |
        RS
        |
       Ground
    ```

    *   $V_{G} = V_{GG}$
    *   $V_S = I_D R_S$
    *   $V_{GS} = V_G - V_S = V_{GG} - I_D R_S$

    *   Now, substitute this $V_{GS}$ into the saturation current equation:
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GG} - I_D R_S - V_{TH})^2$

    *   This is a quadratic equation in $I_D$. Solving for $I_D$:
        Let $I_D = x$.
        $x = \frac{1}{2} k' \frac{W}{L} (V_{GG} - V_{TH} - x R_S)^2$
        $\sqrt{x} = \sqrt{\frac{1}{2} k' \frac{W}{L}} (V_{GG} - V_{TH} - x R_S)$
        $\sqrt{x} = A (B - x R_S)$, where $A = \sqrt{\frac{1}{2} k' \frac{W}{L}}$ and $B = V_{GG} - V_{TH}$.
        $\sqrt{x} = A B - A R_S x$
        $A R_S x + \sqrt{x} - A B = 0$

        This equation can be solved graphically or numerically. A common approach is to plot $I_D$ vs. $V_{GS}$ (the MOSFET's $I_D$-$V_{GS}$ characteristic) and $V_{GS} = V_{GG} - I_D R_S$ (the load line). The intersection gives the Q-point.

    *   $V_{DS} = V_{DD} - I_D R_D$

*   **Stability:** Much better than fixed biasing. The presence of $R_S$ provides negative feedback. If $I_D$ increases (e.g., due to increased $V_{TH}$ or $k'$), $V_S$ increases, which reduces $V_{GS}$. A reduced $V_{GS}$ counteracts the initial increase in $I_D$. Similarly, if $I_D$ decreases, $V_S$ decreases, $V_{GS}$ increases, and $I_D$ increases.

*   **Important Point:** The stability is improved because the gate voltage is fixed, and the source voltage follows the drain current. This creates a form of negative feedback that stabilizes $V_{GS}$.

**(Reference: Boylested & Nashelsky, Section 13.4; Sedra & Smith, Section 5.4.1)**

### 2.3 Voltage Divider Biasing

*   **Circuit:** The gate is biased using a voltage divider formed by two resistors, $R_1$ and $R_2$. A source resistor $R_S$ is included for stability.

    ```
        VDD
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    R1  |   RS
    |   |   |
    +---|---+
    |   |
    R2  |
    |   |
   Ground Source (Ground)
    ```

*   **Analysis:**
    *   **Step 1: Find the Thevenin Equivalent at the Gate.**
        *   $V_{TH(gate)} = V_{DD} \frac{R_2}{R_1 + R_2}$
        *   $R_{TH(gate)} = \frac{R_1 R_2}{R_1 + R_2}$

    *   **Step 2: Analyze the circuit with Thevenin equivalent.** The circuit now looks like a standard BJT voltage divider bias circuit, but with MOSFET parameters.

        ```
               VDD
                |
                RD
                |
             +--+--+
             |  |  |
           D G S
           -----|-----
           |   |   |
        R_TH   |   RS
           |   |   |
           +---|---+
           |   |
         V_TH  |
           |   |
          Ground Source (Ground)
        ```

    *   The gate voltage is now $V_G = V_{TH(gate)}$.
    *   $V_S = I_D R_S$
    *   $V_{GS} = V_G - V_S = V_{TH(gate)} - I_D R_S$

    *   **Step 3: Solve for $I_D$ using the quadratic equation.** Substitute this $V_{GS}$ into the saturation current equation:
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{TH(gate)} - I_D R_S - V_{TH})^2$

        This is the same form of equation as in self-biasing, which can be solved graphically or numerically.

    *   $V_{DS} = V_{DD} - I_D (R_D + R_S)$ (if $R_S$ is bypassed by a capacitor for AC, then $V_{DS} = V_{DD} - I_D R_D$)

*   **Stability:** Excellent. The voltage divider sets a stable DC gate voltage, and the source resistor provides negative feedback, similar to self-biasing. This is the most common and preferred biasing technique for discrete MOSFET amplifiers due to its stability.

*   **Important Point:** The stability factor ($S$) is significantly improved compared to fixed or self-biasing. The stability is further enhanced if $R_S$ is made large and the gate bias voltage ($V_{TH(gate)}$) is set to be significantly larger than $V_{TH}$.

**(Reference: Boylested & Nashelsky, Section 13.5; Sedra & Smith, Section 5.4.2; Bell, Section 7.5)**

### 2.4 Drain-to-Gate Feedback Biasing

*   **Circuit:** The gate is connected to the drain through a resistor ($R_F$).

    ```
        VDD
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    RF  |   RS
    |   |   |
    ----|-----
        Source (Ground)
    ```

*   **Analysis:**
    *   In DC analysis, the capacitor (if present) acts as an open circuit.
    *   $V_{GS} = V_{DS}$ (assuming $R_F$ connects directly to the drain).
    *   In saturation: $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GS} - V_{TH})^2$
    *   Substitute $V_{GS} = V_{DS}$:
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{DS} - V_{TH})^2$
    *   We also know $V_{DS} = V_{DD} - I_D R_D$.
    *   Substitute $V_{DS}$ into the $I_D$ equation:
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{DD} - I_D R_D - V_{TH})^2$

    *   This is again a quadratic equation in $I_D$ and can be solved graphically or numerically.

*   **Stability:** Moderate. The feedback loop tends to stabilize $V_{GS}$ relative to $V_{DS}$. If $V_{GS}$ increases, $I_D$ increases, which increases $V_{DS}$. However, due to the feedback, this increased $V_{DS}$ is applied to the gate, tending to increase $V_{GS}$ further. The presence of $R_D$ and the saturation condition limit this. It is less stable than voltage divider biasing, especially against variations in $k'$.

*   **Important Point:** This configuration is useful for creating a "constant current source" behavior, but its stability against $k'$ variation is not ideal. Often used in integrated circuits where resistors can be precisely controlled.

**(Reference: Sedra & Smith, Section 5.4.3; Bell, Section 7.6)**

### 2.5 Biasing with Source Resistance and Degeneration (for Stability)

This is essentially the same as self-biasing or voltage divider biasing where $R_S$ provides stability. The term "degeneration" refers to the negative feedback introduced by $R_S$.

*   **Principle:** Any increase in $I_D$ causes a larger voltage drop across $R_S$, increasing $V_S$. Since $V_{GS} = V_G - V_S$, if $V_G$ is fixed or slowly varying, an increase in $V_S$ will decrease $V_{GS}$. This decrease in $V_{GS}$ counteracts the initial increase in $I_D$, thus stabilizing the Q-point.

*   **Impact on Amplification:** While improving stability, the source resistor $R_S$ also reduces the effective transconductance ($g_m$). For AC signals, if $R_S$ is not bypassed, the effective transconductance is $g_m' = \frac{g_m}{1 + g_m R_S}$.

**(Reference: Boylested & Nashelsky, Section 13.4; Sedra & Smith, Section 5.4.1)**

## 3. Biasing Techniques for P-channel MOSFETs

Biasing p-channel MOSFETs (PMOS) follows similar principles, but the voltage polarities and current directions are reversed.

*   **Key Difference:** PMOS devices have a negative threshold voltage ($V_{TH} < 0$). For operation in the saturation region, $V_{GS}$ must be negative, and the condition is $V_{GS} < V_{TH}$. Equivalently, $V_{SG} > |V_{TH}|$.
*   **Drain Current Equation:** $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GS} - V_{TH})^2$. Since $V_{TH}$ is negative, $(V_{GS} - V_{TH})$ will be positive if $V_{GS}$ is more negative than $V_{TH}$.
*   **Voltage Polarities:** $V_{DD}$ is usually negative. Drain is at a lower potential than Source ($V_{SD} > 0$).

### 3.1 Fixed Biasing (Zero Bias for PMOS)

*   **Circuit:** The gate is connected to a fixed negative DC voltage ($V_{GG}$) through $R_G$. Source is connected to $V_{DD}$.

    ```
        VDD (Negative)
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    VGG --RG--   PMOS
    |   |   |
    ----|-----
        |
       Ground (or other reference)
    ```
    *   Let's assume Source is connected to $V_{DD}$.
    *   $V_{SG} = V_S - V_G = V_{DD} - V_{GG}$
    *   $V_{GS} = V_G - V_S = V_{GG} - V_{DD} = -(V_{DD} - V_{GG})$

*   **Analysis:**
    *   $V_{GS} = V_{GG}$ (assuming $V_{GG}$ is negative)
    *   $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GG} - V_{TH})^2$
    *   $V_{DS} = V_D - V_S = (V_{DD} - I_D R_D) - V_{DD} = -I_D R_D$

*   **Stability:** Poor, similar to NMOS fixed biasing.

### 3.2 Self-Biasing (Source Biasing for PMOS)

*   **Circuit:** A source resistor $R_S$ is connected between the source and ground. The gate is connected to a negative voltage $V_{GG}$ through $R_G$.

    ```
        VDD (Negative)
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    VGG --RG--   PMOS
    |   |   |
    ----|-----
        |
        RS
        |
       Ground
    ```

*   **Analysis:**
    *   $V_G = V_{GG}$ (negative)
    *   $V_S = I_D R_S$ (positive)
    *   $V_{GS} = V_G - V_S = V_{GG} - I_D R_S$
    *   Since $V_{GG}$ is negative and $I_D R_S$ is positive, $V_{GS}$ will be a negative voltage, which is what we need for PMOS.
    *   To ensure saturation: $V_{GS} < V_{TH}$ (where $V_{TH}$ is negative).
    *   Substitute $V_{GS}$ into the current equation:
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GG} - I_D R_S - V_{TH})^2$

    *   This is a quadratic equation in $I_D$ that needs to be solved.

*   **Stability:** Good, due to the negative feedback from $R_S$.

### 3.3 Voltage Divider Biasing for PMOS

*   **Circuit:** Voltage divider network $R_1, R_2$ for gate bias. Source resistor $R_S$ for stability. $V_{DD}$ is negative.

    ```
        VDD (Negative)
         |
         RD
         |
      +--+--+
      |  |  |
    D G S
    -----|-----
    |   |   |
    R1  |   RS
    |   |   |
    +---|---+
    |   |
    R2  |
    |   |
   Ground Source (Ground)
    ```

*   **Analysis:**
    *   **Step 1: Find Thevenin Equivalent at the Gate.**
        *   $V_{TH(gate)} = V_{DD} \frac{R_2}{R_1 + R_2}$ (This will be a negative voltage)
        *   $R_{TH(gate)} = \frac{R_1 R_2}{R_1 + R_2}$

    *   **Step 2: Analyze the circuit.**
        *   $V_G = V_{TH(gate)}$ (negative)
        *   $V_S = I_D R_S$ (positive)
        *   $V_{GS} = V_G - V_S = V_{TH(gate)} - I_D R_S$

    *   **Step 3: Solve for $I_D$.**
        $I_D = \frac{1}{2} k' \frac{W}{L} (V_{TH(gate)} - I_D R_S - V_{TH})^2$

    *   $V_{DS} = V_D - V_S = (V_{DD} - I_D R_D) - I_D R_S = V_{DD} - I_D (R_D + R_S)$

*   **Stability:** Excellent. This is the most preferred biasing technique for discrete PMOS amplifier circuits.

**(Reference: Bell, Section 7.5 for similar principles in BJT/FET)**

## 4. Stability Analysis

The stability of a biased circuit refers to how well the Q-point remains fixed despite variations in device parameters ($V_{TH}$, $k'$) and supply voltages.

*   **Stability Factor (S):** For MOSFETs, a formal stability factor can be defined, but conceptually, circuits with source resistance ($R_S$) generally offer better stability due to negative feedback.

*   **Effect of $R_S$:**
    *   An increase in $I_D$ leads to an increase in $V_S$.
    *   Since $V_{GS} = V_G - V_S$, a higher $V_S$ reduces $V_{GS}$.
    *   Reduced $V_{GS}$ leads to a decrease in $I_D$ (in the saturation region $I_D \propto V_{GS}^2$).
    *   This counteracts the initial increase in $I_D$, thus stabilizing the Q-point.

*   **Design for Stability:**
    *   Use voltage divider biasing or self-biasing with a reasonably large $R_S$.
    *   Ensure $V_{GS}$ is significantly larger than $V_{TH}$ to allow for variations. A common guideline is to set $V_{GS} \approx 1.5V_{TH}$ to $2V_{TH}$ (for NMOS). This makes the drain current less sensitive to small variations in $V_{GS}$.

**(Reference: Boylested & Nashelsky, Section 13.4; Sedra & Smith, Section 5.4.1)**

## 5. Choosing the Right Biasing Technique

| Biasing Technique          | NMOS Stability | PMOS Stability | Complexity | Common Usage                                    |
| :------------------------- | :------------- | :------------- | :--------- | :---------------------------------------------- |
| Fixed Biasing              | Poor           | Poor           | Low        | Rarely used                                     |
| Self-Biasing               | Moderate       | Moderate       | Medium     | Can be used, but voltage divider is preferred   |
| Voltage Divider Biasing    | Excellent      | Excellent      | High       | Preferred for discrete component circuits       |
| Drain-to-Gate Feedback     | Moderate       | Moderate       | Medium     | Common in ICs where component matching is good  |

**General Rule:** For discrete circuits, **voltage divider biasing** is the most robust and stable method. For integrated circuits, drain-to-gate feedback or variations of voltage divider biasing (using active loads) are common.

## 6. Practice Questions and Exercises

**Question 1:**
An NMOSFET with $V_{TH} = 2V$ and $k' \frac{W}{L} = 1 mA/V^2$ is biased using voltage divider biasing with $V_{DD} = 15V$, $R_1 = 100k\Omega$, $R_2 = 10k\Omega$, $R_D = 1k\Omega$, and $R_S = 2k\Omega$. Assume the MOSFET operates in the saturation region.
(a) Calculate the Thevenin equivalent voltage and resistance at the gate.
(b) Determine the quiescent values of $V_{GS}$, $I_D$, and $V_{DS}$.
(c) Verify that the MOSFET is in saturation.

**Answer 1:**
(a)
$V_{TH(gate)} = V_{DD} \frac{R_2}{R_1 + R_2} = 15V \times \frac{10k\Omega}{100k\Omega + 10k\Omega} = 15V \times \frac{10}{110} = 1.36V$
$R_{TH(gate)} = \frac{R_1 R_2}{R_1 + R_2} = \frac{100k\Omega \times 10k\Omega}{100k\Omega + 10k\Omega} = \frac{1000 \times 10^6}{110 \times 10^3} = 9.09k\Omega$

(b)
The saturation current equation is $I_D = \frac{1}{2} k' \frac{W}{L} (V_{GS} - V_{TH})^2$.
We have $V_{GS} = V_{TH(gate)} - I_D R_S = 1.36V - I_D (2k\Omega)$.
$I_D = \frac{1}{2} (1 mA/V^2) (1.36V - I_D (2k\Omega) - 2V)^2$
$I_D = 0.5 mA/V^2 ( -0.64V - I_D (2k\Omega) )^2$
$I_D = 0.5 \times 10^{-3} ( -0.64 - 2000 I_D )^2$  (converting mA to A, V to V, k to units)
$I_D = 0.5 \times 10^{-3} ( 0.64 + 2000 I_D )^2$

Solving this graphically or numerically:
Let's try some values of $I_D$ (in mA) and calculate $V_{GS}$ and $V_{TH(gate)} - I_D R_S$:
If $I_D = 0.2 mA$: $V_{GS} = 1.36V - 0.2mA \times 2k\Omega = 1.36V - 0.4V = 0.96V$.
$I_{D,calc} = 0.5 \times (0.96 - 2)^2 = 0.5 \times (-1.04)^2 = 0.5 \times 1.0816 = 0.54 mA$. (Too low)

If $I_D = 0.5 mA$: $V_{GS} = 1.36V - 0.5mA \times 2k\Omega = 1.36V - 1.0V = 0.36V$.
$I_{D,calc} = 0.5 \times (0.36 - 2)^2 = 0.5 \times (-1.64)^2 = 0.5 \times 2.6896 = 1.34 mA$. (Too high)

Let's use the quadratic solver on $I_D = 0.5 \times 10^{-3} ( 0.64 + 2000 I_D )^2$:
$I_D = 0.5 \times 10^{-3} (0.4096 + 2 \times 0.64 \times 2000 I_D + (2000 I_D)^2)$
$I_D = 0.2048 \times 10^{-3} + 0.64 I_D + 1.0 \times 10^3 I_D^2$
$1000 I_D^2 + 0.63936 I_D - 0.2048 \times 10^{-3} = 0$

Using quadratic formula $I_D = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$a = 1000$, $b = 0.63936$, $c = -0.2048 \times 10^{-3}$
$I_D = \frac{-0.63936 \pm \sqrt{0.63936^2 - 4(1000)(-0.2048 \times 10^{-3})}}{2000}$
$I_D = \frac{-0.63936 \pm \sqrt{0.40878 + 0.8192}}{2000}$
$I_D = \frac{-0.63936 \pm \sqrt{1.22798}}{2000}$
$I_D = \frac{-0.63936 \pm 1.10814}{2000}$

Two solutions:
$I_{D1} = \frac{1.10814 - 0.63936}{2000} = \frac{0.46878}{2000} = 0.234 mA$
$I_{D2} = \frac{-0.63936 - 1.10814}{2000} = \frac{-1.7475}{2000} < 0$ (Not physically possible)

So, $I_D = 0.234 mA$.
$V_{GS} = 1.36V - 0.234mA \times 2k\Omega = 1.36V - 0.468V = 0.892V$.
$V_{DS} = V_{DD} - I_D (R_D + R_S) = 15V - 0.234mA \times (1k\Omega + 2k\Omega) = 15V - 0.234mA \times 3k\Omega = 15V - 0.702V = 14.298V$.

(c)
Saturation condition: $V_{DS} \ge V_{GS} - V_{TH}$
$14.298V \ge 0.892V - 2V$
$14.298V \ge -1.108V$ (Condition is met, as expected for voltage divider bias where $V_{GS}$ is usually well above $V_{TH}$)

**Question 2:**
A PMOSFET with $V_{TH} = -1.5V$ and $k' \frac{W}{L} = 0.5 mA/V^2$ is to be biased in the saturation region. Design a voltage divider bias circuit with $V_{DD} = -15V$ such that $I_D = 0.5mA$ and $V_{DS} = -10V$. Choose $R_S = 1k\Omega$.

**Answer 2:**
For saturation, $V_{GS} < V_{TH}$ (i.e., $V_{GS}$ is more negative than -1.5V).
Also, $V_{DS} = V_D - V_S$. Since $V_{DD}$ is negative, $V_D$ will be negative.
$V_{DS} = V_{DD} - I_D(R_D + R_S)$ (assuming source resistance is not bypassed for DC)
$-10V = -15V - 0.5mA \times (R_D + 1k\Omega)$
$-10V = -15V - 0.5 \times 10^{-3} (R_D + 1000)$
$5V = -0.5 \times 10^{-3} (R_D + 1000)$
$R_D + 1000 = \frac{5V}{-0.5 \times 10^{-3}} = -10000 \Omega$
This leads to a negative $R_D$, which is not possible. This indicates the assumption about $V_{DS}$ polarity or the relationship with $V_{DD}$ might need careful interpretation for PMOS.

Let's re-evaluate $V_{DS}$ for PMOS. $V_{DS} = V_D - V_S$.
$V_D = V_{DD} - I_D R_D$.
$V_S = I_D R_S$.
$V_{DS} = V_{DD} - I_D R_D - I_D R_S = V_{DD} - I_D (R_D + R_S)$.
Given $V_{DD} = -15V$, $I_D = 0.5mA$, $R_S = 1k\Omega$, $V_{DS} = -10V$.
$-10V = -15V - 0.5mA \times (R_D + 1k\Omega)$
$5V = -0.5mA \times (R_D + 1k\Omega)$
$R_D + 1k\Omega = \frac{5V}{-0.5mA} = -10k\Omega$.
This still yields a negative $R_D$.

Let's check the saturation condition $V_{SG} > |V_{TH}|$.
We need to find $V_{GS}$.
$I_D = \frac{1}{2} k' \frac{W}{L} (V_{GS} - V_{TH})^2$
$0.5mA = \frac{1}{2} (0.5 mA/V^2) (V_{GS} - (-1.5V))^2$
$0.5 = 0.25 (V_{GS} + 1.5)^2$
$(V_{GS} + 1.5)^2 = \frac{0.5}{0.25} = 2$
$V_{GS} + 1.5 = \pm \sqrt{2} = \pm 1.414V$
$V_{GS} = -1.5 \pm 1.414V$

Two possibilities for $V_{GS}$:
1. $V_{GS} = -1.5 + 1.414 = -0.086V$.
   For saturation, we need $V_{GS} < V_{TH}$ (-1.5V). This is not satisfied.
2. $V_{GS} = -1.5 - 1.414 = -2.914V$.
   This satisfies $V_{GS} < V_{TH}$ (-1.5V). So, $V_{GS} = -2.914V$.

Now we can find $R_1$ and $R_2$.
$V_{GS} = V_G - V_S$
$V_S = I_D R_S = 0.5mA \times 1k\Omega = 0.5V$.
$V_G = V_{GS} + V_S = -2.914V + 0.5V = -2.414V$.

Using voltage divider relation: $V_G = V_{TH(gate)} = V_{DD} \frac{R_2}{R_1 + R_2}$.
$-2.414V = -15V \frac{R_2}{R_1 + R_2}$
$\frac{R_2}{R_1 + R_2} = \frac{-2.414}{-15} = 0.1609$
$R_2 = 0.1609 (R_1 + R_2)$
$R_2 = 0.1609 R_1 + 0.1609 R_2$
$0.8391 R_2 = 0.1609 R_1$
$R_2 = \frac{0.1609}{0.8391} R_1 \approx 0.1917 R_1$.

We also need to consider $R_{TH(gate)}$ for stability, typically $R_{TH(gate)} \ll \beta R_S$ for BJTs. For FETs, the input impedance is very high, so $R_{TH(gate)}$ primarily affects the gate voltage division. A common choice is to make $R_1$ and $R_2$ in the range of tens to hundreds of k$\Omega$.
Let's pick $R_1 = 100k\Omega$.
Then $R_2 = 0.1917 \times 100k\Omega = 19.17k\Omega$.
So, $R_1 = 100k\Omega$, $R_2 = 19.17k\Omega$.

Now let's verify $V_{DS}$:
$V_D = V_{DD} - I_D R_D = -15V - 0.5mA \times R_D$.
$V_S = 0.5V$.
$V_{DS} = V_D - V_S = (-15V - 0.5mA \times R_D) - 0.5V = -15.5V - 0.5mA \times R_D$.
We need $V_{DS} = -10V$.
$-10V = -15.5V - 0.5mA \times R_D$
$5.5V = -0.5mA \times R_D$
$R_D = \frac{5.5V}{-0.5mA} = -11k\Omega$.

Again, we have a problem with the desired $V_{DS}$. This suggests that the combination of $V_{DD}, V_{TH}, k', R_S$ and the desired $I_D, V_{DS}$ might not be achievable with a simple positive $R_D$. Let's re-check the problem statement or typical design constraints.

The goal is to select components. If $V_{DS}$ is fixed, and $R_D$ is a design choice, then the calculation for $R_D$ would be:
Let's assume we choose $R_D = 10k\Omega$.
Then $V_{DS} = -15V - 0.5mA \times (10k\Omega + 1k\Omega) = -15V - 0.5mA \times 11k\Omega = -15V - 5.5V = -20.5V$.
This $V_{DS}$ is more negative than the target $-10V$. This means $R_D$ needs to be smaller or $R_S$ needs to be smaller.

Let's assume the question implied to find component values to achieve $I_D = 0.5mA$ and *operate in saturation*. The $V_{DS} = -10V$ might be a specific constraint that conflicts with other values.

Let's focus on achieving $I_D = 0.5mA$ and ensuring saturation with $V_{GS} = -2.914V$, $V_S = 0.5V$, $V_G = -2.414V$, $R_S = 1k\Omega$.
$V_G = V_{DD} \frac{R_2}{R_1 + R_2} = -15V \frac{R_2}{R_1 + R_2} = -2.414V$
This gives the ratio $R_2/R_1 = 0.1917$. Let $R_1 = 100k\Omega$, $R_2 = 19.17k\Omega$.

Now let's choose $R_D$ to place the Q-point somewhere reasonable in saturation.
If we choose $R_D = 5k\Omega$, then $V_{DS} = -15V - 0.5mA \times (5k\Omega + 1k\Omega) = -15V - 0.5mA \times 6k\Omega = -15V - 3V = -18V$.
Saturation check: $V_{GS} = -2.914V$, $V_{TH} = -1.5V$. Condition $V_{GS} < V_{TH}$ is met.
$V_{DS} = -18V$. We need to ensure $V_{DS}$ is not too low, making the MOSFET go into triode. The boundary is $V_{DS} = V_{GS} - V_{TH}$.
$V_{GS} - V_{TH} = -2.914V - (-1.5V) = -1.414V$.
So we need $V_{DS} < -1.414V$ for saturation. Our $V_{DS} = -18V$ satisfies this.

**So, a possible design is:**
$R_1 = 100k\Omega$, $R_2 = 19.17k\Omega$, $R_S = 1k\Omega$, $R_D = 5k\Omega$.
This yields $I_D = 0.5mA$, $V_{GS} = -2.914V$, $V_{DS} = -18V$.

The original question's constraint of $V_{DS} = -10V$ might require a different $V_{DD}$ or $R_S$.

## 7. Important Points to Remember

*   **MOSFET Operation Regions:** Understand the conditions for cutoff, triode (linear), and saturation regions ($V_{GS}$ and $V_{DS}$ relationships with $V_{TH}$).
*   **Q-point:** The stable DC operating point required for amplification.
*   **Biasing Goals:** Establish a stable $V_{GS}$ to set $I_D$ in saturation, and ensure adequate $V_{DS}$ for linear amplification.
*   **Stability:** Voltage divider biasing with a source resistor ($R_S$) provides the best stability for discrete circuits.
*   **PMOS vs. NMOS:** Pay close attention to voltage polarities and the sign of $V_{TH}$. For PMOS, $V_{TH}$ is negative, and $V_{GS}$ must be more negative than $V_{TH}$.
*   **Quadratic Equation:** Biasing calculations often involve solving quadratic equations for $I_D$. Use graphical methods or a calculator/software for practical solutions.
*   **Saturation Condition:** Always verify $V_{DS} \ge V_{GS} - V_{TH}$ (for NMOS) or $V_{SD} \ge V_{SG} - |V_{TH}|$ (for PMOS) to confirm operation in the saturation region.

This module provides a foundational understanding of how to set up MOSFETs for amplification. These concepts are critical for Course Outcome 3 (Design and analyze MOSFET amplifier circuits). By mastering these biasing techniques, you'll be able to design circuits that function reliably and effectively.
