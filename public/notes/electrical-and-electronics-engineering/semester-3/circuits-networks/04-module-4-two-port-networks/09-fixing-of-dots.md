---
title: "fixing of dots"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae3"
status: "completed"
scrapedAt: "2026-05-23T16:11:48.989Z"
---
# CIRCUITS & NETWORKS - Module 4: Two Port Networks

## Topic: Fixing of Dots (Polarity of Mutual Inductance)

### 1. Introduction to Two-Port Networks

Two-port networks are fundamental building blocks in circuit analysis, especially for analyzing complex circuits where signals are transmitted from one part to another. They are characterized by two distinct pairs of terminals, referred to as ports. Each port has a specific current entering and a specific voltage across it.

*   **Definition:** A two-port network is a circuit with two pairs of terminals, where each pair is designated as a port. At each port, current is assumed to enter and voltage is measured with the positive terminal at the top.
*   **Standard Convention:**
    *   **Port 1:** Terminals 1 and 1'
    *   **Port 2:** Terminals 2 and 2'
    *   **Currents:** $I_1$ enters port 1, $I_2$ enters port 2.
    *   **Voltages:** $V_1$ is the voltage across port 1 ($V_{11'}$), $V_2$ is the voltage across port 2 ($V_{22'}$).

### 2. Why Two-Port Networks?

Two-port network analysis simplifies the study of complex circuits by:

*   **Abstraction:** Allowing us to treat complex sub-circuits as single "black boxes" with defined input and output relationships.
*   **Cascading:** Facilitating the analysis of circuits formed by connecting multiple two-port networks in series or parallel.
*   **Characterization:** Providing a systematic way to describe the behavior of a network using various parameter sets (e.g., Z, Y, ABCD, h).

### 3. Introduction to Coupled Circuits and Mutual Inductance

Many practical circuits involve coils that are magnetically linked, leading to mutual inductance. This coupling significantly affects the circuit behavior.

*   **Inductance:** The property of an electrical conductor by which a change in current flowing through it induces an electromotive force (or voltage) in both itself and in any nearby conductors.
*   **Self-Inductance ($L$):** The inductance of a coil with respect to itself.
*   **Mutual Inductance ($M$):** The inductance between two coils, describing the magnetic flux linkage between them. It quantifies how a change in current in one coil induces a voltage in the other.

### 4. The Dot Convention in Coupled Circuits

The "dot convention" is a crucial tool for determining the polarity of the induced voltage due to mutual inductance. When two coils are magnetically coupled, the direction of the induced voltage in one coil depends on the direction of current change in the other and the physical arrangement of the coils.

#### 4.1 The Problem Without Dots

Without a convention, we wouldn't know whether the induced voltage in coil 2 due to a change in current in coil 1 adds to or subtracts from the voltage in coil 2. This ambiguity can lead to incorrect circuit analysis.

#### 4.2 The Dot Convention: Core Principle

The dot convention establishes a rule for determining the polarity of the induced voltage:

*   **Rule:** If current enters the **dot** terminal of one coil, it produces a **positive** voltage at the **dot** terminal of the other coil (or, equivalently, a negative voltage at the non-dot terminal).

#### 4.3 Visualizing the Dot Convention

Imagine two coils, Coil 1 and Coil 2, wound on a common magnetic core.

*   **Coil 1:** Terminals $1$ and $1'$, with current $I_1$ entering terminal $1$.
*   **Coil 2:** Terminals $2$ and $2'$, with current $I_2$ entering terminal $2$.

**Scenario 1: Dots on the Same Side**

If both coils are wound in the **same direction** relative to the magnetic core (e.g., both wound clockwise when viewed from a certain direction), then the dots are placed on the same side of the coils (e.g., terminal 1 and terminal 2 are dotted).

*   If $I_1$ enters the dotted terminal (1), it creates a magnetic flux that induces a voltage in Coil 2. According to the convention, this induced voltage will be positive at the dotted terminal (2) of Coil 2.
*   If $I_2$ enters the dotted terminal (2), it creates a magnetic flux that induces a voltage in Coil 1. This induced voltage will be positive at the dotted terminal (1) of Coil 1.

**Scenario 2: Dots on Opposite Sides**

If the coils are wound in **opposite directions** relative to the magnetic core, then the dots are placed on opposite sides of the coils (e.g., terminal 1 is dotted, but terminal 2' is dotted, effectively making terminal 2 non-dotted in relation to the rule).

*   If $I_1$ enters the dotted terminal (1), it creates a magnetic flux that induces a voltage in Coil 2. According to the convention, this induced voltage will be negative at the dotted terminal (2') of Coil 2 (or positive at the non-dotted terminal 2).

#### 4.4 Mathematical Representation

Let $v_{1s}$ be the voltage induced in Coil 1 due to current $I_2$ in Coil 2, and $v_{2s}$ be the voltage induced in Coil 2 due to current $I_1$ in Coil 1.

*   **When dots are on the same side:**
    *   $v_{2s} = M \frac{dI_1}{dt}$ (positive if $I_1$ enters the dotted terminal of Coil 1)
    *   $v_{1s} = M \frac{dI_2}{dt}$ (positive if $I_2$ enters the dotted terminal of Coil 2)

*   **When dots are on opposite sides:**
    *   $v_{2s} = -M \frac{dI_1}{dt}$ (negative if $I_1$ enters the dotted terminal of Coil 1)
    *   $v_{1s} = -M \frac{dI_2}{dt}$ (negative if $I_2$ enters the dotted terminal of Coil 2)

**General Equation:**

The induced voltages can be written more generally as:

$v_{1s} = M \frac{dI_2}{dt}$
$v_{2s} = M \frac{dI_1}{dt}$

Where the sign (positive or negative) depends on the dot placement and the direction of current flow.

**A more robust way to represent this is by defining a coupling coefficient, k:**

$k = \frac{M}{\sqrt{L_1 L_2}}$

The voltages in the circuit equations can be expressed as:

$V_1 = j\omega L_1 I_1 \pm j\omega M I_2$
$V_2 = j\omega L_2 I_2 \pm j\omega M I_1$

The $\pm$ sign depends on the dot convention.

*   If currents enter the **dotted terminals**, use **+M**.
*   If current enters the dotted terminal of one coil and leaves the dotted terminal of the other, use **-M**.

**Crucial Note:** The convention applies to the **direction of current flow relative to the dots**, not just the physical placement of the dots.

#### 4.5 Determining Polarity from Physical Winding

In practice, the dots are often marked on the terminals. If they are not marked, you can determine the polarity by:

1.  **Winding Direction:** Observe how the coils are wound on the core.
2.  **Applying a DC Voltage:** Connect a low DC voltage across one coil (say, Coil 1) and observe the polarity of the induced voltage in the other coil (Coil 2) using a sensitive voltmeter. The terminal where the voltmeter shows a positive deflection when the DC voltage is applied to the dotted terminal of Coil 1 is the dotted terminal of Coil 2.

#### 4.6 Practical Examples and Application

**Example 1: Simple Transformer**

Consider a transformer with primary coil L1 and secondary coil L2.

*   Primary: Terminals 1 (dot) and 1'.
*   Secondary: Terminals 2 (dot) and 2'.

If current $I_1$ enters terminal 1 (dot) and current $I_2$ enters terminal 2 (dot), then the voltages are:

$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega L_1 I_2 + j\omega M I_1$

This indicates that the induced voltage in the secondary is in phase with the primary voltage (positive at the dot).

**Example 2: Mutual Inductance in a Two-Port Network**

Consider a two-port network with mutual inductance between two coils within the network.

```
      L1----1
      |     |
      M-----o (dot)
      |     |
      L2----2
      |     |
      1'----2'
```

Let's assume the dots are placed such that if $I_1$ enters terminal 1 (dotted) and $I_2$ enters terminal 2 (dotted), the mutual flux aids.

The voltage equations for this coupled pair can be written as:

$V_{1,mutual} = j\omega M I_2$ (voltage induced in coil 1 due to $I_2$)
$V_{2,mutual} = j\omega M I_1$ (voltage induced in coil 2 due to $I_1$)

If the currents are defined as entering the ports:

*   $V_1 = (\text{voltage due to self-inductance of Coil 1}) + (\text{voltage induced in Coil 1 by Coil 2})$
*   $V_1 = j\omega L_1 I_1 + j\omega M I_2$

*   $V_2 = (\text{voltage due to self-inductance of Coil 2}) + (\text{voltage induced in Coil 2 by Coil 1})$
*   $V_2 = j\omega L_2 I_2 + j\omega M I_1$

**Important Point:** The definition of $I_1$ and $I_2$ as entering the ports is critical. If $I_2$ was defined as leaving the dotted terminal of Coil 2, the sign of the mutual inductance term would change.

### 5. Connection to Course Outcomes

*   **CO5: Describe two-port networks in terms of various parameters.** The understanding of coupled circuits and the dot convention is essential for deriving the Z, Y, and hybrid parameters of two-port networks containing mutual inductance. The polarity of the induced voltages directly impacts the matrix equations.
*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation.** The dot convention is paramount for correctly representing the coupling in the phasor domain for AC analysis. Without it, the phase relationships between voltages and currents due to mutual inductance would be incorrect.

### 6. Fixing of Dots and Parameter Calculations

The dot convention dictates the signs in the equations used to calculate two-port network parameters.

#### 6.1 Z-Parameters (Impedance Parameters)

For a two-port network with mutual inductance, the Z-parameter equations are:

$V_1 = Z_{11} I_1 + Z_{12} I_2$
$V_2 = Z_{21} I_1 + Z_{22} I_2$

*   $Z_{11}$: $V_1 / I_1$ when $I_2 = 0$. This includes the self-inductance of Coil 1.
*   $Z_{22}$: $V_2 / I_2$ when $I_1 = 0$. This includes the self-inductance of Coil 2.
*   $Z_{12}$: $V_1 / I_2$ when $I_1 = 0$. This represents the induced voltage in Coil 1 due to $I_2$.
*   $Z_{21}$: $V_2 / I_1$ when $I_2 = 0$. This represents the induced voltage in Coil 2 due to $I_1$.

**Impact of Dot Convention on Z-parameters:**

If we have two coupled coils with inductances $L_1$, $L_2$, and mutual inductance $M$, and the dots are on the same side (current entering dots produces aiding fluxes):

*   $Z_{11} = j\omega L_1$
*   $Z_{22} = j\omega L_2$
*   $Z_{12} = j\omega M$ (positive because current entering dot of 2 induces positive voltage at dot of 1)
*   $Z_{21} = j\omega M$ (positive because current entering dot of 1 induces positive voltage at dot of 2)

If dots are on opposite sides (current entering dot of one and leaving dot of other produces aiding fluxes, or current entering dot of one and entering dot of other produces opposing fluxes):

*   $Z_{11} = j\omega L_1$
*   $Z_{22} = j\omega L_2$
*   $Z_{12} = -j\omega M$ (negative if current entering dot of 2 induces negative voltage at dot of 1)
*   $Z_{21} = -j\omega M$ (negative if current entering dot of 1 induces negative voltage at dot of 2)

**Crucial Check:** For passive networks, $Z_{12}$ must equal $Z_{21}$. The dot convention ensures this if applied consistently.

#### 6.2 Y-Parameters (Admittance Parameters)

The Y-parameter equations are:

$I_1 = Y_{11} V_1 + Y_{12} V_2$
$I_2 = Y_{21} V_1 + Y_{22} V_2$

When calculating Y-parameters from Z-parameters for coupled circuits, the signs of the mutual terms will propagate. The calculation of Y-parameters directly from the circuit diagram with coupled coils will also depend on the dot convention for voltage polarities.

#### 6.3 ABCD Parameters (Transmission Parameters)

The ABCD parameter equations are:

$V_1 = A V_2 - B I_2$
$I_1 = C V_2 - D I_2$

The signs within the equations for calculating A, B, C, and D will be affected by the mutual inductance terms, which are determined by the dot convention.

### 7. Important Points to Remember

*   **Consistency is Key:** Always apply the dot convention consistently for all coupled elements in a network.
*   **Current Direction Matters:** The sign (+ or -) associated with mutual inductance depends on whether the currents are entering or leaving the dotted terminals.
*   **Passive Networks:** For passive networks, $Z_{12} = Z_{21}$, $Y_{12} = Y_{21}$, and the ABCD parameters will satisfy $AD - BC = 1$. The dot convention ensures these reciprocity conditions are met.
*   **Physical Winding vs. Dots:** While physical winding dictates the relative polarity, the dots are the explicit convention used in circuit analysis.
*   **Phasor Domain:** The dot convention is applied when converting the differential equations to phasor equations for AC analysis.
*   **Transformers:** Transformers are a classic example where the dot convention is essential. The phase relationship between primary and secondary voltages and currents is determined by the dots.

### 8. Practice Questions and Exercises

**Question 1:**
Two coupled coils have self-inductances $L_1 = 0.1$ H and $L_2 = 0.4$ H, with a mutual inductance $M = 0.15$ H. The coils are wound in the same direction, and the dots are placed on terminal 1 of coil 1 and terminal 2 of coil 2. If the current $i_1(t) = 2 \cos(100t)$ A enters terminal 1 and the current $i_2(t) = 3 \sin(100t)$ A enters terminal 2, find the total voltage across coil 1 and the total voltage across coil 2.

**Answer 1:**
$L_1 = 0.1$ H, $L_2 = 0.4$ H, $M = 0.15$ H. Dots on same side (terminal 1 and terminal 2).
$i_1(t) = 2 \cos(100t)$ A
$i_2(t) = 3 \sin(100t)$ A

For AC analysis, we use phasors:
$I_1 = 2 \angle 0^\circ$ A (assuming reference phase for $i_1$)
$I_2 = 3 \angle -90^\circ$ A (or $3 \angle 270^\circ$ A for $3 \sin(100t)$)
$\omega = 100$ rad/s

Since the dots are on the same side and currents enter the dotted terminals:
$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega L_2 I_2 + j\omega M I_1$

$j\omega L_1 = j(100)(0.1) = j10$
$j\omega L_2 = j(100)(0.4) = j40$
$j\omega M = j(100)(0.15) = j15$

$V_1 = j10 (2 \angle 0^\circ) + j15 (3 \angle -90^\circ)$
$V_1 = j20 + j15 (-j3)$
$V_1 = j20 - 45$
$V_1 = -45 + j20$ V

$V_2 = j40 (3 \angle -90^\circ) + j15 (2 \angle 0^\circ)$
$V_2 = j40 (-j3) + j30$
$V_2 = 120 + j30$ V

In time domain:
$v_1(t) = -45 \cos(100t) - 20 \sin(100t)$ V
$v_2(t) = 120 \cos(100t) - 30 \sin(100t)$ V

**Question 2:**
In the following circuit, determine the Z-parameters of the two-port network. Assume the dots are placed as shown.
[Diagram: Two coils L1 and L2 are coupled with mutual inductance M. Terminal 1 is dotted, Terminal 2 is not dotted. Terminal 1' is not dotted, Terminal 2' is dotted.]

**Answer 2:**
Let Coil 1 have terminals 1 and 1'. Let Coil 2 have terminals 2 and 2'.
Given: Terminal 1 is dotted, Terminal 2 is not dotted. This means the dots are on opposite sides.
Current $I_1$ enters port 1 (terminal 1). Current $I_2$ enters port 2 (terminal 2).

Let's analyze the voltage equations:
$V_1 = j\omega L_1 I_1 + \text{induced voltage in coil 1}$
$V_2 = j\omega L_2 I_2 + \text{induced voltage in coil 2}$

Induced voltage in Coil 1 due to $I_2$ entering terminal 2 (non-dotted):
Since $I_2$ enters the non-dotted terminal of Coil 2, and terminal 1 of Coil 1 is dotted, the flux produced by $I_2$ will induce a voltage at terminal 1 of Coil 1 which is *opposite* to the polarity it would have if $I_2$ entered the dotted terminal of Coil 2.
So, induced voltage in Coil 1 is $-j\omega M I_2$.

Induced voltage in Coil 2 due to $I_1$ entering terminal 1 (dotted):
Since $I_1$ enters the dotted terminal of Coil 1, and terminal 2 of Coil 2 is non-dotted, the flux produced by $I_1$ will induce a voltage at terminal 2 of Coil 2 which is *opposite* to the polarity it would have if $I_1$ entered the non-dotted terminal of Coil 1 and induced voltage at the dotted terminal of Coil 2.
So, induced voltage in Coil 2 is $-j\omega M I_1$.

Therefore, the voltage equations are:
$V_1 = j\omega L_1 I_1 - j\omega M I_2$
$V_2 = -j\omega M I_1 + j\omega L_2 I_2$

From these equations, the Z-parameters are:
$Z_{11} = j\omega L_1$
$Z_{12} = -j\omega M$
$Z_{21} = -j\omega M$
$Z_{22} = j\omega L_2$

This confirms $Z_{12} = Z_{21}$ as expected for a passive network.
