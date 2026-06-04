---
title: "Frequency response:"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36780"
status: "completed"
scrapedAt: "2026-05-23T16:25:29.341Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: Frequency Response

---

### 1. Introduction to Frequency Response

Frequency response is a method of analyzing the behavior of a dynamic system to sinusoidal inputs at various frequencies. It provides valuable insights into system stability, transient response, and steady-state characteristics. This topic is crucial for understanding how a system reacts to external disturbances and how it performs under sustained oscillatory inputs.

**Key Concepts:**

*   **Sinusoidal Input:** A time-varying signal of the form $A \sin(\omega t + \phi)$, where $A$ is amplitude, $\omega$ is angular frequency, and $\phi$ is phase.
*   **Steady-State Response:** The output of the system after transients have died down, in response to a sinusoidal input.
*   **Frequency Domain:** The analysis is performed by varying the frequency of the input signal.

**Textbook References:**

*   **Ogata, 5th Ed., Chapter 6:** Frequency Response Analysis. This chapter provides a comprehensive overview of the concepts, plotting techniques, and their applications.
*   **Nise, 5th Ed., Chapter 7:** Frequency Response Design. While focused on design, it lays the groundwork for understanding frequency response characteristics.
*   **Nagrath & Gopal, 5th Ed., Chapter 9:** Frequency Domain Analysis. This covers essential concepts and methods for frequency response analysis.

---

### 2. Steady-State Response to a Sinusoid

When a linear time-invariant (LTI) system is subjected to a sinusoidal input, the steady-state output is also a sinusoid of the *same frequency* but generally with a different amplitude and phase.

If the input is $r(t) = A \sin(\omega t)$, and the transfer function of the system is $G(s)$, then in the steady-state, the output $c(t)$ is given by:

$c(t) = A |G(j\omega)| \sin(\omega t + \angle G(j\omega))$

Where:
*   $|G(j\omega)|$: **Magnitude Response** - the ratio of the output amplitude to the input amplitude.
*   $\angle G(j\omega)$: **Phase Response** - the phase shift between the output and the input.

**Key Concepts:**

*   **Sinusoidal Transfer Function:** Obtained by substituting $s = j\omega$ into the system's transfer function $G(s)$. This allows us to analyze the system's behavior at different frequencies.
*   **Magnitude and Phase:** These are functions of frequency $\omega$.

**Example:**

Consider a system with transfer function $G(s) = \frac{1}{s+1}$.
The sinusoidal transfer function is $G(j\omega) = \frac{1}{j\omega+1}$.

Magnitude: $|G(j\omega)| = \left| \frac{1}{1+j\omega} \right| = \frac{1}{\sqrt{1^2 + \omega^2}} = \frac{1}{\sqrt{1+\omega^2}}$
Phase: $\angle G(j\omega) = \angle \left( \frac{1}{1+j\omega} \right) = -\arctan(\omega)$

If the input is $r(t) = 5 \sin(2t)$, then at $\omega = 2$ rad/s:
$|G(j2)| = \frac{1}{\sqrt{1+2^2}} = \frac{1}{\sqrt{5}} \approx 0.447$
$\angle G(j2) = -\arctan(2) \approx -63.4^\circ$

The steady-state output will be $c(t) \approx 5 \times 0.447 \sin(2t - 63.4^\circ) \approx 2.235 \sin(2t - 63.4^\circ)$.

---

### 3. Frequency Response Plots

Frequency response is typically visualized using graphical plots. The most common ones are:

*   **Bode Plot:** A two-part plot showing the magnitude (in decibels) and phase (in degrees) of the frequency response as a function of the logarithm of frequency.
    *   **Magnitude Plot:** $20 \log_{10} |G(j\omega)|$ vs. $\log_{10} \omega$.
    *   **Phase Plot:** $\angle G(j\omega)$ vs. $\log_{10} \omega$.
*   **Nyquist Plot:** A plot of the imaginary part of $G(j\omega)$ versus the real part of $G(j\omega)$ as $\omega$ varies from 0 to $\infty$.
*   **Nichols Plot:** A plot of phase margin versus gain margin, with contours of constant closed-loop magnitude plotted on the same graph.

**Key Concepts:**

*   **Decibels (dB):** A logarithmic unit used for magnitude, $dB = 20 \log_{10} |G(j\omega)|$. This allows for easier visualization of large ranges of magnitudes and simplifies the plotting of complex transfer functions by summing the decibel contributions of individual terms.
*   **Corner Frequencies (Break Frequencies):** Frequencies at which the slope of the magnitude plot changes. These correspond to poles and zeros in the transfer function.
*   **Asymptotic Approximations:** Straight-line approximations used in Bode plots for ease of sketching.

**Textbook References:**

*   **Ogata, 5th Ed., Chapter 6:** Detailed explanations and graphical examples of Bode, Nyquist, and Nichols plots.
*   **Nise, 5th Ed., Chapter 7:** Focus on using these plots for design and stability analysis.
*   **Nagrath & Gopal, 5th Ed., Chapter 9:** Provides a thorough grounding in the mathematical derivations and graphical interpretation of these plots.

**Example (Bode Plot - Simple Example):**

For $G(s) = \frac{1}{s+1}$, $G(j\omega) = \frac{1}{1+j\omega}$.

*   **Low Frequencies ($\omega \to 0$):**
    *   $|G(j\omega)| \approx 1$ (0 dB)
    *   $\angle G(j\omega) \approx 0^\circ$
*   **Corner Frequency ($\omega = 1$ rad/s):**
    *   $|G(j1)| = \frac{1}{\sqrt{1+1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (approx. -3 dB)
    *   $\angle G(j1) = -\arctan(1) = -45^\circ$
*   **High Frequencies ($\omega \to \infty$):**
    *   $|G(j\omega)| \to 0$ (approaches $-\infty$ dB)
    *   $\angle G(j\omega) \to -90^\circ$

**Bode Magnitude Plot (Asymptotic):**
*   Starts at 0 dB for $\omega < 1$.
*   At $\omega = 1$, starts to slope down at -20 dB/decade.

**Bode Phase Plot (Asymptotic):**
*   Starts at $0^\circ$.
*   At $\omega = 0.1$, phase is $-5.7^\circ$ (approx.).
*   At $\omega = 1$, phase is $-45^\circ$.
*   At $\omega = 10$, phase is $-84.3^\circ$ (approx.).
*   Approaches $-90^\circ$ for $\omega > 10$.

---

### 4. Performance Specifications in the Frequency Domain

Frequency response characteristics can be directly related to time-domain performance specifications.

**Key Performance Specifications:**

*   **Bandwidth ($\omega_b$):** The frequency range over which the system can effectively respond to sinusoidal inputs. It's often defined as the frequency at which the closed-loop magnitude drops by 3 dB from its low-frequency value. A wider bandwidth generally implies a faster response and better tracking of input signals.
*   **Resonant Peak ($M_p$):** The maximum value of the closed-loop magnitude response. It indicates the presence of resonance and can lead to overshoot in the transient response. A higher $M_p$ suggests a more oscillatory response.
*   **Resonant Frequency ($\omega_r$):** The frequency at which the resonant peak occurs.
*   **Gain Margin (GM):** The amount of gain that can be added to the system before it becomes unstable. It's the reciprocal of the magnitude of the open-loop transfer function at the phase crossover frequency (where the phase is $-180^\circ$).
    *   $GM = \frac{1}{|G(j\omega_{pc})|}$, where $\angle G(j\omega_{pc}) = -180^\circ$.
    *   $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})|$.
*   **Phase Margin (PM):** The amount of phase lag that can be added to the system before it becomes unstable. It's the difference between the phase of the open-loop transfer function at the gain crossover frequency (where the magnitude is 1 or 0 dB) and $-180^\circ$.
    *   $PM = 180^\circ + \angle G(j\omega_{gc})$, where $|G(j\omega_{gc})| = 1$ (or $0$ dB).

**Relationship to Time Domain:**

*   **Bandwidth:** Closely related to the rise time ($t_r$). For a typical second-order system, $\omega_b \approx 1.4 t_r^{-1}$ (or $\omega_b \approx \frac{1}{t_r}$ if $t_r$ is rise time from 10% to 90%).
*   **Resonant Peak ($M_p$) & Resonant Frequency ($\omega_r$):** Indicate overshoot and oscillation in the transient response. For a second-order system, $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$ and $\omega_r = \omega_n \sqrt{1-2\zeta^2}$.
*   **Gain Margin & Phase Margin:** Measures of relative stability. Larger GM and PM generally indicate a more stable system with better damping (less overshoot and oscillation in transient response).
    *   For a second-order system, $\zeta \approx \frac{PM}{100^\circ}$ (for $PM$ in degrees and small values).

**Textbook References:**

*   **Ogata, 5th Ed., Chapter 6:** Explains how frequency response characteristics relate to transient response.
*   **Nise, 5th Ed., Chapter 7:** Detailed treatment of GM and PM, and their role in closed-loop system performance and stability.
*   **Nagrath & Gopal, 5th Ed., Chapter 9:** Connects frequency domain specifications to time domain performance.

---

### 5. Stability Analysis using Frequency Response

Frequency response methods are powerful tools for determining system stability, especially for systems with time delays or when the characteristic equation is not easily obtained.

**Key Methods:**

*   **Nyquist Stability Criterion:**
    *   This criterion relates the number of encirclements of the $-1+j0$ point in the Nyquist plot of the open-loop transfer function $G(j\omega)H(j\omega)$ to the number of unstable closed-loop poles.
    *   **The Criterion:** For a system with $P$ open-loop poles in the right-half plane (RHP), the number of clockwise encirclements of the $-1+j0$ point in the Nyquist plot, denoted by $N$, must satisfy $N = Z - P$, where $Z$ is the number of closed-loop poles in the RHP.
    *   For a stable open-loop system ($P=0$), the closed-loop system is stable if and only if the Nyquist plot does not encircle the $-1+j0$ point ($N=0$).
*   **Gain Margin and Phase Margin (from Bode/Nyquist Plots):**
    *   A system is stable if its Gain Margin and Phase Margin are both positive.
    *   GM > 0 dB (or $GM > 1$) implies stability.
    *   PM > 0$^\circ$ implies stability.
    *   If GM = 0 dB or PM = 0$^\circ$, the system is marginally stable.
    *   If GM < 0 dB or PM < 0$^\circ$, the system is unstable.

**Textbook References:**

*   **Ogata, 5th Ed., Chapter 6:** Thorough explanation of the Nyquist stability criterion and its application.
*   **Nise, 5th Ed., Chapter 7:** Focus on using GM and PM for stability assessment and design.
*   **Nagrath & Gopal, 5th Ed., Chapter 9:** Detailed discussion on stability criteria using frequency response methods.

---

### 6. Relating Root Locus to Frequency Response

While Module 10 focuses on Root Locus, this section bridges the concepts, as often both are used for performance analysis.

*   **Poles and Zeros:** The locations of poles and zeros in the s-plane (from root locus) influence the frequency response. Poles in the RHP lead to instability, which will be reflected as infinite gain or unbounded phase in the frequency response at certain frequencies.
*   **Dominant Second-Order Behavior:** If the dominant closed-loop poles from the root locus exhibit behavior similar to a second-order system, the frequency response characteristics ($M_p$, $\omega_r$, $\omega_b$) can be predicted using the damping ratio ($\zeta$) and natural frequency ($\omega_n$) of these dominant poles.
*   **Stability:** The root locus shows directly where the closed-loop poles lie. If any poles are in the RHP, the system is unstable. The frequency response methods (Nyquist, GM, PM) provide a measure of how "close" the system is to instability.

**Example:**

Consider a second-order system with a damping ratio $\zeta = 0.5$ and natural frequency $\omega_n = 10$ rad/s.
*   **Root Locus:** The closed-loop poles would be at $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2} = -5 \pm j 5\sqrt{3}$. These poles are in the left-half plane, indicating stability.
*   **Frequency Response:**
    *   $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.5)\sqrt{1-0.5^2}} = \frac{1}{\sqrt{0.75}} \approx 1.155$ (a 15.5% peak).
    *   $\omega_r = \omega_n \sqrt{1-2\zeta^2} = 10 \sqrt{1-2(0.5)^2} = 10 \sqrt{0.5} \approx 7.07$ rad/s.
    *   The bandwidth $\omega_b$ would be roughly $\omega_n \sqrt{1 - 2\zeta^2 + \sqrt{(1-2\zeta^2)^2 + 4\zeta^2}}$. For $\zeta=0.5$, $\omega_b \approx 10 \sqrt{1 - 1 + \sqrt{1 + 4(0.25)}} = 10 \sqrt{\sqrt{2}} \approx 11.89$ rad/s.

---

### 7. Practical Implementation and Lab Experiments

**Course Outcomes Alignment:**

*   **CO1 (Identify and conduct experiments to determine parameters to model a physical system):**
    *   Experiments can be designed to input sinusoidal signals of varying frequencies to a physical system (e.g., a motor, an RLC circuit) and measure the output amplitude and phase shift. This data can then be used to estimate the system's transfer function.
*   **CO2 (Conduct experiments and determine performance specifications):**
    *   From the measured frequency response data, one can plot Bode diagrams and determine bandwidth, resonant peak, resonant frequency, gain margin, and phase margin.
*   **CO3 (Analyze a linear continuous time system model using simulation tools):**
    *   Using tools like MATLAB/Simulink, one can simulate the frequency response of a given transfer function. This includes generating Bode plots, Nyquist plots, and calculating performance metrics.
*   **CO4 (Design suitable controllers/compensators to meet performance requirements using simulation tools):**
    *   Frequency response techniques are directly used in the design of lead, lag, and lead-lag compensators to shape the Bode plot, improve stability margins (GM, PM), increase bandwidth, and reduce resonant peaks, thus meeting desired performance specifications.

**Typical Lab Activities:**

1.  **System Identification:**
    *   Apply sinusoidal inputs to an experimental setup (e.g., DC motor with encoder, electrical circuit).
    *   Measure output amplitude and phase for a range of frequencies.
    *   Estimate the system's transfer function by fitting the experimental data to a model.
2.  **Bode Plot Generation:**
    *   Using acquired data or a simulation model, plot the Bode diagram.
    *   Analyze the plot to identify corner frequencies, slopes, and bandwidth.
3.  **Stability Analysis:**
    *   Determine Gain Margin and Phase Margin from the Bode plot.
    *   Interpret these values in terms of system stability and robustness.
4.  **Performance Specification Determination:**
    *   From the Bode plot, identify the resonant peak and frequency (if applicable for closed-loop response).
    *   Estimate the system's bandwidth.
5.  **Controller Design (Simulation):**
    *   Design compensators (lead, lag, lead-lag) in simulation to achieve desired PM, GM, and bandwidth based on frequency response analysis.

---

### 8. Key Points to Remember

*   Frequency response analyzes system behavior to sinusoidal inputs.
*   The steady-state output is a sinusoid of the same frequency but with altered amplitude and phase.
*   The sinusoidal transfer function $G(j\omega)$ is key to this analysis.
*   Bode, Nyquist, and Nichols plots are essential tools for visualizing and analyzing frequency response.
*   **Bandwidth** indicates the system's speed and tracking capability.
*   **Resonant Peak ($M_p$)** and **Resonant Frequency ($\omega_r$)** relate to overshoot and oscillations.
*   **Gain Margin (GM)** and **Phase Margin (PM)** are critical measures of relative stability and robustness. Higher GM and PM generally mean a more stable and less oscillatory system.
*   Nyquist plots and GM/PM are powerful tools for assessing system stability.
*   Frequency response methods are directly applicable to controller design to meet performance requirements.
*   Logarithmic plotting (dB for magnitude, log of frequency) simplifies analysis and design.

---

### 9. Practice Questions and Exercises

**Question 1:**
A unity feedback system has an open-loop transfer function $G(s) = \frac{10}{s(s+2)}$. Sketch the Bode plot for $G(j\omega)$ and determine the gain margin and phase margin. Is the closed-loop system stable?

**Solution 1:**
*   $G(j\omega) = \frac{10}{j\omega(j\omega+2)}$
*   Magnitude: $|G(j\omega)| = \frac{10}{\omega \sqrt{\omega^2 + 4}}$
*   Phase: $\angle G(j\omega) = -90^\circ - \arctan(\frac{\omega}{2})$

**Bode Plot Sketch:**
*   **Low frequency:** Magnitude starts with $-20$ dB/decade due to the $1/\omega$ term. Phase starts at $-90^\circ$.
*   **Corner frequency 1:** $\omega = 2$ rad/s (from $s+2$). Magnitude slope changes from $-20$ dB/decade to $-40$ dB/decade. Phase changes from $-90^\circ$ to $-90^\circ - 45^\circ = -135^\circ$ at $\omega=2$.
*   **High frequency:** Magnitude slope is $-40$ dB/decade. Phase approaches $-180^\circ$.

**Gain Margin (GM):**
Find the frequency where phase is $-180^\circ$.
$-90^\circ - \arctan(\frac{\omega}{2}) = -180^\circ$
$\arctan(\frac{\omega}{2}) = 90^\circ$
This is not possible for finite $\omega$. Let's re-evaluate the phase for large $\omega$.
As $\omega \to \infty$, $\angle G(j\omega) \to -90^\circ - 90^\circ = -180^\circ$.
The phase crossover frequency is $\omega_{pc} \to \infty$.
However, for a strictly proper system, the phase will always be between $-90^\circ$ and $-180^\circ$ at high frequencies. Let's examine the magnitude at phase crossover.

Let's check for a finite phase crossover: $-90 - \arctan(\omega/2) = -180$, so $\arctan(\omega/2) = 90$. This means $\omega \rightarrow \infty$.
The phase crossover frequency is technically infinite for this type of system unless there are other poles/zeros.

Let's consider the Nyquist plot. $G(j\omega) = \frac{10}{j\omega(j\omega+2)} = \frac{10}{-\omega^2 + j2\omega} = \frac{10(-\omega^2 - j2\omega)}{\omega^2(\omega^2+4)}$.
Real part: $Re\{G(j\omega)\} = \frac{-10}{\omega^2+4}$
Imaginary part: $Im\{G(j\omega)\} = \frac{-20}{\omega(\omega^2+4)}$

The Nyquist plot starts at infinity (as $\omega \to 0$) along the negative imaginary axis, moves to the left, and approaches the origin along the negative real axis as $\omega \to \infty$.
The locus of $G(j\omega)$ for $\omega \in [0, \infty)$ is in the left-half plane.
The point $-1+j0$ is not intersected.
The phase crossover frequency is where the imaginary part is zero, which is $\omega=0$. At $\omega=0$, the magnitude is infinite.

Let's assume we are looking for the gain and phase margins for stability.
Gain crossover frequency ($\omega_{gc}$) is where $|G(j\omega)| = 1$.
$\frac{10}{\omega \sqrt{\omega^2 + 4}} = 1$
$100 = \omega^2 (\omega^2 + 4)$
$\omega^4 + 4\omega^2 - 100 = 0$
Let $x = \omega^2$. $x^2 + 4x - 100 = 0$.
$x = \frac{-4 \pm \sqrt{16 - 4(1)(-100)}}{2} = \frac{-4 \pm \sqrt{16 + 400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.4}{2}$.
Since $\omega^2 > 0$, we take the positive root: $\omega^2 = \frac{16.4}{2} = 8.2$.
$\omega_{gc} = \sqrt{8.2} \approx 2.86$ rad/s.

At $\omega_{gc} = 2.86$:
Phase = $-90^\circ - \arctan(\frac{2.86}{2}) = -90^\circ - \arctan(1.43) = -90^\circ - 55.0^\circ = -145.0^\circ$.
Phase Margin (PM) = $180^\circ + (-145.0^\circ) = 35.0^\circ$.

Now for Gain Margin (GM): Find frequency where phase is $-180^\circ$.
$-90^\circ - \arctan(\frac{\omega}{2}) = -180^\circ \Rightarrow \arctan(\frac{\omega}{2}) = 90^\circ$. This implies $\omega \to \infty$.
As $\omega \to \infty$, $|G(j\omega)| \to 0$.
When the phase reaches $-180^\circ$ at infinite frequency, and the magnitude is already approaching zero, the gain margin is infinite. However, this is a bit degenerate.
The condition for stability from Nyquist is that the $-1+j0$ point is not enclosed. Since the Nyquist plot is entirely in the LHP and approaches the origin, the system is stable.

For a stable closed-loop system, the GM is infinite if the phase never reaches $-180^\circ$ at finite frequencies. The PM is positive ($35^\circ$), indicating stability.
**Answer:** Gain Margin = $\infty$, Phase Margin = $35^\circ$. The closed-loop system is stable.

**Question 2:**
For a closed-loop system with open-loop transfer function $G(s)H(s) = \frac{20(s+1)}{s(s+4)}$.
a) Calculate the phase margin.
b) If a constant gain $K$ is added in series, what is the maximum value of $K$ for stability?

**Solution 2:**
$G(j\omega)H(j\omega) = \frac{20(1+j\omega)}{j\omega(4+j\omega)}$
Magnitude: $|G(j\omega)H(j\omega)| = \frac{20 \sqrt{1+\omega^2}}{\omega \sqrt{16+\omega^2}}$
Phase: $\angle G(j\omega)H(j\omega) = \arctan(\omega) - 90^\circ - \arctan(\frac{\omega}{4})$

**a) Phase Margin:**
Find the gain crossover frequency ($\omega_{gc}$) where $|G(j\omega)H(j\omega)| = 1$.
$\frac{20 \sqrt{1+\omega^2}}{\omega \sqrt{16+\omega^2}} = 1$
$400 (1+\omega^2) = \omega^2 (16+\omega^2)$
$400 + 400\omega^2 = 16\omega^2 + \omega^4$
$\omega^4 - 384\omega^2 - 400 = 0$.
Let $x = \omega^2$. $x^2 - 384x - 400 = 0$.
$x = \frac{384 \pm \sqrt{384^2 - 4(1)(-400)}}{2} = \frac{384 \pm \sqrt{147456 + 1600}}{2} = \frac{384 \pm \sqrt{149056}}{2} = \frac{384 \pm 386.08}{2}$.
Take positive root for $\omega^2$: $\omega^2 = \frac{384 + 386.08}{2} = \frac{770.08}{2} = 385.04$.
$\omega_{gc} = \sqrt{385.04} \approx 19.62$ rad/s.

Now calculate phase at $\omega_{gc} = 19.62$:
Phase = $\arctan(19.62) - 90^\circ - \arctan(\frac{19.62}{4})$
Phase = $87.1^\circ - 90^\circ - \arctan(4.905)$
Phase = $87.1^\circ - 90^\circ - 78.4^\circ = -81.3^\circ$.

Phase Margin (PM) = $180^\circ + (-81.3^\circ) = 98.7^\circ$.

**b) Maximum value of $K$ for stability:**
The transfer function becomes $K G(s)H(s)$. We need to find $K$ such that the system is marginally stable. This occurs when the gain crossover frequency is such that the phase is $-180^\circ$, or when the gain of the original $G(j\omega)H(j\omega)$ is $-1/K$ (in dB, $20 \log_{10} |KG| = 0 \Rightarrow 20 \log_{10} K + 20 \log_{10} |G| = 0$).
We need to find the frequency where the phase is $-180^\circ$.
$\arctan(\omega) - 90^\circ - \arctan(\frac{\omega}{4}) = -180^\circ$
$\arctan(\omega) - \arctan(\frac{\omega}{4}) = -90^\circ$
Using $\arctan(A) - \arctan(B) = \arctan(\frac{A-B}{1+AB})$:
$\arctan\left(\frac{\omega - \omega/4}{1 + \omega(\omega/4)}\right) = \arctan\left(\frac{3\omega/4}{1 + \omega^2/4}\right) = \arctan\left(\frac{3\omega}{4+\omega^2}\right)$
So, $\frac{3\omega}{4+\omega^2}$ must lead to $-90^\circ$. This is not directly solvable this way.

Alternatively, find the phase crossover frequency ($\omega_{pc}$) where the phase is $-180^\circ$:
$\arctan(\omega) - 90^\circ - \arctan(\frac{\omega}{4}) = -180^\circ$
$\arctan(\omega) - \arctan(\frac{\omega}{4}) = -90^\circ$.
This means that $\frac{\omega}{4}$ must be significantly larger than $\omega$. This is only possible if $\omega \to 0$, which gives phase $-90$.

Let's re-check the phase calculation:
$\angle G(j\omega)H(j\omega) = \angle(20) + \angle(1+j\omega) - \angle(j\omega) - \angle(4+j\omega)$
$= 0^\circ + \arctan(\omega) - 90^\circ - \arctan(\frac{\omega}{4})$
For stability, we need the phase of $KG(j\omega)H(j\omega)$ to be greater than $-180^\circ$ at the frequency where $|KG(j\omega)H(j\omega)| = 1$.
This means $|G(j\omega)H(j\omega)| = 1/K$.

Let's find the frequency where the phase is $-170^\circ$ (example for PM).
Let's find the phase crossover frequency. The phase becomes $-180^\circ$ for stable systems when $\omega \to \infty$.
The phase crossover frequency is where $Im\{G(j\omega)H(j\omega)\} = 0$.
$G(j\omega)H(j\omega) = \frac{20(1+j\omega)}{j\omega(4+j\omega)} = \frac{20(1+j\omega)}{-\omega^2+j4\omega} = \frac{20(1+j\omega)(-\omega^2-j4\omega)}{(-\omega^2)^2+(4\omega)^2}$
$= \frac{20(-\omega^2-j4\omega-j\omega^3+4\omega^2)}{\omega^2(\omega^2+16)} = \frac{20(3\omega^2+j(4\omega-\omega^3))}{\omega^2(\omega^2+16)}$.
Real part: $\frac{20(3\omega^2)}{\omega^2(\omega^2+16)} = \frac{60}{\omega^2+16}$.
Imaginary part: $\frac{20(4\omega-\omega^3)}{\omega^2(\omega^2+16)}$.
The imaginary part is zero when $4\omega - \omega^3 = 0$.
$\omega(4-\omega^2) = 0$.
So $\omega = 0$ or $\omega = 2$.
The phase crossover frequency is $\omega_{pc} = 2$ rad/s.

At $\omega_{pc} = 2$:
Phase = $\arctan(2) - 90^\circ - \arctan(\frac{2}{4})$
Phase = $63.4^\circ - 90^\circ - 26.6^\circ = -53.2^\circ$.
This is not $-180^\circ$.

Let's use the definition of GM: $GM = \frac{1}{|G(j\omega_{pc})|}$.
Phase crossover is where phase is $-180^\circ$.
$\arctan(\omega) - 90^\circ - \arctan(\frac{\omega}{4}) = -180^\circ$
$\arctan(\omega) - \arctan(\frac{\omega}{4}) = -90^\circ$
$\arctan\left(\frac{3\omega}{4+\omega^2}\right) = -90^\circ$. This implies the argument is undefined or the denominator is zero, which is not the case.

There might be an error in the question or my understanding of phase crossover for this system.
Let's revisit the Bode plot. The phase starts at $-90^\circ$, increases to $\arctan(\omega)$ and decreases by $\arctan(\omega/4)$.
For $\omega \to 0$, phase $\to -90^\circ$.
For $\omega \to \infty$, phase $\to 90^\circ - 90^\circ - 90^\circ = -90^\circ$.
The phase is always between $-90^\circ$ and $0^\circ$. It seems my phase calculation earlier was correct.

Let's re-evaluate the phase calculation for $\omega=2$:
$\angle G(j2)H(j2) = \arctan(2) - 90^\circ - \arctan(2/4) = 63.43^\circ - 90^\circ - 26.57^\circ = -53.14^\circ$.

Where is the phase $-180^\circ$? It never happens.
This implies infinite Gain Margin.

Let's verify stability using Routh-Hurwitz for the characteristic equation:
$1 + KG(s)H(s) = 0$
$1 + K \frac{20(s+1)}{s(s+4)} = 0$
$s(s+4) + 20K(s+1) = 0$
$s^2 + 4s + 20Ks + 20K = 0$
$s^2 + (4+20K)s + 20K = 0$.
For stability, all coefficients must be positive.
$4+20K > 0 \Rightarrow K > -1/5$.
$20K > 0 \Rightarrow K > 0$.
So, for any $K > 0$, all coefficients are positive. This indicates the system is stable for all positive gains.

This means the phase never reaches $-180^\circ$.
The phase crossover frequency where the phase is $-180^\circ$ is essentially at infinity.
As $\omega \to \infty$, the magnitude $|G(j\omega)H(j\omega)| \to 0$.
So, GM is infinite.

Let's check the gain crossover frequency calculation:
$\omega_{gc} = 19.62$ rad/s.
Phase at $\omega_{gc}$ was $-81.3^\circ$.
Phase Margin PM = $180^\circ + (-81.3^\circ) = 98.7^\circ$.

**Answer:**
a) Phase Margin = $98.7^\circ$.
b) Since the phase never reaches $-180^\circ$ for any finite frequency, the Gain Margin is infinite. This means the system is stable for all positive values of $K$. The maximum value of $K$ for stability is therefore infinity.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
