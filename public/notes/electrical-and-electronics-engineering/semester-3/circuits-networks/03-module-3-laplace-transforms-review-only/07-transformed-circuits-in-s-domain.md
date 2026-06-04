---
title: "transformed circuits 
in s-domain"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad2"
status: "completed"
scrapedAt: "2026-05-23T16:11:36.918Z"
---
# CIRCUITS & NETWORKS: Module 3: Laplace Transforms (Review Only) - Transformed Circuits in s-Domain

This module focuses on the powerful technique of using Laplace transforms to simplify the analysis of dynamic electric circuits. By transforming circuits from the time domain to the 's-domain' (or Laplace domain), differential equations that describe circuit behavior become algebraic equations, making them significantly easier to solve. This is particularly useful for circuits containing inductors and capacitors, which introduce time-dependent behavior.

## 1. Introduction to the s-Domain

The Laplace transform is a mathematical tool that converts a function of time, $f(t)$, into a function of complex frequency, $s$, where $s = \sigma + j\omega$. The general form of the Laplace transform is:

$$F(s) = \mathcal{L}\{f(t)\} = \int_{0^{-}}^{\infty} f(t) e^{-st} dt$$

**Key Concepts:**

*   **Complex Frequency (s):** $s$ is a complex variable that encapsulates both damping ($\sigma$) and oscillation ($\omega$).
*   **s-Domain:** The domain where circuit analysis is performed using Laplace transforms.
*   **Time Domain:** The traditional domain where circuit analysis is performed using functions of time, $t$.

**Why use the s-Domain?**

*   **Simplification of Differential Equations:** Differential and integral operations in the time domain become algebraic operations (multiplication and division) in the s-domain. This significantly simplifies the process of solving circuit equations.
*   **Unified Approach:** It provides a unified method for analyzing circuits with different types of sources (DC, AC, transients) and components.
*   **Handling Initial Conditions:** Laplace transforms naturally incorporate initial conditions of capacitors and inductors, which are crucial for solving transient behavior.

**References:**

*   **Van Valkenburg, "Network Analysis":** Chapters often dedicated to transient analysis and Laplace transform applications.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Detailed explanations of Laplace transforms and their use in circuit analysis.
*   **Suresh Kumar, "Electric Circuits & Networks":** Coverage of transient analysis and Laplace transform techniques.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Comprehensive treatment of Laplace transforms for circuit problem-solving.

---

## 2. Transforming Circuit Elements to the s-Domain

The core of s-domain analysis lies in representing resistors, inductors, and capacitors, along with their associated voltages and currents, in the s-domain.

### 2.1 Resistor

The voltage-current relationship for a resistor in the time domain is $v(t) = R i(t)$. Taking the Laplace transform of both sides:

$$\mathcal{L}\{v(t)\} = \mathcal{L}\{R i(t)\}$$
$$V(s) = R \mathcal{L}\{i(t)\} = R I(s)$$

**s-Domain Representation:** A resistor with resistance $R$ in the time domain is represented as an impedance $Z_R(s) = R$ in the s-domain.

**Important Point:** The impedance of a resistor is independent of $s$ and is purely real.

### 2.2 Inductor

The voltage-current relationship for an inductor in the time domain is $v(t) = L \frac{di(t)}{dt}$. Taking the Laplace transform:

$$\mathcal{L}\{v(t)\} = \mathcal{L}\{L \frac{di(t)}{dt}\}$$
$$V(s) = L \mathcal{L}\{\frac{di(t)}{dt}\}$$

Using the Laplace transform property $\mathcal{L}\{\frac{df(t)}{dt}\} = sF(s) - f(0^{-})$:

$$V(s) = L [sI(s) - i(0^{-})]$$
$$V(s) = sLI(s) - Li(0^{-})$$

Where $i(0^{-})$ is the initial current through the inductor before $t=0$.

**s-Domain Representation:** An inductor with inductance $L$ is represented as an impedance $Z_L(s) = sL$.

**Source Transformation for Initial Conditions:** The term $Li(0^{-})$ can be represented as a voltage source in series with the inductor's impedance.
*   **Voltage Source:** $Li(0^{-})$ in series with $sL$.
*   **Current Source:** Alternatively, it can be represented as a current source of value $i(0^{-})/s$ in parallel with $sL$.

**Important Point:** The impedance of an inductor is $sL$, and it has an initial condition that can be represented by a series voltage source.

### 2.3 Capacitor

The voltage-current relationship for a capacitor in the time domain is $i(t) = C \frac{dv(t)}{dt}$. An alternative form is $v(t) = \frac{1}{C} \int_{0}^{t} i(\tau) d\tau + v(0^{-})$. Taking the Laplace transform of the integral form:

$$\mathcal{L}\{v(t)\} = \mathcal{L}\{\frac{1}{C} \int_{0}^{t} i(\tau) d\tau\} + \mathcal{L}\{v(0^{-})\}$$

Using the Laplace transform property $\mathcal{L}\{\int_{0}^{t} f(\tau) d\tau\} = \frac{F(s)}{s}$:

$$V(s) = \frac{1}{C} \frac{I(s)}{s} + \frac{v(0^{-})}{s}$$
$$V(s) = \frac{I(s)}{sC} + \frac{v(0^{-})}{s}$$

Where $v(0^{-})$ is the initial voltage across the capacitor before $t=0$.

**s-Domain Representation:** A capacitor with capacitance $C$ is represented as an impedance $Z_C(s) = \frac{1}{sC}$.

**Source Transformation for Initial Conditions:** The term $\frac{v(0^{-})}{s}$ can be represented as a voltage source in series with the capacitor's impedance.
*   **Voltage Source:** $\frac{v(0^{-})}{s}$ in series with $\frac{1}{sC}$.
*   **Current Source:** Alternatively, it can be represented as a current source of value $Cv(0^{-})$ in parallel with $\frac{1}{sC}$.

**Important Point:** The impedance of a capacitor is $\frac{1}{sC}$, and it has an initial condition that can be represented by a series voltage source.

---

## 3. Transformed Circuit Analysis in the s-Domain

Once circuit elements are transformed into their s-domain impedances, the entire circuit can be analyzed using techniques similar to DC circuit analysis, but now with impedances involving the complex variable 's'.

**CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.**

### 3.1 Impedance and Admittance

*   **Impedance ($Z(s)$):** The ratio of voltage to current in the s-domain. Units are Ohms ($\Omega$).
    *   $Z_R(s) = R$
    *   $Z_L(s) = sL$
    *   $Z_C(s) = \frac{1}{sC}$

*   **Admittance ($Y(s)$):** The reciprocal of impedance, representing the ease with which current flows. Units are Siemens (S).
    *   $Y_R(s) = \frac{1}{R}$
    *   $Y_L(s) = \frac{1}{sL}$
    *   $Y_C(s) = sC$

### 3.2 Series and Parallel Combinations

The rules for combining impedances in series and parallel are the same as for resistors in DC circuits.

*   **Series Combination:** $Z_{eq}(s) = Z_1(s) + Z_2(s) + \dots + Z_n(s)$
*   **Parallel Combination:** $\frac{1}{Z_{eq}(s)} = \frac{1}{Z_1(s)} + \frac{1}{Z_2(s)} + \dots + \frac{1}{Z_n(s)}$
    Or, for two parallel impedances: $Z_{eq}(s) = \frac{Z_1(s) Z_2(s)}{Z_1(s) + Z_2(s)}$

### 3.3 Applying Circuit Theorems

All standard circuit theorems (Ohm's Law, Kirchhoff's Voltage Law (KVL), Kirchhoff's Current Law (KCL), Superposition, Thevenin's Theorem, Norton's Theorem) are applicable in the s-domain, treating impedances as generalized resistances.

**Example: Thevenin's Theorem in the s-Domain**

To find the Thevenin equivalent of a circuit in the s-domain:

1.  **$V_{Th}(s)$ (Thevenin Voltage):** Calculate the open-circuit voltage across the terminals of interest in the s-domain.
2.  **$Z_{Th}(s)$ (Thevenin Impedance):**
    *   Turn off all independent sources (voltage sources become open circuits, current sources become short circuits).
    *   Calculate the equivalent impedance seen from the terminals of interest.

The circuit can then be represented by a voltage source $V_{Th}(s)$ in series with an impedance $Z_{Th}(s)$.

**References:**

*   **Van Valkenburg, "Network Analysis":** Chapters on network theorems and their application to AC circuits, which can be extended to the s-domain.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Provides detailed examples of applying Thevenin and Norton theorems in the s-domain.

---

## 4. Solving Transformed Circuits

After transforming the circuit and applying circuit theorems, we obtain an algebraic equation in the s-domain, typically in the form of a ratio of polynomials in $s$.

$$I(s) = \frac{V_{source}(s)}{Z_{total}(s)}$$

The next step is to find the inverse Laplace transform of this $I(s)$ to obtain the current $i(t)$ in the time domain. This often involves techniques like:

*   **Partial Fraction Expansion:** Decomposing complex rational functions of $s$ into simpler terms whose inverse Laplace transforms are known.
*   **Table of Laplace Transforms:** Using standard pairs of Laplace transforms.

**CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.**

**Example: Series RL Circuit with a Step Input**

Consider a series RL circuit with a DC voltage source $V$ applied at $t=0$. The voltage source in the time domain is $v(t) = Vu(t)$, where $u(t)$ is the unit step function.

*   **Time Domain Equation:** $v(t) = Ri(t) + L\frac{di(t)}{dt}$

*   **s-Domain Transformation:**
    *   $V(s) = \frac{V}{s}$ (Laplace transform of $Vu(t)$)
    *   $R$ (Impedance of resistor)
    *   $sL - Li(0^{-})$ (Impedance of inductor with initial current $i(0^{-})$). Assuming the circuit is initially relaxed, $i(0^{-}) = 0$. So, $sL$.

*   **Transformed Circuit Equation:**
    $$\frac{V}{s} = RI(s) + sLI(s)$$
    $$\frac{V}{s} = (R + sL)I(s)$$

*   **Solving for I(s):**
    $$I(s) = \frac{V}{s(R + sL)}$$
    $$I(s) = \frac{V}{L s(s + \frac{R}{L})}$$

*   **Partial Fraction Expansion:**
    $$I(s) = \frac{A}{s} + \frac{B}{s + \frac{R}{L}}$$
    Multiply by $s(s + \frac{R}{L})$:
    $$V = A(s + \frac{R}{L}) + Bs$$

    To find A, set $s=0$: $V = A(\frac{R}{L}) \implies A = \frac{VL}{R}$
    To find B, set $s=-\frac{R}{L}$: $V = B(-\frac{R}{L}) \implies B = -\frac{VL}{R}$

    So, $$I(s) = \frac{VL/R}{s} - \frac{VL/R}{s + \frac{R}{L}}$$

*   **Inverse Laplace Transform:**
    Using the standard Laplace transform pairs:
    $\mathcal{L}^{-1}\{\frac{1}{s}\} = u(t)$
    $\mathcal{L}^{-1}\{\frac{1}{s+a}\} = e^{-at}u(t)$

    $$i(t) = \frac{VL}{R} u(t) - \frac{VL}{R} e^{-\frac{R}{L}t} u(t)$$
    $$i(t) = \frac{V}{R} (1 - e^{-\frac{R}{L}t}) u(t)$$

**Important Point:** The time-domain solution obtained through s-domain analysis naturally includes the transient and steady-state responses.

---

## 5. Initial Conditions and Their Impact

The presence of initial conditions (initial current through inductors and initial voltage across capacitors) significantly affects the s-domain representation of these elements and, consequently, the overall circuit solution.

*   **Voltage Source Representation:** Initial conditions are typically represented as series voltage sources.
    *   Inductor: $Li(0^{-})$
    *   Capacitor: $\frac{v(0^{-})}{s}$

*   **Current Source Representation (Parallel):** Alternatively, initial conditions can be represented as parallel current sources.
    *   Inductor: $\frac{i(0^{-})}{s}$ in parallel with $sL$.
    *   Capacitor: $Cv(0^{-})$ in parallel with $\frac{1}{sC}$.

**CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.**

**Example: Series RC Circuit with Initial Capacitor Voltage**

Consider a series RC circuit with a DC voltage source $V$ applied at $t=0$, and an initial voltage $V_0$ across the capacitor.

*   **Time Domain Equation:** $v(t) = Ri(t) + \frac{1}{C} \int_{0}^{t} i(\tau) d\tau + v(0^{-})$

*   **s-Domain Transformation:**
    *   $V(s) = \frac{V}{s}$
    *   $R$
    *   $\frac{I(s)}{sC} + \frac{V_0}{s}$ (Impedance of capacitor with initial voltage $V_0$)

*   **Transformed Circuit Equation:**
    $$\frac{V}{s} = RI(s) + \frac{I(s)}{sC} + \frac{V_0}{s}$$
    $$\frac{V - V_0}{s} = I(s) (R + \frac{1}{sC})$$
    $$\frac{V - V_0}{s} = I(s) (\frac{sRC + 1}{sC})$$

*   **Solving for I(s):**
    $$I(s) = \frac{V - V_0}{s} \times \frac{sC}{sRC + 1}$$
    $$I(s) = \frac{C(V - V_0)}{sRC + 1}$$
    $$I(s) = \frac{V - V_0}{RC(s + \frac{1}{RC})}$$

*   **Inverse Laplace Transform:**
    $$i(t) = \frac{V - V_0}{RC} e^{-\frac{1}{RC}t} u(t)$$

**Observation:** If $V_0 = V$, then $i(t) = 0$, which is expected as the capacitor is already charged to the source voltage. If $V_0 = 0$, we get the standard result for an initially uncharged capacitor.

---

## 6. Practice Questions and Exercises

**Instructions:** For each question, transform the circuit into the s-domain, solve for the required variable, and provide the time-domain response. Assume all circuits are initially relaxed unless stated otherwise.

**Question 1:**
A series RL circuit with $R = 10 \, \Omega$ and $L = 0.1 \, H$ is connected to a DC voltage source of $50 \, V$ at $t=0$. Find the current $i(t)$ in the circuit.

**Question 2:**
A series RC circuit with $R = 100 \, \Omega$ and $C = 10 \, \mu F$ is connected to a DC voltage source of $10 \, V$ at $t=0$. Find the voltage across the capacitor $v_C(t)$.

**Question 3:**
Consider a series RLC circuit with $R = 2 \, \Omega$, $L = 1 \, H$, and $C = 0.5 \, F$. A DC voltage source of $10 \, V$ is applied at $t=0$. Find the current $i(t)$.
*(Hint: This will involve a more complex partial fraction expansion.)*

**Question 4:**
In a parallel RL circuit with $R = 5 \, \Omega$ and $L = 2 \, H$, a voltage source $v(t) = 10 \sin(2t) \, u(t)$ is applied at $t=0$. Find the current through the resistor $i_R(t)$.

**Question 5:**
A series RC circuit has $R = 50 \, \Omega$ and $C = 100 \, \mu F$. The circuit is connected to a DC voltage source of $20 \, V$ at $t=0$. The capacitor initially has a voltage of $10 \, V$ across it (positive at the terminal connected to the resistor). Find the current $i(t)$ in the circuit.

---

## 7. Answers to Practice Questions

**Answer 1:**
*   **s-Domain Equation:** $\frac{50}{s} = (10 + 0.1s)I(s)$
*   **$I(s)$:** $I(s) = \frac{50}{s(10 + 0.1s)} = \frac{500}{s(100 + s)}$
*   **Partial Fraction Expansion:** $I(s) = \frac{A}{s} + \frac{B}{s+100}$
    $500 = A(s+100) + Bs$
    For $s=0$: $500 = 100A \implies A = 5$
    For $s=-100$: $500 = -100B \implies B = -5$
    $I(s) = \frac{5}{s} - \frac{5}{s+100}$
*   **Time Domain Response:** $i(t) = 5(1 - e^{-100t}) \, u(t) \, A$

**Answer 2:**
*   **s-Domain Equation:** $\frac{10}{s} = (100 + \frac{1}{0.00001s})I(s)$
*   **$I(s)$:** $I(s) = \frac{10}{s(100 + \frac{1}{0.00001s})} = \frac{10 \times 0.00001s}{s(100 \times 0.00001s + 1)} = \frac{0.0001}{0.001s + 1} = \frac{0.1}{s + 1000}$
*   **Voltage across Capacitor $V_C(s)$:** $V_C(s) = I(s) \times Z_C(s) = \frac{0.1}{s + 1000} \times \frac{1}{0.00001s} = \frac{10000}{s + 1000}$
*   **Time Domain Response:** $v_C(t) = 10000 e^{-1000t} \, u(t) \, V$.
    *(Correction: The initial voltage should have been considered for a complete transient analysis. If the capacitor is initially uncharged, this is the correct transient part. Let's re-calculate $V_C(s)$ using the initial condition approach for clarity.)*

    **Recalculating $V_C(s)$ with the voltage source method:**
    $V(s) = \frac{10}{s}$
    $Z_R(s) = 100$
    $Z_C(s) = \frac{1}{sC} + \frac{v_C(0^{-})}{s} = \frac{1}{0.00001s} + \frac{0}{s} = \frac{100000}{s}$
    $V(s) = I(s)(Z_R(s) + Z_C(s)) = I(s)(100 + \frac{100000}{s})$
    $I(s) = \frac{10/s}{100 + 100000/s} = \frac{10}{100s + 100000} = \frac{0.1}{s + 1000}$
    $V_C(s) = I(s) \times \frac{1}{sC} = \frac{0.1}{s + 1000} \times \frac{1}{0.00001s} = \frac{10000}{s + 1000}$
    $v_C(t) = 10000 e^{-1000t} \, u(t) \, V$.
    *(Wait, this is not approaching the steady state value of 10V. Let's try the voltage division approach for capacitor voltage.)*

    **Corrected approach for $V_C(s)$:**
    $V(s) = \frac{10}{s}$
    Total impedance $Z_{total}(s) = R + \frac{1}{sC} = 100 + \frac{100000}{s} = \frac{100s + 100000}{s}$
    $I(s) = \frac{V(s)}{Z_{total}(s)} = \frac{10/s}{(100s + 100000)/s} = \frac{10}{100s + 100000} = \frac{0.1}{s + 1000}$
    $V_C(s) = I(s) Z_C(s) = \frac{0.1}{s + 1000} \times \frac{1}{0.00001s} = \frac{10000}{s(s + 1000)}$

    **Partial Fraction Expansion for $V_C(s)$:**
    $V_C(s) = \frac{A}{s} + \frac{B}{s + 1000}$
    $10000 = A(s + 1000) + Bs$
    For $s=0$: $10000 = 1000A \implies A = 10$
    For $s=-1000$: $10000 = -1000B \implies B = -10$
    $V_C(s) = \frac{10}{s} - \frac{10}{s + 1000}$

    **Time Domain Response:** $v_C(t) = (10 - 10e^{-1000t}) \, u(t) \, V$

**Answer 3:**
*   **s-Domain Equation:** $\frac{10}{s} = (2 + 1s + \frac{1}{0.5s})I(s) = (2 + s + \frac{2}{s})I(s) = (\frac{2s + s^2 + 2}{s})I(s)$
*   **$I(s)$:** $I(s) = \frac{10}{s} \times \frac{s}{s^2 + 2s + 2} = \frac{10}{s^2 + 2s + 2}$
*   **Completing the Square:** $s^2 + 2s + 2 = (s^2 + 2s + 1) + 1 = (s+1)^2 + 1^2$
*   **Standard Form:** $I(s) = 10 \frac{1}{(s+1)^2 + 1^2}$
*   **Time Domain Response:** $i(t) = 10 e^{-t} \sin(t) \, u(t) \, A$

**Answer 4:**
*   **s-Domain Circuit:** Parallel R and L.
    $Z_R(s) = 5 \, \Omega$
    $Z_L(s) = 2s \, H$
    $V(s) = \mathcal{L}\{10 \sin(2t)\} = 10 \frac{2}{s^2 + 2^2} = \frac{20}{s^2 + 4}$
*   **Current through Resistor $I_R(s)$:** Using current division.
    $I_R(s) = V(s) \times \frac{1}{Z_R(s)} = \frac{20}{s^2 + 4} \times \frac{1}{5} = \frac{4}{s^2 + 4}$
*   **Time Domain Response:** $i_R(t) = 4 \sin(2t) \, u(t) \, A$

**Answer 5:**
*   **s-Domain Circuit:** Series RC with initial capacitor voltage.
    $V(s) = \frac{20}{s}$
    $Z_R(s) = 50 \, \Omega$
    $Z_C(s) = \frac{1}{sC} + \frac{v_C(0^{-})}{s} = \frac{1}{0.0001s} + \frac{10}{s} = \frac{10000}{s} + \frac{10}{s} = \frac{10010}{s}$
    *(Correction: The initial voltage across the capacitor is a voltage source in series with the impedance)*
    $V(s) = \frac{20}{s}$
    $Z_R(s) = 50$
    $Z_C(s) = \frac{1}{sC} = \frac{1}{0.0001s} = \frac{10000}{s}$
    Initial voltage source for capacitor: $\frac{v_C(0^{-})}{s} = \frac{10}{s}$

    **Transformed equation for total voltage:**
    $V(s) = I(s) (Z_R(s) + Z_C(s)) + v_C(0^{-})$  *(Incorrect application of KVL in s-domain with initial voltage source)*

    **Correct s-domain equation using series voltage sources:**
    $V(s) = I(s) Z_R(s) + (I(s) Z_C(s) + \frac{v_C(0^{-})}{s})$
    $\frac{20}{s} = I(s)(50) + I(s)(\frac{10000}{s}) + \frac{10}{s}$
    $\frac{20}{s} - \frac{10}{s} = I(s) (50 + \frac{10000}{s})$
    $\frac{10}{s} = I(s) (\frac{50s + 10000}{s})$
*   **$I(s)$:** $I(s) = \frac{10}{s} \times \frac{s}{50s + 10000} = \frac{10}{50s + 10000} = \frac{0.2}{s + 200}$
*   **Time Domain Response:** $i(t) = 0.2 e^{-200t} \, u(t) \, A$

---

## 8. Important Points to Remember

*   The s-domain transforms differential equations into algebraic equations.
*   Resistors, inductors, and capacitors have impedances in the s-domain: $R$, $sL$, and $\frac{1}{sC}$ respectively.
*   Initial conditions for inductors ($i(0^{-})$) and capacitors ($v(0^{-})$) are represented as series voltage sources or parallel current sources.
*   Ohm's Law, KVL, KCL, and network theorems are directly applicable in the s-domain.
*   Solving for a variable in the s-domain often requires partial fraction expansion to facilitate inverse Laplace transformation.
*   The inverse Laplace transform converts the s-domain solution back to the time-domain response, including transient and steady-state behavior.
*   The natural frequency and damping factor of the circuit are directly related to the poles of the transformed impedance or transfer function.

---

This comprehensive study note covers the essential aspects of transformed circuits in the s-domain, providing a strong foundation for analyzing dynamic circuits using Laplace transforms. The examples and practice questions are designed to reinforce understanding and application of these concepts, aligning with the stated course outcomes.
