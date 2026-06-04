---
title: "Principal Stresses"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109eb"
status: "completed"
scrapedAt: "2026-05-20T18:42:26.509Z"
---
# ADVANCED SOLID MECHANICS - MODULE 1: ELEMENTARY CONCEPT OF ELASTICITY

## TOPIC: PRINCIPAL STRESSES

---

### **1. INTRODUCTION TO STRESS AND PRINCIPAL STRESSES**

*   **Definition of Stress:** Stress is an internal force per unit area within a material that resists deformation due to external forces. It's a tensor quantity, meaning it has magnitude and direction, and its effect depends on the orientation of the surface on which it acts.

*   **General Stress State:** At any point within a stressed body, the stress on a small elemental cube can be described by nine components: three normal stresses ($\sigma_x$, $\sigma_y$, $\sigma_z$) and six shear stresses ($\tau_{xy}$, $\tau_{yx}$, $\tau_{xz}$, $\tau_{zx}$, $\tau_{yz}$, $\tau_{zy}$). Due to the equilibrium of moments, shear stresses on perpendicular planes are equal ($\tau_{xy} = \tau_{yx}$, etc.). So, we have six independent stress components.

*   **Need for Principal Stresses:** In a complex stress state, it's often beneficial to find a particular orientation of the surface where the stress is purely normal, with no shear component. These special stresses are called **Principal Stresses**.

*   **Definition of Principal Stresses:** Principal stresses are the maximum and minimum normal stresses that occur at a point in a material. At the planes where principal stresses exist, the corresponding shear stresses are zero.

*   **Principal Planes:** The planes on which the principal stresses act are called **Principal Planes**. These planes are always mutually perpendicular.

*   **Importance of Principal Stresses:**
    *   Simplifies the stress state at a point.
    *   Crucial for predicting material failure (e.g., yielding and fracture) as materials often fail under maximum tensile or compressive stress.
    *   Used in stress transformation equations and Mohr's Circle analysis.

---

### **2. MATHEMATICAL FORMULATION OF PRINCIPAL STRESSES**

*   **Stress Tensor:** The stress state at a point can be represented by a stress tensor:

    $$
    [\sigma] = \begin{bmatrix}
    \sigma_x & \tau_{xy} & \tau_{xz} \\
    \tau_{yx} & \sigma_y & \tau_{yz} \\
    \tau_{zx} & \tau_{zy} & \sigma_z
    \end{bmatrix}
    $$

*   **Stress on an Inclined Plane:** Consider a plane inclined at an angle $\theta$ to the x-axis in the xy-plane. The normal stress ($\sigma_n$) and shear stress ($\tau_{nt}$) on this plane can be derived from the stress components.

    *   For a 2D plane stress state (where $\sigma_z = \tau_{xz} = \tau_{yz} = 0$):

        $$
        \sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)
        $$

        $$
        \tau_{nt} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)
        $$

*   **Condition for Principal Stresses:** Principal stresses occur when the shear stress ($\tau_{nt}$) on the inclined plane is zero. Setting the $\tau_{nt}$ equation to zero:

    $$
    -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta) = 0
    $$

    Rearranging, we get:

    $$
    \tan(2\theta) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}
    $$

    This equation gives the angles ($2\theta$) at which the shear stress is zero, corresponding to the principal planes.

*   **Finding Principal Stresses (2D Case):** Substitute the values of $\sin(2\theta)$ and $\cos(2\theta)$ obtained from $\tan(2\theta)$ back into the $\sigma_n$ equation. This leads to the characteristic equation (or eigenvalue equation) for principal stresses:

    $$
    \sigma_n^2 - (\sigma_x + \sigma_y)\sigma_n + (\sigma_x \sigma_y - \tau_{xy}^2) = 0
    $$

    The roots of this quadratic equation are the principal stresses, denoted as $\sigma_1$ and $\sigma_2$.

    $$
    \sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}
    $$

*   **Principal Stresses in 3D:** The concept extends to three dimensions. The condition for principal stresses is that the shear stress acting on a plane is zero. This leads to a characteristic equation in the form of a cubic polynomial in terms of $\sigma$:

    $$
    \det([\sigma] - \sigma[I]) = 0
    $$

    where $\sigma$ represents the principal stresses, $[I]$ is the identity matrix.

    For a general 3D stress state, the equation is:

    $$
    \sigma^3 - I_1 \sigma^2 + I_2 \sigma - I_3 = 0
    $$

    where $I_1$, $I_2$, and $I_3$ are the stress invariants:

    *   $I_1 = \sigma_x + \sigma_y + \sigma_z$ (First invariant)
    *   $I_2 = (\sigma_x \sigma_y - \tau_{xy}^2) + (\sigma_y \sigma_z - \tau_{yz}^2) + (\sigma_z \sigma_x - \tau_{zx}^2)$ (Second invariant)
    *   $I_3 = \sigma_x(\sigma_y \sigma_z - \tau_{yz}^2) - \tau_{xy}(\tau_{xy}\sigma_z - \tau_{xz}\tau_{yz}) + \tau_{xz}(\tau_{xy}\tau_{yz} - \sigma_y\tau_{zx})$ (Third invariant)

    The roots of this cubic equation are the three principal stresses: $\sigma_1$, $\sigma_2$, and $\sigma_3$.

---

### **3. MOHR'S CIRCLE FOR STRESS**

*   **Concept:** Mohr's Circle is a graphical method used to visualize the transformation of stresses on different planes passing through a point. It provides a convenient way to determine principal stresses, maximum shear stresses, and the orientation of planes.

*   **Construction of Mohr's Circle (2D Plane Stress):**
    1.  **Establish Axes:** Draw a coordinate system with the horizontal axis representing normal stress ($\sigma$) and the vertical axis representing shear stress ($\tau$).
    2.  **Plot Center:** The center of the circle is located at $(\frac{\sigma_x + \sigma_y}{2}, 0)$.
    3.  **Plot Points:** Plot two points representing the stress state on the x and y planes.
        *   Point A (stress on x-plane): $(\sigma_x, \tau_{xy})$
        *   Point B (stress on y-plane): $(\sigma_y, -\tau_{xy})$ (Note the sign convention for shear stress).
    4.  **Draw Circle:** Draw a circle passing through points A and B. The center of the circle is the midpoint of the line segment AB. The radius of the circle is half the distance between A and B.

*   **Interpretation of Mohr's Circle:**
    *   **Principal Stresses ($\sigma_1, \sigma_2$):** The points where the circle intersects the $\sigma$-axis are the principal stresses ($\sigma_1$ and $\sigma_2$). $\sigma_1$ is the larger value (maximum normal stress) and $\sigma_2$ is the smaller value (minimum normal stress).
    *   **Maximum Shear Stress ($\tau_{max}$):** The radius of the circle represents the maximum shear stress. The points at the top and bottom of the circle represent the planes with maximum shear stress. The normal stress on these planes is $(\frac{\sigma_x + \sigma_y}{2})$.
    *   **Orientation of Principal Planes:** The angle $2\theta_p$ from point A (or B) to the intersection point on the $\sigma$-axis represents twice the angle between the x-plane and the first principal plane.
    *   **Stress on Any Plane:** Any point on the circumference of the circle represents the normal and shear stress on a plane inclined at a certain angle.

*   **Steps for using Mohr's Circle:**
    1.  Calculate $\sigma_{avg} = \frac{\sigma_x + \sigma_y}{2}$ and $R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$.
    2.  Principal stresses are $\sigma_1 = \sigma_{avg} + R$ and $\sigma_2 = \sigma_{avg} - R$.
    3.  Maximum shear stress is $\tau_{max} = R$. The normal stress on the planes of maximum shear is $\sigma_{avg}$.
    4.  The angle $2\theta_p$ is such that $\cos(2\theta_p) = \frac{\sigma_x - \sigma_y}{2R}$ and $\sin(2\theta_p) = \frac{\tau_{xy}}{R}$ (for the principal plane corresponding to $\sigma_1$).

---

### **4. EXAMPLES AND APPLICATIONS**

**Example 1: Plane Stress State**

Consider a thin plate subjected to the following stress state:
$\sigma_x = 100 \, \text{MPa}$, $\sigma_y = 50 \, \text{MPa}$, $\tau_{xy} = 20 \, \text{MPa}$.
Determine the principal stresses and the orientation of the principal planes.

**Solution using formulas:**

1.  **Calculate $\sigma_{avg}$ and R:**
    $\sigma_{avg} = \frac{100 + 50}{2} = 75 \, \text{MPa}$
    $R = \sqrt{\left(\frac{100 - 50}{2}\right)^2 + 20^2} = \sqrt{25^2 + 20^2} = \sqrt{625 + 400} = \sqrt{1025} \approx 32.02 \, \text{MPa}$

2.  **Calculate Principal Stresses:**
    $\sigma_1 = \sigma_{avg} + R = 75 + 32.02 = 107.02 \, \text{MPa}$
    $\sigma_2 = \sigma_{avg} - R = 75 - 32.02 = 42.98 \, \text{MPa}$

3.  **Calculate Orientation:**
    $\tan(2\theta) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y} = \frac{2 \times 20}{100 - 50} = \frac{40}{50} = 0.8$
    $2\theta = \arctan(0.8) \approx 38.66^\circ$
    $\theta \approx 19.33^\circ$

    The first principal plane is oriented at approximately $19.33^\circ$ counterclockwise from the x-axis. The second principal plane will be at $19.33^\circ + 90^\circ = 109.33^\circ$.

**Solution using Mohr's Circle:**

1.  **Center:** $(\frac{100+50}{2}, 0) = (75, 0)$
2.  **Points:** A = (100, 20), B = (50, -20)
3.  **Radius:** $R = \sqrt{(100-75)^2 + (20-0)^2} = \sqrt{25^2 + 20^2} = \sqrt{1025} \approx 32.02 \, \text{MPa}$
4.  **Principal Stresses:**
    $\sigma_1 = 75 + 32.02 = 107.02 \, \text{MPa}$
    $\sigma_2 = 75 - 32.02 = 42.98 \, \text{MPa}$
5.  **Orientation:** The angle $2\theta$ from point A to $\sigma_1$ is found using the triangle formed by the center, point A, and the projection of A on the $\sigma$-axis.
    $\cos(2\theta) = \frac{75 - 100}{32.02} = \frac{-25}{32.02}$ (incorrect approach)
    Correct approach: $\cos(2\theta) = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{100-75}{32.02} = \frac{25}{32.02}$
    $\sin(2\theta) = \frac{20}{32.02}$
    $2\theta = \arctan(\frac{20}{25}) = \arctan(0.8) \approx 38.66^\circ$
    $\theta \approx 19.33^\circ$

**Example 2: Triaxial Stress State (Conceptual)**

Consider a point in a material under hydrostatic pressure, where $\sigma_x = \sigma_y = \sigma_z = -P$ and all shear stresses are zero.
In this case, the principal stresses are $\sigma_1 = \sigma_2 = \sigma_3 = -P$. This is a special case where all directions are principal directions.

**Example 3: Stress Concentration**

Principal stresses are crucial for understanding stress concentration around holes or notches in mechanical components. The highest principal stresses often occur at the edges of these geometric discontinuities, dictating the failure location.

---

### **5. PRACTICE QUESTIONS AND EXERCISES**

**Question 1:**
A plane stress element is subjected to stresses $\sigma_x = 60 \, \text{MPa}$, $\sigma_y = -20 \, \text{MPa}$, and $\tau_{xy} = 40 \, \text{MPa}$.
(a) Calculate the principal stresses $\sigma_1$ and $\sigma_2$.
(b) Determine the orientation of the principal planes.
(c) Find the maximum shear stress $\tau_{max}$ and the normal stress on the planes of maximum shear.

**Question 2:**
Using Mohr's Circle, sketch the circle for the stress state given in Question 1. Label the center, radius, principal stresses, and the angles.

**Question 3:**
A stress tensor at a point is given by:
$$
[\sigma] = \begin{bmatrix}
50 & 10 & 0 \\
10 & 60 & 0 \\
0 & 0 & 20
\end{bmatrix} \, \text{MPa}
$$
Assuming this is a plane stress problem (or that $\sigma_z$, $\tau_{xz}$, $\tau_{yz}$ are given), find the principal stresses.

---

### **6. ANSWERS TO PRACTICE QUESTIONS**

**Answer 1:**

1.  **Calculate $\sigma_{avg}$ and R:**
    $\sigma_{avg} = \frac{60 + (-20)}{2} = 20 \, \text{MPa}$
    $R = \sqrt{\left(\frac{60 - (-20)}{2}\right)^2 + 40^2} = \sqrt{\left(\frac{80}{2}\right)^2 + 40^2} = \sqrt{40^2 + 40^2} = \sqrt{1600 + 1600} = \sqrt{3200} \approx 56.57 \, \text{MPa}$

2.  **Calculate Principal Stresses:**
    $\sigma_1 = \sigma_{avg} + R = 20 + 56.57 = 76.57 \, \text{MPa}$
    $\sigma_2 = \sigma_{avg} - R = 20 - 56.57 = -36.57 \, \text{MPa}$

3.  **Determine Orientation:**
    $\tan(2\theta) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y} = \frac{2 \times 40}{60 - (-20)} = \frac{80}{80} = 1$
    $2\theta = \arctan(1) = 45^\circ$
    $\theta = 22.5^\circ$

    The first principal plane is oriented at $22.5^\circ$ counterclockwise from the x-axis. The second principal plane is at $22.5^\circ + 90^\circ = 112.5^\circ$.

4.  **Maximum Shear Stress:**
    $\tau_{max} = R \approx 56.57 \, \text{MPa}$
    The normal stress on the planes of maximum shear is $\sigma_{avg} = 20 \, \text{MPa}$.

**Answer 2:**

*   **Center:** (20, 0) MPa
*   **Radius:** 56.57 MPa
*   **Principal Stresses:** $\sigma_1 = 76.57$ MPa (on the positive $\sigma$ axis), $\sigma_2 = -36.57$ MPa (on the negative $\sigma$ axis).
*   **Maximum Shear Stress:** The top of the circle is at (20, 56.57) and the bottom at (20, -56.57).
*   **Angles:** Point A = (60, 40). The angle $2\theta$ is measured from the line connecting the center (20,0) to point A (60,40) to the $\sigma_1$ intercept.
    $\tan(2\theta) = \frac{40}{60-20} = \frac{40}{40} = 1$, so $2\theta = 45^\circ$.
    The angle from the x-axis to the first principal plane is $\theta = 22.5^\circ$.

**(Sketch of Mohr's Circle would be provided here in a visual format.)**

**Answer 3:**

Assuming this is a plane stress problem where $\sigma_z = 20 \, \text{MPa}$ and $\tau_{xz} = \tau_{yz} = 0$.
The stress tensor is:
$$
[\sigma] = \begin{bmatrix}
50 & 10 & 0 \\
10 & 60 & 0 \\
0 & 0 & 20
\end{bmatrix} \, \text{MPa}
$$

We need to solve the characteristic equation:
$\det([\sigma] - \sigma[I]) = 0$

$$
\begin{vmatrix}
50-\sigma & 10 & 0 \\
10 & 60-\sigma & 0 \\
0 & 0 & 20-\sigma
\end{vmatrix} = 0
$$

Expanding the determinant:
$(50-\sigma) \begin{vmatrix} 60-\sigma & 0 \\ 0 & 20-\sigma \end{vmatrix} - 10 \begin{vmatrix} 10 & 0 \\ 0 & 20-\sigma \end{vmatrix} + 0 = 0$
$(50-\sigma)(60-\sigma)(20-\sigma) - 10(10(20-\sigma)) = 0$
$(50-\sigma)(60-\sigma)(20-\sigma) - 100(20-\sigma) = 0$

Factor out $(20-\sigma)$:
$(20-\sigma)[(50-\sigma)(60-\sigma) - 100] = 0$

One principal stress is $\sigma_3 = 20 \, \text{MPa}$.
The remaining quadratic equation is:
$(50-\sigma)(60-\sigma) - 100 = 0$
$3000 - 50\sigma - 60\sigma + \sigma^2 - 100 = 0$
$\sigma^2 - 110\sigma + 2900 = 0$

Using the quadratic formula:
$\sigma = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{110 \pm \sqrt{(-110)^2 - 4(1)(2900)}}{2(1)}$
$\sigma = \frac{110 \pm \sqrt{12100 - 11600}}{2} = \frac{110 \pm \sqrt{500}}{2}$
$\sigma = \frac{110 \pm 22.36}{2}$

$\sigma_1 = \frac{110 + 22.36}{2} = \frac{132.36}{2} \approx 66.18 \, \text{MPa}$
$\sigma_2 = \frac{110 - 22.36}{2} = \frac{87.64}{2} \approx 43.82 \, \text{MPa}$

So the principal stresses are approximately **66.18 MPa, 43.82 MPa, and 20 MPa**.

---

### **7. IMPORTANT POINTS TO REMEMBER**

*   **Principal stresses are normal stresses:** They have no shear components.
*   **Principal planes are orthogonal:** They are always perpendicular to each other.
*   **Maximum Normal Stress:** The largest principal stress ($\sigma_1$) represents the maximum tensile stress (or minimum compressive stress) at a point.
*   **Minimum Normal Stress:** The smallest principal stress ($\sigma_3$ in 3D, or $\sigma_2$ in 2D) represents the minimum tensile stress (or maximum compressive stress).
*   **Maximum Shear Stress:** Occurs on planes oriented $45^\circ$ to the principal planes. The magnitude of the maximum shear stress is half the difference between the two largest principal stresses (e.g., $\frac{\sigma_1 - \sigma_3}{2}$). In 2D, it's $\frac{\sigma_1 - \sigma_2}{2}$ or the radius of Mohr's circle.
*   **Invariants:** The stress invariants ($I_1, I_2, I_3$) are independent of the orientation of the coordinate system and are useful in 3D stress analysis.
*   **Mohr's Circle:** A powerful graphical tool for visualizing stress transformations and determining principal stresses, maximum shear stresses, and orientations in 2D.
*   **Failure Theories:** Many failure criteria (e.g., maximum principal stress theory, maximum shear stress theory, distortion energy theory) are based on principal stresses.

---
This concludes the study notes for Principal Stresses in Advanced Solid Mechanics, Module 1. Remember to practice applying these concepts to various problems to solidify your understanding.
