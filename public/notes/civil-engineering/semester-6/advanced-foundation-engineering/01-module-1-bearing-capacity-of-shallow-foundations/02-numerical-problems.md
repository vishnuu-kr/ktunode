---
title: "Numerical problems."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811204"
status: "completed"
scrapedAt: "2026-05-20T18:51:57.175Z"
---
# Advanced Foundation Engineering: Module 1 - Bearing Capacity of Shallow Foundations

## Topic: Numerical Problems

This module focuses on applying theoretical concepts of bearing capacity to solve practical engineering problems. We will explore various methods and factors influencing the ultimate bearing capacity and safe bearing capacity of shallow foundations.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   Calculate the ultimate bearing capacity of shallow foundations using various established methods (e.g., Terzaghi, Meyerhof, Hansen, Vesic).
*   Determine the safe bearing capacity of shallow foundations by incorporating a suitable factor of safety.
*   Analyze the effect of different soil properties (cohesion, angle of internal friction, unit weight) on bearing capacity.
*   Account for the influence of foundation geometry (width, length, depth of embedment) on bearing capacity.
*   Incorporate the impact of water table position on the bearing capacity calculations.
*   Apply correction factors for inclination of loading, ground slope, and base tilt.
*   Solve problems involving layered soil strata.

---

### Key Concepts and Definitions

*   **Bearing Capacity:** The maximum pressure that the soil can sustain without shear failure.
*   **Ultimate Bearing Capacity ($q_u$):** The maximum pressure at the base of the foundation at which a shear failure occurs in the soil.
*   **Net Ultimate Bearing Capacity ($q_{nu}$):** The ultimate bearing capacity in excess of the overburden pressure at the foundation level. $q_{nu} = q_u - \gamma D_f$, where $\gamma$ is the unit weight of the soil and $D_f$ is the depth of embedment.
*   **Safe Bearing Capacity ($q_s$):** The maximum allowable bearing pressure that the soil can withstand, which includes a factor of safety to prevent excessive settlement. $q_s = q_u / FS$, where $FS$ is the factor of safety.
*   **Factor of Safety (FS):** A multiplier used to reduce the ultimate bearing capacity to a safe bearing capacity, typically ranging from 2.5 to 3.0 for static loads, and higher for seismic conditions.
*   **Shear Failure:** Occurs when the applied pressure exceeds the soil's shear strength, leading to rupture and displacement of the soil mass. There are three main types:
    *   **General Shear Failure:** Occurs in dense/stiff soils under low confining pressure. The failure surface extends from the foundation base to the ground surface.
    *   **Local Shear Failure:** Occurs in softer soils under higher confining pressure. The failure is confined to the region directly below the foundation.
    *   **Punching Shear Failure:** Occurs in very soft soils or where the foundation is very narrow and the soil is compressible. The foundation punches through the soil.
*   **Bearing Capacity Factors ($N_c, N_q, N_\gamma$):** Dimensionless factors that depend on the angle of internal friction ($\phi$) of the soil. They are used in bearing capacity equations.
*   **Bearing Capacity Equation:** A mathematical expression that relates the ultimate bearing capacity to soil properties, foundation geometry, and loading conditions. The general form is:
    $q_u = c N_c s_c d_c i_c + \gamma D_f N_q s_q d_q i_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma i_\gamma$
    where:
    *   $c$ = cohesion of the soil
    *   $\gamma$ = effective unit weight of the soil
    *   $D_f$ = depth of embedment
    *   $B$ = width of the foundation
    *   $N_c, N_q, N_\gamma$ = bearing capacity factors
    *   $s_c, s_q, s_\gamma$ = shape factors
    *   $d_c, d_q, d_\gamma$ = depth factors
    *   $i_c, i_q, i_\gamma$ = inclination factors

---

### Bearing Capacity Theories and Equations

Several theories have been developed to estimate the ultimate bearing capacity. We will focus on the most commonly used ones.

#### 1. Terzaghi's Bearing Capacity Theory

Terzaghi's theory is a foundational theory for shallow foundations, assuming a strip footing and general shear failure. It considers three components of bearing capacity: cohesion, surcharge, and soil weight.

**Equation for Strip Footing:**

$q_u = c N_c + \gamma D_f N_q + 0.5 \gamma B N_\gamma$

**Terzaghi's Bearing Capacity Factors ($N_c, N_q, N_\gamma$):**

*   $N_q = e^{\pi \tan \phi} \tan^2 (45^\circ + \frac{\phi}{2})$
*   $N_c = (N_q - 1) \cot \phi$ (for $\phi > 0$)
*   $N_c = 5.14$ (for $\phi = 0$)
*   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{\phi}{2}) - 1)$ (approximate)

**Corrections for Different Foundation Shapes (Meyerhof's Shape Factors):**

For rectangular foundations with length $L$ and width $B$ ($L \ge B$):

*   $s_c = 1 + 0.2 (\frac{B}{L})$
*   $s_q = 1$
*   $s_\gamma = 1 - 0.4 (\frac{B}{L})$

**Corrections for Depth of Embedment (Meyerhof's Depth Factors):**

*   $d_c = 1 + 0.2 (\frac{D_f}{B})$ (for $\frac{D_f}{B} \le 1$)
*   $d_q = 1$
*   $d_\gamma = 1$

**Important Note:** Terzaghi's $N_\gamma$ factor is generally considered less accurate. Later researchers proposed more refined values.

#### 2. Meyerhof's Bearing Capacity Theory

Meyerhof extended Terzaghi's theory to include a wider range of foundation shapes, depths, and inclined loads. His bearing capacity factors are also different.

**Equation for Shallow Foundations:**

$q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$

**Meyerhof's Bearing Capacity Factors:**

*   $N_q = e^{\pi \tan \phi} \tan^2 (45^\circ + \frac{\phi}{2})$
*   $N_c = (N_q - 1) \cot \phi$ (for $\phi > 0$)
*   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{\phi}{2}) - 1)$ (similar to Terzaghi)

**Meyerhof's Shape Factors:**

*   $s_c = 1 + 0.2 (\frac{B}{L})$
*   $s_q = 1 + 0.1 (\frac{B}{L})$
*   $s_\gamma = 1 - 0.4 (\frac{B}{L})$

**Meyerhof's Depth Factors:**

*   $d_c = 1 + 0.2 (\frac{D_f}{B}) K_p^{1/2}$ (for $\frac{D_f}{B} \le 1$)
*   $d_q = 1 + 0.1 (\frac{D_f}{B}) K_p^{1/2}$ (for $\frac{D_f}{B} \le 1$)
*   $d_\gamma = 1$
    where $K_p = \tan^2 (45^\circ + \frac{\phi}{2})$ (passive earth pressure coefficient)

**For $\frac{D_f}{B} > 1$:**
*   $d_c = 1 + 0.2 (\frac{D_f}{B}) K_p^{1/2} + 0.2 (\frac{B}{D_f})$
*   $d_q = 1 + 0.1 (\frac{D_f}{B}) K_p^{1/2} + 0.1 (\frac{B}{D_f})$
*   $d_\gamma = 1 + 0.1 (\frac{B}{D_f})$

#### 3. Hansen's Bearing Capacity Theory

Hansen's theory is an extension of Meyerhof's, providing more comprehensive factors for inclination of load, ground slope, and base tilt.

**Equation for Shallow Foundations:**

$q_u = c N_c s_c d_c i_c g_c b_c + \gamma D_f N_q s_q d_q i_q g_q b_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma i_\gamma g_\gamma b_\gamma$

**Hansen's Bearing Capacity Factors:**

*   $N_q = e^{\pi \tan \phi} \tan^2 (45^\circ + \frac{\phi}{2})$
*   $N_c = (N_q - 1) \cot \phi$ (for $\phi > 0$)
*   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{\phi}{2}) - 1)$ (same as Terzaghi and Meyerhof)

**Hansen's Shape Factors:**

*   $s_c = 1 + (\frac{B}{L}) (\frac{N_q}{N_c})$
*   $s_q = 1 + (\frac{B}{L}) \tan \phi$
*   $s_\gamma = 1 - 0.4 (\frac{B}{L})$

**Hansen's Depth Factors:**

*   $d_c = 1 + 0.2 (\frac{D_f}{B})$ (for $\frac{D_f}{B} \le 1$)
*   $d_q = 1 + 0.2 (\frac{D_f}{B})$ (for $\frac{D_f}{B} \le 1$)
*   $d_\gamma = 1$

**For $\frac{D_f}{B} > 1$:**
*   $d_c = 1 + 0.2 (\frac{D_f}{B}) - 0.4$
*   $d_q = 1 + 0.2 (\frac{D_f}{B}) - 0.4$
*   $d_\gamma = 1$

**Hansen's Inclination Factors (for load inclination $i$ at angle $\alpha$ to vertical):**

*   $i_c = 1 - \frac{i_q}{N_c+1}$
*   $i_q = 1 - \frac{i}{2} \frac{(B L) c'}{q_u}$ (This form is complex and often simplified. For $\phi=0$, $i_c = 0.5(1-\frac{q_u'}{2c})$ for $\alpha=90^\circ$)
    A common approximation for load inclination $i$ is:
    *   $i_c = 1 - \frac{0.5 Q_u \sin \alpha}{A c + B' L' \gamma D_f}$
    *   $i_q = 1 - \frac{0.5 Q_u \cos \alpha}{A \gamma D_f N_q}$
    *   $i_\gamma = (1 - \frac{0.5 Q_u \cos \alpha}{A \gamma D_f N_q})^2$ (for $\phi > 0$)
    *   For horizontal load $H$:
        *   $i_c = 1 - \frac{H}{A c}$
        *   $i_q = 1 - \frac{H}{A \gamma D_f}$
        *   $i_\gamma = 1 - \frac{H}{A \gamma B}$

**Hansen's Ground Slope Factors ($g_c, g_q, g_\gamma$):**
These are used when the ground surface adjacent to the foundation is sloped.
**Hansen's Base Tilt Factors ($b_c, b_q, b_\gamma$):**
These are used when the base of the foundation is tilted.

*(Note: Hansen's $g$ and $b$ factors are complex and often provided in tables or simplified forms in textbooks. They are less frequently tested in introductory problems).*

#### 4. Vesic's Bearing Capacity Theory

Vesic's theory is similar to Hansen's but uses slightly different factors and is considered more suitable for highly compressible soils.

**Equation for Shallow Foundations:**

$q_u = c N_c s_c d_c i_c g_c b_c + \gamma D_f N_q s_q d_q i_q g_q b_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma i_\gamma g_\gamma b_\gamma$

**Vesic's Bearing Capacity Factors:**

*   $N_q = e^{\pi \tan \phi} \tan^2 (45^\circ + \frac{\phi}{2})$
*   $N_c = (N_q - 1) \cot \phi$ (for $\phi > 0$)
*   $N_\gamma = 2 (\tan^2 (45^\circ + \frac{\phi}{2}) - 1)$ (more accurate $N_\gamma$)

**Vesic's Shape Factors:** Similar to Hansen's.

**Vesic's Depth Factors:** Similar to Hansen's.

**Vesic's Inclination Factors:** Similar to Hansen's.

**Vesic's Ground Slope Factors ($g_c, g_q, g_\gamma$):**
**Vesic's Base Tilt Factors ($b_c, b_q, b_\gamma$):**

---

### Effect of Water Table

The presence of a water table below the foundation significantly reduces the effective unit weight of the soil, thereby reducing the bearing capacity.

**Correction for Water Table:**

The third term of the bearing capacity equation ($0.5 \gamma B N_\gamma$) is most affected.

*   **Case 1: Water table is at or above the base of the foundation ($D_f + B$ level):**
    The effective unit weight ($\gamma'$) should be used in the third term.
    $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma' B N_\gamma s_\gamma d_\gamma$

*   **Case 2: Water table is below the base of the foundation but within a depth of $B$ below the base:**
    A reduction factor ($R_w$) is applied to the third term.
    $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma R_w$
    $R_w = 0.5 (1 + \frac{z_w}{B})$
    where $z_w$ is the depth of the water table below the foundation base.

*   **Case 3: Water table is far below the foundation (beyond depth $B$ below the base):**
    The water table has no effect, and the full unit weight ($\gamma$) is used.

**Effect on the first two terms:**
If the water table is within depth $D_f$ from the ground surface, the effective unit weight ($\gamma'$) should be used for the overburden pressure term ($\gamma D_f N_q$).

*   If water table is at or above the base ($D_f$):
    $q_u = c N_c s_c d_c + \gamma' D_f N_q s_q d_q + 0.5 \gamma' B N_\gamma s_\gamma d_\gamma$
    (for $\phi=0$, $q_u = c N_c s_c d_c + \gamma' D_f N_q s_q d_q$)

*   If water table is below $D_f$ but above $D_f+B$:
    $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma R_w$

---

### Effect of Inclination of Load, Ground Slope, and Base Tilt

These factors are accounted for by using the respective inclination ($i$), ground slope ($g$), and base tilt ($b$) factors in the bearing capacity equation.

*   **Inclination of Load ($i$):** When the resultant load on the foundation is not vertical.
*   **Ground Slope ($g$):** When the ground surface adjacent to the foundation is sloped.
*   **Base Tilt ($b$):** When the foundation base is not horizontal.

*(As mentioned earlier, these factors are generally more complex and will be covered in detail in more advanced contexts or specific problem statements).*

---

### Layered Soil Strata

When a foundation is supported by layers of different soils, the calculation becomes more complex. Several methods exist, including:

*   **Housel's Method:** Based on a modulus of elasticity approach.
*   **Burland and Tomlinson Method:** Considers the influence of the underlying layers on the stress distribution.
*   **Finite Element Analysis (FEA):** A sophisticated numerical method.

**Simplified Approach (for two layers):**

If the upper layer is significantly weaker than the lower layer, and the shear failure surface extends into the lower layer, the bearing capacity of the system can be influenced by both layers.

*   **General Guideline:** If the thickness of the upper layer ($H$) is less than approximately $B$ or $1.33B$ (depending on the theory used), and the lower layer is stronger, a correction might be needed.

**Example Scenario:** A foundation on a layer of soft clay over a strong rock or dense sand.

The ultimate bearing capacity will be primarily governed by the strength of the top layer, but the failure surface might extend into the lower layer, affecting the capacity. For practical purposes in numerical problems at this level, you'll often be given specific instructions or simplified approaches for layered soils. A common simplified method for a weaker layer over a stronger layer is to assume the failure is limited to the upper layer's thickness, or to use charts/factors provided for such cases.

---

### Numerical Problems & Examples

Let's work through some examples to illustrate the application of these concepts.

**Example 1: Terzaghi's Bearing Capacity for Strip Footing**

A strip footing 1.2 m wide is founded at a depth of 1.0 m in a sandy soil. The soil properties are:
*   Unit weight ($\gamma$) = 18 kN/m³
*   Angle of internal friction ($\phi$) = 30°
*   Cohesion ($c$) = 0 kN/m²

Calculate the ultimate bearing capacity using Terzaghi's theory.

**Solution:**

1.  **Identify parameters:**
    *   $B = 1.2$ m
    *   $D_f = 1.0$ m
    *   $\gamma = 18$ kN/m³
    *   $c = 0$ kN/m²
    *   $\phi = 30^\circ$

2.  **Find Terzaghi's Bearing Capacity Factors for $\phi = 30^\circ$:**
    *   $N_q = e^{\pi \tan 30^\circ} \tan^2 (45^\circ + \frac{30^\circ}{2}) = e^{\pi \times 0.577} \tan^2 (45^\circ + 15^\circ)$
        $N_q = e^{1.81} \tan^2 (60^\circ) = 6.108 \times (1.732)^2 = 6.108 \times 3.0 = 18.32$
    *   $N_c = (N_q - 1) \cot \phi = (18.32 - 1) \cot 30^\circ = 17.32 \times 1.732 = 30.00$
    *   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{30^\circ}{2}) - 1) = 1.5 (\tan^2 (60^\circ) - 1) = 1.5 (3 - 1) = 1.5 \times 2 = 3.0$

3.  **Apply Terzaghi's equation for strip footing:**
    $q_u = c N_c + \gamma D_f N_q + 0.5 \gamma B N_\gamma$
    $q_u = (0)(30.00) + (18)(1.0)(18.32) + 0.5(18)(1.2)(3.0)$
    $q_u = 0 + 329.76 + 32.4$
    $q_u = 362.16$ kN/m²

**Example 2: Meyerhof's Bearing Capacity for Rectangular Foundation with Shape and Depth Factors**

A rectangular footing 2 m wide and 4 m long is founded at a depth of 1.5 m in a cohesive soil. The soil properties are:
*   Unit weight ($\gamma$) = 19 kN/m³
*   Cohesion ($c$) = 30 kN/m²
*   Angle of internal friction ($\phi$) = 0°

Calculate the ultimate bearing capacity using Meyerhof's theory. Assume FS = 3 for safe bearing capacity.

**Solution:**

1.  **Identify parameters:**
    *   $B = 2$ m, $L = 4$ m
    *   $D_f = 1.5$ m
    *   $\gamma = 19$ kN/m³
    *   $c = 30$ kN/m²
    *   $\phi = 0^\circ$

2.  **Find Meyerhof's Bearing Capacity Factors for $\phi = 0^\circ$:**
    *   $N_q = e^{\pi \tan 0^\circ} \tan^2 (45^\circ + \frac{0^\circ}{2}) = e^0 \tan^2 (45^\circ) = 1 \times 1^2 = 1$
    *   $N_c = (N_q - 1) \cot \phi$. For $\phi=0$, $N_c$ is taken as 5.14 (from Terzaghi, commonly used). Meyerhof's formula becomes indeterminate, so 5.14 is standard.
    *   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{0^\circ}{2}) - 1) = 1.5 (1 - 1) = 0$. (For $\phi=0$, the $N_\gamma$ term is often neglected or considered zero).

3.  **Calculate Shape Factors (Meyerhof):**
    *   $\frac{B}{L} = \frac{2}{4} = 0.5$
    *   $s_c = 1 + 0.2 (\frac{B}{L}) = 1 + 0.2 (0.5) = 1 + 0.1 = 1.1$
    *   $s_q = 1 + 0.1 (\frac{B}{L}) = 1 + 0.1 (0.5) = 1 + 0.05 = 1.05$
    *   $s_\gamma = 1 - 0.4 (\frac{B}{L}) = 1 - 0.4 (0.5) = 1 - 0.2 = 0.8$

4.  **Calculate Depth Factors (Meyerhof):**
    *   $\frac{D_f}{B} = \frac{1.5}{2} = 0.75$. Since $0.75 \le 1$, use the first set of factors.
    *   $K_p = \tan^2 (45^\circ + \frac{0^\circ}{2}) = \tan^2 (45^\circ) = 1$
    *   $d_c = 1 + 0.2 (\frac{D_f}{B}) K_p^{1/2} = 1 + 0.2 (0.75)(1^{1/2}) = 1 + 0.15 = 1.15$
    *   $d_q = 1 + 0.1 (\frac{D_f}{B}) K_p^{1/2} = 1 + 0.1 (0.75)(1^{1/2}) = 1 + 0.075 = 1.075$
    *   $d_\gamma = 1$

5.  **Apply Meyerhof's Equation:**
    $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    $q_u = (30)(5.14)(1.1)(1.15) + (19)(1.5)(1)(1.05)(1.075) + 0.5(19)(2)(0)(0.8)(1)$
    $q_u = 187.53 + 30.55 + 0$
    $q_u = 218.08$ kN/m²

6.  **Calculate Safe Bearing Capacity:**
    $q_s = \frac{q_u}{FS} = \frac{218.08}{3} = 72.69$ kN/m²

**Example 3: Effect of Water Table**

Consider a footing 2 m wide and 1.5 m deep in a saturated clay.
*   Cohesion ($c$) = 40 kN/m²
*   Angle of internal friction ($\phi$) = 0°
*   Unit weight of soil ($\gamma$) = 18 kN/m³
*   Saturated unit weight ($\gamma_{sat}$) = 20 kN/m³
*   Water table is at a depth of 0.8 m below the ground surface.

Calculate the ultimate bearing capacity using Terzaghi's theory for $\phi = 0$. Assume FS = 3.

**Solution:**

1.  **Identify parameters:**
    *   $B = 2$ m
    *   $D_f = 1.5$ m
    *   $c = 40$ kN/m²
    *   $\phi = 0^\circ$
    *   Water table depth = 0.8 m
    *   $\gamma_{sub} = 18$ kN/m³ (assuming it's submerged above water table)
    *   $\gamma_{sat} = 20$ kN/m³

2.  **Determine effective unit weights:**
    *   The foundation base is at 1.5 m depth. The water table is at 0.8 m depth.
    *   The soil above the water table (0 to 0.8 m) has unit weight $\gamma = 18$ kN/m³.
    *   The soil below the water table (0.8 to 1.5 m) is submerged. The effective unit weight is $\gamma' = \gamma_{sat} - \gamma_w = 20 - 9.81 = 10.19$ kN/m³ (assuming $\gamma_w = 9.81$ kN/m³).

3.  **Find Terzaghi's Bearing Capacity Factors for $\phi = 0^\circ$:**
    *   $N_c = 5.14$
    *   $N_q = 1$
    *   $N_\gamma = 0$

4.  **Calculate the overburden pressure term ($\gamma D_f N_q$):**
    This term requires the average effective unit weight from the ground surface to the foundation base.
    *   From 0 to 0.8 m: Weight = $0.8 \times 18 = 14.4$ kN/m²
    *   From 0.8 to 1.5 m: Weight = $0.7 \times 10.19 = 7.133$ kN/m²
    *   Total effective overburden pressure = $14.4 + 7.133 = 21.533$ kN/m²
    *   So, the term is $21.533 \times N_q = 21.533 \times 1 = 21.533$ kN/m².

5.  **Calculate the third term ($0.5 \gamma B N_\gamma$):**
    Since $\phi=0$, $N_\gamma = 0$, so this term is 0.

6.  **Apply Terzaghi's equation for $\phi = 0$ (strip footing):**
    $q_u = c N_c + \gamma D_f N_q$
    Using the calculated effective overburden pressure:
    $q_u = 40 \times 5.14 + 21.533$
    $q_u = 205.6 + 21.533$
    $q_u = 227.133$ kN/m²

7.  **Calculate Safe Bearing Capacity:**
    $q_s = \frac{q_u}{FS} = \frac{227.133}{3} = 75.71$ kN/m²

**Alternative calculation for effective overburden pressure:**
Average $\gamma = \frac{(0.8 \times 18) + (0.7 \times 10.19)}{1.5} = \frac{14.4 + 7.133}{1.5} = \frac{21.533}{1.5} = 14.355$ kN/m³
Overburden pressure = $14.355 \times 1.5 = 21.533$ kN/m²

**Example 4: Water Table Correction ($R_w$)**

A square footing 2 m x 2 m is founded at a depth of 1.5 m in a sand.
*   Unit weight of soil ($\gamma$) = 18 kN/m³
*   Angle of internal friction ($\phi$) = 35°
*   Cohesion ($c$) = 0 kN/m²
*   Water table is at a depth of 2.5 m below the ground surface.

Calculate the ultimate bearing capacity using Meyerhof's theory. FS = 3.

**Solution:**

1.  **Identify parameters:**
    *   $B = 2$ m, $L = 2$ m
    *   $D_f = 1.5$ m
    *   $\gamma = 18$ kN/m³
    *   $c = 0$ kN/m²
    *   $\phi = 35^\circ$
    *   Water table depth = 2.5 m

2.  **Check water table position:**
    *   Foundation base is at 1.5 m.
    *   Water table is at 2.5 m.
    *   Depth of water table below foundation base ($z_w$) = $2.5 - 1.5 = 1.0$ m.
    *   Since $z_w < B$ (1.0 m < 2.0 m), we need to use the $R_w$ factor.
    *   The water table is below $D_f$, so the overburden pressure term uses $\gamma$, not $\gamma'$.

3.  **Find Meyerhof's Bearing Capacity Factors for $\phi = 35^\circ$:**
    *   $N_q = e^{\pi \tan 35^\circ} \tan^2 (45^\circ + \frac{35^\circ}{2}) = e^{3.14159 \times 0.7002} \tan^2 (45^\circ + 17.5^\circ)$
        $N_q = e^{2.199} \tan^2 (62.5^\circ) = 9.016 \times (1.921)^2 = 9.016 \times 3.69 = 33.27$
    *   $N_c = (N_q - 1) \cot \phi = (33.27 - 1) \cot 35^\circ = 32.27 \times 1.428 = 46.09$
    *   $N_\gamma = 1.5 (\tan^2 (45^\circ + \frac{35^\circ}{2}) - 1) = 1.5 (\tan^2 (62.5^\circ) - 1) = 1.5 (3.69 - 1) = 1.5 \times 2.69 = 4.035$

4.  **Calculate Shape Factors (Meyerhof for Square):**
    *   $\frac{B}{L} = \frac{2}{2} = 1$
    *   $s_c = 1 + 0.2 (\frac{B}{L}) = 1 + 0.2 (1) = 1.2$
    *   $s_q = 1 + 0.1 (\frac{B}{L}) = 1 + 0.1 (1) = 1.1$
    *   $s_\gamma = 1 - 0.4 (\frac{B}{L}) = 1 - 0.4 (1) = 0.6$

5.  **Calculate Depth Factors (Meyerhof):**
    *   $\frac{D_f}{B} = \frac{1.5}{2} = 0.75$. Since $0.75 \le 1$.
    *   $K_p = \tan^2 (45^\circ + \frac{35^\circ}{2}) = \tan^2 (62.5^\circ) = 3.69$
    *   $d_c = 1 + 0.2 (\frac{D_f}{B}) K_p^{1/2} = 1 + 0.2 (0.75)(3.69^{1/2}) = 1 + 0.15 \times 1.921 = 1 + 0.288 = 1.288$
    *   $d_q = 1 + 0.1 (\frac{D_f}{B}) K_p^{1/2} = 1 + 0.1 (0.75)(1.921) = 1 + 0.075 \times 1.921 = 1 + 0.144 = 1.144$
    *   $d_\gamma = 1$

6.  **Calculate Water Table Correction Factor ($R_w$):**
    *   $z_w = 1.0$ m, $B = 2$ m
    *   $R_w = 0.5 (1 + \frac{z_w}{B}) = 0.5 (1 + \frac{1.0}{2.0}) = 0.5 (1 + 0.5) = 0.5 \times 1.5 = 0.75$

7.  **Apply Meyerhof's Equation with $R_w$:**
    $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma R_w$
    $q_u = (0)(46.09)(1.2)(1.288) + (18)(1.5)(33.27)(1.1)(1.144)(0.75)$
    $q_u = 0 + 1.5 \times 18 \times 33.27 \times 1.1 \times 1.144 \times 0.75$
    $q_u = 27 \times 33.27 \times 1.1 \times 1.144 \times 0.75$
    $q_u = 734.09$ kN/m²

8.  **Calculate Safe Bearing Capacity:**
    $q_s = \frac{q_u}{FS} = \frac{734.09}{3} = 244.70$ kN/m²

---

### Practice Questions

**Question 1:**
A square footing of 2 m x 2 m is to be constructed on a stiff clay soil. The soil properties are:
*   Cohesion ($c$) = 60 kN/m²
*   Angle of internal friction ($\phi$) = 0°
*   Unit weight ($\gamma$) = 19 kN/m³
The foundation is to be placed at a depth of 1.2 m. Using Meyerhof's theory, calculate the ultimate bearing capacity. Take FS = 3 for safe bearing capacity.

**Question 2:**
A rectangular footing 3 m wide and 5 m long is supported by a sand deposit. The soil properties are:
*   Unit weight ($\gamma$) = 17 kN/m³
*   Angle of internal friction ($\phi$) = 32°
*   Cohesion ($c$) = 0 kN/m²
The footing is to be constructed at a depth of 1.5 m. Calculate the ultimate bearing capacity using Hansen's theory. (For simplicity, you can use Terzaghi's $N_\gamma$ value if Hansen's table is not available. Assume shape and depth factors from Meyerhof for this problem).

**Question 3:**
A circular footing of 2.5 m diameter is to be constructed at a depth of 1.0 m in a dense sand. The soil properties are:
*   Unit weight ($\gamma$) = 19 kN/m³
*   Angle of internal friction ($\phi$) = 38°
*   Cohesion ($c$) = 0 kN/m²
The water table is located at a depth of 3.0 m below the ground surface. Calculate the ultimate bearing capacity using Vesic's theory. (Assume shape and depth factors from Meyerhof for simplicity. Use Vesic's $N_\gamma$). FS = 3.

**Question 4:**
A strip footing 1.5 m wide is founded at a depth of 1.0 m in a normally consolidated clay.
*   Saturated unit weight ($\gamma_{sat}$) = 19 kN/m³
*   Cohesion ($c$) = 35 kN/m²
*   Angle of internal friction ($\phi$) = 0°
The water table is at a depth of 0.5 m below the ground surface. Calculate the safe bearing capacity using Terzaghi's theory. Assume FS = 2.5.

---

### Answers to Practice Questions

**Answer 1:**
*   $B=2$ m, $L=2$ m, $D_f=1.2$ m, $\gamma=19$ kN/m³, $c=60$ kN/m², $\phi=0^\circ$.
*   Meyerhof factors for $\phi=0$: $N_c=5.14$, $N_q=1$, $N_\gamma=0$.
*   Shape factors for square: $s_c=1.2$, $s_q=1.1$, $s_\gamma=0.6$.
*   Depth factors ($D_f/B = 1.2/2 = 0.6 \le 1$, $K_p=1$): $d_c = 1 + 0.2(0.6)(1) = 1.12$, $d_q = 1 + 0.1(0.6)(1) = 1.06$, $d_\gamma=1$.
*   $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    $q_u = (60)(5.14)(1.2)(1.12) + (19)(1.2)(1)(1.1)(1.06) + 0$
    $q_u = 413.76 + 26.85 = 440.61$ kN/m²
*   $q_s = 440.61 / 3 = 146.87$ kN/m²

**Answer 2:**
*   $B=3$ m, $L=5$ m, $D_f=1.5$ m, $\gamma=17$ kN/m³, $\phi=32^\circ$, $c=0$.
*   Hansen's factors for $\phi=32^\circ$:
    *   $N_q = e^{\pi \tan 32^\circ} \tan^2 (45^\circ + 16^\circ) = e^{3.14159 \times 0.6249} \tan^2 (61^\circ) = e^{1.963} \times (1.804)^2 = 7.12 \times 3.255 = 23.18$
    *   $N_c = (23.18 - 1) \cot 32^\circ = 22.18 \times 1.600 = 35.49$
    *   $N_\gamma = 1.5 (\tan^2 (61^\circ) - 1) = 1.5 (3.255 - 1) = 1.5 \times 2.255 = 3.38$
*   Meyerhof Shape factors ($B/L = 3/5 = 0.6$): $s_c = 1 + 0.2(0.6) = 1.12$, $s_q = 1 + 0.1(0.6) = 1.06$, $s_\gamma = 1 - 0.4(0.6) = 0.76$.
*   Meyerhof Depth factors ($D_f/B = 1.5/3 = 0.5 \le 1$, $K_p = \tan^2(61^\circ) = 3.255$): $d_c = 1 + 0.2(0.5)(3.255^{0.5}) = 1 + 0.1(1.804) = 1.18$, $d_q = 1 + 0.1(0.5)(1.804) = 1 + 0.09 = 1.09$, $d_\gamma = 1$.
*   $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    $q_u = 0 + (17)(1.5)(23.18)(1.06)(1.09) + 0.5(17)(3)(3.38)(0.76)(1)$
    $q_u = 496.24 + 82.96 = 579.20$ kN/m²

**Answer 3:**
*   $B=2.5$ m (diameter of circular footing), $D_f=1.0$ m, $\gamma=19$ kN/m³, $\phi=38^\circ$, $c=0$. Water table at 3.0 m (below foundation).
*   Vesic's factors for $\phi=38^\circ$:
    *   $N_q = e^{\pi \tan 38^\circ} \tan^2 (45^\circ + 19^\circ) = e^{3.14159 \times 0.7813} \tan^2 (64^\circ) = e^{2.454} \times (2.050)^2 = 11.63 \times 4.2025 = 48.87$
    *   $N_c = (48.87 - 1) \cot 38^\circ = 47.87 \times 1.2799 = 61.26$
    *   $N_\gamma = 2 (\tan^2 (64^\circ) - 1) = 2 (4.2025 - 1) = 2 \times 3.2025 = 6.405$
*   Meyerhof Shape factors for circular footing ($B/L \to 0$ for circular): $s_c = 1.3$, $s_q = 1.0$, $s_\gamma = 0.6$ (These are specific for circular footings and vary by theory. Meyerhof's circular factors are $s_c=1.3$, $s_q=1.0$, $s_\gamma=0.4$). Let's use Meyerhof's circular factors for this practice problem.
*   Meyerhof Depth factors ($D_f/B = 1.0/2.5 = 0.4 \le 1$, $K_p = \tan^2(64^\circ) = 4.2025$): $d_c = 1 + 0.2(0.4)(4.2025^{0.5}) = 1 + 0.08(2.05) = 1.164$, $d_q = 1 + 0.1(0.4)(2.05) = 1 + 0.041 = 1.041$, $d_\gamma=1$.
*   Water table: Below $D_f+B$ (1.0 + 2.5 = 3.5 m). Water table is at 3.0 m, so it is not influencing the third term with $R_w$. The overburden pressure term uses $\gamma$.
*   $q_u = c N_c s_c d_c + \gamma D_f N_q s_q d_q + 0.5 \gamma B N_\gamma s_\gamma d_\gamma$
    $q_u = 0 + (19)(1.0)(48.87)(1.0)(1.041) + 0.5(19)(2.5)(6.405)(0.4)(1)$
    $q_u = 1955.3 + 61.4 = 2016.7$ kN/m²
*   $q_s = 2016.7 / 3 = 672.23$ kN/m²

**Answer 4:**
*   Strip footing, $B=1.5$ m, $D_f=1.0$ m, $c=35$ kN/m², $\phi=0^\circ$, $\gamma_{sat}=19$ kN/m³. Water table at 0.5 m. FS = 2.5.
*   Terzaghi's factors for $\phi=0$: $N_c=5.14$, $N_q=1$, $N_\gamma=0$.
*   Effective unit weights:
    *   0 to 0.5 m: $\gamma = 19$ kN/m³ (assuming it's saturated from the start)
    *   0.5 to 1.0 m: $\gamma' = \gamma_{sat} - \gamma_w = 19 - 9.81 = 9.19$ kN/m³.
*   Overburden pressure:
    *   Weight of layer 1 (0 to 0.5 m): $0.5 \times 19 = 9.5$ kN/m²
    *   Weight of layer 2 (0.5 to 1.0 m): $0.5 \times 9.19 = 4.595$ kN/m²
    *   Effective overburden pressure at foundation level = $9.5 + 4.595 = 14.095$ kN/m².
*   $q_u = c N_c + \text{Effective Overburden Pressure} \times N_q$
    $q_u = (35)(5.14) + (14.095)(1)$
    $q_u = 179.9 + 14.095 = 193.995$ kN/m²
*   $q_s = 193.995 / 2.5 = 77.60$ kN/m²

---

### Important Points to Remember

*   **Always clearly state the theory being used** (Terzaghi, Meyerhof, Hansen, Vesic).
*   **Identify all input parameters correctly** (width, length, depth, cohesion, friction angle, unit weights).
*   **Use the correct bearing capacity factors ($N_c, N_q, N_\gamma$)** for the given friction angle and chosen theory.
*   **Apply shape, depth, and inclination factors** as required by the problem and the chosen theory.
*   **Carefully consider the position of the water table** and apply the appropriate correction factor or use effective unit weights.
*   **For $\phi=0$ (cohesive soils), the $N_\gamma$ term is usually zero**, and the $N_q$ term represents the contribution of overburden pressure.
*   **The safe bearing capacity is always the ultimate bearing capacity divided by the factor of safety.**
*   **Units must be consistent** throughout the calculation.
*   **When the water table is high, the bearing capacity is significantly reduced.**

---
This comprehensive set of notes covers the essential aspects of numerical problems related to bearing capacity of shallow foundations, equipping you with the knowledge and practice to solve them.
