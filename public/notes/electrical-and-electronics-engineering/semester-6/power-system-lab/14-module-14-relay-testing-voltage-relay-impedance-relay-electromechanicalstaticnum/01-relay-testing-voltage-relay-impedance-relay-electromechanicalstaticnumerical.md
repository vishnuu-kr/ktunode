---
title: "Relay Testing  –Voltage relay/ Impedance Relay (Electromechanical/Static/Numerical)"
subject: "POWER SYSTEM LAB"
module: "Module 14: Relay Testing  –Voltage relay/ Impedance Relay (Electromechanical/Static/Numerical)"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36803"
status: "completed"
scrapedAt: "2026-05-23T16:31:20.197Z"
---
# Power System Lab: Module 14 - Relay Testing (Voltage/Impedance Relays)

## 1. Introduction to Protective Relays

Protective relays are the cornerstone of modern power system protection. They are designed to detect abnormal conditions (faults) in a power system and initiate appropriate actions, typically tripping circuit breakers to isolate the faulty section. This prevents damage to expensive equipment, maintains system stability, and ensures the safety of personnel.

**Key Concepts:**

*   **Protection:** The process of safeguarding a power system from damage and ensuring its continued operation during abnormal conditions.
*   **Fault:** An abnormal condition in a power system, such as a short circuit, open circuit, or ground fault.
*   **Relay:** A sensing device that detects fault conditions based on changes in electrical quantities (voltage, current, frequency, impedance, etc.).
*   **Circuit Breaker:** A switching device that interrupts the flow of current when commanded by a protective relay.
*   **Setting:** The specific parameters of a relay that determine the conditions under which it will operate.

**Importance:**

*   **Equipment Protection:** Prevents damage to generators, transformers, transmission lines, and other vital components.
*   **System Stability:** Minimizes the duration of faults, thus reducing their impact on the overall stability of the power system.
*   **Personnel Safety:** Reduces the risk of electrical hazards.
*   **Reliability:** Ensures continuous power supply by quickly isolating faulty sections.

---

## 2. Types of Relays Covered in this Module

This module focuses on two important classes of protective relays: **Voltage Relays** and **Impedance Relays**. We will also explore their implementation in different technological eras: **Electromechanical**, **Static**, and **Numerical** relays.

### 2.1 Voltage Relays

Voltage relays operate based on the measurement of voltage levels in the power system. They are often used for protection against overvoltage or undervoltage conditions, which can indicate various system abnormalities.

**Types of Voltage Relays:**

*   **Overvoltage Relay:** Operates when the system voltage exceeds a predetermined set value.
    *   **Applications:** Protection of generators and motors from overvoltage, detection of islanding conditions.
*   **Undervoltage Relay:** Operates when the system voltage falls below a predetermined set value.
    *   **Applications:** Protection of motors from starting under low voltage, detection of system disturbances, load shedding schemes.
*   **Directional Voltage Relay:** Operates based on both the voltage magnitude and its phase angle relative to another voltage or current.
    *   **Applications:** Used in conjunction with directional current relays for fault detection and discrimination in transmission lines.

**Operating Principle (General):**

Voltage relays typically employ a voltage sensing element that compares the system voltage with a reference or setting. When the difference or ratio crosses a threshold, the relay's contacts change state.

**Examples of Voltage-Related Abnormalities:**

*   **Generator Overexcitation:** Can lead to increased voltage and potential damage.
*   **Load Rejection:** Can cause a sudden rise in voltage.
*   **System Instability/Islanding:** Can result in voltage collapse or abnormal voltage levels.
*   **Transformer Tap Changer Malfunction:** Can lead to voltage deviations.

### 2.2 Impedance Relays

Impedance relays are primarily used for the protection of transmission lines. They operate based on the apparent impedance seen by the relay at its terminals. During a fault on a transmission line, the impedance between the relay location and the fault point decreases.

**Operating Principle:**

The impedance relay measures the voltage and current at its terminals and calculates the apparent impedance using Ohm's Law: $Z = V/I$. The relay is set to operate when the measured impedance falls below a specific threshold value, indicating a fault within its protected zone.

**Types of Impedance Relays:**

*   **Ohm Relay (or Mho Relay):** This is the most common type of impedance relay. Its characteristic operating region in the R-X plane is a circle passing through the origin. The diameter of the circle corresponds to the impedance of the protected line.
    *   **Characteristic:** Operates when the impedance ($Z$) is less than a set value ($Z_{set}$). The characteristic can be represented as $|Z| \le Z_{set}$ in polar coordinates or $R^2 + X^2 \le Z_{set}^2$ in rectangular coordinates, where $Z_{set}$ is the impedance of the protected line.
    *   **Advantage:** It is insensitive to power swings (transient fluctuations in voltage and current that occur during system disturbances but are not faults).
*   **Reactance Relay:** Operates when the reactance component of the impedance is below a set value, with a voltage threshold to prevent operation during light load conditions.
    *   **Characteristic:** Operates when $X \le X_{set}$ and $V \ge V_{set}$.
    *   **Advantage:** Offers fast operation for faults close to the relay location.
    *   **Disadvantage:** More susceptible to operation during power swings.
*   **Quadrilateral Relay:** Offers a more flexible characteristic that can be adjusted to cover a wider range of fault types and system conditions. It is defined by four straight lines in the R-X plane.
    *   **Advantage:** Offers good coverage for various fault conditions and is less prone to maloperation during power swings compared to reactance relays.

**Protected Zone:**

Impedance relays protect a specific section of the transmission line. The impedance setting of the relay is typically set to the actual impedance of this protected section.

---

## 3. Relay Technologies: Electromechanical, Static, and Numerical

The underlying technology used to implement relaying functions has evolved significantly over time. Understanding these differences is crucial for testing and application.

### 3.1 Electromechanical Relays

These are the oldest type of relays, utilizing moving parts and electromagnetic principles for operation.

**Construction:**

*   **Moving Iron Type:** Utilizes the attraction or repulsion between a fixed electromagnet and a movable iron armature.
*   **Induction Type:** Employs a rotating disc or cup (similar to an energy meter) that rotates when torque is produced by the interaction of magnetic fluxes generated by current and voltage coils.

**Operating Principle:**

*   **Torque Production:** Current and voltage from the power system are used to create magnetic fields. These fields interact with moving parts (e.g., an armature or a disc) to produce torque.
*   **Operation:** When the torque due to the fault condition exceeds the opposing torque (provided by a spring or gravity), the relay operates, closing or opening its contacts.

**Testing:**

*   **Injecting Voltages and Currents:** Applying calibrated voltages and currents to the relay's input terminals.
*   **Measuring Operating Time:** Measuring the time taken for the relay to operate after the fault condition is applied.
*   **Pick-up and Drop-off Values:** Determining the minimum voltage or impedance at which the relay starts to operate (pick-up) and the maximum value at which it continues to operate (drop-off).
*   **Dial Settings:** Adjusting the settings (e.g., current setting, time multiplier setting) to verify their effect on the operating characteristics.

**Advantages:**

*   Robust and reliable.
*   Visually demonstrable operating principles.
*   Less susceptible to transient overloads.

**Disadvantages:**

*   Slower operating times compared to static and numerical relays.
*   Mechanical wear and tear, requiring periodic maintenance.
*   Limited flexibility in programming and complex characteristics.
*   Bulkier and heavier.
*   Susceptible to vibrations and dust.

### 3.2 Static Relays

These relays use semiconductor components (transistors, diodes, operational amplifiers, etc.) to perform relaying functions, eliminating moving parts.

**Construction:**

*   Utilize electronic circuits, printed circuit boards (PCBs), and integrated circuits (ICs).
*   Input signals (voltage and current) are conditioned and processed by electronic modules.

**Operating Principle:**

*   **Signal Conditioning:** Input voltages and currents are scaled down using transducers (e.g., voltage transformers, current transformers) and then filtered and amplified.
*   **Logic Circuits:** Electronic logic circuits perform the comparison and decision-making based on the conditioned signals.
*   **Output:** An output circuit drives a relay or solid-state switch to initiate tripping.

**Testing:**

*   **Injecting Voltages and Currents:** Similar to electromechanical relays, but often requires more precise signal generation.
*   **Verification of Electronic Circuits:** Testing individual components and modules of the relay.
*   **Phase Angle Measurement:** Crucial for directional and impedance relays, requiring accurate phase shifting capabilities during testing.
*   **Time Delay Verification:** Testing the accuracy of internal timers.

**Advantages:**

*   Faster operating times.
*   No moving parts, leading to less maintenance and higher reliability.
*   Greater accuracy and sensitivity.
*   Can implement more complex and custom relaying characteristics.
*   Smaller size and weight.

**Disadvantages:**

*   More susceptible to electrical noise and transients.
*   Requires stable DC power supply.
*   Less intuitive operating principles for some technicians.
*   Limited self-diagnostic capabilities compared to numerical relays.

### 3.3 Numerical Relays (Digital Relays)

These are the most advanced type of relays, utilizing microprocessors and digital signal processing (DSP) techniques to implement protection functions.

**Construction:**

*   **Microprocessor Unit (MPU):** The "brain" of the relay, executing software algorithms.
*   **Analog-to-Digital Converters (ADCs):** Convert analog voltage and current signals into digital data.
*   **Digital-to-Analog Converters (DACs):** Used for outputting control signals.
*   **Memory:** Stores firmware, settings, and event logs.
*   **Communication Interfaces:** For programming, monitoring, and interlocking with other protection devices.

**Operating Principle:**

*   **Sampling:** Analog voltage and current signals are sampled at high frequencies.
*   **Digitalization:** ADCs convert these samples into digital values.
*   **Digital Signal Processing (DSP):** Algorithms programmed into the MPU process the digital data to detect faults. This involves calculations like RMS value computation, Fourier analysis, and impedance calculation.
*   **Decision Making:** The MPU makes protection decisions based on the processed data and pre-programmed logic.
*   **Output:** The MPU commands the output circuitry to trip the circuit breaker.

**Testing:**

*   **Software-Based Testing:** Employs specialized testing software that communicates with the relay.
*   **Pre-defined Test Routines:** Utilities allow for automatic execution of various test cases.
*   **Dynamic Simulation:** Simulating fault conditions with varying voltage, current, and phase angles to test the relay's response.
*   **Event Log Analysis:** Examining the relay's internal logs to verify its recorded events and operations during tests.
*   **Communication Protocol Testing:** Verifying the relay's communication with other systems.
*   **Setting Verification:** Ensuring all programmed settings are correctly applied.
*   **Injection of Digital Values:** In some advanced test setups, digital representations of fault conditions can be directly injected.

**Advantages:**

*   Extremely fast and accurate.
*   Highly flexible and programmable.
*   Can implement multiple protection functions in a single unit.
*   Advanced self-diagnostic capabilities.
*   Detailed event logging and oscillography.
*   Sophisticated communication capabilities (e.g., IEC 61850).
*   Easier to update and modify protection schemes through software upgrades.

**Disadvantages:**

*   Requires specialized knowledge and software for testing and configuration.
*   Can be more susceptible to electromagnetic interference (EMI) if not properly shielded.
*   Higher initial cost.

---

## 4. Relay Testing Procedures and Standards

Testing of protective relays is crucial to ensure their correct operation and to verify their settings. This section outlines general procedures and relevant standards.

### 4.1 General Testing Procedures

Regardless of the relay technology, the fundamental principles of testing remain similar:

1.  **Visual Inspection:** Check for physical damage, loose connections, and cleanliness.
2.  **Power Supply Check:** Verify the relay's auxiliary DC power supply is within the specified range.
3.  **CT/VT Secondary Winding Check:** Ensure no open or short circuits in the CT/VT secondary connections to the relay.
4.  **Output Contact Check:** Verify the continuity of the trip circuit contacts.
5.  **Setting Verification:** Confirm that the relay's programmed settings match the intended protection scheme.
6.  **Functional Testing (Injection Testing):** This is the core of relay testing.
    *   **Single Input Injection:** Testing the response to voltage or current alone.
    *   **Combined Input Injection:** Applying both voltage and current simultaneously with controlled phase angles and magnitudes.
    *   **Pick-up Value Test:** Applying gradually increasing voltage/current/impedance until the relay operates.
    *   **Drop-off Value Test:** Applying gradually decreasing voltage/current/impedance until the relay de-energizes.
    *   **Operating Time Test:** Applying a fault condition and measuring the time taken for the relay to operate.
    *   **Characteristic Verification:** Testing at various points on the relay's R-X plane (for impedance relays) or V-f plane (for voltage relays) to ensure the characteristic is as specified.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 4.2 Standards and References

Several international and national standards provide guidelines for relay testing.

*   **IEC 60255 Series:** International standards for measuring relays and protection equipment. Specific parts deal with testing procedures, environmental conditions, and performance requirements.
    *   *IEC 60255-1:* General requirements.
    *   *IEC 60255-6:* DC current relays.
    *   *IEC 60255-8:* Impedance relays.
    *   *IEC 60255-24:* Electrical disturbance and immunity requirements.
*   **IEEE C37 Series:** Standards from the Institute of Electrical and Electronics Engineers, particularly relevant in North America.
    *   *IEEE C37.90:* Relays and relay systems associated with electric power and
      *   *IEEE C37.90.1:* Electromagnetic compatibility (EMC)
      *   *IEEE C37.90.2:* Radio-frequency interference (RFI)
      *   *IEEE C37.90.3:* Electrostatic discharge (ESD)
      *   *IEEE C37.90.4:* Test procedures for numerical relays.

**Key Information from Standards:**

*   **Test Injection Levels:** Specify the range of voltages, currents, and phase angles to be used for testing.
*   **Tolerance Limits:** Define the acceptable deviation for operating time, pick-up, and drop-off values.
*   **Environmental Conditions:** Specify temperature, humidity, and other environmental factors for testing.
*   **Test Equipment Requirements:** Outline the characteristics and calibration requirements for test sets.

---

## 5. Relay Testing Equipment

Specialized test equipment is required to perform accurate and efficient relay testing.

### 5.1 Electromechanical Relay Testing Equipment

*   **Variable AC/DC Power Supply:** To inject primary and secondary voltages and currents.
*   **Ammeters and Voltmeters:** For precise measurement of injected quantities.
*   **Timers:** Mechanical or electronic timers to measure operating time.
*   **Phase Shifter:** To control the phase angle between voltage and current.
*   **Resistance and Reactance Decades:** To simulate different impedance values.

### 5.2 Static and Numerical Relay Testing Equipment

*   **Protection Relay Test Sets (Secondary Injection Test Sets):** Sophisticated devices that can generate precisely controlled voltages, currents, and phase angles. They often have built-in timers and data acquisition capabilities.
    *   **Examples:** OMICRON CMC series, Doble F6000 series, SEREX 3 test equipment.
*   **Primary Injection Test Sets:** Used for testing the entire protection loop (CTs, relays, and breaker wiring) by injecting high currents. This is less common for relay-specific functional testing.
*   **Communication Interfaces and Software:** For connecting to and controlling numerical relays.

**Key Features of Modern Test Sets:**

*   **Multi-phase capability:** Can simulate three-phase fault conditions.
*   **High precision:** Accurate control over magnitude, phase, and frequency.
*   **Pre-programmed test templates:** For common relay types and standards.
*   **Reporting capabilities:** Generate detailed test reports.
*   **Simulation of different fault types:** Line-to-ground, line-to-line, three-phase faults.

---

## 6. Practical Considerations and Common Pitfalls in Relay Testing

*   **Incorrect Settings:** The most common cause of relay malfunction. Always double-check settings against design documentation.
*   **CT/VT Mismatch:** Using incorrect CT/VT ratios or characteristics can lead to incorrect impedance or voltage measurements.
*   **Phase Angle Errors:** Incorrect phase angle settings during injection can lead to misoperation, especially for directional and impedance relays.
*   **Power Swings:** For impedance relays, it's crucial to test their behavior during power swings to avoid maloperation. This often involves slow ramp-ups of voltage and current with specific phase relationships.
*   **Harmonics:** Consider the impact of harmonics on relay performance, especially for static and numerical relays.
*   **Environmental Conditions:** Ensure testing is done within specified temperature and humidity limits to avoid affecting relay performance.
*   **Test Set Calibration:** Regularly calibrate test equipment to ensure accuracy.
*   **Understanding Relay Curves:** Have a clear understanding of the relay's operating characteristic (e.g., circle diagram for Mho relay) when performing tests.
*   **Inadvertent Tripping:** Take precautions to prevent accidental tripping of the actual power system during live testing (e.g., use de-energized busbars, perform tests in a controlled lab environment).

---

## 7. Lab Exercises/Practice Questions

**Instructions:** For each question, assume you have a protection relay test set capable of injecting AC voltage and current with variable magnitude and phase.

**Question 1: Voltage Relay Testing (Undervoltage)**

You are testing an undervoltage relay with the following settings:
*   Pick-up voltage: 80% of nominal voltage (let's assume nominal voltage = 100V)
*   Drop-off voltage: 90% of pick-up voltage
*   Time delay: 0.5 seconds at 70% of pick-up voltage

**Task:**
a) Describe the procedure to test the pick-up voltage. What voltage should you apply and how should you adjust it?
b) Describe the procedure to test the drop-off voltage.
c) Describe how you would test the time delay. What voltage and current (if applicable) would you inject?

**Answer 1:**

a) **Pick-up Voltage:**
    *   Set the relay's current input to a nominal value (e.g., 1A or 5A, depending on the relay's current circuit).
    *   Inject a voltage of 100V.
    *   Gradually decrease the injected voltage from 100V.
    *   Observe the relay's operating indicator (e.g., LED) or output contacts. The pick-up voltage is the voltage at which the relay's contacts change state (e.g., trip contact closes). This value should be close to 80V.

b) **Drop-off Voltage:**
    *   Ensure the relay has operated by injecting a voltage below the pick-up value (e.g., 79V).
    *   Gradually increase the injected voltage from the operated state.
    *   Observe the relay's de-energized state (e.g., trip contact opens). The drop-off voltage is the voltage at which the relay's contacts revert to their normal state. This value should be close to 90% of 80V = 72V.

c) **Time Delay:**
    *   Inject a voltage of 70% of the pick-up voltage, which is $0.70 \times 80V = 56V$.
    *   Ensure the current input is set appropriately.
    *   Start the timer simultaneously with the injection of 56V.
    *   Measure the time taken for the relay's output contacts to change state (operate). This time should be approximately 0.5 seconds.

**Question 2: Impedance Relay Testing (Ohm Relay)**

You are testing an Ohm relay with the following settings:
*   Reach (impedance): 10 ohms
*   Maximum Reach Angle: 0 degrees (for simplicity, assuming resistive characteristic)

**Task:**
a) What is the impedance of the protected line the relay is designed to cover?
b) Describe the procedure to test the pick-up of this Ohm relay. What voltage, current, and phase angle would you inject to simulate a fault at the reach point?
c) If the relay's actual pick-up impedance is found to be 10.5 ohms, is it operating correctly according to its setting?

**Answer 2:**

a) The impedance of the protected line the relay is designed to cover is its **reach**, which is **10 ohms**.

b) **Testing Pick-up (Fault at Reach Point):**
    *   To simulate a fault at the reach point, you need to inject a voltage and current such that the apparent impedance ($Z = V/I$) equals the relay's reach setting (10 ohms).
    *   Assume the relay is designed to operate when the current exceeds a certain threshold at a given voltage, or more directly, when the impedance is less than the set value.
    *   **Injection Strategy:**
        *   Inject a voltage $V_{inj}$.
        *   Inject a current $I_{inj}$ such that $V_{inj} / I_{inj} = 10 \text{ ohms}$.
        *   For a simple Ohm relay with a maximum reach angle of 0 degrees (resistive characteristic), the phase angle between voltage and current should be close to 0 degrees.
        *   **Example Injection:** Inject $V_{inj} = 100V$ and $I_{inj} = 10A$ with a phase angle of 0 degrees between them. This results in an apparent impedance of $100V / 10A = 10 \text{ ohms}$.
    *   **Procedure:** Start with a low current and gradually increase it (or decrease voltage) while maintaining the 0-degree phase shift until the relay operates. The point at which it operates should correspond to an apparent impedance of 10 ohms.

c) If the relay's actual pick-up impedance is found to be 10.5 ohms, it is **not operating correctly according to its setting** of 10 ohms. The actual pick-up impedance should be close to the set value. This deviation might indicate a setting error, a calibration issue with the relay, or a fault in its internal components.

**Question 3: Comparing Relay Technologies**

List three key differences in the testing procedures or requirements between an electromechanical Ohm relay and a numerical Ohm relay.

**Answer 3:**

1.  **Test Equipment:**
    *   **Electromechanical:** May use simpler, analog-based test sets with variable AC supplies, meters, and timers.
    *   **Numerical:** Requires sophisticated digital protection relay test sets (software-controlled, multi-phase, precise waveform generation) and communication interfaces.

2.  **Test Signal Nature:**
    *   **Electromechanical:** Primarily focuses on injecting stable voltage and current to measure operating time and pick-up/drop-off points. Phase angles are important but might be adjusted manually.
    *   **Numerical:** Can simulate complex fault scenarios, including transient effects, harmonics, and dynamic changes in voltage and current. Testing often involves injecting digitized waveform patterns or executing pre-programmed test routines via software.

3.  **Data Output and Analysis:**
    *   **Electromechanical:** Test results are typically manual observations of operating time and settings.
    *   **Numerical:** Relays provide detailed event logs, oscillographic data, and can be tested through automated software, generating comprehensive digital reports. The analysis of these logs is a critical part of testing numerical relays.

---

## 8. Learning Outcomes Revisited

This module's content directly addresses the following learning outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.**
    *   While direct software modeling is not the focus here, understanding relay operating characteristics (e.g., impedance loci for impedance relays, voltage thresholds) is foundational for developing mathematical models of protection systems. Testing procedures require understanding the steady-state conditions (steady voltage and current) and sometimes transient conditions (sudden changes) that a relay must respond to. This knowledge informs the selection of parameters for system simulations.

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.**
    *   This module is explicitly about conducting tests on protective relays. We have covered the types of tests, the procedures, the equipment, and the relevant standards (IEC, IEEE) for voltage and impedance relays. By understanding these, students can plan and execute tests to analyze the performance of these critical components.

---

## 9. Important Points to Remember

*   **Relay testing is paramount for reliable power system operation.** Incorrectly set or faulty relays can lead to widespread outages or equipment damage.
*   **The type of relay technology (electromechanical, static, numerical) dictates the testing approach and equipment.**
*   **Understanding the relay's operating characteristic (e.g., R-X plane for impedance relays) is essential for designing effective tests.**
*   **Always refer to manufacturer's manuals and relevant standards (IEC/IEEE) for specific testing procedures and parameters.**
*   **Calibration of test equipment is critical for accurate test results.**
*   **Safety first!** Ensure all tests are conducted with appropriate safety precautions.

---

## 10. Reference Books

*   **"Power System Protection and Switchgear" by B. Ravindranath and M. Chander**
    *   Provides detailed explanations of various types of relays, including voltage and impedance relays, their operating principles, and characteristics. It also touches upon testing methods.
*   **"Power System Relaying" by William D. H.**
    *   A comprehensive text covering the theory, design, and application of protective relays. It includes detailed discussions on impedance relays, their characteristics, and testing techniques.
*   **"Protection of Electrical Networks" by P. M. Anderson**
    *   Offers insights into the application of relays in power system protection schemes and discusses testing philosophies.
*   **Relevant IEC and IEEE Standards (as mentioned in Section 4.2)**

---
This comprehensive set of notes covers the key aspects of relay testing for voltage and impedance relays, aligning with the specified learning and course outcomes. Remember to refer to the recommended textbooks for more in-depth understanding and practical examples.