---
title: "Inductive transducers- types and basic principles- LVDT- synchro"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 1: Functional elements of electronic instrumentation system – Calibration methods: Static, Dynamic, Field, Traceable, Master."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e71"
status: "completed"
scrapedAt: "2026-05-23T16:16:08.615Z"
---
This is a comprehensive set of study notes for the topic "Inductive Transducers - Types and Basic Principles - LVDT - Synchro" within Module 1 of Electronic Instrumentation. It incorporates content from the specified textbooks and aligns with the learning outcomes and course outcomes.

---

# Electronic Instrumentation: Module 1 - Functional Elements & Calibration Methods

## Topic: Inductive Transducers - Types and Basic Principles - LVDT - Synchro

---

### **1. Introduction to Transducers and Inductive Transducers**

*   **Transducer:** A device that converts energy from one form to another. In electronic instrumentation, it typically converts a physical phenomenon (like displacement, temperature, pressure) into an electrical signal.
    *   *Referenced Textbooks:* Sawhney (Ch. 1), Gupta (Ch. 1), Kalsi (Ch. 2)
*   **Inductive Transducer:** A transducer that utilizes the principle of electromagnetic induction to convert a physical quantity into a change in inductance or mutual inductance. These are often passive transducers, meaning they require an external excitation voltage or current.
    *   *Key Concept:* Change in magnetic flux linkage leading to a change in output electrical signal.
    *   *Advantage:* Robust, good linearity over a certain range, less sensitive to environmental factors like dust and moisture compared to some other types.
    *   *Disadvantage:* Requires AC excitation, potential for magnetic interference.

---

### **2. Basic Principles of Inductive Transducers**

The operation of inductive transducers is based on Faraday's Law of Electromagnetic Induction and the concept of inductance:

*   **Faraday's Law of Electromagnetic Induction:** An electromotive force (EMF) is induced in a conductor when it is exposed to a changing magnetic field. Mathematically, $EMF = -N \frac{d\Phi}{dt}$, where $N$ is the number of turns and $\frac{d\Phi}{dt}$ is the rate of change of magnetic flux.
*   **Inductance (L):** The property of an electrical conductor by which a change in the current flowing through it induces an electromotive force in both the conductor itself (self-inductance) and in any nearby conductors (mutual inductance). It is measured in Henries (H).
    *   $L = \frac{N\Phi}{I}$, where $N$ is the number of turns, $\Phi$ is the magnetic flux, and $I$ is the current.
*   **Mutual Inductance (M):** The inductance between two circuits. A change in current in one circuit induces an EMF in the other.

Inductive transducers typically work by varying one or more of these parameters:
*   **Change in Self-Inductance:** The position of a ferromagnetic core changes the reluctance of the magnetic path, thus changing the self-inductance of a coil.
*   **Change in Mutual Inductance:** The relative position of two coils (primary and secondary) or the position of a core within coupled coils changes the mutual inductance between them.

---

### **3. Types of Inductive Transducers**

Inductive transducers can be broadly classified into two categories based on their operating principle:

#### **3.1. Variable Reluctance Transducers**

*   **Princ:** These transducers operate by changing the reluctance of the magnetic path in a coil. Reluctance ($\mathcal{R}$) is the opposition to magnetic flux, analogous to resistance in an electrical circuit.
    *   $\mathcal{R} = \frac{l}{\mu A}$, where $l$ is the length of the magnetic path, $\mu$ is the permeability of the material, and $A$ is the cross-sectional area.
*   **Construction:** Typically consist of a fixed coil and a movable ferromagnetic core. The position of the core affects the air gap or the path length of the magnetic flux through the coil.
*   **Operation:** When an AC voltage is applied to the coil, it produces a changing magnetic field. As the core moves, the reluctance of the magnetic circuit changes, leading to a change in the coil's inductance and thus the output current.
*   **Applications:** Primarily used for detecting the presence or movement of ferrous objects (e.g., in proximity sensors, speed sensors for rotating machinery).
*   *Referenced Textbooks:* Sawhney (Ch. 14), Gupta (Ch. 14), Kalsi (Ch. 7)

#### **3.2. Electromagnetic Induction Transducers**

These transducers utilize the principle of mutual inductance between coils.

##### **3.2.1. Linear Variable Differential Transformer (LVDT)**

*   **Princ:** An AC voltage applied to a primary coil induces voltages in two secondary coils. The relative magnitude of these induced voltages depends on the position of a movable ferromagnetic core.
*   **Construction:**
    *   **Primary Coil ($P$):** Connected to an AC excitation source.
    *   **Secondary Coils ($S_1$, $S_2$):** Wound on opposite sides of the core, connected in series opposition.
    *   **Movable Core:** A ferromagnetic material that can move linearly along the axis of the coils.
*   **Operation:**
    1.  **Excitation:** An AC voltage (e.g., 5-10 kHz) is applied to the primary coil.
    2.  **Core Position:**
        *   **At Null Position (Center):** The core is equidistant from both secondary coils. The magnetic flux from the primary links equally with both secondaries. Due to series opposition, the induced voltages in $S_1$ and $S_2$ are equal in magnitude but 180° out of phase. The net output voltage ($V_{out} = V_{S1} - V_{S2}$) is zero.
        *   **Above Null Position:** The core moves towards $S_1$. More flux links with $S_1$, inducing a larger voltage. Less flux links with $S_2$, inducing a smaller voltage. The net output voltage ($V_{out}$) will be non-zero and its phase depends on the direction of displacement.
        *   **Below Null Position:** The core moves towards $S_2$. More flux links with $S_2$, inducing a larger voltage. Less flux links with $S_1$, inducing a smaller voltage. The net output voltage ($V_{out}$) will be non-zero.
    3.  **Output Signal:** The output voltage is proportional to the displacement of the core from the null position. The phase of the output voltage relative to the primary excitation indicates the direction of displacement.
*   **Advantages:**
    *   High linearity over a wide range.
    *   Infinite resolution.
    *   Robust construction.
    *   High accuracy.
    *   No friction or wear since the core is not in contact with the coils.
    *   Output is AC, easily processed.
*   **Disadvantages:**
    *   Requires AC excitation.
    *   Output is AC, needs demodulation and filtering for DC output.
    *   Susceptible to vibrations and stray magnetic fields.
    *   Relatively low output voltage.
*   **Applications:**
    *   Position measurement (linear displacement).
    *   Used in automation, robotics, testing machines, aircraft systems.
    *   *Referenced Textbooks:* Sawhney (Ch. 14), Gupta (Ch. 14), Kalsi (Ch. 7), Doebelin (Ch. 3), Cooper (Ch. 5)
*   **Mathematical Representation (Simplified):**
    *   Let the displacement from null be $x$.
    *   $V_{S1} = K_1 x$ (for displacement in one direction)
    *   $V_{S2} = K_1 x$ (for displacement in the opposite direction, phase difference)
    *   The voltage in secondary coils can be expressed as:
        *   $V_{S1} = V_{exc} \cdot k_p \cdot k_s \cdot l \cdot \cos(\omega t + \phi_1)$
        *   $V_{S2} = V_{exc} \cdot k_p \cdot k_s \cdot l \cdot \cos(\omega t + \phi_2)$
        *   Where the phase difference between $S_1$ and $S_2$ is 180° when the core is at the center.
    *   The effective output voltage is typically $V_{out} = V_{S1} - V_{S2}$. When the core moves by distance $x$, the mutual inductances change, resulting in a change in output voltage proportional to $x$.
    *   For displacement $x$, the output voltage $V_{out} \approx C \cdot x$, where $C$ is a constant related to the transformer parameters and excitation voltage.

##### **3.2.2. Synchro (or Selsyn)**

*   **Princ:** Synchros are rotary electromechanical transducers used for transmitting angular position information. They operate on the principle of induced voltages in a rotating rotor within a stationary stator, similar to a transformer but with a rotating magnetic field.
*   **Types:**
    *   **Synchro Transmitter (TX):** Converts a shaft angle into a set of three AC voltages.
    *   **Synchro Control Transformer (CX):** Receives the three AC voltages from a TX and converts them into a single AC voltage proportional to the angular error between the rotor and stator fields.
    *   **Synchro Control Transformer Resolver (CT/Resolver):** Similar to CX but provides sine and cosine outputs proportional to the input angle.
*   **Construction:**
    *   **Stator:** Has three windings physically displaced by 120 electrical degrees. The windings are connected to a three-phase AC excitation.
    *   **Rotor:** Typically a salient pole or drum rotor with a single phase AC excitation.
*   **Operation (Synchro Transmitter - TX):**
    1.  **Rotor Excitation:** A constant AC voltage is applied to the rotor winding. This creates a rotating magnetic field.
    2.  **Stator Voltages:** The rotating magnetic field induces voltages in the three stator windings. The magnitude and phase of these voltages depend on the angular position of the rotor.
        *   If the rotor is at angle $\theta$, the voltages induced in the stator windings ($S_1, S_2, S_3$) are approximately:
            *   $V_{S1} = K \cos(\theta) \cdot V_{rotor}$
            *   $V_{S2} = K \cos(\theta - 120^\circ) \cdot V_{rotor}$
            *   $V_{S3} = K \cos(\theta - 240^\circ) \cdot V_{rotor}$
        *   Where $K$ is a constant and $V_{rotor}$ is the rotor excitation voltage.
    3.  **Transmission:** These three voltages represent the angular position of the shaft and are transmitted to a receiver synchro (e.g., a CX).
*   **Operation (Synchro Control Transformer - CX):**
    1.  **Input:** Receives the three AC voltages from the TX on its stator windings.
    2.  **Rotor Excitation:** The rotor of the CX is excited with the same AC excitation voltage as the TX rotor, but often at a different phase reference.
    3.  **Output Voltage:** The voltage induced in the CX rotor is proportional to the cosine of the angular difference between the rotor's magnetic axis and the resultant stator magnetic field.
        *   If the TX rotor is at angle $\theta_{TX}$ and the CX rotor is at angle $\theta_{CX}$, the voltage induced in the CX rotor is:
            *   $V_{rotor(CX)} = K' \cos(\theta_{TX} - \theta_{CX}) \cdot V_{rotor(CX)}$
    4.  **Error Signal:** When used in a control system, the CX rotor is mechanically linked to a desired position indicator. The output voltage represents the angular error.
*   **Applications:**
    *   Angular position sensing and transmission in aircraft control systems.
    *   Remote indication of shaft angles.
    *   Robotics, radar systems.
    *   *Referenced Textbooks:* Sawhney (Ch. 14), Gupta (Ch. 14), Kalsi (Ch. 7), Doebelin (Ch. 3), Cooper (Ch. 5)

---

### **4. Inductive Transducer Applications and Considerations**

*   **Proximity Sensing:** Variable reluctance sensors can detect the presence of metallic objects without physical contact.
*   **Speed Measurement:** Teeth on a rotating gear wheel passing by a variable reluctance sensor induce voltage pulses, the frequency of which is proportional to the speed.
*   **Position Measurement:** LVDTs are widely used for precise linear displacement measurement in various industries.
*   **Angular Measurement:** Synchros are essential for transmitting angular data in applications requiring remote position indication or control.

**Important Considerations:**

*   **Excitation Frequency:** The frequency of the AC excitation source affects the output voltage and the sensitivity of inductive transducers. Higher frequencies generally provide higher output voltages but may also increase losses and susceptibility to capacitance effects.
*   **Magnetic Shielding:** To prevent interference from external magnetic fields, inductive transducers are often enclosed in magnetic shields.
*   **Environmental Factors:** Temperature variations can affect the permeability of magnetic materials and the resistance of coils, potentially influencing the transducer's performance.
*   **Harmonics:** The output of inductive transducers can contain harmonic content, which may require filtering.
*   **Phase Sensitivity:** For LVDTs and Synchros, the phase of the output signal is crucial for determining the direction of displacement or angular error.

---

### **5. Connection to Course Outcomes**

*   **CO1: Identify the sensors/transducers suitable for industrial applications.**
    *   This topic directly addresses identifying inductive transducers (LVDT, Synchro, Variable Reluctance) and understanding their suitability for various industrial applications like position sensing, speed measurement, and angular data transmission. (Knowledge Level: K3)
*   **CO2: Design the signal conditioning circuits for industrial instrumentation and automation.**
    *   Understanding the AC output of LVDTs and Synchros is fundamental to designing signal conditioning circuits for these transducers, which typically involve demodulation, filtering, and amplification to obtain a usable DC or digital output. (Knowledge Level: K3)
*   **CO3: Understand the concepts of data transmission methods applicable to electronic instrumentation systems.**
    *   Synchros are specifically designed for transmitting angular position data over distances using AC signals, illustrating a key data transmission method in instrumentation. (Knowledge Level: K2)
*   **CO5: Analyze the performance of measurement systems using statistical methods.**
    *   While not directly covered in this specific topic, the output characteristics (linearity, resolution, sensitivity) of LVDTs and Synchros are parameters that would be analyzed using statistical methods to evaluate system performance. (Knowledge Level: K4 - indirectly relevant)

---

### **6. Practice Questions and Answers**

**Question 1:** Explain the basic working principle of an LVDT. What are its main advantages and disadvantages?
**Answer:** An LVDT works on the principle of mutual inductance between a primary coil and two secondary coils. A movable ferromagnetic core couples the magnetic flux from the primary to the secondaries. An AC excitation to the primary induces voltages in the secondaries. The difference between the voltages in the two secondaries, connected in series opposition, is proportional to the linear displacement of the core.
*   **Advantages:** High linearity, infinite resolution, robustness, no friction.
*   **Disadvantages:** Requires AC excitation, output is AC and needs demodulation, susceptible to stray magnetic fields.

**Question 2:** Describe the construction of a Synchro Transmitter (TX) and explain how it converts shaft angle into electrical signals.
**Answer:** A Synchro Transmitter (TX) consists of a stator with three windings displaced by 120 electrical degrees and a rotor excited by a single-phase AC voltage. The rotating magnetic field created by the rotor induces voltages in the stator windings. These induced voltages vary sinusoidally with the rotor's angular position ($\theta$) as $V_{S1} = K \cos(\theta)$, $V_{S2} = K \cos(\theta - 120^\circ)$, and $V_{S3} = K \cos(\theta - 240^\circ)$, effectively transmitting the shaft angle.

**Question 3:** What is the role of reluctance in variable reluctance transducers?
**Answer:** In variable reluctance transducers, the output signal is generated by changes in the inductance of a coil. Reluctance is the opposition to magnetic flux. By moving a ferromagnetic core, the air gap or the magnetic path length within the coil is altered, changing the reluctance of the magnetic circuit. This change in reluctance directly affects the coil's inductance, leading to a change in the output signal when AC excitation is applied.

**Question 4:** An LVDT is used to measure displacement. If the excitation voltage is 5V RMS at 5kHz, and the LVDT has a sensitivity of 0.02 V/mm, what is the output voltage for a displacement of 10 mm from the null position?
**Answer:**
Given:
Excitation Voltage = 5 V RMS
Sensitivity = 0.02 V/mm
Displacement = 10 mm

Output Voltage ($V_{out}$) = Sensitivity × Displacement
$V_{out} = 0.02 \text{ V/mm} \times 10 \text{ mm}$
$V_{out} = 0.2 \text{ V RMS}$

**Question 5:** In a synchro system, what happens if the rotor of the Control Transformer (CX) is not aligned with the magnetic field generated by the Transmitter (TX) stator?
**Answer:** If the rotor of the Control Transformer (CX) is not aligned with the magnetic field generated by the Transmitter (TX) stator, a net AC voltage will be induced in the CX rotor winding. This induced voltage is proportional to the cosine of the angular difference between the TX rotor's field and the CX rotor's axis. This output voltage represents the angular error and is used in feedback control systems to drive the CX rotor towards alignment with the TX field.

---

### **7. Important Points to Remember**

*   Inductive transducers operate by changing inductance or mutual inductance due to physical motion.
*   LVDTs are ideal for precise linear displacement measurement due to their linearity and infinite resolution.
*   Synchros are specifically for angular position sensing and transmission.
*   Both LVDTs and Synchros require AC excitation and often produce AC outputs that need further processing.
*   Variable reluctance sensors are simpler and often used for proximity and speed detection of ferrous objects.
*   The core material and design are critical for the performance of inductive transducers.

---

This concludes the study notes for Inductive Transducers, covering LVDTs and Synchros, in the context of Module 1.
