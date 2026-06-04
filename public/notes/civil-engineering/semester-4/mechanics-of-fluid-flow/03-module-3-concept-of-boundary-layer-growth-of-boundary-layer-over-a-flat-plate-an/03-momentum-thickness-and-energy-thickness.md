---
title: "momentum thickness and energy thickness"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 3: Concept of Boundary Layer : Growth of boundary layer over a flat plate and definition of boundary layer thickness"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a76"
status: "completed"
scrapedAt: "2026-05-20T18:46:34.683Z"
---
# MECHANICS OF FLUID FLOW - Module 3: Concept of Boundary Layer

## Topic: Momentum Thickness and Energy Thickness

This topic delves deeper into the quantitative description of the boundary layer by introducing two integral parameters: **momentum thickness** and **energy thickness**. These parameters provide a more sophisticated understanding of the boundary layer's influence on the overall flow and its energy content.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define** momentum thickness and energy thickness.
*   **Explain** the physical significance of momentum thickness and energy thickness.
*   **Derive** the expressions for momentum thickness and energy thickness for a given velocity profile within the boundary layer.
*   **Calculate** momentum thickness and energy thickness for specific boundary layer velocity profiles (e.g., linear, parabolic).
*   **Relate** momentum thickness and energy thickness to concepts like drag force and energy loss within the boundary layer.

---

### Key Concepts and Definitions:

#### 1. Momentum Thickness ($\theta$)

**Definition:** Momentum thickness ($\theta$) is defined as the distance through the boundary layer that, if filled with fluid moving at the free-stream velocity ($U_\infty$), would contain the same amount of momentum as that lost by the fluid within the boundary layer due to viscosity.

**Physical Significance:**

*   **Momentum Deficit:** It quantifies the "deficit" in momentum within the boundary layer compared to what it would be if the flow were inviscid (i.e., uniform flow at $U_\infty$).
*   **Momentum Loss:** It directly relates to the loss of momentum caused by viscous effects within the boundary layer.
*   **Drag Force:** Momentum thickness is a key parameter in calculating the skin friction drag force on a surface.

**Mathematical Expression:**

Consider a thin layer of fluid of thickness $dy$ at a distance $y$ from the wall within the boundary layer. The velocity of this fluid is $u(y)$.

The momentum flux (momentum per unit time) across this layer is given by the mass flow rate multiplied by the velocity:
Mass flow rate per unit width = $\rho \cdot u(y) \cdot dy$
Momentum flux per unit width = $(\rho \cdot u(y) \cdot dy) \cdot u(y) = \rho u(y)^2 dy$

The total momentum flux within the boundary layer (per unit width) is the integral from the wall ($y=0$) to the boundary layer thickness ($\delta$):
Total momentum flux (within boundary layer) = $\int_0^\delta \rho u(y)^2 dy$

If the same amount of momentum were carried by a layer of fluid of thickness $\theta$ moving at the free-stream velocity $U_\infty$, the momentum flux would be:
Momentum flux (equivalent layer) = $(\rho \cdot U_\infty \cdot \theta) \cdot U_\infty = \rho U_\infty^2 \theta$

Equating these two expressions:
$\rho U_\infty^2 \theta = \int_0^\delta \rho u(y)^2 dy$

Assuming density ($\rho$) is constant:
$\theta = \frac{1}{U_\infty^2} \int_0^\delta u(y)^2 dy$

**Alternatively (using the dimensionless velocity ratio):**

The integral is often written in terms of the dimensionless velocity ratio $\eta(y) = u(y)/U_\infty$:
$\theta = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^2 dy = \int_0^\delta \eta(y)^2 dy$

---

#### 2. Energy Thickness ($\delta_{e}$ or $\epsilon$)

**Definition:** Energy thickness ($\delta_{e}$ or $\epsilon$) is defined as the distance through the boundary layer that, if filled with fluid moving at the free-stream velocity ($U_\infty$), would contain the same kinetic energy as that lost by the fluid within the boundary layer due to viscosity.

**Physical Significance:**

*   **Kinetic Energy Deficit:** It quantifies the "deficit" in kinetic energy within the boundary layer compared to the inviscid flow.
*   **Energy Loss:** It relates to the reduction in kinetic energy due to viscous dissipation.
*   **Boundary Layer Transition:** Changes in energy thickness can be indicative of boundary layer transition.

**Mathematical Expression:**

Consider a thin layer of fluid of thickness $dy$ at a distance $y$ from the wall within the boundary layer. The velocity of this fluid is $u(y)$.

The kinetic energy flux (kinetic energy per unit time) across this layer is given by half the mass flow rate multiplied by the square of the velocity:
Mass flow rate per unit width = $\rho \cdot u(y) \cdot dy$
Kinetic energy flux per unit width = $\frac{1}{2} (\rho \cdot u(y) \cdot dy) \cdot u(y)^2 = \frac{1}{2} \rho u(y)^3 dy$

The total kinetic energy flux within the boundary layer (per unit width) is the integral from the wall ($y=0$) to the boundary layer thickness ($\delta$):
Total kinetic energy flux (within boundary layer) = $\int_0^\delta \frac{1}{2} \rho u(y)^3 dy$

If the same amount of kinetic energy were carried by a layer of fluid of thickness $\delta_{e}$ moving at the free-stream velocity $U_\infty$, the kinetic energy flux would be:
Kinetic energy flux (equivalent layer) = $\frac{1}{2} (\rho \cdot U_\infty \cdot \delta_{e}) \cdot U_\infty^2 = \frac{1}{2} \rho U_\infty^3 \delta_{e}$

Equating these two expressions:
$\frac{1}{2} \rho U_\infty^3 \delta_{e} = \int_0^\delta \frac{1}{2} \rho u(y)^3 dy$

Assuming density ($\rho$) is constant:
$\delta_{e} = \frac{1}{U_\infty^3} \int_0^\delta u(y)^3 dy$

**Alternatively (using the dimensionless velocity ratio):**

The integral is often written in terms of the dimensionless velocity ratio $\eta(y) = u(y)/U_\infty$:
$\delta_{e} = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^3 dy = \int_0^\delta \eta(y)^3 dy$

---

### Relationship between Thicknesses:

Generally, for a typical boundary layer velocity profile (where $u(y)$ increases from 0 at the wall to $U_\infty$ at $\delta$):

*   $\delta_{e} \le \theta \le \delta$

This is because the cubic term ($u^3$) in the energy thickness integral is more sensitive to higher velocity values than the quadratic term ($u^2$) in the momentum thickness integral.

---

### Examples:

Let's calculate $\theta$ and $\delta_e$ for some common assumed velocity profiles.

#### Example 1: Linear Velocity Profile

Assume a linear velocity profile within the boundary layer: $u(y) = U_\infty \frac{y}{\delta}$ for $0 \le y \le \delta$.

**Momentum Thickness ($\theta$):**

$\theta = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^2 dy = \int_0^\delta \left(\frac{U_\infty \frac{y}{\delta}}{U_\infty}\right)^2 dy$
$\theta = \int_0^\delta \left(\frac{y}{\delta}\right)^2 dy = \frac{1}{\delta^2} \int_0^\delta y^2 dy$
$\theta = \frac{1}{\delta^2} \left[\frac{y^3}{3}\right]_0^\delta = \frac{1}{\delta^2} \left(\frac{\delta^3}{3} - 0\right)$
$\theta = \frac{\delta}{3}$

**Energy Thickness ($\delta_{e}$):**

$\delta_{e} = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^3 dy = \int_0^\delta \left(\frac{U_\infty \frac{y}{\delta}}{U_\infty}\right)^3 dy$
$\delta_{e} = \int_0^\delta \left(\frac{y}{\delta}\right)^3 dy = \frac{1}{\delta^3} \int_0^\delta y^3 dy$
$\delta_{e} = \frac{1}{\delta^3} \left[\frac{y^4}{4}\right]_0^\delta = \frac{1}{\delta^3} \left(\frac{\delta^4}{4} - 0\right)$
$\delta_{e} = \frac{\delta}{4}$

**Observation:** For a linear profile, $\delta_e = \delta/4$ and $\theta = \delta/3$. This satisfies $\delta_e \le \theta \le \delta$.

#### Example 2: Parabolic Velocity Profile

Assume a parabolic velocity profile within the boundary layer: $u(y) = U_\infty \left[2\left(\frac{y}{\delta}\right) - \left(\frac{y}{\delta}\right)^2\right]$ for $0 \le y \le \delta$.

**Momentum Thickness ($\theta$):**

$\theta = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^2 dy = \int_0^\delta \left[2\left(\frac{y}{\delta}\right) - \left(\frac{y}{\delta}\right)^2\right]^2 dy$
Let $\eta = y/\delta$, then $dy = \delta d\eta$. Limits change from $0 \to \delta$ to $0 \to 1$.
$\theta = \int_0^1 [2\eta - \eta^2]^2 \delta d\eta = \delta \int_0^1 (4\eta^2 - 4\eta^3 + \eta^4) d\eta$
$\theta = \delta \left[\frac{4\eta^3}{3} - \frac{4\eta^4}{4} + \frac{\eta^5}{5}\right]_0^1 = \delta \left(\frac{4}{3} - 1 + \frac{1}{5}\right)$
$\theta = \delta \left(\frac{20 - 15 + 3}{15}\right) = \delta \left(\frac{8}{15}\right)$
$\theta = \frac{8}{15} \delta$

**Energy Thickness ($\delta_{e}$):**

$\delta_{e} = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^3 dy = \int_0^\delta \left[2\left(\frac{y}{\delta}\right) - \left(\frac{y}{\delta}\right)^2\right]^3 dy$
Using $\eta = y/\delta$ and $dy = \delta d\eta$:
$\delta_{e} = \int_0^1 [2\eta - \eta^2]^3 \delta d\eta = \delta \int_0^1 (8\eta^3 - 12\eta^4 + 6\eta^5 - \eta^6) d\eta$
$\delta_{e} = \delta \left[\frac{8\eta^4}{4} - \frac{12\eta^5}{5} + \frac{6\eta^6}{6} - \frac{\eta^7}{7}\right]_0^1 = \delta \left(2 - \frac{12}{5} + 1 - \frac{1}{7}\right)$
$\delta_{e} = \delta \left(3 - \frac{12}{5} - \frac{1}{7}\right) = \delta \left(\frac{105 - 84 - 5}{35}\right) = \delta \left(\frac{16}{35}\right)$
$\delta_{e} = \frac{16}{35} \delta$

**Observation:** For a parabolic profile, $\theta = \frac{8}{15} \delta \approx 0.533\delta$ and $\delta_e = \frac{16}{35} \delta \approx 0.457\delta$. This again satisfies $\delta_e \le \theta \le \delta$.

---

### Relation to Drag Force:

The momentum thickness plays a crucial role in deriving the skin friction drag coefficient. The shear stress at the wall, $\tau_w$, is directly related to the momentum thickness gradient.

From the boundary layer momentum integral equation (derived from the Navier-Stokes equations), we get:
$\frac{d\theta}{dx} = \frac{\tau_w}{\rho U_\infty^2}$

Since $\tau_w = \mu \left(\frac{\partial u}{\partial y}\right)_{y=0}$, we have:
$\frac{d\theta}{dx} = \frac{\mu}{\rho U_\infty^2} \left(\frac{\partial u}{\partial y}\right)_{y=0}$

The local skin friction coefficient, $C_{f,x}$, is defined as $C_{f,x} = \frac{\tau_w}{\frac{1}{2}\rho U_\infty^2}$.
Therefore, $\frac{d\theta}{dx} = \frac{1}{2} C_{f,x}$.

Integrating this along the plate gives the total drag coefficient $C_D$.

---

### Important Points to Remember:

*   **Momentum Thickness ($\theta$):** Measures the loss of momentum due to viscosity. Directly related to skin friction drag.
*   **Energy Thickness ($\delta_e$):** Measures the loss of kinetic energy due to viscosity.
*   Both are integral parameters that characterize the boundary layer.
*   They are defined by comparing the actual momentum/energy within the boundary layer to an equivalent amount if the flow were inviscid and at free-stream velocity.
*   The general inequality $\delta_e \le \theta \le \delta$ holds for typical boundary layer velocity profiles.
*   Momentum thickness is essential for calculating skin friction drag.

---

### Practice Questions/Exercises:

1.  **Define** momentum thickness and energy thickness in your own words, explaining their physical significance.
2.  For a hypothetical boundary layer velocity profile given by $u(y) = U_\infty \sin(\frac{\pi y}{2\delta})$ for $0 \le y \le \delta$:
    *   Calculate the momentum thickness ($\theta$).
    *   Calculate the energy thickness ($\delta_e$).
    *   Verify if $\delta_e \le \theta \le \delta$ holds for this profile.
3.  **Explain** why momentum thickness is directly related to skin friction drag, whereas energy thickness is more related to the energy deficit within the boundary layer.
4.  Consider the boundary layer growth over a flat plate. How would you expect the momentum thickness to change as the fluid flows further downstream (i.e., as $x$ increases)? Justify your answer.

---

### Answers to Practice Questions:

1.  **Momentum Thickness ($\theta$):** It's the thickness of a layer of fluid at free-stream velocity $U_\infty$ that has the same momentum deficit as the actual boundary layer. It quantifies the momentum lost due to viscosity and is crucial for calculating drag.
    **Energy Thickness ($\delta_e$):** It's the thickness of a layer of fluid at free-stream velocity $U_\infty$ that has the same kinetic energy deficit as the actual boundary layer. It quantifies the kinetic energy lost due to viscous dissipation.

2.  For $u(y) = U_\infty \sin(\frac{\pi y}{2\delta})$:

    **Momentum Thickness ($\theta$):**
    $\frac{u(y)}{U_\infty} = \sin(\frac{\pi y}{2\delta})$
    $\theta = \int_0^\delta \left(\sin(\frac{\pi y}{2\delta})\right)^2 dy$
    Let $\alpha = \frac{\pi y}{2\delta}$, so $y = \frac{2\delta}{\pi} \alpha$, $dy = \frac{2\delta}{\pi} d\alpha$.
    When $y=0, \alpha=0$. When $y=\delta, \alpha=\pi/2$.
    $\theta = \int_0^{\pi/2} \sin^2(\alpha) \frac{2\delta}{\pi} d\alpha = \frac{2\delta}{\pi} \int_0^{\pi/2} \frac{1 - \cos(2\alpha)}{2} d\alpha$
    $\theta = \frac{\delta}{\pi} \left[\alpha - \frac{\sin(2\alpha)}{2}\right]_0^{\pi/2} = \frac{\delta}{\pi} \left[\left(\frac{\pi}{2} - \frac{\sin(\pi)}{2}\right) - (0 - 0)\right]$
    $\theta = \frac{\delta}{\pi} \left(\frac{\pi}{2}\right) = \frac{\delta}{2}$

    **Energy Thickness ($\delta_{e}$):**
    $\delta_{e} = \int_0^\delta \left(\frac{u(y)}{U_\infty}\right)^3 dy = \int_0^\delta \left(\sin(\frac{\pi y}{2\delta})\right)^3 dy$
    Using the same substitution:
    $\delta_{e} = \int_0^{\pi/2} \sin^3(\alpha) \frac{2\delta}{\pi} d\alpha = \frac{2\delta}{\pi} \int_0^{\pi/2} \sin(\alpha)(1-\cos^2(\alpha)) d\alpha$
    Let $z = \cos(\alpha)$, $dz = -\sin(\alpha) d\alpha$.
    When $\alpha=0, z=1$. When $\alpha=\pi/2, z=0$.
    $\delta_{e} = \frac{2\delta}{\pi} \int_1^0 (1-z^2) (-dz) = \frac{2\delta}{\pi} \int_0^1 (1-z^2) dz$
    $\delta_{e} = \frac{2\delta}{\pi} \left[z - \frac{z^3}{3}\right]_0^1 = \frac{2\delta}{\pi} \left(1 - \frac{1}{3}\right) = \frac{2\delta}{\pi} \left(\frac{2}{3}\right) = \frac{4\delta}{3\pi}$

    **Verification:**
    $\theta = \delta/2 = 0.5\delta$
    $\delta_e = \frac{4\delta}{3\pi} \approx \frac{4\delta}{3 \times 3.14159} \approx 0.424\delta$
    So, $0.424\delta \le 0.5\delta \le \delta$ (i.e., $\delta_e \le \theta \le \delta$). The relationship holds.

3.  The change in momentum within the boundary layer is directly related to the forces acting on the fluid elements, including the wall shear stress, which is the source of drag. By analyzing the momentum equation across the boundary layer, it's found that the rate of change of momentum thickness with distance along the plate is proportional to the wall shear stress. The energy thickness, while related, represents a loss of kinetic energy. While this energy loss is due to viscous dissipation (which also causes drag), the direct proportionality for drag calculation is with the momentum loss.

4.  As the fluid flows further downstream ($x$ increases), the boundary layer grows thicker ($\delta$ increases). More fluid is affected by viscosity, leading to a greater deficit in momentum compared to the free-stream. Therefore, the **momentum thickness ($\theta$) is expected to increase** as the fluid flows further downstream. This is also reflected in the relationship $\frac{d\theta}{dx} = \frac{\tau_w}{\rho U_\infty^2}$; as $\tau_w$ typically decreases with $x$ for laminar flow over a flat plate, $d\theta/dx$ is positive, leading to an increasing $\theta$.
