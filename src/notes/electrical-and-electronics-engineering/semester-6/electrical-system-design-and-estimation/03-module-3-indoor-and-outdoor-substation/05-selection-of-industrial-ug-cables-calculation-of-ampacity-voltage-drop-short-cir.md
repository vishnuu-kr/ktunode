---
title: "Selection of industrial UG cables - Calculation of ampacity, voltage drop, short circuit withstand capacity"
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 3: Indoor and Outdoor substation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36552"
status: "completed"
scrapedAt: "2026-05-23T16:27:18.655Z"
---
# Electrical System Design and Estimation - Module 3: Indoor and Outdoor Substation

## Topic: Selection of Industrial UG Cables - Calculation of Ampacity, Voltage Drop, Short Circuit Withstand Capacity

This module focuses on the practical aspects of selecting underground (UG) cables for industrial applications, ensuring safe and efficient power distribution. We will delve into the critical parameters of ampacity, voltage drop, and short-circuit withstand capacity, drawing upon relevant Indian Standards (IS Codes) and established engineering principles.

---

### Learning Outcomes Covered:

*   **Understanding of Indian Standards and Codes:** This topic directly relates to CO1, as understanding IS codes for cable selection is crucial for efficient energy usage.
*   **Design of Industrial Electrical Installations:** This topic is fundamental to CO3, as proper cable selection is a cornerstone of designing industrial electrical systems.

---

### Key Concepts and Definitions:

*   **Underground (UG) Cables:** Cables designed to be laid directly underground or in ducts for power distribution. They are typically insulated and armored for protection against mechanical damage and environmental factors.
*   **Ampacity:** The maximum current a cable can carry continuously without exceeding its temperature rating. Exceeding ampacity leads to overheating, insulation degradation, and potential failure.
*   **Voltage Drop:** The reduction in voltage along the length of a cable due to its impedance (resistance and reactance). Excessive voltage drop can affect the performance of connected equipment.
*   **Short Circuit Withstand Capacity:** The ability of a cable to withstand the thermal and mechanical stresses caused by a short-circuit fault for a specified duration without permanent damage.

---

### 1. Selection of Industrial UG Cables

The selection of industrial UG cables involves a systematic approach to ensure reliability, safety, and economic viability. Key factors to consider include:

*   **Voltage Level:** The operating voltage of the system dictates the insulation level and type of cable required.
*   **Current Carrying Capacity (Ampacity):** The cable must be able to carry the expected load current safely.
*   **Voltage Drop:** The voltage drop must be within acceptable limits as per standards and equipment requirements.
*   **Short Circuit Rating:** The cable must withstand potential short-circuit currents.
*   **Environmental Conditions:** Soil resistivity, ambient temperature, depth of laying, grouping of cables, and presence of corrosive substances influence cable derating.
*   **Mechanical Protection:** The need for armor and conduit depends on the installation method and risk of damage.
*   **Cost:** Balancing performance and reliability with the initial investment.

---

### 2. Calculation of Ampacity

Ampacity is the most crucial factor in cable selection. It is determined by the maximum permissible conductor temperature and the thermal resistance of the cable and its surroundings.

**Sources for Ampacity Data:**

*   **IS 3961 (Part 1 to 5):** This is the primary Indian Standard for PVC and XLPE insulated cables. It provides tables for current ratings under various installation conditions.
*   **IS 13703:** Deals with current ratings for butyl rubber and ethylene propylene rubber insulated cables.
*   **National Electrical Code (NEC) / IS 732:** While not directly for UG cable ampacity, general principles of conductor sizing apply.
*   **Manufacturer's Data Sheets:** Cable manufacturers often provide detailed ampacity tables and derating factors.

**Factors Affecting Ampacity:**

Ampacity is not a fixed value but depends on several derating factors:

*   **Ambient Temperature:** Higher ambient temperatures reduce ampacity.
*   **Grouping of Cables:** Cables laid close together heat each other, reducing their individual ampacity.
*   **Depth of Laying:** Cables laid deeper are subject to higher soil temperatures, reducing ampacity.
*   **Soil Resistivity:** High soil resistivity impedes heat dissipation, reducing ampacity.
*   **Installation Method:** Direct burial, in ducts, or on trays have different thermal resistances.
*   **Load Factor:** For loads that are not continuous, higher current can be carried for shorter durations.

**Calculation of Permissible Current:**

The permissible current ($I_{actual}$) for a cable under specific conditions is calculated using the following formula:

$I_{actual} = I_{rated} \times K_1 \times K_2 \times K_3 \times K_4 \times K_5 \times ...$

Where:
*   $I_{rated}$ = Rated current from IS tables for a reference condition (e.g., 30°C ambient, single cable buried at specified depth).
*   $K_1$ = Ambient temperature correction factor.
*   $K_2$ = Grouping correction factor.
*   $K_3$ = Depth of laying correction factor.
*   $K_4$ = Soil resistivity correction factor.
*   $K_5$ = Other factors (e.g., loading cycle, installation method).

**Example:**

Let's assume a single-core XLPE insulated copper cable with a rated ampacity of 150 A at 30°C ambient, laid directly underground at a depth of 0.8 meters. The required load current is 120 A.

We need to apply derating factors:
*   Assume ambient temperature is 40°C, and the correction factor ($K_1$) from IS tables is 0.88.
*   Assume the cable is laid with another identical cable, and the grouping factor ($K_2$) is 0.90.
*   Assume the cable is laid at a depth of 1 meter, and the depth correction factor ($K_3$) is 0.95.
*   Assume soil resistivity is high, and the resistivity factor ($K_4$) is 0.92.

Calculated Ampacity = $150 \text{ A} \times 0.88 \times 0.90 \times 0.95 \times 0.92 \approx 105.7$ A

Since the calculated ampacity (105.7 A) is less than the required load current (120 A), a cable with a higher rated ampacity would be required. We would select a cable with a rated ampacity such that its derated value is at least 120 A.

**Key Point:** Always refer to the latest IS standards and manufacturer data for accurate derating factors.

---

### 3. Calculation of Voltage Drop

Voltage drop in a cable is caused by the impedance of the conductor. It is crucial to limit voltage drop to ensure proper operation of electrical equipment.

**Formula for Voltage Drop:**

For single-phase AC circuits:
$V_d = 2 \times I \times (R \cos\phi + X_L \sin\phi) \times L$

For three-phase AC circuits:
$V_d = \sqrt{3} \times I \times (R \cos\phi + X_L \sin\phi) \times L$

Where:
*   $V_d$ = Voltage drop (in Volts)
*   $I$ = Load current (in Amperes)
*   $R$ = AC resistance per unit length of the conductor (in $\Omega/\text{km}$ or $\Omega/\text{m}$)
*   $X_L$ = Reactance per unit length of the conductor (in $\Omega/\text{km}$ or $\Omega/\text{m}$)
*   $\cos\phi$ = Power factor of the load
*   $\sin\phi$ = $\sqrt{1 - \cos^2\phi}$
*   $L$ = Length of the cable (in km or m)

**Acceptable Voltage Drop Limits:**

As per IS 732 and other relevant codes (e.g., National Building Code of India, 2016):
*   For Lighting circuits: 2.5% of the declared voltage at the point of commencement of supply.
*   For Power circuits: 5% of the declared voltage at the point of commencement of supply.

**Key Points:**

*   The resistance and reactance values for different cable sizes and types are available in IS 3961 and manufacturer data.
*   The conductor material (copper or aluminum) significantly affects resistance.
*   The skin effect and proximity effect increase AC resistance compared to DC resistance, especially for larger conductors and higher frequencies.
*   Power factor plays a significant role; lower power factors result in higher voltage drop for the same current and resistance.

**Example:**

Consider a 3-phase industrial load of 100 A at a power factor of 0.8 lagging, supplied by a 415 V system. The cable is 200 meters long. Let's assume a cable size with AC resistance ($R$) = 0.1 $\Omega/\text{km}$ and reactance ($X_L$) = 0.08 $\Omega/\text{km}$.

$\cos\phi = 0.8$
$\sin\phi = \sqrt{1 - 0.8^2} = 0.6$
$L = 0.2$ km

$V_d = \sqrt{3} \times 100 \text{ A} \times (0.1 \Omega/\text{km} \times 0.8 + 0.08 \Omega/\text{km} \times 0.6) \times 0.2 \text{ km}$
$V_d = 1.732 \times 100 \times (0.08 + 0.048) \times 0.2$
$V_d = 1.732 \times 100 \times 0.128 \times 0.2$
$V_d \approx 4.43$ Volts

Percentage Voltage Drop = $(V_d / \text{System Voltage}) \times 100$
Percentage Voltage Drop = $(4.43 \text{ V} / 415 \text{ V}) \times 100 \approx 1.07\%$

This voltage drop (1.07%) is well within the acceptable limit of 5% for power circuits. If the voltage drop were higher, a larger cable size with lower resistance and reactance, or a more robust power factor correction, might be needed.

---

### 4. Short Circuit Withstand Capacity

Under short circuit conditions, very high currents flow through the cable, generating significant heat due to $I^2R$ losses. The cable must be able to withstand these thermal and mechanical stresses without failing.

**Types of Short Circuits:**

*   **Three-phase faults:** Typically the highest fault current.
*   **Line-to-line faults:** Lower than three-phase faults.
*   **Line-to-ground faults:** Magnitude depends on system earthing.

**Calculation of Short Circuit Current:**

Short circuit currents are typically calculated using impedance methods (per unit system) or by using fault current limiters provided by the utility or protective device manufacturers.

**Adiabatic Equation for Thermal Withstand Capacity:**

The most common method to assess the short circuit thermal withstand capacity is using the Adiabatic Equation:

$I_{sc}^2 \times t = k^2 \times S^2 \times \ln\left(\frac{T_{final} + 234.5}{T_{initial} + 234.5}\right)$

Where:
*   $I_{sc}$ = Short circuit current (in Amperes)
*   $t$ = Duration of the fault (in seconds)
*   $S$ = Conductor cross-sectional area (in mm²)
*   $k$ = Material constant related to the conductor (e.g., for copper, $k \approx 235$ for XLPE insulation; values vary based on insulation material)
*   $T_{final}$ = Maximum permissible conductor temperature at the end of the fault (e.g., 250°C for XLPE, 160°C for PVC)
*   $T_{initial}$ = Initial conductor temperature before the fault (usually taken as normal operating temperature, e.g., 90°C for XLPE).
*   $\ln$ = Natural logarithm

**Simplified Adiabatic Equation:**

For common industrial cable types and fault durations, the equation can be simplified:

$I_{sc} \times \sqrt{t} = k' \times S$

Where $k'$ is a factor that incorporates the material properties and temperature limits. For example, IS 732 and other standards provide tables or simplified formulas. For XLPE insulated copper cables, a typical $k'$ value for a fault duration of 1 second can be in the range of 115-145 A$\sqrt{s}$/mm².

**Procedure for Selection:**

1.  **Determine the prospective short circuit current ($I_{sc}$) at the point of installation.** This is usually the highest fault current that can flow.
2.  **Determine the fault clearing time ($t$).** This is the time taken by the protective devices (circuit breakers, fuses) to interrupt the fault. This is critical.
3.  **Select a cable with a conductor cross-sectional area ($S$) that satisfies the Adiabatic Equation for the calculated $I_{sc}$ and $t$.**

**Example:**

A prospective short circuit current of 10 kA flows for 0.5 seconds. We need to select a copper cable with XLPE insulation that can withstand this. Let's use the simplified formula $I_{sc} \times \sqrt{t} = k' \times S$, with $k' = 120$ A$\sqrt{s}$/mm² for a 1-second fault.

$10000 \text{ A} \times \sqrt{0.5 \text{ s}} = 120 \text{ A}\sqrt{s}/\text{mm}^2 \times S$
$10000 \times 0.707 = 120 \times S$
$7070 = 120 \times S$
$S = 7070 / 120 \approx 58.9$ mm²

Therefore, a cable with a conductor cross-sectional area of at least 70 mm² (standard available size) would be required.

**Key Points:**

*   **Fault clearing time is paramount.** Faster protective devices significantly reduce the required conductor size for short circuit withstand.
*   The material of the conductor (copper vs. aluminum) and insulation type (PVC vs. XLPE) significantly impact the $k$ or $k'$ values.
*   Manufacturer's data for short circuit rating should be consulted for specific cable constructions.
*   Mechanical strength of the cable also plays a role in resisting the electrodynamic forces during short circuits, especially for larger cables.

---

### 5. Practical Considerations and Industrial Practices

*   **Standard Cable Sizes:** Cables are available in standard cross-sectional areas (e.g., 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500 mm²). The chosen size must be a standard available size.
*   **Future Load Growth:** It is prudent to select cables with a slightly higher capacity than the immediate requirement to accommodate future load increases.
*   **Cable Laying Practices:** Adhering to IS 1255 for cable laying in the ground and IS 3961 for derating factors is essential.
*   **Joints and Terminations:** Proper installation of cable joints and terminations is critical to avoid premature failure due to poor workmanship or insulation breakdown.
*   **Protection:** Adequate overcurrent and short circuit protection (fuses, circuit breakers) must be coordinated with the cable's characteristics.

---

### Practice Questions/Exercises:

1.  A single-phase industrial load of 80 A at a power factor of 0.85 lagging is to be supplied from a 230 V source over a distance of 150 meters. The available cable has AC resistance of 0.2 $\Omega/\text{km}$ and reactance of 0.1 $\Omega/\text{km}$. Calculate the voltage drop and determine if it is within the acceptable limit of 2.5% for lighting circuits or 5% for power circuits.
    **Answer:**
    *   $I = 80$ A, $\cos\phi = 0.85$, $\sin\phi = \sqrt{1 - 0.85^2} \approx 0.527$
    *   $L = 0.15$ km
    *   $V_d = 2 \times 80 \times (0.2 \times 0.85 + 0.1 \times 0.527) \times 0.15$
    *   $V_d = 160 \times (0.17 + 0.0527) \times 0.15$
    *   $V_d = 160 \times 0.2227 \times 0.15 \approx 5.34$ Volts
    *   Percentage Voltage Drop = $(5.34 / 230) \times 100 \approx 2.32\%$
    *   **Conclusion:** The voltage drop is within the acceptable limit of 5% for power circuits (and also within 2.5% if it were a lighting circuit, though the load suggests it's a power circuit).

2.  A 3-phase feeder needs to carry a continuous current of 250 A. The standard installation conditions in IS 3961 for a specific cable size provide a rated ampacity of 300 A. However, due to laying 4 cables together, the grouping factor is 0.85. The ambient ground temperature is expected to be 35°C, for which the ambient temperature correction factor is 0.95. If the required load is 250 A, what is the minimum rated ampacity of the cable required from IS tables?
    **Answer:**
    *   Required actual current = 250 A
    *   $I_{actual} = I_{rated} \times K_{group} \times K_{ambient}$
    *   $250 \text{ A} = I_{rated} \times 0.85 \times 0.95$
    *   $250 \text{ A} = I_{rated} \times 0.8075$
    *   $I_{rated} = 250 \text{ A} / 0.8075 \approx 310$ A
    *   **Conclusion:** The cable must have a rated ampacity of at least 310 A from IS tables.

3.  A short circuit fault occurs in an industrial plant, and the prospective fault current is 15 kA. The fault is cleared by a circuit breaker in 0.3 seconds. If you are using a copper conductor with XLPE insulation, and the simplified Adiabatic Equation factor ($k'$) is 125 A$\sqrt{s}$/mm², what is the minimum cross-sectional area of the conductor required to withstand this fault?
    **Answer:**
    *   $I_{sc} = 15000$ A
    *   $t = 0.3$ s
    *   $k' = 125$ A$\sqrt{s}$/mm²
    *   $I_{sc} \times \sqrt{t} = k' \times S$
    *   $15000 \text{ A} \times \sqrt{0.3 \text{ s}} = 125 \text{ A}\sqrt{s}/\text{mm}^2 \times S$
    *   $15000 \times 0.5477 \approx 125 \times S$
    *   $8215.5 \approx 125 \times S$
    *   $S = 8215.5 / 125 \approx 65.7$ mm²
    *   **Conclusion:** A conductor with a cross-sectional area of at least 70 mm² is required.

---

### Important Points to Remember:

*   **IS 3961:** The primary standard for UG cable ampacity and derating factors in India.
*   **Voltage Drop:** Crucial for equipment performance; adhere to the percentage limits specified in IS 732 and NBC 2016.
*   **Short Circuit Withstand:** The Adiabatic Equation is key; fault clearing time and conductor cross-section are inversely related.
*   **Derating Factors:** Always apply relevant derating factors for accurate ampacity calculations.
*   **Standard Sizes:** Select cables from available standard sizes.
*   **Future Growth:** Consider future load increases during initial selection.
*   **Coordination:** Ensure protective devices are coordinated with cable ratings.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Bureau of Indian Standards.** (n.d.). *National Electrical Code of India*.
*   **Bureau of Indian Standards.** (n.d.). *IS 3961 (Part 1-5): PVC/XLPE Insulated Cables*.
*   **Bureau of Indian Standards.** (n.d.). *IS 732: Code of practice for electrical wiring installations*.
*   **Bureau of Indian Standards.** (n.d.). *National Building Code of INDIA 2016*.
*   Giridharan, M. K. (20XX). *Electrical Systems Design*. IK International Publishers.
*   Raina, K. B., & Bhattacharya, S. K. (20XX). *Electrical Design Estimating Costing*. NEW AGE.
*   Joshi, H. (20XX). *Residential Commercial and Industrial Systems*. McGraw Hill Education.

---

This concludes Module 3, Topic: Selection of Industrial UG Cables. Understanding these calculations and factors is vital for designing safe and efficient electrical systems.