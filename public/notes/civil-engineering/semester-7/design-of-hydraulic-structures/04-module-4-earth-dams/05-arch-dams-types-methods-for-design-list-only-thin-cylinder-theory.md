---
title: "Arch dams-types, methods for design (list only)-Thin cylinder theory"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 4: Earth dams"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81171c"
status: "completed"
scrapedAt: "2026-05-20T18:57:57.496Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 4: Earth Dams

## Topic: Arch Dams - Types, Methods for Design (List Only) - Thin Cylinder Theory

This module focuses on different types of dams, and in this topic, we will delve into Arch Dams, specifically their types, general design methodologies, and the foundational thin cylinder theory used in their analysis.

---

### Learning Outcomes:

*   Understand the fundamental principle behind the functioning of arch dams.
*   Identify and describe different types of arch dams.
*   List the common methods employed in the design of arch dams.
*   Explain the application and limitations of the thin cylinder theory in arch dam analysis.

---

### 1. Fundamental Principle of Arch Dams

The primary principle behind an arch dam is to transfer the hydrostatic pressure of the impounded water to the abutments (the sides of the gorge or valley) through the arch action.

*   **Arch Action:** The dam is curved in plan, forming a series of arches. When water pushes against the upstream face, these arches bend and transfer the load horizontally to the canyon walls.
*   **Structural Behavior:** The abutments, being rigid, resist this horizontal thrust, effectively holding the dam in place. The dam material (usually concrete) experiences primarily compressive stresses due to this arch action.
*   **Efficiency:** Arch dams are particularly efficient in narrow, steep-sided valleys with strong rock foundations capable of withstanding the concentrated thrust.

---

### 2. Types of Arch Dams

Arch dams are classified based on their curvature and structural characteristics.

*   **Single-Curvature Arch Dams:**
    *   **Description:** The arch is curved only in the horizontal plane. The upstream and downstream faces are vertical or have a slight batter.
    *   **Advantages:** Simpler to construct, less material required compared to double-curvature dams.
    *   **Disadvantages:** Less efficient in distributing stresses and can be prone to tensile stresses.
    *   **Example:** Early arch dams often featured this design.

*   **Double-Curvature Arch Dams (Constant-Angle Arch Dams):**
    *   **Description:** The arch is curved in both the horizontal and vertical planes. The vertical curvature is typically such that the angle subtended by the arch at the center remains constant from the crown to the abutment.
    *   **Advantages:** Highly efficient in stress distribution, with water pressure being transmitted predominantly as compression. More economical in terms of material usage for a given span.
    *   **Disadvantages:** More complex to design and construct.
    *   **Example:** Hoover Dam (USA), Kariba Dam (Zambia/Zimbabwe), Grand Coulee Dam (USA - though primarily a gravity dam, its arch features are notable).

*   **Cubic Arch Dams:**
    *   **Description:** These dams have a more complex curved geometry that follows a cubic parabolic form in both horizontal and vertical planes.
    *   **Advantages:** Optimized for stress distribution, minimizing tensile stresses.
    *   **Disadvantages:** Very complex to design and analyze, requiring advanced computational methods.
    *   **Example:** Less common due to complexity, primarily used in research or for highly specific site conditions.

*   **Vault Dams:**
    *   **Description:** Similar to double-curvature arch dams, but the curvature is designed to efficiently transfer loads to specific points of support.
    *   **Advantages:** Can be efficient in specific geological formations.
    *   **Disadvantages:** Design can be site-specific and complex.

---

### 3. Methods for Design of Arch Dams (List Only)

The design of arch dams involves ensuring the stability and integrity of the structure under various loading conditions. The methods range from simplified analytical approaches to sophisticated numerical analyses.

*   **Thin Cylinder Theory:** (Discussed in detail below)
*   **Trial Load Twist Method:** A more advanced analytical method that considers the deformation of the arch ring and the abutments.
*   **Embodying Methods (e.g., Relaxation Methods):** Analytical techniques used to solve complex stress distribution problems.
*   **Finite Element Method (FEM):** A powerful numerical technique for analyzing the behavior of complex structures under various loads. It allows for detailed modeling of dam geometry, material properties, and boundary conditions.
*   **Finite Difference Method (FDM):** Another numerical method used for solving partial differential equations that govern the behavior of the dam.
*   **Photothermoelasticity:** An experimental method used to determine stress distribution by observing patterns of light passing through a model of the dam.
*   **Model Testing (Physical Models):** Building scaled physical models of the dam and testing them under simulated conditions to observe behavior and stress distribution.

---

### 4. Thin Cylinder Theory for Arch Dams

The thin cylinder theory is a fundamental and simplified approach used to analyze the stresses in the arch ring of an arch dam, particularly for double-curvature dams. It treats the arch ring as a thin segment of a cylinder.

#### **4.1. Basic Assumptions:**

*   **Thin Shell:** The arch ring is considered to be very thin relative to its radius, allowing for simplifications in stress calculations.
*   **Uniform Material:** The dam material (concrete) is assumed to be homogeneous, isotropic, and linearly elastic.
*   **Hydrostatic Pressure:** The primary load considered is the hydrostatic pressure exerted by the water.
*   **Negligible Tensile Stresses:** The theory primarily focuses on compressive stresses due to arch action, assuming tensile stresses are either negligible or handled by other design considerations.
*   **Radial Pressure:** The hydrostatic pressure is assumed to act radially inwards on the arch.
*   **No Radial Deformation:** The deformation in the radial direction is considered negligible in the simplified model.
*   **Constant Angle Arch Assumption:** The theory is most applicable to constant-angle arch dams where the angle subtended by the arch at the center is constant.

#### **4.2. Derivation and Application:**

The thin cylinder theory, adapted from the analysis of pressure vessels, can be used to estimate the primary stresses in an arch dam segment.

Consider a small segment of the arch dam subtending an angle $d\theta$ at the center. Let:

*   $R$ be the radius of the arch at the center line.
*   $t$ be the thickness of the arch at the center line.
*   $p$ be the hydrostatic pressure at a depth $h$ from the water surface.
*   $\gamma$ be the unit weight of water.
*   $w$ be the width of the arch rib perpendicular to the plane of the arch.

The hydrostatic pressure $p$ at a depth $h$ is given by:
$p = \gamma h$

The radial force acting on this segment due to the water pressure can be analyzed. The resultant radial force on the segment $d\theta$ is approximately $p \cdot w \cdot R \cdot d\theta$.

This radial force is resisted by the tangential forces developed in the arch ring. The horizontal component of the tangential forces provides the support.

For a thin cylinder under internal pressure, the hoop stress (tangential stress) $\sigma_h$ is given by:
$\sigma_h = \frac{pr}{t}$

In the context of an arch dam, $r$ is replaced by the radius of the arch, $R$. The pressure $p$ varies with depth.

**Simplified Stress Calculation for a Single Arch Element:**

Let's consider a horizontal slice of the arch dam at a depth $h$. The pressure at this depth is $p = \gamma h$.

The horizontal component of the hydrostatic force acting on a segment of the arch subtending an angle $2\alpha$ is $2 \cdot p \cdot R \cdot \sin\alpha \cdot w$, where $w$ is the width of the arch. This force is resisted by the horizontal thrust $H$ developed by the arch.

The tangential stress $\sigma_t$ in the arch can be approximated as:
$\sigma_t \approx \frac{\text{Radial Thrust per unit width}}{\text{Area per unit width}} = \frac{p \cdot R \cdot \sin\alpha}{t \cdot w}$ (This is a simplified representation; a more rigorous analysis is required).

A more direct application of thin cylinder theory often refers to the radial and tangential stresses in a pressurized cylinder. If we consider a horizontal slice of the arch dam as a segment of a ring under pressure, the primary stress is the hoop stress which resists the outward radial pressure.

For a thin cylinder subjected to internal pressure $p$, the hoop stress $\sigma_h$ is:
$\sigma_h = \frac{pR}{t}$

This hoop stress represents the compressive stress acting tangentially within the arch ring to counteract the inward radial pressure of the water.

**Limitations of the Thin Cylinder Theory:**

*   **Neglects Radial Stress:** It primarily calculates tangential stresses and often neglects radial stresses, which can be significant in thick-walled structures.
*   **Ignores Joint Action:** It doesn't account for the complex interaction at the abutments and the actual stress distribution which is influenced by the abutment conditions.
*   **Simplistic Geometry:** It assumes a perfect cylindrical shape and uniform thickness, which may not be the case in real arch dams.
*   **Ignores Vertical Curvature:** For double-curvature dams, the vertical curvature and its effect on stress distribution are not fully captured.
*   **Does not account for temperature effects or foundation deformation.**
*   **Does not directly address radial or shear stresses, which can be critical.**

**Key Takeaway for Thin Cylinder Theory:**

The thin cylinder theory provides a **first-order approximation** of the tangential compressive stresses in an arch dam by treating the arch ring as a pressurized thin cylinder. It's a useful starting point for preliminary design but is insufficient for a complete and accurate analysis of arch dams, especially double-curvature ones. More sophisticated methods like the Finite Element Method are essential for final design.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the fundamental principle by which an arch dam resists the hydrostatic pressure of the impounded water?

**Answer 1:**
An arch dam resists hydrostatic pressure through **arch action**, transferring the thrust horizontally to the rigid abutments (canyon walls) via compressive stresses in the dam material.

**Question 2:**

Name two types of arch dams and briefly describe their key geometric characteristic.

**Answer 2:**
1.  **Single-Curvature Arch Dam:** Curved only in the horizontal plane.
2.  **Double-Curvature Arch Dam:** Curved in both the horizontal and vertical planes.

**Question 3:**

List three methods used for the design of arch dams (other than the thin cylinder theory).

**Answer 3:**
1.  Trial Load Twist Method
2.  Finite Element Method (FEM)
3.  Model Testing (Physical Models)

**Question 4:**

According to the thin cylinder theory, what is the approximate formula for hoop stress ($\sigma_h$) in a thin cylinder of radius $R$ and thickness $t$ subjected to internal pressure $p$?

**Answer 4:**
$\sigma_h = \frac{pR}{t}$

**Question 5:**

Discuss one major limitation of using the thin cylinder theory for the design of arch dams.

**Answer 5:**
One major limitation is that the thin cylinder theory **neglects the effect of radial stress and shear stress**, which can be significant, and it **does not accurately account for the complex interaction at the abutments** or the influence of the dam's vertical curvature.

---

### 6. Important Points to Remember

*   **Arch dams are most suitable for narrow, steep-sided valleys with strong rock abutments.**
*   **The primary stress in an arch dam due to water pressure is compression.**
*   **Double-curvature arch dams are more structurally efficient than single-curvature dams.**
*   **The thin cylinder theory is a simplified analytical method for estimating tangential stresses and is a starting point for design.**
*   **For accurate and comprehensive design, advanced numerical methods like the Finite Element Method are essential.**
*   **Foundation conditions and abutment stability are critical design considerations for arch dams.**
*   **Temperature variations and seepage can also induce stresses and require consideration in the design.**
