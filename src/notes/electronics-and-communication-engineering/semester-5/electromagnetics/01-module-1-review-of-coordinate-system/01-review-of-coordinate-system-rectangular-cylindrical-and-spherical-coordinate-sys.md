---
title: "Review of coordinate system-Rectangular, cylindrical and spherical coordinate systems."
subject: "ELECTROMAGNETICS"
module: "Module 1: Review of coordinate system"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8c9"
status: "completed"
scrapedAt: "2026-05-23T17:56:24.733Z"
---
# ELECTROMAGNETICS: Module 1 - Review of Coordinate Systems

## 1. Introduction to Coordinate Systems in Electromagnetics

Electromagnetic phenomena are often described and analyzed using mathematical models that involve vectors and fields. To effectively represent and manipulate these vectors and fields, we need appropriate coordinate systems. This module provides a fundamental review of the three most commonly used coordinate systems in electromagnetics: rectangular, cylindrical, and spherical. Understanding these systems is crucial for applying Maxwell's equations and analyzing electromagnetic wave propagation.

**Course Outcome Alignment:** This review directly supports **CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields.** (Knowledge Level: K2) by establishing the foundational language for describing vector quantities in space.

**Textbook References:**
*   Sadiku, M. N. O. (2018). *Elements of Electromagnetics* (7th ed.). Oxford University Press. (Chapter 1)
*   Hayt, W. H., & Buck, J. A. (2019). *Engineering Electromagnetics* (9th ed.). McGraw-Hill Higher Education. (Chapter 1)
*   Reddy, Y. M. (2015). *Electromagnetic Waves and Transmission Lines* (1st ed.). The Orient Blackswan. (Chapter 1)

---

## 2. Rectangular Coordinate System (Cartesian Coordinate System)

The rectangular coordinate system is the most intuitive and widely used coordinate system. It is based on three mutually perpendicular axes, typically labeled x, y, and z.

### 2.1. Definition and Representation

*   **Point Representation:** A point P in space is uniquely identified by three scalar values (x, y, z), representing its orthogonal distances from the yz-plane, xz-plane, and xy-plane, respectively.
*   **Basis Vectors:** The system is defined by three mutually orthogonal unit vectors:
    *   $\hat{\mathbf{a}}_x$: Unit vector in the positive x-direction.
    *   $\hat{\mathbf{a}}_y$: Unit vector in the positive y-direction.
    *   $\hat{\mathbf{a}}_z$: Unit vector in the positive z-direction.
*   **Vector Representation:** A vector $\mathbf{A}$ at point P is represented as:
    $\mathbf{A} = A_x \hat{\mathbf{a}}_x + A_y \hat{\mathbf{a}}_y + A_z \hat{\mathbf{a}}_z$
    where $A_x$, $A_y$, and $A_z$ are the scalar components of the vector along the respective axes.
*   **Differential Displacement:** The infinitesimal displacement vector $d\mathbf{l}$ in rectangular coordinates is:
    $d\mathbf{l} = dx \hat{\mathbf{a}}_x + dy \hat{\mathbf{a}}_y + dz \hat{\mathbf{a}}_z$
*   **Differential Volume:** The infinitesimal volume element $dV$ is:
    $dV = dx \, dy \, dz$

### 2.2. Operations in Rectangular Coordinates

*   **Dot Product:** $\mathbf{A} \cdot \mathbf{B} = A_x B_x + A_y B_y + A_z B_z$
*   **Cross Product:**
    $\mathbf{A} \times \mathbf{B} = \begin{vmatrix} \hat{\mathbf{a}}_x & \hat{\mathbf{a}}_y & \hat{\mathbf{a}}_z \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} = (A_y B_z - A_z B_y) \hat{\mathbf{a}}_x + (A_z B_x - A_x B_z) \hat{\mathbf{a}}_y + (A_x B_y - A_y B_x) \hat{\mathbf{a}}_z$
*   **Gradient:** $\nabla V = \frac{\partial V}{\partial x} \hat{\mathbf{a}}_x + \frac{\partial V}{\partial y} \hat{\mathbf{a}}_y + \frac{\partial V}{\partial z} \hat{\mathbf{a}}_z$
*   **Divergence:** $\nabla \cdot \mathbf{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}$
*   **Curl:** $\nabla \times \mathbf{A} = \left( \frac{\partial A_z}{\partial y} - \frac{\partial A_y}{\partial z} \right) \hat{\mathbf{a}}_x + \left( \frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x} \right) \hat{\mathbf{a}}_y + \left( \frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y} \right) \hat{\mathbf{a}}_z$
*   **Laplacian:** $\nabla^2 V = \nabla \cdot (\nabla V) = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2}$

**Important Point:** The basis vectors in rectangular coordinates are constant throughout space, meaning they do not change direction or magnitude from point to point. This simplifies many vector operations.

**Example:** Find the vector from point $P_1(1, 2, 3)$ to point $P_2(4, 0, -1)$.
Let $\mathbf{r}_1 = 1\hat{\mathbf{a}}_x + 2\hat{\mathbf{a}}_y + 3\hat{\mathbf{a}}_z$ and $\mathbf{r}_2 = 4\hat{\mathbf{a}}_x + 0\hat{\mathbf{a}}_y - 1\hat{\mathbf{a}}_z$.
The vector from $P_1$ to $P_2$ is $\mathbf{R}_{12} = \mathbf{r}_2 - \mathbf{r}_1 = (4-1)\hat{\mathbf{a}}_x + (0-2)\hat{\mathbf{a}}_y + (-1-3)\hat{\mathbf{a}}_z = 3\hat{\mathbf{a}}_x - 2\hat{\mathbf{a}}_y - 4\hat{\mathbf{a}}_z$.

---

## 3. Cylindrical Coordinate System

The cylindrical coordinate system is useful for problems with cylindrical symmetry, such as charged cylinders or current-carrying wires. It is related to the rectangular system through a transformation.

### 3.1. Definition and Representation

*   **Point Representation:** A point P is represented by $(\rho, \phi, z)$, where:
    *   $\rho$ (rho): The radial distance from the z-axis to the point P. ($\rho \ge 0$)
    *   $\phi$ (phi): The azimuthal angle, measured from the positive x-axis to the projection of the point onto the xy-plane. ($0 \le \phi < 2\pi$ or $-\pi < \phi \le \pi$)
    *   $z$: The same z-coordinate as in the rectangular system.
*   **Basis Vectors:** The system is defined by three mutually orthogonal unit vectors:
    *   $\hat{\mathbf{a}}_\rho$: Unit vector in the direction of increasing $\rho$.
    *   $\hat{\mathbf{a}}_\phi$: Unit vector in the direction of increasing $\phi$.
    *   $\hat{\mathbf{a}}_z$: Unit vector in the direction of increasing z (same as $\hat{\mathbf{a}}_z$ in rectangular coordinates).
*   **Vector Representation:** A vector $\mathbf{A}$ at point $(\rho, \phi, z)$ is represented as:
    $\mathbf{A} = A_\rho \hat{\mathbf{a}}_\rho + A_\phi \hat{\mathbf{a}}_\phi + A_z \hat{\mathbf{a}}_z$
*   **Differential Displacement:**
    $d\mathbf{l} = d\rho \, \hat{\mathbf{a}}_\rho + \rho \, d\phi \, \hat{\mathbf{a}}_\phi + dz \, \hat{\mathbf{a}}_z$
    Note the $\rho$ factor in the $d\phi$ component, accounting for the arc length.
*   **Differential Volume:**
    $dV = \rho \, d\rho \, d\phi \, dz$

### 3.2. Transformations between Rectangular and Cylindrical Coordinates

Given a point P with coordinates (x, y, z) in rectangular and $(\rho, \phi, z)$ in cylindrical:

*   **Cylindrical to Rectangular:**
    $x = \rho \cos \phi$
    $y = \rho \sin \phi$
    $z = z$

*   **Rectangular to Cylindrical:**
    $\rho = \sqrt{x^2 + y^2}$
    $\phi = \operatorname{atan2}(y, x)$ (This function correctly handles quadrants)
    $z = z$

**Important Point:** The basis vectors $\hat{\mathbf{a}}_\rho$ and $\hat{\mathbf{a}}_\phi$ are **not** constant throughout space. Their direction changes with $\phi$.
*   $\hat{\mathbf{a}}_\rho = \cos \phi \, \hat{\mathbf{a}}_x + \sin \phi \, \hat{\mathbf{a}}_y$
*   $\hat{\mathbf{a}}_\phi = -\sin \phi \, \hat{\mathbf{a}}_x + \cos \phi \, \hat{\mathbf{a}}_y$
*   $\hat{\mathbf{a}}_z = \hat{\mathbf{a}}_z$

**Example:** Convert the rectangular point (3, 4, 5) to cylindrical coordinates.
$\rho = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
$\phi = \operatorname{atan2}(4, 3) \approx 0.927 \text{ radians}$ (or 53.13 degrees)
$z = 5$
So, the cylindrical coordinates are $(5, 0.927, 5)$.

**Example:** Convert the cylindrical vector $A = 2\hat{\mathbf{a}}_\rho + 3\hat{\mathbf{a}}_\phi + 4\hat{\mathbf{a}}_z$ at $\phi = \pi/4$ to rectangular components.
At $\phi = \pi/4$:
$\hat{\mathbf{a}}_\rho = \cos(\pi/4)\hat{\mathbf{a}}_x + \sin(\pi/4)\hat{\mathbf{a}}_y = \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_x + \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_y$
$\hat{\mathbf{a}}_\phi = -\sin(\pi/4)\hat{\mathbf{a}}_x + \cos(\pi/4)\hat{\mathbf{a}}_y = -\frac{1}{\sqrt{2}}\hat{\mathbf{a}}_x + \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_y$
$\mathbf{A} = 2 \left( \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_x + \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_y \right) + 3 \left( -\frac{1}{\sqrt{2}}\hat{\mathbf{a}}_x + \frac{1}{\sqrt{2}}\hat{\mathbf{a}}_y \right) + 4\hat{\mathbf{a}}_z$
$\mathbf{A} = \left( \frac{2}{\sqrt{2}} - \frac{3}{\sqrt{2}} \right) \hat{\mathbf{a}}_x + \left( \frac{2}{\sqrt{2}} + \frac{3}{\sqrt{2}} \right) \hat{\mathbf{a}}_y + 4\hat{\mathbf{a}}_z$
$\mathbf{A} = -\frac{1}{\sqrt{2}}\hat{\mathbf{a}}_x + \frac{5}{\sqrt{2}}\hat{\mathbf{a}}_y + 4\hat{\mathbf{a}}_z$

**Reference:** Schaum's Outline of Electromagnetics by Nahvi & Edminister provides extensive examples of conversions between coordinate systems.

---

## 4. Spherical Coordinate System

The spherical coordinate system is ideal for problems with spherical symmetry, such as point charges or antennas radiating uniformly in all directions.

### 4.1. Definition and Representation

*   **Point Representation:** A point P is represented by $(r, \theta, \phi)$, where:
    *   $r$: The radial distance from the origin to the point P. ($r \ge 0$)
    *   $\theta$ (theta): The polar angle (or zenith angle), measured from the positive z-axis. ($0 \le \theta \le \pi$)
    *   $\phi$ (phi): The azimuthal angle, measured from the positive x-axis to the projection of the point onto the xy-plane. ($0 \le \phi < 2\pi$ or $-\pi < \phi \le \pi$)
*   **Basis Vectors:** The system is defined by three mutually orthogonal unit vectors:
    *   $\hat{\mathbf{a}}_r$: Unit vector in the direction of increasing $r$.
    *   $\hat{\mathbf{a}}_\theta$: Unit vector in the direction of increasing $\theta$.
    *   $\hat{\mathbf{a}}_\phi$: Unit vector in the direction of increasing $\phi$. (Same as $\hat{\mathbf{a}}_\phi$ in cylindrical coordinates)
*   **Vector Representation:** A vector $\mathbf{A}$ at point $(r, \theta, \phi)$ is represented as:
    $\mathbf{A} = A_r \hat{\mathbf{a}}_r + A_\theta \hat{\mathbf{a}}_\theta + A_\phi \hat{\mathbf{a}}_\phi$
*   **Differential Displacement:**
    $d\mathbf{l} = dr \, \hat{\mathbf{a}}_r + r \, d\theta \, \hat{\mathbf{a}}_\theta + r \sin \theta \, d\phi \, \hat{\mathbf{a}}_\phi$
    Note the $r$ and $r \sin \theta$ factors for the arc lengths.
*   **Differential Volume:**
    $dV = r^2 \sin \theta \, dr \, d\theta \, d\phi$

### 4.2. Transformations between Rectangular and Spherical Coordinates

Given a point P with coordinates (x, y, z) in rectangular and $(r, \theta, \phi)$ in spherical:

*   **Spherical to Rectangular:**
    $x = r \sin \theta \cos \phi$
    $y = r \sin \theta \sin \phi$
    $z = r \cos \theta$

*   **Rectangular to Spherical:**
    $r = \sqrt{x^2 + y^2 + z^2}$
    $\theta = \operatorname{acos}\left(\frac{z}{r}\right)$ (or $\operatorname{acos}\left(\frac{z}{\sqrt{x^2+y^2+z^2}}\right)$)
    $\phi = \operatorname{atan2}(y, x)$ (Same as in cylindrical)

**Important Point:** The basis vectors $\hat{\mathbf{a}}_r$, $\hat{\mathbf{a}}_\theta$, and $\hat{\mathbf{a}}_\phi$ are **not** constant throughout space. Their directions change with position.
*   $\hat{\mathbf{a}}_r = \sin \theta \cos \phi \, \hat{\mathbf{a}}_x + \sin \theta \sin \phi \, \hat{\mathbf{a}}_y + \cos \theta \, \hat{\mathbf{a}}_z$
*   $\hat{\mathbf{a}}_\theta = \cos \theta \cos \phi \, \hat{\mathbf{a}}_x + \cos \theta \sin \phi \, \hat{\mathbf{a}}_y - \sin \theta \, \hat{\mathbf{a}}_z$
*   $\hat{\mathbf{a}}_\phi = -\sin \phi \, \hat{\mathbf{a}}_x + \cos \phi \, \hat{\mathbf{a}}_y$ (Same as in cylindrical)

**Example:** Convert the rectangular point (1, 1, 1) to spherical coordinates.
$r = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3} \approx 1.732$
$\theta = \operatorname{acos}\left(\frac{1}{\sqrt{3}}\right) \approx 0.955 \text{ radians}$ (or 54.74 degrees)
$\phi = \operatorname{atan2}(1, 1) = \pi/4 \approx 0.785 \text{ radians}$ (or 45 degrees)
So, the spherical coordinates are $(\sqrt{3}, 0.955, \pi/4)$.

**Example:** Convert the spherical vector $A = 1\hat{\mathbf{a}}_r + 2\hat{\mathbf{a}}_\theta + 3\hat{\mathbf{a}}_\phi$ at $\theta = \pi/2$, $\phi = 0$ to rectangular components.
At $\theta = \pi/2$, $\phi = 0$:
$\hat{\mathbf{a}}_r = \sin(\pi/2)\cos(0)\hat{\mathbf{a}}_x + \sin(\pi/2)\sin(0)\hat{\mathbf{a}}_y + \cos(\pi/2)\hat{\mathbf{a}}_z = 1\hat{\mathbf{a}}_x + 0\hat{\mathbf{a}}_y + 0\hat{\mathbf{a}}_z = \hat{\mathbf{a}}_x$
$\hat{\mathbf{a}}_\theta = \cos(\pi/2)\cos(0)\hat{\mathbf{a}}_x + \cos(\pi/2)\sin(0)\hat{\mathbf{a}}_y - \sin(\pi/2)\hat{\mathbf{a}}_z = 0\hat{\mathbf{a}}_x + 0\hat{\mathbf{a}}_y - 1\hat{\mathbf{a}}_z = -\hat{\mathbf{a}}_z$
$\hat{\{\mathbf{a}}_\phi = -\sin(0)\hat{\mathbf{a}}_x + \cos(0)\hat{\mathbf{a}}_y = 0\hat{\mathbf{a}}_x + 1\hat{\mathbf{a}}_y = \hat{\mathbf{a}}_y$

$\mathbf{A} = 1(\hat{\mathbf{a}}_x) + 2(-\hat{\mathbf{a}}_z) + 3(\hat{\mathbf{a}}_y)$
$\mathbf{A} = 1\hat{\mathbf{a}}_x + 3\hat{\mathbf{a}}_y - 2\hat{\mathbf{a}}_z$

**Reference:** Hayt & Buck (2019) provides a comprehensive treatment of spherical coordinates and their applications.

---

## 5. Comparison of Coordinate Systems

| Feature             | Rectangular (Cartesian)      | Cylindrical                  | Spherical                      |
| :------------------ | :--------------------------- | :--------------------------- | :----------------------------- |
| **Coordinates**     | $(x, y, z)$                  | $(\rho, \phi, z)$            | $(r, \theta, \phi)$            |
| **Symmetry**        | None (General)               | Cylindrical                  | Spherical                      |
| **Basis Vectors**   | $\hat{\mathbf{a}}_x, \hat{\mathbf{a}}_y, \hat{\mathbf{a}}_z$ | $\hat{\mathbf{a}}_\rho, \hat{\mathbf{a}}_\phi, \hat{\mathbf{a}}_z$ | $\hat{\mathbf{a}}_r, \hat{\mathbf{a}}_\theta, \hat{\mathbf{a}}_\phi$ |
| **Basis Vector Behavior** | Constant                     | $\hat{\mathbf{a}}_\rho, \hat{\mathbf{a}}_\phi$ vary with $\phi$ | $\hat{\mathbf{a}}_r, \hat{\mathbf{a}}_\theta, \hat{\mathbf{a}}_\phi$ vary with position |
| **Differential Area (Surface)** | $dx\,dy$, $dy\,dz$, $dz\,dx$ | $\rho\,d\phi\,dz$, $d\rho\,dz$, $\rho\,d\rho\,d\phi$ | $r\,d\theta\,d\phi$, $r^2\sin\theta\,d\theta\,d\phi$, $r\,dr\,d\phi$ |
| **Differential Volume** | $dx\,dy\,dz$                 | $\rho\,d\rho\,d\phi\,dz$     | $r^2\sin\theta\,dr\,d\theta\,d\phi$ |

**Important Point:** The choice of coordinate system significantly simplifies the formulation and solution of electromagnetic problems. Always select the system that best matches the geometrical symmetry of the problem.

---

## 6. Practice Questions and Exercises

**Question 1:**
(CO1, K2)
Convert the point $(x, y, z) = (3, 4, -5)$ from rectangular to cylindrical coordinates.
*(Answer: $\rho=5, \phi=\operatorname{atan2}(4,3) \approx 0.927 \text{ rad}, z=-5$)*

**Question 2:**
(CO1, K2)
Convert the point $(\rho, \phi, z) = (2, \pi/6, 4)$ from cylindrical to spherical coordinates.
*(Answer: $r=\sqrt{2^2+4^2} = \sqrt{20} \approx 4.472, \theta=\operatorname{acos}(4/\sqrt{20}) \approx 0.464 \text{ rad}, \phi=\pi/6$)*

**Question 3:**
(CO1, K2)
Convert the point $(r, \theta, \phi) = (5, \pi/3, \pi/4)$ from spherical to rectangular coordinates.
*(Answer: $x = 5\sin(\pi/3)\cos(\pi/4) = 5(\sqrt{3}/2)(1/\sqrt{2}) = 5\sqrt{3}/(2\sqrt{2}) = 5\sqrt{6}/4 \approx 3.06,$
$y = 5\sin(\pi/3)\sin(\pi/4) = 5(\sqrt{3}/2)(1/\sqrt{2}) = 5\sqrt{3}/(2\sqrt{2}) = 5\sqrt{6}/4 \approx 3.06,$
$z = 5\cos(\pi/3) = 5(1/2) = 2.5$)*

**Question 4:**
(CO1, K2)
Given the vector $\mathbf{A} = x\hat{\mathbf{a}}_x + y\hat{\mathbf{a}}_y + z\hat{\mathbf{a}}_z$, express this vector in cylindrical coordinates.
*(Answer: $\mathbf{A} = \rho\cos\phi \hat{\mathbf{a}}_\rho + \rho\sin\phi \hat{\mathbf{a}}_\phi + z\hat{\mathbf{a}}_z$)*

**Question 5:**
(CO1, K2)
Given the vector $\mathbf{B} = \rho\hat{\mathbf{a}}_\rho + \phi\hat{\mathbf{a}}_\phi + z\hat{\mathbf{a}}_z$, convert it to rectangular components at the point $(x, y, z) = (1, \sqrt{3}, 2)$.
*(Hint: First, find the cylindrical coordinates of the point. Then, find the basis vectors at that angle.)*
*(Answer: For $(1, \sqrt{3}, 2)$, $\rho = \sqrt{1^2+(\sqrt{3})^2} = 2$, $\phi = \operatorname{atan2}(\sqrt{3}, 1) = \pi/3$, $z=2$.
At $\phi=\pi/3$: $\hat{\mathbf{a}}_\rho = \cos(\pi/3)\hat{\mathbf{a}}_x + \sin(\pi/3)\hat{\mathbf{a}}_y = 0.5\hat{\mathbf{a}}_x + 0.866\hat{\mathbf{a}}_y$
$\hat{\mathbf{a}}_\phi = -\sin(\pi/3)\hat{\mathbf{a}}_x + \cos(\pi/3)\hat{\mathbf{a}}_y = -0.866\hat{\mathbf{a}}_x + 0.5\hat{\mathbf{a}}_y$
$\mathbf{B} = 2(0.5\hat{\mathbf{a}}_x + 0.866\hat{\mathbf{a}}_y) + (\pi/3)(-0.866\hat{\mathbf{a}}_x + 0.5\hat{\mathbf{a}}_y) + 2\hat{\mathbf{a}}_z$
$\mathbf{B} = (1 - 0.866(\pi/3))\hat{\mathbf{a}}_x + (1.732 + 0.5(\pi/3))\hat{\mathbf{a}}_y + 2\hat{\mathbf{a}}_z$
$\mathbf{B} \approx (1 - 0.907)\hat{\mathbf{a}}_x + (1.732 + 0.524)\hat{\mathbf{a}}_y + 2\hat{\mathbf{a}}_z$
$\mathbf{B} \approx 0.093\hat{\mathbf{a}}_x + 2.256\hat{\mathbf{a}}_y + 2\hat{\mathbf{a}}_z$)*

**Question 6:**
(CO1, K2)
Calculate the volume element $dV$ in spherical coordinates.
*(Answer: $dV = r^2\sin\theta \, dr \, d\theta \, d\phi$)*

---

## 7. Conclusion and Key Takeaways

*   **Rectangular Coordinates:** Best for problems with no specific symmetry or when dealing with planar structures. Basis vectors are constant.
*   **Cylindrical Coordinates:** Best for problems with cylindrical symmetry (e.g., coaxial cables, infinite lines). The $\rho$ and $\phi$ components of basis vectors vary with position.
*   **Spherical Coordinates:** Best for problems with spherical symmetry (e.g., point charges, uniform spheres). All basis vectors vary with position.
*   **Transformations:** Mastery of transformations between coordinate systems is essential for correctly applying electromagnetic principles in different contexts.
*   **Differential Elements:** The differential displacement ($d\mathbf{l}$) and volume ($dV$) elements are fundamental for setting up integrals (e.g., for line, surface, and volume integrals of fields and charges).

This review of coordinate systems lays the groundwork for understanding the manipulation of vector fields, which is central to electromagnetics and the subsequent application of Maxwell's equations (CO2).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
