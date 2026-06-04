---
title: "Analysis of strain"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f4"
status: "completed"
scrapedAt: "2026-05-20T18:42:32.118Z"
---
# ADVANCED SOLID MECHANICS

## Module 2: Analysis of Strain

### Topic: Analysis of Strain

This module delves into the concept of strain, which describes the deformation of a material under stress. We will explore how strain can be represented mathematically, how it changes with different coordinate systems, and its relationship to displacement.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Define and explain the concept of strain and its physical meaning.**
*   **Understand and apply the definitions of normal strain and shear strain.**
*   **Formulate strain components in cartesian and curvilinear coordinate systems.**
*   **Relate strain to displacement using the strain-displacement relations.**
*   **Analyze the transformation of strain components under coordinate system rotation.**
*   **Determine principal strains and principal directions.**
*   **Understand and apply the concept of strain invariants.**
*   **Analyze strain in two-dimensional (plane strain and plane stress) and three-dimensional states.**

---

### 1. Introduction to Strain

**Key Concepts:**

*   **Deformation:** Change in the shape or size of a body due to applied forces (stresses).
*   **Strain:** A dimensionless quantity that measures the extent of deformation. It quantifies the relative change in length or angle of a material element.
*   **Infinitesimal Strain:** The assumption that the deformations are small, allowing for linear approximations in the analysis. This is a fundamental assumption in most advanced solid mechanics analyses.

**Physical Meaning of Strain:**

*   **Normal Strain ($\epsilon$):** Measures the change in length of a line segment per unit of its original length. It indicates stretching or compression.
    *   Tensile strain: Positive, indicates elongation.
    *   Compressive strain: Negative, indicates shortening.
*   **Shear Strain ($\gamma$):** Measures the change in angle between two initially perpendicular line segments. It indicates distortion without a change in volume.

**Important Point:** Strain is a kinematic quantity; it describes the deformation itself, independent of the forces that caused it. However, it is often related to stress through constitutive laws (e.g., Hooke's Law).

---

### 2. Strain Components in Cartesian Coordinates

Consider a material element subjected to deformation. We define strain components based on the changes in length and angles of infinitesimally small line segments originating from a point.

Let the original coordinates of a point be $(x, y, z)$ and its deformed coordinates be $(x', y', z')$. The displacement vector is $\mathbf{u} = (u_x, u_y, u_z)$, where $u_x = x' - x$, $u_y = y' - y$, and $u_z = z' - z$.

For infinitesimal strains, the deformed coordinates can be expressed as:
$x' = x + u_x(x, y, z)$
$y' = y + u_y(x, y, z)$
$z' = z + u_z(x, y, z)$

Consider a line segment along the x-axis of length $dx$ starting at $(x, y, z)$. Its deformed length will be $dx'$.
$dx' = \frac{\partial x'}{\partial x} dx = \left(1 + \frac{\partial u_x}{\partial x}\right) dx$

The normal strain in the x-direction, $\epsilon_{xx}$, is the change in length divided by the original length:
$\epsilon_{xx} = \frac{dx' - dx}{dx} = \frac{\partial u_x}{\partial x}$

Similarly, we define normal strains in the y and z directions:
$\epsilon_{yy} = \frac{\partial u_y}{\partial y}$
$\epsilon_{zz} = \frac{\partial u_z}{\partial z}$

Now consider a line segment along the y-axis of length $dy$ starting at $(x, y, z)$. Its deformed position will be $(x + u_x, y + u_y, z + u_z)$.
The x-component of the displacement at $(x, y+dy, z)$ is $u_x(x, y+dy, z) \approx u_x(x,y,z) + \frac{\partial u_x}{\partial y} dy$.
The y-component of the displacement at $(x+dx, y, z)$ is $u_y(x+dx, y, z) \approx u_y(x,y,z) + \frac{\partial u_y}{\partial x} dx$.

The change in the angle between two initially perpendicular line segments along the x and y axes (which form a rectangle) gives us the shear strain.
The original angle is $90^\circ$. After deformation, the angle between the deformed line segments (originally along x and y axes) is $\frac{\pi}{2} - \gamma_{xy}$.
For small deformations, $\gamma_{xy} = \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x}$.

Similarly, we define shear strains in other planes:
$\gamma_{yz} = \frac{\partial u_y}{\partial z} + \frac{\partial u_z}{\partial y}$
$\gamma_{zx} = \frac{\partial u_z}{\partial x} + \frac{\partial u_x}{\partial z}$

**Strain Tensor ($\boldsymbol{\epsilon}$):**

The six independent strain components can be combined into a symmetric second-order tensor, called the strain tensor (or Cauchy strain tensor):

$$
\boldsymbol{\epsilon} = \begin{bmatrix}
\epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
\epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
\end{bmatrix}
$$

where $\epsilon_{xy} = \epsilon_{yx} = \frac{1}{2} \gamma_{xy}$, $\epsilon_{yz} = \epsilon_{zy} = \frac{1}{2} \gamma_{yz}$, and $\epsilon_{zx} = \epsilon_{xz} = \frac{1}{2} \gamma_{zx}$.
The normal strains are on the diagonal, and the shear strains (divided by 2) are off the diagonal.

**Strain-Displacement Relations (Cartesian):**

$$
\epsilon_{xx} = \frac{\partial u_x}{\partial x} \quad
\epsilon_{yy} = \frac{\partial u_y}{\partial y} \quad
\epsilon_{zz} = \frac{\partial u_z}{\partial z}
$$

$$
\epsilon_{xy} = \epsilon_{yx} = \frac{1}{2} \left( \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x} \right) \quad
\epsilon_{yz} = \epsilon_{zy} = \frac{1}{2} \left( \frac{\partial u_y}{\partial z} + \frac{\partial u_z}{\partial y} \right) \quad
\epsilon_{zx} = \epsilon_{xz} = \frac{1}{2} \left( \frac{\partial u_z}{\partial x} + \frac{\partial u_x}{\partial z} \right)
$$

**Example:**

Consider a small rectangular element with corners at $(0,0)$, $(dx,0)$, $(0,dy)$, and $(dx,dy)$.
Let the displacement field be given by:
$u_x(x, y) = ax$
$u_y(x, y) = by$
where $a$ and $b$ are small constants.

Calculate the strain components:
$\epsilon_{xx} = \frac{\partial u_x}{\partial x} = \frac{\partial (ax)}{\partial x} = a$
$\epsilon_{yy} = \frac{\partial u_y}{\partial y} = \frac{\partial (by)}{\partial y} = b$
$\epsilon_{xy} = \frac{1}{2} \left( \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x} \right) = \frac{1}{2} \left( \frac{\partial (ax)}{\partial y} + \frac{\partial (by)}{\partial x} \right) = \frac{1}{2} (0 + 0) = 0$

The strain tensor is:
$$
\boldsymbol{\epsilon} = \begin{bmatrix}
a & 0 \\
0 & b
\end{bmatrix}
$$
This represents stretching in the x-direction by a factor $a$ and in the y-direction by a factor $b$.

---

### 3. Strain Components in Curvilinear Coordinates

While Cartesian coordinates are convenient for many problems, curvilinear coordinates (e.g., cylindrical, spherical) are useful for bodies with complex geometries or when the deformation is naturally described in these systems.

Let the curvilinear coordinate system be defined by $q_1, q_2, q_3$. The position vector $\mathbf{r}$ is a function of these coordinates: $\mathbf{r} = \mathbf{r}(q_1, q_2, q_3)$.
The base vectors in this system are $\mathbf{a}_i = \frac{\partial \mathbf{r}}{\partial q_i}$.
The metric tensor components are $g_{ij} = \mathbf{a}_i \cdot \mathbf{a}_j$.

The strain components in curvilinear coordinates are more complex and involve the metric tensor. For a contravariant displacement vector $u^i$, the contravariant strain tensor $\epsilon^{ij}$ is given by:

$\epsilon^{ij} = \frac{1}{2} (u^i_{;j} + u^j_{;i} + u^k_{;i}u_k^{;j})$
where $u^i_{;j}$ denotes the covariant derivative of the contravariant displacement vector.

For infinitesimal strains, the last term is neglected, and the strain-displacement relations simplify:
$\epsilon^{ij} = \frac{1}{2} (u^i_{;j} + u^j_{;i})$

In component form, this can be expanded. For example, in cylindrical coordinates $(r, \theta, z)$:
*   Normal strains: $\epsilon_{rr}$, $\epsilon_{\theta\theta}$, $\epsilon_{zz}$
*   Shear strains: $\gamma_{r\theta}$, $\gamma_{\theta z}$, $\gamma_{zr}$

The expressions for these components involve derivatives with respect to $r$, $\theta$, and $z$ and are dependent on the metric coefficients of the cylindrical coordinate system. For example:

$\epsilon_{rr} = \frac{\partial u_r}{\partial r}$
$\epsilon_{\theta\theta} = \frac{1}{r} \frac{\partial u_\theta}{\partial \theta} + \frac{u_r}{r}$
$\epsilon_{zz} = \frac{\partial u_z}{\partial z}$

$\gamma_{r\theta} = r \frac{\partial}{\partial r} \left(\frac{u_\theta}{r}\right) + \frac{1}{r} \frac{\partial u_r}{\partial \theta} = \frac{\partial u_r}{\partial \theta} + r \frac{\partial}{\partial r} \left(\frac{u_\theta}{r}\right) = \frac{\partial u_r}{\partial \theta} + \frac{\partial u_\theta}{\partial r} - \frac{u_\theta}{r}$

**Note:** Deriving and working with strain in curvilinear coordinates is more involved and requires a good understanding of differential geometry. For most introductory advanced mechanics courses, the focus is on Cartesian coordinates and transformations.

---

### 4. Strain Transformation

In many engineering problems, the state of strain at a point is known in one coordinate system (e.g., the material's principal axes or a convenient Cartesian system), but we need to determine the strain components in a different, rotated coordinate system.

Let the original Cartesian coordinate system be $x, y, z$ with the strain tensor $\epsilon_{ij}$.
Let the new coordinate system be $x', y', z'$ obtained by a rotation.
The direction cosines between the new and old axes are given by the matrix $a_{ij}$, where $a_{ij}$ is the cosine of the angle between the $i'$-axis and the $j$-axis.

$$
a = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

The strain components in the new coordinate system, $\epsilon'_{kl}$, are related to the original strain components by the following transformation equations:

$\epsilon'_{kl} = a_{ki} a_{lj} \epsilon_{ij}$  (summation over $i$ and $j$ is implied)

This is the tensor transformation rule for a second-order tensor.

**For 2D Plane Strain/Stress:**

If we consider a 2D plane (say, $xy$ plane) and rotate the axes by an angle $\theta$ to $x'y'$ plane, the transformation equations for strain components are:

Let the original strains be $\epsilon_{xx}, \epsilon_{yy}, \gamma_{xy}$.
Let the normal strains in the rotated system be $\epsilon_{x'x'}$ and $\epsilon_{y'y'}$, and the shear strain be $\gamma_{x'y'}$.

The direction cosines are:
$a_{11} = \cos\theta$, $a_{12} = \sin\theta$
$a_{21} = -\sin\theta$, $a_{22} = \cos\theta$

Applying the transformation rule:
$\epsilon_{x'x'} = a_{1i} a_{1j} \epsilon_{ij} = a_{11} a_{11} \epsilon_{xx} + a_{11} a_{12} \epsilon_{xy} + a_{12} a_{11} \epsilon_{yx} + a_{12} a_{12} \epsilon_{yy}$
Since $\epsilon_{xy} = \epsilon_{yx}$:
$\epsilon_{x'x'} = (\cos\theta)^2 \epsilon_{xx} + 2 \cos\theta \sin\theta \epsilon_{xy} + (\sin\theta)^2 \epsilon_{yy}$
Using double angle identities:
$\epsilon_{x'x'} = \frac{1 + \cos(2\theta)}{2} \epsilon_{xx} + \sin(2\theta) \epsilon_{xy} + \frac{1 - \cos(2\theta)}{2} \epsilon_{yy}$
$\epsilon_{x'x'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} + \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos(2\theta) + \epsilon_{xy} \sin(2\theta)$

Similarly:
$\epsilon_{y'y'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} + \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos(2\theta - 180^\circ) + \epsilon_{xy} \sin(2\theta - 180^\circ)$
$\epsilon_{y'y'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} - \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos(2\theta) - \epsilon_{xy} \sin(2\theta)$

And for shear strain:
$\epsilon_{x'y'} = a_{1i} a_{2j} \epsilon_{ij} = a_{11} a_{21} \epsilon_{xx} + a_{11} a_{22} \epsilon_{xy} + a_{12} a_{21} \epsilon_{yx} + a_{12} a_{22} \epsilon_{yy}$
$\epsilon_{x'y'} = -\cos\theta \sin\theta \epsilon_{xx} + (\cos^2\theta - \sin^2\theta) \epsilon_{xy} + \sin\theta \cos\theta \epsilon_{yy}$
$\epsilon_{x'y'} = -\frac{1}{2} \sin(2\theta) \epsilon_{xx} + \cos(2\theta) \epsilon_{xy} + \frac{1}{2} \sin(2\theta) \epsilon_{yy}$
$\epsilon_{x'y'} = \frac{\epsilon_{yy} - \epsilon_{xx}}{2} \sin(2\theta) + \epsilon_{xy} \cos(2\theta)$

**Important Point:** These transformation equations are analogous to the stress transformation equations in 2D, often visualized using Mohr's Circle of Strain.

---

### 5. Principal Strains and Principal Directions

**Definition:**

*   **Principal Directions:** The directions in which the shear strain components are zero.
*   **Principal Strains:** The normal strain components acting along the principal directions. These are the maximum and minimum normal strains at a point.

For a 2D state of strain, the principal strains $\epsilon_1$ and $\epsilon_2$ (where $\epsilon_1 \ge \epsilon_2$) can be found by setting the shear strain in the transformed coordinate system to zero. This leads to the characteristic equation:

$(\epsilon_{xx} - \epsilon) (\epsilon_{yy} - \epsilon) - \epsilon_{xy}^2 = 0$

This is a quadratic equation in $\epsilon$:
$\epsilon^2 - (\epsilon_{xx} + \epsilon_{yy})\epsilon + (\epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2) = 0$

The roots of this equation are the principal strains:
$\epsilon_{1,2} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} \pm \sqrt{\left(\frac{\epsilon_{xx} - \epsilon_{yy}}{2}\right)^2 + \epsilon_{xy}^2}$

Let $\epsilon_{avg} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2}$ and $R = \sqrt{\left(\frac{\epsilon_{xx} - \epsilon_{yy}}{2}\right)^2 + \epsilon_{xy}^2}$.
Then $\epsilon_{1,2} = \epsilon_{avg} \pm R$.

The directions of the principal strains are given by the angle $\theta_p$:
$\tan(2\theta_p) = \frac{\epsilon_{xy}}{\frac{\epsilon_{xx} - \epsilon_{yy}}{2}}$

The principal strains are the normal strains when the shear strain is zero.

**Mohr's Circle of Strain:**

Similar to stress, a graphical representation called Mohr's Circle can be used to visualize strain transformations and determine principal strains.

*   **Center of the circle:** $(\epsilon_{avg}, 0) = \left(\frac{\epsilon_{xx} + \epsilon_{yy}}{2}, 0\right)$
*   **Radius of the circle:** $R = \sqrt{\left(\frac{\epsilon_{xx} - \epsilon_{yy}}{2}\right)^2 + \epsilon_{xy}^2}$
*   **Coordinates on the circle:** $(\epsilon_{x'x'}, \epsilon_{x'y'})$ for a rotated system.

**Key Properties:**

*   The horizontal coordinate of points on the circle represents the normal strain.
*   The vertical coordinate represents the shear strain.
*   The points where the circle intersects the horizontal axis represent the principal strains ($\epsilon_1, \epsilon_2$).
*   The angle on the circle from the reference point $(\epsilon_{xx}, \epsilon_{xy})$ to the point $(\epsilon_1, 0)$ is $2\theta_p$.

**3D Principal Strains:**

In three dimensions, the principal strains $\epsilon_1, \epsilon_2, \epsilon_3$ are the eigenvalues of the strain tensor. They are found by solving the characteristic equation:
$\det(\boldsymbol{\epsilon} - \epsilon \mathbf{I}) = 0$

This results in a cubic equation for $\epsilon$. The directions corresponding to these principal strains are orthogonal.

---

### 6. Strain Invariants

Strain invariants are quantities calculated from the strain components that remain constant regardless of the chosen coordinate system. They are fundamental properties of the strain state.

For a 3D strain tensor, there are three independent strain invariants:

*   **First Invariant ($I_1$):** The sum of the diagonal elements (trace of the strain tensor).
    $I_1 = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = \text{tr}(\boldsymbol{\epsilon})$
    This is related to the volumetric strain: $\Delta V / V = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = \epsilon_1 + \epsilon_2 + \epsilon_3$.

*   **Second Invariant ($I_2$):** The sum of the principal minors of the strain tensor.
    $I_2 = \begin{vmatrix} \epsilon_{yy} & \epsilon_{yz} \\ \epsilon_{zy} & \epsilon_{zz} \end{vmatrix} + \begin{vmatrix} \epsilon_{xx} & \epsilon_{xz} \\ \epsilon_{zx} & \epsilon_{zz} \end{vmatrix} + \begin{vmatrix} \epsilon_{xx} & \epsilon_{xy} \\ \epsilon_{yx} & \epsilon_{yy} \end{vmatrix}$
    $I_2 = (\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2) + (\epsilon_{xx}\epsilon_{zz} - \epsilon_{xz}^2) + (\epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2)$
    In terms of principal strains: $I_2 = \epsilon_1\epsilon_2 + \epsilon_2\epsilon_3 + \epsilon_3\epsilon_1$

*   **Third Invariant ($I_3$):** The determinant of the strain tensor.
    $I_3 = \det(\boldsymbol{\epsilon})$
    In terms of principal strains: $I_3 = \epsilon_1\epsilon_2\epsilon_3$

**Characteristic Equation in terms of Invariants:**

The characteristic equation for finding principal strains can be written as:
$\det(\boldsymbol{\epsilon} - \epsilon \mathbf{I}) = -\epsilon^3 + I_1 \epsilon^2 - I_2 \epsilon + I_3 = 0$

**2D Strain Invariants:**

For a 2D state of strain, there are two independent invariants:
$I_1 = \epsilon_{xx} + \epsilon_{yy}$
$I_2 = \epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2$

The characteristic equation for principal strains in 2D is:
$\epsilon^2 - I_1 \epsilon + I_2 = 0$

**Important Point:** Invariants are crucial for developing objective constitutive models that are independent of the observer's coordinate system.

---

### 7. Plane Strain and Plane Stress

These are simplifying assumptions used for analyzing 2D bodies or bodies with specific geometries where certain strain or stress components are negligible.

**Plane Strain:**

*   **Assumption:** The strain component in the direction perpendicular to the plane of interest is zero, and the strains in that direction are also zero.
    *   $\epsilon_{zz} = 0$
    *   $\gamma_{xz} = 0$
    *   $\gamma_{yz} = 0$
*   **Implication:** The deformation is confined to a plane (e.g., the $xy$-plane). This is common for long bodies with uniform cross-sections and loads applied perpendicular to the long axis, such as dams, retaining walls, or pipes under internal pressure.
*   **Strain Tensor:**
    $$
    \boldsymbol{\epsilon} = \begin{bmatrix}
    \epsilon_{xx} & \epsilon_{xy} & 0 \\
    \epsilon_{yx} & \epsilon_{yy} & 0 \\
    0 & 0 & 0
    \end{bmatrix}
    $$
*   **Relation to Stress:** If the material is linear elastic and isotropic, and plane strain conditions apply, the stress components are:
    $\sigma_{zz} = \nu (\sigma_{xx} + \sigma_{yy})$
    $\sigma_{xz} = \sigma_{yz} = 0$
    $\sigma_{xx} = \frac{E(1-\nu)}{(1+\nu)(1-2\nu)} (\epsilon_{xx} + \frac{\nu}{1-\nu} \epsilon_{yy})$
    $\sigma_{yy} = \frac{E(1-\nu)}{(1+\nu)(1-2\nu)} (\epsilon_{yy} + \frac{\nu}{1-\nu} \epsilon_{xx})$
    $\sigma_{xy} = G \gamma_{xy} = \frac{E}{2(1+\nu)} \gamma_{xy}$
    The effective Young's modulus for plane strain is $E' = \frac{E(1-\nu)}{(1+\nu)(1-2\nu)}$.

**Plane Stress:**

*   **Assumption:** The stress components in the direction perpendicular to the plane of interest are zero.
    *   $\sigma_{zz} = 0$
    *   $\sigma_{xz} = 0$
    *   $\sigma_{yz} = 0$
*   **Implication:** This is common for thin plates or shells subjected to loads in their plane. The strains in the $z$-direction are not necessarily zero but are related to the in-plane stresses.
*   **Strain Tensor:**
    $$
    \boldsymbol{\epsilon} = \begin{bmatrix}
    \epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
    \epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
    \epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
    \end{bmatrix}
    $$
*   **Relation to Stress:** For a linear elastic, isotropic material under plane stress:
    $\epsilon_{xx} = \frac{1}{E}(\sigma_{xx} - \nu \sigma_{yy})$
    $\epsilon_{yy} = \frac{1}{E}(\sigma_{yy} - \nu \sigma_{xx})$
    $\epsilon_{xy} = \frac{1}{G} \sigma_{xy} = \frac{1+\nu}{E} \sigma_{xy}$
    The strain in the z-direction is: $\epsilon_{zz} = -\frac{\nu}{E}(\sigma_{xx} + \sigma_{yy})$

**Example:**

Consider a thin rectangular plate subjected to uniform tensile stress $\sigma_x$ in the x-direction.
Under plane stress:
$\sigma_{xx} = \sigma_x$, $\sigma_{yy} = 0$, $\sigma_{zz} = 0$.
$\epsilon_{xx} = \frac{\sigma_x}{E}$
$\epsilon_{yy} = -\nu \frac{\sigma_x}{E} = -\nu \epsilon_{xx}$
$\epsilon_{xy} = 0$
$\epsilon_{zz} = -\nu \frac{\sigma_x}{E}$

This shows that a tensile stress in one direction causes contraction in the perpendicular directions (Poisson's effect).

---

### 8. Practice Questions and Exercises

**Question 1:**

A displacement field is given by $u_x = 2x^2y$, $u_y = -xy^2$, $u_z = 0$.
Calculate the strain components $\epsilon_{xx}, \epsilon_{yy}, \epsilon_{zz}, \epsilon_{xy}, \epsilon_{yz}, \epsilon_{zx}$ at the point $(1, 2, 0)$.

**Answer 1:**

First, find the partial derivatives of the displacement components:
$\frac{\partial u_x}{\partial x} = 4xy$
$\frac{\partial u_x}{\partial y} = 2x^2$
$\frac{\partial u_y}{\partial x} = -y^2$
$\frac{\partial u_y}{\partial y} = -2xy$
$\frac{\partial u_z}{\partial x} = 0$, $\frac{\partial u_z}{\partial y} = 0$, $\frac{\partial u_z}{\partial z} = 0$

Now, calculate the strain components at $(x,y,z) = (1,2,0)$:
$\epsilon_{xx} = \frac{\partial u_x}{\partial x} = 4(1)(2) = 8$
$\epsilon_{yy} = \frac{\partial u_y}{\partial y} = -2(1)(2) = -4$
$\epsilon_{zz} = \frac{\partial u_z}{\partial z} = 0$
$\epsilon_{xy} = \frac{1}{2} \left( \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x} \right) = \frac{1}{2} (2(1)^2 + -(2)^2) = \frac{1}{2} (2 - 4) = -1$
$\epsilon_{yz} = \frac{1}{2} \left( \frac{\partial u_y}{\partial z} + \frac{\partial u_z}{\partial y} \right) = \frac{1}{2} (0 + 0) = 0$
$\epsilon_{zx} = \frac{1}{2} \left( \frac{\partial u_z}{\partial x} + \frac{\partial u_x}{\partial z} \right) = \frac{1}{2} (0 + 0) = 0$

The strain tensor is:
$$
\boldsymbol{\epsilon} = \begin{bmatrix}
8 & -1 & 0 \\
-1 & -4 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

**Question 2:**

At a point in a 2D body, the strain components are $\epsilon_{xx} = 0.002$, $\epsilon_{yy} = 0.004$, $\epsilon_{xy} = 0.001$.
Determine the principal strains and the orientation of the principal directions.

**Answer 2:**

We use the formulas for 2D principal strains:
$\epsilon_{avg} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} = \frac{0.002 + 0.004}{2} = 0.003$
$R = \sqrt{\left(\frac{\epsilon_{xx} - \epsilon_{yy}}{2}\right)^2 + \epsilon_{xy}^2} = \sqrt{\left(\frac{0.002 - 0.004}{2}\right)^2 + (0.001)^2}$
$R = \sqrt{(-0.001)^2 + (0.001)^2} = \sqrt{0.000001 + 0.000001} = \sqrt{0.000002} \approx 0.001414$

Principal strains:
$\epsilon_1 = \epsilon_{avg} + R = 0.003 + 0.001414 = 0.004414$
$\epsilon_2 = \epsilon_{avg} - R = 0.003 - 0.001414 = 0.001586$

Orientation of principal directions:
$\tan(2\theta_p) = \frac{\epsilon_{xy}}{\frac{\epsilon_{xx} - \epsilon_{yy}}{2}} = \frac{0.001}{\frac{0.002 - 0.004}{2}} = \frac{0.001}{-0.001} = -1$

$2\theta_p = \arctan(-1) = -45^\circ$ or $135^\circ$
$\theta_p = -22.5^\circ$ or $67.5^\circ$

To determine which angle corresponds to $\epsilon_1$:
If $\theta_p = -22.5^\circ$ (rotation from x-axis to the first principal axis), then the strain in the rotated x'-axis should be $\epsilon_1$.
$\epsilon_{x'x'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} + \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos(2\theta_p) + \epsilon_{xy} \sin(2\theta_p)$
$\epsilon_{x'x'} = 0.003 + \frac{0.002 - 0.004}{2} \cos(-45^\circ) + 0.001 \sin(-45^\circ)$
$\epsilon_{x'x'} = 0.003 + (-0.001) (\frac{\sqrt{2}}{2}) + 0.001 (-\frac{\sqrt{2}}{2})$
$\epsilon_{x'x'} = 0.003 - 0.000707 - 0.000707 = 0.003 - 0.001414 = 0.001586$ (This is $\epsilon_2$)

Therefore, the principal direction $\epsilon_1$ is at $\theta_p = 67.5^\circ$ from the original x-axis.
Principal strains: $\epsilon_1 \approx 0.004414$, $\epsilon_2 \approx 0.001586$.
Principal directions: The directions of maximum and minimum normal strain are at angles of $67.5^\circ$ and $-22.5^\circ$ (or $157.5^\circ$) with respect to the original x-axis.

**Question 3:**

A thin plate is subjected to plane stress conditions. The strain in the x-direction is $\epsilon_x = 200 \mu\epsilon$ (microstrain), and there is no strain in the y-direction, $\epsilon_y = 0$. The material is steel with $E = 200 \text{ GPa}$ and $\nu = 0.3$.
What are the stresses $\sigma_x$ and $\sigma_y$?

**Answer 3:**

For plane stress:
$\epsilon_{xx} = \frac{1}{E}(\sigma_{xx} - \nu \sigma_{yy})$
$\epsilon_{yy} = \frac{1}{E}(\sigma_{yy} - \nu \sigma_{xx})$

Given: $\epsilon_{xx} = 200 \times 10^{-6}$, $\epsilon_{yy} = 0$.
$E = 200 \times 10^9 \text{ Pa}$, $\nu = 0.3$.

Substitute the values:
$200 \times 10^{-6} = \frac{1}{200 \times 10^9} (\sigma_{xx} - 0.3 \sigma_{yy})$
$0 = \frac{1}{200 \times 10^9} (\sigma_{yy} - 0.3 \sigma_{xx})$

From the second equation:
$\sigma_{yy} - 0.3 \sigma_{xx} = 0 \implies \sigma_{yy} = 0.3 \sigma_{xx}$

Substitute this into the first equation:
$200 \times 10^{-6} = \frac{1}{200 \times 10^9} (\sigma_{xx} - 0.3 (0.3 \sigma_{xx}))$
$200 \times 10^{-6} = \frac{1}{200 \times 10^9} (\sigma_{xx} - 0.09 \sigma_{xx})$
$200 \times 10^{-6} = \frac{0.91 \sigma_{xx}}{200 \times 10^9}$
$\sigma_{xx} = \frac{200 \times 10^{-6} \times 200 \times 10^9}{0.91} = \frac{40 \times 10^6}{0.91} \approx 43.96 \times 10^6 \text{ Pa} = 43.96 \text{ MPa}$

Now, find $\sigma_{yy}$:
$\sigma_{yy} = 0.3 \sigma_{xx} = 0.3 \times 43.96 \text{ MPa} \approx 13.19 \text{ MPa}$

So, $\sigma_x \approx 43.96 \text{ MPa}$ and $\sigma_y \approx 13.19 \text{ MPa}$.

---

### Important Points to Remember:

*   **Strain is a measure of relative deformation.** Normal strain is relative change in length, shear strain is relative change in angle.
*   **Infinitesimal strain theory** is a fundamental assumption simplifying strain calculations.
*   The **strain tensor** provides a complete description of the strain state at a point, with 6 independent components.
*   **Strain-displacement relations** connect strain components to the derivatives of the displacement field.
*   **Strain transformation equations** allow calculating strain components in a rotated coordinate system.
*   **Principal strains** are the maximum and minimum normal strains, occurring in directions with zero shear strain.
*   **Mohr's Circle of Strain** is a powerful graphical tool for strain analysis and transformation.
*   **Strain invariants** are coordinate-independent measures of strain.
*   **Plane strain** assumes zero strain perpendicular to the plane of interest, while **plane stress** assumes zero stress perpendicular to the plane. These are common simplifications.
*   Understanding the difference between plane strain and plane stress is crucial for applying the correct strain-stress relationships.

---
