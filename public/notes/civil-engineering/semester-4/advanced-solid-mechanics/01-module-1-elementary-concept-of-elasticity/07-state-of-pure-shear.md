---
title: "State of pure shear"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ef"
status: "completed"
scrapedAt: "2026-05-20T18:42:29.317Z"
---
# ADVANCED SOLID MECHANICS: Module 1 - Elementary Concepts of Elasticity

## Topic: State of Pure Shear

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define and describe the state of pure shear.**
*   **Illustrate the stress and strain components associated with pure shear.**
*   **Relate the shear stress and shear strain in a material under pure shear conditions.**
*   **Derive the relationship between engineering shear strain and the distortion of a material element.**
*   **Recognize the application of pure shear in real-world scenarios.**

---

### 1. Introduction to States of Stress and Strain

Before diving into pure shear, it's essential to understand the foundational concepts:

*   **Stress ($\sigma$)**: A measure of the internal forces that neighbouring particles within a continuous material exert upon each other. It's force per unit area.
    *   Tensile stress (positive): Pulling apart.
    *   Compressive stress (negative): Pushing together.
    *   Shear stress ($\tau$): Force acting parallel to a surface.

*   **Strain ($\epsilon$)**: A measure of the deformation of a material. It's the change in length or shape divided by the original length or shape.
    *   Normal strain: Change in length per unit length.
    *   Shear strain ($\gamma$): Change in angle of a material element.

*   **State of Stress**: At any point within a body, the stress can be fully described by specifying the stresses acting on three mutually perpendicular planes. This is represented by the stress tensor.

*   **State of Strain**: Similarly, the deformation at a point is described by the strain tensor, which captures the normal and shear strains in three mutually perpendicular directions.

---

### 2. Definition of Pure Shear

A **state of pure shear** is a condition where the stresses acting on a material element are only shear stresses, and there are no normal (tensile or compressive) stresses.

**Key Characteristics:**

*   **No Normal Stresses:** $\sigma_x = \sigma_y = \sigma_z = 0$ (in the absence of any external forces causing normal stress).
*   **Existence of Shear Stresses:** Shear stresses are present on planes oriented at specific angles relative to the principal axes.

**Visualizing Pure Shear:**

Imagine a square element within a material. In pure shear, forces are applied to the sides of this square parallel to the sides, causing the square to deform into a rhombus.

---

### 3. Stress Components in Pure Shear

Consider a 2D Cartesian coordinate system ($x, y$). A state of pure shear can be represented by shear stresses acting on the faces of an infinitesimal element.

*   **On planes parallel to the x-y axes:**
    *   $\tau_{xy}$: Shear stress acting on the face perpendicular to the x-axis, in the y-direction.
    *   $\tau_{yx}$: Shear stress acting on the face perpendicular to the y-axis, in the x-direction.

*   **For equilibrium, $\tau_{xy} = \tau_{yx}$**.

In a 2D state of pure shear, the stress tensor can be written as:

$$
\begin{bmatrix}
\sigma_x & \tau_{xy} & 0 \\
\tau_{yx} & \sigma_y & 0 \\
0 & 0 & \sigma_z
\end{bmatrix}
$$

In the state of pure shear (as defined), $\sigma_x = \sigma_y = \sigma_z = 0$, so the stress tensor simplifies to:

$$
\begin{bmatrix}
0 & \tau_{xy} & 0 \\
\tau_{xy} & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

*(Note: In some contexts, the definition of pure shear might imply that $\tau_{xy}$ are the only non-zero stresses on the element's faces, while $\sigma_x$ and $\sigma_y$ are zero *on those specific faces*. This is a subtle but important distinction we'll clarify when discussing principal stresses).*

---

### 4. Relating Pure Shear to Normal Stresses (Principal Stresses)

While the *definition* of pure shear implies zero normal stresses on the faces aligned with the applied shear forces, it's crucial to understand that **pure shear can be resolved into equivalent states of normal stresses on different planes.**

Consider a square element with shear stresses $\tau$ acting on its faces. Now, consider a plane oriented at 45 degrees to the x and y axes.

*   **Stress Transformation Equations:** For a 2D stress state, the normal stress ($\sigma_n$) and shear stress ($\tau_n$) on a plane inclined at an angle $\theta$ to the x-axis are given by:
    *   $\sigma_n = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$
    *   $\tau_n = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$

*   **Applying to Pure Shear:** In our defined state of pure shear, $\sigma_x = 0$, $\sigma_y = 0$, and $\tau_{xy} = \tau$. Let's find the stresses on a plane at $\theta = 45^\circ$:
    *   $\sigma_n = \frac{0 + 0}{2} + \frac{0 - 0}{2} \cos(90^\circ) + \tau \sin(90^\circ)$
    *   $\sigma_n = 0 + 0 + \tau (1) = \tau$

    *   $\tau_n = -\frac{0 - 0}{2} \sin(90^\circ) + \tau \cos(90^\circ)$
    *   $\tau_n = 0 + \tau (0) = 0$

This is a fundamental result: **A state of pure shear on one set of planes is equivalent to a state of equal tensile and compressive normal stresses on planes oriented at 45 degrees.**

*   **Principal Stresses:** The planes where the shear stress is zero are called principal planes, and the normal stresses acting on these planes are called principal stresses. For pure shear, these principal stresses are:
    *   $\sigma_{p1} = +\tau$ (tensile)
    *   $\sigma_{p2} = -\tau$ (compressive)
    *   $\sigma_{p3} = 0$ (in 3D, acting on the plane of zero shear)

The directions of these principal stresses are at 45 degrees to the original x and y axes of the pure shear.

---

### 5. Strain Components in Pure Shear

Consider a 2D square element initially aligned with the x and y axes. When subjected to pure shear ($\tau_{xy}$), the element deforms.

*   **Shear Strain ($\gamma_{xy}$)**: This is the most direct measure of deformation in pure shear. It's defined as the change in angle of the initially right-angled element.
    *   Imagine the top edge moves to the right and the right edge moves down. The original right angle at the bottom-left corner will decrease, and the original right angle at the top-right corner will increase.
    *   $\gamma_{xy}$ is the change in angle (in radians) of the element. If the angle between the positive x-axis and the deformed line that was originally along the x-axis becomes $90^\circ - \alpha$, and the angle between the deformed line that was originally along the y-axis and the positive x-axis becomes $\beta$, then $\gamma_{xy} = \alpha + \beta$.

*   **Relationship between Shear Stress and Shear Strain (Hooke's Law for Shear):** For linearly elastic materials, the shear stress is directly proportional to the shear strain. This relationship is governed by the **shear modulus (G)** of the material.

    $$
    \tau_{xy} = G \gamma_{xy}
    $$

    *   **Shear Modulus (G)**: A material property representing its resistance to shear deformation. It's also known as the modulus of rigidity.

*   **Normal Strains in Pure Shear:** Even though the original x and y axes have zero normal stress, they experience normal strains due to the principal stresses at 45 degrees.
    *   Using Hooke's Law for normal stress ($\sigma = E \epsilon$, where E is Young's modulus) and considering the Poisson's ratio ($\nu$), the normal strains in the x and y directions can be related to the shear stress.
    *   $\epsilon_x = \frac{1}{E} (\sigma_x - \nu \sigma_y + \nu \sigma_z)$
    *   $\epsilon_y = \frac{1}{E} (\sigma_y - \nu \sigma_x + \nu \sigma_z)$
    *   $\epsilon_z = \frac{1}{E} (\sigma_z - \nu \sigma_x - \nu \sigma_y)$

    *   **Derivation for $\epsilon_x$ and $\epsilon_y$ in Pure Shear:**
        Considering the principal stresses $\sigma_{p1} = +\tau$ and $\sigma_{p2} = -\tau$ acting at 45 degrees, and the stress $\sigma_{p3} = 0$ acting normal to the plane of these two.
        The normal strains in the directions of the principal stresses are:
        *   $\epsilon_{p1} = \frac{1}{E}(\sigma_{p1} - \nu\sigma_{p2} - \nu\sigma_{p3}) = \frac{1}{E}(\tau - \nu(-\tau) - \nu(0)) = \frac{1}{E}(\tau + \nu\tau) = \frac{\tau}{E}(1+\nu)$
        *   $\epsilon_{p2} = \frac{1}{E}(\sigma_{p2} - \nu\sigma_{p1} - \nu\sigma_{p3}) = \frac{1}{E}(-\tau - \nu(\tau) - \nu(0)) = \frac{1}{E}(-\tau - \nu\tau) = -\frac{\tau}{E}(1+\nu)$

        Now, relate these principal strains back to the original x and y directions (which are at 45 degrees to the principal directions).
        The strain transformation equations show that:
        *   $\epsilon_x = \frac{\epsilon_{p1} + \epsilon_{p2}}{2} + \frac{\epsilon_{p1} - \epsilon_{p2}}{2} \cos(2 \times 45^\circ)$
        *   $\epsilon_y = \frac{\epsilon_{p1} + \epsilon_{p2}}{2} + \frac{\epsilon_{p1} - \epsilon_{p2}}{2} \cos(2 \times (-45^\circ))$

        Since $\cos(90^\circ) = \cos(-90^\circ) = 0$:
        *   $\epsilon_x = \frac{\epsilon_{p1} + \epsilon_{p2}}{2}$
        *   $\epsilon_y = \frac{\epsilon_{p1} + \epsilon_{p2}}{2}$

        Substituting the expressions for $\epsilon_{p1}$ and $\epsilon_{p2}$:
        *   $\epsilon_x = \frac{1}{2} \left( \frac{\tau}{E}(1+\nu) - \frac{\tau}{E}(1+\nu) \right) = 0$
        *   $\epsilon_y = \frac{1}{2} \left( \frac{\tau}{E}(1+\nu) - \frac{\tau}{E}(1+\nu) \right) = 0$

        This result seems counter-intuitive! The earlier stress transformation showed normal stresses of $\pm \tau$ at 45 degrees. The issue is that the relationship $\tau_{xy} = G \gamma_{xy}$ is the primary defining relationship for shear strain in the context of pure shear. The normal strains in the x and y directions *are* non-zero, and they are related to the shear stress and material properties. Let's re-evaluate the normal strains directly from the stress tensor:

        Using $\sigma_x = 0$, $\sigma_y = 0$, $\tau_{xy} = \tau$, and $\sigma_z = 0$:
        *   $\epsilon_x = \frac{1}{E} (\sigma_x - \nu \sigma_y + \nu \sigma_z) = \frac{1}{E} (0 - \nu(0) + \nu(0)) = 0$
        *   $\epsilon_y = \frac{1}{E} (\sigma_y - \nu \sigma_x + \nu \sigma_z) = \frac{1}{E} (0 - \nu(0) + \nu(0)) = 0$

        This means that for an element where the normal stresses are *truly zero* on the x and y faces, the normal strains in those directions are also zero. The deformation is purely angular.

        **Where does the $1+\nu$ come from?**
        The term $1+\nu$ arises when we consider the relationship between shear stress and normal strains. Let's consider the strains on the principal planes where $\sigma_{p1} = +\tau$ and $\sigma_{p2} = -\tau$.
        *   $\epsilon_{p1} = \frac{\tau}{E}(1+\nu)$
        *   $\epsilon_{p2} = -\frac{\tau}{E}(1+\nu)$

        The shear strain $\gamma_{xy}$ is related to these principal strains. The angle between the principal directions and the x-y directions is 45 degrees.
        The shear strain $\gamma_{xy}$ can be expressed in terms of normal strains:
        $\gamma_{xy} = 2(\epsilon_{xy})$ if we consider the change in angle from an element aligned with the principal axes.

        A more direct way to connect $\gamma_{xy}$ to normal strains is through the relationship $\tau_{xy} = G \gamma_{xy}$.
        And $G = \frac{E}{2(1+\nu)}$.

        Substituting this into $\tau_{xy} = G \gamma_{xy}$:
        $\tau_{xy} = \frac{E}{2(1+\nu)} \gamma_{xy}$
        $\gamma_{xy} = \frac{2(1+\nu)}{E} \tau_{xy}$

        This equation directly links the shear stress and shear strain for pure shear. The normal strains $\epsilon_x$ and $\epsilon_y$ in the planes of pure shear are indeed zero *if* the definition of pure shear means $\sigma_x = \sigma_y = 0$. The distortion (rhombus shape) is captured by $\gamma_{xy}$.

---

### 6. Distortion of a Material Element in Pure Shear

The shear strain $\gamma_{xy}$ causes a distortion of the material element.

*   **Initial State:** A square element with sides parallel to the x and y axes.
*   **Deformed State:**
    *   The angle between the originally vertical (y) and horizontal (x) sides at the bottom-left corner decreases from 90 degrees. The change in this angle is $\gamma_{xy}$.
    *   The element elongates along the diagonal where the tensile principal stress acts and contracts along the diagonal where the compressive principal stress acts.

Consider an element with vertices at (0,0), (a,0), (a,a), (0,a).
After pure shear $\tau_{xy}$:
*   The vertex (a,0) moves to $(a, a \gamma_{xy})$.
*   The vertex (0,a) moves to $(a \gamma_{xy}, a)$.
*   The vertex (a,a) moves to $(a + a \gamma_{xy}, a + a \gamma_{xy})$.

The original angle at (0,0) between the x-axis and the line to (0,a) was 90 degrees. After deformation, the line from (0,0) to (a $\gamma_{xy}$, a) has a slope of $a / (a \gamma_{xy}) = 1/\gamma_{xy}$. The angle this line makes with the x-axis is $\arctan(1/\gamma_{xy})$.
The change in angle from 90 degrees is approximately $1/\gamma_{xy}$ for small strains. This is consistent with $\gamma_{xy}$ being the change in angle.

*   **Relationship between $\gamma_{xy}$ and Distortion:**
    For a small angle $\alpha$, $\tan \alpha \approx \alpha$.
    The angle of the line originally along the y-axis (from (0,0) to (0,a)) with the x-axis is 90 degrees.
    The new line from (0,0) to (a $\gamma_{xy}$, a) makes an angle $\theta$ with the x-axis.
    $\tan \theta = \frac{a}{a\gamma_{xy}} = \frac{1}{\gamma_{xy}}$
    If we consider the change in the angle from the original y-axis, let the angle of the deformed element with the x-axis be $90^\circ - \phi$. Then the angle with the y-axis would be $\phi$.
    The angle $\theta$ is $90^\circ - \phi$.
    $\tan(90^\circ - \phi) = \cot \phi = 1/\gamma_{xy}$
    For small angles, $\cot \phi \approx 1/\phi$.
    So, $1/\phi \approx 1/\gamma_{xy}$, which means $\phi \approx \gamma_{xy}$.
    This confirms that $\gamma_{xy}$ directly represents the angular distortion of the element.

---

### 7. Examples of Pure Shear

Pure shear is a fundamental state of stress that occurs in various engineering applications:

*   **Torsion of a Circular Shaft:** When a shaft is twisted, the cross-sections experience shear stresses. For a solid circular shaft subjected to torque, the stress distribution is not uniform, but at the surface, it's a state of pure shear.
    *   Consider a small element on the surface of a shaft under torsion. The shear stress acts tangentially. If we rotate our coordinate system by 45 degrees, this state of pure shear is equivalent to tensile and compressive stresses along the diagonals. This is why shafts under torsion are susceptible to failure along helical or spiral crack paths, which are aligned with these tensile stresses.

*   **Lap Joints:** Two plates joined by an adhesive or fasteners where forces are applied tangentially to the joint surface. The shear stress in the adhesive or fasteners can be approximated as pure shear.

*   **Thin-walled Cylinders under Internal Pressure (Circumferential Stress)**: While internal pressure primarily causes tensile hoop stress, if there are additional forces or constraints, or if we consider specific stress transformations, a state of pure shear can be derived. However, this is a more complex scenario.

*   **Shear Panels/Walls:** In structural engineering, shear walls are designed to resist lateral forces (like wind or seismic loads). The stress state within these panels can be approximated as pure shear.

*   **Analogy:** Imagine a deck of cards. Pushing the top card horizontally relative to the bottom card without bending the cards induces a state of pure shear.

---

### 8. Practice Questions and Exercises

**Question 1:**
Define the state of pure shear and list its key stress characteristics.

**Answer:**
The state of pure shear is a stress condition where only shear stresses are present, and there are no normal (tensile or compressive) stresses acting on the material element's faces. Key characteristics are $\sigma_x = 0$, $\sigma_y = 0$, $\sigma_z = 0$, and $\tau_{xy} = \tau_{yx} = \tau \neq 0$.

**Question 2:**
A square element in a material is subjected to a state of pure shear with $\tau_{xy} = 50$ MPa. What are the principal stresses acting on the material, and on which planes do they act?

**Answer:**
The principal stresses are $\sigma_{p1} = +\tau = +50$ MPa (tensile) and $\sigma_{p2} = -\tau = -50$ MPa (compressive). These stresses act on planes oriented at 45 degrees to the original x and y axes of the pure shear.

**Question 3:**
If a material has a shear modulus $G = 75$ GPa, and it is subjected to a state of pure shear such that the shear strain is $\gamma_{xy} = 0.001$ radians, what is the shear stress?

**Answer:**
Using Hooke's Law for shear, $\tau_{xy} = G \gamma_{xy}$.
$\tau_{xy} = (75 \times 10^9 \, \text{Pa}) \times (0.001)$
$\tau_{xy} = 75 \times 10^6 \, \text{Pa} = 75$ MPa.

**Question 4:**
Explain how the state of pure shear in a circular shaft subjected to torsion relates to tensile and compressive stresses.

**Answer:**
In a circular shaft under torsion, the shear stress acts tangentially on the cross-section. At the surface, this can be approximated as pure shear. If we consider planes oriented at 45 degrees to the shaft's axis, this pure shear state is equivalent to equal tensile and compressive normal stresses acting along these diagonal planes. This is why cracks in twisted shafts often propagate along helical paths.

**Question 5:**
For a material with Young's modulus $E = 200$ GPa and Poisson's ratio $\nu = 0.3$, what is the shear modulus $G$? If this material is in pure shear with $\tau_{xy} = 60$ MPa, what is the shear strain $\gamma_{xy}$?

**Answer:**
First, calculate the shear modulus:
$G = \frac{E}{2(1+\nu)} = \frac{200 \, \text{GPa}}{2(1+0.3)} = \frac{200 \, \text{GPa}}{2.6} \approx 76.92 \, \text{GPa}$.

Now, calculate the shear strain:
$\gamma_{xy} = \frac{\tau_{xy}}{G} = \frac{60 \, \text{MPa}}{76.92 \, \text{GPa}} = \frac{60 \times 10^6 \, \text{Pa}}{76.92 \times 10^9 \, \text{Pa}} \approx 0.000780 \, \text{radians}$.

---

### 9. Important Points to Remember

*   **Definition of Pure Shear:** Only shear stresses, no normal stresses on the element's faces.
*   **Stress Transformation:** Pure shear on one set of planes is equivalent to tensile and compressive normal stresses on planes rotated by 45 degrees.
*   **Principal Stresses in Pure Shear:** $\sigma_{p1} = +\tau$ and $\sigma_{p2} = -\tau$.
*   **Shear Modulus (G):** Relates shear stress and shear strain: $\tau_{xy} = G \gamma_{xy}$.
*   **Relationship between E, G, and $\nu$:** $G = \frac{E}{2(1+\nu)}$.
*   **Angular Distortion:** Shear strain $\gamma_{xy}$ directly measures the change in angle of a material element.
*   **Applications:** Torsion of shafts, shear panels, lap joints.

---
This concludes Module 1, Topic: State of Pure Shear. Remember to review the definitions and relationships, especially the connection between pure shear and equivalent normal stresses.
