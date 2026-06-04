---
title: "Consolidation Test"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 11: Consolidation Test"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba811010"
status: "completed"
scrapedAt: "2026-05-20T18:48:57.926Z"
---
# GEOTECHNICAL ENGINEERING LAB: Module 11 - Consolidation Test

This module focuses on the Consolidation Test, a crucial laboratory procedure used to determine the consolidation characteristics of cohesive soils. Understanding these characteristics is vital for predicting the settlement of structures built on such soils.

## Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the fundamental principles of consolidation.
*   Identify the components and operation of a consolidation test apparatus.
*   Perform the consolidation test procedures correctly.
*   Analyze the raw data obtained from the test to determine key consolidation parameters.
*   Interpret the results to predict settlement and understand soil behavior under load.
*   Explain the significance of consolidation in geotechnical engineering practice.

---

## 1. Introduction to Consolidation

### 1.1 What is Consolidation?

*   **Definition:** Consolidation is a time-dependent process of volume reduction in saturated cohesive soils due to the expulsion of pore water under applied external load.
*   **Mechanism:** When a load is applied to a saturated clay layer, the initial increase in total stress is carried entirely by the pore water pressure. As pore water escapes, the total stress is gradually transferred to the soil skeleton, causing the soil particles to rearrange and the void ratio to decrease, leading to settlement.
*   **Key Distinction:** Consolidation is often confused with compaction.
    *   **Compaction:** A rapid process occurring in unsaturated soils, driven by mechanical energy to expel air and reduce void ratio.
    *   **Consolidation:** A slow, time-dependent process in saturated soils, driven by the expulsion of pore water due to the dissipation of excess pore water pressure.

### 1.2 Terzaghi's Theory of Consolidation

*   **Foundation:** Karl Terzaghi's one-dimensional consolidation theory is the cornerstone of understanding this phenomenon.
*   **Assumptions:**
    *   Soil is saturated and homogeneous.
    *   Soil skeleton is elastic.
    *   Water is incompressible.
    *   Flow is one-dimensional (vertical).
    *   Pore water pressure dissipates uniformly with depth at any given time.
    *   The load increment is applied instantaneously.
*   **Governing Equation (One-Dimensional Consolidation):**
    $$ \frac{\partial u}{\partial t} = c_v \frac{\partial^2 u}{\partial z^2} $$
    Where:
    *   $u$ = excess pore water pressure
    *   $t$ = time
    *   $c_v$ = coefficient of consolidation
    *   $z$ = depth

### 1.3 Key Consolidation Parameters

These parameters are determined from the consolidation test and are crucial for settlement analysis:

*   **Coefficient of Consolidation ($c_v$):**
    *   **Definition:** A measure of how quickly a soil consolidates. It reflects the rate at which excess pore water pressure dissipates.
    *   **Units:** $m^2/s$ or $ft^2/day$.
    *   **Influencing Factors:** Permeability, void ratio, coefficient of compressibility.
*   **Coefficient of Volume Compressibility ($m_v$):**
    *   **Definition:** The change in volume per unit volume per unit change in effective stress. It represents the compressibility of the soil.
    *   **Relationship:** $m_v = \frac{a_v}{1+e_0}$, where $a_v$ is the coefficient of compressibility and $e_0$ is the initial void ratio.
    *   **Units:** $m^2/kN$ or $ft^2/kip$.
*   **Coefficient of Secondary Compression ($c_\alpha$):**
    *   **Definition:** Related to the time-dependent settlement that occurs after the primary consolidation is complete. It's due to physicochemical changes in the soil structure.
    *   **Units:** Dimensionless.
*   **Pre-consolidation Pressure ($p_c'$ or $\sigma_c'$):**
    *   **Definition:** The maximum effective vertical stress that a soil element has experienced in its geological history.
    *   **Significance:** Soils with $p_c'$ are called "overconsolidated" and will experience less settlement under the current applied load than "normally consolidated" soils (where the current stress is the highest experienced).
*   **Compression Index ($C_c$):**
    *   **Definition:** Represents the slope of the void ratio vs. logarithm of effective stress curve in the normally consolidated range.
    *   **Units:** Dimensionless.
    *   **Relationship:** $\Delta e = -C_c \log\left(\frac{\sigma_1'}{\sigma_0'}\right)$
*   **Recompression Index ($C_r$):**
    *   **Definition:** Represents the slope of the void ratio vs. logarithm of effective stress curve in the overconsolidated range.
    *   **Units:** Dimensionless.

---

## 2. The Consolidation Test Apparatus (Oedometer)

### 2.1 Components of the Oedometer

*   **Consolidation Cell (Oedometer Ring):** A rigid, usually stainless steel, ring that holds the soil specimen. It's designed to prevent lateral expansion.
*   **Porous Stones:** Placed above and below the soil specimen. These are permeable to water but prevent soil particles from escaping, allowing pore water to drain freely.
*   **Loading Pedestal:** A base that supports the soil specimen and allows water to drain from the bottom porous stone.
*   **Loading Frame:** Applies vertical loads to the specimen through a lever system.
*   **Dial Gauge (or Displacement Transducer):** Measures the vertical deformation (settlement) of the specimen.
*   **Water Bath/Container:** The entire apparatus is submerged in water to maintain saturation of the specimen.
*   **Weights:** Applied incrementally to the lever arm to increase the applied stress.

### 2.2 Principle of Operation

1.  A saturated soil specimen is placed in the consolidation ring with porous stones above and below.
2.  The apparatus is set up in the loading frame, and the dial gauge is zeroed.
3.  A seating pressure is applied to ensure good contact between the specimen and porous stones.
4.  The specimen is kept saturated in a water bath throughout the test.
5.  Incremental vertical loads are applied to the specimen through a lever system, typically doubling the applied stress at each stage (e.g., 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 kPa).
6.  For each load increment, the vertical deformation (settlement) is recorded at specified time intervals (e.g., 0.1, 0.25, 0.5, 1, 2, 4, 8, 16, 24, 48, 72, 96, 120 hours, etc.) until the settlement rate becomes negligible (primary consolidation is deemed complete).
7.  After the final load, the specimen is unloaded in increments, and deformations are recorded similarly.

---

## 3. Consolidation Test Procedure (Standard Method)

### 3.1 Specimen Preparation

*   **Undisturbed Samples:** Preferred for accurate results. Samples are carefully trimmed to fit snugly into the consolidation ring, ensuring no voids between the soil and the ring.
*   **Remolded Samples:** Prepared to a specific void ratio or dry density if studying remolded soil properties is required.

### 3.2 Test Setup

1.  **Weighing:** Weigh the consolidation ring with and without the specimen.
2.  **Assembly:** Place the bottom porous stone on the loading pedestal, then the soil specimen, followed by the top porous stone.
3.  **Water Saturation:** Submerge the entire assembly in the water bath.
4.  **Loading:** Place the loading frame, apply the seating load (typically 1 kPa or 5 kPa), and set the dial gauge to zero.
5.  **Initial Readings:** Record initial weight, dimensions, and dial gauge reading.

### 3.3 Loading and Data Recording

1.  **Load Increments:** Apply load increments, typically doubling the previous load (e.g., 1, 2, 4, 8, 16, ... kPa).
2.  **Time Intervals:** Record dial gauge readings (settlement) at predetermined time intervals. The duration of readings shortens for initial stages and lengthens as consolidation progresses.
3.  **Primary Consolidation Criteria:** Continue readings until the rate of settlement becomes very slow, indicating that primary consolidation is nearly complete. This might take 24-72 hours or more.
4.  **Unloading:** After the maximum load, apply unloading increments (usually half the final load in reverse) and record deformations at specified time intervals.
5.  **Final Readings:** After unloading, keep the specimen under a minimal load for a significant period (e.g., 24 hours) to allow for secondary compression stabilization.
6.  **Post-Test:** Remove the specimen, measure its final dimensions, and determine its water content. Weigh the ring, porous stones, and specimen.

---

## 4. Data Analysis and Interpretation

### 4.1 Raw Data Presentation

The raw data collected from the test is typically presented in tables:

| Load (kPa) | Effective Stress $\sigma'$ (kPa) | Time (min/hrs) | Dial Reading (mm) | Settlement $S$ (mm) |
| :--------- | :------------------------------ | :------------- | :---------------- | :------------------ |
| Initial    | 0                               | 0              | 0                 | 0                   |
| 1          | 1                               | 0.1, 0.25, ... | R1, R2, ...       | S1, S2, ...         |
| 2          | 2                               | 0.1, 0.25, ... | R3, R4, ...       | S3, S4, ...         |
| ...        | ...                             | ...            | ...               | ...                 |
| Unload 1   | $\sigma'_{max}$ - Load X        | ...            | ...               | ...                 |
| ...        | ...                             | ...            | ...               | ...                 |

### 4.2 Plotting the Results

Several plots are generated from the consolidated data:

*   **Settlement vs. Log of Time ($S$ vs. $\log t$):**
    *   This is the primary plot for determining $c_v$.
    *   For each load increment, plot settlement ($S$) on the y-axis against the logarithm of time ($t$) on the x-axis.
    *   The curve typically shows an initial steep slope (primary consolidation), followed by a flatter slope (secondary consolidation).

*   **Void Ratio vs. Log of Effective Stress ($e$ vs. $\log \sigma'$):**
    *   This plot is used to determine $p_c'$, $C_c$, and $C_r$.
    *   Calculate the initial void ratio ($e_0$).
    *   For each load increment, calculate the void ratio $e$ at the end of primary consolidation (or the point representing the stable settlement for that load) using:
        $$ e = e_0 - \frac{\Delta e}{1+e_0} = e_0 - \frac{\Delta H/(1+e_0)}{1+e_0} \approx e_0 - \frac{S}{H_0} $$
        Where $H_0$ is the initial specimen height. A more accurate formula is:
        $$ e = e_0 - \frac{S}{H_0} $$
        Note: This is an approximation. The exact calculation considers the strain. A better approach for calculating void ratio $e$ at any stage:
        $$ e = e_0 - \frac{S}{H_0/(1+e_0)} $$
        Or simply:
        $$ e = e_{initial} - \frac{\Delta H}{H_{initial}} $$
        where $H_{initial}$ is the initial height of the soil sample, and $S$ is the settlement. The initial void ratio $e_0$ is calculated from initial moisture content ($w_0$) and specific gravity of soil solids ($G_s$):
        $$ e_0 = \frac{w_0 G_s}{S_r} $$
        Assuming saturation ($S_r=1$), $e_0 = w_0 G_s$. The void ratio at any load increment $\sigma'$ can be calculated as:
        $$ e = e_0 - \frac{S}{H_0} $$
        Where $S$ is the settlement at that load, and $H_0$ is the initial height of the soil sample.
    *   Plot the calculated void ratios against the corresponding effective stresses ($\sigma' = \text{Applied Load} + \text{Back Pressure} - \text{Pore Water Pressure}$, but in lab tests, we typically use the applied total stress as the external stress $\sigma$, and the pore pressure is implicitly handled by the drainage. So, effective stress $\sigma' = \sigma_{applied}$).
    *   The curve will have an initial steeper slope (overconsolidated/recompression) and then a flatter slope (normally consolidated).

*   **Change in Void Ratio vs. Log of Effective Stress ($\Delta e$ vs. $\log \sigma'$):** Sometimes used to identify the pre-consolidation pressure.

### 4.3 Determination of Consolidation Parameters

#### 4.3.1 Coefficient of Consolidation ($c_v$)

*   **Log-Time Method (Casagrande's Method):**
    1.  For each load increment, plot $S$ vs. $\log t$.
    2.  Identify the steepest initial portion of the curve (primary consolidation).
    3.  Extend the initial straight-line portion of the curve (A).
    4.  Extend the final, flatter portion of the curve (C).
    5.  The intersection of lines A and C is point B. The time corresponding to point B is $t_B$.
    6.  The time corresponding to 90% consolidation ($t_{90}$) is found by multiplying $t_B$ by a factor (e.g., 1.15 for a theoretical logarithmic curve).
    7.  Alternatively, find the time $t_{100}$ (which corresponds to point B) and the time $t_{50}$ (which is approximately $0.19 t_{100}$ for the theoretical curve). The time for 50% consolidation ($t_{50}$) can be directly determined from the plot by identifying the point on the initial straight line that is half the difference between the extrapolated zero settlement and the extrapolated infinite settlement.
    8.  Calculate $c_v$ using:
        $$ c_v = \frac{0.848 \times d^2}{t_{50}} $$
        or
        $$ c_v = \frac{0.197 \times d^2}{t_{0.9}} $$
        Where:
        *   $d$ = thickness of the soil specimen (e.g., if drainage is on both sides, $d$ is the specimen height; if on one side, $d$ is twice the specimen height).
        *   $t_{50}$ or $t_{0.9}$ = time for 50% or 90% consolidation for that load increment.

*   **Square-Root-Time Method (Taylor's Method):**
    1.  For each load increment, plot $S$ vs. $\sqrt{t}$.
    2.  The curve is a straight line initially, which then curves.
    3.  Extend the initial straight-line portion. The intersection of this line with the y-axis gives the extrapolated settlement at $t=0$.
    4.  Find the point on the initial straight line that corresponds to 90% of the extrapolated total primary settlement for that increment. The time at this point is $t_{90}$.
    5.  Calculate $c_v$ using:
        $$ c_v = \frac{0.848 \times d^2}{t_{90}} $$
        Where $d$ is the drainage path length.

    **Note:** The Log-Time method is generally preferred for fine-grained soils, while the Square-Root-Time method is better for coarser materials where the initial portion is more pronounced.

#### 4.3.2 Pre-consolidation Pressure ($p_c'$ or $\sigma_c'$)

*   **Log-Time Method (Casagrande's Method):**
    1.  On the $S$ vs. $\log t$ plot for each load increment, identify the segment with the minimum curvature (least variation in slope). This segment is considered to represent the end of primary consolidation.
    2.  Within this segment, find the point of maximum curvature (where the slope is steepest). This point is often referred to as point "X" or the inflection point.
    3.  Draw a horizontal line through point X.
    4.  Draw a tangent to the curve at point X (tangent line T).
    5.  Bisect the angle formed by the horizontal line and the tangent line.
    6.  The line that bisects this angle (bisector line B) is parallel to the initial straight-line portion of the consolidation curve.
    7.  Take the point on the actual consolidation curve that corresponds to the end of primary consolidation at the highest load increment. This point represents the ultimate settlement for that increment.
    8.  From the $e$ vs. $\log \sigma'$ curve, the void ratio at the end of primary consolidation for each load increment is plotted. The $e$ vs. $\log \sigma'$ curve will exhibit a change in slope.
    9.  The pre-consolidation pressure ($p_c'$) is the effective stress corresponding to the break in the $e$ vs. $\log \sigma'$ curve. This break signifies the transition from the overconsolidated to the normally consolidated state.
    10. To accurately determine $p_c'$, on the $e$ vs. $\log \sigma'$ curve, identify the point of maximum curvature. Draw a tangent at this point. Draw a horizontal line through this point. Bisect the angle between the tangent and the horizontal line. The point where this bisector intersects the curve is taken as the endpoint of the normally consolidated region. The corresponding stress is the pre-consolidation pressure.

*   **Alternative Method (Simpler approach for understanding):**
    1.  Plot $e$ vs. $\log \sigma'$.
    2.  Identify the highest point on the curve where the slope significantly changes (from steep to flatter). This point is related to the pre-consolidation pressure.
    3.  The stress at this point is the $p_c'$.

#### 4.3.3 Compression Index ($C_c$) and Recompression Index ($C_r$)

*   **From the $e$ vs. $\log \sigma'$ plot:**
    *   **$C_c$**: The slope of the flatter, normally consolidated portion of the curve is $C_c$.
        $$ C_c = -\frac{\Delta e}{\Delta \log \sigma'} $$
        (The negative sign is because $e$ decreases as $\sigma'$ increases).
    *   **$C_r$**: The slope of the steeper, overconsolidated/recompression portion of the curve is $C_r$.
        $$ C_r = -\frac{\Delta e}{\Delta \log \sigma'} $$

#### 4.3.4 Coefficient of Volume Compressibility ($m_v$)

*   **From the $e$ vs. $\log \sigma'$ plot:**
    *   $m_v$ can be calculated for a given stress range as:
        $$ m_v = \frac{a_v}{1+e_{avg}} $$
        Where $a_v = -\frac{\Delta e}{\Delta \sigma'}$ and $e_{avg} = \frac{e_0 + e_f}{2}$ for the stress range.
    *   Alternatively, using $C_c$ or $C_r$:
        $$ m_v = \frac{C_c}{(1+e_{avg})\sigma'_{avg}} \quad \text{or} \quad m_v = \frac{C_r}{(1+e_{avg})\sigma'_{avg}} $$
        The value of $m_v$ typically decreases as effective stress increases.

#### 4.3.5 Coefficient of Secondary Compression ($c_\alpha$)

*   **From the $S$ vs. $\log t$ plot:**
    1.  After the primary consolidation curve has flattened for each load increment, the remaining settlement is secondary compression.
    2.  Plot the final part of the $S$ vs. $\log t$ curve for each load.
    3.  The slope of this secondary compression curve is $c_\alpha$ (often reported as $\Delta S / \Delta \log t$).
    4.  For normally consolidated clays, $c_\alpha$ is often related to the void ratio at the end of primary consolidation.

### 4.4 Sample Calculations

**Given Data for a Load Increment:**

*   Specimen height $H_0 = 19.05$ mm
*   Initial void ratio $e_0 = 0.85$
*   Specimen diameter $D = 76.2$ mm
*   Area $A = \pi (D/2)^2 = \pi (76.2/2)^2 = 4560$ mm$^2$
*   Drainage path $d = H_0/2 = 19.05/2 = 9.525$ mm (assuming drainage on both sides)

**Tabulated Data for a Load Increment (e.g., 100 kPa to 200 kPa):**

| Time $t$ (min) | Settlement $S$ (mm) | $\log t$ |
| :------------- | :------------------ | :------- |
| 0.1            | 0.15                | -1.00    |
| 0.25           | 0.25                | -0.60    |
| 1              | 0.50                | 0.00     |
| 4              | 1.00                | 0.60     |
| 16             | 1.75                | 1.20     |
| 36             | 2.25                | 1.56     |
| 100            | 2.70                | 2.00     |
| 400            | 2.95                | 2.60     |
| 900            | 3.05                | 2.95     |
| 1440           | 3.08                | 3.16     |

**Calculations:**

1.  **Void Ratio at End of Primary Consolidation:**
    *   Let's assume the end of primary consolidation for this increment is at $S = 3.06$ mm (interpolated, if needed).
    *   $e = e_0 - \frac{S}{H_0} = 0.85 - \frac{3.06}{19.05} = 0.85 - 0.1606 = 0.6894$

2.  **Determination of $c_v$ (Log-Time Method):**
    *   Plot $S$ vs. $\log t$.
    *   Assume from plotting (or calculation):
        *   $t_B$ (time at point B) = 40 min
        *   $t_{50}$ (time for 50% consolidation) can be estimated from the initial straight line.
        *   If the extrapolated settlement at the end of primary consolidation is $S_{final} = 3.08$ mm, then $S_{50} = 0.5 \times 3.08 = 1.54$ mm.
        *   From the plot, find the time $t_{50}$ corresponding to $S=1.54$ mm. Let's say from the data, at $t=16$ min, $S=1.75$ mm. Interpolating, $t_{50}$ is roughly around 10-12 minutes. Let's assume $t_{50} = 11$ min.
    *   $c_v = \frac{0.848 \times d^2}{t_{50}} = \frac{0.848 \times (9.525 \text{ mm})^2}{11 \text{ min}} = \frac{0.848 \times 90.7256}{11} = \frac{76.94}{11} \approx 6.99 \text{ mm}^2/\text{min}$
    *   Convert to m$^2$/s: $6.99 \frac{\text{mm}^2}{\text{min}} \times \frac{1 \text{ m}^2}{10^6 \text{ mm}^2} \times \frac{1 \text{ min}}{60 \text{ s}} = 1.165 \times 10^{-7} \text{ m}^2/\text{s}$

---

## 5. Significance in Geotechnical Engineering

*   **Settlement Prediction:** The consolidation test results are essential for predicting the magnitude and rate of settlement of structures built on clayey soils. This is critical for design, especially for projects sensitive to settlement, such as tall buildings, bridges, and roads.
*   **Foundation Design:** Understanding the pre-consolidation pressure helps engineers determine if a soil is overconsolidated or normally consolidated, influencing the allowable bearing capacity and the need for ground improvement techniques.
*   **Slope Stability:** Consolidation can influence pore water pressures within slopes, potentially affecting their stability over time.
*   **Earth Retaining Structures:** The time-dependent settlement of backfill soils behind retaining walls can induce additional stresses on the wall.
*   **Ground Improvement:** Parameters like $c_v$ are used to design ground improvement techniques like preloading and vertical drains to accelerate consolidation and reduce settlement time.

---

## 6. Important Points to Remember

*   **Saturation is Key:** The consolidation test is performed on saturated soil specimens.
*   **One-Dimensional Process:** The test simulates one-dimensional compression, assuming no lateral strain.
*   **Time Dependency:** Consolidation is a slow process; hence, accurate time tracking is crucial.
*   **Effective Stress:** Settlement is caused by the increase in effective stress, not total stress.
*   **Parameter Interpretation:** Understand what each consolidation parameter ($c_v$, $m_v$, $p_c'$, $C_c$, $C_r$, $c_\alpha$) represents and how to derive them from the plots.
*   **Drainage Path:** The drainage path length ($d$) is critical for $c_v$ calculations and depends on whether drainage occurs from one or both sides of the specimen.
*   **Graphical Methods:** The Log-Time and Square-Root-Time methods are standard graphical techniques for determining $c_v$. Casagrande's method is commonly used for $p_c'$.
*   **Application:** The ultimate goal is to use these parameters to predict settlement in the field and design appropriate foundations.

---

## 7. Practice Questions/Exercises

**Question 1:** Explain the fundamental difference between compaction and consolidation in geotechnical engineering.

**Answer:** Compaction is a rapid process in unsaturated soils driven by mechanical energy to expel air and increase density. Consolidation is a slow, time-dependent process in saturated soils driven by the expulsion of pore water due to the dissipation of excess pore water pressure.

**Question 2:** What are the primary graphical methods used to determine the coefficient of consolidation ($c_v$)? Briefly describe one.

**Answer:** The primary graphical methods are the Log-Time Method (Casagrande's Method) and the Square-Root-Time Method (Taylor's Method).
**Description of Log-Time Method:** For each load increment, settlement is plotted against the logarithm of time. The initial curved portion is extended as a straight line (A). The final, flatter portion is extended as a straight line (C). Point B is the intersection of A and C. The time corresponding to point B ($t_B$) is found. Then $t_{50}$ is approximately $0.19 t_B$ (or directly found by taking half the difference between extrapolated zero and final settlement on the initial straight line). $c_v$ is calculated using $c_v = 0.848 \times d^2 / t_{50}$.

**Question 3:** How is the pre-consolidation pressure ($p_c'$) determined from the results of a consolidation test?

**Answer:** $p_c'$ is determined from the void ratio ($e$) versus logarithm of effective stress ($\log \sigma'$) plot. The point of maximum curvature on this plot (or the inflection point) is identified. A tangent is drawn at this point, and a horizontal line is drawn through it. The angle between these two lines is bisected. The stress corresponding to the intersection of this bisector with the consolidation curve is the pre-consolidation pressure ($p_c'$).

**Question 4:** A consolidation test is performed on a clay specimen of initial height $H_0 = 20$ mm. Drainage is allowed on both sides. After applying a certain load increment, the observed settlements and times are as follows:

| Time (min) | Settlement (mm) |
| :--------- | :-------------- |
| 0.1        | 0.2             |
| 0.5        | 0.4             |
| 2          | 0.8             |
| 8          | 1.5             |
| 32         | 2.2             |
| 128        | 2.6             |
| 512        | 2.8             |

Using the Log-Time method, estimate $t_{50}$ and calculate the coefficient of consolidation ($c_v$). Assume the extrapolated final settlement for this increment is 3.0 mm.

**Solution:**
1.  **Plot $S$ vs. $\log t$:**
    *   (0.1, 0.2), (0.5, 0.4), (2, 0.8), (8, 1.5), (32, 2.2), (128, 2.6), (512, 2.8)
2.  **Estimate $t_{50}$:**
    *   Extrapolated final settlement ($S_{final}$) = 3.0 mm.
    *   Settlement at 50% consolidation ($S_{50}$) = $0.5 \times 3.0 = 1.5$ mm.
    *   From the data, $S = 1.5$ mm occurs at $t = 8$ min. So, $t_{50} = 8$ min.
3.  **Calculate $c_v$:**
    *   Drainage path length, $d = H_0/2 = 20 \text{ mm} / 2 = 10$ mm.
    *   $c_v = \frac{0.848 \times d^2}{t_{50}} = \frac{0.848 \times (10 \text{ mm})^2}{8 \text{ min}} = \frac{0.848 \times 100}{8} = \frac{84.8}{8} = 10.6 \text{ mm}^2/\text{min}$

**Question 5:** What is the physical meaning of the coefficient of volume compressibility ($m_v$)?

**Answer:** $m_v$ represents the change in volume per unit volume per unit change in effective stress. It's a measure of the soil's compressibility. A higher $m_v$ indicates that the soil will undergo a greater change in volume for a given increase in effective stress.
