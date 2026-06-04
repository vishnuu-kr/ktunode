---
title: "RC Phase shift Oscillator"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a4"
status: "completed"
scrapedAt: "2026-05-23T17:49:57.889Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 1: Familiarization of Operational Amplifiers

### Topic: RC Phase Shift Oscillator

---

### 1. Introduction to Oscillators

**Definition:** An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangular wave. These signals are often used in applications such as radio transmitters, audio synthesizers, and clock signals in digital circuits.

**Key Concept:** Oscillators generally operate on the principle of **positive feedback**. A portion of the output signal is fed back to the input in such a phase that it reinforces the input signal, causing sustained oscillations.

---

### 2. RC Phase Shift Oscillator

**Description:** The RC Phase Shift Oscillator is a type of feedback oscillator that uses an amplifier (typically an operational amplifier) and a phase-shifting network composed of resistors (R) and capacitors (C) to produce a sinusoidal output.

**Principle of Operation:**
The circuit consists of an amplifier with high gain and a passive RC network. The RC network is designed to introduce a specific amount of phase shift at a particular frequency. For sustained oscillations to occur, two conditions must be met:

*   **Barkhausen Criterion:**
    1.  **Loop Gain:** The magnitude of the loop gain ($|A\beta|$) must be equal to or greater than unity ($ \ge 1$).
    2.  **Phase Shift:** The total phase shift around the feedback loop must be an integer multiple of 360 degrees ($n \times 360^\circ$, where $n = 1, 2, 3, ...$).

In the RC phase shift oscillator, the amplifier provides a phase inversion (180° phase shift) if it's an inverting amplifier configuration. The RC network is designed to provide an additional 180° phase shift at the oscillation frequency. Thus, the total phase shift becomes $180^\circ + 180^\circ = 360^\circ$.

---

### 3. Circuit Diagram and Components

**Typical Circuit Configuration (using an Op-Amp as an Inverting Amplifier):**

```
        +----------+
        |          |
   ----(+Vcc)      |
        |          |
      -----        +-------+
       --- R1      |       |
        |          |       |
     ---|-----/\/\/------>---- Output (Vout)
        |       R2     |       |
      -----           -----  |
       --- C1        --- C2  |
        |          |       |
        |          |       |
     ---|----------+-------+
        |          |
      -----        |
       --- R3      |
        |          |
     ---|----------|------>---- Feedback (Vin)
        |          |
        |          |
      -----        |
       --- C3      |
        |          |
     ---|----------+
        |
       GND
```

**Components:**

*   **Operational Amplifier (Op-Amp):** Configured as an inverting amplifier. The gain of the inverting amplifier is determined by the feedback resistor ($R_f$) and the input resistor ($R_1$): $A_v = -\frac{R_f}{R_1}$.
*   **RC Network:** Typically consists of three cascaded RC sections. Each section provides a phase shift of approximately 60° at the oscillation frequency, totaling 180°.
    *   **Resistors (R):** The values of these resistors determine the frequency of oscillation and contribute to the required loop gain.
    *   **Capacitors (C):** The values of these capacitors determine the frequency of oscillation.
*   **Power Supply:** Required for the Op-Amp to function.

---

### 4. Working Principle and Phase Shift Calculation

**Phase Shift from RC Network:**
A single RC series network ($R$ and $C$) exhibits a phase shift between the voltage across the resistor and the voltage across the capacitor. For a phase shift oscillator, we need a network that shifts the signal by 180°. A common configuration uses three cascaded RC sections.

Consider a single RC section where the output is taken across the capacitor. The impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$. The impedance of the resistor is $Z_R = R$.
The voltage transfer function for a single RC section (output across C) is:
$H(\omega) = \frac{V_{out}}{V_{in}} = \frac{Z_C}{Z_R + Z_C} = \frac{\frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = \frac{1}{1 + j\omega RC}$

The phase shift $\phi$ is given by the argument of $H(\omega)$:
$\phi = \arg(H(\omega)) = \arctan\left(\frac{\text{Im}(H(\omega))}{\text{Re}(H(\omega))}\right) = \arctan\left(-\frac{\omega RC}{1}\right) = -\arctan(\omega RC)$

For the RC phase shift oscillator to work, each of the three cascaded RC sections needs to provide a phase shift of $-60^\circ$ to achieve a total of $-180^\circ$ from the RC network.
This occurs when:
$|\frac{1}{1 + j\omega RC}| = \frac{1}{\sqrt{1^2 + (\omega RC)^2}}$
The phase shift is $-60^\circ$ when $\cos(60^\circ) = \frac{1}{2}$ and $\sin(60^\circ) = \frac{\sqrt{3}}{2}$.
For a phase shift of $-60^\circ$, we have $\tan(-60^\circ) = -\sqrt{3}$.
So, $-\omega RC = -\sqrt{3}$, which means $\omega RC = \sqrt{3}$.

**Oscillation Frequency:**
The angular frequency of oscillation $\omega_0$ is determined by the RC components. For three identical RC sections:
$\omega_0 RC = \sqrt{3}$
$\omega_0 = \frac{\sqrt{3}}{RC}$

The frequency of oscillation $f_0$ is:
$f_0 = \frac{\omega_0}{2\pi} = \frac{\sqrt{3}}{2\pi RC}$

**Gain Requirement:**
The magnitude of the voltage transfer function for each RC section is $|H(\omega_0)| = \frac{1}{\sqrt{1^2 + (\sqrt{3})^2}} = \frac{1}{\sqrt{1+3}} = \frac{1}{\sqrt{4}} = \frac{1}{2}$.
Since there are three such sections, the total attenuation from the RC network is $(\frac{1}{2})^3 = \frac{1}{8}$.
For sustained oscillations, the loop gain $|A\beta| \ge 1$.
Here, $\beta$ is the feedback factor, which is the ratio of the output voltage of the RC network to the output voltage of the amplifier. In this case, $\beta = (\frac{1}{2})^3 = \frac{1}{8}$ (in magnitude, considering the attenuation).
Therefore, the amplifier must provide a voltage gain $A_v$ such that $|A_v| \times |\beta| \ge 1$.
$|A_v| \times \frac{1}{8} \ge 1$
$|A_v| \ge 8$

The gain of the inverting amplifier is $A_v = -\frac{R_f}{R_1}$.
So, the condition for oscillation is $\frac{R_f}{R_1} \ge 8$.
To ensure oscillations start and are sustained, a gain slightly higher than 8 is often used. For example, a ratio of $R_f/R_1 = 10$ would be suitable.

---

### 5. Designing an RC Phase Shift Oscillator

**Design Steps:**

1.  **Choose the Oscillation Frequency ($f_0$):** Decide the desired frequency of the sine wave output.
2.  **Select RC Component Values:**
    *   Choose a value for $R$. Common choices are in the k$\Omega$ range (e.g., 10 k$\Omega$, 20 k$\Omega$).
    *   Calculate the value of $C$ using the frequency formula: $C = \frac{\sqrt{3}}{2\pi f_0 R}$.
    *   Ensure that the selected values of $R$ and $C$ are readily available standard component values.
3.  **Determine the Amplifier Gain:**
    *   Calculate the required gain: $|A_v| = \frac{R_f}{R_1} \ge 8$.
    *   Choose a convenient ratio for $R_f/R_1$. For example, if $R_1 = 1$ k$\Omega$, then $R_f \ge 8$ k$\Omega$. A common choice might be $R_1 = 1$ k$\Omega$ and $R_f = 10$ k$\Omega$ (providing a gain of 10).

**Example Design:**
Design an RC phase shift oscillator to produce a sine wave of frequency $f_0 = 1$ kHz.

*   **Step 1: Choose $f_0$.** $f_0 = 1$ kHz.
*   **Step 2: Select RC values.**
    *   Let's choose $R = 10$ k$\Omega$.
    *   Calculate $C$:
        $C = \frac{\sqrt{3}}{2\pi f_0 R} = \frac{\sqrt{3}}{2\pi \times (1 \times 10^3 \text{ Hz}) \times (10 \times 10^3 \Omega)}$
        $C = \frac{\sqrt{3}}{2\pi \times 10^7} \approx \frac{1.732}{62.83 \times 10^7} \approx 2.75 \times 10^{-9} \text{ F} = 2.75$ nF.
    *   A standard capacitor value close to 2.75 nF is 2.7 nF or 3.3 nF. Let's use $C = 2.7$ nF.
    *   Recalculate the frequency with $R=10$ k$\Omega$ and $C=2.7$ nF:
        $f_0 = \frac{\sqrt{3}}{2\pi RC} = \frac{1.732}{2\pi \times (10 \times 10^3) \times (2.7 \times 10^{-9})} \approx \frac{1.732}{169.6 \times 10^{-6}} \approx 1021$ Hz $\approx 1$ kHz.
*   **Step 3: Determine Amplifier Gain.**
    *   Required gain $|A_v| \ge 8$.
    *   Let's choose $R_1 = 1$ k$\Omega$.
    *   Then $R_f \ge 8$ k$\Omega$. We can choose $R_f = 10$ k$\Omega$.
    *   The gain will be $A_v = -\frac{10 \text{ k}\Omega}{1 \text{ k}\Omega} = -10$. This satisfies the $|A_v| \ge 8$ condition.

**Final Component Values for 1 kHz Oscillation:**
*   Op-Amp
*   $R_1 = 1$ k$\Omega$
*   $R_f = 10$ k$\Omega$
*   $R$ (for each of the three RC sections) = 10 k$\Omega$
*   $C$ (for each of the three RC sections) = 2.7 nF

---

### 6. Practical Considerations and Limitations

*   **Component Tolerances:** Resistors and capacitors have tolerances (e.g., 5%, 10%). These variations can affect the actual oscillation frequency and the loop gain, potentially preventing oscillations or causing the output to be distorted.
*   **Op-Amp Limitations:**
    *   **Gain-Bandwidth Product (GBWP):** The Op-Amp's GBWP limits the maximum frequency at which it can provide sufficient gain. For higher frequencies, the Op-Amp's gain will decrease, affecting the loop gain.
    *   **Slew Rate:** At higher output amplitudes and frequencies, the Op-Amp's slew rate can limit the output waveform's linearity, leading to distortion.
    *   **Output Voltage Swing:** The Op-Amp's output voltage is limited by its power supply voltages.
*   **Loading Effects:** Connecting the load to the oscillator output can alter the operating point and loading on the RC network, potentially affecting frequency and amplitude.
*   **Amplitude Stabilization:** The oscillation amplitude tends to increase until it is limited by the Op-Amp's saturation. This can result in a distorted, non-sinusoidal output. To achieve a pure sine wave, amplitude stabilization circuits (e.g., using diodes or JFETs) are often incorporated.
*   **Start-up:** The oscillator needs sufficient gain to overcome initial losses and start oscillating. The gain requirement of $\ge 8$ ensures this.
*   **Single-Stage vs. Multi-Stage Phase Shift:** While three stages are common, sometimes four or five stages are used to reduce the gain requirement of the amplifier, which can be beneficial for higher frequencies. However, more stages mean increased attenuation and more components.

---

### 7. Simulation using PSpice (as per M. H. Rashid's book)

**Objective:** To simulate the designed RC phase shift oscillator and observe its output waveform.

**Steps in PSpice:**
1.  **Create a new project:** In OrCAD Capture (or a similar PSpice-compatible tool), start a new schematic.
2.  **Place components:**
    *   Op-Amp (e.g., uA741 from the `OPAMP` library).
    *   Resistors (`R` library).
    *   Capacitors (`C` library).
    *   DC power sources (`VDC` library) for Op-Amp supply (e.g., +15V and -15V).
    *   Ground symbol (`GND`).
3.  **Wire the components:** Connect the components according to the RC phase shift oscillator circuit diagram, using the calculated component values.
    *   Configure the Op-Amp as an inverting amplifier with feedback resistor $R_f$ and input resistor $R_1$.
    *   Connect the output of the inverting amplifier stage to the input of the first RC phase shift network.
    *   Cascade the three RC sections. Ensure the output of the third RC section is fed back to the inverting input of the Op-Amp.
    *   Connect the non-inverting input of the Op-Amp to ground.
    *   Connect the power supply to the Op-Amp.
4.  **Add analysis setup:**
    *   Go to `PSpice` -> `New Simulation Profile`.
    *   Choose `Transient` analysis.
    *   Set the `Run Time` to a sufficient duration to observe stable oscillations (e.g., 1ms or 10ms for frequencies in kHz).
5.  **Run the simulation:** Click the `Run` button.
6.  **View the output:** A PSpice plot window will appear, showing the simulated voltages. You can add cursors to measure frequency and amplitude. Observe the output waveform at the amplifier's output terminal and after the RC network.

**Expected Simulation Result:** A sinusoidal output waveform at the designed frequency (e.g., 1 kHz for the example). The amplitude will be limited by the Op-Amp's power supply rails.

---

### 8. Learning Outcomes Covered

*   **LO1: Design and implement basic linear integrated circuits using Op Amps. (K4)**
    *   This topic involves designing an oscillator circuit using an Op-Amp in an inverting configuration. The design process requires understanding the Op-Amp's gain and phase characteristics.
*   **LO2: Design and implement basic linear integrated circuits using linear ICs. (K4)**
    *   The RC phase shift oscillator is a basic linear IC application. The design process involves selecting appropriate passive components (R and C) alongside the Op-Amp.
*   **LO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools. (K4)**
    *   The inclusion of PSpice simulation steps directly addresses this outcome. Students learn to model the circuit and predict its behavior before physical implementation.
*   **LO4: Effectively troubleshoot a given circuit and analyze it (K4)**
    *   Understanding the Barkhausen criteria and practical limitations helps in troubleshooting. If an oscillator doesn't oscillate or produces a distorted output, analysis based on gain, phase shift, and component values becomes crucial. Identifying why the gain might be insufficient or the phase shift incorrect is part of troubleshooting.

---

### 9. Course Outcomes Alignment

*   **CO1: Design and implement basic linear integrated circuits using Op Amps. (K4)**
    *   The design of the RC phase shift oscillator directly uses Op-Amps to achieve amplification and oscillation. Understanding the required gain and phase shift for oscillation is key.
*   **CO2: Design and implement basic linear integrated circuits using linear ICs. (K4)**
    *   This is a fundamental linear IC application. The design involves selecting appropriate passive components to work with the Op-Amp for oscillation.
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools. (K4)**
    *   The PSpice simulation section directly addresses this outcome, allowing students to verify their designs before practical implementation.
*   **CO4: Effectively troubleshoot a given circuit and analyze it (K4)**
    *   The practical considerations and limitations discussed are essential for troubleshooting. If the circuit doesn't work as expected, understanding the gain requirement, phase shift at each stage, and Op-Amp characteristics helps diagnose the problem.

---

### 10. Important Points to Remember

*   **Barkhausen Criteria:** Magnitude of loop gain $\ge 1$ and total phase shift $= n \times 360^\circ$.
*   **RC Phase Shift Oscillator:** Uses an amplifier (Op-Amp) and an RC network to achieve the required 180° phase shift.
*   **Gain Requirement:** For a three-stage RC network, the amplifier gain must be at least 8.
*   **Frequency Formula:** $f_0 = \frac{\sqrt{3}}{2\pi RC}$ for three identical RC sections.
*   **Amplitude Stabilization:** Often required to prevent distortion due to Op-Amp saturation.
*   **Practical limitations:** Component tolerances, Op-Amp GBWP, and slew rate are critical for successful implementation, especially at higher frequencies.

---

### 11. Practice Questions and Exercises

**Question 1:**
An RC phase shift oscillator is designed to operate at 5 kHz. If the resistors in the RC network are chosen to be 10 k$\Omega$, calculate the required capacitance for each RC stage.

**Answer:**
The frequency of oscillation is given by $f_0 = \frac{\sqrt{3}}{2\pi RC}$.
Rearranging for C: $C = \frac{\sqrt{3}}{2\pi f_0 R}$.
Given: $f_0 = 5$ kHz $= 5 \times 10^3$ Hz, $R = 10$ k$\Omega = 10 \times 10^3 \Omega$.
$C = \frac{\sqrt{3}}{2\pi \times (5 \times 10^3) \times (10 \times 10^3)} = \frac{1.732}{2\pi \times 50 \times 10^6} = \frac{1.732}{314.16 \times 10^6} \approx 5.51 \times 10^{-9}$ F.
So, $C \approx 5.5$ nF.

**Question 2:**
For the RC phase shift oscillator to oscillate, what is the minimum voltage gain required from the amplifier stage if a three-stage RC feedback network is used?

**Answer:**
The minimum voltage gain required is 8. This is because each of the three RC stages introduces an attenuation of $\frac{1}{2}$ at the oscillation frequency, resulting in a total feedback network attenuation of $(\frac{1}{2})^3 = \frac{1}{8}$. For the loop gain to be at least 1, the amplifier gain must be at least 8.

**Question 3:**
If you are building a 2 kHz RC phase shift oscillator and you select $R = 20$ k$\Omega$ and $C = 0.004$ $\mu$F for each of the three RC sections, what is the theoretical oscillation frequency? Will the oscillator likely oscillate if the Op-Amp provides a gain of 10? Justify your answer.

**Answer:**
Theoretical Oscillation Frequency:
$f_0 = \frac{\sqrt{3}}{2\pi RC} = \frac{1.732}{2\pi \times (20 \times 10^3 \Omega) \times (0.004 \times 10^{-6} F)}$
$f_0 = \frac{1.732}{2\pi \times 80 \times 10^{-3}} = \frac{1.732}{502.65 \times 10^{-3}} \approx 3.45$ kHz.

Will it oscillate? Yes.
Justification:
The Op-Amp provides a gain of 10.
The three-stage RC network has a total attenuation of $(\frac{1}{2})^3 = \frac{1}{8}$.
The loop gain is $A\beta = 10 \times \frac{1}{8} = 1.25$.
Since the loop gain (1.25) is greater than 1, the oscillator will likely oscillate.

**Question 4:**
Explain one major practical limitation of an RC phase shift oscillator and how it can be addressed.

**Answer:**
**Limitation:** Amplitude distortion due to Op-Amp saturation. The output amplitude increases until it hits the Op-Amp's power supply limits, causing the sine wave to flatten or clip, resulting in a non-sinusoidal output.

**Addressing it:** Amplitude stabilization circuits can be incorporated. A common method involves using diodes or a JFET in the feedback path. For example, a resistor in the feedback loop can be replaced by a JFET whose gate is biased such that its drain-source resistance increases with increasing output voltage, effectively reducing the amplifier gain and limiting the amplitude. Alternatively, back-to-back Zener diodes or rectifier diodes can be placed across the feedback resistor to limit the voltage swing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 12. References

*   **Textbook:**
    *   Choudhary, D. R., & Jain, S. B. (2021). *Linear Integrated Circuits* (6th ed.). New Age International Private Limited. (Refer to chapters on Oscillators and Op-Amp applications).
    *   Rashid, M. H. (2015). *Introduction to Pspice Using Orcad for Circuits and Electronics* (3rd ed.). Pearson. (Refer to sections on Transient Analysis and simulating oscillators).
*   **Reference Books:**
    *   Gayakwad, R. A. (2002). *Op-Amps And Linear Integrated Circuits*. PHI.
    *   Choudhury, D. R., & Jain, S. B. (2018). *Linear Integrated Circuits*. New Age International.

---