---
title: "Sample and Hold Circuit"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 3: Digital (Numerical) Relays :  Basic Components of numerical Relays with block diagram"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36594"
status: "completed"
scrapedAt: "2026-05-23T16:26:08.954Z"
---
# Digital Protection of Power Systems - Module 3: Digital (Numerical) Relays

## Topic: Sample and Hold Circuit

### 1. Introduction and Learning Outcomes

This topic focuses on the fundamental building block of a digital relay: the Sample and Hold (S/H) circuit. Understanding its function is crucial for comprehending how analog power system signals are converted into a format that digital processors can interpret.

**Learning Outcomes for this Topic:**

*   **Understand the purpose of a Sample and Hold circuit in the context of digital relaying.**
*   **Identify the key components of a basic Sample and Hold circuit.**
*   **Explain the operation of a Sample and Hold circuit in both "track" and "hold" modes.**
*   **Recognize the impact of S/H circuit characteristics on the overall performance of a digital relay.**
*   **Relate the function of the S/H circuit to the overall process of analog-to-digital conversion in numerical relays.**

### 2. Why is Sampling Necessary in Digital Relays?

Digital relays process information in discrete time intervals. Power system quantities like voltage and current are continuous analog signals. To bridge this gap, these analog signals must be converted into a digital format. This conversion process involves two primary stages:

1.  **Sampling:** Discretizing the analog signal in time.
2.  **Quantization:** Discretizing the sampled signal's amplitude into a finite number of levels.

The **Sample and Hold (S/H) circuit** is the critical component responsible for the **sampling** process.

### 3. The Role of the Sample and Hold Circuit in Numerical Relays

The primary function of an S/H circuit in a numerical relay is to **capture and momentarily store the instantaneous value of the analog input signal at specific points in time**. These captured values are then passed on to the Analog-to-Digital Converter (ADC).

**Analogy:** Imagine trying to take a photograph of a moving object. You need to "freeze" its motion at a specific instant. The S/H circuit acts like the camera's shutter, capturing a snapshot of the analog waveform.

**Connection to Course Outcomes:**

*   **CO3: Illustrate the operation of a numerical relay.** (Understanding S/H is a key step in illustrating the relay's operation).
*   **CO4: Explain signal processing methods and algorithms in digital protection.** (Sampling is the first signal processing step).

### 4. Basic Components of a Sample and Hold Circuit

A basic, but fundamental, Sample and Hold circuit typically consists of the following components:

*   **Operational Amplifier (Op-Amp):**
    *   **Buffer Amplifier (Input):** Usually configured as a voltage follower. Its purpose is to provide a high input impedance to prevent loading the analog signal source. It also provides a low output impedance to drive the holding capacitor.
    *   **Buffer Amplifier (Output):** Also typically a voltage follower. It isolates the holding capacitor from the load, preventing its charge from leaking away during the hold mode.
*   **Switch:** A fast-acting electronic switch (e.g., a MOSFET or a JFET). This switch controls whether the capacitor is connected to the input signal or disconnected from it.
*   **Holding Capacitor (C):** The core component that stores the sampled voltage. It should have low leakage current to maintain the stored voltage for a reasonable duration.

### 5. Block Diagram of a Basic Sample and Hold Circuit

```
                     +-----------------+      +--------------+      +-----------------+
Analog Input ------> | Input Buffer Op-| ---->|     Switch     | ---->| Holding         | ----> Output to ADC
 (V_in)              | Amp (Voltage    |      | (Controlled by|      | Capacitor (C)   |
                     | Follower)       |      | Sample/Hold  |      |                 |
                     +-----------------+      | Signal)      |      +-------+---------+
                                                +--------------+              |
                                                                              |
                                                                              +-----> Output Buffer Op-Amp
                                                                                    (Voltage Follower)
                                                                                         |
                                                                                         v
                                                                                   Sampled/Held
                                                                                    Voltage (V_out)
```

**Explanation of the Diagram:**

1.  **Analog Input (V_in):** The continuous analog voltage signal from the power system (e.g., a scaled current or voltage).
2.  **Input Buffer Op-Amp:** Presents a high impedance to the analog source, ensuring it's not loaded. Its output voltage is essentially the same as its input voltage.
3.  **Switch:** This is controlled by the "Sample/Hold" control signal.
    *   When the control signal is "ON," the switch is closed, connecting the input buffer's output to the holding capacitor.
    *   When the control signal is "OFF," the switch is open, disconnecting the capacitor from the input.
4.  **Holding Capacitor (C):** When the switch is closed, the capacitor charges (or discharges) to the voltage present at the input buffer's output.
5.  **Output Buffer Op-Amp:** This buffer has a high input impedance and low output impedance. It takes the voltage stored on the capacitor and presents it to the next stage (the ADC) without significantly discharging the capacitor.
6.  **Sampled/Held Voltage (V_out):** The output voltage, which represents the voltage stored on the capacitor.

### 6. Operation Modes of a Sample and Hold Circuit

The S/H circuit operates in two distinct modes, controlled by the Sample/Hold (S/H) signal:

#### 6.1. Track Mode (Sample Mode)

*   **S/H Signal:** Active (e.g., HIGH or logic '1').
*   **Switch State:** Closed.
*   **Operation:** The holding capacitor is connected to the input signal through the input buffer. The capacitor voltage ($V_C$) tracks the input voltage ($V_{in}$) as closely as possible. The output voltage ($V_{out}$) therefore follows the input voltage.
*   **Goal:** To capture the instantaneous value of the input signal.

#### 6.2. Hold Mode

*   **S/H Signal:** Inactive (e.g., LOW or logic '0').
*   **Switch State:** Open.
*   **Operation:** The holding capacitor is disconnected from the input signal. The capacitor retains the voltage it had at the instant the switch was opened. The output voltage ($V_{out}$) remains constant at this stored voltage until the circuit returns to track mode.
*   **Goal:** To maintain the captured voltage value for the ADC to process.

### 7. Key Characteristics and Imperfections of S/H Circuits

While conceptually simple, real-world S/H circuits exhibit imperfections that can affect the accuracy of the sampled data. Understanding these is vital for designing or analyzing digital protection systems.

*   **Acquisition Time:** The time it takes for the capacitor to charge (or discharge) to a specified percentage (usually 0.1% or 0.01%) of the input voltage change. A shorter acquisition time is desirable for capturing fast-changing signals.
    *   *Impact:* If acquisition time is too long, the capacitor may not fully charge before the switch opens, leading to an inaccurate sample.
*   **Aperture Time ($t_a$):** The time interval during which the switch is transitioning from the closed (track) to the open (hold) state. During this small time, the input signal can change.
    *   *Impact:* This change in input signal during the transition can cause an error in the sampled voltage. The magnitude of this error depends on the rate of change of the input signal ( $dV_{in}/dt$ ) during aperture time.
*   **Aperture Jitter ($t_{jit}$):** Variations or uncertainty in the exact moment the switch opens. This is a timing error.
    *   *Impact:* Jitter causes random errors in the sampled value. The error is proportional to the aperture jitter and the rate of change of the input signal. For high-frequency signals in power systems, jitter can be a significant source of error.
*   **Droop Rate:** In hold mode, the voltage stored on the capacitor can decrease over time due to leakage currents (through the switch, capacitor, and op-amp input).
    *   *Impact:* The held voltage decays, leading to an incorrect value being presented to the ADC if the hold time is too long or if the capacitor has high leakage.
*   **Charge Injection:** When the switch opens, a small amount of charge can be transferred from the switch to the holding capacitor, causing a voltage offset error.
    *   *Impact:* This offset error can affect the accuracy of the sampled value, especially for low-level signals.
*   **Offset Voltage:** An inherent voltage offset from the op-amps or other components that can add to the sampled voltage.

**Reference from Textbooks:**

*   **Johns & Salman (1995):** Discusses the practical implementation of S/H circuits and their role in digitizing power system waveforms. They often emphasize the need for fast acquisition and low droop rates.
*   **Phadke & Thorpe (1988):** Highlight the critical aspects of sampling for digital relaying, including the Nyquist criterion and the impact of sampling rate. They implicitly touch upon the S/H circuit's role in providing these samples.
*   **Rebizant (2008):** Likely delves into the signal processing aspects and the impact of S/H imperfections on algorithm performance, particularly for detecting disturbances.

### 8. S/H Circuit in the Context of the Analog Front-End of a Digital Relay

The S/H circuit is a crucial part of the analog front-end of a numerical relay, which typically includes:

1.  **Coupling and Isolation:** Isolating the relay from the high voltages of the power system (e.g., using Potential Transformers (PTs) and Current Transformers (CTs), and optocouplers or isolation amplifiers).
2.  **Filtering:** Anti-aliasing filters (Low-pass filters) to remove frequencies above half the sampling frequency, preventing aliasing.
3.  **Amplification/Attenuation:** Scaling the power system signals to a range suitable for the ADC.
4.  **Sample and Hold Circuit:** Capturing the instantaneous analog value.
5.  **Analog-to-Digital Converter (ADC):** Converting the sampled analog voltage into a digital code.

```
Power System Signal (e.g., Voltage/Current)
    |
    v
Coupling & Isolation
    |
    v
Anti-Aliasing Filter (Low-pass)
    |
    v
Amplification/Attenuation
    |
    v
SAMPLE AND HOLD CIRCUIT  <-- S/H Control Signal
    |
    v
Analog-to-Digital Converter (ADC)
    |
    v
Digital Data (to Digital Signal Processor)
```

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary function of a Sample and Hold circuit in a digital relay?

**Question 2:**
Name the three main components of a basic Sample and Hold circuit.

**Question 3:**
Describe the operation of a Sample and Hold circuit during "track mode."

**Question 4:**
Explain the concept of "droop rate" in a Sample and Hold circuit and its potential consequence in a digital relay.

**Question 5:**
If an analog signal in a power system has a fundamental frequency of 50 Hz and its third harmonic is also present, and the S/H circuit has an aperture jitter of 10 ns, calculate the approximate error in the sampled value due to jitter if the signal is momentarily changing at its peak rate of change. Assume the signal is a sinusoid.

**(Hint for Q5):**
The rate of change of a sinusoid $V(t) = V_m \sin(\omega t)$ is $dV/dt = V_m \omega \cos(\omega t)$. The maximum rate of change occurs when $\cos(\omega t) = 1$, so $(dV/dt)_{max} = V_m \omega$.
For a 50 Hz signal, $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s.
The error due to aperture jitter is approximately $Error \approx (dV/dt)_{max} \times t_{jit}$. You'll need to assume a typical peak voltage for $V_m$. Let's assume a peak voltage of 1 pu (per unit) for simplicity in demonstration, and then consider the effect of harmonics.

---

### Answers to Practice Questions

**Answer 1:**
The primary function of a Sample and Hold circuit in a digital relay is to capture and momentarily store the instantaneous analog value of a power system quantity (like voltage or current) at a specific point in time, preparing it for conversion to a digital format by the ADC.

**Answer 2:**
The three main components of a basic Sample and Hold circuit are:
1.  An input buffer amplifier (e.g., voltage follower).
2.  A fast-acting electronic switch.
3.  A holding capacitor.
(Optionally, an output buffer amplifier can be included).

**Answer 3:**
During "track mode," the Sample/Hold signal is active, causing the switch to close. This connects the holding capacitor to the input signal (via the input buffer). The capacitor charges (or discharges) to follow the instantaneous voltage of the input signal. The output voltage is essentially equal to the input voltage during this mode.

**Answer 4:**
"Droop rate" refers to the gradual decrease in the voltage stored on the holding capacitor during the "hold mode." This occurs due to leakage currents flowing through the switch, the capacitor itself, or the input of the output buffer. If the droop rate is significant, the held voltage may decay before the ADC can complete its conversion, leading to an inaccurate digital representation of the sampled analog value.

**Answer 5:**
Let's analyze the error for the fundamental frequency first.
Signal: $V(t) = V_m \sin(\omega t)$
Rate of change: $dV/dt = V_m \omega \cos(\omega t)$
Maximum rate of change: $(dV/dt)_{max} = V_m \omega$

For 50 Hz: $\omega = 2\pi \times 50 = 100\pi$ rad/s.
Aperture Jitter: $t_{jit} = 10 \text{ ns} = 10 \times 10^{-9} \text{ s}$.

Assume $V_m = 1$ pu.
$(dV/dt)_{max} \approx 1 \times 100\pi \text{ V/s} \approx 314.16 \text{ V/s}$.

Approximate error due to jitter for fundamental:
$Error_{fund} \approx (dV/dt)_{max} \times t_{jit}$
$Error_{fund} \approx 314.16 \text{ V/s} \times 10 \times 10^{-9} \text{ s}$
$Error_{fund} \approx 3.1416 \times 10^{-7} \text{ V}$.

Now consider the third harmonic:
Frequency of third harmonic: $f_3 = 3 \times 50 \text{ Hz} = 150 \text{ Hz}$.
Angular frequency of third harmonic: $\omega_3 = 2\pi \times 150 = 300\pi$ rad/s.
Assume the amplitude of the third harmonic is $V_{m3}$. For example, if it's 10% of the fundamental, $V_{m3} = 0.1 V_m = 0.1$ pu.

Maximum rate of change for the third harmonic: $(dV_3/dt)_{max} = V_{m3} \omega_3$.
$(dV_3/dt)_{max} \approx 0.1 \times 300\pi \text{ V/s} \approx 942.48 \text{ V/s}$.

Approximate error due to jitter for third harmonic:
$Error_{harm3} \approx (dV_3/dt)_{max} \times t_{jit}$
$Error_{harm3} \approx 942.48 \text{ V/s} \times 10 \times 10^{-9} \text{ s}$
$Error_{harm3} \approx 9.4248 \times 10^{-7} \text{ V}$.

The total error due to jitter is roughly the sum of the errors from each component if they are not simultaneously at their peak rate of change. However, the third harmonic contributes a larger instantaneous rate of change and thus a larger potential error due to jitter. The error magnitude depends on the phase of the harmonic relative to the fundamental when sampling occurs. In the worst case, if both are at their peak rate of change simultaneously, the error could be additive.

**Key Takeaway for Q5:** Higher frequency components have a faster rate of change and thus are more susceptible to errors caused by aperture jitter. This emphasizes the importance of fast switches and precise timing in S/H circuits for accurate protection.

### 10. Important Points to Remember

*   **S/H circuits are essential for converting continuous analog signals to discrete samples for digital processing.**
*   **The two modes are "Track" (sampling) and "Hold" (storing the sample).**
*   **Imperfections like aperture time, jitter, and droop rate can introduce errors.**
*   **High sampling rates and precise timing are crucial for capturing dynamic power system behavior.**
*   **The S/H circuit is a part of the analog front-end and is preceded by filtering and followed by an ADC.**
*   **For numerical relays, minimizing errors introduced by the S/H circuit is critical for accurate fault detection and classification.**

### 11. Further Study and Connections to Other Topics

*   **Relationship with ADC:** The S/H circuit provides a stable voltage to the ADC, improving its accuracy. The choice of ADC (e.g., Successive Approximation, Sigma-Delta) is often paired with the capabilities of the S/H circuit.
*   **Sampling Rate and Nyquist Theorem:** The sampling rate chosen for a digital relay directly impacts the S/H circuit's speed requirements and the fidelity of the reconstructed waveform.
*   **Anti-Aliasing Filters:** These filters are crucial to prevent high-frequency components (which could be noise or harmonics) from being misinterpreted as lower frequencies after sampling.
*   **Digital Signal Processing (DSP):** The digital data produced after sampling and quantization is then processed by DSP algorithms to detect faults. The quality of the sampled data from the S/H circuit directly impacts DSP algorithm performance.

This concludes the topic on Sample and Hold circuits. Understanding this component provides a solid foundation for exploring other aspects of digital relaying.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
