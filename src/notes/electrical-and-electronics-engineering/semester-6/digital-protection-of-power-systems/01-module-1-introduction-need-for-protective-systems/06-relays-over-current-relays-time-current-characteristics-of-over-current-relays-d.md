---
title: "Relays: Over current relays - time-current characteristics of over current relays: definite time over current relays"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36576"
status: "completed"
scrapedAt: "2026-05-23T16:25:47.290Z"
---
# Digital Protection of Power Systems

## Module 1: Introduction: Need for Protective Systems

### Topic: Relays: Overcurrent Relays - Time-Current Characteristics of Overcurrent Relays: Definite Time Overcurrent Relays

---

### 1. Introduction: Need for Protective Systems

*   **What is a Protective System?**
    *   A protective system is a combination of protective relays, current transformers (CTs), potential transformers (PTs), and circuit breakers designed to detect fault conditions in a power system and isolate the faulty section to prevent damage to equipment and maintain system stability.
*   **Why is Protection Necessary?**
    *   **Safety:** Protect personnel from electrical hazards.
    *   **Equipment Protection:** Prevent damage to expensive power system equipment like generators, transformers, transmission lines, and motors.
    *   **System Stability:** Rapidly isolate faults to prevent cascading failures and maintain power supply to healthy parts of the system.
    *   **Economic Considerations:** Minimize downtime and repair costs associated with fault damage.
    *   **Reliability:** Ensure a continuous and reliable supply of electricity.

**References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 1)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 1)

---

### 2. Relays: The Brains of the Protective System

*   **Definition of a Relay:** A relay is a sensitive electrical device that detects abnormal conditions (faults) in a power system and initiates an action, typically by closing or opening its contacts to trip a circuit breaker.
*   **Types of Relays based on Operating Principle:**
    *   Electromechanical Relays (Older technology)
    *   Static Relays (Using semiconductor components)
    *   Numerical/Digital Relays (Modern technology, using microprocessors and digital signal processing)
*   **Functions of a Protective Relay:**
    *   **Detection:** Sense fault conditions (e.g., overcurrent, undervoltage, overvoltage, differential currents).
    *   **Decision Making:** Determine if the detected condition is a fault and if it requires action.
    *   **Action Initiation:** Send a trip signal to the circuit breaker.

**References:**
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 1)
*   *Digital Signal Processing in Power System Protection and Control* by Waldemar Rebizant (Chapter 1)

---

### 3. Overcurrent Relays

*   **Definition:** An overcurrent relay is a protective relay that operates when the current in the circuit exceeds a predetermined value (pickup or set current). It is one of the simplest and most widely used protective relays.
*   **Purpose:** Primarily used for the protection of radial feeders, transformers, motors, and generators against overloads and short circuits.
*   **Operating Principle:** Compares the measured current with a set threshold. If the measured current exceeds the threshold for a sufficient duration, the relay operates.

**CO1 Alignment:** Identifying the relay protection scheme suitable for overcurrent protection. (Knowledge Level: K3)

**References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 2)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 3)

---

### 4. Time-Current Characteristics of Overcurrent Relays

*   **Concept:** The time-current characteristic (also known as the time-dial setting or operating characteristic) defines the relationship between the magnitude of the current and the time taken for the relay to operate. This characteristic is crucial for coordination between different protective relays in a system.
*   **Key Parameters:**
    *   **Pickup Current ($I_p$ or $I_{set}$):** The minimum current at which the relay starts to operate. Currents below this value will not cause the relay to operate.
    *   **Time Multiplier Setting (TMS) / Time Dial Setting (TDS):** A factor that adjusts the operating time of the relay. A higher TMS/TDS value increases the operating time for a given fault current.
    *   **Operating Time:** The time elapsed from the instant the current exceeds the pickup value until the relay contacts close to initiate a trip.
*   **Importance of Time-Current Characteristics:**
    *   **Coordination (Selectivity):** Ensures that the relay closest to the fault operates first, while relays further away do not operate unnecessarily. This is achieved by setting the operating time of relays such that the fault is isolated by the first relay in the path.
    *   **Sensitivity:** Ensures the relay operates quickly for high fault currents but is delayed for minor overloads to allow equipment to ride through temporary conditions.
    *   **Discrimination:** Differentiate between fault conditions and normal system disturbances.

**CO1 Alignment:** Identifying the relay protection scheme suitable for overcurrent protection (specifically its time-current characteristics for coordination). (Knowledge Level: K3)

---

### 5. Definite Time Overcurrent Relays

*   **Definition:** A definite time overcurrent relay operates when the fault current exceeds a predetermined pickup value, and its operating time is constant, irrespective of the magnitude of the fault current above the pickup value.
*   **Characteristic:**
    *   The time-current curve is a horizontal line at a specific operating time once the current exceeds the pickup current.
    *   There is a defined pickup current ($I_{set}$).
    *   There is a definite operating time ($t_{def}$ or $T_{fixed}$).
*   **Operation:**
    *   If $I_{fault} \le I_{set}$, the relay does not operate.
    *   If $I_{fault} > I_{set}$, the relay operates after a fixed time $t_{def}$.

*   **Equation:**
    Operating Time $t_{op} = \begin{cases} t_{def} & \text{if } I_{fault} > I_{set} \\ \infty & \text{if } I_{fault} \le I_{set} \end{cases}$

*   **Time-Current Curve Representation:**
    *   A vertical line at $I_{set}$ on the current axis.
    *   A horizontal line at $t_{def}$ on the time axis, extending to the right of $I_{set}$.

    ```
    Operating Time (t)
          ^
          |
          |        ---------------------
          |        |  Definite Time    |
          |        |  Operation        |
          |        ---------------------
          |                       |
          |                       |
          +-----------------------+-------------> Fault Current (I)
                  I_set
    ```

*   **Advantages:**
    *   Simple to understand and set.
    *   Provides fast operation for faults above the pickup current, if coordinated correctly.
*   **Disadvantages:**
    *   **Poor Coordination:** In a radial system, if two definite time relays are in series, and the fault current is the same at both relays, they will attempt to operate at the same time, leading to non-selective tripping.
    *   **Not sensitive to low fault currents:** It operates with the same delay for all fault currents above $I_{set}$. This can be problematic for faults occurring close to the relay location, where the fault current might be only slightly higher than the pickup setting.

*   **Applications:**
    *   Used where the fault current levels are relatively predictable and distinct for different fault locations.
    *   Often used in distribution systems or for specific equipment protection where selectivity requirements are less stringent or can be achieved through other means.
    *   In modern digital relays, a definite time characteristic can be implemented as one of the selectable operating modes.

**CO1 Alignment:** Identifying the relay protection scheme suitable for overcurrent protection, specifically understanding the definite time overcurrent relay characteristic. (Knowledge Level: K3)

**References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 2, Section 2.3.1)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 3, Section 3.2.1)

---

### 6. Digital Implementation of Definite Time Overcurrent Relays

*   **Modern Approach:** In digital relays, the definite time characteristic is achieved through software algorithms.
*   **Process:**
    1.  **Sampling:** The analog current signal from the CT is sampled at a high frequency.
    2.  **Digital Conversion:** The sampled analog values are converted to digital values using an Analog-to-Digital Converter (ADC).
    3.  **RMS Value Calculation:** The digital signal processor (DSP) calculates the RMS value of the current over a defined period.
    4.  **Comparison:** The calculated RMS current is compared with the pre-set pickup current ($I_{set}$).
    5.  **Timing:** If the current exceeds $I_{set}$, a timer starts. This timer is programmed to count a fixed duration ($t_{def}$).
    6.  **Trip Decision:** Once the timer reaches $t_{def}$, the relay issues a trip command to the circuit breaker.
*   **Advantages of Digital Implementation:**
    *   **Precision:** Accurate and repeatable timing.
    *   **Flexibility:** Easily programmable and can be combined with other characteristics.
    *   **Self-checking:** Built-in diagnostics.
    *   **Reduced maintenance:** No moving parts.

**CO3 Alignment:** Illustrate the operation of a numerical relay (by explaining how a definite time overcurrent relay is implemented digitally). (Knowledge Level: K2)
**CO4 Alignment:** Explain signal processing methods and algorithms in digital protection (sampling, RMS calculation are signal processing steps involved). (Knowledge Level: K2)

**References:**
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 5)
*   *Digital Signal Processing in Power System Protection and Control* by Waldemar Rebizant (Chapter 2)

---

### 7. Examples and Practice Questions

**Example 1:**
A definite time overcurrent relay is set with a pickup current of 200 A and a definite operating time of 0.5 seconds. The CT ratio is 100/5 A. Calculate the relay operating time for the following fault currents measured at the relaying point:
a) 100 A
b) 300 A
c) 800 A

**Solution 1:**
The relaying current is the primary current divided by the CT ratio (primary current / secondary current ratio).
Pickup current at primary side = 200 A.
Pickup current at secondary side (measured by relay) = $200 \text{ A} / (100/5) = 200 \text{ A} / 20 = 10 \text{ A}$.

a) Fault current = 100 A (primary). This is less than the pickup current of 200 A.
   Relay operating time = $\infty$ (or no operation).

b) Fault current = 300 A (primary). This is greater than the pickup current of 200 A.
   Relay operating time = Definite time = 0.5 seconds.

c) Fault current = 800 A (primary). This is greater than the pickup current of 200 A.
   Relay operating time = Definite time = 0.5 seconds.

**Example 2:**
Consider a radial feeder protected by two definite time overcurrent relays, Relay A and Relay B, in series.
Relay A settings: $I_{set\_A} = 100 \text{ A}$, $t_{def\_A} = 0.3 \text{ s}$.
Relay B settings: $I_{set\_B} = 150 \text{ A}$, $t_{def\_B} = 0.6 \text{ s}$.

Assume a fault occurs such that the fault current measured at Relay A is 200 A and at Relay B is 180 A.
Which relay will trip first? What is the problem with this scenario?

**Solution 2:**
At Relay A: Fault current (200 A) > Pickup current (100 A). Operating time = 0.3 s.
At Relay B: Fault current (180 A) > Pickup current (150 A). Operating time = 0.6 s.

Relay A will trip first. This is the desired outcome.

Now, consider a fault occurring at a location where the fault current measured at Relay A is 150 A and at Relay B is also 150 A.
At Relay A: Fault current (150 A) > Pickup current (100 A). Operating time = 0.3 s.
At Relay B: Fault current (150 A) > Pickup current (150 A). Operating time = 0.6 s.

Relay A will still trip first.

**However, consider a scenario where Relay A settings are:** $I_{set\_A} = 150 \text{ A}$, $t_{def\_A} = 0.3 \text{ s}$.
**And Relay B settings are:** $I_{set\_B} = 150 \text{ A}$, $t_{def\_B} = 0.6 \text{ s}$.

**And a fault occurs where the fault current at Relay A is 180 A and at Relay B is also 180 A.**
At Relay A: Fault current (180 A) > Pickup current (150 A). Operating time = 0.3 s.
At Relay B: Fault current (180 A) > Pickup current (150 A). Operating time = 0.6 s.

Relay A will trip first.

**The problem arises when the fault current is the same at both relays, and their operating times are also the same or very close, leading to coordination issues.**
For instance, if Relay A settings were $I_{set\_A} = 100 \text{ A}$, $t_{def\_A} = 0.4 \text{ s}$ and Relay B settings were $I_{set\_B} = 150 \text{ A}$, $t_{def\_B} = 0.4 \text{ s}$. If a fault occurs with 180A at A and 180A at B, both would trip in 0.4s, which is not selective. This highlights the need for time delays or using non-definite time characteristics for better coordination.

---

### 8. Key Points to Remember

*   Protective systems are essential for power system safety, reliability, and equipment protection.
*   Overcurrent relays are fundamental for detecting overloads and short circuits.
*   The time-current characteristic of a relay dictates its operating time based on fault current magnitude.
*   Definite time overcurrent relays have a constant operating time for all fault currents above the pickup value.
*   While simple, definite time relays can suffer from coordination problems in series applications if not carefully set or if fault current levels are not sufficiently distinct.
*   Digital relays implement these characteristics through sophisticated algorithms and signal processing.

---

### 9. Further Learning (Relating to Course Outcomes)

*   **CO1 (Identify relay protection scheme suitable for overcurrent):** This module introduces the basic overcurrent relay and its definite time characteristic. Future modules will explore other overcurrent characteristics (IDMT) and other types of protection like differential and distance, allowing you to compare their suitability.
*   **CO2 (Develop protection scheme for busbars, transformers...):** Understanding overcurrent protection is the first step. For transformers, overcurrent relays are often used as backup protection, while differential relays provide primary protection. This topic lays the groundwork for understanding how to select relays for specific equipment.
*   **CO3 (Illustrate operation of numerical relay):** We've touched upon the digital implementation. Further exploration into how numerical relays process signals and make decisions is crucial.
*   **CO4 (Explain signal processing methods):** The digital implementation of definite time relays involves sampling and RMS calculations, which are basic signal processing techniques relevant to digital protection.

---
This concludes the notes for Definite Time Overcurrent Relays. This topic serves as an introduction to the fundamental principles of overcurrent protection and the concept of time-current characteristics, which are crucial for understanding more advanced protection schemes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
