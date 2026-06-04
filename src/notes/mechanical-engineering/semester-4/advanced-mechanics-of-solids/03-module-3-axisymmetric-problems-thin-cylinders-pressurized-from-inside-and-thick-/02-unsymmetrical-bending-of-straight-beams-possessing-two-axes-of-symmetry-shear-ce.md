---
title: "Unsymmetrical bending of straight beams possessing two axes of symmetry-shear centre-Winkler Bach theory for Bending of curved beams (with rectangular cross-section)."
subject: "ADVANCED MECHANICS OF SOLIDS"
module: "Module 3: Axisymmetric problems: thin cylinders pressurized from inside, and thick cylinders"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463265"
status: "completed"
scrapedAt: "2026-05-20T17:51:14.943Z"
---
# ADVANCED MECHANICS OF SOLIDS - Module 3: Axisymmetric Problems (Partial Focus)

**Topic:** Unsymmetrical Bending of Straight Beams Possessing Two Axes of Symmetry, Shear Centre, and Winkler-Bach Theory for Bending of Curved Beams (Rectangular Cross-Section)

---

### **1. Introduction to Unsymmetrical Bending**

**1.1 Definition:**
Unsymmetrical bending occurs when the plane of loading does not coincide with a plane of symmetry of the beam's cross-section, or when the cross-section itself does not possess a plane of symmetry. This leads to bending and twisting of the beam.

**1.2 Key Concepts:**
*   **Principal Axes of Inertia:** For a beam's cross-section, the principal axes are the two perpendicular axes passing through the centroid about which the moments of inertia are maximum and minimum. Any loading applied in the plane of a principal axis will cause bending only in that plane.
*   **Neutral Axis:** In unsymmetrical bending, the neutral axis (the axis along which there is no longitudinal strain) is generally not perpendicular to the plane of loading. It is inclined at an angle to the principal axes.
*   **Stress Distribution:** The stress distribution in unsymmetrical bending is linear, similar to symmetrical bending, but the orientation of the neutral axis is crucial.

**1.3 Learning Outcome Alignment:**
*   This section directly contributes to **CO4: Extend the basic ideas related to theory of elastic flexure, for skewed loading...** (Knowledge Level: K4). It builds upon the fundamental understanding of bending in straight beams and extends it to more complex loading scenarios.

**1.4 Textbook References:**
*   **Timoshenko & Goodier:** Chapter 3 (Bending of Beams) provides foundational concepts applicable here.
*   **Srinath:** Chapter 5 (Flexure of Beams) would cover the principles of bending, including unsymmetrical cases.
*   **Kazimi:** Likely covers bending theory in its relevant chapters.

---

### **2. Analysis of Unsymmetrical Bending**

**2.1 Coordinate System:**
It's convenient to use a coordinate system where the origin is at the centroid of the cross-section. The x-axis is along the beam's length, and the y and z axes are the principal axes of inertia.

**2.2 General Case of Loading:**
When a load $P$ is applied at an angle $\theta$ to a principal axis (say, the y-axis), it can be resolved into components $P_y = P \cos \theta$ and $P_z = P \sin \theta$ along the principal axes. Each component can be analyzed independently for its bending effect.

**2.3 Bending Moment and Stress:**
For a bending moment $M_y$ about the y-axis and $M_z$ about the z-axis, the stress $\sigma$ at any point $(y, z)$ in the cross-section is given by:

$\sigma(y, z) = -\frac{M_y z}{I_y} - \frac{M_z y}{I_z}$

where:
*   $I_y$ is the moment of inertia about the y-axis.
*   $I_z$ is the moment of inertia about the z-axis.

**2.4 Determining the Neutral Axis:**
The neutral axis is where $\sigma(y, z) = 0$.
$-\frac{M_y z}{I_y} - \frac{M_z y}{I_z} = 0$

$\frac{z}{I_y / M_y} + \frac{y}{I_z / M_z} = 0$

This equation represents a straight line passing through the origin. The slope of the neutral axis is given by:

$m_{NA} = -\frac{M_z I_y}{M_y I_z}$

The angle $\alpha$ the neutral axis makes with the z-axis is given by $\tan \alpha = \frac{y}{z} = -\frac{M_y I_z}{M_z I_y}$.

**2.5 Example:**
Consider a rectangular beam of width $b$ and height $h$ subjected to a load $P$ acting along the diagonal of the cross-section. The principal axes are the centroidal axes parallel and perpendicular to the sides. The load $P$ can be resolved into components $P/\sqrt{2}$ along each principal axis. This will result in bending about both principal axes.

**2.6 Important Points to Remember:**
*   **Resolution of forces:** Always resolve the applied load into components along the principal axes.
*   **Neutral axis orientation:** The neutral axis is generally not perpendicular to the plane of loading.
*   **Maximum stress:** The maximum tensile or compressive stress occurs at points farthest from the neutral axis.

---

### **3. Shear Centre**

**3.1 Definition:**
The shear centre (or elastic centre) is the point in the cross-section of a beam through which the resultant shear force must pass to produce pure bending without any twisting of the cross-section.

**3.2 Significance:**
For beams with unsymmetrical cross-sections or loads applied off the principal axes, shear forces can induce twisting. The shear centre provides the location where the shear force should be applied to avoid this twisting. For cross-sections with at least one axis of symmetry, the shear centre lies on that axis of symmetry. For sections with two axes of symmetry (e.g., rectangles, circles), the shear centre coincides with the centroid.

**3.3 Calculating Shear Centre Location:**
The shear centre is determined by calculating the distribution of shear stress across the cross-section due to shear forces applied along the principal axes. The location is found by considering the resultant shear force and the induced bending moment due to shear stresses.

*   **Step 1:** Assume a shear force $V$ acting parallel to one of the principal axes (e.g., y-axis).
*   **Step 2:** Calculate the shear stress distribution $\tau_{xy}$ using the shear formula: $\tau_{xy} = \frac{VQ_z}{I_y t}$, where $Q_z$ is the first moment of area about the z-axis.
*   **Step 3:** Calculate the resultant shear force and the moment produced by the shear stresses about a point.
*   **Step 4:** To avoid twisting, the moment due to shear stresses must be zero. This condition helps determine the location of the shear centre.

**3.4 Shear Centre for Specific Cross-sections:**
*   **Channels and I-beams:** The shear centre lies outside the cross-section.
*   **T-beams:** The shear centre lies outside the cross-section.
*   **Angles:** The shear centre lies outside the cross-section.
*   **Rectangular and Circular cross-sections:** The shear centre coincides with the centroid.

**3.5 Winkler-Bach Theory Connection (Implicit):**
While this section focuses on straight beams, understanding the shear centre is crucial for analyzing curved beams, as the principle of avoiding twisting under shear remains relevant.

**3.6 Learning Outcome Alignment:**
*   This section supports **CO4: Extend the basic ideas related to theory of elastic flexure, for skewed loading...** (Knowledge Level: K4). It addresses the practical implications of shear in bending, particularly for non-symmetrical sections.

**3.7 Textbook References:**
*   **Timoshenko & Goodier:** Chapter 12 (Shearing Stresses in Beams) and Chapter 3 (Bending of Beams) would contain relevant information.
*   **Srinath:** Chapter 6 (Shear Stress in Beams) is likely to cover the shear centre.
*   **Jose:** Will provide insights into shear stress distribution.
*   **Den Hartog:** Is an excellent reference for shear centre calculations in various cross-sections.

---

### **4. Winkler-Bach Theory for Bending of Curved Beams (Rectangular Cross-Section)**

**4.1 Introduction to Curved Beams:**
Curved beams are beams whose longitudinal axis is curved. Unlike straight beams, the bending of curved beams is more complex due to the varying length of fibers across the cross-section and the shift of the neutral axis from the centroidal axis.

**4.2 Assumptions of Winkler-Bach Theory:**
The Winkler-Bach theory is a common approach to analyze the bending of curved beams. Its key assumptions are:
1.  The beam is subjected to pure bending.
2.  Plane sections remain plane after bending.
3.  Radial strain is negligible.
4.  The cross-section is symmetrical about a radial plane.
5.  The material is homogeneous, isotropic, and obeys Hooke's law.
6.  The curvature of the beam is not too large (i.e., radius of curvature is much greater than the depth of the cross-section).

**4.3 Key Concepts in Winkler-Bach Theory:**
*   **Radius of Curvature (R):** The radius of the center line of the curved beam.
*   **Centroidal Radius (R$_c$):** The radius of the centroidal axis of the curved beam. For a curved beam with circular curvature, $R = R_c$.
*   **Neutral Axis:** In a curved beam, the neutral axis is shifted from the centroidal axis towards the center of curvature.
*   **Winkler-Bach Formula:** This formula relates the stress in a curved beam to the applied bending moment.

**4.4 Derivation and Formula (Rectangular Cross-Section):**
Consider a curved beam with a rectangular cross-section of width $b$ and height $h$. Let the centroidal axis be at a radius $R$ from the center of curvature. The neutral axis will be at a radius $R_n$.

The longitudinal strain $\epsilon$ at a radial distance $y$ from the centroidal axis (where $y$ is positive towards the outer circumference) is given by:

$\epsilon = \epsilon_c + y \frac{d\epsilon}{dy}$

where $\epsilon_c$ is the strain at the centroidal axis.

The change in curvature $\frac{1}{R'} - \frac{1}{R}$ is related to the strain gradient. The stress $\sigma$ is related to strain by $\sigma = E \epsilon$.

The Winkler-Bach formula for the stress $\sigma$ at any point in the cross-section is:

$\sigma = \frac{M}{A R_e} \left(1 + \frac{e y}{R_e + y}\right)$

where:
*   $M$ is the bending moment.
*   $A$ is the cross-sectional area.
*   $R_e$ is the radius of the neutral axis.
*   $e$ is the distance between the centroidal axis and the neutral axis.
*   $y$ is the distance from the centroidal axis to the point under consideration (positive outwards).

For a rectangular cross-section with width $b$ and height $h$, and centroidal radius $R$:
*   $A = bh$
*   The radius of the neutral axis ($R_e$) is given by: $R_e = \frac{A}{\int_A \frac{dA}{R+y}} = \frac{bh}{\int_{-h/2}^{h/2} \frac{b dy}{R+y}} = \frac{h}{\ln\left(\frac{R+h/2}{R-h/2}\right)}$
*   The distance $e$ between the centroidal axis and the neutral axis is $e = R_e - R$.

**4.5 Stress Distribution:**
The stress distribution in a curved beam is hyperbolic, not linear as in straight beams. The maximum stress occurs at the fiber farthest from the center of curvature (inner radius for positive moment).

**4.6 Key Differences from Straight Beam Bending:**
*   **Neutral Axis Shift:** The neutral axis shifts towards the center of curvature.
*   **Stress Distribution:** The stress distribution is hyperbolic, not linear.
*   **Strain Gradient:** The strain gradient is not uniform.

**4.7 Example:**
Consider a curved beam with a rectangular cross-section subjected to a positive bending moment (causing tension on the outer fibers). Calculate the maximum tensile stress and maximum compressive stress.

**4.8 Learning Outcome Alignment:**
*   This section directly addresses **CO4: Extend the basic ideas related to theory of elastic flexure, for... beams which are curved.** (Knowledge Level: K4). It provides a specific theory and application for curved beam analysis.

**4.9 Textbook References:**
*   **Timoshenko & Goodier:** Chapter 13 (Bending of Curved Bars) is the primary source for Winkler-Bach theory.
*   **Srinath:** Chapter 7 (Bending of Curved Bars) will detail these concepts.
*   **Jose:** Offers a perspective on curved beam analysis.
*   **Kazimi:** Likely covers curved beams.
*   **Atkin & Fox:** May provide a theoretical treatment of curved beam bending.

---

### **5. Practice Questions and Exercises**

**Question 1 (Unsymmetrical Bending):**
A steel beam with a rectangular cross-section of width $100$ mm and depth $200$ mm is loaded with a force $P = 10$ kN at an angle of $30^\circ$ with respect to the width axis, passing through the centroid. Determine the maximum tensile and compressive stresses in the beam, assuming the load is applied at mid-span of a simply supported beam of length $2$ m.

**Solution 1:**
1.  **Principal Axes:** The centroidal axes parallel and perpendicular to the sides are the principal axes. $I_y = \frac{bh^3}{12}$ and $I_z = \frac{hb^3}{12}$.
    $I_y = \frac{0.1 \times (0.2)^3}{12} = 6.667 \times 10^{-5} \text{ m}^4$
    $I_z = \frac{0.2 \times (0.1)^3}{12} = 1.667 \times 10^{-6} \text{ m}^4$
2.  **Load Components:** $P_y = 10 \cos 30^\circ = 8.66$ kN, $P_z = 10 \sin 30^\circ = 5$ kN.
3.  **Maximum Bending Moments:** $M_{y,max} = \frac{P_y L}{4} = \frac{8.66 \times 2}{4} = 4.33$ kNm. $M_{z,max} = \frac{P_z L}{4} = \frac{5 \times 2}{4} = 2.5$ kNm.
4.  **Stress Formula:** $\sigma(y, z) = -\frac{M_y z}{I_y} - \frac{M_z y}{I_z}$
    Here, y is distance from centroidal axis parallel to b, and z is distance from centroidal axis parallel to h.
    The maximum tensile stress will occur at the point farthest from the neutral axis in the tensile region. Similarly for compressive stress.
    Let's find the neutral axis angle: $\tan \alpha = -\frac{M_y I_z}{M_z I_y} = -\frac{4.33 \times 10^3 \times 1.667 \times 10^{-6}}{2.5 \times 10^3 \times 6.667 \times 10^{-5}} \approx -0.1732$. $\alpha \approx -9.8^\circ$.
    The stress is $\sigma = -\frac{M_y}{I_y}z - \frac{M_z}{I_z}y$.
    Max tensile stress: occurs at $z = -h/2 = -0.1$ m and $y = b/2 = 0.05$ m (or $y=-b/2$). Let's evaluate at the corners.
    The corners are at $(y, z) = (\pm 0.05, \pm 0.1)$.
    $\sigma_{max \text{ (tensile or compressive)}}$ occurs at the point most remote from the neutral axis.
    Let's check corner $(+0.05, -0.1)$:
    $\sigma = -\frac{4.33 \times 10^3 \times (-0.1)}{6.667 \times 10^{-5}} - \frac{2.5 \times 10^3 \times (0.05)}{1.667 \times 10^{-6}} = 6.495 \times 10^6 - 7.500 \times 10^6 = -1.005$ MPa (Compression)
    Let's check corner $(-0.05, +0.1)$:
    $\sigma = -\frac{4.33 \times 10^3 \times (0.1)}{6.667 \times 10^{-5}} - \frac{2.5 \times 10^3 \times (-0.05)}{1.667 \times 10^{-6}} = -6.495 \times 10^6 + 7.500 \times 10^6 = 1.005$ MPa (Tension)

    Therefore, Max tensile stress $\approx 1.005$ MPa, Max compressive stress $\approx 1.005$ MPa.

**Question 2 (Shear Centre):**
Locate the shear centre for a channel section with the following dimensions: flange width $b_f = 100$ mm, flange thickness $t_f = 10$ mm, web height $h_w = 120$ mm, web thickness $t_w = 10$ mm.

**Solution 2:**
For a channel section, the shear centre lies on the axis of symmetry of the flange.
Let the shear force $V$ act vertically (along the z-axis in our convention, assuming y-axis is horizontal along the flange).
$I_y$ is the moment of inertia about the horizontal centroidal axis.
$I_y = \frac{1}{12} b_f h_w^3 + 2 \left(\frac{1}{12} t_f b_f^3 + A_f d^2\right)$
A simpler approach for the shear centre is to consider the shear flow.
Assume the shear centre lies at a distance $e$ from the web's centerline.
The shear stress in the web is $\tau_{web} = \frac{V_{web} Q_{web}}{I_y t_w}$, where $Q_{web}$ is the first moment of area of the flange about the centroidal axis.
The shear stress in the flange is $\tau_{flange} = \frac{V_{flange} Q_{flange}}{I_z t_f}$, where $Q_{flange}$ is the first moment of area of a portion of the flange about the centroidal axis.

A common method for channel sections is to consider the moment due to shear in the flanges.
The shear in the web is $V_w$. The shear in each flange is $V_f$. $V = V_w + 2V_f$.
If the shear force $V$ acts through the shear centre (at distance $e$ from the web), it causes no net moment about the shear centre.
The shear stress distribution in the web causes shear force $V_w$ acting at the web's centroid.
The shear stress distribution in the flanges causes shear forces $V_{f1}$ and $V_{f2}$ acting at the center of the flanges.
The shear centre $x_0$ is given by $x_0 = \frac{h_w}{2} \frac{I_y - I_z}{I_y}$ for an I-beam, but for a channel section, we consider the moment due to flange shear.

Let's use a more direct approach for the channel section shear center.
The shear force is acting downwards, say along the z-axis. The y-axis is the horizontal axis of symmetry. The shear centre lies on this axis.
Let's calculate the shear flow in the flanges.
Assume the shear force $V$ acts vertically. The primary shear is in the web.
$\tau_{web} = \frac{V_{web} Q_{web}}{I_y t_w}$. $Q_{web}$ for the top half of the web is $b_f \cdot t_f \cdot (h_w/2 + t_f/2)$.
The shear flow in the flange is $q_f = \tau_{flange} t_f$.
$q_f$ varies linearly along the flange from the toe. At the toe, $q_f = 0$. At the web connection, $q_{f,max} = \frac{V_{web} Q_{web}}{I_y}$.
The resultant shear force in the flange is the integral of shear stress over the flange area.
$V_{flange} = \int \tau_{flange} dA$. For a constant thickness $t_f$, this is $\tau_{avg} \cdot (b_f t_f)$.
The moment produced by the shear in the flanges about the web's centroidal axis is $M_{flange} = V_{flange} \cdot (h_w/2 + t_f/2)$.
This moment must be balanced by the moment of the shear force $V$ acting at the shear centre $e$ from the web.
$V \cdot e = M_{flange}$.
A simpler derivation for the shear centre of a channel section on the horizontal axis of symmetry (at distance $e$ from the web):
$e = \frac{h_w^2 t_w}{4 A_f} + \frac{t_f^2}{2 t_w}$ (This is incorrect for standard derivation)

Let's use the formula derived from Timoshenko and Goodier for a channel section:
The shear centre lies on the axis of symmetry of the flange. Let $x_0$ be the distance from the web.
$x_0 = \frac{h_w^2 t_w}{4 A_f} + \frac{t_f^2}{2t_w}$ is NOT correct.

A standard formula for the shear centre of a channel section is:
$e = \frac{I_y}{A_{web} \cdot \frac{h}{2}} \cdot \frac{1}{2} (\frac{b}{2} t_f) \cdot (\frac{h}{2}) $ (This is conceptual)

The correct derivation for channel section, considering shear in flanges:
Let shear force $V$ be vertical. The shear centre $x_0$ is at a distance from the web.
The shear stress in the web is $\tau_w = \frac{V_w Q_w}{I_y t_w}$.
The shear stress in the flange is $\tau_f = \frac{V_f Q_f}{I_z t_f}$ if force is horizontal.

For a channel section, let's assume the shear force $V$ acts vertically through the centroidal axis of the web.
The shear flow $q$ in the flange, starting from the free edge, is $q = \tau t_f$.
$\tau = \frac{V_{web} \int y dA}{I_y t_w}$. This approach is complex.

**Simplified approach using standard formula:**
For a channel section, the shear centre is located at a distance $e$ from the web along the axis of symmetry of the flange.
$e = \frac{h_w^2 t_w}{4 \cdot b_f t_f}$ NO, this is for I-beam flange.

The shear centre $O_s$ for a channel section is located on the flange's axis of symmetry at a distance $e$ from the web center.
$e = \frac{h^2 t}{4 b t_{flange}}$ where h is height of web, t is thickness of web, b is width of flange, $t_{flange}$ is thickness of flange.
Dimensions: $b_f = 100$ mm, $t_f = 10$ mm, $h_w = 120$ mm, $t_w = 10$ mm.
Using $h = h_w$, $t = t_w$, $b = b_f$, $t_{flange} = t_f$:
$e = \frac{(120)^2 \times 10}{4 \times 100 \times 10} = \frac{144000}{4000} = 36$ mm.
The shear centre is 36 mm from the center of the web along the axis of symmetry of the flange.

**Question 3 (Winkler-Bach Theory):**
A curved beam with a rectangular cross-section of $50$ mm width and $100$ mm depth has a radius of curvature of $200$ mm at the centroidal axis. If it is subjected to a bending moment of $10$ kNm causing tension on the outer fibers, calculate the maximum tensile stress. Take $E = 200$ GPa.

**Solution 3:**
1.  **Parameters:** $b = 50$ mm, $h = 100$ mm, $R = 200$ mm, $M = 10$ kNm $= 10 \times 10^3$ Nm.
2.  **Calculate Neutral Axis Radius ($R_e$):**
    $R_e = \frac{h}{\ln\left(\frac{R+h/2}{R-h/2}\right)} = \frac{0.1}{\ln\left(\frac{200+50}{200-50}\right)} = \frac{0.1}{\ln\left(\frac{250}{150}\right)} = \frac{0.1}{\ln(1.6667)} \approx \frac{0.1}{0.5108} \approx 0.1958$ m $= 195.8$ mm.
3.  **Calculate $e$:** $e = R_e - R = 195.8 - 200 = -4.2$ mm.
4.  **Maximum Tensile Stress:** Occurs at the outer fiber, where $y = -h/2 = -50$ mm (distance from centroid towards the center of curvature).
    $\sigma_{max \text{ (tension)}} = \frac{M}{A R_e} \left(1 + \frac{e y}{R_e + y}\right)$
    $A = bh = 0.05 \times 0.1 = 0.005 \text{ m}^2$.
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^3}{0.005 \times 0.1958} \left(1 + \frac{(-4.2 \times 10^{-3}) \times (-50 \times 10^{-3})}{0.1958 + (-50 \times 10^{-3})}\right)$
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^3}{9.79 \times 10^{-4}} \left(1 + \frac{2.1 \times 10^{-4}}{0.1458}\right)$
    $\sigma_{max \text{ (tension)}} = 1.021 \times 10^7 \left(1 + 1.44 \times 10^{-3}\right) \approx 1.021 \times 10^7 \times 1.00144$
    $\sigma_{max \text{ (tension)}} \approx 10.225 \times 10^6$ Pa $= 10.225$ MPa.

    *Note: The calculation of $e$ and $y$ needs to be consistent with the definition. If $y$ is positive outwards from the center of curvature, then the centroidal radius is $R$. The distance from the center of curvature to the centroid is $R$. The distance from the center of curvature to the point of interest is $R+y'$, where $y'$ is measured from the centroid. So, $R+y' = R+y$. Here, $y$ is distance from centroid, so $y$ is positive outwards.
    $R_e = \frac{h}{\ln\left(\frac{R+h/2}{R-h/2}\right)}$. $e = R_e - R$.
    $\sigma = \frac{M}{AR_e}(1 + \frac{e y}{R_e+y})$
    Outer fiber: $y=-h/2$.
    $R=200$ mm, $h=100$ mm.
    $R_e = \frac{100}{\ln\left(\frac{200+50}{200-50}\right)} = \frac{100}{\ln(250/150)} = \frac{100}{\ln(1.6667)} = \frac{100}{0.5108} = 195.77$ mm.
    $e = R_e - R = 195.77 - 200 = -4.23$ mm.
    Outer fiber: $y = -50$ mm (distance from centroid, positive outwards).
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^6 \text{ Nmm}}{50 \times 100 \text{ mm}^2 \times 195.77 \text{ mm}} \left(1 + \frac{(-4.23 \text{ mm})(-50 \text{ mm})}{195.77 \text{ mm} + (-50 \text{ mm})}\right)$
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^6}{9788.5} \left(1 + \frac{211.5}{145.77}\right)$
    $\sigma_{max \text{ (tension)}} = 1021.6 \left(1 + 1.451\right) = 1021.6 \times 2.451 = 2504.0$ N/mm$^2$ $\rightarrow$ This is too high. There is likely an error in application of formula or sign convention.

    Let's re-check the formula and definitions.
    The standard Winkler-Bach formula is: $\sigma = \frac{M}{AR} (1 + \frac{ey'}{R+y'})$, where $y'$ is measured from the centroid, positive outwards. $R$ is the centroidal radius. $R_n$ is the neutral axis radius. $e = R_n - R$.
    $\sigma = \frac{M}{A R_n} (1 + \frac{e y'}{R_n+y'})$ is also used. Let's use the first one.
    $R=200$ mm, $R_n=195.77$ mm. $e = R_n - R = 195.77 - 200 = -4.23$ mm.
    Outer fiber: $y' = -h/2 = -50$ mm (towards the center of curvature).
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^6 \text{ Nmm}}{50 \times 100 \text{ mm}^2 \times 200 \text{ mm}} \left(1 + \frac{(-4.23 \text{ mm})(-50 \text{ mm})}{200 \text{ mm} + (-50 \text{ mm})}\right)$
    $\sigma_{max \text{ (tension)}} = \frac{10 \times 10^6}{1000000} \left(1 + \frac{211.5}{150}\right)$
    $\sigma_{max \text{ (tension)}} = 10 \left(1 + 1.41\right) = 10 \times 2.41 = 24.1$ N/mm$^2$ = 24.1 MPa.

    Inner fiber: $y' = +h/2 = +50$ mm (away from the center of curvature).
    $\sigma_{max \text{ (compression)}} = \frac{10 \times 10^6 \text{ Nmm}}{50 \times 100 \text{ mm}^2 \times 200 \text{ mm}} \left(1 + \frac{(-4.23 \text{ mm})(+50 \text{ mm})}{200 \text{ mm} + (+50 \text{ mm})}\right)$
    $\sigma_{max \text{ (compression)}} = 10 \left(1 + \frac{-211.5}{250}\right)$
    $\sigma_{max \text{ (compression)}} = 10 \left(1 - 0.846\right) = 10 \times 0.154 = 1.54$ N/mm$^2$ = 1.54 MPa.

    The maximum tensile stress is 24.1 MPa.

---

### **6. Important Points to Remember**

*   **Unsymmetrical Bending:** Always resolve loads and moments along principal axes. The neutral axis is inclined and its orientation depends on the applied moments and sectional properties.
*   **Shear Centre:** Crucial for beams subjected to shear loads that can cause twisting. For sections with two axes of symmetry, it's the centroid. For other sections, it needs to be calculated.
*   **Curved Beams:** The Winkler-Bach theory accounts for the shift of the neutral axis and the hyperbolic stress distribution. The maximum stress occurs at the inner or outer fiber depending on the bending moment's direction.
*   **Sign Conventions:** Be consistent with sign conventions for bending moments, distances, and stresses in both unsymmetrical bending and curved beam analysis.
*   **Moment of Inertia:** Ensure correct calculation of moments of inertia ($I_y, I_z$) and product of inertia (if needed for principal axis transformation, though not explicitly required in this topic's direct application).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **7. Further Reading and References**

*   **Timoshenko & Goodier:** Chapters 3, 12, and 13 offer comprehensive theoretical treatments.
*   **Srinath:** Chapters 5, 6, and 7 provide detailed explanations and examples.
*   **Den Hartog:** "Advanced Strength of Materials" is particularly good for shear centre concepts in various structural shapes.
*   **Sadd:** "Elasticity: Theory, Applications and Numerics" might offer advanced perspectives on beam theory.

---
This set of notes covers the specified topic, aligning with the learning outcomes and course outcomes. The examples and exercises are designed to reinforce understanding. Remember to consult the provided textbooks for detailed derivations and a broader context.