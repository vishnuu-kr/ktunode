---
title: "Settlement analysis: Introduction- causes of settlement – estimation immediate settlement (I.S. Code) Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 3: Settlement analysis: Introduction"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e3d"
status: "completed"
scrapedAt: "2026-05-20T18:48:38.599Z"
---
# Foundation Engineering: Module 3 - Settlement Analysis: Introduction

## Introduction to Settlement Analysis

Settlement analysis is a critical aspect of foundation engineering that deals with the prediction of the magnitude and time rate of settlement of a structure due to the applied loads. Excessive settlement can lead to structural damage, serviceability issues, and even catastrophic failure. Therefore, understanding and estimating settlement is paramount for the safe and economical design of foundations.

**Key Concepts:**

*   **Settlement:** The downward movement of a foundation due to the applied loads.
*   **Total Settlement:** The overall downward displacement of the foundation.
*   **Differential Settlement:** The difference in settlement between two points on a structure. This is often more critical than total settlement as it can induce stresses and cause damage.
*   **Serviceability Limit State:** Concerned with the performance of the structure under normal service loads, where excessive settlement can impair its function.
*   **Ultimate Limit State:** Concerned with the collapse or failure of the structure, which can be a consequence of excessive settlement leading to instability.

## Causes of Settlement

Settlement in soil can occur due to several mechanisms, primarily related to the deformation of the soil mass under the applied foundation pressure. The main causes are:

*   **1. Elastic Deformation (Immediate Settlement):**
    *   **Cause:** This occurs immediately upon the application of the load due to the elastic deformation of soil particles and pore water. It's primarily a phenomenon in cohesive soils but can also occur to a lesser extent in cohesionless soils.
    *   **Characteristics:** Rapid settlement, occurring as the load is applied.
    *   **Influence:** Generally less critical for structural damage unless the soil has very low stiffness or the applied load is very high.

*   **2. Consolidation Settlement:**
    *   **Cause:** This is a time-dependent settlement that occurs in saturated fine-grained soils (clays and silts) due to the expulsion of pore water under the applied load. The load is transferred from the pore water to the soil skeleton, causing it to compress.
    *   **Types:**
        *   **Primary Consolidation:** Due to the gradual dissipation of excess pore water pressure and the re-arrangement of soil particles. This is the most significant component of consolidation settlement.
        *   **Secondary Consolidation (Creep):** Occurs after primary consolidation has ceased, due to the gradual adjustment of the soil structure under a constant load. It's often associated with organic soils and highly plastic clays.
    *   **Characteristics:** Occurs over a period of time, from days to years.
    *   **Influence:** Can be very significant and is often the governing factor in the design of foundations on clayey soils.

*   **3. Compaction Settlement:**
    *   **Cause:** This occurs in unsaturated granular soils (sands and gravels) due to the rearrangement of soil particles and expulsion of entrapped air when the load is applied.
    *   **Characteristics:** Occurs rapidly, similar to immediate settlement.
    *   **Influence:** Usually less significant than consolidation settlement in cohesive soils, but can be important in loose granular fills.

*   **4. Rock Settlement:**
    *   **Cause:** Due to the compression of the rock mass itself or the deformation of discontinuities (joints, faults, bedding planes) within the rock.
    *   **Characteristics:** Can be immediate or time-dependent depending on the rock mass properties.
    *   **Influence:** Generally less problematic than soil settlement, but can be significant in highly fractured or weathered rock.

## Estimation of Immediate Settlement

Immediate settlement, also known as elastic settlement, is the component of settlement that occurs instantaneously with the application of load. It is primarily due to the elastic deformation of soil particles and pore fluids.

**Methods for Estimating Immediate Settlement:**

Several methods are used to estimate immediate settlement, based on the elastic theory of soil mechanics. These methods generally involve concepts like:

*   **Modulus of Elasticity (E):** A measure of the stiffness of the soil.
*   **Poisson's Ratio (ν):** Relates lateral strain to axial strain.
*   **Influence Factors:** Factors that account for the geometry of the foundation and the distribution of stress within the soil.

### 1. Based on Elastic Theory (General Approach)

The general formula for settlement ($s$) based on elastic theory is:

$s = \frac{qB(1-\nu^2)}{E}$

Where:
*   $q$ = intensity of uniformly distributed load
*   $B$ = width of the loaded area (for a strip footing) or characteristic dimension
*   $\nu$ = Poisson's ratio of the soil
*   $E$ = Modulus of elasticity of the soil

**Important Considerations:**

*   **Shape of the Foundation:** The formula needs to be modified based on the shape (square, rectangular, circular) and depth of the foundation.
*   **Stress Distribution:** The assumption of uniform stress distribution might not always be valid.
*   **Layered Soil Deposits:** In layered soils, more complex methods are required.

### 2. Estimation of Immediate Settlement using IS Code (IS 8009:1976 Part 1)

The Indian Standard Code of Practice for Calculation of Settlement of Foundations (IS 8009:1976 Part 1) provides methods for estimating immediate settlement. The code primarily uses the **pressure-settlement characteristic** of soil, obtained from plate load tests or estimated from other soil properties.

**Key Principles from IS 8009:1976 Part 1:**

The code recommends estimating immediate settlement based on the **chord modulus** or **tangent modulus** of the stress-strain curve of the soil.

**Method using Plate Load Test Data:**

*   **Procedure:** Perform a plate load test on a plate of known dimension ($B_p$) at the foundation level. Apply loads and record the corresponding settlement ($s_p$). Plot a pressure-settlement curve.
*   **Calculation of Chord Modulus ($E_{p}$):**
    *   Choose a pressure range on the stress-strain curve that is representative of the foundation pressure. This range should ideally cover the anticipated range of settlement.
    *   $E_p = \frac{\Delta p}{\Delta s_p}$
    Where:
        *   $\Delta p$ is the change in pressure during the test.
        *   $\Delta s_p$ is the corresponding change in settlement of the plate.
*   **Estimation of Foundation Settlement ($s_f$):**
    *   **For Square or Circular Foundations:**
        $s_f = s_p \left( \frac{B_f}{B_p} \right) \left( \frac{1 - \nu^2}{1 - \nu_p^2} \right)$
        Where:
            *   $s_f$ is the settlement of the foundation.
            *   $B_f$ is the width or diameter of the foundation.
            *   $B_p$ is the width or diameter of the plate used in the plate load test.
            *   $\nu$ is the Poisson's ratio of the soil under the foundation.
            *   $\nu_p$ is the Poisson's ratio of the soil under the plate.
        *   **Note:** Often, the Poisson's ratio term is taken as 1 (i.e., $(1 - \nu^2)/(1 - \nu_p^2) \approx 1$) for practical purposes, especially if the soil properties are assumed to be homogeneous.
    *   **For Rectangular Foundations:** The IS code suggests using an equivalent width or employing more complex methods if the aspect ratio is large. For a rectangular foundation of width $B$ and length $L$, an equivalent width can sometimes be used, or the settlement can be interpolated between square and strip footing values.

**Method using Laboratory Test Data (e.g., Triaxial Test):**

*   **Procedure:** Perform a triaxial compression test on undisturbed soil samples. Obtain the stress-strain curve and calculate the deformation modulus ($E$).
*   **Calculation of Modulus of Elasticity ($E_s$):**
    *   Similar to the plate load test, a chord modulus or tangent modulus is determined from the stress-strain curve corresponding to the applied foundation pressure.
*   **Estimation of Foundation Settlement ($s_f$):**
    *   The general elastic theory formulas can be used. A common approach for a flexible rectangular or circular foundation of width $B$ and embedded at depth $D_f$ resting on a homogeneous soil mass extending to a great depth is:
        $s_f = q_o B \frac{(1 - \nu^2)}{E_s} I_w$
        Where:
            *   $q_o$ is the net intensity of loading.
            *   $I_w$ is an influence factor that depends on the shape of the foundation, the Poisson's ratio, and the ratio of the length to width of the foundation. (Values are available in geotechnical handbooks).

**Simplified Approach for Immediate Settlement (from Elastic Theory):**

For a uniformly loaded flexible area of width $B$ and length $L$ resting on a homogeneous soil deposit of thickness $H$ and elastic modulus $E$, the immediate settlement can be estimated using:

*   **For a Strip Footing (L/B >> 1):**
    $s_f = \frac{qB(1-\nu^2)}{E}$
*   **For a Square Footing (L = B):**
    $s_f = \frac{qB(1-\nu^2)}{E} \times 0.75$ (Approximate influence factor of 0.75 for a flexible square footing)
*   **For a Circular Footing (Diameter D = B):**
    $s_f = \frac{qD(1-\nu^2)}{E} \times 0.79$ (Approximate influence factor of 0.79 for a flexible circular footing)

**Note on IS Code:** The IS code emphasizes the use of field test data (like Plate Load Test) for more reliable estimation of immediate settlement, as laboratory tests on small samples may not accurately represent the in-situ behavior of the soil mass.

## Numerical Problems

Here are some practice problems to illustrate the concepts:

**Problem 1: Settlement of a Square Footing using Plate Load Test Data**

**Question:** A plate load test was conducted on a sandy soil deposit. A square plate of size 0.3 m x 0.3 m was loaded, and the following data was obtained:

| Load (kN) | Settlement (mm) |
| :-------- | :-------------- |
| 10        | 0.5             |
| 20        | 1.2             |
| 30        | 2.1             |
| 40        | 3.5             |

A square footing of size 2 m x 2 m is to be constructed on the same soil at the same depth. If the footing is subjected to a net intensity of loading of 100 kN/m², estimate the immediate settlement of the footing. Assume Poisson's ratio for the soil as 0.3.

**Solution:**

1.  **Calculate the bearing pressure on the plate:**
    *   For 10 kN load, pressure = 10 kN / (0.3m * 0.3m) = 111.11 kN/m²
    *   For 20 kN load, pressure = 20 kN / (0.3m * 0.3m) = 222.22 kN/m²
    *   For 30 kN load, pressure = 30 kN / (0.3m * 0.3m) = 333.33 kN/m²
    *   For 40 kN load, pressure = 40 kN / (0.3m * 0.3m) = 444.44 kN/m²

2.  **Determine the pressure range for calculating the chord modulus:**
    The footing is subjected to a net intensity of 100 kN/m². We should consider a pressure range around this value. Let's consider the load from 10 kN to 30 kN on the plate, which corresponds to bearing pressures of 111.11 kN/m² to 333.33 kN/m². This range is representative of the applied load on the footing.

3.  **Calculate the chord modulus ($E_p$):**
    Let's take the pressure range from 10 kN to 30 kN.
    $\Delta p = 333.33 \text{ kN/m}^2 - 111.11 \text{ kN/m}^2 = 222.22 \text{ kN/m}^2$
    $\Delta s_p = 2.1 \text{ mm} - 0.5 \text{ mm} = 1.6 \text{ mm} = 0.0016 \text{ m}$
    $E_p = \frac{\Delta p}{\Delta s_p} = \frac{222.22 \text{ kN/m}^2}{0.0016 \text{ m}} = 138,887.5 \text{ kN/m}^2$

4.  **Estimate the foundation settlement ($s_f$):**
    Using the formula for a square footing, assuming Poisson's ratio for the plate load test soil is similar to that under the foundation ($\nu \approx \nu_p$):
    $s_f = s_p \left( \frac{B_f}{B_p} \right)$
    To use this, we need to find the settlement of the plate ($s_p$) at the applied pressure of 100 kN/m². From the data, at 10 kN load (111.11 kN/m²), the settlement is 0.5 mm. We can linearly interpolate or use the calculated modulus. Let's use the modulus for a more accurate estimation of settlement at 100 kN/m².

    Using the pressure-settlement relationship derived from the plate load test (assuming linearity in the chosen range or extending the line):
    We have a point (111.11 kN/m², 0.5 mm).
    The slope $m = E_p / B_p^2$ (this isn't the direct modulus, but relates pressure to settlement).
    A simpler approach is to assume the settlement is proportional to the applied pressure within the relevant range.
    If 111.11 kN/m² causes 0.5 mm settlement, then 100 kN/m² will cause slightly less.
    $s_p \text{ at } 100 \text{ kN/m}^2 \approx 0.5 \text{ mm} \times \frac{100}{111.11} \approx 0.45 \text{ mm}$

    Now, using the settlement ratio formula:
    $s_f = s_p \left( \frac{B_f}{B_p} \right)$
    $s_f = 0.45 \text{ mm} \left( \frac{2 \text{ m}}{0.3 \text{ m}} \right)$
    $s_f = 0.45 \text{ mm} \times 6.67$
    $s_f \approx 3.0 \text{ mm}$

    **Alternatively, using the calculated $E_p$ and the general formula with an influence factor:**
    For a square footing, the influence factor is approximately 0.75.
    Let's assume the effective pressure causing settlement is 100 kN/m².
    $s_f = \frac{qB(1-\nu^2)}{E_s} \times \text{Influence Factor}$
    We can assume $E_s \approx E_p$ for this soil.
    $s_f = \frac{100 \text{ kN/m}^2 \times 2 \text{ m} \times (1 - 0.3^2)}{138,887.5 \text{ kN/m}^2} \times 0.75$
    $s_f = \frac{100 \times 2 \times (1 - 0.09)}{138,887.5} \times 0.75$
    $s_f = \frac{200 \times 0.91}{138,887.5} \times 0.75$
    $s_f = \frac{182}{138,887.5} \times 0.75 \text{ m}$
    $s_f = 0.00131 \text{ m} \times 0.75$
    $s_f = 0.0009825 \text{ m} = 0.9825 \text{ mm}$

    **Revisiting the IS Code approach for plate load test interpretation:**
    The IS code emphasizes that the settlement ratio formula $s_f = s_p \left( \frac{B_f}{B_p} \right)$ is based on the assumption that the soil behavior is similar and the applied pressure intensity is the same.
    In our case, the applied pressure intensity on the footing is 100 kN/m². We need to find the settlement of the plate ($s_p$) at 100 kN/m².
    From the data:
    At 111.11 kN/m², $s_p = 0.5$ mm.
    Assuming a linear relationship in the lower range:
    $s_p = k \times \text{Pressure}$
    $0.5 \text{ mm} = k \times 111.11 \text{ kN/m}^2 \implies k = \frac{0.5}{111.11} \text{ mm/(kN/m}^2) \approx 0.0045 \text{ mm/(kN/m}^2)$
    Settlement of plate at 100 kN/m²:
    $s_p = 0.0045 \times 100 = 0.45 \text{ mm}$
    Now, using the settlement ratio:
    $s_f = s_p \left( \frac{B_f}{B_p} \right) = 0.45 \text{ mm} \left( \frac{2 \text{ m}}{0.3 \text{ m}} \right) = 0.45 \text{ mm} \times 6.67 \approx 3.0 \text{ mm}$

    **Conclusion for Problem 1:** The IS code methodology using the settlement ratio from a plate load test is often preferred. The estimated immediate settlement is **3.0 mm**.

**Problem 2: Immediate Settlement of a Rectangular Foundation using Elastic Theory**

**Question:** A rectangular footing of size 5 m x 10 m is to be founded at a depth of 2 m below the ground surface. The net intensity of loading is 150 kN/m². The soil is a homogeneous clay deposit with an average modulus of elasticity $E_s = 50 \times 10^6$ N/m² (or $50,000$ kN/m²) and Poisson's ratio $\nu = 0.4$. Estimate the immediate settlement of the footing.

**Solution:**

1.  **Identify the parameters:**
    *   Load intensity ($q$) = 150 kN/m²
    *   Width of footing ($B$) = 5 m
    *   Length of footing ($L$) = 10 m
    *   Modulus of Elasticity ($E_s$) = 50,000 kN/m²
    *   Poisson's Ratio ($\nu$) = 0.4

2.  **Calculate the aspect ratio:**
    $L/B = 10 \text{ m} / 5 \text{ m} = 2$

3.  **Use the appropriate influence factor ($I_w$):**
    For a flexible rectangular foundation, the settlement is given by:
    $s_f = qB \frac{(1-\nu^2)}{E_s} I_w$
    The influence factor $I_w$ depends on the aspect ratio ($L/B$) and the shape of the loaded area. For a flexible rectangular foundation with $L/B = 2$, the influence factor can be found from charts or tables. A common value for $L/B=2$ is approximately $I_w \approx 1.50$ (this value can vary slightly depending on the source of the charts). Let's use this value.

4.  **Calculate the immediate settlement ($s_f$):**
    $s_f = 150 \text{ kN/m}^2 \times 5 \text{ m} \times \frac{(1 - 0.4^2)}{50,000 \text{ kN/m}^2} \times 1.50$
    $s_f = 150 \times 5 \times \frac{(1 - 0.16)}{50,000} \times 1.50$
    $s_f = 750 \times \frac{0.84}{50,000} \times 1.50$
    $s_f = 750 \times 0.0000168 \times 1.50$
    $s_f = 0.0126 \times 1.50 \text{ m}$
    $s_f = 0.0189 \text{ m} = 18.9 \text{ mm}$

    **Estimated immediate settlement = 18.9 mm.**

## Important Points to Remember

*   **Differential Settlement:** This is often more critical than total settlement for the structural integrity and functionality of buildings.
*   **Plate Load Test vs. Laboratory Tests:** Plate load tests are generally preferred for estimating immediate settlement as they simulate in-situ conditions better than laboratory tests on small soil samples.
*   **IS Code Emphasis:** IS 8009:1976 Part 1 is a crucial reference for settlement calculations in India. It prioritizes field data.
*   **Modulus of Elasticity:** The accurate determination of the modulus of elasticity ($E$) is critical. It can be challenging to obtain reliable values, especially for cohesive soils.
*   **Influence of Foundation Geometry:** The shape and size of the foundation significantly influence the settlement magnitude.
*   **Soil Variability:** Real soil deposits are rarely homogeneous. Variations in soil properties across the site can lead to differential settlements.
*   **Net Intensity of Loading:** Settlement is primarily caused by the *net* intensity of loading, which is the applied load minus the overburden pressure at the foundation level.
*   **Immediate vs. Consolidation Settlement:** Always distinguish between immediate settlement (instantaneous) and consolidation settlement (time-dependent). Both contribute to the total settlement.

## Practice Questions

1.  What are the primary causes of settlement in a foundation? Explain each briefly.
2.  Describe the procedure for conducting a plate load test and how the data is used to estimate immediate settlement according to the principles of IS 8009:1976.
3.  A circular footing of 5 m diameter is subjected to a uniform load intensity of 200 kN/m². The soil is homogeneous clay with $E_s = 40,000$ kN/m² and $\nu = 0.4$. Estimate the immediate settlement of the footing. (Assume an appropriate influence factor of 0.79 for a flexible circular footing).
4.  Explain the concept of differential settlement and why it is often more critical than total settlement.
5.  What is the difference between primary and secondary consolidation settlement?

---

**Answers to Practice Questions:**

1.  **Primary causes of settlement:**
    *   **Elastic Deformation (Immediate Settlement):** Instantaneous deformation of soil particles and pore water upon loading.
    *   **Consolidation Settlement:** Time-dependent expulsion of pore water in saturated fine-grained soils, leading to volume reduction.
    *   **Compaction Settlement:** Rapid rearrangement of particles and expulsion of air in unsaturated granular soils.
    *   **Rock Settlement:** Compression or deformation of rock mass or its discontinuities.

2.
