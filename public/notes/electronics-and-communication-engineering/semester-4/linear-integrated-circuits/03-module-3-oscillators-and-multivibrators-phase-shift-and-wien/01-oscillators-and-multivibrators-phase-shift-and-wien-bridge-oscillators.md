---
title: "Oscillators and Multivibrators:  Phase Shift and Wien-bridge Oscillators"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 3: Oscillators and Multivibrators:  Phase Shift and Wien"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe572"
status: "completed"
scrapedAt: "2026-05-23T17:49:46.565Z"
---
# LINEAR INTEGRATED CIRCUITS - Module 3: Oscillators and Multivibrators: Phase Shift and Wien-bridge Oscillators

---

## 3.1 Introduction to Oscillators and Multivibrators

**Course Outcomes Addressed:** CO1 (K2), CO3 (K2)

**Key Concepts:**
*   **Oscillator:** A circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangle wave, without any external input signal. They are fundamental building blocks for generating signals in electronic systems.
*   **Multivibrator:** A circuit that typically produces non-sinusoidal waveforms, such as square waves or rectangular pulses. They are characterized by having two distinct states and transitioning between them.

**Fundamental Principle of Oscillation:**
For a circuit to oscillate, it must satisfy two conditions (Barkhausen Criterion):
1.  **Loop Gain Magnitude:** The magnitude of the open-loop gain of the circuit must be equal to or greater than unity ($|A\beta| \ge 1$).
2.  **Loop Phase Shift:** The total phase shift around the feedback loop must be an integer multiple of 360 degrees ($0^\circ$, $360^\circ$, $720^\circ$, etc.).

**Role of Op-Amps:**
Operational amplifiers (op-amps) are commonly used in oscillator and multivibrator circuits due to their high open-loop gain, high input impedance, and low output impedance. These characteristics allow them to function as the active amplifying element in the feedback loop.

**Textbook References:**
*   Roy D. C. & Jain S. B. (5/e, 2018), Chapter 14: Oscillators.
*   Franco Sergio (3/e, 2017), Chapter 9: Oscillators.
*   Gayakwad R. A. (4/e, 2015), Chapter 10: Oscillators.

---

## 3.2 Phase Shift Oscillator

**Course Outcomes Addressed:** CO1 (K2), CO2 (K3), CO4 (K3)

**Description:** A phase shift oscillator is an electronic oscillator that uses a phase-shifting circuit, usually an RC (Resistor-Capacitor) network, to introduce a specific phase shift. When this phase shift, combined with the phase inversion of an op-amp, results in a total phase shift of 360 degrees, oscillation occurs.

**Circuit Configuration:**
*   **Op-Amp:** Configured as a non-inverting amplifier or an inverting amplifier. For a true phase shift oscillator generating a sine wave, an inverting amplifier configuration is often preferred.
*   **RC Network:** Typically consists of three RC sections, each providing a 60-degree phase shift, for a total of 180 degrees phase shift. This, combined with the 180-degree phase shift of the inverting op-amp, fulfills the Barkhausen criterion.

**Working Principle (Using Inverting Op-Amp Configuration):**
1.  **Amplifier:** The op-amp provides a gain ($A_v$).
2.  **RC Feedback Network:** The three RC sections connected in cascade between the op-amp's output and its inverting input shift the signal's phase by 180 degrees.
3.  **Barkhausen Criterion:**
    *   The inverting op-amp provides a 180-degree phase shift.
    *   The three RC sections provide another 180-degree phase shift.
    *   Total phase shift = $180^\circ + 180^\circ = 360^\circ$.
    *   For sustained oscillation, the loop gain must be at least 1. The gain of the RC network is typically $1/8$ for three identical RC sections. Therefore, the gain of the op-amp amplifier stage must be at least $1/(1/8) = 8$ to ensure $|A\beta| \ge 1$.

**Circuit Diagram (Typical Three-Stage RC Phase Shift Oscillator):**

```
      +-----------+
      |           |
      |   Op-Amp  |---+---- Output
      |           |   |
      +-----------+   |
            ^         |
            |         |
      Inverting Input |
            |         |
      +-----R1-------C1------+
      |     |        |      |
      |    ---      ---     |
      |    ---      ---     |
      |     |        |      |
      +-----R2-------C2------+
      |     |        |      |
      |    ---      ---     |
      |    ---      ---     |
      |     |        |      |
      +-----R3-------C3------+
            |        |
            +--------+ Feedback to Inverting Input
```

**Frequency of Oscillation:**
For a phase shift oscillator with three identical RC sections, where each section consists of a resistor R and a capacitor C, the frequency of oscillation ($f_o$) is given by:

$f_o = \frac{1}{2\pi RC\sqrt{6}}$

**Gain Requirement:**
The gain required from the op-amp stage ($A_v$) to sustain oscillation is:

$A_v = - \frac{1}{\beta}$

where $\beta$ is the gain of the feedback network. For the three identical RC sections, $\beta = -1/8$. Therefore, the minimum required gain is $A_v = -8$.

**Design Considerations:**
*   **Component Selection:** Resistors and capacitors should be chosen to achieve the desired frequency. For stability and accuracy, stable components should be used.
*   **Gain Adjustment:** The gain of the op-amp can be set using feedback resistors. A variable resistor can be used to adjust the gain to compensate for component tolerances and ensure oscillation.
*   **Loading Effects:** The output impedance of the op-amp and the input impedance of the feedback network can affect the performance.

**Example:**
Design a phase shift oscillator to produce a sine wave with a frequency of 1 kHz. Assume you are using identical RC sections.

**Solution:**
Using the frequency formula: $f_o = \frac{1}{2\pi RC\sqrt{6}}$
We need to select values for R and C. Let's choose a capacitor value, say $C = 0.1 \mu F$.
Rearranging the formula to solve for R:
$R = \frac{1}{2\pi f_o C \sqrt{6}}$
$R = \frac{1}{2\pi (1000 \, Hz) (0.1 \times 10^{-6} \, F) \sqrt{6}}$
$R = \frac{1}{2\pi \times 10^{-4} \times \sqrt{6}}$
$R \approx \frac{10^4}{2\pi \times 2.449} \approx \frac{10000}{15.39} \approx 649.7 \Omega$

So, we can use $R = 650 \Omega$ and $C = 0.1 \mu F$ for each of the three RC sections.
The op-amp must provide a gain of at least 8. If using a non-inverting configuration, the feedback resistors $R_f$ and $R_i$ must satisfy $1 + \frac{R_f}{R_i} \ge 8$. If using an inverting configuration, the gain is $-\frac{R_f}{R_i}$, so $|\frac{R_f}{R_i}| \ge 8$.

**Important Points to Remember:**
*   Total phase shift of 360 degrees is crucial.
*   Minimum loop gain magnitude of 1 is required.
*   Three RC sections give 180 degrees phase shift.
*   Inverting op-amp configuration provides the other 180 degrees.
*   Gain of the amplifier must be at least 8.
*   Output waveform is a sine wave.

**Textbook References:**
*   Roy D. C. & Jain S. B. (5/e, 2018), Section 14.1: Phase Shift Oscillator.
*   Gayakwad R. A. (4/e, 2015), Section 10.1: Phase-Shift Oscillator.
*   Sedra A. S. & Smith K. C. (6/e, 2013), Chapter 11: Oscillators (general principles apply).

---

## 3.3 Wien-Bridge Oscillator

**Course Outcomes Addressed:** CO1 (K2), CO2 (K3), CO4 (K3)

**Description:** The Wien-bridge oscillator is a popular and widely used oscillator circuit that generates a pure sine wave. It utilizes a Wien bridge network in its feedback path and an amplifier. It is known for its good frequency stability and low distortion.

**Circuit Configuration:**
*   **Amplifier:** Typically uses two op-amps. One op-amp acts as the amplifier with a non-inverting gain, and the other op-amp is used to provide a constant gain and stability.
*   **Wien Bridge Network:** Consists of a series RC arm and a parallel RC arm. This network has a unique property: it passes signals of a specific frequency with zero phase shift and maximum gain, while attenuating signals at other frequencies and introducing phase shifts.

**Working Principle:**
1.  **Wien Bridge Network:** The Wien bridge network is designed such that at a specific frequency, called the resonant frequency or oscillation frequency, it passes the signal with unity gain and zero phase shift.
    *   The series combination of R and C has an impedance $Z_1 = R + \frac{1}{j\omega C}$.
    *   The parallel combination of R and C has an impedance $Z_2 = \frac{R \cdot \frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = \frac{R}{1 + j\omega RC}$.
    *   The voltage divider formed by $Z_1$ and $Z_2$ with respect to the amplifier output determines the feedback signal.
2.  **Feedback Path:** The Wien bridge network is connected between the output of the amplifier and the non-inverting input of the amplifier.
3.  **Gain and Feedback:** The amplifier is configured as a non-inverting amplifier. A portion of the output signal is fed back to the non-inverting input through the Wien bridge network. The remaining portion of the output signal is fed back to the inverting input through a voltage divider to control the gain.
4.  **Barkhausen Criterion:**
    *   **Phase Shift:** At the oscillation frequency, the Wien bridge network provides zero phase shift. The non-inverting amplifier provides zero phase shift. Thus, the total loop phase shift is $0^\circ + 0^\circ = 0^\circ$ (or $360^\circ$).
    *   **Loop Gain:** The gain of the Wien bridge network at the oscillation frequency is $1/3$. To satisfy $|A\beta| \ge 1$, the gain of the amplifier stage ($A_v$) must be at least $1/(1/3) = 3$.

**Circuit Diagram (Typical Two-Op-Amp Wien-Bridge Oscillator):**

```
      +-----------+
      |           |
      |  Op-Amp 1 |---+---- Output
      | (Amplifier)|   |
      +-----------+   |
            ^         |
            |         |
      Non-inv Input   |
            |         |
      +-----R-------C------+
      |     |       |      |
      |    ---     ---     |
      |    ---     ---     |
      |     |       |      |
      +-----R-------C------+
            |       |
            |       |
      +-----R-------C------+
      |     |       |      |
      |    ---     ---     |
      |    ---     ---     |
      |     |       |      |
      +-----R-------C------+  <-- Feedback to Non-inv Input of Op-Amp 1
            |
            |
      +-----R2-----+
      |            |
      |   Op-Amp 2 |---+---- (Gain setting)
      | (Gain/Bias)|   |
      +-----------+   |
            ^         |
            |         |
      Non-inv Input   |
            |         |
      Feedback from   |
      Output of       |
      Op-Amp 1        |
            |         |
      +-----R1-----+  |
      |            |  |
      +------------+--+ Feedback to Inverting Input of Op-Amp 1

```
*Note: The diagram above is a conceptual representation. A common configuration uses one op-amp as amplifier and the other for gain stabilization.*

A more practical implementation often uses a single op-amp as a non-inverting amplifier, with the Wien bridge network providing the positive feedback (zero phase shift). The gain is set to be slightly greater than 3 to ensure oscillation. To prevent amplitude runaway, a gain stabilization mechanism is needed, often employing diodes or a lamp filament as a voltage-dependent resistor.

**Simplified Wien-Bridge Oscillator Circuit (Single Op-Amp):**

```
      +-----------+
      |           |
      |  Op-Amp   |---+---- Output
      | (Non-inv) |   |
      +-----------+   |
            ^         |
            |         |
      Non-inv Input   |
            |         |
      +-----R-------C------+
      |     |       |      |
      |    ---     ---     |
      |    ---     ---     |
      |     |       |      |
      +-----R-------C------+  <-- Series RC arm
            |       |
            +-------+--------+
                    |        |
                    +--------+
                    |        |
                    |       ---
                    |       ---
                    |        |
            +-------+--------+
            |       |
      +-----R-------C------+
      |     |       |      |
      |    ---     ---     |
      |    ---     ---     |
      |     |       |      |
      +-----R-------C------+  <-- Parallel RC arm
            |
            |
      +-----R_f----+
      |            |
      +----R_i-----+---- Feedback to Inverting Input of Op-Amp
```

In this simplified version:
*   The series RC arm and parallel RC arm form the Wien bridge feedback.
*   The amplifier is non-inverting.
*   The gain setting resistors $R_i$ and $R_f$ set the amplifier gain.

**Frequency of Oscillation:**
For a Wien bridge oscillator where all four resistors are equal (R) and all two capacitors are equal (C), the frequency of oscillation ($f_o$) is given by:

$f_o = \frac{1}{2\pi RC}$

**Gain Requirement:**
The gain of the amplifier stage ($A_v$) must be at least 3 to sustain oscillation.

$A_v = 1 + \frac{R_f}{R_i} \ge 3$

**Amplitude Stabilization:**
To prevent the oscillation amplitude from increasing indefinitely (due to the loop gain being slightly greater than 1), amplitude stabilization is required. Common methods include:
*   **Using Diodes:** Diodes in the feedback path of the amplifier can clip the waveform, effectively limiting the gain.
*   **Lamp Filament:** A small incandescent lamp filament or a JFET can be used as a voltage-dependent resistor. As the output voltage increases, the resistance of the filament increases, reducing the amplifier gain and stabilizing the amplitude.

**Design Considerations:**
*   **Frequency Stability:** The Wien-bridge oscillator exhibits good frequency stability as the oscillation frequency depends on the R and C values, which are less sensitive to variations than the frequency-determining components in other oscillators (like crystal oscillators).
*   **Low Distortion:** With proper design and stabilization, the Wien-bridge oscillator can produce very low distortion sine waves.
*   **Gain Setting:** The gain of the amplifier stage must be precisely set to be slightly above 3 to ensure oscillation without excessive amplitude distortion.

**Example:**
Design a Wien-bridge oscillator to produce a sine wave with a frequency of 10 kHz.

**Solution:**
Using the frequency formula: $f_o = \frac{1}{2\pi RC}$
Let's choose $R = 10 k\Omega$.
Rearranging to solve for C:
$C = \frac{1}{2\pi f_o R}$
$C = \frac{1}{2\pi (10 \times 10^3 \, Hz) (10 \times 10^3 \, \Omega)}$
$C = \frac{1}{2\pi \times 10^8} \approx \frac{1}{6.283 \times 10^8} \approx 0.159 \times 10^{-8} \, F = 1.59 \, nF$

So, we can use $R = 10 k\Omega$ and $C = 1.59 nF$ for the Wien bridge network.
The amplifier gain must be at least 3. If using a non-inverting amplifier configuration with resistors $R_i$ and $R_f$, we need $1 + \frac{R_f}{R_i} \ge 3$.
A common choice for stabilization is to set the gain to approximately 3. If we choose $R_i = 10 k\Omega$, then $1 + \frac{R_f}{10 k\Omega} = 3$, which gives $\frac{R_f}{10 k\Omega} = 2$, so $R_f = 20 k\Omega$.
For amplitude stabilization, a variable resistor or a lamp filament can be used in series with $R_f$ or as $R_f$ itself.

**Important Points to Remember:**
*   Generates a pure sine wave.
*   Uses a Wien bridge network for frequency selection and zero phase shift.
*   Requires a non-inverting amplifier with a gain of at least 3.
*   Amplitude stabilization is crucial for preventing distortion.
*   Frequency of oscillation is $f_o = \frac{1}{2\pi RC}$.
*   Good frequency stability and low distortion.

**Textbook References:**
*   Roy D. C. & Jain S. B. (5/e, 2018), Section 14.2: Wien Bridge Oscillator.
*   Gayakwad R. A. (4/e, 2015), Section 10.2: Wien-Bridge Oscillator.
*   Franco Sergio (3/e, 2017), Chapter 9: Wien-Bridge Oscillator.
*   Bell David A. (3/e, 2011), Chapter 11: Oscillators (Wien-Bridge Oscillator).

---

## 3.4 Comparison and Applications

**Course Outcomes Addressed:** CO2 (K3), CO3 (K2)

| Feature           | Phase Shift Oscillator                       | Wien-Bridge Oscillator                         |
| :---------------- | :------------------------------------------- | :--------------------------------------------- |
| **Waveform**      | Sine wave                                    | Sine wave                                      |
| **Phase Shift**   | 180° from RC network + 180° from inverting op-amp | 0° from Wien bridge network + 0° from non-inv op-amp |
| **Gain Requirement** | $A_v \ge 8$ (for 3 RC stages)                | $A_v \ge 3$                                    |
| **Components**    | Resistors, Capacitors, Op-amp(s)             | Resistors, Capacitors, Op-amp(s)               |
| **Frequency Formula** | $f_o = \frac{1}{2\pi RC\sqrt{6}}$ (for 3 identical RC) | $f_o = \frac{1}{2\pi RC}$ (for R and C components) |
| **Stability**     | Moderate                                     | Good                                           |
| **Distortion**    | Moderate (can be improved with gain margin)  | Low (inherently good)                          |
| **Complexity**    | Simpler to construct with fewer components for basic function | Requires careful component selection and amplitude stabilization |
| **Tuning**        | Tuning R or C in all stages to maintain phase shift | Tuning R or C in the Wien bridge network, gain must be adjusted accordingly |

**Applications:**

*   **Phase Shift Oscillators:**
    *   Signal generation in audio frequency applications.
    *   Test equipment.
    *   Function generators.

*   **Wien-Bridge Oscillators:**
    *   High-quality sine wave generation for audio amplifiers testing.
    *   Function generators requiring pure sine waves.
    *   Precision signal sources in communication systems.
    *   Bridge measurements.

**Textbook References:**
*   Roy D. C. & Jain S. B. (5/e, 2018), Chapter 14: Oscillators (summary and comparison of types).
*   Gayakwad R. A. (4/e, 2015), Chapter 10: Oscillators (summary and applications).

---

## 3.5 Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding of Phase Shift and Wien-Bridge Oscillators.

**Question 1:**
What are the two fundamental conditions that must be met for an oscillator circuit to produce sustained oscillations?
*   **Answer:** (a) The magnitude of the loop gain must be equal to or greater than unity ($|A\beta| \ge 1$). (b) The total phase shift around the feedback loop must be an integer multiple of 360 degrees ($0^\circ, 360^\circ, 720^\circ$, etc.).

**Question 2:**
For a phase shift oscillator using an inverting op-amp configuration and three identical RC sections, what is the minimum gain required for the op-amp stage?
*   **Answer:** 8

**Question 3:**
Calculate the frequency of oscillation for a phase shift oscillator if each of the three identical RC sections uses a resistor of $10 k\Omega$ and a capacitor of $0.01 \mu F$.
*   **Answer:**
    $f_o = \frac{1}{2\pi RC\sqrt{6}}$
    $R = 10 \times 10^3 \, \Omega$
    $C = 0.01 \times 10^{-6} \, F$
    $f_o = \frac{1}{2\pi (10 \times 10^3) (0.01 \times 10^{-6}) \sqrt{6}}$
    $f_o = \frac{1}{2\pi \times 10^{-4} \times \sqrt{6}} = \frac{10^4}{2\pi \times 2.449} \approx 649.7 \, Hz$
    So, $f_o \approx 650 \, Hz$.

**Question 4:**
What is the primary advantage of a Wien-bridge oscillator over a phase shift oscillator in terms of waveform quality?
*   **Answer:** A Wien-bridge oscillator generally produces a purer sine wave with lower distortion compared to a phase shift oscillator.

**Question 5:**
If a Wien-bridge oscillator uses resistors of $10 k\Omega$ and capacitors of $10 nF$, what is the frequency of oscillation?
*   **Answer:**
    $f_o = \frac{1}{2\pi RC}$
    $R = 10 \times 10^3 \, \Omega$
    $C = 10 \times 10^{-9} \, F$
    $f_o = \frac{1}{2\pi (10 \times 10^3) (10 \times 10^{-9})}$
    $f_o = \frac{1}{2\pi \times 10^{-4}} = \frac{10^4}{2\pi} \approx 1591.5 \, Hz$
    So, $f_o \approx 1.59 \, kHz$.

**Question 6:**
What is the minimum gain required for the amplifier stage in a Wien-bridge oscillator? Why is amplitude stabilization necessary?
*   **Answer:** The minimum gain required is 3. Amplitude stabilization is necessary to prevent the oscillation amplitude from increasing indefinitely, which would lead to clipping and distortion of the sine wave. It ensures that the loop gain remains just above unity at the oscillation frequency.

**Question 7:**
Design a phase shift oscillator to produce a sine wave at approximately 2 kHz. Choose appropriate values for R and C for the RC sections and specify the required op-amp gain.
*   **Answer:**
    Let $f_o = 2000 \, Hz$.
    Using $f_o = \frac{1}{2\pi RC\sqrt{6}}$
    Let's choose $C = 0.01 \mu F$.
    $R = \frac{1}{2\pi f_o C \sqrt{6}} = \frac{1}{2\pi (2000) (0.01 \times 10^{-6}) \sqrt{6}} = \frac{10^4}{2\pi \times 2 \times \sqrt{6}} \approx \frac{10000}{2\pi \times 4.899} \approx \frac{10000}{30.77} \approx 325 \, \Omega$.
    So, you can use $R = 325 \, \Omega$ and $C = 0.01 \, \mu F$ for each of the three RC sections.
    The required op-amp gain is at least 8.

**Question 8:**
Discuss a method for achieving amplitude stabilization in a Wien-bridge oscillator.
*   **Answer:** One common method is to use a voltage-dependent resistor, such as a small incandescent lamp filament, in the feedback path of the amplifier (e.g., in series with $R_f$ or as $R_f$). As the output voltage increases, the filament's resistance increases, reducing the amplifier's gain and thus stabilizing the amplitude. Another method involves using diodes in the feedback network to clip the waveform.

---
This concludes Module 3: Phase Shift and Wien-bridge Oscillators. Ensure you have grasped the principles of oscillation, the specific working of these two common oscillator types, and the factors influencing their design and performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
