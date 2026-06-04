---
title: "Salinity and drainage - cause of salinity, salt balance equation, leaching efficiency, salt equilibrium equation and leaching requirement – salt storage equation – expressing equations in electrical conductivity terms-Design of a drainage system for an irrigated area based on crop water requirement and leaching requirement- Dynamic equilibrium concept."
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 4: Layout of open drainage systems : types"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811116"
status: "completed"
scrapedAt: "2026-05-20T18:55:12.769Z"
---
# Irrigation and Drainage Engineering: Module 4 - Layout of Open Drainage Systems: Types

## Topic: Salinity and Drainage

This module delves into the critical relationship between irrigation, drainage, and soil salinity. We will explore the causes of salinity, the fundamental principles governing salt movement and accumulation, and how these principles are applied to the design of effective drainage systems.

---

### 1. Salinity and Drainage

#### 1.1. Cause of Salinity

Soil salinity refers to the accumulation of soluble salts in the soil to levels that are detrimental to plant growth. The primary causes of salinity in irrigated areas are:

*   **Irrigation Water Quality:**
    *   **Dissolved Salts:** All irrigation water contains dissolved salts. If this water evaporates or is transpired by plants, the salts are left behind in the soil.
    *   **High Salt Concentration:** Using irrigation water with a high electrical conductivity (EC) directly contributes to salt accumulation.
*   **Poor Drainage:**
    *   **Waterlogging:** When irrigation water infiltrates faster than it can be removed, the water table rises. This saturates the soil profile, restricting aeration and hindering root growth.
    *   **Capillary Rise:** In waterlogged soils, capillary action draws saline groundwater up towards the root zone, leading to salt accumulation at the surface.
    *   **Lack of Leaching:** Inadequate drainage prevents the removal of accumulated salts from the root zone.
*   **Evaporation and Transpiration (ET):**
    *   **Evapotranspiration:** The combined process of evaporation from the soil surface and transpiration by plants removes water from the soil, leaving dissolved salts behind. In arid and semi-arid regions where ET rates are high, this is a major contributor to salinity.
*   **Natural Salt Deposits:**
    *   **Underlying Saline Formations:** Some areas have naturally occurring saline materials in their geological formations. Groundwater flowing through these formations can pick up salts.
*   **Seawater Intrusion:**
    *   **Coastal Areas:** In coastal irrigated regions, over-extraction of freshwater from aquifers can lead to the intrusion of saline seawater into the groundwater, contaminating irrigation sources.

**Key Concept:** Salinity arises from the imbalance between salt input (irrigation water, groundwater) and salt output (drainage, leaching).

---

#### 1.2. Salt Balance Equation

The salt balance equation describes the relationship between salt input, salt output, and the change in salt storage within a soil profile over a given period.

**General Form:**

```
Salt Storage = Salt Input - Salt Output
```

**For an irrigated area, this can be elaborated as:**

```
ΔS = (Q_irr * C_irr + Q_gw * C_gw + S_rain) - (Q_drain * C_drain + S_leached)
```

Where:

*   `ΔS`: Change in salt storage in the soil profile over a period (e.g., kg/ha).
*   `Q_irr`: Volume of irrigation water applied (e.g., m³/ha).
*   `C_irr`: Concentration of salts in irrigation water (e.g., kg/m³ or g/L).
*   `Q_gw`: Volume of groundwater flow into the root zone (e.g., m³/ha).
*   `C_gw`: Concentration of salts in groundwater (e.g., kg/m³ or g/L).
*   `S_rain`: Salt content in rainfall (often negligible in arid regions).
*   `Q_drain`: Volume of drainage water leaving the root zone (e.g., m³/ha).
*   `C_drain`: Concentration of salts in drainage water (e.g., kg/m³ or g/L).
*   `S_leached`: Salt leached out of the root zone by drainage water (e.g., kg/ha).

**Simplified Salt Balance for Irrigated Areas (often assuming no significant rainfall salt input or groundwater inflow):**

```
Change in Salt Storage = Salt Input from Irrigation - Salt Output by Drainage
```

```
ΔS = (Q_irr * C_irr) - (Q_drain * C_drain)
```

**If the system is in equilibrium, `ΔS = 0`:**

```
Salt Input = Salt Output
Q_irr * C_irr = Q_drain * C_drain
```

**Important Note:** In many practical scenarios, it's easier to work with concentrations expressed as Electrical Conductivity (EC).

---

#### 1.3. Leaching Efficiency

Leaching efficiency (LE) is a measure of how effectively salts are removed from the soil profile by the applied leaching water and drainage. It quantifies the reduction in salt concentration achieved by the leaching process.

**Definition:** Leaching efficiency is the ratio of the salt removed from the soil to the total salt present in the soil before leaching.

**Formulations:**

**1. Based on Salt Concentration:**

```
LE = (C_initial - C_final) / C_initial
```

Where:
*   `C_initial`: Initial salt concentration in the soil water (e.g., dS/m or mmhos/cm).
*   `C_final`: Final salt concentration in the soil water after leaching (e.g., dS/m or mmhos/cm).

**2. Based on Salt Amount:**

```
LE = (Salt_initial - Salt_final) / Salt_initial
```

Where:
*   `Salt_initial`: Amount of salt in the soil before leaching (e.g., kg/ha).
*   `Salt_final`: Amount of salt in the soil after leaching (e.g., kg/ha).

**3. Relating Irrigation and Drainage Water:**

Leaching efficiency can also be related to the amount of irrigation and drainage water and their salt concentrations. If we consider the salt contained in the irrigation water and the salt carried away by the drainage water, the efficiency of salt removal can be assessed.

```
LE = (Salt carried by irrigation water - Salt carried by drainage water) / Salt carried by irrigation water
```

```
LE = (Q_irr * C_irr - Q_drain * C_drain) / (Q_irr * C_irr)
```

This simplifies to:

```
LE = 1 - (Q_drain * C_drain) / (Q_irr * C_irr)
```

**Example:** If the salt concentration in irrigation water is 1 dS/m and in drainage water it's 2 dS/m, and the volume of irrigation water is equal to the volume of drainage water, then LE = 1 - (1 * 2) / (1 * 1) = 1 - 2 = -1, indicating salt accumulation. This highlights that to achieve effective leaching, the drainage water EC must be lower than the irrigation water EC, or the volume of drainage water must be sufficient to remove the accumulated salts.

**Higher LE values indicate more effective salt removal.**

---

#### 1.4. Salt Equilibrium Equation

The salt equilibrium equation describes the steady-state condition where the salt content in the soil remains constant over time. This occurs when the salt input into the root zone equals the salt output from the root zone.

**Condition for Equilibrium:** `ΔS = 0`

From the salt balance equation:

```
Salt Input = Salt Output
```

```
Q_irr * C_irr + Q_gw * C_gw = Q_drain * C_drain
```

**Key Concept:** In a stable, irrigated, and drained system, the salts introduced by irrigation water and groundwater must be removed by drainage water for equilibrium to be maintained. If irrigation water quality is poor (high EC) and drainage is inadequate, equilibrium will not be achieved, leading to increasing salinity.

---

#### 1.5. Leaching Requirement (LR)

Leaching Requirement (LR) is the fraction of irrigation water that must be leached (removed by drainage) from the root zone to prevent salt accumulation to detrimental levels for a specific crop. It's a crucial design parameter for drainage systems.

**Definition:** LR is the ratio of the depth of drainage water to the depth of irrigation water, which is necessary to maintain a specific salt concentration in the soil solution within the root zone.

**The relationship is based on the following assumptions:**

1.  **Steady State:** Salt balance is maintained (`ΔS = 0`).
2.  **Plug Flow:** Water moves through the soil in a plug-like manner without mixing.
3.  **Instantaneous Drainage:** Water is removed as soon as it reaches the drainage system.
4.  **Salinity of Drainage Water:** The salinity of the drainage water is equal to the salinity of the soil solution at the bottom of the root zone.

**General Equation (based on steady state):**

```
Q_irr * C_irr = Q_drain * C_drain
```

Rearranging for the ratio of water volumes:

```
Q_drain / Q_irr = C_irr / C_drain
```

Leaching Requirement (LR) is defined as:

```
LR = Depth of Drainage Water / Depth of Irrigation Water
```

Assuming constant cross-sectional area, the ratio of depths is equal to the ratio of volumes:

```
LR = Q_drain / Q_irr
```

Therefore:

```
LR = C_irr / C_drain
```

**However, `C_drain` is the salinity at the bottom of the root zone. For crop tolerance, we need to consider the salinity tolerance of the crop.**

Let:

*   `ECe`: Electrical Conductivity of the saturation extract of the soil (dS/m), representing the average salinity in the root zone.
*   `ECiw`: Electrical Conductivity of irrigation water (dS/m).
*   `ECdw`: Electrical Conductivity of drainage water (dS/m).
*   `ECts`: Threshold EC for the crop (dS/m).
*   `Yp`: Yield potential of the crop.
*   `Kd`: Salt tolerance or reduction factor for the crop.

**A more practical formulation for LR considers crop tolerance:**

**U.S. Salinity Laboratory (USSL) Formula:**

The USSL developed a method to determine LR based on the salt tolerance of a specific crop and the desired level of salt accumulation. The equation relates the EC of the soil saturation extract (`ECe`) to the EC of irrigation water (`ECiw`) and the leaching fraction (`LF`):

```
ECe = ECiw * (1 + LF) / (1 - LF)
```

To calculate the Leaching Requirement (LR), we need to know the maximum acceptable `ECe` for a given crop at its full yield potential. Let this be `ECts`.

If we want to maintain `ECe <= ECts`, then:

```
ECts = ECiw * (1 + LR) / (1 - LR)
```

Where `LR = LF` (Leaching Fraction) in this context, representing the fraction of applied irrigation water that needs to be leached.

**Solving for LR:**

```
ECts * (1 - LR) = ECiw * (1 + LR)
ECts - ECts * LR = ECiw + ECiw * LR
ECts - ECiw = LR * (ECts + ECiw)
LR = (ECts - ECiw) / (ECts + ECiw)
```

**This formula assumes `ECts > ECiw`. If `ECiw` is very high, LR can be 0 or negative, meaning no leaching is required if the irrigation water is already too saline for the crop.**

**The LR is then used to determine the amount of water to leach:**

```
LR = Depth of Leached Water (or Drainage Water) / Depth of Applied Irrigation Water
```

**Example:**

A crop has a threshold ECe of 4 dS/m. The irrigation water has an ECiw of 1 dS/m. Calculate the Leaching Requirement (LR).

Using the formula:
`LR = (ECts - ECiw) / (ECts + ECiw)`
`LR = (4 - 1) / (4 + 1)`
`LR = 3 / 5`
`LR = 0.6`

This means that 60% of the applied irrigation water needs to be leached from the root zone to prevent salt accumulation beyond the tolerance limit of the crop.

**Practical Application:**
If the crop water requirement (IR) is 100 mm, then the total water to be applied (IT) would be:
`LR = Drainage Water / Irrigation Water`
`0.6 = (IT - IR) / IT`
`0.6 * IT = IT - IR`
`IR = IT - 0.6 * IT`
`IR = 0.4 * IT`
`IT = IR / 0.4`
`IT = 100 mm / 0.4`
`IT = 250 mm`

The amount of water to be leached is `IT - IR = 250 mm - 100 mm = 150 mm`.

**Important Point:** LR is a critical design parameter. It ensures that sufficient water is applied for leaching to maintain soil salinity below crop tolerance levels.

---

#### 1.6. Salt Storage Equation

The salt storage equation quantifies the amount of salt present in a given soil volume or mass. It's essential for understanding salt movement and determining the capacity of the soil to store salts.

**Forms of Salt Storage:**

1.  **Based on Volume:**
    `Salt Storage (kg/m³) = Bulk Density (kg/m³) * Volumetric Water Content (%) * Salt Concentration in Water (kg/m³)`
    Or, more commonly, relating to soil solution concentration:
    `Salt Storage (kg/m³_soil) = Soil Bulk Density (kg/m³_soil) * Salt Concentration in Soil Solution (kg/m³_water)`

2.  **Based on Mass:**
    `Salt Storage (kg/kg_soil) = Salt Concentration in Soil Solution (kg/kg_water) * Gravimetric Water Content (kg_water/kg_soil)`

3.  **More Practical Approach (using EC):**
    The total amount of salt in the root zone is often estimated by integrating the salt concentration over the depth of the root zone.

    ```
    Salt Storage (kg/ha) = ∫[0 to D] (Bulk Density * Porosity * EC_soil_solution * Conversion Factor) dz
    ```

    Where:
    *   `D`: Depth of the root zone.
    *   `EC_soil_solution`: Electrical conductivity of the soil solution (dS/m).
    *   `dz`: Differential depth.
    *   `Bulk Density`: Typically in g/cm³ or kg/m³.
    *   `Porosity`: Volume of pores per unit volume of soil.
    *   `Conversion Factor`: To convert EC to salt mass (e.g., ~10 to 20 kg/ha per cm depth per dS/m).

    A common simplification for calculation purposes uses average values:
    `Salt Storage (kg/ha) ≈ Bulk Density (g/cm³) * Depth (cm) * Porosity * EC_soil_solution (dS/m) * Conversion Factor`

**Example:**

Consider a soil with a bulk density of 1.4 g/cm³, porosity of 0.45, and the average EC of the soil solution in the root zone (0-30 cm) is 5 dS/m.

Using a conversion factor of 10 kg/ha/(cm depth * dS/m):

`Salt Storage (kg/ha) ≈ 1.4 g/cm³ * 30 cm * 0.45 * 5 dS/m * 10 kg/ha/(cm depth * dS/m)`
`Salt Storage (kg/ha) ≈ 1.4 * 30 * 0.45 * 5 * 10`
`Salt Storage (kg/ha) ≈ 945 kg/ha`

This represents the total salt stored in the top 30 cm of the soil profile.

---

#### 1.7. Expressing Equations in Electrical Conductivity (EC) Terms

Many irrigation and drainage equations are expressed using Electrical Conductivity (EC) because it's a direct, easily measurable parameter that correlates well with the total dissolved solids (TDS) in water and soil solutions.

*   **EC of Water (`ECiw`, `ECdw`):** Measured in deciSiemens per meter (dS/m) or millimhos per centimeter (mmhos/cm).
*   **EC of Soil Saturation Extract (`ECe`):** Measured in dS/m or mmhos/cm. It represents the conductivity of the solution when the soil is saturated.

**Key Relationships:**

*   **EC and Salt Concentration:** For typical irrigation waters and soil solutions, there's a linear relationship between EC and the concentration of dissolved salts (TDS).
    *   Roughly, `TDS (mg/L) ≈ 640 * EC (dS/m)` for NaCl solutions.
    *   More generally, `Salt Concentration (kg/m³) = EC (dS/m) * Conversion Factor`. The conversion factor varies depending on the type of salts but is often around 0.64 to 1.0 (for mass per unit volume, e.g., kg/m³).

**Transforming Equations:**

The salt balance, salt equilibrium, leaching efficiency, and leaching requirement equations can all be expressed using EC values.

*   **Salt Balance (using EC):**
    We can convert salt mass (`kg`) to salt concentration by dividing by the volume of water. This leads to expressions involving EC:
    `Q_irr (m³) * C_irr (kg/m³) = Q_drain (m³) * C_drain (kg/m³)`
    `Q_irr (m³) * (EC_irr * Conversion_Factor_irr) = Q_drain (m³) * (EC_drain * Conversion_Factor_drain)`
    If conversion factors are similar, then:
    `Q_irr * EC_irr ≈ Q_drain * EC_drain`

*   **Leaching Requirement (using EC):** As derived earlier:
    `LR = (ECts - ECiw) / (ECts + ECiw)`

*   **Salt Storage (using EC):** As shown in Section 1.6, EC is directly used to estimate salt storage.

**Why use EC?**

*   **Easy Measurement:** EC meters are readily available and simple to use.
*   **Good Correlation:** Directly relates to the total soluble salt content.
*   **Standardization:** Provides a common unit for comparing water and soil salinity.

---

#### 1.8. Design of a Drainage System for an Irrigated Area Based on Crop Water Requirement and Leaching Requirement

Designing a drainage system for salinity control involves ensuring that sufficient water is leached to maintain soil salinity below crop tolerance levels, while also meeting the crop's water needs.

**Steps:**

1.  **Determine Crop Water Requirement (ETc):**
    *   This is the depth of water needed by the crop for optimal growth, calculated using methods like Penman-Monteith.

2.  **Determine Irrigation Water Quality (`ECiw`):**
    *   Analyze the salinity of the source irrigation water.

3.  **Determine Crop Salinity Tolerance (`ECts`):**
    *   Identify the threshold ECe for the specific crop at its desired yield level. Refer to crop tolerance tables.

4.  **Calculate Leaching Requirement (LR):**
    *   Use the formula: `LR = (ECts - ECiw) / (ECts + ECiw)`
    *   *Important Consideration:* If `ECiw` is very high (e.g., greater than `ECts`), the formula might yield a negative LR. In such cases, special measures like using better quality water, improving drainage, or selecting more salt-tolerant crops are necessary. An LR of 0 means no leaching is needed.

5.  **Calculate Total Irrigation Water (`IT`):**
    *   The total water to be applied must satisfy both the crop water requirement and the leaching requirement.
    *   `LR = (IT - ETc) / IT`
    *   Rearranging for `IT`: `IT = ETc / (1 - LR)`

6.  **Determine Depth of Drainage Water (`Qd`):**
    *   `Qd = IT - ETc`
    *   `Qd = IT * LR`

7.  **Determine Depth of Drainage Water Required:**
    *   This calculated `Qd` is the amount of water that needs to be removed by the drainage system to achieve the desired leaching.

8.  **Drainage System Design:**
    *   **Drainage Coefficient:** The drainage system (e.g., open drains, tile drains) must be designed to remove this calculated `Qd` within a specified time. The drainage coefficient is the depth of water to be removed per unit time (e.g., mm/day).
    *   **Drain Spacing and Depth:** Based on soil hydraulic conductivity, drain depth, and the required drainage coefficient, the spacing and depth of the drains are determined using standard drainage design principles (e.g., steady-state flow equations like steady-state Dagan or Ernst equations).
    *   **Drainage Water Quality:** The drainage system must efficiently transport the leached water away from the irrigated area to prevent re-salinization of the land or downstream pollution.

**Example Scenario:**

*   **Crop:** Cotton
*   **ETc:** 120 mm per month
*   **`ECiw`:** 1.5 dS/m
*   **`ECts` for Cotton (at 90% yield):** 7.7 dS/m
*   **Soil Hydraulic Conductivity:** High

**Calculations:**

1.  **`LR` Calculation:**
    `LR = (7.7 - 1.5) / (7.7 + 1.5)`
    `LR = 6.2 / 9.2`
    `LR ≈ 0.67`

2.  **Total Irrigation Water (`IT`):**
    `IT = ETc / (1 - LR)`
    `IT = 120 mm / (1 - 0.67)`
    `IT = 120 mm / 0.33`
    `IT ≈ 364 mm` per month

3.  **Depth of Drainage Water (`Qd`):**
    `Qd = IT - ETc = 364 mm - 120 mm = 244 mm` per month
    Or, `Qd = IT * LR = 364 mm * 0.67 ≈ 244 mm` per month

**Design Implications:**

*   The irrigation schedule must deliver approximately 364 mm of water per month to the cotton crop to meet both its water needs and the leaching requirement.
*   The drainage system must be capable of removing approximately 244 mm of water per month from the area. This translates to a specific drainage coefficient (e.g., ~8 mm/day on average) that needs to be achievable by the drains.
*   The calculated `Qd` influences the required drain depth and spacing to ensure the water table remains below a critical depth to facilitate this outflow.

**Important Considerations for Design:**

*   **Irrigation Uniformity:** Poor irrigation uniformity means some areas receive less water and may not meet the LR, leading to localized salinity.
*   **Depth of Drainage:** Drains must be deep enough to intercept the saline water and allow for gravity flow.
*   **Drain Spacing:** Affects the water table drawdown and the rate of drainage. Wider spacing means a higher water table, potentially leading to waterlogging and capillary rise.
*   **System Maintenance:** Open drains require regular maintenance (e.g., desilting, clearing vegetation) to maintain their capacity.

---

#### 1.9. Salt Storage Equation (Revisited in Context of Design)

The salt storage equation is used to assess the existing salt load in the soil and how it changes with irrigation and drainage.

*   **Initial Assessment:** Before designing a drainage system, the existing salt content in the soil profile can be measured or estimated using the salt storage equation to understand the magnitude of the salinity problem.
*   **Monitoring:** After a drainage system is installed and operational, the salt storage equation can be used to monitor the effectiveness of the system by periodically measuring soil salinity and calculating the change in salt storage.
*   **Predicting Salt Movement:** It helps in predicting how much salt will be leached from the root zone over time and where it will be stored if drainage is insufficient.

**Example Application in Design:**

If a soil has a high salt storage of, say, 2000 kg/ha in the top meter, and the irrigation water adds 500 kg/ha/year, while the drainage system removes 700 kg/ha/year, then the net salt storage is -200 kg/ha/year, indicating a gradual decrease in soil salinity. This provides a quantitative measure of the system's performance.

---

#### 1.10. Dynamic Equilibrium Concept

The dynamic equilibrium concept in salinity management recognizes that in many irrigated agricultural systems, a perfect, static salt balance is rarely achieved. Instead, the system fluctuates around an average state of salt balance.

*   **Fluctuations:** Salinity levels can change seasonally due to variations in:
    *   **Irrigation amounts:** Higher irrigation in hotter months for ETc.
    *   **Water quality:** Seasonal changes in river water salinity.
    *   **Drainage rates:** Higher rainfall might increase drainage, or reduced rainfall might decrease it.
    *   **Evaporation:** Higher evaporation in summer concentrates salts.

*   **Adaptation:** Plants and soil processes adapt to these fluctuations. Crops might experience periods of slightly higher salinity stress, and their growth might be adjusted accordingly. The soil profile acts as a buffer, storing and releasing salts.

*   **Goal of Drainage:** The goal of a drainage system is not necessarily to achieve zero salt in the soil but to maintain soil salinity within acceptable limits for the crop on average, allowing for short-term fluctuations without causing significant yield loss. This means keeping the root zone salinity below the crop tolerance threshold for most of the growing season.

*   **Dynamic Balance:** The system is in "dynamic equilibrium" when, over longer periods (e.g., annually), the total salt added is roughly equal to the total salt removed, and the average salinity in the root zone remains stable or decreases.

**Implications for Design:**

*   **LR as an Average:** The calculated Leaching Requirement represents an average condition. Irrigation and drainage operations should aim to meet this average.
*   **Flexibility:** Drainage systems designed for dynamic equilibrium should have sufficient capacity to handle peak salt loads or periods of reduced drainage.
*   **Monitoring:** Continuous monitoring of soil salinity, water table depth, and drainage water quality is essential to ensure the system remains in dynamic equilibrium and to make adjustments if necessary.

---

### Practice Questions and Answers

**Question 1:**
A farmer is irrigating a cotton crop in an arid region. The irrigation water has an EC of 1.2 dS/m. The crop's threshold ECe for maximum yield is 7.0 dS/m. Calculate the Leaching Requirement (LR) for this crop. If the crop's water requirement (ETc) is 150 mm per month, what is the total irrigation water (IT) that needs to be applied to meet both the crop water needs and the leaching requirement?

**Answer 1:**
*   **LR Calculation:**
    `LR = (ECts - ECiw) / (ECts + ECiw)`
    `LR = (7.0 - 1.2) / (7.0 + 1.2)`
    `LR = 5.8 / 8.2`
    `LR ≈ 0.71`

*   **Total Irrigation Water (IT) Calculation:**
    `IT = ETc / (1 - LR)`
    `IT = 150 mm / (1 - 0.71)`
    `IT = 150 mm / 0.29`
    `IT ≈ 517 mm` per month

**Question 2:**
Explain the concept of salt balance in irrigated agriculture and provide a simplified salt balance equation. What happens to the soil salinity if salt input consistently exceeds salt output?

**Answer 2:**
*   **Salt Balance Concept:** Salt balance refers to the balance between the amount of salt entering a soil profile and the amount of salt leaving it over a period. In irrigated agriculture, salts are introduced primarily through irrigation water, and removed through drainage.
*   **Simplified Salt Balance Equation:**
    `Change in Salt Storage = Salt Input from Irrigation - Salt Output by Drainage`
    `ΔS = (Q_irr * C_irr) - (Q_drain * C_drain)`
*   **Effect of Imbalance:** If salt input (e.g., from irrigation water) consistently exceeds salt output (e.g., by drainage), the `ΔS` will be positive, leading to an accumulation of salts in the soil profile, thus increasing soil salinity.

**Question 3:**
What is leaching efficiency? If the initial EC of the soil solution is 6 dS/m and after leaching, the final EC is 3 dS/m, what is the leaching efficiency?

**Answer 3:**
*   **Leaching Efficiency Definition:** Leaching efficiency (LE) is a measure of how effectively salts are removed from the soil profile by the leaching process. It quantifies the reduction in salt concentration achieved.
*   **Calculation:**
    `LE = (C_initial - C_final) / C_initial`
    `LE = (6 dS/m - 3 dS/m) / 6 dS/m`
    `LE = 3 / 6`
    `LE = 0.5` or 50%

**Question 4:**
Describe the dynamic equilibrium concept in salinity management. Why is it more realistic than a static equilibrium in many irrigated areas?

**Answer 4:**
*   **Dynamic Equilibrium Concept:** Dynamic equilibrium in salinity management refers to a state where the salt content in the soil fluctuates around an average balance, rather than remaining static. Over time, salt inputs roughly equal salt outputs, and the average salinity in the root zone is maintained within acceptable limits for crop growth, despite seasonal or climatic variations.
*   **Realism:** It's more realistic than static equilibrium because factors like irrigation application, water quality, evaporation, and rainfall are rarely constant throughout the year. These variations cause natural fluctuations in soil salinity. A drainage system designed for dynamic equilibrium aims to manage these fluctuations and prevent detrimental salt accumulation on average, rather than maintaining a perfectly constant salinity level.

---

### Important Points to Remember

*   **Salinity is caused by an imbalance:** Salt input > Salt output leads to accumulation.
*   **Drainage is crucial:** It provides the pathway for salt removal (leaching).
*   **Leaching Requirement (LR) is key:** It quantifies the water needed for salt control based on crop tolerance and irrigation water quality.
*   **`LR = (ECts - ECiw) / (ECts + ECiw)` is a fundamental formula.**
*   **Total Irrigation Water (IT) = ETc / (1 - LR)** ensures both crop needs and leaching are met.
*   **Electrical Conductivity (EC)** is the standard measure for salinity.
*   **Dynamic equilibrium** is the practical goal: manage fluctuations to keep average salinity low.
*   **Drainage system design** must consider the required drainage volume (`Qd`) calculated from LR and ETc.
*   **Poor irrigation uniformity** can lead to localized salinity problems even with a good drainage system.
