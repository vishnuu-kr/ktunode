---
title: "LVDT"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464305"
status: "completed"
scrapedAt: "2026-05-20T18:11:29.930Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 2: Displacement Measurement: Transducers for Displacement Measurement – Potentiometers

### Topic: LVDT (Linear Variable Differential Transformer)

---

### 1. Introduction to LVDT

**Learning Outcomes Covered:**
*   **CO1 (K2):** Identify and classify different measuring instruments. LVDT is a key transducer for displacement measurement.
*   **CO2 (K3):** Measure and analyze displacement using appropriate techniques and devices. LVDT is a primary device for this.
*   **CO5 (K3):** Select measurement systems for engineering applications. Understanding LVDT aids in selecting the right transducer.

**Key Concepts:**
*   **Transducer:** A device that converts one form of energy into another, often from a physical phenomenon into an electrical signal.
*   **Displacement Transducer:** A transducer that measures the linear or angular displacement of an object.
*   **Electromagnetic Transducer:** A transducer that utilizes electromagnetic principles for its operation. LVDT falls under this category.

**Definition:**
A **Linear Variable Differential Transformer (LVDT)** is an electromechanical transducer that converts linear displacement into a proportional alternating current (AC) voltage output. It is a highly reliable, non-contacting transducer widely used for precise linear position sensing.

**Textbook References:**
*   **Dobelin:** Discusses LVDTs as a prominent example of inductive transducers for displacement measurement.
*   **Sawhney & Sawhney:** Provides a detailed explanation of LVDT construction and working principles.
*   **Nakra & Chaudhry:** Covers LVDT in the context of various displacement measurement techniques and their applications.

---

### 2. Construction and Working Principle of LVDT

**Key Concepts:**
*   **Primary Winding:** The input coil of the transformer, connected to an AC excitation source.
*   **Secondary Windings (Two):** Identical windings placed symmetrically on either side of the primary winding.
*   **Armature (Core):** A movable ferromagnetic core, usually made of a nickel-iron alloy, which moves linearly within the coils. It is mechanically coupled to the object whose displacement is to be measured.
*   **AC Excitation:** The primary winding is supplied with a sinusoidal AC voltage, which induces voltages in the secondary windings.
*   **Differential Output:** The output voltage from the LVDT is the difference between the voltages induced in the two secondary windings.

**Working Principle:**

1.  **AC Excitation:** An AC voltage is applied to the primary winding.
2.  **Magnetic Flux Linkage:** The primary winding generates a magnetic field. The position of the ferromagnetic core within the transformer assembly determines how this magnetic field links with the two secondary windings.
3.  **Induced Voltages:** The magnetic flux induces voltages in the secondary windings (V_s1 and V_s2) according to Faraday's law of induction.
4.  **Differential Measurement:** The output voltage of the LVDT is the **difference** between the voltages induced in the two secondary windings:
    $$V_{out} = V_{s1} - V_{s2}$$

**Operation Modes:**

*   **Zero Displacement (Armature at Center):** When the armature is at the center position (equidistant from both secondary windings), the magnetic flux linkage to both secondary windings is equal. The induced voltages $V_{s1}$ and $V_{s2}$ are equal in magnitude but 180 degrees out of phase. Therefore, their difference is zero: $V_{out} = 0$.

*   **Positive Displacement (Armature moves towards Secondary 1):** If the armature moves towards secondary winding 1, the flux linkage to secondary 1 increases, and the flux linkage to secondary 2 decreases. This results in $V_{s1}$ having a larger amplitude than $V_{s2}$. The output voltage $V_{out} = V_{s1} - V_{s2}$ will be a non-zero AC voltage. The phase of the output voltage relative to the primary excitation indicates the direction of displacement.

*   **Negative Displacement (Armature moves towards Secondary 2):** If the armature moves towards secondary winding 2, the flux linkage to secondary 2 increases, and the flux linkage to secondary 1 decreases. This results in $V_{s2}$ having a larger amplitude than $V_{s1}$. The output voltage $V_{out} = V_{s1} - V_{s2}$ will be a non-zero AC voltage with a phase opposite to the positive displacement case.

**Important Point:**
The magnitude of the output voltage is directly proportional to the displacement of the armature from the central position. The phase of the output voltage indicates the direction of displacement.

**Example:**
Imagine the LVDT core is moved 1 mm to the right. This might cause $V_{s1}$ to increase by 0.5V and $V_{s2}$ to decrease by 0.5V. The output voltage would then be $0.5V - (-0.5V) = 1V$ (assuming the initial phases and amplitudes were set up to produce such a difference). If the core moves 1 mm to the left, $V_{s1}$ might decrease by 0.5V and $V_{s2}$ increase by 0.5V, leading to an output of $-0.5V - (0.5V) = -1V$.

**Textbook References:**
*   **Sawhney & Sawhney:** Provides detailed diagrams of LVDT construction and explains the phasor relationships for understanding the phase and magnitude of the output.
*   **Nakra & Chaudhry:** Elaborates on the electrical circuit for exciting the primary and processing the output from the secondary windings.

---

### 3. LVDT Output Characteristics and Signal Conditioning

**Learning Outcomes Covered:**
*   **CO1 (K2):** Classify instruments based on their characteristics.
*   **CO2 (K3):** Analyze displacement measurement. LVDT output characteristics are crucial for this.
*   **CO5 (K3):** Select measurement systems. Understanding LVDT characteristics aids in selection.

**Key Concepts:**
*   **Linearity:** The degree to which the output voltage is directly proportional to the displacement over the operating range.
*   **Sensitivity:** The ratio of the change in output voltage to the change in displacement (e.g., Volts/mm).
*   **Range:** The maximum displacement that the LVDT can accurately measure.
*   **Resolution:** The smallest change in displacement that the LVDT can detect.
*   **Hysteresis:** The difference in output voltage for the same displacement when approached from different directions.
*   **Zero Shift:** The output voltage when the displacement is zero.
*   **Phase Sensitivity:** The dependence of the output phase on the displacement.

**Output Characteristics:**

*   **Transfer Function:** Ideally, the relationship between displacement and output voltage is linear:
    $$V_{out} = K \times x$$
    where:
    *   $V_{out}$ is the output voltage.
    *   $K$ is the LVDT's sensitivity.
    *   $x$ is the displacement from the null position.

*   **Linear Range:** LVDTs are known for their excellent linearity over a specific range of displacement. Beyond this range, the output may become non-linear.

*   **Sensitivity:** The sensitivity ($K$) is typically constant within the linear range. A higher sensitivity means a larger voltage change for a given displacement, making it easier to detect small displacements.

*   **Phase of Output:** The phase of the output AC voltage (relative to the input excitation) indicates the direction of displacement. Typically, if the output voltage leads the input by 90 degrees, it signifies displacement in one direction, and if it lags by 90 degrees, it signifies displacement in the opposite direction.

**Signal Conditioning:**

The raw AC output from an LVDT often requires processing to provide a usable DC signal or a digital output. Common signal conditioning techniques include:

1.  **Demodulation:** The AC output voltage needs to be converted into a DC voltage proportional to the displacement. This is typically done using a **demodulator** (e.g., synchronous demodulator, phase-sensitive detector, or a simple rectifier circuit).
2.  **Amplification:** The demodulated DC signal might be too small and requires amplification.
3.  **Filtering:** To remove noise and unwanted frequencies.
4.  **Averaging:** To improve the signal-to-noise ratio.

**Example of Signal Conditioning:**
A common setup uses a Phase-Sensitive Demodulator (PSD). The AC output of the LVDT is fed into the PSD, along with a reference AC signal that is synchronized with the primary excitation. The PSD then compares the phase of the LVDT output with the reference signal. If the LVDT output leads the reference, a positive DC voltage is produced. If it lags, a negative DC voltage is produced. If they are in phase (at the null position), the output is zero. This conditioned DC voltage is then amplified and filtered for display or further processing.

**Important Points:**
*   The linearity of an LVDT is generally better than that of a potentiometer.
*   LVDTs have infinite resolution in theory, but practical resolution is limited by noise and the signal conditioning electronics.
*   LVDTs are contactless, leading to less wear and tear compared to potentiometers.

**Textbook References:**
*   **Dobelin:** Discusses the concept of transfer functions and the factors affecting linearity in transducers.
*   **Nakra & Chaudhry:** Provides detailed explanations of demodulation techniques and signal processing circuits for LVDTs.

---

### 4. Advantages and Disadvantages of LVDT

**Learning Outcomes Covered:**
*   **CO1 (K2):** Classify instruments and understand their suitability.
*   **CO2 (K3):** Analyze displacement measurement techniques.
*   **CO5 (K3):** Select measurement systems.

**Advantages:**

*   **High Linearity:** Excellent linear output over a wide range of displacement.
*   **Infinite Resolution:** Theoretically infinite resolution as it's an inductive device; practically limited by noise.
*   **Contactless Operation:** The core does not touch the windings, leading to no wear and high reliability.
*   **Robust Construction:** Can withstand harsh environments (vibration, shock).
*   **High Sensitivity:** Can achieve high voltage outputs per unit displacement.
*   **AC Operation:** Immune to DC magnetic fields and electrical noise.
*   **Simple Construction:** Relatively straightforward mechanical and electrical design.
*   **Low Power Consumption:** Generally consumes low power.

**Disadvantages:**

*   **Requires AC Excitation:** Needs a stable AC source for operation, which can be complex.
*   **Requires Demodulation:** The AC output needs to be converted to a usable DC or digital signal, requiring additional signal conditioning circuitry.
*   **Susceptible to Vibrations:** High frequency vibrations can induce spurious signals.
*   **Limited Frequency Response:** The output is typically an AC signal, and its bandwidth is limited by the mechanical design and winding inductance.
*   **Phase Sensitivity:** Requires careful phase detection for accurate direction sensing.
*   **Size and Weight:** Can be larger and heavier than some other displacement transducers.
*   **Sensitivity to Temperature:** Core and winding properties can change with temperature, affecting accuracy.

**Important Point:**
The choice between LVDT and other transducers like potentiometers often depends on the specific application requirements for accuracy, environmental conditions, and complexity of the required electronics.

**Textbook References:**
*   **Sawhney & Sawhney:** Summarizes the pros and cons of LVDTs in comparison to other displacement transducers.
*   **Raghavendra:** Highlights the practical considerations and trade-offs when selecting LVDTs for metrology applications.

---

### 5. Applications of LVDT

**Learning Outcomes Covered:**
*   **CO1 (K2):** Identify measuring instruments for various applications.
*   **CO2 (K3):** Measure and analyze displacement in engineering processes.
*   **CO5 (K3):** Select measurement systems for engineering applications.

**Key Concepts:**
*   **Machine Tool Control:** Precise positioning of cutting tools.
*   **Industrial Automation:** Feedback for hydraulic and pneumatic actuators.
*   **Aerospace:** Flight control systems, landing gear position.
*   **Automotive:** Suspension systems, throttle position.
*   **Metrology:** Measuring dimensions, calibration of other instruments.
*   **Vibration Measurement:** Detecting amplitude of vibrations.

**Examples of Applications:**

*   **Machine Tools:** In CNC machines, LVDTs are used to provide feedback on the position of the tool heads, ensuring accurate machining. For example, an LVDT can measure the extension of a hydraulic cylinder controlling the movement of a milling machine's Z-axis.
*   **Hydraulic Actuators:** LVDTs are commonly integrated into hydraulic cylinders to provide real-time position feedback to a control system, allowing for precise control of stroke and velocity.
*   **Aerospace:** In aircraft, LVDTs can monitor the position of control surfaces like ailerons or flaps, or measure the extension of landing gear.
*   **Automotive Suspension:** Measuring the travel of a vehicle's suspension system to monitor ride height and stiffness.
*   **Strain Measurement:** While not directly measuring strain, LVDTs can be used to measure the deflection of a structure under load, which can then be related to strain.
*   **Calibration:** Used as a standard for calibrating other displacement sensors.
*   **Robotics:** Providing position feedback for robotic arms.

**Textbook References:**
*   **Sawhney & Sawhney:** Provides specific case studies and examples of LVDTs in industrial settings.
*   **Singh (Industrial Instrumentation):** Details the use of LVDTs in various industrial control loops.
*   **Kumar (Mechanical Measurement and Control):** Discusses LVDTs in the context of closed-loop control systems for mechanical actuators.

---

### 6. LVDT vs. Potentiometer

**Learning Outcomes Covered:**
*   **CO1 (K2):** Compare and contrast different measuring instruments.
*   **CO2 (K3):** Analyze displacement measurement techniques.
*   **CO5 (K3):** Select measurement systems.

**Comparison:**

| Feature             | LVDT                                          | Potentiometer                                     |
| :------------------ | :-------------------------------------------- | :------------------------------------------------ |
| **Principle**       | Electromagnetic (Inductive)                   | Resistive                                         |
| **Output**          | AC voltage (proportional to displacement)     | DC voltage (proportional to displacement)         |
| **Contact**         | Non-contact (core moves within coils)         | Contact (wiper moves along resistance element)    |
| **Resolution**      | Infinite (theoretically)                      | Limited by wiper contact and element resolution   |
| **Linearity**       | Excellent (over linear range)                 | Good, but can be limited by wiper contact        |
| **Wear**            | No mechanical wear                            | Mechanical wear due to wiper contact              |
| **Lifespan**        | Very long                                     | Limited by wear                                   |
| **Sensitivity**     | High, typically Volts/mm                      | Lower, typically Volts/mm                         |
| **Excitation**      | AC                                            | DC                                                |
| **Signal Conditioning** | Requires demodulation, amplification, filtering | May require amplification, filtering                |
| **Environmental**   | Robust, less sensitive to dust and dirt       | Sensitive to dust, dirt, and vibration            |
| **Cost**            | Generally higher                              | Generally lower                                   |
| **Power Consumption** | Low                                           | Varies, can be higher with constant current       |
| **Speed Response**  | Limited by inductance and mechanical inertia  | Limited by wiper inertia and contact bounce       |

**Example Scenario:**
If you need to measure the precise position of a machine tool in a cleanroom where high accuracy and longevity are critical, an LVDT would likely be the better choice due to its contactless nature and excellent linearity, despite its higher cost and complexity. If you need a simple, low-cost solution for measuring the position of a control knob on a simple device in a clean environment, a potentiometer might suffice.

**Textbook References:**
*   **Dobelin:** Provides a comparative analysis of different transducer types, including LVDTs and potentiometers.
*   **Rajput:** Offers a concise comparison table highlighting the key differences.

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary advantage of an LVDT over a potentiometer in terms of wear and tear?
**(CO1, CO2, K2)**

**Answer:**
The primary advantage is its **non-contact** operation. The movable core does not physically touch the transformer windings, eliminating mechanical wear and leading to a longer lifespan and higher reliability compared to a potentiometer where a wiper makes physical contact with the resistive element.

---

**Question 2:**
An LVDT has a sensitivity of 0.05 V/mm. If the output voltage is measured as 0.25 V, what is the displacement from the null position?
**(CO2, K3)**

**Answer:**
Using the formula $V_{out} = K \times x$:
$0.25 \, V = 0.05 \, V/mm \times x$
$x = \frac{0.25 \, V}{0.05 \, V/mm} = 5 \, mm$
The displacement is 5 mm from the null position.

---

**Question 3:**
Which signal conditioning circuit is essential for converting the AC output of an LVDT into a DC voltage proportional to displacement?
**(CO2, K2)**

**Answer:**
A **demodulator** (or phase-sensitive detector/synchronous demodulator) is essential for this conversion.

---

**Question 4:**
List two applications where an LVDT is commonly used and explain why it is suitable for those applications.
**(CO1, CO2, CO5, K2)**

**Answer:**
1.  **Machine Tool Control:** LVDTs are used for precise position feedback of cutting tools. Their high linearity, infinite resolution, and robustness in industrial environments make them ideal for ensuring accuracy in CNC machines.
2.  **Hydraulic Actuator Position Feedback:** In industrial automation and robotics, LVDTs provide accurate and reliable position feedback for hydraulic cylinders. Their contactless nature ensures a long operational life, and their ability to withstand vibrations and harsh environments is beneficial.

---

### 8. Important Points to Remember

*   **LVDT = Linear Variable Differential Transformer.**
*   It converts **linear displacement** into an **AC voltage**.
*   The output voltage magnitude is **proportional** to displacement.
*   The output voltage **phase** indicates the **direction** of displacement.
*   Key components: Primary winding, two secondary windings, movable ferromagnetic core (armature).
*   **Non-contact operation** is a significant advantage over potentiometers.
*   Requires **AC excitation** and **demodulation** for signal conditioning.
*   Known for **high linearity**, **infinite resolution** (theoretical), and **robustness**.
*   Commonly used in **machine tools, automation, aerospace, and metrology**.
*   Contrast with potentiometers: LVDTs are AC, contactless, higher resolution, but require more complex conditioning.

---

This comprehensive study note on LVDTs covers their fundamental principles, construction, characteristics, advantages, disadvantages, and applications, directly addressing the learning outcomes and aligning with the knowledge levels specified for the course. The content is informed by the provided textbooks and reference materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
