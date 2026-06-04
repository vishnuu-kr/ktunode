---
title: "Introduction to analysis of deformable bodies."
subject: "MECHANICS OF SOLIDS"
module: "Module 1: Introduction to analysis of deformable bodies."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cec"
status: "completed"
scrapedAt: "2026-05-20T17:50:59.928Z"
---
# Mechanics of Solids: Module 1 - Introduction to Analysis of Deformable Bodies

## Table of Contents

1.  [Introduction to Deformable Bodies](#introduction-to-deformable-bodies)
    *   [1.1 What are Deformable Bodies?](#11-what-are-deformable-bodies)
    *   [1.2 Idealizations in Mechanics of Solids](#12-idealizations-in-mechanics-of-solids)
    *   [1.3 Fundamental Concepts](#13-fundamental-concepts)
        *   [1.3.1 Stress](#131-stress)
        *   [1.3.2 Strain](#132-strain)
        *   [1.3.3 Hooke's Law](#133-hookes-law)
        *   [1.3.4 Elasticity and Plasticity](#134-elasticity-and-plasticity)
2.  [Types of Forces and Their Effects](#2-types-of-forces-and-their-effects)
    *   [2.1 Axial Force](#21-axial-force)
    *   [2.2 Shear Force](#22-shear-force)
    *   [2.3 Bending Moment](#23-bending-moment)
    *   [2.4 Torsional Moment](#24-torsional-moment)
3.  [Analysis of Simple Structures](#3-analysis-of-simple-structures)
    *   [3.1 Statically Determinate vs. Indeterminate Structures](#31-statically-determinate-vs-indeterminate-structures)
    *   [3.2 Free Body Diagrams (FBDs)](#32-free-body-diagrams-fbds)
    *   [3.3 Equilibrium Equations](#33-equilibrium-equations)
4.  [Key Concepts for Course Outcomes](#4-key-concepts-for-course-outcomes)
    *   [4.1 Relating to CO1: Stresses and Strains](#41-relating-to-co1-stresses-and-strains)
    *   [4.2 Relating to CO2: Torsion and SFD/BMD](#42-relating-to-co2-torsion-and-sfd/bmd)
    *   [4.3 Relating to CO3: Stresses and Deflections in Beams](#43-relating-to-co3-stresses-and-deflections-in-beams)
    *   [4.4 Relating to CO4: Principal Stresses and Column Strength](#44-relating-to-co4-principal-stresses-and-column-strength)
5.  [Important Points to Remember](#5-important-points-to-remember)
6.  [Practice Questions and Exercises](#6-practice-questions-and-exercises)
7.  [References](#7-references)

---

## 1. Introduction to Deformable Bodies

### 1.1 What are Deformable Bodies?

A body that changes its shape or size under the action of external forces is called a **deformable body**. In reality, all bodies deform to some extent when subjected to loads. The field of Mechanics of Solids (also known as Strength of Materials) deals with the relationship between applied forces and the resulting deformation and stresses within these bodies.

**Reference:**
*   **Bansal (2012), Chapter 1:** Introduces the concept of deformable bodies and the scope of Mechanics of Solids.
*   **Hibbeler (2018), Chapter 1:** Provides a foundational understanding of stress, strain, and material behavior.

### 1.2 Idealizations in Mechanics of Solids

To simplify analysis, we often make certain idealizations:

*   **Rigid Body Assumption (for Statics):** In statics, we often assume bodies are rigid, meaning they do not deform. This simplifies force analysis.
*   **Deformable Body Assumption (for Strength of Materials):** In Mechanics of Solids, we recognize that bodies do deform. The focus is on quantifying this deformation and the internal stresses that cause it.
*   **Continuum Hypothesis:** We assume that the material is continuous, meaning it is made up of an infinite number of particles and properties are defined at every point. This allows us to use differential calculus.
*   **Homogeneous and Isotropic Materials:**
    *   **Homogeneous:** Material properties are the same at every point within the body.
    *   **Isotropic:** Material properties are the same in all directions. Many engineering materials are anisotropic (e.g., wood, composite materials), but we often start with isotropic assumptions for simplicity.

### 1.3 Fundamental Concepts

#### 1.3.1 Stress (σ or τ)

Stress is defined as the **internal resistance force per unit area** that a material offers to an externally applied load. It is a measure of the intensity of internal forces acting within a body.

*   **Types of Stress:**
    *   **Normal Stress (σ):** Occurs when forces act perpendicular to a surface.
        *   **Tensile Stress:** Caused by pulling forces, tends to elongate the body. Positive.
        *   **Compressive Stress:** Caused by pushing forces, tends to shorten the body. Negative.
        *   **Formula:** $\sigma = \frac{P}{A}$
            *   $P$: Axial force (N)
            *   $A$: Cross-sectional area (m²)
            *   $\sigma$: Normal Stress (Pa or N/m² or MPa)
    *   **Shear Stress (τ):** Occurs when forces act parallel to a surface, tending to cause sliding or shearing.
        *   **Formula:** $\tau = \frac{V}{A}$
            *   $V$: Shear force (N)
            *   $A$: Area on which the shear force acts (m²)
            *   $\tau$: Shear Stress (Pa or N/m² or MPa)

**Example (Normal Stress):** A steel rod of 20 mm diameter is subjected to a tensile load of 10,000 N. Calculate the tensile stress.
*   Area $A = \frac{\pi}{4} d^2 = \frac{\pi}{4} (20 \text{ mm})^2 = \frac{\pi}{4} (0.02 \text{ m})^2 = 3.1416 \times 10^{-4} \text{ m}^2$
*   $\sigma = \frac{10000 \text{ N}}{3.1416 \times 10^{-4} \text{ m}^2} = 31.83 \times 10^6 \text{ N/m}^2 = 31.83 \text{ MPa}$

**Reference:**
*   **Bansal (2012), Chapter 2:** Detailed explanation of stress and its types.
*   **Bhavikatti (2013), Chapter 1:** Introduction to stress concepts.
*   **Singh (2013), Chapter 1:** Covers axial stress.
*   **Hibbeler (2018), Chapter 1:** Defines normal and shear stress.

#### 1.3.2 Strain (ε or γ)

Strain is a measure of the **deformation** of a body per unit of its original size. It is a dimensionless quantity.

*   **Types of Strain:**
    *   **Normal Strain (ε):** Occurs due to normal stress. It is the change in length per unit original length.
        *   **Formula:** $\epsilon = \frac{\Delta L}{L_0}$
            *   $\Delta L$: Change in length (m)
            *   $L_0$: Original length (m)
            *   $\epsilon$: Normal Strain (dimensionless)
        *   Tensile strain is positive (elongation), compressive strain is negative (shortening).
    *   **Shear Strain (γ):** Occurs due to shear stress. It is the change in angle (in radians) between two initially perpendicular lines.
        *   **Formula:** $\gamma = \tan \theta \approx \theta$ (for small deformations)
            *   $\theta$: Angle of deformation (radians)
            *   $\gamma$: Shear Strain (dimensionless)

**Example (Normal Strain):** The rod in the previous example elongates by 0.05 mm. Calculate the normal strain.
*   $\Delta L = 0.05 \text{ mm} = 5 \times 10^{-5} \text{ m}$
*   $L_0$ (original length of the rod) needs to be known. Let's assume $L_0 = 2 \text{ m}$.
*   $\epsilon = \frac{5 \times 10^{-5} \text{ m}}{2 \text{ m}} = 2.5 \times 10^{-5}$ (dimensionless)

**Reference:**
*   **Bansal (2012), Chapter 2:** Defines strain and its types.
*   **Bhavikatti (2013), Chapter 1:** Introduction to strain concepts.
*   **Singh (2013), Chapter 1:** Covers axial strain.
*   **Hibbeler (2018), Chapter 1:** Defines normal and shear strain.

#### 1.3.3 Hooke's Law

Hooke's Law states that for most materials within their **elastic limit**, stress is directly proportional to strain.

*   **For Normal Stress:** $\sigma = E \epsilon$
    *   $E$: Young's Modulus (or Modulus of Elasticity) - a material property representing stiffness in tension or compression. Units: Pa or GPa.
*   **For Shear Stress:** $\tau = G \gamma$
    *   $G$: Shear Modulus (or Modulus of Rigidity) - a material property representing stiffness in shear. Units: Pa or GPa.

**Important Relationship:** For isotropic materials, $E = 2G(1 + \nu)$, where $\nu$ is Poisson's Ratio.
*   **Poisson's Ratio (ν):** The ratio of lateral strain to axial strain. $\nu = -\frac{\epsilon_{lateral}}{\epsilon_{axial}}$. It is a dimensionless material property.

**Reference:**
*   **Bansal (2012), Chapter 2:** Details Hooke's Law and Poisson's Ratio.
*   **Bhavikatti (2013), Chapter 1:** Introduces elastic constants.
*   **Singh (2013), Chapter 1:** Explains Hooke's Law.
*   **Hibbeler (2018), Chapter 1:** Discusses the relationship between stress, strain, and elastic constants.

#### 1.3.4 Elasticity and Plasticity

*   **Elasticity:** The ability of a material to return to its original shape and size after the removal of the applied load. Deformation is temporary.
*   **Plasticity:** The ability of a material to undergo permanent deformation without fracturing after the removal of the applied load. The material does not return to its original shape.

**Elastic Limit:** The maximum stress that a material can withstand without permanent deformation. Beyond this limit, the material enters the plastic region.

**Stress-Strain Curve:** A graphical representation of a material's response to tensile or compressive stress. Key points include:
*   Proportional Limit
*   Elastic Limit
*   Yield Strength
*   Ultimate Tensile Strength
*   Fracture Strength

**Reference:**
*   **Bansal (2012), Chapter 1 & 2:** Discusses material properties, elastic limit, and the stress-strain curve.
*   **Singh (2013), Chapter 1:** Covers elastic and plastic behavior.
*   **Hibbeler (2018), Chapter 1:** Explains the stress-strain diagram and material behavior.

---

## 2. Types of Forces and Their Effects

In Mechanics of Solids, we analyze how different types of forces cause internal stresses and deformations.

### 2.1 Axial Force

An axial force is a force acting **perpendicular** to the cross-sectional area of a member, causing either tension or compression.

*   **Effect:** Uniform normal stress across the cross-section (for prismatic bars).
*   **Stress:** $\sigma = P/A$
*   **Deformation:** Elongation or shortening. $\Delta L = \frac{PL}{AE}$

**Reference:**
*   **Bansal (2012), Chapter 2:** Analysis of axially loaded members.
*   **Singh (2013), Chapter 1:** Axial force and its effect.
*   **Hibbeler (2018), Chapter 1:** Axial load and stress.

### 2.2 Shear Force

A shear force is a force acting **parallel** to the cross-sectional area of a member, tending to cause sliding or shearing.

*   **Effect:** Shear stress across the cross-section.
*   **Stress:** $\tau = V/A$ (This is an average shear stress for simple cases)
*   **Deformation:** Angular distortion (change in angle).

**Reference:**
*   **Bansal (2012), Chapter 2 & 6:** Shear stress and shear force diagrams.
*   **Bhavikatti (2013), Chapter 1:** Shear stress.
*   **Hibbeler (2018), Chapter 1:** Shear stress.

### 2.3 Bending Moment

A bending moment is a moment (force times perpendicular distance) applied to a beam or shaft that causes it to bend.

*   **Effect:** Non-uniform normal stress across the cross-section. The stress is zero at the neutral axis and maximum at the extreme fibers.
    *   **Bending Stress Formula:** $\sigma_x = \frac{My}{I}$
        *   $M$: Bending Moment at the section (N-mm or N-m)
        *   $y$: Distance from the neutral axis to the point of interest (mm or m)
        *   $I$: Moment of Inertia of the cross-section about the neutral axis (mm⁴ or m⁴)
*   **Deformation:** Curvature of the beam.

**Reference:**
*   **Bansal (2012), Chapter 6:** Bending stress in beams.
*   **Bhavikatti (2013), Chapter 2:** Bending stresses.
*   **Singh (2013), Chapter 2:** Bending stress in beams.
*   **Hibbeler (2018), Chapter 5:** Flexural stress.

### 2.4 Torsional Moment (Torque)

A torsional moment (or torque) is a moment applied about the longitudinal axis of a shaft, causing it to twist.

*   **Effect:** Shear stress across the cross-section of the shaft. The shear stress is zero at the center and maximum at the outer surface.
    *   **Torsional Shear Stress Formula:** $\tau = \frac{Tr}{J}$
        *   $T$: Torque applied (N-mm or N-m)
        *   $r$: Radial distance from the center of the shaft (mm or m)
        *   $J$: Polar Moment of Inertia of the cross-section (mm⁴ or m⁴)
*   **Deformation:** Twisting angle. $\phi = \frac{TL}{GJ}$

**Reference:**
*   **Bansal (2012), Chapter 5:** Torsion of shafts.
*   **Bhavikatti (2013), Chapter 3:** Torsion.
*   **Singh (2013), Chapter 3:** Torsion of shafts.
*   **Hibbeler (2018), Chapter 3:** Torsion.

---

## 3. Analysis of Simple Structures

### 3.1 Statically Determinate vs. Indeterminate Structures

*   **Statically Determinate Structures:** Structures where all unknown forces and moments can be determined using only the equations of static equilibrium.
    *   **Number of Equilibrium Equations ≥ Number of Unknowns.**
*   **Statically Indeterminate Structures:** Structures where the number of unknown forces and moments exceeds the number of equilibrium equations. To solve these, we need to consider the deformation (compatibility equations) and material properties.
    *   **Number of Equilibrium Equations < Number of Unknowns.**

**Reference:**
*   **Bansal (2012), Chapter 1 & 6:** Discusses the concept of determinacy in structures.
*   **Bhavikatti (2013), Chapter 1 & 2:** Briefly touches upon this.
*   **Hibbeler (2018), Chapter 1 & 5:** Introduces static analysis and determinacy.

### 3.2 Free Body Diagrams (FBDs)

An FBD is a diagram that isolates a body or part of a body and shows all external forces and moments acting on it. It's a crucial tool for applying equilibrium equations.

**Steps to Draw an FBD:**
1.  Isolate the body/component.
2.  Show all applied external forces (loads).
3.  Show all support reactions.
4.  Show all internal forces and moments at cut sections if needed.

**Reference:**
*   **Bansal (2012), Chapter 1:** Fundamental concepts.
*   **Hibbeler (2018), Chapter 1:** Importance of FBDs.

### 3.3 Equilibrium Equations

These are fundamental laws of physics that state a body is in equilibrium (not accelerating) if the net force and net moment acting on it are zero.

*   **For 2D:**
    *   $\sum F_x = 0$ (Sum of forces in the x-direction is zero)
    *   $\sum F_y = 0$ (Sum of forces in the y-direction is zero)
    *   $\sum M_O = 0$ (Sum of moments about any point O is zero)
*   **For 3D:**
    *   $\sum F_x = 0$, $\sum F_y = 0$, $\sum F_z = 0$
    *   $\sum M_x = 0$, $\sum M_y = 0$, $\sum M_z = 0$

**Reference:**
*   **Bansal (2012), Chapter 1:** Basic equilibrium equations.
*   **Hibbeler (2018), Chapter 1:** Static equilibrium.

---

## 4. Key Concepts for Course Outcomes

### 4.1 Relating to CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3)

*   **Axial Loading:** Calculating normal stress ($\sigma = P/A$) and strain ($\epsilon = \Delta L/L_0$) under axial tension or compression.
*   **Shear Loading:** Calculating average shear stress ($\tau = V/A$).
*   **Bending:** Calculating normal stress due to bending ($\sigma = My/I$). This is a key aspect of CO3 as well.
*   **Torsion:** Calculating shear stress due to torsion ($\tau = Tr/J$). This is key for CO2.
*   **Thermal Effects:**
    *   **Thermal Strain:** $\epsilon_{thermal} = \alpha \Delta T$
        *   $\alpha$: Coefficient of thermal expansion (material property)
        *   $\Delta T$: Change in temperature
    *   **Thermal Stress:** Arises when thermal expansion or contraction is **restrained**. $\sigma_{thermal} = E \epsilon_{total} = E (\epsilon_{applied} - \epsilon_{thermal})$. If no deformation is allowed, $\sigma_{thermal} = E \alpha \Delta T$.

**Example (Thermal Stress):** A steel rod ($E=200$ GPa, $\alpha=12 \times 10^{-6} /^\circ\text{C}$) of length 1 m is heated from $20^\circ\text{C}$ to $70^\circ\text{C}$. If the rod is rigidly fixed at both ends, calculate the thermal stress.
*   $\Delta T = 70^\circ\text{C} - 20^\circ\text{C} = 50^\circ\text{C}$
*   Since the ends are fixed, the total strain $\epsilon_{total} = 0$.
*   The free thermal expansion would cause a strain $\epsilon_{thermal} = \alpha \Delta T = (12 \times 10^{-6} /^\circ\text{C})(50^\circ\text{C}) = 600 \times 10^{-6}$.
*   For the rod to remain at zero strain, an equal and opposite strain must be induced by stress.
*   $\sigma_{thermal} = E \epsilon_{thermal} = (200 \times 10^9 \text{ Pa})(600 \times 10^{-6}) = 120 \times 10^6 \text{ Pa} = 120 \text{ MPa}$. This stress will be compressive because the heating tries to expand the rod, but it's constrained.

**Reference:**
*   **Bansal (2012), Chapter 2 & 7:** Thermal stresses.
*   **Bhavikatti (2013), Chapter 1:** Thermal effects.
*   **Singh (2013), Chapter 1:** Thermal stresses.
*   **Hibbeler (2018), Chapter 1:** Thermal strain and stress.

### 4.2 Relating to CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams (Knowledge Level: K4)

*   **Torsion of Circular Bars:**
    *   **Shear Stress:** $\tau = \frac{Tr}{J}$. Distribution is linear from zero at the center to maximum at the surface.
    *   **Shear Strain:** Related to stress by $\tau = G \gamma$.
    *   **Angle of Twist:** $\phi = \frac{TL}{GJ}$. The total angle of twist is the integral of angular strain along the length.
    *   **Polar Moment of Inertia (J):** For a solid circular shaft of diameter $d$ or radius $r$, $J = \frac{\pi d^4}{32} = \frac{\pi r^4}{2}$. For a hollow shaft (outer radius $R$, inner radius $r$), $J = \frac{\pi}{32}(D^4 - d^4) = \frac{\pi}{2}(R^4 - r^4)$.
*   **Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD):**
    *   These are graphical representations of the variation of shear force and bending moment along the length of a beam.
    *   **Key Relationships:**
        *   $\frac{d V}{d x} = w(x)$ (Rate of change of shear force equals the distributed load)
        *   $\frac{d M}{d x} = V(x)$ (Rate of change of bending moment equals the shear force)
    *   **Drawing SFD/BMD:** Requires applying equilibrium equations and considering the effects of concentrated loads, distributed loads, and moments.

**Example (SFD/BMD):** Consider a simply supported beam of length L with a concentrated load P at its center.
*   **Reactions:** $R_A = R_B = P/2$
*   **SFD:**
    *   From A to center: Constant shear force of $+P/2$.
    *   At the center: Shear drops by P (from $+P/2$ to $-P/2$).
    *   From center to B: Constant shear force of $-P/2$.
*   **BMD:**
    *   At supports (A and B): Bending moment is zero.
    *   From A to center: Moment increases linearly from 0 to $+PL/4$ (at the center).
    *   From center to B: Moment decreases linearly from $+PL/4$ to 0.
    *   Maximum bending moment is $+PL/4$ at the center.

**Reference:**
*   **Bansal (2012), Chapter 5 & 6:** Torsion and SFD/BMD.
*   **Bhavikatti (2013), Chapter 2 & 3:** SFD/BMD and Torsion.
*   **Singh (2013), Chapter 2 & 3:** SFD/BMD and Torsion.
*   **Hibbeler (2018), Chapter 4 & 5:** Shear and bending diagrams, torsion.

### 4.3 Relating to CO3: Determine the stresses and deflections in beams subjected to transverse loads (Knowledge Level: K3)

*   **Stresses in Beams:** Primarily normal stress due to bending, $\sigma_x = \frac{My}{I}$.
*   **Deflections in Beams:** The displacement of a beam from its original unloaded position.
    *   **Methods to calculate deflection:**
        *   **Double Integration Method:** Based on the differential equation of the elastic curve: $EI \frac{d^2y}{dx^2} = M(x)$. Requires integrating twice and applying boundary conditions.
        *   **Moment-Area Method:** Uses the properties of the bending moment diagram.
        *   **Conjugate Beam Method:** An analogous method.
        *   **Superposition:** For multiple loads, the total deflection is the sum of deflections due to each load.
    *   **Key Concepts:**
        *   **Elastic Curve:** The deformed shape of the beam.
        *   **Boundary Conditions:** Conditions at supports (e.g., deflection is zero at a fixed support, slope is zero at a fixed support, deflection is zero at a simple support).
    *   **Example Formulas (for standard cases):**
        *   Simply supported beam with a point load P at center: Maximum deflection $\delta_{max} = \frac{PL^3}{48EI}$ at center.
        *   Cantilever beam with a point load P at free end: Maximum deflection $\delta_{max} = \frac{PL^3}{3EI}$ at free end.

**Reference:**
*   **Bansal (2012), Chapter 7:** Deflection of beams.
*   **Bhavikatti (2013), Chapter 2:** Deflection of beams.
*   **Singh (2013), Chapter 2:** Deflection of beams.
*   **Hibbeler (2018), Chapter 5:** Deflection of beams.

### 4.4 Relating to CO4: Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns (Knowledge Level: K4)

*   **Principal Stresses and Planes:**
    *   At any point in a stressed body, there exist planes on which the shear stress is zero. The normal stresses on these planes are called **principal stresses** ($\sigma_1, \sigma_2$).
    *   **Mohr's Circle:** A graphical method to determine principal stresses, maximum shear stress, and the orientation of planes.
        *   For a 2D stress state at a point $(\sigma_x, \sigma_y, \tau_{xy})$:
            *   Center of the circle: $(\frac{\sigma_x + \sigma_y}{2}, 0)$
            *   Radius of the circle: $R = \sqrt{(\frac{\sigma_x - \sigma_y}{2})^2 + \tau_{xy}^2}$
            *   Principal stresses: $\sigma_1, \sigma_2 = \frac{\sigma_x + \sigma_y}{2} \pm R$
            *   Maximum shear stress: $\tau_{max} = R$
    *   **Analytical Method:** Using stress transformation equations derived from equilibrium.
        *   $\sigma_{n} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$
        *   $\tau_{nt} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$
        *   Principal stresses occur when $\tau_{nt} = 0$.

*   **Strength of Columns:**
    *   **Column:** A structural member subjected to axial compressive load.
    *   **Buckling:** A sudden lateral instability of a column under compression, even if the stress is below the yield strength.
    *   **Euler's Formula for Buckling Load:** $P_{cr} = \frac{\pi^2 EI}{(KL)^2}$
        *   $P_{cr}$: Critical buckling load
        *   $E$: Young's Modulus
        *   $I$: Minimum moment of inertia of the cross-section
        *   $L$: Actual length of the column
        *   $K$: Effective length factor (depends on end conditions)
            *   Fixed-Fixed: $K=0.5$
            *   Fixed-Pinned: $K=0.7$
            *   Pinned-Pinned: $K=1.0$
            *   Fixed-Free: $K=2.0$
    *   **Slenderness Ratio:** $\lambda = \frac{KL}{r_{min}}$, where $r_{min}$ is the minimum radius of gyration. Euler's formula is valid for slender columns (high slenderness ratio). For intermediate and short columns, yielding or a combination of yielding and buckling occurs.

**Reference:**
*   **Bansal (2012), Chapter 3 & 9:** Stress transformation, Mohr's Circle, Columns.
*   **Bhavikatti (2013), Chapter 4 & 8:** Principal stresses, Columns.
*   **Singh (2013), Chapter 4 & 10:** Stress transformation, Columns.
*   **Hibbeler (2018), Chapter 7 & 8:** Stress transformation, Columns.

---

## 5. Important Points to Remember

*   **Distinguish between Statics and Strength of Materials:** Statics assumes rigid bodies; Strength of Materials analyzes deformable bodies.
*   **Stress vs. Strain:** Stress is internal force per area; Strain is deformation per unit length.
*   **Hooke's Law:** The linear relationship between stress and strain within the elastic limit. Key constants are E, G, and ν.
*   **SFD and BMD:** Essential tools for analyzing beams. Remember the relationships: $\frac{dV}{dx} = w$ and $\frac{dM}{dx} = V$.
*   **Bending Stress:** Non-uniform, $\sigma = My/I$, zero at neutral axis.
*   **Torsional Shear Stress:** Non-uniform, $\tau = Tr/J$, zero at center, max at surface.
*   **Mohr's Circle:** Powerful graphical tool for stress analysis and finding principal stresses.
*   **Column Buckling:** A critical failure mode for compressive members, governed by Euler's formula for slender columns. The effective length factor (K) is crucial.
*   **Units:** Be consistent with units (N, m, Pa, MPa, GPa).

---

## 6. Practice Questions and Exercises

**Question 1:** A steel rod 2 m long and 10 mm diameter is subjected to an axial tensile force of 50 kN. If the modulus of elasticity for steel is 200 GPa, calculate:
    (a) The tensile stress in the rod.
    (b) The elongation of the rod.
    (c) The tensile strain in the rod.

**Answer 1:**
*   Area, $A = \frac{\pi}{4} (0.01 \text{ m})^2 = 7.854 \times 10^{-5} \text{ m}^2$.
*   (a) $\sigma = \frac{50 \times 10^3 \text{ N}}{7.854 \times 10^{-5} \text{ m}^2} = 636.6 \times 10^6 \text{ Pa} = 636.6 \text{ MPa}$.
*   (b) $\epsilon = \frac{\sigma}{E} = \frac{636.6 \times 10^6 \text{ Pa}}{200 \times 10^9 \text{ Pa}} = 3.183 \times 10^{-3}$.
    $\Delta L = \epsilon L = (3.183 \times 10^{-3})(2 \text{ m}) = 6.366 \times 10^{-3} \text{ m} = 6.366 \text{ mm}$.
*   (c) $\epsilon = 3.183 \times 10^{-3}$.

**Question 2:** A simply supported beam of length 6 m carries a uniformly distributed load of 20 kN/m over its entire length. Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD) for the beam.

**Answer 2:**
*   Total load $W = 20 \text{ kN/m} \times 6 \text{ m} = 120 \text{ kN}$.
*   Reactions at supports A and B: $R_A = R_B = W/2 = 120/2 = 60 \text{ kN}$.
*   **SFD:**
    *   Starts at $+60$ kN at A.
    *   Decreases linearly to $0$ at the center ($x=3$ m).
    *   Continues decreasing linearly to $-60$ kN at B.
    *   The shear force at a distance x from A is $V_x = 60 - 20x$.
*   **BMD:**
    *   Starts at $0$ at A.
    *   Increases parabolically to a maximum at the center.
    *   Maximum bending moment $M_{max}$ occurs where shear force is zero (at the center, $x=3$ m).
    *   $M_{max} = R_A \times 3 - (20 \times 3) \times \frac{3}{2} = 60 \times 3 - 60 \times 1.5 = 180 - 90 = 90 \text{ kNm}$.
    *   Decreases parabolically from $90$ kNm at the center to $0$ at B.
    *   The bending moment at a distance x from A is $M_x = 60x - 20 \frac{x^2}{2} = 60x - 10x^2$.

**Question 3:** A solid circular steel shaft of 50 mm diameter and 2 m length is subjected to a torque of 1.5 kNm. Calculate the maximum shear stress induced in the shaft and the angle of twist. Assume G = 80 GPa.

**Answer 3:**
*   Diameter $d = 50 \text{ mm} = 0.05 \text{ m}$. Radius $r = 25 \text{ mm} = 0.025 \text{ m}$.
*   Torque $T = 1.5 \text{ kNm} = 1.5 \times 10^6 \text{ Nmm}$.
*   Polar Moment of Inertia $J = \frac{\pi d^4}{32} = \frac{\pi (50)^4}{32} = 613593.75 \text{ mm}^4$.
*   Maximum shear stress $\tau_{max} = \frac{Tr}{J} = \frac{(1.5 \times 10^6 \text{ Nmm})(25 \text{ mm})}{613593.75 \text{ mm}^4} = 61.27 \text{ N/mm}^2 = 61.27 \text{ MPa}$.
*   Angle of Twist $\phi = \frac{TL}{GJ}$.
    $T = 1.5 \times 10^3 \text{ Nm}$. $L = 2 \text{ m}$. $G = 80 \times 10^9 \text{ Pa}$.
    $J = \frac{\pi (0.05 \text{ m})^4}{32} = 6.136 \times 10^{-7} \text{ m}^4$.
    $\phi = \frac{(1.5 \times 10^3 \text{ Nm})(2 \text{ m})}{(80 \times 10^9 \text{ Pa})(6.136 \times 10^{-7} \text{ m}^4)} = \frac{3000}{49088} \approx 0.0611 \text{ radians}$.

**Question 4:** A rectangular bar of cross-section 10 mm x 20 mm is subjected to an axial tensile load. Determine the principal stresses and the maximum shear stress if the axial load is 10 kN. Also, find the orientation of the principal planes.

**Answer 4:**
*   Area $A = 10 \text{ mm} \times 20 \text{ mm} = 200 \text{ mm}^2$.
*   Axial stress $\sigma_x = \frac{P}{A} = \frac{10 \times 10^3 \text{ N}}{200 \text{ mm}^2} = 50 \text{ N/mm}^2 = 50 \text{ MPa}$.
*   Since it's an axial load, $\sigma_y = 0$ and $\tau_{xy} = 0$.
*   Principal stresses are $\sigma_1 = \sigma_x = 50 \text{ MPa}$ and $\sigma_2 = \sigma_y = 0 \text{ MPa}$.
*   The principal planes are at $0^\circ$ and $90^\circ$ to the axis of the load.
*   Maximum shear stress $\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \frac{50 - 0}{2} = 25 \text{ MPa}$.
*   The planes of maximum shear stress are oriented at $45^\circ$ to the axial direction.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 7. References

*   Bansal, R.K. (2012). *Mechanics of Solids*. Laxmi Publications.
*   Bhavikatti, S. S. (2013). *Mechanics of Solids*. New Age International.
*   Singh, Surendra. (2013). *Strength of Materials*. S. K. Kataria & Sons.
*   Rattan, V.K. (2011). *Strength of Materials*. McGraw Hills.
*   Hibbeler, R. C. (2018). *Mechanics of Materials*. Pearson Higher Education.
*   Popov, E. (2002). *Engineering Mechanics of Solids*. PHI.
*   Beer, F. P., & Johnston, R. R. (2017). *Mechanics of Materials*. McGraw Hills.
*   Pytel, A., & Kiusalaas, J. (2015). *Mechanics of Materials*. Cengage Learning India Private Limited.