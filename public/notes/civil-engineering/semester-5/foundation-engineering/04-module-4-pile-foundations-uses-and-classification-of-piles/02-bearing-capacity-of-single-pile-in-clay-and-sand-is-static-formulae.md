---
title: "Bearing capacity of single pile in clay and sand [I.S. Static formulae]"
subject: "FOUNDATION ENGINEERING"
module: "Module 4: Pile foundations: Uses and classification of piles "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e42"
status: "completed"
scrapedAt: "2026-05-20T18:48:41.670Z"
---
# FOUNDATION ENGINEERING - Module 4: Pile Foundations

## Topic: Bearing Capacity of Single Pile in Clay and Sand (I.S. Static Formulae)

---

### Learning Outcomes:

*   Understand the fundamental principles behind calculating the ultimate bearing capacity of a single pile.
*   Learn to apply the Indian Standard (I.S.) static formulae for estimating the bearing capacity of piles in cohesive (clay) soils.
*   Learn to apply the Indian Standard (I.S.) static formulae for estimating the bearing capacity of piles in cohesionless (sand) soils.
*   Identify the components contributing to the total bearing capacity of a pile (tip resistance and shaft resistance).
*   Understand the factors influencing the bearing capacity of piles.
*   Be able to perform calculations to determine the safe bearing capacity of a single pile.

---

### 1. Introduction to Pile Foundations

*   **What are Pile Foundations?**
    *   Deep foundation elements used to transfer structural loads to deeper, stronger soil strata or bedrock, bypassing weaker upper soil layers.
    *   Typically driven or bored into the ground.
*   **When are Pile Foundations Used?**
    *   When the shallow soil strata are weak, compressible, or susceptible to settlement.
    *   When there are significant lateral loads.
    *   For heavy vertical loads where shallow foundations are inadequate.
    *   To resist uplift forces.
    *   In expansive or collapsible soils.
    *   In marine environments or areas prone to scour.

---

### 2. Components of Pile Bearing Capacity

The total ultimate bearing capacity ($Q_u$) of a single pile is the sum of its **tip resistance** ($Q_p$) and **shaft resistance** ($Q_s$).

$Q_u = Q_p + Q_s$

*   **Tip Resistance ($Q_p$)**: The resistance offered by the soil at the tip (base) of the pile. It's essentially a bearing capacity problem of a footing at the pile tip level.
*   **Shaft Resistance ($Q_s$)**: The frictional resistance developed between the pile surface and the surrounding soil along the pile's shaft.

---

### 3. Bearing Capacity of Piles in Clay (Cohesive Soils)

In saturated clays, the shear strength is primarily governed by the **undrained shear strength ($c_u$)**, which is assumed to be constant with depth or varies linearly.

#### 3.1. Indian Standard (I.S.) Static Formulae for Clay

The I.S. code (IS 2911 Part 1, Section 1: 1995) provides formulae for calculating the bearing capacity of piles.

**a) Tip Resistance ($Q_p$) in Clay:**

$Q_p = A_p \times c_{uc} \times N_c$

Where:
*   $A_p$: Area of the pile tip (for a circular pile, $A_p = \frac{\pi}{4} D^2$; for a square pile, $A_p = B^2$).
    *   $D$: Diameter of the pile (for circular piles).
    *   $B$: Width/Diameter of the pile (for square/circular piles).
*   $c_{uc}$: Average undrained shear strength of the clay at the pile tip level.
*   $N_c$: Bearing capacity factor. For deep foundations (like piles), a constant value of **$N_c = 9$** is generally used for clay.

**Therefore, the formula for tip resistance in clay becomes:**

$Q_p = A_p \times c_{uc} \times 9$

**b) Shaft Resistance ($Q_s$) in Clay:**

The shaft resistance is calculated by summing the frictional resistance along the shaft of the pile. The I.S. code uses an **$\alpha$-method** or the **$\beta$-method**. The **$\alpha$-method** is more commonly presented in introductory contexts.

**$\alpha$-Method:**

$Q_s = \sum_{i=1}^{n} A_{si} \times \alpha_i \times c_{u,avg,i}$

Where:
*   $A_{si}$: Surface area of the pile shaft in the $i$-th layer.
    *   For a cylindrical pile: $A_{si} = \pi D L_i$ (where $L_i$ is the length of the pile segment in layer $i$).
    *   For a square pile: $A_{si} = 4 B L_i$.
*   $\alpha_i$: Adhesion factor, which depends on the undrained shear strength ($c_u$) of the clay and the pile material. It represents the degree of adhesion between the clay and the pile surface.
    *   The $\alpha$ factor accounts for the fact that the shear strength of the clay at the pile-soil interface is often less than the undisturbed undrained shear strength of the soil.
    *   **Typical values of $\alpha$ (as per IS 2911 Part 1, Section 1: 1995):**
        *   For normally consolidated clays: $\alpha = 1.0$ (for very soft to soft clays, $c_u \le 25$ kPa)
        *   $\alpha = 0.9$ (for stiff clays, $25 < c_u \le 50$ kPa)
        *   $\alpha = 0.7$ (for very stiff clays, $50 < c_u \le 100$ kPa)
        *   $\alpha = 0.5$ (for hard clays, $c_u > 100$ kPa)
        *   *Note: Some codes/references may provide slightly different ranges or specific charts for $\alpha$. The key is that $\alpha$ decreases as $c_u$ increases.*
*   $c_{u,avg,i}$: Average undrained shear strength of the clay in the $i$-th layer.

**Total Ultimate Bearing Capacity ($Q_u$) in Clay:**

$Q_u = Q_p + Q_s = (A_p \times c_{uc} \times 9) + (\sum_{i=1}^{n} A_{si} \times \alpha_i \times c_{u,avg,i})$

#### 3.2. Factors Affecting Shaft Resistance in Clay

*   **Undrained Shear Strength ($c_u$)**: Higher $c_u$ leads to higher shaft resistance.
*   **Adhesion Factor ($\alpha$)**: Represents the bond between the pile and soil.
*   **Pile Surface Roughness**: Rougher surfaces generally provide better adhesion.
*   **Pile Material**: Different materials (concrete, steel, timber) can have varying adhesion.
*   **Effective Stress**: While the $\alpha$-method primarily uses undrained shear strength, in reality, effective stress plays a role, especially in partially saturated or overconsolidated clays.

---

### 4. Bearing Capacity of Piles in Sand (Cohesionless Soils)

In cohesionless soils (sands and gravels), the shear strength is characterized by the **angle of internal friction ($\phi$)**. The resistance develops due to interlocking of soil particles and friction along the pile surface.

#### 4.1. Indian Standard (I.S.) Static Formulae for Sand

The I.S. code (IS 2911 Part 1, Section 1: 1995) uses an approach based on effective stresses and an empirical factor.

**a) Tip Resistance ($Q_p$) in Sand:**

$Q_p = A_p \times P_p \times N_q$

Where:
*   $A_p$: Area of the pile tip.
*   $P_p$: Effective overburden pressure at the pile tip level. $P_p = \bar{\sigma}_{v}' = \gamma' H_{tip}$
    *   $\gamma'$: Effective unit weight of the soil.
    *   $H_{tip}$: Depth of the pile tip from the ground surface.
*   $N_q$: Bearing capacity factor for a strip footing, which depends on the angle of internal friction ($\phi$).
    *   **I.S. Code recommendations for $N_q$:**
        *   For $\phi = 0^\circ$, $N_q = 1$
        *   For $\phi = 10^\circ$, $N_q = 2.5$
        *   For $\phi = 20^\circ$, $N_q = 6$
        *   For $\phi = 30^\circ$, $N_q = 25$
        *   For $\phi = 40^\circ$, $N_q = 100$
        *   *The code provides a chart or table for interpolating values of $N_q$ for intermediate $\phi$ values.*

**However, a more practical I.S. approach, often referred to as the "static approach" or "limiting pressure approach" for sands, is to consider a limiting resistance at the tip.**

**Modified I.S. Formula for Tip Resistance in Sand (often used in practice):**

$Q_p = A_p \times q_p$

Where:
*   $q_p$: Limiting unit tip resistance.
    *   **For sands: $q_p = P_p \times N_q$**, but with a **maximum limiting value** to account for arching effects and the fact that the soil above the pile tip doesn't contribute fully.
    *   **I.S. Code Limit for $q_p$**: The effective overburden pressure $P_p$ at the pile tip level is considered up to a maximum depth of $15B$ or $20B$ from the tip (whichever is shallower), or $10D$ from the ground level. This is to account for the zone of influence.
    *   More practically, a limiting value for $q_p$ is often taken as:
        *   $q_p \approx 11 \times N_q$ (for $\phi = 30^\circ$)
        *   $q_p \approx 12 \times N_q$ (for $\phi = 35^\circ$)
        *   $q_p \approx 13 \times N_q$ (for $\phi = 40^\circ$)
        *   *The I.S. code specifies that the ultimate unit tip resistance ($q_p$) should not exceed $p_p N_q$ and also has an upper bound limit based on a value of $p_p$ corresponding to the "critical depth" (usually around $10D$ to $15D$).*

**b) Shaft Resistance ($Q_s$) in Sand:**

$Q_s = \sum_{i=1}^{n} A_{si} \times P_{avg,i} \times K \times \tan \delta$

Where:
*   $A_{si}$: Surface area of the pile shaft in the $i$-th layer.
*   $P_{avg,i}$: Average effective vertical stress on the pile shaft in the $i$-th layer.
    *   $P_{avg,i} = \frac{\sigma'_{v,top} + \sigma'_{v,bottom}}{2}$ for the segment in layer $i$.
*   $K$: Coefficient of lateral earth pressure.
    *   For driven piles in sand, $K$ is often taken as 1.0 to 1.5 (or even higher).
    *   For bored piles, $K$ might be lower, around 0.5 to 1.0.
    *   **I.S. Code Suggestion:** $K$ can be taken as $1.0$ for sands.
*   $\delta$: Angle of friction between the pile surface and the sand.
    *   It is related to the angle of internal friction of the sand ($\phi$).
    *   **I.S. Code Suggestion:** $\delta \approx 0.75 \phi$ to $\phi$. A common value is $\delta = \frac{2}{3}\phi$ to $\phi$. The code suggests $\delta = 0.75\phi$ to $\phi$.

**Total Ultimate Bearing Capacity ($Q_u$) in Sand:**

$Q_u = Q_p + Q_s = (A_p \times q_p) + (\sum_{i=1}^{n} A_{si} \times P_{avg,i} \times K \times \tan \delta)$

#### 4.2. Factors Affecting Shaft Resistance in Sand

*   **Angle of Internal Friction ($\phi$)**: Higher $\phi$ leads to higher shaft resistance.
*   **Effective Overburden Pressure**: Higher effective stresses result in greater frictional resistance.
*   **Coefficient of Lateral Earth Pressure ($K$)**: Represents the ratio of horizontal to vertical effective stress.
*   **Angle of Pile-Soil Friction ($\delta$)**: Influenced by the roughness of the pile surface and the density of the sand.
*   **Pile Roughness and Material**: Rougher surfaces and dense sands increase $\delta$.
*   **Relative Density of Sand**: Denser sands offer higher resistance.

#### 4.3. Critical Depth in Sands

*   In sands, the shaft resistance ($Q_s$) generally increases with depth up to a certain point (critical depth), after which it tends to become constant or even decrease slightly.
*   The critical depth is typically considered to be around $10D$ to $20D$ (where $D$ is the pile diameter or width). Beyond this depth, the increasing overburden pressure is offset by arching effects of the soil above, leading to a plateau or reduction in the rate of increase of shaft resistance.
*   The tip resistance ($Q_p$) also reaches a limiting value at a certain depth due to the same reasons.

---

### 5. Safe Bearing Capacity ($Q_{safe}$)

The ultimate bearing capacity ($Q_u$) is the load at which the pile fails. For design purposes, the **safe bearing capacity** is calculated by applying a factor of safety (F.S.) to the ultimate bearing capacity.

$Q_{safe} = \frac{Q_u}{F.S.}$

*   **Factor of Safety (F.S.)**: Typically ranges from **2.5 to 3.0**, depending on the reliability of soil data, methods of construction, and the consequences of failure. The I.S. code generally recommends F.S. = 2.5.

---

### 6. Example Calculations

#### Example 1: Pile in Clay

**Problem:** A circular concrete pile of 0.5 m diameter and 15 m length is driven into a homogeneous clay deposit. The undrained shear strength of the clay is $c_u = 50$ kPa. Calculate the ultimate bearing capacity of the pile using the I.S. static formulae. Assume F.S. = 2.5.

**Solution:**

1.  **Calculate Pile Area ($A_p$):**
    $A_p = \frac{\pi}{4} D^2 = \frac{\pi}{4} (0.5 \, \text{m})^2 = 0.196 \, \text{m}^2$

2.  **Calculate Tip Resistance ($Q_p$):**
    $c_{uc} = 50$ kPa (average undrained shear strength at the tip)
    $N_c = 9$ (for piles in clay)
    $Q_p = A_p \times c_{uc} \times N_c = 0.196 \, \text{m}^2 \times 50 \, \text{kN/m}^2 \times 9 = 882 \, \text{kN}$

3.  **Calculate Shaft Resistance ($Q_s$):**
    The clay is homogeneous, so we consider it as one layer.
    Pile length ($L$) = 15 m.
    Average undrained shear strength along the shaft ($c_{u,avg}$) = 50 kPa.
    Pile diameter ($D$) = 0.5 m.
    Surface area of shaft ($A_s$) = $\pi D L = \pi \times 0.5 \, \text{m} \times 15 \, \text{m} = 23.56 \, \text{m}^2$

    Determine the adhesion factor ($\alpha$): For $c_u = 50$ kPa (stiff clay), $\alpha = 0.7$.

    $Q_s = A_s \times \alpha \times c_{u,avg} = 23.56 \, \text{m}^2 \times 0.7 \times 50 \, \text{kN/m}^2 = 824.6 \, \text{kN}$

4.  **Calculate Ultimate Bearing Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 882 \, \text{kN} + 824.6 \, \text{kN} = 1706.6 \, \text{kN}$

5.  **Calculate Safe Bearing Capacity ($Q_{safe}$):**
    $Q_{safe} = \frac{Q_u}{F.S.} = \frac{1706.6 \, \text{kN}}{2.5} = 682.64 \, \text{kN}$

**Answer:** The ultimate bearing capacity is 1706.6 kN, and the safe bearing capacity is 682.64 kN.

#### Example 2: Pile in Sand

**Problem:** A square concrete pile of 0.4 m x 0.4 m and 10 m length is driven into a uniform sand deposit. The average angle of internal friction ($\phi$) of the sand is $35^\circ$. The effective unit weight of the sand is $\gamma' = 18 \, \text{kN/m}^3$. The coefficient of lateral earth pressure $K = 1.0$, and the angle of pile-soil friction $\delta = 0.75 \phi$. Calculate the ultimate bearing capacity using the I.S. static formulae. Assume F.S. = 2.5.

**Solution:**

1.  **Calculate Pile Tip Area ($A_p$):**
    $A_p = B^2 = (0.4 \, \text{m})^2 = 0.16 \, \text{m}^2$

2.  **Calculate Tip Resistance ($Q_p$):**
    Pile tip depth ($H_{tip}$) = 10 m.
    Effective overburden pressure at tip ($P_p$) = $\gamma' H_{tip} = 18 \, \text{kN/m}^3 \times 10 \, \text{m} = 180 \, \text{kN/m}^2$.

    From I.S. recommendations (or interpolation): For $\phi = 35^\circ$, $N_q \approx 35 - 40$. Let's use $N_q = 35$ for this example.
    (A more precise chart might give a slightly different value. For $35^\circ$, $N_q$ is often around 35-40. Let's use $N_q=38$ for better accuracy if interpolation is done carefully.)
    Let's use $N_q = 38$.

    Unit tip resistance ($q_p$) = $P_p \times N_q = 180 \, \text{kN/m}^2 \times 38 = 6840 \, \text{kN/m}^2$.

    **Check for limiting value:** The critical depth for sand is around $10D$ to $15D$. Here $B=0.4$m, so $10B = 4$m. The effective pressure is considered up to a certain depth above the tip. Let's consider the average effective stress over the critical depth above the tip. However, a common simplification is to cap the $q_p$ value. The I.S. code limits the unit tip resistance. For $\phi = 35^\circ$, a common limiting value of $q_p$ might be around $4000 - 5000 \, \text{kN/m}^2$.
    *Let's assume for this problem that the calculated $q_p = 6840 \, \text{kN/m}^2$ is within the acceptable range as per the specific I.S. code chart for the critical depth consideration.* If a limit were, say, 5000 kN/m², we would use that. For this example, we'll proceed with the calculated $q_p$.

    $Q_p = A_p \times q_p = 0.16 \, \text{m}^2 \times 6840 \, \text{kN/m}^2 = 1094.4 \, \text{kN}$

3.  **Calculate Shaft Resistance ($Q_s$):**
    The sand is uniform. We can consider the average effective pressure along the shaft.
    Pile length ($L$) = 10 m.
    Width ($B$) = 0.4 m.
    Surface area of shaft ($A_s$) = $4 B L = 4 \times 0.4 \, \text{m} \times 10 \, \text{m} = 16 \, \text{m}^2$.

    Calculate average effective vertical stress along the shaft:
    $\sigma'_{v,top}$ (at ground level) = 0
    $\sigma'_{v,bottom}$ (at 10m depth) = $18 \, \text{kN/m}^3 \times 10 \, \text{m} = 180 \, \text{kN/m}^2$.
    Average effective stress ($P_{avg}$) = $\frac{0 + 180}{2} = 90 \, \text{kN/m}^2$.

    $K = 1.0$
    $\phi = 35^\circ$
    $\delta = 0.75 \phi = 0.75 \times 35^\circ = 26.25^\circ$
    $\tan \delta = \tan(26.25^\circ) \approx 0.491$

    $Q_s = A_s \times P_{avg} \times K \times \tan \delta = 16 \, \text{m}^2 \times 90 \, \text{kN/m}^2 \times 1.0 \times 0.491 = 707.04 \, \text{kN}$

4.  **Calculate Ultimate Bearing Capacity ($Q_u$):**
    $Q_u = Q_p + Q_s = 1094.4 \, \text{kN} + 707.04 \, \text{kN} = 1801.44 \, \text{kN}$

5.  **Calculate Safe Bearing Capacity ($Q_{safe}$):**
    $Q_{safe} = \frac{Q_u}{F.S.} = \frac{1801.44 \, \text{kN}}{2.5} = 720.58 \, \text{kN}$

**Answer:** The ultimate bearing capacity is approximately 1801.4 kN, and the safe bearing capacity is approximately 720.6 kN.

---

### 7. Practice Questions

**Question 1:** A square pile of 0.3m x 0.3m and 12m length is driven into a soft clay layer. The undrained shear strength ($c_u$) is uniform at 30 kPa. Calculate the ultimate bearing capacity of the pile using the I.S. static formulae. Assume $\alpha = 1.0$ and F.S. = 2.5.

**Question 2:** A circular pile of 0.6m diameter and 20m length is to be installed in a sand deposit. The effective unit weight of the sand is $19 \, \text{kN/m}^3$. The angle of internal friction ($\phi$) is $30^\circ$. The effective overburden pressure at the tip level (20m depth) is $380 \, \text{kN/m}^2$. The I.S. code suggests $N_q = 25$ for $\phi = 30^\circ$, and a limiting value of $q_p = 4000 \, \text{kN/m}^2$. Assume $K=1.0$ and $\delta = 0.75 \phi$. Calculate the safe bearing capacity of the pile.

---

### 8. Answers to Practice Questions

**Answer 1:**

1.  $A_p = (0.3 \text{ m})^2 = 0.09 \, \text{m}^2$
2.  $Q_p = A_p \times c_{uc} \times N_c = 0.09 \, \text{m}^2 \times 30 \, \text{kN/m}^2 \times 9 = 24.3 \, \text{kN}$
3.  $A_s = 4 \times B \times L = 4 \times 0.3 \, \text{m} \times 12 \, \text{m} = 14.4 \, \text{m}^2$
4.  $Q_s = A_s \times \alpha \times c_{u,avg} = 14.4 \, \text{m}^2 \times 1.0 \times 30 \, \text{kN/m}^2 = 432 \, \text{kN}$
5.  $Q_u = Q_p + Q_s = 24.3 \, \text{kN} + 432 \, \text{kN} = 456.3 \, \text{kN}$
6.  $Q_{safe} = Q_u / F.S. = 456.3 \, \text{kN} / 2.5 = 182.52 \, \text{kN}$

    **Ultimate Bearing Capacity = 456.3 kN**
    **Safe Bearing Capacity = 182.52 kN**

**Answer 2:**

1.  $A_p = \frac{\pi}{4} (0.6 \text{ m})^2 = 0.2827 \, \text{m}^2$
2.  $P_p = 380 \, \text{kN/m}^2$
3.  $N_q = 25$ (for $\phi = 30^\circ$)
4.  Calculated $q_p = P_p \times N_q = 380 \, \text{kN/m}^2 \times 25 = 9500 \, \text{kN/m}^2$.
5.  **Limiting $q_p = 4000 \, \text{kN/m}^2$ (as per code)**. Use this value.
6.  $Q_p = A_p \times q_p(\text{limited}) = 0.2827 \, \text{m}^2 \times 4000 \, \text{kN/m}^2 = 1130.8 \, \text{kN}$
7.  $A_s = \pi D L = \pi \times 0.6 \, \text{m} \times 20 \, \text{m} = 37.7 \, \text{m}^2$
8.  Average effective stress $P_{avg}$ at 10m depth = $(0 + 380)/2 = 190 \, \text{kN/m}^2$.
9.  $\phi = 30^\circ$, $\delta = 0.75 \times 30^\circ = 22.5^\circ$, $\tan \delta = \tan(22.5^\circ) = 0.414$
10. $K = 1.0$
11. $Q_s = A_s \times P_{avg} \times K \times \tan \delta = 37.7 \, \text{m}^2 \times 190 \, \text{kN/m}^2 \times 1.0 \times 0.414 = 2966.6 \, \text{kN}$
12. $Q_u = Q_p + Q_s = 1130.8 \, \text{kN} + 2966.6 \, \text{kN} = 4097.4 \, \text{kN}$
13. $Q_{safe} = Q_u / F.S. = 4097.4 \, \text{kN} / 2.5 = 1638.96 \, \text{kN}$

    **Ultimate Bearing Capacity = 4097.4 kN**
    **Safe Bearing Capacity = 1639 kN** (approx.)

---

### 9. Important Points to Remember

*   The total ultimate bearing capacity is the sum of tip resistance ($Q_p$) and shaft resistance ($Q_s$).
*   **In clay:**
    *   $Q_p = A_p \times c_{uc} \times 9$ (where $N_c=9$).
    *   $Q_s = \sum A_{si} \times \alpha_i \times c_{u,avg,i}$ (using the $\alpha$-method).
    *   $\alpha$ is an adhesion factor that decreases with increasing $c_u$.
*   **In sand:**
    *   $Q_p = A_p \times q_p$, where $q_p$ is the limiting unit tip resistance, often calculated as $P_p \times N_q$ but subject to code-specified limits.
    *   $Q_s = \sum A_{si} \times P_{avg,i} \times K \times \tan \delta$.
    *   $K$ is the coefficient of lateral earth pressure.
    *   $\delta$ is the angle of pile-soil friction, related to $\phi$.
*   **Critical Depth:** In sands, shaft resistance tends to plateau at a certain depth (critical depth), and tip resistance also has a limiting value. The formulae implicitly account for this.
*   **Safe Bearing Capacity** is obtained by dividing the ultimate bearing capacity by a factor of safety (typically 2.5 to 3.0).
*   Always refer to the specific Indian Standard code (IS 2911 Part 1) for the most accurate values of factors ($N_c$, $N_q$, $\alpha$, $\delta$, and limiting pressures) and detailed guidelines.
*   The formulae presented are **static formulae**, representing ultimate capacity under static loading. Dynamic formulae, based on pile driving energy, are used for estimating capacity during driving but are not covered in this topic.

---
