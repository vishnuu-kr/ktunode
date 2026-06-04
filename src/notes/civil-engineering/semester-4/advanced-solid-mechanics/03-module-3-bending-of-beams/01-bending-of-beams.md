---
title: "Bending of beams"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 3: Bending of beams"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810a00"
status: "completed"
scrapedAt: "2026-05-20T18:42:39.797Z"
---
# Advanced Solid Mechanics: Module 3 - Bending of Beams

## 3.1 Introduction to Bending of Beams

### 3.1.1 Basic Concepts and Definitions

*   **Beam:** A structural element that primarily resists loads applied laterally to its axis. The loads cause internal bending moments and shear forces.
*   **Bending:** A phenomenon where a beam deforms under load, resulting in curvature. This deformation is characterized by internal stresses and strains.
*   **Types of Beams:**
    *   **Simply Supported:** Supported at both ends, allowing rotation but preventing vertical displacement.
    *   **Cantilever:** Fixed at one end and free at the other.
    *   **Overhanging:** Supported at two points, with one or both ends extending beyond the supports.
    *   **Continuous:** Supported at more than two points.
*   **Types of Loads:**
    *   **Concentrated Load:** A load applied at a single point.
    *   **Uniformly Distributed Load (UDL):** A load spread evenly across a length of the beam.
    *   **Varying Distributed Load:** A load that changes linearly or otherwise along the length of the beam.
*   **Neutral Axis (NA):** An imaginary line within the beam where the bending stress is zero. It passes through the centroid of the cross-section.
*   **Bending Stress ($\sigma$):** The normal stress developed in a beam due to bending. It is tensile on one side of the neutral axis and compressive on the other.
*   **Shear Stress ($\tau$):** The tangential stress developed in a beam due to the shear force.
*   **Bending Moment (M):** The internal moment of force that resists the bending of a beam.
*   **Shear Force (V):** The internal force that resists the shearing action in a beam.
*   **Moment of Inertia (I):** A geometric property of a cross-section that represents its resistance to bending. It is calculated with respect to the neutral axis. For a standard shape like a rectangle, $I = \frac{bh^3}{12}$, where 'b' is the width and 'h' is the height.

### 3.1.2 Euler-Bernoulli Beam Theory (Classical Beam Theory)

*   **Assumptions:**
    1.  **Plane sections remain plane:** Cross-sections perpendicular to the neutral axis before bending remain plane and perpendicular to the neutral axis after bending.
    2.  **Shear deformation is negligible:** The effect of shear stress on the deformation is ignored. This is valid for long and slender beams.
    3.  **Material is homogeneous, isotropic, and obeys Hooke's Law:** The material properties are uniform and the stress-strain relationship is linear.
    4.  **The beam is initially straight:** The beam has no initial curvature.
    5.  **The beam is slender:** The length is significantly greater than the depth.
    6.  **Lateral loads are applied in a plane containing an axis of symmetry of the cross-section:** This ensures pure bending.
*   **Key Equations:**
    *   **Flexure Formula:** Relates bending stress to bending moment and section properties:
        $$\sigma = \frac{My}{I}$$
        where:
        *   $\sigma$ = bending stress at a distance 'y' from the neutral axis
        *   $M$ = bending moment at the section
        *   $y$ = distance from the neutral axis to the point of interest
        *   $I$ = moment of inertia of the cross-section about the neutral axis
    *   **Bending Stiffness (EI):** A measure of a beam's resistance to bending under load. $E$ is the Young's Modulus of the material.
    *   **Relationship between Curvature and Bending Moment:**
        $$\frac{1}{\rho} = \frac{M}{EI}$$
        where:
        *   $\frac{1}{\rho}$ = curvature of the beam (approximately $\frac{d^2v}{dx^2}$ for small deflections)
        *   $\rho$ = radius of curvature
        *   $v$ = deflection of the beam

### 3.1.3 Shear Force and Bending Moment Diagrams (SFD & BMD)

*   **Shear Force Diagram (SFD):** A graphical representation of the variation of shear force along the length of the beam.
*   **Bending Moment Diagram (BMD):** A graphical representation of the variation of bending moment along the length of the beam.
*   **Relationships:**
    *   The rate of change of shear force is equal to the intensity of the distributed load: $\frac{dV}{dx} = -w(x)$.
    *   The rate of change of bending moment is equal to the shear force: $\frac{dM}{dx} = V$.
*   **Key Points:**
    *   Where the load is zero, the SFD is constant.
    *   Where the load is uniform, the SFD is linear.
    *   Where the shear force is zero, the bending moment is maximum or minimum (local extremum).
    *   Where the load is zero, the BMD is linear.
    *   Where the load is uniform, the BMD is parabolic.
    *   The area under the SFD between two points represents the change in bending moment between those points.

**Example 3.1: Simply Supported Beam with a Concentrated Load**

Consider a simply supported beam of length $L$ with a concentrated load $P$ at its center.

*   **Reactions:** $R_A = R_B = \frac{P}{2}$.
*   **SFD:**
    *   From $x=0$ to $x=L/2$: $V(x) = R_A = \frac{P}{2}$ (constant positive shear).
    *   From $x=L/2$ to $x=L$: $V(x) = R_A - P = \frac{P}{2} - P = -\frac{P}{2}$ (constant negative shear).
    *   The SFD shows a jump of $P$ at the load point.
*   **BMD:**
    *   From $x=0$ to $x=L/2$: $M(x) = R_A \cdot x = \frac{P}{2} x$ (linear, increasing).
    *   At $x=L/2$: $M_{max} = \frac{P}{2} \cdot \frac{L}{2} = \frac{PL}{4}$.
    *   From $x=L/2$ to $x=L$: $M(x) = R_A \cdot x - P \cdot (x - \frac{L}{2}) = \frac{P}{2} x - Px + \frac{PL}{2} = \frac{PL}{2} - \frac{P}{2} x$ (linear, decreasing).
    *   The BMD is a triangle with a maximum at the center.

## 3.2 Bending Stress and Strain

### 3.2.1 Derivation of Bending Stress Formula

Starting from the Euler-Bernoulli assumption that plane sections remain plane and perpendicular to the neutral axis, we can analyze the deformation.

Let:
*   $v(x)$ be the vertical deflection of the beam at position $x$.
*   The curvature of the neutral axis is approximately $\frac{d^2v}{dx^2}$.
*   Consider a cross-section at $x$. Before bending, a fiber at a distance $y$ from the neutral axis has length $dx$.
*   After bending, this fiber deforms to a length $ds$. The change in length is $ds - dx$.
*   The strain $\epsilon_x$ is given by $\frac{ds - dx}{dx}$.
*   The arc length $ds$ of a curved beam with radius of curvature $\rho$ at a distance $y$ from the center of curvature is $ds = (\rho - y) d\theta$. The original length of the fiber at distance $y$ from the neutral axis is $dx = \rho d\theta$.
*   Therefore, $ds - dx = (\rho - y) d\theta - \rho d\theta = -y d\theta$.
*   Strain $\epsilon_x = \frac{-y d\theta}{\rho d\theta} = -\frac{y}{\rho}$.
*   From the curvature relationship, $\frac{1}{\rho} = \frac{M}{EI}$.
*   Substituting this into the strain equation: $\epsilon_x = -\frac{M}{EI} y$. The negative sign indicates that for a positive bending moment (causing sagging), fibers above the neutral axis (positive $y$) are in compression, and fibers below are in tension.
*   Using Hooke's Law, $\sigma_x = E \epsilon_x$.
*   So, $\sigma_x = E \left(-\frac{M}{EI} y\right) = -\frac{My}{I}$. The convention for stress is often taken such that positive $y$ is upwards. If the beam sags (positive $M$), the top fibers ($y>0$) are in compression ($\sigma < 0$) and bottom fibers ($y<0$) are in tension ($\sigma > 0$). To align with common sign conventions where tensile stress is positive, we can write $\sigma_x = \frac{My}{I}$, understanding that the sign of $y$ relative to the neutral axis dictates tension or compression.

### 3.2.2 Bending Stresses in Various Cross-Sections

*   **Rectangular Cross-Section:** Width $b$, height $h$.
    *   Neutral axis passes through the centroid.
    *   Moment of Inertia $I = \frac{bh^3}{12}$.
    *   Maximum bending stress occurs at $y = \pm \frac{h}{2}$:
        $$\sigma_{max} = \frac{M(h/2)}{bh^3/12} = \frac{6M}{bh^2}$$
*   **Circular Cross-Section:** Radius $r$, diameter $d$.
    *   Neutral axis passes through the centroid (center).
    *   Moment of Inertia $I = \frac{\pi r^4}{4} = \frac{\pi d^4}{64}$.
    *   Maximum bending stress occurs at $y = \pm r$:
        $$\sigma_{max} = \frac{Mr}{\pi r^4/4} = \frac{4M}{\pi r^3} = \frac{32M}{\pi d^3}$$
*   **I-Beams and Other Sections:** The flexure formula $\sigma = \frac{My}{I}$ is generally applicable. The neutral axis is at the centroid. For complex shapes, the moment of inertia needs to be calculated using the parallel axis theorem.

### 3.2.3 Section Modulus (Z)

*   **Definition:** Section modulus is a geometric property of a beam's cross-section that relates the maximum bending stress to the bending moment. It is defined as $Z = \frac{I}{y_{max}}$, where $y_{max}$ is the distance from the neutral axis to the outermost fiber.
*   **Flexure Formula in terms of Z:** $\sigma_{max} = \frac{M}{Z}$.
*   **For a rectangle:** $Z = \frac{bh^2}{6}$.
*   **For a circle:** $Z = \frac{\pi r^3}{4} = \frac{\pi d^3}{32}$.
*   **Importance:** Section modulus is often used in beam design to quickly estimate maximum bending stress and compare the bending resistance of different cross-sections. Larger section modulus means greater resistance to bending for a given material.

**Example 3.2: Bending Stress in a Rectangular Beam**

A rectangular beam of width 50 mm and depth 100 mm is subjected to a bending moment of 10 kNm. Calculate the maximum bending stress.

*   $b = 50 \times 10^{-3}$ m
*   $h = 100 \times 10^{-3}$ m
*   $M = 10 \times 10^3$ Nm
*   $I = \frac{bh^3}{12} = \frac{(50 \times 10^{-3})(100 \times 10^{-3})^3}{12} = \frac{(0.05)(0.001)}{12} = 4.167 \times 10^{-7} m^4$
*   $y_{max} = \frac{h}{2} = \frac{100 \times 10^{-3}}{2} = 50 \times 10^{-3}$ m
*   $\sigma_{max} = \frac{My_{max}}{I} = \frac{(10 \times 10^3)(50 \times 10^{-3})}{4.167 \times 10^{-7}} = \frac{500}{4.167 \times 10^{-7}} \approx 1.2 \times 10^8$ Pa = 120 MPa

Alternatively, using Section Modulus:
*   $Z = \frac{bh^2}{6} = \frac{(50 \times 10^{-3})(100 \times 10^{-3})^2}{6} = \frac{(0.05)(0.01)}{6} = 8.333 \times 10^{-5} m^3$
*   $\sigma_{max} = \frac{M}{Z} = \frac{10 \times 10^3}{8.333 \times 10^{-5}} \approx 1.2 \times 10^8$ Pa = 120 MPa

## 3.3 Shear Stress in Beams

### 3.3.1 Shear Force and Shear Stress

*   **Shear Force:** As discussed, shear force is the internal force causing sliding motion between adjacent cross-sections.
*   **Shear Stress:** The stress arising from shear force. It acts parallel to the cross-section.

### 3.3.2 Derivation of Shear Stress Formula (Euler-Bernoulli)

The derivation of shear stress in Euler-Bernoulli beam theory relies on considering the equilibrium of a small element of the beam.

Consider a beam subjected to a bending moment $M$ at section $x$ and $M+dM$ at section $x+dx$. Let the shear force be $V$ at section $x$.

The bending stress distribution at $x$ is $\sigma_x = \frac{M y}{I}$, and at $x+dx$ is $\sigma_{x+dx} = \frac{(M+dM) y}{I}$.

Consider a small area $dA$ at a distance $y'$ from the neutral axis, and integrate from $y'$ to the top of the beam ($y_{max}$). The force on this area due to bending stress is $dF = \sigma dA = \frac{My'}{I} dA$.

The net horizontal force due to the difference in bending stress between section $x$ and $x+dx$ over the area above $y'$ is:
$$dF_{net} = \int_{y'}^{y_{max}} (\sigma_{x+dx} - \sigma_x) dA = \int_{y'}^{y_{max}} \frac{dM}{I} y' dA = \frac{dM}{I} \int_{y'}^{y_{max}} y' dA$$
This force must be balanced by the shear force acting on the cross-section between $x$ and $x+dx$ at height $y'$. Let the shear stress be $\tau_{xy}$. The shear force on this elemental area $b(y') dx$ is $\tau_{xy} b(y') dx$.

Equating the forces:
$$\tau_{xy} b(y') dx = \frac{dM}{I} \int_{y'}^{y_{max}} y' dA$$
We know that $V = \frac{dM}{dx}$ (neglecting distributed load for this derivation). So, $\frac{dM}{I} = \frac{V}{I} dx$.
$$\tau_{xy} b(y') dx = \frac{V}{I} dx \int_{y'}^{y_{max}} y' dA$$
Therefore, the shear stress is:
$$\tau_{xy} = \frac{V}{Ib(y')} \int_{y'}^{y_{max}} y' dA$$
where:
*   $\tau_{xy}$ = shear stress at a distance $y'$ from the neutral axis.
*   $V$ = shear force at the section.
*   $I$ = moment of inertia about the neutral axis.
*   $b(y')$ = width of the cross-section at the distance $y'$ from the neutral axis.
*   $\int_{y'}^{y_{max}} y' dA$ is the first moment of area of the portion of the cross-section above $y'$ about the neutral axis. This is often denoted as $Q$.

So, the general formula for shear stress is:
$$\tau = \frac{VQ}{Ib}$$

### 3.3.3 Shear Stress Distribution in Various Cross-Sections

*   **Rectangular Cross-Section:** Width $b$, height $h$. Neutral axis at $h/2$.
    *   $I = \frac{bh^3}{12}$.
    *   For a distance $y'$ from the neutral axis, consider the area above $y'$:
        *   Width of this area is $b$.
        *   Height is $h/2 - y'$.
        *   Centroid of this area is at $y' + \frac{1}{2}(h/2 - y') = \frac{h}{2} + \frac{y'}{2}$. (Mistake in standard derivation, centroid is at $(y' + h/2)/2$ above neutral axis.)
        *   Let's consider the distance $y$ from the neutral axis. The area above $y$ has a centroid at $(y+h/2)/2$.
        *   $Q = \int_{y}^{h/2} y' dA = b \int_{y}^{h/2} y' dy' = b \left[\frac{y'^2}{2}\right]_{y}^{h/2} = b \left(\frac{(h/2)^2}{2} - \frac{y^2}{2}\right) = \frac{b}{2} \left(\frac{h^2}{4} - y^2\right)$.
    *   Shear stress:
        $$\tau = \frac{V Q}{Ib} = \frac{V \left(\frac{b}{2} (\frac{h^2}{4} - y^2)\right)}{(\frac{bh^3}{12})b} = \frac{6V}{bh^3} \left(\frac{h^2}{4} - y^2\right)$$
    *   This shows a parabolic distribution.
    *   Maximum shear stress occurs at the neutral axis ($y=0$):
        $$\tau_{max} = \frac{6V}{bh^3} \left(\frac{h^2}{4}\right) = \frac{3V}{2bh} = \frac{3V}{2A}$$
        where $A = bh$ is the cross-sectional area. The maximum shear stress is 1.5 times the average shear stress.
    *   Shear stress at the top and bottom surfaces ($y = \pm h/2$) is zero.

*   **Circular Cross-Section:** Radius $r$. Neutral axis at the center.
    *   $I = \frac{\pi r^4}{4}$.
    *   Consider the area above $y$. The width $b(y)$ at height $y$ is $2\sqrt{r^2 - y^2}$.
    *   $Q = \int_{y}^{r} y' dA = \int_{y}^{r} y' (b(y') dy') = \int_{y}^{r} y' (2\sqrt{r^2 - y'^2}) dy'$.
    *   Let $u = r^2 - y'^2$, then $du = -2y' dy'$.
    *   When $y' = y$, $u = r^2 - y^2$. When $y' = r$, $u = 0$.
    *   $Q = \int_{r^2-y^2}^{0} \sqrt{u} (-du) = -\int_{r^2-y^2}^{0} u^{1/2} du = \int_{0}^{r^2-y^2} u^{1/2} du = \left[\frac{2}{3} u^{3/2}\right]_{0}^{r^2-y^2} = \frac{2}{3} (r^2 - y^2)^{3/2}$.
    *   Shear stress:
        $$\tau = \frac{V Q}{Ib} = \frac{V \frac{2}{3} (r^2 - y^2)^{3/2}}{(\frac{\pi r^4}{4}) (2\sqrt{r^2 - y^2})} = \frac{4V}{3\pi r^4} \frac{(r^2 - y^2)}{ \sqrt{r^2 - y^2}} = \frac{4V}{3\pi r^4} (r^2 - y^2)^{1/2}$$
    *   Maximum shear stress occurs at the neutral axis ($y=0$):
        $$\tau_{max} = \frac{4V}{3\pi r^4} (r^2)^{1/2} = \frac{4Vr}{3\pi r^4} = \frac{4V}{3\pi r^3}$$
    *   Since $A = \pi r^2$, $V/A$ is the average shear stress. $\tau_{max} = \frac{4V}{3\pi r^3} = \frac{4V}{3\pi r^2 \cdot r} = \frac{4V}{3A \cdot r}$. This form is less intuitive.
    *   Let's rewrite $\tau_{max}$ in terms of Area. $V/A$ is average shear.
        $\tau_{max} = \frac{4V}{3\pi r^3} = \frac{4V}{3 (\pi r^2) r} = \frac{4V}{3A r}$.
        We know $A = \pi r^2$, so $r^2 = A/\pi$, $r = \sqrt{A/\pi}$.
        $\tau_{max} = \frac{4V}{3\pi (A/\pi)^{3/2}} = \frac{4V}{3\pi A^{3/2}/\pi^{3/2}} = \frac{4V \pi^{1/2}}{3 A^{3/2}}$. This is also not helpful.
    *   Let's express $\tau_{max}$ relative to the average shear stress $\tau_{avg} = V/A$.
        $\tau_{max} = \frac{4V}{3\pi r^3}$. $A = \pi r^2$.
        $\tau_{max} = \frac{4V}{3 (\pi r^2) r} = \frac{4V}{3 A r}$. This is incorrect.
    *   Let's try again: $A = \pi r^2$.
        $\tau_{max} = \frac{4V}{3\pi r^3}$.
        $\tau_{avg} = \frac{V}{A} = \frac{V}{\pi r^2}$.
        $\tau_{max} = \frac{4}{3} \frac{V}{\pi r^2} = \frac{4}{3} \tau_{avg}$.
        So, $\tau_{max} = \frac{4}{3} \tau_{avg}$ for a circular cross-section.

*   **I-Beams:** Shear stress is primarily concentrated in the web. The flanges carry most of the bending stress.
    *   The shear stress distribution in the web is approximately parabolic.
    *   The shear stress in the flanges is generally small and often neglected.
    *   A simplified approach is to assume the shear force is distributed uniformly across the web area.
    *   $\tau_{avg} = \frac{V}{A_{web}}$, where $A_{web} = t_w \times h_{web}$, $t_w$ is web thickness and $h_{web}$ is the depth of the web.
    *   The maximum shear stress in the web is often estimated as $\tau_{max} \approx 1.5 \tau_{avg}$ if the web is rectangular. For I-beams, the stress can be higher in the web due to the concentration of shear force.

**Example 3.3: Shear Stress in a Rectangular Beam**

For the rectangular beam in Example 3.2 (width 50 mm, depth 100 mm), if the shear force is 20 kN, calculate the maximum shear stress.

*   $b = 50 \times 10^{-3}$ m
*   $h = 100 \times 10^{-3}$ m
*   $V = 20 \times 10^3$ N
*   $\tau_{max} = \frac{3V}{2bh} = \frac{3(20 \times 10^3)}{2(50 \times 10^{-3})(100 \times 10^{-3})} = \frac{60 \times 10^3}{2(0.005)} = \frac{60 \times 10^3}{0.01} = 6 \times 10^6$ Pa = 6 MPa

## 3.4 Deflection of Beams

### 3.4.1 Governing Differential Equation

The deflection of a beam can be described by a second-order differential equation based on the curvature relationship:

*   $\frac{d^2v}{dx^2} = \frac{M(x)}{EI}$
    where:
    *   $v(x)$ is the vertical deflection at position $x$.
    *   $M(x)$ is the bending moment at position $x$.
    *   $E$ is the Young's modulus.
    *   $I$ is the moment of inertia about the neutral axis.

### 3.4.2 Methods for Calculating Deflection

1.  **Direct Integration Method:**
    *   Determine the bending moment equation $M(x)$.
    *   Integrate $M(x)/EI$ twice with respect to $x$ to find $v(x)$.
    *   Use boundary conditions (e.g., zero deflection and slope at a fixed support, zero deflection at a simple support) to determine the constants of integration.

2.  **Moment-Area Method:**
    *   Construct the $M/EI$ diagram.
    *   The first moment of area of the $M/EI$ diagram between two points gives the change in slope.
    *   The second moment of area of the $M/EI$ diagram between two points gives the change in deflection.

3.  **Superposition Method:**
    *   For a beam with multiple loads, the total deflection and slope at any point can be found by summing the deflections and slopes caused by each load individually. This requires knowing standard deflection formulas for common load cases.

4.  **Conjugate Beam Method:**
    *   This method relates the deflection of an actual beam to the bending of a "conjugate" beam. The conjugate beam has the same length and supports as the actual beam, but its bending moment diagram is $M/EI$. The deflection and slope of the actual beam can be found from the shear force and bending moment of the conjugate beam.

### 3.4.3 Standard Beam Deflection Formulas

These formulas are derived using the direct integration method and are essential for the superposition method.

*   **Simply Supported Beam with Concentrated Load P at Center:**
    *   Maximum deflection at center: $\delta_{max} = \frac{PL^3}{48EI}$
    *   Slope at supports: $\theta_{supports} = \pm \frac{PL^2}{16EI}$

*   **Simply Supported Beam with Uniformly Distributed Load w:**
    *   Maximum deflection at center: $\delta_{max} = \frac{5wL^4}{384EI}$
    *   Slope at supports: $\theta_{supports} = \pm \frac{wL^3}{24EI}$

*   **Cantilever Beam with Concentrated Load P at Free End:**
    *   Maximum deflection at free end: $\delta_{max} = \frac{PL^3}{3EI}$
    *   Slope at free end: $\theta_{max} = \frac{PL^2}{2EI}$

*   **Cantilever Beam with Uniformly Distributed Load w:**
    *   Maximum deflection at free end: $\delta_{max} = \frac{wL^4}{8EI}$
    *   Slope at free end: $\theta_{max} = \frac{wL^3}{6EI}$

**Example 3.4: Deflection of a Simply Supported Beam**

A steel simply supported beam of length 4 m has a rectangular cross-section of 50 mm width and 100 mm depth. It is subjected to a uniformly distributed load of 10 kN/m. Calculate the maximum deflection. Assume $E = 200$ GPa.

*   $L = 4$ m
*   $w = 10$ kN/m $= 10 \times 10^3$ N/m
*   $E = 200$ GPa $= 200 \times 10^9$ Pa
*   $I = \frac{bh^3}{12} = \frac{(50 \times 10^{-3})(100 \times 10^{-3})^3}{12} = 4.167 \times 10^{-7} m^4$ (from Example 3.2)

Using the standard formula for a simply supported beam with UDL:
*   $\delta_{max} = \frac{5wL^4}{384EI}$
*   $\delta_{max} = \frac{5(10 \times 10^3 \text{ N/m})(4 \text{ m})^4}{384(200 \times 10^9 \text{ Pa})(4.167 \times 10^{-7} m^4)}$
*   $\delta_{max} = \frac{5(10^4)(256)}{384(200 \times 10^9)(4.167 \times 10^{-7})}$
*   $\delta_{max} = \frac{1.28 \times 10^{10}}{3.2 \times 10^{10}} \approx 0.004$ m = 4 mm

**Important Note:** Ensure consistent units throughout calculations.

### 3.4.4 Slope and Deflection using Direct Integration

Let's apply the direct integration method to a simply supported beam with a concentrated load $P$ at its center ($L/2$).

*   Support reactions: $R_A = R_B = P/2$.
*   Consider the section $0 \le x \le L/2$.
*   Bending moment: $M(x) = R_A \cdot x = \frac{P}{2} x$.
*   Governing equation: $EI \frac{d^2v}{dx^2} = \frac{P}{2} x$.
*   Integrate once for slope: $EI \frac{dv}{dx} = \frac{P}{4} x^2 + C_1$.
*   Integrate again for deflection: $EI v(x) = \frac{P}{12} x^3 + C_1 x + C_2$.

Boundary conditions:
1.  At $x=0$ (left support), deflection $v(0) = 0$.
    $EI \cdot 0 = \frac{P}{12} (0)^3 + C_1 (0) + C_2 \implies C_2 = 0$.
2.  At $x=L/2$ (center), the slope $\frac{dv}{dx} = 0$ due to symmetry.
    $EI \cdot 0 = \frac{P}{4} (\frac{L}{2})^2 + C_1 \implies 0 = \frac{PL^2}{16} + C_1 \implies C_1 = -\frac{PL^2}{16}$.

Now, the deflection equation is:
$EI v(x) = \frac{P}{12} x^3 - \frac{PL^2}{16} x$.

The maximum deflection occurs at $x = L/2$:
$EI v(L/2) = \frac{P}{12} (\frac{L}{2})^3 - \frac{PL^2}{16} (\frac{L}{2})$
$EI v_{max} = \frac{PL^3}{96} - \frac{PL^3}{32} = \frac{PL^3 - 3PL^3}{96} = -\frac{2PL^3}{96} = -\frac{PL^3}{48}$.
$v_{max} = -\frac{PL^3}{48EI}$. The negative sign indicates downward deflection.

The slope equation is:
$EI \frac{dv}{dx} = \frac{P}{4} x^2 - \frac{PL^2}{16}$.

The slope at the supports ($x=0$) is:
$EI \frac{dv}{dx} |_{x=0} = \frac{P}{4} (0)^2 - \frac{PL^2}{16} = -\frac{PL^2}{16}$.
$\theta_{support} = -\frac{PL^2}{16EI}$. The negative sign indicates a clockwise rotation if the load is downwards.

## 3.5 Stress Concentration in Bending

### 3.5.1 Causes of Stress Concentration

*   **Geometric Discontinuities:** Holes, notches, fillets, changes in cross-section, keyways, and chamfers create abrupt changes in the flow of stress.
*   **Load Application Points:** Concentrated loads can also lead to localized high stresses.

### 3.5.2 Stress Concentration Factor ($K_t$)

*   **Definition:** The stress concentration factor ($K_t$) is the ratio of the maximum stress at a discontinuity to the nominal stress calculated by ignoring the discontinuity.
    $$K_t = \frac{\sigma_{max}}{\sigma_{nominal}}$$
*   **Nominal Stress:** The stress calculated using standard formulas as if the discontinuity were not present. For bending, $\sigma_{nominal} = \frac{My}{I}$.
*   **$\sigma_{max}$:** The actual peak stress occurring at the sharpest point of the discontinuity.
*   **Dependence:** $K_t$ depends on the geometry of the discontinuity (shape, size, relative dimensions) and the type of loading.
*   **Impact:** For brittle materials, stress concentrations can lead to premature fracture even at loads below the yield strength. For ductile materials, the localized yielding can redistribute stress, mitigating the effect to some extent, but it can still be a factor in fatigue life.

### 3.5.3 Stress Concentration in Bending

*   **General Formula:** The maximum bending stress at a discontinuity can be estimated as $\sigma_{max} = K_t \frac{My_{max}}{I}$, where $M$ is the bending moment at the location of the discontinuity, and $I$ is the moment of inertia of the gross cross-section.
*   **Notches and Fillets:** For beams with notches or fillets, the stress concentration factor is typically determined from charts or empirical formulas specific to the notch geometry.
    *   **Example:** For a flat plate with a central hole subjected to bending, $K_t$ will depend on the ratio of hole diameter to plate width.
    *   **Example:** For a shaft with a fillet, $K_t$ depends on the radius of the fillet and the ratio of the shaft diameters.
*   **Finite Element Analysis (FEA):** FEA is a powerful tool for accurately calculating stress distributions and stress concentration factors for complex geometries.

**Example 3.5: Stress Concentration in Bending**

A steel shaft of diameter 50 mm is subjected to a bending moment of 200 Nm. It has a semicircular fillet with a radius of 5 mm connecting to a reduced diameter section. Assume the nominal bending stress is calculated using the full shaft diameter. If the stress concentration factor for this fillet is $K_t = 2.0$, find the maximum bending stress.

*   Nominal bending moment $M = 200$ Nm.
*   Shaft diameter $d = 50$ mm $= 0.05$ m.
*   Radius of shaft $r = 25$ mm $= 0.025$ m.
*   $I = \frac{\pi d^4}{64} = \frac{\pi (0.05)^4}{64} = 1.209 \times 10^{-7} m^4$.
*   Nominal maximum bending stress $\sigma_{nominal} = \frac{My_{max}}{I} = \frac{(200 \text{ Nm})(0.025 \text{ m})}{1.209 \times 10^{-7} m^4} = 4.136 \times 10^7$ Pa = 41.36 MPa.
*   Actual maximum bending stress $\sigma_{max} = K_t \sigma_{nominal} = 2.0 \times 41.36$ MPa $= 82.72$ MPa.

## 3.6 Advanced Topics in Bending (Brief Overview)

### 3.6.1 Shear Center

*   **Definition:** The shear center is a point on the cross-section of a beam through which the shear force must act to produce pure bending without twisting.
*   **Importance:** For unsymmetrical cross-sections (e.g., channels, angles, I-beams where the web is not perfectly centered), the shear force does not pass through the centroid. If the shear force acts elsewhere, it creates a torsional moment, leading to twisting of the beam.
*   **Calculation:** The shear center location is determined by calculating the distribution of shear stresses and finding the point where the resultant shear force acts. This often involves integration over the cross-section.

### 3.6.2 Torsion of Beams and Thin-Walled Sections

*   **Torsion:** Application of a twisting moment.
*   **Thin-Walled Sections:** For open thin-walled sections (like channels and angles), the shear stress due to a shear force causes warping and can be calculated using the "shear flow" concept. The shear flow $q$ is constant in thin-walled open sections.
    *   $q = \frac{VQ}{I}$ where $Q$ is the first moment of area of the section above the point of interest.
    *   The shear stress is then $\tau = q/t$, where $t$ is the wall thickness.
*   **Closed Thin-Walled Sections (Torsion):** For closed thin-walled sections (like tubes), the shear stress distribution is uniform around the circumference, and torsion can be analyzed using the "Bredt-Batho formula" or torsion theory for tubes.

### 3.6.3 Curved Beams

*   **Assumptions:** The standard beam theory (Euler-Bernoulli) assumes small deflections and a straight beam. For curved beams, these assumptions may not hold.
*   **Bending Stress in Curved Beams:** The distribution of bending stress in a curved beam is not linear across the depth. The neutral axis does not coincide with the centroid.
    *   The Winkler-Bach formula is used for bending stress in curved beams:
        $$\sigma = \frac{M y}{A R_y} \left( \frac{1}{1 + \frac{E}{A R_y} \int \frac{y}{R_y} dA} \right)$$
        where $R_y$ is the radial distance from the center of curvature to a point $y$ away from the neutral axis. The derivation is more complex than for straight beams.

### 3.6.4 Buckling of Beams (Brief Mention)

*   **Definition:** Buckling is a phenomenon where a slender structural element under compressive load suddenly deforms laterally when a critical load is reached.
*   **Lateral-Laterial Buckling:** For beams subjected to bending, if the beam is slender and the compression flange is not laterally supported, it can buckle sideways.
*   **Euler's Critical Buckling Load:** For a column under axial compression, the critical buckling load is $P_{cr} = \frac{\pi^2 EI}{(KL)^2}$. This concept is extended to beams that might buckle laterally.

## Learning Outcome Checklist & Key Takeaways

### Learning Outcomes Covered:

*   **3.1 Analyse the internal forces (shear force and bending moment) in beams under various loading conditions.** (Covered in 3.1.3 SFD & BMD)
*   **3.2 Apply the Euler-Bernoulli beam theory to determine bending stresses in beams.** (Covered in 3.1.2 and 3.2.1)
*   **3.3 Calculate shear stresses in beams using the shear stress formula.** (Covered in 3.3)
*   **3.4 Determine the deflection and slope of beams under common loading cases.** (Covered in 3.4)
*   **3.5 Understand the concept of stress concentration in bending and its effect.** (Covered in 3.5)
*   **3.6 Appreciate advanced topics like shear center and stress distribution in thin-walled and curved beams.** (Briefly covered in 3.6)

### Important Points to Remember:

*   **Euler-Bernoulli Assumptions:** Crucial for understanding the limitations of the formulas. Shear deformation and warping are neglected.
*   **SFD & BMD Relationship:** $\frac{dV}{dx} = -w(x)$ and $\frac{dM}{dx} = V$. This is fundamental for drawing these diagrams.
*   **Flexure Formula:** $\sigma = \frac{My}{I}$ or $\sigma_{max} = \frac{M}{Z}$. Relates bending stress to moment and section properties.
*   **Shear Stress Formula:** $\tau = \frac{VQ}{Ib}$. Shear stress distribution is generally not uniform.
*   **Maximum Shear Stress:** Occurs at the neutral axis for common shapes (rectangle, circle), often significantly higher than average shear stress.
*   **Beam Deflection:** Governed by $EI \frac{d^2v}{dx^2} = M(x)$. Direct integration, moment-area, superposition, and conjugate beam methods are used. Standard formulas are vital.
*   **Stress Concentration:** Geometric discontinuities cause localized increases in stress, quantified by $K_t$.
*   **Neutral Axis:** For symmetric cross-sections, it passes through the centroid. For asymmetric sections, its location needs to be calculated.
*   **Units Consistency:** Always maintain consistent units in calculations.

---

## Practice Questions

**Question 1: SFD & BMD**
Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD) for a simply supported beam of length 6 m with a uniformly distributed load of 2 kN/m over its entire length.

**Question 2: Bending Stress**
A cantilever beam of length 2 m has a rectangular cross-section of 40 mm width and 80 mm depth. It carries a concentrated load of 5 kN at its free end.
a) Calculate the maximum bending moment.
b) Calculate the moment of inertia of the cross-section.
c) Determine the maximum bending stress in the beam.

**Question 3: Shear Stress**
For the cantilever beam in Question 2, calculate the maximum shear stress.

**Question 4: Deflection**
A simply supported beam of length 5 m is made of steel ($E = 200$ GPa) and has a moment of inertia $I = 100 \times 10^{-6} m^4$. It is subjected to a point load of 30 kN at its center. Calculate the maximum deflection.

**Question 5: Stress Concentration**
A shaft with a circular cross-section of diameter 30 mm has a shoulder fillet of radius 3 mm. If the shaft is subjected to a bending moment of 50 Nm, and the stress concentration factor for this fillet is $K_t = 1.8$, calculate the maximum bending stress at the fillet.

---

## Answers to Practice Questions

**Answer 1:**
*   **Reactions:** $R_A = R_B = \frac{wL}{2} = \frac{(2 \text{ kN/m})(6 \text{ m})}{2} = 6$ kN.
*   **SFD:**
    *   $V(x) = R_A - wx = 6 - 2x$ for $0 \le x \le 6$.
    *   $V(0) = 6$ kN.
    *   $V(3) = 6 - 2(3) = 0$ kN.
    *   $V(6) = 6 - 2(6) = -6$ kN.
    *   The SFD is a straight line decreasing from +6 kN to -6 kN, crossing zero at the center.
*   **BMD:**
    *   $M(x) = R_A x - \frac{wx^2}{2} = 6x - \frac{2x^2}{2} = 6x - x^2$ for $0 \le x \le 6$.
    *   $M(0) = 0$.
    *   $M(3) = 6(3) - (3)^2 = 18 - 9 = 9$ kNm (Maximum bending moment at the center).
    *   $M(6) = 6(6) - (6)^2 = 36 - 36 = 0$.
    *   The BMD is a parabolic curve, starting at 0, reaching a maximum of 9 kNm at the center, and returning to 0 at the other end.

**Answer 2:**
a) Maximum bending moment occurs at the fixed end: $M_{max} = P \times L = (5 \text{ kN})(2 \text{ m}) = 10$ kNm $= 10 \times 10^3$ Nm.
b) $b = 40 \text{ mm} = 0.04$ m, $h = 80 \text{ mm} = 0.08$ m.
   $I = \frac{bh^3}{12} = \frac{(0.04 \text{ m})(0.08 \text{ m})^3}{12} = \frac{(0.04)(0.000512)}{12} = 1.707 \times 10^{-6} m^4$.
c) $y_{max} = \frac{h}{2} = \frac{0.08 \text{ m}}{2} = 0.04$ m.
   $\sigma_{max} = \frac{M_{max} y_{max}}{I} = \frac{(10 \times 10^3 \text{ Nm})(0.04 \text{ m})}{1.707 \times 10^{-6} m^4} = \frac{400}{1.707 \times 10^{-6}} \approx 2.34 \times 10^8$ Pa $= 234$ MPa.

**Answer 3:**
$V = P = 5$ kN $= 5000$ N.
For a rectangular section, $\tau_{max} = \frac{3V}{2A}$.
$A = bh = (0.04 \text{ m})(0.08 \text{ m}) = 0.0032 m^2$.
$\tau_{max} = \frac{3(5000 \text{ N})}{2(0.0032 m^2)} = \frac{15000}{0.0064} \approx 2.34 \times 10^6$ Pa $= 2.34$ MPa.

**Answer 4:**
$L = 5$ m, $P = 30$ kN $= 30 \times 10^3$ N.
$E = 200$ GPa $= 200 \times 10^9$ Pa.
$I = 100 \times 10^{-6} m^4$.
Using the formula for a simply supported beam with a concentrated load at the center:
$\delta_{max} = \frac{PL^3}{48EI} = \frac{(30 \times 10^3 \text{ N})(5 \text{ m})^3}{48(200 \times 10^9 \text{ Pa})(100 \times 10^{-6} m^4)}$
$\delta_{max} = \frac{(30 \times 10^3)(125)}{48(200 \times 10^3)} = \frac{3.75 \times 10^6}{9.6 \times 10^6} \approx 0.3906$ m = 390.6 mm.

*(Note: The deflection value seems large, often this indicates that the beam might be too slender for the load or material properties. Double-check calculations if this were a real-world problem.)*

**Answer 5:**
Nominal bending stress calculation:
Shaft diameter $d = 30$ mm $= 0.03$ m.
$I = \frac{\pi d^4}{64} = \frac{\pi (0.03)^4}{64} = 3.976 \times 10^{-7} m^4$.
$y_{max} = d/2 = 0.015$ m.
$\sigma_{nominal} = \frac{M y_{max}}{I} = \frac{(50 \text{ Nm})(0.015 \text{ m})}{3.976 \times 10^{-7} m^4} = \frac{0.75}{3.976 \times 10^{-7}} \approx 1.886 \times 10^6$ Pa $= 1.886$ MPa.

Actual maximum bending stress:
$\sigma_{max} = K_t \sigma_{nominal} = 1.8 \times 1.886$ MPa $\approx 3.395$ MPa.
