---
title: "Frequency Domain Analysis: Frequency Domain Specifications"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463681"
status: "completed"
scrapedAt: "2026-05-20T18:00:48.354Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS

## Module 4: Time Domain Analysis of Control Systems

### Topic: Frequency Domain Analysis: Frequency Domain Specifications

---

**Introduction:**

While time-domain analysis provides insights into the system's response to step or impulse inputs over time, frequency-domain analysis examines how a system responds to sinusoidal inputs of varying frequencies. This approach is crucial for understanding system stability, bandwidth, and the effect of noise and disturbances. This topic delves into the key specifications used to characterize the performance of control systems in the frequency domain.

---

**Relating Time Domain and Frequency Domain Specifications:**

Before diving into frequency domain specifications, it's important to understand the relationship with time-domain specifications.

*   **Time Domain Specifications (from Module 4):**
    *   Rise Time ($T_r$)
    *   Peak Time ($T_p$)
    *   Settling Time ($T_s$)
    *   Peak Overshoot ($M_p\%$)
    *   Steady-State Error ($e_{ss}$)

*   **Frequency Domain Specifications:** These specifications help us infer time-domain performance without explicitly solving the differential equations. They are particularly useful when dealing with systems that are difficult to model precisely in the time domain or when the input is expected to be sinusoidal or contain sinusoidal components.

---

### Frequency Domain Specifications

Frequency domain specifications characterize a system's behavior in response to sinusoidal inputs of varying frequencies. They are typically derived from the system's **frequency response**, which is obtained by substituting $s = j\omega$ into the system's transfer function, $G(s)$, to get $G(j\omega)$. The frequency response $G(j\omega)$ is a complex function of frequency $\omega$ and can be represented in polar form as $|G(j\omega)| \angle G(j\omega)$, where $|G(j\omega)|$ is the **magnitude** and $\angle G(j\omega)$ is the **phase**.

The key frequency domain specifications are:

1.  **Cut-off Frequency ($\omega_c$)**
2.  **Bandwidth ($\omega_b$)**
3.  **Peak Magnitude ($M_p$)**
4.  **Peak Frequency ($\omega_p$)**
5.  **Resonant Frequency ($\omega_r$)**
6.  **Gain Margin (GM)**
7.  **Phase Margin (PM)**

---

#### 1. Cut-off Frequency ($\omega_c$)

*   **Definition:** The cut-off frequency is the frequency at which the **magnitude** of the closed-loop transfer function $|T(j\omega)|$ drops to **70.7% (-3 dB)** of its DC or low-frequency value.
*   **Significance:** It indicates the upper limit of the frequency range for which the system can effectively pass signals. Frequencies above $\omega_c$ are significantly attenuated.
*   **Relationship to Time Domain:** A higher cut-off frequency generally implies a faster system response (shorter rise time).
*   **Calculation:**
    *   For a system with $|T(0)|$ as its DC gain, $\omega_c$ is the frequency $\omega$ where $|T(j\omega)| = \frac{|T(0)|}{\sqrt{2}}$.
    *   In decibels, if the DC gain is $M_{dB}(0)$, then $\omega_c$ is the frequency where $M_{dB}(\omega_c) = M_{dB}(0) - 3$ dB.

---

#### 2. Bandwidth ($\omega_b$)

*   **Definition:** The bandwidth is the range of frequencies over which the system's magnitude response is considered to be within a certain tolerance of its maximum value. For control systems, it is commonly defined as the frequency range from DC up to the cut-off frequency ($\omega_c$) where the magnitude is within -3 dB of the DC gain.
*   **Significance:** It represents the range of frequencies that the system can respond to without significant attenuation. A wider bandwidth indicates the system can track faster changes in the input signal.
*   **Relationship to Time Domain:**
    *   **Bandwidth and Rise Time:** There's an approximate inverse relationship: $T_r \approx \frac{1.8}{\omega_b}$ (for a second-order system). This means a wider bandwidth implies a faster rise time.
    *   **Bandwidth and Band-limited Noise:** A wider bandwidth also means the system is more susceptible to high-frequency noise.
*   **Example:** If the DC gain of a system is 1 (0 dB), and the magnitude drops to 0.707 (-3 dB) at $\omega = 10$ rad/s, then the cut-off frequency $\omega_c = 10$ rad/s, and the bandwidth $\omega_b \approx 10$ rad/s.

---

#### 3. Peak Magnitude ($M_p$)

*   **Definition:** $M_p$ is the maximum value of the **magnitude** of the closed-loop transfer function $|T(j\omega)|$ in the frequency range. It is usually expressed in decibels (dB).
*   **Significance:** It indicates how much the system amplifies signals at a particular frequency. A large $M_p$ signifies a resonant peak, suggesting that the system might be unstable or exhibit excessive oscillations.
*   **Relationship to Time Domain:** $M_p$ is directly related to the peak overshoot ($M_p\%$) in the time-domain step response. A higher $M_p$ in the frequency domain corresponds to a larger percentage overshoot in the time domain.
    *   For a second-order system with damping ratio $\zeta$, $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$. This peak occurs at $\omega_p = \omega_n \sqrt{1-2\zeta^2}$.
    *   The relationship between $M_p$ (in dB) and $M_p\%$ is: $M_p\% = (M_p - 1) \times 100\%$ (when $M_p$ is the absolute magnitude) or $M_p\% = (10^{\frac{M_{p,dB}}{20}} - 1) \times 100\%$ (when $M_{p,dB}$ is in dB).

---

#### 4. Peak Frequency ($\omega_p$)

*   **Definition:** $\omega_p$ is the frequency at which the **peak magnitude** $M_p$ occurs.
*   **Significance:** It indicates the frequency of maximum amplification or resonance in the system's response.
*   **Relationship to Time Domain:** It is related to the peak time ($T_p$) in the time-domain step response. For a second-order system, $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$. The peak frequency is $\omega_p = \omega_n \sqrt{1-2\zeta^2}$.

---

#### 5. Resonant Frequency ($\omega_r$)

*   **Definition:** In some contexts, the term "resonant frequency" is used interchangeably with "peak frequency" ($\omega_p$). However, it can also refer to the natural frequency of the system if it's a second-order system with low damping. For a general system, it's the frequency at which resonance occurs.
*   **Significance:** Highlights the frequency that excites the system the most.

---

#### 6. Gain Margin (GM)

*   **Definition:** The gain margin is the reciprocal of the **magnitude** of the open-loop transfer function $G(j\omega)$ at the **phase crossover frequency** ($\omega_{pc}$). The phase crossover frequency is the frequency at which the phase of the open-loop transfer function is $-180^\circ$ ($-\pi$ radians).
*   **Significance:** It indicates how much the gain of the system can be increased before instability occurs. A larger GM generally implies greater stability. It is a measure of relative stability.
*   **Calculation:**
    *   Find $\omega_{pc}$ such that $\angle G(j\omega_{pc}) = -180^\circ$.
    *   $GM = \frac{1}{|G(j\omega_{pc})|}$.
    *   In decibels: $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})|$. (Since $|G(j\omega_{pc})|$ is usually less than 1 when the phase is $-180^\circ$ for stable systems, the GM will be greater than 1, and $GM_{dB}$ will be positive. If $|G(j\omega_{pc})| > 1$, the system is already unstable).
*   **Relationship to Time Domain:** A larger GM typically corresponds to a system with less overshoot and better damping in its time-domain response.
*   **Important:** Gain Margin is determined from the **open-loop** transfer function's frequency response.

---

#### 7. Phase Margin (PM)

*   **Definition:** The phase margin is the additional phase lag that can be added to the **open-loop** transfer function at the **gain crossover frequency** ($\omega_{gc}$) before the system becomes unstable. The gain crossover frequency is the frequency at which the magnitude of the open-loop transfer function is unity ($|G(j\omega_{gc})| = 1$ or 0 dB).
*   **Significance:** It indicates how far the system is from instability in terms of phase. A larger PM generally implies better relative stability and less overshoot in the time-domain response. It is a measure of relative stability.
*   **Calculation:**
    *   Find $\omega_{gc}$ such that $|G(j\omega_{gc})| = 1$ (or 0 dB).
    *   $PM = 180^\circ + \angle G(j\omega_{gc})$.
*   **Relationship to Time Domain:**
    *   A PM of $30^\circ$ to $60^\circ$ usually provides a good balance between speed and damping for the transient response.
    *   Approximately, the damping ratio $\zeta \approx \frac{PM}{100}$ (for second-order systems).
    *   Rise time ($T_r$) and settling time ($T_s$) also correlate with phase margin. Higher PM generally leads to faster responses and shorter settling times.
*   **Important:** Phase Margin is determined from the **open-loop** transfer function's frequency response.

---

### Graphical Representation: Bode Plots

Bode plots are invaluable tools for visualizing the frequency response of a system and determining these frequency domain specifications. A Bode plot consists of two graphs:

1.  **Magnitude Plot:** $|G(j\omega)|$ (in dB) versus $\log(\omega)$.
2.  **Phase Plot:** $\angle G(j\omega)$ (in degrees or radians) versus $\log(\omega)$.

**How to identify specifications from Bode Plots:**

*   **Cut-off Frequency ($\omega_c$):** On the magnitude plot, find the frequency where the curve drops to 3 dB below the DC gain value.
*   **Bandwidth ($\omega_b$):** Same as the cut-off frequency in many control applications.
*   **Peak Magnitude ($M_p$) and Peak Frequency ($\omega_p$):** On the magnitude plot, identify the highest peak. The value of the peak is $M_p$ (in dB), and the corresponding frequency is $\omega_p$.
*   **Gain Crossover Frequency ($\omega_{gc}$):** On the magnitude plot, find the frequency where the magnitude is 0 dB.
*   **Phase Crossover Frequency ($\omega_{pc}$):** On the phase plot, find the frequency where the phase is $-180^\circ$.
*   **Gain Margin (GM):** On the phase plot, find the phase at $\omega_{gc}$. $GM_{dB} = 0 - M_{dB}(\omega_{gc}) = -M_{dB}(\omega_{gc})$. (Where $M_{dB}(\omega_{gc})$ is the magnitude in dB at the gain crossover frequency). Alternatively, look at the magnitude plot at $\omega_{pc}$: $GM = \frac{1}{|G(j\omega_{pc})|}$.
*   **Phase Margin (PM):** On the magnitude plot, find the gain crossover frequency $\omega_{gc}$. Then, on the phase plot, find the phase at $\omega_{gc}$. $PM = 180^\circ + \angle G(j\omega_{gc})$.

---

### Nyquist Plots

Nyquist plots are another graphical method that uses the frequency response. It plots the imaginary part of $G(j\omega)$ against the real part of $G(j\omega)$ for $\omega$ from 0 to $\infty$. The gain and phase margins can also be determined from the Nyquist plot.

*   **Gain Margin:** It is the distance from the $-1$ point to the Nyquist curve along the negative real axis. If the Nyquist curve encircles $-1$, the system is unstable.
*   **Phase Margin:** It is the angle between the negative real axis and the line connecting the origin to the point where the Nyquist curve intersects the unit circle.

---

### Correlation with Time Domain Specifications

| Frequency Domain Spec. | Time Domain Spec. |
| :--------------------- | :---------------- |
| Bandwidth ($\omega_b$) | Rise Time ($T_r$) |
| Peak Magnitude ($M_p$) | Peak Overshoot ($M_p\%$) |
| Peak Frequency ($\omega_p$) | Peak Time ($T_p$) |
| Phase Margin (PM)      | Damping Ratio ($\zeta$), Overshoot ($M_p\%$), Settling Time ($T_s$) |
| Gain Margin (GM)       | Relative Stability, Damping |

**General Trend:**

*   Higher Bandwidth $\implies$ Faster response (Lower $T_r$).
*   Higher $M_p$ $\implies$ Higher $M_p\%$ (More overshoot).
*   Higher PM $\implies$ Better damping, Lower $M_p\%$, potentially faster settling.
*   Higher GM $\implies$ Greater stability margin.

---

### Example Problem and Solution

Consider a unity feedback system with the open-loop transfer function:
$G(s) = \frac{10}{s(s+2)}$

Let's find the frequency domain specifications.

**1. Find $G(j\omega)$:**
$G(j\omega) = \frac{10}{j\omega(j\omega+2)}$
$|G(j\omega)| = \frac{10}{|\omega|\sqrt{\omega^2+4}}$
$\angle G(j\omega) = -90^\circ - \arctan(\frac{\omega}{2})$

**2. Find Bandwidth ($\omega_b$) (Cut-off Frequency):**
First, find the DC gain ($M_{dB}(0)$). As $\omega \to 0$, $|G(j\omega)| \to \infty$. This indicates an integrator. For such systems, bandwidth is often related to the first-order pole approximation or a specific design choice. Let's consider a modified system or assume a different definition for bandwidth if the DC gain is infinite.

*Alternative Scenario:* If we consider the closed-loop transfer function $T(s) = \frac{G(s)}{1+G(s)} = \frac{10}{s^2+2s+10}$.
The DC gain of $T(s)$ is $T(0) = \frac{10}{10} = 1$.
We need to find $\omega_c$ where $|T(j\omega_c)| = \frac{1}{\sqrt{2}}$.
$|T(j\omega)| = \frac{10}{|-\omega^2+j2\omega+10|} = \frac{10}{\sqrt{(10-\omega^2)^2 + (2\omega)^2}}$
Set $|T(j\omega)| = \frac{1}{\sqrt{2}}$:
$\frac{10}{\sqrt{(10-\omega^2)^2 + 4\omega^2}} = \frac{1}{\sqrt{2}}$
$10\sqrt{2} = \sqrt{(10-\omega^2)^2 + 4\omega^2}$
$200 = (10-\omega^2)^2 + 4\omega^2$
$200 = 100 - 20\omega^2 + \omega^4 + 4\omega^2$
$\omega^4 - 16\omega^2 - 100 = 0$
Let $x = \omega^2$: $x^2 - 16x - 100 = 0$
Using the quadratic formula: $x = \frac{-(-16) \pm \sqrt{(-16)^2 - 4(1)(-100)}}{2(1)} = \frac{16 \pm \sqrt{256 + 400}}{2} = \frac{16 \pm \sqrt{656}}{2}$
$x = \frac{16 \pm 25.61}{2}$
Since $\omega^2$ must be positive, we take the positive root:
$\omega^2 = \frac{16 + 25.61}{2} = \frac{41.61}{2} = 20.805$
$\omega_c = \sqrt{20.805} \approx 4.56$ rad/s.
So, the bandwidth $\omega_b \approx 4.56$ rad/s.

**3. Find $M_p$ and $\omega_p$ (for the closed-loop system):**
For $T(s) = \frac{10}{s^2+2s+10}$, this is a standard second-order form $\frac{\omega_n^2}{s^2+2\zeta\omega_n s+\omega_n^2}$.
Here, $\omega_n^2 = 10 \implies \omega_n = \sqrt{10} \approx 3.16$ rad/s.
$2\zeta\omega_n = 2 \implies \zeta = \frac{1}{\omega_n} = \frac{1}{\sqrt{10}} \approx 0.316$.
$M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.316)\sqrt{1-(0.316)^2}} = \frac{1}{0.632\sqrt{1-0.1}} = \frac{1}{0.632\sqrt{0.9}} \approx \frac{1}{0.600} \approx 1.667$.
$M_p$ in dB $= 20 \log_{10}(1.667) \approx 20 \times 0.2218 \approx 4.44$ dB.

$\omega_p = \omega_n \sqrt{1-2\zeta^2} = \sqrt{10} \sqrt{1-2(0.316)^2} = \sqrt{10} \sqrt{1-2(0.1)} = \sqrt{10} \sqrt{0.8} \approx 3.16 \times 0.894 \approx 2.83$ rad/s.

**4. Find Gain Crossover Frequency ($\omega_{gc}$) and Phase Margin (PM) from Open-Loop $G(j\omega)$:**
We need $|G(j\omega_{gc})| = 1$ (0 dB).
$\frac{10}{|\omega|\sqrt{\omega^2+4}} = 1$
$100 = \omega^2(\omega^2+4)$
$100 = \omega^4 + 4\omega^2$
$\omega^4 + 4\omega^2 - 100 = 0$
Let $x = \omega^2$: $x^2 + 4x - 100 = 0$
$x = \frac{-4 \pm \sqrt{4^2 - 4(1)(-100)}}{2(1)} = \frac{-4 \pm \sqrt{16 + 400}}{2} = \frac{-4 \pm \sqrt{416}}{2}$
$x = \frac{-4 \pm 20.4}{2}$
Since $\omega^2 > 0$, $x = \frac{-4 + 20.4}{2} = \frac{16.4}{2} = 8.2$.
$\omega_{gc}^2 = 8.2 \implies \omega_{gc} = \sqrt{8.2} \approx 2.86$ rad/s.

Now, find the phase at $\omega_{gc} = 2.86$ rad/s:
$\angle G(j\omega_{gc}) = -90^\circ - \arctan(\frac{2.86}{2}) = -90^\circ - \arctan(1.43)$
$\arctan(1.43) \approx 55^\circ$.
$\angle G(j\omega_{gc}) = -90^\circ - 55^\circ = -145^\circ$.

$PM = 180^\circ + \angle G(j\omega_{gc}) = 180^\circ - 145^\circ = 35^\circ$.

**5. Find Phase Crossover Frequency ($\omega_{pc}$) and Gain Margin (GM) from Open-Loop $G(j\omega)$:**
Find $\omega_{pc}$ such that $\angle G(j\omega_{pc}) = -180^\circ$.
$-90^\circ - \arctan(\frac{\omega_{pc}}{2}) = -180^\circ$
$\arctan(\frac{\omega_{pc}}{2}) = 90^\circ$
This would imply $\frac{\omega_{pc}}{2} \to \infty$, so $\omega_{pc} \to \infty$.

Let's re-examine the phase: $\angle G(j\omega) = -90^\circ - \arctan(\frac{\omega}{2})$.
As $\omega \to \infty$, $\arctan(\frac{\omega}{2}) \to 90^\circ$, so the phase $\to -90^\circ - 90^\circ = -180^\circ$.
So, the phase crossover frequency is effectively $\omega_{pc} = \infty$.

Now, find the magnitude at $\omega = \infty$:
$|G(j\omega)| = \frac{10}{|\omega|\sqrt{\omega^2+4}}$
As $\omega \to \infty$, $|G(j\omega)| \approx \frac{10}{\omega \cdot \omega} = \frac{10}{\omega^2}$.
As $\omega \to \infty$, $|G(j\omega)| \to 0$.

This means the magnitude at the phase crossover frequency is 0.
$GM = \frac{1}{|G(j\omega_{pc})|} = \frac{1}{0} = \infty$.
$GM_{dB} = \infty$ dB.

**Summary of Specifications for $G(s) = \frac{10}{s(s+2)}$:**

*   Bandwidth ($\omega_b$): $\approx 4.56$ rad/s (from closed-loop response)
*   Peak Magnitude ($M_p$): $\approx 1.667$ (4.44 dB) (from closed-loop response)
*   Peak Frequency ($\omega_p$): $\approx 2.83$ rad/s (from closed-loop response)
*   Gain Crossover Frequency ($\omega_{gc}$): $\approx 2.86$ rad/s (from open-loop response)
*   Phase Margin (PM): $35^\circ$ (from open-loop response)
*   Phase Crossover Frequency ($\omega_{pc}$): $\infty$ (from open-loop response)
*   Gain Margin (GM): $\infty$ dB (from open-loop response)

**Interpretation:**
The system has a finite bandwidth, indicating it can respond to signals up to about 4.56 rad/s. The peak magnitude suggests some resonance, leading to overshoot in the time response. The phase margin of $35^\circ$ is reasonably good, suggesting acceptable damping and relative stability. The infinite gain margin is due to the fact that the open-loop gain magnitude never reaches 1 again after crossing 0 dB (which it doesn't, as it starts from infinity and goes to 0). The phase reaches -180 degrees asymptotically at infinite frequency where the gain is zero.

---

### Practice Questions

**Question 1:**
For a second-order system with transfer function $T(s) = \frac{25}{s^2 + 4s + 25}$, determine:
a) The natural frequency ($\omega_n$) and damping ratio ($\zeta$).
b) The peak magnitude ($M_p$) and peak frequency ($\omega_p$).
c) The cut-off frequency ($\omega_c$).
d) The bandwidth ($\omega_b$).
e) How would you expect the rise time and settling time to compare for this system?

**Question 2:**
Consider an open-loop transfer function $G(s) = \frac{K}{s(s+1)(s+5)}$. If the gain crossover frequency is $\omega_{gc} = 2$ rad/s, determine:
a) The value of K.
b) The phase margin (PM) for this value of K.
c) The gain margin (GM).

**Question 3:**
Explain the significance of bandwidth in a control system and its relationship with the system's speed of response and susceptibility to noise.

**Question 4:**
How are the frequency domain specifications of Gain Margin and Phase Margin related to the stability and transient response of a closed-loop control system?

---

### Answers to Practice Questions

**Answer 1:**
$T(s) = \frac{25}{s^2 + 4s + 25}$
This is in the form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.

a) $\omega_n^2 = 25 \implies \omega_n = 5$ rad/s.
   $2\zeta\omega_n = 4 \implies 2\zeta(5) = 4 \implies 10\zeta = 4 \implies \zeta = 0.4$.

b) $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.4)\sqrt{1-(0.4)^2}} = \frac{1}{0.8\sqrt{1-0.16}} = \frac{1}{0.8\sqrt{0.84}} \approx \frac{1}{0.8 \times 0.9165} \approx \frac{1}{0.7332} \approx 1.364$.
   $M_p$ (in dB) $= 20 \log_{10}(1.364) \approx 2.7$ dB.
   $\omega_p = \omega_n \sqrt{1-2\zeta^2} = 5 \sqrt{1-2(0.4)^2} = 5 \sqrt{1-2(0.16)} = 5 \sqrt{1-0.32} = 5 \sqrt{0.68} \approx 5 \times 0.8246 \approx 4.12$ rad/s.

c) For a second-order system with DC gain 1, $\omega_c$ is where $|T(j\omega_c)| = \frac{1}{\sqrt{2}}$.
   $|T(j\omega)| = \frac{25}{|-\omega^2 + j4\omega + 25|} = \frac{25}{\sqrt{(25-\omega^2)^2 + (4\omega)^2}}$.
   Set $|T(j\omega)| = \frac{1}{\sqrt{2}}$:
   $\frac{25}{\sqrt{(25-\omega^2)^2 + 16\omega^2}} = \frac{1}{\sqrt{2}}$
   $25\sqrt{2} = \sqrt{(25-\omega^2)^2 + 16\omega^2}$
   $1250 = (25-\omega^2)^2 + 16\omega^2$
   $1250 = 625 - 50\omega^2 + \omega^4 + 16\omega^2$
   $\omega^4 - 34\omega^2 - 625 = 0$.
   Let $x = \omega^2$: $x^2 - 34x - 625 = 0$.
   $x = \frac{34 \pm \sqrt{(-34)^2 - 4(1)(-625)}}{2} = \frac{34 \pm \sqrt{1156 + 2500}}{2} = \frac{34 \pm \sqrt{3656}}{2}$
   $x = \frac{34 \pm 60.46}{2}$. Since $\omega^2 > 0$, $x = \frac{34 + 60.46}{2} = \frac{94.46}{2} = 47.23$.
   $\omega_c^2 = 47.23 \implies \omega_c = \sqrt{47.23} \approx 6.87$ rad/s.

d) Bandwidth ($\omega_b$) is approximately equal to $\omega_c$ for a system with DC gain 1.
   $\omega_b \approx 6.87$ rad/s.
   *(Note: For second-order systems, $\omega_b \approx \omega_n \sqrt{1-2\zeta^2} + \sqrt{(1-2\zeta^2)^2 + \omega_n^2} $ is a more accurate approximation, but here the direct calculation from $|T(j\omega)|$ is preferred).*
   *An approximate relation $\omega_b \approx \omega_n \sqrt{1-2\zeta^2 + \sqrt{(1-2\zeta^2)^2 + 4\zeta^2}}$ exists, but is complex.*
   *Using $\omega_b \approx \omega_n$ for low damping might be too simplistic. The calculated $\omega_c$ is the most direct answer.*

e) With $\zeta = 0.4$, the system is underdamped.
   *   **Rise Time ($T_r$):** Since $\zeta$ is not very small, the rise time will be moderate. A higher $\zeta$ leads to a slower rise time.
   *   **Settling Time ($T_s$):** The settling time is approximately $T_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.4 \times 5} = \frac{4}{2} = 2$ seconds. This is a reasonably fast settling time for a second-order system.
   *   Higher bandwidth generally correlates with faster response, so the bandwidth of 6.87 rad/s also suggests a relatively fast system.

**Answer 2:**
$G(s) = \frac{K}{s(s+1)(s+5)}$
$G(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+5)}$
$\angle G(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\frac{\omega}{5})$

a) Gain crossover frequency $\omega_{gc} = 2$ rad/s. At this frequency, $|G(j\omega_{gc})| = 1$ (0 dB).
   $|G(j\omega)| = \frac{K}{|\omega|\sqrt{\omega^2+1}\sqrt{\omega^2+25}}$
   $|G(j2)| = \frac{K}{2\sqrt{2^2+1}\sqrt{2^2+25}} = \frac{K}{2\sqrt{5}\sqrt{29}} = \frac{K}{2\sqrt{145}}$
   Set $|G(j2)| = 1$:
   $\frac{K}{2\sqrt{145}} = 1 \implies K = 2\sqrt{145} \approx 2 \times 12.04 \approx 24.08$.

b) Phase at $\omega_{gc} = 2$ rad/s:
   $\angle G(j2) = -90^\circ - \arctan(2) - \arctan(\frac{2}{5})$
   $\arctan(2) \approx 63.4^\circ$
   $\arctan(0.4) \approx 21.8^\circ$
   $\angle G(j2) = -90^\circ - 63.4^\circ - 21.8^\circ = -175.2^\circ$.

   Phase Margin ($PM$) $= 180^\circ + \angle G(j\omega_{gc}) = 180^\circ - 175.2^\circ = 4.8^\circ$.

c) Phase crossover frequency $\omega_{pc}$: $\angle G(j\omega_{pc}) = -180^\circ$.
   $-90^\circ - \arctan(\omega_{pc}) - \arctan(\frac{\omega_{pc}}{5}) = -180^\circ$
   $\arctan(\omega_{pc}) + \arctan(\frac{\omega_{pc}}{5}) = 90^\circ$
   This equation cannot be directly solved for a finite $\omega_{pc}$. As $\omega \to \infty$, $\arctan(\omega) \to 90^\circ$ and $\arctan(\frac{\omega}{5}) \to 90^\circ$. The sum approaches $180^\circ$. For the sum to be $90^\circ$, one of the arctan terms must be close to $90^\circ$, meaning $\omega_{pc}$ is very large.
   Let's assume $\omega_{pc}$ is a very large frequency.
   $|G(j\omega)| = \frac{K}{|\omega|\sqrt{\omega^2+1}\sqrt{\omega^2+25}} \approx \frac{K}{\omega \cdot \omega \cdot \omega} = \frac{K}{\omega^3}$ for large $\omega$.
   If we consider the phase equation: $\frac{\omega_{pc} + \frac{\omega_{pc}}{5}}{1 - \omega_{pc} \cdot \frac{\omega_{pc}}{5}} = \tan(90^\circ)$, which is undefined. This occurs when the denominator is zero: $1 - \frac{\omega_{pc}^2}{5} = 0 \implies \omega_{pc}^2 = 5 \implies \omega_{pc} = \sqrt{5}$.
   Let's check phase at $\omega = \sqrt{5} \approx 2.236$:
   $\angle G(j\sqrt{5}) = -90^\circ - \arctan(\sqrt{5}) - \arctan(\frac{\sqrt{5}}{5})$
   $\arctan(\sqrt{5}) \approx \arctan(2.236) \approx 65.9^\circ$
   $\arctan(\frac{1}{\sqrt{5}}) \approx \arctan(0.447) \approx 24.1^\circ$
   Sum = $65.9^\circ + 24.1^\circ = 90^\circ$. So, $\omega_{pc} = \sqrt{5}$ rad/s is incorrect.

   The sum of arctans can be $90^\circ$ if one of the angles is close to $90^\circ$.
   Consider the phase equation: $\tan(\arctan(\omega_{pc}) + \arctan(\frac{\omega_{pc}}{5})) = \tan(90^\circ)$.
   $\frac{\omega_{pc} + \frac{\omega_{pc}}{5}}{1 - \omega_{pc} \frac{\omega_{pc}}{5}} = \text{undefined}$. This happens when $1 - \frac{\omega_{pc}^2}{5} = 0$, so $\omega_{pc}^2 = 5$, $\omega_{pc} = \sqrt{5}$.
   At $\omega_{pc} = \sqrt{5}$: $\frac{\omega_{pc}}{5} = \frac{\sqrt{5}}{5} = \frac{1}{\sqrt{5}}$.
   $\arctan(\sqrt{5}) + \arctan(\frac{1}{\sqrt{5}})$. Let $\alpha = \arctan(\sqrt{5})$. Then $\tan(\alpha) = \sqrt{5}$. Let $\beta = \arctan(\frac{1}{\sqrt{5}})$. Then $\tan(\beta) = \frac{1}{\sqrt{5}}$.
   $\tan(\alpha+\beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha \tan\beta} = \frac{\sqrt{5} + \frac{1}{\sqrt{5}}}{1 - \sqrt{5} \cdot \frac{1}{\sqrt{5}}} = \frac{\frac{5+1}{\sqrt{5}}}{1-1} = \frac{6/\sqrt{5}}{0}$. This is undefined, so the sum of angles is $90^\circ$.
   Therefore, $\omega_{pc} = \sqrt{5}$ rad/s is indeed the frequency where the sum of the two arctan phase shifts is $90^\circ$.
   The total phase is $-90^\circ - 90^\circ = -180^\circ$.
   So, $\omega_{pc} = \sqrt{5} \approx 2.236$ rad/s.

   Now find magnitude at $\omega_{pc} = \sqrt{5}$:
   $|G(j\sqrt{5})| = \frac{K}{\sqrt{5}\sqrt{(\sqrt{5})^2+1}\sqrt{(\sqrt{5})^2+25}} = \frac{K}{\sqrt{5}\sqrt{6}\sqrt{30}} = \frac{K}{\sqrt{5 \times 6 \times 30}} = \frac{K}{\sqrt{900}} = \frac{K}{30}$.
   With $K = 24.08$: $|G(j\sqrt{5})| = \frac{24.08}{30} \approx 0.803$.

   Gain Margin ($GM$) $= \frac{1}{|G(j\omega_{pc})|} = \frac{1}{0.803} \approx 1.245$.
   $GM_{dB} = 20 \log_{10}(1.245) \approx 20 \times 0.095 \approx 1.9$ dB.

**Answer 3:**
*   **Bandwidth ($\omega_b$):** The bandwidth represents the range of frequencies that the system can effectively pass. It is often defined as the frequency up to which the magnitude response stays within -3 dB of its DC value.
*   **Relationship with Speed of Response:** A wider bandwidth implies that the system can respond to higher frequency inputs without significant attenuation. This translates to a faster response in the time domain (e.g., shorter rise time). A system with a large bandwidth can track rapidly changing setpoints or disturbances.
*   **Relationship with Susceptibility to Noise:** Control systems are often subject to noise, which can be present in various frequency components. A wider bandwidth means the system will amplify and respond to a broader range of frequencies, including potentially undesirable high-frequency noise. This can lead to erratic behavior, increased wear on actuators, or poor control performance. Therefore, the bandwidth needs to be chosen carefully, balancing the need for a fast response with the desire to reject noise.

**Answer 4:**
*   **Gain Margin (GM):**
    *   **Significance:** The gain margin is a measure of how much the open-loop system's gain can be increased before the closed-loop system becomes unstable. It is determined at the phase crossover frequency ($\omega_{pc}$) where the phase is $-180^\circ$.
    *   **Relation to Stability:** A positive gain margin (GM > 1 or $GM_{dB} > 0$) indicates a stable closed-loop system. A larger GM means the system is further from instability.
    *   **Relation to Transient Response:** A larger GM generally corresponds to a more damped transient response with less overshoot and better relative stability in the time domain.
*   **Phase Margin (PM):**
    *   **Significance:** The phase margin is a measure of how much additional phase lag can be introduced at the gain crossover frequency ($\omega_{gc}$) before the closed-loop system becomes unstable.
    *   **Relation to Stability:** A positive phase margin ($PM > 0^\circ$) indicates a stable closed-loop system. A larger PM indicates greater stability.
    *   **Relation to Transient Response:** The phase margin is a strong indicator of the damping ratio ($\zeta$) of the closed-loop system. A phase margin of $30^\circ$ to $60^\circ$ typically results in a well-damped response with acceptable overshoot and settling time. A small PM leads to oscillatory behavior and significant overshoot, while a very large PM can lead to a slower response.

---

### Important Points to Remember

*   Frequency domain specifications are derived from the **frequency response** ($G(j\omega)$) of the system.
*   **Bandwidth** is a key indicator of system speed and noise susceptibility.
*   **Peak magnitude ($M_p$) and peak frequency ($\omega_p$)** relate directly to overshoot and oscillation frequency in the time domain.
*   **Gain Margin (GM) and Phase Margin (PM)** are critical measures of **relative stability** and are determined from the **open-loop** transfer function's frequency response.
*   Bode plots are essential graphical tools for visualizing frequency response and determining these specifications.
*   The inverse relationships between bandwidth and rise time, and between phase margin and damping ratio, are important for correlating time and frequency domain performances.
*   For stable systems, the phase response of an integrator ($1/s$) contributes $-90^\circ$, and a simple pole ($1/(s+a)$) contributes a phase lag that increases from $0^\circ$ at DC to $-90^\circ$ at infinity.

---

### Course Outcome Alignment

*   **CO1 (K2):** Understanding the concepts of frequency response and specifications contributes to basic knowledge of how systems behave beyond simple step inputs.
*   **CO2 (K4):** While this topic focuses on system performance, the analysis relies on the transfer function derived from sensor and transducer characteristics. Understanding these specifications helps in selecting appropriate sensors that can operate within the required bandwidth.
*   **CO3 (K4):** Signal conditioning circuits (like filters) are often designed based on desired frequency responses. Understanding bandwidth and attenuation characteristics from this topic is crucial for designing effective signal conditioning.
*   **CO4 (K3):** The performance of feedback systems is directly assessed using these frequency domain specifications, providing a way to describe the role of control blocks in achieving desired stability and response.
*   **CO5 (K4):** Frequency domain specifications like bandwidth and peak magnitude are direct correlates of time-domain specifications like rise time and peak overshoot. This topic provides the tools to predict and analyze these time-domain behaviors.
*   **CO6 (K4):** Gain margin and phase margin are fundamental metrics for analyzing the stability of linear time-invariant (LTI) systems, directly addressing this course outcome.

---

This comprehensive set of notes covers the key frequency domain specifications, their definitions, significance, relationships to time-domain behavior, and graphical interpretation using Bode plots, along with examples and practice questions. It also highlights the alignment with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
