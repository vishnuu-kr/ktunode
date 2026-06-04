---
title: "LVDT"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 1: Industrial measurement systems – different types of industrial variables and measurement systems elements."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463669"
status: "completed"
scrapedAt: "2026-05-20T18:00:33.633Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS

## Module 1: Industrial Measurement Systems – Different Types of Industrial Variables and Measurement Systems Elements

### Topic: LVDT (Linear Variable Differential Transformer)

---

### Learning Outcomes Covered in this Topic:

*   **LO1:** Understand the working principle of LVDT.
*   **LO2:** Identify the constructional features of an LVDT.
*   **LO3:** Analyze the relationship between input and output of an LVDT.
*   **LO4:** Discuss the advantages and disadvantages of LVDT.
*   **LO5:** Identify applications of LVDT in industrial measurement systems.

---

### Course Outcomes Addressed:

*   **CO1: To get basic knowledge about industrial measurement system and different elements involved in it.** (Knowledge Level: K2) - This topic directly explains an important transducer used in industrial measurement systems.
*   **CO2: Acquire knowledge about sensors and transducers for different industrial variables.** (Knowledge Level: K4) - LVDT is a key transducer for linear displacement measurement, a critical industrial variable.

---

### 1. Introduction to LVDT

The **Linear Variable Differential Transformer (LVDT)** is a type of **electrical transducer** used for measuring **linear displacement**. It is a highly reliable and commonly used sensor in various industrial applications due to its robustness, accuracy, and ability to withstand harsh environments. LVDTs are **contactless transducers**, meaning the sensing element doesn't physically touch the object being measured, which reduces wear and tear and improves longevity.

**Key Concept:** LVDTs operate on the principle of **electromagnetic induction**, specifically using the mutual inductance between coils that varies with the position of a ferromagnetic core.

---

### 2. Construction of an LVDT

An LVDT typically consists of three main components:

*   **Primary Coil (Excitation Coil):** This is the input coil, wound around a non-magnetic cylindrical former. It is connected to an AC excitation voltage source (usually a sinusoidal waveform).
*   **Secondary Coils (Two):** These are identical coils wound on opposite sides of the primary coil and connected in series opposition. Their outputs are connected in such a way that if the core is centrally positioned, the induced voltages in both secondary coils will be equal in magnitude but 180 degrees out of phase.
*   **Ferromagnetic Core:** This is a movable core made of a highly permeable ferromagnetic material. It is typically rod-shaped and can move freely along the central axis of the coils. The movement of this core changes the magnetic coupling (mutual inductance) between the primary and secondary coils.

**(Refer to Fig. 2.1 from Krishnaswamy, K. "Industrial Instrumentation")** - A diagram showing the arrangement of the primary coil, secondary coils, and the movable core is crucial for understanding the construction.

---

### 3. Working Principle of LVDT

The operation of an LVDT is based on the principle of **variable mutual inductance**.

1.  **AC Excitation:** An AC voltage is applied to the primary coil, creating a time-varying magnetic flux.
2.  **Core Movement and Flux Linkage:** The ferromagnetic core acts as a path for this magnetic flux. As the core moves along the axis of the coils, it changes the distribution of magnetic flux linking the secondary coils.
3.  **Induced Voltages:** According to Faraday's Law of Electromagnetic Induction, the changing magnetic flux induces voltages in the secondary coils.
4.  **Differential Output:** The two secondary coils are connected in series opposition. This means their induced voltages are subtracted.

Let:
*   $V_p$ be the voltage applied to the primary coil.
*   $e_{s1}$ be the voltage induced in the first secondary coil.
*   $e_{s2}$ be the voltage induced in the second secondary coil.
*   $x$ be the displacement of the core from the null position (center).
*   $L_{12}$ and $L_{13}$ be the mutual inductances between the primary and secondary coils, respectively.

**When the core is at the null position (x = 0):**
The magnetic flux from the primary coil is equally distributed between the two secondary coils. Therefore, the induced voltages in both secondary coils are equal in magnitude but 180° out of phase.
$e_{s1} = -e_{s2}$ (magnitude equal, phase difference 180°)
The differential output voltage, $V_{out} = e_{s1} + e_{s2} = 0$.

**When the core is displaced from the null position (x ≠ 0):**
*   If the core moves in one direction (e.g., positive x), the mutual inductance between the primary and the first secondary coil increases ($L_{12}$ increases), and the mutual inductance between the primary and the second secondary coil decreases ($L_{13}$ decreases). This results in a larger induced voltage in $e_{s1}$ and a smaller induced voltage in $e_{s2}$.
*   If the core moves in the opposite direction (e.g., negative x), the mutual inductance between the primary and the first secondary coil decreases ($L_{12}$ decreases), and the mutual inductance between the primary and the second secondary coil increases ($L_{13}$ increases). This results in a smaller induced voltage in $e_{s1}$ and a larger induced voltage in $e_{s2}$.

The output voltage ($V_{out}$) is the difference between the voltages induced in the two secondary coils. This output voltage is proportional to the displacement of the core.

$V_{out} = e_{s1} - e_{s2}$ (assuming appropriate connections)

The magnitude of the output voltage is directly proportional to the displacement of the core from the null position. The phase of the output voltage relative to the primary excitation voltage indicates the direction of the displacement.

**(Refer to Chapter 3: Displacement Transducers from Doebelin, E. O. "Measurement Systems Applications and Design")** - This chapter provides a detailed mathematical derivation of the output voltage as a function of displacement and discusses the phase relationship.

---

### 4. LVDT Transfer Function and Characteristics

The output voltage of an LVDT is generally a linear function of the core's displacement over a specific range.

*   **Transfer Function:** $V_{out} = K \cdot x$
    Where:
    *   $V_{out}$ is the output voltage.
    *   $x$ is the linear displacement of the core.
    *   $K$ is the **sensitivity** of the LVDT (output voltage per unit displacement), usually expressed in V/mm or mV/inch.

*   **Sensitivity (K):** This is the slope of the output voltage vs. displacement graph. A higher sensitivity means a larger output voltage change for a given displacement.

*   **Null Position:** The position of the core where the output voltage is zero.

*   **Linear Range:** The range of displacement over which the output voltage is linearly proportional to the displacement. Beyond this range, the linearity degrades.

*   **Phase Angle:** The phase difference between the output voltage and the input excitation voltage changes by 180° when the core crosses the null position. This is crucial for determining the direction of displacement.

---

### 5. Signal Conditioning for LVDT

The raw output from an LVDT is an AC voltage that needs to be conditioned for processing by microcontrollers or other digital systems. Typical signal conditioning includes:

*   **Demodulation:** The AC output voltage is converted into a DC voltage proportional to its amplitude. This is often done using a **phase-sensitive demodulator (PSD)** or a synchronous detector. The PSD uses the excitation signal as a reference to ensure the output DC voltage corresponds to the magnitude of the AC signal and carries information about its phase.
*   **Amplification:** The demodulated DC signal might be weak, so an amplifier (e.g., an operational amplifier circuit) is used to boost its level to a usable range.
*   **Filtering:** Low-pass filters are often used to remove any remaining AC components or noise from the demodulated signal.
*   **Zero Adjustment:** A circuit may be included to offset the output voltage so that zero displacement corresponds to a zero or specific reference DC voltage.

**(Refer to Chapter 5: Signal Conditioning Circuits from Krishnaswamy, K. "Industrial Instrumentation")** - This chapter would detail the circuits for demodulation, amplification, and filtering commonly used with LVDTs.

---

### 6. Advantages of LVDT

*   **High Sensitivity:** LVDTs offer good sensitivity, producing a significant output voltage change for small displacements.
*   **Infinite Resolution:** Theoretically, the output voltage can be measured to any desired precision, meaning the resolution is infinite.
*   **Linearity:** LVDTs provide a highly linear output over a considerable range of displacement.
*   **Durability and Reliability:** They are robust, have no moving electrical contacts, and can withstand vibrations and shocks.
*   **Contactless Operation:** Reduces wear and tear on both the sensor and the object being measured.
*   **Good Dynamic Response:** Can measure fast-changing displacements.
*   **Insensitive to Environmental Conditions:** Generally less affected by temperature changes, humidity, and dirt compared to some other transducers.
*   **Phase Information:** The output signal's phase indicates the direction of displacement.

---

### 7. Disadvantages of LVDT

*   **Requires AC Excitation:** Needs an AC power source and associated circuitry, which can be more complex than DC systems.
*   **Sensitivity to Vibrations:** External vibrations can induce small AC voltages in the secondary coils, mimicking displacement signals if not properly filtered.
*   **Harmonic Content:** The output signal can contain harmonics that may require filtering.
*   **Core Saturation:** If the core is made of a material that saturates easily, or if the excitation is too strong, linearity can be lost.
*   **Non-linearity at Extremes:** Linearity is lost at the ends of its operational range.
*   **Cost:** Can be more expensive than simpler displacement sensors for some applications.

---

### 8. Applications of LVDT

LVDTs are used in a wide variety of industrial applications for measuring linear displacement, position, and velocity.

*   **Position Measurement:**
    *   Actuator position feedback in control systems.
    *   Measuring the position of machine tools (e.g., CNC machines).
    *   Checking dimensions of manufactured parts.
    *   Control of hydraulic and pneumatic actuators.
*   **Gauging:**
    *   Automated inspection of components on assembly lines.
    *   Thickness measurement.
*   **Force and Pressure Measurement:** By using a mechanical linkage, LVDTs can convert force or pressure into a linear displacement, which is then measured by the LVDT.
*   **Vibration Measurement:** With appropriate accessories, LVDTs can measure the amplitude of vibrations.
*   **Control Systems:** As a feedback element in closed-loop control systems to monitor the position of a controlled variable.

**(Refer to Chapters on Applications in Krishnaswamy, K. "Industrial Instrumentation" and Patranabis, D. "Principles of Industrial Instrumentation")** - These books will have extensive sections detailing specific industrial use cases for LVDTs.

---

### 9. Practice Questions and Answers

**Question 1:** What is the fundamental principle of operation of an LVDT?
**Answer:** LVDTs operate on the principle of **variable mutual inductance** between coils due to the movement of a ferromagnetic core.

**Question 2:** An LVDT has a sensitivity of 50 mV/mm. If the core is displaced by 10 mm from the null position, what will be the magnitude of the output voltage?
**Answer:**
Sensitivity ($K$) = 50 mV/mm
Displacement ($x$) = 10 mm
Output Voltage ($V_{out}$) = $K \times x$
$V_{out}$ = 50 mV/mm $\times$ 10 mm = 500 mV = 0.5 V

**Question 3:** What are the three main components of an LVDT?
**Answer:**
1.  Primary Coil (Excitation Coil)
2.  Two Secondary Coils
3.  Ferromagnetic Core

**Question 4:** How does the phase of the LVDT output voltage indicate the direction of displacement?
**Answer:** The phase of the output voltage relative to the input excitation voltage changes by 180° when the core moves from one side of the null position to the other. This phase shift indicates the direction of displacement.

**Question 5:** List two advantages and two disadvantages of using an LVDT.
**Answer:**
**Advantages:**
*   High sensitivity
*   Linearity
*   Contactless operation
*   Durability

**Disadvantages:**
*   Requires AC excitation
*   Sensitivity to vibrations
*   Cost

---

### 10. Important Points to Remember

*   LVDTs measure **linear displacement**.
*   They work on the principle of **variable mutual inductance**.
*   The output is an **AC voltage proportional to displacement magnitude**, and its **phase indicates direction**.
*   **Sensitivity (K)** is the key parameter relating displacement to output voltage.
*   Signal conditioning (demodulation, amplification, filtering) is essential for using LVDT output in digital systems.
*   They are known for their **linearity, resolution, and reliability**.
*   The primary limitation is the need for **AC excitation**.

---

This concludes the study notes for the LVDT topic. Ensure to refer to the recommended textbooks for diagrams, detailed mathematical derivations, and further examples to deepen your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
