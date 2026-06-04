---
title: "Design of Two-way Slabs - Numerical Problems"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 2: Doubly Reinforced Beams "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c6"
status: "completed"
scrapedAt: "2026-05-20T18:43:46.372Z"
---
# DESIGN OF CONCRETE STRUCTURES

## Module 2: Doubly Reinforced Beams (Focus on Two-Way Slabs - Numerical Problems)

### Introduction

This module delves into the design of two-way slabs, a crucial structural element in modern construction. While the broader topic of this module is Doubly Reinforced Beams, we will focus specifically on the application of design principles to two-way slabs, often utilizing concepts that extend from beam design. Two-way slabs are structural elements that support loads by bending primarily in two directions, supported on all four sides by beams or walls.

### Learning Outcomes

By the end of this topic, you should be able to:

1.  **Understand the fundamental behavior of two-way slabs.**
2.  **Differentiate between one-way and two-way slab action.**
3.  **Identify the common methods for designing two-way slabs.**
4.  **Perform hand calculations for the design of two-way slabs using simplified methods.**
5.  **Determine the bending moments and shear forces in two-way slabs.**
6.  **Calculate the required reinforcement for two-way slabs in both directions.**
7.  **Check for deflection and serviceability requirements.**
8.  **Understand the implications of edge conditions on slab behavior.**

---

### 1. Fundamental Behavior of Two-Way Slabs

*   **Load Distribution:** Unlike one-way slabs that primarily bend along one axis, two-way slabs distribute loads in both longitudinal and transverse directions.
*   **Support Conditions:** The behavior of a two-way slab is significantly influenced by how it is supported at its edges.
    *   **Simply Supported on all four sides:** Load is distributed by bending in both directions, with moments occurring parallel to the edges.
    *   **Fixed on all four sides:** Restraint at the edges induces negative moments in addition to positive moments.
    *   **Continuous over supports:** Similar to fixed conditions, but with varying moment magnitudes depending on the extent of continuity.
*   **Primary Bending:** The slab bends in two principal directions, with the longer span typically carrying less load per unit width compared to the shorter span.
*   **Twisting Moments:** In cases of partial restraint or non-uniform loading, slabs can also experience twisting moments, which adds complexity to the analysis.

---

### 2. One-Way vs. Two-Way Slab Action

*   **One-Way Slab Action:** Occurs when the ratio of the longer span ($L_y$) to the shorter span ($L_x$) is greater than 2 (i.e., $L_y/L_x > 2$). The slab effectively acts like a series of beams spanning the shorter direction, with the longer span acting mainly as a support for these beams. Load is primarily transferred in one direction.
*   **Two-Way Slab Action:** Occurs when the ratio of the longer span to the shorter span is less than or equal to 2 (i.e., $L_y/L_x \le 2$). The slab bends and distributes loads in both directions.

**Key Concept:** The span ratio ($L_y/L_x$) is the primary determinant of slab action.

---

### 3. Common Methods for Designing Two-Way Slabs

Several methods exist for analyzing and designing two-way slabs, ranging from simplified empirical approaches to more rigorous analytical and numerical techniques. For manual calculations, simplified methods are often employed.

*   **Empirical Methods (e.g., Yield Line Theory):** These methods are based on the ultimate load capacity of the slab, considering the formation of plastic hinges (yield lines). They are generally conservative.
*   **Coefficient Methods (e.g., IS 456:2000 Simplified Method):** These methods use pre-determined coefficients to estimate bending moments based on span ratios, load conditions, and support fixity. They are widely used for preliminary design.
*   **Finite Element Method (FEM):** A powerful numerical technique used for complex geometries, loading conditions, and boundary supports. This is typically done using software.

**Focus for this Topic:** We will concentrate on the **Coefficient Method** as per IS 456:2000 for hand calculations.

---

### 4. Design of Two-Way Slabs using Coefficient Method (IS 456:2000)

This method provides simplified expressions for calculating bending moments in slabs supported on all four sides, with spans not exceeding certain limits.

#### 4.1 Assumptions and Scope (IS 456:2000 Clause 24)

*   Applies to slabs supported on at least two opposite sides by beams or walls of stiffness adequate to provide vertical support to the slab.
*   The supporting beams are monolithic with the slab.
*   Loads are uniformly distributed.
*   The slab is a rectangular panel.
*   The span of the slab does not exceed certain limits (typically around 3.5m for moderate loads, but always refer to the latest code).
*   **Crucially:** For two-way action, the ratio of the longer span to the shorter span ($L_y/L_x$) should not exceed 2.

#### 4.2 Calculation of Bending Moments

The bending moments are calculated independently for each direction (along the shorter span $L_x$ and along the longer span $L_y$).

*   **Moments in the direction of the shorter span ($L_x$):**
    *   Mid-span moment: $M_x = \alpha_x w L_x^2$
    *   Support moment (negative): $M_x' = \beta_x w L_x^2$
*   **Moments in the direction of the longer span ($L_y$):**
    *   Mid-span moment: $M_y = \alpha_y w L_y^2$
    *   Support moment (negative): $M_y' = \beta_y w L_y^2$

Where:
*   $w$ = Uniformly distributed load (UDL) on the slab (kN/m²). This includes the self-weight of the slab, finishes, and the superimposed dead and live loads.
*   $L_x$ = Length of the shorter span (m).
*   $L_y$ = Length of the longer span (m).
*   $\alpha_x$, $\alpha_y$ = Coefficients for calculating mid-span moments.
*   $\beta_x$, $\beta_y$ = Coefficients for calculating support moments (negative).

**Important:** These coefficients ($\alpha$ and $\beta$) depend on:
1.  The ratio $L_y/L_x$.
2.  The edge conditions (e.g., simply supported, fixed, continuous).

#### 4.3 Coefficients ($\alpha$ and $\beta$) from IS 456:2000 (Table 26)

IS 456:2000 provides tables of coefficients for various span ratios and edge conditions. Here's a simplified representation of a typical scenario (refer to the code for precise values and other conditions):

**Scenario:** Slab supported on all four sides, with all corners free to lift (approximating simply supported). The coefficients are based on the span ratio $L_y/L_x$.

| $L_y/L_x$ | $\alpha_x$ | $\alpha_y$ | $\beta_x$ | $\beta_y$ |
| :-------- | :--------- | :--------- | :-------- | :-------- |
| 1.0       | 0.044      | 0.044      | 0.044     | 0.044     |
| 1.1       | 0.046      | 0.040      | 0.046     | 0.040     |
| 1.2       | 0.051      | 0.037      | 0.051     | 0.037     |
| 1.3       | 0.054      | 0.034      | 0.054     | 0.034     |
| 1.4       | 0.056      | 0.031      | 0.056     | 0.031     |
| 1.5       | 0.058      | 0.029      | 0.058     | 0.029     |
| 1.6       | 0.060      | 0.027      | 0.060     | 0.027     |
| 1.7       | 0.061      | 0.025      | 0.061     | 0.025     |
| 1.8       | 0.062      | 0.023      | 0.062     | 0.023     |
| 1.9       | 0.063      | 0.022      | 0.063     | 0.022     |
| 2.0       | 0.064      | 0.020      | 0.064     | 0.020     |

**Important Note:** The above table is illustrative. **Always refer to the specific tables and conditions provided in IS 456:2000, Clause 24, which covers various edge conditions (simply supported on 2, 3, or 4 sides, and fixed).** The coefficients for fixed edges will be different and generally result in lower mid-span moments and higher negative support moments.

#### 4.4 Calculation of Load ($w$)

*   **Self-weight of slab:** $0.025 \times \text{Unit Weight of Reinforced Concrete} \times \text{Overall Depth (D)}$
    *   Unit Weight of RCC $\approx 25$ kN/m³
    *   Self-weight (kN/m²) = $0.025 \times 25 \times D = 0.625D$
*   **Finishes load:** Typically given (e.g., 1 kN/m²).
*   **Superimposed Dead Load (SDL):** Typically given (e.g., 1 kN/m²).
*   **Live Load (LL):** From the building's functional use (e.g., residential, office, heavy machinery).
*   **Factored Load:** $w = 1.5 \times (\text{Self-weight} + \text{Finishes} + \text{SDL} + \text{LL})$

#### 4.5 Design for Bending

Once the design moments ($M_{ux}$ and $M_{uy}$ for each direction) are calculated, the slab is designed as a one-way slab for each direction using the principles of singly reinforced beams.

*   **Determine the effective depth ($d$) and overall depth ($D$):**
    *   Estimate $D$ based on span/depth ratios or experience.
    *   Calculate effective depth: $d = D - \text{Effective Cover} - \text{Half the diameter of the main bar}$.
    *   Effective Cover: Usually 15-25mm for slabs.
*   **Calculate Lever Arm ($z$) and Area of Steel ($A_{st}$):**
    *   For $M_{ux}$ (along $L_x$): Design for $M_{ux}$ using $b = L_y$ (width over which moment acts) and effective depth $d$.
    *   For $M_{uy}$ (along $L_y$): Design for $M_{uy}$ using $b = L_x$ (width over which moment acts) and effective depth $d$.

**Formulas for $A_{st}$ (from singly reinforced beam design):**

*   Calculate the limiting moment of resistance ($M_{u,lim}$) for the given concrete grade and steel grade.
*   If $M_{ux} \le M_{u,lim}$: The section is under-reinforced.
    *   $z = 0.5 (1 + \sqrt{1 - \frac{2M_{ux}}{b d^2 f_{ck}}})$ or use $z \approx 0.9d$ (approximate).
    *   $A_{st} = \frac{M_{ux}}{0.87 f_y z}$
*   If $M_{ux} > M_{u,lim}$: The section is over-reinforced, which is not permitted. The slab needs to be made deeper or a richer concrete mix used.

**Important:** The negative moments at the supports require providing steel reinforcement in the top of the slab. This makes the slab **doubly reinforced** at the supports in both directions. However, the term "doubly reinforced beam" usually refers to beams where both tension and compression reinforcement are needed to resist the bending moment in the *same* section. In slabs, it's more about providing top steel at supports and bottom steel at mid-span.

#### 4.6 Reinforcement Detailing

*   **Bottom Reinforcement (Positive Moment):**
    *   Main reinforcement for $M_x$ is placed along the longer span direction (parallel to $L_y$).
    *   Main reinforcement for $M_y$ is placed along the shorter span direction (parallel to $L_x$).
    *   The steel provided for the larger moment will be the "main" steel in that direction.
*   **Top Reinforcement (Negative Moment):**
    *   Negative moments exist at supports. The code provides coefficients for support moments.
    *   Negative steel is provided parallel to the span where the negative moment is calculated.
    *   At the junction of two slabs, the negative moment steel from one slab extends into the adjacent slab.
*   **Distribution Reinforcement:** A minimum amount of reinforcement is provided in the perpendicular direction to hold the main reinforcement and control shrinkage cracks.

#### 4.7 Minimum Reinforcement

*   As per IS 456:2000, Table 16:
    *   For mild steel: $0.15\%$ of the gross cross-sectional area.
    *   For HYSD bars: $0.12\%$ of the gross cross-sectional area.
*   This minimum reinforcement is to be provided in both directions.

---

### 5. Numerical Problem Example (Coefficient Method)

**Problem:** Design a two-way slab for a hall with clear spans of $3.0$ m $\times 4.0$ m. The slab is supported on all four sides by beams $230$ mm wide. The live load is $2$ kN/m² and the finishes load is $1$ kN/m². Use M20 concrete and Fe415 steel. Assume the slab is simply supported on all sides.

**Solution:**

**1. Data:**
*   Clear span $L_x = 3.0$ m
*   Clear span $L_y = 4.0$ m
*   Beam width = $0.23$ m
*   Live Load (LL) = $2$ kN/m²
*   Finishes Load = $1$ kN/m²
*   Concrete Grade = M20 ($f_{ck} = 20$ N/mm²)
*   Steel Grade = Fe415 ($f_y = 415$ N/mm²)

**2. Slab Action:**
*   Span ratio $L_y/L_x = 4.0 / 3.0 = 1.33$.
*   Since $L_y/L_x \le 2$, the slab is a two-way slab.

**3. Trial Depth of Slab:**
*   As per IS 456:2000, Clause 23.2.1 (basic ratios of span to effective depth for simply supported slabs):
    *   For slabs spanning in one direction: $L/d = 20$ for mild steel, $L/d = 26$ for HYSD bars.
    *   For two-way slabs: $L/d = 20$ for mild steel, $L/d = 26$ for HYSD bars.
*   For the longer span $L_y = 4.0$ m, let's assume $d = 4000 / 26 \approx 154$ mm.
*   Let's assume an effective cover of $20$ mm and bar diameter of $10$ mm.
*   Overall depth $D = d + \text{effective cover} + (\text{bar diameter}/2) = 154 + 20 + 5 = 179$ mm.
*   Let's choose $D = 180$ mm.
*   Effective depth $d = 180 - 20 - 5 = 155$ mm.
*   Check span/depth ratio: $L_x/d = 3000/155 \approx 19.35$ (OK, less than 20). $L_y/d = 4000/155 \approx 25.8$ (OK, less than 26).

**4. Load Calculation:**
*   Self-weight of slab = $0.625 \times D = 0.625 \times 0.180 = 0.1125$ kN/m²
*   Total load = Self-weight + Finishes + LL = $0.1125 + 1.0 + 2.0 = 3.1125$ kN/m²
*   Factored UDL, $w = 1.5 \times 3.1125 = 4.66875$ kN/m² $\approx 4.67$ kN/m²

**5. Effective Spans:**
*   The slab is supported on beams of width $0.23$ m.
*   Effective span $L_{x,eff} = \text{clear span} + d = 3.0 + 0.155 = 3.155$ m. (This is one method, another is clear span + average width of support if beams are large. For simplicity, we often use clear span + d for one-way and for two-way, we might use the average of clear span + d and clear span + beam width).
    *   Let's use clear span + beam width for the shorter span: $L_{x,eff} = 3.0 + 0.23 = 3.23$ m.
    *   For the longer span $L_y$: $L_{y,eff} = 4.0 + 0.23 = 4.23$ m.
*   The coefficients in IS 456 are generally based on effective spans. However, for simpler cases, using clear spans with the load spread over the width of the panel can be adequate. Let's use clear spans for moment calculations as per simplified approach and consider the effective span for steel area calculation.
*   **However, IS 456 Clause 24.2 specifically states to use the dimensions of the panel for calculation of moments.** So, we use clear spans $L_x = 3.0$ m and $L_y = 4.0$ m for the moment calculations with the corresponding coefficients.

**6. Bending Moments (Assuming simply supported on all sides, using Table 26 from IS 456 for $L_y/L_x = 1.33$):**
*   From the table (interpolating between 1.3 and 1.4):
    *   $\alpha_x \approx 0.053$
    *   $\alpha_y \approx 0.0345$
    *   $\beta_x \approx 0.053$
    *   $\beta_y \approx 0.0345$

*   **Moments in x-direction (along $L_x = 3.0$ m):**
    *   Mid-span moment $M_{ux} = \alpha_x w L_x^2 = 0.053 \times 4.67 \times (3.0)^2 = 2.216$ kNm
    *   Support moment $M_{ux}' = \beta_x w L_x^2 = 0.053 \times 4.67 \times (3.0)^2 = 2.216$ kNm (Negative)

*   **Moments in y-direction (along $L_y = 4.0$ m):**
    *   Mid-span moment $M_{uy} = \alpha_y w L_y^2 = 0.0345 \times 4.67 \times (4.0)^2 = 2.578$ kNm
    *   Support moment $M_{uy}' = \beta_y w L_y^2 = 0.0345 \times 4.67 \times (4.0)^2 = 2.578$ kNm (Negative)

**7. Design for Bending - Area of Steel ($A_{st}$):**

*   **For $M_{ux}$ (Bottom Steel in x-direction):**
    *   Assume $b = 1$ m width of the slab.
    *   $M_{ux} = 2.216$ kNm $= 2.216 \times 10^6$ Nmm.
    *   $f_{ck} = 20$ N/mm², $f_y = 415$ N/mm².
    *   $M_{u,lim}$ for M20/Fe415: $M_{u,lim} = 0.36 f_{ck} b d (1 - 0.418 \frac{f_{ck}}{f_y})$
        $M_{u,lim} = 0.36 \times 20 \times 1000 \times 155 (1 - 0.418 \frac{20}{415}) = 1113.6 \times 10^6 (1 - 0.0202) = 1091.1 \times 10^6$ Nmm
    *   Since $M_{ux} = 2.216 \times 10^6$ Nmm $< M_{u,lim}$, under-reinforced.
    *   Calculate $z$: $z = 0.5 (1 + \sqrt{1 - \frac{2M_{ux}}{b d^2 f_{ck}}}) = 0.5 (1 + \sqrt{1 - \frac{2 \times 2.216 \times 10^6}{1000 \times 155^2 \times 20}}) = 0.5 (1 + \sqrt{1 - 0.00466})$
        $z = 0.5 (1 + 0.99767) = 0.9988 \times 155 \approx 154.8$ mm. (Using $z \approx 0.9d = 0.9 \times 155 = 139.5$ mm is conservative but generally acceptable for preliminary checks). Let's use $z \approx 154.8$ mm for accuracy.
    *   $A_{st,x} = \frac{M_{ux}}{0.87 f_y z} = \frac{2.216 \times 10^6}{0.87 \times 415 \times 154.8} = 32.7$ mm²

*   **For $M_{uy}$ (Bottom Steel in y-direction):**
    *   Assume $b = 1$ m width of the slab.
    *   $M_{uy} = 2.578$ kNm $= 2.578 \times 10^6$ Nmm.
    *   $M_{uy} < M_{u,lim}$.
    *   Calculate $z$: $z = 0.5 (1 + \sqrt{1 - \frac{2M_{uy}}{b d^2 f_{ck}}}) = 0.5 (1 + \sqrt{1 - \frac{2 \times 2.578 \times 10^6}{1000 \times 155^2 \times 20}}) = 0.5 (1 + \sqrt{1 - 0.00544})$
        $z = 0.5 (1 + 0.99729) = 0.9986 \times 155 \approx 154.7$ mm.
    *   $A_{st,y} = \frac{M_{uy}}{0.87 f_y z} = \frac{2.578 \times 10^6}{0.87 \times 415 \times 154.7} = 38.2$ mm²

*   **For $M_{ux}'$ (Top Steel in x-direction at supports):**
    *   $M_{ux}' = 2.216$ kNm. Design is similar to mid-span moment.
    *   $A_{st,x,top} = \frac{2.216 \times 10^6}{0.87 \times 415 \times 154.8} = 32.7$ mm²

*   **For $M_{uy}'$ (Top Steel in y-direction at supports):**
    *   $M_{uy}' = 2.578$ kNm. Design is similar to mid-span moment.
    *   $A_{st,y,top} = \frac{2.578 \times 10^6}{0.87 \times 415 \times 154.7} = 38.2$ mm²

**8. Minimum Reinforcement:**
*   Gross Area = $1000 \times 180 = 180000$ mm²
*   Minimum $A_{st}$ for HYSD bars = $0.12\%$ of Gross Area $= 0.0012 \times 180000 = 216$ mm²

**9. Bar Spacing and Selection:**

*   **Bottom Steel:**
    *   In x-direction ($A_{st,x} = 32.7$ mm²): Provide $\phi 8$ bars @ $150$ mm c/c. Area provided $\approx \frac{0.785 \times 8^2}{150} \times 1000 = 33.1$ mm²/m.
    *   In y-direction ($A_{st,y} = 38.2$ mm²): Provide $\phi 8$ bars @ $125$ mm c/c. Area provided $\approx \frac{0.785 \times 8^2}{125} \times 1000 = 39.8$ mm²/m.
    *   Also provide minimum reinforcement in both directions. $\phi 8$ @ $250$ mm c/c gives $25.1$ mm²/m, which is less than minimum.
    *   So, provide $\phi 8$ @ $200$ mm c/c (31.4 mm²/m) as minimum in the perpendicular direction to the main steel.

*   **Top Steel (Negative Moment):**
    *   In x-direction ($A_{st,x,top} = 32.7$ mm²): Provide $\phi 8$ bars @ $150$ mm c/c. Area provided $\approx 33.1$ mm²/m.
    *   In y-direction ($A_{st,y,top} = 38.2$ mm²): Provide $\phi 8$ bars @ $125$ mm c/c. Area provided $\approx 39.8$ mm²/m.
    *   Top steel should extend into the adjacent panels by a certain length as per IS 456 (e.g., $0.25 L_x$ or $0.25 L_y$ from the face of the support).

**10. Distribution Reinforcement:**
*   Minimum reinforcement in the perpendicular direction to the main reinforcement in both layers (top and bottom) must be provided.
*   For $A_{st,x}$ (main steel along y), provide distribution steel along x: $\phi 8$ @ $200$ mm c/c.
*   For $A_{st,y}$ (main steel along x), provide distribution steel along y: $\phi 8$ @ $200$ mm c/c.

**Final Reinforcement Summary:**

*   **Bottom:**
    *   Parallel to $L_x$ (span $4.0$ m): $\phi 8$ @ $125$ mm c/c.
    *   Parallel to $L_y$ (span $3.0$ m): $\phi 8$ @ $150$ mm c/c.
*   **Top (over supports):**
    *   Parallel to $L_x$ (span $4.0$ m): $\phi 8$ @ $125$ mm c/c, with appropriate curtailment.
    *   Parallel to $L_y$ (span $3.0$ m): $\phi 8$ @ $150$ mm c/c, with appropriate curtailment.
*   **Distribution Steel:** Minimum reinforcement $\phi 8$ @ $200$ mm c/c in both directions, in both layers.

**11. Shear and Deflection Check (Briefly):**
*   **Shear:** Calculate maximum shear force (usually at supports) and check against the shear strength of concrete. For typical slab loads and depths, shear reinforcement is usually not required in slabs unless loads are very heavy or spans are very long.
*   **Deflection:** The assumed depth should satisfy the deflection limits as per IS 456. This check is implicitly covered by using the appropriate span/depth ratios for preliminary sizing.

---

### 6. Numerical Problem Example 2 (Fixed Edges)

**Problem:** Design a two-way slab with clear dimensions $3.0$ m $\times 3.0$ m. All four edges are built-in. The slab carries a live load of $5$ kN/m² and finishes load of $1.2$ kN/m². Use M25 concrete and Fe500 steel.

**Solution:**

**1. Data:**
*   Clear span $L_x = 3.0$ m, $L_y = 3.0$ m.
*   Live Load (LL) = $5$ kN/m²
*   Finishes Load = $1.2$ kN/m²
*   Concrete Grade = M25 ($f_{ck} = 25$ N/mm²)
*   Steel Grade = Fe500 ($f_y = 500$ N/mm²)

**2. Slab Action:**
*   Span ratio $L_y/L_x = 3.0 / 3.0 = 1.0$.
*   This is a two-way slab.

**3. Trial Depth of Slab:**
*   For two-way slabs with HYSD bars, $L/d = 26$.
*   Let $d = 3000 / 26 \approx 115.4$ mm.
*   Assume effective cover = $20$ mm, bar diameter = $10$ mm.
*   $D = 115.4 + 20 + 5 = 140.4$ mm.
*   Let's choose $D = 150$ mm.
*   Effective depth $d = 150 - 20 - 5 = 125$ mm.
*   Check span/depth ratio: $L/d = 3000/125 = 24$ (OK, less than 26).

**4. Load Calculation:**
*   Self-weight of slab = $0.625 \times D = 0.625 \times 0.150 = 0.09375$ kN/m²
*   Total load = $0.09375 + 1.2 + 5.0 = 6.29375$ kN/m²
*   Factored UDL, $w = 1.5 \times 6.29375 = 9.440625$ kN/m² $\approx 9.44$ kN/m²

**5. Bending Moments (Assuming built-in edges, IS 456:2000 Clause 24.1, Table 27 for uniformly distributed load on a slab built-in on all four sides):**
*   For $L_y/L_x = 1.0$:
    *   $\alpha_x = 0.047$
    *   $\alpha_y = 0.047$
    *   $\beta_x = 0.047$
    *   $\beta_y = 0.047$
    *   Note: For built-in slabs, moments at mid-span and supports can be close. The actual values will depend on the exact coefficients for negative moments at supports from the code. This example simplifies it by using same coefficients. **Real design must consult the code.**

*   **Moments in x-direction ($L_x = 3.0$ m):**
    *   Mid-span moment $M_{ux} = \alpha_x w L_x^2 = 0.047 \times 9.44 \times (3.0)^2 = 4.00$ kNm
    *   Support moment $M_{ux}' = \beta_x w L_x^2 = 0.047 \times 9.44 \times (3.0)^2 = 4.00$ kNm (Negative)

*   **Moments in y-direction ($L_y = 3.0$ m):**
    *   Mid-span moment $M_{uy} = \alpha_y w L_y^2 = 0.047 \times 9.44 \times (3.0)^2 = 4.00$ kNm
    *   Support moment $M_{uy}' = \beta_y w L_y^2 = 0.047 \times 9.44 \times (3.0)^2 = 4.00$ kNm (Negative)

**6. Design for Bending - Area of Steel ($A_{st}$):**

*   **For $M_{ux}$ (Bottom Steel in x-direction):**
    *   $M_{ux} = 4.00$ kNm $= 4.00 \times 10^6$ Nmm.
    *   $f_{ck} = 25$ N/mm², $f_y = 500$ N/mm².
    *   $M_{u,lim}$ for M25/Fe500: $M_{u,lim} = 0.36 \times 25 \times 1000 \times 125 (1 - 0.418 \frac{25}{500}) = 1125 \times 10^6 (1 - 0.0209) = 1101.5 \times 10^6$ Nmm
    *   Since $M_{ux} < M_{u,lim}$.
    *   Calculate $z$: $z = 0.5 (1 + \sqrt{1 - \frac{2 \times 4.00 \times 10^6}{1000 \times 125^2 \times 25}}) = 0.5 (1 + \sqrt{1 - 0.002048}) = 0.5 (1 + 0.99897) \approx 124.87$ mm.
    *   $A_{st,x} = \frac{M_{ux}}{0.87 f_y z} = \frac{4.00 \times 10^6}{0.87 \times 500 \times 124.87} = 73.3$ mm²

*   **For $M_{uy}$ (Bottom Steel in y-direction):**
    *   $M_{uy} = 4.00$ kNm.
    *   $A_{st,y} = 73.3$ mm² (Same as $A_{st,x}$ due to symmetry).

*   **For $M_{ux}'$ (Top Steel in x-direction at supports):**
    *   $M_{ux}' = 4.00$ kNm.
    *   $A_{st,x,top} = 73.3$ mm²

*   **For $M_{uy}'$ (Top Steel in y-direction at supports):**
    *   $M_{uy}' = 4.00$ kNm.
    *   $A_{st,y,top} = 73.3$ mm²

**7. Minimum Reinforcement:**
*   Gross Area = $1000 \times 150 = 150000$ mm²
*   Minimum $A_{st}$ for Fe500 = $0.12\%$ of Gross Area $= 0.0012 \times 150000 = 180$ mm²

**8. Bar Spacing and Selection:**

*   **Bottom Steel (for $M_{ux}$ and $M_{uy}$):**
    *   Required $A_{st} = 73.3$ mm²/m.
    *   Provide $\phi 8$ bars @ $80$ mm c/c. Area provided $\approx \frac{0.785 \times 8^2}{80} \times 1000 = 78.5$ mm²/m.
    *   Minimum steel check: $\phi 8$ @ $200$ mm c/c gives $25.1$ mm²/m (less than 180 mm²/m).
    *   So, provide $\phi 8$ @ $80$ mm c/c for main steel.
    *   Distribution steel in the perpendicular direction: $\phi 8$ @ $200$ mm c/c (provides 25.1 mm²/m, which is sufficient for distribution as minimum steel is satisfied by the main steel in this case).

*   **Top Steel (for $M_{ux}'$ and $M_{uy}'$):**
    *   Required $A_{st} = 73.3$ mm²/m.
    *   Provide $\phi 8$ bars @ $80$ mm c/c.

**Final Reinforcement Summary:**

*   **Bottom:** $\phi 8$ @ $80$ mm c/c in both directions.
*   **Top:** $\phi 8$ @ $80$ mm c/c in both directions, with appropriate curtailment at supports.
*   **Distribution Steel:** $\phi 8$ @ $200$ mm c/c in both directions, in both layers.

---

### 7. Practice Questions

1.  A two-way slab has clear dimensions of $2.5$ m $\times 3.5$ m. The edges are simply supported. The slab carries a live load of $3$ kN/m² and a finishes load of $1.5$ kN/m². Design the slab using M20 concrete and Fe415 steel. Calculate the bending moments and the required area of steel for both directions.
    **(Answer hint:** $L_y/L_x = 1.4$. Use coefficients for simply supported slabs. Calculate factored load. Estimate depth. Calculate moments and then steel. For $L_x = 2.5$m, $d \approx 100$mm, $D \approx 125$mm. $w \approx 1.5 \times (0.625 \times 0.125 + 1.5 + 3) \approx 7.2$ kN/m². For $L_y/L_x = 1.4$, $\alpha_x \approx 0.056, \alpha_y \approx 0.031$. $M_{ux} \approx 0.056 \times 7.2 \times 2.5^2 \approx 2.52$ kNm. $M_{uy} \approx 0.031 \times 7.2 \times 3.5^2 \approx 2.68$ kNm.)

2.  A square two-way slab of $4.0$ m $\times 4.0$ m has all its edges built-in. The service loads are a superimposed dead load of $2$ kN/m² and a live load of $4$ kN/m². Use M25 concrete and Fe500 steel. Design the slab for bending.
    **(Answer hint:** $L_y/L_x = 1.0$. Use coefficients for built-in slabs. Calculate factored load. Estimate depth. $d \approx 154$mm, $D \approx 180$mm. $w \approx 1.5 \times (0.625 \times 0.180 + 2 + 4) \approx 10.9$ kN/m². For $L_y/L_x = 1.0$, $\alpha_x = \alpha_y = \beta_x = \beta_y \approx 0.047$ (refer to code). $M_{ux} = M_{uy} = 0.047 \times 10.9 \times 4^2 \approx 8.18$ kNm. Calculate steel for these moments.)

3.  Determine the minimum percentage of reinforcement required for a two-way slab cast with M30 concrete and Fe500 steel.
    **(Answer:** For Fe500 steel, the minimum percentage is $0.12\%$ of the gross cross-sectional area.)

4.  What is the primary factor determining whether a slab exhibits one-way or two-way action?
    **(Answer:** The ratio of the longer span to the shorter span ($L_y/L_x$).)

---

### 8. Important Points to Remember

*   **Span Ratio:** The $L_y/L_x$ ratio is critical for determining one-way vs. two-way action. $L_y/L_x > 2$ implies one-way action; $L_y/L_x \le 2$ implies two-way action.
*   **Support Conditions:** The continuity and fixity of edges significantly affect the bending moments. Always refer to the correct coefficients from IS 456:2000 for the specific edge conditions.
*   **Clear Spans vs. Effective Spans:** Understand when to use clear spans for moment calculations and when effective spans are more appropriate (often for determining depth and spacing). IS 456 coefficients are typically based on clear spans.
*   **Minimum Reinforcement:** Always provide the minimum reinforcement in both directions, even if calculations show a lower requirement. This controls cracking and provides some reserve strength.
*   **Distribution Reinforcement:** Essential to prevent shrinkage cracks and hold the main reinforcement.
*   **Top Steel at Supports:** Two-way slabs will always have negative moments at supports, requiring reinforcement in the top face. This steel needs to be provided and curtailed correctly.
*   **Depth Estimation:** Use span-to-depth ratios from the code as a starting point for estimating the slab thickness.
*   **Load Factor:** Always use the factored load (typically $1.5$ times the total service load) for strength design.
*   **Steel Area Calculation:** Design the slab as a singly reinforced section for each direction using the calculated moments and the effective depth.
*   **Check against $M_{u,lim}$:** Ensure that the design moments do not exceed the limiting moment of resistance for the section, as this would require redesign or a richer mix.

---

This comprehensive set of notes covers the fundamental principles and practical application of designing two-way slabs using the coefficient method, as commonly encountered in structural engineering. Remember to always consult the latest version of the relevant design codes (like IS 456:2000) for precise coefficients and guidelines.
