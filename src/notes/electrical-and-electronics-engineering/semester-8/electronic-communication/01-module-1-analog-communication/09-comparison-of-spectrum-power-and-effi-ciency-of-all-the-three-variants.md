---
title: "comparison of spectrum, power and effi-ciency of all the three variants"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 1: Analog Communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bea"
status: "completed"
scrapedAt: "2026-05-23T16:40:02.363Z"
---
## Module 1: Analog Communication - Comparison of Spectrum, Power, and Efficiency

**Subject:** Electronic Communication
**Module:** Module 1: Analog Communication
**Topic:** Comparison of Spectrum, Power, and Efficiency of Amplitude Modulation (AM), Frequency Modulation (FM), and Phase Modulation (PM)

---

### 1. Introduction to Analog Modulation

Analog modulation is a technique used to transmit analog information signals (like voice or audio) over a carrier wave. The process involves varying one or more parameters of the carrier wave (amplitude, frequency, or phase) in accordance with the instantaneous amplitude of the modulating signal. This is essential for efficient transmission and to overcome limitations of direct transmission, such as antenna size and bandwidth limitations.

**Key Concepts:**

*   **Modulating Signal ($m(t)$):** The information-bearing signal.
*   **Carrier Signal ($c(t)$):** A high-frequency sinusoidal wave used for transmission. Typically represented as $A_c \cos(2\pi f_c t + \phi_c)$.
*   **Modulated Signal ($s(t)$):** The resulting signal after modulation.
*   **Bandwidth:** The range of frequencies occupied by a signal.
*   **Power Efficiency:** The ratio of the power in the useful modulated signal to the total transmitted power.
*   **Spectrum:** The distribution of power or energy of a signal over a range of frequencies.

---

### 2. Amplitude Modulation (AM)

In Amplitude Modulation (AM), the amplitude of the carrier wave is varied in proportion to the instantaneous amplitude of the modulating signal. The frequency and phase of the carrier remain constant.

**Mathematical Representation:**

Let the modulating signal be $m(t)$ and the carrier signal be $c(t) = A_c \cos(2\pi f_c t)$.
The AM signal is given by:
$s_{AM}(t) = A_c [1 + k_a m(t)] \cos(2\pi f_c t)$
where $k_a$ is the amplitude sensitivity.

**Variants of AM:**

*   **Standard AM (Double Sideband-Full Carrier - DSB-FC):** The above equation represents standard AM.
*   **Double Sideband-Suppressed Carrier (DSB-SC):** $s_{DSB-SC}(t) = m(t) \cos(2\pi f_c t)$ (or a scaled version).
*   **Single Sideband (SSB):** Transmits only one sideband (either Upper Sideband - USB or Lower Sideband - LSB).

---

#### 2.1. Spectrum of AM

*   **Standard AM (DSB-FC):**
    *   The spectrum consists of the carrier frequency ($f_c$) and two sidebands: Upper Sideband (USB) and Lower Sideband (LSB).
    *   If $W$ is the bandwidth of the modulating signal $m(t)$, then the bandwidth of the AM signal is $2W$.
    *   The spectrum includes a strong component at $f_c$ and components around $f_c \pm f_m$, where $f_m$ are the frequencies present in $m(t)$.
    *   **Spectrum Occupied:** $f_c - W$ to $f_c + W$.

*   **DSB-SC:**
    *   Similar to standard AM but without the carrier component.
    *   The spectrum still occupies a bandwidth of $2W$.

*   **SSB:**
    *   Transmits only one sideband.
    *   The bandwidth is reduced to $W$.

**Referencing Textbooks:**
*   **Kennedy's Electronic Communication Systems:** Discusses the spectral components of AM in detail, including the carrier and sidebands.
*   **Tomasi's Electronic Communication Systems:** Provides graphical representations of AM spectra.
*   **Haykin & Mohre's Communication Systems:** Explains the derivation of the AM spectrum from the time-domain equation.

---

#### 2.2. Power of AM

*   **Standard AM (DSB-FC):**
    *   Total Transmitted Power ($P_{T, AM}$) = Power in Carrier + Power in Sidebands.
    *   $P_{T, AM} = P_c + P_{SB}$
    *   $P_c = \frac{A_c^2}{2R}$ (where R is the load resistance, usually assumed to be 1 Ohm for analysis).
    *   $P_{SB} = \frac{A_c^2 k_a^2 P_{m, avg}}{2R}$ (where $P_{m, avg}$ is the average power of the modulating signal).
    *   **Crucially:** A significant portion of the power is in the carrier, which does not carry information.
    *   The power distribution depends on the **modulation index ($\mu = k_a A_{m, max}$)**.
    *   $P_{T, AM} = \frac{A_c^2}{2R} (1 + \frac{\mu^2}{2})$

*   **DSB-SC:**
    *   $P_{T, DSB-SC} = \frac{A_c^2}{2R} \frac{m_{rms}^2}{2R}$ (assuming $m(t)$ is normalized for simplicity, or proportional to its RMS value).
    *   All transmitted power is in the sidebands, carrying information.

*   **SSB:**
    *   Power is further reduced as only one sideband is transmitted. The power is approximately half of the DSB-SC power (assuming symmetric spectrum for $m(t)$).

**Referencing Textbooks:**
*   **Taub & Schilling's Principles of Communication Systems:** Provides detailed power calculations for AM variants.
*   **Ziemer & Tranter's Principles of Communications:** Explains the trade-offs in power distribution in AM.

---

#### 2.3. Efficiency of AM

*   **Standard AM (DSB-FC):**
    *   **Very Low Power Efficiency.**
    *   Efficiency ($\eta$) = $\frac{P_{SB}}{P_{T, AM}} = \frac{P_{SB}}{P_c + P_{SB}}$
    *   $\eta = \frac{\mu^2/2}{1 + \mu^2/2} = \frac{\mu^2}{2 + \mu^2}$
    *   The maximum efficiency is achieved when $\mu=1$, giving $\eta = 1/3$ or 33.3%. For $\mu < 1$, efficiency is even lower.
    *   This low efficiency is due to the power wasted in the carrier.

*   **DSB-SC:**
    *   **Higher Efficiency than Standard AM.**
    *   Since the carrier is suppressed, all power is in the sidebands, which carry information.
    *   Efficiency is theoretically 100%, but in practice, some carrier leakage can occur.

*   **SSB:**
    *   **Highest Efficiency among AM variants.**
    *   Transmitting only one sideband further reduces the power requirement for the same information content compared to DSB-SC.
    *   Theoretically 100% efficient in transmitting the necessary sideband power.

**Referencing Textbooks:**
*   **Lathi & Ding's Modern Digital and Analog Communication Systems:** Compares the efficiencies of different AM types and introduces the concept of "useful power."
*   **Couch's Digital and Analog Communication Systems:** Highlights the practical implications of AM efficiency on power consumption.

---

### 3. Frequency Modulation (FM)

In Frequency Modulation (FM), the frequency of the carrier wave is varied in proportion to the instantaneous amplitude of the modulating signal. The amplitude of the carrier remains constant.

**Mathematical Representation:**

$s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau)$
where $k_f$ is the frequency sensitivity.
The instantaneous frequency is $f_i(t) = f_c + k_f m(t)$.
The **frequency deviation ($\Delta f$)** is the maximum change in instantaneous frequency from $f_c$, i.e., $\Delta f = k_f A_{m, max}$.
The **modulation index ($\beta$)** for FM is defined as $\beta = \frac{\Delta f}{W}$ (where $W$ is the bandwidth of $m(t)$).

**Referencing Textbooks:**
*   **Kennedy's Electronic Communication Systems:** Explains the fundamental principles of FM and introduces the modulation index.
*   **Haykin & Mohre's Communication Systems:** Provides a comprehensive mathematical treatment of FM signals.

---

#### 3.1. Spectrum of FM

*   **Bandwidth of FM:** The bandwidth required for FM is significantly larger than for AM and depends on the modulation index ($\beta$) and the bandwidth of the modulating signal ($W$).
*   **Carson's Rule:** A widely used approximation for FM bandwidth is given by:
    $BW_{FM} \approx 2( \Delta f + W) = 2W(\beta + 1)$
*   **Spectrum Content:** The spectrum of an FM signal is continuous and consists of an infinite number of sidebands spaced at intervals of the highest frequency component of the modulating signal. The amplitude of these sidebands decreases as their frequency separation from the carrier increases.
*   **For small $\beta$ (Narrowband FM - NBFM):** The spectrum is similar to AM-DSB-SC, with a carrier and two sidebands. Bandwidth $\approx 2W$.
*   **For large $\beta$ (Wideband FM - WBFM):** The spectrum is much wider, with many significant sidebands. The bandwidth is dominated by $2 \Delta f$.

**Example:**
If $W = 5$ kHz (e.g., audio bandwidth) and $\Delta f = 75$ kHz (typical for broadcast FM), then $\beta = 75/5 = 15$.
$BW_{FM} \approx 2(75 + 5) = 160$ kHz.
This is significantly wider than the $2W = 10$ kHz for AM.

**Referencing Textbooks:**
*   **Tomasi's Electronic Communication Systems:** Illustrates FM spectra for different modulation indices.
*   **Taub & Schilling's Principles of Communication Systems:** Derives the Bessel functions that describe the amplitudes of FM sidebands.

---

#### 3.2. Power of FM

*   **Constant Amplitude:** The amplitude of the FM carrier ($A_c$) remains constant.
*   **Total Transmitted Power ($P_{T, FM}$):** Since the amplitude is constant, the total transmitted power is also constant, regardless of the modulating signal.
    $P_{T, FM} = \frac{A_c^2}{2R}$
*   **Distribution of Power:** All the transmitted power is contained within the sidebands. There is no dedicated carrier power like in standard AM. The power is distributed among the carrier and an infinite number of sidebands. For practical purposes, only a finite number of significant sidebands are considered, dictated by the modulation index.

**Referencing Textbooks:**
*   **Haykin & Mohre's Communication Systems:** Emphasizes that FM power is independent of the modulating signal's amplitude.
*   **Ziemer & Tranter's Principles of Communications:** Discusses the implications of constant power transmission in FM.

---

#### 3.3. Efficiency of FM

*   **High Power Efficiency:** FM systems generally exhibit higher power efficiency compared to standard AM.
*   **Reason:** All the transmitted power is utilized to carry information, as there is no wasted power in a dedicated carrier component.
*   **Trade-off:** The increased power efficiency comes at the cost of increased bandwidth. FM is more bandwidth-efficient than power-efficient, whereas AM is more power-efficient than bandwidth-efficient.
*   **Noise Immunity:** FM offers superior noise immunity compared to AM, especially for large modulation indices, which contributes to its perceived higher quality despite the wider bandwidth.

**Referencing Textbooks:**
*   **Lathi & Ding's Modern Digital and Analog Communication Systems:** Compares the power efficiency of FM with AM and PM.
*   **Couch's Digital and Analog Communication Systems:** Discusses the trade-off between bandwidth and power efficiency in FM.

---

### 4. Phase Modulation (PM)

In Phase Modulation (PM), the phase of the carrier wave is varied in proportion to the instantaneous amplitude of the modulating signal. The amplitude and frequency of the carrier remain constant.

**Mathematical Representation:**

$s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$
where $k_p$ is the phase sensitivity.
The instantaneous phase is $\phi_i(t) = 2\pi f_c t + k_p m(t)$.
The **phase deviation ($\Delta \phi$)** is the maximum change in phase, i.e., $\Delta \phi = k_p A_{m, max}$.
The **modulation index ($\beta$)** for PM is defined as $\beta = \Delta \phi$.

**Relationship between FM and PM:**
PM can be considered a special case of FM where the modulating signal is differentiated before frequency modulation. Conversely, FM can be obtained from PM by integrating the modulating signal before phase modulation.
If $m(t)$ is the modulating signal for PM, then $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$.
If $m'(t)$ is the modulating signal for FM with frequency deviation $\Delta f = k_f$, then $s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau)$.
If we set $k_p m(t) = 2\pi k_f \int_0^t m(\tau) d\tau$, then $k_p m(t) = 2\pi k_f \int_0^t m(\tau) d\tau$. Differentiating both sides with respect to $t$: $k_p m'(t) = 2\pi k_f m(t)$.
So, PM with $m(t)$ is equivalent to FM with $m'(t)$ if $k_p = 2\pi k_f$.

**Referencing Textbooks:**
*   **Tomasi's Electronic Communication Systems:** Clearly explains the mathematical relationship between FM and PM.
*   **Haykin & Mohre's Communication Systems:** Provides rigorous derivations for PM signals.

---

#### 4.1. Spectrum of PM

*   **Bandwidth of PM:** Similar to FM, the bandwidth of a PM signal depends on the modulation index ($\beta = k_p A_{m, max}$) and the bandwidth of the modulating signal ($W$).
*   **Carson's Rule for PM:** $BW_{PM} \approx 2(\Delta \phi \cdot BW_{m'} + W_{m'})$
    *   Where $BW_{m'}$ is the bandwidth of the modulating signal $m(t)$, and $BW_{m'}$ is the bandwidth of its derivative $m'(t)$.
    *   If $m(t)$ has a bandwidth $W$, then $m'(t)$ generally has a higher bandwidth.
    *   For sinusoidal modulating signal $m(t) = A_m \sin(2\pi f_m t)$, $m'(t) = 2\pi f_m A_m \cos(2\pi f_m t)$. The bandwidth remains $f_m$.
    *   In this case, $BW_{PM} \approx 2(\Delta \phi + f_m)$. If we relate $\Delta \phi$ to the peak frequency deviation in FM, $\Delta f = k_p A_{m, max} (2\pi f_m)$, then $\Delta \phi = \frac{\Delta f}{f_m}$.
    *   The bandwidth formula for PM can be approximated as $BW_{PM} \approx 2W(1 + \beta)$ if $m(t)$ is such that its derivative's bandwidth is also $W$, which is often assumed for simplicity in comparing with FM.
*   **Spectrum Content:** Like FM, the spectrum of a PM signal consists of a carrier and an infinite number of sidebands. The amplitudes are again determined by Bessel functions.

**Referencing Textbooks:**
*   **Tomasi's Electronic Communication Systems:** Discusses the spectral characteristics of PM.
*   **Taub & Schilling's Principles of Communication Systems:** Provides analysis of PM spectra.

---

#### 4.2. Power of PM

*   **Constant Amplitude:** The amplitude of the PM carrier ($A_c$) remains constant.
*   **Total Transmitted Power ($P_{T, PM}$):** Similar to FM, the total transmitted power is constant and is given by:
    $P_{T, PM} = \frac{A_c^2}{2R}$
*   **Distribution of Power:** All the transmitted power is effectively used to carry information, distributed among the carrier and sidebands.

**Referencing Textbooks:**
*   **Haykin & Mohre's Communication Systems:** Reinforces the constant power characteristic of PM.
*   **Ziemer & Tranter's Principles of Communications:** Analyzes power in PM transmissions.

---

#### 4.3. Efficiency of PM

*   **High Power Efficiency:** PM systems offer high power efficiency, similar to FM.
*   **Reason:** All transmitted power carries information.
*   **Comparison with FM:**
    *   For a sinusoidal modulating signal, PM and FM have similar bandwidth and power efficiency characteristics when the modulation indices are related appropriately.
    *   The primary difference lies in how the modulating signal affects the carrier parameter. PM directly varies phase, while FM varies frequency, which is the integral of voltage.
*   **Trade-off:** Like FM, PM requires a larger bandwidth compared to AM for similar information transmission.

**Referencing Textbooks:**
*   **Lathi & Ding's Modern Digital and Analog Communication Systems:** Compares the power efficiency of PM with AM and FM.
*   **Couch's Digital and Analog Communication Systems:** Discusses the efficiency aspects of PM.

---

### 5. Comparative Summary: Spectrum, Power, and Efficiency

Here's a table summarizing the comparison of AM (DSB-FC, DSB-SC, SSB), FM, and PM.

| Feature         | Standard AM (DSB-FC)                               | DSB-SC AM                                          | SSB AM                                             | FM                                                                        | PM                                                                        |
| :-------------- | :------------------------------------------------- | :------------------------------------------------- | :------------------------------------------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| **Spectrum**    | Carrier + USB + LSB                                | USB + LSB                                          | Only USB or LSB                                    | Carrier + infinite sidebands (significant ones depend on $\beta$)       | Carrier + infinite sidebands (significant ones depend on $\beta$)       |
| **Bandwidth**   | $2W$                                               | $2W$                                               | $W$                                                | $\approx 2(\Delta f + W) = 2W(\beta + 1)$ (Carson's Rule)                 | $\approx 2W(1 + \beta)$ (approximation, depends on $m'(t)$ bandwidth)     |
| **Power**       | $P_c + P_{SB}$. Significant power in carrier.      | All power in sidebands (carries info).             | Power in one sideband.                             | Constant power, all in sidebands.                                         | Constant power, all in sidebands.                                         |
| **Power Dist.** | Carrier: $\frac{1}{1 + \mu^2/2}$, Sidebands: $\frac{\mu^2/2}{1 + \mu^2/2}$ | 100% in sidebands.                                 | 100% in the transmitted sideband.                  | Distributed among carrier and sidebands (depends on $\beta$).            | Distributed among carrier and sidebands (depends on $\beta$).            |
| **Efficiency**  | **Low** ($\le 33.3\%$)                             | **High** (Theoretically 100% of sideband power) | **Highest** (among AM variants)                    | **High** (all power carries info)                                         | **High** (all power carries info)                                         |
| **Complexity**  | Simple modulator & demodulator.                    | More complex modulator than std. AM.               | Most complex modulator.                            | Complex modulator & demodulator.                                          | Complex modulator & demodulator.                                          |
| **Noise Imm.**  | Poor.                                              | Better than std. AM.                               | Good.                                              | **Excellent** (especially WBFM).                                          | **Excellent** (especially WBFM).                                          |
| **BW vs Power** | Power-efficient, BW-inefficient.                   | BW-inefficient.                                    | BW-efficient.                                      | BW-inefficient, power-efficient.                                          | BW-inefficient, power-efficient.                                          |
| **Applications**| AM Radio Broadcasting.                             | Some specialized communications, telemetry.        | HF radio, professional audio, CB radio.            | FM Radio Broadcasting, TV sound, two-way radio.                           | Radar, telemetry, some mobile communications.                             |

**Important Points to Remember:**

*   **Bandwidth:** FM and PM generally require more bandwidth than AM. SSB AM is the most bandwidth-efficient.
*   **Power Efficiency:** FM and PM are generally more power-efficient than standard AM because all their transmitted power carries information. DSB-SC and SSB AM are also power-efficient. Standard AM wastes significant power in the carrier.
*   **Noise Immunity:** FM and PM offer significantly better noise immunity than AM. This is a major reason for their use in broadcast FM and other applications where signal quality is critical.
*   **Modulation Index:** This parameter is crucial in determining the bandwidth and spectral characteristics of FM and PM signals.
*   **Trade-offs:** There's a fundamental trade-off between bandwidth and power efficiency in communication systems.

---

### 6. Course Outcome Alignment

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   This module has covered the mathematical basis of AM and its variants, laying the groundwork for understanding modulator/demodulator circuits.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   This entire study note is dedicated to explaining these characteristics for AM, FM, and PM, fulfilling this outcome.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   While this module focuses on analog, the concepts of modulation, bandwidth, and efficiency are foundational for understanding digital communication as well, where similar principles apply.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   Understanding analog modulation (spectrum, power, efficiency) provides the necessary context and foundational knowledge to grasp the principles and advantages of digital modulation techniques.

---

### 7. Practice Questions and Answers

**Question 1:**
Which analog modulation scheme is the most power-efficient?
a) Standard AM (DSB-FC)
b) DSB-SC AM
c) SSB AM
d) FM

**Answer:**
d) FM. While SSB AM is also highly power-efficient, FM systems utilize their entire transmitted power for carrying information, leading to high power efficiency, especially when compared to standard AM. Among AM variants, SSB is the most efficient.

**Question 2:**
What is the primary disadvantage of Standard AM (DSB-FC) compared to FM in terms of transmission?
a) Wider bandwidth requirement for FM
b) Lower noise immunity for AM
c) Higher power consumption for AM to achieve similar signal quality
d) All of the above

**Answer:**
d) All of the above. AM requires a much wider bandwidth for equivalent audio quality, has poor noise immunity, and is very power-inefficient due to wasted carrier power.

**Question 3:**
If a modulating signal has a bandwidth of 10 kHz, what is the approximate bandwidth required for an FM signal with a frequency deviation of 50 kHz?
a) 10 kHz
b) 20 kHz
c) 100 kHz
d) 120 kHz

**Answer:**
d) 120 kHz. Using Carson's Rule: $BW_{FM} \approx 2(\Delta f + W) = 2(50 \text{ kHz} + 10 \text{ kHz}) = 2(60 \text{ kHz}) = 120 \text{ kHz}$.

**Question 4:**
True or False: The total transmitted power in an FM system is dependent on the amplitude of the modulating signal.

**Answer:**
False. The total transmitted power in an FM system is constant and depends only on the amplitude of the carrier signal ($A_c$) and the load resistance.

**Question 5:**
Explain the main trade-off when choosing between AM and FM for a communication system.

**Answer:**
The main trade-off is between bandwidth and power efficiency/noise immunity. AM is more power-efficient and requires less bandwidth but has poor noise immunity. FM requires significantly more bandwidth but offers much better noise immunity and higher power efficiency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
