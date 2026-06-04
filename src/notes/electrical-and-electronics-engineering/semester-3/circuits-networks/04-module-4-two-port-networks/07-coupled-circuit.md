---
title: "Coupled circuit"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae1"
status: "completed"
scrapedAt: "2026-05-23T16:11:47.550Z"
---
# CIRCUITS & NETWORKS - Module 4: Two Port Networks

## Topic: Coupled Circuits

**Course Outcomes Addressed:** CO5, CO6
**Knowledge Level:** K3 (Apply)

---

### 1. Introduction to Coupled Circuits

**Definition:** Coupled circuits are circuits where the magnetic flux produced by one circuit linkage with another circuit, resulting in energy transfer between them. This coupling is typically achieved through magnetic fields and is a fundamental concept in transformers, inductors with shared magnetic cores, and radio frequency circuits.

**Key Concepts:**

*   **Mutual Inductance (M):** This parameter quantifies the degree of magnetic coupling between two coils. It is defined as the ratio of the voltage induced in one coil to the rate of change of current in the other coil, assuming the first coil is open-circuited.
    *   Mathematically: $M = -\frac{V_2}{di_1/dt}$ (when coil 2 is open and current $i_1$ flows in coil 1)
    *   Or: $M = -\frac{V_1}{di_2/dt}$ (when coil 1 is open and current $i_2$ flows in coil 2)
    *   **Units:** Henry (H)

*   **Coefficient of Coupling (k):** This dimensionless parameter indicates the extent of magnetic coupling between two coils. It is defined as the ratio of the mutual inductance (M) to the geometric mean of the self-inductances ($L_1$ and $L_2$) of the two coils.
    *   Mathematically: $k = \frac{M}{\sqrt{L_1 L_2}}$
    *   **Range:** $0 \le k \le 1$
        *   $k = 0$: No coupling (magnetic flux from one coil does not link with the other).
        *   $k = 1$: Perfect coupling (all magnetic flux from one coil links with the other).
        *   $0 < k < 1$: Imperfect coupling.

*   **Dot Convention:** This convention is crucial for determining the polarity of the induced voltages in coupled coils. Dots are placed on the terminals of the coils.
    *   **Rule:** If current enters the dotted terminal of one coil, the induced voltage in the other coil will have positive polarity at its dotted terminal. Conversely, if current leaves the dotted terminal of one coil, the induced voltage in the other coil will have negative polarity at its dotted terminal.

**Textbook References:**

*   **Van Valkenburg (3rd Ed., 2019):** Chapter 10 (Transformers) extensively covers coupled circuits, mutual inductance, and the dot convention.
*   **Ravish R Singh (2nd Ed., 2019):** Chapter 12 (Coupled Circuits) provides a dedicated treatment of this topic, including impedance and admittance matrices for coupled circuits.
*   **Suresh Kumar (1st Ed., 2008):** Chapter 9 (Coupled Circuits) focuses on the fundamental principles and applications.
*   **A Sudhakar & Shyammohan S Palli (5th Ed., 2017):** Chapter 10 (Coupled Circuits) offers a comprehensive approach to analysis and synthesis.

---

### 2. Mathematical Representation of Coupled Circuits

Consider two magnetically coupled coils with self-inductances $L_1$ and $L_2$, and mutual inductance $M$. Let $i_1$ and $i_2$ be the currents in the coils, and $v_1$ and $v_2$ be the voltages across the coils.

The voltage across coil 1 ($v_1$) is the sum of the voltage due to its own self-inductance and the voltage induced in it due to the changing current in coil 2.

*   **Voltage in Coil 1 ($v_1$):**
    $v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$

*   **Voltage in Coil 2 ($v_2$):**
    $v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$

**The sign convention (±) depends on the direction of currents and the dot convention:**

*   **Case 1: Currents entering dotted terminals:**
    If $i_1$ enters the dotted terminal of coil 1 and $i_2$ enters the dotted terminal of coil 2, then both induced voltages add to the self-induced voltages.
    $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
    $v_2 = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$

*   **Case 2: Current entering dotted terminal of coil 1, leaving dotted terminal of coil 2:**
    If $i_1$ enters the dotted terminal of coil 1 and $i_2$ leaves the dotted terminal of coil 2 (i.e., $i_2$ flows out of the dot), then the induced voltage in coil 1 due to $i_2$ opposes the self-induced voltage.
    $v_1 = L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$
    $v_2 = L_2 \frac{di_2}{dt} - M \frac{di_1}{dt}$ (Note: The sign for $v_2$ is also flipped if the convention is consistent. If $i_1$ is entering dot, and $i_2$ is leaving dot, then flux from $i_2$ opposes flux from $i_1$, and vice-versa. The standard formulation is that if $i_1$ enters dot1, $v_2$ is positive at dot2; if $i_2$ enters dot2, $v_1$ is positive at dot1. If $i_1$ enters dot1 and $i_2$ LEAVES dot2, then the flux from $i_2$ opposes the flux from $i_1$. So the sign for the mutual term will be negative.)

**Important Point to Remember:** Always apply the dot convention carefully to determine the signs of the mutual inductance terms.

---

### 3. Impedance and Admittance Matrices for Coupled Circuits

Coupled circuits can be analyzed using the impedance ($z$) or admittance ($y$) parameters, which are fundamental to two-port network analysis (CO5).

#### 3.1 Impedance Matrix Parameters

For a coupled circuit with ports 1 and 2, the voltage-current relationships can be expressed in terms of impedance parameters:

$v_1 = z_{11} i_1 + z_{12} i_2$
$v_2 = z_{21} i_1 + z_{22} i_2$

In matrix form:
$\begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} \begin{bmatrix} i_1 \\ i_2 \end{bmatrix}$

**Determining Impedance Parameters for Coupled Circuits:**

Recall the voltage equations for coupled coils:
$v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$
$v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$

In the phasor domain (for sinusoidal steady-state, assuming $j\omega$ is the operator):
$V_1 = (j\omega L_1) I_1 \pm (j\omega M) I_2$
$V_2 = (j\omega L_2) I_2 \pm (j\omega M) I_1$

Comparing these with the impedance parameter equations:

*   **To find $z_{11}$:** Set $I_2 = 0$ (port 2 is open-circuited).
    $V_1 = (j\omega L_1) I_1$
    $V_2 = \pm (j\omega M) I_1$
    Therefore, $z_{11} = \frac{V_1}{I_1} = j\omega L_1$
    And $z_{21} = \frac{V_2}{I_1} = \pm j\omega M$

*   **To find $z_{12}$:** Set $I_1 = 0$ (port 1 is open-circuited).
    $V_1 = \pm (j\omega M) I_2$
    $V_2 = (j\omega L_2) I_2$
    Therefore, $z_{12} = \frac{V_1}{I_2} = \pm j\omega M$
    And $z_{22} = \frac{V_2}{I_2} = j\omega L_2$

**Impedance Matrix for Coupled Circuits:**

Assuming currents enter the dotted terminals (positive mutual coupling):
$z_{11} = j\omega L_1$
$z_{12} = j\omega M$
$z_{21} = j\omega M$
$z_{22} = j\omega L_2$

$\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

**Important Property:** For passive networks, $z_{12} = z_{21}$ (reciprocity). This is always true for coupled inductors.

#### 3.2 Admittance Matrix Parameters

For a coupled circuit with ports 1 and 2, the current-voltage relationships can be expressed in terms of admittance parameters:

$i_1 = y_{11} v_1 + y_{12} v_2$
$i_2 = y_{21} v_1 + y_{22} v_2$

In matrix form:
$\begin{bmatrix} i_1 \\ i_2 \end{bmatrix} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$

**Determining Admittance Parameters for Coupled Circuits:**

To determine admittance parameters, we short-circuit the ports.

*   **To find $y_{11}$:** Set $V_2 = 0$ (port 2 is short-circuited).
    The equation for $v_1$ becomes $v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$.
    The equation for $v_2$ becomes $0 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$.
    From the $v_2$ equation: $L_2 \frac{di_2}{dt} = \mp M \frac{di_1}{dt} \implies \frac{di_2}{dt} = \mp \frac{M}{L_2} \frac{di_1}{dt}$.

    Substitute this into the $v_1$ equation:
    $v_1 = L_1 \frac{di_1}{dt} \pm M \left(\mp \frac{M}{L_2} \frac{di_1}{dt}\right)$
    $v_1 = L_1 \frac{di_1}{dt} - \frac{M^2}{L_2} \frac{di_1}{dt}$
    $v_1 = \left(L_1 - \frac{M^2}{L_2}\right) \frac{di_1}{dt}$

    In the phasor domain:
    $V_1 = \left(j\omega L_1 - \frac{(j\omega M)^2}{j\omega L_2}\right) I_1 = \left(j\omega L_1 - \frac{-\omega^2 M^2}{j\omega L_2}\right) I_1 = \left(j\omega L_1 + \frac{j\omega M^2}{L_2}\right) I_1$
    $V_1 = j\omega \left(L_1 + \frac{M^2}{L_2}\right) I_1$

    This equation relates $V_1$ and $I_1$ when port 2 is short-circuited. The current $I_1$ splits between the self-impedance of coil 1 and the coupling effect with coil 2.

    We need $I_1$ in terms of $V_1$. From the impedance parameters, we know that the equivalent impedance seen at port 1 when port 2 is short-circuited is $z_{11} - \frac{z_{12}z_{21}}{z_{22}}$.
    For coupled circuits: $j\omega L_1 - \frac{(j\omega M)(j\omega M)}{j\omega L_2} = j\omega L_1 - \frac{-\omega^2 M^2}{j\omega L_2} = j\omega L_1 + \frac{j\omega M^2}{L_2} = j\omega \left(L_1 + \frac{M^2}{L_2}\right)$.

    The admittance $y_{11}$ is the reciprocal of this equivalent impedance:
    $y_{11} = \frac{1}{j\omega \left(L_1 + \frac{M^2}{L_2}\right)} = \frac{1}{j\omega L_1 (1 + \frac{M^2}{L_1 L_2})} = \frac{1}{j\omega L_1 (1 + k^2)}$

    Alternatively, using the voltage equations directly:
    $v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$
    $0 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt} \implies \frac{di_2}{dt} = \mp \frac{M}{L_2} \frac{di_1}{dt}$
    $v_1 = L_1 \frac{di_1}{dt} \pm M \left(\mp \frac{M}{L_2} \frac{di_1}{dt}\right) = \left(L_1 - \frac{M^2}{L_2}\right) \frac{di_1}{dt}$
    This gives the equivalent inductance when port 2 is shorted.

    Let's use the direct conversion from impedance matrix to admittance matrix:
    $Z = \begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix}$
    $Y = Z^{-1} = \frac{1}{\det(Z)} \begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}$
    $\det(Z) = (j\omega L_1)(j\omega L_2) - (j\omega M)(j\omega M) = -\omega^2 L_1 L_2 - (-\omega^2 M^2) = \omega^2 (M^2 - L_1 L_2)$
    $Y = \frac{1}{\omega^2 (M^2 - L_1 L_2)} \begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}$
    $Y = \frac{j\omega}{\omega^2 (M^2 - L_1 L_2)} \begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix}$
    $Y = \frac{j}{\omega (M^2 - L_1 L_2)} \begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix}$

    Substituting $M^2 = k^2 L_1 L_2$:
    $Y = \frac{j}{\omega (k^2 L_1 L_2 - L_1 L_2)} \begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix} = \frac{j}{\omega L_1 L_2 (k^2 - 1)} \begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix}$
    $Y = \frac{-j}{\omega L_1 L_2 (1 - k^2)} \begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix}$

    Therefore:
    $y_{11} = \frac{-j L_2}{\omega L_1 L_2 (1 - k^2)} = \frac{-j}{\omega L_1 (1 - k^2)} = \frac{j}{\omega L_1 (1 - k^2)}$ (Note: In this derivation, the reciprocal of impedance was taken, which implies $y_{11} = 1 / Z_{eq11}$, and $Z_{eq11} = j\omega(L_1 + M^2/L_2) = j\omega L_1(1 + M^2/(L_1L_2)) = j\omega L_1(1+k^2)$. So $y_{11} = 1/(j\omega L_1(1+k^2)) = -j/(\omega L_1(1+k^2))$. Let's re-evaluate the $y_{11}$ definition with the short circuit.
    If $V_2=0$, then $0 = (j\omega L_2)I_2 \pm (j\omega M)I_1$.
    $I_2 = \mp \frac{M}{L_2} I_1$.
    $V_1 = (j\omega L_1)I_1 \pm M (\mp \frac{M}{L_2} I_1) = (j\omega L_1 \mp M (\mp \frac{M}{L_2})) I_1 = (j\omega L_1 - \frac{M^2}{L_2}) I_1$.
    So $Z_{in} = V_1/I_1 = j\omega L_1 - M^2/(j\omega L_2) = j\omega L_1 + j\omega M^2/L_2 = j\omega(L_1 + M^2/L_2)$.
    $y_{11} = 1/Z_{in} = 1 / (j\omega(L_1 + M^2/L_2)) = 1 / (j\omega L_1(1+k^2)) = -j/(\omega L_1(1+k^2))$.

    Let's assume positive coupling ($i_1$ enters dot1, $i_2$ enters dot2).
    $V_1 = j\omega L_1 I_1 + j\omega M I_2$
    $V_2 = j\omega M I_1 + j\omega L_2 I_2$

    To find $y_{11}$, set $V_2=0$:
    $0 = j\omega M I_1 + j\omega L_2 I_2 \implies I_2 = -\frac{M}{L_2} I_1$
    $V_1 = j\omega L_1 I_1 + j\omega M (-\frac{M}{L_2} I_1) = j\omega L_1 I_1 - j\omega \frac{M^2}{L_2} I_1 = j\omega (L_1 - \frac{M^2}{L_2}) I_1$
    $y_{11} = \frac{I_1}{V_1} = \frac{1}{j\omega (L_1 - \frac{M^2}{L_2})} = \frac{1}{j\omega L_1 (1 - \frac{M^2}{L_1 L_2})} = \frac{1}{j\omega L_1 (1 - k^2)} = \frac{-j}{\omega L_1 (1 - k^2)}$

    Let's reconsider the $Z$ to $Y$ conversion. The determinant of the impedance matrix for coupled coils is $Z_{11}Z_{22} - Z_{12}Z_{21} = (j\omega L_1)(j\omega L_2) - (j\omega M)^2 = -\omega^2 L_1L_2 - (-\omega^2 M^2) = \omega^2(M^2 - L_1L_2)$.
    $Y = \frac{1}{\omega^2(M^2 - L_1L_2)} \begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}$
    $y_{11} = \frac{j\omega L_2}{\omega^2(M^2 - L_1L_2)} = \frac{j L_2}{\omega(k^2 L_1L_2 - L_1L_2)} = \frac{j L_2}{\omega L_1L_2 (k^2 - 1)} = \frac{j}{\omega L_1 (k^2 - 1)} = \frac{-j}{\omega L_1 (1 - k^2)}$

    This confirms the $y_{11}$ calculation.

    **Admittance Matrix for Coupled Circuits (assuming positive coupling):**
    $y_{11} = \frac{-j}{\omega L_1 (1 - k^2)}$
    $y_{12} = \frac{j M}{\omega (L_1 L_2 - M^2)} = \frac{j M}{\omega L_1 L_2 (1 - k^2)} = \frac{j k}{\omega \sqrt{L_1 L_2} (1 - k^2)}$
    $y_{21} = \frac{j M}{\omega (L_1 L_2 - M^2)} = \frac{j k}{\omega \sqrt{L_1 L_2} (1 - k^2)}$
    $y_{22} = \frac{-j}{\omega L_2 (1 - k^2)}$

    $\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} \frac{-j}{\omega L_1 (1 - k^2)} & \frac{j M}{\omega (L_1 L_2 - M^2)} \\ \frac{j M}{\omega (L_1 L_2 - M^2)} & \frac{-j}{\omega L_2 (1 - k^2)} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$

    **Important Property:** For passive networks, $y_{12} = y_{21}$ (reciprocity). This is true for coupled inductors.

---

### 4. Analysis of Coupled Circuits in Sinusoidal Steady-State (CO6)

The analysis of coupled circuits under sinusoidal excitation involves applying circuit analysis techniques (like Kirchhoff's laws or parameter matrices) to the phasor domain representation.

**Example 1: Series-Series Coupling**

Consider two coupled coils connected in series in both loops.

**Scenario 1: Coils aiding (same dot convention for currents)**
If $i_1$ enters dot of $L_1$ and $i_2$ enters dot of $L_2$, and they are in series:
Loop 1: $V_s = i_1 R_1 + L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
Loop 2: $0 = i_2 R_2 + L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$

In phasor form:
$V_s = I_1 R_1 + j\omega L_1 I_1 + j\omega M I_2$
$0 = I_2 R_2 + j\omega L_2 I_2 + j\omega M I_1$

We have a system of two linear equations with two unknowns ($I_1, I_2$). This can be solved using Cramer's rule or substitution.

**Using Impedance Parameters:**
The network formed by series combinations of coupled coils can be represented by the impedance matrix derived earlier.
$\begin{bmatrix} V_s \\ 0 \end{bmatrix} = \begin{bmatrix} R_1 + j\omega L_1 & j\omega M \\ j\omega M & R_2 + j\omega L_2 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

Let $Z = \begin{bmatrix} R_1 + j\omega L_1 & j\omega M \\ j\omega M & R_2 + j\omega L_2 \end{bmatrix}$
$I_1 = \frac{\det \begin{bmatrix} V_s & j\omega M \\ 0 & R_2 + j\omega L_2 \end{bmatrix}}{\det(Z)} = \frac{V_s (R_2 + j\omega L_2)}{(R_1 + j\omega L_1)(R_2 + j\omega L_2) - (j\omega M)^2}$
$I_1 = \frac{V_s (R_2 + j\omega L_2)}{R_1 R_2 + j\omega R_1 L_2 + j\omega R_2 L_1 - \omega^2 L_1 L_2 + \omega^2 M^2}$
$I_1 = \frac{V_s (R_2 + j\omega L_2)}{R_1 R_2 - \omega^2 (L_1 L_2 - M^2) + j\omega (R_1 L_2 + R_2 L_1)}$

**Scenario 2: Coils opposing (opposite dot convention for currents)**
If $i_1$ enters dot of $L_1$ and $i_2$ leaves dot of $L_2$:
Loop 1: $V_s = i_1 R_1 + L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$
Loop 2: $0 = i_2 R_2 + L_2 \frac{di_2}{dt} - M \frac{di_1}{dt}$

In phasor form:
$V_s = I_1 R_1 + j\omega L_1 I_1 - j\omega M I_2$
$0 = I_2 R_2 + j\omega L_2 I_2 - j\omega M I_1$

The impedance matrix changes:
$\begin{bmatrix} V_s \\ 0 \end{bmatrix} = \begin{bmatrix} R_1 + j\omega L_1 & -j\omega M \\ -j\omega M & R_2 + j\omega L_2 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

**Example 2: Parallel-Parallel Coupling**

Consider two coupled coils connected in parallel across a voltage source.

**Scenario 1: Coils aiding**
Loop 1: $v_1(t)$ across $L_1$ and $R_1$. $v_1(t)$ is also the voltage across $L_2$ and $R_2$.
$v_1 = i_1 R_1 + L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
$v_2 = i_2 R_2 + L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$
The voltage source $V_s$ is applied such that $v_1 = v_2 = V_s$.

In phasor form:
$V_s = I_1 R_1 + j\omega L_1 I_1 + j\omega M I_2$
$V_s = I_2 R_2 + j\omega L_2 I_2 + j\omega M I_1$

Equating the two expressions for $V_s$:
$I_1 R_1 + j\omega L_1 I_1 + j\omega M I_2 = I_2 R_2 + j\omega L_2 I_2 + j\omega M I_1$
Rearranging to get a relation between $I_1$ and $I_2$:
$I_1 (R_1 + j\omega L_1 - j\omega M) = I_2 (R_2 + j\omega L_2 - j\omega M)$
$I_1 (Z_{11} - Z_{12}) = I_2 (Z_{22} - Z_{21})$

And from the equation $V_s = I_1 Z_{11} + I_2 Z_{12}$:
$V_s = I_1 (j\omega L_1) + I_2 (j\omega M)$

This requires solving two equations with two unknowns ($I_1, I_2$) or using the impedance parameters in a different context. A more direct approach is to use nodal analysis.

**Using Admittance Parameters:**
The total current entering the network is $I_1 + I_2$.
The admittance matrix describes the relationship between currents and voltages:
$\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} V_s \\ V_s \end{bmatrix}$

$I_1 = y_{11} V_s + y_{12} V_s = (y_{11} + y_{12}) V_s$
$I_2 = y_{21} V_s + y_{22} V_s = (y_{21} + y_{22}) V_s$

Total current drawn from the source is $I_{total} = I_1 + I_2 = (y_{11} + y_{12} + y_{21} + y_{22}) V_s$.
The equivalent admittance is $Y_{eq} = y_{11} + y_{12} + y_{21} + y_{22}$.

For aiding coils:
$y_{11} = \frac{-j}{\omega L_1 (1 - k^2)}$
$y_{12} = \frac{j k}{\omega \sqrt{L_1 L_2} (1 - k^2)}$
$y_{21} = \frac{j k}{\omega \sqrt{L_1 L_2} (1 - k^2)}$
$y_{22} = \frac{-j}{\omega L_2 (1 - k^2)}$

$Y_{eq} = \frac{-j}{\omega (1 - k^2)} \left( \frac{1}{L_1} + \frac{1}{L_2} + \frac{2k}{\sqrt{L_1 L_2}} \right)$
$Y_{eq} = \frac{-j}{\omega (1 - k^2)} \left( \frac{L_2 + L_1 + 2k\sqrt{L_1 L_2}}{L_1 L_2} \right)$
Since $M = k\sqrt{L_1 L_2}$, $2k\sqrt{L_1 L_2} = 2M$.
$Y_{eq} = \frac{-j}{\omega (1 - k^2)} \left( \frac{L_1 + L_2 + 2M}{L_1 L_2} \right)$

This expression for $Y_{eq}$ can be related to the total inductance when coils are in parallel. The effective inductance for two coils in parallel with mutual inductance $M$ (aiding) is $L_{eq} = \frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}$.
$Y_{eq} = \frac{1}{j\omega L_{eq}} = \frac{1}{j\omega \frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}} = \frac{j(L_1 + L_2 + 2M)}{\omega (L_1 L_2 - M^2)}$
$Y_{eq} = \frac{j(L_1 + L_2 + 2M)}{\omega L_1 L_2 (1 - k^2)}$

There seems to be a sign discrepancy. Let's re-check the admittance matrix derivation. The $y$ parameters are usually derived from $I = YV$.
The voltage equations are:
$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega M I_1 + j\omega L_2 I_2$

When $V_1=V_2=V_s$, we need to express $I_1$ and $I_2$ in terms of $V_s$.
The impedance matrix is $Z = \begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix}$.
The admittance matrix is $Y = Z^{-1} = \frac{1}{\omega^2(M^2 - L_1L_2)} \begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}$.

For parallel connection where $V_1 = V_2 = V_s$:
$I_1 = y_{11} V_s + y_{12} V_s = (y_{11} + y_{12}) V_s$
$I_2 = y_{21} V_s + y_{22} V_s = (y_{21} + y_{22}) V_s$

$y_{11} = \frac{j\omega L_2}{\omega^2(M^2 - L_1L_2)} = \frac{j L_2}{\omega(k^2 L_1L_2 - L_1L_2)} = \frac{j L_2}{\omega L_1L_2 (k^2 - 1)} = \frac{j}{\omega L_1 (k^2 - 1)} = \frac{-j}{\omega L_1 (1 - k^2)}$
$y_{12} = \frac{-j\omega M}{\omega^2(M^2 - L_1L_2)} = \frac{-j M}{\omega(k^2 L_1L_2 - L_1L_2)} = \frac{-j M}{\omega L_1L_2 (k^2 - 1)} = \frac{j M}{\omega L_1L_2 (1 - k^2)} = \frac{j k}{\omega \sqrt{L_1 L_2} (1 - k^2)}$
$y_{21} = y_{12}$
$y_{22} = \frac{j\omega L_1}{\omega^2(M^2 - L_1L_2)} = \frac{j L_1}{\omega(k^2 L_1L_2 - L_1L_2)} = \frac{j L_1}{\omega L_1L_2 (k^2 - 1)} = \frac{j}{\omega L_2 (k^2 - 1)} = \frac{-j}{\omega L_2 (1 - k^2)}$

So the previous $y_{ij}$ were correct.
$Y_{eq} = y_{11} + y_{12} + y_{21} + y_{22} = \frac{-j}{\omega (1 - k^2)} \left( \frac{1}{L_1} + \frac{1}{L_2} + \frac{2k}{\sqrt{L_1 L_2}} \right)$
$Y_{eq} = \frac{-j}{\omega (1 - k^2)} \left( \frac{L_2 + L_1 + 2k\sqrt{L_1 L_2}}{L_1 L_2} \right)$
$Y_{eq} = \frac{-j (L_1 + L_2 + 2M)}{\omega L_1 L_2 (1 - k^2)}$

This is the total admittance for the parallel connection. The equivalent inductance $L_{eq}$ is given by $1/(j\omega Y_{eq})$.
$L_{eq} = \frac{1}{j\omega Y_{eq}} = \frac{1}{j\omega \frac{-j (L_1 + L_2 + 2M)}{\omega L_1 L_2 (1 - k^2)}} = \frac{1}{\frac{(L_1 + L_2 + 2M)}{L_1 L_2 (1 - k^2)}} = \frac{L_1 L_2 (1 - k^2)}{L_1 + L_2 + 2M}$
$L_{eq} = \frac{L_1 L_2 - k^2 L_1 L_2}{L_1 + L_2 + 2M} = \frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}$.
This matches the known formula for parallel aiding coils.

---

### 5. Types of Coupling

*   **Loose Coupling ($k < 0.5$):** Most of the flux produced by one coil does not link with the other. The self-inductances are much larger than the mutual inductance.
*   **Medium Coupling ($0.5 < k < 0.9$):** A significant portion of the flux links the coils.
*   **Tight/Strong Coupling ($k > 0.9$):** Almost all the flux produced by one coil links with the other. In the ideal case ($k=1$), the mutual inductance is equal to the square root of the product of self-inductances ($M = \sqrt{L_1 L_2}$).

---

### 6. Applications of Coupled Circuits

*   **Transformers:** The most prominent application. They are used for voltage transformation, impedance matching, and electrical isolation.
*   **Wireless Power Transfer:** Inductive coupling is used to transfer energy wirelessly.
*   **Radio Frequency (RF) Circuits:** Coupled inductors are used in resonant circuits and filters.
*   **Sensors:** Various sensors utilize magnetic coupling to detect physical quantities.

---

### 7. Important Points to Remember

*   **Mutual Inductance (M):** Defined by the interaction of magnetic fields.
*   **Coefficient of Coupling (k):** Indicates the degree of coupling ($0 \le k \le 1$).
*   **Dot Convention:** Essential for determining the polarity of induced voltages and the signs in circuit equations.
*   **Voltage Equations:** $v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$ and $v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$.
*   **Impedance Matrix:** $z_{11} = j\omega L_1$, $z_{12} = z_{21} = \pm j\omega M$, $z_{22} = j\omega L_2$. For aiding coupling, it's $+j\omega M$.
*   **Admittance Matrix:** Can be derived from the impedance matrix by inversion.
*   **Sinusoidal Steady-State:** Analysis is performed in the phasor domain using $j\omega$.
*   **Aiding vs. Opposing:** The signs of the mutual inductance terms in the voltage equations (or in the $z_{12}, z_{21}$ parameters) depend on the relative polarity of the coupled coils and the assumed direction of currents.

---

### 8. Practice Questions and Exercises

**Question 1:**
Two coupled inductors have self-inductances $L_1 = 10$ mH and $L_2 = 20$ mH. The coefficient of coupling is $k = 0.8$.
(a) Calculate the mutual inductance $M$.
(b) If the current in coil 1 is $i_1(t) = 5 \cos(1000t)$ A and the current in coil 2 is $i_2(t) = 2 \sin(1000t)$ A, and assuming positive coupling (currents enter dotted terminals), write the expressions for the voltages $v_1(t)$ and $v_2(t)$.

**Answer 1:**
(a) $M = k \sqrt{L_1 L_2} = 0.8 \sqrt{10 \times 10^{-3} \times 20 \times 10^{-3}} = 0.8 \sqrt{200 \times 10^{-6}} = 0.8 \times 10 \sqrt{2} \times 10^{-3} = 8\sqrt{2}$ mH $\approx 11.31$ mH.
(b) For positive coupling, $v_1(t) = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$ and $v_2(t) = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$.
$\frac{di_1}{dt} = -5000 \sin(1000t)$ A/s
$\frac{di_2}{dt} = 2000 \cos(1000t)$ A/s
$L_1 = 10 \times 10^{-3}$ H, $L_2 = 20 \times 10^{-3}$ H, $M = 11.31 \times 10^{-3}$ H.
$v_1(t) = (10 \times 10^{-3}) (-5000 \sin(1000t)) + (11.31 \times 10^{-3}) (2000 \cos(1000t))$
$v_1(t) = -50 \sin(1000t) + 22.62 \cos(1000t)$ V.
$v_2(t) = (20 \times 10^{-3}) (2000 \cos(1000t)) + (11.31 \times 10^{-3}) (-5000 \sin(1000t))$
$v_2(t) = 40 \cos(1000t) - 56.55 \sin(1000t)$ V.

**Question 2:**
For the coupled circuit shown in Figure 4.1 (Assume a circuit diagram with two coupled coils, $L_1, L_2, M$ with dots at the top terminals. Coil 1 has $R_1$ in series and is connected to $V_s$. Coil 2 is connected to a load $Z_L$.), derive the impedance matrix parameters.

**Figure 4.1:**
```
      R1 +----[ L1 ]---+
           |       .    |
           Vs         M |
           |       .    +----[ L2 ]---+
           +----[    ]---+        .    |
                                   RL
                                   |
                                   +---- Ground
```
*(Note: Assume coils are aiding, and the current $I_1$ enters the dotted terminal of $L_1$, and $I_2$ enters the dotted terminal of $L_2$.)*

**Answer 2:**
The voltage equations in the time domain are:
$v_1(t) = i_1(t) R_1 + L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
$v_2(t) = i_2(t) R_2 + L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$
*(Assuming $R_2$ is the internal resistance of coil 2 and is usually negligible or included in $Z_L$ if it's a complex impedance. For simplicity, let's assume $R_2=0$ and $Z_L$ is purely reactive for a moment, or consider $Z_L$ as a generic impedance.)*
Let's consider the case where coil 2 is connected to an impedance $Z_L$. So, $v_2(t) = Z_L i_2(t)$.

In phasor form:
$V_1 = I_1 R_1 + j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega M I_1 + j\omega L_2 I_2$
And $V_2 = Z_L I_2 \implies I_2 Z_L = j\omega M I_1 + j\omega L_2 I_2$
$I_2 (Z_L - j\omega L_2) = j\omega M I_1$
$I_2 = \frac{j\omega M}{Z_L - j\omega L_2} I_1$

Substitute $I_2$ into the equation for $V_1$:
$V_1 = I_1 (R_1 + j\omega L_1) + j\omega M \left(\frac{j\omega M}{Z_L - j\omega L_2} I_1\right)$
$V_1 = I_1 \left[ R_1 + j\omega L_1 + \frac{(j\omega M)^2}{Z_L - j\omega L_2} \right]$
$V_1 = I_1 \left[ R_1 + j\omega L_1 - \frac{\omega^2 M^2}{Z_L - j\omega L_2} \right]$

The input impedance $Z_{in} = V_1/I_1 = R_1 + j\omega L_1 - \frac{\omega^2 M^2}{Z_L - j\omega L_2}$.
This represents a generalized impedance seen by the source.

To find the impedance matrix parameters ($z_{11}, z_{12}, z_{21}, z_{22}$), we typically consider the network defined by the coupled inductors themselves, without an external load connected to the second port initially.
In that case:
$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega M I_1 + j\omega L_2 I_2$

From these equations, the impedance matrix is:
$\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

So, $z_{11} = j\omega L_1$, $z_{12} = j\omega M$, $z_{21} = j\omega M$, $z_{22} = j\omega L_2$.

**Question 3:**
Two coupled inductors with $L_1 = 50$ mH, $L_2 = 100$ mH, and $k = 0.6$ are connected in parallel, aiding. They are excited by a sinusoidal voltage source $v(t) = 10 \cos(400t)$ V. Calculate the total current drawn from the source.

**Answer 3:**
$L_1 = 50 \times 10^{-3}$ H, $L_2 = 100 \times 10^{-3}$ H, $k = 0.6$.
$M = k \sqrt{L_1 L_2} = 0.6 \sqrt{50 \times 10^{-3} \times 100 \times 10^{-3}} = 0.6 \sqrt{5000 \times 10^{-6}} = 0.6 \times 10\sqrt{50} \times 10^{-3} = 6\sqrt{50} \times 10^{-3} = 6 \times 5\sqrt{2} \times 10^{-3} = 30\sqrt{2} \times 10^{-3}$ H $\approx 42.43$ mH.
$\omega = 400$ rad/s.

For parallel aiding coils, the equivalent inductance is $L_{eq} = \frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}$.
$L_{eq} = \frac{(50 \times 10^{-3})(100 \times 10^{-3}) - (42.43 \times 10^{-3})^2}{50 \times 10^{-3} + 100 \times 10^{-3} + 2(42.43 \times 10^{-3})}$
$L_{eq} = \frac{5000 \times 10^{-6} - 1800 \times 10^{-6}}{150 \times 10^{-3} + 84.86 \times 10^{-3}} = \frac{3200 \times 10^{-6}}{234.86 \times 10^{-3}} \approx 13.63 \times 10^{-3}$ H = 13.63 mH.

The equivalent impedance is $Z_{eq} = j\omega L_{eq} = j(400)(13.63 \times 10^{-3}) = j5.452 \ \Omega$.
The total current is $I_{total} = \frac{V}{Z_{eq}} = \frac{10 \angle 0^\circ}{5.452 \angle 90^\circ} = 1.834 \angle -90^\circ$ A.
In time domain, $i(t) = 1.834 \cos(400t - 90^\circ)$ A, or $i(t) = -1.834 \sin(400t)$ A.

*(Alternatively, using the admittance approach)*
$Y_{eq} = \frac{-j}{\omega (1 - k^2)} \left( \frac{1}{L_1} + \frac{1}{L_2} + \frac{2k}{\sqrt{L_1 L_2}} \right)$
$Y_{eq} = \frac{-j}{400 (1 - 0.6^2)} \left( \frac{1}{50 \times 10^{-3}} + \frac{1}{100 \times 10^{-3}} + \frac{2 \times 0.6}{\sqrt{50 \times 10^{-3} \times 100 \times 10^{-3}}} \right)$
$Y_{eq} = \frac{-j}{400 (0.64)} \left( 20 + 10 + \frac{1.2}{\sqrt{5000 \times 10^{-6}}} \right) = \frac{-j}{256} \left( 30 + \frac{1.2}{0.0707} \right)$
$Y_{eq} = \frac{-j}{256} (30 + 16.97) = \frac{-j (46.97)}{256} \approx -j0.1835$ S.
$I_{total} = V \times Y_{eq} = 10 \times (-j0.1835) = -j1.835$ A.
This matches the previous result.

---
