---
title: "Deformation in axially loaded bars –uniform cross section, varying cross 
section, dissimilar materials, principle of superposition."
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Introduction to analysis of deformable bodies."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf1"
status: "completed"
scrapedAt: "2026-05-20T17:51:03.569Z"
---
# MECHANICS OF SOLIDS - MODULE 1: INTRODUCTION TO ANALYSIS OF DEFORMABLE BODIES

## TOPIC: DEFORMATION IN AXIALLY LOADED BARS

### LEARNING OUTCOMES:

Upon completion of this topic, you will be able to:

*   Calculate the deformation in axially loaded bars of uniform cross-section.
*   Determine the deformation in axially loaded bars with varying cross-sections.
*   Analyze the deformation in axially loaded bars made of dissimilar materials.
*   Apply the principle of superposition to solve problems involving deformation in axially loaded bars.

---

### 1. INTRODUCTION TO DEFORMABLE BODIES & AXIAL LOADING

**Definition:** A deformable body is a body that changes its shape or size when subjected to external forces or temperature changes. In contrast, rigid bodies are assumed not to deform.

**Axial Loading:** An axially loaded bar is subjected to a force acting along its longitudinal axis. This force can be either tensile (pulling apart) or compressive (pushing together).

**Key Concepts:**

*   **Stress ($\sigma$):** Force per unit area. For axial loading, $\sigma = P/A$, where P is the axial load and A is the cross-sectional area.
*   **Strain ($\epsilon$):** The deformation per unit length. For axial loading, $\epsilon = \delta / L$, where $\delta$ is the elongation or contraction and L is the original length.
*   **Modulus of Elasticity (E) / Young's Modulus:** A material property that relates stress and strain in the elastic region. It represents the stiffness of the material. $\sigma = E \epsilon$ (Hooke's Law).

**Reference Texts:**
*   **R.K. Bansal:** Introduces stress and strain as fundamental concepts in Chapter 2.
*   **S. S. Bhavikatti:** Covers axial loading and basic stress-strain relationship in Chapter 2.
*   **R. C. Hibbeler:** Defines stress and strain and establishes Hooke's Law in Chapter 3.

---

### 2. DEFORMATION IN AXIALLY LOADED BARS - UNIFORM CROSS SECTION

When an axially loaded bar has a uniform cross-section, the stress and strain are uniform throughout the bar, provided the load is applied axially and is not concentrated at an end.

**Derivation of Deformation ($\delta$):**

From Hooke's Law: $\sigma = E \epsilon$

Substitute $\sigma = P/A$ and $\epsilon = \delta/L$:
$P/A = E (\delta/L)$

Rearranging to find deformation ($\delta$):
$\delta = \frac{PL}{AE}$

Where:
*   $P$: Axial force (N)
*   $L$: Original length of the bar (m)
*   $A$: Cross-sectional area of the bar (m²)
*   $E$: Modulus of Elasticity of the material (Pa or N/m²)

**Important Points:**

*   This formula is valid only when the material is linearly elastic, the cross-section is uniform, and the loading is axial.
*   For tensile loads, $P$ is positive, and $\delta$ is an elongation (positive).
*   For compressive loads, $P$ is negative, and $\delta$ is a contraction (negative).

**Example 2.1:**
A steel rod of 20 mm diameter and 2 m length is subjected to an axial tensile load of 50 kN. Calculate the elongation of the rod. Take $E_{steel} = 200$ GPa.

**Solution:**
*   Diameter, $d = 20$ mm = $0.02$ m
*   Radius, $r = 10$ mm = $0.01$ m
*   Length, $L = 2$ m
*   Axial Force, $P = 50$ kN = $50 \times 10^3$ N
*   Modulus of Elasticity, $E = 200$ GPa = $200 \times 10^9$ Pa = $200 \times 10^9$ N/m²

Area, $A = \pi r^2 = \pi (0.01)^2 = \pi \times 10^{-4}$ m²

Elongation, $\delta = \frac{PL}{AE}$
$\delta = \frac{(50 \times 10^3 \, \text{N}) \times (2 \, \text{m})}{( \pi \times 10^{-4} \, \text{m}^2 ) \times (200 \times 10^9 \, \text{N/m}^2)}$
$\delta = \frac{100 \times 10^3}{2 \pi \times 10^5} \, \text{m}$
$\delta = \frac{1}{2 \pi \times 10^2} \, \text{m} \approx \frac{1}{628.3} \, \text{m} \approx 0.00159 \, \text{m} = 1.59$ mm

**Reference Texts:**
*   **Surendra Singh:** Provides detailed examples of deformation in uniform bars in Chapter 3.
*   **Rattan:** Explains the derivation and application of the deformation formula $\delta = PL/AE$ in Chapter 2.

---

### 3. DEFORMATION IN AXIALLY LOADED BARS - VARYING CROSS SECTION

When the cross-sectional area of an axially loaded bar varies along its length, the stress and strain are no longer uniform. We need to use integration to find the total deformation.

**Procedure:**

1.  **Divide the bar into infinitesimal segments:** Consider a small segment of length $dx$ at a distance $x$ from one end.
2.  **Determine the cross-sectional area at $x$, $A(x)$:** This will be a function of $x$.
3.  **Calculate the axial force $P$ at the section $x$:** If the load is applied at one end, the force might be constant throughout, or it might change if there are intermediate loads.
4.  **Determine the deformation of the infinitesimal segment ($d\delta$):**
    $d\delta = \frac{P \, dx}{A(x)E}$
5.  **Integrate to find the total deformation ($\delta$):**
    $\delta = \int_{0}^{L} d\delta = \int_{0}^{L} \frac{P \, dx}{A(x)E}$

**Assumption:** For simplicity, we often assume the material is homogeneous (E is constant) and the load P is constant along the length.

**Example 3.1: Conical Bar**
A solid cone of length $L$, base radius $R$, and made of a material with modulus $E$ is subjected to an axial tensile load $P$ at the base. Calculate its elongation.

**Solution:**
Let the origin be at the apex of the cone.
The radius at a distance $x$ from the apex is $r(x) = (R/L)x$.
The cross-sectional area at $x$ is $A(x) = \pi [r(x)]^2 = \pi \left(\frac{R}{L}x\right)^2 = \frac{\pi R^2}{L^2}x^2$.
The axial load $P$ is constant throughout the bar.

$d\delta = \frac{P \, dx}{A(x)E} = \frac{P \, dx}{\left(\frac{\pi R^2}{L^2}x^2\right)E}$

Total elongation, $\delta = \int_{0}^{L} \frac{PL^2}{E \pi R^2 x^2} \, dx$
$\delta = \frac{PL^2}{E \pi R^2} \int_{0}^{L} \frac{1}{x^2} \, dx$

**Wait! This integral is improper at the lower limit $x=0$. This suggests our assumption of apex at x=0 might be problematic for integration. Let's re-evaluate by taking the origin at the base.**

**Revised Solution (Origin at Base):**
Let the origin be at the base of the cone (where the load $P$ is applied).
The radius at a distance $x$ from the base is $r(x) = R(1 - x/L)$.
The cross-sectional area at $x$ is $A(x) = \pi [r(x)]^2 = \pi R^2 \left(1 - \frac{x}{L}\right)^2$.
The axial load $P$ is constant throughout the bar.

$d\delta = \frac{P \, dx}{A(x)E} = \frac{P \, dx}{\pi R^2 \left(1 - \frac{x}{L}\right)^2 E}$

Total elongation, $\delta = \int_{0}^{L} \frac{P}{E \pi R^2 \left(1 - \frac{x}{L}\right)^2} \, dx$

Let $u = 1 - x/L$. Then $du = -dx/L$, so $dx = -L \, du$.
When $x=0$, $u=1$. When $x=L$, $u=0$.

$\delta = \int_{1}^{0} \frac{P}{E \pi R^2 u^2} (-L \, du)$
$\delta = -\frac{PL}{E \pi R^2} \int_{1}^{0} \frac{1}{u^2} \, du$
$\delta = \frac{PL}{E \pi R^2} \int_{0}^{1} u^{-2} \, du$

**Still an issue with the integral at the upper limit!** Let's reconsider the standard approach for conical bars. Often, the formula is derived by considering the segment $dx$ at distance $x$ from the apex, and the load on this segment is the load acting on the larger area above it.

**Let's use the standard approach for a cone loaded at the base:**
Area at distance $x$ from apex: $A(x) = \pi (Rx/L)^2$.
The force $P$ is applied at the base (area $\pi R^2$).
The stress at section $x$ is $\sigma(x) = P / (\pi R^2)$. This is incorrect because the force distributed over the area changes.

**Correct approach for a cone loaded at the base:**
The force on a cross-section at distance $x$ from the apex is the total load acting on the area above it.
Let's consider the load $P$ applied at the base.
Area of cross-section at distance $x$ from apex: $A(x) = \pi (Rx/L)^2$.
The stress at this section is $\sigma(x) = P / A(x) = P / (\pi (Rx/L)^2)$. This is also problematic as the load $P$ is at the base.

**Let's assume the load P is applied to the entire base area.**
The stress at a section $x$ from the apex is given by the force $P$ distributed over the entire area $\pi R^2$. This assumption is **incorrect** if $P$ is a concentrated load.

**If P is a uniform stress applied to the base area A_base:**
The force acting on a cross-section at distance $x$ from the apex is the total force acting on the area between $x$ and $L$. This becomes complex.

**Let's stick to the simpler case where P is a concentrated axial force at the base and consider the stress $\sigma(x)$ at a section.**
The force acting on a cross-section at distance $x$ from the apex is not simply $P$.

**Revisit the original formulation with a focus on integration limits and function:**
Consider a small element of length $dx$ at a distance $x$ from the apex.
Area $A(x) = \pi (Rx/L)^2$.
The stress at this section is $\sigma(x) = P_{effective} / A(x)$.

**A more tractable example for varying cross-section: A bar with stepped cross-sections.**
Example: A bar consists of three segments:
Segment 1: Length $L_1$, Area $A_1$, Material $E_1$
Segment 2: Length $L_2$, Area $A_2$, Material $E_2$
Segment 3: Length $L_3$, Area $A_3$, Material $E_3$

If an axial load $P$ is applied, the total deformation is the sum of deformations in each segment:
$\delta_{total} = \delta_1 + \delta_2 + \delta_3$
$\delta_{total} = \frac{PL_1}{A_1E_1} + \frac{PL_2}{A_2E_2} + \frac{PL_3}{A_3E_3}$

This is valid if the force $P$ remains constant through all segments.

**Example 3.2 (Stepped Bar):**
A bar of length 2m consists of two parts. The first 1m is of 20mm diameter, and the next 1m is of 30mm diameter. It is subjected to an axial tensile load of 40 kN. Calculate the total elongation. Take $E = 200$ GPa.

**Solution:**
**Part 1:**
*   $L_1 = 1$ m
*   $d_1 = 20$ mm = $0.02$ m, $r_1 = 0.01$ m
*   $A_1 = \pi (0.01)^2 = \pi \times 10^{-4}$ m²
*   $\delta_1 = \frac{PL_1}{A_1E} = \frac{(40 \times 10^3 \, \text{N}) \times (1 \, \text{m})}{( \pi \times 10^{-4} \, \text{m}^2 ) \times (200 \times 10^9 \, \text{N/m}^2)} = \frac{40 \times 10^3}{2 \pi \times 10^5} = \frac{4}{2 \pi \times 10} = \frac{2}{10 \pi} \approx 0.0637$ m = 0.637 mm

**Part 2:**
*   $L_2 = 1$ m
*   $d_2 = 30$ mm = $0.03$ m, $r_2 = 0.015$ m
*   $A_2 = \pi (0.015)^2 = \pi \times 2.25 \times 10^{-4}$ m²
*   $\delta_2 = \frac{PL_2}{A_2E} = \frac{(40 \times 10^3 \, \text{N}) \times (1 \, \text{m})}{( \pi \times 2.25 \times 10^{-4} \, \text{m}^2 ) \times (200 \times 10^9 \, \text{N/m}^2)} = \frac{40 \times 10^3}{4.5 \pi \times 10^5} = \frac{4}{4.5 \pi \times 10} = \frac{4}{45 \pi} \approx 0.0283$ m = 0.283 mm

**Total Elongation:**
$\delta_{total} = \delta_1 + \delta_2 = 0.637 + 0.283 = 0.920$ mm

**Reference Texts:**
*   **Popov E:** Chapter 4 discusses stress distribution in bars with varying cross-sections and the use of integration.
*   **Beer & Johnston:** Section 3.4 deals with axially loaded members with varying cross-sections, emphasizing the integral approach.

---

### 4. DEFORMATION IN AXIALLY LOADED BARS - DISSIMILAR MATERIALS

When a bar is made of different materials bonded together (e.g., a composite bar), the deformation depends on the properties of each material and how they share the load.

**Key Concepts:**

*   **Composite Bar:** A bar made of two or more materials firmly bonded together so that they deform as a single unit.
*   **Modular Ratio ($m$):** The ratio of the Modulus of Elasticity of one material to that of another, $m = E_2 / E_1$.
*   **Equivalent Area:** To analyze composite bars, we can convert one material to an equivalent area of the other material using the modular ratio.

**Procedure for a bar made of two materials:**

Consider a composite bar of length $L$, made of material 1 (area $A_1$, $E_1$) and material 2 (area $A_2$, $E_2$), subjected to an axial load $P$.

1.  **Assumption:** The two materials deform by the same amount, i.e., $\delta_1 = \delta_2$.
2.  **Force Equilibrium:** $P = P_1 + P_2$, where $P_1$ is the force carried by material 1 and $P_2$ by material 2.
3.  **Deformation Equality:** $\frac{P_1 L}{A_1 E_1} = \frac{P_2 L}{A_2 E_2}$
    This implies $\frac{P_1}{A_1 E_1} = \frac{P_2}{A_2 E_2}$.
4.  **Using Modular Ratio:** Let $E_2/E_1 = m$.
    From deformation equality: $P_1 A_2 E_2 = P_2 A_1 E_1$
    $P_1 A_2 (m E_1) = P_2 A_1 E_1$
    $P_1 m A_2 = P_2 A_1$
    $P_1 = P_2 \frac{A_1}{m A_2}$

    Substitute this into the force equilibrium equation:
    $P = P_2 \frac{A_1}{m A_2} + P_2$
    $P = P_2 \left( \frac{A_1}{m A_2} + 1 \right) = P_2 \left( \frac{A_1 + m A_2}{m A_2} \right)$
    $P_2 = P \frac{m A_2}{A_1 + m A_2}$

    Similarly, we can find $P_1$:
    $P_1 = P - P_2 = P - P \frac{m A_2}{A_1 + m A_2} = P \left( 1 - \frac{m A_2}{A_1 + m A_2} \right)$
    $P_1 = P \left( \frac{A_1 + m A_2 - m A_2}{A_1 + m A_2} \right) = P \frac{A_1}{A_1 + m A_2}$

5.  **Calculate the total deformation:**
    $\delta = \frac{P_1 L}{A_1 E_1} = \frac{(P \frac{A_1}{A_1 + m A_2}) L}{A_1 E_1} = \frac{PL}{E_1 (A_1 + m A_2)}$

    Alternatively, using the concept of equivalent area. Convert material 2 to material 1.
    Equivalent area of material 2 in terms of material 1: $A_{eq1} = m A_2$.
    Total equivalent area: $A_{eq} = A_1 + A_{eq1} = A_1 + m A_2$.
    The deformation can be calculated as if it were a single bar of material 1 with area $A_{eq}$:
    $\delta = \frac{PL}{A_{eq} E_1} = \frac{PL}{(A_1 + m A_2) E_1}$

    Similarly, convert material 1 to material 2:
    Equivalent area of material 1 in terms of material 2: $A_{eq2} = A_1 / m$.
    Total equivalent area: $A_{eq}' = A_{eq2} + A_2 = A_1/m + A_2$.
    $\delta = \frac{PL}{A_{eq}' E_2} = \frac{PL}{(A_1/m + A_2) E_2} = \frac{PL}{(A_1 + m A_2) E_2 / m} = \frac{PmL}{(A_1 + m A_2) E_2}$. This matches the previous result by substituting $E_1 = E_2/m$.

**Example 4.1:**
A composite bar of length 1.5 m is made of a steel rod enclosed in a copper tube. The steel rod has a diameter of 20 mm, and the copper tube has an outer diameter of 30 mm and an inner diameter of 25 mm. The bar is subjected to an axial tensile load of 60 kN. Calculate the deformation of the composite bar.
Take $E_{steel} = 200$ GPa, $E_{copper} = 120$ GPa.

**Solution:**
*   Length, $L = 1.5$ m
*   Axial Load, $P = 60$ kN = $60 \times 10^3$ N

**Steel Rod:**
*   $d_{steel} = 20$ mm, $r_{steel} = 10$ mm = $0.01$ m
*   $A_{steel} = \pi r_{steel}^2 = \pi (0.01)^2 = \pi \times 10^{-4}$ m²
*   $E_{steel} = 200$ GPa

**Copper Tube:**
*   $d_{outer} = 30$ mm, $r_{outer} = 15$ mm = $0.015$ m
*   $d_{inner} = 25$ mm, $r_{inner} = 12.5$ mm = $0.0125$ m
*   $A_{copper} = \pi (r_{outer}^2 - r_{inner}^2) = \pi (0.015^2 - 0.0125^2)$
    $A_{copper} = \pi (0.000225 - 0.00015625) = \pi \times 0.00006875$ m² $\approx 2.16 \times 10^{-4}$ m²
*   $E_{copper} = 120$ GPa

**Modular Ratio (Steel to Copper):**
$m = E_{steel} / E_{copper} = 200 \text{ GPa} / 120 \text{ GPa} = 20/12 = 5/3 \approx 1.67$

**Using equivalent area concept (converting copper to steel):**
Equivalent area of copper in terms of steel:
$A_{eq, steel} = m \times A_{copper} = (5/3) \times (\pi \times 0.00006875)$ m²
$A_{eq, steel} \approx 1.67 \times 2.16 \times 10^{-4} \approx 3.60 \times 10^{-4}$ m²

Total equivalent area of steel:
$A_{eq, total} = A_{steel} + A_{eq, steel}$
$A_{eq, total} = (\pi \times 10^{-4}) + (5/3) \times (\pi \times 0.00006875)$
$A_{eq, total} = \pi \times 10^{-4} \times (1 + 5/3 \times 0.6875) \approx \pi \times 10^{-4} \times (1 + 1.146) \approx 2.146 \pi \times 10^{-4}$ m²
$A_{eq, total} \approx 6.74 \times 10^{-4}$ m²

**Deformation:**
$\delta = \frac{P L}{A_{eq, total} E_{steel}}$
$\delta = \frac{(60 \times 10^3 \, \text{N}) \times (1.5 \, \text{m})}{(\pi \times 10^{-4} + (5/3) \times (\pi \times 0.00006875)) \, \text{m}^2 \times (200 \times 10^9 \, \text{N/m}^2)}$
$\delta = \frac{90 \times 10^3}{\pi \times 10^{-4} (1 + 1.146) \times 200 \times 10^9} \, \text{m}$
$\delta = \frac{90 \times 10^3}{\pi \times 10^{-4} \times 2.146 \times 200 \times 10^9} \, \text{m}$
$\delta = \frac{90 \times 10^3}{0.4292 \pi \times 10^6} \, \text{m}$
$\delta = \frac{90}{4.292 \pi \times 10^3} \, \text{m} \approx \frac{90}{13483} \, \text{m} \approx 0.006675$ m = 6.675 mm

**Reference Texts:**
*   **S. S. Bhavikatti:** Chapter 3 covers composite bars and the use of modular ratio.
*   **Rattan:** Section 2.6 discusses stresses and strains in composite members, explaining the equivalent area method.

---

### 5. PRINCIPLE OF SUPERPOSITION

**Statement:** The principle of superposition states that for a linear elastic system, the effects (stresses, strains, deformations) caused by multiple loads acting simultaneously are equal to the sum of the effects caused by each load acting individually.

**Conditions for Application:**
*   The material must be linearly elastic (obeys Hooke's Law).
*   The deformations must be small, so that the application of subsequent loads is not significantly affected by the initial deformations.
*   Loads must not interact in a way that changes the material properties or the geometry significantly.

**Application in Axially Loaded Bars:**

This principle is useful when a bar is subjected to:
*   Multiple axial loads at different points.
*   Axial loads and thermal effects.

**Example 5.1: Bar with Multiple Loads**
A bar of uniform cross-section is subjected to axial tensile loads of $P_1$ at the free end and $P_2$ at a distance $L/2$ from the free end.

**Solution:**
We can analyze the deformation by considering the effect of each load separately.

**Effect of $P_1$ alone:**
*   The entire bar of length $L$ is subjected to $P_1$.
*   Deformation due to $P_1$: $\delta_{P1} = \frac{P_1 L}{AE}$

**Effect of $P_2$ alone:**
*   The segment of length $L/2$ (from the fixed end to the point where $P_2$ is applied) is subjected to a force $P_2$. The force in the remaining segment of length $L/2$ (from the point of application of $P_2$ to the free end) is $P_2$.
*   Deformation of the segment from the fixed end (length $L/2$): $\delta_{P2, \text{segment1}} = \frac{P_2 (L/2)}{AE}$
*   Deformation of the segment from the point of application of $P_2$ to the free end (length $L/2$): $\delta_{P2, \text{segment2}} = \frac{P_2 (L/2)}{AE}$
*   Total deformation due to $P_2$ acting alone: $\delta_{P2} = \delta_{P2, \text{segment1}} + \delta_{P2, \text{segment2}} = \frac{P_2 (L/2)}{AE} + \frac{P_2 (L/2)}{AE} = \frac{P_2 L}{AE}$

**Total Deformation by Superposition:**
$\delta_{total} = \delta_{P1} + \delta_{P2} = \frac{P_1 L}{AE} + \frac{P_2 L}{AE} = \frac{(P_1 + P_2)L}{AE}$

**Note:** In this simple case, the net force is $(P_1+P_2)$ and the calculation is the same as if a single force $(P_1+P_2)$ were applied at the free end. However, if the loads were in opposite directions or if there were intermediate supports, the superposition would be crucial.

**Example 5.2: Bar with Axial Load and Temperature Change**
A uniform bar of length $L$, area $A$, and Young's modulus $E$ is subjected to an axial tensile load $P$ and a temperature rise of $\Delta T$. The coefficient of thermal expansion is $\alpha$.

**Solution:**
1.  **Deformation due to axial load P:**
    $\delta_{load} = \frac{PL}{AE}$ (This is an elongation).

2.  **Deformation due to temperature rise $\Delta T$:**
    The temperature rise causes the bar to expand.
    $\delta_{temp} = \alpha L \Delta T$ (This is also an elongation).

3.  **Total Deformation by Superposition:**
    $\delta_{total} = \delta_{load} + \delta_{temp} = \frac{PL}{AE} + \alpha L \Delta T$

    If the bar is constrained at the ends, the total thermal expansion is prevented, resulting in a compressive stress. The deformation from the load is $\delta_{load} = PL/AE$. The thermal expansion would be $\delta_{temp} = \alpha L \Delta T$. If the ends are fixed, the net deformation must be zero. The thermal expansion creates a tendency for elongation, which is counteracted by a compressive stress.

    Let $\sigma_{thermal}$ be the thermal stress.
    $\delta_{thermal\_stress} = -\frac{\sigma_{thermal} L}{AE}$ (contraction)
    $\delta_{total} = \delta_{load} + \delta_{thermal\_stress} = 0$ (for fixed ends)
    $\frac{PL}{AE} - \frac{\sigma_{thermal} L}{AE} = 0 \implies \sigma_{thermal} = P/A$. This means the stress due to the applied load is still $P/A$, and the thermal expansion is fully constrained by an equal and opposite stress. This seems counter-intuitive.

    Let's rephrase for constrained bar:
    The applied load $P$ causes an elongation $\delta_P = PL/AE$.
    The temperature rise $\Delta T$ causes a free expansion $\delta_T = \alpha L \Delta T$.
    If the bar is fixed at both ends, this free expansion $\delta_T$ is resisted by the supports, inducing a compressive stress $\sigma_{th}$ and hence a contraction $\delta_{th\_stress} = -\sigma_{th} L / AE$.
    The net change in length must be zero: $\delta_P + \delta_{th\_stress} = 0$.
    $PL/AE - \sigma_{th} L/AE = 0 \implies \sigma_{th} = P/A$. This is still not right.

    **Correct approach for constrained bar with load and temp change:**
    Assume the load $P$ is applied first to a free bar, causing elongation $\delta_P = PL/AE$.
    Then, the bar is fixed at the ends, and the temperature rises by $\Delta T$.
    The free expansion due to temperature is $\delta_T = \alpha L \Delta T$.
    This expansion is prevented by the supports, so a compressive stress $\sigma_{comp}$ is developed, causing a contraction $\delta_{comp} = -\sigma_{comp} L/AE$.
    The total deformation is $\delta_{total} = \delta_P + \delta_{comp} = 0$.
    $PL/AE - \sigma_{comp} L/AE = 0$. This implies $\sigma_{comp} = P/A$. This is still not considering the thermal effect correctly.

    **Let's consider the effects on the same neutral axis and add them up.**
    1.  Effect of Load $P$:
        Stress $\sigma_P = P/A$.
        Strain $\epsilon_P = \sigma_P / E = P/(AE)$.
        Deformation $\delta_P = \epsilon_P L = PL/AE$.

    2.  Effect of Temperature Change $\Delta T$:
        Free expansion $\delta_T = \alpha L \Delta T$.
        This expansion is prevented by constraints, leading to a compressive stress.
        Let the induced compressive stress be $\sigma_{th}$.
        The resulting strain is $\epsilon_{th} = -\sigma_{th}/E$ (since it's compressive).
        The total strain from thermal effects (if constrained) is $\epsilon_{th\_total} = \epsilon_{free\_expansion} + \epsilon_{induced\_compression}$.
        $\epsilon_{free\_expansion} = \alpha \Delta T$.
        $\epsilon_{induced\_compression} = -\sigma_{th}/E$.
        Total strain from thermal effects = $\alpha \Delta T - \sigma_{th}/E$.
        For the bar to be constrained at the ends, the total strain must be zero.
        $\alpha \Delta T - \sigma_{th}/E = 0 \implies \sigma_{th} = \alpha \Delta T E$.

    3.  **Total Stress and Deformation:**
        Total stress $\sigma_{total} = \sigma_P - \sigma_{th} = P/A - \alpha \Delta T E$.
        Total strain $\epsilon_{total} = \epsilon_P + \epsilon_{th} = P/(AE) - \sigma_{th}/E = P/(AE) - (\alpha \Delta T E)/E = P/(AE) - \alpha \Delta T$.
        Total deformation $\delta_{total} = \epsilon_{total} L = (P/(AE) - \alpha \Delta T)L = PL/AE - \alpha L \Delta T$.

        This makes sense: the deformation due to the load is reduced by the amount the material tries to expand due to temperature. If the term $\alpha L \Delta T$ is greater than $PL/AE$, the bar would push against the constraints, leading to a compressive stress in the bar and a push on the supports.

**Reference Texts:**
*   **R.K. Bansal:** Chapter 2, Section 2.13 discusses the principle of superposition.
*   **R. C. Hibbeler:** Section 4.6 illustrates the application of superposition for problems involving thermal effects and multiple loads.

---

### 6. COURSE OUTCOME ALIGNMENT

This topic directly contributes to:

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3).**
    *   Calculating $\sigma = P/A$ for axial loads.
    *   Calculating $\epsilon = \delta/L$ for axial loads.
    *   Understanding thermal strain $\epsilon_{thermal} = \alpha \Delta T$.
    *   Applying these in composite bars and superposition.

---

### 7. IMPORTANT POINTS TO REMEMBER

*   **Hooke's Law:** $\sigma = E \epsilon$ is fundamental for elastic analysis.
*   **Deformation Formula:** $\delta = PL/AE$ for uniform bars.
*   **Varying Cross-section:** Requires integration: $\delta = \int (P/A(x)E) dx$.
*   **Composite Bars:** Use modular ratio ($m = E_2/E_1$) and equivalent areas.
    $\delta = PL / (A_1 E_1 + A_2 E_2)$ if converted to $A_{eq}$ of material 1.
    $P_1 = P \frac{A_1}{A_1 + m A_2}$ and $P_2 = P \frac{m A_2}{A_1 + m A_2}$.
*   **Superposition:** Valid for linear elastic systems with small deformations. Sum the effects of individual loads.
*   **Thermal Expansion:** $\delta_{thermal} = \alpha L \Delta T$. This causes strain $\epsilon_{thermal} = \alpha \Delta T$.
*   **Sign Convention:** Tensile load/elongation is usually positive; compressive load/contraction is negative.

---

### 8. PRACTICE QUESTIONS AND EXERCISES

**Question 1:**
A solid circular rod of 25 mm diameter and 1.2 m length is subjected to an axial compressive load of 75 kN. Calculate the deformation of the rod. Assume the material is steel with $E = 210$ GPa.

**Answer:**
$P = -75 \times 10^3$ N (compressive)
$d = 25$ mm = $0.025$ m, $r = 0.0125$ m
$A = \pi r^2 = \pi (0.0125)^2 \approx 4.909 \times 10^{-4}$ m²
$L = 1.2$ m
$E = 210 \times 10^9$ Pa

$\delta = \frac{PL}{AE} = \frac{(-75 \times 10^3 \, \text{N}) \times (1.2 \, \text{m})}{(4.909 \times 10^{-4} \, \text{m}^2) \times (210 \times 10^9 \, \text{N/m}^2)}$
$\delta = \frac{-90 \times 10^3}{1.031 \times 10^5} \, \text{m} \approx -0.000873$ m = -0.873 mm

The deformation is a contraction of 0.873 mm.

**Question 2:**
A bar is made up of three segments. The first segment is 1 m long with a 20 mm x 20 mm square cross-section. The second segment is 1.5 m long with a 30 mm diameter circular cross-section. The third segment is 1.2 m long with a 15 mm x 30 mm rectangular cross-section. The bar is subjected to an axial tensile load of 50 kN. Calculate the total elongation. Assume $E = 180$ GPa for all materials.

**Answer:**
*   **Segment 1:** $L_1 = 1$ m, $A_1 = 20 \times 20 = 400$ mm² = $400 \times 10^{-6}$ m²
    $\delta_1 = \frac{PL_1}{A_1E} = \frac{(50 \times 10^3 \, \text{N}) \times (1 \, \text{m})}{(400 \times 10^{-6} \, \text{m}^2) \times (180 \times 10^9 \, \text{N/m}^2)} = \frac{50 \times 10^3}{72 \times 10^3} = \frac{50}{72} \approx 0.694$ mm

*   **Segment 2:** $L_2 = 1.5$ m, $d_2 = 30$ mm, $r_2 = 15$ mm, $A_2 = \pi (15)^2 = 225\pi$ mm² $\approx 706.86$ mm² = $706.86 \times 10^{-6}$ m²
    $\delta_2 = \frac{PL_2}{A_2E} = \frac{(50 \times 10^3 \, \text{N}) \times (1.5 \, \text{m})}{(706.86 \times 10^{-6} \, \text{m}^2) \times (180 \times 10^9 \, \text{N/m}^2)} = \frac{75 \times 10^3}{127.24 \times 10^3} = \frac{75}{127.24} \approx 0.590$ mm

*   **Segment 3:** $L_3 = 1.2$ m, $A_3 = 15 \times 30 = 450$ mm² = $450 \times 10^{-6}$ m²
    $\delta_3 = \frac{PL_3}{A_3E} = \frac{(50 \times 10^3 \, \text{N}) \times (1.2 \, \text{m})}{(450 \times 10^{-6} \, \text{m}^2) \times (180 \times 10^9 \, \text{N/m}^2)} = \frac{60 \times 10^3}{81 \times 10^3} = \frac{60}{81} \approx 0.741$ mm

Total Elongation = $\delta_1 + \delta_2 + \delta_3 = 0.694 + 0.590 + 0.741 = 2.025$ mm.

**Question 3:**
A composite cylinder is formed by a steel tube of 50 mm outer diameter and 40 mm inner diameter shrunk onto a solid copper core of 40 mm diameter. The composite cylinder is 500 mm long. It is subjected to an axial tensile load of 80 kN. Calculate the deformation of the composite cylinder.
Take $E_{steel} = 200$ GPa and $E_{copper} = 120$ GPa.

**Answer:**
*   **Steel Tube:** $d_{out} = 50$ mm, $r_{out} = 25$ mm; $d_{in} = 40$ mm, $r_{in} = 20$ mm
    $A_{steel} = \pi (r_{out}^2 - r_{in}^2) = \pi (25^2 - 20^2) = \pi (625 - 400) = 225\pi$ mm² $\approx 706.86$ mm²

*   **Copper Core:** $d_{core} = 40$ mm, $r_{core} = 20$ mm
    $A_{copper} = \pi r_{core}^2 = \pi (20)^2 = 400\pi$ mm² $\approx 1256.64$ mm²

*   $L = 500$ mm = $0.5$ m
*   $P = 80$ kN = $80 \times 10^3$ N

*   Modular Ratio, $m = E_{steel}/E_{copper} = 200/120 = 5/3$.

*   **Convert copper to steel:**
    Equivalent Area of copper in terms of steel: $A_{eq, steel} = m \times A_{copper} = (5/3) \times (400\pi) = 2000\pi/3$ mm² $\approx 2094.4$ mm²
    Total equivalent area of steel: $A_{eq, total} = A_{steel} + A_{eq, steel} = 225\pi + 2000\pi/3 = (675\pi + 2000\pi)/3 = 2675\pi/3$ mm² $\approx 8860.2$ mm²
    $A_{eq, total} = (2675\pi/3) \times 10^{-6}$ m² $\approx 0.002785$ m²

*   **Deformation:**
    $\delta = \frac{PL}{A_{eq, total} E_{steel}}$
    $\delta = \frac{(80 \times 10^3 \, \text{N}) \times (0.5 \, \text{m})}{(2675\pi/3 \times 10^{-6} \, \text{m}^2) \times (200 \times 10^9 \, \text{N/m}^2)}$
    $\delta = \frac{40 \times 10^3}{535 \pi \times 10^3} = \frac{40}{535\pi} \approx \frac{40}{1680.6} \approx 0.0238$ m = 0.238 mm

**Question 4:**
A uniform bar of length 2 m is subjected to an axial tensile load $P = 100$ kN. The bar has a diameter of 20 mm and is made of Aluminium ($E = 70$ GPa, $\alpha = 23 \times 10^{-6} /^\circ\text{C}$). If the temperature of the bar increases by $40^\circ\text{C}$, calculate the total deformation of the bar.

**Answer:**
*   $L = 2$ m
*   $P = 100$ kN = $100 \times 10^3$ N
*   $d = 20$ mm = $0.02$ m, $r = 0.01$ m
*   $A = \pi r^2 = \pi (0.01)^2 = \pi \times 10^{-4}$ m²
*   $E = 70$ GPa = $70 \times 10^9$ Pa
*   $\Delta T = 40^\circ\text{C}$
*   $\alpha = 23 \times 10^{-6} /^\circ\text{C}$

*   **Deformation due to Load:**
    $\delta_{load} = \frac{PL}{AE} = \frac{(100 \times 10^3 \, \text{N}) \times (2 \, \text{m})}{(\pi \times 10^{-4} \, \text{m}^2) \times (70 \times 10^9 \, \text{N/m}^2)} = \frac{200 \times 10^3}{70 \pi \times 10^5} = \frac{2}{7 \pi \times 10^3} \approx 0.000091$ m = 0.091 mm

*   **Deformation due to Temperature Change:**
    $\delta_{temp} = \alpha L \Delta T = (23 \times 10^{-6} /^\circ\text{C}) \times (2 \, \text{m}) \times (40^\circ\text{C})$
    $\delta_{temp} = 23 \times 10^{-6} \times 80 = 1840 \times 10^{-6}$ m = 1.84 mm

*   **Total Deformation (Superposition):**
    $\delta_{total} = \delta_{load} + \delta_{temp} = 0.091 \, \text{mm} + 1.84 \, \text{mm} = 1.931$ mm

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
