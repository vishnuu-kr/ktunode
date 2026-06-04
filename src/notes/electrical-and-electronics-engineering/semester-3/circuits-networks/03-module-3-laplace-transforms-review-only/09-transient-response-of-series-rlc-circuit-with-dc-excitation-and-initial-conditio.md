---
title: "Transient response of series RLC circuit with DC excitation and initial 
conditions"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad4"
status: "completed"
scrapedAt: "2026-05-23T16:11:38.363Z"
---
# CIRCUITS & NETWORKS: Module 3 - Laplace Transforms (Review Only)

## Topic: Transient Response of Series RLC Circuit with DC Excitation and Initial Conditions

### 1. Introduction

This module reviews the application of Laplace transforms to analyze the transient behavior of electrical circuits. Specifically, we will focus on a series RLC circuit subjected to a DC excitation, considering the presence of initial conditions for the circuit elements. The Laplace transform is a powerful mathematical tool that converts differential equations in the time domain into algebraic equations in the frequency (s-domain), simplifying the analysis of dynamic circuits.

**Key Concepts:**

*   **Transient Response:** The behavior of a circuit immediately after a change in its input or configuration, before it settles into a steady state.
*   **DC Excitation:** A constant voltage or current source applied to the circuit.
*   **Initial Conditions:** The initial stored energy in the circuit's reactive components (inductor and capacitor) at the moment the excitation is applied. This is crucial for determining the complete transient solution.
*   **Laplace Transform:** An integral transform that maps a function of time, $f(t)$, to a function of complex frequency, $s$, denoted as $F(s)$.
*   **s-Domain:** The domain of the complex variable $s$.

**Relevance to Course Outcomes:**

*   **CO1:** While this topic primarily focuses on dynamic circuits, understanding the response to a DC source is a foundational step before analyzing AC circuits. The principles of superposition and circuit simplification can be applied. (K3)
*   **CO2:** This topic directly addresses the application of Laplace transforms for solving dynamic electric circuits, transforming time-domain differential equations into s-domain algebraic equations. (K3)
*   **CO3:** The transient response of an RLC circuit is fundamental to understanding the behavior of resonant circuits. The parameters $R$, $L$, and $C$ dictate the nature of the transient response, which is closely linked to damping and natural frequency. (K3)

### 2. Series RLC Circuit and its Differential Equation

Consider a series RLC circuit consisting of a resistor ($R$), an inductor ($L$), and a capacitor ($C$) connected in series with a DC voltage source ($V_s$) and a switch. The switch is closed at $t=0$.

**Circuit Diagram:**

```
      +-------[ R ]-------+------- L -------+------- C -------+
      |                   |                 |                 |
  Vs -----               SW              v_R(t)            v_L(t)
      |                   |                 |                 |
      +---------------------------------------------------------+
                                          v_C(t)
```

**Governing Equation in the Time Domain:**

Applying Kirchhoff's Voltage Law (KVL) around the loop for $t \geq 0$:

$v_R(t) + v_L(t) + v_C(t) = V_s$

Substituting the voltage-current relationships for each element:

$i(t)R + L \frac{di(t)}{dt} + \frac{1}{C} \int i(t) dt = V_s$

To obtain a differential equation involving only the current $i(t)$, we can differentiate the entire equation with respect to $t$:

$R \frac{di(t)}{dt} + L \frac{d^2i(t)}{dt^2} + \frac{1}{C} i(t) = \frac{dV_s}{dt}$

Since $V_s$ is a DC voltage source, $\frac{dV_s}{dt} = 0$ for $t > 0$. Therefore, the homogeneous differential equation is:

$L \frac{d^2i(t)}{dt^2} + R \frac{di(t)}{dt} + \frac{1}{C} i(t) = 0$

However, it's more convenient to work with the equation before differentiation when incorporating initial conditions. Let's consider the current $i(t)$ as the primary variable of interest.

**Relationship between Current and Capacitor Voltage:**

$i(t) = C \frac{dv_C(t)}{dt}$

Substituting this into the KVL equation:

$RC \frac{dv_C(t)}{dt} + LC \frac{d^2v_C(t)}{dt^2} + v_C(t) = V_s$

Rearranging into a standard second-order linear differential equation:

$\frac{d^2v_C(t)}{dt^2} + \frac{R}{L} \frac{dv_C(t)}{dt} + \frac{1}{LC} v_C(t) = \frac{V_s}{L}$

This is the differential equation for the capacitor voltage $v_C(t)$. The initial conditions required for solving this second-order differential equation are:

*   $v_C(0)$: The initial voltage across the capacitor.
*   $\frac{dv_C(0)}{dt}$: The initial rate of change of capacitor voltage, which is related to the initial current through the capacitor.

**Initial Conditions in terms of Current and Inductor Voltage:**

Let $i(0)$ be the initial current through the series RLC circuit.
The initial voltage across the capacitor is $v_C(0)$.
The initial voltage across the inductor is $v_L(0) = L \frac{di(0)}{dt}$.

From KVL at $t=0^+$:
$i(0)R + v_L(0) + v_C(0) = V_s$

This implies:
$v_L(0) = V_s - i(0)R - v_C(0)$

And the initial rate of change of capacitor voltage is:
$\frac{dv_C(0)}{dt} = \frac{i(0)}{C}$

### 3. Laplace Transform of Circuit Elements and Differential Equations

The Laplace transform provides a systematic way to handle derivatives and integrals.

| Time Domain Function $f(t)$ | Laplace Transform $F(s)$      | Notes                                                                                                                                |
| :-------------------------- | :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Constant $k$                | $\frac{k}{s}$                 | For a DC voltage source $V_s$, its Laplace transform is $\frac{V_s}{s}$.                                                            |
| $e^{at}$                    | $\frac{1}{s-a}$               |                                                                                                                                      |
| $\sin(\omega t)$            | $\frac{\omega}{s^2 + \omega^2}$ |                                                                                                                                      |
| $\cos(\omega t)$            | $\frac{s}{s^2 + \omega^2}$    |                                                                                                                                      |
| $\frac{df(t)}{dt}$          | $sF(s) - f(0)$                | This is crucial for transforming differential equations. $f(0)$ is the initial value of $f(t)$.                                        |
| $\frac{d^2f(t)}{dt^2}$      | $s^2F(s) - sf(0) - f'(0)$     | $f'(0) = \frac{df(0)}{dt}$.                                                                                                          |
| $\int_0^t f(\tau) d\tau$     | $\frac{F(s)}{s}$              |                                                                                                                                      |
| $f(t)u(t)$                  | $F(s)$                        | $u(t)$ is the unit step function. The Laplace transform inherently assumes the function is considered for $t \geq 0$.             |

**Laplace Transforms of Series RLC Components:**

Let $I(s)$ be the Laplace transform of $i(t)$, $V_C(s)$ be the Laplace transform of $v_C(t)$, and $V_L(s)$ be the Laplace transform of $v_L(t)$.

*   **Resistor Voltage:** $v_R(t) = i(t)R \implies V_R(s) = R I(s)$
*   **Inductor Voltage:** $v_L(t) = L \frac{di(t)}{dt} \implies V_L(s) = L[sI(s) - i(0)]$
*   **Capacitor Voltage:** $v_C(t)$ (no direct relation to current in s-domain without initial condition)
*   **Capacitor Current:** $i(t) = C \frac{dv_C(t)}{dt} \implies I(s) = C[sV_C(s) - v_C(0)]$

**Transforming the KVL Equation for Current $i(t)$:**

From $i(t)R + L \frac{di(t)}{dt} + \frac{1}{C} \int_0^t i(\tau) d\tau + v_C(0) = V_s$ (This form accounts for initial capacitor voltage)

Taking the Laplace transform of each term:

$R I(s) + L[sI(s) - i(0)] + \frac{1}{C} \frac{I(s)}{s} + \frac{v_C(0)}{s} = \frac{V_s}{s}$

Rearranging to solve for $I(s)$:

$I(s) \left( R + sL + \frac{1}{sC} \right) = \frac{V_s}{s} - \frac{v_C(0)}{s} + Li(0)$

$I(s) \left( \frac{s^2L + sR + \frac{1}{C}}{s} \right) = \frac{V_s - v_C(0)}{s} + Li(0)$

$I(s) = \frac{V_s - v_C(0) + Ls i(0)}{s^2L + sR + \frac{1}{C}}$

$I(s) = \frac{s(V_s - v_C(0)) + Ls^2 i(0)}{s^2L + sR + \frac{1}{C}}$  *(Correction: The $s$ multiplier should not be on $Ls^2i(0)$)*

Let's correct the multiplication by $s$ to get the $s$ term in the numerator for the initial inductor current:

$I(s) = \frac{V_s - v_C(0) + Ls i(0)}{sL + R + \frac{1}{sC}}$

To simplify, divide numerator and denominator by $L$:

$I(s) = \frac{\frac{V_s}{L} - \frac{v_C(0)}{L} + s i(0)}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$

This is the expression for the current in the s-domain. To find the time-domain current $i(t)$, we need to perform the inverse Laplace transform.

**Initial Conditions for the Differential Equation of $v_C(t)$:**

We had the equation for $v_C(t)$:
$\frac{d^2v_C(t)}{dt^2} + \frac{R}{L} \frac{dv_C(t)}{dt} + \frac{1}{LC} v_C(t) = \frac{V_s}{L}$

Taking the Laplace transform:
$[s^2V_C(s) - sv_C(0) - v_C'(0)] + \frac{R}{L}[sV_C(s) - v_C(0)] + \frac{1}{LC} V_C(s) = \frac{V_s}{sL}$

Substituting $v_C'(0) = \frac{i(0)}{C}$:

$s^2V_C(s) - sv_C(0) - \frac{i(0)}{C} + \frac{R}{L}sV_C(s) - \frac{R}{L}v_C(0) + \frac{1}{LC} V_C(s) = \frac{V_s}{sL}$

Grouping terms with $V_C(s)$:
$V_C(s) \left( s^2 + \frac{R}{L}s + \frac{1}{LC} \right) = \frac{V_s}{sL} + sv_C(0) + \frac{i(0)}{C} + \frac{R}{L}v_C(0)$

$V_C(s) = \frac{\frac{V_s}{L} + sv_C(0) + \frac{i(0)}{C} + \frac{R}{L}v_C(0)}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$

This is the expression for the capacitor voltage in the s-domain.

### 4. Solving for the Transient Response (Inverse Laplace Transform)

The denominator $s^2 + \frac{R}{L}s + \frac{1}{LC}$ is a quadratic in $s$. The nature of the roots of this quadratic equation determines the type of transient response: **overdamped, critically damped, or underdamped**.

Let $s^2 + 2\alpha s + \omega_0^2 = 0$, where:
*   **Damping factor ($\alpha$):** $\alpha = \frac{R}{2L}$
*   **Undamped natural frequency ($\omega_0$):** $\omega_0 = \frac{1}{\sqrt{LC}}$

The roots of the characteristic equation $s^2 + \frac{R}{L}s + \frac{1}{LC} = 0$ are:

$s = \frac{-\frac{R}{L} \pm \sqrt{(\frac{R}{L})^2 - \frac{4}{LC}}}{2} = -\frac{R}{2L} \pm \sqrt{\left(\frac{R}{2L}\right)^2 - \frac{1}{LC}}$

$s = -\alpha \pm \sqrt{\alpha^2 - \omega_0^2}$

**Case 1: Overdamped Response ($\alpha^2 > \omega_0^2$)**

The roots are real and distinct: $s_1 = -\alpha + \sqrt{\alpha^2 - \omega_0^2}$ and $s_2 = -\alpha - \sqrt{\alpha^2 - \omega_0^2}$.
The current $I(s)$ or voltage $V_C(s)$ will be in the form:

$F(s) = \frac{A}{s-s_1} + \frac{B}{s-s_2} + \dots$ (for constants A and B)

The time-domain response will be of the form:
$f(t) = Ae^{s_1 t} + Be^{s_2 t}$

**Case 2: Critically Damped Response ($\alpha^2 = \omega_0^2$)**

The roots are real and equal: $s_1 = s_2 = -\alpha$.
The current $I(s)$ or voltage $V_C(s)$ will be in the form:

$F(s) = \frac{A}{s+\alpha} + \frac{B}{(s+\alpha)^2} + \dots$

The time-domain response will be of the form:
$f(t) = (A + Bt)e^{-\alpha t}$

**Case 3: Underdamped Response ($\alpha^2 < \omega_0^2$)**

The roots are complex conjugates: $s_{1,2} = -\alpha \pm j\omega_d$, where $\omega_d = \sqrt{\omega_0^2 - \alpha^2}$ is the damped frequency.
The current $I(s)$ or voltage $V_C(s)$ will typically involve terms like:

$F(s) = \frac{A(s+\alpha) + B\omega_d}{(s+\alpha)^2 + \omega_d^2}$

The time-domain response will be of the form:
$f(t) = e^{-\alpha t}(A \cos(\omega_d t) + B \sin(\omega_d t))$

**Steps for Solving:**

1.  **Write the differential equation** for the circuit in the time domain.
2.  **Determine the initial conditions** ($i(0)$, $v_C(0)$, and $\frac{di(0)}{dt}$ or $\frac{dv_C(0)}{dt}$).
3.  **Take the Laplace transform** of the differential equation, incorporating initial conditions.
4.  **Solve the resulting algebraic equation** in the s-domain for the desired variable (e.g., $I(s)$ or $V_C(s)$).
5.  **Perform the inverse Laplace transform** to obtain the time-domain response $i(t)$ or $v_C(t)$. This often involves partial fraction expansion.

### 5. Example Calculation

**Problem:** A series RLC circuit with $R = 20 \Omega$, $L = 1 H$, and $C = 0.05 F$ is subjected to a DC voltage of $10 V$ at $t=0$. The initial current through the inductor is $i(0) = 0 A$, and the initial voltage across the capacitor is $v_C(0) = 0 V$. Find the current $i(t)$ for $t \geq 0$.

**Solution:**

1.  **Differential Equation:**
    $L \frac{d^2i(t)}{dt^2} + R \frac{di(t)}{dt} + \frac{1}{C} i(t) = 0$ (for $t>0$, since $V_s$ is constant)

2.  **Initial Conditions:**
    $i(0) = 0 A$
    $v_C(0) = 0 V$
    From KVL at $t=0^+$: $i(0)R + L\frac{di(0)}{dt} + v_C(0) = V_s$.
    $0 \cdot 20 + 1 \cdot \frac{di(0)}{dt} + 0 = 10 \implies \frac{di(0)}{dt} = 10 A/s$.

3.  **Laplace Transform:**
    Taking the Laplace transform of the KVL equation $i(t)R + L \frac{di(t)}{dt} + \frac{1}{C} \int_0^t i(\tau) d\tau + v_C(0) = V_s$:
    $RI(s) + L[sI(s) - i(0)] + \frac{1}{sC}I(s) + \frac{v_C(0)}{s} = \frac{V_s}{s}$
    Substituting values:
    $20I(s) + 1[sI(s) - 0] + \frac{1}{0.05s}I(s) + \frac{0}{s} = \frac{10}{s}$
    $20I(s) + sI(s) + \frac{1}{0.05s}I(s) = \frac{10}{s}$
    $I(s) \left( 20 + s + \frac{1}{0.05s} \right) = \frac{10}{s}$
    $I(s) \left( \frac{20s + s^2 + \frac{1}{0.05}}{0.05s} \right) = \frac{10}{s}$
    $I(s) \left( \frac{s^2 + 20s + 20}{0.05s} \right) = \frac{10}{s}$
    $I(s) = \frac{10}{s} \cdot \frac{0.05s}{s^2 + 20s + 20}$
    $I(s) = \frac{0.5}{s^2 + 20s + 20}$

4.  **Analysis of Denominator:**
    The characteristic equation is $s^2 + 20s + 20 = 0$.
    Compare with $s^2 + 2\alpha s + \omega_0^2 = 0$:
    $2\alpha = 20 \implies \alpha = 10$
    $\omega_0^2 = 20 \implies \omega_0 = \sqrt{20} = 2\sqrt{5} \approx 4.47$
    Since $\alpha^2 = 100$ and $\omega_0^2 = 20$, $\alpha^2 > \omega_0^2$, so the response is **overdamped**.

    The roots are:
    $s = \frac{-20 \pm \sqrt{20^2 - 4 \cdot 1 \cdot 20}}{2} = \frac{-20 \pm \sqrt{400 - 80}}{2} = \frac{-20 \pm \sqrt{320}}{2}$
    $s = \frac{-20 \pm 8\sqrt{5}}{2} = -10 \pm 4\sqrt{5}$
    $s_1 = -10 + 4\sqrt{5} \approx -10 + 8.94 = -1.06$
    $s_2 = -10 - 4\sqrt{5} \approx -10 - 8.94 = -18.94$

5.  **Inverse Laplace Transform:**
    We need to express $I(s) = \frac{0.5}{s^2 + 20s + 20}$ using partial fractions:
    $I(s) = \frac{0.5}{(s - s_1)(s - s_2)} = \frac{A}{s-s_1} + \frac{B}{s-s_2}$

    Using the cover-up method:
    $A = \frac{0.5}{s_1 - s_2} = \frac{0.5}{(-10 + 4\sqrt{5}) - (-10 - 4\sqrt{5})} = \frac{0.5}{8\sqrt{5}} = \frac{1}{16\sqrt{5}}$
    $B = \frac{0.5}{s_2 - s_1} = \frac{0.5}{(-10 - 4\sqrt{5}) - (-10 + 4\sqrt{5})} = \frac{0.5}{-8\sqrt{5}} = -\frac{1}{16\sqrt{5}}$

    So, $I(s) = \frac{1}{16\sqrt{5}} \frac{1}{s - (-10 + 4\sqrt{5})} - \frac{1}{16\sqrt{5}} \frac{1}{s - (-10 - 4\sqrt{5})}$

    The inverse Laplace transform is:
    $i(t) = \frac{1}{16\sqrt{5}} e^{(-10 + 4\sqrt{5})t} - \frac{1}{16\sqrt{5}} e^{(-10 - 4\sqrt{5})t}$
    $i(t) = \frac{e^{-10t}}{16\sqrt{5}} (e^{4\sqrt{5}t} - e^{-4\sqrt{5}t})$
    $i(t) = \frac{e^{-10t}}{8\sqrt{5}} \left( \frac{e^{4\sqrt{5}t} - e^{-4\sqrt{5}t}}{2} \right)$
    $i(t) = \frac{e^{-10t}}{8\sqrt{5}} \sinh(4\sqrt{5}t)$

**Textbook References:**

*   **Van Valkenburg, "Network Analysis" (3rd Ed.):** Chapter 10 covers transient analysis using Laplace transforms. It provides detailed derivations for RLC circuits and discusses the different damping conditions.
*   **Ravish R Singh, "Network Analysis and Synthesis" (2nd Ed.):** Chapter 11 is dedicated to transient analysis. It emphasizes the application of Laplace transforms and includes numerous examples for RLC circuits.
*   **Suresh Kumar, "Electric Circuits & Networks" (1st Ed.):** Chapter 7 focuses on transient response. It bridges the gap between classical differential equation methods and Laplace transform techniques.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis" (5th Ed.):** Chapter 12 provides a comprehensive treatment of transient analysis using Laplace transforms, including detailed steps and various circuit configurations.

### 6. Important Points to Remember

*   **Initial Conditions are Crucial:** Always account for the initial energy stored in inductors ($i(0)$) and capacitors ($v_C(0)$). These directly affect the transient solution.
*   **Laplace Transform of Derivatives and Integrals:** Master these transforms to convert differential equations into algebraic ones.
*   **s-Domain Impedances:**
    *   Resistor: $R$
    *   Inductor: $sL$ (with a series voltage source of $L i(0)$ for initial current) or $sL$ (if using current as primary variable and considering $i(0)$ in the derivative transform). The "impedance" concept for an inductor with initial conditions is often represented as a series combination of $sL$ and a voltage source $Li(0)$.
    *   Capacitor: $\frac{1}{sC}$ (with a series voltage source of $v_C(0)$ for initial voltage) or $\frac{1}{sC}$ (if using voltage as primary variable and considering $i(0)/C$ in the derivative transform). The "impedance" concept for a capacitor with initial conditions is often represented as a series combination of $\frac{1}{sC}$ and a voltage source $\frac{v_C(0)}{s}$.
    *   **Alternative View (using current as primary variable for series RLC):** The effective "impedance" in the s-domain for a series RLC branch with initial current $i(0)$ through the inductor and initial voltage $v_C(0)$ across the capacitor, when analyzing the current $I(s)$, is often viewed as: $R + sL + \frac{1}{sC}$. The initial conditions $i(0)$ and $v_C(0)$ are incorporated into the numerator of the $I(s)$ expression.
*   **Characteristic Equation:** The roots of the denominator polynomial of the s-domain expression determine the damping characteristics (overdamped, critically damped, underdamped).
*   **Partial Fraction Expansion:** This is a key technique for performing the inverse Laplace transform. Learn the standard forms and their corresponding time-domain functions.
*   **Steady-State Component:** After the transient response decays, the circuit will settle into a steady state. For a DC excitation, the steady-state current is $V_s/R$ (as the inductor acts as a short circuit and the capacitor acts as an open circuit). The Laplace transform method naturally includes both the transient and the DC steady-state components (if the DC source is present in the transformed equation).

### 7. Practice Questions

**Question 1:**
A series RL circuit with $R = 10 \Omega$ and $L = 2 H$ is connected to a DC voltage source of $50 V$ at $t=0$. If the initial current $i(0) = 0 A$, find the current $i(t)$ using Laplace transforms.

**Question 2:**
A series RC circuit with $R = 5 \Omega$ and $C = 0.1 F$ is connected to a DC voltage source of $20 V$ at $t=0$. If the initial capacitor voltage $v_C(0) = 0 V$, find the capacitor voltage $v_C(t)$ using Laplace transforms.

**Question 3:**
For the series RLC circuit in Example 1 ($R=20\Omega, L=1H, C=0.05F, V_s=10V, i(0)=0, v_C(0)=0$), calculate the capacitor voltage $v_C(t)$ using Laplace transforms.

**Question 4:**
Determine the type of transient response (overdamped, critically damped, or underdamped) for a series RLC circuit with $R = 30 \Omega$, $L = 1 H$, and $C = 0.1 F$ when subjected to a DC excitation.

---

### Answers to Practice Questions

**Answer 1:**
The transformed equation for current is: $R I(s) + L[sI(s) - i(0)] = \frac{V_s}{s}$.
With $R=10, L=2, V_s=50, i(0)=0$:
$10I(s) + 2[sI(s) - 0] = \frac{50}{s}$
$I(s)(10+2s) = \frac{50}{s}$
$I(s) = \frac{50}{s(10+2s)} = \frac{25}{s(5+s)}$

Partial fraction expansion:
$\frac{25}{s(5+s)} = \frac{A}{s} + \frac{B}{5+s}$
$25 = A(5+s) + Bs$
Let $s=0 \implies 25 = 5A \implies A=5$
Let $s=-5 \implies 25 = B(-5) \implies B=-5$

$I(s) = \frac{5}{s} - \frac{5}{s+5}$
$i(t) = 5 - 5e^{-5t}$ Amperes.

**Answer 2:**
The transformed equation for capacitor voltage is: $R I(s) + \frac{1}{sC}I(s) + \frac{v_C(0)}{s} = \frac{V_s}{s}$.
Also, $I(s) = C[sV_C(s) - v_C(0)]$.
Substituting $I(s)$:
$RC[sV_C(s) - v_C(0)] + \frac{1}{sC}C[sV_C(s) - v_C(0)] + \frac{v_C(0)}{s} = \frac{V_s}{s}$
$RCsV_C(s) - Rcv_C(0) + V_C(s) - \frac{v_C(0)}{s} + \frac{v_C(0)}{s} = \frac{V_s}{s}$
$V_C(s)(RCs + 1) = \frac{V_s}{s} + Rcv_C(0)$
With $R=5, C=0.1, V_s=20, v_C(0)=0$:
$V_C(s)(5 \cdot 0.1 s + 1) = \frac{20}{s}$
$V_C(s)(0.5s + 1) = \frac{20}{s}$
$V_C(s) = \frac{20}{s(0.5s+1)} = \frac{40}{s(s+2)}$

Partial fraction expansion:
$\frac{40}{s(s+2)} = \frac{A}{s} + \frac{B}{s+2}$
$40 = A(s+2) + Bs$
Let $s=0 \implies 40 = 2A \implies A=20$
Let $s=-2 \implies 40 = B(-2) \implies B=-20$

$V_C(s) = \frac{20}{s} - \frac{20}{s+2}$
$v_C(t) = 20 - 20e^{-2t}$ Volts.

**Answer 3:**
From Example 1, we found the current $I(s) = \frac{0.5}{s^2 + 20s + 20}$.
We need to find $V_C(s)$. We know $I(s) = C[sV_C(s) - v_C(0)]$.
$I(s) = 0.05[sV_C(s) - 0] = 0.05sV_C(s)$
$V_C(s) = \frac{I(s)}{0.05s} = \frac{1}{0.05s} \cdot \frac{0.5}{s^2 + 20s + 20} = \frac{10}{s^2 + 20s + 20}$

To perform the inverse Laplace transform, we complete the square in the denominator:
$s^2 + 20s + 20 = (s^2 + 20s + 100) - 100 + 20 = (s+10)^2 - 80$
$V_C(s) = \frac{10}{(s+10)^2 - 80} = \frac{10}{(s+10)^2 - (4\sqrt{5})^2}$

We use the transform pair: $L^{-1} \left\{ \frac{a}{(s+b)^2 - a^2} \right\} = e^{-bt} \sinh(at)$.
Here, $a = 4\sqrt{5}$ and $b = 10$.

$v_C(t) = \frac{10}{4\sqrt{5}} e^{-10t} \sinh(4\sqrt{5}t)$
$v_C(t) = \frac{5}{2\sqrt{5}} e^{-10t} \sinh(4\sqrt{5}t)$
$v_C(t) = \frac{\sqrt{5}}{2} e^{-10t} \sinh(4\sqrt{5}t)$ Volts.

**Answer 4:**
For a series RLC circuit, the transient response type is determined by comparing $\alpha$ and $\omega_0$.
$R = 30 \Omega, L = 1 H, C = 0.1 F$.
$\alpha = \frac{R}{2L} = \frac{30}{2 \cdot 1} = 15$
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{1 \cdot 0.1}} = \frac{1}{\sqrt{0.1}} = \frac{1}{0.316} \approx 3.16$

Compare $\alpha$ and $\omega_0$:
$\alpha = 15$
$\omega_0 \approx 3.16$
Since $\alpha > \omega_0$, the response is **overdamped**.

---
