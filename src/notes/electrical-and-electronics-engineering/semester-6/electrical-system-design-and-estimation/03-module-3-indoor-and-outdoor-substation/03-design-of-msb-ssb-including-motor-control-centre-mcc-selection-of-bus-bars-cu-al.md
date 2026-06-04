---
title: "Design of MSB & SSB including Motor Control Centre (MCC) - Selection of bus bars (CU & Al) and Switchgears"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 3: Indoor and Outdoor substation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36550"
status: "completed"
scrapedAt: "2026-05-23T16:27:16.266Z"
---
# Module 3: Indoor and Outdoor Substation - Design of MSB & SSB including Motor Control Centre (MCC) - Selection of Busbars (CU & Al) and Switchgears

This module focuses on the design principles and considerations for Main Switchboards (MSBs) and Sub-Main Switchboards (SSBs), along with Motor Control Centres (MCCs). A crucial aspect of this design involves the selection of busbar materials (Copper and Aluminium) and appropriate switchgear. Understanding these components is vital for ensuring the safe, reliable, and efficient distribution of electrical power in various applications, from residential buildings to industrial complexes.

---

## 1. Introduction to MSB, SSB, and MCC

### 1.1 Main Switchboard (MSB)

*   **Definition:** The MSB is the primary distribution point within an electrical system. It receives power from the utility supply (or a generator) and distributes it to various sub-distribution boards or directly to large loads.
*   **Function:**
    *   Receives incoming power.
    *   Provides overcurrent and short-circuit protection for the entire installation.
    *   Houses main incomer circuit breakers, busbars, and outgoing feeders.
    *   Often includes metering equipment.
*   **Location:** Typically located in a central, easily accessible, and secure area within a building or facility.
*   **Key Components:** Incoming feeders, main circuit breakers, busbar system, outgoing feeders, protection relays, metering instruments.
*   **Standards/Codes:** National Building Code of India (NBC) 2016 (relevant sections on electrical installations), National Electrical Code (NEC) by BIS.

### 1.2 Sub-Main Switchboard (SSB)

*   **Definition:** An SSB is a secondary distribution point that receives power from the MSB and further distributes it to smaller distribution boards or specific areas/loads within a building.
*   **Function:**
    *   Receives power from the MSB.
    *   Provides localized overcurrent and short-circuit protection.
    *   Distributes power to a specific zone, floor, or group of equipment.
*   **Location:** Strategically placed within the areas they serve to minimize cable lengths and voltage drop.
*   **Key Components:** Incoming feeder from MSB, busbars, outgoing feeders to smaller DBs or loads, circuit breakers.
*   **Standards/Codes:** Similar to MSB, as per NBC 2016 and NEC by BIS.

### 1.3 Motor Control Centre (MCC)

*   **Definition:** An MCC is a centralized assembly of motor starters, controllers, and distribution components, designed to manage and control electric motors.
*   **Function:**
    *   Provides a safe and organized enclosure for motor control and protection devices (starters, contactors, overloads, VFDs).
    *   Facilitates centralized monitoring and control of multiple motors.
    *   Offers protection against overloads, short circuits, and phase imbalances for motors.
*   **Location:** Typically situated near the motors they control, often in industrial settings or facilities with significant motor loads (e.g., pumping stations, manufacturing plants).
*   **Key Components:** Motor starters (DOL, Star-Delta, Soft Starters, VFDs), circuit breakers/fuses, contactors, overload relays, control wiring, busbars.
*   **Types:** Fixed type, semi-draw-out type, draw-out type. Draw-out types offer greater flexibility for maintenance without shutting down the entire MCC.
*   **Standards/Codes:** IS 4745, IS 8623, relevant IEC standards.

---

## 2. Design of MSB & SSB

The design of MSBs and SSBs involves several critical steps, focusing on safety, reliability, efficiency, and compliance with Indian Standards.

### 2.1 Load Estimation and Allocation

*   **Process:**
    1.  **Identify all loads:** List all electrical equipment and their power requirements (kW or kVA).
    2.  **Calculate connected load:** Sum of the power ratings of all equipment.
    3.  **Apply demand factors:** As per NBC 2016 and IS codes, to account for the fact that not all loads operate simultaneously at their full rating. This avoids oversizing equipment.
    4.  **Calculate maximum demand:** The highest power demand expected at any given time.
    5.  **Allocate loads to feeders:** Distribute loads logically to different outgoing feeders from the MSB/SSB for balanced loading and ease of maintenance.
*   **Reference:** NBC 2016 provides guidelines for demand factors for various types of buildings and electrical installations. Electrical Systems Design by M. K. Giridharan and Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya are valuable resources for load calculation methodologies.

### 2.2 Selection of Incoming and Outgoing Feeders

*   **Incoming Feeder:**
    *   **Rating:** Must be sized to handle the maximum demand of the installation, with a safety margin.
    *   **Protection:** Typically an ACB (Air Circuit Breaker) or MCCB (Moulded Case Circuit Breaker) for the incomer, rated for the incoming supply capacity and fault level.
*   **Outgoing Feeders:**
    *   **Rating:** Each feeder's rating is determined by the total load it serves.
    *   **Protection:** Circuit breakers (MCBs, MCCBs) or fuses for each outgoing feeder, rated according to the load and cable size.
    *   **Coordination:** Select protective devices to ensure selectivity (discrimination) so that a fault in one feeder only trips that feeder, not affecting others.
*   **Reference:** IS 13947 series for low-voltage switchgear.

### 2.3 Busbar System Design

Busbars are conductors used to connect multiple circuits in parallel.

#### 2.3.1 Selection of Busbar Material: Copper vs. Aluminium

| Feature            | Copper (CU)                                       | Aluminium (Al)                                          |
| :----------------- | :------------------------------------------------ | :------------------------------------------------------ |
| **Conductivity**   | Higher conductivity (approx. 58 MS/m)             | Lower conductivity (approx. 35 MS/m)                    |
| **Current Carrying Capacity** | Higher for the same cross-section         | Lower for the same cross-section                        |
| **Weight**         | Heavier                                           | Lighter (about 30% of copper's weight for same conductivity) |
| **Cost**           | Higher material cost                              | Lower material cost                                     |
| **Strength**       | Higher mechanical strength                        | Lower mechanical strength                               |
| **Corrosion**      | Less prone to oxidation, but can corrode in certain environments | More prone to oxidation, requires careful termination and jointing |
| **Temperature Rise** | Lower temperature rise for the same current         | Higher temperature rise for the same current            |
| **Ease of Jointing** | Easier to form reliable joints                    | Requires special compounds and techniques for reliable joints to prevent oxidation |
| **Applications**   | High-density installations, critical applications, limited space | Large industrial installations, long bus runs, weight-sensitive applications |

**Important Considerations for Aluminium Busbars:**

*   **Oxidation:** Aluminium forms an oxide layer that is less conductive. Special anti-oxidant grease or compounds are essential at all joints and termination points.
*   **Creep:** Under sustained pressure (e.g., from bolted connections), aluminium can deform over time (creep). Terminals and clamping mechanisms must account for this.
*   **Dissimilar Metals:** When connecting aluminium to copper (e.g., cable to busbar), bimetallic connectors or washers are mandatory to prevent galvanic corrosion.
*   **Reference:** Electrical Systems Design by M. K. Giridharan discusses the pros and cons of CU and Al busbars. IS 8084 for busbars.

#### 2.3.2 Busbar Sizing

*   **Factors:**
    *   **Continuous current rating:** Based on the total load and diversity factor for the section of the switchboard.
    *   **Temperature rise limits:** As specified by relevant standards (e.g., IS 8623, IEC 60439).
    *   **Short-circuit current rating (SCCR):** The busbar must withstand the thermal and mechanical stresses of a short circuit.
    *   **Ambient temperature:** Higher ambient temperatures require larger busbar sizes.
    *   **Enclosure ventilation:** The degree of ventilation of the switchboard enclosure affects heat dissipation.
*   **Methodology:** Typically involves consulting tables provided in standards or using software tools that apply standard formulas. The aim is to select a busbar cross-section that keeps the temperature rise within acceptable limits under the maximum continuous current and can withstand the short-circuit forces.
*   **Reference:** IS 8623 (Part 1 and Part 2) provides guidance on busbar sizing and short-circuit withstand capacity. Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya offers practical methods for calculation.

#### 2.3.3 Busbar Configuration

*   **Single Busbar:** Simplest, cost-effective. Power is supplied through one main bus. Limited flexibility during maintenance or faults.
*   **Single Busbar with Sectionalization:** The busbar is divided into sections, allowing isolation of parts of the bus for maintenance or fault clearance.
*   **Duplicate Busbar (Double Busbar):** Two independent busbars. Allows for maintenance on one busbar while the other remains energized. Also allows for flexible power distribution and load transfer. This configuration is common in MSBs for critical facilities.
*   **Ring Busbar:** Busbars are arranged in a ring, with incomers and outgoing feeders connected at points along the ring. Offers high reliability as power can be supplied from either direction.

### 2.4 Selection of Switchgear

Switchgear refers to a combination of electrical disconnectors, circuit breakers, fuses, and associated control and protection equipment used to control, protect, and isolate electrical equipment.

#### 2.4.1 Types of Switchgear Devices

*   **Circuit Breakers:**
    *   **Air Circuit Breakers (ACBs):** Used for main incomers and for high fault current applications in MSBs. Can interrupt large fault currents.
    *   **Moulded Case Circuit Breakers (MCCBs):** Used for outgoing feeders, sub-mains, and sometimes as incomers in smaller MSBs/SSBs. Offer adjustable thermal and magnetic trip settings.
    *   **Miniature Circuit Breakers (MCBs):** Used for final distribution circuits in SSBs and distribution boards. Typically for lower current ratings.
*   **Fuses:**
    *   Provide overcurrent and short-circuit protection.
    *   Used in conjunction with isolators or as primary protection in some applications.
    *   **Types:** HRC (High Rupturing Capacity) fuses are common.
*   **Switch-Disconnectors:**
    *   Allow manual switching of circuits under load and isolation of equipment for maintenance.
    *   Often used in combination with fuses.
*   **Isolators (Disconnectors):**
    *   Provide a visible air gap for safe maintenance. Must not be operated under load.

#### 2.4.2 Selection Criteria for Switchgear

*   **Rated Voltage:** Must be equal to or greater than the system operating voltage.
*   **Rated Current:** Must be greater than or equal to the continuous current the circuit will carry.
*   **Short-Circuit Withstand Capacity (SCCR):** The switchgear must be able to withstand the thermal and mechanical stresses of the maximum prospective fault current at its installation point. This is crucial for safety and preventing damage.
*   **Breaking Capacity:** The ability of a circuit breaker to safely interrupt a short-circuit current.
*   **Type of Enclosure:** IP (Ingress Protection) rating to protect against dust and water ingress.
*   **Operating Mechanism:** Manual, electrical, or stored energy.
*   **Protection Features:** Overload (thermal), short circuit (magnetic), earth fault, phase imbalance.
*   **Service Conditions:** Ambient temperature, altitude, presence of corrosive gases, etc.
*   **Standards:** Compliance with relevant BIS and IEC standards (e.g., IS 13947 series, IS 13703).
*   **Reference:** Electrical Systems Design by M. K. Giridharan provides comprehensive details on switchgear selection. K. B. Raina and S. K. Bhattacharya's book is excellent for costing and selection parameters.

---

## 3. Design of Motor Control Centre (MCC)

MCCs are specialized switchboards for motor control and protection.

### 3.1 Motor Load Analysis

*   **Types of Motors:** AC induction motors, DC motors, synchronous motors.
*   **Motor Characteristics:** Horsepower (HP) or Kilowatt (kW) rating, starting current (typically 5-8 times full load current), starting time, duty cycle (continuous, intermittent).
*   **Starting Methods:** Direct-On-Line (DOL), Star-Delta, Auto-Transformer Starter, Soft Starter, Variable Frequency Drive (VFD). The choice of starting method impacts the control circuitry and protection requirements.

### 3.2 MCC Structure and Configuration

*   **Vertical Sections:** MCCs are typically assembled in vertical sections, each containing starter units for individual motors.
*   **Compartmentalization:** Units are often compartmentalized for safety and to prevent the spread of faults.
*   **Draw-out Units:** This feature allows for easy removal and replacement of motor starters without de-energizing the main busbar of the MCC, facilitating maintenance.
*   **Fixed Units:** Less common, where starters are permanently wired into the MCC.
*   **Vertical Busbar:** A continuous busbar runs vertically through each section, providing power to the individual starter units.
*   **Horizontal Busbar:** May be present at the top or bottom for incoming power or connections to other MCC sections.

### 3.3 Components of an MCC Starter Unit

Each starter unit typically includes:

*   **Incoming Protection:** A circuit breaker or fuses for protection against overcurrent and short circuits.
*   **Contactor:** An electrically operated switch that closes the circuit to the motor.
*   **Overload Relay:** Protects the motor from sustained overcurrents that could cause overheating. Often provides phase-loss protection as well.
*   **Control Devices:** Pushbuttons (Start/Stop), indicator lamps, selector switches.
*   **Optional Devices:** Variable Frequency Drives (VFDs), Soft Starters, power factor correction capacitors.

### 3.4 Selection of MCC Components

*   **Starter Components:**
    *   **Contactor Rating:** Must be selected based on the motor's full load current (FLC) and starting duty (AC-3 rating for squirrel cage motors).
    *   **Overload Relay Setting:** Adjustable to match the motor's Full Load Ampere (FLA) rating.
    *   **Circuit Breaker/Fuse Rating:** For the starter unit, sized to protect the motor circuit and the starter components. Must have adequate breaking capacity.
*   **Vertical Busbar Sizing:**
    *   **Current Rating:** Determined by the total connected motor load in the MCC, plus a diversity factor for motor starting. It must also be rated for the fault current.
    *   **Support and Bracing:** Must be robust enough to withstand mechanical stresses during short circuits.
*   **Control Wiring:** Appropriate gauge and type of cables for control circuits, with proper segregation from power circuits.
*   **Reference:** IS 8623 series for switchgear assemblies, IS 4745 for MCCs. Electrical Systems Design by M. K. Giridharan is a good reference for motor control principles.

### 3.5 MCC Design Considerations

*   **Safety:** Proper grounding, insulation, interlocks, and compartmentalization.
*   **Maintenance:** Ease of access to starter units, especially with draw-out designs.
*   **Accessibility:** Control devices and indicators should be easily reachable.
*   **Ventilation:** To dissipate heat generated by motors and components.
*   **Protection Coordination:** Ensuring that protection devices operate selectively.

---

## 4. Practice Questions & Exercises

**Q1. (CO1, K2) Define the terms MSB, SSB, and MCC.**

**Answer:**
*   **MSB (Main Switchboard):** The primary electrical distribution point, receiving power from the utility and distributing it to sub-distribution points or major loads.
*   **SSB (Sub-Main Switchboard):** A secondary distribution board that receives power from the MSB and distributes it to specific zones or smaller distribution boards.
*   **MCC (Motor Control Centre):** A centralized assembly of motor starters, controllers, and distribution equipment for managing and controlling electric motors.

**Q2. (CO2, K3) Explain the key advantages and disadvantages of using Copper versus Aluminium for busbars.**

**Answer:**
*   **Copper (CU):**
    *   **Advantages:** Higher conductivity, higher current carrying capacity, better mechanical strength, less prone to oxidation.
    *   **Disadvantages:** Higher cost, heavier weight.
*   **Aluminium (Al):**
    *   **Advantages:** Lower cost, lighter weight, good conductivity (though less than copper).
    *   **Disadvantages:** Lower conductivity/current capacity for same size, prone to oxidation requiring special jointing compounds, susceptible to creep, requires bimetallic connectors when connecting to copper.

**Q3. (CO3, K3) A motor with a full load current of 50A, operating at 415V, needs to be controlled and protected in an MCC. Select appropriate switchgear components for a DOL starter unit, considering the starting current of an induction motor.**

**Answer:**
*   **Contactor:** For DOL starting, the contactor should have an AC-3 rating for at least the motor's FLC (50A). A 63A or higher rated contactor would be suitable.
*   **Overload Relay:** Should be adjustable to protect the motor from overheating. The setting range should encompass the motor's FLA, so a relay with a range like 40-60A would be appropriate.
*   **Circuit Breaker (MCCB):** For protection of the starter and motor circuit, the MCCB rating should be higher than the motor's FLC but suitable for the starting current. An MCCB with a rating of 63A or 80A with adjustable thermal and instantaneous magnetic trips would be a good choice. The magnetic trip should be set above the starting current to prevent nuisance tripping.
*   **Reference:** IS 13947 series for contactors and MCCBs.

**Q4. (CO1, K2) What is the primary function of an overload relay in an MCC starter unit?**

**Answer:** The primary function of an overload relay is to protect the motor from damage due to sustained overcurrents caused by conditions like overload, phase unbalance, or frequent starting, which can lead to overheating.

**Q5. (CO4, K4) A building's MSB has an incomer rated at 630A, 415V, with a prospective fault current of 36 kA. Discuss the criteria for selecting an appropriate incoming circuit breaker for this MSB.**

**Answer:**
1.  **Rated Voltage:** The breaker's rated voltage must be 415V or higher.
2.  **Rated Current:** The breaker's continuous current rating must be at least 630A.
3.  **Short-Circuit Breaking Capacity:** Crucially, the breaker's breaking capacity must be equal to or greater than the prospective fault current of 36 kA. This ensures it can safely interrupt the fault current without being damaged.
4.  **Type of Breaker:** An Air Circuit Breaker (ACB) is typically used for such ratings and fault levels due to its higher breaking capacity.
5.  **Protection Settings:** The breaker should have adjustable overload and short-circuit trip settings to provide adequate protection for the downstream circuits and coordinate with other protective devices.
6.  **Reference:** IS 13947 (Part 2) for circuit breakers.

---

## 5. Important Points to Remember

*   **Safety First:** All design decisions for MSBs, SSBs, and MCCs must prioritize safety, adhering to Indian Standards and codes.
*   **Load Calculation Accuracy:** Precise load estimation and the application of appropriate diversity factors are fundamental for correct sizing.
*   **Busbar Jointing:** For aluminium busbars, proper use of anti-oxidant compounds and bimetallic connectors is non-negotiable to prevent failures.
*   **Switchgear Coordination:** Select protective devices (breakers, fuses) that coordinate effectively to ensure selectivity during fault conditions.
*   **MCC Draw-out Design:** Favored for ease of maintenance and operational continuity.
*   **Short-Circuit Withstand:** Always consider the SCCR of busbars and switchgear components, as it's critical for system integrity during fault events.
*   **Reference Standards:** Consistently refer to BIS codes (NEC, IS 8623, IS 13947, IS 4745, NBC 2016) throughout the design process.

---

This comprehensive set of notes covers the fundamental aspects of MSB, SSB, and MCC design, including busbar and switchgear selection. By understanding these principles and adhering to relevant standards, electrical engineers can design safe and reliable power distribution systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
