---
title: "Plane state of strain"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f8"
status: "completed"
scrapedAt: "2026-05-20T18:42:34.883Z"
---
# Advanced Solid Mechanics: Module 2 - Analysis of Strain

## Topic: Plane State of Strain

This module focuses on understanding and analyzing strain when the deformation is confined to a plane. This is a common simplification in many engineering problems.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define and explain the concept of a plane state of strain.**
*   **Identify and describe the components of the strain tensor in a plane state of strain.**
*   **Explain the relationship between normal strains and shear strains in a plane state of strain.**
*   **Determine the strains on inclined planes using strain transformation equations.**
*   **Calculate the principal strains and principal directions of strain.**
*   **Apply Mohr's Circle for plane strain analysis.**
*   **Understand the relationship between stress and strain in a plane state of strain (Hooke's Law).**

---

### 1. Concept of Plane State of Strain

**Definition:**
A **plane state of strain** exists when the strain components in one direction (say, the z-direction) are zero, and the strains in the plane perpendicular to this direction are independent of the coordinate in that zero-strain direction.

**Key Characteristics:**

*   **Zero Strain in One Direction:** $\epsilon_{zz} = 0$ and $\gamma_{xz} = \gamma_{yz} = 0$.
*   **Independence of the Zero-Strain Direction:** The strain components in the x-y plane ($\epsilon_{xx}, \epsilon_{yy}, \gamma_{xy}$) do not vary with the z-coordinate.
*   **Dimensional Reduction:** We can analyze the deformation in a 2D plane (x-y plane) as if it were a 3D problem.

**Physical Interpretation:**
Imagine a thin plate subjected to in-plane forces. The thickness of the plate is small, so the strains through its thickness are negligible. Similarly, if we consider a surface of a 3D body and the deformation is entirely within that surface and negligible perpendicular to it, we have a plane strain condition.

**Examples:**

*   **Thick-walled Cylinders:** Under internal or external pressure, the radial and hoop strains are significant, but the axial strain is often negligible due to the constraint of the ends.
*   **Long Dams:** Subjected to hydrostatic pressure, the deformation is primarily in the horizontal plane.
*   **Earth Retaining Walls:** The soil pressure acts in a plane, and the deformation is analyzed in that plane.
*   **Components in Bending:** For a beam in pure bending, the strain in the thickness direction is non-zero. However, if we consider the strain in the cross-section (width and height), and assume the length direction has strains, it's not a plane strain. *Correction: A better example for plane strain is a very long cylinder under pressure where the deformation is uniform along the length.*

---

### 2. Components of the Strain Tensor in a Plane State of Strain

In 3D, the strain state is described by six independent strain components: $\epsilon_{xx}, \epsilon_{yy}, \epsilon_{zz}, \gamma_{xy}, \gamma_{yz}, \gamma_{zx}$.

For a plane state of strain in the x-y plane, the strain components are:

*   **Normal Strains:**
    *   $\epsilon_{xx}$: Normal strain in the x-direction.
    *   $\epsilon_{yy}$: Normal strain in the y-direction.
*   **Shear Strain:**
    *   $\gamma_{xy}$: Shear strain in the xy-plane.

The other strain components are zero: $\epsilon_{zz} = 0$, $\gamma_{yz} = 0$, $\gamma_{zx} = 0$.

The **strain tensor** in Cartesian coordinates for a plane state of strain can be represented as:

$$
[\epsilon] = \begin{bmatrix}
\epsilon_{xx} & \gamma_{xy} & 0 \\
\gamma_{yx} & \epsilon_{yy} & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

Since $\gamma_{xy} = \gamma_{yx}$, we can write:

$$
[\epsilon] = \begin{bmatrix}
\epsilon_{xx} & \gamma_{xy}/2 & 0 \\
\gamma_{xy}/2 & \epsilon_{yy} & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

*Note: Sometimes the shear strain is defined as $\gamma_{xy}$ (engineering shear strain) and sometimes as $2\epsilon_{xy}$ (mathematical shear strain). We will use the engineering shear strain convention where $\gamma_{xy} = \gamma_{yx}$. In the tensor notation above, the off-diagonal components are $\epsilon_{xy}$ and $\epsilon_{yx}$. The engineering shear strain is $\gamma_{xy} = 2\epsilon_{xy}$.*

**Key Components to Remember:**
For plane strain in the x-y plane, we only need to know $\epsilon_{xx}$, $\epsilon_{yy}$, and $\gamma_{xy}$.

---

### 3. Relationship between Normal Strains and Shear Strains

The strain state in a material can be visualized by considering the deformation of a small, initially square element.

*   **Normal Strains ($\epsilon_{xx}, \epsilon_{yy}$):** These represent the elongation or contraction of the material in the x and y directions, respectively.
*   **Shear Strain ($\gamma_{xy}$):** This represents the change in the angle between initially perpendicular lines in the material. A positive $\gamma_{xy}$ means the angle between the positive x-axis and the positive y-axis decreases.

**Example:**
Consider a square element with sides aligned with the x and y axes.
*   If $\epsilon_{xx} = 0.001$ and $\epsilon_{yy} = 0.002$, the element elongates in both directions.
*   If $\gamma_{xy} = 0.005$ radians, the initially right angles of the element will deform. The top-right corner will move such that the angle between the deformed x-axis and y-axis is $90^\circ - 0.005$ radians.

---

### 4. Strain Transformation Equations for Plane Strain

Just as we can transform stresses to different orientations, we can transform strains. Consider a new coordinate system $(x', y')$ rotated by an angle $\theta$ with respect to the original $(x, y)$ system.

**Derivation (Conceptual):**
Consider a small strain element in the x-y plane. We can analyze the normal strain ($\epsilon_{x'x'}$) and shear strain ($\gamma_{x'y'}$) on a plane inclined at an angle $\theta$ to the x-axis. This is done by considering the deformation of a triangular element of the material.

**Transformation Equations:**

The normal strain in the $x'$ direction ($\epsilon_{x'x'}$) is given by:

$$
\epsilon_{x'x'} = \epsilon_{xx} \cos^2 \theta + \epsilon_{yy} \sin^2 \theta + \gamma_{xy} \sin \theta \cos \theta
$$

Using trigonometric identities ($\cos^2 \theta = \frac{1+\cos 2\theta}{2}$, $\sin^2 \theta = \frac{1-\cos 2\theta}{2}$, $2\sin\theta\cos\theta = \sin 2\theta$):

$$
\epsilon_{x'x'} = \epsilon_{xx} \left(\frac{1+\cos 2\theta}{2}\right) + \epsilon_{yy} \left(\frac{1-\cos 2\theta}{2}\right) + \frac{\gamma_{xy}}{2} \sin 2\theta
$$

$$
\epsilon_{x'x'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} + \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos 2\theta + \frac{\gamma_{xy}}{2} \sin 2\theta \quad (*)
$$

The shear strain in the $x'y'$ plane ($\gamma_{x'y'}$) is given by:

$$
\gamma_{x'y'} = -2(\epsilon_{xx} - \epsilon_{yy}) \sin \theta \cos \theta + \gamma_{xy} (\cos^2 \theta - \sin^2 \theta)
$$

$$
\gamma_{x'y'} = -(\epsilon_{xx} - \epsilon_{yy}) \sin 2\theta + \gamma_{xy} \cos 2\theta \quad (**)
$$

**Important Note on Shear Strain Convention:**
The derivation above uses the engineering shear strain. If you encounter a source using the tensor component $\epsilon_{xy}$, then $\gamma_{xy} = 2\epsilon_{xy}$. The equation for shear strain would then be:
$\gamma_{x'y'} = 2\epsilon_{x'y'} = 2(-\epsilon_{xx} \sin \theta \cos \theta + \epsilon_{xy}(\cos^2 \theta - \sin^2 \theta) + \epsilon_{yy} \sin \theta \cos \theta)$.
This leads to $\gamma_{x'y'} = -(\epsilon_{xx} - \epsilon_{yy})\sin 2\theta + \gamma_{xy}\cos 2\theta$. The form remains the same.

**Transformation for $\epsilon_{y'y'}$:**
To find $\epsilon_{y'y'}$, replace $\theta$ with $(\theta + 90^\circ)$ in the equation for $\epsilon_{x'x'}$.
$\cos^2(\theta + 90^\circ) = (-\sin \theta)^2 = \sin^2 \theta$
$\sin^2(\theta + 90^\circ) = (\cos \theta)^2 = \cos^2 \theta$
$\sin(\theta + 90^\circ) = \cos \theta$, $\cos(\theta + 90^\circ) = -\sin \theta$

$$
\epsilon_{y'y'} = \epsilon_{xx} \sin^2 \theta + \epsilon_{yy} \cos^2 \theta - \gamma_{xy} \sin \theta \cos \theta
$$

$$
\epsilon_{y'y'} = \frac{\epsilon_{xx} + \epsilon_{yy}}{2} - \frac{\epsilon_{xx} - \epsilon_{yy}}{2} \cos 2\theta - \frac{\gamma_{xy}}{2} \sin 2\theta
$$

**Invariant Property:**
Notice that $\epsilon_{xx} + \epsilon_{yy} = \epsilon_{x'x'} + \epsilon_{y'y'}$. This sum is an invariant under coordinate transformations in plane strain.

**Summary of Transformation Equations:**

Let $\epsilon_x = \epsilon_{xx}$, $\epsilon_y = \epsilon_{yy}$, $\gamma_{xy}$ be the strains in the original system.
Let $\epsilon_{x'} = \epsilon_{x'x'}$, $\epsilon_{y'} = \epsilon_{y'y'}$, $\gamma_{x'y'}$ be the strains in the transformed system rotated by $\theta$.

$$
\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos 2\theta + \frac{\gamma_{xy}}{2} \sin 2\theta
$$

$$
\epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} - \frac{\epsilon_x - \epsilon_y}{2} \cos 2\theta - \frac{\gamma_{xy}}{2} \sin 2\theta
$$

$$
\gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin 2\theta + \gamma_{xy} \cos 2\theta
$$

**Invariant:** $\epsilon_x + \epsilon_y = \epsilon_{x'} + \epsilon_{y'}$

---

### 5. Principal Strains and Principal Directions of Strain

**Definition:**
**Principal strains** are the maximum and minimum normal strains at a point. At these directions, the shear strain is zero. The directions in which these principal strains occur are called the **principal directions of strain**.

**Finding Principal Strains and Directions:**
To find the principal strains, we need to find the angle $\theta$ for which the shear strain $\gamma_{x'y'}$ is zero. From the transformation equation for shear strain:

$$
\gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin 2\theta + \gamma_{xy} \cos 2\theta = 0
$$

$$
\tan 2\theta = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y}
$$

This equation gives two values for $2\theta$ in the range $[0, 360^\circ]$, which correspond to two principal directions separated by $90^\circ$. Let these angles be $2\theta_p$ and $2\theta_p + 180^\circ$.

Once the principal directions ($\theta_p$) are found, we can substitute them back into the strain transformation equation for $\epsilon_{x'x'}$ to find the principal strains, denoted as $\epsilon_1$ (maximum normal strain) and $\epsilon_2$ (minimum normal strain).

$$
\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos 2\theta + \frac{\gamma_{xy}}{2} \sin 2\theta
$$

To evaluate this without explicitly finding $\theta$, we can use the identity:
If $\tan 2\theta = \frac{A}{B}$, then $\cos 2\theta = \frac{B}{\sqrt{A^2+B^2}}$ and $\sin 2\theta = \frac{A}{\sqrt{A^2+B^2}}$ (for one orientation).

Let $A = \gamma_{xy}$ and $B = \epsilon_x - \epsilon_y$.
The radius $R = \frac{1}{2} \sqrt{(\epsilon_x - \epsilon_y)^2 + \gamma_{xy}^2}$.

$$
\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}
$$

Let $\epsilon_{avg} = \frac{\epsilon_x + \epsilon_y}{2}$ and $R = \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$.

$$
\epsilon_1 = \epsilon_{avg} + R
$$

$$
\epsilon_2 = \epsilon_{avg} - R
$$

**Principal Strains (Maximum and Minimum Normal Strains):**

$$
\epsilon_1 = \frac{\epsilon_x + \epsilon_y}{2} + \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}
$$

$$
\epsilon_2 = \frac{\epsilon_x + \epsilon_y}{2} - \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}
$$

**Principal Directions:**

$$
\tan 2\theta_p = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y}
$$

The angle $\theta_p$ gives the direction of $\epsilon_1$ with respect to the original x-axis. The other principal direction is $\theta_p + 90^\circ$.

**Key Points:**
*   Principal strains are extrema of normal strain.
*   At principal directions, shear strain is zero.
*   The sum of principal strains is equal to the sum of strains in any two perpendicular directions ($\epsilon_1 + \epsilon_2 = \epsilon_x + \epsilon_y$).

---

### 6. Mohr's Circle for Plane Strain Analysis

**Concept:**
Mohr's Circle is a graphical method that represents the strain transformation equations. It provides a visual way to determine strains on inclined planes and to find principal strains and directions.

**Construction:**
1.  **Axes:** Draw a horizontal axis representing normal strain ($\epsilon$) and a vertical axis representing shear strain ($\gamma$).
2.  **Center of the Circle:** Locate the center of the circle at $(\frac{\epsilon_x + \epsilon_y}{2}, 0)$.
3.  **Radius:** The radius of the circle is $R = \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$.
4.  **Plot Points:**
    *   Plot a point representing the strain state in the original x-y system. For the $(x, y)$ state, the coordinates are $(\epsilon_x, \gamma_{xy})$.
    *   Plot another point representing the strain state in the $y$-direction. For the $(y, x)$ state, the coordinates are $(\epsilon_y, -\gamma_{xy})$. (Note the sign convention for shear strain when swapping axes).
    *   These two points will lie on the circle.

**Interpretation:**
*   **Any point on the circle** represents the strain state ($\epsilon_{x'}, \gamma_{x'y'}$) for a plane rotated by a certain angle $\theta$ from the original x-axis.
*   **Horizontal positions** on the circle represent normal strains.
*   **Vertical positions** on the circle represent shear strains.
*   **Principal Strains ($\epsilon_1, \epsilon_2$):** These are the horizontal intercepts of the circle. $\epsilon_1$ is the rightmost point, and $\epsilon_2$ is the leftmost point.
*   **Principal Directions:** The angle $2\theta_p$ is the angle from the point $(\epsilon_x, \gamma_{xy})$ to the point $(\epsilon_1, 0)$ on the circle. Remember that on Mohr's Circle, a rotation of $\theta$ in the physical plane corresponds to a rotation of $2\theta$ on the circle.
    *   If you are measuring $\theta$ from the x-axis, and the point $(\epsilon_x, \gamma_{xy})$ is on the circle, the angle from this point to the horizontal axis (where shear is zero, representing principal strain) is $2\theta_p$.
    *   **Convention:** If $\gamma_{xy}$ is positive, the angle from the $(\epsilon_x, \gamma_{xy})$ point to the $(\epsilon_1, 0)$ point is measured counterclockwise on Mohr's circle. This corresponds to a counterclockwise rotation $\theta_p$ in the physical plane.

**Steps for Using Mohr's Circle for Strain:**

1.  **Calculate:** $\epsilon_{avg} = \frac{\epsilon_x + \epsilon_y}{2}$, $\Delta \epsilon = \frac{\epsilon_x - \epsilon_y}{2}$, $R = \sqrt{\Delta\epsilon^2 + (\frac{\gamma_{xy}}{2})^2}$.
2.  **Center:** $(\epsilon_{avg}, 0)$.
3.  **Radius:** $R$.
4.  **Plot:** Plot point P1 $(\epsilon_x, \gamma_{xy}/2)$ and P2 $(\epsilon_y, -\gamma_{xy}/2)$. (Note the use of $\gamma_{xy}/2$ for plotting when the circle represents tensor components). *Correction: It's simpler to use $(\epsilon_x, \gamma_{xy})$ and $(\epsilon_y, -\gamma_{xy})$ on a $\epsilon$ vs $\gamma$ diagram.*

    **Corrected Plotting on $\epsilon$ vs $\gamma$ diagram:**
    *   Center: $(\frac{\epsilon_x + \epsilon_y}{2}, 0)$
    *   Radius: $R = \sqrt{(\frac{\epsilon_x - \epsilon_y}{2})^2 + (\frac{\gamma_{xy}}{2})^2}$
    *   Plot point $A = (\epsilon_x, \gamma_{xy})$ and point $B = (\epsilon_y, -\gamma_{xy})$.

5.  **Principal Strains:** The horizontal intercepts are $\epsilon_1 = \epsilon_{avg} + R$ and $\epsilon_2 = \epsilon_{avg} - R$.
6.  **Principal Directions:** The angle $2\theta_p$ is measured on the circle from point $A$ to the point $(\epsilon_1, 0)$. If $\gamma_{xy}$ is positive, this angle is measured counterclockwise. The corresponding physical angle is $\theta_p$.

**Example:**
Given $\epsilon_x = 200 \mu\epsilon$, $\epsilon_y = 400 \mu\epsilon$, $\gamma_{xy} = 300 \mu\epsilon$.

1.  $\epsilon_{avg} = \frac{200 + 400}{2} = 300 \mu\epsilon$.
2.  $\Delta \epsilon = \frac{200 - 400}{2} = -100 \mu\epsilon$.
3.  $R = \sqrt{(-100)^2 + (\frac{300}{2})^2} = \sqrt{10000 + 22500} = \sqrt{32500} \approx 180.3 \mu\epsilon$.

4.  **Principal Strains:**
    *   $\epsilon_1 = 300 + 180.3 = 480.3 \mu\epsilon$.
    *   $\epsilon_2 = 300 - 180.3 = 119.7 \mu\epsilon$.

5.  **Principal Directions:**
    *   $\tan 2\theta_p = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{300}{200 - 400} = \frac{300}{-200} = -1.5$.
    *   $2\theta_p = \arctan(-1.5) \approx -56.3^\circ$ or $180^\circ - 56.3^\circ = 123.7^\circ$.
    *   If we take $2\theta_p = 123.7^\circ$, then $\theta_p = 61.85^\circ$. This is the direction of maximum strain ($\epsilon_1$).
    *   The other direction is $\theta_p + 90^\circ = 151.85^\circ$.

**To find strains on an inclined plane (e.g., $\theta = 30^\circ$):**
On Mohr's Circle, go to the point corresponding to $2\theta = 60^\circ$ (counterclockwise if $\theta$ is counterclockwise).
*   The $\epsilon$ coordinate of this point is $\epsilon_{x'}$.
*   The $\gamma$ coordinate of this point is $\gamma_{x'y'}$.

**Important Considerations for Mohr's Circle:**
*   **Sign Convention for Shear Strain:** Be consistent. On the circle, $\gamma_{xy}$ is plotted directly. If you rotate from the x-axis by $\theta$ counterclockwise, the new axes are $x'$ and $y'$. The shear strain $\gamma_{x'y'}$ is related to the angle on the circle from the $x$-axis point to the $x'$-axis point.
*   **Double Angle:** Remember all angles on the circle are $2\theta$.

---

### 7. Relationship between Stress and Strain (Hooke's Law for Plane Strain)

For an **isotropic, linear elastic** material, Hooke's Law relates stress and strain. For a plane state of strain, we have the following relations:

**Isotropic Material Properties:**
*   $E$: Young's Modulus
*   $\nu$: Poisson's Ratio

**Strain Components in terms of Stress Components:**

$$
\epsilon_{xx} = \frac{1}{E} [\sigma_{xx} - \nu (\sigma_{yy} + \sigma_{zz})]
$$

$$
\epsilon_{yy} = \frac{1}{E} [\sigma_{yy} - \nu (\sigma_{xx} + \sigma_{zz})]
$$

$$
\epsilon_{zz} = \frac{1}{E} [\sigma_{zz} - \nu (\sigma_{xx} + \sigma_{yy})]
$$

$$
\gamma_{xy} = \frac{1}{G} \tau_{xy} = \frac{2(1+\nu)}{E} \tau_{xy}
$$

(where $G$ is the shear modulus, and $\tau_{xy}$ is the shear stress)

**For Plane Strain ($\epsilon_{zz} = 0, \gamma_{yz} = 0, \gamma_{zx} = 0$):**

From $\epsilon_{zz} = 0$:
$$
0 = \frac{1}{E} [\sigma_{zz} - \nu (\sigma_{xx} + \sigma_{yy})] \implies \sigma_{zz} = \nu (\sigma_{xx} + \sigma_{yy})
$$

Now substitute $\sigma_{zz}$ into the equations for $\epsilon_{xx}$ and $\epsilon_{yy}$:

$$
\epsilon_{xx} = \frac{1}{E} [\sigma_{xx} - \nu (\sigma_{yy} + \nu (\sigma_{xx} + \sigma_{yy}))]
$$

$$
\epsilon_{xx} = \frac{1}{E} [\sigma_{xx} - \nu \sigma_{yy} - \nu^2 \sigma_{xx} - \nu^2 \sigma_{yy}]
$$

$$
\epsilon_{xx} = \frac{1}{E} [(1 - \nu^2) \sigma_{xx} - \nu (1 + \nu) \sigma_{yy}]
$$

$$
\epsilon_{xx} = \frac{1-\nu^2}{E} \left[ \sigma_{xx} - \frac{\nu}{1-\nu} \sigma_{yy} \right]
$$

Similarly for $\epsilon_{yy}$:

$$
\epsilon_{yy} = \frac{1-\nu^2}{E} \left[ \sigma_{yy} - \frac{\nu}{1-\nu} \sigma_{xx} \right]
$$

And for shear strain:
$$
\gamma_{xy} = \frac{1}{G} \tau_{xy} = \frac{2(1+\nu)}{E} \tau_{xy}
$$

**Summary of Hooke's Law for Plane Strain:**

Let $\sigma_x = \sigma_{xx}$, $\sigma_y = \sigma_{yy}$, $\tau_{xy} = \tau_{xy}$.
The constitutive relations are:

$$
\epsilon_x = \frac{1-\nu^2}{E} (\sigma_x - \frac{\nu}{1-\nu} \sigma_y)
$$

$$
\epsilon_y = \frac{1-\nu^2}{E} (\sigma_y - \frac{\nu}{1-\nu} \sigma_x)
$$

$$
\gamma_{xy} = \frac{2(1+\nu)}{E} \tau_{xy}
$$

**To express stress in terms of strain:**
We can invert these equations. Let $K = \frac{E}{1-\nu^2}$ and $\alpha = \frac{\nu}{1-\nu}$.

$$
\epsilon_x = \frac{K}{E} (\sigma_x - \alpha \sigma_y) \implies \epsilon_x = \frac{1}{E/(1-\nu^2)} (\sigma_x - \frac{\nu}{1-\nu} \sigma_y)
$$

$$
\sigma_x = \frac{E}{1-\nu^2} (\epsilon_x + \nu \epsilon_y)
$$

$$
\sigma_y = \frac{E}{1-\nu^2} (\epsilon_y + \nu \epsilon_x)
$$

$$
\tau_{xy} = \frac{E}{2(1+\nu)} \gamma_{xy}
$$

**Key Points for Hooke's Law in Plane Strain:**
*   The $\sigma_{zz}$ component is not zero, but is related to the in-plane stresses due to the plane strain condition.
*   The effective Young's Modulus and Poisson's ratio are modified due to the constraint in the z-direction.

---

### Important Points to Remember:

*   **Plane Strain:** $\epsilon_{zz} = 0, \gamma_{xz} = 0, \gamma_{yz} = 0$. Deformation is confined to a plane.
*   **Strain Components:** $\epsilon_{xx}, \epsilon_{yy}, \gamma_{xy}$.
*   **Transformation Equations:** Relate strains on rotated planes. $\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos 2\theta + \frac{\gamma_{xy}}{2} \sin 2\theta$.
*   **Principal Strains:** Max/min normal strains, zero shear. $\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}$.
*   **Principal Directions:** $\tan 2\theta_p = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y}$.
*   **Mohr's Circle:** Graphical tool for strain transformations. Center at $(\frac{\epsilon_x + \epsilon_y}{2}, 0)$, radius $R = \sqrt{(\frac{\epsilon_x - \epsilon_y}{2})^2 + (\frac{\gamma_{xy}}{2})^2}$.
*   **Hooke's Law (Plane Strain):** Relates in-plane stress and strain, with modified material properties due to $\epsilon_{zz} \neq 0$. $\sigma_{zz} = \nu (\sigma_{xx} + \sigma_{yy})$.

---

### Practice Questions and Exercises:

**Question 1:**
At a point in a material, the plane strain components are measured as $\epsilon_{xx} = 100 \mu\epsilon$, $\epsilon_{yy} = -50 \mu\epsilon$, and $\gamma_{xy} = 75 \mu\epsilon$. Calculate the normal strain on a plane inclined at $\theta = 30^\circ$ counterclockwise from the x-axis.

**Answer 1:**
Using the strain transformation equation:
$\epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos 2\theta + \frac{\gamma_{xy}}{2} \sin 2\theta$
$\epsilon_x = 100 \mu\epsilon$, $\epsilon_y = -50 \mu\epsilon$, $\gamma_{xy} = 75 \mu\epsilon$, $\theta = 30^\circ$.
$2\theta = 60^\circ$.

$\epsilon_{x'} = \frac{100 + (-50)}{2} + \frac{100 - (-50)}{2} \cos 60^\circ + \frac{75}{2} \sin 60^\circ$
$\epsilon_{x'} = \frac{50}{2} + \frac{150}{2} (0.5) + 37.5 (\frac{\sqrt{3}}{2})$
$\epsilon_{x'} = 25 + 75 (0.5) + 37.5 (0.866)$
$\epsilon_{x'} = 25 + 37.5 + 32.475$
$\epsilon_{x'} = 94.975 \mu\epsilon$

**Question 2:**
For the same strain state as in Question 1 ($\epsilon_{xx} = 100 \mu\epsilon$, $\epsilon_{yy} = -50 \mu\epsilon$, $\gamma_{xy} = 75 \mu\epsilon$), determine the principal strains and the orientation of the principal directions.

**Answer 2:**
1.  **Calculate $\epsilon_{avg}$ and $R$**:
    $\epsilon_{avg} = \frac{100 + (-50)}{2} = 25 \mu\epsilon$.
    $R = \sqrt{\left(\frac{100 - (-50)}{2}\right)^2 + \left(\frac{75}{2}\right)^2}$
    $R = \sqrt{\left(\frac{150}{2}\right)^2 + (37.5)^2}$
    $R = \sqrt{(75)^2 + (37.5)^2} = \sqrt{5625 + 1406.25} = \sqrt{7031.25} \approx 83.85 \mu\epsilon$.

2.  **Principal Strains**:
    $\epsilon_1 = \epsilon_{avg} + R = 25 + 83.85 = 108.85 \mu\epsilon$.
    $\epsilon_2 = \epsilon_{avg} - R = 25 - 83.85 = -58.85 \mu\epsilon$.

3.  **Principal Directions**:
    $\tan 2\theta_p = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{75}{100 - (-50)} = \frac{75}{150} = 0.5$.
    $2\theta_p = \arctan(0.5) \approx 26.57^\circ$.
    $\theta_p \approx 13.29^\circ$.

    The principal strains are $\epsilon_1 = 108.85 \mu\epsilon$ in the direction $\theta_p = 13.29^\circ$ and $\epsilon_2 = -58.85 \mu\epsilon$ in the direction $\theta_p + 90^\circ = 103.29^\circ$.

**Question 3:**
Using Mohr's Circle, verify the principal strains calculated in Question 2.

**Answer 3:**
1.  **Center:** $(\frac{100 + (-50)}{2}, 0) = (25, 0)$.
2.  **Radius:** $R \approx 83.85$.
3.  **Plot Points (on $\epsilon$ vs $\gamma$ axes):**
    *   Point A: $(\epsilon_x, \gamma_{xy}) = (100, 75)$.
    *   Point B: $(\epsilon_y, -\gamma_{xy}) = (-50, -75)$.
4.  **Draw the Circle:**
    *   The horizontal intercepts are the principal strains.
    *   Right intercept: $\epsilon_1 = 25 + 83.85 = 108.85 \mu\epsilon$.
    *   Left intercept: $\epsilon_2 = 25 - 83.85 = -58.85 \mu\epsilon$.
5.  **Orientation:** The angle $2\theta_p$ on the circle is the angle from the point $(100, 75)$ to the point $(108.85, 0)$. The horizontal distance from the center to point A is $100 - 25 = 75$. The vertical distance is $75$.
    $\tan(2\theta_p) = \frac{75}{75} = 1$. *Correction in calculation: The vertical coordinate for plotting on the standard Mohr's circle should be $\gamma_{xy}/2$.*

    **Corrected Mohr's Circle Plotting:**
    Use a $\epsilon$ vs $\gamma/2$ diagram.
    *   Center: $(\frac{\epsilon_x + \epsilon_y}{2}, 0) = (25, 0)$.
    *   Radius: $R = \sqrt{(\frac{\epsilon_x - \epsilon_y}{2})^2 + (\frac{\gamma_{xy}}{2})^2} = \sqrt{(75)^2 + (37.5)^2} = 83.85 \mu\epsilon$.
    *   Plot Point P1: $(\epsilon_x, \gamma_{xy}/2) = (100, 75/2) = (100, 37.5)$.
    *   Plot Point P2: $(\epsilon_y, -\gamma_{xy}/2) = (-50, -75/2) = (-50, -37.5)$.
    *   The horizontal intercepts are $\epsilon_1 = 25 + 83.85 = 108.85$ and $\epsilon_2 = 25 - 83.85 = -58.85$.
    *   To find the angle: The horizontal displacement from the center to P1 is $100 - 25 = 75$. The vertical displacement from the center to P1 is $37.5$.
    $\tan(2\theta_p) = \frac{37.5}{75} = 0.5$.
    $2\theta_p = \arctan(0.5) \approx 26.57^\circ$.
    $\theta_p \approx 13.29^\circ$.
    This confirms the previous calculation.

**Question 4:**
For a plane strain condition in an aluminum alloy ($\nu = 0.3$), the stresses are $\sigma_{xx} = 100$ MPa, $\sigma_{yy} = 50$ MPa, and $\tau_{xy} = 25$ MPa. If $E = 70$ GPa, calculate the normal strains $\epsilon_{xx}$ and $\epsilon_{yy}$.

**Answer 4:**
Using Hooke's Law for Plane Strain:
$\epsilon_x = \frac{1-\nu^2}{E} (\sigma_x - \frac{\nu}{1-\nu} \sigma_y)$
$\epsilon_y = \frac{1-\nu^2}{E} (\sigma_y - \frac{\nu}{1-\nu} \sigma_x)$

$E = 70 \times 10^3$ MPa.
$\nu = 0.3$.
$1-\nu^2 = 1 - (0.3)^2 = 1 - 0.09 = 0.91$.
$\frac{\nu}{1-\nu} = \frac{0.3}{1-0.3} = \frac{0.3}{0.7} = \frac{3}{7}$.

$\epsilon_x = \frac{0.91}{70 \times 10^3} (100 - \frac{3}{7} \times 50)$
$\epsilon_x = \frac{0.91}{70000} (100 - \frac{150}{7})$
$\epsilon_x = \frac{0.91}{70000} (100 - 21.4286)$
$\epsilon_x = \frac{0.91}{70000} (78.5714) \approx 1.019 \times 10^{-3} = 1019 \mu\epsilon$.

$\epsilon_y = \frac{0.91}{70 \times 10^3} (50 - \frac{3}{7} \times 100)$
$\epsilon_y = \frac{0.91}{70000} (50 - \frac{300}{7})$
$\epsilon_y = \frac{0.91}{70000} (50 - 42.8571)$
$\epsilon_y = \frac{0.91}{70000} (7.1429) \approx 0.0928 \times 10^{-3} = 92.8 \mu\epsilon$.

The shear strain:
$\gamma_{xy} = \frac{2(1+\nu)}{E} \tau_{xy}$
$\gamma_{xy} = \frac{2(1+0.3)}{70 \times 10^3} \times 25$
$\gamma_{xy} = \frac{2(1.3)}{70000} \times 25 = \frac{2.6}{70000} \times 25 \approx 0.9286 \times 10^{-3} = 928.6 \mu\epsilon$.

---
This concludes the study notes for Plane State of Strain. Remember to practice the transformation equations and Mohr's Circle as they are fundamental tools in strain analysis.
