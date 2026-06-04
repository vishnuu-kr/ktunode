---
title: "Small signal equivalent circuit"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8c"
status: "completed"
scrapedAt: "2026-05-23T16:18:47.630Z"
---
# SOLID STATE DEVICES - Module 3: MOSFETs

## Topic: Small Signal Equivalent Circuit

### Introduction

This module focuses on understanding the behavior of Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) under small signal AC conditions. To analyze MOSFET amplifier circuits effectively, we need to represent the complex MOSFET device with a simplified linear equivalent circuit that accurately models its AC behavior around its DC operating point. This is achieved through the **small-signal equivalent circuit**.

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   **LO 3.x:** Understand the concept of DC operating point (biasing) and its importance for small-signal analysis.
*   **LO 3.x:** Derive the small-signal model for a MOSFET from its fundamental characteristics.
*   **LO 3.x:** Identify and define the key parameters of the MOSFET small-signal model (transconductance, output resistance).
*   **LO 3.x:** Construct the small-signal equivalent circuit for a MOSFET in different configurations (Common Source, Common Gate, Common Drain).
*   **LO 3.x:** Analyze the AC performance of MOSFET amplifier circuits using their small-signal equivalent circuits to determine voltage gain, current gain, input impedance, and output impedance.
*   **LO 3.x:** Understand how different biasing circuits affect the small-signal parameters and amplifier performance.

### Prerequisites

A basic understanding of:

*   MOSFET operation (enhancement and depletion modes).
*   DC analysis of MOSFET circuits (biasing).
*   Basic AC circuit analysis techniques.

### Course Outcome Alignment

This topic directly contributes to:

*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**. Understanding the small-signal equivalent circuit is fundamental to analyzing and designing MOSFET amplifiers for desired gain, input/output impedance characteristics, and overall performance.

### 1. DC Operating Point (Biasing) - The Foundation for Small-Signal Analysis

Before delving into small-signal analysis, it's crucial to understand that MOSFETs are non-linear devices. Their operation is described by non-linear equations. For small-signal analysis, we assume that the AC input signal is small enough that the MOSFET operates in a linear region of its output characteristics. This requires establishing a stable **DC operating point (Q-point)**.

*   **Definition:** The DC operating point is the set of DC voltages and currents that the MOSFET settles to when only DC bias voltages and currents are applied. It's often represented by the DC drain current ($I_D$) and the DC drain-source voltage ($V_{DS}$).
*   **Importance:** The small-signal equivalent circuit is derived by linearizing the MOSFET's behavior around this Q-point. Any deviation from this Q-point due to larger signals would invalidate the small-signal model.
*   **Textbook Reference:** Boylested & Nashelsky (11/e) and Sedra & Smith (6/e) provide extensive coverage of MOSFET biasing techniques to establish a stable Q-point.

### 2. Derivation of the Small-Signal Model

The fundamental equation governing the drain current ($I_D$) of an enhancement-mode MOSFET in saturation is:

$I_D = \frac{1}{2} K (V_{GS} - V_{TH})^2$

where:
*   $K = \mu_n C_{ox} \frac{W}{L}$ (transconductance parameter)
*   $V_{GS}$ is the gate-source voltage
*   $V_{TH}$ is the threshold voltage

To obtain the small-signal model, we consider small variations in the terminal voltages and their corresponding effect on the drain current. Let:

*   $v_{gs} = V_{GS} - V_{GSQ}$ (small-signal gate-source voltage)
*   $v_{ds} = V_{DS} - V_{DSQ}$ (small-signal drain-source voltage)
*   $i_d = I_D - I_{DQ}$ (small-signal drain current)

We can express the drain current as a function of $V_{GS}$ and $V_{DS}$: $I_D(V_{GS}, V_{DS})$. For small variations, we can use a Taylor series expansion around the Q-point $(V_{GSQ}, V_{DSQ})$:

$I_D \approx I_{DQ} + \frac{\partial I_D}{\partial V_{GS}} \bigg|_{Q} (V_{GS} - V_{GSQ}) + \frac{\partial I_D}{\partial V_{DS}} \bigg|_{Q} (V_{DS} - V_{DSQ})$

Subtracting $I_{DQ}$ from both sides, we get the small-signal drain current $i_d$:

$i_d \approx \frac{\partial I_D}{\partial V_{GS}} \bigg|_{Q} v_{gs} + \frac{\partial I_D}{\partial V_{DS}} \bigg|_{Q} v_{ds}$

#### 2.1 Key Parameters of the Small-Signal Model

*   **Transconductance ($g_m$):** This is the first partial derivative, representing how the drain current changes with respect to the gate-source voltage, keeping the drain-source voltage constant at the Q-point.

    $g_m = \frac{\partial I_D}{\partial V_{GS}} \bigg|_{Q} = \frac{\partial}{\partial V_{GS}} \left( \frac{1}{2} K (V_{GS} - V_{TH})^2 \right) \bigg|_{Q}$
    $g_m = K (V_{GSQ} - V_{TH})$
    Since $I_{DQ} = \frac{1}{2} K (V_{GSQ} - V_{TH})^2$, we can also express $g_m$ in terms of $I_{DQ}$:
    $V_{GSQ} - V_{TH} = \sqrt{\frac{2 I_{DQ}}{K}}$
    Therefore, $g_m = K \sqrt{\frac{2 I_{DQ}}{K}} = \sqrt{2 K I_{DQ}}$
    Or, using $K = \mu_n C_{ox} \frac{W}{L}$:
    $g_m = \mu_n C_{ox} \frac{W}{L} (V_{GSQ} - V_{TH})$

    *   **Definition:** Transconductance ($g_m$) is the ratio of the change in drain current to the change in gate-source voltage that causes it, under quiescent conditions. It's a measure of the device's amplification capability.
    *   **Units:** Siemens (S) or mhos.

*   **Output Resistance ($r_o$):** This is the second partial derivative, representing how the drain current changes with respect to the drain-source voltage, keeping the gate-source voltage constant at the Q-point. This parameter accounts for the Early effect in MOSFETs, which causes the drain current to increase slightly with $V_{DS}$ due to channel-length modulation.

    For a MOSFET with channel-length modulation, the drain current equation is:
    $I_D = \frac{1}{2} K (V_{GS} - V_{TH})^2 (1 + \lambda V_{DS})$
    where $\lambda$ is the channel-length modulation parameter.

    $r_o = \frac{\partial V_{DS}}{\partial I_D} \bigg|_{Q} = \left( \frac{\partial I_D}{\partial V_{DS}} \bigg|_{Q} \right)^{-1}$
    $\frac{\partial I_D}{\partial V_{DS}} \bigg|_{Q} = \frac{\partial}{\partial V_{DS}} \left( \frac{1}{2} K (V_{GSQ} - V_{TH})^2 (1 + \lambda V_{DS}) \right) \bigg|_{Q}$
    $\frac{\partial I_D}{\partial V_{DS}} \bigg|_{Q} = \frac{1}{2} K (V_{GSQ} - V_{TH})^2 \lambda = I_{DQ} \lambda$
    Therefore, $r_o = \frac{1}{I_{DQ} \lambda}$

    *   **Definition:** Output resistance ($r_o$) is the inverse of the slope of the $I_D$ vs. $V_{DS}$ curve in the saturation region at the Q-point. It represents the effective resistance looking into the drain terminal.
    *   **Units:** Ohms ($\Omega$).
    *   **Note:** For many practical analysis, especially when $\lambda$ is small or the output resistance of the next stage is low, $r_o$ can be considered infinite (open circuit), simplifying the analysis.

#### 2.2 The Basic MOSFET Small-Signal Model

Combining these parameters, the small-signal behavior of a MOSFET around its Q-point can be represented by a linear circuit consisting of:

1.  A voltage-controlled current source between drain and source terminals, with a value of $g_m v_{gs}$.
2.  A resistor between drain and source terminals, with a value of $r_o$.

The gate terminal is considered to be open-circuited for AC signals because the gate-source voltage is controlled by the input signal, and the gate current is ideally zero.

*   **Textbook Reference:** Sedra & Smith (6/e), Chapter 4, discusses the derivation and properties of the MOSFET small-signal model in detail. Bell (5/e) also covers this foundational aspect.

### 3. Small-Signal Equivalent Circuit Configurations

The small-signal equivalent circuit is used to analyze MOSFET amplifier circuits. The specific arrangement of this equivalent circuit depends on how the MOSFET is connected in the amplifier configuration (Common Source, Common Gate, Common Drain).

In all configurations, the following are true:

*   **Gate Terminal:** Connected to the AC input signal source, and generally has a very high input impedance. The gate current is zero.
*   **Source Terminal:** Acts as the reference for $v_{gs}$.
*   **Drain Terminal:** Where the output current is developed.
*   **Power Supply ($V_{DD}$):** Treated as a short circuit to ground for AC signals, as it provides a constant DC voltage.
*   **Capacitors (coupling, bypass):** Treated as short circuits for AC signals at the frequencies of interest.
*   **Inductors (if present):** Treated as AC reactances based on frequency.

#### 3.1 Common Source (CS) Amplifier

The CS configuration is the most common MOSFET amplifier.

*   **Circuit:** Gate is the input, drain is the output, and source is common to both input and output AC signals.
*   **Small-Signal Model Construction:**
    *   Gate: Connected to the AC input signal $v_{in}$.
    *   Source: Connected to AC ground (if not bypassed).
    *   Drain: Connected to the output load resistor ($R_D$) and potentially $r_o$.
    *   $v_{gs}$ is the voltage between the gate and source terminals.
    *   The current source $g_m v_{gs}$ flows from drain to source.

*   **Example - Common Source Amplifier with Source Resistor ($R_S$) and Load Resistor ($R_D$):**

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  C_in
                           ---
                            |
           +-----------o Drain
           |           |
           |           |
      M1   |           o----- v_out
           |           |
           |           |
           +-----------o Source
                       |
                       |
                      R_S
                       |
                      ---
                       |
                      GND

    Assume R_D is connected from Drain to VDD. VDD is AC ground.
    ```

    **Small-Signal Equivalent Circuit:**

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  (Cin shorted)
                           ---
                            |
           +-----------o Drain ---+---- R_D ---- GND (AC Ground)
           |           |       |
           |           |      ---
           |           |      |  r_o
           |           |      ---
           |           |       |
           |           +-------o----- v_out
           |                   |
           |           +-------+
           |           |       |
           |         gm*v_gs   |
           |           |       |
           +-----------o Source -+
                       |
                       |
                      R_S
                       |
                      ---
                       |
                      GND
    ```

    **Analysis:**
    *   $v_{gs}$ is the voltage between the gate and source. With $R_S$ in the source path, the source is not at AC ground.
    *   $v_{gs} = v_{in} - v_s$.
    *   $v_s$ is the voltage at the source terminal. The current from the drain ($g_m v_{gs}$) and any current through $R_D$ (which effectively appears as $r_o$ in parallel) flows through $R_S$.
    *   The total current flowing out of the drain terminal is $i_d = g_m v_{gs}$. This current flows through $r_o$ and then splits to go through $R_D$ and $R_S$.
    *   The output voltage is taken at the drain.

    **Key Parameters (for the simplified case where $r_o$ is infinite and $R_D$ is the only load):**

    *   **Voltage Gain ($A_v$):**
        $i_d = g_m v_{gs}$
        $v_{gs} = v_{in} - v_s$
        $v_s = i_d \times R_S$ (assuming current flows down through $R_S$)
        $v_{gs} = v_{in} - (g_m v_{gs}) R_S$
        $v_{gs} (1 + g_m R_S) = v_{in}$
        $v_{gs} = \frac{v_{in}}{1 + g_m R_S}$

        The output current is $i_d = g_m v_{gs} = \frac{g_m v_{in}}{1 + g_m R_S}$.
        This current flows through $R_D$ and $R_S$. If we consider the current through $R_D$ flowing downwards:
        $v_{out} = -i_d \times R_D = - \frac{g_m v_{in}}{1 + g_m R_S} R_D$
        $A_v = \frac{v_{out}}{v_{in}} = - \frac{g_m R_D}{1 + g_m R_S}$

        **Important Point:** If the source resistor $R_S$ is bypassed with a capacitor ($C_S$), then $R_S$ is shorted to AC ground, $v_s = 0$, and $v_{gs} = v_{in}$. In this case, $A_v = -g_m R_D$ (ignoring $r_o$).

    *   **Input Impedance ($Z_{in}$):**
        The input impedance seen by the AC source is the impedance looking into the gate terminal. Ideally, the gate current is zero, so the input impedance is infinite.
        $Z_{in} = \infty$

    *   **Output Impedance ($Z_{out}$):**
        To find the output impedance, we set $v_{in} = 0$ (short circuit the input source) and look back into the output terminals.
        If $v_{in} = 0$, then $v_{gs} = 0$ (assuming $R_S$ is bypassed or not present).
        The current source $g_m v_{gs}$ becomes zero. We are left with $R_D$ and $r_o$ in parallel connected to the output.
        $Z_{out} = R_D || r_o$ (If $r_o$ is considered). If $r_o$ is infinite, $Z_{out} = R_D$.

*   **Textbook Reference:** Bell (5/e) provides clear diagrams and step-by-step analysis of the CS amplifier. Sedra & Smith (6/e) delve into more detailed impedance calculations.

#### 3.2 Common Gate (CG) Amplifier

The CG configuration is characterized by having the source as the common terminal for input and output signals (or rather, the gate is AC grounded).

*   **Circuit:** Source is the input, drain is the output, and gate is common to both input and output AC signals (usually AC grounded).
*   **Small-Signal Model Construction:**
    *   Gate: Connected to AC ground.
    *   Source: Connected to the AC input signal $v_{in}$.
    *   Drain: Connected to the output load resistor ($R_D$) and potentially $r_o$.
    *   $v_{gs}$ is the voltage between the gate (ground) and source ($v_{in}$), so $v_{gs} = 0 - v_{in} = -v_{in}$.
    *   The current source $g_m v_{gs}$ flows from drain to source.

*   **Example - Common Gate Amplifier with Load Resistor ($R_D$):**

    ```
           +-----------o Drain ---+---- R_D ---- GND (AC Ground)
           |           |       |
           |           |      ---
           |           |      |  r_o
           |           |      ---
           |           |       |
           |           +-------o----- v_out
           |                   |
           |         +---------+
           |         |         |
           |       gm*v_gs     |
           |         |         |
           +---------o Source --+
                     |
                     |
          v_in ---- o
                     |
                    GND
    ```

    **Analysis:**
    *   The input signal $v_{in}$ is applied to the source terminal.
    *   The gate is AC grounded.
    *   Therefore, $v_{gs} = -v_{in}$.
    *   The current source is $g_m v_{gs} = -g_m v_{in}$. This current flows from drain to source.
    *   The output voltage is taken at the drain.

    **Key Parameters (for the simplified case where $r_o$ is infinite and $R_D$ is the only load):**

    *   **Voltage Gain ($A_v$):**
        The current flowing into the drain terminal from the current source is $-g_m v_{in}$. This current flows through $R_D$.
        $v_{out} = -(-g_m v_{in}) \times R_D = g_m v_{in} R_D$
        $A_v = \frac{v_{out}}{v_{in}} = g_m R_D$

    *   **Input Impedance ($Z_{in}$):**
        To find $Z_{in}$, we look into the source terminal.
        The current entering the source is $i_{in}$.
        The voltage at the source is $v_{in}$.
        $i_{in} = \text{current through } R_S \text{ (if present)} + \text{current into the } g_m v_{gs} \text{ source}$.
        If the gate is AC grounded, the current $g_m v_{gs}$ flows from drain to source. So, the current entering the source terminal is $i_{in} = -g_m v_{gs} - (\text{current from drain to } R_D || r_o)$.
        Let's consider the current $i_{in}$ flowing into the source.
        $i_{in} = \frac{v_{in} - V_{DS}}{R_S} + g_m v_{gs}$ (This is getting complicated without a defined circuit).

        Let's use the approach of injecting a test voltage $v_x$ at the input and finding the current $i_x$.
        Input is at the source. Gate is at AC ground.
        $v_{gs} = 0 - v_{in} = -v_{in}$.
        $i_d = g_m v_{gs} = -g_m v_{in}$.
        This current flows from drain to source.
        The current entering the source terminal is $i_{in}$.
        $i_{in} = \text{current through } R_S + g_m v_{gs} \text{ (current from device body to source)}$
        If the gate is grounded, and we are looking into the source:
        Consider the current $i_{in}$ entering the source terminal.
        $i_{in} = (\text{current through } r_o || R_D) + g_m v_{gs}$
        $v_{gs} = 0 - v_{in} = -v_{in}$
        The current from drain to source is $g_m v_{gs} = -g_m v_{in}$.
        This current flows through $r_o || R_D$. So, the voltage at the drain is $v_d = -(-g_m v_{in}) \times (r_o || R_D) = g_m v_{in} (r_o || R_D)$.
        The current $i_{in}$ enters the source. The voltage at the source is $v_{in}$.
        The current entering the source can be expressed as the sum of current through the device (which is $-g_m v_{gs}$) and the current flowing from the source into any external source resistor (if present).
        If we inject a current $i_{in}$ into the source, and the gate is at AC ground:
        $v_{gs} = -v_{in}$.
        The current $g_m v_{gs}$ comes out of the source.
        So, $i_{in} = \text{current through device} + \text{current through external impedance at source}$
        $i_{in} = -g_m v_{gs} + \frac{v_{in} - v_d}{R_{ext}}$ where $R_{ext}$ is the external impedance at the source.
        This is becoming circular. Let's use the definition of $r_o$.
        The voltage at the drain is $v_d$. The current flowing from drain to source is $g_m v_{gs}$.
        The effective resistance seen from the source terminal is when the gate is AC grounded.
        The current $g_m v_{gs}$ is *controlled* by $v_{gs}$.
        The relationship is $i_d = g_m v_{gs} + \frac{v_{ds}}{r_o}$.
        For the CG input impedance, we look into the source. The gate is at AC ground.
        $v_{gs} = 0 - v_{source} = -v_{in}$.
        The current into the source is $i_{in}$.
        This current, $i_{in}$, flows through the device. The output current from the device is $g_m v_{gs}$.
        The current exiting the source terminal is $i_{in}$.
        The current through the device from drain to source is $g_m v_{gs}$.
        The current $i_{in}$ enters the source. This current must be related to the current from the device.
        $i_{in} = \text{current through source externally} - \text{current from device into source}$
        $i_{in} = \frac{v_{in}}{R_S} - g_m v_{gs}$ (if $R_S$ is present).
        If the gate is AC grounded, and we are looking into the source terminal:
        The current entering the source is $i_{in}$.
        The voltage at the source is $v_{in}$.
        The current from the source to drain (controlled by $v_{gs} = -v_{in}$) is $-g_m v_{gs} = g_m v_{in}$.
        So, the current flowing into the source terminal is $i_{in} = \text{current leaving the device at source}$.
        The current leaving the device at the source is $g_m v_{gs} + \frac{v_{ds}}{r_o}$.
        $i_{in} = -g_m v_{gs} + \frac{v_{source} - v_d}{r_o}$
        $v_{gs} = 0 - v_{in} = -v_{in}$.
        $i_{in} = -g_m (-v_{in}) + \frac{-v_{in} - v_d}{r_o}$
        $i_{in} = g_m v_{in} + \frac{-v_{in} - v_d}{r_o}$
        $v_d = -(-g_m v_{gs}) (r_o || R_D) = g_m v_{in} (r_o || R_D)$. (This is incorrect derivation path).

        **Correct Approach for CG Input Impedance:**
        Apply a test voltage $v_x$ to the source. Gate is AC ground.
        $v_{gs} = 0 - v_x = -v_x$.
        The current into the source is $i_x$.
        The current generated by the MOSFET is $g_m v_{gs} = -g_m v_x$. This current flows from drain to source.
        The output impedance seen at the drain is $R_D || r_o$.
        The voltage at the drain is $v_d = (-g_m v_x)(R_D || r_o)$.
        The current $i_x$ enters the source. It must flow to the drain through the device's internal path and any external load.
        $i_x = (\text{current through } R_S) + (\text{current generated by device at source})$
        If $R_S$ is absent (direct connection to AC ground), then the current entering the source $i_x$ must be the current coming from the device.
        The current coming *out* of the source terminal of the MOSFET is $g_m v_{gs} + \frac{v_{ds}}{r_o}$.
        So, $i_x = -(g_m v_{gs} + \frac{v_{ds}}{r_o})$.
        $v_{gs} = -v_x$.
        $v_{ds} = v_d - v_s = v_d - v_x$.
        $i_x = -g_m (-v_x) - \frac{v_d - v_x}{r_o} = g_m v_x - \frac{v_d - v_x}{r_o}$
        $v_d = (-g_m v_{gs})(R_D || r_o) = (-g_m (-v_x))(R_D || r_o) = g_m v_x (R_D || r_o)$.
        $i_x = g_m v_x - \frac{g_m v_x (R_D || r_o) - v_x}{r_o} = g_m v_x - \frac{g_m v_x (R_D || r_o)}{r_o} + \frac{v_x}{r_o}$
        $i_x = v_x \left( g_m - \frac{g_m (R_D || r_o)}{r_o} + \frac{1}{r_o} \right)$
        $i_x = v_x \left( g_m - \frac{g_m R_D}{r_o + R_D} + \frac{1}{r_o} \right)$

        **Simplified CG Input Impedance (assuming $r_o$ is large, i.e., $1/r_o \approx 0$):**
        $i_x \approx v_x (g_m - g_m \frac{R_D}{R_D}) = v_x (g_m - g_m) = 0$. This isn't quite right.

        Let's go back to basics. The current delivered to the output load is $i_{load} = -i_d = -g_m v_{gs} = g_m v_{in}$.
        The current $i_{in}$ enters the source. The voltage at the source is $v_{in}$.
        The current source $g_m v_{gs}$ pushes current from drain to source.
        If we inject current $i_{in}$ into the source terminal, then:
        $i_{in} = \frac{v_{in} - v_d}{r_o} + g_m v_{gs}$ (current leaving the source through $r_o$ and controlled current)
        $v_{gs} = 0 - v_{in} = -v_{in}$.
        $v_d = -(-g_m v_{gs})(R_D || r_o) = g_m v_{in} (R_D || r_o)$.
        $i_{in} = \frac{v_{in} - g_m v_{in} (R_D || r_o)}{r_o} + g_m (-v_{in})$
        $i_{in} = \frac{v_{in}}{r_o} - \frac{g_m v_{in} (R_D || r_o)}{r_o} - g_m v_{in}$
        $i_{in} = v_{in} \left( \frac{1}{r_o} - \frac{g_m (R_D || r_o)}{r_o} - g_m \right)$
        $Z_{in} = \frac{v_{in}}{i_{in}} = \frac{1}{\frac{1}{r_o} - \frac{g_m (R_D || r_o)}{r_o} - g_m}$

        **Simplified CG Input Impedance (assuming $r_o \rightarrow \infty$ and $R_D$ is the load):**
        $i_{in} = 0 - g_m (-v_{in}) = g_m v_{in}$.
        $Z_{in} = \frac{v_{in}}{g_m v_{in}} = \frac{1}{g_m}$. This is the correct result for a CG amplifier.

    *   **Output Impedance ($Z_{out}$):**
        Set $v_{in} = 0$, so $v_{gs} = 0$. The current source $g_m v_{gs}$ becomes zero.
        We are left with $R_D$ and $r_o$ in parallel connected to the output.
        $Z_{out} = R_D || r_o$.

*   **Textbook Reference:** Sedra & Smith (6/e) provides a thorough analysis of the CG configuration, including its low input impedance characteristic.

#### 3.3 Common Drain (CD) or Source Follower Amplifier

The CD configuration has the drain as the common terminal for input and output signals (usually AC grounded).

*   **Circuit:** Gate is the input, source is the output, and drain is common to both input and output AC signals (usually AC grounded).
*   **Small-Signal Model Construction:**
    *   Gate: Connected to the AC input signal $v_{in}$.
    *   Drain: Connected to AC ground.
    *   Source: Connected to the output load resistor ($R_S$) and the output terminal $v_{out}$.
    *   $v_{gs}$ is the voltage between the gate and source. Since the drain is AC ground, $V_{GS} = V_{G} - V_{S}$. In the small-signal model, $v_{gs} = v_{gate} - v_{source}$.
    *   $v_{gate} = v_{in}$.
    *   $v_{source} = v_{out}$.
    *   So, $v_{gs} = v_{in} - v_{out}$.
    *   The current source $g_m v_{gs}$ flows from drain to source.

*   **Example - Common Drain Amplifier with Load Resistor ($R_S$):**

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  C_in
                           ---
                            |
           +-----------o Drain ---+---- GND (AC Ground)
           |           |       |
           |           |       |
      M1   |           |       |
           |           |       |
           |           |       |
           +-----------o Source -+---- o v_out
                       |       |
                       |      R_S
                       |       |
                       |      ---
                       |       |
                       |      GND
    ```

    **Small-Signal Equivalent Circuit:**

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  (Cin shorted)
                           ---
                            |
           +-----------o Drain ---+---- GND (AC Ground)
           |           |
           |           |
           |       gm*v_gs     |
           |           |       |
           |           +-------o Source ----+---- o v_out
           |                   |            |
           |                   |           R_S
           |                   |            |
           |                   |           ---
           |                   |            |
           |                   |           GND
           |                   |
           |                   +------------o Source
           |                                |
           |                              r_o
           |                                |
           |                                ---
           |                                 |
           |                                GND
    ```
    **Correction for $r_o$:** The output resistance $r_o$ is between drain and source. Since the drain is AC ground, $r_o$ is in parallel with the output path.

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  (Cin shorted)
                           ---
                            |
           +-----------o Drain ---+---- GND (AC Ground)
           |           |       |
           |           |      ---
           |           |      |  r_o
           |           |      ---
           |           |       |
           |           +-------o Source ----+---- o v_out
           |                   |            |
           |                 gm*v_gs        |
           |                   |            |
           |                   |           R_S
           |                   |            |
           |                   |           ---
           |                   |            |
           |                   |           GND
    ```

    **Analysis:**
    *   $v_{gs} = v_{in} - v_{out}$.
    *   The current source $g_m v_{gs}$ flows from drain to source.
    *   This current, plus any current through $r_o$, flows out of the source terminal and through $R_S$.
    *   $v_{out} = (g_m v_{gs} + \frac{v_{source} - v_{drain}}{r_o}) \times R_S$
    *   $v_{out} = (g_m v_{gs} + \frac{v_{out} - 0}{r_o}) \times R_S$
    *   $v_{out} = g_m v_{gs} R_S + \frac{v_{out} R_S}{r_o}$
    *   $v_{out} (1 - \frac{R_S}{r_o}) = g_m v_{gs} R_S$
    *   Substitute $v_{gs} = v_{in} - v_{out}$:
    *   $v_{out} (1 - \frac{R_S}{r_o}) = g_m (v_{in} - v_{out}) R_S$
    *   $v_{out} (1 - \frac{R_S}{r_o}) = g_m v_{in} R_S - g_m v_{out} R_S$
    *   $v_{out} (1 - \frac{R_S}{r_o} + g_m R_S) = g_m v_{in} R_S$
    *   $A_v = \frac{v_{out}}{v_{in}} = \frac{g_m R_S}{1 - \frac{R_S}{r_o} + g_m R_S}$

    **Simplified CD Voltage Gain (assuming $r_o \rightarrow \infty$, so $1/r_o \approx 0$):**
    $A_v = \frac{g_m R_S}{1 + g_m R_S}$
    This gain is always less than 1 but close to 1 when $g_m R_S \gg 1$.

    **Key Parameters (for the simplified case where $r_o$ is infinite and $R_S$ is the load):**

    *   **Voltage Gain ($A_v$):**
        $A_v = \frac{g_m R_S}{1 + g_m R_S}$
        The gain is slightly less than unity.

    *   **Input Impedance ($Z_{in}$):**
        The input impedance is the impedance seen looking into the gate terminal. The gate current is ideally zero.
        $Z_{in} = \infty$

    *   **Output Impedance ($Z_{out}$):**
        To find $Z_{out}$, we set $v_{in} = 0$. This means $v_{gs} = 0 - v_{out} = -v_{out}$.
        The current source $g_m v_{gs}$ becomes $-g_m v_{out}$. This current flows from drain to source.
        The resistance $r_o$ is between drain (AC ground) and source.
        We are looking into the source terminal, with the gate shorted to ground.
        The current entering the source is $i_{out}$.
        $i_{out} = \frac{v_{out}}{R_S} + \frac{v_{out} - v_{drain}}{r_o}$
        $v_{drain} = 0$ (AC ground).
        $i_{out} = \frac{v_{out}}{R_S} + \frac{v_{out}}{r_o}$
        $i_{out} = v_{out} (\frac{1}{R_S} + \frac{1}{r_o})$
        $Z_{out} = \frac{v_{out}}{i_{out}} = \frac{1}{\frac{1}{R_S} + \frac{1}{r_o}} = R_S || r_o$

        **Important Point:** If $g_m$ is large and $r_o$ is large, the output impedance $Z_{out} \approx \frac{1}{g_m}$.
        Let's verify this. If we apply a voltage $v_x$ to the source and the gate is AC grounded, $v_{gs} = -v_x$.
        The current drawn from the source is $i_x$.
        $i_x = \text{current through } R_S + \text{current through } r_o + \text{current generated by device}$
        This is not quite right.
        Let's find $Z_{out}$ by setting $v_{in}=0$. Then $v_{gs} = -v_{out}$.
        The current from the source terminal is $i_{out}$.
        $i_{out} = \frac{v_{out}}{R_S} + \text{current flowing into the source from the device}$
        The current from the device flowing into the source is $g_m v_{gs} + \frac{v_{ds}}{r_o}$.
        $v_{ds} = v_{source} - v_{drain} = v_{out} - 0 = v_{out}$.
        $i_{out} = \frac{v_{out}}{R_S} + (g_m v_{gs} + \frac{v_{out}}{r_o})$
        $i_{out} = \frac{v_{out}}{R_S} + g_m (0 - v_{out}) + \frac{v_{out}}{r_o}$
        $i_{out} = \frac{v_{out}}{R_S} - g_m v_{out} + \frac{v_{out}}{r_o}$
        $i_{out} = v_{out} (\frac{1}{R_S} - g_m + \frac{1}{r_o})$
        $Z_{out} = \frac{v_{out}}{i_{out}} = \frac{1}{\frac{1}{R_S} - g_m + \frac{1}{r_o}}$

        This doesn't seem right. The standard result is $Z_{out} \approx 1/g_m$.
        Let's reconsider the model. The current $g_m v_{gs}$ is *entering* the source terminal from the drain.
        Looking into the source terminal with the gate shorted to ground:
        Input voltage $v_{gs} = -v_{out}$.
        Current $i_{out}$ is drawn from the source.
        $i_{out} = \frac{v_{out}}{R_S} + \frac{v_{out}}{r_o} - g_m v_{gs}$ (current flowing from source to drain)
        $i_{out} = \frac{v_{out}}{R_S} + \frac{v_{out}}{r_o} - g_m (-v_{out})$
        $i_{out} = \frac{v_{out}}{R_S} + \frac{v_{out}}{r_o} + g_m v_{out}$
        $i_{out} = v_{out} (\frac{1}{R_S} + \frac{1}{r_o} + g_m)$
        $Z_{out} = \frac{v_{out}}{i_{out}} = \frac{1}{\frac{1}{R_S} + \frac{1}{r_o} + g_m}$
        If $R_S$ is large and $r_o$ is large, then $Z_{out} \approx 1/g_m$. This is the correct result.

*   **Textbook Reference:** Bell (5/e) and Sedra & Smith (6/e) provide clear explanations and derivations for the CD (Source Follower) configuration, highlighting its high input impedance and low output impedance.

### 4. Example Application: Analyzing a Common Source Amplifier

Let's analyze a typical CS amplifier circuit.

**Circuit:**
Consider an NMOSFET with the following parameters:
*   $V_{TH} = 1.5V$
*   $K = 2 mA/V^2$
*   $r_o$ is assumed to be infinite.

The circuit is biased with a voltage divider and includes a source resistor $R_S$ and a drain resistor $R_D$. Coupling capacitors ($C_{in}$, $C_{out}$) and a bypass capacitor ($C_S$) are present.

```
      R1
   ---/\/\/\---+
               |
               +--- Gate ---+
                           |
                           |  C_in
                           |
                           +------o v_in
                                  |
   R2                             |
  ---/\/\/\---+                    |
              |                    |
              +----Drain ---o------+----- R_D -----+---- VDD
                                   |               |
                           M1      |               |
                                   |               |
                                   +----Source ----+
                                                   |
                                                   |
                                                  R_S
                                                   |
                                                   |
                                                  C_S
                                                   |
                                                  GND
```
(Note: $V_{DD}$ is connected to the top of $R_D$. $R_1$ and $R_2$ form the voltage divider for the gate. $C_{in}$ couples $v_{in}$ to the gate. $C_S$ bypasses $R_S$. $C_{out}$ couples $v_{out}$ from the drain.)

**Steps for Small-Signal Analysis:**

1.  **DC Analysis (Biasing):**
    *   Calculate the DC gate voltage ($V_G$). $V_G = V_{DD} \frac{R_2}{R_1 + R_2}$.
    *   Calculate the DC source voltage ($V_S$). $V_S = V_G - V_{GSQ}$. For enhancement mode, $I_{DQ} = \frac{1}{2} K (V_{GSQ} - V_{TH})^2$. Also, $V_S = I_{DQ} R_S$.
    *   Solve these equations for $V_{GSQ}$ and $I_{DQ}$.
    *   Calculate $V_{DSQ} = V_{DD} - I_{DQ} R_D$. Ensure $V_{DSQ} > V_{GSQ} - V_{TH}$ for saturation.

2.  **Calculate Small-Signal Parameters:**
    *   $g_m = \sqrt{2 K I_{DQ}}$ or $g_m = K (V_{GSQ} - V_{TH})$.
    *   $r_o$ is given as infinite.

3.  **Draw the Small-Signal Equivalent Circuit:**
    *   Replace the MOSFET with its small-signal model ($g_m v_{gs}$ between drain and source, $r_o$ between drain and source).
    *   Replace DC voltage sources ($V_{DD}$) with short circuits (AC ground).
    *   Replace coupling and bypass capacitors ($C_{in}, C_S, C_{out}$) with short circuits at the operating frequency.
    *   Connect the input signal $v_{in}$ to the gate.
    *   Connect the load resistor $R_D$ from the drain to AC ground.
    *   Connect the source resistor $R_S$ from the source to AC ground (because $C_S$ bypasses it).

    **Simplified Small-Signal Equivalent Circuit (with $C_S$ bypassing $R_S$, $r_o$ infinite):**

    ```
           v_in ---- Gate ---+
                            |
                           ---
                           |  (Cin shorted)
                           ---
                            |
           +-----------o Drain ---+---- R_D ---- GND (AC Ground)
           |           |       |
           |           |      ---
           |           |      |  r_o = infinity (open circuit)
           |           |      ---
           |           |       |
           |           +-------o----- v_out
           |                   |
           |           +-------+
           |           |       |
           |         gm*v_gs   |
           |           |       |
           +-----------o Source -+
                       |
                       |
                      (Cs shorted)
                       |
                      GND
    ```

4.  **Analyze the Equivalent Circuit:**
    *   **Voltage Gain ($A_v$):**
        Since the source is AC grounded ($R_S$ bypassed), $v_{gs} = v_{in}$.
        The output voltage $v_{out}$ is taken across $R_D$.
        The current flowing out of the drain is $g_m v_{gs} = g_m v_{in}$.
        This current flows through $R_D$ to ground.
        $v_{out} = -(g_m v_{in}) \times R_D$
        $A_v = \frac{v_{out}}{v_{in}} = -g_m R_D$.

    *   **Input Impedance ($Z_{in}$):**
        Looking into the gate, the input impedance is ideally infinite, as no current flows into the gate.
        $Z_{in} = \infty$.

    *   **Output Impedance ($Z_{out}$):**
        To find $Z_{out}$, set $v_{in} = 0$ (short the input). This makes $v_{gs} = 0$.
        The current source $g_m v_{gs}$ becomes zero.
        We are left with $R_D$ connected between the drain and AC ground.
        $Z_{out} = R_D$.

### 5. Practice Questions and Exercises

**Question 1:**
An NMOSFET with $V_{TH} = 2V$ and $K = 5 mA/V^2$ is biased in saturation. If the DC drain current $I_{DQ} = 10 mA$, calculate its transconductance $g_m$. Assume $r_o$ is infinite.

**Answer 1:**
We can use the formula $g_m = \sqrt{2 K I_{DQ}}$.
$g_m = \sqrt{2 \times (5 \times 10^{-3} A/V^2) \times (10 \times 10^{-3} A)}$
$g_m = \sqrt{100 \times 10^{-6} A^2/V^2} = 10 \times 10^{-3} S = 10 mS$.

Alternatively, we first find $V_{GSQ}$:
$I_{DQ} = \frac{1}{2} K (V_{GSQ} - V_{TH})^2$
$10 \times 10^{-3} = \frac{1}{2} (5 \times 10^{-3}) (V_{GSQ} - 2)^2$
$20 \times 10^{-3} = 5 \times 10^{-3} (V_{GSQ} - 2)^2$
$4 = (V_{GSQ} - 2)^2$
$V_{GSQ} - 2 = 2$ (taking the positive root since it's enhancement mode)
$V_{GSQ} = 4V$.
Now, $g_m = K (V_{GSQ} - V_{TH}) = (5 \times 10^{-3} A/V^2)(4V - 2V) = (5 \times 10^{-3})(2) = 10 \times 10^{-3} S = 10 mS$.

**Question 2:**
Consider a common-source amplifier with a MOSFET where $g_m = 5 mS$ and $R_D = 10 k\Omega$. If the source resistor $R_S = 1 k\Omega$ is *not* bypassed, what is the voltage gain $A_v$?

**Answer 2:**
For a common-source amplifier with an unbypassed source resistor, the voltage gain is given by $A_v = - \frac{g_m R_D}{1 + g_m R_S}$.
$A_v = - \frac{(5 \times 10^{-3} S) \times (10 \times 10^3 \Omega)}{1 + (5 \times 10^{-3} S) \times (1 \times 10^3 \Omega)}$
$A_v = - \frac{50}{1 + 5} = - \frac{50}{6} \approx -8.33$.

**Question 3:**
For a common-gate amplifier with $g_m = 8 mS$ and a load resistor $R_D = 5 k\Omega$, what is the approximate input impedance $Z_{in}$?

**Answer 3:**
The input impedance of a common-gate amplifier (when $r_o$ is large) is approximately $Z_{in} \approx 1/g_m$.
$Z_{in} \approx \frac{1}{8 \times 10^{-3} S} = \frac{1000}{8} \Omega = 125 \Omega$.

**Question 4:**
In a common-drain (source follower) amplifier, the load resistor $R_S = 20 k\Omega$ and the MOSFET has $g_m = 2 mS$. If $r_o$ is considered infinite, what is the voltage gain $A_v$?

**Answer 4:**
For a common-drain amplifier with infinite $r_o$, the voltage gain is $A_v = \frac{g_m R_S}{1 + g_m R_S}$.
$A_v = \frac{(2 \times 10^{-3} S) \times (20 \times 10^3 \Omega)}{1 + (2 \times 10^{-3} S) \times (20 \times 10^3 \Omega)}$
$A_v = \frac{40}{1 + 40} = \frac{40}{41} \approx 0.976$.

### 6. Important Points to Remember

*   The small-signal equivalent circuit represents the MOSFET's AC behavior around its DC operating point (Q-point).
*   The key parameters are transconductance ($g_m$) and output resistance ($r_o$).
*   $g_m = \sqrt{2 K I_{DQ}} = K(V_{GSQ} - V_{TH})$. It dictates the amplification.
*   $r_o = \frac{1}{\lambda I_{DQ}}$. It accounts for the slope of the $I_D$ vs. $V_{DS}$ curve and is often neglected if large.
*   In the small-signal model, the gate terminal is ideally open (zero gate current).
*   DC voltage sources are shorted to AC ground. Coupling and bypass capacitors are shorted at the operating frequency.
*   **Common Source:** High voltage gain, high input impedance, moderate output impedance.
*   **Common Gate:** Moderate voltage gain, low input impedance, moderate output impedance.
*   **Common Drain (Source Follower):** Voltage gain close to unity, very high input impedance, low output impedance.
