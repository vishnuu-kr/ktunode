---
title: "Type and Order of the systems - Pole-Zero representation of systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e6"
status: "completed"
scrapedAt: "2026-05-23T16:23:56.224Z"
---
# Signals and Systems: Module 4 - Dynamic System Representation and Stability

## Topic: Type and Order of Systems - Pole-Zero Representation

This module delves into the fundamental characteristics of dynamic systems, specifically their **type** and **order**, and how these can be effectively represented using **pole-zero configurations**. Understanding these concepts is crucial for analyzing system behavior, predicting responses, and designing control strategies.

**Relevant Course Outcomes:**

*   **CO2:** To represent continuous time signals and systems in frequency domain (Knowledge Level: K3)
*   **CO4:** To analyse the stability of continuous time dynamical systems (Knowledge Level: K3)

**Relevant Textbooks/References:**

*   Signals and Systems by Simon Haykin, Barry Van Veen (Chapter on System Representation)
*   Control Systems Engineering by Norman S. Nise (Chapter on Modeling in the Frequency Domain)
*   Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Chapter on Block Diagram Representation)

---

### 1. System Order

**Definition:** The **order** of a linear time-invariant (LTI) system is defined as the highest power of the differential operator $d/dt$ (or $s$ in the Laplace domain) in the system's differential equation representation. Equivalently, it is the highest power of $s$ in the denominator of the system's transfer function. For discrete-time systems, it is the highest power of the delay operator $z^{-1}$ (or $z$) in the system's difference equation or transfer function.

**Key Concepts:**

*   **Differential Equation Representation:** An LTI system can be described by a linear constant-coefficient differential equation. The order of this equation directly corresponds to the order of the system.
    *   *Example (Continuous-Time):* A mass-spring-damper system can be described by $m\frac{d^2y(t)}{dt^2} + b\frac{dy(t)}{dt} + ky(t) = u(t)$, where $y(t)$ is the output and $u(t)$ is the input. This is a **second-order** system.
    *   *Example (Discrete-Time):* A simple digital filter might be represented by $y[n] = 0.5y[n-1] + 0.2x[n]$, where $y[n]$ is the output and $x[n]$ is the input. In terms of $z$, this is $Y(z) = 0.5z^{-1}Y(z) + 0.2X(z)$, or $Y(z)(1 - 0.5z^{-1}) = 0.2X(z)$, which is a **first-order** system.
*   **Transfer Function Representation:** The Laplace transform (for continuous-time) or Z-transform (for discrete-time) of the impulse response of an LTI system gives its transfer function, $H(s)$ or $H(z)$. The order of the system is the degree of the denominator polynomial of $H(s)$ or $H(z)$.
    *   *Example (Continuous-Time):* For the mass-spring-damper system above, taking the Laplace transform yields $ms^2Y(s) + bsY(s) + kY(s) = U(s)$. The transfer function is $H(s) = \frac{Y(s)}{U(s)} = \frac{1}{ms^2 + bs + k}$. The denominator is a polynomial of degree 2, so it's a **second-order** system.
    *   *Example (Discrete-Time):* For the digital filter $y[n] = 0.5y[n-1] + 0.2x[n]$, the Z-transform is $Y(z) = 0.5z^{-1}Y(z) + 0.2X(z)$. Rearranging, $\frac{Y(z)}{X(z)} = H(z) = \frac{0.2}{1 - 0.5z^{-1}}$. To express this in powers of $z$, multiply numerator and denominator by $z$: $H(z) = \frac{0.2z}{z - 0.5}$. The denominator is $z-0.5$, which is degree 1 in $z$. This is a **first-order** system.
*   **Number of Energy Storage Elements:** In physical systems, the order of the system is often related to the number of independent energy storage elements. For mechanical systems, this would be mass and spring elements. For electrical systems, this would be inductors and capacitors.
    *   *Example:* An RLC circuit is generally a second-order system due to the energy stored in the inductor (magnetic field) and capacitor (electric field).

**Importance of System Order:**

*   **Complexity:** Higher-order systems are generally more complex to model and analyze.
*   **Response Characteristics:** The order significantly influences the transient response of the system (e.g., overshoot, settling time, damping).
*   **Stability Analysis:** While the location of poles is the primary determinant of stability, the order of the system can indirectly affect how easily stability is achieved or lost.

**Haykin & Van Veen (2nd Ed., 2007):** Discusses system order in the context of differential equations and transfer functions, emphasizing its role in characterizing the system's complexity and response.

**Nise (5th Ed., 2009):** Provides detailed methods for determining system order from differential equations and transfer functions, relating it to the number of energy storage elements in physical systems.

---

### 2. System Type

**Definition:** The **type** of a linear time-invariant (LTI) system is determined by the number of pure integrators (or delay elements in discrete-time systems) in the open-loop transfer function. In the context of feedback control systems, the system type is defined with respect to a standard step input.

**Key Concepts:**

*   **Open-Loop Transfer Function:** For a system with feedback, the open-loop transfer function, $G(s)$ (or $G(z)$), is the product of the transfer functions of all the components in the forward path, before the feedback loop is closed.
*   **Integrators/Delay Elements:** An integrator in a continuous-time system is represented by a pole at the origin of the $s$-plane ($s=0$). In the transfer function, this corresponds to a factor of $1/s$. A delay element in a discrete-time system is represented by a factor of $z^{-1}$ or $1/z$ in the transfer function.
*   **Type Number:** The type number is equal to the multiplicity of the pole at the origin (for continuous-time systems) or the order of the pole at $z=1$ (for discrete-time systems, which corresponds to $z^{-1}$ at $z=1$).

**Classification by Type (Continuous-Time Systems):**

*   **Type 0 System:** The open-loop transfer function $G(s)$ has no poles at the origin. The denominator polynomial does not have a factor of $s$.
    *   *Example:* $G(s) = \frac{s+1}{s^2+2s+2}$ (No poles at $s=0$).
*   **Type 1 System:** The open-loop transfer function $G(s)$ has exactly one pole at the origin (i.e., one factor of $1/s$ in the transfer function).
    *   *Example:* $G(s) = \frac{s+1}{s(s^2+2s+2)}$ (One pole at $s=0$).
*   **Type 2 System:** The open-loop transfer function $G(s)$ has exactly two poles at the origin (i.e., two factors of $1/s$).
    *   *Example:* $G(s) = \frac{s+1}{s^2(s^2+2s+2)}$ (Two poles at $s=0$).
*   **And so on for Type 3, Type 4, etc.**

**Classification by Type (Discrete-Time Systems):**

The type of a discrete-time system is determined by the number of poles at $z=1$ in its open-loop transfer function $G(z)$. This is equivalent to the number of delay elements in the system's open-loop transfer function when written in terms of $z^{-1}$.

*   **Type 0 System:** $G(z)$ has no poles at $z=1$.
    *   *Example:* $G(z) = \frac{z+0.5}{z-0.8}$ (No pole at $z=1$).
*   **Type 1 System:** $G(z)$ has exactly one pole at $z=1$.
    *   *Example:* $G(z) = \frac{z+0.5}{(z-1)(z-0.8)}$ (One pole at $z=1$).
*   **Type 2 System:** $G(z)$ has exactly two poles at $z=1$.
    *   *Example:* $G(z) = \frac{z+0.5}{(z-1)^2(z-0.8)}$ (Two poles at $z=1$).

**Importance of System Type:**

The system type is crucial for understanding the system's **steady-state error** performance for different types of inputs (step, ramp, parabolic).

*   A Type 0 system has a finite steady-state error to a step input, infinite to a ramp, and infinite to a parabolic input.
*   A Type 1 system has zero steady-state error to a step input, finite to a ramp, and infinite to a parabolic input.
*   A Type 2 system has zero steady-state error to a step and ramp input, and finite to a parabolic input.

**Nise (5th Ed., 2009):** Extensively covers system type and its relationship to steady-state error analysis, providing a detailed framework for classification.

**Ogata (2nd Ed., 2006):** Discusses system type in the context of discrete-time control systems, linking it to the transient and steady-state performance of sampled-data systems.

---

### 3. Pole-Zero Representation of Systems

**Definition:** The **pole-zero representation** of an LTI system is a graphical method of displaying the poles and zeros of its transfer function.
*   **Poles:** The roots of the denominator polynomial of the transfer function. They are represented by an 'x' on the complex plane.
*   **Zeros:** The roots of the numerator polynomial of the transfer function. They are represented by an 'o' on the complex plane.

**Key Concepts:**

*   **Transfer Function in Factored Form:** The transfer function $H(s)$ or $H(z)$ can be expressed in terms of its poles and zeros:
    $$H(s) = K \frac{(s-z_1)(s-z_2)...(s-z_m)}{(s-p_1)(s-p_2)...(s-p_n)}$$
    $$H(z) = K \frac{(z-z_1)(z-z_2)...(z-z_m)}{(z-p_1)(z-p_2)...(z-p_n)}$$
    where $K$ is the system gain, $z_i$ are the zeros, and $p_i$ are the poles.
*   **The Complex Plane (s-plane for continuous-time, z-plane for discrete-time):**
    *   **s-plane:** The horizontal axis is the real part ($\sigma$), and the vertical axis is the imaginary part ($j\omega$).
        *   Left-Half Plane (LHP): $\sigma < 0$. Poles here lead to stable, decaying responses.
        *   Right-Half Plane (RHP): $\sigma > 0$. Poles here lead to unstable, growing responses.
        *   Imaginary Axis: $\sigma = 0$. Poles here lead to sustained oscillations.
    *   **z-plane:** The magnitude and angle of the poles/zeros are important. The stability criterion is that all poles must lie *inside* the unit circle ($|z| < 1$).
        *   Inside the Unit Circle: Stable response.
        *   On the Unit Circle: Sustained oscillations.
        *   Outside the Unit Circle: Unstable response.
*   **Relationship between Poles, Zeros, and System Behavior:**
    *   **Poles:** Primarily determine the *stability* and the *transient response* (natural frequencies, damping ratios, decay/growth rates).
    *   **Zeros:** Primarily influence the *shape* of the transient response and the *magnitude* of the response at specific frequencies (affecting amplitude and phase). They can also affect whether certain modes are excited.
    *   **Gain (K):** Determines the overall scaling of the output.

**Visualizing Pole-Zero Plots:**

*   **Zeros (o):** Indicate frequencies or modes where the system's response is attenuated or blocked.
*   **Poles (x):** Indicate frequencies or modes that are amplified and tend to dominate the system's response. Poles closer to the origin (in $s$-plane) or closer to the unit circle (in $z$-plane) lead to slower responses. Poles further away lead to faster responses.

**Connecting Pole-Zero to System Order and Type:**

*   **Order:** The order of the system is equal to the total number of poles (counting multiplicities).
*   **Type:** In the $s$-plane, the presence of poles at the origin ($s=0$) in the open-loop transfer function directly indicates the system type. For example, if $H(s) = \frac{N(s)}{s^k D(s)}$, where $D(0) \neq 0$, the system is of type $k$.

**Examples:**

**Continuous-Time System (s-plane):**

Consider a system with transfer function:
$$H(s) = \frac{s+2}{(s+1)(s+3)}$$
*   **Zeros:** At $s = -2$ ('o')
*   **Poles:** At $s = -1$ ('x') and $s = -3$ ('x')
*   **Order:** 2 (two poles)
*   **Type:** 0 (no poles at the origin)
*   **Stability:** Both poles are in the LHP ($\sigma < 0$), so the system is stable.
*   **Response:** The poles at -1 and -3 will cause exponential decays. The pole at -1 will decay slower, hence dominating the transient response. The zero at -2 will slightly attenuate the response around that frequency.

Consider an open-loop transfer function for a feedback system:
$$G(s) = \frac{s+1}{s(s+2)}$$
*   **Zeros:** At $s = -1$ ('o')
*   **Poles:** At $s = 0$ ('x') and $s = -2$ ('x')
*   **Order:** 2 (two poles)
*   **Type:** 1 (one pole at the origin)
*   **Stability (Open-loop):** One pole is on the imaginary axis ($s=0$), indicating it's marginally stable or unstable in open-loop. The closed-loop stability will depend on the controller and feedback path.
*   **Response:** The pole at $s=0$ implies the system will integrate the input. The pole at $s=-2$ will cause an exponential decay. The zero at $s=-1$ will influence the shape.

**Discrete-Time System (z-plane):**

Consider a system with transfer function:
$$H(z) = \frac{0.5(z+0.8)}{(z-0.2)(z-0.5)}$$
*   **Zeros:** At $z = -0.8$ ('o')
*   **Poles:** At $z = 0.2$ ('x') and $z = 0.5$ ('x')
*   **Order:** 2 (two poles)
*   **Type:** 0 (no poles at $z=1$)
*   **Stability:** Both poles are inside the unit circle ($|z| < 1$), so the system is stable.
*   **Response:** The poles at $z=0.2$ and $z=0.5$ correspond to decaying modes. The pole closer to the unit circle (0.5) will decay slower.

Consider an open-loop transfer function for a feedback system:
$$G(z) = \frac{z-0.1}{(z-1)(z-0.9)}$$
*   **Zeros:** At $z = 0.1$ ('o')
*   **Poles:** At $z = 1$ ('x') and $z = 0.9$ ('x')
*   **Order:** 2 (two poles)
*   **Type:** 1 (one pole at $z=1$)
*   **Stability (Open-loop):** One pole is on the unit circle ($z=1$), indicating marginal stability or instability in open-loop.
*   **Response:** The pole at $z=1$ represents a pure integrator effect, meaning for a step input, the output will grow linearly in steady-state (if it remains stable). The pole at $z=0.9$ represents a decaying mode.

**Haykin & Van Veen (2nd Ed., 2007):** Provides a thorough treatment of pole-zero analysis for characterizing system behavior, linking pole locations to transient response characteristics.

**Oppenheim, Willsky & Nawab (2nd Ed., 2015):** Emphasizes the importance of pole-zero locations in understanding frequency response and system stability, particularly for discrete-time systems in the z-plane.

---

### Important Points to Remember:

*   **System Order:** Defined by the highest derivative in the differential equation or the degree of the denominator of the transfer function. It reflects system complexity and the number of energy storage elements.
*   **System Type:** Defined by the number of pure integrators (poles at the origin in $s$-plane) in the open-loop transfer function. Crucial for steady-state error analysis.
*   **Pole-Zero Plot:** A powerful visual tool to understand system characteristics.
    *   **Poles:** Determine stability and transient response (decay/growth rates, oscillation frequencies).
    *   **Zeros:** Influence the shape of the transient response and frequency response.
    *   **Location matters:** Left-half plane poles (s-plane) and inside the unit circle poles (z-plane) are essential for stability.
*   **Stability:** All poles must be in the LHP for continuous-time systems and inside the unit circle for discrete-time systems for BIBO stability.
*   **System Type vs. Stability:** While system type is about integrators, it can impact stability, especially when poles are at the origin or on the unit circle, potentially leading to marginal stability or instability in open or closed-loop configurations.

---

### Practice Questions and Exercises:

**Question 1 (System Order):**
A system is described by the differential equation:
$2\frac{d^3y(t)}{dt^3} + 5\frac{d^2y(t)}{dt^2} + 3\frac{dy(t)}{dt} + y(t) = 4u(t) + \frac{du(t)}{dt}$
What is the order of this system?

**Answer 1:**
The order of the system is determined by the highest derivative of the output, which is the third derivative ($\frac{d^3y(t)}{dt^3}$). Therefore, the system is of **order 3**.

---

**Question 2 (System Type):**
Given the open-loop transfer function of a feedback system:
$$G(s) = \frac{s^2 + 4s + 5}{s^3(s+3)}$$
What is the type of this system?

**Answer 2:**
The open-loop transfer function has $s^3$ in the denominator, which means there are three poles at the origin ($s=0$). Therefore, the system is of **Type 3**.

---

**Question 3 (Pole-Zero Representation & Stability):**
Consider the discrete-time system with the following pole-zero plot:

*   Zero at $z = -0.5$
*   Poles at $z = 0.9$, $z = -0.8$, $z = 0.7 + j0.7$

Is this system stable? Justify your answer. What is the order of the system?

**Answer 3:**
*   **Stability:** To determine stability, we need to check if all poles are inside the unit circle ($|z| < 1$).
    *   Pole at $z = 0.9$: $|0.9| = 0.9 < 1$. Stable.
    *   Pole at $z = -0.8$: $|-0.8| = 0.8 < 1$. Stable.
    *   Pole at $z = 0.7 + j0.7$: The magnitude is $|0.7 + j0.7| = \sqrt{(0.7)^2 + (0.7)^2} = \sqrt{0.49 + 0.49} = \sqrt{0.98} \approx 0.99$. Since $0.99 < 1$, this pole is also inside the unit circle. Stable.
    *   **Justification:** Since all poles are inside the unit circle, the system is **stable**.
*   **Order:** The system has three poles. Therefore, the order of the system is **3**.

---

**Question 4 (Connecting Concepts):**
For a feedback system, the open-loop transfer function is $G(s) = \frac{K(s+a)}{s^2(s+b)}$.
(a) What is the order of the open-loop system?
(b) What is the type of the open-loop system?
(c) If $K=1, a=2, b=5$, sketch the pole-zero plot and determine if the open-loop system is stable.

**Answer 4:**
(a) The order of the open-loop system is determined by the number of poles in $G(s)$. The denominator is $s^2(s+b)$, which has a total of 3 poles (two at $s=0$ and one at $s=-b$). So, the order is **3**.
(b) The type of the open-loop system is determined by the number of poles at the origin in $G(s)$. The denominator has $s^2$, indicating two poles at $s=0$. So, the type is **2**.
(c) Given $K=1, a=2, b=5$, the transfer function is $G(s) = \frac{s+2}{s^2(s+5)}$.
    *   **Poles:** $s=0$ (multiplicity 2) and $s=-5$.
    *   **Zero:** $s=-2$.
    *   **Pole-Zero Plot Sketch:**
        *   Mark the origin (s=0) with 'x' twice.
        *   Mark $s=-5$ with an 'x'.
        *   Mark $s=-2$ with an 'o'.
    *   **Stability (Open-loop):** The open-loop system has poles at $s=0$. Poles on the imaginary axis ($s=0$ is on the imaginary axis) lead to marginal stability or instability. Therefore, the open-loop system is **not strictly stable**; it is marginally stable.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
