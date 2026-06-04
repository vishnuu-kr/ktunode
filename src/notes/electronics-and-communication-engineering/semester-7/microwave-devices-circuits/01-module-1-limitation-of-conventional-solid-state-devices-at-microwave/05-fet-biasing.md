---
title: "FET – biasing"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 1: Limitation of conventional solid state devices at Microwave."
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff48c"
status: "completed"
scrapedAt: "2026-05-23T18:07:42.617Z"
---
## MICROWAVE DEVICES & CIRCUITS - Module 1: Limitations of Conventional Solid-State Devices at Microwave Frequencies

### Topic: FET - Biasing

---

### 1. Introduction: Why Biasing is Crucial for FETs at Microwave Frequencies

At microwave frequencies, the performance of transistors, including Field-Effect Transistors (FETs), is significantly impacted by their operating point. Proper biasing ensures that the FET operates in its desired region (e.g., saturation region for amplification) and maintains stability, linearity, and optimal gain. Improper biasing can lead to poor performance, distortion, reduced output power, and even device damage.

**Key Concept:** Biasing establishes the DC operating point (Q-point) of the FET. This Q-point determines the quiescent values of drain current ($I_D$), drain-source voltage ($V_{DS}$), and gate-source voltage ($V_{GS}$).

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understanding the fundamental DC conditions necessary for a FET to function as an amplifier or switch is a prerequisite for describing its basic principles.

**Reference:**
*   **Pozar, Microwave Engineering:** Discusses the need for specific operating conditions for high-frequency devices and the impact of DC bias on device characteristics.
*   **Liao, Microwave Devices & Circuits:** Likely covers the importance of biasing for achieving desired device performance in RF and microwave applications.

---

### 2. FET Fundamentals Relevant to Biasing

Before diving into biasing techniques, it's essential to recall the key characteristics of FETs that influence their biasing:

*   **Gate Control:** The gate voltage ($V_{GS}$) controls the conductivity of the channel between the drain and source, thereby controlling the drain current ($I_D$).
*   **Regions of Operation:**
    *   **Ohmic (Linear) Region:** $V_{DS}$ is small, and $I_D$ is approximately proportional to $V_{DS}$ and $V_{GS}$. The FET acts like a voltage-controlled resistor.
    *   **Saturation Region:** $V_{DS}$ is large enough to pinch off the channel. $I_D$ becomes relatively independent of $V_{DS}$ and is primarily controlled by $V_{GS}$. This is the most common region for amplifier operation.
    *   **Cutoff Region:** $V_{GS}$ is below the threshold voltage ($V_{th}$), resulting in very little or no drain current.
*   **Key Parameters:**
    *   **Transconductance ($g_m$):** The change in drain current for a change in gate-source voltage ($\partial I_D / \partial V_{GS}$). Higher $g_m$ generally leads to higher gain.
    *   **Drain Resistance ($r_d$):** The change in drain-source voltage for a change in drain current ($\partial V_{DS} / \partial I_D$). This is ideally infinite in the saturation region for FETs.
    *   **Threshold Voltage ($V_{th}$):** The minimum gate-source voltage required to create a conducting channel.
    *   **Pinch-off Voltage ($V_P$):** For JFETs, it's the $V_{GS}$ value at which $I_D$ becomes zero. For MOSFETs, this concept is related to $V_{th}$.
    *   **Maximum Drain Current ($I_{DSS}$):** For JFETs, the drain current when $V_{GS}=0$.

**Important Point to Remember:** The saturation region is critical for amplifier applications because it offers a high output impedance and a transconductance that is relatively constant, leading to predictable gain.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understanding these parameters is fundamental to describing how a FET operates as an amplifier.

**Reference:**
*   **Liao, Microwave Devices & Circuits:** Provides detailed explanations of FET operation, including the different regions and key parameters.
*   **Pozar, Microwave Engineering:** Might briefly touch upon these parameters in the context of device limitations at high frequencies.

---

### 3. Common FET Biasing Techniques

The goal of biasing is to set the FET in the saturation region with appropriate $V_{GS}$ and $I_D$ to achieve desired performance metrics like gain, linearity, and power output.

#### 3.1. Fixed Bias (Gate Bias)

*   **Circuit:** A fixed voltage is applied to the gate through a high-value resistor ($R_G$). The drain is connected to the power supply ($V_{DD}$) through the drain resistor ($R_D$).
*   **Operation:** $V_{GS}$ is constant and determined by the voltage source. $I_D$ is then set by the $V_{GS}-I_D$ characteristics of the FET.
*   **Advantages:** Simple to implement.
*   **Disadvantages:**
    *   **Sensitivity to FET Variations:** The Q-point can vary significantly if the FET's parameters ($V_{th}$, $I_{DSS}$) differ from specifications.
    *   **Temperature Sensitivity:** $I_D$ is temperature-dependent, and fixed bias doesn't provide much compensation.
    *   **Input Impedance:** $R_G$ needs to be very high at microwave frequencies to avoid loading the input signal.

**Example:**
Consider a JFET with $I_{DSS} = 10$ mA and $V_P = -4$ V. If biased with a fixed $V_{GS} = -2$ V, the drain current can be estimated using the square-law relationship:
$I_D = I_{DSS}(1 - \frac{V_{GS}}{V_P})^2$
$I_D = 10 \text{ mA} (1 - \frac{-2 \text{ V}}{-4 \text{ V}})^2 = 10 \text{ mA} (1 - 0.5)^2 = 10 \text{ mA} (0.25) = 2.5 \text{ mA}$

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Demonstrates a basic method of setting the DC operating point.

**Reference:**
*   **Liao, Microwave Devices & Circuits:** Likely presents fixed bias as a fundamental biasing technique.

#### 3.2. Self-Bias (Source Bias)

*   **Circuit:** A small resistor ($R_S$) is placed in the source lead. The gate is typically grounded through a high-value resistor ($R_G$), making $V_{GS}$ negative relative to the source.
*   **Operation:**
    *   The drain current ($I_D$) flows through $R_S$, creating a voltage drop $V_S = I_D R_S$.
    *   Since the gate is usually at AC ground (through $R_G$), $V_{GS} = V_G - V_S = 0 - I_D R_S = -I_D R_S$.
    *   The $V_{GS}$ is automatically adjusted by the drain current, providing negative feedback and stabilizing the Q-point.
*   **Advantages:**
    *   **Stability:** Excellent DC stability due to negative feedback. The Q-point is less sensitive to variations in FET parameters and temperature.
    *   **Automatic Adjustment:** $I_D$ tends to remain constant even with device variations.
*   **Disadvantages:**
    *   **Gain Reduction:** The source resistor ($R_S$), if unbypassed, also reduces the AC transconductance by a factor of ($1 + g_m R_S$), thus reducing the voltage gain. To achieve high gain, $R_S$ must be bypassed with a capacitor ($C_S$).
    *   **Lower Input Impedance:** The input impedance is affected by $R_G$.
    *   **Potentially Lower $V_{DS}$:** The voltage drop across $R_S$ reduces the available $V_{DS}$ for the drain load.

**Example:**
For the same JFET ($I_{DSS} = 10$ mA, $V_P = -4$ V), if $R_S = 1$ k$\Omega$, and we want $I_D \approx 2.5$ mA for a Q-point.
$V_{GS} = -I_D R_S = -(2.5 \text{ mA})(1 \text{ k}\Omega) = -2.5 \text{ V}$.
Using the square-law:
$I_D = 10 \text{ mA} (1 - \frac{-2.5 \text{ V}}{-4 \text{ V}})^2 = 10 \text{ mA} (1 - 0.625)^2 = 10 \text{ mA} (0.375)^2 = 10 \text{ mA} (0.140625) \approx 1.4 \text{ mA}$.
This indicates that we need to iterate or solve graphically to find the exact Q-point where the FET equation and the bias line ($V_{GS} = -I_D R_S$) intersect. A graphical method using the FET's characteristic curves is often preferred.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Illustrates a stable and common biasing method.

**Reference:**
*   **Collin, Foundation of Microwave Engineering:** Likely details self-bias as a standard technique.
*   **Liao, Microwave Devices & Circuits:** Provides comprehensive analysis of self-bias and its impact on gain.

#### 3.3. Voltage Divider Bias

*   **Circuit:** Two resistors ($R_1$ and $R_2$) form a voltage divider network for the gate, providing a stable $V_{GS}$. A source resistor ($R_S$) is often included for enhanced stability, similar to self-bias.
*   **Operation:**
    *   $V_G = V_{DD} \frac{R_2}{R_1 + R_2}$ is a stable gate voltage, independent of FET parameters.
    *   If $R_S$ is present, $V_{GS} = V_G - I_D R_S$.
    *   The combination of a stable $V_G$ and the feedback from $R_S$ (if used) provides excellent Q-point stability.
*   **Advantages:**
    *   **Excellent Stability:** The most stable biasing technique against variations in FET parameters and temperature, especially with $R_S$.
    *   **Flexibility:** Allows for setting a desired $V_{GS}$ more precisely.
*   **Disadvantages:**
    *   **Increased Complexity:** Requires more components than fixed or self-bias.
    *   **Loading of $V_{DD}$:** The voltage divider draws current from $V_{DD}$, reducing efficiency.
    *   **Gain Reduction:** Similar to self-bias, $R_S$ can reduce gain if not bypassed.

**Example:**
Consider a MOSFET with $V_{th} = 2$ V and $I_{D(on)} = 10$ mA at $V_{GS} = 5$ V. Let $V_{DD} = 12$ V, $R_1 = 1$ M$\Omega$, $R_2 = 10$ M$\Omega$, $R_S = 1$ k$\Omega$, and $R_D = 2$ k$\Omega$.
$V_G = 12 \text{ V} \frac{10 \text{ M}\Omega}{1 \text{ M}\Omega + 10 \text{ M}\Omega} = 12 \text{ V} \frac{10}{11} \approx 10.9 \text{ V}$.
The FET equation is $I_D = K(V_{GS} - V_{th})^2$, where $K = \frac{I_{D(on)}}{(V_{GS(on)} - V_{th})^2} = \frac{10 \text{ mA}}{(5 \text{ V} - 2 \text{ V})^2} = \frac{10 \text{ mA}}{9 \text{ V}^2} \approx 1.11 \text{ mA/V}^2$.
The bias equation is $V_{GS} = V_G - I_D R_S = 10.9 \text{ V} - I_D (1 \text{ k}\Omega)$.
Substitute $V_{GS} = I_D/K + V_{th}$ into the bias equation or solve graphically. Let's assume we want $I_D \approx 5$ mA.
$V_{GS} = \frac{5 \text{ mA}}{1.11 \text{ mA/V}^2} + 2 \text{ V} \approx 4.5 \text{ V} + 2 \text{ V} = 6.5 \text{ V}$.
Check if this $V_{GS}$ is achievable with $R_S$:
$V_{GS} = 10.9 \text{ V} - (5 \text{ mA})(1 \text{ k}\Omega) = 10.9 \text{ V} - 5 \text{ V} = 5.9 \text{ V}$.
The calculated $V_{GS}$ values (6.5V and 5.9V) don't match, indicating 5mA is not the exact Q-point. This iterative process is necessary for accurate Q-point calculation.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Presents a robust biasing method for stable operation.

**Reference:**
*   **Liao, Microwave Devices & Circuits:** Provides detailed analysis and design procedures for voltage divider bias.

#### 3.4. Biasing for Specific FET Types (JFETs vs. MOSFETs)

*   **JFETs:**
    *   Typically operated in the enhancement mode with a negative $V_{GS}$ to create a depletion region.
    *   $I_D$ is zero when $V_{GS} \le V_P$ (pinch-off voltage, which is negative).
    *   Self-bias is very common and effective due to the inherent negative $V_{GS}$ from $I_D R_S$.
*   **MOSFETs:**
    *   Can be depletion-mode (like JFETs) or enhancement-mode.
    *   **Enhancement-mode MOSFETs:** Require $V_{GS} > V_{th}$ (which is positive) for current flow. Voltage divider bias is often preferred to establish a stable positive $V_{GS}$.
    *   **Depletion-mode MOSFETs:** Can be biased similarly to JFETs, with a negative $V_{GS}$ or a positive $V_{GS}$ for enhancement operation.

**Important Point to Remember:** The polarity of $V_{th}$ and the desired operating region dictate the biasing requirements for different FET types.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Differentiates biasing needs based on device characteristics.

**Reference:**
*   **Liao, Microwave Devices & Circuits:** Offers specific biasing guidelines for JFETs and MOSFETs.

---

### 4. Biasing Considerations at Microwave Frequencies

While the fundamental biasing techniques remain the same, several factors become critical at microwave frequencies:

*   **High-Frequency Performance:** The biasing circuit should not introduce unwanted parasitic effects or significantly degrade the high-frequency gain or noise figure.
    *   **Capacitive Bypass:** Source and drain resistors ($R_S, R_D$) are often bypassed with capacitors to prevent AC signal degeneration. These bypass capacitors must have low impedance at microwave frequencies.
    *   **Input/Output Coupling:** Capacitors are used for AC coupling to the input and from the output. Their values must be chosen carefully to ensure they are effective at the operating frequency while blocking DC.
*   **Stability:** Microwave amplifiers can be prone to oscillations. Proper biasing and circuit design (including component selection and layout) are crucial for stability.
    *   **Gain Stability:** Ensuring the transconductance ($g_m$) remains relatively constant over temperature and bias variations is important for predictable gain.
    *   **Impedance Matching:** Biasing components (like $R_G$) can affect the input impedance.
*   **Noise:** The biasing network itself can contribute noise. High-value resistors should be chosen judiciously.
*   **Power Efficiency:** Biasing affects the DC power consumption, which is a critical factor in microwave systems.
*   **Dynamic Range and Linearity:** The chosen Q-point influences the linearity of the amplifier. Biasing in the center of the saturation region often provides better linearity.
*   **Monolithic Microwave Integrated Circuits (MMICs):** In MMICs, resistors and capacitors are fabricated on-chip. Biasing networks are integrated directly, and their design is tightly coupled with the active device and transmission line layout.

**Key Concepts:**
*   **Bypass Capacitors:** Used to ensure that biasing resistors do not attenuate the AC signal. Their impedance must be negligible at the operating frequency.
*   **Bias Chokes/Beads:** Inductive elements can be used to block RF signals from entering the DC bias circuitry, preventing them from leaking into other parts of the circuit.
*   **Stability Analysis:** Techniques like using the stability factor (K) are employed to ensure the amplifier does not oscillate.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understanding these considerations is essential for describing the *principles* of microwave solid-state devices as they operate in a circuit.
*   **CO2 (K3):** Knowledge of how bias networks interact with signal flow is a precursor to analyzing microwave networks.
*   **CO3 (K3):** While not directly about filter design, the concepts of impedance matching and stability influenced by biasing are relevant to filter performance.
*   **CO4 (K2):** MMIC biasing is directly related to illustrating the basic concepts of these circuits.

**Reference:**
*   **Pozar, Microwave Engineering:** Dedicates sections to stability analysis, impedance matching, and practical design considerations for high-frequency circuits, including biasing.
*   **Collin, Foundation of Microwave Engineering:** Discusses the practical aspects of RF and microwave circuit design, including stability and component selection for biasing.
*   **Konishi, Microwave Integrated Circuits:** Provides insights into how biasing is implemented within the context of integrated circuits.
*   **Maloratsky, Passive RF and Microwave Integrated Circuits:** Discusses passive components used in biasing and their impact on microwave circuit performance.

---

### 5. Practical Design Aspects and Example

**Problem:** Design a single-stage JFET amplifier for a microwave application operating at 2 GHz. The JFET has the following characteristics: $I_{DSS} = 12$ mA, $V_P = -3.5$ V, and $g_m$ at $V_{GS} = -1.5$ V is approximately 20 mS. We want a quiescent drain current ($I_{DQ}$) of 4 mA and a stable operating point.

**Solution Approach (using Self-Bias for stability):**

1.  **Determine $V_{GSQ}$:**
    Using the JFET square-law equation:
    $I_{DQ} = I_{DSS}(1 - \frac{V_{GSQ}}{V_P})^2$
    $4 \text{ mA} = 12 \text{ mA}(1 - \frac{V_{GSQ}}{-3.5 \text{ V}})^2$
    $0.333 = (1 + \frac{V_{GSQ}}{3.5})^2$
    $\sqrt{0.333} \approx 0.577 = 1 + \frac{V_{GSQ}}{3.5}$
    $0.577 - 1 = \frac{V_{GSQ}}{3.5}$
    $-0.423 = \frac{V_{GSQ}}{3.5}$
    $V_{GSQ} \approx -1.48 \text{ V}$
    This is close to the region where $g_m \approx 20$ mS, which is suitable for amplification.

2.  **Select $R_S$:**
    To achieve $V_{GSQ} \approx -1.48$ V with $I_{DQ} = 4$ mA:
    $R_S = \frac{-V_{GSQ}}{I_{DQ}} = \frac{-(-1.48 \text{ V})}{4 \text{ mA}} \approx 370 \Omega$.
    Let's choose a standard value, say $R_S = 390 \Omega$.
    With $R_S = 390 \Omega$, the new $V_{GSQ} = -(4 \text{ mA})(390 \Omega) = -1.56 \text{ V}$.
    Recalculating $I_{DQ}$:
    $I_{DQ} = 12 \text{ mA}(1 - \frac{-1.56 \text{ V}}{-3.5 \text{ V}})^2 = 12 \text{ mA}(1 - 0.446)^2 = 12 \text{ mA}(0.554)^2 \approx 12 \text{ mA}(0.307) \approx 3.68 \text{ mA}$.
    This is acceptable for a Q-point.

3.  **Select $R_G$:**
    At 2 GHz, $R_G$ must be very high to avoid loading the input signal source. A value of 1 M$\Omega$ is typical.

4.  **Select $R_D$:**
    The drain resistor ($R_D$) influences the voltage gain and the output impedance. For amplification, the FET should operate in the saturation region. Let's assume $V_{DD} = 12$ V.
    The drain voltage $V_{DSQ} = V_{DD} - I_{DQ} R_D$.
    For saturation, $V_{DSQ} > V_{GSQ} - V_P$ (for JFETs, approximately).
    $V_{DSQ} > -1.56 \text{ V} - (-3.5 \text{ V}) = 1.94 \text{ V}$.
    Let's target $V_{DSQ} \approx 6$ V to ensure deep saturation and provide ample room for output signal swing.
    $6 \text{ V} = 12 \text{ V} - (3.68 \text{ mA}) R_D$
    $(3.68 \text{ mA}) R_D = 12 \text{ V} - 6 \text{ V} = 6 \text{ V}$
    $R_D = \frac{6 \text{ V}}{3.68 \text{ mA}} \approx 1.63 \text{ k}\Omega$.
    Choose a standard value, say $R_D = 1.6 \text{ k}\Omega$.

5.  **Bypass Capacitor ($C_S$):**
    To prevent $R_S$ from reducing AC gain, a bypass capacitor is used in parallel with $R_S$. Its impedance ($X_{CS} = \frac{1}{2 \pi f C_S}$) must be much smaller than $R_S$ at 2 GHz.
    Let $X_{CS} \le 0.1 R_S = 0.1 \times 390 \Omega = 39 \Omega$.
    $C_S \ge \frac{1}{2 \pi f X_{CS}} = \frac{1}{2 \pi (2 \times 10^9 \text{ Hz}) (39 \Omega)} \approx \frac{1}{4.9 \times 10^{11}} \text{ F} \approx 2000 \text{ pF}$.
    A capacitor of 1 nF (1000 pF) or higher would be suitable.

6.  **Input/Output Coupling Capacitors ($C_{C1}, C_{C2}$):**
    These capacitors are placed in series with the input and output to block DC. Their impedance must be small at 2 GHz.
    Let $X_{CC} \le 0.1 R_{in}$ or $0.1 R_{load}$ (where $R_{in}$ is the input impedance of the FET stage and $R_{load}$ is the subsequent stage's input impedance). For typical microwave FET stages, input impedance is high. Let's assume $R_{in} \approx 1$ M$\Omega$.
    $X_{CC} \le 0.1 \times 1 \text{ M}\Omega = 100 \text{ k}\Omega$. This is too large.
    We need to consider the impedance of the source driving the FET and the load connected to the FET. For RF coupling, we generally want $X_{CC} \ll R_G$ for input coupling and $X_{CC} \ll R_D || R_{load}$ for output coupling.
    A common rule of thumb is that the impedance of the coupling capacitor should be 1/10th of the parallel combination of the input impedance it sees.
    For the input, it sees $R_G$ (1 M$\Omega$). Let $X_{C1} = 0.1 \times 1 \text{ M}\Omega = 100 \text{ k}\Omega$. This doesn't seem right.
    At microwave frequencies, coupling capacitors are often chosen to present a low impedance, e.g., $X_{C} \approx 5 \Omega$ to $20 \Omega$ to ensure efficient coupling.
    Let $X_{C1} \approx 10 \Omega$ at 2 GHz.
    $C_{C1} \ge \frac{1}{2 \pi f X_{C1}} = \frac{1}{2 \pi (2 \times 10^9 \text{ Hz}) (10 \Omega)} \approx \frac{1}{1.25 \times 10^{11}} \text{ F} \approx 8000 \text{ pF}$.
    A value of 10 nF (10000 pF) is suitable.

**Final Biased Circuit Components (Self-Biased JFET Amplifier):**
*   $V_{DD} = 12$ V
*   JFET (e.g., 2N3823)
*   $R_G = 1$ M$\Omega$
*   $R_S = 390 \Omega$
*   $R_D = 1.6 \text{ k}\Omega$
*   $C_S = 10$ nF (bypassing $R_S$)
*   $C_{C1} = 10$ nF (input coupling)
*   $C_{C2} = 10$ nF (output coupling)

**Alignment with Course Outcomes:**
*   **CO1 (K2):** The design process directly demonstrates how to set the operating point for amplification.
*   **CO2 (K3):** The selection of bypass and coupling capacitors relates to how signals flow through the biased network.
*   **CO3 (K3):** Understanding the role of $R_D$ in setting output voltage and gain relates to impedance and gain concepts important in filter design.
*   **CO4 (K2):** The principles of biasing are fundamental to MMIC design, even if specific component values differ.

**Reference:**
*   **Pozar, Microwave Engineering:** Provides examples and design procedures for RF amplifier stages.
*   **Liao, Microwave Devices & Circuits:** Offers detailed examples of biasing common FET amplifier circuits.

---

### 6. Practice Questions and Answers

**Question 1:** Why is proper biasing essential for FET operation at microwave frequencies?
**Answer:** Proper biasing establishes the DC operating point (Q-point) in the saturation region, ensuring optimal transconductance, stable amplification, linearity, and preventing device damage due to excessive current or voltage.

**Question 2:** Compare self-bias and voltage divider bias in terms of stability. Which is generally preferred for improved stability?
**Answer:** Self-bias provides good stability due to negative feedback. Voltage divider bias, especially when combined with a source resistor, offers excellent stability against variations in FET parameters and temperature. Voltage divider bias is generally preferred for maximum stability.

**Question 3:** In a self-biased JFET amplifier, what is the purpose of the bypass capacitor across the source resistor ($R_S$)?
**Answer:** The bypass capacitor ($C_S$) is placed in parallel with $R_S$. Its low impedance at the operating frequency effectively shorts out $R_S$ for AC signals. This prevents $R_S$ from degenerating the AC signal and reducing the voltage gain, while still providing DC stability.

**Question 4:** An enhancement-mode MOSFET has $V_{th} = 2$ V and $I_{D(on)} = 8$ mA at $V_{GS(on)} = 5$ V. If we use voltage divider bias with $V_{DD} = 15$ V, $R_1 = 470$ k$\Omega$, $R_2 = 1$ M$\Omega$, and $R_S = 680 \Omega$, what is the approximate Q-point ($V_{GSQ}$ and $I_{DQ}$)? (Assume $K = \frac{I_{D(on)}}{(V_{GS(on)}-V_{th})^2}$ and $I_D = K(V_{GS}-V_{th})^2$)

**Solution to Question 4:**
1.  **Calculate K:**
    $K = \frac{8 \text{ mA}}{(5 \text{ V} - 2 \text{ V})^2} = \frac{8 \text{ mA}}{9 \text{ V}^2} \approx 0.889 \text{ mA/V}^2$.
2.  **Calculate $V_G$:**
    $V_G = V_{DD} \frac{R_2}{R_1 + R_2} = 15 \text{ V} \frac{1 \text{ M}\Omega}{470 \text{ k}\Omega + 1 \text{ M}\Omega} = 15 \text{ V} \frac{1000}{470 + 1000} = 15 \text{ V} \frac{1000}{1470} \approx 10.2 \text{ V}$.
3.  **Set up the Bias Equation:**
    $V_{GS} = V_G - I_D R_S = 10.2 \text{ V} - I_D (680 \Omega)$.
4.  **Substitute FET Equation into Bias Equation:**
    $I_D = K(V_{GS} - V_{th})^2$
    $I_D = 0.889 \text{ mA/V}^2 (V_{GS} - 2 \text{ V})^2$.
    From the bias equation, $V_{GS} = 10.2 \text{ V} - 0.68 I_D$ (where $I_D$ is in mA).
    $I_D = 0.889 (\frac{10.2 - 0.68 I_D}{1} - 2)^2$
    $I_D = 0.889 (8.2 - 0.68 I_D)^2$
    This is a quadratic equation that needs to be solved for $I_D$. It's often easier to iterate or use a graphical method.

    **Iterative Approach:**
    Assume $I_{DQ} = 2$ mA.
    $V_{GS} = 10.2 \text{ V} - (2 \text{ mA})(680 \Omega) = 10.2 \text{ V} - 1.36 \text{ V} = 8.84 \text{ V}$.
    Calculate $I_D$ from FET equation:
    $I_D = 0.889 \text{ mA/V}^2 (8.84 \text{ V} - 2 \text{ V})^2 = 0.889 \text{ mA/V}^2 (6.84 \text{ V})^2 \approx 0.889 \times 46.78 \text{ mA} \approx 41.5 \text{ mA}$.
    This $I_D$ (41.5mA) is much higher than our assumed $I_{DQ}$ (2mA), indicating our $V_{GS}$ was too high.

    Let's try a lower $I_{DQ}$, say $I_{DQ} = 1$ mA.
    $V_{GS} = 10.2 \text{ V} - (1 \text{ mA})(680 \Omega) = 10.2 \text{ V} - 0.68 \text{ V} = 9.52 \text{ V}$.
    Calculate $I_D$ from FET equation:
    $I_D = 0.889 \text{ mA/V}^2 (9.52 \text{ V} - 2 \text{ V})^2 = 0.889 \text{ mA/V}^2 (7.52 \text{ V})^2 \approx 0.889 \times 56.55 \text{ mA} \approx 50.3 \text{ mA}$.
    Still too high. This suggests the chosen $R_1, R_2$ values might lead to a very high $V_{GS}$. Let's re-examine the $V_{GS(on)}$ of 5V to get 8mA.
    If $V_{GS} = 5$V, $I_D=8$mA. The bias line would be $V_{GS} = 10.2 - 0.68 I_D$.
    $5 = 10.2 - 0.68 \times 8$
    $5 = 10.2 - 5.44$
    $5 = 4.76$ (This is close enough for an example calculation if we assume ideal components).

    Let's target $I_{DQ}$ closer to the $I_{D(on)}$ range. Let's try $I_{DQ} = 5$ mA.
    $V_{GS} = 10.2 \text{ V} - (5 \text{ mA})(680 \Omega) = 10.2 \text{ V} - 3.4 \text{ V} = 6.8 \text{ V}$.
    Calculate $I_D$ from FET equation:
    $I_D = 0.889 \text{ mA/V}^2 (6.8 \text{ V} - 2 \text{ V})^2 = 0.889 \text{ mA/V}^2 (4.8 \text{ V})^2 \approx 0.889 \times 23.04 \text{ mA} \approx 20.5 \text{ mA}$.
    Still too high. This indicates the Q-point will be at a lower $V_{GS}$ and higher $I_D$.

    Let's solve the quadratic equation $I_D = 0.889 (8.2 - 0.68 I_D)^2$:
    $I_D = 0.889 (67.24 - 11.152 I_D + 0.4624 I_D^2)$
    $I_D = 59.77 - 9.92 I_D + 0.411 I_D^2$
    $0.411 I_D^2 - 10.92 I_D + 59.77 = 0$
    Using the quadratic formula $I_D = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $a = 0.411$, $b = -10.92$, $c = 59.77$.
    $I_D = \frac{10.92 \pm \sqrt{(-10.92)^2 - 4(0.411)(59.77)}}{2(0.411)}$
    $I_D = \frac{10.92 \pm \sqrt{119.25 - 98.17}}{0.822}$
    $I_D = \frac{10.92 \pm \sqrt{21.08}}{0.822} = \frac{10.92 \pm 4.59}{0.822}$

    Two possible solutions:
    $I_{D1} = \frac{10.92 + 4.59}{0.822} = \frac{15.51}{0.822} \approx 18.87 \text{ mA}$.
    $I_{D2} = \frac{10.92 - 4.59}{0.822} = \frac{6.33}{0.822} \approx 7.70 \text{ mA}$.

    Let's check which one is valid.
    If $I_{DQ} = 18.87$ mA:
    $V_{GS} = 10.2 \text{ V} - (18.87 \text{ mA})(680 \Omega) = 10.2 \text{ V} - 12.83 \text{ V} = -2.63 \text{ V}$.
    From FET equation: $I_D = 0.889(-2.63 - 2)^2 = 0.889(-4.63)^2 \approx 0.889 \times 21.44 \approx 19.08$ mA. (Close, but $V_{GS}$ is negative, which is not typical for enhancement mode unless it's very deep).

    If $I_{DQ} = 7.70$ mA:
    $V_{GS} = 10.2 \text{ V} - (7.70 \text{ mA})(680 \Omega) = 10.2 \text{ V} - 5.24 \text{ V} = 4.96 \text{ V}$.
    From FET equation: $I_D = 0.889(4.96 - 2)^2 = 0.889(2.96)^2 \approx 0.889 \times 8.76 \approx 7.77$ mA. (This is a valid solution).

    **Answer:** The approximate Q-point is $V_{GSQ} \approx 4.96$ V and $I_{DQ} \approx 7.70$ mA.

---

### 7. Summary and Key Takeaways

*   **Biasing is Fundamental:** Establishes the DC operating point for FETs, crucial for microwave performance.
*   **Saturation Region:** The desired operating region for amplification.
*   **Common Biasing Techniques:** Fixed bias, self-bias, and voltage divider bias are used, each with pros and cons regarding stability and complexity.
*   **Self-Bias:** Offers good stability via negative feedback.
*   **Voltage Divider Bias:** Provides the best stability, especially with a source resistor.
*   **Microwave Considerations:** Bypass capacitors, AC coupling, stability, noise, and linearity are critical factors in high-frequency biasing circuit design.
*   **Component Selection:** Values for biasing resistors, bypass capacitors, and coupling capacitors must be chosen carefully considering the operating frequency and desired performance.
*   **Design Process:** Involves selecting a biasing technique, calculating component values to meet Q-point requirements, and ensuring AC performance is not degraded.

---
This concludes the study notes for FET Biasing in Module 1. Remember to refer to the textbooks for more in-depth explanations and graphical analysis techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
