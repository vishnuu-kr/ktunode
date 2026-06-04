---
title: "Wien Bridge Oscillator – Tuned Oscillator circuits – Crystal Oscillator"
subject: "ANALOG ELECTRONICS"
module: "Module 2: Introduction to JFET  – JFET biasing circuits – Common Source Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b62"
status: "completed"
scrapedAt: "2026-05-23T16:10:55.367Z"
---
Here are comprehensive study notes for the topic "Wien Bridge Oscillator – Tuned Oscillator circuits – Crystal Oscillator" within Module 2 of Analog Electronics, aligning with your specified learning outcomes and course outcomes.

---

# Analog Electronics: Module 2 - JFETs & Oscillators

## Topic: Wien Bridge Oscillator – Tuned Oscillator Circuits – Crystal Oscillator

**Context:** This topic builds upon the understanding of fundamental electronic components and amplifiers, specifically focusing on how to generate periodic waveforms using these components. It directly contributes to **Course Outcome CO2: Design Oscillator circuits (Knowledge Level: K3)**. While JFET biasing and Common Source Amplifiers are the foundational elements of the module, this topic delves into specific applications of active components (like Op-Amps, though not explicitly stated in the topic title, they are crucial for Wien Bridge) to create oscillators.

**Learning Outcomes:**

*   Understand the fundamental principle of oscillation.
*   Analyze and design Wien Bridge Oscillator circuits.
*   Understand the working principle of tuned oscillator circuits (LC oscillators).
*   Analyze and design basic LC oscillator configurations (e.g., Colpitts, Hartley).
*   Understand the principle of operation of Crystal Oscillators.
*   Analyze the equivalent circuit of a crystal and its behavior.
*   Design and implement basic oscillator circuits.

---

### 1. Fundamental Principle of Oscillation

**Key Concept:** An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangle wave. It does this without any external input signal other than a DC power supply.

**Barkhausen Criterion for Oscillation:**
For a circuit to oscillate, two conditions must be met:

1.  **Infinite Loop Gain at the oscillation frequency:** The total gain of the amplifier section must be equal to or greater than 1 at the frequency of oscillation. This ensures that any small initial disturbance is amplified and sustained.
2.  **Zero or 180° Phase Shift around the feedback loop at the oscillation frequency:** The total phase shift introduced by the amplifier and the feedback network must be 0° or 360° (equivalent to 0°) for positive feedback. If it's 180°, it needs another 180° phase shift from the amplifier for a net 360° (positive feedback).

**Mathematical Representation:**
The loop gain $A_{loop} = A_{amplifier} \times A_{feedback}$. For oscillation, $|A_{loop}| \ge 1$ and $\angle A_{loop} = n \times 360^\circ$, where 'n' is an integer.

**Types of Oscillators:**

*   **LC Oscillators:** Use inductors (L) and capacitors (C) to determine the oscillation frequency. They are generally used for higher frequencies. Examples: Colpitts, Hartley, Armstrong.
*   **RC Oscillators:** Use resistors (R) and capacitors (C) to determine the oscillation frequency. They are generally used for lower frequencies. Examples: Wien Bridge, Phase Shift.
*   **Crystal Oscillators:** Use a piezoelectric crystal (typically quartz) to provide a very stable and precise frequency.

---

### 2. Wien Bridge Oscillator

**Key Concept:** The Wien Bridge Oscillator is an RC oscillator that generates a sine wave. It utilizes a **frequency-selective feedback network** that provides a positive feedback signal only at a specific frequency, where the phase shift is zero.

**Circuit Configuration:**
Typically implemented using an operational amplifier (Op-Amp) or transistors. We'll focus on the Op-Amp implementation as it's more common for Wien Bridge oscillators.

*   **Amplifier Stage:** Usually a non-inverting amplifier configuration using an Op-Amp.
*   **Feedback Network:** Consists of a series RC network and a parallel RC network, forming a Wien bridge.

**Circuit Diagram (Op-Amp based):**

```
        +Vcc
         |
         R1
         |
Vin ---/\/\/----o---- Output
         |      |
         C1     R2
         |      |
        GND    ---o---- Feedback Input
                |
                C2
                |
               GND
```

**(Note: This is a simplified representation. A practical Wien Bridge circuit includes a second feedback path to set the gain and a voltage divider to ensure gain is slightly greater than 3 at the resonant frequency.)**

**Working Principle:**

1.  **Frequency Determination:** The feedback network consists of a series RC combination ($R_1, C_1$) and a parallel RC combination ($R_2, C_2$). The bridge is designed such that at a specific frequency, called the **null frequency** ($f_0$), the impedances of the two branches are equal, and the phase shift is zero.
    *   For oscillation, $R_1 = R_2 = R$ and $C_1 = C_2 = C$.
    *   The null frequency $f_0 = \frac{1}{2\pi RC}$.

2.  **Gain Requirement:** At the null frequency ($f_0$), the feedback network provides a voltage gain of **1/3** and zero phase shift.
    *   To satisfy Barkhausen's criterion ($|A_{loop}| \ge 1$), the amplifier stage must provide a gain of at least **3**.
    *   The amplifier is typically configured as a non-inverting amplifier. The gain of a non-inverting amplifier is $A_v = 1 + \frac{R_f}{R_{in}}$.
    *   Therefore, $1 + \frac{R_f}{R_{in}} \ge 3$, which means $\frac{R_f}{R_{in}} \ge 2$.
    *   To ensure oscillation starts, the gain must be slightly greater than 3.

3.  **Start-up:** Due to noise or power-on transients, there are always small signals present. The amplifier's gain (slightly > 3) amplifies these signals. The feedback network passes only the signal at the null frequency. This frequency component is amplified further, and the process repeats, leading to sustained oscillations at $f_0$.

4.  **Amplitude Stabilization:** To prevent amplitude runaway (clipping), amplitude stabilization techniques are employed. Common methods include:
    *   **Using a lamp filament (bulb) as a non-linear resistor:** The resistance of a bulb increases with temperature, and thus with voltage. This can be used in the feedback path of the amplifier to reduce the gain as the output amplitude increases, stabilizing it.
    *   **Back-to-back Zener diodes:** Connected in series with the feedback resistor to limit the output voltage.
    *   **JFETs or MOSFETs:** Used as voltage-controlled resistors in the feedback loop.

**Design Example:**
Design a Wien Bridge oscillator to produce a sine wave at 1 kHz.

*   Choose $R = 10 \text{ k}\Omega$.
*   Then $C = \frac{1}{2\pi f_0 R} = \frac{1}{2\pi (1000 \text{ Hz}) (10 \times 10^3 \Omega)} \approx 0.0159 \text{ } \mu\text{F}$.
*   Let $C_1 = C_2 = 0.015 \text{ } \mu\text{F}$ (standard value).
*   Calculate $R_1 = R_2 = R = \frac{1}{2\pi f_0 C} = \frac{1}{2\pi (1000 \text{ Hz}) (0.015 \times 10^{-6} \text{ F})} \approx 10.61 \text{ k}\Omega$.
*   Choose $R_1 = R_2 = 10 \text{ k}\Omega$ (standard value, slight adjustment to C might be needed for exact frequency, or use a variable resistor).
*   For the amplifier stage (non-inverting Op-Amp), we need a gain of 3.
    *   Let $R_{in} = 10 \text{ k}\Omega$.
    *   Then $R_f = (3-1) \times R_{in} = 2 \times 10 \text{ k}\Omega = 20 \text{ k}\Omega$.
    *   For amplitude stabilization, a common approach is to use a voltage divider for $R_f$. For example, $R_f$ could be a fixed resistor of $10 \text{ k}\Omega$ in series with a $10 \text{ k}\Omega$ potentiometer, or a combination that ensures the gain is slightly above 3.

**Important Points to Remember:**

*   Wien Bridge oscillators produce sine waves.
*   Frequency is determined by $f_0 = \frac{1}{2\pi RC}$.
*   Requires amplifier gain $\ge 3$ at $f_0$.
*   Amplitude stabilization is crucial for clean sine waves.
*   Very popular for audio frequency generation.

**Textbook References:**
*   **Paynter:** Likely discusses RC oscillators and provides Op-Amp circuit examples.
*   **Boylestad & Nashelsky:** Covers oscillator principles and common oscillator types.
*   **Neaman:** May present a more analytical approach to feedback circuits, including oscillators.

---

### 3. Tuned Oscillator Circuits (LC Oscillators)

**Key Concept:** Tuned oscillators use LC resonant circuits to select the oscillation frequency. They are suitable for generating radio frequencies (RF). The LC tank circuit provides both the frequency selection and a phase shift characteristic that, when combined with an amplifier's phase shift, results in oscillation.

**Barkhausen Criterion Revisited for LC Oscillators:**
The LC tank circuit acts as a frequency-determining element. At its resonant frequency, it can exhibit a phase shift. The amplifier must compensate for this phase shift and provide enough gain.

**Common Configurations:**

**a) Hartley Oscillator:**
*   **Key Feature:** Uses a tapped inductor (or two inductors in series) and a capacitor to form the resonant tank circuit.
*   **Circuit Configuration:**
    *   An amplifier (e.g., common emitter BJT, common source FET, or common collector/emitter follower).
    *   An LC tank circuit with a tapped inductor ($L_1, L_2$) and a capacitor ($C$).
    *   Feedback is taken from the tap of the inductor.
*   **Working Principle:**
    *   The tapped inductor ($L_1$ and $L_2$) and capacitor ($C$) form the resonant tank.
    *   The resonant frequency is approximately $f_0 = \frac{1}{2\pi \sqrt{L_{total} C}}$, where $L_{total} = L_1 + L_2$.
    *   The tank circuit provides a positive feedback path, usually with a 180° phase shift from the amplifier. The feedback voltage is tapped from the inductor.
    *   The self-inductances of the two parts of the tapped coil are related by the coupling coefficient. For practical purposes, the oscillation frequency is determined by the total inductance and capacitance.
*   **Advantages:** Simple to construct, frequency can be varied by changing the tap position on the inductor.
*   **Disadvantages:** Tapped inductors are difficult to manufacture, can lead to spurious oscillations.

**b) Colpitts Oscillator:**
*   **Key Feature:** Uses two capacitors in series with an inductor to form the resonant tank circuit.
*   **Circuit Configuration:**
    *   An amplifier.
    *   An LC tank circuit with an inductor ($L$) and two capacitors in series ($C_1, C_2$).
    *   Feedback is taken from the junction of the two capacitors.
*   **Working Principle:**
    *   The inductor ($L$) and the series combination of capacitors ($C_1$ and $C_2$) form the resonant tank.
    *   The effective capacitance is $C_{total} = \frac{C_1 C_2}{C_1 + C_2}$.
    *   The resonant frequency is $f_0 = \frac{1}{2\pi \sqrt{L C_{total}}} = \frac{1}{2\pi \sqrt{L \frac{C_1 C_2}{C_1 + C_2}}}$.
    *   The capacitor junction ($C_1$ and $C_2$) provides the feedback. The voltage division between $C_1$ and $C_2$ determines the feedback ratio.
*   **Advantages:** Capacitors are easier to manufacture than tapped inductors, generally more stable than Hartley.
*   **Disadvantages:** Frequency tuning requires changing L or C values.

**c) Armstrong Oscillator (Inductive Coupled Oscillator):**
*   **Key Feature:** Uses a separate feedback coil coupled magnetically to the main tank coil.
*   **Circuit Configuration:**
    *   An amplifier.
    *   A primary LC tank circuit ($L_p, C$).
    *   A secondary feedback coil ($L_s$) magnetically coupled to $L_p$.
*   **Working Principle:**
    *   The tank circuit ($L_p, C$) determines the frequency.
    *   The feedback coil ($L_s$) induces a voltage in the tank coil, providing positive feedback.
    *   The polarity of the feedback coil relative to the tank coil is crucial for positive feedback.
*   **Advantages:** Can be used with common tuned circuits.
*   **Disadvantages:** Requires careful coupling of the coils.

**Design Example (Colpitts Oscillator):**
Design a Colpitts oscillator to oscillate at 5 MHz.

*   Choose $L = 10 \text{ } \mu\text{H}$.
*   The resonant frequency is $f_0 = \frac{1}{2\pi \sqrt{L C_{total}}}$.
*   $C_{total} = \frac{1}{(2\pi f_0)^2 L} = \frac{1}{(2\pi \times 5 \times 10^6 \text{ Hz})^2 \times 10 \times 10^{-6} \text{ H}} \approx 101.3 \text{ pF}$.
*   We need to choose $C_1$ and $C_2$ such that $\frac{C_1 C_2}{C_1 + C_2} = C_{total}$. A common practice is to choose $C_1$ and $C_2$ to be of similar magnitude.
*   Let's choose $C_1 = 100 \text{ pF}$ and $C_2 = 100 \text{ pF}$.
*   Then $C_{total} = \frac{100 \times 100}{100 + 100} = \frac{10000}{200} = 50 \text{ pF}$. This is too low.
*   Let's try $C_1 = 200 \text{ pF}$ and $C_2 = 200 \text{ pF}$.
*   Then $C_{total} = \frac{200 \times 200}{200 + 200} = \frac{40000}{400} = 100 \text{ pF}$. This is closer.
*   We can use $C_1 = 200 \text{ pF}$ and $C_2 = 200 \text{ pF}$ for a total capacitance of $100 \text{ pF}$, giving us an approximate frequency of $f_0 = \frac{1}{2\pi \sqrt{10 \text{ } \mu\text{H} \times 100 \text{ pF}}} \approx 5.03 \text{ MHz}$. This is a good approximation.
*   The gain of the amplifier stage must be sufficient to overcome losses in the tank circuit. The feedback ratio is $V_{feedback} / V_{tank} = \frac{C_{total}}{C_1} = \frac{100}{200} = 1/2$. So, the amplifier gain must be at least 2.

**Important Points to Remember:**

*   LC oscillators are for RF frequencies.
*   The LC tank circuit determines the frequency.
*   Hartley uses a tapped inductor.
*   Colpitts uses two capacitors in series.
*   Armstrong uses magnetically coupled feedback coil.
*   The amplifier provides the necessary gain and phase shift.

**Textbook References:**
*   **Paynter:** Likely covers LC oscillators and their basic principles.
*   **Boylestad & Nashelsky:** Excellent source for detailed explanations and circuit analysis of various LC oscillators.
*   **Neaman:** May offer a more rigorous mathematical analysis of the resonant behavior and feedback conditions.
*   **Floyd:** Provides practical insights and circuit diagrams.

---

### 4. Crystal Oscillator

**Key Concept:** Crystal oscillators utilize the piezoelectric effect of quartz crystals to create highly stable and accurate frequency sources. They are essentially LC oscillators where the LC tank circuit is replaced by a quartz crystal acting as a very high-Q resonant circuit.

**Piezoelectric Effect:**
Certain crystalline materials, when subjected to mechanical stress, produce an electrical voltage. Conversely, when an electric field is applied to these materials, they deform mechanically. Quartz is a prominent example.

**Equivalent Circuit of a Quartz Crystal:**
A quartz crystal resonator can be modeled by an equivalent electrical circuit consisting of:

*   **Mechanical Properties:**
    *   $L_m$: Motional inductance (due to mass of the crystal).
    *   $C_m$: Motional capacitance (due to elasticity of the crystal).
    *   $R_m$: Mechanical resistance (due to damping).
*   **Electrical Properties:**
    *   $C_0$: Shunt capacitance or static capacitance (between the electrodes of the crystal, not including the crystal material itself).

**Circuit Diagram of Equivalent Circuit:**

```
    +---- Lm ---- Rm ---- Cm ----+----o
    |                            |
    |                            |
    +---------- C0 --------------+
    |                            |
    +----------------------------o
```

**Modes of Operation:**

1.  **Series Resonance:**
    *   Occurs when the inductive reactance of $L_m$ equals the capacitive reactance of $C_m$.
    *   $X_{Lm} = X_{Cm}$
    *   $2\pi f_s L_m = \frac{1}{2\pi f_s C_m}$
    *   **Series Resonant Frequency:** $f_s = \frac{1}{2\pi \sqrt{L_m C_m}}$
    *   At $f_s$, the impedance of the crystal is at its minimum (equal to $R_m$).

2.  **Parallel Resonance (Antiresonance):**
    *   Occurs at a frequency slightly higher than $f_s$, where the parallel combination of $L_m$ and $C_m$ is resonant.
    *   This occurs when the impedance of the $L_m C_m$ series branch is infinite (ideally). However, due to the presence of $C_0$, the crystal exhibits parallel resonance when the impedance of $L_m$ equals the impedance of the series combination of $C_m$ and $C_0$ (when viewed as a parallel branch). More accurately, it's when the inductive reactance of $L_m$ equals the capacitive reactance of the series combination of $C_m$ and $C_0$.
    *   **Parallel Resonant Frequency:** $f_p \approx \frac{1}{2\pi \sqrt{L_m \frac{C_m C_0}{C_m + C_0}}}$
    *   At $f_p$, the impedance of the crystal is at its maximum (ideally infinite).

**Crystal Oscillator Configurations:**

Crystal oscillators typically use amplifier circuits (like Colpitts, Pierce, or common-base/emitter configurations) to provide gain and feedback, with the crystal replacing the LC tank.

**a) Pierce Oscillator:**
*   **Key Feature:** One of the most common crystal oscillator circuits, widely used due to its simplicity and stability.
*   **Circuit Configuration:**
    *   An amplifier (e.g., common-source FET or common-emitter BJT).
    *   The crystal is connected between the input and output terminals of the amplifier, acting in parallel resonant mode.
    *   Two capacitors ($C_1, C_2$) are used for biasing and feedback compensation, effectively forming a capacitive voltage divider.
*   **Working Principle:**
    *   The crystal is connected in a way that it offers a very high impedance at its parallel resonant frequency.
    *   The amplifier provides gain.
    *   The capacitors $C_1$ and $C_2$ (along with stray capacitances) along with the crystal form a feedback network.
    *   The circuit oscillates at the parallel resonant frequency of the crystal ($f_p$).
    *   The capacitors $C_1$ and $C_2$ are chosen to provide the necessary feedback and can be adjusted to fine-tune the frequency.

**b) Colpitts Crystal Oscillator:**
*   **Key Feature:** Adapts the Colpitts LC oscillator topology by replacing the LC tank with a crystal.
*   **Circuit Configuration:**
    *   An amplifier (e.g., common emitter/source).
    *   The crystal is connected in series with one of the capacitors in the feedback loop.
    *   The resonant frequency is close to the crystal's series resonant frequency.
*   **Working Principle:**
    *   The crystal's series resonant characteristics are exploited.
    *   The capacitors and the inductor (if present, or parasitic inductance) form the tank.
    *   The crystal's series resonance provides a low impedance path at its series resonant frequency ($f_s$).

**c) Common-Base/Emitter Crystal Oscillator:**
*   **Key Feature:** Uses a crystal in the feedback path of a common-base or common-emitter amplifier.
*   **Circuit Configuration:**
    *   Common-base amplifier configuration.
    *   Crystal connected between the output and the emitter (which is usually grounded or bypassed).
*   **Working Principle:**
    *   The crystal acts in its series resonant mode, providing a low impedance path at $f_s$.
    *   The common-base amplifier provides 0° phase shift and sufficient gain.

**Design Considerations for Crystal Oscillators:**

*   **Frequency Stability:** Determined by the crystal's Q factor, temperature stability, mechanical stress, and the oscillator circuit's design.
*   **Crystal Drive Level:** The power dissipated by the crystal should not exceed its rating, as excessive power can cause heating and frequency drift, or even damage.
*   **Load Capacitance:** The oscillator circuit presents a "load capacitance" to the crystal. The crystal's specified operating frequency is usually for a particular load capacitance. If the circuit's effective load capacitance is different, the oscillation frequency will shift.
*   **Starting Ability:** The circuit must have enough gain to overcome the losses at the crystal's resonant frequency to start oscillating.

**Important Points to Remember:**

*   Crystal oscillators are highly stable and accurate.
*   The piezoelectric effect is the fundamental principle.
*   The equivalent circuit includes motional inductance, capacitance, resistance, and shunt capacitance.
*   $f_s$ (series resonance) and $f_p$ (parallel resonance) are key frequencies.
*   Pierce oscillator is a very common and stable configuration.
*   Load capacitance affects the operating frequency.
*   Drive level is important for crystal longevity and stability.

**Textbook References:**
*   **Paynter:** Likely introduces piezoelectricity and crystal applications.
*   **Boylestad & Nashelsky:** Provides detailed analysis of crystal oscillator circuits and their behavior.
*   **Neaman:** May offer a deeper dive into the physics of crystal resonance and advanced oscillator design.
*   **Gayakwad (Op-Amps):** Will be invaluable for understanding how Op-Amps are used in crystal oscillator circuits like the Pierce oscillator.
*   **Bell:** Offers a practical approach to understanding crystal oscillators.

---

### Practice Questions and Exercises

**Question 1 (Wien Bridge Oscillator):**
A Wien Bridge oscillator has $R_1 = R_2 = 10 \text{ k}\Omega$ and $C_1 = C_2 = 0.01 \text{ } \mu\text{F}$. What is the frequency of oscillation? If the amplifier gain is 2, will it oscillate? If the amplifier gain is 4, what is the frequency of oscillation? (3 Marks)

**Answer 1:**
*   Frequency of oscillation: $f_0 = \frac{1}{2\pi RC} = \frac{1}{2\pi (10 \times 10^3 \Omega)(0.01 \times 10^{-6} F)} \approx 1591.5 \text{ Hz}$.
*   For oscillation, the gain must be $\ge 3$. With a gain of 2, it will **not** oscillate.
*   The frequency of oscillation is determined by the RC components and is independent of the amplifier gain (as long as the gain is sufficient to sustain oscillation). So, with a gain of 4, the frequency is still approximately **1591.5 Hz**.

**Question 2 (LC Oscillator - Colpitts):**
In a Colpitts oscillator, the inductance is $L = 50 \text{ } \mu\text{H}$, $C_1 = 300 \text{ pF}$, and $C_2 = 200 \text{ pF}$. Calculate the frequency of oscillation. (2 Marks)

**Answer 2:**
*   Effective capacitance: $C_{total} = \frac{C_1 C_2}{C_1 + C_2} = \frac{(300 \text{ pF})(200 \text{ pF})}{300 \text{ pF} + 200 \text{ pF}} = \frac{60000}{500} \text{ pF} = 120 \text{ pF}$.
*   Frequency of oscillation: $f_0 = \frac{1}{2\pi \sqrt{L C_{total}}} = \frac{1}{2\pi \sqrt{(50 \times 10^{-6} \text{ H})(120 \times 10^{-12} \text{ F})}} \approx 1.83 \text{ MHz}$.

**Question 3 (Crystal Oscillator):**
Explain the equivalent circuit of a quartz crystal and the significance of series and parallel resonance frequencies. (3 Marks)

**Answer 3:**
*   **Equivalent Circuit:** A quartz crystal can be modeled by an electrical circuit consisting of $L_m$ (motional inductance), $R_m$ (mechanical resistance), $C_m$ (motional capacitance), and $C_0$ (shunt capacitance).
*   **Series Resonance ($f_s$):** Occurs when $X_{Lm} = X_{Cm}$. At $f_s$, the crystal has its minimum impedance (approximately $R_m$). This is when the crystal acts like a simple series RLC circuit.
*   **Parallel Resonance ($f_p$):** Occurs at a slightly higher frequency than $f_s$, where the parallel combination of $L_m$ and $C_m$ resonates with $C_0$. At $f_p$, the crystal has its maximum impedance (ideally infinite). This is when the crystal acts like a parallel LC circuit. Crystal oscillators typically operate near $f_s$ or $f_p$ depending on the circuit configuration.

**Question 4 (Design - Conceptual):**
You need to design an oscillator for an audio application that requires a stable sine wave output. Which type of oscillator would you most likely choose and why? Briefly describe the key components needed. (2 Marks)

**Answer 4:**
*   A **Wien Bridge Oscillator** would be most suitable for a stable sine wave output in an audio application.
*   **Reasoning:** Wien Bridge oscillators are known for producing high-quality sine waves and are effective in the audio frequency range. Their frequency is easily adjustable by changing RC components.
*   **Key Components:** An operational amplifier (or transistors for gain), resistors and capacitors forming the frequency-selective feedback network, and amplitude stabilization components (e.g., a lamp or diodes) to ensure a clean sine wave output.

---

**Knowledge Level Check (CO2: Design Oscillator circuits (Knowledge Level: K3))**

The notes provided cover the following aspects relevant to designing oscillator circuits:

*   **Understanding of Oscillators:** Barkhausen criterion is explained, which is fundamental to designing any oscillator.
*   **Wien Bridge Oscillator Design:** Frequency calculation ($f_0 = 1/2\pi RC$) and gain requirement ($A_v \ge 3$) are provided, enabling basic design. Amplitude stabilization is discussed, a key design aspect.
*   **LC Oscillator Design:** Frequency formulas ($f_0 = 1/2\pi \sqrt{LC}$) for Colpitts and Hartley are given, allowing for component selection based on desired frequency. Feedback mechanisms are explained.
*   **Crystal Oscillator Design:** The equivalent circuit and resonant frequencies are crucial for selecting the correct crystal and designing the surrounding amplifier circuit (e.g., Pierce oscillator). Load capacitance considerations are important for accurate frequency selection.

By understanding these concepts and formulas, a student can proceed to design basic oscillator circuits for specific frequency requirements and waveform purity.

---
