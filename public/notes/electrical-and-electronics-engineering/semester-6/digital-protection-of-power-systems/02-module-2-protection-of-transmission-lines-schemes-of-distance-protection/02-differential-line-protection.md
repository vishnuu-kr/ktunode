---
title: "Differential line protection"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3657f"
status: "completed"
scrapedAt: "2026-05-23T16:25:53.270Z"
---
# Digital Protection of Power Systems - Module 2: Protection of Transmission Lines: Schemes of Distance Protection

## Topic: Differential Line Protection

### 1. Introduction and Rationale

Differential protection is a fundamental and highly reliable protection technique extensively used in power systems. For transmission lines, it offers fast and selective fault detection, especially for internal faults.

*   **Core Principle:** Differential protection operates on **Kirchhoff's Current Law (KCL)**. For a protected zone, the sum of currents entering the zone should equal the sum of currents leaving the zone. Any imbalance indicates a fault within the zone.
*   **Application to Transmission Lines:** A transmission line can be considered a protected zone. Current transformers (CTs) are installed at both ends of the line. Ideally, for healthy conditions or external faults, the currents measured by these CTs will be equal in magnitude and phase (after accounting for transformer tap settings and other factors). A significant difference between these currents indicates an internal fault.

### 2. Basic Principles of Differential Line Protection

*   **Current Transformers (CTs):** Essential for sensing line currents at both ends.
    *   CTs at each terminal must have identical or closely matched characteristics.
    *   CTs must be correctly oriented to ensure proper directional comparison of currents.
*   **Relay Operation:**
    *   **Healthy Condition/External Fault:** Currents entering and leaving the protected zone are equal. The differential current ($I_{diff}$) is close to zero.
    *   **Internal Fault:** Currents entering and leaving the protected zone are unequal. The differential current ($I_{diff}$) is significant.
*   **Differential Current ($I_{diff}$):**
    $I_{diff} = I_A - I_B$ (where $I_A$ and $I_B$ are currents measured by CTs at the two ends of the line). In a digital relay, these are often processed phasor quantities.
*   **Operating Principle:** The relay operates when $I_{diff}$ exceeds a predetermined threshold.

### 3. Schemes of Differential Line Protection

#### 3.1 Two-Terminal Differential Protection

This is the most common configuration for transmission lines.

*   **Setup:**
    *   CTs installed at both ends of the transmission line (Line A and Line B).
    *   Pilot wires (for shorter lines) or communication channels (for longer lines) are used to transmit current information from one end to the other.
    *   In modern digital systems, this communication is typically over fiber optic cables, power line carrier (PLC), or microwave links.
*   **Operating Modes:**
    *   **Circulating Current Scheme:** In this older scheme, the CT secondaries are connected in series. The differential current flows through the relay coil. The pilot wires carry this circulating current. However, it suffers from circulating current issues and is less common in modern digital systems.
    *   **Summation Scheme (or Balanced Current Scheme):** This is the more prevalent scheme in digital relays.
        *   Currents from both ends are transmitted to a central location or processed at one end.
        *   The relay compares the two currents.
        *   **Relay Logic:** If $|I_{transmitted} - I_{received}| > I_{threshold}$, trip.
*   **Block Diagram (Summation Scheme):**

    ```
    ---------------------     ---------------------
    | CTs at End A      | --> |  Relay Logic (A)  |
    ---------------------     ---------------------
              |                         |
              | Current (IA)            | Transmit Current (IA')
              V                         V
    ---------------------     ---------------------
    | Communication Link| --> | Relay Logic (B)   | --> Trip Command
    ---------------------     ---------------------
              |                         |
              | Current (IB)            | Received Current (IA')
              V                         V
    ---------------------     ---------------------
    | CTs at End B      | --> |  Relay Logic (B)  |
    ---------------------     ---------------------
    ```

*   **Reference:** Chapters related to differential protection in **Johns & Salman** and **Phadke & Thorpe** provide detailed explanations of these schemes.

#### 3.2 Multi-Terminal Differential Protection (for branched lines)

For lines with intermediate tapping points, a simple two-terminal differential scheme is insufficient.

*   **Challenge:** Faults on a tapping branch will result in current flowing out of the main line at both ends, creating a differential current that could cause incorrect tripping.
*   **Solution:** Extend the differential principle to include all terminals of the protected zone.
    *   CTs at all tapping points are required.
    *   Currents from all ends are collected and compared.
    *   The sum of currents entering the protected zone must equal the sum of currents leaving.
*   **Block Diagram (Conceptual):**

    ```
    End A ---- Line ---- Tap 1 ---- Line ---- Tap 2 ---- Line ---- End B
      |                   |                      |
    CT A                CT T1                  CT T2
      |                   |                      |
    Relay A           Relay T1               Relay T2
    ```
    All relays (or a central processor) receive current information and calculate the differential current for the entire line.

### 4. Digital Implementation of Differential Line Protection

Digital relays process current samples using digital signal processing (DSP) techniques.

*   **Current Sampling and Digitization:** Analog current signals from CTs are sampled at a high frequency and converted into digital values.
*   **Phasor Estimation:** Algorithms like the Fast Fourier Transform (FFT) or other discrete Fourier transform (DFT) methods are used to estimate the magnitude and phase angle of the fundamental frequency current at each end.
*   **Comparison:** The estimated phasors from both ends are compared.
    *   $I_{phasor, A}$ (from End A)
    *   $I_{phasor, B}$ (from End B)
*   **Differential Current Calculation:**
    $I_{diff\_phasor} = I_{phasor, A} - I_{phasor, B}$ (after compensation for transformer taps, voltage transformers, etc.).
*   **Operating Condition:** The relay operates if $|I_{diff\_phasor}|$ exceeds a set threshold.
*   **Reference:** **Waldemar Rebizant's "Digital Signal Processing in Power System Protection and Control"** is an excellent resource for understanding the DSP aspects. **Phadke & Thorpe** also cover digital implementation extensively.

### 5. Restraining and Operating Quantities

To improve security and reliability, differential relays use both operating and restraining quantities.

*   **Operating Quantity:** The differential current ($I_{diff}$). This is the quantity that drives the tripping action.
*   **Restraining Quantity:** Typically the average of the currents at the two ends ($I_{restrain} = (I_A + I_B) / 2$). This quantity is used to stabilize the relay during external faults or through faults.
*   **Operating Characteristic (ld/lr Curve):**
    *   A plot of $I_{diff}$ vs. $I_{restrain}$.
    *   The relay has a characteristic curve that defines the operating region.
    *   **Slope:** The slope of the restraining line is usually set to a value slightly greater than 1 (e.g., 1.1 to 1.2).
    *   **Operation:** The relay operates when the operating point ($I_{diff}$, $I_{restrain}$) crosses the operating characteristic.
    *   **Purpose of Restraint:**
        *   **External Faults:** During faults outside the protected zone, currents $I_A$ and $I_B$ are large and in phase. $I_{diff}$ will be small, and $I_{restrain}$ will be large. The operating point will be far from the tripping region.
        *   **Transformer Tap Changes:** Variations in transformer tap settings can cause a mismatch in currents, generating a small differential current. Restraint prevents spurious tripping.
        *   **CT Mismatch:** Imperfect CTs can lead to small differences in measured currents.
        *   **Saturation:** CT saturation during heavy external faults can lead to a temporary mismatch, which restraint helps to mitigate.
*   **Setting the Slope:** The slope ($m$) is typically set as:
    $I_{diff} \ge k \times I_{restrain}$
    where $k$ is the slope setting.
    Often, the characteristic is defined by two slopes:
    *   A lower slope (e.g., 0.3 to 0.5) for low restraint currents, and
    *   A higher slope (e.g., 1.1 to 1.2) for high restraint currents. This accounts for CT saturation effects.

### 6. Challenges and Considerations in Differential Line Protection

*   **CT Saturation:** This is a significant issue. During severe external faults, the high fault current can cause CT cores to saturate, leading to inaccurate current measurements and a false differential current.
    *   **Mitigation:**
        *   Use high-quality CTs with adequate knee-point voltage.
        *   Implement slope-based restraint characteristics.
        *   Use relaying schemes that are less sensitive to CT saturation (e.g., synchronized phasor comparison).
*   **Pilot Wire Bandwidth and Noise (for older systems):** Limited bandwidth and noise on pilot wires could affect accurate current transmission.
*   **Communication Channel Delay and Bandwidth (for modern systems):** While communication channels are generally more reliable, latency and bandwidth limitations can impact the speed of operation, especially for schemes that rely on synchronized phasor comparison.
*   **Transformer Tap Changer Operation:** Auto-transformer tap changers can introduce current mismatches, requiring appropriate restraint settings.
*   **Shunt Capacitance:** For very long lines, the charging current can be significant and might need to be accounted for in the differential calculation.
*   **Phase Shifting Transformers (PSTs):** If PSTs are used, phase shifts need to be compensated for in the differential current calculation.
*   **Inrush Current (for Transformers, not lines directly but relevant in differential protection context):** While not a direct issue for line differential protection, it's important to distinguish transformer differential protection (which needs to handle inrush) from line differential protection.

### 7. Advanced Digital Differential Schemes

*   **Synchronized Phasor Comparison Schemes:** These schemes overcome the need for pilot wires and are crucial for long transmission lines.
    *   **Principle:** Current phasors are measured at both ends, time-synchronized using GPS (Global Positioning System) or other precise time synchronization methods.
    *   **Process:**
        1.  CTs at each end measure current.
        2.  Local relay estimates current phasor.
        3.  Phasor information is transmitted over a digital communication network (e.g., fiber optic) to the other end or a central processing unit.
        4.  The difference between synchronized phasors is calculated.
        5.  If the difference exceeds a threshold, a trip is issued.
    *   **Advantages:** No pilot wires required, high security against CT saturation and communication asymmetry, fast operation.
    *   **References:** **Phadke & Thorpe** and **Johns & Salman** discuss these advanced schemes. **Badri Ram & Viswakarma** also cover advancements in protection.
    *   **CO Alignment:** This directly relates to CO1 (identify relay protection scheme) and CO3 (illustrate numerical relay operation).

### 8. Settings and Coordination

*   **Threshold Settings:** The pick-up current for differential current is set based on the normal load currents and security considerations.
*   **Restraining Slope:** Determined to ensure security against external faults and CT saturation, while maintaining sensitivity for internal faults.
*   **Coordination:** Differential protection is typically zone-based and does not require coordination with other relays in the same zone. It provides absolute discrimination within its protected zone.

### 9. Summary of Key Features

*   **High Speed:** Operates very fast for internal faults.
*   **High Sensitivity:** Can detect even low-magnitude internal faults.
*   **Absolute Discrimination:** Selectively protects a defined zone without needing coordination with adjacent relays.
*   **Limited by Communication:** Requires a reliable communication channel for multi-terminal or long-line protection.
*   **Susceptible to CT Saturation:** Requires careful CT selection and appropriate relay characteristics.

---

### Practice Questions and Exercises

**Question 1:** Explain the fundamental principle of differential protection as applied to transmission lines.
**Answer:** Differential protection operates on Kirchhoff's Current Law. It compares the current entering a protected zone (transmission line) with the current leaving it. If these currents are significantly different, it indicates a fault within the zone, and the relay initiates a trip.

**Question 2:** What are the two primary types of differential line protection schemes based on the connection of CT secondaries? Which is more common in modern digital relays and why?
**Answer:** The two schemes are the Circulating Current Scheme and the Summation Scheme (Balanced Current Scheme). The Summation Scheme is more common in modern digital relays because it is less susceptible to circulating currents and allows for easier implementation of advanced features and digital processing.

**Question 3:** Describe the role of the restraining quantity in a differential line protection relay. How does it improve security?
**Answer:** The restraining quantity (typically the average of the currents at the line ends) is used to stabilize the relay. It prevents spurious tripping during external faults, CT saturation, or minor current imbalances due to transformer tap changes or CT inaccuracies. The relay operates only when the differential current exceeds a certain multiple of the restraining current, as defined by the operating characteristic.

**Question 4:** What is the primary challenge faced by differential line protection, and what are common methods to mitigate it?
**Answer:** The primary challenge is CT saturation during severe external faults. Mitigation methods include using high-quality CTs with adequate knee-point voltage, implementing slope-based restraining characteristics, and using synchronized phasor comparison schemes.

**Question 5:** How do synchronized phasor comparison schemes improve differential line protection for long transmission lines?
**Answer:** Synchronized phasor comparison schemes eliminate the need for pilot wires by measuring current phasors at both ends, synchronizing them using GPS, and then comparing these synchronized phasors. This greatly improves security, eliminates pilot wire issues, and allows for fast and reliable protection over long distances using digital communication channels.

---

### Important Points to Remember

*   **KCL is the core:** Always remember the principle of current summation.
*   **CTs are critical:** Their performance directly impacts the relay's operation.
*   **Restraint is for security:** It prevents false trips.
*   **CT saturation is the enemy:** It leads to incorrect differential current calculation.
*   **Digital relays process phasors:** They use DSP for accurate current measurement.
*   **Communication is key:** For lines longer than a few kilometers, communication channels are essential.
*   **Synchronized phasor comparison:** The modern approach for long lines.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textual References and CO Alignment

*   **Johns & Salman (1995):** Provides foundational understanding of differential protection principles, schemes, and practical considerations. Directly supports **CO1**.
*   **Phadke & Thorpe (1988):** Offers deep insights into the digital implementation of protective relays, including differential schemes, and discusses advanced techniques like synchronized phasor comparison. Supports **CO1**, **CO3**, **CO4**.
*   **Badri Ram & Viswakarma (2011):** Covers a broad range of power system protection, including detailed sections on differential protection for lines and transformers, and advancements in numerical relays. Supports **CO1**, **CO3**.
*   **Rebizant (2008):** Focuses on DSP in power system protection, explaining the algorithms used for phasor estimation and comparison in digital relays. Crucial for understanding digital implementation. Supports **CO3**, **CO4**.

This topic is fundamental to **CO1** as it directly addresses the identification and understanding of a core relay protection scheme. The digital implementation aspects are key to **CO3** and **CO4**. Advancements like synchronized phasor comparison relate to **CO5**.