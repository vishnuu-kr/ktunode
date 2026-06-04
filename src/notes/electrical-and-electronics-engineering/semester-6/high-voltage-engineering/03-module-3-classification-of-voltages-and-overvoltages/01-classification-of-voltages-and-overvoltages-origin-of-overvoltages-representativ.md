---
title: "Classification of Voltages and Overvoltages-Origin of Overvoltages – Representative Overvoltages- Performance Criterion –Withstand voltage."
subject: "HIGH VOLTAGE ENGINEERING"
module: "Module 3: Classification of Voltages and Overvoltages"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365ff"
status: "completed"
scrapedAt: "2026-05-23T16:28:07.830Z"
---
# High Voltage Engineering - Module 3: Classification of Voltages and Overvoltages

## Topic: Classification of Voltages and Overvoltages - Origin of Overvoltages – Representative Overvoltages - Performance Criterion – Withstand Voltage

---

### **1. Introduction to High Voltage Engineering and Importance of Overvoltages**

*   **High Voltage Engineering** deals with the generation, transmission, and utilization of electrical energy at high voltage levels, as well as the insulation and breakdown phenomena associated with these voltages.
*   **Overvoltages** are transient deviations of voltage from its normal operating value, exceeding the designed insulation strength of the equipment. They are a primary cause of insulation breakdown and subsequent equipment failure in high voltage power systems.
*   Understanding the classification, origin, and characteristics of overvoltages is crucial for:
    *   Designing reliable and safe high voltage equipment.
    *   Implementing effective insulation coordination.
    *   Selecting appropriate protective devices like surge arresters.
    *   Ensuring the stability and continuity of power supply.

---

### **2. Classification of Voltages**

Voltages in power systems can be classified based on their magnitude and duration.

#### **2.1. Based on Magnitude:**

*   **Normal Operating Voltage:** The RMS value of the voltage under normal operating conditions.
*   **Overvoltages:** Voltages that exceed the normal operating voltage. These are further categorized by their amplitude relative to the normal voltage.
*   **Undervoltages:** Voltages that fall below the normal operating voltage. While not the focus of this topic, they can also cause operational issues.

#### **2.2. Based on Duration and Shape:**

This is a more practical classification for understanding overvoltages.

*   **Impulse Voltages (Surges):**
    *   **Definition:** Transient voltages that rise rapidly to a peak value and then decay, often exponentially. They are characterized by their short duration.
    *   **Types:**
        *   **Lightning Surges:** Very fast, high amplitude, and oscillatory or unidirectional depending on the path of discharge.
        *   **Switching Surges:** Slower than lightning surges, typically oscillatory, and caused by the switching operations of circuit breakers and other equipment.
*   **Temporary Overvoltages (TOVs):**
    *   **Definition:** Sustained overvoltages that occur for relatively long durations (seconds to minutes) and are usually at power frequency.
    *   **Origin:** Often caused by system faults like line-to-ground faults, especially in effectively grounded systems.
*   **Power Frequency Overvoltages:**
    *   **Definition:** Overvoltages at the power frequency (50 Hz or 60 Hz) that persist for a longer duration than impulse voltages but are not as long as TOVs. They are often caused by resonance or sudden changes in system loading.

---

### **3. Origin of Overvoltages**

Overvoltages in high voltage systems can arise from both internal and external sources.

#### **3.1. External Overvoltages (Atmospheric Origin):**

*   **Lightning:**
    *   **Mechanism:** Lightning is a natural phenomenon involving the discharge of atmospheric electricity. When a charged cloud passes over a transmission line or substation, it induces charges in the conductors. A lightning strike can occur directly on a conductor or nearby, or an induced surge can propagate along the conductor.
    *   **Characteristics:**
        *   **Front Time ($T_f$):** The time taken for the voltage to rise from 10% to 90% of its peak value. For lightning, $T_f$ is typically 1-2 microseconds ($\mu$s).
        *   **Time to Half Value ($T_h$):** The time taken for the voltage to decay to 50% of its peak value. For lightning, $T_h$ is typically 40-50 microseconds ($\mu$s).
        *   **Peak Value:** Can be very high, reaching several MV.
        *   **Polarity:** Can be positive or negative.
        *   **Waveform:** Can be unidirectional (impulse) or oscillatory.
    *   **Impact:** Direct lightning strikes are the most severe, inducing very high voltage surges. Induced surges are less severe but still significant.
    *   **Reference:** Wadhwa, C. L. (2011) discusses lightning phenomena in detail in Chapter 3.

#### **3.2. Internal Overvoltages (System Origin):**

These are generated within the power system due to switching operations or faults.

*   **Switching Surges:**
    *   **Mechanism:** Occur during the opening or closing of circuit breakers, load break switches, or the energization/de-energization of transmission lines and transformers. These operations involve rapid changes in current and voltage, leading to oscillations.
    *   **Types of Switching Operations and Associated Overvoltages:**
        *   **Line Energization/De-energization:** When a transmission line is switched on or off, the distributed capacitance and inductance of the line can cause significant voltage oscillations.
        *   **Circuit Breaker Operations:**
            *   **Resonance during switching:** Can lead to sustained overvoltages.
            *   **Current chopping:** When a circuit breaker interrupts a current before its natural zero, the stored energy in the system's inductance can cause a rapid voltage rise.
            *   **Re-strikes:** If the circuit breaker fails to extinguish the arc completely and it restrikes, subsequent interruptions can generate surges.
        *   **Fault Clearing:** When a fault is cleared by a circuit breaker, the sudden removal of the fault current can induce overvoltages.
        *   **Capacitor Bank Switching:** Energizing or de-energizing capacitor banks can cause transient overvoltages due to the stored energy.
    *   **Characteristics:**
        *   **Front Time ($T_f$):** Typically longer than lightning surges, ranging from 10 to 100 microseconds ($\mu$s).
        *   **Time to Half Value ($T_h$):** Also longer, ranging from 100 to 1000 microseconds ($\mu$s).
        *   **Peak Value:** Generally lower than lightning surges, but can be significant.
        *   **Waveform:** Usually oscillatory.
    *   **Reference:** Kuchler, A. (2018) elaborates on switching overvoltages and their causes in Chapter 4.

*   **Temporary Overvoltages (TOVs):**
    *   **Mechanism:** Occur due to sustained deviations from normal operating conditions, typically for durations of several cycles to minutes.
    *   **Causes:**
        *   **Line-to-ground faults:** In effectively grounded systems, the voltage on unfaulted phases can rise to $\sqrt{3}$ times the normal phase-to-neutral voltage when a line-to-ground fault occurs on one phase. This overvoltage is temporary and lasts until the fault is cleared.
        *   **Load Rejection:** Sudden removal of large loads can cause oscillations and temporary overvoltages.
        *   **Ferroresonance:** A non-linear phenomenon involving capacitance and inductance, especially when a faulty circuit breaker leaves a small residual inductance in the circuit.
    *   **Characteristics:**
        *   **Duration:** Seconds to minutes.
        *   **Frequency:** Power frequency.
        *   **Amplitude:** Can be 1.1 to 1.8 times the normal operating voltage.
    *   **Reference:** Naidu M. S. and Kamaraju V. (2004) discuss TOVs and their origins in Chapter 2.

*   **Other Internal Overvoltages:**
    *   **Arrester Discharges:** The operation of surge arresters itself can cause temporary overvoltages due to their non-linear resistance.
    *   **Resonance in the system:** Can lead to sustained overvoltages at specific frequencies.

---

### **4. Representative Overvoltages**

To design and test high voltage equipment, standardized voltage waveforms are used to represent the most critical overvoltages. These are defined by standards like IEC (International Electrotechnical Commission) and IEEE (Institute of Electrical and Electronics Engineers).

#### **4.1. Standard Impulse Waves:**

*   **Standard Lightning Impulse Wave:**
    *   **Description:** Represents the worst-case scenario of a lightning strike.
    *   **Waveform:** A unidirectional voltage that rises rapidly and decays more slowly.
    *   **Parameters:** Defined by its front time and virtual time to half value.
        *   **Standard Value:** 1.2/50 $\mu$s (This means the voltage rises from 10% to 90% in 1.2 $\mu$s and decays to 50% of its peak value in 50 $\mu$s).
    *   **Application:** Used to test the impulse withstand strength of electrical apparatus against lightning surges.
    *   **Reference:** Kuffel E. Zaengl S. and Kuffel J. (2005) covers standard impulse waves and their generation in detail in Chapter 5.

*   **Standard Switching Impulse Wave:**
    *   **Description:** Represents overvoltages caused by switching operations, which are typically slower than lightning surges.
    *   **Waveform:** A unidirectional voltage that rises even more slowly than the lightning impulse and decays more slowly.
    *   **Parameters:** Defined by its front time and virtual time to half value.
        *   **Common Values:** 250/2500 $\mu$s and 250/500 $\mu$s. (This means the voltage rises from 10% to 90% in 250 $\mu$s and decays to 50% of its peak value in 2500 $\mu$s or 500 $\mu$s respectively).
    *   **Application:** Used to test the impulse withstand strength of high voltage equipment (especially extra-high voltage transmission lines and substations) against switching surges. The choice of waveform depends on the system voltage and equipment being tested.
    *   **Reference:** Wadhwa, C. L. (2011) discusses switching impulse waves and their significance in Chapter 4.

#### **4.2. Temporary Overvoltages (TOVs):**

*   **Description:** These are not represented by a specific waveform but by their amplitude and duration.
*   **Application:** Equipment is tested to withstand these sustained overvoltages for specified durations, often at power frequency.

---

### **5. Performance Criterion**

The performance criterion for high voltage equipment in the context of overvoltages relates to its ability to withstand these transient phenomena without failure.

*   **Insulation Strength:** The ability of the insulating material or system to prevent electrical breakdown under the application of voltage.
*   **Surge Impedance:** The characteristic impedance of a transmission line or cable, which influences the magnitude of surges.
*   **Failure Mechanism:** Understanding how insulation fails under different types of overvoltages is crucial. For example, impulse voltages typically cause flashover or puncture, while TOVs can lead to thermal breakdown due to prolonged stress.

---

### **6. Withstand Voltage**

*   **Definition:** The maximum voltage of a specified waveform that an electrical apparatus or insulation can withstand without experiencing disruptive discharge (e.g., flashover, puncture) for a specified time duration.
*   **Types of Withstand Voltages:**
    *   **Impulse Withstand Voltage (IWV):** The peak value of a standard impulse voltage (e.g., 1.2/50 $\mu$s lightning impulse or 250/2500 $\mu$s switching impulse) that the apparatus can withstand.
    *   **Power Frequency Withstand Voltage (PFWV):** The RMS value of a power frequency AC voltage that the apparatus can withstand for a specified time (e.g., 1 minute).
    *   **DC Withstand Voltage:** The DC voltage that the apparatus can withstand.

#### **6.1. Relationship between Overvoltages and Withstand Voltage:**

The primary goal of insulation design and coordination is to ensure that the overvoltages that a piece of equipment is likely to experience are always less than its withstand voltage.

*   **Design Margin:** A safety margin is always included. The withstand voltage of equipment is designed to be significantly higher than the expected overvoltages.
*   **Testing:** Electrical equipment is subjected to rigorous high voltage tests using standard impulse waves and power frequency voltages to verify its withstand capability.

---

### **7. Insulation Coordination**

*   **Definition:** The process of selecting the insulation levels and protective characteristics of various pieces of equipment in a power system such that the insulation of the most expensive and critical equipment is protected from damage by overvoltages, typically by using protective devices like surge arresters or shielding.
*   **Objective:** To ensure that during an overvoltage event, a disruptive discharge (failure) occurs only at a specifically chosen location (usually a protective device), thereby protecting the more valuable components.
*   **Key Elements:**
    *   **Insulation Levels:** Standardized withstand voltage ratings for different equipment.
    *   **Protective Levels:** The maximum voltage that a protective device (e.g., surge arrester) will allow to appear across the equipment it protects.
    *   **Margin of Safety:** The difference between the insulation level of the protected equipment and the protective level of the device. This margin must be sufficient to account for variations in withstand strength and overvoltage magnitudes.
*   **CO3 Alignment:** This topic directly addresses CO3: "Describe insulation coordination and surge arrester design." Understanding overvoltages is foundational for effective insulation coordination.

---

### **8. Practice Questions and Answers**

**Question 1:**
What is the primary difference between a lightning impulse voltage and a switching impulse voltage in terms of their waveform parameters?

**Answer:**
The primary difference lies in their front time and time to half value.
*   **Lightning Impulse:** Characterized by a faster rise and decay, typically 1.2/50 $\mu$s.
*   **Switching Impulse:** Characterized by a slower rise and decay, typically 250/2500 $\mu$s. This slower rise is representative of overvoltages generated during switching operations.

**Question 2:**
Name two common causes of temporary overvoltages (TOVs) in power systems.

**Answer:**
Two common causes of TOVs are:
1.  Line-to-ground faults in effectively grounded systems (leading to voltages of up to $\sqrt{3}$ times normal on unfaulted phases).
2.  Load rejection or sudden changes in system configuration.

**Question 3:**
Define "withstand voltage" and explain its significance in high voltage engineering.

**Answer:**
**Withstand Voltage** is the maximum voltage of a specified waveform that an electrical apparatus or insulation can withstand without failure (disruptive discharge) for a specific duration.
**Significance:** It is a crucial design parameter that ensures the reliability and safety of high voltage equipment. By testing equipment to its withstand voltage rating, manufacturers confirm that it can safely handle the overvoltages it is likely to encounter in service.

**Question 4:**
An extra-high voltage (EHV) transmission line tower is typically tested with which type of standard impulse wave, and why?

**Answer:**
EHV transmission line towers are typically tested with **standard switching impulse waves** (e.g., 250/2500 $\mu$s). This is because overvoltages on transmission lines are predominantly caused by switching operations, which generate slower surges compared to lightning. Testing with switching impulses ensures the tower's insulation is robust against these more frequent and characteristic system overvoltages. While lightning impulses are also considered, switching impulse strength is often the critical design factor for EHV line insulation.

**Question 5:**
A surge arrester is rated for a specific voltage. What does this rating signify in terms of its protective capability against overvoltages?

**Answer:**
The voltage rating of a surge arrester (e.g., its Maximum Continuous Operating Voltage - MCOV) signifies the maximum voltage it can continuously withstand without conducting current under normal operating conditions. More importantly, when an overvoltage occurs, the arrester's **protective level** (the voltage it limits the surge to) must be below the **withstand voltage** of the equipment it is protecting. The rating ensures the arrester will operate correctly to divert excess energy and limit the voltage to a safe level.

---

### **9. Key Points to Remember**

*   Overvoltages are transient deviations from normal operating voltage and are a major cause of insulation failure.
*   Overvoltages are broadly classified into external (lightning) and internal (switching, TOVs).
*   Standard impulse waves (1.2/50 $\mu$s for lightning, 250/2500 $\mu$s for switching) are used to represent worst-case scenarios for testing.
*   Temporary Overvoltages (TOVs) are sustained at power frequency and are typically caused by system faults or load changes.
*   **Withstand voltage** is a crucial rating for electrical equipment, indicating its ability to survive overvoltages.
*   **Insulation coordination** is the design principle that ensures overvoltages are safely handled by diverting them to protective devices, preventing damage to critical equipment.
*   The selection of appropriate insulation levels and protective devices is based on the expected magnitudes and characteristics of overvoltages.

---

### **10. Alignment with Course Outcomes (COs)**

*   **CO1: Identify different high voltage and current waveform generation circuits. (Knowledge Level: K1)**
    *   This topic lays the groundwork by explaining the different voltage waveforms (impulse, TOV) that need to be generated for testing, motivating the need for generation circuits discussed in other modules.
*   **CO2: Implement different sensing & measurement techniques for high voltage and current measurement. (Knowledge Level: K3)**
    *   Understanding the characteristics of overvoltages (peak values, durations) is essential for selecting appropriate measuring instruments and techniques to accurately capture these transient events.
*   **CO3: Describe insulation coordination and surge arrester design. (Knowledge Level: K2)**
    *   This is a direct alignment. This topic provides the fundamental understanding of overvoltages, their origins, and classifications, which are prerequisites for understanding insulation coordination and the design principles of surge arresters.
*   **CO4: Implement different testing methods for equipments and applications of HV systems. (Knowledge Level: K3)**
    *   The discussion of standard impulse waves and withstand voltages directly relates to the testing methods used in high voltage engineering to ensure equipment reliability.
*   **CO5: Explain the various technologies for lightning protection. (Knowledge Level: K2)**
    *   The detailed discussion on the origin and characteristics of lightning surges directly contributes to understanding the need for and principles of lightning protection technologies.

---

**References:**

*   Wadhwa, C. L. (2011). *High Voltage Engineering*. New Age International.
*   Kuchler, A. (2018). *High Voltage Engineering Fundamentals – Technology Applications*. Springer.
*   Naidu M. S., & Kamaraju V. (2004). *High Voltage Engineering Fundamentals*. Tata Mc Graw Hill.
*   Kuffel E., Zaengl S., & Kuffel J. (2005). *High Voltage Engineering Fundamentals*. Elsevier India P Ltd.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
