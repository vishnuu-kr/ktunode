---
title: "Foundations - Shallow foundations- isolated foundations – Design of square and rectangular foundation.- Numerical Problems ( Only axially loaded condition is expected)"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 4: Foundations "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109cd"
status: "completed"
scrapedAt: "2026-05-20T18:43:49.899Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 4: Foundations

## Topic: Shallow Foundations - Isolated Foundations

### 1. Introduction to Foundations

Foundations are the substructures that transmit the loads from the superstructure to the underlying soil. Their primary role is to ensure the stability and serviceability of the structure by preventing excessive settlement and ensuring adequate bearing capacity of the soil.

**Key Concepts:**

*   **Superstructure:** The part of the building above the ground level.
*   **Substructure:** The part of the building below the ground level, including the foundation.
*   **Load Transfer:** The process by which forces from the superstructure are passed down to the soil.
*   **Bearing Capacity:** The maximum pressure that the soil can withstand without shear failure or excessive settlement.
*   **Settlement:** The downward movement of the foundation due to the applied loads.

### 2. Classification of Foundations

Foundations can be broadly classified into two main categories:

*   **Shallow Foundations:** These are foundations that transmit loads to the soil at a relatively shallow depth, typically where the depth of embedment ($D_f$) is less than or equal to the width of the foundation ($B$). Examples include:
    *   Isolated Foundations (Spread Footings)
    *   Combined Foundations
    *   Strip Foundations
    *   Raft Foundations
*   **Deep Foundations:** These are foundations that transmit loads to deeper, stronger soil strata or rock. Examples include:
    *   Piles
    *   Piers
    *   Caissons

**Focus of this Topic:** Shallow Foundations - Isolated Foundations.

### 3. Isolated Foundations (Spread Footings)

Isolated foundations, also known as spread footings or pad footings, are individual foundations that support a single column or a concentrated load. They are the most common type of shallow foundation.

**Purpose:** To spread the concentrated load from a column over a larger area of soil, thus reducing the bearing pressure on the soil to a safe level.

**Types of Isolated Foundations:**

*   **Square Footing:** Used to support a column that is square or rectangular.
*   **Rectangular Footing:** Used to support a column that is rectangular and where the footing needs to be elongated in one direction.
*   **Circular Footing:** Used to support circular columns or supports.

**Learning Outcome Covered:** Identify different types of isolated foundations.

### 4. Design of Square and Rectangular Foundations (Axially Loaded Condition)

The design of isolated foundations under axial loading involves determining the required size (dimensions) of the footing and the amount of reinforcement needed to withstand the applied loads and bending moments. The design process typically involves checking the foundation for three critical failure modes:

1.  **Bearing Capacity Failure (Shear Failure of Soil):** Ensuring the soil beneath the footing has adequate bearing capacity to support the applied load without shear failure.
2.  **One-way Shear (Beam Shear):** Checking the footing for shear stress, acting like a wide beam.
3.  **Two-way Shear (Punching Shear):** Checking the footing for shear stress around the column, where the column punches through the footing.
4.  **Bending Moment:** Designing the reinforcement to resist the bending stresses induced by the soil pressure.

**Learning Outcomes Covered:**

*   Determine the size of a square footing for axially loaded columns.
*   Determine the size of a rectangular footing for axially loaded columns.
*   Design the reinforcement for isolated foundations.

---

#### 4.1. Design Steps for Axially Loaded Isolated Foundations

**Assumptions:**

*   The load from the column is uniformly distributed over the base of the column.
*   The soil pressure beneath the footing is uniformly distributed (for axially loaded conditions).
*   The footing is cast monolithically with the column.

**Step 1: Determine the Net Upward Soil Pressure (Service Load)**

*   Calculate the total load from the column, including the dead load (DL) and the live load (LL).
*   Determine the self-weight of the foundation. This is usually estimated as a percentage of the column load (e.g., 5-10%) or calculated after assuming initial dimensions.
*   **Total Load (Service) = Column Load (DL + LL) + Self-weight of foundation (estimated)**
*   **Net Upward Soil Pressure ($q_{net}$) = Total Load (Service) / Area of footing**

**Important Point:** The soil pressure used for checking bearing capacity should be based on service loads, not ultimate loads.

**Step 2: Determine the Dimensions of the Foundation (Area and Shape)**

*   **Based on Bearing Capacity:**
    *   The safe bearing capacity ($SBC$) of the soil is usually provided.
    *   **Required Area of Footing = Total Load (Service) / SBC**
    *   For a square footing of side length 'B', Area = $B^2$. So, $B = \sqrt{\text{Required Area}}$.
    *   For a rectangular footing of length 'L' and width 'B', Area = $L \times B$. If a certain aspect ratio ($L/B$) is desired or dictated by site constraints, use that to find L and B.

*   **Projection of the Footing:** The footing needs to extend beyond the column dimensions to distribute the load. The projection of the footing from the face of the column is denoted by 'a' for a square footing and $a_1$ and $a_2$ for a rectangular footing.
    *   For a square footing: $B = \text{Column Width} + 2a$
    *   For a rectangular footing: $L = \text{Column Length} + 2a_1$ and $B = \text{Column Width} + 2a_2$

**Step 3: Check for Shear (One-way and Two-way Shear)**

The footing needs to be checked for shear resistance. The critical sections for shear are:

*   **One-way Shear (Beam Shear):** Critical section is at a distance 'd' (effective depth) from the face of the column.
*   **Two-way Shear (Punching Shear):** Critical section is at a distance of $d/2$ from the face of the column.

**Design Shear Force ($V_{sd}$):**

*   The shear force is the difference between the total upward soil pressure acting on the footing area and the soil pressure acting on the area within the critical section.
*   **$V_{sd}$ = (Upward soil pressure on the projected area) $\times$ (Area of projection)**

**Critical Sections:**

*   **For One-way Shear:**
    *   Critical section is at a distance 'd' from the face of the column.
    *   The shear force is calculated considering the soil pressure acting on the area of the footing outside this critical section.
    *   Let the column be of size $C_x \times C_y$.
    *   For a square footing of side B, the projection on each side is $a = (B - C_x)/2$.
    *   The critical section for one-way shear is at $(C_x/2 + d)$ from the center.
    *   **$V_{sd}$ (one-way) = Upward soil pressure $\times$ (Area of footing beyond critical section)**
        *   Area = $B \times (a - d)$
        *   $V_{sd} = q_{net} \times B \times (a - d)$
    *   **Check:** $V_{sd} \le \tau_{cd} \times b \times d$, where $\tau_{cd}$ is the design shear strength of concrete, and b is the width of the section (which is B for a square footing).

*   **For Two-way Shear (Punching Shear):**
    *   Critical section is at a distance of $d/2$ from the face of the column. The perimeter is $4 \times (C_x + d)$ for a square column and $2 \times (C_x+d) + 2 \times (C_y+d)$ for a rectangular column.
    *   The shear force is calculated considering the soil pressure acting on the area of the footing outside this critical perimeter.
    *   **$V_{sd}$ (two-way) = Upward soil pressure $\times$ (Area of footing outside the critical perimeter)**
        *   Area = $B^2 - (C_x + d)^2$ for a square column and footing.
        *   $V_{sd} = q_{net} \times [B^2 - (C_x + d)^2]$
    *   **Check:** $V_{sd} \le \tau_{c,crit} \times b_o \times d$, where $\tau_{c,crit}$ is the critical shear stress and $b_o$ is the perimeter of the critical section.
        *   $\tau_{c,crit}$ depends on the concrete grade and the ratio of column dimensions. Refer to IS 456:2000 or relevant codes.

**Important Points:**

*   **Effective Depth (d):** This is the depth from the top of the footing to the center of the main reinforcement. It needs to be estimated initially and then checked.
*   **Concrete Grade:** The shear strength of concrete depends on its grade (e.g., M20, M25).
*   **Shear Reinforcement:** If the shear stress exceeds the permissible shear strength of concrete, shear reinforcement (stirrups) needs to be provided. However, for isolated footings with typical load and dimension ratios, punching shear is often the critical factor for shear design, and shear reinforcement might not be required if the concrete alone can resist it.

**Step 4: Design for Bending Moment**

*   The upward soil pressure creates bending moments in the footing.
*   **Critical Section for Bending:** The face of the column.
*   **Bending Moment ($M_{sd}$):**
    *   For a square footing of side B, with column of side $C_x$:
        *   The cantilever projection from the face of the column is $a = (B - C_x)/2$.
        *   The upward soil pressure is $q_{net}$.
        *   **$M_{sd}$ = $q_{net} \times B \times a \times (a/2)$** (Bending moment due to soil pressure on the cantilever portion)
        *   $M_{sd} = q_{net} \times B \times (a^2/2)$

**Design of Reinforcement for Bending:**

*   Using the calculated bending moment ($M_{sd}$), the required area of steel ($A_{st}$) is determined using the limit state of bending.
*   **$M_{sd} \le R_{bt} \times b \times d^2$**
    *   $R_{bt}$ is the limiting moment of resistance factor for singly reinforced rectangular sections, which depends on the grade of concrete and steel.
    *   $A_{st} = \frac{M_{sd}}{(\sigma_{st} \times z)}$, where $\sigma_{st}$ is the design strength of steel and $z$ is the lever arm.
    *   Alternatively, use the formulas from IS 456 for $A_{st}$:
        *   $M_{sd} = 0.87 \times \sigma_{y} \times A_{st} \times d \times (1 - \frac{A_{st} \sigma_{y}}{b \times d \times f_{ck}})$
        *   This equation is quadratic in $A_{st}$, or a simplified approach using the lever arm is often used:
            *   Calculate the neutral axis depth ratio $x_u/d$ from $M_{sd} = 0.36 f_{ck} b x_u (d - 0.42 x_u)$ or $M_{sd} = 0.87 f_y A_{st} (d - 0.42 x_u)$.
            *   Calculate the lever arm $z = d - 0.42 x_u$.
            *   $A_{st} = M_{sd} / (0.87 f_y z)$

*   **Spacing of Reinforcement:**
    *   **Spacing (s) = (Area of one bar $\times$ Width of footing) / $A_{st}$**
    *   The spacing should be within the limits specified by the code (e.g., not more than 3 times the effective depth or 300 mm, whichever is smaller).
    *   **s = $(\pi/4 \times \phi^2 \times B) / A_{st}$**

**Important Points:**

*   **Distribution Reinforcement:** In addition to the main reinforcement resisting the bending moment, distribution steel is provided in the other direction to distribute the load and prevent cracking. This is usually provided at a maximum spacing as per codes.
*   **Development Length:** Ensure adequate development length for the reinforcement bars to be anchored securely in the concrete.
*   **Minimum Reinforcement:** The amount of reinforcement should not be less than the minimum reinforcement requirements as per codes.

**Step 5: Check for Deflection**

*   The deflection of the footing should be within the permissible limits. This check is usually satisfied if the span-to-depth ratio is within recommended values.

**Step 6: Check for Cracking**

*   Cracking is controlled by providing adequate reinforcement and limiting the bar spacing.

---

#### 4.2. Numerical Problems (Axially Loaded Condition)

**Learning Outcome Covered:** Solve numerical problems for the design of square and rectangular foundations under axially loaded conditions.

**Example 1: Design of a Square Foundation**

**Problem:** A square concrete footing supports a square column of size 300 mm x 300 mm carrying an axial ultimate load of 800 kN. The safe bearing capacity of the soil is 150 kN/m². The concrete is M25 grade, and the steel is Fe415 grade. Design the footing for axial load only.

**Solution:**

**Given:**
*   Column size = 300 mm x 300 mm = 0.3 m x 0.3 m
*   Axial ultimate load ($P_u$) = 800 kN
*   Safe Bearing Capacity ($SBC$) = 150 kN/m²
*   Concrete grade = M25 ($f_{ck} = 25$ N/mm²)
*   Steel grade = Fe415 ($f_y = 415$ N/mm²)

**1. Estimate Self-weight of Footing:**
Assume self-weight of footing is 10% of the column load.
Self-weight = 0.10 * 800 kN = 80 kN
**Total Service Load ($P_{service}$) = 800 kN + 80 kN = 880 kN** (For estimation of area, we use the total load. In a more rigorous design, the service load would be DL + LL, and self-weight would be added and iterated. For this problem, we'll use $P_u$ to find area, and $q_{net}$ for design checks.)

**2. Determine the Size of the Footing:**
Required Area of Footing = Total Load (approx.) / SBC
Required Area = 880 kN / 150 kN/m² = 5.87 m²

Let the side of the square footing be 'B'.
$B^2 = 5.87$ m²
$B = \sqrt{5.87} \approx 2.42$ m

Let's assume $B = 2.5$ m for a convenient size.

**Recalculate Net Upward Soil Pressure:**
*   Self-weight of footing = Area * Thickness * Unit weight of concrete. Let's assume footing thickness $D \approx 0.3$ m (will be confirmed later).
*   Unit weight of concrete = 25 kN/m³
*   Self-weight of footing = $(2.5 \text{ m} \times 2.5 \text{ m}) \times 0.3 \text{ m} \times 25 \text{ kN/m³} = 46.875$ kN
*   **Total Service Load = Column load (DL+LL) + Self-weight = 800 kN + 46.875 kN = 846.875 kN**
    *   *Note: If the column load of 800 kN is the ultimate load, we need to know the DL and LL components to get the service load. Assuming 800 kN is the service load for simplicity here.*
    *   Let's use the initial estimate and adjust. If 800 kN is the ultimate load, we should use the ultimate load for UDL calculation with a load factor. However, the standard practice is to use service loads for soil pressure. Let's assume 800 kN is the service load for now.

*   **Let's re-calculate the area assuming 800 kN is the service load (DL+LL).**
    *   Area required = 800 kN / 150 kN/m² = 5.33 m²
    *   $B = \sqrt{5.33} \approx 2.31$ m. Let's take $B = 2.4$ m.

*   **Revised Self-weight (assuming B=2.4m and D=0.3m):**
    *   Self-weight = $(2.4 \text{ m})^2 \times 0.3 \text{ m} \times 25 \text{ kN/m³} = 43.2$ kN
    *   **Total Service Load = 800 kN + 43.2 kN = 843.2 kN**

*   **Net Upward Soil Pressure ($q_{net}$):**
    *   $q_{net} = \frac{\text{Total Service Load}}{\text{Area of footing}} = \frac{843.2 \text{ kN}}{(2.4 \text{ m})^2} = \frac{843.2}{5.76} \approx 146.4$ kN/m²
    *   This is less than SBC (150 kN/m²), so the size $B = 2.4$ m is acceptable.

**3. Determine Effective Depth (d):**
*   Assume initial $d = 0.25$ m.
*   Projection of footing from column face: $a = (B - \text{Column Width}) / 2 = (2.4 - 0.3) / 2 = 2.1 / 2 = 1.05$ m.
*   Total depth $D = d + \text{clear cover} + \text{bar diameter}$. Let's assume clear cover = 50 mm and bar diameter = 16 mm. $D = 0.25 + 0.05 + 0.016 \approx 0.316$ m. This is close to our assumed 0.3 m.

**4. Check for Shear:**

*   **One-way Shear:**
    *   Critical section is at distance 'd' from the column face.
    *   Projection beyond critical section = $a - d = 1.05 - 0.25 = 0.8$ m.
    *   Shear force ($V_{sd}$) = $q_{net} \times B \times (a - d) = 146.4 \times 2.4 \times 0.8 = 281.09$ kN.
    *   Design shear strength of M25 concrete ($\tau_{cd}$) for $p_t \approx 0.5$ is around 0.5 N/mm² (refer to IS 456 Table 19). Let's assume it's 0.5 N/mm².
    *   Nominal shear stress $\tau_v = V_{sd} / (b \times d) = 281.09 \times 10^3 \text{ N} / (2400 \text{ mm} \times 250 \text{ mm}) = 281.09 \times 10^3 / 600000 \approx 0.468$ N/mm².
    *   Permissible shear stress $\tau_{cd}$ for M25 with $p_t = 100 \times A_{st} / (b \times d)$ (need to calculate $A_{st}$ first). Let's assume $\tau_{cd}$ is around 0.5 N/mm² for now.
    *   **Condition:** $\tau_v \le \tau_{cd}$. $0.468$ N/mm² $\le$ (approx.) $0.5$ N/mm². This check seems OK.

*   **Two-way Shear (Punching Shear):**
    *   Critical section is at $d/2$ from the column face.
    *   Column dimensions: $C_x = 300$ mm, $C_y = 300$ mm.
    *   Critical perimeter $b_o = 4 \times (C_x + d) = 4 \times (300 + 250) = 4 \times 550 = 2200$ mm.
    *   Area of footing beyond critical perimeter = $B^2 - (C_x + d)^2 = (2400)^2 - (300 + 250)^2 = 5760000 - 550^2 = 5760000 - 302500 = 5457500$ mm².
    *   Shear force ($V_{sd}$) = $q_{net} \times (\text{Area}) = 146.4 \times 10^{-3} \text{ MN/m²} \times 5.4575 \text{ m²} = 0.798$ MN = 798 kN.
    *   Nominal shear stress $\tau_v = V_{sd} / (b_o \times d) = 798 \times 10^3 \text{ N} / (2200 \text{ mm} \times 250 \text{ mm}) = 798 \times 10^3 / 550000 \approx 1.45$ N/mm².
    *   For M25 concrete and Fe415 steel, the critical shear stress $\tau_{c,crit}$ depends on the ratio of column dimensions. For a square column ($c_x/c_y = 1$), at $d/2$, $\tau_{c,crit}$ is approximately $0.32 \sqrt{f_{ck}} = 0.32 \sqrt{25} = 0.32 \times 5 = 1.6$ N/mm².
    *   **Condition:** $\tau_v \le \tau_{c,crit}$. $1.45$ N/mm² $\le 1.6$ N/mm². Punching shear is satisfied by concrete alone. No shear reinforcement needed for punching.

**5. Design for Bending Moment:**
*   Critical section is at the face of the column.
*   Projection $a = 1.05$ m.
*   Bending Moment ($M_{sd}$) = $q_{net} \times B \times a \times (a/2) = 146.4 \times 2.4 \times 1.05 \times (1.05/2)$ kNm
*   $M_{sd} = 146.4 \times 2.4 \times 1.05 \times 0.525 = 182.06$ kNm.
*   Design Moment $M_{sd} = 182.06 \times 10^6$ Nmm.

*   **Calculate $A_{st}$ for bending:**
    *   Using M25 concrete and Fe415 steel, the limiting value of $x_u/d$ is 0.48.
    *   Let's assume the footing is singly reinforced. We can use the simplified formula:
        *   $M_{sd} = 0.87 f_y A_{st} (d - 0.42 x_u)$
        *   First, find the depth required for the moment without considering steel percentage: $M_{limit} = 0.138 f_{ck} b d^2 = 0.138 \times 25 \times 2400 \times (250)^2 = 5.175 \times 10^{12}$ Nmm. Our moment is much less.
        *   Let's use the standard $A_{st}$ calculation:
            *   $M_{sd} = 0.87 f_y A_{st} (0.416 d)$  (assuming $x_u/d = 0.48$)
            *   $182.06 \times 10^6 = 0.87 \times 415 \times A_{st} \times (0.416 \times 250)$
            *   $182.06 \times 10^6 = 0.87 \times 415 \times A_{st} \times 104$
            *   $A_{st} = \frac{182.06 \times 10^6}{0.87 \times 415 \times 104} = \frac{182.06 \times 10^6}{37534.8} \approx 4851$ mm².

*   **Check for minimum reinforcement:**
    *   $A_{st,min} = 0.85 b d / f_y = 0.85 \times 2400 \times 250 / 415 = 1222.89$ mm².
    *   Our calculated $A_{st}$ (4851 mm²) is greater than $A_{st,min}$.

*   **Provide Reinforcement:**
    *   Let's use bars of 16 mm diameter ($\phi = 16$ mm).
    *   Area of one bar = $(\pi/4) \times 16^2 = 201$ mm².
    *   Number of bars = $A_{st} / (\text{Area of one bar}) = 4851 / 201 \approx 24.14$.
    *   Provide 24 bars of 16 mm diameter.

*   **Spacing:**
    *   Spacing = (Total width available for distribution) / (Number of gaps)
    *   For 24 bars, there are 23 gaps.
    *   Spacing = $(2.4 \text{ m}) / 24 \text{ bars} = 0.1$ m/bar or 100 mm/bar.
    *   Let's check spacing: 100 mm center-to-center.
    *   Available width = $2.4$ m = 2400 mm.
    *   Total width occupied by 24 bars of 16 mm diameter = $24 \times 16 = 384$ mm.
    *   Clear spacing = $2400 - 384 = 2016$ mm.
    *   Number of gaps = 23.
    *   Spacing = $2016 / 23 \approx 87.65$ mm.
    *   This spacing (approx. 88 mm) is less than the maximum allowable spacing (min(3d, 300mm) = min(3*250, 300) = 300 mm).

*   **Distribution Reinforcement:** Provide distribution steel in the other direction. Typically 0.12% of the gross cross-sectional area.
    *   $A_{st,dist} = 0.0012 \times b \times D = 0.0012 \times 2400 \times 316 = 907.2$ mm².
    *   Provide, say, 10 mm diameter bars. Area of one 10 mm bar = $(\pi/4) \times 10^2 = 78.5$ mm².
    *   Number of 10 mm bars = $907.2 / 78.5 \approx 11.5$. Provide 12 bars of 10 mm diameter.
    *   Spacing = $2400 / 12 = 200$ mm.

**Final Design:**
*   Footing size: 2.4 m x 2.4 m
*   Overall depth: 316 mm (Provide 320 mm for practicality)
*   Main reinforcement: 16 mm diameter bars @ 100 mm c/c in both directions.
*   Distribution reinforcement: 10 mm diameter bars @ 200 mm c/c in both directions.
*   Concrete cover: 50 mm.

---

**Example 2: Design of a Rectangular Foundation**

**Problem:** Design a rectangular footing for a column of size 400 mm x 250 mm, carrying an axial ultimate load of 1000 kN. The safe bearing capacity of the soil is 200 kN/m². The concrete is M20 grade, and the steel is Fe415 grade. Assume the length of the footing (parallel to the longer side of the column) is twice its width.

**Solution:**

**Given:**
*   Column size = 400 mm x 250 mm (0.4 m x 0.25 m)
*   Axial ultimate load ($P_u$) = 1000 kN
*   Safe Bearing Capacity ($SBC$) = 200 kN/m²
*   Concrete grade = M20 ($f_{ck} = 20$ N/mm²)
*   Steel grade = Fe415 ($f_y = 415$ N/mm²)
*   Aspect ratio $L/B = 2$

**1. Estimate Self-weight of Footing:**
Assume self-weight of footing is 10% of the column load.
Self-weight = 0.10 * 1000 kN = 100 kN
**Total Service Load ($P_{service}$) = 1000 kN + 100 kN = 1100 kN**
(Assuming 1000 kN is the service load).

**2. Determine the Size of the Footing:**
Required Area of Footing = Total Load (approx.) / SBC
Required Area = 1100 kN / 200 kN/m² = 5.5 m²

Let the width of the footing be 'B' and length be 'L'.
$L \times B = 5.5$ m²
Given $L = 2B$.
$(2B) \times B = 5.5$
$2B^2 = 5.5$
$B^2 = 2.75$
$B = \sqrt{2.75} \approx 1.66$ m. Let's take $B = 1.7$ m.
Then $L = 2 \times 1.7 = 3.4$ m.

So, Footing size = 3.4 m x 1.7 m.

**Recalculate Net Upward Soil Pressure:**
Assume footing thickness $D \approx 0.35$ m.
Self-weight of footing = $L \times B \times D \times \gamma_c = 3.4 \times 1.7 \times 0.35 \times 25 = 52.94$ kN.
**Total Service Load = 1000 kN + 52.94 kN = 1052.94 kN**

**Net Upward Soil Pressure ($q_{net}$):**
$q_{net} = \frac{\text{Total Service Load}}{\text{Area of footing}} = \frac{1052.94 \text{ kN}}{(3.4 \text{ m} \times 1.7 \text{ m})} = \frac{1052.94}{5.78} \approx 182.17$ kN/m²
This is less than SBC (200 kN/m²), so the size 3.4 m x 1.7 m is acceptable.

**3. Determine Effective Depth (d):**
*   Column dimensions: $C_x = 400$ mm, $C_y = 250$ mm.
*   Footing dimensions: $L = 3400$ mm, $B = 1700$ mm.
*   Assume initial $d = 0.3$ m.
*   Projections:
    *   Along length (parallel to 400mm side of column): $a_1 = (L - C_x) / 2 = (3.4 - 0.4) / 2 = 3.0 / 2 = 1.5$ m.
    *   Along width (parallel to 250mm side of column): $a_2 = (B - C_y) / 2 = (1.7 - 0.25) / 2 = 1.45 / 2 = 0.725$ m.
*   Total depth $D = d + \text{clear cover} + \text{bar diameter}$. Assume clear cover = 50 mm, bar diameter = 16 mm. $D = 0.3 + 0.05 + 0.016 \approx 0.366$ m. This is close to our assumed 0.35 m.

**4. Check for Shear:**

*   **One-way Shear:**
    *   Critical section is at distance 'd' from the face of the column.
    *   **Along the length (critical for shear in width direction):**
        *   Projection beyond critical section = $a_2 - d = 0.725 - 0.3 = 0.425$ m.
        *   Shear force ($V_{sd}$) = $q_{net} \times L \times (a_2 - d) = 182.17 \times 3.4 \times 0.425 = 263.3$ kN.
        *   Width of section = $L = 3.4$ m = 3400 mm.
        *   Nominal shear stress $\tau_v = V_{sd} / (b \times d) = 263.3 \times 10^3 \text{ N} / (3400 \text{ mm} \times 300 \text{ mm}) = 263.3 \times 10^3 / 1020000 \approx 0.258$ N/mm².
        *   For M20, $\tau_{cd}$ is around 0.38 N/mm². $0.258 \le 0.38$, so OK.
    *   **Along the width (critical for shear in length direction):**
        *   Projection beyond critical section = $a_1 - d = 1.5 - 0.3 = 1.2$ m.
        *   Shear force ($V_{sd}$) = $q_{net} \times B \times (a_1 - d) = 182.17 \times 1.7 \times 1.2 = 371.6$ kN.
        *   Width of section = $B = 1.7$ m = 1700 mm.
        *   Nominal shear stress $\tau_v = V_{sd} / (b \times d) = 371.6 \times 10^3 \text{ N} / (1700 \text{ mm} \times 300 \text{ mm}) = 371.6 \times 10^3 / 510000 \approx 0.729$ N/mm².
        *   This value is high for M20. We need to check $\tau_{cd}$ more carefully or increase 'd'.
        *   Let's assume $p_t = 0.5$. $\tau_{cd} = 0.48$ N/mm². Still less.
        *   Let's re-evaluate 'd'. If $\tau_v = 0.729$ N/mm², we need $d$ such that $V_{sd} / (b \times d) \le \tau_{cd}$.
        *   $371.6 \times 10^3 / (1700 \times d) \le 0.48$
        *   $d \ge 371.6 \times 10^3 / (1700 \times 0.48) \approx 453$ mm.
        *   This is a significant increase. Let's assume a higher concrete grade or increase footing size if this happens in a real design.
        *   **For this problem, let's assume we need shear reinforcement or we must increase 'd'. Let's proceed with a larger 'd' for the sake of demonstration.** Let's try $d=0.45$ m.
        *   $a_1 = 1.5$ m, $a_2 = 0.725$ m.
        *   One-way shear along width: $V_{sd} = 182.17 \times 3.4 \times (0.725 - 0.45) = 182.17 \times 3.4 \times 0.275 = 169.7$ kN.
        *   $\tau_v = 169.7 \times 10^3 / (3400 \times 450) = 0.11$ N/mm². This is very low.
        *   One-way shear along length: $V_{sd} = 182.17 \times 1.7 \times (1.5 - 0.45) = 182.17 \times 1.7 \times 1.05 = 325.5$ kN.
        *   $\tau_v = 325.5 \times 10^3 / (1700 \times 450) = 0.42$ N/mm².
        *   With M20, $\tau_{cd}$ for $p_t \approx 0.5$ is 0.48 N/mm². $0.42 \le 0.48$. OK.

*   **Two-way Shear (Punching Shear):**
    *   Critical section is at $d/2$ from the column face.
    *   Column dimensions: $C_x = 400$ mm, $C_y = 250$ mm.
    *   Effective depth $d = 450$ mm.
    *   Critical perimeter $b_o = 2 \times (C_x + d) + 2 \times (C_y + d) = 2 \times (400 + 450) + 2 \times (250 + 450) = 2 \times 850 + 2 \times 700 = 1700 + 1400 = 3100$ mm.
    *   Area of footing outside critical perimeter = $L \times B - (C_x + d)(C_y + d) = (3.4 \times 1.7) - (0.4 + 0.45)(0.25 + 0.45) = 5.78 - (0.85 \times 0.70) = 5.78 - 0.595 = 5.185$ m².
    *   Shear force ($V_{sd}$) = $q_{net} \times (\text{Area}) = 182.17 \times 10^{-3} \text{ MN/m²} \times 5.185 \text{ m²} = 0.945$ MN = 945 kN.
    *   Nominal shear stress $\tau_v = V_{sd} / (b_o \times d) = 945 \times 10^3 \text{ N} / (3100 \text{ mm} \times 450 \text{ mm}) = 945 \times 10^3 / 1395000 \approx 0.677$ N/mm².
    *   For M20 concrete and Fe415 steel, $\tau_{c,crit}$ for a rectangular column ($c_x/c_y = 400/250 = 1.6$).
        *   $\tau_{c,crit} = (0.5 + 0.5 \times 250/400) \sqrt{f_{ck}} = (0.5 + 0.3125) \sqrt{20} = 0.8125 \times 4.472 \approx 3.63$ N/mm².
    *   **Condition:** $\tau_v \le \tau_{c,crit}$. $0.677$ N/mm² $\le 3.63$ N/mm². Punching shear is satisfied by concrete alone.

**5. Design for Bending Moment:**
*   The bending moment will be critical in the shorter span direction (along the width of the footing).
*   **Bending Moment along Length:** Consider a strip of width B (1.7 m).
    *   Critical section at face of column (0.4 m side).
    *   Projection $a_1 = 1.5$ m.
    *   $M_{sd}$ (along length) = $q_{net} \times B \times a_1 \times (a_1/2) = 182.17 \times 1.7 \times 1.5 \times (1.5/2) = 182.17 \times 1.7 \times 1.5 \times 0.75 = 349.2$ kNm.
    *   $M_{sd} = 349.2 \times 10^6$ Nmm.

*   **Bending Moment along Width:** Consider a strip of width L (3.4 m).
    *   Critical section at face of column (0.25 m side).
    *   Projection $a_2 = 0.725$ m.
    *   $M_{sd}$ (along width) = $q_{net} \times L \times a_2 \times (a_2/2) = 182.17 \times 3.4 \times 0.725 \times (0.725/2) = 182.17 \times 3.4 \times 0.725 \times 0.3625 = 160.4$ kNm.
    *   $M_{sd} = 160.4 \times 10^6$ Nmm.

*   The bending moment is higher along the length of the footing ($M_{sd} = 349.2$ kNm). This is because the projection $a_1$ is larger.

*   **Calculate $A_{st}$ for the larger bending moment ($M_{sd} = 349.2$ kNm):**
    *   $M_{sd} = 349.2 \times 10^6$ Nmm.
    *   Use M20 concrete and Fe415 steel.
    *   $M_{limit} = 0.138 f_{ck} b d^2 = 0.138 \times 20 \times 3400 \times (450)^2 = 1.28 \times 10^{13}$ Nmm. Our moment is less.
    *   $349.2 \times 10^6 = 0.87 \times 415 \times A_{st} \times (d - 0.42 x_u)$
    *   Assume $x_u/d = 0.48$. Lever arm $z = d - 0.42 x_u = d - 0.42 \times 0.48 d = d(1 - 0.2016) = 0.7984 d = 0.7984 \times 450 = 359.3$ mm.
    *   $A_{st} = \frac{M_{sd}}{0.87 f_y z} = \frac{349.2 \times 10^6}{0.87 \times 415 \times 359.3} = \frac{349.2 \times 10^6}{129565} \approx 2695$ mm².

*   **Check for minimum reinforcement:**
    *   $A_{st,min} = 0.85 b d / f_y = 0.85 \times 3400 \times 450 / 415 = 3135.5$ mm².
    *   Our calculated $A_{st}$ (2695 mm²) is LESS than $A_{st,min}$. So, we must provide $A_{st,min}$.
    *   Required $A_{st} = 3135.5$ mm².

*   **Provide Reinforcement:**
    *   Let's use bars of 16 mm diameter ($\phi = 16$ mm). Area of one bar = 201 mm².
    *   Number of bars = $3135.5 / 201 \approx 15.6$. Provide 16 bars.
    *   Spacing = $(3.4 \text{ m}) / 16 \text{ bars} = 0.2125$ m/bar or 212.5 mm/bar.
    *   Let's check spacing for 16 bars of 16mm in 3400mm width. Total width = 3400mm.
    *   Total steel width = $16 \times 16 = 256$ mm. Clear space = $3400 - 256 = 3144$ mm.
    *   Number of gaps = 15. Spacing = $3144 / 15 \approx 209.6$ mm.
    *   This spacing (approx. 210 mm) is less than the maximum allowable spacing (min(3d, 300mm) = min(3*450, 300) = 300 mm).

*   **Distribution Reinforcement:** Provide distribution steel in the other direction (along the width of the footing). This reinforces the footing for the moment calculated along the width.
    *   $A_{st,dist}$ required for the moment along width ($160.4$ kNm) in a strip of width L (3.4m) and depth d (0.45m).
    *   Using the same approach as above for bending along the width.
    *   $160.4 \times 10^6 = 0.87 \times 415 \times A_{st} \times (0.7984 \times 450)$
    *   $A_{st} = \frac{160.4 \times 10^6}{0.87 \times 415 \times 359.3} = \frac{160.4 \times 10^6}{129565} \approx 1238$ mm².
    *   Minimum reinforcement: $A_{st,min} = 0.85 b d / f_y = 0.85 \times 1700 \times 450 / 415 = 1567.7$ mm².
    *   Required $A_{st}$ (distribution) = 1567.7 mm².
    *   Number of 16 mm bars = $1567.7 / 201 \approx 7.8$. Provide 8 bars of 16 mm diameter.
    *   Spacing = $(1.7 \text{ m}) / 8 \text{ bars} = 0.2125$ m/bar or 212.5 mm/bar.
    *   Checking spacing for 8 bars of 16mm in 1700mm width. Total steel width = $8 \times 16 = 128$ mm. Clear space = $1700 - 128 = 1572$ mm.
    *   Number of gaps = 7. Spacing = $1572 / 7 \approx 224.5$ mm.
    *   This spacing (approx. 225 mm) is less than the maximum allowable spacing (300 mm).

**Final Design:**
*   Footing size: 3.4 m x 1.7 m
*   Overall depth: 366 mm (Provide 370 mm for practicality)
*   **Main reinforcement (along the length, resisting bending moment in this direction):** 16 mm diameter bars @ 210 mm c/c. (These bars will span across the width of the footing).
*   **Distribution reinforcement (along the width, resisting bending moment in this direction):** 16 mm diameter bars @ 225 mm c/c. (These bars will span across the length of the footing).
*   Concrete cover: 50 mm.

---

#### 4.3. Important Points to Remember

*   **Load Combinations:** Always use the appropriate load combinations (DL + LL) to determine the service load for soil pressure calculations. For ultimate limit state checks (like shear), use factored loads as per relevant codes. However, for axially loaded footings, the design is often governed by service loads.
*   **Net Upward Pressure:** Use the net upward soil pressure ($q_{net}$) for all design checks (shear and bending).
*   **Effective Depth:** The effective depth 'd' is crucial and needs to be estimated first, then checked based on shear and bending requirements.
*   **Critical Sections:** Correctly identify the critical sections for one-way shear (d from column face) and two-way shear (d/2 from column face).
*   **Punching Shear:** Punching shear is often critical in isolated footings, especially for heavily loaded columns with smaller footing dimensions.
*   **Bending Moment:** The bending moment is maximum at the face of the column. In rectangular footings, the bending moment is usually higher in the direction of the longer projection.
*   **Reinforcement Spacing:** Ensure the spacing of reinforcement bars is within the limits specified by the design codes to control cracking and ensure proper load transfer.
*   **Minimum Reinforcement:** Always check for minimum reinforcement requirements to prevent brittle failure.
*   **Aspect Ratio:** The aspect ratio of rectangular footings might be dictated by site constraints or architectural requirements.
*   **Code Provisions:** Refer to the relevant building codes (e.g., IS 456:2000 for Indian context) for specific design parameters, formulas, and permissible stresses.

---

### 5. Practice Questions

**Question 1:**
A square footing supports a column of 300mm x 300mm carrying an axial service load of 600 kN. The safe bearing capacity of the soil is 120 kN/m². Design the footing using M20 concrete and Fe415 steel. Assume the footing is square.

**Question 2:**
A rectangular footing of size 3.0m x 2.0m supports a column of 400mm x 300mm. The footing is subjected to an axial service load of 900 kN. The soil has a safe bearing capacity of 180 kN/m². M25 concrete and Fe415 steel are used. Design the footing for axial loading and check for shear and bending.

**Question 3:**
What is the critical section for one-way shear in an isolated footing? Explain why.

**Question 4:**
What is the critical section for two-way shear (punching shear) in an isolated footing? Explain why.

---

### 6. Answers to Practice Questions

**Answer 1:**

**Given:**
*   Column size = 300 mm x 300 mm = 0.3 m x 0.3 m
*   Axial service load = 600 kN
*   SBC = 120 kN/m²
*   Concrete grade = M20 ($f_{ck} = 20$ N/mm²)
*   Steel grade = Fe415 ($f_y = 415$ N/mm²)

**1. Estimate Self-weight and Total Service Load:**
Assume self-weight = 10% of column load = 0.10 * 600 kN = 60 kN
Total Service Load = 600 kN + 60 kN = 660 kN

**2. Determine Footing Size:**
Required Area = Total Service Load / SBC = 660 kN / 120 kN/m² = 5.5 m²
Let side of square footing be 'B'. $B^2 = 5.5 \implies B = \sqrt{5.5} \approx 2.35$ m.
Take $B = 2.4$ m.

**Recalculate Self-weight and Net Pressure:**
Assume D = 0.3 m. Self-weight = $(2.4)^2 \times 0.3 \times 25 = 43.2$ kN.
Total Service Load = 600 kN + 43.2 kN = 643.2 kN.
$q_{net} = 643.2 / (2.4)^2 = 643.2 / 5.76 \approx 111.67$ kN/m². (Less than 120 kN/m², OK).

**3. Effective Depth (d):**
Assume $d = 0.25$ m.
Projection $a = (2.4 - 0.3) / 2 = 1.05$ m.

**4. Shear Check:**
*   **One-way Shear:**
    *   $V_{sd} = q_{net} \times B \times (a-d) = 111.67 \times 2.4 \times (1.05 - 0.25) = 111.67 \times 2.4 \times 0.8 = 214.3$ kN.
    *   $\tau_v = V_{sd} / (b \times d) = 214.3 \times 10^3 / (2400 \times 250) = 0.357$ N/mm².
    *   For M20, $\tau_{cd}$ (approx.) = 0.38 N/mm². $0.357 \le 0.38$, OK.

*   **Two-way Shear (Punching Shear):**
    *   $b_o = 4 \times (300 + d/2) = 4 \times (300 + 125) = 4 \times 425 = 1700$ mm.
    *   Area $= B^2 - (C_x + d)^2 = (2400)^2 - (300 + 250)^2 = 5.76 \times 10^6 - 0.3025 \times 10^6 = 5.4575 \times 10^6$ mm².
    *   $V_{sd} = q_{net} \times \text{Area} = (111.67 \times 10^{-3}) \times 5.4575 = 0.61$ MN = 610 kN.
    *   $\tau_v = V_{sd} / (b_o \times d) = 610 \times 10^3 / (1700 \times 250) = 1.435$ N/mm².
    *   $\tau_{c,crit} = 0.32 \sqrt{f_{ck}} = 0.32 \sqrt{20} = 0.32 \times 4.47 = 1.43$ N/mm².
    *   $\tau_v$ is slightly higher than $\tau_{c,crit}$. Need to increase 'd' or provide shear reinforcement. Let's increase $d$ to 0.28 m.
    *   $a = 1.05$ m.
    *   One-way shear: $V_{sd} = 111.67 \times 2.4 \times (1.05 - 0.28) = 111.67 \times 2.4 \times 0.77 = 206.1$ kN.
    *   $\tau_v = 206.1 \times 10^3 / (2400 \times 280) = 0.308$ N/mm². $\tau_{cd} \approx 0.38$ N/mm². OK.
    *   Two-way shear: $b_o = 4 \times (300 + 0.28/2) = 4 \times (300 + 140) = 4 \times 440 = 1760$ mm.
    *   Area $= (2.4)^2 - (0.3+0.28)^2 = 5.76 - (0.58)^2 = 5.76 - 0.3364 = 5.4236$ m².
    *   $V_{sd} = (111.67 \times 10^{-3}) \times 5.4236 = 0.606$ MN = 606 kN.
    *   $\tau_v = 606 \times 10^3 / (1760 \times 280) = 1.23$ N/mm².
    *   $\tau_{c,crit} = 1.43$ N/mm². $1.23 \le 1.43$. OK.
    *   So, $d = 0.28$ m is acceptable. Total depth $D = 0.28 + 0.05 + 0.016 \approx 0.346$ m. Use $D=350$ mm.

**5. Bending Moment:**
*   $M_{sd} = q_{net} \times B \times a \times (a/2) = 111.67 \times 2.4 \times 1.05 \times (1.05/2) = 138.5$ kNm.
*   $M_{sd} = 138.5 \times 10^6$ Nmm.

**6. Reinforcement:**
*   $A_{st} = \frac{M_{sd}}{0.87 f_y z}$, where $z \approx 0.7984 d = 0.7984 \times 280 = 223.55$ mm.
*   $A_{st} = \frac{138.5 \times 10^6}{0.87 \times 415 \times 223.55} = \frac{138.5 \times 10^6}{81000} \approx 1710$ mm².
*   $A_{st,min} = 0.85 b d / f_y = 0.85 \times 2400 \times 280 / 415 = 1375$ mm².
*   Provide $A_{st} = 1710$ mm².
*   Using 12 mm diameter bars ($\phi = 12$ mm). Area of one bar = 113 mm².
*   Number of bars = $1710 / 113 \approx 15.1$. Provide 16 bars of 12 mm diameter.
*   Spacing = $2400 / 16 = 150$ mm c/c.

**Final Design:**
*   Footing size: 2.4 m x 2.4 m
*   Overall depth: 350 mm
*   Reinforcement: 12 mm diameter bars @ 150 mm c/c in both directions.
*   Concrete cover: 50 mm.

---

**Answer 2:**

*(This question requires applying the same steps as shown in Example 2, but with different input values. The detailed step-by-step solution is similar to the example provided in the notes.)*

**Answer 3:**
The critical section for one-way shear in an isolated footing is located at a distance 'd' (effective depth) from the face of the column. This is because, for the purpose of beam shear analysis, the footing is considered as a wide beam spanning between the supports (which are conceptually represented by the column's edges). The shear force in such a beam is maximum at the face of the support. The upward soil pressure acting on the footing creates a bending moment and shear force. The one-way shear is equivalent to the shear force in a cantilever beam where the load is the upward soil pressure.

**Answer 4:**
The critical section for two-way shear (punching shear) in an isolated footing is located at a distance of $d/2$ from the face of the column on all sides. This is because the shear stress distribution around a concentrated load on a plate (the footing) is complex. At the immediate vicinity of the column, the shear stresses are high and tend to cause the column to "punch" through the footing. The $d/2$ distance is considered as the effective perimeter where this punching action is most critical. The shear resistance is checked along this critical perimeter.

---

This concludes the study notes for Module 4: Shallow Foundations - Isolated Foundations under axially loaded conditions. Remember to always refer to the latest building codes for precise design parameters and safety factors.
