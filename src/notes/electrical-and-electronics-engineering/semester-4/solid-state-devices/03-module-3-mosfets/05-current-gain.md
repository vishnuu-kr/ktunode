---
title: "current gain"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8e"
status: "completed"
scrapedAt: "2026-05-23T16:18:49.182Z"
---
# SOLID STATE DEVICES: Module 3: MOSFETs - Current Gain

## 1. Introduction to MOSFETs and Current Gain

**Context:** This module focuses on Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs), a fundamental semiconductor device widely used in electronic circuits. Understanding their behavior, particularly their current gain, is crucial for designing and analyzing amplifier circuits. This topic directly contributes to **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**.

**What is Current Gain?**

In general, current gain refers to the ratio of output current to input current in a device or circuit. For MOSFETs, the primary input signal is a voltage at the gate terminal, and the output current flows between the drain and source terminals. Therefore, the concept of "current gain" in the traditional sense of a bipolar junction transistor (BJT) doesn't directly apply to MOSFETs as they are voltage-controlled devices. Instead, we analyze MOSFETs based on their **transconductance**, which relates the change in drain current to the change in gate-source voltage.

**Key Concepts:**

*   **MOSFET:** A transistor where the gate voltage controls the conductivity of a channel between the drain and source.
*   **Voltage-Controlled Device:** The output current is controlled by the input voltage.
*   **Transconductance ($g_m$):** A measure of how effectively the gate-source voltage controls the drain current. It is defined as the change in drain current ($\Delta I_D$) divided by the change in gate-source voltage ($\Delta V_{GS}$) for a constant drain-source voltage ($V_{DS}$).

    $g_m = \frac{\Delta I_D}{\Delta V_{GS}} \quad (\text{at constant } V_{DS})$

**Textbook References:**

*   **Boylested & Nashelsky:** Chapters on Field-Effect Transistors, likely discussing the fundamental characteristics and transconductance.
*   **Sedra & Smith:** Chapters on MOSFETs, detailing their operation, $I_D$-$V_{DS}$ characteristics, and transconductance parameter.
*   **Bell:** Chapters on FETs, providing an overview of their working principles and key parameters like $g_m$.

## 2. MOSFET Current-Voltage Characteristics and Transconductance

**Understanding the Drain Current ($I_D$):**

The drain current in a MOSFET is primarily determined by the gate-source voltage ($V_{GS}$) and the device's physical characteristics. For an N-channel enhancement mode MOSFET, the drain current is approximately given by:

$I_D = K (V_{GS} - V_{TH})^2$

where:
*   $K$ is a process parameter dependent on the device geometry and material properties.
*   $V_{GS}$ is the gate-source voltage.
*   $V_{TH}$ is the threshold voltage.

**Calculating Transconductance ($g_m$):**

From the drain current equation, we can derive an expression for transconductance in the saturation region:

$g_m = \frac{dI_D}{dV_{GS}} = \frac{d}{dV_{GS}} [K (V_{GS} - V_{TH})^2]$
$g_m = 2K (V_{GS} - V_{TH})$

We can also express $g_m$ in terms of the drain current ($I_D$) in saturation:

Since $I_D = K (V_{GS} - V_{TH})^2$, then $\sqrt{I_D} = \sqrt{K} (V_{GS} - V_{TH})$.
Rearranging, $V_{GS} - V_{TH} = \frac{\sqrt{I_D}}{\sqrt{K}}$.
Substituting this into the $g_m$ equation:
$g_m = 2K \left(\frac{\sqrt{I_D}}{\sqrt{K}}\right) = 2\sqrt{K}\sqrt{I_D}$

We know that $K = \frac{I_{DS,on}}{V_{GS,on}-V_{TH}}^2$ for a specific operating point, or more generally $K = \frac{1}{2 \mu_n C_{ox} (W/L)}$.  Often, $K$ is simply expressed as $K = \frac{1}{2} \beta$, where $\beta$ is the transconductance parameter.

So, $g_m = \beta (V_{GS} - V_{TH})$.  And since $I_D = \frac{1}{2}\beta(V_{GS}-V_{TH})^2$, we have $V_{GS}-V_{TH} = \sqrt{\frac{2I_D}{\beta}}$.
Therefore, $g_m = \beta \sqrt{\frac{2I_D}{\beta}} = \sqrt{2\beta I_D}$.

**Important Points to Remember:**

*   **$g_m$ is dependent on $V_{GS}$ and $I_D$:** As the gate-source voltage changes, the transconductance also changes. This non-linearity can be important in circuit analysis.
*   **$g_m$ is proportional to $\sqrt{I_D}$:** Higher drain currents generally lead to higher transconductance.
*   **$g_m$ is proportional to the aspect ratio (W/L):** A wider or shorter channel (larger W/L ratio) results in higher transconductance.
*   **$g_m$ is proportional to mobility ($\mu_n$ or $\mu_p$) and oxide capacitance ($C_{ox}$):** These are material and fabrication dependent parameters.

**Textbook References:**

*   **Sedra & Smith:** Likely has detailed derivations of $g_m$ from the MOSFET $I_D$-$V_{DS}$ characteristics and its dependence on device parameters.
*   **Razavi:** May provide a concise and practical approach to $g_m$ calculations for analog circuit design.

## 3. MOSFETs in Amplifier Circuits: Voltage and Current Gain

While MOSFETs are voltage-controlled devices, they are used in amplifiers to increase the amplitude of an input voltage signal, which in turn results in an amplified output current. The *effective* current gain concept arises when considering the output current amplification relative to some input current, or more commonly, the voltage gain of the amplifier circuit.

**Common MOSFET Amplifier Configurations:**

1.  **Common Source (CS) Amplifier:**
    *   **Input:** Gate terminal ($V_{GS}$)
    *   **Output:** Drain terminal ($I_D$)
    *   **Voltage Gain ($A_v$):** The ratio of output voltage swing to input voltage swing.

        In the saturation region, with a drain resistor ($R_D$) and assuming no output load resistor for simplicity in initial analysis:
        $\Delta V_{out} \approx -\Delta I_D \cdot R_D$
        $\Delta V_{in} = \Delta V_{GS}$
        $A_v = \frac{\Delta V_{out}}{\Delta V_{in}} = \frac{-\Delta I_D \cdot R_D}{\Delta V_{GS}} = -g_m R_D$

        The negative sign indicates a phase inversion.

    *   **"Current Gain" (Conceptual):** If we consider an input current source driving the gate, the concept of current gain is not directly applicable. However, if we think about how the gate voltage controls a larger drain current, one might loosely refer to the amplification factor.

2.  **Common Drain (CD) / Source Follower Amplifier:**
    *   **Input:** Gate terminal ($V_{GS}$)
    *   **Output:** Source terminal ($V_S$)
    *   **Voltage Gain ($A_v$):** Close to unity, used for impedance matching.

        $A_v \approx 1$

3.  **Common Gate (CG) Amplifier:**
    *   **Input:** Source terminal ($V_S$)
    *   **Output:** Drain terminal ($I_D$)
    *   **Voltage Gain ($A_v$):** High voltage gain.

**Relating Transconductance to Voltage Gain:**

The transconductance ($g_m$) is the fundamental parameter that dictates the voltage gain of MOSFET amplifiers. A higher $g_m$ means a larger change in drain current for a given change in gate-source voltage, leading to a higher voltage gain.

**Current Gain in Specific Load Scenarios:**

*   **Driving a Resistor:** In a common-source amplifier with a drain resistor $R_D$, the output current is essentially the drain current $I_D$. If the input is considered a voltage source, the concept of current gain is not directly meaningful in the same way as BJTs.

*   **Driving another MOSFET (Cascading):** When one MOSFET drives another, the output current of the first MOSFET becomes the input signal (gate current, which is ideally zero for MOSFETs) for the second. However, the relevant parameter for the second stage's amplification is its own transconductance.

**Textbook References:**

*   **Boylested & Nashelsky:** Will have sections on common-source amplifiers and how $g_m$ relates to voltage gain.
*   **Sedra & Smith:** Comprehensive analysis of common-source, common-drain, and common-gate amplifiers, including detailed derivations of voltage gains using small-signal models.
*   **Bell:** Likely presents simplified analyses of common-source amplifiers and the role of $g_m$.

## 4. Small-Signal Analysis and Equivalent Circuits

**The Need for Small-Signal Analysis:**

To analyze amplifier behavior accurately, we use small-signal models. These models represent the transistor as a linear circuit of resistances, capacitances, and controlled sources, valid for small AC variations around a DC bias point.

**Small-Signal Model of a MOSFET:**

The basic small-signal model for a MOSFET in the saturation region includes:

*   **Transconductance ($g_m$):** A voltage-controlled current source between drain and source, with a value of $g_m v_{gs}$, where $v_{gs}$ is the small-signal gate-source voltage.
*   **Output Resistance ($r_o$):** Represents the channel-length modulation effect, which causes the drain current to change slightly with $V_{DS}$. It's a parallel resistance between drain and source.

    $r_o = \frac{V_A + V_{DS}}{I_D} \approx \frac{V_A}{I_D}$ (for $V_{DS} \ll V_A$)

    where $V_A$ is the Early voltage for MOSFETs.

**Derivation of $g_m$ and $r_o$ for Small-Signal Analysis:**

From the MOSFET $I_D$-$V_{DS}$ characteristics, we can see how $I_D$ changes with $V_{GS}$ (leading to $g_m$) and how $I_D$ changes with $V_{DS}$ at a fixed $V_{GS}$ (leading to $r_o$).

**Example: Common-Source Amplifier Small-Signal Analysis**

Consider a common-source amplifier with a drain resistor $R_D$ and a load resistor $R_L$ connected to the drain.

*   **Circuit Diagram:** Draw the small-signal equivalent circuit.
*   **Input Voltage:** $v_{in}$ applied to the gate.
*   **Gate-Source Voltage:** $v_{gs} = v_{in}$ (assuming source is AC ground).
*   **Drain Current:** $i_d = g_m v_{gs} = g_m v_{in}$.
*   **Output Voltage:** The voltage across the parallel combination of $R_D$ and $R_L$ connected to the drain.
    $v_{out} = -i_d (R_D || R_L) = -(g_m v_{in}) (R_D || R_L)$

*   **Voltage Gain ($A_v$):**
    $A_v = \frac{v_{out}}{v_{in}} = -g_m (R_D || R_L)$

**Current Gain in Small-Signal Analysis:**

In small-signal analysis, the input "current" is the gate current, which is ideally zero for a MOSFET due to the insulating oxide layer. Therefore, a direct current gain calculation like $I_{out}/I_{in}$ is not typically performed. However, the *effect* of amplification is seen in the output drain current $i_d$.

If we consider an input voltage source $v_{in}$ driving the gate of a common-source amplifier, the output current is $i_d = g_m v_{in}$. The current delivered to the load $R_L$ is $i_L = \frac{v_{out}}{R_L} = \frac{-g_m v_{in} (R_D || R_L)}{R_L}$.

The ratio of output current to the equivalent input current through a resistance (if one were present) would depend on the specific circuit configuration and input signal source. For a voltage-driven gate, it's more about the transconductance ($g_m$) and resulting voltage gain.

**Textbook References:**

*   **Sedra & Smith:** Excellent coverage of small-signal analysis and equivalent circuits for MOSFETs, with detailed derivations of $g_m$ and $r_o$.
*   **Neamen:** Likely provides a structured approach to small-signal analysis of amplifier circuits.
*   **Millman & Halkias:** Also covers small-signal models and analysis of FET amplifiers.

## 5. Practice Questions and Exercises

**Question 1:**
An N-channel enhancement mode MOSFET has the following parameters: $V_{TH} = 2V$, $K = 0.5 mA/V^2$. If the MOSFET is biased in the saturation region with $V_{GS} = 4V$, calculate:
a) The drain current ($I_D$).
b) The transconductance ($g_m$).
c) If a load resistor $R_L = 10 k\Omega$ is connected to the drain, and the MOSFET is used in a common-source configuration, what is the voltage gain ($A_v$) if we ignore $r_o$?

**Answer 1:**
a) $I_D = K (V_{GS} - V_{TH})^2 = 0.5 mA/V^2 (4V - 2V)^2 = 0.5 mA/V^2 (2V)^2 = 0.5 mA/V^2 (4V^2) = 2 mA$.
b) $g_m = 2K (V_{GS} - V_{TH}) = 2 (0.5 mA/V^2) (4V - 2V) = 1 mA/V^2 (2V) = 2 mA/V = 2 mS$.
c) $A_v = -g_m R_L = -(2 mS) (10 k\Omega) = -(2 \times 10^{-3} S) (10 \times 10^3 \Omega) = -20$.

**Question 2:**
Consider a MOSFET with $I_{DS,on} = 10 mA$ at $V_{GS,on} = 5V$. The threshold voltage is $V_{TH} = 1V$. Assume the MOSFET is operating in saturation.
a) Calculate the transconductance parameter $K$.
b) Calculate the transconductance $g_m$ when $V_{GS} = 4V$.
c) Calculate the drain current $I_D$ when $V_{GS} = 4V$.
d) Verify the relationship $g_m = \sqrt{2\beta I_D}$ where $\beta = 2K$.

**Answer 2:**
a) $I_{DS,on} = K (V_{GS,on} - V_{TH})^2 \implies 10 mA = K (5V - 1V)^2 = K (4V)^2 = 16K V^2$.
$K = \frac{10 mA}{16 V^2} = \frac{10 \times 10^{-3} A}{16 V^2} = 0.625 \times 10^{-3} A/V^2 = 0.625 mA/V^2$.
b) $g_m = 2K (V_{GS} - V_{TH}) = 2 (0.625 mA/V^2) (4V - 1V) = 1.25 mA/V^2 (3V) = 3.75 mA/V = 3.75 mS$.
c) $I_D = K (V_{GS} - V_{TH})^2 = (0.625 mA/V^2) (4V - 1V)^2 = (0.625 mA/V^2) (3V)^2 = (0.625 mA/V^2) (9V^2) = 5.625 mA$.
d) $\beta = 2K = 2 (0.625 mA/V^2) = 1.25 mA/V^2$.
$\sqrt{2\beta I_D} = \sqrt{2 (1.25 mA/V^2) (5.625 mA)} = \sqrt{2.5 mA/V^2 \times 5.625 mA} = \sqrt{14.0625 mA^2/V^2} = 3.75 mA/V = 3.75 mS$.
This matches the calculated $g_m$ in part (b).

**Question 3 (Conceptual):**
Why is the term "current gain" less directly applicable to MOSFETs compared to BJTs?

**Answer 3:**
MOSFETs are voltage-controlled devices, meaning the gate-source voltage ($V_{GS}$) controls the drain current ($I_D$). BJTs, on the other hand, are current-controlled devices, where the base current ($I_B$) controls the collector current ($I_C$). Therefore, the fundamental gain parameter for a MOSFET is transconductance ($g_m$), which relates a change in output current to a change in input voltage. For BJTs, the current gain is simply $\beta = I_C/I_B$, relating output current to input current.

## 6. Important Points to Remember

*   **MOSFETs are voltage-controlled devices.** The gate-source voltage ($V_{GS}$) controls the drain current ($I_D$).
*   **Transconductance ($g_m$) is the key parameter:** It quantifies how effectively the gate voltage controls the drain current.
*   **$g_m$ is not constant:** It varies with $V_{GS}$ and $I_D$.
*   **$g_m = 2K(V_{GS} - V_{TH}) = \sqrt{2\beta I_D}$ in saturation.**
*   **Common-Source Amplifier Voltage Gain:** $A_v \approx -g_m R_D$ (for no load and neglecting $r_o$).
*   **Small-signal analysis is essential** for accurate amplifier design, using models that include $g_m$ and $r_o$.
*   **The gate current of a MOSFET is ideally zero** in both DC and AC analysis due to the insulating oxide layer, making direct current gain calculation from input current to output current less meaningful.

## 7. Alignment with Course Outcomes

This module directly supports **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)** by providing the foundational understanding of MOSFET characteristics, transconductance, and how these parameters are used in small-signal analysis to determine amplifier performance (voltage gain). The analysis of common-source amplifiers directly relates to the design and analysis tasks specified in CO3. While this topic doesn't directly cover feedback or oscillators (CO4), power amplifiers (CO5), or BJT circuits (CO1, CO2), it lays the groundwork for understanding the amplification principles applicable across different transistor types.

This comprehensive study of current gain in MOSFETs, through the lens of transconductance and small-signal analysis, equips students with the essential knowledge and analytical skills required for designing and understanding amplifier circuits involving MOSFETs.
