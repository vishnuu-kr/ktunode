---
title: "Transmission impairments - Attenuation, Delay distortion, Noise."
subject: "DATA COMMUNICATION"
module: "Module 1: Communication model "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bedd"
status: "completed"
scrapedAt: "2026-05-20T16:51:36.702Z"
---
# DATA COMMUNICATION: Module 1 - Communication Model

## Topic: Transmission Impairments

Transmission impairments are any changes that a signal undergoes from the time it is transmitted to the time it is received. These changes degrade the signal quality and can lead to errors in data communication. Understanding these impairments is crucial for designing effective communication systems.

### Learning Outcomes:

*   **Understand the concept of transmission impairments in data communication.**
*   **Define and explain attenuation, including its causes and effects.**
*   **Define and explain delay distortion, including its causes and effects.**
*   **Define and explain noise, including its types and effects.**
*   **Recognize how these impairments impact the quality of transmitted signals.**
*   **Identify methods or concepts for mitigating the effects of these impairments (though detailed mitigation techniques might be in later modules).**

---

### 1. Attenuation

#### Key Concepts and Definitions:

*   **Attenuation:** The gradual loss of signal strength as it propagates through a transmission medium. It's essentially the signal getting weaker over distance.
*   **Causes of Attenuation:**
    *   **Resistance of the medium:** Materials used in cables have inherent resistance, which converts electrical energy into heat.
    *   **Spreading of the signal:** As a signal travels, it spreads out, reducing its power density. This is particularly relevant for electromagnetic waves.
    *   **Absorption by the medium:** The transmission medium can absorb some of the signal energy.
*   **Measurement of Attenuation:**
    *   Attenuation is typically measured in **decibels (dB)**.
    *   A positive dB value indicates gain (amplification), while a negative dB value indicates loss (attenuation).
    *   The formula for attenuation in dB is:
        $$ \text{Attenuation (dB)} = 10 \log_{10} \left( \frac{\text{Output Power}}{\text{Input Power}} \right) $$
        or
        $$ \text{Attenuation (dB)} = 20 \log_{10} \left( \frac{\text{Output Voltage}}{\text{Input Voltage}} \right) $$ (for voltage, assuming impedance is constant)
*   **Effects of Attenuation:**
    *   **Weakened signal:** The signal becomes too weak to be reliably detected by the receiver.
    *   **Increased error rate:** When a signal is weak, it is more susceptible to being misinterpreted as noise, leading to bit errors.
    *   **Reduced transmission distance:** The greater the attenuation, the shorter the distance a signal can travel before becoming unusable.

#### Example:

Imagine you're talking on a long telephone line. The further away the person you're talking to is, the quieter your voice becomes for them. This is an example of attenuation. In data communication, if a signal travels too far down a copper cable, its strength will decrease, and the receiver might struggle to interpret the data correctly.

#### Important Points to Remember:

*   Attenuation is a **loss** of signal power.
*   It **increases with distance** and frequency.
*   It's measured in **decibels (dB)**.
*   Receivers need a minimum signal strength to function.

---

### 2. Delay Distortion

#### Key Concepts and Definitions:

*   **Delay Distortion (or Attenuation Distortion):** Occurs when different frequencies within a signal travel at different speeds through a transmission medium. This causes the various frequency components of the signal to arrive at the receiver at slightly different times.
*   **Causes of Delay Distortion:**
    *   **Non-uniform propagation speed:** The speed of signal propagation in a medium is often dependent on the frequency of the signal. This is especially true for guided media like cables.
    *   **Dispersion:** The phenomenon where the speed of a wave depends on its frequency.
*   **Effects of Delay Distortion:**
    *   **Signal smearing:** The arrival of different frequency components at different times causes the signal to spread out or "smear" in time.
    *   **Inter-symbol interference (ISI):** When the smearing of one bit overlaps with the next bit, making it difficult for the receiver to distinguish between them. This significantly increases the error rate.

#### Example:

Consider a signal composed of several pure tones (different frequencies). If the transmission medium causes the higher frequency tones to travel faster than the lower frequency tones, they will arrive at the destination at different times. This will distort the original waveform of the signal. In digital communication, if bits are represented by pulses, and different frequency components within those pulses travel at different speeds, the pulses can spread out and overlap with adjacent pulses, causing ISI.

#### Important Points to Remember:

*   Delay distortion is about **different speeds for different frequencies**.
*   It leads to **signal smearing** and **inter-symbol interference (ISI)**.
*   It is a significant problem for high-speed data transmission.
*   Equalizers are often used to compensate for delay distortion.

---

### 3. Noise

#### Key Concepts and Definitions:

*   **Noise:** Any unwanted form of energy that tends to degrade the quality of a signal. It is an additive disturbance that contaminates the transmitted signal.
*   **Sources of Noise:**
    *   **Thermal Noise (Johnson-Nyquist Noise):** Generated by the random motion of electrons within conductors due to temperature. It is present in all electronic devices and transmission media.
        *   **Characteristics:** Uniformly distributed across all frequencies (white noise), proportional to temperature and bandwidth.
    *   **Intermodulation Noise:** Occurs when signals at different frequencies share the same non-linear medium. The non-linearity mixes these signals, creating new signals at frequencies that are the sum or difference of the original frequencies.
    *   **Crosstalk:** Occurs when a signal on one communication line affects the signal on an adjacent line. This is common in cables with multiple conductors.
    *   **Impulse Noise:** Characterized by short-duration, high-amplitude pulses. It's often caused by external disturbances like lightning, electrical sparks, or faulty switches.
        *   **Characteristics:** Irregular, unpredictable, and can corrupt data bits significantly.
*   **Effects of Noise:**
    *   **Degradation of signal quality:** Makes the signal harder to distinguish from the background noise.
    *   **Increased error rate:** Corrupts the transmitted data, leading to bit errors.
    *   **Reduced data transmission rates:** Systems may need to reduce speed or retransmit data to maintain accuracy in the presence of noise.

#### Example:

*   **Thermal Noise:** Even in a perfectly designed circuit, there will always be a small amount of noise due to the thermal agitation of electrons. This is like a faint hiss you might hear on an un-tuned radio.
*   **Intermodulation Noise:** Imagine two radio stations broadcasting on nearby frequencies. If your radio's amplifier is slightly non-linear, it might mix these two signals, creating a new, unwanted signal that interferes with your reception.
*   **Crosstalk:** While talking on the phone, you might hear faint voices from another conversation if the wires are too close together.
*   **Impulse Noise:** A burst of static on a radio transmission caused by a lightning strike miles away.

#### Important Points to Remember:

*   Noise is **unwanted energy** that interferes with the signal.
*   It is the **most common cause of errors** in data communication.
*   **Thermal noise** is always present.
*   **Impulse noise** is sporadic but can be very damaging.
*   Signal-to-Noise Ratio (SNR) is a measure of signal quality in the presence of noise.

---

### Practice Questions and Exercises:

**Question 1:**
What is attenuation, and why is it a problem in data communication?

**Answer:**
Attenuation is the gradual loss of signal strength as it propagates through a transmission medium. It's a problem because it weakens the signal to the point where the receiver may not be able to detect it reliably, leading to increased error rates and limiting the maximum transmission distance.

**Question 2:**
Explain the concept of delay distortion and its primary consequence.

**Answer:**
Delay distortion occurs when different frequency components of a signal travel at different speeds through a medium. Its primary consequence is signal smearing, which can lead to inter-symbol interference (ISI), making it difficult for the receiver to distinguish between consecutive bits.

**Question 3:**
List and briefly describe at least three types of noise encountered in data communication.

**Answer:**
1.  **Thermal Noise:** Generated by random electron motion due to temperature; present in all electronic devices.
2.  **Crosstalk:** Interference from signals on adjacent communication lines.
3.  **Impulse Noise:** Short, high-amplitude pulses caused by external disturbances like lightning or switching events.

**Question 4:**
A signal has an input power of 10mW and an output power of 2mW. Calculate the attenuation in decibels.

**Answer:**
$$ \text{Attenuation (dB)} = 10 \log_{10} \left( \frac{2 \text{mW}}{10 \text{mW}} \right) $$
$$ \text{Attenuation (dB)} = 10 \log_{10} (0.2) $$
$$ \text{Attenuation (dB)} \approx 10 \times (-0.69897) $$
$$ \text{Attenuation (dB)} \approx -6.99 \text{ dB} $$

*(Note: The negative sign indicates attenuation. Conventionally, attenuation is expressed as a positive value representing the loss, so we can say the attenuation is 6.99 dB)*

**Question 5:**
Which type of impairment is most likely to cause inter-symbol interference (ISI)?

**Answer:**
Delay distortion is the primary impairment that causes inter-symbol interference (ISI).

---

### Summary of Key Concepts:

*   **Transmission Impairments:** Changes to a signal that degrade its quality.
*   **Attenuation:** Loss of signal strength over distance. Measured in dB.
*   **Delay Distortion:** Different frequencies travel at different speeds, causing signal smearing and ISI.
*   **Noise:** Unwanted energy that contaminates the signal. Common types include thermal, intermodulation, crosstalk, and impulse noise.
*   All these impairments increase the **error rate** of data transmission.

---
