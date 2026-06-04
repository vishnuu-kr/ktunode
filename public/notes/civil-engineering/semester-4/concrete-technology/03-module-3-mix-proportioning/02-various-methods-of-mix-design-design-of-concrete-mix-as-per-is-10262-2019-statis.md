---
title: "Various methods of mix design - design of concrete mix as per IS 10262- 2019 Statistical quality control of concrete, mean strength, standard deviation, coefficient of variation, sampling and testing, acceptance criteria."
subject: "CONCRETE TECHNOLOGY"
module: "Module 3: Mix proportioning"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a46"
status: "completed"
scrapedAt: "2026-05-20T18:43:33.657Z"
---
# CONCRETE TECHNOLOGY - Module 3: Mix Proportioning

---

## Topic: Various Methods of Mix Design - Design of Concrete Mix as per IS 10262-2019

### 1. Introduction to Mix Design

**What is Mix Design?**
Mix design is the process of determining the optimal proportions of cement, fine aggregate (sand), coarse aggregate (gravel), water, and admixtures to produce concrete with desired properties (strength, durability, workability) for a specific application, while being economical.

**Why is Mix Design Important?**
*   **Achieves Required Performance:** Ensures concrete meets strength, durability, and workability requirements.
*   **Economical:** Minimizes material wastage and uses materials efficiently.
*   **Consistency:** Provides uniform concrete quality.
*   **Sustainability:** Can reduce cement content and optimize resource utilization.

### 2. Objectives of Mix Design

*   To achieve the specified characteristic strength.
*   To ensure adequate durability.
*   To provide the required workability for placing and compaction.
*   To achieve economy in the use of materials.
*   To minimize segregation and bleeding.

### 3. Factors Affecting Mix Design

*   **Strength:** Target mean strength, characteristic strength, quality of constituents.
*   **Durability:** Exposure conditions (e.g., aggressive environments), required resistance.
*   **Workability:** Slump required for placement, type of construction, method of compaction.
*   **Aggregate Properties:** Size, shape, grading, texture, specific gravity, water absorption.
*   **Cement Properties:** Type, fineness, strength.
*   **Water-Cement Ratio (w/c):** Crucial for strength and durability. Lower w/c generally leads to higher strength and better durability.
*   **Admixtures:** Water reducers, superplasticizers, accelerators, retarders, etc.
*   **Environmental Conditions:** Temperature, humidity during mixing, placing, and curing.

---

## 4. Design of Concrete Mix as per IS 10262-2019

This is the most widely used Indian Standard for concrete mix design. It provides a step-by-step approach.

**Key Steps in IS 10262-2019:**

**Step 1: Determination of Characteristic Strength**

*   **Characteristic Strength ($f_{ck}$):** The strength of concrete below which not more than 5% of test results are expected to fall.
*   **Target Mean Strength ($f_{m}$):** The average strength required to ensure that the characteristic strength is met.
    *   $f_{m} = f_{ck} + 1.65 \times s$
    *   Where, $s$ is the standard deviation of concrete strength.
    *   **Important Point:** The standard deviation ($s$) is determined from past data or estimated based on the quality of control.
        *   **For good quality control (Table 2 of IS 10262):**
            *   Standard deviation ($s$) can be assumed for different grades of concrete if past data is not available.
            *   For example, for M20, $s$ might be 3.5 MPa. For M30, $s$ might be 4.0 MPa.
        *   **For other cases, use statistical analysis of past test results.**

**Step 2: Selection of Water-Cement Ratio (w/c)**

*   **Factors influencing w/c:**
    *   **Required Strength:** From empirical curves (e.g., Abram's law, though IS 10262 uses direct w/c for target strength).
    *   **Durability Requirements:** Based on exposure conditions (Table 5 of IS 456). For example, severe exposure might require a w/c ratio of not more than 0.45.
    *   **Workability:** Higher workability often necessitates a higher w/c ratio, but admixtures can help reduce w/c while maintaining workability.
*   **Rule:** Select the *lower* w/c ratio that satisfies both strength and durability requirements.

**Step 3: Selection of Water Content**

*   **Based on maximum aggregate size and workability:** IS 10262 (Table 3) provides approximate water content for a given slump and maximum aggregate size.
*   **Adjustments for admixtures:** If water-reducing admixtures are used, the water content can be reduced.
*   **Considerations:** Shape and grading of aggregates also influence water content.

**Step 4: Calculation of Cement Content**

*   **Formula:** $Cement \ Content = \frac{Water \ Content}{(w/c \ ratio)}$
*   **Minimum Cement Content:** Ensure the cement content is not less than the minimum required for durability (Table 5 of IS 456).
*   **Maximum Cement Content:** Avoid excessively high cement content (e.g., for heat of hydration concerns).

**Step 5: Proportion of Volume of Coarse and Fine Aggregates**

*   **Based on:**
    *   **Maximum aggregate size:** This influences the void space.
    *   **Fineness modulus of fine aggregate:** A higher fineness modulus indicates coarser sand.
*   **IS 10262 (Table 4):** Provides the volume of coarse aggregate per unit volume of total aggregate for different maximum aggregate sizes and different fineness moduli of fine aggregate.
*   **Formula:** Volume of Coarse Aggregate = (Value from Table 4) $\times$ (Volume of all aggregates)
*   **Volume of Fine Aggregate:** (Total Volume of Aggregates) - (Volume of Coarse Aggregate)

**Step 6: Calculation of Coarse and Fine Aggregate Quantities (by Mass)**

*   **First, calculate the volume of each ingredient per unit volume of concrete (usually 1 m³).**
    *   Volume of Cement = $\frac{Mass \ of \ Cement}{Specific \ Gravity \ of \ Cement \times Density \ of \ Water}$
    *   Volume of Water = $\frac{Mass \ of \ Water}{Specific \ Gravity \ of \ Water \times Density \ of \ Water}$ (Specific gravity of water = 1)
    *   Volume of Admixture = $\frac{Mass \ of \ Admixture}{Specific \ Gravity \ of \ Admixture \times Density \ of \ Water}$
    *   Volume of Coarse Aggregate = (Volume fraction from Step 5) $\times$ (Total volume of concrete)
    *   Volume of Fine Aggregate = (Volume fraction from Step 5) $\times$ (Total volume of concrete)

*   **Next, calculate the mass of each ingredient:**
    *   Mass of Coarse Aggregate = (Volume of Coarse Aggregate) $\times$ (Specific Gravity of Coarse Aggregate) $\times$ (Density of Water)
    *   Mass of Fine Aggregate = (Volume of Fine Aggregate) $\times$ (Specific Gravity of Fine Aggregate) $\times$ (Density of Water)

*   **Check for Total Volume:** Sum of volumes of all ingredients should be equal to 1 m³. If not, adjustments might be needed.

**Step 7: Trial Mix Proportions**

*   **Prepare trial mixes based on the calculated proportions.**
*   **Assess workability (slump test).**
*   **Assess other fresh concrete properties if necessary (e.g., compacting factor).**

**Step 8: Adjustments**

*   **If workability is too low/high:** Adjust water content and/or admixture content, maintaining w/c.
*   **If strength is low:** Increase cement content (reduce w/c) or adjust aggregate grading.
*   **If strength is too high:** Reduce cement content (increase w/c) cautiously.

**Step 9: Final Mix Proportions**

*   Once satisfactory properties are achieved, the final mix proportions are established.

---

### 5. Statistical Quality Control of Concrete

**Purpose:** To ensure that the concrete produced consistently meets the specified requirements throughout the construction project.

#### 5.1 Key Concepts and Definitions

*   **Quality Control:** A system for verifying that a product meets specified requirements.
*   **Quality Assurance:** The overall system to ensure quality.
*   **Specification:** The desired properties and performance criteria for the concrete.
*   **Variability:** The tendency of properties to deviate from the average.
*   **Random Variation:** Variations due to chance, inherent in any process.
*   **Systematic Variation:** Variations due to identifiable causes that can be corrected.

#### 5.2 Mean Strength ($\mu$ or $\bar{x}$)**

*   The average strength of a large number of concrete specimens tested.
*   In practice, the mean of a sample of tests is used as an estimate of the population mean.

#### 5.3 Standard Deviation ($s$)

*   A measure of the dispersion or spread of data points around the mean.
*   **Formula for sample standard deviation:**
    $s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$
    Where:
    *   $x_i$ = individual test result
    *   $\bar{x}$ = sample mean
    *   $n$ = number of test results

*   **Significance:** A low standard deviation indicates that the test results are clustered closely around the mean, indicating good consistency. A high standard deviation indicates high variability.

#### 5.4 Coefficient of Variation (COV)**

*   A normalized measure of dispersion, expressing standard deviation as a percentage of the mean.
*   **Formula:**
    $COV = \frac{s}{\bar{x}} \times 100\%$
*   **Significance:** Provides a relative measure of variability, allowing comparison between datasets with different means.
    *   **Low COV (e.g., < 10-15%):** Indicates good control and consistency.
    *   **High COV (e.g., > 20%):** Indicates poor control or significant variability.

#### 5.5 Sampling and Testing

*   **Sampling:** The process of selecting representative specimens from a batch of concrete for testing.
    *   **Importance:** Test results are only meaningful if the sample is truly representative of the entire batch.
    *   **IS 456 and IS 516 (Methods of tests for strength of concrete):** Provide guidelines for sampling.
    *   **Frequency of Sampling:** Depends on the project requirements, volume of concrete, and stage of construction.
*   **Testing:** Performing physical tests on the collected samples to evaluate their properties.
    *   **Common Tests:**
        *   **Slump Test:** Measures workability (consistency).
        *   **Compacting Factor Test:** Another measure of workability.
        *   **Compressive Strength Test:** Crucial for verifying strength requirements (performed on cubes or cylinders at 7 and 28 days).
        *   **Tensile Strength Test (Flexural/Split):** Less common for routine QC.
        *   **Density Test:** For fresh and hardened concrete.

#### 5.6 Acceptance Criteria

*   **Purpose:** To decide whether a batch or a series of batches of concrete meets the specified requirements.
*   **Based on:** Statistical analysis of test results, ensuring that the probability of failure is acceptably low.
*   **IS 456-2000 (Clause 5.3.2):** Outlines acceptance criteria for concrete strength.
    *   **Criteria for a batch:**
        1.  The mean strength of the test results (e.g., 3 consecutive test results) should not be less than the characteristic strength ($f_{ck}$) plus the margin of strength ($0.824 \times$ specified margin, where specified margin is $1.65s$).
            *   **Simpler way:** Mean strength of any three consecutive test results should be $\ge f_{ck} + 0.824 \times (\text{specified margin})$.
        2.  Each individual test result should not be less than $f_{ck} - 3$ MPa (for grades up to M20) or $f_{ck} - 4$ MPa (for grades M25 to M55) or $f_{ck} - 5$ MPa (for grades M60 and above). *Note: This is for cube strength.*
    *   **For Target Mean Strength:** If the target mean strength ($f_m$) is specified, then the mean of any three consecutive test results should be $\ge f_m$.
    *   **Simplified Acceptance Criteria (commonly used for ensuring characteristic strength):**
        *   **Average of any three consecutive test results $\ge$ Specified characteristic strength ($f_{ck}$) + Margin** (Margin is typically $1.65s$).
        *   **Individual test result $\ge$ Specified characteristic strength ($f_{ck}$) - Margin/2**. (This is a simplified guideline, the IS code has specific deductions).

*   **Important Point:** The "margin" used in acceptance criteria is directly related to the standard deviation and the desired level of quality control.

---

### 6. Example Calculation (IS 10262-2019)

**Problem:** Design a concrete mix for M30 grade concrete for a reinforced concrete structure.
**Exposure Conditions:** Mild.
**Type of Cement:** OPC 43 grade.
**Maximum Aggregate Size:** 20 mm (angular).
**Workability:** Slump 75-100 mm (medium).
**Admixture:** Superplasticizer to be used.
**Specific Gravity of Cement:** 3.15
**Specific Gravity of Fine Aggregate:** 2.60
**Specific Gravity of Coarse Aggregate:** 2.70
**Water Absorption of Fine Aggregate:** 1.0%
**Water Absorption of Coarse Aggregate:** 0.5%
**Free Moisture in Fine Aggregate:** 3.0%
**Free Moisture in Coarse Aggregate:** 1.0%

**Solution:**

**Step 1: Characteristic Strength**
*   For M30, $f_{ck}$ = 30 MPa.
*   Assume good quality control, from Table 2 of IS 10262-2019, for M30, standard deviation $s = 4.0$ MPa.
*   Target Mean Strength, $f_m = f_{ck} + 1.65 \times s = 30 + 1.65 \times 4.0 = 30 + 6.6 = 36.6$ MPa.

**Step 2: Selection of Water-Cement Ratio**
*   **Durability (Mild exposure, Table 5 of IS 456):** Maximum w/c ratio = 0.55.
*   **Strength (from empirical curve/Table 2 of IS 10262-2019):** For target mean strength of 36.6 MPa, the w/c ratio is approximately 0.45.
*   **Select the lower value:** w/c ratio = 0.45.

**Step 3: Selection of Water Content**
*   From Table 3 of IS 10262-2019 for 20 mm aggregate, 75-100 mm slump, water content is approximately 192 kg/m³.
*   **Adjustment for Superplasticizer:** Assume 20% reduction in water content.
    *   Reduced water content = $192 \times (1 - 0.20) = 192 \times 0.80 = 153.6$ kg/m³.
*   Let's use 154 kg/m³.

**Step 4: Calculation of Cement Content**
*   $Cement \ Content = \frac{Water \ Content}{(w/c \ ratio)} = \frac{154}{0.45} = 342.2$ kg/m³.
*   **Minimum Cement Content (Mild exposure, Table 5 of IS 456):** 300 kg/m³.
*   **Check:** 342.2 kg/m³ > 300 kg/m³. So, the cement content is adequate.
*   Let's round cement content to 345 kg/m³.
*   Recalculate w/c ratio: $\frac{154}{345} = 0.446$ (which is less than 0.45, so it's fine).

**Step 5: Proportion of Volume of Coarse and Fine Aggregates**
*   Assume fineness modulus of fine aggregate = 2.6.
*   From Table 4 of IS 10262-2019, for 20 mm maximum aggregate size and fineness modulus 2.6, the volume of coarse aggregate per unit volume of total aggregate is 0.64.
*   Volume of Coarse Aggregate = $0.64 \times 1$ m³ = 0.64 m³.
*   Volume of Fine Aggregate = $(1.00 - 0.64) \times 1$ m³ = 0.36 m³.

**Step 6: Calculation of Aggregate Quantities (by Mass)**

*   **Mass of Cement:** 345 kg/m³
*   **Mass of Water:** 154 kg/m³
*   **Volume of Cement:** $\frac{345}{3.15 \times 1000} = 0.1095$ m³
*   **Volume of Water:** $\frac{154}{1 \times 1000} = 0.154$ m³
*   **Volume of Coarse Aggregate:** 0.64 m³
*   **Volume of Fine Aggregate:** 0.36 m³

*   **Mass of Coarse Aggregate:**
    *   $Mass = Volume \times Specific \ Gravity \times Density \ of \ Water$
    *   $Mass = 0.64 \times 2.70 \times 1000 = 1728$ kg/m³.
*   **Mass of Fine Aggregate:**
    *   $Mass = 0.36 \times 2.60 \times 1000 = 936$ kg/m³.

*   **Check for total volume:**
    *   Volume of Cement = 0.1095 m³
    *   Volume of Water = 0.154 m³
    *   Volume of Coarse Aggregate = 0.64 m³
    *   Volume of Fine Aggregate = 0.36 m³
    *   Total Volume = $0.1095 + 0.154 + 0.64 + 0.36 = 1.2635$ m³

*   **Correction for Aggregate Volumes:** The sum of volumes of cement, water, and aggregates should be 1 m³. Since our sum is > 1, it indicates the initial aggregate volumes were based on dry rodded density assumptions implicit in the tables. We need to adjust based on the actual volumes.

    *   Let's restart Step 6 by considering the total solids volume.
    *   Total Volume = 1 m³
    *   Volume of Cement = 0.1095 m³
    *   Volume of Water = 0.154 m³
    *   Volume of Admixture (assume specific gravity 1.0, content 1% of cement by weight) = $\frac{0.01 \times 345}{1.0 \times 1000} = 0.00345$ m³

    *   Total Volume of Cement, Water & Admixture = $0.1095 + 0.154 + 0.00345 = 0.26695$ m³

    *   Volume of Aggregates = $1.0 - 0.26695 = 0.73305$ m³

    *   **Now distribute this volume between coarse and fine aggregates:**
        *   Volume of Coarse Aggregate = $0.73305 \times 0.64 = 0.46915$ m³
        *   Volume of Fine Aggregate = $0.73305 \times 0.36 = 0.26390$ m³

    *   **Recalculate Masses of Aggregates:**
        *   **Mass of Coarse Aggregate:** $0.46915 \times 2.70 \times 1000 = 1266.7$ kg (approx. 1267 kg)
        *   **Mass of Fine Aggregate:** $0.26390 \times 2.60 \times 1000 = 686.1$ kg (approx. 686 kg)

    *   **Mass of Admixture:** $1\%$ of cement by weight = $0.01 \times 345 = 3.45$ kg.

**Trial Mix Proportions per m³ of Concrete (based on SSD aggregates):**

*   **Cement:** 345 kg
*   **Water:** 154 kg
*   **Fine Aggregate (SSD):** We need to account for free moisture and absorption.
    *   Actual Fine Aggregate required (dry basis) = 686 kg.
    *   Moisture content = 3.0%. Absorption = 1.0%.
    *   Mass of Fine Aggregate (as delivered) = $686 \times \frac{100 + 3.0}{100 - 1.0} = 686 \times \frac{103}{99} = 711.3$ kg.
*   **Coarse Aggregate (SSD):**
    *   Actual Coarse Aggregate required (dry basis) = 1267 kg.
    *   Moisture content = 1.0%. Absorption = 0.5%.
    *   Mass of Coarse Aggregate (as delivered) = $1267 \times \frac{100 + 1.0}{100 - 0.5} = 1267 \times \frac{101}{99.5} = 1285.0$ kg.
*   **Admixture:** 3.45 kg

**Final Trial Mix Proportion (by mass for 1 m³ of concrete):**

*   **Cement:** 345 kg
*   **Water:** 154 kg
*   **Fine Aggregate (Moist):** 711 kg
*   **Coarse Aggregate (Moist):** 1285 kg
*   **Superplasticizer:** 3.45 kg

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary purpose of concrete mix design?
**Answer:** To determine the optimal proportions of constituent materials to produce concrete with specified properties economically.

**Question 2:** According to IS 10262-2019, how is the target mean strength calculated?
**Answer:** Target Mean Strength ($f_m$) = Characteristic Strength ($f_{ck}$) + 1.65 $\times$ Standard Deviation ($s$).

**Question 3:** If the characteristic strength required is 30 MPa and the standard deviation of the concrete strength is 3.5 MPa, what is the target mean strength?
**Answer:** $f_m = 30 + 1.65 \times 3.5 = 30 + 5.775 = 35.775$ MPa.

**Question 4:** What are the two main factors that govern the selection of the water-cement ratio?
**Answer:** Required strength and durability requirements.

**Question 5:** What is the formula for calculating the coefficient of variation (COV)?
**Answer:** $COV = \frac{s}{\bar{x}} \times 100\%$.

**Question 6:** A batch of concrete is rejected if the slump is significantly outside the specified range. This is an example of:
    a) Quality Assurance
    b) Quality Control
    c) Statistical Quality Control
    d) None of the above
**Answer:** b) Quality Control. While statistical methods are used within QC, the direct rejection based on a deviation is a QC action.

**Question 7:** Explain the significance of a low coefficient of variation in concrete production.
**Answer:** A low COV indicates that the concrete properties (like strength) are consistent and vary little from the average, suggesting good control over the production process.

**Question 8:** Calculate the mass of fine aggregate required per cubic meter of concrete if the dry weight is 700 kg, moisture content is 4%, and absorption is 1.5%.
**Answer:**
Mass of fine aggregate (as delivered) = $700 \times \frac{100 + 4}{100 - 1.5} = 700 \times \frac{104}{98.5} = 737.06$ kg.

**Question 9:** What are the acceptance criteria for concrete strength as per IS 456?
**Answer:**
1.  The mean strength of any three consecutive test results should be equal to or greater than the characteristic strength plus the specified margin ($f_{ck} + 0.824 \times$ Margin).
2.  Each individual test result should not be less than $f_{ck} - 3$ MPa (for grades up to M20) or $f_{ck} - 4$ MPa (for M25 to M55), etc.

**Question 10:** If the slump of a trial mix is lower than required, what adjustments can be made, while keeping the w/c ratio constant?
**Answer:** Increase the water content and simultaneously increase the cement content by the same proportion to maintain the w/c ratio, or use a water-reducing admixture.

---

### 8. Important Points to Remember

*   **IS 10262-2019** is the primary code for concrete mix design in India.
*   The **Water-Cement ratio** is the most critical factor influencing both strength and durability.
*   **Target Mean Strength** is always higher than the characteristic strength to account for variability.
*   **Standard Deviation** quantifies the variability in concrete strength.
*   **Coefficient of Variation** provides a relative measure of variability.
*   **Sampling** must be representative for test results to be meaningful.
*   **Acceptance Criteria** are essential for ensuring consistent quality and preventing the use of sub-standard concrete.
*   Always consider **durability requirements** alongside strength requirements when selecting the w/c ratio.
*   Account for **free moisture and absorption** of aggregates when calculating batching quantities.
*   **Trial mixes** are crucial for validating the design and making necessary adjustments.
*   **Admixtures** can significantly modify concrete properties but must be used as per manufacturer's recommendations and trial mix validation.
