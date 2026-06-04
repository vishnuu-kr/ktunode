---
title: "overdamped, underdamped, critically damped and 
undamped"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad6"
status: "completed"
scrapedAt: "2026-05-23T16:11:39.884Z"
---
# Circuits & Networks - Module 3: Laplace Transforms (Review)

## Topic: Damping Characteristics in Dynamic Circuits

This module review focuses on understanding the transient response of second-order linear circuits when subjected to a sudden change in input, often analyzed using Laplace transforms. The nature of this transient response is characterized by different types of damping: **undamped, underdamped, critically damped, and overdamped**.

---

### **1. Introduction to Second-Order Circuits and Damping**

Second-order circuits are characterized by differential equations that involve the second derivative of the circuit variables (e.g., voltage or current). These circuits typically contain both inductance (L) and capacitance (C) elements. When subjected to a step input or a similar excitation, these circuits exhibit transient behavior before settling into a steady state. The way this transient behavior decays or oscillates is determined by the circuit's damping characteristics.

**Key Concepts:**

*   **Transient Response:** The behavior of a circuit immediately after a change in input or conditions, before it settles to a steady state.
*   **Damping:** The dissipation of energy within a circuit, which affects the rate at which oscillations die out. In RLC circuits, the resistor (R) is the dissipative element.
*   **Second-Order Differential Equation:** The governing equation for RLC circuits, typically of the form:
    $a_2 \frac{d^2y(t)}{dt^2} + a_1 \frac{dy(t)}{dt} + a_0 y(t) = x(t)$
    where $y(t)$ is the circuit variable (voltage or current), $a_2$, $a_1$, and $a_0$ are coefficients depending on circuit parameters (R, L, C), and $x(t)$ is the input.

**Relation to Laplace Transforms (CO2):**
Laplace transforms are crucial for analyzing these dynamic circuits because they convert differential equations in the time domain into algebraic equations in the s-domain. This simplifies the process of finding the circuit's response. The roots of the characteristic equation (derived from the denominator of the transfer function in the s-domain) directly determine the damping characteristics.

---

### **2. Characteristic Equation and Damping Factors**

For a standard second-order circuit, the characteristic equation is often expressed in the form:

$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$

where:
*   $s$ is the complex frequency variable.
*   $\omega_n$ is the **undamped natural frequency** (radians per second). It represents the frequency at which the circuit would oscillate if there were no damping.
*   $\zeta$ (zeta) is the **damping ratio**. It's a dimensionless parameter that quantifies the level of damping in the system.

**Derivation of $\omega_n$ and $\zeta$ (Example: Series RLC Circuit):**
Consider a series RLC circuit with a voltage source $v(t)$. The KVL equation is:
$v(t) = Ri(t) + L\frac{di(t)}{dt} + \frac{1}{C}\int i(t) dt$

Differentiating with respect to time to eliminate the integral and assuming zero initial conditions for simplicity in determining the characteristic equation:
$\frac{dv(t)}{dt} = R\frac{di(t)}{dt} + L\frac{d^2i(t)}{dt^2} + \frac{1}{C}i(t)$

Taking the Laplace transform (assuming $v(t) = V_u(t)$ - a unit step input, so $\frac{dv(t)}{dt}$ is a Dirac delta and $i(t)$ is the variable we are interested in):
$0 = Rs + Ls^2 + \frac{1}{C}$ for the homogeneous equation (finding roots of the characteristic polynomial).

Rearranging:
$Ls^2 + Rs + \frac{1}{C} = 0$

Dividing by L:
$s^2 + \frac{R}{L}s + \frac{1}{LC} = 0$

Comparing this to the standard form $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
*   $\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$
*   $2\zeta\omega_n = \frac{R}{L} \implies \zeta = \frac{R}{2L\omega_n} = \frac{R}{2L} \sqrt{LC} = \frac{R}{2}\sqrt{\frac{C}{L}}$

**Important Point:** The roots of the characteristic equation determine the form of the transient response. These roots are given by $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$.

---

### **3. Types of Damping Based on the Damping Ratio ($\zeta$)**

The value of the damping ratio $\zeta$ dictates the nature of the transient response:

**a) Undamped Response ($\zeta = 0$)**

*   **Condition:** $\zeta = 0$. This occurs when the resistance $R=0$ in a series RLC circuit or when there is no resistive element to dissipate energy.
*   **Characteristic Equation Roots:** $s^2 + \omega_n^2 = 0 \implies s = \pm j\omega_n$. The roots are purely imaginary and conjugate.
*   **Time Domain Response:** The circuit will oscillate indefinitely at its natural frequency $\omega_n$ without any decay.
*   **Laplace Domain:** The transfer function will have poles on the imaginary axis.
*   **Example:** An ideal LC circuit (no resistance).
*   **Relevance (CO2):** While purely theoretical, it sets a baseline for understanding the effect of damping.

**b) Underdamped Response ($0 < \zeta < 1$)**

*   **Condition:** $0 < \zeta < 1$. This is the most common case in many practical circuits, where there is some resistance to dissipate energy, but not enough to prevent oscillations.
*   **Characteristic Equation Roots:** $s = -\zeta\omega_n \pm j\omega_n\sqrt{1 - \zeta^2}$. The roots are complex conjugates with negative real parts.
*   **Time Domain Response:** The circuit exhibits damped oscillations. The amplitude of the oscillations decreases exponentially over time. The frequency of oscillation is the **damped natural frequency** ($\omega_d$), given by $\omega_d = \omega_n\sqrt{1 - \zeta^2}$.
*   **Laplace Domain:** The transfer function has complex conjugate poles in the left-half of the s-plane.
*   **Example:** A series RLC circuit with moderate resistance.
*   **Relevance (CO2):** Understanding the rate of decay and oscillation frequency is crucial for designing circuits that respond quickly and predictably.

**c) Critically Damped Response ($\zeta = 1$)**

*   **Condition:** $\zeta = 1$. This represents the boundary between oscillatory and non-oscillatory behavior. It's the fastest response without overshoot.
*   **Characteristic Equation Roots:** $s^2 + 2\omega_n s + \omega_n^2 = 0 \implies (s + \omega_n)^2 = 0 \implies s = -\omega_n$ (repeated real roots).
*   **Time Domain Response:** The circuit returns to its steady-state value as quickly as possible without oscillating. There is no overshoot.
*   **Laplace Domain:** The transfer function has a repeated pole on the negative real axis.
*   **Example:** Carefully chosen R, L, and C values in a series RLC circuit to achieve this specific response. This is often desired in control systems and measuring instruments.
*   **Relevance (CO2):** Achieves a fast response without the undesirable effects of oscillations.

**d) Overdamped Response ($\zeta > 1$)**

*   **Condition:** $\zeta > 1$. This occurs when there is significant resistance (or other damping mechanisms) in the circuit.
*   **Characteristic Equation Roots:** $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$. The roots are real, distinct, and negative.
*   **Time Domain Response:** The circuit returns to its steady-state value slowly and without any oscillation. The response is sluggish.
*   **Laplace Domain:** The transfer function has two distinct real poles in the left-half of the s-plane.
*   **Example:** A series RLC circuit with high resistance.
*   **Relevance (CO2):** While slow, it guarantees no overshoot, which can be important in certain applications where stability is paramount.

---

### **4. Visualizing the Responses**

The location of the poles of the system's transfer function in the s-plane directly indicates the damping characteristics:

*   **Imaginary Axis:** Undamped ($\zeta = 0$)
*   **Left-Half Plane (Complex Conjugate Poles):** Underdamped ($0 < \zeta < 1$)
*   **Negative Real Axis (Repeated Pole):** Critically Damped ($\zeta = 1$)
*   **Negative Real Axis (Distinct Poles):** Overdamped ($\zeta > 1$)

**(Diagram/Sketch)**
A sketch of the s-plane showing these pole locations would be beneficial here.

---

### **5. Applications and Examples**

**Example 1: Series RLC Circuit with a Step Voltage Input**

Consider a series RLC circuit with $R=50 \Omega$, $L=10 \text{ mH}$, and $C=100 \mu\text{F}$. A unit step voltage $V_s(t) = u(t)$ is applied at $t=0$.

**Step 1: Calculate $\omega_n$ and $\zeta$.**
$\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(10 \times 10^{-3} \text{ H})(100 \times 10^{-6} \text{ F})}} = \frac{1}{\sqrt{1000 \times 10^{-9}}} = \frac{1}{10^{-3}\sqrt{10}} \approx 316.2 \text{ rad/s}$ (Correction: $\sqrt{1000 \times 10^{-9}} = \sqrt{10^{-6}} = 10^{-3}$)
$\omega_n = \frac{1}{\sqrt{10 \times 10^{-3} \times 100 \times 10^{-6}}} = \frac{1}{\sqrt{1000 \times 10^{-9}}} = \frac{1}{\sqrt{10^{-6}}} = \frac{1}{10^{-3}} = 1000 \text{ rad/s}$

$\zeta = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{50}{2}\sqrt{\frac{100 \times 10^{-6}}{10 \times 10^{-3}}} = 25\sqrt{\frac{100 \times 10^{-6}}{10 \times 10^{-3}}} = 25\sqrt{10 \times 10^{-3}} = 25\sqrt{0.01} = 25 \times 0.1 = 2.5$

**Step 2: Determine the damping type.**
Since $\zeta = 2.5 > 1$, the circuit is **overdamped**.

**Step 3: Find the characteristic equation roots.**
$s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$
$s = -2.5(1000) \pm 1000\sqrt{(2.5)^2 - 1}$
$s = -2500 \pm 1000\sqrt{6.25 - 1}$
$s = -2500 \pm 1000\sqrt{5.25}$
$s = -2500 \pm 1000(2.29) \approx -2500 \pm 2290$
$s_1 \approx -2500 + 2290 = -210 \text{ rad/s}$
$s_2 \approx -2500 - 2290 = -4790 \text{ rad/s}$

**Step 4: Write the general form of the response.**
For a unit step input to an overdamped second-order system, the response $i(t)$ (assuming current is the variable of interest) is of the form:
$i(t) = K_1 e^{s_1 t} + K_2 e^{s_2 t}$ (for $t \ge 0$)

The values of $K_1$ and $K_2$ are determined by initial conditions and the input.

**Textbook References:**
*   **Van Valkenburg (3rd Ed.):** Chapter 7 (Transient Analysis) discusses the characteristic equation, roots, and the different types of responses.
*   **Ravish R Singh (2nd Ed.):** Chapter 7 (Transients and Steady State Response) covers similar concepts with detailed derivations.
*   **Suresh Kumar (1st Ed.):** Chapter 9 (Transient Response of Second-Order Circuits) is dedicated to this topic.
*   **A Sudhakar, Shyammohan S Palli (5th Ed.):** Chapter 10 (Transient Analysis of AC Circuits) would likely have sections on second-order circuit transients.

---

### **6. Important Points to Remember**

*   The damping ratio $\zeta$ is the key parameter defining the transient response.
*   $\omega_n$ is the undamped natural frequency (frequency if no resistance).
*   $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is the damped natural frequency (frequency of oscillation for underdamped systems).
*   The location of the poles of the characteristic equation in the s-plane dictates the damping:
    *   $s = \pm j\omega_n$ (Imaginary axis) -> Undamped
    *   $s = -\zeta\omega_n \pm j\omega_d$ (Left-half plane, complex) -> Underdamped
    *   $s = -\omega_n, -\omega_n$ (Negative real axis, repeated) -> Critically Damped
    *   $s = s_1, s_2$ (Negative real axis, distinct) -> Overdamped
*   Laplace transforms simplify solving the differential equations that describe these circuits.
*   The damping characteristics influence the speed of response, overshoot, and oscillatory behavior.

---

### **7. Practice Questions**

**Question 1:**
For a second-order system, the characteristic equation is given by $s^2 + 8s + 16 = 0$.
Determine the type of damping and calculate the values of $\zeta$ and $\omega_n$.

**Answer 1:**
The characteristic equation is $s^2 + 8s + 16 = 0$.
Comparing with $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
$\omega_n^2 = 16 \implies \omega_n = 4 \text{ rad/s}$
$2\zeta\omega_n = 8 \implies 2\zeta(4) = 8 \implies 8\zeta = 8 \implies \zeta = 1$.
Since $\zeta = 1$, the system is **critically damped**.

**Question 2:**
A series RLC circuit has $R=10 \Omega$, $L=0.1 \text{ H}$, and $C=100 \mu\text{F}$. What is the nature of the transient response when excited by a step voltage? Calculate $\omega_n$ and $\zeta$.

**Answer 2:**
$\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(0.1 \text{ H})(100 \times 10^{-6} \text{ F})}} = \frac{1}{\sqrt{10 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-5}}} = \frac{1}{3.162 \times 10^{-3}} \approx 316.2 \text{ rad/s}$

$\zeta = \frac{R}{2}\sqrt{\frac{C}{L}} = \frac{10}{2}\sqrt{\frac{100 \times 10^{-6}}{0.1}} = 5\sqrt{\frac{100 \times 10^{-6}}{10^{-1}}} = 5\sqrt{1000 \times 10^{-6}} = 5\sqrt{10^{-3}} = 5 \times 0.03162 \approx 0.1581$

Since $0 < \zeta < 1$, the transient response is **underdamped**. The damped frequency $\omega_d = \omega_n\sqrt{1-\zeta^2} = 316.2\sqrt{1 - (0.1581)^2} \approx 316.2\sqrt{1 - 0.02499} \approx 316.2\sqrt{0.975} \approx 316.2 \times 0.9874 \approx 312.1 \text{ rad/s}$.

**Question 3:**
In a series RLC circuit, if the resistance is increased significantly, how would this affect the damping ratio $\zeta$ and the nature of the transient response?

**Answer 3:**
From the formula $\zeta = \frac{R}{2}\sqrt{\frac{C}{L}}$, if resistance $R$ is increased while $L$ and $C$ remain constant, the damping ratio $\zeta$ will increase.
If $\zeta$ increases past 1, an **underdamped** or **critically damped** system will become **overdamped**. This means the transient response will become slower and will no longer oscillate.

---

### **8. Alignment with Course Outcomes**

*   **CO1:** (Apply circuit theorems to solve complex DC and AC electric networks) - While this topic primarily deals with dynamic circuits, understanding the fundamental RLC behavior is a prerequisite for applying theorems in more complex networks.
*   **CO2:** (Apply transformation from time domain to s-domain, solve dynamic electric circuits) - **Directly addressed.** This entire topic revolves around analyzing circuit behavior via the s-domain representation and interpreting the roots of the characteristic equation, which are derived from Laplace transforms. The types of damping directly relate to the location of poles in the s-plane.
*   **CO3:** (Solve series and parallel resonant circuits) - The concept of undamped natural frequency ($\omega_n$) is fundamental to resonance. Understanding damping helps explain why actual resonant circuits might not be perfectly undamped and how damping affects the selectivity of resonance.
*   **CO4:** (Analyse three-phase networks...) - Not directly addressed in this specific topic, but understanding basic circuit dynamics is foundational.
*   **CO5:** (Describe two-port networks...) - Not directly addressed in this specific topic.
*   **CO6:** (Explain the steady-state behaviour of coupled circuits...) - Not directly addressed in this specific topic, but understanding transient behavior provides context for the eventual steady-state.

---
