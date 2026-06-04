---
title: "MOS small signal model:"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41a"
status: "completed"
scrapedAt: "2026-05-23T18:08:02.510Z"
---
# MIXED SIGNAL CIRCUITS

## Module 1: MOS Small-Signal Model

### Topic: MOS Small-Signal Model

This module introduces the fundamental concept of the MOS small-signal model, which is essential for analyzing the AC behavior of MOS transistors in analog circuits. This model allows us to simplify complex non-linear transistor behavior into linear equations for AC signal analysis.

---

### Learning Outcomes Covered:

*   **Understanding the Need for Small-Signal Models:** Why linearizing the non-linear MOS transistor behavior is crucial for AC analysis.
*   **Deriving the Small-Signal Equivalent Circuit:** How to extract the small-signal parameters from the DC operating point.
*   **Understanding and Calculating Key Small-Signal Parameters:** Transconductance ($g_m$), Output Conductance ($g_{ds}$ or $g_{ds0}$), and Early Voltage ($V_A$ or $V_{EB}$).
*   **Analyzing Simple MOS Amplifier Configurations:** Applying the small-signal model to analyze common amplifier circuits like Common Source (CS), Common Gate (CG), and Common Drain (CD).
*   **Understanding the Role of Capacitances:** Incorporating intrinsic capacitances ($C_{gs}$, $C_{gd}$, $C_{ds}$) into the small-signal model for frequency response analysis.

---

### Key Concepts and Definitions:

#### 1. The MOS Transistor: A Non-Linear Device

The fundamental current-voltage (I-V) characteristics of a MOS transistor are non-linear. For example, the drain current ($I_D$) in the saturation region is approximately:

$I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2 = K_n (V_{GS} - V_{TH})^2$

where:
*   $\mu_n$: Electron mobility
*   $C_{ox}$: Oxide capacitance per unit area
*   $W/L$: Width-to-length ratio
*   $V_{GS}$: Gate-to-source voltage
*   $V_{TH}$: Threshold voltage
*   $K_n = \frac{1}{2} \mu_n C_{ox} \frac{W}{L}$: Transconductance parameter

This non-linearity makes direct AC analysis complex.

#### 2. The Need for Small-Signal Models

To analyze the AC behavior of circuits containing MOS transistors, we need to approximate the non-linear I-V characteristics with a linear model for small AC signals. This is achieved by:

*   **Establishing a DC Operating Point (Bias):** The transistor is biased to operate in a specific region (typically saturation for amplifiers). This bias point determines the DC currents and voltages.
*   **Linearizing the I-V Characteristics:** Using Taylor series expansion around the DC operating point, we can express the small AC variations in current as a linear function of small AC variations in voltage.

**Example (Razavi, Chapter 4):**

Consider the drain current $I_D(V_{GS})$. If $V_{GS} = V_{GS} + v_{gs}$, where $V_{GS}$ is the DC bias and $v_{gs}$ is the small AC component, then:

$I_D(V_{GS} + v_{gs}) \approx I_D(V_{GS}) + \frac{\partial I_D}{\partial V_{GS}}|_{V_{GS}} \cdot v_{gs}$

Since $I_D(V_{GS})$ is the DC drain current, the AC component of the drain current, $i_d$, is given by:

$i_d = \frac{\partial I_D}{\partial V_{GS}}|_{V_{GS}} \cdot v_{gs}$

#### 3. Small-Signal Parameters

The key small-signal parameters are derived from the partial derivatives of the drain current with respect to the terminal voltages.

*   **Transconductance ($g_m$):** This is the most important parameter, representing the change in drain current for a change in gate-source voltage, while keeping other voltages constant.

    $g_m = \frac{\partial I_D}{\partial V_{GS}} \Big|_{V_{GS}, V_{DS}} $

    For a MOSFET in saturation:
    $I_D = K_n (V_{GS} - V_{TH})^2$
    $g_m = 2 K_n (V_{GS} - V_{TH}) = 2 K_n V_{OV}$
    where $V_{OV} = V_{GS} - V_{TH}$ is the overdrive voltage.
    Alternatively, using the definition $I_D = \frac{1}{2} g_m V_{OV}$:
    $g_m = \frac{2 I_D}{V_{OV}} = \frac{2 I_D}{V_{GS} - V_{TH}}$

    **(Important Point):** $g_m$ is directly proportional to the DC drain current ($I_D$) and the overdrive voltage ($V_{OV}$). Higher DC bias current leads to higher $g_m$.

*   **Output Conductance ($g_{ds}$ or $g_{ds0}$):** This represents the change in drain current for a change in drain-source voltage, while keeping other voltages constant. It accounts for the Early effect (channel length modulation).

    $g_{ds} = \frac{\partial I_D}{\partial V_{DS}} \Big|_{V_{GS}, V_{DS}} $

    For a MOSFET in saturation with channel length modulation:
    $I_D = K_n (V_{GS} - V_{TH})^2 (1 + \lambda V_{DS}) = I_{D,sat} (1 + \lambda V_{DS})$
    where $\lambda = \frac{1}{V_A}$ is the channel length modulation parameter, and $V_A$ is the Early voltage.

    $g_{ds} = K_n (V_{GS} - V_{TH})^2 \lambda = I_{D,sat} \lambda = \frac{I_{D,sat}}{V_A}$

    **(Important Point):** $g_{ds}$ is small for long channel devices ($\lambda$ is small, $V_A$ is large). It is proportional to the DC drain current and inversely proportional to the Early voltage. For AC analysis, we often use the parameter $r_{ds} = 1/g_{ds}$ as the output resistance.

    *   **Early Voltage ($V_A$):** This parameter characterizes the dependence of drain current on $V_{DS}$ in saturation. It represents the voltage at which the extrapolated drain current characteristic intersects the $V_{DS}$ axis. A larger $V_A$ implies a more ideal current source behavior.
        $V_A = \frac{1}{\lambda}$

#### 4. The Small-Signal Equivalent Circuit of a MOSFET

The small-signal equivalent circuit represents the MOSFET as a linear circuit with three terminals: Gate (G), Drain (D), and Source (S).

*   **Gate Terminal:** The gate is considered a high-impedance node. The small-signal voltage between gate and source is $v_{gs}$.
*   **Source Terminal:** The source current is $i_s$.
*   **Drain Terminal:** The drain current is $i_d$.

The equivalent circuit consists of:

1.  **A Voltage-Controlled Current Source:** Connected between drain and source, its value is $g_m v_{gs}$, representing the controlled current generated by the gate-source voltage.
2.  **An Output Resistance ($r_{ds}$):** Connected in parallel with the voltage-controlled current source, representing the output conductance ($g_{ds}$). Its value is $1/g_{ds}$.

**Circuit Diagram:**

```
       G ----+
             |
             |  (High Impedance)
             |
             o
            / \
           /   \
          /     \
         /       \
        o---------o
       / \       / \
      /   \     /   \
     /     \   /     \
    +-------+ +-------+
    S         D
    |         |
    |         |
    o---------o
    |         |
    (VCVS: g_m * v_gs) (Parallel Resistor: r_ds)
```

**Important Notes on the Equivalent Circuit:**

*   **DC Sources are Shorted:** During AC analysis, all DC voltage sources are replaced by short circuits, and all DC current sources are replaced by open circuits. This is because AC signals are variations around a DC operating point.
*   **Input Impedance:** The input impedance seen at the gate is very high, ideally infinite (ignoring parasitic resistances).
*   **Output Impedance:** The output impedance is primarily determined by $r_{ds}$ and any external circuitry.
*   **Transconductance ($g_m$):** This is the crucial parameter that dictates the voltage gain of amplifier stages.

#### 5. Applying the Small-Signal Model to Basic Amplifier Configurations

The small-signal equivalent circuit is used to analyze the AC voltage gain, input impedance, and output impedance of amplifier circuits.

##### a) Common Source (CS) Amplifier

**Circuit:**

```
      VDD
       |
       RL
       |
    D-----o
    |     |
    |     | GMOS
    S-----o----o Vout
    |     |    |
    |     |    Rin
    |     |
    Cin   G----o Vin
    |     |
   ---   ---
   GND   GND

(Assume a source resistor Rs is bypassed by a capacitor Cs for AC analysis to achieve high gain)
```

**Small-Signal Equivalent Circuit:**

```
      VDD (Short)
       |
       RL
       |
    D-----o
    |     |
    |     | gm*vgs ---+
    S-----o----------o Vout
    |     |          |
    |     |          | rds
    |     |          |
    |     |          |
    G-----o----------+----o Vin
          |
          |
          +----o Vgs
```

**Analysis:**

*   **Voltage Gain ($A_v = v_{out}/v_{in}$):**
    *   $v_{gs} = v_{in}$ (since Gate is directly connected to Vin and VDD is shorted)
    *   $i_d = g_m v_{gs}$
    *   $v_{out} = -i_d \cdot (R_L || r_{ds})$
    *   $v_{out} = -(g_m v_{gs}) \cdot (R_L || r_{ds})$
    *   $A_v = \frac{v_{out}}{v_{in}} = -g_m (R_L || r_{ds})$

    **(Important Point):** The gain is negative, indicating inversion. The magnitude of the gain depends on $g_m$, the load resistance ($R_L$), and the output resistance ($r_{ds}$). If $r_{ds} \gg R_L$, then $A_v \approx -g_m R_L$.

*   **Input Impedance ($Z_{in}$):**
    *   The gate is directly connected to Vin, and it's a high-impedance node.
    *   $Z_{in} \approx \infty$ (ignoring finite gate leakage resistance).

*   **Output Impedance ($Z_{out}$):**
    *   To find $Z_{out}$, we set $v_{in} = 0$. This shorts the gate to the source, so $v_{gs} = 0$.
    *   The voltage-controlled current source ($g_m v_{gs}$) becomes zero.
    *   The output is connected to $R_L$ and $r_{ds}$ in parallel.
    *   $Z_{out} = R_L || r_{ds}$

##### b) Common Gate (CG) Amplifier

**Circuit:**

```
      VDD
       |
       RL
       |
    D-----o
    |     |
    |     | GMOS
    S-----o----o Vout
    |     |
    |     |
    G-----o----o Vin (AC Grounded via Cin)
    |
   Rs
    |
   ---
   GND

(Source is connected to Rs, Gate is AC grounded)
```

**Small-Signal Equivalent Circuit:**

```
      VDD (Short)
       |
       RL
       |
    D-----o
    |     |
    |     | gm*vgs ---+
    S-----o----------o Vout
    |     |          |
    |     |          | rds
    |     |          |
    |     |          |
    G-----o----------+----o AC Ground
    |
   Rs
    |
   ---
   GND
```

**Analysis:**

*   **Voltage Gain ($A_v = v_{out}/v_{in}$):**
    *   The gate is AC grounded ($v_g = 0$).
    *   $v_{gs} = v_g - v_s = 0 - v_s = -v_s$.
    *   The input current $i_{in}$ flows into the source: $i_{in} = i_s$.
    *   From KCL at the source node: $i_{in} = g_m v_{gs} + v_s/r_{ds}$
    *   Substituting $v_{gs} = -v_s$: $i_{in} = -g_m v_s + v_s/r_{ds} = v_s (-g_m + 1/r_{ds})$
    *   $i_{in} = -v_s (g_m - 1/r_{ds})$
    *   $v_s = \frac{-i_{in}}{g_m - 1/r_{ds}} = \frac{-i_{in}}{g_m(1 - 1/(g_m r_{ds}))}$
    *   Since $g_m r_{ds} \gg 1$, $v_s \approx -\frac{i_{in}}{g_m}$.
    *   $v_{out} = -(g_m v_{gs}) (R_L || r_{ds})$
    *   $v_{out} = -(-g_m v_s) (R_L || r_{ds}) = g_m v_s (R_L || r_{ds})$
    *   $v_{out} = g_m (-\frac{i_{in}}{g_m}) (R_L || r_{ds}) = -i_{in} (R_L || r_{ds})$
    *   $A_v = \frac{v_{out}}{v_{in}} = \frac{v_{out}}{i_{in} \cdot R_s} = \frac{-i_{in} (R_L || r_{ds})}{i_{in} \cdot R_s} = -\frac{R_L || r_{ds}}{R_s}$
    *   **However, the standard CG gain is usually expressed with respect to $v_{in}$ which is connected to the *source*.**
    *   Let's re-evaluate $A_v = v_{out}/v_{in}$, where $v_{in}$ is the voltage at the source.
    *   $v_{gs} = -v_{in}$
    *   $v_{out} = -i_d (R_L || r_{ds}) = -(g_m v_{gs}) (R_L || r_{ds})$
    *   $v_{out} = -g_m (-v_{in}) (R_L || r_{ds}) = g_m v_{in} (R_L || r_{ds})$
    *   $A_v = \frac{v_{out}}{v_{in}} = g_m (R_L || r_{ds})$

    **(Important Point):** The gain is positive (non-inverting). The input impedance is low, determined by $1/g_m$.

*   **Input Impedance ($Z_{in}$):**
    *   The input is applied to the source terminal.
    *   $Z_{in}$ is the impedance seen looking into the source.
    *   $Z_{in} = \frac{v_{in}}{i_{in}}$. From the KCL at the source: $i_{in} = v_s (-g_m + 1/r_{ds})$.
    *   $v_{in} = v_s$. So $i_{in} = v_{in} (-g_m + 1/r_{ds})$.
    *   $Z_{in} = \frac{v_{in}}{i_{in}} = \frac{1}{-g_m + 1/r_{ds}} = \frac{-1}{g_m - 1/r_{ds}} \approx \frac{-1}{g_m}$ (since $g_m r_{ds} \gg 1$)
    *   **The input impedance of a CG amplifier is low, approximately $1/g_m$.**

*   **Output Impedance ($Z_{out}$):**
    *   Set $v_{in} = 0$. This grounds the gate through $C_{in}$. So $v_{gs} = v_g - v_s = 0 - v_s = -v_s$.
    *   However, $v_{in}$ is applied to the source, so $v_{in} = v_s$. Thus, if $v_{in}=0$, then $v_s=0$.
    *   If $v_s=0$, then $v_{gs} = v_g - v_s = 0 - 0 = 0$.
    *   The voltage-controlled current source $g_m v_{gs}$ becomes zero.
    *   $Z_{out} = R_L || r_{ds}$

##### c) Common Drain (CD) Amplifier (Source Follower)

**Circuit:**

```
      VDD
       |
       RL
       |
    D-----o
    |     |
    |     | GMOS
    S-----o----o Vout
    |     |
    |     |
    G-----o----o Vin
    |
   ---
   GND
```

**Small-Signal Equivalent Circuit:**

```
      VDD (Short)
       |
       RL
       |
    D-----o
    |     |
    |     | gm*vgs ---+
    S-----o----------o Vout
    |     |          |
    |     |          | rds
    |     |          |
    |     |          |
    G-----o----------+----o Vin
```

**Analysis:**

*   **Voltage Gain ($A_v = v_{out}/v_{in}$):**
    *   $v_{gs} = v_{in} - v_{out}$ (since $v_{in}$ is at the gate and $v_{out}$ is at the source)
    *   $v_{out} = (g_m v_{gs} + v_{ds}/r_{ds}) R_L$
    *   The voltage across the current source is $v_{ds}$. But the current is $i_d$, so $v_{ds} = v_d - v_s$. Since $v_d$ is connected to VDD (shorted for AC), $v_d=0$. Thus $v_{ds} = 0 - v_s = -v_s$.
    *   Wait, this is incorrect. $v_d$ is connected to VDD, which is AC grounded for AC analysis. So $v_d = 0$. Therefore, $v_{ds} = v_d - v_s = 0 - v_{out} = -v_{out}$.
    *   The current flowing out of the drain is $i_d = g_m v_{gs} + v_{ds}/r_{ds}$.
    *   $i_d = g_m (v_{in} - v_{out}) + (-v_{out})/r_{ds}$
    *   This current flows through $R_L$ to ground, so $i_d = v_{out} / R_L$.
    *   $\frac{v_{out}}{R_L} = g_m (v_{in} - v_{out}) - \frac{v_{out}}{r_{ds}}$
    *   $\frac{v_{out}}{R_L} = g_m v_{in} - g_m v_{out} - \frac{v_{out}}{r_{ds}}$
    *   $v_{out} (\frac{1}{R_L} + g_m + \frac{1}{r_{ds}}) = g_m v_{in}$
    *   $v_{out} (\frac{1 + g_m R_L + R_L/r_{ds}}{R_L}) = g_m v_{in}$
    *   $A_v = \frac{v_{out}}{v_{in}} = \frac{g_m R_L}{1 + g_m R_L + R_L/r_{ds}}$
    *   Assuming $g_m R_L \gg 1$ and $g_m r_{ds} \gg 1$ (i.e., $R_L$ and $r_{ds}$ are large compared to $1/g_m$), we get:
    *   $A_v \approx \frac{g_m R_L}{g_m R_L} = 1$
    *   **The voltage gain of a CD amplifier is slightly less than 1.**

*   **Input Impedance ($Z_{in}$):**
    *   $Z_{in}$ is the impedance seen looking into the gate terminal.
    *   $Z_{in} = \frac{v_{in}}{i_{in}}$.
    *   $i_{in}$ is the current flowing into the gate, which is ideally zero.
    *   $Z_{in} \approx \infty$ (ignoring finite gate leakage resistance).
    *   **However, if we consider the input impedance *looking into the source terminal where the voltage is applied*, it's different.** This is often how input impedance is defined for common-drain. Let's consider the impedance seen by the input signal *source* that drives the gate.
    *   We need to look at the impedance of the source terminal. $i_{in}$ flows into the gate. So the input impedance as seen by the voltage source $v_{in}$ is infinite.
    *   If we consider the input impedance *of the circuit* from the gate, it's infinity.

    Let's reconsider the input impedance. The input voltage is applied to the gate. The gate current $i_g$ is ideally zero. Therefore, the input impedance seen at the gate is infinite.

*   **Output Impedance ($Z_{out}$):**
    *   To find $Z_{out}$, we set $v_{in} = 0$. This shorts the gate to the source.
    *   $v_{gs} = v_g - v_s = 0 - v_{out} = -v_{out}$.
    *   The current flowing into the output node is $i_{out}$.
    *   $i_{out} = i_d - i_{ds}$ (where $i_{ds}$ is the current through $r_{ds}$)
    *   $i_{out} = g_m v_{gs} + v_{ds}/r_{ds}$
    *   $v_{ds} = v_d - v_s = 0 - v_{out} = -v_{out}$.
    *   $i_{out} = g_m (-v_{out}) + (-v_{out})/r_{ds} = -v_{out} (g_m + 1/r_{ds})$
    *   $Z_{out} = \frac{v_{out}}{-i_{out}} = \frac{v_{out}}{v_{out} (g_m + 1/r_{ds})} = \frac{1}{g_m + 1/r_{ds}} = \frac{1}{g_m (1 + 1/(g_m r_{ds}))}$
    *   Assuming $g_m r_{ds} \gg 1$:
    *   $Z_{out} \approx \frac{1}{g_m}$

    **(Important Point):** The output impedance of a CD amplifier is low, approximately $1/g_m$. This makes it useful for driving low-impedance loads.

#### 6. Intrinsic Capacitances

MOSFETs also have parasitic capacitances between their terminals. These are important for understanding the frequency response of circuits.

*   **Gate-Source Capacitance ($C_{gs}$):** Capacitance between gate and source.
*   **Gate-Drain Capacitance ($C_{gd}$):** Capacitance between gate and drain. This is particularly important as it couples signals from the output to the input, leading to the Miller effect in CS amplifiers.
*   **Gate-Bulk Capacitance ($C_{gb}$):** Capacitance between gate and bulk (substrate). Usually ignored if the bulk is connected to AC ground.
*   **Drain-Bulk Capacitance ($C_{db}$):** Capacitance between drain and bulk.
*   **Source-Bulk Capacitance ($C_{sb}$):** Capacitance between source and bulk.

The small-signal model is extended to include these capacitances. For example, in a CS amplifier, $C_{gs}$ appears between the input and the source node, $C_{gd}$ appears between the input and the output node, and $C_{ds}$ appears between the drain and source nodes.

**Small-Signal Model with Capacitances:**

```
       G ----+-------o
             |       |
             |       | Cgs
             |       |
             o-------o-------+
            / \      |       |
           /   \     |       | Cgd
          /     \    |       |
         /       \   |       |
        o---------o--+-------o
       / \       / \         |
      /   \     /   \        | Cds
     /     \   /     \       |
    +-------+ +-------+      |
    S         D--------------o
    |         |
    |         | (VCVS: g_m * v_gs) (Parallel Resistor: r_ds)
    o---------o
```

**Miller Effect in CS Amplifier:**

The $C_{gd}$ capacitance, in conjunction with the voltage gain of the CS amplifier, appears as a much larger capacitance at the input.

*   $v_{gd} = v_g - v_d$. In the CS amplifier, $v_g = v_{in}$ and $v_d = v_{out} = A_v v_{in}$.
*   $v_{gd} = v_{in} - A_v v_{in} = v_{in} (1 - A_v)$.
*   The current through $C_{gd}$ is $i_{gd} = C_{gd} \frac{d v_{gd}}{dt} = C_{gd} (1 - A_v) \frac{d v_{in}}{dt}$.
*   This current is drawn from the input node. Therefore, it appears as an effective input capacitance $C_{in,eff} = C_{gd} (1 - A_v)$.
*   Since $A_v$ is negative for a CS amplifier, $1-A_v$ is positive and greater than 1.
*   **Miller Capacitance:** $C_M = C_{gd} (1 - A_v)$.
*   The total input capacitance is approximately $C_{in,total} = C_{gs} + C_M$.

**(Important Point):** The Miller effect significantly increases the input capacitance, limiting the high-frequency response of the CS amplifier.

---

### Practice Questions and Exercises:

**Question 1:**

A MOSFET with $V_{TH} = 1V$ and $\mu_n C_{ox} \frac{W}{L} = 2 mA/V^2$ is biased in saturation with $V_{GS} = 2V$ and $V_{DS} = 3V$. The channel length modulation parameter $\lambda = 0.1 V^{-1}$.

a) Calculate the DC drain current ($I_D$).
b) Calculate the transconductance ($g_m$).
c) Calculate the output resistance ($r_{ds}$).
d) Draw the small-signal equivalent circuit for this MOSFET.

**Answer 1:**

a) $I_D = K_n (V_{GS} - V_{TH})^2 = 2 mA/V^2 \cdot (2V - 1V)^2 = 2 mA/V^2 \cdot (1V)^2 = 2 mA$.

b) $g_m = 2 K_n (V_{GS} - V_{TH}) = 2 \cdot (2 mA/V^2) \cdot (2V - 1V) = 4 mA/V$.
   Alternatively, $g_m = \frac{2 I_D}{V_{GS} - V_{TH}} = \frac{2 \cdot 2 mA}{2V - 1V} = \frac{4 mA}{1V} = 4 mA/V$.

c) $V_A = 1/\lambda = 1/0.1 V^{-1} = 10V$.
   $r_{ds} = V_A / I_D = 10V / 2 mA = 5 k\Omega$.
   Alternatively, $r_{ds} = 1/g_{ds} = 1/(I_D \lambda) = 1/(2 mA \cdot 0.1 V^{-1}) = 1/0.2 mS = 5 k\Omega$.

d) **Small-Signal Equivalent Circuit:**
   ```
         G ----+
               |
               |  (Infinite Impedance)
               |
               o
              / \
             /   \
            /     \
           /       \
          o---------o
         / \       / \
        /   \     /   \
       /     \   /     \
      +-------+ +-------+
      S         D
      |         |
      |         | (VCVS: 4mS * v_gs) (Parallel Resistor: 5kOhm)
      o---------o
   ```

**Question 2:**

Consider a Common Source amplifier with a MOSFET biased as in Question 1, and a load resistor $R_L = 10 k\Omega$. Assume the MOSFET's $r_{ds}$ is much larger than $R_L$.

a) Draw the small-signal equivalent circuit of the CS amplifier.
b) Calculate the voltage gain $A_v$.
c) What is the input impedance of the amplifier?
d) What is the output impedance of the amplifier?

**Answer 2:**

a) **Small-Signal Equivalent Circuit:**
   ```
         VDD (Short)
          |
         RL (10k)
          |
       D-----o
       |     |
       |     | gm*vgs ---+
       S-----o----------o Vout
       |     |          |
       |     |          | rds (very large, so effectively open)
       |     |          |
       |     |          |
       G-----o----------+----o Vin
   ```

b) $g_m = 4 mA/V$. $R_L = 10 k\Omega$. $r_{ds} \gg R_L$.
   $A_v = -g_m (R_L || r_{ds}) \approx -g_m R_L = -(4 mA/V) \cdot (10 k\Omega) = -40$.

c) The input impedance seen at the gate is ideally infinite. $Z_{in} \approx \infty$.

d) $Z_{out} = R_L || r_{ds} \approx R_L = 10 k\Omega$ (since $r_{ds}$ is very large).

**Question 3:**

For a Common Gate amplifier, what is its primary advantage and disadvantage compared to a Common Source amplifier?

**Answer 3:**

*   **Advantage:** The Common Gate amplifier provides a **non-inverting** voltage gain and has a **low input impedance**. This low input impedance can be useful for matching to low-impedance sources.
*   **Disadvantage:** The input impedance is very low, which can be problematic if the source impedance is high. The voltage gain is also typically smaller than a CS amplifier for the same load.

---

### Important Points to Remember:

*   **Small-signal analysis linearizes the non-linear behavior of the MOSFET for AC signals around a DC bias point.**
*   **Key parameters are transconductance ($g_m$) and output conductance ($g_{ds}$ or $r_{ds}$).**
*   $g_m = 2 I_D / V_{OV}$ and $g_m = I_D / (2 V_{OV})$ (for quadratic model) or $g_m = 2 K_n V_{OV}$.
*   $r_{ds} = 1/g_{ds} = V_A / I_D$, where $V_A = 1/\lambda$.
*   **DC sources are shorted, and AC sources are treated as the AC signals.**
*   **CS Amplifier:** High input impedance, inverting gain, output impedance is $R_L || r_{ds}$.
*   **CG Amplifier:** Low input impedance, non-inverting gain, output impedance is $R_L || r_{ds}$.
*   **CD Amplifier (Source Follower):** High input impedance, gain slightly less than 1, low output impedance ($1/g_m$).
*   **Miller Effect:** $C_{gd}$ in CS amplifiers appears as a larger capacitance at the input due to voltage gain, limiting bandwidth.

---

### Alignment with Course Outcomes:

*   **CO1: Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2)**
    *   This module directly addresses the explanation of basic single-stage MOS amplifiers (CS, CG, CD) by introducing their small-signal models and analysis. The load resistor ($R_L$) is a key component in this analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbook and Reference Book Content Incorporation:

*   **Razavi, Design of Analog CMOS Integrated Circuits:** Chapter 4 extensively covers the MOS small-signal model, derivation of parameters ($g_m, g_{ds}$), and analysis of basic amplifiers (CS, CG, CD) using the small-signal equivalent circuit. The concept of overdrive voltage ($V_{OV}$) and channel length modulation ($\lambda$) is central.
*   **Baker, Li, Boyce, CMOS: Circuits Design, Layout and Simulation:** Similar to Razavi, this book provides detailed explanations of the small-signal model, including the derivation of $g_m$ and $r_{ds}$ from device physics and layout parameters. It also analyzes amplifier configurations.
*   **Sedra & Smith, Microelectronic Circuits:** Chapter 7 (MOSFETs) and subsequent chapters on amplifier analysis would cover the small-signal models and their application to CS, CG, and CD amplifiers. They often emphasize the derivation of $g_m$ and $r_{ds}$ and the analysis of input/output impedances and voltage gains.
*   **Allen & Holbery, CMOS Analog Circuit Design:** This book likely provides a thorough treatment of the small-signal model, covering its derivation, parameters, and applications in amplifier design with a focus on practical aspects.
*   **Razavi, Fundamentals of Microelectronics:** This book would offer a more introductory explanation of the MOS small-signal model and its fundamental components.

This module lays the groundwork for understanding how these transistors behave in amplifier circuits, which is crucial for achieving CO1 and subsequently for understanding multi-stage amplifiers (CO3) and frequency compensation (CO4).