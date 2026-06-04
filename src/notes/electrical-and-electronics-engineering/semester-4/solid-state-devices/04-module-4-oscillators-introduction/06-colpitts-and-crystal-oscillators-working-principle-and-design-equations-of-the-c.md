---
title: "Colpitts and Crystal oscillators (working principle and design equations of the circuits only). Analysis of RC phase shift oscillator."
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9b"
status: "completed"
scrapedAt: "2026-05-23T16:18:58.379Z"
---
# SOLID STATE DEVICES - Module 4: Oscillators: Introduction

## Topic: Colpitts and Crystal Oscillators (Working Principle and Design Equations), RC Phase Shift Oscillator (Analysis)

---

### **1. Introduction to Oscillators**

**Definition:** An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangular wave. They are fundamental building blocks in many electronic systems, used for generating carrier frequencies for radio transmitters, timing signals for digital circuits, and more.

**Key Concept: Barkhausen Criterion**

For a feedback amplifier to oscillate, it must meet two conditions, collectively known as the Barkhausen Criterion:

1.  **Loop Gain Magnitude:** The magnitude of the loop gain ($|A\beta|$) must be equal to or greater than 1. ($|A\beta| \ge 1$)
2.  **Phase Shift:** The total phase shift around the feedback loop must be 0 degrees or an integer multiple of 360 degrees ($n \times 360^\circ$, where $n$ is an integer).

**Important Point:** Oscillators are essentially amplifiers with positive feedback that meet the Barkhausen criterion. The gain of the amplifier compensates for the losses in the feedback network, sustaining oscillations.

**Relation to Course Outcomes:**
*   **CO4 (K4):** Understanding the principles of oscillators directly contributes to designing and analyzing oscillator circuits.
*   **CO2 (K3):** Small-signal analysis of amplifiers is crucial for determining the gain required for oscillation.

---

### **2. RC Phase Shift Oscillator**

**Working Principle:**
The RC phase shift oscillator uses an amplifier (typically a common-emitter BJT amplifier) and a phase-shifting network consisting of resistors (R) and capacitors (C) to achieve the required 180-degree phase shift. The amplifier itself provides another 180-degree phase shift (inverting amplifier), resulting in a total of 360 degrees for oscillation. The amplifier gain must be sufficient to overcome the attenuation of the RC network.

**Circuit Diagram:**

*(Imagine a common-emitter BJT amplifier. The output of the BJT is connected to the input of an RC phase-shifting network. This network consists of three RC sections, each providing approximately 60-degree phase shift. The output of the third RC section is fed back to the base of the BJT through a coupling capacitor.)*

**RC Phase Shifting Network:**
*   The network typically consists of **three RC sections**.
*   Each RC section consists of a resistor and a capacitor.
*   Each section shifts the phase by approximately 60 degrees.
*   Therefore, three sections provide a total phase shift of approximately $180^\circ$ ($3 \times 60^\circ$).

**Analysis:**

To analyze the RC phase shift oscillator, we need to determine the frequency of oscillation and the condition for oscillation (gain requirement).

**Assumptions:**
*   The amplifier provides a voltage gain $A_v$ and an input impedance that doesn't significantly load the RC network.
*   The output impedance of the amplifier is negligible.
*   The RC network provides a voltage gain $\beta$.

**Design Equations (for a three-stage RC phase shifter):**

Let's consider one RC section with resistor $R$ and capacitor $C$. The impedance of the capacitor is $Z_C = 1/(j\omega C)$.

The voltage division factor for a single RC section can be calculated. The total phase shift is the sum of phase shifts from each section.

For **three identical RC sections**, where each section has a resistor $R$ and a capacitor $C$, the feedback factor $\beta$ is approximately:

$\beta \approx \frac{1}{1 - j\frac{23}{f_r}} \approx \frac{1}{29}$

where $f_r$ is the frequency of oscillation.

**Frequency of Oscillation ($f_0$):**
For three identical RC sections, the oscillation frequency is given by:

$f_0 = \frac{1}{2\pi RC\sqrt{6}}$

**Condition for Oscillation (Gain Requirement):**
The loop gain is $A\beta$. For oscillation, $|A\beta| \ge 1$.
The feedback network introduces an attenuation (gain magnitude less than 1). For three identical RC sections, the voltage gain provided by the feedback network is approximately:

$|\beta| = \frac{1}{29}$

Therefore, the amplifier voltage gain ($A_v$) must be at least:

$|A_v| \ge 29$

**To achieve this gain, common-emitter BJT amplifier configurations are typically used.** The gain of a common-emitter amplifier is approximately $A_v = - \frac{R_C}{r_e}$ (ignoring $r_o$). The negative sign provides the required $180^\circ$ phase shift.

**How it works:**
1.  The amplifier provides a voltage gain $A_v$ and a $180^\circ$ phase shift.
2.  The three RC sections in the feedback network shift the phase by approximately $180^\circ$ at the frequency of oscillation.
3.  The total phase shift around the loop is $180^\circ + 180^\circ = 360^\circ$.
4.  The gain of the amplifier must be sufficient ($|A_v| \ge 29$) to overcome the attenuation of the RC network.
5.  When these conditions are met, the circuit starts to oscillate at $f_0 = \frac{1}{2\pi RC\sqrt{6}}$.

**Design Steps:**
1.  Choose the desired frequency of oscillation, $f_0$.
2.  Select standard resistor values for $R$ and capacitor values for $C$. Calculate $f_0$ using the formula and adjust $R$ or $C$ if necessary. A common practice is to choose $R$ and then calculate $C$.
3.  Design the amplifier stage (e.g., common-emitter BJT) to provide a voltage gain of at least 29. This involves selecting appropriate transistor parameters and biasing resistors.

**Example:**
Design an RC phase shift oscillator to operate at approximately 10 kHz.
Given $f_0 = 10 \text{ kHz}$, $R = 10 \text{ k}\Omega$.
We need to find $C$.
$f_0 = \frac{1}{2\pi RC\sqrt{6}}$
$10 \times 10^3 = \frac{1}{2\pi (10 \times 10^3) C\sqrt{6}}$
$C = \frac{1}{2\pi (10 \times 10^3)^2 \sqrt{6}} \approx \frac{1}{2\pi (10^8) \sqrt{6}} \approx \frac{1}{1.53 \times 10^9} \approx 653 \text{ pF}$
The amplifier must have a voltage gain of at least 29.

**Reference:**
*   *Electronic Devices and Circuit Theory* by Boylestad and Nashelsky often covers RC oscillators in its oscillator section.
*   *Microelectronic Circuits* by Sedra and Smith also provides a detailed analysis of phase shift oscillators.

**Important Points to Remember:**
*   The frequency of oscillation is determined by the RC network.
*   The amplifier's gain is crucial for sustaining oscillations.
*   The phase shift must be $360^\circ$ around the loop.
*   Non-ideal components and loading effects can affect the actual frequency and gain requirements.

---

### **3. Colpitts Oscillator**

**Working Principle:**
The Colpitts oscillator is an LC oscillator that uses a tapped capacitor in the tank circuit to provide the feedback. It employs an amplifier (usually a common-emitter BJT or common-source FET) and an LC resonant circuit. The oscillations occur at the resonant frequency of the LC tank.

**Circuit Diagram:**

*(Imagine a common-emitter BJT amplifier. The collector is connected to the top of an inductor (L). The emitter is connected to the bottom of two series-connected capacitors ($C_1$ and $C_2$), with a tap between them connected to the tank circuit. The tank circuit consists of the inductor L in parallel with the series combination of $C_1$ and $C_2$. The base of the BJT is coupled to the tap point between $C_1$ and $C_2$ through a biasing resistor network and potentially a coupling capacitor.)*

**Key Components:**
*   **Amplifier:** Provides gain and the necessary $180^\circ$ phase shift.
*   **Tank Circuit:** Consists of an inductor (L) and two series capacitors ($C_1$ and $C_2$). The resonant frequency is determined by this LC combination.
*   **Feedback Network:** The tapped capacitor ($C_1$ and $C_2$) acts as a voltage divider, providing the necessary feedback signal and phase shift.

**How it works:**
1.  The amplifier provides a $180^\circ$ phase shift.
2.  The LC tank circuit oscillates at its resonant frequency.
3.  The series combination of $C_1$ and $C_2$ forms a capacitive voltage divider. The voltage across $C_2$ is fed back to the amplifier's input.
4.  The ratio of $C_1$ and $C_2$ determines the amount of feedback.
5.  The amplifier's gain amplifies the feedback signal.
6.  At the resonant frequency, the phase shift from the tank circuit and amplifier combine to $360^\circ$, sustaining oscillations.

**Design Equations:**

**Frequency of Oscillation ($f_0$):**
The resonant frequency of the LC tank circuit determines the oscillation frequency. It is given by:

$f_0 = \frac{1}{2\pi \sqrt{LC_{eq}}}$

where $C_{eq}$ is the equivalent capacitance of the series combination of $C_1$ and $C_2$:

$C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$

So, the frequency of oscillation is:

$f_0 = \frac{1}{2\pi \sqrt{L \left(\frac{C_1 C_2}{C_1 + C_2}\right)}}$

**Condition for Oscillation (Gain Requirement):**
The feedback fraction $\beta$ is determined by the voltage division ratio of the capacitors:

$|\beta| = \frac{V_{feedback}}{V_{tank}} = \frac{Z_{C_2}}{Z_{C_1} + Z_{C_2}} = \frac{1/(j\omega C_2)}{1/(j\omega C_1) + 1/(j\omega C_2)}$

Simplifying this, we get:

$|\beta| = \frac{C_1}{C_1 + C_2}$

For oscillation to occur, the loop gain magnitude must be greater than or equal to 1:

$|A\beta| \ge 1$

Therefore, the amplifier voltage gain ($A_v$) must satisfy:

$|A_v| \ge \frac{1}{|\beta|} = \frac{C_1 + C_2}{C_1}$

**Design Steps:**
1.  Choose the desired frequency of oscillation, $f_0$.
2.  Select a suitable inductor value ($L$).
3.  Calculate the required equivalent capacitance ($C_{eq}$) using $f_0 = \frac{1}{2\pi \sqrt{LC_{eq}}}$.
4.  Choose capacitor values $C_1$ and $C_2$ such that $C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$. There is flexibility here. For example, you can choose $C_2$ and then calculate $C_1$: $C_1 = \frac{C_{eq} C_2}{C_2 - C_{eq}}$.
5.  Determine the required amplifier gain: $|A_v| \ge \frac{C_1 + C_2}{C_1}$. Design the amplifier stage to meet this gain requirement.

**Example:**
Design a Colpitts oscillator to operate at 1 MHz using an inductor of $10 \mu\text{H}$.
Given $f_0 = 1 \text{ MHz}$, $L = 10 \mu\text{H}$.
First, find $C_{eq}$:
$C_{eq} = \frac{1}{(2\pi f_0)^2 L} = \frac{1}{(2\pi \times 10^6)^2 \times 10 \times 10^{-6}} = \frac{1}{(6.28 \times 10^6)^2 \times 10^{-5}} \approx \frac{1}{39.4 \times 10^{12} \times 10^{-5}} \approx \frac{1}{3.94 \times 10^8} \approx 2.54 \text{ nF}$

Now, choose $C_1$ and $C_2$ such that $\frac{C_1 C_2}{C_1 + C_2} = 2.54 \text{ nF}$.
Let's choose $C_2 = 5 \text{ nF}$.
$C_1 = \frac{C_{eq} C_2}{C_2 - C_{eq}} = \frac{2.54 \text{ nF} \times 5 \text{ nF}}{5 \text{ nF} - 2.54 \text{ nF}} = \frac{12.7 \text{ nF}^2}{2.46 \text{ nF}} \approx 5.16 \text{ nF}$.

The required amplifier gain is $|A_v| \ge \frac{C_1 + C_2}{C_1} = \frac{5.16 \text{ nF} + 5 \text{ nF}}{5.16 \text{ nF}} = \frac{10.16}{5.16} \approx 1.97$.
A common-emitter amplifier with a gain of at least 2 would be needed.

**Reference:**
*   *Microelectronic Circuits* by Sedra and Smith provides an excellent treatment of LC oscillators, including the Colpitts oscillator.
*   *Electronic Devices and Circuits* by Bell also covers this topic.

**Important Points to Remember:**
*   The frequency of oscillation is determined by the LC tank circuit.
*   The tapped capacitor ratio determines the feedback factor.
*   The amplifier gain must be sufficient to overcome the feedback attenuation.
*   Colpitts oscillators are known for their good frequency stability compared to RC oscillators.

---

### **4. Crystal Oscillator**

**Working Principle:**
A crystal oscillator utilizes the piezoelectric effect of a quartz crystal to produce highly stable oscillations at a precise frequency. A quartz crystal acts as a mechanical resonator. When an AC voltage is applied across it, it vibrates at its natural resonant frequency. Conversely, when it vibrates mechanically, it generates an electrical voltage. This piezoelectric property is used to create a very high-Q (Quality Factor) resonant circuit.

**Piezoelectric Effect:**
*   **Direct Piezoelectric Effect:** Mechanical stress produces an electric charge.
*   **Converse Piezoelectric Effect:** An applied electric field causes mechanical deformation.

**Crystal as a Resonant Circuit:**
A quartz crystal can be modeled by an equivalent electrical circuit consisting of:
*   **Maserate Circuit:** A series combination of motional inductance ($L_m$), motional capacitance ($C_m$), and series resistance ($R_s$). This represents the mechanical resonance.
*   **Shunt Capacitance ($C_0$):** This is the static capacitance between the electrodes.

**Modes of Oscillation:**
*   **Series Resonance:** Occurs when the inductive reactance of $L_m$ equals the capacitive reactance of $C_m$. This frequency is called the **series resonant frequency** ($f_s$).
*   **Parallel Resonance (Antiresonance):** Occurs at a slightly higher frequency where the inductive reactance of $L_m$ equals the capacitive reactance of the parallel combination of $C_0$ and the series combination of $C_m$. This frequency is called the **parallel resonant frequency** ($f_p$).

**Crystal Oscillator Circuit Configuration:**
Crystal oscillators typically use amplifier circuits (like common-emitter BJT or common-source FET) with the crystal incorporated into the feedback network. The crystal is usually placed in either the feedback path or as part of the resonant circuit.

**Common Configurations:**
1.  **Pierce Oscillator:** The crystal is connected between the output and input of an inverting amplifier. The crystal effectively replaces the LC tank circuit in a Colpitts or Hartley oscillator. It operates at or very near the parallel resonant frequency.
2.  **Colpitts/Hartley Oscillator with Crystal:** The crystal can be used in place of the LC tank circuit.

**How it works (Pierce Oscillator Example):**
1.  An inverting amplifier (e.g., common-emitter) provides gain and a $180^\circ$ phase shift.
2.  The quartz crystal, along with external components (usually two capacitors $C_1$ and $C_2$), forms the feedback network.
3.  The crystal operates at its series resonant frequency or close to its parallel resonant frequency.
4.  The feedback network provides the necessary phase shift to complement the amplifier's phase shift, satisfying the Barkhausen criterion.
5.  The high Q of the crystal ensures that oscillations occur at a very precise frequency, making it ideal for applications requiring high frequency stability.

**Design Equations:**

The primary design consideration for a crystal oscillator is to achieve oscillation at the desired frequency. The crystal itself is the frequency-determining element.

**Frequency of Oscillation:**
*   If the crystal is used in a series resonant configuration (e.g., as a series element in the feedback path), the oscillation frequency will be close to the crystal's **series resonant frequency ($f_s$)**.
    $f_s = \frac{1}{2\pi \sqrt{L_m C_m}}$

*   If the crystal is used in a parallel resonant configuration (e.g., connected to ground via a capacitor, or as part of a tank circuit), the oscillation frequency will be close to the crystal's **parallel resonant frequency ($f_p$)**.
    $f_p = f_s \sqrt{1 + \frac{C_m}{C_0}}$

**Condition for Oscillation:**
Similar to other oscillators, the loop gain magnitude must be $\ge 1$. The exact gain requirement depends on the specific circuit configuration and the crystal's equivalent parameters (especially $R_s$).

For a Pierce oscillator configuration:
*   The amplifier gain ($A_v$) must be sufficient to overcome the losses in the crystal and the associated external components.
*   The external capacitors ($C_1, C_2$) in conjunction with the crystal's static capacitance ($C_0$) and motional capacitance ($C_m$) set the operating frequency and feedback level. The parallel combination of $C_0$ and the series combination of $C_1$ and $C_2$ influences the operating point relative to $f_s$ and $f_p$.

**Simplified Analysis for a Pierce Oscillator (operating near $f_s$):**
The crystal itself provides a very low impedance at $f_s$. The feedback path typically involves the crystal in series with $C_1$ and $C_2$ in parallel. For stable oscillation, the amplifier's gain must compensate for the crystal's series resistance ($R_s$) and any losses in the external circuitry.

**Reference:**
*   *Electronic Devices and Circuit Theory* by Boylestad and Nashelsky has sections on crystal oscillators.
*   *Microelectronic Circuits* by Sedra and Smith discusses crystal oscillators and their applications.
*   *Integrated Electronics* by Millman and Halkias also covers the basics of crystal oscillators.

**Design Considerations:**
1.  **Crystal Selection:** Choose a quartz crystal with the desired frequency and mode of operation (series or parallel resonance). The crystal's Q-factor is crucial for stability.
2.  **Circuit Configuration:** Select an appropriate oscillator configuration (e.g., Pierce).
3.  **External Components:** Determine the values of biasing resistors, coupling capacitors, and any load capacitors (if used with the crystal) to ensure proper operation and frequency stability.

**Important Points to Remember:**
*   Quartz crystals are highly stable frequency-determining elements due to their high Q-factor.
*   They operate based on the piezoelectric effect.
*   Oscillation frequency is determined by the crystal's resonant frequencies ($f_s$ and $f_p$) and the surrounding circuitry.
*   Pierce oscillators are common and generally operate near the crystal's parallel resonant frequency.
*   Crystal oscillators are preferred for applications requiring high frequency accuracy and stability (e.g., clocks in microprocessors, radio transmitters).

---

### **5. Practice Questions and Answers**

**Question 1 (RC Phase Shift Oscillator):**
A three-stage RC phase shift oscillator uses identical RC sections with $R = 10 \text{ k}\Omega$ and $C = 10 \text{ nF}$. What is the approximate frequency of oscillation? What is the minimum voltage gain required from the amplifier stage?

**Answer:**
Frequency of Oscillation ($f_0$):
$f_0 = \frac{1}{2\pi RC\sqrt{6}} = \frac{1}{2\pi (10 \times 10^3)(10 \times 10^{-9})\sqrt{6}}$
$f_0 = \frac{1}{2\pi (10^{-4}) \times 2.45} = \frac{1}{1.54 \times 10^{-3}} \approx 649 \text{ Hz}$

Minimum Voltage Gain ($|A_v|$):
For three identical RC sections, $|A_v| \ge 29$.

**Question 2 (Colpitts Oscillator):**
A Colpitts oscillator uses an inductor $L = 20 \mu\text{H}$ and two capacitors $C_1 = 10 \text{ nF}$ and $C_2 = 5 \text{ nF}$. Calculate the frequency of oscillation and the minimum required amplifier voltage gain.

**Answer:**
Equivalent Capacitance ($C_{eq}$):
$C_{eq} = \frac{C_1 C_2}{C_1 + C_2} = \frac{(10 \text{ nF})(5 \text{ nF})}{10 \text{ nF} + 5 \text{ nF}} = \frac{50 \text{ nF}^2}{15 \text{ nF}} = \frac{10}{3} \text{ nF} \approx 3.33 \text{ nF}$

Frequency of Oscillation ($f_0$):
$f_0 = \frac{1}{2\pi \sqrt{LC_{eq}}} = \frac{1}{2\pi \sqrt{(20 \times 10^{-6})(3.33 \times 10^{-9})}}$
$f_0 = \frac{1}{2\pi \sqrt{66.6 \times 10^{-15}}} = \frac{1}{2\pi \times 8.16 \times 10^{-8}} = \frac{1}{5.13 \times 10^{-7}} \approx 1.95 \text{ MHz}$

Minimum Amplifier Voltage Gain ($|A_v|$):
$|A_v| \ge \frac{C_1 + C_2}{C_1} = \frac{10 \text{ nF} + 5 \text{ nF}}{10 \text{ nF}} = \frac{15}{10} = 1.5$

**Question 3 (Crystal Oscillator - Conceptual):**
Why are crystal oscillators generally preferred over RC or LC oscillators for applications requiring high frequency stability?

**Answer:**
Crystal oscillators are preferred for their high frequency stability because quartz crystals have a very high Quality Factor (Q-factor). The Q-factor represents the ratio of energy stored to energy dissipated per cycle. A higher Q-factor means the crystal resonates much more sharply at its natural frequency, making it less susceptible to variations in component values, temperature, or supply voltage, thus leading to more stable oscillations. RC and LC oscillators typically have much lower Q-factors, making their frequencies less precise and more prone to drift.

---

### **6. Summary and Key Takeaways**

*   **Oscillators** produce repetitive electronic signals and rely on **positive feedback** that meets the **Barkhausen criterion** ($|A\beta| \ge 1$ and $360^\circ$ phase shift).
*   **RC Phase Shift Oscillators:**
    *   Use an amplifier and an RC network to provide $180^\circ$ phase shift.
    *   Frequency determined by $R$ and $C$ values ($f_0 = \frac{1}{2\pi RC\sqrt{6}}$ for 3 stages).
    *   Requires amplifier gain $\ge 29$ (for 3 stages).
*   **Colpitts Oscillators:**
    *   Use an amplifier and an LC tank circuit with tapped capacitors for feedback.
    *   Frequency determined by $L$ and the series combination of $C_1, C_2$ ($f_0 = \frac{1}{2\pi \sqrt{L(C_1C_2/(C_1+C_2))}}$).
    *   Requires amplifier gain $\ge \frac{C_1 + C_2}{C_1}$.
*   **Crystal Oscillators:**
    *   Utilize the piezoelectric effect of quartz crystals for highly stable oscillations.
    *   Crystal acts as a high-Q mechanical resonator, equivalent to a high-Q electrical resonant circuit.
    *   Frequency determined by crystal's series ($f_s$) or parallel ($f_p$) resonant frequency.
    *   Offer superior frequency stability compared to RC and LC oscillators.

---

**Alignment with Course Outcomes:**

*   **CO4 (K4):** This entire module's content directly addresses designing and analyzing feedback amplifiers and oscillators. The working principles and design equations provided are essential for designing these circuits.
*   **CO2 (K3):** The analysis of the amplifier stage within each oscillator (e.g., determining the required gain for a common-emitter amplifier) utilizes small-signal analysis concepts.

---
