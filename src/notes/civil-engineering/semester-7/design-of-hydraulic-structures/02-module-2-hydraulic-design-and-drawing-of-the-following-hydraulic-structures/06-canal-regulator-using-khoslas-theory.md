---
title: "Canal Regulator (Using Khosla’s Theory"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 2: Hydraulic design   and Drawing of the following hydraulic structures:"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811710"
status: "completed"
scrapedAt: "2026-05-20T18:57:50.170Z"
---
# Design of Hydraulic Structures: Module 2 - Canal Regulators (Using Khosla's Theory)

## Introduction to Canal Regulators

Canal regulators are essential hydraulic structures built across canals to control the flow of water for various purposes. They are typically constructed at:

*   **Canal Junctions:** To distribute water to different branches.
*   **Intersections with Natural Streams:** To prevent the entry of floodwater into the canal and to regulate the flow of canal water into the stream.
*   **Divergence Points:** To regulate flow into off-taking channels.

This module will focus on the hydraulic design and drawing of canal regulators, with a particular emphasis on applying **Khosla's Theory** for analyzing the hydraulic uplift pressures.

## Types of Canal Regulators

While the specific design considerations vary, common types of canal regulators include:

*   **Under-sluice Regulators:** Designed to pass accumulated silt and debris.
*   **Distributary Regulators:** To control flow into off-taking channels.
*   **Cross-drainage Regulators:** Used when a canal crosses a natural drainage.

For the purpose of this module, we will focus on the general principles applicable to most canal regulators, with a case study approach often involving an under-sluice regulator as it incorporates more complex hydraulic considerations.

## Hydraulic Design Principles

The hydraulic design of a canal regulator primarily involves determining:

1.  **The crest level of the regulator:** This dictates the water surface elevation in the upstream canal.
2.  **The size and number of openings (undersluices/gates):** These control the flow and are designed to pass the required discharge.
3.  **The design of the floor (impervious floor):** This is crucial to prevent excessive uplift pressures and piping/boiling phenomenon.
4.  **The upstream and downstream protection works:** Such as pitching, launching aprons, etc.

## Application of Khosla's Theory

Khosla's Theory is a fundamental tool for analyzing the seepage of water under hydraulic structures like weirs, barrages, and canal regulators. It helps in calculating the **uplift pressure** and **exit gradient**, which are critical for ensuring the structural stability of the floor.

### Key Concepts in Khosla's Theory

*   **Seepage:** The movement of water through the soil pores beneath and around a hydraulic structure.
*   **Uplift Pressure:** The upward hydrostatic pressure exerted by the seeping water on the floor of the structure. This pressure reduces the effective weight of the floor, potentially leading to flotation.
*   **Piping or Boiling Phenomenon:** Occurs when the upward hydrostatic pressure at the downstream end of the floor exceeds the submerged weight of the soil, causing the soil particles to be lifted and washed away, forming a "boil."
*   **Exit Gradient:** The hydraulic gradient at the downstream end of the impervious floor. A high exit gradient indicates a high velocity of seepage and a greater risk of piping.

### Principles of Khosla's Theory

Khosla's theory is based on the following principles:

1.  **Potential Theory:** The flow of water through the soil is governed by Laplace's equation, which describes irrotational and incompressible flow.
2.  **Separation of Variables:** The complex flow net under a hydraulic structure can be divided into simpler components.
3.  **Superposition:** The hydraulic head loss and equipotential lines for complex shapes can be obtained by superimposing the results of simpler shapes.
4.  **Irrotational Flow:** The flow is assumed to be irrotational, meaning the fluid does not rotate.
5.  **Incompressible Flow:** The fluid is assumed to be incompressible.
6.  **No Cross-Seepage:** Seepage occurs only in the longitudinal direction under the floor.
7.  **Constant Uplift along the Floor:** The uplift pressure varies linearly along the impervious floor.
8.  **Critical Gradient:** Khosla proposed a concept of critical gradient, which is the gradient at which the upward pressure of water equals the submerged weight of the soil. The actual exit gradient must be less than this critical gradient.

### Calculating Uplift Pressure and Exit Gradient

Khosla's theory uses the concept of **Form Factors (F)** and **Correction Coefficients (CI, CII, CIII)** to account for the geometry of the hydraulic structure and the soil.

**Basic Principles for Floor Design:**

*   **Total Head Loss:** The total head loss due to seepage is equal to the difference in water levels between the upstream and downstream of the structure.
*   **Hydraulic Gradient:** The hydraulic gradient at any point is the head loss per unit length in the direction of flow.
*   **Uplift Pressure:** The uplift pressure at any point is the product of the hydraulic gradient at that point and the depth of the water above it.

**Khosla's Method for a Simple Floor (No Intermediate Piles):**

For a simple floor of length 'L' with upstream water depth 'h', the uplift pressure at the upstream end is 'h', and at the downstream end of the floor (assuming no downstream cutoff), it is zero. The pressure distribution is assumed to be linear.

**With a Downstream Cutoff (Pile) of depth 'd':**

The presence of a downstream cutoff pile modifies the flow pattern and reduces the uplift pressure at the downstream end of the floor. Khosla's theory provides a way to calculate the uplift pressure at the downstream end of the floor using the concept of **form factors**.

The head loss through a simple floor without a downstream cutoff is assumed to be directly proportional to the length of the floor. However, with a downstream cutoff, the flow lines curve upwards towards the pile.

**Key Formulae and Concepts:**

*   **Head Loss (h):** Upstream water level - Downstream water level.
*   **Form Factor (F):** Represents the ratio of the hydraulic head loss through the structure to the total head loss. It is a function of the relative depths of the upstream and downstream cutoff piles and the length of the floor.
*   **Exit Gradient (G_e):**
    $G_e = \frac{h}{d \times \text{Form Factor}}$
    where 'h' is the head difference and 'd' is the depth of the downstream pile.
*   **Correction Coefficients:**
    *   **C_I (Correction for Intermediate Piles):** Accounts for the effect of intermediate piles on the uplift pressure.
    *   **C_II (Correction for Slope of the Hydraulic Gradient):** Accounts for the fact that the hydraulic gradient is not uniform along the floor.
    *   **C_III (Correction for the Interference of Side Walls):** Accounts for the effect of side walls, which can reduce seepage.

**Simplified Approach for Canal Regulators (Focus on the Floor):**

For the purpose of this module, we will primarily focus on the design of the impervious floor of a canal regulator, especially the uplift pressures and exit gradient.

**Steps for Design using Khosla's Theory (Simplified for Regulator Floor):**

1.  **Determine the hydraulic head (h):** This is the difference between the upstream and downstream water levels.
2.  **Determine the length of the impervious floor (L):** This is typically based on considerations to keep the exit gradient within safe limits.
3.  **Determine the depth of the downstream cutoff (d):** This is a design parameter to reduce uplift and prevent piping.
4.  **Calculate the Form Factor (F):** This is the most complex part and involves using graphs, tables, or software based on the geometry of the floor and cutoff piles. For simpler cases, we can refer to standard charts provided by Khosla.
    *   **Key Ratios for Form Factors:**
        *   $\frac{L}{d}$ (Length of floor to depth of downstream pile)
        *   $\frac{d_u}{d}$ (Depth of upstream pile to depth of downstream pile) - If an upstream pile is present.
5.  **Calculate the uplift pressure at the downstream end of the floor:**
    Uplift Pressure = $h \times F$ (for a simple floor with a downstream pile).
    In reality, the uplift pressure distribution is complex. Khosla's theory allows for the calculation of uplift at various points. For practical design, the maximum uplift pressure is critical.
6.  **Calculate the Exit Gradient (G_e):**
    $G_e = \frac{h}{d \times F}$
7.  **Check for Piping/Boiling:**
    Compare the calculated exit gradient ($G_e$) with the critical exit gradient ($G_c$) for the given soil.
    *   **Critical Exit Gradient ($G_c$):** $G_c = \frac{G_{sub}}{\text{Factor of Safety}}$
        where $G_{sub}$ is the submerged specific gravity of the soil.
        $G_{sub} = \frac{G_s - 1}{1 + e}$
        where $G_s$ is the specific gravity of soil solids and 'e' is the void ratio.
        Typical values of $G_c$ for different soils:
        *   Coarse sand and gravel: 1/4 to 1/5
        *   Sand: 1/6 to 1/7
        *   Silt and fine sand: 1/8 to 1/9
        *   Clay: 1/10 to 1/20
    *   **Safety Condition:** $G_e < G_c$

8.  **Design the Floor Thickness:** The thickness of the concrete floor must be sufficient to withstand the net downward force due to the self-weight of the concrete minus the uplift pressure.
    Net Downward Force per unit area = (Thickness of floor * Unit weight of concrete) - (Uplift Pressure * Unit weight of water)
    A factor of safety is applied to ensure stability against flotation.
    Thickness of floor $\times \gamma_c \times \text{FOS} \ge \text{Uplift Pressure} \times \gamma_w$
    where $\gamma_c$ is the unit weight of concrete, $\gamma_w$ is the unit weight of water, and FOS is the factor of safety (typically 1.5 to 1.75).

9.  **Consider Intermediate Piles and Side Walls:** If intermediate piles or side walls are present, correction coefficients ($C_I$, $C_{II}$, $C_{III}$) are applied to refine the uplift pressure calculations.
    *   **Corrected Uplift Pressure:** This involves using the form factor in conjunction with these correction factors. The actual calculation can become quite involved and often requires specialized software or detailed charts. For a simplified understanding, the initial calculation without corrections provides a good approximation.

## Drawing Aspects of Canal Regulators

The drawing of a canal regulator involves presenting all essential structural and hydraulic features. Key elements to be shown include:

*   **Plan:** Showing the layout of the regulator, its components, the canal banks, and any off-taking channels.
*   **Longitudinal Section:** Illustrating the bed level, water levels (upstream and downstream), crest level of the regulator, floor profile, cutoff piles, and gate dimensions.
*   **Cross-Sections:** Showing the canal and regulator profile at various critical points, including the width of the regulator, thickness of the floor, depth of piles, and wing walls.
*   **Details of Gates:** Mechanisms for operating the gates (e.g., radial gates, sluice gates).
*   **Protection Works:** Details of upstream pitching, downstream launching aprons, and guide banks.
*   **Dimensions and Levels:** All critical dimensions, levels, and slopes must be clearly indicated.

## Example Scenario (Simplified)

**Problem:** Design the impervious floor of a canal regulator with the following specifications:

*   Upstream water level (UWRL): +150.00 m
*   Downstream water level (DWRL): +148.00 m
*   Depth of downstream pile (d): 4.0 m
*   Length of impervious floor (L): 20.0 m
*   Soil properties: Sand with a critical exit gradient ($G_c$) of 1/6.
*   Unit weight of concrete ($\gamma_c$): 24 kN/m³
*   Unit weight of water ($\gamma_w$): 9.81 kN/m³
*   Factor of safety for flotation: 1.75

**Solution:**

1.  **Hydraulic Head (h):**
    $h = UWRL - DWRL = 150.00 - 148.00 = 2.0$ m

2.  **Calculate Form Factor (F):**
    We need to find the Form Factor for a floor with length L = 20 m and downstream pile depth d = 4 m.
    The ratio $\frac{L}{d} = \frac{20}{4} = 5$.
    Using Khosla's charts or interpolation from tables (which are typically provided in textbooks for this purpose), for $\frac{L}{d} = 5$, the Form Factor (F) is approximately **0.73**.

3.  **Calculate Uplift Pressure at the downstream end of the floor:**
    Uplift Pressure = $h \times F = 2.0 \times 0.73 = 1.46$ m of water column.
    This is the pressure at the downstream end of the floor, just above the pile.

4.  **Calculate Exit Gradient (G_e):**
    $G_e = \frac{h}{d \times F} = \frac{2.0}{4.0 \times 0.73} = \frac{2.0}{2.92} \approx 0.685$

5.  **Check for Piping:**
    The given critical exit gradient ($G_c$) is 1/6 ≈ 0.167.
    Our calculated exit gradient ($G_e$) = 0.685.
    **Issue:** The calculated exit gradient (0.685) is much higher than the critical exit gradient (0.167). This indicates that the current design is unsafe and susceptible to piping.

6.  **Redesign to satisfy the exit gradient condition:**
    To reduce the exit gradient, we need to increase either the length of the floor (L) or the depth of the downstream pile (d). Increasing 'd' is generally more effective.

    Let's assume we increase the depth of the downstream pile to 'd_new' such that $G_e \le G_c$.
    We want: $\frac{h}{d_{new} \times F_{new}} \le \frac{1}{6}$

    If we keep L = 20m, the form factor $F_{new}$ will change with $d_{new}$. This is an iterative process. A simpler approach is to assume a longer floor length for a given 'd'.

    **Alternative Strategy: Increase Floor Length (L)**
    Let's assume we want to maintain d = 4m and check the required L.
    We need $\frac{2.0}{4.0 \times F} \le \frac{1}{6}$
    $F \ge \frac{2.0 \times 6}{4.0} = 3$
    Looking at Khosla's charts, a Form Factor of 3 is achieved for very large L/d ratios. This suggests that just increasing L might not be feasible without a very long floor.

    **Strategy: Increase Downstream Pile Depth (d)**
    Let's aim for $G_e = 1/6$.
    We need $\frac{2.0}{d_{new} \times F_{new}} = \frac{1}{6}$
    $d_{new} \times F_{new} = 12$

    If we try a larger 'd', say $d_{new} = 8$ m.
    The ratio $\frac{L}{d_{new}} = \frac{20}{8} = 2.5$.
    From charts, for L/d = 2.5, F ≈ 0.83.
    $d_{new} \times F_{new} = 8 \times 0.83 = 6.64$. Still less than 12.

    Let's try $d_{new} = 12$ m.
    The ratio $\frac{L}{d_{new}} = \frac{20}{12} \approx 1.67$.
    From charts, for L/d = 1.67, F ≈ 0.90.
    $d_{new} \times F_{new} = 12 \times 0.90 = 10.8$. Still less than 12.

    This indicates that increasing the pile depth significantly is required. Alternatively, one might need to increase both L and d or introduce an upstream pile. For practical design, a minimum length of floor is often provided, and then the depth of the pile is adjusted.

    **Let's reconsider the initial design and assume we need to increase L to satisfy the exit gradient.**
    If we want $G_e \le 1/6$ with d = 4m, we need $F \ge 3$. This is impractical with L = 20m.

    **Let's assume a more realistic design requirement:**
    Let the maximum allowable exit gradient be $G_e = 1/5$ (for coarser soil).
    We need $\frac{2.0}{4.0 \times F} \le \frac{1}{5}$
    $F \ge \frac{2.0 \times 5}{4.0} = 2.5$
    With L/d = 5, F = 0.73. This is still not met.

    **Let's assume the required L/d ratio for F=2.5 is around 10.**
    If d = 4m, then L would need to be $10 \times 4 = 40$ m.
    If L = 40m and d = 4m, then L/d = 10, F ≈ 0.65 (from charts, F decreases with increasing L/d).
    $G_e = \frac{2.0}{4.0 \times 0.65} = \frac{2.0}{2.6} \approx 0.77$. This is still too high.

    **Conclusion from Example:** The initial design parameters (L=20m, d=4m) are insufficient to meet the safe exit gradient for sand (1/6). A significant increase in either L or d, or both, would be required. This highlights the importance of preliminary calculations and checking safety criteria.

    **Let's proceed assuming a safe design is achieved and calculate floor thickness.**
    Assume a safe design is achieved with a maximum uplift pressure at the downstream end of the floor of $P_{uplift}$ (this would be calculated after finding safe L and d). Let's assume, for demonstration, that after redesign, the maximum uplift pressure at the downstream end of the floor is found to be $P_{uplift} = 1.5$ m of water column.

7.  **Calculate the required thickness of the concrete floor for flotation:**
    Uplift Pressure (in head of concrete) = $P_{uplift} \times \frac{\gamma_w}{\gamma_c}$
    Uplift Pressure (in head of concrete) = $1.5 \times \frac{9.81}{24} \approx 0.613$ m

    Let 't' be the thickness of the floor.
    To prevent flotation, the self-weight of the floor must be greater than the uplift pressure by a factor of safety.
    $t \times \gamma_c \times \text{FOS} \ge P_{uplift} \times \gamma_w$
    $t \times 24 \times 1.75 \ge (1.5 \times 9.81)$ kN/m²
    $t \times 42 \ge 14.715$
    $t \ge \frac{14.715}{42} \approx 0.35$ m

    So, the thickness of the concrete floor should be at least 0.35 m. In practice, a thicker floor would be provided for structural integrity and to resist bending moments.

## Practice Questions

1.  **Define:**
    a) Seepage
    b) Uplift pressure
    c) Exit gradient
    d) Piping phenomenon

2.  What are the fundamental principles of Khosla's Theory?

3.  A canal regulator has an upstream water level of +200.00 m and a downstream water level of +198.50 m. The impervious floor has a length of 15 m and is provided with a downstream pile of 3 m depth. The soil is sand with a critical exit gradient of 1/6. Calculate the exit gradient and determine if the design is safe against piping.

4.  Explain the role of a downstream cutoff pile in reducing uplift pressure.

5.  If the uplift pressure at a point on the floor of a regulator is calculated to be 3 m of water, and the floor is made of concrete (unit weight 24 kN/m³), what minimum thickness is required to prevent flotation with a factor of safety of 1.75 against uplift? (Assume uplift pressure is acting on the entire base of the floor).

## Answers to Practice Questions

1.  **Definitions:**
    a) **Seepage:** The slow movement of water through the porous media (soil) beneath and around hydraulic structures.
    b) **Uplift pressure:** The upward hydrostatic pressure exerted by the seeping water on the base of a hydraulic structure, reducing its effective weight.
    c) **Exit gradient:** The hydraulic gradient at the downstream end of the impervious floor, indicating the velocity of seepage as it emerges from the soil.
    d) **Piping phenomenon:** The destructive process where seepage water, at a high exit gradient, lifts and washes away soil particles, creating a tunnel-like passage (a "boil") at the downstream edge of the floor.

2.  **Fundamental Principles of Khosla's Theory:**
    *   Based on potential theory and governed by Laplace's equation.
    *   Uses the concept of separating the complex flow net into simpler components.
    *   Employs superposition to analyze complex geometries.
    *   Assumes irrotational and incompressible flow.
    *   Considers no cross-seepage.
    *   Assumes linear uplift pressure distribution along the floor.
    *   Introduces the concept of critical gradient to prevent piping.
    *   Uses form factors and correction coefficients to account for geometric complexities.

3.  **Calculations:**
    *   Hydraulic Head (h) = 200.00 - 198.50 = 1.50 m
    *   Length of floor (L) = 15 m
    *   Depth of downstream pile (d) = 3 m
    *   Ratio L/d = 15/3 = 5
    *   From Khosla's charts, for L/d = 5, Form Factor (F) ≈ 0.73
    *   Exit Gradient ($G_e$) = $h / (d \times F) = 1.50 / (3 \times 0.73) = 1.50 / 2.19 \approx 0.685$
    *   Critical Exit Gradient ($G_c$) = 1/6 ≈ 0.167
    *   **Conclusion:** Since $G_e$ (0.685) > $G_c$ (0.167), the design is **unsafe** against piping.

4.  **Role of Downstream Cutoff Pile:**
    A downstream cutoff pile, by extending the impervious length of the floor downwards, forces the seepage lines to travel a longer path before emerging at the downstream end. This significantly curves the flow lines and reduces the hydraulic gradient at the downstream edge, thereby lowering the exit gradient and preventing piping. It also helps to reduce the uplift pressure on the floor.

5.  **Minimum Floor Thickness:**
    *   Uplift pressure = 3 m of water column.
    *   Unit weight of water ($\gamma_w$) = 9.81 kN/m³
    *   Unit weight of concrete ($\gamma_c$) = 24 kN/m³
    *   Factor of Safety (FOS) = 1.75

    Uplift force per unit area = $3 \times 9.81 = 29.43$ kN/m²

    For stability against flotation, the upward force (uplift) must be counteracted by the downward force (self-weight of the floor) with a factor of safety.
    Let 't' be the thickness of the floor.
    Downward force per unit area = $t \times \gamma_c \times \text{FOS}$
    $t \times 24 \times 1.75 \ge 29.43$
    $t \times 42 \ge 29.43$
    $t \ge \frac{29.43}{42} \approx 0.70$ m

    Therefore, the minimum thickness of the concrete floor required is **0.70 m**.

---

## Important Points to Remember:

*   **Khosla's Theory is crucial for analyzing seepage and preventing piping.** Always check the exit gradient.
*   **The Form Factor (F) is central to Khosla's calculations.** Understand how it's derived from the geometry (L/d ratios).
*   **Increasing the depth of the downstream pile (d) is generally more effective than increasing the floor length (L) in reducing the exit gradient.**
*   **Floor thickness must be designed to resist uplift pressure with a sufficient factor of safety.**
*   **Drawing of hydraulic structures requires clear depiction of all hydraulic and structural components.**
*   **The design process is iterative.** Initial calculations might show unsafe conditions, requiring adjustments to dimensions (L, d, thickness).
*   **Real-world designs often involve intermediate piles and side walls, requiring correction factors (CI, CII, CIII) for more accurate analysis.** These are usually handled by software or detailed tabulated data.
*   **Always refer to standard textbooks and design codes for detailed charts, tables, and specific design guidelines.**
