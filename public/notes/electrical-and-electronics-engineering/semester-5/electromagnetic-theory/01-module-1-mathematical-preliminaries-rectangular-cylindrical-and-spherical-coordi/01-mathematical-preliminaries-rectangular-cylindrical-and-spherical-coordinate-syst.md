---
title: "Mathematical Preliminaries : Rectangular, Cylindrical and Spherical Coordinate Systems - Representation of Point, Unit vector, Vector, Constant surfaces, Transformation of points, unit vectors and vectors among the three coordinate systems - Transformation matrices, Del operator - Representation in the three coordinate systems, Gradient of scalar field - Physical meaning of gradient, Divergence of a vector field - Physical significance of divergence - Divergence Theorem -, Curl of a vector field - Physical significance of curl - Stoke’s Theorem"
subject: "ELECTROMAGNETIC THEORY"
module: "Module 1: Mathematical Preliminaries : Rectangular, Cylindrical and Spherical Coordinate Systems "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361af"
status: "completed"
scrapedAt: "2026-05-23T16:21:49.244Z"
---
# Electromagnetic Theory: Module 1 - Mathematical Preliminaries

## Table of Contents

1.  Introduction to Coordinate Systems
    *   1.1 Rectangular Coordinate System (Cartesian)
    *   1.2 Cylindrical Coordinate System
    *   1.3 Spherical Coordinate System
2.  Representation of Points and Vectors
    *   2.1 Representation of a Point
    *   2.2 Representation of Unit Vectors
    *   2.3 Representation of a Vector
3.  Constant Surfaces
4.  Transformations Between Coordinate Systems
    *   4.1 Transformation of Points
    *   4.2 Transformation of Unit Vectors
    *   4.3 Transformation of Vectors
    *   4.4 Transformation Matrices
5.  The Del Operator ($\nabla$)
    *   5.1 Del Operator in Rectangular Coordinates
    *   5.2 Del Operator in Cylindrical Coordinates
    *   5.3 Del Operator in Spherical Coordinates
6.  Gradient of a Scalar Field
    *   6.1 Definition and Representation
    *   6.2 Physical Meaning of the Gradient
    *   6.3 Examples
7.  Divergence of a Vector Field
    *   7.1 Definition and Representation
    *   7.2 Physical Significance of Divergence
    *   7.3 Divergence Theorem
    *   7.4 Examples
8.  Curl of a Vector Field
    *   8.1 Definition and Representation
    *   8.2 Physical Significance of Curl
    *   8.3 Stoke’s Theorem
    *   8.4 Examples
9.  Practice Questions and Answers
10. Important Points to Remember

---

## 1. Introduction to Coordinate Systems

In electromagnetics, we often deal with physical quantities distributed in space. To describe these distributions and their relationships, we use coordinate systems. The three most fundamental coordinate systems used in electromagnetics are rectangular (Cartesian), cylindrical, and spherical.

*   **Learning Outcome:** Understand the fundamental coordinate systems used in electromagnetics.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 1.1 Rectangular Coordinate System (Cartesian)

*   **Definition:** A system defined by three mutually perpendicular axes (x, y, z). A point in space is uniquely identified by its projection onto these axes.
*   **Key Concepts:**
    *   **Variables:** (x, y, z) representing distances along the x, y, and z axes, respectively.
    *   **Range:** $-\infty < x < \infty$, $-\infty < y < \infty$, $-\infty < z < \infty$.
    *   **Basis Unit Vectors:** $\mathbf{a}_x$, $\mathbf{a}_y$, $\mathbf{a}_z$. These are constant vectors, pointing in the positive x, y, and z directions, respectively. They are orthogonal ($\mathbf{a}_x \cdot \mathbf{a}_y = \mathbf{a}_x \cdot \mathbf{a}_z = \mathbf{a}_y \cdot \mathbf{a}_z = 0$) and have unit magnitude ($\|\mathbf{a}_x\| = \|\mathbf{a}_y\| = \|\mathbf{a}_z\| = 1$).
*   **Textbook Reference:** Sadiku, Chapter 1; Hayt & Buck, Chapter 1.

### 1.2 Cylindrical Coordinate System

*   **Definition:** A system that uses the distance from the z-axis (ρ), the angle from the positive x-axis in the xy-plane ($\phi$), and the height (z) above the xy-plane.
*   **Key Concepts:**
    *   **Variables:** (ρ, $\phi$, z).
        *   ρ (rho): radial distance from the z-axis.
        *   $\phi$ (phi): azimuthal angle measured from the positive x-axis in the xy-plane.
        *   z: height along the z-axis.
    *   **Range:** $0 \le \rho < \infty$, $0 \le \phi < 2\pi$ (or $-\pi \le \phi \le \pi$), $-\infty < z < \infty$.
    *   **Basis Unit Vectors:** $\mathbf{a}_\rho$, $\mathbf{a}_\phi$, $\mathbf{a}_z$.
        *   $\mathbf{a}_\rho$: points radially outwards from the z-axis.
        *   $\mathbf{a}_\phi$: points tangentially in the direction of increasing $\phi$.
        *   $\mathbf{a}_z$: same as $\mathbf{a}_z$ in rectangular coordinates.
    *   **Important Note:** $\mathbf{a}_\rho$ and $\mathbf{a}_\phi$ are *not* constant vectors; their direction changes with position.
*   **Textbook Reference:** Sadiku, Chapter 1; Hayt & Buck, Chapter 1.

### 1.3 Spherical Coordinate System

*   **Definition:** A system that uses the radial distance from the origin (r), the angle from the positive z-axis ($\theta$), and the angle from the positive x-axis in the xy-plane ($\phi$).
*   **Key Concepts:**
    *   **Variables:** (r, $\theta$, $\phi$).
        *   r: radial distance from the origin.
        *   $\theta$ (theta): polar angle (or zenith angle), measured from the positive z-axis.
        *   $\phi$ (phi): azimuthal angle, measured from the positive x-axis in the xy-plane (same as in cylindrical coordinates).
    *   **Range:** $0 \le r < \infty$, $0 \le \theta \le \pi$, $0 \le \phi < 2\pi$ (or $-\pi \le \phi \le \pi$).
    *   **Basis Unit Vectors:** $\mathbf{a}_r$, $\mathbf{a}_\theta$, $\mathbf{a}_\phi$.
        *   $\mathbf{a}_r$: points radially outwards from the origin.
        *   $\mathbf{a}_\theta$: points tangentially in the direction of increasing $\theta$.
        *   $\mathbf{a}_\phi$: points tangentially in the direction of increasing $\phi$.
    *   **Important Note:** $\mathbf{a}_r$, $\mathbf{a}_\theta$, and $\mathbf{a}_\phi$ are *not* constant vectors; their direction changes with position.
*   **Textbook Reference:** Sadiku, Chapter 1; Hayt & Buck, Chapter 1.

---

## 2. Representation of Points and Vectors

### 2.1 Representation of a Point

A point P in space can be represented by its coordinates in a given system.

*   **Rectangular:** P = (x, y, z)
*   **Cylindrical:** P = (ρ, $\phi$, z)
*   **Spherical:** P = (r, $\theta$, $\phi$)

### 2.2 Representation of Unit Vectors

Unit vectors are crucial for defining directions within a coordinate system.

*   **Rectangular:** $\mathbf{a}_x$, $\mathbf{a}_y$, $\mathbf{a}_z$
*   **Cylindrical:** $\mathbf{a}_\rho$, $\mathbf{a}_\phi$, $\mathbf{a}_z$
*   **Spherical:** $\mathbf{a}_r$, $\mathbf{a}_\theta$, $\mathbf{a}_\phi$

### 2.3 Representation of a Vector

A vector $\mathbf{A}$ can be expressed as a linear combination of the basis unit vectors in a specific coordinate system.

*   **Rectangular:** $\mathbf{A} = A_x \mathbf{a}_x + A_y \mathbf{a}_y + A_z \mathbf{a}_z$
    *   $A_x, A_y, A_z$ are the scalar components of the vector along the respective axes.
*   **Cylindrical:** $\mathbf{A} = A_\rho \mathbf{a}_\rho + A_\phi \mathbf{a}_\phi + A_z \mathbf{a}_z$
    *   $A_\rho, A_\phi, A_z$ are the scalar components.
*   **Spherical:** $\mathbf{A} = A_r \mathbf{a}_r + A_\theta \mathbf{a}_\theta + A_\phi \mathbf{a}_\phi$
    *   $A_r, A_\theta, A_\phi$ are the scalar components.

*   **Example:** Consider a vector $\mathbf{A}$ from the origin to the point (1, 2, 3) in rectangular coordinates.
    *   $\mathbf{A} = 1 \mathbf{a}_x + 2 \mathbf{a}_y + 3 \mathbf{a}_z$.
    *   If we want to represent this vector in cylindrical coordinates at the same point (x=1, y=2, z=3), we first need to convert the point to cylindrical coordinates:
        *   $\rho = \sqrt{x^2 + y^2} = \sqrt{1^2 + 2^2} = \sqrt{5}$
        *   $\phi = \arctan(y/x) = \arctan(2/1) \approx 63.4^\circ$
        *   z = 3
    *   So, the point is $(\sqrt{5}, 63.4^\circ, 3)$ in cylindrical coordinates.
    *   To express the vector $\mathbf{A}$ in cylindrical coordinates, we need the components $A_\rho$, $A_\phi$, $A_z$ at this point. This requires transformations (discussed later).

---

## 3. Constant Surfaces

Constant surfaces are surfaces where one or more coordinates are held at a constant value. They help visualize the coordinate systems.

*   **Rectangular:**
    *   $x = c$: A plane parallel to the yz-plane.
    *   $y = c$: A plane parallel to the xz-plane.
    *   $z = c$: A plane parallel to the xy-plane.
*   **Cylindrical:**
    *   $\rho = c$: A cylinder of radius 'c' centered on the z-axis.
    *   $\phi = c$: A half-plane originating from the z-axis, making an angle 'c' with the positive x-axis.
    *   $z = c$: A plane parallel to the xy-plane.
*   **Spherical:**
    *   $r = c$: A sphere of radius 'c' centered at the origin.
    *   $\theta = c$: A cone with its vertex at the origin, opening upwards or downwards depending on the angle.
    *   $\phi = c$: A half-plane originating from the z-axis, making an angle 'c' with the positive x-axis (same as in cylindrical).

*   **Example:** A point charge located at the origin would be described by $r=0$. A charged ring on the xy-plane would be described by $z=0$ and $r=constant$.

---

## 4. Transformations Between Coordinate Systems

Transformations are essential for expressing quantities in different coordinate systems.

*   **Learning Outcome:** Perform transformations of points, unit vectors, and vectors between the three coordinate systems.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 4.1 Transformation of Points

We need relationships between the coordinate variables of the different systems.

**Rectangular (x, y, z) to Cylindrical ($\rho$, $\phi$, z):**
$\rho = \sqrt{x^2 + y^2}$
$\phi = \arctan\left(\frac{y}{x}\right)$ (Careful with quadrants for $\phi$)
$z = z$

**Cylindrical ($\rho$, $\phi$, z) to Rectangular (x, y, z):**
$x = \rho \cos \phi$
$y = \rho \sin \phi$
$z = z$

**Rectangular (x, y, z) to Spherical (r, $\theta$, $\phi$):**
$r = \sqrt{x^2 + y^2 + z^2}$
$\theta = \arctan\left(\frac{\sqrt{x^2 + y^2}}{z}\right)$ (Careful with quadrants/division by zero for $\theta$)
$\phi = \arctan\left(\frac{y}{x}\right)$ (Same as in cylindrical)

**Spherical (r, $\theta$, $\phi$) to Rectangular (x, y, z):**
$x = r \sin \theta \cos \phi$
$y = r \sin \theta \sin \phi$
$z = r \cos \theta$

**Cylindrical ($\rho$, $\phi$, z) to Spherical (r, $\theta$, $\phi$):**
$r = \sqrt{\rho^2 + z^2}$
$\theta = \arctan\left(\frac{\rho}{z}\right)$ (Careful with quadrants/division by zero for $\theta$)
$\phi = \phi$

**Spherical (r, $\theta$, $\phi$) to Cylindrical ($\rho$, $\phi$, z):**
$\rho = r \sin \theta$
$\phi = \phi$
$z = r \cos \theta$

**Important:** Pay attention to the quadrant of the angle ($\phi$ and $\theta$) when converting from rectangular or other forms, especially when using `atan2` or similar functions that consider the signs of both numerator and denominator.

### 4.2 Transformation of Unit Vectors

The unit vectors in one system can be expressed in terms of the unit vectors in another system. This is crucial for vector transformations.

**From Rectangular to Cylindrical:**
$\mathbf{a}_\rho = \sin \theta \cos \phi \mathbf{a}_x + \sin \theta \sin \phi \mathbf{a}_y + \cos \theta \mathbf{a}_z$ (This is wrong. Unit vectors transform based on the angle of the *point*.)

Let's be more precise. The relationship between unit vectors at a point P(x,y,z) or P($\rho$,$\phi$,z) or P(r,$\theta$,$\phi$) is derived from the relationships between the coordinate axes.

**Rectangular to Cylindrical:**
Consider the point (x, y) in the xy-plane. The unit vector $\mathbf{a}_\rho$ points in the direction of increasing $\rho$, which is radially outwards from the origin. The unit vector $\mathbf{a}_\phi$ points tangentially.
*   $\mathbf{a}_\rho = \cos \phi \mathbf{a}_x + \sin \phi \mathbf{a}_y$
*   $\mathbf{a}_\phi = -\sin \phi \mathbf{a}_x + \cos \phi \mathbf{a}_y$
*   $\mathbf{a}_z = \mathbf{a}_z$

**Cylindrical to Rectangular:**
*   $\mathbf{a}_x = \cos \phi \mathbf{a}_\rho - \sin \phi \mathbf{a}_\phi$
*   $\mathbf{a}_y = \sin \phi \mathbf{a}_\rho + \cos \phi \mathbf{a}_\phi$
*   $\mathbf{a}_z = \mathbf{a}_z$

**Rectangular to Spherical:**
*   $\mathbf{a}_r = \sin \theta \cos \phi \mathbf{a}_x + \sin \theta \sin \phi \mathbf{a}_y + \cos \theta \mathbf{a}_z$
*   $\mathbf{a}_\theta = \cos \theta \cos \phi \mathbf{a}_x + \cos \theta \sin \phi \mathbf{a}_y - \sin \theta \mathbf{a}_z$
*   $\mathbf{a}_\phi = -\sin \phi \mathbf{a}_x + \cos \phi \mathbf{a}_y$

**Spherical to Rectangular:**
*   $\mathbf{a}_x = \sin \theta \cos \phi \mathbf{a}_r + \cos \theta \cos \phi \mathbf{a}_\theta - \sin \phi \mathbf{a}_\phi$
*   $\mathbf{a}_y = \sin \theta \sin \phi \mathbf{a}_r + \cos \theta \sin \phi \mathbf{a}_\theta + \cos \phi \mathbf{a}_\phi$
*   $\mathbf{a}_z = \cos \theta \mathbf{a}_r - \sin \theta \mathbf{a}_\theta$

**Cylindrical to Spherical:**
*   $\mathbf{a}_\rho = \sin \theta \mathbf{a}_r + \cos \theta \mathbf{a}_\theta$
*   $\mathbf{a}_\phi = \mathbf{a}_\phi$
*   $\mathbf{a}_z = \cos \theta \mathbf{a}_r - \sin \theta \mathbf{a}_\theta$

**Spherical to Cylindrical:**
*   $\mathbf{a}_r = \sin \theta \mathbf{a}_\rho + \cos \theta \mathbf{a}_z$
*   $\mathbf{a}_\theta = \cos \theta \mathbf{a}_\rho - \sin \theta \mathbf{a}_z$
*   $\mathbf{a}_\phi = \mathbf{a}_\phi$

**Important:** These transformations are dependent on the specific point where the unit vectors are being considered.

### 4.3 Transformation of Vectors

To transform a vector $\mathbf{A}$ from one coordinate system to another, we express its components in the new system.

**Example:** Express vector $\mathbf{A} = 3\mathbf{a}_x + 4\mathbf{a}_y - 5\mathbf{a}_z$ in cylindrical coordinates at the point (x=1, y=2, z=3).

1.  **Convert the point to cylindrical coordinates:**
    *   $\rho = \sqrt{1^2 + 2^2} = \sqrt{5}$
    *   $\phi = \arctan(2/1) \approx 63.4^\circ$
    *   $z = 3$
    *   So the point is $(\sqrt{5}, 63.4^\circ, 3)$ in cylindrical coordinates.

2.  **Transform the components of $\mathbf{A}$ using the unit vector transformations:**
    We want to find $A_\rho, A_\phi, A_z$ such that $\mathbf{A} = A_\rho \mathbf{a}_\rho + A_\phi \mathbf{a}_\phi + A_z \mathbf{a}_z$.
    We know $\mathbf{A} = A_x \mathbf{a}_x + A_y \mathbf{a}_y + A_z \mathbf{a}_z$.
    We can use the orthogonality of the unit vectors:
    $A_\rho = \mathbf{A} \cdot \mathbf{a}_\rho$
    $A_\phi = \mathbf{A} \cdot \mathbf{a}_\phi$
    $A_z = \mathbf{A} \cdot \mathbf{a}_z$

    Using the relations:
    $\mathbf{a}_\rho = \cos \phi \mathbf{a}_x + \sin \phi \mathbf{a}_y$
    $\mathbf{a}_\phi = -\sin \phi \mathbf{a}_x + \cos \phi \mathbf{a}_y$
    $\mathbf{a}_z = \mathbf{a}_z$

    Let $\phi = 63.4^\circ$. Then $\cos \phi \approx 0.447$, $\sin \phi \approx 0.894$.
    $A_\rho = (3\mathbf{a}_x + 4\mathbf{a}_y - 5\mathbf{a}_z) \cdot (\cos \phi \mathbf{a}_x + \sin \phi \mathbf{a}_y)$
    $A_\rho = 3 \cos \phi + 4 \sin \phi - 5(\mathbf{a}_z \cdot \mathbf{a}_x \text{ or } \mathbf{a}_y) = 3(0.447) + 4(0.894) = 1.341 + 3.576 = 4.917$

    $A_\phi = (3\mathbf{a}_x + 4\mathbf{a}_y - 5\mathbf{a}_z) \cdot (-\sin \phi \mathbf{a}_x + \cos \phi \mathbf{a}_y)$
    $A_\phi = -3 \sin \phi + 4 \cos \phi - 5(\mathbf{a}_z \cdot \mathbf{a}_x \text{ or } \mathbf{a}_y) = -3(0.894) + 4(0.447) = -2.682 + 1.788 = -0.894$

    $A_z = (3\mathbf{a}_x + 4\mathbf{a}_y - 5\mathbf{a}_z) \cdot \mathbf{a}_z$
    $A_z = -5$

    So, $\mathbf{A} = 4.917 \mathbf{a}_\rho - 0.894 \mathbf{a}_\phi - 5 \mathbf{a}_z$ in cylindrical coordinates at the point (1, 2, 3).

### 4.4 Transformation Matrices

Representing unit vector transformations using matrices can simplify vector transformations, especially in computational settings.

For example, the transformation from rectangular to cylindrical unit vectors can be viewed as:

$$
\begin{pmatrix} \mathbf{a}_\rho \\ \mathbf{a}_\phi \\ \mathbf{a}_z \end{pmatrix} =
\begin{pmatrix}
\cos \phi & \sin \phi & 0 \\
-\sin \phi & \cos \phi & 0 \\
0 & 0 & 1
\end{pmatrix}
\begin{pmatrix} \mathbf{a}_x \\ \mathbf{a}_y \\ \mathbf{a}_z \end{pmatrix}
$$

The vector transformation then involves multiplying the component vector by this transformation matrix.

**Textbook Reference:** Sadiku, Chapter 1; Hayt & Buck, Chapter 1.

---

## 5. The Del Operator ($\nabla$)

The del operator is a vector differential operator. It is fundamental to defining gradient, divergence, and curl.

*   **Learning Outcome:** Understand the del operator and its representation in different coordinate systems.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 5.1 Del Operator in Rectangular Coordinates

*   **Definition:** $\nabla = \frac{\partial}{\partial x} \mathbf{a}_x + \frac{\partial}{\partial y} \mathbf{a}_y + \frac{\partial}{\partial z} \mathbf{a}_z$
*   **Key Property:** It acts like a vector. It can be used in dot products and cross products with scalar and vector fields.

### 5.2 Del Operator in Cylindrical Coordinates

*   **Definition:**
    $\nabla = \frac{\partial}{\partial \rho} \mathbf{a}_\rho + \frac{1}{\rho} \frac{\partial}{\partial \phi} \mathbf{a}_\phi + \frac{\partial}{\partial z} \mathbf{a}_z$
*   **Important Note:** The presence of the $\rho$ in the denominator for the $\phi$ component reflects the scaling of distance in the angular direction.

### 5.3 Del Operator in Spherical Coordinates

*   **Definition:**
    $\nabla = \frac{\partial}{\partial r} \mathbf{a}_r + \frac{1}{r} \frac{\partial}{\partial \theta} \mathbf{a}_\theta + \frac{1}{r \sin \theta} \frac{\partial}{\partial \phi} \mathbf{a}_\phi$
*   **Important Note:** The $r$ and $r \sin \theta$ terms in the denominators account for the changing radial and angular distances.

**Textbook Reference:** Sadiku, Chapter 4; Hayt & Buck, Chapter 4; Griffiths, Chapter 1.

---

## 6. Gradient of a Scalar Field

The gradient of a scalar field produces a vector field.

*   **Learning Outcome:** Understand the gradient of a scalar field and its physical meaning.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 6.1 Definition and Representation

If $V(x, y, z)$ is a scalar field, its gradient is given by:

*   **Rectangular:** $\nabla V = \frac{\partial V}{\partial x} \mathbf{a}_x + \frac{\partial V}{\partial y} \mathbf{a}_y + \frac{\partial V}{\partial z} \mathbf{a}_z$
*   **Cylindrical:** $\nabla V = \frac{\partial V}{\partial \rho} \mathbf{a}_\rho + \frac{1}{\rho} \frac{\partial V}{\partial \phi} \mathbf{a}_\phi + \frac{\partial V}{\partial z} \mathbf{a}_z$
*   **Spherical:** $\nabla V = \frac{\partial V}{\partial r} \mathbf{a}_r + \frac{1}{r} \frac{\partial V}{\partial \theta} \mathbf{a}_\theta + \frac{1}{r \sin \theta} \frac{\partial V}{\partial \phi} \mathbf{a}_\phi$

### 6.2 Physical Meaning of the Gradient

The gradient of a scalar field $V$ at a point P, denoted by $\nabla V |_P$:

1.  **Direction:** Points in the direction of the **greatest rate of increase** of the scalar field $V$ at point P.
2.  **Magnitude:** Is equal to the **rate of increase** of $V$ in that direction.
3.  **Orthogonality:** The gradient vector is always **normal (perpendicular)** to the constant-value surface of the scalar field passing through that point.

**Analogy:** Imagine a topographical map. The elevation is a scalar field. The gradient at any point on the map points in the direction of the steepest ascent, and its magnitude is the steepness of the slope. Contour lines are the constant-value surfaces (constant elevation), and the gradient is perpendicular to them.

**Mathematical Relation:** The directional derivative of $V$ in the direction of a unit vector $\mathbf{a}$ is given by $d V / d l = \nabla V \cdot \mathbf{a}$. The maximum value of this occurs when $\mathbf{a}$ is in the same direction as $\nabla V$, making $d V / d l = \|\nabla V\|$.

### 6.3 Examples

**Example 1:** Find the gradient of $V(x, y, z) = x^2y + yz^2$ at point (1, 2, -1).
*   **Rectangular Coordinates:**
    $\frac{\partial V}{\partial x} = 2xy$
    $\frac{\partial V}{\partial y} = x^2 + z^2$
    $\frac{\partial V}{\partial z} = 2yz$

    $\nabla V = 2xy \mathbf{a}_x + (x^2 + z^2) \mathbf{a}_y + 2yz \mathbf{a}_z$

    At (1, 2, -1):
    $\nabla V|_{(1,2,-1)} = 2(1)(2) \mathbf{a}_x + (1^2 + (-1)^2) \mathbf{a}_y + 2(2)(-1) \mathbf{a}_z$
    $\nabla V|_{(1,2,-1)} = 4 \mathbf{a}_x + 2 \mathbf{a}_y - 4 \mathbf{a}_z$

    The gradient vector points in the direction of the steepest increase of V. The surface $V = 1^2(2) + 2(-1)^2 = 2 + 2 = 4$ is perpendicular to this gradient vector at (1, 2, -1).

**Example 2:** Find the gradient of $V(r, \theta) = r \sin \theta$ in spherical coordinates.
*   **Spherical Coordinates:**
    $\frac{\partial V}{\partial r} = \sin \theta$
    $\frac{\partial V}{\partial \theta} = r \cos \theta$
    $\frac{\partial V}{\partial \phi} = 0$ (since V does not depend on $\phi$)

    $\nabla V = \frac{\partial V}{\partial r} \mathbf{a}_r + \frac{1}{r} \frac{\partial V}{\partial \theta} \mathbf{a}_\theta + \frac{1}{r \sin \theta} \frac{\partial V}{\partial \phi} \mathbf{a}_\phi$
    $\nabla V = \sin \theta \mathbf{a}_r + \frac{1}{r} (r \cos \theta) \mathbf{a}_\theta + 0 \mathbf{a}_\phi$
    $\nabla V = \sin \theta \mathbf{a}_r + \cos \theta \mathbf{a}_\theta$

    This result is consistent with the formula for a line element in spherical coordinates ($dl = dr \mathbf{a}_r + r d\theta \mathbf{a}_\theta + r \sin \theta d\phi \mathbf{a}_\phi$). The gradient component in a direction is the rate of change with respect to distance in that direction.

**Textbook Reference:** Sadiku, Section 4.2; Hayt & Buck, Section 4.2; Griffiths, Section 1.3.

---

## 7. Divergence of a Vector Field

The divergence of a vector field quantifies the outward flux per unit volume of the field at a point.

*   **Learning Outcome:** Understand the divergence of a vector field, its physical significance, and the Divergence Theorem.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 7.1 Definition and Representation

If $\mathbf{A} = A_x \mathbf{a}_x + A_y \mathbf{a}_y + A_z \mathbf{a}_z$ is a vector field, its divergence is the scalar quantity:

*   **Rectangular:** $\nabla \cdot \mathbf{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}$

*   **Cylindrical:**
    $\nabla \cdot \mathbf{A} = \frac{1}{\rho} \frac{\partial}{\partial \rho}(\rho A_\rho) + \frac{1}{\rho} \frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z}$
    (Note: $\frac{1}{\rho} \frac{\partial}{\partial \rho}(\rho A_\rho) = \frac{\partial A_\rho}{\partial \rho} + \frac{A_\rho}{\rho}$)

*   **Spherical:**
    $\nabla \cdot \mathbf{A} = \frac{1}{r^2} \frac{\partial}{\partial r}(r^2 A_r) + \frac{1}{r \sin \theta} \frac{\partial}{\partial \theta}(A_\theta \sin \theta) + \frac{1}{r \sin \theta} \frac{\partial A_\phi}{\partial \phi}$
    (Note: $\frac{1}{r^2} \frac{\partial}{\partial r}(r^2 A_r) = \frac{\partial A_r}{\partial r} + \frac{2A_r}{r}$)

**Key Property:** Divergence is a scalar.

### 7.2 Physical Significance of Divergence

The divergence of a vector field $\mathbf{A}$ at a point P, denoted by $\nabla \cdot \mathbf{A}|_P$, measures:

1.  **Source/Sink Strength:**
    *   If $\nabla \cdot \mathbf{A} > 0$ at P, point P is a **source** for the field. More field lines are originating from P than terminating at P.
    *   If $\nabla \cdot \mathbf{A} < 0$ at P, point P is a **sink** for the field. More field lines are terminating at P than originating from P.
    *   If $\nabla \cdot \mathbf{A} = 0$ at P, point P is neither a source nor a sink. The field is **solenoidal** or **divergence-free** at P.

2.  **Outward Flux:** It represents the net outward flux of the vector field through an infinitesimally small closed surface enclosing the point, per unit volume.

**Example:**
*   **Electric Field:** For an electric field $\mathbf{E}$, $\nabla \cdot \mathbf{E} = \rho_v / \epsilon_0$ (Gauss's Law for Electricity). Positive divergence in an electric field implies the presence of positive charges (sources).
*   **Fluid Flow:** For a fluid velocity field $\mathbf{v}$, $\nabla \cdot \mathbf{v}$ represents the rate at which fluid is expanding or compressing at a point. If $\nabla \cdot \mathbf{v} > 0$, the fluid is expanding. If $\nabla \cdot \mathbf{v} = 0$, the fluid is incompressible.

### 7.3 Divergence Theorem (Gauss's Divergence Theorem)

This theorem relates a volume integral of the divergence of a vector field to a surface integral of the field over the closed surface bounding that volume.

*   **Statement:** For a vector field $\mathbf{A}$ that is continuous and has continuous partial derivatives in a volume $V$ bounded by a closed surface $S$, the following holds:
    $$ \iiint_V (\nabla \cdot \mathbf{A}) \, dV = \oint_S (\mathbf{A} \cdot d\mathbf{S}) $$
    where $d\mathbf{S} = \mathbf{a}_n \, dS$ and $\mathbf{a}_n$ is the outward unit normal vector to the surface $S$.

*   **Significance:** It provides a crucial link between the "microscopic" behavior of a field at a point (divergence) and its "macroscopic" behavior over a region (flux). It's a fundamental theorem in vector calculus and electromagnetics.

### 7.4 Examples

**Example 1:** Find the divergence of $\mathbf{A} = x^2y \mathbf{a}_x + yz^2 \mathbf{a}_y + zx^2 \mathbf{a}_z$.
*   **Rectangular Coordinates:**
    $A_x = x^2y$, $A_y = yz^2$, $A_z = zx^2$
    $\frac{\partial A_x}{\partial x} = 2xy$
    $\frac{\partial A_y}{\partial y} = z^2$
    $\frac{\partial A_z}{\partial z} = x^2$

    $\nabla \cdot \mathbf{A} = 2xy + z^2 + x^2$

**Example 2:** Find the divergence of $\mathbf{A} = \rho^2 \mathbf{a}_\rho + \rho z \mathbf{a}_\phi + z^2 \mathbf{a}_z$ in cylindrical coordinates.
*   **Cylindrical Coordinates:**
    $A_\rho = \rho^2$, $A_\phi = \rho z$, $A_z = z^2$

    $\nabla \cdot \mathbf{A} = \frac{1}{\rho} \frac{\partial}{\partial \rho}(\rho A_\rho) + \frac{1}{\rho} \frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z}$
    $\nabla \cdot \mathbf{A} = \frac{1}{\rho} \frac{\partial}{\partial \rho}(\rho \cdot \rho^2) + \frac{1}{\rho} \frac{\partial}{\partial \phi}(\rho z) + \frac{\partial}{\partial z}(z^2)$
    $\nabla \cdot \mathbf{A} = \frac{1}{\rho} \frac{\partial}{\partial \rho}(\rho^3) + \frac{1}{\rho} (0) + 2z$
    $\nabla \cdot \mathbf{A} = \frac{1}{\rho} (3\rho^2) + 2z$
    $\nabla \cdot \mathbf{A} = 3\rho + 2z$

**Example 3 (Divergence Theorem):** Verify the Divergence Theorem for $\mathbf{A} = x \mathbf{a}_x + y \mathbf{a}_y + z \mathbf{a}_z$ over the unit cube ($0 \le x,y,z \le 1$).
*   **Left Side (Volume Integral):**
    $\nabla \cdot \mathbf{A} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3$
    $\iiint_V (\nabla \cdot \mathbf{A}) \, dV = \iiint_V 3 \, dx \, dy \, dz = 3 \times (\text{Volume of cube}) = 3 \times (1)^3 = 3$.

*   **Right Side (Surface Integral):** The cube has 6 faces. We need to integrate $\mathbf{A} \cdot d\mathbf{S}$ over each face. $d\mathbf{S} = \mathbf{a}_n \, dS$.
    1.  Face $x=1$: $S_1$, $\mathbf{a}_n = \mathbf{a}_x$. $dS = dy \, dz$. $\mathbf{A} \cdot d\mathbf{S} = (1 \mathbf{a}_x + y \mathbf{a}_y + z \mathbf{a}_z) \cdot \mathbf{a}_x \, dy \, dz = 1 \, dy \, dz$.
        $\oint_{S_1} \mathbf{A} \cdot d\mathbf{S} = \int_0^1 \int_0^1 1 \, dy \, dz = 1$.
    2.  Face $x=0$: $S_2$, $\mathbf{a}_n = -\mathbf{a}_x$. $dS = dy \, dz$. $\mathbf{A} \cdot d\mathbf{S} = (0 \mathbf{a}_x + y \mathbf{a}_y + z \mathbf{a}_z) \cdot (-\mathbf{a}_x) \, dy \, dz = 0$.
        $\oint_{S_2} \mathbf{A} \cdot d\mathbf{S} = 0$.
    3.  Face $y=1$: $S_3$, $\mathbf{a}_n = \mathbf{a}_y$. $dS = dx \, dz$. $\mathbf{A} \cdot d\mathbf{S} = (x \mathbf{a}_x + 1 \mathbf{a}_y + z \mathbf{a}_z) \cdot \mathbf{a}_y \, dx \, dz = 1 \, dx \, dz$.
        $\oint_{S_3} \mathbf{A} \cdot d\mathbf{S} = \int_0^1 \int_0^1 1 \, dx \, dz = 1$.
    4.  Face $y=0$: $S_4$, $\mathbf{a}_n = -\mathbf{a}_y$. $\mathbf{A} \cdot d\mathbf{S} = (x \mathbf{a}_x + 0 \mathbf{a}_y + z \mathbf{a}_z) \cdot (-\mathbf{a}_y) \, dx \, dz = 0$.
        $\oint_{S_4} \mathbf{A} \cdot d\mathbf{S} = 0$.
    5.  Face $z=1$: $S_5$, $\mathbf{a}_n = \mathbf{a}_z$. $dS = dx \, dy$. $\mathbf{A} \cdot d\mathbf{S} = (x \mathbf{a}_x + y \mathbf{a}_y + 1 \mathbf{a}_z) \cdot \mathbf{a}_z \, dx \, dy = 1 \, dx \, dy$.
        $\oint_{S_5} \mathbf{A} \cdot d\mathbf{S} = \int_0^1 \int_0^1 1 \, dx \, dy = 1$.
    6.  Face $z=0$: $S_6$, $\mathbf{a}_n = -\mathbf{a}_z$. $\mathbf{A} \cdot d\mathbf{S} = (x \mathbf{a}_x + y \mathbf{a}_y + 0 \mathbf{a}_z) \cdot (-\mathbf{a}_z) \, dx \, dy = 0$.
        $\oint_{S_6} \mathbf{A} \cdot d\mathbf{S} = 0$.

    Total surface integral = $1 + 0 + 1 + 0 + 1 + 0 = 3$.
    **Conclusion:** LHS = RHS, so the theorem is verified.

**Textbook Reference:** Sadiku, Section 4.3; Hayt & Buck, Section 4.3; Griffiths, Section 1.5.

---

## 8. Curl of a Vector Field

The curl of a vector field measures the tendency of the field to rotate or circulate around a point.

*   **Learning Outcome:** Understand the curl of a vector field, its physical significance, and Stoke’s Theorem.
*   **Course Outcome Alignment:** CO1 (Apply vector calculus in Electricity and Magnetism).

### 8.1 Definition and Representation

If $\mathbf{A} = A_x \mathbf{a}_x + A_y \mathbf{a}_y + A_z \mathbf{a}_z$ is a vector field, its curl is given by:

*   **Rectangular:**
    $$ \nabla \times \mathbf{A} = \left( \frac{\partial A_z}{\partial y} - \frac{\partial A_y}{\partial z} \right) \mathbf{a}_x + \left( \frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x} \right) \mathbf{a}_y + \left( \frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y} \right) \mathbf{a}_z $$
    This can be remembered using a determinant:
    $$ \nabla \times \mathbf{A} = \begin{vmatrix}
    \mathbf{a}_x & \mathbf{a}_y & \mathbf{a}_z \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    A_x & A_y & A_z
    \end{vmatrix} $$

*   **Cylindrical:** (More complex, usually derived from rectangular)
    $$ \nabla \times \mathbf{A} = \left( \frac{1}{\rho} \frac{\partial A_z}{\partial \phi} - \frac{\partial A_\phi}{\partial z} \right) \mathbf{a}_\rho + \left( \frac{\partial A_\rho}{\partial z} - \frac{\partial A_z}{\partial \rho} \right) \mathbf{a}_\phi + \left( \frac{\partial (\rho A_\phi)}{\rho \partial \rho} - \frac{\partial A_\rho}{\partial \phi} \right) \mathbf{a}_z $$

*   **Spherical:** (Even more complex, usually derived from rectangular)
    $$ \nabla \times \mathbf{A} = \frac{1}{r \sin \theta} \left( \frac{\partial}{\partial \theta} (A_\phi \sin \theta) - \frac{\partial A_\theta}{\partial \phi} \right) \mathbf{a}_r + \frac{1}{r} \left( \frac{1}{\sin \theta} \frac{\partial A_r}{\partial \phi} - \frac{\partial}{\partial r} (r A_\theta) \right) \mathbf{a}_\theta + \frac{1}{r} \left( \frac{\partial}{\partial r} (r A_\phi) - \frac{\partial A_r}{\partial \theta} \right) \mathbf{a}_\phi $$

**Key Property:** Curl is a vector.

### 8.2 Physical Significance of Curl

The curl of a vector field $\mathbf{A}$ at a point P, denoted by $(\nabla \times \mathbf{A})|_P$:

1.  **Circulation/Rotation:** Measures the tendency of the field to rotate or circulate around a point.
    *   If $\nabla \times \mathbf{A} \neq \mathbf{0}$ at P, the field has a rotational component at P.
    *   If $\nabla \times \mathbf{A} = \mathbf{0}$ at P, the field is **irrotational** at P.

2.  **Direction of Maximum Rotation:** The curl vector points in the direction of the axis of maximum circulation (according to the right-hand rule).

3.  **Magnitude of Rotation:** The magnitude of the curl vector is twice the maximum angular velocity of a small paddlewheel placed at P.

**Example:**
*   **Magnetic Field:** For a magnetic field $\mathbf{B}$, $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ (Ampere's Law with Maxwell's addition). A non-zero curl in the magnetic field is caused by electric currents ($\mathbf{J}$).
*   **Fluid Flow:** If $\mathbf{v}$ is a fluid velocity field, $\nabla \times \mathbf{v}$ describes the vorticity of the fluid. A region where $\nabla \times \mathbf{v} \neq \mathbf{0}$ is a region where the fluid is swirling.

**Important Identity:** $\nabla \times (\nabla V) = \mathbf{0}$ (The curl of a gradient is always zero). This means that any field that can be expressed as the gradient of a scalar potential is irrotational.

### 8.3 Stoke’s Theorem

This theorem relates the surface integral of the curl of a vector field to the line integral of the vector field around the boundary of the surface.

*   **Statement:** For a vector field $\mathbf{A}$ and an open surface $S$ bounded by a simple closed curve $C$, the following holds:
    $$ \iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \oint_C \mathbf{A} \cdot d\mathbf{l} $$
    where $d\mathbf{S} = \mathbf{a}_n \, dS$ and $\mathbf{a}_n$ is the outward unit normal to the surface $S$ (consistent with the direction of circulation around $C$ by the right-hand rule).

*   **Significance:** It connects the "circulation" of a field around a closed loop to the "rotation" of the field over the surface bounded by that loop. It's another fundamental theorem in vector calculus and electromagnetics.

### 8.4 Examples

**Example 1:** Find the curl of $\mathbf{A} = 3y \mathbf{a}_x - 2x \mathbf{a}_y + 5 \mathbf{a}_z$.
*   **Rectangular Coordinates:**
    $A_x = 3y$, $A_y = -2x$, $A_z = 5$

    $\frac{\partial A_z}{\partial y} = 0$, $\frac{\partial A_y}{\partial z} = 0 \implies \text{x-component} = 0 - 0 = 0$
    $\frac{\partial A_x}{\partial z} = 0$, $\frac{\partial A_z}{\partial x} = 0 \implies \text{y-component} = 0 - 0 = 0$
    $\frac{\partial A_y}{\partial x} = -2$, $\frac{\partial A_x}{\partial y} = 3 \implies \text{z-component} = -2 - 3 = -5$

    $\nabla \times \mathbf{A} = 0 \mathbf{a}_x + 0 \mathbf{a}_y - 5 \mathbf{a}_z = -5 \mathbf{a}_z$

**Example 2:** Show that $\mathbf{A} = (2xy+z^2)\mathbf{a}_x + (x^2+2yz)\mathbf{a}_y + (2xz+y^2)\mathbf{a}_z$ is irrotational (i.e., $\nabla \times \mathbf{A} = \mathbf{0}$).
*   **Rectangular Coordinates:**
    $A_x = 2xy+z^2$, $A_y = x^2+2yz$, $A_z = 2xz+y^2$

    $\frac{\partial A_z}{\partial y} = 2y$
    $\frac{\partial A_y}{\partial z} = 2y$
    x-component: $\frac{\partial A_z}{\partial y} - \frac{\partial A_y}{\partial z} = 2y - 2y = 0$

    $\frac{\partial A_x}{\partial z} = 2z$
    $\frac{\partial A_z}{\partial x} = 2z$
    y-component: $\frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x} = 2z - 2z = 0$

    $\frac{\partial A_y}{\partial x} = 2x$
    $\frac{\partial A_x}{\partial y} = 2x$
    z-component: $\frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y} = 2x - 2x = 0$

    Since all components are zero, $\nabla \times \mathbf{A} = \mathbf{0}$. This implies that $\mathbf{A}$ is the gradient of some scalar potential, $A = -\nabla V$. (This relates to conservative fields).

**Example 3 (Stoke's Theorem):** Verify Stoke's Theorem for $\mathbf{A} = y \mathbf{a}_x - x \mathbf{a}_y + z \mathbf{a}_z$ over the surface of the unit hemisphere $z = \sqrt{1-x^2-y^2}$.
*   **Left Side (Surface Integral of Curl):**
    First, find $\nabla \times \mathbf{A}$:
    $A_x = y, A_y = -x, A_z = z$
    $\nabla \times \mathbf{A} = \left( \frac{\partial z}{\partial y} - \frac{\partial (-x)}{\partial z} \right) \mathbf{a}_x + \left( \frac{\partial y}{\partial z} - \frac{\partial z}{\partial x} \right) \mathbf{a}_y + \left( \frac{\partial (-x)}{\partial x} - \frac{\partial y}{\partial y} \right) \mathbf{a}_z$
    $\nabla \times \mathbf{A} = (0 - 0) \mathbf{a}_x + (0 - 0) \mathbf{a}_y + (-1 - 1) \mathbf{a}_z = -2 \mathbf{a}_z$

    Now, calculate $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \iint_S (-2 \mathbf{a}_z) \cdot (\mathbf{a}_n \, dS)$.
    For the upper hemisphere, the outward normal $\mathbf{a}_n$ has a z-component. The surface element in spherical coordinates is $dS = r^2 \sin \theta \, d\theta \, d\phi$.
    The normal vector to $z = \sqrt{1-x^2-y^2}$ is proportional to $\nabla(z - \sqrt{1-x^2-y^2})$.
    A simpler way is to use the fact that $z$ is the height, and the normal vector points outwards. For the hemisphere, $z = \sqrt{1-x^2-y^2}$. The vector from the origin to a point on the surface is $r\mathbf{a}_r$. The outward normal is $\mathbf{a}_r$.
    On the hemisphere, $\mathbf{a}_r = \sin \theta \cos \phi \mathbf{a}_x + \sin \theta \sin \phi \mathbf{a}_y + \cos \theta \mathbf{a}_z$.
    So, $(-2 \mathbf{a}_z) \cdot \mathbf{a}_r = (-2 \mathbf{a}_z) \cdot (\cos \theta \mathbf{a}_z) = -2 \cos \theta$.
    The integral becomes $\iint_S (-2 \cos \theta) \, dS$.
    In spherical coordinates, $dS = r^2 \sin \theta \, d\theta \, d\phi$. Here $r=1$. So $dS = \sin \theta \, d\theta \, d\phi$.
    The limits for the hemisphere are $0 \le \theta \le \pi/2$ and $0 \le \phi \le 2\pi$.
    Integral = $\int_0^{2\pi} \int_0^{\pi/2} (-2 \cos \theta) \sin \theta \, d\theta \, d\phi$
    Let $u = \cos \theta$, $du = -\sin \theta \, d\theta$. When $\theta=0, u=1$. When $\theta=\pi/2, u=0$.
    Integral = $\int_0^{2\pi} \int_1^0 (-2u) (-du) \, d\phi = \int_0^{2\pi} \int_0^1 2u \, du \, d\phi$
    Integral = $\int_0^{2\pi} [u^2]_0^1 \, d\phi = \int_0^{2\pi} 1 \, d\phi = 2\pi$.

*   **Right Side (Line Integral):**
    The boundary curve $C$ is the circle $x^2+y^2=1$ in the xy-plane ($z=0$).
    Parameterize $C$: $x = \cos t$, $y = \sin t$, $z = 0$. So $d\mathbf{l} = (-\sin t \, dt) \mathbf{a}_x + (\cos t \, dt) \mathbf{a}_y + 0 \, dt \, \mathbf{a}_z$.
    The vector field on the curve: $\mathbf{A} = (\sin t) \mathbf{a}_x - (\cos t) \mathbf{a}_y + 0 \mathbf{a}_z$.
    $\mathbf{A} \cdot d\mathbf{l} = (\sin t)(-\sin t \, dt) + (-\cos t)(\cos t \, dt) = (-\sin^2 t - \cos^2 t) \, dt = -1 \, dt$.
    The integral is $\oint_C \mathbf{A} \cdot d\mathbf{l} = \int_0^{2\pi} (-1) \, dt = -2\pi$.

    Wait, there's a sign mismatch! Let's recheck the normal direction in the surface integral.
    The rule is that the normal $\mathbf{a}_n$ should be such that if you curl the fingers of your right hand in the direction of the curve, your thumb points in the direction of $\mathbf{a}_n$.
    The curve $C$ is counter-clockwise in the xy-plane. The thumb points in the $+z$ direction. So $\mathbf{a}_n = \mathbf{a}_z$.
    The curl is $\nabla \times \mathbf{A} = -2\mathbf{a}_z$.
    $(\nabla \times \mathbf{A}) \cdot \mathbf{a}_n \, dS = (-2\mathbf{a}_z) \cdot (\mathbf{a}_z \, dS) = -2 \, dS$.
    The surface integral is $\iint_S -2 \, dS$. For the unit hemisphere, the surface area is $2\pi r^2 = 2\pi (1)^2 = 2\pi$.
    So, $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = -2 \times (\text{Surface Area}) = -2 \times (2\pi) = -4\pi$.

    Let's recheck the line integral direction. The parameterization $x=\cos t, y=\sin t$ for $t=0$ to $2\pi$ is counter-clockwise, which is the standard positive direction.
    $\mathbf{A} = y \mathbf{a}_x - x \mathbf{a}_y + z \mathbf{a}_z$. On $z=0$, $\mathbf{A} = \sin t \mathbf{a}_x - \cos t \mathbf{a}_y$.
    $d\mathbf{l} = (-\sin t \, dt) \mathbf{a}_x + (\cos t \, dt) \mathbf{a}_y$.
    $\mathbf{A} \cdot d\mathbf{l} = (\sin t)(-\sin t \, dt) + (-\cos t)(\cos t \, dt) = -\sin^2 t \, dt - \cos^2 t \, dt = -(\sin^2 t + \cos^2 t) \, dt = -dt$.
    $\oint_C \mathbf{A} \cdot d\mathbf{l} = \int_0^{2\pi} -dt = -2\pi$.

    There seems to be a persistent sign error. Let's consider the surface orientation again.
    The surface is the upper hemisphere $z \ge 0$. The boundary $C$ is $x^2+y^2=1, z=0$.
    The normal to the surface should be such that the right-hand rule applies.
    Curl is $\nabla \times \mathbf{A} = -2\mathbf{a}_z$.
    The line integral is $\oint_C \mathbf{A} \cdot d\mathbf{l}$.
    The surface integral is $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S}$.
    The question states "over the surface of the unit hemisphere $z = \sqrt{1-x^2-y^2}$". This is usually taken to mean the *upper* hemisphere.
    The outward normal for the upper hemisphere at $(x,y,z)$ is $\mathbf{a}_r = \frac{x\mathbf{a}_x + y\mathbf{a}_y + z\mathbf{a}_z}{\sqrt{x^2+y^2+z^2}}$. For the hemisphere, $r=1$, so $\mathbf{a}_n = \mathbf{a}_r$.
    The boundary curve is $x^2+y^2=1, z=0$. This is the unit circle in the xy-plane.
    The standard orientation for this curve is counter-clockwise, $t$ from $0$ to $2\pi$.
    If we curl fingers in the counter-clockwise direction in the xy-plane, our thumb points in the $+z$ direction.
    So, the normal vector for the surface integral should be $\mathbf{a}_n = \mathbf{a}_z$.
    Then, $(\nabla \times \mathbf{A}) \cdot d\mathbf{S} = (-2\mathbf{a}_z) \cdot (\mathbf{a}_z \, dS) = -2 \, dS$.
    The surface area of the hemisphere is $2\pi$. So, the integral is $-2 \times 2\pi = -4\pi$.

    Recheck the line integral again.
    $x=\cos t, y=\sin t, z=0$.
    $\mathbf{A} = y \mathbf{a}_x - x \mathbf{a}_y + z \mathbf{a}_z = \sin t \mathbf{a}_x - \cos t \mathbf{a}_y$.
    $d\mathbf{l} = (-\sin t \, dt) \mathbf{a}_x + (\cos t \, dt) \mathbf{a}_y$.
    $\mathbf{A} \cdot d\mathbf{l} = (\sin t)(-\sin t \, dt) + (-\cos t)(\cos t \, dt) = -\sin^2 t - \cos^2 t = -1$.
    $\oint_C \mathbf{A} \cdot d\mathbf{l} = \int_0^{2\pi} (-1) \, dt = -2\pi$.

    The discrepancy persists. Let's re-examine the curl calculation.
    $\mathbf{A} = y \mathbf{a}_x - x \mathbf{a}_y + z \mathbf{a}_z$.
    $\nabla \times \mathbf{A} = \begin{vmatrix}
    \mathbf{a}_x & \mathbf{a}_y & \mathbf{a}_z \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    y & -x & z
    \end{vmatrix}$
    x-comp: $\frac{\partial z}{\partial y} - \frac{\partial (-x)}{\partial z} = 0 - 0 = 0$.
    y-comp: $\frac{\partial y}{\partial z} - \frac{\partial z}{\partial x} = 0 - 0 = 0$.
    z-comp: $\frac{\partial (-x)}{\partial x} - \frac{\partial y}{\partial y} = -1 - 1 = -2$.
    So $\nabla \times \mathbf{A} = -2 \mathbf{a}_z$. This calculation is correct.

    Let's check the surface integral again. What if the surface normal is outwards from the sphere, but the *boundary curve orientation* is defined differently?
    The surface is the upper hemisphere. The boundary curve $C$ is the circle $x^2+y^2=1$ in the $z=0$ plane.
    The normal vector $\mathbf{a}_n$ should be consistent with the curve direction.
    If the curve $C$ is taken counter-clockwise, the normal should be $\mathbf{a}_z$.
    The surface integral of the curl is $\iint_S (\nabla \times \mathbf{A}) \cdot \mathbf{a}_n \, dS$.
    If $\mathbf{a}_n = \mathbf{a}_z$, then $\iint_S (-2\mathbf{a}_z) \cdot (\mathbf{a}_z \, dS) = \iint_S -2 \, dS = -2 \times (\text{Area of hemisphere}) = -2 \times 2\pi = -4\pi$.

    Perhaps the issue is with the convention of $d\mathbf{S}$ in Stoke's Theorem.
    Stoke's theorem: $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \oint_C \mathbf{A} \cdot d\mathbf{l}$.
    $d\mathbf{S} = \mathbf{a}_n \, dS$, where $\mathbf{a}_n$ is the normal to the surface such that the right-hand rule works.
    The curve $C$ is $x^2+y^2=1, z=0$. Parametrization: $\mathbf{r}(t) = (\cos t, \sin t, 0)$. $d\mathbf{l} = (-\sin t, \cos t, 0) \, dt$.
    $\mathbf{A} = y\mathbf{a}_x - x\mathbf{a}_y + z\mathbf{a}_z$. On $C$, $z=0$, so $\mathbf{A} = \sin t \mathbf{a}_x - \cos t \mathbf{a}_y$.
    $\oint_C \mathbf{A} \cdot d\mathbf{l} = \int_0^{2\pi} ((\sin t)\,(-\sin t) + (-\cos t)\,(\cos t)) \, dt = \int_0^{2\pi} (-\sin^2 t - \cos^2 t) \, dt = \int_0^{2\pi} -1 \, dt = -2\pi$.

    Now, for the surface integral. The surface $S$ is the upper hemisphere. The boundary $C$ is traversed counter-clockwise when viewed from above (positive z-axis). By the right-hand rule, the normal to the surface $S$ should be $\mathbf{a}_z$.
    The curl is $\nabla \times \mathbf{A} = -2 \mathbf{a}_z$.
    The surface element is $d\mathbf{S} = \mathbf{a}_n \, dS = \mathbf{a}_z \, dS$.
    $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \iint_S (-2 \mathbf{a}_z) \cdot (\mathbf{a}_z \, dS) = \iint_S -2 \, dS$.
    The surface area of the unit hemisphere is $2\pi r^2 = 2\pi$.
    So, the surface integral is $-2 \times (2\pi) = -4\pi$.

    There is still a mismatch. What if the surface definition implies a different normal?
    "over the surface of the unit hemisphere $z = \sqrt{1-x^2-y^2}$". This refers to the curved surface, not a flat disk. The outward normal for the curved surface of the hemisphere is indeed $\mathbf{a}_r$.
    The boundary curve is $x^2+y^2=1, z=0$. Let's try orienting it clockwise. If $t$ goes from $2\pi$ to $0$, $d\mathbf{l}$ would be $(\sin t \, dt) \mathbf{a}_x - (\cos t \, dt) \mathbf{a}_y$.
    $\mathbf{A} \cdot d\mathbf{l} = (\sin t)(\sin t \, dt) + (-\cos t)\,(-\cos t \, dt) = \sin^2 t + \cos^2 t = 1$.
    $\oint_C \mathbf{A} \cdot d\mathbf{l} = \int_{2\pi}^0 1 \, dt = -2\pi$. The result is the same.

    Ah, the problem might be the understanding of "surface". Stoke's theorem applies to an *open* surface. The hemisphere is an open surface.
    The normal $\mathbf{a}_n$ is the outward normal to the surface. For the hemisphere, it is indeed $\mathbf{a}_r$.
    $\mathbf{a}_r = \sin\theta\cos\phi \mathbf{a}_x + \sin\theta\sin\phi \mathbf{a}_y + \cos\theta \mathbf{a}_z$.
    $(\nabla \times \mathbf{A}) \cdot d\mathbf{S} = (-2\mathbf{a}_z) \cdot (\mathbf{a}_r \, dS) = (-2\mathbf{a}_z) \cdot (\cos\theta \mathbf{a}_z \, dS) = -2 \cos\theta \, dS$.
    $dS = r^2 \sin\theta \, d\theta \, d\phi = \sin\theta \, d\theta \, d\phi$ for $r=1$.
    $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \int_0^{2\pi} \int_0^{\pi/2} (-2 \cos\theta) (\sin\theta \, d\theta \, d\phi)$
    $= -2 \int_0^{2\pi} d\phi \int_0^{\pi/2} \cos\theta \sin\theta \, d\theta$
    $= -2 (2\pi) \left[ \frac{\sin^2\theta}{2} \right]_0^{\pi/2} = -4\pi \left( \frac{1}{2} - 0 \right) = -2\pi$.

    Now it matches! The key was using the correct outward normal vector for the hemispherical surface.

**Textbook Reference:** Sadiku, Section 4.4; Hayt & Buck, Section 4.4; Griffiths, Section 1.4.

---

## 9. Practice Questions and Answers

**1. Point Transformation:**
Convert the point P(2, 60°, 3) in cylindrical coordinates to rectangular coordinates.
*   **Answer:** $x = \rho \cos \phi = 2 \cos 60^\circ = 2(1/2) = 1$. $y = \rho \sin \phi = 2 \sin 60^\circ = 2(\sqrt{3}/2) = \sqrt{3}$. $z = 3$. So P is (1, $\sqrt{3}$, 3).

**2. Unit Vector Transformation:**
Find $\mathbf{a}_\rho$ and $\mathbf{a}_\phi$ at the point (x=0, y=1) in rectangular coordinates in terms of $\mathbf{a}_x$ and $\mathbf{a}_y$.
*   **Answer:** At (0, 1), $\rho = 1$, $\phi = 90^\circ$.
    $\mathbf{a}_\rho = \cos 90^\circ \mathbf{a}_x + \sin 90^\circ \mathbf{a}_y = 0 \mathbf{a}_x + 1 \mathbf{a}_y = \mathbf{a}_y$.
    $\mathbf{a}_\phi = -\sin 90^\circ \mathbf{a}_x + \cos 90^\circ \mathbf{a}_y = -1 \mathbf{a}_x + 0 \mathbf{a}_y = -\mathbf{a}_x$.

**3. Gradient:**
Find the gradient of the scalar field $V(r, \theta, \phi) = r^2 \cos \theta$ in spherical coordinates.
*   **Answer:**
    $\nabla V = \frac{\partial V}{\partial r} \mathbf{a}_r + \frac{1}{r} \frac{\partial V}{\partial \theta} \mathbf{a}_\theta + \frac{1}{r \sin \theta} \frac{\partial V}{\partial \phi} \mathbf{a}_\phi$
    $\frac{\partial V}{\partial r} = 2r \cos \theta$
    $\frac{\partial V}{\partial \theta} = -r^2 \sin \theta$
    $\frac{\partial V}{\partial \phi} = 0$
    $\nabla V = (2r \cos \theta) \mathbf{a}_r + \frac{1}{r} (-r^2 \sin \theta) \frac{1}{r} \mathbf{a}_\theta + 0$
    $\nabla V = 2r \cos \theta \mathbf{a}_r - \sin \theta \mathbf{a}_\theta$

**4. Divergence:**
Find the divergence of the vector field $\mathbf{A} = (x^2+y^2) \mathbf{a}_x + (y^2+z^2) \mathbf{a}_y + (z^2+x^2) \mathbf{a}_z$.
*   **Answer:**
    $\nabla \cdot \mathbf{A} = \frac{\partial (x^2+y^2)}{\partial x} + \frac{\partial (y^2+z^2)}{\partial y} + \frac{\partial (z^2+x^2)}{\partial z}$
    $\nabla \cdot \mathbf{A} = 2x + 2y + 2z$

**5. Curl:**
Find the curl of the vector field $\mathbf{A} = x^2y \mathbf{a}_x + y^2z \mathbf{a}_y + z^2x \mathbf{a}_z$.
*   **Answer:**
    $A_x = x^2y, A_y = y^2z, A_z = z^2x$
    x-comp: $\frac{\partial (z^2x)}{\partial y} - \frac{\partial (y^2z)}{\partial z} = 0 - y^2 = -y^2$
    y-comp: $\frac{\partial (x^2y)}{\partial z} - \frac{\partial (z^2x)}{\partial x} = 0 - 2zx = -2zx$
    z-comp: $\frac{\partial (y^2z)}{\partial x} - \frac{\partial (x^2y)}{\partial y} = 0 - 2xy = -2xy$
    $\nabla \times \mathbf{A} = -y^2 \mathbf{a}_x - 2zx \mathbf{a}_y - 2xy \mathbf{a}_z$

---

## 10. Important Points to Remember

*   **Coordinate Systems:** Understand the variables, ranges, and basis vectors for rectangular, cylindrical, and spherical systems.
*   **Unit Vector Orthogonality:** $\mathbf{a}_i \cdot \mathbf{a}_j = \delta_{ij}$ (where $\delta_{ij}$ is the Kronecker delta, 1 if $i=j$, 0 if $i \neq j$).
*   **Non-constant Unit Vectors:** Unit vectors in cylindrical and spherical systems are position-dependent. Their transformations are crucial.
*   **Del Operator:** Its form varies with the coordinate system. It is the foundation for gradient, divergence, and curl.
*   **Gradient:** $\nabla V$ is always a vector, normal to the constant-value surface of $V$, pointing in the direction of the greatest increase.
*   **Divergence:** $\nabla \cdot \mathbf{A}$ is a scalar. It indicates source/sink behavior. Positive divergence means a source, negative means a sink.
*   **Curl:** $\nabla \times \mathbf{A}$ is a vector. It indicates rotational tendency. Zero curl means irrotational.
*   **Integral Theorems:**
    *   **Divergence Theorem:** $\iiint_V (\nabla \cdot \mathbf{A}) \, dV = \oint_S (\mathbf{A} \cdot d\mathbf{S})$. Relates volume integral of divergence to surface integral of flux.
    *   **Stoke's Theorem:** $\iint_S (\nabla \times \mathbf{A}) \cdot d\mathbf{S} = \oint_C \mathbf{A} \cdot d\mathbf{l}$. Relates surface integral of curl to line integral of the vector field.
*   **Coordinate System Complexity:** As you move from rectangular to cylindrical to spherical, the forms of the differential operators (especially divergence and curl) become more complex due to the changing geometry and associated scaling factors ($1/\rho$, $1/r$, $1/(r\sin\theta)$).

---
This module lays the essential mathematical groundwork for understanding electromagnetic phenomena. Mastery of these concepts is critical for the subsequent modules.
