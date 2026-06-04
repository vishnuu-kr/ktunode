---
title: "RC oscillators – RC phase shift or wien bridge oscillator"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe42c"
status: "completed"
scrapedAt: "2026-05-23T17:44:33.423Z"
---
## ANALOG CIRCUITS LAB: Study Notes

### Module 1: RC Integrating and Differentiating Circuits
#### Topic: RC Oscillators – RC Phase Shift or Wien Bridge Oscillator

---

### 1. Introduction to Oscillators

Oscillators are fundamental analog circuits that generate repetitive, non-sinusoidal or sinusoidal waveforms without any external input signal. They are essential building blocks in many electronic systems, including radio transmitters and receivers, signal generators, communication systems, and clock generators for digital circuits.

**Key Concept:** An oscillator relies on positive feedback and a frequency-selective network to sustain oscillations at a specific frequency.

**Learning Outcome Alignment:** This section introduces the fundamental concept of oscillators, which is crucial for designing and demonstrating their functioning (CO1) and understanding their behavior in simulations (CO2).

**Textbook Reference:**
*   **David A. Bell, *Electronic Devices and Circuits***: Chapter on Oscillators typically provides a good overview of oscillation principles.
*   **D. Meganathan, *Electronic Circuits Analysis and Design 1***: Likely covers oscillator fundamentals and various types.

---

### 2. Principles of Oscillation

For a circuit to oscillate, two conditions must be met (Barkhausen Criterion):

1.  **Loop Gain Magnitude:** The magnitude of the loop gain ($|A\beta|$) must be equal to or greater than 1 at the desired oscillation frequency.
    *   **Loop Gain ($A\beta$):** The product of the amplifier's gain ($A$) and the feedback network's gain ($\beta$).
2.  **Total Phase Shift:** The total phase shift around the feedback loop must be 0 degrees or an integer multiple of 360 degrees (0°, 360°, 720°, etc.).
    *   This means the signal fed back to the input of the amplifier must be in phase with the input signal.

**Important Point to Remember:** Oscillations typically start from noise present in the circuit. The circuit amplifies this noise, and the frequency-selective feedback network ensures that only the frequency with the correct phase shift and sufficient loop gain is sustained.

**Learning Outcome Alignment:** Understanding Barkhausen's criterion is essential for designing oscillators (CO1) and analyzing their behavior (CO2, CO3).

---

### 3. RC Oscillators: General Concepts

RC oscillators use resistors (R) and capacitors (C) to create the frequency-selective feedback network. They are generally used for generating lower-frequency sinusoidal waveforms (audio frequencies).

**Advantages of RC Oscillators:**
*   Simpler to design and construct compared to LC oscillators.
*   Cost-effective, especially for lower frequencies.
*   Suitable for integration into monolithic integrated circuits (ICs).

**Disadvantages of RC Oscillators:**
*   Generally have poorer frequency stability than LC oscillators.
*   Waveform purity can be less than ideal, often requiring filtering.

**Learning Outcome Alignment:** This provides a general context for the specific RC oscillators to be studied, linking to the broader goal of demonstrating circuit functioning (CO1).

---

### 4. RC Phase Shift Oscillator

#### 4.1. Circuit Configuration

An RC phase shift oscillator utilizes an amplifier (typically an inverting amplifier) and an RC feedback network that provides a phase shift of 180 degrees at the desired frequency. The inverting amplifier itself provides another 180-degree phase shift, resulting in a total of 360 degrees.

**Basic RC Phase Shift Network:**
A common phase shift network consists of three cascaded RC sections. Each RC section, when loaded by the next stage, provides a phase lag. To achieve a total of 180-degree phase shift, each RC section should contribute approximately 60 degrees of phase shift.

**Circuit Diagram (Conceptual):**

```
     +Vcc
      |
      R1   C1
----/\/\----||----
      |      |
      R2   C2
----/\/\----||----
      |      |
      R3   C3
----/\/\----||----
      |      |
      -------+------- Output of feedback network
             |
      +------|------+
      |             |
    Input   <------ Amplifier (e.g., Op-Amp in inverting config)
      |             |
      ---------------
```

**Component Selection for 60° Phase Shift per Stage:**
For each RC section to provide a 60° phase shift, the components must be chosen such that:
$R1 = R2 = R3 = R$
$C1 = C2 = C3 = C$
And the relationship: $R = \frac{1}{\omega C}$ (where $\omega$ is the angular frequency of oscillation).

#### 4.2. Analysis for Oscillation Frequency

*   **Amplifier Gain ($A$):** For an inverting amplifier with gain $-A_v$, the loop gain is $A_v \beta$. To meet Barkhausen's criterion ($|A\beta| \ge 1$), the amplifier's gain must be at least a certain value to overcome the attenuation of the feedback network.
*   **Feedback Network Attenuation ($\beta$):** The RC feedback network attenuates the signal. For the three-stage network, the attenuation at the oscillation frequency is 8. This means the amplifier must provide a voltage gain of at least 8 (in magnitude).
*   **Oscillation Frequency ($f_o$):** The frequency at which the RC network provides a total phase shift of 180 degrees. For three identical RC sections (where each provides 60° lag), the oscillation frequency is given by:
    $f_o = \frac{1}{2\pi \sqrt{6} RC}$

#### 4.3. Design Considerations

*   **Gain Requirement:** The amplifier must have a voltage gain of at least 8 (for a three-stage network) to sustain oscillations. If using an op-amp, the gain-setting resistors ($R_f/R_{in}$) must be set accordingly.
*   **Component Matching:** Precise matching of R and C values in each RC section is crucial for achieving the desired 60° phase shift per stage and thus the correct oscillation frequency.
*   **Loading Effects:** The amplifier output impedance and the input impedance of the feedback network, as well as the load on the feedback network, can affect the actual phase shift and loop gain, potentially shifting the oscillation frequency or preventing oscillation.

**Example:**
Design an RC phase shift oscillator to produce a sine wave at 1 kHz.
Let's choose $R = 10 k\Omega$ and $C = 10 nF$.
$f_o = \frac{1}{2\pi \sqrt{6} RC} = \frac{1}{2\pi \sqrt{6} (10 \times 10^3 \Omega) (10 \times 10^{-9} F)}$
$f_o \approx \frac{1}{2\pi \times 2.449 \times 10^{-4}} \approx 650 Hz$.

To achieve 1 kHz, we need to adjust R or C.
If we keep $R = 10 k\Omega$, then:
$C = \frac{1}{2\pi \sqrt{6} f_o R} = \frac{1}{2\pi \sqrt{6} (1000 Hz) (10 \times 10^3 \Omega)} \approx 6.5 nF$.
We would use standard values close to 6.5 nF, like 6.8 nF or use a combination to achieve this value.

The amplifier (e.g., op-amp) needs to provide a voltage gain of at least 8. If using an inverting op-amp configuration, $A_v = -R_f/R_{in}$, so $|A_v| \ge 8$. For instance, $R_f = 80 k\Omega$ and $R_{in} = 10 k\Omega$.

**Learning Outcome Alignment:** This section directly addresses the design and demonstration of an analog circuit (CO1) and its simulation (CO2). The analysis of frequency and gain relates to troubleshooting (CO3).

---

### 5. Wien Bridge Oscillator

#### 5.1. Circuit Configuration

The Wien bridge oscillator is another popular RC oscillator that produces a sinusoidal output. It utilizes a passive frequency-selective network known as a Wien bridge. The circuit typically consists of an amplifier with a non-inverting gain of 3 (to satisfy Barkhausen's criterion) and the Wien bridge network in the feedback path.

**Wien Bridge Network:**
The Wien bridge consists of a series RC combination and a parallel RC combination.

*   **Series RC:** $R_1$ and $C_1$ connected in series.
*   **Parallel RC:** $R_2$ and $C_2$ connected in parallel.

For oscillation, the bridge is typically configured such that the reactive components balance out at the desired frequency, leading to zero phase shift.

**Circuit Diagram (Conceptual - using Op-Amp):**

```
       +Vcc
        |
        |
      -----
     |     |
     R1    C1
     |     |
     ----- -----
     |     |
     C2    R2
     |     |
     ----- -----
      |     |
      |     +------- Output of Wien Bridge network
      |             |
      |     <------- Feedback loop to non-inverting input of Op-Amp
      |             |
      |             |
      +-----------+
                  |
   Input Op-Amp   +---- Output of Op-Amp
      (Non-inverting)   |
      |                 |
      +-----------------+
```

**Amplifier Configuration:** The amplifier (often an op-amp) is used in a **non-inverting configuration**. The feedback network connects from the output of the amplifier to the non-inverting input of the op-amp. The gain of the non-inverting amplifier is $A_v = 1 + \frac{R_f}{R_{in}}$. To satisfy Barkhausen's criterion for the Wien bridge, this gain must be precisely 3.

#### 5.2. Analysis for Oscillation Frequency

*   **Wien Bridge Transfer Function:** The Wien bridge network has a transfer function $\beta = \frac{V_{out(bridge)}}{V_{in(bridge)}}$. At resonance, this network passes the signal with unity gain and zero phase shift.
*   **Resonance Frequency ($f_o$):** The frequency at which the impedance of the series RC combination equals the impedance of the parallel RC combination (when properly balanced). If $R_1 = R_2 = R$ and $C_1 = C_2 = C$, then the oscillation frequency is:
    $f_o = \frac{1}{2\pi RC}$
*   **Amplifier Gain Requirement:** For oscillation to occur, the loop gain $|A\beta|$ must be $\ge 1$, and the phase shift must be 0°. The Wien bridge network provides zero phase shift at $f_o$. The amplifier, in a non-inverting configuration, provides zero phase shift. Therefore, the amplifier's gain must be precisely 3 to satisfy $|A\beta| \ge 1$ at $f_o$.
    $A_v = 1 + \frac{R_f}{R_{in}} = 3$
    This implies $\frac{R_f}{R_{in}} = 2$.

#### 5.3. Design Considerations

*   **Component Matching:** The ratio of $R_1$ to $C_1$ should be equal to the ratio of $R_2$ to $C_2$ for optimal performance. For simplicity and achieving the exact resonance frequency, it is common to use $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
*   **Gain Stabilization:** Maintaining an amplifier gain of exactly 3 is critical. Variations in component values or amplifier characteristics can lead to instability or no oscillation. Often, a non-linear element (like a thermistor or lamp filament) is used in the feedback path to automatically stabilize the gain around 3.
*   **Frequency Response:** The Wien bridge circuit exhibits a sharp peak in its frequency response at the oscillation frequency, meaning it is highly selective.

**Example:**
Design a Wien bridge oscillator to generate a sine wave at 10 kHz.
Let's choose $R = 10 k\Omega$ and $C = 1.59 nF$ (approximately $1/(2\pi \times 10 k\Omega \times 10 kHz)$).
$f_o = \frac{1}{2\pi RC} = \frac{1}{2\pi (10 \times 10^3 \Omega)(1.59 \times 10^{-9} F)} \approx 10 kHz$.

The op-amp needs to be configured as a non-inverting amplifier with a gain of 3.
$1 + \frac{R_f}{R_{in}} = 3 \implies \frac{R_f}{R_{in}} = 2$.
We could choose $R_{in} = 10 k\Omega$ and $R_f = 20 k\Omega$.

**Learning Outcome Alignment:** This section directly relates to designing and demonstrating analog circuits (CO1) and simulating their behavior (CO2). The emphasis on gain stabilization and component matching connects to troubleshooting (CO3).

---

### 6. Transient Analysis with Different Inputs

While oscillators themselves are designed to operate without an external input signal after startup, understanding their transient behavior when power is applied or when subjected to external stimuli is important.

*   **Startup Transient:** When power is applied, the circuit amplifies any small noise present. The RC network filters these noise components, and the signal at the oscillation frequency is amplified. Over time, the amplitude of this signal grows until it reaches a steady state, limited by the amplifier's saturation or by the gain stabilization mechanism.
*   **External Input (Harmonic Distortion):** If a strong external sinusoidal signal is applied at a frequency slightly different from the oscillator's natural frequency, it can either suppress the oscillation or cause beat frequencies. If the external signal is significantly stronger, it can force the oscillator to lock onto the external frequency (frequency pulling).
*   **Square Wave Input:** Applying a square wave to the RC feedback network of an oscillator would drastically alter its behavior. The integrated or differentiated signals would no longer satisfy the phase and gain conditions for sustained sinusoidal oscillation. It might lead to a complex output or no oscillation at all.

**Important Point to Remember:** Oscillators are designed to operate in a linear region, but startup and overload conditions involve non-linear behavior.

**Learning Outcome Alignment:** This addresses the "transient analysis with different inputs" aspect of the module, which helps in understanding circuit behavior (CO2, CO3) and demonstrating its functioning under various conditions (CO1).

---

### 7. Frequency Response of Oscillators

While not a traditional "frequency response" in the sense of measuring gain vs. frequency for a fixed input, the concept applies to how well the oscillator produces a pure sine wave at its designed frequency and how its output changes with component variations.

*   **Spectral Purity:** A good oscillator should produce an output that is as close to a pure sine wave as possible, with minimal harmonic distortion. The RC networks in phase shift and Wien bridge oscillators are designed to be highly frequency-selective, which aids in producing a pure sine wave.
*   **Stability:** The ability of the oscillator to maintain its frequency and amplitude over time and with changes in temperature, power supply voltage, and component aging is called frequency stability. LC oscillators generally have better frequency stability than RC oscillators.
*   **Component Tolerance:** The accuracy of the R and C values directly impacts the oscillation frequency. Using components with tight tolerances (e.g., 1% resistors and capacitors) is crucial for precise frequency generation.

**Learning Outcome Alignment:** This relates to analyzing circuit performance and understanding design trade-offs, which is key for CO2 and CO3.

---

### 8. Practical Implementation and Troubleshooting

#### 8.1. Using Op-Amps

Operational amplifiers (op-amps) are commonly used as the amplifying element in RC oscillators due to their high open-loop gain, high input impedance, and low output impedance.

*   **Phase Shift Oscillator with Op-Amp:** Typically uses an op-amp in an inverting configuration. The gain-setting resistors must be chosen to provide a gain of at least 8.
*   **Wien Bridge Oscillator with Op-Amp:** Uses an op-amp in a non-inverting configuration. The gain-setting resistors must be chosen to provide a gain of exactly 3.

#### 8.2. Troubleshooting Common Issues

*   **No Oscillation:**
    *   **Insufficient Amplifier Gain:** Check if $|A\beta| < 1$. For Wien bridge, ensure the non-inverting gain is close to 3. For phase shift, ensure it's sufficient to overcome attenuation (e.g., $\ge 8$).
    *   **Incorrect Phase Shift:** Verify the RC network is correctly configured.
    *   **Component Failure:** Check for open or shorted resistors/capacitors, or a faulty amplifier.
    *   **DC Bias Issues:** Ensure the op-amp is properly biased and powered.
    *   **Incorrect Feedback Connection:** Double-check that the feedback loop is correctly connected.

*   **Output is Distorted (Not Sinusoidal):**
    *   **Amplifier Saturation:** If the amplifier gain is too high, the output signal can clip at the power supply rails. Reduce the gain or use gain stabilization.
    *   **Loading Effects:** The load connected to the oscillator output can affect its performance.
    *   **Component Non-linearity:** Some components might exhibit non-linear behavior under certain conditions.

*   **Frequency is Incorrect:**
    *   **Component Values:** Re-check the R and C values in the frequency-determining network.
    *   **Component Tolerance:** Actual component values might differ from their marked values.
    *   **Loading:** The output impedance of the amplifier and the input impedance of the feedback network (and the load) can influence the effective component values and thus the frequency.

**Learning Outcome Alignment:** This section directly addresses CO3 (Conduct troubleshooting of a given circuit and to analyze it) by detailing common problems and their causes. It also reinforces CO1 and CO2 by emphasizing practical design and simulation aspects.

---

### 9. Practice Questions & Exercises

**Question 1:**
A three-stage RC phase shift oscillator uses identical RC sections. If $R = 10 k\Omega$ and $C = 10 nF$, what is the approximate oscillation frequency? What is the minimum voltage gain required from the amplifier stage?

**Answer:**
The oscillation frequency is given by $f_o = \frac{1}{2\pi \sqrt{6} RC}$.
$f_o = \frac{1}{2\pi \sqrt{6} (10 \times 10^3 \Omega)(10 \times 10^{-9} F)} = \frac{1}{2\pi \sqrt{6} \times 10^{-4}} \approx \frac{1}{1.539 \times 10^{-3}} \approx 650 Hz$.
The minimum voltage gain required from the amplifier stage is 8 to overcome the attenuation of the RC network.

**Question 2:**
Design a Wien bridge oscillator using an op-amp to produce a sinusoidal output at 5 kHz. Specify the values for $R_1, C_1, R_2, C_2$ and the gain-setting resistors ($R_{in}, R_f$) for the non-inverting amplifier.

**Answer:**
For a Wien bridge oscillator, $f_o = \frac{1}{2\pi RC}$. We need the amplifier gain to be 3.
Let's choose $R_1 = R_2 = R = 10 k\Omega$.
Then, $C_1 = C_2 = C = \frac{1}{2\pi f_o R} = \frac{1}{2\pi (5 \times 10^3 Hz)(10 \times 10^3 \Omega)} \approx 3.18 nF$.
We can use standard values like 3.3 nF for C.
For the non-inverting amplifier gain of 3: $1 + \frac{R_f}{R_{in}} = 3$, so $\frac{R_f}{R_{in}} = 2$.
We can choose $R_{in} = 10 k\Omega$ and $R_f = 20 k\Omega$.

**Question 3:**
In a Wien bridge oscillator, if the feedback resistor ($R_f$) is increased, what will be the effect on the amplitude and frequency of oscillation?

**Answer:**
Increasing $R_f$ will increase the gain of the non-inverting amplifier ($A_v = 1 + R_f/R_{in}$). If the gain becomes significantly greater than 3, the amplitude of oscillation will increase, and the amplifier will likely saturate, leading to a distorted output. The frequency of oscillation is primarily determined by the RC network ($f_o = \frac{1}{2\pi RC}$) and is not directly affected by the amplifier's gain. However, extreme distortion can indirectly affect the perceived frequency.

**Question 4:**
What is the primary advantage of a Wien bridge oscillator over an RC phase shift oscillator?

**Answer:**
The Wien bridge oscillator generally produces a purer sine wave with lower harmonic distortion compared to an RC phase shift oscillator. This is because the Wien bridge feedback network has a much sharper frequency response peak, meaning it significantly attenuates frequencies other than the desired oscillation frequency.

---

### 10. Summary and Key Takeaways

*   **Oscillators** generate continuous waveforms without an external input.
*   **Barkhausen Criterion:** Loop gain magnitude $\ge 1$ and total phase shift = 0° or 360°.
*   **RC Phase Shift Oscillator:** Uses cascaded RC sections to provide 180° phase shift. Amplifier provides the remaining 180°. Requires amplifier gain $\ge 8$ (for 3 stages). Frequency: $f_o = \frac{1}{2\pi \sqrt{6} RC}$.
*   **Wien Bridge Oscillator:** Uses a Wien bridge network for zero phase shift. Requires a non-inverting amplifier with gain of 3. Frequency: $f_o = \frac{1}{2\pi RC}$.
*   **Design:** Component values determine frequency. Amplifier gain is critical for oscillation.
*   **Troubleshooting:** Common issues include no oscillation (gain too low, wrong phase, component failure) and distorted output (gain too high, saturation).
*   **Practicality:** Op-amps are commonly used. Component tolerances are important for frequency accuracy.

---

This concludes the study notes for RC Oscillators (RC Phase Shift or Wien Bridge Oscillator). Remember to refer to your textbooks for more detailed derivations and examples. Good luck with your lab experiments!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
