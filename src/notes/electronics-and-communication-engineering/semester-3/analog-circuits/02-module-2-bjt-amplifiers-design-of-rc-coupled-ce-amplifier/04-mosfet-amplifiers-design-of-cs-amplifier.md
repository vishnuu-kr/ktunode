---
title: "MOSFET Amplifiers: Design of CS amplifier"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2e9"
status: "completed"
scrapedAt: "2026-05-23T17:44:12.230Z"
---
This is an interesting request! It asks for study notes on MOSFET CS amplifiers but places it within the context of a BJT module (Module 2: BJT Amplifiers) and aims to align with Course Outcomes that mostly focus on BJTs and other circuits. This suggests a potential "bridging" concept or a need to compare/contrast MOSFETs with BJTs, or perhaps the module intends to introduce MOSFETs as a parallel to BJT amplifiers.

Given this context, I will structure the notes to cover the design of CS amplifiers, emphasizing its parallels and differences with CE amplifiers, and also ensuring the learning outcomes are addressed as much as possible, considering the potential overlap or intended comparison.

---

# ANALOG CIRCUITS - Module 2: BJT Amplifiers (with a focus on MOSFET CS Amplifier Design)

## Topic: MOSFET Amplifiers: Design of Common Source (CS) Amplifier

**Introduction:**

While this module primarily focuses on Bipolar Junction Transistor (BJT) amplifiers, understanding Field-Effect Transistor (FET) amplifiers, particularly the Common Source (CS) amplifier, is crucial for a comprehensive understanding of analog circuits. MOSFETs offer distinct advantages over BJTs in many applications, such as higher input impedance and lower power consumption. This section will guide you through the design of a CS amplifier, drawing parallels and highlighting differences with the CE amplifier.

---

### Key Concepts and Definitions

*   **MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** A voltage-controlled device where the current flow between the source and drain is modulated by the voltage applied to the gate.
    *   **Types:** N-channel enhancement, P-channel enhancement, N-channel depletion, P-channel depletion. We will primarily focus on **N-channel enhancement mode MOSFETs** for our design.
    *   **Terminals:** Gate (G), Drain (D), Source (S), Body/Substrate (B). In many simplified analyses, the body is connected to the source.
    *   **Operating Regions:**
        *   **Cut-off Region:** $V_{GS} < V_{TH}$ (threshold voltage). No significant current flows.
        *   **Triode/Linear Region:** $V_{GS} > V_{TH}$ and $V_{DS} < V_{GS} - V_{TH}$. MOSFET acts like a voltage-controlled resistor.
        *   **Saturation Region:** $V_{GS} > V_{TH}$ and $V_{DS} \ge V_{GS} - V_{TH}$. MOSFET acts like a voltage-controlled current source. This is the desired region for amplifier operation.
*   **Common Source (CS) Amplifier:** A basic amplifier configuration where the input signal is applied to the gate, and the output signal is taken from the drain. The source terminal is common to both input and output.
*   **Transconductance ($g_m$):** The parameter that relates the change in drain current ($I_D$) to the change in gate-source voltage ($V_{GS}$) when the drain-source voltage ($V_{DS}$) is held constant.
    *   For saturation region: $g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac{2 I_D}{V_{GS} - V_{TH}}$ (for simple square-law model).
    *   Alternatively, $g_m = \sqrt{2 k_p' (W/L) I_D}$ where $k_p'$ is the process transconductance parameter and $(W/L)$ is the aspect ratio.
*   **Output Resistance ($r_o$):** The resistance looking into the drain terminal, due to the channel length modulation effect.
    *   $r_o = \frac{V_A}{I_D} = \frac{V_A + V_{DS}}{I_D}$, where $V_A$ is the Early voltage for MOSFETs.
*   **Voltage Gain ($A_v$):** The ratio of output voltage swing to input voltage swing. For a CS amplifier, it's approximately $-g_m R_L'$, where $R_L'$ is the effective load resistance.

---

### Learning Outcomes Addressed

This section aims to address the following, by drawing parallels and contrasts with BJT CE amplifiers and considering general analog circuit design principles:

*   **CO1: Design wave shaping circuits using first order RC network and diodes.**
    *   While CS amplifier design doesn't directly involve wave shaping circuits, understanding biasing and coupling/bypass capacitors in CS amplifiers utilizes RC network principles for setting the operating point and achieving AC amplification without DC offset.
*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.**
    *   This topic directly relates by providing a parallel analysis of a single-stage MOSFET amplifier using its small-signal equivalent model. The methodology is similar to BJT CE amplifier analysis.
*   **CO3: Apply the principles of feedback in the design of oscillators.**
    *   Oscillator design often relies on amplifier stages. Understanding how CS amplifiers behave in terms of gain and frequency response is fundamental to designing oscillator circuits using MOSFETs.
*   **CO4: Design power amplifiers and voltage regulator circuits.**
    *   CS amplifiers can be used as building blocks in power amplifiers and voltage regulators. Understanding their gain, output impedance, and current driving capabilities is essential.

---

### Design of a Common Source (CS) Amplifier

The design process for a CS amplifier involves selecting appropriate biasing components and transistor parameters to achieve a desired quiescent operating point (Q-point) and then determining the AC performance.

#### 1. CS Amplifier Configurations

There are several biasing configurations for CS amplifiers, similar to CE amplifiers. We will focus on the most common ones:

*   **Fixed Bias:** Simple but offers poor bias stability.
*   **Self-Biased (Source Biasing):** Provides good bias stability.
*   **Voltage Divider Biasing:** The most common and offers excellent bias stability.

We will focus on **Voltage Divider Biasing** as it is generally preferred for its stability.

#### 2. Voltage Divider Biased CS Amplifier

**Circuit Diagram:**

```
        VDD
         |
         RD
         |
  Vin --- G ----- D
        |       |
       C1     MOSFET (nMOS)
        |       |
       Rs1    S -----
        |       |   |
       Rs2      |   | BYPASS CAPACITOR (optional)
        |       |   |
       GND     RS  GND
                |
               C2
                |
               GND
```

**Key Components:**

*   **MOSFET:** An N-channel enhancement mode MOSFET (e.g., 2N7000, BS170).
*   **VDD:** DC supply voltage.
*   **RD:** Drain resistor.
*   **Rs1, Rs2:** Voltage divider resistors for biasing the gate.
*   **RS:** Source resistor (for self-biasing).
*   **C1, C2:** Coupling capacitors (block DC, pass AC).
*   **Cbypass (optional):** Bypass capacitor across RS to increase AC gain.

#### 3. Design Steps (Voltage Divider Biasing)

**Objective:** To establish a stable Q-point ($I_{DQ}$, $V_{DSQ}$) and achieve a desired voltage gain ($A_v$).

**Given Parameters:**

*   VDD
*   Desired $I_{DQ}$
*   Desired $V_{DSQ}$
*   MOSFET parameters: $V_{TH}$ (Threshold Voltage), $k_p'$ (Process Transconductance Parameter), $V_A$ (Early Voltage for MOSFETs - often assumed large or ignored in basic designs).

**Design Procedure:**

1.  **Establish Q-point:**
    *   Choose a desired drain current $I_{DQ}$.
    *   Calculate the required voltage drop across $RD$: $V_{RDQ} = I_{DQ} \times R_D$.
    *   Calculate the required drain-source voltage: $V_{DSQ} = V_{DD} - V_{RDQ} - V_{SQ}$.
    *   For operation in saturation, ensure $V_{DSQ} \ge V_{GSQ} - V_{TH}$. This is a critical check.

2.  **Determine $V_{GSQ}$:**
    *   From the MOSFET square-law model in saturation: $I_{DQ} = \frac{1}{2} k_p' \frac{W}{L} (V_{GSQ} - V_{TH})^2$.
    *   Rearrange to find $V_{GSQ}$: $V_{GSQ} = V_{TH} + \sqrt{\frac{2 I_{DQ}}{k_p' (W/L)}}$.
    *   The term $k_p' (W/L)$ is often represented by a single parameter $K_n = \frac{1}{2} k_p' \frac{W}{L}$, so $I_{DQ} = K_n (V_{GSQ} - V_{TH})^2$.
    *   **Important Note:** The $(W/L)$ ratio is a physical parameter of the MOSFET. For standard transistors, it's fixed. For custom IC design, it's chosen. If you're using a specific part like 2N7000, you might need to find its typical $K_n$ or infer it from datasheets. If not, you might iterate on $V_{GSQ}$ and check the $I_D$ calculation.

3.  **Biasing using Voltage Divider:**
    *   The gate voltage $V_G$ is set by the voltage divider $Rs1$ and $Rs2$: $V_G = V_{DD} \frac{R_{S2}}{R_{S1} + R_{S2}}$.
    *   The source voltage $V_S$ is determined by the drain current flowing through the source resistor $RS$: $V_S = I_{DQ} \times R_S$.
    *   The relationship $V_{GSQ} = V_G - V_S$ must hold.
    *   **Stability Consideration:** To ensure the gate voltage $V_G$ is relatively stable and not significantly affected by the MOSFET's input current (which is ideally zero, but leakage exists), the current through the voltage divider ($I_{divider}$) should be much larger than the gate leakage current. Typically, $I_{divider} \approx (10 \text{ to } 100) \times I_{DQ}$.
    *   Choose $Rs1$ and $Rs2$ such that $V_G = V_{GSQ} + V_{SQ} = V_{GSQ} + I_{DQ} R_S$.
    *   A common approach is to select $R_{S1} + R_{S2}$ such that the current through them is significantly larger than $I_{DQ}$.
    *   A practical approach:
        *   Calculate required $V_S = I_{DQ} \times R_S$.
        *   Then, $V_G = V_{GSQ} + V_S$.
        *   Choose $R_{S1}$ and $R_{S2}$ to create this $V_G$, while ensuring sufficient divider current. For instance, set $R_{S1} + R_{S2} = R_{series}$. Then $R_{S2} = R_{series} \times \frac{V_G}{V_{DD}}$.
        *   Alternatively, pick $R_{S1}$ and $R_{S2}$ such that $V_G$ is achieved, e.g., pick $R_{S2}$ and calculate $R_{S1} = R_{S2} \frac{V_{DD} - V_G}{V_G}$.

4.  **Select Resistor Values:**
    *   **RD:** Choose $R_D$ to meet the required $V_{RDQ}$. $R_D = \frac{V_{RDQ}}{I_{DQ}}$.
    *   **RS:** Choose $R_S$ to provide the required $V_S$. $R_S = \frac{V_S}{I_{DQ}}$. Ensure $V_{DSQ} \ge V_{GSQ} - V_{TH}$.
    *   **Rs1, Rs2:** Choose $R_{S1}$ and $R_{S2}$ for voltage division and stability. Aim for a lower total resistance ($R_{S1} || R_{S2}$) to minimize loading on the previous stage (if any) and ensure stability. Let $R_G = R_{S1} || R_{S2}$. Then $V_G = V_{DD} \frac{R_{S2}}{R_{S1} + R_{S2}}$. A common rule of thumb is to choose $R_G$ to be around $10 \times R_S$ or higher to ensure proper biasing. Then $R_{S1} = R_G + \frac{R_G R_{S2}}{R_{S2}}$, or more practically, select $R_{S2}$ and calculate $R_{S1}$.

5.  **Determine MOSFET Parameters (if not using a specific part):**
    *   If $V_{TH}$ and $k_p'$ are known, you can calculate the required $W/L$ ratio for a given $I_{DQ}$ and $V_{GSQ}$.
    *   $K_n = k_p' \frac{W}{L} = \frac{2 I_{DQ}}{(V_{GSQ} - V_{TH})^2}$. You can then choose a standard $L$ and calculate $W$.

6.  **Capacitor Selection (C1, C2, Cbypass):**
    *   Capacitors should have a low reactance ($X_C$) at the lowest frequency of interest ($f_{min}$).
    *   **Coupling Capacitors (C1, C2):** The reactance of the capacitor should be much smaller than the input impedance of the amplifier at the lowest frequency ($X_{C1} \ll R_{in}$, $X_{C2} \ll R_D$). A common rule is $X_{C1} \le \frac{1}{10} R_{in}$ and $X_{C2} \le \frac{1}{10} R_D$.
    *   **Bypass Capacitor (Cbypass):** If used, it shunts $R_S$ at AC. For effective bypassing, $X_{Cbypass} \ll R_S$. A common rule is $X_{Cbypass} \le \frac{1}{10} R_S$.
    *   For a capacitor $C$ and frequency $f$, $X_C = \frac{1}{2 \pi f C}$.

#### 4. AC Analysis and Voltage Gain

Once the Q-point is set, we analyze the AC behavior using the small-signal equivalent circuit.

**Small-Signal Equivalent Circuit:**

*   Replace MOSFET with its small-signal model:
    *   Gate: Connected to the AC input source through $C_1$. The gate terminal itself has infinite impedance (ideally).
    *   Source: Connected to ground through $R_S$ and $C_{bypass}$ (if present). If $C_{bypass}$ is present and effective, $R_S$ is shorted for AC.
    *   Drain: Connected to ground through $R_D$. An output resistance $r_o$ is in parallel with $R_D$.
    *   Gate-Source voltage: $v_{gs}$ controls a current source $g_m v_{gs}$ from Drain to Source.

**Deriving Voltage Gain ($A_v = \frac{v_{out}}{v_{in}}$):**

*   **Input Impedance ($R_{in}$):** The input impedance of the CS amplifier is extremely high (ideally infinite) due to the gate terminal of the MOSFET. In practice, it's determined by the parallel combination of $R_{S1}$ and $R_{S2}$. So, $R_{in} = R_{S1} || R_{S2} = R_G$.
*   **Output Voltage ($v_{out}$):** The output voltage is taken at the drain. The current $g_m v_{gs}$ flows through the effective load resistance $R_L' = R_D || r_o$.
    *   $v_{out} = -g_m v_{gs} (R_D || r_o)$ (The negative sign indicates phase inversion).
*   **Gate-Source Voltage ($v_{gs}$):**
    *   Assuming $C_1$ is large enough to have negligible impedance at the signal frequencies, and the bypass capacitor $C_{bypass}$ is also sufficiently large to short $R_S$, then $v_{gs} \approx v_{in}$.
    *   If $C_{bypass}$ is not used or is insufficient, then $v_{s} = i_d R_S$, where $i_d$ is the drain current. $i_d = g_m v_{gs}$. So $v_s = g_m v_{gs} R_S$.
    *   $v_{gs} = v_{in} - v_s = v_{in} - g_m v_{gs} R_S$.
    *   $v_{gs}(1 + g_m R_S) = v_{in} \Rightarrow v_{gs} = \frac{v_{in}}{1 + g_m R_S}$.
    *   The term $(1 + g_m R_S)$ effectively reduces the input signal that reaches the gate-source terminals.
*   **Voltage Gain ($A_v$):**
    *   **Case 1: With effective C_bypass:**
        $v_{gs} = v_{in}$
        $A_v = \frac{v_{out}}{v_{in}} = -g_m (R_D || r_o)$
        If $r_o$ is large, $A_v \approx -g_m R_D$.
    *   **Case 2: Without C_bypass (or ineffective C_bypass):**
        $A_v = \frac{v_{out}}{v_{in}} = \frac{-g_m (R_D || r_o)}{1 + g_m R_S}$
        If $r_o$ is large, $A_v \approx \frac{-g_m R_D}{1 + g_m R_S}$.

**Impact of C_bypass:** The bypass capacitor significantly increases the voltage gain by effectively removing the source degeneration effect of $R_S$ at AC.

#### 5. Design Example

**Problem:** Design a CS amplifier using an N-channel enhancement MOSFET with $V_{TH} = 2V$ and $K_n = \frac{1}{2} k_p' \frac{W}{L} = 2 \text{ mA/V}^2$. The amplifier should be biased at $I_{DQ} = 4 \text{ mA}$ and $V_{DSQ} = 8V$. Use a $V_{DD} = 15V$ supply. Assume $r_o$ is very large.

**Solution:**

1.  **Q-point Requirements:**
    *   $I_{DQ} = 4 \text{ mA}$
    *   $V_{DSQ} = 8V$
    *   $V_{DD} = 15V$

2.  **Determine Required Voltages:**
    *   $V_{RDQ} = V_{DD} - V_{DSQ} - V_{SQ} = 15V - 8V - V_{SQ} = 7V - V_{SQ}$.
    *   We need $V_{DSQ} \ge V_{GSQ} - V_{TH}$, so $8V \ge V_{GSQ} - 2V \Rightarrow V_{GSQ} \le 10V$.

3.  **Calculate $V_{GSQ}$ from $I_{DQ}$:**
    *   $I_{DQ} = K_n (V_{GSQ} - V_{TH})^2$
    *   $4 \text{ mA} = 2 \text{ mA/V}^2 (V_{GSQ} - 2V)^2$
    *   $(V_{GSQ} - 2V)^2 = \frac{4 \text{ mA}}{2 \text{ mA/V}^2} = 2 \text{ V}^2$
    *   $V_{GSQ} - 2V = \sqrt{2} \text{ V} \approx 1.414 \text{ V}$
    *   $V_{GSQ} = 2V + 1.414V = 3.414V$. This is less than $10V$, so it's valid.

4.  **Calculate $R_S$ and $R_D$:**
    *   We need $V_{DSQ} \ge V_{GSQ} - V_{TH}$. Let's select $V_{SQ}$ such that $V_{DSQ}$ is comfortably above the saturation voltage. A common rule is to set $V_{SQ}$ to be slightly greater than $V_{GSQ}-V_{TH}$ or to achieve a desired $V_{DSQ}$.
    *   Let's aim for $V_{DSQ} = 8V$.
    *   $V_{DSQ} = V_{DD} - I_{DQ} R_D - I_{DQ} R_S$ (assuming $I_D$ is the same for all components in series, which is true if $R_S$ isn't bypassed for DC).
    *   $8V = 15V - (4 \text{ mA}) R_D - (4 \text{ mA}) R_S$
    *   $(4 \text{ mA}) (R_D + R_S) = 7V$
    *   $R_D + R_S = \frac{7V}{4 \text{ mA}} = 1.75 \text{ k}\Omega$.

    *   Now, let's choose $R_S$ and $R_D$. We need $V_{GSQ} = V_G - V_S = V_{GSQ}$.
    *   $V_S = I_{DQ} R_S = 4 \text{ mA} \times R_S$.
    *   $V_G = V_{GSQ} + V_S = 3.414V + (4 \text{ mA}) R_S$.

    *   Let's choose $R_S = 470 \Omega$.
        *   $V_S = 4 \text{ mA} \times 470 \Omega = 1.88 \text{ V}$.
        *   Check saturation: $V_{DSQ} = V_{GSQ} - V_{TH} + V_{DS(sat)}$. We need $V_{DSQ} \ge V_{GSQ}-V_{TH} = 3.414V - 2V = 1.414V$. If we choose $R_S$ first, then $V_S$ is determined.
        *   Let's reconsider the equation: $V_{DSQ} = V_{DD} - I_{DQ} R_D - V_S$.
        *   $8V = 15V - (4 \text{ mA}) R_D - 1.88V$
        *   $(4 \text{ mA}) R_D = 15V - 8V - 1.88V = 5.12V$
        *   $R_D = \frac{5.12V}{4 \text{ mA}} = 1.28 \text{ k}\Omega$.
        *   Let's choose a standard value $R_D = 1.3 \text{ k}\Omega$. Then $V_{RDQ} = 4 \text{ mA} \times 1.3 \text{ k}\Omega = 5.2 \text{ V}$.
        *   $V_{DSQ} = V_{DD} - V_{RDQ} - V_S = 15V - 5.2V - 1.88V = 7.92V$. This is close to $8V$.

    *   With $R_S = 470 \Omega$, $V_S = 1.88V$.
    *   $V_G = V_{GSQ} + V_S = 3.414V + 1.88V = 5.294V$.

5.  **Design the Voltage Divider (Rs1, Rs2):**
    *   We need $V_G \approx 5.3V$. Let's choose $R_{S2} = 47 \text{ k}\Omega$.
    *   $V_G = V_{DD} \frac{R_{S2}}{R_{S1} + R_{S2}}$
    *   $5.3V = 15V \frac{47 \text{ k}\Omega}{R_{S1} + 47 \text{ k}\Omega}$
    *   $R_{S1} + 47 \text{ k}\Omega = \frac{15V \times 47 \text{ k}\Omega}{5.3V} \approx 133 \text{ k}\Omega$
    *   $R_{S1} \approx 133 \text{ k}\Omega - 47 \text{ k}\Omega = 86 \text{ k}\Omega$.
    *   Let's choose standard values: $R_{S1} = 82 \text{ k}\Omega$ and $R_{S2} = 47 \text{ k}\Omega$.
    *   Recalculate $V_G$: $V_G = 15V \frac{47 \text{ k}\Omega}{82 \text{ k}\Omega + 47 \text{ k}\Omega} = 15V \frac{47}{129} \approx 5.43V$.
    *   With $V_G = 5.43V$ and $V_S = 1.88V$, $V_{GSQ} = V_G - V_S = 5.43V - 1.88V = 3.55V$.
    *   Let's re-check $I_{DQ}$ with this $V_{GSQ}$: $I_{DQ} = K_n (V_{GSQ} - V_{TH})^2 = 2 \text{ mA/V}^2 (3.55V - 2V)^2 = 2 \text{ mA/V}^2 (1.55V)^2 = 2 \times 2.4025 \text{ mA} \approx 4.8 \text{ mA}$.
    *   This is slightly higher than the target $4 \text{ mA}$. We might need to adjust resistor values or the MOSFET parameter.

    *   **Alternative approach for biasing:** Choose $R_S$ first to set $V_S$. Let's aim for $V_{GSQ} = 3.414V$ as calculated.
        *   If we want $V_{DSQ} = 8V$, then $V_{SQ} = V_{DD} - V_{RDQ} - V_{DSQ}$.
        *   Also, $V_{RDQ} = I_{DQ} R_D = 4 \text{ mA} R_D$.
        *   $V_S = I_{DQ} R_S = 4 \text{ mA} R_S$.
        *   $V_{GSQ} = V_G - V_S$.
        *   Let's try to set $V_S$ so that $V_{GSQ} = 3.414V$ and $V_{DSQ} = 8V$.
        *   $V_{DSQ} = V_{DD} - I_{DQ}R_D - V_S$.
        *   $8V = 15V - (4mA)R_D - V_S$.
        *   $(4mA)R_D + V_S = 7V$.
        *   $V_G = V_{GSQ} + V_S = 3.414V + V_S$.
        *   Let's choose $R_S = 680 \Omega$.
            *   $V_S = 4 \text{ mA} \times 680 \Omega = 2.72 \text{ V}$.
            *   $(4 \text{ mA})R_D + 2.72V = 7V \Rightarrow (4 \text{ mA})R_D = 4.28V \Rightarrow R_D = 1.07 \text{ k}\Omega$. Choose $R_D = 1 \text{ k}\Omega$.
            *   $V_{RDQ} = 4 \text{ mA} \times 1 \text{ k}\Omega = 4V$.
            *   $V_{DSQ} = 15V - 4V - 2.72V = 8.28V$. This is close to $8V$.
            *   $V_G = V_{GSQ} + V_S = 3.414V + 2.72V = 6.134V$.

        *   Now design the voltage divider for $V_G \approx 6.1V$ with $R_{S1} || R_{S2} \approx 47k \Omega$ (as a starting point for good input impedance).
            *   $R_{S1} + R_{S2} = 47k \Omega \times 2 = 94 \text{ k}\Omega$ (if $R_{S1}=R_{S2}$).
            *   $6.1V = 15V \frac{R_{S2}}{R_{S1} + R_{S2}} \Rightarrow \frac{R_{S2}}{R_{S1} + R_{S2}} = \frac{6.1}{15} \approx 0.407$.
            *   $R_{S2} = 0.407 (R_{S1} + R_{S2})$. Let $R_{S1} + R_{S2} = 100k \Omega$.
            *   $R_{S2} = 0.407 \times 100k \Omega = 40.7 \text{ k}\Omega$. Choose $R_{S2} = 39 \text{ k}\Omega$.
            *   $R_{S1} = 100 \text{ k}\Omega - 39 \text{ k}\Omega = 61 \text{ k}\Omega$. Choose $R_{S1} = 56 \text{ k}\Omega$.
            *   With $R_{S1} = 56k\Omega$ and $R_{S2} = 39k\Omega$:
                $V_G = 15V \frac{39k\Omega}{56k\Omega + 39k\Omega} = 15V \frac{39}{95} \approx 6.16V$.
            *   $V_{GSQ} = V_G - V_S = 6.16V - 2.72V = 3.44V$.
            *   $I_{DQ} = 2 \text{ mA/V}^2 (3.44V - 2V)^2 = 2 \times (1.44)^2 \text{ mA} = 2 \times 2.0736 \text{ mA} \approx 4.15 \text{ mA}$. This is very close to $4 \text{ mA}$.

    *   **Final Design Choices:**
        *   MOSFET: N-channel enhancement with $V_{TH} = 2V, K_n = 2 \text{ mA/V}^2$.
        *   $R_D = 1 \text{ k}\Omega$.
        *   $R_S = 680 \Omega$.
        *   $R_{S1} = 56 \text{ k}\Omega$.
        *   $R_{S2} = 39 \text{ k}\Omega$.
        *   $V_{DD} = 15V$.

6.  **Calculate Voltage Gain (assuming effective C_bypass):**
    *   $g_m = 2K_n (V_{GSQ} - V_{TH}) = 2 \times 2 \text{ mA/V}^2 \times (3.44V - 2V) = 4 \text{ mA/V}^2 \times 1.44V = 5.76 \text{ mS}$.
    *   $A_v = -g_m (R_D || r_o)$. Since $r_o$ is assumed very large, $R_D || r_o \approx R_D = 1 \text{ k}\Omega$.
    *   $A_v = -(5.76 \text{ mS}) \times (1 \text{ k}\Omega) = -5.76$.

7.  **Capacitor Selection:**
    *   Assume the lowest frequency of interest is $f_{min} = 100 \text{ Hz}$.
    *   **Input Impedance:** $R_{in} = R_{S1} || R_{S2} = 56k || 39k = \frac{56 \times 39}{56+39} \approx 23.1 \text{ k}\Omega$.
    *   **C1:** $X_{C1} \le \frac{1}{10} R_{in} = 2.31 \text{ k}\Omega$.
        $C_1 = \frac{1}{2 \pi f_{min} X_{C1}} = \frac{1}{2 \pi (100 \text{ Hz}) (2.31 \text{ k}\Omega)} \approx 0.69 \mu F$. Choose $C_1 = 1 \mu F$.
    *   **C2:** $X_{C2} \le \frac{1}{10} R_D = 100 \Omega$.
        $C_2 = \frac{1}{2 \pi f_{min} X_{C2}} = \frac{1}{2 \pi (100 \text{ Hz}) (100 \Omega)} \approx 15.9 \mu F$. Choose $C_2 = 22 \mu F$.
    *   **Cbypass:** $X_{Cbypass} \le \frac{1}{10} R_S = \frac{1}{10} 680 \Omega = 68 \Omega$.
        $C_{bypass} = \frac{1}{2 \pi f_{min} X_{Cbypass}} = \frac{1}{2 \pi (100 \text{ Hz}) (68 \Omega)} \approx 23.4 \mu F$. Choose $C_{bypass} = 25 \mu F$ or $33 \mu F$.

#### 6. Practice Questions/Exercises

**Question 1:**
A voltage divider biased CS amplifier uses an N-channel MOSFET with $V_{TH} = 1.5V$ and $K_n = 0.5 \text{ mA/V}^2$. The circuit parameters are $V_{DD} = 12V$, $R_D = 10 \text{ k}\Omega$, $R_S = 2.2 \text{ k}\Omega$, $R_{S1} = 68 \text{ k}\Omega$, $R_{S2} = 33 \text{ k}\Omega$.
(a) Calculate the quiescent drain current ($I_{DQ}$) and drain-source voltage ($V_{DSQ}$).
(b) Calculate the transconductance ($g_m$) at the Q-point.
(c) Calculate the voltage gain ($A_v$) assuming a bypass capacitor is used and $r_o$ is large.
(d) What is the input impedance of the amplifier?

**Answer 1:**

First, calculate the gate voltage $V_G$:
$V_G = V_{DD} \frac{R_{S2}}{R_{S1} + R_{S2}} = 12V \frac{33 \text{ k}\Omega}{68 \text{ k}\Omega + 33 \text{ k}\Omega} = 12V \frac{33}{101} \approx 3.92V$.

(a) Calculate $V_S$ and $V_{GSQ}$:
We know $V_{GSQ} = V_G - V_S = V_G - I_{DQ} R_S$.
Also, $I_{DQ} = K_n (V_{GSQ} - V_{TH})^2$.
Substituting $V_{GSQ}$: $I_{DQ} = K_n (V_G - I_{DQ} R_S - V_{TH})^2$.
$I_{DQ} = 0.5 \text{ mA/V}^2 (3.92V - I_{DQ} (2.2 \text{ k}\Omega) - 1.5V)^2$
$I_{DQ} = 0.5 (2.42 - 2200 I_{DQ})^2$ (where $I_{DQ}$ is in mA, $V$ in V, $R$ in $k\Omega$).

Let's solve for $I_{DQ}$. This is a quadratic equation.
Alternatively, we can iterate or use numerical methods. Let's try some values for $I_{DQ}$:
If $I_{DQ} = 1mA$: $V_{GSQ} = 3.92 - 1 \times 2.2 = 1.72V$. $I_{DQ} = 0.5 (1.72 - 1.5)^2 = 0.5 (0.22)^2 = 0.5 \times 0.0484 = 0.0242 \text{ mA}$. Too small.

Let's use the relationship: $V_{DSQ} = V_{DD} - I_{DQ} R_D - I_{DQ} R_S$.
$V_{DSQ} = 12V - I_{DQ} (10 \text{ k}\Omega) - I_{DQ} (2.2 \text{ k}\Omega) = 12V - 12.2 \text{ k}\Omega \times I_{DQ}$.
We also need $V_{DSQ} \ge V_{GSQ} - V_{TH}$.
$V_{GSQ} = 3.92V - I_{DQ} (2.2 \text{ k}\Omega)$.
$V_{DSQ} \ge 3.92V - I_{DQ} (2.2 \text{ k}\Omega) - 1.5V = 2.42V - I_{DQ} (2.2 \text{ k}\Omega)$.

Substitute $I_{DQ} = 0.5 (V_{GSQ} - 1.5)^2$:
$12.2 \text{ k}\Omega \times 0.5 (V_{GSQ} - 1.5)^2 + V_{GSQ} = 3.92V$
$6.1 (V_{GSQ} - 1.5)^2 + V_{GSQ} = 3.92$
$6.1 (V_{GSQ}^2 - 3V_{GSQ} + 2.25) + V_{GSQ} = 3.92$
$6.1V_{GSQ}^2 - 18.3V_{GSQ} + 13.725 + V_{GSQ} = 3.92$
$6.1V_{GSQ}^2 - 17.3V_{GSQ} + 9.805 = 0$

Using the quadratic formula $V_{GSQ} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$V_{GSQ} = \frac{17.3 \pm \sqrt{(-17.3)^2 - 4(6.1)(9.805)}}{2(6.1)}$
$V_{GSQ} = \frac{17.3 \pm \sqrt{299.29 - 239.342}}{12.2} = \frac{17.3 \pm \sqrt{59.948}}{12.2} = \frac{17.3 \pm 7.74}{12.2}$

Two possible solutions:
$V_{GSQ1} = \frac{17.3 + 7.74}{12.2} = \frac{25.04}{12.2} \approx 2.05V$.
$V_{GSQ2} = \frac{17.3 - 7.74}{12.2} = \frac{9.56}{12.2} \approx 0.78V$.

Since $V_{GSQ}$ must be greater than $V_{TH} = 1.5V$ for conduction, we choose $V_{GSQ} \approx 2.05V$.

Now calculate $I_{DQ}$:
$I_{DQ} = 0.5 \text{ mA/V}^2 (2.05V - 1.5V)^2 = 0.5 \text{ mA/V}^2 (0.55V)^2 = 0.5 \times 0.3025 \text{ mA} \approx 0.151 \text{ mA}$.

Now calculate $V_{DSQ}$:
$V_{DSQ} = 12V - I_{DQ} (R_D + R_S) = 12V - 0.151 \text{ mA} (10 \text{ k}\Omega + 2.2 \text{ k}\Omega) = 12V - 0.151 \times 12.2 \text{ V} = 12V - 1.842V \approx 10.16V$.

Check saturation condition: $V_{DSQ} \ge V_{GSQ} - V_{TH}$.
$10.16V \ge 2.05V - 1.5V = 0.55V$. The condition is met.

**(a) $I_{DQ} \approx 0.151 \text{ mA}$, $V_{DSQ} \approx 10.16V$.**

(b) Calculate $g_m$:
$g_m = 2 K_n (V_{GSQ} - V_{TH}) = 2 \times 0.5 \text{ mA/V}^2 \times (2.05V - 1.5V) = 1 \text{ mA/V}^2 \times 0.55V = 0.55 \text{ mS}$.

**(b) $g_m \approx 0.55 \text{ mS}$.**

(c) Calculate voltage gain $A_v$ (with bypass capacitor, $r_o$ large):
$A_v = -g_m R_D = -(0.55 \text{ mS}) \times (10 \text{ k}\Omega) = -5.5$.

**(c) $A_v \approx -5.5$.**

(d) Input impedance:
$R_{in} = R_{S1} || R_{S2} = 68 \text{ k}\Omega || 33 \text{ k}\Omega = \frac{68 \times 33}{68 + 33} \approx 22.1 \text{ k}\Omega$.

**(d) $R_{in} \approx 22.1 \text{ k}\Omega$.**

**Question 2:**
Design a voltage divider biased CS amplifier to meet the following specifications: $V_{DD} = 18V$, desired $I_{DQ} = 5 \text{ mA}$, desired $V_{DSQ} = 9V$. Use an N-channel MOSFET with $V_{TH} = 2.5V$ and $K_n = 1.5 \text{ mA/V}^2$. Assume $r_o$ is very large.
(a) Calculate the required $V_{GSQ}$.
(b) Calculate $R_S$ and $R_D$.
(c) Design the voltage divider resistors $R_{S1}$ and $R_{S2}$ such that $R_{S1} || R_{S2} \approx 50 \text{ k}\Omega$.
(d) Calculate the voltage gain if a bypass capacitor is used.

**Answer 2:**

(a) Calculate required $V_{GSQ}$:
$I_{DQ} = K_n (V_{GSQ} - V_{TH})^2$
$5 \text{ mA} = 1.5 \text{ mA/V}^2 (V_{GSQ} - 2.5V)^2$
$(V_{GSQ} - 2.5V)^2 = \frac{5}{1.5} = 3.333 \text{ V}^2$
$V_{GSQ} - 2.5V = \sqrt{3.333} \approx 1.826V$
$V_{GSQ} = 2.5V + 1.826V = 4.326V$.

**(a) $V_{GSQ} \approx 4.33V$.**

(b) Calculate $R_S$ and $R_D$:
We need $V_{DSQ} \ge V_{GSQ} - V_{TH}$.
$V_{DSQ} = 9V$ and $V_{GSQ} - V_{TH} = 1.826V$. $9V \ge 1.826V$, condition is met.

$V_{DSQ} = V_{DD} - I_{DQ} R_D - I_{DQ} R_S$
$9V = 18V - (5 \text{ mA}) R_D - (5 \text{ mA}) R_S$
$(5 \text{ mA}) (R_D + R_S) = 9V$
$R_D + R_S = \frac{9V}{5 \text{ mA}} = 1.8 \text{ k}\Omega$.

We need to choose $R_S$ and $R_D$. Let's choose $R_S$ to provide adequate source degeneration for stability. A common choice is $V_S \approx 10\% - 20\%$ of $V_{DD}$ or such that $V_{GSQ}$ is a good fraction of $V_{DSQ}$. Let's try to set $V_S$ such that $V_{GSQ} = 4.33V$.
$V_S = I_{DQ} R_S = 5 \text{ mA} R_S$.
$V_G = V_{GSQ} + V_S = 4.33V + 5 \text{ mA} R_S$.

Let's choose $R_S = 330 \Omega$.
$V_S = 5 \text{ mA} \times 330 \Omega = 1.65V$.
$R_D = 1.8 \text{ k}\Omega - R_S = 1.8 \text{ k}\Omega - 0.33 \text{ k}\Omega = 1.47 \text{ k}\Omega$. Let's choose $R_D = 1.5 \text{ k}\Omega$.
Check $V_{DSQ}$: $V_{DSQ} = 18V - (5 \text{ mA} \times 1.5 \text{ k}\Omega) - (5 \text{ mA} \times 0.33 \text{ k}\Omega) = 18V - 7.5V - 1.65V = 8.85V$. This is close to $9V$.

**(b) $R_S = 330 \Omega$, $R_D = 1.5 \text{ k}\Omega$.**

(c) Design voltage divider resistors $R_{S1}$ and $R_{S2}$:
We need $V_G = V_{GSQ} + V_S = 4.326V + 1.65V = 5.976V$.
We want $R_{S1} || R_{S2} \approx 50 \text{ k}\Omega$.
$V_G = V_{DD} \frac{R_{S2}}{R_{S1} + R_{S2}}$
$5.976V = 18V \frac{R_{S2}}{R_{S1} + R_{S2}}$
$\frac{R_{S2}}{R_{S1} + R_{S2}} = \frac{5.976}{18} \approx 0.332$.
If $R_{S1} || R_{S2} = 50 \text{ k}\Omega$, let $R_{S1} + R_{S2} = X$.
$R_{S1} = \frac{50k X}{X - 50k}$ and $R_{S2} = \frac{50k X}{X}$.
$\frac{R_{S2}}{R_{S1} + R_{S2}} = \frac{50k}{X} = 0.332 \Rightarrow X = \frac{50k}{0.332} \approx 150.6 \text{ k}\Omega$.
Let $R_{S1} + R_{S2} = 150 \text{ k}\Omega$.
$R_{S2} = 0.332 \times 150 \text{ k}\Omega = 49.8 \text{ k}\Omega$. Choose $R_{S2} = 47 \text{ k}\Omega$.
$R_{S1} = 150 \text{ k}\Omega - 47 \text{ k}\Omega = 103 \text{ k}\Omega$. Choose $R_{S1} = 100 \text{ k}\Omega$.
Check $R_{S1} || R_{S2}$: $100k || 47k = \frac{100 \times 47}{100 + 47} \approx 32 \text{ k}\Omega$. This is not $50 \text{ k}\Omega$.

Let's redo using the ratio:
$\frac{R_{S2}}{R_{S1}} = \frac{0.332}{1 - 0.332} = \frac{0.332}{0.668} \approx 0.497$. So $R_{S1} \approx 2 R_{S2}$.
If $R_{S1} || R_{S2} = 50 \text{ k}\Omega$: $\frac{R_{S1} R_{S2}}{R_{S1} + R_{S2}} = 50 \text{ k}\Omega$.
Substitute $R_{S1} = 2 R_{S2}$: $\frac{(2R_{S2}) R_{S2}}{2R_{S2} + R_{S2}} = \frac{2 R_{S2}^2}{3 R_{S2}} = \frac{2}{3} R_{S2} = 50 \text{ k}\Omega$.
$R_{S2} = \frac{3}{2} \times 50 \text{ k}\Omega = 75 \text{ k}\Omega$. Choose $R_{S2} = 68 \text{ k}\Omega$ or $82 \text{ k}\Omega$.
If $R_{S2} = 68 \text{ k}\Omega$, then $R_{S1} = 2 \times 68 \text{ k}\Omega = 136 \text{ k}\Omega$. Choose $R_{S1} = 130 \text{ k}\Omega$ or $150 \text{ k}\Omega$.
Let's try $R_{S1} = 150 \text{ k}\Omega$ and $R_{S2} = 75 \text{ k}\Omega$.
$R_{S1} || R_{S2} = \frac{150 \times 75}{150 + 75} = \frac{11250}{225} = 50 \text{ k}\Omega$.
$V_G = 18V \frac{75k}{150k + 75k} = 18V \frac{75}{225} = 18V \times \frac{1}{3} = 6V$.
$V_{GSQ} = V_G - V_S = 6V - 1.65V = 4.35V$. This is very close to the required $4.33V$.

**(c) $R_{S1} = 150 \text{ k}\Omega$, $R_{S2} = 75 \text{ k}\Omega$.**

(d) Calculate voltage gain:
$g_m = 2 K_n (V_{GSQ} - V_{TH}) = 2 \times 1.5 \text{ mA/V}^2 \times (4.35V - 2.5V) = 3 \text{ mA/V}^2 \times 1.85V = 5.55 \text{ mS}$.
$A_v = -g_m R_D = -(5.55 \text{ mS}) \times (1.5 \text{ k}\Omega) = -8.325$.

**(d) $A_v \approx -8.33$.**

---

### Important Points to Remember

*   **MOSFET vs. BJT:**
    *   **Input Impedance:** MOSFETs have extremely high input impedance (gate current is virtually zero), while BJTs have moderate input impedance (base current is non-zero). This makes MOSFETs preferable for high-impedance applications.
    *   **Control:** MOSFETs are voltage-controlled devices (gate-source voltage controls drain current), whereas BJTs are current-controlled devices (base current controls collector current).
    *   **$g_m$ Calculation:** For MOSFETs, $g_m$ depends on $I_D$ and $V_{GS}-V_{TH}$. For BJTs, $g_m$ depends on $I_C$.
    *   **$r_o$:** Both devices have an output resistance due to channel length modulation (MOSFET) or Early effect (BJT).
*   **Saturation Region:** Ensure the MOSFET operates in the saturation region ($V_{DS} \ge V_{GS} - V_{TH}$) for amplifier operation.
*   **Voltage Divider Stability:** The current through the voltage divider resistors ($R_{S1}, R_{S2}$) should be significantly larger than the gate leakage current for stable biasing.
*   **Bypass Capacitor:** The bypass capacitor ($C_{bypass}$) is crucial for achieving high AC voltage gain in CS amplifiers by eliminating source degeneration. Without it, the gain is reduced by the factor $(1 + g_m R_S)$.
*   **Phase Inversion:** Like the CE amplifier, the CS amplifier exhibits phase inversion between the input and output signals.
*   **Input Impedance of CS:** The input impedance is determined by the biasing resistors ($R_{S1}||R_{S2}$), not the MOSFET itself.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbooks and Reference Integration

*   **Boylestad & Nashelsky:** Provides fundamental understanding of semiconductor devices, including MOSFETs, and their characteristics. Concepts like Q-point analysis and small-signal models are well-covered, applicable to both BJTs and MOSFETs.
*   **Sedra & Smith:** Offers a detailed treatment of FETs and their amplifier configurations. The design procedures, small-signal models, and gain analysis for CS amplifiers are extensively discussed, often with a more rigorous mathematical approach than Boylestad. Chapter 7 (MOSFETs and their Applications) and Chapter 8 (FET Amplifiers) are highly relevant.
*   **Bogart, Beasley, & Rico:** Covers MOSFET fundamentals and amplifier design in a practical manner, likely including bias stabilization techniques and the impact of parameters like $V_{TH}$ and $K_n$.

This study note integrates concepts of MOSFET operation, biasing techniques (especially voltage divider biasing analogous to voltage divider biasing in CE amplifiers), small-signal analysis to derive gain, and component selection for capacitors, drawing from the principles taught in these standard textbooks. The comparison with BJT CE amplifiers is implicit through the similar design methodologies and the focus on achieving a stable Q-point and predictable AC performance.

---
This concludes the study notes for MOSFET CS Amplifier Design within the context of BJT amplifier module. Remember to consult your textbooks for more in-depth derivations and additional examples.