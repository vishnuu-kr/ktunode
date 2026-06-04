---
title: "Testing of CT and PT"
subject: "POWER SYSTEM LAB"
module: "Module 16: Testing of CT and PT"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36809"
status: "completed"
scrapedAt: "2026-05-23T16:31:25.523Z"
---
# POWER SYSTEM LAB - Module 16: Testing of CT and PT

## Introduction

Current Transformers (CTs) and Potential Transformers (PTs) are crucial protective and measuring devices in power systems. Their accurate operation is vital for the reliable functioning of relays, meters, and control systems. This module focuses on the essential tests performed on CTs and PTs to ensure their performance meets the required standards. Understanding these tests is critical for diagnosing faults, verifying specifications, and maintaining the integrity of the power system.

**Relationship to Course Outcomes:**

*   **CO1 (K3):** While this module primarily deals with experimental testing, the underlying principles of CT and PT operation involve mathematical models of electromagnetic induction and flux distribution, which are implicitly addressed during the understanding of test procedures and expected results. For instance, calculating the turns ratio or understanding saturation characteristics relates to the magnetic circuit modeling.
*   **CO2 (K3):** This module directly addresses **CO2** by focusing on conducting appropriate tests for power system components (CTs and PTs) as per standards to analyze their performance. The knowledge gained will enable students to perform these tests and interpret the results, thereby analyzing the performance of these critical devices.

---

## 1. Current Transformers (CTs)

### 1.1 Purpose and Function of CTs

*   **Purpose:** To step down high primary currents to a lower secondary current (typically 1A or 5A) that can be safely handled by measuring instruments, relays, and control equipment.
*   **Function:** To provide an accurate replica of the primary current on its secondary winding, with a defined transformation ratio and phase angle relationship, under normal and fault conditions.

### 1.2 Key Concepts and Definitions

*   **Transformation Ratio (Nominal Ratio):** The ratio of the nominal primary current to the nominal secondary current.
    *   Formula: $K_{CT} = \frac{\text{Nominal Primary Current}}{\text{Nominal Secondary Current}}$
    *   *Example:* A CT with a primary rating of 100A and a secondary rating of 5A has a nominal ratio of 100/5 = 20.
*   **Turns Ratio:** The ratio of the number of turns in the secondary winding ($N_s$) to the number of turns in the primary winding ($N_p$). Ideally, for a CT to be a perfect transformer, the turns ratio ($N_s/N_p$) should be equal to the inverse of the current ratio ($I_p/I_s$). However, due to magnetizing current, this is not exactly true.
*   **Secondary Burden:** The total impedance connected to the secondary terminals of the CT (e.g., relays, ammeters, connecting wires). It is usually expressed in VA at the nominal secondary current.
    *   *Example:* A CT with a secondary rating of 5A and a connected burden of 20 VA means the impedance of the connected load is $Z_{burden} = \frac{20 \text{ VA}}{5 \text{ A}^2} = \frac{20}{25} = 0.8 \Omega$.
*   **Accuracy Class:** A numerical value representing the maximum permissible percentage ratio error and phase angle error at rated burden and for primary currents from 5% to 100% of rated primary current.
    *   *Example:* An **Accuracy Class 0.5** CT means its ratio error is within ±0.5% and its phase angle error is within ±30 minutes at rated burden and for primary currents from 5% to 100% of rated current.
*   **Ratio Error:** The difference between the actual transformation ratio and the nominal transformation ratio, expressed as a percentage of the nominal ratio.
    *   Formula: $\text{Ratio Error} (\%) = \frac{K_{CT} \times I_s - I_p}{I_p} \times 100$
*   **Phase Angle Error:** The difference in phase between the primary current vector and the secondary current vector, reversed. It is usually expressed in minutes of arc.
*   **Knee Point Voltage ($V_k$):** The voltage at the secondary terminals at which the current increases by a specified percentage (typically 10%) for a 10% increase in voltage. It signifies the onset of saturation.
*   **Accuracy Limit Factor (ALF):** The factor by which the rated primary current can be multiplied without exceeding the accuracy limits of the specified accuracy class, at rated burden.
    *   Formula: $ALF = \frac{\text{Rated Primary Current} + \text{Short-time Current Rating}}{\text{Rated Primary Current}}$ (This definition is simplified; a more precise definition relates to knee-point voltage and burden).
*   **Rated Short-Time Thermal Current:** The RMS value of the primary current that the CT can withstand for a specified duration (usually 1 second) without exceeding its thermal limits.
*   **Rated Dynamic Current:** The peak value of the primary current that the CT can withstand without being damaged by electromagnetic forces.

### 1.3 Types of CT Testing

The primary objectives of CT testing are to verify:
1.  The transformation ratio (accuracy).
2.  The performance under overcurrent conditions (saturation).
3.  Thermal and dynamic withstand capabilities.

#### 1.3.1 Ratio and Phase Angle Error Test (Accuracy Test)

*   **Purpose:** To verify that the CT meets its specified accuracy class.
*   **Principle:** The primary and secondary currents are measured accurately. The ratio error and phase angle error are calculated.
*   **Test Setup:**
    *   Variable AC voltage source.
    *   High-current primary injection circuit.
    *   Standard CT of known accuracy (reference CT).
    *   Test CT (undergoing testing).
    *   Precision Ammeters (for primary and secondary currents).
    *   Phase angle meter or oscilloscope for phase angle measurement.
    *   Burden resistors connected to the secondary of the test CT.
*   **Procedure:**
    1.  Connect the primary winding of the test CT in series with the primary of the reference CT and the current injection circuit.
    2.  Connect the secondary winding of the test CT to the specified burden.
    3.  Apply primary currents starting from 5% of the rated primary current up to the accuracy limit factor (ALF) times the rated primary current, in steps.
    4.  At each step, measure the primary current ($I_p$) and the secondary current ($I_s$).
    5.  Measure the phase difference between the primary current vector and the reversed secondary current vector.
    6.  Calculate the ratio error and phase angle error for each current value.
*   **Interpretation:** Compare the calculated errors with the limits specified for the CT's accuracy class.

#### 1.3.2 CT Excitation Test (V-I Characteristic Test)

*   **Purpose:** To determine the knee-point voltage ($V_k$) and the CT's saturation characteristics. This is crucial for assessing its performance during high fault currents.
*   **Principle:** The secondary winding of the CT is connected to a variable AC voltage source (through a high resistance to limit current), and the voltage across the secondary terminals is gradually increased. The corresponding secondary current is measured.
*   **Test Setup:**
    *   Variable AC voltage source.
    *   Test CT.
    *   Precision Voltmeter connected across the secondary terminals of the test CT.
    *   Precision Ammeter connected in series with the secondary winding of the test CT.
    *   A high resistance (e.g., 10 kΩ or more) connected in series with the secondary of the CT and the voltage source to limit the current.
*   **Procedure:**
    1.  Connect the secondary winding of the test CT in series with the ammeter, voltmeter, and the high resistance to the variable AC voltage source.
    2.  Keep the primary winding open-circuited (or short-circuited, depending on the CT type and test). For protection CTs, the primary is usually kept open.
    3.  Gradually increase the applied voltage from zero.
    4.  At suitable voltage intervals, record the voltage ($V_s$) across the secondary terminals and the secondary current ($I_s$).
    5.  Plot a graph of $V_s$ versus $I_s$.
    6.  Determine the knee-point voltage ($V_k$). A common method is to find the voltage where a 10% increase in voltage results in a 10% increase in current. Alternatively, some standards define the knee point as where the slope ($dV_s/dI_s$) reaches a certain value.
*   **Interpretation:** A higher knee-point voltage indicates a better ability to avoid saturation under heavy through-fault conditions. The shape of the curve reveals how quickly the CT saturates.

#### 1.3.3 Ratio Test at High Currents (Optional/Specialized)

*   **Purpose:** To verify the CT's accuracy at currents significantly higher than the rated current, especially important for feeder protection CTs.
*   **Principle:** Similar to the accuracy test, but using a high-current injection source.
*   **Test Setup:** Requires a high-current injection test set.
*   **Procedure:** Inject primary currents up to the ALF or even higher, and measure primary and secondary currents to calculate ratio and phase errors.

#### 1.3.4 DC Winding Resistance Test

*   **Purpose:** To check the continuity of the secondary winding and identify any poor connections or breakages.
*   **Principle:** Measure the DC resistance of the secondary winding using a Wheatstone bridge or a micro-ohmmeter.
*   **Test Setup:**
    *   DC power source.
    *   Micro-ohmmeter or Wheatstone bridge.
    *   Test CT.
*   **Procedure:**
    1.  Connect the micro-ohmmeter to the secondary terminals of the CT.
    2.  Record the DC resistance value.
*   **Interpretation:** The measured resistance should be low and within the manufacturer's specifications. Significant deviations can indicate winding faults.

#### 1.3.5 Primary Resistance Test (Less Common for CTs)

*   **Purpose:** To measure the resistance of the primary winding, which is typically very low.
*   **Principle:** Similar to the DC winding resistance test, but applied to the primary. This is often challenging due to the low resistance and high current requirements.

#### 1.3.6 High Voltage Tests (Insulation Tests)

*   **Purpose:** To verify the insulation integrity of the CT.
*   **Types:**
    *   **High Voltage Short-Time Test:** Applied between the primary winding and ground, and between the secondary winding and ground.
    *   **Induced Voltage Test:** To check insulation between turns and between windings.
*   **Principle:** Apply a high AC voltage for a specified duration and observe for any breakdown or excessive leakage current.
*   **Test Setup:** High voltage test set, voltmeter, ammeter.
*   **Interpretation:** No breakdown should occur during the test.

### 1.4 Practice Questions for CTs

1.  A CT has a nominal ratio of 100/5 A. If the measured primary current is 80 A and the measured secondary current is 3.98 A, calculate the ratio error.
    *   **Answer:**
        *   Nominal ratio ($K_{CT}$) = 100/5 = 20
        *   Measured ratio ($I_p/I_s$) = 80 A / 3.98 A ≈ 20.10
        *   Ratio Error = $\frac{K_{CT} \times I_s - I_p}{I_p} \times 100 = \frac{20 \times 3.98 - 80}{80} \times 100 = \frac{79.6 - 80}{80} \times 100 = \frac{-0.4}{80} \times 100 = -0.5\%$

2.  What is the primary purpose of the CT excitation test? How is the knee-point voltage determined from the test results?

---

## 2. Potential Transformers (PTs) / Voltage Transformers (VTs)

### 2.1 Purpose and Function of PTs/VTs

*   **Purpose:** To step down high primary voltages to lower secondary voltages (typically 110V or 100V) that can be safely handled by measuring instruments, relays, and control equipment.
*   **Function:** To provide an accurate replica of the primary voltage on its secondary winding, with a defined transformation ratio and phase angle relationship, under normal and varying voltage conditions.

### 2.2 Key Concepts and Definitions

*   **Transformation Ratio (Nominal Ratio):** The ratio of the nominal primary voltage to the nominal secondary voltage.
    *   Formula: $K_{PT} = \frac{\text{Nominal Primary Voltage}}{\text{Nominal Secondary Voltage}}$
    *   *Example:* A PT with a primary rating of 132 kV and a secondary rating of 110 V has a nominal ratio of 132000 V / 110 V = 1200.
*   **Turns Ratio:** The ratio of the number of turns in the primary winding ($N_p$) to the number of turns in the secondary winding ($N_s$). Ideally, for a PT, $N_p/N_s = V_p/V_s$.
*   **Secondary Burden:** The total impedance connected to the secondary terminals of the PT (e.g., voltmeters, relays, connecting wires). It is usually expressed in VA at the nominal secondary voltage.
*   **Accuracy Class:** A numerical value representing the maximum permissible percentage ratio error and phase angle error at rated burden and for primary voltages from 95% to 110% of rated primary voltage.
    *   *Example:* An **Accuracy Class 0.2** PT means its ratio error is within ±0.2% and its phase angle error is within ±10 minutes at rated burden and for primary voltages from 95% to 110% of rated voltage.
*   **Ratio Error:** The difference between the actual transformation ratio and the nominal transformation ratio, expressed as a percentage of the nominal ratio.
    *   Formula: $\text{Ratio Error} (\%) = \frac{K_{PT} \times V_s - V_p}{V_p} \times 100$
*   **Phase Angle Error:** The difference in phase between the primary voltage vector and the secondary voltage vector. It is usually expressed in minutes of arc.
*   **Burden:** The VA capacity of the PT at its secondary terminals. PTs are usually rated with different burdens for different applications (e.g., M, P, G classes for metering and protection).
    *   *Example:* A **Class 0.5** PT with a burden of 15 VA at 110 V secondary means the impedance of the connected load should not exceed $Z_{burden} = \frac{15 \text{ VA}}{(110/\sqrt{3})^2 \text{ V}^2 / R}$ (if load is specified for line-to-line, or use $110^2$ if line-to-neutral or total VA). For simplicity, if burden is specified as VA at secondary voltage, then $Z_{burden} = \frac{V_s^2}{VA}$. For 110V, $Z_{burden} = \frac{110^2}{15} = \frac{12100}{15} \approx 806.7 \Omega$.

### 2.3 Types of PT/VT Testing

The primary objectives of PT/VT testing are to verify:
1.  The transformation ratio (accuracy).
2.  Insulation strength.
3.  Operation under overvoltage conditions.

#### 2.3.1 Ratio and Phase Angle Error Test (Accuracy Test)

*   **Purpose:** To verify that the PT meets its specified accuracy class for metering or protection.
*   **Principle:** The primary and secondary voltages are measured accurately. The ratio error and phase angle error are calculated.
*   **Test Setup:**
    *   Variable AC voltage source (capable of producing voltages up to 110% of rated primary).
    *   Standard PT of known accuracy (reference PT).
    *   Test PT (undergoing testing).
    *   Precision Voltmeters (for primary and secondary voltages).
    *   Phase angle meter or oscilloscope for phase angle measurement.
    *   Burden resistors connected to the secondary of the test PT.
*   **Procedure:**
    1.  Connect the primary winding of the test PT to the variable AC voltage source.
    2.  Connect the secondary winding of the test PT to the specified burden.
    3.  Apply primary voltages starting from 95% of the rated primary voltage up to 110% of the rated primary voltage, in steps.
    4.  At each step, measure the primary voltage ($V_p$) and the secondary voltage ($V_s$).
    5.  Measure the phase difference between the primary voltage vector and the secondary voltage vector.
    6.  Calculate the ratio error and phase angle error for each voltage value.
*   **Interpretation:** Compare the calculated errors with the limits specified for the PT's accuracy class and burden.

#### 2.3.2 PT Excitation Test (V-I Characteristic Test - Less Common for PTs)

*   **Purpose:** Similar to CTs, to understand saturation characteristics, though less critical as PTs operate under voltage stress rather than current stress. This is more relevant for inductive PTs.
*   **Principle:** The primary winding is energized with increasing voltage, and secondary voltage and current are measured.
*   **Test Setup:** Variable AC voltage source, PT, voltmeters, ammeters.
*   **Procedure:** Energize the primary with increasing voltage and monitor secondary voltage and current.
*   **Interpretation:** Deviations from linearity or excessive secondary current at overvoltages indicate potential issues.

#### 2.3.3 High Voltage Tests (Insulation Tests)

*   **Purpose:** To verify the insulation integrity of the PT, which is critical due to the high primary voltages.
*   **Types:**
    *   **Power Frequency Withstand Voltage Test:** Applied between the primary winding and ground, between the secondary winding and ground, and between the primary and secondary windings.
    *   **Impulse Withstand Voltage Test (Lightning and Switching Surge):** To verify the insulation's ability to withstand transient overvoltages.
    *   **Partial Discharge (PD) Test:** To detect incipient insulation failures.
*   **Principle:** Apply specified high voltages for a defined duration and monitor for breakdown or excessive discharges.
*   **Test Setup:** High voltage test set (AC, DC, Impulse), measuring instruments for voltage and discharge.
*   **Interpretation:** No breakdown or excessive PD should occur.

#### 2.3.4 DC Winding Resistance Test

*   **Purpose:** To check the continuity and resistance of the primary and secondary windings.
*   **Principle:** Measure the DC resistance using a micro-ohmmeter or Wheatstone bridge.
*   **Test Setup:** DC power source, micro-ohmmeter or Wheatstone bridge, PT.
*   **Procedure:** Connect the micro-ohmmeter to the primary and secondary terminals (separately) and record the resistance.
*   **Interpretation:** The measured resistance should be low and within the manufacturer's specifications.

#### 2.3.5 Ratio Test at Different Frequencies (Less Common for Field Testing)

*   **Purpose:** To assess the frequency response of the PT.
*   **Principle:** Conduct accuracy tests at frequencies other than the power frequency.
*   **Interpretation:** Deviation in accuracy with frequency can indicate internal winding issues.

### 2.4 PTs vs. VTs

*   Often used interchangeably, but "Potential Transformer" (PT) is more common for older magnetic designs, while "Voltage Transformer" (VT) can also refer to capacitive voltage transformers (CVTs) which are more common in high voltage systems and have different test procedures (especially regarding PD testing and impulse testing). For this module, we assume magnetic PTs.

### 2.5 Practice Questions for PTs

1.  A PT has a nominal ratio of 110 kV / 110 V. If the measured primary voltage is 105 kV and the measured secondary voltage is 0.93 V, calculate the ratio error.
    *   **Answer:**
        *   Nominal ratio ($K_{PT}$) = 110000 V / 110 V = 1000
        *   Measured ratio ($V_p/V_s$) = 105000 V / 0.93 V ≈ 112903
        *   Ratio Error = $\frac{K_{PT} \times V_s - V_p}{V_p} \times 100 = \frac{1000 \times 0.93 - 105}{105} \times 100 = \frac{930 - 105}{105} \times 100 = \frac{825}{105} \times 100 \approx 785.7\%$ (This indicates a significant problem or miscalculation, typically ratio errors are small for PTs. Let's recheck the calculation with more precision or different parameters if this were a real lab scenario).
        *   Let's re-calculate assuming the secondary voltage should be 105 kV / 1000 = 105 V.
        *   If $V_s$ measured is 0.93 V for $V_p=105$ kV, the PT is severely malfunctioning.
        *   Let's assume a more realistic scenario: $V_p = 105$ kV, $V_s$ measured = 104.5 V.
        *   Ratio Error = $\frac{1000 \times 104.5 - 105000}{105000} \times 100 = \frac{104500 - 105000}{105000} \times 100 = \frac{-500}{105000} \times 100 \approx -0.476\%$

2.  What are the main differences in testing between a CT and a PT, considering their primary functions?

---

## 3. Relevant Standards

*   **IEC 61869 Series:** International standards for instrument transformers.
    *   **IEC 61869-1:** General requirements.
    *   **IEC 61869-2:** Additional requirements for current transformers.
    *   **IEC 61869-3:** Additional requirements for inductive voltage transformers.
*   **IEEE Standards:** American standards for instrument transformers.
    *   **IEEE C57.13:** Standard Requirements for Instrument Transformers.

---

## 4. Important Points to Remember

*   **Safety First:** Always adhere to safety procedures when working with high voltages and currents. Ensure proper grounding and lockout/tagout procedures are followed.
*   **Burden Matching:** The tested burden must match the specified burden for the accuracy class to be valid.
*   **Primary vs. Secondary Testing:** For CTs, primary injection testing (feeding current into the primary) is often preferred for accuracy tests as it's more representative of actual operating conditions. For PTs, primary voltage application is standard.
*   **Reference Standards:** Use calibrated reference CTs and PTs for accurate comparative testing.
*   **Saturation is Key for CTs:** Understanding CT saturation characteristics is crucial for protection system design. A CT that saturates too early during a fault will lose its accuracy and may lead to maloperation of protective relays.
*   **Insulation is Key for PTs:** PTs operate at high voltages, so insulation integrity is paramount. High voltage tests are critical.
*   **Phase Angle:** For protection applications, phase angle accuracy is as important as ratio accuracy, especially for differential relays or directional relays.
*   **DC Resistance:** Low DC resistance of windings indicates good conductor integrity.

---

## 5. Lab Exercises/Assignments

**Exercise 1: CT Ratio and Phase Angle Error Test**

*   **Objective:** To determine the ratio error and phase angle error of a given CT at various primary currents.
*   **Procedure:**
    1.  Set up the primary injection test circuit. Connect the test CT in series with a burden resistor (e.g., 0.8 Ω for a 5A CT rated for 20 VA).
    2.  Apply primary currents from 20A to 150A in steps of 20A.
    3.  Measure primary current ($I_p$) and secondary current ($I_s$) using precision ammeters.
    4.  Measure the phase angle between $I_p$ and the reversed $I_s$.
    5.  Calculate the ratio error and phase angle error for each current value.
    6.  Plot Ratio Error vs. Primary Current and Phase Angle Error vs. Primary Current.
*   **Analysis:** Discuss the results and compare them with the specified accuracy class of the CT.

**Exercise 2: CT Excitation Test**

*   **Objective:** To determine the knee-point voltage of a given CT.
*   **Procedure:**
    1.  Connect the secondary of the test CT to a variable AC voltage source through a high resistance (e.g., 10 kΩ) and an ammeter/voltmeter. Keep the primary open.
    2.  Gradually increase the applied voltage from 0 to 100V (or as specified).
    3.  Record the secondary voltage ($V_s$) and secondary current ($I_s$) at each step.
    4.  Plot $V_s$ vs. $I_s$.
    5.  Determine the knee-point voltage.
*   **Analysis:** Explain the significance of the knee-point voltage for fault current analysis.

**Exercise 3: PT Ratio and Phase Angle Error Test**

*   **Objective:** To determine the ratio error and phase angle error of a given PT at various primary voltages.
*   **Procedure:**
    1.  Set up the primary voltage injection test circuit. Connect the test PT to a variable voltage source with a specified burden connected to the secondary (e.g., 15 VA for a 110V secondary PT).
    2.  Apply primary voltages from 95 kV to 115 kV in steps of 5 kV.
    3.  Measure primary voltage ($V_p$) and secondary voltage ($V_s$) using precision voltmeters.
    4.  Measure the phase angle between $V_p$ and $V_s$.
    5.  Calculate the ratio error and phase angle error for each voltage value.
    6.  Plot Ratio Error vs. Primary Voltage and Phase Angle Error vs. Primary Voltage.
*   **Analysis:** Discuss the results and compare them with the specified accuracy class of the PT.

---

## Conclusion

Thorough testing of CTs and PTs is indispensable for ensuring the reliable and safe operation of power systems. Understanding the principles behind these tests, the relevant standards, and the interpretation of results empowers engineers to assess the performance of these critical devices and diagnose potential issues. This module provides a foundational understanding of these essential testing procedures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
