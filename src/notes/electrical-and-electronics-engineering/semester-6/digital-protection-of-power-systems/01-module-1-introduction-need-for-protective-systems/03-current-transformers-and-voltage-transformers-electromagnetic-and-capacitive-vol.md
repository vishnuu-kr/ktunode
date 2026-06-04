---
title: "Current transformers and voltage transformers (Electromagnetic and Capacitive voltage transformers)"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36573"
status: "completed"
scrapedAt: "2026-05-23T16:25:45.044Z"
---
# Digital Protection of Power Systems: Module 1 - Introduction: Need for Protective Systems

## Topic: Current Transformers (CTs) and Voltage Transformers (VTs)

### 1. Introduction and Need for Protective Systems (Recap from Module 1)

Before diving into the specifics of CTs and VTs, it's crucial to reiterate why protective systems are essential in power systems. Protective systems are designed to:

*   **Detect Faults:** Identify abnormal conditions (faults) such as short circuits, overloads, and ground faults.
*   **Isolate Faults:** Quickly and selectively disconnect the faulted section from the rest of the healthy power system.
*   **Minimize Damage:** Prevent damage to expensive power system equipment (generators, transformers, transmission lines, switchgear).
*   **Ensure System Stability:** Maintain the stability of the power system by rapid fault clearance.
*   **Protect Personnel:** Safeguard human lives from electrical hazards.
*   **Improve Reliability and Availability:** Reduce downtime and ensure continuous power supply.

Protective relays, the brains of the protective system, require accurate and scaled-down replicas of the high voltage and high current conditions present in the power system. This is where Current Transformers (CTs) and Voltage Transformers (VTs) play a pivotal role as **instrument transformers**.

### 2. Current Transformers (CTs)

#### 2.1. Function and Purpose

*   **Definition:** A Current Transformer (CT) is a type of **instrument transformer** that is used to produce a current in its secondary winding that is proportional to the current flowing in its primary winding.
*   **Primary Purpose:** To step down high currents in the power system to a lower, standardized level (typically 1A or 5A) that can be safely handled by protective relays, measuring instruments, and control circuits.
*   **Isolation:** CTs also provide electrical isolation between the high-voltage power system and the low-voltage measuring/protective devices.

#### 2.2. Construction and Principle of Operation

*   **Basic Principle:** CTs operate on the principle of electromagnetic induction, similar to power transformers.
*   **Construction:**
    *   **Primary Winding:** Consists of a few turns of thick conductor, designed to carry the full power system current. It can be a conductor passing through the CT core (window-type CT) or a wound primary.
    *   **Secondary Winding:** Consists of many turns of thin conductor wound around a common magnetic core.
    *   **Magnetic Core:** Made of high-permeability ferromagnetic material (e.g., silicon steel laminations) to minimize reluctance and ensure efficient magnetic flux linkage.
    *   **Insulation:** Adequate insulation is provided between windings and the core, and between windings and the casing.
*   **Operation:** When AC current flows through the primary winding, it establishes a magnetic flux in the core. This changing flux induces a voltage in the secondary winding, causing a current to flow in the secondary circuit when connected to a load.
    *   The ratio of the primary current ($I_p$) to the secondary current ($I_s$) is ideally equal to the inverse ratio of the number of turns in the secondary winding ($N_s$) to the primary winding ($N_p$).
    *   $I_p / I_s = N_s / N_p$
    *   The **nominal ratio** of a CT is typically expressed as a ratio of primary current to secondary current (e.g., 100/5 A).

#### 2.3. Classification of CTs

CTs can be classified based on various criteria:

*   **Based on Construction:**
    *   **Window Type (Toroidal/Ring Type):** The primary conductor (busbar, cable) passes through the center of the toroidal core with the secondary winding wound around it. This is the most common type for protection.
        *   *Example:* A CT with a primary conductor of a 220kV line passing through its aperture.
    *   **Bar Primary Type:** The primary winding is an integral part of the CT, consisting of a single bar passing through the core.
    *   **Wound Primary Type:** Both primary and secondary windings are wound around the core, similar to a power transformer. Used for lower primary currents.

*   **Based on Application:**
    *   **Protection CTs (Type P):** Designed for accurate performance during fault conditions. They have a higher accuracy limit factor (ALF) to ensure the secondary current remains proportional to the primary current even at high fault currents.
        *   *Key Feature:* High **Accuracy Limit Factor (ALF)**, which is the ratio of the maximum primary current to the rated secondary current at which the CT will maintain its specified accuracy. E.g., ALF of 10 means the CT can handle 10 times its rated primary current without significant error.
        *   *Referencing Johns & Salman:* Chapter 3 of "Digital Protection of Power System" by Johns and Salman discusses the requirements for protection CTs, emphasizing their ability to saturate less during overcurrent conditions.
    *   **Metering CTs (Type M):** Designed for accurate measurement during normal operating conditions. They have a lower ALF but are more accurate at lower currents.
        *   *Key Feature:* High accuracy class (e.g., Class 0.5, Class 1) at normal operating currents.

*   **Based on Core Saturation Characteristics:**
    *   **Linear Coupler:** Primarily for DC current detection or as a current sensor without a magnetic core.
    *   **Saturation Type:** The standard CTs with magnetic cores that can saturate.

#### 2.4. CT Errors and Performance

*   **Ideal CT:** An ideal CT would produce a secondary current perfectly proportional to the primary current, with zero phase shift.
*   **Actual CT Errors:**
    *   **Ratio Error:** The difference between the actual current ratio ($I_p / I_s$) and the turns ratio ($N_s / N_p$).
    *   **Phase Angle Error:** The angle between the primary current vector and the reversed secondary current vector.
*   **Causes of Errors:**
    *   **Exciting Current:** A small current required to magnetize the core, which does not contribute to the ampere-turns balance. This current is the vector difference between the primary current and the ideal secondary current.
    *   **Core Saturation:** At very high primary currents (faults), the magnetic core can saturate, causing a significant deviation of the secondary current from its proportional value.
    *   **Burden:** The impedance connected to the secondary terminals of the CT (relays, ammeters).
*   **Accuracy Classes for Protection CTs:** Denoted by "5P" or "6P", followed by a number indicating the maximum percentage composite error at the ALF.
    *   *Example:* 5P10 means the composite error is less than 5% when the primary current is 10 times the rated primary current.
*   **Accuracy Classes for Metering CTs:** Denoted by a number indicating the maximum percentage error at a specified burden and current.
    *   *Example:* Class 0.5 means the accuracy is within ±0.5% for specified operating conditions.

#### 2.5. Important Considerations for CT Selection

*   **Rated Primary Current:** Must be chosen to match the normal operating current of the circuit.
*   **Rated Secondary Current:** Typically 1A or 5A.
*   **Rated Burden:** The total impedance connected to the secondary terminals, expressed in VA at the rated secondary current. Must be compatible with the relay burden.
*   **Accuracy Limit Factor (ALF) / Accuracy Class (for Protection CTs):** Crucial for ensuring correct relay operation during faults.
*   **Type of CT:** Window type for busbars/cables, bar type for switchgear, wound type for specific applications.
*   **Number of Secondary Windings:** Some CTs have multiple secondary windings for different functions (e.g., one for protection, one for metering).
*   **Insulation Level:** Must match the system voltage.

#### 2.6. CT Connections for Protection

*   **Star (Y) Connection:** Used in three-phase systems to monitor phase currents. Relays are connected to individual phase CTs (e.g., CTs in R, Y, B phases).
*   **Delta ($\Delta$) Connection:** Used for sensitive ground fault detection. Sum of currents in delta is zero under healthy conditions. Any residual current indicates a ground fault.
    *   *Example:* Connecting CTs in R, Y, B phases in a delta configuration for a zero-sequence current relay.
*   **Summation CT (SCT):** Used to sum up currents from individual phases to provide a single current for ground fault relays.

#### 2.7. Practice Question (CTs)

**Question:** A power line is carrying a normal current of 200 A. A fault occurs, and the current rises to 6000 A. A protection relay requires a secondary current of 5 A for operation. A CT with a ratio of 200/5 A and an ALF of 10 is used.

1.  What is the rated primary current of the CT?
2.  What is the nominal ratio of the CT?
3.  What is the secondary current during the fault condition if the CT operates within its ALF?
4.  Will the CT likely saturate under this fault condition? Justify your answer.

**Answer:**

1.  The rated primary current of the CT is 200 A.
2.  The nominal ratio of the CT is 200/5 A.
3.  During the fault, the primary current is 6000 A. Since 6000 A is less than $200 \text{ A} \times 10 = 2000 \text{ A}$, the CT is **not** operating within its ALF. Ah, correction: The fault current is 6000A. The ALF is 10. This means the CT can handle up to $200A \times 10 = 2000A$ of primary current while maintaining its accuracy class. Since 6000A is greater than 2000A, the CT *will* saturate.
    Let's re-evaluate. The question asks for secondary current *if the CT operates within its ALF*. However, the fault current exceeds the ALF. If we assume for a moment it *could* operate linearly, the secondary current would be $(200/5) \times (6000/200) = 40 \times 30 = 1200A$. But this is not realistic as saturation occurs.

    Let's rephrase the answer to reflect the question's intent regarding the ALF.
    **Corrected Answer to Q3:** The question implies "what the secondary current *would be* if it remained proportional up to that point". If the CT were to operate linearly (which it won't beyond the ALF), the secondary current would be $(200/5) \times (6000/200) = 40 \times 30 = 1200 \text{ A}$. However, this is not a practical expectation due to saturation. The ALF defines the point beyond which the CT's output becomes unreliable.

4.  **Justification:** The ALF is 10. This means the CT can accurately transform primary currents up to $10 \times \text{Rated Primary Current} = 10 \times 200 \text{ A} = 2000 \text{ A}$. The fault current is 6000 A, which is significantly higher than 2000 A. Therefore, the CT **will saturate** under this fault condition. This saturation will lead to a lower-than-expected secondary current and a distorted waveform, which can impair the operation of the protective relay.

### 3. Voltage Transformers (VTs) / Potential Transformers (PTs)

#### 3.1. Function and Purpose

*   **Definition:** A Voltage Transformer (VT), also known as a Potential Transformer (PT), is a type of instrument transformer that produces a voltage in its secondary winding that is proportional to the voltage of its primary winding.
*   **Primary Purpose:** To step down high voltages in the power system to a lower, standardized level (typically 110V or 100V) that can be safely handled by protective relays, measuring instruments, and control circuits.
*   **Isolation:** VTs also provide electrical isolation between the high-voltage power system and the low-voltage measuring/protective devices.

#### 3.2. Construction and Principle of Operation

*   **Basic Principle:** VTs operate on the principle of electromagnetic induction, similar to power transformers.
*   **Construction:**
    *   **Primary Winding:** Consists of a large number of turns of thin conductor, designed to be connected across the high-voltage lines or phases.
    *   **Secondary Winding:** Consists of a smaller number of turns of relatively thicker conductor, providing the low-voltage output.
    *   **Magnetic Core:** Made of high-permeability ferromagnetic material, similar to CTs, to ensure efficient flux linkage.
    *   **Insulation:** High-quality insulation is critical due to the high voltages involved.
*   **Operation:** When connected across the power system voltage, the primary winding establishes a magnetic flux in the core. This flux induces a voltage in the secondary winding, proportional to the primary voltage.
    *   The ratio of the primary voltage ($V_p$) to the secondary voltage ($V_s$) is ideally equal to the ratio of the number of turns in the primary winding ($N_p$) to the secondary winding ($N_s$).
    *   $V_p / V_s = N_p / N_s$
    *   The **nominal ratio** of a VT is typically expressed as a ratio of primary voltage to secondary voltage (e.g., 132kV/110V).

#### 3.3. Classification of VTs

VTs can be classified based on their construction and application:

*   **Based on Construction:**
    *   **Electromagnetic Voltage Transformers (EMVTs):** These are the traditional, inductive VTs. They are essentially small power transformers.
        *   *Referencing Badri Ram & Viswakarma:* Chapter 4 of "Power System Protection and Switchgear" provides a detailed explanation of EMVTs, their construction, and working principle.
    *   **Capacitive Voltage Transformers (CVTs):** These are more common in modern high-voltage systems. They utilize a capacitive voltage divider in conjunction with a smaller inductive transformer.
        *   *Referencing Johns & Salman:* Chapter 3 of "Digital Protection of Power System" also discusses CVTs, highlighting their advantages for HVDC coupling and carrier communication.

*   **Based on Application:**
    *   **Protection VTs:** Designed to maintain accuracy and reduce transient overvoltages during fault conditions. They have specific accuracy classes for protection applications.
    *   **Metering VTs:** Designed for accurate voltage measurement under normal operating conditions, with high accuracy classes.

#### 3.4. Electromagnetic Voltage Transformers (EMVTs)

*   **Construction:** Similar to a power transformer, with primary and secondary windings on a magnetic core.
*   **Operation:** Relies on magnetic induction.
*   **Advantages:**
    *   Simple construction.
    *   Good accuracy at power frequencies.
*   **Disadvantages:**
    *   Become very large and expensive for very high voltages due to insulation requirements.
    *   Susceptible to saturation at power frequencies during transient overvoltage conditions.
    *   Not suitable for coupling carrier signals.
*   **Accuracy Classes:** Similar to CTs, specified by percentage error at a given burden and voltage. For protection, classes like 3P or 6P are used. For metering, classes like 0.2, 0.5, or 1 are used.

#### 3.5. Capacitive Voltage Transformers (CVTs)

*   **Construction:**
    *   **Capacitive Voltage Divider:** Consists of a series of capacitors (e.g., C1, C2) connected between the high-voltage line and ground. This forms a high-impedance divider.
    *   **Intermediate Transformer:** A smaller inductive transformer connected between the junction of the capacitor divider and ground. It steps down the voltage further.
    *   **Shunt Reactor (Optional):** May be included to compensate for the ferroresonance effect and to tune the intermediate transformer's primary inductance.
    *   **Coupling Inductor:** Used for carrier frequency coupling.
*   **Principle of Operation:**
    1.  The high system voltage is divided by the capacitive divider (C1 and C2). The voltage across C2 is a scaled-down replica of the system voltage, but at a much higher impedance.
    2.  This voltage across C2 is applied to the primary of the intermediate transformer.
    3.  The intermediate transformer steps down this voltage to the standard secondary voltage (e.g., 110V).
*   **Advantages:**
    *   **Economical for High Voltages:** The capacitive divider requires less insulation material than winding a high-voltage primary coil.
    *   **Carrier Frequency Coupling:** The capacitive divider provides a path for high-frequency carrier signals for power line carrier communication (PLCC).
    *   **Reduced Size and Weight:** Compared to EMVTs for the same high voltage.
*   **Disadvantages:**
    *   **Ferroresonance:** Can be susceptible to ferroresonance, especially with single-phase VTs, which can lead to dangerous overvoltages. This is mitigated by proper design, including the shunt reactor and proper grounding.
    *   **Transient Overvoltages:** Can exhibit different transient response characteristics compared to EMVTs.
    *   **Lower Accuracy:** Generally less accurate than EMVTs at power frequencies, especially under transient conditions.
*   **Referencing Phadke & Thorpe:** Chapter 2 of "Computer Relaying for Power Systems" by Phadke and Thorpe discusses the sampling of voltage signals, mentioning that VTs (including CVTs) are the primary means of obtaining voltage information for digital relays. They also touch upon the signal conditioning required.

#### 3.6. VT Errors and Performance

*   **Ideal VT:** An ideal VT would produce a secondary voltage perfectly proportional to the primary voltage, with zero phase shift.
*   **Actual VT Errors:**
    *   **Ratio Error:** The difference between the actual voltage ratio ($V_p / V_s$) and the turns ratio ($N_p / N_s$).
    *   **Phase Angle Error:** The angle between the primary voltage vector and the secondary voltage vector (or reversed secondary voltage vector).
*   **Causes of Errors:**
    *   **Exciting Current:** Similar to CTs, a small exciting current is needed for magnetization.
    *   **Burden:** The impedance of the connected secondary load.
    *   **Frequency Variations:** VTs are designed for a specific frequency.
    *   **Non-linearity of the Core:** At very high voltages or during transient overvoltages, the core can exhibit non-linear behavior.
*   **Accuracy Classes for Protection VTs:** Denoted by "3P" or "6P", followed by a number indicating the maximum percentage composite error at the rated burden and a specified voltage range (e.g., 95% to 110% of rated voltage).
    *   *Example:* 3P10 means the composite error is less than 3% when the primary voltage is between 95% and 110% of rated voltage.
*   **Accuracy Classes for Metering VTs:** Denoted by a number indicating the maximum percentage error at a specified burden and voltage.
    *   *Example:* Class 0.5 means the accuracy is within ±0.5% for specified operating conditions.

#### 3.7. Important Considerations for VT Selection

*   **Rated Primary Voltage:** Must match the system voltage.
*   **Rated Secondary Voltage:** Typically 110V or 100V.
*   **Rated Burden:** The total impedance connected to the secondary terminals, expressed in VA. Must be compatible with the relay burden.
*   **Accuracy Class:** Crucial for accurate relay operation, especially during abnormal conditions.
*   **Type of VT:** EMVT or CVT depending on voltage level and application requirements (e.g., PLCC).
*   **Number of Secondary Windings:** VTs can have multiple secondary windings for different purposes (e.g., one for protection, one for metering, one for synchrocheck).
*   **Insulation Level:** Must match the system voltage.
*   **Neutral Earthing:** For unearthed or resonant earthed systems, the VT connection needs careful consideration to ensure proper neutral voltage detection. Typically, three single-phase VTs are used in an open-delta configuration or a three-phase VT.

#### 3.8. Practice Question (VTs)

**Question:** A 132 kV system requires voltage monitoring for a protective relay. A VT with a ratio of 132kV/110V and an accuracy class of 3P10 is available. The total burden connected to the secondary is 25 VA. The normal operating voltage of the system is 132 kV.

1.  What is the nominal ratio of the VT?
2.  What is the purpose of the accuracy class 3P10?
3.  If the system voltage suddenly drops to 100 kV due to a fault, will the VT still operate within its specified accuracy class? Justify your answer.
4.  What is the required secondary voltage output from the VT during normal operation?

**Answer:**

1.  The nominal ratio of the VT is 132kV/110V.
2.  The accuracy class 3P10 means that the VT will maintain an accuracy within ±3% for primary currents up to 10 times the rated primary current when connected to its rated burden, and the composite error will not exceed 5% under these conditions. *Correction:* The 3P notation for VTs refers to accuracy during fault conditions, typically at voltages between 95% and 110% of rated voltage. The '10' indicates the burden VA. The 3P class for VTs specifies the voltage range and percentage error, not current multiplication like CTs. For VTs, 3P signifies a "precision" class for protection. A 3P10 VT has a composite error not exceeding 3% at rated burden and 95% of rated voltage and 5% at 10% overvoltage.
    **Corrected Answer to Q2:** The accuracy class 3P10 for a VT indicates that it is suitable for protection applications. It means that under normal operating voltage (100% of rated) and at its rated burden (10 VA in this case, but the question states 25 VA, which might be a design constraint or a misunderstanding of the notation), the VT will have a composite error not exceeding 3%. More precisely, for a 3P class VT, the composite error should not exceed 3% at 95% of rated voltage and 5% at 110% of rated voltage, assuming rated burden. The '10' in 3P10 specifies the rated burden in VA.
3.  **Justification:** The accuracy class 3P typically specifies performance for voltages between 95% and 110% of the rated voltage. A voltage drop to 100 kV (which is $100 / 132 \approx 75.7\%$ of rated voltage) is outside the specified operating range for the 3P accuracy class. Therefore, the VT is **not guaranteed** to operate within its specified 3P10 accuracy class when the system voltage drops to 100 kV. The error might be higher.
4.  The required secondary voltage output from the VT during normal operation (132 kV primary) is calculated as:
    $V_s = V_p \times (N_s / N_p) = 132 \text{ kV} \times (110 \text{ V} / 132000 \text{ V}) = 132000 \text{ V} \times (110 \text{ V} / 132000 \text{ V}) = 110 \text{ V}$.

### 4. Alignment with Course Outcomes

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   CTs and VTs are fundamental input devices for all these protection schemes. Understanding their ratios, accuracy, and limitations is crucial for selecting appropriate relays and setting them correctly. For example, distance relays rely on accurate voltage and current measurements from VTs and CTs. Differential relays require accurate CTs on both sides of the protected zone.
*   **CO3: Illustrate the operation of a numerical relay.**
    *   Numerical relays sample the secondary output of CTs and VTs. The quality and accuracy of these sampled signals directly impact the relay's performance. Understanding the nature of the CT/VT output (e.g., waveform distortion due to saturation) helps in understanding the signal conditioning and digital filtering algorithms used in numerical relays.
*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   The raw analog signals from CTs and VTs are converted into digital signals by Analog-to-Digital Converters (ADCs) within numerical relays. The sampling rate, quantization error, and the accuracy of the CTs/VTs themselves are critical parameters affecting the digital signal processing algorithms (like Fourier analysis for fundamental component extraction, or DFT, FFT) used for fault detection.
*   **CO2 & CO5:** While CO2 and CO5 are broader, a good understanding of CTs and VTs is a foundational prerequisite for developing protection schemes for specific equipment (CO2) and for inferring emerging protection schemes (CO5), as advanced schemes still rely on accurate input measurements.

### 5. Key Points to Remember

*   **Instrument Transformers:** CTs and VTs are essential for stepping down high currents and voltages to safe, manageable levels for protection and metering.
*   **Protection vs. Metering:** Protection CTs/VTs are designed for accuracy during faults, often with higher ALFs (CTs) or specific accuracy classes (VTs) to handle abnormal conditions. Metering CTs/VTs focus on accuracy during normal operation.
*   **CT Saturation:** A critical phenomenon that limits the secondary current during severe faults, affecting relay performance. Proper CT selection with adequate ALF is vital.
*   **VT Types:** EMVTs are traditional; CVTs are economical for high voltages and offer carrier coupling.
*   **Accuracy Classes:** Understand the meaning of accuracy classes (e.g., 5P10 for CTs, 3P10 for VTs) and their implications for relay performance.
*   **Burden:** The impedance connected to the secondary of CTs/VTs limits their performance and must be considered during selection.
*   **Digital Relays:** Rely on clean, accurate, and representative signals from CTs and VTs, which are then digitized for processing.

---

This concludes Module 1's introduction to Current and Voltage Transformers. The next modules will build upon this foundation to discuss relaying principles and their application in digital protection systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
