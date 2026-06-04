---
title: "Inductive Transducers: LVDT (Linear variable differential transformer)."
subject: "INSTRUMENTATION"
module: "Module 2: Sensors and Transducers"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5bf"
status: "completed"
scrapedAt: "2026-05-23T17:49:23.078Z"
---
# INSTRUMENTATION - Module 2: Sensors and Transducers

## Topic: Inductive Transducers: LVDT (Linear Variable Differential Transformer)

---

### **1. Introduction to Inductive Transducers**

*   **Definition:** Inductive transducers are sensors that convert a mechanical displacement into a change in inductance or mutual inductance. They operate based on the principles of electromagnetic induction.
*   **Types:**
    *   **Variable Reluctance Transducers:** The inductance of a coil changes due to the movement of a magnetic core.
    *   **Self-Inductance Transducers:** The inductance of a single coil changes due to the movement of the core.
    *   **Mutual Inductance Transducers:** The mutual inductance between two coils changes due to the relative movement of their magnetic cores. The LVDT falls under this category.

---

### **2. Linear Variable Differential Transformer (LVDT)**

**Learning Outcome(s) Covered:**
*   Outline the principle, construction and working of transducers for measuring physical variables. (CO2)
*   Interpret the basic concepts of measuring instruments, its classification, and selection criteria. (CO1 - understanding LVDT as a sensor).

**Course Outcome(s) Alignment:**
*   **CO2 (K2):** This topic directly addresses the principle, construction, and working of a transducer.

#### **2.1. Principle of Operation**

*   The LVDT operates on the principle of **mutual induction**.
*   It utilizes the variation in mutual inductance between three coils (primary and two secondaries) positioned coaxially.
*   The output voltage from the secondaries is dependent on the position of a movable ferromagnetic core.
*   **Key Principle:** When the core is at the center (null position), the voltage induced in both secondary coils is equal in magnitude but 180 degrees out of phase. This results in a zero net output voltage. As the core moves from the null position, the mutual inductance between the primary and one secondary increases, while that with the other secondary decreases. This leads to a differential output voltage proportional to the displacement.

#### **2.2. Construction of an LVDT**

*   **Primary Coil (P):** A single primary coil is wound on a cylindrical former. It is connected to an AC excitation voltage source (typically sinusoidal).
*   **Secondary Coils (S1 and S2):** Two identical secondary coils are wound on either side of the primary coil, also on cylindrical formers. They are connected in series opposition. This means that when the core is at the center, the induced voltages in S1 and S2 are equal and 180 degrees out of phase, resulting in a zero net output.
*   **Movable Core:** A cylindrical ferromagnetic core is free to move axially within the former. This core is mechanically coupled to the quantity being measured (e.g., position, displacement). The core is typically made of a high-permeability material like mu-metal or permalloy. It is usually not magnetized but acts as a flux guide.
*   **Housing:** The coils and core are typically housed in a non-magnetic casing.

**Referenced Textbooks/Books:**
*   **Doebelin's Measurement Systems (6/e):** Chapter 9 (Displacement Measuring Systems) likely details LVDT construction and working.
*   **Electronic Instrumentation by Kalsi H S (4/e):** Chapter 5 (Transducers) and Chapter 15 (Sensors and Transducers) are good sources for LVDT principles and construction.
*   **Electrical and Electronics Measurements and Instrumentation by Sawhney AK:** Chapter 24 (A.C. Bridges and their applications) might discuss concepts related to inductive measurements that underpin LVDT.

#### **2.3. Working of an LVDT**

1.  **AC Excitation:** An AC voltage source is applied to the primary coil. This creates a time-varying magnetic flux that links with the core.
2.  **Flux Linkage:** The ferromagnetic core guides this magnetic flux to the secondary coils. The amount of flux linking with each secondary coil depends on the position of the core.
3.  **Induced Voltages:**
    *   When the core is at the **center (null position)**, the flux linkage with both secondary coils (S1 and S2) is equal. However, due to the series opposition connection, the induced voltages ($V_{S1}$ and $V_{S2}$) are equal in magnitude and 180° out of phase. The net output voltage ($V_{out} = V_{S1} - V_{S2}$) is zero.
    *   When the core is moved **upwards** (say, towards S1), the flux linkage with S1 increases, and with S2 decreases. This results in $|V_{S1}| > |V_{S2}|$. The net output voltage ($V_{out} = V_{S1} - V_{S2}$) will be non-zero and will have a specific phase relative to the primary voltage, indicating upward displacement.
    *   When the core is moved **downwards** (say, towards S2), the flux linkage with S2 increases, and with S1 decreases. This results in $|V_{S2}| > |V_{S1}|$. The net output voltage ($V_{out} = V_{S1} - V_{S2}$) will be non-zero and will have the opposite phase relative to the primary voltage compared to upward displacement, indicating downward displacement.
4.  **Output Signal:** The output voltage of the LVDT is a **differential voltage**, which is an AC signal. The **amplitude** of this output signal is directly proportional to the displacement from the null position, and the **phase** of the output signal indicates the direction of the displacement.

**Mathematical Representation (Simplified):**

Let the primary voltage be $V_p = V_0 \sin(\omega t)$.
The induced voltages in the secondaries can be expressed as:
$V_{S1} = k_1 x \cdot V_p$
$V_{S2} = k_2 (-x) \cdot V_p$

Where:
*   $x$ is the displacement from the null position.
*   $k_1$ and $k_2$ are constants related to the coil coupling and geometric factors. For an ideal LVDT, $k_1 = k_2 = K$.
*   The negative sign in $V_{S2}$ accounts for the 180° phase difference when the core is in the null position and the opposing connection.

The output voltage is $V_{out} = V_{S1} - V_{S2}$.
If $k_1 = k_2 = K$ and the core is at the center ($x=0$), $V_{S1}$ and $V_{S2}$ are equal in magnitude and 180° out of phase, so $V_{out} = 0$.

When the core is at a displacement $x$:
$V_{out} = K x V_p - K (-x) V_p = 2 K x V_p$

This indicates that the output voltage ($V_{out}$) is linearly proportional to the displacement ($x$) and the primary voltage ($V_p$).

**Referenced Textbooks/Books:**
*   **Electronic Instrumentation by Kalsi H S (4/e):** Likely provides detailed mathematical models and working principles.
*   **Doebelin's Measurement Systems (6/e):** Similar to Kalsi, Kalsi's book will offer comprehensive coverage.

#### **2.4. Signal Conditioning**

*   The raw output of an LVDT is an AC signal. To obtain a DC output proportional to displacement, signal conditioning is required.
*   **Demodulation:** This is the crucial step. It involves converting the AC output signal into a DC signal. Common demodulation techniques include:
    *   **Phase-Sensitive Demodulation (PSD) or Synchronous Demodulation:** This is the most accurate method. It uses a reference signal (derived from the primary excitation) to detect the amplitude and phase of the LVDT output. A synchronous detector (e.g., using a ring modulator or analog multiplier) outputs a DC voltage proportional to the displacement, with the polarity indicating the direction.
    *   **Envelope Detection:** Less accurate, but simpler. It typically involves a rectifier and a filter to extract the envelope of the AC output. This method does not preserve phase information, so directionality is lost.
*   **Amplification:** The output signal might be small and require amplification using an operational amplifier.
*   **Filtering:** To remove noise and unwanted frequencies.

**Referenced Textbooks/Books:**
*   **Electronic Instrumentation by Kalsi H S (4/e):** Likely discusses signal conditioning circuits for LVDTs.
*   **Sawhney AK:** May touch upon demodulation techniques in broader instrumentation contexts.

#### **2.5. Advantages of LVDT**

*   **High Linearity:** The output voltage is directly proportional to displacement over a wide range.
*   **Infinite Resolution:** Theoretically, the output changes for any infinitesimal change in displacement.
*   **High Sensitivity:** Produces a relatively large output signal for a small displacement.
*   **Robust Construction:** No physical contact between the core and coils, leading to less wear and tear and higher reliability.
*   **No Friction:** The absence of friction in the sensing element ensures accurate readings.
*   **Immune to Shock and Vibration:** The core is typically unrestrained and floats within the coils, making it less susceptible to mechanical shocks and vibrations.
*   **Can Measure Large Displacements:** Depending on the design, LVDTs can measure displacements from a few micrometers to several centimeters.
*   **Good Stability:** Generally stable over a wide temperature range.
*   **AC or DC Output (after conditioning):** Can be used in both analog and digital systems.

**Referenced Textbooks/Books:**
*   **Doebelin's Measurement Systems (6/e):** Will list the advantages in the context of displacement sensors.
*   **Kalsi H S:** Will also provide these comparative advantages.

#### **2.6. Disadvantages of LVDT**

*   **Requires AC Excitation:** Needs an AC signal source for operation, which might be more complex than a DC source.
*   **Requires Signal Conditioning:** The AC output needs demodulation and amplification to become a usable DC signal.
*   **Susceptible to Stray Magnetic Fields:** Can be affected by external magnetic fields, requiring shielding.
*   **Phase Shift with Core Position:** Although the amplitude is proportional to displacement, the phase of the output voltage can shift depending on the core's position, which needs to be accounted for in the demodulation process.
*   **Low Output Impedance:** The output impedance of the secondary coils can be relatively low, potentially causing loading effects if not properly buffered.
*   **Non-Linearity at Extremes:** While generally linear, the linearity can degrade slightly at the extreme ends of the operational range.

**Referenced Textbooks/Books:**
*   **Doebelin's Measurement Systems (6/e):** Will list the limitations.
*   **Kalsi H S:** Will also provide these comparative disadvantages.

#### **2.7. Applications of LVDT**

*   **Position Measurement:** Widely used for measuring the position of machine tools, hydraulic actuators, valve positions, and robotic arms.
*   **Displacement Measurement:** Monitoring the displacement of bridges, structures, and mechanical components.
*   **Jet Engine Controls:** Measuring the position of fuel control valves.
*   **Industrial Automation:** Used in feedback systems for controlling processes.
*   **Material Testing:** Measuring the strain and deformation of materials.
*   **Vibration Measurement:** Can be used to measure the amplitude of vibrations.

**Referenced Textbooks/Books:**
*   **Doebelin's Measurement Systems (6/e):** Provides numerous application examples.
*   **Kalsi H S:** Also includes application scenarios.

---

### **3. Comparison with Other Displacement Sensors (Briefly)**

While the focus is on LVDTs, it's good to be aware of alternatives for selection criteria (CO1).

*   **Potentiometers:** Simple, DC output, but susceptible to wear, friction, and have limited resolution.
*   **Capacitive Transducers:** High sensitivity, good for small displacements, but sensitive to environmental changes (humidity, dust).
*   **Optical Encoders:** Digital output, high precision, used for angular and linear position, but can be sensitive to dirt and require a light source.
*   **Strain Gauges:** Primarily for measuring strain, indirectly displacement. Require Wheatstone bridge and amplification.

---

### **4. Important Points to Remember**

*   LVDT stands for **Linear Variable Differential Transformer**.
*   It's an **inductive transducer** based on **mutual induction**.
*   Operates with **AC excitation**.
*   Output is an **AC voltage** proportional to displacement magnitude and phase indicates direction.
*   Requires **signal conditioning** (demodulation) for a usable DC output.
*   Key advantage: **No physical contact** between core and coils, leading to high reliability and no wear.
*   Principle: Variation in **mutual inductance** due to core position.
*   Core movement from null position causes **differential voltage** output.

---

### **5. Practice Questions and Exercises**

**Question 1 (CO2 - K2):**
Describe the principle of operation of an LVDT. How does the output voltage change with the displacement of the core from its null position?

**Answer:**
The LVDT works on the principle of mutual induction between three coils (one primary and two secondaries) and a movable ferromagnetic core. An AC voltage applied to the primary coil induces voltages in the secondary coils. When the core is at the center (null position), the induced voltages in the two secondaries are equal in magnitude but 180° out of phase due to their series opposition connection, resulting in zero net output voltage. As the core moves, the magnetic flux distribution changes, altering the mutual inductance between the primary and the secondaries. This causes the induced voltages in the secondaries to become unequal. The differential output voltage, obtained by subtracting the voltage of one secondary from the other, is proportional to the displacement. The magnitude of the output AC voltage is proportional to the distance moved from the null, and its phase relative to the primary excitation indicates the direction of displacement (e.g., phase leads for one direction, lags for the other).

**Question 2 (CO1, CO2 - K2):**
List the main components of an LVDT and briefly explain their function.

**Answer:**
The main components of an LVDT are:
1.  **Primary Coil:** Connected to an AC excitation source. It produces a magnetic field.
2.  **Secondary Coils (Two):** Wound coaxially on either side of the primary coil and connected in series opposition. They pick up the magnetic flux guided by the core.
3.  **Movable Core:** A ferromagnetic rod that can move axially within the coils. It acts as a flux guide, controlling the magnetic flux linkage with each secondary coil. It is mechanically coupled to the measured displacement.

**Question 3 (CO1, CO2 - K2):**
What are the primary advantages of using an LVDT for displacement measurement?

**Answer:**
The primary advantages of LVDTs include:
*   **High Linearity:** Output is nearly proportional to displacement.
*   **Infinite Resolution:** Theoretically can detect any small change.
*   **High Sensitivity:** Provides a good output signal for small movements.
*   **Robustness and Reliability:** No contact between core and coils, hence no wear and tear.
*   **No Friction:** Ensures accurate readings.
*   **Immunity to Shock/Vibration:** Core floats, reducing susceptibility.
*   **Can measure large displacements.**

**Question 4 (CO1 - K2):**
Why is signal conditioning essential for an LVDT's output?

**Answer:**
Signal conditioning is essential because the raw output of an LVDT is an AC voltage. To obtain a meaningful measurement (e.g., a DC voltage proportional to displacement) and to determine the direction of displacement, this AC signal needs to be processed. This involves demodulation (like phase-sensitive demodulation) to convert the AC signal into a DC signal, amplification to increase its magnitude, and filtering to remove noise.

**Question 5 (Application Scenario - CO2, CO1 - K2):**
An LVDT is used to measure the position of a piston in a hydraulic cylinder. The piston moves from a position 5 mm to the left of the null point to 10 mm to the right of the null point. If the LVDT's sensitivity is 0.1 V/mm and it is excited by a 5V AC voltage, describe the expected changes in the output signal magnitude and phase before and after signal conditioning (assuming ideal phase-sensitive demodulation).

**Answer:**
*   **At 5 mm to the left of null:**
    *   **Magnitude:** The displacement is 5 mm. Assuming the sensitivity is 0.1 V/mm, the AC output voltage magnitude will be approximately $5 \text{ mm} \times 0.1 \text{ V/mm} = 0.5 \text{ V}$.
    *   **Phase:** The phase of the output AC signal will be indicative of displacement to the left (e.g., leading the primary excitation).
    *   **After Conditioning:** A DC output voltage of $-0.5$ V (assuming a negative sign for left displacement) would be obtained.

*   **At 10 mm to the right of null:**
    *   **Magnitude:** The displacement is 10 mm. The AC output voltage magnitude will be approximately $10 \text{ mm} \times 0.1 \text{ V/mm} = 1.0 \text{ V}$.
    *   **Phase:** The phase of the output AC signal will be indicative of displacement to the right (e.g., lagging the primary excitation, opposite to the left displacement).
    *   **After Conditioning:** A DC output voltage of $+1.0$ V (assuming a positive sign for right displacement) would be obtained.

*   **At Null Position:**
    *   **Magnitude:** The AC output voltage magnitude will be approximately 0 V.
    *   **Phase:** Not applicable as there is no signal.
    *   **After Conditioning:** A DC output voltage of 0 V would be obtained.

---
This concludes the study notes for LVDTs. Remember to consult your textbooks for more in-depth coverage and specific circuit diagrams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
