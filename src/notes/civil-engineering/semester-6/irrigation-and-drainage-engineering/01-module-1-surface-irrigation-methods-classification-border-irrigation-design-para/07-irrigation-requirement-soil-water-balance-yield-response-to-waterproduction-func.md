---
title: "Irrigation requirement, Soil water balance, Yield response to water,Production functions"
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 1: Surface Irrigation methods : Classification – Border irrigation: design parameters, evaluation and ideal wetting pattern"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811100"
status: "completed"
scrapedAt: "2026-05-20T18:54:56.840Z"
---
# Irrigation and Drainage Engineering

## Module 1: Surface Irrigation Methods

### Classification – Border Irrigation: Design Parameters, Evaluation and Ideal Wetting Pattern

---

### Topic: Irrigation Requirement, Soil Water Balance, Yield Response to Water, Production Functions

---

### 1. Irrigation Requirement

**1.1 Definition:**
Irrigation requirement is the quantity of water needed for crop production in a specific area and period, considering all sources of water available to the crop. It is primarily influenced by the crop's water needs and the effectiveness of the irrigation system in delivering water to the root zone.

**1.2 Components of Irrigation Requirement:**

*   **Crop Water Requirement (ETc):** The amount of water lost from the soil-plant system through evapotranspiration (ET).
    *   **Evaporation (E):** Water loss from the soil surface.
    *   **Transpiration (T):** Water loss from plant leaves through stomata.
    *   **Reference Evapotranspiration (ETo):** ET from a reference surface (e.g., grass or alfalfa) under standardized conditions.
    *   **Crop Coefficient (Kc):** A factor that relates the ET of a specific crop to the ETo.
    *   **ETc = Kc * ETo**

*   **Effective Rainfall (Pe):** The portion of rainfall that is stored in the root zone and is available for crop use. It excludes runoff and deep percolation beyond the root zone.
    *   **Pe = Rainfall - Runoff - Deep Percolation**

*   **Irrigation Water Requirement (IR):** The amount of water that needs to be supplied by irrigation to meet the crop's water needs.
    *   **IR = ETc - Pe + Other Losses** (where "Other Losses" accounts for inefficiencies in the system)

*   **Gross Irrigation Requirement (GIR):** The total amount of water that needs to be applied by the irrigation system, accounting for system inefficiencies.
    *   **GIR = IR / Irrigation Efficiency**

**1.3 Factors Influencing Irrigation Requirement:**

*   **Crop Type and Growth Stage:** Different crops have different water needs, and these needs vary throughout their growth cycle.
*   **Climate:** Temperature, humidity, wind speed, and solar radiation significantly impact evapotranspiration.
*   **Soil Type:** Soil texture and structure affect water holding capacity, infiltration rate, and drainage.
*   **Irrigation System Efficiency:** The efficiency of the system in delivering water to the root zone.
*   **Management Practices:** Planting density, weeding, and mulching can influence water use.

**1.4 Calculation Example:**

Let's consider a wheat crop in a specific region.

*   **ETo:** 5 mm/day
*   **Kc for wheat:** 0.4 (initial stage), 0.8 (mid-season), 0.5 (late season)
*   **Average Kc for the growing period:** 0.7
*   **Effective Rainfall (Pe):** 2 mm/day
*   **Irrigation Efficiency:** 70% (0.7)

**Calculate the daily Crop Water Requirement (ETc):**
ETc = Kc * ETo = 0.7 * 5 mm/day = 3.5 mm/day

**Calculate the daily Irrigation Requirement (IR):**
IR = ETc - Pe = 3.5 mm/day - 2 mm/day = 1.5 mm/day

**Calculate the daily Gross Irrigation Requirement (GIR):**
GIR = IR / Irrigation Efficiency = 1.5 mm/day / 0.7 = 2.14 mm/day

---

### 2. Soil Water Balance

**2.1 Definition:**
Soil water balance is an accounting of the water entering and leaving a specific soil profile over a given period. It helps in understanding the soil moisture status and determining when and how much to irrigate.

**2.2 Components of Soil Water Balance:**

*   **Inflows:**
    *   **Irrigation:** Water applied through irrigation systems.
    *   **Rainfall:** Precipitation that infiltrates the soil.
    *   **Capillary Rise:** Upward movement of groundwater into the root zone.

*   **Outflows:**
    *   **Evapotranspiration (ET):** Water lost from the soil-plant system.
    *   **Deep Percolation (DP):** Water moving below the root zone.
    *   **Surface Runoff (RO):** Water flowing over the soil surface.
    *   **Subsurface Drainage:** Water removed by artificial drainage systems.

**2.3 The Soil Water Balance Equation:**

The fundamental equation for soil water balance is:

**ΔS = (I + R + CR) - (ET + DP + RO + SD)**

Where:
*   **ΔS:** Change in soil water storage in the root zone over a period.
*   **I:** Irrigation applied.
*   **R:** Rainfall.
*   **CR:** Capillary rise.
*   **ET:** Evapotranspiration.
*   **DP:** Deep percolation.
*   **RO:** Surface runoff.
*   **SD:** Subsurface drainage.

**2.4 Simplified Soil Water Balance (for irrigation scheduling):**

When focusing on irrigation scheduling, the equation can be simplified by considering only the primary inflows and outflows relevant to the root zone:

**ΔS = (Pe + I) - ET**

Where:
*   **Pe:** Effective rainfall (already accounted for runoff and deep percolation from rainfall).
*   **I:** Irrigation applied.
*   **ET:** Evapotranspiration.

**2.5 Application in Irrigation Scheduling:**

The soil water balance approach helps in:
*   **Determining deficit:** Identifying when the soil moisture content falls below a certain threshold (e.g., Field Capacity - Allowable Depletion).
*   **Quantifying irrigation needs:** Calculating the amount of water to apply to replenish the deficit.
*   **Optimizing irrigation timing:** Applying water when it is most needed, preventing water stress.

**2.6 Example of Soil Water Balance for Scheduling:**

Consider a sandy loam soil with a root zone depth of 0.6 m.

*   **Field Capacity (FC):** 20% by volume.
*   **Permanent Wilting Point (PWP):** 8% by volume.
*   **Available Water (AW):** FC - PWP = 12% by volume.
*   **Management Allowable Depletion (MAD):** 50% of AW.
*   **Allowable Depletion (AD):** 0.50 * 12% = 6% by volume.
*   **Readily Available Water (RAW):** AW - AD = 12% - 6% = 6% by volume.
*   **Lower Limit of Soil Moisture:** PWP + AD = 8% + 6% = 14% by volume.

Let's track the soil moisture over a few days:

| Day | Rainfall (mm) | Irrigation (mm) | ET (mm) | Initial Soil Moisture (mm) | Change in SM (mm) | Final Soil Moisture (mm) | Remarks |
| :-- | :------------ | :-------------- | :------ | :------------------------- | :---------------- | :----------------------- | :------ |
| 1   | 0             | 0               | 4       | 100 (16.7% v/v)            | -4                | 96 (16.0% v/v)           |         |
| 2   | 0             | 0               | 5       | 96 (16.0% v/v)             | -5                | 91 (15.2% v/v)           |         |
| 3   | 10            | 0               | 4       | 91 (15.2% v/v)             | +6 (Pe=10-4 runoff) | 97 (16.2% v/v)           | Effective rainfall = 10mm - 4mm runoff = 6mm |
| 4   | 0             | 0               | 5       | 97 (16.2% v/v)             | -5                | 92 (15.3% v/v)           |         |
| 5   | 0             | **25**          | 4       | 92 (15.3% v/v)             | +21               | 113 (18.8% v/v)          | Irrigation to replenish from 92mm to FC (120mm) |

*Calculation of water in root zone in mm:*
Root Zone Depth = 0.6 m = 600 mm
Water Storage (mm) = Soil Moisture Content (%) * Root Zone Depth (mm)

*   **Field Capacity (FC):** 0.20 * 600 mm = 120 mm
*   **Permanent Wilting Point (PWP):** 0.08 * 600 mm = 48 mm
*   **Available Water (AW):** 120 mm - 48 mm = 72 mm
*   **Allowable Depletion (AD):** 0.50 * 72 mm = 36 mm
*   **Lower Limit:** 48 mm + 36 mm = 84 mm

**On Day 5, before irrigation:** Soil moisture is 92 mm. The lower limit is 84 mm. Since 92 mm > 84 mm, no irrigation is immediately needed. However, if we want to replenish to Field Capacity (120 mm) based on ET, we would need 4 mm to cover the day's ET. The example assumes irrigation to bring it back to FC. Let's re-evaluate based on reaching the lower limit.

**Revised Example of Soil Water Balance for Scheduling:**

| Day | Rainfall (mm) | Irrigation (mm) | ET (mm) | Initial Soil Moisture (mm) | Change in SM (mm) | Final Soil Moisture (mm) | Remarks |
| :-- | :------------ | :-------------- | :------ | :------------------------- | :---------------- | :----------------------- | :------ |
| 1   | 0             | 0               | 4       | 100 (16.7% v/v)            | -4                | 96 (16.0% v/v)           |         |
| 2   | 0             | 0               | 5       | 96 (16.0% v/v)             | -5                | 91 (15.2% v/v)           |         |
| 3   | 10            | 0               | 4       | 91 (15.2% v/v)             | +6 (Pe=10-4 runoff) | 97 (16.2% v/v)           | Effective rainfall = 6mm |
| 4   | 0             | 0               | 5       | 97 (16.2% v/v)             | -5                | 92 (15.3% v/v)           |         |
| 5   | 0             | 0               | 4       | 92 (15.3% v/v)             | -4                | 88 (14.7% v/v)           |         |
| 6   | 0             | **32**          | 5       | 88 (14.7% v/v)             | +28               | 116 (19.3% v/v)          | Irrigation needed: 88mm - Lower Limit (84mm) + ET for day (5mm) = 39 mm. Let's irrigate to FC. |

**Irrigation Trigger:** On Day 6, the soil moisture is 88 mm. The lower limit is 84 mm. Since 88 mm > 84 mm, no irrigation is strictly required by the MAD rule. However, to avoid reaching the lower limit soon, we might irrigate.

**To irrigate to Field Capacity (120 mm):**
Water to apply = FC - Current Soil Moisture = 120 mm - 88 mm = 32 mm.
This application would bring the soil moisture to 120 mm.

---

### 3. Yield Response to Water

**3.1 Definition:**
Yield response to water describes the relationship between the amount of water applied to a crop and the resulting yield. It highlights how variations in water availability affect crop production.

**3.2 Key Concepts:**

*   **Water Stress:** Occurs when the water available in the root zone is insufficient to meet the crop's evapotranspiration demand, leading to reduced growth and yield.
*   **Optimal Water Use:** The range of water application where the crop exhibits maximum growth and yield.
*   **Waterlogging:** Excessive soil moisture that reduces aeration, hindering root function and potentially causing yield reduction.
*   **Water Use Efficiency (WUE):** The ratio of crop yield to the amount of water consumed by the crop.
    *   **WUE = Yield / ETc** (or sometimes Yield / Total Water Applied)

**3.3 Stages of Water Stress and Yield Impact:**

*   **Stage I (No Stress):** Water supply is sufficient to meet crop demand. Yield is at its maximum potential.
*   **Stage II (Mild Stress):** Water supply is slightly less than demand. ET may be slightly reduced, and growth may slow down. Yield reduction is minimal.
*   **Stage III (Moderate Stress):** Water supply is significantly less than demand. ET is reduced. Visible signs of stress (wilting) may occur. Yield reduction becomes more pronounced.
*   **Stage IV (Severe Stress):** Water supply is critically low. ET is severely reduced. Significant wilting, leaf rolling, and premature senescence occur. Yield is drastically reduced, potentially leading to crop failure.

**3.4 Sensitive Growth Stages:**
Certain growth stages are more critical for water supply than others. Water stress during these periods can have a disproportionately larger impact on the final yield. Examples include:

*   **Flowering and Pollination:** Crucial for seed/fruit development.
*   **Grain Filling:** Important for the accumulation of dry matter.
*   **Vegetative Growth:** Essential for developing the plant structure.

**3.5 Relative Yield (Ya/Ym):**
The ratio of actual yield (Ya) to maximum potential yield (Ym) under non-limiting conditions.

**3.6 Relative Water Supply (ETa/ETc):**
The ratio of actual evapotranspiration (ETa) to the crop water requirement (ETc).

**3.7 Yield-Water Relationship Curve:**
A graphical representation showing the relationship between relative yield and relative water supply. Typically, the curve is S-shaped:
*   Initially, a slight increase in water supply leads to a significant increase in yield.
*   As water supply increases, the yield response becomes less pronounced.
*   Beyond a certain point, further increases in water supply may not increase yield or can even decrease it due to waterlogging.

---

### 4. Production Functions

**4.1 Definition:**
Production functions in irrigation engineering are mathematical models that describe the relationship between water input (amount, timing, or frequency) and crop output (yield). They are used to optimize irrigation practices for maximum economic return or to analyze the impact of water availability on production.

**4.2 Types of Production Functions:**

*   **Linear Production Function:** Assumes a constant marginal product of water up to a certain point, after which yield ceases to increase.
    *   *Example:* Y = a + bW (for W <= W_opt), Y = Ym (for W > W_opt)
        *   Y = Yield
        *   W = Water applied
        *   a = Baseline yield
        *   b = Marginal product of water
        *   W_opt = Optimal water application

*   **Quadratic Production Function:** Assumes that the marginal product of water decreases as water application increases. This is a more realistic representation.
    *   *Example:* Y = a + bW - cW²
        *   Y = Yield
        *   W = Water applied
        *   a = Yield with no water
        *   b = Initial marginal product of water
        *   c = Factor reflecting diminishing returns

    To find the maximum yield, we take the derivative of Y with respect to W and set it to zero:
    dY/dW = b - 2cW = 0
    W_max_yield = b / 2c

*   **Square Root Production Function:** Another common functional form that captures diminishing returns.
    *   *Example:* Y = a + b√W

*   **Power Production Function (Cobb-Douglas type):**
    *   *Example:* Y = a * W^b
        *   Where 'b' is typically less than 1, indicating diminishing returns.

**4.3 Relative Yield Response Function (Hiler's Model):**
A commonly used model that relates relative yield reduction to relative evapotranspiration deficit.

**(1 - Ya/Ym) = ky * (1 - ETa/ETc)**

Where:
*   **Ya:** Actual yield.
*   **Ym:** Maximum potential yield.
*   **ETa:** Actual evapotranspiration.
*   **ETc:** Crop water requirement (potential evapotranspiration).
*   **ky:** Yield response factor (crop-specific sensitivity to water stress).

*   If **ky > 1**: Yield is more sensitive to water deficit.
*   If **ky < 1**: Yield is less sensitive to water deficit.
*   If **ky = 1**: Yield reduction is proportional to the water deficit.

**4.4 Application in Optimization:**

Production functions are used to determine the optimal amount of water to apply to maximize:
*   **Gross Yield:** Applying water up to the point of maximum yield.
*   **Net Return:** Considering the cost of water and the price of the crop. The optimal economic yield often occurs at a water application slightly less than that for maximum yield.

**4.5 Example using Quadratic Production Function:**

A crop's yield (Y) in kg/ha is related to the amount of irrigation water applied (W) in mm/season by the function:
Y = 1000 + 15W - 0.2W²

*   **Calculate the maximum potential yield and the water required for it.**
    *   dY/dW = 15 - 0.4W
    *   Set dY/dW = 0: 15 - 0.4W = 0 => W = 15 / 0.4 = 37.5 mm/season
    *   Maximum Yield (Ym) = 1000 + 15(37.5) - 0.2(37.5)²
    *   Ym = 1000 + 562.5 - 0.2(1406.25)
    *   Ym = 1000 + 562.5 - 281.25 = 1281.25 kg/ha

*   **If 30 mm of water is applied, what is the expected yield?**
    *   Y = 1000 + 15(30) - 0.2(30)²
    *   Y = 1000 + 450 - 0.2(900)
    *   Y = 1000 + 450 - 180 = 1270 kg/ha

---

### Practice Questions & Exercises

**Question 1:**
A farmer needs to irrigate a field. The crop water requirement (ETc) is 6 mm/day. The effective rainfall (Pe) is 1 mm/day. The irrigation system has an efficiency of 60%. Calculate the gross irrigation water required per day.

**Answer 1:**
*   Irrigation Water Requirement (IR) = ETc - Pe = 6 mm/day - 1 mm/day = 5 mm/day
*   Gross Irrigation Requirement (GIR) = IR / Irrigation Efficiency = 5 mm/day / 0.60 = 8.33 mm/day

**Question 2:**
A soil profile has a field capacity of 25% and a permanent wilting point of 10%. The available water is 15% by volume. The root zone depth is 0.8 m. If the Management Allowable Depletion (MAD) is 40%, calculate the readily available water in mm.

**Answer 2:**
*   Available Water (AW) = 15% by volume
*   Allowable Depletion (AD) = 0.40 * AW = 0.40 * 15% = 6% by volume
*   Readily Available Water (RAW) = AW - AD = 15% - 6% = 9% by volume
*   Root Zone Depth = 0.8 m = 800 mm
*   RAW in mm = RAW (%) * Root Zone Depth (mm) = 0.09 * 800 mm = 72 mm

**Question 3:**
The yield response to water for a specific crop is given by the equation: (1 - Ya/Ym) = 0.8 * (1 - ETa/ETc). If the actual evapotranspiration (ETa) is 80% of the crop water requirement (ETc), what is the percentage of yield reduction?

**Answer 3:**
*   (1 - Ya/Ym) = 0.8 * (1 - 0.80)
*   (1 - Ya/Ym) = 0.8 * (0.20)
*   (1 - Ya/Ym) = 0.16
*   This means the actual yield (Ya) is 16% less than the maximum potential yield (Ym).
*   Percentage of yield reduction = 16%

**Question 4:**
A crop yield function is given by Y = 200 + 10W - 0.1W², where Y is yield in kg/ha and W is water applied in mm/ha.
a) Determine the water application for maximum yield.
b) Calculate the maximum yield.
c) If water costs $0.50 per mm/ha and the crop is sold for $2.00 per kg, what is the optimal economic water application?

**Answer 4:**
a) **Water for maximum yield:**
    *   dY/dW = 10 - 0.2W
    *   Set dY/dW = 0 => 10 - 0.2W = 0 => W = 10 / 0.2 = 50 mm/ha

b) **Maximum yield:**
    *   Y_max = 200 + 10(50) - 0.1(50)²
    *   Y_max = 200 + 500 - 0.1(2500)
    *   Y_max = 200 + 500 - 250 = 450 kg/ha

c) **Optimal economic water application:**
    *   We need to maximize Net Return (NR).
    *   NR = (Yield * Price per kg) - (Water Applied * Cost per mm)
    *   NR = (Y * $2.00) - (W * $0.50)
    *   NR = (200 + 10W - 0.1W²) * 2.00 - 0.50W
    *   NR = 400 + 20W - 0.2W² - 0.50W
    *   NR = 400 + 19.5W - 0.2W²
    *   To find maximum NR, take the derivative with respect to W and set it to zero:
    *   d(NR)/dW = 19.5 - 0.4W
    *   Set d(NR)/dW = 0 => 19.5 - 0.4W = 0 => W = 19.5 / 0.4 = 48.75 mm/ha

---

### Important Points to Remember:

*   **Irrigation Requirement is a dynamic value:** It changes with crop, climate, and management.
*   **Soil Water Balance is crucial for irrigation scheduling:** It helps avoid both water stress and waterlogging.
*   **Critical growth stages are vital:** Water stress during these periods significantly impacts yield.
*   **Production functions are tools for optimization:** They help balance water use with economic returns.
*   **Irrigation efficiency is key:** Higher efficiency means less water is wasted, reducing gross irrigation needs.
*   **Understand the difference between IR and GIR:** IR is the plant's need, GIR is what the system must deliver.
*   **Waterlogging is detrimental:** It reduces oxygen availability to roots and can cause significant yield loss, just like water stress.
