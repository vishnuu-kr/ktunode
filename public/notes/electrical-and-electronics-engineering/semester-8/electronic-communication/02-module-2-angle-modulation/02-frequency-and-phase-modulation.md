---
title: "Frequency and phase modulation"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bef"
status: "completed"
scrapedAt: "2026-05-23T16:40:08.079Z"
---
# Electronic Communication - Module 2: Angle Modulation

## Topic: Frequency Modulation (FM) and Phase Modulation (PM)

This module delves into the fundamental concepts of angle modulation, specifically Frequency Modulation (FM) and Phase Modulation (PM). These techniques are crucial for transmitting information by altering the frequency or phase of a carrier wave in accordance with the message signal.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the basic principles of Frequency Modulation (FM) and Phase Modulation (PM).
*   Derive the mathematical expressions for FM and PM signals.
*   Analyze the spectrum of FM and PM signals.
*   Compare and contrast FM and PM with respect to their characteristics and applications.
*   Understand the concepts of frequency and phase sensitivity.

---

### Course Outcomes Alignment:

*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.** (Knowledge Level: K3) - This topic directly addresses the spectra and characteristics of FM and PM.
*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.** (Knowledge Level: K2) - While this topic focuses on angle modulation, understanding the mathematical foundations of FM/PM helps in appreciating the differences from AM and the principles behind their demodulation (which will be covered in subsequent topics).

---

### Key Concepts and Definitions:

#### 2.1 Introduction to Angle Modulation

Angle modulation is a process where the angle of a carrier wave is varied in proportion to the message signal. This is in contrast to Amplitude Modulation (AM), where the amplitude of the carrier is varied. The primary advantage of angle modulation is its superior noise immunity.

**Carrier Wave:** A high-frequency sinusoidal signal that is used to convey information.
Mathematically, a sinusoidal carrier wave can be represented as:
$c(t) = A_c \cos(2\pi f_c t + \phi_c)$
where:
*   $A_c$ is the amplitude of the carrier.
*   $f_c$ is the carrier frequency.
*   $\phi_c$ is the initial phase of the carrier.

The **instantaneous phase** of the carrier wave is $\theta_i(t) = 2\pi f_c t + \phi_c$.
The **instantaneous frequency** of the carrier wave is the time derivative of the instantaneous phase, divided by $2\pi$:
$f_i(t) = \frac{1}{2\pi} \frac{d\theta_i(t)}{dt} = f_c + \frac{1}{2\pi} \frac{d\phi_c}{dt}$

In angle modulation, either the instantaneous frequency or the instantaneous phase of the carrier is varied in accordance with the message signal.

---

### 2.2 Frequency Modulation (FM)

In Frequency Modulation (FM), the instantaneous frequency of the carrier signal is varied linearly with the message signal. The amplitude and phase of the carrier remain constant.

Let the message signal be $m(t)$ and the carrier signal be $c(t) = A_c \cos(2\pi f_c t)$.

The instantaneous frequency of the FM signal, $f_i(t)$, is given by:
$f_i(t) = f_c + k_f m(t)$
where:
*   $f_c$ is the unmodulated carrier frequency.
*   $k_f$ is the **frequency sensitivity** of the modulator (in Hz/Volt). It represents how much the carrier frequency changes for a unit change in the message signal.
*   $m(t)$ is the message signal.

The instantaneous phase of the FM signal, $\theta_i(t)$, is the integral of the instantaneous angular frequency ($2\pi f_i(t)$):
$\theta_i(t) = 2\pi \int_{-\infty}^{t} f_i(\tau) d\tau$
$\theta_i(t) = 2\pi \int_{-\infty}^{t} (f_c + k_f m(\tau)) d\tau$
$\theta_i(t) = 2\pi f_c t + 2\pi k_f \int_{-\infty}^{t} m(\tau) d\tau$

Thus, the FM signal, $s_{FM}(t)$, can be represented as:
$s_{FM}(t) = A_c \cos(\theta_i(t))$
$s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_{-\infty}^{t} m(\tau) d\tau)$

Let $\phi_{FM}(t) = 2\pi k_f \int_{-\infty}^{t} m(\tau) d\tau$. This is the instantaneous phase deviation.
The maximum phase deviation is $\phi_{FM, max} = 2\pi k_f A_m$, where $A_m$ is the maximum amplitude of the message signal.

The **frequency deviation**, $\Delta f$, is defined as the maximum change in the instantaneous frequency from the carrier frequency.
$\Delta f = |f_i(t) - f_c|_{max} = |k_f m(t)|_{max} = k_f A_m$

We can rewrite the FM signal as:
$s_{FM}(t) = A_c \cos(2\pi f_c t + \Delta\phi \int_{-\infty}^{t} m(\tau) d\tau)$
where $\Delta\phi = 2\pi k_f$.

In many texts, the FM signal is expressed using the frequency deviation $\Delta f$:
$s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi \int_{-\infty}^{t} \Delta f \frac{m(\tau)}{A_m} d\tau)$
$s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi \Delta f \int_{-\infty}^{t} \frac{m(\tau)}{A_m} d\tau)$

**Modulation Index ($\beta$):** For a sinusoidal message signal, $m(t) = A_m \cos(2\pi f_m t)$, the modulation index for FM is defined as:
$\beta = \frac{\Delta f}{f_m} = \frac{k_f A_m}{f_m}$
where $f_m$ is the message frequency.
The modulation index indicates the extent to which the carrier frequency is varied relative to the message frequency.

**Bandwidth of FM:**
The bandwidth of an FM signal is significantly wider than that of an AM signal, especially for large modulation indices. Carson's Rule provides an empirical approximation for the bandwidth:
$BW_{FM} \approx 2 (\Delta f + f_m)$
$BW_{FM} \approx 2 f_m (\beta + 1)$

---

#### Example: FM Modulation

Let the carrier signal be $c(t) = 5 \cos(2\pi \times 100 \text{ MHz} t)$.
Let the message signal be $m(t) = 2 \sin(2\pi \times 10 \text{ kHz} t)$ V.
Let the frequency sensitivity be $k_f = 500 \text{ Hz/V}$.

1.  **Calculate the unmodulated carrier frequency:** $f_c = 100$ MHz.
2.  **Calculate the instantaneous frequency:**
    $f_i(t) = f_c + k_f m(t) = 100 \times 10^6 \text{ Hz} + 500 \text{ Hz/V} \times (2 \sin(2\pi \times 10^4 t) \text{ V})$
    $f_i(t) = 100 \times 10^6 + 1000 \sin(2\pi \times 10^4 t)$ Hz.
3.  **Calculate the frequency deviation:**
    $\Delta f = k_f A_m = 500 \text{ Hz/V} \times 2 \text{ V} = 1000$ Hz = 1 kHz.
4.  **Calculate the modulation index:**
    $\beta = \frac{\Delta f}{f_m} = \frac{1000 \text{ Hz}}{10 \text{ kHz}} = \frac{1000 \text{ Hz}}{10 \times 10^3 \text{ Hz}} = 0.1$.
5.  **Calculate the approximate bandwidth using Carson's Rule:**
    $BW_{FM} \approx 2 (\Delta f + f_m) = 2 (1 \text{ kHz} + 10 \text{ kHz}) = 2 (11 \text{ kHz}) = 22$ kHz.

---

### 2.3 Phase Modulation (PM)

In Phase Modulation (PM), the instantaneous phase of the carrier signal is varied linearly with the message signal. The amplitude of the carrier remains constant.

Let the carrier signal be $c(t) = A_c \cos(2\pi f_c t)$.

The instantaneous phase of the PM signal, $\theta_i(t)$, is given by:
$\theta_i(t) = 2\pi f_c t + k_p m(t)$
where:
*   $f_c$ is the unmodulated carrier frequency.
*   $k_p$ is the **phase sensitivity** of the modulator (in radians/Volt). It represents how much the carrier phase changes for a unit change in the message signal.
*   $m(t)$ is the message signal.

The PM signal, $s_{PM}(t)$, can be represented as:
$s_{PM}(t) = A_c \cos(\theta_i(t))$
$s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$

Let $\phi_{PM}(t) = k_p m(t)$. This is the instantaneous phase deviation.
The maximum phase deviation is $\phi_{PM, max} = k_p A_m$.

**Bandwidth of PM:**
Similar to FM, the bandwidth of a PM signal depends on the message signal's bandwidth and the peak phase deviation. For a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$, the phase deviation is $k_p A_m \cos(2\pi f_m t)$.
The bandwidth of PM is also approximated by Carson's Rule:
$BW_{PM} \approx 2 (f_{dev} + f_m)$
However, the "frequency deviation" in PM is not directly defined as in FM. Instead, we consider the maximum rate of change of phase.
The instantaneous frequency of a PM signal is:
$f_i(t) = f_c + \frac{1}{2\pi} \frac{d}{dt}(k_p m(t)) = f_c + \frac{k_p}{2\pi} \frac{dm(t)}{dt}$
The maximum frequency deviation in PM is $\Delta f_{PM} = \frac{k_p}{2\pi} A_m (\text{max rate of change of } m(t))$.
For a sinusoidal $m(t) = A_m \cos(2\pi f_m t)$, $\frac{dm(t)}{dt} = -2\pi f_m A_m \sin(2\pi f_m t)$.
The maximum rate of change is $2\pi f_m A_m$.
So, $\Delta f_{PM} = \frac{k_p}{2\pi} (2\pi f_m A_m) = k_p f_m A_m$.
The modulation index for PM is often defined as the maximum phase deviation: $\beta_{PM} = k_p A_m$.
Then $\Delta f_{PM} = \beta_{PM} f_m$.
Using Carson's Rule for PM:
$BW_{PM} \approx 2 (f_m \beta_{PM} + f_m) = 2 f_m (\beta_{PM} + 1)$.

**Important Note:** For the same message signal amplitude and frequency, and a given carrier, PM can be converted to FM by integrating the message signal before modulation, and FM can be converted to PM by differentiating the message signal before modulation.

---

#### Example: PM Modulation

Let the carrier signal be $c(t) = 3 \cos(2\pi \times 70 \text{ MHz} t)$.
Let the message signal be $m(t) = 1 \sin(2\pi \times 5 \text{ kHz} t)$ V.
Let the phase sensitivity be $k_p = 0.5$ radians/V.

1.  **Calculate the unmodulated carrier frequency:** $f_c = 70$ MHz.
2.  **Calculate the instantaneous phase:**
    $\theta_i(t) = 2\pi f_c t + k_p m(t)$
    $\theta_i(t) = 2\pi (70 \times 10^6) t + 0.5 \text{ rad/V} \times (1 \sin(2\pi \times 5 \times 10^3 t) \text{ V})$
    $\theta_i(t) = 2\pi (70 \times 10^6) t + 0.5 \sin(2\pi \times 5 \times 10^3 t)$ radians.
3.  **Calculate the maximum phase deviation:**
    $\phi_{PM, max} = k_p A_m = 0.5 \text{ rad/V} \times 1 \text{ V} = 0.5$ radians.
4.  **Calculate the equivalent frequency deviation:**
    $\Delta f_{PM} = k_p f_m A_m = 0.5 \times 5 \text{ kHz} \times 1 \text{ V} = 2.5$ kHz.
5.  **Calculate the modulation index (as max phase deviation):** $\beta_{PM} = 0.5$ radians.
6.  **Calculate the approximate bandwidth using Carson's Rule:**
    $BW_{PM} \approx 2 (\Delta f_{PM} + f_m) = 2 (2.5 \text{ kHz} + 5 \text{ kHz}) = 2 (7.5 \text{ kHz}) = 15$ kHz.

---

### 2.4 Spectrum of FM and PM Signals

*   **FM Spectrum:**
    *   For **Narrowband FM (NBFM)**, where $\beta \ll 1$ (typically $\beta < 0.3$):
        The FM signal can be approximated by the first two terms of its Bessel series expansion, similar to DSB-SC.
        $s_{FM}(t) \approx A_c \cos(2\pi f_c t) - A_c \frac{\beta}{2} \sin(2\pi (f_c+f_m)t) + A_c \frac{\beta}{2} \sin(2\pi (f_c-f_m)t)$
        This results in a carrier component and two sidebands at $f_c \pm f_m$.
        $BW_{NBFM} \approx 2f_m$.
    *   For **Wideband FM (WBFM)**, where $\beta \gg 1$ (typically $\beta > 5$):
        The spectrum consists of the carrier component and many pairs of sidebands spaced at multiples of the message frequency ($f_m$). The amplitude of these sidebands is determined by Bessel functions of the first kind.
        The significant sidebands are typically within the range of $f_c \pm (\beta+1)f_m$.
        As $\beta$ increases, the bandwidth increases, and the amplitude of the carrier component decreases. The sidebands become closer in amplitude.

*   **PM Spectrum:**
    *   For PM, the spectrum is also complex and depends on the modulation index ($k_p A_m$).
    *   Similar to FM, for small phase deviations, the spectrum resembles NBFM.
    *   For larger phase deviations, the spectrum becomes more complex, with multiple sidebands.
    *   The bandwidth is also approximated by Carson's Rule.

---

### 2.5 Relation between FM and PM

PM and FM are closely related. The difference lies in how the message signal affects the carrier's instantaneous frequency or phase.

Consider a message signal $m(t)$:

*   **FM from PM:**
    If we modulate a carrier with $m(t)$ using PM, we get $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$.
    The instantaneous frequency is $f_i(t) = f_c + \frac{k_p}{2\pi} \frac{dm(t)}{dt}$.
    If we want to achieve FM, we need the instantaneous frequency to be $f_c + k_f m(t)$.
    This implies that the input to the PM modulator should be the integral of the original message signal: $\int_{-\infty}^{t} m(\tau) d\tau$.
    If we input $\int_{-\infty}^{t} m(\tau) d\tau$ to a PM modulator with phase sensitivity $k_p'$, the output will be:
    $s'_{PM}(t) = A_c \cos(2\pi f_c t + k_p' \int_{-\infty}^{t} m(\tau) d\tau)$.
    The instantaneous frequency is $f'_i(t) = f_c + \frac{k_p'}{2\pi} m(t)$.
    Comparing this with the FM signal equation $f_i(t) = f_c + k_f m(t)$, we see that $k_f = \frac{k_p'}{2\pi}$.
    Thus, to generate FM from a PM modulator, we must integrate the message signal and use a phase sensitivity $k_p' = 2\pi k_f$.

*   **PM from FM:**
    If we modulate a carrier with $m(t)$ using FM, we get $s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_{-\infty}^{t} m(\tau) d\tau)$.
    The instantaneous phase is $\theta_i(t) = 2\pi f_c t + 2\pi k_f \int_{-\infty}^{t} m(\tau) d\tau$.
    If we want to achieve PM, we need the instantaneous phase to be $2\pi f_c t + k_p m(t)$.
    This implies that the input to the FM modulator should be the derivative of the original message signal: $\frac{dm(t)}{dt}$.
    If we input $\frac{dm(t)}{dt}$ to an FM modulator with frequency sensitivity $k_f'$, the output will be:
    $s'_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f' \int_{-\infty}^{t} \frac{dm(\tau)}{d\tau} d\tau)$.
    $s'_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f' m(t))$.
    Comparing this with the PM signal equation $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$, we see that $k_p = 2\pi k_f'$.
    Thus, to generate PM from an FM modulator, we must differentiate the message signal and use a frequency sensitivity $k_f' = \frac{k_p}{2\pi}$.

**Key Takeaway:** For a sinusoidal message signal, the bandwidth and power spectrum of FM and PM are very similar. The main difference lies in how the *deviation* changes with the message signal characteristics.

*   In FM, frequency deviation is proportional to the message signal amplitude ($k_f A_m$).
*   In PM, phase deviation is proportional to the message signal amplitude ($k_p A_m$).

However, when considering the *spectrum* for a sinusoidal message:

*   FM: $s_{FM}(t) = A_c \cos(2\pi f_c t + \beta \sin(2\pi f_m t))$
*   PM: $s_{PM}(t) = A_c \cos(2\pi f_c t + m_{PM} \cos(2\pi f_m t))$ where $m_{PM}$ is the peak phase deviation.

If we define the "modulation index" in a comparable way, the spectra are identical. For example, if we have a sinusoidal message $m(t) = A_m \cos(2\pi f_m t)$:

*   For FM, $\Delta f = k_f A_m$. Let $\beta = \frac{\Delta f}{f_m}$.
*   For PM, phase deviation is $k_p A_m$. Let $\beta_{PM} = k_p A_m$.
    The instantaneous frequency of PM is $f_c + \frac{k_p}{2\pi} \frac{d}{dt}(A_m \cos(2\pi f_m t)) = f_c - \frac{k_p A_m f_m}{1} \sin(2\pi f_m t) = f_c + \frac{\beta_{PM} f_m}{1} \sin(2\pi f_m t)$.
    The peak frequency deviation for PM is $\Delta f_{PM} = \beta_{PM} f_m$.
    If we set $\beta_{PM} = \beta$, then the peak frequency deviations are the same, and the spectral content of FM and PM will be identical.

---

### 2.6 Comparison of FM and PM

| Feature            | Frequency Modulation (FM)                                   | Phase Modulation (PM)                                         |
| :----------------- | :---------------------------------------------------------- | :------------------------------------------------------------ |
| **Carrier Var.**   | Instantaneous frequency is varied linearly with $m(t)$.     | Instantaneous phase is varied linearly with $m(t)$.           |
| **Formula**        | $s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int m(t) dt)$ | $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$               |
| **Deviation**      | Frequency Deviation ($\Delta f = k_f A_m$)                  | Phase Deviation ($\phi_{PM, max} = k_p A_m$)                  |
| **Bandwidth**      | Wider, depends on $\Delta f$ and $f_m$. $BW \approx 2(\Delta f + f_m)$. | Wider, depends on $k_p A_m$ and $f_m$. $BW \approx 2(\beta_{PM} f_m + f_m)$. |
| **Noise Immunity** | Excellent. Amplitude noise is rejected.                     | Excellent. Amplitude noise is rejected.                       |
| **Sensitivity**    | Less sensitive to interfering signals than PM.              | More sensitive to interfering signals than FM.                |
| **Applications**   | FM broadcasting, TV sound, radar, wireless comms.           | Digital comms (e.g., QPSK), telemetry, satellite comms.     |
| **Relationship**   | Can be generated by integrating $m(t)$ and applying PM.   | Can be generated by differentiating $m(t)$ and applying FM.   |

---

### Important Points to Remember:

*   **Angle modulation** (FM & PM) offers superior noise immunity compared to AM.
*   The **carrier amplitude remains constant** in both FM and PM.
*   **Frequency Deviation ($\Delta f$)** is the maximum change in frequency from the carrier in FM.
*   **Phase Deviation ($\phi_{PM, max}$)** is the maximum change in phase from the carrier in PM.
*   The **Modulation Index ($\beta$)** for FM is $\Delta f / f_m$. For PM, it's the maximum phase deviation $k_p A_m$.
*   **Carson's Rule** ($BW \approx 2 (\Delta f + f_m)$) is a useful approximation for FM and PM bandwidth.
*   FM and PM are closely related and can be converted into each other through integration or differentiation of the message signal.
*   **NBFM** ($\beta \ll 1$) has a spectrum similar to DSB-SC with a carrier.
*   **WBFM** ($\beta \gg 1$) has a much wider spectrum with a large number of sidebands.

---

### Practice Questions:

1.  **What is the primary advantage of angle modulation (FM and PM) over amplitude modulation (AM)?**
    *   **Answer:** Superior noise immunity.

2.  **For an FM signal, if the carrier frequency is $f_c = 100$ MHz, the message signal is $m(t) = 3 \sin(2\pi \times 5 \text{ kHz} t)$ V, and the frequency sensitivity is $k_f = 10 \text{ kHz/V}$, calculate:**
    a) The frequency deviation ($\Delta f$).
    b) The modulation index ($\beta$).
    c) The approximate bandwidth using Carson's Rule.
    *   **Answer:**
        a) $\Delta f = k_f A_m = 10 \text{ kHz/V} \times 3 \text{ V} = 30$ kHz.
        b) $\beta = \frac{\Delta f}{f_m} = \frac{30 \text{ kHz}}{5 \text{ kHz}} = 6$.
        c) $BW \approx 2 (\Delta f + f_m) = 2 (30 \text{ kHz} + 5 \text{ kHz}) = 2 (35 \text{ kHz}) = 70$ kHz.

3.  **For a PM signal, if the carrier frequency is $f_c = 75$ MHz, the message signal is $m(t) = 2 \cos(2\pi \times 2 \text{ kHz} t)$ V, and the phase sensitivity is $k_p = 0.2$ radians/V, calculate:**
    a) The maximum phase deviation.
    b) The equivalent frequency deviation.
    c) The approximate bandwidth using Carson's Rule.
    *   **Answer:**
        a) Maximum phase deviation = $k_p A_m = 0.2 \text{ rad/V} \times 2 \text{ V} = 0.4$ radians.
        b) Equivalent frequency deviation = $\Delta f_{PM} = k_p f_m A_m = 0.2 \times 2 \text{ kHz} \times 2 = 0.8$ kHz.
        c) $BW \approx 2 (\Delta f_{PM} + f_m) = 2 (0.8 \text{ kHz} + 2 \text{ kHz}) = 2 (2.8 \text{ kHz}) = 5.6$ kHz.

4.  **Explain how an FM signal can be generated using a PM modulator.**
    *   **Answer:** Integrate the message signal $m(t)$ to obtain $\int m(t) dt$. Then, use this integrated signal as the input to a PM modulator with a phase sensitivity $k_p'$ such that $k_p' = 2\pi k_f$, where $k_f$ is the desired frequency sensitivity for FM.

5.  **Which type of modulation generally requires a wider bandwidth: NBFM or WBFM? Justify your answer.**
    *   **Answer:** WBFM requires a wider bandwidth. This is because WBFM is characterized by a large modulation index ($\beta \gg 1$), which leads to a greater number of significant sidebands and a larger overall frequency spread.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References:

*   **Kennedy’s Electronic Communication Systems by Kennedy, Davis and Prasanna (Tata McGraw Hill, 6th Edition, 2018):** Chapters 7 and 8 cover angle modulation, including detailed explanations of FM and PM, their mathematical formulations, spectra, and bandwidth.
*   **Electronic Communication Systems – Fundamentals through Advanced by Wayne Tomasi (Pearson, 5th edition, 2008):** Chapters 5 and 6 provide comprehensive coverage of FM and PM, including their generation, mathematical models, bandwidth calculations, and comparisons.
*   **Communication Systems by Simon Haykin and Michael Mohre (Wiley, 5th Edition, 2021):** Chapter 5 delves into angle modulation, offering rigorous mathematical treatments of FM and PM, including their spectral analysis and the relationship between them.
*   **Principles of Communication Systems by Taub & Schilling (McGraw-Hill, 4th edition, 2017):** Chapter 5 provides a solid foundation on FM and PM, discussing their characteristics, generation methods, and spectral properties.

---
This concludes the study notes for Frequency and Phase Modulation. Make sure to review the mathematical derivations and examples carefully.