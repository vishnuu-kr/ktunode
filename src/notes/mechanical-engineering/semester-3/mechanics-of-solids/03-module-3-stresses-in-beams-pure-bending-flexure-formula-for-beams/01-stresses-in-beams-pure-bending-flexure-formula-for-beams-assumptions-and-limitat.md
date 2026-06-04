---
title: "Stresses in Beams: Pure Bending – Flexure formula for beams -
assumptions and limitations – Section Modulus - Flexural Rigidit  
- derivation and problems for rectangular section only -assumptions and 
limitations"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Stresses in Beams: Pure Bending – Flexure formula for beams "
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf8"
status: "completed"
scrapedAt: "2026-05-20T17:51:07.053Z"
---
# Mechanics of Solids: Module 3 - Stresses in Beams: Pure Bending & Flexure Formula

## Introduction to Pure Bending

**Pure bending** (also known as **simple bending**) refers to a condition where a beam is subjected to a constant bending moment along its length, with no accompanying shear force. In such a scenario, the cross-section of the beam remains unchanged in shape, and the longitudinal fibers of the beam elongate or shorten uniformly. This is an idealized situation, but it forms the basis for understanding more complex beam bending scenarios.

**Key Concepts:**

*   **Bending Moment (M):** An internal moment within a beam that resists the tendency of external forces to bend it.
*   **Shear Force (V):** An internal force within a beam that resists the tendency of external forces to shear it.
*   **Neutral Axis (NA):** An imaginary line passing through the centroid of the beam's cross-section. Along the neutral axis, there is no stress (neither tensile nor compressive) due to bending.

## Assumptions in Pure Bending

The derivation of the flexure formula relies on several simplifying assumptions. It's crucial to understand these assumptions to appreciate the formula's applicability and limitations.

**Based on textbooks like Bansal, Bhavikatti, Surendra Singh, and Rattan:**

1.  **Plane sections remain plane:** Cross-sections of the beam that are plane before bending remain plane after bending. This implies that the deformation is purely due to bending, and shear deformation is negligible. (Related to CO3: Determine the stresses and deflections in beams subjected to transverse loads).
2.  **The material is homogeneous and isotropic:** The material properties are uniform throughout the beam (homogeneous) and are the same in all directions (isotropic).
3.  **The material obeys Hooke's Law:** The stress is directly proportional to the strain within the elastic limit.
4.  **The beam is initially straight and has a uniform cross-section:** This simplifies the geometry and analysis.
5.  **The cross-section is symmetrical about the plane of bending:** This ensures that the neutral axis passes through the centroid of the cross-section. For non-symmetrical sections, the analysis becomes more complex.
6.  **The bending stresses are the only significant stresses:** Stresses due to shear force, axial load, or torsion are considered negligible in pure bending.
7.  **The beam is subjected to pure bending:** This means the bending moment is constant along the beam, and the shear force is zero.

## Derivation of the Flexure Formula (for Rectangular Section)

The flexure formula, also known as the **Bending Stress Formula** or **Cauchy's Stress Formula for Bending**, relates the bending stress ($\sigma$) in a beam to the bending moment (M), the distance from the neutral axis (y), and the moment of inertia of the cross-section about the neutral axis (I).

**Derivation Steps:**

Let's consider a beam with a rectangular cross-section of width '$b$' and depth '$h$'.

1.  **Consider a small element:** Imagine a small longitudinal element of the beam at a distance '$y$' from the neutral axis.
2.  **Deformation:** Under a bending moment '$M$', this element will change its length. Fibers above the neutral axis will be compressed, and fibers below the neutral axis will be stretched.
3.  **Strain:** The strain ($\epsilon$) at a distance '$y$' from the neutral axis is related to the curvature of the beam. If '$R$' is the radius of curvature, then:
    $\epsilon = \frac{\Delta L}{L} = \frac{y}{R}$
    (Where $\Delta L$ is the change in length and $L$ is the original length).
4.  **Stress:** According to Hooke's Law ($\sigma = E \epsilon$), the stress at a distance '$y$' from the neutral axis is:
    $\sigma = E \cdot \frac{y}{R}$
    (Where $E$ is the Young's Modulus of the material).
5.  **Force on an elemental area:** Consider an elemental area '$dA$' at a distance '$y$' from the neutral axis. The force on this elemental area is:
    $dF = \sigma \cdot dA = E \cdot \frac{y}{R} \cdot dA$
6.  **Moment of this force:** The moment of this force about the neutral axis is:
    $dM = dF \cdot y = E \cdot \frac{y}{R} \cdot dA \cdot y = E \cdot \frac{y^2}{R} \cdot dA$
7.  **Total Bending Moment:** The total bending moment '$M$' is the sum of the moments of all such elemental forces across the entire cross-section:
    $M = \int dM = \int E \cdot \frac{y^2}{R} \cdot dA$
    Since $E$ and $R$ are constant for the entire cross-section, we can take them out of the integral:
    $M = \frac{E}{R} \int y^2 dA$
8.  **Moment of Inertia (I):** The term $\int y^2 dA$ is the **Moment of Inertia** ($I$) of the cross-section about the neutral axis.
    $M = \frac{E}{R} \cdot I$
9.  **Relating Stress and Moment:** From step 4, we have $\sigma = E \cdot \frac{y}{R}$. We can rewrite this as $\frac{\sigma}{y} = \frac{E}{R}$.
    Substituting $\frac{E}{R}$ from the moment equation:
    $\frac{\sigma}{y} = \frac{M}{I}$

**Therefore, the Flexure Formula is:**

$$ \boxed{\frac{\sigma}{y} = \frac{M}{I} = E R} $$

This formula can be rearranged to find the bending stress:

$$ \sigma = \frac{M y}{I} $$

This is the **flexure formula for beams**.

## Flexure Formula for Rectangular Section Only

For a rectangular section of width '$b$' and depth '$h$', the neutral axis passes through the centroid.

*   **Moment of Inertia (I):** The moment of inertia of a rectangular section about its centroidal axis parallel to the base is given by:
    $I = \frac{bh^3}{12}$

*   **Maximum Bending Stress:** The maximum bending stress occurs at the extreme fibers (i.e., at $y = \pm \frac{h}{2}$), where '$y$' is the distance from the neutral axis.
    $\sigma_{max} = \frac{M (\frac{h}{2})}{I} = \frac{M \frac{h}{2}}{\frac{bh^3}{12}} = \frac{6M}{bh^2}$

**Example:**

A rectangular beam of width 50 mm and depth 100 mm is subjected to a bending moment of 10 kNm. Calculate the maximum bending stress.

**Given:**
$b = 50$ mm $= 0.05$ m
$h = 100$ mm $= 0.1$ m
$M = 10$ kNm $= 10 \times 10^3$ Nm

**Solution:**
First, calculate the moment of inertia (I):
$I = \frac{bh^3}{12} = \frac{(0.05 \text{ m})(0.1 \text{ m})^3}{12} = \frac{0.05 \times 0.001}{12} = \frac{0.00005}{12} \text{ m}^4 \approx 4.167 \times 10^{-6} \text{ m}^4$

Now, calculate the maximum bending stress ($\sigma_{max}$) using $\sigma_{max} = \frac{M (\frac{h}{2})}{I}$:
$\sigma_{max} = \frac{(10 \times 10^3 \text{ Nm}) \times (\frac{0.1 \text{ m}}{2})}{4.167 \times 10^{-6} \text{ m}^4} = \frac{10 \times 10^3 \times 0.05}{4.167 \times 10^{-6}} = \frac{500}{4.167 \times 10^{-6}}$
$\sigma_{max} \approx 120 \times 10^6 \text{ N/m}^2 = 120 \text{ MPa}$

Alternatively, using $\sigma_{max} = \frac{6M}{bh^2}$:
$\sigma_{max} = \frac{6 \times (10 \times 10^3 \text{ Nm})}{(0.05 \text{ m})(0.1 \text{ m})^2} = \frac{60 \times 10^3}{0.05 \times 0.01} = \frac{60 \times 10^3}{0.0005} = 120 \times 10^6 \text{ N/m}^2 = 120 \text{ MPa}$

## Section Modulus (Z)

The **Section Modulus** ($Z$) is a geometric property of a beam's cross-section that indicates its resistance to bending. It is defined as the ratio of the moment of inertia ($I$) to the distance from the neutral axis to the extreme fiber ($y_{max}$).

$$ \boxed{Z = \frac{I}{y_{max}}} $$

The flexure formula can also be written as:

$$ \sigma_{max} = \frac{M}{Z} $$

**Significance:**

*   A larger section modulus indicates a greater resistance to bending for a given bending moment.
*   It directly relates the maximum bending stress to the applied bending moment.

**Section Modulus for a Rectangular Section:**

For a rectangular section of width '$b$' and depth '$h$', $y_{max} = \frac{h}{2}$.
$I = \frac{bh^3}{12}$

Therefore, the section modulus is:
$Z = \frac{I}{y_{max}} = \frac{\frac{bh^3}{12}}{\frac{h}{2}} = \frac{bh^2}{6}$

**Example:**

For the rectangular beam in the previous example (b=50 mm, h=100 mm), calculate the section modulus and use it to find the maximum bending stress.

**Solution:**
$b = 50$ mm $= 0.05$ m
$h = 100$ mm $= 0.1$ m

$Z = \frac{bh^2}{6} = \frac{(0.05 \text{ m})(0.1 \text{ m})^2}{6} = \frac{0.05 \times 0.01}{6} = \frac{0.0005}{6} \text{ m}^3 \approx 8.333 \times 10^{-5} \text{ m}^3$

Now, using $\sigma_{max} = \frac{M}{Z}$:
$\sigma_{max} = \frac{10 \times 10^3 \text{ Nm}}{8.333 \times 10^{-5} \text{ m}^3} = 120 \times 10^6 \text{ N/m}^2 = 120 \text{ MPa}$

This matches the previous result.

## Flexural Rigidity (EI)

**Flexural Rigidity** ($EI$) is a measure of a beam's resistance to bending. It is the product of the Young's Modulus ($E$) of the beam's material and the Moment of Inertia ($I$) of its cross-section about the neutral axis.

$$ \boxed{EI = E \cdot I} $$

**Significance:**

*   **Resistance to Bending:** A higher flexural rigidity means the beam is more resistant to bending and will deflect less under a given load.
*   **Relationship with Curvature:** From the flexure formula, we have $\frac{M}{I} = ER$. Rearranging, we get $\frac{M}{EI} = \frac{1}{R}$. This shows that flexural rigidity is inversely proportional to the curvature.
*   **Beam Deflection:** Flexural rigidity is a crucial parameter in calculating beam deflections under various loading conditions. Beams with higher $EI$ values will experience smaller deflections. (Related to CO3: Determine the stresses and deflections in beams subjected to transverse loads).

**Factors Affecting Flexural Rigidity:**

*   **Material Properties:** A stiffer material (higher $E$) will increase flexural rigidity.
*   **Cross-sectional Geometry:** A larger moment of inertia ($I$) (e.g., deeper beams, sections with material distributed further from the neutral axis) will increase flexural rigidity.

**Example:**

A steel beam (E = 200 GPa) has a rectangular cross-section of 50 mm x 100 mm. Calculate its flexural rigidity if it is subjected to a bending moment.

**Given:**
$E = 200$ GPa $= 200 \times 10^9$ Pa
$b = 50$ mm $= 0.05$ m
$h = 100$ mm $= 0.1$ m

**Solution:**
First, calculate the moment of inertia (I):
$I = \frac{bh^3}{12} = \frac{(0.05 \text{ m})(0.1 \text{ m})^3}{12} \approx 4.167 \times 10^{-6} \text{ m}^4$

Now, calculate the flexural rigidity (EI):
$EI = (200 \times 10^9 \text{ Pa}) \times (4.167 \times 10^{-6} \text{ m}^4) = 833.4 \times 10^3 \text{ Nm}^2 = 0.8334 \text{ MNm}^2$

## Assumptions and Limitations of the Flexure Formula

While powerful, the flexure formula is based on several assumptions that limit its direct application in all real-world scenarios.

**Assumptions (Recap):**

1.  Plane sections remain plane.
2.  Homogeneous and isotropic material.
3.  Material obeys Hooke's Law.
4.  Beam is initially straight and of uniform cross-section.
5.  Cross-section is symmetrical about the plane of bending.
6.  Bending stresses are dominant; shear and other stresses are negligible.
7.  Pure bending (constant M, zero V).

**Limitations:**

1.  **Non-uniform Cross-sections:** The formula is derived for uniform cross-sections. For tapered beams, the analysis becomes more complex.
2.  **Non-symmetrical Sections:** For sections not symmetrical about the bending plane, the neutral axis may not pass through the centroid, and the stress distribution is not symmetrical. Special methods are needed.
3.  **Material Non-linearity:** If the material exceeds its elastic limit, Hooke's Law is no longer valid, and the stress distribution will be non-linear.
4.  **Shear Stress:** In reality, beams are often subjected to both bending moment and shear force. The flexure formula does not account for shear stresses, which can be significant, especially in short, deep beams. Shear stress distribution is generally parabolic across the cross-section. (Related to CO3).
5.  **Large Deformations:** The derivation assumes small deflections. For large deflections, the curvature changes significantly, and the linear strain assumption may not hold.
6.  **Stress Concentrations:** The formula assumes a uniform stress distribution across the cross-section (except for the variation with 'y'). However, geometric discontinuities like holes or notches can cause localized stress concentrations, where the actual stress is much higher than predicted by the formula.
7.  **Statically Indeterminate Beams:** The flexure formula itself is a relationship between stress and moment. However, determining the bending moment ($M$) in statically indeterminate beams requires additional analysis beyond simple statics.
8.  **Thin-Walled Structures and Buckling:** For very thin sections, local buckling of the compression flange can occur before the material yields, which is not captured by the flexure formula.

**Important Points to Remember:**

*   The neutral axis always passes through the centroid of the cross-section *if* the material is homogeneous and the section is symmetrical about the plane of bending.
*   Maximum tensile stress occurs on the bottom fiber if the bending moment is positive (sagging).
*   Maximum compressive stress occurs on the top fiber if the bending moment is positive.
*   The distribution of bending stress across a cross-section is linear.
*   Section modulus ($Z$) is a direct indicator of a beam's bending strength.
*   Flexural rigidity ($EI$) is a measure of a beam's stiffness against bending.

## Practice Problems and Exercises

**Problem 1:**

A rectangular beam is 80 mm wide and 120 mm deep. It is subjected to a bending moment of 15 kNm. Calculate:
a) The moment of inertia of the cross-section.
b) The section modulus.
c) The maximum bending stress.

**Solution:**
Given: $b = 80$ mm $= 0.08$ m, $h = 120$ mm $= 0.12$ m, $M = 15$ kNm $= 15 \times 10^3$ Nm

a) Moment of Inertia (I):
$I = \frac{bh^3}{12} = \frac{(0.08 \text{ m})(0.12 \text{ m})^3}{12} = \frac{0.08 \times 0.001728}{12} = 1.152 \times 10^{-5} \text{ m}^4$

b) Section Modulus (Z):
$Z = \frac{bh^2}{6} = \frac{(0.08 \text{ m})(0.12 \text{ m})^2}{6} = \frac{0.08 \times 0.0144}{6} = 1.92 \times 10^{-4} \text{ m}^3$

c) Maximum Bending Stress ($\sigma_{max}$):
$\sigma_{max} = \frac{M}{Z} = \frac{15 \times 10^3 \text{ Nm}}{1.92 \times 10^{-4} \text{ m}^3} = 78.125 \times 10^6 \text{ N/m}^2 = 78.125 \text{ MPa}$

**Problem 2:**

A simply supported beam with a rectangular cross-section of 100 mm width and 150 mm depth carries a uniformly distributed load such that the maximum bending moment is 20 kNm. If the beam is made of steel with $E = 200$ GPa, calculate:
a) The maximum bending stress.
b) The flexural rigidity of the beam.

**Solution:**
Given: $b = 100$ mm $= 0.1$ m, $h = 150$ mm $= 0.15$ m, $M_{max} = 20$ kNm $= 20 \times 10^3$ Nm, $E = 200$ GPa $= 200 \times 10^9$ Pa

a) Maximum Bending Stress ($\sigma_{max}$):
First, calculate the section modulus (Z):
$Z = \frac{bh^2}{6} = \frac{(0.1 \text{ m})(0.15 \text{ m})^2}{6} = \frac{0.1 \times 0.0225}{6} = 3.75 \times 10^{-4} \text{ m}^3$
$\sigma_{max} = \frac{M_{max}}{Z} = \frac{20 \times 10^3 \text{ Nm}}{3.75 \times 10^{-4} \text{ m}^3} = 53.33 \times 10^6 \text{ N/m}^2 = 53.33 \text{ MPa}$

b) Flexural Rigidity (EI):
First, calculate the moment of inertia (I):
$I = \frac{bh^3}{12} = \frac{(0.1 \text{ m})(0.15 \text{ m})^3}{12} = \frac{0.1 \times 0.003375}{12} = 2.8125 \times 10^{-5} \text{ m}^4$
$EI = E \cdot I = (200 \times 10^9 \text{ Pa}) \times (2.8125 \times 10^{-5} \text{ m}^4) = 5625 \times 10^3 \text{ Nm}^2 = 5.625 \text{ MNm}^2$

**Practice Questions:**

1.  State the assumptions made in the derivation of the flexure formula.
2.  Define section modulus and explain its significance in beam bending.
3.  What is flexural rigidity, and how does it relate to beam stiffness?
4.  A wooden beam with a rectangular cross-section of 100 mm x 200 mm is simply supported over a span of 4 m and carries a point load of 5 kN at its center. Calculate the maximum bending stress in the beam. (Assume $E = 10$ GPa).
5.  A rectangular beam of width 60 mm and depth 100 mm is subjected to a bending moment of 8 kNm. If the maximum allowable stress is 150 MPa, determine the required section modulus and comment on the suitability of the given section.

---

**Answers to Practice Questions:**

1.  (See "Assumptions in Pure Bending" section)
2.  **Section Modulus (Z)** is the ratio of the moment of inertia (I) to the distance from the neutral axis to the extreme fiber ($y_{max}$). $Z = I / y_{max}$. It signifies the beam's resistance to bending; a larger Z means greater resistance for a given bending moment, as $\sigma_{max} = M/Z$.
3.  **Flexural Rigidity (EI)** is the product of the Young's Modulus (E) and the moment of inertia (I) of the beam's cross-section. It represents the beam's stiffness against bending. A higher EI means the beam is stiffer and will deflect less under a given load.
4.  **Solution:**
    $b = 0.1$ m, $h = 0.2$ m, $L = 4$ m, $P = 5$ kN.
    For a simply supported beam with a central point load, $M_{max} = \frac{PL}{4}$.
    $M_{max} = \frac{(5 \times 10^3 \text{ N})(4 \text{ m})}{4} = 5 \times 10^3 \text{ Nm}$
    $I = \frac{bh^3}{12} = \frac{(0.1 \text{ m})(0.2 \text{ m})^3}{12} = \frac{0.1 \times 0.008}{12} = 6.667 \times 10^{-5} \text{ m}^4$
    $y_{max} = \frac{h}{2} = \frac{0.2 \text{ m}}{2} = 0.1$ m
    $\sigma_{max} = \frac{M_{max} y_{max}}{I} = \frac{(5 \times 10^3 \text{ Nm})(0.1 \text{ m})}{6.667 \times 10^{-5} \text{ m}^4} = 7.5 \times 10^6 \text{ N/m}^2 = 7.5 \text{ MPa}$

5.  **Solution:**
    $b = 60$ mm $= 0.06$ m, $h = 100$ mm $= 0.1$ m, $M = 8$ kNm $= 8 \times 10^3$ Nm, $\sigma_{allowable} = 150$ MPa $= 150 \times 10^6$ Pa.
    Required $Z$:
    $Z_{required} = \frac{M}{\sigma_{allowable}} = \frac{8 \times 10^3 \text{ Nm}}{150 \times 10^6 \text{ Pa}} = 5.333 \times 10^{-5} \text{ m}^3$
    Actual Z of the section:
    $Z_{actual} = \frac{bh^2}{6} = \frac{(0.06 \text{ m})(0.1 \text{ m})^2}{6} = \frac{0.06 \times 0.01}{6} = 1 \times 10^{-4} \text{ m}^3$
    **Comment:** Since $Z_{actual} (1 \times 10^{-4} \text{ m}^3)$ is greater than $Z_{required} (5.333 \times 10^{-5} \text{ m}^3)$, the given section is suitable as it can withstand the bending moment without exceeding the allowable stress.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
