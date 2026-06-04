---
title: "Discontinuity stress analysis in pressure vessels"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 1: Pressure vessel – Terminology – Types of loads – Types of pressure"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044643fc"
status: "completed"
scrapedAt: "2026-05-20T18:23:32.313Z"
---
## Pressure Vessel and Piping Design - Module 1: Pressure Vessel - Terminology - Types of Loads - Types of Pressure

### Topic: Discontinuity Stress Analysis in Pressure Vessels

**Course Outcome Alignment:** This topic primarily supports **CO1 (Explain the design considerations of various shell type pressure vessels)** by focusing on the complex stress behavior at junctions, which is crucial for understanding overall vessel integrity. It also indirectly supports **CO3** by providing the foundational understanding of stress concentrations that can influence buckling analysis.

**Learning Outcomes:**

*   Understand the concept of discontinuity stresses in pressure vessels.
*   Identify common locations where discontinuity stresses occur.
*   Explain the causes of discontinuity stresses.
*   Discuss the methods for analyzing discontinuity stresses.
*   Understand the impact of discontinuity stresses on the design of pressure vessels.

---

### 1. Introduction to Discontinuity Stresses

Discontinuity stresses are localized stresses that arise in pressure vessels at points where there is a change in geometry, material, or applied loading. These changes disrupt the smooth flow of stress through the component, leading to stress concentrations.

*   **Key Concept:** Unlike the general membrane stresses that are distributed uniformly across a shell, discontinuity stresses are **localized** and can be significantly higher than the average stresses.
*   **Importance:** Ignoring discontinuity stresses can lead to premature failure of pressure vessels due to fatigue, yielding, or brittle fracture, especially at points of stress concentration.

---

### 2. Common Locations of Discontinuity Stresses

Discontinuity stresses are typically found at:

*   **Junctions between different shell geometries:**
    *   Hemispherical head to cylindrical shell
    *   Elliptical head to cylindrical shell
    *   Conical shell to cylindrical shell
    *   Nozzles attached to shells or heads
    *   Dished ends of varying thicknesses
*   **Junctions with attached components:**
    *   Supports (skirts, saddles) attached to the vessel shell
    *   Internal components (baffles, partitions) attached to the shell
*   **Changes in material properties:**
    *   Welded joints where material properties might differ
*   **Areas of concentrated loading:**
    *   Points where external loads are applied.

---

### 3. Causes of Discontinuity Stresses

The primary causes of discontinuity stresses are:

*   **Geometric Discontinuities:** Abrupt changes in curvature or cross-section of the pressure vessel.
    *   **Example:** The transition from a cylinder to a hemisphere creates a significant change in meridional curvature. This change leads to bending moments and shear forces that must be accommodated, resulting in localized stresses.
*   **Load Discontinuities:** Application of external loads or localized internal loads that are not uniformly distributed.
    *   **Example:** A concentrated external load applied by a support can induce bending and shear stresses in the shell, which are superimposed on the membrane stresses.
*   **Material Discontinuities:** Differences in material properties (e.g., Young's modulus, Poisson's ratio) or thermal expansion coefficients at a junction.
    *   **Example:** A vessel made of one material joined to a nozzle made of another material can experience significant stresses due to differential thermal expansion.
*   **Internal Pressure Loading:** While internal pressure primarily generates membrane stresses, the attachment of components or changes in geometry can create localized bending stresses to maintain continuity of deformation.

---

### 4. Understanding the Nature of Discontinuity Stresses

*   **Bending Moments and Shear Forces:** At discontinuities, the shell is forced to deform in a way that is compatible with the adjacent section. This compatibility requirement often leads to the generation of internal bending moments and shear forces, which are absent in simple membrane theory.
*   **Stress Components:** Discontinuity stresses typically involve:
    *   **Circumferential stresses ($\sigma_\theta$)**
    *   **Meridional stresses ($\sigma_\phi$)**
    *   **Shear stresses ($\tau_{\phi\theta}$)**
*   **Superposition:** The total stress at a discontinuity is the sum of the membrane stresses (due to internal pressure and axial loads) and the discontinuity stresses (due to bending and shear).

---

### 5. Methods for Analyzing Discontinuity Stresses

Analyzing discontinuity stresses is more complex than analyzing uniform membrane stresses. Several methods are employed:

**5.1. Analytical Methods (Classical Shell Theory):**

These methods rely on solving differential equations derived from the theory of shells, often using series solutions or specialized functions. They are generally applicable to simpler geometries and loading conditions.

*   **Key Concepts:**
    *   **Beam on Elastic Foundation Analogy:** Some discontinuity problems can be modeled as a beam on an elastic foundation, where the shell acts as the beam and the adjacent shell provides the elastic support.
    *   **Shell Coefficients:** Solutions are often expressed in terms of shell coefficients that account for the stiffness and geometry of the shell.
*   **Textbook Reference:** *Theory and Design of Pressure Vessels* by John F. Harvey extensively covers the classical shell theory for analyzing stresses at discontinuities, particularly for heads attached to cylinders.

**5.2. Finite Element Analysis (FEA):**

This is the most powerful and widely used method for analyzing discontinuity stresses, especially for complex geometries and loading conditions.

*   **Key Concepts:**
    *   **Meshing:** The pressure vessel is divided into a large number of small, interconnected elements (finite elements).
    *   **Element Equations:** Governing equations of mechanics are applied to each element, resulting in a system of algebraic equations.
    *   **Assembly and Solution:** Element equations are assembled into a global system of equations, which is then solved to determine displacements and stresses at nodal points.
*   **Advantages:** Can handle complex geometries, multiple loads, and material variations.
*   **Limitations:** Requires specialized software and expertise. The accuracy depends on the quality of the mesh and the element formulation.
*   **Reference Book:** *Pressure Vessel Design Manual* by Dennis R. Moss emphasizes the practical application of FEA in modern pressure vessel design.

**5.3. Empirical and Semi-Empirical Methods:**

These methods use experimental data or simplified analytical models to estimate discontinuity stresses.

*   **Example:** Charts and tables based on experimental results or simplified analytical solutions are available in design codes and handbooks.
*   **Textbook Reference:** *Process Equipment Design* by Brownell, L. E., and Young, E. H. might provide simplified approaches or references to empirical data for specific discontinuity types.

---

### 6. Impact of Discontinuity Stresses on Design

*   **Increased Thickness Requirements:** At locations of high discontinuity stresses, the shell or head thickness may need to be increased to keep the stresses below allowable limits, even if membrane stresses alone would permit a thinner design.
*   **Reinforcement:** Nozzles and other attachments at discontinuities often require reinforcement pads to compensate for the material removed and to distribute the localized stresses.
*   **Stress Concentrations:** Discontinuity stresses lead to stress concentrations, which are critical for fatigue design. Cyclic loading can cause fatigue failure at these highly stressed regions.
*   **Weld Joint Categories:** The severity of discontinuity stresses can influence the choice of weld joint category and the required weld inspection level.
*   **Design Codes:** Design codes like ASME Boiler and Pressure Vessel Code (BPVC) provide specific rules and guidelines for calculating and limiting discontinuity stresses. They often mandate the use of specific analytical methods or provide simplified calculation procedures for common discontinuities.
*   **Course Outcome Alignment:** This section directly relates to **CO1**, as understanding these impacts is fundamental to the design considerations of various shell-type pressure vessels.

---

### 7. Examples of Discontinuity Analysis

**Example 1: Hemispherical Head to Cylindrical Shell Junction**

*   **Discontinuity:** A change in meridional curvature from zero (cylinder) to maximum (hemisphere).
*   **Stresses:** Internal pressure creates meridional membrane stress in the cylinder and hemisphere. However, at the junction, the change in curvature induces bending stresses and shear stresses to ensure compatibility of deformation. The hoop stress in the cylinder is twice that in the hemisphere. To maintain continuity, bending moments are generated at the junction.
*   **Analysis:** Classical shell theory can be used to calculate the bending moments and shear forces at the junction and the resulting stresses. FEA provides a more accurate and detailed stress distribution.
*   **Design Implication:** The junction area typically requires thicker walls or reinforcement, and these stresses are crucial for fatigue assessment.

**Example 2: Nozzle Attached to a Cylindrical Shell**

*   **Discontinuity:** A circular opening is cut into the cylindrical shell, disrupting the uniform stress distribution.
*   **Stresses:** The presence of the opening causes stress concentrations around the periphery of the nozzle. These stresses are a combination of membrane and bending effects, particularly in the meridional direction.
*   **Analysis:** Analytical methods using shell theory and stress concentration factors can be used for simpler cases. FEA is preferred for complex nozzle geometries or multiple attachments.
*   **Design Implication:** Nozzle necks are often designed with integral reinforcement or attached reinforcement pads to reduce stress concentrations.

---

### 8. Important Points to Remember

*   **Discontinuity stresses are localized and can be significantly higher than membrane stresses.**
*   **They arise due to changes in geometry, loading, or material properties.**
*   **Common locations include junctions between different shell sections and at attachments like nozzles and supports.**
*   **The primary cause is the requirement for deformation compatibility at the discontinuity.**
*   **Analysis methods range from analytical solutions to FEA.**
*   **Discontinuity stresses significantly influence the required thickness, reinforcement, and fatigue life of pressure vessels.**
*   **Design codes provide rules and guidance for managing these stresses.**

---

### Practice Questions and Exercises

**Question 1:**

Define discontinuity stresses in the context of pressure vessels. At which locations are these stresses typically found? (K2)

**Answer 1:**
Discontinuity stresses are localized stresses that occur in pressure vessels at points where there is a change in geometry, material properties, or applied loading. They arise because these changes disrupt the smooth distribution of membrane stresses, leading to the development of bending moments and shear forces to maintain continuity of deformation. These stresses are typically found at junctions between different shell geometries (e.g., cylinder-to-hemisphere), at the attachment of nozzles, and where external loads are applied by supports.

**Question 2:**

Explain the primary causes of discontinuity stresses in a pressure vessel head attached to a cylindrical shell. (K2)

**Answer 2:**
The primary causes of discontinuity stresses at the junction of a pressure vessel head and a cylindrical shell are:
1.  **Geometric Discontinuity:** The change in curvature from the cylinder (zero curvature) to the head (significant curvature, e.g., hemispherical, ellipsoidal) creates a mismatch in the stress field, inducing bending and shear stresses.
2.  **Difference in Membrane Stresses:** Internal pressure results in different membrane stress levels in the cylinder and the head (e.g., hoop stress in a cylinder is twice the meridional stress in a hemisphere of the same thickness). To maintain continuity, bending and shear are required at the junction.

**Question 3:**

Briefly describe two methods used for analyzing discontinuity stresses in pressure vessels. (K2)

**Answer 3:**
Two common methods for analyzing discontinuity stresses are:
1.  **Analytical Methods (Classical Shell Theory):** These methods involve solving the differential equations of shell theory, often using techniques like beam on elastic foundation analogy or series solutions. They are generally applicable to simpler geometries and loading conditions.
2.  **Finite Element Analysis (FEA):** This is a numerical method where the vessel is divided into small elements. The behavior of each element is analyzed, and the results are assembled to determine the overall stress distribution. FEA is highly versatile and can handle complex geometries and loadings accurately.

**Question 4:**

A cylindrical pressure vessel with a hemispherical head is subjected to internal pressure. The hoop stress in the cylinder is $\sigma_h$ and the meridional stress in the hemisphere is $\sigma_m$. If $\sigma_h = 2\sigma_m$, what is the implication of this difference at the junction? (K2)

**Answer 4:**
The difference in membrane stress levels ($\sigma_h = 2\sigma_m$) at the junction between the cylinder and the hemisphere means that the stresses are not directly compatible. The higher hoop stress in the cylinder and the different meridional stress distribution in the hemisphere require the shell to deform in a compatible manner. This incompatibility of membrane stresses at the junction leads to the generation of bending moments and shear forces, which in turn cause localized discontinuity stresses (bending and shear stresses) at the junction. These discontinuity stresses must be analyzed and accounted for in the design to ensure the structural integrity of the vessel.

**Question 5 (Application/Analysis - K3 Alignment):**

Consider a cylindrical pressure vessel with a nozzle attached. Why is reinforcement often required at the nozzle attachment? (K2, with implications for K3)

**Answer 5:**
Reinforcement is often required at the nozzle attachment to a cylindrical pressure vessel for the following reasons:
1.  **Material Removal:** Cutting a hole for the nozzle removes material from the vessel shell, reducing its load-carrying capacity in that localized area.
2.  **Stress Concentration:** The abrupt change in geometry at the nozzle opening causes stress concentrations. The stress levels around the nozzle periphery can be significantly higher than the average membrane stresses in the shell.
3.  **Load Transfer:** The nozzle experiences loads from the connected piping and from the internal pressure acting on the nozzle's internal area. These loads need to be transferred effectively to the vessel shell.

Reinforcement (e.g., a reinforcement pad) compensates for the removed material and helps to redistribute the localized stresses, reducing the peak stress concentrations. This is crucial for preventing premature failure due to yielding, fatigue, or brittle fracture, especially under cyclic loading conditions. This understanding is fundamental to designing supports and attachments as per **CO3**.

---

This module provides the foundational understanding of stress behavior in pressure vessels, particularly at critical junctions. The subsequent modules will build upon this by applying these concepts to specific design scenarios and loadings.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
