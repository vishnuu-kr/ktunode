---
title: "Computation of crop water requirement by using the concept of duty and delta"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 3: Irrigation– Necessity, Benefits and ill effects"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d98"
status: "completed"
scrapedAt: "2026-05-20T18:49:22.377Z"
---
# Hydrology and Water Resources Engineering: Module 3 - Irrigation

## Topic: Computation of Crop Water Requirement using Duty and Delta

### 1. Introduction

This module focuses on understanding the fundamental concepts of irrigation, its necessity, benefits, and potential ill effects. Specifically, this topic delves into a key method for quantifying crop water requirements: the **Duty and Delta** concept. This concept is crucial for efficient water resource management in agriculture, enabling engineers to determine the amount of water needed for a specific crop and the area it can irrigate.

### 2. Learning Outcomes

Upon completion of this topic, you will be able to:

*   Define and explain the concepts of Delta, Duty, and Base Period.
*   Understand the relationship between Delta, Duty, and Base Period.
*   Compute crop water requirement using the Duty and Delta method.
*   Analyze the factors influencing Delta and Duty.
*   Apply these concepts to practical irrigation scenarios.

### 3. Key Concepts and Definitions

#### 3.1. Base Period ($B$)

*   **Definition:** The total period during which a crop is irrigated. It is the time elapsed from the first watering of a crop to its last watering.
*   **Significance:** It represents the duration for which water needs to be supplied to the crop, influencing the total water demand.
*   **Components:**
    *   **Cultural Period:** The total period from sowing to harvesting.
    *   **Irrigation Period:** The actual period during which irrigation is applied to the crop. The irrigation period is generally a fraction of the cultural period.
*   **Variations:** The base period varies significantly depending on the crop type, climate, and soil conditions. For example, short-duration crops like some vegetables might have a base period of 90-120 days, while long-duration crops like sugarcane or paddy can have base periods of 300-360 days.

#### 3.2. Delta ($\Delta$)

*   **Definition:** The total depth of water required by a crop during its entire base period, expressed in centimeters (cm) or meters (m). It represents the sum of all irrigation water applied and rainfall received during the base period that is effectively utilized by the crop.
*   **Significance:** It quantifies the total water needs of a crop over its growth cycle.
*   **Components of Water Requirement:** Delta accounts for various water needs, including:
    *   **Evapotranspiration ($ET$):** The combined loss of water from the soil surface by evaporation and from the plant surface by transpiration. This is the largest component.
    *   **Water lost due to soil percolation:** Water that seeps below the root zone.
    *   **Water needed for other purposes:** Such as preparing the soil, leaching salts, and wetting the soil to facilitate inter-cultivation operations.
*   **Typical Values:** Delta values are crop-specific and are determined through empirical studies and crop water requirement models. For instance, paddy might require a delta of 100-120 cm, while wheat might require 30-45 cm.

#### 3.3. Duty ($D$)

*   **Definition:** The total *area* of land that can be irrigated by a unit volume of water flowing continuously at the *field capacity* throughout the entire base period of the crop.
*   **Units:**
    *   Hectare per cumec (ha/cumec) - most common in India and other countries using metric system.
    *   Acre per cusec (acre/cusec) - common in the US.
*   **Significance:** Duty is a measure of water use efficiency at the field level. A higher duty indicates that a larger area can be irrigated with the same amount of water, signifying better water management.
*   **Factors Affecting Duty:**
    *   **Crop Type:** Different crops have different water requirements and transpiration rates.
    *   **Soil Type:** Sandy soils have higher percolation losses, leading to lower duty, while clay soils retain water better, resulting in higher duty.
    *   **Climate:** Higher temperatures, lower humidity, and higher wind speeds lead to increased evapotranspiration, reducing duty.
    *   **Irrigation Methods:** Efficient irrigation methods (e.g., drip, sprinkler) generally lead to higher duty than flood irrigation.
    *   **Water Application Efficiency:** Losses during conveyance and application (e.g., seepage, evaporation from channels, uneven distribution) reduce the net water available for the crop, thus reducing duty.
    *   **Field Slope and Layout:** Improper field leveling can lead to waterlogging or dry spots, affecting water use efficiency.
    *   **Depth of Root Zone:** Deeper root zones can access more soil moisture, potentially reducing the frequency of irrigation and improving duty.

#### 3.4. Correlation: Delta, Duty, and Base Period

The relationship between Delta, Duty, and Base Period is a cornerstone of irrigation water requirement calculations.

*   **Conceptual Link:**
    *   **Delta ($\Delta$)** represents the *total depth* of water needed.
    *   **Base Period ($B$)** represents the *time duration* over which this water is needed.
    *   **Duty ($D$)** represents the *area* that can be irrigated by a unit flow rate *over the entire base period*.

*   **Derivation of the Formula:**

    Let's consider a unit volume of water, say 1 cumec (cubic meter per second).

    1.  **Total Volume of Water Available:** Over the base period $B$ (in days), the total volume of water supplied by 1 cumec is:
        Volume = Flow Rate × Time
        Volume = $1 \text{ cumec} \times B \text{ days}$
        Since 1 cumec = 1 m³/s, and there are $24 \times 60 \times 60$ seconds in a day:
        Volume = $1 \frac{\text{m}^3}{\text{s}} \times B \text{ days} \times (24 \times 60 \times 60) \frac{\text{s}}{\text{day}}$
        Volume = $B \times 24 \times 60 \times 60 \text{ m}^3$

    2.  **Area Irrigated:** If the duty is $D$ hectares per cumec, then 1 cumec can irrigate an area of $D$ hectares.
        Area = $D$ hectares

    3.  **Depth of Water Supplied:** The total volume of water supplied to this area $D$ hectares is equal to the area multiplied by the depth of water supplied.
        Volume = Area × Depth
        Volume = $D \text{ hectares} \times \text{Depth}$

    4.  **Equating Volumes:** Now, we equate the total volume of water available from 1 cumec with the volume supplied to the irrigated area.
        $B \times 24 \times 60 \times 60 \text{ m}^3 = D \text{ hectares} \times \text{Depth}$

    5.  **Expressing Depth in meters:** We want to express the depth in meters. 1 hectare = 10,000 m².
        $B \times 24 \times 60 \times 60 \text{ m}^3 = (D \times 10000) \text{ m}^2 \times \text{Depth (in meters)}$

    6.  **Relating Depth to Delta:** The depth of water supplied in this equation is the *effective* depth of water provided by the flow rate over the base period. If we assume that the depth of water supplied is equal to the Delta ($\Delta$) required by the crop, and we express Delta in meters:
        $B \times 86400 \text{ m}^3 = D \times 10000 \text{ m}^2 \times \Delta (\text{in meters})$

    7.  **The Fundamental Formula:** Rearranging the equation to solve for Delta:
        $\Delta (\text{in meters}) = \frac{B \times 86400}{D \times 10000}$

    8.  **Converting Delta to centimeters:** Since Delta is usually expressed in centimeters, we multiply by 100:
        $\Delta (\text{in cm}) = \frac{B \times 86400}{D \times 10000} \times 100$
        $\Delta (\text{in cm}) = \frac{B \times 86400}{D \times 100}$
        $\Delta (\text{in cm}) = \frac{B \times 864}{D}$

    This is the most commonly used formula relating Delta (in cm), Base Period (in days), and Duty (in hectare/cumec).

    **Important variations:**

    *   **If Delta is in meters and Duty is in hectare/cumec:**
        $\Delta (\text{in meters}) = \frac{B \times 86400}{D \times 10000} = \frac{B}{D} \times 8.64$

    *   **If Duty is in acre/cusec and Delta is in feet:**
        $\Delta (\text{in feet}) = \frac{B \times 24 \times 3600}{D \times 43560}$ (where 1 acre = 43560 sq ft)
        $\Delta (\text{in feet}) = \frac{B}{D} \times \frac{24 \times 3600}{43560} = \frac{B}{D} \times 1.98$

    **We will primarily use the formula with Delta in cm and Duty in hectare/cumec.**

### 4. Computation of Crop Water Requirement using Duty and Delta

The Duty and Delta concept provides a direct method to determine the irrigation water requirement for a specific crop over a given area.

**Steps:**

1.  **Identify the Crop:** Determine the specific crop for which water requirement is to be calculated.
2.  **Determine Base Period ($B$):** Find the base period of the crop in days. This information is usually available from agricultural data or crop calendars.
3.  **Determine Delta ($\Delta$):** Find the delta for the crop in centimeters. This is a specific value for each crop, often determined through crop water requirement studies (e.g., using ETc calculations).
4.  **Determine Duty ($D$):** Find the duty for the crop in hectare/cumec. This represents the efficiency of water application in that region for that crop. It can be given directly or calculated based on factors affecting water use.
5.  **Calculate the Required Discharge:** Using the formula $\Delta = \frac{B \times 864}{D}$, we can rearrange it to find the discharge required at the canal outlet or head regulator to irrigate a specific area.

    The formula can be rewritten as:
    **Discharge (cumec) = $\frac{\text{Area (hectare)} \times \Delta (\text{cm})}{B (\text{days}) \times 864}$**

    This formula directly tells us how much water flow (in cumec) is needed continuously to irrigate a certain area of a specific crop for its entire base period, given its delta and duty.

### 5. Factors Influencing Delta and Duty (Revisited in Detail)

Understanding these factors is key to accurate computation and efficient water management.

**Factors Affecting Delta ($\Delta$):**

*   **Evapotranspiration (ET):** The primary driver of delta. Higher ET rates (due to higher temperatures, lower humidity, higher wind speed, more solar radiation) lead to higher delta.
*   **Crop Type:** Different crops have different physiological characteristics, root depths, and growth patterns, leading to varying ET rates and hence different delta values.
*   **Soil Type:** Soil moisture retention capacity affects how often irrigation is needed and the depth of water to be applied. Fine-textured soils generally require less frequent but larger applications compared to coarse-textured soils.
*   **Climate:** Rainfall, temperature, humidity, and wind speed directly influence ET and thus the delta. Effective rainfall during the base period reduces the amount of irrigation water required, effectively reducing the "irrigation delta."
*   **Water Application Efficiency:** Losses during application (e.g., deep percolation below the root zone due to over-irrigation, runoff) mean that a larger amount of gross water is needed to meet the crop's net requirement.

**Factors Affecting Duty ($D$):**

*   **Water Conveyance Efficiency ($E_c$):** Losses due to seepage, evaporation, and operational inefficiencies in canals and watercourses. Lower conveyance efficiency means less water reaches the field, thus lowering the duty.
*   **Water Application Efficiency ($E_a$):** Losses during irrigation application at the field level, such as deep percolation, surface runoff, and uneven distribution. Lower application efficiency reduces the net water available to the crop, lowering the duty.
*   **Crop Water Requirement (Delta):** A crop with a higher delta generally requires more water, and if the available water is fixed, it will irrigate a smaller area, leading to lower duty.
*   **Base Period ($B$):** A longer base period means that the unit discharge needs to supply water for a longer duration. For the same total volume of water *provided per unit time*, a longer base period implies a smaller area can be irrigated, hence lower duty.
*   **Soil Type:** Sandy soils lead to higher percolation losses, reducing application efficiency and thus duty.
*   **Topography/Field Slope:** Steep slopes can cause excessive runoff, reducing application efficiency and duty.
*   **Method of Irrigation:** Drip and sprinkler irrigation are generally more efficient than flood irrigation, leading to higher duty.

The relationship between Duty and these efficiencies can be expressed as:

**Gross Duty ($D_g$)**: The duty calculated based on the water supplied at the head of the watercourse.
**Field Duty ($D_f$)**: The duty calculated based on the water delivered at the field.
**Cultural Duty ($D_c$)**: The duty calculated based on the water *effectively used* by the crop (equivalent to irrigating an area with the net water requirement).

$D_f = D_g \times E_c$
$D_c = D_f \times E_a = D_g \times E_c \times E_a$

In the formula $\Delta = \frac{B \times 864}{D}$, the 'D' used is typically the **Field Duty** or **Cultural Duty**, depending on what is available or assumed. When calculating the discharge required from a canal, we often use the **Gross Duty** to account for conveyance losses.

### 6. Examples

**Example 1: Calculating Discharge for Irrigation**

*   **Problem:** A crop requires a delta of 45 cm and has a base period of 120 days. The field duty for this crop is 1200 hectare/cumec. Calculate the irrigation discharge required at the field outlet to irrigate 100 hectares of this crop.

*   **Solution:**
    *   Given:
        *   $\Delta = 45$ cm
        *   $B = 120$ days
        *   $D = 1200$ hectare/cumec
        *   Area = 100 hectares

    *   Using the formula for Discharge:
        Discharge (cumec) = $\frac{\text{Area (hectare)} \times \Delta (\text{cm})}{B (\text{days}) \times 864}$

    *   Substitute the values:
        Discharge = $\frac{100 \times 45}{120 \times 864}$
        Discharge = $\frac{4500}{103680}$
        Discharge $\approx 0.0434$ cumec

    *   **Answer:** The irrigation discharge required at the field outlet is approximately 0.0434 cumec.

**Example 2: Calculating Delta**

*   **Problem:** For a particular crop, the base period is 100 days. The irrigation canal supplying water to the field has a discharge of 2 cumec, and it irrigates an area of 200 hectares. Assuming the duty is 1000 hectare/cumec, calculate the delta for the crop in cm.

*   **Solution:**
    *   Given:
        *   $B = 100$ days
        *   Discharge = 2 cumec
        *   Area = 200 hectares
        *   $D = 1000$ hectare/cumec

    *   We can first find the duty based on the given discharge and area:
        Duty ($D$) = $\frac{\text{Area}}{\text{Discharge}} = \frac{200 \text{ hectares}}{2 \text{ cumec}} = 100$ hectare/cumec

    *   Now, use the formula to find Delta:
        $\Delta (\text{cm}) = \frac{B \times 864}{D}$

    *   Substitute the values:
        $\Delta = \frac{100 \times 864}{100}$
        $\Delta = 864$ cm

    *   **Wait!** This value of 864 cm seems unusually high. Let's re-examine the problem statement and the given duty. The problem states a duty of 1000 hectare/cumec, but then provides a scenario where 2 cumec irrigates 200 hectares, implying a duty of 100 hectare/cumec. This discrepancy highlights the importance of consistent data.

    *   **Let's assume the duty of 1000 hectare/cumec is the correct field duty to use for calculation as stated.** In this case, the area irrigated by 2 cumec would be $2 \times 1000 = 2000$ hectares. The problem statement seems to have a mismatch in values.

    *   **Let's rephrase the problem to be consistent and demonstrate the calculation:**
        **Revised Problem:** A crop requires irrigation for a base period of 100 days. The field duty for this crop is 1000 hectare/cumec. Calculate the delta for the crop in cm.

    *   **Revised Solution:**
        *   Given:
            *   $B = 100$ days
            *   $D = 1000$ hectare/cumec
        *   Using the formula:
            $\Delta (\text{cm}) = \frac{B \times 864}{D}$
        *   Substitute the values:
            $\Delta = \frac{100 \times 864}{1000}$
            $\Delta = \frac{86400}{1000}$
            $\Delta = 86.4$ cm

        *   **Answer:** The delta for the crop is 86.4 cm. This is a more realistic value for some crops like sugarcane or paddy.

**Example 3: Calculating Base Period**

*   **Problem:** For a crop, the delta is 50 cm and the field duty is 1500 hectare/cumec. If the required discharge for irrigating 150 hectares is 0.5 cumec, calculate the base period of the crop in days.

*   **Solution:**
    *   Given:
        *   $\Delta = 50$ cm
        *   $D = 1500$ hectare/cumec
        *   Area = 150 hectares
        *   Discharge = 0.5 cumec

    *   First, calculate the duty from the given discharge and area:
        Duty ($D$) = $\frac{\text{Area}}{\text{Discharge}} = \frac{150 \text{ hectares}}{0.5 \text{ cumec}} = 300$ hectare/cumec

    *   **Again, there is a discrepancy in the given data.** The problem states a duty of 1500 hectare/cumec but then provides values that yield a duty of 300 hectare/cumec. This indicates an error in the problem statement.

    *   **Let's assume the duty of 1500 hectare/cumec is correct and recalculate the required discharge or use the stated duty for calculation.**

    *   **Revised Problem:** A crop requires a delta of 50 cm and has a field duty of 1500 hectare/cumec. Calculate the base period of the crop in days. (We ignore the discharge and area values for now, as they seem inconsistent with the stated duty).

    *   **Revised Solution:**
        *   Given:
            *   $\Delta = 50$ cm
            *   $D = 1500$ hectare/cumec
        *   Using the formula:
            $\Delta = \frac{B \times 864}{D}$
        *   Rearrange to solve for B:
            $B = \frac{\Delta \times D}{864}$
        *   Substitute the values:
            $B = \frac{50 \times 1500}{864}$
            $B = \frac{75000}{864}$
            $B \approx 86.8$ days

        *   **Answer:** The base period of the crop is approximately 86.8 days.

    *   **Alternatively, if we assume the area (150 ha) and discharge (0.5 cumec) are correct, implying a duty of 300 ha/cumec:**
        *   Given:
            *   $\Delta = 50$ cm
            *   $D = 300$ hectare/cumec (calculated)
        *   Using the formula:
            $B = \frac{\Delta \times D}{864}$
        *   Substitute the values:
            $B = \frac{50 \times 300}{864}$
            $B = \frac{15000}{864}$
            $B \approx 17.36$ days

        *   **Answer:** This would imply a base period of about 17.36 days, which is extremely short for most crops and highly unrealistic. This further confirms the initial data inconsistency.

    *   **Crucial Takeaway from Examples:** Always check for consistency in given data. The relationship between Duty, Delta, and Base Period is fundamental, and inconsistent values can lead to absurd results.

### 7. Practice Questions

1.  Define Delta, Duty, and Base Period. Explain their significance in irrigation engineering.
2.  Derive the formula relating Delta (in cm), Base Period (in days), and Duty (in hectare/cumec).
3.  A crop has a base period of 150 days and requires a delta of 60 cm. If the field duty is 1400 hectare/cumec, calculate the discharge required at the field outlet to irrigate 50 hectares of this crop.
4.  For a particular crop, the delta is 40 cm and the base period is 110 days. If the irrigation department has allocated a discharge of 1.5 cumec to irrigate an area of 1200 hectares, calculate the actual field duty.
5.  Explain how soil type and climate influence the duty of irrigation water.

### 8. Answers to Practice Questions

1.  **Delta:** Total depth of water required by a crop during its entire base period (in cm or m). It represents the crop's water needs.
    **Duty:** The area of land that can be irrigated by a unit discharge (1 cumec) flowing continuously throughout the entire base period of the crop (in hectare/cumec or acre/cusec). It's a measure of water use efficiency.
    **Base Period:** The total period from the first watering to the last watering of a crop (in days). It defines the duration for which water must be supplied.
    Significance: These parameters are essential for designing irrigation systems, allocating water resources, and determining crop water requirements efficiently.

2.  Derivation:
    Let $\Delta$ be the delta in meters, $B$ be the base period in days, and $D$ be the duty in hectare/cumec.
    A discharge of 1 cumec provides a total volume of water over $B$ days as:
    Volume = $1 \frac{\text{m}^3}{\text{s}} \times B \text{ days} \times (24 \times 60 \times 60) \frac{\text{s}}{\text{day}} = 86400 \times B \text{ m}^3$.
    This volume irrigates an area of $D$ hectares.
    Area in m$^2$ = $D \times 10000 \text{ m}^2$.
    The depth of water supplied is $\Delta$ (in meters).
    Volume = Area $\times$ Depth
    $86400 \times B \text{ m}^3 = (D \times 10000 \text{ m}^2) \times \Delta (\text{m})$
    $\Delta (\text{m}) = \frac{86400 \times B}{10000 \times D} = \frac{8.64 \times B}{D}$
    Converting $\Delta$ to cm:
    $\Delta (\text{cm}) = \Delta (\text{m}) \times 100 = \frac{8.64 \times B}{D} \times 100 = \frac{864 \times B}{D}$.
    Thus, $\Delta = \frac{B \times 864}{D}$ (where $\Delta$ is in cm, $B$ in days, $D$ in hectare/cumec).

3.  **Calculation:**
    Given: $\Delta = 60$ cm, $B = 150$ days, $D = 1400$ hectare/cumec, Area = 50 hectares.
    Discharge (cumec) = $\frac{\text{Area} \times \Delta}{B \times 864}$
    Discharge = $\frac{50 \times 60}{150 \times 864} = \frac{3000}{129600} \approx 0.0231$ cumec.
    **Answer:** The discharge required is approximately 0.0231 cumec.

4.  **Calculation:**
    Given: $\Delta = 40$ cm, $B = 110$ days.
    Discharge = 1.5 cumec, Area = 1200 hectares.
    Field Duty ($D$) = $\frac{\text{Area}}{\text{Discharge}} = \frac{1200 \text{ hectares}}{1.5 \text{ cumec}} = 800$ hectare/cumec.
    **Answer:** The actual field duty is 800 hectare/cumec.

5.  **Influence of Soil Type and Climate on Duty:**
    *   **Soil Type:**
        *   **Sandy Soils:** Have high percolation rates and low water holding capacity. This leads to greater water loss through deep percolation and requires more frequent irrigation. Consequently, application efficiency is reduced, leading to a **lower duty**.
        *   **Clayey Soils:** Have low percolation rates and high water holding capacity. They retain water for longer periods, reducing the frequency of irrigation and minimizing deep percolation losses. This results in higher application efficiency and thus a **higher duty**.
    *   **Climate:**
        *   **High Temperature, Low Humidity, High Wind Speed:** These conditions lead to high evapotranspiration (ET) rates. Crops will require larger quantities of water (higher delta). If the available water supply is limited, a larger delta means a smaller area can be irrigated by a unit discharge, resulting in a **lower duty**.
        *   **Cooler Temperatures, Higher Humidity, Low Wind Speed:** These conditions lead to lower ET rates, thus lower delta. With less water required, a unit discharge can irrigate a larger area, resulting in a **higher duty**.

### 9. Important Points to Remember

*   The formula $\Delta (\text{cm}) = \frac{B \times 864}{D}$ is fundamental. Ensure units are consistent.
*   Duty is a measure of efficiency. Higher duty means more efficient water use.
*   Delta represents the total water depth, accounting for ET, percolation, and other crop needs.
*   Factors influencing Delta (ET, climate, crop type) and Duty (efficiencies, soil, climate) must be considered for accurate planning.
*   Always verify the consistency of given data in problems, as inconsistencies can lead to erroneous results.
*   The 'D' in the formula typically refers to the field duty or cultural duty. When calculating discharge from a main canal, gross duty might be used to account for conveyance losses.

This comprehensive set of notes should provide a strong foundation for understanding and applying the Duty and Delta concept in irrigation water requirement computations.
