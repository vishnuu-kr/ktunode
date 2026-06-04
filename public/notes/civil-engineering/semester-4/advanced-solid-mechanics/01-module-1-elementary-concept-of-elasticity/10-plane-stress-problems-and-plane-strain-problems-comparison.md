---
title: "plane stress problems and plane strain problems comparison"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f2"
status: "completed"
scrapedAt: "2026-05-20T18:42:31.421Z"
---
# Advanced Solid Mechanics: Module 1 - Elementary Concepts of Elasticity

## Topic: Plane Stress vs. Plane Strain Problems: A Comparison

This module introduces fundamental concepts in the analysis of deformable bodies under stress and strain. This topic focuses on simplifying complex 3D stress and strain states into two-dimensional scenarios, which are crucial for many engineering applications.

---

### Learning Outcomes:

*   **Understand the fundamental assumptions and conditions for plane stress problems.**
*   **Understand the fundamental assumptions and conditions for plane strain problems.**
*   **Differentiate between plane stress and plane strain conditions in terms of stress and strain components.**
*   **Identify the governing equilibrium equations for both plane stress and plane strain problems.**
*   **Relate the constitutive (stress-strain) laws for both plane stress and plane strain.**
*   **Solve basic problems involving plane stress and plane strain.**

---

### 1. Introduction to Simplified 2D Analysis

Many real-world engineering problems involve components that are significantly longer in one direction than their cross-sectional dimensions. This geometric characteristic allows for simplification of the 3D stress and strain analysis into 2D problems. Two common simplifications are:

*   **Plane Stress:** Assumes one dimension is negligible, leading to zero stress in that direction.
*   **Plane Strain:** Assumes one dimension is very long, leading to negligible strain in that direction.

---

### 2. Plane Stress Problems

#### 2.1. Definition and Assumptions

A **plane stress state** exists when the stress component acting perpendicular to a particular plane is zero, and the shear stresses on planes parallel to this direction are also zero.

**Assumptions:**

*   The stress acts predominantly in one plane (e.g., the xy-plane).
*   The stress component in the direction perpendicular to this plane (e.g., z-direction) is zero:
    *   $\sigma_z = 0$
    *   $\tau_{xz} = 0$
    *   $\tau_{yz} = 0$

#### 2.2. Stress Components

In a plane stress problem, only three stress components are non-zero and need to be considered:

*   $\sigma_x$: Normal stress in the x-direction.
*   $\sigma_y$: Normal stress in the y-direction.
*   $\tau_{xy}$: Shear stress acting on the xy-plane.

#### 2.3. Strain Components

Due to the applied stresses and the constitutive relations, the strain components will not all be zero. Using Hooke's Law (generalized for plane stress):

*   $\epsilon_x = \frac{1}{E}(\sigma_x - \nu\sigma_y)$
*   $\epsilon_y = \frac{1}{E}(\nu\sigma_x - \sigma_y)$
*   $\gamma_{xy} = \frac{1}{G}\tau_{xy} = \frac{2(1+\nu)}{E}\tau_{xy}$

The strain in the z-direction is **not** zero:

*   $\epsilon_z = \frac{1}{E}(\sigma_z - \nu\sigma_x - \nu\sigma_y)$
*   Since $\sigma_z = 0$, $\epsilon_z = -\frac{\nu}{E}(\sigma_x + \sigma_y)$

**Important Note:** While $\sigma_z=0$, $\epsilon_z$ is generally non-zero and can be significant.

#### 2.4. Equilibrium Equations (Plane Stress)

For a static equilibrium in the xy-plane, the following equations must be satisfied:

*   $\frac{\partial \sigma_x}{\partial x} + \frac{\partial \tau_{xy}}{\partial y} + X = 0$
*   $\frac{\partial \sigma_y}{\partial y} + \frac{\partial \tau_{xy}}{\partial x} + Y = 0$

Where $X$ and $Y$ are body forces per unit volume in the x and y directions, respectively.

#### 2.5. Governing Equations (Plane Stress)

Combining equilibrium and compatibility equations (assuming small deformations and linear elasticity) with the stress-strain relations, we can derive governing equations, often in the form of Airy stress functions, which satisfy equilibrium and compatibility automatically.

The Airy stress function, $\phi(x, y)$, is defined such that:

*   $\sigma_x = \frac{\partial^2 \phi}{\partial y^2}$
*   $\sigma_y = \frac{\partial^2 \phi}{\partial x^2}$
*   $\tau_{xy} = -\frac{\partial^2 \phi}{\partial x \partial y}$

The Airy stress function must satisfy the **biharmonic equation**:

*   $\nabla^4 \phi = \nabla^2(\nabla^2 \phi) = \frac{\partial^4 \phi}{\partial x^4} + 2\frac{\partial^4 \phi}{\partial x^2 \partial y^2} + \frac{\partial^4 \phi}{\partial y^4} = 0$ (assuming no body forces)

#### 2.6. Examples of Plane Stress Problems

*   **Thin plates under in-plane loading:** A flat plate with one dimension significantly smaller than the other two, subjected to forces or stresses in the plane of the plate (e.g., a thin rectangular sheet under tension).
*   **Thin-walled pressure vessels:** The stresses on the wall of a thin spherical or cylindrical vessel under internal pressure. The stresses are predominantly in the tangential and longitudinal directions.
*   **Components in aerospace and automotive:** Many structural components are designed to be thin and loaded in their plane.

---

### 3. Plane Strain Problems

#### 3.1. Definition and Assumptions

A **plane strain state** exists when the strain component in one direction is zero, and the shear strains on planes parallel to this direction are also zero. This occurs when a body is constrained to deform only in a plane, typically due to its extreme length in the third dimension.

**Assumptions:**

*   The strain acts predominantly in one plane (e.g., the xy-plane).
*   The strain component in the direction perpendicular to this plane (e.g., z-direction) is zero:
    *   $\epsilon_z = 0$
    *   $\gamma_{xz} = 0$
    *   $\gamma_{yz} = 0$

#### 3.2. Strain Components

In a plane strain problem, only three strain components are non-zero and need to be considered:

*   $\epsilon_x$: Normal strain in the x-direction.
*   $\epsilon_y$: Normal strain in the y-direction.
*   $\gamma_{xy}$: Shear strain in the xy-plane.

#### 3.3. Stress Components

Due to the applied strains and the constitutive relations, the stress components will not all be zero. Using Hooke's Law (generalized for plane strain):

*   $\epsilon_x = \frac{1}{E}[(1-\nu^2)\sigma_x - \nu(1+\nu)\sigma_y]$
*   $\epsilon_y = \frac{1}{E}[\nu(1+\nu)\sigma_x - (1-\nu^2)\sigma_y]$
*   $\gamma_{xy} = \frac{1}{G}\tau_{xy} = \frac{2(1+\nu)}{E}\tau_{xy}$

The stress in the z-direction is **not** zero:

*   $\sigma_z = \nu(\sigma_x + \sigma_y) + E\epsilon_z$
*   Since $\epsilon_z = 0$, $\sigma_z = \nu(\sigma_x + \sigma_y)$

**Important Note:** While $\epsilon_z=0$, $\sigma_z$ is generally non-zero and acts as a "confining" stress.

**Simplifying the constitutive relations for plane strain:**

It is often convenient to express stresses in terms of strains. We can invert the plane strain constitutive equations:

*   $\sigma_x = \frac{E}{(1-\nu^2)} [\epsilon_x + \frac{\nu}{1-\nu}\epsilon_y]$
*   $\sigma_y = \frac{E}{(1-\nu^2)} [\epsilon_y + \frac{\nu}{1-\nu}\epsilon_x]$
*   $\tau_{xy} = G \gamma_{xy} = \frac{E}{2(1+\nu)} \gamma_{xy}$

Notice that $\frac{E}{(1-\nu^2)}$ and $\frac{E}{1+\nu}$ are used. It's sometimes useful to define a modified Young's modulus $E' = \frac{E}{1-\nu^2}$ and a modified Poisson's ratio $\nu' = \frac{\nu}{1-\nu}$.

*   $\sigma_x = E'[\epsilon_x + \nu'\epsilon_y]$
*   $\sigma_y = E'[\epsilon_y + \nu'\epsilon_x]$

#### 3.4. Equilibrium Equations (Plane Strain)

For a static equilibrium in the xy-plane, the following equations must be satisfied:

*   $\frac{\partial \sigma_x}{\partial x} + \frac{\partial \tau_{xy}}{\partial y} + X = 0$
*   $\frac{\partial \sigma_y}{\partial y} + \frac{\partial \tau_{xy}}{\partial x} + Y = 0$

These are the same equilibrium equations as in plane stress, but the constitutive relations linking stress and strain are different.

#### 3.5. Governing Equations (Plane Strain)

Similar to plane stress, an Airy stress function can be used. However, the derivation leads to the same biharmonic equation for $\phi(x, y)$:

*   $\nabla^4 \phi = 0$ (assuming no body forces)

This means that the Airy stress function formulation is applicable to both plane stress and plane strain problems, with the interpretation of the resulting stresses and strains differing due to the different constitutive relations.

#### 3.6. Examples of Plane Strain Problems

*   **Long structures under transverse loading:** A long dam, retaining wall, or tunnel subjected to pressure from water or soil. The assumption is that the deformation is primarily in the cross-section, and the length is so large that end effects are negligible.
*   **Indentation of a large surface:** The stress and strain field around an indenter pressed into a very large, semi-infinite elastic solid.
*   **Extrusion processes:** Metal forming operations where material is forced through a die.
*   **Bearing stresses on long pins:** When a load is applied to a pin through a long lug.

---

### 4. Comparison Table: Plane Stress vs. Plane Strain

| Feature             | Plane Stress                                  | Plane Strain                                       |
| :------------------ | :-------------------------------------------- | :------------------------------------------------- |
| **Primary Assumption** | $\sigma_z = 0, \tau_{xz} = 0, \tau_{yz} = 0$ | $\epsilon_z = 0, \gamma_{xz} = 0, \gamma_{yz} = 0$ |
| **Geometric Condition** | Thin in the z-direction                     | Long in the z-direction                            |
| **Non-zero Stresses** | $\sigma_x, \sigma_y, \tau_{xy}$               | $\sigma_x, \sigma_y, \tau_{xy}, \sigma_z$          |
| **Non-zero Strains**  | $\epsilon_x, \epsilon_y, \gamma_{xy}, \epsilon_z$ | $\epsilon_x, \epsilon_y, \gamma_{xy}$              |
| **$\epsilon_z$**      | $\epsilon_z = -\frac{\nu}{E}(\sigma_x + \sigma_y)$ (non-zero) | $\epsilon_z = 0$ (zero)                          |
| **$\sigma_z$**        | $\sigma_z = 0$ (zero)                         | $\sigma_z = \nu(\sigma_x + \sigma_y)$ (non-zero)   |
| **Constitutive Law (Simplified)** | $\epsilon_x = \frac{1}{E}(\sigma_x - \nu\sigma_y)$, etc. | $\sigma_x = \frac{E}{(1-\nu^2)} (\epsilon_x + \frac{\nu}{1-\nu}\epsilon_y)$, etc. |
| **Governing Equation** | $\nabla^4 \phi = 0$ (Airy stress function)  | $\nabla^4 \phi = 0$ (Airy stress function)       |
| **Examples**        | Thin plates, pressure vessels               | Dams, retaining walls, tunnels                     |

---

### 5. Practice Problems

**Problem 1 (Conceptual):**

A thin square plate is subjected to uniform tensile stress $\sigma_0$ in the x-direction. If the plate is in a plane stress condition, what are the values of $\sigma_z$ and $\epsilon_z$?

**Solution 1:**

*   **$\sigma_z$:** In plane stress, $\sigma_z = 0$ by definition.
*   **$\epsilon_z$:** Using the constitutive relation for plane stress:
    $\epsilon_z = -\frac{\nu}{E}(\sigma_x + \sigma_y)$
    Given $\sigma_x = \sigma_0$ and $\sigma_y = 0$ (since it's only in the x-direction),
    $\epsilon_z = -\frac{\nu}{E}(\sigma_0 + 0) = -\frac{\nu\sigma_0}{E}$
    So, $\epsilon_z$ is non-zero and depends on Poisson's ratio and the applied stress.

**Problem 2 (Conceptual):**

A long concrete dam is subjected to hydrostatic pressure from water on one side. Consider a slice of the dam such that the cross-section is in the xy-plane. If we assume plane strain conditions for this slice, what is the stress component $\sigma_z$ in terms of $\sigma_x$ and $\sigma_y$?

**Solution 2:**

In plane strain, the assumption is $\epsilon_z = 0$. The constitutive relation relating $\sigma_z$ to other stresses and strains is:
$\sigma_z = \nu(\sigma_x + \sigma_y) + E\epsilon_z$
Since $\epsilon_z = 0$ for plane strain,
$\sigma_z = \nu(\sigma_x + \sigma_y)$
So, $\sigma_z$ is non-zero and represents a confining stress in the z-direction.

**Problem 3 (Application - requires prior knowledge of stress analysis):**

Consider a thin plate of width $W$ and thickness $t$ ($t \ll W$) under uniaxial tension $P$ applied at its ends in the x-direction. Assume plane stress.
a) What are the non-zero stress components?
b) What are the strains $\epsilon_x$, $\epsilon_y$, and $\epsilon_z$?
c) If the plate were infinitely long and subjected to the same axial load $P$ but constrained from lateral expansion in the y-direction, and we assume plane strain, how would the stress components and strains differ?

**Solution 3:**

a) **Plane Stress:**
$\sigma_x = P/A = P/(Wt)$, $\sigma_y = 0$, $\tau_{xy} = 0$. All other stresses are zero.

b) **Plane Stress Strains:**
$\epsilon_x = \frac{1}{E}(\sigma_x - \nu\sigma_y) = \frac{1}{E}(\frac{P}{Wt} - \nu \cdot 0) = \frac{P}{E W t}$
$\epsilon_y = \frac{1}{E}(\nu\sigma_x - \sigma_y) = \frac{1}{E}(\nu \frac{P}{Wt} - 0) = \frac{\nu P}{E W t}$
$\epsilon_z = -\frac{\nu}{E}(\sigma_x + \sigma_y) = -\frac{\nu}{E}(\frac{P}{Wt} + 0) = -\frac{\nu P}{E W t}$

c) **Plane Strain:**
For plane strain under uniaxial tension $P$ in the x-direction, the constraint is $\epsilon_y = 0$.
Using the plane strain constitutive relations:
$\epsilon_x = \frac{1}{E'}(\sigma_x + \nu'\epsilon_y)$, where $E' = \frac{E}{1-\nu^2}$ and $\nu' = \frac{\nu}{1-\nu}$.
Since $\epsilon_y = 0$, $\epsilon_x = \frac{\sigma_x}{E'}$. This means $\sigma_x = E'\epsilon_x$.
We also have $\sigma_z = \nu(\sigma_x + \sigma_y)$.
Let's assume the applied load $P$ still creates an average axial stress $\sigma_x = P/(Wt)$.
Then $\epsilon_x = \frac{\sigma_x}{E'} = \frac{\sigma_x (1-\nu^2)}{E}$. This strain is smaller than in plane stress.
$\epsilon_y = 0$ (by definition of plane strain).
$\sigma_y$: Since $\epsilon_y = \frac{1}{E}[\nu(1+\nu)\sigma_x - (1-\nu^2)\sigma_y] = 0$, we get
$\sigma_y = \frac{\nu(1+\nu)}{1-\nu^2} \sigma_x = \frac{\nu}{1-\nu} \sigma_x$. This is a compressive stress.
$\sigma_z = \nu(\sigma_x + \sigma_y) = \nu(\sigma_x + \frac{\nu}{1-\nu}\sigma_x) = \nu\sigma_x(1 + \frac{\nu}{1-\nu}) = \nu\sigma_x(\frac{1-\nu+\nu}{1-\nu}) = \frac{\nu}{1-\nu} \sigma_x$.
So, for plane strain under uniaxial tension, $\sigma_y = \sigma_z = \frac{\nu}{1-\nu} \sigma_x$.
This shows that the material is significantly more constrained and experiences higher stresses in the transverse directions compared to plane stress.

---

### 6. Important Points to Remember

*   **The choice between plane stress and plane strain depends critically on the geometry of the body and the nature of the applied loads.**
*   **Plane stress implies zero stress in one direction, but not necessarily zero strain in that direction.**
*   **Plane strain implies zero strain in one direction, but not necessarily zero stress in that direction.** The stress in the constrained direction ($\sigma_z$ for plane strain) acts as a confining pressure.
*   **The Airy stress function ($\phi$) formulation is a powerful tool for solving both plane stress and plane strain problems**, as the governing differential equation ($\nabla^4 \phi = 0$) is the same. The difference lies in the constitutive relations used to relate stresses to strains.
*   **Thin-walled pressure vessels are classic examples of plane stress.**
*   **Long structures like dams and tunnels are classic examples of plane strain.**
*   **In plane strain, the effective Young's modulus and Poisson's ratio are modified** due to the constraint in the third dimension, leading to stiffer behavior.

---
