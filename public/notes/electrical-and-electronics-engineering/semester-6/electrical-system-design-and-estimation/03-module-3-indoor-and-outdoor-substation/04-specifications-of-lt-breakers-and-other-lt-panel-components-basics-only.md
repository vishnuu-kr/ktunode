---
title: "Specifications of LT Breakers and other LT panel components (Basics only)"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 3: Indoor and Outdoor substation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36551"
status: "completed"
scrapedAt: "2026-05-23T16:27:17.451Z"
---
# Electrical System Design and Estimation - Module 3: Indoor and Outdoor Substation

## Topic: Specifications of LT Breakers and Other LT Panel Components (Basics Only)

---

### **Introduction**

This module focuses on the essential components of Low Tension (LT) panels, commonly found in substations and electrical distribution systems. Understanding their specifications is crucial for designing safe, reliable, and efficient electrical installations. We will delve into the basic specifications of LT breakers and other vital LT panel components, aligning with Indian Standards (IS codes) and general electrical design principles.

---

### **1. Low Tension (LT) Breakers**

LT breakers are safety devices designed to interrupt the flow of current during fault conditions (like short circuits or overloads) to protect electrical equipment and personnel.

#### **1.1 Types of LT Breakers**

*   **Moulded Case Circuit Breakers (MCCBs):** These are pre-fabricated insulated cases containing the circuit breaker mechanism. They are generally used for currents up to 1000A.
    *   *Reference:* Giridharan, M. K. (Electrical Systems Design) often discusses MCCBs in the context of distribution boards and panelboards.
*   **Air Circuit Breakers (ACBs):** These breakers use air as the arc quenching medium. They are typically used for higher currents, often above 600A or 1000A, and in main incomer feeders.
    *   *Reference:* Raina & Bhattacharya (Electrical Design Estimating Costing) provides details on the application and sizing of ACBs.
*   **Miniature Circuit Breakers (MCBs):** While not strictly "breakers" in the same sense as MCCBs/ACBs for main incomers, MCBs are essential for branch circuit protection within LT panels and are covered under similar specification principles.

#### **1.2 Key Specifications of LT Breakers**

These specifications are critical for selecting the appropriate breaker for a given application.

*   **Rated Current (In or I n ):** The maximum continuous current the breaker can carry without tripping. It should be selected based on the full load current of the protected circuit, with a safety margin.
    *   *Example:* For a motor drawing 50A continuously, an MCCB with a rated current of 63A or 80A might be selected (referencing derating factors if necessary).
    *   *IS Code Relevance:* While a specific IS code for breaker rating is not a single point, selection is guided by IS 8828 (for MCBs) and the general principles in the National Electrical Code (NEC) by BIS for overall safety and system design.
*   **Rated Voltage (Ue or U n ):** The voltage for which the breaker is designed. For LT systems in India, this is typically 415V or 440V (3-phase).
    *   *Important Point:* The rated voltage should be equal to or greater than the system voltage.
*   **Breaking Capacity (Icu or Ics):** The maximum fault current the breaker can safely interrupt without being damaged.
    *   **Icu (Ultimate Breaking Capacity):** The maximum symmetrical RMS value of the prospective current that the breaker can interrupt under specified conditions.
    *   **Ics (Service Breaking Capacity):** The breaking capacity at which the breaker can reliably interrupt a fault current and remain operational for subsequent service without repair. It is typically a percentage of Icu (e.g., 50% or 75% of Icu).
    *   *Reference:* Giridharan, M. K. (Electrical Systems Design) emphasizes the importance of matching the breaker's breaking capacity to the prospective short-circuit current at the point of installation.
    *   *Calculation Basis:* prospective fault current at the point of installation.
*   **Tripping Mechanism:** The method by which the breaker detects faults and interrupts the circuit.
    *   **Thermal-Magnetic:** Uses a bimetallic strip for overload protection (thermal) and an electromagnet for short-circuit protection (magnetic). Common in MCBs and smaller MCCBs.
    *   **Electronic/Static:** Uses electronic circuitry for more precise and adjustable tripping characteristics, often with features like adjustable overload, short-circuit, earth fault, and ground fault protection. Common in higher-rated MCCBs and ACBs.
*   **Number of Poles:**
    *   **1-Pole, 2-Pole, 3-Pole, 4-Pole:** Depends on the system (single-phase, three-phase) and whether neutral protection is required.
        *   1-Pole: Single phase, line only.
        *   2-Pole: Single phase, line and neutral.
        *   3-Pole: Three phase, all three lines.
        *   4-Pole: Three phase with neutral, providing protection on all four conductors.
*   **Degree of Protection (IP Rating):** Indicates the level of protection against solid objects (dust) and liquids (water). For example, IP55 means protection against dust ingress and water jets.
    *   *Reference:* National Electrical Code (BIS) and National Building Code of India (NBC) specify IP ratings for electrical enclosures based on the environment.
*   **Type of Protection (for electronic trip units):**
    *   **Shor t-Circuit Protection:** Typically includes Instantaneous (fixed or adjustable) and Time-Delayed (long-time delay) settings.
    *   **Overload Protection:** Time-delayed tripping based on the current level, often with adjustable "I²t" characteristics.
    *   **Earth Fault/Ground Fault Protection (Optional but Recommended):** Detects leakage currents to earth.

#### **1.3 Application Examples**

*   **Main Incomer:** 4-pole ACB or MCCB with high breaking capacity and adjustable electronic trip unit.
*   **Feeder Distribution:** MCCBs with suitable rated current and breaking capacity.
*   **Motor Protection:** MCCBs with thermal-magnetic or electronic trip units, often with adjustable overload settings and inverse time characteristics.

---

### **2. Other LT Panel Components**

LT panels house various components for power distribution, control, and protection.

#### **2.1 Busbars**

Busbars are conductive strips (usually copper or aluminum) used to distribute electrical power within the panel to various outgoing feeders.

*   **Material:** Copper (better conductivity, higher cost) or Aluminum (lighter, lower cost, susceptible to oxidation).
*   **Rating:** Sized to carry the total current of the feeders connected to them with adequate thermal capacity.
    *   *Reference:* Giridharan, M. K. (Electrical Systems Design) provides guidelines for sizing busbars based on current carrying capacity and ambient temperature.
*   **Configuration:** Single busbar, double busbar systems.
*   **Mounting:** Insulated from the panel structure using suitable insulators to prevent short circuits.
*   **Important Point:** Ensure sufficient spacing between busbars and between busbars and the panel enclosure to prevent arcing.

#### **2.2 Indicating Instruments**

These provide visual indication of electrical parameters.

*   **Ammeters:** Measure current in a circuit.
    *   **Range:** Selected based on the maximum current expected in the circuit.
    *   **Connection:** Connected in series with the circuit through a Current Transformer (CT).
    *   *IS Code Relevance:* IS 1243 (for ammeters) and related standards for CTs.
*   **Voltmeters:** Measure voltage between two points.
    *   **Range:** Selected based on the system voltage.
    *   **Connection:** Connected across the line and neutral or across line-to-line conductors through a Potential Transformer (PT) or directly for low voltages.
*   **Frequency Meters:** Indicate the system frequency (e.g., 50 Hz in India).
*   **Power Factor Meters:** Indicate the power factor of the load.
*   **Wattmeters/Varmeters:** Measure real and reactive power, respectively.

#### **2.3 Control Switches**

Used for manual operation of equipment.

*   **Selector Switches:** Used to select different operating modes or circuits (e.g., Auto/Manual).
*   **Push Buttons:** Used for initiating actions (e.g., Start, Stop).
*   **Toggle Switches:** For ON/OFF operations.

#### **2.4 Indicating Lamps**

Provide visual indication of the status of a circuit.

*   **Colors:** Typically Red (ON/Healthy), Green (OFF/Ready), Amber (Alarm/Fault).
*   **Voltage Rating:** Must match the control circuit voltage.

#### **2.5 Fuses**

An older but still common form of overcurrent protection, particularly for smaller circuits or as a backup.

*   **Types:**
    *   **HRC Fuses (High Rupturing Capacity):** Can interrupt very high fault currents without damage.
    *   **Rewirable Fuses:** Less common in modern panels due to limited breaking capacity and reliability.
*   **Rating:** Current rating (Amps) and voltage rating.
    *   *Reference:* IS 13703 (for fuses) and relevant sections in the National Electrical Code (BIS).
*   **Application:** Used in distribution boards and for protecting individual loads where MCBs/MCCBs are not used.

#### **2.6 Relays**

Devices that detect abnormal conditions and initiate a corrective action (e.g., tripping a breaker).

*   **Overcurrent Relays:** Protect against excessive current.
*   **Earth Fault Relays:** Protect against leakage currents to earth.
*   **Voltage Relays:** Protect against over/under voltage conditions.
*   **Control Relays:** Used in control logic for interlocking and sequencing.

#### **2.7 Current Transformers (CTs) and Potential Transformers (PTs)**

Used to step down high currents and voltages to safe levels for measurement and protection relays.

*   **CTs:** Provide a proportional secondary current (e.g., 1A or 5A) for ammeters and relays.
    *   **Ratio:** e.g., 100/5 A means for every 100A primary current, 5A flows in the secondary.
    *   **Accuracy Class:** e.g., Class 1, Class 0.5 (for metering) or Class 5P10, Class 5P20 (for protection).
*   **PTs:** Provide a proportional secondary voltage (e.g., 110V) for voltmeters and relays.
    *   **Ratio:** e.g., 415/110 V.
    *   **Accuracy Class:** e.g., Class 0.5, Class 1.
*   *Reference:* Giridharan, M. K. (Electrical Systems Design) provides detailed information on the selection and application of CTs and PTs.
*   *Important Point:* The secondary of CTs must never be left open-circuited when the primary is energized. They must always be shorted or connected to a burden.

#### **2.8 Metering Equipment**

*   **Energy Meters:** Measure and record electrical energy consumption (kWh).
    *   **Types:** Mechanical, Electronic, Smart Meters.
    *   *Reference:* BIS standards related to energy meters.
*   **Control Panel Wiring and Terminal Blocks:** For interconnecting all the components within the panel and for external connections.

---

### **3. Indian Standards (IS Codes) and Code of Practice (Relevant to the Topic)**

Adherence to IS codes is crucial for ensuring safety and quality in electrical installations, aligning with **CO1**.

*   **IS 8828:** Miniature circuit breakers.
*   **IS 13947 (Part 1, 2, 3, 4):** Low-voltage switchgear and controlgear. This is a comprehensive series covering circuit breakers, switch-disconnectors, fuses, etc.
    *   Part 2: Circuit-breakers.
    *   Part 3: Switches, disconnectors and fuse-combination units.
*   **IS 13703:** Specification for fuses for use by common loads in power circuits.
*   **IS 1243:** Specification for Ammeters and Voltmeters.
*   **IS 3256:** Specification for Current Transformers.
*   **IS 3156:** Specification for Voltage Transformers.
*   **National Electrical Code of India (IS 732):** Provides general guidelines for electrical installations.
*   **National Building Code of India (NBC 2016):** Contains provisions related to electrical installations in buildings.

---

### **4. Design Considerations and Estimation Basics**

*   **Load Assessment:** Determining the total connected load and maximum demand for sizing panel components and breakers.
*   **System Voltage:** Ensuring all components are rated for the system voltage (e.g., 415V, 400V).
*   **Fault Level Study:** Calculating the prospective short-circuit current at the point of installation to select breakers with adequate breaking capacity.
*   **Coordination:** Proper coordination between protective devices (e.g., breaker upstream and downstream) to ensure that only the faulty circuit is isolated.
*   **Cost Estimation:** Understanding the relative costs of different components (e.g., MCCBs vs. MCBs, copper vs. aluminum busbars) for budgetary purposes.
    *   *Reference:* K. B. Raina, S. K. Bhattacharya (Electrical Design Estimating Costing) and J. B. Gupta (A Course in Electrical Installation Estimating and Costing) provide detailed methodologies for cost estimation.
*   **Space Allocation:** Ensuring sufficient space within the LT panel for components, wiring, and ventilation.

---

### **5. Alignment with Course Outcomes**

*   **CO1: Understand the Indian standards and code of practice for efficient and effective energy usage with various electrical system design components.**
    *   This topic directly addresses CO1 by detailing specifications and referencing relevant IS codes for LT breakers and panel components, which are fundamental to system design and safe operation.
*   **CO2: Design electrical wiring for residential and commercial consumers as per IS codes and NEC and integration of PV systems.**
    *   The knowledge of LT breakers (MCBs, MCCBs) and panel components is essential for designing distribution boards and panels in residential and commercial buildings. While PV integration is a separate aspect, the protection and distribution principles remain the same.
*   **CO3: Design electrical installation for industrial consumers and high rise buildings.**
    *   Industrial and high-rise buildings utilize robust LT panels with higher current ratings, ACBs, and MCCBs, making the specifications covered here directly applicable to CO3.
*   **CO4: Analyse electrical system conditioning equipment and power backups.**
    *   Understanding LT breakers and their role in protecting equipment is a prerequisite for analyzing the behavior of electrical systems during normal and abnormal conditions, including the integration of UPS and generators.
*   **CO5: Design various earthing methods and protection.**
    *   While this topic focuses on overcurrent protection, earthing is a crucial complementary aspect of electrical safety that is implemented within the same panel structure. The breaker's ability to operate under fault conditions is heavily reliant on proper earthing.

---

### **6. Important Points to Remember**

*   **Safety First:** Always adhere to IS codes and best practices for safe electrical installations.
*   **Correct Sizing:** Properly size breakers, busbars, and other components based on load current and fault levels.
*   **Breaking Capacity is Crucial:** Select breakers with sufficient breaking capacity to interrupt the maximum possible fault current.
*   **CT Secondaries:** Never leave CT secondaries open-circuited.
*   **Environmental Conditions:** Consider the IP rating and ambient temperature for component selection.
*   **Coordination:** Ensure selectivity and coordination between protective devices.

---

### **7. Practice Questions/Exercises**

**Question 1:** A single-phase residential circuit has a load of 15A. What type of breaker and its approximate rating would you select for this circuit? (Alignment: CO2)

**Answer 1:** For a single-phase residential circuit with a 15A load, a 1-pole Miniature Circuit Breaker (MCB) with a rated current of 16A or 20A would be suitable. The 20A MCB provides a slight margin for motor starting or inrush currents, adhering to general good practice. This selection aligns with IS 8828.

**Question 2:** Explain the difference between Icu and Ics for an MCCB. Why is it important to consider both? (Alignment: CO1, CO3)

**Answer 2:**
*   **Icu (Ultimate Breaking Capacity):** The maximum fault current the MCCB can interrupt once, after which it may be damaged and require replacement.
*   **Ics (Service Breaking Capacity):** The maximum fault current the MCCB can interrupt reliably and remain operational for subsequent service without repair. It is usually a fraction of Icu.

It's important to consider both because Ics ensures the breaker can continue to function after an event, minimizing downtime and replacement costs. In critical industrial applications (CO3), having a breaker with a sufficient Ics might be preferred if multiple fault events are anticipated, though the primary requirement is that both Icu and Ics must be greater than or equal to the prospective fault current at the point of installation.

**Question 3:** A 3-phase motor draws a full load current of 45A at 415V. It is protected by an MCCB. If the prospective fault current at the MCCB location is 20kA, suggest suitable ratings for the MCCB. (Alignment: CO3)

**Answer 3:**
*   **Rated Current (In):** For a 45A motor, an MCCB with a rated current of 63A would be appropriate, providing a safety margin.
*   **Breaking Capacity (Icu/Ics):** The MCCB's breaking capacity must be greater than or equal to the prospective fault current of 20kA. Therefore, an MCCB with a breaking capacity of 25kA or 36kA (standard available ratings) would be suitable. The specific choice between Icu and Ics depends on the criticality of the application and desired operational continuity after a fault.

**Question 4:** What is the primary purpose of a Current Transformer (CT) in an LT panel, and what is a critical safety precaution when working with CTs? (Alignment: CO1, CO4)

**Answer 4:**
*   **Purpose:** CTs are used to step down high currents to a safe, measurable level (typically 1A or 5A) for ammeters, energy meters, and protection relays. They isolate the measuring and protection circuits from the high-voltage primary circuit.
*   **Critical Safety Precaution:** The secondary winding of a CT must **never be left open-circuited** when the primary winding is energized. An open-circuited CT secondary can generate extremely high voltages, posing a severe shock hazard and potentially damaging the CT itself. The secondary should always be short-circuited or connected to its intended burden (ammeter, relay).

---

This concludes the basic overview of LT breaker and LT panel component specifications. A deeper understanding of these components and their selection criteria is crucial for effective electrical system design and estimation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
