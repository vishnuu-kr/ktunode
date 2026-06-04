---
title: "Stress Invariants"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ec"
status: "completed"
scrapedAt: "2026-05-20T18:42:27.215Z"
---
# Advanced Solid Mechanics: Module 1 - Elementary Concepts of Elasticity

## Topic: Stress Invariants

---

### 1. Introduction to Stress and the Stress Tensor

**Key Concepts:**

*   **Stress:** A measure of the internal forces acting within a deformable body per unit area. It quantifies the intensity of these forces.
*   **Stress Tensor ($\sigma_{ij}$):** A second-order tensor that completely describes the state of stress at a point within a body. In a 3D Cartesian coordinate system, it's a 3x3 symmetric matrix:

    $$
    \boldsymbol{\sigma} = \begin{bmatrix}
    \sigma_{11} & \sigma_{12} & \sigma_{13} \\
    \sigma_{21} & \sigma_{22} & \sigma_{23} \\
    \sigma_{31} & \sigma_{32} & \sigma_{33}
    \end{bmatrix}
    $$

    *   **Normal Stresses ($\sigma_{ii}$):** Stresses acting perpendicular to a surface (e.g., $\sigma_{11}$, $\sigma_{22}$, $\sigma_{33}$).
    *   **Shear Stresses ($\sigma_{ij}$ for $i \neq j$):** Stresses acting parallel to a surface (e.g., $\sigma_{12}$, $\sigma_{13}$, $\sigma_{23}$).
    *   **Symmetry of the Stress Tensor:** For a body in equilibrium without body moments, the stress tensor is symmetric, meaning $\sigma_{ij} = \sigma_{ji}$. This reduces the number of independent stress components from 9 to 6.

**Learning Outcome 1: Understand the concept of stress and its representation by the stress tensor.**

*   Stress is a fundamental concept in solid mechanics, representing internal forces distributed over an area.
*   The stress tensor is the mathematical tool to capture all stress components acting on a material point.
*   Understanding the components of the stress tensor (normal and shear) is crucial for analyzing material behavior.

**Example:** Consider a cube of material subjected to external forces. The stress tensor at any point within the cube describes the forces acting on infinitesimal planes passing through that point.

---

### 2. The Need for Stress Invariants

**Key Concepts:**

*   **Coordinate System Dependence:** The components of the stress tensor ($\sigma_{ij}$) are dependent on the chosen coordinate system. If we rotate the coordinate axes, the numerical values of $\sigma_{11}$, $\sigma_{12}$, etc., will change.
*   **Physical State of Stress:** However, the *physical state of stress* at a point is an intrinsic property of the material and is independent of the observer's coordinate system.
*   **Invariants:** Quantities that remain unchanged (invariant) under a change of coordinate system.

**Learning Outcome 2: Recognize that the components of the stress tensor are coordinate-dependent and that stress invariants are fundamental properties.**

*   Directly using stress tensor components can be misleading as they change with rotation.
*   Stress invariants provide a way to describe the state of stress in a manner that is independent of the coordinate system.
*   These invariants are crucial for formulating constitutive laws (material behavior models) that are physically meaningful.

**Example:** Imagine measuring the length of a table. The numerical value you get depends on whether you use meters or feet. However, the actual length of the table is an intrinsic property. Stress invariants are like measuring the length in a "universal unit" that doesn't change regardless of how you orient your measuring tape (coordinate system).

---

### 3. Deriving Stress Invariants

**Key Concepts:**

*   **Eigenvalue Problem:** The principal stresses ($\sigma_1, \sigma_2, \sigma_3$) are the eigenvalues of the stress tensor. They represent the normal stresses acting on planes where the shear stresses are zero.
*   **Characteristic Equation:** The eigenvalues are found by solving the characteristic equation:

    $$ \det(\boldsymbol{\sigma} - \lambda \mathbf{I}) = 0 $$

    where $\lambda$ represents the eigenvalues (principal stresses) and $\mathbf{I}$ is the identity matrix.

*   **Resulting Cubic Equation:** For a 3D stress tensor, this determinant expansion leads to a cubic equation in $\lambda$:

    $$ \lambda^3 - I_1 \lambda^2 + I_2 \lambda - I_3 = 0 $$

    where $I_1$, $I_2$, and $I_3$ are the stress invariants.

**Learning Outcome 3: Derive the stress invariants ($I_1, I_2, I_3$) from the characteristic equation of the stress tensor.**

*   The process of finding principal stresses reveals fundamental quantities that are invariant.
*   These invariants are coefficients of the cubic equation that defines the eigenvalues.

---

### 4. Definition and Calculation of Stress Invariants

**Key Concepts:**

The stress invariants ($I_1, I_2, I_3$) are defined as follows, based on the components of the stress tensor $\sigma_{ij}$:

*   **First Stress Invariant ($I_1$):** The sum of the normal stresses (trace of the stress tensor).

    $$ I_1 = \sigma_{11} + \sigma_{22} + \sigma_{33} = \text{tr}(\boldsymbol{\sigma}) $$

*   **Second Stress Invariant ($I_2$):** Half the sum of the principal minors of the stress tensor.

    $$ I_2 = \frac{1}{2} [(\sigma_{11}\sigma_{22} - \sigma_{12}^2) + (\sigma_{22}\sigma_{33} - \sigma_{23}^2) + (\sigma_{33}\sigma_{11} - \sigma_{31}^2)] $$

    Alternatively, in terms of principal stresses:

    $$ I_2 = \sigma_1 \sigma_2 + \sigma_2 \sigma_3 + \sigma_3 \sigma_1 $$

*   **Third Stress Invariant ($I_3$):** The determinant of the stress tensor.

    $$ I_3 = \det(\boldsymbol{\sigma}) = \begin{vmatrix}
    \sigma_{11} & \sigma_{12} & \sigma_{13} \\
    \sigma_{21} & \sigma_{22} & \sigma_{23} \\
    \sigma_{31} & \sigma_{32} & \sigma_{33}
    \end{vmatrix} $$

    Alternatively, in terms of principal stresses:

    $$ I_3 = \sigma_1 \sigma_2 \sigma_3 $$

**Learning Outcome 4: Calculate the three stress invariants ($I_1, I_2, I_3$) from a given stress tensor.**

*   $I_1$ is the simplest to calculate – just sum the diagonal elements.
*   $I_2$ requires calculating three $2 \times 2$ determinants and summing them, then dividing by two.
*   $I_3$ is the standard determinant calculation for a $3 \times 3$ matrix.

**Example:**

Consider the following stress tensor:
$$
\boldsymbol{\sigma} = \begin{bmatrix}
10 & 2 & 0 \\
2 & 5 & 1 \\
0 & 1 & -3
\end{bmatrix}
$$

*   **$I_1$:**
    $I_1 = \sigma_{11} + \sigma_{22} + \sigma_{33} = 10 + 5 + (-3) = 12$

*   **$I_2$:**
    $I_2 = \frac{1}{2} [(\sigma_{11}\sigma_{22} - \sigma_{12}^2) + (\sigma_{22}\sigma_{33} - \sigma_{23}^2) + (\sigma_{33}\sigma_{11} - \sigma_{31}^2)]$
    $I_2 = \frac{1}{2} [(10 \times 5 - 2^2) + (5 \times (-3) - 1^2) + ((-3) \times 10 - 0^2)]$
    $I_2 = \frac{1}{2} [(50 - 4) + (-15 - 1) + (-30 - 0)]$
    $I_2 = \frac{1}{2} [46 - 16 - 30]$
    $I_2 = \frac{1}{2} [0] = 0$

*   **$I_3$:**
    $I_3 = \det(\boldsymbol{\sigma}) = 10 \begin{vmatrix} 5 & 1 \\ 1 & -3 \end{vmatrix} - 2 \begin{vmatrix} 2 & 1 \\ 0 & -3 \end{vmatrix} + 0 \begin{vmatrix} 2 & 5 \\ 0 & 1 \end{vmatrix}$
    $I_3 = 10 ((5)(-3) - (1)(1)) - 2 ((2)(-3) - (1)(0)) + 0$
    $I_3 = 10 (-15 - 1) - 2 (-6 - 0)$
    $I_3 = 10 (-16) - 2 (-6)$
    $I_3 = -160 + 12 = -148$

So, for this stress tensor, the stress invariants are $I_1 = 12$, $I_2 = 0$, and $I_3 = -148$.

---

### 5. Significance and Application of Stress Invariants

**Key Concepts:**

*   **Coordinate Independence:** The primary significance is their invariance under coordinate transformations. This means they represent intrinsic properties of the stress state.
*   **Material Constitutive Laws:** Stress invariants are fundamental building blocks for many material models, especially in plasticity and creep. For example, yield criteria in plasticity (like the von Mises yield criterion) are often expressed in terms of stress invariants.
*   **Characterizing Stress States:** The values of the invariants can help classify the type of stress state (e.g., uniaxial tension, hydrostatic pressure, pure shear).
*   **Principal Stresses:** The roots of the characteristic equation ($\lambda^3 - I_1 \lambda^2 + I_2 \lambda - I_3 = 0$) are the principal stresses ($\sigma_1, \sigma_2, \sigma_3$). Since $I_1, I_2, I_3$ are invariant, the principal stresses themselves are also invariant quantities (though their corresponding normal vectors change with coordinate rotation).

**Learning Outcome 5: Explain the significance and applications of stress invariants in solid mechanics.**

*   Invariants are essential for creating objective material models that behave the same way regardless of how the problem is viewed (coordinate system).
*   They are directly related to the principal stresses, which are critical for failure analysis.

**Example Applications:**

*   **Yield Criteria:** The von Mises yield criterion is often expressed as a function of the second deviatoric stress invariant.
*   **Failure Analysis:** Determining the maximum principal stress or using invariants in failure theories.
*   **Hydrostatic Pressure:** A stress state where $\sigma_{11} = \sigma_{22} = \sigma_{33} = p$ and all shear stresses are zero. In this case, $I_1 = 3p$, $I_2 = 3p^2$, and $I_3 = p^3$. This indicates a uniform stress in all directions.

---

### 6. Hydrostatic and Deviatoric Stress

**Key Concepts:**

Any stress tensor can be decomposed into two parts:

*   **Hydrostatic Stress ($\boldsymbol{\sigma}_H$):** Also known as the mean stress or spherical stress. It represents the volumetric change and is isotropic (same in all directions).

    $$ \boldsymbol{\sigma}_H = \frac{1}{3}(\sigma_{11} + \sigma_{22} + \sigma_{33}) \mathbf{I} = \frac{I_1}{3} \mathbf{I} $$

    The stress component is $\frac{I_1}{3}$ on all planes, acting equally in all directions.

*   **Deviatoric Stress ($\boldsymbol{\sigma}_D$):** Also known as the deviator. It represents the distortion or shape change and is responsible for shear deformation.

    $$ \boldsymbol{\sigma}_D = \boldsymbol{\sigma} - \boldsymbol{\sigma}_H = \boldsymbol{\sigma} - \frac{I_1}{3} \mathbf{I} $$

**Learning Outcome 6: Decompose the stress tensor into hydrostatic and deviatoric stress components and understand their physical significance.**

*   This decomposition helps separate the volumetric effects (hydrostatic) from the distortion effects (deviatoric).
*   Materials often respond differently to hydrostatic and deviatoric stresses. For example, many materials are strong in compression (hydrostatic) but weak in shear (deviatoric).

**Relationship to Invariants:**

*   The hydrostatic stress is directly related to $I_1$.
*   The deviatoric stress tensor has invariants related to the original stress tensor's invariants, but with a shift. Specifically, the eigenvalues of $\boldsymbol{\sigma}_D$ are $(\sigma_1 - \frac{I_1}{3})$, $(\sigma_2 - \frac{I_1}{3})$, and $(\sigma_3 - \frac{I_1}{3})$.

**Example:**

Using the stress tensor from the previous example:
$$
\boldsymbol{\sigma} = \begin{bmatrix}
10 & 2 & 0 \\
2 & 5 & 1 \\
0 & 1 & -3
\end{bmatrix}
$$
We found $I_1 = 12$. So, the hydrostatic stress component is $\frac{I_1}{3} = \frac{12}{3} = 4$.

$$
\boldsymbol{\sigma}_H = 4 \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
4 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & 4
\end{bmatrix}
$$

The deviatoric stress tensor is:
$$
\boldsymbol{\sigma}_D = \boldsymbol{\sigma} - \boldsymbol{\sigma}_H = \begin{bmatrix}
10 & 2 & 0 \\
2 & 5 & 1 \\
0 & 1 & -3
\end{bmatrix} - \begin{bmatrix}
4 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & 4
\end{bmatrix} = \begin{bmatrix}
6 & 2 & 0 \\
2 & 1 & 1 \\
0 & 1 & -7
\end{bmatrix}
$$

The hydrostatic component represents a uniform pressure of 4 in all directions, while the deviatoric component represents the shear and anisotropic normal stress components that cause distortion.

---

### 7. Principal Stresses and Their Relationship to Invariants

**Key Concepts:**

*   **Principal Stresses ($\sigma_1, \sigma_2, \sigma_3$):** The eigenvalues of the stress tensor. These are the normal stresses acting on planes where shear stresses are zero (principal planes).
*   **Characteristic Equation:** The cubic equation $\lambda^3 - I_1 \lambda^2 + I_2 \lambda - I_3 = 0$ relates the principal stresses (roots) to the stress invariants.
*   **Sum of Principal Stresses:** $I_1 = \sigma_1 + \sigma_2 + \sigma_3$.
*   **Sum of Principal Stresses Taken Two at a Time:** $I_2 = \sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1$.
*   **Product of Principal Stresses:** $I_3 = \sigma_1\sigma_2\sigma_3$.

**Learning Outcome 7: Relate the principal stresses to the stress invariants using the characteristic equation and understand that principal stresses are themselves invariant quantities.**

*   The ability to find principal stresses from invariants confirms their invariant nature.
*   Principal stresses are critical for assessing material strength and potential failure modes.

**Example:**

Consider a state of pure shear. The stress tensor in a suitable coordinate system might be:
$$
\boldsymbol{\sigma} = \begin{bmatrix}
0 & \tau & 0 \\
\tau & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

*   $I_1 = 0 + 0 + 0 = 0$
*   $I_2 = \frac{1}{2} [(0 \times 0 - \tau^2) + (0 \times 0 - 0^2) + (0 \times 0 - 0^2)] = \frac{1}{2} [-\tau^2] = -\frac{\tau^2}{2}$
*   $I_3 = \det(\boldsymbol{\sigma}) = 0$

The characteristic equation is: $\lambda^3 - 0 \lambda^2 - \frac{\tau^2}{2} \lambda - 0 = 0$
$\lambda^3 - \frac{\tau^2}{2} \lambda = 0$
$\lambda(\lambda^2 - \frac{\tau^2}{2}) = 0$

The roots (principal stresses) are $\lambda_1 = 0$, $\lambda_2 = \frac{\tau}{\sqrt{2}}$, $\lambda_3 = -\frac{\tau}{\sqrt{2}}$.

Let's check the invariant relations:
*   $I_1 = \sigma_1 + \sigma_2 + \sigma_3 = 0 + \frac{\tau}{\sqrt{2}} + (-\frac{\tau}{\sqrt{2}}) = 0$ (Matches)
*   $I_2 = \sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1 = 0 \cdot \frac{\tau}{\sqrt{2}} + \frac{\tau}{\sqrt{2}} \cdot (-\frac{\tau}{\sqrt{2}}) + (-\frac{\tau}{\sqrt{2}}) \cdot 0 = 0 - \frac{\tau^2}{2} + 0 = -\frac{\tau^2}{2}$ (Matches)
*   $I_3 = \sigma_1\sigma_2\sigma_3 = 0 \cdot \frac{\tau}{\sqrt{2}} \cdot (-\frac{\tau}{\sqrt{2}}) = 0$ (Matches)

This demonstrates how the invariant coefficients directly link to the principal stress values.

---

### 8. Practice Questions and Exercises

**Question 1:**
Given the following stress tensor at a point:
$$
\boldsymbol{\sigma} = \begin{bmatrix}
20 & 10 & 5 \\
10 & 30 & 15 \\
5 & 15 & 40
\end{bmatrix} \text{ MPa}
$$
Calculate the three stress invariants ($I_1, I_2, I_3$).

**Question 2:**
What is the physical significance of the first stress invariant ($I_1$)?

**Question 3:**
If the principal stresses at a point are $\sigma_1 = 50$ MPa, $\sigma_2 = 20$ MPa, and $\sigma_3 = -10$ MPa, calculate the three stress invariants.

**Question 4:**
Decompose the following stress tensor into hydrostatic and deviatoric components:
$$
\boldsymbol{\sigma} = \begin{bmatrix}
15 & 0 & 0 \\
0 & -5 & 0 \\
0 & 0 & 10
\end{bmatrix} \text{ GPa}
$$

**Question 5:**
Explain why stress invariants are crucial for developing objective constitutive models in solid mechanics.

---

### 9. Answers to Practice Questions

**Answer 1:**
*   **$I_1$:** $I_1 = 20 + 30 + 40 = 90$ MPa
*   **$I_2$:**
    $I_2 = \frac{1}{2} [(20 \times 30 - 10^2) + (30 \times 40 - 15^2) + (40 \times 20 - 5^2)]$
    $I_2 = \frac{1}{2} [(600 - 100) + (1200 - 225) + (800 - 25)]$
    $I_2 = \frac{1}{2} [500 + 975 + 775]$
    $I_2 = \frac{1}{2} [2250] = 1125$ MPa
*   **$I_3$:**
    $I_3 = 20 \begin{vmatrix} 30 & 15 \\ 15 & 40 \end{vmatrix} - 10 \begin{vmatrix} 10 & 15 \\ 5 & 40 \end{vmatrix} + 5 \begin{vmatrix} 10 & 30 \\ 5 & 15 \end{vmatrix}$
    $I_3 = 20 ((30)(40) - (15)(15)) - 10 ((10)(40) - (15)(5)) + 5 ((10)(15) - (30)(5))$
    $I_3 = 20 (1200 - 225) - 10 (400 - 75) + 5 (150 - 150)$
    $I_3 = 20 (975) - 10 (325) + 5 (0)$
    $I_3 = 19500 - 3250 = 16250$ MPa$^3$

**Answer 2:**
The first stress invariant ($I_1$) is the sum of the normal stresses, which is also known as the trace of the stress tensor. It directly relates to the hydrostatic component of the stress state. A non-zero $I_1$ indicates that there is a mean normal stress, representing a volumetric effect. If $I_1 = 0$, the stress state has no net hydrostatic component.

**Answer 3:**
*   $I_1 = \sigma_1 + \sigma_2 + \sigma_3 = 50 + 20 + (-10) = 60$ MPa
*   $I_2 = \sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1 = (50)(20) + (20)(-10) + (-10)(50) = 1000 - 200 - 500 = 300$ MPa$^2$
*   $I_3 = \sigma_1\sigma_2\sigma_3 = (50)(20)(-10) = -10000$ MPa$^3$

**Answer 4:**
*   **Hydrostatic Stress:**
    $I_1 = 15 + (-5) + 10 = 20$ GPa
    Hydrostatic stress component = $\frac{I_1}{3} = \frac{20}{3}$ GPa
    $$
    \boldsymbol{\sigma}_H = \begin{bmatrix}
    20/3 & 0 & 0 \\
    0 & 20/3 & 0 \\
    0 & 0 & 20/3
    \end{bmatrix} \text{ GPa}
    $$
*   **Deviatoric Stress:**
    $$
    \boldsymbol{\sigma}_D = \boldsymbol{\sigma} - \boldsymbol{\sigma}_H = \begin{bmatrix}
    15 & 0 & 0 \\
    0 & -5 & 0 \\
    0 & 0 & 10
    \end{bmatrix} - \begin{bmatrix}
    20/3 & 0 & 0 \\
    0 & 20/3 & 0 \\
    0 & 0 & 20/3
    \end{bmatrix} = \begin{bmatrix}
    15 - 20/3 & 0 & 0 \\
    0 & -5 - 20/3 & 0 \\
    0 & 0 & 10 - 20/3
    \end{bmatrix} \text{ GPa}
    $$
    $$
    \boldsymbol{\sigma}_D = \begin{bmatrix}
    25/3 & 0 & 0 \\
    0 & -35/3 & 0 \\
    0 & 0 & 10/3
    \end{bmatrix} \text{ GPa}
    $$

**Answer 5:**
Constitutive models describe how a material behaves under stress (e.g., yielding, deformation). These models must represent the intrinsic behavior of the material, independent of how the material or the observer is oriented. Stress invariants are intrinsically defined quantities of the stress state. By formulating constitutive laws using these invariants, we ensure that the model's predictions are objective – meaning they are the same regardless of the coordinate system used to describe the stress. This is fundamental for creating universally applicable and physically meaningful material models.

---

### 10. Important Points to Remember

*   **Invariance:** Stress invariants are independent of the choice of coordinate system.
*   **$I_1$:** Trace of the stress tensor; sum of normal stresses; related to hydrostatic stress.
*   **$I_2$:** Half the sum of principal minors; related to shear deformation.
*   **$I_3$:** Determinant of the stress tensor; product of principal stresses.
*   **Characteristic Equation:** $\lambda^3 - I_1 \lambda^2 + I_2 \lambda - I_3 = 0$ links principal stresses (eigenvalues) to invariants.
*   **Principal Stresses:** Are also invariant quantities.
*   **Decomposition:** Any stress tensor can be decomposed into hydrostatic (volumetric change) and deviatoric (shape change/shear) components.
*   **Applications:** Crucial for material constitutive models (plasticity, creep) and failure theories.

---
