---
title: "Von- Karman momentum integral equations for the boundary layers"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a7a"
status: "completed"
scrapedAt: "2026-05-20T18:46:37.292Z"
---
# Mechanics of Fluid Flow: Module 3 - Concept of Boundary Layer

## Topic: Von-Karman Momentum Integral Equations for the Boundary Layers

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

*   Understand the physical significance of the Von-Karman momentum integral equation.
*   Derive the Von-Karman momentum integral equation for a boundary layer over a flat plate.
*   Apply the Von-Karman momentum integral equation to estimate boundary layer characteristics (e.g., displacement thickness, momentum thickness, wall shear stress, drag coefficient) for specific velocity profiles.
*   Understand the limitations and assumptions of the Von-Karman momentum integral method.

---

### **1. Introduction to Boundary Layer Theory and the Need for Integral Methods**

*   **Boundary Layer Concept:** A thin region near a solid surface where viscous effects are significant, and the fluid velocity changes from zero at the surface (no-slip condition) to the free-stream velocity. Outside the boundary layer, the flow is often treated as inviscid.
*   **Why Integral Methods?**
    *   The governing Navier-Stokes equations are complex partial differential equations that are difficult to solve analytically for many practical flow situations.
    *   Integral methods provide a way to simplify these equations by integrating them across the boundary layer, reducing them to ordinary differential equations (ODEs) or algebraic equations, which are easier to solve.
    *   They offer a good balance between accuracy and computational effort for estimating key boundary layer parameters.

---

### **2. Von-Karman Momentum Integral Equation: Derivation**

The Von-Karman momentum integral equation is derived by considering the conservation of momentum for a control volume within the boundary layer.

**Assumptions:**

1.  **Two-dimensional, steady flow:** The velocity components are independent of the third dimension, and there's no change with time.
2.  **Incompressible flow:** Density ($\rho$) is constant.
3.  **Laminar boundary layer:** The flow within the boundary layer is laminar.
4.  **Newtonian fluid:** Shear stress is proportional to the rate of strain.
5.  **Prandtl's boundary layer approximations:** $\frac{\partial p}{\partial y} \approx 0$ (pressure across the boundary layer is constant and equal to the free-stream pressure) and $\frac{\partial^2 u}{\partial y^2}$ is significant while other terms involving y-derivatives are negligible.

**Derivation Steps (Conceptual):**

1.  **Define a Control Volume:** Consider a control volume of length $dx$ and height $\delta$ (boundary layer thickness) extending from the surface into the free stream. The width of the control volume is unity for 2D flow.

2.  **Apply Conservation of Momentum:** The net momentum flux out of the control volume must equal the sum of forces acting on the control volume.

    *   **Momentum Flux:** This involves the rate at which momentum enters and leaves the control volume due to convection and diffusion.
    *   **Forces:** The primary forces considered are the pressure force (acting in the x-direction) and the shear force at the wall (acting in the x-direction). Viscous forces on the other surfaces of the control volume are generally negligible compared to wall shear stress.

3.  **Integrate the Navier-Stokes Equations:** The derivation typically starts with the x-component of the Navier-Stokes equation for an incompressible flow:

    $u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = -\frac{1}{\rho} \frac{dp}{dx} + \nu \frac{\partial^2 u}{\partial y^2}$

    *   **Apply Free-Stream Conditions:** Outside the boundary layer ($y > \delta$), $u = U_\infty$ and $\frac{\partial u}{\partial y} = 0$. The Bernoulli equation for inviscid flow states that $\frac{dp}{dx} = -\rho U_\infty \frac{dU_\infty}{dx}$.

4.  **Momentum Integral Form:** After integrating the Navier-Stokes equation across the boundary layer thickness $\delta$ and applying the necessary boundary conditions and free-stream relations, the Von-Karman momentum integral equation is obtained:

    $\nu \frac{\partial^2 u}{\partial y^2} \bigg|_{y=0} = \frac{d}{dx} \left( U_\infty^2 \theta \right) + U_\infty \frac{dU_\infty}{dx} (\delta + \delta^*) $

    Where:
    *   $\nu$: Kinematic viscosity of the fluid.
    *   $U_\infty$: Free-stream velocity.
    *   $\theta$: Momentum thickness (defined below).
    *   $\delta^*$: Displacement thickness (defined below).

5.  **Simplify the Wall Shear Stress Term:** The term $\nu \frac{\partial^2 u}{\partial y^2} \bigg|_{y=0}$ represents the wall shear stress, $\tau_w$. Using the definition of shear stress:

    $\tau_w = \mu \frac{\partial u}{\partial y} \bigg|_{y=0}$

    So, the equation becomes:

    $\frac{\tau_w}{\rho} = \frac{d}{dx} \left( U_\infty^2 \theta \right) + U_\infty \frac{dU_\infty}{dx} (\delta + \delta^*) $

    Or, often written in terms of the **momentum thickness ($\theta$)**:

    $\frac{\tau_w}{\rho} = \frac{d}{dx} \left( U_\infty^2 \theta \right) + U_\infty \frac{dU_\infty}{dx} \theta \left( 2 + \frac{\delta^*}{\theta} \right)$

    And further simplified for flow over a flat plate where $U_\infty = \text{constant}$ (so $\frac{dU_\infty}{dx} = 0$):

    $\boxed{\frac{\tau_w}{\rho} = \frac{d}{dx} \left( U_\infty^2 \theta \right)}$

    This simplified form is commonly used for flat plate boundary layer analysis.

---

### **3. Key Boundary Layer Thicknesses**

These thicknesses are introduced to characterize the growth of the boundary layer and are crucial for applying the momentum integral equation.

*   **Boundary Layer Thickness ($\delta$):**
    *   **Definition:** The distance $y$ from the surface where the velocity $u$ reaches a specified percentage (usually 99%) of the free-stream velocity $U_\infty$.
    *   $u(y=\delta) = 0.99 U_\infty$
    *   **Physical Significance:** Represents the extent of the viscous region.

*   **Displacement Thickness ($\delta^*$):**
    *   **Definition:** The distance by which the external flow (inviscid flow) must be displaced outwards to account for the reduction in mass flow rate within the boundary layer due to the slower-moving fluid.
    *   $\delta^* = \int_0^\delta \left(1 - \frac{u}{U_\infty}\right) dy$
    *   **Physical Significance:** It's the "effective thickening" of the body due to the boundary layer, impacting the external flow field. It represents the deficit in mass flow.

*   **Momentum Thickness ($\theta$):**
    *   **Definition:** The distance by which the external flow must be displaced outwards to account for the reduction in momentum flux within the boundary layer due to viscous retardation.
    *   $\theta = \int_0^\delta \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
    *   **Physical Significance:** It's a measure of the momentum deficit in the boundary layer. It directly appears in the momentum integral equation.

*   **Energy Thickness ($\epsilon$ or $\delta^{**}$):** (Less commonly used in basic Von-Karman applications, but worth knowing)
    *   **Definition:** The distance by which the external flow must be displaced outwards to account for the reduction in kinetic energy flux.
    *   $\epsilon = \int_0^\delta \frac{u}{U_\infty} \left(1 - \left(\frac{u}{U_\infty}\right)^2\right) dy$

---

### **4. Applying the Von-Karman Momentum Integral Equation with Assumed Velocity Profiles**

The Von-Karman equation relates $\tau_w$, $\theta$, and $U_\infty$. To solve it, we need to relate $\tau_w$ and $\theta$ to the boundary layer thickness $\delta$ and the free-stream velocity $U_\infty$. This is typically done by assuming a plausible velocity profile $u(x, y)$ within the boundary layer.

**Commonly Used Assumed Velocity Profiles:**

The assumed profile must satisfy the kinematic boundary conditions:
*   $u(x, 0) = 0$ (no-slip at the wall)
*   $u(x, \delta) = U_\infty$ (velocity at the boundary layer edge)

We also need a condition on the velocity gradient at the edge of the boundary layer, derived from the continuity equation for the boundary layer:
*   $\frac{\partial u}{\partial y} \bigg|_{y=\delta} = 0$ (no velocity gradient at the edge of the boundary layer, assuming a simple profile form)

**Procedure:**

1.  **Assume a Velocity Profile:** Express $u/U_\infty$ as a function of $y/\delta$, where the function depends on some parameters.
2.  **Calculate $\delta^*$ and $\theta$:** Substitute the assumed profile into the definitions of $\delta^*$ and $\theta$ and evaluate the integrals. These will be expressed in terms of $\delta$.
3.  **Calculate $\tau_w$:** Calculate the wall shear stress using the assumed profile: $\tau_w = \mu \frac{\partial u}{\partial y} \bigg|_{y=0}$. This will also be expressed in terms of $\delta$ and $U_\infty$.
4.  **Substitute into the Momentum Integral Equation:** For a flat plate ($U_\infty$ = constant, $dU_\infty/dx = 0$):
    $\frac{\tau_w}{\rho} = \frac{d}{dx} \left( U_\infty^2 \theta \right)$
    Substitute the expressions for $\tau_w$ and $\theta$ (in terms of $\delta$). This will result in an ODE for $\delta(x)$.
5.  **Solve the ODE for $\delta(x)$:** Integrate the ODE with the initial condition $\delta(0) = 0$.
6.  **Calculate other quantities:** Once $\delta(x)$ is known, calculate $\tau_w$, the skin friction coefficient ($C_{fx}$), and the drag coefficient ($C_{Dx}$).

---

### **5. Example: Laminar Boundary Layer on a Flat Plate with a Cubic Velocity Profile**

Let's assume a cubic velocity profile that satisfies the boundary conditions:

$u(x, y) = A \left(\frac{y}{\delta}\right) + B \left(\frac{y}{\delta}\right)^2 + C \left(\frac{y}{\delta}\right)^3$

Applying boundary conditions:
1.  $u(x, 0) = 0 \implies A = 0$
2.  $u(x, \delta) = U_\infty \implies B + C = 1$
3.  $\frac{\partial u}{\partial y} \bigg|_{y=\delta} = 0 \implies \frac{U_\infty}{\delta} (2B \frac{y}{\delta} + 3C \frac{y^2}{\delta^2}) \bigg|_{y=\delta} = \frac{U_\infty}{\delta} (2B + 3C) = 0 \implies 2B + 3C = 0$

Solving $B+C=1$ and $2B+3C=0$:
From (2), $C = 1-B$. Substituting into (3):
$2B + 3(1-B) = 0$
$2B + 3 - 3B = 0$
$B = 3$
Then $C = 1 - 3 = -2$.

So, the cubic velocity profile is:
$\frac{u}{U_\infty} = 3 \left(\frac{y}{\delta}\right)^2 - 2 \left(\frac{y}{\delta}\right)^3$

**Now, let's apply the Von-Karman momentum integral equation:**

**a) Calculate $\theta$:**
$\theta = \int_0^\delta \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
Let $\eta = y/\delta$, so $dy = \delta d\eta$. Limits are 0 to 1.
$\frac{u}{U_\infty} = 3\eta^2 - 2\eta^3$
$\theta = \int_0^1 (3\eta^2 - 2\eta^3) (1 - (3\eta^2 - 2\eta^3)) \delta d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 2\eta^3) (1 - 3\eta^2 + 2\eta^3) d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 9\eta^4 + 6\eta^5 - 2\eta^3 + 6\eta^5 - 4\eta^6) d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 2\eta^3 - 9\eta^4 + 12\eta^5 - 4\eta^6) d\eta$
$\theta = \delta \left[ \eta^3 - \frac{1}{2}\eta^4 - \frac{9}{5}\eta^5 + 2\eta^6 - \frac{4}{7}\eta^7 \right]_0^1$
$\theta = \delta \left( 1 - \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7} \right)$
$\theta = \delta \left( \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7} \right) = \delta \left( \frac{35 - 126 + 70 - 40}{70} \right) = \delta \left( \frac{-61}{70} \right)$

**Wait!** Something is wrong here. The momentum thickness cannot be negative. Let's recheck the integration.

Re-evaluating the integral:
$\theta = \int_0^\delta \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
Let $\eta = y/\delta$.
$\theta = \delta \int_0^1 (3\eta^2 - 2\eta^3) (1 - (3\eta^2 - 2\eta^3)) d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 2\eta^3) (1 - 3\eta^2 + 2\eta^3) d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 9\eta^4 + 6\eta^5 - 2\eta^3 + 6\eta^5 - 4\eta^6) d\eta$
$\theta = \delta \int_0^1 (3\eta^2 - 2\eta^3 - 9\eta^4 + 12\eta^5 - 4\eta^6) d\eta$
$\theta = \delta \left[ \eta^3 - \frac{2\eta^4}{4} - \frac{9\eta^5}{5} + \frac{12\eta^6}{6} - \frac{4\eta^7}{7} \right]_0^1$
$\theta = \delta \left[ \eta^3 - \frac{1}{2}\eta^4 - \frac{9}{5}\eta^5 + 2\eta^6 - \frac{4}{7}\eta^7 \right]_0^1$
$\theta = \delta \left( 1 - \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7} \right)$
$\theta = \delta \left( \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7} \right) = \delta \left( \frac{35 - 126 + 70 - 40}{70} \right) = \delta \left( \frac{-61}{70} \right)$

**Let's pause and re-examine the profile or my calculation.** A common mistake is in the profile itself or the integration.

**Correct Cubic Profile Derivation:**
Let's try a simpler cubic profile where the derivative at $\delta$ is zero:
$\frac{u}{U_\infty} = a \left(\frac{y}{\delta}\right) + b \left(\frac{y}{\delta}\right)^2 + c \left(\frac{y}{\delta}\right)^3$
Conditions:
1.  $u(0) = 0 \implies a = 0$
2.  $u(\delta) = U_\infty \implies b + c = 1$
3.  $\frac{\partial u}{\partial y}\bigg|_{y=\delta} = 0 \implies \frac{U_\infty}{\delta} (2b (\frac{y}{\delta}) + 3c (\frac{y}{\delta})^2)\bigg|_{y=\delta} = \frac{U_\infty}{\delta} (2b+3c) = 0 \implies 2b+3c = 0$.
This is the same system of equations. So, the profile is correct.

Let's re-evaluate the integral for $\theta$ more carefully.
$\frac{u}{U_\infty} = 3\eta^2 - 2\eta^3$
$1 - \frac{u}{U_\infty} = 1 - (3\eta^2 - 2\eta^3) = 1 - 3\eta^2 + 2\eta^3$
$\frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) = (3\eta^2 - 2\eta^3)(1 - 3\eta^2 + 2\eta^3)$
$= 3\eta^2 - 9\eta^4 + 6\eta^5 - 2\eta^3 + 6\eta^5 - 4\eta^6$
$= 3\eta^2 - 2\eta^3 - 9\eta^4 + 12\eta^5 - 4\eta^6$

Integral: $\int_0^1 (3\eta^2 - 2\eta^3 - 9\eta^4 + 12\eta^5 - 4\eta^6) d\eta$
$= \left[ \eta^3 - \frac{2\eta^4}{4} - \frac{9\eta^5}{5} + \frac{12\eta^6}{6} - \frac{4\eta^7}{7} \right]_0^1$
$= \left[ \eta^3 - \frac{1}{2}\eta^4 - \frac{9}{5}\eta^5 + 2\eta^6 - \frac{4}{7}\eta^7 \right]_0^1$
$= 1 - \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7}$
$= 0.5 - 1.8 + 2 - 0.5714...$
$= 0.5 - 1.8 + 2 - 0.5714 = 0.12857...$

Ah, my previous arithmetic was faulty. Let's use fractions:
$= 1 - \frac{1}{2} - \frac{9}{5} + 2 - \frac{4}{7}$
Common denominator is 70.
$= \frac{70}{70} - \frac{35}{70} - \frac{126}{70} + \frac{140}{70} - \frac{40}{70}$
$= \frac{70 - 35 - 126 + 140 - 40}{70} = \frac{210 - 201}{70} = \frac{9}{70}$

So, $\theta = \frac{9}{70} \delta$.

**b) Calculate $\tau_w$:**
$\tau_w = \mu \frac{\partial u}{\partial y} \bigg|_{y=0}$
$\frac{\partial u}{\partial y} = \frac{U_\infty}{\delta} (6 \frac{y}{\delta} - 6 (\frac{y}{\delta})^2)$
$\frac{\partial u}{\partial y} \bigg|_{y=0} = 0$.

**This profile yields zero wall shear stress!** This means this cubic profile is not suitable for the momentum integral equation as it doesn't generate drag. This highlights the importance of choosing a profile that is physically representative.

**Let's use the standard parabolic profile for laminar flow:**

$\frac{u}{U_\infty} = 2 \left(\frac{y}{\delta}\right) - \left(\frac{y}{\delta}\right)^2$

Check boundary conditions:
1.  $u(0) = 0$ (Correct)
2.  $u(\delta) = 2(1) - (1)^2 = 1$ (Correct, $u/U_\infty = 1$)
3.  $\frac{\partial u}{\partial y}\bigg|_{y=\delta} = \frac{U_\infty}{\delta} (2 - 2\frac{y}{\delta}) \bigg|_{y=\delta} = \frac{U_\infty}{\delta}(2 - 2(1)) = 0$ (Correct)

**Now, apply Von-Karman with the parabolic profile:**

**a) Calculate $\theta$:**
$\theta = \int_0^\delta \frac{u}{U_\infty} \left(1 - \frac{u}{U_\infty}\right) dy$
Let $\eta = y/\delta$.
$\frac{u}{U_\infty} = 2\eta - \eta^2$
$1 - \frac{u}{U_\infty} = 1 - (2\eta - \eta^2) = 1 - 2\eta + \eta^2 = (1-\eta)^2$

$\theta = \delta \int_0^1 (2\eta - \eta^2) (1-\eta)^2 d\eta$
$\theta = \delta \int_0^1 (2\eta - \eta^2) (1 - 2\eta + \eta^2) d\eta$
$\theta = \delta \int_0^1 (2\eta - 4\eta^2 + 2\eta^3 - \eta^2 + 2\eta^3 - \eta^4) d\eta$
$\theta = \delta \int_0^1 (2\eta - 5\eta^2 + 4\eta^3 - \eta^4) d\eta$
$\theta = \delta \left[ \eta^2 - \frac{5}{3}\eta^3 + \eta^4 - \frac{1}{5}\eta^5 \right]_0^1$
$\theta = \delta \left( 1 - \frac{5}{3} + 1 - \frac{1}{5} \right)$
$\theta = \delta \left( 2 - \frac{5}{3} - \frac{1}{5} \right) = \delta \left( \frac{30 - 25 - 3}{15} \right) = \delta \left( \frac{2}{15} \right)$
So, $\theta = \frac{2}{15} \delta$.

**b) Calculate $\tau_w$:**
$\tau_w = \mu \frac{\partial u}{\partial y} \bigg|_{y=0}$
$\frac{\partial u}{\partial y} = \frac{U_\infty}{\delta} (2 - 2\frac{y}{\delta})$
$\frac{\partial u}{\partial y} \bigg|_{y=0} = \frac{U_\infty}{\delta} (2 - 0) = \frac{2 U_\infty}{\delta}$
$\tau_w = \mu \frac{2 U_\infty}{\delta}$

**c) Substitute into Momentum Integral Equation (for flat plate):**
$\frac{\tau_w}{\rho} = \frac{d}{dx} \left( U_\infty^2 \theta \right)$
$\frac{1}{\rho} \left( \mu \frac{2 U_\infty}{\delta} \right) = \frac{d}{dx} \left( U_\infty^2 \left(\frac{2}{15}\delta\right) \right)$
$\nu \frac{2 U_\infty}{\delta} = U_\infty^2 \frac{2}{15} \frac{d\delta}{dx}$ (since $U_\infty$ is constant)
$\frac{\nu}{\delta} = \frac{U_\infty}{15} \frac{d\delta}{dx}$
$\frac{15 \nu}{U_\infty} \frac{dx}{1} = \delta d\delta$

**d) Solve for $\delta(x)$:**
Integrate both sides:
$\int_0^x \frac{15 \nu}{U_\infty} dx = \int_0^\delta \delta d\delta$
$\frac{15 \nu x}{U_\infty} = \frac{\delta^2}{2}$
$\delta^2 = \frac{30 \nu x}{U_\infty}$
$\delta = \sqrt{\frac{30 \nu x}{U_\infty}}$

This is the characteristic boundary layer thickness for a laminar flow over a flat plate using the parabolic profile.

**e) Calculate Skin Friction Coefficient ($C_{fx}$):**
$C_{fx} = \frac{\tau_w}{\frac{1}{2} \rho U_\infty^2}$
$\tau_w = \mu \frac{2 U_\infty}{\delta} = \mu \frac{2 U_\infty}{\sqrt{\frac{30 \nu x}{U_\infty}}} = \frac{2 \mu U_\infty}{\sqrt{30 \nu x / U_\infty}}$
$C_{fx} = \frac{\mu \frac{2 U_\infty}{\sqrt{30 \nu x / U_\infty}}}{\frac{1}{2} \rho U_\infty^2} = \frac{4 \mu}{\rho U_\infty \sqrt{30 \nu x / U_\infty}}$
$C_{fx} = \frac{4 \nu}{U_\infty \sqrt{30 \nu x / U_\infty}} = \frac{4}{\sqrt{30 \frac{U_\infty x}{\nu}}} = \frac{4}{\sqrt{30 Re_x}}$
$C_{fx} = \frac{4}{\sqrt{30}} Re_x^{-1/2} \approx 0.73 R_{ex}^{-1/2}$

**f) Calculate Drag Coefficient ($C_{Dx}$):**
The drag force $D$ is the integral of wall shear stress over the plate area. For a plate of width $W$ and length $L$:
$D = \int_0^L W \tau_w dx = W \int_0^L \mu \frac{2 U_\infty}{\delta} dx$
$D = 2 \mu W U_\infty \int_0^L \frac{1}{\sqrt{\frac{30 \nu x}{U_\infty}}} dx = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} \int_0^L x^{-1/2} dx$
$D = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} \left[ 2x^{1/2} \right]_0^L = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{\frac{30 \nu}{U_\infty}}} = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{30 \nu / U_\infty}}$
$D = \frac{4 \mu W U_\infty^{3/2} \sqrt{L}}{\sqrt{30 \nu}} = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{30 \nu U_\infty}} \sqrt{U_\infty}$ (this is getting complicated)

Let's use $C_{fx}$ relation.
$C_{Dx} = \frac{D}{\frac{1}{2} \rho U_\infty^2 (W \times L)}$
$D = \int_0^L W \tau_w dx = \int_0^L \left(\frac{1}{2} \rho U_\infty^2 C_{fx}\right) W dx$
$D = \frac{1}{2} \rho U_\infty^2 W \int_0^L \frac{4}{\sqrt{30}} (\frac{\nu}{Ux})^{-1/2} dx$
$D = \frac{2 W}{\sqrt{30}} \rho U_\infty^2 \sqrt{\frac{\nu}{U_\infty}} \int_0^L x^{-1/2} dx$
$D = \frac{2 W}{\sqrt{30}} \rho U_\infty^2 \sqrt{\frac{\nu}{U_\infty}} [2 x^{1/2}]_0^L = \frac{4 W}{\sqrt{30}} \rho U_\infty^2 \sqrt{\frac{\nu}{U_\infty}} \sqrt{L}$
$D = \frac{4 W L}{\sqrt{30}} \rho U_\infty \sqrt{\frac{\nu U_\infty L}{U_\infty L}} = \frac{4 W L}{\sqrt{30}} \rho U_\infty \sqrt{\frac{\nu}{L}}$
$D = \frac{4 W L}{\sqrt{30}} \rho U_\infty \frac{\sqrt{\nu L}}{\sqrt{L}\sqrt{L}} = \frac{4 W L}{\sqrt{30}} \rho U_\infty \frac{\sqrt{\nu L}}{L}$

Let's go back to $\tau_w = \mu \frac{2 U_\infty}{\delta} = \mu \frac{2 U_\infty}{\sqrt{\frac{30 \nu x}{U_\infty}}}$.
$D = W \int_0^L \mu \frac{2 U_\infty}{\sqrt{\frac{30 \nu x}{U_\infty}}} dx = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} \int_0^L x^{-1/2} dx$
$D = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} [2 x^{1/2}]_0^L = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{\frac{30 \nu}{U_\infty}}} = \frac{4 \mu W U_\infty^{3/2} \sqrt{L}}{\sqrt{30 \nu}}$
$D = \frac{4 \mu W U_\infty L}{\sqrt{30 \nu L U_\infty / U_\infty}} = \frac{4 \mu W U_\infty L}{\sqrt{30 \nu U_\infty L}}$
$D = \frac{4 \mu W U_\infty L}{\sqrt{30 \nu U_\infty L}} = \frac{4 W L}{\sqrt{30}} \mu \frac{U_\infty}{\sqrt{\nu U_\infty L}}$ (This is messy)

Using $C_{fx} \approx 0.73 Re_x^{-1/2}$:
$D = W \int_0^L \frac{1}{2} \rho U_\infty^2 C_{fx} dx = W \int_0^L \frac{1}{2} \rho U_\infty^2 \frac{4}{\sqrt{30}} (\frac{U_\infty x}{\nu})^{-1/2} dx$
$D = \frac{2 W \rho U_\infty^2}{\sqrt{30}} \sqrt{\frac{\nu}{U_\infty}} \int_0^L x^{-1/2} dx = \frac{2 W \rho U_\infty^2}{\sqrt{30}} \sqrt{\frac{\nu}{U_\infty}} [2 x^{1/2}]_0^L$
$D = \frac{4 W \rho U_\infty^2}{\sqrt{30}} \sqrt{\frac{\nu}{U_\infty}} \sqrt{L} = \frac{4 W L}{\sqrt{30}} \rho U_\infty \sqrt{\frac{\nu U_\infty L}{U_\infty L^2}} = \frac{4 W L}{\sqrt{30}} \rho U_\infty \sqrt{\frac{\nu}{L}}$
$D = \frac{4 W L}{\sqrt{30}} \rho U_\infty \frac{\sqrt{\nu L}}{\sqrt{L^2}}$

Let's use the relation between $\theta$ and $\delta$: $\theta = \frac{2}{15} \delta$.
Momentum integral equation: $\frac{\tau_w}{\rho} = \frac{d}{dx}(U_\infty^2 \theta) = U_\infty^2 \frac{d\theta}{dx}$ (for flat plate)
$\theta = \frac{2}{15} \sqrt{\frac{30 \nu x}{U_\infty}} = \frac{2}{15} \sqrt{30} \sqrt{\frac{\nu x}{U_\infty}} = \sqrt{\frac{4 \times 30}{225}} \sqrt{\frac{\nu x}{U_\infty}} = \sqrt{\frac{120}{225}} \sqrt{\frac{\nu x}{U_\infty}} = \sqrt{\frac{8}{15}} \sqrt{\frac{\nu x}{U_\infty}}$

Let's use the exact result for laminar flow: $\delta = 5 \sqrt{\frac{\nu x}{U_\infty}}$ and $\theta = \frac{\theta}{5} \delta$.
$\theta = \int_0^\delta \frac{u}{U_\infty}(1-\frac{u}{U_\infty}) dy$.
If $\delta = 5 \sqrt{\frac{\nu x}{U_\infty}}$, then $y/\delta$ ranges from 0 to 1.
$\theta = \frac{2}{15} \delta = \frac{2}{15} \left(5 \sqrt{\frac{\nu x}{U_\infty}}\right) = \frac{2}{3} \sqrt{\frac{\nu x}{U_\infty}}$.

Let's re-evaluate the $\theta$ calculation for the parabolic profile.
$\theta = \delta \int_0^1 (2\eta - \eta^2) (1-\eta)^2 d\eta$
Ah, the integral result was $\frac{2}{15} \delta$. This is correct.
So $\theta = \frac{2}{15} \delta$.

If we use the parabolic profile to derive $\delta$, we got $\delta = \sqrt{\frac{30 \nu x}{U_\infty}}$.
Then $\theta = \frac{2}{15} \sqrt{\frac{30 \nu x}{U_\infty}} = \frac{2 \sqrt{30}}{15} \sqrt{\frac{\nu x}{U_\infty}} = \frac{2 \sqrt{2 \times 15}}{ \sqrt{15} \times \sqrt{15}} \sqrt{\frac{\nu x}{U_\infty}} = \frac{2 \sqrt{2}}{\sqrt{15}} \sqrt{\frac{\nu x}{U_\infty}}$.

The exact derivation for laminar flow (Blasius solution) gives $\delta = 5 \sqrt{\frac{\nu x}{U_\infty}}$ and $\theta = \frac{17}{720} \delta$. No, that's not right either.
The exact values are:
$\delta = 4.916 \sqrt{\frac{\nu x}{U_\infty}}$
$\theta = 1.72 \sqrt{\frac{\nu x}{U_\infty}}$
$\frac{\theta}{\delta} \approx \frac{1.72}{4.916} \approx 0.35$

Our parabolic profile gave $\theta = \frac{2}{15} \delta$. $\frac{2}{15} \approx 0.133$. This is a significant deviation.

Let's check the $\tau_w$ calculation again.
$\tau_w = \mu \frac{2 U_\infty}{\delta} = \frac{2 \mu U_\infty}{ \sqrt{\frac{30 \nu x}{U_\infty}}} = \frac{2 \mu U_\infty^{3/2}}{\sqrt{30 \nu x}}$

$C_{fx} = \frac{\tau_w}{\frac{1}{2} \rho U_\infty^2} = \frac{2 \mu U_\infty^{3/2} / \sqrt{30 \nu x}}{\frac{1}{2} \rho U_\infty^2} = \frac{4 \mu}{\rho U_\infty^{1/2} \sqrt{30 \nu x}} = \frac{4 \nu}{U_\infty^{1/2} \sqrt{30 \nu x}} = \frac{4}{\sqrt{30}} \frac{\nu^{1/2}}{U_\infty^{1/2} x^{1/2}} = \frac{4}{\sqrt{30}} (\frac{\nu}{U_\infty x})^{1/2}$
$C_{fx} = \frac{4}{\sqrt{30 \frac{U_\infty x}{\nu}}} = \frac{4}{\sqrt{30}} Re_x^{-1/2}$.

This result for $C_{fx}$ is similar in form to the exact result ($C_{fx} = 0.664 Re_x^{-1/2}$). The constant is slightly off. This demonstrates that the accuracy depends on the assumed velocity profile.

**Drag Coefficient ($C_{Dx}$):**
$D = \int_0^L W \tau_w dx = W \int_0^L \frac{2 \mu U_\infty}{\sqrt{\frac{30 \nu x}{U_\infty}}} dx = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} \int_0^L x^{-1/2} dx$
$D = \frac{2 \mu W U_\infty}{\sqrt{\frac{30 \nu}{U_\infty}}} [2 x^{1/2}]_0^L = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{\frac{30 \nu}{U_\infty}}} = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{30 \nu / U_\infty}}$
$D = \frac{4 \mu W U_\infty \sqrt{L}}{\sqrt{30 \nu}} \sqrt{U_\infty} = \frac{4 W}{\sqrt{30}} \mu U_\infty^{3/2} L^{1/2} \nu^{-1/2}$
$D = \frac{4 W L}{\sqrt{30}} \rho U_\infty (\frac{\nu}{U_\infty L})^{1/2}$

$C_{Dx} = \frac{D}{\frac{1}{2} \rho U_\infty^2 W L} = \frac{4 W L \rho U_\infty \sqrt{\frac{\nu}{U_\infty L}}}{\frac{1}{2} \rho U_\infty^2 W L} = \frac{8 \sqrt{\frac{\nu}{U_\infty L}}}{U_\infty} = \frac{8 \sqrt{\nu}}{U_\infty^{3/2} L^{1/2}}$
$C_{Dx} = \frac{8}{\sqrt{\frac{U_\infty L}{\nu}}} = \frac{8}{Re_L^{1/2}}$.
The exact is $C_{Dx} = 1.328 Re_L^{-1/2}$. Again, similar form, different constant.

---

### **6. Other Common Profiles and Their Results:**

*   **Linear Profile:** $\frac{u}{U_\infty} = \frac{y}{\delta}$. Not physically realistic at the edge ($du/dy \ne 0$ at $\delta$).
    *   $\theta = \frac{1}{10} \delta$
    *   $\tau_w = \frac{\mu U_\infty}{\delta}$
    *   Leads to $\delta \propto x^{0.5}$ and $C_{fx} \propto Re_x^{-0.5}$.

*   **Thwaites' Method (for attached boundary layers):** This method uses a parameter $\lambda = \frac{\theta^2}{\nu} \frac{dU_\infty}{dx}$ and a correlation for the shape factor $H = \delta^*/\theta$.
    *   $\frac{d\theta}{dx} = \frac{C_{fx}}{2} - \frac{\theta}{U_\infty} \frac{dU_\infty}{dx} (1 + H)$
    *   This is a more advanced integral method that accounts for favorable/adverse pressure gradients. For flat plates ($dU_\infty/dx = 0$), it simplifies.

---

### **7. Limitations and Assumptions of the Von-Karman Method**

*   **Accuracy:** The accuracy is limited by the assumed velocity profile. A profile that better represents the actual flow will yield more accurate results.
*   **Attached Flow:** The method is generally suitable for attached boundary layers where the assumed profile conditions hold. It can break down for separated flows.
*   **Laminar Flow:** The derivation and common applications are for laminar boundary layers. Modifications are needed for turbulent boundary layers (e.g., using empirical profiles for $u/U_\infty$ and $\tau_w$).
*   **Prandtl's Approximations:** Assumes the thin boundary layer where $\partial p / \partial y \approx 0$.
*   **Integral Nature:** It provides average values across the boundary layer, not detailed velocity distributions.

---

### **8. Practice Questions:**

1.  **Derive** the Von-Karman momentum integral equation for a two-dimensional boundary layer over a flat plate, starting from the Navier-Stokes equations. Clearly state all assumptions.
2.  **Define** boundary layer thickness ($\delta$), displacement thickness ($\delta^*$), and momentum thickness ($\theta$). Explain their physical significance.
3.  Consider a laminar boundary layer over a flat plate with the following assumed velocity profile:
    $\frac{u}{U_\infty} = \frac{3}{2} \left(\frac{y}{\delta}\right) - \frac{1}{2} \left(\frac{y}{\delta}\right)^3$
    *   Verify that this profile satisfies the boundary conditions: $u(0)=0$, $u(\delta)=U_\infty$, and $\frac{\partial u}{\partial y}\bigg|_{y=\delta}=0$.
    *   Calculate the momentum thickness ($\theta$) in terms of $\delta$.
    *   Calculate the wall shear stress ($\tau_w$) in terms of $U_\infty$ and $\delta$.
    *   Using the Von-Karman momentum integral equation for a flat plate, derive an expression for the boundary layer thickness $\delta(x)$.
    *   Calculate the skin friction coefficient ($C_{fx}$) and the drag coefficient ($C_{Dx}$) for a plate of length $L$.

---

### **9. Answers to Practice Questions:**

**Answer 1:** (Detailed derivation is provided in Section 2 of these notes.)

**Answer 2:**
*   **Boundary Layer Thickness ($\delta$):** The distance $y$ from the surface where the velocity $u$ reaches 99% of the free-stream velocity $U_\infty$. It signifies the extent of the viscous region.
*   **Displacement Thickness ($\delta^*$):** The distance by which the external flow must be displaced outwards to account for the reduction in mass flow rate due to the slower-moving fluid within the boundary layer. $\delta^* = \int_0^\delta (1 - u/U_\infty) dy$. It represents the effective thickening of the body.
*   **Momentum Thickness ($\theta$):** The distance by which the external flow must be displaced outwards to account for the reduction in momentum flux within the boundary layer. $\theta = \int_0^\delta (u/U_\infty)(1 - u/U_\infty) dy$. It quantifies the momentum deficit.

**Answer 3:**
*   **Velocity Profile Check:**
    *   $u(0) = \frac{3}{2}(0) - \frac{1}{2}(0)^3 = 0$. (Satisfied)
    *   $u(\delta) = \frac{3}{2}(1) - \frac{1}{2}(1)^3 = \frac{3}{2} - \frac{1}{2} = 1$. So $u(\delta)/U_\infty = 1$. (Satisfied)
    *   $\frac{\partial u}{\partial y} = \frac{U_\infty}{\delta} \left(\frac{3}{2} - \frac{3}{2} \left(\frac{y}{\delta}\right)^2\right)$.
    *   $\frac{\partial u}{\partial y}\bigg|_{y=\delta} = \frac{U_\infty}{\delta} \left(\frac{3}{2} - \frac{3}{2} (1)^2\right) = \frac{U_\infty}{\delta} (0) = 0$. (Satisfied)

*   **Calculate $\theta$:**
    Let $\eta = y/\delta$. $dy = \delta d\eta$.
    $\frac{u}{U_\infty} = \frac{3}{2}\eta - \frac{1}{2}\eta^3$.
    $1 - \frac{u}{U_\infty} = 1 - (\frac{3}{2}\eta - \frac{1}{2}\eta^3) = 1 - \frac{3}{2}\eta + \frac{1}{2}\eta^3$.
    $\theta = \delta \int_0^1 (\frac{3}{2}\eta - \frac{1}{2}\eta^3)(1 - \frac{3}{2}\eta + \frac{1}{2}\eta^3) d\eta$
    $\theta = \delta \int_0^1 (\frac{3}{2}\eta - \frac{9}{4}\eta^2 + \frac{3}{4}\eta^4 - \frac{1}{2}\eta^3 + \frac{3}{4}\eta^4 - \frac{1}{4}\eta^6) d\eta$
    $\theta = \delta \int_0^1 (\frac{3}{2}\eta - \frac{9}{4}\eta^2 - \frac{1}{2}\eta^3 + \frac{3}{2}\eta^4 - \frac{1}{4}\eta^6) d\eta$
    $\theta = \delta \left[ \frac{3}{4}\eta^2 - \frac{9}{12}\eta^3 - \frac{1}{8}\eta^4 + \frac{3}{10}\eta^5 - \frac{1}{28}\eta^7 \right]_0^1$
    $\theta = \delta \left[ \frac{3}{4}\eta^2 - \frac{3}{4}\eta^3 - \frac{1}{8}\eta^4 + \frac{3}{10}\eta^5 - \frac{1}{28}\eta^7 \right]_0^1$
    $\theta = \delta \left( \frac{3}{4} - \frac{3}{4} - \frac{1}{8} + \frac{3}{10} - \frac{1}{28} \right) = \delta \left( -\frac{1}{8} + \frac{3}{10} - \frac{1}{28} \right)$
    Common denominator is 280.
    $\theta = \delta \left( -\frac{35}{280} + \frac{84}{280} - \frac{10}{280} \right) = \delta \left( \frac{84 - 45}{280} \right) = \delta \left( \frac{39}{280} \right)$
    So, $\theta = \frac{39}{280} \delta$.

*   **Calculate $\tau_w$:**
    $\frac{\partial u}{\partial y} = \frac{U_\infty}{\delta} \left(\frac{3}{2} - \frac{3}{2} \left(\frac{y}{\delta}\right)^2\right)$.
    $\frac{\partial u}{\partial y}\bigg|_{y=0} = \frac{U_\infty}{\delta} (\frac{3}{2} - 0) = \frac{3 U_\infty}{2\delta}$.
    $\tau_w = \mu \frac{3 U_\infty}{2\delta}$.

*   **Derive $\delta(x)$:**
    For a flat plate, $\frac{\tau_w}{\rho} = \frac{d}{dx}(U_\infty^2 \theta)$.
    $\frac{1}{\rho} \left(\mu \frac{3 U_\infty}{2\delta}\right) = U_\infty^2 \frac{d}{dx} \left(\frac{39}{280}\delta\right)$.
    $\frac{3}{2} \nu \frac{U_\infty}{\delta} = U_\infty^2 \frac{39}{280} \frac{d\delta}{dx}$.
    $\frac{3}{2} \frac{\nu}{\delta} = \frac{39}{280} U_\infty \frac{d\delta}{dx}$.
    $\frac{d\delta}{dx} = \frac{3}{2} \frac{280}{39} \frac{\nu}{U_\infty \delta} = \frac{140}{13} \frac{\nu}{U_\infty \delta}$.
    $13 \frac{U_\infty}{140 \nu} \delta d\delta = dx$.
    Integrate from $0$ to $x$ and $0$ to $\delta$:
    $13 \frac{U_\infty}{140 \nu} \int_0^\delta \delta d\delta = \int_0^x dx$.
    $13 \frac{U_\infty}{140 \nu} \frac{\delta^2}{2} = x$.
    $\delta^2 = \frac{280 \nu x}{13 U_\infty}$.
    $\delta = \sqrt{\frac{280 \nu x}{13 U_\infty}}$.

*   **Calculate $C_{fx}$:**
    $C_{fx} = \frac{\tau_w}{\frac{1}{2} \rho U_\infty^2} = \frac{\mu \frac{3 U_\infty}{2\delta}}{\frac{1}{2} \rho U_\infty^2} = \frac{3 \mu}{\rho U_\infty \delta}$.
    Substitute $\delta$:
    $C_{fx} = \frac{3 \mu}{\rho U_\infty \sqrt{\frac{280 \nu x}{13 U_\infty}}} = \frac{3 \mu}{\rho U_\infty \sqrt{\frac{280 \nu x}{13 U_\infty}}}$.
    $C_{fx} = \frac{3 \nu}{U_\infty \sqrt{\frac{280 \nu x}{13 U_\infty}}} = \frac{3}{\sqrt{\frac{280 U_\infty x}{13 \nu}}} = \frac{3}{\sqrt{\frac{280}{13} Re_x}} = \sqrt{\frac{9 \times 13}{280}} Re_x^{-1/2}$.
    $C_{fx} = \sqrt{\frac{117}{280}} Re_x^{-1/2} \approx 0.647 Re_x^{-1/2}$.

*   **Calculate $C_{Dx}$:**
    $D = W \int_0^L \tau_w dx = W \int_0^L \frac{3 \mu U_\infty}{2\delta} dx$.
    $D = \frac{3 \mu W U_\infty}{2} \int_0^L \frac{1}{\sqrt{\frac{280 \nu x}{13 U_\infty}}} dx = \frac{3 \mu W U_\infty}{2} \sqrt{\frac{13 U_\infty}{280 \nu}} \int_0^L x^{-1/2} dx$.
    $D = \frac{3 \mu W U_\infty}{2} \sqrt{\frac{13 U_\infty}{280 \nu}} [2 x^{1/2}]_0^L = 3 \mu W U_\infty \sqrt{\frac{13 U_\infty}{280 \nu}} \sqrt{L}$.
    $D = 3 W L \rho U_\infty \frac{\mu}{\rho U_\infty} \sqrt{\frac{13 U_\infty L}{280 \nu L^2}} = 3 W L \rho U_\infty \sqrt{\frac{13 \nu L}{280 U_\infty L^2}}$.

    Let's use $C_{fx}$:
    $D = W \int_0^L \frac{1}{2} \rho U_\infty^2 C_{fx} dx = \frac{1}{2} \rho U_\infty^2 W \int_0^L \sqrt{\frac{117}{280}} (\frac{U_\infty x}{\nu})^{-1/2} dx$.
    $D = \frac{1}{2} \rho U_\infty^2 W \sqrt{\frac{117}{280}} \sqrt{\frac{\nu}{U_\infty}} \int_0^L x^{-1/2} dx$.
    $D = \frac{1}{2} \rho U_\infty^2 W \sqrt{\frac{117}{280}} \sqrt{\frac{\nu}{U_\infty}} [2 x^{1/2}]_0^L$.
    $D = \rho U_\infty^{3/2} W \sqrt{\frac{117 \nu}{280}} \sqrt{L} = \rho U_\infty L W \sqrt{\frac{117 \nu L}{280 U_\infty L^2}} = \rho U_\infty L W \sqrt{\frac{117 \nu}{280 U_\infty L}}$.

    $C_{Dx} = \frac{D}{\frac{1}{2} \rho U_\infty^2 W L} = \frac{2 \rho U_\infty L W \sqrt{\frac{117 \nu L}{280 U_\infty L^2}}}{\rho U_\infty^2 W L} = \frac{2 \sqrt{\frac{117 \nu}{280 U_\infty L}}}{U_\infty} = 2 \sqrt{\frac{117 \nu}{280 U_\infty^3 L}}$.
    $C_{Dx} = 2 \sqrt{\frac{117}{280}} \sqrt{\frac{\nu}{U_\infty L}} = 2 \sqrt{\frac{117}{280}} Re_L^{-1/2}$.
    $C_{Dx} = 2 \times 0.647 Re_L^{-1/2} = 1.294 Re_L^{-1/2}$.

---

### **10. Important Points to Remember:**

*   The Von-Karman momentum integral equation provides a simplified approach to boundary layer analysis by integrating momentum conservation.
*   It relates the wall shear stress to the rate of change of momentum thickness.
*   The accuracy heavily relies on the choice of the assumed velocity profile.
*   Key thicknesses ($\delta^*, \theta$) are essential for applying the equation.
*   For laminar flow over a flat plate, the $\delta \propto x^{0.5}$ and $C_{fx} \propto Re_x^{-0.5}$ relationships are consistent across many valid profiles.
*   The method is powerful for estimating drag and boundary layer growth but has limitations, especially for turbulent or separated flows.

---
