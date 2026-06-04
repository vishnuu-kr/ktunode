---
title: "mho relays (basic principles and characteristics only)"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3657c"
status: "completed"
scrapedAt: "2026-05-23T16:25:51.768Z"
---
## Digital Protection of Power Systems: Module 1 - Introduction: Need for Protective Systems
### Topic: Mho Relays (Basic Principles and Characteristics Only)

**Course Outcomes Addressed:**
*   CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (Knowledge Level: K3)
*   CO3: Illustrate the operation of a numerical relay. (Knowledge Level: K2)

---

### 1. Introduction to Distance Relays and their Importance

*   **Need for Protection:** Power systems are complex networks prone to various faults (short circuits, open circuits, etc.) due to environmental factors, equipment failure, or human error. These faults can cause significant damage to equipment, disrupt power supply, and pose safety hazards. Protective systems are crucial for detecting these faults quickly and isolating the faulty section, thereby minimizing damage and ensuring system stability.
*   **Role of Distance Protection:** Distance protection is a fundamental protection scheme used for radial and interconnected power systems, particularly for transmission lines. It provides selective isolation of faults based on their location relative to the relay. The key principle is that the impedance "seen" by the relay from its location is proportional to the distance to the fault.
*   **Mho Relay as a Type of Distance Relay:** The Mho relay is a specific type of distance relay characterized by its **polar characteristic**. This characteristic offers significant advantages in certain applications compared to other distance relay characteristics.

**Key Concept:** Distance protection operates on the principle that the impedance between the relay and the fault location is proportional to the distance.

**Reference:**
*   "Digital Protection of Power System" by Johns and Salman (Chapter 4: Distance Protection): This chapter likely provides a foundational understanding of distance protection principles, including the concept of impedance measurement.
*   "Computer Relaying for Power Systems" by Phadke and Thorpe (Chapter 6: Distance Relays): This book offers a detailed explanation of various distance relay types, including the Mho relay.

---

### 2. Basic Principles of the Mho Relay

The Mho relay operates based on the principle of measuring the **impedance** of the power line between the relay location and the fault point. It achieves this by comparing the **voltage** and **current** signals at its terminals.

*   **Impedance Measurement:** The relay calculates the apparent impedance ($Z_{app}$) using Ohm's Law:
    $Z_{app} = V / I$
    where:
    *   $V$ is the voltage at the relay location.
    *   $I$ is the current flowing through the relay.

*   **Polar Characteristic:** The defining feature of the Mho relay is its **circular impedance characteristic** on the R-X plane (Resistance-Reactance plane). This circle is typically drawn with its center on the line representing the impedance of the protected line segment.
    *   The **diameter** of the circle is determined by the voltage being measured.
    *   The **angle** of the diameter with respect to the resistance axis is typically set to the angle of the impedance of the protected line.

*   **Operating Principle:**
    *   The Mho relay operates when the measured apparent impedance ($Z_{app}$) falls **within** its operating circle.
    *   Mathematically, the condition for operation can be expressed as:
        $|Z_{app} - Z_{setting}| \le |Z_{setting}|$
        where $Z_{setting}$ is the impedance of the protected line segment.
    *   This can be visualized on the R-X plane as the region inside the circle.

*   **Phase Comparison:** Mho relays often use a phase comparison technique. The relay compares the phase angle of the voltage ($V$) with the phase angle of the current ($I$). For a fault, the angle of the impedance ($V/I$) is expected to be within a certain range, corresponding to the line's impedance angle.
    *   The Mho relay is designed to operate when the angle of the impedance ($V/I$) is within a specific range, usually centered around the line's impedance angle.

**Key Concepts:**
*   **Apparent Impedance:** The ratio of voltage to current at the relay location.
*   **R-X Plane:** A graphical representation of impedance where the horizontal axis represents resistance (R) and the vertical axis represents reactance (X).
*   **Polar Characteristic:** A circular operating region for the relay on the R-X plane.

**Reference:**
*   "Power System Protection and Switchgear" by Badri Ram and D. N. Viswakarma (Chapter 3: Distance Protection): This book will provide a detailed explanation of impedance measurement and the graphical representation of distance relay characteristics, including the Mho relay.
*   "Digital Signal Processing in Power System Protection and Control" by Waldemar Rebizant (Chapter 5: Distance Protection Algorithms): While focusing on digital aspects, this chapter will likely touch upon the fundamental principles that digital distance relays implement, including impedance calculation and characteristic representation.

---

### 3. Characteristics of the Mho Relay

The Mho relay's characteristics are what distinguish it and determine its suitability for specific applications.

*   **Circular Impedance Characteristic:**
    *   **On the R-X Plane:** The operating region is a circle.
    *   **Advantages:** The circular characteristic provides a consistent operating characteristic for all fault impedance values, especially for faults occurring at the beginning of the protected zone. It is also less affected by the fault resistance compared to some other distance relay characteristics (like the ohm relay).
    *   **Disadvantages:** The circular characteristic has a limited reach for very high impedance faults where the fault impedance angle might be significantly different from the line impedance angle.

*   **Setting Parameters:**
    *   **Impedance Setting ($Z_{set}$ or $Z_{line}$):** This determines the diameter of the circle and is typically set to the impedance of the protected line segment.
    *   **Characteristic Angle ($\phi$):** This is the angle of the impedance of the protected line. The center of the circle on the R-X plane is located at $(Z_{set} \cos\phi, Z_{set} \sin\phi)$. The circle passes through the origin.

*   **Operating Condition:** The relay operates when the measured apparent impedance ($Z_{app}$) lies **inside** the circle.

*   **Non-Quadrilateral Characteristic:** Unlike some other distance relays (e.g., Ohm relays which have a straight line characteristic), the Mho relay has a non-quadrilateral (circular) operating region.

*   **Independence from Fault Angle:** The Mho relay's operation is largely independent of the fault current angle, making it robust against variations in fault resistance.

*   **Mho Relay as a Voltage-Polarized Relay:** Mho relays are considered voltage-polarized. This means that the voltage signal plays a crucial role in determining the relay's operation. The magnitude of the voltage often influences the sensitivity or the reset characteristic.

**Key Concepts:**
*   **Characteristic Angle:** The angle of the protected line's impedance.
*   **Fault Resistance:** The resistance encountered by the fault current at the fault location.
*   **Voltage-Polarized Relay:** A relay whose operation is significantly influenced by the voltage signal.

**Reference:**
*   "Digital Protection of Power System" by Johns and Salman (Chapter 4: Distance Protection): This chapter will delve into the specific characteristics of the Mho relay, including its graphical representation and the implications of its circular characteristic.
*   "Computer Relaying for Power Systems" by Phadke and Thorpe (Chapter 6: Distance Relays): This book will provide a comparative analysis of different distance relay characteristics, highlighting the advantages and disadvantages of the Mho relay.

---

### 4. Application and Relevance in Digital Protection

While the basic principles of Mho relays are analog in nature, these principles are implemented in modern digital relays.

*   **Digital Implementation:** In numerical relays, the voltage and current signals are sampled, digitized, and processed using algorithms. The impedance calculation and comparison with the digital representation of the Mho characteristic are performed by the relay's microprocessor.
    *   **Algorithms:** Digital Mho relays use algorithms to compute the magnitude and angle of the apparent impedance. Common algorithms include Fourier analysis or least-square methods for extracting fundamental frequency phasors.
    *   **Characteristic Representation:** The circular characteristic is represented mathematically within the digital relay's software.

*   **Advantages of Digital Mho Relays:**
    *   **Flexibility:** The characteristic can be precisely defined and adjusted through software.
    *   **Multiple Zones of Protection:** Digital relays can implement multiple zones of protection (e.g., Zone 1, Zone 2, Zone 3) with Mho characteristics of different settings.
    *   **Improved Accuracy and Sensitivity:** Digital signal processing can lead to more accurate impedance measurements and better detection of faults.
    *   **Self-Diagnosis and Communication:** Digital relays offer self-monitoring capabilities and can communicate with other protection devices and control systems.

*   **Use in Modern Protection Schemes:** Mho relays, in their digital form, are still widely used in transmission line protection due to their robustness and effectiveness, especially for lines with a relatively consistent impedance angle.

*   **Relation to Course Outcomes:**
    *   **CO1 (Identify relay protection scheme):** The Mho relay is a specific type of distance protection scheme suitable for transmission lines. Understanding its principles helps in identifying appropriate schemes for different fault types.
    *   **CO3 (Illustrate operation of a numerical relay):** Understanding the Mho relay's characteristic and operating principle is a prerequisite for illustrating how a numerical relay implements and utilizes this characteristic for fault detection. The digital implementation involves sampling, processing, and comparing against a digitally defined Mho circle.

**Key Concepts:**
*   **Numerical Relays:** Relays that use digital signal processing to detect faults.
*   **Sampling and Digitization:** Converting analog voltage and current signals into digital data.
*   **Algorithms:** Mathematical procedures used by numerical relays to process data and make decisions.

**Reference:**
*   "Digital Protection of Power System" by Johns and Salman (Chapter 5: Numerical Distance Relays): This chapter will explicitly discuss how distance protection principles, including Mho characteristics, are implemented in numerical relays.
*   "Computer Relaying for Power Systems" by Phadke and Thorpe (Chapter 7: Microprocessor-Based Relays): This section will provide insights into the architecture and operational aspects of digital relays, including the processing of distance protection algorithms.

---

### 5. Illustrative Example (Conceptual)

Consider a transmission line with an impedance of $Z_{line} = (5 + j10) \Omega$. The characteristic angle for a Mho relay protecting this line would be $\phi = \arctan(10/5) \approx 63.4^\circ$.

*   **Setting:** The Mho relay is set with $Z_{set} = Z_{line} = (5 + j10) \Omega$.
*   **Fault Scenario:** A fault occurs at a location on the line. The relay measures the apparent impedance $Z_{app} = V/I$.
*   **Operation:**
    *   If the measured $Z_{app}$ falls **inside** the circle defined by the center at $(5 \cos 63.4^\circ, 5 \sin 63.4^\circ)$ and passing through the origin, the relay will operate.
    *   For a fault at the beginning of the line segment, $Z_{app} \approx Z_{line}$.
    *   For a fault halfway along the line, $Z_{app} \approx Z_{line}/2$.
    *   If the fault occurs at a location such that $Z_{app}$ is outside the circle, the relay will not operate.

**Example of R-X Plane Representation:**
Imagine plotting points on an R-X plane. The Mho relay characteristic is a circle. Any point falling within this circle triggers the relay.

**Important Point to Remember:** The center of the Mho circle on the R-X plane is located at an impedance value equal to the setting impedance ($Z_{set}$), and the circle is tangential to the origin.

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary principle behind distance protection schemes like the Mho relay?
a) Measuring overcurrent magnitude.
b) Measuring voltage unbalance.
c) Measuring impedance proportional to the fault distance.
d) Measuring power factor deviation.

**Answer 1:**
c) Measuring impedance proportional to the fault distance.

**Question 2:**
Describe the shape of the operating characteristic of a Mho relay on an R-X plane.
a) A rectangle.
b) A circle.
c) A straight line.
d) An ellipse.

**Answer 2:**
b) A circle.

**Question 3:**
What are the two main parameters used to set a Mho relay?
a) Current magnitude and time delay.
b) Voltage magnitude and frequency.
c) Impedance magnitude and characteristic angle.
d) Resistance and Reactance of the protected line.

**Answer 3:**
c) Impedance magnitude and characteristic angle. (Note: While 'd' is related, 'c' is the direct setting parameters. The characteristic angle is the angle of the protected line's impedance).

**Question 4:**
Explain why the Mho relay is considered a voltage-polarized relay.

**Answer 4:**
The Mho relay's operation is significantly influenced by the voltage signal. The magnitude of the voltage, along with the current, is used to calculate the apparent impedance. The circular characteristic's diameter is directly related to the voltage magnitude. In essence, voltage is a crucial component that "polarizes" or dictates the operating characteristics of the relay.

**Question 5 (Application to Digital Relays):**
How is the Mho characteristic implemented in a digital (numerical) relay?

**Answer 5:**
In a digital relay, the analog voltage and current signals are sampled and digitized. Algorithms are then used to calculate the fundamental frequency phasors of voltage and current. The apparent impedance ($Z_{app} = V/I$) is computed. The digital relay's software contains a mathematical representation of the Mho circle (defined by its center and radius, which are derived from the setting impedance and characteristic angle). The relay checks if the calculated $Z_{app}$ falls within this digitally defined circular region. If it does, the relay operates.

---

### 7. Important Points to Remember

*   **Mho Relays = Circular Characteristic:** This is the most defining feature.
*   **Impedance is Key:** The relay measures apparent impedance ($V/I$).
*   **R-X Plane:** Visualize the operating characteristic as a circle on this plane.
*   **Center of the Circle:** Located at the setting impedance ($Z_{set}$) with the circle tangential to the origin.
*   **Voltage-Polarized:** Voltage plays a critical role in its operation.
*   **Digital Implementation:** Modern Mho relays use digital signal processing to implement the same fundamental principles.
*   **Advantages:** Good for lines with consistent impedance angles, less susceptible to fault resistance variations compared to some other characteristics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Further Reading and References

*   **Johns, A. T., & Salman, S. K. (1995). *Digital Protection of Power System*. Peter Peregrinus Ltd, UK.** (Chapters on Distance Protection and Numerical Distance Relays)
*   **Phadke, A. G., & Thorpe, J. S. (1988). *Computer Relaying for Power Systems*. Research Study Press Ltd, John Wiley & Sons, Taunton, UK.** (Chapters on Distance Relays and Microprocessor-Based Relays)
*   **Ram, B., & Viswakarma, D. N. (2011). *Power System Protection and Switchgear*. Tata McGraw Hill Education.** (Chapters on Distance Protection)
*   **Rebizant, W. (2008). *Digital Signal Processing in Power System Protection and Control*. Springer Publication.** (Chapters on Distance Protection Algorithms)

These references provide comprehensive coverage of the topics discussed, from basic principles to modern digital implementations. Reviewing these chapters will further solidify your understanding.