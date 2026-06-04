---
title: "MOSFETs - MOSFET as an amplifier"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8a"
status: "completed"
scrapedAt: "2026-05-23T16:18:46.029Z"
---
## SOLID STATE DEVICES: Module 3: MOSFETs - MOSFET as an Amplifier

This module focuses on understanding the MOSFET as an active component for amplification. We will explore its operational characteristics and how to configure it to achieve signal amplification. This knowledge is crucial for designing various electronic circuits.

**Course Outcome Alignment:** This module directly addresses **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**.

**Learning Outcomes:**

*   Understand the fundamental principles of MOSFET amplification.
*   Analyze MOSFETs in different operating regions for amplification.
*   Derive and understand the small-signal model of a MOSFET.
*   Analyze common MOSFET amplifier configurations (Common Source, Common Drain, Common Gate).
*   Understand the impact of device parameters on amplifier performance.
*   Design simple MOSFET amplifier circuits for specific gain and frequency response requirements.

---

### 1. Introduction to MOSFET Amplification

*   **Amplification:** The process of increasing the amplitude of a signal using an active electronic device.
*   **MOSFET as an Amplifier:** The MOSFET, due to its voltage-controlled nature and high input impedance, is an excellent choice for amplifying signals. Its amplification capability stems from the ability of a small change in gate-source voltage ($v_{GS}$) to control a larger change in drain current ($i_D$).

**Key Concept:** The MOSFET operates in the **saturation region** for active amplification. In this region, the drain current is primarily controlled by the gate-source voltage and is largely independent of the drain-source voltage.

**Textbook Reference:**
*   **Boylested & Nashelsky:** Discusses the fundamental amplifying action of transistors, including MOSFETs, emphasizing the transfer characteristic and the saturation region.
*   **Sedra & Smith:** Provides a detailed analysis of the MOSFET as a voltage-controlled current source, which is the foundation for its amplifying capabilities.

---

### 2. MOSFET Operating Regions for Amplification

*   **Cutoff Region:** The MOSFET is OFF. No significant drain current flows. Not suitable for amplification.
*   **Triode (Ohmic) Region:** The drain current is controlled by both $v_{GS}$ and $v_{DS}$. Acts like a voltage-controlled resistor. Not ideal for linear amplification as the output is not directly proportional to the input voltage over a wide range.
*   **Saturation Region:** The drain current is primarily controlled by $v_{GS}$ and is relatively independent of $v_{DS}$ (for ideal MOSFETs). This is the region where linear amplification is achieved.

**Important Point:** For linear amplification, the MOSFET must be biased in the **saturation region**.

**Visual Aid:** Refer to the $I_D$ vs. $V_{DS}$ characteristic curves for a MOSFET. The saturation region is typically characterized by curves that flatten out as $V_{DS}$ increases beyond a certain point (saturation voltage, $V_{DS(sat)}$).

---

### 3. The MOSFET Small-Signal Model

To analyze amplifier circuits quantitatively, we use a small-signal model. This model represents the MOSFET's behavior for small variations (AC signals) around its DC operating point (biasing).

#### 3.1 DC Biasing

Before applying an AC signal, the MOSFET needs to be biased in the saturation region to establish a stable DC operating point (Q-point). This involves setting appropriate DC voltages and currents to ensure the device operates linearly. Common biasing techniques include:

*   **Fixed Bias:** Simple but provides poor stability.
*   **Self-Bias (Source Bias):** Uses a source resistor ($R_S$) for negative feedback, improving stability.
*   **Voltage Divider Bias:** Offers the best stability.
*   **Drain-Feedback Bias:** Uses a resistor from drain to gate.

**Key Concept:** The Q-point ($I_{DQ}$, $V_{GSQ}$, $V_{DSQ}$) determines the operating conditions for small-signal amplification.

**Textbook Reference:**
*   **Bell:** Explains various biasing techniques for MOSFETs and their stability considerations.
*   **Neamen:** Provides a thorough analysis of MOSFET biasing circuits and the impact of biasing on amplifier performance.

#### 3.2 Small-Signal Parameters

In the saturation region, the drain current can be approximated as:
$I_D = K (V_{GS} - V_{th})^2$ (for ideal MOSFET)

For small variations around the DC operating point ($v_{gs} = v_{GS} - V_{GSQ}$, $i_d = I_D - I_{DQ}$):

*   **Transconductance ($g_m$):** This parameter relates the AC drain current to the AC gate-source voltage.
    $g_m = \frac{\partial I_D}{\partial V_{GS}} \bigg|_{V_{DS}=const., \text{Q-point}}$
    For the square-law model:
    $g_m = 2K(V_{GSQ} - V_{th}) = 2 \sqrt{K I_{DQ}}$
    The AC drain current is then: $i_d = g_m v_{gs}$

*   **Output Conductance ($g_o$):** This parameter accounts for the dependence of drain current on drain-source voltage in the saturation region, due to channel length modulation.
    $g_o = \frac{\partial I_D}{\partial V_{DS}} \bigg|_{V_{GS}=const., \text{Q-point}}$
    For a MOSFET with channel length modulation, the drain current equation becomes:
    $I_D = K (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$
    Where $\lambda$ is the channel length modulation parameter.
    $g_o = \lambda I_{DQ} = \frac{I_{DQ}}{V_A}$
    Where $V_A = 1/\lambda$ is the Early voltage.
    The output resistance ($r_o$) is the reciprocal of output conductance: $r_o = 1/g_o$.

**Important Point:** $g_m$ is a crucial parameter for amplification. A higher $g_m$ generally leads to higher voltage gain.

#### 3.3 The Small-Signal Equivalent Circuit

The small-signal equivalent circuit of a MOSFET operating in saturation consists of:

*   A **voltage-controlled current source** between drain and source, with a value of $g_m v_{gs}$.
*   A **resistance $r_o$** (output resistance) in parallel with the current source, between drain and source.
*   The gate-source terminals are essentially open for AC signals (high input impedance).

**(Diagram of the small-signal equivalent circuit of an N-channel enhancement MOSFET in saturation is highly recommended here. It shows the gate, drain, and source terminals with the controlled current source and output resistance.)**

**Textbook Reference:**
*   **Sedra & Smith:** Provides a comprehensive derivation of the MOSFET small-signal model, including the roles of $g_m$ and $r_o$.
*   **Bell:** Presents the small-signal model in a clear and understandable manner with practical examples.
*   **Razavi:** Delves into the physical origins of the small-signal parameters and their dependence on device geometry.

---

### 4. Common MOSFET Amplifier Configurations

These are the basic building blocks for MOSFET amplifier circuits. We analyze them using the small-signal model.

#### 4.1 Common Source (CS) Amplifier

*   **Configuration:** Input signal applied to the gate, output taken from the drain, source is common (usually connected to ground through a resistor or bypass capacitor).
*   **Characteristics:**
    *   **High Input Impedance:** Due to the FET structure (gate is insulated).
    *   **High Voltage Gain:** Can achieve significant voltage gain.
    *   **Phase Inversion:** The output voltage is typically 180 degrees out of phase with the input voltage.
    *   **Moderate Output Impedance:** Depends on the load resistor and $r_o$.

*   **Analysis:**
    *   **Voltage Gain ($A_v = v_o / v_{in}$):**
        For a purely resistive load ($R_L$) connected to the drain:
        $A_v = -g_m (R_D || R_L)$
        Where $R_D$ is the drain resistor. The negative sign indicates phase inversion.
        If $r_o$ is considered:
        $A_v = -g_m (r_o || R_D || R_L)$

    *   **Input Impedance ($Z_{in}$):** Ideally infinite, practically determined by the biasing resistors connected to the gate. For a simple common source with no gate resistors, $Z_{in} \approx \infty$. If gate bias resistors are present, $Z_{in}$ is the parallel combination of these resistors.

    *   **Output Impedance ($Z_{out}$):** The output impedance looking back into the drain terminal is $r_o || R_D$.

*   **Example:** Consider a common source amplifier with a MOSFET having $g_m = 2$ mS, $r_o = 100$ k$\Omega$. The circuit has a drain resistor $R_D = 10$ k$\Omega$ and is connected to a load resistor $R_L = 10$ k$\Omega$.
    $A_v = -g_m (r_o || R_D || R_L) = -2 \text{ mS} (100 \text{ k}\Omega || 10 \text{ k}\Omega || 10 \text{ k}\Omega)$
    $r_o || R_D || R_L = \frac{1}{\frac{1}{100 \text{ k}\Omega} + \frac{1}{10 \text{ k}\Omega} + \frac{1}{10 \text{ k}\Omega}} = \frac{1}{0.1 \text{ mS} + 0.1 \text{ mS} + 0.1 \text{ mS}} = \frac{1}{0.3 \text{ mS}} \approx 3.33 \text{ k}\Omega$
    $A_v = -2 \text{ mS} \times 3.33 \text{ k}\Omega \approx -6.66$

**Textbook Reference:**
*   **Boylested & Nashelsky:** Provides detailed analysis and examples of the common source amplifier, including the calculation of gain, input, and output impedance.
*   **Sedra & Smith:** Offers a comprehensive treatment of all three amplifier configurations with a focus on small-signal analysis.

#### 4.2 Common Drain (CD) Amplifier (Source Follower)

*   **Configuration:** Input signal applied to the gate, output taken from the source, drain is common (usually connected to $V_{DD}$ or a bias voltage).
*   **Characteristics:**
    *   **High Input Impedance:** Similar to common source.
    *   **Low Output Impedance:** Excellent for driving loads that require significant current.
    *   **Voltage Gain:** Approximately unity ($A_v \approx 1$), with a slight voltage drop. No phase inversion.
    *   **Current Gain:** High current gain.

*   **Analysis:**
    *   **Voltage Gain ($A_v = v_o / v_{in}$):**
        For a load resistor $R_S$ connected to the source:
        $A_v = \frac{g_m R_S}{1 + g_m R_S}$ (approximately, neglecting $r_o$)
        When $r_o$ is considered:
        $A_v = \frac{g_m (r_o || R_S)}{1 + g_m (r_o || R_S)}$
        This gain is always less than 1.

    *   **Input Impedance ($Z_{in}$):** Ideally infinite, practically determined by gate bias resistors.

    *   **Output Impedance ($Z_{out}$):** The output impedance looking back into the source terminal is approximately:
        $Z_{out} \approx \frac{1}{g_m} || R_S$

*   **Application:** Used as a buffer stage to match high output impedance sources to low impedance loads.

**Textbook Reference:**
*   **Bell:** Explains the concept of "impedance matching" and the role of the source follower in achieving it.
*   **Millman & Halkias:** Discusses the source follower as a voltage follower and its applications.

#### 4.3 Common Gate (CG) Amplifier

*   **Configuration:** Input signal applied to the source, output taken from the drain, gate is common (usually AC grounded).
*   **Characteristics:**
    *   **Low Input Impedance:** The gate being AC grounded makes the input impedance low.
    *   **High Voltage Gain:** Similar to common source amplifier.
    *   **No Phase Inversion:** The output voltage is in phase with the input voltage.
    *   **High Output Impedance:** Typically higher than common source.

*   **Analysis:**
    *   **Voltage Gain ($A_v = v_o / v_{in}$):**
        For a load resistor $R_D$ connected to the drain:
        $A_v = g_m (R_D || r_o)$
        The gain is positive, indicating no phase inversion.

    *   **Input Impedance ($Z_{in}$):**
        $Z_{in} \approx \frac{1}{g_m}$ (very low)

    *   **Output Impedance ($Z_{out}$):**
        $Z_{out} \approx R_D || r_o$

*   **Application:** Used in high-frequency applications and as current buffers.

**Textbook Reference:**
*   **Sedra & Smith:** Provides a detailed analysis of the common gate configuration, highlighting its unique characteristics.
*   **Rashid:** Discusses the common gate amplifier in the context of broadband amplifiers and impedance matching.

---

### 5. Impact of Device Parameters on Amplifier Performance

*   **Transconductance ($g_m$):**
    *   **Higher $g_m$:** Leads to higher voltage gain in common source and common gate amplifiers.
    *   **Higher $g_m$:** Leads to a voltage gain closer to unity in common drain amplifiers.
    *   $g_m$ is proportional to $\sqrt{I_{DQ}}$ and $W/L$ ratio. Thus, biasing current and device geometry are critical.

*   **Output Resistance ($r_o$):**
    *   **Higher $r_o$:** Increases voltage gain in common source and common gate amplifiers by increasing the effective load resistance.
    *   **Higher $r_o$:** Improves the voltage gain of the common drain amplifier (though the gain remains less than 1).
    *   $r_o$ is inversely proportional to $I_{DQ}$ and $\lambda$ (channel length modulation). Longer channel lengths generally result in higher $r_o$.

*   **Channel Length Modulation ($\lambda$):**
    *   **Larger $\lambda$:** Decreases $r_o$, reducing amplifier gain.
    *   **Smaller $\lambda$:** Increases $r_o$, improving amplifier gain.

*   **Load Resistance ($R_L$ or $R_S$ or $R_D$):**
    *   Determines the overall gain and output impedance of the amplifier.
    *   Choosing appropriate load resistors is crucial for achieving desired performance.

*   **Bypass Capacitors:**
    *   In common source and common drain amplifiers, a bypass capacitor ($C_S$) is often placed in parallel with the source resistor ($R_S$) to increase the AC gain. Without the bypass capacitor, the source resistor provides negative feedback, reducing the gain.
    *   The size of the bypass capacitor determines the lower cutoff frequency of the amplifier's frequency response.

**Important Point:** To maximize voltage gain in CS and CG amplifiers, choose MOSFETs with high $g_m$ and high $r_o$, and use a large load resistance. To achieve high input impedance and low output impedance, the CD amplifier is preferred.

---

### 6. Design of Simple MOSFET Amplifier Circuits

The design process involves selecting a suitable amplifier configuration and biasing scheme to meet specified performance requirements (e.g., voltage gain, input/output impedance).

**Design Steps (General Approach):**

1.  **Choose Amplifier Configuration:** Based on desired characteristics (e.g., high gain -> CS, impedance matching -> CD).
2.  **Select Biasing Scheme:** Choose a stable biasing method (e.g., voltage divider bias).
3.  **Determine DC Operating Point (Q-point):**
    *   Choose a desired $I_{DQ}$ (impacts $g_m$, $r_o$, power consumption).
    *   Choose a desired $V_{GSQ}$ (impacts $g_m$).
    *   Ensure the MOSFET operates in saturation: $V_{DSQ} \ge V_{GSQ} - V_{th}$.
4.  **Calculate Biasing Resistors:** Use the chosen biasing circuit equations to determine the values of resistors ($R_G, R_D, R_S$) to establish the Q-point.
5.  **Calculate Small-Signal Parameters:** From the Q-point, calculate $g_m$ and $r_o$.
6.  **Calculate AC Performance Metrics:** Using the small-signal model and the calculated $g_m$ and $r_o$, determine the voltage gain, input impedance, and output impedance.
7.  **Select Load Resistor:** Choose $R_L$ (or $R_D, R_S$) to achieve the desired gain.
8.  **Consider Frequency Response:** If required, select bypass capacitors and coupling capacitors for desired frequency response.

**Example Design Problem:**

Design a common-source amplifier using an NMOS transistor with the following parameters:
*   $V_{th} = 1.5$ V
*   $K = 0.5$ mA/V$^2$ (assume $\lambda = 0$ for simplicity)
*   Desired DC drain current $I_{DQ} = 2$ mA
*   Desired voltage gain $|A_v| = 10$
*   Load resistor $R_L = 5$ k$\Omega$
*   Power supply $V_{DD} = 15$ V

**Solution Steps:**

1.  **Q-point:**
    *   $I_{DQ} = 2$ mA (given)
    *   $V_{GSQ} - V_{th} = \sqrt{I_{DQ}/K} = \sqrt{2 \text{ mA} / 0.5 \text{ mA/V}^2} = \sqrt{4 \text{ V}^2} = 2$ V
    *   $V_{GSQ} = V_{th} + 2$ V $= 1.5$ V $+ 2$ V $= 3.5$ V

2.  **Small-Signal Parameter:**
    *   $g_m = 2 \sqrt{K I_{DQ}} = 2 \sqrt{0.5 \text{ mA/V}^2 \times 2 \text{ mA}} = 2 \sqrt{1 \text{ m}^2\text{A}^2/\text{V}^2} = 2 \times 1$ mS $= 2$ mS

3.  **Drain Resistor ($R_D$):**
    *   We need $|A_v| = g_m (R_D || R_L) = 10$.
    *   $2 \text{ mS} (R_D || 5 \text{ k}\Omega) = 10$
    *   $R_D || 5 \text{ k}\Omega = \frac{10}{2 \text{ mS}} = 5 \text{ k}\Omega$
    *   Let $R_{eq} = R_D || 5 \text{ k}\Omega$.
    *   $\frac{R_D \times 5 \text{ k}\Omega}{R_D + 5 \text{ k}\Omega} = 5 \text{ k}\Omega$
    *   $5 R_D = 5 (R_D + 5)$
    *   $5 R_D = 5 R_D + 25$
    *   This implies $R_D$ needs to be very large. Let's re-evaluate the gain equation. The gain is $-\text{g}_\text{m} (\text{R}_\text{D} \parallel \text{R}_\text{L})$.
    *   So, we need $g_m (R_D || R_L) = 10$.
    *   $2 \text{ mS} (R_D || 5 \text{ k}\Omega) = 10$
    *   $R_D || 5 \text{ k}\Omega = 5 \text{ k}\Omega$
    *   This requires $R_D$ to be significantly larger than $5 \text{ k}\Omega$ for the parallel combination to be $5 \text{ k}\Omega$. Let's choose $R_D = 10$ k$\Omega$.
    *   $10 \text{ k}\Omega || 5 \text{ k}\Omega = \frac{10 \times 5}{10 + 5} = \frac{50}{15} \approx 3.33 \text{ k}\Omega$
    *   Gain with $R_D = 10$ k$\Omega$: $A_v = -2 \text{ mS} \times 3.33 \text{ k}\Omega \approx -6.66$. This is not 10.

    *   Let's solve for $R_D$ more directly:
        $R_D || 5 \text{ k}\Omega = 5 \text{ k}\Omega$
        $\frac{R_D \times 5}{R_D + 5} = 5$ (in k$\Omega$)
        $5 R_D = 5 R_D + 25$
        This still indicates an issue with the desired gain for the given $R_L$. If $R_L$ is the only load, and the amplifier is designed with a drain resistor $R_D$, the gain is $-g_m (R_D || R_L)$.

    *   **Let's assume $R_L$ is the effective load resistance connected to the drain, and the drain resistor $R_D$ is part of the amplifier biasing.**
    *   We need the effective resistance seen by the drain to be $5 \text{ k}\Omega$.
    *   Let the total drain resistance be $R_{D,total} = R_D || R_L$.
    *   $|A_v| = g_m R_{D,total} = 10$
    *   $2 \text{ mS} \times R_{D,total} = 10$
    *   $R_{D,total} = \frac{10}{2 \text{ mS}} = 5 \text{ k}\Omega$.
    *   So, the parallel combination of $R_D$ and $R_L$ should be $5 \text{ k}\Omega$.
    *   $R_D || R_L = 5 \text{ k}\Omega$. Since $R_L = 5 \text{ k}\Omega$, this means $R_D$ must be effectively infinite (or very large compared to $5 \text{ k}\Omega$). Let's choose $R_D = 20$ k$\Omega$ to be safe for biasing calculations.

4.  **Biasing Resistors (using voltage divider bias as an example, assuming the gate is connected to $V_{DD}$ through resistors):**
    *   For simplicity, let's assume a fixed bias where the gate is directly connected to a bias voltage $V_{GSQ} = 3.5$ V. This isn't a practical biasing method for stability, but it simplifies the resistor calculation for this example.
    *   To get $I_{DQ} = 2$ mA and $V_{GSQ} = 3.5$ V, and $R_D = 20$ k$\Omega$:
    *   The voltage drop across $R_D$ is $V_{RD} = I_{DQ} R_D = 2 \text{ mA} \times 20 \text{ k}\Omega = 40$ V. This is not feasible with $V_{DD} = 15$ V.

    *   **Let's redesign the problem with a more realistic approach for biasing.**
    *   **Assume we use voltage divider bias:** $R_{G1}, R_{G2}$ to set $V_{GSQ}$, and $R_S$ to set $I_{DQ}$.
    *   We need $V_{GSQ} = 3.5$ V and $I_{DQ} = 2$ mA.
    *   Let's pick $R_S = 1$ k$\Omega$. Then $V_{SQ} = I_{DQ} R_S = 2 \text{ mA} \times 1 \text{ k}\Omega = 2$ V.
    *   To achieve $V_{GSQ} = 3.5$ V, the gate voltage $V_G$ must be $V_G = V_{GSQ} + V_{SQ} = 3.5 \text{ V} + 2 \text{ V} = 5.5$ V.
    *   Now, set up the voltage divider for $V_G = 5.5$ V from $V_{DD} = 15$ V.
        $V_G = V_{DD} \frac{R_{G2}}{R_{G1} + R_{G2}} = 15 \frac{R_{G2}}{R_{G1} + R_{G2}} = 5.5$ V.
        A common choice is $R_{G1} = R_{G2}$, which gives $V_G = V_{DD}/2 = 7.5$ V. To get 5.5 V, we can choose $R_{G1} \approx 150$ k$\Omega$ and $R_{G2} \approx 55$ k$\Omega$. Let's use $R_{G1} = 100$ k$\Omega$ and $R_{G2} = 37$ k$\Omega$ (approx). For simplicity, let's aim for a higher $V_{GSQ}$ if needed by adjusting $R_S$.

    *   **Let's try to set $I_{DQ}$ by selecting $V_{GSQ}$ and $R_D$.**
    *   Let's target $V_{DSQ}$ first. For saturation, $V_{DSQ} \ge V_{GSQ} - V_{th}$. Let's aim for $V_{DSQ} \approx V_{GSQ}$.
    *   $V_{DD} - I_{DQ} R_D \approx V_{GSQ}$
    *   $15 - (2 \text{ mA}) R_D \approx 3.5$ V
    *   $15 - 3.5 = 2 R_D$
    *   $11.5 = 2 R_D$
    *   $R_D = 5.75$ k$\Omega$. Let's choose $R_D = 5.6$ k$\Omega$.
    *   With $R_D = 5.6$ k$\Omega$, $V_{DSQ} = 15 - (2 \text{ mA} \times 5.6 \text{ k}\Omega) = 15 - 11.2 = 3.8$ V.
    *   This is greater than $V_{GSQ} - V_{th} = 3.5 - 1.5 = 2$ V, so it's in saturation.

    *   Now, let's connect the load resistor $R_L = 5$ k$\Omega$ to the drain.
    *   The effective load is $R_{D,eff} = R_D || R_L = 5.6 \text{ k}\Omega || 5 \text{ k}\Omega = \frac{5.6 \times 5}{5.6 + 5} = \frac{28}{10.6} \approx 2.64$ k$\Omega$.
    *   The voltage gain is $|A_v| = g_m R_{D,eff} = 2 \text{ mS} \times 2.64 \text{ k}\Omega \approx 5.28$. This is still not 10.

    *   **To achieve a gain of 10 with $R_L = 5$ k$\Omega$ and $g_m = 2$ mS, we need $R_{D,eff} = 5$ k$\Omega$.**
    *   This means $R_D || R_L = 5 \text{ k}\Omega$. If $R_L = 5 \text{ k}\Omega$, then $R_D$ must be much larger than $5 \text{ k}\Omega$. Let's set $R_D = 25$ k$\Omega$.
    *   If $R_D = 25$ k$\Omega$, then $V_{DSQ} = 15 - (2 \text{ mA} \times 25 \text{ k}\Omega) = 15 - 50$ V. This is not possible.

    *   **The problem statement implies that $R_L$ is a separate load, and $R_D$ is the drain resistor for biasing.** The gain is $A_v = -g_m(R_D || R_L)$.
    *   Let's retry to satisfy $g_m (R_D || R_L) = 10$.
    *   $2 \text{ mS} (R_D || 5 \text{ k}\Omega) = 10$
    *   $R_D || 5 \text{ k}\Omega = 5 \text{ k}\Omega$. This means $R_D$ must be large. Let $R_D = 25$ k$\Omega$.
    *   Now, let's check biasing with $R_D = 25$ k$\Omega$, $I_{DQ} = 2$ mA, $V_{GSQ} = 3.5$ V, $V_{th} = 1.5$ V.
    *   $V_{DSQ} = V_{DD} - I_{DQ} R_D = 15 \text{ V} - (2 \text{ mA} \times 25 \text{ k}\Omega) = 15 \text{ V} - 50 \text{ V} = -35$ V. This is not possible. The drain resistor must be smaller.

    *   **There seems to be a conflict in the desired gain and the power supply for this specific MOSFET.**
    *   Let's assume the question wants us to design the biasing to achieve the Q-point, and then the gain is what it is. Or, we can adjust the MOSFET parameters or supply voltage.

    *   **Let's assume the gain requirement is the primary goal and try to find parameters.**
    *   To get a gain of 10 with $g_m=2$ mS and $R_L=5$ k$\Omega$, we need $R_D || R_L = 5$ k$\Omega$.
    *   This requires $R_D$ to be very large. This leads to a large voltage drop across $R_D$ which might not be feasible with a limited $V_{DD}$.

    *   **Let's try a different approach for the example: focus on biasing and then calculate gain.**
    *   **Design Goal:** Biased for $I_{DQ} = 2$ mA, $V_{GSQ} = 3.5$ V, $V_{th} = 1.5$ V. $V_{DD} = 15$ V.
    *   Use voltage divider bias.
    *   Choose $R_S = 1$ k$\Omega$. This sets $V_{SQ} = I_{DQ} R_S = 2 \text{ mA} \times 1 \text{ k}\Omega = 2$ V.
    *   Gate voltage $V_G = V_{GSQ} + V_{SQ} = 3.5 \text{ V} + 2 \text{ V} = 5.5$ V.
    *   To achieve $V_G = 5.5$ V from $V_{DD} = 15$ V, use $R_{G1}, R_{G2}$.
        $V_G = 15 \frac{R_{G2}}{R_{G1} + R_{G2}} = 5.5$. Let $R_{G1} = 100$ k$\Omega$.
        $5.5 = 15 \frac{R_{G2}}{100 + R_{G2}}$
        $5.5 (100 + R_{G2}) = 15 R_{G2}$
        $550 + 5.5 R_{G2} = 15 R_{G2}$
        $550 = 9.5 R_{G2}$
        $R_{G2} \approx 57.9$ k$\Omega$. Let's use $R_{G2} = 56$ k$\Omega$.

    *   Now, choose $R_D$ such that $V_{DSQ} \ge V_{GSQ} - V_{th} = 2$ V.
        $V_{DSQ} = V_{DD} - I_{DQ} R_D - V_{SQ}$
        $V_{DSQ} = 15 \text{ V} - (2 \text{ mA} \times R_D) - 2 \text{ V} = 13 \text{ V} - 2 R_D$.
        We need $13 - 2 R_D \ge 2$.
        $11 \ge 2 R_D$
        $R_D \le 5.5$ k$\Omega$.
    *   Let's choose $R_D = 4.7$ k$\Omega$.
    *   Then $V_{DSQ} = 13 \text{ V} - 2 \times 4.7 \text{ k}\Omega = 13 - 9.4 = 3.6$ V. This is greater than 2 V, so it's in saturation.
    *   The biasing resistors are: $R_{G1} = 100$ k$\Omega$, $R_{G2} = 56$ k$\Omega$, $R_S = 1$ k$\Omega$, $R_D = 4.7$ k$\Omega$.

    *   **Now calculate the voltage gain with $R_L = 5$ k$\Omega$.**
    *   $g_m = 2$ mS (calculated earlier).
    *   $r_o = \infty$ (assuming $\lambda = 0$).
    *   $A_v = -g_m (R_D || R_L) = -2 \text{ mS} (4.7 \text{ k}\Omega || 5 \text{ k}\Omega)$
    *   $R_D || R_L = \frac{4.7 \times 5}{4.7 + 5} = \frac{23.5}{9.7} \approx 2.42$ k$\Omega$.
    *   $A_v = -2 \text{ mS} \times 2.42 \text{ k}\Omega \approx -4.84$.

    *   **If we want a gain of 10 with $R_L = 5$ k$\Omega$, and $g_m=2$ mS, we need $R_D || R_L = 5$ k$\Omega$. This requires $R_D$ to be large.**
    *   Let's assume the load resistor is *in series* with $R_D$ for calculation, or $R_D$ itself needs to be very large. The problem statement is crucial here. If $R_L$ is the external load, then the gain is $A_v = -g_m (R_D || R_L)$.
    *   To get $|A_v|=10$, we need $R_D || R_L = 5$ k$\Omega$.
    *   With $R_L = 5$ k$\Omega$, this forces $R_D$ to be very large.

    *   **Perhaps the question implies the MOSFET's intrinsic output resistance ($r_o$) is to be ignored, and the output load is directly connected to the drain.** In this case, the drain resistor ($R_D$) would be the load.
    *   If $R_D$ is the load, then $A_v = -g_m R_D = 10$.
    *   $2 \text{ mS} \times R_D = 10 \implies R_D = 5$ k$\Omega$.
    *   With $R_D = 5$ k$\Omega$, $I_{DQ} = 2$ mA, $V_{GSQ} = 3.5$ V.
    *   $V_{DSQ} = 15 - (2 \text{ mA} \times 5 \text{ k}\Omega) = 15 - 10 = 5$ V.
    *   This $V_{DSQ} = 5$ V is greater than $V_{GSQ} - V_{th} = 2$ V, so it's in saturation.
    *   The biasing would then need to ensure $V_{GSQ} = 3.5$ V. Using voltage divider bias: $R_S = 1$ k$\Omega$ ($V_{SQ}=2$ V), $V_G = 5.5$ V. $R_{G1}=100$ k$\Omega, R_{G2}=56$ k$\Omega$.

    *   **Final Design for a gain of ~10 (assuming $R_D$ is the load):**
        *   MOSFET: $V_{th} = 1.5$ V, $K = 0.5$ mA/V$^2$.
        *   $R_D = 5$ k$\Omega$ (acts as the load and drain resistor for biasing).
        *   Bias: $R_S = 1$ k$\Omega$, $R_{G1} = 100$ k$\Omega$, $R_{G2} = 56$ k$\Omega$.
        *   Q-point: $I_{DQ} = 2$ mA, $V_{GSQ} = 3.5$ V, $V_{DSQ} = 5$ V.
        *   $g_m = 2$ mS.
        *   Gain $A_v = -g_m R_D = -2 \text{ mS} \times 5 \text{ k}\Omega = -10$.

**Textbook Reference:**
*   **Bell:** Presents design examples for common source amplifiers, showing how to select resistors for desired bias and gain.
*   **Sedra & Smith:** Offers a more rigorous approach to design, considering device parasitics and non-ideal effects.

---

### 7. Practice Questions and Exercises

**Question 1:**
For a MOSFET with $V_{th} = 1$ V and $K = 1$ mA/V$^2$, operating in saturation, if $V_{GSQ} = 3$ V, calculate the transconductance $g_m$ and the drain current $I_{DQ}$ (assume $\lambda=0$).

**Answer 1:**
*   $I_{DQ} = K (V_{GSQ} - V_{th})^2 = 1 \text{ mA/V}^2 \times (3 \text{ V} - 1 \text{ V})^2 = 1 \text{ mA/V}^2 \times (2 \text{ V})^2 = 4$ mA.
*   $g_m = 2K(V_{GSQ} - V_{th}) = 2 \times 1 \text{ mA/V}^2 \times (3 \text{ V} - 1 \text{ V}) = 2 \times 1 \text{ mA/V}^2 \times 2 \text{ V} = 4$ mS.

**Question 2:**
A common-source amplifier uses a MOSFET with $g_m = 5$ mS and $r_o = 50$ k$\Omega$. It has a drain resistor $R_D = 10$ k$\Omega$ and is connected to a load resistor $R_L = 10$ k$\Omega$. Calculate the voltage gain $A_v$.

**Answer 2:**
*   $A_v = -g_m (r_o || R_D || R_L)$
*   $r_o || R_D || R_L = 50 \text{ k}\Omega || 10 \text{ k}\Omega || 10 \text{ k}\Omega = \frac{1}{\frac{1}{50 \text{ k}\Omega} + \frac{1}{10 \text{ k}\Omega} + \frac{1}{10 \text{ k}\Omega}} = \frac{1}{0.02 \text{ mS} + 0.1 \text{ mS} + 0.1 \text{ mS}} = \frac{1}{0.22 \text{ mS}} \approx 4.545$ k$\Omega$.
*   $A_v = -5 \text{ mS} \times 4.545 \text{ k}\Omega \approx -22.73$.

**Question 3:**
What are the key advantages of using a common-drain (source follower) amplifier?

**Answer 3:**
*   High input impedance.
*   Low output impedance.
*   Voltage gain close to unity (acts as a buffer).
*   High current gain.

**Question 4:**
For a common-gate amplifier, is the output in phase or out of phase with the input? What is its typical input impedance?

**Answer 4:**
*   The output is **in phase** with the input.
*   The input impedance is typically **low** (approximately $1/g_m$).

**Question 5 (Design Based):**
Design a common-source amplifier using an NMOS transistor with $V_{th} = 1$ V and $K = 0.8$ mA/V$^2$. The circuit should use voltage divider bias, a $V_{DD}$ of 12 V, and achieve a DC drain current $I_{DQ} = 3$ mA. Assume the desired voltage gain is approximately $-5$ when connected to a load of $R_L = 4$ k$\Omega$.

*(This question requires more detailed calculations for biasing resistors and then verification of the gain. It's a good exercise for applying the design steps.)*

---

### 8. Important Points to Remember

*   **Saturation Region:** The MOSFET must be biased in the saturation region for linear amplification.
*   **Small-Signal Model:** Crucial for analyzing AC performance. Key parameters are $g_m$ and $r_o$.
*   **Transconductance ($g_m$):** Directly relates input voltage variation to output current variation. Higher $g_m$ means higher gain.
*   **Output Resistance ($r_o$):** Accounts for non-ideal behavior and affects gain. Higher $r_o$ improves gain.
*   **Common Source Amplifier:** High input impedance, high gain, phase inversion.
*   **Common Drain Amplifier (Source Follower):** High input impedance, low output impedance, gain $\approx 1$.
*   **Common Gate Amplifier:** Low input impedance, high gain, no phase inversion.
*   **Bypass Capacitors:** Used to increase AC gain by removing negative feedback from source resistors.
*   **Design:** Involves selecting a configuration, biasing, Q-point, and resistors to meet gain, impedance, and stability requirements.

---

This concludes the study notes for MOSFETs as amplifiers. Remember to practice analyzing and designing these circuits to solidify your understanding. Refer to the textbooks for more in-depth explanations and examples.
