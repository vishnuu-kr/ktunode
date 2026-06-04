---
title: "DC excitation and initial conditions"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ace"
status: "completed"
scrapedAt: "2026-05-23T16:11:33.957Z"
---
# CIRCUITS & NETWORKS: Module 3: Laplace Transforms (Review) - DC Excitation and Initial Conditions

## Introduction

This module provides a review of Laplace transforms, focusing on their application to circuits with DC excitation and initial conditions. Understanding these concepts is crucial for analyzing the transient behavior of circuits containing reactive elements (capacitors and inductors). This section will bridge the gap from your prior knowledge of circuit analysis to the powerful tools offered by the s-domain.

**Learning Outcome:** This section will primarily support **CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.** (Knowledge Level: K3)

**Key Concept:** The Laplace transform converts differential equations in the time domain into algebraic equations in the s-domain, simplifying the analysis of circuits with time-varying elements.

## 1. The Laplace Transform - A Quick Review

The Laplace transform is a mathematical tool that transforms a function of time, $f(t)$, into a function of a complex variable $s$, denoted as $F(s)$. It is particularly useful for solving linear ordinary differential equations with constant coefficients, which commonly arise in circuit analysis.

**Definition:** The unilateral Laplace transform of a function $f(t)$, defined for $t \ge 0$, is given by:

$F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$

where $s$ is a complex variable, $s = \sigma + j\omega$.

**Common Laplace Transform Pairs (Essential for Circuit Analysis):**

| $f(t)$                      | $F(s)$                                | Notes                                   |
| :-------------------------- | :------------------------------------ | :-------------------------------------- |
| $\delta(t)$ (Unit Impulse)  | $1$                                   |                                         |
| $u(t)$ (Unit Step)          | $1/s$                                 | $u(t) = 1$ for $t \ge 0$, $0$ otherwise |
| $t u(t)$                    | $1/s^2$                               |                                         |
| $t^n u(t)$                  | $n!/s^{n+1}$                          |                                         |
| $e^{-at} u(t)$              | $1/(s+a)$                             | First shifting theorem                  |
| $\sin(\omega t) u(t)$       | $\omega/(s^2 + \omega^2)$             |                                         |
| $\cos(\omega t) u(t)$       | $s/(s^2 + \omega^2)$                  |                                         |
| $e^{-at}\sin(\omega t) u(t)$ | $\omega/((s+a)^2 + \omega^2)$         |                                         |
| $e^{-at}\cos(\omega t) u(t)$ | $(s+a)/((s+a)^2 + \omega^2)$          |                                         |
| $ae^{-at} u(t)$             | $a/(s+a)$                             |                                         |

**Important Properties of Laplace Transform:**

*   **Linearity:** $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$
*   **First Shifting Theorem:** $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$
*   **Second Shifting Theorem:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$ (for $a > 0$)
*   **Time Differentiation:** $\mathcal{L}\{df(t)/dt\} = sF(s) - f(0^-)$
*   **Time Integration:** $\mathcal{L}\{\int_0^t f(\tau) d\tau\} = F(s)/s$

**Reference:** Refer to Chapter 12 in Van Valkenburg's "Network Analysis" or Chapter 9 in Ravish R Singh's "Network Analysis and Synthesis" for a comprehensive review of Laplace transform properties and pairs.

## 2. DC Excitation

DC excitation refers to circuits powered by a constant voltage or current source. In the context of Laplace transforms, we will represent these sources in the s-domain.

*   **DC Voltage Source $V$:** In the time domain, a DC voltage source is represented by $V u(t)$. Its Laplace transform is $V/s$.
*   **DC Current Source $I$:** In the time domain, a DC current source is represented by $I u(t)$. Its Laplace transform is $I/s$.

**Example:** If a circuit has a 5V DC voltage source connected at $t=0$, its s-domain representation is $5/s$.

## 3. Initial Conditions

Initial conditions are the values of voltages across capacitors and currents through inductors at the instant the excitation is applied (typically $t=0$). These conditions are crucial for determining the complete solution of a differential equation that describes a circuit's behavior.

### 3.1. Initial Conditions for Capacitors

The voltage across a capacitor is related to the charge stored on it: $v_C(t) = q(t)/C$. The current through a capacitor is $i_C(t) = C \frac{dv_C(t)}{dt}$.

In the time domain, the differential equation for a capacitor is: $i_C(t) = C \frac{dv_C(t)}{dt}$.

Taking the Laplace transform of this equation:

$\mathcal{L}\{i_C(t)\} = \mathcal{L}\{C \frac{dv_C(t)}{dt}\}$

Using the time differentiation property:

$I_C(s) = C [sV_C(s) - v_C(0^-)]$

$I_C(s) = sCV_C(s) - Cv_C(0^-)$

Where:
*   $I_C(s)$ is the Laplace transform of the capacitor current.
*   $V_C(s)$ is the Laplace transform of the capacitor voltage.
*   $v_C(0^-)$ is the voltage across the capacitor just *before* the excitation is applied (the initial voltage).

**s-Domain Model for a Capacitor with Initial Voltage:**

The equation $I_C(s) = sCV_C(s) - Cv_C(0^-)$ can be represented by an equivalent circuit in the s-domain. This circuit consists of a **series combination of a voltage source of value $v_C(0^-)$ and an impedance of $1/(sC)$**.

Alternatively, we can rearrange the equation as: $V_C(s) = \frac{1}{sC} I_C(s) + \frac{v_C(0^-)}{s}$. This represents a **series combination of an impedance $1/(sC)$ and a voltage source of value $v_C(0^-)/s$**.

**Important Note on $v_C(0^-)$:** When we speak of initial conditions, we generally assume that the circuit has been in a steady state *before* the switch is closed or the excitation is applied at $t=0$. Therefore, $v_C(0^-)$ represents the capacitor voltage in that prior steady state.

### 3.2. Initial Conditions for Inductors

The voltage across an inductor is related to the rate of change of current through it: $v_L(t) = L \frac{di_L(t)}{dt}$. The current through an inductor is the integral of the voltage: $i_L(t) = \frac{1}{L} \int_0^t v_L(\tau) d\tau + i_L(0^-)$.

In the time domain, the differential equation for an inductor is: $v_L(t) = L \frac{di_L(t)}{dt}$.

Taking the Laplace transform of this equation:

$\mathcal{L}\{v_L(t)\} = \mathcal{L}\{L \frac{di_L(t)}{dt}\}$

Using the time differentiation property:

$V_L(s) = L [sI_L(s) - i_L(0^-)]$

$V_L(s) = sLI_L(s) - Li_L(0^-)$

Where:
*   $V_L(s)$ is the Laplace transform of the inductor voltage.
*   $I_L(s)$ is the Laplace transform of the inductor current.
*   $i_L(0^-)$ is the current through the inductor just *before* the excitation is applied (the initial current).

**s-Domain Model for an Inductor with Initial Current:**

The equation $V_L(s) = sLI_L(s) - Li_L(0^-)$ can be represented by an equivalent circuit in the s-domain. This circuit consists of a **series combination of a current source of value $i_L(0^-)$ and an impedance of $sL$**.

Alternatively, we can rearrange the equation as: $I_L(s) = \frac{1}{sL} V_L(s) + \frac{i_L(0^-)}{s}$. This represents a **series combination of an impedance $sL$ and a current source of value $i_L(0^-)/s$**.

**Important Note on $i_L(0^-)$:** Similar to capacitors, $i_L(0^-)$ represents the inductor current in the steady state *before* the excitation is applied at $t=0$.

**Reference:** Chapter 12 in Van Valkenburg and Chapter 9 in Ravish R Singh cover the Laplace transform of derivatives and integrals, which are the foundation for these s-domain models. Chapter 11 in Suresh Kumar's "Electric Circuits & Networks" also provides good coverage of these concepts.

## 4. Solving Circuits with DC Excitation and Initial Conditions using Laplace Transforms

The process of solving a circuit with DC excitation and initial conditions in the s-domain involves the following steps:

1.  **Determine Initial Conditions:** Find the values of $v_C(0^-)$ for all capacitors and $i_L(0^-)$ for all inductors. This usually involves analyzing the circuit in its steady state *before* the switch is closed or the source is applied.
2.  **Transform the Circuit to the s-Domain:**
    *   Replace all time-domain sources with their Laplace transforms. For DC sources, this is $V/s$ or $I/s$.
    *   Replace resistors with their resistance $R$.
    *   Replace capacitors with their impedance $1/(sC)$ and include a series voltage source of $v_C(0^-)$.
    *   Replace inductors with their impedance $sL$ and include a series voltage source of $Li_L(0^-)$ (or a current source of $i_L(0^-)$ in parallel with the impedance, depending on the circuit configuration and preference).
3.  **Solve the s-Domain Circuit:** Use standard circuit analysis techniques (e.g., Kirchhoff's Voltage Law (KVL), Kirchhoff's Current Law (KCL), nodal analysis, mesh analysis, circuit theorems like superposition or Thevenin's/Norton's theorems) to find the desired s-domain response (e.g., $V(s)$, $I(s)$).
4.  **Transform Back to the Time Domain:** Use the inverse Laplace transform to convert the s-domain solution back to the time domain, $f(t)$. This often involves techniques like partial fraction expansion.

**Example 1: Series RL Circuit with Initial Current**

Consider a series RL circuit with a resistor $R$ and an inductor $L$. At $t=0$, a DC voltage source $V$ is applied. Assume the inductor has an initial current $i_L(0^-) = I_0$.

**Circuit Diagram (Time Domain):**

```
      +---- R ----+---- L ----+
      |           |           |
     --V--       i(t)      v_L(t)
      |           |           |
      +-----------+-----------+
```

**Steps:**

1.  **Initial Conditions:** $i_L(0^-) = I_0$.
2.  **Transform to s-Domain:**
    *   Voltage source $V$ becomes $V/s$.
    *   Resistor $R$ remains $R$.
    *   Inductor $L$ becomes an impedance $sL$ in series with a voltage source of value $Li_L(0^-) = LI_0$.

    **s-Domain Circuit:**

    ```
          +---- R ----+---- sL ----+
          |           |      +-----|----
         --V/s--       I(s)   |     |
          |           |     LI_0  |
          +-----------+-----------+
    ```
    Here, $I(s)$ is the Laplace transform of the circuit current.

3.  **Solve in s-Domain:** Apply KVL to the s-domain loop:

    $\frac{V}{s} = I(s)R + sLI(s) + LI_0$

    Rearrange to solve for $I(s)$:

    $\frac{V}{s} - LI_0 = I(s)(R + sL)$

    $I(s) = \frac{V/s - LI_0}{R + sL}$

    $I(s) = \frac{V - sLI_0}{s(R + sL)}$

    $I(s) = \frac{V - sLI_0}{sL(R/L + s)}$

    $I(s) = \frac{V/L - sI_0}{s(s + R/L)}$

4.  **Inverse Laplace Transform:** To find $i(t)$, we need to perform partial fraction expansion of $I(s)$.

    Let $I(s) = \frac{A}{s} + \frac{B}{s + R/L}$

    $A = \left. s I(s) \right|_{s=0} = \left. \frac{V/L - sI_0}{s + R/L} \right|_{s=0} = \frac{V/L}{R/L} = \frac{V}{R}$

    $B = \left. (s + R/L) I(s) \right|_{s=-R/L} = \left. \frac{V/L - sI_0}{s} \right|_{s=-R/L} = \frac{V/L - (-R/L)I_0}{-R/L} = \frac{V/L + (R/L)I_0}{-R/L} = -\frac{V}{R} - I_0$

    So, $I(s) = \frac{V/R}{s} + \frac{-V/R - I_0}{s + R/L}$

    Taking the inverse Laplace transform:

    $i(t) = \mathcal{L}^{-1}\{I(s)\} = \frac{V}{R} u(t) + (-\frac{V}{R} - I_0) e^{-(R/L)t} u(t)$

    $i(t) = \frac{V}{R} (1 - e^{-(R/L)t}) - I_0 e^{-(R/L)t}$ for $t \ge 0$

    **Interpretation:**
    *   The term $\frac{V}{R}(1 - e^{-(R/L)t})$ is the steady-state response where the inductor behaves as a short circuit, and the current approaches $V/R$.
    *   The term $-I_0 e^{-(R/L)t}$ is the transient response due to the initial current. If $I_0$ was zero, this term would be absent.

**Example 2: Series RC Circuit with Initial Voltage**

Consider a series RC circuit with a resistor $R$ and a capacitor $C$. At $t=0$, a DC voltage source $V$ is applied. Assume the capacitor has an initial voltage $v_C(0^-) = V_0$.

**Circuit Diagram (Time Domain):**

```
      +---- R ----+---- C ----+
      |           |           |
     --V--       i(t)      v_C(t)
      |           |           |
      +-----------+-----------+
```

**Steps:**

1.  **Initial Conditions:** $v_C(0^-) = V_0$.
2.  **Transform to s-Domain:**
    *   Voltage source $V$ becomes $V/s$.
    *   Resistor $R$ remains $R$.
    *   Capacitor $C$ becomes an impedance $1/(sC)$ in series with a voltage source of value $v_C(0^-) = V_0$.

    **s-Domain Circuit:**

    ```
          +---- R ----+---- 1/(sC) ----+
          |           |      +-----|----
         --V/s--       I(s)   |     |
          |           |     V_0   |
          +-----------+-----------+
    ```
    Here, $I(s)$ is the Laplace transform of the circuit current.

3.  **Solve in s-Domain:** Apply KVL to the s-domain loop:

    $\frac{V}{s} = I(s)R + \frac{I(s)}{sC} + \frac{V_0}{s}$

    Rearrange to solve for $I(s)$:

    $\frac{V}{s} - \frac{V_0}{s} = I(s)(R + \frac{1}{sC})$

    $\frac{V - V_0}{s} = I(s) \frac{sRC + 1}{sC}$

    $I(s) = \frac{V - V_0}{s} \cdot \frac{sC}{sRC + 1}$

    $I(s) = \frac{C(V - V_0)}{sRC + 1}$

    $I(s) = \frac{V - V_0}{RC(s + 1/RC)}$

4.  **Inverse Laplace Transform:**

    $i(t) = \mathcal{L}^{-1}\{I(s)\} = \frac{V - V_0}{RC} e^{-(1/RC)t} u(t)$

    **Interpretation:**
    *   If $V > V_0$, the current starts at $(V-V_0)/RC$ and decays to zero, charging the capacitor towards $V$.
    *   If $V < V_0$, the current starts at $(V-V_0)/RC$ (negative) and decays to zero, discharging the capacitor towards $V$.
    *   If $V = V_0$, the current is zero, as the capacitor is already at the source voltage.

**Reference:** Chapter 11 in Suresh Kumar's "Electric Circuits & Networks" and Chapter 12 in Van Valkenburg provide worked examples for these types of circuits. Chapter 9 in Ravish R Singh also offers similar illustrations.

## 5. Practice Questions

**Question 1:**
A series RL circuit consists of a 10 $\Omega$ resistor and a 5 H inductor. At $t=0$, a 20 V DC source is applied. If the initial current through the inductor is 0.5 A, find the expression for the current $i(t)$ in the circuit for $t \ge 0$.

**Answer 1:**
The s-domain circuit will have a voltage source of $20/s$, a resistor of $10 \Omega$, and an inductor of impedance $sL = 5s$. The initial condition for the inductor is $i_L(0^-) = 0.5$ A, which is represented by a voltage source of $LI_0 = 5 \times 0.5 = 2.5$ V in series with the inductor.

Applying KVL in the s-domain:
$\frac{20}{s} = 10I(s) + 5sI(s) + 2.5$
$\frac{20}{s} - 2.5 = I(s)(10 + 5s)$
$\frac{20 - 2.5s}{s} = I(s)5(2 + s)$
$I(s) = \frac{20 - 2.5s}{5s(s + 2)} = \frac{4 - 0.5s}{s(s + 2)}$

Using partial fraction expansion:
$I(s) = \frac{A}{s} + \frac{B}{s + 2}$
$A = \left. s I(s) \right|_{s=0} = \left. \frac{4 - 0.5s}{s + 2} \right|_{s=0} = \frac{4}{2} = 2$
$B = \left. (s + 2) I(s) \right|_{s=-2} = \left. \frac{4 - 0.5s}{s} \right|_{s=-2} = \frac{4 - 0.5(-2)}{-2} = \frac{4 + 1}{-2} = \frac{5}{-2} = -2.5$

So, $I(s) = \frac{2}{s} - \frac{2.5}{s + 2}$.
Taking the inverse Laplace transform:
$i(t) = 2 u(t) - 2.5 e^{-2t} u(t)$
$i(t) = (2 - 2.5 e^{-2t})$ A for $t \ge 0$.

**Question 2:**
A series RC circuit has a 5 $\Omega$ resistor and a 0.5 F capacitor. At $t=0$, a 12 V DC source is applied. If the initial voltage across the capacitor is 4 V, find the expression for the capacitor voltage $v_C(t)$ for $t \ge 0$.

**Answer 2:**
The s-domain circuit will have a voltage source of $12/s$, a resistor of $5 \Omega$, and a capacitor of impedance $1/(sC) = 1/(0.5s) = 2/s$. The initial condition for the capacitor is $v_C(0^-) = 4$ V, which is represented by a voltage source of $V_0 = 4$ V in series with the capacitor.

Applying KVL in the s-domain:
$\frac{12}{s} = 5I(s) + \frac{2}{s}I(s) + 4$
$\frac{12}{s} - 4 = I(s)(5 + \frac{2}{s})$
$\frac{12 - 4s}{s} = I(s) \frac{5s + 2}{s}$
$I(s) = \frac{12 - 4s}{s} \cdot \frac{s}{5s + 2} = \frac{12 - 4s}{5s + 2}$

The voltage across the capacitor in the s-domain is $V_C(s) = \frac{I(s)}{sC} + \frac{v_C(0^-)}{s}$.
$V_C(s) = I(s) \frac{2}{s} + \frac{4}{s}$
$V_C(s) = \frac{12 - 4s}{5s + 2} \cdot \frac{2}{s} + \frac{4}{s}$
$V_C(s) = \frac{2(12 - 4s)}{s(5s + 2)} + \frac{4}{s}$
$V_C(s) = \frac{24 - 8s}{s(5s + 2)} + \frac{4(5s + 2)}{s(5s + 2)}$
$V_C(s) = \frac{24 - 8s + 20s + 8}{s(5s + 2)} = \frac{32 + 12s}{s(5s + 2)}$

Using partial fraction expansion:
$V_C(s) = \frac{A}{s} + \frac{B}{5s + 2}$
$A = \left. s V_C(s) \right|_{s=0} = \left. \frac{32 + 12s}{5s + 2} \right|_{s=0} = \frac{32}{2} = 16$
$B = \left. (5s + 2) V_C(s) \right|_{s=-2/5} = \left. \frac{32 + 12s}{s} \right|_{s=-2/5} = \frac{32 + 12(-2/5)}{-2/5} = \frac{32 - 24/5}{-2/5} = \frac{(160-24)/5}{-2/5} = \frac{136/5}{-2/5} = -68$

So, $V_C(s) = \frac{16}{s} - \frac{68}{5s + 2} = \frac{16}{s} - \frac{68/5}{s + 2/5}$.
Taking the inverse Laplace transform:
$v_C(t) = 16 u(t) - \frac{68}{5} e^{-(2/5)t} u(t)$
$v_C(t) = (16 - 13.6 e^{-0.4t})$ V for $t \ge 0$.

## 6. Important Points to Remember

*   **The $0^-$ vs. $0^+$ Distinction:** Initial conditions are always evaluated at $t=0^-$, representing the state just before the transient begins.
*   **Energy Storage Elements:** Inductors and capacitors store energy. Their initial energy states (represented by initial current and voltage, respectively) are critical in determining the circuit's response.
*   **s-Domain Models:** Memorize the s-domain impedances of R, L, and C, and how to represent initial conditions as voltage or current sources.
*   **Partial Fraction Expansion:** This is a fundamental technique for transforming s-domain functions back to the time domain. Ensure you are proficient in its application.
*   **DC Sources in s-Domain:** A DC voltage/current source of value $V/I$ becomes $V/s$ or $I/s$ in the s-domain.
*   **Steady-State Analysis is Key for Initial Conditions:** Always analyze the circuit's behavior *before* the transient event to determine the initial conditions.

## 7. Alignment with Course Outcomes

This review of DC excitation and initial conditions directly supports **CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.** (Knowledge Level: K3). By understanding how to represent circuit elements and initial conditions in the s-domain, you gain the ability to solve differential equations that describe the transient behavior of RLC circuits under various excitations, including DC. This forms the foundation for further analysis of AC circuits and more complex network behaviors.

**Reference to Textbooks:**

*   **Van Valkenburg, "Network Analysis":** Focus on Chapters 11 (Laplace Transform) and 12 (Transients) for detailed explanations of these concepts and examples.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Chapters 8 (Laplace Transform) and 9 (Transient Analysis of First and Second Order Circuits) will be highly beneficial.
*   **Suresh Kumar, "Electric Circuits & Networks":** Chapters 10 (Laplace Transform) and 11 (Transient Response of DC and AC Circuits) are relevant for this topic.
*   **Sudhakar & Palli, "Circuits and Networks, Analysis and Synthesis":** Chapters 13 (Laplace Transform) and 14 (Transient Analysis) will cover these topics thoroughly.
