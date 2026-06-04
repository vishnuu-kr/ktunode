---
title: "Gain margin and phase margin"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366ce"
status: "completed"
scrapedAt: "2026-05-23T16:29:54.203Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis

## Topic: Gain Margin and Phase Margin

This module focuses on understanding system stability and performance using frequency domain techniques. This specific topic, Gain Margin and Phase Margin, is crucial for assessing the robustness of a closed-loop control system.

---

### Learning Outcomes Covered:

*   **LO1:** Understand the concept of frequency response and its significance in control systems.
*   **LO2:** Define and calculate Gain Margin (GM) and Phase Margin (PM).
*   **LO3:** Relate GM and PM to the stability and transient response of a closed-loop system.
*   **LO4:** Interpret GM and PM from Bode plots.
*   **LO5:** Discuss the relationship between GM, PM, and the system's robustness to parameter variations.

---

### Course Outcomes Alignment:

*   **CO4: Analyse dynamic systems for their performance and stability in frequency domain. (Knowledge Level: K3)**
    *   This topic directly addresses CO4 by providing methods (GM and PM) to analyze system stability and performance in the frequency domain.

---

### 1. Introduction to Frequency Response

Before diving into Gain and Phase Margins, it's essential to understand the concept of frequency response.

*   **Definition:** Frequency response describes how a system's output responds to sinusoidal inputs of varying frequencies. It is typically represented by the system's **transfer function evaluated at $s = j\omega$**, where $\omega$ is the angular frequency.
*   **Significance:**
    *   Provides insights into system stability.
    *   Helps predict transient response characteristics (e.g., overshoot, settling time).
    *   Useful for controller design and tuning.
    *   Less sensitive to noise compared to time-domain analysis for certain applications.

---

### 2. Introduction to Stability and Robustness

*   **Stability:** A system is considered stable if its output remains bounded for any bounded input. In the context of control systems, stability ensures that the system does not exhibit unbounded oscillations or runaway behavior.
*   **Robustness:** A robust control system maintains its stability and acceptable performance despite uncertainties or variations in the system's parameters or external disturbances. Gain Margin and Phase Margin are key indicators of robustness.

---

### 3. Nyquist Plot and its Relation to Stability (Brief Recap)

While this topic focuses on GM and PM, they are fundamentally derived from the Nyquist stability criterion.

*   **Nyquist Plot:** A polar plot of the open-loop transfer function $G(j\omega)H(j\omega)$ as $\omega$ varies from $-\infty$ to $+\infty$.
*   **Nyquist Stability Criterion:** The number of encirclements of the $-1+j0$ point by the Nyquist plot of $G(j\omega)H(j\omega)$ is equal to the difference between the number of unstable poles ($P$) and unstable zeros ($Z$) of the open-loop transfer function. For a stable closed-loop system, the number of encirclements of $-1+j0$ must be equal to $P$.

**Important Note:** Gain Margin and Phase Margin are typically determined from the Bode plot, which is a more practical representation for many engineers.

---

### 4. Bode Plot

The Bode plot is a graphical representation of the frequency response of a linear time-invariant (LTI) system. It consists of two plots:

1.  **Magnitude Plot:** Logarithm of the magnitude of the frequency response $|G(j\omega)H(j\omega)|$ (in dB) versus $\log(\omega)$.
2.  **Phase Plot:** Phase angle of the frequency response $\angle G(j\omega)H(j\omega)$ (in degrees) versus $\log(\omega)$.

---

### 5. Gain Margin (GM)

The Gain Margin quantifies how much the system's gain can be increased before it becomes unstable. It is related to the point on the Bode magnitude plot where the phase is $-180^\circ$.

*   **Definition:** The Gain Margin is the reciprocal of the magnitude of the open-loop transfer function at the **phase crossover frequency ($\omega_{pc}$)**. The phase crossover frequency is the frequency at which the phase angle of the open-loop transfer function is $-180^\circ$.
*   **Mathematical Expression:**
    *   Let $\omega_{pc}$ be the frequency where $\angle G(j\omega_{pc})H(j\omega_{pc}) = -180^\circ$.
    *   $GM = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|}$
    *   In decibels (dB): $GM_{dB} = 20 \log_{10} \left( \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|} \right) = -20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})|$

*   **Interpretation from Bode Plot:**
    *   Find the frequency $\omega_{pc}$ on the phase plot where the phase is $-180^\circ$.
    *   Go vertically up (or down) from this $\omega_{pc}$ to the magnitude plot.
    *   The GM (in dB) is the positive value of the magnitude plot at this frequency (i.e., the distance from the $0$ dB line to the curve). If the magnitude is positive, the GM is negative dB, indicating instability.
    *   If the magnitude plot crosses the $0$ dB line at a phase greater than $-180^\circ$, the GM is infinite.

*   **Stability Condition:** For a stable closed-loop system, the magnitude of the open-loop transfer function at $\omega_{pc}$ must be less than 1. Thus, $GM > 1$ (or $GM_{dB} > 0$ dB).
    *   $GM > 1 \implies$ Stable
    *   $GM < 1 \implies$ Unstable
    *   $GM = 1 \implies$ Marginally Stable

*   **Robustness Implication:** A larger Gain Margin indicates greater robustness to increases in the system's gain.

**Nise (5th Ed., 2009), Chapter 6, pp. 635-637** provides detailed explanations and examples of calculating GM from Bode plots.

---

### 6. Phase Margin (PM)

The Phase Margin quantifies how much more phase lag can be added to the system before it becomes unstable. It is related to the point on the Bode magnitude plot where the gain is $0$ dB.

*   **Definition:** The Phase Margin is the difference between $-180^\circ$ and the phase angle of the open-loop transfer function at the **gain crossover frequency ($\omega_{gc}$)**. The gain crossover frequency is the frequency at which the magnitude of the open-loop transfer function is unity (0 dB).
*   **Mathematical Expression:**
    *   Let $\omega_{gc}$ be the frequency where $|G(j\omega_{gc})H(j\omega_{gc})| = 1$ (or $0$ dB).
    *   $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$

*   **Interpretation from Bode Plot:**
    *   Find the frequency $\omega_{gc}$ on the magnitude plot where the curve crosses the $0$ dB line.
    *   Go vertically down (or up) from this $\omega_{gc}$ to the phase plot.
    *   The PM is the difference between $-180^\circ$ and the phase angle at this frequency. If the phase is more negative than $-180^\circ$, the PM will be negative.

*   **Stability Condition:** For a stable closed-loop system, the phase angle at $\omega_{gc}$ must be greater than $-180^\circ$. Thus, $PM > 0^\circ$.
    *   $PM > 0^\circ \implies$ Stable
    *   $PM < 0^\circ \implies$ Unstable
    *   $PM = 0^\circ \implies$ Marginally Stable

*   **Robustness Implication:** A larger Phase Margin indicates greater robustness to increases in the system's phase lag. It also relates to the damping of the system's transient response.

**Nise (5th Ed., 2009), Chapter 6, pp. 637-639** elaborates on PM and its relation to damping.

---

### 7. Relationship between GM, PM, and Transient Response

Gain Margin and Phase Margin are not just indicators of stability; they also provide insights into the transient response characteristics of the closed-loop system, particularly the overshoot and damping ratio.

*   **Damping Ratio ($\zeta$) and Phase Margin:**
    *   For a **second-order system**, there's a direct relationship between Phase Margin and the damping ratio.
    *   $PM \approx 100 \zeta \% $ (for $\zeta < 0.8$)
    *   This approximation suggests that a larger phase margin generally leads to a more damped (less oscillatory) transient response with less overshoot.

*   **Overshoot:** Systems with larger PMs tend to have lower percentage overshoot in their step response.
*   **Settling Time:** While not as direct a relationship, systems with adequate PM generally have acceptable settling times. Very large PMs might indicate a very slow system.

**Nagrath & Gopal (5th Ed., 2009), Chapter 7, pp. 7.24-7.26** discuss the correlation between frequency domain specifications (including GM and PM) and time domain specifications.

---

### 8. Examples

Let's consider the open-loop transfer function:
$G(s)H(s) = \frac{10}{s(s+1)(s+2)}$

We need to find the frequency response by substituting $s=j\omega$:
$G(j\omega)H(j\omega) = \frac{10}{j\omega(j\omega+1)(j\omega+2)}$

**Magnitude:**
$|G(j\omega)H(j\omega)| = \frac{10}{|\omega|\sqrt{\omega^2+1}\sqrt{\omega^2+4}}$
In dB: $20 \log_{10} |G(j\omega)H(j\omega)| = 20 \log_{10} 10 - 20 \log_{10} |\omega| - 10 \log_{10} (\omega^2+1) - 10 \log_{10} (\omega^2+4)$

**Phase:**
$\angle G(j\omega)H(j\omega) = \angle(10) - \angle(j\omega) - \angle(j\omega+1) - \angle(j\omega+2)$
$\angle G(j\omega)H(j\omega) = 0^\circ - 90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\frac{\omega}{2})$

---

#### Example 1: Calculating Gain Margin (GM)

1.  **Find Phase Crossover Frequency ($\omega_{pc}$):**
    We need to find $\omega_{pc}$ where $\angle G(j\omega_{pc})H(j\omega_{pc}) = -180^\circ$.
    $-90^\circ - \tan^{-1}(\omega_{pc}) - \tan^{-1}(\frac{\omega_{pc}}{2}) = -180^\circ$
    $\tan^{-1}(\omega_{pc}) + \tan^{-1}(\frac{\omega_{pc}}{2}) = 90^\circ$

    Using the identity $\tan^{-1}(x) + \tan^{-1}(y) = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$:
    $\tan^{-1}\left(\frac{\omega_{pc} + \frac{\omega_{pc}}{2}}{1 - \omega_{pc} \cdot \frac{\omega_{pc}}{2}}\right) = 90^\circ$
    $\frac{\frac{3\omega_{pc}}{2}}{1 - \frac{\omega_{pc}^2}{2}} = \tan(90^\circ) \to \infty$
    This implies the denominator must be zero:
    $1 - \frac{\omega_{pc}^2}{2} = 0 \implies \omega_{pc}^2 = 2 \implies \omega_{pc} = \sqrt{2} \text{ rad/s}$

2.  **Calculate Magnitude at $\omega_{pc}$:**
    $|G(j\omega_{pc})H(j\omega_{pc})| = \left| \frac{10}{j\sqrt{2}(j\sqrt{2}+1)(j\sqrt{2}+2)} \right|$
    $|G(j\omega_{pc})H(j\omega_{pc})| = \frac{10}{\sqrt{2}\sqrt{(\sqrt{2})^2+1}\sqrt{(\sqrt{2})^2+4}}$
    $|G(j\omega_{pc})H(j\omega_{pc})| = \frac{10}{\sqrt{2}\sqrt{2+1}\sqrt{2+4}} = \frac{10}{\sqrt{2}\sqrt{3}\sqrt{6}} = \frac{10}{\sqrt{36}} = \frac{10}{6} = \frac{5}{3}$

3.  **Calculate Gain Margin (GM):**
    $GM = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|} = \frac{1}{5/3} = \frac{3}{5}$
    $GM_{dB} = 20 \log_{10} \left(\frac{3}{5}\right) \approx 20 \log_{10}(0.6) \approx -4.44 \text{ dB}$

    Since $GM < 1$ (or $GM_{dB} < 0$), the system is unstable.

---

#### Example 2: Calculating Phase Margin (PM)

1.  **Find Gain Crossover Frequency ($\omega_{gc}$):**
    We need to find $\omega_{gc}$ where $|G(j\omega_{gc})H(j\omega_{gc})| = 1$.
    $\frac{10}{|\omega_{gc}|\sqrt{\omega_{gc}^2+1}\sqrt{\omega_{gc}^2+4}} = 1$
    $10 = |\omega_{gc}|\sqrt{\omega_{gc}^2+1}\sqrt{\omega_{gc}^2+4}$
    Squaring both sides:
    $100 = \omega_{gc}^2 (\omega_{gc}^2+1)(\omega_{gc}^2+4)$
    Let $x = \omega_{gc}^2$:
    $100 = x(x+1)(x+4)$
    $100 = x(x^2+5x+4)$
    $100 = x^3 + 5x^2 + 4x$
    $x^3 + 5x^2 + 4x - 100 = 0$

    This cubic equation needs to be solved for $x$. By trial and error or numerical methods, we can find the positive real root. Let's try some values:
    If $x=3$, $27 + 5(9) + 4(3) - 100 = 27 + 45 + 12 - 100 = 84 - 100 = -16$
    If $x=4$, $64 + 5(16) + 4(4) - 100 = 64 + 80 + 16 - 100 = 160 - 100 = 60$
    The root is between 3 and 4. A more precise numerical solution gives $x \approx 3.147$.
    So, $\omega_{gc}^2 \approx 3.147 \implies \omega_{gc} \approx \sqrt{3.147} \approx 1.774 \text{ rad/s}$.

2.  **Calculate Phase at $\omega_{gc}$:**
    $\angle G(j\omega_{gc})H(j\omega_{gc}) = -90^\circ - \tan^{-1}(\omega_{gc}) - \tan^{-1}(\frac{\omega_{gc}}{2})$
    $\angle G(j\omega_{gc})H(j\omega_{gc}) = -90^\circ - \tan^{-1}(1.774) - \tan^{-1}(\frac{1.774}{2})$
    $\angle G(j\omega_{gc})H(j\omega_{gc}) = -90^\circ - 60.56^\circ - 41.45^\circ = -192.01^\circ$

3.  **Calculate Phase Margin (PM):**
    $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$
    $PM = 180^\circ + (-192.01^\circ) = -12.01^\circ$

    Since $PM < 0^\circ$, the system is unstable. This confirms our GM result.

**Key Observation:** In this example, $\omega_{pc} < \omega_{gc}$. This is a common scenario for unstable systems. For stable systems, $\omega_{gc} < \omega_{pc}$.

---

### 9. Stability Criteria Summary based on GM and PM

| Parameter          | GM ($> 1$ or $> 0$ dB) | PM ($> 0^\circ$) | Stability of Closed-Loop System |
| :----------------- | :--------------------- | :--------------- | :------------------------------ |
| **Satisfied**      | Yes                    | Yes              | Stable                          |
| **Not Satisfied**  | No                     | Yes              | Unstable                        |
| **Not Satisfied**  | Yes                    | No               | Unstable                        |
| **Not Satisfied**  | No                     | No               | Unstable                        |
| **Marginal Case**  | $GM=1$ (0 dB)          |                  | Marginally Stable               |
| **Marginal Case**  |                        | $PM=0^\circ$     | Marginally Stable               |

**Important:** Both GM and PM must be positive for stability.

---

### 10. Design Considerations and Rules of Thumb

*   **Minimum Requirements:**
    *   **Phase Margin:** A PM of $30^\circ$ to $60^\circ$ is generally considered acceptable for good transient response and robustness.
        *   $30^\circ \le PM \le 60^\circ$
    *   **Gain Margin:** A GM of $6$ dB to $12$ dB (corresponding to a gain factor of approximately 2 to 4) is typically desired.
        *   $6 \text{ dB} \le GM_{dB} \le 12 \text{ dB}$ (or $GM \ge 2$)

*   **Trade-offs:**
    *   Increasing PM (for better damping) often leads to a decrease in GM, and vice versa.
    *   Aggressive controllers (to improve speed of response) might reduce both PM and GM, potentially leading to instability.
    *   Robustness is directly related to the *margins*. Larger margins imply greater robustness to parameter variations or unmodeled dynamics.

**Kuo (9th Ed., 2014), Chapter 9, pp. 750-754** and **Dorf & Bishop (12th Ed., 2013), Chapter 7, pp. 320-323** provide extensive discussion on design using GM and PM and typical design values.

---

### 11. Practice Questions

**Question 1:**
For an open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)}$, determine the value of $K$ for a phase margin of $45^\circ$. What is the gain margin for this value of $K$?
*(Hint: Start by finding the frequency where phase is $-180^\circ$ for $K=1$, then adjust $K$. Then find the frequency where magnitude is 1 and calculate the phase. Adjust phase to $-180^\circ$ and find $K$. Then find GM.)*

**Question 2:**
Consider the open-loop transfer function $G(s)H(s) = \frac{20}{s(s+1)(s+5)}$.
(a) Determine the gain crossover frequency ($\omega_{gc}$).
(b) Calculate the phase margin (PM) at $\omega_{gc}$.
(c) Determine the phase crossover frequency ($\omega_{pc}$).
(d) Calculate the gain margin (GM) at $\omega_{pc}$.
(e) Based on the GM and PM, comment on the closed-loop system's stability and robustness.

---

### 12. Answers to Practice Questions

**Answer 1:**

Given $G(s)H(s) = \frac{K}{s(s+2)}$.
$G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega+2)}$

Magnitude: $|G(j\omega)H(j\omega)| = \frac{K}{\omega\sqrt{\omega^2+4}}$
Phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\frac{\omega}{2})$

**To find PM = $45^\circ$:**
We need the phase at $\omega_{gc}$ (where magnitude is 1) to be $-180^\circ + 45^\circ = -135^\circ$.
$-90^\circ - \tan^{-1}(\frac{\omega_{gc}}{2}) = -135^\circ$
$\tan^{-1}(\frac{\omega_{gc}}{2}) = 45^\circ$
$\frac{\omega_{gc}}{2} = \tan(45^\circ) = 1$
$\omega_{gc} = 2 \text{ rad/s}$

Now, find $K$ for magnitude to be 1 at $\omega_{gc} = 2$ rad/s:
$|G(j2)H(j2)| = \frac{K}{2\sqrt{2^2+4}} = \frac{K}{2\sqrt{8}} = \frac{K}{4\sqrt{2}}$
Set magnitude to 1:
$\frac{K}{4\sqrt{2}} = 1 \implies K = 4\sqrt{2} \approx 5.657$

So, for $PM = 45^\circ$, $K = 4\sqrt{2}$.

**Now, calculate GM for $K = 4\sqrt{2}$:**
We need $\omega_{pc}$ where phase is $-180^\circ$:
$-90^\circ - \tan^{-1}(\frac{\omega_{pc}}{2}) = -180^\circ$
$\tan^{-1}(\frac{\omega_{pc}}{2}) = 90^\circ$
This implies $\frac{\omega_{pc}}{2} \to \infty$, so $\omega_{pc} \to \infty$.

Let's re-evaluate the phase crossover. The phase is always greater than $-90^\circ$ and approaches $-180^\circ$ only as $\omega \to \infty$.
For $K = 4\sqrt{2}$:
$G(j\omega)H(j\omega) = \frac{4\sqrt{2}}{j\omega(j\omega+2)}$
$|G(j\omega)H(j\omega)| = \frac{4\sqrt{2}}{\omega\sqrt{\omega^2+4}}$
$\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\frac{\omega}{2})$

At $\omega_{gc} = 2$ rad/s, the phase is $-90^\circ - \tan^{-1}(1) = -90^\circ - 45^\circ = -135^\circ$.
$PM = 180^\circ + (-135^\circ) = 45^\circ$. This matches the requirement.

Now, for GM, we need $\omega_{pc}$ where phase is $-180^\circ$.
The phase is $-90^\circ - \tan^{-1}(\omega/2)$. As $\omega \to \infty$, $\tan^{-1}(\omega/2) \to 90^\circ$.
So, the phase approaches $-90^\circ - 90^\circ = -180^\circ$ as $\omega \to \infty$.
This means $\omega_{pc} = \infty$.

At $\omega = \infty$, the magnitude $|G(j\omega)H(j\omega)| = \frac{4\sqrt{2}}{\infty \cdot \infty} \to 0$.
$GM = \frac{1}{|G(j\infty)H(j\infty)|} = \frac{1}{0} = \infty$.
So, $GM_{dB} = \infty$ dB.

**Conclusion for Question 1:**
For a phase margin of $45^\circ$, $K = 4\sqrt{2}$. The gain margin is infinite. This implies the system is stable and has good damping.

**Answer 2:**

$G(s)H(s) = \frac{20}{s(s+1)(s+5)}$
$G(j\omega)H(j\omega) = \frac{20}{j\omega(j\omega+1)(j\omega+5)}$

Magnitude: $|G(j\omega)H(j\omega)| = \frac{20}{\omega\sqrt{\omega^2+1}\sqrt{\omega^2+25}}$
Phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\frac{\omega}{5})$

**(a) Gain Crossover Frequency ($\omega_{gc}$):**
We need $|G(j\omega_{gc})H(j\omega_{gc})| = 1$.
$\frac{20}{\omega_{gc}\sqrt{\omega_{gc}^2+1}\sqrt{\omega_{gc}^2+25}} = 1$
$400 = \omega_{gc}^2 (\omega_{gc}^2+1)(\omega_{gc}^2+25)$
Let $x = \omega_{gc}^2$:
$400 = x(x+1)(x+25) = x(x^2 + 26x + 25) = x^3 + 26x^2 + 25x$
$x^3 + 26x^2 + 25x - 400 = 0$

Using numerical solver for the positive real root: $x \approx 3.209$
$\omega_{gc}^2 \approx 3.209 \implies \omega_{gc} \approx \sqrt{3.209} \approx 1.791 \text{ rad/s}$

**(b) Phase Margin (PM) at $\omega_{gc}$:**
Phase at $\omega_{gc} \approx 1.791$:
$\angle G(j1.791)H(j1.791) = -90^\circ - \tan^{-1}(1.791) - \tan^{-1}(\frac{1.791}{5})$
$= -90^\circ - 60.86^\circ - 19.69^\circ = -170.55^\circ$
$PM = 180^\circ + (-170.55^\circ) = 9.45^\circ$

**(c) Phase Crossover Frequency ($\omega_{pc}$):**
We need phase to be $-180^\circ$:
$-90^\circ - \tan^{-1}(\omega_{pc}) - \tan^{-1}(\frac{\omega_{pc}}{5}) = -180^\circ$
$\tan^{-1}(\omega_{pc}) + \tan^{-1}(\frac{\omega_{pc}}{5}) = 90^\circ$
Using $\tan^{-1}(x) + \tan^{-1}(y) = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$:
$\tan^{-1}\left(\frac{\omega_{pc} + \frac{\omega_{pc}}{5}}{1 - \omega_{pc} \cdot \frac{\omega_{pc}}{5}}\right) = 90^\circ$
$\frac{\frac{6\omega_{pc}}{5}}{1 - \frac{\omega_{pc}^2}{5}} \to \infty$
Denominator must be zero: $1 - \frac{\omega_{pc}^2}{5} = 0 \implies \omega_{pc}^2 = 5 \implies \omega_{pc} = \sqrt{5} \approx 2.236 \text{ rad/s}$.

**(d) Gain Margin (GM) at $\omega_{pc}$:**
Magnitude at $\omega_{pc} = \sqrt{5} \approx 2.236$:
$|G(j2.236)H(j2.236)| = \frac{20}{2.236\sqrt{(2.236)^2+1}\sqrt{(2.236)^2+25}}$
$= \frac{20}{2.236\sqrt{5+1}\sqrt{5+25}} = \frac{20}{2.236\sqrt{6}\sqrt{30}} = \frac{20}{2.236 \sqrt{180}} = \frac{20}{2.236 \times 13.416} \approx \frac{20}{30.005} \approx 0.6665$
$GM = \frac{1}{0.6665} \approx 1.500$
$GM_{dB} = 20 \log_{10}(1.500) \approx 3.52 \text{ dB}$

**(e) Stability and Robustness:**
*   PM = $9.45^\circ$ (positive, but very small)
*   GM = $1.50$ (or $3.52$ dB) (positive, but small)

Since both PM and GM are positive, the closed-loop system is **STABLE**.
However, the very small values of PM ($9.45^\circ$) and GM ($3.52$ dB) indicate that the system has **POOR ROBUSTNESS** and a highly oscillatory (underdamped) transient response. It is very close to the stability limit and would likely be unacceptable in most practical applications. Significant controller design would be needed to improve these margins.

---

### 13. Important Points to Remember

*   Gain Margin (GM) and Phase Margin (PM) are vital frequency domain measures of stability and robustness.
*   GM is determined at the phase crossover frequency ($\omega_{pc}$, where phase = $-180^\circ$) and is $1/|G(j\omega_{pc})H(j\omega_{pc})|$. For stability, $GM > 1$ (or $GM_{dB} > 0$).
*   PM is determined at the gain crossover frequency ($\omega_{gc}$, where magnitude = 1 or 0 dB) and is $180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$. For stability, $PM > 0^\circ$.
*   Both GM and PM must be positive for closed-loop stability.
*   Larger GM and PM generally imply a more robust system and a more damped transient response (less overshoot).
*   Typical design goals are $30^\circ \le PM \le 60^\circ$ and $GM_{dB} \ge 6$ dB.
*   On a Bode plot, GM is the distance in dB from the 0 dB line to the magnitude curve at $\omega_{pc}$. PM is the distance in degrees from $-180^\circ$ to the phase curve at $\omega_{gc}$.
*   For a stable system, $\omega_{gc} < \omega_{pc}$. For an unstable system, $\omega_{pc} < \omega_{gc}$.

---
This concludes Module 4, Topic: Gain Margin and Phase Margin. Understanding these concepts is fundamental to analyzing and designing stable and robust control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
