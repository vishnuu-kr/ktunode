---
title: "Harmonic analysis using Fourier series and Fourier transforms  – simple numerical problems"
subject: "POWER QUALITY"
module: "Module 2: Harmonics  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36975"
status: "completed"
scrapedAt: "2026-05-23T16:38:52.654Z"
---
# POWER QUALITY: Module 2: Harmonics - Harmonic Analysis using Fourier Series and Fourier Transforms

## Introduction to Harmonics

Harmonics are sinusoidal components of a periodic waveform having frequencies that are integer multiples of the fundamental frequency. In power systems, the fundamental frequency is typically 50 Hz or 60 Hz. Non-linear loads in power systems generate harmonic currents, which in turn cause harmonic voltages.

**Learning Outcome Addressed:**
*   **CO1:** Identify the sources and effects of power quality problems. (Knowledge Level: K2) - Harmonics are a major power quality problem, and understanding their analysis is crucial for identifying their sources and mitigating their effects.

**Key Concepts & Definitions:**
*   **Fundamental Frequency ($f_0$):** The lowest frequency component of a periodic waveform, usually the system frequency (e.g., 50 Hz or 60 Hz).
*   **Harmonic Frequency ($f_h$):** A frequency that is an integer multiple of the fundamental frequency.
    *   $f_h = n \cdot f_0$, where $n$ is the order of the harmonic (an integer).
*   **Harmonic Order (n):** The ratio of the harmonic frequency to the fundamental frequency.
    *   $n = f_h / f_0$
*   **Harmonic Distortion:** The presence of frequencies other than the fundamental in a waveform.
*   **Total Harmonic Distortion (THD):** A measure of the total harmonic distortion present in an AC signal, expressed as a percentage of the fundamental component. It is defined as the ratio of the root-mean-square (RMS) value of all harmonic components to the RMS value of the fundamental component.
    *   $THD_V = \frac{\sqrt{V_2^2 + V_3^2 + V_4^2 + \dots}}{V_1} \times 100\%$
    *   $THD_I = \frac{\sqrt{I_2^2 + I_3^2 + I_4^2 + \dots}}{I_1} \times 100\%$
    *   Where $V_1$ and $I_1$ are the RMS values of the fundamental voltage and current, respectively, and $V_n$ and $I_n$ are the RMS values of the $n$-th harmonic voltage and current.
*   **Harmonic Analysis:** The process of decomposing a complex periodic waveform into its constituent sinusoidal components (fundamental and harmonics).

**Sources of Harmonics (CO1):**
*   **Power Electronic Converters:** Rectifiers (diode and thyristor-based), inverters, AC-DC converters, DC-AC converters.
*   **Switching Power Supplies:** Used in computers, chargers, and other electronic equipment.
*   **Adjustable Speed Drives (ASDs):** Used to control motor speed.
*   **Discharge Lighting:** Fluorescent and high-intensity discharge (HID) lamps.
*   **Arc Furnaces:** Industrial furnaces used for smelting.
*   **Uninterruptible Power Supplies (UPS).**
*   **Saturated Transformers:** Transformers operating near their saturation flux density.

**Effects of Harmonics (CO1):**
*   **Overheating of Equipment:** Increased losses in transformers, motors, and cables due to eddy currents and hysteresis.
*   **Reduced Efficiency:** Energy wasted as heat.
*   **Malfunction of Electronic Equipment:** Sensitive electronic devices can be affected by distorted voltage waveforms.
*   **Nuisance Tripping of Circuit Breakers:** Overheating can lead to premature tripping.
*   **Capacitor Bank Failures:** Resonance between capacitor banks and system inductances can cause excessive harmonic currents.
*   **Communication Interference:** Harmonics can interfere with communication signals.
*   **Increased Neutral Currents:** In three-phase systems with unbalanced single-phase loads, the third harmonic currents (and their multiples) add up in the neutral conductor, leading to overheating.

**Textbook References:**
*   Dugan et al., 2012: Chapters 2 and 7 on harmonic phenomena and sources.
*   Sankaran, 2002: Chapter 3 on harmonic sources and characteristics.
*   Bollen, 1999: Chapter 3 on harmonic generation and propagation.
*   Singh et al., 2015: Chapters 1 and 2 on introduction to power quality and sources of distortion.

---

## Harmonic Analysis using Fourier Series

Fourier series is a mathematical tool used to represent a periodic, piecewise continuous function as an infinite sum of sines and cosines. This is the fundamental mathematical basis for analyzing harmonics in power systems.

**Learning Outcome Addressed:**
*   **CO2:** Apply Fourier concepts for harmonic analysis. (Knowledge Level: K3) - This section directly addresses the application of Fourier series for analyzing harmonic content.

**Key Concepts & Definitions:**
*   **Periodic Waveform:** A waveform that repeats itself at regular intervals.
*   **Fourier Series Representation:** A periodic waveform $v(t)$ with fundamental period $T$ and fundamental angular frequency $\omega_0 = 2\pi/T$ can be represented as:
    *   $v(t) = A_0 + \sum_{n=1}^{\infty} [A_n \cos(n\omega_0 t) + B_n \sin(n\omega_0 t)]$
    *   Alternatively, using amplitude-phase form: $v(t) = A_0 + \sum_{n=1}^{\infty} C_n \cos(n\omega_0 t - \phi_n)$
*   **DC Component ($A_0$):** The average value of the waveform over one period.
    *   $A_0 = \frac{1}{T} \int_{0}^{T} v(t) dt$
*   **Fourier Coefficients ($A_n, B_n$):**
    *   $A_n = \frac{2}{T} \int_{0}^{T} v(t) \cos(n\omega_0 t) dt$
    *   $B_n = \frac{2}{T} \int_{0}^{T} v(t) \sin(n\omega_0 t) dt$
*   **RMS Value of a Periodic Waveform:** The RMS value of a periodic waveform can be calculated from its Fourier series components:
    *   $V_{rms} = \sqrt{A_0^2 + \frac{1}{2} \sum_{n=1}^{\infty} (A_n^2 + B_n^2)}$
    *   For currents, $I_{rms} = \sqrt{A_0^2 + \frac{1}{2} \sum_{n=1}^{\infty} (A_n^2 + B_n^2)}$ (where $A_0, A_n, B_n$ are for the current waveform).
*   **RMS Value of Harmonic Components:**
    *   DC component RMS value: $V_{dc} = |A_0|$
    *   Fundamental component RMS value: $V_1 = \sqrt{\frac{A_1^2 + B_1^2}{2}}$
    *   $n$-th harmonic component RMS value: $V_n = \sqrt{\frac{A_n^2 + B_n^2}{2}}$ (for $n \ge 1$)

**Simplifying Assumptions for Harmonic Analysis:**
In power systems, waveforms often possess certain symmetries that simplify the calculation of Fourier coefficients:

1.  **Even Symmetry:** If $v(t) = v(-t)$, then $B_n = 0$ for all $n$.
2.  **Odd Symmetry:** If $v(t) = -v(-t)$, then $A_0 = 0$ and $A_n = 0$ for all $n$.
3.  **Half-Wave Symmetry:** If $v(t) = -v(t + T/2)$, then all even harmonics ($n=2, 4, 6, \dots$) are zero.
    *   $A_n = 0$ for even $n \ge 2$
    *   $B_n = 0$ for even $n \ge 2$
    *   The integral can be simplified:
        *   $A_n = \frac{4}{T} \int_{0}^{T/2} v(t) \cos(n\omega_0 t) dt$
        *   $B_n = \frac{4}{T} \int_{0}^{T/2} v(t) \sin(n\omega_0 t) dt$

**Textbook References:**
*   Dugan et al., 2012: Chapter 7.2 on Fourier Series Analysis.
*   Sankaran, 2002: Chapter 3.2 on Fourier Series Analysis.
*   Bollen, 1999: Chapter 3.1 on mathematical description of harmonics.
*   Singh et al., 2015: Chapter 2.1 on Fourier Series.

---

## Simple Numerical Problems using Fourier Series

Let's work through some examples to understand how to apply Fourier series for harmonic analysis.

**Example 1: Square Wave**

Consider a voltage waveform that is a square wave with amplitude $V_m$, period $T$, and fundamental frequency $f_0 = 1/T$. The waveform is $+V_m$ for $0 < t < T/2$ and $-V_m$ for $T/2 < t < T$.

$v(t) = \begin{cases} V_m & 0 < t < T/2 \\ -V_m & T/2 < t < T \end{cases}$

This waveform has odd symmetry ($v(t) = -v(-t)$). Therefore, $A_0 = 0$ and $A_n = 0$ for all $n$. We only need to calculate $B_n$.

$B_n = \frac{2}{T} \int_{0}^{T} v(t) \sin(n\omega_0 t) dt$
$B_n = \frac{2}{T} \left[ \int_{0}^{T/2} V_m \sin(n\omega_0 t) dt + \int_{T/2}^{T} (-V_m) \sin(n\omega_0 t) dt \right]$

Let's evaluate the first integral:
$\int_{0}^{T/2} V_m \sin(n\omega_0 t) dt = V_m \left[ -\frac{\cos(n\omega_0 t)}{n\omega_0} \right]_{0}^{T/2}$
$= -\frac{V_m}{n\omega_0} \left[ \cos\left(n\omega_0 \frac{T}{2}\right) - \cos(0) \right]$
Since $\omega_0 = 2\pi/T$, $n\omega_0 T/2 = n(2\pi/T)(T/2) = n\pi$.
$= -\frac{V_m}{n\omega_0} [\cos(n\pi) - 1]$
$= -\frac{V_m}{n\omega_0} [(-1)^n - 1]$

Now, let's evaluate the second integral:
$\int_{T/2}^{T} (-V_m) \sin(n\omega_0 t) dt = -V_m \left[ -\frac{\cos(n\omega_0 t)}{n\omega_0} \right]_{T/2}^{T}$
$= \frac{V_m}{n\omega_0} \left[ \cos(n\omega_0 T) - \cos\left(n\omega_0 \frac{T}{2}\right) \right]$
$\cos(n\omega_0 T) = \cos(n(2\pi/T)T) = \cos(2n\pi) = 1$.
$= \frac{V_m}{n\omega_0} [1 - \cos(n\pi)]$
$= \frac{V_m}{n\omega_0} [1 - (-1)^n]$

So, $B_n = \frac{2}{T} \left[ -\frac{V_m}{n\omega_0} ((-1)^n - 1) + \frac{V_m}{n\omega_0} (1 - (-1)^n) \right]$
$B_n = \frac{2}{T} \left[ \frac{V_m}{n\omega_0} (-( (-1)^n - 1) + (1 - (-1)^n)) \right]$
$B_n = \frac{2V_m}{nT\omega_0} [-(-1)^n + 1 + 1 - (-1)^n]$
$B_n = \frac{2V_m}{nT\omega_0} [2 - 2(-1)^n]$
Since $\omega_0 = 2\pi/T$, $T\omega_0 = 2\pi$.
$B_n = \frac{2V_m}{n(2\pi)} [2 - 2(-1)^n] = \frac{V_m}{n\pi} [2 - 2(-1)^n]$

Now, let's consider values of $n$:
*   If $n$ is even, $(-1)^n = 1$. So, $B_n = \frac{V_m}{n\pi} [2 - 2(1)] = 0$. This confirms that even harmonics are zero for a perfect square wave with odd symmetry.
*   If $n$ is odd, $(-1)^n = -1$. So, $B_n = \frac{V_m}{n\pi} [2 - 2(-1)] = \frac{V_m}{n\pi} [2 + 2] = \frac{4V_m}{n\pi}$.

The Fourier series for the square wave is:
$v(t) = \sum_{n \text{ odd}}^{\infty} \frac{4V_m}{n\pi} \sin(n\omega_0 t)$
$v(t) = \frac{4V_m}{\pi} \left( \sin(\omega_0 t) + \frac{1}{3}\sin(3\omega_0 t) + \frac{1}{5}\sin(5\omega_0 t) + \dots \right)$

**RMS Value of Square Wave:**
$V_{rms} = \sqrt{A_0^2 + \frac{1}{2} \sum_{n=1}^{\infty} (A_n^2 + B_n^2)}$
Since $A_0=0$ and $A_n=0$, $V_{rms} = \sqrt{\frac{1}{2} \sum_{n \text{ odd}}^{\infty} B_n^2}$
$V_{rms} = \sqrt{\frac{1}{2} \sum_{n \text{ odd}}^{\infty} \left(\frac{4V_m}{n\pi}\right)^2} = \sqrt{\frac{1}{2} \sum_{n \text{ odd}}^{\infty} \frac{16V_m^2}{n^2\pi^2}}$
$V_{rms} = V_m \sqrt{\frac{8}{\pi^2} \sum_{n \text{ odd}}^{\infty} \frac{1}{n^2}}$
The sum of the reciprocals of the squares of odd numbers is $\sum_{n \text{ odd}}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{8}$.
$V_{rms} = V_m \sqrt{\frac{8}{\pi^2} \cdot \frac{\pi^2}{8}} = V_m$.
This is expected for a pure square wave.

**THD Calculation for Square Wave:**
$V_1 = \frac{4V_m}{\pi}$ (RMS value of the fundamental component)
$V_3 = \frac{1}{3} \frac{4V_m}{\pi}$
$V_5 = \frac{1}{5} \frac{4V_m}{\pi}$
...
$V_n = \frac{1}{n} \frac{4V_m}{\pi}$ for odd $n$.

$THD_V = \frac{\sqrt{V_3^2 + V_5^2 + V_7^2 + \dots}}{V_1} \times 100\%$
$THD_V = \frac{\sqrt{(\frac{4V_m}{3\pi})^2 + (\frac{4V_m}{5\pi})^2 + (\frac{4V_m}{7\pi})^2 + \dots}}{\frac{4V_m}{\pi}} \times 100\%$
$THD_V = \frac{\frac{4V_m}{\pi} \sqrt{\frac{1}{3^2} + \frac{1}{5^2} + \frac{1}{7^2} + \dots}}{\frac{4V_m}{\pi}} \times 100\%$
$THD_V = \sqrt{\frac{1}{3^2} + \frac{1}{5^2} + \frac{1}{7^2} + \dots} \times 100\%$
The sum $\sum_{n \text{ odd}, n \ge 3}^{\infty} \frac{1}{n^2} = \sum_{n=1}^{\infty} \frac{1}{n^2} - \frac{1}{1^2} - \sum_{n \text{ even}}^{\infty} \frac{1}{n^2}$
$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$
$\sum_{n \text{ even}}^{\infty} \frac{1}{n^2} = \sum_{k=1}^{\infty} \frac{1}{(2k)^2} = \sum_{k=1}^{\infty} \frac{1}{4k^2} = \frac{1}{4} \sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{1}{4} \frac{\pi^2}{6} = \frac{\pi^2}{24}$
So, $\sum_{n \text{ odd}, n \ge 3}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} - 1 - \frac{\pi^2}{24} = \frac{4\pi^2 - 24 - \pi^2}{24} = \frac{3\pi^2 - 24}{24} = \frac{\pi^2}{8} - 1$.
$THD_V = \sqrt{\frac{\pi^2}{8} - 1} \times 100\% \approx \sqrt{1.2337 - 1} \times 100\% = \sqrt{0.2337} \times 100\% \approx 48.33\%$.

**Important Point to Remember:** A perfect square wave has infinite harmonics, but in practice, the higher-order harmonics are attenuated by system impedances.

**Example 2: Rectangular Pulse Wave**

Consider a voltage waveform that is a rectangular pulse of amplitude $V_m$ and duration $\tau$, repeating with a period $T$. Let $\tau = T/2$. This is the same as the square wave.

Now, consider a pulse of amplitude $V_m$ for $0 < t < \tau$ and 0 for $\tau < t < T$.
$v(t) = \begin{cases} V_m & 0 < t < \tau \\ 0 & \tau < t < T \end{cases}$
This waveform does not have odd or even symmetry. It also doesn't have half-wave symmetry unless $\tau = T/2$.

$A_0 = \frac{1}{T} \int_{0}^{T} v(t) dt = \frac{1}{T} \int_{0}^{\tau} V_m dt = \frac{V_m \tau}{T}$
If $\tau = T/2$, $A_0 = V_m/2$. This is the DC component of the square wave if we considered it shifted up.

$A_n = \frac{2}{T} \int_{0}^{T} v(t) \cos(n\omega_0 t) dt = \frac{2}{T} \int_{0}^{\tau} V_m \cos(n\omega_0 t) dt$
$A_n = \frac{2V_m}{T} \left[ \frac{\sin(n\omega_0 t)}{n\omega_0} \right]_{0}^{\tau} = \frac{2V_m}{T n\omega_0} \sin(n\omega_0 \tau)$
Substitute $\omega_0 = 2\pi/T$:
$A_n = \frac{2V_m}{T n (2\pi/T)} \sin(n \frac{2\pi}{T} \tau) = \frac{V_m}{n\pi} \sin\left(\frac{2\pi n \tau}{T}\right)$

$B_n = \frac{2}{T} \int_{0}^{T} v(t) \sin(n\omega_0 t) dt = \frac{2}{T} \int_{0}^{\tau} V_m \sin(n\omega_0 t) dt$
$B_n = \frac{2V_m}{T} \left[ -\frac{\cos(n\omega_0 t)}{n\omega_0} \right]_{0}^{\tau} = -\frac{2V_m}{T n\omega_0} [\cos(n\omega_0 \tau) - \cos(0)]$
$B_n = -\frac{2V_m}{T n (2\pi/T)} [\cos(n\omega_0 \tau) - 1] = -\frac{V_m}{n\pi} [\cos(\frac{2\pi n \tau}{T}) - 1]$
$B_n = \frac{V_m}{n\pi} [1 - \cos(\frac{2\pi n \tau}{T})]$

Let's consider a specific case: $\tau = T/4$.
$A_0 = \frac{V_m (T/4)}{T} = \frac{V_m}{4}$
$A_n = \frac{V_m}{n\pi} \sin\left(\frac{2\pi n (T/4)}{T}\right) = \frac{V_m}{n\pi} \sin\left(\frac{n\pi}{2}\right)$
$B_n = \frac{V_m}{n\pi} \left[1 - \cos\left(\frac{2\pi n (T/4)}{T}\right)\right] = \frac{V_m}{n\pi} \left[1 - \cos\left(\frac{n\pi}{2}\right)\right]$

Let's calculate the coefficients for $n=1, 2, 3, 4, 5, \dots$ when $\tau = T/4$:

*   **n=1:**
    *   $A_1 = \frac{V_m}{1\pi} \sin(\frac{\pi}{2}) = \frac{V_m}{\pi}$
    *   $B_1 = \frac{V_m}{1\pi} [1 - \cos(\frac{\pi}{2})] = \frac{V_m}{\pi}$
    *   $V_1 = \sqrt{\frac{A_1^2 + B_1^2}{2}} = \sqrt{\frac{(V_m/\pi)^2 + (V_m/\pi)^2}{2}} = \sqrt{\frac{2(V_m/\pi)^2}{2}} = \frac{V_m}{\pi}$

*   **n=2:**
    *   $A_2 = \frac{V_m}{2\pi} \sin(\pi) = 0$
    *   $B_2 = \frac{V_m}{2\pi} [1 - \cos(\pi)] = \frac{V_m}{2\pi} [1 - (-1)] = \frac{V_m}{\pi}$
    *   $V_2 = \sqrt{\frac{A_2^2 + B_2^2}{2}} = \sqrt{\frac{0^2 + (V_m/\pi)^2}{2}} = \frac{V_m}{\pi\sqrt{2}}$

*   **n=3:**
    *   $A_3 = \frac{V_m}{3\pi} \sin(\frac{3\pi}{2}) = -\frac{V_m}{3\pi}$
    *   $B_3 = \frac{V_m}{3\pi} [1 - \cos(\frac{3\pi}{2})] = \frac{V_m}{3\pi}$
    *   $V_3 = \sqrt{\frac{A_3^2 + B_3^2}{2}} = \sqrt{\frac{(-V_m/3\pi)^2 + (V_m/3\pi)^2}{2}} = \sqrt{\frac{2(V_m/3\pi)^2}{2}} = \frac{V_m}{3\pi}$

*   **n=4:**
    *   $A_4 = \frac{V_m}{4\pi} \sin(2\pi) = 0$
    *   $B_4 = \frac{V_m}{4\pi} [1 - \cos(2\pi)] = \frac{V_m}{4\pi} [1 - 1] = 0$
    *   $V_4 = 0$

*   **n=5:**
    *   $A_5 = \frac{V_m}{5\pi} \sin(\frac{5\pi}{2}) = \frac{V_m}{5\pi}$
    *   $B_5 = \frac{V_m}{5\pi} [1 - \cos(\frac{5\pi}{2})] = \frac{V_m}{5\pi}$
    *   $V_5 = \frac{V_m}{5\pi}$

The Fourier series for this pulse ($T=4\tau$):
$v(t) = \frac{V_m}{4} + \sum_{n=1}^{\infty} \left( \frac{V_m}{n\pi} \sin\left(\frac{n\pi}{2}\right) \cos(n\omega_0 t) + \frac{V_m}{n\pi} [1 - \cos(\frac{n\pi}{2})] \sin(n\omega_0 t) \right)$

**Important Point to Remember:** The width of the pulse ($\tau$) relative to the period ($T$) significantly affects the harmonic content. A narrower pulse (smaller $\tau/T$) generally leads to a wider distribution of harmonics and a lower THD if other factors are equal.

**Practice Question 1:**
A non-linear load draws a current described by the waveform:
$i(t) = 10 + 5 \sin(\omega_0 t) + 2 \sin(3\omega_0 t) + 1 \sin(5\omega_0 t)$ Amperes.
The fundamental frequency $f_0 = 60$ Hz.

a) What is the DC component of the current?
b) What is the RMS value of the fundamental current component?
c) What is the RMS value of the 3rd harmonic current component?
d) What is the RMS value of the 5th harmonic current component?
e) Calculate the Total Harmonic Distortion of the current ($THD_I$).
f) What is the RMS value of the total current?

**Answer to Practice Question 1:**
The current waveform is given in the amplitude-phase form where the cosine coefficients are zero ($A_n=0$ for $n \ge 1$) and the sine coefficients are provided.
The general form is $i(t) = I_{dc} + \sum_{n=1}^{\infty} [I_{n,A} \cos(n\omega_0 t) + I_{n,B} \sin(n\omega_0 t)]$.
In this case, $I_{dc} = 10$ A.
For $n=1$: $I_{1,A} = 0$, $I_{1,B} = 5$ A.
For $n=3$: $I_{3,A} = 0$, $I_{3,B} = 2$ A.
For $n=5$: $I_{5,A} = 0$, $I_{5,B} = 1$ A.
All other harmonic components are zero.

a) **DC component ($I_{dc}$):** $10$ A. (This corresponds to $A_0$ in the Fourier series definition).
b) **RMS value of the fundamental current component ($I_1$):**
    $I_1 = \sqrt{\frac{I_{1,A}^2 + I_{1,B}^2}{2}} = \sqrt{\frac{0^2 + 5^2}{2}} = \sqrt{\frac{25}{2}} = \frac{5}{\sqrt{2}} \approx 3.536$ A.
c) **RMS value of the 3rd harmonic current component ($I_3$):**
    $I_3 = \sqrt{\frac{I_{3,A}^2 + I_{3,B}^2}{2}} = \sqrt{\frac{0^2 + 2^2}{2}} = \sqrt{\frac{4}{2}} = \sqrt{2} \approx 1.414$ A.
d) **RMS value of the 5th harmonic current component ($I_5$):**
    $I_5 = \sqrt{\frac{I_{5,A}^2 + I_{5,B}^2}{2}} = \sqrt{\frac{0^2 + 1^2}{2}} = \sqrt{\frac{1}{2}} \approx 0.707$ A.
e) **Calculate the Total Harmonic Distortion of the current ($THD_I$):**
    $THD_I = \frac{\sqrt{I_3^2 + I_5^2}}{I_1} \times 100\%$
    (Note: For THD calculation, we typically exclude the DC component from the summation of harmonics).
    $THD_I = \frac{\sqrt{(\sqrt{2})^2 + (0.707)^2}}{3.536} \times 100\% = \frac{\sqrt{2 + 0.5}}{3.536} \times 100\%$
    $THD_I = \frac{\sqrt{2.5}}{3.536} \times 100\% = \frac{1.581}{3.536} \times 100\% \approx 44.72\%$
f) **What is the RMS value of the total current ($I_{rms}$)?**
    $I_{rms} = \sqrt{I_{dc}^2 + I_1^2 + I_3^2 + I_5^2}$
    $I_{rms} = \sqrt{10^2 + (\frac{5}{\sqrt{2}})^2 + (\sqrt{2})^2 + (0.707)^2}$
    $I_{rms} = \sqrt{100 + \frac{25}{2} + 2 + 0.5} = \sqrt{100 + 12.5 + 2 + 0.5} = \sqrt{115} \approx 10.724$ A.

**Practice Question 2:**
A voltage waveform is given by $v(t) = 100 \sin(120\pi t) + 30 \cos(360\pi t) + 20 \sin(600\pi t)$ Volts.
The fundamental frequency is 60 Hz.

a) Identify the order and RMS value of each harmonic component.
b) Calculate the RMS value of the fundamental component.
c) Calculate the THD for this voltage waveform.
d) Calculate the RMS value of the total voltage waveform.

**Answer to Practice Question 2:**
The fundamental frequency $f_0 = 60$ Hz, so $\omega_0 = 2\pi f_0 = 120\pi$ rad/s.
The waveform is given as $v(t) = 100 \sin(120\pi t) + 30 \cos(360\pi t) + 20 \sin(600\pi t)$.

The general form for Fourier series is $v(t) = A_0 + \sum_{n=1}^{\infty} [A_n \cos(n\omega_0 t) + B_n \sin(n\omega_0 t)]$.
We need to match the given terms to this form.

*   Term 1: $100 \sin(120\pi t)$. This matches $B_1 \sin(\omega_0 t)$ with $B_1 = 100$ A. So, $A_1=0$.
*   Term 2: $30 \cos(360\pi t)$. Since $360\pi = 3 \times 120\pi$, this is the 3rd harmonic. This matches $A_3 \cos(3\omega_0 t)$ with $A_3 = 30$ V. So, $B_3=0$.
*   Term 3: $20 \sin(600\pi t)$. Since $600\pi = 5 \times 120\pi$, this is the 5th harmonic. This matches $B_5 \sin(5\omega_0 t)$ with $B_5 = 20$ V. So, $A_5=0$.
*   The DC component ($A_0$) is zero as there is no constant term.

a) **Identify the order and RMS value of each harmonic component:**
    *   **Fundamental (n=1):** Harmonic order is 1. $A_1=0$, $B_1=100$ V.
        RMS value of fundamental component ($V_1$) = $\sqrt{\frac{A_1^2 + B_1^2}{2}} = \sqrt{\frac{0^2 + 100^2}{2}} = \sqrt{\frac{10000}{2}} = \sqrt{5000} \approx 70.71$ V.
    *   **3rd Harmonic (n=3):** Harmonic order is 3. $A_3=30$ V, $B_3=0$.
        RMS value of 3rd harmonic component ($V_3$) = $\sqrt{\frac{A_3^2 + B_3^2}{2}} = \sqrt{\frac{30^2 + 0^2}{2}} = \sqrt{\frac{900}{2}} = \sqrt{450} \approx 21.21$ V.
    *   **5th Harmonic (n=5):** Harmonic order is 5. $A_5=0$, $B_5=20$ V.
        RMS value of 5th harmonic component ($V_5$) = $\sqrt{\frac{A_5^2 + B_5^2}{2}} = \sqrt{\frac{0^2 + 20^2}{2}} = \sqrt{\frac{400}{2}} = \sqrt{200} \approx 14.14$ V.
    *   All other harmonic orders ($n=2, 4, 6, \dots$) are zero.

b) **Calculate the RMS value of the fundamental component:**
    As calculated in part (a), $V_1 \approx 70.71$ V.

c) **Calculate the THD for this voltage waveform:**
    $THD_V = \frac{\sqrt{V_3^2 + V_5^2 + V_7^2 + \dots}}{V_1} \times 100\%$
    $THD_V = \frac{\sqrt{V_3^2 + V_5^2}}{V_1} \times 100\%$ (since other harmonics are zero)
    $THD_V = \frac{\sqrt{(\sqrt{450})^2 + (\sqrt{200})^2}}{ \sqrt{5000}} \times 100\%$
    $THD_V = \frac{\sqrt{450 + 200}}{\sqrt{5000}} \times 100\% = \frac{\sqrt{650}}{\sqrt{5000}} \times 100\%$
    $THD_V = \sqrt{\frac{650}{5000}} \times 100\% = \sqrt{0.13} \times 100\% \approx 36.06\%$

d) **Calculate the RMS value of the total voltage waveform:**
    $V_{rms} = \sqrt{V_{dc}^2 + V_1^2 + V_3^2 + V_5^2}$
    $V_{rms} = \sqrt{0^2 + (\sqrt{5000})^2 + (\sqrt{450})^2 + (\sqrt{200})^2}$
    $V_{rms} = \sqrt{0 + 5000 + 450 + 200} = \sqrt{5650} \approx 75.17$ V.

---

## Harmonic Analysis using Fourier Transforms

While Fourier Series is used for periodic waveforms, Fourier Transforms are used for non-periodic waveforms. However, in power systems, we are primarily concerned with periodic or quasi-periodic waveforms. Fourier Transforms are more relevant when analyzing transient phenomena or specific signal processing aspects that might involve non-periodic components. For the purpose of standard harmonic analysis in power systems, Fourier Series is the primary tool.

**Learning Outcome Addressed:**
*   **CO2:** Apply Fourier concepts for harmonic analysis. (Knowledge Level: K3) - While Fourier Series is the main tool for periodic waveforms, understanding the broader concept of frequency decomposition via Fourier Transforms reinforces the understanding of harmonic analysis.

**Key Concepts & Definitions:**
*   **Fourier Transform (FT):** A mathematical tool that decomposes a non-periodic function into its constituent frequencies.
    *   $X(f) = \int_{-\infty}^{\infty} x(t) e^{-j2\pi f t} dt$ (Continuous Fourier Transform)
    *   $X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$ (Angular Frequency Domain)
*   **Inverse Fourier Transform (IFT):** Reconstructs the original signal from its frequency domain representation.
    *   $x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega$
*   **Relationship between FT and FS:** A periodic signal can be seen as the limit of a non-periodic signal with an infinitely increasing period. The Fourier Transform of a periodic signal with period $T$ will consist of impulses at the fundamental frequency and its harmonics, with the areas of these impulses proportional to the Fourier Series coefficients.

**Relevance to Power Quality:**
While not directly used for calculating harmonic content of steady-state periodic waveforms (that's Fourier Series), Fourier Transforms are conceptually important for:
*   **Transient analysis:** Understanding how short-duration events (like switching) introduce harmonics.
*   **Digital Signal Processing:** In modern power quality analyzers, waveforms are sampled and processed digitally. The Discrete Fourier Transform (DFT) and its efficient implementation, the Fast Fourier Transform (FFT), are used. The FFT is essentially an algorithm to compute the DFT.
*   **Understanding the spectrum:** The Fourier Transform provides a continuous spectrum of frequencies present in a signal, whereas the Fourier Series provides discrete frequency components for periodic signals.

**Digital Signal Processing (DSP) and FFT:**
Modern power quality monitoring relies heavily on DSP techniques.
*   **Sampling:** The analog voltage and current waveforms are sampled at discrete points in time.
*   **DFT:** The Discrete Fourier Transform converts a finite sequence of discrete-time samples into a finite sequence of discrete frequency components.
    *   $X_k = \sum_{n=0}^{N-1} x_n e^{-j 2\pi kn/N}$ for $k = 0, 1, \dots, N-1$.
    *   Where $N$ is the number of samples.
*   **FFT:** A computationally efficient algorithm for calculating the DFT. It is widely used in real-time power quality analysis.

**How FFT is used for Harmonic Analysis:**
1.  **Acquire Data:** Sample the voltage and current waveforms over a specific period (e.g., one or a few cycles).
2.  **Apply FFT:** Compute the FFT of the sampled data.
3.  **Identify Frequency Bins:** The FFT output provides magnitudes and phases at specific frequency bins. The frequency resolution (spacing between bins) depends on the sampling frequency ($f_s$) and the number of samples ($N$): $\Delta f = f_s / N$.
4.  **Calculate Harmonics:** For a fundamental frequency $f_0$, the harmonic frequencies will correspond to specific bins: $f_0, 2f_0, 3f_0, \dots$. The magnitudes at these bins represent the amplitude of the harmonic components.
5.  **Calculate THD:** Similar to the Fourier Series approach, the RMS values of the harmonic components are determined from the FFT output, and THD is calculated.

**Example Application (Conceptual):**
If a power quality meter samples a voltage waveform at $f_s = 4800$ Hz for $N=128$ samples, the fundamental frequency of interest is $f_0 = 60$ Hz.
The frequency resolution is $\Delta f = 4800 / 128 = 37.5$ Hz.
The harmonic frequencies would be at multiples of $f_0$:
*   Fundamental (n=1): $1 \times 60 = 60$ Hz. This would be around the $60 / 37.5 = 1.6$ bin. Due to sampling and windowing, it might fall between bins or require careful interpolation.
*   3rd Harmonic (n=3): $3 \times 60 = 180$ Hz. This would be around the $180 / 37.5 = 4.8$ bin.
*   5th Harmonic (n=5): $5 \times 60 = 300$ Hz. This would be around the $300 / 37.5 = 8$ bin.

**Important Considerations with FFT:**
*   **Windowing:** To reduce spectral leakage (where energy from one frequency bin "leaks" into adjacent bins), windowing functions (e.g., Hanning, Hamming) are often applied to the time-domain data before the FFT.
*   **Coherent Sampling:** To get precise harmonic magnitudes, the sampling frequency and the number of samples should be chosen such that an integer number of fundamental cycles is captured. This makes the harmonic frequencies fall exactly on the FFT bins, avoiding spectral leakage.

**Textbook References:**
*   Dugan et al., 2012: Chapter 7.3 discusses digital methods for harmonic analysis, including FFT.
*   Sankaran, 2002: Chapter 3.3 discusses the FFT approach.
*   Bollen, 1999: Chapter 3.1 briefly touches on spectral analysis, and later chapters discuss measurement techniques that imply DSP.
*   Singh et al., 2015: Chapter 2.2 discusses FFT for harmonic analysis.

---

## Relating to Course Outcomes

*   **CO1: Identify the sources and effects of power quality problems.**
    *   This module helps understand how harmonics, a major power quality problem, are characterized and quantified using Fourier analysis. This identification is crucial for diagnosing and addressing the problem.
*   **CO2: Apply Fourier concepts for harmonic analysis.**
    *   This entire module is dedicated to applying Fourier Series and understanding the principles behind Fourier Transforms (and FFT) for analyzing harmonic content in voltage and current waveforms.
*   **CO3: Explain the important aspects of power quality monitoring.**
    *   Understanding harmonic analysis is fundamental to power quality monitoring. Knowing how to decompose waveforms into their harmonic components is essential for interpreting the data collected by monitoring equipment. The use of FFT in modern monitoring systems is also highlighted.
*   **CO4: Examine power quality mitigation techniques.**
    *   Once harmonic distortion is identified and quantified through analysis, it becomes possible to select and apply appropriate mitigation techniques (e.g., harmonic filters). The analysis informs the design of these techniques.
*   **CO5: Discuss power quality issues in grid connected renewable energy systems.**
    *   Renewable energy systems, particularly those utilizing power electronic converters (like solar PV inverters and wind turbine converters), are significant sources of harmonics. Understanding harmonic analysis is key to assessing and mitigating the harmonic impact of these sources on the grid.

---

## Summary and Key Takeaways

*   **Harmonics:** Sinusoidal components at integer multiples of the fundamental frequency.
*   **Sources:** Primarily non-linear loads (power electronics).
*   **Effects:** Overheating, reduced efficiency, equipment malfunction, resonance.
*   **Fourier Series:** The mathematical tool for analyzing **periodic** waveforms, decomposing them into a sum of sine and cosine waves at the fundamental and harmonic frequencies.
    *   Key coefficients: $A_0$ (DC), $A_n$ (cosine amplitudes), $B_n$ (sine amplitudes).
    *   RMS value: $V_{rms} = \sqrt{A_0^2 + \frac{1}{2}\sum (A_n^2 + B_n^2)}$.
    *   THD: Measures total harmonic distortion relative to the fundamental.
*   **Symmetries:** Even, odd, and half-wave symmetries can simplify Fourier coefficient calculations.
*   **Fourier Transforms:** Used for **non-periodic** waveforms. In power systems, the digital equivalent, **FFT**, is crucial for real-time analysis by power quality monitoring equipment.
*   **Practical Analysis:** Always consider the waveform's shape, period, and any symmetries to simplify calculations. Be aware of the limitations of numerical analysis (e.g., finite harmonics in practice).

This comprehensive understanding of harmonic analysis using Fourier concepts is essential for anyone involved in power systems and power quality management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
