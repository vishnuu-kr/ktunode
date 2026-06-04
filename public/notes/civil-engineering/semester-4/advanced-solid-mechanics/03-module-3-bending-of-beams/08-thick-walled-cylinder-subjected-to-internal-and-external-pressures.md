---
title: "Thick walled cylinder subjected to internal and external pressures"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a07"
status: "completed"
scrapedAt: "2026-05-20T18:42:44.760Z"
---
# ADVANCED SOLID MECHANICS - MODULE 3: BENDING OF BEAMS

## Topic: Thick-Walled Cylinders Subjected to Internal and External Pressures

### Introduction

This topic delves into the stress and strain distribution within thick-walled cylindrical pressure vessels subjected to internal and external pressure. Unlike thin-walled cylinders where stresses are assumed to be uniformly distributed across the wall thickness, thick-walled cylinders require a more rigorous analysis due to the significant variation of radial and hoop stresses with the radial distance. This analysis is crucial for designing pressure vessels used in various engineering applications such as pipelines, boilers, and chemical reactors.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental assumptions and governing equations for stress analysis in thick-walled cylinders.**
*   **Derive and apply the Lame's equations for radial and hoop stresses in thick-walled cylinders.**
*   **Calculate the maximum stresses and strains experienced by the cylinder wall.**
*   **Determine the displacement of the cylinder wall under pressure loading.**
*   **Analyze the effect of combined internal and external pressures.**
*   **Discuss the concept of stress concentration and its relevance to thick-walled cylinders.**
*   **Apply the principles of thick-walled cylinder analysis to practical engineering problems.**

### Key Concepts and Definitions

*   **Thick-Walled Cylinder:** A cylinder where the ratio of the inner radius ($r_i$) to the outer radius ($r_o$) is such that the wall thickness ($t = r_o - r_i$) is significant compared to the radius. Generally, if $r_i/r_o < 0.9$, it's considered thick-walled.
*   **Internal Pressure ($p_i$):** The pressure applied to the inner surface of the cylinder.
*   **External Pressure ($p_o$):** The pressure applied to the outer surface of the cylinder.
*   **Radial Stress ($\sigma_r$):** The stress acting perpendicular to the cylindrical surface, directed along the radius. It is always compressive.
*   **Hoop Stress ($\sigma_h$ or $\sigma_\theta$):** The circumferential stress acting tangent to the cylindrical surface. It is generally tensile.
*   **Axial Stress ($\sigma_z$):** The stress acting along the longitudinal axis of the cylinder. For a closed-end cylinder, this is induced by the internal pressure acting on the end caps.
*   **Strain:** Deformation per unit length. In cylindrical coordinates, we consider radial strain ($\epsilon_r$), hoop strain ($\epsilon_\theta$), and axial strain ($\epsilon_z$).
*   **Hooke's Law:** Relates stress and strain in elastic materials: $\sigma = E\epsilon$. For isotropic materials, this extends to principal stresses and strains.
*   **Compatibility Equation:** Ensures that the deformation of the material is continuous. In cylindrical coordinates, this relates strains and displacement.
*   **Equilibrium Equation:** Ensures that the forces acting on a differential element are balanced.

### Governing Equations and Derivation of Lame's Equations

The analysis of thick-walled cylinders typically employs Lame's equations, which are derived from the fundamental principles of elasticity, equilibrium, and compatibility.

**1. Assumptions:**

*   **Plane Strain (or Plane Stress):** For very long cylinders (or if the ends are free to expand axially), we can assume plane strain conditions, meaning $\epsilon_z = 0$. For shorter cylinders or those with constrained ends, plane stress analysis might be more appropriate, where $\sigma_z$ is not zero. However, for the standard derivation, we often consider the plane strain case.
*   **Radial Symmetry:** Stresses and strains are only functions of the radial distance ($r$).
*   **Homogeneous and Isotropic Material:** The material properties are uniform throughout and the same in all directions.
*   **Linear Elastic Material:** The material obeys Hooke's Law.

**2. Equilibrium Equation (in Cylindrical Coordinates):**

Consider a thin cylindrical shell of radius $r$ and thickness $dr$. The forces acting on this shell in the radial direction must be in equilibrium.

$$ \frac{d\sigma_r}{dr} + \frac{\sigma_r - \sigma_\theta}{r} = 0 $$

This equation can be rewritten as:

$$ r \frac{d\sigma_r}{dr} + \sigma_r - \sigma_\theta = 0 $$

**3. Compatibility Equation (for Plane Strain, $\epsilon_z = 0$):**

The volumetric strain is related to the principal stresses and strains by Hooke's Law. For plane strain:

$$ \epsilon_r = \frac{1}{E}[\sigma_r - \nu(\sigma_\theta + \sigma_z)] $$
$$ \epsilon_\theta = \frac{1}{E}[\sigma_\theta - \nu(\sigma_r + \sigma_z)] $$
$$ \epsilon_z = \frac{1}{E}[\sigma_z - \nu(\sigma_r + \sigma_\theta)] = 0 $$

From the axial strain equation, we get:

$$ \sigma_z = \nu(\sigma_r + \sigma_\theta) $$

Substituting this into the expressions for $\epsilon_r$ and $\epsilon_\theta$:

$$ \epsilon_r = \frac{1+\nu}{E}[ (1-\nu)\sigma_r - \nu\sigma_\theta ] $$
$$ \epsilon_\theta = \frac{1+\nu}{E}[ (1-\nu)\sigma_\theta - \nu\sigma_r ] $$

We also know that for radial symmetry, the radial displacement $u$ is related to the strains by:

$$ \epsilon_r = \frac{du}{dr} $$
$$ \epsilon_\theta = \frac{u}{r} $$

Substituting these into the strain equations:

$$ \frac{du}{dr} = \frac{1+\nu}{E}[ (1-\nu)\sigma_r - \nu\sigma_\theta ] $$
$$ \frac{u}{r} = \frac{1+\nu}{E}[ (1-\nu)\sigma_\theta - \nu\sigma_r ] $$

Multiplying the second equation by $r$ and differentiating with respect to $r$:

$$ \frac{d}{dr}\left(\frac{u}{r}\right) = \frac{1+\nu}{E} \frac{d}{dr}[(1-\nu)\sigma_\theta - \nu\sigma_r] $$
$$ \frac{r \frac{du}{dr} - u}{r^2} = \frac{1+\nu}{E} [(1-\nu)\frac{d\sigma_\theta}{dr} - \nu\frac{d\sigma_r}{dr}] $$

From the equilibrium equation, we have $\sigma_\theta = r\frac{d\sigma_r}{dr} + \sigma_r$. Differentiating this with respect to $r$:

$$ \frac{d\sigma_\theta}{dr} = r\frac{d^2\sigma_r}{dr^2} + 2\frac{d\sigma_r}{dr} $$

Now, substitute $\sigma_\theta$ and its derivative into the compatibility equation. This leads to a differential equation in terms of $\sigma_r$:

$$ \frac{d^2\sigma_r}{dr^2} + \frac{2}{r}\frac{d\sigma_r}{dr} = 0 $$

This is a Cauchy-Euler equation. The general solution is of the form:

$$ \sigma_r = A + \frac{B}{r^2} $$

Substituting this back into the equilibrium equation to find $\sigma_\theta$:

$$ r\frac{d}{dr}(A + \frac{B}{r^2}) + (A + \frac{B}{r^2}) - \sigma_\theta = 0 $$
$$ r(-\frac{2B}{r^3}) + A + \frac{B}{r^2} - \sigma_\theta = 0 $$
$$ -\frac{2B}{r^2} + A + \frac{B}{r^2} - \sigma_\theta = 0 $$
$$ \sigma_\theta = A - \frac{B}{r^2} $$

These are **Lame's Equations** for radial and hoop stresses in a thick-walled cylinder under pressure.

**Important Note on Axial Stress ($\sigma_z$):**

*   **Closed-end cylinder:** The axial stress is uniform across the thickness and is calculated from the force balance on the end cap:
    $$ \sigma_z = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} $$
    (Note: For $p_o=0$, $\sigma_z = \frac{p_i r_i^2}{r_o^2 - r_i^2}$)
*   **Open-end cylinder:** $\sigma_z = 0$.

### Case 1: Cylinder Subjected to Internal Pressure Only ($p_o = 0$)

*   **Boundary Conditions:**
    *   At $r = r_i$: $\sigma_r = -p_i$ (compressive)
    *   At $r = r_o$: $\sigma_r = 0$

*   **Applying Boundary Conditions:**
    *   From $\sigma_r = A + \frac{B}{r^2}$:
        *   $0 = A + \frac{B}{r_o^2}$  => $A = -\frac{B}{r_o^2}$
        *   $-p_i = A + \frac{B}{r_i^2} = -\frac{B}{r_o^2} + \frac{B}{r_i^2} = B(\frac{1}{r_i^2} - \frac{1}{r_o^2})$
        *   $-p_i = B(\frac{r_o^2 - r_i^2}{r_i^2 r_o^2})$
        *   $B = -\frac{p_i r_i^2 r_o^2}{r_o^2 - r_i^2}$

    *   Substituting $B$ back to find $A$:
        *   $A = -(-\frac{p_i r_i^2 r_o^2}{r_o^2 - r_i^2}) \frac{1}{r_o^2} = \frac{p_i r_i^2}{r_o^2 - r_i^2}$

*   **Lame's Equations for Internal Pressure Only:**
    $$ \sigma_r = \frac{p_i r_i^2}{r_o^2 - r_i^2} - \frac{p_i r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 - \frac{r_o^2}{r^2} \right) $$
    $$ \sigma_\theta = \frac{p_i r_i^2}{r_o^2 - r_i^2} + \frac{p_i r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r^2} \right) $$

*   **Stress Distribution:**
    *   **Radial Stress ($\sigma_r$):** Varies from $-p_i$ at $r=r_i$ to $0$ at $r=r_o$. It is always compressive. It increases with $r$ (becomes less compressive) as $1 - \frac{r_o^2}{r^2}$ increases from a negative value to zero.
    *   **Hoop Stress ($\sigma_\theta$):** Is maximum at the inner radius ($r=r_i$) and decreases as $r$ increases. It is always tensile.
        *   Maximum Hoop Stress: $\sigma_{\theta,max} = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r_i^2} \right) = p_i \frac{r_o^2 + r_i^2}{r_o^2 - r_i^2}$
        *   Minimum Hoop Stress: $\sigma_{\theta,min} = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r_o^2} \right) = \frac{2 p_i r_i^2}{r_o^2 - r_i^2}$ (at $r=r_o$)

*   **Axial Stress ($\sigma_z$) for a closed-end cylinder:**
    $$ \sigma_z = \frac{p_i r_i^2}{r_o^2 - r_i^2} $$
    Notice that for a closed-end cylinder with internal pressure only, $\sigma_z$ is constant and lies between $\sigma_{\theta,min}$ and $\sigma_{\theta,max}$. The maximum tensile stress is the hoop stress at the inner surface.

**Example 1:** A thick-walled cylinder with inner radius $r_i = 50$ mm and outer radius $r_o = 100$ mm is subjected to an internal pressure $p_i = 200$ MPa. Calculate the radial and hoop stresses at the inner and outer surfaces.

*   $r_i = 0.05$ m, $r_o = 0.10$ m, $p_i = 200$ MPa

*   **At $r = r_i = 50$ mm:**
    *   $\sigma_r = -p_i = -200$ MPa
    *   $\sigma_\theta = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r_i^2} \right) = 200 \frac{50^2}{100^2 - 50^2} \left( 1 + \frac{100^2}{50^2} \right)$
        $\sigma_\theta = 200 \frac{2500}{10000 - 2500} \left( 1 + \frac{10000}{2500} \right) = 200 \frac{2500}{7500} (1+4) = 200 \times \frac{1}{3} \times 5 = \frac{1000}{3} \approx 333.33$ MPa

*   **At $r = r_o = 100$ mm:**
    *   $\sigma_r = 0$
    *   $\sigma_\theta = \frac{p_i r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r_o^2} \right) = \frac{200 \times 50^2}{100^2 - 50^2} (2) = \frac{200 \times 2500}{7500} \times 2 = 200 \times \frac{1}{3} \times 2 = \frac{400}{3} \approx 133.33$ MPa

**Result Interpretation:** The radial stress is compressive and ranges from -200 MPa at the inner wall to 0 at the outer wall. The hoop stress is tensile and is highest at the inner wall (333.33 MPa), decreasing to 133.33 MPa at the outer wall. The maximum stress is the hoop stress at the inner surface.

### Case 2: Cylinder Subjected to External Pressure Only ($p_i = 0$)

*   **Boundary Conditions:**
    *   At $r = r_i$: $\sigma_r = 0$
    *   At $r = r_o$: $\sigma_r = -p_o$ (compressive)

*   **Applying Boundary Conditions:**
    *   From $\sigma_r = A + \frac{B}{r^2}$:
        *   $0 = A + \frac{B}{r_i^2}$ => $A = -\frac{B}{r_i^2}$
        *   $-p_o = A + \frac{B}{r_o^2} = -\frac{B}{r_i^2} + \frac{B}{r_o^2} = B(\frac{1}{r_o^2} - \frac{1}{r_i^2})$
        *   $-p_o = B(\frac{r_i^2 - r_o^2}{r_i^2 r_o^2})$
        *   $B = -\frac{p_o r_i^2 r_o^2}{r_i^2 - r_o^2} = \frac{p_o r_i^2 r_o^2}{r_o^2 - r_i^2}$

    *   Substituting $B$ back to find $A$:
        *   $A = -(\frac{p_o r_i^2 r_o^2}{r_o^2 - r_i^2}) \frac{1}{r_i^2} = -\frac{p_o r_o^2}{r_o^2 - r_i^2}$

*   **Lame's Equations for External Pressure Only:**
    $$ \sigma_r = -\frac{p_o r_o^2}{r_o^2 - r_i^2} + \frac{p_o r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 - \frac{r_i^2}{r^2} \right) $$
    $$ \sigma_\theta = -\frac{p_o r_o^2}{r_o^2 - r_i^2} - \frac{p_o r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_i^2}{r^2} \right) $$

*   **Stress Distribution:**
    *   **Radial Stress ($\sigma_r$):** Varies from $0$ at $r=r_i$ to $-p_o$ at $r=r_o$. It is always compressive. It becomes more compressive with $r$ as $1 - \frac{r_i^2}{r^2}$ increases from 0 to a positive value.
    *   **Hoop Stress ($\sigma_\theta$):** Is maximum in magnitude (most compressive) at the inner radius ($r=r_i$) and decreases in magnitude as $r$ increases. It is always compressive.
        *   Maximum Compressive Hoop Stress: $\sigma_{\theta,min} = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_i^2}{r_i^2} \right) = -p_o \frac{r_o^2 + r_i^2}{r_o^2 - r_i^2}$ (at $r=r_i$)
        *   Minimum Compressive Hoop Stress: $\sigma_{\theta,max} = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_i^2}{r_o^2} \right)$ (at $r=r_o$)

*   **Axial Stress ($\sigma_z$) for a closed-end cylinder:**
    $$ \sigma_z = -\frac{p_o r_o^2}{r_o^2 - r_i^2} $$
    Notice that for a closed-end cylinder with external pressure only, $\sigma_z$ is constant and compressive. The maximum compressive stress is the hoop stress at the inner surface.

**Example 2:** A thick-walled cylinder with inner radius $r_i = 50$ mm and outer radius $r_o = 100$ mm is subjected to an external pressure $p_o = 100$ MPa. Calculate the radial and hoop stresses at the inner and outer surfaces.

*   $r_i = 0.05$ m, $r_o = 0.10$ m, $p_o = 100$ MPa

*   **At $r = r_i = 50$ mm:**
    *   $\sigma_r = 0$
    *   $\sigma_\theta = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_i^2}{r_i^2} \right) = -100 \frac{100^2}{100^2 - 50^2} (2) = -100 \frac{10000}{7500} (2) = -100 \times \frac{4}{3} \times 2 = -\frac{800}{3} \approx -266.67$ MPa

*   **At $r = r_o = 100$ mm:**
    *   $\sigma_r = -p_o = -100$ MPa
    *   $\sigma_\theta = -\frac{p_o r_o^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_i^2}{r_o^2} \right) = -100 \frac{100^2}{100^2 - 50^2} \left( 1 + \frac{50^2}{100^2} \right)$
        $\sigma_\theta = -100 \frac{10000}{7500} \left( 1 + \frac{2500}{10000} \right) = -100 \times \frac{4}{3} \times (1+0.25) = -100 \times \frac{4}{3} \times 1.25 = -100 \times \frac{4}{3} \times \frac{5}{4} = -\frac{500}{3} \approx -166.67$ MPa

**Result Interpretation:** The radial stress is compressive and ranges from 0 at the inner wall to -100 MPa at the outer wall. The hoop stress is also compressive and is highest in magnitude at the inner wall (-266.67 MPa), decreasing in magnitude to -166.67 MPa at the outer wall. The maximum compressive stress is the hoop stress at the inner surface.

### Case 3: Cylinder Subjected to Combined Internal and External Pressures

For a cylinder subjected to both internal pressure $p_i$ and external pressure $p_o$, the stresses are the superposition of the stresses from each pressure.

*   **General Lame's Equations:**
    $$ \sigma_r = A + \frac{B}{r^2} $$
    $$ \sigma_\theta = A - \frac{B}{r^2} $$

*   **Boundary Conditions:**
    *   At $r = r_i$: $\sigma_r = -p_i$
    *   At $r = r_o$: $\sigma_r = -p_o$

*   **Applying Boundary Conditions:**
    *   $-p_i = A + \frac{B}{r_i^2}$  (1)
    *   $-p_o = A + \frac{B}{r_o^2}$ (2)

    Subtracting (2) from (1):
    *   $-p_i - (-p_o) = (A + \frac{B}{r_i^2}) - (A + \frac{B}{r_o^2})$
    *   $p_o - p_i = B(\frac{1}{r_i^2} - \frac{1}{r_o^2}) = B(\frac{r_o^2 - r_i^2}{r_i^2 r_o^2})$
    *   $B = \frac{(p_o - p_i) r_i^2 r_o^2}{r_o^2 - r_i^2}$

    Substitute $B$ into (1):
    *   $-p_i = A + \frac{(p_o - p_i) r_i^2 r_o^2}{r_i^2(r_o^2 - r_i^2)} = A + \frac{(p_o - p_i) r_o^2}{r_o^2 - r_i^2}$
    *   $A = -p_i - \frac{(p_o - p_i) r_o^2}{r_o^2 - r_i^2} = \frac{-p_i(r_o^2 - r_i^2) - (p_o - p_i) r_o^2}{r_o^2 - r_i^2}$
    *   $A = \frac{-p_i r_o^2 + p_i r_i^2 - p_o r_o^2 + p_i r_o^2}{r_o^2 - r_i^2} = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2}$

*   **Combined Lame's Equations:**
    $$ \sigma_r = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} + \frac{(p_o - p_i) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} $$
    $$ \sigma_\theta = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_o - p_i) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} $$

*   **Stress Distribution:**
    *   **Radial Stress ($\sigma_r$):** Varies linearly with $1/r^2$ from $-p_i$ at $r=r_i$ to $-p_o$ at $r=r_o$.
    *   **Hoop Stress ($\sigma_\theta$):** Also varies with $1/r^2$. The sign of the term with $1/r^2$ depends on the relative values of $p_o$ and $p_i$.
        *   If $p_i > p_o$: The $1/r^2$ term is negative, so hoop stress is tensile at the inner radius and becomes less tensile or compressive towards the outer radius.
        *   If $p_o > p_i$: The $1/r^2$ term is positive, so hoop stress is compressive at the inner radius and becomes less compressive towards the outer radius.

*   **Maximum Stresses:**
    *   **Maximum Radial Stress (most compressive):** $\sigma_r = -p_i$ at $r=r_i$.
    *   **Minimum Radial Stress (least compressive):** $\sigma_r = -p_o$ at $r=r_o$.
    *   **Maximum Hoop Stress (most tensile or least compressive):** Depends on the relative values of $p_i$ and $p_o$.
        *   If $p_i > p_o$, maximum hoop stress is at $r=r_i$: $\sigma_{\theta,max} = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_o - p_i) r_i^2 r_o^2}{r_i^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2 - p_o r_o^2 + p_i r_o^2 - p_o r_o^2}{r_o^2 - r_i^2} = \frac{p_i(r_i^2 + r_o^2) - 2 p_o r_o^2}{r_o^2 - r_i^2}$
        *   If $p_o > p_i$, maximum hoop stress is at $r=r_o$: $\sigma_{\theta,max} = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_o - p_i) r_i^2 r_o^2}{r_o^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2 - p_o r_o^2 - (p_o - p_i) r_i^2}{r_o^2 - r_i^2} = \frac{p_i r_i^2 - p_o r_o^2 - p_o r_i^2 + p_i r_i^2}{r_o^2 - r_i^2} = \frac{2 p_i r_i^2 - p_o(r_o^2 + r_i^2)}{r_o^2 - r_i^2}$
        A simpler way to think about the maximum hoop stress is to evaluate $\sigma_\theta$ at $r=r_i$ and $r=r_o$ and pick the largest value (most tensile or least compressive).

    *   **Maximum Compressive Hoop Stress (most compressive):**
        *   If $p_i < p_o$, maximum compressive hoop stress is at $r=r_i$: $\sigma_{\theta,min} = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_o - p_i) r_i^2 r_o^2}{r_i^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2 - p_o r_o^2 - p_o r_o^2 + p_i r_o^2}{r_o^2 - r_i^2} = \frac{p_i(r_i^2 + r_o^2) - 2 p_o r_o^2}{r_o^2 - r_i^2}$ (This will be a large negative number if $p_o$ is much larger than $p_i$)
        *   If $p_i > p_o$, maximum compressive hoop stress is at $r=r_o$: $\sigma_{\theta,min} = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} - \frac{(p_o - p_i) r_i^2 r_o^2}{r_o^2(r_o^2 - r_i^2)} = \frac{p_i r_i^2 - p_o r_o^2 - (p_o - p_i) r_i^2}{r_o^2 - r_i^2} = \frac{2 p_i r_i^2 - p_o(r_o^2 + r_i^2)}{r_o^2 - r_i^2}$ (This will be a negative number if $p_o$ is larger than $p_i$)

    **Simplified Approach for Combined Pressures:**
    Let $p_1$ be the pressure on the inner surface and $p_2$ be the pressure on the outer surface.
    $$ \sigma_r = \frac{p_1 r_i^2 - p_2 r_o^2}{r_o^2 - r_i^2} + \frac{(p_2 - p_1) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} $$
    $$ \sigma_\theta = \frac{p_1 r_i^2 - p_2 r_o^2}{r_o^2 - r_i^2} - \frac{(p_2 - p_1) r_i^2 r_o^2}{r^2(r_o^2 - r_i^2)} $$
    Here, $p_1 = p_i$ and $p_2 = p_o$. If the external pressure is applied inwards, it's treated as positive in the boundary condition at $r_o$.

    **Example with combined pressures:**
    A thick-walled cylinder with $r_i = 0.05$ m and $r_o = 0.10$ m is subjected to an internal pressure $p_i = 150$ MPa and an external pressure $p_o = 50$ MPa. Calculate the stresses at $r=0.075$ m.

    *   $p_1 = 150$ MPa, $p_2 = 50$ MPa
    *   $A = \frac{150 \times 0.05^2 - 50 \times 0.10^2}{0.10^2 - 0.05^2} = \frac{150 \times 0.0025 - 50 \times 0.01}{0.01 - 0.0025} = \frac{0.375 - 0.5}{0.0075} = \frac{-0.125}{0.0075} \approx -16.67$ MPa
    *   $B = \frac{(50 - 150) \times 0.05^2 \times 0.10^2}{0.10^2 - 0.05^2} = \frac{-100 \times 0.0025 \times 0.01}{0.0075} = \frac{-0.0025}{0.0075} \approx -0.333$

    *   **At $r = 0.075$ m:**
        *   $\sigma_r = A + \frac{B}{r^2} = -16.67 + \frac{-0.333}{(0.075)^2} = -16.67 - \frac{0.333}{0.005625} \approx -16.67 - 59.26 = -75.93$ MPa
        *   $\sigma_\theta = A - \frac{B}{r^2} = -16.67 - \frac{-0.333}{(0.075)^2} = -16.67 + 59.26 = 42.59$ MPa

    **Result Interpretation:** At the intermediate radius, the radial stress is compressive (-75.93 MPa), and the hoop stress is tensile (42.59 MPa).

### Strains in Thick-Walled Cylinders (Plane Strain)

Using Hooke's Law and the derived stresses:

*   **Radial Strain ($\epsilon_r$):**
    $$ \epsilon_r = \frac{1+\nu}{E} \left[ (1-\nu)\sigma_r - \nu\sigma_\theta \right] $$
*   **Hoop Strain ($\epsilon_\theta$):**
    $$ \epsilon_\theta = \frac{1+\nu}{E} \left[ (1-\nu)\sigma_\theta - \nu\sigma_r \right] $$
*   **Axial Strain ($\epsilon_z$):** For plane strain, $\epsilon_z = 0$.

### Radial Displacement

The radial displacement $u(r)$ can be found from $\epsilon_\theta = u/r$, so $u(r) = r \epsilon_\theta$.

$$ u(r) = r \frac{1+\nu}{E} \left[ (1-\nu)\sigma_\theta - \nu\sigma_r \right] $$

**For internal pressure only:**
$$ u(r) = r \frac{1+\nu}{E} \left[ (1-\nu) \left( A - \frac{B}{r^2} \right) - \nu \left( A + \frac{B}{r^2} \right) \right] $$
$$ u(r) = \frac{1+\nu}{E} \left[ (1-\nu-\nu)Ar - ((1-\nu)+\nu)\frac{B}{r} \right] $$
$$ u(r) = \frac{1+\nu}{E} \left[ (1-2\nu)Ar - \frac{B}{r} \right] $$

Substituting $A$ and $B$ for internal pressure only:
$$ u(r) = \frac{1+\nu}{E} \left[ (1-2\nu) \frac{p_i r_i^2}{r_o^2 - r_i^2} r - \frac{-p_i r_i^2 r_o^2}{(r_o^2 - r_i^2)} \frac{1}{r} \right] $$
$$ u(r) = \frac{p_i r_i^2 (1+\nu)}{E(r_o^2 - r_i^2)} \left[ (1-2\nu)\frac{r}{r_i^2} + \frac{r_o^2}{r} \right] $$

This equation shows how the radial displacement varies with $r$. The displacement at the inner and outer surfaces can be calculated by substituting $r_i$ and $r_o$.

### Stress Concentration

While Lame's equations describe the stresses in an ideal thick-walled cylinder, real-world applications may involve discontinuities or changes in geometry that can lead to stress concentrations. Examples include:

*   **Holes or Notches:** Drilling holes or creating notches on the surface will cause stress to concentrate around these features, leading to higher local stresses than predicted by Lame's equations.
*   **Geometric Discontinuities:** Sharp corners or abrupt changes in thickness can also cause stress concentrations.

For these cases, Finite Element Analysis (FEA) or stress concentration factors (from handbooks) are used to estimate the localized stresses.

### Design Considerations and Failure Theories

*   **Yielding:** Failure typically occurs by yielding of the material when the maximum stress reaches the yield strength of the material.
*   **Maximum Shear Stress Theory (Tresca):** Failure occurs when the maximum shear stress in the material reaches the shear stress at yield. The maximum shear stress is $(\sigma_{max} - \sigma_{min})/2$. For thick-walled cylinders, the principal stresses are $\sigma_r, \sigma_\theta, \sigma_z$. We need to identify the maximum and minimum principal stresses and check the condition.
*   **Distortion Energy Theory (von Mises):** Failure occurs when the distortion energy per unit volume reaches the distortion energy at yield. This is generally more accurate for ductile materials.

When designing a thick-walled cylinder, engineers ensure that the maximum stress (usually hoop stress at the inner surface) is below the material's yield strength, often with a suitable safety factor.

### Practice Questions and Answers

**Question 1:** A thick-walled steel cylinder has an inner radius of $60$ mm and an outer radius of $120$ mm. It is subjected to an internal pressure of $250$ MPa and an external pressure of $50$ MPa. Determine the radial and hoop stresses at the inner and outer surfaces.

**Answer 1:**
Given: $r_i = 0.06$ m, $r_o = 0.12$ m, $p_i = 250$ MPa, $p_o = 50$ MPa.
Using combined Lame's equations:
$A = \frac{p_i r_i^2 - p_o r_o^2}{r_o^2 - r_i^2} = \frac{250 \times 0.06^2 - 50 \times 0.12^2}{0.12^2 - 0.06^2} = \frac{250 \times 0.0036 - 50 \times 0.0144}{0.0144 - 0.0036} = \frac{0.9 - 0.72}{0.0108} = \frac{0.18}{0.0108} \approx 16.67$ MPa
$B = \frac{(p_o - p_i) r_i^2 r_o^2}{r_o^2 - r_i^2} = \frac{(50 - 250) \times 0.06^2 \times 0.12^2}{0.12^2 - 0.06^2} = \frac{-200 \times 0.0036 \times 0.0144}{0.0108} = \frac{-0.010368}{0.0108} \approx -0.96$

*   **At $r = r_i = 0.06$ m:**
    *   $\sigma_r = -p_i = -250$ MPa
    *   $\sigma_\theta = A - \frac{B}{r_i^2} = 16.67 - \frac{-0.96}{0.06^2} = 16.67 + \frac{0.96}{0.0036} = 16.67 + 266.67 = 283.34$ MPa

*   **At $r = r_o = 0.12$ m:**
    *   $\sigma_r = -p_o = -50$ MPa
    *   $\sigma_\theta = A - \frac{B}{r_o^2} = 16.67 - \frac{-0.96}{0.12^2} = 16.67 + \frac{0.96}{0.0144} = 16.67 + 66.67 = 83.34$ MPa

**Question 2:** A thick-walled cylinder with an inner radius of $40$ mm and an outer radius of $80$ mm is subjected to an internal pressure of $100$ MPa. Calculate the radial and hoop stresses at the mid-wall radius ($r = 60$ mm).

**Answer 2:**
Given: $r_i = 0.04$ m, $r_o = 0.08$ m, $p_i = 100$ MPa, $p_o = 0$.
Using Lame's equations for internal pressure only:
$A = \frac{p_i r_i^2}{r_o^2 - r_i^2} = \frac{100 \times 0.04^2}{0.08^2 - 0.04^2} = \frac{100 \times 0.0016}{0.0064 - 0.0016} = \frac{0.16}{0.0048} \approx 33.33$ MPa
$B = -\frac{p_i r_i^2 r_o^2}{r_o^2 - r_i^2} = -\frac{100 \times 0.04^2 \times 0.08^2}{0.08^2 - 0.04^2} = -\frac{100 \times 0.0016 \times 0.0064}{0.0048} = -\frac{0.01024}{0.0048} \approx -2.133$

*   **At $r = 0.06$ m:**
    *   $\sigma_r = A + \frac{B}{r^2} = 33.33 + \frac{-2.133}{0.06^2} = 33.33 - \frac{2.133}{0.0036} = 33.33 - 592.5 = -559.17$ MPa.
        *Correction in calculation for B for internal pressure only:*
        $B = \frac{p_i r_i^2 r_o^2}{r_o^2 - r_i^2} = \frac{100 \times 0.04^2 \times 0.08^2}{0.08^2 - 0.04^2} = \frac{100 \times 0.0016 \times 0.0064}{0.0048} = \frac{0.01024}{0.0048} \approx 2.133$
        *Redoing stress calculation:*
        $\sigma_r = A + \frac{B}{r^2} = 33.33 + \frac{2.133}{0.06^2} = 33.33 + 592.5 = 625.83$ MPa. This is incorrect. Let's re-evaluate B and the equations.

        **Let's use the standard formulas directly for clarity.**
        For internal pressure $p_i$:
        $\sigma_r = p_i \frac{r_i^2}{r_o^2 - r_i^2} \left( 1 - \frac{r_o^2}{r^2} \right)$
        $\sigma_\theta = p_i \frac{r_i^2}{r_o^2 - r_i^2} \left( 1 + \frac{r_o^2}{r^2} \right)$

        $r_i = 0.04$ m, $r_o = 0.08$ m, $p_i = 100$ MPa, $r = 0.06$ m.
        $\frac{r_i^2}{r_o^2 - r_i^2} = \frac{0.04^2}{0.08^2 - 0.04^2} = \frac{0.0016}{0.0048} = \frac{1}{3}$
        $\frac{r_o^2}{r^2} = \frac{0.08^2}{0.06^2} = \frac{0.0064}{0.0036} = \frac{64}{36} = \frac{16}{9}$

        *   $\sigma_r = 100 \times \frac{1}{3} \left( 1 - \frac{16}{9} \right) = \frac{100}{3} \left( -\frac{7}{9} \right) = -\frac{700}{27} \approx -25.93$ MPa
        *   $\sigma_\theta = 100 \times \frac{1}{3} \left( 1 + \frac{16}{9} \right) = \frac{100}{3} \left( \frac{25}{9} \right) = \frac{2500}{27} \approx 92.59$ MPa

        **Correct Answer 2:**
        Radial Stress ($\sigma_r$) at $r=60$ mm: $\approx -25.93$ MPa (compressive)
        Hoop Stress ($\sigma_\theta$) at $r=60$ mm: $\approx 92.59$ MPa (tensile)

### Important Points to Remember

*   **Lame's equations are fundamental for thick-walled cylinders.** They describe the variation of radial and hoop stresses with radial distance.
*   **Radial stress is always compressive.** It varies from the internal pressure (at the inner radius) to the external pressure (at the outer radius).
*   **Hoop stress is generally tensile when subjected to internal pressure and compressive when subjected to external pressure.** Its magnitude is maximum at the inner radius.
*   **For closed-end cylinders, axial stress is uniform and tensile under internal pressure, and compressive under external pressure.**
*   **The maximum stress is usually the hoop stress at the inner surface** for cylinders subjected to internal pressure.
*   **The maximum compressive stress is usually the hoop stress at the inner surface** for cylinders subjected to external pressure.
*   **Superposition of stresses is valid** for combined internal and external pressures.
*   **Plane strain assumption is common for long cylinders.**
*   **Stress concentrations** can significantly increase local stresses at discontinuities.
*   **Failure is typically governed by yielding** when the maximum stress exceeds the material's yield strength.

---
