---
title: "Industrial loads, selection of starters, cable and switchgears, Power factor improvement – kVAR calculation, correction methods"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 3: Indoor and Outdoor substation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3654f"
status: "completed"
scrapedAt: "2026-05-23T16:27:15.089Z"
---
# Electrical System Design and Estimation - Module 3: Indoor and Outdoor Substation

## Topic: Industrial Loads, Selection of Starters, Cable and Switchgears, Power Factor Improvement – kVAR Calculation, Correction Methods

This module focuses on understanding the electrical requirements for industrial facilities, selecting appropriate equipment for motor control, power distribution, and ensuring efficient power utilization through power factor correction.

---

### 1. Industrial Loads

**1.1 Definition and Classification of Industrial Loads:**

*   **Definition:** Industrial loads refer to the electrical energy consumption by machinery, equipment, and processes within a manufacturing or production facility. These loads are typically characterized by high power demands, varying operational cycles, and the need for reliability.
*   **Classification:**
    *   **Based on Power Consumption:**
        *   **Light Loads:** Small machinery, lighting, control circuits (e.g., 0.5 kW to 5 kW).
        *   **Medium Loads:** Pumps, compressors, conveyor belts, small machine tools (e.g., 5 kW to 50 kW).
        *   **Heavy Loads:** Large motors, furnaces, rolling mills, heavy-duty machinery (e.g., > 50 kW).
    *   **Based on Nature of Operation:**
        *   **Continuous Loads:** Operate for extended periods (e.g., pumps, fans).
        *   **Intermittent Loads:** Operate for specific durations with rest periods (e.g., presses, cranes).
        *   **Variable Loads:** Load fluctuates significantly during operation (e.g., welding machines, lifts).
    *   **Based on Power Source:**
        *   **Motor Loads:** The most significant category, driving machinery.
        *   **Heating Loads:** Furnaces, ovens, boilers.
        *   **Lighting Loads:** Illumination for workspaces.
        *   **Electronic Loads:** Control systems, instrumentation, variable frequency drives (VFDs).

**1.2 Load Assessment and Estimation for Industrial Facilities:**

*   **Purpose:** To accurately determine the total power demand and energy consumption to design a safe, reliable, and cost-effective electrical system.
*   **Methods:**
    *   **Nameplate Data:** Reading power ratings (kW/HP), voltage, current, and power factor from equipment nameplates.
    *   **Load Surveys:** Measuring actual power consumption over a period using wattmeters, ammeters, and voltmeters. This is crucial for understanding operating characteristics and diversity factors.
    *   **Demand Factor:** The ratio of the maximum demand of a system to the total connected load.
        *   `Demand Factor = Maximum Demand / Total Connected Load`
        *   *Importance:* Reflects that not all equipment operates at its full capacity simultaneously. (Refer to IS 732 for guidance on electrical installations).
    *   **Diversity Factor:** The ratio of the sum of individual maximum demands of various subdivisions of a system to the maximum demand of the whole system.
        *   `Diversity Factor = Sum of Individual Maximum Demands / Maximum Demand of the System`
        *   *Importance:* Accounts for the fact that different loads peak at different times. Always greater than or equal to 1.
    *   **Average Load:** Total energy consumed over a period divided by the duration of the period.
    *   **Maximum Demand:** The highest average power demand recorded during a specific interval (usually 15-30 minutes).
*   **Example:**
    Consider an industrial plant with the following connected loads:
    *   Motor A: 10 HP (7.46 kW), PF = 0.8, Demand Factor = 0.8
    *   Motor B: 20 HP (14.92 kW), PF = 0.85, Demand Factor = 0.7
    *   Lighting: 5 kW, Demand Factor = 0.9
    *   Heating: 8 kW, Demand Factor = 1.0

    *   Connected Load (Motor A) = 7.46 kW / 0.8 (efficiency) ≈ 9.33 kVA (assuming PF = 0.8, kW = kVA * PF)
    *   Connected Load (Motor B) = 14.92 kW / 0.85 (efficiency) ≈ 17.55 kVA
    *   Connected Load (Lighting) = 5 kW ≈ 5 kVA
    *   Connected Load (Heating) = 8 kW = 8 kVA

    *   Maximum Demand (Motor A) = 9.33 kVA * 0.8 = 7.46 kVA
    *   Maximum Demand (Motor B) = 17.55 kVA * 0.7 = 12.29 kVA
    *   Maximum Demand (Lighting) = 5 kVA * 0.9 = 4.5 kVA
    *   Maximum Demand (Heating) = 8 kVA * 1.0 = 8 kVA

    *   Total Connected Load ≈ 9.33 + 17.55 + 5 + 8 = 40 kVA (approx.)
    *   Total Maximum Demand = 7.46 + 12.29 + 4.5 + 8 = 32.25 kVA (This is a simplified calculation. A proper diversity factor would be applied if multiple motors or lighting circuits were involved.)

**1.3 Key Considerations for Industrial Load Design:**

*   **Reliability and Availability:** Industrial processes often require uninterrupted power. Standby generators, UPS systems, and redundant power feeds are crucial. (Refer to Course Outcome CO4).
*   **Safety:** Adherence to national safety standards like the National Electrical Code (NEC) and Indian Standards (IS). (Refer to CO1).
*   **Efficiency:** Minimizing energy losses through proper voltage selection, conductor sizing, and power factor correction.
*   **Future Expansion:** Designing the system with sufficient capacity to accommodate future growth.
*   **Cost-Effectiveness:** Balancing initial investment with long-term operational costs.

---

### 2. Selection of Starters for Industrial Motors

**2.1 Why Starters are Needed:**

*   **High Starting Current:** Induction motors draw 5-8 times their full load current during starting, which can cause voltage dips, damage to windings, and overload protective devices.
*   **Torque Control:** Some applications require controlled acceleration to prevent mechanical shock or damage to the driven equipment.
*   **Protection:** Starters provide overload, short-circuit, and undervoltage protection for the motor.
*   **Reduced Starting Torque:** Some starters can limit the starting torque to protect the driven load.

**2.2 Types of Starters:**

*   **Direct-On-Line (DOL) Starter:**
    *   **Description:** Connects the motor directly to the full supply voltage.
    *   **Pros:** Simple, inexpensive, provides maximum starting torque.
    *   **Cons:** High starting current, potential for voltage dips, unsuitable for large motors or weak power systems.
    *   **Application:** Small motors (typically up to 5 HP or 3.7 kW) where starting current is not a concern. (Refer to Giridharan, Chapter 5).
*   **Star-Delta (Y-Δ) Starter:**
    *   **Description:** Connects the motor windings first in a star configuration (reducing voltage to windings by 1/√3) and then, after reaching a certain speed, switches to a delta configuration (full voltage).
    *   **Pros:** Reduces starting current to 1/3 of DOL, reduces starting torque to 1/3 of DOL.
    *   **Cons:** Requires a motor with 6 terminals, starting torque is low, not suitable for loads requiring high starting torque.
    *   **Application:** Medium-sized motors (typically 5 HP to 50 HP or 3.7 kW to 37 kW) for centrifugal loads like pumps and fans.
*   **Auto-Transformer Starter:**
    *   **Description:** Uses an auto-transformer to reduce the voltage applied to the motor during starting. Taps on the transformer allow for voltage selection (e.g., 50%, 65%, 80% of line voltage).
    *   **Pros:** Reduces starting current and starting torque to a greater extent than Star-Delta.
    *   **Cons:** More expensive and larger than Star-Delta starters, requires an auto-transformer.
    *   **Application:** Motors where higher starting torque is required than Star-Delta can provide, or when precise starting current limitation is needed.
*   **Soft Starter:**
    *   **Description:** Uses solid-state (thyristor/SCR) devices to gradually increase the voltage applied to the motor, providing controlled acceleration.
    *   **Pros:** Smooth starting, adjustable starting current and torque, reduced mechanical stress, improved power factor during starting.
    *   **Cons:** More expensive than conventional starters.
    *   **Application:** Applications requiring very smooth acceleration, precise control, and where power factor during starting is a concern.
*   **Variable Frequency Drive (VFD) / Variable Voltage Variable Frequency (VVVF) Drive:**
    *   **Description:** Controls both the voltage and frequency supplied to the motor, allowing for precise speed control. Starting current is typically limited to full load current.
    *   **Pros:** Excellent speed control, energy savings, soft starting, regenerative braking, improved power factor.
    *   **Cons:** Most expensive option, introduces harmonics.
    *   **Application:** Applications requiring precise speed control, significant energy savings, and variable torque loads.

**2.3 Selection Criteria for Motor Starters:**

*   **Motor Size (HP/kW):** Larger motors generally require reduced voltage starting.
*   **Starting Torque Requirement:** Loads requiring high starting torque (e.g., loaded conveyors, compressors) need starters that provide sufficient torque.
*   **Power System Capacity:** Weak power systems may necessitate starters that limit starting current.
*   **Cost:** Budget constraints play a significant role in selection.
*   **Control and Protection Features:** Specific needs for advanced control or protection. (Refer to Course Outcome CO4).
*   **Application Type:** Centrifugal loads vs. positive displacement loads.

---

### 3. Cable and Switchgears

**3.1 Electrical Cables:**

*   **Definition:** Conductors insulated to safely transmit electrical power or signals.
*   **Types of Cables Used in Industrial Substation:**
    *   **Power Cables:** For transmitting high currents from source to load.
        *   **Armoured Cables:** For mechanical protection, often used in industrial environments. Common types include SWA (Steel Wire Armoured) and STA (Steel Tape Armoured).
        *   **Unarmoured Cables:** Used where mechanical protection is not a primary concern, typically within conduits or trunking.
        *   **Conductor Material:** Copper (better conductivity, more expensive) or Aluminium (lighter, less expensive).
        *   **Insulation Material:** PVC (Polyvinyl Chloride), XLPE (Cross-Linked Polyethylene - higher temperature rating and current carrying capacity), Rubber.
    *   **Control Cables:** For carrying low voltage signals to control equipment (relays, contactors, indicators).
    *   **Instrumentation Cables:** For transmitting signals from sensors and instruments.
*   **Cable Sizing (Conductor Sizing):**
    *   **Purpose:** To ensure the cable can carry the required current without overheating and to limit voltage drop.
    *   **Factors:**
        *   **Continuous Current Carrying Capacity (Ampacity):** Determined by insulation type, conductor material, ambient temperature, grouping of cables, and installation method (e.g., in conduit, tray, buried). (Refer to National Electrical Code, BIS, for specific tables).
        *   **Voltage Drop:** The reduction in voltage along the length of the cable due to its resistance and reactance. Excessive voltage drop can affect motor performance and equipment operation.
            *   `Voltage Drop (Vd) = I * Z_cable` where `I` is current and `Z_cable` is cable impedance.
            *   Percentage Voltage Drop = `(Vd / V_supply) * 100%`
            *   Maximum permissible voltage drop for feeders and branch circuits is specified in codes (e.g., 3% for feeders, 5% for branch circuits in NEC).
        *   **Short Circuit Current Rating:** The cable must withstand the thermal and mechanical stresses of a short circuit for the duration the protective device takes to clear the fault.
        *   **Installation Method:** Cables installed in free air have better heat dissipation than those in conduits or buried.
    *   **Referencing Standards:** IS 3961 (Copper conductors), IS 732 (Electrical installations of buildings), and the National Electrical Code (NEC) provide crucial guidelines for cable selection and sizing. (Refer to CO1, CO3).
*   **Example (Simplified Cable Sizing):**
    A motor requires 50A continuous current. The cable is XLPE insulated, copper conductor, installed in a cable tray with other cables. The ambient temperature is 40°C.
    *   Refer to cable derating factors in NEC/IS for ambient temperature and grouping.
    *   Let's assume the basic ampacity of the selected cable size is 60A at 30°C.
    *   Derating factor for 40°C ambient = 0.87
    *   Derating factor for grouping (e.g., 3 circuits) = 0.80
    *   Total derating factor = 0.87 * 0.80 = 0.696
    *   Required cable ampacity = 50A / 0.696 ≈ 71.8 A
    *   Therefore, select a cable with a basic ampacity greater than 71.8 A.

**3.2 Switchgears:**

*   **Definition:** A combination of electrical disconnect switches, fuses, or circuit breakers used to control, protect, and isolate electrical equipment.
*   **Purpose:**
    *   **Protection:** To protect electrical systems and equipment from overcurrents (overloads and short circuits) and other faults.
    *   **Control:** To switch circuits ON or OFF for operation, maintenance, or emergencies.
    *   **Isolation:** To safely isolate parts of the system for maintenance.
*   **Key Components and Types:**
    *   **Circuit Breakers (CB):**
        *   **Description:** Devices that automatically interrupt the flow of current when a fault is detected. They can also be operated manually.
        *   **Types:**
            *   **Low Voltage (LV) Circuit Breakers:** MCB (Miniature Circuit Breaker), MCCB (Molded Case Circuit Breaker), ACB (Air Circuit Breaker).
            *   **Medium Voltage (MV) Circuit Breakers:** SF6 (Sulphur Hexafluoride), Vacuum Circuit Breakers, Oil Circuit Breakers.
            *   **High Voltage (HV) Circuit Breakers:** SF6, Vacuum.
        *   **Selection Criteria:** Breaking capacity (kA), voltage rating, current rating, tripping characteristics, arc quenching medium. (Refer to Giridharan, Chapter 4).
    *   **Fuses:**
        *   **Description:** A sacrificial device that melts and breaks the circuit when overcurrent occurs.
        *   **Types:** HRC (High Rupturing Capacity) fuses are common in industrial applications.
        *   **Selection Criteria:** Current rating, voltage rating, breaking capacity, time-current characteristic.
    *   **Switches:**
        *   **Description:** Devices for manually connecting or disconnecting circuits.
        *   **Types:** Fuse switches, disconnect switches, changeover switches.
    *   **Relays:**
        *   **Description:** Devices that detect abnormal conditions (overcurrent, undervoltage, etc.) and send a signal to the circuit breaker to trip.
        *   **Types:** Overcurrent relays, undervoltage relays, differential relays, distance relays.
    *   **Busbars:**
        *   **Description:** Conductors used to interconnect various circuits at a common point, typically in switchboards and substations.
    *   **Surge Protection Devices (SPDs):**
        *   **Description:** Protect equipment from transient overvoltages caused by lightning or switching surges. (Refer to CO4).
*   **Switchgear Assemblies:**
    *   **Switchboards:** Indoor assemblies containing switches, fuses, circuit breakers, and meters for controlling and distributing power to various outgoing feeders.
    *   **Motor Control Centers (MCCs):** Assemblies specifically designed to house motor starters and control equipment.
    *   **Distribution Boards:** Similar to switchboards but typically for lower power distribution.
*   **Important Codes and Standards:** National Electrical Code (NEC), IS 3043 (Earthing), IS 325 (AC induction motors), IS 732. (Refer to CO1).

---

### 4. Power Factor Improvement – kVAR Calculation, Correction Methods

**4.1 What is Power Factor (PF)?**

*   **Definition:** The ratio of the real power (kW) to the apparent power (kVA) in an AC circuit.
    *   `PF = Real Power (kW) / Apparent Power (kVA)`
    *   In a sinusoidal AC system, it is also the cosine of the phase angle (φ) between voltage and current.
        *   `PF = cos(φ)`
*   **Types of Power:**
    *   **Real Power (kW):** The power that performs useful work (e.g., rotating a motor shaft, heating).
    *   **Reactive Power (kVAR):** The power that creates and sustains magnetic fields (in motors, transformers) or electric fields (in capacitors). It does not perform useful work but is essential for the operation of inductive and capacitive equipment.
    *   **Apparent Power (kVA):** The vector sum of real power and reactive power. It represents the total power that the system must be capable of supplying.
        *   `kVA² = kW² + kVAR²`
*   **Power Triangle:** A right-angled triangle where:
    *   Adjacent side = Real Power (kW)
    *   Opposite side = Reactive Power (kVAR)
    *   Hypotenuse = Apparent Power (kVA)

**4.2 Why is Power Factor Improvement Important?**

*   **Reduced Electricity Bills:** Utilities often penalize industrial consumers with low power factors due to increased system losses and the need for larger electrical infrastructure (generators, transformers, cables) to handle apparent power.
*   **Increased System Capacity:** Improving PF reduces the kVA demand for the same kW load, effectively increasing the capacity of existing transformers, generators, and cables.
*   **Reduced System Losses:** Low PF leads to higher current for the same kW, resulting in increased `I²R` (copper) losses in conductors, transformers, and motors.
*   **Improved Voltage Regulation:** Higher reactive power components lead to greater voltage drop. Improving PF reduces reactive power, thereby improving voltage regulation.
*   **Reduced kVA Demand:** Leading to potential cost savings on capital expenditure if upgrades are planned.

**4.3 Causes of Low Power Factor:**

*   **Inductive Loads:** The most common cause. Motors, transformers, induction furnaces, fluorescent lighting ballasts, etc., draw lagging reactive power to create magnetic fields.
*   **Lightly Loaded Induction Motors:** Induction motors operate with their lowest PF when lightly loaded.
*   **Arc Furnaces and Welding Equipment:** These can draw significant reactive power.

**4.4 Power Factor Calculation:**

*   **Scenario:** An industrial plant has a connected load of 500 kW with a power factor of 0.7 lagging. The apparent power is `kVA = kW / PF = 500 kW / 0.7 = 714.3 kVA`.
*   **Reactive Power Calculation:** Using the power triangle:
    *   `kVAR² = kVA² - kW²`
    *   `kVAR² = (714.3 kVA)² - (500 kW)²`
    *   `kVAR² = 510145 - 250000 = 260145`
    *   `kVAR = √260145 ≈ 510 kVAR` (lagging)

**4.5 Target Power Factor:**

*   Most utilities require a minimum power factor of 0.90 or 0.95 lagging.

**4.6 Power Factor Correction:**

*   **Method:** The primary method is to install static capacitors, which provide leading reactive power to counteract the lagging reactive power drawn by inductive loads.
*   **kVAR Requirement Calculation for Correction:**
    *   **Target:** Improve PF from 0.7 lagging to 0.95 lagging.
    *   **Existing:** kW = 500 kW, Current PF = 0.7 lagging.
    *   **Target:** kW = 500 kW, Target PF = 0.95 lagging.
    *   **Existing kVAR:** `kVAR1 = kW * tan(arccos(PF1))`
        *   `arccos(0.7) ≈ 45.57°`
        *   `tan(45.57°) ≈ 1.02`
        *   `kVAR1 = 500 kW * 1.02 ≈ 510 kVAR` (lagging)
    *   **Target kVAR:** `kVAR2 = kW * tan(arccos(PF2))`
        *   `arccos(0.95) ≈ 18.19°`
        *   `tan(18.19°) ≈ 0.329`
        *   `kVAR2 = 500 kW * 0.329 ≈ 164.5 kVAR` (lagging)
    *   **Required Capacitor kVAR:** `kVAR_cap = kVAR1 - kVAR2`
        *   `kVAR_cap = 510 kVAR - 164.5 kVAR ≈ 345.5 kVAR`

    *   Therefore, approximately 345.5 kVAR of capacitor bank capacity is needed.

**4.7 Methods of Installing Capacitor Banks:**

*   **Individual Correction:** Capacitors connected directly across individual inductive loads (e.g., a capacitor bank sized for the motor's full load kVAR and PF). This is the most effective method for minimizing system current and losses.
*   **Group Correction:** Capacitors connected to a group of similar loads or at a distribution point feeding multiple loads.
*   **Central Correction:** A large capacitor bank installed at the main incoming supply point of the plant. This is the least expensive but least effective method in terms of reducing system losses and improving voltage at individual load points.
*   **Automatic Capacitor Banks:** Consist of multiple capacitor steps controlled by a power factor relay. The relay monitors the system PF and switches capacitor steps in or out as needed to maintain the target PF. This is ideal for fluctuating loads. (Refer to Giridharan, Chapter 6).

**4.8 Important Points for PF Correction:**

*   **Avoid Over-Correction:** Over-correction (leading PF) can lead to voltage rise, resonant frequencies, and potential damage to equipment.
*   **Harmonics:** Harmonic currents can cause resonance with capacitor banks, leading to overloads. Consider detuned capacitor banks (with series reactors) if significant harmonics are present (e.g., from VFDs, rectifiers).
*   **Switching:** Capacitors should be switched using appropriate switching devices (e.g., contactors with pre-insertion resistors to dampen inrush current).
*   **Temperature:** Capacitors are sensitive to high ambient temperatures. Ensure adequate ventilation.
*   **Standards:** Adhere to IS standards for capacitor selection and installation.

---

### Practice Questions and Exercises

1.  **Load Estimation:** An industrial facility has the following loads:
    *   Motor 1: 25 HP (assume 85% efficiency, 0.85 PF)
    *   Motor 2: 50 HP (assume 90% efficiency, 0.88 PF)
    *   Lighting: 10 kW
    *   Heating: 15 kW
    Estimate the total connected kVA. If the demand factor for motors is 0.8 and for lighting and heating is 0.9, estimate the maximum demand in kVA. (Assume 1 HP = 0.746 kW)

    **Answer:**
    *   Motor 1: 25 HP * 0.746 kW/HP / 0.85 (efficiency) ≈ 22 kW. kVA1 = 22 kW / 0.85 PF ≈ 25.88 kVA
    *   Motor 2: 50 HP * 0.746 kW/HP / 0.90 (efficiency) ≈ 41.44 kW. kVA2 = 41.44 kW / 0.88 PF ≈ 47.09 kVA
    *   Lighting: 10 kW. kVA_light = 10 kW
    *   Heating: 15 kW. kVA_heat = 15 kW
    *   Total Connected kVA ≈ 25.88 + 47.09 + 10 + 15 = **97.97 kVA**
    *   Max Demand (Motor 1) = 25.88 kVA * 0.8 = 20.7 kVA
    *   Max Demand (Motor 2) = 47.09 kVA * 0.8 = 37.67 kVA
    *   Max Demand (Lighting) = 10 kVA * 0.9 = 9 kVA
    *   Max Demand (Heating) = 15 kVA * 0.9 = 13.5 kVA
    *   Total Maximum Demand ≈ 20.7 + 37.67 + 9 + 13.5 = **80.87 kVA**

2.  **Starter Selection:** A 30 HP induction motor is used to drive a conveyor belt that requires a high starting torque. Which type of starter would be most suitable, and why?

    **Answer:** A **Star-Delta starter** would be a common choice for a 30 HP motor. However, since the application requires **high starting torque**, a standard Star-Delta starter (which provides 1/3rd starting torque) might not be sufficient. In this case, an **Auto-Transformer starter** (providing higher starting torque options like 50% or 65%) or a **Soft Starter** (which offers adjustable starting torque) would be more appropriate. A DOL starter is generally not recommended for motors of this size due to high starting current.

3.  **Cable Sizing:** A motor draws a full-load current of 80A. The cable is to be installed in a single conduit in free air, and the ambient temperature is 45°C. If the cable's rated ampacity at 30°C is 100A, and the derating factor for 45°C ambient is 0.82, what is the minimum required cable size (in terms of ampacity)?

    **Answer:**
    *   Required Ampacity = Full Load Current / Derating Factor
    *   Required Ampacity = 80A / 0.82 = **97.56A**
    *   Therefore, select a cable with a rated ampacity of at least 97.56A.

4.  **Power Factor Correction:** A factory has a load of 100 kW at a power factor of 0.75 lagging. The utility company mandates a minimum power factor of 0.95 lagging. Calculate the kVAR of capacitors required to achieve this improvement.

    **Answer:**
    *   Existing kVAR (kVAR1) = 100 kW * tan(arccos(0.75))
        *   arccos(0.75) ≈ 41.41°
        *   tan(41.41°) ≈ 0.8819
        *   kVAR1 = 100 kW * 0.8819 = 88.19 kVAR (lagging)
    *   Target kVAR (kVAR2) = 100 kW * tan(arccos(0.95))
        *   arccos(0.95) ≈ 18.19°
        *   tan(18.19°) ≈ 0.329
        *   kVAR2 = 100 kW * 0.329 = 32.9 kVAR (lagging)
    *   Required Capacitor kVAR = kVAR1 - kVAR2 = 88.19 kVAR - 32.9 kVAR = **55.29 kVAR**

---

### Important Points to Remember:

*   **Load estimation is crucial:** Accurate assessment prevents undersizing (overheating, failure) or oversizing (unnecessary cost).
*   **Diversity and Demand Factors:** Essential for realistic load calculations.
*   **Motor Starters:** Selection depends on motor size, starting torque, and power system characteristics. DOL for small, Star-Delta for medium, Auto-Transformer/Soft Starters for higher starting torque needs, VFD for speed control.
*   **Cable Sizing:** Balance current carrying capacity, voltage drop, and short-circuit withstand capability. Always refer to the latest Indian Standards (IS) or National Electrical Code (NEC).
*   **Switchgear:** Provides protection, control, and isolation. Proper selection of circuit breakers, fuses, and relays is vital for safety and reliability.
*   **Power Factor:** Low PF leads to penalties, increased losses, and reduced system capacity.
*   **Capacitors:** The primary method for PF correction, providing leading kVAR. Automatic capacitor banks are best for fluctuating loads.
*   **Harmonics:** Be mindful of harmonics from VFDs and other electronic loads, as they can interact with capacitor banks.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **National Electrical Code (Bureau of Indian Standards).**
*   **Electrical Systems Design by M. K. Giridharan (IK International Publishers, New Delhi).** (Chapters 4, 5, 6 are particularly relevant).
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya (NEW AGE).**
*   **Residential Commercial and Industrial Systems by H. Joshi (McGraw Hill Education).**
*   **National Building Code of INDIA 2016 by Bureau of Indian Standards.**
*   **IS 732:** Code of practice for electrical wiring installations.
*   **IS 3043:** Code of practice for earthing.
*   **IS 325:** Indian Standard Specification for AC induction motors.

---
This comprehensive set of notes covers the key aspects of Industrial Loads, Selection of Starters, Cable and Switchgears, and Power Factor Improvement as per the learning outcomes and course objectives. Remember to consult the specified textbooks and standards for detailed information and specific design parameters.