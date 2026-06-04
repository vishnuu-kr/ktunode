---
title: "Design of Isolated Footing-Combined footings- Rectangular and Trapezoidal combined footings - Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 3: Settlement analysis: Introduction"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e3e"
status: "completed"
scrapedAt: "2026-05-20T18:48:39.389Z"
---
# FOUNDATION ENGINEERING: Module 3: Settlement Analysis: Introduction

## Topic: Design of Isolated Footings, Combined Footings (Rectangular & Trapezoidal), and Numerical Problems

This module introduces the fundamental concepts of settlement analysis and its application in the design of shallow foundations, specifically isolated and combined footings. We will explore the types of settlements, factors affecting them, and the methods used to predict and control them. The focus will then shift to the practical design considerations for isolated and combined footings, including rectangular and trapezoidal configurations, with illustrative numerical problems.

---

### 1. Introduction to Settlement Analysis

Settlement is the downward movement of a foundation due to the applied loads. It's a critical aspect of foundation design as excessive or differential settlement can lead to structural distress, cracking, and even failure.

#### 1.1 Types of Settlement

*   **Immediate (Elastic) Settlement:** Occurs as soon as the load is applied. It is primarily due to the elastic deformation of soil particles and the compression of pore water. This settlement is generally recoverable upon unloading.
*   **Consolidation Settlement:** Occurs over time due to the expulsion of pore water from fine-grained soils (clays and silts) under sustained load. This is a time-dependent process.
    *   **Primary Consolidation:** Due to the expulsion of pore water and rearrangement of soil particles.
    *   **Secondary Consolidation (Creep):** Occurs after primary consolidation ceases, due to the rearrangement of soil particles under sustained load, often referred to as creep.
*   **Differential Settlement:** The difference in settlement between two points of a foundation. This is often more critical than the total settlement, as it can cause uneven loading on the superstructure, leading to tilting and cracking.

#### 1.2 Factors Affecting Settlement

*   **Magnitude of Load:** Higher loads generally result in larger settlements.
*   **Type of Soil:**
    *   **Cohesionless soils (sands and gravels):** Primarily experience immediate settlement.
    *   **Cohesive soils (clays and silts):** Experience both immediate and consolidation settlement.
*   **Soil Properties:**
    *   **Compressibility:** Soils with lower compressibility (higher stiffness, e.g., dense sands, stiff clays) settle less.
    *   **Permeability:** Highly permeable soils (sands) drain quickly, leading to faster immediate settlement. Low permeability soils (clays) lead to significant consolidation settlement over time.
    *   **Effective Stress:** The existing effective stress in the soil affects its compressibility.
*   **Shape and Size of Foundation:** Wider and larger foundations tend to experience larger total settlements but lower unit settlements compared to smaller foundations under the same pressure.
*   **Depth of Foundation:** The depth at which the load is applied influences the stress distribution and the soil layers affected.
*   **Groundwater Table:** A high groundwater table reduces the effective stress in the soil, increasing compressibility and settlement.

#### 1.3 Allowable Settlement

The maximum permissible settlement for a foundation is determined based on the type of structure, its sensitivity to settlement, and building codes.

*   **Factors influencing allowable settlement:**
    *   Type of structure (e.g., industrial building vs. sensitive laboratory).
    *   Material of construction (e.g., brick masonry is more sensitive to differential settlement than reinforced concrete).
    *   Presence of sensitive equipment or finishes.
    *   Potential for tilting or cracking.

---

### 2. Design of Isolated Footings

An isolated footing is a substructure that transmits the load from a single column to the underlying soil.

#### 2.1 Types of Isolated Footings

*   **Square Footing:** Most common type, suitable when the column is square or rectangular and the soil pressure distribution is uniform.
*   **Rectangular Footing:** Used when the column is rectangular and the length is significantly greater than the width, or when space constraints dictate a rectangular shape.
*   **Circular Footing:** Less common, used for circular columns.
*   **Stepped Footing:** Used when the bearing capacity of the soil is low or to reduce the depth of excavation.
*   **Wall Footing (Strip Footing):** Designed to support a continuous load from a wall.

#### 2.2 Design Considerations for Isolated Footings

The design of an isolated footing involves determining its dimensions (length, width, and thickness) and reinforcement to safely carry the column load and resist bending moments and shear forces, while ensuring the soil pressure does not exceed the allowable bearing capacity and the settlement is within permissible limits.

**Key Design Steps (Simplified Overview):**

1.  **Determine the column load:** This includes the dead load and live load from the superstructure.
2.  **Estimate the allowable bearing capacity ($q_{allow}$):** This is obtained from soil investigation reports and considers both shear failure and settlement criteria.
3.  **Calculate the net soil pressure:** $q_{net} = \frac{\text{Column Load}}{\text{Area of Footing}} - \text{Overburden Pressure}$
4.  **Determine the footing dimensions:**
    *   **Area required:** $A = \frac{\text{Gross Load}}{q_{allow}}$
    *   For a square footing with side length 'B': $B^2 \ge A$
    *   For a rectangular footing with dimensions $L \times B$: $L \times B \ge A$
5.  **Check for critical bending moment:** The critical bending moment usually occurs at the face of the column.
6.  **Check for shear:**
    *   **One-way shear (beam shear):** Critical at a distance 'd' from the face of the column.
    *   **Two-way shear (punching shear):** Critical around the perimeter of the column.
7.  **Determine the footing thickness (depth 'd'):** Based on bending moment and shear requirements.
8.  **Design reinforcement:** Calculate the required steel area for bending.

**Example Concept: Bending Moment Calculation (Square Footing)**

Consider a square footing of size $B \times B$ supporting a column of size $C \times C$. The net upward soil pressure is $q_{net}$.

*   **Cantilever arm for bending:** $L_{cant} = \frac{B - C}{2}$
*   **Bending Moment at column face:** $M_u = q_{net} \times (\frac{B - C}{2}) \times \frac{B - C}{2} \times \frac{1}{2} = \frac{1}{2} q_{net} (\frac{B - C}{2})^2$ (This simplified calculation assumes the load is distributed uniformly over the footing area). A more precise calculation considers the load distribution.

---

### 3. Combined Footings

Combined footings are used when it is not feasible or economical to provide isolated footings for adjacent columns, typically due to:

*   Proximity of columns, causing overlapping footing areas.
*   Limited space between columns.
*   Unequal loads on adjacent columns.
*   Requirement to prevent uneven settlement.

#### 3.1 Types of Combined Footings

*   **Rectangular Combined Footing:** Used when two or more columns are close together. It's essentially a rectangular slab extending beyond the outermost columns to distribute the loads.
*   **Trapezoidal Combined Footing:** Used when the distance between columns is larger, and a rectangular footing would be excessively long and shallow. The trapezoidal shape helps to optimize material usage.
*   **Strap Footing:** A type of combined footing where the outer footing is connected to an inner footing by a strap beam. This allows for the eccentric loading of the outer footing.

#### 3.2 Design Considerations for Combined Footings

The design of combined footings is more complex than isolated footings due to the combined action of multiple loads and the need to ensure uniform soil pressure distribution.

**Key Design Steps (Simplified Overview):**

1.  **Determine the centroid of the column loads:** This is crucial for ensuring the resultant load acts at the centroid of the footing.
2.  **Determine the total load:** Sum of all column loads.
3.  **Estimate the allowable bearing capacity ($q_{allow}$):**
4.  **Determine the footing dimensions:**
    *   **Area required:** $A = \frac{\text{Total Load}}{q_{allow}}$
    *   The footing's length ($L$) is typically determined by the spacing of the outermost columns, and the width ($B$) is chosen to achieve the required area while maintaining reasonable proportions and soil pressure. The footing is usually centered under the centroid of the column loads.
5.  **Analyze the footing as a beam:** The footing acts as a beam spanning between supports (or cantilevering) and subjected to upward soil pressure and downward column loads.
6.  **Determine the distribution of soil pressure:** The goal is to achieve a uniform or near-uniform soil pressure distribution.
7.  **Calculate shear forces and bending moments:** This is done by analyzing the footing as a beam, considering the applied loads and the upward soil reaction.
8.  **Design reinforcement:** Based on the calculated bending moments and shear forces.

---

### 4. Rectangular Combined Footings

A rectangular combined footing is a single rectangular slab that supports two or more closely spaced columns.

#### 4.1 Design Principles

*   **Centroid Alignment:** The footing is designed such that its geometric center coincides with the centroid of the column loads. This ensures that the resultant soil pressure is centered, leading to uniform pressure distribution.
*   **Beam Action:** The footing acts as a beam, resisting the bending moments caused by the column loads and the upward soil pressure.
*   **Shear Resistance:** The footing must be thick enough to resist shear forces.

#### 4.2 Steps for Design

1.  **Calculate the centroid of column loads:**
    Let $P_1, P_2, \dots$ be the loads on columns at distances $x_1, x_2, \dots$ from a reference point.
    Centroid location $X = \frac{\sum (P_i \times x_i)}{\sum P_i}$.
2.  **Determine the footing dimensions:**
    *   **Length ($L$):** Typically designed to extend slightly beyond the outermost columns.
    *   **Width ($B$):** Calculated based on the required area ($A = \frac{\sum P_i}{q_{allow}}$) and the chosen length, ensuring a balanced design. The footing is centered about the centroid.
3.  **Calculate the uniform soil pressure:** $q = \frac{\text{Total Load}}{L \times B}$.
4.  **Analyze the footing as a beam:** Draw a shear force diagram (SFD) and bending moment diagram (BMD). The footing is typically analyzed as a simply supported beam with the column loads as downward forces and the soil pressure as an upward distributed load.
5.  **Design reinforcement:** Determine the required steel reinforcement for the maximum bending moment and shear forces.

---

### 5. Trapezoidal Combined Footings

Trapezoidal combined footings are used for two columns when the distance between them is too large for a rectangular footing to be economical. They are typically designed to be wider at the base and narrower at the top, or vice-versa, depending on the layout. A common scenario is a trapezoidal footing supporting two closely spaced columns, with the trapezoid's length aligning with the column spacing.

#### 5.1 Design Principles

*   **Centroid Alignment:** Similar to rectangular combined footings, the footing is centered under the centroid of the column loads.
*   **Beam Action:** The footing acts as a beam, but the analysis is more complex due to the varying width.
*   **Soil Pressure Distribution:** The trapezoidal shape aims to optimize the soil pressure distribution and minimize the footing's span, making it more economical.

#### 5.2 Steps for Design

1.  **Calculate the centroid of column loads:** Same as for rectangular combined footings.
2.  **Determine the footing dimensions:**
    *   **Length ($L$):** Dictated by the column spacing.
    *   **Widths ($B_1, B_2$):** The widths at the ends of the trapezoid are chosen based on achieving uniform soil pressure or optimizing material usage. The centroid of the trapezoid's area should coincide with the centroid of the column loads.
3.  **Calculate the varying soil pressure:** The soil pressure is not uniform across the width due to the trapezoidal shape. It needs to be analyzed considering the varying width.
4.  **Analyze the footing as a beam:** This is the most challenging part. Methods like finite element analysis or simplified beam analysis considering the varying section properties can be used. The footing is treated as a beam supported at the columns and subjected to upward soil pressure.
5.  **Design reinforcement:** Based on the bending moments and shear forces calculated.

---

### 6. Numerical Problems and Solutions

Here are some illustrative numerical problems. We will use simplified assumptions for demonstration purposes. In real-world design, more detailed analysis and adherence to codes are required.

#### Problem 1: Isolated Square Footing Design (Simplified)

**Problem:** Design a square isolated footing for a column carrying an axial load of 1000 kN. The allowable bearing capacity of the soil is 200 kN/m². The column is square with dimensions 400 mm x 400 mm. Assume the unit weight of concrete and soil is appropriately accounted for in the allowable bearing capacity.

**Solution:**

1.  **Area of footing required:**
    Area = $\frac{\text{Column Load}}{\text{Allowable Bearing Capacity}} = \frac{1000 \text{ kN}}{200 \text{ kN/m}^2} = 5 \text{ m}^2$

2.  **Side of the square footing (B):**
    $B^2 = 5 \text{ m}^2$
    $B = \sqrt{5} \approx 2.24 \text{ m}$
    Let's choose a practical size, say $B = 2.3 \text{ m}$.

3.  **Net soil pressure ($q_{net}$):**
    Assuming the footing is designed to carry the gross load (including its own weight), the net soil pressure is approximately the allowable bearing capacity. For preliminary design, we can use $q_{net} \approx q_{allow}$.
    $q_{net} = 200 \text{ kN/m}^2$

4.  **Bending Moment Calculation (Simplified):**
    The cantilever arm ($L_{cant}$) is the projection of the footing beyond the column.
    $L_{cant} = \frac{B - \text{Column Width}}{2} = \frac{2.3 \text{ m} - 0.4 \text{ m}}{2} = \frac{1.9 \text{ m}}{2} = 0.95 \text{ m}$

    Consider a unit width of the footing (1 m). The load on this unit width from the soil pressure over the cantilever length is $q_{net} \times L_{cant} = 200 \text{ kN/m}^2 \times 0.95 \text{ m} = 190 \text{ kN/m}$.
    The bending moment at the face of the column for this unit width is:
    $M_u = (190 \text{ kN/m}) \times \frac{L_{cant}}{2} = 190 \text{ kN/m} \times \frac{0.95 \text{ m}}{2} = 90.25 \text{ kNm/m}$

    For the full width of the footing (B = 2.3 m):
    Total Bending Moment $M_{total} = q_{net} \times (\text{Area of cantilever}) = 200 \text{ kN/m}^2 \times (2.3 \text{ m} \times 0.95 \text{ m}) \times \frac{0.95 \text{ m}}{2} = 200 \times 2.185 \times 0.475 = 207.575 \text{ kNm}$

    **Important Note:** For actual design, the bending moment should be calculated based on the distribution of soil pressure, and code-specified load factors should be applied.

#### Problem 2: Rectangular Combined Footing Design (Simplified)

**Problem:** Design a rectangular combined footing for two columns, Column A (1200 kN) and Column B (1800 kN), spaced 4.0 m center-to-center. The column dimensions are 300 mm x 300 mm for Column A and 400 mm x 400 mm for Column B. The allowable bearing capacity of the soil is 150 kN/m².

**Solution:**

1.  **Calculate the centroid of column loads:**
    Let Column A be at x = 0. Column B is at x = 4.0 m.
    Centroid $X = \frac{(1200 \text{ kN} \times 0 \text{ m}) + (1800 \text{ kN} \times 4.0 \text{ m})}{1200 \text{ kN} + 1800 \text{ kN}} = \frac{7200 \text{ kNm}}{3000 \text{ kN}} = 2.4 \text{ m}$ from Column A.

2.  **Determine footing dimensions:**
    *   **Total load:** $1200 \text{ kN} + 1800 \text{ kN} = 3000 \text{ kN}$.
    *   **Area required:** Area = $\frac{3000 \text{ kN}}{150 \text{ kN/m}^2} = 20 \text{ m}^2$.

    Let's assume the footing extends 0.5 m beyond each column for preliminary design.
    *   **Footing Length (L):** 0.5 m (beyond A) + 4.0 m (column spacing) + 0.5 m (beyond B) = 5.0 m.
    *   **Footing Width (B):** Required Width = $\frac{\text{Area}}{\text{Length}} = \frac{20 \text{ m}^2}{5.0 \text{ m}} = 4.0 \text{ m}$.

    The footing is centered at 2.4 m from Column A.
    The footing extends from $0 - 0.5 = -0.5$ m to $4.0 + 0.5 = 4.5$ m. The centroid is at 2.0 m from the center of the footing. This implies the footing is not perfectly centered with its geometric center under the load centroid. For uniform pressure, the geometric center of the footing should be at the load centroid. Let's re-evaluate.

    **Revised Footing Dimension Calculation for Centroid Alignment:**
    Let the footing extend $x_A$ beyond Column A and $x_B$ beyond Column B.
    Length $L = x_A + 4.0 + x_B$.
    The load centroid is at 2.4 m from Column A.
    The geometric center of the footing is at $x_A + \frac{L}{2}$ from Column A.
    For centroid alignment: $2.4 = x_A + \frac{L}{2} = x_A + \frac{x_A + 4.0 + x_B}{2}$.
    $4.8 = 2x_A + x_A + 4.0 + x_B$
    $0.8 = 3x_A + x_B$.

    A common approach is to make the footing extend equally beyond the outer edges of the columns.
    Outer edge of Column A is at 0.15 m from its center (assuming 300mm width).
    Outer edge of Column B is at 4.15 m from the reference point (4.0 m + 0.15 m).
    Let's assume the footing extends 0.5 m beyond the outer edge of each column.
    Footing starts at $0 - 0.15 - 0.5 = -0.65$ m.
    Footing ends at $4.0 + 0.15 + 0.5 = 4.65$ m.
    Footing Length $L = 4.65 - (-0.65) = 5.3$ m.
    Centroid of footing is at $\frac{-0.65 + 4.65}{2} = 2.0$ m from the reference point.
    Load centroid is at 2.4 m. This is still not perfectly aligned.

    **Practical Approach for Rectangular Combined Footing:**
    Let the footing be centered at the load centroid.
    Load centroid at 2.4 m from Column A.
    Let the footing have length $L$. The center is at 2.4 m.
    Column A is at $2.4 - 2.4 = 0$ m.
    Column B is at $2.4 + (4.0 - 2.4) = 4.0$ m. This is not correct.

    Let's redefine the reference point for the centroid calculation to the center of the footing.
    Let the footing have length $L$ and width $B$. Its center is at $x=0$.
    Column A is at $-(2.4-0.5) = -1.9$ m from the footing center.
    Column B is at $(4.0-2.4)+0.5 = 2.1$ m from the footing center.
    This setup assumes the footing is wider than the column spacing.

    **Let's use a more standard approach:**
    Place the footing such that its center is at the load centroid.
    Column A load $P_A = 1200$ kN at distance $d_A = 2.4$ m from the end of the footing.
    Column B load $P_B = 1800$ kN at distance $d_B = 4.0 - 2.4 = 1.6$ m from the other end of the footing.

    Let the footing length be $L$ and width be $B$.
    The footing is centered under the load centroid.
    Centroid of loads is 2.4 m from Column A.
    Let the footing start at $x=0$ and end at $x=L$. The center is at $L/2$.
    So, $L/2 = 2.4$ m (if Column A is at the start of the footing). This is not general.

    **Correct approach for sizing:**
    Let the footing have length $L$.
    Let Column A be at $x_A$ from the start of the footing.
    Let Column B be at $x_B$ from the start of the footing. $x_B - x_A = 4.0$ m.
    Load centroid $X = \frac{1200 x_A + 1800 x_B}{3000} = \frac{12 x_A + 18 x_B}{30}$.
    The footing is centered about this centroid.
    Let the footing extent be from $X - L/2$ to $X + L/2$.
    If we want uniform pressure, the footing should extend beyond the columns.

    **Let's assume the footing's total length $L = 5.5$ m, and width $B = 4.0$ m.**
    Area = $5.5 \times 4.0 = 22 \text{ m}^2$.
    Soil pressure $q = \frac{3000 \text{ kN}}{22 \text{ m}^2} = 136.36 \text{ kN/m}^2$. This is less than $q_{allow}$, which is good.

    Now, we need to position the footing to align with the load centroid.
    Centroid of loads is 2.4 m from Column A.
    If we assume the footing starts 0.5 m before Column A, then Column A is at 0.5 m. Column B is at 4.5 m.
    Footing length $L = 5.5$ m. Center is at $5.5/2 = 2.75$ m.
    Load centroid is at $0.5 + 2.4 = 2.9$ m.
    Centroid of footing is at 2.75 m. This is close but not perfect.

    **A common simplification is to assume the footing spans between the outer edges of columns and extends a small distance.**
    Let's make the footing length $L = 4.5$ m (just enough to cover the columns and a small projection).
    Let Column A be at 0.2 m from the end, and Column B at 4.2 m from the end.
    Centroid of loads = $\frac{1200 \times 0.2 + 1800 \times 4.2}{3000} = \frac{240 + 7560}{3000} = \frac{7800}{3000} = 2.6$ m from the start.
    Footing length $L = 4.5$ m. Center is at 2.25 m.
    Again, not aligned.

    **Let's use the requirement that the footing's geometric center aligns with the load centroid.**
    Load centroid at 2.4 m from Column A.
    Let the footing's center be at the load centroid.
    Column A is at 2.4 m from the center of the footing.
    Column B is at $2.4 - 4.0 = -1.6$ m from the center of the footing.
    Let the footing length be $L$. It extends from $-L/2$ to $+L/2$.
    We need to accommodate these column positions.
    The footing must extend at least from -2.4 m to 1.6 m (relative to the load centroid).
    Let's add a projection of 0.5 m on each side for even pressure distribution.
    Footing starts at $-2.4 - 0.5 = -2.9$ m.
    Footing ends at $1.6 + 0.5 = 2.1$ m.
    Total Length $L = 2.1 - (-2.9) = 5.0$ m.
    The footing is from -2.5 m to 2.5 m, centered at 0.
    Column A at -2.4 m. Column B at 1.6 m.

    Now, let's use $L=5.0$ m and $B=4.0$ m.
    Area = 20 m$^2$. Soil pressure $q = \frac{3000}{20} = 150 \text{ kN/m}^2$. (This matches $q_{allow}$ exactly).

3.  **Analyze as a beam:**
    Consider the footing from $x = -2.5$ m to $x = 2.5$ m.
    Column A load $P_A = 1200$ kN at $x = -2.4$ m.
    Column B load $P_B = 1800$ kN at $x = 1.6$ m.
    Upward soil pressure $q = 150$ kN/m$^2$.

    This is a simply supported beam with two concentrated loads and a uniformly distributed load. We can analyze it to find SFD and BMD.

    **Simplified Bending Moment Calculation:**
    Consider the section at Column A. The bending moment is due to the soil pressure to the left of Column A and the load on Column B.
    Let's consider the footing as simply supported at the columns and analyze the moments. This is incorrect for combined footing.

    **Correct Beam Analysis:**
    The footing is a beam. The reaction at the ends of the footing is not directly the column loads.
    The footing acts as a beam subjected to:
    *   Upward distributed load $q = 150$ kN/m$^2$.
    *   Downward concentrated loads $P_A = 1200$ kN at -2.4 m and $P_B = 1800$ kN at 1.6 m (relative to footing center).

    Let's analyze the moments between the columns.
    Consider the span between Column A and Column B.
    The net upward force in this span is distributed.

    **To simplify for this example, let's consider the maximum bending moment occurring under the larger column load, assuming a simple beam span.**
    Assume the footing spans between the outer edges of the columns, and the critical bending moment occurs at the face of the larger column. This is a simplification.

    A more accurate approach involves calculating the shear and moment diagrams.
    Let's consider the footing to be like a beam spanning between column centers, with overhangs.
    Let the span between columns be 4m.
    Assume overhangs of 0.5m on each side. Total length L = 5m.
    Column A at 0.5m. Column B at 4.5m.
    Footing center at 2.5m. Load centroid at 2.9m. (Still an issue).

    **Let's stick to the earlier setup:** Footing from -2.5m to 2.5m, $B=4.0$m.
    Column A at -2.4m (300mm column). Column B at 1.6m (400mm column).
    Soil pressure $q = 150$ kN/m$^2$.

    We need to find the critical bending moment.
    It's usually at the face of the column, or at a point of zero shear.
    Let's consider the section at the face of Column B (at $1.6 + 0.2 = 1.8$ m from the center).
    The footing extends from $1.8$ m to $2.5$ m with soil pressure.
    The moment due to this segment is $150 \times (2.5-1.8) \times \frac{(2.5-1.8)}{2} = 150 \times 0.7 \times 0.35 = 36.75$ kNm.
    We also have the load $P_B = 1800$ kN at 1.6 m.

    **To demonstrate the process without complex calculations:**
    Assume the critical bending moment for design is $M_u = 800$ kNm (this would be calculated from SFD/BMD).
    Assume the footing thickness $D = 0.6$ m, so effective depth $d = 0.55$ m.
    For a rectangular beam: $M_u = 0.87 f_y A_s (d - 0.42 x_u)$ and $x_u = \frac{0.87 f_y A_s}{0.36 f_{ck} b}$.
    Using $f_{ck} = 25$ MPa, $f_y = 415$ MPa, $b = 1000$ mm (for unit width).
    $R_m = \frac{M_u}{b d^2} = \frac{800 \times 10^6 \text{ Nmm}}{1000 \text{ mm} \times (550 \text{ mm})^2} \approx 26.7$.
    This $R_m$ value helps determine the reinforcement ratio.
    The required steel area ($A_s$) can then be calculated.

    **Key takeaway:** The design of combined footings involves careful analysis of shear and bending moments considering the distribution of loads and soil pressure.

#### Problem 3: Trapezoidal Combined Footing (Conceptual)

**Problem:** Two columns carry loads $P_1 = 800$ kN and $P_2 = 1200$ kN, spaced 5 m apart. The allowable bearing capacity is 180 kN/m². Design a trapezoidal combined footing.

**Solution (Conceptual):**

1.  **Calculate the centroid of column loads:**
    Let Column 1 be at x = 0, Column 2 at x = 5 m.
    Centroid $X = \frac{(800 \times 0) + (1200 \times 5)}{800 + 1200} = \frac{6000}{2000} = 3.0$ m from Column 1.

2.  **Determine footing dimensions:**
    *   **Total Load:** $800 + 1200 = 2000$ kN.
    *   **Area Required:** Area = $\frac{2000}{180} \approx 11.11$ m$^2$.

    Let the footing length be $L$. The footing is centered at the load centroid (3.0 m from Column 1).
    We need to determine the widths $B_1$ (at Column 1 end) and $B_2$ (at Column 2 end).
    The area of a trapezoid is $A = \frac{B_1 + B_2}{2} \times L$.
    The centroid of the trapezoid's area must also be at 3.0 m from Column 1.
    The distance of the centroid of a trapezoid from the base ($B_1$) is $\frac{L}{3} \frac{(B_1 + 2B_2)}{(B_1 + B_2)}$.

    Let's assume the footing extends 0.5 m beyond each column.
    Footing Length $L = 0.5 + 5.0 + 0.5 = 6.0$ m.
    The footing is centered at 3.0 m from Column 1.
    Column 1 is at 0.5 m from the start. Column 2 is at 5.5 m from the start.
    The footing extends from 0 m to 6.0 m. Center is at 3.0 m.
    So, Column 1 is at $3.0 - 2.5 = 0.5$ m from the center.
    Column 2 is at $3.0 + 2.0 = 5.0$ m from the center. (This means Column 2 is 2m from the center, not 5m. Re-adjusting column positions relative to centroid).

    Let the footing center be at 0.
    Load centroid is at 0.
    Column 1 is at -3.0 m. Column 2 is at +2.0 m.
    Add projections of 0.5 m.
    Footing starts at $-3.0 - 0.5 = -3.5$ m.
    Footing ends at $2.0 + 0.5 = 2.5$ m.
    Footing Length $L = 2.5 - (-3.5) = 6.0$ m.

    Now, we need to determine $B_1$ and $B_2$.
    Area = $\frac{B_1 + B_2}{2} \times 6.0 = 11.11$ m$^2$.
    $(B_1 + B_2) = \frac{11.11 \times 2}{6.0} \approx 3.70$ m.

    We need to satisfy the centroid condition for the trapezoid's area.
    Distance of centroid from the end with width $B_1$: $\frac{L}{3} \frac{(B_1 + 2B_2)}{(B_1 + B_2)}$.
    This distance should be 3.5 m (from the start of the footing at -3.5m).
    $\frac{6.0}{3} \frac{(B_1 + 2B_2)}{(B_1 + B_2)} = 3.5$
    $2 \frac{(B_1 + 2B_2)}{(B_1 + B_2)} = 3.5$
    $2(B_1 + 2B_2) = 3.5(B_1 + B_2)$
    $2B_1 + 4B_2 = 3.5B_1 + 3.5B_2$
    $0.5B_2 = 1.5B_1$
    $B_2 = 3B_1$.

    Substitute this into the area equation:
    $B_1 + 3B_1 = 3.70$
    $4B_1 = 3.70 \implies B_1 \approx 0.925$ m.
    $B_2 = 3 \times 0.925 = 2.775$ m.

    So, the footing is trapezoidal with widths $0.925$ m and $2.775$ m, and length $6.0$ m.

3.  **Analyze as a beam:**
    The footing acts as a beam subjected to upward soil pressure (which varies with width) and downward column loads. The analysis involves calculating shear and bending moments for this complex beam.

4.  **Design reinforcement:** Based on the SFD and BMD.

---

### 7. Important Points to Remember

*   **Settlement is crucial:** Always consider settlement, especially differential settlement, as it can be more damaging than total settlement.
*   **Soil investigation is paramount:** The accuracy of settlement analysis heavily relies on reliable soil data.
*   **Foundation type selection:** Choose the appropriate foundation type (isolated, combined) based on load conditions, column spacing, and soil properties.
*   **Centroid alignment:** For combined footings, ensuring the footing's geometric center is aligned with the load centroid is key for uniform soil pressure.
*   **Beam analysis for combined footings:** Treat combined footings as beams and analyze shear and bending moments carefully.
*   **Code provisions:** Always refer to relevant building codes and standards for design procedures, load factors, and material properties.
*   **Simplifications in problems:** Numerical problems often involve simplifications to illustrate concepts. Real-world design requires more rigorous analysis.
*   **Shear critical:** Footings are often critical in shear, especially punching shear in isolated footings and one-way/two-way shear in combined footings.

---

### 8. Practice Questions

1.  **Define settlement and list its types.** Explain the factors that significantly influence the magnitude of settlement.
2.  **What is differential settlement and why is it problematic?**
3.  **Design a square isolated footing for a column carrying a working load of 1500 kN.** The column is 400 mm x 400 mm. The allowable bearing capacity of the soil is 200 kN/m². (Assume appropriate concrete and steel properties for design).
4.  **Two columns, P1 = 1000 kN and P2 = 1500 kN, are spaced 3.5 m apart.** The column sizes are 350 mm x 350 mm and 450 mm x 450 mm respectively. The allowable bearing capacity of the soil is 160 kN/m². Design a rectangular combined footing.
5.  **Explain the circumstances under which a trapezoidal combined footing is preferred over a rectangular combined footing.**
6.  **Briefly describe the steps involved in designing a combined footing.**
7.  **What is the significance of the centroid in the design of combined footings?**

---

### 9. Answers to Practice Questions

1.  **Settlement:** The downward movement of a foundation due to applied loads. Types: Immediate, Consolidation (Primary & Secondary), Differential.
    **Factors influencing settlement:** Magnitude of load, soil type (cohesion vs. cohesionless), soil properties (compressibility, permeability), foundation size/shape, depth of foundation, groundwater table.

2.  **Differential Settlement:** The difference in settlement between two points of a foundation. It's problematic because it can cause uneven loading on the superstructure, leading to tilting, cracking of walls, distortion of structural members, and damage to finishes.

3.  **Design of Isolated Footing (Problem 3):**
    *   **Area Required:** $\frac{1500 \text{ kN}}{200 \text{ kN/m}^2} = 7.5 \text{ m}^2$.
    *   **Side of footing (B):** $\sqrt{7.5} \approx 2.74$ m.
    *   **Practical Size:** Let $B = 2.8$ m.
    *   **Net Soil Pressure ($q_{net}$):** $\approx 200$ kN/m$^2$.
    *   **Cantilever Arm ($L_{cant}$):** $\frac{2.8 - 0.4}{2} = 1.2$ m.
    *   **(Simplified) Bending Moment:** $M_u = 200 \times (\frac{1.2 \times 2.8}{2}) \times \frac{1.2}{2} \approx 403.2$ kNm.
    *   **(Simplified) Shear Force:** $V_u = 200 \times (1.2 \times 2.8) = 672$ kN.
    *   **Depth (d):** Based on bending and shear calculations (requires detailed design using moment and shear resistance). Assuming a trial depth, reinforcement is calculated.

4.  **Design of Rectangular Combined Footing (Problem 4):**
    *   **Total Load:** $1000 + 1500 = 2500$ kN.
    *   **Area Required:** $\frac{2500}{160} = 15.625$ m$^2$.
    *   **Centroid:** Let Column 1 be at x=0. Column 2 is at x=3.5 m.
        $X = \frac{(1000 \times 0) + (1500 \times 3.5)}{2500} = \frac{5250}{2500} = 2.1$ m from Column 1.
    *   **Footing Dimensions:** Let's try $L=4.5$ m (0.5m beyond each column).
        Required width $B = \frac{15.625}{4.5} \approx 3.47$ m. Let $B = 3.5$ m.
        Footing Area = $4.5 \times 3.5 = 15.75$ m$^2$.
        Soil pressure $q = \frac{2500}{15.75} \approx 158.7$ kN/m$^2$ (slightly over $q_{allow}$, adjust $L$ or $B$). Let's increase $L$ slightly, say $L=4.6$ m. $B = \frac{15.625}{4.6} \approx 3.4$ m. Let $B=3.5$ m. Area = $4.6 \times 3.5 = 16.1$ m$^2$. $q = \frac{2500}{16.1} \approx 155.3$ kN/m$^2$. This is acceptable.
        Footing position: Centered at 2.1 m from Column 1. Footing length is 4.6 m. Center at 2.3 m. This is close. For precise alignment, adjust projections.
    *   **Beam Analysis:** Calculate SFD and BMD based on column loads and soil pressure.
    *   **Reinforcement:** Design based on critical bending moments and shear forces.

5.  **Trapezoidal vs. Rectangular Combined Footing:** Trapezoidal combined footings are preferred when the distance between columns is relatively large, and a rectangular footing would become excessively long and shallow, leading to material wastage and potential for large bending moments or shear forces. The trapezoidal shape can optimize the footing's geometry for better distribution of load and stress.

6.  **Steps in Combined Footing Design:**
    *   Determine column loads and spacing.
    *   Calculate the centroid of the column loads.
    *   Determine allowable soil pressure.
    *   Select footing dimensions (length and width for rectangular, or widths and length for trapezoidal) such that the footing's geometric center aligns with the load centroid and the soil pressure does not exceed $q_{allow}$.
    *   Analyze the footing as a beam to determine shear forces and bending moments.
    *   Design reinforcement for bending and shear.
    *   Check for punching shear (if applicable).
    *   Consider settlement criteria.

7.  **Significance of Centroid:** In combined footing design, aligning the footing's geometric center with the centroid of the column loads ensures that the resultant upward soil pressure is applied centrally, leading to a more uniform distribution of pressure under the footing. This avoids excessive edge pressures and reduces the likelihood of tilting or uneven settlement.
