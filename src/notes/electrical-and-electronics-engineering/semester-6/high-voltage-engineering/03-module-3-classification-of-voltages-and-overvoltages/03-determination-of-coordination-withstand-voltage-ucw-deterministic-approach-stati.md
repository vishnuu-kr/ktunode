---
title: "Determination of Coordination Withstand Voltage (Ucw)-Deterministic Approach, Statistical Approach: Risk of Failure - Determination of Required Withstand Voltage (Urw)-Altitude Correction Factor, Safety Factor (Ks )- Selection of Standard Withstand Voltage (Uw)- Surge Arresters- Rated Voltage- Discharge Current- Impulse Current Tests- Residual Voltages- Arrester Durability Requirements."
subject: "HIGH VOLTAGE ENGINEERING"
module: "Module 3: Classification of Voltages and Overvoltages"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36601"
status: "completed"
scrapedAt: "2026-05-23T16:28:11.313Z"
---
# Module 3: Classification of Voltages and Overvoltages

## Topic 1: Determination of Coordination Withstand Voltage (Ucw)

### 1.1 Introduction to Insulation Coordination

Insulation coordination is a fundamental concept in high voltage engineering aimed at ensuring that the insulation of electrical equipment is adequately protected against overvoltages. It involves selecting appropriate insulation levels for different components of a power system so that the weakest insulation element, typically a protective device like a surge arrester, fails first, thereby protecting the rest of the equipment.

**Key Concept:** The primary goal is to prevent catastrophic failures of expensive equipment by strategically allowing controlled failure of less expensive protective devices.

**Reference:**
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** This textbook provides a thorough introduction to insulation coordination, its principles, and various approaches.
*   **Naidu M. S. & Kamaraju V. (2004). High Voltage Engineering.** This book also covers the basics of insulation coordination and its importance in system design.

### 1.2 Deterministic Approach to Insulation Coordination

The deterministic approach focuses on defining specific overvoltage magnitudes that the insulation must withstand. It is based on:

*   **Assumed Overvoltage Magnitudes:** This approach historically relied on defining standard overvoltage levels for different voltage classes and designing insulation to withstand these levels.
*   **No Explicit Risk Assessment:** The probability of occurrence of these overvoltages or the consequences of failure are not explicitly quantified.

**Steps Involved:**

1.  **Classification of Overvoltages:** Identify the types of overvoltages that can occur in a power system (e.g., lightning overvoltages, switching overvoltages).
2.  **Determination of Critical Overvoltage:** Determine the maximum expected overvoltage magnitude for each type of event.
3.  **Selection of Insulation Level:** Choose insulation for equipment and protective devices based on these predetermined overvoltage levels.

**Limitations:**
*   Doesn't account for the probability of overvoltage occurrence.
*   Can lead to either over-insulation (uneconomical) or under-insulation (risky).

**Example:** Historically, standard impulse withstand voltages (e.g., 1.2/50 µs for lightning, 250/2500 µs for switching) were used. If a system was designed to withstand a 1000 kV lightning impulse, this would be its guaranteed withstand capability.

### 1.3 Statistical Approach to Insulation Coordination

The statistical approach acknowledges that overvoltages are stochastic phenomena (random and unpredictable in precise magnitude and timing). It aims to optimize insulation design by considering the probability of overvoltage occurrence and the consequences of failure.

**Key Concepts:**

*   **Risk of Failure:** The probability that an insulation breakdown will occur for a given overvoltage event.
*   **Overvoltage Distribution:** Characterizing the statistical distribution of overvoltage magnitudes and their durations.
*   **Insulation Strength Distribution:** Characterizing the statistical distribution of the insulation strength of equipment (e.g., due to manufacturing variations).

**Determination of Coordination Withstand Voltage ($U_{cw}$):**

The coordination withstand voltage ($U_{cw}$) is the voltage level that the insulation system of a protected component must withstand such that the risk of failure is acceptably low.

#### 1.3.1 Risk of Failure

The risk of failure is a crucial metric in the statistical approach. It is often expressed as a probability or a rate.

*   **Probability of Failure (P<sub>f</sub>):**
    $P_f = P(\text{Overvoltage} > \text{Insulation Strength})$

This can be calculated by integrating the product of the overvoltage probability density function and the probability of breakdown for insulation strength less than the overvoltage.

*   **Risk Assessment:** involves:
    *   **Identifying potential overvoltage sources and their characteristics.**
    *   **Estimating the frequency of occurrence of these overvoltages.**
    *   **Determining the breakdown characteristics of the insulation (e.g., voltage-time curves).**
    *   **Evaluating the economic and safety consequences of failure.**

**Reference:**
*   **Kuffel E., Zaengl S., Kuffel J. (2005). High Voltage Engineering Fundamentals.** This book delves into the probabilistic aspects of insulation strength and overvoltages.

#### 1.3.2 Determination of Required Withstand Voltage ($U_{rw}$)

The Required Withstand Voltage ($U_{rw}$) is the minimum insulation strength that a piece of equipment must possess to achieve an acceptable risk of failure. It is determined based on the expected overvoltages and the acceptable risk level.

**Factors influencing $U_{rw}$:**

*   **Nature and magnitude of expected overvoltages.**
*   **Statistical distribution of these overvoltages.**
*   **Insulation characteristics of the equipment (e.g., dielectric strength, voltage-time curves).**
*   **Acceptable risk of failure for the specific equipment.**

**Calculation of $U_{rw}$:**

While a precise analytical calculation can be complex, the concept is to select a voltage level such that the probability of the overvoltage exceeding this level is low, or the probability of the insulation failing at this level is low, considering the distribution of both.

Often, $U_{rw}$ is determined by considering the overvoltage that has a low probability of exceedance (e.g., the 99th percentile of the overvoltage distribution) and ensuring the insulation strength is above this.

**Example:** If the system is designed for a specific risk level, say 1 failure in 100 years, $U_{rw}$ would be determined to satisfy this.

### 1.4 Altitude Correction Factor

The dielectric strength of air (and insulating gases like SF6) is dependent on atmospheric pressure, which in turn is related to altitude.

*   **Effect of Altitude:** As altitude increases, atmospheric pressure decreases. This leads to a **decrease in the dielectric strength** of air and gases.

**Altitude Correction Factor (k<sub>a</sub>):**

This factor is used to adjust the withstand voltage of equipment tested at standard atmospheric conditions (sea level, 20°C, 760 mmHg) to account for the operating altitude.

*   $U_{withstand, \text{actual}} = U_{withstand, \text{standard}} \times k_a$

Where:
*   $U_{withstand, \text{actual}}$ is the withstand voltage at the operating altitude.
*   $U_{withstand, \text{standard}}$ is the withstand voltage at standard atmospheric conditions.
*   $k_a$ is the altitude correction factor.

**Formula for $k_a$:**

For air, $k_a$ is often approximated by:
$k_a \approx \left( \frac{P}{P_0} \right)$
where $P$ is the atmospheric pressure at the operating altitude and $P_0$ is the atmospheric pressure at sea level.

A more common and precise formulation, especially considering temperature variations, is:
$k_a = \delta = \frac{P}{P_0} \times \frac{T_0 + 273.15}{T + 273.15}$
where:
*   $P$ is the atmospheric pressure at the operating altitude.
*   $P_0$ is the standard atmospheric pressure at sea level (1013.25 hPa or 760 mmHg).
*   $T$ is the operating ambient temperature (°C).
*   $T_0$ is the standard temperature (20°C).

**Important Note:** For impulse voltages, the correction factor can also depend on the shape of the impulse and the electrode geometry. Standards like IEC 60050-421 and IEC 60060 provide detailed guidance.

**Reference:**
*   **Kuchler, A. (2018). High Voltage Engineering Fundamentals – Technology Applications.** This book provides practical insights into altitude corrections for various high voltage tests.
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** Discusses atmospheric correction factors in detail.

**Example:** If equipment is designed to have a withstand voltage of 550 kV at sea level, and it is to be installed at an altitude where the atmospheric pressure is 80% of that at sea level and the temperature is the same as standard, the effective withstand voltage would be $550 \text{ kV} \times 0.80 = 440 \text{ kV}$.

### 1.5 Safety Factor ($K_s$)

The safety factor ($K_s$) is introduced in the deterministic approach and also considered in the statistical approach to provide an additional margin of safety. It accounts for:

*   **Uncertainties in overvoltage estimations.**
*   **Variations in insulation strength.**
*   **Aging and degradation of insulation over time.**
*   **Environmental factors not fully accounted for.**

**Application:**

In the deterministic approach, the design withstand voltage ($U_{design}$) might be determined by multiplying the expected maximum overvoltage ($U_{max}$) by a safety factor:
$U_{design} = U_{max} \times K_s$

In the statistical approach, $K_s$ is implicitly considered by selecting a withstand voltage that is significantly higher than the average expected overvoltage, thus reducing the probability of failure.

**Typical Values:** Safety factors can range from 1.1 to 1.5 or higher, depending on the criticality of the equipment, the type of overvoltage, and the level of confidence in the data.

**Reference:**
*   **Naidu M. S. & Kamaraju V. (2004). High Voltage Engineering.** Discusses the role of safety factors in insulation design and coordination.

### 1.6 Selection of Standard Withstand Voltage ($U_w$)

The standard withstand voltage ($U_w$) is a standardized impulse voltage value (typically a full lightning impulse 1.2/50 µs or a chopped lightning impulse) that electrical equipment is designed and tested to withstand. These values are defined by international standards (e.g., IEC, ANSI) for different voltage levels of electrical systems.

**Process of Selection:**

1.  **Determine the System Voltage:** Identify the nominal voltage of the power system (e.g., 11 kV, 33 kV, 132 kV, 400 kV).
2.  **Identify Potential Overvoltages:** Determine the type and expected magnitude of overvoltages (lightning, switching).
3.  **Apply Insulation Coordination Principles:** Using either the deterministic or statistical approach, determine the required withstand voltage for the equipment.
4.  **Select the Nearest Standard Value:** Choose the standard withstand voltage ($U_w$) that is equal to or greater than the determined required withstand voltage, considering altitude and safety factors.

**Example:** For a 400 kV system, standard BIL (Basic Impulse Insulation Level) values are defined. A transformer designed for a 400 kV system might have a standard impulse withstand voltage of 1300 kV (1.2/50 µs). This $U_w$ would be selected based on the expected lightning overvoltages and the protection provided by surge arresters.

**Reference:**
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** Provides tables and examples of standard withstand voltages for various equipment and system voltages.

---

## Topic 2: Surge Arresters

### 2.1 Introduction to Surge Arresters

A surge arrester is a protective device designed to protect electrical equipment from overvoltages. It works by diverting the surge current to the ground and then de-energizing itself, thus limiting the voltage across the protected equipment to a safe level.

**Function:**
*   To provide a low impedance path to ground for surge currents.
*   To block power frequency current after the surge has passed.
*   To limit the voltage across the protected equipment to a value below its withstand capability.

**Types of Surge Arresters:**

*   **Expulsion Type:** Primarily used for line protection, involves an expulsion tube that quenches the arc.
*   **Valve Type (or Gapless Metal Oxide Arresters - MOA):** Most common for substation equipment. Consists of a series of non-linear resistors (metal oxide varistors, typically Zinc Oxide) with a spark gap (in older designs) or gapless metal oxide blocks.

**Reference:**
*   **Kuffel E., Zaengl S., Kuffel J. (2005). High Voltage Engineering Fundamentals.** Detailed explanation of surge arrester construction and operation.
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** Covers the different types and applications of surge arresters.

### 2.2 Rated Voltage of a Surge Arrester

The **Rated Voltage ($U_r$)** of a surge arrester is the maximum continuous phase-to-phase voltage that the arrester can withstand in service under normal operating conditions. It is a critical parameter for selecting the appropriate arrester for a specific power system.

**Key Considerations:**

*   **System Voltage:** The rated voltage of the arrester must be greater than or equal to the maximum system voltage.
*   **Grounding:** For effectively grounded systems, $U_r$ is typically the nominal system voltage. For ungrounded or high-impedance grounded systems, $U_r$ is often chosen as a higher percentage of the nominal system voltage (e.g., 1.15 to 1.2 times the nominal system voltage).

**Formula:**
$U_r \ge U_{max, system}$

Where $U_{max, system}$ is the maximum continuous phase-to-phase operating voltage of the system.

**Example:** For a 33 kV system, where the maximum operating voltage might be 36 kV, a surge arrester with a rated voltage of 36 kV would be selected.

**Reference:**
*   **Kuchler, A. (2018). High Voltage Engineering Fundamentals – Technology Applications.** Provides practical guidelines on selecting arrester rated voltages for different system configurations.

### 2.3 Discharge Current

The discharge current is the surge current that flows through the arrester when it operates. The ability of an arrester to withstand these currents is crucial for its performance and longevity.

**Types of Discharge Currents:**

1.  **Rated Nominal Discharge Current:** The peak value of a standard impulse current (typically 8/20 µs) that the arrester can discharge multiple times without exceeding its performance limits. This is a test parameter to assess the arrester's ability to handle repeated surge events of moderate magnitude.
2.  **Rated Short-Circuit Current:** The maximum power frequency fault current that the arrester must be able to interrupt after discharging a surge. This is particularly important for the switching element (e.g., spark gap) in older valve-type arresters to prevent power follow current.
3.  **Impulse Current (Lightning and Switching):** The magnitudes of lightning and switching surges that the arrester is designed to discharge. The arrester's performance is specified for specific impulse current shapes and magnitudes.

**Reference:**
*   **Naidu M. S. & Kamaraju V. (2004). High Voltage Engineering.** Details the different types of discharge currents and their significance in arrester testing.

### 2.4 Impulse Current Tests

These tests are performed on surge arresters to verify their ability to withstand and discharge surge currents without damage.

**Types of Impulse Current Tests:**

1.  **Lightning Impulse Discharge Current Test:**
    *   **Waveform:** Typically 8/20 µs impulse current.
    *   **Purpose:** To assess the arrester's ability to discharge multiple surges of this magnitude without significant degradation.
    *   **Test Procedure:** The arrester is subjected to several impulses of a specified peak value (e.g., 5 kA, 10 kA, 20 kA). The voltage across the arrester and the current through it are recorded.

2.  **Switching Impulse Discharge Current Test:**
    *   **Waveform:** Typically 30/60 µs or 100/1000 µs impulse current.
    *   **Purpose:** To assess the arrester's ability to discharge switching surges, which are generally of longer duration than lightning surges.

3.  **Short Duration Impulse Current Test:**
    *   **Waveform:** A very short duration, high magnitude impulse.
    *   **Purpose:** To evaluate the arrester's capability to withstand the initial high peak of a surge.

4.  **Long Duration Impulse Current Test:**
    *   **Waveform:** Longer duration impulses (e.g., 2000 µs).
    *   **Purpose:** To evaluate the arrester's thermal stability and energy absorption capability.

**Reference:**
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** Provides comprehensive details on the procedures and standards for impulse current testing of surge arresters.
*   **IEC 60099-4:** Standard for Surge Arresters, Part 4: Metal Oxide Surge Arresters without external isolating gaps for AC Systems.

**Key Point to Remember:** The ability of an arrester to withstand impulse currents is crucial for its functionality and longevity. These tests ensure the arrester can perform its protective duty under severe transient conditions.

### 2.5 Residual Voltages

The **Residual Voltage ($U_{res}$)** of a surge arrester is the voltage across its terminals when it conducts a specified impulse discharge current. It represents the protective level of the arrester.

**Definition:**
$U_{res}$ = Voltage across the arrester terminals when conducting a specified impulse current.

**Significance:**

*   **Protective Level:** The residual voltage determines the maximum overvoltage that will appear across the protected equipment. The arrester is selected such that its residual voltage for a given surge current is lower than the withstand voltage of the protected equipment, considering safety margins.
*   **Arrester Characteristics:** The residual voltage depends on the magnitude and waveform of the discharge current, as well as the arrester's construction and rating.

**Measurement:**

Residual voltages are measured during impulse current tests. For a given impulse current magnitude and waveform (e.g., 8/20 µs), the arrester is tested, and the peak voltage across its terminals is recorded as the residual voltage. Standards specify multiple levels of impulse currents to characterize the arrester's residual voltage performance.

**Example:** For a lightning impulse current of 10 kA (8/20 µs), a surge arrester might have a residual voltage of 45 kV. This means that when a 10 kA lightning surge passes through the arrester, the voltage across its terminals will not exceed 45 kV.

**Reference:**
*   **Kuchler, A. (2018). High Voltage Engineering Fundamentals – Technology Applications.** Explains residual voltage and its critical role in protecting equipment.
*   **Wadhwa, C. L. (2011). High Voltage Engineering.** Details the measurement of residual voltages and their interpretation.

### 2.6 Arrester Durability Requirements

Durability refers to the ability of a surge arrester to maintain its performance and withstand repeated operations over its intended service life. This involves resisting degradation from various stresses.

**Key Durability Aspects:**

1.  **Thermal Stability:**
    *   **Requirement:** Arresters must be able to absorb energy from repeated surge discharges and from power frequency currents without overheating and failing.
    *   **Testing:** Long duration impulse current tests and continuous operation at rated voltage are used to assess thermal stability.

2.  **Energy Handling Capability:**
    *   **Requirement:** The arrester must be capable of absorbing the energy associated with expected surge events without damage. This is particularly important for arresters in polluted environments or those subjected to frequent switching surges.
    *   **Testing:** High energy impulse tests are performed.

3.  **Back-Flashover and Power Frequency Voltage Performance:**
    *   **Requirement:** After discharging a surge, the arrester must block the power frequency current (power follow current). For MOA arresters, this is managed by the non-linear resistance characteristics of the ZnO discs. For arresters with spark gaps, the gap must quench the arc.
    *   **Testing:** Includes tests to verify the ability to interrupt power follow current and withstand continuous operating voltage.

4.  **Environmental Resistance:**
    *   **Requirement:** Arresters must withstand environmental conditions such as pollution, humidity, temperature variations, and UV radiation without their insulation failing.
    *   **Testing:** Includes salt-fog tests, high-humidity tests, and thermal cycling tests.

5.  **Mechanical Strength:**
    *   **Requirement:** The arrester must have sufficient mechanical strength to withstand forces during installation and operation (e.g., wind loads, seismic forces).

**Reference:**
*   **IEC 60099-4:** The international standard that specifies the design, testing, and performance requirements for metal oxide surge arresters, including durability.

---

## Alignment with Course Outcomes and Knowledge Levels:

*   **CO1: Identify different high voltage and current waveform generation circuits. (Knowledge Level: K1)**
    *   This module implicitly relates to waveform generation as surge arrester performance is tested using standard waveforms (e.g., 1.2/50 µs, 8/20 µs). Understanding these waveforms is foundational.

*   **CO2: Implement different sensing & measurement techniques for high voltage and current measurement. (Knowledge Level: K3)**
    *   The measurement of residual voltages during impulse current tests (Topic 2.5) directly involves HV and current measurement techniques. Understanding how to accurately measure these parameters is crucial for evaluating arrester performance.

*   **CO3: Describe insulation coordination and surge arrestor design. (Knowledge Level: K2)**
    *   This module is directly aligned with CO3.
        *   **Insulation Coordination (Topic 1):** Covers the deterministic and statistical approaches, coordination withstand voltage, required withstand voltage, altitude correction, and safety factors, which are core to understanding insulation coordination.
        *   **Surge Arresters (Topic 2):** Details the rated voltage, discharge current, impulse tests, residual voltages, and durability requirements, which are fundamental to surge arrester design and selection.

*   **CO4: Implement different testing methods for equipments and applications of HV systems. (Knowledge Level: K3)**
    *   **Impulse Current Tests (Topic 2.4):** This section explicitly describes testing methods for surge arresters, which are crucial HV components. Understanding these tests is essential for implementing testing procedures.

*   **CO5: Explain the various technologies for lightning protection. (Knowledge Level: K2)**
    *   Surge arresters are a key technology for lightning protection, particularly for substation equipment. This module explains how surge arresters function to limit lightning-induced overvoltages, thus contributing to lightning protection strategies.

---

## Practice Questions and Answers

**Question 1:** Differentiate between the deterministic and statistical approaches to insulation coordination.

**Answer:**
*   **Deterministic Approach:** Focuses on defining specific overvoltage magnitudes that insulation must withstand. It does not explicitly quantify the risk of failure and can lead to over- or under-insulation.
*   **Statistical Approach:** Considers the probabilistic nature of overvoltages and insulation strength. It aims to minimize the risk of failure by analyzing statistical distributions and optimizing insulation levels based on acceptable risk.

**Question 2:** What is the purpose of the altitude correction factor? How is it generally applied to the withstand voltage of equipment?

**Answer:**
The altitude correction factor is used to adjust the dielectric strength of air (and gases) for equipment operating at altitudes above sea level. As altitude increases, atmospheric pressure decreases, reducing dielectric strength. The factor adjusts the withstand voltage measured at standard conditions to the equivalent withstand voltage at the operating altitude.
*   $U_{withstand, \text{actual}} = U_{withstand, \text{standard}} \times k_a$
    where $k_a$ accounts for reduced atmospheric pressure and potentially temperature.

**Question 3:** Define the "Residual Voltage" of a surge arrester. Why is it important?

**Answer:**
The Residual Voltage ($U_{res}$) of a surge arrester is the voltage that appears across its terminals when it is conducting a specified impulse discharge current. It is important because it represents the protective level of the arrester, indicating the maximum voltage that will be impressed upon the equipment being protected during a surge event. The arrester must be selected such that its residual voltage for expected surge currents is below the withstand capability of the protected equipment, with an adequate safety margin.

**Question 4:** A surge arrester is rated for a system voltage of 132 kV. What is the minimum rated voltage for this arrester if the system is effectively grounded?

**Answer:**
For an effectively grounded system, the rated voltage of a surge arrester should be equal to the maximum continuous phase-to-phase operating voltage of the system. For a 132 kV system, the maximum continuous phase-to-phase voltage is typically around 145 kV (e.g., 132 kV / $\sqrt{3}$ * $\sqrt{3}$ = 145 kV). Therefore, the minimum rated voltage for the arrester would be 145 kV. (Note: Specific system parameters may dictate a slightly different value, but this is the general principle).

**Question 5:** Explain the significance of the 8/20 µs current impulse test for surge arresters.

**Answer:**
The 8/20 µs current impulse test is crucial for surge arresters, particularly for lightning surge protection.
*   **8 µs:** Represents the time to crest for a standard lightning impulse current.
*   **20 µs:** Represents the virtual time to half-value (time to decay to 50% of peak) for the impulse.
This test assesses the arrester's ability to withstand and discharge multiple lightning-induced surges of significant magnitude (typically 5 kA, 10 kA, 20 kA or higher) without significant degradation or failure. It is a key test for determining the arrester's protective capability and durability against lightning transients.

---

## Important Points to Remember

*   **Insulation Coordination:** Essential for reliable and economical design of high voltage systems, aiming to protect equipment by orchestrating insulation failure in a controlled manner.
*   **Statistical Approach:** The modern and preferred method for insulation coordination due to its realistic consideration of uncertainties.
*   **Altitude Correction:** Crucial for correctly specifying insulation levels and surge arrester ratings, as air's dielectric strength decreases with altitude.
*   **Safety Factors:** Provide a margin of safety against uncertainties in overvoltage estimation and insulation strength.
*   **Surge Arresters:** Vital protective devices that limit overvoltages by providing a low impedance path to ground.
*   **Rated Voltage of Arrester:** Must match or exceed the maximum continuous operating voltage of the system.
*   **Residual Voltage:** Defines the protective level of an arrester and is critical for selecting the correct arrester to protect specific equipment.
*   **Durability:** Ensures the arrester can perform its function reliably over its expected service life under various operating stresses.
*   **Standards (e.g., IEC 60099-4):** Always refer to relevant standards for precise requirements and testing procedures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
