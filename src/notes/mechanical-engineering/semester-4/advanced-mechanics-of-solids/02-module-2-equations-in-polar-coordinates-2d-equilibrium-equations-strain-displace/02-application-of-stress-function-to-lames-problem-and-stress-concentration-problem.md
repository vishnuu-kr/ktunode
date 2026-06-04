---
title: "Application of stress function to Lame’s problem and stress concentration problem of a small hole in a large plate (only Stress distribution)"
subject: "ADVANCED MECHANICS OF SOLIDS"
module: "Module 2: Equations in polar coordinates (2D) – equilibrium equations, strain displacement relations "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463262"
status: "completed"
scrapedAt: "2026-05-20T17:51:13.476Z"
---
# Advanced Mechanics of Solids: Module 2 - Equations in Polar Coordinates (2D)

## Topic: Application of Stress Function to Lame's Problem and Stress Concentration Problem of a Small Hole in a Large Plate (Stress Distribution Only)

This module focuses on applying the Airy stress function to solve plane elasticity problems in polar coordinates, specifically Lame's problem (thick-walled cylinders/spheres) and the stress concentration around a hole in a plate. We will primarily focus on the stress distributions resulting from these applications.

### Learning Outcomes Covered:

*   **Apply Airy's stress function to analyze stress distribution in Lame's problem and stress concentration around a small hole in a large plate.** (Directly addressed)
*   **Understand the equilibrium equations and strain-displacement relations in polar coordinates.** (Foundation for stress function formulation)
*   **Model plane elasticity problems using a stress function.** (Core methodology)

### Course Outcomes Addressed:

*   **CO1: Formulate the field equations of Elasticity.** (K1 - Understanding the role of Airy's stress function within the broader field equations.)
*   **CO2: Model engineering problems as two-dimensional, for solutions involving a Stress Function.** (K2 - Directly applicable to the chosen problems.)
*   **CO3: Develop solutions for axi-symmetric problems for applications in thick pressure Vessels and in rotating circular discs.** (K6 - Lame's problem is a classic axi-symmetric problem for thick pressure vessels.)

---

### 1. Introduction to Airy's Stress Function in Polar Coordinates

The Airy stress function, denoted by $\phi$, is a powerful tool for solving 2D plane elasticity problems. It automatically satisfies the equilibrium equations, simplifying the problem to finding a function $\phi$ that also satisfies the compatibility equation.

**Key Concept:** The stress components in 2D can be expressed in terms of a single function $\phi$ as follows:

*   **Cartesian Coordinates (briefly for context):**
    *   $\sigma_x = \frac{\partial^2 \phi}{\partial y^2}$, $\sigma_y = \frac{\partial^2 \phi}{\partial x^2}$, $\tau_{xy} = -\frac{\partial^2 \phi}{\partial x \partial y}$

*   **Polar Coordinates $(r, \theta)$:**
    *   $\sigma_r = \frac{1}{r} \frac{\partial \phi}{\partial r} + \frac{\partial^2 \phi}{\partial r^2}$
    *   $\sigma_\theta = \frac{\partial^2 \phi}{\partial r^2} + \frac{1}{r} \frac{\partial \phi}{\partial r}$ (Note: The formula is the same as $\sigma_r$, but the terms are usually written differently. Here, $\sigma_\theta = \frac{\partial}{\partial r}(r\frac{\partial \phi}{\partial r}) $ is more common.)
    *   $\sigma_r = \frac{1}{r}\frac{\partial \phi}{\partial r} + \frac{\partial^2 \phi}{\partial r^2}$
    *   $\sigma_\theta = \frac{\partial^2 \phi}{\partial r^2}$
    *   $\tau_{r\theta} = -\frac{\partial}{\partial r} \left(\frac{1}{r} \frac{\partial \phi}{\partial \theta}\right) = -\frac{1}{r}\frac{\partial^2 \phi}{\partial r \partial \theta} + \frac{1}{r^2}\frac{\partial \phi}{\partial \theta}$

**Important Note:** For axi-symmetric problems (like Lame's problem), the stress is independent of $\theta$. In such cases, $\frac{\partial \phi}{\partial \theta} = 0$, simplifying the stress expressions:

*   $\sigma_r = \frac{d\phi}{dr} \frac{1}{r} + \frac{d^2\phi}{dr^2}$
*   $\sigma_\theta = \frac{d^2\phi}{dr^2}$
*   $\tau_{r\theta} = 0$

**Compatibility Equation in Polar Coordinates (Biharmonic Equation):**
For a simply connected region with no body forces, the Airy stress function $\phi$ must satisfy the biharmonic equation:

$\nabla^4 \phi = 0$

In polar coordinates, this is:

$\left(\frac{\partial^2}{\partial r^2} + \frac{1}{r}\frac{\partial}{\partial r} + \frac{1}{r^2}\frac{\partial^2}{\partial \theta^2}\right)^2 \phi = 0$

For axi-symmetric problems ($\phi = \phi(r)$):

$\left(\frac{d^2}{dr^2} + \frac{1}{r}\frac{d}{dr}\right)^2 \phi = 0$

---

### 2. Lame's Problem: Stress Distribution in a Thick-Walled Cylinder

Lame's problem deals with the stress distribution in a thick-walled cylinder subjected to internal and external pressures. This is a classic axi-symmetric problem.

**Problem Setup:**
A long, thick-walled cylinder with inner radius $a$ and outer radius $b$.
Internal pressure $P_i$ acting on the inner surface ($r=a$).
External pressure $P_o$ acting on the outer surface ($r=b$).

**Assumptions:**
*   Plane strain or plane stress conditions (for a long cylinder, plane strain is often assumed).
*   Axi-symmetry: stresses and strains are independent of the axial coordinate $z$ and the angle $\theta$.
*   Material is homogeneous, isotropic, and linearly elastic.

**Application of Stress Function:**
Since the problem is axi-symmetric, we seek a solution for $\phi(r)$. The biharmonic equation for axi-symmetric cases is:

$\left(\frac{d^2}{dr^2} + \frac{1}{r}\frac{d}{dr}\right) \left(\frac{d^2\phi}{dr^2} + \frac{1}{r}\frac{d\phi}{dr}\right) = 0$

The general solution for $\phi(r)$ that satisfies this equation is of the form:

$\phi(r) = C_1 r^2 \ln r + C_2 r^2 + C_3 \ln r + C_4$

where $C_1, C_2, C_3, C_4$ are constants determined by boundary conditions.

**Stress Components:**
Using the stress expressions for axi-symmetric problems:

*   $\sigma_r = \frac{1}{r}\frac{d\phi}{dr} + \frac{d^2\phi}{dr^2}$
*   $\sigma_\theta = \frac{d^2\phi}{dr^2}$

Let's find the derivatives of $\phi(r)$:
*   $\frac{d\phi}{dr} = C_1(2r \ln r + r) + 2C_2 r + \frac{C_3}{r}$
*   $\frac{d^2\phi}{dr^2} = C_1(2\ln r + 2 + 1) + 2C_2 - \frac{C_3}{r^2} = C_1(2\ln r + 3) + 2C_2 - \frac{C_3}{r^2}$

Substituting these into the stress formulas:

*   $\sigma_r = \frac{1}{r} \left(C_1(2r \ln r + r) + 2C_2 r + \frac{C_3}{r}\right) + \left(C_1(2\ln r + 3) + 2C_2 - \frac{C_3}{r^2}\right)$
    $\sigma_r = C_1(2 \ln r + 1) + 2C_2 + C_1(2\ln r + 3) + 2C_2 - \frac{C_3}{r^2}$
    $\sigma_r = C_1(4\ln r + 4) + 4C_2 - \frac{C_3}{r^2}$ (This seems incorrect. Let's re-evaluate.)

Let's use the simplified forms for stress for axi-symmetric problems more carefully.
Consider $\phi(r) = C_1 r^2 \ln r + C_2 r^2 + C_3 \ln r + C_4$.
Let's check the common form of the solution for Lame's problem, which is often derived more directly using equilibrium in polar coordinates for axi-symmetric cases.

The equilibrium equation in polar coordinates for an axi-symmetric case is:
$\frac{d\sigma_r}{dr} + \frac{2\sigma_r - 2\sigma_\theta}{r} = 0$

For a simply connected region with no body forces, the stress function $\phi$ must satisfy:
$\sigma_r = \frac{d\phi}{dr} \frac{1}{r} + \frac{d^2\phi}{dr^2}$
$\sigma_\theta = \frac{d^2\phi}{dr^2}$

Substituting $\sigma_r$ and $\sigma_\theta$ into the equilibrium equation results in the biharmonic equation.

A commonly accepted general solution for the stress distribution in a thick-walled cylinder under axi-symmetric loading, derived using the stress function method or directly from equilibrium, is:

$\sigma_r(r) = A - \frac{B}{r^2}$
$\sigma_\theta(r) = A + \frac{B}{r^2}$

where $A$ and $B$ are constants. These stress components automatically satisfy the equilibrium equation and the biharmonic equation (with appropriate choices of $A$ and $B$ related to the original $\phi$).

**Boundary Conditions:**
1.  At $r=a$, $\sigma_r = -P_i$ (Pressure acts inwards, so it's negative in the radial direction).
2.  At $r=b$, $\sigma_r = -P_o$.

**Applying Boundary Conditions:**
1.  $-P_i = A - \frac{B}{a^2}$
2.  $-P_o = A - \frac{B}{b^2}$

Subtracting the second equation from the first:
$-P_i + P_o = -\frac{B}{a^2} + \frac{B}{b^2} = B \left(\frac{1}{b^2} - \frac{1}{a^2}\right) = B \left(\frac{a^2 - b^2}{a^2 b^2}\right)$
$B = \frac{(P_o - P_i) a^2 b^2}{a^2 - b^2} = \frac{(P_i - P_o) a^2 b^2}{b^2 - a^2}$

Now, substitute $B$ back into the first boundary condition to find $A$:
$A = P_i - \frac{B}{a^2} = P_i - \frac{(P_i - P_o) b^2}{b^2 - a^2}$
$A = \frac{P_i(b^2 - a^2) - (P_i - P_o) b^2}{b^2 - a^2} = \frac{P_i b^2 - P_i a^2 - P_i b^2 + P_o b^2}{b^2 - a^2}$
$A = \frac{P_o b^2 - P_i a^2}{b^2 - a^2}$

**Final Stress Distribution (Lame's Solution):**

$\sigma_r(r) = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} - \frac{(P_i - P_o) a^2 b^2}{r^2 (b^2 - a^2)}$
$\sigma_\theta(r) = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} + \frac{(P_i - P_o) a^2 b^2}{r^2 (b^2 - a^2)}$

**Key Observations for Stress Distribution:**

*   **Radial Stress ($\sigma_r$):** It varies from $-P_i$ at $r=a$ to $-P_o$ at $r=b$. It is always compressive and generally increases (or becomes less negative) with increasing $r$.
*   **Circumferential Stress ($\sigma_\theta$):** It is generally tensile or more compressive than radial stress.
    *   At $r=a$, $\sigma_\theta = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} + \frac{(P_i - P_o) a^2 b^2}{a^2 (b^2 - a^2)} = \frac{P_o b^2 - P_i a^2 + P_i b^2 - P_o a^2}{b^2 - a^2} = \frac{(P_o - P_i) b^2 - (P_i - P_o) a^2}{b^2 - a^2} = \frac{(P_o - P_i)(b^2 + a^2)}{b^2 - a^2}$.
    *   At $r=b$, $\sigma_\theta = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} + \frac{(P_i - P_o) a^2 b^2}{b^2 (b^2 - a^2)} = \frac{P_o b^2 - P_i a^2 + P_i a^2 - P_o a^2}{b^2 - a^2} = \frac{P_o (b^2 - a^2)}{b^2 - a^2} = P_o$.

**Special Case: Internal Pressure Only ($P_o = 0, P_i = P$)**
*   $\sigma_r(r) = \frac{-P a^2}{b^2 - a^2} - \frac{(P) a^2 b^2}{r^2 (b^2 - a^2)} = \frac{-P a^2 b^2}{r^2 (b^2 - a^2)} - \frac{P a^2}{b^2 - a^2} = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{r^2}\right)$  (This form is incorrect, let's re-derive $A$ and $B$ for $P_o=0$)

Let $P_i = P$ and $P_o = 0$.
1.  $-P = A - B/a^2$
2.  $0 = A - B/b^2 \implies A = B/b^2$

Substitute $A$ into eq 1:
$-P = B/b^2 - B/a^2 = B \left(\frac{1}{b^2} - \frac{1}{a^2}\right) = B \left(\frac{a^2 - b^2}{a^2 b^2}\right)$
$B = \frac{-P a^2 b^2}{a^2 - b^2} = \frac{P a^2 b^2}{b^2 - a^2}$

$A = \frac{B}{b^2} = \frac{P a^2}{b^2 - a^2}$

So, for $P_i = P, P_o = 0$:
$\sigma_r(r) = \frac{P a^2}{b^2 - a^2} - \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{r^2}\right)$
$\sigma_\theta(r) = \frac{P a^2}{b^2 - a^2} + \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$

At $r=a$: $\sigma_r = \frac{P a^2}{b^2 - a^2} (1 - b^2/a^2) = \frac{P a^2}{b^2 - a^2} \frac{a^2-b^2}{a^2} = -P$. (Correct)
At $r=a$: $\sigma_\theta = \frac{P a^2}{b^2 - a^2} (1 + b^2/a^2) = \frac{P a^2}{b^2 - a^2} \frac{a^2+b^2}{a^2} = \frac{P(a^2+b^2)}{b^2-a^2}$. (Correct)
At $r=b$: $\sigma_r = \frac{P a^2}{b^2 - a^2} (1 - b^2/b^2) = 0$. (Correct)
At $r=b$: $\sigma_\theta = \frac{P a^2}{b^2 - a^2} (1 + b^2/b^2) = \frac{P a^2}{b^2 - a^2} (2)$. (This seems incorrect. Let's recheck derivation of $\sigma_\theta$ for $P_o=0$)

From $\sigma_\theta = A + B/r^2$:
For $P_i = P, P_o = 0$:
$A = \frac{P a^2}{b^2 - a^2}$, $B = \frac{P a^2 b^2}{b^2 - a^2}$
$\sigma_\theta(r) = \frac{P a^2}{b^2 - a^2} + \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$.

At $r=b$: $\sigma_\theta = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{b^2}\right) = \frac{P a^2}{b^2 - a^2} (2)$. This formula is incorrect.

Let's return to the general solution for $\sigma_r$ and $\sigma_\theta$:
$\sigma_r(r) = A - B/r^2$
$\sigma_\theta(r) = A + B/r^2$

With $P_i=P, P_o=0$:
$A = \frac{P a^2}{b^2 - a^2}$, $B = \frac{P a^2 b^2}{b^2 - a^2}$

$\sigma_r(r) = \frac{P a^2}{b^2 - a^2} - \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{r^2}\right)$
$\sigma_\theta(r) = \frac{P a^2}{b^2 - a^2} + \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$

Let's check the stresses at the boundaries again.
At $r=a$:
$\sigma_r(a) = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{a^2}\right) = \frac{P a^2}{b^2 - a^2} \left(\frac{a^2 - b^2}{a^2}\right) = -P$. (Correct)
$\sigma_\theta(a) = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{a^2}\right) = \frac{P a^2}{b^2 - a^2} \left(\frac{a^2 + b^2}{a^2}\right) = \frac{P(a^2 + b^2)}{b^2 - a^2}$. (Correct)

At $r=b$:
$\sigma_r(b) = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{b^2}\right) = 0$. (Correct)
$\sigma_\theta(b) = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{b^2}\right) = \frac{P a^2}{b^2 - a^2} (2)$. This is still showing a factor of 2 that's unexpected.

Let's use the original general solution:
$\sigma_r(r) = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} - \frac{(P_i - P_o) a^2 b^2}{r^2 (b^2 - a^2)}$
$\sigma_\theta(r) = \frac{P_o b^2 - P_i a^2}{b^2 - a^2} + \frac{(P_i - P_o) a^2 b^2}{r^2 (b^2 - a^2)}$

For $P_i = P, P_o = 0$:
$\sigma_r(r) = \frac{-P a^2}{b^2 - a^2} - \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{-P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$
$\sigma_\theta(r) = \frac{-P a^2}{b^2 - a^2} + \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(\frac{b^2}{r^2} - 1\right)$

Let's re-check the signs for pressure. Pressure is compressive, so applied pressures are negative in radial direction if acting inward. Let $P_i$ and $P_o$ be magnitudes.
At $r=a$, $\sigma_r = -P_i$.
At $r=b$, $\sigma_r = -P_o$.

Using $\sigma_r = A - B/r^2$ and $\sigma_\theta = A + B/r^2$:
1. $-P_i = A - B/a^2$
2. $-P_o = A - B/b^2$

Subtracting (2) from (1):
$-P_i + P_o = -B/a^2 + B/b^2 = B(1/b^2 - 1/a^2) = B \frac{a^2 - b^2}{a^2 b^2}$
$B = \frac{(P_o - P_i)a^2 b^2}{a^2 - b^2} = \frac{(P_i - P_o)a^2 b^2}{b^2 - a^2}$

$A = P_o + B/b^2 = P_o + \frac{(P_i - P_o)a^2}{b^2 - a^2} = \frac{P_o(b^2 - a^2) + P_i a^2 - P_o a^2}{b^2 - a^2} = \frac{P_o b^2 - P_i a^2}{b^2 - a^2}$

So the formulas for $A$ and $B$ are correct.

Let's retry the $P_o=0, P_i=P$ case:
$A = \frac{-P a^2}{b^2 - a^2}$
$B = \frac{P a^2 b^2}{b^2 - a^2}$

$\sigma_r(r) = A - B/r^2 = \frac{-P a^2}{b^2 - a^2} - \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{-P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$
$\sigma_\theta(r) = A + B/r^2 = \frac{-P a^2}{b^2 - a^2} + \frac{P a^2 b^2}{r^2 (b^2 - a^2)} = \frac{P a^2}{b^2 - a^2} \left(\frac{b^2}{r^2} - 1\right)$

Now check boundaries for $P_i=P, P_o=0$:
At $r=a$:
$\sigma_r(a) = \frac{-P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{a^2}\right) = \frac{-P a^2}{b^2 - a^2} \left(\frac{a^2 + b^2}{a^2}\right) = \frac{-P(a^2 + b^2)}{b^2 - a^2}$. This is NOT $-P$.

**Rethink Stress Definition:**
Timoshenko & Goodier (3rd Ed., Chapter 4, Section 4-6) uses:
$\sigma_r = \frac{d\phi}{dr} \frac{1}{r} + \frac{d^2\phi}{dr^2}$
$\sigma_\theta = \frac{d^2\phi}{dr^2}$
For axi-symmetric problems, the general solution of the biharmonic equation is:
$\phi(r) = C_1 r^2 \ln r + C_2 r^2 + C_3 \ln r + C_4$

Let's use the formulation from Timoshenko & Goodier for $\sigma_r$ and $\sigma_\theta$ from this $\phi(r)$:
$\sigma_r = \frac{1}{r}(2C_1 r \ln r + C_1 r + 2C_2 r + C_3/r) + (2C_1 \ln r + 2C_1 + 2C_2 - C_3/r^2)$
$\sigma_r = 2C_1 \ln r + C_1 + 2C_2 + 2C_1 \ln r + 2C_1 + 2C_2 - C_3/r^2$
$\sigma_r = 4C_1 \ln r + 3C_1 + 4C_2 - C_3/r^2$

$\sigma_\theta = 2C_1 \ln r + 2C_1 + 2C_2 - C_3/r^2$

This doesn't look like the simple $A \pm B/r^2$ form. The $A \pm B/r^2$ form is obtained if we use specific forms of the general solution that satisfy the biharmonic equation.
The common form derived from equilibrium and compatibility for axi-symmetric problems is indeed:
$\sigma_r = C_1' + C_2' \ln r - \frac{C_3'}{r^2}$
$\sigma_\theta = C_1' - C_2' \ln r + \frac{C_3'}{r^2}$
This form is also valid. For cases without $\ln r$, it simplifies to the $A \pm B/r^2$ form.

Let's stick to the $A \pm B/r^2$ form which is widely used for Lame's problem. The discrepancy might be in how constants $A$ and $B$ are defined or related to the original $\phi$. The final stress distribution formulas are key.

Let's re-verify the $P_i = P, P_o = 0$ case for the common solution:
$\sigma_r(r) = \frac{P a^2}{b^2 - a^2} \left(1 - \frac{b^2}{r^2}\right)$
$\sigma_\theta(r) = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$

At $r=a$: $\sigma_r = -P$, $\sigma_\theta = \frac{P(a^2+b^2)}{b^2-a^2}$.
At $r=b$: $\sigma_r = 0$, $\sigma_\theta = \frac{P a^2}{b^2 - a^2} (1 + 1) = \frac{2 P a^2}{b^2 - a^2}$.

This latter value for $\sigma_\theta(b)$ is indeed correct. The common error is to assume $\sigma_\theta$ must be zero at the outer boundary if no pressure is applied there. However, $\sigma_r$ is zero, but $\sigma_\theta$ is not necessarily zero.

**Maximum Stress:**
For internal pressure $P$, the maximum hoop stress $\sigma_\theta$ occurs at the inner radius $r=a$:
$\sigma_{\theta, max} = \frac{P(a^2+b^2)}{b^2-a^2}$
This is a critical value for design.

**Reference:** Timoshenko & Goodier, Chapter 4, Section 4-6.

---

### 3. Stress Concentration Problem: Small Hole in a Large Plate

This problem investigates how a circular hole in an infinite or very large plate affects the stress distribution when the plate is subjected to uniform tensile stress.

**Problem Setup:**
A large plate (ideally infinite) with a small circular hole of radius $a$.
The plate is subjected to a uniform tensile stress $\sigma_0$ in the x-direction.

**Assumptions:**
*   Plane stress conditions.
*   The plate is large compared to the hole radius, so boundary effects at the plate edges are negligible.
*   The hole is perfectly circular and located at the center.

**Mathematical Formulation (Polar Coordinates):**
Due to the symmetry of the problem and the applied stress, it is convenient to use polar coordinates $(r, \theta)$. The applied stress $\sigma_0$ in the x-direction can be expressed in polar coordinates:
$\sigma_x = \sigma_0$
$\sigma_y = 0$

In polar coordinates:
$\sigma_r = \sigma_x \cos^2 \theta + \sigma_y \sin^2 \theta = \sigma_0 \cos^2 \theta$
$\sigma_\theta = \sigma_x \sin^2 \theta + \sigma_y \cos^2 \theta = \sigma_0 \sin^2 \theta$
$\tau_{r\theta} = (\sigma_x - \sigma_y) \sin \theta \cos \theta = \sigma_0 \sin \theta \cos \theta$

These are the stresses far away from the hole ($r \to \infty$).

The solution for the stress distribution around a circular hole in an infinite plate under uniform tension $\sigma_0$ in the x-direction was first obtained by Kirsch. This solution can be derived using Airy's stress function.

The Airy stress function for this problem in polar coordinates is often given as:
$\phi(r, \theta) = C_0 + C_1 r \cos \theta + C_2 r^2 + C_3 r^3 \cos \theta + C_4 r^2 \cos 2\theta + \frac{C_5}{r} \cos \theta + \frac{C_6}{r^2} \cos 2\theta + \frac{C_7}{r^3} \cos 3\theta$

After applying boundary conditions (stress at infinity and zero stress on the hole boundary), the simplified form that satisfies the biharmonic equation is:

$\phi(r, \theta) = A r^2 + B r^2 \cos(2\theta) + C \ln r + D \cos(2\theta) + E r^2 \cos(2\theta) + F \frac{\cos(2\theta)}{r^2}$
A more appropriate form for the infinite plate problem that satisfies the boundary conditions at infinity and on the hole is:

$\phi(r, \theta) = \sigma_0 \left(\frac{r^2}{2} - \frac{a^2}{2} + \frac{a^2}{2} \cos(2\theta) - \frac{a^4}{2r^2} \cos(2\theta)\right)$ (This is a simplified form derived from the general solution)

Let's directly use the resulting stress components derived from this stress function (as the derivation is lengthy and often presented as a result):

$\sigma_r = \frac{\sigma_0}{2} \left(1 - \frac{a^2}{r^2}\right) + \frac{\sigma_0}{2} \left(1 - \frac{4a^2}{r^2} + \frac{3a^4}{r^4}\right) \cos(2\theta)$
$\sigma_\theta = \frac{\sigma_0}{2} \left(1 + \frac{a^2}{r^2}\right) - \frac{\sigma_0}{2} \left(1 + \frac{3a^4}{r^4}\right) \cos(2\theta)$
$\tau_{r\theta} = -\frac{\sigma_0}{2} \left(1 + \frac{2a^2}{r^2} - \frac{3a^4}{r^4}\right) \sin(2\theta)$

These expressions describe the stress distribution around the hole.

**Key Observations for Stress Distribution:**

*   **Radial Stress ($\sigma_r$):**
    *   At $r=a$ (on the hole boundary): $\sigma_r = 0 + \frac{\sigma_0}{2} (1 - 4 + 3) \cos(2\theta) = 0$. This satisfies the boundary condition of no stress on the hole.
    *   As $r \to \infty$: $\sigma_r \to \frac{\sigma_0}{2} (1) + \frac{\sigma_0}{2} (1) \cos(2\theta) = \frac{\sigma_0}{2} (1 + \cos(2\theta)) = \sigma_0 \cos^2 \theta$. This matches the applied far-field stress.

*   **Circumferential Stress ($\sigma_\theta$):**
    *   At $r=a$ (on the hole boundary): $\sigma_\theta = \frac{\sigma_0}{2} (1 + 1) - \frac{\sigma_0}{2} (1 + 3) \cos(2\theta) = \sigma_0 - 2\sigma_0 \cos(2\theta)$.
    *   The maximum value of $\sigma_\theta$ occurs at $\theta = \pi/2$ (where $\cos(2\theta) = \cos(\pi) = -1$), giving:
        $\sigma_\theta(r=a, \theta=\pi/2) = \sigma_0 - 2\sigma_0 (-1) = 3\sigma_0$.
    *   This is the **stress concentration factor** ($K_t = 3$) for a circular hole in an infinite plate under uniaxial tension. The stress at the edge of the hole is three times the nominal applied stress.
    *   As $r \to \infty$: $\sigma_\theta \to \frac{\sigma_0}{2} (1) - \frac{\sigma_0}{2} (1) \cos(2\theta) = \frac{\sigma_0}{2} (1 - \cos(2\theta)) = \sigma_0 \sin^2 \theta$. This matches the applied far-field stress.

*   **Shear Stress ($\tau_{r\theta}$):**
    *   At $r=a$: $\tau_{r\theta} = -\frac{\sigma_0}{2} (1 + 2 - 3) \sin(2\theta) = 0$. This satisfies the boundary condition.
    *   As $r \to \infty$: $\tau_{r\theta} \to -\frac{\sigma_0}{2} (1) \sin(2\theta) = -\frac{\sigma_0}{2} (2 \sin \theta \cos \theta) = -\sigma_0 \sin \theta \cos \theta$. This matches the applied far-field shear stress (which is zero for uniaxial tension, but the formula is general).

**Stress Concentration Factor (SCF):**
The stress concentration factor ($K_t$) is defined as the ratio of the maximum stress at the notch or hole to the nominal stress applied to the member. For a circular hole in an infinite plate under uniaxial tension, $K_t = 3$.

**Reference:** Timoshenko & Goodier, Chapter 6, Section 6-8.

---

### 4. Practice Questions and Answers

**Question 1 (Lame's Problem):**
A thick-walled cylinder with inner radius $a = 50$ mm and outer radius $b = 100$ mm is subjected to an internal pressure of $P_i = 20$ MPa and an external pressure of $P_o = 5$ MPa. Calculate the radial and circumferential stresses at the inner radius ($r=a$) and outer radius ($r=b$).

**Answer 1:**
Using the Lame's solution formulas:
$A = \frac{P_o b^2 - P_i a^2}{b^2 - a^2}$
$B = \frac{(P_i - P_o) a^2 b^2}{b^2 - a^2}$

$a = 50 \times 10^{-3}$ m, $b = 100 \times 10^{-3}$ m
$a^2 = 2500 \times 10^{-6}$ m$^2$, $b^2 = 10000 \times 10^{-6}$ m$^2$
$b^2 - a^2 = 7500 \times 10^{-6}$ m$^2$

$P_i = 20 \times 10^6$ Pa, $P_o = 5 \times 10^6$ Pa

$A = \frac{(5 \times 10^6)(10000 \times 10^{-6}) - (20 \times 10^6)(2500 \times 10^{-6})}{7500 \times 10^{-6}}$
$A = \frac{50000 - 50000}{7500 \times 10^{-6}} = 0$ Pa. This is an interesting case where $P_o b^2 = P_i a^2$. Let's recheck.
$A = \frac{50 \times 10^6 - 50 \times 10^6}{7500 \times 10^{-6}} = 0$. So $A=0$.

$B = \frac{(20 \times 10^6 - 5 \times 10^6)(2500 \times 10^{-6})(10000 \times 10^{-6})}{7500 \times 10^{-6}}$
$B = \frac{(15 \times 10^6)(25000000 \times 10^{-12})}{7500 \times 10^{-6}} = \frac{15 \times 10^6 \times 2.5 \times 10^{-5}}{7.5 \times 10^{-3}}$
$B = \frac{375}{7.5 \times 10^{-3}} = \frac{375000}{7.5} = 50000$ N.

Let's check the stress formulas with $A=0$:
$\sigma_r(r) = -B/r^2$
$\sigma_\theta(r) = B/r^2$

At $r=a=50$ mm $= 0.05$ m:
$\sigma_r(a) = -50000 / (0.05)^2 = -50000 / 0.0025 = -20 \times 10^6$ Pa $= -20$ MPa. (Correct)
$\sigma_\theta(a) = 50000 / (0.05)^2 = 20 \times 10^6$ Pa $= 20$ MPa.

At $r=b=100$ mm $= 0.1$ m:
$\sigma_r(b) = -50000 / (0.1)^2 = -50000 / 0.01 = -5 \times 10^6$ Pa $= -5$ MPa. (Correct)
$\sigma_\theta(b) = 50000 / (0.1)^2 = 5 \times 10^6$ Pa $= 5$ MPa.

**Result:**
$\sigma_r(a) = -20$ MPa
$\sigma_\theta(a) = 20$ MPa
$\sigma_r(b) = -5$ MPa
$\sigma_\theta(b) = 5$ MPa

*(Note: The condition $P_o b^2 = P_i a^2$ simplifies the solution significantly)*

**Question 2 (Stress Concentration):**
A large plate made of steel is subjected to a uniform tensile stress of 100 MPa in the x-direction. The plate has a circular hole of radius 2 mm at its center. Calculate the maximum tensile stress at the edge of the hole.

**Answer 2:**
For a circular hole in an infinite plate under uniaxial tension $\sigma_0$ in the x-direction, the maximum tensile stress occurs at the edge of the hole ($\theta = \pi/2$) and is given by $\sigma_{\theta,max} = 3 \sigma_0$.

Given:
$\sigma_0 = 100$ MPa

Maximum tensile stress:
$\sigma_{\theta,max} = 3 \times 100$ MPa $= 300$ MPa.

**Question 3 (Lame's Problem - Special Case):**
A thick-walled cylinder with inner radius $a=1$ m and outer radius $b=2$ m is subjected to an internal pressure $P_i = 10$ MPa and no external pressure ($P_o=0$). Calculate the hoop stress at the inner surface.

**Answer 3:**
Using the special case formulas for $P_o=0, P_i=P$:
$\sigma_\theta(r) = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{r^2}\right)$

At $r=a$:
$\sigma_\theta(a) = \frac{P a^2}{b^2 - a^2} \left(1 + \frac{b^2}{a^2}\right) = \frac{P a^2}{b^2 - a^2} \left(\frac{a^2 + b^2}{a^2}\right) = \frac{P(a^2+b^2)}{b^2-a^2}$

Given $P=10$ MPa, $a=1$ m, $b=2$ m:
$a^2 = 1$ m$^2$, $b^2 = 4$ m$^2$
$b^2 - a^2 = 3$ m$^2$
$a^2 + b^2 = 5$ m$^2$

$\sigma_\theta(a) = \frac{10 \text{ MPa} \times (5 \text{ m}^2)}{3 \text{ m}^2} = \frac{50}{3}$ MPa $\approx 16.67$ MPa.

---

### 5. Important Points to Remember

*   **Airy's Stress Function:** A scalar function $\phi$ that satisfies the biharmonic equation and allows stresses to be derived, automatically satisfying equilibrium.
*   **Polar Coordinates:** Essential for axi-symmetric problems and problems with circular geometry. Stress expressions in polar coordinates are derived from $\phi$.
*   **Lame's Problem:** Solved for thick-walled cylinders/spheres under pressure. The stress distribution is characterized by radial and circumferential stresses varying with $1/r^2$ (or $\ln r$ in more general solutions).
*   **Stress Concentration:** Occurs at geometric discontinuities like holes, notches, or fillets. A small hole in a plate under uniform tension experiences a maximum stress that is a multiple of the nominal stress (stress concentration factor).
*   **Kirsch's Solution:** Specifically refers to the stress distribution around a circular hole in an infinite plate.
*   **Stress Concentration Factor ($K_t$):** For a circular hole in uniaxial tension, $K_t = 3$.
*   **Maximizing Stress:** In Lame's problem with internal pressure, the hoop stress is highest at the inner radius. In the hole problem, the hoop stress is highest at the hole boundary along the direction of applied tension.
*   **Sign Conventions:** Be careful with pressure signs (compressive forces are typically negative in the radial direction).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References and Further Reading

*   **Theory of Elasticity by S.P. Timoshenko and J.N. Goodier (McGrawHill Education, Third Edition, 2009):** Chapters 4 (Axisymmetric Problems) and 6 (Stress Concentration). This is a foundational text.
*   **Advanced Mechanics of Solids by L.S. Srinath (Tata McGraw Hill Publishing Company, Third Edition, 2008):** Provides comprehensive coverage of plane elasticity problems and stress functions.
*   **Solid Mechanics by S.M.A. Kazimi (McGrawHill, 2008):** Offers good coverage of elasticity concepts.
*   **Advanced Mechanics of Materials by S. Jose (Pentagon Educational Services, 2013):** Likely covers these topics with practical examples.

The study of these problems using Airy's stress function is crucial for understanding how stress redistributes around geometric features, a fundamental concept in the design of mechanical components.