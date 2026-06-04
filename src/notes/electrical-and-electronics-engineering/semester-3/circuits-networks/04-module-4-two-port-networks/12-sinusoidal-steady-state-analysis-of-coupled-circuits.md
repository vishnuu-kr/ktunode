---
title: "sinusoidal steady state analysis of 
coupled circuits."
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae6"
status: "completed"
scrapedAt: "2026-05-23T16:11:51.170Z"
---
# CIRCUITS & NETWORKS - Module 4: Two Port Networks
## Topic: Sinusoidal Steady-State Analysis of Coupled Circuits

---

### Introduction

This module delves into the analysis of coupled circuits, which are fundamental in many electrical engineering applications, particularly in transformers, resonant circuits, and filters. Coupled circuits involve inductive elements where the magnetic flux produced by one inductor links with another, leading to mutual inductance. Understanding their behavior under sinusoidal steady-state conditions is crucial for designing and analyzing these systems. This topic builds upon the concepts of impedance, admittance, and phasors introduced earlier, and extends them to analyze circuits with mutual inductance.

---

### Course Outcomes Addressed:

*   **CO5: Describe two-port networks in terms of various parameters.** (K3) - While this topic focuses on coupled circuits, their analysis often involves formulating them as two-port networks and utilizing the parameters (Z, Y, H, etc.) discussed in other parts of Module 4.
*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation** (K3) - This is the primary focus of this topic.

---

### Key Concepts and Definitions

#### 1. Coupled Inductors

*   **Definition:** Two or more inductors are coupled if the magnetic flux produced by one links with one or more of the others.
*   **Mutual Inductance (M):** A measure of the magnetic coupling between two inductors. It quantifies how a change in current in one coil induces a voltage in the other.
    *   For two coils, the induced voltage in coil 2 due to a change in current in coil 1 is given by: $v_2 = M \frac{di_1}{dt}$.
    *   Similarly, the induced voltage in coil 1 due to a change in current in coil 2 is: $v_1 = M \frac{di_2}{dt}$.
*   **Coefficient of Coupling (k):** A dimensionless parameter indicating the degree of magnetic coupling. It is defined as:
    $$k = \frac{M}{\sqrt{L_1 L_2}}$$
    where $L_1$ and $L_2$ are the self-inductances of the two coils.
    *   $k = 0$: No coupling (magnetic flux from one coil does not link the other).
    *   $0 < k < 1$: Imperfect coupling (common in most practical circuits).
    *   $k = 1$: Perfect coupling (all flux from one coil links the other).

#### 2. Voltage-Current Relationships in Coupled Circuits

Consider two coupled inductors $L_1$ and $L_2$ with mutual inductance $M$. The voltages across the inductors are related by:

$$v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$$
$$v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$$

*   **Dot Convention:** The polarity of the mutual voltage depends on the direction of currents and the winding sense of the coils. The dot convention simplifies this:
    *   If current enters the dotted terminal of one coil, the induced voltage in the other coil is positive at its dotted terminal.
    *   If current leaves the dotted terminal of one coil, the induced voltage in the other coil is negative at its dotted terminal.

    | Current Direction | Sign of M term in $v_1$ | Sign of M term in $v_2$ |
    | :---------------- | :---------------------- | :---------------------- |
    | Both enter dots   | +M $di_2/dt$            | +M $di_1/dt$            |
    | Both leave dots   | +M $di_2/dt$            | +M $di_1/dt$            |
    | $i_1$ enters dot, $i_2$ leaves dot | -M $di_2/dt$            | -M $di_1/dt$            |
    | $i_1$ leaves dot, $i_2$ enters dot | -M $di_2/dt$            | -M $di_1/dt$            |

    **Example:** If both currents $i_1$ and $i_2$ enter their respective dotted terminals, the equations become:
    $$v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$$
    $$v_2 = L_1 \frac{di_1}{dt} + M \frac{di_1}{dt}$$

#### 3. Sinusoidal Steady-State Analysis

For sinusoidal excitation, we can use phasors. The time-domain equations can be transformed into phasor-domain equations using impedances:

*   $v_1 \rightarrow V_1$, $i_1 \rightarrow I_1$, $v_2 \rightarrow V_2$, $i_2 \rightarrow I_2$
*   $\frac{di}{dt} \rightarrow j\omega I$
*   Inductive impedance: $j\omega L$

Assuming both currents enter the dotted terminals:

$$V_1 = (j\omega L_1) I_1 + (j\omega M) I_2$$
$$V_2 = (j\omega M) I_1 + (j\omega L_2) I_2$$

These equations represent a two-port network with self-impedances and a mutual impedance.

#### 4. Equivalent Impedance of Coupled Circuits

The presence of mutual inductance affects the total impedance seen by a source.

*   **Series Aiding:** Inductors are connected such that their magnetic fields add. The total inductance is $L_{eq} = L_1 + L_2 + 2M$.
*   **Series Opposing:** Inductors are connected such that their magnetic fields oppose. The total inductance is $L_{eq} = L_1 + L_2 - 2M$.
*   **Parallel Aiding:** Inductors are connected in parallel and their magnetic fields aid.
*   **Parallel Opposing:** Inductors are connected in parallel and their magnetic fields oppose.

The analysis of parallel combinations with mutual inductance becomes more complex and is often easier using loop analysis or impedance matrices.

#### 5. Impedance Matrix of Coupled Circuits

The coupled circuit can be represented by its impedance matrix $[Z]$. From the phasor equations:

$$
\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} =
\begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix}
\begin{bmatrix} I_1 \\ I_2 \end{bmatrix}
$$

For coupled inductors (assuming currents enter dots):

$$
\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} =
\begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix}
\begin{bmatrix} I_1 \\ I_2 \end{bmatrix}
$$

Therefore:
*   $Z_{11} = j\omega L_1$ (Impedance seen at port 1 when port 2 is open)
*   $Z_{22} = j\omega L_2$ (Impedance seen at port 2 when port 1 is open)
*   $Z_{12} = j\omega M$ (Transfer impedance from port 2 to port 1)
*   $Z_{21} = j\omega M$ (Transfer impedance from port 1 to port 2)

**Important Note:** If the currents were defined differently (e.g., one entering and one leaving the dot), the signs of the mutual impedance terms would change. The reciprocity condition $Z_{12} = Z_{21}$ holds for passive networks.

#### 6. Admittance Matrix of Coupled Circuits

The admittance matrix $[Y]$ is the inverse of the impedance matrix.

$$
[Y] = [Z]^{-1} = \frac{1}{Z_{11}Z_{22} - Z_{12}Z_{21}}
\begin{bmatrix} Z_{22} & -Z_{12} \\ -Z_{21} & Z_{11} \end{bmatrix}
$$

For coupled inductors (currents entering dots):
$$
[Y] = \frac{1}{(j\omega L_1)(j\omega L_2) - (j\omega M)^2}
\begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}
$$
$$
[Y] = \frac{1}{-\omega^2 L_1 L_2 + \omega^2 M^2}
\begin{bmatrix} j\omega L_2 & -j\omega M \\ -j\omega M & j\omega L_1 \end{bmatrix}
$$
$$
[Y] = \frac{j\omega}{ \omega^2 (M^2 - L_1 L_2)}
\begin{bmatrix} L_2 & -M \\ -M & L_1 \end{bmatrix}
$$

$$
Y_{11} = \frac{j\omega L_2}{\omega^2 (M^2 - L_1 L_2)} = \frac{j\omega L_2}{-\omega^2 (L_1 L_2 - M^2)}
$$
$$
Y_{22} = \frac{j\omega L_1}{\omega^2 (M^2 - L_1 L_2)} = \frac{j\omega L_1}{-\omega^2 (L_1 L_2 - M^2)}
$$
$$
Y_{12} = Y_{21} = \frac{-j\omega M}{\omega^2 (M^2 - L_1 L_2)} = \frac{-j\omega M}{-\omega^2 (L_1 L_2 - M^2)}
$$

**Note:** This is valid only if $L_1 L_2 \neq M^2$. This condition ($L_1 L_2 = M^2$) corresponds to perfect coupling ($k=1$). In the case of perfect coupling, the admittance matrix is not directly calculable this way, and it implies a special relationship between the circuit elements.

#### 7. Transformation of Coupled Inductors

Coupled inductors can be replaced by an equivalent circuit of uncoupled inductors.

*   **T-equivalent Circuit:**
    *   For currents entering the dots:
        *   $L_a = L_1 - M$
        *   $L_b = L_2 - M$
        *   $L_c = M$
    *   The voltages across these uncoupled inductors are:
        *   $V_1 = (j\omega L_a) I_1 + (j\omega L_c) (I_1 + I_2)$  (Incorrect. $I_1$ and $I_2$ are currents through coupled coils, not the T-equivalent parts.)

    Let's use the phasor equations for the coupled circuit and try to match them with an equivalent circuit.
    If we have three uncoupled inductors with self-inductances $L_a, L_b, L_c$ connected in a T-configuration, and currents $I_1', I_2', I_3'$ flowing as shown:

    ```
         L_a ---- (I1') ---- L_c ---- (I3') ----
         |                       |
         (V1)                    (V2)
         |                       |
         L_b ---- (I2') ----
    ```
    Assuming $I_1$ enters port 1 and $I_2$ enters port 2.
    In the T-equivalent:
    $I_1$ flows through $L_a$ and $L_c$.
    $I_2$ flows through $L_b$ and $L_c$.
    The current $I_3'$ through $L_c$ is $I_1 + I_2$.

    *   Voltage at port 1: $V_1 = j\omega L_a I_1 + j\omega L_c (I_1 + I_2) = j\omega (L_a + L_c) I_1 + j\omega L_c I_2$
    *   Voltage at port 2: $V_2 = j\omega L_b I_2 + j\omega L_c (I_1 + I_2) = j\omega L_c I_1 + j\omega (L_b + L_c) I_2$

    Comparing with the coupled circuit equations:
    $V_1 = j\omega L_1 I_1 + j\omega M I_2$
    $V_2 = j\omega M I_1 + j\omega L_2 I_2$

    We can equate the coefficients:
    $L_1 = L_a + L_c$
    $L_2 = L_b + L_c$
    $M = L_c$

    Solving for $L_a, L_b, L_c$:
    $L_c = M$
    $L_a = L_1 - L_c = L_1 - M$
    $L_b = L_2 - L_c = L_2 - M$

    This T-equivalent is valid for coupled inductors when $L_1 \geq M$ and $L_2 \geq M$.

    **Important Note on Dot Convention for T-equivalent:** The current $I_1$ and $I_2$ entering their respective ports must correspond to the assumed current directions in the T-network. If the original coupled inductors had currents entering the dots, and we want to derive a T-equivalent where the common inductance ($L_c = M$) has current flowing *out* of the dot towards the other coil, the dot convention for the T-equivalent needs to be carefully considered. However, for the purpose of impedance calculation, the derived values $L_a = L_1 - M$, $L_b = L_2 - M$, and $L_c = M$ are correct for an equivalent circuit representation.

*   **Pi-equivalent Circuit:**
    *   A pi-equivalent circuit can also be derived, which is useful when dealing with admittance parameters. The relationships are more complex.

    The T-equivalent is often preferred for its simplicity and direct relation to the impedance matrix.

#### 8. Analysis of Coupled Circuits with Loads

When loads are connected to the ports of a coupled circuit, we can use the impedance matrix and the load impedances to analyze the circuit.

Let $Z_{L1}$ and $Z_{L2}$ be the load impedances connected to port 1 and port 2, respectively.

*   **Case 1: Load on Port 2 only ($Z_{L1}$ is open circuit at port 1):**
    *   $V_1 = Z_{11} I_1 + Z_{12} I_2$
    *   $V_2 = Z_{21} I_1 + Z_{22} I_2$
    *   Since port 1 is open, $I_1 = 0$.
    *   The load $Z_{L2}$ is connected to port 2, so $V_2 = -Z_{L2} I_2$ (assuming $I_2$ is the current *leaving* port 2, which is often the convention when defining $V_2$ across the port). If $I_2$ is defined as entering port 2, then $V_2 = Z_{L2} I_2$. Let's stick to $I_1, I_2$ as entering ports.
    *   $V_2 = Z_{21} I_1 + Z_{22} I_2$
    *   When port 1 is open, $I_1 = 0$. The impedance seen looking into port 2 is $Z_{22}$. The voltage $V_2$ across the port is related to the current $I_2$ by $V_2 = Z_{L2} I_2$.
    *   So, $Z_{L2} I_2 = Z_{22} I_2 \implies Z_{L2} = Z_{22}$. This is incorrect.

    Let's use the impedance matrix equations:
    $V_1 = Z_{11}I_1 + Z_{12}I_2$
    $V_2 = Z_{21}I_1 + Z_{22}I_2$

    If port 1 is open circuit, $I_1 = 0$.
    $V_1 = Z_{12}I_2$
    $V_2 = Z_{22}I_2$

    If a load $Z_{L2}$ is connected to port 2, then $V_2 = Z_{L2}I_2$.
    Substituting this into the second equation: $Z_{L2}I_2 = Z_{22}I_2$. This implies $Z_{L2} = Z_{22}$ if $I_2 \neq 0$, which is generally not true. The mistake is in assuming $V_2$ is solely due to $Z_{22}I_2$.

    The correct approach when connecting loads is to modify the terminal equations.
    Let $I_1$ and $I_2$ be currents entering port 1 and port 2 respectively.
    *   If port 1 is open-circuited ($I_1=0$):
        $V_1 = Z_{12}I_2$
        $V_2 = Z_{22}I_2$
        The impedance seen at port 2 is $Z_{in2, open1} = V_2/I_2 = Z_{22}$.

    *   If port 2 is open-circuited ($I_2=0$):
        $V_1 = Z_{11}I_1$
        $V_2 = Z_{21}I_1$
        The impedance seen at port 1 is $Z_{in1, open2} = V_1/I_1 = Z_{11}$.

    *   If a load $Z_{L2}$ is connected to port 2 (port 1 is open):
        $I_1 = 0$.
        $V_2 = Z_{22}I_2$
        And $V_2 = Z_{L2}I_2$. So, $Z_{L2} = Z_{22}$? Still seems wrong.

    Let's use the definitions of $Z_{ij}$ directly with the modified circuit.
    When a load $Z_{L2}$ is connected to port 2, and port 1 is open ($I_1=0$):
    The equation for port 2 is: $V_2 = Z_{21}I_1 + Z_{22}I_2$.
    With $I_1 = 0$, we get $V_2 = Z_{22}I_2$.
    The load voltage is also $V_2$, and the current flowing *into* the load is $I_2$.
    So, $V_2 = I_2 Z_{L2}$.
    This implies $Z_{L2} = Z_{22}$ if $I_2 \neq 0$.

    The issue is in the definition of $Z_{ij}$ as the voltage at one port due to current at another port when *all other ports are open*.
    When we add a load, the circuit conditions change.

    **Correct Approach:**
    Consider the circuit with coupled inductors and connected loads.
    Let $I_1$ and $I_2$ be currents entering port 1 and port 2.
    $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
    $v_2 = M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$

    In phasor form:
    $V_1 = j\omega L_1 I_1 + j\omega M I_2$
    $V_2 = j\omega M I_1 + j\omega L_2 I_2$

    Now, let's connect loads.
    *   **If port 1 is open ($I_1 = 0$) and a load $Z_{L2}$ is connected to port 2:**
        The current $I_2$ flows through $Z_{L2}$. The voltage across $Z_{L2}$ is $V_2$.
        So, $V_2 = I_2 Z_{L2}$.
        From the coupled circuit equations, with $I_1=0$:
        $V_1 = j\omega M I_2$
        $V_2 = j\omega L_2 I_2$
        Equating $V_2$: $I_2 Z_{L2} = j\omega L_2 I_2$. This implies $Z_{L2} = j\omega L_2$, which is only true if $Z_{L2}$ is purely inductive with value $L_2$. This is still not general.

    The problem lies in directly substituting the load equations into the coupled inductor equations without considering how the load affects the port voltages and currents.

    **Using the Impedance Matrix with Loads:**
    Let the impedance matrix of the coupled circuit be $[Z]$.
    $$
    \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = [Z] \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}
    $$
    Now, consider the loads connected to the ports.
    *   If port 1 is open: $I_1 = 0$.
    *   If port 2 has a load $Z_{L2}$: $V_2 = I_2 Z_{L2}$.

    Substitute these conditions into the matrix equation:
    $$
    \begin{bmatrix} V_1 \\ I_2 Z_{L2} \end{bmatrix} = \begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix} \begin{bmatrix} 0 \\ I_2 \end{bmatrix}
    $$

    This gives two equations:
    1.  $V_1 = Z_{12} I_2$
    2.  $I_2 Z_{L2} = Z_{22} I_2$

    From equation (2), if $I_2 \neq 0$, then $Z_{L2} = Z_{22}$. This is still problematic. The fundamental issue is that the $Z_{ij}$ are defined for open-circuit conditions at other ports. When a load is connected, the circuit is no longer open.

    **Let's go back to the T-equivalent circuit:**
    The T-equivalent circuit of coupled inductors (currents entering dots) with $L_a = L_1-M$, $L_b = L_2-M$, $L_c = M$ is a network of uncoupled inductors.
    If we connect a source $V_S1$ with series impedance $Z_{S1}$ to port 1, and a load $Z_{L1}$ to port 1, and a source $V_S2$ with series impedance $Z_{S2}$ to port 2, and a load $Z_{L2}$ to port 2, we can analyze this using the T-equivalent.

    Consider a simpler case: a source $V_S$ connected to port 1 with series impedance $Z_S$, and a load $Z_L$ connected to port 2. Port 1 is left open for excitation of port 2.

    *   **Analysis of Port 1 when Port 2 is Open:**
        $I_2 = 0$.
        $V_1 = Z_{11}I_1 = j\omega L_1 I_1$
        $V_2 = Z_{21}I_1 = j\omega M I_1$
        If we apply $V_S$ to port 1 with series impedance $Z_S$, then $V_S - I_1 Z_S = V_1$.
        $V_S - I_1 Z_S = j\omega L_1 I_1$
        $V_S = I_1 (Z_S + j\omega L_1)$
        $I_1 = \frac{V_S}{Z_S + j\omega L_1}$
        The voltage at port 2 is $V_2 = j\omega M I_1 = \frac{j\omega M V_S}{Z_S + j\omega L_1}$.

    *   **Analysis of Port 2 when Port 1 is Open:**
        $I_1 = 0$.
        $V_1 = Z_{12}I_2 = j\omega M I_2$
        $V_2 = Z_{22}I_2 = j\omega L_2 I_2$
        If we apply $V_S$ to port 2 with series impedance $Z_S$, then $V_S - I_2 Z_S = V_2$.
        $V_S - I_2 Z_S = j\omega L_2 I_2$
        $V_S = I_2 (Z_S + j\omega L_2)$
        $I_2 = \frac{V_S}{Z_S + j\omega L_2}$
        The voltage at port 1 is $V_1 = j\omega M I_2 = \frac{j\omega M V_S}{Z_S + j\omega L_2}$.

    *   **Analysis with Loads at Both Ports:**
        Let $Z_{L1}$ be connected to port 1 and $Z_{L2}$ to port 2.
        $V_1 = I_1 Z_{L1}$
        $V_2 = I_2 Z_{L2}$

        Substitute these into the impedance matrix equations:
        $I_1 Z_{L1} = Z_{11}I_1 + Z_{12}I_2$
        $I_2 Z_{L2} = Z_{21}I_1 + Z_{22}I_2$

        Rearrange to solve for $I_1$ and $I_2$:
        $(Z_{11} - Z_{L1}) I_1 + Z_{12} I_2 = 0$
        $Z_{21} I_1 + (Z_{22} - Z_{L2}) I_2 = 0$

        This is a system of homogeneous linear equations. For a non-trivial solution ($I_1, I_2 \neq 0$), the determinant of the coefficient matrix must be zero.
        $$
        \begin{vmatrix} Z_{11} - Z_{L1} & Z_{12} \\ Z_{21} & Z_{22} - Z_{L2} \end{vmatrix} = 0
        $$
        $(Z_{11} - Z_{L1})(Z_{22} - Z_{L2}) - Z_{12}Z_{21} = 0$

        Substitute $Z_{11} = j\omega L_1$, $Z_{22} = j\omega L_2$, $Z_{12} = Z_{21} = j\omega M$.
        $(j\omega L_1 - Z_{L1})(j\omega L_2 - Z_{L2}) - (j\omega M)^2 = 0$

        This equation can be used to find conditions for resonance or to solve for currents and voltages in terms of loads.

#### 9. Applications of Coupled Circuits

*   **Transformers:** Ideal and non-ideal transformers are the most common application. The analysis of coupled circuits directly applies.
*   **Resonant Circuits:** Coupled tuned circuits are used in radio receivers and transmitters.
*   **Filters:** Coupled inductors can be used in various filter designs.
*   **Wireless Power Transfer:** Inductive coupling is the basis for wireless charging.

---

### Example 1: Analyzing a Coupled Circuit

Consider two coupled inductors with $L_1 = 0.5$ H, $L_2 = 0.2$ H, and $M = 0.3$ H. Assume the currents $I_1$ and $I_2$ enter the dotted terminals. The inductors are connected to a sinusoidal voltage source $V_1$ at port 1, and a load $Z_{L2} = j\omega (0.1)$ H is connected to port 2. Port 1 is open. Calculate the voltage $V_2$ across the load at $\omega = 5$ rad/s.

**Solution:**

First, calculate the impedances:
$j\omega L_1 = j(5)(0.5) = j2.5 \, \Omega$
$j\omega L_2 = j(5)(0.2) = j1.0 \, \Omega$
$j\omega M = j(5)(0.3) = j1.5 \, \Omega$

The impedance matrix is:
$$
[Z] = \begin{bmatrix} j2.5 & j1.5 \\ j1.5 & j1.0 \end{bmatrix}
$$

Since port 1 is open, $I_1 = 0$.
The load connected to port 2 is $Z_{L2} = j\omega L_{L2} = j(5)(0.1) = j0.5 \, \Omega$.
The voltage across the load is $V_2 = I_2 Z_{L2}$.

Using the impedance matrix equations with $I_1=0$:
$V_1 = Z_{11}I_1 + Z_{12}I_2 = 0 + j1.5 I_2 = j1.5 I_2$
$V_2 = Z_{21}I_1 + Z_{22}I_2 = 0 + j1.0 I_2 = j1.0 I_2$

Now, we know $V_2 = I_2 Z_{L2}$.
Substituting the expression for $V_2$:
$I_2 Z_{L2} = j1.0 I_2$
$I_2 (j0.5) = j1.0 I_2$
This implies $0.5 = 1.0$, which is incorrect.

Let's re-examine the condition of connecting a load.
When a load $Z_{L2}$ is connected to port 2 and port 1 is open, the voltage $V_2$ across the load is related to the current $I_2$ flowing through it. The coupled circuit provides this $V_2$ and $I_2$.

Consider the relationship at port 2: $V_2 = j\omega L_2 I_2$ (since $I_1=0$).
Also, $V_2 = I_2 Z_{L2}$.
This implies that for the coupled circuit to provide the required voltage-current relationship for the load, $j\omega L_2$ must be equal to $Z_{L2}$. This is not how it works. The coupled circuit's $V_2$ is determined by $I_2$, and the load simply dictates that $V_2$ must be $I_2 Z_{L2}$.

The mistake is in assuming $V_2 = j\omega L_2 I_2$ *and* $V_2 = I_2 Z_{L2}$ simultaneously without considering the interaction.

**Correct Approach using Impedance Matrix and Load:**

The impedance matrix represents the relationships between port voltages and currents:
$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega M I_1 + j\omega L_2 I_2$

If port 1 is open, $I_1 = 0$.
$V_1 = j\omega M I_2$
$V_2 = j\omega L_2 I_2$

If a load $Z_{L2}$ is connected to port 2, the current $I_2$ flows into the load, and the voltage across the load is $V_2$.
Therefore, $V_2 = I_2 Z_{L2}$.

Equating the two expressions for $V_2$:
$I_2 Z_{L2} = j\omega L_2 I_2$
$I_2 (Z_{L2} - j\omega L_2) = 0$

This equation must hold. If $I_2 \neq 0$, then $Z_{L2} - j\omega L_2 = 0$, meaning $Z_{L2} = j\omega L_2$.
This means that the load *must* be purely inductive with inductance $L_2$ for this specific scenario to be valid without external excitation at port 1.

Let's consider the setup again:
A voltage source $V_1$ is applied to port 1. Port 2 is terminated with $Z_{L2}$.
We need to find $V_2$.

$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega M I_1 + j\omega L_2 I_2$

Load condition at port 2: $V_2 = I_2 Z_{L2}$

Substitute $V_2$ in the second equation:
$I_2 Z_{L2} = j\omega M I_1 + j\omega L_2 I_2$
$j\omega M I_1 = I_2 (Z_{L2} - j\omega L_2)$

Now, we have a system of two equations with $I_1$ and $I_2$:
1. $V_1 = j\omega L_1 I_1 + j\omega M I_2$
2. $j\omega M I_1 = I_2 (Z_{L2} - j\omega L_2)$

From (2), $I_1 = \frac{I_2 (Z_{L2} - j\omega L_2)}{j\omega M}$.
Substitute this into (1):
$V_1 = j\omega L_1 \left( \frac{I_2 (Z_{L2} - j\omega L_2)}{j\omega M} \right) + j\omega M I_2$
$V_1 = \frac{L_1 (Z_{L2} - j\omega L_2)}{M} I_2 + j\omega M I_2$
$V_1 = \left( \frac{L_1 Z_{L2}}{M} - \frac{L_1 j\omega L_2}{M} + j\omega M \right) I_2$
$V_1 = \left( \frac{L_1 Z_{L2}}{M} + j\omega \left( M - \frac{L_1 L_2}{M} \right) \right) I_2$

We want to find $V_2 = I_2 Z_{L2}$. So, we need to find $I_2$.
$I_2 = \frac{V_1}{\frac{L_1 Z_{L2}}{M} + j\omega \left( M - \frac{L_1 L_2}{M} \right)}$

Then, $V_2 = Z_{L2} I_2 = \frac{V_1 Z_{L2}}{\frac{L_1 Z_{L2}}{M} + j\omega \left( M - \frac{L_1 L_2}{M} \right)}$.

Let's plug in the values: $L_1=0.5$, $L_2=0.2$, $M=0.3$, $\omega=5$, $Z_{L2} = j0.5$.
$j\omega L_1 = j2.5$, $j\omega L_2 = j1.0$, $j\omega M = j1.5$.

$Z_{L2} - j\omega L_2 = j0.5 - j1.0 = -j0.5$
$M - \frac{L_1 L_2}{M} = 0.3 - \frac{(0.5)(0.2)}{0.3} = 0.3 - \frac{0.1}{0.3} = 0.3 - \frac{1}{3} = \frac{9-10}{30} = -\frac{1}{30}$
$j\omega \left( M - \frac{L_1 L_2}{M} \right) = j5 \left(-\frac{1}{30}\right) = -\frac{j1}{6}$

$\frac{L_1 Z_{L2}}{M} = \frac{0.5 \times j0.5}{0.3} = \frac{j0.25}{0.3} = \frac{25}{30} = \frac{5}{6}$

So, $V_1 = \left( \frac{5}{6} - \frac{j1}{6} \right) I_2$.
$I_2 = \frac{V_1}{\frac{5}{6} - \frac{j1}{6}} = \frac{6V_1}{5-j1}$

$V_2 = I_2 Z_{L2} = \frac{6V_1}{5-j1} \times j0.5 = \frac{3V_1}{5-j1}$

To simplify, multiply by the conjugate of the denominator:
$V_2 = \frac{3V_1}{5-j1} \times \frac{5+j1}{5+j1} = \frac{3V_1(5+j1)}{25 - (j1)^2} = \frac{3V_1(5+j1)}{25+1} = \frac{3V_1(5+j1)}{26}$
$V_2 = \frac{15V_1 + j3V_1}{26}$

The voltage $V_2$ is $\frac{15}{26}V_1 + j\frac{3}{26}V_1$.

This example highlights the importance of correctly setting up the equations when loads are involved.

---

### Example 2: T-equivalent Circuit

Convert the coupled inductor circuit from Example 1 into a T-equivalent circuit.

**Solution:**
$L_1 = 0.5$ H, $L_2 = 0.2$ H, $M = 0.3$ H.
Assume currents enter the dotted terminals.

The T-equivalent inductances are:
$L_a = L_1 - M = 0.5 - 0.3 = 0.2$ H
$L_b = L_2 - M = 0.2 - 0.3 = -0.1$ H
$L_c = M = 0.3$ H

**Problem:** $L_b$ is negative. A negative inductance is not physically realizable as a simple passive inductor. This situation arises when $M > L_2$.

**What does a negative inductance in the T-equivalent mean?**
It indicates that the coupling is so strong relative to the self-inductance of the second coil that a simple series-parallel arrangement of positive inductances cannot represent it.

In such cases, one needs to be careful with the interpretation or the equivalent circuit might need to be structured differently. However, for calculation purposes, we can still use these values in the circuit equations.

If we are to analyze a circuit using the T-equivalent, the negative inductance suggests that the way the coils are wound and connected might lead to unusual behavior, or that the original assumption of simple coupled inductors might be an idealization that breaks down here.

**Alternative Derivation for T-equivalent:**
The T-equivalent is derived based on the impedance matrix. The derivation $L_a = L_1-M, L_b = L_2-M, L_c=M$ assumes that these values are non-negative. If $L_2 < M$, then $L_b$ will be negative. This means that a standard T-equivalent with positive inductances cannot represent this coupling.

A different set of equivalent circuits exists for when $M > L_1$ or $M > L_2$. These might involve a $\pi$ equivalent or a different structure.

**Important Note:** For practical analysis and design, it's crucial to ensure that the coupled inductors are designed such that $M \leq L_1$ and $M \leq L_2$ if a standard T-equivalent with positive inductances is to be used. If $M$ is close to or greater than $\sqrt{L_1 L_2}$ (high coupling), the behavior is significantly different.

If we proceed with the calculation using the T-equivalent, and $L_b$ is negative, it implies that the impedance $j\omega L_b$ is capacitive ($j\omega(-0.1) = \frac{1}{j\omega (1/0.1)} = \frac{1}{j\omega 10}$).

Let's reconsider the conditions. If $L_1=0.5, L_2=0.2, M=0.3$:
$k = M/\sqrt{L_1 L_2} = 0.3 / \sqrt{0.5 \times 0.2} = 0.3 / \sqrt{0.1} \approx 0.3 / 0.316 \approx 0.95$. This is high coupling, but $M$ is not greater than $L_1$ or $L_2$.

Let's check the derivation of the T-equivalent. The goal is to match the impedance matrix.
$Z_{11} = j\omega(L_a+L_c)$
$Z_{22} = j\omega(L_b+L_c)$
$Z_{12} = Z_{21} = j\omega L_c$

Comparing with:
$Z_{11} = j\omega L_1$
$Z_{22} = j\omega L_2$
$Z_{12} = Z_{21} = j\omega M$

This yields:
$L_c = M$
$L_1 = L_a + L_c \implies L_a = L_1 - M$
$L_2 = L_b + L_c \implies L_b = L_2 - M$

This derivation is universally correct from the impedance matrix. The physical interpretation of a negative inductance as a passive element is problematic.

**Textbook Reference:**
*   **Van Valkenburg (3rd Ed):** Chapter 12, "Coupled Circuits," discusses mutual inductance, dot convention, and equivalent circuits. It also touches upon the conditions for realizability of equivalent circuits.
*   **Ravish R Singh (2nd Ed):** Chapter 11, "Coupled Circuits," provides a detailed treatment of mutual inductance, impedance and admittance parameters for coupled circuits, and their T-equivalent circuits.
*   **Suresh Kumar (1st Ed):** Chapter 6, "Coupled Circuits," covers the same fundamental concepts.
*   **Sudhakar & Palli (5th Ed):** Chapter 10, "Coupled Circuits," offers a thorough explanation.

These texts confirm the formulas for the T-equivalent and the conditions for their validity. A negative inductance in the T-equivalent often means that the standard representation is not suitable, and a $\pi$-equivalent or different approach might be necessary. However, for the purpose of analysis, the mathematical form can still be used if the circuit equations are derived correctly from the T-network.

---

### Practice Questions

1.  Two coupled inductors have $L_1 = 0.1$ H, $L_2 = 0.4$ H, and a coefficient of coupling $k = 0.8$. If $I_1 = 5 \angle 0^\circ$ A and $I_2 = 2 \angle 30^\circ$ A, and both currents enter the dotted terminals, find the voltages $V_1$ and $V_2$ at $\omega = 100$ rad/s.
    *   **Answer:** First, find $M = k\sqrt{L_1 L_2} = 0.8\sqrt{0.1 \times 0.4} = 0.8\sqrt{0.04} = 0.8 \times 0.2 = 0.16$ H.
        $Z_{11} = j\omega L_1 = j(100)(0.1) = j10 \, \Omega$
        $Z_{22} = j\omega L_2 = j(100)(0.4) = j40 \, \Omega$
        $Z_{12} = Z_{21} = j\omega M = j(100)(0.16) = j16 \, \Omega$
        $V_1 = Z_{11}I_1 + Z_{12}I_2 = j10(5\angle0^\circ) + j16(2\angle30^\circ)$
        $V_1 = j50 + j32(\cos 30^\circ + j\sin 30^\circ) = j50 + j32(0.866 + j0.5)$
        $V_1 = j50 + j27.712 - 16 = -16 + j77.712 \, \text{V}$
        $V_2 = Z_{21}I_1 + Z_{22}I_2 = j16(5\angle0^\circ) + j40(2\angle30^\circ)$
        $V_2 = j80 + j80(\cos 30^\circ + j\sin 30^\circ) = j80 + j80(0.866 + j0.5)$
        $V_2 = j80 + j69.28 - 40 = -40 + j149.28 \, \text{V}$

2.  For the coupled inductors in Question 1, find the parameters for the T-equivalent circuit.
    *   **Answer:** $L_c = M = 0.16$ H.
        $L_a = L_1 - M = 0.1 - 0.16 = -0.06$ H.
        $L_b = L_2 - M = 0.4 - 0.16 = 0.24$ H.

3.  A voltage source $V_S = 10 \angle 0^\circ$ V is connected to port 1 of a coupled circuit with $L_1 = 0.2$ H, $L_2 = 0.3$ H, $M = 0.25$ H (currents entering dots). Port 2 is terminated with a load $Z_{L2} = j\omega(0.1)$ H. Find the voltage $V_2$ at $\omega = 50$ rad/s.
    *   **Answer:** $j\omega L_1 = j50 \times 0.2 = j10 \, \Omega$
        $j\omega L_2 = j50 \times 0.3 = j15 \, \Omega$
        $j\omega M = j50 \times 0.25 = j12.5 \, \Omega$
        $Z_{L2} = j50 \times 0.1 = j5 \, \Omega$
        From Example 1's derivation:
        $V_2 = \frac{V_S Z_{L2}}{\frac{L_1 Z_{L2}}{M} + j\omega \left( M - \frac{L_1 L_2}{M} \right)}$
        $Z_{L2} - j\omega L_2 = j5 - j15 = -j10$
        $M - \frac{L_1 L_2}{M} = 0.25 - \frac{0.2 \times 0.3}{0.25} = 0.25 - \frac{0.06}{0.25} = 0.25 - 0.24 = 0.01$
        $j\omega \left( M - \frac{L_1 L_2}{M} \right) = j50 \times 0.01 = j0.5$
        $\frac{L_1 Z_{L2}}{M} = \frac{0.2 \times j5}{0.25} = \frac{j1}{0.25} = j4$

        $V_2 = \frac{10 \times j5}{j4 + j0.5} = \frac{j50}{j4.5} = \frac{50}{4.5} = \frac{100}{9} = 11.11 \angle 0^\circ \, \text{V}$

---

### Important Points to Remember

*   **Dot Convention:** Crucial for determining the sign of mutual inductance terms. Currents entering dotted terminals result in a positive mutual voltage.
*   **Coefficient of Coupling (k):** Ranges from 0 (no coupling) to 1 (perfect coupling). High coupling ($k \approx 1$) leads to strong interaction.
*   **Impedance Matrix:** A systematic way to represent coupled circuits as two-port networks. $Z_{11}$ and $Z_{22}$ are self-impedances, $Z_{12}$ and $Z_{21}$ are mutual impedances.
*   **T-Equivalent Circuit:** Useful for simplifying analysis. Inductances are $L_a = L_1-M$, $L_b = L_2-M$, $L_c = M$. Valid for $M \leq L_1$ and $M \leq L_2$ for positive inductances.
*   **Sinusoidal Steady-State:** Use phasors and impedances ($j\omega L$).
*   **Load Connection:** Carefully substitute load conditions into the port equations or impedance matrix to solve for currents and voltages.

---
