---
title: "Capacitive Transducers: various capacitive transducers based upon familiar equation of capacitance (capacitive microphone)"
subject: "INSTRUMENTATION"
module: "Module 2: Sensors and Transducers"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5c0"
status: "completed"
scrapedAt: "2026-05-23T17:49:23.784Z"
---
# Instrumentation Study Notes: Module 2 - Sensors and Transducers

## Topic: Capacitive Transducers

### 1. Introduction to Capacitive Transducers (CO1, CO2, K2)

*   **Definition:** Capacitive transducers are devices that convert a physical quantity into a change in capacitance. They operate based on the principle that capacitance is dependent on physical parameters like distance between plates, area of plates, and the dielectric material between them.
*   **Familiar Equation of Capacitance:** The fundamental equation governing capacitance is:
    $C = (\epsilon_r * \epsilon_0 * A) / d$
    Where:
    *   $C$: Capacitance (in Farads)
    *   $\epsilon_r$: Relative permittivity (dielectric constant) of the material between the plates.
    *   $\epsilon_0$: Permittivity of free space (a constant, approximately $8.854 \times 10^{-12}$ F/m).
    *   $A$: Area of overlap between the conductive plates (in $m^2$).
    *   $d$: Distance between the conductive plates (in meters).

*   **Principle of Operation:** Capacitive transducers utilize the change in capacitance caused by a variation in one or more of the parameters ($A$, $d$, or $\epsilon_r$) due to the physical quantity being measured. This change in capacitance is then detected and converted into a usable electrical signal (voltage, current, frequency, etc.).

*   **Classification of Capacitive Transducers:**
    *   **Based on varying parameter:**
        *   **Variable Distance Type:** The distance ($d$) between the plates changes.
        *   **Variable Area Type:** The area of overlap ($A$) between the plates changes.
        *   **Variable Permittivity Type:** The dielectric constant ($\epsilon_r$) of the material between the plates changes.
    *   **Based on electrode configuration:**
        *   Parallel Plate
        *   Cylindrical
        *   Spherical

*   **Importance in Measurement Systems (CO1, K2):** Capacitive transducers are widely used for measuring various physical quantities due to their:
    *   High sensitivity
    *   Good frequency response
    *   Non-contact measurement capabilities
    *   Low power consumption
    *   Robustness

*   **Reference Points:**
    *   **Doebelin's Measurement Systems:** Chapter 5 (Transducers) provides a comprehensive overview of various transducer types, including capacitive transducers, detailing their principles and applications.
    *   **Electronic Instrumentation by Kalsi:** Chapter 7 (Transducers and Sensors) covers the fundamental principles of capacitive transducers and their practical implementations.

### 2. Types of Capacitive Transducers and Their Working (CO2, K2)

#### 2.1 Variable Distance Type Capacitive Transducers

*   **Princ:** The capacitance changes inversely with the distance ($d$) between the plates, as per the equation $C \propto 1/d$.
*   **Construction:** Typically consists of two conductive plates, one fixed and one movable. The movable plate is coupled to the physical quantity being measured.
*   **Working:** As the physical quantity changes, it causes the distance between the plates to vary, thus altering the capacitance.
*   **Applications:**
    *   **Pressure Measurement:** Pressure acts on a diaphragm, which in turn changes the distance between the diaphragm (one plate) and a fixed plate.
    *   **Displacement Measurement:** A linear or angular displacement can be coupled to a movable plate, changing its distance from a fixed plate.
    *   **Level Measurement:** The level of a liquid or solid can affect the distance between two electrodes.

#### 2.2 Variable Area Type Capacitive Transducers

*   **Princ:** The capacitance changes linearly with the area of overlap ($A$) between the plates, as per the equation $C \propto A$.
*   **Construction:** Consists of two plates, where one plate is designed to slide over the other, changing the effective overlapping area.
*   **Working:** As the physical quantity changes, it causes the sliding plate to move, altering the overlapping area and hence the capacitance.
*   **Applications:**
    *   **Linear Displacement Measurement:** A sliding contact varies the overlapping area.
    *   **Angular Displacement Measurement:** A rotating element varies the overlapping area.
    *   **Strain Gauges:** Certain strain gauges use a change in overlapping area to measure strain.

#### 2.3 Variable Permittivity Type Capacitive Transducers

*   **Princ:** The capacitance changes directly with the relative permittivity ($\epsilon_r$) of the dielectric material between the plates, as per the equation $C \propto \epsilon_r$.
*   **Construction:** The dielectric material between two fixed electrodes is varied. This variation can be achieved by changing the material, or by changing the volume of the dielectric between the electrodes.
*   **Working:** As the physical quantity alters the dielectric material between the electrodes, its permittivity changes, leading to a change in capacitance.
*   **Applications:**
    *   **Humidity Measurement:** Changes in humidity alter the dielectric properties of air or a hygroscopic material placed between electrodes.
    *   **Liquid Level Measurement:** Immersion of a probe in liquids with different dielectric constants changes the effective permittivity.
    *   **Material Composition Measurement:** Different materials have different dielectric properties.

*   **Reference Points:**
    *   **Sawhney AK:** Chapter 23 (Capacitance Type Pick-ups) offers detailed explanations and circuit diagrams for various capacitive transducers.
    *   **Doebelin's Measurement Systems:** Section 5.5 (Capacitive Transducers) provides a good overview of these types.

### 3. Capacitive Microphone (A Specific Example) (CO2, K2)

*   **Introduction:** A capacitive microphone (also known as an electrostatic microphone or condenser microphone) is a prime example of a variable distance type capacitive transducer. It's widely used in high-fidelity audio recording.
*   **Princ:** Based on the change in capacitance due to the movement of a diaphragm caused by sound waves.
*   **Construction:**
    *   **Diaphragm:** A thin, conductive, flexible membrane (often metallized plastic film) acts as one plate of the capacitor.
    *   **Backplate:** A rigid, perforated, conductive metal plate placed very close to the diaphragm acts as the second plate.
    *   **Dielectric:** The air gap between the diaphragm and the backplate serves as the dielectric.
    *   **Polarizing Voltage:** A constant DC voltage is applied across the diaphragm and the backplate.
*   **Working:**
    1.  **Sound Waves:** Incoming sound waves strike the diaphragm, causing it to vibrate.
    2.  **Diaphragm Movement:** The vibration of the diaphragm changes the distance ($d$) between the diaphragm and the backplate.
    3.  **Capacitance Change:** According to $C \propto 1/d$, as the distance changes, the capacitance between the plates also changes. The capacitance is at its maximum when the distance is minimum and vice-versa.
    4.  **Signal Generation:** This changing capacitance is converted into an electrical signal. Typically, the microphone is used in a circuit where a constant charge is maintained on the capacitor or a constant voltage is applied.
        *   **Constant Charge Method:** If the charge ($Q$) on the capacitor is kept constant, then $V = Q/C$. As $C$ changes, the voltage ($V$) across the capacitor changes, producing the audio signal. This method is less common now due to complexity.
        *   **Constant Voltage Method:** A constant DC polarizing voltage ($V_p$) is applied. The capacitance change then leads to a change in current flowing through a resistor connected in series. This current change is then amplified.
    5.  **Amplification:** The small AC signal generated is then amplified by an internal pre-amplifier (usually a FET or vacuum tube) to produce a usable output signal.

*   **Advantages of Capacitive Microphones:**
    *   Excellent frequency response.
    *   High sensitivity.
    *   Good transient response.
    *   Low distortion.

*   **Disadvantages:**
    *   Requires a power supply (phantom power or internal battery) for the polarizing voltage and pre-amplifier.
    *   More sensitive to humidity and temperature changes.
    *   Can be more fragile than dynamic microphones.

*   **Reference Points:**
    *   **Kalsi H S:** Chapter 7.3.2 (Capacitive Microphones) details the working principles and circuitry.
    *   **Doebelin's Measurement Systems:** Section 5.5.3 (Capacitive Microphones) offers a focused explanation.

### 4. Signal Conditioning for Capacitive Transducers (CO3, K2)

*   **Challenge:** The direct output from a capacitive transducer is a change in capacitance, which is not directly a voltage or current signal that can be easily processed by standard electronic circuits.
*   **Need for Signal Conditioning:** To utilize the output of a capacitive transducer, the change in capacitance must be converted into a more usable electrical signal.
*   **Common Signal Conditioning Techniques:**
    *   **Capacitance-to-Voltage Converter:**
        *   **Using an Op-Amp:** An operational amplifier (op-amp) can be configured as an integrator or differentiator circuit, where the capacitance change directly affects the output voltage.
        *   **Charge Amplifier:** An op-amp configured with a feedback capacitor can produce an output voltage proportional to the charge that flows into it, which is directly related to the capacitance change.
    *   **Capacitance-to-Frequency Converter:**
        *   **Using a relaxation oscillator (e.g., 555 timer):** The capacitance of the transducer can be incorporated into the timing circuit of an oscillator. A change in capacitance leads to a change in the output frequency of the oscillator. This is a very common and robust method.
    *   **Capacitance-to-Current Converter:**
        *   Less common but can be achieved using specialized circuits.

*   **Example (Capacitance-to-Frequency using 555 Timer):**
    *   In a typical astable multivibrator configuration of a 555 timer, the output frequency is determined by external resistors and capacitors. If the capacitive transducer replaces or is in parallel with one of the timing capacitors, its capacitance variation will directly alter the frequency.

*   **Reference Points:**
    *   **Kalsi H S:** Chapter 7.3.4 (Bridge Circuits for Capacitive Transducers) discusses how bridge circuits can be used for detection.
    *   **Doebelin's Measurement Systems:** Section 5.5.4 (Signal Conditioning Circuits) provides insights into converting capacitance changes.

### 5. Applications of Capacitive Transducers in Instrumentation (CO1, CO2, K2)

Capacitive transducers are versatile and find applications in a wide range of measurements:

*   **Displacement Measurement:**
    *   **Linear Displacement:** Measuring the position of a moving object.
    *   **Angular Displacement:** Measuring rotation, e.g., in control systems or position sensing.
*   **Pressure Measurement:** Diaphragm deflection changes capacitance.
*   **Level Measurement:**
    *   **Liquid Level:** Probes in tanks, even for corrosive liquids, as it's a non-contact method.
    *   **Solid Level:** Measuring the level of powders or granular materials.
*   **Humidity Measurement:** Measuring the moisture content in air or materials.
*   **Proximity Sensing:** Detecting the presence of objects without physical contact.
*   **Touch Screens:** The most common application, where touching the screen with a finger (which is conductive) changes the capacitance in localized areas, allowing position detection.
*   **Flow Measurement:** Certain flow meters utilize the change in dielectric properties as a fluid passes through a sensor.
*   **Force and Strain Measurement:** By deforming a structure, strain can cause a change in the gap between capacitive plates.

### 6. PLC Programming for Capacitive Transducer Applications (CO4, K3)

*   **Relevance:** While this topic is primarily about sensors, understanding how these sensors interface with control systems is crucial for instrumentation engineers. Programmable Logic Controllers (PLCs) are central to industrial automation.
*   **PLC Input:** Capacitive transducers typically output an analog signal (voltage or current) or a frequency signal after signal conditioning.
    *   **Analog Input Modules:** PLCs have analog input modules that can accept voltage (e.g., 0-10V) or current (e.g., 4-20mA) signals. These signals are then digitized by the PLC's Analog-to-Digital Converter (ADC).
    *   **High-Speed Counter/Frequency Input Modules:** If the capacitive transducer is converted to a frequency signal, specialized high-speed counter or frequency input modules on the PLC can be used to read the frequency.
*   **PLC Programming (Ladder Logic Example):**
    *   **Objective:** Control a pump based on the liquid level measured by a capacitive transducer.
    *   **Setup:**
        *   Capacitive transducer measures liquid level, producing a 4-20mA signal after conditioning.
        *   This 4-20mA signal is connected to an analog input channel (e.g., I:1/0) of the PLC.
        *   Desired level thresholds: `Low_Level` and `High_Level`.
    *   **Ladder Logic Snippet:**

    ```ladder
    // Assume Analog Input I:1/0 represents the 4-20mA signal
    // Scale the analog input to a meaningful level representation (e.g., 0-100%)
    // This scaling is done using PLC's built-in scaling functions or calculations.
    // Let's assume the scaled value is stored in a floating-point register F8:0

    // Define Level Thresholds (as constants or in data registers)
    // Low_Level = 20% (e.g., scaled value 200 if range is 0-1000)
    // High_Level = 80% (e.g., scaled value 800)

    // Output bits for pump control
    // O:2/0 - Pump ON

    // Level Monitoring and Control Logic
    |--| |-------|/|----------( )--|
    | I:1/0      Low_Level      O:2/0  |  // If level is above Low_Level, turn pump ON
    |            (F8:1)         |
    |                           |
    |--| |-------| |-----------( )--|
    | I:1/0      High_Level     O:2/0  |  // If level is above High_Level, turn pump OFF
    |            (F8:2)         |
    |                           |
    ```
    *   **Explanation:**
        *   The PLC reads the analog input value from the capacitive transducer.
        *   This value is scaled to represent the liquid level.
        *   The first rung turns the pump ON if the level is above the `Low_Level` threshold.
        *   The second rung turns the pump OFF if the level exceeds the `High_Level` threshold (prevents overflow).
        *   Note: Actual PLC ladder logic involves data registers, scaling instructions (e.g., `SCALE`, `UNSCALE`, `ADD`, `MUL`), and comparison instructions (`<`, `>`, `<=`, `>=`). The snippet above is a simplified representation.

*   **Considerations for PLC Integration:**
    *   **Signal Type:** Ensure the PLC's input module matches the conditioned output of the transducer (analog voltage, current, or frequency).
    *   **Scaling:** Implement proper scaling logic within the PLC to convert the raw input signal into a meaningful physical unit.
    *   **Filtering:** Apply digital filtering within the PLC program to smooth out noisy sensor readings.
    *   **Alarming and Interlocking:** Implement alarm logic for critical level deviations and interlocks to ensure safe operation.

*   **Reference Books:**
    *   **Programmable Logic Controllers Programming Methods and Applications by John R Hackworth, Frederick D Hackworth:** Chapters on Analog Signal Processing and Input/Output Modules are highly relevant.
    *   **Programmable Logic Controllers- Principles and applications by John W Webb, Ronald A. Reis:** Covers analog inputs and typical applications involving level control.

### 7. Important Points to Remember

*   **Capacitance Formula:** Always recall $C = (\epsilon_r * \epsilon_0 * A) / d$. Changes in $A$, $d$, or $\epsilon_r$ are the basis of capacitive transducer operation.
*   **Sensitivity:** Capacitive transducers are generally sensitive to small changes in the measured parameter.
*   **Non-Contact Measurement:** A key advantage for many applications, especially where physical contact might affect the measurement or damage the sensor.
*   **Signal Conditioning is Crucial:** Capacitive changes must be converted to voltage, current, or frequency signals for processing.
*   **Capacitive Microphones:** A classic example of a variable distance capacitive transducer.
*   **PLC Interface:** Understand how analog or frequency signals from conditioned capacitive transducers are read and processed by PLCs.

### 8. Practice Questions and Answers

**Question 1:** A capacitive transducer has a capacitance of 50 pF when the distance between its plates is 1 mm. If the distance is increased to 2 mm, what will be the new capacitance, assuming other factors remain constant?

**Answer:**
Using the relationship $C \propto 1/d$:
Let $C_1 = 50$ pF and $d_1 = 1$ mm.
Let $C_2$ be the new capacitance and $d_2 = 2$ mm.
So, $C_1 * d_1 = C_2 * d_2$
$50 \text{ pF} * 1 \text{ mm} = C_2 * 2 \text{ mm}$
$C_2 = (50 \text{ pF} * 1 \text{ mm}) / 2 \text{ mm}$
$C_2 = 25 \text{ pF}$

**Question 2:** Briefly explain the principle of operation of a capacitive microphone.

**Answer:**
A capacitive microphone consists of a thin, conductive diaphragm and a fixed backplate, forming a capacitor. Sound waves cause the diaphragm to vibrate, changing the distance between the diaphragm and the backplate. This change in distance alters the capacitance. A DC polarizing voltage is applied, and the changing capacitance converts the sound pressure variations into electrical voltage variations, which are then amplified.

**Question 3:** Name three physical quantities that can be measured using capacitive transducers.

**Answer:**
1.  Displacement (linear or angular)
2.  Pressure
3.  Level (liquid or solid)
4.  Humidity
5.  Proximity

**Question 4:** What is the primary purpose of signal conditioning for capacitive transducers?

**Answer:**
The primary purpose of signal conditioning is to convert the change in capacitance (which is difficult to measure directly) into a more usable electrical signal, such as a voltage, current, or frequency, that can be processed by electronic circuits or microcontrollers/PLCs.

**Question 5:** If a capacitive transducer is used to measure the level of a non-conductive liquid and is connected to a PLC's analog input module as a 4-20mA signal, what type of capacitive transducer configuration would be most suitable, and why?

**Answer:**
A **variable permittivity type** capacitive transducer would be most suitable. In this configuration, a probe (acting as one electrode) is immersed in the liquid. The liquid itself acts as the dielectric material between the probe and a second electrode (often the tank wall or another probe). As the liquid level changes, the amount of liquid dielectric between the electrodes changes, altering the overall effective permittivity of the dielectric medium, and thus the capacitance. This change in capacitance is then converted to a 4-20mA signal for the PLC.

---
This comprehensive study note covers the fundamental principles of capacitive transducers, their various types, the specific example of a capacitive microphone, signal conditioning techniques, common applications, and their integration with PLCs, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
