---
title: "plane stress"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f0"
status: "completed"
scrapedAt: "2026-05-20T18:42:30.019Z"
---
# ADVANCED SOLID MECHANICS: Module 1: Elementary Concept of Elasticity

## Topic: Plane Stress

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   **Understand and define the concept of plane stress.**
*   **Identify the conditions under which a stress state can be approximated as plane stress.**
*   **Describe the stress components in a plane stress state.**
*   **Apply the equilibrium equations for a plane stress state.**
*   **Relate stress and strain in a plane stress state using Hooke's Law.**
*   **Derive and utilize the constitutive equations for plane stress.**
*   **Understand the concept of strain transformation in plane stress.**
*   **Apply Mohr's Circle for plane stress analysis.**
*   **Determine principal stresses and maximum shear stresses in plane stress.**
*   **Calculate stresses on inclined planes.**

---

### 1. Introduction to Plane Stress

#### 1.1 What is Plane Stress?

*   **Definition:** Plane stress is a two-dimensional stress state where the stress components acting perpendicular to a particular plane are negligible or zero. In practical terms, it means that the stress state is effectively confined to a plane.

*   **Assumptions:**
    *   The thickness of the object is small compared to its other dimensions (length and width).
    *   Loads are applied in the plane of the object or are distributed uniformly over the thickness.
    *   There are no significant stress gradients through the thickness.

#### 1.2 Conditions for Plane Stress Approximation

Plane stress is a useful simplification that is valid in many engineering situations:

*   **Thin Plates and Shells:**
    *   **Thin plates subjected to in-plane loading:** For example, a flat plate under tension, bending, or shear.
    *   **Thin-walled pressure vessels:** Such as the wall of a cylindrical tank under internal pressure. The stress through the thickness of the wall is very small compared to the stresses in the circumferential and longitudinal directions.

*   **Surface Loading:** When loads are applied to the surface of a thick body, the stress state near the surface often approximates plane stress, provided the dimensions in the thickness direction are significantly larger than the loaded area.

*   **Examples:**
    *   A thin metal sheet being stretched.
    *   The wall of a pressurized pipeline.
    *   A wing structure of an airplane under aerodynamic loads (simplified representation).
    *   A circular diaphragm subjected to uniform pressure.

#### 1.3 Stress Components in a Plane Stress State

Consider a thin plate lying in the $xy$-plane. In a plane stress state, the stress components are:

*   **In-plane stresses:** These are the stresses that lie within the $xy$-plane.
    *   Normal stress in the $x$-direction: $\sigma_x$
    *   Normal stress in the $y$-direction: $\sigma_y$
    *   Shear stress in the $xy$-plane: $\tau_{xy}$ (Note: $\tau_{xy} = \tau_{yx}$)

*   **Out-of-plane stresses:** These are the stresses acting perpendicular to the $xy$-plane (in the $z$-direction).
    *   Normal stress in the $z$-direction: $\sigma_z$
    *   Shear stresses in the $yz$-plane: $\tau_{yz}$
    *   Shear stresses in the $xz$-plane: $\tau_{xz}$

In a plane stress state, we assume:
$\sigma_z = 0$
$\tau_{yz} = 0$
$\tau_{xz} = 0$

Therefore, the stress state can be represented by a **stress tensor** in 2D:

$$
\begin{bmatrix}
\sigma_x & \tau_{xy} \\
\tau_{yx} & \sigma_y
\end{bmatrix}
$$

Or, using index notation: $\sigma_{ij}$ where $i, j \in \{x, y\}$, and $\sigma_{zz} = \sigma_{xz} = \sigma_{yz} = 0$.

---

### 2. Equilibrium Equations for Plane Stress

For a two-dimensional body in equilibrium under plane stress conditions, the equilibrium equations in the $xy$-plane are derived from Newton's second law applied to an infinitesimal rectangular element.

Consider an infinitesimal element of dimensions $dx \times dy$ in the $xy$-plane. The forces acting on this element must balance for equilibrium.

The sum of forces in the $x$-direction must be zero:
$\frac{\partial \sigma_x}{\partial x} dx \, dy + \frac{\partial \tau_{yx}}{\partial y} dy \, dx = 0$
Dividing by $dx \, dy$, we get:
$$ \frac{\partial \sigma_x}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} = 0 $$

The sum of forces in the $y$-direction must be zero:
$\frac{\partial \sigma_y}{\partial y} dy \, dx + \frac{\partial \tau_{xy}}{\partial x} dx \, dy = 0$
Dividing by $dx \, dy$, we get:
$$ \frac{\partial \sigma_y}{\partial y} + \frac{\partial \tau_{xy}}{\partial x} = 0 $$

**Important Note:** These equations are valid for static equilibrium and do not include inertial forces (acceleration). For dynamic problems, inertial terms would need to be added.

---

### 3. Stress-Strain Relations (Constitutive Equations) for Plane Stress

For an isotropic, elastic material, Hooke's Law describes the linear relationship between stress and strain. In a general 3D state of stress, Hooke's Law is:

$\epsilon_x = \frac{1}{E} [\sigma_x - \nu(\sigma_y + \sigma_z)]$
$\epsilon_y = \frac{1}{E} [\sigma_y - \nu(\sigma_x + \sigma_z)]$
$\epsilon_z = \frac{1}{E} [\sigma_z - \nu(\sigma_x + \sigma_y)]$
$\gamma_{xy} = \frac{1}{G} \tau_{xy}$
$\gamma_{yz} = \frac{1}{G} \tau_{yz}$
$\gamma_{xz} = \frac{1}{G} \tau_{xz}$

Where:
*   $E$ is the Young's Modulus (Modulus of Elasticity)
*   $\nu$ is the Poisson's Ratio
*   $G$ is the Shear Modulus

**For Plane Stress:**
We have $\sigma_z = \tau_{yz} = \tau_{xz} = 0$. Substituting these into Hooke's Law:

$\epsilon_x = \frac{1}{E} [\sigma_x - \nu(\sigma_y + 0)] = \frac{1}{E} (\sigma_x - \nu\sigma_y)$
$\epsilon_y = \frac{1}{E} [\sigma_y - \nu(\sigma_x + 0)] = \frac{1}{E} (\sigma_y - \nu\sigma_x)$
$\epsilon_z = \frac{1}{E} [0 - \nu(\sigma_x + \sigma_y)] = -\frac{\nu}{E} (\sigma_x + \sigma_y)$
$\gamma_{xy} = \frac{1}{G} \tau_{xy}$

**Relationship between $E$, $G$, and $\nu$:**
For isotropic materials, $G = \frac{E}{2(1+\nu)}$. We can substitute this into the shear strain equation.

The constitutive equations for plane stress are typically expressed as strain in terms of stress:

$$
\begin{bmatrix}
\epsilon_x \\
\epsilon_y \\
\gamma_{xy}
\end{bmatrix}
=
\frac{1}{E}
\begin{bmatrix}
1 & -\nu & 0 \\
-\nu & 1 & 0 \\
0 & 0 & 2(1+\nu)
\end{bmatrix}
\begin{bmatrix}
\sigma_x \\
\sigma_y \\
\tau_{xy}
\end{bmatrix}
$$

This can also be written as:

$\epsilon_x = \frac{\sigma_x - \nu\sigma_y}{E}$
$\epsilon_y = \frac{\sigma_y - \nu\sigma_x}{E}$
$\gamma_{xy} = \frac{\tau_{xy}}{G} = \frac{2(1+\nu)}{E} \tau_{xy}$

**Important Point:** The strain in the $z$-direction ($\epsilon_z$) is not zero in plane stress; it is a consequence of the Poisson effect.

---

### 4. Strain Transformation in Plane Stress

Just as stresses change with orientation, strains also change with orientation. Consider a coordinate system rotated by an angle $\theta$ relative to the $xy$-coordinates. We want to find the strain components $\epsilon_{x'}$, $\epsilon_{y'}$, and $\gamma_{x'y'}$ in the new $x'y'$-plane.

The transformation equations for strain in 2D are analogous to stress transformation equations. If we know $\epsilon_x$, $\epsilon_y$, and $\gamma_{xy}$, we can find the strains in any other direction.

Let the $x'$-axis be rotated by an angle $\theta$ counterclockwise from the $x$-axis.

*   **Normal strain in the $x'$-direction ($\epsilon_{x'}$):**
    $\epsilon_{x'} = \epsilon_x \cos^2\theta + \epsilon_y \sin^2\theta + \gamma_{xy} \sin\theta \cos\theta$
    Using trigonometric identities ($\cos^2\theta = \frac{1+\cos(2\theta)}{2}$, $\sin^2\theta = \frac{1-\cos(2\theta)}{2}$, $2\sin\theta\cos\theta = \sin(2\theta)$):
    $\epsilon_{x'} = \epsilon_x \left(\frac{1+\cos(2\theta)}{2}\right) + \epsilon_y \left(\frac{1-\cos(2\theta)}{2}\right) + \gamma_{xy} \left(\frac{\sin(2\theta)}{2}\right)$
    $$ \epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \frac{\gamma_{xy}}{2} \sin(2\theta) $$

*   **Normal strain in the $y'$-direction ($\epsilon_{y'}$):**
    The $y'$-axis is rotated by $\theta + 90^\circ$ from the $x$-axis. Replacing $\theta$ with $(\theta + 90^\circ)$ in the $\epsilon_{x'}$ equation:
    $\cos(2(\theta + 90^\circ)) = \cos(2\theta + 180^\circ) = -\cos(2\theta)$
    $\sin(2(\theta + 90^\circ)) = \sin(2\theta + 180^\circ) = -\sin(2\theta)$
    $\epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} (-\cos(2\theta)) + \frac{\gamma_{xy}}{2} (-\sin(2\theta))$
    $$ \epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} - \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) - \frac{\gamma_{xy}}{2} \sin(2\theta) $$

*   **Shear strain in the $x'y'$-plane ($\gamma_{x'y'}$):**
    $\gamma_{x'y'} = -2(\epsilon_x - \epsilon_y) \sin\theta \cos\theta + \gamma_{xy} (\cos^2\theta - \sin^2\theta)$
    $$ \gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta) $$

**Strain Transformation Rule (Matrix Form):**

$$
\begin{bmatrix}
\epsilon_{x'} \\
\epsilon_{y'} \\
\gamma_{x'y'}
\end{bmatrix}
=
\begin{bmatrix}
\cos^2\theta & \sin^2\theta & 2\sin\theta\cos\theta \\
\sin^2\theta & \cos^2\theta & -2\sin\theta\cos\theta \\
-\sin\theta\cos\theta & \sin\theta\cos\theta & \cos^2\theta - \sin^2\theta
\end{bmatrix}
\begin{bmatrix}
\epsilon_x \\
\epsilon_y \\
\gamma_{xy}
\end{bmatrix}
$$
*Correction for shear strain in the matrix form: the correct matrix for shear strain transformation is $\begin{bmatrix} -\sin\theta \cos\theta & \sin\theta \cos\theta & \cos^2\theta - \sin^2\theta \end{bmatrix}$ for $\gamma_{x'y'}$.*

The general strain transformation equations are:

$$
\begin{bmatrix}
\epsilon_{x'} \\
\epsilon_{y'} \\
\gamma_{x'y'}
\end{bmatrix}
=
\begin{bmatrix}
\cos^2\theta & \sin^2\theta & \sin(2\theta) \\
\sin^2\theta & \cos^2\theta & -\sin(2\theta) \\
-\frac{1}{2}\sin(2\theta) & \frac{1}{2}\sin(2\theta) & \cos(2\theta)
\end{bmatrix}
\begin{bmatrix}
\epsilon_x \\
\epsilon_y \\
\gamma_{xy}
\end{bmatrix}
$$
*Note: there is a common error in the shear transformation, the correct shear strain transformation is $\gamma_{x'y'} = 2(\epsilon_x - \epsilon_y) \sin\theta \cos\theta + \gamma_{xy} (\cos^2\theta - \sin^2\theta)$. This means the matrix for shear strain should have $\sin(2\theta)$ and $\cos(2\theta)$ components.*

Let's use the more common form:
$\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \frac{\gamma_{xy}}{2} \sin(2\theta)$
$\epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} - \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) - \frac{\gamma_{xy}}{2} \sin(2\theta)$
$\gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta)$

---

### 5. Mohr's Circle for Plane Stress

Mohr's circle is a graphical method to determine the principal stresses, maximum shear stresses, and stresses on inclined planes. It plots the stress components $(\sigma, \tau)$ for different orientations.

#### 5.1 Construction of Mohr's Circle

Given the stress components $\sigma_x, \sigma_y, \tau_{xy}$ at a point:

1.  **Set up Axes:** Draw a $\sigma$-axis (horizontal) and a $\tau$-axis (vertical).
2.  **Locate Center:** The center of the circle is located at $(\frac{\sigma_x + \sigma_y}{2}, 0)$ on the $\sigma$-axis.
3.  **Locate a Point:** Choose one face of the stress element, for example, the face perpendicular to the $x$-axis. The stress components on this face are $(\sigma_x, \tau_{xy})$. Plot this point $A$ on the graph. Note: if $\tau_{xy}$ is positive (tensile or counterclockwise shear), plot it above the $\sigma$-axis. If negative (compressive or clockwise shear), plot it below.
4.  **Locate the Second Point:** The stress components on the face perpendicular to the $y$-axis are $(\sigma_y, \tau_{yx})$. Since $\tau_{yx} = -\tau_{xy}$ in terms of plotting convention (the shear on the $y$-face, $\tau_{yx}$, is opposite in sign to $\tau_{xy}$ on the $x$-face), plot point $B$ at $(\sigma_y, -\tau_{xy})$.
5.  **Draw the Circle:** Draw a circle passing through points $A$ and $B$. This is Mohr's circle. The diameter connects points $A$ and $B$.

#### 5.2 Interpretation of Mohr's Circle

*   **Principal Stresses ($\sigma_1, \sigma_2$):** These are the maximum and minimum normal stresses, and they occur where the shear stress is zero.
    *   They are the points where the circle intersects the $\sigma$-axis.
    *   The radius of the circle, $R$, is given by: $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    *   The principal stresses are:
        $$ \sigma_1 = \frac{\sigma_x + \sigma_y}{2} + R $$
        $$ \sigma_2 = \frac{\sigma_x + \sigma_y}{2} - R $$
    *   The principal planes are oriented at an angle $2\theta_p$ from the initial $xy$-plane, where $\tan(2\theta_p) = \frac{\tau_{xy}}{(\sigma_x - \sigma_y)/2} = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$. The principal planes are orthogonal.

*   **Maximum Shear Stress ($\tau_{max}$):** This is the maximum shear stress that occurs in the material.
    *   It is the radius of the circle, $R$.
    *   $\tau_{max} = R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    *   The planes of maximum shear stress are oriented at $45^\circ$ to the principal planes. The shear stress is zero on the principal planes, and the normal stress on the planes of maximum shear stress is $\sigma_{avg} = \frac{\sigma_x + \sigma_y}{2}$.

*   **Stresses on an Inclined Plane:**
    *   To find the stresses ($\sigma_{x'}, \tau_{x'y'}$) on a plane rotated by an angle $\theta$ from the $x$-axis, locate a point on the circle corresponding to this angle.
    *   The angle on Mohr's circle is $2\theta$.
    *   Starting from point $A$ (stress on $x$-face), move counterclockwise by $2\theta$ to find the stress state on the $x'$-face.
    *   The coordinates of this point on the circle give $\sigma_{x'}$ (horizontal coordinate) and $\tau_{x'y'}$ (vertical coordinate).
    *   The stress transformation equations can be derived from the geometry of the circle:
        $$ \sigma_{x'} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta) $$
        $$ \tau_{x'y'} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta) $$
        *(Note: The sign convention for shear stress in Mohr's circle is often taken as positive for counterclockwise shear. The stress transformation equations should match this convention.)*

#### 5.3 Strain Mohr's Circle

A similar Mohr's circle can be constructed for strain using $\epsilon_x, \epsilon_y, \gamma_{xy}$. The radius of the strain circle $R_\epsilon$ is related to the normal stresses by $R_\epsilon = \frac{1+\nu}{E} R_\sigma = \frac{1+\nu}{E} R$.

*   Principal strains: $\epsilon_1 = \frac{\epsilon_x + \epsilon_y}{2} + R_\epsilon$, $\epsilon_2 = \frac{\epsilon_x + \epsilon_y}{2} - R_\epsilon$
*   Maximum shear strain: $\gamma_{max} = 2 R_\epsilon = \frac{1+\nu}{E} (\sigma_1 - \sigma_2)$

---

### 6. Practice Questions and Exercises

**Question 1:**
A thin rectangular plate of width $500 \, \text{mm}$ and thickness $10 \, \text{mm}$ is subjected to a tensile stress of $\sigma_x = 100 \, \text{MPa}$ in the $x$-direction and a tensile stress of $\sigma_y = 20 \, \text{MPa}$ in the $y$-direction. There is also a shear stress $\tau_{xy} = 40 \, \text{MPa}$. Assume the material is steel with $E = 200 \, \text{GPa}$ and $\nu = 0.3$.

**(a)** What are the stress components in the $z$-direction?
**(b)** Calculate the normal strains $\epsilon_x$ and $\epsilon_y$.
**(c)** Calculate the shear strain $\gamma_{xy}$.
**(d)** Calculate the strain in the $z$-direction, $\epsilon_z$.
**(e)** What is the thickness of the plate after deformation?

**Solution 1:**
**(a)** In plane stress, $\sigma_z = 0$, $\tau_{yz} = 0$, $\tau_{xz} = 0$.

**(b)** Using Hooke's Law for plane stress:
$\epsilon_x = \frac{\sigma_x - \nu\sigma_y}{E} = \frac{100 \, \text{MPa} - 0.3 \times 20 \, \text{MPa}}{200 \times 10^3 \, \text{MPa}} = \frac{100 - 6}{200000} = \frac{94}{200000} = 4.7 \times 10^{-4}$
$\epsilon_y = \frac{\sigma_y - \nu\sigma_x}{E} = \frac{20 \, \text{MPa} - 0.3 \times 100 \, \text{MPa}}{200 \times 10^3 \, \text{MPa}} = \frac{20 - 30}{200000} = \frac{-10}{200000} = -0.5 \times 10^{-4}$

**(c)** $G = \frac{E}{2(1+\nu)} = \frac{200 \, \text{GPa}}{2(1+0.3)} = \frac{200}{2.6} \, \text{GPa} \approx 76.92 \, \text{GPa}$
$\gamma_{xy} = \frac{\tau_{xy}}{G} = \frac{40 \, \text{MPa}}{76.92 \times 10^3 \, \text{MPa}} \approx 5.2 \times 10^{-4}$

**(d)** $\epsilon_z = -\frac{\nu}{E} (\sigma_x + \sigma_y) = -\frac{0.3}{200 \times 10^3 \, \text{MPa}} (100 \, \text{MPa} + 20 \, \text{MPa}) = -\frac{0.3 \times 120}{200000} = -\frac{36}{200000} = -1.8 \times 10^{-4}$

**(e)** Original thickness $t_0 = 10 \, \text{mm}$.
Change in thickness $\Delta t = \epsilon_z \times t_0 = (-1.8 \times 10^{-4}) \times 10 \, \text{mm} = -0.0018 \, \text{mm}$
New thickness $t_f = t_0 + \Delta t = 10 \, \text{mm} - 0.0018 \, \text{mm} = 9.9982 \, \text{mm}$

---

**Question 2:**
For the stress state given in Question 1 ($\sigma_x = 100 \, \text{MPa}$, $\sigma_y = 20 \, \text{MPa}$, $\tau_{xy} = 40 \, \text{MPa}$), determine the principal stresses and the maximum shear stress using Mohr's Circle.

**Solution 2:**
Given: $\sigma_x = 100 \, \text{MPa}$, $\sigma_y = 20 \, \text{MPa}$, $\tau_{xy} = 40 \, \text{MPa}$.

1.  **Center of the circle:**
    $C = \frac{\sigma_x + \sigma_y}{2} = \frac{100 + 20}{2} = 60 \, \text{MPa}$

2.  **Radius of the circle:**
    $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \sqrt{\left(\frac{100 - 20}{2}\right)^2 + (40)^2}$
    $R = \sqrt{\left(\frac{80}{2}\right)^2 + 40^2} = \sqrt{40^2 + 40^2} = \sqrt{1600 + 1600} = \sqrt{3200}$
    $R = 40\sqrt{2} \, \text{MPa} \approx 56.57 \, \text{MPa}$

3.  **Principal Stresses:**
    $\sigma_1 = C + R = 60 + 40\sqrt{2} \approx 60 + 56.57 = 116.57 \, \text{MPa}$
    $\sigma_2 = C - R = 60 - 40\sqrt{2} \approx 60 - 56.57 = 3.43 \, \text{MPa}$

4.  **Maximum Shear Stress:**
    $\tau_{max} = R = 40\sqrt{2} \, \text{MPa} \approx 56.57 \, \text{MPa}$

---

**Question 3:**
Using the stress state from Question 1 and 2, determine the stress components ($\sigma_{x'}$ and $\tau_{x'y'}$) on a plane rotated by $\theta = 30^\circ$ counterclockwise from the $x$-axis.

**Solution 3:**
Given: $\sigma_x = 100 \, \text{MPa}$, $\sigma_y = 20 \, \text{MPa}$, $\tau_{xy} = 40 \, \text{MPa}$, $\theta = 30^\circ$.

Using the stress transformation equations:
$2\theta = 60^\circ$
$\cos(2\theta) = \cos(60^\circ) = 0.5$
$\sin(2\theta) = \sin(60^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$

$$ \sigma_{x'} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta) $$
$$ \sigma_{x'} = \frac{100 + 20}{2} + \frac{100 - 20}{2} (0.5) + 40 (0.866) $$
$$ \sigma_{x'} = 60 + \frac{80}{2} (0.5) + 40 (0.866) $$
$$ \sigma_{x'} = 60 + 40(0.5) + 34.64 = 60 + 20 + 34.64 = 114.64 \, \text{MPa} $$

$$ \tau_{x'y'} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta) $$
$$ \tau_{x'y'} = -\frac{100 - 20}{2} (0.866) + 40 (0.5) $$
$$ \tau_{x'y'} = -\frac{80}{2} (0.866) + 20 $$
$$ \tau_{x'y'} = -40 (0.866) + 20 = -34.64 + 20 = -14.64 \, \text{MPa} $$

The stress components on the plane rotated by $30^\circ$ are $\sigma_{x'} = 114.64 \, \text{MPa}$ and $\tau_{x'y'} = -14.64 \, \text{MPa}$. The negative sign for shear indicates it is clockwise.

---

### 7. Important Points to Remember

*   **Plane Stress Assumption:** Zero stress components perpendicular to a chosen plane ($\sigma_z = \tau_{yz} = \tau_{xz} = 0$). Valid for thin structures under in-plane loads.
*   **Equilibrium Equations:** $\frac{\partial \sigma_x}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} = 0$ and $\frac{\partial \sigma_y}{\partial y} + \frac{\partial \tau_{xy}}{\partial x} = 0$.
*   **Hooke's Law for Plane Stress:** $\epsilon_x = \frac{\sigma_x - \nu\sigma_y}{E}$, $\epsilon_y = \frac{\sigma_y - \nu\sigma_x}{E}$, $\gamma_{xy} = \frac{\tau_{xy}}{G}$.
*   **Strain Transformation:** Strains also transform with orientation, analogous to stress.
*   **Mohr's Circle:** A powerful graphical tool for stress (and strain) analysis.
    *   Center: $(\frac{\sigma_x + \sigma_y}{2}, 0)$.
    *   Radius: $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$.
    *   Principal Stresses: $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm R$. Occur where $\tau=0$.
    *   Maximum Shear Stress: $\tau_{max} = R$. Occurs on planes at $45^\circ$ to principal planes.
    *   Angle on circle ($2\theta$) is double the physical angle ($\theta$).

---
