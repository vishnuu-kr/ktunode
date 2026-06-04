---
title: "Stress on an inclined plane due to Uniaxial stress- Stress on an inclined 
plane due to Biaxial stress- Stress on an inclined plane due to two Normal 
Stresses accompanied by Shear stresses- principal planes and stresses."
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stress on an inclined plane due to Uniaxial stress"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cfb"
status: "completed"
scrapedAt: "2026-05-20T17:51:08.464Z"
---
# Mechanics of Solids: Module 4 - Stress on an Inclined Plane

This module delves into how stresses transform when considered on planes that are not perpendicular to the applied loads. We will analyze these transformations under various loading conditions, culminating in understanding principal planes and stresses.

**Course Outcomes Alignment:**

*   **CO1:** Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3) - This module directly addresses the determination of stresses on inclined planes.
*   **CO4:** Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns (Knowledge Level: K4) - This module is foundational for understanding principal stresses and planes, a key aspect of CO4.

**Learning Outcomes for Module 4:**

Upon successful completion of this module, you will be able to:

1.  Derive and apply the stress transformation equations for a plane stress condition.
2.  Calculate the normal and shear stresses on an inclined plane subjected to uniaxial stress.
3.  Calculate the normal and shear stresses on an inclined plane subjected to biaxial stress.
4.  Calculate the normal and shear stresses on an inclined plane subjected to two normal stresses accompanied by shear stresses.
5.  Identify and calculate the principal stresses and the orientation of the principal planes.
6.  Visualize stress transformation using Mohr's circle.

---

## 1. Introduction to Stress Transformation

When a body is subjected to external forces, stresses are developed within the material. These stresses are usually defined with respect to the axes aligned with the applied loads. However, it's often necessary to determine the stresses acting on planes that are inclined to these original axes. This process is known as **stress transformation**.

**Key Concepts:**

*   **Stress Element:** A small, infinitesimal cube within a material used to analyze the state of stress at a point.
*   **Normal Stress ($\sigma$):** Stress acting perpendicular to a plane.
*   **Shear Stress ($\tau$):** Stress acting parallel to a plane.
*   **Plane Stress:** A condition where stresses acting perpendicular to a specific plane are zero. This is common in thin-walled structures.
*   **Plane Strain:** A condition where strains acting perpendicular to a specific plane are zero. This is common in long, thick-walled structures.

**Reference:**
*   *Mechanics of Solids* by R.K.Bansal, Chapter 3
*   *Strength of Materials* by S. S. Bhavikatti, Chapter 4
*   *Mechanics of Materials* by R. C. Hibbeler, Chapter 7

---

## 2. Stress on an Inclined Plane due to Uniaxial Stress

Consider a rectangular element subjected to a uniaxial stress $\sigma_x$ acting in the x-direction. Let's analyze the stresses acting on a plane inclined at an angle $\theta$ to the x-axis.

**Derivation:**

Imagine a small triangular element cut from the stressed body, with one side along the inclined plane. Let the inclined plane make an angle $\theta$ with the plane perpendicular to $\sigma_x$.

*   Let the sides of the triangle be $dx$, $dy$, and $ds$ (hypotenuse).
*   Assume the thickness of the element is unity.
*   Area of the plane perpendicular to x-axis is $A_x = dx \times 1$.
*   Area of the plane perpendicular to y-axis is $A_y = dy \times 1$.
*   Area of the inclined plane is $A = ds \times 1$.

From geometry, we have:
$ds \cos \theta = dx \implies A \cos \theta = A_x$
$ds \sin \theta = dy \implies A \sin \theta = A_y$

The forces acting on the element are:
*   Force due to $\sigma_x$: $F_x = \sigma_x A_x = \sigma_x A \cos \theta$
*   Force due to $\sigma_y$ (which is 0 in uniaxial stress): $F_y = 0$

Let $\sigma_n$ be the normal stress and $\tau_{nt}$ be the shear stress acting on the inclined plane. These components act perpendicular and parallel to the inclined plane, respectively.

Resolving the forces along the inclined plane:
The component of $F_x$ perpendicular to the inclined plane is $F_x \cos \theta = (\sigma_x A \cos \theta) \cos \theta = \sigma_x A \cos^2 \theta$.
The component of $F_x$ parallel to the inclined plane is $F_x \sin \theta = (\sigma_x A \cos \theta) \sin \theta = \sigma_x A \sin \theta \cos \theta$.

The normal stress $\sigma_n$ is the force perpendicular to the inclined plane divided by its area:
$\sigma_n = \frac{\sigma_x A \cos^2 \theta}{A} = \sigma_x \cos^2 \theta$

The shear stress $\tau_{nt}$ is the force parallel to the inclined plane divided by its area:
$\tau_{nt} = \frac{\sigma_x A \sin \theta \cos \theta}{A} = \sigma_x \sin \theta \cos \theta$

Using trigonometric identities:
$\sigma_n = \sigma_x \left( \frac{1 + \cos 2\theta}{2} \right) = \frac{\sigma_x}{2} (1 + \cos 2\theta)$
$\tau_{nt} = \frac{\sigma_x}{2} (2 \sin \theta \cos \theta) = \frac{\sigma_x}{2} \sin 2\theta$

**Summary for Uniaxial Stress ($\sigma_x$):**

*   **Normal Stress on inclined plane ($\sigma_n$):** $\sigma_n = \sigma_x \cos^2 \theta$
*   **Shear Stress on inclined plane ($\tau_{nt}$):** $\tau_{nt} = \sigma_x \sin \theta \cos \theta$

**Important Points to Remember:**

*   $\theta$ is the angle between the inclined plane and the plane perpendicular to the direction of $\sigma_x$.
*   Maximum normal stress occurs when $\cos^2 \theta$ is maximum, which is at $\theta = 0^\circ$ ($\sigma_n = \sigma_x$).
*   Maximum shear stress occurs when $\sin \theta \cos \theta$ is maximum, which is at $\theta = 45^\circ$ ($\tau_{nt} = \sigma_x/2$).

---

## 3. Stress on an Inclined Plane due to Biaxial Stress

Now consider a rectangular element subjected to uniaxial stresses $\sigma_x$ and $\sigma_y$ acting in the x and y directions, respectively, and no shear stresses.

**Derivation:**

Consider a triangular element cut from the stressed body. Let the inclined plane make an angle $\theta$ with the plane perpendicular to the x-axis.

*   Area of the plane perpendicular to x-axis: $A_x$
*   Area of the plane perpendicular to y-axis: $A_y$
*   Area of the inclined plane: $A$

The forces acting on the element are:
*   Force due to $\sigma_x$: $F_x = \sigma_x A_x = \sigma_x A \cos \theta$
*   Force due to $\sigma_y$: $F_y = \sigma_y A_y = \sigma_y A \sin \theta$

Let $\sigma_n$ be the normal stress and $\tau_{nt}$ be the shear stress acting on the inclined plane.

Resolving forces perpendicular to the inclined plane:
Component of $F_x$ perpendicular to the inclined plane: $F_x \cos \theta = (\sigma_x A \cos \theta) \cos \theta = \sigma_x A \cos^2 \theta$
Component of $F_y$ perpendicular to the inclined plane: $F_y \sin \theta = (\sigma_y A \sin \theta) \sin \theta = \sigma_y A \sin^2 \theta$

Sum of forces perpendicular to the inclined plane = $\sigma_n A$.
$\sigma_n A = \sigma_x A \cos^2 \theta + \sigma_y A \sin^2 \theta$
$\sigma_n = \sigma_x \cos^2 \theta + \sigma_y \sin^2 \theta$

Using trigonometric identities:
$\sigma_n = \sigma_x \left( \frac{1 + \cos 2\theta}{2} \right) + \sigma_y \left( \frac{1 - \cos 2\theta}{2} \right)$
$\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta$

Resolving forces parallel to the inclined plane:
Component of $F_x$ parallel to the inclined plane: $F_x \sin \theta = (\sigma_x A \cos \theta) \sin \theta = \sigma_x A \sin \theta \cos \theta$
Component of $F_y$ parallel to the inclined plane: $F_y \cos \theta = (\sigma_y A \sin \theta) \cos \theta = \sigma_y A \sin \theta \cos \theta$

Sum of forces parallel to the inclined plane = $\tau_{nt} A$.
$\tau_{nt} A = \sigma_x A \sin \theta \cos \theta - \sigma_y A \sin \theta \cos \theta$ (Note the direction for $\sigma_y$ component)
$\tau_{nt} = (\sigma_x - \sigma_y) \sin \theta \cos \theta$

Using trigonometric identity:
$\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta$

**Summary for Biaxial Stress ($\sigma_x, \sigma_y$):**

*   **Normal Stress on inclined plane ($\sigma_n$):** $\sigma_n = \sigma_x \cos^2 \theta + \sigma_y \sin^2 \theta$
    *   $\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta$
*   **Shear Stress on inclined plane ($\tau_{nt}$):** $\tau_{nt} = (\sigma_x - \sigma_y) \sin \theta \cos \theta$
    *   $\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta$

**Important Points to Remember:**

*   $\theta$ is the angle between the inclined plane and the plane perpendicular to the x-axis.
*   If $\sigma_y = 0$, these equations reduce to the uniaxial stress case.

---

## 4. Stress on an Inclined Plane due to Two Normal Stresses accompanied by Shear Stresses

This is the general plane stress case. Consider an element with normal stresses $\sigma_x$, $\sigma_y$, and shear stresses $\tau_{xy}$ acting on it. We want to find the stresses on a plane inclined at an angle $\theta$ to the x-axis.

**Derivation (using Equilibrium of a Triangular Element):**

Consider a triangular element with sides $dx$, $dy$, and $ds$ (hypotenuse), inclined at an angle $\theta$ to the x-axis.
Assume the area of the inclined plane is $A$.
Area perpendicular to x-axis: $A_x = A \cos \theta$.
Area perpendicular to y-axis: $A_y = A \sin \theta$.

The forces acting on the faces are:
*   On the face perpendicular to x-axis (area $A_x$):
    *   Normal force: $\sigma_x A_x = \sigma_x A \cos \theta$
    *   Shear force: $\tau_{xy} A_x = \tau_{xy} A \cos \theta$
*   On the face perpendicular to y-axis (area $A_y$):
    *   Normal force: $\sigma_y A_y = \sigma_y A \sin \theta$
    *   Shear force: $\tau_{yx} A_y = \tau_{xy} A \sin \theta$ (assuming $\tau_{yx} = \tau_{xy}$)

Let $\sigma_n$ be the normal stress and $\tau_{nt}$ be the shear stress on the inclined plane (area $A$).

**Resolving forces perpendicular to the inclined plane:**

The component of forces perpendicular to the inclined plane must balance $\sigma_n A$.
1.  $\sigma_x A \cos \theta$ acts perpendicular to the face. Its component perpendicular to the inclined plane is $(\sigma_x A \cos \theta) \cos \theta = \sigma_x A \cos^2 \theta$.
2.  $\tau_{xy} A \cos \theta$ acts parallel to the face. Its component perpendicular to the inclined plane is $-(\tau_{xy} A \cos \theta) \sin \theta = -\tau_{xy} A \cos \theta \sin \theta$.
3.  $\sigma_y A \sin \theta$ acts perpendicular to the face. Its component perpendicular to the inclined plane is $-(\sigma_y A \sin \theta) \sin \theta = -\sigma_y A \sin^2 \theta$.
4.  $\tau_{xy} A \sin \theta$ acts parallel to the face. Its component perpendicular to the inclined plane is $-(\tau_{xy} A \sin \theta) \cos \theta = -\tau_{xy} A \sin \theta \cos \theta$.

Summing these components and equating to $\sigma_n A$:
$\sigma_n A = \sigma_x A \cos^2 \theta - \tau_{xy} A \cos \theta \sin \theta - \sigma_y A \sin^2 \theta - \tau_{xy} A \sin \theta \cos \theta$
Divide by $A$:
$\sigma_n = \sigma_x \cos^2 \theta - \sigma_y \sin^2 \theta - 2\tau_{xy} \sin \theta \cos \theta$

Using trigonometric identities:
$\sigma_n = \sigma_x \left( \frac{1 + \cos 2\theta}{2} \right) - \sigma_y \left( \frac{1 - \cos 2\theta}{2} \right) - \tau_{xy} \sin 2\theta$
$\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta - \tau_{xy} \sin 2\theta$

**Resolving forces parallel to the inclined plane:**

The component of forces parallel to the inclined plane must balance $\tau_{nt} A$.
1.  $\sigma_x A \cos \theta$ acts perpendicular to the face. Its component parallel to the inclined plane is $(\sigma_x A \cos \theta) \sin \theta = \sigma_x A \cos \theta \sin \theta$.
2.  $\tau_{xy} A \cos \theta$ acts parallel to the face. Its component parallel to the inclined plane is $(\tau_{xy} A \cos \theta) \cos \theta = \tau_{xy} A \cos^2 \theta$.
3.  $\sigma_y A \sin \theta$ acts perpendicular to the face. Its component parallel to the inclined plane is $-(\sigma_y A \sin \theta) \cos \theta = -\sigma_y A \sin \theta \cos \theta$.
4.  $\tau_{xy} A \sin \theta$ acts parallel to the face. Its component parallel to the inclined plane is $-(\tau_{xy} A \sin \theta) \sin \theta = -\tau_{xy} A \sin^2 \theta$.

Summing these components and equating to $\tau_{nt} A$:
$\tau_{nt} A = \sigma_x A \cos \theta \sin \theta + \tau_{xy} A \cos^2 \theta - \sigma_y A \sin \theta \cos \theta - \tau_{xy} A \sin^2 \theta$
Divide by $A$:
$\tau_{nt} = (\sigma_x - \sigma_y) \sin \theta \cos \theta + \tau_{xy} (\cos^2 \theta - \sin^2 \theta)$

Using trigonometric identities:
$\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta + \tau_{xy} \cos 2\theta$

**Summary for General Plane Stress ($\sigma_x, \sigma_y, \tau_{xy}$):**

*   **Normal Stress on inclined plane ($\sigma_n$):**
    $\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta - \tau_{xy} \sin 2\theta$
*   **Shear Stress on inclined plane ($\tau_{nt}$):**
    $\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta + \tau_{xy} \cos 2\theta$

**Note on $\theta$ convention:**
The angle $\theta$ is typically measured counterclockwise from the x-axis to the normal of the inclined plane.

**Important Points to Remember:**

*   These are the general stress transformation equations for plane stress.
*   The sign convention for shear stress $\tau_{xy}$ is crucial: positive if it tends to rotate the element clockwise.
*   If $\tau_{xy} = 0$, these equations reduce to the biaxial stress case.

**Reference:**
*   *Mechanics of Solids* by R.K.Bansal, Chapter 3
*   *Strength of Materials* by S. S. Bhavikatti, Chapter 4
*   *Strength of Materials* by Surendra Singh, Chapter 5
*   *Mechanics of Materials* by R. C. Hibbeler, Chapter 7

---

## 5. Principal Planes and Stresses

The **principal planes** are the planes on which the shear stress is zero. The normal stresses acting on these planes are called **principal stresses**.

**Finding Principal Stresses:**

Principal stresses occur when the shear stress $\tau_{nt}$ is zero. Setting the general shear stress equation to zero:

$\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta + \tau_{xy} \cos 2\theta = 0$

$\frac{\sigma_x - \sigma_y}{2} \sin 2\theta = - \tau_{xy} \cos 2\theta$

$\tan 2\theta = \frac{-2\tau_{xy}}{\sigma_x - \sigma_y}$

This equation gives two values for $2\theta$, separated by $180^\circ$. Let these angles be $2\theta_p$ and $2\theta_p + 180^\circ$. The corresponding angles of the principal planes are $\theta_p$ and $\theta_p + 90^\circ$.

Let $\tan 2\theta_p = \frac{-2\tau_{xy}}{\sigma_x - \sigma_y}$.
We can construct a right-angled triangle with opposite side $|-2\tau_{xy}|$, adjacent side $|\sigma_x - \sigma_y|$, and hypotenuse $\sqrt{(\sigma_x - \sigma_y)^2 + (-2\tau_{xy})^2}$.

So, $\sin 2\theta_p = \frac{-2\tau_{xy}}{\sqrt{(\sigma_x - \sigma_y)^2 + (2\tau_{xy})^2}}$ and $\cos 2\theta_p = \frac{\sigma_x - \sigma_y}{\sqrt{(\sigma_x - \sigma_y)^2 + (2\tau_{xy})^2}}$ (considering the sign of $\sigma_x - \sigma_y$).

Substitute these into the normal stress equation $\sigma_n$:
$\sigma_{n} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta - \tau_{xy} \sin 2\theta$

Substitute $\cos 2\theta_p$ and $\sin 2\theta_p$:
$\sigma_{p} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \left( \frac{\sigma_x - \sigma_y}{\sqrt{(\sigma_x - \sigma_y)^2 + (2\tau_{xy})^2}} \right) - \tau_{xy} \left( \frac{-2\tau_{xy}}{\sqrt{(\sigma_x - \sigma_y)^2 + (2\tau_{xy})^2}} \right)$

$\sigma_{p} = \frac{\sigma_x + \sigma_y}{2} + \frac{(\sigma_x - \sigma_y)^2 + 2\tau_{xy}^2}{\sqrt{(\sigma_x - \sigma_y)^2 + (2\tau_{xy})^2}}$

Let $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$.
Then $\frac{\sigma_x - \sigma_y}{2} = R \cos \phi$ and $\tau_{xy} = R \sin \phi$ for some angle $\phi$.

The principal stress formula can be simplified.
The maximum and minimum normal stresses (principal stresses) $\sigma_1$ and $\sigma_2$ are given by:

$\sigma_1, \sigma_2 = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

The principal stresses are the eigenvalues of the stress tensor.

**Principal Planes:**

The orientation of the principal planes is given by the angle $2\theta$ from the $\tan 2\theta$ equation.
$\tan 2\theta = \frac{2\tau_{xy}}{\sigma_y - \sigma_x}$ (Note: this form is often used and is equivalent)

The two principal planes are separated by $90^\circ$.

**Maximum Shear Stress:**

The maximum shear stress occurs when $d\tau_{nt}/d\theta = 0$. Differentiating $\tau_{nt}$:
$\frac{d\tau_{nt}}{d\theta} = \frac{\sigma_x - \sigma_y}{2} (2 \cos 2\theta) - \tau_{xy} (2 \sin 2\theta) = 0$
$(\sigma_x - \sigma_y) \cos 2\theta - 2\tau_{xy} \sin 2\theta = 0$
$\tan 2\theta = \frac{\sigma_x - \sigma_y}{2\tau_{xy}}$

Note that this angle is $90^\circ$ different from the angle of the principal planes.
Substituting this into the $\sigma_n$ equation will give the stresses on these planes. The normal stress on these planes is $\frac{\sigma_x + \sigma_y}{2}$. The shear stress is the maximum shear stress, $\tau_{max}$.

$\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

**Important Points to Remember:**

*   Principal planes have zero shear stress.
*   Principal stresses are the maximum and minimum normal stresses at a point.
*   The planes of maximum shear stress are oriented at $45^\circ$ to the principal planes.
*   The normal stress on the planes of maximum shear stress is equal to the average of the principal stresses.

**Reference:**
*   *Mechanics of Solids* by R.K.Bansal, Chapter 3
*   *Strength of Materials* by S. S. Bhavikatti, Chapter 4
*   *Strength of Materials* by Surendra Singh, Chapter 5
*   *Mechanics of Materials* by R. C. Hibbeler, Chapter 7

---

## 6. Mohr's Circle for Stress Transformation

Mohr's circle is a graphical method to determine stresses on an inclined plane. It provides a visual representation of the stress transformation equations.

**Construction of Mohr's Circle:**

1.  **Establish Axes:** Draw a coordinate system with the horizontal axis representing normal stress ($\sigma$) and the vertical axis representing shear stress ($\tau$).
2.  **Plot Center:** The center of the circle lies on the $\sigma$-axis at a coordinate of $(\frac{\sigma_x + \sigma_y}{2}, 0)$.
3.  **Plot Reference Point:** Consider the stress element with stresses $\sigma_x$, $\sigma_y$, and $\tau_{xy}$. Plot two points on the stress axes:
    *   Point A: $(\sigma_x, \tau_{xy})$
    *   Point B: $(\sigma_y, -\tau_{xy})$ (Note the negative sign for $\tau_{xy}$ when plotting the opposite face)
4.  **Draw the Circle:** The circle passes through points A and B. The center C is the midpoint of the segment AB (if it were projected onto the $\sigma$-axis) and the radius is half the distance between A and B.
    *   Radius $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
5.  **Interpret the Circle:**
    *   **Principal Stresses:** The points where the circle intersects the $\sigma$-axis represent the principal stresses ($\sigma_1$ and $\sigma_2$). These are the maximum and minimum normal stresses. The corresponding shear stresses are zero.
    *   **Maximum Shear Stress:** The highest and lowest points on the circle represent the maximum shear stresses ($\tau_{max}$) and their corresponding normal stresses ($\sigma_{avg} = \frac{\sigma_x + \sigma_y}{2}$).
    *   **Stress on an Inclined Plane:** To find the stresses on a plane inclined at an angle $\theta$ to the x-axis, measure $2\theta$ from point A (or B, depending on convention) on the circle in the same direction as $\theta$. The coordinates of the resulting point on the circle will be $(\sigma_n, \tau_{nt})$.

**Convention for $\theta$ in Mohr's Circle:**

*   If $\theta$ is the angle measured counterclockwise from the x-axis to the inclined plane, then $2\theta$ is measured counterclockwise from the point representing $(\sigma_x, \tau_{xy})$ on the circle.
*   If the shear stress on the inclined plane is positive ($\tau_{nt}$), it is plotted above the $\sigma$-axis. If it's negative, it's plotted below.

**Example Construction:**

Consider $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, $\tau_{xy} = 20$ MPa.

*   Center C: $(\frac{100+50}{2}, 0) = (75, 0)$
*   Point A: $(100, 20)$
*   Point B: $(50, -20)$
*   Radius R: $\sqrt{\left(\frac{100-50}{2}\right)^2 + 20^2} = \sqrt{25^2 + 20^2} = \sqrt{625 + 400} = \sqrt{1025} \approx 32.02$ MPa

*   Principal Stresses:
    $\sigma_1 = 75 + 32.02 = 107.02$ MPa
    $\sigma_2 = 75 - 32.02 = 42.98$ MPa
*   Maximum Shear Stress:
    $\tau_{max} = R = 32.02$ MPa
    $\sigma_{avg} = 75$ MPa

**Advantages of Mohr's Circle:**

*   Provides a clear visualization of stress transformation.
*   Simplifies the calculation of principal stresses and maximum shear stress.
*   Helps in understanding the relationships between different stress components.

**Reference:**
*   *Mechanics of Solids* by R.K.Bansal, Chapter 3
*   *Strength of Materials* by S. S. Bhavikatti, Chapter 4
*   *Strength of Materials* by Surendra Singh, Chapter 5
*   *Mechanics of Materials* by R. C. Hibbeler, Chapter 7
*   *Mechanics of Materials* by Beer & Johnston, Chapter 7

---

## 7. Practice Questions and Exercises

**Question 1 (Uniaxial Stress):**
A rod is subjected to a tensile stress of 150 MPa along its axis. Determine the normal and shear stresses on a plane inclined at $30^\circ$ to the axis of the rod.

**Answer 1:**
Given $\sigma_x = 150$ MPa, $\theta = 30^\circ$.
$\sigma_n = \sigma_x \cos^2 \theta = 150 \cos^2 30^\circ = 150 \times (\frac{\sqrt{3}}{2})^2 = 150 \times \frac{3}{4} = 112.5$ MPa
$\tau_{nt} = \sigma_x \sin \theta \cos \theta = 150 \sin 30^\circ \cos 30^\circ = 150 \times \frac{1}{2} \times \frac{\sqrt{3}}{2} = 150 \times \frac{\sqrt{3}}{4} \approx 64.95$ MPa

**Question 2 (Biaxial Stress):**
An element is subjected to stresses $\sigma_x = 80$ MPa (tensile) and $\sigma_y = -40$ MPa (compressive). Calculate the normal and shear stresses on a plane inclined at $60^\circ$ to the x-axis.

**Answer 2:**
Given $\sigma_x = 80$ MPa, $\sigma_y = -40$ MPa, $\theta = 60^\circ$.
$\sigma_n = \sigma_x \cos^2 \theta + \sigma_y \sin^2 \theta$
$\sigma_n = 80 \cos^2 60^\circ + (-40) \sin^2 60^\circ$
$\sigma_n = 80 \times (\frac{1}{2})^2 + (-40) \times (\frac{\sqrt{3}}{2})^2$
$\sigma_n = 80 \times \frac{1}{4} - 40 \times \frac{3}{4} = 20 - 30 = -10$ MPa (Compressive)

$\tau_{nt} = (\sigma_x - \sigma_y) \sin \theta \cos \theta$
$\tau_{nt} = (80 - (-40)) \sin 60^\circ \cos 60^\circ$
$\tau_{nt} = 120 \times \frac{\sqrt{3}}{2} \times \frac{1}{2} = 120 \times \frac{\sqrt{3}}{4} = 30\sqrt{3} \approx 51.96$ MPa

**Question 3 (General Plane Stress and Principal Stresses):**
An element is subjected to the following stresses: $\sigma_x = 60$ MPa, $\sigma_y = 20$ MPa, $\tau_{xy} = 30$ MPa.
(a) Determine the principal stresses and the orientation of the principal planes.
(b) Determine the maximum shear stress and the corresponding normal stress.
(c) Determine the normal and shear stresses on a plane inclined at $45^\circ$ to the x-axis.

**Answer 3:**
Given $\sigma_x = 60$ MPa, $\sigma_y = 20$ MPa, $\tau_{xy} = 30$ MPa.

(a) Principal Stresses:
$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
$\sigma_{1,2} = \frac{60 + 20}{2} \pm \sqrt{\left(\frac{60 - 20}{2}\right)^2 + 30^2}$
$\sigma_{1,2} = 40 \pm \sqrt{20^2 + 30^2}$
$\sigma_{1,2} = 40 \pm \sqrt{400 + 900} = 40 \pm \sqrt{1300}$
$\sigma_{1,2} = 40 \pm 36.06$
$\sigma_1 = 76.06$ MPa
$\sigma_2 = 3.94$ MPa

Orientation of Principal Planes:
$\tan 2\theta = \frac{2\tau_{xy}}{\sigma_x - \sigma_y} = \frac{2 \times 30}{60 - 20} = \frac{60}{40} = 1.5$
$2\theta = \arctan(1.5) \approx 56.31^\circ$
$\theta_1 = 28.16^\circ$ (for $\sigma_1$)
$\theta_2 = 28.16^\circ + 90^\circ = 118.16^\circ$ (for $\sigma_2$)

(b) Maximum Shear Stress:
$\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \sqrt{20^2 + 30^2} = \sqrt{1300} \approx 36.06$ MPa
Corresponding Normal Stress:
$\sigma_{avg} = \frac{\sigma_x + \sigma_y}{2} = \frac{60 + 20}{2} = 40$ MPa

(c) Stresses on a plane at $\theta = 45^\circ$:
$\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta - \tau_{xy} \sin 2\theta$
$\sigma_n = 40 + 20 \cos(2 \times 45^\circ) - 30 \sin(2 \times 45^\circ)$
$\sigma_n = 40 + 20 \cos 90^\circ - 30 \sin 90^\circ$
$\sigma_n = 40 + 20(0) - 30(1) = 40 - 30 = 10$ MPa

$\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta + \tau_{xy} \cos 2\theta$
$\tau_{nt} = 20 \sin(2 \times 45^\circ) + 30 \cos(2 \times 45^\circ)$
$\tau_{nt} = 20 \sin 90^\circ + 30 \cos 90^\circ$
$\tau_{nt} = 20(1) + 30(0) = 20$ MPa

**Question 4 (Mohr's Circle Practice):**
Construct Mohr's Circle for the stress state in Question 3 and verify the results for principal stresses, maximum shear stress, and stresses on the $45^\circ$ plane.

---

## 8. Important Points to Remember (Module 4 Summary)

*   **Stress Transformation:** The process of finding stresses on planes inclined to the original stress axes.
*   **Uniaxial Stress:** $\sigma_n = \sigma_x \cos^2 \theta$, $\tau_{nt} = \sigma_x \sin \theta \cos \theta$.
*   **Biaxial Stress:** $\sigma_n = \sigma_x \cos^2 \theta + \sigma_y \sin^2 \theta$, $\tau_{nt} = (\sigma_x - \sigma_y) \sin \theta \cos \theta$.
*   **General Plane Stress:**
    *   $\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos 2\theta - \tau_{xy} \sin 2\theta$
    *   $\tau_{nt} = \frac{\sigma_x - \sigma_y}{2} \sin 2\theta + \tau_{xy} \cos 2\theta$
*   **Principal Planes:** Planes with zero shear stress.
*   **Principal Stresses ($\sigma_1, \sigma_2$):** Normal stresses on principal planes.
    $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
*   **Orientation of Principal Planes:** $\tan 2\theta = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$.
*   **Maximum Shear Stress ($\tau_{max}$):** $\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$.
*   **Average Normal Stress ($\sigma_{avg}$):** $\sigma_{avg} = \frac{\sigma_x + \sigma_y}{2}$. This is the normal stress on the planes of maximum shear stress.
*   **Mohr's Circle:** A graphical tool for stress transformation.
    *   Center: $(\frac{\sigma_x + \sigma_y}{2}, 0)$
    *   Radius: $\sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    *   Angle on circle ($2\theta$) is twice the angle of the inclined plane.

This module is crucial for understanding the complete state of stress at a point and is a fundamental building block for more advanced topics in mechanics of solids and strength of materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
