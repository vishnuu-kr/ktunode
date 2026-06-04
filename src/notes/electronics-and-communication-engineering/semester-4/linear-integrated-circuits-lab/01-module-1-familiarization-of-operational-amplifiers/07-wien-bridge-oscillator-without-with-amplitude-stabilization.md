---
title: "Wien bridge oscillator - without & with amplitude stabilization"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a3"
status: "completed"
scrapedAt: "2026-05-23T17:49:57.183Z"
---
# LINEAR INTEGRATED CIRCUITS LAB: Module 1 - Familiarization of Operational Amplifiers

## Topic: Wien Bridge Oscillator - Without & With Amplitude Stabilization

---

### 1. Introduction to Oscillators

**Definition:** An oscillator is a circuit that produces a periodic, alternating waveform without any external input signal. It essentially converts DC power into AC power at a desired frequency.

**Key Principle:** Oscillators rely on positive feedback. A portion of the output signal is fed back to the input in such a way that it reinforces the signal, leading to sustained oscillations.

**Barkhausen Criterion:** For sustained oscillations in an oscillator circuit, two conditions must be met:

1.  **Phase Shift:** The total phase shift around the feedback loop must be 0° or an integer multiple of 360°.
2.  **Gain:** The magnitude of the loop gain (product of amplifier gain and feedback network gain) must be equal to or greater than unity (Av * Af ≥ 1).

---

### 2. The Wien Bridge Oscillator

**Concept:** The Wien bridge oscillator is a widely used harmonic oscillator that produces a sinusoidal output. It utilizes an RC (Resistor-Capacitor) network, configured as a frequency-selective feedback path, to determine the oscillation frequency.

**Circuit Topology:**
*   It typically employs an operational amplifier (Op-Amp) as the amplifying element.
*   The feedback network consists of two arms:
    *   **Frequency-determining network:** A series RC combination and a parallel RC combination.
    *   **Gain-setting network:** A voltage divider using resistors.

**Basic Wien Bridge Oscillator Circuit (Without Amplitude Stabilization):**

```
      +Vcc
       |
       R1       R2
       /        /
 Vin --*--------*------- Vout
       \        \
        C1       C2
        |        |
        R3       R4
        |        |
       GND      GND

(Note: This is a simplified representation. The Op-Amp itself is crucial.)
```

A more accurate representation with an Op-Amp:

*   **Non-inverting Amplifier Configuration:** The Op-Amp is typically used in a non-inverting amplifier configuration.
*   **Positive Feedback Path:** The Wien bridge network (typically a series RC and a parallel RC) is connected between the output and the non-inverting input of the Op-Amp, providing positive feedback.
*   **Negative Feedback Path:** A voltage divider (usually two resistors) is connected from the output to the inverting input of the Op-Amp, providing negative feedback.

**Analysis of the Wien Bridge Network:**
The Wien bridge network has two arms that are frequency-sensitive. For oscillation at a specific frequency, the bridge must be balanced in a particular way.

*   **Frequency-Determining Network:** A series combination of R and C, and a parallel combination of R and C are often used.
    *   When the impedance of the series RC arm is equal to the impedance of the parallel RC arm (in magnitude), the phase shift through this network is 0°.
    *   For a simple Wien bridge with $R_1 = R_2 = R$ and $C_1 = C_2 = C$, the condition for 0° phase shift occurs at a frequency:
        $f_0 = \frac{1}{2\pi RC}$

*   **Gain Requirement:** For sustained oscillations, the loop gain must be at least 1.
    *   In a non-inverting amplifier configuration, the voltage gain is $A_v = 1 + \frac{R_f}{R_i}$.
    *   The feedback network provides a fraction of the output voltage to the non-inverting input. The gain of the feedback network ($A_f$) is the ratio of the voltage at the non-inverting input to the output voltage.
    *   For the Wien bridge network with the specific RC configurations mentioned above, the gain at the frequency of oscillation ($f_0$) is $A_f = \frac{1}{3}$.
    *   Therefore, the required amplifier gain ($A_v$) must satisfy $A_v \times A_f \geq 1$.
    *   $A_v \times \frac{1}{3} \geq 1 \Rightarrow A_v \geq 3$.
    *   For a non-inverting amplifier, $A_v = 1 + \frac{R_f}{R_i}$. So, $1 + \frac{R_f}{R_i} \geq 3 \Rightarrow \frac{R_f}{R_i} \geq 2$.
    *   Typically, $R_f$ and $R_i$ are chosen such that $\frac{R_f}{R_i} = 2$ (or slightly higher) to ensure oscillations start.

**Operation (Without Stabilization):**

1.  When power is applied, there is always some internal noise voltage at the output of the Op-Amp.
2.  This noise voltage is fed back through the Wien bridge network and the amplifier.
3.  Due to the frequency-selective nature of the Wien bridge, only the frequency $f_0$ is amplified and fed back constructively.
4.  If the loop gain at $f_0$ is greater than 1, the oscillations at $f_0$ will build up.
5.  However, without amplitude stabilization, the oscillations will continue to increase in amplitude until the Op-Amp saturates (clips at the supply voltage rails). This results in a distorted, non-sinusoidal output waveform.

**Advantages:**
*   Produces a good quality sine wave at the desired frequency.
*   Frequency of oscillation can be easily tuned by changing R (or C) values.

**Disadvantages (Without Stabilization):**
*   Output amplitude is not controlled and can lead to clipping and distortion.
*   Requires an amplifier with a gain greater than or equal to 3, which can lead to excessive output if not managed.

---

### 3. Wien Bridge Oscillator With Amplitude Stabilization

**Problem with Unstabilized Oscillator:** The output amplitude of the unstabilized Wien bridge oscillator is not controlled. As oscillations build up, the Op-Amp saturates, leading to clipping and distortion of the sinusoidal waveform.

**Solution: Amplitude Stabilization:** Amplitude stabilization circuits are incorporated to ensure that the gain of the amplifier remains just enough to sustain oscillations and prevent saturation. This is achieved by making the amplifier's gain dependent on the output amplitude.

**Methods of Amplitude Stabilization:**

**a) Using a Lamp (Incandescent Bulb) as a Variable Resistor:**

*   **Concept:** An incandescent lamp filament has a positive temperature coefficient of resistance (PTCR). As the filament temperature increases (due to higher current), its resistance increases.
*   **Circuit Implementation:** One of the resistors in the negative feedback path (typically $R_f$) is replaced by an incandescent lamp.
*   **Operation:**
    1.  Initially, when oscillations start, the lamp has low resistance. This provides a high gain to the Op-Amp, allowing oscillations to build up quickly.
    2.  As the output amplitude increases, more current flows through the lamp.
    3.  The increased current causes the lamp filament to heat up, increasing its resistance.
    4.  The increased resistance in the feedback path reduces the Op-Amp's gain ($A_v = 1 + \frac{R_{lamp}}{R_i}$).
    5.  This reduction in gain counteracts the tendency for oscillations to increase further.
    6.  A stable operating point is reached where the gain is just sufficient to sustain oscillations without clipping.
*   **Advantages:** Simple and effective for stabilizing amplitude.
*   **Disadvantages:**
    *   The lamp is a non-linear element, so the sine wave quality might not be perfect.
    *   Requires a DC supply for the lamp, which needs to be compatible with the Op-Amp's output.
    *   The response time can be slow due to the thermal inertia of the filament.
    *   Bulbs can burn out.

**b) Using Diodes for Amplitude Stabilization:**

*   **Concept:** Diodes exhibit non-linear current-voltage characteristics. By using diodes in the feedback path, the effective gain can be controlled.
*   **Circuit Implementation:** Diodes are often used in a voltage-limiting configuration within the feedback network. For example, a pair of diodes connected back-to-back across the feedback resistor or in series with it can limit the voltage swing, thereby affecting the gain.
*   **Operation:**
    1.  When the output amplitude is low, the diodes are reverse-biased, and the gain is high.
    2.  As the output amplitude increases, the diodes become forward-biased, drawing current.
    3.  This shunts some of the feedback signal, effectively reducing the gain.
    4.  The voltage drop across the forward-biased diodes also plays a role in limiting the output amplitude.
*   **Advantages:** Can offer a faster response than lamps.
*   **Disadvantages:** The non-linearity of diodes can introduce some distortion. Careful selection of diode types and biasing is required.

**c) Using FETs or Transistors for Amplitude Stabilization:**

*   **Concept:** Field-Effect Transistors (FETs) or bipolar junction transistors (BJTs) can be used as voltage-controlled resistors or in biasing circuits to modify the amplifier's gain.
*   **Circuit Implementation:**
    *   A JFET can be used in its ohmic region, where its drain-source resistance ($R_{DS}$) is controlled by its gate-source voltage ($V_{GS}$). The output amplitude can be sensed and used to control $V_{GS}$, thus controlling $R_{DS}$ and the overall gain.
    *   A BJT can be used in its saturation region or with its biasing controlled by the output amplitude.
*   **Operation:** Similar to the lamp method, these active components provide a variable resistance that is dependent on the output signal amplitude, thereby stabilizing the gain.
*   **Advantages:** Can offer more precise control and faster response than lamps.
*   **Disadvantages:** More complex circuitry.

**Common Practice in Labs:** The incandescent lamp method is a common and straightforward approach demonstrated in many introductory IC labs due to its simplicity.

---

### 4. Design Procedure for Wien Bridge Oscillator

**Objective:** Design a Wien bridge oscillator using an Op-Amp to produce a sine wave at a specific frequency $f_0$ with a stable amplitude.

**Design Steps:**

1.  **Determine the Oscillation Frequency ($f_0$):** This is the primary requirement.
2.  **Select Component Values for the Wien Bridge Network:**
    *   Choose a convenient frequency range. For audio frequencies, selecting R between 1 kΩ and 100 kΩ is common.
    *   Select $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
    *   Use the formula $f_0 = \frac{1}{2\pi RC}$ to calculate the required values.
    *   **Example:** For $f_0 = 1$ kHz, if we choose $R = 10$ kΩ, then:
        $C = \frac{1}{2\pi f_0 R} = \frac{1}{2\pi \times 1000 \times 10 \times 10^3} = \frac{1}{2\pi \times 10^7} \approx 0.0159 \mu F$.
        Standard capacitor values close to this might be $0.015 \mu F$ or $0.016 \mu F$. Using $C=0.01 \mu F$ would require $R=15.9 k\Omega$. For simplicity in labs, often decade values like $R=10k\Omega$ and $C=0.01\mu F$ or $R=1k\Omega$ and $C=0.1\mu F$ are used, and the frequency is calculated.
3.  **Set the Amplifier Gain:**
    *   **Without Stabilization:** Choose resistors $R_i$ and $R_f$ for the negative feedback path such that $\frac{R_f}{R_i} \geq 2$.
        *   **Example:** To ensure oscillations start, let $\frac{R_f}{R_i} = 2$. If $R_i = 10$ kΩ, then $R_f = 20$ kΩ.
    *   **With Stabilization (Lamp Method):**
        *   Choose $R_i$ (e.g., 10 kΩ).
        *   Select a lamp with appropriate power rating and resistance characteristics. The quiescent resistance of the lamp should be chosen such that when it's combined with $R_i$, the gain is slightly above 3.
        *   A common approach is to select $R_i$ and a *nominal* resistance for the lamp ($R_{lamp\_nom}$) such that $1 + \frac{R_{lamp\_nom}}{R_i} > 3$. The lamp's resistance will increase as output amplitude rises, reducing the gain.
        *   **Example:** Use $R_i = 10$ kΩ. Select a small incandescent bulb (e.g., a low-wattage neon lamp or a small filament bulb). The lamp's resistance is typically very low when cold, providing high initial gain. As it heats up, its resistance might go up to a few tens of kΩ. A fixed resistor of 20 kΩ in series with the lamp can also be used to set a minimum gain.
4.  **Choose the Op-Amp:** Select an Op-Amp suitable for the desired frequency range and supply voltages (e.g., LM741, TL071, NE5532). For higher frequencies, Op-Amps with higher Gain-Bandwidth Product (GBWP) are preferred.
5.  **Connect the Circuit:** Implement the non-inverting amplifier configuration with the Wien bridge network for positive feedback and the voltage divider (with stabilization element) for negative feedback.
6.  **Power Supply:** Connect appropriate dual power supplies (e.g., +12V, -12V) to the Op-Amp.
7.  **Testing and Verification:**
    *   Connect an oscilloscope to the output.
    *   Observe the waveform. If using stabilization, verify that the output amplitude is stable and not clipping.
    *   Measure the frequency of oscillation and compare it with the calculated value.

---

### 5. Practicals and Experiments (Learning Outcomes: CO1, CO2, CO3, CO4)

**Experiment 1: Wien Bridge Oscillator Without Amplitude Stabilization**

*   **Objective:** To construct and test a Wien bridge oscillator and observe the effect of uncontrolled amplitude.
*   **Circuit:** Use an Op-Amp (e.g., LM741) in a non-inverting configuration.
    *   Wien bridge network: $R_1 = R_2 = 10$ kΩ, $C_1 = C_2 = 0.01 \mu F$ (designed for $f_0 \approx 1.59$ kHz).
    *   Negative feedback resistors: $R_i = 10$ kΩ, $R_f = 20$ kΩ (gain $A_v = 1 + 20k/10k = 3$).
*   **Procedure:**
    1.  Assemble the circuit on a breadboard.
    2.  Connect power supplies to the Op-Amp.
    3.  Connect an oscilloscope to the output.
    4.  Observe the waveform. Note its frequency and amplitude.
*   **Expected Observation:** You should see a sinusoidal waveform. However, due to the gain being precisely 3, oscillations might be marginal or distorted due to Op-Amp limitations. If the gain is slightly higher (e.g., by increasing $R_f$), you will observe oscillations building up and eventually clipping at the power supply rails, resulting in a distorted output.
*   **Learning Outcome Alignment:** CO1, CO3, CO4.

**Experiment 2: Wien Bridge Oscillator With Amplitude Stabilization (Lamp Method)**

*   **Objective:** To construct and test a Wien bridge oscillator with amplitude stabilization using an incandescent lamp.
*   **Circuit:** Similar to Experiment 1, but replace $R_f$ with an incandescent lamp (e.g., a low-wattage filament lamp) and potentially a fixed resistor in series with it if needed to set an initial gain or limit the maximum resistance. Let $R_i = 10$ kΩ. Let the lamp have a nominal resistance that, when combined with $R_i$, gives a gain slightly above 3. For instance, a lamp with a cold resistance of 1 kΩ and a hot resistance of 30 kΩ would be suitable.
*   **Procedure:**
    1.  Assemble the circuit on a breadboard.
    2.  Connect power supplies to the Op-Amp.
    3.  Connect an oscilloscope to the output.
    4.  Observe the waveform. Measure its frequency and amplitude.
*   **Expected Observation:** You should observe a sinusoidal waveform with a stable amplitude that is significantly less distorted than the unstabilized version. The amplitude should remain constant even as the circuit powers up or if there are minor variations in power supply.
*   **Learning Outcome Alignment:** CO1, CO2, CO3, CO4.

---

### 6. Practice Questions and Answers

**Q1:** What are the two fundamental conditions required for sustained oscillations according to Barkhausen's criterion?
**A1:**
1.  The total phase shift around the feedback loop must be 0° or 360°.
2.  The magnitude of the loop gain must be greater than or equal to unity.

**Q2:** In a Wien bridge oscillator using a Wien bridge network with $R_1 = R_2 = R$ and $C_1 = C_2 = C$, at what frequency do oscillations occur?
**A2:** The oscillation frequency is $f_0 = \frac{1}{2\pi RC}$.

**Q3:** What is the minimum gain required for an amplifier in a Wien bridge oscillator to start oscillations?
**A3:** The minimum gain required is 3. This is because the Wien bridge network provides a feedback factor of $1/3$ at the oscillation frequency.

**Q4:** What is the main problem with a Wien bridge oscillator that does not have amplitude stabilization?
**A4:** Without amplitude stabilization, the output amplitude of the oscillator is uncontrolled. The oscillations will continue to increase in amplitude until the Op-Amp saturates, leading to clipping and distortion of the sinusoidal waveform.

**Q5:** How does an incandescent lamp achieve amplitude stabilization in a Wien bridge oscillator?
**A5:** An incandescent lamp has a positive temperature coefficient of resistance (PTCR). As the output amplitude (and thus current through the lamp) increases, the filament heats up, increasing its resistance. This increased resistance in the feedback path reduces the Op-Amp's gain, thereby limiting the output amplitude and preventing saturation.

**Q6:** If you want to design a Wien bridge oscillator for a frequency of 1 kHz, and you choose $R = 10$ kΩ for the Wien bridge network, what value of capacitance would you need for $C$?
**A6:** Using the formula $f_0 = \frac{1}{2\pi RC}$:
$C = \frac{1}{2\pi f_0 R} = \frac{1}{2\pi \times 1000 \text{ Hz} \times 10 \times 10^3 \Omega} = \frac{1}{2\pi \times 10^7} \approx 0.0159 \times 10^{-6} F = 15.9$ nF.
A standard value of 15 nF or 16 nF would be suitable.

**Q7:** For a Wien bridge oscillator with amplitude stabilization using a lamp, what component determines the stable output amplitude?
**A7:** The stable output amplitude is determined by the characteristics of the lamp (its resistance-voltage relationship) and the values of the resistors in the negative feedback path. Specifically, it's the point where the lamp's resistance increases enough to reduce the amplifier gain to a level that just sustains oscillations at a voltage level that doesn't cause clipping.

**Q8:** Can a Wien bridge oscillator produce a square wave? Explain briefly.
**A8:** No, a standard Wien bridge oscillator is designed to produce a sinusoidal waveform. Its frequency-selective network (the Wien bridge) preferentially amplifies frequencies close to the resonant frequency, filtering out other harmonic components. To produce a square wave, different oscillator circuits like astable multivibrators (using Op-Amps or transistors) are used.

---

### 7. Important Points to Remember

*   **Positive Feedback is Key:** Oscillators work by using positive feedback to amplify a small initial disturbance (noise) into a sustained oscillation.
*   **Frequency Selectivity:** The Wien bridge network is crucial for selecting the frequency of oscillation and providing zero phase shift at that frequency.
*   **Gain Requirement:** The amplifier must have a gain of at least 3 to overcome the $1/3$ feedback factor of the Wien bridge.
*   **Amplitude Stabilization is Necessary:** Without stabilization, Op-Amp saturation leads to distorted output.
*   **Lamp Behavior:** Incandescent lamps are effective for stabilization due to their positive temperature coefficient of resistance.
*   **Component Tolerance:** Real component values have tolerances, which can affect the actual oscillation frequency. Using precision components can improve accuracy.
*   **Op-Amp Limitations:** The Gain-Bandwidth Product (GBWP) of the Op-Amp can limit the maximum achievable oscillation frequency. Slew rate can also affect the quality of the output waveform at higher frequencies.
*   **Practical Setup:** Always ensure correct power supply connections and bypass capacitors for Op-Amp stability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbooks and Reference Material

*   **Linear Integrated Circuits by D. Roy Choudhary and Shail B Jain:** This textbook is a primary resource for understanding Op-Amp circuits, including oscillators. It will provide theoretical background on the Wien bridge oscillator, its analysis, and design considerations.
*   **Introduction to Pspice Using Orcad for Circuits and Electronics by M. H. Rashid:** This book is excellent for simulating circuits. It can be used to design and verify the Wien bridge oscillator circuit virtually before building it physically, aligning with CO3.
*   **Op-Amps And Linear Integrated Circuits by Gayakwad:** Another valuable reference for Op-Amp applications, likely covering oscillator circuits and their practical aspects.
*   **Linear Integrated Circuits by D Roy Choudhury, Shail Bala Jain:** This is likely an earlier edition or a complementary book to the primary one, offering similar insights into Op-Amp theory and applications.

---

### 9. Course Outcome Alignment

*   **CO1: Design and implement basic linear integrated circuits using Op Amps.**
    *   This module directly addresses CO1 by having students design and build the Wien bridge oscillator circuit, a fundamental Op-Amp application.
*   **CO2: Design and implement basic linear integrated circuits using linear ICs.**
    *   Similar to CO1, the practical implementation uses an Op-Amp IC (like LM741), fulfilling CO2. The stabilization methods might involve other discrete components or ICs depending on the chosen technique.
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools.**
    *   Using simulation tools like PSpice (as per Rashid's book) to design and test the Wien bridge oscillator before physical implementation strongly supports CO3. Students can analyze waveforms, frequencies, and stabilization effects in a simulated environment.
*   **CO4: Effectively troubleshoot a given circuit and analyze it.**
    *   During the practical lab sessions, students will encounter potential issues (e.g., no oscillation, distorted waveform, unstable amplitude). Troubleshooting these problems requires analyzing the circuit's behavior and understanding the role of each component, thereby developing skills for CO4. Identifying why the unstabilized version clips or why the stabilized version works correctly involves circuit analysis.