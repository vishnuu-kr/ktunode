---
title: "State of strain at a point"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f5"
status: "completed"
scrapedAt: "2026-05-20T18:42:32.812Z"
---
# ADVANCED SOLID MECHANICS - Module 2: Analysis of Strain

## Topic: State of Strain at a Point

This module delves into the analysis of strain, a fundamental concept in understanding how materials deform under applied loads. We will focus on characterizing the deformation at a single point within a body, leading to a comprehensive understanding of the strain tensor.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define and explain the components of strain:** Understand normal strain and shear strain.
*   **Develop the strain tensor:** Comprehend its physical meaning and mathematical representation.
*   **Relate strain components to material deformation:** Visualize how these components describe the stretching, compressing, and shearing of a material element.
*   **Transform strain components:** Calculate strain in different coordinate systems using transformation equations.
*   **Determine principal strains and their directions:** Identify the maximum and minimum normal strains and their orientations.
*   **Calculate strain invariants:** Understand their significance and how they remain constant under coordinate transformations.
*   **Apply Mohr's Circle for strain analysis:** Visualize and calculate strain transformations graphically.
*   **Calculate volumetric strain:** Determine the change in volume of a material element due to strain.

---

### 1. Definition and Components of Strain

Strain is a measure of deformation. It quantifies how much an object deforms relative to its original size. At a point, we analyze strain by considering a small, infinitesimal element.

#### 1.1. Normal Strain ($\epsilon$)

Normal strain measures the change in length per unit length in a specific direction.

*   **Tensile Strain:** Positive normal strain indicates stretching or elongation.
*   **Compressive Strain:** Negative normal strain indicates shortening or compression.

Consider a line segment AB of original length $\Delta s_0$ that deforms to A'B' with length $\Delta s$.
The normal strain in the direction of the line segment is:

$\epsilon = \frac{\Delta s - \Delta s_0}{\Delta s_0}$

*   **Key Concept:** Normal strain is dimensionless, often expressed as $\mu\epsilon$ (microstrain) or as a decimal.

#### 1.2. Shear Strain ($\gamma$)

Shear strain measures the change in the angle between two initially perpendicular line segments. It quantifies the angular distortion.

*   **Positive Shear Strain:** Occurs when the angle between the x-axis and a line in the first quadrant decreases.
*   **Negative Shear Strain:** Occurs when the angle increases.

Consider a small rectangular element with sides parallel to the x and y axes.
*   $\gamma_{xy}$: Represents the change in the angle between the line segment along the x-axis and the line segment along the y-axis.

If the angle between the original x and y axes is $90^\circ$, and after deformation, the angle becomes $90^\circ - \Delta \theta$, then the shear strain $\gamma_{xy}$ is given by:

$\gamma_{xy} = \Delta \theta$ (in radians)

*   **Key Concept:** Shear strain is also dimensionless and is expressed in radians.

---

### 2. The Strain Tensor

The state of strain at a point is completely described by six independent components: three normal strains and three shear strains. These components are conventionally arranged in a symmetric tensor called the **strain tensor** (or Cauchy strain tensor).

For a 3D Cartesian coordinate system (x, y, z):

$$
\begin{bmatrix}
\epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
\epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
\end{bmatrix}
$$

Since the shear strain is symmetric ($\gamma_{xy} = \gamma_{yx}$, $\gamma_{xz} = \gamma_{zx}$, $\gamma_{yz} = \gamma_{zy}$), we can write it as:

$$
\boldsymbol{\epsilon} = \begin{bmatrix}
\epsilon_x & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{xy} & \epsilon_y & \epsilon_{yz} \\
\epsilon_{xz} & \epsilon_{yz} & \epsilon_z
\end{bmatrix}
$$

*   **$\epsilon_x, \epsilon_y, \epsilon_z$**: Normal strains along the x, y, and z axes, respectively.
*   **$\epsilon_{xy}, \epsilon_{xz}, \epsilon_{yz}$**: Shear strains associated with the planes defined by the coordinate axes.

#### 2.1. Physical Interpretation of Strain Components

Imagine a small cubic element at a point.

*   **$\epsilon_x$**: Change in length of the element along the x-axis, divided by its original length along the x-axis.
*   **$\epsilon_y$**: Change in length of the element along the y-axis, divided by its original length along the y-axis.
*   **$\epsilon_z$**: Change in length of the element along the z-axis, divided by its original length along the z-axis.
*   **$\gamma_{xy}$**: Change in the angle between the initially perpendicular sides of the element that lie along the x and y axes.
*   **$\gamma_{xz}$**: Change in the angle between the initially perpendicular sides of the element that lie along the x and z axes.
*   **$\gamma_{yz}$**: Change in the angle between the initially perpendicular sides of the element that lie along the y and z axes.

**Example:**
If a square element in the xy-plane is stretched by $0.001$ in the x-direction and compressed by $0.0005$ in the y-direction, and its right angles distort by $0.0002$ radians (such that the angle between the positive x and y axes decreases), the strain components at that point (in 2D) would be:
$\epsilon_x = +0.001$
$\epsilon_y = -0.0005$
$\gamma_{xy} = +0.0002$

---

### 3. Relating Strain Components to Material Deformation

The strain tensor provides a complete description of how a material element deforms at a point.

*   **Normal strains** cause changes in length.
*   **Shear strains** cause changes in angles (angular distortion).

**Important Point:** For small deformations, the displacement components $u(x, y, z), v(x, y, z), w(x, y, z)$ in the x, y, and z directions are related to the strain components by:

$\epsilon_x = \frac{\partial u}{\partial x}$
$\epsilon_y = \frac{\partial v}{\partial y}$
$\epsilon_z = \frac{\partial w}{\partial z}$

$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$
$\gamma_{yz} = \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}$
$\gamma_{zx} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$

These are the **kinematic relations** for small strains.

---

### 4. Transformation of Strain Components

The strain components measured in one coordinate system (e.g., x, y) might be different in another coordinate system (e.g., x', y') that is rotated with respect to the original one. We need equations to transform these components.

#### 4.1. 2D Strain Transformation

Consider a 2D strain state in the xy-plane. Let the new coordinate system (x', y') be rotated by an angle $\theta$ counterclockwise from the xy system.

The strain components in the x'y' system ($\epsilon_{x'}, \epsilon_{y'}, \gamma_{x'y'}$) can be obtained from the strains in the xy system ($\epsilon_x, \epsilon_y, \gamma_{xy}$) using the following transformation equations:

$\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \frac{\gamma_{xy}}{2} \sin(2\theta)$

$\epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) - \frac{\gamma_{xy}}{2} \sin(2\theta)$

$\frac{\gamma_{x'y'}}{2} = -\frac{\epsilon_x - \epsilon_y}{2} \sin(2\theta) + \frac{\gamma_{xy}}{2} \cos(2\theta)$
or
$\gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta)$

**Example:**
A material has the following in-plane strain components: $\epsilon_x = 200 \mu\epsilon$, $\epsilon_y = -100 \mu\epsilon$, $\gamma_{xy} = 150 \mu\epsilon$. Calculate the strain components in a coordinate system rotated by $\theta = 30^\circ$.

$\cos(2\theta) = \cos(60^\circ) = 0.5$
$\sin(2\theta) = \sin(60^\circ) = 0.866$

$\epsilon_{x'} = \frac{200 + (-100)}{2} + \frac{200 - (-100)}{2} (0.5) + \frac{150}{2} (0.866)$
$\epsilon_{x'} = 50 + 75 + 64.95 = 189.95 \mu\epsilon$

$\epsilon_{y'} = \frac{200 + (-100)}{2} + \frac{200 - (-100)}{2} (0.5) - \frac{150}{2} (0.866)$
$\epsilon_{y'} = 50 + 75 - 64.95 = 60.05 \mu\epsilon$

$\gamma_{x'y'} = -(200 - (-100)) (0.866) + 150 (0.5)$
$\gamma_{x'y'} = -(300)(0.866) + 75 = -259.8 + 75 = -184.8 \mu\epsilon$

#### 4.2. 3D Strain Transformation

In 3D, the transformation involves direction cosines. Let the new axes be x', y', z' with direction cosines $l_x, m_x, n_x$ for x' with respect to x, y, z; $l_y, m_y, n_y$ for y'; and $l_z, m_z, n_z$ for z'.

The general transformation for normal strain in the x' direction is:
$\epsilon_{x'} = l_x^2 \epsilon_x + m_x^2 \epsilon_y + n_x^2 \epsilon_z + 2 l_x m_x \epsilon_{xy} + 2 m_x n_x \epsilon_{yz} + 2 n_x l_x \epsilon_{zx}$

And for shear strain:
$\epsilon_{x'y'} = 2 l_x l_y \epsilon_{xy} + 2 m_x m_y \epsilon_{yz} + 2 n_x n_y \epsilon_{zx} + (l_x m_y + l_y m_x) \epsilon_x + (m_x n_y + m_y n_x) \epsilon_y + (n_x l_y + n_y l_x) \epsilon_z$

This can be expressed more compactly using the strain tensor components and direction cosines:
$\epsilon_{x'} = \sum_{i=1}^3 \sum_{j=1}^3 \alpha_{ix'} \alpha_{jx'} \epsilon_{ij}$
where $\alpha_{ix'}$ is the direction cosine between the i-th original axis and the x'-axis.

---

### 5. Principal Strains and Their Directions

At any point, there exist three mutually perpendicular directions along which the shear strains are zero. The normal strains in these directions are called **principal strains**. These represent the maximum and minimum normal strains at the point.

#### 5.1. Finding Principal Strains

The directions of principal strains are found by setting the shear strains in the transformed system to zero.

In 2D, for the transformed strains $\epsilon_{x'}$ and $\epsilon_{y'}$ to be principal strains, the shear strain $\gamma_{x'y'}$ must be zero. This occurs when:

$\tan(2\theta) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y}$

This equation gives two values for $2\theta$ (differing by $180^\circ$), which correspond to the two principal directions. Let these angles be $\theta_1$ and $\theta_2$.

The principal strains $\epsilon_1$ and $\epsilon_2$ can be found by substituting these angles back into the transformation equations or by using the following formula:

$\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$

These are the roots of the characteristic equation of the strain tensor:
$(\epsilon - \epsilon_x)(\epsilon - \epsilon_y) - (\frac{\gamma_{xy}}{2})^2 = 0$

#### 5.2. Principal Directions

The angle $\theta_p$ of the principal direction (say, for $\epsilon_1$) with respect to the x-axis is given by:

$\tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y}$

The other principal direction will be at $\theta_p + 90^\circ$.

**Example (Continuing from previous):**
$\epsilon_x = 200 \mu\epsilon$, $\epsilon_y = -100 \mu\epsilon$, $\gamma_{xy} = 150 \mu\epsilon$.

$\epsilon_1, \epsilon_2 = \frac{200 + (-100)}{2} \pm \sqrt{\left(\frac{200 - (-100)}{2}\right)^2 + \left(\frac{150}{2}\right)^2}$
$\epsilon_1, \epsilon_2 = 50 \pm \sqrt{(150)^2 + (75)^2}$
$\epsilon_1, \epsilon_2 = 50 \pm \sqrt{22500 + 5625}$
$\epsilon_1, \epsilon_2 = 50 \pm \sqrt{28125}$
$\epsilon_1, \epsilon_2 = 50 \pm 167.7 \mu\epsilon$

$\epsilon_1 = 50 + 167.7 = 217.7 \mu\epsilon$
$\epsilon_2 = 50 - 167.7 = -117.7 \mu\epsilon$

Principal directions:
$\tan(2\theta_p) = \frac{150}{200 - (-100)} = \frac{150}{300} = 0.5$
$2\theta_p = \arctan(0.5) \approx 26.57^\circ$
$\theta_p \approx 13.28^\circ$

So, principal strains are $\epsilon_1 = 217.7 \mu\epsilon$ at $\theta_p = 13.28^\circ$ and $\epsilon_2 = -117.7 \mu\epsilon$ at $\theta_p + 90^\circ = 103.28^\circ$.

#### 5.3. 3D Principal Strains

In 3D, finding principal strains involves solving the characteristic equation of the 3x3 strain tensor:
$\det(\boldsymbol{\epsilon} - \epsilon \mathbf{I}) = 0$
where $\mathbf{I}$ is the identity matrix. This is a cubic equation in $\epsilon$, yielding three principal strains $\epsilon_1, \epsilon_2, \epsilon_3$.

---

### 6. Strain Invariants

Strain invariants are quantities that remain constant regardless of the coordinate system chosen to describe the state of strain. They are derived from the principal strains.

#### 6.1. 2D Strain Invariants

The following are invariants for the 2D strain tensor:

*   **First Invariant (Trace):** $I_1 = \epsilon_x + \epsilon_y = \epsilon_1 + \epsilon_2$
*   **Second Invariant (Determinant):** $I_2 = \epsilon_x \epsilon_y - \left(\frac{\gamma_{xy}}{2}\right)^2 = \epsilon_1 \epsilon_2$

**Important Point:** The sum of normal strains in any two perpendicular directions is constant: $\epsilon_{x'} + \epsilon_{y'} = \epsilon_x + \epsilon_y$. This is a consequence of the first invariant.

#### 6.2. 3D Strain Invariants

For a 3D strain tensor:

*   **First Invariant:** $I_1 = \epsilon_x + \epsilon_y + \epsilon_z = \epsilon_1 + \epsilon_2 + \epsilon_3$
*   **Second Invariant:** $I_2 = (\epsilon_x \epsilon_y + \epsilon_y \epsilon_z + \epsilon_z \epsilon_x) - (\epsilon_{xy}^2 + \epsilon_{yz}^2 + \epsilon_{zx}^2) = (\epsilon_1 \epsilon_2 + \epsilon_2 \epsilon_3 + \epsilon_3 \epsilon_1)$
*   **Third Invariant (Determinant):** $I_3 = \det(\boldsymbol{\epsilon}) = \epsilon_x(\epsilon_y \epsilon_z - \epsilon_{yz}^2) - \epsilon_{xy}(\epsilon_{xy}\epsilon_z - \epsilon_{yz}\epsilon_{zx}) + \epsilon_{xz}(\epsilon_{xy}\epsilon_{yz} - \epsilon_y\epsilon_{zx}) = \epsilon_1 \epsilon_2 \epsilon_3$

The principal strains are the roots of the characteristic equation:
$\epsilon^3 - I_1 \epsilon^2 + I_2 \epsilon - I_3 = 0$

---

### 7. Mohr's Circle for Strain Analysis

Mohr's circle provides a graphical method to determine strain components in any orientation and to find principal strains and their directions. It's analogous to Mohr's circle for stress.

#### 7.1. Construction of Mohr's Circle for Strain (2D)

1.  **Set up Axes:** Draw a horizontal axis for normal strain ($\epsilon$) and a vertical axis for shear strain ($\gamma$).
2.  **Locate Center:** The center of the circle is at $(\frac{\epsilon_x + \epsilon_y}{2}, 0)$.
3.  **Locate Point P:** Choose a point P with coordinates $(\epsilon_x, \gamma_{xy})$. *Note: For plotting conventions, sometimes $\gamma_{xy}/2$ is used on the vertical axis, in which case the point is $(\epsilon_x, \gamma_{xy}/2)$. We'll use $\gamma_{xy}$ here for clarity but be mindful of variations.*
4.  **Draw the Circle:** Draw a circle passing through P and symmetric with respect to the $\epsilon$-axis, with its center at $(\frac{\epsilon_x + \epsilon_y}{2}, 0)$. The radius of the circle is $R = \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$.
5.  **Interpret the Circle:**
    *   **Principal Strains:** The circle intersects the $\epsilon$-axis at two points, which represent the principal strains $\epsilon_1$ and $\epsilon_2$. These are $(\frac{\epsilon_x + \epsilon_y}{2} + R, 0)$ and $(\frac{\epsilon_x + \epsilon_y}{2} - R, 0)$.
    *   **Principal Directions:** The angle $2\theta$ from the point P to the principal strain point on the $\epsilon$-axis corresponds to twice the angle of rotation of the principal direction from the x-axis.

**Convention for plotting $\gamma$:**
*   If the coordinate system is such that a positive rotation of the material element causes a positive shear strain $\gamma_{xy}$, then plot P at $(\epsilon_x, \gamma_{xy})$.
*   If the coordinate system is such that a positive rotation of the material element causes a negative shear strain $\gamma_{xy}$, then plot P at $(\epsilon_x, -\gamma_{xy})$.
*   Often, it's simpler to use $(\epsilon_x, \gamma_{xy}/2)$ for plotting, with $\gamma_{xy}/2$ positive for positive $\gamma_{xy}$. In this case, the radius is the same, and the circle represents $(\epsilon, \gamma/2)$. A point $(\epsilon_{x'}, \gamma_{x'y'}/2)$ on the circle corresponds to a rotation of $2\theta$ from the point $(\epsilon_x, \gamma_{xy}/2)$.

**Example (using Mohr's Circle):**
$\epsilon_x = 200 \mu\epsilon$, $\epsilon_y = -100 \mu\epsilon$, $\gamma_{xy} = 150 \mu\epsilon$.

1.  Center: $(\frac{200 + (-100)}{2}, 0) = (50, 0)$.
2.  Point P: $(200, 150)$.
3.  Radius $R$: $\sqrt{\left(\frac{200 - (-100)}{2}\right)^2 + \left(\frac{150}{2}\right)^2} = \sqrt{(150)^2 + (75)^2} = \sqrt{22500 + 5625} = \sqrt{28125} \approx 167.7$.
4.  Principal Strains:
    $\epsilon_1 = 50 + 167.7 = 217.7 \mu\epsilon$
    $\epsilon_2 = 50 - 167.7 = -117.7 \mu\epsilon$
5.  Principal Directions: The angle $2\theta$ from point P $(200, 150)$ to the $\epsilon$-axis at $\epsilon_1 = 217.7$.
    The horizontal distance from P to the center is $200 - 50 = 150$. The vertical distance is $150$.
    $\tan(2\theta) = \frac{150}{150} = 1$.
    $2\theta = 45^\circ$.
    $\theta = 22.5^\circ$.
    *Wait, this differs from the previous calculation. Let's recheck the previous calculation.*
    Ah, the issue is in interpreting the point on the circle for the angle.
    Let's use $\gamma_{xy}/2$ on the vertical axis:
    Point P: $(200, 150/2) = (200, 75)$.
    Center: $(50, 0)$.
    Radius $R = \sqrt{(200-50)^2 + (75)^2} = \sqrt{150^2 + 75^2} = 167.7$. (This is correct).
    $\tan(2\theta) = \frac{75}{200-50} = \frac{75}{150} = 0.5$.
    $2\theta = \arctan(0.5) \approx 26.57^\circ$.
    $\theta \approx 13.28^\circ$. This matches the previous calculation.

    **Important Point on Mohr's Circle Conventions:** Always be consistent with whether you plot $\gamma$ or $\gamma/2$ on the vertical axis. Plotting $\gamma/2$ is more common in textbooks.

---

### 8. Volumetric Strain ($\epsilon_v$)

Volumetric strain is the change in volume per unit original volume. For small strains, it is the sum of the normal strains along the three principal axes.

$\epsilon_v = \frac{\Delta V}{V_0} \approx \epsilon_1 + \epsilon_2 + \epsilon_3$

In terms of the original strain components:
$\epsilon_v = \epsilon_x + \epsilon_y + \epsilon_z$ (This is the first invariant, $I_1$)

*   **Key Concept:** Volumetric strain is a scalar quantity and represents the relative change in volume.
*   **Isotropic Strain:** If $\epsilon_x = \epsilon_y = \epsilon_z = \epsilon$ and $\gamma_{xy} = \gamma_{yz} = \gamma_{zx} = 0$, the deformation is isotropic, and $\epsilon_v = 3\epsilon$.

**Example:**
If a cube of material experiences principal strains $\epsilon_1 = 100 \mu\epsilon$, $\epsilon_2 = -50 \mu\epsilon$, $\epsilon_3 = 20 \mu\epsilon$, what is the volumetric strain?
$\epsilon_v = 100 \mu\epsilon + (-50 \mu\epsilon) + 20 \mu\epsilon = 70 \mu\epsilon$.
The volume of the cube has increased by $70 \mu\epsilon$.

---

### Practice Questions

**Question 1:**
A rectangular element is subjected to strains: $\epsilon_x = 400 \mu\epsilon$, $\epsilon_y = -200 \mu\epsilon$, and $\gamma_{xy} = 300 \mu\epsilon$.
(a) Calculate the normal strains $\epsilon_{x'}$ and $\epsilon_{y'}$ in a coordinate system rotated by $\theta = 45^\circ$.
(b) Calculate the shear strain $\gamma_{x'y'}$ in the rotated system.

**Question 2:**
Using the strain values from Question 1, determine the principal strains $\epsilon_1$ and $\epsilon_2$ and the orientation of the principal axes ($\theta_p$).

**Question 3:**
For the strain state given in Question 1, calculate the strain invariants $I_1$ and $I_2$.

**Question 4:**
A material element is in a state of plane strain with $\epsilon_x = 100 \mu\epsilon$, $\epsilon_y = 200 \mu\epsilon$, and $\gamma_{xy} = -150 \mu\epsilon$. Use Mohr's circle to find the principal strains and the angle to the maximum principal strain direction.

**Question 5:**
In a 3D stress state, the principal strains are $\epsilon_1 = 500 \mu\epsilon$, $\epsilon_2 = -200 \mu\epsilon$, and $\epsilon_3 = 100 \mu\epsilon$.
(a) What is the volumetric strain?
(b) If these strains are associated with an elastic material, and the bulk modulus $K = 80 \text{ GPa}$, what is the hydrostatic stress $\sigma_H$? (Assume Hooke's Law for hydrostatic stress: $\sigma_H = 3K \epsilon_v$)

---

### Answers to Practice Questions

**Answer 1:**
Given: $\epsilon_x = 400 \mu\epsilon$, $\epsilon_y = -200 \mu\epsilon$, $\gamma_{xy} = 300 \mu\epsilon$, $\theta = 45^\circ$.
$2\theta = 90^\circ$. $\cos(90^\circ) = 0$, $\sin(90^\circ) = 1$.

(a)
$\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \frac{\gamma_{xy}}{2} \sin(2\theta)$
$\epsilon_{x'} = \frac{400 + (-200)}{2} + \frac{400 - (-200)}{2} (0) + \frac{300}{2} (1)$
$\epsilon_{x'} = 100 + 0 + 150 = 250 \mu\epsilon$

$\epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) - \frac{\gamma_{xy}}{2} \sin(2\theta)$
$\epsilon_{y'} = \frac{400 + (-200)}{2} + \frac{400 - (-200)}{2} (0) - \frac{300}{2} (1)$
$\epsilon_{y'} = 100 + 0 - 150 = -50 \mu\epsilon$

(b)
$\gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta)$
$\gamma_{x'y'} = -(400 - (-200)) (1) + 300 (0)$
$\gamma_{x'y'} = -(600)(1) + 0 = -600 \mu\epsilon$

**Answer 2:**
$\epsilon_x = 400 \mu\epsilon$, $\epsilon_y = -200 \mu\epsilon$, $\gamma_{xy} = 300 \mu\epsilon$.

$\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$
$\epsilon_{1,2} = \frac{400 + (-200)}{2} \pm \sqrt{\left(\frac{400 - (-200)}{2}\right)^2 + \left(\frac{300}{2}\right)^2}$
$\epsilon_{1,2} = 100 \pm \sqrt{(300)^2 + (150)^2}$
$\epsilon_{1,2} = 100 \pm \sqrt{90000 + 22500}$
$\epsilon_{1,2} = 100 \pm \sqrt{112500}$
$\epsilon_{1,2} = 100 \pm 335.4 \mu\epsilon$

$\epsilon_1 = 100 + 335.4 = 435.4 \mu\epsilon$
$\epsilon_2 = 100 - 335.4 = -235.4 \mu\epsilon$

Principal Directions:
$\tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{300}{400 - (-200)} = \frac{300}{600} = 0.5$
$2\theta_p = \arctan(0.5) \approx 26.57^\circ$
$\theta_p \approx 13.28^\circ$

So, $\epsilon_1 = 435.4 \mu\epsilon$ at $\theta_p = 13.28^\circ$, and $\epsilon_2 = -235.4 \mu\epsilon$ at $\theta_p + 90^\circ = 103.28^\circ$.

**Answer 3:**
$\epsilon_x = 400 \mu\epsilon$, $\epsilon_y = -200 \mu\epsilon$, $\gamma_{xy} = 300 \mu\epsilon$.

$I_1 = \epsilon_x + \epsilon_y = 400 + (-200) = 200 \mu\epsilon$
$I_2 = \epsilon_x \epsilon_y - \left(\frac{\gamma_{xy}}{2}\right)^2 = (400)(-200) - \left(\frac{300}{2}\right)^2$
$I_2 = -80000 - (150)^2 = -80000 - 22500 = -102500 (\mu\epsilon)^2$

Check with principal strains:
$I_1 = \epsilon_1 + \epsilon_2 = 435.4 + (-235.4) = 200 \mu\epsilon$ (Matches)
$I_2 = \epsilon_1 \epsilon_2 = (435.4)(-235.4) \approx -102500 (\mu\epsilon)^2$ (Matches)

**Answer 4:**
$\epsilon_x = 100 \mu\epsilon$, $\epsilon_y = 200 \mu\epsilon$, $\gamma_{xy} = -150 \mu\epsilon$.

Mohr's Circle Construction (using $\gamma/2$ on vertical axis):
Center: $(\frac{100 + 200}{2}, 0) = (150, 0)$.
Point P: $(100, -150/2) = (100, -75)$.
Radius $R = \sqrt{(100 - 150)^2 + (-75)^2} = \sqrt{(-50)^2 + (-75)^2}$
$R = \sqrt{2500 + 5625} = \sqrt{8125} \approx 90.14 \mu\epsilon$.

Principal Strains:
$\epsilon_1 = 150 + 90.14 = 240.14 \mu\epsilon$
$\epsilon_2 = 150 - 90.14 = 59.86 \mu\epsilon$

Principal Directions:
Angle $2\theta$ from point P $(100, -75)$ to the $\epsilon$-axis at $\epsilon_1 = 240.14$.
Horizontal distance from P to center = $100 - 150 = -50$.
Vertical distance = $-75$.
$\tan(2\theta) = \frac{-75}{-50} = 1.5$.
$2\theta = \arctan(1.5) \approx 56.31^\circ$.
This angle is measured from the x-axis to the point P. To find the angle to the principal strain $\epsilon_1$, we need to consider the angle of rotation from the initial state. The angle from the x-axis to the point P is $\alpha = \arctan(\frac{-75}{-50})$ in the third quadrant, so $\alpha \approx 180^\circ + 56.31^\circ = 236.31^\circ$.
Alternatively, consider the angle $2\theta$ from the point corresponding to $\epsilon_x$ and $\gamma_{xy}/2$ to the point representing $\epsilon_1$ and $0$.
The angle from the x-axis to the point $(100, -75)$ can be found. The center is at $(150,0)$.
$\tan(2\theta) = \frac{-75}{100-150} = \frac{-75}{-50} = 1.5$.
The angle $2\theta$ from the horizontal line through the center to the point $P$ is $\approx 56.31^\circ$. This angle needs to be interpreted carefully relative to the starting point.
The angle to the principal direction $\theta_p$ from the x-axis is such that:
$\tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{-150}{100 - 200} = \frac{-150}{-100} = 1.5$.
$2\theta_p = \arctan(1.5) \approx 56.31^\circ$.
$\theta_p \approx 28.15^\circ$.
This is the direction of $\epsilon_1$. The other principal direction is at $28.15^\circ + 90^\circ = 118.15^\circ$.
So, the maximum principal strain ($\epsilon_1 = 240.14 \mu\epsilon$) is at an angle of approximately $28.15^\circ$ from the x-axis.

**Answer 5:**
Principal strains: $\epsilon_1 = 500 \mu\epsilon$, $\epsilon_2 = -200 \mu\epsilon$, $\epsilon_3 = 100 \mu\epsilon$.

(a) Volumetric strain:
$\epsilon_v = \epsilon_1 + \epsilon_2 + \epsilon_3 = 500 + (-200) + 100 = 400 \mu\epsilon$.

(b) Bulk modulus $K = 80 \text{ GPa} = 80 \times 10^9 \text{ Pa}$.
$\epsilon_v = 400 \mu\epsilon = 400 \times 10^{-6}$.
Hydrostatic stress $\sigma_H = 3K \epsilon_v$.
$\sigma_H = 3 \times (80 \times 10^9 \text{ Pa}) \times (400 \times 10^{-6})$
$\sigma_H = 240 \times 10^9 \times 400 \times 10^{-6} \text{ Pa}$
$\sigma_H = 96000 \times 10^3 \text{ Pa} = 96 \times 10^6 \text{ Pa} = 96 \text{ MPa}$.

---

### Important Points to Remember

*   **Strain is a tensor quantity:** It requires six independent components to describe its state at a point.
*   **Normal strains ($\epsilon$)** measure length changes.
*   **Shear strains ($\gamma$)** measure angular distortions.
*   **Principal strains** are the maximum and minimum normal strains, occurring in directions where shear strains are zero.
*   **Strain invariants** are crucial for characterizing strain independent of the coordinate system.
*   **Mohr's Circle** is a powerful graphical tool for strain transformation and finding principal strains.
*   **Volumetric strain** ($\epsilon_v$) represents the change in volume and is the sum of principal strains (or normal strains along any three orthogonal axes).
*   The kinematic relations connect displacement gradients to strain components.
*   Be mindful of sign conventions for shear strain and the conventions used in plotting Mohr's Circle.

---
