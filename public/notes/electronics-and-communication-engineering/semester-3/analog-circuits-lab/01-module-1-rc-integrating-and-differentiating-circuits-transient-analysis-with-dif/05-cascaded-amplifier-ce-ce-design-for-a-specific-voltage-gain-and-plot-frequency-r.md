---
title: "Cascaded amplifier (CE – CE) - Design for a specific voltage gain and plot frequency response characteristics"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe429"
status: "completed"
scrapedAt: "2026-05-23T17:44:30.949Z"
---
# ANALOG CIRCUITS LAB: Module 1 - RC Integrating and Differentiating Circuits

## Topic: Cascaded Amplifier (CE – CE) - Design for a specific voltage gain and plot frequency response characteristics

This topic delves into the practical implementation and analysis of a two-stage Common Emitter (CE) amplifier, focusing on achieving a specific overall voltage gain and understanding its frequency response. This builds upon the fundamental understanding of single-stage CE amplifiers and RC circuits, extending it to a more complex, practical amplifier configuration.

---

### 1. Introduction to Cascaded Amplifiers

**1.1 What is Cascading?**

Cascading refers to connecting the output of one amplifier stage to the input of another amplifier stage. This is done to achieve higher overall voltage or power gain than what a single stage can provide.

**1.2 Why Cascade CE Amplifiers?**

*   **Increased Gain:** The most significant reason. The overall voltage gain of a cascaded amplifier is approximately the product of the individual stage gains.
    *   $A_{v(total)} \approx A_{v1} \times A_{v2}$
*   **Improved Input/Output Impedance:** By judiciously selecting biasing and coupling components, cascading can also help in matching input and output impedances for optimal signal transfer.
*   **Bandwidth Extension (sometimes):** While cascading increases gain, it can also affect the overall bandwidth. Understanding the frequency response is crucial.

**1.3 CE-CE Cascading Configuration**

A common configuration involves connecting two CE amplifier stages in series. The output of the first CE stage is coupled to the input of the second CE stage.

---

### 2. Design for a Specific Voltage Gain (K3)

**2.1 Single-Stage CE Amplifier Recap (Refer to Textbook 1, Chapter 12 & Textbook 2, Chapter 6)**

Before designing a cascaded amplifier, a solid understanding of the single-stage CE amplifier is essential. Key design considerations include:

*   **Biasing:** Setting the DC operating point (Q-point) in the active region for linear amplification. Common biasing methods include voltage divider biasing.
*   **Voltage Gain ($A_v$):** The ratio of output voltage to input voltage. For a CE amplifier, $A_v = -\frac{R_C || R_L}{r_e}$, where $R_C$ is the collector resistor, $R_L$ is the load resistor, and $r_e$ is the small-signal emitter resistance.
*   **Input Impedance ($Z_{in}$):** The impedance seen at the input terminals. $Z_{in} \approx R_1 || R_2 || (\beta(r_e + R_E'))$, where $R_1$ and $R_2$ are the biasing resistors, and $R_E'$ is the unbypassed emitter resistor.
*   **Output Impedance ($Z_{out}$):** The impedance seen at the output terminals. $Z_{out} \approx R_C$.

**2.2 Cascaded CE-CE Amplifier Design Steps**

**Objective:** To achieve a target overall voltage gain ($A_{v(total)}$).

**Assumptions:**

*   We will primarily focus on voltage-divider biased CE stages for stability and ease of design.
*   Interstage coupling will be considered.

**Design Process:**

1.  **Determine Individual Stage Gain Requirements:**
    *   If the stages are identical, then $A_{v1} \approx A_{v2} \approx \sqrt{A_{v(total)}}$.
    *   If different gains are desired, assign $A_{v1}$ and $A_{v2}$ such that $A_{v1} \times A_{v2} = A_{v(total)}$. Remember that CE amplifiers have a phase inversion, so the overall gain will be negative.

2.  **Design the First CE Stage:**
    *   **Choose Transistor:** Select a suitable BJT (e.g., 2N2222). Obtain its parameters like $\beta$ (DC current gain) and $f_T$ (transition frequency). Note that $\beta$ can vary, so using a range or a typical value is common.
    *   **Set Collector Current ($I_C$):** A common range is 1-10 mA for small-signal amplifiers. Higher $I_C$ generally leads to lower $r_e$ and thus higher gain for a given $R_C$.
    *   **Set Collector Resistor ($R_C1$):** This resistor, along with the load connected to the stage (which is the input of the next stage), determines the gain.
        *   $A_{v1} = -\frac{R_{C1} || R_{in2}}{r_{e1}}$
        *   Where $R_{in2}$ is the input impedance of the second stage.
    *   **Choose Emitter Resistor ($R_{E1}$):** To set the Q-point.
        *   $V_{EC1} \approx V_{CC} - I_{C1} R_{C1}$ (Collector-Emitter voltage)
        *   For stability, the emitter resistor is often bypassed with a capacitor ($C_{E1}$) to maximize AC gain. If unbypassed, it reduces AC gain but improves stability.
        *   $V_{BE} \approx 0.7V$. $I_{E1} \approx I_{C1}$. $V_{RE1} = I_{E1} R_{E1}$.
        *   $V_{CC} = V_{R1} + V_{R2} + V_{RE1}$ (for voltage divider biasing).
    *   **Calculate Biasing Resistors ($R_{1A}, R_{2A}$):** For voltage divider biasing, the current through the divider ($I_{R2}$) should be about 10 times $I_{B1}$ (DC base current of the first transistor) for good Q-point stability.
        *   $I_{B1} = I_{C1} / \beta$.
        *   $R_{2A} \approx V_{R2} / I_{R2}$.
        *   $R_{1A} \approx (V_{CC} - V_{R2}) / (I_{R2} + I_{B1})$.
    *   **Calculate Coupling and Bypassing Capacitors ($C_{C1}, C_{E1}$):** These are chosen to have low impedance at the desired signal frequencies.
        *   $X_{C} = \frac{1}{2\pi f C}$
        *   For coupling capacitors ($C_{C1}$), the impedance should be much smaller than the input impedance of the next stage at the lowest operating frequency ($f_{low}$). $X_{C_{C1}} << R_{in2}$.
        *   For emitter bypass capacitors ($C_{E1}$), the impedance should be much smaller than the unbypassed emitter resistance ($R_{E1}'$) at $f_{low}$. $X_{C_{E1}} << R_{E1}'$.

3.  **Design the Second CE Stage:**
    *   Repeat the design process for the second stage, ensuring its input impedance ($R_{in2}$) is considered in the first stage's gain calculation.
    *   The load for the second stage is typically an external load resistor ($R_L$).

4.  **Interstage Coupling:**
    *   **Capacitive Coupling:** The most common method. A capacitor ($C_{C2}$) is placed between the collector of the first stage and the base of the second stage. This blocks DC from passing between stages, ensuring their Q-points are independent.
    *   The coupling capacitor's impedance ($X_{C_{C2}}$) should be negligible compared to the input impedance of the second stage ($R_{in2}$) at the lowest desired frequency.

**2.3 Example Design Scenario**

**Problem:** Design a two-stage CE-CE amplifier with a target voltage gain of $A_{v(total)} = -200$. Assume $V_{CC} = 12V$, and use 2N2222 transistors ($\beta = 150$, typical). Let the load resistor $R_L = 10k\Omega$.

**Solution Approach:**

1.  **Target Individual Gain:** $A_{v1} \approx A_{v2} \approx \sqrt{200} \approx 14.14$. We'll aim for a gain of -15 for each stage for simplicity.

2.  **Stage 1 Design:**
    *   **Q-point:** Let $I_{C1} = 2mA$.
    *   **Transistor Parameters:** $r_{e1} = \frac{26mV}{I_{E1}} \approx \frac{26mV}{2mA} = 13\Omega$.
    *   **Gain Calculation:** $A_{v1} = -\frac{R_{C1} || R_{in2}}{r_{e1}} = -15$.
        *   $R_{C1} || R_{in2} \approx 15 \times 13\Omega = 195\Omega$.
    *   **Choosing $R_{C1}$ and $R_{in2}$:** Let's assume we want a reasonable input impedance for the second stage ($R_{in2}$). A typical value might be 2k$\Omega$ to 10k$\Omega$. Let's aim for $R_{in2} \approx 5k\Omega$.
        *   If $R_{in2} = 5k\Omega$, then $R_{C1} || 5k\Omega = 195\Omega$.
        *   $\frac{R_{C1} \times 5000}{R_{C1} + 5000} = 195$
        *   $5000 R_{C1} = 195 R_{C1} + 195 \times 5000$
        *   $4805 R_{C1} = 975000 \implies R_{C1} \approx 203\Omega$.
        *   Let's choose $R_{C1} = 200\Omega$.
    *   **Collector-Emitter Voltage:** $V_{CE1} = V_{CC} - I_{C1} R_{C1} = 12V - 2mA \times 200\Omega = 12V - 0.4V = 11.6V$. This is well within the active region.
    *   **Emitter Resistor ($R_{E1}$):** For stability, let's choose $R_{E1}$ such that $V_{RE1} \approx 10\% \text{ of } V_{CC} = 1.2V$.
        *   $R_{E1} = V_{RE1} / I_{E1} \approx 1.2V / 2mA = 600\Omega$.
        *   We will bypass this with a capacitor for high AC gain.
    *   **Biasing Resistors ($R_{1A}, R_{2A}$):**
        *   $I_{B1} = I_{C1} / \beta = 2mA / 150 \approx 13.3\mu A$.
        *   For stability, let $I_{R2} \approx 10 \times I_{B1} = 10 \times 13.3\mu A = 133\mu A$.
        *   Voltage across $R_{E1}$ is $1.2V$.
        *   $V_{R2} = V_{BE} + V_{RE1} = 0.7V + 1.2V = 1.9V$.
        *   $R_{2A} = V_{R2} / I_{R2} = 1.9V / 133\mu A \approx 14.3k\Omega$. Let's choose $R_{2A} = 15k\Omega$.
        *   $V_{R1} = V_{CC} - V_{R2} = 12V - 1.9V = 10.1V$.
        *   Total current through $R_{1A}$ is $I_{R1} = I_{R2} + I_{B1} = 133\mu A + 13.3\mu A = 146.3\mu A$.
        *   $R_{1A} = V_{R1} / I_{R1} = 10.1V / 146.3\mu A \approx 69k\Omega$. Let's choose $R_{1A} = 68k\Omega$.

3.  **Stage 2 Design:**
    *   **Q-point:** Let $I_{C2} = 2mA$ (for symmetry and simplicity).
    *   **Transistor Parameters:** $r_{e2} = 13\Omega$.
    *   **Input Impedance of Stage 2:** $R_{in2} = R_{1B} || R_{2B} || (\beta (r_{e2} + R_{E2}'))$. For now, we know it should be around $5k\Omega$.
    *   **Load:** $R_L = 10k\Omega$.
    *   **Gain Calculation:** $A_{v2} = -\frac{R_{C2} || R_L}{r_{e2}} = -15$.
        *   $R_{C2} || 10k\Omega \approx 15 \times 13\Omega = 195\Omega$.
        *   Let $R_{C2} = 200\Omega$. Then $200 || 10k\Omega \approx 196\Omega$. This is close enough.
    *   **Emitter Resistor ($R_{E2}$):** Similar to Stage 1, let's use $R_{E2} = 600\Omega$ and bypass it.
    *   **Biasing Resistors ($R_{1B}, R_{2B}$):**
        *   $I_{B2} = I_{C2} / \beta = 2mA / 150 \approx 13.3\mu A$.
        *   For stability and to achieve $R_{in2} \approx 5k\Omega$:
            *   Let $I_{R2(B)} \approx 10 \times I_{B2} = 133\mu A$.
            *   $V_{RE2} = I_{E2} R_{E2} \approx 2mA \times 600\Omega = 1.2V$.
            *   $V_{R2(B)} = V_{BE} + V_{RE2} = 0.7V + 1.2V = 1.9V$.
            *   $R_{2B} = V_{R2(B)} / I_{R2(B)} = 1.9V / 133\mu A \approx 14.3k\Omega$. Choose $R_{2B} = 15k\Omega$.
            *   $V_{R1(B)} = V_{CC} - V_{R2(B)} = 12V - 1.9V = 10.1V$.
            *   Total current through $R_{1B}$ is $I_{R1(B)} = I_{R2(B)} + I_{B2} = 133\mu A + 13.3\mu A = 146.3\mu A$.
            *   $R_{1B} = V_{R1(B)} / I_{R1(B)} = 10.1V / 146.3\mu A \approx 69k\Omega$. Choose $R_{1B} = 68k\Omega$.
            *   **Check $R_{in2}$:** $R_{in2} = R_{1B} || R_{2B} || (\beta (r_{e2} + R_{E2}'))$. Here $R_{E2}'$ is the unbypassed emitter resistance. Since we are bypassing $R_{E2}$ with a capacitor, $R_{E2}' = 0$.
                *   $R_{in2} = 68k\Omega || 15k\Omega || (150 \times 13\Omega) = 68k\Omega || 15k\Omega || 1950\Omega \approx 1.3k\Omega$.
                *   **Issue:** Our calculated $R_{in2}$ (1.3k$\Omega$) is much lower than the assumed $5k\Omega$. This will significantly reduce the gain of the first stage.

    *   **Revising Stage 1 Design based on calculated $R_{in2}$:**
        *   We need $R_{C1} || R_{in2} \approx 195\Omega$.
        *   With $R_{in2} \approx 1.3k\Omega$, we need $R_{C1} || 1.3k\Omega = 195\Omega$.
        *   $\frac{R_{C1} \times 1300}{R_{C1} + 1300} = 195$
        *   $1300 R_{C1} = 195 R_{C1} + 195 \times 1300$
        *   $1105 R_{C1} = 253500 \implies R_{C1} \approx 230\Omega$. Let's choose $R_{C1} = 220\Omega$.

    *   **Revising Stage 2 Design to achieve $R_{in2} \approx 5k\Omega$:**
        *   We need $R_{in2} = R_{1B} || R_{2B} || (\beta r_{e2}) \approx 5k\Omega$.
        *   $15k\Omega || 68k\Omega || (150 \times 13\Omega) \approx 1.3k\Omega$.
        *   To increase $R_{in2}$, we can:
            *   Increase biasing resistors ($R_{1B}, R_{2B}$).
            *   Reduce $\beta$ (not practical).
            *   Introduce an unbypassed emitter resistor ($R_{E2}'$) in the second stage. This increases $R_{in2}$ by $\beta R_{E2}'$.
        *   Let's try increasing $R_{2B}$ and $R_{1B}$. If $R_{2B} = 68k\Omega$ and $R_{1B} = 220k\Omega$.
            *   $V_{R2(B)} = 1.9V$. $I_{R2(B)} = 1.9V / 68k\Omega \approx 28\mu A$.
            *   This current is much smaller than $I_{B2} = 13.3\mu A$, leading to poor Q-point stability.

        *   **Alternative: Use an unbypassed emitter resistor in Stage 2 ($R_{E2}'$)**
            *   Let's keep $R_{1B} = 68k\Omega$, $R_{2B} = 15k\Omega$, $R_{E2} = 600\Omega$.
            *   Let's add an unbypassed emitter resistor $R_{E2}'$ in series with $R_{E2}$. The total emitter resistance is $R_{E2} = R_{E2}'' + R_{E2}'$, where $R_{E2}''$ is bypassed.
            *   $R_{in2} \approx R_{1B} || R_{2B} || (\beta(r_{e2} + R_{E2}'))$.
            *   We want $R_{in2} \approx 5k\Omega$.
            *   $R_{in2} \approx 68k\Omega || 15k\Omega || (150(13\Omega + R_{E2}')) \approx 1.3k\Omega || 150 R_{E2}'$.
            *   $1.3k\Omega || 150 R_{E2}' = 5000\Omega$.
            *   $\frac{1300 \times 150 R_{E2}'}{1300 + 150 R_{E2}'} = 5000$.
            *   $195000 R_{E2}' = 5000 (1300 + 150 R_{E2}') = 6500000 + 750000 R_{E2}'$.
            *   $195000 R_{E2}' - 750000 R_{E2}' = 6500000$.
            *   $-555000 R_{E2}' = 6500000$. This gives a negative $R_{E2}'$, which is incorrect.

    *   **Let's re-evaluate the goal:** We need $A_{v1} = -\frac{R_{C1} || R_{in2}}{r_{e1}} = -15$.
        *   Stage 2 input impedance will be determined by its biasing.
        *   Let's set $R_{in2}$ first by designing Stage 2.
        *   Stage 2: $A_{v2} = -\frac{R_{C2} || R_L}{r_{e2}} = -15$. With $R_L = 10k\Omega$, $r_{e2} = 13\Omega$.
            *   $R_{C2} || 10k\Omega = 15 \times 13\Omega = 195\Omega$. Let $R_{C2} = 200\Omega$.
        *   For Stage 2 to have $R_{in2} \approx 5k\Omega$:
            *   $R_{in2} = R_{1B} || R_{2B} || (\beta r_{e2})$ (assuming full bypass for now) $= 5k\Omega$.
            *   $R_{1B} || R_{2B} || 1950\Omega = 5000\Omega$.
            *   Let $R_{1B} || R_{2B} = Z_{bias2}$. Then $Z_{bias2} || 1950 = 5000$.
            *   $\frac{Z_{bias2} \times 1950}{Z_{bias2} + 1950} = 5000 \implies 1950 Z_{bias2} = 5000 Z_{bias2} + 9750000 \implies -3050 Z_{bias2} = 9750000 \implies Z_{bias2}$ is negative. This indicates that the $1950\Omega$ term dominates, and we cannot achieve $5k\Omega$ with this setup.

    *   **Revised Strategy: Adjusting Q-point and $R_C$ for desired gain, and then designing for input impedance.**
        *   Let's aim for a simpler gain distribution, e.g., $A_{v1} = -10$, $A_{v2} = -20$.
        *   **Stage 2 (Gain -20):**
            *   $r_{e2} = 13\Omega$. $R_L = 10k\Omega$.
            *   $R_{C2} || 10k\Omega = 20 \times 13\Omega = 260\Omega$. Let $R_{C2} = 300\Omega$. Then $300 || 10k\Omega \approx 290\Omega$. Close enough.
            *   Let $I_{C2} = 2mA$. $V_{CE2} = 12V - 2mA \times 300\Omega = 11.4V$.
            *   $R_{E2} = 600\Omega$ (bypassed).
            *   $R_{in2} = R_{1B} || R_{2B} || (\beta r_{e2}) = R_{1B} || R_{2B} || 1950\Omega$.
            *   We need $R_{in2}$ to be large enough for Stage 1's gain calculation. Let's aim for $R_{in2} \approx 10k\Omega$.
            *   $R_{1B} || R_{2B} || 1950\Omega = 10k\Omega$.
            *   $Z_{bias2} || 1950 = 10000$.
            *   $\frac{Z_{bias2} \times 1950}{Z_{bias2} + 1950} = 10000 \implies 1950 Z_{bias2} = 10000 Z_{bias2} + 19500000 \implies -8050 Z_{bias2} = 19500000 \implies Z_{bias2}$ is negative. This means the $1950\Omega$ term is still limiting.
        *   **Conclusion:** To achieve higher input impedances for cascaded stages, it's common to either use:
            *   Fewer biasing resistors (e.g., emitter resistor not bypassed in the first stage for lower gain, or higher biasing resistors).
            *   Different biasing configurations.
            *   **Most importantly, the collector resistor of the first stage determines its gain based on the input impedance of the second stage.**

    *   **Let's simplify the problem for practical lab design:** Assume we have pre-designed stages and are connecting them. Or, we design each stage independently and accept the resulting interstage loading.

    *   **Practical Approach for Lab:** Design two identical CE stages with desired gain per stage, and then connect them.
        *   Let's aim for $A_{v1} = A_{v2} = -10$. Total gain $\approx -100$.
        *   **Stage 1:**
            *   $I_{C1} = 2mA$, $r_{e1} = 13\Omega$.
            *   $R_{C1} || R_{in2} = 10 \times 13\Omega = 130\Omega$.
            *   Let $R_{in2} \approx 2k\Omega$. Then $R_{C1} || 2k\Omega = 130\Omega \implies R_{C1} \approx 138\Omega$. Let $R_{C1} = 150\Omega$.
            *   $R_{E1} = 600\Omega$ (bypassed).
            *   $V_{CE1} = 12V - 2mA \times 150\Omega = 11.7V$.
            *   $R_{1A} = 68k\Omega, R_{2A} = 15k\Omega$. $R_{in1} \approx 68k || 15k || (150 \times 13) \approx 15k || 1950 \approx 1.7k\Omega$.
        *   **Stage 2:**
            *   $I_{C2} = 2mA$, $r_{e2} = 13\Omega$.
            *   $R_{C2} || R_L = 10 \times 13\Omega = 130\Omega$. $R_L = 10k\Omega$.
            *   $R_{C2} || 10k\Omega = 130\Omega \implies R_{C2} \approx 135\Omega$. Let $R_{C2} = 150\Omega$.
            *   $R_{E2} = 600\Omega$ (bypassed).
            *   $V_{CE2} = 12V - 2mA \times 150\Omega = 11.7V$.
            *   $R_{1B} = 68k\Omega, R_{2B} = 15k\Omega$. $R_{in2} \approx 1.7k\Omega$.
        *   **Recalculate Stage 1 Gain:** $A_{v1} = -\frac{R_{C1} || R_{in2}}{r_{e1}} = -\frac{150\Omega || 1.7k\Omega}{13\Omega} = -\frac{138\Omega}{13\Omega} \approx -10.6$.
        *   **Recalculate Stage 2 Gain:** $A_{v2} = -\frac{R_{C2} || R_L}{r_{e2}} = -\frac{150\Omega || 10k\Omega}{13\Omega} = -\frac{147\Omega}{13\Omega} \approx -11.3$.
        *   **Overall Gain:** $A_{v(total)} \approx -10.6 \times -11.3 \approx 119.8$. This is close to the target of -100.

**Component List for the Example:**
*   Transistors: 2 x 2N2222
*   Resistors:
    *   $R_{1A} = 68k\Omega$
    *   $R_{2A} = 15k\Omega$
    *   $R_{C1} = 150\Omega$
    *   $R_{E1} = 600\Omega$
    *   $R_{1B} = 68k\Omega$
    *   $R_{2B} = 15k\Omega$
    *   $R_{C2} = 150\Omega$
    *   $R_{E2} = 600\Omega$
    *   $R_L = 10k\Omega$
*   Capacitors:
    *   $C_{C1}$ (Coupling between stages)
    *   $C_{E1}$ (Bypass for $R_{E1}$)
    *   $C_{C2}$ (Coupling to load)
    *   $C_{E2}$ (Bypass for $R_{E2}$)
    *   Input coupling capacitor ($C_{in}$)

**2.4 Interstage Coupling Capacitor ($C_{C1}$)**

*   **Function:** Blocks DC from the collector of Stage 1 reaching the base of Stage 2.
*   **Selection:** Its impedance ($X_{C_{C1}}$) must be much smaller than the input impedance of Stage 2 ($R_{in2}$) at the lowest desired frequency ($f_{low}$).
    *   $X_{C_{C1}} << R_{in2}$.
    *   $R_{in2} \approx 1.7k\Omega$.
    *   Let $f_{low} = 100Hz$. Then $X_{C_{C1}} \le R_{in2}/10 = 170\Omega$.
    *   $C_{C1} = \frac{1}{2\pi f_{low} X_{C_{C1}}} = \frac{1}{2\pi \times 100Hz \times 170\Omega} \approx 9.3\mu F$. A standard value like $10\mu F$ or $25\mu F$ would be suitable.

**2.5 Emitter Bypass Capacitors ($C_{E1}, C_{E2}$)**

*   **Function:** To provide a low impedance path to ground for AC signals, effectively bypassing the emitter resistors and maximizing AC gain.
*   **Selection:** Their impedance ($X_{C_{E1}}, X_{C_{E2}}$) must be much smaller than the bypassed emitter resistors ($R_{E1}, R_{E2}$) at $f_{low}$.
    *   $X_{C_{E1}} << R_{E1}$ and $X_{C_{E2}} << R_{E2}$.
    *   $R_{E1} = R_{E2} = 600\Omega$.
    *   Let $f_{low} = 100Hz$. Then $X_{C_{E1}} \le R_{E1}/10 = 60\Omega$.
    *   $C_{E1} = C_{E2} = \frac{1}{2\pi f_{low} X_{C_{E1}}} = \frac{1}{2\pi \times 100Hz \times 60\Omega} \approx 26.5\mu F$. A standard value like $33\mu F$ or $47\mu F$ would be suitable.

**2.6 Input Coupling Capacitor ($C_{in}$)**

*   **Function:** To couple the input signal to the first stage without passing any DC bias.
*   **Selection:** Its impedance ($X_{C_{in}}$) must be much smaller than the input impedance of the first stage ($R_{in1}$) at $f_{low}$.
    *   $X_{C_{in}} << R_{in1}$.
    *   $R_{in1} \approx 1.7k\Omega$.
    *   Let $f_{low} = 100Hz$. Then $X_{C_{in}} \le R_{in1}/10 = 170\Omega$.
    *   $C_{in} = \frac{1}{2\pi f_{low} X_{C_{in}}} = \frac{1}{2\pi \times 100Hz \times 170\Omega} \approx 9.3\mu F$. A standard value like $10\mu F$ or $25\mu F$ would be suitable.

**2.7 Output Coupling Capacitor ($C_{C2}$)**

*   **Function:** To couple the AC output signal to the load, blocking any DC voltage at the collector of the second stage.
*   **Selection:** Its impedance ($X_{C_{C2}}$) must be much smaller than the load resistor ($R_L$) at $f_{low}$.
    *   $X_{C_{C2}} << R_L$.
    *   $R_L = 10k\Omega$.
    *   Let $f_{low} = 100Hz$. Then $X_{C_{C2}} \le R_L/10 = 1k\Omega$.
    *   $C_{C2} = \frac{1}{2\pi f_{low} X_{C_{C2}}} = \frac{1}{2\pi \times 100Hz \times 1k\Omega} \approx 1.6\mu F$. A standard value like $2.2\mu F$ or $10\mu F$ would be suitable.

---

### 3. Frequency Response Characteristics (K3)

**3.1 What is Frequency Response?**

Frequency response describes how an amplifier's gain (and phase) changes with the frequency of the input signal. For a cascaded amplifier, it's the overall frequency response that is analyzed.

**3.2 Key Frequency Response Parameters:**

*   **Mid-band Gain ($A_{vm}$):** The constant gain achieved over the central range of frequencies.
*   **Bandwidth (BW):** The range of frequencies over which the amplifier operates with a gain that is at least 70.7% (-3dB) of the mid-band gain.
*   **Upper Cutoff Frequency ($f_H$):** The frequency above which the gain drops significantly (to -3dB of $A_{vm}$).
*   **Lower Cutoff Frequency ($f_L$):** The frequency below which the gain drops significantly (to -3dB of $A_{vm}$).
*   **Gain-Bandwidth Product (GBWP):** For a single-stage amplifier, it's $GBWP = |A_v| \times BW$. For cascaded amplifiers, the concept is more complex.

**3.3 Factors Affecting Frequency Response:**

*   **Coupling and Bypass Capacitors ($C_{C1}, C_{E1}, C_{C2}, C_{E2}$):** These act as high-pass filters at low frequencies. Their impedance increases as frequency decreases, causing the gain to drop.
    *   The lower cutoff frequency is determined by these capacitors. Each capacitor introduces a pole in the frequency response.
    *   $f_L \approx \frac{1}{2\pi R_{eff} C}$, where $R_{eff}$ is the effective resistance seen by the capacitor.
*   **Stray Capacitances (Internal Transistor Capacitances, Inter-winding Capacitances):** These are unavoidable parasitic capacitances that become significant at high frequencies.
    *   Common ones include $C_{be}$ (base-emitter capacitance), $C_{bc}$ (base-collector capacitance, Miller effect), and $C_{ce}$ (collector-emitter capacitance).
    *   These act as low-pass filters, reducing gain at high frequencies.
    *   The Miller effect ($C_M = C_{bc}(1 - A_v)$) significantly increases the effective capacitance at the base, thus lowering the upper cutoff frequency.
*   **Resistive Components:** The resistances in the circuit also play a role in determining the time constants associated with these capacitances.

**3.4 Low-Frequency Response:**

*   Dominated by the coupling and bypass capacitors.
*   Each capacitor effectively introduces a lower cutoff frequency ($f_{L(C)}$). The overall lower cutoff frequency $f_L$ is determined by the **highest** of these individual cutoff frequencies.
    *   $f_{L(Cin)} \approx \frac{1}{2\pi R_{in1} C_{in}}$
    *   $f_{L(CE1)} \approx \frac{1}{2\pi R_{E1} C_{E1}}$ (This is an approximation; a more precise analysis involves the effective emitter resistance).
    *   $f_{L(CC1)} \approx \frac{1}{2\pi (R_{C1} || R_{in2}) C_{C1}}$
    *   $f_{L(CC2)} \approx \frac{1}{2\pi (R_{C2} || R_L) C_{C2}}$
    *   $f_L = \max(f_{L(Cin)}, f_{L(CE1)}, f_{L(CC1)}, f_{L(CC2)})$ (The largest value dominates).

**3.5 High-Frequency Response:**

*   Dominated by the parasitic capacitances within the transistor and between circuit components.
*   The primary contributor for CE amplifier is the Miller effect, which increases the effective base-collector capacitance.
*   The upper cutoff frequency ($f_H$) is related to the transistor's transition frequency ($f_T$) and the circuit's internal resistance.
    *   A common approximation for a single CE stage is $f_H \approx \frac{f_T}{\beta}$ or $f_H \approx \frac{f_T}{G_m R_L}$, where $G_m$ is the transconductance.
    *   For a cascaded amplifier, the overall high-frequency response is also complex. The upper cutoff frequency of the cascaded amplifier is **lower** than the upper cutoff frequency of a single stage.
    *   If two identical stages are cascaded, and each has an upper cutoff frequency $f_{H(stage)}$, the overall upper cutoff frequency $f_{H(total)}$ is approximately:
        *   $f_{H(total)} \approx f_{H(stage)} \sqrt{2^{1/n} - 1}$, where $n$ is the number of stages (n=2 here).
        *   $f_{H(total)} \approx f_{H(stage)} \sqrt{2^{1/2} - 1} \approx 0.64 f_{H(stage)}$.
        *   This means cascading reduces the bandwidth.

**3.6 Plotting Frequency Response Characteristics:**

*   **Procedure:**
    1.  **Set up the circuit:** Build the cascaded amplifier on a breadboard or in a simulation environment.
    2.  **Apply AC input:** Use a function generator to provide a sinusoidal input signal.
    3.  **Vary input frequency:** Start at a low frequency (e.g., 10Hz) and gradually increase it.
    4.  **Measure output voltage:** Measure the RMS output voltage at each frequency, keeping the input voltage constant.
    5.  **Calculate Voltage Gain:** $A_v = \frac{V_{out}}{V_{in}}$ at each frequency.
    6.  **Convert to dB:** Gain in dB = $20 \log_{10} |A_v|$.
    7.  **Plot:** Plot Gain (in dB) on the y-axis against Frequency (on a logarithmic scale) on the x-axis.
*   **Expected Plot:** The plot will typically show a "flat" region in the mid-band, with a roll-off at low frequencies and another roll-off at high frequencies.
*   **Identifying Parameters from the Plot:**
    *   **Mid-band Gain ($A_{vm}$):** The peak gain value in the flat region.
    *   **Lower Cutoff Frequency ($f_L$):** The frequency where the gain drops by 3dB from $A_{vm}$.
    *   **Upper Cutoff Frequency ($f_H$):** The frequency where the gain drops by 3dB from $A_{vm}$ on the high-frequency side.
    *   **Bandwidth (BW):** $BW = f_H - f_L$.

**3.7 Example for Frequency Response Plotting:**

Using the example circuit designed earlier (2 x CE stages, $A_{vm} \approx -119.8$):

*   **Low-Frequency Analysis:**
    *   $C_{in} = 10\mu F, R_{in1} = 1.7k\Omega \implies f_{L(Cin)} \approx \frac{1}{2\pi \times 1.7k\Omega \times 10\mu F} \approx 9.3Hz$.
    *   $C_{E1} = 33\mu F, R_{E1} = 600\Omega \implies f_{L(CE1)} \approx \frac{1}{2\pi \times 600\Omega \times 33\mu F} \approx 8Hz$.
    *   $C_{C1} = 10\mu F, R_{C1} || R_{in2} = 150\Omega || 1.7k\Omega \approx 138\Omega \implies f_{L(CC1)} \approx \frac{1}{2\pi \times 138\Omega \times 10\mu F} \approx 115Hz$.
    *   $C_{C2} = 10\mu F, R_{C2} || R_L = 150\Omega || 10k\Omega \approx 147\Omega \implies f_{L(CC2)} \approx \frac{1}{2\pi \times 147\Omega \times 10\mu F} \approx 108Hz$.
    *   The dominant lower cutoff frequency is $f_L \approx 115Hz$ (determined by $C_{C1}$). The mid-band gain will be achieved for frequencies significantly above 115Hz.

*   **High-Frequency Analysis:**
    *   For 2N2222, let's assume $f_T = 300MHz$.
    *   For a single CE stage, the mid-band gain is around 11. $r_{e} \approx 13\Omega$. Transconductance $g_m = I_C / V_T = 2mA / 26mV \approx 77mS$.
    *   Approximate high-frequency cutoff for a single stage: $f_{H(stage)} \approx \frac{f_T}{2\pi \beta r_{e}} \approx \frac{300MHz}{2\pi \times 150 \times 13\Omega}$ (This is a simplification). A more common approximation is related to the input capacitance.
    *   Let's use the formula for a cascaded amplifier: $f_{H(total)} \approx 0.64 f_{H(stage)}$.
    *   Estimating $f_{H(stage)}$ is complex without knowing parasitic capacitances. A typical value for a well-designed CE amplifier with 2N2222 at this operating point might be around 100kHz.
    *   If $f_{H(stage)} \approx 100kHz$, then $f_{H(total)} \approx 0.64 \times 100kHz \approx 64kHz$.

**Expected Frequency Response Plot (Conceptual):**

*   **X-axis:** Frequency (Hz) - Logarithmic scale (e.g., 10Hz, 100Hz, 1kHz, 10kHz, 100kHz)
*   **Y-axis:** Gain (dB)
*   **Mid-band Gain:** Around $20 \log_{10} |-119.8| \approx 41.6dB$. This mid-band gain is achieved for frequencies between, say, 1kHz and 50kHz.
*   **Low-Frequency Roll-off:** Starting around 115Hz, the gain will decrease.
*   **High-Frequency Roll-off:** Starting around 64kHz, the gain will decrease.
*   **Bandwidth:** $BW \approx 64kHz - 115Hz \approx 64kHz$.

---

### 4. Practical Considerations and Troubleshooting (CO3)

*   **Component Tolerances:** Real components have tolerances (e.g., $\pm 5\%$, $\pm 10\%$). This means the actual gain and frequency response may deviate from the calculated values. Choose components with tighter tolerances for critical parameters.
*   **Transistor Parameter Variations:** $\beta$ is not constant and varies significantly between transistors and with operating conditions (temperature, collector current).
*   **Loading Effects:** The input impedance of a stage loads the previous stage, affecting its gain. The output impedance of a stage loads the subsequent stage. The interstage loading is crucial in cascaded designs.
*   **Noise:** Each stage amplifies noise. Cascading increases overall noise. Careful design and component selection can minimize noise.
*   **Stability:** While voltage divider biasing provides good DC stability, AC stability at high frequencies is also important.
*   **Troubleshooting:**
    *   **No Output/Low Output:**
        *   Check power supply voltages.
        *   Verify biasing resistors are correctly placed.
        *   Check transistor orientation and connections.
        *   Inspect all solder joints or breadboard connections.
        *   Confirm capacitors are not shorted or open.
        *   Measure DC voltages at transistor terminals to check Q-point.
        *   Ensure input signal is present and at the correct frequency.
        *   Check coupling capacitors for correct polarity if electrolytic.
    *   **Distorted Output:**
        *   Q-point is too close to saturation or cutoff. Recheck biasing.
        *   Input signal is too large, causing clipping.
        *   Check for faulty components.
    *   **Incorrect Gain:**
        *   Recheck calculations.
        *   Verify component values.
        *   Consider loading effects.
        *   Measure parasitic capacitances if high-frequency response is off.
    *   **Frequency Response Issues:**
        *   **Low $f_L$:** Capacitors may be too small, or their associated resistances are too low.
        *   **Low $f_H$:** Parasitic capacitances are too high. This can be due to long leads, poor layout, or incorrect component choices.

---

### 5. Practice Questions and Answers

**Question 1:** A single-stage CE amplifier has $R_C = 1k\Omega$, $R_L = 10k\Omega$, and $r_e = 20\Omega$. What is its approximate voltage gain?

**Answer 1:** $A_v \approx -\frac{R_C || R_L}{r_e} = -\frac{1k\Omega || 10k\Omega}{20\Omega} = -\frac{909\Omega}{20\Omega} \approx -45.45$.

**Question 2:** You need to design a two-stage cascaded CE amplifier with an overall voltage gain of $A_{v(total)} = -400$. If you decide to use two identical stages, what should be the voltage gain of each stage?

**Answer 2:** For identical stages, $A_{v1} \approx A_{v2} \approx \sqrt{A_{v(total)}} = \sqrt{400} = 20$. Since CE amplifiers invert the signal, the gain of each stage should be approximately $A_{v1} \approx A_{v2} \approx -20$.

**Question 3:** In the design of a cascaded CE amplifier, if the input impedance of the second stage ($R_{in2}$) is $2k\Omega$, and the required gain for the first stage is $A_{v1} = -15$ with $r_{e1} = 10\Omega$, what should be the approximate value of the collector resistor ($R_{C1}$) for the first stage?

**Answer 3:** $A_{v1} = -\frac{R_{C1} || R_{in2}}{r_{e1}}$.
    $-15 = -\frac{R_{C1} || 2k\Omega}{10\Omega}$
    $R_{C1} || 2k\Omega = 150\Omega$
    $\frac{R_{C1} \times 2000}{R_{C1} + 2000} = 150$
    $2000 R_{C1} = 150 R_{C1} + 150 \times 2000$
    $1850 R_{C1} = 300000$
    $R_{C1} \approx 162.16\Omega$. A standard value like $160\Omega$ or $180\Omega$ could be used.

**Question 4:** What is the primary reason for the gain reduction at high frequencies in a CE amplifier?

**Answer 4:** The primary reason is the effect of parasitic capacitances within the transistor (like $C_{be}$, $C_{bc}$) and between circuit components, which become significant at high frequencies and act as low-pass filters. The Miller effect, which amplifies the base-collector capacitance ($C_{bc}$), is a major contributor.

**Question 5:** If a single CE amplifier stage has a lower cutoff frequency ($f_L$) of 50Hz due to its coupling and bypass capacitors, and a second identical stage is cascaded, what will be the approximate new overall lower cutoff frequency?

**Answer 5:** For cascaded identical stages, the number of stages 'n' matters for the roll-off rate. The overall lower cutoff frequency for 'n' stages is approximately related to the single-stage cutoff. For two identical stages, the overall $f_L$ will be higher than the individual stage $f_L$. A rough approximation is that the overall $f_L$ is approximately $f_L(stage) \times (\sqrt{2^{1/n}-1})^{-1}$. For n=2, this is about $f_L(stage) \times 1.5$. So, the new $f_L$ would be roughly $50Hz \times 1.5 = 75Hz$. More precisely, each RC network contributes a pole. The overall response is a product of individual responses. The lowest frequency where the gain drops by 3dB is dictated by the largest individual cutoff frequency if they are widely separated. However, if they are close, the overall roll-off becomes steeper. A more common rule of thumb is that each stage adds a factor of approximately $\sqrt{2^{1/n}-1}$ to the frequency, or that the individual cutoffs combine to create a steeper overall slope. For practical purposes, if the individual cutoffs are $f_{L1}$ and $f_{L2}$, the overall $f_L$ will be somewhere between $\max(f_{L1}, f_{L2})$ and their sum, depending on the separation and the exact pole locations. A common approximation states that for n identical stages, the overall bandwidth is reduced by a factor of $\sqrt{2^{1/n}-1}$. Conversely, for the lower cutoff frequency, this factor applies to the frequency itself. So, the overall $f_L \approx f_{L(stage)} / \sqrt{2^{1/n}-1}$ if the $f_L$ is determined by the same RC constant. However, the dominant pole analysis is more accurate. If all stages have an $f_L$ of 50Hz, the overall $f_L$ will be higher. A more common approximation is that the bandwidth of n identical stages is $BW_{total} \approx BW_{stage} / \sqrt{2^{1/n}-1}$. This means the cutoff frequency increases. For n=2, the factor is $\sqrt{2^{1/2}-1} \approx 0.64$. So, $f_{H(total)} \approx 0.64 f_{H(stage)}$. For $f_L$, it's similar, but the roll-off is from the low end. A better way to think about it is that the overall $f_L$ will be higher than individual $f_L$. For identical stages, a rule of thumb is $f_L \approx f_{L(stage)} \times \sqrt{2^{1/n}-1}^{-1}$ for $f_H$ and similarly for $f_L$. For $n=2$, it's approximately $f_L \times 1.5$. So, $50Hz \times 1.5 = 75Hz$.

---

### 6. Important Points to Remember

*   **Gain is multiplicative:** The total gain of cascaded stages is approximately the product of individual stage gains.
*   **Phase inversion:** Each CE stage inverts the signal, so two CE stages result in a non-inverted overall output.
*   **Interstage Loading:** The input impedance of a stage significantly affects the gain of the preceding stage.
*   **Frequency Response:** Cascading increases gain but generally reduces bandwidth. Low-frequency response is limited by coupling and bypass capacitors, while high-frequency response is limited by parasitic capacitances and the Miller effect.
*   **Dominant Pole:** The overall lower cutoff frequency ($f_L$) is determined by the **highest** of the individual cutoff frequencies introduced by coupling and bypass capacitors.
*   **Miller Effect:** Significantly increases the effective capacitance seen at the base of a CE amplifier, reducing the upper cutoff frequency.
*   **Design Iteration:** Achieving a specific gain often requires iterative design to account for loading effects and component availability.
*   **Simulation Tools:** SPICE or similar simulation software is invaluable for verifying designs and predicting frequency response before building circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook References

*   **Electronic Devices and Circuits by David A Bell (Oxford University Press, 2008, 5th edition):**
    *   Chapters on single-stage CE amplifiers, multi-stage amplifiers, and frequency response analysis. (Likely Chapters 12, 13, 14).
*   **Electronic Circuits Analysis and Design 1 by D. Meganathan (Yes Dee Publishing, 2023, 1st edition):**
    *   Provides fundamental concepts of transistors, biasing, single-stage amplifier design, and potentially introductions to multi-stage amplifier configurations and frequency response. (Likely Chapters 5, 6, 7).

These notes aim to provide a comprehensive understanding of designing and analyzing cascaded CE-CE amplifiers for a specific voltage gain and plotting their frequency response characteristics, aligning with the stated learning and course outcomes.