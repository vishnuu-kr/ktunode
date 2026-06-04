---
title: "Active Notch filter to eliminate the 50Hz power line frequency"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a6"
status: "completed"
scrapedAt: "2026-05-23T17:49:59.309Z"
---
# Linear Integrated Circuits Lab: Module 1 - Familiarization of Operational Amplifiers

## Topic: Active Notch Filter to Eliminate 50Hz Power Line Frequency

### 1. Introduction to Filters

Filters are electronic circuits that allow signals of certain frequencies to pass through while blocking or attenuating signals of other frequencies. They are essential in signal processing for noise reduction, signal separation, and shaping the frequency response of a system.

**Key Concepts:**

*   **Frequency Response:** How a circuit's output amplitude and phase change with the frequency of the input signal.
*   **Passband:** The range of frequencies that a filter allows to pass with minimal attenuation.
*   **Stopband:** The range of frequencies that a filter attenuates significantly.
*   **Cutoff Frequency ($f_c$):** The frequency at which the power of the output signal is reduced by half (or the voltage is reduced to 1/√2, or -3dB).
*   **Bandwidth:** The range of frequencies within the passband.
*   **Attenuation:** The reduction in signal amplitude.

### 2. Types of Filters

Based on their frequency response, filters are classified into:

*   **Low-Pass Filter (LPF):** Passes low frequencies and attenuates high frequencies.
*   **High-Pass Filter (HPF):** Passes high frequencies and attenuates low frequencies.
*   **Band-Pass Filter (BPF):** Passes a specific band of frequencies and attenuates frequencies outside this band.
*   **Band-Stop Filter (BSF) / Notch Filter:** Attenuates a specific band of frequencies and passes all other frequencies.

### 3. Understanding Notch Filters

A **notch filter** (also known as a band-reject filter) is designed to remove or significantly attenuate a narrow band of frequencies while allowing other frequencies to pass relatively unimpeded.

**Application in this Lab:**

The primary objective of this topic is to design and implement an **active notch filter** to eliminate the 50Hz power line frequency, which is a common source of interference in many electronic systems, especially in laboratory environments. This frequency is also known as **hum** or **mains hum**.

### 4. Passive vs. Active Notch Filters

*   **Passive Notch Filters:** Typically constructed using resistors, capacitors, and inductors. They have limitations such as:
    *   Loading effects on the source and load.
    *   Poor Q-factor (quality factor), leading to a wide notch.
    *   Need for bulky and expensive inductors.

*   **Active Notch Filters:** Utilize active components like operational amplifiers (op-amps) along with passive components (resistors and capacitors). They offer several advantages:
    *   **Gain:** Can provide gain to the signal, compensating for losses.
    *   **Buffering:** The op-amp isolates the filter from the source and load, preventing loading effects.
    *   **Flexibility:** Easier to tune the notch frequency and Q-factor.
    *   **No Inductors:** Avoids the use of bulky and non-ideal inductors.

### 5. Designing an Active Notch Filter using Op-Amps

A common and effective active notch filter circuit is the **twin-T notch filter** or **bridged-T notch filter** configuration using an op-amp.

**5.1. The Twin-T Notch Filter Circuit**

The basic twin-T notch filter circuit consists of two T-shaped RC networks. When arranged appropriately and fed into an op-amp, it can create a deep notch at a specific frequency.

**Circuit Diagram:**

A typical configuration involves an op-amp in a non-inverting configuration with the twin-T network connected to its input. The twin-T network consists of:

*   Two T sections:
    *   One T section with two capacitors and one resistor.
    *   Another T section with two resistors and one capacitor.

*(Refer to Figure 7.14 in Linear Integrated Circuits by D. Roy Choudhary and Shail B Jain for a typical circuit diagram of a passive twin-T notch filter, which can be adapted for active implementation. For active implementations, an op-amp is added to the passive twin-T network.)*

**5.2. Component Selection and Notch Frequency Calculation**

The notch frequency ($f_0$) of an ideal twin-T notch filter is determined by the component values. For a symmetrical twin-T network, the notch frequency is given by:

$$f_0 = \frac{1}{2\pi RC}$$

Where:
*   $f_0$ is the notch frequency.
*   $R$ is the resistance value.
*   $C$ is the capacitance value.

**To eliminate the 50Hz power line frequency, we need to set $f_0 = 50Hz$.**

**Design Steps:**

1.  **Choose a standard capacitor value:** Let's choose a common capacitor value, say $C = 1 \mu F$.
2.  **Calculate the required resistance:**
    $R = \frac{1}{2\pi f_0 C}$
    $R = \frac{1}{2\pi \times 50 Hz \times 1 \times 10^{-6} F}$
    $R = \frac{1}{100\pi \times 10^{-6}} = \frac{10^4}{\pi} \approx 3183 \Omega$

    We would typically use a standard resistor value close to this, such as $3.3 k\Omega$. If we use $R = 3.3 k\Omega$ and $C = 1 \mu F$, the notch frequency would be:
    $f_0 = \frac{1}{2\pi \times 3.3 \times 10^3 \Omega \times 1 \times 10^{-6} F} = \frac{1}{2\pi \times 3.3 \times 10^{-3}} \approx 48.2 Hz$
    This is close enough for practical purposes, or we can use a potentiometer for fine-tuning.

3.  **Component values in the twin-T network:**
    *   The two resistors in the series arms of one T section will have a value of $R$.
    *   The resistor in the shunt arm of the other T section will have a value of $R/2$.
    *   The two capacitors in the series arms of one T section will have a value of $C$.
    *   The capacitor in the shunt arm of the other T section will have a value of $C/2$.

    So, with $R = 3.3 k\Omega$ and $C = 1 \mu F$:
    *   Series resistors: $R_1 = R_2 = 3.3 k\Omega$
    *   Shunt resistor: $R_3 = R/2 = 1.65 k\Omega$
    *   Series capacitors: $C_1 = C_2 = 1 \mu F$
    *   Shunt capacitor: $C_3 = C/2 = 0.5 \mu F$

**5.3. Op-Amp Configuration**

The twin-T network can be configured with an op-amp in several ways. A common approach is to use the op-amp in a **non-inverting amplifier configuration** to provide gain and isolation.

*   The output of the twin-T network is fed to the non-inverting input of the op-amp.
*   A feedback network (e.g., a voltage divider with resistors $R_f$ and $R_g$) is used to set the gain of the amplifier in the passband.

**Gain in the Passband:**

For a non-inverting amplifier configuration, the gain is given by:
$$A_v = 1 + \frac{R_f}{R_g}$$

To ensure the filter attenuates the 50Hz frequency effectively while passing other frequencies, the gain in the passband should be set appropriately. For instance, a gain of 1 (0 dB) can be achieved by connecting the non-inverting input directly to the output (unity gain buffer), or a higher gain can be used if needed.

**5.4. Improving the Notch Depth (Q-factor)**

The ideal twin-T notch filter has an infinite attenuation at the notch frequency. However, in practice, the passive twin-T network has a limited Q-factor, resulting in a finite notch depth. The Q-factor of a passive twin-T notch filter is typically low (around 0.25).

To achieve a deeper notch (higher Q-factor), the op-amp can be incorporated in a way that provides positive feedback, effectively increasing the Q. One common method is to use the op-amp in a **bridged-T configuration** or by adding a feedback path that slightly reinforces the cancellation at the notch frequency.

*(Refer to Chapter 7, "Filters" in Linear Integrated Circuits by D. Roy Choudhary and Shail B Jain for detailed discussion on active filter configurations and Q-factor enhancement. The book might present circuits using op-amps to create higher-order filters or improve the performance of basic filter structures.)*

**Example of Q-factor Enhancement (Conceptual):**

Imagine a scenario where a small portion of the output signal is fed back to the input in a way that it precisely counteracts any remaining signal at 50Hz. This is what active filters achieve more effectively than passive ones.

### 6. Practical Considerations and Implementation

**6.1. Choosing the Op-Amp:**

*   **Type:** General-purpose op-amps like the LM741, TL071, or NE5532 can be used. The choice depends on the required bandwidth and noise performance. For audio frequencies and laboratory work, TL071 or NE5532 are often preferred due to their lower noise and better slew rate compared to LM741.
*   **Power Supply:** Ensure the op-amp is powered with appropriate dual supplies (e.g., +12V and -12V) and that decoupling capacitors are used near the op-amp's power pins to prevent oscillations.

**6.2. Component Tolerances:**

*   The accuracy of the notch frequency and the depth of the notch are highly dependent on the tolerance of the resistors and capacitors used.
*   Use components with tight tolerances (e.g., 1% resistors, 5% or 10% capacitors) for better performance.
*   If high precision is required, consider using potentiometers for $R$ and $C$ components to allow for fine-tuning.

**6.3. Simulation using PSPICE:**

Simulation is crucial for verifying the design before physical implementation.

*   **Steps for simulation:**
    1.  Create the circuit schematic in PSPICE (or a similar simulator like LTspice, which is often included with Orcad).
    2.  Place the op-amp, resistors, and capacitors with the calculated values.
    3.  Configure the op-amp with power supply voltages.
    4.  Apply an input signal that contains the 50Hz frequency (e.g., a sine wave at 50Hz mixed with other frequencies).
    5.  Perform an AC analysis (frequency sweep) to observe the frequency response (gain vs. frequency).
    6.  Perform a transient analysis to observe the output waveform in the time domain when a mixed-frequency signal is applied.

*(Refer to Introduction to Pspice Using Orcad for Circuits and Electronics by M. H. Rashid for detailed instructions on setting up and performing AC analysis, transient analysis, and understanding output plots in PSPICE. Chapter 5, "AC Analysis" and Chapter 6, "Transient Analysis" would be particularly relevant.)*

**Example PSPICE Simulation Task:**

*   Design an active notch filter to reject 50Hz.
*   Use an op-amp (e.g., LM741).
*   Set component values: $C = 1 \mu F$, $R = 3.3 k\Omega$. The twin-T network will use these values and $R/2$, $C/2$.
*   Configure the op-amp as a non-inverting amplifier with a passband gain of 1 (unity gain buffer).
*   Apply a sinusoidal input signal at 50Hz with an amplitude of 1V.
*   Run an AC analysis from 1Hz to 1kHz. Plot the magnitude response (gain in dB).
*   Observe the dip in the gain at 50Hz.

**Expected Simulation Output:**

The AC analysis plot should show a significant drop (notch) in the gain at approximately 50Hz. For an ideal filter and perfect component values, the gain at 50Hz would be 0. In simulation with real component values and a non-ideal op-amp, you'll see a significant attenuation.

**6.4. Laboratory Setup and Testing:**

*   **Breadboarding:** Assemble the circuit on a breadboard.
*   **Signal Generator:** Use a function generator to provide the input signal. For testing the notch, use a sine wave generator. You can also inject a signal with multiple frequencies to observe the rejection of 50Hz.
*   **Oscilloscope:** Use an oscilloscope to observe the input and output waveforms.
*   **Function Generator Settings:**
    *   Frequency: Set to 50Hz for initial testing.
    *   Amplitude: Start with a reasonable amplitude (e.g., 1V peak).
    *   Waveform: Sine wave.
*   **Measurement:**
    *   Connect the input signal to the filter.
    *   Observe the output signal on the oscilloscope.
    *   If 50Hz is perfectly rejected, the output amplitude at 50Hz should be significantly lower than the input.
    *   To test the passband, apply signals at frequencies well above and below 50Hz (e.g., 100Hz, 1kHz, 10Hz) and observe the output amplitude. The gain should be close to the designed passband gain.

### 7. Alignment with Course Outcomes

This topic directly addresses several course outcomes:

*   **CO1: Design and implement basic linear integrated circuits using Op Amps.**
    *   We are designing an active filter, which is a fundamental linear integrated circuit application of op-amps. We will implement this circuit using op-amps, resistors, and capacitors. (K4)
*   **CO2: Design and implement basic linear integrated circuits using linear ICs.**
    *   Op-amps are linear ICs. The implementation of the notch filter involves using an op-amp IC. (K4)
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools.**
    *   PSPICE simulation is a key part of this topic, allowing us to design, verify, and understand the behavior of the active notch filter before physical implementation. (K4)
*   **CO4: Effectively troubleshoot a given circuit and analyze it.**
    *   If the implemented circuit doesn't perform as expected (e.g., the notch is not at 50Hz, or the notch depth is insufficient), troubleshooting skills will be required to identify the cause (e.g., component values, connections, op-amp issues) and analyze the circuit's behavior. (K4)

### 8. Important Points to Remember

*   **Notch Frequency Formula:** $f_0 = \frac{1}{2\pi RC}$ is critical for calculating component values.
*   **Twin-T Network Ratios:** Remember the resistor and capacitor ratios ($R, R/2$ and $C, C/2$) for a symmetrical twin-T.
*   **Active vs. Passive:** Active filters offer gain and isolation, making them superior for many applications.
*   **Q-Factor:** Higher Q means a narrower, deeper notch. Op-amps can be used to improve Q.
*   **Simulation is Key:** Always simulate your design before building it to catch errors and verify performance.
*   **Component Tolerances:** Be aware of how component tolerances affect the accuracy of the notch frequency and depth.
*   **50Hz Hum:** This is a common problem, and an active notch filter is an effective solution.

### 9. Practice Questions

**Question 1:**
Design an active notch filter using an op-amp to eliminate a 60Hz interference frequency. Assume you have access to $0.1 \mu F$ capacitors. What values of resistors would you need for the twin-T network, assuming a symmetrical twin-T configuration?

**Answer 1:**
We need to set $f_0 = 60Hz$. Let $C = 0.1 \mu F$.
The required resistance $R$ is:
$R = \frac{1}{2\pi f_0 C} = \frac{1}{2\pi \times 60 Hz \times 0.1 \times 10^{-6} F} = \frac{1}{12\pi \times 10^{-6}} \approx 2652.5 \Omega$.
We can use a standard resistor value of $2.7 k\Omega$.
The twin-T network components would be:
*   Series resistors: $R_1 = R_2 = 2.7 k\Omega$
*   Shunt resistor: $R_3 = R/2 = 1.35 k\Omega$
*   Series capacitors: $C_1 = C_2 = 0.1 \mu F$
*   Shunt capacitor: $C_3 = C/2 = 0.05 \mu F$

If we use $R = 2.7 k\Omega$ and $C = 0.1 \mu F$, the actual notch frequency is:
$f_0 = \frac{1}{2\pi \times 2.7 \times 10^3 \times 0.1 \times 10^{-6}} \approx 58.9 Hz$.

**Question 2:**
Explain the advantages of an active notch filter over a passive notch filter for eliminating mains hum.

**Answer 2:**
Advantages of active notch filters over passive ones include:
*   **Gain:** Active filters can provide gain, compensating for signal attenuation and boosting the desired signal.
*   **Isolation/Buffering:** The op-amp isolates the filter from source and load impedances, preventing loading effects that can alter the filter's frequency response.
*   **Flexibility and Tuning:** Active filters offer greater flexibility in tuning the notch frequency and Q-factor, often without needing inductors.
*   **No Inductors:** Active filters avoid the use of bulky, expensive, and often non-ideal inductors, which are common in passive designs.
*   **Higher Q-factor:** Active configurations can achieve deeper and sharper notches by incorporating feedback mechanisms.

**Question 3:**
When performing an AC analysis of your active notch filter in PSPICE, what key feature would you look for in the magnitude plot to confirm that it's effectively rejecting 50Hz?

**Answer 3:**
In the magnitude plot (gain vs. frequency) from an AC analysis, you would look for a significant **dip or a sharp drop in the gain at the 50Hz frequency**. This dip indicates that the filter is attenuating signals at that specific frequency. The depth of the dip represents the notch depth, and its sharpness is related to the Q-factor.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. References

*   **Linear Integrated Circuits by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021):**
    *   Chapter 7: "Filters" will cover various filter types, including notch filters. Look for sections discussing twin-T or bridged-T notch filters and their active implementations.
*   **Introduction to Pspice Using Orcad for Circuits and Electronics by M. H. Rashid (Pearson, 3rd edition, 2015):**
    *   Chapter 5: "AC Analysis" and Chapter 6: "Transient Analysis" are essential for simulating the frequency response and time-domain behavior of the designed filter.
*   **Op-Amps And Linear Integrated Circuits by Gayakwad (PHI, 2002):**
    *   This book likely contains detailed explanations and circuit examples of active filters, including notch filters.
*   **Linear Integrated Circuits by D Roy Choudhury, Shail Bala Jain (New Age International, (2018)):**
    *   This is a previous edition of the primary textbook and will also contain relevant information on active filters.

This concludes the study notes for the Active Notch Filter to eliminate the 50Hz power line frequency. Remember to consult the textbooks for detailed circuit diagrams and further theoretical explanations.