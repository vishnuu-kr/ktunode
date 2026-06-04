---
title: "Design of Short Columns under Axial Load with Uniaxial Bending & Biaxial bending - Numerical Problems."
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 3: Limit State of Serviceability "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109cb"
status: "completed"
scrapedAt: "2026-05-20T18:43:49.198Z"
---
# DESIGN OF CONCRETE STRUCTURES - MODULE 3: LIMIT STATE OF SERVICEABILITY

## Topic: Design of Short Columns under Axial Load with Uniaxial Bending & Biaxial Bending - Numerical Problems

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the concept of serviceability in concrete structures and its importance.
*   Identify the failure modes of short columns under axial load and bending.
*   Apply the principles of Limit State Design to short columns.
*   Analyze and design short columns subjected to axial load and uniaxial bending.
*   Analyze and design short columns subjected to axial load and biaxial bending.
*   Solve numerical problems related to the design of short columns for both uniaxial and biaxial bending.
*   Understand the role of interaction diagrams in column design.

---

### 1. Introduction to Serviceability

The Limit State of Serviceability refers to the performance of a structure under service loads, ensuring that it remains functional and acceptable for its intended use throughout its lifespan. Unlike the Limit State of Collapse (Ultimate Limit State), which deals with catastrophic failure, serviceability focuses on aspects like:

*   **Deflection Control:** Limiting the maximum deflection to prevent damage to non-structural elements and maintain user comfort.
*   **Crack Width Control:** Limiting crack widths to prevent aesthetic deterioration, ingress of aggressive substances, and ensure durability.
*   **Vibration Control:** Ensuring that vibrations are within acceptable limits for user comfort and functionality.
*   **Durability:** Protecting the structure from environmental degradation.

While this module focuses on column design under axial load and bending, it's crucial to remember that serviceability criteria are applied *in conjunction with* ultimate strength requirements. The design must satisfy both states.

---

### 2. Short Columns: Definition and Failure Modes

A **short column** is a column whose slenderness ratio is low enough that it does not experience significant secondary moments due to lateral deflection under axial load. According to most codes (e.g., IS 456:2000), a column is considered short if its effective length is less than or equal to:

*   **3 times the least lateral dimension (for columns braced against sidewall movement).**
*   **12 times the least lateral dimension (for columns not braced against sidewall movement).**

When a column is subjected to axial load and bending, the resultant stresses are a combination of axial stress and bending stress. The failure modes can be broadly categorized as:

*   **Compression Failure:** Occurs when the compressive stresses exceed the concrete's crushing strength, leading to buckling or crushing of concrete.
*   **Tension Failure:** Occurs when the tensile stresses in the concrete exceed its tensile strength, leading to cracking and yielding of steel reinforcement.
*   **Combined Failure:** Most common in practice, where both concrete crushing and steel yielding occur.

---

### 3. Design of Short Columns under Axial Load and Uniaxial Bending

This is the most common scenario. The column is subjected to an axial load ($P_u$) and a bending moment ($M_u$) about one axis.

#### 3.1 Key Concepts and Principles

*   **Interaction Diagrams:** These are graphical representations that show the relationship between axial load capacity and moment capacity for a given column cross-section with a specific reinforcement arrangement. They are essential for designing columns under combined axial load and bending.
*   **Strain Compatibility:** The strain in concrete and steel at any point in the cross-section must be compatible.
*   **Equilibrium:** The internal forces (compression in concrete and steel, tension in steel) must balance the external forces (axial load and bending moment).
*   **Material Properties:**
    *   Characteristic compressive strength of concrete ($f_{ck}$)
    *   Characteristic yield strength of steel ($f_y$)
    *   Design strengths: $f_{cd} = \frac{f_{ck}}{\gamma_m}$ and $f_{yd} = \frac{f_y}{\gamma_m}$, where $\gamma_m$ is the partial safety factor for materials (typically 1.5 for concrete and steel).

#### 3.2 Design Procedure (Using IS 456:2000 and Appendix G)

Appendix G of IS 456:2000 provides simplified methods for designing short columns under eccentric axial loads, including the use of design charts (interaction diagrams).

**Steps for Design:**

1.  **Determine Design Loads:** Calculate the factored axial load ($P_u$) and factored bending moment ($M_u$) from the appropriate load combinations (e.g., 1.5 DL + 1.5 LL).
2.  **Assume Column Dimensions and Reinforcement:**
    *   Choose the breadth (b) and depth (D) of the rectangular column (or diameter for a circular column).
    *   Assume the percentage of longitudinal reinforcement ($p_t$ in %). Codes specify minimum and maximum percentages (e.g., 0.8% to 6% for IS 456).
3.  **Calculate Effective Length:** Determine the effective length ($L_e$) of the column. For a short column, this is usually the unsupported length.
4.  **Check for Slenderness:** Verify that the column is indeed short based on its effective length and least lateral dimension.
5.  **Determine the Equivalent Primary Eccentricity (if applicable):** For columns subjected to axial load and uniaxial bending, the load is applied eccentrically. The eccentricity ($e_0$) is given by $e_0 = \frac{M_u}{P_u}$. However, IS 456 often requires considering the minimum eccentricity ($e_{min}$) due to unavoidable accidental eccentricities.
    *   $e_{min} = \frac{\text{Unsupported length}}{500} + \frac{\text{Least lateral dimension}}{30}$
    *   The design eccentricity is taken as $e = e_0 + e_{min}$.
    *   The design moment is then $M_u = P_u \times e$.
6.  **Use Design Charts (Interaction Diagrams):**
    *   The design charts in IS 456:2000 (Appendix G) plot the relationship between $\frac{P_u}{f_{cd}bD}$ (normalized axial load) and $\frac{M_u}{f_{cd}bD^2}$ (normalized moment) for various values of $\frac{p_t f_y}{f_{ck}}$.
    *   For a given axial load ($P_u$) and moment ($M_u$), and assumed column dimensions (b, D) and reinforcement ($p_t$), calculate the normalized values.
    *   Locate the corresponding curve on the chart. If the point $(\frac{P_u}{f_{cd}bD}, \frac{M_u}{f_{cd}bD^2})$ falls below or on the curve for the chosen $\frac{p_t f_y}{f_{ck}}$, the design is satisfactory.
7.  **Iterate if Necessary:** If the assumed reinforcement is insufficient, increase the reinforcement percentage and repeat the process. If it's excessive, consider reducing it.

#### 3.3 Example: Design of a Short Column under Uniaxial Bending

**Problem:** Design a short rectangular column with sides 300 mm x 400 mm to resist a factored axial load of 1200 kN and a factored uniaxial bending moment of 100 kNm about the 400 mm side. The column is effectively held in position and restrained against buckling in a similar way throughout its height. Use M25 concrete and Fe415 steel.

**Solution:**

1.  **Given:**
    *   $P_u = 1200 \text{ kN}$
    *   $M_u = 100 \text{ kNm}$
    *   Column size: $b = 300 \text{ mm}$, $D = 400 \text{ mm}$
    *   Concrete: M25 ($f_{ck} = 25 \text{ N/mm}^2$)
    *   Steel: Fe415 ($f_y = 415 \text{ N/mm}^2$)
    *   Effective length ($L_e$) can be assumed equal to unsupported length (e.g., 3m) for checking slenderness.

2.  **Design Strengths:**
    *   $f_{cd} = \frac{25}{1.5} = 16.67 \text{ N/mm}^2$
    *   $f_{yd} = \frac{415}{1.5} = 276.67 \text{ N/mm}^2$

3.  **Check for Slenderness:**
    *   Unsupported length (assume) = 3000 mm
    *   Least lateral dimension = $b = 300 \text{ mm}$
    *   Effective length ($L_e$) = 3000 mm (assuming same conditions as unsupported length).
    *   Slenderness ratio = $\frac{L_e}{b} = \frac{3000}{300} = 10$.
    *   Since $10 \le 12$, the column is short.

4.  **Consider Minimum Eccentricity:**
    *   $e_{min} = \frac{L_e}{500} + \frac{b}{30} = \frac{3000}{500} + \frac{300}{30} = 6 + 10 = 16 \text{ mm}$.
    *   Actual eccentricity $e_0 = \frac{M_u}{P_u} = \frac{100 \times 10^6}{1200 \times 10^3} = 83.33 \text{ mm}$.
    *   Design eccentricity $e = e_0 + e_{min} = 83.33 + 16 = 99.33 \text{ mm}$.
    *   Design moment $M_u' = P_u \times e = 1200 \times 99.33 \times 10^{-3} = 119.2 \text{ kNm}$.
    *   *Note: For simplicity in using charts, sometimes the original $M_u$ is used if it's significantly larger than $P_u \times e_{min}$. However, the code mandates considering minimum eccentricity.*

5.  **Select Reinforcement (Trial 1):**
    *   Assume 2% steel: Area of steel $A_{sc} = 0.02 \times 300 \times 400 = 2400 \text{ mm}^2$.
    *   Let's use 8 bars of 20 mm diameter ($A_s = 8 \times \pi \times (20/2)^2 = 2513 \text{ mm}^2$). This is close to 2%.
    *   $\frac{p_t f_y}{f_{ck}} = \frac{2.0 \times 415}{25} = 33.2$.

6.  **Calculate Normalized Values (using original $M_u$ for simplicity to illustrate chart usage):**
    *   $\frac{P_u}{f_{cd}bD} = \frac{1200 \times 10^3}{16.67 \times 300 \times 400} = 0.599$
    *   $\frac{M_u}{f_{cd}bD^2} = \frac{100 \times 10^6}{16.67 \times 300 \times 400^2} = 0.031$

7.  **Consult Design Chart:**
    *   For $\frac{p_t f_y}{f_{ck}} = 33.2$ (which corresponds to approximately 2% steel for Fe415), find the curve.
    *   Locate the point $(0.599, 0.031)$.
    *   *Assuming a hypothetical chart where at $\frac{P_u}{f_{cd}bD} = 0.599$, the curve for 2% steel allows a normalized moment of, say, 0.04, then the design is satisfactory.*

8.  **Refinement (Using $M_u'$):**
    *   $\frac{M_u'}{f_{cd}bD^2} = \frac{119.2 \times 10^6}{16.67 \times 300 \times 400^2} = 0.0357$
    *   The point is $(0.599, 0.0357)$. If the chart indicates that for 2% steel, the capacity is at least 0.0357 at this axial load, the design is adequate.

9.  **Final Design:** Provide 8 bars of 20 mm diameter (4 on each face) with appropriate stirrups. Ensure cover and spacing requirements are met.

---

### 4. Design of Short Columns under Axial Load and Biaxial Bending

This is a more complex scenario where the column is subjected to axial load ($P_u$) and bending moments ($M_{ux}$ and $M_{uy}$) about both the x and y axes.

#### 4.1 Key Concepts and Principles

*   **Combined Bending:** The effects of bending about both axes must be considered simultaneously.
*   **Principal Axes:** Bending is usually analyzed about the principal axes of the cross-section. For a symmetrical rectangular section, these are the centroidal axes parallel to the sides.
*   **Strain Distribution:** The strain distribution across the cross-section is no longer linear in a single plane but is more complex.
*   **Simplified Approach (Uniaxial Equivalent Moment):** IS 456:2000 (Appendix G) provides a simplified method to convert the biaxial bending into an equivalent uniaxial bending moment. This allows the use of the uniaxial design charts.

#### 4.2 Uniaxial Equivalent Moment Method (IS 456:2000, Appendix G)

The method involves calculating an equivalent uniaxial moment ($M_{ux}$ or $M_{uy}$) that, when combined with the axial load, would produce a similar effect to the actual biaxial bending.

The equivalent uniaxial moment is given by:

$M_{ux}' = M_{ux} + \epsilon M_{uy} \frac{b}{D}$

where:
*   $M_{ux}$ is the moment about the x-axis.
*   $M_{uy}$ is the moment about the y-axis.
*   $\epsilon$ is a factor that depends on the ratio $\frac{M_{ux}}{M_{uy}}$ and the magnitude of the axial load relative to the column's capacity.
    *   $\epsilon = 1.5$ if $\frac{M_{ux}}{M_{uy}} \ge 0.2$
    *   $\epsilon = 0.6 + 1.4 \frac{M_{ux}}{M_{uy}}$ if $\frac{M_{ux}}{M_{uy}} < 0.2$
*   $b$ is the dimension of the column perpendicular to the axis of bending considered (i.e., breadth in the y-direction).
*   $D$ is the dimension of the column parallel to the axis of bending considered (i.e., depth in the x-direction).

*Important Note:* The value of $\epsilon$ also depends on the magnitude of the axial load. The code provides a more detailed table for $\epsilon$ based on $\frac{P_u}{P_{uz}}$ (where $P_{uz}$ is the pure axial load capacity). For simplicity in introductory problems, the above $\epsilon$ values are often used. However, in a real design, the specific table in the code must be referred to.

**Design Steps:**

1.  **Determine Design Loads:** Calculate factored axial load ($P_u$) and factored moments ($M_{ux}$, $M_{uy}$).
2.  **Assume Column Dimensions and Reinforcement:** Choose $b$, $D$, and assume $p_t$.
3.  **Calculate Effective Length and Check Slenderness:** Same as for uniaxial bending.
4.  **Consider Minimum Eccentricities:** Calculate $e_{min}$ in both directions and the corresponding minimum moments $M_{ux,min}$ and $M_{uy,min}$. The design moments become $M_{ux}' = M_{ux} + P_u e_{min,x}$ and $M_{uy}' = M_{uy} + P_u e_{min,y}$.
5.  **Calculate Uniaxial Equivalent Moment:**
    *   Determine the ratio $\frac{M_{ux}'}{M_{uy}'}$ (using design moments).
    *   Determine the factor $\epsilon$ based on the ratio and axial load magnitude.
    *   Calculate the equivalent uniaxial moment. There are two options:
        *   $M_{eq,x} = M_{ux}' + \epsilon M_{uy}' \frac{b}{D}$ (treating as uniaxial bending about x-axis)
        *   $M_{eq,y} = M_{uy}' + \frac{1}{\epsilon} M_{ux}' \frac{D}{b}$ (treating as uniaxial bending about y-axis)
    *   The column must be designed to resist the larger of these equivalent uniaxial moments for the given axial load ($P_u$). Typically, one direction is chosen for design. Let's say we choose to design for $M_{eq,x}$.
6.  **Use Design Charts for Equivalent Uniaxial Bending:**
    *   Use the calculated $P_u$ and $M_{eq,x}$ (or $M_{eq,y}$).
    *   Calculate normalized values: $\frac{P_u}{f_{cd}bD}$ and $\frac{M_{eq,x}}{f_{cd}bD^2}$.
    *   Refer to the design charts for the chosen $\frac{p_t f_y}{f_{ck}}$ to verify the design.
7.  **Iterate if Necessary:** Adjust reinforcement if the design is not satisfactory.

#### 4.3 Example: Design of a Short Column under Biaxial Bending

**Problem:** Design a short square column 350 mm x 350 mm to resist a factored axial load of 1000 kN and factored moments of $M_{ux} = 80 \text{ kNm}$ and $M_{uy} = 60 \text{ kNm}$. The moments are about the centroidal axes parallel to the sides. Use M20 concrete and Fe415 steel. The unsupported length is 3.2 m.

**Solution:**

1.  **Given:**
    *   $P_u = 1000 \text{ kN}$
    *   $M_{ux} = 80 \text{ kNm}$
    *   $M_{uy} = 60 \text{ kNm}$
    *   Column size: $b = 350 \text{ mm}$, $D = 350 \text{ mm}$
    *   Concrete: M20 ($f_{ck} = 20 \text{ N/mm}^2$)
    *   Steel: Fe415 ($f_y = 415 \text{ N/mm}^2$)
    *   Unsupported length $L_u = 3.2 \text{ m} = 3200 \text{ mm}$.

2.  **Design Strengths:**
    *   $f_{cd} = \frac{20}{1.5} = 13.33 \text{ N/mm}^2$
    *   $f_{yd} = \frac{415}{1.5} = 276.67 \text{ N/mm}^2$

3.  **Check for Slenderness:**
    *   Least lateral dimension = $350 \text{ mm}$.
    *   Effective length ($L_e$) = $3200 \text{ mm}$ (assuming conditions similar to unsupported length).
    *   Slenderness ratio = $\frac{L_e}{350} = \frac{3200}{350} = 9.14$.
    *   Since $9.14 \le 12$, the column is short.

4.  **Consider Minimum Eccentricities:**
    *   $e_{min} = \frac{L_e}{500} + \frac{\text{Least lateral dimension}}{30} = \frac{3200}{500} + \frac{350}{30} = 6.4 + 11.67 = 18.07 \text{ mm}$.
    *   Let's assume minimum eccentricity is the same in both directions for a square column: $e_{min,x} = e_{min,y} = 18.07 \text{ mm}$.
    *   Design moments:
        *   $M_{ux}' = M_{ux} + P_u e_{min,x} = 80 + 1000 \times 18.07 \times 10^{-3} = 80 + 18.07 = 98.07 \text{ kNm}$.
        *   $M_{uy}' = M_{uy} + P_u e_{min,y} = 60 + 1000 \times 18.07 \times 10^{-3} = 60 + 18.07 = 78.07 \text{ kNm}$.

5.  **Calculate Uniaxial Equivalent Moment:**
    *   Ratio of moments: $\frac{M_{ux}'}{M_{uy}'} = \frac{98.07}{78.07} = 1.256$.
    *   Since the ratio is $\ge 0.2$, $\epsilon = 1.5$.
    *   Calculate equivalent uniaxial moment about x-axis:
        *   $M_{eq,x} = M_{ux}' + \epsilon M_{uy}' \frac{b}{D} = 98.07 + 1.5 \times 78.07 \times \frac{350}{350}$
        *   $M_{eq,x} = 98.07 + 1.5 \times 78.07 = 98.07 + 117.11 = 215.18 \text{ kNm}$.
    *   *Alternatively, we could calculate $M_{eq,y}$ and compare, but usually one direction is chosen for design based on the larger equivalent moment.*

6.  **Select Reinforcement (Trial 1):**
    *   Assume 2% steel: $A_{sc} = 0.02 \times 350 \times 350 = 2450 \text{ mm}^2$.
    *   Let's use 8 bars of 20 mm diameter ($A_s = 2513 \text{ mm}^2$). This is $\frac{2513}{350 \times 350} \times 100 = 2.05\%$.
    *   $\frac{p_t f_y}{f_{ck}} = \frac{2.05 \times 415}{20} = 42.5$.

7.  **Calculate Normalized Values (for $M_{eq,x}$):**
    *   $\frac{P_u}{f_{cd}bD} = \frac{1000 \times 10^3}{13.33 \times 350 \times 350} = 0.609$.
    *   $\frac{M_{eq,x}}{f_{cd}bD^2} = \frac{215.18 \times 10^6}{13.33 \times 350 \times 350^2} = 0.0535$.

8.  **Consult Design Chart:**
    *   For $\frac{p_t f_y}{f_{ck}} = 42.5$ (approx. 2.05% steel), find the corresponding curve on the uniaxial bending chart.
    *   Locate the point $(0.609, 0.0535)$.
    *   *Assuming the chart shows that for 2.05% steel, the capacity at a normalized axial load of 0.609 is at least 0.0535, then the design is satisfactory.*

9.  **Final Design:** Provide 8 bars of 20 mm diameter with appropriate stirrups and cover.

---

### 5. Practice Questions and Exercises

**Question 1:**
Design a short rectangular column to resist a factored axial load of $1500 \text{ kN}$ and a factored uniaxial bending moment of $120 \text{ kNm}$. The column dimensions are $300 \text{ mm} \times 450 \text{ mm}$. Use M25 concrete and Fe415 steel. Consider minimum eccentricity. The unsupported length is 3m.

**Answer 1:**
*   **Column Shortness Check:** Slenderness ratio (assuming $b=300$mm) $\approx 10 \le 12$, so it's short.
*   **Minimum Eccentricity:** $e_{min} \approx 16$ mm.
*   **Design Moment:** $M_u' = 1500 \text{ kN} \times ( \frac{120}{1500} + 0.016 ) \text{ m} = 1500 \times (0.08 + 0.016) = 1500 \times 0.096 = 144 \text{ kNm}$.
*   **Normalized Values (assuming 2% steel):**
    *   $\frac{P_u}{f_{cd}bD} \approx \frac{1500 \text{ kN}}{16.67 \text{ N/mm}^2 \times 300 \text{ mm} \times 450 \text{ mm}} \approx 0.67$.
    *   $\frac{M_u'}{f_{cd}bD^2} \approx \frac{144 \times 10^6 \text{ Nmm}}{16.67 \text{ N/mm}^2 \times 300 \text{ mm} \times 450^2 \text{ mm}^2} \approx 0.037$.
*   **Design Chart Usage:** Refer to the design chart for $\frac{p_t f_y}{f_{ck}}$ corresponding to the chosen steel percentage. If the point $(0.67, 0.037)$ falls within the capacity of the chosen steel percentage, the design is satisfactory.
*   **Result:** A trial calculation using design charts would indicate that approximately 1.5% to 2% steel is required. For example, 6 bars of 18 mm diameter ($A_s = 1520 \text{ mm}^2$, 1.13%) might be insufficient, while 8 bars of 18 mm diameter ($A_s = 2036 \text{ mm}^2$, 1.51%) or 6 bars of 20 mm diameter ($A_s = 1885 \text{ mm}^2$, 1.4%) might be adequate. A precise answer requires using the actual design charts.

**Question 2:**
A short square column $400 \text{ mm} \times 400 \text{ mm}$ is subjected to a factored axial load of $1100 \text{ kN}$ and factored biaxial moments $M_{ux} = 70 \text{ kNm}$ and $M_{uy} = 50 \text{ kNm}$. Use M20 concrete and Fe415 steel. The unsupported length is 3m. Design the column.

**Answer 2:**
*   **Column Shortness Check:** Slenderness ratio $\approx 8.57 \le 12$, so it's short.
*   **Minimum Eccentricity:** $e_{min} \approx 16.67$ mm.
*   **Design Moments:**
    *   $M_{ux}' = 70 + 1100 \times 16.67 \times 10^{-3} = 70 + 18.34 = 88.34 \text{ kNm}$.
    *   $M_{uy}' = 50 + 1100 \times 16.67 \times 10^{-3} = 50 + 18.34 = 68.34 \text{ kNm}$.
*   **Uniaxial Equivalent Moment:**
    *   Ratio $\frac{M_{ux}'}{M_{uy}'} = \frac{88.34}{68.34} = 1.29$.
    *   $\epsilon = 1.5$ (since ratio $\ge 0.2$).
    *   $M_{eq,x} = M_{ux}' + \epsilon M_{uy}' \frac{b}{D} = 88.34 + 1.5 \times 68.34 \times \frac{400}{400} = 88.34 + 102.51 = 190.85 \text{ kNm}$.
*   **Normalized Values (assuming 2% steel):**
    *   $\frac{P_u}{f_{cd}bD} \approx \frac{1100 \text{ kN}}{13.33 \text{ N/mm}^2 \times 400 \text{ mm} \times 400 \text{ mm}} \approx 0.515$.
    *   $\frac{M_{eq,x}}{f_{cd}bD^2} \approx \frac{190.85 \times 10^6 \text{ Nmm}}{13.33 \text{ N/mm}^2 \times 400 \text{ mm} \times 400^2 \text{ mm}^2} \approx 0.0355$.
*   **Design Chart Usage:** Refer to the design chart for uniaxial bending with $P_u = 1100 \text{ kN}$ and $M_{eq,x} = 190.85 \text{ kNm}$.
*   **Result:** A trial calculation using design charts would indicate that approximately 1.5% to 2% steel is required. For example, 8 bars of 16 mm diameter ($A_s = 1608 \text{ mm}^2$, 1.00%) might be insufficient, while 8 bars of 18 mm diameter ($A_s = 2036 \text{ mm}^2$, 1.27%) or 12 bars of 16 mm diameter ($A_s = 2412 \text{ mm}^2$, 1.51%) might be adequate. A precise answer requires using the actual design charts.

---

### 6. Important Points to Remember

*   **Short Column Classification:** Always verify the slenderness ratio against the code limits.
*   **Minimum Eccentricity:** This is crucial for code compliance and is applied to both uniaxial and biaxial bending cases.
*   **Interaction Diagrams:** They are the primary tool for designing columns under combined axial load and bending. Understand how to read and use them.
*   **Biaxial Bending Simplification:** The concept of equivalent uniaxial moment allows the use of standard uniaxial charts but requires careful calculation of $\epsilon$.
*   **Axial Load Capacity ($P_{uz}$):** The value of $\epsilon$ in biaxial bending design is dependent on the ratio of the applied axial load to the pure axial load capacity of the column. Refer to the code for the correct table.
*   **Reinforcement Percentage:** Codes specify minimum (0.8%) and maximum (6%) longitudinal reinforcement.
*   **Cover and Spacing:** Ensure that the chosen bar sizes and arrangement satisfy the cover requirements and spacing rules for proper concrete compaction and bond.
*   **Stirrups:** Design of stirrups (usually using $0.36\%$ of gross concrete area for transverse reinforcement in compression members) is also required but is not the primary focus of these numerical problems.

---
