---
title: "Poisson’s ratio - Relationship between elastic constants."
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Introduction to analysis of deformable bodies."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf0"
status: "completed"
scrapedAt: "2026-05-20T17:51:02.749Z"
---
# MECHANICS OF SOLIDS - Module 1: Introduction to Analysis of Deformable Bodies

## Topic: Poisson's Ratio - Relationship Between Elastic Constants

---

### 1. Introduction to Deformable Bodies and Elasticity

*   **Deformable Body:** A body that changes its shape or size when subjected to external forces or temperature variations.
*   **Rigid Body:** A body that does not deform under the action of external forces (an idealization for simplicity in some analyses).
*   **Elasticity:** The property of a material to regain its original size and shape when the applied external forces are removed.
*   **Elastic Limit:** The maximum stress a material can withstand beyond which it will not return to its original shape upon unloading (plastic deformation occurs).
*   **Stress ($\sigma$):** The internal resisting force per unit area.
    *   **Tensile Stress:** Stress caused by a pulling force.
    *   **Compressive Stress:** Stress caused by a pushing force.
    *   **Shear Stress ($\tau$):** Stress caused by forces acting parallel to the surface.
*   **Strain ($\epsilon$):** The deformation per unit length.
    *   **Tensile Strain:** Elongation per unit length.
    *   **Compressive Strain:** Contraction per unit length.
    *   **Shear Strain ($\gamma$):** The change in angle between two initially perpendicular lines in a body.

---

### 2. Poisson's Ratio ($\nu$)

*   **Definition:** When a material is stressed in one direction, it deforms not only in that direction but also laterally (perpendicular to the applied stress). Poisson's ratio is the ratio of lateral strain to axial strain in a material subjected to uniaxial stress, within the elastic limit.

*   **Formula:**
    $$ \nu = -\frac{\text{Lateral Strain}}{\text{Axial Strain}} $$
    *   The negative sign is introduced because when a material is stretched axially (positive axial strain), it contracts laterally (negative lateral strain), and vice versa.
    *   $$ \nu = -\frac{\epsilon_{lateral}}{\epsilon_{axial}} $$

*   **Key Aspects:**
    *   Poisson's ratio is a dimensionless quantity.
    *   It is a material property and is considered constant within the elastic limit.
    *   It indicates the tendency of a material to contract in directions perpendicular to the direction of tensile stress.

*   **Range of Poisson's Ratio:**
    *   For most engineering materials, $0 < \nu < 0.5$.
    *   **For most metals:** $\nu \approx 0.25 - 0.35$
    *   **Rubber:** $\nu \approx 0.5$ (nearly incompressible)
    *   **Cork:** $\nu \approx 0$ (hardly deforms laterally)
    *   **Auxetic Materials:** Materials with negative Poisson's ratio (expand laterally when stretched axially). These are rare and have specialized applications.

*   **Example (Tensile Test):**
    Consider a rod of length $L$ and diameter $d$ subjected to an axial tensile force $P$.
    *   Axial Stress: $\sigma_{axial} = \frac{P}{A} = \frac{P}{\frac{\pi d^2}{4}}$
    *   Axial Strain: $\epsilon_{axial} = \frac{\Delta L}{L}$ (where $\Delta L$ is the elongation)
    *   Lateral Strain: $\epsilon_{lateral} = \frac{\Delta d}{d}$ (where $\Delta d$ is the change in diameter)

    If the rod is stretched, $\Delta L > 0$, so $\epsilon_{axial} > 0$. The rod will typically become thinner, so $\Delta d < 0$, meaning $\epsilon_{lateral} < 0$.
    $$ \nu = -\frac{\epsilon_{lateral}}{\epsilon_{axial}} = -\frac{\Delta d / d}{\Delta L / L} $$

*   **Volume Change due to Axial Stress:**
    Within the elastic limit, the change in volume can be approximated for uniaxial stress:
    $$ \frac{\Delta V}{V} \approx \epsilon_{axial} + \epsilon_{lateral} + \epsilon_{lateral} $$
    $$ \frac{\Delta V}{V} \approx \epsilon_{axial} (1 + 2\nu) $$
    *   If $\nu < 0.5$, the volume increases under uniaxial tension.
    *   If $\nu = 0.5$, the volume remains constant under uniaxial tension (incompressible material).

---

### 3. Relationship Between Elastic Constants

The behavior of an elastic material under stress is characterized by several elastic constants. The most common are:

*   **Young's Modulus (E):** The ratio of axial stress to axial strain under uniaxial tension or compression.
    $$ E = \frac{\sigma_{axial}}{\epsilon_{axial}} $$
    *   Also known as the Modulus of Elasticity.
    *   Measures the stiffness of the material in tension/compression.

*   **Shear Modulus (G):** The ratio of shear stress to shear strain.
    $$ G = \frac{\tau}{\gamma} $$
    *   Also known as the Modulus of Rigidity.
    *   Measures the stiffness of the material in shear.

*   **Bulk Modulus (K):** The ratio of hydrostatic pressure (uniform stress in all directions) to volumetric strain.
    $$ K = -\frac{P}{\Delta V / V} $$
    *   Measures the resistance of a material to compression.

*   **Poisson's Ratio ($\nu$):** As defined earlier.

These constants are not independent; they are related to each other through specific mathematical formulas, provided the material is homogeneous, isotropic, and obeys Hooke's Law.

---

#### 3.1 Relationship Between E, G, and $\nu$

This relationship is derived by considering the deformation of a cube under shear stress.

*   **Derivation Outline (Conceptual):**
    Consider a square element subjected to pure shear. This state of pure shear can be resolved into an equivalent state of biaxial tension and compression along diagonal planes. By relating the strains due to shear to the strains due to these equivalent stresses using Young's Modulus and Poisson's Ratio, the relationship between $E$, $G$, and $\nu$ can be established.

*   **Formula:**
    $$ E = 2G(1 + \nu) $$

*   **Rearrangement:**
    *   $$ G = \frac{E}{2(1 + \nu)} $$
    *   $$ \nu = \frac{E}{2G} - 1 $$

*   **Implications:**
    *   If $E$ and $G$ are known, $\nu$ can be calculated.
    *   If $E$ and $\nu$ are known, $G$ can be calculated.
    *   If $G$ and $\nu$ are known, $E$ can be calculated.
    *   This formula implies that for isotropic materials, $E \geq G$ and $E \geq 3G$. Also, $\nu \geq 0$.

*   **Textbook References:**
    *   **R.K. Bansal (2012):** Discusses these relationships in Chapter 3 (Stress, Strain and Elasticity) and often derives them through stress transformation or pure shear analysis.
    *   **S. S. Bhavikatti (2013):** Also covers these relationships, likely in a chapter related to Hooke's Law and elastic constants.
    *   **Surendra Singh (2013):** Provides derivations and applications of these relations.
    *   **Rattan (2011):** Similar coverage to other Indian authors, focusing on the fundamental relationships.
    *   **Hibbeler (2018):** Usually presents these relationships in the context of stress-strain relations for materials, often using tensorial approaches or simplified derivations.
    *   **Beer & Johnston (2017):** Typically provides these relationships in sections dealing with the generalized Hooke's Law.

---

#### 3.2 Relationship Between E, K, and $\nu$

This relationship arises from considering a body under hydrostatic pressure.

*   **Derivation Outline (Conceptual):**
    Under hydrostatic pressure $P$, the stress in all three mutually perpendicular directions is $\sigma_1 = \sigma_2 = \sigma_3 = -P$. The corresponding strains are $\epsilon_1 = \epsilon_2 = \epsilon_3$. Using the generalized Hooke's Law for isotropic materials, we relate these strains to the applied stresses using $E$ and $\nu$.

*   **Formula:**
    $$ K = \frac{E}{3(1 - 2\nu)} $$

*   **Rearrangement:**
    *   $$ E = 3K(1 - 2\nu) $$
    *   $$ \nu = \frac{1}{2} \left( \frac{E}{K} - 1 \right) $$

*   **Implications:**
    *   For $K$ to be positive (a material resists compression), the denominator $3(1-2\nu)$ must be positive, implying $1 - 2\nu > 0$, or $\nu < 0.5$. This confirms the typical range of Poisson's ratio for most materials.
    *   If $\nu = 0.5$, the denominator becomes zero, leading to an infinite bulk modulus, which corresponds to an incompressible material.

*   **Textbook References:**
    *   Again, **Bansal, Bhavikatti, Surendra Singh, Rattan, Hibbeler, Beer & Johnston** will cover these relationships, typically in sections discussing hydrostatic stress and volumetric strain. The derivation often involves the generalized Hooke's Law.

---

#### 3.3 Relationship Between E, G, K, and $\nu$ (All Four Constants)

Combining the previous two relationships, we can also express the relationship between all four constants.

*   **Formula:**
    $$ E = \frac{9KG}{3K + G} $$

*   **Derivation:**
    Start with $E = 2G(1 + \nu)$ and $E = 3K(1 - 2\nu)$.
    From the first, $\nu = \frac{E}{2G} - 1$.
    Substitute this into the second:
    $E = 3K \left( 1 - 2 \left( \frac{E}{2G} - 1 \right) \right)$
    $E = 3K \left( 1 - \frac{E}{G} + 2 \right)$
    $E = 3K \left( 3 - \frac{E}{G} \right)$
    $E = 9K - \frac{3KE}{G}$
    $E \left( 1 + \frac{3K}{G} \right) = 9K$
    $E \left( \frac{G + 3K}{G} \right) = 9K$
    $$ E = \frac{9KG}{3K + G} $$

*   **Implications:**
    *   This formula shows that if any three of the four elastic constants ($E, G, K, \nu$) are known, the fourth can be determined.

---

### 4. Learning Outcomes Addressed

This topic directly addresses the following learning outcomes:

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3)**
    *   Understanding Poisson's ratio is fundamental to calculating lateral strains and volumetric changes when axial stresses are applied, contributing to the determination of overall deformation.
    *   The relationships between elastic constants are essential for stress-strain analysis in various loading scenarios.

---

### 5. Important Points to Remember

*   **Poisson's Ratio ($\nu$)** is the ratio of lateral strain to axial strain. It's always negative in the formula due to sign conventions.
*   The typical range for $\nu$ is $0 < \nu < 0.5$ for most engineering materials.
*   **$E = 2G(1 + \nu)$:** Relates Young's Modulus, Shear Modulus, and Poisson's Ratio.
*   **$E = 3K(1 - 2\nu)$:** Relates Young's Modulus, Bulk Modulus, and Poisson's Ratio.
*   These relationships hold for **isotropic, homogeneous materials obeying Hooke's Law**.
*   The condition $\nu < 0.5$ is required for the Bulk Modulus ($K$) to be positive.
*   Materials with $\nu \approx 0.5$ (like rubber) are nearly incompressible.

---

### 6. Practice Questions and Exercises

**Question 1:**
A steel rod $20$ mm in diameter is subjected to an axial tensile load of $100$ kN. The Young's modulus for steel is $200$ GPa and Poisson's ratio is $0.3$. Calculate:
a) The axial stress in the rod.
b) The axial strain in the rod.
c) The lateral strain in the rod.
d) The change in diameter of the rod.

**Solution 1:**
Given:
Diameter, $d = 20$ mm $= 0.02$ m
Axial Load, $P = 100$ kN $= 100 \times 10^3$ N
Young's Modulus, $E = 200$ GPa $= 200 \times 10^9$ N/m$^2$
Poisson's Ratio, $\nu = 0.3$

Area of the rod, $A = \frac{\pi d^2}{4} = \frac{\pi (0.02)^2}{4} = \pi \times 10^{-4}$ m$^2 \approx 3.1416 \times 10^{-4}$ m$^2$.

a) Axial Stress:
$$ \sigma_{axial} = \frac{P}{A} = \frac{100 \times 10^3 \text{ N}}{3.1416 \times 10^{-4} \text{ m}^2} \approx 318.3 \times 10^6 \text{ N/m}^2 = 318.3 \text{ MPa} $$

b) Axial Strain:
$$ \epsilon_{axial} = \frac{\sigma_{axial}}{E} = \frac{318.3 \times 10^6 \text{ N/m}^2}{200 \times 10^9 \text{ N/m}^2} = 1.5915 \times 10^{-3} $$

c) Lateral Strain:
$$ \epsilon_{lateral} = -\nu \times \epsilon_{axial} = -0.3 \times (1.5915 \times 10^{-3}) = -0.4775 \times 10^{-3} $$

d) Change in Diameter:
Let $\Delta d$ be the change in diameter.
$$ \epsilon_{lateral} = \frac{\Delta d}{d} $$
$$ \Delta d = \epsilon_{lateral} \times d = (-0.4775 \times 10^{-3}) \times (20 \text{ mm}) = -9.55 \times 10^{-3} \text{ mm} $$
The diameter decreases by $0.00955$ mm.

---

**Question 2:**
A material has a Young's modulus of $120$ GPa and a shear modulus of $45$ GPa. Calculate its Poisson's ratio and bulk modulus.

**Solution 2:**
Given:
$E = 120$ GPa
$G = 45$ GPa

Calculate Poisson's Ratio ($\nu$):
Using the relationship $E = 2G(1 + \nu)$:
$$ 120 \text{ GPa} = 2 \times 45 \text{ GPa} (1 + \nu) $$
$$ 120 = 90 (1 + \nu) $$
$$ 1 + \nu = \frac{120}{90} = \frac{4}{3} $$
$$ \nu = \frac{4}{3} - 1 = \frac{1}{3} \approx 0.333 $$

Calculate Bulk Modulus ($K$):
Using the relationship $E = 3K(1 - 2\nu)$:
$$ 120 \text{ GPa} = 3K (1 - 2 \times \frac{1}{3}) $$
$$ 120 = 3K (1 - \frac{2}{3}) $$
$$ 120 = 3K (\frac{1}{3}) $$
$$ 120 = K $$
So, $K = 120$ GPa.

---

**Question 3:**
For a given material, Young's modulus $E = 200$ GPa and bulk modulus $K = 160$ GPa. Determine its Poisson's ratio and shear modulus.

**Solution 3:**
Given:
$E = 200$ GPa
$K = 160$ GPa

Calculate Poisson's Ratio ($\nu$):
Using the relationship $E = 3K(1 - 2\nu)$:
$$ 200 \text{ GPa} = 3 \times 160 \text{ GPa} (1 - 2\nu) $$
$$ 200 = 480 (1 - 2\nu) $$
$$ 1 - 2\nu = \frac{200}{480} = \frac{20}{48} = \frac{5}{12} $$
$$ 2\nu = 1 - \frac{5}{12} = \frac{7}{12} $$
$$ \nu = \frac{7}{24} \approx 0.2917 $$

Calculate Shear Modulus ($G$):
Using the relationship $E = 2G(1 + \nu)$:
$$ 200 \text{ GPa} = 2G (1 + \frac{7}{24}) $$
$$ 200 = 2G (\frac{24 + 7}{24}) $$
$$ 200 = 2G (\frac{31}{24}) $$
$$ G = \frac{200 \times 24}{2 \times 31} = \frac{100 \times 24}{31} = \frac{2400}{31} \approx 77.42 \text{ GPa} $$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. Further Reading and References

*   **R.K. Bansal (2012):** Chapter 3 provides comprehensive coverage of stress, strain, elasticity, and the relationships between elastic constants.
*   **S. S. Bhavikatti (2013):** Look for chapters on "Stress, Strain and Elasticity" or "Elastic Constants" for detailed explanations and derivations.
*   **Surendra Singh (2013):** Chapter 4 (Stress, Strain and Elasticity) likely contains the required material.
*   **Rattan (2011):** Chapter 4 ("Stress, Strain and Elasticity") will cover Poisson's Ratio and elastic constants.
*   **R. C. Hibbeler (2018):** Chapter 1 ("Introduction to Stress") and Chapter 7 ("Stress-Strain Relations") are relevant.
*   **Beer & Johnston (2017):** Chapter 5 ("Stress and Strain - Axial Loading") and Chapter 9 ("Stress Transformation") might be useful for derivations.
*   **Popov E (2002):** Chapter 2 ("Stress and Strain") and Chapter 3 ("Properties of Materials") are pertinent.
*   **Pytel & Kiusalaas (2015):** Chapter 2 ("Stress and Strain") will include Poisson's ratio and elastic properties.

---