---
title: "Common gate and Common drain amplifier (only voltage gain and input and output impedances of the circuits)."
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41d"
status: "completed"
scrapedAt: "2026-05-23T18:08:04.948Z"
---
# Mixed Signal Circuits: Module 1: MOS Small Signal Model

## Topic: Common Gate (CG) and Common Drain (CD) Amplifiers

### Introduction

This module focuses on the analysis of fundamental single-stage MOS amplifier configurations: the Common Gate (CG) and Common Drain (CD) amplifiers. We will delve into their small-signal behavior, specifically analyzing their voltage gain, input impedance, and output impedance using the MOS small-signal model. This knowledge is crucial for understanding more complex analog circuits like operational amplifiers.

### Course Outcomes Addressed:

*   **CO1: Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2)** - This topic directly addresses the explanation of two single-stage amplifier configurations.

---

## 1. Common Gate (CG) Amplifier

The Common Gate amplifier configuration is characterized by the input signal being applied to the source terminal, the output taken from the drain terminal, and the gate terminal being AC-grounded (or connected to a constant voltage source). This configuration is known for its high input impedance and is often used in applications where a high input impedance is not a primary requirement but good current gain or voltage gain is needed.

### Small-Signal Model of the CG Amplifier

We'll use the standard MOS small-signal model, which includes the transconductance ($g_m$) and the output resistance ($r_o$) of the MOSFET.

**(Refer to Razavi, Chapter 3: Small-Signal Models, or Sedra & Smith, Chapter 4: MOS Transistors - Small-Signal Models)**

**Circuit Diagram (Conceptual):**

```
      Vin --+
            |
           [S]
            |
      +-----GM-----D----+
      |     |       |    |
      |    [G]-----GND   Ro
      |     |            |
      |    [D]----------+--- Vout
      |     |
      RL    |
      |     |
     GND   GND
```

*   **Input:** Applied to the Source (S).
*   **Output:** Taken from the Drain (D).
*   **Gate (G):** AC-grounded.

### Analysis of CG Amplifier

#### Voltage Gain ($A_v$)

The voltage gain is defined as the ratio of the output voltage ($V_{out}$) to the input voltage ($V_{in}$).

**Steps for analysis:**

1.  **Replace the MOSFET with its small-signal model.**
2.  **Apply input voltage $V_{in}$ to the source.**
3.  **Set AC ground at the gate.**
4.  **Write KCL or Ohm's law equations to relate $V_{out}$ and $V_{in}$.**

**Derivation:**

The current flowing into the source terminal of the MOSFET is $i_{s} = -g_m v_{gs}$.
Since the gate is AC-grounded, $v_{gs} = v_{s} - v_{g} = V_{in} - 0 = V_{in}$.
Therefore, $i_{s} = -g_m V_{in}$.

This current $i_s$ flows *into* the source terminal of the MOSFET. By Kirchhoff's Current Law (KCL) at the source node, the current flowing out of the source terminal must be equal to the current flowing into the source terminal.

Alternatively, we can consider the current flowing from the drain to the output node.
The current flowing *out* of the drain terminal of the MOSFET is $i_d = g_m v_{gs}$.
Since $v_{gs} = V_{in}$, $i_d = g_m V_{in}$.

This drain current flows through the parallel combination of $r_o$ and $R_L$.
Therefore, the output voltage is:
$V_{out} = -i_d (r_o || R_L)$
$V_{out} = -(g_m V_{in}) (r_o || R_L)$

The voltage gain $A_v$ is:
$A_v = \frac{V_{out}}{V_{in}} = -g_m (r_o || R_L)$

If $r_o >> R_L$, then $r_o || R_L \approx R_L$.
$A_v \approx -g_m R_L$

**Important Note:** The negative sign in the gain indicates a phase inversion, which is typical for amplifiers. However, the CG amplifier's voltage gain is often expressed in magnitude as $g_m R_L$ for convenience in comparisons.

#### Input Impedance ($Z_{in}$)

The input impedance is the impedance seen at the input terminal (the source).

**Derivation:**

$Z_{in} = \frac{V_{in}}{i_{in}}$

The input current $i_{in}$ is the current flowing into the source terminal. From our previous analysis, the current flowing *into* the source of the MOSFET is $i_s$.

$i_{in} = i_{s} = -g_m v_{gs}$

Since $v_{gs} = V_{in}$,
$i_{in} = -g_m V_{in}$.

Therefore,
$Z_{in} = \frac{V_{in}}{-g_m V_{in}} = -\frac{1}{g_m}$

This result is counter-intuitive as impedance is typically positive. However, $i_{in}$ is defined as the current flowing *into* the source terminal. The current $g_m v_{gs}$ flows *out* of the source terminal of the MOSFET model. So, the current flowing *into* the source is $-g_m v_{gs}$.

To resolve this, consider the current flowing from the input source into the CG amplifier. The current $i_{in}$ flows into the source terminal. The current flowing out of the source terminal of the MOSFET is $i_s = g_m v_{gs}$ (in the standard MOSFET model, current flows from drain to source through the controlled current source).
So, $i_{in}$ is actually flowing out of the source terminal, hence $i_{in} = g_m v_{gs}$.

Let's re-evaluate carefully.
The input signal is $V_{in}$ applied to the source.
The gate is AC-grounded.
$v_{gs} = V_{in} - V_{gate} = V_{in} - 0 = V_{in}$.
The current *entering* the source terminal of the MOSFET is $i_s$.
The current *leaving* the drain terminal of the MOSFET is $i_d = g_m v_{gs}$.
By KCL at the drain node, $i_d + i_{RL} + i_{ro} = 0$, where $i_{RL}$ is current through $R_L$ and $i_{ro}$ is current through $r_o$.

Consider the current flowing *into* the input node (the source). This is $i_{in}$.
The current *leaving* the source terminal of the MOSFET is $i_s$.
$i_{in} = -i_s$.
From the MOSFET model, the current flowing from drain to source *through the controlled source* is $g_m v_{gs}$.
The current flowing *out* of the source terminal of the MOSFET is $i_s = g_m v_{gs}$.
So, $i_{in} = -g_m v_{gs}$.
With $v_{gs} = V_{in}$, we get $i_{in} = -g_m V_{in}$.

Thus, $Z_{in} = \frac{V_{in}}{i_{in}} = \frac{V_{in}}{-g_m V_{in}} = -\frac{1}{g_m}$.

This is often stated as $1/g_m$ for the magnitude of input impedance. The negative sign indicates that the input impedance is effectively supplying current to the circuit.

**(Reference: Razavi, Chapter 3, Section 3.4 Common-Gate Amplifier)**

**Common Gate Input Impedance is Low:** This is a key characteristic. The low input impedance makes it suitable for applications where the signal source has a low output impedance.

#### Output Impedance ($Z_{out}$)

The output impedance is the impedance seen at the output terminal (the drain).

**Steps for analysis:**

1.  **Turn off all independent sources.** ($V_{in} = 0$)
2.  **Apply a test voltage source $V_x$ at the output.**
3.  **Calculate the test current $I_x$ flowing out of the output terminal.**
4.  $Z_{out} = V_x / I_x$.

**Derivation:**

With $V_{in} = 0$, and the gate AC-grounded, $v_{gs} = V_{in} - V_{gate} = 0 - 0 = 0$.
This means the controlled current source $g_m v_{gs}$ is zero.
The MOSFET is effectively replaced by its output resistance $r_o$.
The output terminal is connected to the drain. The drain is connected to the $r_o$ of the MOSFET and the load resistor $R_L$ (assuming $R_L$ is connected to ground).
So, the output impedance seen from the drain is the parallel combination of $r_o$ and $R_L$.

$Z_{out} = r_o || R_L$

**(Reference: Razavi, Chapter 3, Section 3.4 Common-Gate Amplifier)**

**Common Gate Output Impedance is Moderate:** The output impedance is approximately $r_o$ when $R_L >> r_o$. This is higher than the common-source amplifier with a resistive load.

---

## 2. Common Drain (CD) Amplifier (Source Follower)

The Common Drain amplifier configuration is characterized by the input signal being applied to the gate terminal, the output taken from the source terminal, and the drain terminal being AC-grounded. This configuration is known for its high input impedance, low output impedance, and a voltage gain close to unity. It is often used as a buffer.

### Small-Signal Model of the CD Amplifier

**Circuit Diagram (Conceptual):**

```
      Vin --+
            |
           [G]
            |
      +-----GM-----D----+
      |     |       |    |
      |    [S]-----GND   Ro (connected to AC-GND)
      |     |            |
      |    [D]----------+--- Vout
      |     |
      RL    |
      |     |
     GND   GND
```

*   **Input:** Applied to the Gate (G).
*   **Output:** Taken from the Source (S).
*   **Drain (D):** AC-grounded.

### Analysis of CD Amplifier

#### Voltage Gain ($A_v$)

The voltage gain is defined as the ratio of the output voltage ($V_{out}$) to the input voltage ($V_{in}$).

**Steps for analysis:**

1.  **Replace the MOSFET with its small-signal model.**
2.  **Apply input voltage $V_{in}$ to the gate.**
3.  **Set AC ground at the drain.**
4.  **Write KCL or Ohm's law equations to relate $V_{out}$ and $V_{in}$.**

**Derivation:**

The input voltage is $V_{in}$ applied to the gate.
The drain is AC-grounded.
The voltage at the source terminal is $V_{out}$.
Therefore, the gate-source voltage is $v_{gs} = V_{gate} - V_{source} = V_{in} - V_{out}$.

The current flowing out of the drain terminal is $i_d = g_m v_{gs} = g_m (V_{in} - V_{out})$.
This current flows through the parallel combination of $r_o$ and the load $R_L$.
The output voltage $V_{out}$ is the voltage across the parallel combination of $r_o$ and $R_L$.

$V_{out} = -i_d (r_o || R_L)$  (The negative sign is because the current $i_d$ flows from drain to source in the model, and $V_{out}$ is measured at the source).

Substituting $i_d$:
$V_{out} = -[g_m (V_{in} - V_{out})] (r_o || R_L)$

$V_{out} = -g_m (V_{in} - V_{out}) (r_o || R_L)$

Divide both sides by $(r_o || R_L)$:
$\frac{V_{out}}{r_o || R_L} = -g_m (V_{in} - V_{out})$

$\frac{V_{out}}{r_o || R_L} = -g_m V_{in} + g_m V_{out}$

Group terms with $V_{out}$:
$V_{out} (\frac{1}{r_o || R_L} - g_m) = -g_m V_{in}$

$V_{out} (\frac{1 + g_m (r_o || R_L)}{r_o || R_L}) = -g_m V_{in}$

$A_v = \frac{V_{out}}{V_{in}} = \frac{-g_m (r_o || R_L)}{1 + g_m (r_o || R_L)}$

**Approximation:**
If $g_m (r_o || R_L) >> 1$, then the gain is:
$A_v \approx \frac{-g_m (r_o || R_L)}{g_m (r_o || R_L)} = -1$.

However, the common drain is usually analyzed by considering the current through $R_L$.
The current flowing into the source terminal is $I_{out}$. This current flows through $R_L$.
$V_{out} = I_{out} R_L$.

The current $i_d = g_m (V_{in} - V_{out})$ flows from drain to source.
This current flows through $r_o$ and then splits into $I_{out}$ through $R_L$ and potentially other paths if $R_L$ is not the only load. Assuming $R_L$ is the only load, the current $i_d$ flows from the drain, through $r_o$, and then into the source terminal, which is connected to $R_L$.

Let's use KCL at the source node:
$i_{source} = g_m v_{gs} + \frac{v_{ds}}{r_o}$
The output current $I_{out}$ is the current flowing through $R_L$.
$I_{out} = g_m v_{gs} + \frac{v_{ds}}{r_o}$

$v_{gs} = V_{in} - V_{out}$
$v_{ds} = V_{drain} - V_{source}$
Since drain is AC-grounded, $V_{drain} = 0$.
$v_{ds} = 0 - V_{out} = -V_{out}$.

$I_{out} = g_m (V_{in} - V_{out}) + \frac{-V_{out}}{r_o}$
$I_{out} = g_m V_{in} - g_m V_{out} - \frac{V_{out}}{r_o}$
$I_{out} = g_m V_{in} - V_{out} (g_m + \frac{1}{r_o})$

We know $I_{out} = V_{out} / R_L$.
$\frac{V_{out}}{R_L} = g_m V_{in} - V_{out} (g_m + \frac{1}{r_o})$

$\frac{V_{out}}{R_L} + V_{out} (g_m + \frac{1}{r_o}) = g_m V_{in}$
$V_{out} (\frac{1}{R_L} + g_m + \frac{1}{r_o}) = g_m V_{in}$

$V_{out} (\frac{1 + g_m R_L + R_L/r_o}{R_L}) = g_m V_{in}$

$A_v = \frac{V_{out}}{V_{in}} = \frac{g_m R_L}{1 + g_m R_L + R_L/r_o}$

We can rewrite this as:
$A_v = \frac{g_m R_L}{1 + g_m R_L (1 + \frac{1}{g_m r_o})}$

Let $g_m r_o = g_m R_0$, where $R_0$ is the intrinsic gain.
$A_v = \frac{g_m R_L}{1 + g_m R_L + R_L/r_o} = \frac{R_L}{1/g_m + R_L + R_L/(g_m r_o)}$
$A_v = \frac{R_L}{1/g_m + R_L (1 + 1/(g_m r_o))}$

If $g_m R_L >> 1$ and $g_m r_o >> 1$ (high $g_m$ and $r_o$), then the denominator is approximately $1 + g_m R_L$.
$A_v \approx \frac{g_m R_L}{1 + g_m R_L} \approx \frac{g_m R_L}{g_m R_L} = 1$.

The gain is slightly less than 1, and it is positive (in-phase).

**(Reference: Razavi, Chapter 3, Section 3.5 Common-Drain Amplifier, or Sedra & Smith, Chapter 4, Section 4.5.3 Common-Drain Amplifier)**

**Common Drain Voltage Gain is Close to Unity:** This is a key characteristic. It provides a gain of slightly less than one and is positive.

#### Input Impedance ($Z_{in}$)

The input impedance is the impedance seen at the input terminal (the gate).

**Derivation:**

$Z_{in} = \frac{V_{in}}{i_{in}}$

The input current $i_{in}$ is the current flowing into the gate terminal. In the MOSFET small-signal model, there is no current flowing into the gate terminal itself. The gate current is ideally zero.

$i_{in} = 0$

Therefore, the input impedance is ideally infinite.
$Z_{in} = \infty$

**(Reference: Razavi, Chapter 3, Section 3.5 Common-Drain Amplifier)**

**Common Drain Input Impedance is High:** This is a key characteristic. The high input impedance makes it suitable for interfacing with signal sources that have high output impedance.

#### Output Impedance ($Z_{out}$)

The output impedance is the impedance seen at the output terminal (the source).

**Steps for analysis:**

1.  **Turn off all independent sources.** ($V_{in} = 0$)
2.  **Apply a test voltage source $V_x$ at the output.**
3.  **Calculate the test current $I_x$ flowing out of the output terminal.**
4.  $Z_{out} = V_x / I_x$.

**Derivation:**

With $V_{in} = 0$, the gate voltage is $V_{gate} = 0$.
The source voltage is $V_x$ (our test voltage).
So, $v_{gs} = V_{gate} - V_{source} = 0 - V_x = -V_x$.

The current flowing out of the drain terminal is $i_d = g_m v_{gs} = g_m (-V_x) = -g_m V_x$.
This current flows through $r_o$. The drain is AC-grounded.
The current $I_x$ is the current flowing *out* of the source terminal, which is connected to $V_x$.

We need to find the current drawn from the test source $V_x$.
The current flowing from the drain to the source through $r_o$ is $i_{ro} = v_{ds}/r_o$.
$v_{ds} = V_{drain} - V_{source}$
Drain is AC-grounded, so $V_{drain} = 0$.
$v_{ds} = 0 - V_x = -V_x$.

The current flowing from drain to source is $i_{ds} = g_m v_{gs} + \frac{v_{ds}}{r_o} = g_m(-V_x) + \frac{-V_x}{r_o}$.
$i_{ds} = -V_x (g_m + \frac{1}{r_o})$.

This current $i_{ds}$ flows into the source terminal.
The test current $I_x$ is the current *leaving* the source terminal.
So, $I_x = -i_{ds}$.
$I_x = -[-V_x (g_m + \frac{1}{r_o})] = V_x (g_m + \frac{1}{r_o})$.

$Z_{out} = \frac{V_x}{I_x} = \frac{V_x}{V_x (g_m + \frac{1}{r_o})} = \frac{1}{g_m + \frac{1}{r_o}}$

This can be simplified as:
$Z_{out} = \frac{1}{\frac{g_m r_o + 1}{r_o}} = \frac{r_o}{g_m r_o + 1}$

If $g_m r_o >> 1$, then $Z_{out} \approx \frac{r_o}{g_m r_o} = \frac{1}{g_m}$.

**(Reference: Razavi, Chapter 3, Section 3.5 Common-Drain Amplifier, or Sedra & Smith, Chapter 4, Section 4.5.3 Common-Drain Amplifier)**

**Common Drain Output Impedance is Low:** This is a key characteristic. The low output impedance makes it ideal for driving subsequent stages with low input impedance.

---

## Summary of CG and CD Amplifiers

| Feature            | Common Gate (CG) Amplifier       | Common Drain (CD) Amplifier (Source Follower) |
| :----------------- | :------------------------------- | :---------------------------------------------- |
| **Input Signal**   | Source                           | Gate                                            |
| **Output Signal**  | Drain                            | Source                                          |
| **AC Ground**      | Gate                             | Drain                                           |
| **Voltage Gain ($A_v$)** | $-g_m(r_o || R_L)$ (Moderate to High, Inverted) | $\frac{g_m R_L}{1 + g_m R_L + R_L/r_o}$ (Close to 1, Non-inverted) |
| **Input Impedance ($Z_{in}$)** | $-\frac{1}{g_m}$ (Low)             | $\infty$ (High, Ideally)                        |
| **Output Impedance ($Z_{out}$)** | $r_o || R_L$ (Moderate)          | $\frac{1}{g_m + 1/r_o} \approx \frac{1}{g_m}$ (Low) |
| **Primary Use**    | Current buffer, impedance matching | Voltage buffer, driving low-impedance loads     |

---

## Practice Questions and Answers

**Question 1:**

A common gate amplifier is designed with a MOSFET having $g_m = 5 \text{ mS}$ and $r_o = 50 \text{ k}\Omega$. The load resistor $R_L = 10 \text{ k}\Omega$. Calculate the voltage gain ($A_v$), input impedance ($Z_{in}$), and output impedance ($Z_{out}$) of the amplifier.

**Answer 1:**

*   **Voltage Gain ($A_v$):**
    $A_v = -g_m (r_o || R_L)$
    $r_o || R_L = \frac{50 \text{ k}\Omega \times 10 \text{ k}\Omega}{50 \text{ k}\Omega + 10 \text{ k}\Omega} = \frac{500}{60} \text{ k}\Omega = 8.33 \text{ k}\Omega$
    $A_v = -(5 \text{ mS}) \times (8.33 \text{ k}\Omega) = -5 \times 10^{-3} \times 8.33 \times 10^3 = -41.65$

*   **Input Impedance ($Z_{in}$):**
    $Z_{in} = -\frac{1}{g_m} = -\frac{1}{5 \text{ mS}} = -\frac{1}{5 \times 10^{-3}} \Omega = -200 \Omega$
    (Magnitude is $200 \Omega$)

*   **Output Impedance ($Z_{out}$):**
    $Z_{out} = r_o || R_L = 8.33 \text{ k}\Omega$

**Question 2:**

A common drain amplifier (source follower) is implemented with a MOSFET with $g_m = 10 \text{ mS}$ and $r_o = 100 \text{ k}\Omega$. The load resistor $R_L = 5 \text{ k}\Omega$. Calculate the voltage gain ($A_v$), input impedance ($Z_{in}$), and output impedance ($Z_{out}$).

**Answer 2:**

*   **Voltage Gain ($A_v$):**
    $A_v = \frac{g_m R_L}{1 + g_m R_L + R_L/r_o}$
    $g_m R_L = (10 \text{ mS}) \times (5 \text{ k}\Omega) = 10 \times 10^{-3} \times 5 \times 10^3 = 50$
    $R_L/r_o = \frac{5 \text{ k}\Omega}{100 \text{ k}\Omega} = 0.05$
    $A_v = \frac{50}{1 + 50 + 0.05} = \frac{50}{51.05} \approx 0.98$

*   **Input Impedance ($Z_{in}$):**
    Ideally $Z_{in} = \infty$. In a more detailed model including parasitic capacitances, it would be finite but still very high.

*   **Output Impedance ($Z_{out}$):**
    $Z_{out} = \frac{1}{g_m + 1/r_o}$
    $g_m = 10 \text{ mS}$
    $1/r_o = 1 / (100 \text{ k}\Omega) = 0.01 \text{ mS}$
    $Z_{out} = \frac{1}{10 \text{ mS} + 0.01 \text{ mS}} = \frac{1}{10.01 \text{ mS}} = \frac{1}{10.01 \times 10^{-3}} \Omega \approx 99.9 \Omega$

**Question 3:**

Which amplifier configuration (CG or CD) would you choose to interface a signal source with a high output impedance to a load with a low input impedance? Justify your answer.

**Answer 3:**

The **Common Drain (CD) amplifier** is the preferred choice.
*   **High Input Impedance:** The CD amplifier has a very high input impedance, which minimizes loading on the high output impedance signal source.
*   **Low Output Impedance:** The CD amplifier has a very low output impedance, allowing it to effectively drive a subsequent stage with a low input impedance without significant signal loss.

---

## Important Points to Remember

*   **Common Gate (CG):**
    *   Low input impedance ($1/g_m$).
    *   Moderate output impedance ($r_o || R_L$).
    *   Voltage gain $\approx -g_m R_L$ (inverted).
    *   Used as a current buffer or impedance matcher where low input impedance is acceptable.
*   **Common Drain (CD) / Source Follower:**
    *   High input impedance (ideally infinite).
    *   Low output impedance ($1/g_m$).
    *   Voltage gain $\approx 1$ (non-inverted).
    *   Used as a voltage buffer to isolate a high-impedance source from a low-impedance load.
*   The $r_o$ of the MOSFET plays a role in the gain and output impedance, especially when $R_L$ is comparable to or larger than $r_o$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References

*   **Razavi, Behzad.** *Design of Analog CMOS Integrated Circuits*. McGraw-Hill, 2/e, 2002. (Chapters 3)
*   **Sedra, Adel S., and Kenneth C. Smith.** *Microelectronic Circuits*. Oxford University Press, 6/e, 2017. (Chapters 4)
*   **Allen, Phillip E., and Douglas R. Holbery.** *CMOS Analog Circuit Design*. Oxford University Press, 3/e.
*   **Razavi, Behzad.** *Fundamentals of Microelectronics*. Wiley student Edition, 2014.

---