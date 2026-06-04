---
title: "differential protection: High impedance and low impedance differential protection schemes"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36583"
status: "completed"
scrapedAt: "2026-05-23T16:25:56.301Z"
---
# Digital Protection of Power Systems

## Module 2: Protection of Transmission Lines: Schemes of Distance Protection

### Topic: Differential Protection: High Impedance and Low Impedance Differential Protection Schemes

This module delves into the crucial area of differential protection, a fundamental technique used for safeguarding power system equipment like transformers, generators, and busbars. We will specifically focus on its application in transmission lines and differentiate between high impedance and low impedance differential schemes.

---

### 1. Introduction to Differential Protection

**Key Concepts:**

*   **Principle of Kirchhoff's Current Law (KCL):** In an *unfaulted* condition, the sum of currents entering a protected zone should equal the sum of currents leaving it. For a protected zone, the net current entering or leaving should ideally be zero.
*   **Protective Zone:** Differential protection defines a specific zone of equipment or a section of a power line. Protection is provided by comparing currents at the boundaries of this zone.
*   **Operating Principle:** A differential relay compares the current entering a protected zone with the current leaving it. During an *internal fault* (within the protected zone), there will be a significant difference between these currents. This difference, known as the **differential current**, causes the relay to operate and trip the circuit breakers at both ends of the protected zone. During *external faults* (outside the protected zone), the currents at both ends, after accounting for any current transformers (CTs) ratio differences and tap settings, should ideally balance, resulting in a zero or very small differential current, thus preventing spurious tripping.

**Learning Outcomes Addressed:**

*   **CO1 (K3):** Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (Differential protection is identified as a primary scheme for internal fault detection.)

---

### 2. Differential Protection for Transmission Lines

While differential protection is commonly associated with transformers and generators, its application to transmission lines is also important, especially for shorter lines or specific sections where precise fault location is paramount.

**Key Concepts:**

*   **Protected Zone:** Typically, a differential protection scheme for a transmission line covers the line section itself, from one terminal to the other.
*   **Current Transformers (CTs):** CTs are essential for measuring the currents at both ends of the transmission line. The CTs must be precisely matched in ratio and performance characteristics to ensure accurate current comparison.
*   **Relay Location:** The differential relay is usually located at one of the line terminals.

**How it Works (Simplified):**

1.  CTs at both ends of the transmission line measure the line currents (say, $I_A$ at end A and $I_B$ at end B).
2.  These currents are fed to the differential relay.
3.  The relay calculates the differential current: $I_{diff} = I_A - I_B$ (or $I_B - I_A$, depending on the relay configuration and current direction).
4.  If $I_{diff}$ exceeds a predetermined threshold (operating threshold), the relay operates.

**Limitations for Transmission Lines:**

*   **CT Mismatch:** CTs, even of the same ratio, have slight differences in their characteristics, which can lead to a small residual current even during normal conditions or external faults. This is known as **CT inaccuracy** or **zero-sequence current**.
*   **Through-Fault Current:** During external faults, large currents flow through the line. CT saturation can occur, leading to an apparent difference in currents even if there's no internal fault.
*   **Load Transfer:** In a meshed network, load can be transferred through a line, creating circulating currents that need to be accounted for.
*   **Line Charging Current:** Capacitive charging current of long transmission lines can contribute to the differential current, especially during light load conditions or open-ended lines, potentially causing maloperation.

**Textbook References:**

*   **Johns & Salman (1995):** Chapter on differential protection, discussing its principles and applications.
*   **Phadke & Thorpe (1988):** Covers the digital implementation and algorithms for differential protection.
*   **Badri Ram & Viswakarma (2011):** Provides a comprehensive overview of protective relaying, including differential schemes.

---

### 3. Types of Differential Protection Schemes

Differential protection schemes are broadly categorized based on the impedance between the protected zone and the relaying point.

#### 3.1. Low Impedance Differential Protection

This is the most common type of differential protection and is characterized by having the differential relay connected directly to the secondary windings of the CTs.

**Key Concepts:**

*   **Low Impedance Relay:** The relay itself has a very low impedance.
*   **CT Interconnection:** CTs at both ends of the protected zone are connected in a differential manner, with their secondary windings brought to a common relaying point.
*   **Differential Current Flow:** The differential current flows through the low impedance of the relay coil.
*   **Operation:** If the differential current ($I_{diff}$) is greater than the relay's pick-up setting, the relay operates.

**Circuit Configuration (Simplified Example for a two-ended line):**

```
   End A --- CT_A --- Relay --- CT_B --- End B
           |         |         |
           |_________|_________|  (Common connection point)
```

*   Current $I_A$ from CT_A and $I_B$ from CT_B are compared.
*   If $I_A \neq I_B$, a differential current $I_{diff} = I_A - I_B$ flows through the relay.

**Advantages:**

*   **High Sensitivity:** Very sensitive to small internal fault currents.
*   **Fast Operation:** Typically provides very fast tripping.
*   **Simple Implementation:** Conceptually straightforward.

**Disadvantages:**

*   **CT Mismatch Issues:** Highly susceptible to CT ratio and saturation errors, requiring sophisticated blocking or restraining techniques.
*   **Circulating Current:** During external faults, even small differences in CT performance can lead to circulating current through the relay, potentially causing maloperation if not properly compensated.
*   **Not Suitable for Long Lines:** Due to the accumulation of errors over long distances and the need for high CT accuracy, it's less preferred for very long transmission lines compared to other schemes.

**Textbook References:**

*   **Johns & Salman (1995):** Detailed discussion on low impedance differential protection and its limitations.
*   **Phadke & Thorpe (1988):** Focuses on the digital algorithms used to mitigate CT mismatch issues in low impedance schemes.

#### 3.2. High Impedance Differential Protection

This scheme is characterized by a high impedance relay connected in series with the CT secondary circuit. The CTs are connected in a way that the differential current is forced to flow through this high impedance.

**Key Concepts:**

*   **High Impedance Relay:** The relay has a very high impedance, often a voltage-sensitive relay.
*   **CT Connection:** CTs at both ends of the protected zone are connected in a way that their secondary terminals are directly paralleled or connected in a differential configuration. The protective zone is defined by these CTs.
*   **Voltage Generation:** During an internal fault, the difference in currents causes a net current ($I_{diff}$) to flow. This $I_{diff}$ flows through the high impedance of the relay, generating a voltage ($V_{diff} = I_{diff} \times Z_{relay}$).
*   **Operation:** When the generated voltage $V_{diff}$ exceeds the relay's pick-up voltage setting, the relay operates.

**Circuit Configuration (Simplified Example for a two-ended line):**

```
   End A --- CT_A --- Relay --- CT_B --- End B
           |         |         |
           |_________|_________|  (Parallel connection of CT secondaries)
                     |
                     Z_relay (High Impedance)
```

*   CT_A and CT_B secondaries are connected in parallel.
*   The differential current $I_{diff}$ flows through $Z_{relay}$.
*   $V_{diff} = I_{diff} \times Z_{relay}$ is sensed by the relay.

**Advantages:**

*   **Less Sensitive to CT Mismatch:** The high impedance means that even with some CT inaccuracies, the resulting circulating current through the relay is usually small, leading to less risk of maloperation due to CT differences.
*   **Reduced CT Saturation Impact:** Less prone to maloperation due to CT saturation during external faults compared to low impedance schemes because the fault current diversion is less impactful on the differential voltage.
*   **Simpler CT Requirements:** Generally, the CTs do not need to be as precisely matched as in low impedance schemes.
*   **Suitable for Shorter Lines and Busbars:** Often employed for shorter transmission lines, busbars, and switchgear where the cost-effectiveness and simpler CT requirements are beneficial.

**Disadvantages:**

*   **Requires High CT Short-Circuit Current Capability:** The CTs must be able to supply sufficient fault current to generate the required voltage across the high impedance relay.
*   **Slower Operation (potentially):** The reliance on voltage generation can sometimes lead to slightly slower operation compared to low impedance schemes, especially if the fault current is not very high.
*   **Coordination with Ground Fault Protection:** Requires careful consideration for coordinating with ground fault protection schemes.

**Textbook References:**

*   **Johns & Salman (1995):** Provides detailed explanations of high impedance differential protection principles and applications.
*   **Badri Ram & Viswakarma (2011):** Discusses the practical aspects and advantages of high impedance schemes.

---

### 4. Digital Implementation of Differential Protection

With the advent of digital relays, the implementation of differential protection has become more sophisticated, incorporating advanced algorithms to overcome the limitations of electromechanical relays.

**Key Concepts:**

*   **Digital Relays:** Microprocessor-based relays that sample analog current signals, process them using digital algorithms, and then make decisions.
*   **Digital Signal Processing (DSP):** Techniques like Fourier analysis (e.g., Fast Fourier Transform - FFT) are used to extract the fundamental frequency component of the current, filtering out harmonics and DC offsets that can arise during faults.
*   **Phasor Estimation:** Digital relays estimate the magnitude and phase angle of the current phasors at each terminal.
*   **Restraining and Operating Quantities:**
    *   **Operating Quantity:** The differential current ($I_{diff} = I_A - I_B$).
    *   **Restraining Quantity:** Typically, the average of the currents entering the zone ($I_{restrain} = (I_A + I_B)/2$). This quantity is used to stabilize the relay during external faults.
*   **Biased Differential Protection:** The operating characteristic is defined by a slope (or bias) in the $I_{diff}$ vs. $I_{restrain}$ plane.
    *   **Slope:** A higher slope increases the operating threshold for a given restraining current.
    *   **Operation Criterion:** The relay operates when $I_{diff} > k_1 \times I_{restrain} + I_{setting}$, where $k_1$ is the slope and $I_{setting}$ is a minimum pickup setting.

**Digital Algorithm Example (Two-terminal line):**

1.  **Sampling:** Sample currents $i_A(t)$ and $i_B(t)$ at both ends.
2.  **Phasor Calculation:** Use algorithms (e.g., FFT) to compute the fundamental frequency phasors $I_A$ and $I_B$.
3.  **Current Transformation (if needed):** Apply CT ratios and any tap settings to normalize the currents to a common base.
4.  **Calculate Differential and Restraining Currents:**
    *   $I_{diff} = I_A - I_B$
    *   $I_{restrain} = (I_A + I_B) / 2$
5.  **Apply Biased Characteristic:** Compare $|I_{diff}|$ with the threshold defined by the biased characteristic.
    *   $|I_{diff}| > \text{Threshold}(|I_{restrain}|)$
6.  **Decision:** If the threshold is exceeded, trip the circuit breakers.

**Learning Outcomes Addressed:**

*   **CO3 (K2):** Illustrate the operation of a numerical relay. (Digital differential protection is a prime example.)
*   **CO4 (K2):** Explain signal processing methods and algorithms in digital protection. (FFT, phasor estimation, biased characteristics are key.)

**Textbook References:**

*   **Phadke & Thorpe (1988):** Chapters on digital relaying algorithms, including detailed explanations of differential protection techniques.
*   **Rebizant (2008):** Focuses on DSP in power system protection and control, offering insights into advanced algorithms for differential protection.

---

### 5. Practical Considerations and Challenges

*   **CT Saturation:** A major challenge in all differential schemes. Digital relays use sophisticated algorithms to detect and mitigate the effects of CT saturation, often by comparing the rate of change of current or by using multiple frequency components.
*   **CT and VT (Voltage Transformer) Mismatch:** Differences in CT ratios, accuracy classes, and burden can lead to errors.
*   **Communication Delay:** For line differential protection spanning longer distances, communication links between terminals are required. Delays in communication can impact tripping times and require compensation.
*   **Zero Sequence Current:** Can cause issues in three-phase differential schemes, especially during ground faults. Filtering or specific logic is used to handle this.
*   **Load Current Compensation:** For very sensitive schemes, the influence of load current on the differential current might need compensation.
*   **Inrush Current (Transformers):** During transformer energization, a large DC offset and harmonics are present, which can saturate CTs and lead to maloperation. Digital relays use harmonic restraint (e.g., 2nd and 5th harmonics) and blocking schemes to prevent tripping during inrush. While this topic is more focused on transformer differential, it's a critical aspect to be aware of when discussing differential protection in general.

**Learning Outcomes Addressed:**

*   **CO1 (K3):** Differential protection schemes have specific operating principles and limitations that influence their suitability for different applications.
*   **CO5 (K3):** Understanding these challenges leads to the need for advanced or emerging protection schemes that can better address them.

---

### 6. Practice Questions and Exercises

**Question 1:** Explain the fundamental principle of differential protection and how it applies to protecting a power system element.
    *   **Answer:** Differential protection relies on Kirchhoff's Current Law. In an unfaulted state, the current entering a protected zone equals the current leaving it. A differential relay measures these currents and operates only when there's a significant difference, indicating an internal fault.

**Question 2:** Differentiate between high impedance and low impedance differential protection schemes. Mention at least two advantages and two disadvantages of each.
    *   **Answer:**
        *   **Low Impedance:**
            *   **Principle:** Relay is connected in series with CT secondaries, experiencing differential current directly.
            *   **Advantages:** High sensitivity, fast operation.
            *   **Disadvantages:** Sensitive to CT mismatch and saturation, not ideal for long lines.
        *   **High Impedance:**
            *   **Principle:** High impedance relay connected in parallel with CT secondaries, sensing differential voltage.
            *   **Advantages:** Less sensitive to CT mismatch and saturation, simpler CT requirements.
            *   **Disadvantages:** Requires high CT short-circuit current capability, potentially slower operation.

**Question 3:** How do digital relays improve upon traditional differential protection schemes, particularly concerning CT saturation?
    *   **Answer:** Digital relays use DSP algorithms like FFT to extract fundamental frequency phasors, reducing the impact of harmonics and DC offsets. They can also implement algorithms that detect CT saturation by analyzing the rate of change of current or by comparing multiple frequency components, allowing for more reliable operation during external faults.

**Question 4:** For a two-terminal transmission line protected by a digital differential relay, if the currents measured at terminals A and B are $I_A = 50 \angle 30^\circ$ A and $I_B = 52 \angle 25^\circ$ A (after CT ratio correction), what are the differential and restraining currents? Assume these are primary values.
    *   **Solution:**
        *   $I_A = 50 (\cos 30^\circ + j \sin 30^\circ) = 50 (0.866 + j 0.5) = 43.3 + j 25$ A
        *   $I_B = 52 (\cos 25^\circ + j \sin 25^\circ) = 52 (0.906 + j 0.423) = 47.11 + j 21.996$ A
        *   Differential Current: $I_{diff} = I_A - I_B = (43.3 - 47.11) + j (25 - 21.996) = -3.81 + j 3.004$ A
        *   Magnitude of Differential Current: $|I_{diff}| = \sqrt{(-3.81)^2 + (3.004)^2} \approx \sqrt{14.516 + 9.024} \approx \sqrt{23.54} \approx 4.85$ A
        *   Restraining Current: $I_{restrain} = (I_A + I_B) / 2 = (43.3 + 47.11)/2 + j (25 + 21.996)/2 = 90.41/2 + j 46.996/2 = 45.205 + j 23.498$ A
        *   Magnitude of Restraining Current: $|I_{restrain}| = \sqrt{(45.205)^2 + (23.498)^2} \approx \sqrt{2043.49 + 552.16} \approx \sqrt{2595.65} \approx 50.95$ A
        *   **(Note:** For a biased characteristic, we would then compare $|I_{diff}|$ with a threshold based on $|I_{restrain}|$. If $|I_{diff}|$ exceeds this threshold, the relay operates.)

**Question 5:** What is the role of the restraining quantity in a biased differential protection scheme?
    *   **Answer:** The restraining quantity, typically the average of the currents entering the protected zone, is used to stabilize the relay. It increases with higher through-fault currents, thereby increasing the operating threshold of the differential current. This prevents the relay from operating due to CT inaccuracies or saturation during external faults, while still ensuring sensitivity to internal faults.

---

### 7. Important Points to Remember

*   **Zone Definition:** Differential protection is highly dependent on correctly defining the protected zone and ensuring all currents entering/leaving are measured.
*   **CT Accuracy:** Precise CT performance is critical for differential schemes, especially low impedance ones.
*   **CT Saturation:** A persistent challenge that requires robust detection and mitigation techniques in digital relays.
*   **Biased Characteristics:** Essential for providing a stable characteristic against through-faults and ensuring sensitivity to internal faults.
*   **Digital Advantages:** DSP and advanced algorithms in digital relays significantly enhance the performance, reliability, and security of differential protection.
*   **Application Specific:** The choice between high impedance and low impedance schemes depends on the specific application (line length, cost, system characteristics).

---
This comprehensive set of notes covers the essential aspects of differential protection, including its fundamental principles, the distinctions between high and low impedance schemes, and the advancements brought about by digital technology. The inclusion of textbook references and practice questions aims to solidify understanding and meet the specified learning outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
