---
title: "Phase Locked Loop :  Basic building block, Operation, Closed loop analysis, Lock and capture range, Applications of PLL, PLL IC565."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 4: Timer and VCO:  Timer IC 555 "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe578"
status: "completed"
scrapedAt: "2026-05-23T17:49:50.119Z"
---
# Module 4: Timer and VCO: Timer IC 555

## Topic: Phase Locked Loop (PLL)

**Learning Outcomes:**

*   Understand the basic building blocks of a Phase Locked Loop (PLL).
*   Explain the fundamental operation of a PLL.
*   Analyze the closed-loop behavior of a PLL.
*   Define and explain lock range and capture range of a PLL.
*   Discuss various applications of PLL.
*   Familiarize with the functionality and operation of the PLL IC 565.

**Course Outcomes Alignment:**

*   **CO1 (K2):** This topic contributes to summarizing concepts by explaining the fundamental building blocks and operation of PLLs, which are important linear integrated circuits.
*   **CO2 (K3):** Understanding PLL operation and analysis can indirectly inform the design of circuits for specific applications, although direct design of a PLL circuit itself might be beyond the scope of this module's specific focus.
*   **CO3 (K2):** This topic directly aids in choosing integrated circuit chips for applications by introducing the PLL IC 565 and its capabilities.
*   **CO4 (K3):** By understanding the operation and applications, students can implement various applications using specific integrated circuit chips like the 565.

---

### 1. Introduction to Phase Locked Loop (PLL)

A Phase Locked Loop (PLL) is a feedback control system that generates an output signal whose phase is related to the phase of an input "reference" signal. It is essentially a frequency synthesizer, a demodulator, and a timing recovery circuit.

**Key Concept:** The core idea of a PLL is to continuously adjust the frequency and phase of a Voltage-Controlled Oscillator (VCO) to match the frequency and phase of an input reference signal.

**Reference:**
*   Roy D. C. & S. B. Jain, "Linear Integrated Circuits," Chapter 16, discusses PLLs and their applications.
*   Gayakwad R. A., "Op-Amps and Linear Integrated Circuits," Chapter 11, provides a good overview of PLL fundamentals.

---

### 2. Basic Building Blocks of a PLL

A PLL typically consists of three main functional blocks:

1.  **Phase Detector (PD) / Phase Comparator (PC):**
    *   **Function:** Compares the phase of the input reference signal ($f_{ref}$) with the phase of the feedback signal ($f_{out}$) from the VCO.
    *   **Output:** Generates an error voltage ($V_{err}$) proportional to the phase difference between the two signals.
    *   **Types:**
        *   **Exclusive-OR (XOR) Gate Phase Detector:** Simple, but output voltage is not linearly proportional to the phase difference.
        *   **Flip-Flop Phase Detector (e.g., JK Flip-Flop):** Produces a more linear output over a wider range of phase differences.
        *   **Multiplier Phase Detector (e.g., Analog Multiplier):** Provides a cosine output, which is the most linear with respect to phase.
    *   **Key Concept:** The output of the PD is an "average" voltage that drives the VCO.

2.  **Low-Pass Filter (LPF):**
    *   **Function:** Filters out the high-frequency components (harmonics and sum frequencies) from the PD output.
    *   **Output:** A smooth DC control voltage ($V_{control}$) that is applied to the VCO.
    *   **Components:** Typically consists of a resistor and capacitor, sometimes with an operational amplifier for buffering or gain.
    *   **Key Concept:** The LPF determines the dynamic characteristics of the PLL, such as its speed and noise rejection. It removes unwanted AC components from the phase detector output.

3.  **Voltage-Controlled Oscillator (VCO):**
    *   **Function:** Generates an output signal ($f_{out}$) whose frequency is controlled by an input voltage ($V_{control}$).
    *   **Output:** A stable oscillating signal.
    *   **Key Concept:** The VCO is the "heart" of the PLL. Its frequency can be adjusted by the control voltage.
    *   **Relationship:** $f_{out} = f_{center} + K_V \cdot V_{control}$, where $f_{center}$ is the free-running frequency and $K_V$ is the VCO sensitivity (Hz/V).

**Optional Block:**

*   **Frequency Divider (e.g., Counter):**
    *   **Function:** Divides the VCO output frequency ($f_{out}$) by a factor 'N' before feeding it back to the PD.
    *   **Impact:** Allows the PLL to lock to a multiple of the reference frequency. The output frequency becomes $N \cdot f_{ref}$.
    *   **Key Concept:** Enables frequency synthesis.

**Block Diagram:**

```
     +-----------------+       +-------------+       +-------------+
---> | Phase Detector  |-----> |  Low-Pass   |-----> |     VCO     |-----+
     | (PD)            |       |   Filter    |       |             |     |
     |                 |       |    (LPF)    |       |             |     |  f_out
     +-----------------+       +-------------+       +-------------+     |
            ^                                                               |
            |                                                               |
     +-----------------+                                                    |
     |  Reference      |                                                    |
     |  Signal (f_ref) |                                                    |
     +-----------------+                                                    |
                                                                             |
                                                                             |
     +-----------------+       +-----------------+                           |
     |                 |       |  Feedback       |<--------------------------+
     |  Frequency      |-----> |  Signal (f_out) |
     |  Divider (N)    |       |                 |
     +-----------------+       +-----------------+
```

**Reference:**
*   Botkar K. R., "Integrated Circuits," Chapter 11, covers PLLs extensively.
*   Sedra A. S. & K. C. Smith, "Microelectronic Circuits," Chapter 16, provides a good theoretical background.

---

### 3. Operation of a PLL

The PLL operates in three main modes:

1.  **Capture Mode (or Acquisition Mode):**
    *   When the input reference frequency ($f_{ref}$) is brought close to the VCO's free-running frequency ($f_{center}$), the PLL begins to "capture" the input signal.
    *   The PD generates an error voltage, and the LPF smooths it out to control the VCO.
    *   The VCO frequency starts to shift towards the reference frequency.
    *   This process continues until the VCO frequency is close enough to the reference frequency to achieve lock.
    *   **Key Concept:** The PLL is actively trying to match the frequencies.

2.  **Lock Mode (or Tracking Mode):**
    *   Once the PLL has captured the signal, it enters the lock mode.
    *   In this mode, the PLL maintains a constant phase difference between the reference signal and the feedback signal. This phase difference is generally small and corresponds to the DC component of the PD output that keeps the VCO at the reference frequency.
    *   The PD output ($V_{err}$) will have a DC component and possibly some AC ripple. The LPF removes the ripple, and the DC component keeps the VCO locked.
    *   **Key Concept:** The PLL is now actively maintaining synchronization. The output frequency ($f_{out}$) is equal to the reference frequency ($f_{ref}$) (or $N \cdot f_{ref}$ if a divider is used).

3.  **Free-Running Mode:**
    *   If the input reference signal is removed or is too far from the VCO's frequency, the PLL will exit the lock mode and operate in its free-running state, where the VCO oscillates at its center frequency ($f_{center}$).

**Illustrative Example:** Imagine tuning a radio receiver. When you are close to a station's frequency, you hear static. As you get closer, the static reduces, and the audio becomes clear. This is analogous to the PLL's capture and lock process. The tuner (PLL) is trying to match the station's frequency.

---

### 4. Closed-Loop Analysis of a PLL

Analyzing the PLL in a closed-loop configuration helps understand its stability and dynamic response.

**Mathematical Model:**

*   **Phase Detector:** $V_{err}(t) = K_d \cdot \theta_e(t)$, where $K_d$ is the phase detector gain (V/radian) and $\theta_e(t)$ is the phase error.
*   **Low-Pass Filter:** The transfer function of the LPF is $F(s) = \frac{V_{control}(s)}{V_{err}(s)}$. A first-order LPF is often approximated as $F(s) = \frac{1}{1 + s/\omega_c}$, where $\omega_c$ is the cutoff frequency. In practice, a second-order LPF is often used for better performance.
*   **VCO:** The VCO's output frequency is $f_{out} = f_{center} + K_V \cdot V_{control}$, where $K_V$ is the VCO sensitivity (Hz/V). In the Laplace domain, considering phase, the output phase $\theta_{out}(s)$ is related to the control voltage by $\theta_{out}(s) = \frac{K_V}{s} \cdot V_{control}(s)$, where $K_V$ is now the angular gain (rad/s/V).

**Loop Transfer Function:**

The system can be represented in the Laplace domain. Let $\theta_{ref}(s)$ be the input phase and $\theta_{out}(s)$ be the output phase. The phase error is $\theta_e(s) = \theta_{ref}(s) - \theta_{out}(s)$.

The overall open-loop transfer function $G(s)H(s)$ can be expressed as:
$G(s)H(s) = K_d \cdot F(s) \cdot \frac{K_V}{s}$

The closed-loop transfer function $T(s)$ is:
$T(s) = \frac{\theta_{out}(s)}{\theta_{ref}(s)} = \frac{G(s)}{1 + G(s)H(s)} = \frac{K_d \cdot F(s) \cdot K_V / s}{1 + K_d \cdot F(s) \cdot K_V / s}$

For a simple first-order LPF ($F(s) = 1$ for DC):
$T(s) = \frac{K_d K_V / s}{1 + K_d K_V / s} = \frac{K_d K_V}{s + K_d K_V}$

Here, $K = K_d K_V$ is the overall loop gain (rad/s).
$T(s) = \frac{K}{s + K}$

This is a first-order system with a time constant $\tau = 1/K$.

**More Realistic LPF (First-Order):**
$F(s) = \frac{1}{1 + s/\omega_c}$
$G(s)H(s) = \frac{K_d}{1 + s/\omega_c} \cdot \frac{K_V}{s} = \frac{K \omega_c}{s(s + \omega_c)}$

The closed-loop transfer function becomes:
$T(s) = \frac{G(s)}{1 + G(s)H(s)} = \frac{K \omega_c / s(s+\omega_c)}{1 + K \omega_c / s(s+\omega_c)} = \frac{K \omega_c}{s^2 + \omega_c s + K \omega_c}$

This is a second-order system. The natural frequency $\omega_n$ and damping factor $\zeta$ are related to the coefficients:
$\omega_n^2 = K \omega_c$
$2 \zeta \omega_n = \omega_c$

The performance of the PLL (response time, stability, noise filtering) depends on these parameters.

**Important Points to Remember:**
*   The loop gain ($K = K_d K_V$) is critical for system performance.
*   The LPF characteristics significantly affect the PLL's bandwidth and transient response.
*   A second-order PLL offers better performance (e.g., faster response, better damping) than a first-order one.

**Reference:**
*   Coughlin R. F. & Driscoll F., "Operational Amplifiers & Linear Integrated Circuits," Chapter 14, delves into PLL analysis.
*   Clayton C. G., "Operational Amplifiers," Chapter 12, offers detailed explanations.

---

### 5. Lock Range and Capture Range

These parameters define the frequency range over which the PLL can maintain lock and acquire lock, respectively.

1.  **Capture Range ($2\Delta f_c$)**:
    *   **Definition:** The range of input frequencies ($\Delta f$) around the free-running frequency ($f_{center}$) that the PLL can successfully acquire lock from an unlocked state.
    *   **Factors:** It depends on the loop gain ($K$) and the LPF bandwidth. A higher loop gain and wider LPF bandwidth generally lead to a wider capture range.
    *   **Formula (approximate for a first-order PLL with a simple LPF):** $2\Delta f_c \approx K$ (in Hz, where K is the overall loop gain in Hz).
    *   **Key Concept:** This is the frequency deviation the PLL can *initiate* lock with.

2.  **Lock Range ($2\Delta f_L$)**:
    *   **Definition:** The range of input frequencies around the free-running frequency ($f_{center}$) that the PLL can maintain lock once acquired.
    *   **Factors:** It is generally wider than the capture range and depends on the maximum output voltage swing of the PD and the LPF characteristics. It is limited by the maximum and minimum frequencies the VCO can produce.
    *   **Formula (approximate):** $2\Delta f_L \approx K_d \cdot V_{out,max} \cdot F_{LPF,DC}$, where $V_{out,max}$ is the maximum output voltage of the PD and $F_{LPF,DC}$ is the DC gain of the LPF. In simpler terms, it's related to the maximum possible control voltage range.
    *   **Key Concept:** This is the frequency deviation the PLL can *maintain* lock with.

**Relationship:**
Typically, $2\Delta f_c < 2\Delta f_L$.

**Example:** A PLL might have a capture range of $\pm 20$ kHz and a lock range of $\pm 30$ kHz around its center frequency. If the input frequency drifts by 25 kHz, the PLL might lose lock.

**Important Points to Remember:**
*   Capture range is for initiating synchronization.
*   Lock range is for maintaining synchronization.
*   Both are crucial for the PLL's effectiveness.

**Reference:**
*   Gayakwad R. A., "Op-Amps and Linear Integrated Circuits," Chapter 11, provides detailed explanations and derivations.
*   Roy D. C. & S. B. Jain, "Linear Integrated Circuits," Chapter 16, also covers these concepts.

---

### 6. Applications of PLL

PLLs are versatile circuits with numerous applications in electronics:

1.  **Frequency Synthesis:**
    *   Generating precise frequencies, often by using a frequency divider in the feedback loop. This is fundamental to modern communication systems, computers, and test equipment.
    *   **Example:** Creating a clock signal for microprocessors from a crystal oscillator.

2.  **Demodulation:**
    *   **FM Demodulation:** The output of the LPF in a PLL is directly proportional to the frequency deviation of the input FM signal, making it a natural FM demodulator.
    *   **FSK Demodulation:** PLLs can track frequency shifts in FSK signals.
    *   **Example:** In radio receivers to extract audio from an FM broadcast.

3.  **Clock Recovery and Data Synchronization:**
    *   Extracting timing information from a data stream to regenerate a clock signal, which is crucial for reliable data reception in serial communication.
    *   **Example:** In serial data transmission (e.g., Ethernet, USB), the receiver uses a PLL to recover the clock from the incoming data.

4.  **Carrier Synchronization:**
    *   In communication systems, the receiver needs to synchronize its local oscillator with the carrier frequency of the transmitted signal for coherent detection.
    *   **Example:** In radio and TV broadcasting.

5.  **Phase Modulation and Demodulation (PM/PDM):**
    *   Can be used for phase modulation and demodulation.

6.  **Sweep Generators:**
    *   By varying the voltage applied to the VCO control input, the PLL can be made to sweep across a range of frequencies.

7.  **Jitter Reduction (Clock De-skewing):**
    *   PLLs can filter out timing jitter in clock signals, producing a cleaner clock.

**Reference:**
*   Roy D. C. & S. B. Jain, "Linear Integrated Circuits," Chapter 16, lists and explains many applications.
*   Franco S., "Design with Operational Amplifiers and Analog Integrated Circuits," Chapter 15, provides application-oriented details.

---

### 7. PLL IC 565

The NE/SE565 is a popular, general-purpose PLL IC. It's a 14-pin DIP package.

**Key Features:**

*   **Wide Supply Voltage Range:** Typically $\pm 5$V to $\pm 12$V.
*   **Internal Phase Detector:** Uses an XOR gate type phase detector.
*   **Internal VCO:** Voltage-Controlled Oscillator.
*   **Internal LPF:** A first-order passive LPF is implemented using external components.
*   **Frequency Range:** Can lock over a wide range, programmable using external resistors and capacitors.
*   **Low Power Consumption.**

**Internal Block Diagram (Simplified):**

```
     +-----------------+       +-------------+       +-----------+
     | Phase Detector  |-----> |  LPF (RC)   |-----> |    VCO    |-----+
     | (XOR Gate)      |       |             |       |           |     |
     +-----------------+       +-------------+       +-----------+     |
            ^                                                               |
            |                                                               |
     +-----------------+                                                    |
     |  Input Signal   |                                                    |
     |  (f_ref)        |                                                    |
     +-----------------+                                                    |
                                                                             |
                                                                             |
     +-----------------+       +-----------------+                           |
     |                 |       |  Output Signal  |<--------------------------+
     |  (No divider)   |-----> |  (f_out)        |
     |                 |       |                 |
     +-----------------+       +-----------------+
```

**Pin Configuration (Typical):**

*   **Pin 1:** VCC+ (Positive Supply)
*   **Pin 2:** OUTPUT (VCO Output)
*   **Pin 3:** VO OFFSET NULL (Used to adjust VCO offset)
*   **Pin 4:** FILTER (Input to LPF)
*   **Pin 5:** FILTER (Output of LPF, connected to VCO control input)
*   **Pin 6:** GND (Ground)
*   **Pin 7:** COMP (Complementary Output from Phase Detector)
*   **Pin 8:** INPUT (Reference Input Signal)
*   **Pin 9:** LOOP FILTER (Connects to VCC+ via a resistor)
*   **Pin 10:** VCO INPUT (Connected to LPF output)
*   **Pin 11:** VCC- (Negative Supply)
*   **Pin 12:** OUTPUT (Complementary VCO Output)
*   **Pin 13:** (NC - Not Connected)
*   **Pin 14:** (NC - Not Connected)

**External Component Connections for Operation:**

*   **VCO Frequency Setting:**
    *   A resistor ($R_1$) is connected between Pin 9 and VCC+. This resistor, along with a capacitor ($C_1$) connected between Pin 5 and VCC+, determines the free-running frequency ($f_{center}$) of the VCO.
    *   $f_{center} \approx 1.2 \cdot \frac{1}{R_1 C_1}$
*   **LPF Implementation:**
    *   The internal LPF is a passive RC network. A capacitor ($C_1$) is connected between Pin 5 and VCC+.
    *   Often, a resistor ($R_2$) is connected between Pin 4 and Pin 5 to form a more effective LPF. The effective LPF resistance is $R_2$, and the capacitance is $C_1$.
    *   The cutoff frequency of the LPF ($f_c$) is approximately $f_c \approx \frac{1}{2\pi R_2 C_1}$.
*   **Phase Detector Input:**
    *   The reference signal ($f_{ref}$) is applied to Pin 8.
    *   The feedback signal (VCO output, Pin 2) is connected to Pin 4.
*   **Power Supply:** Pins 1 and 6 (VCC+) and Pin 11 (VCC-) are connected to the appropriate power supply rails.

**Operation with 565:**

1.  The reference signal ($f_{ref}$) is applied to Pin 8.
2.  The VCO output ($f_{out}$) from Pin 2 is fed back to Pin 4.
3.  The Phase Detector (internal XOR gate) compares the phase of $f_{ref}$ and $f_{out}$.
4.  The output of the PD (a series of pulses) is filtered by the external LPF ($R_2$, $C_1$).
5.  The filtered DC voltage controls the VCO frequency.
6.  The VCO adjusts its output frequency until $f_{out} = f_{ref}$ (assuming no frequency divider).

**Calculating Lock/Capture Range for 565:**

*   The lock range is approximately $\pm 10 \frac{f_o}{V_{supply}}$ or $\pm 10 \frac{f_o}{N}$ (where $f_o$ is the loop gain and $N$ is the supply voltage or supply rails). For $\pm 12$V supply, the lock range is roughly $\pm (10 \times 12) \% = \pm 120 \%$ of the center frequency.
*   The capture range is typically about $2/3$ of the lock range.

**Example Usage of 565:**

*   **Frequency Multiplier:** If you want to multiply the input frequency by 2, you would use a divide-by-2 counter in the feedback loop (from Pin 2 to Pin 4).
*   **FM Demodulator:** The output at Pin 12 can be connected to an external filter to extract the demodulated audio signal.

**Important Points to Remember about 565:**
*   External components ($R_1$, $C_1$, $R_2$) are crucial for setting the center frequency and LPF bandwidth.
*   The 565 has a limited internal LPF; external components are needed for effective filtering.
*   Its performance is good for many general-purpose applications.

**Reference:**
*   Roy D. C. & S. B. Jain, "Linear Integrated Circuits," Chapter 16, provides a detailed explanation and circuit examples for the 565.
*   Gayakwad R. A., "Op-Amps and Linear Integrated Circuits," Chapter 11, also covers the 565.

---

### Practice Questions and Answers

**Q1. What are the three essential building blocks of a Phase Locked Loop (PLL)?**
**A1.** The three essential building blocks are: Phase Detector (PD), Low-Pass Filter (LPF), and Voltage-Controlled Oscillator (VCO).

**Q2. Explain the difference between capture range and lock range.**
**A2.** Capture range is the range of input frequencies around the free-running frequency that the PLL can acquire lock from an unlocked state. Lock range is the range of input frequencies that the PLL can maintain lock once acquired. The lock range is typically wider than the capture range.

**Q3. Name two common applications of PLLs.**
**A3.** Two common applications are:
    1. Frequency Synthesis
    2. FM Demodulation

**Q4. In the context of a PLL, what is the function of the Low-Pass Filter?**
**A4.** The LPF filters out high-frequency components from the phase detector output, providing a smooth DC control voltage to the VCO. It also influences the dynamic characteristics and bandwidth of the PLL.

**Q5. If the free-running frequency of a PLL is 100 kHz, and its lock range is $\pm 20$ kHz, what is the range of input frequencies it can maintain lock with?**
**A5.** The PLL can maintain lock with input frequencies ranging from $100 \text{ kHz} - 20 \text{ kHz} = 80 \text{ kHz}$ to $100 \text{ kHz} + 20 \text{ kHz} = 120 \text{ kHz}$.

**Q6. What external components are typically needed to set the operating frequency of a PLL IC like the 565?**
**A6.** A resistor ($R_1$) and a capacitor ($C_1$) are needed to set the free-running frequency of the VCO. An additional resistor ($R_2$) is often used with $C_1$ to form the low-pass filter.

**Q7. Can a PLL be used as a frequency multiplier? If so, how?**
**A7.** Yes, a PLL can be used as a frequency multiplier. This is achieved by placing a frequency divider with a division ratio 'N' in the feedback loop between the VCO output and the phase detector input. The PLL will then lock such that the VCO output frequency is N times the reference input frequency.

**Q8. Describe the primary function of the Voltage-Controlled Oscillator (VCO) in a PLL.**
**A8.** The primary function of the VCO is to generate an output signal whose frequency can be varied by an input control voltage. In a PLL, this control voltage is provided by the filtered output of the phase detector, allowing the VCO's frequency to track the reference signal.

---

This comprehensive study guide covers the essential aspects of Phase Locked Loops as per the learning outcomes and references provided. It aims to provide a clear understanding for students of Linear Integrated Circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
