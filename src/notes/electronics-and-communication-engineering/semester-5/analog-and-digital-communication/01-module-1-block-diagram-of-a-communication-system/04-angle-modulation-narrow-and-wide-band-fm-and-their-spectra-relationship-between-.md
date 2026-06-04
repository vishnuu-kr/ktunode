---
title: "Angle modulation: Narrow and wide band FM and their spectra, relationship between FM and PM, Carson’s rule, pre-emphasis and de-emphasis filtering."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 1: Block diagram of a communication system."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8fb"
status: "completed"
scrapedAt: "2026-05-23T17:52:45.492Z"
---
# ANALOG AND DIGITAL COMMUNICATION

## Module 1: Block Diagram of a Communication System

### Topic: Angle Modulation: Narrow and Wideband FM and Their Spectra, Relationship Between FM and PM, Carson's Rule, Pre-emphasis and De-emphasis Filtering

---

### Learning Outcomes:

*   Understand the fundamentals of angle modulation.
*   Differentiate between Narrowband FM (NBFM) and Wideband FM (WBFM).
*   Analyze the spectral characteristics of FM signals.
*   Establish the relationship between Frequency Modulation (FM) and Phase Modulation (PM).
*   Apply Carson's rule for estimating the bandwidth of FM signals.
*   Explain and implement pre-emphasis and de-emphasis filtering for FM systems.

---

### Key Concepts and Definitions:

*   **Angle Modulation:** A type of modulation where the phase or frequency of the carrier signal is varied in accordance with the message signal.
*   **Frequency Modulation (FM):** A form of angle modulation where the frequency of the carrier signal is varied linearly with the instantaneous amplitude of the message signal.
*   **Phase Modulation (PM):** A form of angle modulation where the phase of the carrier signal is varied linearly with the instantaneous amplitude of the message signal.
*   **Carrier Signal:** A high-frequency sinusoidal signal used to transmit information. It has a constant amplitude and frequency.
*   **Message Signal (Modulating Signal):** The information-bearing signal that needs to be transmitted.
*   **Instantaneous Frequency:** The rate of change of the instantaneous phase of a signal.
*   **Frequency Deviation ($\Delta f$):** The maximum difference between the instantaneous frequency of the FM carrier and its unmodulated (carrier) frequency.
*   **Modulation Index ($\beta$):** A dimensionless quantity that represents the extent of frequency variation in an FM signal. For FM, $\beta = \frac{\Delta f}{f_m}$, where $f_m$ is the maximum modulating frequency.
*   **Narrowband FM (NBFM):** An FM signal where the modulation index ($\beta$) is small, typically $\beta \le 0.3$.
*   **Wideband FM (WBFM):** An FM signal where the modulation index ($\beta$) is large, typically $\beta > 0.3$.
*   **Spectrum:** The distribution of signal power or energy over a range of frequencies.
*   **Bandwidth:** The range of frequencies occupied by a signal.
*   **Carson's Rule:** An empirical rule used to estimate the approximate bandwidth required for an FM signal.
*   **Pre-emphasis:** A technique used in FM transmission to boost the higher frequencies of the message signal before modulation.
*   **De-emphasis:** A complementary technique used in FM reception to attenuate the higher frequencies of the demodulated signal, restoring the original frequency content and reducing noise.

---

### 1. Angle Modulation: Fundamentals

Angle modulation aims to transmit information by varying the angle of a carrier wave. The general form of an angle-modulated signal can be expressed as:

$s(t) = A_c \cos[\omega_c t + \phi(t)]$

where:
*   $A_c$ is the carrier amplitude.
*   $\omega_c$ is the carrier angular frequency ($\omega_c = 2\pi f_c$).
*   $\phi(t)$ is the instantaneous phase of the signal.

In **Frequency Modulation (FM)**, the instantaneous frequency $f_i(t)$ is varied linearly with the message signal $m(t)$:

$f_i(t) = f_c + k_f m(t)$

where:
*   $f_c$ is the carrier frequency.
*   $k_f$ is the frequency sensitivity constant of the modulator.

The instantaneous angular frequency is $\omega_i(t) = 2\pi f_i(t) = \omega_c + k_f' m(t)$, where $k_f' = 2\pi k_f$.

The instantaneous phase $\phi(t)$ is the integral of the instantaneous angular frequency:

$\phi(t) = \int \omega_i(\tau) d\tau = \int (\omega_c + k_f' m(\tau)) d\tau = \omega_c t + k_f' \int m(\tau) d\tau + \phi_0$

Assuming $\phi_0 = 0$, the FM signal is:

$s_{FM}(t) = A_c \cos\left[\omega_c t + k_f' \int m(\tau) d\tau\right]$

The **frequency deviation** $\Delta f$ is the maximum change in the instantaneous frequency from the carrier frequency:

$\Delta f = k_f \max|m(t)|$

The **modulation index** $\beta$ for FM is defined as:

$\beta = \frac{\Delta f}{f_{m_{max}}} = \frac{k_f \max|m(t)|}{f_{m_{max}}}$

where $f_{m_{max}}$ is the maximum frequency component of the message signal.

---

### 2. Narrowband FM (NBFM)

*   **Definition:** NBFM occurs when the modulation index $\beta \le 0.3$. This means the frequency deviation is small compared to the maximum modulating frequency.
*   **Approximation:** For small $\beta$, we can approximate the Bessel function expansion of the FM signal.
    The FM signal is $s_{FM}(t) = A_c \cos(\omega_c t + \beta \sin(\omega_m t))$ (assuming a sinusoidal message signal $m(t) = A_m \sin(\omega_m t)$).
    Using the Taylor series expansion for $\cos(x+y) = \cos x \cos y - \sin x \sin y$, and approximating $\cos(\beta \sin(\omega_m t)) \approx 1$ and $\sin(\beta \sin(\omega_m t)) \approx \beta \sin(\omega_m t)$ for small $\beta$:
    $s_{FM}(t) \approx A_c [\cos(\omega_c t) - \beta \sin(\omega_c t) \sin(\omega_m t)]$
    Using the trigonometric identity $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$:
    $s_{FM}(t) \approx A_c \left[\cos(\omega_c t) - \frac{\beta}{2} \sin(\omega_c t) (\cos(\omega_m t - \omega_m t) - \cos(\omega_c t + \omega_m t))\right]$
    $s_{FM}(t) \approx A_c \left[\cos(\omega_c t) - \frac{\beta}{2} \sin(\omega_c t) (\cos(\omega_m t - \omega_m t) - \cos(\omega_c t + \omega_m t))\right]$
    This approximation is not quite right. Let's re-examine the approximation of the cosine term.
    $s_{FM}(t) = A_c \cos(\omega_c t + \beta \sin(\omega_m t))$
    For small $\beta$, $\beta \sin(\omega_m t)$ is small. We can use the approximation $\cos(A+x) \approx \cos A - x \sin A$ for small $x$.
    $s_{FM}(t) \approx A_c [\cos(\omega_c t) - \beta \sin(\omega_m t) \sin(\omega_c t)]$
    Using $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$:
    $s_{FM}(t) \approx A_c \left[\cos(\omega_c t) - \frac{\beta}{2} (\cos(\omega_c t - \omega_m t) - \cos(\omega_c t + \omega_m t))\right]$
    $s_{FM}(t) \approx A_c \cos(\omega_c t) - \frac{A_c \beta}{2} \cos((\omega_c - \omega_m)t) + \frac{A_c \beta}{2} \cos((\omega_c + \omega_m)t)$

*   **Spectrum:** The NBFM signal consists of a carrier component and two sidebands.
    *   Carrier component: $A_c \cos(\omega_c t)$
    *   Lower sideband component: $-\frac{A_c \beta}{2} \cos((\omega_c - \omega_m)t)$
    *   Upper sideband component: $\frac{A_c \beta}{2} \cos((\omega_c + \omega_m)t)$
    The spectrum of NBFM is very similar to that of Amplitude Modulation (AM), with a carrier and two sidebands located at $\omega_c \pm \omega_m$.
*   **Bandwidth:** For a sinusoidal message signal of frequency $f_m$, the bandwidth of NBFM is $2f_m$. This is the same as AM.

---

### 3. Wideband FM (WBFM)

*   **Definition:** WBFM occurs when the modulation index $\beta > 0.3$. The frequency deviation is significant compared to the maximum modulating frequency.
*   **Spectrum:** The spectrum of WBFM is more complex. It consists of an infinite number of sidebands.
    For a sinusoidal modulating signal $m(t) = A_m \sin(\omega_m t)$, the FM signal is $s_{FM}(t) = A_c \cos(\omega_c t + \beta \sin(\omega_m t))$.
    Using the Jacobi-Anger expansion:
    $s_{FM}(t) = A_c \sum_{n=-\infty}^{\infty} J_n(\beta) \cos(\omega_c t + n \omega_m t)$
    where $J_n(\beta)$ is the Bessel function of the first kind of order $n$.

    The spectrum consists of:
    *   Carrier component at $\omega_c$ with amplitude $A_c J_0(\beta)$.
    *   Sidebands at $\omega_c \pm n \omega_m$ with amplitudes $A_c J_n(\beta)$.

*   **Key Observation:**
    *   The amplitudes of the sidebands depend on the modulation index $\beta$.
    *   As $\beta$ increases, the amplitudes of the lower-order Bessel functions ($J_n(\beta)$ for small $n$) decrease, and the amplitudes of the higher-order Bessel functions increase. This means that more sidebands become significant.
    *   The bandwidth of WBFM is significantly larger than that of NBFM.

*   **Practical Bandwidth Estimation (Carson's Rule):**
    Carson's Rule provides an empirical approximation for the bandwidth of an FM signal. For a message signal with bandwidth $B_m$ (i.e., $f_{m_{max}} = B_m$), the bandwidth $B_{FM}$ is approximated by:

    $B_{FM} \approx 2(\Delta f + f_{m_{max}})$

    Substituting $\Delta f = \beta f_{m_{max}}$:

    $B_{FM} \approx 2(\beta f_{m_{max}} + f_{m_{max}}) = 2 f_{m_{max}} (1 + \beta)$

    Alternatively, using the maximum frequency deviation and the maximum modulating frequency:

    $B_{FM} \approx 2 (f_{m_{max}} + \Delta f)$

    Where $f_{m_{max}}$ is the highest frequency in the modulating signal.

    **Important Note:** Carson's Rule is an approximation. It states that approximately 98% of the total transmitted power is contained within this bandwidth.

---

### 4. Relationship Between FM and PM

Both FM and PM are forms of angle modulation. They differ in how the modulating signal affects the carrier's angle.

Let the message signal be $m(t)$.

**Frequency Modulation (FM):**
The instantaneous frequency is varied: $f_i(t) = f_c + k_f m(t)$
The instantaneous phase is: $\phi_{FM}(t) = \omega_c t + 2\pi k_f \int m(\tau) d\tau$
The FM signal is: $s_{FM}(t) = A_c \cos(\omega_c t + 2\pi k_f \int m(\tau) d\tau)$

**Phase Modulation (PM):**
The instantaneous phase is varied directly proportional to the message signal: $\phi_{PM}(t) = \omega_c t + k_p m(t)$
The PM signal is: $s_{PM}(t) = A_c \cos(\omega_c t + k_p m(t))$

**Relationship:**

We can see that if we integrate the message signal before applying it to a PM modulator, we can generate an FM signal.

Consider a PM system where the modulating signal is $\int m(\tau) d\tau$. Then the PM signal would be:
$s_{PM}'(t) = A_c \cos(\omega_c t + k_p' \int m(\tau) d\tau)$
If we set $k_p' = 2\pi k_f$, then $s_{PM}'(t) = s_{FM}(t)$.
This implies that **FM can be produced by phase modulating with the integral of the message signal.**

Conversely, we can generate a PM signal from an FM signal by differentiating the modulating signal.
If we differentiate the FM signal's phase term:
$\frac{d}{dt} \left( 2\pi k_f \int m(\tau) d\tau \right) = 2\pi k_f m(t)$
So, if we have an FM signal $s_{FM}(t) = A_c \cos(\omega_c t + 2\pi k_f \int m(\tau) d\tau)$, and we apply a frequency shifter (which effectively differentiates the phase), we get:
$s_{FM, diff}(t) = A_c \cos(\omega_c t + 2\pi k_f m(t))$ (ignoring the derivative of the carrier phase which is zero).
If we set $k_p = 2\pi k_f$, then $s_{FM, diff}(t) = s_{PM}(t)$.
This implies that **PM can be produced by frequency modulating with the derivative of the message signal.**

**Key Differences in Spectra:**

*   **FM Spectrum:** For a sinusoidal message, the FM spectrum has a carrier component and sidebands at $\omega_c \pm n\omega_m$. The amplitude of these components is related to $J_n(\beta)$.
*   **PM Spectrum:** For a sinusoidal message $m(t) = A_m \cos(\omega_m t)$, the phase is $\phi_{PM}(t) = k_p A_m \cos(\omega_m t)$. Let $\beta_{PM} = k_p A_m$ be the phase modulation index.
    $s_{PM}(t) = A_c \cos(\omega_c t + \beta_{PM} \cos(\omega_m t))$
    Using the Jacobi-Anger expansion:
    $s_{PM}(t) = A_c \sum_{n=-\infty}^{\infty} J_n(\beta_{PM}) \cos(\omega_c t + n \omega_m t)$
    The spectrum of PM is identical to that of FM if the modulation indices are defined appropriately and the modulating signals are adjusted.
    *   For FM: $\beta = \Delta f / f_{m_{max}}$
    *   For PM: $\beta_{PM} = k_p \max|m(t)|$

    If we want to compare FM and PM with the "same" modulation index using a sinusoidal message $m(t) = A_m \sin(\omega_m t)$:
    *   FM: $\beta = \frac{k_f A_m}{\omega_m/(2\pi)}$
    *   PM: $\beta_{PM} = k_p A_m$

    If we use a *high-pass filter* (integrator) before PM, or a *low-pass filter* (differentiator) after FM, their spectra can be made identical.

---

### 5. Carson's Rule Revisited

*   **Purpose:** To estimate the bandwidth required for an FM signal.
*   **Formula:** $B_{FM} \approx 2 (f_{m_{max}} + \Delta f)$
    or $B_{FM} \approx 2 f_{m_{max}} (1 + \beta)$
*   **Significance:**
    *   It's an approximation, not an exact rule.
    *   It accounts for the carrier and all significant sidebands.
    *   For NBFM ($\beta \ll 1$), $B_{FM} \approx 2 f_{m_{max}}$, similar to AM.
    *   For WBFM ($\beta \gg 1$), $B_{FM} \approx 2 \Delta f$.
*   **Example:**
    Consider an FM signal with a maximum frequency deviation of $\Delta f = 5$ kHz and a maximum modulating frequency of $f_{m_{max}} = 3$ kHz.
    Using Carson's Rule:
    $B_{FM} \approx 2 (3 \text{ kHz} + 5 \text{ kHz}) = 2 (8 \text{ kHz}) = 16 \text{ kHz}$.
    The modulation index is $\beta = \Delta f / f_{m_{max}} = 5 \text{ kHz} / 3 \text{ kHz} \approx 1.67$. This is a WBFM signal.

---

### 6. Pre-emphasis and De-emphasis Filtering

**Problem:** In FM systems, higher frequency components of the modulating signal are more susceptible to noise, especially the type of noise that increases with frequency (e.g., white noise after demodulation). This leads to reduced signal-to-noise ratio (SNR) for these higher frequencies.

**Solution:** Pre-emphasis and De-emphasis.

#### 6.1. Pre-emphasis

*   **Concept:** A process of artificially boosting the higher frequencies of the message signal at the transmitter *before* modulation.
*   **Implementation:** A simple RC high-pass filter is used.
*   **Filter Characteristic:** The gain of the pre-emphasis filter increases with frequency. The rate of increase is typically chosen to match the de-emphasis filter.
*   **Effect:** It makes the high-frequency components of the message signal stronger. This compensates for the greater noise they will experience during transmission.

**Pre-emphasis Filter Transfer Function (Example):**
A common pre-emphasis network has a transfer function of the form:
$H_{pre}(j\omega) = \frac{1 + j\omega R C}{1}$ (simplified for illustration, a proper design considers impedance matching)
Or more formally, to shape the spectrum:
$H_{pre}(j\omega) = K \frac{j\omega/\omega_0}{1 + j\omega/\omega_0}$ where $\omega_0$ is related to the modulating frequencies.

A more practical implementation involves a circuit that boosts frequencies above a certain corner frequency, often by 6 dB per octave.

#### 6.2. De-emphasis

*   **Concept:** A complementary process at the receiver *after* demodulation. It attenuates the higher frequencies of the demodulated signal.
*   **Implementation:** A simple RC low-pass filter is used.
*   **Filter Characteristic:** The gain of the de-emphasis filter decreases with frequency, effectively undoing the boost provided by the pre-emphasis filter.
*   **Effect:**
    *   Restores the original frequency spectrum of the message signal.
    *   Crucially, it also attenuates the high-frequency noise that has been added to the signal during transmission and demodulation. This improves the overall SNR, especially for the higher frequency components of the original message.

**De-emphasis Filter Transfer Function (Example):**
The de-emphasis filter has a transfer function that is the inverse of the pre-emphasis filter (in terms of shaping).
$H_{de}(j\omega) = \frac{1}{1 + j\omega R C}$

**Combined Effect:**
The pre-emphasis filter at the transmitter boosts high frequencies of the message signal, and the de-emphasis filter at the receiver attenuates high frequencies of the received signal (including noise). The net effect is that the original message signal is recovered with its flat frequency response, while the noise, which is typically stronger at higher frequencies, is significantly reduced.

**Standards:**
Pre-emphasis/de-emphasis characteristics are standardized (e.g., by CCIR/ITU). The most common characteristic involves a time constant $\tau = RC$ and a standard is defined by a specific corner frequency (e.g., 75 microseconds for FM broadcasting in many regions).

---

### 7. Examples and Applications

*   **FM Broadcasting:** FM radio uses WBFM to provide higher fidelity and better noise immunity compared to AM. The large bandwidth allows for wider frequency deviation and multiple stereo channels. Pre-emphasis and de-emphasis are used to enhance the SNR.
*   **FM Radio Communication:** Walkie-talkies and other two-way radio systems often use NBFM to conserve bandwidth, as voice communication does not require the high fidelity of broadcasting.

---

### 8. Important Points to Remember

*   **FM vs. PM:** FM varies frequency; PM varies phase. They are related by integration/differentiation of the modulating signal.
*   **NBFM vs. WBFM:** Determined by the modulation index $\beta$. NBFM ($\beta \le 0.3$) has a spectrum similar to AM. WBFM ($\beta > 0.3$) has a more complex spectrum with many sidebands and requires significantly more bandwidth.
*   **Carson's Rule:** $B_{FM} \approx 2 (f_{m_{max}} + \Delta f)$ is a crucial rule of thumb for estimating FM bandwidth.
*   **Pre-emphasis/De-emphasis:** Essential for improving SNR in FM systems by combating frequency-dependent noise. Pre-emphasis boosts high frequencies at the transmitter; de-emphasis attenuates them (and noise) at the receiver.

---

### Practice Questions and Exercises:

**Question 1:**
A sinusoidal message signal $m(t) = 5 \sin(2\pi \times 1000 t)$ is used to modulate a carrier wave $c(t) = 10 \cos(2\pi \times 10^6 t)$. The frequency sensitivity of the FM modulator is $k_f = 100$ Hz/V.

(a) Calculate the frequency deviation $\Delta f$.
(b) Calculate the modulation index $\beta$.
(c) Determine if this is Narrowband FM or Wideband FM.
(d) Using Carson's Rule, estimate the bandwidth of the FM signal.
(e) What would be the bandwidth of an AM signal modulated by the same message signal?

**Answer 1:**
Given:
$A_m = 5$ V
$f_m = 1000$ Hz
$A_c = 10$ V
$f_c = 10^6$ Hz
$k_f = 100$ Hz/V

(a) $\Delta f = k_f \max|m(t)| = 100 \text{ Hz/V} \times 5 \text{ V} = 500$ Hz.

(b) The maximum modulating frequency $f_{m_{max}} = 1000$ Hz.
$\beta = \frac{\Delta f}{f_{m_{max}}} = \frac{500 \text{ Hz}}{1000 \text{ Hz}} = 0.5$.

(c) Since $\beta = 0.5 > 0.3$, this is Wideband FM (WBFM).

(d) Using Carson's Rule:
$B_{FM} \approx 2 (f_{m_{max}} + \Delta f) = 2 (1000 \text{ Hz} + 500 \text{ Hz}) = 2 (1500 \text{ Hz}) = 3000$ Hz or 3 kHz.

(e) The bandwidth of an AM signal modulated by a sinusoidal message of frequency $f_m$ is $2f_m$.
Bandwidth (AM) = $2 \times 1000$ Hz = 2000 Hz or 2 kHz.

---

**Question 2:**
Explain the relationship between FM and PM, and how their spectra can be made identical.

**Answer 2:**
The relationship between FM and PM lies in their implementation via the modulating signal's processing.

*   **FM to PM:** An FM signal is generated by modulating the carrier frequency with the message signal $m(t)$. The phase of an FM signal is proportional to the integral of the message signal: $\phi_{FM}(t) \propto \int m(t) dt$. If we apply this integrated signal to a Phase Modulator, we obtain an FM signal. Thus, FM is equivalent to Phase Modulation with an integrated message signal.

*   **PM to FM:** A PM signal is generated by modulating the carrier phase directly with the message signal $m(t)$: $\phi_{PM}(t) \propto m(t)$. If we apply the derivative of the message signal to a Frequency Modulator, we obtain a PM signal. Thus, PM is equivalent to Frequency Modulation with a differentiated message signal.

**Making Spectra Identical:**
For a sinusoidal modulating signal, the spectral content of FM and PM can be made identical if the modulation indices are appropriately chosen and processing (integration or differentiation) is applied to one of the signals.

Let $m(t) = A_m \cos(\omega_m t)$.
*   **FM:** $s_{FM}(t) = A_c \cos(\omega_c t + \frac{k_f A_m}{\omega_m} \sin(\omega_m t))$. The modulation index is $\beta = \frac{k_f A_m}{\omega_m}$.
*   **PM:** $s_{PM}(t) = A_c \cos(\omega_c t + k_p A_m \cos(\omega_m t))$. The modulation index is $\beta_{PM} = k_p A_m$.

If we set $\beta = \beta_{PM}$, the spectral components at $\omega_c \pm n\omega_m$ will have amplitudes proportional to $J_n(\beta)$ in both cases, making the spectra identical. This means:
$\frac{k_f A_m}{\omega_m} = k_p A_m \implies k_f / \omega_m = k_p$. This implies that the frequency sensitivity of FM should be related to the phase sensitivity of PM by the modulating frequency.

---

**Question 3:**
Describe the purpose and implementation of pre-emphasis and de-emphasis filtering in FM systems.

**Answer 3:**
**Purpose:**
The primary purpose of pre-emphasis and de-emphasis is to improve the signal-to-noise ratio (SNR) of an FM system, particularly for the higher frequency components of the modulating signal. Noise in communication channels, especially atmospheric and man-made noise, often has a spectrum that increases with frequency. When such noise is FM demodulated, its effect on the original message signal is amplified for higher frequencies. Pre-emphasis and de-emphasis counteract this effect.

**Implementation:**

1.  **Pre-emphasis (Transmitter):**
    *   **What it does:** Boosts the amplitude of higher frequency components of the message signal before it is used to modulate the carrier.
    *   **How it's done:** An RC high-pass filter is employed. The filter is designed to provide a gradual increase in gain as the frequency increases above a certain cutoff or corner frequency. For example, the gain might increase by 6 dB per octave for frequencies above the corner frequency.

2.  **De-emphasis (Receiver):**
    *   **What it does:** Attenuates the amplitude of higher frequency components of the demodulated signal.
    *   **How it's done:** An RC low-pass filter is used. This filter's characteristic is designed to be the inverse of the pre-emphasis filter's shaping characteristic. If the pre-emphasis filter boosted frequencies above $f_0$ by 6 dB/octave, the de-emphasis filter will attenuate frequencies above $f_0$ by 6 dB/octave.

**Overall Effect:**
The pre-emphasis filter at the transmitter raises the level of high-frequency message components. During transmission, noise is added to the signal. This noise is often stronger at higher frequencies. The de-emphasis filter at the receiver reduces the level of these high-frequency components of the received signal. Since the original high-frequency message components were boosted, they are recovered close to their original levels. However, the high-frequency noise, which was not boosted at the transmitter, is now significantly attenuated by the de-emphasis filter, leading to an overall improvement in the SNR.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References:

*   **Communication Systems** by Simon Haykin and Michael Moher (Wiley, 5th Edition, 2020): Chapters on Angle Modulation, FM bandwidth, and noise.
*   **Modern Digital and Analog Communication Systems** by B.P. Lathi and Zhi Ding (Oxford University Press, 5th Edition, 2018): Chapters covering FM modulation, narrowband and wideband FM, and pre-emphasis/de-emphasis.
*   **Introduction to Analog and Digital Communication, An Indian adaptation** by Simon Haykin and Michael Moher (Wiley, 2nd Edition, 2022): Relevant sections on FM principles and spectral analysis.

---