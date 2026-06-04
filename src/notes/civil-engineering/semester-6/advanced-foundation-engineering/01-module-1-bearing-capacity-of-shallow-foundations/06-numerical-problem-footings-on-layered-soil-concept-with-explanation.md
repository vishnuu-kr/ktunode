---
title: "Numerical problem- Footings on layered soil concept
with Explanation."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811208"
status: "completed"
scrapedAt: "2026-05-20T18:51:59.991Z"
---
# ADVANCED FOUNDATION ENGINEERING - MODULE 1: BEARING CAPACITY OF SHALLOW FOUNDATIONS

## TOPIC: NUMERICAL PROBLEMS - FOOTINGS ON LAYERED SOIL CONCEPT

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the concept of layered soils and their impact on bearing capacity.
*   Apply appropriate methods for calculating the bearing capacity of shallow foundations on layered soil.
*   Analyze and interpret the results of bearing capacity calculations for layered soil conditions.
*   Solve numerical problems involving footings on layered soils.
*   Recognize the limitations and assumptions of various methods.

### 1. Introduction to Layered Soils and Bearing Capacity

**1.1. What are Layered Soils?**

Layered soils are soils where distinct strata of different soil types (e.g., sand over clay, clay over sand, or multiple layers of the same soil type with varying properties) exist beneath the foundation. The presence of layers significantly influences the distribution of stresses and strains, and consequently, the bearing capacity of the foundation.

**1.2. Why is Layered Soil Analysis Important?**

*   **Heterogeneity:** Real soil deposits are rarely uniform. Ignoring layers can lead to overestimation or underestimation of bearing capacity, resulting in unsafe or uneconomical designs.
*   **Stress Distribution:** Different soil layers possess different strengths and compressibility. The load applied to a foundation is transmitted through these layers, and the weaker or more compressible layer can govern the overall bearing capacity and settlement.
*   **Failure Mechanisms:** The failure mechanism in layered soils can be more complex than in homogeneous soils, potentially involving shear failure within one layer or punching shear through multiple layers.

**1.3. Key Factors Influencing Bearing Capacity in Layered Soils:**

*   **Number of Layers:** The more layers, the more complex the analysis.
*   **Thickness of Layers:** The depth to which stresses penetrate and the relative thickness of each layer are crucial.
*   **Soil Properties:**
    *   **Cohesion (c):** Important for cohesive soils (clays).
    *   **Angle of Internal Friction ($\phi$):** Important for granular soils (sands and gravels).
    *   **Unit Weight ($\gamma$):** Affects the overburden pressure.
    *   **Undrained Shear Strength ($c_u$):** For short-term stability of clays.
    *   **Modulus of Elasticity (E):** For settlement analysis, which is often critical in layered soils.
*   **Foundation Geometry:** Width (B), Length (L), and Depth of embedment (D_f).
*   **Load Type:** Vertical, eccentric, or inclined loads.

### 2. Methods for Analyzing Bearing Capacity on Layered Soils

Several methods have been developed to analyze the bearing capacity of foundations on layered soils. The choice of method depends on the complexity of the soil profile and the desired accuracy.

**2.1. Empirical Methods and Charts (Simplified Approaches)**

These methods often involve using empirical correlations or pre-compiled charts based on experimental data. While simpler, they might be less accurate for complex scenarios.

*   **Meyerhof's Method (for layered granular soils):** Meyerhof proposed a method for sands where the effective friction angle is averaged based on the thickness of layers and the depth of influence.
*   **Berezantsev's Method:** This method considers the shear strength contribution from different layers and is particularly useful for stratified clay deposits.

**2.2. Analytical Methods (Theoretical Approaches)**

These methods are based on established bearing capacity theories (like Terzaghi, Meyerhof, Hansen, Vesic) but are adapted for layered conditions.

*   **Layered Bearing Capacity Factors ($N_c'$, $N_q'$, $N_\gamma'$):** Some researchers have proposed modified bearing capacity factors that account for the presence of layers.
*   **Extrapolation of Bearing Capacity Theories:** Adapting existing theories by considering the influence of the soil properties in successive layers.

**2.3. Numerical Methods (Advanced Approaches)**

These methods are generally more accurate and versatile for complex soil profiles and geometries.

*   **Finite Element Method (FEM):** A powerful tool that divides the soil mass into small elements and solves the governing equations to determine stress and strain distribution.
*   **Finite Difference Method (FDM):** Similar to FEM, it discretizes the domain and approximates derivatives.

**We will focus on analytical and semi-empirical methods commonly used in practice for numerical problem-solving in this module.**

### 3. Footings on Two-Layered Soils

This is a common scenario and forms the basis for understanding more complex layered profiles. We will consider two main cases:

*   **Case A: Stronger Soil Layer Below a Weaker Soil Layer:** The bearing capacity is generally governed by the properties of the upper, weaker layer.
*   **Case B: Weaker Soil Layer Below a Stronger Soil Layer:** The bearing capacity is influenced by the properties of both layers. The lower, stronger layer can provide additional support, increasing the bearing capacity, but the presence of the upper, weaker layer still limits it.

**3.1. Analytical Approach for Two-Layered Soils (Example: Using a Modified Terzaghi-Meyerhof approach)**

A common approach is to calculate the bearing capacity of the top layer and then consider the influence of the layer below.

**General Bearing Capacity Equation:**

$q_u = c' N_c s_c d_c i_c + q N_q s_q d_q i_q + 0.5 \gamma' B N_\gamma s_\gamma d_\gamma i_\gamma$

Where:
*   $q_u$ = ultimate bearing capacity
*   $c'$ = effective cohesion
*   $q$ = effective overburden pressure at foundation level ($q = \gamma_1 D_f$)
*   $\gamma'$ = effective unit weight of soil below foundation level
*   $B$ = width of footing
*   $N_c, N_q, N_\gamma$ = bearing capacity factors (dependent on $\phi'$)
*   $s_c, s_q, s_\gamma$ = shape factors
*   $d_c, d_q, d_\gamma$ = depth factors
*   $i_c, i_q, i_\gamma$ = inclination factors

**Adaptation for Layered Soils (Simplified Approach):**

Consider a footing on a top layer of soil 1 with thickness $H$ overlying a very thick (or infinitely deep) layer of soil 2.

*   **If $H$ is very large (effectively homogeneous):** Use standard bearing capacity calculations for soil 1.
*   **If $H$ is smaller than the zone of influence:** The bearing capacity is influenced by soil 2.

**Method by Vesic (often used for stratified soils):**

Vesic's method considers the influence of the layer below by introducing correction factors or by modifying the bearing capacity factors. A common approach involves determining if the failure surface extends into the second layer.

**Simplified "Critical Depth" Approach:**

For a footing of width B, a critical depth of influence is often considered to be around 1.5B to 2B below the foundation base.

*   **If the bottom layer is significantly below this critical depth:** The bearing capacity is primarily governed by the properties of the upper layer.
*   **If the bottom layer is within this critical depth:** The properties of the lower layer will have a significant impact.

**Numerical Example: Two-Layered Sand Profile**

**Problem Statement:** A square footing of width $B = 2$ m is to be placed at a depth $D_f = 1.5$ m on a two-layered soil profile.

*   **Layer 1 (Top Layer):**
    *   Thickness $H = 3$ m
    *   $\gamma_1 = 18 \, \text{kN/m}^3$
    *   $\phi_1' = 30^\circ$
    *   $c_1' = 0 \, \text{kPa}$

*   **Layer 2 (Bottom Layer):**
    *   $\gamma_2 = 20 \, \text{kN/m}^3$
    *   $\phi_2' = 35^\circ$
    *   $c_2' = 0 \, \text{kPa}$

**Assumptions:**
*   The footing is on the ground surface for simplicity of calculation of $q$.
*   The ground water table is deep.
*   We will use Terzaghi's bearing capacity factors and shape factors for a square footing.

**Calculations:**

**Step 1: Determine bearing capacity factors for Layer 1.**
For $\phi_1' = 30^\circ$:
$N_c = 30.14$
$N_q = 18.40$
$N_\gamma = 22.02$

**Step 2: Calculate shape factor for a square footing.**
For a square footing (B=L):
$s_c = 1.3$
$s_q = 1.0$
$s_\gamma = 0.4$

**Step 3: Calculate overburden pressure at foundation level.**
$q = \gamma_1 D_f = 18 \, \text{kN/m}^3 \times 1.5 \, \text{m} = 27 \, \text{kN/m}^2$

**Step 4: Calculate bearing capacity assuming only Layer 1 exists (infinite depth).**
$q_{u1} = c_1' N_c s_c + q N_q s_q + 0.5 \gamma_1 B N_\gamma s_\gamma$
$q_{u1} = (0)(30.14)(1.3) + (27)(18.40)(1.0) + 0.5(18)(2)(22.02)(0.4)$
$q_{u1} = 0 + 496.8 + 158.54$
$q_{u1} \approx 655.3 \, \text{kN/m}^2$

**Step 5: Consider the influence of Layer 2.**

The depth of the second layer is $H = 3$ m. The width of the footing is $B = 2$ m.
The critical depth of influence is roughly $1.5B$ to $2B$. In this case, $1.5 \times 2 = 3$ m to $2 \times 2 = 4$ m.
Since the second layer starts at $H = 3$ m, which is within the critical depth of influence, Layer 2 will have an influence.

**Method by B.G. ISMAEL (for granular layers):**

Ismael's method provides a way to adjust the bearing capacity based on the properties of the second layer. The ultimate bearing capacity ($q_u$) on a two-layered soil can be expressed as:

$q_u = q_{u1} \times F$

Where $F$ is a factor that depends on the properties of Layer 2 and the ratio $H/B$.

A simplified approach often used in practice is to consider the bearing capacity as a weighted average or to determine a "reduced" $\phi'$ value for the zone of influence. However, for a more rigorous approach, specific methods like ISMAEL's or computational tools are preferred.

**Simplified Approach for Illustration (Not universally precise):**

Let's consider a simplified approach by reducing the bearing capacity based on a "weakening" factor if Layer 2 is weaker. In this case, Layer 2 ($\phi_2' = 35^\circ$) is stronger than Layer 1 ($\phi_1' = 30^\circ$).

When the lower layer is **stronger**, the bearing capacity can be higher than that of the upper layer alone. However, the failure surface must still predominantly pass through the upper layer until its strength is fully mobilized.

**A common approach by Meyerhof (for sands) for two-layered sands:**

Meyerhof proposed that for a footing on a layer of sand of thickness $H$ overlying a denser sand layer, the bearing capacity can be calculated based on an equivalent friction angle $\phi'_{eq}$ which is a weighted average of the friction angles of the layers within the zone of influence.

For a depth of influence $1.5B$, the effective depth of sand influencing the bearing capacity is $z$.

$\phi'_{eq} = \phi'_1 + (\phi'_2 - \phi'_1) \frac{H}{1.5B}$ (This is a simplified representation, actual correlations are more complex)

In our case: $H = 3$ m, $B = 2$ m, $1.5B = 3$ m. So $H/(1.5B) = 3/3 = 1$.
$\phi'_{eq} = 30^\circ + (35^\circ - 30^\circ) \times 1 = 35^\circ$.

However, this is too simplistic as the upper layer still governs. A more refined approach involves considering the shear strength mobilized in each layer.

**Let's use a more common approach for illustration, which focuses on whether the failure surface reaches the second layer and how it affects it.**

*   **Critical Depth for Square Footing:** Approximately $1.5B$. Here, $1.5B = 3$ m.
*   The second layer starts at a depth of $H=3$ m. This means the failure surface will just touch the second layer if it extends to $1.5B$.

**Method by Poulos and Davis:**

Poulos and Davis suggest that if $H > 1.5B$, the bearing capacity is essentially that of the top layer. If $H < 1.5B$, the bearing capacity is increased.

**A practical simplification for Layer 2 influencing Layer 1:**

When the lower layer is **stronger**, the ultimate bearing capacity ($q_u$) can be considered as the bearing capacity of the upper layer ($q_{u1}$) or a modified value if the failure zone significantly penetrates into the second layer.

A commonly cited approach is to calculate the bearing capacity of the footing on Layer 1, and then consider a reduction factor if Layer 2 is weaker, or potentially an increase if Layer 2 is significantly stronger and the failure plane can develop in it.

**Let's use a simplified method for layered sands where the lower layer is stronger (e.g., from IS codes or research papers):**

The ultimate bearing capacity $q_u$ can be calculated as:

$q_u = c' N_c + q N_q + 0.5 \gamma_1 B N_\gamma$ (for the top layer)

If the depth $H$ of the top layer is less than $B$, then the bearing capacity is calculated using the properties of the top layer.

If $H > B$:
The bearing capacity can be increased. A common empirical approach is to consider an effective width $B_{eff}$ or an effective friction angle.

**Let's consider a more direct approach for two-layer sands with Layer 2 stronger than Layer 1:**

**Method by IS 6403:1981 (Indian Standard Code of Practice for Bearing Capacity):**

For homogeneous soil, the standard equation is used. For stratified soils, the code suggests considering the weakest layer. However, for stratified granular soils, it suggests modifications.

A common approach in practice for layered granular soils is to use an **effective angle of internal friction $\phi'_{eff}$** over the depth of influence.

For $H \geq 1.5B$, $\phi'_{eff} = \phi'_1$.
For $H < 1.5B$, an averaging method can be applied.

A simplified empirical formula for granular soils (e.g., by Meyerhof or adapted from IS codes):

$q_u = q N_q (\text{for the effective depth}) + 0.5 \gamma_{eff} B N_\gamma (\text{for the effective depth})$

The concept of "effective depth" is crucial. For a square footing, this depth is often taken as $1.5B$.

Let's reconsider our problem with $H=3$m and $B=2$m, so $1.5B = 3$m.
Since $H = 1.5B$, the failure surface extends precisely to the interface between Layer 1 and Layer 2.

In such cases, the bearing capacity is generally taken as the bearing capacity of the top layer, with a potential slight increase if the lower layer is significantly stronger.

**Using a more refined empirical approach (Example based on research):**

For two-layered sands, if $\phi'_2 > \phi'_1$ and $H < 1.5B$:
$q_u = q_{u1} \times \text{Factor}$
The factor is $> 1$.

**Let's focus on a widely accepted approach for this specific problem type, often found in textbooks and advanced materials:**

**Method by S. Prakash Rao:**

Rao proposed a method where the bearing capacity of a footing on layered soil is calculated by considering the shear strength of each layer.

**Another common analytical approach:**

Consider the bearing capacity of Layer 1 calculated earlier: $q_{u1} \approx 655.3 \, \text{kN/m}^2$.

Now, we need to assess the contribution of Layer 2.
The critical depth is $1.5B = 3$ m. The thickness of Layer 1 is $H = 3$ m.
This means the failure surface will reach exactly the boundary of Layer 2.

When the lower layer is **stronger**, the ultimate bearing capacity can be higher than $q_{u1}$.
One way to estimate this is to consider the bearing capacity at a depth of $H$ in Layer 1 and compare it with the bearing capacity of Layer 2 at that depth.

Let's calculate the bearing capacity of Layer 2 as if it were homogeneous and the footing was at a depth of $H=3$m within it.
Effective overburden pressure at depth $H=3$m within Layer 2: $q' = \gamma_1 H = 18 \times 3 = 54 \, \text{kN/m}^2$.
Unit weight of Layer 2: $\gamma_2 = 20 \, \text{kN/m}^3$.
$\phi'_2 = 35^\circ$.
Bearing capacity factors for $\phi_2' = 35^\circ$:
$N_c = 51.32$
$N_q = 33.30$
$N_\gamma = 48.03$

Bearing capacity of Layer 2 at depth $H=3$m (assuming footing is placed at this depth and it's homogeneous Layer 2):
$q_{u2, H=3} = c_2' N_c + q' N_q + 0.5 \gamma_2 B N_\gamma$
$q_{u2, H=3} = (0)(51.32)(1.3) + (54)(33.30)(1.0) + 0.5(20)(2)(48.03)(0.4)$
$q_{u2, H=3} = 0 + 1798.2 + 768.5$
$q_{u2, H=3} \approx 2566.7 \, \text{kN/m}^2$

This value ($2566.7 \, \text{kN/m}^2$) represents the bearing capacity of Layer 2 if the footing were placed at a depth of 3m into a homogeneous Layer 2. This is much higher than $q_{u1}$.

**How to combine these?**

When Layer 2 is stronger and $H$ is around $1.5B$ or more, the bearing capacity is often taken as the bearing capacity of the upper layer, but with an understanding that it is conservatively estimated. More advanced methods might give a slightly higher value.

**A common engineering practice in such cases (stronger layer below):**

*   Calculate bearing capacity of the upper layer ($q_{u1}$).
*   If the critical depth ($1.5B$ or $2B$) is fully within the upper layer, use $q_{u1}$.
*   If the critical depth extends into the lower layer:
    *   If the lower layer is **weaker**, the bearing capacity is governed by the weaker layer, or a reduced value of $q_{u1}$.
    *   If the lower layer is **stronger**, the bearing capacity is generally taken as $q_{u1}$, or potentially an increased value based on more sophisticated methods.

**For this specific problem statement:**

Given $H=3$m and $B=2$m, the critical depth of influence for a square footing is around $1.5B = 3$m.
Since $H=3$m, the failure surface just reaches the boundary of Layer 2. Layer 2 is stronger ($\phi'_2 = 35^\circ$ vs $\phi'_1 = 30^\circ$).

In this scenario, the bearing capacity is generally taken as the bearing capacity of the upper layer, $q_{u1} \approx 655.3 \, \text{kN/m}^2$.

**Let's consider a slightly different scenario to illustrate the influence of Layer 2 being weaker:**

**Scenario 2:** Layer 1: $\phi'_1 = 30^\circ$, $H=1$ m. Layer 2: $\phi'_2 = 25^\circ$.
Here, $H = 1$ m and $B = 2$ m. So $H < B < 1.5B$.
The failure surface will definitely extend into Layer 2.
Since Layer 2 is weaker, the bearing capacity will be less than $q_{u1}$.

In such cases, specialized methods are required, like the empirical methods for layered soils which involve correction factors or effective friction angles.

**Example of a simplified empirical factor (for illustration, not a specific code):**

Let $F_w$ be a reduction factor for a weaker layer below.
$q_u = q_{u1} \times F_w$
$F_w < 1$.

**General Principle for Layered Soils:**
*   The bearing capacity is limited by the strength of the soil layers through which the failure surface passes.
*   If a weaker layer is present within the zone of influence, it will reduce the bearing capacity.
*   If a stronger layer is present below, it can potentially increase the bearing capacity, but the upper layers still play a dominant role.

### 4. Footings on Three or More Layered Soils

The analysis becomes more complex with more layers. The general approach involves:

*   **Identifying the critical layers:** The layers that lie within the zone of influence (typically $1.5B$ to $2B$).
*   **Applying methods that account for multiple layers:**
    *   **Poulos and Davis Method:** For layered systems, they developed methods to determine the stress distribution and settlement, which can be related to bearing capacity.
    *   **Numerical Methods (FEM/FDM):** These are often the most practical and accurate for complex layered profiles.
    *   **Empirical Charts/Correlations:** Specific charts or correlations might exist for common multi-layered profiles.

**Key Concept: Stress Penetration Depth**

The stresses induced by a foundation penetrate into the soil. The depth to which these stresses are significant is termed the stress penetration depth or zone of influence. This depth is typically estimated to be around $1.5B$ to $2B$ for the purpose of bearing capacity analysis.

### 5. Numerical Problem - Clay Layer Over Sand Layer

**Problem Statement:** A strip footing of width $B = 2$ m is to be placed at a depth $D_f = 1$ m on a two-layered soil.

*   **Layer 1 (Top Layer - Clay):**
    *   Thickness $H = 2$ m
    *   $\gamma_1 = 17 \, \text{kN/m}^3$
    *   $c_1 = 25 \, \text{kPa}$ (undrained cohesion, $c_u$)
    *   $\phi_1 = 0^\circ$ (for undrained condition)

*   **Layer 2 (Bottom Layer - Sand):**
    *   $\gamma_2 = 20 \, \text{kN/m}^3$
    *   $\phi_2 = 30^\circ$
    *   $c_2 = 0 \, \text{kPa}$

**Assumptions:**
*   Analyze for short-term (undrained) conditions, where the clay layer controls the behavior.
*   Assume no inclination of load.
*   Use Terzaghi's bearing capacity factors and shape factors for a strip footing.

**Calculations:**

**Step 1: Determine bearing capacity factors for Layer 1 (Clay, $\phi_1 = 0^\circ$).**
For $\phi' = 0^\circ$:
$N_c = 5.71$
$N_q = 1.00$
$N_\gamma = 0.00$

**Step 2: Calculate shape factors for a strip footing.**
For a strip footing (L/B $\to \infty$):
$s_c = 1.0$
$s_q = 1.0$
$s_\gamma = 1.0$

**Step 3: Calculate overburden pressure at foundation level.**
$q = \gamma_1 D_f = 17 \, \text{kN/m}^3 \times 1 \, \text{m} = 17 \, \text{kN/m}^2$

**Step 4: Calculate bearing capacity assuming only Layer 1 exists (infinite depth).**
$q_{u1} = c_1 N_c s_c + q N_q s_q + 0.5 \gamma_1 B N_\gamma s_\gamma$
$q_{u1} = (25)(5.71)(1.0) + (17)(1.0)(1.0) + 0.5(17)(2)(0.0)(1.0)$
$q_{u1} = 142.75 + 17 + 0$
$q_{u1} \approx 159.75 \, \text{kN/m}^2$

**Step 5: Consider the influence of Layer 2 (Sand).**

The thickness of the clay layer is $H = 2$ m. The width of the footing is $B = 2$ m.
For clay, the critical depth of influence is often taken as $B$ to $2B$. Let's consider $1.5B = 1.5 \times 2 = 3$ m.

Since $H = 2$ m, which is less than $1.5B = 3$ m, the failure surface will extend into Layer 2 (Sand).

**Method by IS 6403:1981 for clay over sand (simplified):**

For a cohesive soil layer of thickness $H$ over a granular stratum, the ultimate bearing capacity ($q_u$) is calculated as:

$q_u = c' N_c (1 + 0.2 \frac{B}{L}) + q N_q (1 + 0.2 \frac{B}{L}) + 0.5 \gamma' B N_\gamma (0.4 \frac{B}{D_f})$

But for layered soils, the method by Meyerhof (1974) and IS 6403 provides modifications.

**Meyerhof's Approach (for clay over sand):**

Meyerhof proposed that if the depth $H$ of the clay layer is less than $B$, the bearing capacity is reduced significantly. If $H > B$, the bearing capacity is closer to that of the clay layer alone.

A common adjustment factor, $\alpha$, is used, which depends on $H/B$.

$q_u = q_{u1} \times \alpha$

Where $\alpha$ is a factor dependent on $H/B$. For clay over sand, if $H/B > 1$, $\alpha$ might be close to 1. If $H/B < 1$, $\alpha$ is less than 1.

In our case, $H = 2$ m and $B = 2$ m, so $H/B = 1$.
For $H/B = 1$, the bearing capacity is often taken as the bearing capacity of the top clay layer, $q_{u1}$. However, some methodologies suggest a slight reduction.

**Let's use a more direct approach based on the depth of influence:**

The critical depth of influence for clay is often taken as $B$.
Since $H = 2$ m and $B = 2$ m, the failure surface will likely extend to the interface of Layer 1 and Layer 2.

**Method by IS 6403 for stratified soil:**

The code suggests calculating the bearing capacity for each layer and then taking the minimum. This is generally for cases where failure occurs within a specific layer due to its weakness.

However, for clay over sand, the influence of the sand layer is more subtle.

**Let's consider a common approach using influence factors for layered soils:**

*   Calculate $q_{u1}$ as if it's a homogeneous clay layer.
*   If the failure zone ($1.5B$) extends into the sand layer, and the sand is weaker than the clay's effective strength parameters, then the bearing capacity will be less than $q_{u1}$.
*   If the sand layer is stronger, it might provide some support.

In this specific case (Clay over Sand), the analysis often involves determining if the sand layer can effectively support the clay layer or if the failure propagates through the clay and into the sand in a way that reduces the overall capacity.

**Practical Approach for Clay over Sand:**

1.  **Calculate bearing capacity of the top clay layer ($q_{u1}$).** (We got $159.75 \, \text{kN/m}^2$).
2.  **Check the depth of influence:** For clay, often $1.5B$ is used. Here, $1.5B = 3$ m.
3.  **Compare $H$ with the depth of influence:** $H = 2$ m is less than $3$ m. So, the sand layer is influential.
4.  **Consider the strength of the sand layer:** The sand layer is granular with $\phi_2 = 30^\circ$.
5.  **For clay over sand, if $H < B$:** The bearing capacity is significantly reduced.
6.  **For clay over sand, if $H \geq B$:** The bearing capacity is generally taken as $q_{u1}$ or a value slightly reduced by the presence of the sand.

A more accurate method (e.g., by Meyerhof or specialized charts) would involve a reduction factor. For $H/B=1$, a common reduction factor might be around $0.8$ to $0.9$.

**Let's assume a reduction factor of $\alpha = 0.85$ for $H/B=1$ (this is an illustrative value; specific codes/references should be consulted for precise factors).**

$q_{u} = q_{u1} \times \alpha = 159.75 \, \text{kN/m}^2 \times 0.85$
$q_{u} \approx 135.8 \, \text{kN/m}^2$

**Therefore, the ultimate bearing capacity of the footing on this layered soil is approximately $135.8 \, \text{kN/m}^2$.**

### 6. Practice Questions/Exercises

**Question 1:**
A square footing of width $B = 2.5$ m is placed at a depth $D_f = 1.2$ m on a homogeneous clay layer. The clay has an undrained shear strength $c_u = 40 \, \text{kPa}$ and unit weight $\gamma = 19 \, \text{kN/m}^3$. Calculate the ultimate bearing capacity for short-term conditions.
(Use $N_c = 5.71, N_q = 1, N_\gamma = 0$).

**Answer 1:**
$q = \gamma D_f = 19 \times 1.2 = 22.8 \, \text{kN/m}^2$.
Shape factor for square footing ($s_c = 1.3$).
$q_u = c_u N_c s_c + q N_q s_q + 0.5 \gamma B N_\gamma s_\gamma$
$q_u = 40 \times 5.71 \times 1.3 + 22.8 \times 1 \times 1 + 0$
$q_u = 297.08 + 22.8 = 319.88 \, \text{kN/m}^2$.

**Question 2:**
A square footing of width $B = 2$ m is to be placed at a depth $D_f = 1.5$ m on a two-layered soil.
*   **Layer 1 (Top Layer):**
    *   Thickness $H = 2.5$ m
    *   $\gamma_1 = 18 \, \text{kN/m}^3$
    *   $\phi_1' = 28^\circ$
    *   $c_1' = 0 \, \text{kPa}$
*   **Layer 2 (Bottom Layer):**
    *   $\gamma_2 = 20 \, \text{kN/m}^3$
    *   $\phi_2' = 32^\circ$
    *   $c_2' = 0 \, \text{kPa}$

Calculate the ultimate bearing capacity using the concept of effective friction angle for the zone of influence, assuming the zone of influence is $1.5B$. (Use simplified averaging for illustration).

**Answer 2:**
$B = 2$ m. Zone of influence $\approx 1.5B = 3$ m.
$H = 2.5$ m.
Since $H < 1.5B$, Layer 2 influences the bearing capacity.
Layer 2 is stronger than Layer 1.
Simplified effective friction angle approach:
$\phi'_{eff} = \phi'_1 + (\phi'_2 - \phi'_1) \times \frac{H}{1.5B}$
$\phi'_{eff} = 28^\circ + (32^\circ - 28^\circ) \times \frac{2.5}{3}$
$\phi'_{eff} = 28^\circ + 4^\circ \times 0.833$
$\phi'_{eff} = 28^\circ + 3.33^\circ = 31.33^\circ$.

Now, calculate bearing capacity using $\phi'_{eff} = 31.33^\circ$.
For $\phi' = 31.33^\circ$:
$N_c = 33.30$
$N_q = 21.47$
$N_\gamma = 27.09$

Shape factor for square footing ($s_c = 1.3, s_q = 1.0, s_\gamma = 0.4$).
$q = \gamma_1 D_f = 18 \times 1.5 = 27 \, \text{kN/m}^2$.
$q_u = c_1' N_c s_c + q N_q s_q + 0.5 \gamma_1 B N_\gamma s_\gamma$
$q_u = 0 + 27 \times 21.47 \times 1.0 + 0.5 \times 18 \times 2 \times 27.09 \times 0.4$
$q_u = 579.69 + 195.05 = 774.74 \, \text{kN/m}^2$.

**Note:** This simplified $\phi'_{eff}$ method is an approximation. More rigorous methods would provide a more accurate result. The actual bearing capacity might be slightly less than this value because the failure surface still has to pass through the entire thickness of Layer 1.

**Question 3:**
A strip footing of width $B = 1.5$ m is placed at a depth $D_f = 1$ m on a two-layered soil.
*   **Layer 1 (Top Layer - Clay):**
    *   Thickness $H = 1$ m
    *   $\gamma_1 = 17 \, \text{kN/m}^3$
    *   $c_1 = 30 \, \text{kPa}$
    *   $\phi_1 = 0^\circ$
*   **Layer 2 (Bottom Layer - Sand):**
    *   $\gamma_2 = 20 \, \text{kN/m}^3$
    *   $\phi_2 = 30^\circ$
    *   $c_2 = 0 \, \text{kPa}$

Calculate the ultimate bearing capacity for short-term conditions. Use an illustrative reduction factor of $\alpha = 0.8$ for $H/B < 1$ for clay over sand.

**Answer 3:**
Calculate bearing capacity of Layer 1 (homogeneous clay):
$q = \gamma_1 D_f = 17 \times 1 = 17 \, \text{kN/m}^2$.
For strip footing, shape factors $s_c=1, s_q=1, s_\gamma=1$.
$N_c = 5.71, N_q = 1, N_\gamma = 0$.
$q_{u1} = c_1 N_c s_c + q N_q s_q = 30 \times 5.71 \times 1 + 17 \times 1 \times 1 = 171.3 + 17 = 188.3 \, \text{kN/m}^2$.

Now, consider the influence of Layer 2.
$H = 1$ m, $B = 1.5$ m. So $H/B = 1/1.5 = 0.67 < 1$.
Using the illustrative reduction factor $\alpha = 0.8$.
$q_u = q_{u1} \times \alpha = 188.3 \times 0.8 = 150.64 \, \text{kN/m}^2$.

### 7. Important Points to Remember

*   **Soil Variability:** Always assume layered soils unless proven otherwise.
*   **Zone of Influence:** Understand that stresses penetrate to a certain depth (typically 1.5B to 2B) and layers within this zone are critical.
*   **Weaker Layer Governs:** If a weaker layer exists within the zone of influence, it will likely control the bearing capacity, leading to a reduction compared to homogeneous conditions of the stronger layer.
*   **Stronger Layer Below:** A stronger layer below can increase bearing capacity, but the extent of increase depends on the thickness of the upper layer and the relative strengths.
*   **Short-term vs. Long-term:** For clays, always distinguish between undrained (short-term, $\phi=0$) and drained (long-term, effective stress parameters) conditions. Layered analysis needs to be done for the relevant condition.
*   **Analytical vs. Numerical:** While analytical methods provide good approximations, numerical methods (FEM) are essential for complex, multi-layered soil profiles or unusual geometries.
*   **Codes and Standards:** Always refer to relevant geotechnical codes and standards for specific methodologies and correction factors, as these can vary by region and project requirements.
*   **Settlement:** While this topic focuses on bearing capacity, settlement is often a critical design consideration in layered soils, and specialized analysis is required for it.

This concludes the study notes for "Numerical Problems - Footings on Layered Soil Concept." Remember to practice applying these concepts to various problem scenarios.
