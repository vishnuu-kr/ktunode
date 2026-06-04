---
title: "Op Amp Oscillator - LC Oscillators- Colpitts or Hartley Oscillator"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 12: Op Amp Oscillator "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d5d"
status: "completed"
scrapedAt: "2026-05-23T16:11:10.249Z"
---
# ANALOG ELECTRONICS LAB - Module 12: Op Amp Oscillators

## Topic: Op Amp Oscillators - LC Oscillators (Colpitts or Hartley)

This module focuses on understanding and implementing LC oscillators using operational amplifiers (Op-Amps). LC oscillators are a fundamental type of harmonic oscillator that generates sinusoidal waveforms using an inductor (L) and a capacitor (C) as its frequency-determining elements.

---

### Learning Outcomes

By the end of this module, you will be able to:

*   **Understand the fundamental principles of LC oscillators.**
*   **Differentiate between Colpitts and Hartley oscillator configurations.**
*   **Design and analyze Colpitts and Hartley oscillator circuits using Op-Amps.**
*   **Calculate the oscillation frequency and conditions for oscillation for these circuits.**
*   **Assemble and test Colpitts and Hartley oscillator circuits in the lab.**
*   **Identify the output waveform and measure its frequency and amplitude.**
*   **Understand the role of the Op-Amp in oscillator circuits.**

---

### Course Outcomes Alignment

This module directly contributes to the following Course Outcomes (COs):

*   **CO1: Use the various electronic instruments and for conducting experiments. (K1)**
    *   *Relevance:* You will use oscilloscopes, signal generators, and other lab equipment to test the designed oscillator circuits.
*   **CO3: Design and implement amplifier and oscillator circuits using BJT and JFET. (K3)**
    *   *Relevance:* While this topic specifically uses Op-Amps, the underlying principles of oscillator design and frequency determination using resonant circuits are transferable. Understanding LC oscillators with Op-Amps builds a strong foundation for designing other types of oscillators.
*   **CO4: Design and implement basic circuits using IC (OPAMP and 555 timers). (K3)**
    *   *Relevance:* This is a direct application of using Op-Amps to implement an oscillator circuit, a fundamental building block in electronics.
*   **CO5: Simulate electronic circuits using any circuit simulation software. (K3)**
    *   *Relevance:* You will be encouraged to simulate these circuits to verify your designs before breadboarding.

---

### 1. Introduction to Oscillators

**Definition:** An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangular wave. It converts direct current (DC) power into alternating current (AC) power.

**Key Components of an Oscillator:**

1.  **Active Element:** Provides amplification to compensate for losses in the circuit. In this module, it's an **Op-Amp**.
2.  **Feedback Network:** Provides a portion of the output signal back to the input. For oscillation to occur, this feedback must be **positive**.
3.  **Frequency-Determining Network:** Consists of reactive components (inductors and capacitors) that set the frequency of oscillation. This is typically a **resonant circuit (tank circuit)**.

---

### 2. Types of Oscillators

Oscillators can be broadly classified based on their frequency-determining network:

*   **LC Oscillators:** Use inductors (L) and capacitors (C) to determine the oscillation frequency. These are generally used for higher frequencies (RF range).
*   **RC Oscillators:** Use resistors (R) and capacitors (C) to determine the oscillation frequency. These are generally used for lower frequencies (audio range).
*   **Crystal Oscillators:** Use a piezoelectric crystal (typically quartz) for highly stable frequency generation.

---

### 3. LC Oscillators - The Tank Circuit

The core of an LC oscillator is the **tank circuit**, which is a parallel or series combination of an inductor and a capacitor. This circuit has a natural resonant frequency at which it will oscillate if energy is supplied.

**Resonant Frequency (f₀):**
The resonant frequency of an LC circuit is given by:

$f_0 = \frac{1}{2\pi\sqrt{LC}}$

Where:
*   $f_0$ is the resonant frequency in Hertz (Hz)
*   $L$ is the inductance in Henries (H)
*   $C$ is the capacitance in Farads (F)

---

### 4. Op-Amp as the Active Element in Oscillators

Op-Amps are versatile active elements for building oscillators due to their high open-loop gain and input impedance. When configured appropriately, they can provide the necessary amplification and phase shift for oscillation.

---

### 5. Colpitts Oscillator

**Concept:** The Colpitts oscillator uses a tapped capacitor in its feedback network. The resonant tank circuit consists of an inductor and two series capacitors. The feedback is taken from the junction between the two capacitors.

**Circuit Diagram (using Op-Amp):**

```
      +Vcc
       |
      R1
       |
   .--/\/\--.
   |       |
   |       C1 (Feedback Capacitor)
   |       |
   |       +-------> Output
   |       |
  ^-^-^-^-^-^-^-^  (Op-Amp Output)
  |             |
  |    Op-Amp   |
  |             |
  ^-^-^-^-^-^-^-^
   |       |
   R2      |
   |       |
  GND     ---
          \ / C2 (Feedback Capacitor)
           -
           |
          --- L (Inductor)
           -
           |
          GND
```

**Explanation:**

*   **Tank Circuit:** Composed of inductor $L$ and capacitors $C_1$ and $C_2$ in series. The effective capacitance of the tank circuit is given by the series combination of $C_1$ and $C_2$: $C_{eff} = \frac{C_1 C_2}{C_1 + C_2}$.
*   **Feedback Network:** The tapped voltage from the junction of $C_1$ and $C_2$ provides the feedback signal to the non-inverting input of the Op-Amp (configured as a common-emitter or common-source amplifier equivalent for oscillation).
*   **Active Element:** The Op-Amp provides amplification.
*   **Positive Feedback:** The feedback signal is in phase with the input signal at the resonant frequency, causing sustained oscillations.

**Conditions for Oscillation (Barkhausen Criterion):**

For sustained oscillations, two conditions must be met:

1.  **Magnitude Condition:** The loop gain ($A\beta$) must be equal to or greater than 1 ($|A\beta| \ge 1$).
2.  **Phase Condition:** The total phase shift around the feedback loop must be 0° or an integer multiple of 360° (0°, 360°, 720°, etc.).

In the Colpitts oscillator, the phase shift is naturally 180° from the Op-Amp (if configured as an inverting amplifier for the feedback signal) and another 180° from the LC tank circuit, resulting in a total of 360°. If the Op-Amp is used in a non-inverting configuration for the feedback, the LC network provides the necessary phase shift.

**Oscillation Frequency:**
The frequency of oscillation is primarily determined by the inductor and the series combination of the capacitors:

$f_0 = \frac{1}{2\pi\sqrt{L \left(\frac{C_1 C_2}{C_1 + C_2}\right)}}$

**Example:**
Let $L = 100 \mu H$, $C_1 = 0.01 \mu F$, and $C_2 = 0.01 \mu F$.
Then $C_{eff} = \frac{0.01 \mu F \times 0.01 \mu F}{0.01 \mu F + 0.01 \mu F} = 0.005 \mu F = 5 nF$.
$f_0 = \frac{1}{2\pi\sqrt{100 \times 10^{-6} H \times 5 \times 10^{-9} F}} \approx \frac{1}{2\pi\sqrt{500 \times 10^{-15}}} \approx \frac{1}{2\pi \times 22.36 \times 10^{-7.5}} \approx 71.1 kHz$.

**Practical Considerations:**
*   The Op-Amp's non-linearities (saturation) help stabilize the amplitude of oscillations.
*   The gain of the Op-Amp must be sufficient to overcome the losses in the LC circuit.
*   The choice of capacitors affects the feedback ratio and, consequently, the required gain. A higher ratio of $C_1/C_2$ generally means more feedback.

**Textbook Reference:**
*   **Boylestad & Nashelsky (Electronic Devices and Circuit Theory):** Discusses oscillator principles and common configurations, including the Colpitts oscillator, and the conditions for oscillation.
*   **Paynter (Introductory Electronic Devices and Circuits):** May cover basic oscillator concepts and the role of feedback.

---

### 6. Hartley Oscillator

**Concept:** The Hartley oscillator uses a tapped inductor in its feedback network. The resonant tank circuit consists of a capacitor and two inductors in series. The feedback is taken from the junction between the two inductors.

**Circuit Diagram (using Op-Amp):**

```
      +Vcc
       |
      R1
       |
   .--/\/\--.
   |       |
   |       C (Feedback Capacitor)
   |       |
   |       +-------> Output
   |       |
  ^-^-^-^-^-^-^-^  (Op-Amp Output)
  |             |
  |    Op-Amp   |
  |             |
  ^-^-^-^-^-^-^-^
   |       |
   R2      |
   |       |
  GND     --- L1 (Inductor)
          \ /
           -
           |
          --- L2 (Inductor)
           -
           |
          GND
```

**Explanation:**

*   **Tank Circuit:** Composed of capacitor $C$ and inductors $L_1$ and $L_2$ in series. The effective inductance of the tank circuit is the series combination of $L_1$ and $L_2$: $L_{eff} = L_1 + L_2$.
*   **Feedback Network:** The tapped voltage from the junction of $L_1$ and $L_2$ provides the feedback signal to the non-inverting input of the Op-Amp.
*   **Active Element:** The Op-Amp provides amplification.
*   **Positive Feedback:** The feedback signal is in phase with the input signal at the resonant frequency, causing sustained oscillations.

**Conditions for Oscillation (Barkhausen Criterion):**
Similar to the Colpitts oscillator, the loop gain must be at least unity, and the total phase shift must be 0° or 360°. The phase shift is achieved by the Op-Amp and the resonant circuit.

**Oscillation Frequency:**
The frequency of oscillation is primarily determined by the capacitor and the series combination of the inductors:

$f_0 = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$

**Example:**
Let $L_1 = 100 \mu H$, $L_2 = 100 \mu H$, and $C = 0.01 \mu F$.
Then $L_{eff} = 100 \mu H + 100 \mu H = 200 \mu H$.
$f_0 = \frac{1}{2\pi\sqrt{200 \times 10^{-6} H \times 0.01 \times 10^{-6} F}} \approx \frac{1}{2\pi\sqrt{2 \times 10^{-12}}} \approx \frac{1}{2\pi \times 1.414 \times 10^{-6}} \approx 112.5 kHz$.

**Practical Considerations:**
*   The coupling between the two inductors ($L_1$ and $L_2$) can affect the oscillation frequency and stability. Magnetic coupling between inductors should ideally be minimized.
*   The ratio of $L_1$ to $L_2$ determines the feedback ratio.

**Textbook Reference:**
*   **Neaman (Electronic Circuits: Analysis and Design):** Provides detailed analysis of oscillator circuits, including the conditions for oscillation and frequency calculations for Hartley oscillators.
*   **Boylestad & Nashelsky (Electronic Devices and Circuit Theory):** Covers the fundamental principles and practical aspects of Hartley oscillators.

---

### 7. Designing an Op-Amp Oscillator for the Lab

**General Design Steps:**

1.  **Choose the oscillator type:** Colpitts or Hartley. The choice might depend on the availability of components and the desired frequency range.
2.  **Determine the desired oscillation frequency ($f_0$).**
3.  **Select component values:**
    *   **For Colpitts:** Choose $L$, then select $C_1$ and $C_2$ such that their series combination provides the desired $C_{eff}$ for the target frequency. The ratio $C_1/C_2$ influences the feedback and required gain. A common starting point is $C_1 \approx C_2$.
    *   **For Hartley:** Choose $C$, then select $L_1$ and $L_2$ such that their series combination provides the desired $L_{eff}$ for the target frequency. The ratio $L_1/L_2$ influences the feedback.
4.  **Select the Op-Amp:** A general-purpose Op-Amp like the LM741 or TL082 can be used, but for higher frequencies, a faster Op-Amp might be necessary.
5.  **Design the Op-Amp biasing and feedback:**
    *   The Op-Amp is typically used in a **non-inverting configuration** for the feedback to achieve the required phase shift.
    *   The feedback network (tapped LC circuit) is connected to the non-inverting input (+).
    *   The output of the Op-Amp is fed back to the tank circuit.
    *   Resistors are used to bias the Op-Amp in its linear operating region. For a simple configuration, a voltage follower or a non-inverting amplifier setup can be used, where the feedback network dictates the oscillation.
6.  **Ensure the Barkhausen Criterion is met:** The gain of the Op-Amp configuration must be sufficient to start and sustain oscillations. You might need to adjust resistor values in the Op-Amp's feedback path (if any, beyond the tank circuit) or select Op-Amps with higher gain.

**Simplified Op-Amp Configuration for Oscillation:**

Often, the Op-Amp is configured as a simple **voltage follower** or **non-inverting amplifier** where the output of the amplifier is connected back to the frequency-determining network, and the feedback from the frequency-determining network is applied to the non-inverting input. The gain required is usually modest (e.g., 3-10) as the LC tank circuit itself has some inherent amplification of signals at resonance.

**Example Design Scenario (Colpitts):**

Let's aim for an oscillation frequency of approximately 100 kHz.

1.  **Frequency:** $f_0 = 100 kHz$.
2.  **Choose $L$:** Let's pick a standard inductor value, $L = 100 \mu H$.
3.  **Calculate required $C_{eff}$:**
    $C_{eff} = \frac{1}{(2\pi f_0)^2 L} = \frac{1}{(2\pi \times 100 \times 10^3)^2 \times 100 \times 10^{-6}}$
    $C_{eff} = \frac{1}{(6.283 \times 10^5)^2 \times 10^{-4}} = \frac{1}{(3.948 \times 10^{11}) \times 10^{-4}} = \frac{1}{3.948 \times 10^7}$
    $C_{eff} \approx 0.0253 \times 10^{-7} F = 0.253 \times 10^{-6} F = 0.253 \mu F$.
4.  **Choose $C_1$ and $C_2$:** We need $C_1$ and $C_2$ in series to provide $C_{eff} = 0.253 \mu F$. Let's try equal capacitors for simplicity, so $C_1 = C_2$.
    $C_{eff} = \frac{C_1 C_2}{C_1 + C_2} = \frac{C_1^2}{2C_1} = \frac{C_1}{2}$
    $C_1 = 2 \times C_{eff} = 2 \times 0.253 \mu F = 0.506 \mu F$.
    Standard capacitor values close to this are $0.47 \mu F$ or $0.56 \mu F$. Let's choose $C_1 = 0.5 \mu F$ and $C_2 = 0.5 \mu F$.
    This gives $C_{eff} = \frac{0.5 \times 0.5}{0.5 + 0.5} = 0.25 \mu F$.
    Recalculating frequency with $C_{eff} = 0.25 \mu F$:
    $f_0 = \frac{1}{2\pi\sqrt{100 \times 10^{-6} H \times 0.25 \times 10^{-6} F}} = \frac{1}{2\pi\sqrt{25 \times 10^{-12}}} = \frac{1}{2\pi \times 5 \times 10^{-6}} = \frac{1}{31.416 \times 10^{-6}} \approx 31.8 kHz$.
    *This shows that choosing components requires iteration or using a simulator.*

    Let's re-evaluate with target $C_{eff} = 0.253 \mu F$:
    If we pick $C_2 = 0.47 \mu F$, then
    $C_1 = \frac{C_{eff} C_2}{C_2 - C_{eff}} = \frac{0.253 \mu F \times 0.47 \mu F}{0.47 \mu F - 0.253 \mu F} = \frac{0.11891}{0.217} \approx 0.548 \mu F$.
    So, $C_1 = 0.56 \mu F$ and $C_2 = 0.47 \mu F$ would be a good practical choice.
    $C_{eff} = \frac{0.56 \times 0.47}{0.56 + 0.47} = \frac{0.2632}{1.03} \approx 0.255 \mu F$.
    $f_0 = \frac{1}{2\pi\sqrt{100 \times 10^{-6} H \times 0.255 \times 10^{-6} F}} = \frac{1}{2\pi\sqrt{25.5 \times 10^{-12}}} = \frac{1}{2\pi \times 5.05 \times 10^{-6}} \approx 31.4 kHz$.

    *It seems my initial calculation of $C_{eff}$ was off by a factor of 10 or my assumption of typical component values.* Let's recalculate for 100kHz again.
    $f_0 = 100 kHz = 10^5 Hz$.
    $C_{eff} = \frac{1}{(2\pi \times 10^5)^2 \times 100 \times 10^{-6}} = \frac{1}{(6.283 \times 10^5)^2 \times 10^{-4}} = \frac{1}{(3.948 \times 10^{11}) \times 10^{-4}} = \frac{1}{3.948 \times 10^7} \approx 2.53 \times 10^{-8} F = 0.0253 \mu F$.

    Now, let's choose $C_1$ and $C_2$ for $C_{eff} \approx 0.025 \mu F = 25 nF$.
    If $C_1 = C_2$, then $C_1 = 2 \times C_{eff} = 50 nF$.
    Standard values: $C_1 = 47 nF$, $C_2 = 47 nF$.
    $C_{eff} = \frac{47 \times 47}{47 + 47} = \frac{2209}{94} \approx 23.5 nF$.
    $f_0 = \frac{1}{2\pi\sqrt{100 \times 10^{-6} H \times 23.5 \times 10^{-9} F}} = \frac{1}{2\pi\sqrt{2.35 \times 10^{-12}}} = \frac{1}{2\pi \times 1.53 \times 10^{-6}} \approx 103 kHz$.
    This is close to 100 kHz.

    **Feedback Network for Op-Amp:**
    Connect the junction of $C_1$ and $C_2$ to the non-inverting input (+) of the Op-Amp. The Op-Amp can be configured as a non-inverting amplifier with a gain slightly greater than 1. For example, a voltage follower (gain=1) might suffice, or a simple non-inverting amplifier with gain 2-3 by adding a resistor to ground from the inverting input and another resistor from the output to the inverting input.

    **Biasing:** Power the Op-Amp with $\pm V_{CC}$ (e.g., $\pm 12V$). Add decoupling capacitors to the power supply pins.

**Lab Setup:**
*   Breadboard the circuit.
*   Connect power supply to the Op-Amp.
*   Connect the output of the Op-Amp to an oscilloscope to observe the waveform.
*   Verify the frequency using the oscilloscope's measurement functions or a frequency counter.
*   If oscillations are not observed, check component values, connections, and the Op-Amp's gain. You might need to adjust capacitor values slightly or use a different inductor.

---

### 8. Practice Questions and Answers

**Q1. What are the two main conditions for sustained oscillations in any oscillator circuit?**

**Answer:** The two conditions, according to the Barkhausen criterion, are:
1.  The magnitude of the loop gain must be equal to or greater than unity ($|A\beta| \ge 1$).
2.  The total phase shift around the feedback loop must be 0° or an integer multiple of 360°.

**Q2. In a Colpitts oscillator, what components form the frequency-determining tank circuit? How is the feedback signal obtained?**

**Answer:** The frequency-determining tank circuit in a Colpitts oscillator consists of an inductor ($L$) and two capacitors ($C_1$, $C_2$) connected in series. The feedback signal is obtained from the junction between the two series capacitors ($C_1$ and $C_2$).

**Q3. If a Hartley oscillator has $L_1 = 50 \mu H$, $L_2 = 50 \mu H$, and $C = 10 nF$, what is its approximate oscillation frequency?**

**Answer:**
Effective inductance $L_{eff} = L_1 + L_2 = 50 \mu H + 50 \mu H = 100 \mu H$.
$f_0 = \frac{1}{2\pi\sqrt{L_{eff} C}} = \frac{1}{2\pi\sqrt{100 \times 10^{-6} H \times 10 \times 10^{-9} F}}$
$f_0 = \frac{1}{2\pi\sqrt{1000 \times 10^{-15}}} = \frac{1}{2\pi\sqrt{1 \times 10^{-12}}} = \frac{1}{2\pi \times 1 \times 10^{-6}}$
$f_0 = \frac{1}{6.283 \times 10^{-6}} \approx 159.15 kHz$.

**Q4. What advantage does an Op-Amp offer over a discrete transistor in an oscillator circuit when considering ease of design and stability?**

**Answer:** Op-Amps have high open-loop gain, high input impedance, and low output impedance, which simplify the design of the feedback network and make the oscillation frequency less dependent on the Op-Amp's characteristics. Their predictable behavior and internal compensation also contribute to stability.

**Q5. For a Colpitts oscillator designed for 500 kHz, if you use an inductor of $20 \mu H$, what should be the approximate value of the *series combination* of the two feedback capacitors ($C_{eff}$)?**

**Answer:**
$C_{eff} = \frac{1}{(2\pi f_0)^2 L} = \frac{1}{(2\pi \times 500 \times 10^3)^2 \times 20 \times 10^{-6}}$
$C_{eff} = \frac{1}{(3.1416 \times 10^6)^2 \times 20 \times 10^{-6}} = \frac{1}{(9.87 \times 10^{12}) \times 20 \times 10^{-6}}$
$C_{eff} = \frac{1}{197.4 \times 10^6} \approx 5.06 \times 10^{-9} F = 5.06 nF$.

---

### 9. Important Points to Remember

*   **Positive Feedback:** Crucial for oscillation.
*   **Barkhausen Criterion:** Gain $\ge 1$ and phase shift = 0° or 360°.
*   **Tank Circuit:** Determines the frequency. LC circuits are for higher frequencies.
*   **Colpitts:** Tapped capacitor.
*   **Hartley:** Tapped inductor.
*   **Op-Amp Function:** Provides amplification and can be part of the feedback network.
*   **Starting Oscillations:** The Op-Amp's gain must be sufficient to overcome losses and initiate oscillations.
*   **Amplitude Stabilization:** Op-Amp saturation or a DC bias resistor can help limit the amplitude to prevent distortion.
*   **Simulation:** Use simulators (like LTspice, Multisim) to verify your design before breadboarding. This helps in selecting component values and troubleshooting.

---

### 10. Further Exploration (Optional)

*   **Phase Shift Oscillators:** Explore RC-based oscillators like the Wien-bridge or phase-shift oscillators.
*   **Amplitude Control:** Investigate methods for automatic amplitude control in oscillators.
*   **Crystal Oscillators:** Learn about the advantages of using quartz crystals for stable frequency generation.
*   **Op-Amp Limitations:** Understand how Op-Amp bandwidth, slew rate, and output voltage swing affect oscillator performance at higher frequencies.

---
