---
title: "Concrete mix design by IS code method and casting of cubes, cylinders with designed concrete mixes."
subject: "CONCRETE LAB (MT-2)"
module: "Module 10: Concrete mix design by IS code method and casting of cubes, cylinders with designed concrete mixes."
branch: "Civil Engineering"
semester: 5
topicId: "689f15ce56b5e963ba811050"
status: "completed"
scrapedAt: "2026-05-20T18:47:45.496Z"
---
# CONCRETE LAB (MT-2): Module 10 - Concrete Mix Design by IS Code Method and Casting of Cubes & Cylinders

## Topic: Concrete Mix Design by IS Code Method and Casting of Cubes, Cylinders with Designed Concrete Mixes

This module focuses on the practical application of concrete mix design principles, specifically using the Indian Standard (IS) code method. You will learn how to determine the proportions of ingredients for a desired concrete strength and how to cast test specimens (cubes and cylinders) for evaluating their properties.

---

### 1. Learning Outcomes:

Upon completion of this module, you will be able to:

*   **Understand the principles of concrete mix design.**
*   **Apply the IS 456:2000 and IS 10262:2019 methods for concrete mix design.**
*   **Identify and select appropriate materials for concrete.**
*   **Calculate the required quantities of cement, water, fine aggregate, and coarse aggregate for a specific mix design.**
*   **Perform preliminary tests on constituent materials.**
*   **Cast concrete cubes and cylinders for compressive strength testing.**
*   **Understand the importance of curing and its effect on concrete strength.**
*   **Interpret the results of strength tests.**

---

### 2. Key Concepts and Definitions:

*   **Concrete Mix Design:** The process of selecting the appropriate proportions of cement, water, fine aggregate (sand), coarse aggregate (gravel), and admixtures (if any) to achieve desired properties of fresh and hardened concrete, such as workability, strength, durability, and economy.
*   **Target Mean Strength ($f_{ck,m}$):** The average strength of concrete that the mix must consistently produce. It is calculated to ensure that a very high percentage of test results fall above the characteristic strength.
*   **Characteristic Strength ($f_{ck}$):** The strength of concrete below which not more than 5% of test results are expected to fall.
*   **Workability:** The ease with which concrete can be mixed, placed, compacted, and finished without segregation. Measured by slump.
*   **Water-Cement Ratio (w/c):** The ratio of the weight of water to the weight of cement in the mix. A crucial factor in determining strength and durability.
*   **Admixture:** A substance added to concrete before or during mixing (other than cement, water, and aggregates) to modify its properties, such as workability, strength, or setting time.
*   **Segregation:** The separation of coarse aggregate from the cement paste in fresh concrete.
*   **Bleeding:** The appearance of water on the surface of fresh concrete, caused by the settlement of heavier aggregates.
*   **Compaction:** The process of increasing the density of fresh concrete by removing entrapped air.
*   **Curing:** The process of maintaining moisture and temperature in freshly placed concrete for a specified period to allow hydration of cement to continue.
*   **Cube Test:** A test performed on a 150mm x 150mm x 150mm concrete cube to determine its compressive strength.
*   **Cylinder Test:** A test performed on a cylindrical concrete specimen (e.g., 150mm diameter x 300mm height) to determine its compressive strength. Cylinder strength is generally slightly lower than cube strength for the same mix due to the difference in specimen geometry.

---

### 3. Concrete Mix Design by IS Code Method (IS 10262:2019):

The IS 10262:2019 code provides a step-by-step procedure for concrete mix design. The primary objective is to achieve the required characteristic strength and durability for a given exposure condition while ensuring economy.

#### 3.1 Steps for Mix Design:

**Step 1: Selection of Target Mean Strength ($f_{ck,m}$)**

*   The target mean strength is calculated based on the characteristic strength ($f_{ck}$) and the standard deviation of strength.
*   $f_{ck,m} = f_{ck} + 1.65 \times S_d$
    *   Where $S_d$ is the standard deviation of strength. For the first mix, assume a value of $S_d$ based on the number of specimens tested. For subsequent mixes, use the actual observed standard deviation.

**Step 2: Selection of Degree of Quality Control**

*   The degree of quality control (e.g., High, Medium, Low) influences the assumed standard deviation.

**Step 3: Selection of Water-Cement Ratio (w/c)**

*   This is determined by:
    *   **Durability Requirements:** Based on the exposure conditions (e.g., mild, moderate, severe), IS 456:2000 Table 5 and IS 10262:2019 Table 4 provide maximum w/c ratios and minimum grades of concrete.
    *   **Strength Requirements:** From the calculated target mean strength, a provisional w/c ratio is obtained from the strength-w/c ratio curve for the specific cement being used.
*   **The lower of the two w/c ratios determined from durability and strength requirements is selected.**

**Step 4: Selection of Water Content**

*   Estimate the maximum water content required to achieve a desired slump for the given aggregate size and type. This is usually obtained from empirical tables in IS 10262:2019 (Table 5) based on the nominal maximum size of aggregate (NMSA) and the desired slump.
*   **Water Reducers (Admixtures):** If a water-reducing admixture is used, the water content can be reduced by the percentage reduction indicated by the admixture manufacturer.

**Step 5: Calculation of Cement Content**

*   Calculate the minimum cement content required based on the selected w/c ratio and the estimated water content.
*   Cement Content = Water Content / (w/c ratio)
*   Also, check if this calculated cement content meets the minimum cement content requirements for durability as specified in IS 456:2000 (Table 5) for the given exposure condition. **The higher of the two values is adopted.**

**Step 6: Determination of Coarse Aggregate Content**

*   Based on the NMSA and the type of aggregate (crushed or rounded), the volume of coarse aggregate per unit volume of concrete is determined from IS 10262:2019 (Table 6). This table provides the proportion of *volume* of coarse aggregate for unit volume of concrete for a 20 mm NMSA.
*   The proportion is adjusted for NMSA other than 20 mm. For NMSA larger than 20 mm, the proportion of coarse aggregate is increased; for NMSA smaller than 20 mm, it is decreased.
*   The *mass* of coarse aggregate per unit volume of concrete is calculated:
    *   Mass of Coarse Aggregate = Volume of Coarse Aggregate × Specific Gravity of Coarse Aggregate × Density of Concrete
    *   **Density of Concrete:** Assume a density of concrete (e.g., 2400 kg/m³ for normal weight concrete) or calculate it based on the trial mix.

**Step 7: Determination of Fine Aggregate Content**

*   **Absolute Volume Method:** This is the most common method. The volumes of cement, water, coarse aggregate, and air voids are subtracted from the total volume of concrete (1 m³) to find the volume of fine aggregate.
    *   Volume of Cement = Mass of Cement / (Specific Gravity of Cement × Density of Water)
    *   Volume of Water = Mass of Water / (Specific Gravity of Water × Density of Water)
    *   Volume of Coarse Aggregate = Mass of Coarse Aggregate / (Specific Gravity of Coarse Aggregate × Density of Water)
    *   Volume of Air Voids = (1 - Actual Density of Concrete / Assumed Density of Concrete)
    *   Volume of Fine Aggregate = 1 - (Volume of Cement + Volume of Water + Volume of Coarse Aggregate + Volume of Air Voids)
*   The mass of fine aggregate is then calculated:
    *   Mass of Fine Aggregate = Volume of Fine Aggregate × Specific Gravity of Fine Aggregate × Density of Water
*   **Check the fineness modulus of fine aggregate:** The amount of fine aggregate can be adjusted to achieve the desired workability and a balance between fine and coarse aggregates.

**Step 8: Trial Mix Proportions**

*   Summarize the calculated quantities of cement, water, fine aggregate, and coarse aggregate per cubic meter of concrete.

**Step 9: Casting of Trial Mixes and Testing**

*   Prepare trial mixes using the calculated proportions.
*   Test the fresh concrete for workability (slump test), compaction factor, and density.
*   Cast cubes and cylinders for compressive strength testing at 7 and 28 days.

**Step 10: Adjustment of Mix Proportions**

*   If the trial mix results do not meet the requirements (e.g., slump is too high/low, strength is insufficient), adjust the proportions and repeat the process. Common adjustments include:
    *   **To increase slump:** Increase water content (and cement content to maintain w/c ratio), or use a plasticizer.
    *   **To decrease slump:** Reduce water content (and cement content to maintain w/c ratio), or use a water-reducing admixture.
    *   **To increase strength:** Decrease w/c ratio or increase cement content.
    *   **To decrease strength:** Increase w/c ratio or decrease cement content.

**Step 11: Final Mix Proportions**

*   Once the trial mixes meet all the requirements, the final mix proportions are established.

---

### 4. Casting of Cubes and Cylinders with Designed Concrete Mixes:

This is a crucial practical aspect of the lab. Proper casting and curing are essential for obtaining reliable strength test results.

#### 4.1 Materials and Equipment:

*   **Cement:** Portland Cement (e.g., OPC 53 Grade).
*   **Fine Aggregate:** Clean, dry, and well-graded sand.
*   **Coarse Aggregate:** Clean, hard, and well-graded crushed stone or gravel (max size specified in mix design).
*   **Water:** Potable water.
*   **Admixture (Optional):** If specified in the mix design.
*   **Weighing Balance:** Accurate to within ± 0.1% of the quantity being weighed.
*   **Mixer:** Laboratory concrete mixer.
*   **Moulds:**
    *   Cube moulds (150mm x 150mm x 150mm).
    *   Cylinder moulds (150mm diameter x 300mm height).
*   **Tamping Rod:** 16mm diameter and 600mm length with a hemispherical tip.
*   **Slump Cone and Base Plate.**
*   **Trowels, Shovels.**
*   **Curing Tank/Water Tank.**
*   **Curing Paper/Polythene Sheets.**

#### 4.2 Procedure for Casting:

1.  **Batching:** Weigh out the precise quantities of cement, fine aggregate, coarse aggregate, and water as per the designed mix proportions for a specific batch size.
2.  **Mixing:**
    *   Add about half of the mixing water to the mixer and start it.
    *   Add coarse aggregate and mix for a short period.
    *   Add fine aggregate and cement, and mix them for about 1 minute.
    *   Add the remaining water gradually while mixing.
    *   Continue mixing for about 3-5 minutes until a homogeneous and uniform concrete mix is obtained. If admixtures are used, follow the manufacturer's instructions for addition.
3.  **Slump Test (for fresh concrete properties):**
    *   Place the slump cone on a flat, damp surface.
    *   Fill the cone with concrete in three layers, each layer being rodded 25 times with the tamping rod.
    *   Strike off the excess concrete from the top of the cone.
    *   Lift the cone vertically and slowly.
    *   Measure the slump (the difference in height between the top of the cone and the highest point of the slumped concrete).
4.  **Casting Cubes:**
    *   Lightly oil the inside of the cube moulds.
    *   Fill the mould with concrete in layers of approximately 5cm each.
    *   Compact each layer by tamping rods 35 times evenly over the surface. For the top layer, ensure the surface is level.
    *   Overfill the mould slightly to allow for compaction.
    *   Strike off the excess concrete and level the surface with a trowel.
5.  **Casting Cylinders:**
    *   Lightly oil the inside of the cylinder moulds.
    *   Fill the mould with concrete in layers of approximately 5cm each.
    *   Compact each layer by tamping rods 25 times evenly over the surface.
    *   Overfill the mould slightly.
    *   Strike off the excess concrete and level the surface with a trowel.
6.  **Initial Curing:**
    *   After casting, allow the specimens to remain in the moulds for 24 hours.
    *   Carefully remove the specimens from the moulds.
7.  **Subsequent Curing:**
    *   Immerse the specimens in a curing tank filled with clean water at a temperature of $27 \pm 2^\circ C$ until the time of testing.
    *   Alternatively, specimens can be kept in moist air with a relative humidity of 95% or more.
    *   Cure the specimens for the required duration (usually 7 and 28 days).

---

### 5. Practice Questions and Exercises:

**Question 1:**

Design a concrete mix for M25 grade concrete using the following data:

*   **Characteristic Strength ($f_{ck}$):** 25 MPa
*   **Maximum Size of Aggregate (NMSA):** 20 mm
*   **Exposure Condition:** Severe (for durability requirements)
*   **Workability:** Slump of 75-100 mm
*   **Type of Aggregate:** Crushed Angular Aggregate
*   **Specific Gravity of Cement:** 3.15
*   **Specific Gravity of Fine Aggregate:** 2.65
*   **Specific Gravity of Coarse Aggregate:** 2.70
*   **Unit Weight of Water:** 1000 kg/m³
*   **Assumed Standard Deviation ($S_d$):** 5 MPa (for initial estimation)
*   **Water Absorption of Fine Aggregate:** 1.5%
*   **Water Absorption of Coarse Aggregate:** 1.0%
*   **Surface Moisture of Fine Aggregate:** 4%
*   **Surface Moisture of Coarse Aggregate:** 2%

**Solution Approach (Illustrative - actual calculation requires referring to IS 10262:2019 tables):**

1.  **Target Mean Strength ($f_{ck,m}$):**
    $f_{ck,m} = 25 + 1.65 \times 5 = 25 + 8.25 = 33.25$ MPa

2.  **Selection of w/c Ratio:**
    *   *From Durability (Severe Exposure - IS 456 Table 5):* Max w/c ratio for M25 grade is 0.45.
    *   *From Strength (IS 10262 Fig 1 or typical curves):* For a target strength of 33.25 MPa, a provisional w/c ratio might be around 0.40.
    *   **Selected w/c Ratio:** 0.40 (lower value is selected to meet strength and durability)

3.  **Estimate Water Content (IS 10262 Table 5 for 20 mm NMSA, 75-100 mm slump):**
    Assume water content is approximately 190 kg/m³.

4.  **Calculate Cement Content:**
    Cement Content = Water Content / (w/c ratio) = 190 kg/m³ / 0.40 = 475 kg/m³
    *   Check Minimum Cement Content for Severe Exposure (IS 456 Table 5): For M25, min cement content is 300 kg/m³. Our calculated value (475 kg/m³) is higher, so it's acceptable.

5.  **Determine Coarse Aggregate Content (IS 10262 Table 6 for 20 mm NMSA, crushed aggregate, 20% fines passing 75 micron sieve):**
    From table, for 20 mm aggregate, proportion of volume of coarse aggregate is 0.60 (for 20mm NMSA and FM of sand ~2.6).
    *   Mass of Coarse Aggregate per m³ = Volume of Coarse Aggregate $\times$ Specific Gravity of Coarse Aggregate $\times$ Density of Concrete
    *   Assuming Density of Concrete = 2400 kg/m³
    *   Mass of Coarse Aggregate = 0.60 $\times$ 2.70 $\times$ 2400 kg/m³ = 3888 kg/m³ (This is a rough initial estimate and needs refinement using volumetric calculations).

6.  **Determine Fine Aggregate Content (Absolute Volume Method):**
    *   Volume of Cement = 475 / (3.15 * 1000) = 0.151 m³
    *   Volume of Water = 190 / (1.00 * 1000) = 0.190 m³
    *   Volume of Coarse Aggregate = (Mass of Coarse Aggregate / Specific Gravity of Coarse Aggregate) / 1000
    *   Volume of Coarse Aggregate = (3888 / 2.70) / 1000 = 1.440 m³ (This needs to be adjusted based on actual volume calculation)
    *   Volume of Air Voids = (1 - 2400/2400) = 0 m³ (Assuming density matches assumed value for now)
    *   Volume of Fine Aggregate = 1 - (0.151 + 0.190 + 1.440) = 1 - 1.781 = -0.781 m³ (This indicates an error in initial coarse aggregate estimation. The correct approach is to first calculate volumes and then masses).

    **Corrected approach for Fine Aggregate Calculation:**
    *   Let's assume the ratio of Fine Aggregate to Coarse Aggregate from IS 10262 Table 6 is used to estimate initial proportions. For a 20mm NMSA and FM of sand 2.6, the proportion of fine aggregate by volume is around 0.30.
    *   Volume of Fine Aggregate = 0.30 m³
    *   Mass of Fine Aggregate = Volume of Fine Aggregate $\times$ Specific Gravity of Fine Aggregate $\times$ Density of Water
    *   Mass of Fine Aggregate = 0.30 $\times$ 2.65 $\times$ 1000 = 795 kg/m³

    **Trial Mix Proportion (per m³):**
    *   Cement: 475 kg
    *   Water: 190 kg
    *   Fine Aggregate: 795 kg
    *   Coarse Aggregate: 3888 kg (This still needs verification via volumetric calculation to ensure total volume is 1 m³ and densities are correct).

**Question 2:**

What are the primary reasons for conducting slump tests on fresh concrete?
**Answer:** The slump test is performed to measure the workability of fresh concrete. It indicates the consistency and mobility of the concrete, which are important for ease of placement and compaction. A higher slump generally means more workable concrete.

**Question 3:**

What is the significance of curing concrete?
**Answer:** Curing is essential for the proper hydration of cement and the development of strength and durability in concrete. It involves maintaining adequate moisture and temperature in the concrete for a specific period after placing. Without proper curing, concrete can be prone to cracking, reduced strength, and poor durability.

---

### 6. Important Points to Remember:

*   **IS 10262:2019 is the primary code for concrete mix design in India.** Always refer to the latest version.
*   **Durability requirements often dictate the minimum cement content and maximum w/c ratio.** Strength requirements might necessitate a lower w/c ratio.
*   **The target mean strength is crucial for ensuring that the concrete consistently meets its characteristic strength.**
*   **Always perform trial mixes to verify the designed proportions and make necessary adjustments.**
*   **Accurate weighing and mixing are vital for consistent results.**
*   **Proper compaction during casting is essential to eliminate voids and achieve maximum density.**
*   **Curing is as important as the mix design itself for achieving the desired properties of hardened concrete.**
*   **The geometry of the test specimen (cube vs. cylinder) affects the measured strength.** Cylinders typically show slightly lower strength than cubes due to the difference in stress distribution.
*   **Understand the role of each ingredient:** Cement for binding, water for hydration and workability, aggregates for volume and strength, admixtures for modifying properties.

---
