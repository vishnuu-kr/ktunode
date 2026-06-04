---
title: "Frequency domain specifications - correlation between time domain and frequency domain responses (Resonant peak and resonant frequency). (2 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366cc"
status: "completed"
scrapedAt: "2026-05-23T16:29:50.325Z"
---
# Module 4: Frequency Domain Analysis - Correlation between Time Domain and Frequency Domain Responses

## Topic: Frequency Domain Specifications - Correlation between Time Domain and Frequency Domain Responses (Resonant Peak and Resonant Frequency)

**(2 Hours)**

---

### **1. Introduction to Frequency Domain Analysis and its Significance**

*   **Purpose:** Frequency domain analysis provides insights into system behavior when subjected to sinusoidal inputs of varying frequencies. It complements time domain analysis, offering a different perspective on performance and stability.
*   **Key Tool:** The **Bode plot** (magnitude and phase response vs. frequency) and the **Nyquist plot** (imaginary part vs. real part of the open-loop transfer function) are primary tools.
*   **Benefits:**
    *   Easy to design compensators (Nise, Chapter 9).
    *   Robustness analysis (stability margins).
    *   Understanding system behavior at different frequencies.
    *   Direct correlation with time-domain specifications.
*   **Relevance to Course Outcomes:**
    *   **CO4:** Analyzes dynamic systems for performance and stability in the frequency domain. (Knowledge Level: K3)

---

### **2. Frequency Domain Specifications**

While time domain specifications focus on transient response characteristics (e.g., rise time, settling time, overshoot), frequency domain specifications describe how a system responds to sinusoidal inputs at different frequencies.

**Key Frequency Domain Specifications:**

*   **Gain Margin (GM):** The factor by which the system's gain can be increased before becoming unstable.
*   **Phase Margin (PM):** The amount of additional phase lag required to cause instability.
*   **Resonant Peak ($M_p$):** The maximum value of the magnitude of the closed-loop transfer function in the frequency domain. It indicates how much the system amplifies sinusoidal inputs at certain frequencies.
*   **Resonant Frequency ($\omega_r$):** The frequency at which the resonant peak ($M_p$) occurs.

---

### **3. Correlation between Time Domain and Frequency Domain Responses**

This section focuses on the crucial link between transient response characteristics (time domain) and the characteristics observed in frequency response plots, particularly concerning the resonant peak and resonant frequency.

**3.1. The Concept of Resonance**

*   **Definition:** Resonance occurs in a system when a sinusoidal input at a particular frequency excites a large amplitude output, often significantly larger than the input amplitude.
*   **In Frequency Domain:** Indicated by a peak in the magnitude response plot of the closed-loop transfer function.
*   **In Time Domain:** Manifests as a large overshoot in the step response.

**3.2. Second-Order Systems as a Bridge**

Second-order systems are fundamental in control theory because many higher-order systems can be approximated as second-order systems. Their response is characterized by the **damping ratio ($\zeta$)** and **undamped natural frequency ($\omega_n$)**.

*   **Standard Second-Order Closed-Loop Transfer Function:**
    $T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

**3.3. Time Domain Specifications for a Second-Order System:**

*   **Percent Overshoot (%OS):** The maximum overshoot relative to the final steady-state value.
    %OS $= 100 e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}}$
*   **Peak Time ($t_p$):** The time at which the first peak of the response occurs.
    $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$
*   **Settling Time ($t_s$):** The time required for the response to settle within a specified tolerance band (usually 2% or 5%) of the final value.
    $t_s \approx \frac{4}{\zeta\omega_n}$ (for 2% tolerance)
    $t_s \approx \frac{3}{\zeta\omega_n}$ (for 5% tolerance)

**3.4. Frequency Domain Specifications for a Second-Order System:**

*   **Resonant Peak ($M_p$):** The maximum value of $|T(j\omega)|$.
    $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$
    This formula is valid for $0 \le \zeta < \frac{1}{\sqrt{2}}$. If $\zeta \ge \frac{1}{\sqrt{2}}$, there is no resonant peak, and $M_p = 1$.
*   **Resonant Frequency ($\omega_r$):** The frequency at which $M_p$ occurs.
    $\omega_r = \omega_n \sqrt{1-2\zeta^2}$
    This formula is valid for $0 \le \zeta < \frac{1}{\sqrt{2}}$. If $\zeta \ge \frac{1}{\sqrt{2}}$, $\omega_r = 0$.

**Nise (5th Edition), Chapter 7, discusses the transient response of second-order systems and the relationships between $\zeta$, $\omega_n$, and the time-domain specifications.**

**Nagrath & Gopal (5th Edition), Chapter 5, also covers the transient response analysis of second-order systems and their frequency domain characteristics.**

---

### **4. Key Correlations and Their Interpretations**

The relationships between damping ratio ($\zeta$) and these specifications are crucial.

**4.1. Correlation between Percent Overshoot (%OS) and Resonant Peak ($M_p$)**

*   **Observation:** A higher %OS in the time domain corresponds to a higher $M_p$ in the frequency domain. Both indicate a more oscillatory response.
*   **Mathematical Link:** Both $M_p$ and %OS are functions of $\zeta$. As $\zeta$ decreases (more underdamped), both %OS and $M_p$ increase.
    *   Low $\zeta$ $\implies$ High %OS $\implies$ High $M_p$
    *   High $\zeta$ $\implies$ Low %OS $\implies$ Low $M_p$ (or no peak if $\zeta \ge 1/\sqrt{2}$)

**Example:**

| $\zeta$ | %OS     | $M_p$ (for $0 \le \zeta < 1/\sqrt{2}$) |
| :------ | :------ | :------------------------------------- |
| 0.1     | 75.6%   | 3.03                                   |
| 0.2     | 52.6%   | 1.63                                   |
| 0.3     | 36.7%   | 1.22                                   |
| 0.4     | 25.7%   | 1.11                                   |
| 0.5     | 16.3%   | 1.05                                   |
| 0.707   | 4.3%    | 1.00 (no peak)                         |
| 1.0     | 0%      | 1.00 (no peak)                         |

**4.2. Correlation between Peak Time ($t_p$) and Resonant Frequency ($\omega_r$)**

*   **Observation:** The time at which the peak response occurs in the time domain ($t_p$) is inversely related to the frequency at which the maximum magnitude response occurs in the frequency domain ($\omega_r$).
*   **Mathematical Link:**
    *   $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$
    *   $\omega_r = \omega_n \sqrt{1-2\zeta^2}$
*   **Interpretation:**
    *   As $\zeta$ decreases, the system becomes more oscillatory.
    *   $\omega_r$ increases (frequency of peak amplification shifts to higher frequencies).
    *   $t_p$ increases (time to reach the peak response is longer).
    *   **Consider the product $\omega_r t_p$:**
        $\omega_r t_p = \frac{\pi \sqrt{1-2\zeta^2}}{\sqrt{1-\zeta^2}}$
        This product is not a constant but varies with $\zeta$.
*   **Key Insight:** The resonant frequency ($\omega_r$) represents the frequency at which the system's closed-loop gain is maximum. The peak time ($t_p$) is the time associated with the *transient* peak response to a *step input*.

**Example (Continuing from above):**

| $\zeta$ | $t_p$ (for $\omega_n = 10$ rad/s) | $\omega_r$ (for $\omega_n = 10$ rad/s) |
| :------ | :------------------------------- | :----------------------------------- |
| 0.1     | $0.32$ s                         | $9.95$ rad/s                         |
| 0.2     | $0.33$ s                         | $9.59$ rad/s                         |
| 0.3     | $0.35$ s                         | $9.11$ rad/s                         |
| 0.4     | $0.38$ s                         | $8.54$ rad/s                         |
| 0.5     | $0.43$ s                         | $7.81$ rad/s                         |

*Notice that as $\zeta$ decreases, $t_p$ generally increases, and $\omega_r$ decreases for these specific $\zeta$ values. This might seem counter-intuitive, but it's because the *terms* change differently. The key is how they relate to $\zeta$.*

**More precise relationship:** As $\zeta$ decreases from $1/\sqrt{2}$ towards 0:
*   $M_p$ increases.
*   $\omega_r$ decreases.
*   $t_p$ increases.

This means a system with a very low damping ratio will have:
*   A large overshoot (%OS).
*   A high resonant peak ($M_p$).
*   A longer time to reach that peak ($t_p$).
*   The peak amplification occurs at a relatively lower frequency ($\omega_r$).

**4.3. Correlation with Bandwidth**

*   **Bandwidth ($\omega_b$):** The frequency range over which the system's gain is "significant" (typically defined as the frequency where the magnitude drops by 3 dB from its steady-state or DC value). For a second-order system, $\omega_b \approx \omega_n$.
*   **Correlation:**
    *   A **larger bandwidth** generally implies a **faster system** (quicker rise time, shorter peak time).
    *   A **larger bandwidth** also often implies a **more oscillatory response** (higher %OS and $M_p$), especially if the resonant peak is prominent.
    *   For a given $\omega_n$, as $\zeta$ decreases, $\omega_r$ decreases and $M_p$ increases, and the bandwidth generally increases slightly until a certain $\zeta$ value.

**Dorf & Bishop (12th Edition), Chapter 6, discusses bandwidth and its relation to system speed and stability.**

---

### **5. Examples and Case Studies**

**Example 1: Finding Time Domain Specs from Frequency Domain Specs**

Consider a closed-loop system with the transfer function $T(s) = \frac{25}{s^2 + 6s + 25}$.

1.  **Identify Second-Order Parameters:**
    Compare with $T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
    $\omega_n^2 = 25 \implies \omega_n = 5$ rad/s
    $2\zeta\omega_n = 6 \implies 2\zeta(5) = 6 \implies 10\zeta = 6 \implies \zeta = 0.6$

2.  **Calculate Time Domain Specifications:**
    *   **%OS:**
        %OS $= 100 e^{-\frac{0.6 \pi}{\sqrt{1-0.6^2}}} = 100 e^{-\frac{0.6 \pi}{\sqrt{1-0.36}}} = 100 e^{-\frac{0.6 \pi}{\sqrt{0.64}}} = 100 e^{-\frac{0.6 \pi}{0.8}} = 100 e^{-0.75\pi} \approx 100 e^{-2.356} \approx 9.45\%$
    *   **$t_p$:**
        $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = \frac{\pi}{5 \sqrt{1-0.6^2}} = \frac{\pi}{5 \sqrt{0.64}} = \frac{\pi}{5 \times 0.8} = \frac{\pi}{4} \approx 0.785$ s

3.  **Calculate Frequency Domain Specifications:**
    *   Since $\zeta = 0.6 < 1/\sqrt{2} \approx 0.707$, there will be a resonant peak.
    *   **$M_p$:**
        $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.6)\sqrt{1-0.6^2}} = \frac{1}{1.2 \sqrt{0.64}} = \frac{1}{1.2 \times 0.8} = \frac{1}{0.96} \approx 1.042$
    *   **$\omega_r$:**
        $\omega_r = \omega_n \sqrt{1-2\zeta^2} = 5 \sqrt{1-2(0.6)^2} = 5 \sqrt{1-2(0.36)} = 5 \sqrt{1-0.72} = 5 \sqrt{0.28} \approx 5 \times 0.529 \approx 2.646$ rad/s

**Interpretation:**
A $\zeta$ of 0.6 results in a 9.45% overshoot and a peak time of 0.785 seconds. In the frequency domain, this system has a resonant peak of 1.042 (a slight amplification) occurring at 2.646 rad/s.

**Example 2: Analyzing a System with Low Damping**

Consider a system with $T(s) = \frac{100}{s^2 + 10s + 100}$.

1.  **Identify Parameters:**
    $\omega_n^2 = 100 \implies \omega_n = 10$ rad/s
    $2\zeta\omega_n = 10 \implies 2\zeta(10) = 10 \implies 20\zeta = 10 \implies \zeta = 0.5$

2.  **Time Domain Specs:**
    *   **%OS:**
        %OS $= 100 e^{-\frac{0.5 \pi}{\sqrt{1-0.5^2}}} = 100 e^{-\frac{0.5 \pi}{\sqrt{0.75}}} = 100 e^{-\frac{0.5 \pi}{0.866}} = 100 e^{-1.814} \approx 16.3\%$
    *   **$t_p$:**
        $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = \frac{\pi}{10 \sqrt{1-0.5^2}} = \frac{\pi}{10 \sqrt{0.75}} = \frac{\pi}{10 \times 0.866} \approx \frac{3.141}{8.66} \approx 0.363$ s

3.  **Frequency Domain Specs:**
    *   $\zeta = 0.5 < 0.707$, so there's a resonant peak.
    *   **$M_p$:**
        $M_p = \frac{1}{2(0.5)\sqrt{1-0.5^2}} = \frac{1}{1 \sqrt{0.75}} = \frac{1}{0.866} \approx 1.155$
    *   **$\omega_r$:**
        $\omega_r = \omega_n \sqrt{1-2\zeta^2} = 10 \sqrt{1-2(0.5)^2} = 10 \sqrt{1-2(0.25)} = 10 \sqrt{1-0.5} = 10 \sqrt{0.5} \approx 10 \times 0.707 \approx 7.07$ rad/s

**Interpretation:**
This system has a 16.3% overshoot and a peak time of 0.363 seconds. The frequency response shows a resonant peak of 1.155 at 7.07 rad/s. This indicates a more pronounced oscillatory behavior compared to Example 1, with the peak amplification occurring at a lower frequency.

---

### **6. Practical Implications and Design Considerations**

*   **Controlling Overshoot:** To reduce overshoot (%OS) in the time domain, increase the damping ratio ($\zeta$). This translates to reducing the resonant peak ($M_p$) in the frequency domain.
*   **System Speed:** The resonant frequency ($\omega_r$) and resonant peak ($M_p$) give clues about the system's natural speed and potential for oscillation.
*   **Stability Margins vs. Oscillation:** While gain and phase margins are primary indicators of stability, a prominent resonant peak ($M_p$) suggests a system that is susceptible to oscillations, even if technically stable. A value of $M_p > 1.2$ (or a resonant peak in dB greater than approximately 1.5 dB) often indicates potential transient problems.
*   **Trade-offs:** There's often a trade-off between speed of response and the amount of overshoot. Systems designed to be very fast (high bandwidth) tend to be more oscillatory and have lower damping ratios, leading to higher $M_p$ and %OS.
*   **Design Goal:** For many applications, it's desirable to have a well-damped system with minimal overshoot and a well-behaved frequency response, without significant resonant peaks.

**Ogata (5th Edition), Chapter 6 & 7, provides extensive examples of designing controllers to meet both time and frequency domain specifications.**

---

### **7. Practice Questions**

**Question 1:**
A second-order system has a closed-loop transfer function $T(s) = \frac{16}{s^2 + 4s + 16}$. Calculate:
a) The damping ratio ($\zeta$) and undamped natural frequency ($\omega_n$).
b) The percent overshoot (%OS) in its step response.
c) The peak time ($t_p$) of its step response.
d) The resonant peak ($M_p$) in its frequency response.
e) The resonant frequency ($\omega_r$) at which $M_p$ occurs.

**Question 2:**
For a second-order system, if the resonant peak is $M_p = 1.15$ and the resonant frequency is $\omega_r = 10$ rad/s, determine:
a) The damping ratio ($\zeta$).
b) The undamped natural frequency ($\omega_n$).
c) The percent overshoot (%OS) in its step response.
d) The peak time ($t_p$) of its step response.

**Question 3:**
Explain the relationship between the resonant peak ($M_p$) in the frequency domain and the percent overshoot (%OS) in the time domain for a second-order system. What does a high $M_p$ imply about the system's transient behavior?

---

### **8. Answers to Practice Questions**

**Answer 1:**
Given $T(s) = \frac{16}{s^2 + 4s + 16}$.
Comparing with $T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:

a) $\omega_n^2 = 16 \implies \omega_n = 4$ rad/s
   $2\zeta\omega_n = 4 \implies 2\zeta(4) = 4 \implies 8\zeta = 4 \implies \zeta = 0.5$

b) %OS $= 100 e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} = 100 e^{-\frac{0.5 \pi}{\sqrt{1-0.5^2}}} = 100 e^{-\frac{0.5 \pi}{\sqrt{0.75}}} = 100 e^{-\frac{0.5 \pi}{0.866}} = 100 e^{-1.814} \approx 16.3\%$

c) $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = \frac{\pi}{4 \sqrt{1-0.5^2}} = \frac{\pi}{4 \sqrt{0.75}} = \frac{\pi}{4 \times 0.866} \approx \frac{3.141}{3.464} \approx 0.907$ s

d) Since $\zeta = 0.5 < 1/\sqrt{2}$, there is a resonant peak.
   $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.5)\sqrt{1-0.5^2}} = \frac{1}{1 \sqrt{0.75}} = \frac{1}{0.866} \approx 1.155$

e) $\omega_r = \omega_n \sqrt{1-2\zeta^2} = 4 \sqrt{1-2(0.5)^2} = 4 \sqrt{1-2(0.25)} = 4 \sqrt{1-0.5} = 4 \sqrt{0.5} \approx 4 \times 0.707 \approx 2.828$ rad/s

**Answer 2:**
Given $M_p = 1.15$ and $\omega_r = 10$ rad/s.

a) $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}} \implies 1.15 = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$
   $2.3\zeta\sqrt{1-\zeta^2} = 1$
   Squaring both sides: $(2.3\zeta)^2 (1-\zeta^2) = 1$
   $5.29\zeta^2 (1-\zeta^2) = 1$
   $5.29\zeta^2 - 5.29\zeta^4 = 1$
   $5.29\zeta^4 - 5.29\zeta^2 + 1 = 0$
   Let $x = \zeta^2$. Then $5.29x^2 - 5.29x + 1 = 0$.
   Using the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
   $x = \frac{5.29 \pm \sqrt{(-5.29)^2 - 4(5.29)(1)}}{2(5.29)} = \frac{5.29 \pm \sqrt{27.9841 - 21.16}}{10.58} = \frac{5.29 \pm \sqrt{6.8241}}{10.58} = \frac{5.29 \pm 2.612}{10.58}$
   $x_1 = \frac{5.29 + 2.612}{10.58} = \frac{7.902}{10.58} \approx 0.747$
   $x_2 = \frac{5.29 - 2.612}{10.58} = \frac{2.678}{10.58} \approx 0.253$
   Since $\zeta < 1/\sqrt{2} \approx 0.707$, $\zeta^2 < 0.5$. So we choose $x_2$.
   $\zeta^2 \approx 0.253 \implies \zeta \approx \sqrt{0.253} \approx 0.503$

b) $\omega_r = \omega_n \sqrt{1-2\zeta^2} \implies 10 = \omega_n \sqrt{1-2(0.503)^2}$
   $10 = \omega_n \sqrt{1-2(0.253)} = \omega_n \sqrt{1-0.506} = \omega_n \sqrt{0.494}$
   $10 = \omega_n \times 0.703$
   $\omega_n = \frac{10}{0.703} \approx 14.22$ rad/s

c) %OS $= 100 e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} = 100 e^{-\frac{0.503 \pi}{\sqrt{1-0.503^2}}} = 100 e^{-\frac{0.503 \pi}{\sqrt{1-0.253}}} = 100 e^{-\frac{0.503 \pi}{\sqrt{0.747}}} = 100 e^{-\frac{0.503 \pi}{0.864}} = 100 e^{-1.82} \approx 16.1\%$

d) $t_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} = \frac{\pi}{14.22 \sqrt{1-0.503^2}} = \frac{\pi}{14.22 \sqrt{0.747}} = \frac{\pi}{14.22 \times 0.864} \approx \frac{3.141}{12.28} \approx 0.256$ s

**Answer 3:**
The resonant peak ($M_p$) in the frequency domain is the maximum magnitude of the closed-loop transfer function. The percent overshoot (%OS) is the maximum percentage by which the transient response of a system exceeds its final steady-state value for a step input.

For a second-order system, both $M_p$ and %OS are functions of the damping ratio ($\zeta$).
*   **Correlation:** As the damping ratio ($\zeta$) decreases (system becomes more underdamped and oscillatory), both $M_p$ and %OS increase.
*   **Implication of High $M_p$:** A high resonant peak ($M_p > 1.2$) implies that the system's response to sinusoidal inputs at or near the resonant frequency ($\omega_r$) will be significantly amplified. In the time domain, this amplification usually manifests as a large overshoot in the step response. A high $M_p$ suggests a system that is prone to oscillations.

---

### **9. Important Points to Remember**

*   **Second-order systems are key:** Understanding the relationships in second-order systems is fundamental to understanding more complex systems.
*   **$\zeta$ is the unifying parameter:** The damping ratio ($\zeta$) directly links time-domain (e.g., %OS, $t_p$) and frequency-domain (e.g., $M_p$, $\omega_r$) specifications.
*   **$M_p$ and %OS correlation:** Higher $M_p$ $\iff$ Higher %OS.
*   **$\omega_r$ and $t_p$ correlation:** As $\zeta$ decreases, $\omega_r$ decreases, and $t_p$ increases. They represent different phenomena: $\omega_r$ is the frequency of peak amplification, while $t_p$ is the time to reach the peak in a step response.
*   **Resonance indicates potential instability/oscillation:** A significant resonant peak ($M_p > 1.2$) is a warning sign of oscillatory behavior.
*   **Bandwidth relates to speed:** A larger bandwidth generally implies a faster system, but can also be associated with more oscillations.
*   **Design trade-offs:** Controllers are designed to balance speed, damping, and stability margins.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **10. References**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 7 on Transient Response, Chapter 9 on Frequency Response Design)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age. (Chapter 5 on Time Domain Analysis, Chapter 6 on Stability Analysis in Frequency Domain)
*   Dorf, R. C., & Bishop, R. H. (2013). *Modern Control Systems* (12th ed.). Pearson Education India. (Chapter 6 on Frequency Response)
*   Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson. (Chapter 6 on Analysis of Time Response, Chapter 7 on Reduction of Control Systems)