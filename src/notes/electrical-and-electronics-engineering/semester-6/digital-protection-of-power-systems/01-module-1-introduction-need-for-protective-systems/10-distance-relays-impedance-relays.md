---
title: "Distance relays: impedance relays"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3657a"
status: "completed"
scrapedAt: "2026-05-23T16:25:50.276Z"
---
# Digital Protection of Power Systems - Module 1: Introduction: Need for Protective Systems

## Topic: Distance Relays: Impedance Relays

---

### **1. Introduction to Distance Relays**

*   **Need for Protective Systems:** (Referencing the broader context of Module 1)
    *   Power systems are complex and interconnected, designed to deliver reliable electricity.
    *   Faults (short circuits, open circuits) are inevitable events that disrupt normal operation.
    *   Protective systems are essential to detect these faults quickly and isolate the faulty section, minimizing damage to equipment and preventing widespread system collapse.
    *   Key objectives of protective systems:
        *   **Reliability:** Ensure continuity of power supply by isolating faults swiftly.
        *   **Selectivity:** Isolate only the faulty section, leaving healthy parts of the system in operation.
        *   **Sensitivity:** Detect even small fault currents to prevent catastrophic failures.
        *   **Speed:** Clear faults as rapidly as possible to limit damage and maintain system stability.
        *   **Economy:** Cost-effective protection schemes.

*   **Distance Relays - A Core Protective Device:**
    *   Distance relays are a fundamental type of protective relay used extensively in transmission and distribution systems.
    *   They operate based on the principle that the impedance of a power line between the relay location and the fault location is proportional to the distance to the fault.
    *   "The impedance of a section of a power system under fault conditions is a function of the distance to the fault." (Johns & Salman, 1995)
    *   This principle allows them to provide *directional* and *distance* based protection.

---

### **2. Operating Principle of Impedance Relays**

*   **Impedance as a Measure of Distance:**
    *   The impedance ($Z$) of a transmission line is given by $Z = R + jX$, where $R$ is the resistance and $X$ is the reactance.
    *   For a uniform line, impedance is directly proportional to length: $Z_{line} = \rho \times L$, where $\rho$ is the impedance per unit length and $L$ is the length.
    *   Therefore, if a fault occurs at a distance $d$ from the relay location, the fault impedance seen by the relay ($Z_{fault}$) will be approximately $Z_{fault} = \rho \times d$.
    *   This relationship forms the basis of distance protection.

*   **Measuring Impedance:**
    *   Impedance is calculated using the voltage ($V$) and current ($I$) measured at the relay location.
    *   $Z_{measured} = \frac{V}{I}$ (in steady state or using phasor quantities).
    *   In a power system, the voltage is typically measured by Potential Transformers (PTs) or Voltage Transformers (VTs), and the current by Current Transformers (CTs).

*   **Key Components of an Impedance Relay:**
    *   **Voltage Input:** From PTs/VTs.
    *   **Current Input:** From CTs.
    *   **Measuring Unit:** Calculates impedance (e.g., by measuring voltage and current and performing division).
    *   **Operating Unit:** Compares the measured impedance with a pre-set impedance setting. If the measured impedance is less than the setting, the relay operates.
    *   **Time Delay Unit:** Introduces time delays to achieve selectivity between different zones of protection.

---

### **3. Types of Impedance Relays (Historically and Digitally)**

*   **Electromechanical Impedance Relays:**
    *   **Mho Relays:** Characterized by a circular operating characteristic on an R-X diagram. They are sensitive to faults at high resistance, which is an advantage. They also provide inherent directional sensitivity.
        *   *Operating characteristic:* $|Z_{measured} - Z_0| \leq |Z_0|$, where $Z_0$ is the relay setting impedance.
    *   **Reactance Relays:** Have a straight line characteristic parallel to the resistance axis. They are primarily sensitive to reactance and less affected by fault resistance.
        *   *Operating characteristic:* $X_{measured} \leq X_{setting}$.
    *   **Quadrilateral Relays:** Offer a more flexible characteristic, combining features of both Mho and Reactance relays. They provide a more optimized protection coverage.

*   **Digital/Numerical Impedance Relays:**
    *   Modern distance relays are digital, employing digital signal processing (DSP) techniques.
    *   They can implement any desired operating characteristic (Mho, Quadrilateral, etc.) with high precision.
    *   "Numerical distance relays use digital signal processing to calculate the impedance seen by the relay and compare it with programmed settings." (Phadke & Thorpe, 1988)
    *   **Advantages of Digital Impedance Relays:**
        *   **Flexibility:** Easily programmable characteristics and settings.
        *   **Accuracy:** Higher precision in impedance measurement.
        *   **Multiple Characteristics:** Can implement various characteristics simultaneously.
        *   **Additional Functions:** Can incorporate directional elements, power swing detection, fault location, event recording, etc.
        *   **Reduced Size and Cost:** Integration of multiple functions into a single unit.
        *   **Improved Sensitivity:** Better performance under varying fault resistances.

---

### **4. Zones of Protection with Distance Relays**

*   **The Challenge:** A single distance relay at a substation protects the line segment connected to it. However, faults can occur anywhere along the protected line and on adjacent lines.
*   **Zone 1 (Primary Protection):**
    *   Protects the first line segment extending to the first protection zone boundary (typically 80-90% of the line length).
    *   **Setting:** $Z_{setting1} = 0.85 \times Z_{line}$ (where $Z_{line}$ is the impedance of the protected line).
    *   **Time Delay:** Instantaneous operation (zero time delay).
    *   **Purpose:** Provides fast primary protection for the majority of the line.

*   **Zone 2 (Secondary Protection):**
    *   Protects the first line segment plus a portion of the adjacent line segment (typically extending to the next substation).
    *   **Setting:** $Z_{setting2} = 1.1 \times Z_{line}$ to $1.3 \times Z_{line}$ (to cover the protected line and a portion of the next, accounting for the impedance of the next substation and cable lengths).
    *   **Time Delay:** A definite time delay (e.g., 0.3-0.5 seconds) is introduced to ensure selectivity. This delay allows the Zone 1 relay at the adjacent substation to operate first for faults on the second line segment.
    *   **Purpose:** Provides backup protection for the first line segment and primary protection for the adjacent line segment.

*   **Zone 3 (Tertiary Protection):**
    *   Protects the entire first line segment and a significant portion of the adjacent line segment (often covering the entire next line segment and potentially beyond).
    *   **Setting:** $Z_{setting3} = 1.6 \times Z_{line}$ to $2.0 \times Z_{line}$ (to cover both line segments and provide further backup).
    *   **Time Delay:** A longer definite time delay (e.g., 0.8-1.2 seconds) is introduced for further selectivity against faults in more distant sections and for backup of Zone 2 operation.
    *   **Purpose:** Provides backup protection for the first two line segments and offers very long-range protection for the system.

*   **Directional Control:**
    *   Distance relays incorporate directional elements to ensure they only operate for faults in the forward direction (away from the substation).
    *   This is crucial to prevent maloperation for faults occurring behind the relay (e.g., on the source side).
    *   Directional elements use the phase angle relationship between voltage and current.
    *   "The directional element is critical for ensuring that the distance relay operates only for faults occurring in the protected zone and not for faults in the reverse direction." (Badri Ram & Viswakarma, 2011)

**Diagrammatic Representation (R-X Plane):**

Imagine an R-X plane where R is on the x-axis and X is on the y-axis.
*   **Zone 1:** Typically a circular or quadrilateral area originating from the origin (representing 0 impedance) extending to a pre-set impedance value.
*   **Zone 2:** A larger area, often a circle with a shifted center or a larger quadrilateral, set to cover the protected line and a portion of the next, with a time delay.
*   **Zone 3:** An even larger area, also time-delayed, providing broader backup.

---

### **5. Challenges and Considerations for Distance Relays**

*   **Fault Resistance:** High fault resistance (due to arcing, poor grounding, vegetation) can cause the measured impedance to appear larger than it actually is, potentially pushing the fault point outside the operating characteristic of the relay, leading to delayed or no operation. Mho relays offer better sensitivity to high resistance faults compared to reactance relays.
*   **Power Swings:** During system disturbances, power flow can oscillate between different parts of the network. These power swings can cause the voltage and current phasas to change in a way that mimics a fault, leading to maloperation. Digital relays incorporate power swing detection algorithms to block operation during these events.
*   **Line Loading:** Heavy line loading can also influence the measured impedance, especially under light fault conditions or when the fault is close to the relay.
*   **Inaccuracy of Impedance Settings:**
    *   **Tower Footing Resistance:** Variations in tower footing resistance can affect the actual fault impedance.
    *   **Parallel Lines:** The presence of parallel transmission lines can reduce the impedance of the protected line, requiring adjustments to settings.
    *   **Mutual Inductance:** Effects of mutual inductance between parallel lines can also influence the measured impedance.
*   **Load Encroachment:** For heavily loaded lines, the load impedance can fall within the Zone 1 or Zone 2 operating region, causing maloperation. This is particularly a problem for older, simpler characteristics like reactance relays. Mho and quadrilateral characteristics with appropriate settings help mitigate this.
*   **Inaccuracy of Fault Location:** The accuracy of distance relays in locating faults depends on the precise knowledge of line impedance and the accuracy of the relay's measurement.
*   **Load Compensation:** Digital relays can implement load compensation to adjust their settings based on the pre-fault load current, improving accuracy under heavy load conditions.

---

### **6. Digital Signal Processing in Distance Relays (CO4 Alignment)**

*   **Sampling and Quantization:** Analog voltage and current signals from CTs and PTs are sampled at high frequencies and quantized into digital values. (Rebizant, 2008)
*   **Digital Filtering:** Digital filters (e.g., Finite Impulse Response - FIR, Infinite Impulse Response - IIR) are used to remove noise and DC offset components from the sampled signals.
*   **Phasor Estimation:** Algorithms like:
    *   **Fourier Transform (FT):** Analyzes signals in the frequency domain to extract fundamental frequency components.
    *   **Least Error Squares (LES):** Estimates phasors by minimizing the error between the signal model and the sampled data.
    *   **Recursive Least Square (RLS):** An adaptive algorithm for phasor estimation.
*   **Impedance Calculation:** Once phasors of voltage and current are estimated, the impedance is calculated using $Z = V/I$.
*   **Operating Characteristic Implementation:** Digital relays can implement complex operating characteristics (e.g., quadrilateral, adaptive Mho) by performing mathematical operations on the estimated phasors and comparing them against programmable settings.

---

### **7. Illustrating the Operation of a Numerical Relay (CO3 Alignment)**

Let's consider a simplified example of a numerical impedance relay operating as a Zone 1 impedance relay.

**Scenario:** A transmission line with impedance $Z_{line} = (5 + j15) \Omega$.
**Zone 1 Setting:** $Z_{setting1} = 0.85 \times (5 + j15) = (4.25 + j12.75) \Omega$.
**Relay Logic:** Operates instantaneously if $Z_{measured} \leq Z_{setting1}$.

**Case 1: Healthy Condition (No Fault)**
*   Assume a load current of $I_{load} = (100 + j50) A$ at the relay location.
*   Assume a pre-fault voltage of $V_{pre-fault} = (100 + j20) kV$.
*   Measured Impedance (Load): $Z_{load} = \frac{100 \text{ kV} + j20 \text{ kV}}{100 \text{ A} + j50 \text{ A}} \approx (0.267 + j0.267) \text{ k}\Omega/\text{phase}$. This impedance is much smaller than the line impedance and the relay setting, so the relay does not operate.

**Case 2: Fault Condition (Within Zone 1)**
*   Assume a fault occurs at 80% of the line length.
*   The impedance seen by the relay is approximately $Z_{fault} = 0.80 \times (5 + j15) = (4 + j12) \Omega$.
*   The magnitude of the fault impedance is $|Z_{fault}| = \sqrt{4^2 + 12^2} = \sqrt{16 + 144} = \sqrt{160} \approx 12.65 \Omega$.
*   The magnitude of the Zone 1 setting is $|Z_{setting1}| = \sqrt{4.25^2 + 12.75^2} = \sqrt{18.0625 + 162.5625} = \sqrt{180.625} \approx 13.44 \Omega$.
*   Since $|Z_{fault}| \leq |Z_{setting1}|$ (12.65 $\leq$ 13.44), the relay's Zone 1 characteristic is satisfied.
*   **Numerical Relay Operation:**
    1.  Samples voltage and current.
    2.  Filters noise.
    3.  Estimates voltage phasor ($V$) and current phasor ($I$) at the fundamental frequency.
    4.  Calculates measured impedance $Z_{measured} = V/I$.
    5.  Compares $|Z_{measured}|$ with $|Z_{setting1}|$ (and checks directional criteria).
    6.  Since the condition is met, the relay closes its output contact to initiate tripping of the circuit breaker.

---

### **8. Identifying Suitable Protection Schemes (CO1 Alignment)**

*   **Overcurrent Protection:** Suitable for lower voltage distribution systems and feeders where fault currents are significantly higher than load currents. Simple and cost-effective but lacks selectivity for complex networks.
*   **Differential Protection:** Provides very fast and selective protection for transformers, generators, busbars, and short transmission lines. It compares currents entering and leaving a protected zone. Maloperation can occur due to CT mismatch, inrush currents (for transformers), or tap changing.
*   **Distance Protection:** Widely used for transmission lines and high voltage distribution feeders. Offers good selectivity and fault location capabilities. Its performance can be affected by fault resistance, power swings, and load encroachment.

**In the context of Impedance Relays (Distance Protection):**
*   **Transmission Lines:** Primary protection.
*   **Feeder Protection:** For higher voltage feeders in distribution systems.
*   **Busbar Protection:** Can be used, but differential schemes are generally preferred for faster and more secure busbar protection.
*   **Transformers:** Not typically used as primary protection for transformers due to varying impedance ratios and tap changer effects. Differential protection is superior.
*   **Generators:** Differential protection is the preferred method for generator protection.

---

### **9. Developing Protection Schemes (CO2 Alignment)**

*   **Busbars:**
    *   **Differential Protection:** Preferred for high-speed, selective protection. Requires a dedicated protection relay and careful CT zoning.
    *   **Overcurrent/Undervoltage:** Can be used as backup protection, but less secure.
*   **Transformers:**
    *   **Differential Protection:** Primary protection, sensitive to internal faults. Needs to handle tap changer variations and inrush.
    *   **Overcurrent Protection:** Backup protection, set for external faults.
    *   **Buchholz Relay/Gas Actuated Relay:** For internal faults like winding shorts or core faults.
*   **Generators:**
    *   **Differential Protection:** Primary protection for stator winding faults.
    *   **Overcurrent/Negative Sequence Current:** For rotor faults and unbalanced conditions.
    *   **Loss of Excitation Protection:** For excitation system failures.
*   **Motors:**
    *   **Overcurrent Protection:** For overload and short circuit protection.
    *   **Thermal Overload Relays:** Protect against sustained overloads.
    *   **Phase Imbalance (Negative Sequence) Relays:** For unbalanced conditions.
*   **Distribution Systems:**
    *   **Overcurrent Relays (IDMT characteristics):** Widely used for feeders.
    *   **Distance Relays:** For higher voltage distribution feeders.
    *   **Fuse Cutouts:** Simple overcurrent protection for radial feeders.

**Applying Impedance Relays:** For the protection of transmission lines, distance relays are a cornerstone. The development of a scheme involves:
1.  **Line Impedance Calculation:** Accurately determining the impedance per unit length ($Z_{line}$) of the protected line.
2.  **Setting Zones:** Defining the coverage and time delays for Zone 1, Zone 2, and Zone 3 based on system configuration, adjacent line impedances, and coordination requirements.
3.  **Directional Setting:** Ensuring relays operate only for forward faults.
4.  **Characteristic Selection:** Choosing an appropriate operating characteristic (Mho, Quadrilateral) based on line characteristics and expected fault conditions (resistance, loading).
5.  **Coordination with Adjacent Protection:** Ensuring that relays in different zones and on adjacent lines coordinate correctly to achieve selectivity.
6.  **Load Compensation and Power Swing Blocking:** Implementing these features in digital relays to improve reliability.

---

### **10. Emerging Protection Schemes (CO5 Alignment)**

While this topic focuses on impedance relays, it's worth noting that modern protection is evolving. Emerging schemes often leverage digital communication and advanced algorithms:

*   **Communication-Assisted Distance Protection (e.g., Line Current Differential, Scheme 50BF):** Uses communication channels to share current or voltage data between ends of a line. This allows for:
    *   **Line Current Differential:** True differential protection for transmission lines, offering higher speed and security than traditional distance protection.
    *   **Phase Comparison:** Compares current phasors at both ends.
    *   **Permissive/Blocking Schemes:** Faster clearing by using pilot wire communication to confirm fault direction or presence.
*   **Fault Location Algorithms:** More sophisticated algorithms in numerical relays can pinpoint fault locations with high accuracy.
*   **Adaptive Protection:** Relays that can automatically adjust their settings based on system conditions (e.g., load, network configuration, fault resistance) for improved performance.
*   **AI/ML in Protection:** Research into using artificial intelligence and machine learning for fault detection, classification, and adaptive protection strategies.

---

### **Important Points to Remember**

*   Distance relays operate based on the **impedance** between the relay and the fault location.
*   **$Z = V/I$** is the fundamental equation.
*   Distance relays provide **directional** and **distance** based protection.
*   **Zones of protection (Zone 1, 2, 3)** are used to achieve selectivity and provide backup.
*   **Time delays** are essential for coordination between zones.
*   **Fault resistance**, **power swings**, and **load encroachment** are key challenges.
*   **Digital/numerical relays** offer flexibility, accuracy, and advanced features compared to electromechanical relays.
*   **CO1, CO2, CO3, CO4, CO5** highlight the importance of identifying, developing, illustrating, explaining, and inferring protection schemes.

---

### **Practice Questions with Answers**

**Question 1:** A transmission line has an impedance of $10 + j40 \Omega$. A Zone 1 distance relay is set to cover 85% of the line impedance with instantaneous operation. What is the impedance setting for Zone 1?
    *   **Answer:** $Z_{setting1} = 0.85 \times (10 + j40) = (8.5 + j34) \Omega$.

**Question 2:** Why are time delays introduced in Zone 2 and Zone 3 of distance protection?
    *   **Answer:** To ensure selectivity. Zone 1 at the adjacent substation operates first for faults on the next line segment, and Zone 2 and 3 provide backup with increasing time delays to coordinate with other protection devices.

**Question 3:** What is the primary advantage of numerical distance relays over electromechanical impedance relays?
    *   **Answer:** Flexibility in programming characteristics and settings, higher accuracy, and the ability to incorporate additional functions like power swing detection and fault location.

**Question 4:** What is a potential problem with reactance relays regarding load encroachment?
    *   **Answer:** Heavily loaded lines can have a measured impedance that falls within the operating region of a reactance relay, causing maloperation.

**Question 5:** Briefly explain the role of the directional element in a distance relay.
    *   **Answer:** The directional element ensures that the relay operates only for faults occurring in the forward direction (along the protected line) and not for faults occurring in the reverse direction (behind the relay).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Further Reading / References**

*   **Johns, A. T., & Salman, S. K. (1995).** *Digital Protection of Power System.* Peter Peregrinus Ltd, UK. (Chapters on distance relays are crucial).
*   **Phadke, A. G., & Thorpe, J. S. (1988).** *Computer Relaying for Power Systems.* Research Study Press Ltd, John Wiley & Sons, Taunton, UK. (Excellent source for digital relay principles).
*   **Badri Ram, & Viswakarma, D. N. (2011).** *Power System Protection and Switchgear.* Tata McGraw Hill Education, Pvt Edition. (Provides comprehensive coverage of various protection schemes).
*   **Rebizant, W. (2008).** *Digital Signal Processing in Power System Protection and Control.* Springer Publication. (Essential for understanding the signal processing aspects).