---
title: "Step response and frequency response of a second order system realised using passive components"
subject: "CONTROL SYSTEM LAB"
module: "Module 4: Step response and frequency response of a second order system realised using passive components"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3675d"
status: "completed"
scrapedAt: "2026-05-23T16:25:07.490Z"
---
# CONTROL SYSTEM LAB - Module 4: Step Response and Frequency Response of a Second-Order System Realised Using Passive Components

## 1. Introduction

This module focuses on understanding and analyzing the behavior of a second-order system, specifically when realized using passive components (resistors, capacitors, and inductors). We will investigate its response to a step input (time-domain analysis) and its behavior across different frequencies (frequency-domain analysis). This practical understanding is crucial for modeling physical systems and designing effective controllers.

**Key Concepts:**

*   **Second-Order System:** A system whose behavior is described by a second-order linear ordinary differential equation. In the context of passive components, this often refers to RLC circuits.
*   **Passive Components:** Electronic components that do not generate power, only consume or store it (Resistors, Capacitors, Inductors).
*   **Step Response:** The output of a system when subjected to a unit step input (a signal that is 0 for $t < 0$ and 1 for $t \ge 0$).
*   **Frequency Response:** The steady-state response of a system to sinusoidal inputs of varying frequencies. It describes how the system amplifies or attenues the input signal and the phase shift introduced at each frequency.

## 2. The Standard Second-Order System

The general form of the transfer function of a second-order system is:

$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

where:

*   $\omega_n$: **Natural Frequency (rad/s)**. This is the frequency at which the system would oscillate if there were no damping.
*   $\zeta$: **Damping Ratio**. This dimensionless parameter characterizes the level of damping in the system. It dictates how the system responds to disturbances and how quickly it settles.

**Understanding the Damping Ratio ($\zeta$):**

*   **$\zeta = 0$ (Undamped):** The system oscillates indefinitely with constant amplitude.
*   **$0 < \zeta < 1$ (Underdamped):** The system oscillates with decreasing amplitude before settling to its steady-state value. This is the most common scenario studied for practical systems.
*   **$\zeta = 1$ (Critically Damped):** The system returns to its steady-state value in the shortest possible time without any oscillation.
*   **$\zeta > 1$ (Overdamped):** The system returns to its steady-state value slowly and without oscillation.

**Realization using Passive Components (RLC Circuit):**

A common realization of a second-order system using passive components is an **RLC series or parallel circuit**.

**Example: Series RLC Circuit**

Consider a series RLC circuit with a voltage source $V(t)$ as input and the voltage across the capacitor $V_c(t)$ as output.

*   **Differential Equation:** $LC \frac{d^2V_c(t)}{dt^2} + RC \frac{dV_c(t)}{dt} + V_c(t) = V(t)$
*   **Transfer Function (Laplace Domain):** $\frac{V_c(s)}{V(s)} = \frac{1}{LCs^2 + RCs + 1}$

Comparing this to the standard second-order transfer function:

$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

We can equate coefficients:

*   $\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$
*   $2\zeta\omega_n = RC \implies \zeta = \frac{RC}{2\omega_n \sqrt{LC}} = \frac{RC}{2\sqrt{\frac{L}{C}}} = \frac{R}{2} \sqrt{\frac{C}{L}}$

**Learning Outcome Covered:** CO1 (Identify and conduct suitable experiments to determine the parameters to model a physical system). By analyzing an RLC circuit, we can determine its $\omega_n$ and $\zeta$ values.

## 3. Step Response Analysis

The step response provides insights into the transient behavior of the system. For a second-order system, the key parameters characterizing the step response are:

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value for the first time.
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value.
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak.
*   **Peak Overshoot ($M_p$):** The maximum deviation of the response from its final value, expressed as a percentage of the final value.
*   **Settling Time ($t_s$):** The time taken for the response to remain within a certain tolerance band (usually ±2% or ±5%) of its final value.

**Formulas for Underdamped Systems ($0 < \zeta < 1$):**

Let the final value of the step response be $Y_{final}$.

*   $t_d = \frac{1 + 0.7\zeta}{\omega_n}$
*   $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1-\zeta^2}}$
*   $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$
*   $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}}$
*   $t_s \approx \frac{4}{\zeta\omega_n}$ (for 2% tolerance)
*   $t_s \approx \frac{3}{\zeta\omega_n}$ (for 5% tolerance)

**Relationship between Damping Ratio and Step Response Characteristics:**

*   **Low $\zeta$ (closer to 0):** High overshoot, long settling time, oscillatory response.
*   **High $\zeta$ (closer to 1):** Low or no overshoot, faster settling time, less oscillatory.
*   **$\zeta = 1$:** No overshoot, fastest settling time without oscillation.

**Textbook References:**

*   **Ogata:** Chapter 3 (Time Response of First- and Second-Order Systems) provides detailed derivations and discussions on these parameters.
*   **Nise:** Chapter 4 (Time Response Analysis) covers the step response of second-order systems comprehensively.
*   **Nagrath & Gopal:** Chapter 5 (Time Domain Analysis of Control Systems) also includes detailed analysis of second-order system responses.

**Experimental Procedure (Lab Context):**

1.  **Circuit Construction:** Build a series or parallel RLC circuit on a breadboard.
2.  **Input Signal:** Apply a unit step voltage input using a function generator.
3.  **Output Measurement:** Measure the output voltage (e.g., across the capacitor or inductor) using an oscilloscope.
4.  **Parameter Estimation:**
    *   Observe the step response on the oscilloscope.
    *   Measure $t_r$, $t_p$, $M_p$, and $t_s$ directly from the screen.
    *   Calculate $\zeta$ and $\omega_n$ using the measured parameters and the formulas above.
    *   Alternatively, if the component values (R, L, C) are known, calculate the theoretical $\zeta$ and $\omega_n$ and compare them with experimental results.

**Learning Outcome Covered:** CO2 (Conduct suitable experiments and determine the performance specifications). This involves measuring parameters like $t_r$, $M_p$, $t_s$ from the step response.

**Example Exercise:**

An underdamped second-order system has a natural frequency $\omega_n = 10 \text{ rad/s}$ and a damping ratio $\zeta = 0.5$. Calculate:
a) The peak time ($t_p$).
b) The peak overshoot ($M_p$).
c) The settling time ($t_s$) for a 2% tolerance.

**Answer:**

a) $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = \frac{\pi}{10 \sqrt{1-0.5^2}} = \frac{\pi}{10 \sqrt{0.75}} \approx \frac{3.14159}{10 \times 0.866} \approx 0.3625 \text{ s}$

b) $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{-\frac{0.5\pi}{\sqrt{1-0.5^2}}} = e^{-\frac{0.5\pi}{0.866}} \approx e^{-1.813} \approx 0.163 \text{ or } 16.3\%$

c) $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8 \text{ s}$

**Important Point to Remember:** The step response is a crucial indicator of how a system will react to sudden changes in its input. The damping ratio is the primary factor that determines the oscillatory nature and settling time.

## 4. Frequency Response Analysis

Frequency response analysis describes how a system behaves when subjected to sinusoidal inputs of varying frequencies. It's a powerful tool for understanding stability and performance. The two key aspects are:

*   **Magnitude Response:** How the amplitude of the output sinusoid changes with respect to the amplitude of the input sinusoid as a function of frequency.
*   **Phase Response:** How the phase of the output sinusoid shifts with respect to the phase of the input sinusoid as a function of frequency.

This is typically represented using **Bode Plots**, which consist of two plots:

1.  **Magnitude Plot:** Gain (in dB) vs. Frequency (logarithmic scale).
2.  **Phase Plot:** Phase angle (in degrees) vs. Frequency (logarithmic scale).

**Frequency Response of a Second-Order System:**

For the standard second-order transfer function $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, the frequency response is obtained by substituting $s = j\omega$:

$G(j\omega) = \frac{\omega_n^2}{(j\omega)^2 + 2\zeta\omega_n (j\omega) + \omega_n^2} = \frac{\omega_n^2}{-\omega^2 + j2\zeta\omega_n \omega + \omega_n^2}$

$G(j\omega) = \frac{\omega_n^2}{\omega_n^2 - \omega^2 + j2\zeta\omega_n \omega}$

To analyze magnitude and phase:

*   **Magnitude $|G(j\omega)|$:**
    $|G(j\omega)| = \frac{\omega_n^2}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n \omega)^2}}$
    The gain in dB is $20 \log_{10} |G(j\omega)|$.

*   **Phase $\angle G(j\omega)$:**
    $\angle G(j\omega) = -\arctan\left(\frac{2\zeta\omega_n \omega}{\omega_n^2 - \omega^2}\right)$

**Key Characteristics from Bode Plots:**

*   **Resonant Peak ($M_r$):** For underdamped systems ($0 < \zeta < \frac{1}{\sqrt{2}}$), there is a peak in the magnitude response at the **resonant frequency ($\omega_r$)**.
    *   $\omega_r = \omega_n \sqrt{1 - 2\zeta^2}$ (for $0 \le \zeta < \frac{1}{\sqrt{2}}$)
    *   $M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$ (The peak magnitude relative to the low-frequency gain of 1). In dB, $M_{r, dB} = 20 \log_{10} M_r$.

*   **Bandwidth (BW):** The range of frequencies over which the system's gain is above a certain level (often -3 dB from the DC gain). For a second-order system with a DC gain of 1, the bandwidth is often approximated as the frequency at which $|G(j\omega)| = \frac{1}{\sqrt{2}}$.

**Relationship between Damping Ratio and Frequency Response Characteristics:**

*   **Low $\zeta$ (closer to 0):** High resonant peak ($M_r$), lower resonant frequency ($\omega_r$), wider bandwidth. This indicates resonance and amplification of signals near $\omega_r$.
*   **High $\zeta$ (closer to 1):** Low or no resonant peak, higher resonant frequency ($\omega_r$), narrower bandwidth. The system is less prone to resonance and attenuates higher frequencies more effectively.
*   **$\zeta = \frac{1}{\sqrt{2}}$:** No resonant peak. The magnitude response rolls off smoothly.
*   **$\zeta > \frac{1}{\sqrt{2}}$:** No resonant peak.

**Textbook References:**

*   **Ogata:** Chapter 9 (Frequency Response Analysis and Design) extensively covers Bode plots and frequency response characteristics.
*   **Nise:** Chapter 7 (Frequency Response Analysis) details the frequency response of various systems, including second-order ones, and discusses Bode plots.
*   **Nagrath & Gopal:** Chapter 8 (Frequency Domain Analysis) provides a thorough treatment of frequency response methods and graphical techniques like Bode plots.

**Experimental Procedure (Lab Context):**

1.  **Circuit Construction:** Build the RLC circuit.
2.  **Input Signal:** Apply a sinusoidal input signal from a function generator.
3.  **Output Measurement:** Measure the amplitude and phase of the output signal for various input frequencies using an oscilloscope or a network analyzer.
4.  **Data Collection:** Record the input frequency, output amplitude, and phase shift.
5.  **Bode Plot Construction:**
    *   Calculate the gain in dB for each frequency: $Gain_{dB} = 20 \log_{10} \frac{Amplitude_{out}}{Amplitude_{in}}$.
    *   Plot Gain (dB) vs. Frequency (log scale) and Phase (degrees) vs. Frequency (log scale).
6.  **Parameter Estimation:**
    *   Identify the resonant peak frequency ($\omega_r$) and magnitude ($M_r$) from the Bode plot.
    *   Use these to estimate $\zeta$ and $\omega_n$ using the formulas.
    *   Compare with theoretical calculations based on component values.

**Learning Outcome Covered:** CO2 (Conduct suitable experiments and determine the performance specifications). This involves analyzing the frequency response, identifying resonant peak, and deducing system parameters. CO3 (Analyse a linear continuous time system model using simulation tools) can be indirectly covered by comparing experimental results with simulations.

**Example Exercise:**

For a second-order system with $\omega_n = 5 \text{ rad/s}$ and $\zeta = 0.3$, determine:
a) The resonant frequency ($\omega_r$).
b) The resonant peak magnitude ($M_r$) in dB.

**Answer:**

a) $\omega_r = \omega_n \sqrt{1 - 2\zeta^2} = 5 \sqrt{1 - 2(0.3)^2} = 5 \sqrt{1 - 2(0.09)} = 5 \sqrt{1 - 0.18} = 5 \sqrt{0.82} \approx 5 \times 0.9055 \approx 4.528 \text{ rad/s}$

b) First, calculate the linear magnitude:
$M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.3)\sqrt{1-(0.3)^2}} = \frac{1}{0.6\sqrt{1-0.09}} = \frac{1}{0.6\sqrt{0.91}} \approx \frac{1}{0.6 \times 0.9539} \approx \frac{1}{0.5723} \approx 1.747$

Now, convert to dB:
$M_{r, dB} = 20 \log_{10} M_r = 20 \log_{10} 1.747 \approx 20 \times 0.2423 \approx 4.846 \text{ dB}$

**Important Point to Remember:** The frequency response (Bode plots) reveals how a system interacts with sinusoidal signals. The presence and magnitude of the resonant peak indicate how susceptible the system is to oscillations at certain frequencies.

## 5. Simulation and Comparison

Simulation tools like MATLAB/Simulink are invaluable for verifying theoretical calculations and understanding system behavior without physical experimentation.

**Learning Outcome Covered:** CO3 (Analyse a linear continuous time system model using simulation tools).

**How to use simulation:**

1.  **Define the Transfer Function:** Enter the second-order transfer function with specific $\omega_n$ and $\zeta$ values into MATLAB.
2.  **Simulate Step Response:** Use commands like `step(G)` in MATLAB to generate the step response plot. You can also use Simulink to build a block diagram of the system.
3.  **Simulate Frequency Response:** Use commands like `bode(G)` in MATLAB to generate the Bode plots.
4.  **Compare:** Compare the simulated step response and frequency response plots with the experimental results obtained from the RLC circuit. This helps in identifying discrepancies and validating the experimental setup and measurements.

**Example:**

In MATLAB:
```matlab
% Define system parameters
omega_n = 10; % rad/s
zeta = 0.5;

% Define the second-order transfer function
num = [omega_n^2];
den = [1, 2*zeta*omega_n, omega_n^2];
G = tf(num, den);

% Simulate Step Response
figure;
step(G);
title('Step Response of Second-Order System');
xlabel('Time (s)');
ylabel('Amplitude');
grid on;

% Simulate Frequency Response (Bode Plot)
figure;
bode(G);
title('Bode Plot of Second-Order System');
grid on;
```

## 6. Controller Design (Brief Mention for Context)

While this module primarily focuses on analysis, understanding the response characteristics is foundational for controller design.

**Learning Outcome Covered:** CO4 (Design suitable controllers/compensators to meet the performance requirements using simulation tools).

*   **Performance Specifications:** Often, control system design aims to achieve specific transient and steady-state performance, such as a maximum overshoot, minimum rise time, or zero steady-state error.
*   **Controller Tuning:** By understanding how $\zeta$ and $\omega_n$ affect the response, engineers can choose and tune controllers (like PID controllers) to modify these parameters and achieve desired performance. For instance, increasing damping might reduce overshoot, while increasing natural frequency can speed up the response.

## 7. Important Points to Remember

*   The standard second-order system's behavior is entirely defined by its **natural frequency ($\omega_n$)** and **damping ratio ($\zeta$)**.
*   The **step response** provides direct insight into transient performance (overshoot, settling time).
*   The **frequency response** (Bode plots) reveals how the system behaves with sinusoidal inputs and is crucial for stability analysis and understanding resonance.
*   **Underdamped systems** ($0 < \zeta < 1$) exhibit oscillations in their step response and a resonant peak in their frequency response.
*   The **damping ratio ($\zeta$)** is the key parameter that dictates the level of oscillation and damping.
*   **Experimental measurements** should be compared with **theoretical calculations and simulations** to validate system models and understanding.
*   **Passive components (RLC circuits)** are common physical implementations of second-order systems.

## 8. Practice Questions

1.  An RLC series circuit has R = 10 $\Omega$, L = 0.1 H, and C = 0.01 F.
    a) Calculate the natural frequency ($\omega_n$) and damping ratio ($\zeta$).
    b) Classify the system as underdamped, critically damped, or overdamped.
    c) If a unit step voltage is applied, estimate the settling time (2% criterion) and peak overshoot.

2.  A second-order system has a step response with a peak time of $t_p = 0.2$ seconds and a peak overshoot of $M_p = 15\%$. Determine the natural frequency ($\omega_n$) and damping ratio ($\zeta$).

3.  Describe how the resonant peak in the Bode plot of a second-order system changes as the damping ratio $\zeta$ increases from 0 to 1.

4.  Explain the practical significance of the bandwidth of a second-order system in the context of control systems.

## 9. Answers to Practice Questions

1.  **Given:** R = 10 $\Omega$, L = 0.1 H, C = 0.01 F.
    a)
    $\omega_n = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.1 \times 0.01}} = \frac{1}{\sqrt{0.001}} = \frac{1}{0.0316} \approx 31.62 \text{ rad/s}$
    $\zeta = \frac{R}{2} \sqrt{\frac{C}{L}} = \frac{10}{2} \sqrt{\frac{0.01}{0.1}} = 5 \sqrt{0.1} \approx 5 \times 0.3162 \approx 1.581$

    b) Since $\zeta > 1$, the system is **overdamped**.

    c) For an overdamped system, there is no overshoot and generally no oscillatory behavior. The settling time for an overdamped system depends on the roots of the characteristic equation ($s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$). The roots are $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1}$.
    The dominant time constant is approximately $1/|\text{real part of the slower pole}|$.
    The real parts of the poles are $-\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1} = -1.581 \times 31.62 \pm 31.62\sqrt{1.581^2-1} \approx -50 \pm 31.62\sqrt{2.5-1} = -50 \pm 31.62\sqrt{1.5} \approx -50 \pm 31.62 \times 1.225 \approx -50 \pm 38.73$.
    The poles are at approximately $s_1 = -11.27$ and $s_2 = -88.73$.
    The slower pole is at $s_1 = -11.27$. The dominant time constant $\tau \approx 1/11.27 \approx 0.0887$ s.
    For a 2% settling time criterion for overdamped systems, $t_s \approx 4\tau$.
    $t_s \approx 4 \times 0.0887 \approx 0.355 \text{ s}$.
    Peak overshoot = 0%.

2.  **Given:** $t_p = 0.2$ s, $M_p = 15\% = 0.15$.
    From $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = 0.15$
    Taking natural logarithm: $-\frac{\zeta\pi}{\sqrt{1-\zeta^2}} = \ln(0.15) \approx -1.897$
    $\frac{\zeta\pi}{\sqrt{1-\zeta^2}} = 1.897$
    Square both sides: $\frac{\zeta^2\pi^2}{1-\zeta^2} = 1.897^2 \approx 3.60$
    $\zeta^2\pi^2 = 3.60(1-\zeta^2) = 3.60 - 3.60\zeta^2$
    $\zeta^2(\pi^2 + 3.60) = 3.60$
    $\zeta^2(9.87 + 3.60) = 3.60$
    $\zeta^2(13.47) = 3.60$
    $\zeta^2 = \frac{3.60}{13.47} \approx 0.267$
    $\zeta \approx \sqrt{0.267} \approx 0.517$

    Now, from $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = 0.2$
    $\omega_n = \frac{\pi}{t_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.2 \sqrt{1-(0.517)^2}} = \frac{\pi}{0.2 \sqrt{1-0.267}} = \frac{\pi}{0.2 \sqrt{0.733}} \approx \frac{3.14159}{0.2 \times 0.856} \approx \frac{3.14159}{0.1712} \approx 18.35 \text{ rad/s}$

    So, $\zeta \approx 0.517$ and $\omega_n \approx 18.35 \text{ rad/s}$.

3.  As the damping ratio $\zeta$ increases from 0 to 1 for a second-order system:
    *   **$\zeta$ close to 0:** The resonant peak is very high.
    *   **As $\zeta$ increases:** The resonant peak magnitude ($M_r$) decreases, and the resonant frequency ($\omega_r$) increases.
    *   **At $\zeta = 1/\sqrt{2} \approx 0.707$:** The resonant peak is absent ($M_r = 1$, or 0 dB).
    *   **For $\zeta > 1/\sqrt{2}$:** There is no resonant peak; the magnitude response rolls off smoothly from the DC gain.

4.  The bandwidth of a second-order system represents the range of frequencies over which the system effectively passes the input signal. For a system with a DC gain of 1, the bandwidth is often considered the frequency at which the gain drops by 3 dB (i.e., to $1/\sqrt{2}$ times the DC gain).
    *   **In practice:** A wider bandwidth generally implies a faster-responding system, capable of processing higher-frequency inputs. A narrower bandwidth means the system is more selective, attenuating higher frequencies and responding more slowly.
    *   **In control:** Bandwidth is often related to the closed-loop speed of response. A higher bandwidth in the closed-loop system generally translates to faster transient response (e.g., shorter rise time) but can also make the system more sensitive to noise.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
