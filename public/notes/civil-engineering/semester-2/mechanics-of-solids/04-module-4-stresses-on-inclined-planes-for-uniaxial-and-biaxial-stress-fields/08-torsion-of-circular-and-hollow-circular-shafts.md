---
title: "Torsion of circular and hollow circular shafts"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stresses on inclined planes for uniaxial and biaxial stress fields"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f7d"
status: "completed"
scrapedAt: "2026-05-20T18:37:33.947Z"
---
# MECHANICS OF SOLIDS

## Module 4: Stresses on Inclined Planes for Uniaxial and Biaxial Stress Fields

### Topic: Torsion of Circular and Hollow Circular Shafts

Welcome to Module 4! Today, we're diving into a fascinating aspect of how materials behave under twisting forces. We'll be exploring the **Torsion of Circular and Hollow Circular Shafts**. This topic is crucial because many machine components, like driveshafts in cars or the axles of a bicycle, are essentially shafts subjected to twisting. Understanding how these shafts respond to these forces helps us design them to be strong and safe.

This topic directly relates to several of our course outcomes. When we talk about torsion, we're essentially dealing with how structural elements respond to twisting moments, which links to **CO2: Explain the behavior and response of various structural elements under various loading conditions**. We will be applying principles to calculate internal stresses and strains due to twisting, which aligns perfectly with **CO3: Apply the principles of solid mechanics to calculate internal stresses/strains, stress resultants and strain energies in structural elements subjected to axial/transverse loads and bending/twisting moments**. Furthermore, understanding torsion is a stepping stone to more complex stress analysis, touching upon **CO5: Perform stress transformations, identify principal planes/ stresses and maximum shear stress at a point in a structural member**, as torsion primarily induces shear stresses. Finally, being able to calculate the required shaft dimensions for a given torque will help us with **CO6: Analyse the given structural member to calculate the safe load or proportion the cross section to carry the load safely**.

Let's begin by setting the stage.

### 1. Introduction to Torsion

Imagine you're trying to tighten a bolt with a wrench. The force you apply to the handle of the wrench creates a **twisting moment**, also known as a **torque**, about the axis of the bolt. This torque is transmitted through the bolt, causing it to twist. In mechanical engineering, shafts are the components that transmit power through rotation, and they are the primary elements subjected to torque.

When a shaft is subjected to a torque, it experiences internal **shear stresses** and **shearing strains**. Unlike tensile or compressive stresses, which act perpendicular to a surface, shear stresses act parallel to the surface. Think of trying to slide the pages of a book over each other – that's a good analogy for shear.

Our goal in this topic is to understand:
*   How torque is distributed within a shaft.
*   What are the resulting shear stresses and how do they vary?
*   How much does the shaft twist (angle of twist)?
*   How do we design shafts to be safe under these torsional loads?

### 2. Torsion of Solid Circular Shafts

Let's start with the simplest case: a **solid circular shaft** subjected to a pure torque $T$ applied at its ends.

#### 2.1 Assumptions for Torsional Analysis

Before we derive any equations, it's crucial to understand the assumptions we make. These assumptions, as discussed in standard texts like H. J. Shah and S. B. Junnarkar or R. K. Bansal, simplify the analysis greatly while still providing accurate results for many practical situations.

1.  **The material is homogeneous and isotropic:** This means the material properties are the same throughout the volume and in all directions.
2.  **The shaft is perfectly straight and has a uniform circular cross-section:** No kinks or varying diameters along its length.
3.  **The material behaves elastically:** When the torque is removed, the shaft returns to its original shape. We'll primarily focus on elastic deformation.
4.  **Cross-sections remain plane and circular:** This is a key assumption. When a circular shaft is twisted, any originally plane cross-section perpendicular to the axis remains plane and circular.
5.  **Cross-sections do not warp:** They do not distort out of their original plane. This is true for circular cross-sections, but not for non-circular ones.
6.  **Radii remain straight and radial:** Lines drawn from the center of the cross-section to the circumference remain straight and radial.

#### 2.2 The Torsion Formula

Based on these assumptions, we can derive the fundamental equation for torsion, often called the **Torsion Formula**. This formula relates the applied torque to the internal shear stress.

Consider a solid circular shaft of radius $R$ and length $L$ subjected to a torque $T$. Imagine slicing the shaft with a plane perpendicular to its axis. When the torque is applied, this cross-section rotates by an angle, let's call it $\phi$.

Now, let's look at a small element within the shaft at a radial distance $r$ from the center, where $0 \le r \le R$. Due to the twisting, this element experiences a shear strain. A line on the surface of the shaft parallel to the axis will deform into a helix.

Let's consider a longitudinal line on the surface of the shaft. When the shaft twists by an angle $\phi$ over its length $L$, the point on the circumference at $x=L$ moves through a distance $\delta$. This distance can be related to the angle of twist by $\delta = R \phi$.

Now, consider a small element at radius $r$. The displacement of this element along the circumference will be $r \phi$. This displacement, over the original length $L$, gives us the shearing strain, $\gamma$. Remember that for small deformations, shearing strain is defined as the change in angle between two initially perpendicular lines. In this case, it's the angle of deformation:

$\gamma = \frac{\text{displacement}}{\text{original length}} = \frac{r \phi}{L}$

This is a very important relationship. It tells us that the shearing strain $\gamma$ is directly proportional to the radial distance $r$. It's zero at the center ($r=0$) and maximum at the outer surface ($r=R$). This makes intuitive sense – the material at the center doesn't twist much relative to its immediate surroundings, while the outer edge twists the most.

Now, we can bring in the material properties. For elastic deformation, the relationship between shear stress ($\tau$) and shear strain ($\gamma$) is given by Hooke's Law for shear:

$\tau = G \gamma$

where $G$ is the **Modulus of Rigidity** or shear modulus of the material. This $G$ value is a material property, like Young's Modulus $E$ for tension. You can find typical values of $G$ for common materials in your textbooks or engineering handbooks (like those by R. K. Bansal or S. Ramamrutham).

Substituting the expression for $\gamma$ into this equation, we get:

$\tau = G \left(\frac{r \phi}{L}\right)$

This equation shows that the shear stress $\tau$ is also directly proportional to the radial distance $r$. So, the maximum shear stress occurs at the outer surface ($r=R$), and it's zero at the center. This is a key takeaway! Think of it like a spinning dancer: the person's feet at the edge are moving fastest (experiencing most "shear"), while the person's head at the center is barely moving relative to their torso.

So, the shear stress at any radius $r$ is:
$\tau = \frac{G \phi r}{L}$

Now, to relate this back to the applied torque $T$, consider a small annular ring of radius $r$ and thickness $dr$. The area of this ring is $dA = 2 \pi r dr$. The shear force on this small area is $dF = \tau dA = \left(\frac{G \phi r}{L}\right) (2 \pi r dr)$.

The torque contribution from this annular ring is $dT = dF \cdot r = \left(\frac{G \phi r}{L}\right) (2 \pi r dr) r = \frac{2 \pi G \phi}{L} r^3 dr$.

To get the total torque $T$, we integrate this expression from the center ($r=0$) to the outer radius ($r=R$):

$T = \int_{0}^{R} dT = \int_{0}^{R} \frac{2 \pi G \phi}{L} r^3 dr$
$T = \frac{2 \pi G \phi}{L} \int_{0}^{R} r^3 dr$
$T = \frac{2 \pi G \phi}{L} \left[\frac{r^4}{4}\right]_{0}^{R}$
$T = \frac{2 \pi G \phi}{L} \frac{R^4}{4} = \frac{\pi G \phi R^4}{2 L}$

This equation is very useful! It relates the applied torque $T$ to the angle of twist $\phi$ and the material/geometric properties ($G$, $R$, $L$).

We can rearrange this to find the angle of twist:
$\phi = \frac{TL}{GI_p}$

Here, $I_p$ is the **Polar Moment of Inertia** for a circular cross-section. For a solid circle, $I_p = \frac{\pi R^4}{2}$. This makes sense – it's analogous to the moment of inertia in linear motion, but for rotation.

Now, let's go back to the shear stress. We know $\tau = \frac{G \phi r}{L}$. Substitute $\frac{G \phi}{L} = \frac{T}{I_p}$:

$\tau = \frac{T r}{I_p}$

This is the **Torsion Formula for Solid Circular Shafts**.

Let's break down the components:
*   $T$: Applied torque (the twisting force).
*   $r$: Radial distance from the center of the shaft.
*   $I_p$: Polar moment of inertia of the cross-section.

This formula is fundamental and appears in all reputable strength of materials texts, like that of B. C. Punmia or Egor P. Popov.

Remember this:
*   Shear stress $\tau$ is directly proportional to the distance $r$ from the center.
*   Maximum shear stress occurs at the outer surface ($r=R$) and is denoted as $\tau_{max}$:
    $\tau_{max} = \frac{T R}{I_p}$

For a solid circular shaft of radius $R$, $I_p = \frac{\pi R^4}{2}$.
So, $\tau_{max} = \frac{T R}{(\pi R^4 / 2)} = \frac{2T}{\pi R^3}$.

The polar moment of inertia $I_p$ for a solid circular shaft can also be expressed in terms of its diameter $D$ ($D=2R$). Since $R = D/2$, we have:
$I_p = \frac{\pi (D/2)^4}{2} = \frac{\pi D^4}{32}$.

Therefore, the maximum shear stress can also be written as:
$\tau_{max} = \frac{T (D/2)}{(\pi D^4 / 32)} = \frac{16T}{\pi D^3}$.

This form is often used in design calculations.

#### 2.3 Stress Distribution and Angle of Twist

*   **Stress Distribution:** The shear stress varies linearly from zero at the center to a maximum at the outer surface. A quick sketch of this would show a triangle.
*   **Angle of Twist:** The angle of twist $\phi$ is given by $\phi = \frac{TL}{GI_p}$. This means the total twist is proportional to the applied torque, the length of the shaft, and inversely proportional to the shear modulus ($G$) and the polar moment of inertia ($I_p$).

**Example:** Consider a solid steel shaft of 50 mm diameter and 1 meter length subjected to a torque of 1000 Nm. If $G = 80$ GPa for steel, calculate the maximum shear stress and the angle of twist.

First, let's convert units to be consistent.
Diameter $D = 50 \, \text{mm} = 0.05 \, \text{m}$.
Radius $R = D/2 = 0.025 \, \text{m}$.
Torque $T = 1000 \, \text{Nm}$.
Length $L = 1 \, \text{m}$.
Shear Modulus $G = 80 \, \text{GPa} = 80 \times 10^9 \, \text{N/m}^2$.

1.  **Calculate Polar Moment of Inertia ($I_p$):**
    $I_p = \frac{\pi D^4}{32} = \frac{\pi (0.05 \, \text{m})^4}{32} = \frac{\pi \times 6.25 \times 10^{-6}}{32} \, \text{m}^4 \approx 0.6136 \times 10^{-6} \, \text{m}^4$.

2.  **Calculate Maximum Shear Stress ($\tau_{max}$):**
    $\tau_{max} = \frac{T R}{I_p} = \frac{(1000 \, \text{Nm})(0.025 \, \text{m})}{0.6136 \times 10^{-6} \, \text{m}^4} \approx \frac{25}{0.6136 \times 10^{-6}} \, \text{N/m}^2 \approx 40.7 \, \times 10^6 \, \text{N/m}^2 = 40.7 \, \text{MPa}$.
    Alternatively, using the diameter formula:
    $\tau_{max} = \frac{16T}{\pi D^3} = \frac{16(1000 \, \text{Nm})}{\pi (0.05 \, \text{m})^3} = \frac{16000}{\pi \times 0.000125} \, \text{N/m}^2 \approx \frac{16000}{0.0003927} \, \text{N/m}^2 \approx 40.7 \, \times 10^6 \, \text{N/m}^2 = 40.7 \, \text{MPa}$.

3.  **Calculate Angle of Twist ($\phi$):**
    $\phi = \frac{TL}{GI_p} = \frac{(1000 \, \text{Nm})(1 \, \text{m})}{(80 \times 10^9 \, \text{N/m}^2)(0.6136 \times 10^{-6} \, \text{m}^4)}$
    $\phi = \frac{1000}{49088} \, \text{radians} \approx 0.02037 \, \text{radians}$.

    To express this in degrees, multiply by $\frac{180}{\pi}$:
    $\phi_{\text{degrees}} = 0.02037 \times \frac{180}{\pi} \approx 1.167^\circ$.

So, the shaft experiences a maximum shear stress of 40.7 MPa and twists by about 1.17 degrees over its 1-meter length. This is a reasonable twist for a steel shaft.

### 3. Torsion of Hollow Circular Shafts

Now, let's consider the case of a **hollow circular shaft**. Think of a pipe or a bicycle frame tube. These are hollow.

#### 3.1 Why Hollow Shafts?

Hollow shafts are often preferred over solid shafts for several reasons:
*   **Weight Reduction:** For the same strength, a hollow shaft is lighter, which is beneficial in applications where weight is critical (e.g., aircraft, automobiles).
*   **Efficiency:** Maximum stress in a solid shaft occurs at the outer surface. The material closer to the center experiences lower stress. By removing this inner material, we can potentially save weight without significant loss of strength.
*   **Higher Strength-to-Weight Ratio:** Often, hollow shafts offer a better strength-to-weight ratio.

#### 3.2 Derivation for Hollow Shafts

The derivation for hollow shafts is very similar to that for solid shafts, with one key difference: the integration limits.
Let the outer radius be $R_o$ and the inner radius be $R_i$.

The assumptions are the same as for solid shafts, particularly that cross-sections remain plane and circular and do not warp.

Consider an annular ring of radius $r$ and thickness $dr$ within the hollow shaft, where $R_i \le r \le R_o$.
The shearing strain at radius $r$ is still $\gamma = \frac{r \phi}{L}$.
The shear stress at radius $r$ is $\tau = G \gamma = G \frac{r \phi}{L}$.

The shear force on the annular ring of area $dA = 2 \pi r dr$ is $dF = \tau dA = \left(G \frac{r \phi}{L}\right) (2 \pi r dr)$.
The torque contribution from this ring is $dT = dF \cdot r = \left(G \frac{r \phi}{L}\right) (2 \pi r dr) r = \frac{2 \pi G \phi}{L} r^3 dr$.

To find the total torque $T$, we integrate from the inner radius $R_i$ to the outer radius $R_o$:

$T = \int_{R_i}^{R_o} dT = \int_{R_i}^{R_o} \frac{2 \pi G \phi}{L} r^3 dr$
$T = \frac{2 \pi G \phi}{L} \int_{R_i}^{R_o} r^3 dr$
$T = \frac{2 \pi G \phi}{L} \left[\frac{r^4}{4}\right]_{R_i}^{R_o}$
$T = \frac{2 \pi G \phi}{L} \left(\frac{R_o^4}{4} - \frac{R_i^4}{4}\right)$
$T = \frac{\pi G \phi}{2 L} (R_o^4 - R_i^4)$

This is the torque equation for a hollow circular shaft.

#### 3.3 Polar Moment of Inertia for Hollow Shafts

The term $\frac{\pi}{2} (R_o^4 - R_i^4)$ is the **Polar Moment of Inertia ($I_p$)** for a hollow circular cross-section.

$I_p = \frac{\pi}{2} (R_o^4 - R_i^4)$

The angle of twist is then:
$\phi = \frac{TL}{GI_p}$

And the torsion formula becomes:
$\tau = \frac{T r}{I_p}$

Remember this:
*   Shear stress $\tau$ is still directly proportional to the distance $r$ from the center.
*   Maximum shear stress occurs at the outer surface ($r=R_o$):
    $\tau_{max} = \frac{T R_o}{I_p} = \frac{T R_o}{\frac{\pi}{2} (R_o^4 - R_i^4)}$

The minimum shear stress occurs at the inner surface ($r=R_i$):
$\tau_{min} = \frac{T R_i}{I_p} = \frac{T R_i}{\frac{\pi}{2} (R_o^4 - R_i^4)}$

The stress distribution in a hollow shaft is linear, but it starts from a non-zero value at the inner radius and goes up to a maximum at the outer radius.

#### 3.4 Expressing $I_p$ in terms of Diameters

If $D_o$ is the outer diameter and $D_i$ is the inner diameter, then $R_o = D_o/2$ and $R_i = D_i/2$.
$I_p = \frac{\pi}{2} \left(\left(\frac{D_o}{2}\right)^4 - \left(\frac{D_i}{2}\right)^4\right)$
$I_p = \frac{\pi}{32} (D_o^4 - D_i^4)$

And the maximum shear stress is:
$\tau_{max} = \frac{T R_o}{I_p} = \frac{T (D_o/2)}{(\pi/32)(D_o^4 - D_i^4)} = \frac{16 T D_o}{\pi (D_o^4 - D_i^4)}$

This form is very common for practical calculations.

**Example:** A hollow steel shaft has an outer diameter of 100 mm and an inner diameter of 50 mm. It transmits a torque of 20 kNm. Calculate the maximum shear stress and the angle of twist per meter of length. Assume $G = 80$ GPa.

Given:
Outer Diameter $D_o = 100 \, \text{mm} = 0.1 \, \text{m}$.
Inner Diameter $D_i = 50 \, \text{mm} = 0.05 \, \text{m}$.
Torque $T = 20 \, \text{kNm} = 20 \times 10^3 \, \text{Nm}$.
Length $L = 1 \, \text{m}$.
Shear Modulus $G = 80 \, \text{GPa} = 80 \times 10^9 \, \text{N/m}^2$.

1.  **Calculate Polar Moment of Inertia ($I_p$):**
    $I_p = \frac{\pi}{32} (D_o^4 - D_i^4) = \frac{\pi}{32} ((0.1 \, \text{m})^4 - (0.05 \, \text{m})^4)$
    $I_p = \frac{\pi}{32} (0.0001 \, \text{m}^4 - 0.00000625 \, \text{m}^4) = \frac{\pi}{32} (0.00009375 \, \text{m}^4)$
    $I_p \approx 9.2027 \times 10^{-6} \, \text{m}^4$.

2.  **Calculate Maximum Shear Stress ($\tau_{max}$):**
    Outer Radius $R_o = D_o/2 = 0.1 \, \text{m} / 2 = 0.05 \, \text{m}$.
    $\tau_{max} = \frac{T R_o}{I_p} = \frac{(20 \times 10^3 \, \text{Nm})(0.05 \, \text{m})}{9.2027 \times 10^{-6} \, \text{m}^4}$
    $\tau_{max} = \frac{1000}{9.2027 \times 10^{-6}} \, \text{N/m}^2 \approx 108.66 \times 10^6 \, \text{N/m}^2 = 108.66 \, \text{MPa}$.

    Using the diameter formula:
    $\tau_{max} = \frac{16 T D_o}{\pi (D_o^4 - D_i^4)} = \frac{16 (20 \times 10^3 \, \text{Nm}) (0.1 \, \text{m})}{\pi ((0.1 \, \text{m})^4 - (0.05 \, \text{m})^4)}$
    $\tau_{max} = \frac{32000}{\pi (0.0001 - 0.00000625)} = \frac{32000}{\pi (0.00009375)} \, \text{N/m}^2 \approx 108.66 \times 10^6 \, \text{N/m}^2 = 108.66 \, \text{MPa}$.

3.  **Calculate Angle of Twist per meter of length ($\phi/L$):**
    $\frac{\phi}{L} = \frac{T}{GI_p} = \frac{20 \times 10^3 \, \text{Nm}}{(80 \times 10^9 \, \text{N/m}^2)(9.2027 \times 10^{-6} \, \text{m}^4)}$
    $\frac{\phi}{L} = \frac{20000}{736216} \, \text{radians/m} \approx 0.02716 \, \text{radians/m}$.

    In degrees per meter:
    $\frac{\phi_{\text{degrees}}}{L} = 0.02716 \times \frac{180}{\pi} \approx 1.556^\circ/\text{m}$.

So, the maximum shear stress is 108.66 MPa, and the shaft twists by about 1.56 degrees for every meter of its length. Notice how the maximum stress is significantly higher than in the solid shaft example, even though it's a similar size, but the hollow shaft is generally lighter for the same strength requirement.

### 4. Torque, Power, and Angle of Twist Relationship

Often in power transmission systems, we talk about the power being transmitted rather than the torque directly. There's a relationship between torque, power, and angular velocity that's important to recall from your fundamental mechanics or physics courses.

If a shaft rotates at an angular velocity $\omega$ (in radians per second) and transmits a torque $T$, the power $P$ transmitted is given by:

$P = T \omega$

We can use this to find the torque if we know the power and the rotational speed. For example, if a motor outputs 10 kW of power at 1200 rpm, we can find the torque.

First, convert rpm to rad/s:
Angular speed in rad/s, $\omega = \frac{2 \pi N}{60}$, where $N$ is the speed in rpm.
$N = 1200 \, \text{rpm}$.
$\omega = \frac{2 \pi (1200)}{60} = 40 \pi \, \text{rad/s} \approx 125.66 \, \text{rad/s}$.

Power $P = 10 \, \text{kW} = 10 \times 10^3 \, \text{W} = 10 \times 10^3 \, \text{Nm/s}$.

Now, find torque $T$:
$T = \frac{P}{\omega} = \frac{10 \times 10^3 \, \text{Nm/s}}{40 \pi \, \text{rad/s}} = \frac{1000}{4 \pi} \, \text{Nm} \approx 79.58 \, \text{Nm}$.

This torque can then be used in the torsion formula to calculate stresses and twists.

### 5. Torsional Rigidity and Stiffness

*   **Torsional Rigidity:** This is the product $GI_p$. It represents the resistance of a shaft to twisting. A higher $GI_p$ means the shaft is more rigid torsionally and will twist less for a given torque.
*   **Torsional Stiffness:** This is the torque required to produce a unit angle of twist, i.e., $T/\phi$. So, Torsional Stiffness $= GI_p$. This is a property of the shaft's material and its cross-sectional geometry.

### 6. Stresses on Inclined Planes Under Torsion (Relating back to Module 4 Title)

While we've focused on shear stress ($\tau$) acting on cross-sections perpendicular to the axis, it's important to remember that under torsion, normal stresses also exist on planes inclined to the axis. This directly links to the module title.

Consider a small element on the surface of the shaft where the shear stress $\tau$ is maximum. Because we have pure shear on these planes, we can analyze the stresses on inclined planes using the stress transformation equations we discussed earlier in the course (or will be discussed in detail in relation to biaxial stress).

On an element where shear stress $\tau$ is present, there are planes where the shear stress is zero. These are the **principal planes**, and the stresses acting on them are the **principal stresses**. For pure shear, it turns out that the principal stresses are tensile and compressive and act at 45 degrees to the original shear planes.

The magnitudes of these principal stresses are equal to the maximum shear stress:
$\sigma_1 = +\tau_{max}$ (tensile)
$\sigma_2 = -\tau_{max}$ (compressive)

These stresses occur on planes inclined at $\pm 45^\circ$ to the axis of the shaft.

This means that if a material is weak in tension (like cast iron), it might fail due to this tensile stress on the 45-degree plane, often resulting in a characteristic "cup-and-cone" fracture surface, especially when the material yields. Conversely, materials strong in tension but weak in shear (like many metals) might fail by shearing on the cross-sectional plane.

This understanding of stresses on inclined planes is crucial for failure analysis. For example, a shaft made of a brittle material might crack diagonally under torsion because it's failing due to the tensile stress on the inclined plane.

### 7. Key Takeaways and Exam Focus

*   **Torsion Formula:** $\tau = \frac{Tr}{I_p}$ for any radius $r$. $\tau_{max} = \frac{TR}{I_p}$ (or $\frac{16T}{\pi D^3}$ for solid, $\frac{16TD_o}{\pi(D_o^4 - D_i^4)}$ for hollow). This formula is essential and frequently asked.
*   **Polar Moment of Inertia ($I_p$):**
    *   Solid Circle: $I_p = \frac{\pi R^4}{2} = \frac{\pi D^4}{32}$
    *   Hollow Circle: $I_p = \frac{\pi}{2} (R_o^4 - R_i^4) = \frac{\pi}{32} (D_o^4 - D_i^4)$
    Know these formulas by heart!
*   **Angle of Twist:** $\phi = \frac{TL}{GI_p}$. The relationship between twist, torque, material property ($G$), and geometry ($L$, $I_p$).
*   **Stress Distribution:** Linear variation of shear stress from zero at the center to maximum at the outer surface. For hollow shafts, it's linear from a non-zero value at the inner surface to maximum at the outer surface.
*   **Power Transmission:** $P = T \omega$. Be comfortable converting between power, torque, and rotational speed.
*   **Failure Modes:** Understand that torsion induces shear stress on cross-sections and tensile/compressive stresses on inclined planes at 45 degrees. This explains different failure patterns in different materials.

**Common Pitfalls:**
*   Confusing radius and diameter.
*   Unit inconsistencies (e.g., N, kN, Nm, kNm, MPa, GPa). Always convert to a consistent system (e.g., SI units: N, m, Pa).
*   Forgetting the factor of 2 in $I_p = \frac{\pi R^4}{2}$ for solid shafts.
*   Incorrectly applying the formula for hollow shafts (e.g., using $D_o$ instead of $R_o$ in the numerator of $\tau_{max}$ or forgetting to subtract the inner part in $I_p$).

### Sample Questions with Answers

**Q1. A solid circular shaft of diameter 100 mm is subjected to a torque of 15 kNm. Calculate the maximum shear stress developed in the shaft.**

**Solution:**
Given: Diameter $D = 100 \, \text{mm} = 0.1 \, \text{m}$. Torque $T = 15 \, \text{kNm} = 15 \times 10^3 \, \text{Nm}$.
The formula for maximum shear stress in a solid circular shaft is $\tau_{max} = \frac{16T}{\pi D^3}$.

$\tau_{max} = \frac{16 \times (15 \times 10^3 \, \text{Nm})}{\pi \times (0.1 \, \text{m})^3}$
$\tau_{max} = \frac{240 \times 10^3}{\pi \times 0.001} \, \text{N/m}^2$
$\tau_{max} = \frac{240 \times 10^6}{\pi} \, \text{N/m}^2 \approx 76.39 \times 10^6 \, \text{N/m}^2 = 76.39 \, \text{MPa}$.

**Answer:** The maximum shear stress developed is 76.39 MPa.

---

**Q2. What is the ratio of the torque carrying capacity of a solid circular shaft to a hollow circular shaft of the same outer diameter and material, if the inner diameter of the hollow shaft is half of its outer diameter?**

**Solution:**
Let the outer diameter of both shafts be $D_o$.
For the solid shaft, diameter is $D = D_o$.
For the hollow shaft, outer diameter is $D_o$ and inner diameter $D_i = D_o/2$.

The torque carrying capacity is proportional to $\tau_{max} \cdot I_p$. Assuming both shafts are designed to operate at the same maximum allowable shear stress, $\tau_{max}$.
So, we need to compare their $I_p$ values.

For the solid shaft: $I_{p,solid} = \frac{\pi D_o^4}{32}$.
Torque carrying capacity $T_{solid} \propto \tau_{max} \cdot \frac{\pi D_o^4}{32}$.

For the hollow shaft: $I_{p,hollow} = \frac{\pi}{32} (D_o^4 - D_i^4)$.
Substitute $D_i = D_o/2$:
$I_{p,hollow} = \frac{\pi}{32} \left(D_o^4 - \left(\frac{D_o}{2}\right)^4\right) = \frac{\pi}{32} \left(D_o^4 - \frac{D_o^4}{16}\right)$
$I_{p,hollow} = \frac{\pi}{32} \left(\frac{16D_o^4 - D_o^4}{16}\right) = \frac{\pi}{32} \left(\frac{15D_o^4}{16}\right) = \frac{15}{16} \left(\frac{\pi D_o^4}{32}\right)$.

Torque carrying capacity $T_{hollow} \propto \tau_{max} \cdot \frac{15}{16} \left(\frac{\pi D_o^4}{32}\right)$.

The ratio of torque carrying capacity is:
$\frac{T_{solid}}{T_{hollow}} = \frac{\tau_{max} \cdot I_{p,solid}}{\tau_{max} \cdot I_{p,hollow}} = \frac{I_{p,solid}}{I_{p,hollow}}$
$\frac{T_{solid}}{T_{hollow}} = \frac{(\pi D_o^4 / 32)}{\frac{15}{16} (\pi D_o^4 / 32)} = \frac{1}{15/16} = \frac{16}{15}$.

**Answer:** The ratio of torque carrying capacity of a solid shaft to a hollow shaft (with $D_i = D_o/2$) is 16:15. This shows that a hollow shaft, in this specific case, can carry slightly more torque than a solid shaft of the same outer diameter if both are designed to the same maximum shear stress limit.

---

**Q3. A shaft is subjected to torsion. Explain how shear stress varies along the radius of the shaft and mention the type of stresses that occur on planes inclined at 45 degrees to the axis.**

**Solution:**
In a shaft subjected to torsion, the shear stress ($\tau$) at any radial distance $r$ from the center is given by $\tau = \frac{Tr}{I_p}$. This formula indicates that the shear stress is directly proportional to the radial distance $r$.

*   **Variation of Shear Stress:**
    *   At the center of the shaft ($r=0$), the shear stress is zero ($\tau=0$).
    *   As the radial distance $r$ increases, the shear stress increases linearly.
    *   The maximum shear stress ($\tau_{max}$) occurs at the outer surface of the shaft where $r=R$ (radius of the shaft).

*   **Stresses on Inclined Planes:**
    When a shaft is under pure torsion, an element on its surface experiences shear stress. If we consider planes inclined at an angle of $45^\circ$ to the longitudinal axis of the shaft, the shear stress on these planes is zero. However, normal stresses appear on these planes. These normal stresses are tensile and compressive, and their magnitudes are equal to the maximum shear stress ($\tau_{max}$) experienced on the cross-sectional plane.
    So, on these $45^\circ$ inclined planes:
    *   Principal stress $\sigma_1 = +\tau_{max}$ (tensile)
    *   Principal stress $\sigma_2 = -\tau_{max}$ (compressive)
    This is why brittle materials, which are weak in tension, may fail under torsion by cracking along a diagonal line.

---
This concludes our session on Torsion of Circular and Hollow Circular Shafts. Make sure to practice these formulas and concepts, as they form the bedrock of understanding torsional behavior in many mechanical components.
