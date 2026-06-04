---
title: "Principle of effective stress - Total, neutral and effective stress – Pressure diagrams in layered soil with water table, saturated by capillary action, subjected to surcharge load – Numerical problems- Quick sand condition – Critical hydraulic gradient"
subject: "SOIL MECHANICS"
module: "Module 3: Principle of effective stress "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81097a"
status: "completed"
scrapedAt: "2026-05-20T18:47:01.351Z"
---
# SOIL MECHANICS: Module 3 - Principle of Effective Stress

This module delves into the fundamental concept of effective stress, which is crucial for understanding the behavior of soils under various loading conditions. We will explore the different types of stresses acting within a soil mass and how they influence its strength and deformation.

## 1. Total Stress ($\sigma$), Neutral Stress ($\mu$ or $u$), and Effective Stress ($\sigma'$)

The stresses acting within a soil mass can be broadly categorized into three types: total stress, neutral stress (pore water pressure), and effective stress.

### 1.1 Total Stress ($\sigma$)

*   **Definition:** Total stress is the overall stress acting on a soil element due to the weight of the overlying material, including soil solids, water, and any external loads.
*   **Calculation:** It is the sum of the weight of all superimposed material (soil, water, surcharge) per unit area above the point of consideration.
*   **Formula:**
    $\sigma = \sum (\gamma \times z)$
    where:
    *   $\gamma$ is the unit weight of the soil layer
    *   $z$ is the thickness of the soil layer

### 1.2 Neutral Stress (Pore Water Pressure, $\mu$ or $u$)

*   **Definition:** Neutral stress, also known as pore water pressure or hydrostatic pressure, is the pressure exerted by the water within the pores of the soil.
*   **Nature:** It acts equally in all directions and does not contribute to the shear strength of the soil.
*   **Calculation:** In saturated soils, it is calculated as the weight of the column of water above the point of consideration.
*   **Formula:**
    $u = \gamma_w \times h_w$
    where:
    *   $\gamma_w$ is the unit weight of water (typically 9.81 kN/m³ or 62.4 lb/ft³)
    *   $h_w$ is the height of the water column above the point of consideration

### 1.3 Effective Stress ($\sigma'$)

*   **Definition:** Effective stress is the stress transmitted through the soil skeleton (soil particles) and is responsible for the soil's strength and deformation characteristics.
*   **Concept (Terzaghi's Principle):** Effective stress is the difference between the total stress and the neutral stress. This is the cornerstone of soil mechanics.
*   **Formula:**
    $\sigma' = \sigma - u$
*   **Significance:**
    *   **Shear Strength:** Effective stress directly controls the shear strength of a soil. Higher effective stress leads to higher shear strength.
    *   **Deformation:** Changes in effective stress cause volume changes (settlement) in the soil.
    *   **Permeability:** While not directly affecting permeability, pore pressure influences the flow of water, which is related to effective stress.

---

## 2. Pressure Diagrams in Layered Soil with Water Table

Pressure diagrams are graphical representations of how total stress, neutral stress, and effective stress vary with depth in a soil profile. They are essential for visualizing stress distribution.

### 2.1 Key Principles for Drawing Pressure Diagrams

1.  **Identify Layers:** Divide the soil profile into distinct layers based on their properties (unit weight, saturation).
2.  **Water Table:** Locate the water table accurately.
3.  **Calculate Stresses at Layer Boundaries:** Calculate total, neutral, and effective stress at the top and bottom of each layer.
4.  **Plot the Diagrams:**
    *   **Total Stress:** Increases linearly with depth, with the slope determined by the unit weight of the soil.
    *   **Neutral Stress (Pore Water Pressure):** Is zero above the water table. Below the water table, it increases linearly with depth, with the slope determined by the unit weight of water ($\gamma_w$).
    *   **Effective Stress:** Is the difference between total and neutral stress. It can be plotted by subtracting the neutral stress diagram from the total stress diagram.

### 2.2 Scenarios and Examples

Let's consider a soil profile with different layers and a water table.

**Example 1: Single Layer Soil with Water Table**

*   **Profile:** A 5m thick layer of dry sand ($\gamma_{dry} = 18$ kN/m³) overlying a saturated clay layer. The water table is at a depth of 2m from the ground surface. The saturated unit weight of the clay is $\gamma_{sat} = 20$ kN/m³. We want to calculate stresses at a depth of 6m from the ground surface.

    *   **Depth:** 6m
    *   **Layer 1 (Sand):** 0m to 2m
        *   $\gamma_{dry} = 18$ kN/m³
    *   **Layer 2 (Clay):** 2m to below 6m
        *   $\gamma_{sat} = 20$ kN/m³
    *   **Water Table:** at 2m depth

    **Calculations at 6m depth:**

    *   **Total Stress ($\sigma$) at 6m:**
        *   Stress from sand layer (0-2m): $18 \, \text{kN/m³} \times 2 \, \text{m} = 36 \, \text{kN/m²}$
        *   Stress from clay layer (2-6m): $20 \, \text{kN/m³} \times (6 \, \text{m} - 2 \, \text{m}) = 20 \times 4 = 80 \, \text{kN/m²}$
        *   $\sigma = 36 + 80 = 116 \, \text{kN/m²}$

    *   **Neutral Stress ($u$) at 6m:**
        *   The water table is at 2m. The depth of water above 6m is $(6 \, \text{m} - 2 \, \text{m}) = 4 \, \text{m}$.
        *   $u = \gamma_w \times h_w = 9.81 \, \text{kN/m³} \times 4 \, \text{m} = 39.24 \, \text{kN/m²}$

    *   **Effective Stress ($\sigma'$) at 6m:**
        *   $\sigma' = \sigma - u = 116 \, \text{kN/m²} - 39.24 \, \text{kN/m²} = 76.76 \, \text{kN/m²}$

    **Pressure Diagrams:**

    *   **Total Stress:**
        *   At 0m: 0 kN/m²
        *   At 2m: $18 \times 2 = 36$ kN/m²
        *   At 6m: $36 + (20 \times 4) = 116$ kN/m²
        *   The diagram is a series of straight lines with slopes corresponding to the unit weights of the layers.

    *   **Neutral Stress:**
        *   At 0m to 2m: 0 kN/m²
        *   At 2m: 0 kN/m²
        *   At 6m: $9.81 \times 4 = 39.24$ kN/m²
        *   The diagram is zero above the water table and increases linearly below it with a slope of $\gamma_w$.

    *   **Effective Stress:**
        *   At 0m: 0 kN/m²
        *   At 2m: $36 - 0 = 36$ kN/m²
        *   At 6m: $116 - 39.24 = 76.76$ kN/m²
        *   The diagram is the difference between the total and neutral stress diagrams.

---

## 3. Soil Saturated by Capillary Action

Capillary action is the phenomenon where water rises in the pores of soil above the free water table due to surface tension forces. This creates a "capillary fringe" or "capillary zone."

### 3.1 Capillary Zone

*   **Description:** In fine-grained soils (silts and clays), capillary rise can occur, leading to saturation in the zone above the true water table.
*   **Capillary Rise Height ($h_c$):** The height of capillary rise depends on the soil type (pore size) and the surface tension of water. Finer soils with smaller pores exhibit higher capillary rise.
*   **Effective Stress in Capillary Zone:**
    *   Above the true water table, the soil might be moist, but the pore water pressure is **negative (suction)**.
    *   The effective stress in the capillary zone is still $\sigma' = \sigma - u$. However, the pore water pressure $u$ is negative.
    *   In many practical applications for stress calculations, the negative pore pressure in the capillary zone is often neglected for simplicity, or a conservative approach is taken by assuming zero pore pressure or a specific negative value if known.
    *   **Important Note:** While the pore pressure is negative, it contributes to the soil's apparent strength (adhesion), but it's the positive pore pressure below the water table that reduces effective stress and strength.

### 3.2 Example with Capillary Action

*   **Profile:** A 3m thick layer of silty sand. The water table is at 5m depth. There is a capillary rise of 1m above the water table. We want to calculate stresses at 3m depth.

    *   **Depth:** 3m
    *   **Water Table:** at 5m depth
    *   **Capillary Rise:** 1m (from 4m to 5m)
    *   **Unit Weight of Moist Soil:** $\gamma_{moist} = 19$ kN/m³
    *   **Unit Weight of Saturated Soil:** $\gamma_{sat} = 21$ kN/m³
    *   **Unit Weight of Water:** $\gamma_w = 9.81$ kN/m³

    **Calculations at 3m depth:**

    *   **Total Stress ($\sigma$) at 3m:**
        *   The soil from 0m to 3m is moist.
        *   $\sigma = \gamma_{moist} \times 3 \, \text{m} = 19 \, \text{kN/m³} \times 3 \, \text{m} = 57 \, \text{kN/m²}$

    *   **Neutral Stress ($u$) at 3m:**
        *   The point is at 3m depth. The water table is at 5m. The capillary fringe extends from 4m to 5m.
        *   Since 3m is above the capillary zone (which starts at 4m), the pore water pressure is typically considered **negative (suction)**.
        *   For simplicity in stress calculations, and to be conservative in terms of reducing effective stress, we often assume $u = 0$ for points above the water table and outside the capillary zone where negative pore pressure is not explicitly considered or is small.
        *   If we were to consider the negative pore pressure: The height of water that would cause this suction is equivalent to the capillary rise. If the capillary rise is $h_c$, the negative pore pressure can be approximated as $u \approx -\gamma_w \times h_c$ if the point is within the capillary fringe. However, at 3m, we are below the capillary fringe and above the water table. The actual pore pressure is negative.
        *   For most basic calculations, unless specifically asked to quantify negative pore pressure, we assume $u=0$ for points above the water table.
        *   Let's assume $u = 0$ at 3m depth for simplicity in this example.

    *   **Effective Stress ($\sigma'$) at 3m:**
        *   $\sigma' = \sigma - u = 57 \, \text{kN/m²} - 0 \, \text{kN/m²} = 57 \, \text{kN/m²}$

    **Important Consideration for Capillary Zone:** If we were calculating stresses at 4.5m depth (within the capillary fringe):
    *   Total Stress ($\sigma$) at 4.5m: $\sigma = 19 \, \text{kN/m³} \times 4.5 \, \text{m} = 85.5 \, \text{kN/m²}$
    *   Neutral Stress ($u$) at 4.5m: This point is within the capillary rise zone. The "suction" head is the height above the water table. The point is 0.5m below the top of the capillary rise (5m) and 0.5m above the water table. The pore pressure is negative. The magnitude of suction is often related to the distance below the capillary rise crest. A common simplification is to consider the pore pressure as negative. If we assume the negative pore pressure at height $h$ above the water table is $- \gamma_w h$, then at 4.5m (0.5m above water table), $u = -9.81 \times 0.5 = -4.9 \, \text{kN/m²}$.
    *   Effective Stress ($\sigma'$) at 4.5m: $\sigma' = \sigma - u = 85.5 \, \text{kN/m²} - (-4.9 \, \text{kN/m²}) = 90.4 \, \text{kN/m²}$.
    *   This shows that negative pore pressure *increases* effective stress, thus increasing apparent strength.

---

## 4. Effect of Surcharge Load

A surcharge load is an external load applied to the surface of the soil mass. This increases the total stress and consequently the effective stress.

### 4.1 Calculation

When a surcharge load $q$ (kN/m²) is applied at the surface, the total stress at any depth is increased by $q$.

*   **Total Stress with Surcharge ($\sigma_{total}$):**
    $\sigma_{total} = (\sum \gamma \times z) + q$
*   **Neutral Stress ($u$):** Remains unchanged by the surcharge load itself, unless the surcharge causes consolidation and a change in the water table or pore water conditions.
*   **Effective Stress with Surcharge ($\sigma'_{total}$):**
    $\sigma'_{total} = \sigma_{total} - u = (\sum \gamma \times z) + q - u$

### 4.2 Example with Surcharge

*   **Profile:** Consider the soil profile from Example 1 (5m sand, $\gamma_{dry} = 18$ kN/m³; below is saturated clay, $\gamma_{sat} = 20$ kN/m³; water table at 2m depth). A surcharge load of $q = 50$ kN/m² is applied at the ground surface. Calculate stresses at 6m depth.

    **Calculations at 6m depth:**

    *   **Total Stress ($\sigma_{total}$) at 6m:**
        *   Stress from soil (calculated previously): $116 \, \text{kN/m²}$
        *   Surcharge load: $50 \, \text{kN/m²}$
        *   $\sigma_{total} = 116 \, \text{kN/m²} + 50 \, \text{kN/m²} = 166 \, \text{kN/m²}$

    *   **Neutral Stress ($u$) at 6m:**
        *   Remains the same as before: $39.24 \, \text{kN/m²}$

    *   **Effective Stress ($\sigma'_{total}$) at 6m:**
        *   $\sigma'_{total} = \sigma_{total} - u = 166 \, \text{kN/m²} - 39.24 \, \text{kN/m²} = 126.76 \, \text{kN/m²}$

    *   **Comparison:** The effective stress has increased by the surcharge load, indicating an increase in the soil's load-bearing capacity.

---

## 5. Quick Sand Condition and Critical Hydraulic Gradient

### 5.1 Quick Sand Condition

*   **Definition:** The "quick sand" condition, also known as boiling or sand boil, is a phenomenon where a granular soil loses its shear strength and behaves like a liquid. This occurs when the upward flow of water through the soil is strong enough to counteract the weight of the soil particles.
*   **Cause:** It is caused by the development of high upward seepage forces.
*   **Consequences:** Loss of soil stability, erosion, and potential collapse of structures.

### 5.2 Critical Hydraulic Gradient ($i_c$)

*   **Definition:** The critical hydraulic gradient is the minimum hydraulic gradient required to initiate the quick sand condition in a soil.
*   **Condition for Quick Sand:** Quick sand occurs when the **gradient of the water flow ($i$)** is equal to or greater than the **critical hydraulic gradient ($i_c$)**.
*   **Derivation:**
    Consider a soil element saturated with water, subjected to upward flow.
    *   Total stress: $\sigma = \gamma_{sat} \times z$ (where $z$ is the thickness of the saturated layer)
    *   Neutral stress (pore water pressure): $u = i \times \gamma_w \times z$ (where $i$ is the hydraulic gradient)
    *   Effective stress: $\sigma' = \sigma - u = \gamma_{sat} \times z - i \times \gamma_w \times z = z (\gamma_{sat} - i \gamma_w)$
    *   For the soil to retain its strength, the effective stress must be greater than zero ($\sigma' > 0$).
    *   The critical condition occurs when the effective stress becomes zero, meaning the upward pore water pressure completely neutralizes the buoyant weight of the soil particles.
    *   So, $\gamma_{sat} - i_c \gamma_w = 0$
    *   $i_c = \frac{\gamma_{sat}}{\gamma_w}$

*   **Formula for Critical Hydraulic Gradient:**
    $i_c = \frac{G_s - 1}{1 + e}$
    where:
    *   $G_s$ is the specific gravity of soil solids
    *   $e$ is the void ratio of the soil
    *   Alternatively, $i_c = \frac{\gamma_{sat} - \gamma_w}{\gamma_w} = \frac{\gamma_{sub}}{\gamma_w}$ (where $\gamma_{sub}$ is the submerged unit weight)

*   **Factors Affecting $i_c$:**
    *   **Specific Gravity ($G_s$):** Higher $G_s$ leads to higher $i_c$.
    *   **Void Ratio ($e$):** Higher $e$ leads to lower $i_c$. This means that looser, more open-textured soils are more susceptible to quick sand conditions.
    *   **Particle Shape and Gradation:** Well-graded soils with interlocking particles have higher resistance.

### 5.3 Example of Quick Sand Condition

*   **Problem:** A saturated sand layer has a thickness of 3m. Its void ratio is 0.7, and the specific gravity of solids is 2.65. What is the critical hydraulic gradient? If the hydraulic gradient is 0.8, will the soil be in a quick sand condition?

    **Calculations:**

    *   **Calculate Critical Hydraulic Gradient ($i_c$):**
        *   $G_s = 2.65$
        *   $e = 0.7$
        *   $i_c = \frac{G_s - 1}{1 + e} = \frac{2.65 - 1}{1 + 0.7} = \frac{1.65}{1.7} \approx 0.97$

    *   **Compare with Applied Gradient:**
        *   Applied gradient $i = 0.8$
        *   Since $i = 0.8 < i_c = 0.97$, the soil is **not** in a quick sand condition.

*   **Problem Extension:** If the hydraulic gradient increases to 1.0, what will happen?
    *   Since $i = 1.0 > i_c = 0.97$, the soil **will be** in a quick sand condition.

---

## Practice Questions

**Question 1:**
A saturated clay layer is 5m thick. The water table is at the ground surface. The saturated unit weight of the clay is 20 kN/m³. Calculate the total, neutral, and effective stresses at the base of the clay layer.

**Question 2:**
A soil profile consists of the following layers:
*   Layer 1: 3m of dry sand, $\gamma_{dry} = 17$ kN/m³
*   Layer 2: 4m of moist sand, $\gamma_{moist} = 19$ kN/m³
*   Layer 3: 5m of saturated clay, $\gamma_{sat} = 21$ kN/m³
The water table is at a depth of 7m from the ground surface. There is a capillary rise of 1m above the water table. Calculate the total, neutral, and effective stresses at a depth of 10m from the ground surface.

**Question 3:**
A surcharge load of 40 kN/m² is applied to the surface of the soil profile described in Question 2. Recalculate the total, neutral, and effective stresses at a depth of 10m.

**Question 4:**
A uniform sand deposit is saturated. Its specific gravity is 2.68, and its void ratio is 0.6.
(a) Calculate the critical hydraulic gradient for this sand.
(b) If the sand is subjected to an upward seepage with a hydraulic gradient of 0.7, describe the condition of the soil.

---

## Answers to Practice Questions

**Answer 1:**
At the base of the clay layer (5m depth):
*   Total Stress ($\sigma$): $20 \, \text{kN/m³} \times 5 \, \text{m} = 100 \, \text{kN/m²}$
*   Neutral Stress ($u$): $9.81 \, \text{kN/m³} \times 5 \, \text{m} = 49.05 \, \text{kN/m²}$
*   Effective Stress ($\sigma'$): $100 \, \text{kN/m²} - 49.05 \, \text{kN/m²} = 50.95 \, \text{kN/m²}$

**Answer 2:**
We need to find stresses at 10m depth.
*   Layer 1 (Sand): 0-3m, $\gamma_{dry} = 17$ kN/m³
*   Layer 2 (Sand): 3-7m, $\gamma_{moist} = 19$ kN/m³
*   Layer 3 (Clay): 7-12m, $\gamma_{sat} = 21$ kN/m³
*   Water Table: at 7m depth
*   Capillary Rise: 1m (from 6m to 7m)

At 10m depth:
*   **Total Stress ($\sigma$) at 10m:**
    *   From Layer 1 (0-3m): $17 \, \text{kN/m³} \times 3 \, \text{m} = 51 \, \text{kN/m²}$
    *   From Layer 2 (3-7m): $19 \, \text{kN/m³} \times (7 \, \text{m} - 3 \, \text{m}) = 19 \times 4 = 76 \, \text{kN/m²}$
    *   From Layer 3 (7-10m): $21 \, \text{kN/m³} \times (10 \, \text{m} - 7 \, \text{m}) = 21 \times 3 = 63 \, \text{kN/m²}$
    *   $\sigma = 51 + 76 + 63 = 190 \, \text{kN/m²}$

*   **Neutral Stress ($u$) at 10m:**
    *   The water table is at 7m. The depth of water above 10m is $(10 \, \text{m} - 7 \, \text{m}) = 3 \, \text{m}$.
    *   $u = \gamma_w \times h_w = 9.81 \, \text{kN/m³} \times 3 \, \text{m} = 29.43 \, \text{kN/m²}$

*   **Effective Stress ($\sigma'$) at 10m:**
    *   $\sigma' = \sigma - u = 190 \, \text{kN/m²} - 29.43 \, \text{kN/m²} = 160.57 \, \text{kN/m²}$

**Answer 3:**
With a surcharge load $q = 40$ kN/m²:
*   **Total Stress ($\sigma_{total}$) at 10m:**
    *   Total stress from soil: $190 \, \text{kN/m²}$
    *   Surcharge: $40 \, \text{kN/m²}$
    *   $\sigma_{total} = 190 \, \text{kN/m²} + 40 \, \text{kN/m²} = 230 \, \text{kN/m²}$

*   **Neutral Stress ($u$) at 10m:**
    *   Remains the same: $29.43 \, \text{kN/m²}$

*   **Effective Stress ($\sigma'_{total}$) at 10m:**
    *   $\sigma'_{total} = \sigma_{total} - u = 230 \, \text{kN/m²} - 29.43 \, \text{kN/m²} = 200.57 \, \text{kN/m²}$

**Answer 4:**
(a) Critical hydraulic gradient ($i_c$):
    *   $G_s = 2.68$
    *   $e = 0.6$
    *   $i_c = \frac{G_s - 1}{1 + e} = \frac{2.68 - 1}{1 + 0.6} = \frac{1.68}{1.6} = 1.05$

(b) If the hydraulic gradient is $i = 0.7$:
    *   Compare $i$ and $i_c$: $0.7 < 1.05$.
    *   Since the applied gradient is less than the critical gradient, the soil is **stable** and not in a quick sand condition.

---

## Important Points to Remember

*   **Terzaghi's Principle is Fundamental:** $\sigma' = \sigma - u$. Always remember this relationship.
*   **Water Table is Key:** The location of the water table dictates where neutral stress starts and how it increases.
*   **Unit Weights:** Use the correct unit weights: dry ($\gamma_{dry}$), moist ($\gamma_{moist}$), saturated ($\gamma_{sat}$), and submerged ($\gamma_{sub}$). $\gamma_{sat} = \gamma_w + \gamma_{sub}$.
*   **Pressure Diagrams are Visual Tools:** Learn to draw them accurately to understand stress distribution.
*   **Capillary Rise:** Be aware of its existence in fine-grained soils and its effect on pore pressure (negative, increasing apparent strength). For basic stress calculations, $u=0$ is often assumed above the water table unless negative pore pressure is specifically analyzed.
*   **Surcharge:** Always adds to the total stress, increasing effective stress and soil strength.
*   **Quick Sand:** Occurs when upward seepage gradient equals or exceeds the critical gradient ($i \ge i_c$).
*   **Critical Hydraulic Gradient ($i_c$):** Depends on soil properties ($G_s$, $e$). Looser, more permeable soils have lower $i_c$.
