---
title: "Pipe flow – laminar and turbulent flows, significance of Reynolds number, shear stress and velocity distribution in a pipe flow."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 3: Pipe flow – laminar and turbulent flows, significance of Reynolds number, shear stress and velocity distribution in a pipe flow."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d20"
status: "completed"
scrapedAt: "2026-05-20T17:49:25.738Z"
---
# Module 3: Pipe Flow - Laminar and Turbulent Flows, Reynolds Number, Shear Stress, and Velocity Distribution

This module delves into the behavior of fluids flowing through pipes, a fundamental aspect of fluid mechanics with wide-ranging engineering applications. We will explore the distinct characteristics of laminar and turbulent flows, the critical role of the Reynolds number in distinguishing between them, and how shear stress and velocity are distributed within the pipe cross-section.

---

## 3.1 Introduction to Pipe Flow

Pipe flow is a common scenario in many engineering disciplines, including civil, mechanical, and chemical engineering. It involves the movement of fluids through enclosed conduits. Understanding the nature of this flow is crucial for designing efficient and reliable piping systems, predicting pressure drops, and calculating energy losses.

**Key Concepts:**

*   **Internal Flow:** Flow that occurs within a confined space, such as a pipe or channel.
*   **External Flow:** Flow that occurs over a surface, such as around an airplane wing.
*   **Steady Flow:** Flow where fluid properties (velocity, pressure, density) at any point in the flow field remain constant over time.
*   **Unsteady Flow:** Flow where fluid properties at any point change with time.
*   **Uniform Flow:** Flow where the velocity vector is the same at all points in the flow field.
*   **Non-uniform Flow:** Flow where the velocity vector varies from point to point.
*   **Laminar Flow:** A smooth, orderly flow characterized by layers (laminae) of fluid sliding past each other with minimal mixing.
*   **Turbulent Flow:** A chaotic, irregular flow characterized by eddies, swirls, and significant mixing of fluid.

**Relevance to Course Outcomes:**

*   **CO1:** Understanding pipe flow is essential for calculating pressure drops and energy losses, which relates to fluid properties and their behavior under pressure.
*   **CO2:** Classifying flow as laminar or turbulent involves kinematic descriptions and applying conservation principles to understand momentum transfer.
*   **CO3:** This module directly addresses the analysis of viscous flow through pipes, a core aspect of estimating major losses.

---

## 3.2 Laminar vs. Turbulent Flow

The transition from laminar to turbulent flow is a critical phenomenon that significantly impacts flow characteristics, energy losses, and heat transfer.

**Key Concepts:**

*   **Laminar Flow:**
    *   Characterized by smooth, parallel streamlines.
    *   Little to no mixing between adjacent fluid layers.
    *   Fluid particles move in predictable paths.
    *   Typically occurs at low velocities and with highly viscous fluids.
    *   Velocity profile is parabolic.
    *   Shear stress is directly proportional to the velocity gradient.
*   **Turbulent Flow:**
    *   Characterized by chaotic, random motion of fluid particles.
    *   Significant mixing due to eddies and vortices.
    *   Fluid particles move in irregular paths.
    *   Typically occurs at high velocities and with low viscosity fluids.
    *   Velocity profile is flatter in the core and steeper near the walls.
    *   Shear stress includes both viscous and turbulent components.

**Distinguishing Between Laminar and Turbulent Flow:**

The primary parameter used to differentiate between laminar and turbulent flow is the **Reynolds number (Re)**.

---

## 3.3 The Reynolds Number (Re)

The Reynolds number is a dimensionless quantity that represents the ratio of inertial forces to viscous forces within a fluid flow. It provides a criterion for predicting whether a flow will be laminar or turbulent.

**Definition:**

$$Re = \frac{\text{Inertial Forces}}{\text{Viscous Forces}}$$

For flow in a circular pipe, the Reynolds number is defined as:

$$Re = \frac{\rho V D}{\mu}$$

or

$$Re = \frac{V D}{\nu}$$

Where:

*   $\rho$ (rho) = Density of the fluid ($kg/m^3$)
*   $V$ = Average velocity of the fluid ($m/s$)
*   $D$ = Diameter of the pipe ($m$)
*   $\mu$ (mu) = Dynamic viscosity of the fluid ($Pa \cdot s$ or $N \cdot s/m^2$)
*   $\nu$ (nu) = Kinematic viscosity of the fluid ($\mu / \rho$) ($m^2/s$)

**Significance of Reynolds Number:**

*   **Laminar Flow:** For pipe flow, if $Re < 2300$, the flow is generally considered laminar.
*   **Transitional Flow:** If $2300 < Re < 4000$, the flow is in a transitional regime, exhibiting characteristics of both laminar and turbulent flow. It can be unpredictable.
*   **Turbulent Flow:** If $Re > 4000$, the flow is generally considered turbulent.

**Cengel & Cimbala (2013):** Emphasizes that the transition Reynolds number is not a fixed value but depends on factors like pipe roughness and entrance conditions. For smooth pipes, the transition usually begins around $Re \approx 2300$.

**Som & Kim (2011):** States that Reynolds number is a dimensionless parameter that characterizes the flow regime. A low Re indicates viscous forces dominate, leading to laminar flow, while a high Re indicates inertial forces dominate, leading to turbulent flow.

**Bansal (2005):** Provides a comprehensive explanation of how the Reynolds number relates to the relative importance of inertia and viscosity. He highlights that viscous forces tend to damp out velocity fluctuations, promoting laminar flow, while inertial forces tend to amplify them, leading to turbulence.

**Example:**

Consider water ($\rho = 1000 \, kg/m^3$, $\nu = 1 \times 10^{-6} \, m^2/s$) flowing through a pipe of diameter $D = 0.02 \, m$ at an average velocity of $V = 0.1 \, m/s$.

$Re = \frac{V D}{\nu} = \frac{(0.1 \, m/s)(0.02 \, m)}{1 \times 10^{-6} \, m^2/s} = 2000$

Since $Re = 2000 < 2300$, the flow is **laminar**.

Now, if the velocity increases to $V = 0.5 \, m/s$:

$Re = \frac{V D}{\nu} = \frac{(0.5 \, m/s)(0.02 \, m)}{1 \times 10^{-6} \, m^2/s} = 10000$

Since $Re = 10000 > 4000$, the flow is **turbulent**.

**Important Point to Remember:** The Reynolds number is a crucial indicator of flow regime. Always calculate it to understand whether your pipe flow is laminar or turbulent.

---

## 3.4 Shear Stress in Pipe Flow

Shear stress is a measure of the force per unit area acting parallel to a surface. In pipe flow, shear stress arises due to the viscosity of the fluid and the relative motion between fluid layers and the pipe wall.

**Key Concepts:**

*   **Viscous Shear Stress ($\tau_{viscous}$):** In laminar flow, this stress is directly proportional to the velocity gradient, as described by Newton's law of viscosity:
    $$\tau_{viscous} = -\mu \frac{du}{dy}$$
    Where:
    *   $\mu$ is the dynamic viscosity.
    *   $\frac{du}{dy}$ is the velocity gradient (rate of change of velocity with respect to the perpendicular distance from the wall). The negative sign indicates that shear stress opposes the relative motion.
*   **Wall Shear Stress ($\tau_w$):** The shear stress exerted by the fluid on the pipe wall. In laminar flow, it is related to the pressure drop along the pipe.
*   **Turbulent Shear Stress ($\tau_{turbulent}$):** In turbulent flow, in addition to viscous shear stress, there is an additional shear stress due to the momentum exchange from turbulent eddies. This is often referred to as Reynolds stress.
    $$\tau_{total} = \tau_{viscous} + \tau_{turbulent}$$
    The turbulent shear stress is generally much larger than the viscous shear stress in fully turbulent flow.

**Cengel & Cimbala (2013):** Discusses that in laminar flow, the shear stress distribution is linear across the pipe radius, with the maximum shear stress occurring at the pipe wall and zero shear stress at the centerline. In turbulent flow, the shear stress distribution is more complex, with a very steep gradient near the wall and a nearly constant value in the core region.

**Som & Kim (2011):** Explain that shear stress is a critical factor in determining friction losses in pipe flow. They relate wall shear stress to the average velocity and pipe diameter through equations derived from momentum principles.

**Bansal (2005):** Provides detailed derivations for shear stress distribution in both laminar and turbulent flows. For laminar flow in a circular pipe, he shows that $\tau = \tau_w \frac{r}{R}$, where $\tau_w$ is the wall shear stress, $r$ is the radial distance from the center, and $R$ is the pipe radius.

**Example:**

In laminar flow through a pipe, the wall shear stress is $\tau_w$. At a radial position $r$ from the centerline of a pipe with radius $R$, the shear stress is $\tau = \tau_w \frac{r}{R}$. If $\tau_w = 10 \, Pa$ and $R = 0.05 \, m$, what is the shear stress at $r = 0.025 \, m$?

$\tau = 10 \, Pa \times \frac{0.025 \, m}{0.05 \, m} = 5 \, Pa$

**Important Point to Remember:** Shear stress is highest at the pipe wall and zero at the center in laminar flow. In turbulent flow, it remains high in the core but decreases rapidly near the wall.

---

## 3.5 Velocity Distribution in Pipe Flow

The velocity of the fluid is not uniform across the pipe's cross-section. It varies depending on whether the flow is laminar or turbulent.

**Key Concepts:**

*   **Laminar Flow Velocity Distribution:**
    *   **Parabolic Profile:** In fully developed laminar flow in a circular pipe, the velocity profile is parabolic. The maximum velocity occurs at the centerline of the pipe, and the velocity is zero at the pipe walls (due to the no-slip condition).
    *   **Hagen-Poiseuille Equation:** This equation describes the flow rate and velocity profile for laminar flow in a circular pipe:
        $$V(r) = V_{max} \left(1 - \frac{r^2}{R^2}\right)$$
        Where:
        *   $V(r)$ is the velocity at a radial distance $r$ from the centerline.
        *   $V_{max}$ is the maximum velocity at the centerline.
        *   $R$ is the pipe radius.
    *   **Relationship between Average and Maximum Velocity:** For laminar flow, the average velocity $V_{avg}$ is half the maximum velocity:
        $$V_{avg} = \frac{V_{max}}{2}$$
        Therefore, the velocity profile can also be written in terms of the average velocity:
        $$V(r) = 2V_{avg} \left(1 - \frac{r^2}{R^2}\right)$$

*   **Turbulent Flow Velocity Distribution:**
    *   **Flatter Profile:** In turbulent flow, the intense mixing tends to equalize the velocity across the core of the pipe. The velocity profile is flatter in the core region compared to the parabolic profile of laminar flow.
    *   **Steeper Gradient Near the Wall:** The velocity gradient near the pipe wall is much steeper in turbulent flow due to the dominant effect of turbulent shear stress.
    *   **Logarithmic Law:** For smooth pipes in turbulent flow, the velocity distribution in the viscous sublayer and buffer zone near the wall can be described by a logarithmic law:
        $$\frac{V}{u^*} = \frac{1}{\kappa} \ln \left(\frac{yu^*}{\nu}\right) + B$$
        Where:
        *   $u^*$ is the friction velocity ($\sqrt{\tau_w/\rho}$).
        *   $\kappa$ is the von Kármán constant ($\approx 0.41$).
        *   $y$ is the distance from the wall.
        *   $B$ is a constant that depends on the flow regime near the wall.
    *   **Power-Law Profile:** A simpler approximation for turbulent flow velocity distribution, especially for fully turbulent conditions, is the power-law profile:
        $$\frac{V}{V_{max}} = \left(\frac{R-r}{R}\right)^{1/n}$$
        Where $n$ is an exponent that depends on the Reynolds number. For example, $n=7$ is often used for moderate Reynolds numbers.
    *   **Relationship between Average and Maximum Velocity:** In turbulent flow, $V_{avg}$ is greater than $V_{max}/2$. It is typically around $0.8 V_{max}$.

**Cengel & Cimbala (2013):** Clearly illustrate the parabolic velocity profile for laminar flow and the flatter, more rounded profile for turbulent flow with sketches. They also discuss the concept of the viscous sublayer and turbulent core in turbulent flow.

**Som & Kim (2011):** Present the mathematical expressions for velocity distribution in both laminar and turbulent flows, emphasizing the differences in their shape and the factors influencing them.

**Bansal (2005):** Provides a thorough derivation of the parabolic velocity profile for laminar flow using the Navier-Stokes equations. He also discusses empirical correlations for velocity distribution in turbulent flow, such as the logarithmic law and power-law.

**Example:**

For fully developed laminar flow in a pipe of radius $R=0.05 \, m$, if the maximum velocity at the centerline is $V_{max} = 0.2 \, m/s$, what is the velocity at $r = 0.025 \, m$?

Using the parabolic profile:
$V(r) = V_{max} \left(1 - \frac{r^2}{R^2}\right)$
$V(0.025 \, m) = 0.2 \, m/s \left(1 - \frac{(0.025 \, m)^2}{(0.05 \, m)^2}\right)$
$V(0.025 \, m) = 0.2 \, m/s \left(1 - \frac{0.000625}{0.0025}\right)$
$V(0.025 \, m) = 0.2 \, m/s (1 - 0.25)$
$V(0.025 \, m) = 0.2 \, m/s \times 0.75 = 0.15 \, m/s$

**Important Point to Remember:** The velocity profile is a key differentiator between laminar and turbulent flow. A parabolic profile signifies laminar flow, while a flatter profile with a steeper gradient near the wall indicates turbulent flow.

---

## 3.6 Entrance Region and Fully Developed Flow

When a fluid enters a pipe from a reservoir or a large tank, the flow is initially affected by the entrance conditions. As the fluid moves along the pipe, the viscous effects propagate from the walls, and the velocity profile eventually becomes independent of the axial position.

**Key Concepts:**

*   **Entrance Region (Hydrodynamic Entrance Length, $L_e$):** The region from the pipe entrance where the velocity profile is still developing and is influenced by the boundary layer growth from the walls.
*   **Fully Developed Flow:** The region of the pipe where the velocity profile no longer changes with axial distance. In this region, the flow is steady, and the shear stress at the wall is constant.
*   **Hydrodynamic Entrance Length:**
    *   For **Laminar Flow:** $L_e/D \approx 0.05 \, Re$ (Cengel & Cimbala, 2013). This means for laminar flow, the entrance length can be quite significant.
    *   For **Turbulent Flow:** The entrance region is much shorter because turbulent mixing promotes the rapid development of the velocity profile. Typically, $L_e/D \approx 10$ to 60.

**Cengel & Cimbala (2013):** Clearly distinguish between the entrance region and fully developed flow. They explain that for laminar flow, the parabolic velocity profile is achieved only after the entrance region. For turbulent flow, the profile develops much more quickly.

**Som & Kim (2011):** Discuss the concept of boundary layer growth in the entrance region and its effect on the velocity profile. They provide empirical correlations for estimating the hydrodynamic entrance length for both laminar and turbulent flows.

**Bansal (2005):** Elaborates on the physics of boundary layer development in the entrance section, explaining how viscous effects diffuse from the pipe wall inwards. He presents formulas for calculating the entrance length for both flow regimes.

**Example:**

For laminar flow of water ($\nu = 1 \times 10^{-6} \, m^2/s$) through a pipe of diameter $D = 0.05 \, m$ at an average velocity $V = 0.1 \, m/s$:

Calculate the Reynolds number:
$Re = \frac{V D}{\nu} = \frac{(0.1 \, m/s)(0.05 \, m)}{1 \times 10^{-6} \, m^2/s} = 5000$

Oops, the Reynolds number is 5000, which is in the transitional regime. Let's recalculate with a velocity that ensures laminar flow, say $V = 0.02 \, m/s$.

$Re = \frac{V D}{\nu} = \frac{(0.02 \, m/s)(0.05 \, m)}{1 \times 10^{-6} \, m^2/s} = 1000$

Now, the flow is laminar. Calculate the hydrodynamic entrance length ($L_e$):

$L_e \approx 0.05 \, Re \times D$
$L_e \approx 0.05 \times 1000 \times 0.05 \, m$
$L_e \approx 2.5 \, m$

This means the velocity profile will continue to develop for approximately 2.5 meters from the entrance.

**Important Point to Remember:** The behavior of fluid flow in a pipe depends on whether it's in the entrance region or fully developed. The entrance length is significantly longer for laminar flow than for turbulent flow.

---

## Practice Questions and Answers

**Question 1:**
Water at $20^\circ C$ ($\rho = 998 \, kg/m^3$, $\nu = 1.004 \times 10^{-6} \, m^2/s$) flows through a pipe of diameter $0.03 \, m$ at an average velocity of $0.05 \, m/s$. Determine if the flow is laminar or turbulent.

**Answer:**
Calculate the Reynolds number:
$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$
$Re = \frac{(0.05 \, m/s)(0.03 \, m)}{1.004 \times 10^{-6} \, m^2/s}$
$Re = 1494 \, 024 \approx 1494$

Since $Re < 2300$, the flow is **laminar**.

---

**Question 2:**
In a fully developed laminar flow through a circular pipe of radius $R = 0.04 \, m$, the maximum velocity at the centerline is $V_{max} = 0.3 \, m/s$. Calculate the velocity at a radial distance of $r = 0.02 \, m$ from the centerline.

**Answer:**
For laminar flow, the velocity distribution is given by:
$V(r) = V_{max} \left(1 - \frac{r^2}{R^2}\right)$
$V(0.02 \, m) = 0.3 \, m/s \left(1 - \frac{(0.02 \, m)^2}{(0.04 \, m)^2}\right)$
$V(0.02 \, m) = 0.3 \, m/s \left(1 - \frac{0.0004}{0.0016}\right)$
$V(0.02 \, m) = 0.3 \, m/s (1 - 0.25)$
$V(0.02 \, m) = 0.3 \, m/s \times 0.75 = 0.225 \, m/s$

The velocity at $r = 0.02 \, m$ is $0.225 \, m/s$.

---

**Question 3:**
For a fully developed laminar flow in a pipe, if the wall shear stress is $\tau_w$, what is the shear stress at a radial position $r$? Express your answer in terms of $\tau_w$ and the ratio $r/R$.

**Answer:**
In fully developed laminar flow in a circular pipe, the shear stress distribution is linear with the radial distance from the centerline:
$\tau(r) = \tau_w \frac{r}{R}$

---

**Question 4:**
Compare the velocity profiles of laminar and turbulent flow in a pipe. Briefly explain the reasons for the differences.

**Answer:**
*   **Laminar Flow:** Exhibits a parabolic velocity profile. The maximum velocity occurs at the centerline, and the velocity decreases parabolically towards the walls, reaching zero at the wall due to the no-slip condition. The flow is smooth and orderly.
*   **Turbulent Flow:** Exhibits a flatter velocity profile in the core region and a much steeper velocity gradient near the pipe wall. This is due to the significant momentum transfer caused by turbulent eddies and chaotic motion of fluid particles. The mixing in turbulent flow tends to equalize velocities across the core, while the strong interaction with the wall leads to a rapid change in velocity close to it.

---

## Summary of Key Learning Outcomes

*   **Classification of Flow:** You can now classify fluid flow in pipes as either laminar or turbulent based on the Reynolds number.
*   **Reynolds Number Significance:** You understand that the Reynolds number ($Re = VD/\nu$) is a crucial dimensionless parameter indicating the ratio of inertial to viscous forces, which dictates the flow regime.
*   **Shear Stress Distribution:** You can describe how shear stress varies across the pipe's cross-section, being linear in laminar flow and more complex in turbulent flow, with the maximum at the wall.
*   **Velocity Distribution:** You can differentiate between the parabolic velocity profile of laminar flow and the flatter profile of turbulent flow, understanding the physical reasons behind these distributions.
*   **Entrance Region vs. Fully Developed Flow:** You understand the concepts of the entrance region and fully developed flow, and how the hydrodynamic entrance length differs for laminar and turbulent flows.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## References

*   **Cengel Y. A. and J. M. Cimbala (2013).** *Fluid Mechanics*. Tata McGraw Hill. (Key concepts on Reynolds number, flow regimes, velocity profiles, and entrance length).
*   **Som S.K. (2011).** *Introduction to Fluid Mechanics and Fluid Machines*. McGraw Hill Education India. (Provides good explanations of flow classification and dimensionless parameters like Re).
*   **Bansal R.K. (2005).** *Fluid Mechanics and Hydraulic Machines*. Laxmi Publications. (Offers detailed derivations for shear stress and velocity distribution in laminar flow).
*   **White F.M. (2003).** *Fluid Mechanics*. Tata McGraw Hill. (Provides in-depth theoretical background and advanced treatments of pipe flow phenomena).
*   **Fisher and Henly (2023).** *Engineering applications of Fluid dynamics*. Willford Press. (Offers practical examples and context for pipe flow in engineering applications).

---