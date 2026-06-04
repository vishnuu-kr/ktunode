---
title: "Transient response of simple series and parallel RL and RC circuits with"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35acd"
status: "completed"
scrapedAt: "2026-05-23T16:11:33.237Z"
---
# CIRCUITS & NETWORKS: Module 3: Laplace Transforms (Review Only)

## Topic: Transient Response of Simple Series and Parallel RL and RC Circuits

This module reviews the application of Laplace transforms to analyze the transient response of simple series and parallel RL and RC circuits. The focus is on understanding how these circuits behave when subjected to sudden changes in voltage or current, and how Laplace transforms provide a systematic approach to solving these dynamic circuit problems.

---

### Learning Outcomes Covered:

*   **Review of Laplace Transform Properties:** Understanding the fundamental properties of Laplace transforms relevant to circuit analysis (e.g., linearity, time shifting, frequency shifting, differentiation, integration, initial value theorem, final value theorem).
*   **s-Domain Representation of Circuit Elements:** Transforming resistors, inductors, and capacitors into their equivalent impedance or admittance in the s-domain.
*   **Analysis of First-Order Circuits (RL and RC) in the s-Domain:** Applying Kirchhoff's laws and circuit analysis techniques (e.g., nodal analysis, mesh analysis) in the s-domain to derive the transformed circuit equations.
*   **Transient Response:** Determining the time-domain response (voltage and current) of RL and RC circuits after a switch is changed or a source is applied/removed, using inverse Laplace transforms.
*   **Understanding Time Constants:** Relating the time constant ($\tau$) of RL and RC circuits to the circuit parameters and its significance in the transient response.

---

### 1. Key Concepts and Definitions

#### 1.1 Laplace Transform - A Review

The Laplace transform is a mathematical tool that converts a function of time, $f(t)$, into a function of a complex variable $s$ (where $s = \sigma + j\omega$). This transformation is particularly useful for solving linear differential equations that describe circuit behavior.

**Definition:**
The unilateral Laplace transform of a function $f(t)$, denoted by $F(s)$ or $\mathcal{L}\{f(t)\}$, is given by:

$$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} f(t)e^{-st} dt$$

**Common Laplace Transform Pairs:**

| $f(t)$              | $F(s)$                       | Description        |
| :------------------ | :--------------------------- | :----------------- |
| $\delta(t)$         | $1$                          | Unit Impulse       |
| $u(t)$ (or $1$)     | $1/s$                        | Unit Step          |
| $t u(t)$            | $1/s^2$                      | Ramp               |
| $t^n u(t)$          | $n!/s^{n+1}$                 | Power function     |
| $e^{-at} u(t)$      | $1/(s+a)$                    | Exponential Decay  |
| $\sin(\omega t) u(t)$ | $\omega/(s^2 + \omega^2)$    | Sine wave          |
| $\cos(\omega t) u(t)$ | $s/(s^2 + \omega^2)$         | Cosine wave        |
| $e^{-at} \cos(\omega t) u(t)$ | $(s+a)/((s+a)^2 + \omega^2)$ | Damped Cosine      |
| $e^{-at} \sin(\omega t) u(t)$ | $\omega/((s+a)^2 + \omega^2)$ | Damped Sine        |

**Important Laplace Transform Properties:**

*   **Linearity:** $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$
*   **Time Shifting:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, for $a > 0$.
*   **Frequency Shifting (s-domain):** $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$
*   **Differentiation in Time Domain:** $\mathcal{L}\{f'(t)\} = sF(s) - f(0^-)$
    *   $\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0^-) - f'(0^-)$
*   **Integration in Time Domain:** $\mathcal{L}\{\int_{0}^{t} f(\tau) d\tau\} = F(s)/s$
*   **Initial Value Theorem (IVT):** $f(0^+) = \lim_{s \to \infty} sF(s)$ (If the limit exists)
*   **Final Value Theorem (FVT):** $f(\infty) = \lim_{s \to 0} sF(s)$ (If all poles of $sF(s)$ are in the left-half plane)

**Inverse Laplace Transform:**

The inverse Laplace transform converts a function $F(s)$ back to its time-domain representation $f(t)$. This is often achieved using partial fraction expansion.

$$f(t) = \mathcal{L}^{-1}\{F(s)\}$$

**Partial Fraction Expansion (PFE):**
If $F(s) = \frac{N(s)}{D(s)}$, where $D(s)$ is a polynomial in $s$, we can decompose $F(s)$ into simpler terms whose inverse Laplace transforms are known.

*   **Distinct Real Roots:** If $D(s) = (s-a_1)(s-a_2)...$, then $\frac{N(s)}{D(s)} = \frac{A_1}{s-a_1} + \frac{A_2}{s-a_2} + ...$
*   **Repeated Real Roots:** If $D(s) = (s-a)^n$, then $\frac{N(s)}{D(s)} = \frac{A_1}{s-a} + \frac{A_2}{(s-a)^2} + ... + \frac{A_n}{(s-a)^n}$
*   **Complex Conjugate Roots:** If $D(s) = (s^2 + as + b)$ with complex roots, then $\frac{N(s)}{D(s)} = \frac{As+B}{s^2 + as + b}$.

---

#### 1.2 s-Domain Representation of Circuit Elements

In the s-domain, circuit analysis is performed using impedances and admittances.

*   **Resistor (R):** Impedance $Z_R(s) = R$. The voltage-current relationship remains $V(s) = I(s) \cdot R$.
*   **Inductor (L):** Impedance $Z_L(s) = sL$. The voltage-current relationship is $V(s) = I(s) \cdot sL$.
    *   **Initial Condition:** If there's an initial current $i_L(0^-)$ flowing through the inductor, it's represented by a voltage source of $L i_L(0^-)$ in series with the inductor's impedance. Or, alternatively, an ideal current source of $i_L(0^-)$ in parallel with $sL$. When using the series voltage source model, the total voltage across the inductor is $V_L(s) = sL I(s) + L i_L(0^-)$.
*   **Capacitor (C):** Impedance $Z_C(s) = 1/(sC)$. The voltage-current relationship is $V(s) = I(s) \cdot \frac{1}{sC}$.
    *   **Initial Condition:** If there's an initial voltage $v_C(0^-)$ across the capacitor, it's represented by a voltage source of $v_C(0^-)/s$ in series with the capacitor's impedance. Or, alternatively, an ideal current source of $C v_C(0^-)$ in parallel with $1/(sC)$. When using the series voltage source model, the total voltage across the capacitor is $V_C(s) = \frac{1}{sC} I(s) + \frac{v_C(0^-)}{s}$.

**Important Note:** When dealing with transient analysis, it's crucial to include the initial conditions of inductors and capacitors in the s-domain circuit.

---

### 2. Transient Response of Simple Series and Parallel RL and RC Circuits

The transient response refers to the behavior of a circuit immediately after a change in the circuit conditions (e.g., closing a switch, applying a voltage source) until it reaches its steady state.

#### 2.1 Series RL Circuit

Consider a series RL circuit with a voltage source $v(t)$ and an initially unenergized inductor ($i_L(0^-) = 0$).

**Scenario: Step Response (Switch closes at t=0, connecting a DC voltage $V_s$)**

*   **Circuit Setup:** A voltage source $V_s u(t)$ connected in series with a resistor $R$ and an inductor $L$.
*   **Time Domain Equation:**
    Using Kirchhoff's Voltage Law (KVL):
    $v(t) + v_R(t) + v_L(t) = 0$ (assuming the source is on the left side, positive voltage drop)
    $V_s u(t) = i(t)R + L \frac{di(t)}{dt}$
*   **s-Domain Equation:**
    Transforming the equation:
    $\mathcal{L}\{V_s u(t)\} = \mathcal{L}\{i(t)R\} + \mathcal{L}\{L \frac{di(t)}{dt}\}$
    $\frac{V_s}{s} = R I(s) + sL I(s) - L i(0^-)$
    Since $i(0^-) = 0$:
    $\frac{V_s}{s} = (R + sL) I(s)$
    $I(s) = \frac{V_s}{s(R + sL)} = \frac{V_s}{L s(s + R/L)}$

*   **Partial Fraction Expansion for $I(s)$:**
    $I(s) = \frac{A}{s} + \frac{B}{s + R/L}$
    $A = \lim_{s \to 0} s I(s) = \lim_{s \to 0} \frac{V_s}{s + R/L} = \frac{V_s}{R/L} = \frac{V_s}{R}$
    $B = \lim_{s \to -R/L} (s + R/L) I(s) = \lim_{s \to -R/L} \frac{V_s}{s} = \frac{V_s}{-R/L} = -\frac{V_s L}{R}$

    So, $I(s) = \frac{V_s}{R} \frac{1}{s} - \frac{V_s L}{R} \frac{1}{s + R/L}$

*   **Inverse Laplace Transform for $i(t)$:**
    $i(t) = \mathcal{L}^{-1}\{I(s)\} = \frac{V_s}{R} \mathcal{L}^{-1}\{\frac{1}{s}\} - \frac{V_s L}{R} \mathcal{L}^{-1}\{\frac{1}{s + R/L}\}$
    $i(t) = \frac{V_s}{R} - \frac{V_s L}{R} e^{-(R/L)t}$
    $i(t) = \frac{V_s}{R} (1 - e^{-(R/L)t})$ for $t \ge 0$.

*   **Time Constant ($\tau$):** The time constant for an RL circuit is $\tau = L/R$.
    The expression for $i(t)$ can be written as:
    $i(t) = \frac{V_s}{R} (1 - e^{-t/\tau})$

*   **Transient Response Characteristics:**
    *   At $t=0$, $i(0) = 0$ (inductor opposes instantaneous change in current).
    *   As $t \to \infty$, $i(t) \to V_s/R$ (steady state, inductor acts as a short circuit).
    *   At $t=\tau$, $i(\tau) = \frac{V_s}{R} (1 - e^{-1}) \approx 0.632 \frac{V_s}{R}$ (63.2% of final value).

*   **Voltage across Resistor $v_R(t)$:**
    $V_R(s) = I(s) \cdot R = \frac{V_s}{s + R/L}$
    $v_R(t) = \mathcal{L}^{-1}\{V_R(s)\} = V_s e^{-(R/L)t}$ for $t \ge 0$.

*   **Voltage across Inductor $v_L(t)$:**
    $V_L(s) = sL I(s) - L i(0^-) = sL \left(\frac{V_s}{s(R + sL)}\right) - 0 = \frac{V_s L}{R + sL} = \frac{V_s}{1 + R/(sL)}$
    $V_L(s) = \frac{V_s}{s(1 + L/R s)} = V_s \frac{1}{s + R/L}$
    $v_L(t) = \mathcal{L}^{-1}\{V_L(s)\} = V_s e^{-(R/L)t}$ for $t \ge 0$.

    *(Correction in derivation for $V_L(s)$)*
    From KVL: $V_s = v_R(t) + v_L(t)$
    $V_s = i(t)R + L \frac{di(t)}{dt}$
    $V_s = \frac{V_s}{R}(1 - e^{-t/\tau})R + L \frac{d}{dt} \left(\frac{V_s}{R}(1 - e^{-t/\tau})\right)$
    $V_s = V_s(1 - e^{-t/\tau}) + L \frac{V_s}{R} (0 - e^{-t/\tau}(-\frac{1}{\tau}))$
    $V_s = V_s - V_s e^{-t/\tau} + L \frac{V_s}{R} \frac{1}{\tau} e^{-t/\tau}$
    Since $\tau = L/R$, $L/R \cdot (1/\tau) = L/R \cdot (R/L) = 1$.
    $V_s = V_s - V_s e^{-t/\tau} + V_s e^{-t/\tau}$
    $V_s = V_s$ (This confirms the current expression is correct)

    Let's re-derive $v_L(t)$ using $v_L(t) = L \frac{di(t)}{dt}$:
    $i(t) = \frac{V_s}{R} (1 - e^{-t/\tau})$
    $\frac{di(t)}{dt} = \frac{V_s}{R} (0 - e^{-t/\tau} (-\frac{1}{\tau})) = \frac{V_s}{R\tau} e^{-t/\tau}$
    $v_L(t) = L \cdot \frac{V_s}{R\tau} e^{-t/\tau} = L \cdot \frac{V_s}{R(L/R)} e^{-t/\tau} = L \cdot \frac{V_s}{L} e^{-t/\tau} = V_s e^{-t/\tau}$ for $t \ge 0$.

    This is consistent with the result obtained from $V_L(s) = sL I(s) - L i(0^-)$ if we calculate it correctly.
    $I(s) = \frac{V_s}{s(R + sL)}$
    $V_L(s) = sL I(s) - L i(0^-) = sL \frac{V_s}{s(R + sL)} - 0 = \frac{V_s L}{R + sL} = \frac{V_s L}{L(s + R/L)} = \frac{V_s}{s + R/L}$
    $v_L(t) = \mathcal{L}^{-1}\{\frac{V_s}{s + R/L}\} = V_s e^{-(R/L)t}$ for $t \ge 0$.

**Summary for Series RL Step Response:**
*   $i(t) = \frac{V_s}{R} (1 - e^{-t/\tau})$
*   $v_R(t) = V_s e^{-t/\tau}$
*   $v_L(t) = V_s e^{-t/\tau}$ (This is incorrect. $v_R(t) + v_L(t) = V_s$. Let's check $v_R(t)$ again)

$V_R(s) = I(s) \cdot R = \frac{V_s}{s(R+sL)} \cdot R = \frac{V_s R}{sL(s + R/L)} = \frac{V_s}{s(s + R/L)}$
Using PFE for $V_R(s)$:
$\frac{V_s}{s(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
$A = \lim_{s \to 0} \frac{V_s}{s + R/L} = \frac{V_s}{R/L} = \frac{V_s L}{R}$
$B = \lim_{s \to -R/L} \frac{V_s}{s} = \frac{V_s}{-R/L} = -\frac{V_s L}{R}$

$V_R(s) = \frac{V_s L}{R} \frac{1}{s} - \frac{V_s L}{R} \frac{1}{s + R/L}$
$v_R(t) = \mathcal{L}^{-1}\{V_R(s)\} = \frac{V_s L}{R} - \frac{V_s L}{R} e^{-(R/L)t}$
This is also not matching $v_R(t) = i(t)R$.
Let's revisit the $I(s)$ PFE:
$I(s) = \frac{V_s}{R} \frac{1}{s} - \frac{V_s L}{R} \frac{1}{s + R/L}$
$i(t) = \frac{V_s}{R} - \frac{V_s L}{R} e^{-(R/L)t}$
$v_R(t) = i(t)R = \left(\frac{V_s}{R} - \frac{V_s L}{R} e^{-(R/L)t}\right) R = V_s - V_s e^{-(R/L)t}$

Now, let's re-calculate $V_L(s)$ using $V_L(s) = V_s - V_R(s)$:
$V_L(s) = \frac{V_s}{s} - \left(\frac{V_s L}{R} \frac{1}{s} - \frac{V_s L}{R} \frac{1}{s + R/L}\right)$
$V_L(s) = V_s \left(\frac{1}{s} - \frac{L}{R s} + \frac{L}{R (s + R/L)}\right)$
$V_L(s) = V_s \left(\frac{1}{s} (1 - \frac{L}{R}) + \frac{L}{R (s + R/L)}\right)$
This seems overly complicated. The simpler approach $v_L(t) = L \frac{di(t)}{dt}$ is better.
$v_L(t) = L \frac{d}{dt} \left(\frac{V_s}{R} (1 - e^{-t/\tau})\right) = L \frac{V_s}{R} (0 - e^{-t/\tau} (-\frac{1}{\tau})) = L \frac{V_s}{R\tau} e^{-t/\tau}$
Since $\tau = L/R$, $L/(R\tau) = L/(R(L/R)) = L/L = 1$.
$v_L(t) = V_s e^{-t/\tau}$

**Final Corrected Summary for Series RL Step Response:**
*   $i(t) = \frac{V_s}{R} (1 - e^{-t/\tau})$
*   $v_R(t) = i(t)R = V_s (1 - e^{-t/\tau})$
*   $v_L(t) = L \frac{di(t)}{dt} = V_s e^{-t/\tau}$
*   Check: $v_R(t) + v_L(t) = V_s (1 - e^{-t/\tau}) + V_s e^{-t/\tau} = V_s$ (KVL satisfied)

**(Reference: Van Valkenburg, Chapter 7: First-order Transients)**
Van Valkenburg's approach also involves converting to the s-domain and using Laplace transforms. The process is identical.

#### 2.2 Series RC Circuit

Consider a series RC circuit with a voltage source $v(t)$ and an initially uncharged capacitor ($v_C(0^-) = 0$).

**Scenario: Step Response (Switch closes at t=0, connecting a DC voltage $V_s$)**

*   **Circuit Setup:** A voltage source $V_s u(t)$ connected in series with a resistor $R$ and a capacitor $C$.
*   **Time Domain Equation:**
    Using KVL:
    $V_s u(t) = i(t)R + v_C(t)$
    Also, $i(t) = C \frac{dv_C(t)}{dt}$
    Substituting $i(t)$:
    $V_s u(t) = RC \frac{dv_C(t)}{dt} + v_C(t)$
*   **s-Domain Equation:**
    Transforming the equation:
    $\mathcal{L}\{V_s u(t)\} = \mathcal{L}\{RC \frac{dv_C(t)}{dt}\} + \mathcal{L}\{v_C(t)\}$
    $\frac{V_s}{s} = RC (sV_C(s) - v_C(0^-)) + V_C(s)$
    Since $v_C(0^-) = 0$:
    $\frac{V_s}{s} = RCsV_C(s) + V_C(s)$
    $\frac{V_s}{s} = (RCs + 1) V_C(s)$
    $V_C(s) = \frac{V_s}{s(RCs + 1)} = \frac{V_s}{RC s(s + 1/RC)}$

*   **Partial Fraction Expansion for $V_C(s)$:**
    $V_C(s) = \frac{A}{s} + \frac{B}{s + 1/RC}$
    $A = \lim_{s \to 0} s V_C(s) = \lim_{s \to 0} \frac{V_s}{s + 1/RC} = \frac{V_s}{1/RC} = V_s RC$
    $B = \lim_{s \to -1/RC} (s + 1/RC) V_C(s) = \lim_{s \to -1/RC} \frac{V_s}{s} = \frac{V_s}{-1/RC} = -V_s RC$

    So, $V_C(s) = V_s RC \frac{1}{s} - V_s RC \frac{1}{s + 1/RC}$

*   **Inverse Laplace Transform for $v_C(t)$:**
    $v_C(t) = \mathcal{L}^{-1}\{V_C(s)\} = V_s RC \mathcal{L}^{-1}\{\frac{1}{s}\} - V_s RC \mathcal{L}^{-1}\{\frac{1}{s + 1/RC}\}$
    $v_C(t) = V_s RC - V_s RC e^{-(1/RC)t}$
    $v_C(t) = V_s (1 - e^{-(1/RC)t})$ for $t \ge 0$.

*   **Time Constant ($\tau$):** The time constant for an RC circuit is $\tau = RC$.
    The expression for $v_C(t)$ can be written as:
    $v_C(t) = V_s (1 - e^{-t/\tau})$

*   **Transient Response Characteristics:**
    *   At $t=0$, $v_C(0) = 0$ (capacitor opposes instantaneous change in voltage).
    *   As $t \to \infty$, $v_C(t) \to V_s$ (steady state, capacitor acts as an open circuit).
    *   At $t=\tau$, $v_C(\tau) = V_s (1 - e^{-1}) \approx 0.632 V_s$ (63.2% of final value).

*   **Current $i(t)$:**
    $I(s) = \frac{V_s}{s} - V_C(s) / R$  (From KVL: $I(s) = (V_s/s - V_C(s))/R$)
    $I(s) = \frac{1}{R} \left(\frac{V_s}{s} - \frac{V_s}{s(1 + sRC)}\right) = \frac{1}{R} \left(\frac{V_s}{s} - V_s \left(\frac{1}{s} - \frac{RC}{1+sRC}\right)\right)$
    $I(s) = \frac{1}{R} \left(\frac{V_s}{s} - \frac{V_s}{s} + \frac{V_s RC}{1+sRC}\right) = \frac{1}{R} \frac{V_s RC}{1+sRC} = \frac{V_s C}{1+sRC}$
    $I(s) = \frac{V_s C}{RC(s + 1/RC)} = \frac{V_s}{R(s + 1/RC)}$

    $i(t) = \mathcal{L}^{-1}\{I(s)\} = \frac{V_s}{R} e^{-t/(RC)}$ for $t \ge 0$.
    $i(t) = \frac{V_s}{R} e^{-t/\tau}$

    *(Alternative using $i(t) = C \frac{dv_C(t)}{dt}$)*
    $v_C(t) = V_s (1 - e^{-t/\tau})$
    $\frac{dv_C(t)}{dt} = V_s (0 - e^{-t/\tau} (-\frac{1}{\tau})) = \frac{V_s}{\tau} e^{-t/\tau}$
    $i(t) = C \frac{V_s}{\tau} e^{-t/\tau} = C \frac{V_s}{RC} e^{-t/\tau} = \frac{V_s}{R} e^{-t/\tau}$

**Summary for Series RC Step Response:**
*   $v_C(t) = V_s (1 - e^{-t/\tau})$
*   $i(t) = \frac{V_s}{R} e^{-t/\tau}$
*   $v_R(t) = i(t)R = \left(\frac{V_s}{R} e^{-t/\tau}\right) R = V_s e^{-t/\tau}$
*   Check: $v_R(t) + v_C(t) = V_s e^{-t/\tau} + V_s (1 - e^{-t/\tau}) = V_s$ (KVL satisfied)

**(Reference: Ravish R Singh, Chapter 10: Transient Analysis of Electrical Circuits)**
Ravish R Singh's text also provides a thorough treatment of RL and RC circuits using Laplace transforms, detailing the s-domain representations and PFE methods.

---

#### 2.3 Parallel RL Circuit

Consider a parallel RL circuit with a current source $i(t)$ and initially unenergized inductor ($i_L(0^-) = 0$).

**Scenario: Step Response (Switch closes at t=0, connecting a DC current source $I_s$)**

*   **Circuit Setup:** A current source $I_s u(t)$ connected in parallel with a resistor $R$ and an inductor $L$.
*   **Time Domain Equation:**
    Using Kirchhoff's Current Law (KCL) at the top node:
    $i_s(t) = i_R(t) + i_L(t)$
    $I_s u(t) = \frac{v(t)}{R} + \frac{1}{L} \int_{0}^{t} v(\tau) d\tau + i_L(0^-)$
    Since $i_L(0^-) = 0$:
    $I_s u(t) = \frac{v(t)}{R} + \frac{1}{L} \int_{0}^{t} v(\tau) d\tau$
    Differentiating with respect to time:
    $I_s \delta(t) = \frac{1}{R} \frac{dv(t)}{dt} + \frac{1}{L} v(t)$ (Note: $I_s \delta(t)$ is only valid if the source is activated at t=0, if it's $I_s u(t)$ then its derivative is $I_s \delta(t)$)
    If we consider $I_s$ as a constant source from $t=0$ onwards, the equation is:
    $I_s = \frac{v(t)}{R} + \frac{1}{L} \int_{0}^{t} v(\tau) d\tau$
*   **s-Domain Equation:**
    Transforming the equation:
    $\mathcal{L}\{I_s\} = \mathcal{L}\{\frac{v(t)}{R}\} + \mathcal{L}\{\frac{1}{L} \int_{0}^{t} v(\tau) d\tau\}$
    $\frac{I_s}{s} = \frac{V(s)}{R} + \frac{1}{L} \frac{V(s)}{s}$
    $\frac{I_s}{s} = V(s) \left(\frac{1}{R} + \frac{1}{Ls}\right)$
    $\frac{I_s}{s} = V(s) \left(\frac{Ls + R}{RLs}\right)$
    $V(s) = \frac{I_s}{s} \frac{RLs}{Ls + R} = \frac{I_s RL}{Ls + R} = \frac{I_s R}{s + R/L}$

*   **Inverse Laplace Transform for $v(t)$:**
    $v(t) = \mathcal{L}^{-1}\{V(s)\} = I_s R \mathcal{L}^{-1}\{\frac{1}{s + R/L}\}$
    $v(t) = I_s R e^{-(R/L)t}$ for $t \ge 0$.

*   **Time Constant ($\tau$):** $\tau = L/R$.
    $v(t) = I_s R e^{-t/\tau}$

*   **Transient Response Characteristics:**
    *   At $t=0$, $v(0) = I_s R$. This is the voltage across the resistor if all current flowed through it.
    *   As $t \to \infty$, $v(t) \to 0$. The inductor acts as a short circuit, shorting out the voltage source. This is expected for a passive circuit driven by a DC current source in parallel. The voltage across a parallel branch with a short circuit will be zero.
    *   At $t=\tau$, $v(\tau) = I_s R e^{-1} \approx 0.368 I_s R$.

*   **Current through Resistor $i_R(t)$:**
    $I_R(s) = V(s) / R = \frac{1}{R} \frac{I_s R}{s + R/L} = \frac{I_s}{s + R/L}$
    $i_R(t) = \mathcal{L}^{-1}\{I_R(s)\} = I_s e^{-(R/L)t}$ for $t \ge 0$.
    $i_R(t) = I_s e^{-t/\tau}$

*   **Current through Inductor $i_L(t)$:**
    $I_L(s) = V(s) / (sL) = \frac{1}{sL} \frac{I_s R}{s + R/L} = \frac{I_s R}{Ls(s + R/L)}$
    Using PFE for $I_L(s)$:
    $\frac{I_s R}{Ls(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
    $A = \lim_{s \to 0} s I_L(s) = \lim_{s \to 0} \frac{I_s R}{s + R/L} = \frac{I_s R}{R/L} = I_s L$
    $B = \lim_{s \to -R/L} (s + R/L) I_L(s) = \lim_{s \to -R/L} \frac{I_s R}{s} = \frac{I_s R}{-R/L} = -I_s L$
    So, $I_L(s) = \frac{I_s L}{s} - \frac{I_s L}{s + R/L}$
    $i_L(t) = \mathcal{L}^{-1}\{I_L(s)\} = I_s L \cdot 1 - I_s L e^{-(R/L)t}$
    $i_L(t) = I_s (1 - e^{-t/\tau})$ for $t \ge 0$.

**Summary for Parallel RL Step Response:**
*   $v(t) = I_s R e^{-t/\tau}$
*   $i_R(t) = I_s e^{-t/\tau}$
*   $i_L(t) = I_s (1 - e^{-t/\tau})$
*   Check: $i_R(t) + i_L(t) = I_s e^{-t/\tau} + I_s (1 - e^{-t/\tau}) = I_s$ (KCL satisfied)

**(Reference: Suresh Kumar, Chapter 6: Transients in RL and RC Circuits)**
Suresh Kumar's book provides detailed step-by-step procedures for analyzing transient behavior using Laplace transforms for both series and parallel combinations.

---

#### 2.4 Parallel RC Circuit

Consider a parallel RC circuit with a current source $i(t)$ and initially uncharged capacitor ($v_C(0^-) = 0$).

**Scenario: Step Response (Switch closes at t=0, connecting a DC current source $I_s$)**

*   **Circuit Setup:** A current source $I_s u(t)$ connected in parallel with a resistor $R$ and a capacitor $C$.
*   **Time Domain Equation:**
    Using KCL at the top node:
    $i_s(t) = i_R(t) + i_C(t)$
    $I_s u(t) = \frac{v(t)}{R} + C \frac{dv(t)}{dt}$
*   **s-Domain Equation:**
    Transforming the equation:
    $\mathcal{L}\{I_s u(t)\} = \mathcal{L}\{\frac{v(t)}{R}\} + \mathcal{L}\{C \frac{dv(t)}{dt}\}$
    $\frac{I_s}{s} = \frac{V(s)}{R} + C (sV(s) - v(0^-))$
    Since $v(0^-) = 0$:
    $\frac{I_s}{s} = \frac{V(s)}{R} + CsV(s)$
    $\frac{I_s}{s} = V(s) \left(\frac{1}{R} + Cs\right)$
    $\frac{I_s}{s} = V(s) \left(\frac{1 + RCs}{R}\right)$
    $V(s) = \frac{I_s}{s} \frac{R}{1 + RCs} = \frac{I_s R}{s(1 + RCs)} = \frac{I_s R}{RC s(s + 1/RC)}$

*   **Partial Fraction Expansion for $V(s)$:**
    $V(s) = \frac{A}{s} + \frac{B}{s + 1/RC}$
    $A = \lim_{s \to 0} s V(s) = \lim_{s \to 0} \frac{I_s R}{1 + RCs} = I_s R$
    $B = \lim_{s \to -1/RC} (s + 1/RC) V(s) = \lim_{s \to -1/RC} \frac{I_s R}{s} = \frac{I_s R}{-1/RC} = -I_s R C^2$
    *(Correction in PFE calculation for B)*
    $B = \lim_{s \to -1/RC} (s + 1/RC) \frac{I_s R}{s(1 + RCs)} = \lim_{s \to -1/RC} (s + 1/RC) \frac{I_s R}{sRC(s + 1/RC)}$
    $B = \frac{I_s R}{RC(-1/RC)} = \frac{I_s R}{-R} = -I_s$

    So, $V(s) = I_s R \frac{1}{s} - I_s \frac{1}{s + 1/RC}$

*   **Inverse Laplace Transform for $v(t)$:**
    $v(t) = \mathcal{L}^{-1}\{V(s)\} = I_s R \mathcal{L}^{-1}\{\frac{1}{s}\} - I_s \mathcal{L}^{-1}\{\frac{1}{s + 1/RC}\}$
    $v(t) = I_s R - I_s e^{-(1/RC)t}$ for $t \ge 0$.

*   **Time Constant ($\tau$):** $\tau = RC$.
    $v(t) = I_s R (1 - e^{-t/\tau})$

*   **Transient Response Characteristics:**
    *   At $t=0$, $v(0) = 0$ (capacitor opposes instantaneous change in voltage).
    *   As $t \to \infty$, $v(t) \to I_s R$. The inductor acts as a short circuit. However, in a parallel RC circuit, the inductor is not present. The capacitor acts as an open circuit in DC steady state. The current source $I_s$ will eventually flow through the resistor $R$, making the voltage $V_s$.
    *   At $t=\tau$, $v(\tau) = I_s R (1 - e^{-1}) \approx 0.632 I_s R$ (63.2% of final value).

*   **Current through Resistor $i_R(t)$:**
    $I_R(s) = V(s) / R = \frac{1}{R} \left(I_s R \frac{1}{s} - I_s \frac{1}{s + 1/RC}\right)$
    $I_R(s) = I_s \frac{1}{s} - \frac{I_s}{s + 1/RC}$
    $i_R(t) = \mathcal{L}^{-1}\{I_R(s)\} = I_s - I_s e^{-t/(RC)}$ for $t \ge 0$.
    $i_R(t) = I_s (1 - e^{-t/\tau})$

*   **Current through Capacitor $i_C(t)$:**
    $I_C(s) = Cs V(s) = Cs \left(\frac{I_s}{s} - \frac{I_s}{s + 1/RC}\right)$
    $I_C(s) = I_s C - \frac{I_s Cs}{s + 1/RC}$
    $I_C(s) = I_s C - I_s C \frac{s}{s + 1/RC}$
    $I_C(s) = I_s C - I_s C \frac{s + 1/RC - 1/RC}{s + 1/RC}$
    $I_C(s) = I_s C - I_s C \left(1 - \frac{1/RC}{s + 1/RC}\right)$
    $I_C(s) = I_s C - I_s C + I_s C \frac{1/RC}{s + 1/RC} = \frac{I_s}{R} \frac{1}{s + 1/RC}$

    $i_C(t) = \mathcal{L}^{-1}\{I_C(s)\} = \frac{I_s}{R} e^{-t/(RC)}$ for $t \ge 0$.
    $i_C(t) = \frac{I_s}{R} e^{-t/\tau}$

**Summary for Parallel RC Step Response:**
*   $v(t) = I_s R (1 - e^{-t/\tau})$
*   $i_R(t) = I_s (1 - e^{-t/\tau})$
*   $i_C(t) = \frac{I_s}{R} e^{-t/\tau}$
*   Check: $i_R(t) + i_C(t) = I_s (1 - e^{-t/\tau}) + \frac{I_s}{R} e^{-t/\tau}$ (Something is not right here, the $\frac{1}{R}$ factor should not be there)

Let's re-check $i_C(t)$ using $i_C(t) = C \frac{dv(t)}{dt}$.
$v(t) = I_s R (1 - e^{-t/\tau})$
$\frac{dv(t)}{dt} = I_s R (0 - e^{-t/\tau} (-\frac{1}{\tau})) = I_s R \frac{1}{\tau} e^{-t/\tau}$
$i_C(t) = C \cdot I_s R \frac{1}{\tau} e^{-t/\tau} = C \cdot I_s R \frac{1}{RC} e^{-t/\tau} = I_s e^{-t/\tau}$

This implies that $i_R(t) + i_C(t) = I_s (1 - e^{-t/\tau}) + I_s e^{-t/\tau} = I_s$. This is correct.
So, my earlier derivation for $I_C(s)$ must have had an error.

Let's re-derive $I_C(s)$ using $I_C(s) = C s V(s)$:
$V(s) = \frac{I_s R}{s(1 + RCs)}$
$I_C(s) = Cs \cdot \frac{I_s R}{s(1 + RCs)} = \frac{Cs I_s R}{1 + RCs} = \frac{Cs I_s R}{RC(s + 1/RC)} = \frac{s I_s}{s + 1/RC}$
$I_C(s) = \frac{s + 1/RC - 1/RC}{s + 1/RC} I_s = I_s \left(1 - \frac{1/RC}{s + 1/RC}\right)$
$i_C(t) = I_s \mathcal{L}^{-1}\{1\} - I_s \mathcal{L}^{-1}\{\frac{1/RC}{s + 1/RC}\}$
$i_C(t) = I_s \delta(t) - I_s e^{-t/(RC)}$.
This involves an impulse function. This indicates a potential issue with the Laplace domain representation when dealing with current division from a current source.

Let's use the simpler KCL equation directly in the s-domain with admittances.
The current source $I_s$ splits into $I_R(s)$ and $I_C(s)$.
$I_s = I_R(s) + I_C(s)$
The voltage $V(s)$ is the same across both parallel branches.
$I_R(s) = V(s) G_R = V(s)/R$
$I_C(s) = V(s) G_C = V(s) (Cs)$
So, $I_s = V(s)/R + V(s) Cs = V(s) (1/R + Cs)$
$V(s) = \frac{I_s}{1/R + Cs} = \frac{I_s R}{1 + RCs}$
This matches the earlier $V(s)$ derivation for parallel RC.

Now, let's find $I_C(s)$ using this $V(s)$:
$I_C(s) = V(s) Cs = \frac{I_s R}{1 + RCs} Cs = \frac{I_s R Cs}{RC(s + 1/RC)} = \frac{s I_s}{s + 1/RC}$
This is the same $I_C(s)$ as before, which led to $I_s \delta(t) - I_s e^{-t/(RC)}$.
The impulse term arises from the derivative of the step current in the KCL equation in the time domain. $I_s u(t) = \frac{v(t)}{R} + C \frac{dv(t)}{dt}$. Taking Laplace: $\frac{I_s}{s} = \frac{V(s)}{R} + CsV(s)$. This is correct.

Let's re-examine the PFE for $I_C(s) = \frac{s I_s}{s + 1/RC}$.
This expression can be directly inverse transformed:
$\mathcal{L}^{-1}\{\frac{s I_s}{s + 1/RC}\} = I_s \mathcal{L}^{-1}\{\frac{s + 1/RC - 1/RC}{s + 1/RC}\} = I_s \mathcal{L}^{-1}\{1 - \frac{1/RC}{s + 1/RC}\}$
$= I_s \delta(t) - I_s e^{-t/(RC)}$.
The impulse at $t=0$ in the current $i_C(t)$ is due to the instantaneous displacement of charge on the capacitor at the moment the current source is applied.

**Final Corrected Summary for Parallel RC Step Response:**
*   $v(t) = I_s R (1 - e^{-t/\tau})$
*   $i_R(t) = I_s (1 - e^{-t/\tau})$
*   $i_C(t) = I_s e^{-t/\tau}$
*   Check: $i_R(t) + i_C(t) = I_s (1 - e^{-t/\tau}) + I_s e^{-t/\tau} = I_s$ (KCL satisfied)

**(Reference: A Sudhakar, Shyammohan S Palli, Chapter 11: Transient Analysis)**
Sudhakar and Palli's book covers transient analysis extensively, explaining the behavior of RL and RC circuits in both series and parallel configurations using Laplace transforms.

---

### 3. Initial Conditions and Circuit Analysis

*   **Series RL:** $i(0^-) = 0$ for an unenergized inductor. The s-domain equivalent of an inductor becomes $sL$ with a series voltage source $Li(0^-)$.
*   **Series RC:** $v(0^-) = 0$ for an uncharged capacitor. The s-domain equivalent of a capacitor becomes $1/(sC)$ with a series voltage source $v(0^-)/s$.
*   **Parallel RL:** $i(0^-) = 0$ for an unenergized inductor. The current source $I(s)$ splits into $I_R(s) = V(s)/R$ and $I_L(s) = V(s)/(sL)$. Alternatively, the inductor can be seen as an impedance $sL$ in parallel.
*   **Parallel RC:** $v(0^-) = 0$ for an uncharged capacitor. The current source $I(s)$ splits into $I_R(s) = V(s)/R$ and $I_C(s) = V(s) Cs$. Alternatively, the capacitor can be seen as an admittance $Cs$ in parallel.

**Important Point:** The choice of initial conditions ($i_L(0^-)$ or $v_C(0^-)$) is critical for obtaining the correct transient response. For step response problems, it's common to assume initial conditions are zero unless otherwise specified.

---

### 4. Practice Questions and Exercises

**Question 1:**
A series RL circuit consists of a $10 \Omega$ resistor and a $5 H$ inductor. A DC voltage of $20 V$ is applied to the circuit at $t=0$ by closing a switch. Calculate the current $i(t)$ through the circuit and the voltage $v_R(t)$ across the resistor for $t \ge 0$. Determine the time constant of the circuit.

**Solution 1:**
*   $\tau = L/R = 5 H / 10 \Omega = 0.5 s$.
*   $V_s = 20 V$, $R = 10 \Omega$.
*   $i(t) = \frac{V_s}{R} (1 - e^{-t/\tau}) = \frac{20}{10} (1 - e^{-t/0.5}) = 2 (1 - e^{-2t}) A$.
*   $v_R(t) = i(t)R = 2 (1 - e^{-2t}) \times 10 = 20 (1 - e^{-2t}) V$.

**Question 2:**
In a series RC circuit, $R = 1 k\Omega$ and $C = 10 \mu F$. The circuit is connected to a $100 V$ DC source at $t=0$. Find the voltage $v_C(t)$ across the capacitor and the current $i(t)$ flowing in the circuit for $t \ge 0$.

**Solution 2:**
*   $\tau = RC = 1000 \Omega \times 10 \times 10^{-6} F = 0.01 s$.
*   $V_s = 100 V$, $R = 1 k\Omega$.
*   $v_C(t) = V_s (1 - e^{-t/\tau}) = 100 (1 - e^{-t/0.01}) = 100 (1 - e^{-100t}) V$.
*   $i(t) = \frac{V_s}{R} e^{-t/\tau} = \frac{100 V}{1000 \Omega} e^{-t/0.01} = 0.1 e^{-100t} A$.

**Question 3:**
A DC current source of $5 A$ is applied in parallel with a $20 \Omega$ resistor and a $2 H$ inductor at $t=0$. Assuming initial conditions are zero, find the current $i_L(t)$ through the inductor and the voltage $v(t)$ across the parallel combination.

**Solution 3:**
*   $\tau = L/R = 2 H / 20 \Omega = 0.1 s$.
*   $I_s = 5 A$, $R = 20 \Omega$.
*   $v(t) = I_s R e^{-t/\tau} = 5 A \times 20 \Omega \times e^{-t/0.1} = 100 e^{-10t} V$.
*   $i_L(t) = I_s (1 - e^{-t/\tau}) = 5 (1 - e^{-t/0.1}) = 5 (1 - e^{-10t}) A$.

**Question 4:**
A parallel RC circuit has a $10 k\Omega$ resistor and a $0.1 \mu F$ capacitor. A DC current source of $10 mA$ is applied at $t=0$. Determine the voltage $v(t)$ across the parallel branches and the current $i_C(t)$ through the capacitor for $t \ge 0$.

**Solution 4:**
*   $\tau = RC = 10 \times 10^3 \Omega \times 0.1 \times 10^{-6} F = 1 \times 10^{-3} s = 1 ms$.
*   $I_s = 10 mA = 0.01 A$, $R = 10 k\Omega = 10000 \Omega$.
*   $v(t) = I_s R (1 - e^{-t/\tau}) = 0.01 A \times 10000 \Omega \times (1 - e^{-t/0.001})$
    $v(t) = 100 (1 - e^{-1000t}) V$.
*   $i_C(t) = I_s e^{-t/\tau} = 0.01 A \times e^{-t/0.001} = 0.01 e^{-1000t} A$.

---

### 5. Important Points to Remember

*   **Laplace Transform:** A powerful tool to convert differential equations into algebraic equations in the s-domain.
*   **s-Domain Equivalents:** Understand the impedance of R, L, and C in the s-domain and how to include initial conditions (series voltage sources).
*   **Time Constant ($\tau$):**
    *   For RL circuits, $\tau = L/R$.
    *   For RC circuits, $\tau = RC$.
    *   The time constant dictates the speed of the transient response. After $5\tau$, the circuit is considered to have reached steady state.
*   **Circuit Analysis Techniques:** Kirchhoff's Laws (KVL, KCL), voltage division, current division, nodal analysis, and mesh analysis are all applicable in the s-domain.
*   **Partial Fraction Expansion:** Essential for converting complex s-domain functions back to the time domain.
*   **Initial Conditions:** Crucial for accurate transient analysis. They represent the energy stored in inductors and capacitors at the instant the transient begins.
*   **Step Response:** The response of a circuit to a sudden application of a constant DC voltage or current.

---

### 6. Alignment with Course Outcomes

*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks.** While this module focuses on transients, the understanding of impedance and network reduction techniques in the s-domain indirectly supports applying circuit theorems.
*   **CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.** This is the core of this module. We transform dynamic circuits into the s-domain, solve them algebraically, and then transform back to find the time-domain response.
*   **CO3: Solve series and parallel resonant circuits.** Understanding transient behavior of RL and RC circuits is a prerequisite for understanding the frequency response and resonance in RLC circuits.
*   **CO4: Analyse three-phase networks...** Not directly covered in this review module.
*   **CO5: Describe two-port networks...** Not directly covered in this review module.
*   **CO6: Explain the steady-state behaviour of coupled circuits...** This module deals with transient behavior, which is the behavior *before* steady state is reached. Understanding transients provides context for steady-state analysis.

This module directly addresses **CO2** and lays the groundwork for understanding the behavior of circuits in general, which indirectly supports **CO1**. The knowledge gained here is foundational for subsequent modules.

---

This concludes the review of the transient response of simple series and parallel RL and RC circuits using Laplace transforms. Remember to practice applying these concepts to various circuit configurations and source types.
