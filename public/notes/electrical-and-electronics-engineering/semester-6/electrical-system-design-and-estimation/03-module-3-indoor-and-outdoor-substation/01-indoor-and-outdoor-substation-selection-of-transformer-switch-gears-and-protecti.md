---
title: "Indoor and Outdoor substation- selection of transformer, switch gears and protective devices, Procedure for HT connection, design and estimation the quantity of material required for substations, Pre-commissioning tests for transformers"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 3: Indoor and Outdoor substation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3654e"
status: "completed"
scrapedAt: "2026-05-23T16:27:13.798Z"
---
# Module 3: Indoor and Outdoor Substations - Study Notes

## Topic: Indoor and Outdoor Substations: Selection of Transformer, Switchgear, and Protective Devices, Procedure for HT Connection, Design and Estimation of Material Quantity, Pre-commissioning Tests for Transformers

---

### **1. Introduction to Substations**

A substation is an integral part of an electrical power system that transforms voltage from high to low or vice versa. It also provides protection, switching, and control for the power system. Substations can be broadly classified into:

*   **Outdoor Substations:** All equipment is installed in the open, on plinths or structures. They are cost-effective for high voltage systems and easier to maintain.
*   **Indoor Substations:** All equipment is housed within a building. They are used in areas where space is limited, environmental conditions are harsh, or for security reasons. They offer better protection from weather and vandalism.

---

### **2. Selection of Transformers**

Transformers are the heart of any substation, responsible for changing voltage levels. The selection process involves considering several factors:

#### **2.1 Key Considerations for Transformer Selection:**

*   **System Voltage:** The primary and secondary voltage ratings must match the incoming and outgoing power lines. (Refer to IS 2026 for Transformer Standards)
*   **Power Rating (kVA/MVA):** This is the most crucial factor, determining the capacity of the transformer. It should be selected based on the anticipated load with a suitable future growth margin.
    *   **Example:** For a commercial building requiring 1000 kVA of power, a transformer of at least 1000 kVA, possibly 1250 kVA or 1600 kVA to account for future expansion, would be selected.
*   **Load Characteristics:** Understanding the nature of the load (e.g., continuous, intermittent, motor loads with starting currents) helps in selecting the appropriate transformer design.
*   **Efficiency:** Transformers with higher efficiency minimize energy losses, leading to lower operational costs. Look for transformers meeting IS 1180 standards for distribution transformers.
*   **Cooling Method:**
    *   **ONAN (Oil Natural Air Natural):** Suitable for smaller ratings.
    *   **ONAF (Oil Natural Air Forced):** Used for medium ratings, with fans to increase cooling.
    *   **OFWF (Oil Forced Water Forced):** Used for very large power transformers.
*   **Impedance:** The percentage impedance affects the short-circuit current. Higher impedance reduces short-circuit current but can lead to voltage regulation issues.
*   **Environmental Conditions:** Temperature, altitude, and pollution levels influence the transformer's design and cooling requirements.
*   **Cost:** Both initial cost and operational cost (due to losses) should be considered.
*   **Standards and Regulations:** Ensure the transformer complies with relevant Indian Standards (IS) and National Electrical Code (NEC) guidelines.

#### **2.2 Types of Transformers Commonly Used in Substations:**

*   **Power Transformers:** Used in transmission substations for stepping up or stepping down voltages.
*   **Distribution Transformers:** Used in distribution substations to step down voltage to a level suitable for consumers.

---

### **3. Selection of Switchgear**

Switchgear comprises switching devices and associated equipment used for controlling, protecting, and isolating electrical circuits.

#### **3.1 Key Considerations for Switchgear Selection:**

*   **Voltage Rating:** Must be suitable for the system voltage.
*   **Current Rating (Continuous and Short-time):** The switchgear must be able to carry the normal load current continuously and withstand short-circuit currents for a specified duration.
*   **Breaking Capacity:** The ability of the switchgear to interrupt fault currents safely. This is a critical parameter.
*   **Type of Duty:** Whether it's for frequent operation (e.g., circuit breakers) or infrequent operation (e.g., isolators).
*   **Arc Extinguishing Medium:**
    *   **Air Break:** For lower voltages.
    *   **Oil Break (Bulk Oil, Minimum Oil):** Older technology, less common now.
    *   **SF6 (Sulphur Hexafluoride):** Excellent dielectric and arc quenching properties, widely used in medium and high voltage.
    *   **Vacuum:** Highly effective for medium voltages, offering reliability and low maintenance.
*   **Standards Compliance:** Adherence to IS standards (e.g., IS 13118 for Circuit Breakers) is mandatory.
*   **Operating Mechanism:** Manual, electrical, or pneumatic.
*   **Interlocking Features:** Essential for safety to prevent incorrect operations.

#### **3.2 Types of Switchgear:**

*   **Circuit Breakers:** Designed to interrupt normal and fault currents.
    *   **Examples:** ACB (Air Circuit Breaker), VCB (Vacuum Circuit Breaker), SF6 Circuit Breaker.
*   **Isolators (Disconnectors):** Used to isolate sections of the circuit from the power source when no current is flowing. They are not designed to break load currents.
*   **Load Break Switches:** Can interrupt normal load currents but not fault currents.
*   **Fuses:** Simple overcurrent protection devices, typically used for lower voltage applications or as backup protection.
*   **Lightning Arresters (Surge Arresters):** Protect equipment from transient overvoltages caused by lightning or switching surges.
*   **Current Transformers (CTs) & Potential Transformers (PTs):** Used for measurement and protection relaying.
*   **Busbars:** Conductors that connect various circuits in the substation.

---

### **4. Selection of Protective Devices**

Protective devices are crucial for safeguarding the electrical system and equipment from damage due to faults like overcurrents, short circuits, and overvoltages.

#### **4.1 Key Considerations for Protective Device Selection:**

*   **Coordination:** Protective devices must be selected and set to operate selectively, ensuring that only the faulty section is isolated without affecting healthy parts of the system. This is a critical aspect of system design. (Refer to K3 for CO5: Design various earthing methods and protection).
*   **Sensitivity:** The device should detect and respond to the lowest possible fault current it is designed to protect against.
*   **Speed of Operation:** Faster operation minimizes damage to equipment.
*   **Reliability:** The device must operate correctly when a fault occurs.
*   **Type of Protection:**
    *   **Overcurrent Protection:** For overload and short circuits (e.g., Relays, Fuses).
    *   **Differential Protection:** For transformers and generators, protecting against internal faults.
    *   **Distance Protection:** For transmission lines, protecting against faults based on distance.
    *   **Overvoltage/Surge Protection:** (e.g., Lightning Arresters).
*   **Cost:** Balancing protection level with cost.

#### **4.2 Common Protective Devices:**

*   **Relays:**
    *   **Overcurrent Relays:** Non-directional and directional.
    *   **Earth Fault Relays:** To detect faults to earth.
    *   **Differential Relays:** For transformer and generator protection.
    *   **Distance Relays:** For line protection.
*   **Fuses:** Cartridge fuses, HRC (High Rupturing Capacity) fuses.
*   **Circuit Breakers:** As mentioned in switchgear, they also serve a protective function by interrupting fault currents.
*   **Lightning Arresters (Surge Arresters):** Protect against overvoltages.

---

### **5. Procedure for HT (High Tension) Connection**

Connecting an industrial or commercial consumer to the High Tension (HT) supply involves a systematic procedure, typically governed by the local Electricity Supply Utility (ESU).

#### **5.1 Key Steps:**

1.  **Application Submission:** The consumer submits an application to the ESU for HT supply, providing details of the load, voltage requirement, and premises.
2.  **Load Assessment & Sanction:** The ESU assesses the load and sanctions the connection based on system capacity and regulations.
3.  **Deposit & Agreement:** The consumer pays the necessary security deposit and signs a supply agreement outlining terms and conditions.
4.  **Substation/Point of Supply Design:** The consumer (or their appointed electrical consultant) designs the receiving substation as per ESU's specifications and relevant IS codes (e.g., National Electrical Code). This includes the transformer, switchgear, protection, and metering.
5.  **ESU Approval:** The ESU reviews and approves the substation design.
6.  **Construction of Substation:** The consumer constructs the receiving substation, installing all equipment as per the approved design. This includes civil works, electrical equipment installation, and earthing.
7.  **HT Cable Laying:** HT cables are laid from the ESU's point of supply to the consumer's substation, following safety norms and cable trench designs.
8.  **Inspection by ESU:** The ESU conducts a thorough inspection of the entire installation, including the substation, earthing, cabling, and protection schemes.
9.  **Pre-commissioning Tests:** The consumer performs pre-commissioning tests on all installed equipment, especially transformers and switchgear.
10. **Commissioning & Energization:** Upon satisfactory inspection and testing, the ESU approves the connection, and the supply is energized.
11. **Metering Installation:** The ESU installs metering equipment at the point of supply for billing purposes.

**(Refer to CO1: Understand Indian standards and code of practice for efficient and effective energy usage with various electrical system design components.)**

---

### **6. Design and Estimation of Material Quantity for Substations**

This involves calculating the quantities of all materials required for constructing and equipping a substation. This is a core skill for electrical system design and estimation.

#### **6.1 Design Aspects:**

*   **Load Calculation:** Determine the connected load and maximum demand as per IS 875.
*   **Voltage Drop Calculation:** Ensure voltage at the consumer end is within permissible limits (as per IS 732).
*   **Short-Circuit Level Calculation:** Determine the maximum fault current at various points in the system.
*   **Equipment Sizing:** Select transformers, switchgear, cables, conductors, etc., based on load, voltage, and fault levels.
*   **Layout Design:** Plan the physical arrangement of equipment for safety, accessibility, and efficiency.
*   **Earthing System Design:** Crucial for safety. Design a robust earthing system as per IS 3043.
*   **Protection Scheme Design:** Select appropriate relays, fuses, and circuit breakers and design their settings for selective protection.
*   **Cable Routing and Support Design:** Plan the path for cables and design supporting structures.
*   **Civil Works Design:** Foundation for equipment, plinths, trenches, control room building (if indoor).
*   **Lighting and Ventilation Design:** For indoor substations.

#### **6.2 Estimation of Material Quantities:**

This follows directly from the design. A systematic approach is essential.

**Categories of Materials:**

1.  **Civil Works:**
    *   Concrete (for foundations, plinths, trenches)
    *   Reinforcement steel
    *   Bricks, cement, sand
    *   Grating, chequered plates
    *   Gates, fencing
    *   Control room building materials (if applicable)

2.  **Electrical Equipment:**
    *   Transformers (Quantity, kVA rating, voltage)
    *   Circuit Breakers (Quantity, Voltage, Ampere, Breaking Capacity)
    *   Isolators (Quantity, Voltage, Ampere)
    *   Load Break Switches
    *   Fuses & Fuse Holders
    *   Lightning Arresters
    *   CTs & PTs
    *   Control Panels & Cubicles
    *   Relays & Meters
    *   Batteries & Battery Chargers

3.  **Conductors & Cabling:**
    *   HT Power Cables (Type, size, length)
    *   LT Power Cables (Type, size, length)
    *   Control Cables (Type, size, length)
    *   Busbars (Material, size, length)
    *   Aluminium/Copper Conductors (for overhead lines, if applicable)
    *   Crimping Lugs & Connectors

4.  **Earthing Materials:**
    *   GI Pipes (for electrodes)
    *   Copper Rods/Strips
    *   Earthing Plates
    *   Bonds & Connectors
    *   Charcoal, Salt
    *   GI Wire/Strips
    *   Earth Pits (Number, dimensions)

5.  **Support Structures & Hardware:**
    *   Gantries & Structures (Steel/Concrete)
    *   Insulators (Pin, Shackle, Disc, Post)
    *   Stay Wires & Turnbuckles
    *   Cable Trays & Ladders
    *   Glands, Cleats, Clamps, Brackets
    *   Hardware (Nuts, Bolts, Washers)

6.  **Miscellaneous:**
    *   Paint
    *   Fire Extinguishers
    *   Warning Signs

#### **6.3 Estimation Procedure:**

*   **Bill of Materials (BOM):** Create a detailed list of all items required.
*   **Quantity Take-off:** Systematically measure and count each item from the design drawings.
*   **Rate Analysis:** Determine the unit cost of each material (from manufacturer catalogs, supplier quotations, market rates).
*   **Cost Calculation:** Multiply the quantity of each item by its unit rate to get the material cost.
*   **Contingencies:** Add a percentage for unforeseen materials or wastage.
*   **Overheads & Profit:** Add these as per project requirements.

**(Refer to: Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya; Electrical estimating and costing by S. Singh, and R. D. Singh; A Course in Electrical Installation Estimating and Costing. by J. B. Gupta)**
**(Aligns with CO3: Design electrical installation for industrial consumers and high rise buildings.)**

---

### **7. Pre-commissioning Tests for Transformers**

Before energizing a new transformer or a transformer after maintenance, a series of tests are performed to ensure its health and proper functioning. These tests verify that the transformer meets the specified standards and will operate safely and reliably.

#### **7.1 Key Pre-commissioning Tests:**

1.  **Visual Inspection:**
    *   Check for any physical damage during transit or installation.
    *   Verify correct oil level, presence of oil leaks.
    *   Ensure all bushings, radiators, fans, and pumps are properly installed.
    *   Check cleanliness of insulators.
    *   Verify correct connections as per wiring diagrams.
    *   Ensure safety warnings and nameplates are in place and legible.

2.  **Insulation Resistance Test (Megger Test):**
    *   **Purpose:** To measure the resistance of the insulation between windings and between windings and the tank. It indicates the overall dryness and integrity of the insulation.
    *   **Procedure:** Apply a DC voltage using a megger and measure the resistance. Tests are performed between:
        *   Primary winding and Earth
        *   Secondary winding and Earth
        *   Primary and Secondary windings together with Earth
    *   **Expected Results:** High resistance values (in Megaohms). Values are compared with factory test values or standard recommendations, adjusted for temperature. (Refer to IS 2026)

3.  **Turns Ratio Test:**
    *   **Purpose:** To verify that the actual turns ratio of the transformer windings is as per the specified tapping.
    *   **Procedure:** Apply a low AC voltage to one winding and measure the induced voltage in the other winding. The ratio of voltages should match the ratio of turns. This is done for all tap positions.
    *   **Expected Results:** The measured voltage ratio should be within ±0.5% of the calculated turns ratio.

4.  **Polarity Test:**
    *   **Purpose:** To confirm the relative polarity of the primary and secondary windings. Crucial for parallel operation and avoiding incorrect connections.
    *   **Procedure:** Apply a DC voltage momentarily to the primary. Connect a DC voltmeter across appropriate terminals of primary and secondary. The voltmeter reading will indicate polarity (e.g., a positive reading if terminals are subtractive polarity). For AC, apply a suitable AC voltage and check connections with a Voltmeter across H1 & X1 and H1 & X2.
    *   **Expected Results:** Correct polarity indication as per standard conventions (e.g., additive or subtractive).

5.  **Open Circuit Test (No-Load Test):**
    *   **Purpose:** To determine the core losses (iron losses) and excitation current of the transformer.
    *   **Procedure:** The secondary winding is kept open, and rated voltage is applied to the primary. Voltage, current, and power are measured.
    *   **Expected Results:** Low input power (mainly core loss) and low excitation current.

6.  **Short Circuit Test:**
    *   **Purpose:** To determine the copper losses (load losses) and the equivalent impedance of the transformer.
    *   **Procedure:** The secondary winding is short-circuited, and a reduced voltage is applied to the primary to circulate rated current. Voltage, current, and power are measured.
    *   **Expected Results:** Copper losses at rated load and impedance voltage.

7.  **Winding Resistance Measurement:**
    *   **Purpose:** To measure the DC resistance of the primary and secondary windings. This helps detect poor connections or open circuits within the windings.
    *   **Procedure:** Measured using a micro-ohmmeter or Kelvin bridge.
    *   **Expected Results:** Resistance values should be low and consistent with the transformer's design and temperature.

8.  **Vector Group Test:**
    *   **Purpose:** To verify the phase displacement between the primary and secondary voltages, as indicated by the vector group designation (e.g., Dyn11).
    *   **Procedure:** Measured by applying voltage and checking the phase relationship between windings using a phase meter or by voltage measurements.

9.  **Dielectric Strength of Transformer Oil:**
    *   **Purpose:** To ensure the oil can withstand the electrical stresses it will encounter.
    *   **Procedure:** Oil samples are taken and tested in a specialized oil testing kit to determine the breakdown voltage.
    *   **Expected Results:** The breakdown voltage of the oil must be above the specified minimum value (typically 30 kV/2.5 mm gap as per IS 335).

10. **Buchholz Relay Test (if applicable):**
    *   **Purpose:** To check the operation of the Buchholz relay (a gas-actuated relay for protection against internal faults).
    *   **Procedure:** Simulate a fault condition to generate gas and check if the relay operates.

**(Refer to IS 2026, IS 335)**
**(Aligns with CO4: Analyse electrical system conditioning equipment and power backups. CO5: Design various earthing methods and protection.)**

---

### **Important Points to Remember:**

*   **Safety First:** Always prioritize safety during design, installation, and testing. Follow all safety codes and procedures.
*   **Code Compliance:** Strictly adhere to Indian Standards (IS codes) and the National Electrical Code (NEC) for all aspects of design and installation.
*   **Coordination:** Effective protection coordination is vital to prevent cascading failures.
*   **Future Growth:** Design with a margin for future load increases.
*   **Quality of Materials:** Use high-quality materials from reputable manufacturers.
*   **Thorough Testing:** Pre-commissioning tests are crucial for ensuring the reliability and safety of the installation.
*   **Documentation:** Maintain comprehensive records of designs, calculations, material specifications, and test reports.

---

### **Practice Questions:**

**Q1. (CO1, K2) Which Indian Standard specifies the requirements for Power Transformers?**
    a) IS 732
    b) IS 3043
    c) IS 2026
    d) IS 875

**Answer:** c) IS 2026

**Q2. (CO5, K3) For a substation's earthing system, which of the following is a critical Indian Standard?**
    a) IS 335
    b) IS 13118
    c) IS 3043
    d) National Electrical Code

**Answer:** c) IS 3043

**Q3. (CO3, K3) A client requires an HT connection for a new factory. List the major steps involved in the procedure for obtaining this connection from the Electricity Supply Utility.**

**Answer:**
1.  Application Submission
2.  Load Assessment & Sanction
3.  Deposit & Agreement
4.  Substation Design & Approval
5.  Substation Construction
6.  HT Cable Laying
7.  ESU Inspection
8.  Pre-commissioning Tests
9.  Commissioning & Energization
10. Metering Installation

**Q4. (CO4, K4) Explain the purpose of the Short Circuit Test performed on a transformer.**

**Answer:** The Short Circuit Test is performed to determine the copper losses (load losses) and the equivalent impedance of the transformer. This is achieved by short-circuiting the secondary winding and applying a reduced voltage to the primary to circulate rated current. The power input during this test represents the copper losses at rated load.

**Q5. (CO3, K3) You are designing a distribution substation for a commercial complex. What are the key factors you would consider when selecting a transformer?**

**Answer:**
*   **Power Rating (kVA):** Based on connected load and future growth.
*   **System Voltage:** Primary and secondary voltage ratings.
*   **Efficiency:** To minimize operational costs.
*   **Cooling Method:** ONAN, ONAF, etc., based on rating and environment.
*   **Impedance:** For fault current management and voltage regulation.
*   **Environmental Conditions:** Ambient temperature, altitude.
*   **Standards Compliance:** IS 2026, IS 1180.
*   **Cost:** Initial and operational.

**Q6. (CO1, K2) Which type of switchgear is preferred for high voltage applications due to its excellent dielectric and arc quenching properties?**
    a) Air Break Circuit Breaker
    b) Vacuum Circuit Breaker
    c) SF6 Circuit Breaker
    d) Oil Circuit Breaker

**Answer:** c) SF6 Circuit Breaker

**Q7. (CO3, K3) Briefly describe the Insulation Resistance Test and its significance during transformer pre-commissioning.**

**Answer:** The Insulation Resistance Test (Megger Test) measures the resistance of the insulation between windings and the tank using a DC voltage. It is significant because it indicates the overall dryness and integrity of the insulation. Low resistance values suggest moisture ingress or insulation breakdown, which could lead to a fault. The readings are compared against standards or factory values, adjusted for temperature.

---
This concludes the study notes for Module 3, Topic: Indoor and Outdoor Substations. Remember to refer to the specified textbooks and codes for detailed information and practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
