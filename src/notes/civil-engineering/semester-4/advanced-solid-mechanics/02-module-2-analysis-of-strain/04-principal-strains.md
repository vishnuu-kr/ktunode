---
title: "Principal Strains"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f7"
status: "completed"
scrapedAt: "2026-05-20T18:42:34.192Z"
---
# ADVANCED SOLID MECHANICS: Module 2 - Analysis of Strain

## Topic: Principal Strains

---

### 1. Introduction to Principal Strains

**What are Principal Strains?**

Principal strains are the **maximum and minimum normal strains** that occur at a point in a material. At these specific orientations, the **shear strains are zero**. These directions are known as the **principal strain directions** or **principal axes of strain**.

**Why are Principal Strains Important?**

*   **Simplification:** They simplify the strain state at a point by eliminating shear strain components.
*   **Material Behavior:** They are crucial for understanding material failure criteria (e.g., yielding and fracture), as many material properties are defined in terms of principal stresses and strains.
*   **Stress-Strain Relationship:** They are directly related to principal stresses through the constitutive equations (Hooke's Law).

---

### 2. Mathematical Formulation of Principal Strains

Let the strain components at a point in a 2D Cartesian coordinate system be $\epsilon_x$, $\epsilon_y$, and $\gamma_{xy}$. We want to find the orientation of a new coordinate system ($x'$, $y'$) such that the shear strain in this new system, $\gamma_{x'y'}$, is zero. The normal strains in this new system will be the principal strains.

**Transformation Equations for Strain:**

The strain components in a rotated coordinate system ($x'$, $y'$) rotated by an angle $\theta$ from the original system ($x$, $y$) are given by:

*   **Normal Strain in $x'$ direction ($\epsilon_{x'}$):**
    $$ \epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \frac{\gamma_{xy}}{2} \sin(2\theta) $$

*   **Normal Strain in $y'$ direction ($\epsilon_{y'}$):**
    $$ \epsilon_{y'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) - \frac{\gamma_{xy}}{2} \sin(2\theta) $$

*   **Shear Strain in $x'y'$ plane ($\gamma_{x'y'}$):**
    $$ \gamma_{x'y'} = -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta) $$

**Finding the Principal Strain Directions:**

To find the directions of principal strains, we set the shear strain $\gamma_{x'y'}$ to zero:

$$ -(\epsilon_x - \epsilon_y) \sin(2\theta) + \gamma_{xy} \cos(2\theta) = 0 $$

$$ \gamma_{xy} \cos(2\theta) = (\epsilon_x - \epsilon_y) \sin(2\theta) $$

$$ \tan(2\theta) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} $$

This equation gives us two values for $2\theta$ that are $180^\circ$ apart, resulting in two principal strain directions that are $90^\circ$ apart. Let $\theta_p$ be the angle for the principal strain directions.

**Finding the Principal Strains ($\epsilon_1$, $\epsilon_2$):**

The principal strains are the normal strains in the principal directions. We can find them by substituting the values of $\theta_p$ back into the $\epsilon_{x'}$ (or $\epsilon_{y'}$) equation. A more direct way is to use the following formula, which is derived from the strain transformation equations when $\gamma_{x'y'} = 0$:

$$ \epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$

Where:
*   $\epsilon_1$ is the maximum principal strain.
*   $\epsilon_2$ is the minimum principal strain.

**Mohr's Circle for Strain:**

Mohr's circle is a graphical method to visualize and solve strain transformation problems, including finding principal strains.

*   **Construction:**
    *   Plot the strain components on a graph with the horizontal axis representing normal strain ($\epsilon$) and the vertical axis representing half the shear strain ($\gamma/2$).
    *   Locate a point representing the initial strain state with coordinates $(\epsilon_x, \gamma_{xy}/2)$.
    *   Locate another point for the complementary strain state with coordinates $(\epsilon_y, -\gamma_{xy}/2)$.
    *   The center of the circle is located at $\left(\frac{\epsilon_x + \epsilon_y}{2}, 0\right)$.
    *   The radius of the circle ($R_\epsilon$) is given by:
        $$ R_\epsilon = \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$
    *   Draw a circle passing through these points with the center calculated above.

*   **Interpretation:**
    *   The points where the circle intersects the horizontal axis represent the principal strains ($\epsilon_1$ and $\epsilon_2$).
    *   The angle $2\theta_p$ from the initial strain state to the principal strain state on the circle corresponds to the orientation of the principal strain directions.

---

### 3. Examples

**Example 1: Plane Strain**

Consider a point in a material subjected to the following plane strain state:
$\epsilon_x = 200 \times 10^{-6}$
$\epsilon_y = 100 \times 10^{-6}$
$\gamma_{xy} = 150 \times 10^{-6}$

Find the principal strains and the orientation of the principal strain axes.

**Solution:**

**Using the formulas:**

1.  **Orientation of Principal Strains:**
    $$ \tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{150 \times 10^{-6}}{200 \times 10^{-6} - 100 \times 10^{-6}} = \frac{150}{100} = 1.5 $$
    $$ 2\theta_p = \arctan(1.5) \approx 56.31^\circ $$
    $$ \theta_p \approx 28.15^\circ $$
    The other principal direction is at $28.15^\circ + 90^\circ = 118.15^\circ$.

2.  **Principal Strains:**
    $$ \epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$
    $$ \epsilon_{1,2} = \frac{200 \times 10^{-6} + 100 \times 10^{-6}}{2} \pm \sqrt{\left(\frac{200 \times 10^{-6} - 100 \times 10^{-6}}{2}\right)^2 + \left(\frac{150 \times 10^{-6}}{2}\right)^2} $$
    $$ \epsilon_{1,2} = \frac{300 \times 10^{-6}}{2} \pm \sqrt{\left(\frac{100 \times 10^{-6}}{2}\right)^2 + (75 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = 150 \times 10^{-6} \pm \sqrt{(50 \times 10^{-6})^2 + (75 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = 150 \times 10^{-6} \pm \sqrt{2500 \times 10^{-12} + 5625 \times 10^{-12}} $$
    $$ \epsilon_{1,2} = 150 \times 10^{-6} \pm \sqrt{8125 \times 10^{-12}} $$
    $$ \epsilon_{1,2} = 150 \times 10^{-6} \pm 90.14 \times 10^{-6} $$

    $$ \epsilon_1 = 150 \times 10^{-6} + 90.14 \times 10^{-6} = 240.14 \times 10^{-6} $$
    $$ \epsilon_2 = 150 \times 10^{-6} - 90.14 \times 10^{-6} = 59.86 \times 10^{-6} $$

**Using Mohr's Circle:**

1.  **Center:** $C = \frac{\epsilon_x + \epsilon_y}{2} = \frac{200 + 100}{2} = 150 \times 10^{-6}$
2.  **Radius:** $R_\epsilon = \sqrt{\left(\frac{200 - 100}{2}\right)^2 + \left(\frac{150}{2}\right)^2} = \sqrt{(50)^2 + (75)^2} = \sqrt{2500 + 5625} = \sqrt{8125} \approx 90.14 \times 10^{-6}$
3.  **Principal Strains:**
    $$ \epsilon_1 = C + R_\epsilon = 150 \times 10^{-6} + 90.14 \times 10^{-6} = 240.14 \times 10^{-6} $$
    $$ \epsilon_2 = C - R_\epsilon = 150 \times 10^{-6} - 90.14 \times 10^{-6} = 59.86 \times 10^{-6} $$
4.  **Orientation:**
    On the Mohr's circle, the point for $\epsilon_x$ is at $(200, 75)$. The angle $2\theta$ to the principal strain $\epsilon_1$ (further right on the circle) can be found from the right triangle formed by the center, the point $(\epsilon_x, \gamma_{xy}/2)$, and the point $(\epsilon_1, 0)$.
    $$ \tan(2\theta_p) = \frac{75}{200 - 150} = \frac{75}{50} = 1.5 $$
    $$ 2\theta_p \approx 56.31^\circ \implies \theta_p \approx 28.15^\circ $$

**Example 2: Pure Shear**

Consider a point subjected to pure shear:
$\epsilon_x = 0$
$\epsilon_y = 0$
$\gamma_{xy} = 400 \times 10^{-6}$

Find the principal strains and their orientation.

**Solution:**

**Using the formulas:**

1.  **Orientation of Principal Strains:**
    $$ \tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{400 \times 10^{-6}}{0 - 0} = \text{undefined} $$
    This means $2\theta_p = 90^\circ$ (or $270^\circ$).
    $$ \theta_p = 45^\circ $$
    The other principal direction is at $45^\circ + 90^\circ = 135^\circ$.

2.  **Principal Strains:**
    $$ \epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$
    $$ \epsilon_{1,2} = \frac{0 + 0}{2} \pm \sqrt{\left(\frac{0 - 0}{2}\right)^2 + \left(\frac{400 \times 10^{-6}}{2}\right)^2} $$
    $$ \epsilon_{1,2} = 0 \pm \sqrt{(0)^2 + (200 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = \pm 200 \times 10^{-6} $$

    $$ \epsilon_1 = 200 \times 10^{-6} $$
    $$ \epsilon_2 = -200 \times 10^{-6} $$

**Using Mohr's Circle:**

1.  **Center:** $C = \frac{0 + 0}{2} = 0$
2.  **Radius:** $R_\epsilon = \sqrt{\left(\frac{0 - 0}{2}\right)^2 + \left(\frac{400}{2}\right)^2} = \sqrt{0 + (200)^2} = 200 \times 10^{-6}$
3.  **Principal Strains:**
    $$ \epsilon_1 = C + R_\epsilon = 0 + 200 \times 10^{-6} = 200 \times 10^{-6} $$
    $$ \epsilon_2 = C - R_\epsilon = 0 - 200 \times 10^{-6} = -200 \times 10^{-6} $$
4.  **Orientation:**
    The point for $\epsilon_x$ is at $(0, 200)$. The angle $2\theta$ to the principal strain $\epsilon_1$ (further right on the circle) is $90^\circ$.
    $$ 2\theta_p = 90^\circ \implies \theta_p = 45^\circ $$

---

### 4. 3D Principal Strains

The concept of principal strains extends to three dimensions. At any point in a body, there exist three mutually perpendicular directions along which the shear strain is zero. These directions are the **principal strain axes**, and the normal strains along these axes are the **principal strains** ($\epsilon_1$, $\epsilon_2$, $\epsilon_3$).

The principal strains are the roots of the characteristic equation derived from the strain tensor:

$$ \begin{vmatrix} (\epsilon_{xx} - \epsilon) & \epsilon_{xy} & \epsilon_{xz} \\ \epsilon_{yx} & (\epsilon_{yy} - \epsilon) & \epsilon_{yz} \\ \epsilon_{zx} & \epsilon_{zy} & (\epsilon_{zz} - \epsilon) \end{vmatrix} = 0 $$

For a general 3D strain state with components $\epsilon_x, \epsilon_y, \epsilon_z, \gamma_{xy}, \gamma_{yz}, \gamma_{zx}$, the principal strains $\epsilon_1, \epsilon_2, \epsilon_3$ are the roots of the cubic equation:

$$ \epsilon^3 - I_1 \epsilon^2 + I_2 \epsilon - I_3 = 0 $$

Where $I_1, I_2, I_3$ are the strain invariants:

*   $I_1 = \epsilon_x + \epsilon_y + \epsilon_z$ (First invariant)
*   $I_2 = (\epsilon_x \epsilon_y - \frac{\gamma_{xy}^2}{4}) + (\epsilon_y \epsilon_z - \frac{\gamma_{yz}^2}{4}) + (\epsilon_z \epsilon_x - \frac{\gamma_{zx}^2}{4})$ (Second invariant)
*   $I_3 = \det \begin{pmatrix} \epsilon_x & \epsilon_{xy}/2 & \epsilon_{xz}/2 \\ \epsilon_{yx}/2 & \epsilon_y & \epsilon_{yz}/2 \\ \epsilon_{zx}/2 & \epsilon_{zy}/2 & \epsilon_z \end{pmatrix}$ (Third invariant)

**Note:** In many introductory advanced solid mechanics courses, the focus is primarily on 2D principal strains. 3D analysis is more involved.

---

### 5. Relationship to Principal Stresses

Principal strains are directly related to principal stresses through Hooke's Law for an isotropic material.

**For Plane Stress:**
Assuming $\sigma_z = 0$, and using $\epsilon_z = -\nu(\sigma_x + \sigma_y)/E$.
The principal strains $\epsilon_1, \epsilon_2$ are related to principal stresses $\sigma_1, \sigma_2$ as:

$$ \epsilon_1 = \frac{\sigma_1}{E} - \nu \frac{\sigma_2}{E} $$
$$ \epsilon_2 = \frac{\sigma_2}{E} - \nu \frac{\sigma_1}{E} $$

**For Plane Strain:**
Assuming $\epsilon_z = 0$, we have $\sigma_z = \lambda(\epsilon_x + \epsilon_y + \epsilon_z) = E\nu/(1-\nu^2) (\epsilon_x + \epsilon_y)$.
The principal strains $\epsilon_1, \epsilon_2$ are related to principal stresses $\sigma_1, \sigma_2$ as:

$$ \epsilon_1 = \frac{1}{E} [\sigma_1 - \nu(\sigma_2 + \sigma_3)] $$
$$ \epsilon_2 = \frac{1}{E} [\sigma_2 - \nu(\sigma_1 + \sigma_3)] $$
$$ \epsilon_3 = \frac{1}{E} [\sigma_3 - \nu(\sigma_1 + \sigma_2)] $$

If we are in a plane strain situation and consider the $x'-y'$ plane, and we know $\epsilon_1$ and $\epsilon_2$, we can find $\sigma_1$ and $\sigma_2$:

$$ \sigma_1 = \frac{E}{1-\nu^2} (\epsilon_1 + \nu \epsilon_2) $$
$$ \sigma_2 = \frac{E}{1-\nu^2} (\epsilon_2 + \nu \epsilon_1) $$

---

### 6. Learning Outcomes Covered

By studying this topic, you should be able to:

*   **Define principal strains and principal strain directions:** Understand that these are the maximum/minimum normal strains where shear strain is zero.
*   **Apply strain transformation equations to determine principal strains and their orientation:** Utilize the mathematical formulas derived from strain tensor transformations.
*   **Utilize Mohr's Circle for strain to graphically determine principal strains and their orientation:** Understand the graphical representation and its application.
*   **Recognize the physical significance of principal strains in material behavior and failure analysis:** Connect principal strains to material response and potential failure modes.
*   **(Advanced) Understand the extension of principal strain concepts to three-dimensional strain states:** Recognize the existence of three principal strains and their invariant properties.
*   **(Advanced) Relate principal strains to principal stresses through constitutive laws:** Understand how material properties link strain and stress states.

---

### 7. Practice Questions and Exercises

**Question 1:**
A 2D strain gauge rosette measures the following strains:
$\epsilon_A = 300 \mu\epsilon$ (along a $0^\circ$ axis)
$\epsilon_B = 200 \mu\epsilon$ (along a $45^\circ$ axis)
$\epsilon_C = 100 \mu\epsilon$ (along a $90^\circ$ axis)

Determine the principal strains and the orientation of the principal strain axes.

**Hint:** Use the strain rosette equations to find $\epsilon_x, \epsilon_y, \gamma_{xy}$ first.
$\epsilon_A = \epsilon_x$
$\epsilon_B = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2 \times 45^\circ) + \frac{\gamma_{xy}}{2} \sin(2 \times 45^\circ)$
$\epsilon_C = \epsilon_y$

This approach is often used in experimental mechanics. However, for this problem, let's assume we are given $\epsilon_x, \epsilon_y, \gamma_{xy}$ directly to practice the core principal strain calculation.

Let's rephrase:
A point in a material is subjected to the following strain components:
$\epsilon_x = 300 \times 10^{-6}$
$\epsilon_y = 100 \times 10^{-6}$
$\gamma_{xy} = 200 \times 10^{-6}$

Calculate the principal strains $\epsilon_1$ and $\epsilon_2$ and the angle $\theta_p$ to the direction of $\epsilon_1$.

**Answer 1:**
1.  **Orientation:**
    $$ \tan(2\theta_p) = \frac{\gamma_{xy}}{\epsilon_x - \epsilon_y} = \frac{200 \times 10^{-6}}{300 \times 10^{-6} - 100 \times 10^{-6}} = \frac{200}{200} = 1 $$
    $$ 2\theta_p = \arctan(1) = 45^\circ $$
    $$ \theta_p = 22.5^\circ $$

2.  **Principal Strains:**
    $$ \epsilon_{1,2} = \frac{300 \times 10^{-6} + 100 \times 10^{-6}}{2} \pm \sqrt{\left(\frac{300 \times 10^{-6} - 100 \times 10^{-6}}{2}\right)^2 + \left(\frac{200 \times 10^{-6}}{2}\right)^2} $$
    $$ \epsilon_{1,2} = 200 \times 10^{-6} \pm \sqrt{\left(\frac{200 \times 10^{-6}}{2}\right)^2 + (100 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = 200 \times 10^{-6} \pm \sqrt{(100 \times 10^{-6})^2 + (100 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = 200 \times 10^{-6} \pm \sqrt{2 \times (100 \times 10^{-6})^2} $$
    $$ \epsilon_{1,2} = 200 \times 10^{-6} \pm 100\sqrt{2} \times 10^{-6} $$
    $$ \epsilon_1 = 200 \times 10^{-6} + 141.42 \times 10^{-6} = 341.42 \times 10^{-6} $$
    $$ \epsilon_2 = 200 \times 10^{-6} - 141.42 \times 10^{-6} = 58.58 \times 10^{-6} $$

**Question 2:**
Using Mohr's Circle, sketch the circle for the strain state given in Question 1. Label the center, radius, $\epsilon_x$, $\epsilon_y$, $\gamma_{xy}/2$, $\epsilon_1$, $\epsilon_2$, and the angle $2\theta_p$.

**Answer 2:**
*   **Center (C):** $(\frac{\epsilon_x + \epsilon_y}{2}, 0) = (\frac{300+100}{2}, 0) = (200 \times 10^{-6}, 0)$
*   **Radius ($R_\epsilon$):** $\sqrt{(\frac{\epsilon_x - \epsilon_y}{2})^2 + (\frac{\gamma_{xy}}{2})^2} = \sqrt{(\frac{300-100}{2})^2 + (\frac{200}{2})^2} = \sqrt{100^2 + 100^2} = 100\sqrt{2} \times 10^{-6} \approx 141.42 \times 10^{-6}$
*   **Points on the circle:** $(\epsilon_x, \gamma_{xy}/2) = (300 \times 10^{-6}, 100 \times 10^{-6})$ and $(\epsilon_y, -\gamma_{xy}/2) = (100 \times 10^{-6}, -100 \times 10^{-6})$.
*   **Principal Strains:** $\epsilon_1 = C + R_\epsilon = 200 \times 10^{-6} + 141.42 \times 10^{-6} = 341.42 \times 10^{-6}$ and $\epsilon_2 = C - R_\epsilon = 200 \times 10^{-6} - 141.42 \times 10^{-6} = 58.58 \times 10^{-6}$. These are the points where the circle intersects the $\epsilon$ axis.
*   **Angle $2\theta_p$:** The angle on the circle from the point $(\epsilon_x, \gamma_{xy}/2)$ to the point $(\epsilon_1, 0)$. In the right triangle formed by $C$, $(\epsilon_x, \gamma_{xy}/2)$, and $(\epsilon_1, 0)$, the vertical side is $\gamma_{xy}/2 = 100 \times 10^{-6}$ and the horizontal side is $\epsilon_x - C = 300 \times 10^{-6} - 200 \times 10^{-6} = 100 \times 10^{-6}$.
    $\tan(2\theta_p) = \frac{100 \times 10^{-6}}{100 \times 10^{-6}} = 1$, so $2\theta_p = 45^\circ$.

**(Sketch of Mohr's Circle would be required here, showing the axes $\epsilon$ and $\gamma/2$, the circle, and the labeled points and angles.)**

**Question 3:**
A thin plate is in a state of plane stress. The strain in the x-direction is $\epsilon_x = 400 \times 10^{-6}$, and the strain in the y-direction is $\epsilon_y = -200 \times 10^{-6}$. The shear strain is $\gamma_{xy} = 300 \times 10^{-6}$. Assuming the material is isotropic with Young's modulus $E = 200$ GPa and Poisson's ratio $\nu = 0.3$, determine the principal stresses $\sigma_1$ and $\sigma_2$.

**Answer 3:**
First, calculate the principal strains using the results from Question 1 (same numerical values, different context):
$\epsilon_1 = 341.42 \times 10^{-6}$
$\epsilon_2 = 58.58 \times 10^{-6}$

Now, use the plane stress relationship to find principal stresses:
$$ \sigma_1 = \frac{E}{1-\nu^2} (\epsilon_1 + \nu \epsilon_2) $$
$$ \sigma_1 = \frac{200 \times 10^9 \text{ Pa}}{(1-0.3^2)} (341.42 \times 10^{-6} + 0.3 \times 58.58 \times 10^{-6}) $$
$$ \sigma_1 = \frac{200 \times 10^9}{0.91} (341.42 \times 10^{-6} + 17.57 \times 10^{-6}) $$
$$ \sigma_1 = \frac{200 \times 10^9}{0.91} (359.00 \times 10^{-6}) $$
$$ \sigma_1 \approx 78.90 \times 10^6 \text{ Pa} = 78.90 \text{ MPa} $$

$$ \sigma_2 = \frac{E}{1-\nu^2} (\epsilon_2 + \nu \epsilon_1) $$
$$ \sigma_2 = \frac{200 \times 10^9 \text{ Pa}}{(1-0.3^2)} (58.58 \times 10^{-6} + 0.3 \times 341.42 \times 10^{-6}) $$
$$ \sigma_2 = \frac{200 \times 10^9}{0.91} (58.58 \times 10^{-6} + 102.43 \times 10^{-6}) $$
$$ \sigma_2 = \frac{200 \times 10^9}{0.91} (161.01 \times 10^{-6}) $$
$$ \sigma_2 \approx 35.39 \times 10^6 \text{ Pa} = 35.39 \text{ MPa} $$

---

### 8. Important Points to Remember

*   **Principal strains are maximum and minimum normal strains.**
*   **At principal strain directions, shear strain is zero.**
*   **The orientation of principal strains is $90^\circ$ apart.**
*   **Mohr's Circle provides a graphical and efficient way to find principal strains and their orientation.**
*   **Principal strains are invariant quantities, meaning their values are independent of the coordinate system chosen.**
*   **Understanding principal strains is fundamental for predicting material failure and relating strain to stress states.**
*   **In 3D, there are three principal strains and three mutually perpendicular principal strain directions.**

---
