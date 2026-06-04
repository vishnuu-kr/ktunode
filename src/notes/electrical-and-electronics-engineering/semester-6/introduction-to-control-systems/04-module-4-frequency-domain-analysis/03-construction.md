---
title: "Construction"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366ca"
status: "completed"
scrapedAt: "2026-05-23T16:29:47.701Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis - Topic: Construction

## Table of Contents

1.  [Introduction to Frequency Domain Analysis](#introduction-to-frequency-domain-analysis)
2.  [Frequency Response of a System](#frequency-response-of-a-system)
3.  [Frequency Response Plots](#frequency-response-plots)
    *   [3.1. Bode Plots](#31-bode-plots)
        *   [3.1.1. Construction of Bode Plots](#311-construction-of-bode-plots)
        *   [3.1.2. Asymptotic Approximations](#312-asymptotic-approximations)
        *   [3.1.3. Gain Margin and Phase Margin](#313-gain-margin-and-phase-margin)
    *   [3.2. Nyquist Plots](#32-nyquist-plots)
        *   [3.2.1. Construction of Nyquist Plots](#321-construction-of-nyquist-plots)
        *   [3.2.2. Nyquist Stability Criterion](#322-nyquist-stability-criterion)
    *   [3.3. Polar Plots](#33-polar-plots)
        *   [3.3.1. Construction of Polar Plots](#331-construction-of-polar-plots)
        *   [3.3.2. Relation between Polar and Nyquist Plots](#332-relation-between-polar-and-nyquist-plots)
4.  [Correlation between Time and Frequency Domain](#correlation-between-time-and-frequency-domain)
5.  [Practice Questions](#practice-questions)
6.  [Answers to Practice Questions](#answers-to-practice-questions)

---

## 1. Introduction to Frequency Domain Analysis

Frequency domain analysis is a method used to analyze the behavior of a control system by introducing sinusoidal inputs of varying frequencies and observing the system's output response. This approach provides valuable insights into system performance, stability, and robustness.

**Key Concepts:**

*   **Sinusoidal Input:** A signal of the form $A \sin(\omega t)$ or $A \cos(\omega t)$, where $A$ is the amplitude and $\omega$ is the angular frequency.
*   **Frequency Response:** The steady-state output of a linear time-invariant (LTI) system when subjected to a sinusoidal input. It is characterized by the **amplitude ratio** (gain) and the **phase shift** between the input and the output.
*   **Transfer Function in Frequency Domain:** For an LTI system with transfer function $G(s)$, the frequency response is obtained by substituting $s = j\omega$, where $j$ is the imaginary unit. This results in the frequency response function $G(j\omega)$.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - This section lays the groundwork for this CO by introducing the fundamental concept of frequency response.

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6: Frequency Response Analysis and Design)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age. (Chapter 10: Frequency Domain Analysis of Control Systems)

---

## 2. Frequency Response of a System

When a sinusoidal input is applied to an LTI system, the steady-state output will also be sinusoidal, but generally with a different amplitude and phase.

**For a system with transfer function $G(s)$ and input $r(t) = A \sin(\omega t)$:**

The steady-state output $c(t)$ is given by:

$c(t) = A |G(j\omega)| \sin(\omega t + \angle G(j\omega))$

Where:

*   $|G(j\omega)|$ is the **magnitude** or **gain** of the frequency response at angular frequency $\omega$. It represents the ratio of the output amplitude to the input amplitude.
*   $\angle G(j\omega)$ is the **phase angle** of the frequency response at angular frequency $\omega$. It represents the phase difference between the output and the input.

**Key Characteristics of Frequency Response:**

*   **Magnitude Response:** $|G(j\omega)|$ as a function of $\omega$.
*   **Phase Response:** $\angle G(j\omega)$ as a function of $\omega$.

**Example:**

Consider a system with $G(s) = \frac{1}{s+1}$.
The frequency response is $G(j\omega) = \frac{1}{j\omega+1}$.

Magnitude: $|G(j\omega)| = \frac{1}{|j\omega+1|} = \frac{1}{\sqrt{\omega^2 + 1}}$
Phase: $\angle G(j\omega) = \arctan\left(\frac{-\omega}{1}\right) = -\arctan(\omega)$

If the input is $r(t) = 2 \sin(2t)$, then at $\omega = 2$ rad/sec:
$|G(j2)| = \frac{1}{\sqrt{2^2 + 1}} = \frac{1}{\sqrt{5}}$
$\angle G(j2) = -\arctan(2) \approx -63.4^\circ$

The steady-state output will be $c(t) = 2 \times \frac{1}{\sqrt{5}} \sin(2t - 63.4^\circ)$.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - Understanding the output response to sinusoidal inputs is fundamental to this CO.
*   **CO2:** Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (Knowledge Level: K2) - While this CO focuses on time domain, the frequency domain provides insights into transient behavior (e.g., bandwidth relates to settling time).

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6)
*   Kuo, B. C. (2014). *Automatic Control Systems* (9th ed.). Prentice Hall of India. (Chapter 7: Frequency Response Methods)

---

## 3. Frequency Response Plots

Visual representations of the frequency response are crucial for analysis and design. The most common plots are Bode plots, Nyquist plots, and Polar plots.

### 3.1. Bode Plots

Bode plots consist of two graphs plotted against the logarithm of frequency ($\log \omega$):

1.  **Magnitude Plot:** Logarithm of the magnitude, expressed in decibels (dB), versus $\log \omega$.
    *   Magnitude in dB = $20 \log_{10} |G(j\omega)|$
2.  **Phase Plot:** Phase angle (in degrees) versus $\log \omega$.

Bode plots are widely used for analyzing system stability, performance, and for controller design.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - Bode plots are primary tools for this CO.
*   **CO1 & CO5:** To represent continuous time systems in the classical domain. (Knowledge Level: K2) - Bode plots provide a representation of the system's behavior across frequencies, which can inform classical domain interpretations.

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6.1)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age. (Chapter 10.2)
*   Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson. (Chapter 9: Frequency Response Analysis)

#### 3.1.1. Construction of Bode Plots

The construction of Bode plots involves breaking down the overall transfer function into simpler standard forms (e.g., poles at the origin, real poles, real zeros, complex conjugate poles/zeros, gain term) and plotting the contribution of each term.

**Basic Building Blocks of Bode Plots:**

1.  **Gain Term ($K$)**:
    *   Magnitude: $20 \log_{10} K$ (constant, horizontal line)
    *   Phase: $0^\circ$ (constant)

2.  **Pole at the Origin ($\frac{1}{s}$ or $\frac{1}{(j\omega)}$)**:
    *   Magnitude: $20 \log_{10} \frac{1}{\omega} = -20 \log_{10} \omega$. At $\omega=1$ rad/sec, magnitude is 0 dB. The slope is **-20 dB/decade**.
    *   Phase: $-90^\circ$ (constant)

3.  **Zero at the Origin ($s$ or $j\omega$)**:
    *   Magnitude: $20 \log_{10} \omega$. At $\omega=1$ rad/sec, magnitude is 0 dB. The slope is **+20 dB/decade**.
    *   Phase: $+90^\circ$ (constant)

4.  **Real Pole ($\frac{1}{s+p}$ or $\frac{1}{1+s/p}$ where $p>0$)**:
    *   Magnitude: $20 \log_{10} \left|\frac{1}{j\omega+p}\right| = -10 \log_{10} (\omega^2 + p^2)$.
        *   **Low Frequencies ($\omega \ll p$)**: Magnitude $\approx 20 \log_{10} \frac{1}{p}$ (constant).
        *   **High Frequencies ($\omega \gg p$)**: Magnitude $\approx 20 \log_{10} \frac{1}{\omega}$ (slope of -20 dB/decade).
        *   **Corner Frequency ($\omega = p$)**: Magnitude is $20 \log_{10} \frac{1}{p\sqrt{2}} = 20 \log_{10} \frac{1}{p} - 3$ dB.
    *   Phase: $\angle \left(\frac{1}{j\omega+p}\right) = -\arctan\left(\frac{\omega}{p}\right)$.
        *   **Low Frequencies ($\omega \ll p$)**: Phase $\approx 0^\circ$.
        *   **High Frequencies ($\omega \gg p$)**: Phase $\approx -90^\circ$.
        *   **Corner Frequency ($\omega = p$)**: Phase = $-45^\circ$. The phase changes from $0^\circ$ to $-90^\circ$ over approximately two decades around the corner frequency.

5.  **Real Zero ($\frac{s+z}{1}$ or $1+\frac{s}{z}$ where $z>0$)**:
    *   Magnitude: $20 \log_{10} |j\omega+z| = 10 \log_{10} (\omega^2 + z^2)$.
        *   **Low Frequencies ($\omega \ll z$)**: Magnitude $\approx 20 \log_{10} z$ (constant).
        *   **High Frequencies ($\omega \gg z$)**: Magnitude $\approx 20 \log_{10} \omega$ (slope of +20 dB/decade).
        *   **Corner Frequency ($\omega = z$)**: Magnitude is $20 \log_{10} (z\sqrt{2}) = 20 \log_{10} z + 3$ dB.
    *   Phase: $\angle (j\omega+z) = \arctan\left(\frac{\omega}{z}\right)$.
        *   **Low Frequencies ($\omega \ll z$)**: Phase $\approx 0^\circ$.
        *   **High Frequencies ($\omega \gg z$)**: Phase $\approx +90^\circ$.
        *   **Corner Frequency ($\omega = z$)**: Phase = $+45^\circ$. The phase changes from $0^\circ$ to $+90^\circ$ over approximately two decades around the corner frequency.

6.  **Complex Conjugate Poles ($\frac{1}{\frac{s^2}{\omega_n^2} + \frac{2\zeta s}{\omega_n} + 1}$ or $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$ where $\zeta < 1$)**:
    *   The behavior is similar to real poles but with a peak or dip in magnitude around the natural frequency $\omega_n$, depending on the damping ratio $\zeta$. The phase shift is from $0^\circ$ to $-180^\circ$.

7.  **Complex Conjugate Zeros**: Similar to complex poles but with positive phase contribution ($0^\circ$ to $+180^\circ$) and potential peaking.

**Procedure for Construction:**

1.  **Factorize the transfer function** into the standard forms.
2.  **Determine corner frequencies** for all real poles and zeros.
3.  **Plot the low-frequency asymptote** for the magnitude and phase.
4.  **For each corner frequency, change the slope** of the magnitude plot by $\pm 20$ dB/decade for each real pole/zero, or $\pm 40$ dB/decade for each pair of complex conjugate poles/zeros.
5.  **Adjust the magnitude plot** at the corner frequencies using the $\pm 3$ dB correction (for real poles/zeros) or corrections based on $\zeta$ (for complex poles/zeros).
6.  **Plot the phase angle** contributions of each term and sum them up at different frequencies. Asymptotic approximations for phase shifts are often used, changing by $\pm 45^\circ$ at the corner frequency and accumulating $\pm 90^\circ$ over two decades.

**Important Point to Remember:** When summing contributions for Bode plots, it's often easier to work with frequencies that are octaves or decades apart.

#### 3.1.2. Asymptotic Approximations

Asymptotic Bode plots are straight-line approximations that simplify the construction process. The exact curves are close to these asymptotes, especially far from the corner frequencies.

*   **Magnitude Asymptotes:**
    *   Gain term: Horizontal line.
    *   Pole/Zero at origin: Slopes of -20 dB/decade or +20 dB/decade.
    *   Real Pole: Slope of -20 dB/decade after the corner frequency.
    *   Real Zero: Slope of +20 dB/decade after the corner frequency.
    *   Complex Poles/Zeros: Slope of -40 dB/decade or +40 dB/decade after the corner frequency.

*   **Phase Asymptotes:**
    *   Real Pole: Starts at $0^\circ$, reaches $-45^\circ$ at the corner frequency, and stabilizes at $-90^\circ$ one decade after the corner frequency.
    *   Real Zero: Starts at $0^\circ$, reaches $+45^\circ$ at the corner frequency, and stabilizes at $+90^\circ$ one decade after the corner frequency.
    *   For multiple poles and zeros, the phase response is the sum of the individual phase contributions.

**Example: Constructing Bode Plot for $G(s) = \frac{10(s+2)}{s(s+10)}$**

1.  **Rewrite in standard form:** $G(s) = \frac{10 \times 2(1 + s/2)}{s \times 10(1 + s/10)} = \frac{20(1 + s/2)}{s \times 10(1 + s/10)} = \frac{2(1 + s/2)}{s(1 + s/10)}$
    *   Gain: $K = 2$.
    *   Pole at origin: $\frac{1}{s}$.
    *   Real zero: $(1 + s/2)$. Corner frequency $\omega_z = 2$ rad/sec.
    *   Real pole: $(1 + s/10)$. Corner frequency $\omega_p = 10$ rad/sec.

2.  **Magnitude Plot:**
    *   **Gain term (K=2):** $20 \log_{10} 2 \approx 6$ dB. Initial slope = 0 dB/decade.
    *   **Pole at origin ($\frac{1}{s}$):** Starts at $6$ dB at $\omega=1$ rad/sec, slope of -20 dB/decade.
    *   **Zero at $\omega_z=2$:**
        *   Before $\omega=2$: Slope remains -20 dB/decade.
        *   At $\omega=2$: Slope changes to $-20 + 20 = 0$ dB/decade.
        *   Magnitude at $\omega=2$: $6 - 20 \log_{10} 2 = 6 - 6 = 0$ dB (approx. for asymptote).
        *   Actual magnitude at $\omega=2$: $6 + 20 \log_{10} |1+j2/2| = 6 + 20 \log_{10} \sqrt{1^2+1^2} = 6 + 20 \log_{10} \sqrt{2} \approx 6 + 3.01 = 9.01$ dB.
    *   **Pole at $\omega_p=10$:**
        *   Before $\omega=10$: Slope remains 0 dB/decade.
        *   At $\omega=10$: Slope changes to $0 - 20 = -20$ dB/decade.
        *   Magnitude at $\omega=10$: $9.01$ dB (approx. for asymptote).
        *   Actual magnitude at $\omega=10$: $9.01 + 20 \log_{10} |1+j10/10| - 20 \log_{10} 10 = 9.01 + 20 \log_{10} \sqrt{2} - 20 = 9.01 + 3.01 - 20 = -7.98$ dB.

3.  **Phase Plot:**
    *   **Gain term (K=2):** $0^\circ$.
    *   **Pole at origin ($\frac{1}{s}$):** $-90^\circ$ (constant).
    *   **Zero at $\omega_z=2$:**
        *   $\omega \ll 2$: $0^\circ$.
        *   At $\omega=2$: $+45^\circ$.
        *   $\omega \gg 2$: $+90^\circ$. (Phase shift occurs over $\omega = 0.2$ to $20$).
    *   **Pole at $\omega_p=10$:**
        *   $\omega \ll 10$: $0^\circ$.
        *   At $\omega=10$: $-45^\circ$.
        *   $\omega \gg 10$: $-90^\circ$. (Phase shift occurs over $\omega = 1$ to $100$).

    *   **Total Phase:**
        *   For $\omega < 0.2$: $-90^\circ$.
        *   For $\omega = 2$: $-90^\circ + 45^\circ = -45^\circ$.
        *   For $\omega = 10$: $-90^\circ + 45^\circ - 45^\circ = -90^\circ$.
        *   For $\omega > 100$: $-90^\circ + 90^\circ - 90^\circ = -90^\circ$.

#### 3.1.3. Gain Margin and Phase Margin

These are crucial stability indicators obtained from Bode plots.

*   **Gain Margin (GM):** The reciprocal of the magnitude of $G(j\omega)$ at the **phase crossover frequency** ($\omega_{pc}$), where the phase angle is $-180^\circ$.
    *   If the magnitude at $\omega_{pc}$ is $|G(j\omega_{pc})|$, then $GM = \frac{1}{|G(j\omega_{pc})|}$.
    *   In dB, $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})|$.
    *   A positive GM (in dB) indicates a stable system.
    *   **Interpretation:** It represents how much the system's gain can be increased before it becomes unstable (i.e., before the closed-loop system has poles in the RHP).

*   **Phase Margin (PM):** The amount of additional phase lag required for the system to become unstable at the **gain crossover frequency** ($\omega_{gc}$), where the magnitude of $G(j\omega)$ is unity ($|G(j\omega_{gc})| = 1$ or 0 dB).
    *   If the phase angle at $\omega_{gc}$ is $\angle G(j\omega_{gc})$, then $PM = 180^\circ + \angle G(j\omega_{gc})$.
    *   A positive PM indicates a stable system.
    *   **Interpretation:** It represents how much the system's phase lag can be increased before it becomes unstable. It is also an indicator of relative stability and damping of the closed-loop system. Higher PM generally means better damping.

**Important Points to Remember:**

*   For a system to be stable, both GM and PM must be positive.
*   $\omega_{pc}$ is the frequency where the phase plot crosses $-180^\circ$.
*   $\omega_{gc}$ is the frequency where the magnitude plot crosses 0 dB.
*   These margins are typically determined from the Bode plot of the **open-loop** transfer function to predict the stability of the **closed-loop** system.

**Example (using the previous $G(s)$):**

From the Bode plot construction, let's assume the phase crossover frequency $\omega_{pc}$ is where the total phase is $-180^\circ$, and the gain crossover frequency $\omega_{gc}$ is where the magnitude is 0 dB.

If, for instance, at $\omega = 30$ rad/sec, the phase is $-180^\circ$ and the magnitude is $-10$ dB, then:
*   $\omega_{pc} = 30$ rad/sec.
*   $|G(j30)|$ (in dB) = -10 dB.
*   $GM = -(-10) = 10$ dB.

If, at $\omega = 5$ rad/sec, the magnitude is 0 dB and the phase is $-60^\circ$, then:
*   $\omega_{gc} = 5$ rad/sec.
*   $\angle G(j5)$ = $-60^\circ$.
*   $PM = 180^\circ + (-60^\circ) = 120^\circ$.

Both GM and PM are positive, suggesting the closed-loop system is stable.

---

### 3.2. Nyquist Plots

A Nyquist plot is a polar plot of the frequency response $G(j\omega)$ as $\omega$ varies from $-\infty$ to $+\infty$. The plot is obtained by mapping the $G(j\omega)$ plane from the frequency response function.

*   **Polar Coordinates:** The plot uses the magnitude $|G(j\omega)|$ as the radial distance and the phase angle $\angle G(j\omega)$ as the angular position.
*   **Frequency Range:** Typically, $\omega$ ranges from $0$ to $\infty$. The plot for $\omega$ from $-\infty$ to $0$ is the mirror image of the plot for $\omega$ from $0$ to $\infty$ with respect to the real axis.
*   **Nyquist Plot of G(jω):** For $\omega \in [0, \infty)$, we plot $|G(j\omega)|$ vs $\angle G(j\omega)$.
*   **Nyquist Contour:** The complete Nyquist plot is formed by considering $\omega \in (-\infty, \infty)$.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - Nyquist plots are a powerful tool for stability analysis.
*   **CO1 & CO5:** To represent continuous time systems in the classical domain. (Knowledge Level: K2) - Nyquist plots provide a graphical representation of system behavior across frequencies.

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6.4)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age. (Chapter 10.4)
*   Kuo, B. C. (2014). *Automatic Control Systems* (9th ed.). Prentice Hall of India. (Chapter 7: Frequency Response Methods)
*   Gopal, M. (2012). *Control Systems Principles and Design* (4th ed.). Tata McGraw Hill. (Chapter 8: Frequency Domain Analysis)

#### 3.2.1. Construction of Nyquist Plots

1.  **Find $G(j\omega)$:** Substitute $s = j\omega$ into the open-loop transfer function $G(s)$.
2.  **Determine Magnitude and Phase:** Calculate $|G(j\omega)|$ and $\angle G(j\omega)$ for $\omega$ from $0$ to $\infty$.
    *   **Special Frequencies:**
        *   $\omega = 0$: Plot $|G(j0)|$ at $\angle G(j0)$.
        *   $\omega = \infty$: Determine the locus as $\omega \to \infty$. This depends on the number of poles and zeros at the origin. If $n_p > n_z$ (poles > zeros), the locus approaches the origin along the negative real axis for $\omega \to \infty$.
        *   **Critical Frequencies:** Frequencies where $|G(j\omega)| = 1$ (gain crossover frequency, $\omega_{gc}$) or $\angle G(j\omega) = -180^\circ$ (phase crossover frequency, $\omega_{pc}$). These points are important for stability analysis.
3.  **Plot the Nyquist Locus:** Plot $|G(j\omega)|$ against $\angle G(j\omega)$ for $\omega \in [0, \infty)$. This forms one-half of the Nyquist plot.
4.  **Complete the Plot:** The Nyquist plot for $\omega \in (-\infty, 0)$ is the mirror image of the plot for $\omega \in (0, \infty)$ with respect to the real axis.
5.  **Enclose the Critical Point (-1, j0):** The stability analysis is based on the number of times the Nyquist plot encircles the point $(-1, j0)$ in the $G(j\omega)$ plane.

**Important Considerations:**

*   If $G(s)$ has poles on the imaginary axis (e.g., $s=j\omega_0$), the Nyquist contour must indent around these poles by a small semicircle in the right half of the s-plane. This usually corresponds to a large semicircle in the Nyquist plot in the $G(j\omega)$ plane.
*   The point $(-1, j0)$ is crucial because if $G(j\omega) = -1$, then the closed-loop characteristic equation $1 + G(j\omega)H(j\omega) = 0$ has $G(j\omega) = -1$ (assuming unity feedback $H(s)=1$).

#### 3.2.2. Nyquist Stability Criterion

The Nyquist stability criterion relates the number of encirclements of the $-1+j0$ point by the Nyquist plot of $G(j\omega)H(j\omega)$ to the number of unstable (RHP) poles of the open-loop transfer function and the closed-loop transfer function.

Let:
*   $N$ = Number of counterclockwise encirclements of the point $-1+j0$ by the Nyquist plot of $G(j\omega)H(j\omega)$.
*   $P$ = Number of open-loop poles in the RHP (unstable open-loop poles).
*   $Z$ = Number of closed-loop poles in the RHP (unstable closed-loop poles).

The Nyquist stability criterion states:
$N = P - Z$

**For closed-loop stability, we require $Z = 0$. Therefore, for stability:**
$N = P$

**Steps for applying the Nyquist Criterion:**

1.  **Determine $P$**: Find the number of poles of $G(s)H(s)$ in the RHP.
2.  **Sketch the Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$**:
    *   Calculate $|G(j\omega)H(j\omega)|$ and $\angle G(j\omega)H(j\omega)$.
    *   Note starting point ($\omega=0$) and ending point ($\omega=\infty$).
    *   Identify any $-1+j0$ crossings.
3.  **Determine $N$**: Count the number of counterclockwise encirclements of $-1+j0$ by the complete Nyquist plot (including the $\omega \in (-\infty, 0)$ portion, which is the mirror image).
4.  **Calculate $Z$**: $Z = P - N$.
5.  **Check for Stability**: If $Z=0$, the closed-loop system is stable.

**Example:** $G(s)H(s) = \frac{1}{s(s+1)}$

1.  **$P$**: The open-loop transfer function has poles at $s=0$ and $s=-1$. Neither is in the RHP, so $P=0$.
2.  **Nyquist Plot of $G(j\omega)H(j\omega) = \frac{1}{j\omega(j\omega+1)}$**:
    *   $|G(j\omega)H(j\omega)| = \frac{1}{\omega\sqrt{\omega^2+1}}$
    *   $\angle G(j\omega)H(j\omega) = -90^\circ - \arctan(\omega)$

    *   **$\omega=0^+$**: $|G(j0)H(j0)| \to \infty$, $\angle G(j0)H(j0) = -90^\circ$. Starts at the positive imaginary axis.
    *   **$\omega \to \infty$**: $|G(j\omega)H(j\omega)| \to 0$, $\angle G(j\omega)H(j\omega) \to -90^\circ - 90^\circ = -180^\circ$. Ends at the negative real axis at the origin.
    *   **$\omega_{gc}$**: When $|G(j\omega)H(j\omega)| = 1$. $\frac{1}{\omega\sqrt{\omega^2+1}} = 1 \implies \omega^2(\omega^2+1) = 1 \implies \omega^4 + \omega^2 - 1 = 0$. Let $x = \omega^2$. $x^2 + x - 1 = 0 \implies x = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$. Since $\omega^2 > 0$, $\omega^2 = \frac{\sqrt{5}-1}{2} \approx 0.618$. So, $\omega_{gc} = \sqrt{0.618} \approx 0.786$ rad/sec.
    *   **$\omega_{pc}$**: When $\angle G(j\omega)H(j\omega) = -180^\circ$. $-90^\circ - \arctan(\omega) = -180^\circ \implies \arctan(\omega) = 90^\circ \implies \omega \to \infty$. The locus approaches the origin at $-180^\circ$.

    The plot for $\omega \in [0, \infty)$ starts at $\infty \angle -90^\circ$, passes through the point where $|G(j\omega)H(j\omega)|=1$, and ends at $0 \angle -180^\circ$. It does not encircle $-1+j0$.
3.  **$N$**: Since $P=0$ and the locus does not encircle $-1+j0$ for $\omega \in [0, \infty)$, and the part for $\omega \in (-\infty, 0)$ is a mirror image, $N=0$.
4.  **$Z = P - N = 0 - 0 = 0$.**
5.  **Stability**: Since $Z=0$, the closed-loop system is stable.

**Important Point to Remember:** The Nyquist criterion can be applied even when the open-loop transfer function has poles in the RHP ($P>0$). It directly tells you the number of unstable closed-loop poles.

#### 3.2.3. Relation between Polar and Nyquist Plots

A Polar plot is the plot of $G(j\omega)$ in the complex plane as $\omega$ varies from $0$ to $\infty$. It is essentially the same as the Nyquist plot of $G(j\omega)$ for $\omega \in [0, \infty)$, but it doesn't include the portion for $\omega \in (-\infty, 0)$ and the contour around imaginary axis poles unless specified.

*   **Nyquist Plot:** Considers $\omega \in (-\infty, \infty)$ and includes the encirclements of $-1+j0$. It's comprehensive for stability analysis.
*   **Polar Plot:** Considers $\omega \in [0, \infty)$ and is useful for observing magnitude and phase characteristics. It can also be used for stability analysis if the number of RHP poles of $G(s)H(s)$ is known and the plot for $\omega \in (-\infty, 0)$ is implicitly considered.

**Using Polar Plots for Stability:**

If you have the polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$, you can deduce stability using the generalized Nyquist criterion:

Let $N'$ be the number of counterclockwise encirclements of $-1+j0$ by the polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$, assuming no poles on the imaginary axis. If $G(s)H(s)$ has $P$ poles in the RHP and $p_j$ poles on the $j\omega$ axis, then the number of unstable closed-loop poles $Z$ is given by:

$Z = P + N' + p_j$

For stability, $Z=0$.

### 3.3. Polar Plots

Polar plots are a way to visualize the frequency response of a system in the complex plane.

*   **Plotting:** Magnitude $|G(j\omega)|$ vs. Phase $\angle G(j\omega)$ as $\omega$ varies from $0$ to $\infty$.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - Polar plots help in understanding system behavior and stability.
*   **CO1 & CO5:** To represent continuous time systems in the classical domain. (Knowledge Level: K2) - Visual representation of system characteristics.

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6.3)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age. (Chapter 10.3)
*   Kuo, B. C. (2014). *Automatic Control Systems* (9th ed.). Prentice Hall of India. (Chapter 7: Frequency Response Methods)

#### 3.3.1. Construction of Polar Plots

The construction process is similar to that for Nyquist plots but is limited to $\omega \in [0, \infty)$.

1.  **Substitute $s = j\omega$**: Obtain $G(j\omega)$.
2.  **Calculate Magnitude and Phase**: Calculate $|G(j\omega)|$ and $\angle G(j\omega)$ for various values of $\omega$ from $0$ to $\infty$.
3.  **Plot**: Plot $|G(j\omega)|$ on the radial axis and $\angle G(j\omega)$ on the angular axis in polar coordinates.

**Example: $G(s) = \frac{1}{s+1}$**

$G(j\omega) = \frac{1}{j\omega+1}$
$|G(j\omega)| = \frac{1}{\sqrt{\omega^2+1}}$
$\angle G(j\omega) = -\arctan(\omega)$

*   $\omega=0$: $|G(j0)| = 1$, $\angle G(j0) = 0^\circ$. Point is (1, 0).
*   $\omega=1$: $|G(j1)| = \frac{1}{\sqrt{2}}$, $\angle G(j1) = -45^\circ$. Point is $(\frac{1}{\sqrt{2}}, -45^\circ)$.
*   $\omega \to \infty$: $|G(j\omega)| \to 0$, $\angle G(j\omega) \to -90^\circ$. Locus approaches origin along negative imaginary axis.

The polar plot for this system is a semicircle in the fourth quadrant, starting at (1,0) and ending at the origin along the negative imaginary axis.

**Important Points to Remember:**

*   The shape of the polar plot provides insights into the system's transient response (e.g., peaking in the magnitude response often corresponds to overshoot in the time-domain step response).
*   The intersection of the polar plot with the unit circle ($|G(j\omega)| = 1$) gives the gain crossover frequency $\omega_{gc}$.
*   The intersection of the polar plot with the negative real axis ($|G(j\omega)| = -1$ or $\angle G(j\omega) = -180^\circ$) gives the phase crossover frequency $\omega_{pc}$.

#### 3.3.2. Relation between Polar and Nyquist Plots

*   The polar plot of $G(j\omega)$ for $\omega \in [0, \infty)$ is half of the Nyquist plot of $G(j\omega)$ for $\omega \in (-\infty, \infty)$.
*   The complete Nyquist plot includes the reflection of the polar plot across the real axis (corresponding to $\omega \in (-\infty, 0)$).
*   The encirclements of $-1+j0$ by the complete Nyquist plot determine closed-loop stability. For a simple polar plot (no poles on $j\omega$ axis), the number of encirclements of $-1+j0$ by the polar plot itself (for $\omega \in [0, \infty)$) is often related to the stability margin.

---

## 4. Correlation between Time and Frequency Domain

There's a strong relationship between a system's performance characteristics in the time domain and its frequency response.

**Key Correlations:**

*   **Bandwidth ($\omega_b$) and Settling Time ($T_s$):**
    *   A wider bandwidth generally implies a faster response and a shorter settling time in the time domain.
    *   For a second-order system with damping ratio $\zeta$ and natural frequency $\omega_n$, the approximate bandwidth is $\omega_b \approx \omega_n \sqrt{1 - 2\zeta + \sqrt{(1 - 2\zeta)^2 + 1}}$.
    *   For a typical second-order system, $T_s \approx \frac{4}{\zeta \omega_n}$ (2% criterion).
    *   This suggests that a higher $\omega_n$ (and thus a higher bandwidth) leads to a faster response.

*   **Peak Magnitude ($M_p$) and Peak Overshoot ($M_p\%$):**
    *   A large peak in the magnitude response ($M_p$) at a certain frequency generally corresponds to a large overshoot in the step response.
    *   For a second-order system, $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$ for $0 \le \zeta \le \frac{1}{\sqrt{2}}$.
    *   The peak overshoot is $M_p\% = (M_p - 1) \times 100\%$.

*   **Phase Margin (PM) and Damping Ratio ($\zeta$):**
    *   A larger phase margin indicates a more stable system with less damping (higher overshoot).
    *   For a second-order system, there is a direct correlation between PM and $\zeta$. A PM of $60^\circ$ often corresponds to $\zeta \approx 0.707$. Generally, $PM \approx 100 \times \zeta$ (for $\zeta$ in radians).

*   **Gain Crossover Frequency ($\omega_{gc}$) and Rise Time ($T_r$):**
    *   A higher gain crossover frequency generally corresponds to a faster rise time in the step response.

**Course Outcomes Alignment:**

*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3) - This section directly addresses how frequency domain metrics relate to system performance.
*   **CO2:** Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (Knowledge Level: K2) - This correlation helps in predicting time-domain behavior from frequency-domain analysis.
*   **CO1 & CO5:** To represent continuous time systems in the classical domain. (Knowledge Level: K2) - Understanding these correlations bridges frequency and time domain representations.

**Textbook References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 6.6)
*   Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson. (Chapter 9: Frequency Response Analysis)
*   Dorf, R. C., & Bishop, R. H. (2013). *Modern Control Systems* (12th ed.). Pearson Education India. (Chapter 7: Frequency Domain Design)

---

## 5. Practice Questions

1.  For the transfer function $G(s) = \frac{20}{s+5}$, construct the Bode plot. Determine the gain and phase margins.
2.  Given the open-loop transfer function $G(s)H(s) = \frac{K}{(s+1)(s+2)}$.
    a) Sketch the Nyquist plot for $K=1$.
    b) Determine the range of $K$ for which the closed-loop system is stable using the Nyquist stability criterion.
3.  Consider the transfer function $G(s) = \frac{10(s+1)}{s^2+2s+10}$.
    a) Sketch the polar plot for $\omega \in [0, \infty)$.
    b) If the system has no open-loop poles in the RHP, determine if the closed-loop system is stable when this is used in a unity feedback configuration.
4.  Explain the relationship between the bandwidth of a control system and its settling time.
5.  How is the phase margin determined from a Bode plot, and what does it signify about the system's stability?

---

## 6. Answers to Practice Questions

1.  **For $G(s) = \frac{20}{s+5}$:**
    *   Rewrite in standard form: $G(s) = \frac{20}{5(1+s/5)} = \frac{4}{1+s/5}$.
    *   **Magnitude Plot:**
        *   Gain term ($K=4$): $20 \log_{10} 4 \approx 12$ dB. Initial slope = 0 dB/decade.
        *   Real pole at $\omega_p = 5$:
            *   Before $\omega=5$: Slope = 0 dB/decade.
            *   At $\omega=5$: Magnitude is $12 - 3 = 9$ dB. Slope changes to -20 dB/decade.
            *   For $\omega > 5$: Magnitude decreases with -20 dB/decade.
    *   **Phase Plot:**
        *   Gain term ($K=4$): $0^\circ$.
        *   Real pole at $\omega_p = 5$:
            *   $\omega \ll 5$: $0^\circ$.
            *   At $\omega=5$: $-45^\circ$.
            *   $\omega \gg 5$: $-90^\circ$. (Phase shift from $\omega=0.5$ to $\omega=50$).
    *   **Gain Margin (GM):**
        *   Find $\omega_{pc}$ where phase = $-180^\circ$. Since the maximum phase lag is $-90^\circ$, the phase never reaches $-180^\circ$. Therefore, the gain margin is **infinite**.
    *   **Phase Margin (PM):**
        *   Find $\omega_{gc}$ where magnitude = 0 dB.
        *   Magnitude: $20 \log_{10} \frac{4}{\sqrt{\omega^2+25}} = 0$
        *   $\frac{4}{\sqrt{\omega^2+25}} = 1 \implies 16 = \omega^2 + 25 \implies \omega^2 = -9$. This is not possible in the real domain.
        *   Let's re-check the magnitude calculation: $G(j\omega) = \frac{4}{1+j\omega/5}$.
        *   Magnitude $|G(j\omega)| = \frac{4}{\sqrt{1^2 + (\omega/5)^2}} = \frac{4}{\sqrt{1 + \omega^2/25}}$.
        *   Set magnitude to 1 (0 dB): $\frac{4}{\sqrt{1 + \omega^2/25}} = 1 \implies 16 = 1 + \omega^2/25 \implies 15 = \omega^2/25 \implies \omega^2 = 15 \times 25 = 375$.
        *   $\omega_{gc} = \sqrt{375} \approx 19.36$ rad/sec.
        *   At $\omega_{gc} = 19.36$, the phase is $\angle G(j19.36) = -\arctan(19.36/5) = -\arctan(3.872) \approx -75.56^\circ$.
        *   $PM = 180^\circ + (-75.56^\circ) = \boxed{104.44^\circ}$.

2.  **For $G(s)H(s) = \frac{K}{(s+1)(s+2)}$:**
    *   $P=0$ (no RHP poles).
    *   **Nyquist Plot for $K=1$:** $G(j\omega)H(j\omega) = \frac{1}{(j\omega+1)(j\omega+2)}$.
        *   $\omega=0$: $G(j0)H(j0) = \frac{1}{(1)(2)} = 0.5$. Point is (0.5, 0).
        *   $\omega \to \infty$: $|G(j\omega)H(j\omega)| \to 0$, $\angle G(j\omega)H(j\omega) \to -90^\circ - 90^\circ = -180^\circ$. Locus ends at origin along the negative real axis.
        *   The plot starts at 0.5 on the real axis and moves towards the origin, reaching it at $-180^\circ$. It does not encircle $-1+j0$.
        *   For $\omega \in [0, \infty)$, the locus is entirely in the upper half of the complex plane, approaching the origin along the negative imaginary axis. The mirrored part for $\omega \in (-\infty, 0)$ will be in the lower half.
    *   **Stability using Nyquist Criterion:**
        *   For $K=1$, $N=0$ (no encirclements of -1+j0). Since $P=0$, $Z = P - N = 0 - 0 = 0$. The system is stable.
        *   **For general $K$**: The locus is scaled by $K$. We need to find $K$ such that the locus crosses $-1+j0$.
            *   $|G(j\omega)H(j\omega)| = \frac{K}{\sqrt{\omega^2+1}\sqrt{\omega^2+4}}$.
            *   $\angle G(j\omega)H(j\omega) = -\arctan(\omega) - \arctan(\omega/2)$.
            *   For the locus to cross $-1+j0$, the phase must be $-180^\circ$ at some frequency.
            *   $-\arctan(\omega) - \arctan(\omega/2) = -180^\circ$. This implies $\omega \to \infty$, where phase is $-180^\circ$.
            *   At $\omega \to \infty$, the magnitude is 0 for any $K$. So the locus always approaches the origin at $-180^\circ$.
            *   To find the critical $K$, we need the frequency where the phase is $-180^\circ$. This only happens at $\omega \to \infty$.
            *   Let's consider the intersection with the unit circle for Nyquist plot. We need $|G(j\omega)H(j\omega)|$ to be such that when scaled by $K$, it can reach 1 at $-180^\circ$. The phase reaches $-180^\circ$ as $\omega \to \infty$. At $\omega \to \infty$, $|G(j\omega)H(j\omega)| \to 0$.
            *   Let's look for the frequency where the phase is $-135^\circ$ (midpoint between $-90^\circ$ and $-180^\circ$). $-\arctan(\omega) - \arctan(\omega/2) = -135^\circ$.
            *   Let's directly find when the locus crosses $-1+j0$. This requires the phase to be $-180^\circ$ and the magnitude to be $1$.
            *   The phase is $-180^\circ$ only as $\omega \to \infty$. At $\omega \to \infty$, the magnitude is 0.
            *   This implies the system might always be stable for any $K$, or the instability occurs at $\omega = \infty$.
            *   Let's re-evaluate. $G(s)H(s) = \frac{K}{s^2+3s+2}$.
            *   $P=0$.
            *   The Nyquist plot for $\omega \in [0, \infty)$ starts at $K/2$ at $\angle 0^\circ$ and ends at $0$ at $\angle -180^\circ$.
            *   The plot is in the first and fourth quadrants, approaching the origin along the negative real axis.
            *   For stability, we need $N=P=0$. This means the locus for $\omega \in [0, \infty)$ should not encircle $-1+j0$.
            *   The only way to encircle $-1+j0$ is if the locus crosses the negative real axis at a value less than $-1$.
            *   The locus is always real and positive for $\omega \in [0, \infty)$ until it reaches the origin at $-180^\circ$.
            *   There's a mistake in my reasoning. The phase crossover frequency is where phase is $-180^\circ$. This is $\omega \to \infty$.
            *   Let's find the gain crossover frequency $\omega_{gc}$ where $|G(j\omega)H(j\omega)| = 1$.
            *   $\frac{K}{\sqrt{\omega^2+1}\sqrt{\omega^2+4}} = 1 \implies K^2 = (\omega^2+1)(\omega^2+4)$.
            *   The phase angle at $\omega_{gc}$ determines the phase margin.
            *   Let's use the root locus approach for stability. $1 + \frac{K}{s^2+3s+2} = 0 \implies s^2+3s+(2+K) = 0$.
            *   For stability, roots must be in LHP. Using Routh-Hurwitz:
                *   $s^2$: 1   $2+K$
                *   $s^1$: 3   0
                *   $s^0$: $2+K$
            *   For stability, all coefficients in the first column must be positive: $1 > 0$, $3 > 0$, $2+K > 0$.
            *   $2+K > 0 \implies K > -2$.
            *   However, this is for a specific setup. Let's stick to Nyquist.
            *   The Nyquist plot for $\omega \in [0, \infty)$ starts at $K/2$ and ends at 0 along the negative real axis. The minimum magnitude on the real axis occurs at $\omega \to \infty$ (which is 0).
            *   The plot lies entirely on the positive real axis for $\omega \in [0, \omega_{pc})$. For the locus to enclose $-1+j0$, the magnitude must be greater than 1 at phase crossover.
            *   The phase crossover is at $\omega \to \infty$. At $\omega \to \infty$, the magnitude is 0.
            *   This means $N=0$. So $Z = P - N = 0 - 0 = 0$.
            *   **Wait, there's a simpler way for this specific form.** The phase plot starts at $0^\circ$ and goes to $-180^\circ$. The magnitude plot starts at $K/2$ and goes to $0$.
            *   The system becomes unstable when the Nyquist plot encircles $-1+j0$. This happens when the magnitude is greater than 1 when the phase is $-180^\circ$. But the magnitude is 0 at $-180^\circ$.
            *   Let's consider the critical value of K when the characteristic equation has roots on the jw axis. $s^2+3s+2+K = 0$. Let $s=j\omega$. $(j\omega)^2 + 3j\omega + 2+K = 0 \implies -\omega^2 + 3j\omega + 2+K = 0$.
            *   Separating real and imaginary parts:
                *   Real: $-\omega^2 + 2+K = 0$
                *   Imaginary: $3\omega = 0 \implies \omega = 0$.
            *   If $\omega=0$, then $2+K = 0 \implies K = -2$. This is for $s=0$ being a root.
            *   Let's think about the boundary of stability from the frequency response. For $G(j\omega)H(j\omega)$, we need to ensure that $1+G(j\omega)H(j\omega)$ does not have roots with positive real part for the closed loop system.
            *   The condition for stability for this system (with $P=0$) is that the Nyquist plot for $\omega \in [0, \infty)$ should not go to the left of $-1+j0$.
            *   Since the plot starts at $K/2$ and goes to 0 along the negative real axis, it will not encircle $-1+j0$ unless $K/2 \le -1$, which is not possible for $K>0$.
            *   However, the question is about range of K for stability. If the gain $|G(j\omega)|$ is very high, the system can become unstable.
            *   Let's use the fact that the phase is $-180^\circ$ at $\omega \to \infty$. At this point, the magnitude is 0.
            *   The gain margin is determined at the phase crossover frequency $\omega_{pc}$. Here, $\omega_{pc} \to \infty$. The magnitude at $\omega_{pc}$ is 0. So GM is infinite for any $K$.
            *   The phase margin is determined at the gain crossover frequency $\omega_{gc}$ where $|G(j\omega)H(j\omega)| = 1$.
            *   $K^2 = (\omega^2+1)(\omega^2+4)$.
            *   Let's check the point where the phase is $-135^\circ$. $-\arctan(\omega) - \arctan(\omega/2) = -135^\circ$.
            *   $\tan(\arctan(\omega) + \arctan(\omega/2)) = \tan(135^\circ) = -1$.
            *   $\frac{\omega + \omega/2}{1 - \omega(\omega/2)} = -1 \implies \frac{3\omega/2}{1 - \omega^2/2} = -1 \implies 3\omega/2 = -1 + \omega^2/2 \implies \omega^2/2 - 3\omega/2 - 1 = 0 \implies \omega^2 - 3\omega - 2 = 0$.
            *   $\omega = \frac{3 \pm \sqrt{9 - 4(1)(-2)}}{2} = \frac{3 \pm \sqrt{17}}{2}$. Since $\omega > 0$, $\omega = \frac{3+\sqrt{17}}{2} \approx 3.56$.
            *   At $\omega = 3.56$: $\angle G(j\omega)H(j\omega) \approx -135^\circ$.
            *   The magnitude at this frequency is $\frac{K}{(\sqrt{3.56^2+1})(\sqrt{3.56^2+4})} = \frac{K}{(\sqrt{13.6})(\sqrt{16.7})} = \frac{K}{6.17}$.
            *   For stability, the phase margin should be positive.
            *   The gain crossover frequency $\omega_{gc}$ is where the magnitude is 1. The phase at $\omega_{gc}$ will be less than $-180^\circ$.
            *   **Let's reconsider the Routh-Hurwitz:** $s^2+3s+(2+K)=0$. Stability requires $2+K > 0$, so $K > -2$. For physical systems, $K>0$. So, $0 < K < \infty$.
            *   **What about the imaginary axis crossing?** $s=j\omega$. $-\omega^2 + 3j\omega + 2+K = 0$. Requires $\omega=0$ and $-\omega^2+2+K=0$. So, $2+K=0$, $K=-2$. This is for a root at $s=0$.
            *   The Nyquist plot shows that for $P=0$, stability is achieved as long as $N=0$. Since the plot starts at $K/2$ and ends at 0 along the negative real axis, and has no poles on the $j\omega$ axis, $N$ will always be 0 for any $K>0$.
            *   **Range of $K$ for stability:** $0 < K < \infty$.

3.  **For $G(s) = \frac{10(s+1)}{s^2+2s+10}$:**
    *   $G(s) = \frac{10(s+1)}{(s+1)^2 + 9} = \frac{10(s+1)}{(s+1-j3)(s+1+j3)}$.
    *   Poles are at $s = -1 \pm j3$. These are in the LHP. So, $P=0$ for the open-loop system.
    *   **a) Polar plot for $\omega \in [0, \infty)$:**
        *   $G(j\omega) = \frac{10(j\omega+1)}{(j\omega)^2+2(j\omega)+10} = \frac{10(j\omega+1)}{-\omega^2+2j\omega+10} = \frac{10(j\omega+1)}{10-\omega^2+2j\omega}$.
        *   $\omega=0$: $G(j0) = \frac{10(1)}{10} = 1$. Point is (1, 0).
        *   $\omega \to \infty$: $G(j\omega) \approx \frac{10j\omega}{-\omega^2} = \frac{-10j}{\omega}$. As $\omega \to \infty$, magnitude $\to 0$ and phase $\to -90^\circ$. Locus ends at origin along the negative imaginary axis.
        *   **Plot:** Starts at (1,0) and ends at the origin along the negative imaginary axis. It will likely curve into the fourth quadrant.
    *   **b) Stability with unity feedback ($P=0$):**
        *   We need $N=P=0$ for stability.
        *   The polar plot starts at 1 on the real axis and ends at the origin along the negative imaginary axis.
        *   For the plot to encircle $-1+j0$, it must cross the negative real axis at a value less than $-1$.
        *   Let's find the phase crossover frequency $\omega_{pc}$ where the phase is $-180^\circ$.
        *   $\angle G(j\omega) = \angle 10 + \angle (j\omega+1) - \angle (10-\omega^2+2j\omega)$
        *   $\angle G(j\omega) = 0^\circ + \arctan(\omega/1) - \arctan\left(\frac{2\omega}{10-\omega^2}\right)$.
        *   We need $\arctan(\omega) - \arctan\left(\frac{2\omega}{10-\omega^2}\right) = -180^\circ$.
        *   This means $\arctan(\omega) = \arctan\left(\frac{2\omega}{10-\omega^2}\right) - 180^\circ$.
        *   This can happen if $\frac{2\omega}{10-\omega^2}$ is negative, which means $10-\omega^2 < 0$, or $\omega^2 > 10$.
        *   If $\omega^2 > 10$, then $\arctan\left(\frac{2\omega}{10-\omega^2}\right)$ is in the range $(90^\circ, 180^\circ)$ (for $2\omega>0$).
        *   The phase of the denominator is $\theta_d = \arctan\left(\frac{2\omega}{10-\omega^2}\right)$. When $\omega > \sqrt{10}$, $10-\omega^2$ is negative, and the angle is in the second quadrant.
        *   Let's test a value: $\omega=4$. $\omega^2=16$.
        *   $G(j4) = \frac{10(j4+1)}{10-16+j8} = \frac{10(1+j4)}{-6+j8}$.
        *   $\angle G(j4) = \arctan(4) - \arctan(8/-6) = 75.96^\circ - \arctan(-4/3) = 75.96^\circ - (-53.13^\circ) = 129.09^\circ$. This is not right. The angle of the denominator is $\arctan(\frac{2\omega}{10-\omega^2})$ which is for $10-\omega^2 < 0$ in the second quadrant.
        *   $\tan(\theta_d) = \frac{2\omega}{10-\omega^2}$. For $\omega=4$, $\tan(\theta_d) = \frac{8}{-6} = -4/3$. Since the real part is negative and imaginary part is positive, the angle is in the 2nd quadrant. $\theta_d = 180^\circ - 53.13^\circ = 126.87^\circ$.
        *   $\angle G(j4) = \arctan(4/1) - 126.87^\circ = 75.96^\circ - 126.87^\circ = -50.91^\circ$.
        *   Let's check $\omega=3$. $\omega^2=9$. $10-\omega^2 = 1 > 0$. Denominator angle is in the first quadrant.
        *   $G(j3) = \frac{10(j3+1)}{10-9+j6} = \frac{10(1+j3)}{1+j6}$.
        *   $\angle G(j3) = \arctan(3) - \arctan(6) = 71.56^\circ - 80.54^\circ = -8.98^\circ$.
        *   The phase is increasing from $-8.98^\circ$ as $\omega$ increases beyond 3.
        *   Let's find $\omega_{pc}$ where phase is $-180^\circ$.
        *   $\arctan(\omega) - (\arctan\left(\frac{2\omega}{10-\omega^2}\right)) = -180^\circ$.
        *   Let $\alpha = \arctan(\omega)$ and $\beta = \arctan\left(\frac{2\omega}{10-\omega^2}\right)$. $\alpha - \beta = -180^\circ$.
        *   The denominator term $10-\omega^2$ becomes negative when $\omega > \sqrt{10} \approx 3.16$.
        *   As $\omega \to \sqrt{10}^+$, $10-\omega^2 \to 0^-$, so $\frac{2\omega}{10-\omega^2} \to -\infty$. The phase angle of the denominator approaches $90^\circ$ from the second quadrant (e.g., $126.87^\circ$ at $\omega=4$).
        *   At $\omega \to \infty$, the phase angle is $\arctan(\infty) - \arctan(\text{angle for } \frac{2\omega}{-\omega^2}) \approx 90^\circ - \arctan(-2/\omega) \approx 90^\circ - (-0^\circ) = 90^\circ$. This is incorrect.
        *   Let's analyze the denominator phase more carefully. $10-\omega^2+2j\omega$.
            *   If $\omega < \sqrt{10}$: $10-\omega^2 > 0$, angle is in Quadrant 1.
            *   If $\omega = \sqrt{10}$: $10-\omega^2 = 0$, angle is $90^\circ$.
            *   If $\omega > \sqrt{10}$: $10-\omega^2 < 0$, angle is in Quadrant 2.
        *   $\angle G(j\omega) = \arctan(\omega) - \text{phase}(10-\omega^2+2j\omega)$.
        *   Let $\omega = 4$. $\angle G(j4) = \arctan(4) - \text{phase}(-6+j8) = 75.96^\circ - 126.87^\circ = -50.91^\circ$.
        *   Let $\omega = 10$. $\angle G(j10) = \arctan(10) - \text{phase}(-90+j20) = 84.29^\circ - \arctan(20/-90) = 84.29^\circ - (-12.53^\circ) = 96.82^\circ$. This is wrong. The angle for $-90+j20$ is $180^\circ - \arctan(20/90) = 180^\circ - 12.53^\circ = 167.47^\circ$.
        *   $\angle G(j10) = 84.29^\circ - 167.47^\circ = -83.18^\circ$.
        *   As $\omega \to \infty$, $G(j\omega) \approx \frac{10j\omega}{-\omega^2} = \frac{-10j}{\omega}$. The angle is $-90^\circ$.
        *   The phase starts at $0^\circ$ and ends at $-90^\circ$. It never reaches $-180^\circ$.
        *   Since the phase does not reach $-180^\circ$, the Nyquist plot for $\omega \in [0, \infty)$ does not cross the negative real axis.
        *   Therefore, the Nyquist plot for $\omega \in [0, \infty)$ does not encircle $-1+j0$.
        *   Since $P=0$, and $N=0$, the number of unstable poles $Z = P - N = 0 - 0 = 0$.
        *   **Conclusion:** The closed-loop system is **stable**.

4.  **Relationship between Bandwidth and Settling Time:**
    *   The **bandwidth** ($\omega_b$) of a control system is the range of frequencies over which the system responds effectively. It is typically defined as the frequency at which the magnitude response drops by 3 dB from its low-frequency value.
    *   The **settling time** ($T_s$) is the time it takes for the system's output to settle within a certain percentage (e.g., 2% or 5%) of its final steady-state value.
    *   **Correlation:** A wider bandwidth generally implies that the system can respond to a wider range of frequencies, which translates to a faster transient response and a shorter settling time. For a second-order system, the bandwidth is related to the natural frequency ($\omega_n$), and the settling time is inversely proportional to $\zeta \omega_n$. A higher $\omega_n$ (which leads to a wider bandwidth) generally results in a faster system with a shorter settling time, provided the damping ratio is adequate.

5.  **Phase Margin from Bode Plot and Significance:**
    *   **Determination:** The phase margin (PM) is determined from the Bode plot of the **open-loop** transfer function.
        1.  Locate the **gain crossover frequency** ($\omega_{gc}$), which is the frequency where the magnitude plot crosses the 0 dB line ($|G(j\omega)| = 1$).
        2.  At this frequency $\omega_{gc}$, find the corresponding phase angle from the phase plot, $\angle G(j\omega_{gc})$.
        3.  The phase margin is calculated as: $PM = 180^\circ + \angle G(j\omega_{gc})$.
    *   **Significance:** The phase margin is a measure of the system's relative stability and is an indicator of the damping of the closed-loop system.
        *   A larger positive phase margin indicates a more stable system and a more damped transient response (less overshoot and oscillation).
        *   A phase margin of $0^\circ$ indicates that the system is marginally stable (oscillatory).
        *   A negative phase margin indicates an unstable system.
        *   Typical desired phase margins for good transient response are between $30^\circ$ and $60^\circ$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
