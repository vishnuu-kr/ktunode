---
title: "Small signal Voltage gain"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8d"
status: "completed"
scrapedAt: "2026-05-23T16:18:48.412Z"
---
# SOLID STATE DEVICES: Module 3: MOSFETs
## Topic: Small Signal Voltage Gain

**Course Outcome Alignment:** This topic directly contributes to **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**. Understanding voltage gain is fundamental to designing and analyzing MOSFET amplifier circuits.

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the concept of small-signal analysis for MOSFETs.
*   Derive the small-signal equivalent circuit of a MOSFET.
*   Analyze common MOSFET amplifier configurations (Common Source, Common Drain, Common Gate) using their small-signal equivalent circuits.
*   Calculate the voltage gain for each common MOSFET amplifier configuration.
*   Identify the impact of load resistors and other circuit components on voltage gain.
*   Understand the role of transconductance ($g_m$) and output resistance ($r_o$) in determining voltage gain.

---

### 1. Introduction to Small-Signal Analysis

Small-signal analysis is a crucial technique for understanding the AC behavior of amplifier circuits, including MOSFETs, when they are biased in their active (saturation) region. It allows us to linearize the non-linear characteristics of the transistor for small AC input signals.

**Key Concepts:**

*   **DC Biasing:** Before applying any AC signal, the MOSFET must be properly biased to operate in the saturation region. This establishes the DC operating point (Q-point), which includes DC drain current ($I_{DQ}$) and drain-source voltage ($V_{DSQ}$).
*   **AC Signals:** Small AC input signals are superimposed on the DC bias.
*   **Linearization:** The non-linear $I_D$ vs. $V_{GS}$ characteristic of the MOSFET is approximated by a linear relationship around the Q-point for small variations.
*   **Equivalent Circuit:** A small-signal equivalent circuit is developed to represent the AC behavior of the MOSFET, separating it from the DC biasing circuitry.

**Reference:**

*   **Boylested & Nashelsky (11/e):** Chapter 9 "MOSFETs" and Chapter 10 "FET Amplifiers" often introduce small-signal analysis in the context of transistor amplifiers.
*   **Sedra & Smith (6/e):** Chapter 7 "MOSFETs" and Chapter 8 "MOSFET Amplifiers" provide a thorough treatment of small-signal modeling and analysis.
*   **Bell (5/e):** Chapters related to FET amplifiers will cover these principles.

---

### 2. Small-Signal Equivalent Circuit of a MOSFET

The small-signal equivalent circuit models the AC behavior of the MOSFET. It typically consists of a voltage-controlled current source and a small output resistance.

**Derivation:**

The drain current ($I_D$) of a MOSFET operating in saturation can be approximated by the following equation:

$I_D \approx K(V_{GS} - V_{TH})^2$

where:
*   $K$ is a technology-dependent constant ($K = \frac{1}{2}\mu_n C_{ox} \frac{W}{L}$).
*   $V_{GS}$ is the gate-source voltage.
*   $V_{TH}$ is the threshold voltage.

Let the total gate-source voltage be $v_{GS} = V_{GSQ} + v_{gs}$, where $V_{GSQ}$ is the DC bias voltage and $v_{gs}$ is the small AC gate-source voltage.
Similarly, let $i_D = I_{DQ} + i_d$, where $I_{DQ}$ is the DC drain current and $i_d$ is the small AC drain current.

Substituting $v_{GS}$ into the drain current equation and expanding:

$i_D = K(V_{GSQ} + v_{gs} - V_{TH})^2$
$i_D = K[(V_{GSQ} - V_{TH}) + v_{gs}]^2$
$i_D = K(V_{GSQ} - V_{TH})^2 + 2K(V_{GSQ} - V_{TH})v_{gs} + Kv_{gs}^2$

The first term, $K(V_{GSQ} - V_{TH})^2$, represents the DC drain current $I_{DQ}$.
The last term, $Kv_{gs}^2$, is a second-order term. For small-signal analysis, we neglect these non-linear terms.

Therefore, the AC component of the drain current is:

$i_d \approx 2K(V_{GSQ} - V_{TH})v_{gs}$

We define the **transconductance** ($g_m$) as the proportionality constant between the AC drain current and the AC gate-source voltage:

$g_m = \frac{\partial i_D}{\partial v_{GS}} \bigg|_{Q-point} = 2K(V_{GSQ} - V_{TH})$

Also, recall that $I_{DQ} = K(V_{GSQ} - V_{TH})^2$. We can express $g_m$ in terms of $I_{DQ}$:

$g_m = \frac{2I_{DQ}}{V_{GSQ} - V_{TH}}$

Or, a more commonly used and practical expression for $g_m$:

$g_m = \frac{2I_{DQ}}{V_{OV}} = \sqrt{2\mu_n C_{ox} \frac{W}{L} I_{DQ}}$

where $V_{OV} = V_{GSQ} - V_{TH}$ is the overdrive voltage.

**Output Resistance ($r_o$):**

In reality, the drain current is also affected by the drain-source voltage ($V_{DS}$) due to the channel length modulation effect. The drain current equation is more accurately represented as:

$I_D = K(V_{GS} - V_{TH})^2 (1 + \lambda V_{DS})$

where $\lambda$ is the channel length modulation parameter. The output resistance ($r_o$) is defined as:

$r_o = \frac{\partial v_{ds}}{\partial i_d} \bigg|_{Q-point} = \left[ \frac{\partial I_D}{\partial V_{DS}} \right]^{-1} \bigg|_{Q-point}$

From the equation above:
$\frac{\partial I_D}{\partial V_{DS}} = KI_D \frac{\partial}{\partial V_{DS}} \left[ \frac{(V_{GS} - V_{TH})^2 (1 + \lambda V_{DS})}{I_{DQ}} \right]$
$\frac{\partial I_D}{\partial V_{DS}} = K(V_{GS} - V_{TH})^2 \lambda = I_D \lambda$

So, $r_o = \frac{1}{I_{DQ}\lambda}$

**Small-Signal Equivalent Circuit Model (Two-Port Model):**

The small-signal equivalent circuit of an NMOS transistor consists of:

1.  **Gate Terminal:** Connected to nothing in the AC circuit (since the gate current is assumed to be zero for ideal MOSFETs).
2.  **Source Terminal:** Connected to ground for common-source configuration, or to the circuit.
3.  **Drain Terminal:** Connected to the output.
4.  **Voltage-Controlled Current Source:** Connected between the drain and the source. Its value is $g_m v_{gs}$, where $v_{gs}$ is the small-signal voltage between the gate and the source.
5.  **Output Resistance ($r_o$):** Connected in parallel with the voltage-controlled current source, between the drain and the source. This accounts for the channel length modulation effect.

**Circuit Diagram:**

```
      D
      |
     / \
    /   \  ig = 0
   +-----o---- G
  vgs   /
   -   /
      |
      S
```

Adding $r_o$:

```
      D
      |
     .-.
     | | r_o
     '-'
      |
     / \  gm*vgs
    /   \
   +-----o---- G
  vgs   /
   -   /
      |
      S
```

**Important Points to Remember:**

*   The gate current is zero for ideal MOSFETs ($i_g = 0$).
*   The small-signal model is only valid for small AC signals.
*   The DC biasing circuitry is removed and replaced by short circuits (for voltage sources) or open circuits (for current sources) in the AC equivalent circuit.

**Reference:**

*   **Sedra & Smith (6/e):** Chapter 7.3 "Basic MOSFET Models" and Chapter 8.1 "The MOSFET as an Amplifier" are excellent resources for understanding the small-signal model.
*   **Razavi (2015):** Chapter 4 "MOSFETs" and Chapter 6 "MOSFET Amplifiers" provide a detailed discussion.

---

### 3. Common MOSFET Amplifier Configurations and Voltage Gain Analysis

We will now analyze the voltage gain ($A_v = \frac{v_{out}}{v_{in}}$) for the three basic MOSFET amplifier configurations.

#### 3.1 Common-Source (CS) Amplifier

**Circuit Diagram:**

(Assuming NMOS, with DC biasing resistors $R_G$, $R_D$, $R_S$ and AC coupling capacitors $C_1, C_2, C_s$)

```
      VDD
       |
       RD
       |
     .-----o D
     |    /
 C2  o---|  Gm=gm*vgs     o v_out
     |    \     || r_o
     |     o---- S
     |    / \
     o---|   |
     |   o---o G
     |   |   |
    Vin  |   RG
     |   |   |
     C1  o---|
     |   |
    --- ---
     GND GND
```

For AC analysis, $V_{DD}$ is a short to ground, and capacitors act as short circuits. The source resistor $R_S$ is bypassed by the capacitor $C_s$.

**Small-Signal Equivalent Circuit (CS Amplifier):**

```
      D
      |
      RD
      |
    .----o
    |   / \  gm*vgs
    |  /   \
    o--|    | r_o
    |  +----o---- S
    |  |    |
   Vin |    |
    ---|    |
       |    |
      GND  GND
```

Assuming $R_G$ is very large, $v_{in} = v_{gs}$.
The output voltage $v_{out}$ is taken at the drain terminal.
Using nodal analysis at the drain:

$i_{out} = \frac{v_{out}}{R_D} + \frac{v_{out}}{r_o}$ (where $i_{out}$ is the current flowing out of the drain node)
The current from the controlled source is $g_m v_{gs}$. This current flows *into* the drain node.

So, the nodal equation at the drain is:

$g_m v_{gs} = \frac{v_{out} - 0}{R_D} + \frac{v_{out} - 0}{r_o}$

$g_m v_{gs} = v_{out} \left( \frac{1}{R_D} + \frac{1}{r_o} \right)$

$g_m v_{gs} = v_{out} \left( \frac{r_o + R_D}{R_D r_o} \right)$

The voltage gain $A_v = \frac{v_{out}}{v_{in}}$. Since $v_{in} = v_{gs}$ (for an ideal large $R_G$):

$A_v = \frac{g_m v_{gs}}{v_{gs}} = g_m \left( \frac{R_D || r_o}{1} \right)$

$A_v = -g_m (R_D || r_o)$

**The negative sign indicates a 180-degree phase shift between input and output.**

**Key Observations:**

*   The voltage gain depends on the transconductance ($g_m$) and the parallel combination of the drain resistor ($R_D$) and the MOSFET's output resistance ($r_o$).
*   If $r_o \gg R_D$, then $A_v \approx -g_m R_D$.
*   If $R_D \gg r_o$, then $A_v \approx -g_m r_o$.

**Example:**

Consider a MOSFET biased such that $g_m = 2 \, \text{mS}$ and $r_o = 100 \, \text{k}\Omega$. If $R_D = 10 \, \text{k}\Omega$, calculate the voltage gain of a common-source amplifier.

$A_v = -g_m (R_D || r_o)$
$R_D || r_o = \frac{10 \, \text{k}\Omega \times 100 \, \text{k}\Omega}{10 \, \text{k}\Omega + 100 \, \text{k}\Omega} = \frac{1000 \, (\text{k}\Omega)^2}{110 \, \text{k}\Omega} \approx 9.09 \, \text{k}\Omega$

$A_v = -(2 \times 10^{-3} \, \text{S}) \times (9.09 \times 10^3 \, \Omega)$
$A_v \approx -18.18$

**Reference:**

*   **Bell (5/e):** Chapter 12 "Field-Effect Transistor Amplifiers" will have detailed analysis of CS amplifiers.
*   **Neamen (3/e):** Chapter 10 "MOSFET Amplifiers" covers this extensively.

---

#### 3.2 Common-Drain (CD) Amplifier (Source Follower)

**Circuit Diagram:**

```
      VDD
       |
       RD
       |
     .-----o D
     |    /
 C2  o---|  Gm=gm*vgs     o v_out
     |    \     || r_o
     |     o---- S-----o
     |    / \          |
     o---|   |          RS
     |   o---o G        |
     |   |   |         ---
     |   RG  |         GND
    Vin --- ---
     |   GND GND
     C1
     |
    ---
    GND
```

For AC analysis, $V_{DD}$ is a short to ground, and capacitors act as short circuits. The drain resistor $R_D$ is connected from drain to ground. The output voltage is taken at the source.

**Small-Signal Equivalent Circuit (CD Amplifier):**

```
      D
      |
      RD
      |
    .----o
    |   / \  gm*vgs
    |  /   \
    o--|    | r_o
    |  +----o---- S-----o v_out
    |  |    |     |
   Vin |    |     RS
    ---|    |     |
       |    |    ---
      GND  GND  GND
```

The input voltage is applied to the gate. The output voltage is taken at the source. The gate current is zero, so $R_G$ is effectively in parallel with the input to the MOSFET. However, for simplicity, we assume $R_G \gg$ input impedance of the MOSFET itself.

The input voltage seen by the MOSFET is $v_{gs} = v_{in} - v_{out}$.
The output current flows through $R_S$ (bypassed by $C_s$ in the full circuit, but we are analyzing the output taken directly from the source terminal, so $R_S$ is the load). Let's assume $R_S$ is the load resistor.

The drain node is connected to $R_D$ and $r_o$. These are in parallel. Let $R_L' = R_D || r_o$.

The equation at the drain node is:
$g_m v_{gs} = \frac{v_{out}}{R_L'}$

Substituting $v_{gs} = v_{in} - v_{out}$:
$g_m (v_{in} - v_{out}) = \frac{v_{out}}{R_L'}$
$g_m v_{in} - g_m v_{out} = \frac{v_{out}}{R_L'}$
$g_m v_{in} = v_{out} \left( g_m + \frac{1}{R_L'} \right)$
$g_m v_{in} = v_{out} \left( \frac{g_m R_L' + 1}{R_L'} \right)$

The voltage gain $A_v = \frac{v_{out}}{v_{in}}$:
$A_v = \frac{g_m R_L'}{g_m R_L' + 1}$

Substituting $R_L' = R_D || r_o$:

$A_v = \frac{g_m (R_D || r_o)}{g_m (R_D || r_o) + 1}$

**Key Observations:**

*   The voltage gain of a common-drain amplifier is always less than 1.
*   It has a high input impedance and a low output impedance (making it suitable for buffer applications).
*   The gain is approximately 1 if $g_m (R_D || r_o) \gg 1$.

**Example:**

Consider a MOSFET with $g_m = 5 \, \text{mS}$ and $r_o = 50 \, \text{k}\Omega$. If $R_D = 20 \, \text{k}\Omega$, calculate the voltage gain of a common-drain amplifier.

$R_L' = R_D || r_o = \frac{20 \, \text{k}\Omega \times 50 \, \text{k}\Omega}{20 \, \text{k}\Omega + 50 \, \text{k}\Omega} = \frac{1000 \, (\text{k}\Omega)^2}{70 \, \text{k}\Omega} \approx 14.29 \, \text{k}\Omega$

$A_v = \frac{g_m R_L'}{g_m R_L' + 1}$
$g_m R_L' = (5 \times 10^{-3} \, \text{S}) \times (14.29 \times 10^3 \, \Omega) \approx 71.45$

$A_v = \frac{71.45}{71.45 + 1} = \frac{71.45}{72.45} \approx 0.986$

**Reference:**

*   **Sedra & Smith (6/e):** Chapter 8.3 "The Common-Source Amplifier" and Chapter 8.4 "The Common-Drain (Source Follower) Amplifier" are highly relevant.
*   **Millman & Halkias (2/e):** Chapter 15 "FET Amplifiers" would cover this configuration.

---

#### 3.3 Common-Gate (CG) Amplifier

**Circuit Diagram:**

```
      VDD
       |
       RD
       |
     .-----o D-----o v_out
     |    /
     |   /  gm*vgs
     |  /    || r_o
     o--|     \
     |  +------o S
     |  |      |
    Vin |      RS
     ---|      |
        |     ---
       GND   GND
```

For AC analysis, the source is AC grounded (as it's common to the input and output in DC but bypassed for AC), but in the common-gate configuration, the source is the input terminal, and the gate is AC grounded.

Let's redraw with gate grounded for AC and source as input.

```
      VDD
       |
       RD
       |
     .-----o D-----o v_out
     |    /
     |   /  gm*vgs
     |  /    || r_o
     o--|     \
     |  +------o S-----o Vin
     |  |      |
     |  |      |
     ---|     ---
        |     GND
       GND
```

The gate is AC grounded. $v_{gs} = v_g - v_s$. Since $v_g = 0$ (gate is AC grounded), $v_{gs} = -v_s$.
The input voltage is applied to the source: $v_{in} = v_s$.
Therefore, $v_{gs} = -v_{in}$.

The output voltage $v_{out}$ is taken at the drain.
Nodal equation at the drain:

$g_m v_{gs} + \frac{v_{in}}{R_S} = \frac{v_{out}}{R_D} + \frac{v_{out}}{r_o}$
$g_m (-v_{in}) + \frac{v_{in}}{R_S} = v_{out} \left( \frac{1}{R_D} + \frac{1}{r_o} \right)$

$v_{in} \left( \frac{1}{R_S} - g_m \right) = v_{out} \left( \frac{r_o + R_D}{R_D r_o} \right)$

The voltage gain $A_v = \frac{v_{out}}{v_{in}}$:

$A_v = \frac{\frac{1}{R_S} - g_m}{\frac{1}{R_D} + \frac{1}{r_o}}$

$A_v = \frac{\frac{1 - g_m R_S}{R_S}}{\frac{r_o + R_D}{R_D r_o}}$

$A_v = \frac{1 - g_m R_S}{R_S} \times \frac{R_D r_o}{r_o + R_D}$

$A_v = \frac{1 - g_m R_S}{R_S} \times (R_D || r_o)$

**Key Observations:**

*   The common-gate amplifier provides voltage gain and has a low input impedance (approximately equal to $1/g_m$ if $R_S$ is small).
*   The gain is approximately $-g_m (R_D || r_o)$ if the source resistor $R_S$ is much smaller than $1/g_m$.
*   It exhibits no phase inversion if $R_S$ is small.

**Example:**

Consider a MOSFET with $g_m = 3 \, \text{mS}$ and $r_o = 80 \, \text{k}\Omega$. If $R_D = 12 \, \text{k}\Omega$ and $R_S = 1 \, \text{k}\Omega$, calculate the voltage gain of a common-gate amplifier.

$R_D || r_o = \frac{12 \, \text{k}\Omega \times 80 \, \text{k}\Omega}{12 \, \text{k}\Omega + 80 \, \text{k}\Omega} = \frac{960 \, (\text{k}\Omega)^2}{92 \, \text{k}\Omega} \approx 10.43 \, \text{k}\Omega$

$A_v = \frac{1 - g_m R_S}{R_S} \times (R_D || r_o)$
$g_m R_S = (3 \times 10^{-3} \, \text{S}) \times (1 \times 10^3 \, \Omega) = 3$

$A_v = \frac{1 - 3}{1 \, \text{k}\Omega} \times (10.43 \, \text{k}\Omega)$
$A_v = \frac{-2}{1000} \times 10430$
$A_v \approx -20.86$

**Reference:**

*   **Rashid (2/e):** Chapter 7 "MOSFET Amplifiers" will likely cover CG amplifier analysis.
*   **Sedra & Smith (6/e):** Chapter 8.5 "The Common-Gate Amplifier".

---

### 4. Summary of Voltage Gains

| Amplifier Configuration | Input Terminal | Output Terminal | Voltage Gain ($A_v$)                                       | Key Characteristics                                      |
| :-------------------- | :------------- | :-------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| Common-Source (CS)    | Gate           | Drain           | $-g_m (R_D || r_o)$                                        | High voltage gain, moderate input/output impedance, phase inversion |
| Common-Drain (CD)     | Gate           | Source          | $\frac{g_m (R_D || r_o)}{g_m (R_D || r_o) + 1}$             | Voltage gain < 1, high input impedance, low output impedance, no phase inversion |
| Common-Gate (CG)      | Source         | Drain           | $\frac{1 - g_m R_S}{R_S} (R_D || r_o)$                     | Voltage gain, low input impedance, moderate output impedance, no phase inversion |

**Note:** For the CG amplifier, if $R_S \ll 1/g_m$, the gain is approximately $-g_m (R_D || r_o)$. This approximation assumes the term $(1 - g_m R_S)/R_S$ is dominated by $-g_m/R_S$.

---

### 5. Practice Questions and Exercises

**Question 1:**
A MOSFET is biased in saturation with $V_{GSQ} = 3V$ and $V_{TH} = 1V$. The transconductance parameter $K_n = 0.5 \, \text{mA/V}^2$.
(a) Calculate $g_m$.
(b) If the overdrive voltage is $V_{OV} = 2V$, calculate $I_{DQ}$.
(c) If the channel length modulation parameter $\lambda = 0.02 \, \text{V}^{-1}$, and $I_{DQ} = 4 \, \text{mA}$, calculate $r_o$.

**Answer 1:**
(a) $g_m = 2K_n(V_{GSQ} - V_{TH}) = 2(0.5 \, \text{mA/V}^2)(3V - 1V) = 2(0.5)(2) \, \text{mA/V} = 2 \, \text{mS}$.
(b) $I_{DQ} = K_n(V_{GSQ} - V_{TH})^2 = 0.5 \, \text{mA/V}^2 \times (2V)^2 = 0.5 \times 4 \, \text{mA} = 2 \, \text{mA}$.
(c) $r_o = \frac{1}{I_{DQ}\lambda} = \frac{1}{(4 \, \text{mA})(0.02 \, \text{V}^{-1})} = \frac{1}{4 \times 10^{-3} \times 0.02} \, \Omega = \frac{1}{8 \times 10^{-5}} \, \Omega = 12.5 \, \text{k}\Omega$.

**Question 2:**
For a common-source amplifier, $g_m = 4 \, \text{mS}$ and $r_o = 80 \, \text{k}\Omega$. If the drain resistor $R_D = 15 \, \text{k}\Omega$, what is the voltage gain?

**Answer 2:**
$A_v = -g_m (R_D || r_o)$
$R_D || r_o = \frac{15 \, \text{k}\Omega \times 80 \, \text{k}\Omega}{15 \, \text{k}\Omega + 80 \, \text{k}\Omega} = \frac{1200 \, (\text{k}\Omega)^2}{95 \, \text{k}\Omega} \approx 12.63 \, \text{k}\Omega$
$A_v = -(4 \times 10^{-3} \, \text{S}) \times (12.63 \times 10^3 \, \Omega) \approx -50.52$

**Question 3:**
A common-drain amplifier has $g_m = 6 \, \text{mS}$ and $r_o = 120 \, \text{k}\Omega$. The drain resistor $R_D = 20 \, \text{k}\Omega$. Calculate the voltage gain.

**Answer 3:**
$R_L' = R_D || r_o = \frac{20 \, \text{k}\Omega \times 120 \, \text{k}\Omega}{20 \, \text{k}\Omega + 120 \, \text{k}\Omega} = \frac{2400 \, (\text{k}\Omega)^2}{140 \, \text{k}\Omega} \approx 17.14 \, \text{k}\Omega$
$g_m R_L' = (6 \times 10^{-3} \, \text{S}) \times (17.14 \times 10^3 \, \Omega) \approx 102.84$
$A_v = \frac{g_m R_L'}{g_m R_L' + 1} = \frac{102.84}{102.84 + 1} = \frac{102.84}{103.84} \approx 0.99$

**Question 4:**
For a common-gate amplifier, $g_m = 3 \, \text{mS}$, $r_o = 100 \, \text{k}\Omega$, $R_D = 10 \, \text{k}\Omega$, and $R_S = 2 \, \text{k}\Omega$. Calculate the voltage gain.

**Answer 4:**
$R_D || r_o = \frac{10 \, \text{k}\Omega \times 100 \, \text{k}\Omega}{10 \, \text{k}\Omega + 100 \, \text{k}\Omega} = \frac{1000 \, (\text{k}\Omega)^2}{110 \, \text{k}\Omega} \approx 9.09 \, \text{k}\Omega$
$g_m R_S = (3 \times 10^{-3} \, \text{S}) \times (2 \times 10^3 \, \Omega) = 6$
$A_v = \frac{1 - g_m R_S}{R_S} \times (R_D || r_o) = \frac{1 - 6}{2 \, \text{k}\Omega} \times (9.09 \, \text{k}\Omega)$
$A_v = \frac{-5}{2000} \times 9090 = -2.5 \times 4.545 \approx -11.36$

---

### 6. Important Points to Remember

*   **Small-signal analysis linearizes the MOSFET's behavior around its DC operating point (Q-point).**
*   **The transconductance ($g_m$) is a key parameter that relates the AC gate-source voltage to the AC drain current.**
*   **Output resistance ($r_o$) accounts for channel length modulation and is in parallel with the controlled current source.**
*   **Common-Source:** High voltage gain, phase inversion, moderate input/output impedance.
*   **Common-Drain (Source Follower):** Voltage gain close to unity, high input impedance, low output impedance, acts as a buffer.
*   **Common-Gate:** Voltage gain, low input impedance, moderate output impedance, no phase inversion.
*   **The load resistance (e.g., $R_D$) and the MOSFET's output resistance ($r_o$) significantly affect the voltage gain.**
*   **For practical analysis, always convert voltage sources to short circuits and current sources to open circuits in the AC equivalent circuit.**
*   **Capacitors are treated as short circuits for AC signals at frequencies where their impedance is negligible.**

---

This concludes the notes on Small Signal Voltage Gain for MOSFETs. Refer to the listed textbooks and reference books for more detailed explanations and additional examples.
