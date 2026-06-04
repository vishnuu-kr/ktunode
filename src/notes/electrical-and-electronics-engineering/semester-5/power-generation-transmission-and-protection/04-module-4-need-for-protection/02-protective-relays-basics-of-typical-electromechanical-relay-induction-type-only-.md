---
title: "Protective relays –  Basics of typical electromechanical relay – induction type only Static (block diagrams of o/c and instantaneous o/c relays) Microprocessor (block diagram and flow chart of o/c relay) Fundamentals of Numerical relay"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 4: Need for protection"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36192"
status: "completed"
scrapedAt: "2026-05-23T16:23:35.180Z"
---
# Module 4: Need for Protection - Protective Relays

## Introduction

This module focuses on the essential role of protective relays in power systems. Protective relays are the "eyes and brains" of the protection system, responsible for detecting abnormal conditions and initiating actions to isolate faulty sections of the power system. This ensures the safety of personnel, equipment, and the stability of the power grid.

**Learning Outcomes:**

*   Understand the fundamental working principles of various types of protective relays.
*   Explain the basic construction and operation of electromechanical induction-type relays.
*   Illustrate the functional blocks of static overcurrent and instantaneous overcurrent relays.
*   Describe the block diagram and flowchart of a microprocessor-based overcurrent relay.
*   Explain the fundamental principles of numerical relays.

**Course Outcomes Alignment:**

*   **CO4: Demonstrate the working of relays and switch gear for protection schemes. (Knowledge Level: K2)** - This module directly addresses this CO by detailing the working of different relay types and their application in protection schemes.

**Textbook References:**

*   **Electrical Power Systems by Wadhwa C. L. (New Age International, 8th edition 2023):** Chapters related to protection and relays.
*   **Principles of Power System by V. K. Mehta and Rohit Mehta (S. Chand, 4th edition reprint 2020):** Chapters on protection and relays.
*   **Power System Protection and Switchgear by Badri Ram and D.N. Viswakarma (Tata McGraw Hill, 2nd edition, 2011):** Comprehensive coverage of relays and protection.

---

## 1. Protective Relays: The Fundamentals

Protective relays are devices that detect the presence of a fault (abnormal condition) in a power system and initiate a command to open a circuit breaker to isolate the faulted section.

**Key Concepts:**

*   **Fault:** An abnormal condition that causes excessive current flow, such as a short circuit (line-to-ground, line-to-line, three-phase).
*   **Operating Quantity:** The electrical quantity (e.g., current, voltage, frequency, impedance) that a relay monitors to detect a fault.
*   **Operating Principle:** The physical or logical principle by which a relay detects a fault based on the operating quantity.
*   **Pickup Value (Setting):** The minimum value of the operating quantity that causes the relay to start operating.
*   **Reset Value:** The value of the operating quantity below which the relay stops operating. Typically, the reset value is lower than the pickup value for hysteresis.
*   **Time Delay:** The time taken by the relay to initiate a trip command after the fault is detected. This can be instantaneous or time-delayed.
*   **Trip Circuit:** The circuit through which the relay sends a command to the circuit breaker to open.

**Types of Relays based on Operating Principle:**

1.  **Electromechanical Relays:** Operate based on the physical movement of moving parts, such as a disc, armature, or plunger.
2.  **Static Relays:** Utilize solid-state electronic components (transistors, diodes, integrated circuits) without moving parts.
3.  **Microprocessor/Digital/Numerical Relays:** Employ microprocessors or digital signal processing techniques to analyze system parameters and make protection decisions.

---

## 2. Electromechanical Relays - Induction Type Only

Induction-type relays are the oldest and most common type of electromechanical relays. They operate on the principle of electromagnetic induction, similar to an induction motor.

**Working Principle:**

*   Two magnetic fluxes, produced by current and voltage coils, interact with a rotating disc (made of aluminum or copper).
*   These fluxes create eddy currents in the disc.
*   The interaction between the eddy currents and the magnetic fields produces torque, causing the disc to rotate.
*   The amount of torque is proportional to the product of the fluxes and the sine of the angle between them.
*   A spring provides a restraining torque, opposing the operating torque.
*   A moving contact is attached to the disc. When the operating torque overcomes the restraining torque and the inertia of the disc, the moving contact closes, completing the trip circuit.

**Basic Construction:**

*   **Main Structure:** U-shaped electromagnet with two limbs.
*   **Current Coil:** Wound on one limb, connected in series with the protected circuit.
*   **Voltage Coil:** Wound on the other limb, connected across the circuit.
*   **Disc:** Mounted on a spindle and pivots in the air gap between the limbs.
*   **Brake Magnet:** A permanent magnet placed near the disc to control its speed (provide damping).
*   **Contacts:** Fixed and moving contacts.
*   **Spring:** Provides restraining torque.
*   **Tap:** Used to adjust the current setting.
*   **Time Setting Multiplier (TSM):** A phase shifting device (e.g., a shaded pole structure) used to vary the effective position of the voltage coil relative to the current coil, thus controlling the time of operation.

**Types of Induction Relays:**

*   **Induction Type Overcurrent Relay:** Operates when the current exceeds a predetermined value.
*   **Induction Type Directional Relay:** Operates only when a fault current flows in a specific direction.
*   **Induction Type Distance Relay:** Operates when the impedance of the line is below a set value.

**Focus on Induction Type Overcurrent Relay:**

*   **Operating Torque:** Proportional to $I^2$ (where $I$ is the current through the relay).
*   **Restraining Torque:** Proportional to voltage ($V$) and inversely proportional to the time setting.
*   **Definite Time Overcurrent Relay:** The operating time is independent of the fault current magnitude, only dependent on the time setting.
*   **Inverse Time Overcurrent Relay:** The operating time is inversely proportional to the fault current magnitude. Higher the fault current, faster the operation. This is achieved by adjusting the spring tension and the position of the brake magnet.

**Example (Wadhwa, C.L. - Electrical Power Systems):**

Consider an induction-type overcurrent relay with a current setting of 100% and a time setting of 0.5. If the fault current is 5 times the relay's rated current, the relay will pick up and start to operate. The time of operation will depend on the inverse time characteristic curve and the TSM.

**Important Points to Remember:**

*   Induction relays are robust and reliable.
*   They have a relatively slow operating speed compared to static and numerical relays.
*   Susceptible to vibration and dust.
*   The disc inertia contributes to the operating time.

---

## 3. Static Relays

Static relays use electronic components to detect faults. They have no moving parts, offering advantages in speed, reliability, and sensitivity.

**Key Advantages:**

*   **Fast Operating Speed:** Significantly faster than electromechanical relays.
*   **Higher Reliability:** No moving parts to wear out or get stuck.
*   **Higher Sensitivity:** Can detect smaller fault currents.
*   **Lower Burden on CTs/PTs:** Draw less current/power from instrument transformers.
*   **Less Affected by Vibration:** No moving parts to be disturbed.

**Block Diagrams:**

**3.1. Static Overcurrent Relay (IDMT - Inverse Definite Minimum Time)**

This relay provides both inverse and definite time characteristics.

**Block Diagram:**

```
+-------------------+     +-----------------+     +----------------+     +-------------------+     +------------------+
| Current           | --> | Rectifier       | --> | Amplifier      | --> | Timing Circuit    | --> | Output Stage/    | --> Trip Command
| Transformer (CT)  |     | (RMS/Average)   |     |                |     | (Inverse/Definite)|     | Relay Unit       |
+-------------------+     +-----------------+     +----------------+     +-------------------+     +------------------+
          ^                                                                                                        |
          |--------------------------------------------------------------------------------------------------------|  (Reset Signal)
```

**Explanation:**

1.  **Current Transformer (CT):** Steps down the high fault current from the power system to a measurable level.
2.  **Rectifier:** Converts the AC input current (from CT) into a DC signal proportional to the RMS or average value of the current.
3.  **Amplifier:** Amplifies the DC signal to a level suitable for the subsequent stages. It also incorporates the current setting.
4.  **Timing Circuit:** This is the core of the relay. It generates a time delay that is inversely proportional to the amplified current signal, or a definite time delay based on settings. Different circuits (e.g., RC networks, operational amplifiers) are used to achieve these characteristics.
5.  **Output Stage/Relay Unit:** Usually a transistor or thyristor that, upon receiving the signal from the timing circuit, activates the trip coil of the circuit breaker. It also provides a reset signal to the timing circuit when the fault is cleared.

**3.2. Static Instantaneous Overcurrent Relay**

This relay operates immediately (very short delay, usually a few milliseconds) when the current exceeds a set value, without any time delay based on the magnitude of the current.

**Block Diagram:**

```
+-------------------+     +-----------------+     +----------------+     +------------------+
| Current           | --> | Rectifier       | --> | Comparator     | --> | Output Stage/    | --> Trip Command
| Transformer (CT)  |     | (RMS/Average)   |     | (Threshold)    |     | Relay Unit       |
+-------------------+     +-----------------+     +----------------+     +------------------+
```

**Explanation:**

1.  **Current Transformer (CT):** Steps down the fault current.
2.  **Rectifier:** Converts AC to DC.
3.  **Comparator:** Compares the amplified DC signal with a pre-set threshold voltage (representing the pickup current). If the input signal exceeds the threshold, the comparator outputs a signal.
4.  **Output Stage/Relay Unit:** Activates the trip coil of the circuit breaker upon receiving the signal from the comparator.

**Important Points to Remember:**

*   Static relays are faster and more reliable than electromechanical relays.
*   Their performance is consistent and repeatable.
*   More complex internal circuitry compared to electromechanical relays.

---

## 4. Microprocessor-Based Overcurrent Relay

These relays utilize a microprocessor to process measured electrical quantities and implement protection algorithms. They offer flexibility, advanced features, and programmability.

**Key Features:**

*   **Digital Signal Processing:** Measures and analyzes system parameters digitally.
*   **Programmability:** Settings can be easily changed through a keypad or communication interface.
*   **Advanced Characteristics:** Can implement complex and custom time-current curves.
*   **Self-Diagnostics:** Can monitor their own health and report faults.
*   **Communication Capabilities:** Can communicate with SCADA systems and other protection devices.
*   **Event Recording:** Stores fault data (e.g., fault current, voltage, time of occurrence).

**Block Diagram:**

```
+-------------------+     +-----------------+     +----------------+     +-------------------+     +--------------------+     +------------------+
| Current           | --> | Analog Input    | --> | Analog-to-     | --> | Microprocessor    | --> | Digital Output     | --> | Output Stage/    | --> Trip Command
| Transformer (CT)  |     | Module          |     | Digital (ADC)  |     | (DSP)             |     | Interface          |     | Relay Unit       |
|                   |     | (Anti-alias Filter,|     |                |     |                   |     |                    |     |                  |
|                   |     | Sample & Hold)  |     |                |     |                   |     |                    |     |                  |
+-------------------+     +-----------------+     +----------------+     +-------------------+     +--------------------+     +------------------+
          ^                                                                                                                           |
          |-------------------------------------------------------------------------------------------------------------------------|  (Reset Signal)
```

**Explanation:**

1.  **Current Transformer (CT):** Steps down the system current.
2.  **Analog Input Module:** Filters the analog signal (e.g., anti-aliasing filter to remove high-frequency components) and samples it at regular intervals (e.g., using a Sample-and-Hold circuit).
3.  **Analog-to-Digital Converter (ADC):** Converts the sampled analog signal into a digital value.
4.  **Microprocessor (DSP):** The "brain" of the relay. It executes software algorithms to:
    *   Calculate RMS values of current.
    *   Compare current with programmed pickup settings.
    *   Determine the time delay based on the programmed time-current characteristic.
    *   Make decisions to trip or not trip.
5.  **Digital Output Interface:** Translates the decision from the microprocessor into a digital signal that can be understood by the output stage.
6.  **Output Stage/Relay Unit:** Activates the trip coil of the circuit breaker.

**Flowchart of an Overcurrent Relay (Microprocessor-Based):**

```mermaid
graph TD
    A[Start] --> B{Measure Current};
    B --> C{Is Current > Pickup Setting?};
    C -- No --> B;
    C -- Yes --> D{Is Time Delay elapsed?};
    D -- No --> E{Calculate Time Delay};
    E --> F{Check if fault duration exceeds time delay};
    F -- No --> D;
    F -- Yes --> G{Trip Command};
    G --> H[End];
    D -- Yes --> G; % This branch implies instantaneous trip if applicable or completion of inverse time
    B --> I{Clear fault?}; % Added for reset condition
    I -- Yes --> B; % Continue monitoring
    I -- No --> C; % Continue monitoring fault
```

**Simplified Flowchart for Overcurrent Relay Operation:**

1.  **Initialization:** Load settings (pickup current, time-current curve, TSM).
2.  **Measure Current:** Continuously measure the system current via the CT.
3.  **Digital Conversion:** Convert the analog current signal to a digital value.
4.  **Calculate RMS Current:** Compute the RMS value of the current over a defined period.
5.  **Pickup Check:** Compare the calculated RMS current with the pickup current setting.
    *   If Current $\le$ Pickup Setting: Continue monitoring.
    *   If Current $>$ Pickup Setting: Proceed to time delay calculation.
6.  **Time Delay Calculation (for Inverse Time):** Based on the measured current and the selected time-current characteristic, calculate the required operating time (e.g., using a formula or lookup table within the microprocessor's memory).
7.  **Time Check:** Monitor the elapsed time since the current exceeded the pickup.
    *   If Elapsed Time $<$ Calculated Time Delay: Continue monitoring.
    *   If Elapsed Time $\ge$ Calculated Time Delay: Generate a trip command.
8.  **Instantaneous Trip (Optional/Specific Setting):** If an instantaneous trip is enabled and the current exceeds the instantaneous pickup setting, generate a trip command immediately (or after a very short fixed delay).
9.  **Trip Command:** Send a signal to the output stage to activate the circuit breaker trip coil.
10. **Reset:** When the fault is cleared (current drops below a reset value), reset the timing elements and the relay to its normal state.

**Important Points to Remember:**

*   Microprocessor relays offer high accuracy, flexibility, and advanced features.
*   They are the current standard for modern power system protection.
*   Require careful programming and setting.

---

## 5. Fundamentals of Numerical Relays

Numerical relays are a subset of microprocessor-based relays, often used interchangeably in modern terminology. They rely on digital processing of sampled current and voltage waveforms to perform protection functions.

**Key Principles:**

1.  **Sampling:** Analog voltage and current signals from CTs and PTs are sampled at a high frequency (e.g., 8, 12, 16, 32, 64 samples per cycle or more). This is crucial for accurately representing the waveform.
2.  **Digital Conversion (ADC):** The sampled analog signals are converted into digital values by an Analog-to-Digital Converter.
3.  **Digital Signal Processing (DSP):** Microprocessors or dedicated DSP chips are used to process these digital samples. Algorithms are employed to:
    *   **Calculate RMS values:** This is a fundamental step for overcurrent and other protection functions.
    *   **Detect zero crossings:** Essential for timing and phase angle calculations.
    *   **Perform Fourier Analysis (FFT):** To decompose the waveform into its fundamental and harmonic components, allowing for harmonic-based protection or filtering.
    *   **Implement complex algorithms:** Such as distance impedance calculation, differential current comparison, frequency monitoring, etc.
4.  **Algorithm Execution:** The relay's firmware contains specific algorithms for different protection functions (overcurrent, earth fault, distance, differential, etc.). The microprocessor executes these algorithms.
5.  **Decision Making:** Based on the algorithm's output, the microprocessor makes a decision to trip a circuit breaker or issue an alarm.
6.  **Output Interface:** Digital output signals are generated to control the trip coil and other auxiliary functions.
7.  **Communication:** Numerical relays typically support communication protocols like Modbus, IEC 61850, DNP3 for integration into wider substation automation systems.

**Benefits of Numerical Relays:**

*   **Enhanced Accuracy and Sensitivity:** Digital processing allows for precise calculations.
*   **Versatility:** A single numerical relay can perform multiple protection functions.
*   **Flexibility:** Settings can be easily modified and updated.
*   **Advanced Features:** Event recording, fault location, self-diagnostics, communication capabilities.
*   **Reduced Panel Space:** Multiple electromechanical relays can be replaced by a single numerical relay.

**Example (Mehta & Mehta, V.K. - Principles of Power System):**

Numerical overcurrent relays often use the principle of calculating the RMS current over a sliding window of samples. If this calculated RMS current exceeds the set pickup value, the internal timer starts counting. The time delay is then determined by the programmed time-current characteristic, often implemented using sophisticated mathematical models within the microprocessor.

**Important Points to Remember:**

*   Numerical relays are built on digital signal processing techniques.
*   They represent the state-of-the-art in protective relay technology.
*   The accuracy of sampling and the sophistication of the algorithms are key to their performance.

---

## Practice Questions and Answers

**Question 1:** What is the primary function of a protective relay in a power system?

**Answer:** The primary function of a protective relay is to detect abnormal conditions (faults) in the power system and initiate a command to open a circuit breaker, thereby isolating the faulted section and protecting equipment and personnel.

**Question 2:** Briefly explain the working principle of an induction-type electromechanical relay.

**Answer:** An induction-type relay operates based on the principle of electromagnetic induction. Two magnetic fluxes, one produced by the current coil and the other by the voltage coil, interact with a rotating disc, inducing eddy currents. The interaction between these fluxes and eddy currents produces a torque that causes the disc to rotate. When this torque overcomes the restraining torque (from a spring), the relay contacts close, initiating a trip.

**Question 3:** List two advantages of static relays over electromechanical relays.

**Answer:** Two advantages of static relays over electromechanical relays are:
1.  **Faster operating speed:** No moving parts means quicker response.
2.  **Higher reliability:** No mechanical wear and tear.

**Question 4:** What is the main component that performs the protection logic in a microprocessor-based overcurrent relay?

**Answer:** The microprocessor (or Digital Signal Processor - DSP) is the main component that performs the protection logic in a microprocessor-based overcurrent relay.

**Question 5:** What is the fundamental step in numerical relays that differentiates them from earlier static relays?

**Answer:** The fundamental step is the **digital signal processing** of sampled waveforms. While static relays use continuous analog signals and discrete electronic components, numerical relays sample the analog signals and process them digitally using algorithms implemented in software.

**Question 6:** A definite time overcurrent relay operates after a fixed time delay, irrespective of the fault current magnitude, once the pickup current is exceeded. (True/False)

**Answer:** True. This is the characteristic of a definite time overcurrent relay.

**Question 7:** A static instantaneous overcurrent relay's operation is primarily determined by comparing the measured current with a pre-set threshold. (True/False)

**Answer:** True. Once the current exceeds the set threshold, it trips almost instantaneously.

**Question 8:** What is the role of the ADC in a microprocessor-based relay?

**Answer:** The ADC (Analog-to-Digital Converter) converts the sampled analog current and voltage signals from the power system into digital values that the microprocessor can process.

**Question 9:** In the context of numerical relays, what is meant by "sampling"?

**Answer:** Sampling refers to the process of taking discrete measurements (values) of the analog voltage and current waveforms at regular, rapid intervals. This converts the continuous analog signal into a series of discrete digital points.

**Question 10:** Why is an anti-aliasing filter used in the analog input module of a microprocessor-based relay?

**Answer:** An anti-aliasing filter is used to remove frequencies above half the sampling rate (Nyquist frequency) from the analog signal before sampling. This prevents higher frequencies from being misinterpreted as lower frequencies during the sampling process, which would lead to incorrect digital representation of the waveform.

---

## Summary and Key Takeaways

*   Protective relays are critical for detecting faults and ensuring power system reliability.
*   **Electromechanical relays** (like induction type) use physical movement driven by electromagnetic forces. They are robust but slower.
*   **Static relays** use solid-state electronics, offering faster operation and higher reliability without moving parts.
*   **Microprocessor/Numerical relays** leverage digital signal processing, offering unparalleled flexibility, advanced features, programmability, and communication capabilities. They are the modern standard for power system protection.
*   The core of digital relay operation involves **sampling**, **analog-to-digital conversion**, and **digital signal processing** to execute protection algorithms.

---
This concludes Module 4, laying the groundwork for understanding the diverse and evolving landscape of protective relays in modern power systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
