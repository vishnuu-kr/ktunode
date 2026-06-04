---
title: "Determination of insulation resistance and earth resistance."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 17: Determination of insulation resistance and earth resistance."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d03"
status: "completed"
scrapedAt: "2026-05-23T16:12:05.055Z"
---
# Circuits and Measurements Lab: Module 17 - Determination of Insulation Resistance and Earth Resistance

## Introduction

This module focuses on two critical safety and performance aspects of electrical systems: **Insulation Resistance** and **Earth Resistance**. Understanding and measuring these parameters is crucial for preventing electrical hazards, ensuring reliable operation of equipment, and meeting safety regulations. We will explore the principles, measurement techniques, and practical considerations for both.

## 1. Determination of Insulation Resistance

### 1.1 Key Concepts and Definitions

*   **Insulation:** A non-conducting material used to surround an electrical conductor, preventing leakage of current to other conductors or to the ground. Examples include rubber, PVC, porcelain, and fiberglass.
*   **Insulation Resistance ($R_{ins}$):** The resistance offered by the insulating material between conductors or between a conductor and the ground. It is a measure of the quality of the insulation. High insulation resistance indicates good insulation.
*   **Leakage Current ($I_{leak}$):** The small amount of current that flows through the insulation due to its finite resistance. This current can degrade the insulation over time and cause failures.
*   **Dielectric Strength:** The maximum electric field that an insulating material can withstand before breaking down and becoming conductive. Insulation resistance is related to, but not the same as, dielectric strength.
*   **Purpose of Measuring Insulation Resistance:**
    *   To assess the condition and integrity of insulation.
    *   To detect faults such as cracks, moisture ingress, or contamination in insulation.
    *   To ensure the safety of personnel and equipment by preventing shock hazards and short circuits.
    *   To comply with electrical safety standards and regulations.

### 1.2 Principles of Insulation Resistance Measurement

Insulation resistance is measured by applying a high DC voltage across the insulation and measuring the resulting leakage current. The resistance is then calculated using Ohm's Law:

$R_{ins} = \frac{V_{test}}{I_{leak}}$

Where:
*   $V_{test}$ is the applied test voltage.
*   $I_{leak}$ is the measured leakage current.

**Important Considerations for Testing:**

*   **Applied Voltage:** The test voltage must be high enough to cause a measurable leakage current but not so high as to damage the insulation. The voltage level is typically specified by relevant standards.
*   **Test Duration:** The leakage current is not constant immediately after applying the voltage. It initially includes capacitive charging current and absorption current before settling to a steady-state resistive leakage current. The measurement should be taken after the current has stabilized.
*   **Environmental Conditions:** Temperature, humidity, and cleanliness of the insulation can significantly affect insulation resistance. Measurements should ideally be taken under stable and dry conditions.

### 1.3 Instruments for Measuring Insulation Resistance

The most common instrument for measuring insulation resistance is the **Megger** (a trade name for a portable insulation tester).

#### 1.3.1 The Megger (Insulation Tester)

*   **Princ of Operation:** A Megger is essentially a portable insulation resistance tester that generates a high DC voltage (e.g., 100V, 250V, 500V, 1000V, or higher depending on the application) and has a sensitive ohmmeter incorporated within it. It typically uses a hand-cranked generator or a battery-powered DC-DC converter to produce the high test voltage.
*   **Construction:**
    *   **Generator/Converter:** Produces the high DC test voltage.
    *   **Ohmmeter:** Measures the leakage current.
    *   **Indicator:** A scale or digital display to show the insulation resistance value.
*   **Types:**
    *   **Hand-cranked Megger:** Requires manual cranking to generate the test voltage.
    *   **Battery-operated Megger:** Uses batteries and electronic circuitry to generate the test voltage, offering more convenience.
*   **Measurement Procedure:**
    1.  **Safety First:** Ensure the equipment under test is de-energized and disconnected from the power source.
    2.  **Connect the Tester:** Connect the "Line" terminal of the Megger to one conductor (e.g., phase wire) and the "Earth" terminal to another conductor (e.g., neutral or ground).
    3.  **Apply Test Voltage:** Operate the crank (or switch on the battery-powered unit) to apply the test voltage.
    4.  **Read the Measurement:** Observe the indicator for the insulation resistance value.
    5.  **Discharge:** After taking the reading, discharge any stored energy in the circuit by connecting a suitable resistor across the terminals.

#### 1.3.2 Other Methods (Less Common for Basic Labs)

*   **Using a Multimeter (with caution):** Some digital multimeters have a high resistance or insulation test function that can apply a low DC voltage (typically 9V or 12V). While useful for basic checks, these voltages are often insufficient for accurate assessment of insulation in high-voltage equipment.
*   **Using a dedicated Insulation Resistance Tester:** These are electronic devices similar to battery-operated Meggers, offering digital displays and advanced features.

### 1.4 Determination of Insulation Resistance - Practical Lab Steps

**Objective:** To measure the insulation resistance of various electrical components or circuits.

**Materials:**

*   Megger (Insulation Tester)
*   Wires with clips
*   Appliance/component to test (e.g., electric motor, transformer, extension cord, switchboard)

**Procedure:**

1.  **Identify Test Points:** Determine which points to measure between. Common tests include:
    *   **Phase to Earth:** Between a live conductor and the protective earth conductor.
    *   **Phase to Neutral:** Between the live conductor and the neutral conductor.
    *   **Neutral to Earth:** Between the neutral conductor and the protective earth conductor.
    *   **Across Terminals (with circuit open):** To check insulation between adjacent terminals of a device.
2.  **Ensure Safety:**
    *   The equipment to be tested must be **completely de-energized**.
    *   Disconnect all power sources.
    *   Ensure the test area is dry.
3.  **Connect Megger:**
    *   Connect the **LINE** terminal of the Megger to one of the conductors (e.g., phase wire).
    *   Connect the **EARTH** terminal of the Megger to the other conductor (e.g., ground or the other wire).
4.  **Perform the Test:**
    *   Operate the Megger for the recommended duration (usually 15-60 seconds) to allow the current to stabilize.
    *   Record the insulation resistance reading shown on the Megger.
5.  **Repeat Tests:** Perform tests for different combinations of conductors as required.
6.  **Discharge:** After completing the test, always discharge the capacitance of the tested circuit by connecting a suitable resistor across the terminals of the equipment.

**Example Scenario:** Testing the insulation resistance of an electric motor.

*   **Test 1: Phase to Earth:** Connect Megger's LINE to the motor's phase terminal, and EARTH to the motor's casing (ground).
*   **Test 2: Phase to Phase (if applicable, with windings disconnected):** Connect Megger's LINE to phase 1, and EARTH to phase 2.
*   **Test 3: Phase to Neutral (if applicable):** Connect Megger's LINE to the phase terminal, and EARTH to the neutral terminal.

### 1.5 Importance and Standards

*   **Minimum Acceptable Values:** Electrical codes and standards (e.g., IEC, NEC, IEEE) specify minimum acceptable insulation resistance values for different types of equipment and voltages. For example, a common rule of thumb for low-voltage equipment is that the insulation resistance in megohms should be at least 1000 times the rated voltage of the equipment in volts (e.g., for a 240V system, minimum $R_{ins} \approx 240 \text{ M}\Omega$).
*   **Trend Monitoring:** Regularly measuring insulation resistance and tracking its trend over time can help predict potential insulation failures before they occur. A decreasing trend is a cause for concern.

### 1.6 Relation to Course Outcomes

*   **CO4 (Determine the calibration characteristics of various meters used in electrical systems):** While not directly calibration, understanding how the Megger functions and provides a reading relates to the principles of measurement devices.
*   **CO2 (Verify DC network theorems):** The underlying principle of measuring resistance with voltage and current is directly related to Ohm's Law, a fundamental DC network theorem.

## 2. Determination of Earth Resistance

### 2.1 Key Concepts and Definitions

*   **Earth Electrode (Ground Electrode):** A conductive body buried in the earth, or a system of such bodies, providing an electrical connection to the earth.
*   **Earth Resistance ($R_e$):** The resistance of the path between the earth electrode and the general mass of the earth. It is a measure of how effectively the earth electrode is connected to the earth. A low earth resistance is desirable for safety.
*   **Earth Resistance Path:** The path of current flow from the earth electrode into the surrounding soil and then to a distant reference point (or the general mass of the earth).
*   **Purpose of Measuring Earth Resistance:**
    *   **Safety:** To ensure that in case of a fault (e.g., a live wire touching the metal casing of an appliance), the fault current can flow safely to the earth, tripping the protective devices (circuit breakers, fuses) and preventing electric shock.
    *   **Lightning Protection:** To provide a low-impedance path for lightning strikes to dissipate into the ground.
    *   **Equipment Protection:** To protect sensitive electronic equipment from surges and transients by providing a stable earth reference.
    *   **Electromagnetic Interference (EMI) Shielding:** In some cases, proper earthing is essential for the effectiveness of EMI shielding.

### 2.2 Principles of Earth Resistance Measurement

Measuring earth resistance requires injecting a current into the earth electrode and measuring the potential rise at that electrode relative to a distant point.

#### 2.2.1 Two-Electrode Method (Basic Principle, Limited Accuracy)

This method is a simplified concept where a known current is passed through the earth electrode under test and a second electrode, and the voltage drop between them is measured. However, this method suffers from the influence of the resistance of the second electrode and the soil between them.

#### 2.2.2 Three-Electrode Method (Fall-of-Potential Method)

This is the most common and accurate method for measuring earth resistance. It involves using the earth electrode under test (let's call it **E** or **P**) and two additional auxiliary electrodes:

*   **Current Electrode (C or P2):** Used to inject current into the earth.
*   **Potential Electrode (P or P1):** Used to measure the potential rise.

**Procedure:**

1.  **Electrode Placement:**
    *   The **Earth Electrode (E)** is the electrode whose resistance is to be measured.
    *   The **Current Electrode (C)** is placed at a significant distance from E (typically 10-20 meters or more, depending on soil resistivity and the size of E) in a straight line from E.
    *   The **Potential Electrode (P)** is placed at a midpoint between E and C, at a distance of approximately half the distance between E and C.

    ```
    E ------ P ------ C
    (Electrode under test)  (Potential Electrode)  (Current Electrode)
    ```

2.  **Connections:**
    *   A known AC current is injected between electrode **E** and electrode **C**.
    *   The voltage drop between electrode **E** and electrode **P** is measured.

3.  **Calculation:** The earth resistance ($R_e$) is calculated using Ohm's Law:

    $R_e = \frac{V_{EP}}{I_{EC}}$

    Where:
    *   $V_{EP}$ is the voltage measured between electrode E and electrode P.
    *   $I_{EC}$ is the current injected between electrode E and electrode C.

**Why this method works:** By placing the potential electrode (P) midway, the influence of the resistance of electrode P and the soil between E and P is minimized. The main voltage drop measured is due to the resistance of electrode E and the soil surrounding it.

#### 2.2.3 Four-Electrode Method (For Higher Accuracy and Varying Soil Conditions)

This method is an extension of the three-electrode method and provides even greater accuracy, especially in situations where soil resistivity is not uniform or when very low earth resistance values are critical.

*   **Electrode Placement:**
    *   Electrode **E1** (under test)
    *   Electrode **P1** (potential)
    *   Electrode **C1** (current)
    *   Electrode **P2** (potential)
    *   Electrode **C2** (current)

    Arranged in a line: E1 --- P1 --- C1 --- P2 --- C2

*   **Connections:**
    *   Current is injected between **E1** and **C2**.
    *   Voltage is measured between **P1** and **P2**.

*   **Calculation:**

    $R_e = \frac{V_{P1P2}}{I_{E1C2}}$

    The four-electrode method is often used in conjunction with soil resistivity measurements (e.g., Wenner Array) where four electrodes are placed at equal spacing.

### 2.3 Instruments for Measuring Earth Resistance

The instrument used for measuring earth resistance is called an **Earth Tester** or **Earth Resistance Meter**. These are typically portable devices that generate the test current and measure the voltage drop.

#### 2.3.1 Electronic Earth Testers

*   **Princ of Operation:** These modern testers use electronic circuitry to generate a stable AC test current (often at a specific frequency like 50/60 Hz or a higher frequency to avoid stray DC currents and power line interference) and measure the resulting voltage drop. They often have built-in indicators and can perform calculations automatically.
*   **Features:**
    *   Digital display of resistance.
    *   Automatic ranging.
    *   Built-in check for auxiliary electrode resistance (to ensure accurate measurements).
    *   Portability.

#### 2.3.2 Older Earth Testers (Induction Type)

These used a hand-cranked generator similar to a Megger but designed to generate AC voltage and current for earth resistance measurements. They are less common now.

### 2.4 Determination of Earth Resistance - Practical Lab Steps

**Objective:** To measure the earth resistance of an earthing electrode.

**Materials:**

*   Earth Tester (Earth Resistance Meter)
*   Earth Electrode under test
*   Two auxiliary electrodes (e.g., metal rods)
*   Connecting leads (typically of specified lengths and colors for the tester)

**Procedure:**

1.  **Preparation:**
    *   Ensure the earth electrode under test is properly installed.
    *   Ensure the area is safe and accessible.
    *   **Disconnect the earth electrode from the main electrical system** for the measurement. This is crucial to avoid measuring the combined resistance of the earth electrode and the connected system.
2.  **Electrode Placement (Three-Electrode Method):**
    *   Place the **Current Electrode (C)** at a suitable distance (e.g., 10-20 meters) from the Earth Electrode (E).
    *   Place the **Potential Electrode (P)** at a midpoint between E and C (e.g., 5-10 meters from E).
    *   Ensure all electrodes are driven firmly into the soil to ensure good contact. If the soil is dry or hard, water can be sprinkled around the electrodes to improve contact, but avoid over-saturation which can skew readings.
3.  **Connect Earth Tester:**
    *   Connect the **E** terminal of the Earth Tester to the Earth Electrode under test.
    *   Connect the **C** terminal of the Earth Tester to the Current Electrode.
    *   Connect the **P** terminal of the Earth Tester to the Potential Electrode.
    *   Follow the specific connection diagram provided with your Earth Tester.
4.  **Perform the Test:**
    *   Turn on the Earth Tester.
    *   Press the "Measure" or "Test" button.
    *   Wait for the reading to stabilize. The tester will inject current and measure the voltage.
    *   Record the earth resistance reading.
5.  **Check Auxiliary Electrode Resistance (if supported):** Some testers have a feature to check if the resistance of the auxiliary electrodes (C and P) is low enough for an accurate measurement. If the auxiliary electrode resistance is too high, the reading will be unreliable. In such cases, move the auxiliary electrodes further away or to a location with better soil contact.
6.  **Repeat Tests:** If possible, repeat the measurement by reversing the polarity of the test current or by moving the auxiliary electrodes to different positions (but maintaining the overall configuration) to verify the reading.
7.  **Reconnect:** After completing the measurement, disconnect the Earth Tester and reconnect the Earth Electrode to the main electrical system.

**Example Scenario:** Measuring the earth resistance of a building's grounding rod.

*   The grounding rod is **E**.
*   Drive a second rod 15 meters away for **C**.
*   Drive a third rod 7.5 meters away, between E and C, for **P**.
*   Connect the Earth Tester terminals as per the instrument's manual: E to the grounding rod, C to the second rod, P to the third rod.
*   Take the reading.

### 2.5 Importance and Standards

*   **Acceptable Values:** Standards like IEEE Std 142 (Green Book) and IEC 60364 recommend specific earth resistance values. For general safety, a value of **5 ohms or less** is often considered good. For sensitive electronic equipment or lightning protection, even lower values (e.g., 1 ohm or less) might be required.
*   **Factors Affecting Earth Resistance:**
    *   **Soil Resistivity:** This is the most significant factor. It varies with soil type (clay, sand, rock), moisture content, temperature, and chemical composition.
    *   **Electrode Size and Shape:** Larger surface area in contact with the soil generally reduces resistance.
    *   **Electrode Depth:** Deeper electrodes generally encounter soil with lower resistivity.
    *   **Electrode Material:** Copper has excellent conductivity.
    *   **Soil Compaction:** Tightly packed soil offers less resistance.
    *   **Presence of Electrolytes:** Salts or moisture in the soil can lower resistivity.

### 2.6 Relation to Course Outcomes

*   **CO2 (Verify DC network theorems):** Again, the core principle of measuring resistance using voltage and current is based on Ohm's Law and series/parallel resistance concepts, which are fundamental DC network theorems.
*   **CO4 (Determine the calibration characteristics of various meters used in electrical systems):** Understanding the operation of the Earth Tester, its internal circuitry for generating current and measuring voltage, and how these are used to derive resistance, relates to the functioning of measurement instruments.

## Summary and Key Points to Remember

### Insulation Resistance

*   **Purpose:** Safety and equipment integrity.
*   **Instrument:** Megger (Insulation Tester).
*   **Princ:** Apply high DC voltage, measure leakage current.
*   **Key Takeaways:**
    *   **Always de-energize** the equipment before testing.
    *   Discharge capacitive circuits after testing.
    *   Minimum acceptable values are specified by standards.
    *   Decreasing trend indicates potential problems.

### Earth Resistance

*   **Purpose:** Safety (fault current dissipation), lightning protection.
*   **Instrument:** Earth Tester (Earth Resistance Meter).
*   **Princ:** Inject current, measure voltage drop using auxiliary electrodes (typically three-electrode method).
*   **Key Takeaways:**
    *   **Disconnect the earth electrode from the system** during measurement.
    *   Auxiliary electrode resistance is critical for accuracy.
    *   Soil resistivity is the dominant factor influencing earth resistance.
    *   Low earth resistance is crucial for effective earthing.

## Practice Questions and Answers

**Insulation Resistance Questions:**

1.  **What is the primary purpose of measuring insulation resistance?**
    *   **Answer:** To assess the condition and integrity of insulating materials in electrical equipment and to ensure safety by preventing leakage currents and potential shocks.

2.  **What instrument is commonly used to measure insulation resistance?**
    *   **Answer:** A Megger (Insulation Tester).

3.  **If a Megger reads very low insulation resistance, what does it indicate?**
    *   **Answer:** It indicates a fault in the insulation, such as cracks, moisture, or breakdown, which can lead to leakage current and potential hazards.

4.  **Why is it important to discharge a circuit after measuring its insulation resistance?**
    *   **Answer:** High voltage insulation testers can charge the capacitance of the circuit. Discharging the circuit prevents potential electric shock to personnel and damage to sensitive electronic components when the circuit is re-energized or handled.

5.  **What are two common tests performed for insulation resistance?**
    *   **Answer:** Phase-to-Earth and Phase-to-Neutral (or Phase-to-Phase depending on the system).

---

**Earth Resistance Questions:**

1.  **What is the acceptable range for earth resistance in most general electrical safety applications?**
    *   **Answer:** Typically 5 ohms or less is considered good, though specific standards may vary.

2.  **What is the most common method for measuring earth resistance accurately?**
    *   **Answer:** The Three-Electrode Method (Fall-of-Potential Method).

3.  **What are the three electrodes used in the three-electrode method, and what is their function?**
    *   **Answer:**
        *   **E (Earth Electrode):** The electrode whose resistance is being measured.
        *   **C (Current Electrode):** Injects a test current into the earth.
        *   **P (Potential Electrode):** Measures the voltage drop relative to the earth electrode.

4.  **Why is it crucial to disconnect the earth electrode from the main electrical system before measuring its resistance?**
    *   **Answer:** To ensure that the measurement is only of the earth electrode's resistance to the general mass of the earth, and not affected by the parallel resistance of the connected electrical system's earthing network.

5.  **Name three factors that can affect the measured earth resistance.**
    *   **Answer:** Soil resistivity, electrode depth, electrode surface area, soil moisture content, soil temperature, electrode material.

---

**Combined Question:**

6.  **You are testing a portable electric heater. You measure its insulation resistance and find it to be 1.5 MΩ. The heater is rated at 240V. Is this value acceptable? You then measure the earth resistance of the power outlet's grounding pin and find it to be 15 Ω. Is this value likely to provide adequate safety for the heater?**
    *   **Answer:**
        *   **Insulation Resistance:** A common rule of thumb for insulation resistance is 1000 times the rated voltage (in MΩ). For 240V, this would be 240 MΩ. Since 1.5 MΩ is significantly lower than 240 MΩ, the insulation resistance is **not acceptable**, and the heater should not be used until the insulation is checked and repaired.
        *   **Earth Resistance:** 15 Ω is quite high for an earth connection. While it might not prevent the unit from functioning, it's unlikely to provide sufficient fault current path to quickly trip protective devices in case of a fault. A value of 5 Ω or less is generally preferred for safety. This 15 Ω value could be a safety concern.
