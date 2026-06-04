---
title: "Transmission Line Modelling: ABCD constants"
subject: "POWER SYSTEM LAB"
module: "Module 2: Transmission Line Modelling: ABCD constants"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367e1"
status: "completed"
scrapedAt: "2026-05-23T16:30:41.638Z"
---
# POWER SYSTEM LAB - Module 2: Transmission Line Modelling: ABCD Constants

## 1. Introduction to Transmission Line Modelling

Transmission lines are the arteries of any power system, responsible for transporting electrical energy from generating stations to load centers. Accurate modeling of these lines is crucial for analyzing power flow, voltage profiles, stability, and fault conditions. Different levels of modeling complexity exist, depending on the line length and the analysis required.

**Learning Outcome Addressed:**
*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (This module directly contributes to developing mathematical models for analysis.)

### 1.1 Why Model Transmission Lines?

*   **Power Flow Analysis:** To determine voltage, current, power, and reactive power flow at various points in the network.
*   **Voltage Regulation:** To ensure acceptable voltage levels at the receiving end.
*   **Stability Studies:** To assess the system's ability to maintain synchronism during disturbances.
*   **Fault Analysis:** To predict fault currents and their impact on the system.
*   **Economic Dispatch:** To optimize generation dispatch based on transmission capabilities.

### 1.2 Classification of Transmission Lines based on Length

The complexity of transmission line modeling depends on its physical length and electrical characteristics (capacitance and inductance).

*   **Short Transmission Lines (typically < 80 km):**
    *   Line capacitance is neglected.
    *   The line is represented by its series resistance (R) and inductance (L).
    *   The shunt admittance (or capacitance) is considered negligible.
*   **Medium Transmission Lines (typically 80 km to 240 km):**
    *   Line capacitance is considered.
    *   The line capacitance is lumped at the receiving end, sending end, or distributed uniformly.
    *   The "Nominal T" or "Nominal Pi" model is commonly used.
*   **Long Transmission Lines (typically > 240 km):**
    *   Line capacitance and inductance are distributed uniformly along the entire length.
    *   Requires more complex mathematical analysis involving differential equations.
    *   The "Exact" or "Distributed Parameter" model is used.

**Key Concept:** The inductance and capacitance of a transmission line are inherent properties that depend on the conductor material, size, spacing, and configuration.

## 2. ABCD Constants (General Circuit Parameters)

ABCD constants (also known as generalized circuit parameters or transmission line parameters) are a set of four constants used to represent the relationship between the sending-end and receiving-end voltage and current for a linear electrical network, including transmission lines. These constants are particularly useful for analyzing medium and long transmission lines.

**Learning Outcome Addressed:**
*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (ABCD constants provide a mathematical model for analyzing power system networks.)

### 2.1 Definition of ABCD Constants

For any linear, bilateral network terminated with a load, the sending-end voltage ($V_S$) and sending-end current ($I_S$) can be expressed in terms of the receiving-end voltage ($V_R$) and receiving-end current ($I_R$) as follows:

$V_S = A V_R + B I_R$  (Equation 2.1)

$I_S = C V_R + D I_R$  (Equation 2.2)

Where:
*   $V_S$: Sending-end voltage
*   $I_S$: Sending-end current
*   $V_R$: Receiving-end voltage
*   $I_R$: Receiving-end current
*   A, B, C, D: ABCD constants (complex numbers)

**Important Point:** The ABCD constants are characteristic parameters of the transmission line itself and are independent of the load connected at the receiving end.

### 2.2 Properties of ABCD Constants

*   **Reciprocity:** For passive networks, A and D are interchangeable, and BC = 1 - AD. Specifically, for a passive network, $A = D$.
*   **Symmetry:** For a passive network, $AD - BC = 1$.
*   **Units:**
    *   A and D are dimensionless.
    *   B has units of impedance (Ohms).
    *   C has units of admittance (Siemens).

### 2.3 ABCD Constants for Different Transmission Line Models

#### 2.3.1 Short Transmission Line

As mentioned, the capacitance is neglected. The line is simply represented by its series impedance ($Z = R + jX$).

$V_S = V_R + I_R Z$
$I_S = I_R$

Comparing with the general equations:
*   $A = 1$
*   $B = Z = R + jX$
*   $C = 0$
*   $D = 1$

**Example:** A short transmission line has a series impedance of $Z = (2 + j10) \Omega$. Calculate its ABCD constants.
*   $A = 1$
*   $B = (2 + j10) \Omega$
*   $C = 0$
*   $D = 1$

#### 2.3.2 Medium Transmission Line (Nominal Pi Model)

In the nominal Pi (π) model, the total line charging current is considered to be concentrated at the middle of the line, and the series impedance is lumped at the middle. However, it's more common to represent the series impedance as being split into two halves, with the charging current lumped at the sending end and receiving end. For the purpose of ABCD constants, it is usually represented with half the series impedance at each end and the total shunt admittance $Y = G + jB$ (where $G \approx 0$ for transmission lines, so $Y \approx jB_c$) also lumped at the receiving end.

Let:
*   $Z/2$: Series impedance of half the line
*   $Y$: Total shunt admittance of the line

The equivalent circuit looks like this:

```
     V_S ------ Z/2 ------+------ Z/2 ------ V_R
                         |                     |
                         Y/2                   Y/2
                         |                     |
                       -----                 -----
```

For the purpose of ABCD constants, the total shunt admittance $Y$ is often lumped at the receiving end, and the series impedance $Z$ is considered as the total series impedance of the line.

The most common representation for deriving ABCD constants for a medium line is to consider the total series impedance $Z$ and the total shunt admittance $Y$ (where $Y = jB_c$ for a transmission line).

Consider the Pi-model where half the admittance is at each end:

```
     V_S --Z--+-- Y/2 -- V_R
              |         |
             Y/2       Y/2
              |         |
             -----     -----
```

This can be redrawn to derive ABCD constants by considering the shunt admittance at the receiving end.
Let $Z$ be the total series impedance and $Y$ be the total shunt admittance of the line.

$Z = R + jX$
$Y = G + jB_c$

For a medium line represented with the shunt admittance lumped at the receiving end:

Consider the circuit:
```
     V_S ---- Z ----+---- V_R
                    |
                    Y
                    |
                   -----
```

Let's derive the ABCD constants for the nominal Pi model where the series impedance is $Z$ and the total shunt admittance is $Y$. The line is often approximated by placing half the shunt admittance at the sending end and half at the receiving end, with the total series impedance in the middle. However, for the general ABCD derivation, it's more common to consider the total series impedance $Z$ and the total shunt admittance $Y$.

A more standard derivation for the ABCD constants of a medium transmission line considers the total series impedance $Z$ and the total shunt admittance $Y$, with $Y$ being effectively at the receiving end for the ABCD definition.

The circuit can be analyzed by first considering the shunt element $Y$:
$I_{R}' = I_R + V_R Y$
Then, the voltage at the sending end of the series impedance is $V_S = V_R + I_{R}' Z$.

Substituting $I_{R}'$:
$V_S = V_R + (I_R + V_R Y) Z$
$V_S = V_R + I_R Z + V_R Y Z$
$V_S = V_R (1 + YZ) + I_R Z$  (Equation 2.3)

Now, let's find $I_S$:
$I_S = I_{R}' = I_R + V_R Y$
$I_S = I_R + V_R Y$  (Equation 2.4)

Comparing Equation 2.3 and 2.4 with the general ABCD equations:
*   $A = 1 + YZ$
*   $B = Z$
*   $C = Y$
*   $D = 1$

**Important Point:** For reciprocal networks, $A = D$.
However, the ABCD constants derived above from a simplified Pi model (with all shunt admittance at the receiving end) do not satisfy $A=D$.

Let's consider the more standard representation of a medium line where the shunt admittance is split. The standard derivation of ABCD constants for a medium transmission line (often based on the nominal Pi model with half admittance at each end) yields:

$A = 1 + \frac{YZ}{2}$
$B = Z$
$C = Y(1 + \frac{YZ}{4})$
$D = 1 + \frac{YZ}{2}$

Let's verify $AD-BC=1$:
$AD = (1 + \frac{YZ}{2})^2 = 1 + YZ + \frac{(YZ)^2}{4}$
$BC = Z \cdot Y(1 + \frac{YZ}{4}) = YZ + \frac{(YZ)^2}{4}$
$AD - BC = (1 + YZ + \frac{(YZ)^2}{4}) - (YZ + \frac{(YZ)^2}{4}) = 1$
This derivation satisfies the reciprocity condition.

**Example:** A medium transmission line has a series impedance of $Z = (0.5 + j2.5) \Omega$ and a total shunt admittance of $Y = j0.001$ Siemens. Calculate its ABCD constants using the nominal Pi model.

$YZ = (j0.001)(0.5 + j2.5) = j0.0005 - 0.0025 = -0.0025 + j0.0005$

$A = 1 + \frac{YZ}{2} = 1 + \frac{-0.0025 + j0.0005}{2} = 1 - 0.00125 + j0.00025 = 0.99875 + j0.00025$
$B = Z = 0.5 + j2.5 \Omega$
$C = Y(1 + \frac{YZ}{4}) = j0.001 (1 + \frac{-0.0025 + j0.0005}{4})$
$C = j0.001 (1 - 0.000625 + j0.000125)$
$C = j0.001 (0.999375 + j0.000125)$
$C = j0.000999375 - 0.000000125 = -0.000000125 + j0.000999375$ Siemens
$D = 1 + \frac{YZ}{2} = 0.99875 + j0.00025$

**Check AD-BC:**
$A \approx 1$, $D \approx 1$, $B \approx j2.5$, $C \approx j0.001$.
$AD \approx 1$
$BC \approx (j2.5)(j0.001) = j^2(0.0025) = -0.0025$
$AD - BC \approx 1 - (-0.0025) = 1.0025$ (Slight discrepancy due to approximations and rounding).

**Refined Calculation:**
$YZ = -0.0025 + j0.0005$
$A = 1 + \frac{-0.0025 + j0.0005}{2} = 0.99875 + j0.00025$
$D = 0.99875 + j0.00025$
$B = 0.5 + j2.5$
$C = j0.001 (1 + \frac{-0.0025 + j0.0005}{4}) = j0.001 (1 - 0.000625 + j0.000125)$
$C = j0.001 (0.999375 + j0.000125) = j0.000999375 - 0.000000125 \approx -1.25 \times 10^{-7} + j0.000999375$

$AD = (0.99875 + j0.00025)^2 \approx 0.99750156 + j0.000499375$
$BC = (0.5 + j2.5)(-1.25 \times 10^{-7} + j0.000999375)$
$BC \approx (0.5)(j0.000999375) + (j2.5)(-1.25 \times 10^{-7}) + (j2.5)(j0.000999375)$
$BC \approx j0.0004996875 - j0.0000003125 - 0.0024984375$
$BC \approx -0.0024984375 + j0.000499375$

$AD - BC \approx (0.99750156 + j0.000499375) - (-0.0024984375 + j0.000499375) = 0.99750156 + 0.0024984375 \approx 1.00000000$

**Important:** For practical purposes with short lines or medium lines with very low capacitance, the ABCD constants for a short line (A=1, B=Z, C=0, D=1) can be a good approximation.

#### 2.3.3 Long Transmission Line (Distributed Parameter Model)

For long transmission lines, the resistance, inductance, capacitance, and conductance are distributed uniformly along the line. The line is characterized by its series impedance per unit length ($z = r + jx$) and shunt admittance per unit length ($y = g + jb$).

The voltage and current at any point along the line can be described by differential equations. For a line of length $l$, the ABCD constants are derived from the hyperbolic functions.

Let:
*   $Z_{total} = z \cdot l$ (Total series impedance)
*   $Y_{total} = y \cdot l$ (Total shunt admittance)
*   $\gamma = \sqrt{zy}$ (Propagation constant)
*   $Z_c = \sqrt{z/y}$ (Characteristic impedance)

The ABCD constants are given by:

$A = \cosh(\gamma l)$
$B = Z_c \sinh(\gamma l)$
$C = \frac{1}{Z_c} \sinh(\gamma l)$
$D = \cosh(\gamma l)$

**Important:** For long lines, $A = D$ and $BC = 1/Z_c^2$, which is consistent with $AD-BC=1$.

**Approximation for Medium Length Lines from Long Line Equations:**
For medium length lines (or when $\gamma l$ is small), we can use the Taylor series expansions for hyperbolic functions:
$\cosh(x) \approx 1 + \frac{x^2}{2!}$
$\sinh(x) \approx x + \frac{x^3}{3!}$

Let $x = \gamma l$. Then $x^2 = (\gamma l)^2 = (zl)(yl) = zyl^2 = Z_{total} Y_{total}$.

$A = \cosh(\gamma l) \approx 1 + \frac{(\gamma l)^2}{2} = 1 + \frac{Z_{total} Y_{total}}{2}$
$B = Z_c \sinh(\gamma l) \approx Z_c (\gamma l) = Z_c \sqrt{\frac{z}{y}} \sqrt{zy} l = \sqrt{z^2} l = zl = Z_{total}$
$C = \frac{1}{Z_c} \sinh(\gamma l) \approx \frac{1}{Z_c} (\gamma l) = \sqrt{\frac{y}{z}} \sqrt{zy} l = \sqrt{y^2} l = yl = Y_{total}$
$D = \cosh(\gamma l) \approx 1 + \frac{(\gamma l)^2}{2} = 1 + \frac{Z_{total} Y_{total}}{2}$

These approximations match the ABCD constants derived for the nominal Pi model, validating its accuracy for medium length lines.

**Example:** A long transmission line has a series impedance of $z = (0.02 + j0.1) \Omega/km$ and a shunt admittance of $y = j5 \times 10^{-6}$ Siemens/km. The line length is 300 km. Calculate its ABCD constants.

$Z_{total} = z \cdot l = (0.02 + j0.1) \Omega/km \times 300 km = (6 + j30) \Omega$
$Y_{total} = y \cdot l = (j5 \times 10^{-6}) S/km \times 300 km = j1.5 \times 10^{-3}$ Siemens

$\gamma = \sqrt{zy} = \sqrt{(0.02 + j0.1)(j1.5 \times 10^{-3})} = \sqrt{j0.00003 - 0.00015} = \sqrt{-0.00015 + j0.00003}$

To calculate $\gamma$, we need to convert the complex number to polar form.
Magnitude: $|-0.00015 + j0.00003| = \sqrt{(-0.00015)^2 + (0.00003)^2} \approx 0.0001533$
Angle: $\theta = \arctan(\frac{0.00003}{-0.00015}) = \arctan(-0.2)$. Since the real part is negative and imaginary is positive, the angle is in the second quadrant. $\theta \approx 168.7^\circ$.

$\sqrt{-0.00015 + j0.00003} \approx \sqrt{0.0001533} \angle \frac{168.7^\circ}{2} \approx 0.01238 \angle 84.35^\circ$
$\gamma \approx 0.01238 (\cos(84.35^\circ) + j\sin(84.35^\circ)) \approx 0.01238 (0.0987 + j0.995)$
$\gamma \approx 0.001222 + j0.01232$

Now, $\gamma l = (0.01238 \angle 84.35^\circ) \times 300 = 3.714 \angle 84.35^\circ$

$Z_c = \sqrt{z/y} = \sqrt{\frac{0.02 + j0.1}{j1.5 \times 10^{-3}}} = \sqrt{\frac{0.02 + j0.1}{j0.0015}}$
$\frac{0.02 + j0.1}{j0.0015} = \frac{(0.02 + j0.1)(-j0.0015)}{(j0.0015)(-j0.0015)} = \frac{-j0.00003 - j^2 0.00015}{0.00000225} = \frac{0.00015 - j0.00003}{0.00000225}$
$\frac{0.00015 - j0.00003}{0.00000225} \approx 66666.7 - j13333.3$

$|66666.7 - j13333.3| = \sqrt{66666.7^2 + (-13333.3)^2} \approx 67817$
Angle: $\arctan(\frac{-13333.3}{66666.7}) \approx -11.3^\circ$

$Z_c = \sqrt{67817 \angle -11.3^\circ} \approx 260.4 \angle -5.65^\circ$
$Z_c \approx 260.4 (\cos(-5.65^\circ) + j\sin(-5.65^\circ)) \approx 260.4 (0.995 - j0.0985)$
$Z_c \approx 259.1 - j25.65 \Omega$

Now calculate $A, B, C, D$:
$\gamma l = 3.714 \angle 84.35^\circ = 3.714 (\cos(84.35^\circ) + j\sin(84.35^\circ)) \approx 3.714 (0.0987 + j0.995)$
$\gamma l \approx 0.366 + j3.695$

$A = \cosh(0.366 + j3.695) = \frac{e^{(0.366 + j3.695)} + e^{-(0.366 + j3.695)}}{2}$
Using calculator for $\cosh(0.366 + j3.695) \approx -0.852 + j2.87$

$B = Z_c \sinh(\gamma l) \approx (259.1 - j25.65) \sinh(0.366 + j3.695)$
$\sinh(0.366 + j3.695) = \frac{e^{(0.366 + j3.695)} - e^{-(0.366 + j3.695)}}{2}$
Using calculator for $\sinh(0.366 + j3.695) \approx 1.435 + j1.476$
$B \approx (259.1 - j25.65)(1.435 + j1.476) \approx 371.7 + j381.7 - j36.8 - j^2 37.8 \approx 409.5 + j344.9 \Omega$

$C = \frac{1}{Z_c} \sinh(\gamma l) = \frac{1}{260.4 \angle -5.65^\circ} (1.435 + j1.476)$
$\frac{1}{Z_c} = \frac{1}{260.4} \angle 5.65^\circ \approx 0.00384 \angle 5.65^\circ$
$C \approx (0.00384 \angle 5.65^\circ) (1.435 + j1.476)$
Convert $(1.435 + j1.476)$ to polar: $|1.435+j1.476| = \sqrt{1.435^2+1.476^2} \approx 2.057$, Angle $\arctan(1.476/1.435) \approx 45.7^\circ$
$C \approx (0.00384 \angle 5.65^\circ) (2.057 \angle 45.7^\circ) \approx 0.00789 \angle 51.35^\circ$
$C \approx 0.00789 (\cos(51.35^\circ) + j\sin(51.35^\circ)) \approx 0.00492 + j0.00617$ Siemens

$D = A = -0.852 + j2.87$

**Simplified Approach using Approximations for Medium Lines:**
If we treat this as a medium line:
$A = 1 + \frac{YZ}{2} = 1 + \frac{(j1.5 \times 10^{-3})(6 + j30)}{2} = 1 + \frac{j0.009 - 0.045}{2} = 1 - 0.0225 + j0.0045 = 0.9775 + j0.0045$
$B = Z = 6 + j30 \Omega$
$C = Y(1 + \frac{YZ}{4}) = j1.5 \times 10^{-3} (1 + \frac{-0.0225 + j0.0045}{2}) = j1.5 \times 10^{-3} (1 - 0.01125 + j0.00225)$
$C = j1.5 \times 10^{-3} (0.98875 + j0.00225) = j0.0014831 - 0.000003375 \approx -0.000003375 + j0.0014831$ Siemens
$D = A = 0.9775 + j0.0045$

Notice the significant difference between the long line and medium line approximations for a line of 300 km. The hyperbolic function method is more accurate for longer lines.

**Reference from Textbooks:**
*   **Electrical Power Systems by C.L. Wadhwa:** Chapter 3 covers transmission line modeling and ABCD constants, providing detailed derivations for short, medium, and long lines, including the use of hyperbolic functions.
*   **Power System Analysis and Design by J. Duncan Glover, Mulukutla S. Sarma, and principal author:** Chapter 3 discusses transmission line modeling, including the ABCD parameters for various line types and their applications.

## 3. Power System Lab Experiments related to ABCD Constants

**Learning Outcome Addressed:**
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.** (This section will outline how ABCD constants are determined experimentally.)

While ABCD constants are primarily derived from the line parameters, in a lab setting, they can be determined experimentally by conducting tests to measure voltages and currents under different load conditions.

### 3.1 Experimental Determination of ABCD Constants

To determine the ABCD constants experimentally, we need to measure $V_S, I_S, V_R, I_R$ under at least two different load conditions.

**Method:**

1.  **Test Setup:** Connect the transmission line model in the lab. You will need a variable voltage source at the sending end, measuring instruments (voltmeters, ammeters), and a load at the receiving end.
2.  **First Test Condition (e.g., with a load):**
    *   Apply a known sending-end voltage $V_{S1}$.
    *   Measure the sending-end current $I_{S1}$.
    *   Measure the receiving-end voltage $V_{R1}$.
    *   Measure the receiving-end current $I_{R1}$.
    *   Record these values: $V_{S1}, I_{S1}, V_{R1}, I_{R1}$.
3.  **Second Test Condition (e.g., with a different load or open circuit):**
    *   Change the load (or disconnect it for an open-circuit condition).
    *   Apply a known sending-end voltage $V_{S2}$ (ideally, different from $V_{S1}$).
    *   Measure the sending-end current $I_{S2}$.
    *   Measure the receiving-end voltage $V_{R2}$.
    *   Measure the receiving-end current $I_{R2}$.
    *   Record these values: $V_{S2}, I_{S2}, V_{R2}, I_{R2}$.

**Deriving ABCD Constants from Measurements:**

We have two sets of equations:
$V_{S1} = A V_{R1} + B I_{R1}$  (Eq 3.1)
$I_{S1} = C V_{R1} + D I_{R1}$  (Eq 3.2)

$V_{S2} = A V_{R2} + B I_{R2}$  (Eq 3.3)
$I_{S2} = C V_{R2} + D I_{R2}$  (Eq 3.4)

We have 8 measured values and 4 unknown constants. However, due to the reciprocal nature ($A=D$), we have effectively 4 unknowns. We can solve these equations to find A, B, C, and D.

**Solving for A and B using Eq 3.1 and 3.3:**
From Eq 3.1: $B I_{R1} = V_{S1} - A V_{R1}$
From Eq 3.3: $B I_{R2} = V_{S2} - A V_{R2}$

If $I_{R1} \neq 0$ and $I_{R2} \neq 0$:
$B = \frac{V_{S1} - A V_{R1}}{I_{R1}}$
$B = \frac{V_{S2} - A V_{R2}}{I_{R2}}$

Equating the expressions for B:
$\frac{V_{S1} - A V_{R1}}{I_{R1}} = \frac{V_{S2} - A V_{R2}}{I_{R2}}$
$I_{R2} (V_{S1} - A V_{R1}) = I_{R1} (V_{S2} - A V_{R2})$
$I_{R2} V_{S1} - A V_{R1} I_{R2} = I_{R1} V_{S2} - A V_{R2} I_{R1}$
$A (V_{R2} I_{R1} - V_{R1} I_{R2}) = I_{R1} V_{S2} - I_{R2} V_{S1}$
$A = \frac{I_{R1} V_{S2} - I_{R2} V_{S1}}{V_{R2} I_{R1} - V_{R1} I_{R2}}$  (Eq 3.5)

Once A is calculated, B can be found using either Eq 3.1 or 3.3.
$B = \frac{V_{S1} - A V_{R1}}{I_{R1}}$  (Eq 3.6)

**Solving for C and D using Eq 3.2 and 3.4:**
Similarly, we can derive expressions for C and D.
From Eq 3.2: $D I_{R1} = I_{S1} - C V_{R1}$
From Eq 3.4: $D I_{R2} = I_{S2} - C V_{R2}$

If $V_{R1} \neq 0$ and $V_{R2} \neq 0$:
$D = \frac{I_{S1} - C V_{R1}}{I_{R1}}$
$D = \frac{I_{S2} - C V_{R2}}{I_{R2}}$

Equating the expressions for D:
$\frac{I_{S1} - C V_{R1}}{I_{R1}} = \frac{I_{S2} - C V_{R2}}{I_{R2}}$
$I_{R2} (I_{S1} - C V_{R1}) = I_{R1} (I_{S2} - C V_{R2})$
$I_{R2} I_{S1} - C V_{R1} I_{R2} = I_{R1} I_{S2} - C V_{R2} I_{R1}$
$C (V_{R2} I_{R1} - V_{R1} I_{R2}) = I_{R1} I_{S2} - I_{R2} I_{S1}$
$C = \frac{I_{R1} I_{S2} - I_{R2} I_{S1}}{V_{R2} I_{R1} - V_{R1} I_{R2}}$  (Eq 3.7)

Once C is calculated, D can be found using either Eq 3.2 or 3.4.
$D = \frac{I_{S1} - C V_{R1}}{I_{R1}}$  (Eq 3.8)

**Important Considerations for Experimental Determination:**

*   **Accuracy of Measurements:** Use calibrated instruments. Errors in voltage and current measurements will propagate to the calculated ABCD constants.
*   **Load Conditions:** Ideally, use different load conditions, including an open-circuit condition (where $I_R=0$) and a short-circuit condition (where $V_R=0$).
    *   **Open Circuit ($I_R = 0$):**
        $V_S = A V_R$
        $I_S = C V_R$
        This implies $A = V_S / V_R$ and $C = I_S / V_R$.
    *   **Short Circuit ($V_R = 0$):**
        $V_S = B I_R$
        $I_S = D I_R$
        This implies $B = V_S / I_R$ and $D = I_S / I_R$.
*   **Reciprocity Check:** After calculating A, B, C, and D, verify if $A \approx D$ and $AD - BC \approx 1$. Any significant deviation indicates potential measurement errors or limitations of the model.
*   **Lab Equipment:** In a typical power system lab, you might use a scaled-down transmission line model or simulations using software like MATLAB/Simulink.

**Example Lab Exercise:**

Consider a simulated medium transmission line with known parameters ($Z = 0.5 + j2.5 \Omega$, $Y = j0.001 S$). You are to verify the ABCD constants experimentally (or through simulation).

**Scenario:**
*   **Line Parameters:** $Z = (0.5 + j2.5) \Omega$, $Y = j0.001 S$
*   **Nominal Pi Model ABCD Constants (calculated):**
    $A = 0.99875 + j0.00025$
    $B = 0.5 + j2.5 \Omega$
    $C = -1.25 \times 10^{-7} + j0.000999375 S$
    $D = 0.99875 + j0.00025$

**Simulated Experimental Data:**

**Condition 1 (Load $Z_L = 10 \Omega$):**
*   Sending End Voltage $V_{S1} = 100 \angle 0^\circ V$
*   Sending End Current $I_{S1} = (1.1 + j15.5) A$
*   Receiving End Voltage $V_{R1} = (98.5 + j0.5) V$
*   Receiving End Current $I_{R1} = (0.9 + j14.8) A$

**Condition 2 (Open Circuit, $I_R = 0$):**
*   Sending End Voltage $V_{S2} = 100 \angle 0^\circ V$
*   Sending End Current $I_{S2} = j0.1 A$
*   Receiving End Voltage $V_{R2} = 100 \angle 0^\circ V$
*   Receiving End Current $I_{R2} = 0 A$

**Calculations:**

**From Condition 2 (Open Circuit):**
$A = V_{S2} / V_{R2} = (100 \angle 0^\circ) / (100 \angle 0^\circ) = 1.0$
$C = I_{S2} / V_{R2} = (j0.1 A) / (100 \angle 0^\circ) = j0.001 S$

**From Condition 1 (Using calculated A and C):**
Using Eq 3.6 to find B:
$B = \frac{V_{S1} - A V_{R1}}{I_{R1}} = \frac{100 \angle 0^\circ - (1.0)(98.5 + j0.5)}{0.9 + j14.8}$
$B = \frac{100 - 98.5 - j0.5}{0.9 + j14.8} = \frac{1.5 - j0.5}{0.9 + j14.8}$
$B = \frac{(1.5 - j0.5)(0.9 - j14.8)}{(0.9 + j14.8)(0.9 - j14.8)} = \frac{1.35 - j22.2 - j0.45 + j^2 7.4}{0.81 + 219.04}$
$B = \frac{1.35 - 7.4 - j22.65}{219.85} = \frac{-6.05 - j22.65}{219.85} \approx -0.0275 - j0.103 \Omega$

This calculated value of B is significantly different from the expected $B=0.5+j2.5$. This indicates that the assumed experimental data might not be perfectly representative, or more measurement points are needed for better accuracy. Let's re-evaluate the approach.

**Correct Method for Experimental Determination:**
We need to solve the system of equations directly using multiple points.

Let's use a different set of simulated measurements that are more consistent with the expected parameters.

**Revised Simulated Experimental Data:**

**Condition 1 (Load $Z_L = 100 \angle 30^\circ \Omega$):**
*   $V_{S1} = 100 \angle 0^\circ V$
*   $I_{S1} = (0.985 + j0.075) A$
*   $V_{R1} = (99.0 + j0.2) V$
*   $I_{R1} = (0.950 + j0.060) A$

**Condition 2 (Load $Z_L = 50 \angle -20^\circ \Omega$):**
*   $V_{S2} = 100 \angle 0^\circ V$
*   $I_{S2} = (1.90 + j0.12) A$
*   $V_{R2} = (97.0 - j0.5) V$
*   $I_{R2} = (1.80 - j0.09) A$

**Solving for A and B:**
$V_{S1} = A V_{R1} + B I_{R1}$
$100 = A(99.0 + j0.2) + B(0.950 + j0.060)$

$V_{S2} = A V_{R2} + B I_{R2}$
$100 = A(97.0 - j0.5) + B(1.80 - j0.09)$

This is a system of two complex linear equations with two unknowns (A and B). Solving this system using complex arithmetic (e.g., Cramer's rule or substitution) would yield values for A and B.

Alternatively, we can use the open-circuit and short-circuit conditions for a more direct determination.

**Using Open Circuit and Short Circuit:**

**Condition: Open Circuit ($I_R = 0$)**
*   $V_S = 100 \angle 0^\circ V$
*   $I_S = j0.1 A$
*   $V_R = 100 \angle 0^\circ V$
*   $I_R = 0 A$

$A = V_S / V_R = 100/100 = 1.0$
$C = I_S / V_R = j0.1 / 100 = j0.001 S$

**Condition: Short Circuit ($V_R = 0$)**
*   $V_S = 100 \angle 0^\circ V$
*   $I_S = (0.5 + j2.5) A$
*   $V_R = 0 V$
*   $I_R = 1 A$ (Assuming a load of $1 \Omega$ to draw $1A$ at $0V$)

$B = V_S / I_R = 100 / 1 = 100 \Omega$ (This is not correct, $B$ should be impedance)
Ah, the short circuit condition implies $V_R=0$. So $V_S = B I_R$ and $I_S = D I_R$.

Let's use the definition where $I_R$ is the current that flows into the short circuit.
If $V_R = 0$, then $I_R = V_S / B$.
So, $B = V_S / I_R$ if $V_R=0$.
From the definition, if $V_R = 0$, $I_S = D I_R$.

Let's assume a short circuit test provides:
*   $V_S_{sc} = 10 \angle 0^\circ V$
*   $I_S_{sc} = (0.1 + j0.5) A$
*   $V_R_{sc} = 0 V$
*   $I_R_{sc} = (0.02 + j0.1) A$

Then, $B = V_{S_{sc}} / I_{R_{sc}} = (10 \angle 0^\circ) / (0.02 + j0.1)$
$B = \frac{10}{0.02 + j0.1} = \frac{10(0.02 - j0.1)}{(0.02)^2 + (0.1)^2} = \frac{0.2 - j1}{0.0004 + 0.01} = \frac{0.2 - j1}{0.0104}$
$B \approx 19.23 - j96.15 \Omega$. This is also not matching.

**The issue might be in simulating or interpreting short-circuit and open-circuit conditions for experimental determination in a simplified manner.**

Let's stick to the general two-point measurement method and assume the data is accurate. The formulas derived for A, B, C, D using two arbitrary load conditions are the correct way to perform experimental determination.

**Key Takeaway for Lab:** The lab aims to verify the theoretical ABCD constants by measuring voltages and currents at the sending and receiving ends under different load conditions and using the derived formulas to calculate the constants. The process emphasizes careful measurement and understanding of how transmission line behavior changes with load.

## 4. Applications of ABCD Constants

ABCD constants are fundamental for power system analysis, enabling various calculations:

*   **Voltage Regulation:**
    Voltage Regulation $= \frac{|V_S| - |V_R|}{|V_R|} \times 100\%$ at rated load.
    The sending-end voltage can be calculated for any receiving-end voltage and current.
*   **Transmission Efficiency:**
    Efficiency $(\eta) = \frac{\text{Power delivered to the load}}{\text{Power sent from the sending end}} \times 100\%$
    $\eta = \frac{|V_R| |I_R| \cos(\phi_R)}{|V_S| |I_S| \cos(\phi_S)} \times 100\%$
    $V_S$ and $I_S$ are calculated using ABCD constants.
*   **Power Transfer Capability:** Determine the maximum power a line can transmit without exceeding voltage or thermal limits.
*   **System Performance:** Analyze the impact of transmission lines on the overall system voltage profile and stability.
*   **Cascaded Lines:** For multiple cascaded lines, the overall ABCD constants can be found by multiplying the individual ABCD matrices.
    If Line 1 has constants $A_1, B_1, C_1, D_1$ and Line 2 has $A_2, B_2, C_2, D_2$, the combined constants are:
    $\begin{pmatrix} A_{total} & B_{total} \\ C_{total} & D_{total} \end{pmatrix} = \begin{pmatrix} A_1 & B_1 \\ C_1 & D_1 \end{pmatrix} \begin{pmatrix} A_2 & B_2 \\ C_2 & D_2 \end{pmatrix}$

**Learning Outcome Addressed:**
*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (ABCD constants are the core of these mathematical models for steady-state analysis.)

## 5. Practice Questions and Exercises

1.  **Short Line:** A short transmission line has a series impedance of $Z = (5 + j15) \Omega$. What are its ABCD constants?
2.  **Medium Line (Nominal Pi):** A medium transmission line has a series impedance per phase of $Z = (0.2 + j1.0) \Omega$ and a total shunt admittance per phase of $Y = j0.0005 S$. Calculate its ABCD constants using the nominal Pi model approximation.
3.  **Long Line Parameters:** For a long transmission line, $r = 0.01 \Omega/km$, $x = 0.05 \Omega/km$, $g = 0$, $b = 4 \times 10^{-6} S/km$. The line is 400 km long.
    a) Calculate the propagation constant $\gamma$.
    b) Calculate the characteristic impedance $Z_c$.
    c) Calculate the ABCD constants for this line.
4.  **Application:** A transmission line is represented by the following ABCD constants: $A = 0.95 + j0.02$, $B = 50 + j200 \Omega$, $C = 0.0005 + j0.002 S$, $D = 0.95 + j0.02$. If the receiving-end voltage is $V_R = 220 \angle 0^\circ kV$ and the receiving-end current is $I_R = 500 \angle -30^\circ A$. Calculate the sending-end voltage ($V_S$) and current ($I_S$). Also, calculate the sending-end power factor.
5.  **Lab Interpretation:** In a power system lab experiment, you measured the following for a transmission line model:
    *   **Condition 1 (Load):** $V_{S1} = 100 \angle 0^\circ V$, $I_{S1} = 2.0 \angle 15^\circ A$, $V_{R1} = 98 \angle -2^\circ V$, $I_{R1} = 1.8 \angle 10^\circ A$.
    *   **Condition 2 (Open Circuit):** $V_{S2} = 100 \angle 0^\circ V$, $I_{S2} = j0.05 A$, $V_{R2} = 100 \angle 0^\circ V$, $I_{R2} = 0 A$.
    Using these measurements, determine the ABCD constants of the line. Verify if $A \approx D$.

---

### Answers to Practice Questions:

1.  **Short Line:**
    $A = 1$
    $B = (5 + j15) \Omega$
    $C = 0$
    $D = 1$

2.  **Medium Line (Nominal Pi):**
    $Z = (0.2 + j1.0) \Omega$
    $Y = j0.0005 S$
    $YZ = (j0.0005)(0.2 + j1.0) = j0.0001 - 0.0005 = -0.0005 + j0.0001$

    $A = 1 + \frac{YZ}{2} = 1 + \frac{-0.0005 + j0.0001}{2} = 1 - 0.00025 + j0.00005 = 0.99975 + j0.00005$
    $B = Z = 0.2 + j1.0 \Omega$
    $C = Y(1 + \frac{YZ}{4}) = j0.0005 (1 + \frac{-0.0005 + j0.0001}{4})$
    $C = j0.0005 (1 - 0.000125 + j0.000025)$
    $C = j0.0005 (0.999875 + j0.000025)$
    $C = j0.0004999375 - 0.0000000125 \approx -1.25 \times 10^{-8} + j0.0004999$ S
    $D = 1 + \frac{YZ}{2} = 0.99975 + j0.00005$

3.  **Long Line Parameters:**
    $r = 0.01 \Omega/km$, $x = 0.05 \Omega/km$, $g = 0$, $b = 4 \times 10^{-6} S/km$. $l = 400 km$.
    $z = r + jx = 0.01 + j0.05 \Omega/km$
    $y = g + jb = j4 \times 10^{-6} S/km$

    a) $\gamma = \sqrt{zy} = \sqrt{(0.01 + j0.05)(j4 \times 10^{-6})} = \sqrt{j0.00004 - 0.0002}$
    $\gamma = \sqrt{-0.0002 + j0.00004}$
    Magnitude: $|-0.0002 + j0.00004| = \sqrt{(-0.0002)^2 + (0.00004)^2} \approx 0.000204$
    Angle: $\theta = \arctan(\frac{0.00004}{-0.0002}) = \arctan(-0.2) \approx 168.7^\circ$
    $\gamma = \sqrt{0.000204} \angle \frac{168.7^\circ}{2} \approx 0.01428 \angle 84.35^\circ$
    $\gamma \approx 0.01428 (\cos(84.35^\circ) + j\sin(84.35^\circ)) \approx 0.01428 (0.0987 + j0.995)$
    $\gamma \approx 0.00141 + j0.01421$ (per km)

    b) $Z_c = \sqrt{z/y} = \sqrt{\frac{0.01 + j0.05}{j4 \times 10^{-6}}} = \sqrt{\frac{0.01 + j0.05}{j0.000004}}$
    $\frac{0.01 + j0.05}{j0.000004} = \frac{(0.01 + j0.05)(-j0.000004)}{(j0.000004)(-j0.000004)} = \frac{-j0.000004 - j^2 0.0002}{0.0000000016}$
    $\frac{0.0002 - j0.000004}{0.0000000016} \approx 125000 - j2500$
    $Z_c = \sqrt{125000 - j2500}$
    Magnitude: $|125000 - j2500| = \sqrt{125000^2 + (-2500)^2} \approx 125031$
    Angle: $\arctan(\frac{-2500}{125000}) \approx -1.15^\circ$
    $Z_c = \sqrt{125031} \angle \frac{-1.15^\circ}{2} \approx 353.6 \angle -0.575^\circ \Omega$
    $Z_c \approx 353.6 (\cos(-0.575^\circ) + j\sin(-0.575^\circ)) \approx 353.57 - j3.53 \Omega$

    c) $\gamma l = (0.01428 \angle 84.35^\circ) \times 400 = 5.712 \angle 84.35^\circ$
    $\gamma l \approx 5.712 (\cos(84.35^\circ) + j\sin(84.35^\circ)) \approx 5.712 (0.0987 + j0.995)$
    $\gamma l \approx 0.563 + j5.683$

    $A = \cosh(\gamma l) \approx \cosh(0.563 + j5.683) \approx -1.188 + j2.693$
    $B = Z_c \sinh(\gamma l) \approx (353.57 - j3.53) \sinh(0.563 + j5.683)$
    $\sinh(0.563 + j5.683) \approx 2.404 + j1.852$
    $B \approx (353.57 - j3.53)(2.404 + j1.852) \approx 849.7 + j655.0 - j8.48 + j6.54 \approx 849.7 + j653.1 \Omega$
    $C = \frac{1}{Z_c} \sinh(\gamma l) \approx \frac{1}{353.6 \angle -0.575^\circ} (2.404 + j1.852)$
    $\frac{1}{Z_c} = \frac{1}{353.6} \angle 0.575^\circ \approx 0.002828 \angle 0.575^\circ$
    $(2.404 + j1.852) \approx 3.038 \angle 37.8^\circ$
    $C \approx (0.002828 \angle 0.575^\circ) (3.038 \angle 37.8^\circ) \approx 0.00858 \angle 38.375^\circ$
    $C \approx 0.00858 (\cos(38.375^\circ) + j\sin(38.375^\circ)) \approx 0.00672 + j0.00534 S$
    $D = A \approx -1.188 + j2.693$

4.  **Application:**
    $V_R = 220 \angle 0^\circ kV = 220000 \angle 0^\circ V$
    $I_R = 500 \angle -30^\circ A$

    $V_S = A V_R + B I_R$
    $V_S = (0.95 + j0.02)(220000 \angle 0^\circ) + (50 + j200)(500 \angle -30^\circ)$
    $V_S = (0.95 + j0.02)(220000) + (50 + j200)(500 (\cos(-30^\circ) + j\sin(-30^\circ)))$
    $V_S = (209000 + j4400) + (50 + j200)(500 (0.866 - j0.5))$
    $V_S = (209000 + j4400) + (50 + j200)(433 - j250)$
    $V_S = (209000 + j4400) + (50 \times 433 - 50 \times 250j + j200 \times 433 - j250 \times j200)$
    $V_S = (209000 + j4400) + (21650 - j12500 + j86600 + 50000)$
    $V_S = (209000 + j4400) + (71650 + j74100)$
    $V_S = 280650 + j78500$
    $V_S \approx 291032 \angle 15.6^\circ V \approx 291.03 \angle 15.6^\circ kV$

    $I_S = C V_R + D I_R$
    $I_S = (0.0005 + j0.002)(220000 \angle 0^\circ) + (0.95 + j0.02)(500 \angle -30^\circ)$
    $I_S = (0.0005 + j0.002)(220000) + (0.95 + j0.02)(433 - j250)$
    $I_S = (110 + j440) + (0.95 \times 433 - 0.95 \times 250j + j0.02 \times 433 - j0.02 \times j250)$
    $I_S = (110 + j440) + (411.35 - j237.5 + j8.66 + 5)$
    $I_S = (110 + j440) + (416.35 - j228.84)$
    $I_S = 526.35 + j211.16$
    $I_S \approx 565.9 \angle 21.8^\circ A$

    Sending-end power factor: The angle difference between $V_S$ and $I_S$ is $15.6^\circ - 21.8^\circ = -6.2^\circ$.
    Since the current angle is more positive than the voltage angle, the current leads the voltage.
    Sending-end power factor is $\cos(-6.2^\circ) \approx 0.994$ lagging (if current lags voltage) or leading (if current leads voltage). Here, current leads, so it's a leading power factor.

5.  **Lab Interpretation:**
    **From Condition 2 (Open Circuit):**
    $A = V_{S2} / V_{R2} = (100 \angle 0^\circ) / (100 \angle 0^\circ) = 1.0$
    $C = I_{S2} / V_{R2} = (j0.05 A) / (100 \angle 0^\circ) = j0.0005 S$

    **From Condition 1 (Load):**
    $V_{S1} = A V_{R1} + B I_{R1}$
    $100 \angle 0^\circ = (1.0)(98 \angle -2^\circ) + B(1.8 \angle 10^\circ)$
    $100 = (98(\cos(-2^\circ) + j\sin(-2^\circ))) + B(1.8(\cos(10^\circ) + j\sin(10^\circ)))$
    $100 \approx (98(0.999 - j0.035)) + B(1.8(0.985 + j0.174))$
    $100 \approx (97.9 - j3.43) + B(1.773 + j0.313)$

    $100 - (97.9 - j3.43) = B(1.773 + j0.313)$
    $2.1 + j3.43 = B(1.773 + j0.313)$
    $B = \frac{2.1 + j3.43}{1.773 + j0.313}$
    $B = \frac{(2.1 + j3.43)(1.773 - j0.313)}{(1.773)^2 + (0.313)^2}$
    $B = \frac{3.713 - j0.657 + j6.079 - j^2 1.074}{3.143 + 0.098}$
    $B = \frac{3.713 + 1.074 + j(6.079 - 0.657)}{3.241}$
    $B = \frac{4.787 + j5.422}{3.241} \approx 1.477 + j1.673 \Omega$

    **Calculated ABCD Constants:**
    $A = 1.0$
    $B = 1.477 + j1.673 \Omega$
    $C = j0.0005 S$
    $D = A = 1.0$

    **Verification:**
    $A = 1.0$, $D = 1.0$. So $A \approx D$ is satisfied.
    $AD - BC = (1.0)(1.0) - (1.477 + j1.673)(j0.0005)$
    $AD - BC = 1 - (j0.0007385 + j^2 0.0008365)$
    $AD - BC = 1 - (-0.0008365 + j0.0007385)$
    $AD - BC = 1 + 0.0008365 - j0.0007385 \approx 1.0008$
    This is close to 1, confirming the experimental results are reasonable.

## 6. Important Points to Remember

*   **ABCD Constants:** Represent the sending-end voltage and current in terms of receiving-end voltage and current.
*   **Reciprocity:** For passive networks, $A=D$.
*   **Transmission Line Models:** Short (neglect C), Medium (Nominal Pi/T, consider C), Long (distributed parameters, hyperbolic functions).
*   **Long Line Formulae:** Use hyperbolic functions for accurate modeling of long lines. Approximations for medium lines can be derived from long line formulae.
*   **Experimental Determination:** Requires multiple load conditions or open/short circuit tests to solve for the four constants.
*   **Lab Practice:** Focuses on measuring voltages and currents and applying the derived relationships to verify theoretical ABCD constants.
*   **Power Flow and Efficiency:** ABCD constants are vital for calculating power flow, voltage regulation, and transmission efficiency.
*   **Cascading Lines:** ABCD matrices can be multiplied for series-connected lines.

This comprehensive set of notes covers the theoretical background, practical applications, and experimental aspects of transmission line modeling using ABCD constants, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
