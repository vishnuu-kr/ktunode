---
title: "Consistency – Atterberg Limits and indices – Plasticity charts – activity of soil-laboratory tests for Liquid Limit (Casagrande’s apparatus and cone penetrometer), Plastic Limit and Shrinkage Limit - Numerical problems"
subject: "SOIL MECHANICS"
module: "Module 2: Index properties : Sieve analysis, Hydrometer analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810976"
status: "completed"
scrapedAt: "2026-05-20T18:46:59.262Z"
---
# Soil Mechanics: Module 2 - Index Properties: Consistency & Atterberg Limits

This module delves into the **consistency** of fine-grained soils, which describes their behavior at different moisture contents. We will explore the **Atterberg Limits** and their associated indices, how these are determined in the lab, and their significance in classifying and predicting soil behavior.

---

## 1. Introduction to Consistency

**Consistency** refers to the ease with which a soil can be deformed or flowed. It is a qualitative description that is highly dependent on the moisture content of the soil. For fine-grained soils (silt and clay), the transition between different states of consistency is marked by specific moisture content values.

---

## 2. Atterberg Limits

The Atterberg Limits, developed by Albert Atterberg, define the moisture content ranges at which fine-grained soils change from one semi-solid state to another. These limits are crucial for soil classification and understanding their engineering properties.

### 2.1. Liquid Limit (LL)

*   **Definition:** The arbitrary **lower limit of the liquid state** at which a soil possesses sufficient moisture content to flow under its own weight. It is defined as the moisture content at which a groove made in a soil mass closes over a distance of 12.5 mm (1/2 inch) when the cup is given 25 drops.
*   **Significance:**
    *   Indicates the susceptibility of a soil to liquefaction.
    *   Higher LL generally means a more plastic or clayey soil.
    *   Related to the amount of fine clay particles and their surface activity.
*   **Units:** Percentage (%) of dry weight of soil.

### 2.2. Plastic Limit (PL)

*   **Definition:** The arbitrary **lower limit of the plastic state** at which a soil can no longer be molded or rolled into a thread approximately 3 mm (1/8 inch) in diameter without breaking.
*   **Significance:**
    *   Represents the moisture content at which a soil transitions from a plastic state to a semi-solid state.
    *   Lower PL generally indicates a more granular or less clayey soil.
*   **Units:** Percentage (%) of dry weight of soil.

### 2.3. Shrinkage Limit (SL)

*   **Definition:** The arbitrary **lowest moisture content** at which a soil mass ceases to shrink when dried. It is the point where the soil reaches its minimum volume.
*   **Significance:**
    *   Indicates the volume change characteristics of a soil upon drying.
    *   Soils with low shrinkage limits have greater potential for shrinkage and swelling.
    *   Important for soils that experience significant drying, such as in arid or semi-arid climates.
*   **Units:** Percentage (%) of dry weight of soil.

---

## 3. Consistency Indices

These indices provide a quantitative measure of the consistency of a soil at a given moisture content, comparing it to the Atterberg Limits.

### 3.1. Plasticity Index (PI)

*   **Definition:** The **difference between the Liquid Limit (LL) and the Plastic Limit (PL)**.
*   **Formula:** $PI = LL - PL$
*   **Significance:**
    *   Measures the range of moisture content over which a soil exhibits plastic behavior.
    *   A higher PI indicates a greater degree of plasticity.
    *   Soils with PI = 0 are non-plastic.
*   **Units:** Percentage (%)

### 3.2. Liquidity Index (LI)

*   **Definition:** A measure of the **relative consistency** of a soil at its natural moisture content. It compares the natural moisture content ($w_n$) to the LL and PI.
*   **Formula:** $LI = \frac{w_n - PL}{PI}$
*   **Significance:**
    *   $LI = 0$: Soil is at its plastic limit.
    *   $LI = 1$: Soil is at its liquid limit.
    *   $LI > 1$: Soil is in a liquid or softer state than liquid limit.
    *   $LI < 0$: Soil is in a semi-solid state or drier than plastic limit.
    *   A higher LI indicates a softer or more liquid consistency.
*   **Units:** Dimensionless

### 3.3. Shrinkage Index (SI)

*   **Definition:** The **difference between the Plastic Limit (PL) and the Shrinkage Limit (SL)**.
*   **Formula:** $SI = PL - SL$
*   **Significance:**
    *   Represents the range of moisture content over which shrinkage occurs.
    *   A higher SI indicates a greater potential for shrinkage.
*   **Units:** Percentage (%)

---

## 4. Plasticity Charts

Plasticity charts are graphical tools used to classify fine-grained soils based on their LL and PI. The most common chart is the **Unified Soil Classification System (USCS) Plasticity Chart**, developed by Arthur Casagrande.

### 4.1. USCS Plasticity Chart

*   **Axes:**
    *   **X-axis:** Liquid Limit (LL)
    *   **Y-axis:** Plasticity Index (PI)
*   **Key Lines:**
    *   **A-Line (Casagrande's A-line):** Separates clays from silts. The equation for the A-line is generally given as:
        $PI = 0.73 \times (LL - 20)$
        *   Soils above the A-line are generally considered **clays**.
        *   Soils below the A-line are generally considered **silts**.
    *   **U-Line (Unified Soil Classification System Line):** An empirical line that represents the upper limit of plasticity for soils. It helps further refine classification within the clay and silt categories.
*   **Regions:** The chart is divided into regions for different soil classifications (e.g., CL, CH, ML, MH, OL, OH).

### 4.2. Interpreting the Plasticity Chart

*   **Low LL (< 35), Low PI:** Inorganic silts and clays, silty or clayey fine sands, or clayey silts with slight plasticity. (e.g., ML, CL)
*   **Intermediate LL (35-50), Intermediate PI:** Lean clays, silt-clay mixtures. (e.g., CL)
*   **High LL (> 50), High PI:** Fat clays, highly plastic clays. (e.g., CH)
*   **Low LL (< 35), Intermediate PI:** Organic silts and clays, silty or clayey fine sands with slight plasticity. (e.g., ML, OL)
*   **High LL (> 50), Intermediate PI:** Elastic silts, silts with medium plasticity, silts with high plasticity, clays with medium plasticity, organic clays of medium to high plasticity. (e.g., MH, OH)

---

## 5. Activity of Soil

*   **Definition:** The **ratio of the Plasticity Index (PI) to the percentage of clay-sized particles** (finer than 2 µm) in the soil.
*   **Formula:** $Activity (A_c) = \frac{PI}{\% \text{clay content}}$
*   **Significance:**
    *   **Low Activity (Ac < 0.5):** Illite, Chlorite (e.g., Red soils, common in many parts of India). These clays have a low tendency to swell and shrink.
    *   **Normal Activity (0.5 < Ac < 2.0):** Montmorillonite, Kaolinite (e.g., Typical clays). These clays exhibit moderate swelling and shrinkage.
    *   **High Activity (Ac > 2.0):** Montmorillonite, Halloysite (e.g., Black cotton soils in India). These clays are highly expansive and prone to significant volume changes due to moisture variations.
*   **Units:** Dimensionless

---

## 6. Laboratory Tests for Atterberg Limits

These tests are performed on the **finer fraction of the soil (passing the No. 40 sieve, 0.425 mm)**. The soil is typically prepared by mixing with distilled water to achieve the desired consistency.

### 6.1. Liquid Limit Test

#### 6.1.1. Casagrande's Apparatus Method

*   **Apparatus:**
    *   Liquid Limit device (cup, rammer, cam mechanism)
    *   Mixing palette and spatula
    *   Grooving tool
    *   Oven
    *   Weighing balance
    *   Containers (e.g., dishes)
*   **Procedure:**
    1.  A representative sample of the soil passing the No. 40 sieve is mixed with distilled water on a mixing palette to form a smooth paste.
    2.  The paste is placed in the brass cup of the Casagrande apparatus, leveling it with the spatula.
    3.  A groove is made in the center of the soil mass using the grooving tool.
    4.  The handle of the apparatus is turned at a rate of 2 revolutions per second, causing the cup to drop and impact the base.
    5.  The number of drops required for the two halves of the soil to meet across the groove for a length of 12.5 mm is recorded.
    6.  A small portion of the soil from the closed groove is collected in a pre-weighed container and its mass is determined.
    7.  The container is placed in an oven at 105-110°C until constant weight is achieved to determine the dry mass of the soil.
    8.  Steps 1-7 are repeated for at least three different moisture contents to obtain a range of drops and corresponding moisture contents.
*   **Results:** A flow curve is plotted with the number of drops on the x-axis (logarithmic scale) and the moisture content on the y-axis.
*   **Determination of LL:** The moisture content corresponding to 25 drops on the flow curve is taken as the Liquid Limit (LL).

#### 6.1.2. Cone Penetrometer Method

*   **Apparatus:**
    *   Cone penetrometer apparatus (with a standard cone of specified dimensions and weight)
    *   Liquid Limit device
    *   Mixing palette and spatula
    *   Oven
    *   Weighing balance
    *   Containers
*   **Procedure:**
    1.  A soil paste with a moisture content slightly wetter than anticipated LL is placed in the cone penetrometer cup.
    2.  The cone is released and allowed to penetrate the soil under its own weight.
    3.  The depth of penetration is measured. The LL is the moisture content at which the cone penetrates to a depth of 20 mm.
    4.  If the penetration is less than 20 mm, the soil is too dry. If it's more than 20 mm, the soil is too wet.
    5.  The soil is adjusted to different moisture contents, and the penetration is measured for each.
    6.  A graph is plotted with the cone penetration depth on the x-axis and the moisture content on the y-axis.
*   **Determination of LL:** The moisture content corresponding to a cone penetration of 20 mm is the Liquid Limit (LL).

**Comparison of Methods:**
*   The cone penetrometer method is generally considered faster and more reproducible than the Casagrande method.
*   The cone penetrometer method directly measures the fluidity, whereas the Casagrande method indirectly measures it through the closure of a groove.

### 6.2. Plastic Limit Test

*   **Apparatus:**
    *   Ground glass plate or non-stick surface
    *   Mixing palette and spatula
    *   Oven
    *   Weighing balance
    *   Containers
*   **Procedure:**
    1.  A portion of the soil sample (passing the No. 40 sieve) is mixed with distilled water to a consistency that is easily rollable.
    2.  The soil is rolled with the fingers on the ground glass plate into a ball.
    3.  The ball is then rolled into a thread about 3 mm in diameter by rolling it between the fingers on the ground glass plate.
    4.  If the soil breaks into small pieces before reaching the 3 mm diameter thread, it is still too dry. If it remains a coherent thread, it is too wet.
    5.  The process is repeated by adding a little water or allowing the soil to dry slightly until a thread of approximately 3 mm diameter can be formed, but it begins to crumble when its diameter is reduced to about 3 mm.
    6.  The soil that has been rolled into a thread is collected in a pre-weighed container.
    7.  The container is oven-dried to determine the dry mass of the soil.
*   **Determination of PL:** The moisture content of the soil when it crumbles at a thread diameter of 3 mm is the Plastic Limit (PL).

### 6.3. Shrinkage Limit Test

*   **Apparatus:**
    *   Shrinkage dish (porcelain dish with a flat bottom)
    *   Graduated cylinder
    *   Glass rod or stirrer
    *   Oven
    *   Weighing balance
    *   Brass rings (for initial volume measurement)
    *   Petroleum jelly or release agent
    *   Distilled water
*   **Procedure:**
    1.  A portion of the soil sample (passing the No. 40 sieve) is prepared into a stiff paste.
    2.  The inside of the shrinkage dish is coated with petroleum jelly.
    3.  The soil paste is carefully placed in the shrinkage dish and trimmed level with the top of the dish.
    4.  The soil is then oven-dried at 105-110°C until constant weight.
    5.  The final dry weight of the soil in the shrinkage dish is recorded ($W_{sd}$).
    6.  The dry soil in the shrinkage dish is carefully submerged in a graduated cylinder filled with water.
    7.  The initial volume of the dry soil ($V_{ssd}$) is determined by measuring the rise in the water level in the graduated cylinder.
    8.  Alternatively, the dry soil is coated with petroleum jelly, and its volume is measured directly using a pycnometer or by displacement in mercury.
*   **Determination of SL:** The Shrinkage Limit is calculated using the following formula:

    $SL = w_{initial} - \frac{(V_{ssd} - V_{sd}) \times \rho_w}{W_{sd}}$

    Where:
    *   $w_{initial}$ is the moisture content of the soil when placed in the shrinkage dish.
    *   $V_{ssd}$ is the volume of the dry soil mass.
    *   $V_{sd}$ is the volume of the dried soil in the shrinkage dish (which is the volume of the dish itself).
    *   $\rho_w$ is the density of water (1 g/cm³ or 1000 kg/m³).
    *   $W_{sd}$ is the dry weight of the soil.

    A more direct formula based on measured quantities is:

    $SL = w_1 - \frac{(V_1 - V_{dry})}{W_{dry}} \times \rho_w \times 100$

    Where:
    *   $w_1$ = Moisture content of the soil when it just fills the shrinkage dish.
    *   $V_1$ = Volume of the soil when it just fills the shrinkage dish (volume of the shrinkage dish).
    *   $V_{dry}$ = Volume of the oven-dried soil after it has shrunk. This is measured by submerging the dried soil sample in water.
    *   $W_{dry}$ = Dry weight of the soil.
    *   $\rho_w$ = Unit weight of water.

    *Important Note:* The shrinkage limit calculation is often simplified and directly derived from the measured quantities in the lab. The key is to find the moisture content at which further drying causes no change in volume.

---

## 7. Numerical Problems and Solutions

**Problem 1:**
A liquid limit test was performed on a soil sample, yielding the following data:

| Test No. | Number of Drops | Moisture Content (%) |
| :------- | :-------------- | :------------------- |
| 1        | 20              | 65.2                 |
| 2        | 28              | 58.5                 |
| 3        | 35              | 54.1                 |
| 4        | 45              | 49.8                 |

A plastic limit test on the same soil yielded a plastic limit of 24%.
If the natural moisture content of the soil is 30%, calculate:
a) The Liquid Limit (LL)
b) The Plasticity Index (PI)
c) The Liquidity Index (LI)

**Solution:**

First, we need to plot the flow curve (Number of Drops vs. Moisture Content) and determine the LL at 25 drops.

| Log(No. of Drops) | Number of Drops | Moisture Content (%) |
| :---------------- | :-------------- | :------------------- |
| 1.301             | 20              | 65.2                 |
| 1.447             | 28              | 58.5                 |
| 1.544             | 35              | 54.1                 |
| 1.653             | 45              | 49.8                 |

Plotting these points and drawing a best-fit line on a semi-log plot (Number of Drops on log scale, Moisture Content on linear scale), we find the moisture content corresponding to 25 drops.

From graphical interpolation (or linear interpolation between points 2 and 3, which bracket 25 drops):
Using points (28 drops, 58.5%) and (35 drops, 54.1%)
Slope = (54.1 - 58.5) / (35 - 28) = -4.4 / 7 = -0.6286

Moisture content at 25 drops = $58.5 + \frac{(25 - 28) \times (-0.6286)}{1} \times (-1)$  (Incorrect interpolation approach)

Let's use interpolation on the log scale for accuracy:
Points: (log 28, 58.5) and (log 35, 54.1)
log 28 ≈ 1.447
log 35 ≈ 1.544

We want the moisture content at log 25 ≈ 1.398.

Using linear interpolation:
$MC_{25} = MC_{28} + \frac{log(25) - log(28)}{log(35) - log(28)} \times (MC_{35} - MC_{28})$
$MC_{25} = 58.5 + \frac{1.398 - 1.447}{1.544 - 1.447} \times (54.1 - 58.5)$
$MC_{25} = 58.5 + \frac{-0.049}{0.097} \times (-4.4)$
$MC_{25} = 58.5 + (-0.505) \times (-4.4)$
$MC_{25} = 58.5 + 2.222$
$MC_{25} \approx 60.7\%$

**(a) Liquid Limit (LL) = 60.7%**

**(b) Plasticity Index (PI):**
$PI = LL - PL$
$PI = 60.7\% - 24\%$
**PI = 36.7%**

**(c) Liquidity Index (LI):**
$w_n = 30\%$
$LI = \frac{w_n - PL}{PI}$
$LI = \frac{30\% - 24\%}{36.7\%}$
$LI = \frac{6}{36.7}$
**LI ≈ 0.163**

---

**Problem 2:**
The following data were obtained from a consistency test on a soil sample:

| Test No. | Number of Drops | Moisture Content (%) |
| :------- | :-------------- | :------------------- |
| 1        | 25              | 48.0                 |
| 2        | 30              | 45.5                 |
| 3        | 40              | 42.0                 |

The plastic limit (PL) of the soil is 22% and its shrinkage limit (SL) is 15%. The percentage of clay-sized particles (finer than 2 µm) is 60%.

Calculate:
a) The Liquid Limit (LL)
b) The Plasticity Index (PI)
c) The Shrinkage Index (SI)
d) The Activity of the soil ($A_c$)

**Solution:**

**(a) Liquid Limit (LL):**
From the data, the LL is directly given for 25 drops.
**LL = 48.0%**

**(b) Plasticity Index (PI):**
$PI = LL - PL$
$PI = 48.0\% - 22\%$
**PI = 26.0%**

**(c) Shrinkage Index (SI):**
$SI = PL - SL$
$SI = 22\% - 15\%$
**SI = 7.0%**

**(d) Activity of the soil ($A_c$):**
% Clay content = 60%
$A_c = \frac{PI}{\% \text{clay content}}$
$A_c = \frac{26.0\%}{60\%}$
**$A_c \approx 0.433$**

---

## 8. Important Points to Remember

*   **Atterberg Limits are empirical tests** and depend on the specific procedures and equipment used.
*   These limits are applicable only to **fine-grained soils** (silt and clay). Coarse-grained soils (sand and gravel) are described by sieve analysis.
*   The **Plasticity Index (PI)** is a key parameter for classifying soils and predicting their behavior, especially regarding volume change and strength.
*   **Soils with PI = 0 are non-plastic.**
*   The **Casagrande's A-line** is a crucial boundary on plasticity charts separating clays from silts.
*   The **Liquidity Index (LI)** provides information about the current consistency of a soil at its natural moisture content.
*   **High activity soils** (like Black Cotton Soils) can experience significant volume changes (swelling and shrinkage) due to moisture variations, posing engineering challenges.
*   The **cone penetrometer method** for LL is generally preferred for its speed and reproducibility.
*   **Soil preparation** is critical for accurate Atterberg Limit results. Always use distilled water for testing.

---
This concludes Module 2, focusing on the consistency of soils and the Atterberg Limits. These properties are fundamental for understanding and classifying fine-grained soils in geotechnical engineering.
