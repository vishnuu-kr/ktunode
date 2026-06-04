---
title: "Allowable bearing pressure from N Value-Teng’s equations for safe bearing
capacity of strip, square and circular footings"
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 1: Bearing capacity of shallow foundations"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811206"
status: "completed"
scrapedAt: "2026-05-20T18:51:58.581Z"
---
# Advanced Foundation Engineering: Module 1 - Bearing Capacity of Shallow Foundations

## Topic: Allowable Bearing Pressure from N-Value (Teng's Equations)

---

### 1. Introduction to Bearing Capacity

*   **Bearing Capacity:** The maximum intensity of pressure which the soil can sustain without shear failure.
*   **Shallow Foundations:** Foundations whose depth of embedment ($D_f$) is less than or equal to its width ($B$). Examples include strip footings, spread footings (square, rectangular, circular).
*   **Ultimate Bearing Capacity ($q_u$):** The maximum bearing pressure at which the soil beneath the foundation fails in shear.
*   **Safe Bearing Capacity ($q_{safe}$):** The maximum allowable bearing pressure that the soil can sustain with a factor of safety against shear failure. It is typically calculated as $q_{safe} = q_u / FS$, where $FS$ is the factor of safety.
*   **Allowable Bearing Pressure ($q_{allow}$):** The maximum pressure that can be applied to the soil at the base of the foundation, considering both shear failure and settlement. In this context, we are focusing on the estimation derived from N-values, which implicitly accounts for soil strength and thus can be related to safe bearing capacity or an allowable bearing capacity with appropriate modification factors.

---

### 2. Standard Penetration Test (SPT) and N-Value

*   **Standard Penetration Test (SPT):** A widely used in-situ test to determine the resistance of soil to penetration.
*   **N-Value:** The number of blows of a standard hammer (weighing 63.5 kg, falling from a height of 760 mm) required to drive a standard split-spoon sampler 300 mm into the soil, after an initial seating drive of 150 mm. The N-value is the average of the number of blows for the last two 150 mm increments.
*   **Importance of N-Value:** The N-value is a good indicator of the soil's density, strength, and stiffness. Higher N-values generally correspond to denser, stronger, and stiffer soils.

---

### 3. Teng's Empirical Equations for Safe Bearing Capacity

Teng's equations provide a simplified empirical approach to estimate the safe bearing capacity of shallow foundations based on the SPT N-value. These equations are particularly useful for preliminary design and in situations where extensive soil data is not available.

**Key Assumptions and Considerations for Teng's Equations:**

*   **Cohesionless Soils (Sands and Gravels):** Teng's equations are primarily developed for cohesionless soils.
*   **Water Table:** The original equations assume the water table is at or below a depth of $2B$ from the foundation base. Corrections are needed if the water table is closer.
*   **Factor of Safety (FS):** A factor of safety is implicitly or explicitly incorporated in these empirical relationships to derive "safe" or "allowable" bearing pressures.
*   **Footing Shape:** The equations are specific to the shape of the footing (strip, square, circular).
*   **Embedment Depth:** The embedment depth ($D_f$) of the foundation plays a role.

---

#### 3.1. Teng's Equation for Strip Footings

For a strip footing (width $B$), the equation is:

$$ q_{safe} = 11.6 \times N \times (1 + \frac{D_f}{B}) $$

Where:
*   $q_{safe}$ = Safe bearing pressure (in kPa or kN/m²)
*   $N$ = Average SPT N-value within a depth of approximately $B$ below the foundation base.
*   $D_f$ = Depth of embedment of the footing from the ground surface.
*   $B$ = Width of the footing.

**Important Note on N-Value for Strip Footings:** The $N$ value used in this equation should be the average N-value corrected for overburden pressure and energy ratio (if known) and obtained from tests within a depth of about $B$ below the base of the footing.

---

#### 3.2. Teng's Equation for Square Footings

For a square footing (width $B$), the equation is:

$$ q_{safe} = 11.6 \times N \times (1.2 + \frac{D_f}{B}) $$

Where:
*   $q_{safe}$ = Safe bearing pressure (in kPa or kN/m²)
*   $N$ = Average SPT N-value within a depth of approximately $B$ below the foundation base.
*   $D_f$ = Depth of embedment of the footing from the ground surface.
*   $B$ = Width of the footing.

**Important Note on N-Value for Square Footings:** Similar to strip footings, use the average corrected N-value within a depth of approximately $B$ below the footing base.

---

#### 3.3. Teng's Equation for Circular Footings

For a circular footing (diameter $D$, width $B=D$), the equation is:

$$ q_{safe} = 11.6 \times N \times (1.3 + \frac{D_f}{B}) $$

Where:
*   $q_{safe}$ = Safe bearing pressure (in kPa or kN/m²)
*   $N$ = Average SPT N-value within a depth of approximately $B$ below the foundation base.
*   $D_f$ = Depth of embedment of the footing from the ground surface.
*   $B$ = Diameter of the footing.

**Important Note on N-Value for Circular Footings:** Use the average corrected N-value within a depth of approximately $B$ below the footing base.

---

### 4. Water Table Correction

Teng's original equations assume the water table is at or below a depth of $2B$ from the foundation base. If the water table is closer to the foundation, the bearing capacity is reduced. A correction factor can be applied.

*   **Case 1: Water table at depth $D_w \ge 2B$ below the foundation base:** No correction is needed. $q_{safe}$ from the equations is directly applicable.
*   **Case 2: Water table at depth $0 < D_w < 2B$ below the foundation base:** A reduction factor $C_w$ is applied to the calculated $q_{safe}$.

The corrected safe bearing capacity ($q'_{safe}$) is:

$$ q'_{safe} = q_{safe} \times C_w $$

The correction factor $C_w$ is typically given by:

$$ C_w = 0.5 \times (1 + \frac{D_w}{2B}) $$

Where:
*   $D_w$ = Depth of the water table below the foundation base.

**Important Note on Water Table Correction:** This correction is applied when the water table is within a depth of $2B$ below the foundation base. The factor $C_w$ reduces the bearing capacity as the water table rises closer to the foundation, as saturated soil is weaker.

---

### 5. Important Considerations and Limitations of Teng's Equations

*   **Empirical Nature:** These are empirical formulas derived from correlations. They do not represent a fundamental theoretical solution to bearing capacity.
*   **Soil Type:** Primarily applicable to cohesionless soils (sands and gravels). For cohesive soils (clays), other methods like Terzaghi's bearing capacity equations or methods based on undrained shear strength ($c_u$) are more appropriate.
*   **N-Value Corrections:** The raw N-value obtained from SPT should ideally be corrected for overburden pressure (e.g., $\frac{N}{0.77 + 0.0006 P_0}$, where $P_0$ is effective overburden pressure in kPa) and hammer energy ratio. Teng's original equations might have implicitly assumed certain corrections or averaged N-values. It's good practice to use corrected N-values.
*   **Settlement:** These equations primarily address shear failure. Settlement, especially in loose sands or compressible soils, can be the governing design criterion. If settlement is critical, the allowable bearing pressure determined from these N-values might need further reduction.
*   **Footing Size and Depth:** The empirical correlation might be less reliable for very large footings or very shallow/deep foundations.
*   **Soil Non-Homogeneity:** Assumes a relatively uniform soil profile to a depth of $B$ below the foundation.
*   **Dynamic Loads and Vibrations:** Not directly applicable for foundations subjected to significant dynamic or vibratory loads.

---

### 6. Practice Questions and Exercises

**Question 1:**
A strip footing of width $B = 1.5 \, \text{m}$ is to be founded at a depth $D_f = 1.0 \, \text{m}$ below the ground surface. The average SPT N-value in the sand stratum below the footing is 12. The water table is located at a depth of $3.0 \, \text{m}$ below the ground surface. Calculate the safe bearing capacity of the footing using Teng's equation.

**Solution 1:**
*   Footing type: Strip footing
*   $B = 1.5 \, \text{m}$
*   $D_f = 1.0 \, \text{m}$
*   $N = 12$
*   Water table depth from ground surface = $3.0 \, \text{m}$.
*   Depth of water table below foundation base ($D_w$) = $3.0 \, \text{m} - 1.0 \, \text{m} = 2.0 \, \text{m}$.

Check water table condition: $D_w = 2.0 \, \text{m}$. $2B = 2 \times 1.5 \, \text{m} = 3.0 \, \text{m}$.
Since $D_w < 2B$ ($2.0 \, \text{m} < 3.0 \, \text{m}$), water table correction is needed.

First, calculate $q_{safe}$ using Teng's equation for strip footings:
$q_{safe} = 11.6 \times N \times (1 + \frac{D_f}{B})$
$q_{safe} = 11.6 \times 12 \times (1 + \frac{1.0}{1.5})$
$q_{safe} = 11.6 \times 12 \times (1 + 0.667)$
$q_{safe} = 11.6 \times 12 \times 1.667$
$q_{safe} = 232.94 \, \text{kN/m}^2$ (approx.)

Now, calculate the water table correction factor $C_w$:
$C_w = 0.5 \times (1 + \frac{D_w}{2B})$
$C_w = 0.5 \times (1 + \frac{2.0}{3.0})$
$C_w = 0.5 \times (1 + 0.667)$
$C_w = 0.5 \times 1.667$
$C_w = 0.8335$

Finally, calculate the corrected safe bearing capacity ($q'_{safe}$):
$q'_{safe} = q_{safe} \times C_w$
$q'_{safe} = 232.94 \times 0.8335$
$q'_{safe} = 194.14 \, \text{kN/m}^2$ (approx.)

**Answer:** The safe bearing capacity of the strip footing is approximately $194.14 \, \text{kN/m}^2$.

---

**Question 2:**
A square footing with a width $B = 2.0 \, \text{m}$ is to be constructed at a depth $D_f = 1.5 \, \text{m}$. The soil is sand with an average SPT N-value of 20. The water table is at a depth of $5.0 \, \text{m}$ below the ground surface. What is the allowable bearing pressure based on Teng's equation?

**Solution 2:**
*   Footing type: Square footing
*   $B = 2.0 \, \text{m}$
*   $D_f = 1.5 \, \text{m}$
*   $N = 20$
*   Water table depth from ground surface = $5.0 \, \text{m}$.
*   Depth of water table below foundation base ($D_w$) = $5.0 \, \text{m} - 1.5 \, \text{m} = 3.5 \, \text{m}$.

Check water table condition: $D_w = 3.5 \, \text{m}$. $2B = 2 \times 2.0 \, \text{m} = 4.0 \, \text{m}$.
Since $D_w < 2B$ ($3.5 \, \text{m} < 4.0 \, \text{m}$), water table correction is needed.

First, calculate $q_{safe}$ using Teng's equation for square footings:
$q_{safe} = 11.6 \times N \times (1.2 + \frac{D_f}{B})$
$q_{safe} = 11.6 \times 20 \times (1.2 + \frac{1.5}{2.0})$
$q_{safe} = 11.6 \times 20 \times (1.2 + 0.75)$
$q_{safe} = 11.6 \times 20 \times 1.95$
$q_{safe} = 452.4 \, \text{kN/m}^2$

Now, calculate the water table correction factor $C_w$:
$C_w = 0.5 \times (1 + \frac{D_w}{2B})$
$C_w = 0.5 \times (1 + \frac{3.5}{4.0})$
$C_w = 0.5 \times (1 + 0.875)$
$C_w = 0.5 \times 1.875$
$C_w = 0.9375$

Finally, calculate the corrected safe bearing capacity ($q'_{safe}$):
$q'_{safe} = q_{safe} \times C_w$
$q'_{safe} = 452.4 \times 0.9375$
$q'_{safe} = 424.125 \, \text{kN/m}^2$

**Answer:** The allowable bearing pressure for the square footing is approximately $424.1 \, \text{kN/m}^2$.

---

**Question 3:**
A circular footing of diameter $D = 3 \, \text{m}$ is to be placed at a depth $D_f = 2 \, \text{m}$. The average SPT N-value is 8. The water table is at a depth of $3.5 \, \text{m}$ below the ground surface. Determine the safe bearing capacity of the footing using Teng's method.

**Solution 3:**
*   Footing type: Circular footing
*   $B = D = 3 \, \text{m}$
*   $D_f = 2 \, \text{m}$
*   $N = 8$
*   Water table depth from ground surface = $3.5 \, \text{m}$.
*   Depth of water table below foundation base ($D_w$) = $3.5 \, \text{m} - 2 \, \text{m} = 1.5 \, \text{m}$.

Check water table condition: $D_w = 1.5 \, \text{m}$. $2B = 2 \times 3 \, \text{m} = 6.0 \, \text{m}$.
Since $D_w < 2B$ ($1.5 \, \text{m} < 6.0 \, \text{m}$), water table correction is needed.

First, calculate $q_{safe}$ using Teng's equation for circular footings:
$q_{safe} = 11.6 \times N \times (1.3 + \frac{D_f}{B})$
$q_{safe} = 11.6 \times 8 \times (1.3 + \frac{2}{3})$
$q_{safe} = 11.6 \times 8 \times (1.3 + 0.667)$
$q_{safe} = 11.6 \times 8 \times 1.967$
$q_{safe} = 182.9 \, \text{kN/m}^2$ (approx.)

Now, calculate the water table correction factor $C_w$:
$C_w = 0.5 \times (1 + \frac{D_w}{2B})$
$C_w = 0.5 \times (1 + \frac{1.5}{6.0})$
$C_w = 0.5 \times (1 + 0.25)$
$C_w = 0.5 \times 1.25$
$C_w = 0.625$

Finally, calculate the corrected safe bearing capacity ($q'_{safe}$):
$q'_{safe} = q_{safe} \times C_w$
$q'_{safe} = 182.9 \times 0.625$
$q'_{safe} = 114.31 \, \text{kN/m}^2$ (approx.)

**Answer:** The safe bearing capacity of the circular footing is approximately $114.3 \, \text{kN/m}^2$.

---

### 7. Summary and Key Takeaways

*   Teng's equations offer a practical empirical method to estimate the safe bearing capacity of shallow foundations in cohesionless soils using SPT N-values.
*   The equations vary based on the footing shape: strip, square, and circular.
*   The embedment depth ($D_f$) and footing width ($B$) are crucial parameters.
*   The N-value used should be representative of the soil stratum below the footing, typically within a depth of $B$.
*   Water table position significantly impacts bearing capacity. A correction factor ($C_w$) is applied if the water table is within $2B$ of the foundation base.
*   These methods provide a preliminary estimate and should be complemented with considerations for settlement and other site-specific conditions.

---
This study note covers the estimation of allowable bearing pressure from N-value using Teng's equations for various footing shapes, including the necessary water table correction. It also highlights important considerations and provides practice problems with solutions.
