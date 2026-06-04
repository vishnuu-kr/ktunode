---
title: "b. Design of a suitable controller (P/PI/PD/PID) to meet the desired specifications using root locus/frequency response."
subject: "CONTROL SYSTEM LAB"
module: "Module 14: PID Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36795"
status: "completed"
scrapedAt: "2026-05-23T16:25:42.224Z"
---
# Control System Lab: Module 14 - PID Controller Design

## Topic: b. Design of a suitable controller (P/PI/PD/PID) to meet the desired specifications using root locus/frequency response.

### 1. Introduction to Controller Design

This topic focuses on designing controllers (Proportional - P, Proportional-Integral - PI, Proportional-Derivative - PD, and Proportional-Integral-Derivative - PID) for a given system to meet specific performance objectives. We will explore two primary design methodologies: Root Locus and Frequency Response. This aligns with **Course Outcome 4 (CO4)**, which requires us to design suitable controllers/compensators to meet performance requirements using simulation tools.

**Key Concept:** A controller is a device or algorithm that modifies the behavior of a system by adjusting its input based on the system's output and desired setpoint. The goal of controller design is to achieve a desired system performance, such as stability, speed of response, and accuracy.

**Textbook Reference:**
*   **Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.** Chapter 6 covers transient and steady-state response, while Chapters 9 and 10 delve into PID controller design and state-space methods, respectively.
*   **Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.** Chapters 4 and 5 discuss transient and steady-state error, respectively. Chapter 7 provides an in-depth look at root locus techniques, and Chapter 8 covers frequency response methods. Chapter 10 is dedicated to PID controllers and other controller types.
*   **Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age.** Chapters 3 and 4 discuss transient and steady-state error. Chapter 7 covers root locus methods, and Chapter 8 deals with frequency domain techniques. Chapter 10 focuses on controller design.

### 2. Performance Specifications

Before designing a controller, we need to define the desired performance of the closed-loop system. These specifications are typically related to:

*   **Transient Response:**
    *   **Rise Time ($t_r$):** Time taken for the output to go from 10% to 90% of its final value.
    *   **Peak Overshoot ($M_p$):** Maximum percentage by which the output exceeds the final value.
    *   **Settling Time ($t_s$):** Time taken for the output to settle within a certain tolerance band (e.g., 2% or 5%) of its final value.
    *   **Damping Ratio ($\zeta$) and Natural Frequency ($\omega_n$):** These parameters determine the oscillatory behavior of the system.
*   **Steady-State Response:**
    *   **Steady-State Error ($e_{ss}$):** The difference between the desired input and the actual output as time approaches infinity. This is crucial for accuracy.

**Learning Outcome Covered:**
*   **CO2: Conduct suitable experiments and determine the performance specifications.** (While we focus on design here, understanding these specifications is fundamental for experimental validation).

**Example:** For a second-order system, specifications might be: $t_s \le 2$ seconds, $M_p \le 5\%$, and $e_{ss} = 0$ for a step input.

### 3. Controller Types and Their Effects

Different controller types offer distinct advantages in shaping the system's response:

*   **Proportional (P) Controller:**
    *   **Transfer Function:** $K_p$
    *   **Effect:** Increases the speed of response. Reduces steady-state error for some system types, but often introduces a persistent steady-state error for Type 0 systems. Can reduce overshoot but also increase damping.
    *   **Limitations:** Cannot eliminate steady-state error for Type 0 systems.

*   **Proportional-Integral (PI) Controller:**
    *   **Transfer Function:** $K_p + \frac{K_i}{s} = K_p \left(1 + \frac{1}{T_i s}\right)$ where $T_i = K_p/K_i$ is the integral time.
    *   **Effect:** Eliminates steady-state error for step inputs by introducing an integrator. Can improve transient response but may also increase overshoot and reduce stability margins.
    *   **Key Benefit:** Essential for eliminating steady-state error.

*   **Proportional-Derivative (PD) Controller:**
    *   **Transfer Function:** $K_p + K_d s = K_d \left(s + \frac{K_p}{K_d}\right)$
    *   **Effect:** Improves transient response by anticipating future errors. Reduces overshoot and settling time by increasing the damping ratio. Can improve stability.
    *   **Limitations:** Does not affect steady-state error. Can amplify noise due to differentiation of the error signal.

*   **Proportional-Integral-Derivative (PID) Controller:**
    *   **Transfer Function:** $K_p + \frac{K_i}{s} + K_d s$
    *   **Effect:** Combines the benefits of P, I, and D actions.
        *   **P:** Provides the basic response.
        *   **I:** Eliminates steady-state error.
        *   **D:** Improves transient response and stability.
    *   **Versatility:** The most widely used controller in industry due to its ability to achieve a wide range of performance specifications.

**Learning Outcome Covered:**
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.** (Understanding the effects is crucial for choosing the right controller type).

### 4. Controller Design using Root Locus

The Root Locus method graphically shows how the closed-loop poles of a system move as a controller gain (or parameters) varies. We can use this to position the closed-loop poles to meet desired performance specifications.

**Design Process (General Steps):**

1.  **Obtain the open-loop transfer function $G(s)H(s)$ of the system.**
2.  **Determine the dominant closed-loop pole locations** corresponding to the desired transient specifications (e.g., damping ratio $\zeta$, natural frequency $\omega_n$).
    *   For a desired damping ratio $\zeta$, the angle of the dominant poles from the negative real axis is $\theta = \cos^{-1}(\zeta)$.
    *   For a desired settling time $t_s$, the dominant poles must lie to the left of the vertical line $\sigma = -4/t_s$ (for 2% settling time).
    *   For a desired peak overshoot $M_p$, the dominant poles must lie on a radial line from the origin with angle $\theta = \tan^{-1}\left(\frac{\sqrt{1-M_p^2}}{M_p}\right)$.
    *   The dominant poles will lie on the intersection of these lines.
3.  **Sketch the root locus for the uncompensated system.**
4.  **Evaluate the angle deficiency** at the desired dominant pole location. The angle deficiency is the sum of angles from the open-loop poles to the desired pole minus the sum of angles from the open-loop zeros to the desired pole.
5.  **Design the controller to provide the required angle compensation.**
    *   **P Controller:** A simple gain $K$. The root locus is already fixed. We find the gain $K$ that places the poles at the desired locations.
    *   **PD Controller:** Introduces a zero at $-z_c$. The open-loop transfer function becomes $K_c (s+z_c) G(s)H(s)$. The zero is placed to satisfy the angle requirement. The gain $K_c$ is then determined.
    *   **PI Controller:** Introduces a pole at the origin ($s$) and a zero at $-z_c$. The open-loop transfer function becomes $K_c \frac{s+z_c}{s} G(s)H(s)$. The pole at the origin shifts the locus. The zero and the gain are adjusted to meet specifications.

**Root Locus Design Examples:**

*   **P Controller Design:** If the uncompensated system's root locus passes through the desired pole location for some gain $K$.
*   **PD Controller Design:** To reduce overshoot and settling time. The added zero of the PD controller is placed to "pull" the root locus towards the desired pole location, satisfying the angle requirement.
    *   **Textbook Reference:** Nise, Chapter 7; Ogata, Chapter 9; Nagrath & Gopal, Chapter 7.
*   **PI Controller Design:** To eliminate steady-state error and improve transient response. The pole at the origin from the integrator will shift the root locus. A zero is added to ensure the locus passes through the desired pole location. The placement of the zero is crucial.
    *   **Textbook Reference:** Nise, Chapter 10; Ogata, Chapter 9; Nagrath & Gopal, Chapter 10.

**Example - PD Controller Design:**

Consider a system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)}$.
Desired specifications: $t_s \le 2$ sec, $M_p \le 5\%$.

1.  **Dominant Pole Location:**
    *   $M_p \le 5\% \implies \zeta \ge \sqrt{\frac{\ln^2(0.05/\sqrt{1-\zeta^2})}{\pi^2+\ln^2(0.05/\sqrt{1-\zeta^2})}} \approx 0.69$.
    *   $t_s \le 2$ sec $\implies \sigma \le -4/2 = -2$.
    *   So, we need poles with $\zeta \ge 0.69$ and $\sigma \le -2$. Let's choose a dominant pole $s_1 = -2 + j y_1$. The angle condition for $\zeta = 0.69$ gives $\theta = \cos^{-1}(0.69) \approx 46.3^\circ$. Thus, $y_1 = \sigma \tan(\theta) = 2 \tan(46.3^\circ) \approx 2.08$.
    *   Desired pole: $s_1 = -2 + j2.08$.

2.  **Angle Deficiency:**
    *   The open-loop poles are at $s=0$ and $s=-2$. The PD controller adds a zero at $-z_c$. The compensated open-loop transfer function is $K_c \frac{s+z_c}{s(s+2)}$.
    *   Angle of $s+z_c$: $\angle(s_1+z_c) = \angle(-2+z_c + j2.08)$
    *   Angle of $s$: $\angle(s_1) = \angle(-2+j2.08) = \tan^{-1}(2.08/-2) + 180^\circ = -46.3^\circ + 180^\circ = 133.7^\circ$.
    *   Angle of $s+2$: $\angle(s_1+2) = \angle(j2.08) = 90^\circ$.
    *   Total angle from open-loop poles to $s_1$: $133.7^\circ + 90^\circ = 223.7^\circ$.
    *   Angle deficiency: $223.7^\circ$.
    *   For the root locus to pass through $s_1$, the sum of angles from the controller's zero and open-loop poles must be $180^\circ (2k+1)$.
    *   So, $\angle(s_1+z_c) + \angle(s_1) + \angle(s_1+2) = 180^\circ$.
    *   $\angle(s_1+z_c) + 133.7^\circ + 90^\circ = 180^\circ \implies \angle(s_1+z_c) = 180^\circ - 223.7^\circ = -43.7^\circ$.

3.  **Controller Zero Placement:**
    *   $\angle(s_1+z_c) = \angle(-2+z_c + j2.08) = -43.7^\circ$.
    *   $\frac{2.08}{-2+z_c} = \tan(-43.7^\circ) \approx -0.956$.
    *   $2.08 = -0.956(-2+z_c) = 1.912 - 0.956z_c$.
    *   $0.168 = -0.956z_c \implies z_c = -0.176$.
    *   The PD controller zero is at $s = -0.176$.

4.  **Gain Calculation:**
    *   The magnitude condition must be satisfied: $|K_c \frac{s_1+z_c}{s_1(s_1+2)}| = 1$.
    *   $s_1+z_c = -2+0.176 + j2.08 = -1.824 + j2.08$.
    *   $|s_1+z_c| = \sqrt{(-1.824)^2 + (2.08)^2} = \sqrt{3.327 + 4.326} = \sqrt{7.653} \approx 2.766$.
    *   $|s_1| = |-2+j2.08| = \sqrt{(-2)^2 + (2.08)^2} = \sqrt{4 + 4.326} = \sqrt{8.326} \approx 2.886$.
    *   $|s_1+2| = |j2.08| = 2.08$.
    *   $K_c = \frac{|s_1(s_1+2)|}{|s_1+z_c|} = \frac{(2.886)(2.08)}{2.766} \approx \frac{6.003}{2.766} \approx 2.17$.
    *   The PD controller transfer function is $G_c(s) = K_p + K_d s = 2.17(1 + \frac{s}{0.176})$.
    *   $K_p = 2.17$, $K_d = 2.17/0.176 \approx 12.33$.

**Important Point to Remember:** Root locus design is iterative. The dominant pole assumption is valid only if the other poles are far from the imaginary axis and the zeros.

### 5. Controller Design using Frequency Response

Frequency response methods analyze the system's behavior when subjected to sinusoidal inputs of varying frequencies. Bode plots, Nyquist plots, and Nichols charts are common tools. We can shape the frequency response by adding controller poles and zeros to meet specifications like gain margin, phase margin, bandwidth, and steady-state error.

**Design Process (General Steps):**

1.  **Obtain the open-loop transfer function $G(j\omega)H(j\omega)$ of the system.**
2.  **Analyze the frequency response of the uncompensated system** using Bode plots or other tools. Check if it meets the desired specifications (e.g., phase margin, gain margin, steady-state error for a given frequency).
3.  **Determine the required compensation** at the gain crossover frequency ($\omega_{gc}$) and phase crossover frequency ($\omega_{pc}$).
    *   **Phase Margin ($\phi_m$):** The amount of phase lag that can be added at the gain crossover frequency ($\omega_{gc}$) before the closed-loop system becomes unstable. A larger $\phi_m$ generally implies a more stable and less oscillatory system.
    *   **Gain Margin:** The amount of gain that can be added at the phase crossover frequency ($\omega_{pc}$) before instability.
    *   **Steady-State Error:** For a step input, the steady-state error is $1/(1+K_p)$, where $K_p$ is the DC gain (gain at $\omega=0$). For a ramp input, it's related to the slope.

4.  **Design the controller to provide the necessary phase lead/lag and/or gain modification.**
    *   **Lead Compensator:** Introduces a phase lead over a certain frequency range. Primarily used to improve phase margin and stability. Its transfer function is of the form $K_c \frac{s+z_c}{s+p_c}$ where $p_c > z_c$.
    *   **Lag Compensator:** Introduces a phase lag at higher frequencies but often has a DC gain greater than 1. Used to improve steady-state error by increasing low-frequency gain. Its transfer function is of the form $K_c \frac{s+z_c}{s+p_c}$ where $z_c > p_c$.
    *   **Lag-Lead Compensator:** Combines the features of lag and lead compensators.

**Frequency Response Design Examples:**

*   **P Controller:** Adjusting the gain $K$ can shift the Bode plot vertically, affecting the gain margin and phase margin. It can also affect the steady-state error (gain at $\omega=0$).
*   **PI Controller:** The integrator term ($K_i/s$) introduces a $-90^\circ$ phase shift at low frequencies, which can be detrimental to stability. However, the zero at $s=0$ increases the low-frequency gain, reducing steady-state error. The zero in the PI controller can be placed to provide some phase lead.
    *   **Textbook Reference:** Nise, Chapter 8 (for lag/lead) and Chapter 10 (for PI/PD/PID); Ogata, Chapter 9 (for PID); Nagrath & Gopal, Chapter 8 (for lag/lead) and Chapter 10 (for PID).
*   **PD Controller:** Adding a derivative term ($K_d s$) adds phase lead, typically peaking at a frequency related to $K_p/K_d$. This improves phase margin and transient response.
*   **PID Controller:** By carefully choosing $K_p$, $K_i$, and $K_d$, we can shape the Bode plot to meet multiple specifications simultaneously.

**Example - Lead Compensator Design using Bode Plot:**

Consider a system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)}$.
Desired specifications: Phase margin $\phi_m \ge 45^\circ$, settling time $t_s \le 2$ sec (which implies a gain crossover frequency $\omega_{gc} \approx 2 \text{ rad/s}$ for a typical second-order system).

1.  **Uncompensated System Analysis:**
    *   Let's assume $K=1$. The transfer function is $G(j\omega) = \frac{1}{j\omega(j\omega+1)}$.
    *   **Magnitude:** $|G(j\omega)| = \frac{1}{\omega\sqrt{1+\omega^2}}$.
    *   **Phase:** $\angle G(j\omega) = -90^\circ - \tan^{-1}(\omega)$.
    *   Find $\omega_{gc}$ where $|G(j\omega)| = 1$: $\frac{1}{\omega\sqrt{1+\omega^2}} = 1 \implies \omega^2(1+\omega^2) = 1 \implies \omega^4 + \omega^2 - 1 = 0$.
    *   Solving for $\omega^2$: $\omega^2 = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$. Since $\omega^2$ must be positive, $\omega^2 = \frac{\sqrt{5}-1}{2} \approx 0.618$.
    *   $\omega_{gc} \approx \sqrt{0.618} \approx 0.786$ rad/s.
    *   At $\omega_{gc} = 0.786$: Phase is $-90^\circ - \tan^{-1}(0.786) \approx -90^\circ - 38.16^\circ = -128.16^\circ$.
    *   Phase Margin $\phi_m = 180^\circ + (-128.16^\circ) = 51.84^\circ$.
    *   This phase margin is acceptable, but we might need to increase $\omega_{gc}$ for faster response ($t_s \le 2$).

2.  **Desired Compensation:**
    *   We want to shift $\omega_{gc}$ to around 2 rad/s and achieve a phase margin of $45^\circ$.
    *   At $\omega = 2$ rad/s, the uncompensated phase is $-90^\circ - \tan^{-1}(2) \approx -90^\circ - 63.4^\circ = -153.4^\circ$.
    *   Required phase at $\omega_{gc}$ (new) = $-180^\circ + 45^\circ = -135^\circ$.
    *   Phase lag at $\omega_{gc}$ (new) = $-153.4^\circ$.
    *   Required phase lead from compensator = $-135^\circ - (-153.4^\circ) = 18.4^\circ$.

3.  **Lead Compensator Design:**
    *   A lead compensator has transfer function $G_c(s) = K_c \frac{s+z_c}{s+p_c}$ with $p_c > z_c$.
    *   Maximum phase lead occurs at $\omega_m = \sqrt{z_c p_c}$. The magnitude of phase lead is $\alpha = \frac{1-\sin(\phi_{max})}{1+\sin(\phi_{max})}$, where $\phi_{max}$ is the desired phase lead.
    *   Here, $\phi_{max} = 18.4^\circ$. $\alpha = \frac{1-\sin(18.4^\circ)}{1+\sin(18.4^\circ)} = \frac{1-0.316}{1+0.316} \approx \frac{0.684}{1.316} \approx 0.52$.
    *   $\alpha = z_c/p_c \implies p_c = z_c/\alpha = z_c/0.52 \approx 1.92 z_c$.
    *   The frequency for maximum phase lead, $\omega_m$, is chosen to be the new gain crossover frequency, so $\omega_m = 2$ rad/s.
    *   $\omega_m = \sqrt{z_c p_c} = \sqrt{z_c (1.92 z_c)} = z_c \sqrt{1.92} = 1.385 z_c$.
    *   $2 = 1.385 z_c \implies z_c = 2 / 1.385 \approx 1.445$.
    *   $p_c = z_c / \alpha = 1.445 / 0.52 \approx 2.78$.
    *   Lead compensator: $G_c(s) = K_c \frac{s+1.445}{s+2.78}$.

4.  **Gain Adjustment:**
    *   At $\omega_{gc} = 2$ rad/s, the magnitude of the lead compensator must provide a total DC gain such that the overall open-loop transfer function has a magnitude of 1 at 2 rad/s.
    *   The original system needs a gain adjustment $K$ such that $|K/(j\omega(j\omega+1))|_{{\omega=2}} = 1$.
    *   $|K/(j2(j2+1))| = |K/(j2(1+j2))| = |K/(2j-4)| = \frac{|K|}{\sqrt{4+4}} = \frac{|K|}{\sqrt{8}} = 1 \implies K = \sqrt{8} \approx 2.828$.
    *   The magnitude of the lead compensator at $\omega=2$ is $|\frac{2+1.445}{2+2.78}| = |\frac{3.445}{4.78}| \approx 0.72$.
    *   The overall gain $K_c K$ should be $2.828$.
    *   $K_c \times 2.828 \times 0.72 = 1 \implies K_c \approx 1 / (2.828 \times 0.72) \approx 1 / 2.036 \approx 0.49$.
    *   So, $K_c = 0.49$.
    *   The compensated open-loop transfer function is $0.49 \frac{s+1.445}{s+2.78} \times \frac{2.828}{s(s+1)} = \frac{1.386 (s+1.445)}{s(s+1)(s+2.78)}$.
    *   The controller transfer function is $G_{pd}(s) = K_c \frac{s+z_c}{s+p_c} = 0.49 \frac{s+1.445}{s+2.78}$.

**Important Point to Remember:** Frequency response design often involves iterative adjustments to the compensator parameters and the gain to satisfy all specifications.

### 6. PID Controller Tuning

PID controllers have three parameters: $K_p$, $K_i$, and $K_d$. Tuning these parameters to achieve the desired performance is a critical aspect of PID control.

**Tuning Methods:**

*   **Manual Tuning:** Adjusting parameters based on observation of the system's response. Often time-consuming and requires experience.
*   **Ziegler-Nichols Methods:**
    *   **Closed-Loop Method:** Increase $K_p$ until the system oscillates with a constant amplitude (ultimate gain $K_u$). Then, $K_p$, $T_i$, $T_d$ are calculated based on $K_u$ and the oscillation period $T_u$.
    *   **Open-Loop Method (Reaction Curve Method):** Based on the system's response to a step input, identifying parameters like delay time, time constant, and process gain.
*   **Software-Based Tuning:** Many industrial controllers and simulation tools offer auto-tuning features or implement more advanced tuning algorithms (e.g., Internal Model Control - IMC tuning, Cohen-Coon tuning).

**Textbook Reference:**
*   **Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.** Chapter 10 discusses PID controller tuning.
*   **Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.** Chapter 9 includes PID tuning methods.
*   **Gopal, M. (Year). *Control Systems Principles and Design*.** (Refer to relevant chapters for tuning).

**Learning Outcome Covered:**
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.** Tuning is a key part of this design process.

### 7. Simulation Tools for Controller Design

Software tools like MATLAB/Simulink, Python (with SciPy, Control Systems Library), or dedicated control system simulators are invaluable for designing and verifying controllers.

*   **MATLAB/Simulink:**
    *   **Control System Toolbox:** Functions like `rlocus`, `margin`, `bode`, `step`, `nyquist` are used for analysis.
    *   **Control System Designer App:** Provides a graphical environment for root locus, Bode, Nichols, and Nyquist design. Can be used to design P, PI, PD, PID, lead, lag, and lag-lead compensators.
    *   **Simulink:** For building and simulating the closed-loop system with the designed controller.
*   **Python:**
    *   **`control` library:** Offers similar functionalities to MATLAB's Control System Toolbox. `control.rlocus`, `control.margin`, `control.bode_plot`, `control.step_response`.

**Learning Outcome Covered:**
*   **CO3: Analyse a linear continuous time system model using simulation tools.**
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**

### 8. Practice Questions

1.  **Root Locus Question:**
    Consider the system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+4)}$. Design a PD controller to achieve a damping ratio $\zeta = 0.707$ and a settling time $t_s \le 1.5$ seconds.

    *   **Answer:**
        *   For $\zeta = 0.707$, $\theta = \cos^{-1}(0.707) = 45^\circ$.
        *   For $t_s \le 1.5$, $\sigma = -4/1.5 \approx -2.67$.
        *   Desired pole $s_1 = -2.67 + j2.67$.
        *   Angle of $s_1$ from $s=0$: $\angle(s_1) = \tan^{-1}(2.67/-2.67) + 180^\circ = 135^\circ$.
        *   Angle of $s_1$ from $s=-4$: $\angle(s_1+4) = \angle(1.33+j2.67) = \tan^{-1}(2.67/1.33) = 63.4^\circ$.
        *   Total angle from open-loop poles: $135^\circ + 63.4^\circ = 198.4^\circ$.
        *   Angle deficiency: $198.4^\circ$.
        *   Required angle from PD zero $-z_c$: $\angle(s_1+z_c) = 180^\circ - 198.4^\circ = -18.4^\circ$.
        *   $\angle(s_1+z_c) = \angle(-2.67+z_c + j2.67) = -18.4^\circ$.
        *   $\frac{2.67}{-2.67+z_c} = \tan(-18.4^\circ) \approx -0.332$.
        *   $2.67 = -0.332(-2.67+z_c) = 0.886 - 0.332z_c$.
        *   $1.784 = -0.332z_c \implies z_c = -5.37$.
        *   PD controller zero at $s=-5.37$.
        *   Gain $K_c$: $|K_c \frac{s_1+z_c}{s_1(s_1+4)}| = 1$.
        *   $s_1+z_c = -2.67+5.37+j2.67 = 2.7+j2.67$. $|s_1+z_c| = \sqrt{2.7^2+2.67^2} \approx \sqrt{7.29+7.13} \approx \sqrt{14.42} \approx 3.797$.
        *   $|s_1| = \sqrt{(-2.67)^2 + (2.67)^2} = \sqrt{7.13+7.13} \approx \sqrt{14.26} \approx 3.776$.
        *   $|s_1+4| = \sqrt{1.33^2+2.67^2} \approx \sqrt{1.77+7.13} \approx \sqrt{8.9} \approx 2.98$.
        *   $K_c = \frac{|s_1(s_1+4)|}{|s_1+z_c|} = \frac{(3.776)(2.98)}{3.797} \approx \frac{11.25}{3.797} \approx 2.96$.
        *   PD controller: $G_{pd}(s) = 2.96(s+5.37) = 2.96s + 16.0$. ($K_p = 16.0$, $K_d = 2.96$).

2.  **Frequency Response Question:**
    Consider the system with open-loop transfer function $G(s) = \frac{K}{s+1}$. Design a P controller to achieve a phase margin of $30^\circ$ and a steady-state error of $5\%$ for a step input.

    *   **Answer:**
        *   Steady-state error for step input = $1/(1+K_p)$. If $K=K_p$, then $1/(1+K) = 0.05 \implies 1+K = 20 \implies K = 19$.
        *   Open-loop transfer function with $K=19$: $G(j\omega) = \frac{19}{j\omega+1}$.
        *   Magnitude: $|G(j\omega)| = \frac{19}{\sqrt{\omega^2+1}}$.
        *   Phase: $\angle G(j\omega) = -\tan^{-1}(\omega)$.
        *   The gain crossover frequency $\omega_{gc}$ is where $|G(j\omega_{gc})| = 1$.
        *   $\frac{19}{\sqrt{\omega_{gc}^2+1}} = 1 \implies 19^2 = \omega_{gc}^2+1 \implies 361 = \omega_{gc}^2+1 \implies \omega_{gc}^2 = 360 \implies \omega_{gc} \approx 18.97$ rad/s.
        *   Phase at $\omega_{gc} = 18.97$: $\angle G(j18.97) = -\tan^{-1}(18.97) \approx -87.0^\circ$.
        *   Phase margin = $180^\circ + (-87.0^\circ) = 93.0^\circ$.
        *   This system already has a good phase margin. The P controller with $K=19$ meets both specifications.

3.  **PID Controller Question:**
    Explain the role of each term (P, I, D) in a PID controller for improving system performance, referencing the concepts of transient response and steady-state error.

    *   **Answer:**
        *   **Proportional (P) Term ($K_p$):** Directly proportional to the current error. It provides the main control action, speeding up the response. Increasing $K_p$ generally reduces rise time but can increase overshoot and may not eliminate steady-state error for certain system types.
        *   **Integral (I) Term ($K_i/s$):** Integrates the error over time. This term is responsible for eliminating steady-state error. As long as there is an error, the integral term will continue to increase or decrease the control output, pushing the system towards zero error. However, it can increase overshoot and settling time.
        *   **Derivative (D) Term ($K_d s$):** Proportional to the rate of change of the error. It acts as a damping force, "looking ahead" to predict future error. This term reduces overshoot, decreases settling time, and improves transient response. It does not affect steady-state error but can amplify noise if the error signal is noisy.

### 9. Important Points to Remember

*   **Performance Specifications are Key:** Clearly define your desired $t_r$, $t_s$, $M_p$, and $e_{ss}$ before starting the design.
*   **Root Locus:** Focuses on the closed-loop pole locations in the s-plane. Excellent for transient response design.
*   **Frequency Response:** Focuses on the system's behavior to sinusoidal inputs. Excellent for stability analysis (gain/phase margin) and steady-state error analysis.
*   **Controller Selection:** Choose a controller type (P, PI, PD, PID) based on the deficiencies of the uncompensated system and the desired specifications.
    *   Need to eliminate steady-state error? Consider PI or PID.
    *   Need to improve transient response (reduce overshoot, settling time)? Consider PD or PID.
    *   Need to improve stability margins? Consider PD or lead compensator.
*   **Iterative Process:** Controller design is often iterative. You may need to adjust parameters multiple times and re-evaluate the system response.
*   **Simulation is Essential:** Always verify your designed controller's performance using simulation tools before implementing it on a physical system.
*   **Dominant Pole Assumption:** In root locus design, ensure the dominant pole assumption is valid by checking the location of other poles and zeros.
*   **Trade-offs:** Controller design often involves trade-offs. For example, improving transient response might degrade steady-state accuracy, or vice-versa.

This comprehensive set of notes covers the design of controllers using root locus and frequency response methods, aligning with the learning outcomes and course objectives. Remember to practice with specific system examples and utilize simulation tools effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
