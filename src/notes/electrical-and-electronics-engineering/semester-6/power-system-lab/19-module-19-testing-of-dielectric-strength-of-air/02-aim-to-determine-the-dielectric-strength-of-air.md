---
title: "Aim: To determine the dielectric strength of air."
subject: "POWER SYSTEM LAB"
module: "Module 19: Testing of dielectric strength of air"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36813"
status: "completed"
scrapedAt: "2026-05-23T16:31:36.774Z"
---
# POWER SYSTEM LAB: Module 19 - Testing of Dielectric Strength of Air

## Topic: Aim: To Determine the Dielectric Strength of Air

### 1. Introduction

The ability of an electrical insulator to withstand an applied voltage without undergoing electrical breakdown is known as its **dielectric strength**. In power systems, air is a ubiquitous dielectric medium used in various components like overhead lines, transformers, switchgear, and substations. Understanding and quantifying the dielectric strength of air is crucial for ensuring the safe and reliable operation of these systems. This experiment aims to determine the dielectric strength of air under specific conditions.

### 2. Learning Outcomes

Upon successful completion of this experiment, students will be able to:

*   **Understand the concept of dielectric strength and its significance in power systems.**
*   **Identify the factors affecting the dielectric strength of air.**
*   **Set up and operate a high voltage testing apparatus for air gap breakdown.**
*   **Measure the breakdown voltage of air for different electrode configurations and gap distances.**
*   **Calculate and interpret the dielectric strength of air.**
*   **Relate experimental findings to theoretical concepts and standards.**

### 3. Course Outcomes Alignment

This module directly contributes to the following course outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (Knowledge Level: K3)
    *   While this experiment is hands-on, the understanding gained about breakdown phenomena can inform the development of mathematical models for insulation coordination and fault analysis. The data collected can be used to validate such models.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.** (Knowledge Level: K3)
    *   This experiment is a direct application of CO2, as it involves conducting a specific test (dielectric breakdown test) on a fundamental insulating medium (air) as per established principles and practices.

### 4. Key Concepts and Definitions

*   **Dielectric Strength ($E_d$)**: The maximum electric field intensity that a dielectric material can withstand before experiencing electrical breakdown. It is typically expressed in kV/mm or MV/m.
    *   $E_d = \frac{V_b}{d}$
        *   Where:
            *   $V_b$ is the breakdown voltage (kV).
            *   $d$ is the gap distance between electrodes (mm).

*   **Electrical Breakdown**: The phenomenon where an insulating material loses its insulating properties due to the application of an excessively high electric field, leading to a sudden increase in current and often permanent damage. In gases like air, this involves ionization and the formation of a conductive plasma.

*   **Paschen's Law**: A fundamental law in gas discharge physics that relates the breakdown voltage of a gas to the product of the gas pressure ($p$) and the electrode gap distance ($d$). It states that the breakdown voltage depends on the *pd* product, not individually on pressure or gap distance.
    *   The law predicts a minimum breakdown voltage for a specific *pd* value, and the breakdown voltage increases for both smaller and larger *pd* values.

*   **Corona Discharge**: A partial electrical discharge that occurs in the region of high electric field intensity around sharp electrodes or conductors. It is a precursor to complete breakdown and is characterized by a visible glow and audible hissing sound.

*   **Uniform Electric Field**: An electric field where the field strength is constant in magnitude and direction throughout a region. This is typically achieved with parallel plane electrodes or concentric cylinders.

*   **Non-uniform Electric Field**: An electric field where the field strength varies significantly in magnitude and direction, often occurring with sharp electrodes or point-to-plane configurations.

*   **Spark Breakdown**: The complete electrical breakdown of a gas gap, characterized by a sudden spark discharge that bridges the electrodes.

*   **Impulse Voltage**: A transient voltage that rises rapidly to a peak value and then decays, typically used to simulate lightning or switching surges in power systems.

*   **AC Voltage**: Alternating current voltage, which varies sinusoidally with time.

*   **DC Voltage**: Direct current voltage, which is constant in magnitude and direction.

### 5. Factors Affecting Dielectric Strength of Air

The dielectric strength of air is not a constant value and is influenced by several factors:

*   **Electrode Configuration**: The shape and geometry of the electrodes significantly impact the electric field distribution and hence the breakdown voltage.
    *   **Uniform field (e.g., parallel plates):** Higher breakdown voltage for a given gap.
    *   **Non-uniform field (e.g., point-to-plane):** Lower breakdown voltage, prone to corona discharge at lower voltages.

*   **Gap Distance ($d$)**: For uniform fields, the breakdown voltage generally increases with gap distance. However, the dielectric strength (kV/mm) might show slight variations due to edge effects and the formation of leader discharges at larger gaps.

*   **Pressure ($p$)**: According to Paschen's Law, breakdown voltage is a function of the product $pd$.
    *   At standard atmospheric pressure, air has a certain dielectric strength.
    *   Reducing pressure generally reduces dielectric strength.
    *   Increasing pressure can increase dielectric strength up to a certain point, after which it may decrease again (as per Paschen's curve).

*   **Temperature ($T$)**: Higher temperatures generally lead to lower dielectric strength as air molecules become more energetic and easier to ionize.

*   **Humidity**: The presence of water vapor (humidity) in the air generally reduces its dielectric strength. Water molecules can facilitate ionization processes.

*   **Presence of Impurities**: Dust, smoke, or other particulate matter in the air can act as ionization centers, lowering the breakdown voltage.

*   **Waveform of Applied Voltage**:
    *   **AC breakdown voltage**: Generally lower than DC breakdown voltage due to continuous ionization cycles.
    *   **DC breakdown voltage**: Higher than AC breakdown voltage.
    *   **Impulse breakdown voltage**: Can be higher or lower than AC/DC breakdown voltage depending on the impulse shape and polarity, and the gap characteristics (e.g., $50\%$ impulse flashover voltage).

### 6. Experimental Setup and Procedure

**Objective:** To determine the dielectric strength of air for a given electrode configuration and gap distance.

**Apparatus Required:**

1.  **High Voltage AC/DC Generator:** Capable of generating voltages up to the expected breakdown voltage of air. Usually a step-up transformer for AC or a cascade rectifier for DC.
2.  **Voltage Measuring Device:**
    *   **Sphere Gap Voltmeter:** For accurate measurement of AC voltages, especially in non-uniform fields or when calibration is required.
    *   **Potential Divider (Capacitive or Resistive):** For measuring higher AC or DC voltages.
    *   **Spark Gap (standardized):** Can be used for direct measurement if the gap distance and electrode configuration are precisely known and conform to standards (e.g., kV/mm).
3.  **Electrode Assembly:**
    *   **Parallel Plane Electrodes:** For uniform field testing.
    *   **Point-to-Plane Electrodes:** For non-uniform field testing.
    *   **Sphere Gap Electrodes:** For calibration and high-voltage measurement.
4.  **Insulating Base/Support:** To mount the electrodes and maintain insulation.
5.  **Measuring Scale/Vernier Caliper:** To accurately measure the gap distance between electrodes.
6.  **Safety Equipment:** Insulating mats, gloves, safety barriers, discharge rod.

**Procedure:**

1.  **Setup the Electrode Assembly:**
    *   Choose the desired electrode configuration (e.g., parallel plates).
    *   Ensure the electrodes are clean and free from dust or contaminants.
    *   Mount the electrodes on the insulating base.
    *   Set an initial gap distance ($d$) between the electrodes using the measuring scale or Vernier caliper. Ensure the gap is set accurately.

2.  **Connect the High Voltage Source:**
    *   Connect one electrode to the high voltage output of the transformer/generator.
    *   Connect the other electrode to the ground.
    *   Connect the voltage measuring device in parallel across the electrodes (or use a potential divider for high voltages).

3.  **Safety Precautions:**
    *   Ensure the testing area is clear and only authorized personnel are present.
    *   Use appropriate personal protective equipment (PPE).
    *   Ensure all connections are secure and insulated.
    *   Have a discharge rod ready to safely discharge any accumulated charge after the test.

4.  **Perform the Test:**
    *   Start with a relatively large gap distance or a low voltage.
    *   Slowly increase the applied voltage from the HV source, observing the voltmeter.
    *   Watch for any signs of corona discharge (hissing sound, faint glow).
    *   Continue increasing the voltage until spark breakdown occurs across the gap.
    *   **Immediately switch off the HV supply** upon observing the breakdown.
    *   Record the breakdown voltage ($V_b$) from the voltmeter.
    *   Measure and record the exact gap distance ($d$).

5.  **Repeat for Different Gap Distances:**
    *   Adjust the gap distance to different values (e.g., increase or decrease $d$).
    *   Repeat steps 4 to record $V_b$ for each new gap distance.

6.  **Repeat for Different Electrode Configurations (Optional but Recommended):**
    *   If time and resources permit, repeat the procedure with different electrode configurations (e.g., point-to-plane) to observe the effect on breakdown voltage.

7.  **Repeat for Different Environmental Conditions (Optional):**
    *   If possible, conduct tests at different ambient pressures or humidity levels to observe their impact.

8.  **Discharge:**
    *   After completing all measurements, ensure the HV supply is off and then use the discharge rod to safely discharge the electrodes and any connected high-voltage components.

### 7. Data Analysis and Calculation

*   **Calculate Dielectric Strength:** For each measured breakdown voltage ($V_b$) and corresponding gap distance ($d$), calculate the dielectric strength using the formula:
    *   $E_d = \frac{V_b}{d}$ (kV/mm or MV/m)

*   **Plotting the Results:**
    *   Plot $V_b$ vs. $d$ for the tested electrode configuration.
    *   Plot calculated $E_d$ vs. $d$ or $E_d$ vs. $V_b$. This helps visualize the relationship.

*   **Comparison with Standards:** Compare the obtained breakdown voltages and calculated dielectric strengths with values specified in relevant standards (e.g., IEC standards for high voltage testing).

*   **Paschen's Law Verification (if testing with varying pressure/gap):** Plot $V_b$ against the $pd$ product to observe the characteristic Paschen curve.

### 8. Examples

**Example 1: Parallel Plate Electrodes**

*   **Electrode Configuration:** Parallel Plates
*   **Applied Voltage:** AC
*   **Measured Data:**
    *   Gap Distance ($d_1$) = 5 mm, Breakdown Voltage ($V_{b1}$) = 25 kV
    *   Gap Distance ($d_2$) = 10 mm, Breakdown Voltage ($V_{b2}$) = 55 kV
    *   Gap Distance ($d_3$) = 15 mm, Breakdown Voltage ($V_{b3}$) = 80 kV

*   **Calculations:**
    *   Dielectric Strength for $d_1$: $E_{d1} = \frac{25 \text{ kV}}{5 \text{ mm}} = 5 \text{ kV/mm}$
    *   Dielectric Strength for $d_2$: $E_{d2} = \frac{55 \text{ kV}}{10 \text{ mm}} = 5.5 \text{ kV/mm}$
    *   Dielectric Strength for $d_3$: $E_{d3} = \frac{80 \text{ kV}}{15 \text{ mm}} \approx 5.33 \text{ kV/mm}$

**Observation:** For a uniform field, the dielectric strength of air is roughly constant for these gap distances, with slight variations possibly due to fringe effects at larger gaps or the onset of non-uniform field behavior. The average dielectric strength of air in a uniform field is approximately 3 kV/mm or 3 MV/m at standard atmospheric conditions. The values obtained here are higher, indicating potentially more ideal conditions or a different type of breakdown mechanism.

**Example 2: Point-to-Plane Electrodes**

*   **Electrode Configuration:** Point-to-Plane
*   **Applied Voltage:** DC (positive polarity)
*   **Measured Data:**
    *   Gap Distance ($d_1$) = 10 mm, Corona Onset Voltage ($V_{co1}$) = 15 kV, Spark Breakdown Voltage ($V_{b1}$) = 22 kV
    *   Gap Distance ($d_2$) = 20 mm, Corona Onset Voltage ($V_{co2}$) = 28 kV, Spark Breakdown Voltage ($V_{b2}$) = 40 kV

*   **Calculations (for breakdown voltage):**
    *   Dielectric Strength for $d_1$: $E_{d1} = \frac{22 \text{ kV}}{10 \text{ mm}} = 2.2 \text{ kV/mm}$
    *   Dielectric Strength for $d_2$: $E_{d2} = \frac{40 \text{ kV}}{20 \text{ mm}} = 2.0 \text{ kV/mm}$

**Observation:** In a non-uniform field, corona discharge occurs at lower voltages before complete breakdown. The calculated dielectric strength tends to be lower than in a uniform field, and it can be more sensitive to gap distance due to the localized high electric fields.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. Textbooks and Reference Books

*   **"High Voltage Engineering Fundamentals" by William H. Hayt Jr. and John A. Buck**
    *   This textbook provides comprehensive coverage of dielectric phenomena, breakdown mechanisms in gases, and high-voltage testing techniques, including details relevant to air insulation and electrode configurations.
*   **"High Voltage Engineering" by Pradip Kumar Saha**
    *   Offers detailed explanations of Paschen's Law, breakdown processes in gases, corona discharge, and various testing methods for dielectric strength, which are directly applicable to this experiment.
*   **"Introduction to High Voltage Engineering" by Earle K. Comer**
    *   Covers fundamental principles of electrical insulation and dielectric breakdown, with specific examples related to gaseous insulation and factors influencing it.
*   **Relevant Standards (e.g., IEC 60060 series for high-voltage testing techniques):** These standards provide specific guidelines on test procedures, electrode geometries, and measurement methods for ensuring comparability and accuracy of results.

### 10. Important Points to Remember

*   **Safety First:** Always prioritize safety when working with high voltage. Ensure proper grounding, use PPE, and follow established safety protocols.
*   **Cleanliness:** Keep electrodes and the test environment clean. Dust and moisture significantly affect breakdown voltage.
*   **Accurate Measurement:** Precise measurement of the gap distance and breakdown voltage is critical for accurate calculation of dielectric strength.
*   **Environmental Conditions:** Be aware of and note the ambient temperature, pressure, and humidity, as these can influence the results.
*   **Electrode Shape Matters:** The shape of the electrodes dictates the uniformity of the electric field and therefore the breakdown voltage and the onset of corona.
*   **Paschen's Law is Key:** Understand that breakdown voltage in gases is primarily a function of the *pd* product.
*   **Distinguish Breakdown Types:** Be aware of the difference between corona onset and complete spark breakdown.
*   **Calibration:** For precise measurements, consider calibrating your voltage measuring instrument using a standard sphere gap.

### 11. Practice Questions and Exercises

**Question 1:** Define dielectric strength of air and state its typical units.

**Answer:** Dielectric strength of air is the maximum electric field intensity that air can withstand before electrical breakdown occurs. Its typical units are kV/mm or MV/m.

**Question 2:** List at least four factors that affect the dielectric strength of air.

**Answer:**
1.  Electrode configuration
2.  Gap distance
3.  Pressure
4.  Temperature
5.  Humidity
6.  Waveform of applied voltage

**Question 3:** A parallel plane electrode gap of 10 mm is subjected to an AC voltage. The breakdown voltage is measured to be 50 kV. Calculate the dielectric strength of air in kV/mm.

**Answer:**
Dielectric strength ($E_d$) = Breakdown Voltage ($V_b$) / Gap Distance ($d$)
$E_d = \frac{50 \text{ kV}}{10 \text{ mm}} = 5 \text{ kV/mm}$

**Question 4:** Explain why a point-to-plane electrode configuration generally has a lower breakdown voltage than a parallel plane electrode configuration for the same gap distance.

**Answer:** The point-to-plane configuration creates a non-uniform electric field with a very high field intensity concentrated at the sharp point. This localized high field causes ionization and corona discharge at a much lower overall applied voltage compared to the uniform field created by parallel plates, which distributes the electric field more evenly.

**Question 5:** Briefly explain Paschen's Law. What is the significance of the *pd* product in this law?

**Answer:** Paschen's Law states that the breakdown voltage of a gas depends on the product of the gas pressure ($p$) and the electrode gap distance ($d$). The *pd* product is significant because it represents the mean free path of electrons between collisions, which is crucial for initiating and sustaining an electrical discharge in the gas. The law predicts a minimum breakdown voltage for a specific *pd* value.

**Question 6:** If you are conducting an experiment on dielectric strength of air and observe a faint glow and hear a hissing sound before a full spark occurs, what phenomenon are you likely observing?

**Answer:** You are likely observing a **corona discharge**. This is a partial breakdown of the air in regions of high electric field intensity, often occurring before the complete breakdown (spark) of the entire gap.

**Question 7:** A sphere gap voltmeter is used to measure the breakdown voltage. What are the advantages of using a sphere gap voltmeter for high voltage measurements?

**Answer:**
*   Provides a relatively uniform electric field, leading to predictable breakdown characteristics.
*   Can be used for direct voltage measurement if the sphere diameter and gap distance are precisely controlled and conform to standards.
*   Less susceptible to errors from stray capacitance and inductance compared to some other measuring methods at very high frequencies or with non-standard waveforms.
*   Can be used to calibrate other voltage measuring devices.

---
This comprehensive set of study notes covers the aim of determining the dielectric strength of air, aligning with the provided course outcomes and incorporating key theoretical concepts and practical considerations relevant to a Power System Lab experiment.