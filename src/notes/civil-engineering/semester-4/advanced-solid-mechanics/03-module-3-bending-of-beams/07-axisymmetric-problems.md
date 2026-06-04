---
title: "Axisymmetric problems"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a06"
status: "completed"
scrapedAt: "2026-05-20T18:42:44.070Z"
---
# ADVANCED SOLID MECHANICS - Module 3: Bending of Beams

## Topic: Axisymmetric Problems

### 1. Introduction to Axisymmetric Bending

**Key Concept:** Axisymmetric problems in bending refer to scenarios where the geometry, loading, and material properties are symmetrical about an axis. This means that the stress and strain distributions are the same at any point on a circle centered on this axis.

**Definition:** A body is axisymmetric if its geometry, material properties, and applied loads are invariant with respect to rotation about a specific axis.

**Relevance to Beams:** While classical beam theory often deals with planar bending, axisymmetric bending extends this to situations involving rotationally symmetric shapes like cylinders, discs, and shells.

### 2. Governing Equations for Axisymmetric Problems

**Key Concept:** The analysis of axisymmetric bending typically employs polar coordinates ($r$, $\theta$, $z$). Due to axisymmetry, the dependence on the angular coordinate $\theta$ vanishes, simplifying the problem to a two-dimensional one in the $r-z$ plane.

**Stress Components:** In axisymmetric problems, we primarily deal with:
*   $\sigma_r$: Radial stress (stress in the radial direction)
*   $\sigma_z$: Axial stress (stress along the axis of symmetry)
*   $\sigma_\theta$: Hoop stress (stress in the tangential direction, perpendicular to the $r-z$ plane)
*   $\tau_{rz}$: Shear stress (shear stress acting on the $r-z$ plane)

**Important Note:** For pure axisymmetric bending, shear stresses $\tau_{rz}$ are often assumed to be zero or negligible, simplifying the analysis. However, in more general cases, they may be present.

**Equilibrium Equations (in polar coordinates, neglecting $\theta$ dependence):**

The general equilibrium equations in cylindrical/polar coordinates are:
$\frac{\partial \sigma_r}{\partial r} + \frac{\partial \tau_{rz}}{\partial z} + \frac{\sigma_r - \sigma_\theta}{r} = 0$
$\frac{\partial \tau_{rz}}{\partial r} + \frac{\partial \sigma_z}{\partial z} + \frac{\tau_{rz}}{r} = 0$

For axisymmetric problems, we often assume $\sigma_\theta = \nu(\sigma_r + \sigma_z)$, where $\nu$ is Poisson's ratio. If we assume **plane strain** conditions for thin discs or **plane stress** for thick cylinders under pressure, simplifications arise.

**Strain Components (in polar coordinates, neglecting $\theta$ dependence):**

*   $\epsilon_r = \frac{\partial u_r}{\partial r}$
*   $\epsilon_z = \frac{\partial u_z}{\partial z}$
*   $\epsilon_\theta = \frac{u_r}{r}$
*   $\gamma_{rz} = \frac{\partial u_r}{\partial z} + \frac{\partial u_z}{\partial r}$

where $u_r$ is radial displacement and $u_z$ is axial displacement.

**Hooke's Law (General for Axisymmetric Problems):**

*   $\epsilon_r = \frac{1}{E}[\sigma_r - \nu(\sigma_\theta + \sigma_z)]$
*   $\epsilon_z = \frac{1}{E}[\sigma_z - \nu(\sigma_r + \sigma_\theta)]$
*   $\epsilon_\theta = \frac{1}{E}[\sigma_\theta - \nu(\sigma_r + \sigma_z)]$
*   $\gamma_{rz} = \frac{1}{G} \tau_{rz}$

**Simplification for Plane Stress (e.g., thin rotating discs):**
In plane stress, $\sigma_z = 0$.
*   $\epsilon_r = \frac{1}{E}(\sigma_r - \nu \sigma_\theta)$
*   $\epsilon_z = \frac{1}{E}(-\nu \sigma_r - \nu \sigma_\theta)$
*   $\epsilon_\theta = \frac{1}{E}(\sigma_\theta - \nu \sigma_r)$
*   $\gamma_{rz} = \frac{1}{G} \tau_{rz}$

**Simplification for Plane Strain (e.g., thick cylinders with large length):**
In plane strain, $\epsilon_z = 0$.
*   $\epsilon_r = \frac{1+\nu}{E}[(1-\nu)\sigma_r - \nu \sigma_\theta]$
*   $\epsilon_\theta = \frac{1+\nu}{E}[(1-\nu)\sigma_\theta - \nu \sigma_r]$
*   $\epsilon_z = \frac{1-2\nu}{E}(\sigma_r + \sigma_\theta) = 0$ (This implies $\sigma_z = \nu(\sigma_r + \sigma_\theta)$)
*   $\gamma_{rz} = \frac{1}{G} \tau_{rz}$

**Stress Function Approach (Airy Stress Function):**

For 2D problems, Airy stress function $\Phi(r, z)$ is used, defined as:
$\sigma_r = \frac{1}{r}\frac{\partial \Phi}{\partial r} + \frac{\partial^2 \Phi}{\partial z^2}$
$\sigma_z = \frac{\partial^2 \Phi}{\partial r^2}$
$\tau_{rz} = -\frac{\partial}{\partial r}(\frac{1}{r}\frac{\partial \Phi}{\partial r}) = -\frac{\partial^2 \Phi}{\partial r \partial z}$

For axisymmetric problems, the governing equation for $\Phi$ is the **Biharmonic Equation** in polar coordinates:
$\nabla^4 \Phi = 0$, where $\nabla^2 = \frac{\partial^2}{\partial r^2} + \frac{1}{r}\frac{\partial}{\partial r} + \frac{\partial^2}{\partial z^2}$.

In axisymmetric problems, this becomes:
$(\frac{\partial^2}{\partial r^2} - \frac{1}{r}\frac{\partial}{\partial r} + \frac{\partial^2}{\partial z^2})(\frac{\partial^2 \Phi}{\partial r^2} + \frac{1}{r}\frac{\partial \Phi}{\partial r} + \frac{\partial^2 \Phi}{\partial z^2}) = 0$

This equation is complex. Often, solutions are found by assuming specific forms for $\Phi$.

### 3. Examples of Axisymmetric Bending Problems

**Example 1: Thick-walled Cylinder under Internal/External Pressure**

*   **Geometry:** A cylinder with inner radius $a$ and outer radius $b$.
*   **Loading:** Internal pressure $p_i$ and external pressure $p_o$.
*   **Assumptions:** Plane strain conditions.
*   **Analysis:** The radial and hoop stresses vary across the wall thickness. The problem is solved by satisfying equilibrium and compatibility equations.

**Lamé's Equations for thick cylinders (Plane Strain):**
The general solution for radial stress $\sigma_r$ and hoop stress $\sigma_\theta$ is:
$\sigma_r = \frac{A}{r^2} - B$
$\sigma_\theta = \frac{A}{r^2} + B$

where $A$ and $B$ are constants determined by boundary conditions (pressures at $r=a$ and $r=b$).

**Boundary Conditions:**
*   At $r=a$: $\sigma_r = -p_i$
*   At $r=b$: $\sigma_r = -p_o$

**Solving for A and B:**
$-p_i = \frac{A}{a^2} - B$
$-p_o = \frac{A}{b^2} - B$

Subtracting the second from the first:
$p_o - p_i = A(\frac{1}{b^2} - \frac{1}{a^2})$
$A = \frac{p_i - p_o}{\frac{1}{a^2} - \frac{1}{b^2}}$

Substitute A back into one of the equations to find B.

**Example 2: Rotating Disc**

*   **Geometry:** A disc of outer radius $R$ and inner radius $a$ (can be 0 for a solid disc), rotating at angular velocity $\omega$.
*   **Loading:** Inertial forces due to rotation.
*   **Assumptions:** Plane stress conditions.
*   **Analysis:** Centrifugal forces cause radial and hoop stresses.

**Governing Equation (Plane Stress, rotating disc):**
The equilibrium equation is often expressed in terms of radial displacement $u_r$:
$\frac{d}{dr}(\frac{1}{r}\frac{d(r u_r)}{dr}) + \frac{\rho \omega^2 r}{E}(1-\nu^2) = 0$
where $\rho$ is material density.

The stress components are related to $u_r$:
$\sigma_r = \frac{E}{1-\nu^2}(\frac{du_r}{dr} + \nu \frac{u_r}{r})$
$\sigma_\theta = \frac{E}{1-\nu^2}(\frac{u_r}{r} + \nu \frac{du_r}{dr})$

**Example 3: Spherical Shell under Pressure**

*   **Geometry:** A spherical shell of radius $R$.
*   **Loading:** Internal or external pressure $p$.
*   **Analysis:** Due to spherical symmetry, the stress is uniform hoop stress $\sigma_\theta = \sigma_\phi$ (where $\phi$ is the polar angle).

**Equilibrium Equation for a thin spherical shell:**
Consider a hemisphere. The force due to pressure acting on the base of the hemisphere is $p \pi R^2$. This is balanced by the stress resultant acting on the cut surface, which is $\sigma_\theta (2 \pi R) t$, where $t$ is the shell thickness.
$p \pi R^2 = \sigma_\theta (2 \pi R) t$
$\sigma_\theta = \frac{p R}{2t}$

This is a simplified analysis for thin shells. For thick shells, Lamé's equations can be adapted.

### 4. Relation to Classical Beam Theory

**Key Concept:** Axisymmetric bending problems often involve stresses and deformations that are not confined to a single plane, unlike classical beam theory. However, certain aspects can be related.

*   **Radial Stress and Bending Stress:** In some cases, the radial stresses in axisymmetric problems might bear some resemblance to the normal stresses developed due to bending in classical beam theory (e.g., $\sigma_x = My/I$). However, the origin and distribution are different.
*   **Hoop Stress:** Hoop stress is unique to axisymmetric problems and arises from the radial distribution of forces or displacements, which is absent in planar beam bending.
*   **Stress Concentration:** Similar to how stress concentrations occur in beams at geometric discontinuities, they can also occur in axisymmetric components at changes in radius or applied loads.

### 5. Learning Outcomes Checklist and Review

*   **Understanding of Axisymmetric Geometry and Symmetry:**
    *   Can identify situations where axisymmetric assumptions are valid.
    *   Understand the implications of rotational symmetry on stress and strain distributions.
*   **Governing Equations in Polar Coordinates:**
    *   Can recall and apply the equilibrium and strain-displacement equations in polar coordinates for axisymmetric problems.
    *   Understand the meaning of $\sigma_r$, $\sigma_z$, $\sigma_\theta$, $\tau_{rz}$, $\epsilon_r$, $\epsilon_z$, $\epsilon_\theta$, $\gamma_{rz}$.
*   **Application of Hooke's Law:**
    *   Can correctly apply Hooke's Law for plane stress and plane strain conditions in axisymmetric analysis.
    *   Understand the role of Poisson's ratio.
*   **Stress Function Approach (Biharmonic Equation):**
    *   Awareness of the Airy stress function and its role in solving elasticity problems.
    *   Knowledge of the biharmonic equation for axisymmetric problems.
*   **Analysis of Specific Axisymmetric Problems:**
    *   **Thick-walled cylinders:** Ability to apply Lamé's equations and solve for stresses under pressure.
    *   **Rotating discs:** Understanding the cause of stresses and basic approach to analysis.
    *   **Spherical shells:** Understanding the basic stress state under pressure.
*   **Distinction from Classical Beam Theory:**
    *   Can articulate the key differences in stress and strain behavior compared to planar beam bending.

### 6. Practice Questions and Exercises

**Question 1:**
A thick-walled cylinder with internal radius $a = 50$ mm and external radius $b = 100$ mm is subjected to an internal pressure $p_i = 50$ MPa and an external pressure $p_o = 10$ MPa. Assuming plane strain conditions, determine the radial and hoop stresses at the inner and outer surfaces of the cylinder.

**Solution 1:**
We use Lamé's equations:
$\sigma_r = \frac{A}{r^2} - B$
$\sigma_\theta = \frac{A}{r^2} + B$

Boundary conditions:
At $r=a=50 \times 10^{-3}$ m: $\sigma_r = -p_i = -50 \times 10^6$ Pa
At $r=b=100 \times 10^{-3}$ m: $\sigma_r = -p_o = -10 \times 10^6$ Pa

$-50 \times 10^6 = \frac{A}{(50 \times 10^{-3})^2} - B$
$-10 \times 10^6 = \frac{A}{(100 \times 10^{-3})^2} - B$

Subtracting the second equation from the first:
$-40 \times 10^6 = A \left( \frac{1}{(50 \times 10^{-3})^2} - \frac{1}{(100 \times 10^{-3})^2} \right)$
$-40 \times 10^6 = A \left( \frac{1}{2500 \times 10^{-6}} - \frac{1}{10000 \times 10^{-6}} \right)$
$-40 \times 10^6 = A (400 - 100) \times 10^3$
$-40 \times 10^6 = A (300) \times 10^3$
$A = \frac{-40 \times 10^6}{300 \times 10^3} = -\frac{400}{3} \approx -133.33$ N

Now find B using the second equation:
$-10 \times 10^6 = \frac{-133.33}{(100 \times 10^{-3})^2} - B$
$-10 \times 10^6 = \frac{-133.33}{10000 \times 10^{-6}} - B$
$-10 \times 10^6 = -13333 - B$
$B = 13333 - 10 \times 10^6 \approx -9.986 \times 10^6$ N/m$^2$ or $-9.986$ MPa. (Error in calculation, let's recalculate B)

From $-10 \times 10^6 = \frac{A}{(100 \times 10^{-3})^2} - B$:
$-10 \times 10^6 = \frac{-133.33}{(0.1)^2} - B$
$-10 \times 10^6 = \frac{-133.33}{0.01} - B$
$-10 \times 10^6 = -13333 - B$
$B = -10 \times 10^6 + 13333 = -9986667$ Pa $= -9.986$ MPa. (This B value seems too small for the pressure range. Let's recheck A)

Let's use $A = \frac{p_o b^2 - p_i a^2}{b^2 - a^2}$:
$A = \frac{(10 \times 10^6)(0.1)^2 - (50 \times 10^6)(0.05)^2}{(0.1)^2 - (0.05)^2}$
$A = \frac{(10 \times 10^6)(0.01) - (50 \times 10^6)(0.0025)}{0.01 - 0.0025}$
$A = \frac{0.1 \times 10^6 - 0.125 \times 10^6}{0.0075}$
$A = \frac{-0.025 \times 10^6}{0.0075} = -\frac{25000}{0.75} = -\frac{100000}{3} \approx -33333$ N.

Now find B using the second equation:
$-10 \times 10^6 = \frac{-33333}{(0.1)^2} - B$
$-10 \times 10^6 = \frac{-33333}{0.01} - B$
$-10 \times 10^6 = -3333300 - B$
$B = -10 \times 10^6 + 3333300 = -6666700$ Pa $= -6.667$ MPa.

Stresses at inner surface ($r=a=0.05$ m):
$\sigma_r(a) = -50$ MPa (given)
$\sigma_\theta(a) = \frac{A}{a^2} + B = \frac{-33333}{(0.05)^2} + (-6666700)$
$\sigma_\theta(a) = \frac{-33333}{0.0025} - 6666700$
$\sigma_\theta(a) = -13333200 - 6666700 = -20000000$ Pa $= -20$ MPa.

Stresses at outer surface ($r=b=0.1$ m):
$\sigma_r(b) = -10$ MPa (given)
$\sigma_\theta(b) = \frac{A}{b^2} + B = \frac{-33333}{(0.1)^2} + (-6666700)$
$\sigma_\theta(b) = \frac{-33333}{0.01} - 6666700$
$\sigma_\theta(b) = -3333300 - 6666700 = -10000000$ Pa $= -10$ MPa.

**Summary for Question 1:**
*   **Inner Surface (r=50 mm):** $\sigma_r = -50$ MPa, $\sigma_\theta = -20$ MPa
*   **Outer Surface (r=100 mm):** $\sigma_r = -10$ MPa, $\sigma_\theta = -10$ MPa

**Question 2:**
What are the main differences between the stress distribution in a thick-walled cylinder under pressure and a thin beam subjected to bending?

**Answer 2:**
*   **Stress Components:** Cylinders experience radial, hoop, and axial stresses, whereas beams primarily experience axial stress due to bending and shear stress.
*   **Stress Variation:** In cylinders, radial and hoop stresses vary significantly across the wall thickness. In beams, the axial stress varies linearly with distance from the neutral axis, and shear stress varies parabolically across the cross-section.
*   **Symmetry:** Cylinder stresses are axisymmetric (same around the axis), while beam stresses are planar.
*   **Loading:** Cylinder stresses are often due to pressure acting on surfaces, leading to different load-stress relationships compared to forces and moments applied to beams.
*   **Strain:** Cylinders often exhibit plane strain or plane stress conditions, affecting the stress-strain relationships significantly. Beams usually operate under conditions where Poisson's ratio effects are secondary in basic bending analysis.

**Question 3:**
A solid disc of radius $R$ rotates at an angular velocity $\omega$. State the primary cause of stress within the disc and the type of stress that dominates.

**Answer 3:**
The primary cause of stress is the centrifugal force acting on the disc material due to rotation. The dominant stress is the **hoop stress** ($\sigma_\theta$), which is tensile and tends to expand the disc radially. Radial stress ($\sigma_r$) is also present but is typically smaller in magnitude than the hoop stress.

### 7. Important Points to Remember

*   **Axisymmetry Simplifies:** Rotational symmetry eliminates dependence on the angular coordinate, reducing a 3D problem to a 2D one in the $r-z$ plane.
*   **Lamé's Equations are Key:** For thick cylinders, Lamé's equations are fundamental for determining radial and hoop stresses.
*   **Plane Stress vs. Plane Strain:** The assumption of plane stress or plane strain is crucial and depends on the geometry and loading conditions (e.g., thin discs vs. long cylinders).
*   **Hoop Stress Dominance:** In many axisymmetric problems like rotating discs and cylinders under pressure, hoop stress is often the critical stress component.
*   **Airy Stress Function:** A powerful mathematical tool for solving 2D elasticity problems, including axisymmetric ones, via the biharmonic equation.
*   **Boundary Conditions are Paramount:** Correctly applying boundary conditions (pressures, displacements) is essential for finding the constants in stress solutions.
*   **Distinguish from Beam Theory:** Recognize that the stress distributions and governing physics are fundamentally different from classical beam bending.
