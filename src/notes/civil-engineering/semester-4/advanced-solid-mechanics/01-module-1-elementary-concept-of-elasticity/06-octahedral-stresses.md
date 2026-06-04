---
title: "Octahedral Stresses"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ee"
status: "completed"
scrapedAt: "2026-05-20T18:42:28.614Z"
---
# Advanced Solid Mechanics: Module 1 - Elementary Concept of Elasticity

## Topic: Octahedral Stresses

---

### Introduction

In solid mechanics, understanding the stress state within a material is crucial for predicting its behavior under load. While the principal stresses (normal stresses acting on planes with zero shear stress) provide a fundamental description, octahedral stresses offer a more comprehensive and insightful way to characterize the stress state at a point, particularly concerning the material's tendency to deform or fracture.

Octahedral stresses are the normal and shear stresses acting on specific planes called **octahedral planes**. These planes are defined by their orientation with respect to the principal stress axes. They are particularly useful because they represent planes where the stress components exhibit a balance between the principal stress directions.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Define octahedral planes and their geometric significance.**
*   **Understand the derivation and meaning of octahedral normal stress ($\sigma_{oct}$).**
*   **Understand the derivation and meaning of octahedral shear stress ($\tau_{oct}$).**
*   **Relate octahedral stresses to the principal stresses and the stress tensor.**
*   **Appreciate the importance of octahedral stresses in material failure theories.**
*   **Calculate octahedral stresses for a given stress state.**

---

### 1. Octahedral Planes

#### 1.1 Definition and Geometry

*   **Octahedral planes** are planes that cut through the stress tetrahedron such that they are equally inclined to the three principal stress directions ($\sigma_1, \sigma_2, \sigma_3$).
*   Imagine a cube with its faces aligned with the coordinate axes. If we align the principal stress directions with these axes, the octahedral planes are those that intersect the edges of this cube at their midpoints.
*   There are eight such planes, forming the faces of an octahedron inscribed within the stress cube.
*   The normal vector to each octahedral plane makes an angle of $\cos^{-1}(\frac{1}{\sqrt{3}})$ with each of the principal stress axes. This means the direction cosines of the normal to an octahedral plane are $(\pm \frac{1}{\sqrt{3}}, \pm \frac{1}{\sqrt{3}}, \pm \frac{1}{\sqrt{3}})$.

#### 1.2 Significance of Octahedral Planes

*   **Average Stress State:** The stresses on octahedral planes represent a kind of "average" stress state because they are influenced by all three principal stresses equally.
*   **Invariant Nature:** Stresses on these planes are related to invariants of the stress tensor, which are independent of the coordinate system.
*   **Failure Prediction:** Octahedral shear stress is a key parameter in many failure criteria, as it is often considered to be the driving force for shear yielding or fracture.

---

### 2. Octahedral Normal Stress ($\sigma_{oct}$)

#### 2.1 Derivation

The octahedral normal stress ($\sigma_{oct}$) is the component of normal stress acting perpendicular to an octahedral plane. It can be derived by considering the stress acting on a plane with a normal vector inclined equally to the principal stress directions.

Let the principal stresses be $\sigma_1, \sigma_2, \sigma_3$. Consider an octahedral plane whose normal vector $\mathbf{n}$ has direction cosines $(n_1, n_2, n_3)$ with respect to the principal axes. For an octahedral plane, $|n_1| = |n_2| = |n_3| = \frac{1}{\sqrt{3}}$.

The normal stress on any plane with normal $\mathbf{n}$ is given by:
$\sigma = \sigma_1 n_1^2 + \sigma_2 n_2^2 + \sigma_3 n_3^2$

For an octahedral plane, substituting $n_1^2 = n_2^2 = n_3^2 = (\frac{1}{\sqrt{3}})^2 = \frac{1}{3}$:
$\sigma_{oct} = \sigma_1 \left(\frac{1}{3}\right) + \sigma_2 \left(\frac{1}{3}\right) + \sigma_3 \left(\frac{1}{3}\right)$

$\boxed{\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}}$

#### 2.2 Meaning and Interpretation

*   **Mean Stress:** $\sigma_{oct}$ is simply the **average of the principal stresses**.
*   **Hydrostatic Stress:** It represents the hydrostatic component of the stress state, meaning the stress that acts equally in all directions and is responsible for volume changes.
*   **Invariant:** Since it's the average of principal stresses, $\sigma_{oct}$ is an invariant of the stress tensor. It is equal to one-third of the first invariant of the stress tensor ($I_1 = \sigma_{xx} + \sigma_{yy} + \sigma_{zz} = \sigma_1 + \sigma_2 + \sigma_3$).

---

### 3. Octahedral Shear Stress ($\tau_{oct}$)

#### 3.1 Derivation

The octahedral shear stress ($\tau_{oct}$) is the resultant shear stress acting on an octahedral plane. It is derived from the components of shear stress acting on the octahedral plane.

Let the normal to the octahedral plane have direction cosines $(n_1, n_2, n_3)$. The components of shear stress on this plane are:
$\tau_{1n} = \sigma_1 n_1 - (\sigma_1 n_1^2 + \sigma_2 n_2^2 + \sigma_3 n_3^2) n_1$
$\tau_{2n} = \sigma_2 n_2 - (\sigma_1 n_1^2 + \sigma_2 n_2^2 + \sigma_3 n_3^2) n_2$
$\tau_{3n} = \sigma_3 n_3 - (\sigma_1 n_1^2 + \sigma_2 n_2^2 + \sigma_3 n_3^2) n_3$

Substituting $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$ and $n_i = \frac{1}{\sqrt{3}}$ for an octahedral plane:
$\tau_{1n} = \sigma_1 \frac{1}{\sqrt{3}} - \sigma_{oct} \frac{1}{\sqrt{3}} = \frac{1}{\sqrt{3}} (\sigma_1 - \sigma_{oct})$
$\tau_{2n} = \sigma_2 \frac{1}{\sqrt{3}} - \sigma_{oct} \frac{1}{\sqrt{3}} = \frac{1}{\sqrt{3}} (\sigma_2 - \sigma_{oct})$
$\tau_{3n} = \sigma_3 \frac{1}{\sqrt{3}} - \sigma_{oct} \frac{1}{\sqrt{3}} = \frac{1}{\sqrt{3}} (\sigma_3 - \sigma_{oct})$

The octahedral shear stress is the resultant of these shear stress components:
$\tau_{oct}^2 = \tau_{1n}^2 + \tau_{2n}^2 + \tau_{3n}^2$
$\tau_{oct}^2 = \left(\frac{1}{\sqrt{3}}\right)^2 (\sigma_1 - \sigma_{oct})^2 + \left(\frac{1}{\sqrt{3}}\right)^2 (\sigma_2 - \sigma_{oct})^2 + \left(\frac{1}{\sqrt{3}}\right)^2 (\sigma_3 - \sigma_{oct})^2$
$\tau_{oct}^2 = \frac{1}{3} [(\sigma_1 - \sigma_{oct})^2 + (\sigma_2 - \sigma_{oct})^2 + (\sigma_3 - \sigma_{oct})^2]$

Substitute $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$:
$\sigma_1 - \sigma_{oct} = \sigma_1 - \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{2\sigma_1 - \sigma_2 - \sigma_3}{3}$
Similarly,
$\sigma_2 - \sigma_{oct} = \frac{2\sigma_2 - \sigma_1 - \sigma_3}{3}$
$\sigma_3 - \sigma_{oct} = \frac{2\sigma_3 - \sigma_1 - \sigma_2}{3}$

Substituting these back into the $\tau_{oct}^2$ equation:
$\tau_{oct}^2 = \frac{1}{3} \left[ \left(\frac{2\sigma_1 - \sigma_2 - \sigma_3}{3}\right)^2 + \left(\frac{2\sigma_2 - \sigma_1 - \sigma_3}{3}\right)^2 + \left(\frac{2\sigma_3 - \sigma_1 - \sigma_2}{3}\right)^2 \right]$
$\tau_{oct}^2 = \frac{1}{27} \left[ (2\sigma_1 - \sigma_2 - \sigma_3)^2 + (2\sigma_2 - \sigma_1 - \sigma_3)^2 + (2\sigma_3 - \sigma_1 - \sigma_2)^2 \right]$

Expanding and simplifying this expression leads to:
$\tau_{oct}^2 = \frac{1}{9} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$

Therefore, the octahedral shear stress is:
$\boxed{\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}}$

#### 3.2 Meaning and Interpretation

*   **Deviatoric Stress:** $\tau_{oct}$ is a measure of the **deviatoric** or **distortional** component of the stress state. It quantifies the tendency of the material to undergo shear deformation.
*   **Shear Stress Magnitude:** It represents the magnitude of the shear stress on any of the eight octahedral planes.
*   **Relationship to Principal Shear Stress:** The term inside the square root is related to the maximum shear stress ($\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$). $\tau_{oct}$ is smaller than $\tau_{max}$ and captures the shear deformation contribution from all principal stress differences, not just the maximum difference.
*   **Invariant:** Like $\sigma_{oct}$, $\tau_{oct}$ is also an invariant of the stress tensor.

---

### 4. Relationship to Stress Tensor and Invariants

The stress state at a point can be represented by a symmetric stress tensor $\boldsymbol{\sigma}$:

$\boldsymbol{\sigma} = \begin{bmatrix} \sigma_{xx} & \tau_{xy} & \tau_{xz} \\ \tau_{yx} & \sigma_{yy} & \tau_{yz} \\ \tau_{zx} & \tau_{zy} & \sigma_{zz} \end{bmatrix}$

The principal stresses ($\sigma_1, \sigma_2, \sigma_3$) are the eigenvalues of this tensor.

The **stress invariants** are quantities derived from the stress tensor that are independent of the coordinate system. The three principal invariants are:

*   **First invariant ($I_1$):** Sum of normal stresses (trace of the tensor)
    $I_1 = \sigma_{xx} + \sigma_{yy} + \sigma_{zz} = \sigma_1 + \sigma_2 + \sigma_3$
    $\implies \sigma_{oct} = \frac{I_1}{3}$

*   **Second invariant ($I_2$):** Sum of principal minors
    $I_2 = \begin{vmatrix} \sigma_{yy} & \tau_{yz} \\ \tau_{zy} & \sigma_{zz} \end{vmatrix} + \begin{vmatrix} \sigma_{xx} & \tau_{xz} \\ \tau_{zx} & \sigma_{zz} \end{vmatrix} + \begin{vmatrix} \sigma_{xx} & \tau_{xy} \\ \tau_{yx} & \sigma_{yy} \end{vmatrix}$
    $I_2 = \sigma_1 \sigma_2 + \sigma_2 \sigma_3 + \sigma_3 \sigma_1$

*   **Third invariant ($I_3$):** Determinant of the stress tensor
    $I_3 = \det(\boldsymbol{\sigma})$
    $I_3 = \sigma_1 \sigma_2 \sigma_3$

The octahedral shear stress can be expressed in terms of the invariants, but the direct formula in terms of principal stresses is more commonly used. The expression for $\tau_{oct}^2$ can be shown to be:

$\tau_{oct}^2 = \frac{1}{3} (I_1^2 - 3I_2)$

Let's verify this:
$I_1^2 = (\sigma_1 + \sigma_2 + \sigma_3)^2 = \sigma_1^2 + \sigma_2^2 + \sigma_3^2 + 2(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)$
$3I_2 = 3(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)$
$I_1^2 - 3I_2 = \sigma_1^2 + \sigma_2^2 + \sigma_3^2 - (\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)$

We know that:
$(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2$
$= (\sigma_1^2 - 2\sigma_1\sigma_2 + \sigma_2^2) + (\sigma_2^2 - 2\sigma_2\sigma_3 + \sigma_3^2) + (\sigma_3^2 - 2\sigma_3\sigma_1 + \sigma_1^2)$
$= 2(\sigma_1^2 + \sigma_2^2 + \sigma_3^2) - 2(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)$
$= 2 (\sigma_1^2 + \sigma_2^2 + \sigma_3^2 - (\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1))$

So, $\tau_{oct}^2 = \frac{1}{9} [2(\sigma_1^2 + \sigma_2^2 + \sigma_3^2) - 2(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)] = \frac{2}{9} [I_1^2 - 3I_2]$.

**Correction:** The correct invariant-based relationship is:
$\tau_{oct}^2 = \frac{1}{3} (I_1^2 - 3I_2)$ is incorrect.
The correct relationship is derived from the relation of $\tau_{oct}^2$ to the second invariant of the deviatoric stress tensor ($J_2$):
$\tau_{oct}^2 = \frac{2}{3} J_2$, where $J_2 = \frac{1}{2} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$.
This means $\tau_{oct}^2 = \frac{1}{3} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$, which is what we derived.

And $J_2 = \frac{1}{2} (\sigma_1^2 + \sigma_2^2 + \sigma_3^2 - \sigma_1\sigma_2 - \sigma_2\sigma_3 - \sigma_3\sigma_1)$.
Also $I_1^2 - 3I_2 = (\sigma_1^2 + \sigma_2^2 + \sigma_3^2 - \sigma_1\sigma_2 - \sigma_2\sigma_3 - \sigma_3\sigma_1)$.
So, $\tau_{oct}^2 = \frac{1}{3} (I_1^2 - 3I_2)$ IS correct. My algebraic manipulation was a bit off earlier.
Let's re-verify the algebra for $I_1^2 - 3I_2$:
$(\sigma_1+\sigma_2+\sigma_3)^2 - 3(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)$
$= \sigma_1^2+\sigma_2^2+\sigma_3^2 + 2\sigma_1\sigma_2 + 2\sigma_2\sigma_3 + 2\sigma_3\sigma_1 - 3\sigma_1\sigma_2 - 3\sigma_2\sigma_3 - 3\sigma_3\sigma_1$
$= \sigma_1^2+\sigma_2^2+\sigma_3^2 - \sigma_1\sigma_2 - \sigma_2\sigma_3 - \sigma_3\sigma_1$.

And our $\tau_{oct}^2$ is $\frac{1}{9} [2(\sigma_1^2 + \sigma_2^2 + \sigma_3^2) - 2(\sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1)]$.
So, $\tau_{oct}^2 = \frac{2}{9} (I_1^2 - 3I_2)$ is actually the correct relation.

**Key Takeaway:**
*   $\sigma_{oct} = \frac{I_1}{3}$
*   $\tau_{oct} = \sqrt{\frac{2}{3} J_2} = \sqrt{\frac{2}{9} (I_1^2 - 3I_2)}$ where $J_2$ is the second invariant of the deviatoric stress.

---

### 5. Importance in Material Failure Theories

Octahedral stresses are fundamental to several important material failure criteria, particularly for ductile materials.

#### 5.1 Maximum Shear Stress Theory (Tresca Criterion)

*   This theory states that yielding occurs when the maximum shear stress in the material reaches a critical value.
*   The critical shear stress is usually taken as half the yield stress in simple tension ($\tau_{crit} = \frac{\sigma_y}{2}$).
*   The maximum shear stress is given by $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$.
*   So, failure occurs when $\frac{\sigma_1 - \sigma_3}{2} \ge \frac{\sigma_y}{2}$, or $\sigma_1 - \sigma_3 \ge \sigma_y$.

#### 5.2 Distortion Energy Theory (Von Mises Criterion)

*   This theory states that yielding occurs when the **distortion energy** per unit volume reaches a critical value.
*   The distortion energy is directly proportional to the square of the octahedral shear stress ($\tau_{oct}^2$).
*   The distortion energy per unit volume is given by $U_d = \frac{1}{12G} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$.
*   Since $\tau_{oct}^2 = \frac{1}{9} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$, we can see that $U_d = \frac{3}{4G} \tau_{oct}^2$.
*   In simple tension, the distortion energy is $U_d = \frac{\sigma_y^2}{6G}$.
*   Equating the two expressions for distortion energy at yield:
    $\frac{3}{4G} \tau_{oct}^2 = \frac{\sigma_y^2}{6G}$
    $\tau_{oct}^2 = \frac{4G \sigma_y^2}{18G} = \frac{2}{9} \sigma_y^2$
    $\tau_{oct} = \frac{\sqrt{2}}{3} \sigma_y$

*   **Von Mises Yield Condition:** Failure occurs when $\tau_{oct} \ge \frac{\sqrt{2}}{3} \sigma_y$.
    Substituting the formula for $\tau_{oct}$:
    $\frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2} \ge \frac{\sqrt{2}}{3} \sigma_y$
    $\sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2} \ge \sqrt{2} \sigma_y$
    $(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2 \ge 2 \sigma_y^2$

*   **Significance:** The Von Mises criterion, which is based on octahedral shear stress and distortion energy, is generally more accurate than the Tresca criterion for most ductile materials. It accounts for the contribution of all principal stress differences to yielding.

#### 5.3 Brittle Fracture Theories

Octahedral stresses can also be used in some theories for brittle fracture, often involving the normal stress component. However, shear stress is typically the dominant factor in yielding of ductile materials.

---

### 6. Calculation of Octahedral Stresses

To calculate octahedral stresses for a given stress state, you first need to determine the principal stresses.

**Steps:**

1.  **Obtain the stress tensor:** This is usually given in a coordinate system (e.g., $\sigma_{xx}, \sigma_{yy}, \sigma_{zz}, \tau_{xy}, \tau_{yz}, \tau_{zx}$).
2.  **Find the principal stresses ($\sigma_1, \sigma_2, \sigma_3$):** This involves solving the characteristic equation of the stress tensor:
    $\det(\boldsymbol{\sigma} - \sigma \mathbf{I}) = 0$
    This results in a cubic equation for $\sigma$:
    $\sigma^3 - I_1 \sigma^2 + I_2 \sigma - I_3 = 0$
    where $I_1$, $I_2$, and $I_3$ are the stress invariants. The roots of this equation are the principal stresses $\sigma_1, \sigma_2, \sigma_3$.
3.  **Calculate $\sigma_{oct}$:**
    $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$
4.  **Calculate $\tau_{oct}$:**
    $\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}$

---

### 7. Examples

#### Example 1: Simple Tension

Consider a rod under uniaxial tension with stress $\sigma_0$.
The principal stresses are: $\sigma_1 = \sigma_0$, $\sigma_2 = 0$, $\sigma_3 = 0$.

*   **Octahedral Normal Stress ($\sigma_{oct}$):**
    $\sigma_{oct} = \frac{\sigma_0 + 0 + 0}{3} = \frac{\sigma_0}{3}$

*   **Octahedral Shear Stress ($\tau_{oct}$):**
    $\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_0 - 0)^2 + (0 - 0)^2 + (0 - \sigma_0)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{\sigma_0^2 + 0 + \sigma_0^2} = \frac{1}{3} \sqrt{2\sigma_0^2} = \frac{\sqrt{2}}{3} \sigma_0$

*   **Failure check (Von Mises):** For yielding, $\tau_{oct} \ge \frac{\sqrt{2}}{3} \sigma_y$.
    $\frac{\sqrt{2}}{3} \sigma_0 \ge \frac{\sqrt{2}}{3} \sigma_y \implies \sigma_0 \ge \sigma_y$. This matches the uniaxial yield stress.

#### Example 2: Triaxial Stress

Consider a stress state with principal stresses $\sigma_1 = 100$ MPa, $\sigma_2 = 50$ MPa, $\sigma_3 = 20$ MPa.

*   **Octahedral Normal Stress ($\sigma_{oct}$):**
    $\sigma_{oct} = \frac{100 + 50 + 20}{3} = \frac{170}{3} \approx 56.67$ MPa

*   **Octahedral Shear Stress ($\tau_{oct}$):**
    $\tau_{oct} = \frac{1}{3} \sqrt{(100 - 50)^2 + (50 - 20)^2 + (20 - 100)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(50)^2 + (30)^2 + (-80)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{2500 + 900 + 6400} = \frac{1}{3} \sqrt{9800}$
    $\tau_{oct} = \frac{1}{3} (10\sqrt{98}) = \frac{10}{3} (7\sqrt{2}) \approx \frac{10}{3} (9.9) \approx 33.0$ MPa

#### Example 3: Plane Stress

Consider a thin plate in plane stress with $\sigma_x = 80$ MPa, $\sigma_y = 40$ MPa, $\tau_{xy} = 30$ MPa, and $\sigma_z = 0$.

First, find the principal stresses. The characteristic equation for a 2D stress state (with $\sigma_3 = 0$) is:
$\sigma^2 - (\sigma_x + \sigma_y)\sigma + (\sigma_x\sigma_y - \tau_{xy}^2) = 0$

$I_1 = \sigma_x + \sigma_y + \sigma_z = 80 + 40 + 0 = 120$ MPa
$I_2 = \sigma_x\sigma_y + \sigma_y\sigma_z + \sigma_z\sigma_x - (\tau_{xy}^2 + \tau_{yz}^2 + \tau_{zx}^2)$
$I_2 = (80)(40) + (40)(0) + (0)(80) - (30^2 + 0^2 + 0^2)$
$I_2 = 3200 - 900 = 2300$ MPa$^2$
$I_3 = \sigma_x\sigma_y\sigma_z - \sigma_x\tau_{yz}^2 - \sigma_y\tau_{zx}^2 - \sigma_z\tau_{xy}^2 + 2\tau_{xy}\tau_{yz}\tau_{zx}$
$I_3 = (80)(40)(0) - 80(0)^2 - 40(0)^2 - 0(30)^2 + 2(30)(0)(0) = 0$

The cubic equation is:
$\sigma^3 - 120\sigma^2 + 2300\sigma - 0 = 0$
$\sigma(\sigma^2 - 120\sigma + 2300) = 0$

One principal stress is $\sigma_3 = 0$.
The other two are from the quadratic equation:
$\sigma = \frac{-(-120) \pm \sqrt{(-120)^2 - 4(1)(2300)}}{2(1)}$
$\sigma = \frac{120 \pm \sqrt{14400 - 9200}}{2}$
$\sigma = \frac{120 \pm \sqrt{5200}}{2} = \frac{120 \pm 10\sqrt{52}}{2} = 60 \pm 5\sqrt{52} = 60 \pm 5 \cdot 2\sqrt{13} = 60 \pm 10\sqrt{13}$
$\sqrt{13} \approx 3.606$
$\sigma_1 = 60 + 10(3.606) \approx 60 + 36.06 = 96.06$ MPa
$\sigma_2 = 60 - 10(3.606) \approx 60 - 36.06 = 23.94$ MPa

So, the principal stresses are $\sigma_1 \approx 96.06$ MPa, $\sigma_2 \approx 23.94$ MPa, $\sigma_3 = 0$ MPa.

*   **Octahedral Normal Stress ($\sigma_{oct}$):**
    $\sigma_{oct} = \frac{96.06 + 23.94 + 0}{3} = \frac{120}{3} = 40$ MPa
    (Note: This is simply $\frac{I_1}{3} = \frac{120}{3} = 40$ MPa, as expected.)

*   **Octahedral Shear Stress ($\tau_{oct}$):**
    $\tau_{oct} = \frac{1}{3} \sqrt{(96.06 - 23.94)^2 + (23.94 - 0)^2 + (0 - 96.06)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(72.12)^2 + (23.94)^2 + (-96.06)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{5199.9 + 573.1 + 9227.5} = \frac{1}{3} \sqrt{15000.5}$
    $\tau_{oct} = \frac{1}{3} (122.47) \approx 40.82$ MPa

---

### 8. Practice Questions/Exercises

**Question 1:**
A stress element is subjected to the following principal stresses: $\sigma_1 = 150$ MPa, $\sigma_2 = -50$ MPa, $\sigma_3 = 20$ MPa. Calculate the octahedral normal stress and octahedral shear stress.

**Question 2:**
For the stress state given in Question 1, if the material yields at an octahedral shear stress of 80 MPa, will the material yield under this loading?

**Question 3:**
Consider a state of plane stress with $\sigma_x = 100$ MPa, $\sigma_y = -20$ MPa, and $\tau_{xy} = 40$ MPa. Determine the principal stresses and then calculate the octahedral normal stress and octahedral shear stress.

**Question 4:**
What is the physical meaning of the octahedral normal stress and the octahedral shear stress?

---

### Answers to Practice Questions

**Answer 1:**
Given principal stresses: $\sigma_1 = 150$ MPa, $\sigma_2 = -50$ MPa, $\sigma_3 = 20$ MPa.

*   **Octahedral Normal Stress ($\sigma_{oct}$):**
    $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{150 + (-50) + 20}{3} = \frac{120}{3} = 40$ MPa.

*   **Octahedral Shear Stress ($\tau_{oct}$):**
    $\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(150 - (-50))^2 + (-50 - 20)^2 + (20 - 150)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(200)^2 + (-70)^2 + (-130)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{40000 + 4900 + 16900}$
    $\tau_{oct} = \frac{1}{3} \sqrt{61800} \approx \frac{1}{3} (248.59) \approx 82.86$ MPa.

**Answer 2:**
The material yields at an octahedral shear stress of 80 MPa.
From Question 1, the calculated octahedral shear stress is approximately 82.86 MPa.
Since $82.86 \text{ MPa} > 80 \text{ MPa}$, **yes, the material will yield** under this loading according to the Von Mises criterion (which uses octahedral shear stress).

**Answer 3:**
Given plane stress: $\sigma_x = 100$ MPa, $\sigma_y = -20$ MPa, $\tau_{xy} = 40$ MPa. Assume $\sigma_z = 0$.

To find principal stresses, we use the formula for 2D stress:
$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
$\frac{\sigma_x + \sigma_y}{2} = \frac{100 + (-20)}{2} = \frac{80}{2} = 40$ MPa.
$\frac{\sigma_x - \sigma_y}{2} = \frac{100 - (-20)}{2} = \frac{120}{2} = 60$ MPa.
$\tau_{xy}^2 = 40^2 = 1600$ MPa$^2$.
$\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 = 60^2 = 3600$ MPa$^2$.

$\sigma_{1,2} = 40 \pm \sqrt{3600 + 1600} = 40 \pm \sqrt{5200}$
$\sigma_{1,2} = 40 \pm 10\sqrt{52} = 40 \pm 10 \cdot 2\sqrt{13} = 40 \pm 20\sqrt{13}$
$\sigma_1 = 40 + 20\sqrt{13} \approx 40 + 20(3.606) \approx 40 + 72.12 = 112.12$ MPa.
$\sigma_2 = 40 - 20\sqrt{13} \approx 40 - 72.12 = -32.12$ MPa.
The principal stresses are $\sigma_1 \approx 112.12$ MPa, $\sigma_2 \approx -32.12$ MPa, and $\sigma_3 = 0$ MPa.

*   **Octahedral Normal Stress ($\sigma_{oct}$):**
    $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{112.12 + (-32.12) + 0}{3} = \frac{80}{3} \approx 26.67$ MPa.
    (Alternatively, using $I_1$ from the given stresses: $\sigma_{oct} = \frac{\sigma_x + \sigma_y + \sigma_z}{3} = \frac{100 + (-20) + 0}{3} = \frac{80}{3} \approx 26.67$ MPa).

*   **Octahedral Shear Stress ($\tau_{oct}$):**
    $\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(112.12 - (-32.12))^2 + (-32.12 - 0)^2 + (0 - 112.12)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{(144.24)^2 + (-32.12)^2 + (-112.12)^2}$
    $\tau_{oct} = \frac{1}{3} \sqrt{20805.2 + 1031.7 + 12570.9}$
    $\tau_{oct} = \frac{1}{3} \sqrt{34407.8} \approx \frac{1}{3} (185.49) \approx 61.83$ MPa.

**Answer 4:**
*   **Octahedral Normal Stress ($\sigma_{oct}$):** This represents the **average normal stress** acting on planes that are equally inclined to the principal stress directions. It is interpreted as the **hydrostatic component** of the stress state, responsible for volume changes but not for shape distortion. It is invariant with respect to coordinate system rotation.

*   **Octahedral Shear Stress ($\tau_{oct}$):** This represents the **magnitude of the shear stress** acting on those same octahedral planes. It is a measure of the **deviatoric or distortional component** of the stress state, quantifying the tendency of the material to undergo shear deformation and contributing to yielding in ductile materials. It is also invariant with respect to coordinate system rotation.

---

### Important Points to Remember

*   **Octahedral planes** are oriented such that their normal vectors make equal angles with the principal stress axes.
*   **$\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$** is the mean stress and represents the hydrostatic component.
*   **$\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}$** is the octahedral shear stress, representing the distortional component.
*   Both $\sigma_{oct}$ and $\tau_{oct}$ are **stress invariants**.
*   $\tau_{oct}$ is crucial for predicting **ductile yielding** via the **Von Mises criterion**.
*   To calculate octahedral stresses, one must first find the **principal stresses**.

---
This concludes the notes for the topic of Octahedral Stresses.
