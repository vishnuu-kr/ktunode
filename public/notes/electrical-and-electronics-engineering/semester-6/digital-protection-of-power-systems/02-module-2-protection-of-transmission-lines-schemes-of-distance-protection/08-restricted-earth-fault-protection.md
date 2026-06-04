---
title: "Restricted Earth Fault Protection"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36585"
status: "completed"
scrapedAt: "2026-05-23T16:25:57.959Z"
---
# Digital Protection of Power Systems: Module 2 - Protection of Transmission Lines: Schemes of Distance Protection

## Topic: Restricted Earth Fault Protection

---

### 1. Introduction to Restricted Earth Fault (REF) Protection

Restricted Earth Fault (REF) protection is a specialized form of differential protection used for the protection of windings of **generators, transformers, and rotating machines** against **phase-to-ground faults** that are confined to that specific equipment. It is *not* a primary protection scheme for transmission lines themselves, but rather for equipment connected to transmission lines, particularly at substations. This topic, while within the broader context of transmission line protection schemes, focuses on a crucial protection application for the connected plant.

**Key Concept:** REF protection relies on the principle of **Kirchhoff's Current Law (KCL)**, similar to phase differential protection. It compares the sum of currents entering and leaving a protected zone.

**Relevance to Transmission Lines:** While not a transmission line protection scheme itself, REF is critical for protecting the **terminal equipment** (e.g., generator step-up transformers, unit transformers) connected to the transmission system. A fault within this equipment can have severe consequences for the stability and operation of the transmission network.

---

### 2. Principle of Operation

The fundamental principle of REF protection is to detect imbalances in currents that would indicate an internal fault within the protected zone.

*   **Protected Zone:** The zone of protection is defined by the current transformers (CTs) installed on the machine winding and the neutral end.
*   **Ideal Operation (No Fault):**
    *   For a healthy machine, the sum of currents entering the protected zone should equal the sum of currents leaving it.
    *   In a typical generator or transformer connection, the current entering the winding is measured by CTs in the phase conductors.
    *   The current leaving the protected zone is typically the neutral current.
    *   In a star winding with the neutral point brought out and grounded through a CT, the sum of the phase currents should ideally be equal to the neutral current under healthy conditions.
*   **Fault Condition (Internal Earth Fault):**
    *   If an earth fault occurs within the protected zone (e.g., winding to ground), the current flowing through the neutral CT will not be equal to the sum of the phase currents.
    *   This difference in currents (a "restraining" current and an "operating" current) generates an imbalance.
    *   When this imbalance exceeds a predetermined threshold, the REF relay operates to trip the associated circuit breakers.

**Mathematical Representation:**

For a star winding with neutral brought out:

*   **Healthy Condition:** $I_A + I_B + I_C \approx I_N$ (where $I_A, I_B, I_C$ are phase currents and $I_N$ is neutral current). The difference $I_{op} = |(I_A + I_B + I_C) - I_N|$ is small.
*   **Internal Earth Fault:** $I_{op} = |(I_A + I_B + I_C) - I_N| > \text{pickup value}$.

---

### 3. Configurations and CT Placement

The effectiveness of REF protection depends critically on the correct placement of CTs.

*   **Star Winding with Neutral Brought Out:** This is the most common configuration.
    *   **CTs:** CTs are placed in each phase conductor ($CT_A, CT_B, CT_C$) and in the neutral conductor ($CT_N$).
    *   **Connection:** All these CTs are connected in **series** to the REF relay.
    *   **Operation:**
        *   When no fault exists, the vector sum of phase currents is equal to the neutral current. The CTs are connected such that their secondary currents cancel each other out, resulting in zero or very low current flowing through the relay operating coil.
        *   During an internal earth fault, the neutral current increases significantly, and the vector sum of phase currents does not balance the neutral current. This creates a circulating current through the relay, causing it to operate.

*   **Star Winding with Neutral Resistance:**
    *   If a neutral resistor is used, the REF scheme might need adjustments. The resistor limits the fault current. The REF scheme will still detect the imbalance, but the magnitude of the fault current will be lower.

*   **Delta Winding:** REF protection is not directly applicable to delta windings as there is no neutral point. Phase differential protection is typically used for delta windings.

**Example:** Consider a generator with a star winding. CTs are placed in lines R, Y, and B, and also in the neutral connection. These four CT secondaries are connected in series to the REF relay. If a fault occurs between winding phase R and ground, current flows from the R phase, through the fault, to ground, and returns through the neutral. The neutral CT will see this current, while the R phase CT will see a reduced current due to the fault. The Y and B phase CTs will see normal or slightly disturbed currents. The imbalance between the sum of phase currents and the neutral current will operate the relay.

---

### 4. Types of Restricted Earth Fault Protection Schemes

There are variations of REF schemes depending on the desired sensitivity and application.

*   **Simple Series Connection (Line vs. Neutral):** This is the most basic form where phase CTs and neutral CTs are directly connected in series.
*   **Percentage-Restrained REF:**
    *   This is a more sophisticated scheme that provides a degree of **restraint** to prevent spurious operation due to through faults or CT saturation.
    *   The operating current (difference between currents) is compared to a **restraining current** (typically the sum of phase currents or the neutral current, or a combination).
    *   The relay operating characteristic is often expressed as: $I_{op} > k \cdot I_{rest} + I_{pickup}$, where:
        *   $I_{op}$ is the operating current (imbalance).
        *   $I_{rest}$ is the restraining current.
        *   $k$ is the slope or characteristic of the relay.
        *   $I_{pickup}$ is the minimum pickup setting.
    *   This scheme is more sensitive to internal faults than to external faults because through faults tend to create balanced currents, leading to high restraining currents and low operating currents.

*   **Sum-of-Phases vs. Neutral Schemes:**
    *   Some schemes connect the sum of phase currents (or their CT secondaries) in opposition to the neutral current.
    *   Others might use the neutral current as the primary operating quantity and phase currents as restraint.

---

### 5. Advantages of REF Protection

*   **High Sensitivity:** Can detect very low magnitude earth faults within the protected zone that might not be detected by overcurrent or even phase differential protection. This is crucial for preventing damage to windings due to prolonged exposure to fault currents.
*   **Selectivity:** Highly selective for internal earth faults, minimizing the risk of maloperation for external faults or through faults.
*   **Simplicity (Basic Schemes):** The basic series connection of CTs is relatively simple to implement.
*   **Protection of Specific Equipment:** Ideal for protecting expensive and critical equipment like generators and transformers.

---

### 6. Disadvantages and Limitations

*   **CT Mismatch:** Requires accurately matched CTs (ratio and saturation characteristics) to avoid spurious operation during through faults. Mismatched CTs can lead to a small current imbalance even under healthy conditions.
*   **CT Saturation:** During severe external faults or system disturbances, CTs can saturate, leading to inaccurate current measurements and potential maloperation of the REF relay. Percentage restraint helps mitigate this.
*   **Neutral Grounding:** Only applicable to windings where the neutral point is accessible. Not suitable for effectively grounded systems where the neutral is not directly brought out or is solidly grounded without a dedicated neutral CT.
*   **CT Failure:** A CT failure in any of the connected phases or the neutral can lead to maloperation. This is a significant concern.
*   **Zero Sequence Current Injection:** If a zero-sequence current is injected for testing or during specific system conditions, it can cause maloperation if not accounted for in the relay design.

---

### 7. Digital Implementation of REF Protection

In digital relays, the principles remain the same, but the implementation uses digital signal processing.

*   **Sampling:** Analog current signals from CTs are sampled at high frequencies.
*   **Quantization:** Sampled values are converted into digital form.
*   **Digital Filtering:** Digital filters are applied to remove noise and extract fundamental frequency components.
*   **Algorithm:**
    *   The relay calculates the vector sum of phase currents: $I_{sum} = I_A + I_B + I_C$.
    *   It also measures the neutral current: $I_N$.
    *   The operating current is calculated as the difference: $I_{op} = |I_{sum} - I_N|$.
    *   The restraining current is calculated, often as $|I_N|$ or $|I_{sum}|$.
    *   The relay compares $I_{op}$ against the set threshold, incorporating restraint characteristics if used.
*   **Advantages of Digital REF:**
    *   **Sophisticated Algorithms:** Can implement complex restraint characteristics for improved security.
    *   **Self-Monitoring:** Digital relays can monitor CT health and internal circuitry.
    *   **Flexibility:** Settings can be easily adjusted.
    *   **Event Recording:** Provides detailed fault records.

**Reference:** Phadke and Thorpe (1988) extensively discuss the digital implementation of various protection schemes, including differential and earth-fault protection, detailing signal processing techniques and algorithms. Rebizant (2008) also delves into DSP methods applied to power system protection, which would cover the digital processing of currents for schemes like REF.

---

### 8. Application and Settings

*   **Generator Protection:** REF is a primary protection for generators against internal winding-to-ground faults. It provides fast and sensitive detection.
*   **Transformer Protection:** Used for protecting the windings of transformers, especially star-connected windings where the neutral is accessible.
*   **Motor Protection:** Applied to larger motors with accessible neutrals.
*   **Settings:**
    *   **Pickup Setting:** The minimum fault current required to initiate operation. This is set slightly above the maximum possible unbalanced current due to CT mismatch or system conditions.
    *   **Restraining Slope/Characteristic:** Defines the ratio of operating current to restraining current required for operation. A steeper slope implies higher sensitivity but also increases the risk of maloperation.
    *   **Time Delay:** Usually set for instantaneous operation for internal faults, but a short intentional delay might be added for coordination or to avoid nuisance tripping during transient conditions.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of Restricted Earth Fault (REF) protection?
(a) To protect transmission lines against phase-to-ground faults.
(b) To protect generator and transformer windings against internal phase-to-ground faults.
(c) To protect busbars against all types of faults.
(d) To protect transmission lines against phase-to-phase faults.

**Answer:** (b)

**Question 2:**
Which principle of operation is fundamental to REF protection?
(a) Ohm's Law
(b) Kirchhoff's Current Law (Differential Principle)
(c) Faraday's Law of Induction
(d) Lenz's Law

**Answer:** (b)

**Question 3:**
For a star-connected winding with its neutral brought out and grounded through a CT, describe how the REF relay operates during an internal phase-to-ground fault.

**Answer:** During an internal phase-to-ground fault, the current flowing from the phase conductor into the fault and returning through the neutral will cause an imbalance. The CT in the neutral conductor will measure this fault current. The CTs in the faulted phase conductor will measure a reduced current (or zero if the fault is directly on the phase terminal). The vector sum of phase currents will not equal the neutral current. This imbalance creates a circulating current in the secondary circuit of the CTs connected to the REF relay, causing it to operate and trip the circuit breaker.

**Question 4:**
What is a significant limitation of REF protection related to CT performance?
(a) Over-sensitivity to external faults.
(b) Inability to detect low magnitude faults.
(c) CT mismatch and saturation can lead to maloperation.
(d) Requires complex signaling between relays.

**Answer:** (c)

**Question 5:**
Explain the role of the "restraining current" in a percentage-restrained REF scheme.

**Answer:** The restraining current provides a form of supervision for the operating current. It is typically derived from the magnitude of currents flowing normally through the protected zone (e.g., the neutral current or the sum of phase currents). By making the relay's operation dependent on the ratio of operating current to restraining current ($I_{op} / I_{rest}$), the scheme becomes less prone to maloperation during through faults. During through faults, both phase and neutral currents are relatively balanced, resulting in a high restraining current and a low operating current, thus preventing tripping. Conversely, an internal fault significantly increases the operating current while the restraining current might not increase proportionally, leading to operation.

---

### 10. Important Points to Remember

*   **REF is for Equipment Windings, Not Transmission Lines Directly.**
*   **Principle is Differential (KCL) applied to phase and neutral currents.**
*   **Requires accessible neutral point and properly placed CTs.**
*   **High sensitivity to internal earth faults.**
*   **Crucial for protecting generators and transformers.**
*   **Percentage restraint is vital for security against through faults and CT saturation.**
*   **CT mismatch and failure are critical failure modes to consider.**
*   **Digital relays offer advanced algorithms and improved security for REF.**

---

### 11. Alignment with Course Outcomes

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   This topic clearly identifies REF as a **differential** protection scheme, specifically applied to equipment windings rather than transmission lines themselves.
*   **CO2: Develop the protection scheme for bus bars, transformers, generators, motors and distribution systems using appropriate protective relays.**
    *   REF is a key scheme for protecting **generators, transformers, and motors**. Understanding its application helps in developing comprehensive protection schemes for these assets.
*   **CO3: Illustrate the operation of a numerical relay.**
    *   The discussion on digital implementation of REF, involving sampling, filtering, and algorithms, illustrates how numerical relays perform this protection function.
*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   The digital implementation section touches upon sampling, filtering, and calculation of operating and restraining quantities, which are core signal processing concepts.
*   **CO5: Infer emerging protection schemes in power systems.**
    *   While REF is a traditional scheme, its digital implementation and advanced algorithms represent the evolution of protection systems. The discussion of percentage restraint and sophisticated algorithms points towards the continuous development in protection technology.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 12. References

*   **Johns, A. T., & Salman, S. K. (1995).** *Digital Protection of Power System.* Peter Peregrinus Ltd, UK.
    *   *This textbook provides foundational knowledge on digital relaying principles and various protection schemes, likely including detailed descriptions of differential protection and its variations like REF.*
*   **Phadke, A. G., & Thorpe, J. S. (1988).** *Computer Relaying for Power Systems.* Research study press Ltd, John Wiley & Sons, Taunton, UK.
    *   *This is a seminal work on computer-based relaying. It will offer in-depth explanations of the algorithms, signal processing techniques, and implementation details for schemes like REF.*
*   **Ram, B., & Viswakarma, D. N. (2011).** *Power System Protection and Switchgear.* Tata McGraw Hill Education, Pvt Edition.
    *   *This book is a comprehensive resource for power system protection. It is expected to cover various protection schemes, including REF, with practical aspects and applications.*
*   **Rebizant, W. (2008).** *Digital Signal Processing in Power System Protection and Control.* Springer Publication.
    *   *This text is highly relevant for understanding the "how" of digital protection, focusing on the DSP aspects of algorithms used in numerical relays, which would apply to the digital implementation of REF.*

---