---
title: "Characteristic equation."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e7"
status: "completed"
scrapedAt: "2026-05-23T16:23:56.996Z"
---
# Signals and Systems: Module 4 - Dynamic System Representation and Stability

## Topic: Characteristic Equation

This module delves into the representation of dynamic systems and the crucial concept of their stability. We will explore the differences between open-loop and closed-loop systems and, critically, understand how the **characteristic equation** is derived and utilized to analyze system stability.

---

### 1. Understanding Dynamic Systems

**Definition:** A dynamic system is a system whose output depends not only on the current input but also on past inputs and/or past outputs. These systems are typically described by differential equations (for continuous-time systems) or difference equations (for discrete-time systems).

**1.1. System Representation:**

Dynamic systems can be represented in various ways, including:

*   **Differential/Difference Equations:** These are the fundamental mathematical expressions that define the system's behavior.
    *   **Continuous-Time Systems:** Represented by Ordinary Differential Equations (ODEs).
        *   *Example (Nise, Chapter 2):* A simple mass-spring-damper system can be described by:
            $m\frac{d^2y(t)}{dt^2} + c\frac{dy(t)}{dt} + ky(t) = u(t)$
            where $y(t)$ is the output (displacement), $u(t)$ is the input force, $m$ is mass, $c$ is damping coefficient, and $k$ is spring constant.
    *   **Discrete-Time Systems:** Represented by difference equations.
        *   *Example (Ogata, Chapter 2):* A discrete-time system can be described by:
            $y[k+n] + a_{n-1}y[k+n-1] + \dots + a_0y[k] = b_m u[k+m] + \dots + b_0 u[k]$
            where $y[k]$ is the output at time step $k$, $u[k]$ is the input at time step $k$, and $a_i, b_j$ are system coefficients.

*   **Transfer Functions:** A powerful tool for analyzing linear, time-invariant (LTI) systems. It's the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
    *   **Continuous-Time:** $H(s) = \frac{Y(s)}{U(s)}$
    *   **Discrete-Time:** $H(z) = \frac{Y(z)}{U(z)}$

*   **State-Space Representation:** A more general representation that uses state variables to describe the internal state of the system.
    *   **Continuous-Time:**
        $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$
        $\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$
    *   **Discrete-Time:**
        $\mathbf{x}[k+1] = \mathbf{A}\mathbf{x}[k] + \mathbf{B}\mathbf{u}[k]$
        $\mathbf{y}[k] = \mathbf{C}\mathbf{x}[k] + \mathbf{D}\mathbf{u}[k]$

**1.2. Open-Loop vs. Closed-Loop Systems:**

*   **Open-Loop System:**
    *   The output has no influence on the control action. The control action is independent of the system's actual output.
    *   *Example (Haykin & Van Veen, Chapter 1):* A toaster where the heating time is set manually and doesn't adjust based on how brown the toast is.
    *   Generally simpler and less expensive but less accurate and sensitive to disturbances.

*   **Closed-Loop (Feedback) System:**
    *   The output is measured and fed back to the input to influence the control action. This aims to maintain the output at a desired level despite disturbances or variations.
    *   *Example (Nise, Chapter 1):* A thermostat controlling room temperature. The thermostat measures the current temperature (output) and adjusts the heating/cooling (control action) to reach the setpoint.
    *   More complex but offers better accuracy, disturbance rejection, and stability.

---

### 2. The Characteristic Equation

The characteristic equation is a fundamental tool derived from the system's mathematical model (differential or difference equations) and is crucial for understanding system stability.

**2.1. Derivation for Continuous-Time Systems:**

For an LTI system described by a linear constant-coefficient differential equation:

$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m u(t)}{dt^m} + \dots + b_0 u(t)$

The **homogeneous part** of the differential equation (setting the input $u(t)$ to zero) governs the system's natural response, which determines its stability.

To find the characteristic equation, we assume a solution of the form $y(t) = e^{st}$, where $s$ is a complex variable. Substituting this into the homogeneous equation:

$a_n s^n e^{st} + a_{n-1} s^{n-1} e^{st} + \dots + a_1 s e^{st} + a_0 e^{st} = 0$

Since $e^{st}$ is never zero, we can divide by it:

$a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$

This polynomial equation in $s$ is the **characteristic equation** of the continuous-time system. The roots of this equation, denoted as $s_1, s_2, \dots, s_n$, are called the **poles** of the system.

**Key Concept:** The **transfer function** of an LTI system can be expressed as:

$H(s) = \frac{\text{Numerator Polynomial}(s)}{\text{Denominator Polynomial}(s)}$

The denominator polynomial of the transfer function is precisely the characteristic equation.

*   *Example (Haykin & Van Veen, Chapter 5):* Consider the system with transfer function $H(s) = \frac{s+1}{s^2 + 3s + 2}$.
    The characteristic equation is obtained by setting the denominator to zero:
    $s^2 + 3s + 2 = 0$
    Factoring this, we get $(s+1)(s+2) = 0$.
    The poles are $s_1 = -1$ and $s_2 = -2$.

**2.2. Derivation for Discrete-Time Systems:**

For an LTI system described by a linear constant-coefficient difference equation:

$y[k+n] + a_{n-1}y[k+n-1] + \dots + a_0y[k] = b_m u[k+m] + \dots + b_0 u[k]$

Similarly, we consider the homogeneous part (input $u[k] = 0$) to analyze the system's natural response. Assume a solution of the form $y[k] = r^k$, where $r$ is a complex variable. Substituting this into the homogeneous equation:

$r^{k+n} + a_{n-1}r^{k+n-1} + \dots + a_1 r^{k+1} + a_0 r^k = 0$

Dividing by $r^k$ (assuming $r \neq 0$):

$r^n + a_{n-1}r^{n-1} + \dots + a_1 r + a_0 = 0$

This polynomial equation in $r$ is the **characteristic equation** of the discrete-time system. The roots of this equation, denoted as $r_1, r_2, \dots, r_n$, are also called the **poles** of the system.

**Key Concept:** The transfer function in the Z-domain is:

$H(z) = \frac{\text{Numerator Polynomial}(z)}{\text{Denominator Polynomial}(z)}$

The denominator polynomial of the Z-domain transfer function is the characteristic equation.

*   *Example (Ogata, Chapter 2):* Consider a system with difference equation $y[k+2] + 3y[k+1] + 2y[k] = u[k]$.
    The characteristic equation is:
    $r^2 + 3r + 2 = 0$
    Factoring gives $(r+1)(r+2) = 0$.
    The poles are $r_1 = -1$ and $r_2 = -2$.

**2.3. Characteristic Equation from State-Space Representation:**

For a system described by state-space equations $\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$, the characteristic equation is given by:

$\det(\mathbf{sI} - \mathbf{A}) = 0$

where:
*   $\mathbf{s}$ is a complex scalar.
*   $\mathbf{I}$ is the identity matrix of the same dimensions as $\mathbf{A}$.
*   $\mathbf{A}$ is the system matrix.
*   $\det(\cdot)$ denotes the determinant.

The roots of this equation are the eigenvalues of the matrix $\mathbf{A}$, which are also the poles of the system.

*   *Example (Nise, Chapter 7):* Given $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$:
    $\mathbf{sI} - \mathbf{A} = \begin{bmatrix} s & 0 \\ 0 & s \end{bmatrix} - \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} s & -1 \\ 2 & s+3 \end{bmatrix}$
    $\det(\mathbf{sI} - \mathbf{A}) = s(s+3) - (-1)(2) = s^2 + 3s + 2$
    The characteristic equation is $s^2 + 3s + 2 = 0$.

---

### 3. System Stability and the Characteristic Equation

**Definition of Stability (for LTI systems):** A system is considered **stable** if, for every bounded input, the output is also bounded (BIBO stability). For internal stability, it means that any initial disturbance will decay to zero over time.

The location of the poles (roots of the characteristic equation) in the complex plane determines the system's stability.

**3.1. Stability Criteria for Continuous-Time Systems (from poles):**

The poles $s_i$ of the characteristic equation $a_n s^n + a_{n-1} s^{n-1} + \dots + a_0 = 0$ dictate stability:

*   **Stable:** All poles lie in the **left half of the complex plane** (i.e., $\text{Re}(s_i) < 0$ for all $i$). This means the natural response terms $e^{s_i t}$ decay to zero as $t \to \infty$.
*   **Marginally Stable:** At least one pole lies on the **imaginary axis** (i.e., $\text{Re}(s_i) = 0$), and all other poles have negative real parts. If the pole on the imaginary axis is simple (not repeated), the system is marginally stable. If it's repeated, the system is unstable. The natural response terms oscillate but do not decay.
*   **Unstable:** At least one pole lies in the **right half of the complex plane** (i.e., $\text{Re}(s_i) > 0$ for at least one $i$). This means the natural response terms grow unboundedly as $t \to \infty$. Repeated poles on the imaginary axis also lead to instability.

**(CO4: To analyse the stability of continuous time dynamical systems)**

**3.2. Stability Criteria for Discrete-Time Systems (from poles):**

The poles $r_i$ of the characteristic equation $r^n + a_{n-1}r^{n-1} + \dots + a_0 = 0$ dictate stability:

*   **Stable:** All poles lie **inside the unit circle** in the complex plane (i.e., $|r_i| < 1$ for all $i$). This means the natural response terms $r_i^k$ decay to zero as $k \to \infty$.
*   **Marginally Stable:** At least one pole lies **on the unit circle** ($|r_i| = 1$), and all other poles lie inside the unit circle. If the pole on the unit circle is simple, the system is marginally stable. Repeated poles on the unit circle lead to instability. The natural response terms oscillate with constant amplitude.
*   **Unstable:** At least one pole lies **outside the unit circle** (i.e., $|r_i| > 1$ for at least one $i$). This means the natural response terms grow unboundedly as $k \to \infty$. Repeated poles on the unit circle also lead to instability.

**Important Point:** The Routh-Hurwitz stability criterion is a powerful algebraic method to determine if all poles of a continuous-time system have negative real parts without explicitly solving for the poles. Similarly, Jury's stability test or the properties of the roots of the characteristic equation are used for discrete-time systems.

---

### 4. Practice Questions and Exercises

**Question 1:**
For a continuous-time system with the transfer function $G(s) = \frac{s+5}{s^3 + 2s^2 + 3s + 4}$, what is its characteristic equation? Is the system stable?

**Question 2:**
A discrete-time system is described by the difference equation $y[k+3] - 0.5y[k+2] + 0.1y[k+1] - 0.05y[k] = u[k]$.
(a) Find the characteristic equation of the system.
(b) Determine if the system is stable.

**Question 3:**
Given the state-space representation of a system:
$\dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & 0 \\ 1 & -2 \end{bmatrix}\mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix}\mathbf{u}(t)$
$\mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix}\mathbf{x}(t)$
(a) Determine the characteristic equation.
(b) What are the poles of the system?
(c) Is the system stable?

---

### 5. Answers to Practice Questions

**Answer 1:**
The characteristic equation is the denominator of the transfer function set to zero:
$s^3 + 2s^2 + 3s + 4 = 0$
To determine stability without solving for the roots, one would typically use the Routh-Hurwitz criterion. For this specific polynomial, we can observe that all coefficients are positive. However, this is not sufficient for stability. A Routh-Hurwitz analysis would reveal whether any roots lie in the right-half plane.
*(Self-check: A quick check of the polynomial using tools indicates roots are approximately -1.37, -0.31 + 1.69j, -0.31 - 1.69j. One root is positive, so the system is unstable.)*

**Answer 2:**
(a) The characteristic equation is obtained from the homogeneous part of the difference equation:
$r^3 - 0.5r^2 + 0.1r - 0.05 = 0$

(b) To determine stability, we need to check if the magnitudes of the roots are less than 1.
*(Self-check: Using a root finder, the roots are approximately $0.5$, $0.0 \pm 0.316j$. The magnitudes are $0.5$, $\sqrt{0.1} \approx 0.316$. All magnitudes are less than 1. Therefore, the system is stable.)*

**Answer 3:**
(a) The characteristic equation is $\det(\mathbf{sI} - \mathbf{A}) = 0$.
$\mathbf{sI} - \mathbf{A} = \begin{bmatrix} s & 0 \\ 0 & s \end{bmatrix} - \begin{bmatrix} -1 & 0 \\ 1 & -2 \end{bmatrix} = \begin{bmatrix} s+1 & 0 \\ -1 & s+2 \end{bmatrix}$
$\det(\mathbf{sI} - \mathbf{A}) = (s+1)(s+2) - (0)(-1) = s^2 + 3s + 2$
The characteristic equation is $s^2 + 3s + 2 = 0$.

(b) The poles are the roots of the characteristic equation:
$(s+1)(s+2) = 0$
The poles are $s_1 = -1$ and $s_2 = -2$.

(c) Both poles have negative real parts ($\text{Re}(s_1) = -1 < 0$ and $\text{Re}(s_2) = -2 < 0$). Therefore, the system is **stable**.

---

### 6. Important Points to Remember

*   The **characteristic equation** is the polynomial obtained by setting the denominator of the transfer function (or the characteristic polynomial $\det(\mathbf{sI}-\mathbf{A})$ for state-space) to zero.
*   The **roots of the characteristic equation are the poles** of the system.
*   For **continuous-time systems**, stability is determined by the location of poles in the complex plane:
    *   Left-half plane (Re(s) < 0) $\implies$ Stable
    *   Right-half plane (Re(s) > 0) $\implies$ Unstable
    *   Imaginary axis (Re(s) = 0) $\implies$ Marginally Stable (if simple poles) or Unstable (if repeated poles).
*   For **discrete-time systems**, stability is determined by the location of poles relative to the unit circle:
    *   Inside the unit circle (|r| < 1) $\implies$ Stable
    *   Outside the unit circle (|r| > 1) $\implies$ Unstable
    *   On the unit circle (|r| = 1) $\implies$ Marginally Stable (if simple poles) or Unstable (if repeated poles).
*   The characteristic equation is fundamental for analyzing stability, transient response, and frequency response of dynamic systems.
*   Open-loop systems are simpler but less robust; closed-loop systems use feedback to improve performance and stability.

---

### 7. Connections to Course Outcomes

*   **CO1 & CO2 (Continuous Time Signals & Systems):** The derivation of the characteristic equation for continuous-time systems directly relates to representing these systems using differential equations and transfer functions in the Laplace domain. Understanding the roots (poles) helps analyze the system's response characteristics.
*   **CO3 (Discrete Time Signals & Systems):** Similar to continuous-time systems, the characteristic equation in the Z-domain, derived from difference equations or Z-domain transfer functions, is key to analyzing discrete-time system behavior.
*   **CO4 (Stability of Continuous Time Dynamical Systems):** This entire topic is centered around CO4. The characteristic equation provides the direct means to assess the stability of continuous-time systems by examining the location of its roots (poles) in the complex plane.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbook References and Content Incorporation

This module's content is drawn from the foundational concepts presented in the recommended textbooks:

*   **Signals and Systems by Simon Haykin, Barry Van Veen:** Provides a broad overview of system representation and stability analysis in both continuous and discrete time. Chapter 5 often covers transfer functions and their relation to system dynamics.
*   **Discrete Time Control Systems by Katsuhiko Ogata:** A definitive text for discrete-time systems. Chapter 2 details difference equations and the Z-transform, leading into the concept of poles and stability.
*   **Control Systems Engineering by Norman S. Nise:** Focuses heavily on control system analysis and design. Chapters 2 and 7 are particularly relevant for system modeling (differential equations, transfer functions, state-space) and stability analysis using methods like Routh-Hurwitz, which are directly tied to the characteristic equation.

Content from these books has been incorporated through:
*   **Definitions:** System, open-loop, closed-loop, characteristic equation, poles.
*   **Examples:** Illustrating derivations of the characteristic equation from differential equations, difference equations, and state-space representations.
*   **Stability Criteria:** Clearly outlining the conditions for stability based on pole locations for both continuous-time and discrete-time systems.
*   **Methods:** Implicitly referencing methods like Routh-Hurwitz (for continuous-time) as the means to utilize the characteristic equation for stability assessment.