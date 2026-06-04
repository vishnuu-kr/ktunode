---
title: "Frequency domain Analysis of Feedback systems:"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 3: Frequency domain Analysis of Feedback systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369aa"
status: "completed"
scrapedAt: "2026-05-23T16:38:23.642Z"
---
# Module 3: Frequency Domain Analysis of Feedback Systems in Nonlinear Control Systems

## Introduction

This module introduces the application of frequency domain techniques to analyze the behavior of nonlinear feedback systems. While traditional linear frequency domain methods (like Bode plots, Nyquist plots) are well-established for linear systems, their direct application to nonlinear systems is limited. However, by employing approximations and specific techniques, we can gain valuable insights into the stability and performance of nonlinear systems. This module aims to equip you with the tools to bridge the gap between linear and nonlinear system analysis in the frequency domain.

**Learning Outcomes:**

*   Analyze the qualitative behavior of nonlinear systems about their equilibrium points. (CO1, K3)
*   Analyze the stability of nonlinear systems. (CO2, K3)
*   Analyze the behavior of nonlinear systems using frequency domain analysis. (CO3, K2)
*   Design feedback controllers for nonlinear systems. (CO4, K3)

**Key Concepts and Definitions:**

*   **Equilibrium Point:** A state of a dynamical system where the time derivative of all state variables is zero. For a system $\dot{x} = f(x)$, an equilibrium point $x_e$ satisfies $f(x_e) = 0$.
*   **Linearization:** Approximating a nonlinear system around an equilibrium point by a linear system. This is a crucial step in applying linear frequency domain techniques.
*   **Small-Signal Analysis:** Analyzing the behavior of a system for small deviations around an equilibrium point. This is synonymous with linearization.
*   **Frequency Domain:** The domain where signals are represented by their frequency components, often using transforms like the Laplace transform or Fourier transform.
*   **Transfer Function:** For linear time-invariant (LTI) systems, the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions. This concept is extended for nonlinear systems through linearization.
*   **Gain and Phase Margin:** Measures of relative stability for LTI systems, typically obtained from Bode or Nyquist plots. These concepts can be adapted for nonlinear systems under certain conditions.
*   **Describing Function:** A method used to approximate the behavior of memoryless nonlinearities in a system. It represents the nonlinearity as an equivalent gain that depends on the amplitude of the input sinusoid.

**Textbook References:**

*   **Khalil, Chapter 5 (Linearization and Local Analysis):** Focuses on linearization around equilibrium points, which is foundational for applying frequency domain methods.
*   **Slotine & Li, Chapter 2 (Analysis of Linear Systems):** While focused on linear systems, it provides the necessary background on frequency domain techniques that will be adapted.
*   **Isidori, Chapter 2 (Linearization and Local Properties):** Discusses linearization and the local behavior of nonlinear systems.
*   **Vidyasagar, Chapter 3 (Linearization):** Explains the process and implications of linearizing nonlinear systems.

---

### 3.1 Linearization of Nonlinear Systems Around Equilibrium Points

**Objective:** To understand how to approximate the behavior of a nonlinear system in the vicinity of an equilibrium point using a linear model. This allows us to leverage LTI frequency domain tools.

**Key Concepts:**

*   **State-Space Representation:** A nonlinear system can be represented in state-space form:
    $\dot{x} = f(x, u)$
    $y = h(x, u)$
    where $x$ is the state vector, $u$ is the input, and $y$ is the output.

*   **Equilibrium Point ( $x_e, u_e$ ):** A pair $(x_e, u_e)$ such that $f(x_e, u_e) = 0$. For analysis, we often consider the case where the equilibrium input is $u_e = 0$, and thus $f(x_e, 0) = 0$.

*   **Taylor Series Expansion:** The core of linearization involves expanding the nonlinear functions $f$ and $h$ around the equilibrium point using Taylor series.

    For $f(x, u)$ around $(x_e, u_e)$:
    $f(x, u) \approx f(x_e, u_e) + \left.\frac{\partial f}{\partial x}\right|_{(x_e, u_e)}(x - x_e) + \left.\frac{\partial f}{\partial u}\right|_{(x_e, u_e)}(u - u_e)$
    Since $f(x_e, u_e) = 0$, and setting $u_e = 0$:
    $f(x, u) \approx A (x - x_e) + B u$
    where $A = \left.\frac{\partial f}{\partial x}\right|_{(x_e, u_e)}$ (Jacobian matrix of $f$ with respect to $x$) and $B = \left.\frac{\partial f}{\partial u}\right|_{(x_e, u_e)}$ (Jacobian matrix of $f$ with respect to $u$).

    Similarly for $h(x, u)$ around $(x_e, u_e)$:
    $h(x, u) \approx h(x_e, u_e) + \left.\frac{\partial h}{\partial x}\right|_{(x_e, u_e)}(x - x_e) + \left.\frac{\partial h}{\partial u}\right|_{(x_e, u_e)}(u - u_e)$
    Setting $y_e = h(x_e, u_e)$ and $u_e = 0$:
    $y - y_e \approx C (x - x_e) + D u$
    where $C = \left.\frac{\partial h}{\partial x}\right|_{(x_e, u_e)}$ and $D = \left.\frac{\partial h}{\partial u}\right|_{(x_e, u_e)}$.

*   **Linearized State-Space Model:** Defining the deviation variables:
    $\Delta x = x - x_e$
    $\Delta u = u - u_e = u$ (assuming $u_e = 0$)
    $\Delta y = y - y_e$
    The linearized system becomes:
    $\Delta \dot{x} = A \Delta x + B \Delta u$
    $\Delta y = C \Delta x + D \Delta u$

    This is a standard LTI state-space representation.

**Reference (Khalil, Chapter 5.1):** Khalil provides a detailed exposition on linearization around equilibrium points, emphasizing the Jacobian matrices $A$, $B$, $C$, and $D$.

**Example:**

Consider the nonlinear system:
$\dot{x} = -x^3 + u$
$y = x$

Find the linearized system around the equilibrium point $(x_e, u_e) = (0, 0)$.

**Solution:**
1.  **Equilibrium Point:** $f(x_e, u_e) = -x_e^3 + u_e = 0$. For $(x_e, u_e) = (0, 0)$, $-0^3 + 0 = 0$, so $(0,0)$ is an equilibrium point.
2.  **Jacobian Matrices:**
    $A = \frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(-x^3 + u) = -3x^2$. Evaluated at $(x_e, u_e) = (0,0)$: $A = -3(0)^2 = 0$.
    $B = \frac{\partial f}{\partial u} = \frac{\partial}{\partial u}(-x^3 + u) = 1$. Evaluated at $(x_e, u_e) = (0,0)$: $B = 1$.
    $C = \frac{\partial h}{\partial x} = \frac{\partial}{\partial x}(x) = 1$. Evaluated at $(x_e, u_e) = (0,0)$: $C = 1$.
    $D = \frac{\partial h}{\partial u} = \frac{\partial}{\partial u}(x) = 0$. Evaluated at $(x_e, u_e) = (0,0)$: $D = 0$.
3.  **Linearized System:**
    $\Delta \dot{x} = A \Delta x + B \Delta u \implies \Delta \dot{x} = 0 \cdot \Delta x + 1 \cdot \Delta u \implies \Delta \dot{x} = \Delta u$
    $\Delta y = C \Delta x + D \Delta u \implies \Delta y = 1 \cdot \Delta x + 0 \cdot \Delta u \implies \Delta y = \Delta x$

The linearized system is $\Delta \dot{x} = \Delta u$, $\Delta y = \Delta x$.

**Practice Question 3.1:**
Consider the nonlinear system:
$\dot{x_1} = -x_1 + x_1 x_2$
$\dot{x_2} = -x_2 + x_1^2$
$y = x_1$

Linearize the system around the equilibrium point $(x_{1e}, x_{2e}) = (0, 0)$ and find the transfer function of the linearized system.

**Answer:**
1.  **Equilibrium Point:**
    $-x_{1e} + x_{1e} x_{2e} = 0 \implies -0 + 0 \cdot 0 = 0$
    $-x_{2e} + x_{1e}^2 = 0 \implies -0 + 0^2 = 0$
    So, $(0,0)$ is an equilibrium point.
2.  **Jacobian Matrices:**
    $f_1(x_1, x_2) = -x_1 + x_1 x_2$
    $f_2(x_1, x_2) = -x_2 + x_1^2$
    $A = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix} = \begin{bmatrix} -1 + x_2 & x_1 \\ 2x_1 & -1 \end{bmatrix}$
    At $(0,0)$: $A = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$
    $B = \begin{bmatrix} \frac{\partial f_1}{\partial u} \\ \frac{\partial f_2}{\partial u} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ (assuming $u$ is implicitly controlled or not present)
    $C = \begin{bmatrix} \frac{\partial h}{\partial x_1} & \frac{\partial h}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 1 & 0 \end{bmatrix}$
    $D = \begin{bmatrix} \frac{\partial h}{\partial u} \end{bmatrix} = \begin{bmatrix} 0 \end{bmatrix}$
3.  **Linearized System:**
    $\Delta \dot{x}_1 = - \Delta x_1$
    $\Delta \dot{x}_2 = - \Delta x_2$
    $\Delta y = \Delta x_1$
4.  **Transfer Function:**
    The Laplace transform of the linearized system (with zero initial conditions for $\Delta x$) is:
    $s \Delta X_1(s) = - \Delta X_1(s) \implies (s+1)\Delta X_1(s) = 0 \implies \Delta X_1(s) = 0$ if there's no input.
    If we assume an input $u$ affects $x_1$: $\dot{x}_1 = -x_1 + x_1x_2 + u$. Then $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    $\Delta \dot{x}_1 = -\Delta x_1 + \Delta u$
    $\Delta \dot{x}_2 = -\Delta x_2$
    $\Delta y = \Delta x_1$
    $s \Delta X_1(s) = -\Delta X_1(s) + \Delta U(s)$
    $(s+1) \Delta X_1(s) = \Delta U(s)$
    $\Delta X_1(s) = \frac{1}{s+1} \Delta U(s)$
    $\Delta Y(s) = \Delta X_1(s)$
    The transfer function $G(s) = \frac{\Delta Y(s)}{\Delta U(s)} = \frac{1}{s+1}$.

---

### 3.2 Small-Signal Frequency Response Analysis

**Objective:** To analyze the stability and performance of the linearized nonlinear system using standard LTI frequency domain tools.

**Key Concepts:**

*   **Transfer Function of Linearized System:** Once the linearized state-space model ($\Delta \dot{x} = A \Delta x + B \Delta u$, $\Delta y = C \Delta x + D \Delta u$) is obtained, its transfer function $G(s)$ can be calculated as:
    $G(s) = C(sI - A)^{-1}B + D$

*   **Bode Plots:** Graphical representation of the magnitude and phase of the transfer function $G(j\omega)$ as a function of frequency $\omega$.
    *   **Gain Plot:** $|G(j\omega)|$ vs. $\log(\omega)$ (in dB).
    *   **Phase Plot:** $\angle G(j\omega)$ vs. $\log(\omega)$ (in degrees).

*   **Nyquist Plots:** A polar plot of $G(j\omega)$ in the complex plane, where the frequency $\omega$ is varied from $0$ to $\infty$.

*   **Gain Margin (GM) and Phase Margin (PM):**
    *   **Gain Margin:** The amount of gain that can be added to the system before it becomes unstable. It's the reciprocal of $|G(j\omega)|$ at the frequency where $\angle G(j\omega) = -180^\circ$.
    *   **Phase Margin:** The amount of additional phase lag that can be tolerated before the system becomes unstable. It's the difference between $180^\circ$ and $|\angle G(j\omega)|$ at the frequency where $|G(j\omega)| = 1$.

*   **Stability Analysis (using Bode/Nyquist):** For a feedback system with open-loop transfer function $L(s) = G_{ol}(s)G_{cl}(s)$, stability can be assessed by examining the encirclements of the $-1$ point in the Nyquist plot (Nyquist stability criterion) or by looking at GM and PM from the Bode plot.

**Reference (Slotine & Li, Chapter 2):** This chapter covers detailed methods for analyzing LTI systems using Bode and Nyquist plots, which are directly applicable to the linearized models.

**Example:**

Consider the nonlinear system with linearized transfer function:
$G(s) = \frac{1}{s+1}$

Let's analyze its frequency response.

**Solution:**
1.  **Frequency Response:** Substitute $s = j\omega$:
    $G(j\omega) = \frac{1}{j\omega + 1}$
2.  **Magnitude:**
    $|G(j\omega)| = \left|\frac{1}{j\omega + 1}\right| = \frac{1}{|j\omega + 1|} = \frac{1}{\sqrt{\omega^2 + 1}}$
    In dB: $|G(j\omega)|_{dB} = 20 \log_{10} \left(\frac{1}{\sqrt{\omega^2 + 1}}\right) = -10 \log_{10} (\omega^2 + 1)$
3.  **Phase:**
    $\angle G(j\omega) = \angle \left(\frac{1}{j\omega + 1}\right) = -\angle (j\omega + 1) = -\arctan(\omega)$

*   **Bode Plot:**
    *   At $\omega = 0$, $|G(j\omega)|_{dB} = -10 \log_{10}(1) = 0$ dB. Phase = $0^\circ$.
    *   At high frequencies, $|G(j\omega)|_{dB}$ approaches $-20 \log_{10}(\omega)$, a $-20$ dB/decade slope.
    *   The phase lag increases from $0^\circ$ at $\omega=0$ to $-90^\circ$ as $\omega \to \infty$.

*   **Gain Margin and Phase Margin:**
    *   To find GM, we need the frequency where the phase is $-180^\circ$. Here, the maximum phase lag is $-90^\circ$, so the phase never reaches $-180^\circ$. This implies an infinite gain margin for this simple system.
    *   To find PM, we need the frequency where the magnitude is 1 (0 dB).
        $|G(j\omega)| = 1 \implies \frac{1}{\sqrt{\omega^2 + 1}} = 1 \implies \omega^2 + 1 = 1 \implies \omega = 0$.
        At $\omega = 0$, the phase is $0^\circ$. The PM is $180^\circ - |0^\circ| = 180^\circ$.

**Practice Question 3.2:**
Consider a nonlinear system linearized to have the open-loop transfer function $L(s) = \frac{K}{s(s+1)(s+10)}$. Find the value of $K$ for which the system has a phase margin of $45^\circ$.

**Answer:**
1.  **Frequency Response:**
    $L(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+10)}$
2.  **Phase:**
    $\angle L(j\omega) = \angle K - 90^\circ - \arctan(\omega) - \arctan(\omega/10)$
3.  **Phase Margin Condition:**
    We want the phase margin to be $45^\circ$. This means at the gain crossover frequency $\omega_{gc}$ (where $|L(j\omega_{gc})|=1$), the phase should be $-180^\circ + 45^\circ = -135^\circ$.
    So, $-90^\circ - \arctan(\omega_{gc}) - \arctan(\omega_{gc}/10) = -135^\circ$.
    $\arctan(\omega_{gc}) + \arctan(\omega_{gc}/10) = 45^\circ$.
4.  **Solving for $\omega_{gc}$:**
    Using the arctan addition formula: $\arctan(a) + \arctan(b) = \arctan\left(\frac{a+b}{1-ab}\right)$.
    $\arctan\left(\frac{\omega_{gc} + \omega_{gc}/10}{1 - \omega_{gc}(\omega_{gc}/10)}\right) = 45^\circ$
    $\frac{1.1\omega_{gc}}{1 - \omega_{gc}^2/10} = \tan(45^\circ) = 1$
    $1.1\omega_{gc} = 1 - \omega_{gc}^2/10$
    $\omega_{gc}^2/10 + 1.1\omega_{gc} - 1 = 0$
    Multiply by 10: $\omega_{gc}^2 + 11\omega_{gc} - 10 = 0$.
    Using the quadratic formula:
    $\omega_{gc} = \frac{-11 \pm \sqrt{11^2 - 4(1)(-10)}}{2(1)} = \frac{-11 \pm \sqrt{121 + 40}}{2} = \frac{-11 \pm \sqrt{161}}{2}$
    Since frequency must be positive, $\omega_{gc} = \frac{-11 + \sqrt{161}}{2} \approx \frac{-11 + 12.69}{2} \approx \frac{1.69}{2} \approx 0.845$ rad/sec.
5.  **Finding K:**
    At $\omega_{gc} = 0.845$:
    $|L(j\omega_{gc})| = \frac{K}{|\omega_{gc}||\omega_{gc}+j1||\omega_{gc}+j10|} = 1$
    $K = |\omega_{gc}||\omega_{gc}+j1||\omega_{gc}+j10|$
    $K = 0.845 \sqrt{0.845^2 + 1^2} \sqrt{0.845^2 + 10^2}$
    $K = 0.845 \sqrt{0.714 + 1} \sqrt{0.714 + 100}$
    $K = 0.845 \sqrt{1.714} \sqrt{100.714}$
    $K \approx 0.845 \times 1.309 \times 10.035 \approx 11.10$

---

### 3.3 Introduction to Describing Functions

**Objective:** To introduce a method for approximating the behavior of memoryless nonlinearities in feedback systems when driven by sinusoidal inputs. This is a key nonlinear frequency domain technique.

**Key Concepts:**

*   **Memoryless Nonlinearities:** Nonlinearities where the output depends only on the current input, not on past inputs or the system's history (e.g., saturation, dead zone, relay).
*   **Sinusoidal Input:** Assume the input to the nonlinearity is $u(t) = A \sin(\omega t)$.
*   **Describing Function $N(A)$:** The ratio of the fundamental component of the output of the nonlinearity to the amplitude of the sinusoidal input. It's effectively an amplitude-dependent equivalent gain.
    $y_{nl}(t) = N(A) A \sin(\omega t + \phi)$
    where $N(A) = |N(A)|e^{j\phi}$. Often, the phase $\phi$ is zero for common nonlinearities.
*   **Calculation of Describing Function:** Using Fourier series expansion of the nonlinearity's output.
    $y_{nl}(t) = \frac{a_0}{2} + \sum_{k=1}^{\infty} (a_k \cos(k\omega t) + b_k \sin(k\omega t))$
    The fundamental component is $b_1 \sin(\omega t) + a_1 \cos(\omega t)$.
    The amplitude of the fundamental component is $\sqrt{a_1^2 + b_1^2}$.
    The describing function $N(A)$ is then $\frac{\sqrt{a_1^2 + b_1^2}}{A}$.

**Reference (Khalil, Chapter 7 - Limit Cycles and Oscillations):** Khalil introduces the describing function method to analyze limit cycle oscillations in nonlinear systems.

**Common Describing Functions:**

1.  **Saturation (Ideal):**
    $y = \begin{cases} Kx & |x| \le x_{sat} \\ K x_{sat} \text{sgn}(x) & |x| > x_{sat} \end{cases}$
    For input $A \sin(\omega t)$:
    $N(A) = \begin{cases} K & |A| \le x_{sat} \\ \frac{2K}{\pi} \left[ \arcsin\left(\frac{x_{sat}}{A}\right) + \frac{x_{sat}}{A}\sqrt{1 - \left(\frac{x_{sat}}{A}\right)^2} \right] & |A| > x_{sat} \end{cases}$
    For $|A| \le x_{sat}$, $N(A) = K$ (constant gain).
    For $|A| > x_{sat}$, $N(A)$ decreases from $K$ towards 0 as $A$ increases.

2.  **Dead Zone:**
    $y = \begin{cases} 0 & |x| \le d \\ K(x-d \cdot \text{sgn}(x)) & |x| > d \end{cases}$
    For input $A \sin(\omega t)$ where $A > d$:
    $N(A) = \begin{cases} K & A \le d \\ K \left(1 - \frac{2}{\pi} \left[ \sqrt{1 - \left(\frac{d}{A}\right)^2} + \arcsin\left(\frac{d}{A}\right) \right] \right) & A > d \end{cases}$
    $N(A)$ decreases from $K$ as $A$ increases.

3.  **Ideal Relay (Hysteresis-free):**
    $y = \begin{cases} h & x > 0 \\ 0 & x = 0 \\ -h & x < 0 \end{cases}$
    For input $A \sin(\omega t)$ where $A > 0$:
    $N(A) = \frac{4h}{\pi A}$ (This is a purely real, decreasing function of A).

**Example:**

Consider a system with a feedback loop containing a linear element with transfer function $G(s)$ and a nonlinear element with a describing function $N(A)$. The open-loop transfer function in the frequency domain analysis using describing functions is $L_{DF}(j\omega, A) = N(A)G(j\omega)$.

Consider a system with $G(s) = \frac{1}{s+1}$ and a saturation nonlinearity $y_{nl} = \text{sat}(x)$ where $\text{sat}(x) = \begin{cases} x & |x| \le 1 \\ \text{sgn}(x) & |x| > 1 \end{cases}$.

What is the describing function of the saturation element?

**Solution:**
Here, $K=1$ and $x_{sat}=1$.
For $|A| \le 1$: $N(A) = K = 1$.
For $|A| > 1$:
$N(A) = \frac{2(1)}{\pi} \left[ \arcsin\left(\frac{1}{A}\right) + \frac{1}{A}\sqrt{1 - \left(\frac{1}{A}\right)^2} \right]$
$N(A) = \frac{2}{\pi} \left[ \arcsin\left(\frac{1}{A}\right) + \frac{\sqrt{A^2 - 1}}{A^2} \right]$

**Practice Question 3.3:**
A system has a linear part with transfer function $G(s) = \frac{10}{s(s+2)}$ and a hysteresis-free ideal relay with output $\pm 1$. If the relay is in the forward path, find the describing function for the relay and determine the system's behavior at high frequencies if $A$ is very large.

**Answer:**
1.  **Describing Function of Ideal Relay:**
    For an ideal relay with output $\pm h$, the describing function is $N(A) = \frac{4h}{\pi A}$.
    Here, $h=1$, so $N(A) = \frac{4}{\pi A}$.
2.  **Effective Open-Loop Transfer Function:**
    The overall open-loop transfer function for this analysis is $L_{DF}(j\omega, A) = N(A)G(j\omega) = \frac{4}{\pi A} \cdot \frac{10}{j\omega(j\omega+2)}$.
3.  **Behavior at High Frequencies:**
    As frequency $\omega$ becomes very large, $j\omega+2 \approx j\omega$.
    So, $L_{DF}(j\omega, A) \approx \frac{40}{\pi A} \cdot \frac{1}{j\omega(j\omega)} = \frac{40}{\pi A} \cdot \frac{1}{-\omega^2}$.
    The magnitude is $|L_{DF}(j\omega, A)| \approx \frac{40}{\pi A \omega^2}$.
    As $\omega \to \infty$, the magnitude $|L_{DF}(j\omega, A)| \to 0$.
    The phase is $\angle L_{DF}(j\omega, A) \approx -180^\circ$.
    This suggests that for sufficiently large frequencies, the system's response will be attenuated significantly and tend towards instability (phase close to $-180^\circ$). The presence of the nonlinear gain $N(A)$ (which decreases with $A$) means the overall gain at high frequencies is further reduced.

---

### 3.4 Stability Analysis using Describing Functions

**Objective:** To use the Describing Function method to predict the existence and amplitude of sustained oscillations (limit cycles) in nonlinear feedback systems.

**Key Concepts:**

*   **Limit Cycle:** A closed trajectory in the state space that is an isolated periodic solution. This means that trajectories starting near the limit cycle converge to it.
*   **Stability Criterion for Limit Cycles:** A limit cycle is stable if trajectories starting near it converge to it; it is unstable if they diverge.
*   **Describing Function Method for Limit Cycles:**
    1.  Identify the nonlinear element and its describing function $N(A)$.
    2.  Consider the rest of the system as a linear element with transfer function $G(s)$.
    3.  The feedback loop has an open-loop transfer function $L(s) = N(A)G(s)$.
    4.  For sustained oscillations, the characteristic equation of the linearized system around the oscillation must have roots on the imaginary axis (or near it). This corresponds to the Nyquist criterion for marginal stability of the linear system, or the condition where $1 + L(j\omega) = 0$, which means $L(j\omega) = -1$.
    5.  This translates to:
        *   $|N(A)G(j\omega)| = 1$
        *   $\angle N(A)G(j\omega) = -180^\circ$ (or $180^\circ$)
    6.  Since $N(A)$ is amplitude-dependent, we look for the intersection of two loci on a frequency response plot:
        *   $G(j\omega)$: The frequency response of the linear part.
        *   $-\frac{1}{N(A)}$: The inverse of the describing function (often plotted as $-1/N(A)$ vs. A or $1/N(A)$ vs. A).
    7.  An intersection of $G(j\omega)$ and $-1/N(A)$ at a specific frequency $\omega_0$ and amplitude $A_0$ indicates a potential limit cycle of amplitude $A_0$ and frequency $\omega_0$.
    8.  **Stability of the Limit Cycle:**
        *   If the locus of $G(j\omega)$ crosses the locus of $-1/N(A)$ from below to above (as frequency increases), the limit cycle is typically unstable.
        *   If the locus of $G(j\omega)$ crosses from above to below, the limit cycle is typically stable.
        *   A more rigorous stability analysis involves looking at the describing function $N(A)$ and the gain $|G(j\omega)|$ as functions of $A$. If $|G(j\omega_{osc})| < 1/N(A_{osc})$ for amplitudes $A < A_{osc}$ and $|G(j\omega_{osc})| > 1/N(A_{osc})$ for amplitudes $A > A_{osc}$, the limit cycle is stable.

**Reference (Khalil, Chapter 7.2):** Khalil extensively details the describing function method for analyzing limit cycles, including graphical interpretations and stability criteria.

**Example:**

Consider a system with $G(s) = \frac{1}{s(s+1)}$ and an ideal relay with output $\pm 1$.
We want to find if there are any limit cycles.

**Solution:**
1.  **Describing Function:** $N(A) = \frac{4h}{\pi A} = \frac{4}{\pi A}$.
2.  **Linear Part Frequency Response:**
    $G(j\omega) = \frac{1}{j\omega(j\omega+1)} = \frac{1}{-\omega^2 + j\omega}$
3.  **Condition for Oscillation:** $|N(A)G(j\omega)| = 1$ and $\angle N(A)G(j\omega) = -180^\circ$.
    $\angle G(j\omega) = \angle \frac{1}{-\omega^2 + j\omega} = - \angle (-\omega^2 + j\omega) = - (180^\circ - \arctan(\frac{\omega}{-\omega^2}))$. For $\omega > 0$, this is $- (180^\circ - \arctan(-1/\omega)) = - (180^\circ - (180^\circ - \arctan(1/\omega))) = -\arctan(1/\omega)$.
    This means $\angle G(j\omega)$ is always between $0^\circ$ and $-90^\circ$. It never reaches $-180^\circ$.
    However, the phase of $G(j\omega)$ is actually $-90^\circ - \arctan(\omega)$. As $\omega$ increases, the phase goes from $-90^\circ$ towards $-180^\circ$.
    The phase of $N(A)G(j\omega)$ is $\angle N(A) + \angle G(j\omega) = 0 + (-90^\circ - \arctan(\omega))$.
    For the system to oscillate, we need $\angle N(A)G(j\omega) = -180^\circ$.
    $-90^\circ - \arctan(\omega) = -180^\circ \implies \arctan(\omega) = 90^\circ$, which is not possible for finite $\omega$.
    This implies that an oscillation at exactly $-180^\circ$ phase is not achieved.

    Let's re-evaluate the phase of $G(j\omega)$:
    $G(j\omega) = \frac{1}{j\omega} \cdot \frac{1}{j\omega+1}$
    $\angle G(j\omega) = \angle \frac{1}{j\omega} + \angle \frac{1}{j\omega+1} = -90^\circ - \arctan(\omega)$

    The condition for sustained oscillation is that the open-loop transfer function $N(A)G(j\omega)$ must have a phase of $-180^\circ$ and a magnitude of 1 for some $A$ and $\omega$.
    Phase: $-90^\circ - \arctan(\omega) = -180^\circ$ (since $N(A)$ is real).
    $\arctan(\omega) = 90^\circ$, which is not possible for finite $\omega$.

    Let's consider the typical plot: $G(j\omega)$ vs. $-1/N(A)$.
    $G(j\omega) = \frac{1}{-\omega^2 + j\omega}$
    $-1/N(A) = -\frac{\pi A}{4}$ (This is a negative real number, varying with $A$)

    We are looking for an intersection of the $G(j\omega)$ locus with the negative real axis (for $-1/N(A)$).
    The phase of $G(j\omega)$ is $-90^\circ - \arctan(\omega)$. For the phase to be $-180^\circ$, we need $\arctan(\omega) = 90^\circ$, which is not possible.

    **Important Note:** If $G(s)$ has poles on the imaginary axis (like $1/s$), it inherently has phase characteristics that can lead to oscillations. The issue here is that the phase of $G(j\omega)$ never reaches $-180^\circ$ exactly.

    Let's consider a different example where $-180^\circ$ is reached.
    Suppose $G(s) = \frac{1}{s(s+1)(s+2)}$.
    Then $\angle G(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$.
    We need $-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$.
    $\arctan(\omega) + \arctan(\omega/2) = 90^\circ$.
    $\frac{\omega + \omega/2}{1 - \omega^2/2} = \tan(90^\circ) \to \infty$.
    This requires the denominator to be zero: $1 - \omega^2/2 = 0 \implies \omega^2 = 2 \implies \omega = \sqrt{2}$.
    At $\omega = \sqrt{2}$, the phase is exactly $-180^\circ$.

    Now, let's find the amplitude $A$ for the relay $N(A) = \frac{4}{\pi A}$.
    We need $|N(A)G(j\omega)| = 1$. At $\omega = \sqrt{2}$:
    $|G(j\sqrt{2})| = \frac{1}{\sqrt{2}(\sqrt{2}+1)(\sqrt{2}+2)} = \frac{1}{\sqrt{2}(3\sqrt{2}+3)} = \frac{1}{6+3\sqrt{2}} \approx \frac{1}{6+4.24} \approx \frac{1}{10.24}$.
    $|N(A)G(j\sqrt{2})| = \frac{4}{\pi A} \cdot \frac{1}{6+3\sqrt{2}} = 1$.
    $A = \frac{4}{\pi (6+3\sqrt{2})} \approx \frac{4}{3.14 \times 10.24} \approx \frac{4}{32.15} \approx 0.124$.

    So, a limit cycle with frequency $\omega \approx \sqrt{2}$ rad/sec and amplitude $A \approx 0.124$ is predicted.
    **Stability:** Since $N(A)$ is a decreasing function of $A$, the $-1/N(A)$ locus moves to the right as $A$ increases. The $G(j\omega)$ locus intersects the negative real axis at $\omega=\sqrt{2}$. If $G(j\omega)$ crosses $-1/N(A)$ from above to below as $A$ increases (i.e., as $-1/N(A)$ moves to the right), the limit cycle is stable.

**Practice Question 3.4:**
Consider a system with $G(s) = \frac{1}{s+1}$ and a dead zone nonlinearity with $K=1$ and $d=1$. Predict the existence of limit cycles using the describing function method.

**Answer:**
1.  **Describing Function of Dead Zone:**
    For $A > d=1$: $N(A) = K \left(1 - \frac{2}{\pi} \left[ \sqrt{1 - \left(\frac{d}{A}\right)^2} + \arcsin\left(\frac{d}{A}\right) \right] \right)$
    $N(A) = 1 \cdot \left(1 - \frac{2}{\pi} \left[ \sqrt{1 - \frac{1}{A^2}} + \arcsin\left(\frac{1}{A}\right) \right] \right)$
    For $A \le d=1$: $N(A) = K = 1$.
2.  **Linear Part Frequency Response:**
    $G(j\omega) = \frac{1}{j\omega+1}$
3.  **Condition for Oscillation:** We need to find if $|N(A)G(j\omega)| = 1$ and $\angle N(A)G(j\omega) = -180^\circ$ for some $A, \omega$.
    The phase of $G(j\omega)$ is $-\arctan(\omega)$. This phase is always between $0^\circ$ and $-90^\circ$ for $\omega > 0$.
    Since the describing function $N(A)$ for the dead zone is always real and positive, the phase of $N(A)G(j\omega)$ will also be between $0^\circ$ and $-90^\circ$.
    It is impossible for the phase to reach $-180^\circ$.
4.  **Conclusion:** No limit cycles are predicted by the describing function method for this system. The phase lag of the linear system is not sufficient to cause instability in conjunction with the nonlinearity.

---

### 3.5 Controller Design for Nonlinear Systems using Frequency Domain Techniques

**Objective:** To adapt frequency domain concepts for controller design for nonlinear systems, typically focusing on the linearized model or using robust control principles.

**Key Concepts:**

*   **Design based on Linearized Model:** The most common approach is to design a controller for the linearized system to meet desired LTI performance specifications (e.g., desired gain and phase margins, settling time, overshoot). The designed controller is then applied to the nonlinear system, hoping it performs adequately within its operating region.
*   **Robust Control:** Designing controllers that ensure stability and performance even in the presence of unmodeled dynamics or uncertainties (which can include nonlinearities). Frequency domain tools like $\mu$-analysis and structured singular value theory are powerful for this.
*   **Gain Scheduling:** A control strategy where controller parameters are adjusted based on the operating point of the system. Frequency domain analysis of the linearized system at different operating points can inform the gain scheduling strategy.
*   **Nonlinearities as Uncertainty:** For robust control, nonlinearities can be treated as multiplicative or additive uncertainties in the frequency domain.
*   **Example Controller Design Techniques:**
    *   **PID Control:** Tuning PID controllers for the linearized system using frequency response methods (e.g., Ziegler-Nichols, Cohen-Coon, or directly from Bode plots for desired margins).
    *   **Lead/Lag Compensators:** Designing lead or lag compensators to shape the open-loop frequency response of the linearized system to achieve desired performance and stability margins.

**Reference (Slotine & Li, Chapter 8 - Robust Control):** While not strictly frequency domain for nonlinearities, this chapter covers robust control concepts that are often implemented using frequency domain tools and can handle uncertainties arising from nonlinearities.

**Example:**

Consider a nonlinear system whose linearized model has an open-loop transfer function $L(s) = \frac{K}{s(s+1)}$. We want to design a controller to achieve a phase margin of $45^\circ$ and a gain margin of at least 10 dB.

**Solution:**
Let's add a simple proportional controller $C(s) = K_p$. The open-loop transfer function is $L_{OL}(s) = K_p \frac{K}{s(s+1)}$.
1.  **Frequency Response:** $L_{OL}(j\omega) = \frac{K_p K}{j\omega(j\omega+1)}$.
2.  **Phase:** $\angle L_{OL}(j\omega) = -90^\circ - \arctan(\omega)$.
3.  **Phase Margin:** We need the phase to be $-135^\circ$ at the gain crossover frequency $\omega_{gc}$ (where $|L_{OL}(j\omega_{gc})| = 1$).
    $-90^\circ - \arctan(\omega_{gc}) = -135^\circ \implies \arctan(\omega_{gc}) = 45^\circ \implies \omega_{gc} = 1$.
4.  **Gain Margin:** We need the magnitude to be at least 10 dB at the phase crossover frequency $\omega_{pc}$ (where phase is $-180^\circ$).
    $-90^\circ - \arctan(\omega_{pc}) = -180^\circ \implies \arctan(\omega_{pc}) = 90^\circ$, not possible. This means with a simple proportional controller, we can't reach $-180^\circ$.
    Let's assume the phase crossover frequency for a system with $K_p K=1$ (unity gain at DC) is very high, and we focus on phase margin.

    At $\omega_{gc} = 1$:
    $|L_{OL}(j1)| = \frac{K_p K}{|j1(j1+1)|} = \frac{K_p K}{|1+j1|} = \frac{K_p K}{\sqrt{1^2+1^2}} = \frac{K_p K}{\sqrt{2}}$.
    For a phase margin of $45^\circ$, we need $|L_{OL}(j1)| = 1$.
    So, $\frac{K_p K}{\sqrt{2}} = 1 \implies K_p K = \sqrt{2}$.
    If we set $K_p K = \sqrt{2}$, the phase margin is $45^\circ$.
    The gain margin will be infinite as the phase never reaches $-180^\circ$.

    Now, let's try to achieve a gain margin of 10 dB as well. This usually requires modifying the system's frequency response, perhaps with a lead compensator.
    Let's consider a lead compensator $C(s) = K_p \frac{s+a}{s+b}$ with $b > a$.

    For simplicity, let's assume the linearized system is $G(s) = \frac{1}{s(s+1)}$ and we want a phase margin of $45^\circ$.
    We found $\omega_{gc} = 1$ and need $|K_p G(j\omega_{gc})| = 1$.
    $|K_p G(j1)| = |K_p \frac{1}{j1(j1+1)}| = |K_p \frac{1}{1+j1}| = \frac{K_p}{\sqrt{2}} = 1 \implies K_p = \sqrt{2}$.
    So, a proportional controller $C(s) = \sqrt{2}$ gives a phase margin of $45^\circ$. The gain margin is infinite.

**Practice Question 3.5:**
You have linearized a nonlinear system around an equilibrium point and obtained the transfer function $G(s) = \frac{1}{s+2}$. Design a lead compensator $C(s) = K_p \frac{s+a}{s+b}$ such that the closed-loop system has a phase margin of $50^\circ$ and a bandwidth of approximately $10$ rad/sec. Assume $K_p=1$.

**Answer:**
1.  **Linearized System:** $G(s) = \frac{1}{s+2}$.
2.  **Lead Compensator:** $C(s) = K_p \frac{s+a}{s+b} = \frac{s+a}{s+b}$ (since $K_p=1$).
3.  **Open-Loop Transfer Function:** $L(s) = C(s)G(s) = \frac{s+a}{s+b} \cdot \frac{1}{s+2} = \frac{s+a}{(s+b)(s+2)}$.
4.  **Desired Bandwidth:** The bandwidth is approximately the gain crossover frequency $\omega_{gc}$ where $|L(j\omega_{gc})|=1$. We want $\omega_{gc} \approx 10$ rad/sec.
5.  **Desired Phase Margin:** $50^\circ$ at $\omega_{gc} = 10$.
    $\angle L(j\omega) = \angle \frac{j\omega+a}{j\omega+b} + \angle \frac{1}{j\omega+2}$
    $\angle L(j\omega) = \arctan(\omega/a) - \arctan(\omega/b) - \arctan(\omega/2)$
    At $\omega = 10$, we need: $\arctan(10/a) - \arctan(10/b) - \arctan(10/2) = -180^\circ + 50^\circ = -130^\circ$.
    $\arctan(10/a) - \arctan(10/b) - \arctan(5) = -130^\circ$.
    $\arctan(10/a) - \arctan(10/b) = -130^\circ + \arctan(5) \approx -130^\circ + 78.69^\circ = -51.31^\circ$.

6.  **Magnitude Condition at $\omega_{gc}=10$:**
    $|L(j10)| = \left|\frac{j10+a}{j10+b} \cdot \frac{1}{j10+2}\right| = 1$.
    $\frac{\sqrt{100+a^2}}{\sqrt{100+b^2}} \cdot \frac{1}{\sqrt{100+4}} = 1$.
    $\frac{\sqrt{100+a^2}}{\sqrt{100+b^2}} \cdot \frac{1}{\sqrt{104}} = 1$.
    $\sqrt{100+a^2} = \sqrt{104(100+b^2)}$.
    $100+a^2 = 10400 + 104b^2$.
    $a^2 - 104b^2 = 10300$.

7.  **Typical Lead Compensator Design:**
    *   Place the pole $b$ to the right of the zero $a$, and $a$ should be related to the crossover frequency. Let $a$ be around 1/10th of $\omega_{gc}$ or less, e.g., $a=1$.
    *   If $a=1$: $\arctan(10/1) - \arctan(10/b) = -51.31^\circ$.
        $\arctan(10) - \arctan(10/b) = -51.31^\circ$.
        $84.29^\circ - \arctan(10/b) = -51.31^\circ$.
        $\arctan(10/b) = 84.29^\circ + 51.31^\circ = 135.6^\circ$. This is not possible as arctan is typically in $(-\pi/2, \pi/2)$. Something is wrong with the angle calculation or requirement.

    **Revisiting Angle:** $\angle L(j\omega) = \arctan(\omega/a) - \arctan(\omega/b) - \arctan(\omega/2)$.
    We need this to be $-130^\circ$.
    Let's try to achieve the phase margin using the angle contribution of the lead compensator.
    $\phi_{lead} = \arctan(\omega/a) - \arctan(\omega/b)$. This phase lead should compensate for the phase lag of $G(j\omega)$ at $\omega_{gc}=10$.
    Phase lag of $G(j10)$ is $\arctan(10/2) = \arctan(5) = 78.69^\circ$.
    We need $50^\circ$ PM, so the phase of $L(j10)$ must be $-130^\circ$.
    The phase contribution of $G(j10)$ is $-78.69^\circ$.
    So, $\phi_{lead} = -130^\circ - (-78.69^\circ) = -51.31^\circ$. This is a phase *lag*, which means a lead compensator is not directly suitable for increasing phase margin if $a<b$.

    Let's assume the requirement meant to achieve a phase margin by shaping the response. The lead compensator *increases* phase around its corner frequencies.
    A common design strategy is to pick $a$ and $b$ such that the phase lead is maximized at $\omega_{gc}$ and equals the required phase boost.
    The maximum phase lead of $\frac{s+a}{s+b}$ occurs at $\omega = \sqrt{ab}$. The phase lead is $\sin^{-1}\left(\frac{b-a}{b+a}\right)$.
    Let $\omega_{gc} = 10$. We want $|L(j10)| = 1$.
    $|C(j10)G(j10)| = |\frac{j10+a}{j10+b}| \cdot |\frac{1}{j10+2}| = \frac{\sqrt{100+a^2}}{\sqrt{100+b^2}} \cdot \frac{1}{\sqrt{104}} = 1$.
    $\frac{100+a^2}{100+b^2} = 104 \implies 100+a^2 = 10400 + 104b^2$.

    Let's try setting the zero $a$ such that $\omega_{gc}$ is midway between $a$ and $b$.
    Let $a = \omega_{gc}/k$ and $b = k \omega_{gc}$ for some $k>1$.
    If $k=2$, $a=5, b=20$.
    Then $\frac{100+25}{100+400} = \frac{125}{500} = 1/4$.
    $|L(j10)| = \frac{1}{2} \cdot \frac{1}{\sqrt{104}} \approx \frac{1}{2} \cdot \frac{1}{10.2} \approx \frac{1}{20.4} \ne 1$. This is not correct.

    The bandwidth requirement means $|G(j\omega)|$ at $\omega_{bw} \approx 10$ is $1/\sqrt{2} \approx 0.707$.
    $|G(j10)| = |\frac{1}{j10+2}| = \frac{1}{\sqrt{104}} \approx 0.098$. This is very low.

    Let's reconsider the PM.
    $\angle L(j\omega) = \arctan(\omega/a) - \arctan(\omega/b) - \arctan(\omega/2)$.
    We want PM of $50^\circ$ at $\omega_{gc}$. Let's assume $\omega_{gc}$ is where $|G(j\omega_{gc})|$ is $-10$ dB (approx for PM).
    $|G(j\omega)| = \frac{1}{\sqrt{\omega^2+4}}$. $|G(j\omega)|_{dB} = -10 \log_{10}(\omega^2+4)$.
    $-10 \log_{10}(\omega_{gc}^2+4) = -10 \implies \omega_{gc}^2+4 = 1 \implies \omega_{gc}^2 = -3$. Impossible.

    This problem requires a more systematic lead compensator design. A common choice for the zero $a$ is often one decade below the desired $\omega_{gc}$. Let $a=1$.
    Then we need $\arctan(10) - \arctan(10/b) - \arctan(5) = -130^\circ$.
    $84.29^\circ - \arctan(10/b) - 78.69^\circ = -130^\circ$.
    $5.6^\circ - \arctan(10/b) = -130^\circ$.
    $\arctan(10/b) = 135.6^\circ$. Again, this angle suggests an issue with the approach or values.

    **Alternative Approach:** Ensure the phase of $G(j\omega)$ at a frequency $\omega_{gc}$ is $\phi_G$. We need the compensator to add $\phi_{comp} = PM - \phi_G - 180$.
    Let's set $a$ and $b$ to achieve the PM at the *original* crossover frequency of $G(s)$.
    $|G(j\omega)| = 1 \implies \frac{1}{\sqrt{\omega^2+4}} = 1 \implies \omega^2+4=1$. Still impossible.

    Let's assume $K_p$ is used to set the crossover frequency.
    $|K_p G(j\omega)| = 1 \implies \frac{K_p}{\sqrt{\omega^2+4}} = 1 \implies \omega_{gc}^2 = K_p^2 - 4$.
    Phase of $G(j\omega)$ is $-\arctan(\omega/2)$.
    We need PM of $50^\circ$ at $\omega_{gc}$.
    $\angle L(j\omega_{gc}) = \angle C(j\omega_{gc}) + \angle G(j\omega_{gc}) = -130^\circ$.
    $\angle G(j\omega_{gc}) = -\arctan(\omega_{gc}/2)$.
    $\angle C(j\omega_{gc}) = \arctan(\omega_{gc}/a) - \arctan(\omega_{gc}/b)$.
    $\arctan(\omega_{gc}/a) - \arctan(\omega_{gc}/b) - \arctan(\omega_{gc}/2) = -130^\circ$.

    For bandwidth of 10 rad/sec, this implies $|L(j10)| \approx 1$.
    $\frac{K_p}{\sqrt{104}} \approx 1 \implies K_p \approx \sqrt{104} \approx 10.2$.
    Let $K_p = 10.2$. Then $\omega_{gc} = \sqrt{10.2^2 - 4} = \sqrt{104 - 4} = \sqrt{100} = 10$.
    So $K_p \approx 10.2$ gives $\omega_{gc} = 10$.
    Now, phase at $\omega_{gc}=10$: $\angle G(j10) = -\arctan(10/2) = -78.69^\circ$.
    We need $\angle C(j10) = -130^\circ - (-78.69^\circ) = -51.31^\circ$.
    $\arctan(10/a) - \arctan(10/b) = -51.31^\circ$.
    Let's choose $a$ and $b$ to provide this phase lead. A common rule is to choose $a$ and $b$ such that $\sqrt{ab} \approx \omega_{gc}$.
    Let $a=2.5$, $b=40$. Then $\sqrt{ab} = \sqrt{100} = 10$.
    $\arctan(10/2.5) - \arctan(10/40) = \arctan(4) - \arctan(0.25) = 75.96^\circ - 14.04^\circ = 61.92^\circ$. This is a positive phase lead, we need a negative value.

    This implies the lead compensator adds positive phase, so the requirement to achieve a negative phase contribution to reach $-130^\circ$ is incorrect. The total phase must be $-130^\circ$.

    Let $a = 1$. We need $\arctan(10) - \arctan(10/b) = -51.31^\circ$.
    $84.29^\circ - \arctan(10/b) = -51.31^\circ \implies \arctan(10/b) = 135.6^\circ$. This is still problematic.

    **Correct approach for Lead Compensator:**
    Choose $a = 1$. Let the maximum phase boost be $\phi_m = 60^\circ$ (to be added to $-78.69^\circ$ to reach $-130^\circ$, which is not possible). The required additional phase is $-51.31^\circ$, meaning we need a phase lag from the compensator at $\omega_{gc}$, which is counterintuitive for a lead compensator.

    Let's assume the goal is a PM of $50^\circ$, meaning the phase at $\omega_{gc}$ is $-130^\circ$.
    The phase of $G(j\omega_{gc})$ is $-78.69^\circ$ when $\omega_{gc}=10$.
    We need the compensator to contribute $-130^\circ - (-78.69^\circ) = -51.31^\circ$.
    A lead compensator provides a positive phase lead. This implies the design requirements might be contradictory for a simple lead compensator if interpreted this way.

    **Standard Lead Design:**
    1.  Determine $\omega_{gc}$ from bandwidth requirement $|K_p G(j\omega_{gc})| \approx 1$. Let $K_p = 10.2$, so $\omega_{gc}=10$.
    2.  Calculate the phase of $G(j\omega_{gc})$: $\phi_G = -\arctan(10/2) = -78.69^\circ$.
    3.  Determine the required phase boost: $\phi_{boost} = PM - \phi_G - 180^\circ = 50^\circ - (-78.69^\circ) - 180^\circ = -51.31^\circ$. This is a negative phase boost.

    This means the lead compensator might not be the right choice, or the parameters need to be chosen differently.
    If the requirement was to achieve a phase margin of $50^\circ$ *from a lower initial phase margin*, then the lead compensator is appropriate.

    Let's assume the initial system $G(s) = \frac{1}{s+2}$ needs improvement. With $K_p=1$, $\omega_{gc} = \sqrt{1^2-4}$ impossible.
    With $K_p=5$, $\omega_{gc} = \sqrt{25-4} = \sqrt{21} \approx 4.58$.
    $\phi_G = -\arctan(4.58/2) = -66.3^\circ$.
    We need PM of $50^\circ$, so phase at $\omega_{gc}$ must be $-130^\circ$.
    Phase boost needed: $-130^\circ - (-66.3^\circ) = -63.7^\circ$. Still negative.

    **Let's use the bandwidth requirement to set $\omega_{gc}$ and then design for PM.**
    With $K_p = 10.2$, $\omega_{gc} = 10$. Phase of $G(j10)$ is $-78.69^\circ$.
    We need the compensator to add phase. Suppose we target a PM of $50^\circ$.
    Let the phase margin of $K_p G(s)$ be $-10^\circ$ (arbitrary choice to allow lead compensator to boost).
    We need $\angle G(j\omega) = -170^\circ$. $\omega = \sqrt{170^2-4}$ impossible.

    **Let's design for PM $50^\circ$ first with $K_p$ and then adjust.**
    Let $K_p=5$. $\omega_{gc} \approx 4.58$. Phase is $-66.3^\circ$. Phase margin is $180 - 66.3 = 113.7^\circ$. This is already good.
    Let's increase $K_p$ to lower PM and increase bandwidth.
    Let $K_p = 20$. $\omega_{gc} = \sqrt{400-4} \approx 19.9$.
    $\phi_G = -\arctan(19.9/2) = -84.27^\circ$. Phase margin is $180 - 84.27 = 95.73^\circ$.

    Let's assume the question implied that the bandwidth of $G(s)$ itself is 2 rad/sec. And we want to increase it and set PM.
    The question is tricky. If we want a bandwidth of 10 rad/sec, that implies $|C(j10)G(j10)| \approx 1$.
    Let $C(s) = K_p \frac{s+a}{s+b}$. Assume $K_p=1$.
    $| \frac{j10+a}{j10+b} \frac{1}{j10+2} | = 1 \implies \frac{\sqrt{100+a^2}}{\sqrt{100+b^2}} \frac{1}{\sqrt{104}} = 1$.
    $\sqrt{100+a^2} = \sqrt{104(100+b^2)}$.
    $100+a^2 = 10400 + 104b^2$.

    Let $a=2$. Phase boost needed at $\omega_{gc}=10$ is $\phi_{comp}$.
    $\angle G(j10) = -78.69^\circ$.
    $\angle C(j10) = \arctan(10/2) - \arctan(10/b) = 75.96^\circ - \arctan(10/b)$.
    Total phase: $75.96^\circ - \arctan(10/b) - 78.69^\circ = -130^\circ$.
    $-2.73^\circ - \arctan(10/b) = -130^\circ$.
    $\arctan(10/b) = 127.27^\circ$. Again, problematic angle.

    **Final strategy:** The bandwidth of $G(s)$ is around 2 rad/sec. To achieve a bandwidth of 10 rad/sec and a PM of $50^\circ$, we need significant gain and phase shaping. A lead compensator is suitable.
    Let's set $\omega_{gc} = 10$.
    We need to find $K_p, a, b$.
    Let the lead compensator provide a phase boost of $\phi_m$. The frequency of maximum phase boost $\omega_m = \sqrt{ab}$.
    $\phi_m = \arcsin(\frac{b-a}{b+a})$.
    Let $\omega_m = \omega_{gc} = 10$. So $ab = 100$.
    Let the phase lag at $\omega_{gc}$ be $\phi_G + \phi_C = -130^\circ$, where $\phi_C$ is the phase of $C(j10)$.
    The phase of $G(j10)$ is $-78.69^\circ$.
    We need $\phi_C = -130^\circ - (-78.69^\circ) = -51.31^\circ$. A lead compensator cannot provide negative phase.

    This indicates the standard interpretation of these requirements needs care.
    If the question implies the *system* must have these characteristics, then it implies the overall loop $L(s)=K_p C(s)G(s)$.
    Let $C(s) = \frac{s+a}{s+b}$. Assume $K_p$ is absorbed into this.
    $L(s) = K \frac{s+a}{(s+b)(s+2)}$.
    We need $|L(j10)|=1$ and $\angle L(j10) = -130^\circ$.
    $K \frac{\sqrt{100+a^2}}{\sqrt{100+b^2}} \frac{1}{\sqrt{104}} = 1$.
    $K = \frac{\sqrt{104(100+b^2)}}{\sqrt{100+a^2}}$.
    $\angle L(j10) = \arctan(10/a) - \arctan(10/b) - 78.69^\circ = -130^\circ$.
    $\arctan(10/a) - \arctan(10/b) = -51.31^\circ$.

    Let $a=2$, $b=20$. $\sqrt{ab} = \sqrt{40} \approx 6.3$. Max phase boost occurs at 6.3 rad/sec.
    $\arctan(10/2) - \arctan(10/20) = \arctan(5) - \arctan(0.5) = 78.69^\circ - 26.57^\circ = 49.12^\circ$.
    This is a phase boost of $49.12^\circ$.
    Let's set $a=2$, $b=20$. The phase at $\omega=10$ is $\angle L(j10) = 49.12^\circ - 78.69^\circ = -29.57^\circ$. This is far from $-130^\circ$.

    A common design choice is to set $\omega_m = \omega_{gc}$. Let $a=5, b=20$. $\omega_m=10$.
    Phase boost is $\arcsin(\frac{20-5}{20+5}) = \arcsin(\frac{15}{25}) = \arcsin(0.6) = 36.87^\circ$.
    So, $\phi_C = 36.87^\circ$ at $\omega=10$.
    Total phase: $36.87^\circ - 78.69^\circ = -41.82^\circ$. Still not $-130^\circ$.

    The problem formulation for controller design here is complex without more specific design rules for nonlinear systems in the frequency domain. Typically, you'd aim for specific margins on the linearized model.

---

### 3.6 Limitations of Frequency Domain Analysis for Nonlinear Systems

**Objective:** To understand the constraints and potential pitfalls when applying frequency domain techniques to nonlinear systems.

**Key Concepts:**

*   **Superposition Principle:** Frequency domain analysis (Bode, Nyquist) relies heavily on the superposition principle, which holds only for linear systems.
*   **Sinusoidal Input Assumption:** Describing function methods assume sinusoidal inputs. If the system contains multiple nonlinearities or is driven by non-sinusoidal inputs, the analysis becomes inaccurate.
*   **Harmonic Distortion:** Nonlinearities often introduce harmonics of the input frequency. Describing functions only consider the fundamental component, ignoring these harmonics, which can lead to errors in prediction.
*   **Multiple Equilibrium Points and Limit Cycles:** Nonlinear systems can have multiple equilibrium points and potentially multiple limit cycles. Frequency domain methods might only predict one or miss others.
*   **Amplitude-Dependent Characteristics:** The gain and phase of nonlinear systems can be highly dependent on the input amplitude. This makes it difficult to represent the system by a single frequency response curve, as is done for LTI systems.
*   **Non-minimum Phase Behavior:** Some nonlinearities can introduce non-minimum phase characteristics that are not easily captured by standard frequency domain tools.
*   **Describing Function Accuracy:** The accuracy of the describing function method depends on the memoryless nature of the nonlinearity and the dominance of the fundamental component in the output.

**Reference (Khalil, Chapter 7.3 - Limitations of Describing Functions):** Khalil explicitly discusses the limitations of the describing function method, including the neglect of higher harmonics and the assumption of sinusoidal inputs.

**Example:**

Consider a system with a polynomial nonlinearity $y = x - 0.1x^3$. If the input is $u(t) = \sin(\omega t)$, the output contains the fundamental component and a third harmonic.
$y(t) = \sin(\omega t) - 0.1(\sin(\omega t))^3$
Using $\sin^3(\theta) = \frac{3}{4}\sin(\theta) - \frac{1}{4}\sin(3\theta)$:
$y(t) = \sin(\omega t) - 0.1(\frac{3}{4}\sin(\omega t) - \frac{1}{4}\sin(3\omega t))$
$y(t) = \sin(\omega t) - 0.075\sin(\omega t) + 0.025\sin(3\omega t)$
$y(t) = 0.925\sin(\omega t) + 0.025\sin(3\omega t)$

The fundamental component has an amplitude of $0.925$.
The describing function is $N(A) = \frac{0.925 A}{A} = 0.925$ if $A$ is the amplitude of the input sine wave that produced this output.
The linear part's gain might be designed based on this $0.925$ effective gain. However, the presence of the $3\omega$ harmonic can affect the overall system behavior, especially if the linear part has significant gain at $3\omega$. The describing function analysis ignores this.

**Practice Question 3.6:**
Discuss why the standard Nyquist stability criterion, derived from linear system theory, cannot be directly applied to a closed-loop nonlinear system without modifications or approximations.

**Answer:**
The Nyquist stability criterion is based on the Nyquist plot of the open-loop transfer function $G(j\omega)$. This plot is obtained by evaluating $G(s)$ along the imaginary axis $s=j\omega$. The criterion relates the number of encirclements of the critical point $(-1, 0)$ to the number of unstable poles of the open-loop system and the number of unstable closed-loop poles.

This analysis relies on two fundamental properties that are violated by nonlinear systems:

1.  **Linearity and Superposition:** The derivation of the transfer function $G(s)$ and its evaluation along $s=j\omega$ assumes that the system's behavior is linear and obeys the superposition principle. For nonlinear systems, the output is not directly proportional to the input, and the frequency content of the output can be very different from the input (e.g., harmonic distortion).
2.  **Constant Frequency Response:** For linear systems, $G(j\omega)$ is uniquely defined for each frequency $\omega$. In nonlinear systems, the "effective" frequency response can depend on the amplitude of the input signal (as seen with describing functions). Therefore, a single Nyquist plot cannot fully represent the system's behavior across all possible operating conditions and amplitudes.

While approximations like the describing function method allow for frequency-domain-like analysis, they provide approximate results and do not offer the same guarantees as the Nyquist criterion for linear systems. For true nonlinear system stability analysis, methods like Lyapunov stability, or more advanced nonlinear frequency domain techniques are required.

---

## Summary and Important Points to Remember

*   **Linearization:** The primary tool to adapt frequency domain analysis for nonlinear systems is linearization around equilibrium points. This converts the nonlinear system into a linear, time-invariant (LTI) system for local analysis.
    *   Jacobian matrices $A$, $B$, $C$, $D$ are crucial.
    *   The transfer function of the linearized system $G(s)$ is derived from these Jacobians.
*   **Small-Signal Frequency Response:** Bode and Nyquist plots of the linearized system's transfer function provide insights into the stability and performance characteristics (gain and phase margins) of the nonlinear system in the vicinity of the equilibrium point.
*   **Describing Functions:** A powerful technique for analyzing systems with *memoryless* nonlinearities.
    *   It approximates the nonlinearity as an amplitude-dependent gain $N(A)$.
    *   Used to predict limit cycles (sustained oscillations) by finding intersections of the linear system's frequency response with $-1/N(A)$.
    *   **Limitations:** Ignores higher harmonics and assumes sinusoidal inputs.
*   **Controller Design:** Frequency domain techniques can be used for controller design by designing for the linearized model or by treating nonlinearities as uncertainties for robust control. Gain scheduling can also be informed by frequency domain analysis at different operating points.
*   **Limitations:** Frequency domain methods are approximations for nonlinear systems. They are most accurate for systems that are "nearly linear" or have dominant memoryless nonlinearities. The accuracy diminishes as nonlinearities become more significant, inputs become larger, or multiple nonlinearities interact.
*   **Qualitative Behavior (CO1) & Stability (CO2):** Linearization and small-signal frequency response analysis (Bode/Nyquist) directly contribute to understanding the local qualitative behavior and stability around equilibrium points. Describing functions extend this to predicting oscillations.
*   **Frequency Domain Analysis (CO3):** This module's core is dedicated to this.
*   **Controller Design (CO4):** Adapting LTI design methods to linearized nonlinear systems.

**Key Takeaway:** While direct application of LTI frequency domain tools to nonlinear systems is not possible, linearization and techniques like describing functions provide valuable approximate analytical methods for understanding stability, performance, and designing controllers for nonlinear feedback systems. The results should always be interpreted with an awareness of their inherent limitations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
