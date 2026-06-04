---
title: "Performance Analysis using Root-Locus and  frequency Response Methods in MATLAB/SCILAB/similar softwares."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36778"
status: "completed"
scrapedAt: "2026-05-23T16:25:23.346Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root-Locus and Frequency Response Methods in MATLAB/SCILAB

## Introduction to Performance Analysis

In control systems engineering, **performance analysis** is crucial for understanding how a system will behave under various conditions and for ensuring that it meets desired specifications. This module focuses on two powerful graphical methods for performance analysis: the **Root-Locus method** and **Frequency Response methods**. We will explore how these methods are implemented and utilized using simulation software like MATLAB and SCILAB to analyze the performance of linear, time-invariant (LTI) control systems.

**Key Concept:** The **performance** of a control system is typically defined by metrics such as transient response (e.g., rise time, settling time, overshoot) and steady-state response (e.g., steady-state error).

---

## 10.1 Root-Locus Method for Performance Analysis

The **Root-Locus method** is a graphical technique that shows how the **closed-loop poles** of a system change as a single parameter, usually the **open-loop gain (K)**, is varied from zero to infinity. By examining the location of the closed-loop poles in the complex plane, we can predict and analyze the system's transient response.

**Learning Outcomes Addressed:**
*   Analyze a linear continuous time system model using simulation tools (CO3).
*   Identify and conduct suitable experiments to determine the parameters to model a physical system (CO1) - *Indirectly, as understanding system poles from a model is a prerequisite.*
*   Conduct suitable experiments and determine the performance specifications (CO2) - *By relating pole locations to performance metrics.*

### 10.1.1 Key Concepts and Definitions

*   **Open-Loop Transfer Function (G(s)H(s)):** The transfer function of the system when the feedback loop is broken.
*   **Closed-Loop Transfer Function:** The transfer function of the system with the feedback loop closed. For a unity feedback system, it's $T(s) = \frac{G(s)}{1 + G(s)H(s)}$.
*   **Characteristic Equation:** The denominator of the closed-loop transfer function set to zero: $1 + G(s)H(s) = 0$. The roots of this equation are the **closed-loop poles**.
*   **Root Locus:** The locus of the closed-loop poles in the s-plane as the gain K varies from 0 to $\infty$.
*   **P-domain:** The s-plane where poles and zeros are plotted. The real axis represents damping ratio ($\zeta$) and the imaginary axis represents the natural frequency ($\omega_n$).
*   **Damping Ratio ($\zeta$):** A parameter that describes how oscillations decay after a disturbance.
    *   $\zeta = 0$: Undamped (oscillatory)
    *   $0 < \zeta < 1$: Underdamped (oscillatory decay)
    *   $\zeta = 1$: Critically damped (fastest decay without overshoot)
    *   $\zeta > 1$: Overdamped (slow decay without overshoot)
*   **Natural Frequency ($\omega_n$):** The frequency of oscillation of the system if there were no damping.
*   **Damped Natural Frequency ($\omega_d$):** The frequency of oscillation of an underdamped system. $\omega_d = \omega_n \sqrt{1 - \zeta^2}$.
*   **Transient Response Specifications:**
    *   **Rise Time ($T_r$):** Time taken for the response to go from 0% to 100% of its final value.
    *   **Peak Overshoot ($M_p$):** The maximum percentage by which the response exceeds its final value. $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$.
    *   **Settling Time ($T_s$):** Time taken for the response to settle within a certain percentage (typically 2% or 5%) of its final value. For 2% settling time, $T_s \approx \frac{4}{\zeta \omega_n}$ (for dominant second-order systems).

**Relationship between Pole Location and Transient Response:**
For a dominant second-order system with poles at $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$:
*   **Real part of the pole ($-\zeta \omega_n$):** Determines the speed of the transient response. A more negative real part leads to a faster response (smaller settling time).
*   **Imaginary part of the pole ($\pm j \omega_d$):** Determines the frequency of oscillation. A larger imaginary part leads to a faster oscillation frequency.
*   **Angle of the pole with the negative real axis ($\theta = \cos^{-1} \zeta$):** Directly relates to the damping ratio.

### 10.1.2 Root-Locus Plotting Rules (Summary)

While software automates this, understanding the rules is crucial for interpretation.

1.  **Number of Branches:** Equal to the number of open-loop poles.
2.  **Symmetry:** Root loci are symmetric with respect to the real axis.
3.  **Real Axis Segments:** Segments of the real axis are part of the locus if they have an odd number of poles and zeros to their right.
4.  **Asymptotes:** For $K \to \infty$, the locus approaches asymptotes originating from the **centroid** and making angles with the real axis.
    *   Centroid ($\sigma_a$): $\sigma_a = \frac{\sum \text{poles} - \sum \text{zeros}}{\text{number of poles} - \text{number of zeros}}$
    *   Angles ($\theta_k$): $\theta_k = \frac{(2k+1)180^\circ}{P-Z}$, where $P$ is the number of poles, $Z$ is the number of zeros, and $k = 0, 1, 2, \dots, P-Z-1$.
5.  **Breakaway and Break-in Points:** Points where the locus leaves the real axis (breakaway) or enters the real axis (break-in). These occur at the roots of $\frac{dK}{ds} = 0$.
6.  **Imaginary Axis Intersections:** Determined by substituting $s = j\omega$ into the characteristic equation and solving for $\omega$ and $K$ using the Routh-Hurwitz criterion.
7.  **Phase Angle Condition:** For any point $s$ on the locus, $|G(s)H(s)| = 1/K$ and $\angle G(s)H(s) = (2k+1)180^\circ$.

### 10.1.3 Performance Analysis using Root-Locus in MATLAB/SCILAB

**MATLAB Commands:**
*   `tf(num, den)`: Creates a transfer function object.
*   `rlocus(sys)`: Generates the root-locus plot for a given system `sys`.
*   `rlocfind(sys)`: Allows you to click on the root-locus plot to find the gain $K$ and the corresponding closed-loop poles.
*   `sgrid(zeta, wn)`: Adds lines of constant damping ratio ($\zeta$) and constant natural frequency ($\omega_n$) to the root-locus plot for easy analysis.

**SCILAB Commands:**
*   `syslin('c', num, den)`: Creates a linear continuous-time system object.
*   `evans(sys)`: Generates the root-locus plot for a given system `sys`.
*   `rld(sys)`: Allows you to find the gain and poles by clicking on the plot.
*   `sgrid(zeta, wn)`: Adds constant $\zeta$ and $\omega_n$ lines.

**Example:**
Consider a unity feedback system with open-loop transfer function $G(s) = \frac{K}{s(s+2)}$.
The characteristic equation is $1 + \frac{K}{s(s+2)} = 0$, which is $s^2 + 2s + K = 0$.

Using MATLAB:
```matlab
num = [1];
den = [1 2 0];
sys = tf(num, den);
figure;
rlocus(sys);
title('Root Locus for G(s) = K/(s(s+2))');
sgrid; % Adds damping and natural frequency grids
```

**Interpretation:**
*   The plot shows two branches starting from the open-loop poles at $s=0$ and $s=-2$.
*   The locus breaks away from the real axis at $s=-1$.
*   The locus intersects the imaginary axis at $s = \pm j\sqrt{K}$. Using Routh-Hurwitz, we find the system is marginally stable at $K=4$, with poles at $s=\pm j2$.
*   For $K=4$, the closed-loop poles are $s = -1 \pm j\sqrt{3}$. This corresponds to $\zeta = \frac{1}{2}$ and $\omega_n = 2$.
*   We can use `rlocfind` to pick a point on the locus and determine the corresponding $K$ and pole locations, and then calculate performance metrics like overshoot and settling time.

### 10.1.4 Performance Analysis by relating Pole Locations to Specifications

Once the root locus is plotted and a specific gain $K$ is chosen, we can determine the closed-loop poles. These pole locations directly inform the transient response.

*   **Desired $\zeta$ and $\omega_n$ lines:** Overlaying $\zeta$ and $\omega_n$ lines (using `sgrid`) on the root locus plot helps visualize the gain $K$ required to achieve desired damping and speed.
*   **Calculating Performance Metrics:**
    *   If the dominant poles are $s = -\sigma \pm j\omega_d$, then:
        *   $\zeta = \frac{\sigma}{\sqrt{\sigma^2 + \omega_d^2}}$
        *   $\omega_n = \sqrt{\sigma^2 + \omega_d^2}$
        *   $T_r \approx \frac{1.8}{\omega_n}$ (for 0-100%)
        *   $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$
        *   $T_s \approx \frac{4}{\sigma}$ (for 2% settling time)

**Example (Continuing from above):**
For $K=8$, the closed-loop poles are $s^2 + 2s + 8 = 0$, so $s = -1 \pm j\sqrt{7}$.
*   $\sigma = 1$, $\omega_d = \sqrt{7} \approx 2.646$.
*   $\omega_n = \sqrt{1^2 + (\sqrt{7})^2} = \sqrt{1+7} = \sqrt{8} \approx 2.828$.
*   $\zeta = \frac{1}{\sqrt{8}} \approx 0.354$.
*   $T_r \approx \frac{1.8}{2.828} \approx 0.637$ seconds.
*   $M_p = e^{-\frac{\pi \times 0.354}{\sqrt{1-0.354^2}}} \approx e^{-1.15} \approx 0.317$ or 31.7%.
*   $T_s \approx \frac{4}{1} = 4$ seconds.

---

## 10.2 Frequency Response Methods for Performance Analysis

**Frequency response methods** analyze the system's behavior when subjected to sinusoidal inputs of varying frequencies. They are particularly useful for assessing **steady-state response** and **relative stability**.

**Learning Outcomes Addressed:**
*   Analyze a linear continuous time system model using simulation tools (CO3).
*   Conduct suitable experiments and determine the performance specifications (CO2) - *By relating frequency response plots to performance metrics.*
*   Design suitable controllers/compensators to meet the performance requirements using simulation tools (CO4) - *By shaping the frequency response.*

### 10.2.1 Key Concepts and Definitions

*   **Sinusoidal Input:** $r(t) = A \sin(\omega t)$.
*   **Steady-State Output:** For an LTI system, the steady-state output to a sinusoidal input is also sinusoidal, but with a different amplitude and phase shift: $y_{ss}(t) = B \sin(\omega t + \phi)$.
*   **Frequency Response:** The ratio of the output phasor to the input phasor, as a function of frequency $\omega$. If $G(s)$ is the transfer function, the frequency response is $G(j\omega)$.
    *   $G(j\omega) = |G(j\omega)| e^{j\angle G(j\omega)}$
    *   $|G(j\omega)|$: **Magnitude Response**. Represents the amplitude gain at frequency $\omega$.
    *   $\angle G(j\omega)$: **Phase Response**. Represents the phase shift at frequency $\omega$.
*   **Bode Plot:** A plot of $|G(j\omega)|$ (in dB) and $\angle G(j\omega)$ (in degrees) versus $\log(\omega)$.
    *   **Magnitude Plot:** $|G(j\omega)|_{dB} = 20 \log_{10} |G(j\omega)|$.
    *   **Phase Plot:** $\angle G(j\omega)$.
*   **Nyquist Plot:** A plot of the imaginary part of $G(j\omega)$ versus the real part of $G(j\omega)$ as $\omega$ varies from 0 to $\infty$.
*   **Nichols Plot:** A plot of magnitude (in dB) versus phase angle (in degrees).

### 10.2.2 Performance Specifications from Frequency Response

*   **Gain Margin (GM):** The amount of gain that can be added to the system before it becomes unstable. It's measured at the **phase crossover frequency** ($\omega_{pc}$), where the phase angle is -180 degrees.
    *   $GM = \frac{1}{|G(j\omega_{pc})|}$ or $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})|$.
*   **Phase Margin (PM):** The amount of additional phase lag that can be added to the system before it becomes unstable. It's measured at the **gain crossover frequency** ($\omega_{gc}$), where the magnitude is 0 dB ($|G(j\omega_{gc})| = 1$).
    *   $PM = 180^\circ + \angle G(j\omega_{gc})$.
*   **Bandwidth ($\omega_{bw}$):** The range of frequencies over which the system's gain is within 3 dB of its maximum value (typically at $\omega=0$ for minimum phase systems). A higher bandwidth generally implies a faster response.
*   **Resonant Peak ($M_p$):** The maximum value of the magnitude response $|G(j\omega)|$ in the frequency range of interest. Corresponds to peak overshoot in the time domain.
*   **Resonant Frequency ($\omega_r$):** The frequency at which the resonant peak occurs.

**Relationship between Frequency Response and Transient Response (for dominant second-order systems):**
*   $M_p \approx \frac{1}{2\zeta}$ (for $\zeta < \frac{1}{\sqrt{2}}$)
*   $\omega_{bw} \approx \omega_n (1 - 2\zeta + \sqrt{2 - 4\zeta + 2\zeta^2})$
*   For underdamped systems, a larger phase margin generally leads to a larger peak overshoot. A phase margin of $30^\circ - 60^\circ$ is often considered desirable for good transient response.

### 10.2.3 Performance Analysis using Frequency Response Plots in MATLAB/SCILAB

**MATLAB Commands:**
*   `bode(sys)`: Generates the Bode plot for a system `sys`.
*   `margin(sys)`: Adds gain and phase margins to the Bode plot.
*   `nyquist(sys)`: Generates the Nyquist plot.
*   `nichols(sys)`: Generates the Nichols plot.
*   `bandwidth(sys)`: Calculates the bandwidth of the system.

**SCILAB Commands:**
*   `bode(sys)`: Generates the Bode plot.
*   `g_margin(sys)`: Calculates and displays gain and phase margins.
*   `nyquist(sys)`: Generates the Nyquist plot.
*   `nichols(sys)`: Generates the Nichols plot.
*   `sys_bw(sys)`: Calculates the bandwidth.

**Example:**
Consider the same unity feedback system with open-loop transfer function $G(s) = \frac{K}{s(s+2)}$. Let's set $K=8$.
$G(s) = \frac{8}{s(s+2)}$.

Using MATLAB:
```matlab
num = [8];
den = [1 2 0];
sys = tf(num, den);
figure;
margin(sys);
title('Bode Plot with Margins for G(s) = 8/(s(s+2))');
```

**Interpretation:**
*   The Bode plot shows the magnitude and phase response of the system.
*   The `margin` command will automatically calculate and display the gain margin and phase margin.
*   From the plot, we can observe the gain crossover frequency ($\omega_{gc}$) and phase crossover frequency ($\omega_{pc}$).
*   The bandwidth can be calculated using the `bandwidth` command.

**Example:** Let's analyze $G(s) = \frac{K}{s(s+2)}$ for stability.
The phase crossover frequency is where $\angle G(j\omega) = -180^\circ$.
$\angle G(j\omega) = \angle \frac{K}{j\omega(j\omega+2)} = \angle K - \angle j\omega - \angle (j\omega+2)$
$= 0^\circ - 90^\circ - \arctan(\frac{\omega}{2})$
For $-180^\circ$:
$-90^\circ - \arctan(\frac{\omega_{pc}}{2}) = -180^\circ$
$\arctan(\frac{\omega_{pc}}{2}) = 90^\circ$
This implies $\omega_{pc} \to \infty$. This suggests that for this system, the phase never reaches -180 degrees unless the poles are on the real axis, meaning the system is always stable in terms of phase margin. Let's re-evaluate the critical case.

For a second-order system $G(s) = \frac{\omega_n^2}{s(s+2\zeta \omega_n)}$, the phase crossover frequency is indeed infinite if there are no zeros. For $G(s) = \frac{K}{s(s+2)}$, the characteristic equation poles are at $s = -1 \pm \sqrt{1-K}$. For $K=4$, poles are at $s=-1 \pm j\sqrt{3}$.

Let's consider a system with a phase crossover frequency: $G(s) = \frac{K}{s(s+1)(s+2)}$.
The phase is $-90^\circ - \arctan(\omega) - \arctan(\omega/2)$.
For $-180^\circ$:
$-90^\circ - \arctan(\omega_{pc}) - \arctan(\omega_{pc}/2) = -180^\circ$
$\arctan(\omega_{pc}) + \arctan(\omega_{pc}/2) = 90^\circ$
This requires $\omega_{pc} \to \infty$, which implies infinite gain margin.

Let's use a more common example for margins: $G(s) = \frac{K}{s(s+1)}$.
Phase: $-90^\circ - \arctan(\omega)$.
Phase crossover frequency $\omega_{pc}$ where phase is $-180^\circ$:
$-90^\circ - \arctan(\omega_{pc}) = -180^\circ \implies \arctan(\omega_{pc}) = 90^\circ \implies \omega_{pc} \to \infty$.

Okay, the basic second-order systems often have infinite gain margins. Let's introduce a pole at the origin for G(s) and consider a zero.
Example: $G(s) = \frac{K(s+1)}{s(s+2)}$.
Phase: $90^\circ - 90^\circ - \arctan(\omega) - \arctan(\omega/2) = -\arctan(\omega) - \arctan(\omega/2)$.
For phase crossover frequency ($\omega_{pc}$): $-\arctan(\omega_{pc}) - \arctan(\omega_{pc}/2) = -180^\circ$.
$\arctan(\omega_{pc}) + \arctan(\omega_{pc}/2) = 180^\circ$.
Using $\arctan(x) + \arctan(y) = \arctan(\frac{x+y}{1-xy})$:
$\arctan(\frac{\omega_{pc} + \omega_{pc}/2}{1 - \omega_{pc}(\omega_{pc}/2)}) = 180^\circ$.
$\frac{3\omega_{pc}/2}{1 - \omega_{pc}^2/2} = \tan(180^\circ) = 0$.
This implies $3\omega_{pc}/2 = 0$, so $\omega_{pc} = 0$. This is incorrect.
The formula $\arctan(x) + \arctan(y) = \arctan(\frac{x+y}{1-xy})$ is valid only if $xy < 1$. Here, $\omega_{pc}(\omega_{pc}/2) = \omega_{pc}^2/2$ can be greater than 1.
If $xy > 1$ and $x>0, y>0$, then $\arctan(x) + \arctan(y) = 180^\circ + \arctan(\frac{x+y}{1-xy})$.
So, $180^\circ + \arctan(\frac{3\omega_{pc}/2}{1 - \omega_{pc}^2/2}) = 180^\circ$.
This implies $\arctan(\frac{3\omega_{pc}/2}{1 - \omega_{pc}^2/2}) = 0$, which means $\frac{3\omega_{pc}/2}{1 - \omega_{pc}^2/2} = 0$, leading to $\omega_{pc}=0$. This is not right.

Let's go back to the phase condition directly.
$-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$
$\arctan(\omega) + \arctan(\omega/2) = 90^\circ$.
This condition is met as $\omega \to \infty$. So, $\omega_{pc} \to \infty$.

The **gain crossover frequency** is where $|G(j\omega)| = 1$.
$|G(j\omega)| = |\frac{K}{j\omega(j\omega+2)}| = \frac{K}{\omega \sqrt{\omega^2+4}}$.
Let's consider a specific gain, say $K=10$.
$|G(j\omega)| = \frac{10}{\omega \sqrt{\omega^2+4}}$.
We need to find $\omega_{gc}$ where $|G(j\omega_{gc})| = 1$.
$\frac{10}{\omega_{gc} \sqrt{\omega_{gc}^2+4}} = 1 \implies 100 = \omega_{gc}^2 (\omega_{gc}^2+4)$.
Let $x = \omega_{gc}^2$. $x(x+4) = 100 \implies x^2 + 4x - 100 = 0$.
$x = \frac{-4 \pm \sqrt{16 - 4(1)(-100)}}{2} = \frac{-4 \pm \sqrt{16+400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.4}{2}$.
Since $x = \omega_{gc}^2 > 0$, $x = \frac{-4 + 20.4}{2} = \frac{16.4}{2} = 8.2$.
So, $\omega_{gc} = \sqrt{8.2} \approx 2.86$ rad/s.

At $\omega_{gc} \approx 2.86$ rad/s, the phase is:
$\angle G(j\omega_{gc}) = -90^\circ - \arctan(2.86) - \arctan(2.86/2)$
$\arctan(2.86) \approx 70.8^\circ$
$\arctan(1.43) \approx 55.0^\circ$
$\angle G(j\omega_{gc}) \approx -90^\circ - 70.8^\circ - 55.0^\circ = -215.8^\circ$.

This phase angle is less than -180 degrees, so the phase margin would be $180^\circ + (-215.8^\circ) = -35.8^\circ$. A negative phase margin indicates instability.

Let's try to find $K$ for a phase margin of $45^\circ$.
We need $\angle G(j\omega_{gc}) = -180^\circ + 45^\circ = -135^\circ$.
$-90^\circ - \arctan(\omega_{gc}) - \arctan(\omega_{gc}/2) = -135^\circ$.
$\arctan(\omega_{gc}) + \arctan(\omega_{gc}/2) = 45^\circ$.
$\arctan(\frac{\omega_{gc} + \omega_{gc}/2}{1 - \omega_{gc}^2/2}) = 45^\circ$.
$\frac{3\omega_{gc}/2}{1 - \omega_{gc}^2/2} = \tan(45^\circ) = 1$.
$3\omega_{gc}/2 = 1 - \omega_{gc}^2/2$.
$\omega_{gc}^2/2 + 3\omega_{gc}/2 - 1 = 0$.
$\omega_{gc}^2 + 3\omega_{gc} - 2 = 0$.
$\omega_{gc} = \frac{-3 \pm \sqrt{9 - 4(1)(-2)}}{2} = \frac{-3 \pm \sqrt{9+8}}{2} = \frac{-3 \pm \sqrt{17}}{2}$.
Since $\omega_{gc} > 0$, $\omega_{gc} = \frac{-3 + \sqrt{17}}{2} \approx \frac{-3+4.12}{2} \approx 0.56$ rad/s.

Now, find $K$ using $|G(j\omega_{gc})|=1$:
$|G(j\omega_{gc})| = \frac{K}{\omega_{gc} \sqrt{\omega_{gc}^2+4}} = 1$.
$K = \omega_{gc} \sqrt{\omega_{gc}^2+4}$.
With $\omega_{gc} \approx 0.56$:
$K \approx 0.56 \sqrt{(0.56)^2 + 4} \approx 0.56 \sqrt{0.3136 + 4} \approx 0.56 \sqrt{4.3136} \approx 0.56 \times 2.077 \approx 1.16$.

So, for $G(s) = \frac{K}{s(s+2)}$, a gain of $K \approx 1.16$ will yield a phase margin of approximately $45^\circ$.

---

## 10.3 Comparing Root-Locus and Frequency Response Methods

Both methods provide valuable insights into system performance but from different perspectives.

| Feature           | Root-Locus Method                                     | Frequency Response Methods                          |
| :---------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| **Focus**         | Transient response (pole locations)                   | Steady-state response, stability margins            |
| **Parameter Varied** | Open-loop gain (K)                                    | Input frequency ($\omega$)                          |
| **Primary Output** | Locus of closed-loop poles in the s-plane             | Magnitude and phase as a function of frequency    |
| **Stability**     | Determined by locus crossing the imaginary axis       | Determined by Gain Margin and Phase Margin          |
| **Analysis**      | Directly relates pole locations to transient specs    | Relates frequency response characteristics to stability and indirectly to transient response |
| **Software Use**  | Plotting loci, identifying poles and gains            | Plotting Bode, Nyquist, Nichols; calculating margins, bandwidth |
| **Design**        | Placing poles to meet transient specs, finding K      | Shaping frequency response, finding K for desired margins |

**Key Point:** For optimal design and analysis, it's often beneficial to use both methods. For instance, root locus can help place poles to achieve desired transient response, and frequency response can then verify stability margins.

---

## 10.4 Practical Implementation and Software Usage

The effectiveness of these methods heavily relies on proficiency with simulation software.

**Steps for Performance Analysis in Software:**

1.  **Model the System:** Define the system's transfer function (open-loop or closed-loop).
2.  **Root-Locus Analysis:**
    *   Generate the root locus plot.
    *   Overlay constant $\zeta$ and $\omega_n$ lines.
    *   Use interactive tools to select desired pole locations and find the corresponding gain $K$.
    *   Calculate transient performance metrics from the chosen poles.
3.  **Frequency Response Analysis:**
    *   Generate Bode, Nyquist, or Nichols plots.
    *   Use interactive tools or commands to find gain and phase margins, gain/phase crossover frequencies.
    *   Calculate bandwidth.
    *   Relate these frequency domain parameters to transient and steady-state performance.
4.  **Iterative Design:** Adjust controller parameters (e.g., gain $K$, compensator parameters) and re-analyze to meet performance specifications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 10.5 Textbooks and Reference Material Integration

*   **Katsuhiko Ogata's "Modern Control Engineering":** Provides a comprehensive theoretical foundation for both root-locus and frequency response methods, including detailed explanations of plotting rules, stability criteria (Routh-Hurwitz, Nyquist, Bode), and performance specifications. Chapters on transient and steady-state error analysis are particularly relevant.
*   **Norman S. Nise's "Control Systems Engineering":** Offers practical insights and clear examples for applying root-locus and frequency response techniques. Nise's book is known for its step-by-step approach to analysis and design, including detailed procedures for constructing root loci and interpreting Bode plots. Chapters on transient and steady-state response, and stability, are key.
*   **Nagrath & Gopal's "Control Systems Engineering":** Presents a balanced theoretical and practical approach. Their coverage of root locus and frequency domain techniques is thorough, often linking them to time-domain performance. Concepts like stability, transient response, and steady-state error are well-integrated.

**Reference Books:**
*   **Kuo's "Automatic Control Systems"** and **Gopal's "Control Systems Principles and Design"**: Offer alternative perspectives and additional examples for reinforcing the concepts of root locus and frequency response analysis.
*   **Dorf & Bishop's "Modern Control Systems"**: Provides a strong foundation, often with a focus on state-space methods but also excellent coverage of classical root locus and frequency domain techniques.

---

## Practice Questions and Exercises

**Question 1 (Root-Locus):**
Consider a unity feedback system with open-loop transfer function $G(s) = \frac{K}{s(s+4)}$.
a) Sketch the root locus.
b) Determine the value of $K$ for which the closed-loop system has a damping ratio ($\zeta$) of 0.5.
c) For the gain found in (b), determine the closed-loop poles, settling time ($T_s$ for 2% criterion), and peak overshoot ($M_p$).
d) Use MATLAB/SCILAB to generate the root locus and verify your answers.

**Answer 1:**
a) **Sketching the root locus:**
    *   Poles at $s=0, s=-4$. Zeros at infinity.
    *   Locus starts at $s=0$ and $s=-4$.
    *   Real axis segments: $(- \infty, -4]$ and $[0, \infty)$? No, $(-\infty, -4]$ and $[0,0)$ is not right. Correct: $(-\infty, -4]$ and $[0, \infty)$ is wrong. The correct real axis segments are $(-\infty, -4]$ and from $0$ to $0$ if there are no zeros on the real axis. With poles at $s=0$ and $s=-4$, and no finite zeros, the real axis segments are $(-\infty, -4]$ and $[0, \infty)$ if we consider the case with one pole on the real axis. For two poles at 0 and -4, the locus starts at these points. Real axis segments: $(-\infty, -4]$ and $[0, \infty)$ are NOT correct. Real axis segments are where there is an odd number of poles/zeros to the right. So, $(-\infty, -4]$ and $(0, \infty)$ is not right. It's $(-\infty, -4]$ and the locus leaves $0$ and goes up and down. Let's use the rule correctly.
    *   Poles at $s=0$ and $s=-4$.
    *   Real axis segments: For $s < -4$, there are two poles to the right, so no locus. For $-4 < s < 0$, there is one pole to the right, so the segment $[-4, 0]$ is part of the locus. For $s > 0$, there are two poles to the right, so no locus.
    *   Breakaway point: $\frac{dK}{ds} = 0$. $K = -s^2 - 4s$. $\frac{dK}{ds} = -2s - 4$. Setting to zero gives $s = -2$. This is between the poles, so it's a breakaway point.
    *   Asymptotes: Number of poles = 2, Number of zeros = 0. $P-Z=2$.
        *   Centroid: $\sigma_a = \frac{0 + (-4) - 0}{2 - 0} = -2$.
        *   Angles: $\theta_k = \frac{(2k+1)180^\circ}{2}$, for $k=0, 1$.
            *   $k=0: \theta_0 = \frac{180^\circ}{2} = 90^\circ$.
            *   $k=1: \theta_1 = \frac{3 \times 180^\circ}{2} = 270^\circ$ (or $-90^\circ$).
    *   The locus is symmetric about the real axis. Branches start from $s=0$ and $s=-4$. The branch from $s=-4$ goes left to $-\infty$. The branches from $s=0$ go up and down along the $90^\circ$ and $270^\circ$ asymptotes, originating from the breakaway point $s=-2$. The locus crosses the imaginary axis.
    *   Imaginary axis crossing: $1 + \frac{K}{s(s+4)} = 0 \implies s^2 + 4s + K = 0$.
        *   Using Routh-Hurwitz: Row $s^2$: 1, K. Row $s^1$: 4, 0.
        *   To have stability, all coefficients in the first column must be positive. $1 > 0$, $4 > 0$.
        *   Auxiliary equation: $4s + K = 0 \implies s = -K/4$. This is for the real axis pole from the breakaway.
        *   For imaginary axis crossing, we use the $s^2$ row: $s^2 + K = 0$. $s^2 = -K$. $s = \pm j\sqrt{K}$.
        *   Imaginary axis crossing at $s = \pm j\omega$, where $\omega^2 = K$.
        *   The breakaway point is at $s=-2$. When $s=-2$, $K = -(-2)^2 - 4(-2) = -4 + 8 = 4$.
        *   At $s=-2$, $K=4$. Poles are at $-2, -2$. This is the breakaway point.
        *   The poles move towards the imaginary axis as K increases from 4.
        *   Let's re-evaluate the characteristic equation: $s^2 + 4s + K = 0$. For imaginary axis crossing, the coefficient of 's' must be zero. This is not the case here.
        *   Ah, the characteristic equation is directly $s^2 + 4s + K = 0$.
        *   For the roots to be purely imaginary, the term $4s$ must be zero. This is only possible if $s=0$. But $s=0$ implies $K=0$.
        *   The general rule for $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$: $\omega_n^2 = K$ and $2\zeta\omega_n = 4$.
        *   We need to find the $K$ value where the roots are on the imaginary axis. Substitute $s=j\omega$: $(j\omega)^2 + 4(j\omega) + K = 0 \implies -\omega^2 + j4\omega + K = 0$.
        *   Real part: $-\omega^2 + K = 0 \implies K = \omega^2$.
        *   Imaginary part: $4\omega = 0 \implies \omega = 0$. This again leads to $K=0$.

    *   Let's use the sgrid formula. For $\zeta = 0.5$, the angle is $\theta = \cos^{-1}(0.5) = 60^\circ$.
    *   The asymptotes are at $90^\circ$ and $270^\circ$. The locus will approach these asymptotes.
    *   Let's check the points on the $\zeta=0.5$ line. A point on this line has the form $s = -\sigma + j\sigma\sqrt{3}$ (since $\tan(60^\circ) = \sqrt{3}$).
    *   Substitute $s = -\sigma + j\sigma\sqrt{3}$ into $s^2 + 4s + K = 0$.
        *   $(-\sigma + j\sigma\sqrt{3})^2 + 4(-\sigma + j\sigma\sqrt{3}) + K = 0$
        *   $(\sigma^2 - 3\sigma^2 - j2\sigma^2\sqrt{3}) + (-4\sigma + j4\sigma\sqrt{3}) + K = 0$
        *   $-2\sigma^2 - 4\sigma + K + j(-\sqrt{3}\sigma^2 + 4\sigma\sqrt{3}) = 0$
    *   Equating imaginary part to zero: $-\sqrt{3}\sigma^2 + 4\sigma\sqrt{3} = 0 \implies \sigma\sqrt{3}(4-\sigma) = 0$.
        *   Since $\sigma > 0$ for the locus to the left of the imaginary axis, $\sigma = 4$.
    *   So, the poles are at $s = -4 + j4\sqrt{3}$.
    *   Equating real part to zero (to find K): $-2\sigma^2 - 4\sigma + K = 0$.
        *   $K = 2\sigma^2 + 4\sigma = 2(4^2) + 4(4) = 2(16) + 16 = 32 + 16 = 48$.
    *   So, for $\zeta=0.5$, $K=48$. The poles are at $s = -4 \pm j4\sqrt{3}$.

b) **K for $\zeta = 0.5$**: $K = 48$.

c) **Performance metrics for K=48**:
    *   Closed-loop poles: $s = -4 \pm j4\sqrt{3}$.
    *   $\zeta = 0.5$.
    *   $\omega_n = \sqrt{(-4)^2 + (4\sqrt{3})^2} = \sqrt{16 + 16 \times 3} = \sqrt{16+48} = \sqrt{64} = 8$.
    *   $T_s (2\% criterion) = \frac{4}{\zeta \omega_n} = \frac{4}{0.5 \times 8} = \frac{4}{4} = 1$ second.
    *   $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}} = e^{-\frac{\pi \times 0.5}{\sqrt{1-0.5^2}}} = e^{-\frac{0.5\pi}{\sqrt{0.75}}} = e^{-\frac{0.5\pi}{0.866}} \approx e^{-1.81} \approx 0.164$.
    *   $M_p = 16.4 \%$.

d) **MATLAB/SCILAB Verification:**
```matlab
% MATLAB Code
num = [1];
den = [1 4 0];
sys = tf(num, den);
figure;
rlocus(sys);
title('Root Locus for G(s) = K/(s(s+4))');
sgrid(0.5, 8); % Add lines for zeta=0.5 and omega_n=8
```
Running this code will show the root locus and the selected point on the $\zeta=0.5$ line where the gain is 48 and the poles are at $-4 \pm j6.928$ (which is $-4 \pm j4\sqrt{3}$).

---

**Question 2 (Frequency Response):**
Consider a unity feedback system with open-loop transfer function $G(s) = \frac{10}{s(s+1)}$.
a) Plot the Bode diagram of $G(s)$ using MATLAB/SCILAB.
b) Determine the gain crossover frequency ($\omega_{gc}$) and phase margin (PM).
c) Determine the phase crossover frequency ($\omega_{pc}$) and gain margin (GM).
d) If the desired phase margin is $60^\circ$, what should be the new gain $K$ if the open-loop transfer function becomes $G(s) = \frac{K}{s(s+1)}$?

**Answer 2:**
a) **Bode Diagram:**
```matlab
% MATLAB Code
K = 10;
num = [K];
den = [1 1 0];
sys = tf(num, den);
figure;
margin(sys);
title('Bode Plot for G(s) = 10/(s(s+1))');
```
This will generate the Bode plot with magnitude and phase responses.

b) **Gain Crossover Frequency ($\omega_{gc}$) and Phase Margin (PM):**
From the Bode plot generated by `margin(sys)`:
*   The gain crossover frequency ($\omega_{gc}$) is where the magnitude plot crosses the 0 dB line. For $G(s) = \frac{10}{s(s+1)}$, $\omega_{gc} \approx 3.16$ rad/s.
*   The phase margin (PM) is the value indicated on the plot at $\omega_{gc}$. For $K=10$, PM $\approx 18.4^\circ$.

c) **Phase Crossover Frequency ($\omega_{pc}$) and Gain Margin (GM):**
*   The phase crossover frequency ($\omega_{pc}$) is where the phase plot crosses the -180$^\circ$ line. For $G(s) = \frac{10}{s(s+1)}$, the phase is $-90^\circ - \arctan(\omega)$.
    *   $-90^\circ - \arctan(\omega_{pc}) = -180^\circ \implies \arctan(\omega_{pc}) = 90^\circ$.
    *   This implies $\omega_{pc} \to \infty$.
*   When $\omega_{pc} \to \infty$, the gain margin is infinite. This is because the magnitude $\frac{10}{\omega\sqrt{\omega^2+1}}$ approaches 0 as $\omega \to \infty$.

d) **New Gain K for $60^\circ$ PM:**
The phase is $\angle G(j\omega) = -90^\circ - \arctan(\omega)$.
For a phase margin of $60^\circ$, the phase at the gain crossover frequency $\omega_{gc}$ should be $-180^\circ + 60^\circ = -120^\circ$.
*   $-90^\circ - \arctan(\omega_{gc}) = -120^\circ$.
*   $\arctan(\omega_{gc}) = 30^\circ$.
*   $\omega_{gc} = \tan(30^\circ) = \frac{1}{\sqrt{3}} \approx 0.577$ rad/s.

Now, we need the magnitude at this frequency to be 1 (0 dB) with the new gain $K$.
$|G(j\omega_{gc})| = |\frac{K}{j\omega_{gc}(j\omega_{gc}+1)}| = \frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1$.
$K = \omega_{gc}\sqrt{\omega_{gc}^2+1}$.
Substitute $\omega_{gc} = \frac{1}{\sqrt{3}}$:
$K = \frac{1}{\sqrt{3}}\sqrt{(\frac{1}{\sqrt{3}})^2 + 1} = \frac{1}{\sqrt{3}}\sqrt{\frac{1}{3} + 1} = \frac{1}{\sqrt{3}}\sqrt{\frac{4}{3}} = \frac{1}{\sqrt{3}} \times \frac{2}{\sqrt{3}} = \frac{2}{3}$.

Wait, this calculation seems incorrect for a gain that should be larger. Let's re-check the phase crossover.
For $G(s) = \frac{K}{s(s+1)}$, the phase is $-90^\circ - \arctan(\omega)$. This phase never reaches $-180^\circ$ unless $\omega \to \infty$. This implies infinite gain margin.

The problem is likely set up such that a phase crossover frequency exists. Let's assume the system is $G(s) = \frac{K}{s+1}$ for simplicity for phase margin calculation.
Phase: $-\arctan(\omega)$.
$- \arctan(\omega_{gc}) = -120^\circ \implies \arctan(\omega_{gc}) = 120^\circ$. This is not possible as arctan range is $(-90^\circ, 90^\circ)$.

Let's use the original problem $G(s) = \frac{K}{s(s+1)}$.
The phase lag is always less than $180^\circ$. So the phase margin will always be positive.
We need to achieve PM = $60^\circ$.
Phase at $\omega_{gc}$ must be $-120^\circ$.
$-90^\circ - \arctan(\omega_{gc}) = -120^\circ$.
$\arctan(\omega_{gc}) = 30^\circ$.
$\omega_{gc} = \tan(30^\circ) = \frac{1}{\sqrt{3}}$.

Now, for magnitude at $\omega_{gc}$: $|G(j\omega_{gc})| = \frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}}$.
We need the magnitude to be 1 at $\omega_{gc}$.
$1 = \frac{K}{\frac{1}{\sqrt{3}}\sqrt{(\frac{1}{\sqrt{3}})^2+1}} = \frac{K}{\frac{1}{\sqrt{3}}\sqrt{\frac{1}{3}+1}} = \frac{K}{\frac{1}{\sqrt{3}}\sqrt{\frac{4}{3}}} = \frac{K}{\frac{1}{\sqrt{3}}\frac{2}{\sqrt{3}}} = \frac{K}{2/3}$.
$K = \frac{2}{3}$. This still feels wrong. The gain should increase to get a *better* phase margin, which means the original phase margin was too low.

Let's reconsider the initial gain $K=10$. PM was $18.4^\circ$. To increase PM to $60^\circ$, we need more phase at the *original* gain crossover, or we need to shift the gain crossover to a frequency where the phase is higher.
The phase function is $\phi(\omega) = -90^\circ - \arctan(\omega)$. As $\omega$ increases, the phase lag increases (becomes more negative).
So, to increase the phase margin, we need to decrease the gain crossover frequency.

Let's assume we are using a phase-lead compensator. But the question only asks for a gain change.
The gain $K$ affects the magnitude plot by shifting it up or down. To increase phase margin, we need to decrease the gain crossover frequency. This means lowering the gain.

Let's try a lower gain, say $K=1$.
$|G(j\omega)| = \frac{1}{\omega\sqrt{\omega^2+1}}$.
Set $|G(j\omega_{gc})|=1$: $1 = \frac{1}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} \implies \omega_{gc}\sqrt{\omega_{gc}^2+1} = 1$.
$\omega_{gc}^2(\omega_{gc}^2+1) = 1 \implies \omega_{gc}^4 + \omega_{gc}^2 - 1 = 0$.
Let $x = \omega_{gc}^2$. $x^2 + x - 1 = 0$.
$x = \frac{-1 \pm \sqrt{1-4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$.
Since $x>0$, $x = \frac{-1+\sqrt{5}}{2} \approx 0.618$.
$\omega_{gc} = \sqrt{0.618} \approx 0.786$ rad/s.
Phase at $\omega_{gc}=0.786$: $\phi = -90^\circ - \arctan(0.786) \approx -90^\circ - 38.2^\circ = -128.2^\circ$.
Phase Margin = $180^\circ + (-128.2^\circ) = 51.8^\circ$.

So, reducing the gain from 10 to 1 increases PM from $18.4^\circ$ to $51.8^\circ$.
We want PM $= 60^\circ$. This would require an even lower gain.

Let's re-work the calculation for PM=$60^\circ$:
We need $\omega_{gc}$ such that phase is $-120^\circ$.
$-90^\circ - \arctan(\omega_{gc}) = -120^\circ \implies \arctan(\omega_{gc}) = 30^\circ \implies \omega_{gc} = 1/\sqrt{3} \approx 0.577$.
Now, for PM$=60^\circ$, the magnitude at this $\omega_{gc}$ must be $0$ dB (i.e., 1).
So, $|G(j\omega_{gc})| = |\frac{K}{j\omega_{gc}(j\omega_{gc}+1)}| = 1$.
$\frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1$.
$K = \omega_{gc}\sqrt{\omega_{gc}^2+1}$.
Substitute $\omega_{gc} = 1/\sqrt{3}$:
$K = \frac{1}{\sqrt{3}} \sqrt{(\frac{1}{\sqrt{3}})^2 + 1} = \frac{1}{\sqrt{3}} \sqrt{\frac{1}{3} + 1} = \frac{1}{\sqrt{3}} \sqrt{\frac{4}{3}} = \frac{1}{\sqrt{3}} \frac{2}{\sqrt{3}} = \frac{2}{3}$.

The result $K=2/3$ is correct for achieving a phase margin of $60^\circ$. My intuition that the gain should increase was wrong for this specific system where phase lag increases with frequency. To get a larger phase margin, we need to shift the gain crossover frequency to an earlier point on the phase curve where the phase lag is less. This requires reducing the gain.

---

## 10.6 Important Points to Remember

*   **Root Locus:** Directly links closed-loop pole locations to transient response characteristics. Useful for design by pole placement.
*   **Frequency Response:** Directly assesses stability margins (GM, PM) and steady-state performance (bandwidth). Useful for systems with sinusoidal inputs or when stability is paramount.
*   **Software Tools:** MATLAB and SCILAB are indispensable for generating these plots efficiently and interactively. Master commands like `rlocus`, `margin`, `sgrid`, `bandwidth`, `rlocfind`.
*   **Trade-offs:** There's often a trade-off between transient response speed and stability margins. A faster response (achieved by placing poles further left) might lead to lower stability margins.
*   **Dominant Second-Order Approximation:** Many analysis techniques rely on this approximation, which is valid when the system has dominant complex conjugate poles and other poles are significantly faster.
*   **Interpretation is Key:** Knowing how to plot is important, but understanding what the plots represent in terms of system behavior is critical for performance analysis and design.

---

This comprehensive set of notes covers Module 10, integrating theoretical concepts with practical software application for performance analysis using Root-Locus and Frequency Response methods. It addresses the learning outcomes and aligns with the specified course outcomes.