---
title: "Momentum equations and forces on Pipe bends"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106fe"
status: "completed"
scrapedAt: "2026-05-20T18:40:39.550Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Momentum Equations and Forces on Pipe Bends

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of momentum and its application to fluid flow.
*   Derive and apply the linear momentum equation for control volumes.
*   Analyze forces acting on stationary and moving control volumes.
*   Calculate the forces exerted by flowing fluids on pipe bends.
*   Understand the importance of momentum analysis in engineering applications.

---

### 1. Introduction to Momentum and its Significance

*   **Momentum:** A fundamental concept in physics, momentum is the product of mass and velocity. For a fluid particle, linear momentum is given by $m\mathbf{v}$, where $m$ is the mass and $\mathbf{v}$ is the velocity vector.
*   **Momentum Equation:** This equation is a direct consequence of Newton's Second Law of Motion ($\mathbf{F} = m\mathbf{a}$) applied to a fluid system. It relates the net force acting on a fluid to the rate of change of its momentum.
*   **Importance in Fluid Mechanics:**
    *   **Force Calculation:** Crucial for determining the forces exerted by fluids on solid boundaries (e.g., pipes, vanes, aircraft wings).
    *   **Jet Propulsion and Reaction Forces:** Essential for analyzing thrust in rockets, jets, and pumps.
    *   **Flow Deflection:** Understanding how fluid momentum changes when the flow direction is altered.

---

### 2. The Linear Momentum Equation for Control Volumes

The most common approach in fluid mechanics is to apply the momentum equation to a **control volume (CV)**, which is a region in space through which fluid flows. The **Reynolds Transport Theorem (RTT)** is used to convert a property-mass formulation to a control volume formulation.

**RTT for Momentum:**

The rate of change of momentum of a system is equal to the net external force acting on the system.
Mathematically, for a system:

$ \sum \mathbf{F}_{sys} = \frac{d\mathbf{P}_{sys}}{dt} $

where $\mathbf{P}_{sys}$ is the momentum of the system.

To apply this to a control volume, we use the RTT:

$ \frac{d\mathbf{P}_{CV}}{dt} = \frac{d}{dt} \int_{CV} \rho \mathbf{v} \, dV + \int_{CS} \rho \mathbf{v} (\mathbf{v} \cdot \mathbf{n}) \, dA $

where:
*   $\frac{d\mathbf{P}_{CV}}{dt}$ is the rate of change of momentum within the control volume.
*   $\rho$ is the fluid density.
*   $\mathbf{v}$ is the velocity vector.
*   $dV$ is the differential volume element.
*   $CS$ is the control surface enclosing the control volume.
*   $\mathbf{n}$ is the outward normal vector to the control surface.
*   $dA$ is the differential area element.

**The General Linear Momentum Equation for a Control Volume:**

The net force acting on the control volume is equal to the rate of change of momentum within the control volume plus the net rate of momentum outflow across the control surface.

$ \sum \mathbf{F}_{CV} = \frac{d}{dt} \int_{CV} \rho \mathbf{v} \, dV + \int_{CS} \rho \mathbf{v} (\mathbf{v} \cdot \mathbf{n}) \, dA $

**Simplified Momentum Equation for Steady Flow:**

For steady flow, the rate of change of momentum within the control volume is zero ($\frac{d}{dt} \int_{CV} \rho \mathbf{v} \, dV = 0$). The equation simplifies to:

$ \sum \mathbf{F}_{CV} = \sum_{out} \rho \mathbf{v} (\mathbf{v} \cdot \mathbf{n}) \, dA - \sum_{in} \rho \mathbf{v} (\mathbf{v} \cdot \mathbf{n}) \, dA $

Often, this is expressed as the sum of momentum flow rates across the control surface:

$ \sum \mathbf{F}_{CV} = \sum_{out} \dot{m} \mathbf{v}_{out} - \sum_{in} \dot{m} \mathbf{v}_{in} $

where $\dot{m} = \rho A v$ is the mass flow rate.

**Forces Acting on the Control Volume ($\sum \mathbf{F}_{CV}$):**

These forces can be broadly categorized into:

*   **Body Forces:** Forces acting on the entire mass of the fluid within the CV, usually due to gravity.
    *   $\mathbf{F}_B = \int_{CV} \rho \mathbf{g} \, dV = \mathbf{g} \int_{CV} \rho \, dV = \mathbf{g} m_{CV}$
*   **Surface Forces:** Forces acting on the surface of the control volume.
    *   **Pressure Forces:** $\mathbf{F}_P = \int_{CS} p \mathbf{n} \, dA$
    *   **Shear Forces:** Forces due to viscosity (often negligible in inviscid flow analysis).
    *   **External Forces:** Any other applied forces.

---

### 3. Forces on Pipe Bends (Steady Flow)

Pipe bends are common components in piping systems, and they exert forces on the supporting structure due to the change in momentum of the fluid flowing through them.

**Key Concepts for Pipe Bends:**

*   **Control Volume:** Typically, the control volume is chosen to enclose the fluid within the bend. The control surfaces are the inlet, outlet, and the inner/outer surfaces of the bend.
*   **Assumptions:**
    *   Steady flow.
    *   Incompressible flow (density $\rho$ is constant).
    *   Uniform velocity profiles at the inlet and outlet (often assumed, or average velocity used).
    *   Negligible shear forces on the bend walls (for many practical calculations).
    *   Atmospheric pressure on the external surfaces of the control volume (if exposed).

**Applying the Momentum Equation:**

Let's consider a pipe bend in two dimensions (x and y). The forces we need to account for are:

*   **Force exerted by the fluid on the bend:** This is what we want to calculate ($\mathbf{F}_{bend}$).
*   **Forces due to pressure acting on the bend:** This arises from the pressure inside the pipe acting on the bend surfaces.
*   **Forces due to body forces (weight):** The weight of the fluid within the bend.
*   **Forces exerted by the bend on the fluid:** This is the reaction force to $\mathbf{F}_{bend}$ and is often calculated by considering the forces acting on the fluid.

We typically choose a control volume that encloses the fluid *within* the bend. The forces acting *on* this fluid control volume are:

1.  **Pressure forces at inlet and outlet:** $P_1 A_1$ and $P_2 A_2$, acting in the direction of flow.
2.  **Pressure forces on the inner and outer walls of the bend:** These are integrated over the surface.
3.  **Weight of the fluid:** $W = m_{fluid} \mathbf{g}$
4.  **External forces applied to the fluid:** (e.g., by the bend walls). This is the force the bend exerts on the fluid.

Let $\mathbf{F}_{CV}$ be the sum of external forces acting on the control volume. This includes pressure forces on the CV boundaries and body forces.
The momentum equation for the fluid within the bend becomes:

$ \sum \mathbf{F}_{CV} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 $

where:
*   $\dot{m}_1 = \rho A_1 v_1$ and $\dot{m}_2 = \rho A_2 v_2$ are the mass flow rates at the inlet and outlet.
*   $\mathbf{v}_1$ and $\mathbf{v}_2$ are the average velocities at the inlet and outlet.

**Calculating Forces on the Bend:**

The force that the bend exerts on the fluid ($\mathbf{F}_{bend, on\_fluid}$) is often what we need to determine. We can rearrange the momentum equation:

$ \mathbf{F}_{bend, on\_fluid} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 - \sum \mathbf{F}_{external\_forces\_on\_fluid} $

The external forces on the fluid usually include pressure forces at inlet/outlet and body forces.

**A more practical approach involves calculating the resultant force acting on the bend.** This involves balancing the forces acting on the control volume of fluid.

Let:
*   $\mathbf{R}$ be the resultant force exerted by the bend on the fluid.
*   $\mathbf{F}_{P1}$ be the force due to pressure at the inlet ($P_1 A_1$).
*   $\mathbf{F}_{P2}$ be the force due to pressure at the outlet ($P_2 A_2$).
*   $\mathbf{W}$ be the weight of the fluid within the bend.

Applying Newton's third law, the force exerted by the fluid on the bend is $-\mathbf{R}$.

The momentum equation for the fluid:
$ \sum \mathbf{F}_{\text{on fluid}} = \text{Rate of change of momentum of fluid} $

$ \mathbf{F}_{P1} + \mathbf{F}_{P2} + \mathbf{W} + \mathbf{R} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 $

Therefore, the force exerted by the bend on the fluid is:
$ \mathbf{R} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 - \mathbf{F}_{P1} - \mathbf{F}_{P2} - \mathbf{W} $

**Breaking down forces into components (e.g., x and y):**

Let's assume the bend is in the xy-plane.
*   Inlet 1: area $A_1$, pressure $P_1$, velocity $\mathbf{v}_1 = v_{1x} \mathbf{i} + v_{1y} \mathbf{j}$.
*   Outlet 2: area $A_2$, pressure $P_2$, velocity $\mathbf{v}_2 = v_{2x} \mathbf{i} + v_{2y} \mathbf{j}$.
*   Mass flow rates: $\dot{m}_1 = \rho A_1 v_1$ and $\dot{m}_2 = \rho A_2 v_2$. For incompressible flow with constant pipe diameter, $\dot{m}_1 = \dot{m}_2 = \dot{m}$.

**Force components exerted by the bend on the fluid:**

$R_x = \dot{m} (v_{2x} - v_{1x}) - P_1 A_1 \cos \theta_1 - P_2 A_2 \cos \theta_2 + \int_{CS} P \, n_x \, dA - W_x$
$R_y = \dot{m} (v_{2y} - v_{1y}) - P_1 A_1 \sin \theta_1 - P_2 A_2 \sin \theta_2 + \int_{CS} P \, n_y \, dA - W_y$

Here, $P$ is the pressure on the walls, and $\mathbf{n}$ is the outward normal. The integral terms account for the pressure on the curved surfaces.

**Simplified Calculation for Smooth Bends with Uniform Velocity and Pressure:**

If we assume the pressure on the pipe walls is approximately constant and equal to the average of inlet/outlet pressure, or if we can neglect the pressure forces on the curved walls, the calculation becomes simpler.

For a bend in the xy-plane, with inlet at angle $\theta_1$ and outlet at angle $\theta_2$ with respect to the x-axis:

**X-component of force exerted by the bend on the fluid ($R_x$):**

$R_x = (\dot{m} v_2 \cos \theta_2 - \dot{m} v_1 \cos \theta_1) - (P_1 A_1 \cos \theta_1) - (P_2 A_2 \cos \theta_2) - \text{Pressure forces on side walls}$

If we consider the forces *on the fluid*, we have:
$R_x = \dot{m}(v_{2x} - v_{1x}) + (P_1 A_1 \cos\alpha_1 + P_2 A_2 \cos\alpha_2) + \text{Pressure on walls x-comp} + \text{Weight in x-direction}$

A common approach is to consider the net force due to momentum change and pressure acting on the end areas.

**Let's define the forces acting ON the fluid within the control volume:**

*   **Force due to momentum change:** $\mathbf{F}_{\text{momentum}} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1$
*   **Force due to pressure at inlet:** $\mathbf{F}_{P1} = P_1 A_1 \mathbf{\hat{n}}_1$ (where $\mathbf{\hat{n}}_1$ is the unit normal pointing into the CV at the inlet)
*   **Force due to pressure at outlet:** $\mathbf{F}_{P2} = P_2 A_2 \mathbf{\hat{n}}_2$ (where $\mathbf{\hat{n}}_2$ is the unit normal pointing into the CV at the outlet)
*   **Force due to pressure on the bend walls:** $\mathbf{F}_{P,wall} = \int_{CS_{wall}} p (-\mathbf{n}) \, dA$ (where $-\mathbf{n}$ points inwards)
*   **Force due to gravity (weight):** $\mathbf{W} = m_{CV} \mathbf{g}$

The sum of forces acting on the fluid is equal to the net rate of momentum change:

$ \mathbf{F}_{P1} + \mathbf{F}_{P2} + \mathbf{F}_{P,wall} + \mathbf{W} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 $

The force exerted by the bend on the fluid is $\mathbf{F}_{bend, on\_fluid} = -(\mathbf{F}_{P,wall})$.

So, $\mathbf{F}_{bend, on\_fluid} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 - \mathbf{F}_{P1} - \mathbf{F}_{P2} - \mathbf{W}$

This equation is correct but can be difficult to use directly due to the $\mathbf{F}_{P,wall}$ term.

**A more convenient formulation for engineering applications:**

We calculate the force that the *fluid exerts on the bend*. Let this force be $\mathbf{F}_{fluid \to bend}$. This is equal to $-\mathbf{F}_{bend \to fluid}$.

Consider the external forces acting on the fluid:
$ \mathbf{F}_{applied} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 $
where $\mathbf{F}_{applied}$ are the forces applied *by the bend* onto the fluid.
$ \mathbf{F}_{applied} = \mathbf{F}_{P1} + \mathbf{F}_{P2} + \mathbf{F}_{P,wall} + \mathbf{W} $

The force that the bend exerts on the fluid ($\mathbf{F}_{bend\_on\_fluid}$) is the sum of pressure forces on the interior surfaces of the bend and any external forces applied to the bend itself.

Let's rephrase: The total force acting on the fluid inside the CV is the sum of pressure forces on the inlet/outlet surfaces, pressure forces on the bend walls, and body forces. This sum equals the net rate of momentum outflow.

$ (P_1 A_1 \mathbf{\hat{n}}_1 + P_2 A_2 \mathbf{\hat{n}}_2 + \mathbf{F}_{\text{pressure on walls}} + \mathbf{W}) = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 $

The force that the bend exerts on the fluid is $\mathbf{F}_{bend\_on\_fluid} = \mathbf{F}_{\text{pressure on walls}}$.

So, $\mathbf{F}_{bend\_on\_fluid} = \dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 - P_1 A_1 \mathbf{\hat{n}}_1 - P_2 A_2 \mathbf{\hat{n}}_2 - \mathbf{W}$.

**To calculate the anchoring force required for the bend:**

The anchoring force $\mathbf{F}_{anchor}$ is the external force needed to hold the bend in place. It balances the resultant force exerted by the fluid on the bend.
The force exerted by the fluid on the bend is the sum of:
1.  Momentum flux: $(\dot{m}_1 \mathbf{v}_1 - \dot{m}_2 \mathbf{v}_2)$
2.  Pressure forces on the inlet/outlet ends: $P_1 A_1 \mathbf{\hat{n}}_1 + P_2 A_2 \mathbf{\hat{n}}_2$ (Note: these pressures act on the fluid, so the reaction forces from the fluid on the bend are in the opposite direction if they are bounding the fluid).
3.  Pressure forces on the bend walls: $\mathbf{F}_{\text{pressure on walls}}$
4.  Weight of the bend material: $\mathbf{W}_{bend}$

The net force exerted by the fluid on the bend is $\mathbf{F}_{\text{fluid on bend}} = -\mathbf{F}_{bend\_on\_fluid}$.

$ \mathbf{F}_{\text{fluid on bend}} = -(\dot{m}_2 \mathbf{v}_2 - \dot{m}_1 \mathbf{v}_1 - P_1 A_1 \mathbf{\hat{n}}_1 - P_2 A_2 \mathbf{\hat{n}}_2 - \mathbf{W}) $
$ \mathbf{F}_{\text{fluid on bend}} = \dot{m}_1 \mathbf{v}_1 - \dot{m}_2 \mathbf{v}_2 + P_1 A_1 \mathbf{\hat{n}}_1 + P_2 A_2 \mathbf{\hat{n}}_2 + \mathbf{W} $

The anchoring force must balance this: $\mathbf{F}_{anchor} = -\mathbf{F}_{\text{fluid on bend}}$.

Let's consider a 90-degree elbow.
Inlet: $A_1$, $P_1$, $v_1$ (e.g., along x-axis)
Outlet: $A_2$, $P_2$, $v_2$ (e.g., along y-axis)
Assume $A_1=A_2=A$ and $v_1=v_2=v$, $\rho$ is constant. $\dot{m}_1 = \dot{m}_2 = \dot{m} = \rho A v$.

Forces exerted by the fluid on the bend:
*   Momentum change: $(\rho A v) (v \mathbf{j}) - (\rho A v) (v \mathbf{i}) = \rho A v^2 (\mathbf{j} - \mathbf{i})$
*   Pressure at inlet (acting on fluid): $P_1 A (-\mathbf{i})$
*   Pressure at outlet (acting on fluid): $P_2 A (-\mathbf{j})$
*   Pressure on bend walls: $\mathbf{F}_{\text{pressure on walls}}$
*   Weight of fluid: $\mathbf{W} = \rho g V_{bend}$ (acting downwards, $-\mathbf{j}$)

Force exerted by the bend on the fluid: $\mathbf{F}_{bend\_on\_fluid} = \mathbf{F}_{\text{pressure on walls}}$.
Momentum equation for fluid: $P_1 A (-\mathbf{i}) + P_2 A (-\mathbf{j}) + \mathbf{F}_{bend\_on\_fluid} + \mathbf{W} = \rho A v^2 (\mathbf{j} - \mathbf{i})$

$ \mathbf{F}_{bend\_on\_fluid} = \rho A v^2 (\mathbf{j} - \mathbf{i}) - P_1 A (-\mathbf{i}) - P_2 A (-\mathbf{j}) - \mathbf{W} $
$ \mathbf{F}_{bend\_on\_fluid} = -\rho A v^2 \mathbf{i} - \rho A v^2 \mathbf{j} + P_1 A \mathbf{i} + P_2 A \mathbf{j} - \mathbf{W} $

The force exerted by the fluid on the bend is $-\mathbf{F}_{bend\_on\_fluid}$:
$ \mathbf{F}_{\text{fluid on bend}} = \rho A v^2 \mathbf{i} + \rho A v^2 \mathbf{j} - P_1 A \mathbf{i} - P_2 A \mathbf{j} + \mathbf{W} $

$ F_{\text{fluid on bend, x}} = \rho A v^2 - P_1 A + W_x $
$ F_{\text{fluid on bend, y}} = \rho A v^2 - P_2 A + W_y $

The anchoring force needed to hold the bend is the reaction to this force.
$ F_{anchor, x} = -(\rho A v^2 - P_1 A + W_x) = P_1 A - \rho A v^2 - W_x $
$ F_{anchor, y} = -(\rho A v^2 - P_2 A + W_y) = P_2 A - \rho A v^2 - W_y $

**Example:**

Consider a 90-degree horizontal elbow with a uniform cross-sectional area $A$. Water ($\rho = 1000 \, \text{kg/m}^3$) enters with velocity $v_1 = 10 \, \text{m/s}$ and pressure $P_1 = 200 \, \text{kPa}$. The water exits with velocity $v_2 = 10 \, \text{m/s}$ and pressure $P_2 = 150 \, \text{kPa}$. The area of the elbow is $A = 0.01 \, \text{m}^2$. Assume the weight of the fluid in the elbow is negligible.

Let the inlet be along the x-axis and the outlet along the y-axis.

*   $\dot{m} = \rho A v = 1000 \, \text{kg/m}^3 \times 0.01 \, \text{m}^2 \times 10 \, \text{m/s} = 100 \, \text{kg/s}$
*   $\mathbf{v}_1 = 10 \mathbf{i} \, \text{m/s}$
*   $\mathbf{v}_2 = 10 \mathbf{j} \, \text{m/s}$
*   $P_1 = 200 \, \text{kPa} = 200 \times 10^3 \, \text{Pa}$
*   $P_2 = 150 \, \text{kPa} = 150 \times 10^3 \, \text{Pa}$
*   $A = 0.01 \, \text{m}^2$
*   $W = 0$

We need to find the anchoring force $\mathbf{F}_{anchor}$ to hold the bend. This force is equal and opposite to the force exerted by the fluid on the bend.

Let's calculate the force exerted by the fluid on the bend. This is the sum of forces that need to be balanced to keep the bend in place.

The force exerted by the fluid on the bend is given by:
$ \mathbf{F}_{\text{fluid on bend}} = \dot{m} \mathbf{v}_1 - \dot{m} \mathbf{v}_2 + P_1 A \mathbf{\hat{n}}_1 + P_2 A \mathbf{\hat{n}}_2 $
where $\mathbf{\hat{n}}_1$ and $\mathbf{\hat{n}}_2$ are outward normals from the fluid volume.
At the inlet, the normal pointing out of the fluid is $-\mathbf{i}$.
At the outlet, the normal pointing out of the fluid is $-\mathbf{j}$.

$ \mathbf{F}_{\text{fluid on bend}} = (\rho A v) (v \mathbf{i}) - (\rho A v) (v \mathbf{j}) + P_1 A (-\mathbf{i}) + P_2 A (-\mathbf{j}) $
$ \mathbf{F}_{\text{fluid on bend}} = \rho A v^2 \mathbf{i} - \rho A v^2 \mathbf{j} - P_1 A \mathbf{i} - P_2 A \mathbf{j} $

$ F_{\text{fluid on bend, x}} = \rho A v^2 - P_1 A $
$ F_{\text{fluid on bend, y}} = -\rho A v^2 - P_2 A $

Substitute values:
$ F_{\text{fluid on bend, x}} = (1000)(0.01)(10)^2 - (200 \times 10^3)(0.01) = 1000 - 2000 = -1000 \, \text{N} $
$ F_{\text{fluid on bend, y}} = -(1000)(0.01)(10)^2 - (150 \times 10^3)(0.01) = -1000 - 1500 = -2500 \, \text{N} $

The anchoring force must counteract this force.
$ \mathbf{F}_{anchor} = - \mathbf{F}_{\text{fluid on bend}} $
$ F_{anchor, x} = -(-1000) = 1000 \, \text{N} $ (acting in the positive x-direction)
$ F_{anchor, y} = -(-2500) = 2500 \, \text{N} $ (acting in the positive y-direction)

The resultant anchoring force is $R = \sqrt{1000^2 + 2500^2} \approx 2693 \, \text{N}$.

---

### 4. Forces on Stationary vs. Moving Control Volumes

*   **Stationary Control Volume:** The control volume is fixed relative to the observer. The general momentum equation simplifies as there is no convective term for the CV itself. The main contributions to momentum change come from the fluid entering and leaving.
*   **Moving Control Volume:** The control volume is moving with a constant or variable velocity. This requires accounting for the velocity of the control volume itself in the Reynolds Transport Theorem formulation.
    *   The RTT for momentum of a moving CV is:
        $ \frac{d\mathbf{P}_{sys}}{dt} = \frac{d}{dt} \int_{CV} \rho \mathbf{v} \, dV + \int_{CS} \rho (\mathbf{v} - \mathbf{V}_{CV}) (\mathbf{v} \cdot \mathbf{n}) \, dA $
        where $\mathbf{V}_{CV}$ is the velocity of the control volume.
    *   For steady flow relative to the moving CV, the first term is zero. The equation becomes:
        $ \sum \mathbf{F}_{CV} = \int_{CS} \rho (\mathbf{v} - \mathbf{V}_{CV}) (\mathbf{v} \cdot \mathbf{n}) \, dA $
    *   This formulation is crucial for analyzing forces on moving objects like impellers, propellers, or aircraft wings.

---

### 5. Practice Questions and Exercises

**Question 1:**
A horizontal pipe reducer has a diameter of 0.2 m at the inlet and 0.1 m at the outlet. Water enters with a velocity of 2 m/s and a pressure of 300 kPa. The exit pressure is 150 kPa. Assuming steady, incompressible flow and neglecting gravitational effects, calculate the force exerted by the fluid on the reducer. The flow is from the larger to the smaller diameter along the x-axis.

**Answer 1:**
*   Inlet diameter $D_1 = 0.2 \, \text{m}$, $A_1 = \pi (0.1)^2 = 0.0314 \, \text{m}^2$.
*   Outlet diameter $D_2 = 0.1 \, \text{m}$, $A_2 = \pi (0.05)^2 = 0.00785 \, \text{m}^2$.
*   $v_1 = 2 \, \text{m/s}$, $P_1 = 300 \times 10^3 \, \text{Pa}$.
*   $v_2$, $P_2 = 150 \times 10^3 \, \text{Pa}$.
*   Density of water $\rho = 1000 \, \text{kg/m}^3$.

Calculate velocity at outlet using continuity:
$A_1 v_1 = A_2 v_2 \Rightarrow v_2 = v_1 \frac{A_1}{A_2} = 2 \frac{0.0314}{0.00785} = 2 \times 4 = 8 \, \text{m/s}$.

Momentum equation in the x-direction (forces acting on the fluid):
$ \sum F_x = \dot{m}(v_{2x} - v_{1x}) $
Forces acting on the fluid are pressure force at inlet ($P_1 A_1$), pressure force at outlet ($P_2 A_2$), and force exerted by the reducer on the fluid ($F_{reducer\_on\_fluid, x}$).
$P_1 A_1 - P_2 A_2 + F_{reducer\_on\_fluid, x} = \dot{m}(v_2 - v_1)$
Note: For a reducer, the velocity increases, and pressure decreases. The force on the fluid will be in the direction of flow.

Let's calculate the force exerted *by the fluid* on the reducer:
$ \mathbf{F}_{\text{fluid on reducer}} = \dot{m} \mathbf{v}_1 - \dot{m} \mathbf{v}_2 + P_1 A_1 \mathbf{\hat{n}}_1 + P_2 A_2 \mathbf{\hat{n}}_2 $
In the x-direction:
$ F_{\text{fluid on reducer, x}} = \dot{m} v_{1x} - \dot{m} v_{2x} + P_1 A_1 (-\mathbf{i}_x) + P_2 A_2 (\mathbf{i}_x) $
Here, $\mathbf{\hat{n}}_1 = -\mathbf{i}$ and $\mathbf{\hat{n}}_2 = \mathbf{i}$ are normals pointing out of the fluid control volume.
$ F_{\text{fluid on reducer, x}} = \dot{m} (v_1 - v_2) + P_1 A_1 (-1) + P_2 A_2 (1) $
$ F_{\text{fluid on reducer, x}} = \dot{m} (v_1 - v_2) - P_1 A_1 + P_2 A_2 $

Calculate mass flow rate: $\dot{m} = \rho A_1 v_1 = 1000 \times 0.0314 \times 2 = 62.8 \, \text{kg/s}$.
$ F_{\text{fluid on reducer, x}} = 62.8 (2 - 8) - (300 \times 10^3)(0.0314) + (150 \times 10^3)(0.00785) $
$ F_{\text{fluid on reducer, x}} = 62.8 (-6) - 9420 + 1177.5 $
$ F_{\text{fluid on reducer, x}} = -376.8 - 9420 + 1177.5 = -8619.3 \, \text{N} $

The force exerted by the fluid on the reducer is approximately 8619.3 N acting in the negative x-direction (opposing the flow).

**Question 2:**
A 90-degree elbow carries water. The inlet pipe has a diameter of 0.2 m, and the velocity and pressure are 5 m/s and 200 kPa, respectively. The outlet pipe has a diameter of 0.2 m, and the velocity and pressure are 5 m/s and 180 kPa. The elbow is horizontal. Calculate the anchoring forces in the x and y directions required to hold the elbow in place. Assume water density is $1000 \, \text{kg/m}^3$ and neglect the weight of the water. Let the inlet be in the x-direction and the outlet in the y-direction.

**Answer 2:**
*   $D_1 = D_2 = 0.2 \, \text{m}$, $A_1 = A_2 = A = \pi (0.1)^2 = 0.0314 \, \text{m}^2$.
*   $v_1 = 5 \, \text{m/s}$, $P_1 = 200 \, \text{kPa} = 200 \times 10^3 \, \text{Pa}$.
*   $v_2 = 5 \, \text{m/s}$, $P_2 = 180 \, \text{kPa} = 180 \times 10^3 \, \text{Pa}$.
*   $\rho = 1000 \, \text{kg/m}^3$.
*   $\mathbf{v}_1 = 5 \mathbf{i} \, \text{m/s}$, $\mathbf{v}_2 = 5 \mathbf{j} \, \text{m/s}$.
*   $\mathbf{W} = 0$.

Calculate mass flow rate: $\dot{m} = \rho A v = 1000 \times 0.0314 \times 5 = 157 \, \text{kg/s}$.

Force exerted by the fluid on the bend:
$ \mathbf{F}_{\text{fluid on bend}} = \dot{m} \mathbf{v}_1 - \dot{m} \mathbf{v}_2 + P_1 A \mathbf{\hat{n}}_1 + P_2 A \mathbf{\hat{n}}_2 $
where $\mathbf{\hat{n}}_1 = -\mathbf{i}$ and $\mathbf{\hat{n}}_2 = -\mathbf{j}$ (outward normals from the fluid CV).

$ F_{\text{fluid on bend, x}} = \dot{m} v_1 - \dot{m} v_2\cos(90^\circ) + P_1 A (-\cos(0^\circ)) + P_2 A (\cos(90^\circ)) $
$ F_{\text{fluid on bend, x}} = \dot{m} v_1 - 0 + P_1 A (-1) + 0 $
$ F_{\text{fluid on bend, x}} = \dot{m} v_1 - P_1 A $
$ F_{\text{fluid on bend, x}} = (157)(5) - (200 \times 10^3)(0.0314) $
$ F_{\text{fluid on bend, x}} = 785 - 6280 = -5495 \, \text{N} $

$ F_{\text{fluid on bend, y}} = \dot{m} v_1 \sin(0^\circ) - \dot{m} v_2 + P_1 A (\sin(0^\circ)) + P_2 A (-\sin(90^\circ)) $
$ F_{\text{fluid on bend, y}} = 0 - \dot{m} v_2 + 0 + P_2 A (-1) $
$ F_{\text{fluid on bend, y}} = -\dot{m} v_2 - P_2 A $
$ F_{\text{fluid on bend, y}} = -(157)(5) - (180 \times 10^3)(0.0314) $
$ F_{\text{fluid on bend, y}} = -785 - 5652 = -6437 \, \text{N} $

The anchoring force required to hold the bend is equal and opposite to the force exerted by the fluid on the bend.
$ F_{anchor, x} = -F_{\text{fluid on bend, x}} = -(-5495) = 5495 \, \text{N} $ (acting in the positive x-direction)
$ F_{anchor, y} = -F_{\text{fluid on bend, y}} = -(-6437) = 6437 \, \text{N} $ (acting in the positive y-direction)

---

### 6. Important Points to Remember:

*   **Momentum is a vector quantity.**
*   **The momentum equation is a form of Newton's Second Law.**
*   **Control Volume approach is commonly used.**
*   **Carefully define your control volume and the forces acting ON it.**
*   **Ensure consistency in the direction of velocity vectors and area normals.**
*   **For pipe bends, consider momentum change due to velocity and direction change, and pressure forces at inlet/outlet.**
*   **Weight of the fluid can be significant in vertical pipes or for large volumes.**
*   **The anchoring force on a pipe bend is equal and opposite to the force exerted by the fluid on the bend.**
*   **Always check units and dimensions.**
*   **Steady flow simplifies the momentum equation by removing the time-dependent term.**

---
