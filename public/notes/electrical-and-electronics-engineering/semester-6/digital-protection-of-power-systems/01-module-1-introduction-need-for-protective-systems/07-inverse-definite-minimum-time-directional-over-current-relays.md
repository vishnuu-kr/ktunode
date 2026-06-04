---
title: "inverse Definite Minimum time - directional over current relays"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36577"
status: "completed"
scrapedAt: "2026-05-23T16:25:48.041Z"
---
# Digital Protection of Power Systems: Module 1 - Introduction: Need for Protective Systems

## Topic: Inverse Definite Minimum Time (IDMT) - Directional Overcurrent Relays

---

### 1. Introduction: Need for Protective Systems in Power Systems

Protective systems are the guardians of power systems, ensuring their reliable and safe operation. They are designed to detect abnormal conditions such as short circuits, overloads, and ground faults and to isolate the faulty section quickly to prevent damage to equipment and to maintain the stability of the rest of the system.

**Key Concepts:**

*   **Abnormal Conditions:** Faults (short circuits, ground faults), overloads, voltage disturbances, frequency deviations.
*   **Objectives of Protection:**
    *   **Safety:** Protect personnel from electric shock and equipment from damage.
    *   **Reliability:** Minimize the extent and duration of power outages by isolating faults rapidly.
    *   **Continuity of Service:** Ensure uninterrupted power supply to healthy parts of the system.
    *   **Stability:** Maintain the synchronism of generators during fault conditions.

**Why are Protective Systems Needed?**

*   **Fault Current Magnitudes:** Short circuits can lead to extremely high fault currents, far exceeding the normal operating current. These currents can cause:
    *   **Thermal Damage:** Overheating and melting of conductors, insulation breakdown.
    *   **Mechanical Damage:** Arcing, explosion, and mechanical stresses on equipment due to magnetic forces.
    *   **System Instability:** Voltage sags and frequency variations that can lead to the tripping of generators and other equipment.
*   **Overloads:** Sustained operation above the rated capacity of equipment can lead to overheating and premature aging or failure of insulation.
*   **System Expansion and Complexity:** As power systems grow and become more interconnected, the impact of a single fault can propagate, requiring effective protection to isolate issues.

**Reference:**
*   **Badri Ram and D. N. Viswakarma, "Power System Protection and Switchgear"**: This textbook extensively covers the fundamental need and principles of power system protection, discussing fault types and their consequences. (K1, K2)

---

### 2. Overcurrent Relays: The Foundation of Protection

Overcurrent relays are the most basic and widely used protective relays. They operate when the current in the protected circuit exceeds a predetermined threshold.

**Types of Overcurrent Relays:**

*   **Time Overcurrent Relays:** Operate after a time delay that is dependent on the magnitude of the overcurrent.
*   **Instantaneous Overcurrent Relays:** Operate immediately when the current exceeds the set threshold, with no intentional time delay.

---

### 3. Inverse Definite Minimum Time (IDMT) Overcurrent Relays

IDMT relays are a popular type of time overcurrent relay that offer a compromise between simple definite time relays and very sensitive inverse time relays. They are characterized by two settings:

*   **Time Multiplier Setting (TMS):** Controls the time delay. A higher TMS value results in a longer operating time.
*   **Current Setting (Plug Setting Multiplier - PSM):** Determines the minimum current at which the relay will operate. The relay operates when the actual current divided by the current setting exceeds a certain value.

**Characteristics of IDMT Relays:**

The operating time of an IDMT relay is inversely proportional to the magnitude of the fault current, up to a certain limit where the time becomes a minimum definite value. This "definite minimum time" is determined by the TMS setting.

**The IDMT Curve:**

The operating time ($t$) of an IDMT relay can be generally expressed by the formula:

$t = \frac{k \times TMS}{\left(\frac{I_f}{I_s}\right)^n - 1}$

Where:
*   $t$: Operating time in seconds
*   $k$: A characteristic constant of the relay, determined by the manufacturer and the chosen time-current curve (e.g., Normal Inverse, Very Inverse, Extremely Inverse).
*   $TMS$: Time Multiplier Setting.
*   $I_f$: Fault current.
*   $I_s$: Current setting of the relay.
*   $n$: An exponent that defines the shape of the inverse time characteristic (e.g., $n=0.02$ for Normal Inverse, $n=2$ for Very Inverse, $n=1$ for Extremely Inverse).

**"Definite Minimum Time" (DMT):**

As the fault current ($I_f$) becomes very large (approaching infinity), the term $(\frac{I_f}{I_s})^n$ becomes very large, and the denominator approaches infinity. Consequently, the operating time $t$ approaches zero. However, in practice, relays have a minimum operating time for very high fault currents to prevent unnecessary tripping due to transient conditions or current transformer saturation. This minimum time is known as the "Definite Minimum Time" (DMT). The DMT is typically achieved when the fault current is a certain multiple of the current setting (e.g., 10 times the current setting).

**Key Concepts & Definitions:**

*   **Plug Setting Multiplier (PSM):** The ratio of the fault current to the current setting. $PSM = \frac{I_f}{I_s}$. The relay operates when $PSM > 1$.
*   **Time Multiplier Setting (TMS):** A factor used to adjust the time delay. It's a dimensionless number, typically ranging from 0.1 to 1.
*   **Current Setting (CS) / Rated Minimum Pick-up Current:** The minimum current at which the relay starts to operate. This is usually expressed as a percentage of the relay's rated current.
*   **Inverse Time Characteristic:** The operating time decreases as the fault current increases.
*   **Definite Minimum Time (DMT):** The shortest operating time the relay will exhibit for very high fault currents.

**Example (Illustrative):**

Consider an IDMT relay with the following settings:
*   Current Setting (CS): 5 Amps
*   Time Multiplier Setting (TMS): 0.4
*   Inverse characteristic: Normal Inverse ($n=0.02$)
*   Relay rated current: 5 Amps

Let's assume the fault current ($I_f$) is 50 Amps.

1.  **Calculate PSM:**
    $PSM = \frac{I_f}{I_s} = \frac{50 A}{5 A} = 10$

2.  **Calculate Operating Time:**
    $t = \frac{k \times TMS}{(PSM)^n - 1}$
    Let's assume a typical $k$ value for Normal Inverse is 0.14 seconds.
    $t = \frac{0.14 \times 0.4}{(10)^{0.02} - 1}$
    $t = \frac{0.056}{1.047 - 1}$
    $t = \frac{0.056}{0.047} \approx 1.19$ seconds

**Advantages of IDMT Overcurrent Relays:**

*   **Discrimination:** Provides coordination with other protective devices in series. Lower set relays trip faster for close-up faults, while higher set relays trip for remote faults.
*   **Reduced Nuisance Tripping:** The inverse characteristic ensures that minor overloads operate the relay with a significant time delay, allowing them to clear naturally.
*   **Simplicity and Cost-Effectiveness:** Relatively simple to apply and cost-effective, making them suitable for many applications.

**Limitations of IDMT Overcurrent Relays:**

*   **Dependence on Fault Magnitude:** The operating time is dependent on the fault current magnitude. If the fault current is too low (e.g., due to a high-impedance fault or a fault far from the relay), the relay may not operate, or its operation might be delayed.
*   **Sensitivity Issues for High-Impedance Faults:** High-impedance faults can result in fault currents that are not significantly higher than normal load currents, making them difficult to detect with conventional overcurrent relays.
*   **Stepping Back:** In some complex radial networks, achieving proper discrimination can be challenging, and relays might need to be "stepped back" excessively, leading to slower fault clearance.

**Reference:**
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System"**: Chapter 3 discusses overcurrent protection, including the principles and characteristics of IDMT relays. The book might provide specific equations and performance curves. (K2, K3)
*   **Badri Ram and D. N. Viswakarma, "Power System Protection and Switchgear"**: This text offers a comprehensive explanation of IDMT relay settings, coordination, and application in various network configurations. (K2, K3)

---

### 4. Directional Overcurrent Relays

Directional overcurrent relays are essential for protecting systems where power flow can be in either direction, such as in looped networks or at the interconnection points between different systems. They operate based on both the magnitude of the current and the direction of its flow.

**Need for Directional Overcurrent Relays:**

*   **Looped Networks:** In a looped system, a fault can be fed from both directions. Without directionality, an overcurrent relay set for a particular direction might operate for a fault on the other side of the supply point, causing incorrect tripping.
*   **Tie Lines and Interconnections:** To prevent tripping for faults on the adjacent system or for reverse power flow under certain operating conditions.
*   **Parallel Feeders:** To ensure correct isolation of faults when feeders are supplied from multiple sources.

**Operating Principle:**

A directional overcurrent relay combines an overcurrent sensing element with a directional sensing element. The directional element typically uses the phase relationship between the current and the voltage.

*   **Voltage Polarization:** The relay operates only when the current exceeds the set threshold AND the current flows in the designated forward direction. The forward direction is usually defined relative to a reference voltage.
*   **Reference Voltage:** A voltage, usually from a healthy phase, is used as a reference. The angle between the fault current and this reference voltage determines the direction.
*   **Torque Equation:** The torque produced by the directional element is proportional to $V \times I \times \cos(\theta - \alpha)$, where:
    *   $V$: Voltage magnitude
    *   $I$: Current magnitude
    *   $\theta$: Angle of the current
    *   $\alpha$: Angle of the voltage (setting angle)

The relay operates when the torque is positive (indicating current flow in the desired direction) and the overcurrent element picks up.

**Types of Directional Overcurrent Relays:**

*   **Directional Power Relays:** Sensitive to power flow, which is proportional to voltage and current.
*   **Directional Current Relays:** Sensitive to current direction and its phase angle relative to voltage.

**Settings for Directional Overcurrent Relays:**

*   **Current Setting:** Similar to non-directional overcurrent relays, this determines the minimum current for operation.
*   **Time Setting (TMS):** Controls the time delay.
*   **Directional Setting (Angle Setting):** Defines the angle range within which the relay will operate. This is usually set to be sensitive to faults in the intended direction and insensitive to currents flowing in the reverse direction. Common settings are for 0° to 90° or 0° to -90° (depending on the reference voltage).

**Key Concepts & Definitions:**

*   **Directional Element:** The part of the relay that senses the direction of power flow.
*   **Operating Angle:** The angle between the voltage and current that results in the maximum torque.
*   **Torque Angle Characteristic:** The plot of torque versus the angle between voltage and current.
*   **Polarizing Quantity:** The voltage or current used to determine the direction.
*   **Setting Angle:** The angle at which the directional element is set to be most sensitive.

**Example (Illustrative):**

Consider a transmission line where the relay is located at Substation A and is intended to protect the line towards Substation B.
*   A fault occurs on the line towards Substation B. The current flows from A to B. The voltage at A is lagging the current by, say, 30°.
*   If the directional overcurrent relay at A is set to operate for current flowing from A to B (e.g., sensitive to current angles between -90° and +90° relative to the voltage at A), it will detect the fault.
*   If a fault occurs on a parallel feeder feeding into Substation A from another source, the current at A might flow out towards the fault. However, if the directional setting of the relay on the transmission line is correctly set to respond only to current flowing towards Substation B, it will not operate for this reverse fault.

**Advantages of Directional Overcurrent Relays:**

*   **Improved Discrimination:** Essential for networks with multiple sources and complex interconnections.
*   **Prevents Incorrect Tripping:** Avoids tripping for faults in adjacent systems or for reverse power flow.

**Limitations of Directional Overcurrent Relays:**

*   **Voltage Requirement:** Requires a reliable polarizing voltage. During severe faults, the voltage can drop significantly, potentially affecting the directional element's performance or causing it to drop out.
*   **Current Transformer (CT) Saturation:** CT saturation can distort the current waveform and affect both the magnitude and phase angle sensing, leading to incorrect operation or non-operation.
*   **Complex Settings:** Requires careful setting of current, time, and angle parameters.

**Reference:**
*   **A. G. Phadke and James S. Thorpe, "Computer Relaying for Power Systems"**: This foundational text delves into the principles of directional sensing in digital relays, including how phase and magnitude information is processed. (K2, K3)
*   **Badri Ram and D. N. Viswakarma, "Power System Protection and Switchgear"**: This book provides detailed explanations of directional relay characteristics, setting procedures, and application in various network scenarios. (K2, K3)
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System"**: Discusses the application of directional overcurrent relays in specific protection schemes. (K2, K3)

---

### 5. Digital Implementation of IDMT-Directional Overcurrent Relays

In modern digital protection systems, IDMT-directional overcurrent relays are implemented using microprocessors and sophisticated algorithms.

**Key Concepts in Digital Implementation:**

*   **Digital Signal Processing (DSP):** Analog current and voltage signals from CTs and VTs are sampled and converted to digital values. DSP techniques are used for filtering, magnitude estimation, and phase angle calculation.
*   **Algorithms:**
    *   **Fourier Transform (DFT/FFT):** Used to extract the fundamental frequency components of current and voltage, which are crucial for directional sensing and magnitude estimation.
    *   **Cosinusoidal Transform (CT):** A computationally efficient method for extracting fundamental frequency phasors.
    *   **Digital Filtering:** To remove harmonics and noise from the sampled signals.
*   ** Phasor Estimation:** Accurately determining the magnitude and phase angle of the fundamental frequency components of current and voltage.
*   **Logic Processing:** Implementing the IDMT time-current characteristic and the directional logic.

**How Digital Relays Work (Simplified):**

1.  **Sampling:** Analog current and voltage signals are sampled at high frequencies.
2.  **Quantization:** The sampled values are converted into digital numbers.
3.  **Filtering:** Digital filters are applied to remove noise and harmonics, isolating the fundamental frequency component.
4.  **Phasor Calculation:** Algorithms like DFT or CT are used to compute the magnitude and phase angle of the fundamental frequency current and voltage.
5.  **Directional Logic:** The phase difference between the calculated current phasor and the voltage phasor is compared with the directional setting.
6.  **Magnitude Comparison:** The estimated current magnitude is compared with the current setting.
7.  **Time Calculation:** If the current magnitude exceeds the setting and the direction is correct, the relay's internal clock starts counting the time based on the IDMT characteristic and the TMS.
8.  **Tripping Decision:** Once the calculated operating time is reached, the relay sends a trip signal to the circuit breaker.

**Advantages of Digital Implementation:**

*   **High Accuracy and Sensitivity:** Digital algorithms can achieve higher accuracy in magnitude and phase angle estimation, leading to better performance.
*   **Flexibility:** Settings can be easily changed remotely or locally via communication interfaces.
*   **Advanced Features:** Can incorporate multiple IDMT curves, metering capabilities, event recording, and self-diagnostics.
*   **Reduced CT Saturation Impact:** Advanced algorithms can mitigate the effects of CT saturation to some extent by using signal processing techniques.
*   **Reduced Hardware:** Replaces multiple electromechanical components with a single microprocessor.

**Reference:**
*   **A. G. Phadke and James S. Thorpe, "Computer Relaying for Power Systems"**: Provides in-depth discussions on digital signal processing techniques, algorithms for magnitude and phase estimation, and the logic for directional decision making in digital relays. (K2, K4)
*   **Waldemar Rebizant, "Digital Signal Processing in Power System Protection and Control"**: This book is dedicated to the DSP aspects of digital protection, covering various algorithms and their implementation for functions like overcurrent and directional sensing. (K2, K4)
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System"**: Chapters on numerical relays discuss the underlying principles of signal processing and algorithm implementation. (K2, K4)

---

### 6. Alignment with Course Outcomes

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   This topic directly addresses **overcurrent protection** and the specific type of **directional overcurrent relay** used in various network configurations where directionality is crucial. The need for directional overcurrent relays in looped networks and tie lines is explained. (K3)

*   **CO2: Develop the protection scheme for bus bars, transformers, generators, motors and distribution systems using appropriate protective relays.**
    *   Directional overcurrent relays are a key component in protection schemes for **distribution systems**, feeders, and outgoing lines from substations. Understanding their application helps in designing protection for these elements. (K3)

*   **CO3: Illustrate the operation of a numerical relay.**
    *   The section on "Digital Implementation" explains the fundamental steps involved in a numerical relay's operation for directional overcurrent functions, from sampling to tripping. (K2)

*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   The discussion on "Digital Implementation" touches upon signal processing techniques like sampling, filtering, and phasor estimation (mentioning DFT/FFT and CT) used to derive the necessary information for the directional overcurrent logic. (K2)

*   **CO5: Infer emerging protection schemes in power systems.**
    *   While IDMT-directional overcurrent relays are a traditional protection scheme, their digital implementation forms the basis for understanding more advanced digital protection algorithms and functionalities. The evolution from electromechanical to digital relays highlights trends in power system protection. (K3)

---

### 7. Important Points to Remember

*   **IDMT characteristic:** Operating time is inversely proportional to fault current, with a definite minimum time for very high currents.
*   **TMS and Current Setting:** Key parameters for setting IDMT relays, affecting time delay and pick-up current.
*   **Directionality:** Crucial for preventing incorrect tripping in looped networks or systems with multiple power sources.
*   **Voltage Polarization:** Directional relays use voltage and current phase relationships for direction sensing.
*   **Digital Implementation:** Leverages DSP and algorithms for accurate and flexible operation, overcoming limitations of electromechanical relays.
*   **CT Saturation:** A significant challenge for both electromechanical and digital directional relays, though digital methods offer better mitigation.
*   **Coordination:** IDMT characteristics are designed to achieve selectivity and coordination between different protective devices.

---

### 8. Practice Questions and Answers

**Question 1:**
Explain the purpose of the Time Multiplier Setting (TMS) and the Current Setting (CS) in an IDMT overcurrent relay.

**Answer:**
*   **Time Multiplier Setting (TMS):** This setting is a dimensionless factor that adjusts the operating time of the relay. A higher TMS value increases the operating time for a given fault current, while a lower TMS value decreases it. It is primarily used for coordination purposes.
*   **Current Setting (CS) / Pick-up Current:** This setting determines the minimum current at which the relay begins to operate. The relay will operate when the actual fault current, divided by the current setting, exceeds a value greater than 1. It defines the sensitivity of the relay.

**Question 2:**
Why are directional overcurrent relays necessary in power systems? Provide an example.

**Answer:**
Directional overcurrent relays are necessary in power systems where power flow can occur in either direction, such as in looped networks or at tie points between different systems. Without directionality, an overcurrent relay might trip incorrectly for faults located on the adjacent network or for normal reverse power flow.

**Example:** Consider a ring feeder network. If a fault occurs on one section of the ring, relays on both sides of the fault will see an overcurrent. However, only the relay closest to the fault in the direction of fault current flow should operate to isolate the faulty section. A directional relay ensures that the relay on the healthy side of the fault, which sees current flowing in the reverse direction, does not trip unnecessarily, thus maintaining power supply to the healthy part of the network.

**Question 3:**
Describe the primary advantage of using digital overcurrent relays compared to their electromechanical counterparts.

**Answer:**
The primary advantage of digital overcurrent relays is their **flexibility and advanced functionality**. This includes:
*   **Easier and more precise setting adjustments:** Settings can be changed remotely or locally without physical replacement of components.
*   **Inclusion of multiple IDMT curves:** Different standard or custom time-current characteristics can be programmed.
*   **Improved accuracy:** Digital signal processing leads to more precise measurement of current magnitude and phase angle.
*   **Event recording and disturbance analysis:** Digital relays can store fault data, waveforms, and operational logs, aiding in post-fault analysis.
*   **Self-diagnostics:** Built-in tests to monitor the health of the relay.
*   **Mitigation of CT saturation:** Advanced algorithms can better handle CT saturation effects compared to electromechanical relays.

**Question 4:**
A directional overcurrent relay is set to operate for faults occurring in the forward direction. If a fault occurs on an adjacent busbar and power flows *from* the protected line *towards* the busbar (reverse direction), what will happen?

**Answer:**
The directional overcurrent relay will **not operate**, provided its directional element is correctly set and the current magnitude is within the operating range of the overcurrent element. The directional element will recognize that the current is flowing in the reverse direction, and hence the torque produced will be insufficient to cause the relay to pick up, even if the current magnitude is high.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
