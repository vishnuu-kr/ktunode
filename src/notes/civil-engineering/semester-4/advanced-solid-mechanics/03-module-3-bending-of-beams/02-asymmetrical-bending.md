---
title: "Asymmetrical bending"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a01"
status: "completed"
scrapedAt: "2026-05-20T18:42:40.489Z"
---
# ADVANCED SOLID MECHANICS - Module 3: Bending of Beams

## Topic: Asymmetrical Bending

---

### **Learning Outcomes:**

*   Understand the concept of asymmetrical bending and differentiate it from symmetrical bending.
*   Determine the neutral axis and the distribution of stresses in a beam subjected to bending about an axis that does not coincide with a principal axis.
*   Calculate the maximum tensile and compressive stresses in a beam under asymmetrical bending.
*   Analyze beams with asymmetrical cross-sections and unsymmetrical loading conditions.
*   Understand the application of flexure formula in asymmetrical bending scenarios.

---

### **1. Introduction to Asymmetrical Bending**

#### **1.1 Symmetrical vs. Asymmetrical Bending**

*   **Symmetrical Bending:**
    *   Occurs when the bending moment is applied about an axis that passes through the centroid of the cross-section and is also a principal axis.
    *   The neutral axis (NA) coincides with the centroidal axis.
    *   The cross-section is symmetrical about the axis of bending.
    *   Stress distribution is symmetrical about the neutral axis (linear variation).
    *   **Example:** Bending of an I-beam about its major axis, or a rectangular beam about its axis of symmetry parallel to the shorter side.

*   **Asymmetrical Bending (Oblique Bending):**
    *   Occurs when the bending moment is applied about an axis that does *not* coincide with a principal axis of the cross-section, or when the applied load creates a moment about an axis that is not a principal axis.
    *   The neutral axis does *not* coincide with the centroidal axis.
    *   The cross-section may or may not be symmetrical about the axis of bending.
    *   Stress distribution is generally not symmetrical.
    *   **Example:** Bending of a rectangular beam about its diagonal, or an L-beam subjected to a load that creates a moment about an axis not passing through the centroid or a principal axis.

#### **1.2 Key Concepts**

*   **Centroid (Centroidal Axis):** The geometric center of the cross-section.
*   **Principal Axes:** A pair of perpendicular axes passing through the centroid of a cross-section about which the moment of inertia is either maximized or minimized. For a cross-section with at least one axis of symmetry, that axis of symmetry is a principal axis. For a general cross-section, principal axes are rotated relative to any assumed axes.
*   **Neutral Axis (NA):** The axis within the cross-section where the longitudinal stress is zero during bending. In asymmetrical bending, the NA is generally *not* the centroidal axis and is perpendicular to the plane of the applied bending moment.
*   **Moment of Inertia about Arbitrary Axes (Products of Inertia):** To analyze asymmetrical bending, we need to consider the moments of inertia about rotated axes and the products of inertia.

---

### **2. Principles of Asymmetrical Bending**

#### **2.1 General Flexure Formula**

The fundamental flexure formula for bending is:

$\sigma_x = -\frac{My}{I}$

Where:
*   $\sigma_x$ is the normal stress in the x-direction (longitudinal).
*   $M$ is the bending moment.
*   $y$ is the distance from the neutral axis.
*   $I$ is the moment of inertia about the neutral axis.

**Important Note:** In asymmetrical bending, the bending moment $M$ is often resolved into components along the principal axes.

#### **2.2 Resolution of Bending Moment**

When a bending moment $M$ is applied in an arbitrary direction, it is convenient to resolve it into components along the principal axes of the cross-section, say $M_u$ and $M_v$.

Let the principal axes be $u$ and $v$. If the bending moment $M$ makes an angle $\theta$ with the $u$-axis, then:

*   $M_u = M \cos \theta$ (Moment about the $u$-axis)
*   $M_v = M \sin \theta$ (Moment about the $v$-axis)

#### **2.3 Stress Distribution in Asymmetrical Bending**

The total stress at any point $(u, v)$ in the cross-section (where $u$ and $v$ are coordinates along the principal axes) is the sum of the stresses caused by the moments $M_u$ and $M_v$.

The stress due to $M_u$ is: $\sigma_u = -\frac{M_u v}{I_u}$
The stress due to $M_v$ is: $\sigma_v = -\frac{M_v u}{I_v}$

The total longitudinal stress $\sigma_x$ at a point with coordinates $(u, v)$ relative to the principal axes is:

$\sigma_x = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v}$

Where:
*   $M_u$ and $M_v$ are the bending moments about the principal axes $u$ and $v$, respectively.
*   $I_u$ and $I_v$ are the moments of inertia about the principal axes $u$ and $v$, respectively.
*   $u$ and $v$ are the coordinates of the point relative to the centroidal axes $u$ and $v$.

#### **2.4 Location of the Neutral Axis**

The neutral axis is the locus of points where $\sigma_x = 0$.
Setting the stress equation to zero:

$0 = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v}$

$\frac{M_u v}{I_u} = -\frac{M_v u}{I_v}$

$\frac{v}{u} = -\frac{M_v I_u}{M_u I_v}$

This equation represents a straight line passing through the origin (the centroid). The slope of the neutral axis is given by $m = \frac{v}{u} = -\frac{M_v I_u}{M_u I_v}$.

**Important Point:** The neutral axis is perpendicular to the plane of the applied bending moment. If the bending moment $M$ is in the $xy$-plane, then the neutral axis will lie in a plane defined by the centroid and a direction perpendicular to the $xy$-plane.

#### **2.5 Determining Principal Axes**

For a general cross-section, the principal axes might not be obvious. They can be found using the following formulas:

*   Let $I_x$, $I_y$ be the moments of inertia about the $x$ and $y$ centroidal axes.
*   Let $I_{xy}$ be the product of inertia about the $x$ and $y$ centroidal axes.

The angle $\alpha$ of the principal axis $u$ with respect to the $x$-axis is given by:

$\tan(2\alpha) = \frac{-2 I_{xy}}{I_x - I_y}$

The moments of inertia about the principal axes $u$ and $v$ are:

$I_u = \frac{I_x + I_y}{2} + \frac{I_x - I_y}{2} \cos(2\alpha) - I_{xy} \sin(2\alpha)$
$I_v = \frac{I_x + I_y}{2} - \frac{I_x - I_y}{2} \cos(2\alpha) + I_{xy} \sin(2\alpha)$

Alternatively, using Mohr's circle for area moments of inertia, the principal moments of inertia $I_1$ and $I_2$ (which are $I_u$ and $I_v$ in some order) are:

$I_{1,2} = \frac{I_x + I_y}{2} \pm \sqrt{\left(\frac{I_x - I_y}{2}\right)^2 + I_{xy}^2}$

And the angle $\alpha$ of the principal axis $I_u$ is:

$\tan(2\alpha) = \frac{-2 I_{xy}}{I_x - I_y}$

**Important:** For symmetric cross-sections (e.g., rectangle, I-beam, channel), the axes of symmetry are the principal axes, and the product of inertia $I_{xy}$ is zero. In such cases, $I_u$ and $I_v$ are simply the moments of inertia about these axes of symmetry.

---

### **3. Examples and Applications**

#### **Example 1: Rectangular Beam bent about a Diagonal**

Consider a rectangular beam with width $b$ and height $h$. Let the beam be bent by a moment $M$ applied in the $xy$-plane, where the $x$-axis is along the width and the $y$-axis is along the height. However, the loading causes bending about the diagonal of the cross-section.

*   **Centroid:** At the center of the rectangle.
*   **Principal Axes:** The diagonals of the rectangle. Let's call them $u$ and $v$.
*   **Moments of Inertia about Principal Axes:**
    *   $I_u = I_v = \frac{bh^3}{12}$ (This is incorrect for a general rectangle, for a square $I_u=I_v$. For a rectangle, the principal axes are along the symmetry axes, and the moments of inertia are $I_x=bh^3/12$ and $I_y=hb^3/12$. If we rotate by 45 degrees to get the diagonals, the moments of inertia about the diagonals are not $I_u=I_v$. Actually, the principal axes *are* the axes of symmetry. If bending is about a diagonal, it's asymmetrical.)

Let's rephrase the example: A rectangular beam of width $b$ and height $h$ is subjected to a bending moment $M$ that lies in the $xy$-plane, where the $x$-axis is along the width and the $y$-axis is along the height. The cross-section is oriented such that the $x$ and $y$ axes are *not* principal axes (e.g., the beam is placed on its side).

Let's consider a simpler case: A square beam of side $a$, bent by a moment $M$ about its diagonal.
*   The principal axes are the axes of symmetry passing through the centroid, which are at 45 degrees to the sides.
*   For a square, $I_x = I_y = \frac{a^4}{12}$.
*   The product of inertia $I_{xy}$ for a square with respect to axes parallel to the sides is zero.
*   The principal axes are at $\pm 45^\circ$ to the sides. Let the $u$-axis be one of the diagonals. Then the $v$-axis is the other diagonal.
*   $I_u = I_v = \frac{a^4}{12}$. (This is incorrect. The formula for moments of inertia about rotated axes from principal axes is needed, or we use the invariant property $I_u + I_v = I_x + I_y$).

Let's consider the standard approach for asymmetrical bending:
If a beam is bent by a moment $M$ that makes an angle $\theta$ with the $x$-axis (which is a principal axis), and the $y$-axis is the other principal axis. Let the moments of inertia about these principal axes be $I_x$ and $I_y$.
*   $M_x = M \cos \theta$ (Moment about $x$)
*   $M_y = M \sin \theta$ (Moment about $y$)

The stress at a point $(x, y)$ relative to the centroidal axes is:
$\sigma = -\frac{M_x y}{I_x} - \frac{M_y x}{I_y}$

**Example 1 Revised: Rectangular Beam (b x h) Bent by Moment M at 45 degrees to the sides**

Assume the $x$-axis is along the width $b$ and the $y$-axis along the height $h$. These are the principal axes.
*   $I_x = \frac{bh^3}{12}$
*   $I_y = \frac{hb^3}{12}$

If the bending moment $M$ is applied at an angle of $45^\circ$ to the $x$-axis (e.g., along a diagonal, but the moment is resolved into components along principal axes). Let's say $M$ is applied in a plane that makes $45^\circ$ with the $xy$-plane, such that it has components $M_x$ and $M_y$.
If the applied moment $M$ is such that it lies in a plane that makes $45^\circ$ with the $xy$ plane, and we are considering the effect on the beam where the $x$ and $y$ axes are the principal axes. This scenario needs careful definition of the applied moment's direction.

A more typical asymmetrical bending scenario:
A rectangular beam (b x h) is placed such that its principal axes are inclined at an angle $\alpha$ to the vertical and horizontal. A load is applied that creates a moment $M$ about the vertical axis.
*   The principal axes ($u$, $v$) are at $45^\circ$ to the sides of the square. For a square of side $a$:
    *   $I_x = \frac{a^4}{12}$, $I_y = \frac{a^4}{12}$ (axes parallel to sides)
    *   $I_{xy} = 0$
    *   $\tan(2\alpha) = 0 \implies \alpha = 0^\circ, 90^\circ$. So, axes parallel to sides are principal axes.
    *   Let's consider a square beam loaded such that the moment is about a diagonal. This means the plane of the moment is at $45^\circ$ to the plane containing the centroid and a diagonal.
    *   The principal axes are indeed the diagonals. Let $u$ be one diagonal and $v$ be the other.
    *   $I_u = I_v = \frac{a^4}{12}$ (Incorrect for a square).

Let's use the correct formulas for rotated moments of inertia.
For a square of side $a$:
*   $I_x = \frac{a^4}{12}$, $I_y = \frac{a^4}{12}$ (about axes parallel to sides, passing through centroid).
*   $I_{xy} = 0$.
*   Principal axes are at $\alpha = 45^\circ$ to the sides. Let the $u$-axis be along a diagonal.
*   $I_u = \frac{I_x + I_y}{2} + \frac{I_x - I_y}{2} \cos(2\alpha) - I_{xy} \sin(2\alpha)$
    *   $\cos(2\alpha) = \cos(90^\circ) = 0$
    *   $\sin(2\alpha) = \sin(90^\circ) = 1$
    *   $I_u = \frac{a^4/12 + a^4/12}{2} + 0 - 0 = \frac{a^4}{12}$. (Still incorrect. The principal moments of inertia are actually $I_u = \frac{a^4}{24}$ and $I_v = \frac{a^4}{24}$ for a square when rotated by $45^{\circ}$? No, this is the value for the *moment of inertia about the diagonal*. )

Let's stick to the fundamental principle and avoid confusion with derived formulas for specific shapes.
If the bending moment $M$ is applied about an axis that is NOT a principal axis.

**Correct approach for Asymmetrical Bending:**
1.  **Identify Principal Axes:** Determine the centroidal principal axes ($u$, $v$) of the cross-section and the corresponding principal moments of inertia ($I_u$, $I_v$).
2.  **Resolve Bending Moment:** If the applied bending moment $M$ is not along a principal axis, resolve it into components $M_u$ and $M_v$ along the principal axes.
3.  **Calculate Stress:** Use the formula $\sigma_x = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v}$ at any point $(u, v)$ relative to the principal axes.

**Example 1: Channel Section (C-channel) loaded eccentrically**

Consider a C-channel with its axis of symmetry vertical. Let the load be applied horizontally at the top flange, causing a bending moment $M$ about the horizontal axis.

*   The vertical axis of symmetry is a principal axis ($u$-axis). $I_u$ is the moment of inertia about this axis.
*   The horizontal axis passing through the centroid is also a principal axis ($v$-axis). $I_v$ is the moment of inertia about this axis.
*   If the load creates a moment $M$ about the $v$-axis (horizontal axis), then $M_u = 0$ and $M_v = M$.
*   The stress formula becomes $\sigma_x = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v} = -\frac{M v}{I_v}$.
    *   This is just symmetrical bending if the load is perfectly aligned with the principal axis.

**The essence of asymmetrical bending is when $M_u \neq 0$ and $M_v \neq 0$ simultaneously, or when the applied moment $M$ makes an angle $\theta$ with a principal axis.**

**Let's consider a channel section bent about a non-principal axis.**

Suppose a C-channel is loaded such that the resultant bending moment $M$ is in the $xy$-plane (where $x$ is longitudinal, $y$ is vertical, and $z$ is horizontal, with the origin at the centroid). The $y$-axis is the axis of symmetry.
The principal axes are $y$ (axis of symmetry) and $z$ (perpendicular to axis of symmetry).
Let's assume the load creates a moment $M$ which is NOT along $y$ or $z$.
We need to define the orientation of the applied moment.

**Scenario:** A channel section is oriented such that its axis of symmetry is at $45^\circ$ to the vertical. A load is applied that creates a bending moment $M$ about the vertical axis.

1.  **Principal Axes:** Let the axis of symmetry be $u$, and the perpendicular axis through the centroid be $v$. Assume $I_u > I_v$. For a channel, the axis of symmetry is a principal axis.
2.  **Moment Components:** The applied moment $M$ is about the vertical axis. The principal axes $u$ and $v$ are oriented at $45^\circ$ to the vertical and horizontal.
    *   Let $\phi = 45^\circ$ be the angle between the vertical and the $u$-axis.
    *   Moment about the vertical axis: $M_{vert} = M$.
    *   The vertical axis makes an angle $\phi$ with the $u$-axis.
    *   $M_u = M \cos \phi$
    *   $M_v = M \sin \phi$
    *   Here, $M_u = M \cos 45^\circ$ and $M_v = M \sin 45^\circ$. So, $M_u = M_v = M/\sqrt{2}$.

3.  **Stress Calculation:**
    $\sigma_x = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v}$
    $\sigma_x = -\frac{(M/\sqrt{2}) v}{I_u} - \frac{(M/\sqrt{2}) u}{I_v}$

    To find the maximum stress, we need to know the location of the point $(u, v)$ in the cross-section that maximizes this expression (for tension or compression).

#### **Example 2: Bending of an angle section (equal leg)**

Consider an equal leg angle section.
*   The centroid is NOT at the intersection of the legs.
*   The principal axes are at $45^\circ$ to the legs, and $I_u \neq I_v$.
*   If a load is applied that creates a moment $M$ about a vertical axis, and the angle section is oriented such that its legs are at $45^\circ$ to the vertical.

    1.  **Principal Axes:** Let $u$ and $v$ be the principal axes, with the $u$-axis making an angle of $45^\circ$ with the legs.
    2.  **Moment Components:** Applied moment $M$ about the vertical axis.
        *   Let $\phi = 45^\circ$ be the angle between the vertical and the $u$-axis.
        *   $M_u = M \cos 45^\circ = M/\sqrt{2}$
        *   $M_v = M \sin 45^\circ = M/\sqrt{2}$
    3.  **Stress:** $\sigma_x = -\frac{(M/\sqrt{2}) v}{I_u} - \frac{(M/\sqrt{2}) u}{I_v}$

    We need the location of the centroid, the principal axes orientation ($\alpha$), and the principal moments of inertia ($I_u, I_v$). These values are typically found in handbooks or calculated using integration or section property calculators.

---

### **4. Calculations for Stress and Neutral Axis**

#### **4.1 Determining Stress at a Point**

To find the stress at a specific point in the cross-section:
1.  Find the centroid.
2.  Calculate $I_x$, $I_y$, and $I_{xy}$ about the centroidal axes parallel to the edges of the cross-section.
3.  Determine the angle $\alpha$ of the principal axes and the principal moments of inertia $I_u, I_v$.
4.  Determine the orientation of the applied bending moment $M$. Let $\theta$ be the angle of the plane of bending (and thus the direction of the bending moment) with respect to the $x$-axis.
5.  Resolve $M$ into components along the principal axes:
    *   $M_u = M \cos(\theta - \alpha)$ (where $\alpha$ is the angle of the $u$-axis from $x$)
    *   $M_v = M \sin(\theta - \alpha)$
6.  Express the coordinates $(u, v)$ of the point of interest with respect to the principal axes.
7.  Calculate $\sigma_x = -\frac{M_u v}{I_u} - \frac{M_v u}{I_v}$.

**Important Note on Angle Conventions:**
The angle $\alpha$ for the principal axis $u$ is given by $\tan(2\alpha) = \frac{-2 I_{xy}}{I_x - I_y}$.
If the applied moment $M$ is in a plane making an angle $\theta$ with the $x$-axis, then the components along the principal axes $u$ and $v$ are $M_u = M \cos(\theta - \alpha)$ and $M_v = M \sin(\theta - \alpha)$.

#### **4.2 Finding Maximum Stresses**

The maximum tensile and compressive stresses occur at the points furthest from the neutral axis in the direction perpendicular to the neutral axis.
The neutral axis is defined by $\sigma_x = 0$:
$\frac{M_u v}{I_u} + \frac{M_v u}{I_v} = 0$

This is the equation of the neutral axis in the $u-v$ coordinate system.
$\frac{v}{u} = -\frac{M_v I_u}{M_u I_v}$

To find the points of maximum stress, we need to find the points in the cross-section that are furthest from this line. This is a geometrical problem of finding the maximum value of the function $f(u, v) = \frac{M_u v}{I_u} + \frac{M_v u}{I_v}$ (or its negative) over the boundaries of the cross-section.

The extreme fibers are usually at the corners of the cross-section. We can evaluate the stress at each corner.

**Example:** For a rectangle $(b \times h)$, principal axes are along the sides. $I_x = bh^3/12$, $I_y = hb^3/12$.
If a moment $M$ is applied at angle $\theta$ to the $x$-axis.
$M_x = M \cos \theta$, $M_y = M \sin \theta$.
$\sigma = -\frac{M_x y}{I_x} - \frac{M_y x}{I_y}$
$\sigma = -\frac{(M \cos \theta) y}{bh^3/12} - \frac{(M \sin \theta) x}{hb^3/12}$

Consider a corner point $(x, y) = (b/2, h/2)$:
$\sigma = -\frac{6M \cos \theta}{bh^2} - \frac{6M \sin \theta}{hb^2}$

Consider a corner point $(x, y) = (-b/2, h/2)$:
$\sigma = -\frac{6M \cos \theta}{bh^2} + \frac{6M \sin \theta}{hb^2}$

The maximum stress will be the largest absolute value of these stresses.

---

### **5. Practice Questions**

---

#### **Question 1:**

A rectangular beam of width 100 mm and height 200 mm is subjected to a bending moment of 10 kN-m. The bending moment is applied in a plane that makes an angle of $30^\circ$ with the axis of symmetry parallel to the height (i.e., the $y$-axis, which is a principal axis). Calculate the stresses at the four corners of the cross-section.

**Given:**
*   Width $b = 100$ mm $= 0.1$ m
*   Height $h = 200$ mm $= 0.2$ m
*   Bending Moment $M = 10$ kN-m $= 10 \times 10^3$ N-m
*   Angle $\theta = 30^\circ$ with the $y$-axis. Let $y$ be the principal axis with $I_y$, and $x$ be the principal axis with $I_x$.
    *   $I_x = \frac{bh^3}{12} = \frac{0.1 \times (0.2)^3}{12} = \frac{0.1 \times 0.008}{12} = \frac{0.0008}{12} = 6.667 \times 10^{-5} \, m^4$
    *   $I_y = \frac{hb^3}{12} = \frac{0.2 \times (0.1)^3}{12} = \frac{0.2 \times 0.001}{12} = \frac{0.0002}{12} = 1.667 \times 10^{-5} \, m^4$

    The problem states the angle is with the axis of symmetry parallel to the height ($y$-axis). Let's assume $y$ is the major principal axis and $x$ is the minor principal axis.
    So, the moment $M$ is applied such that its plane makes an angle $\theta = 30^\circ$ with the $y$-axis. This means the moment components are about the principal axes.
    *   $M_y = M \cos 30^\circ = 10 \times 10^3 \times \frac{\sqrt{3}}{2} = 8.66 \times 10^3$ N-m
    *   $M_x = M \sin 30^\circ = 10 \times 10^3 \times \frac{1}{2} = 5 \times 10^3$ N-m

    Stress formula: $\sigma = -\frac{M_x y}{I_x} - \frac{M_y x}{I_y}$

    **Corners:**
    *   (x, y) = (0.05, 0.1)  (Top-right)
    *   (x, y) = (-0.05, 0.1) (Top-left)
    *   (x, y) = (0.05, -0.1) (Bottom-right)
    *   (x, y) = (-0.05, -0.1) (Bottom-left)

    **Calculations:**
    *   Term 1: $-\frac{M_x y}{I_x} = -\frac{(5 \times 10^3)(0.1)}{6.667 \times 10^{-5}} = -\frac{500}{6.667 \times 10^{-5}} = -75 \times 10^6$ N/m$^2 = -75$ MPa
    *   Term 2: $-\frac{M_y x}{I_y} = -\frac{(8.66 \times 10^3)(x)}{1.667 \times 10^{-5}}$
        *   $-\frac{8.66 \times 10^3}{1.667 \times 10^{-5}} = -0.52 \times 10^9 = -520$ MPa
        *   So, Term 2 = $-520x$ MPa

    **Stress at corners:**
    1.  (0.05, 0.1): $\sigma = -75 - 520(0.05) = -75 - 26 = -101$ MPa (Compression)
    2.  (-0.05, 0.1): $\sigma = -75 - 520(-0.05) = -75 + 26 = -49$ MPa (Compression)
    3.  (0.05, -0.1): $\sigma = -75 - 520(0.05) = -75 - 26 = -101$ MPa (Compression) - Error here. Let's recheck the formula.

    The formula is $\sigma = -\frac{M_x y}{I_x} - \frac{M_y x}{I_y}$. The signs of $x$ and $y$ are crucial.
    *   Let $x$ axis be horizontal, $y$ axis be vertical.
    *   $I_x$ for b x h rectangle is $bh^3/12$. $I_y$ is $hb^3/12$.
    *   $M_x$ is the moment about the $x$-axis (horizontal). $M_y$ is the moment about the $y$-axis (vertical).
    *   If bending moment $M$ is applied in a plane at angle $\theta$ to the $y$-axis, then $M_y = M \cos \theta$ and $M_x = M \sin \theta$. This seems correct.

    Let's re-evaluate the terms:
    *   Term A: $-\frac{M_x y}{I_x} = -\frac{(5 \times 10^3) y}{6.667 \times 10^{-5}} = -75 \times 10^6 y$
    *   Term B: $-\frac{M_y x}{I_y} = -\frac{(8.66 \times 10^3) x}{1.667 \times 10^{-5}} = -520 \times 10^6 x$

    **Corners (x, y):**
    1.  (0.05, 0.1): $\sigma = -75 \times 10^6 (0.1) - 520 \times 10^6 (0.05) = -7.5 \times 10^6 - 26 \times 10^6 = -33.5 \times 10^6$ N/m$^2 = -33.5$ MPa
    2.  (-0.05, 0.1): $\sigma = -75 \times 10^6 (0.1) - 520 \times 10^6 (-0.05) = -7.5 \times 10^6 + 26 \times 10^6 = +18.5 \times 10^6$ N/m$^2 = +18.5$ MPa
    3.  (0.05, -0.1): $\sigma = -75 \times 10^6 (-0.1) - 520 \times 10^6 (0.05) = +7.5 \times 10^6 - 26 \times 10^6 = -18.5 \times 10^6$ N/m$^2 = -18.5$ MPa
    4.  (-0.05, -0.1): $\sigma = -75 \times 10^6 (-0.1) - 520 \times 10^6 (-0.05) = +7.5 \times 10^6 + 26 \times 10^6 = +33.5 \times 10^6$ N/m$^2 = +33.5$ MPa

    **Answer:**
    The stresses at the four corners are:
    *   Top-right (0.05, 0.1): -33.5 MPa (Compression)
    *   Top-left (-0.05, 0.1): +18.5 MPa (Tension)
    *   Bottom-right (0.05, -0.1): -18.5 MPa (Compression)
    *   Bottom-left (-0.05, -0.1): +33.5 MPa (Tension)

---

#### **Question 2:**

A T-section beam has a flange of width 100 mm and thickness 20 mm, and a web of depth 120 mm and thickness 20 mm. The beam is subjected to a bending moment of 5 kN-m acting in a plane making an angle of $60^\circ$ with the vertical axis of symmetry. Calculate the maximum tensile and compressive stresses. Assume the axis of symmetry is the $y$-axis and the horizontal axis through the centroid is the $x$-axis.

**Solution Outline:**

1.  **Calculate Centroid:** For a T-section, the centroid is not in the middle. Calculate its position.
    *   Divide into two rectangles: Flange ($100 \times 20$) and Web ($20 \times 120$).
    *   Centroid of flange: $y_f = (120 + 10) = 130$ mm from the bottom.
    *   Centroid of web: $y_w = 120/2 = 60$ mm from the bottom.
    *   Area of flange $A_f = 100 \times 20 = 2000$ mm$^2$.
    *   Area of web $A_w = 20 \times 120 = 2400$ mm$^2$.
    *   $y_c = \frac{A_f y_f + A_w y_w}{A_f + A_w} = \frac{2000(130) + 2400(60)}{2000 + 2400} = \frac{260000 + 144000}{4400} = \frac{404000}{4400} \approx 91.82$ mm from the bottom.
    *   The $x$-coordinate of the centroid is $x_c = 0$ due to symmetry about the vertical axis.

2.  **Calculate Moments of Inertia:**
    *   Principal axes are the vertical axis of symmetry ($y$-axis) and the horizontal centroidal axis ($x$-axis).
    *   $I_x$ (about centroidal horizontal axis):
        *   $I_{x,flange} = \frac{100 \times 20^3}{12} + (100 \times 20) \times (130 - 91.82)^2 = 6.67 \times 10^4 + 2000 \times (38.18)^2 = 6.67 \times 10^4 + 2.90 \times 10^6 = 2.97 \times 10^6$ mm$^4$
        *   $I_{x,web} = \frac{20 \times 120^3}{12} + (20 \times 120) \times (91.82 - 60)^2 = 2.88 \times 10^7 + 2400 \times (31.82)^2 = 2.88 \times 10^7 + 2.42 \times 10^6 = 3.12 \times 10^7$ mm$^4$
        *   $I_x = I_{x,flange} + I_{x,web} = 2.97 \times 10^6 + 3.12 \times 10^7 = 3.417 \times 10^7$ mm$^4$.
    *   $I_y$ (about centroidal vertical axis):
        *   $I_{y,flange} = \frac{20 \times 100^3}{12} + (100 \times 20) \times (50 - 0)^2$ (Centroid of flange is at 50mm from edge) - This calculation is wrong. The $y$-axis is the axis of symmetry.
        *   $I_{y,flange} = \frac{20 \times 100^3}{12} = 1.667 \times 10^7$ mm$^4$
        *   $I_{y,web} = \frac{120 \times 20^3}{12} = 10^5$ mm$^4$
        *   $I_y = I_{y,flange} + I_{y,web} = 1.667 \times 10^7 + 10^5 = 1.677 \times 10^7$ mm$^4$.

3.  **Resolve Bending Moment:**
    *   $M = 5$ kN-m $= 5 \times 10^3$ N-m.
    *   Angle with vertical axis ($y$-axis) is $60^\circ$.
    *   $M_y = M \cos 60^\circ = 5 \times 10^3 \times 0.5 = 2.5 \times 10^3$ N-m.
    *   $M_x = M \sin 60^\circ = 5 \times 10^3 \times \frac{\sqrt{3}}{2} \approx 4.33 \times 10^3$ N-m.

4.  **Stress Calculation:**
    *   $\sigma = -\frac{M_x y}{I_x} - \frac{M_y x}{I_y}$
    *   Convert units to meters and N/m$^2$ for consistency.
    *   $I_x = 3.417 \times 10^{-5} \, m^4$
    *   $I_y = 1.677 \times 10^{-5} \, m^4$
    *   $M_x = 4.33 \times 10^3$ N-m
    *   $M_y = 2.5 \times 10^3$ N-m

    *   Term A: $-\frac{M_x y}{I_x} = -\frac{(4.33 \times 10^3) y}{3.417 \times 10^{-5}} \approx -1.267 \times 10^8 y$
    *   Term B: $-\frac{M_y x}{I_y} = -\frac{(2.5 \times 10^3) x}{1.677 \times 10^{-5}} \approx -1.491 \times 10^8 x$

    *   $\sigma = -1.267 \times 10^8 y - 1.491 \times 10^8 x$ (in MPa if $x, y$ in meters)

5.  **Evaluate Stresses at Extreme Points:**
    *   The extreme points will be at the top corners of the flange and the bottom corners of the web.
    *   Top-left corner: $x = -0.05$ m, $y = 0.13$ m (flange centroid y is 130mm from bottom, so top is 130+10 = 140mm from bottom of web. Centroid is at 91.82mm. So y = 140 - 91.82 = 48.18 mm) Wait, the y coordinate must be relative to the centroidal axis.
        *   Top edge of flange: $y = (20+120) - 91.82 = 140 - 91.82 = 48.18$ mm $= 0.04818$ m.
        *   Bottom edge of web: $y = 0 - 91.82 = -91.82$ mm $= -0.09182$ m.
        *   Left edge: $x = -0.05$ m. Right edge: $x = 0.05$ m for flange, $x = -0.01$ to $0.01$ for web. (web thickness 20mm, so $x=\pm 0.01$m).

    *   **Extreme points:**
        *   Top-left flange corner: $x = -0.05$ m, $y = 0.04818$ m
        *   Top-right flange corner: $x = 0.05$ m, $y = 0.04818$ m
        *   Bottom-left web corner: $x = -0.01$ m, $y = -0.09182$ m
        *   Bottom-right web corner: $x = 0.01$ m, $y = -0.09182$ m

    *   **Calculate stresses:**
        *   Top-left: $\sigma = -1.267 \times 10^8 (0.04818) - 1.491 \times 10^8 (-0.05) = -6.105 \times 10^6 + 7.455 \times 10^6 = 1.35$ MPa (Tension)
        *   Top-right: $\sigma = -1.267 \times 10^8 (0.04818) - 1.491 \times 10^8 (0.05) = -6.105 \times 10^6 - 7.455 \times 10^6 = -13.56$ MPa (Compression)
        *   Bottom-left: $\sigma = -1.267 \times 10^8 (-0.09182) - 1.491 \times 10^8 (-0.01) = 11.63 \times 10^6 + 1.49 \times 10^6 = 13.12$ MPa (Tension)
        *   Bottom-right: $\sigma = -1.267 \times 10^8 (-0.09182) - 1.491 \times 10^8 (0.01) = 11.63 \times 10^6 - 1.49 \times 10^6 = 10.14$ MPa (Tension)

    *   **Maximum Tension:** 13.12 MPa (at bottom-left web corner)
    *   **Maximum Compression:** -13.56 MPa (at top-right flange corner)

---

### **6. Important Points to Remember**

*   **Principal Axes are Key:** Always work with respect to the principal axes of the cross-section when dealing with asymmetrical bending.
*   **Resolve the Moment:** The applied bending moment must be resolved into components along the principal axes.
*   **Sum of Stresses:** The total stress at any point is the algebraic sum of stresses caused by the moment components about each principal axis.
*   **Neutral Axis Location:** The neutral axis is generally not the centroidal axis and its orientation depends on the ratio of moment components and principal moments of inertia.
*   **Extreme Fibers:** Identify the points in the cross-section furthest from the neutral axis to find maximum stresses. This often involves checking the corners.
*   **Products of Inertia:** For sections without symmetry, products of inertia become important in determining the orientation and values of principal moments of inertia.
*   **Shear Center:** For asymmetrical sections under bending, shear stresses can cause warping and the concept of a shear center becomes relevant, although not directly covered in this topic's core flexure analysis.

---
