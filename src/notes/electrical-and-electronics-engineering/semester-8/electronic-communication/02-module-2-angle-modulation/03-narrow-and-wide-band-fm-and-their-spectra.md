---
title: "Narrow and wide band FM and their spectra"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf0"
status: "completed"
scrapedAt: "2026-05-23T16:40:09.423Z"
---
# Electronic Communication: Module 2: Angle Modulation

## Topic: Narrowband and Wideband FM and Their Spectra

### 1. Introduction to Angle Modulation (Recap)

Angle modulation is a type of modulation where the angle of the carrier wave is varied in accordance with the message signal. The two primary forms are:

*   **Frequency Modulation (FM):** The frequency of the carrier wave is varied.
*   **Phase Modulation (PM):** The phase of the carrier wave is varied.

**Important Note:** FM and PM are closely related. A PM system can be realized using an FM modulator (and vice-versa) with appropriate pre-emphasis or de-emphasis filtering.

### 2. Frequency Modulation (FM)

An FM signal is represented as:
$s(t) = A_c \cos(2\pi f_c t + \phi(t))$

Where:
*   $A_c$: Amplitude of the carrier signal.
*   $f_c$: Carrier frequency.
*   $\phi(t)$: Instantaneous phase of the carrier.

For FM, the instantaneous phase is related to the integral of the instantaneous frequency deviation from the carrier frequency:
$\phi(t) = 2\pi k_f \int_0^t m(\tau) d\tau$

Where:
*   $k_f$: Frequency sensitivity of the modulator (Hz/V).
*   $m(t)$: Message signal.

The instantaneous frequency $f_i(t)$ is given by:
$f_i(t) = f_c + k_f m(t)$

The frequency deviation, $\Delta f$, is the maximum change in frequency from the carrier frequency:
$\Delta f = k_f A_m$, where $A_m$ is the amplitude of the message signal.

### 3. Bandwidth of FM Signals

The bandwidth of an FM signal is significantly larger than that of an AM signal carrying the same message. This is one of the key characteristics of FM.

#### 3.1. Carson's Rule

Carson's Rule provides a practical approximation for the bandwidth of an FM signal. It states that the bandwidth $B_{FM}$ is approximately:

$B_{FM} \approx 2(\Delta f + f_{m,max})$

Where:
*   $\Delta f$: Maximum frequency deviation.
*   $f_{m,max}$: Maximum frequency component of the message signal.

**Reference:** Kennedy's Electronic Communication Systems (Chapter 11) and Wayne Tomasi's Electronic Communication Systems (Chapter 9) extensively discuss Carson's Rule and its derivation.

#### 3.2. Bessel Functions and FM Spectra

The exact spectrum of an FM signal is more complex and involves an infinite number of sidebands. The mathematical derivation shows that the FM signal can be represented as a sum of sinusoids at frequencies $f_c \pm nf_m$, where $n$ is an integer. The amplitudes of these sinusoids are proportional to Bessel functions of the first kind, $J_n(\beta)$.

The FM signal can be expressed as:
$s(t) = A_c \sum_{n=-\infty}^{\infty} J_n(\beta) \cos(2\pi (f_c + n f_m) t)$

Where:
*   $\beta$: Modulation index, defined as $\beta = \frac{\Delta f}{f_m}$. For a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$, $\Delta f = k_f A_m$.
*   $J_n(\beta)$: Bessel function of the first kind, order $n$, and argument $\beta$.

**Key Observations about Bessel Functions:**

*   For a given modulation index $\beta$, the values of $J_n(\beta)$ determine the relative amplitudes of the carrier and sidebands.
*   As $n$ increases, $|J_n(\beta)|$ generally decreases.
*   The significant sidebands are those for which $|J_n(\beta)|$ is substantial (e.g., $> 0.01$).

**Reference:** Simon Haykin and Michael Mohre's Communication Systems (Chapter 5) provides a detailed mathematical treatment of the FM spectrum using Bessel functions.

### 4. Narrowband FM (NBFM)

NBFM is a special case of FM where the modulation index $\beta$ is small, typically $\beta \ll 1$ (or approximately $\beta \le 0.3$).

#### 4.1. Characteristics of NBFM

*   **Narrow Bandwidth:** The bandwidth is approximately equal to the bandwidth of the baseband message signal, similar to AM. This is why it's called "narrowband."
    *   Using Carson's Rule: $B_{FM} \approx 2(\Delta f + f_{m,max})$. If $\Delta f$ is small compared to $f_{m,max}$, $B_{FM} \approx 2 f_{m,max}$.
*   **Low Modulation Index:** The frequency deviation is small relative to the highest frequency component of the message.
*   **Spectrum:** The spectrum of NBFM is similar to that of Double Sideband Suppressed Carrier (DSB-SC) AM.

#### 4.2. Mathematical Derivation of NBFM Spectrum

For $\beta \ll 1$, the Bessel function approximation $J_n(\beta)$ simplifies:
*   $J_0(\beta) \approx 1$
*   $J_1(\beta) \approx \frac{\beta}{2}$
*   $J_{-1}(\beta) \approx -\frac{\beta}{2}$
*   $J_n(\beta) \approx 0$ for $n \ge 2$

Substituting these into the FM signal equation:
$s(t) \approx A_c [J_0(\beta) \cos(2\pi f_c t) + J_1(\beta) \cos(2\pi (f_c + f_m) t) + J_{-1}(\beta) \cos(2\pi (f_c - f_m) t)]$
$s(t) \approx A_c [1 \cdot \cos(2\pi f_c t) + \frac{\beta}{2} \cos(2\pi (f_c + f_m) t) - \frac{\beta}{2} \cos(2\pi (f_c - f_m) t)]$

Rearranging the last term: $-\frac{\beta}{2} \cos(2\pi (f_c - f_m) t) = \frac{\beta}{2} \cos(2\pi (f_c - f_m) t + \pi)$

Let's re-examine the Bessel function expansion with cosine property:
$s(t) = A_c [\cos(2\pi f_c t) + \beta \cos(2\pi f_c t) \sin(2\pi f_m t) - \text{small terms}]$

Using trigonometric identities:
$\sin(A) \cos(B) = \frac{1}{2}[\sin(A+B) - \sin(B-A)]$
$\cos(A) \sin(B) = \frac{1}{2}[\sin(A+B) - \sin(A-B)]$

Let $m(t) = A_m \cos(2\pi f_m t)$. Then $\beta = \frac{k_f A_m}{f_m}$.
The FM signal is $s(t) = A_c \cos(2\pi f_c t + \frac{k_f A_m}{f_m} \sin(2\pi f_m t))$
For $\beta \ll 1$, we can approximate $\cos(x) \approx 1$ and $\sin(x) \approx x$. This approach is incorrect for FM spectrum.

Let's use the Taylor expansion of the exponential form:
$s(t) = A_c \text{Re}\{e^{j(2\pi f_c t + \frac{k_f A_m}{f_m} \sin(2\pi f_m t))}\}$
$s(t) = A_c \text{Re}\{e^{j2\pi f_c t} e^{j \beta \sin(2\pi f_m t)}\}$
For $\beta \ll 1$, $e^{j \beta \sin(2\pi f_m t)} \approx 1 + j \beta \sin(2\pi f_m t)$
$s(t) \approx A_c \text{Re}\{e^{j2\pi f_c t} (1 + j \beta \sin(2\pi f_m t))\}$
$s(t) \approx A_c [\cos(2\pi f_c t) - \beta \sin(2\pi f_c t) \sin(2\pi f_m t)]$
Using $\sin A \sin B = \frac{1}{2}(\cos(A-B) - \cos(A+B))$:
$s(t) \approx A_c [\cos(2\pi f_c t) - \frac{\beta}{2} (\cos(2\pi (f_c - f_m) t) - \cos(2\pi (f_c + f_m) t))]$
$s(t) \approx A_c [\cos(2\pi f_c t) + \frac{\beta}{2} \cos(2\pi (f_c + f_m) t) - \frac{\beta}{2} \cos(2\pi (f_c - f_m) t)]$

This is identical to the Bessel function approximation result.

#### 4.3. NBFM Spectrum

The spectrum of NBFM consists of:
*   A carrier component at $f_c$ with amplitude proportional to $J_0(\beta) \approx 1$.
*   Two sidebands at $f_c \pm f_m$ with amplitudes proportional to $J_1(\beta) \approx \frac{\beta}{2}$.

The bandwidth is approximately $2 f_m$.

**Comparison with AM:**
For an AM signal with carrier amplitude $A_c$ and modulation index $m$, the spectrum is:
$s_{AM}(t) = A_c (1 + m \cos(2\pi f_m t)) \cos(2\pi f_c t)$
$s_{AM}(t) = A_c \cos(2\pi f_c t) + \frac{m A_c}{2} \cos(2\pi (f_c - f_m) t) + \frac{m A_c}{2} \cos(2\pi (f_c + f_m) t)$

Comparing the NBFM spectrum with DSB-SC AM (where the carrier is suppressed, $m=1$):
NBFM: $A_c \cos(2\pi f_c t) + \frac{\beta A_c}{2} \cos(2\pi (f_c + f_m) t) - \frac{\beta A_c}{2} \cos(2\pi (f_c - f_m) t)$
DSB-SC: $\frac{m A_c}{2} \cos(2\pi (f_c - f_m) t) + \frac{m A_c}{2} \cos(2\pi (f_c + f_m) t)$

If we consider the amplitudes relative to the highest frequency component, the NBFM spectrum resembles DSB-SC AM where the sideband amplitudes are proportional to $\frac{\beta}{2}$ and the carrier component is still present.

**Reference:** Taub & Schilling's Principles of Communication Systems (Chapter 7) and Couch's Digital and Analog Communication Systems (Chapter 10) cover NBFM and its spectral characteristics.

### 5. Wideband FM (WBFM)

WBFM is the case where the modulation index $\beta$ is large, $\beta \gg 1$.

#### 5.1. Characteristics of WBFM

*   **Wide Bandwidth:** The bandwidth is significantly larger than the bandwidth of the baseband message signal. This is a primary characteristic of WBFM.
    *   Using Carson's Rule: $B_{FM} \approx 2(\Delta f + f_{m,max})$. Since $\Delta f$ is large, the bandwidth is dominated by $\Delta f$.
*   **Large Modulation Index:** The frequency deviation is large relative to the highest frequency component of the message.
*   **Spectrum:** The spectrum consists of the carrier and an infinite number of sidebands whose amplitudes are given by Bessel functions. The distribution of energy across these sidebands is more uniform than in NBFM for large $\beta$.
*   **Noise Immunity:** WBFM offers significantly better noise immunity compared to AM and NBFM, provided that a limiter is used at the receiver to remove amplitude variations caused by noise.

#### 5.2. WBFM Spectrum

As $\beta$ increases, the Bessel function $J_n(\beta)$ spreads out over a wider range of $n$. For large $\beta$:
*   The Bessel functions $J_n(\beta)$ become approximately equal in magnitude for $n$ in the range of $-\beta$ to $+\beta$.
*   $J_n(\beta) \approx \frac{1}{\sqrt{2\pi\beta}} \cos\left(n\pi/2 - \beta - \pi/4\right)$ for large $\beta$.
*   The number of significant sidebands is roughly $2\beta + 1$.
*   The bandwidth is approximately $2(\beta f_m + f_m) = 2 f_m (\beta + 1)$. Since $\beta \gg 1$, $B_{FM} \approx 2 \beta f_m = 2 \Delta f$. This aligns with Carson's rule.

**Example Spectra Visualization:**

*   **NBFM ($\beta = 0.2$):** Primarily carrier and two sidebands. Bandwidth $\approx 2 f_m$.
*   **Intermediate $\beta$ ($\beta = 1$):** Carrier, first pair of sidebands, and significant second pair of sidebands. Bandwidth $\approx 2(f_m + f_m) = 4f_m$.
*   **WBFM ($\beta = 5$):** Carrier, and many sidebands with significant amplitudes. Bandwidth $\approx 2(5f_m + f_m) = 12f_m$.

**Reference:** The concept of wideband FM and its superior noise performance is a cornerstone of FM, discussed in all the listed textbooks. Lathi & Ding's Modern Digital and Analog Communication Systems (Chapter 6) provides good insights into the spectral distribution for WBFM.

### 6. Summary of Key Differences: NBFM vs. WBFM

| Feature           | Narrowband FM (NBFM)                                   | Wideband FM (WBFM)                                         |
| :---------------- | :----------------------------------------------------- | :--------------------------------------------------------- |
| Modulation Index ($\beta$) | Small ($\beta \le 0.3$)                              | Large ($\beta \gg 1$)                                      |
| Frequency Deviation ($\Delta f$) | Small ($ \Delta f \le 0.3 f_m$)                       | Large ($ \Delta f \gg f_m$)                               |
| Bandwidth ($B_{FM}$)  | Approximately $2f_{m,max}$ (similar to AM)           | Approximately $2(\Delta f + f_{m,max})$ (much larger than AM) |
| Spectrum          | Carrier + 2 sidebands (similar to DSB-SC AM)           | Infinite sidebands; amplitudes determined by Bessel functions |
| Noise Immunity    | Similar to AM                                          | Much better than AM and NBFM                               |
| Power Efficiency  | Similar to AM (power in carrier and sidebands)       | Higher power in sidebands, less in carrier (for large $\beta$) |
| Applications      | Limited, some public safety radio, telemetry           | Broadcast FM radio, TV sound, mobile radio                 |

### 7. Learning Outcome Coverage and Course Outcome Alignment

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   While this topic focuses on FM, understanding the spectral similarity between NBFM and AM is relevant. The mathematical representation of FM helps understand its properties.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   This topic directly addresses the spectra of NBFM and WBFM.
    *   It also touches upon efficiency (WBFM utilizes bandwidth for noise improvement).
    *   The difference in bandwidth compared to AM is implicitly covered.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   Not directly covered.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   Not directly covered.

**Knowledge Levels:**

*   **NBFM characteristics and spectra:** K3 (Explaining and analyzing)
*   **WBFM characteristics and spectra:** K3 (Explaining and analyzing)
*   **Comparison of NBFM and WBFM:** K3 (Analyzing and comparing)
*   **Carson's Rule and Bessel functions:** K2 (Understanding the concepts and application)

### 8. Important Points to Remember

*   **Modulation Index ($\beta$) is the key differentiator:** $\beta = \Delta f / f_m$.
*   **NBFM:** Small $\beta$, narrow bandwidth ($\approx 2f_m$), spectrum like DSB-SC AM, little noise improvement.
*   **WBFM:** Large $\beta$, wide bandwidth ($\approx 2\Delta f$), rich spectrum, excellent noise immunity.
*   **Carson's Rule:** A practical approximation for FM bandwidth: $B_{FM} \approx 2(\Delta f + f_{m,max})$.
*   **Bessel functions:** Mathematically describe the amplitudes of the carrier and infinite sidebands in FM. For large $\beta$, the energy is spread across many sidebands.
*   **Trade-off:** FM trades bandwidth for improved noise performance, especially prominent in WBFM.

---

### Practice Questions and Exercises

**Question 1:**
An FM signal has a maximum frequency deviation of 5 kHz and the highest frequency component of the modulating signal is 1 kHz.
a) Calculate the bandwidth of the FM signal using Carson's Rule.
b) If the modulation index were 0.2, would this be considered Narrowband or Wideband FM? Justify your answer.
c) Describe the expected spectral components for the case in (b).

**Answer 1:**
a) $B_{FM} \approx 2(\Delta f + f_{m,max}) = 2(5 \text{ kHz} + 1 \text{ kHz}) = 2(6 \text{ kHz}) = 12 \text{ kHz}$.

b) The modulation index $\beta = \frac{\Delta f}{f_{m,max}} = \frac{5 \text{ kHz}}{1 \text{ kHz}} = 5$.
Since $\beta = 5$ is much greater than 1, this is **Wideband FM (WBFM)**.

c) For WBFM with $\beta = 5$, the spectrum will consist of a carrier component and an infinite number of sidebands at frequencies $f_c \pm n f_m$, where $n = 1, 2, 3, \dots$. The amplitudes of these components are proportional to $J_n(5)$. For $\beta=5$, $J_0(5)$ is relatively small, and $J_n(5)$ will have significant values for $n$ up to approximately $\pm 5$ or more. The energy is spread across many sidebands.

---

**Question 2:**
Consider an FM signal modulated by a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$. The FM signal is given by $s(t) = A_c \cos(2\pi f_c t + \beta \sin(2\pi f_m t))$.
a) For a modulation index $\beta = 0.2$, what are the dominant spectral components of the FM signal?
b) How does the spectrum in (a) compare to that of a Double Sideband Suppressed Carrier (DSB-SC) AM signal?

**Answer 2:**
a) For $\beta = 0.2$ (Narrowband FM), the Bessel function approximations are: $J_0(0.2) \approx 1$, $J_1(0.2) \approx 0.1$, $J_{-1}(0.2) \approx -0.1$, and $J_n(0.2) \approx 0$ for $|n| \ge 2$.
The dominant spectral components are:
*   Carrier at $f_c$ with amplitude proportional to $J_0(0.2) \approx A_c$.
*   Upper sideband at $f_c + f_m$ with amplitude proportional to $J_1(0.2) \approx 0.1 A_c$.
*   Lower sideband at $f_c - f_m$ with amplitude proportional to $J_{-1}(0.2) \approx -0.1 A_c$.
The bandwidth is approximately $2f_m$.

b) A DSB-SC AM signal with the same message signal and carrier amplitude $A_c$ is given by $s_{DSB-SC}(t) = A_c \cos(2\pi f_m t) \cos(2\pi f_c t) = \frac{A_c}{2} \cos(2\pi (f_c - f_m) t) + \frac{A_c}{2} \cos(2\pi (f_c + f_m) t)$.
The spectrum of DSB-SC AM consists only of two sidebands at $f_c \pm f_m$ with equal amplitudes.
The NBFM spectrum has a carrier component and two sidebands at $f_c \pm f_m$. The sideband amplitudes are proportional to $\beta/2$ (which is $0.1$ in this case for $A_c=1$). The NBFM sideband amplitudes are smaller than the sideband amplitudes of DSB-SC AM for the same modulating signal amplitude if $\beta < 1$. The key difference is the presence of the carrier in NBFM, which is absent in DSB-SC AM.

---

**Question 3:**
A key advantage of Wideband FM over Amplitude Modulation is:
a) Reduced bandwidth requirement.
b) Improved noise immunity.
c) Higher power efficiency.
d) Simpler transmitter implementation.

**Answer 3:**
b) Improved noise immunity. WBFM trades bandwidth for significantly better noise performance due to the limiting action at the receiver which removes amplitude-dependent noise.

---
*(Note: Further detailed mathematical derivations and plots of Bessel functions for different $\beta$ values can be found in the reference textbooks, particularly in chapters dedicated to FM.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
