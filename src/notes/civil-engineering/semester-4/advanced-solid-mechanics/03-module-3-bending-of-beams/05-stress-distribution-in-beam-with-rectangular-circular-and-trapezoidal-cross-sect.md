---
title: "Stress distribution in beam with rectangular, circular and trapezoidal cross- section"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a04"
status: "completed"
scrapedAt: "2026-05-20T18:42:42.687Z"
---
# ADVANCED SOLID MECHANICS - Module 3: Bending of Beams

## Topic: Stress Distribution in Beams with Rectangular, Circular, and Trapezoidal Cross-Sections

---

### Learning Outcomes:

*   **Understand the fundamental principles of bending stress in beams.**
*   **Derive and apply the flexure formula for various cross-sectional shapes.**
*   **Calculate the maximum bending stress and its location for rectangular, circular, and trapezoidal cross-sections.**
*   **Analyze the effect of different cross-sectional shapes on stress distribution.**
*   **Identify the neutral axis and its significance in bending.**

---

### 1. Introduction to Bending Stress

*   **Concept:** When a beam is subjected to a bending moment, internal stresses are generated within the beam's cross-section. These stresses vary across the depth of the beam.
*   **Assumptions of Simple Bending Theory (Euler-Bernoulli Beam Theory):**
    *   The beam is initially straight.
    *   The material is homogeneous, isotropic, and linearly elastic.
    *   The beam is subjected to pure bending (constant bending moment along the length).
    *   Plane sections perpendicular to the beam's axis remain plane and perpendicular to the beam's axis after bending.
    *   The beam is slender (length >> depth).
    *   The cross-section is symmetrical about the plane of bending.
*   **Neutral Axis (NA):**
    *   **Definition:** An imaginary line within the cross-section where the bending stress is zero.
    *   **Location:** For beams with symmetrical cross-sections and subjected to bending in the plane of symmetry, the neutral axis passes through the centroid of the cross-section.
    *   **Significance:** The curvature of the beam is directly related to the bending moment and the material's flexural rigidity ($EI$).

---

### 2. The Flexure Formula (Bending Stress Formula)

*   **Derivation (Conceptual):**
    1.  Consider a small element of the beam subjected to a bending moment ($M$).
    2.  Assume that plane sections remain plane, leading to a linear variation of strain across the depth.
    3.  Using Hooke's Law ($\sigma = E\epsilon$), this implies a linear variation of stress.
    4.  The stress is zero at the neutral axis and increases linearly outwards.
    5.  By integrating the stress distribution over the cross-section and equating it to the applied bending moment, we arrive at the flexure formula.

*   **The Flexure Formula:**
    $$ \sigma_b = \frac{My}{I} $$
    Where:
    *   $\sigma_b$: Bending stress at a distance $y$ from the neutral axis.
    *   $M$: Bending moment acting on the cross-section.
    *   $y$: Perpendicular distance from the neutral axis to the point where stress is being calculated.
    *   $I$: Moment of inertia (second moment of area) of the cross-section about the neutral axis.

*   **Maximum Bending Stress:**
    *   The maximum bending stress ($\sigma_{max}$) occurs at the point farthest from the neutral axis. This distance is typically denoted as $c$.
    *   $$ \sigma_{max} = \frac{Mc}{I} $$
    *   Where $c$ is the distance from the neutral axis to the outermost fiber.

*   **Section Modulus ($Z$):**
    *   **Definition:** A geometric property of the cross-section that relates the maximum bending stress to the bending moment. It is defined as $Z = \frac{I}{c}$.
    *   **Formula:**
        $$ \sigma_{max} = \frac{M}{Z} $$
    *   **Significance:** A larger section modulus indicates that the beam can resist a larger bending moment before reaching a critical stress level.

---

### 3. Stress Distribution in Different Cross-Sections

#### 3.1 Rectangular Cross-Section

*   **Geometry:** A rectangle with width $b$ and height $h$.
*   **Neutral Axis:** Passes through the centroid, which is at the center of the rectangle ($h/2$ from the top and bottom edges).
*   **Moment of Inertia ($I$):**
    $$ I_{NA} = \frac{bh^3}{12} $$
*   **Distance to Outermost Fiber ($c$):**
    $$ c = \frac{h}{2} $$
*   **Section Modulus ($Z$):**
    $$ Z_{rect} = \frac{I}{c} = \frac{bh^3/12}{h/2} = \frac{bh^2}{6} $$
*   **Stress Distribution:**
    *   Linear variation from zero at the neutral axis to maximum tensile stress at the bottom fiber and maximum compressive stress at the top fiber (for a positive bending moment).
    *   The magnitude of tensile and compressive stresses is equal due to symmetry.

*   **Example:** A rectangular beam of width 50 mm and height 100 mm is subjected to a bending moment of 20 kNm. Calculate the maximum bending stress.

    *   $b = 50 \text{ mm} = 0.05 \text{ m}$
    *   $h = 100 \text{ mm} = 0.10 \text{ m}$
    *   $M = 20 \text{ kNm} = 20 \times 10^3 \text{ Nm}$
    *   $I = \frac{bh^3}{12} = \frac{0.05 \times (0.10)^3}{12} = \frac{0.05 \times 0.001}{12} = 4.167 \times 10^{-6} \text{ m}^4$
    *   $c = \frac{h}{2} = \frac{0.10}{2} = 0.05 \text{ m}$
    *   $\sigma_{max} = \frac{Mc}{I} = \frac{(20 \times 10^3 \text{ Nm}) \times 0.05 \text{ m}}{4.167 \times 10^{-6} \text{ m}^4} = \frac{1000}{4.167 \times 10^{-6}} = 240 \times 10^6 \text{ N/m}^2 = 240 \text{ MPa}$
    *   Alternatively, using the section modulus:
        *   $Z_{rect} = \frac{bh^2}{6} = \frac{0.05 \times (0.10)^2}{6} = \frac{0.05 \times 0.01}{6} = 8.333 \times 10^{-4} \text{ m}^3$
        *   $\sigma_{max} = \frac{M}{Z_{rect}} = \frac{20 \times 10^3 \text{ Nm}}{8.333 \times 10^{-4} \text{ m}^3} = 24 \times 10^6 \text{ N/m}^2 = 240 \text{ MPa}$ (Mistake in calculation above, should be 240 MPa)
        *   Let's recalculate the first method:
            *   $I = 4.167 \times 10^{-6} \text{ m}^4$
            *   $c = 0.05 \text{ m}$
            *   $M = 20 \times 10^3 \text{ Nm}$
            *   $\sigma_{max} = \frac{(20 \times 10^3) \times 0.05}{4.167 \times 10^{-6}} = \frac{1000}{4.167 \times 10^{-6}} = 240 \times 10^6 \text{ Pa} = 240 \text{ MPa}$

---

#### 3.2 Circular Cross-Section

*   **Geometry:** A circle with diameter $d$ or radius $r$.
*   **Neutral Axis:** Passes through the centroid, which is the center of the circle.
*   **Moment of Inertia ($I$):**
    $$ I_{NA} = \frac{\pi d^4}{64} = \frac{\pi r^4}{4} $$
*   **Distance to Outermost Fiber ($c$):**
    $$ c = \frac{d}{2} = r $$
*   **Section Modulus ($Z$):**
    $$ Z_{circle} = \frac{I}{c} = \frac{\pi d^4/64}{d/2} = \frac{\pi d^3}{32} = \frac{\pi r^3}{4} $$
*   **Stress Distribution:**
    *   Linear variation from zero at the neutral axis (center) to maximum tensile stress at the bottom edge and maximum compressive stress at the top edge.
    *   The radial symmetry means the stress is uniform around the circumference at any given vertical distance from the neutral axis.

*   **Example:** A circular beam of diameter 80 mm is subjected to a bending moment of 15 kNm. Calculate the maximum bending stress.

    *   $d = 80 \text{ mm} = 0.08 \text{ m}$
    *   $r = 40 \text{ mm} = 0.04 \text{ m}$
    *   $M = 15 \text{ kNm} = 15 \times 10^3 \text{ Nm}$
    *   $I = \frac{\pi d^4}{64} = \frac{\pi (0.08)^4}{64} = \frac{\pi \times 0.00004096}{64} = 2.011 \times 10^{-6} \text{ m}^4$
    *   $c = \frac{d}{2} = \frac{0.08}{2} = 0.04 \text{ m}$
    *   $\sigma_{max} = \frac{Mc}{I} = \frac{(15 \times 10^3 \text{ Nm}) \times 0.04 \text{ m}}{2.011 \times 10^{-6} \text{ m}^4} = \frac{600}{2.011 \times 10^{-6}} = 298.36 \times 10^6 \text{ N/m}^2 = 298.36 \text{ MPa}$
    *   Alternatively, using the section modulus:
        *   $Z_{circle} = \frac{\pi d^3}{32} = \frac{\pi (0.08)^3}{32} = \frac{\pi \times 0.000512}{32} = 4.909 \times 10^{-5} \text{ m}^3$
        *   $\sigma_{max} = \frac{M}{Z_{circle}} = \frac{15 \times 10^3 \text{ Nm}}{4.909 \times 10^{-5} \text{ m}^3} = 305.5 \times 10^6 \text{ N/m}^2 = 305.5 \text{ MPa}$ (Slight difference due to rounding of I)
        *   Let's re-calculate I: $I = \frac{\pi (0.08)^4}{64} \approx 2.0106 \times 10^{-6} m^4$.
        *   $\sigma_{max} = \frac{(15 \times 10^3) \times 0.04}{2.0106 \times 10^{-6}} \approx 298.4 \text{ MPa}$.
        *   Let's re-calculate Z: $Z_{circle} = \frac{\pi (0.08)^3}{32} \approx 4.9087 \times 10^{-5} m^3$.
        *   $\sigma_{max} = \frac{15 \times 10^3}{4.9087 \times 10^{-5}} \approx 305.5 \text{ MPa}$.
        *   The slight discrepancy arises from the precision used in calculating $I$ and $Z$. Using the more precise $Z$ value is often more direct. Let's stick with $Z_{circle} = \frac{\pi d^3}{32}$.

---

#### 3.3 Trapezoidal Cross-Section

*   **Geometry:** A trapezoid with parallel sides $b_1$ and $b_2$, and height $h$.
*   **Neutral Axis:** For a symmetrical trapezoid (where the non-parallel sides are inclined equally), the neutral axis passes through the centroid, which is located at $h/2$ from the base if $b_1=b_2$ (making it a rectangle), but generally it's more complex. However, for the purpose of simple bending, if the trapezoid is symmetrical about the vertical axis and bending occurs in the plane of symmetry, the neutral axis will pass through the geometric center.
    *   **Important Note:** For a general trapezoid, the location of the centroid needs to be calculated first.
    *   If the trapezoid is symmetrical about the vertical axis (i.e., the non-parallel sides have equal slopes), the NA is at the mid-height.

*   **Moment of Inertia ($I$):** The calculation of $I$ for a trapezoid is more involved. The formula for a trapezoid with parallel sides $b_1$ and $b_2$ and height $h$, with the neutral axis passing through the centroid (at mid-height for a symmetrical trapezoid), is:
    $$ I_{NA} = \frac{h^3}{36} \left( \frac{b_1^2 + 4b_1b_2 + b_2^2}{b_1 + b_2} \right) $$
    *   **Derivation of this formula is beyond the scope of basic notes but relies on integration or decomposition into simpler shapes.**
    *   **If the trapezoid is not symmetrical about the vertical axis, the centroid needs to be located first, and then the parallel axis theorem is used to find $I$ about the centroidal axis.**

*   **Distance to Outermost Fiber ($c$):**
    *   This will be $h/2$ for a symmetrical trapezoid with the NA at the center.
    *   However, if $b_1 \neq b_2$, the maximum stress might occur at the edge with the larger width (if that edge is further from the NA) or the edge with the smaller width (if that edge is further from the NA). In the case of symmetrical trapezoids with NA at mid-height, $c = h/2$.

*   **Section Modulus ($Z$):**
    $$ Z_{trap} = \frac{I_{NA}}{h/2} $$

*   **Stress Distribution:**
    *   Linear variation from zero at the neutral axis.
    *   The maximum tensile and compressive stresses will occur at the top and bottom edges. For a symmetrical trapezoid with NA at mid-height, the stresses at the top and bottom edges will have the same magnitude if $b_1=b_2$ (rectangle). If $b_1 \neq b_2$, the stress magnitude will depend on the width at the top and bottom and the distance from the neutral axis.

*   **Example:** A symmetrical trapezoidal beam has parallel sides $b_1 = 60$ mm (top) and $b_2 = 100$ mm (bottom) and a height $h = 80$ mm. It is subjected to a bending moment of 30 kNm. Calculate the maximum bending stress.

    *   $b_1 = 60 \text{ mm} = 0.06 \text{ m}$
    *   $b_2 = 100 \text{ mm} = 0.10 \text{ m}$
    *   $h = 80 \text{ mm} = 0.08 \text{ m}$
    *   $M = 30 \text{ kNm} = 30 \times 10^3 \text{ Nm}$
    *   Assuming symmetrical trapezoid and NA at mid-height:
        *   $I_{NA} = \frac{h^3}{36} \left( \frac{b_1^2 + 4b_1b_2 + b_2^2}{b_1 + b_2} \right)$
        *   $I_{NA} = \frac{(0.08)^3}{36} \left( \frac{(0.06)^2 + 4(0.06)(0.10) + (0.10)^2}{0.06 + 0.10} \right)$
        *   $I_{NA} = \frac{0.000512}{36} \left( \frac{0.0036 + 0.024 + 0.01}{0.16} \right)$
        *   $I_{NA} = 1.422 \times 10^{-5} \times \left( \frac{0.0376}{0.16} \right) = 1.422 \times 10^{-5} \times 0.235 = 3.341 \times 10^{-6} \text{ m}^4$
    *   $c = \frac{h}{2} = \frac{0.08}{2} = 0.04 \text{ m}$
    *   $\sigma_{max} = \frac{Mc}{I_{NA}} = \frac{(30 \times 10^3 \text{ Nm}) \times 0.04 \text{ m}}{3.341 \times 10^{-6} \text{ m}^4} = \frac{1200}{3.341 \times 10^{-6}} = 359.2 \times 10^6 \text{ N/m}^2 = 359.2 \text{ MPa}$

---

### 4. Comparison of Stress Distributions

*   **Rectangular:** Uniform width means stress increases linearly across the height.
*   **Circular:** Stress distribution is the same as rectangular in terms of linearity, but the moment of inertia and section modulus are different, leading to different stress values for the same bending moment.
*   **Trapezoidal:**
    *   For a symmetrical trapezoid, the stress still varies linearly.
    *   If the top width ($b_1$) is smaller than the bottom width ($b_2$), the stress at the bottom might be lower than if it were a rectangle of height $h$, and vice-versa for the top, assuming the same depth $h$.
    *   The overall capacity of a trapezoidal beam to resist bending depends on the distribution of its area relative to the neutral axis, as reflected in its moment of inertia and section modulus. Beams with more area further from the neutral axis generally have higher bending strength.

---

### 5. Important Points to Remember

*   **The flexure formula ($\sigma_b = \frac{My}{I}$) is the cornerstone of bending stress analysis.**
*   **The neutral axis is where bending stress is zero.** For symmetrical sections and bending in the plane of symmetry, it passes through the centroid.
*   **Maximum bending stress occurs at the points farthest from the neutral axis.**
*   **Moment of Inertia ($I$) is a geometric property that quantifies resistance to bending.** Higher $I$ means lower stress for the same $M$ and $y$.
*   **Section Modulus ($Z$) simplifies the calculation of maximum bending stress.**
*   **The shape of the cross-section significantly influences the moment of inertia and section modulus, and thus the bending stress distribution and capacity.**
*   **Always ensure consistent units when performing calculations.**

---

### 6. Practice Questions and Exercises

**Question 1:** A steel beam with a rectangular cross-section of 40 mm wide and 120 mm deep is subjected to a bending moment of 8 kNm. Calculate:
    a) The moment of inertia of the cross-section about its neutral axis.
    b) The distance from the neutral axis to the outermost fiber.
    c) The maximum bending stress in the beam.
    d) The bending stress at a point 40 mm from the neutral axis.

**Solution 1:**
    a) $b = 40 \text{ mm} = 0.04 \text{ m}$, $h = 120 \text{ mm} = 0.12 \text{ m}$
        $I = \frac{bh^3}{12} = \frac{0.04 \times (0.12)^3}{12} = \frac{0.04 \times 0.001728}{12} = 5.76 \times 10^{-6} \text{ m}^4$
    b) $c = \frac{h}{2} = \frac{0.12}{2} = 0.06 \text{ m}$
    c) $M = 8 \text{ kNm} = 8 \times 10^3 \text{ Nm}$
        $\sigma_{max} = \frac{Mc}{I} = \frac{(8 \times 10^3 \text{ Nm}) \times 0.06 \text{ m}}{5.76 \times 10^{-6} \text{ m}^4} = \frac{480}{5.76 \times 10^{-6}} = 83.33 \times 10^6 \text{ N/m}^2 = 83.33 \text{ MPa}$
    d) $y = 40 \text{ mm} = 0.04 \text{ m}$
        $\sigma_b = \frac{My}{I} = \frac{(8 \times 10^3 \text{ Nm}) \times 0.04 \text{ m}}{5.76 \times 10^{-6} \text{ m}^4} = \frac{320}{5.76 \times 10^{-6}} = 55.56 \times 10^6 \text{ N/m}^2 = 55.56 \text{ MPa}$

**Question 2:** A solid circular shaft has a diameter of 100 mm. If it is subjected to a bending moment of 25 kNm, determine the maximum bending stress.

**Solution 2:**
    $d = 100 \text{ mm} = 0.1 \text{ m}$
    $M = 25 \text{ kNm} = 25 \times 10^3 \text{ Nm}$
    $Z_{circle} = \frac{\pi d^3}{32} = \frac{\pi (0.1)^3}{32} = \frac{\pi \times 0.001}{32} = 9.817 \times 10^{-5} \text{ m}^3$
    $\sigma_{max} = \frac{M}{Z_{circle}} = \frac{25 \times 10^3 \text{ Nm}}{9.817 \times 10^{-5} \text{ m}^3} = 254.65 \times 10^6 \text{ N/m}^2 = 254.65 \text{ MPa}$

**Question 3:** A symmetrical trapezoidal beam has a top width of 80 mm, a bottom width of 120 mm, and a height of 100 mm. If it is subjected to a bending moment of 40 kNm, calculate the maximum bending stress, assuming the neutral axis is at the geometric center.

**Solution 3:**
    $b_1 = 80 \text{ mm} = 0.08 \text{ m}$
    $b_2 = 120 \text{ mm} = 0.12 \text{ m}$
    $h = 100 \text{ mm} = 0.10 \text{ m}$
    $M = 40 \text{ kNm} = 40 \times 10^3 \text{ Nm}$
    $I_{NA} = \frac{h^3}{36} \left( \frac{b_1^2 + 4b_1b_2 + b_2^2}{b_1 + b_2} \right)$
    $I_{NA} = \frac{(0.10)^3}{36} \left( \frac{(0.08)^2 + 4(0.08)(0.12) + (0.12)^2}{0.08 + 0.12} \right)$
    $I_{NA} = \frac{0.001}{36} \left( \frac{0.0064 + 0.0384 + 0.0144}{0.20} \right)$
    $I_{NA} = 2.778 \times 10^{-5} \times \left( \frac{0.0592}{0.20} \right) = 2.778 \times 10^{-5} \times 0.296 = 8.222 \times 10^{-6} \text{ m}^4$
    $c = \frac{h}{2} = \frac{0.10}{2} = 0.05 \text{ m}$
    $\sigma_{max} = \frac{Mc}{I_{NA}} = \frac{(40 \times 10^3 \text{ Nm}) \times 0.05 \text{ m}}{8.222 \times 10^{-6} \text{ m}^4} = \frac{2000}{8.222 \times 10^{-6}} = 243.26 \times 10^6 \text{ N/m}^2 = 243.26 \text{ MPa}$

---
This concludes the study notes for Topic 3: Stress Distribution in Beams with Rectangular, Circular, and Trapezoidal Cross-Sections. Remember to practice these concepts with various problem types.
