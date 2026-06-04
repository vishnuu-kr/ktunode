---
title: "Modulation and demodulation techniques for FM"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf1"
status: "completed"
scrapedAt: "2026-05-23T16:40:10.877Z"
---
# Electronic Communication: Module 2 - Angle Modulation

## Topic: Modulation and Demodulation Techniques for FM

---

### **Introduction to Frequency Modulation (FM)**

Frequency Modulation (FM) is a type of angle modulation where the instantaneous frequency of the carrier wave is varied in accordance with the instantaneous amplitude of the message signal. Unlike Amplitude Modulation (AM), FM is less susceptible to noise and interference, leading to higher fidelity in audio transmission.

**Key Concepts:**

*   **Carrier Wave:** A high-frequency sinusoidal wave that is used to transmit information.
*   **Message Signal (Modulating Signal):** The information signal (e.g., audio, video) that needs to be transmitted.
*   **Frequency Deviation:** The maximum change in the carrier frequency from its unmodulated value.
*   **Modulation Index ($\beta$):** The ratio of the maximum frequency deviation to the modulating signal frequency.

**Mathematical Representation of an FM Signal:**

Let the message signal be $m(t)$ and the carrier wave be $c(t) = A_c \cos(2\pi f_c t)$.

The instantaneous frequency of the FM signal is given by:
$f_i(t) = f_c + k_f m(t)$
where $k_f$ is the frequency sensitivity of the modulator (Hz/Volt).

The instantaneous phase is the integral of the instantaneous angular frequency:
$\phi_i(t) = 2\pi \int f_i(t) dt = 2\pi \int (f_c + k_f m(t)) dt$
$\phi_i(t) = 2\pi f_c t + 2\pi k_f \int m(t) dt$

The FM signal $s(t)$ can be represented as:
$s(t) = A_c \cos(\phi_i(t))$
$s(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int m(t) dt)$

Let $\Delta f = k_f A_m$, where $A_m$ is the maximum amplitude of the message signal.
The modulation index is $\beta = \frac{\Delta f}{f_m}$, where $f_m$ is the maximum frequency of the message signal.

---

### **2.1 FM Modulation Techniques**

FM modulation can be achieved using several methods, broadly classified into direct FM and indirect FM.

#### **2.1.1 Direct FM**

Direct FM involves directly varying the frequency of an oscillator in response to the modulating signal.

**Methods:**

*   **Reactance Modulator:**
    *   **Concept:** Uses a variable reactance element (like a varactor diode or a FET) whose reactance changes with the applied modulating voltage. This variable reactance is coupled to an LC oscillator circuit, causing its frequency to vary.
    *   **Varactor Diode:** A semiconductor diode whose capacitance varies with the reverse bias voltage. When connected in parallel with the tank circuit of an oscillator, the changing capacitance due to the message signal alters the resonant frequency.
    *   **FET (Field-Effect Transistor):** The drain current of a FET varies with the gate-source voltage. By using a FET as a variable resistor or capacitor, its effect on the oscillator's frequency can be controlled by the modulating signal.
    *   **Example:** A reactance tube modulator uses a vacuum tube whose effective plate-to-cathode resistance or capacitance is varied by the modulating signal.

*   **Voltage-Controlled Oscillator (VCO):**
    *   **Concept:** A VCO is an electronic oscillator whose oscillation frequency is proportional to the DC voltage at its input. The modulating signal is applied to the control input of the VCO, directly causing its frequency to deviate.
    *   **Advantages:** Simple, wide frequency deviation possible.
    *   **Disadvantages:** Can drift in frequency and amplitude due to variations in temperature and supply voltage. Often requires frequency stabilization techniques.

*   **Parametric Modulator:**
    *   **Concept:** Utilizes a nonlinear element (like a varactor diode) whose parameter (capacitance) is periodically varied by a pump signal. When a modulating signal is also applied to this parameter, the output frequency is modulated.

**Limitations of Direct FM:**

*   **Frequency Stability:** Direct FM oscillators can be prone to drift in their unmodulated carrier frequency due to environmental factors (temperature, voltage). This makes it difficult to achieve the precise carrier frequencies required for broadcasting.
*   **Limited Modulation Index:** For simple direct FM circuits, achieving a large modulation index might be challenging without causing significant amplitude distortion.

#### **2.1.2 Indirect FM (Armstrong Method)**

Indirect FM, also known as the Armstrong method, generates an FM signal by first generating a phase-modulated (PM) signal and then integrating the modulating signal to produce phase modulation. This method offers better frequency stability.

**Steps:**

1.  **Generate a Phase-Modulated (PM) Signal:**
    *   The message signal $m(t)$ is first passed through a **phase splitter** (or integrator) to produce a signal proportional to the integral of the message signal: $\int m(t) dt$.
    *   This integrated signal is then used to phase-modulate a **narrowband carrier wave**.
    *   Let the carrier be $c(t) = A_c \cos(2\pi f_c t)$.
    *   The phase-modulated signal $s_{PM}(t)$ is given by:
        $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p \int m(t) dt)$
        where $k_p$ is the phase sensitivity of the PM modulator.

2.  **Frequency Multiplication:**
    *   The PM signal is then passed through a series of **frequency multipliers** (e.g., doublers, triplers).
    *   When a PM signal is frequency multiplied, the frequency deviation and modulation index are also multiplied by the same factor.
    *   If the PM signal is multiplied by a factor $N$, the resulting signal will have a frequency deviation $N \times (k_p A_m)$, which becomes the desired frequency deviation for FM.
    *   The modulation index $\beta = \frac{N k_p A_m}{f_m}$ can be increased significantly by choosing a large $N$.

3.  **Carrier Frequency Adjustment:**
    *   The modulated carrier frequency is adjusted to the final desired carrier frequency by mixing it with other frequencies. This is often done using a **mixer** and a **local oscillator**.

**Advantages of Indirect FM:**

*   **Excellent Frequency Stability:** Achieved by using a stable crystal-controlled oscillator for the initial carrier.
*   **Wide Range of Modulation Index:** The modulation index can be adjusted over a wide range by selecting appropriate frequency multipliers.

**Disadvantages of Indirect FM:**

*   **Complexity:** Requires more components and stages compared to direct FM.
*   **Bandwidth Considerations:** The narrowband PM signal needs to be carefully managed during frequency multiplication to avoid excessive bandwidth expansion that could lead to distortion.

---

### **2.2 FM Demodulation Techniques**

FM demodulators are circuits that convert the frequency variations of an FM signal back into the original message signal. They must be sensitive to frequency changes but insensitive to amplitude changes.

#### **2.2.1 Slope Detector**

*   **Concept:** A simple FM detector that uses a tuned circuit (like an LC circuit) whose center frequency is slightly offset from the carrier frequency. The output of the tuned circuit is an AM signal whose amplitude varies with the frequency deviation of the FM signal. This AM signal is then detected using a standard AM detector (e.g., envelope detector).
*   **Operation:**
    *   Consider a resonant circuit tuned to $f_c + \Delta f_o$ (where $\Delta f_o$ is the offset from the carrier frequency).
    *   When the FM signal's frequency is below $f_c + \Delta f_o$, the output amplitude is relatively low.
    *   As the frequency increases towards $f_c + \Delta f_o$, the output amplitude increases linearly (on the slope of the resonance curve).
    *   As the frequency moves above $f_c + \Delta f_o$, the output amplitude decreases.
    *   This amplitude variation is then detected by an envelope detector.
*   **Limitations:**
    *   **Nonlinearity:** The output is only linear over a narrow frequency range (the slope of the resonance curve). If the frequency deviation is large, the detector becomes nonlinear, causing distortion.
    *   **Amplitude Sensitivity:** It is sensitive to amplitude variations in the incoming FM signal, which can introduce noise and distortion. This requires a limiter circuit before the slope detector.

#### **2.2.2 Balanced Slope Detector (or Discriminator)**

*   **Concept:** A more advanced version of the slope detector that uses two tuned circuits with resonant frequencies symmetrically placed around the carrier frequency. This improves linearity and reduces distortion.
*   **Circuit:** Typically consists of two parallel resonant circuits, one tuned slightly above the carrier frequency ($f_c + \Delta f_o$) and the other slightly below ($f_c - \Delta f_o$). The outputs of these circuits are then processed by a differential amplifier or summed in a way that produces a voltage proportional to the frequency deviation.
*   **Advantages:** Better linearity and reduced amplitude sensitivity compared to a single slope detector.
*   **Limitations:** Still requires a limiter to remove amplitude variations.

#### **2.2.3 Foster-Seeley Discriminator**

*   **Concept:** A widely used and effective FM demodulator that provides a linear output voltage that is proportional to the frequency deviation of the input FM signal. It achieves this by using a combination of a transformer and tuned circuits.
*   **Circuit:** Consists of a primary tuned circuit and two secondary coils coupled to the primary. The FM signal is applied to the primary. A center-tapped transformer is often used. The output of the primary is fed to the center tap of the secondary. The secondary coils are tuned to the carrier frequency. Diodes are connected to the ends of the secondary coils.
*   **Operation:** The phase of the voltage across the secondary coils shifts relative to the voltage across the primary as the input frequency changes. This phase shift causes the current through the diodes to vary, resulting in a detected output voltage proportional to the frequency deviation.
*   **Key Feature:** Requires a **limiter** stage before the discriminator to remove any amplitude variations.
*   **Bandwidth:** The bandwidth of the Foster-Seeley discriminator must be wider than the bandwidth of the FM signal to avoid distortion.

#### **2.2.4 Ratio Detector**

*   **Concept:** Similar to the Foster-Seeley discriminator but designed to be less sensitive to amplitude variations in the input signal, thus reducing the need for a highly effective limiter.
*   **Circuit:** Also uses a transformer and tuned circuits, but the diodes are connected in series with a capacitor across the secondary coils. The output is taken across this capacitor.
*   **Operation:** The relative amplitudes of the voltages from the two secondary coils change with frequency deviation, but the ratio of these voltages is what is primarily detected. The large capacitor smooths out the rectified voltage, making it less sensitive to amplitude variations.
*   **Advantages:** Less sensitive to amplitude variations than the Foster-Seeley discriminator.
*   **Disadvantages:** Slightly more complex than the Foster-Seeley discriminator.

#### **2.2.5 Phase-Locked Loop (PLL) Demodulator**

*   **Concept:** A PLL is a feedback control system that generates an output signal whose phase matches the phase of an input signal. In an FM demodulator, the PLL locks onto the incoming FM signal, and its voltage-controlled oscillator (VCO) tracks the frequency variations. The control voltage supplied to the VCO is the demodulated output.
*   **Components:**
    *   **Phase Detector:** Compares the phase of the input FM signal with the phase of the VCO output.
    *   **Loop Filter:** Filters the output of the phase detector to provide a smooth control voltage.
    *   **Voltage-Controlled Oscillator (VCO):** Generates an output signal whose frequency is controlled by the loop filter's output.
*   **Operation:** The PLL attempts to maintain a zero phase difference between the input FM signal and the VCO output. When the input FM signal frequency changes, the phase detector output changes, which in turn adjusts the VCO frequency to match the input. The voltage controlling the VCO is thus a replica of the original modulating signal.
*   **Advantages:** Excellent linearity, low distortion, good noise immunity, and can track wide frequency deviations. The PLL itself acts as a narrowband filter, effectively rejecting noise outside its loop bandwidth.
*   **Example:** Used in FM receivers for high-fidelity audio.

#### **2.2.6 Quadrature Detector (or Phase Shift Detector)**

*   **Concept:** This detector utilizes the property that the phase shift of an FM signal is proportional to the rate of change of its frequency.
*   **Circuit:** It typically involves a phase shifter and a multiplier. The incoming FM signal is split into two paths: one directly to a multiplier, and the other through a phase shifter. The phase shifter is designed such that its phase shift is approximately 90 degrees at the carrier frequency and changes with frequency deviation. The output of the phase shifter is fed to the multiplier.
*   **Operation:** The phase relationship between the two signals applied to the multiplier changes with the frequency deviation of the FM signal. The multiplier produces an output proportional to the product of the two signals. When the phase shift is designed correctly (e.g., 90 degrees at $f_c$), the output of the multiplier will be proportional to the original modulating signal.
*   **Advantages:** Can be implemented using integrated circuits.
*   **Limitations:** Requires precise tuning and component matching.

---

### **2.3 Comparison of Modulation and Demodulation Techniques**

| Feature                  | Direct FM                                         | Indirect FM                                       | Slope Detector                                    | Foster-Seeley Discriminator                     | Ratio Detector                                      | PLL Demodulator                                   |
| :----------------------- | :------------------------------------------------ | :------------------------------------------------ | :------------------------------------------------ | :------------------------------------------------ | :-------------------------------------------------- | :------------------------------------------------ |
| **Frequency Stability**  | Poor (prone to drift)                             | Excellent (crystal-controlled)                    | Poor (depends on tuned circuits)                  | Good (requires stable carrier)                    | Good (requires stable carrier)                      | Excellent (active feedback)                       |
| **Modulation Index**     | Limited (without complex circuits)                | Wide range (via multipliers)                      | Limited (by linearity)                            | Wide range possible                               | Wide range possible                                 | Wide range possible                               |
| **Complexity**           | Simple                                            | Complex                                           | Simple                                            | Moderate                                          | Moderate                                            | Moderate to Complex (depending on implementation) |
| **Bandwidth Efficiency** | Good                                              | Good                                              | Good                                              | Good                                              | Good                                                | Good                                              |
| **Noise Immunity**       | Moderate                                          | Good                                              | Poor (requires limiter)                           | Good (requires limiter)                           | Better than Foster-Seeley (less reliant on limiter) | Excellent                                         |
| **Distortion**           | Can be prone to amplitude distortion if not careful | Low                                               | High if deviation is large or no limiter          | Low if limiter is used and bandwidth is sufficient  | Low if limiter is used and bandwidth is sufficient  | Very Low                                          |

---

### **2.4 Key Concepts for Course Outcomes**

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   While this CO focuses on AM, understanding AM modulation/demodulation principles (like envelope detection) helps in appreciating why FM requires different techniques (like limiters and discriminators) because FM is inherently frequency-based, not amplitude-based.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   **FM Spectrum:** An FM signal occupies a wider bandwidth than an AM signal for the same modulating signal due to the generation of sidebands whose number depends on the modulation index ($\beta$). Bessel functions describe the amplitude of these sidebands. Carson's Rule provides an approximation for the bandwidth: $BW_{FM} \approx 2(\Delta f + f_m) = 2f_m(1+\beta)$.
    *   **Power:** The power in an FM signal is constant, regardless of the modulating signal's amplitude or frequency. This is a significant advantage over AM where power varies with the modulating signal.
    *   **Efficiency:** FM is generally more power-efficient than AM because the constant carrier power is fully utilized to transmit the sidebands, and there's no carrier power wasted as in AM (where a significant portion of power is in the carrier).
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   While this CO is about digital systems, the concepts of modulation and demodulation are fundamental to both analog and digital communication. The understanding of carrier waves, modulating signals, and frequency/phase shifts in FM is foundational for understanding digital modulation schemes like FSK (Frequency Shift Keying), which is a digital form of FM.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   This CO builds upon the understanding of modulation. The principles of how frequency or phase is manipulated to carry information in FM are directly transferable to understanding how digital states (0s and 1s) are mapped to specific frequencies or phases in digital modulation techniques like FSK, PSK, and QAM.

---

### **2.5 Important Points to Remember**

*   **FM is Angle Modulation:** The instantaneous frequency (or phase) of the carrier is varied by the message signal.
*   **Frequency Deviation ($\Delta f$) and Modulation Index ($\beta$):** Key parameters defining the extent of frequency variation and its relationship to the modulating signal.
*   **Direct FM vs. Indirect FM:** Direct FM is simpler but less stable; Indirect FM is more complex but provides superior frequency stability.
*   **Limiter:** A crucial component in FM demodulators (except PLL and Ratio Detector to some extent) to remove amplitude noise and variations before frequency detection.
*   **Bandwidth:** FM signals generally require wider bandwidths than AM signals (Carson's Rule).
*   **Constant Power:** FM transmitters transmit at constant power, leading to higher power efficiency compared to AM.
*   **Noise Immunity:** FM offers superior noise immunity compared to AM, especially for high modulation indices.
*   **Demodulators:** Slope, Balanced Slope, Foster-Seeley, Ratio Detector, PLL, and Quadrature detectors are common FM demodulation techniques, each with its own advantages and disadvantages.
*   **PLL:** A versatile and high-performance FM demodulator.

---

### **2.6 Practice Questions and Exercises**

**Question 1:**
Explain the difference between direct FM and indirect FM modulation techniques. Discuss the advantages and disadvantages of each.

**Answer:**
*   **Direct FM:** Varies the frequency of an oscillator directly using a reactance modulator or VCO.
    *   *Advantages:* Simpler circuitry.
    *   *Disadvantages:* Poor frequency stability, limited modulation index without complex designs.
*   **Indirect FM (Armstrong Method):** Generates a phase-modulated signal from an integrated message signal and then multiplies its frequency.
    *   *Advantages:* Excellent frequency stability (using crystal oscillators), wide range of modulation index achievable.
    *   *Disadvantages:* More complex circuitry.

**Question 2:**
Describe the working principle of a Foster-Seeley discriminator. Why is a limiter necessary before this circuit?

**Answer:**
A Foster-Seeley discriminator uses a transformer with a center-tapped secondary and two tuned circuits. The frequency variations of the FM signal cause phase shifts in the voltages across the secondary coils, which when detected by diodes and summed, produce an output proportional to the frequency deviation. A limiter is necessary to remove any amplitude variations from the incoming FM signal, as the Foster-Seeley discriminator is sensitive to amplitude changes and would otherwise introduce distortion.

**Question 3:**
A message signal $m(t) = 5 \sin(2\pi \times 1000t)$ Hz modulates a carrier wave. The frequency sensitivity of the FM modulator is $k_f = 5000$ Hz/V. Calculate the frequency deviation and the modulation index.

**Answer:**
*   Amplitude of message signal, $A_m = 5$ V.
*   Frequency of message signal, $f_m = 1000$ Hz.
*   Frequency sensitivity, $k_f = 5000$ Hz/V.

*   **Frequency Deviation ($\Delta f$):**
    $\Delta f = k_f \times A_m$
    $\Delta f = 5000 \, \text{Hz/V} \times 5 \, \text{V} = 25000 \, \text{Hz}$ or $25 \, \text{kHz}$.

*   **Modulation Index ($\beta$):**
    $\beta = \frac{\Delta f}{f_m}$
    $\beta = \frac{25000 \, \text{Hz}}{1000 \, \text{Hz}} = 25$.

**Question 4:**
What is the primary advantage of using a PLL as an FM demodulator compared to a Foster-Seeley discriminator?

**Answer:**
The primary advantage of a PLL as an FM demodulator is its significantly better linearity and lower distortion, particularly for wide frequency deviations. Additionally, the PLL inherently acts as a narrowband filter, providing excellent noise immunity without the explicit need for a separate, high-performance limiter stage.

**Question 5:**
An FM signal with a carrier frequency of 100 MHz and a maximum frequency deviation of 75 kHz is transmitted. The modulating signal has a maximum frequency of 15 kHz. Using Carson's Rule, estimate the bandwidth of the FM signal.

**Answer:**
Carson's Rule for FM bandwidth is:
$BW_{FM} \approx 2(\Delta f + f_m)$
Given:
*   $\Delta f = 75 \, \text{kHz}$
*   $f_m = 15 \, \text{kHz}$

$BW_{FM} \approx 2(75 \, \text{kHz} + 15 \, \text{kHz})$
$BW_{FM} \approx 2(90 \, \text{kHz})$
$BW_{FM} \approx 180 \, \text{kHz}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **References**

*   **Kennedy's Electronic Communication Systems by Kennedy, Davis and Prasanna (6th Edition):** Provides detailed explanations of FM modulation and demodulation circuits, including reactance modulators, VCOs, and various discriminators.
*   **Electronic Communication Systems – Fundamentals through Advanced by Wayne Tomasi (5th edition):** Offers comprehensive coverage of angle modulation, including mathematical derivations of FM signals and comparisons of modulation and demodulation techniques.
*   **Communication Systems by Simon Haykin and Michael Mohre (5th Edition):** Explains the theoretical underpinnings of FM, including spectrum analysis and noise performance, and provides in-depth treatment of PLLs for FM demodulation.
*   **Principles of Communication Systems by Taub & Schilling (4th edition):** Covers the fundamental aspects of FM generation and detection, with a focus on circuit implementations and their performance characteristics.

---
---