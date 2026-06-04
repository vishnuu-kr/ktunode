---
title: "CW Radar – Block Diagram"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8b8"
status: "completed"
scrapedAt: "2026-05-23T19:15:15.093Z"
---
# SATELLITE AND RADAR COMMUNICATION - Module 4: CW and Frequency Modulated Radar: Doppler Effect

## Topic: CW Radar – Block Diagram

### 1. Introduction to CW Radar

Continuous Wave (CW) radar is a type of radar system that continuously transmits radio waves. Unlike pulsed radars, CW radars do not transmit pulses; they transmit a continuous, uninterrupted signal. This fundamental difference leads to distinct advantages and disadvantages, particularly in its ability to detect moving targets.

**Key Concept:** CW radar transmits a single, continuous radio frequency (RF) carrier wave.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Illustrate the principles of satellite communication. (While this topic is radar, understanding CW radar principles can provide a basis for comparing communication modalities.)
*   **CO3 (K2):** Illustrate Radar Fundamentals like Radar Equation and Applications. (CW radar is a fundamental radar type.)
*   **CO4 (K2):** Compare various types of Radars and tracking techniques. (Understanding CW radar allows for comparison with pulsed radars and its tracking capabilities.)

**Textbook References:**
*   **Skolnik, "Introduction to Radar Systems":** Provides foundational principles of CW radar.
*   **Edde, "Radar: Principles, Technology, Applications":** Discusses practical aspects and applications of CW radar.
*   **Kinsley & Quegan, "Understanding Radar Systems":** Offers insights into the operational characteristics of CW radar.

### 2. Basic Principle of CW Radar

The core principle behind CW radar lies in the **Doppler effect**. When a radar transmits a continuous wave, and this wave reflects off a moving target, the frequency of the reflected wave will be different from the transmitted frequency. This frequency difference, known as the Doppler shift, is directly proportional to the target's radial velocity.

**Key Concepts:**
*   **Doppler Effect:** The change in frequency of a wave in relation to an observer who is moving relative to the wave source.
*   **Radial Velocity:** The component of a target's velocity along the line of sight of the radar.
*   **Doppler Shift ($\Delta f_d$):** The difference between the transmitted frequency ($f_t$) and the received frequency ($f_r$).
    *   $\Delta f_d = f_r - f_t$
*   **Doppler Frequency Formula:** $\Delta f_d = \frac{2 R}{\lambda}$
    *   Where:
        *   $R$ is the radial velocity of the target.
        *   $\lambda$ is the wavelength of the transmitted signal.

**Example:** Imagine a police radar gun measuring the speed of a car. The gun emits a continuous radio wave. When the wave reflects off a moving car, the frequency of the reflected wave changes due to the car's speed. The radar system measures this frequency shift to calculate the car's speed.

**Important Point to Remember:** CW radar is primarily used for detecting and measuring the velocity of moving targets. It is generally poor at determining the range of stationary targets.

### 3. CW Radar Block Diagram

A basic CW radar system consists of several essential components, each playing a crucial role in transmitting, receiving, and processing the radar signal.

**Block Diagram:**

```
+-----------------+     +-------------------+     +--------------------+     +-----------------+
| Transmitter     | --> | Transmit Antenna  | --> | Target             | --> | Receive Antenna | --> Mixer
| (Continuous Wave)|     +-------------------+     +--------------------+     +-----------------+
+-----------------+                                                                     |
                                                                                          |
                                                                                          v
                                                                                    +-----------------+
                                                                                    | Doppler         |
                                                                                    | Processor       |
                                                                                    | (Demodulator/   |
                                                                                    | Filter)         |
                                                                                    +-----------------+
                                                                                          |
                                                                                          v
                                                                                    +-----------------+
                                                                                    | Display         |
                                                                                    | /Indicator      |
                                                                                    +-----------------+
```

**Components and Their Functions:**

*   **Transmitter:**
    *   **Function:** Generates a continuous RF carrier wave at a specific frequency ($f_t$).
    *   **Type:** Typically a solid-state oscillator (e.g., Gunn diode, IMPATT diode) or a low-power vacuum tube oscillator.
    *   **Key Requirement:** Stable frequency output.

*   **Transmit Antenna:**
    *   **Function:** Radiates the transmitted RF signal into space.
    *   **Type:** Can be a directional antenna (like a parabolic dish or horn antenna) to focus the energy towards the target area.

*   **Target:**
    *   **Function:** Reflects the transmitted RF signal. The movement of the target causes a Doppler shift in the reflected signal.

*   **Receive Antenna:**
    *   **Function:** Captures the reflected RF signal from the target.
    *   **Type:** Often a directional antenna similar to the transmit antenna. In some simple CW radars, a single antenna might be used for both transmission and reception, with a method to isolate the transmitted signal from the received signal.

*   **Mixer (or Heterodyne Detector):**
    *   **Function:** This is the heart of the CW radar's Doppler detection. It takes the received RF signal (which has the Doppler shift) and mixes it with a sample of the transmitted RF signal (or a signal derived from it, usually at the same frequency). This mixing process produces intermediate frequencies (IFs) including the Doppler frequency.
    *   **Mathematical Basis:** The output of a mixer includes terms like $(f_t + f_{doppler}) \times f_t$, which results in a term at the Doppler frequency.
    *   **Key Requirement:** The local oscillator signal for the mixer must be phase-locked or have a very stable frequency relationship with the transmitted signal.

*   **Doppler Processor (Demodulator/Filter):**
    *   **Function:** Isolates and processes the Doppler frequency component from the mixer output. This typically involves filtering to remove unwanted frequencies and then demodulating to extract the Doppler shift. In more complex systems, this stage might involve Fourier analysis (like FFT) to identify multiple Doppler frequencies if multiple targets are present.
    *   **Output:** The Doppler frequency, which is directly related to the target's radial velocity.

*   **Display/Indicator:**
    *   **Function:** Presents the detected Doppler frequency and thus the target's velocity to the operator.
    *   **Examples:** A frequency counter, a meter showing velocity, or a numerical display.

**Important Consideration: Isolation**

A significant challenge in CW radar is preventing the strong transmitted signal from overwhelming the much weaker reflected signal from the target. This requires:

*   **Antenna Isolation:** Using separate transmit and receive antennas with sufficient physical separation or beam misalignment so that the transmit beam does not directly illuminate the receive antenna.
*   **Circulators or Isolators:** In single-antenna systems, a circulator is used to direct the transmitted signal to the antenna and the received signal to the receiver, preventing direct leakage.

**Textbook References:**
*   **Skolnik, "Introduction to Radar Systems":** Details the mixer operation and isolation techniques.
*   **Edde, "Radar: Principles, Technology, Applications":** Discusses antenna coupling and isolation methods.

### 4. Advantages and Disadvantages of CW Radar

**Advantages:**

*   **High Sensitivity to Moving Targets:** The Doppler effect allows for excellent detection of moving targets.
*   **Simplicity:** Relatively simple design and construction compared to pulsed radars.
*   **Low Transmitter Power:** Can operate effectively with low transmitter power, making it suitable for battery-operated devices.
*   **Continuous Operation:** Operates continuously, providing constant monitoring.
*   **No Minimum Range Limit:** Unlike pulsed radar, there is no inherent minimum range limitation due to pulse width.

**Disadvantages:**

*   **Inability to Measure Range of Stationary Targets:** Without a Doppler shift, stationary targets are indistinguishable from system noise and interference. Range cannot be determined directly from the Doppler frequency.
*   **Limited to Moving Target Detection:** Primarily used for velocity measurement.
*   **Susceptibility to Interference:** Can be affected by strong clutter (unwanted reflections) and other radio frequency interference.
*   **Cross-talk:** The strong transmitted signal can leak into the receiver, requiring careful isolation.

**Learning Outcome Alignment:**
*   **CO4 (K2):** Comparing CW radar's strengths and weaknesses with other radar types helps in understanding different radar functionalities.

### 5. Applications of CW Radar

CW radar finds applications in scenarios where velocity measurement is critical:

*   **Police Speed Detection:** Radar guns used by law enforcement.
*   **Airspeed Measurement:** In aircraft, for determining the speed of the aircraft relative to the air.
*   **Missile Guidance:** For tracking the velocity of targets.
*   **Ground Penetrating Radar (GPR):** Some GPR systems use CW principles for detecting subsurface objects.
*   **Level Sensing:** Measuring the level of liquids or solids in tanks by detecting the Doppler shift from a moving surface.
*   **Industrial Automation:** Monitoring the speed of conveyor belts or rotating machinery.

**Example:** A police radar gun is a classic example of CW radar. It transmits a continuous wave, and the Doppler shift of the reflected wave from a car is measured to calculate the car's speed.

**Textbook References:**
*   **Edde, "Radar: Principles, Technology, Applications":** Provides a broad overview of radar applications, including those suited for CW systems.
*   **Skolnik, "Introduction to Radar Systems":** Discusses specific radar systems and their operating principles.

### 6. Practice Questions and Answers

**Question 1:** What is the fundamental principle that enables CW radar to detect moving targets?
    *   **Answer:** The Doppler effect.

**Question 2:** Explain the role of the mixer in a CW radar system.
    *   **Answer:** The mixer combines the received signal with a sample of the transmitted signal to produce an output at the Doppler frequency, which is proportional to the target's radial velocity.

**Question 3:** What is a major limitation of basic CW radar systems?
    *   **Answer:** The inability to measure the range of stationary targets.

**Question 4:** List two applications of CW radar.
    *   **Answer:** Police speed detection, airspeed measurement, level sensing.

**Question 5:** If a CW radar transmits at 10 GHz and receives a reflected signal with a Doppler shift of 1 kHz, what is the radial velocity of the target? (Assume wavelength $\lambda = c/f_t$, where $c = 3 \times 10^8$ m/s).
    *   **Calculation:**
        *   Transmitted frequency $f_t = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
        *   Wavelength $\lambda = \frac{3 \times 10^8 \text{ m/s}}{10 \times 10^9 \text{ Hz}} = 0.03 \text{ m}$
        *   Doppler shift $\Delta f_d = 1 \text{ kHz} = 1000 \text{ Hz}$
        *   Doppler frequency formula: $\Delta f_d = \frac{2 R}{\lambda}$
        *   Rearranging for velocity $R$: $R = \frac{\Delta f_d \times \lambda}{2}$
        *   $R = \frac{1000 \text{ Hz} \times 0.03 \text{ m}}{2} = \frac{30}{2} = 15 \text{ m/s}$
    *   **Answer:** The radial velocity of the target is 15 m/s.

### 7. Important Points to Remember

*   CW radar transmits continuously.
*   It relies on the Doppler effect to detect moving targets.
*   The Doppler shift is proportional to the radial velocity.
*   Basic CW radar cannot determine the range of stationary targets.
*   Isolation between the transmitter and receiver is crucial.
*   Applications are primarily focused on velocity measurement.

This comprehensive set of notes covers the block diagram of a CW radar, its operating principles, key components, advantages, disadvantages, and applications, aligning with the specified learning outcomes and referencing the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
