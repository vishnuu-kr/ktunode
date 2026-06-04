---
title: "Equation of motion of forced and free vortex flow"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a62"
status: "completed"
scrapedAt: "2026-05-20T18:46:22.310Z"
---
# MECHANICS OF FLUID FLOW

## Module 1: Basic Concepts and Fundamentals: Fluid Statics

---

### Topic: Equation of Motion of Forced and Free Vortex Flow

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles governing rotational fluid motion.
*   Derive and understand the equation of motion for forced vortex flow.
*   Derive and understand the equation of motion for free vortex flow.
*   Analyze the velocity profiles and pressure distributions in both forced and free vortex flows.
*   Distinguish between forced and free vortex flows and identify their applications.

---

### 1. Introduction to Vortices

*   **Definition:** A vortex is a region in a fluid where the flow revolves around an axis line, which may be straight or curved. This axis is called the **vortex core**.
*   **Types of Vortices:**
    *   **Forced Vortex Flow:** The fluid rotates as a solid body. All fluid particles have the same angular velocity.
    *   **Free Vortex Flow:** The fluid rotates due to some initial impulse or circulation, without any external torque being applied. The angular velocity varies with the radial distance.

---

### 2. Forced Vortex Flow

#### 2.1. Definition and Characteristics

*   **Solid Body Rotation:** In a forced vortex, every particle of the fluid rotates with the same angular velocity ($\omega$).
*   **Velocity Profile:** The tangential velocity ($v_\theta$) is directly proportional to the radial distance ($r$) from the axis of rotation.
    *   $v_\theta = \omega r$
*   **Angular Velocity:** $\omega$ is constant for all fluid particles.
*   **Linear Velocity:** Increases linearly with the radial distance.
*   **Energy Input:** Requires continuous energy input to maintain the solid body rotation (e.g., from a rotating impeller or paddle).

#### 2.2. Derivation of the Equation of Motion

We can derive the equation of motion for a forced vortex by considering the forces acting on a small fluid element in the radial direction.

**Assumptions:**

*   Steady, incompressible, and inviscid flow.
*   Axisymmetric flow (rotation around the z-axis).
*   Neglecting gravitational effects for now, or considering the forces in a horizontal plane.

**Consider a fluid element of mass $dm = \rho \, dr \, r \, d\theta \, dz$ at a radial distance $r$.**

In a rotating frame of reference, we consider the forces in the radial direction (outward from the axis of rotation). The primary force responsible for maintaining the circular motion is the **centripetal force**, which is provided by the **pressure gradient**.

**Applying Newton's Second Law in the radial direction:**

The net force acting on the fluid element in the radial direction must be equal to its mass times its radial acceleration. In this case, the radial acceleration is the centripetal acceleration ($a_c$).

*   **Centripetal Acceleration:** $a_c = \frac{v_\theta^2}{r}$
*   **Tangential Velocity in Forced Vortex:** $v_\theta = \omega r$
*   **Therefore, Centripetal Acceleration:** $a_c = \frac{(\omega r)^2}{r} = \omega^2 r$

**Forces acting on the fluid element in the radial direction:**

1.  **Pressure Force:** The difference in pressure between the outer face and the inner face of the fluid element in the radial direction.
    *   Pressure at $r$: $p$
    *   Pressure at $r + dr$: $p + dp$
    *   Radial force due to pressure = $(p) (r \, d\theta \, dz) - (p + dp) (r \, d\theta \, dz)$
    *   Radial force = $- dp \, r \, d\theta \, dz$
    *   The negative sign indicates that the force is acting inwards (towards the axis).

2.  **Centrifugal Force (in the rotating frame):** This is an apparent force acting outward.
    *   Centrifugal force = $dm \cdot \omega^2 r = (\rho \, dr \, r \, d\theta \, dz) \omega^2 r$

**Equation of Motion (Radial Direction):**

Sum of forces = mass × acceleration

*   Radial force due to pressure + Centrifugal force = mass × centripetal acceleration (acting inwards, so we consider the magnitude of acceleration and equate it to the outward forces).

Let's consider the forces acting on a cylindrical shell of fluid of radius $r$, thickness $dr$, and height $H$. The mass of this shell is $dm = \rho (2\pi r \, dr) H$.

The net force in the radial direction (outward) on this shell is due to the pressure difference.
*   Force on outer surface = $p(r+dr) \cdot 2\pi (r+dr) H$
*   Force on inner surface = $p(r) \cdot 2\pi r H$
*   Net radial force (outward) = $[p(r+dr) \cdot (r+dr) - p(r) \cdot r] 2\pi H$
*   Using Taylor expansion for $p(r+dr) \approx p(r) + \frac{dp}{dr} dr$:
*   Net radial force $\approx [ (p + \frac{dp}{dr} dr) (r+dr) - pr ] 2\pi H$
*   Net radial force $\approx [ pr + p dr + r \frac{dp}{dr} dr + \frac{dp}{dr} dr^2 - pr ] 2\pi H$
*   Neglecting the $dr^2$ term:
*   Net radial force $\approx [ p dr + r \frac{dp}{dr} dr ] 2\pi H = \frac{dp}{dr} dr \, r \, 2\pi H$

The outward force providing the centripetal acceleration is the pressure gradient.
The outward force is $\frac{dp}{dr} \cdot dr \cdot A$, where $A$ is the area perpendicular to the radial direction, which is $H \times (\text{circumference})$.

Let's revert to the elemental approach for clarity. Consider a small fluid element with volume $dV = r \, d\theta \, dr \, dz$.

Forces in the radial direction:
*   Pressure force on the faces at $r$ and $r+dr$: $p \cdot (r \, d\theta \, dz) - (p+dp) \cdot (r \, d\theta \, dz) = -dp \, r \, d\theta \, dz$. This is the inward force.
*   The outward force that balances this is due to the pressure gradient. If we consider the pressure acting on the outer surface, it's $p$. On the inner surface, it's $p+dp$. The net outward force is $(p+dp - p) \times \text{Area} = dp \times (r \, d\theta \, dz)$.

**Using Euler's equation in the radial direction for inviscid flow:**

The radial component of Euler's equation is:
$\rho \left( \frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + \frac{v_\theta}{r} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta^2}{r} + v_z \frac{\partial v_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \rho g_r$

For steady, axisymmetric flow with no radial velocity ($v_r = 0$), and no axial velocity that affects radial motion ($v_z=0$), and assuming no gravitational effects in the radial direction ($g_r = 0$):
$0 + 0 + 0 - \rho \frac{v_\theta^2}{r} = -\frac{\partial p}{\partial r} + 0$

So, $\frac{\partial p}{\partial r} = \rho \frac{v_\theta^2}{r}$

Now, substitute $v_\theta = \omega r$ for forced vortex:
$\frac{\partial p}{\partial r} = \rho \frac{(\omega r)^2}{r} = \rho \omega^2 r$

**Integrating this equation with respect to $r$ from a reference radius $r_0$ to $r$:**
$\int_{p_0}^{p} dp = \int_{r_0}^{r} \rho \omega^2 r' dr'$
$p - p_0 = \rho \omega^2 \left[ \frac{r'^2}{2} \right]_{r_0}^{r}$
$p - p_0 = \frac{1}{2} \rho \omega^2 (r^2 - r_0^2)$

**Pressure Distribution:**
$p(r) = p_0 + \frac{1}{2} \rho \omega^2 (r^2 - r_0^2)$

If we consider the pressure at the axis ($r=0$) to be $p_{axis}$, then:
$p(r) = p_{axis} + \frac{1}{2} \rho \omega^2 r^2$

This is the equation for the pressure distribution in a forced vortex. The pressure increases quadratically with the radial distance.

#### 2.3. Free Surface Shape in Forced Vortex

When a forced vortex is formed in an open container, the free surface deforms. The vertical velocity is zero, so we can consider the balance of forces in the vertical direction and the radial direction.

In the radial direction, the pressure gradient balances the centripetal acceleration:
$\frac{\partial p}{\partial r} = \rho \omega^2 r$

For the free surface, the pressure is constant (atmospheric pressure).
We can relate the pressure gradient to the elevation change of the free surface using the hydrostatic pressure equation in the vertical direction.

Consider a point on the free surface at radius $r$ and height $z$.
The pressure at this point is atmospheric ($p_{atm}$).
The pressure gradient in the radial direction on the free surface can be expressed using the chain rule:
$\frac{dp}{dr} = \frac{\partial p}{\partial z} \frac{dz}{dr}$

On the free surface, $p = p_{atm}$ (constant), so $\frac{dp}{dr} = 0$. This is incorrect. The pressure gradient is in the fluid.

Let's consider the total derivative of pressure along a streamline on the free surface:
$dp = \frac{\partial p}{\partial r} dr + \frac{\partial p}{\partial z} dz$

On the free surface, $dp = 0$ (constant atmospheric pressure).
So, $0 = \frac{\partial p}{\partial r} dr + \frac{\partial p}{\partial z} dz$

We know $\frac{\partial p}{\partial r} = \rho \omega^2 r$ and in the vertical direction (assuming gravity acts downwards, $g_z = -g$):
$\frac{\partial p}{\partial z} = -\rho g$

Substituting these into the equation:
$0 = (\rho \omega^2 r) dr + (-\rho g) dz$
$\rho g \, dz = \rho \omega^2 r \, dr$
$g \, dz = \omega^2 r \, dr$

Integrating with respect to $r$ and $z$:
$\int_{z_0}^{z} dz = \int_{r_0}^{r} \frac{\omega^2 r'}{g} dr'$
$z - z_0 = \frac{\omega^2}{g} \left[ \frac{r'^2}{2} \right]_{r_0}^{r}$
$z - z_0 = \frac{\omega^2}{2g} (r^2 - r_0^2)$

If we define the height at the axis of rotation ($r=0$) as $z_0 = H_0$, then:
$z(r) = H_0 + \frac{\omega^2 r^2}{2g}$

This equation describes a **paraboloid of revolution**. The free surface of a forced vortex takes a parabolic shape.

#### 2.4. Examples of Forced Vortex Flow

*   **Mixing Tanks:** Impellers in mixing tanks create a forced vortex to agitate the fluid.
*   **Centrifugal Pumps:** The impeller of a centrifugal pump imparts a forced vortex motion to the fluid.
*   **Whirlpools (man-made):** Draining water from a sink or bathtub can create a vortex, though it's not a perfect forced vortex.
*   **Cylindrical containers:** If a cylindrical container of liquid is rotated at a constant angular velocity, the liquid inside will also rotate as a forced vortex.

---

### 3. Free Vortex Flow

#### 3.1. Definition and Characteristics

*   **Zero Net Torque:** In a free vortex, there is no net external torque applied to the fluid. The rotation is due to some initial condition or circulation.
*   **Circulation ($\Gamma$):** A key concept for free vortices is circulation, defined as the line integral of velocity around a closed curve: $\Gamma = \oint \mathbf{v} \cdot d\mathbf{l}$. For a free vortex, the circulation is constant.
*   **Velocity Profile:** The tangential velocity ($v_\theta$) is inversely proportional to the radial distance ($r$) from the axis of rotation.
    *   $v_\theta = \frac{K}{r}$
    *   Where $K$ is a constant related to the circulation. $K = \frac{\Gamma}{2\pi}$.
*   **Angular Velocity:** The angular velocity ($\omega = \frac{v_\theta}{r}$) is not constant; it decreases with increasing radial distance.
    *   $\omega = \frac{K}{r^2}$
*   **Singularity at the Core:** At the center of the vortex ($r=0$), the velocity becomes infinite, which is a mathematical singularity. In reality, viscosity dominates near the core, forming a viscous core where the velocity profile is different.

#### 3.2. Derivation of the Equation of Motion

We again use Euler's equation in the radial direction:
$\rho \left( \frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + \frac{v_\theta}{r} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta^2}{r} + v_z \frac{\partial v_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \rho g_r$

For steady, axisymmetric flow with no radial velocity ($v_r = 0$), and no axial velocity affecting radial motion ($v_z=0$), and no radial gravity ($g_r = 0$):
$0 + 0 + 0 - \rho \frac{v_\theta^2}{r} = -\frac{\partial p}{\partial r}$

So, $\frac{\partial p}{\partial r} = \rho \frac{v_\theta^2}{r}$

Now, substitute $v_\theta = \frac{K}{r}$ for free vortex:
$\frac{\partial p}{\partial r} = \rho \frac{(K/r)^2}{r} = \rho \frac{K^2}{r^3}$

**Integrating this equation with respect to $r$ from a reference radius $r_0$ to $r$:**
$\int_{p_0}^{p} dp = \int_{r_0}^{r} \rho \frac{K^2}{r'^3} dr'$
$p - p_0 = \rho K^2 \left[ -\frac{1}{2r'^2} \right]_{r_0}^{r}$
$p - p_0 = -\frac{1}{2} \rho K^2 \left( \frac{1}{r^2} - \frac{1}{r_0^2} \right)$

**Pressure Distribution:**
$p(r) = p_0 - \frac{1}{2} \rho K^2 \left( \frac{1}{r^2} - \frac{1}{r_0^2} \right)$

A more common way to express the pressure distribution is by considering the pressure at a very large radius (approaching infinity) where the velocity is very small, and hence the pressure is approximately constant.
Let $r \to \infty$, then $v_\theta \to 0$, so $p \to p_\infty$.
$\frac{\partial p}{\partial r} = \rho \frac{K^2}{r^3}$
Integrating from $r$ to $\infty$:
$\int_{p}^{p_\infty} dp = \int_{r}^{\infty} \rho \frac{K^2}{r'^3} dr'$
$p_\infty - p = \rho K^2 \left[ -\frac{1}{2r'^2} \right]_{r}^{\infty}$
$p_\infty - p = \rho K^2 (0 - (-\frac{1}{2r^2}))$
$p_\infty - p = \frac{1}{2} \rho \frac{K^2}{r^2}$

**Pressure Distribution:**
$p(r) = p_\infty - \frac{1}{2} \rho \frac{K^2}{r^2}$

This shows that the pressure decreases with increasing radial distance in a free vortex.

#### 3.3. Free Surface Shape in Free Vortex

Similar to forced vortex, we consider the constant pressure on the free surface.
$dp = \frac{\partial p}{\partial r} dr + \frac{\partial p}{\partial z} dz = 0$

We have $\frac{\partial p}{\partial r} = \rho \frac{K^2}{r^3}$ and $\frac{\partial p}{\partial z} = -\rho g$.
$0 = \left( \rho \frac{K^2}{r^3} \right) dr + (-\rho g) dz$
$\rho g \, dz = \rho \frac{K^2}{r^3} dr$
$g \, dz = \frac{K^2}{r^3} dr$

Integrating with respect to $r$ and $z$:
$\int_{z_0}^{z} dz = \int_{r_0}^{r} \frac{K^2}{g r'^3} dr'$
$z - z_0 = \frac{K^2}{g} \left[ -\frac{1}{2r'^2} \right]_{r_0}^{r}$
$z - z_0 = -\frac{K^2}{2g} \left( \frac{1}{r^2} - \frac{1}{r_0^2} \right)$

If we consider the height at a very large radius ($r \to \infty$) where the surface is flat ($z \to H_\infty$), then $z_0 = H_\infty$ and $r_0 \to \infty$.
$z - H_\infty = -\frac{K^2}{2g} \left( \frac{1}{r^2} - 0 \right)$
$z(r) = H_\infty - \frac{K^2}{2gr^2}$

This equation describes the shape of the free surface in a free vortex. The surface dips down towards the center, forming a **free surface depression**.

#### 3.4. Ideal vs. Real Free Vortices

*   **Ideal Free Vortex:** Assumes inviscid fluid and the velocity profile $v_\theta = K/r$ holds all the way to the center. This leads to infinite velocity and zero pressure at the core, which is unphysical.
*   **Real Free Vortex:** Near the core, viscous effects become dominant. The core is typically a region of solid body rotation or a more complex turbulent flow. The velocity profile transitions from $v_\theta \propto r$ in the core to $v_\theta \propto 1/r$ in the outer region.

#### 3.5. Examples of Free Vortex Flow

*   **Whirlpools in nature:** The classic example is the water draining from a sink or bathtub, creating a vortex.
*   **Tornadoes and hurricanes:** These are large-scale atmospheric vortices driven by complex thermodynamic processes, but the flow away from the immediate core often approximates a free vortex.
*   **Water flowing out of a culvert or drain:** Creates a visible vortex.
*   **Tangled ropes or hair:** Can create vortex-like structures.

---

### 4. Comparison of Forced and Free Vortices

| Feature          | Forced Vortex Flow                                  | Free Vortex Flow                                     |
| :--------------- | :-------------------------------------------------- | :--------------------------------------------------- |
| **Rotation Type** | Solid body rotation                                 | Irrotational (except for the core in real cases)     |
| **Angular Velocity ($\omega$)** | Constant ($\omega$)                               | Decreases with radius ($\omega = K/r^2$)             |
| **Tangential Velocity ($v_\theta$)** | Proportional to radius ($v_\theta = \omega r$)   | Inversely proportional to radius ($v_\theta = K/r$) |
| **Energy Input** | Requires continuous energy input                    | No continuous external energy input required         |
| **Circulation**  | Zero (for solid body rotation)                      | Constant ($\Gamma = 2\pi K$)                         |
| **Pressure Gradient** | $\frac{\partial p}{\partial r} = \rho \omega^2 r$ (increases with $r$) | $\frac{\partial p}{\partial r} = \rho \frac{K^2}{r^3}$ (decreases with $r$) |
| **Free Surface** | Paraboloid of revolution ($z \propto r^2$)         | Depression ($z \propto -1/r^2$)                     |
| **Core Singularity** | No singularity                                      | Mathematical singularity at $r=0$ (inviscid model)   |
| **Examples**     | Mixing tanks, centrifugal pumps                     | Draining sinks, tornadoes (outer regions)            |

---

### 5. Important Points to Remember

*   **Forced Vortex:** Solid body rotation, $v_\theta \propto r$, $\omega =$ constant. Pressure increases quadratically with radius. Free surface is a paraboloid.
*   **Free Vortex:** Circulation is constant, $v_\theta \propto 1/r$, $\omega \propto 1/r^2$. Pressure decreases with radius. Free surface dips at the center.
*   **Euler's equation in the radial direction is fundamental to deriving the pressure distribution.**
*   **The shape of the free surface is determined by balancing pressure forces and gravitational forces.**
*   **Real free vortices have a viscous core to avoid the singularity at the center.**

---

### 6. Practice Questions and Exercises

**Question 1:**
A forced vortex is formed in a cylindrical tank of radius 0.5 m. The fluid rotates with an angular velocity of 5 rad/s. If the pressure at the center of the vortex is 100 kPa, and the fluid is water ($\rho = 1000 \, \text{kg/m}^3$), calculate the pressure at the outer edge of the tank.

**Answer 1:**
For a forced vortex, the pressure distribution is given by $p(r) = p_{axis} + \frac{1}{2} \rho \omega^2 r^2$.
Given:
$p_{axis} = 100 \, \text{kPa} = 100 \times 10^3 \, \text{Pa}$
$\rho = 1000 \, \text{kg/m}^3$
$\omega = 5 \, \text{rad/s}$
$r = 0.5 \, \text{m}$

$p(0.5) = 100 \times 10^3 + \frac{1}{2} (1000) (5)^2 (0.5)^2$
$p(0.5) = 100 \times 10^3 + \frac{1}{2} (1000) (25) (0.25)$
$p(0.5) = 100 \times 10^3 + 125 \times 12.5$
$p(0.5) = 100 \times 10^3 + 1562.5$
$p(0.5) = 101562.5 \, \text{Pa} \approx 101.56 \, \text{kPa}$

**Question 2:**
A free vortex flow in water has a circulation of $0.5 \, \text{m}^2/\text{s}$. If the velocity at a radial distance of 1 m is measured to be $0.5 \, \text{m/s}$, determine the velocity at a radial distance of 0.2 m. Also, calculate the pressure difference between these two radial locations.

**Answer 2:**
For a free vortex, $v_\theta = K/r$, where $K = \Gamma / (2\pi)$.
Given $\Gamma = 0.5 \, \text{m}^2/\text{s}$.
$K = \frac{0.5}{2\pi} \, \text{m}^2/\text{s}$

Velocity at $r = 1 \, \text{m}$: $v_\theta(1) = K/1 = K$.
So, $K = 0.5 \, \text{m/s}$ (This implies $\Gamma = 2\pi \times 0.5 = \pi \, \text{m}^2/\text{s}$). Let's recheck the problem statement. If velocity at 1m is 0.5 m/s, then $K=0.5 \text{ m}^2/\text{s}$.
If $\Gamma = 0.5 \, \text{m}^2/\text{s}$, then $K = 0.5 / (2\pi) \approx 0.0796 \, \text{m}^2/\text{s}$. Let's assume the question means $K=0.5$.

If $K = 0.5 \, \text{m}^2/\text{s}$:
Velocity at $r = 0.2 \, \text{m}$: $v_\theta(0.2) = K / 0.2 = 0.5 / 0.2 = 2.5 \, \text{m/s}$.

Pressure difference: $p(r) = p_\infty - \frac{1}{2} \rho \frac{K^2}{r^2}$.
Let $r_1 = 1 \, \text{m}$ and $r_2 = 0.2 \, \text{m}$.
$p(r_1) = p_\infty - \frac{1}{2} \rho \frac{K^2}{r_1^2}$
$p(r_2) = p_\infty - \frac{1}{2} \rho \frac{K^2}{r_2^2}$

Pressure difference $p(r_2) - p(r_1) = \left( p_\infty - \frac{1}{2} \rho \frac{K^2}{r_2^2} \right) - \left( p_\infty - \frac{1}{2} \rho \frac{K^2}{r_1^2} \right)$
$p(r_2) - p(r_1) = \frac{1}{2} \rho \left( \frac{K^2}{r_1^2} - \frac{K^2}{r_2^2} \right)$
$p(r_2) - p(r_1) = \frac{1}{2} \rho K^2 \left( \frac{1}{r_1^2} - \frac{1}{r_2^2} \right)$

Using $\rho = 1000 \, \text{kg/m}^3$ and $K = 0.5 \, \text{m}^2/\text{s}$:
$p(0.2) - p(1) = \frac{1}{2} (1000) (0.5)^2 \left( \frac{1}{1^2} - \frac{1}{0.2^2} \right)$
$p(0.2) - p(1) = 500 \times 0.25 \left( 1 - \frac{1}{0.04} \right)$
$p(0.2) - p(1) = 125 (1 - 25)$
$p(0.2) - p(1) = 125 \times (-24)$
$p(0.2) - p(1) = -3000 \, \text{Pa}$

So, the pressure at 0.2 m is 3000 Pa less than the pressure at 1 m, which makes sense as pressure decreases with radius.

**Question 3 (Conceptual):**
Describe the difference in the shape of the free surface for a forced vortex and a free vortex when formed in an open container. What drives these shape differences?

**Answer 3:**
For a forced vortex, the free surface forms a paraboloid of revolution, with the surface height increasing quadratically with the radial distance ($z \propto r^2$). This is due to the constant angular velocity and the resulting uniform radial pressure gradient required to provide the centripetal acceleration.

For a free vortex, the free surface forms a depression that is inversely proportional to the square of the radial distance ($z \propto -1/r^2$). This occurs because the tangential velocity decreases with radius, leading to a weaker radial pressure gradient. The pressure is lower at larger radii, causing the fluid to be shallower there and deeper towards the center.

**Question 4:**
Consider a vortex in a sink. Is it more accurately described as a forced vortex or a free vortex? Explain your reasoning.

**Answer 4:**
A vortex formed by water draining from a sink is generally considered to be closer to a **free vortex**. This is because there is no external mechanism continuously imparting torque to maintain solid body rotation. The rotation is initiated by the swirling of water as it enters the drain, and the circulation is largely conserved. While viscosity and the shape of the drain and sink can affect the exact velocity profile, the $1/r$ velocity dependence outside a central core is a reasonable approximation.

---
This concludes the study notes for the equation of motion of forced and free vortex flow.
