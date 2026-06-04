---
title: "continuity equation in one, two and three dimensions (include derivation and numerical problems)-4"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f5"
status: "completed"
scrapedAt: "2026-05-20T18:40:33.364Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics
## Topic: Continuity Equation in One, Two, and Three Dimensions

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principle of conservation of mass in fluid dynamics.
*   Derive the continuity equation for one, two, and three-dimensional fluid flow.
*   Apply the continuity equation to analyze various fluid flow scenarios.
*   Solve numerical problems involving the continuity equation.
*   Distinguish between Eulerian and Lagrangian descriptions of fluid motion and their relevance to the continuity equation.

---

### 1. Introduction to Fluid Kinematics and the Continuity Equation

#### 1.1. What is Fluid Kinematics?

*   **Definition:** Fluid kinematics is the branch of fluid mechanics that deals with the *description of fluid motion* without considering the forces that cause the motion. It focuses on the velocity, acceleration, and flow patterns of fluids.
*   **Key Aspects:**
    *   **Velocity Field:** A vector field that describes the velocity of every fluid particle at every point in space and time.
    *   **Acceleration Field:** Derived from the velocity field, describing the acceleration of fluid particles.
    *   **Streamlines, Pathlines, and Streaklines:** Visual representations of fluid flow.

#### 1.2. Methods of Describing Fluid Motion

There are two primary ways to describe fluid motion:

*   **Lagrangian Description:**
    *   **Concept:** Tracks the motion of *individual fluid particles* as they move through space and time.
    *   **Analogy:** Following a specific car on a highway, noting its speed, direction, and acceleration at each moment.
    *   **Variables:** Position and velocity are functions of the initial position of the particle and time ($x_0, y_0, z_0, t$).
    *   **Pros:** Directly describes the trajectory and history of each particle.
    *   **Cons:** Can be complex for turbulent or chaotic flows where tracking individual particles is difficult.

*   **Eulerian Description:**
    *   **Concept:** Focuses on the *fluid properties (velocity, pressure, density) at fixed points in space* as time progresses.
    *   **Analogy:** Standing on a bridge and observing the speed and properties of cars passing by at that specific location.
    *   **Variables:** Velocity, pressure, density are functions of spatial coordinates $(x, y, z)$ and time ($t$).
    *   **Pros:** More convenient for analyzing flow fields and deriving governing equations. Most fluid mechanics problems are solved using the Eulerian approach.
    *   **Cons:** Does not directly provide the path of individual particles.

#### 1.3. The Continuity Equation: Foundation on Conservation of Mass

*   **Fundamental Principle:** The continuity equation is a direct consequence of the **law of conservation of mass**. It states that mass cannot be created or destroyed in a closed system.
*   **Application to Fluids:** For a fluid flowing through a control volume, the rate at which mass enters the volume must equal the rate at which mass leaves the volume, unless there is mass accumulation or depletion within the volume.

---

### 2. Derivation of the Continuity Equation

The derivation of the continuity equation relies on applying the conservation of mass principle to a small control volume. We'll consider both the differential and integral forms.

#### 2.1. Differential Form of the Continuity Equation

This form is derived by considering an infinitesimally small control volume.

**Assumptions:**

*   The fluid is continuous.
*   The principle of conservation of mass holds.

**Derivation (General Tensor Notation - Applicable to 3D):**

Consider a small rectangular control volume with sides $\Delta x$, $\Delta y$, and $\Delta z$ aligned with the coordinate axes.

*   **Mass flow rate:** This is the product of density ($\rho$), velocity component in the direction of flow (e.g., $u$), and the cross-sectional area perpendicular to the flow.

*   **Net mass flow rate out of the control volume:** This is the sum of the net mass flow rates across each pair of opposing faces.

Let's consider the flow in the x-direction:

*   Mass flow rate *in* through the face at $x$: $\rho u \Delta y \Delta z$
*   Mass flow rate *out* through the face at $x + \Delta x$: $\rho u' \Delta y \Delta z$

The net outflow in the x-direction is: $(\rho u' - \rho u) \Delta y \Delta z$.

Using the definition of the partial derivative, the change in mass flow rate in the x-direction over $\Delta x$ is approximately:
$\frac{\partial}{\partial x}(\rho u) \Delta x \Delta y \Delta z$

So, the net outflow in the x-direction is approximately $-\frac{\partial}{\partial x}(\rho u) \Delta x \Delta y \Delta z$.

Repeating this for the y and z directions:
*   Net outflow in y-direction: $-\frac{\partial}{\partial y}(\rho v) \Delta x \Delta y \Delta z$
*   Net outflow in z-direction: $-\frac{\partial}{\partial z}(\rho w) \Delta x \Delta y \Delta z$

The total net mass outflow from the control volume is:
$[-\frac{\partial}{\partial x}(\rho u) - \frac{\partial}{\partial y}(\rho v) - \frac{\partial}{\partial z}(\rho w)] \Delta x \Delta y \Delta z$

The rate of mass accumulation *within* the control volume is:
$\frac{\partial}{\partial t}(\rho \Delta x \Delta y \Delta z) = \frac{\partial \rho}{\partial t} \Delta x \Delta y \Delta z$

By conservation of mass, the net mass outflow must equal the rate of mass accumulation (if it's positive, mass is leaving; if it's negative, mass is entering). So, Net Outflow = - Rate of Accumulation.

Or, Rate of Accumulation + Net Outflow = 0

$\frac{\partial \rho}{\partial t} \Delta x \Delta y \Delta z - [\frac{\partial}{\partial x}(\rho u) + \frac{\partial}{\partial y}(\rho v) + \frac{\partial}{\partial z}(\rho w)] \Delta x \Delta y \Delta z = 0$

Divide by $\Delta x \Delta y \Delta z$ and take the limit as $\Delta x, \Delta y, \Delta z \to 0$:

$$ \frac{\partial \rho}{\partial t} + \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z} = 0 $$

This is the **general differential form of the continuity equation**.

**In vector notation:**
Let $\mathbf{V} = u\mathbf{i} + v\mathbf{j} + w\mathbf{k}$ be the velocity vector.
Then $\nabla \cdot (\rho \mathbf{V}) = \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z}$.
So, the equation becomes:
$$ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{V}) = 0 $$

#### 2.2. Special Cases of the Continuity Equation

*   **Steady Flow:** In steady flow, properties at any point do not change with time. Thus, $\frac{\partial \rho}{\partial t} = 0$.
    *   **General Steady Flow:**
        $$ \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z} = 0 $$
    *   **Incompressible Steady Flow:** For incompressible fluids, density ($\rho$) is constant. This means $\frac{\partial \rho}{\partial x} = \frac{\partial \rho}{\partial y} = \frac{\partial \rho}{\partial z} = 0$.
        We can take $\rho$ out of the derivatives:
        $$ \rho \left( \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} \right) = 0 $$
        Since $\rho \neq 0$, we get:
        $$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 $$
        Or in vector notation:
        $$ \nabla \cdot \mathbf{V} = 0 $$
        This is the continuity equation for **steady, incompressible flow in three dimensions**.

*   **One-Dimensional Flow:**
    *   **Concept:** Assumes that fluid properties vary significantly in only one spatial direction (e.g., along the length of a pipe or channel). Velocity components in other directions are often assumed to be zero or negligible.
    *   **Derivation (for steady, incompressible flow in a pipe/duct):**
        Consider a control volume of a pipe segment with cross-sectional areas $A_1$ and $A_2$ at sections 1 and 2, and average velocities $V_1$ and $V_2$.
        Mass flow rate in = $\rho_1 A_1 V_1$
        Mass flow rate out = $\rho_2 A_2 V_2$
        For steady flow, mass flow rate in = mass flow rate out:
        $$ \rho_1 A_1 V_1 = \rho_2 A_2 V_2 $$
        If the flow is also incompressible ($\rho_1 = \rho_2 = \rho$):
        $$ \rho A_1 V_1 = \rho A_2 V_2 $$
        $$ A_1 V_1 = A_2 V_2 $$
        This is the **continuity equation for steady, one-dimensional, incompressible flow**.
        It can be rewritten as $Q_1 = Q_2$, where $Q = AV$ is the volumetric flow rate.
        **Important Note:** While derived for 1D, this form is often used when considering average properties across a cross-section in 2D or 3D problems.

*   **Two-Dimensional Flow:**
    *   **Concept:** Assumes that fluid properties vary significantly in only two spatial directions (e.g., flow in the xy-plane, with no variation in the z-direction, i.e., $\frac{\partial}{\partial z} = 0$).
    *   **Derivation (for steady, incompressible flow):**
        Starting from the general differential form for incompressible flow:
        $$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 $$
        If the flow is 2D in the xy-plane, then $w=0$ and $\frac{\partial}{\partial z} = 0$.
        So, the equation simplifies to:
        $$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0 $$
        This is the **continuity equation for steady, incompressible flow in two dimensions**.

#### 2.3. Integral Form of the Continuity Equation

This form is derived by applying conservation of mass to a finite control volume.

**Derivation (General):**

Consider an arbitrary control volume $CV$ with surface $CS$.
Rate of mass accumulation within $CV$ = $\frac{d}{dt} \int_{CV} \rho \, d\mathcal{V}$
Net rate of mass outflow across $CS$ = $\int_{CS} (\rho \mathbf{V}) \cdot d\mathbf{A}$

By conservation of mass, the rate of mass accumulation equals the net rate of mass inflow (or negative net rate of outflow).
$\frac{d}{dt} \int_{CV} \rho \, d\mathcal{V} = -\int_{CS} (\rho \mathbf{V}) \cdot d\mathbf{A}$

Rearranging, we get the **general integral form of the continuity equation**:
$$ \frac{d}{dt} \int_{CV} \rho \, d\mathcal{V} + \int_{CS} (\rho \mathbf{V}) \cdot d\mathbf{A} = 0 $$

**Relationship between Differential and Integral Forms:**
The Gauss Divergence Theorem (or Divergence Theorem) relates a volume integral of a divergence to a surface integral of the vector field:
$$ \int_{CS} \mathbf{F} \cdot d\mathbf{A} = \int_{CV} (\nabla \cdot \mathbf{F}) \, d\mathcal{V} $$
Applying this to the surface integral term in the integral continuity equation with $\mathbf{F} = \rho \mathbf{V}$:
$$ \int_{CS} (\rho \mathbf{V}) \cdot d\mathbf{A} = \int_{CV} \nabla \cdot (\rho \mathbf{V}) \, d\mathcal{V} $$
So, the integral form becomes:
$$ \frac{d}{dt} \int_{CV} \rho \, d\mathcal{V} + \int_{CV} \nabla \cdot (\rho \mathbf{V}) \, d\mathcal{V} = 0 $$
Since the control volume $CV$ is fixed, we can bring the time derivative inside the integral:
$$ \int_{CV} \frac{\partial \rho}{\partial t} \, d\mathcal{V} + \int_{CV} \nabla \cdot (\rho \mathbf{V}) \, d\mathcal{V} = 0 $$
$$ \int_{CV} \left( \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{V}) \right) \, d\mathcal{V} = 0 $$
For this integral to be zero for any arbitrary control volume, the integrand must be zero:
$$ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{V}) = 0 $$
This shows that the differential form is indeed derived from the integral form.

---

### 3. Applications and Numerical Problems

The continuity equation is a fundamental tool for analyzing fluid flow.

#### 3.1. Key Concepts for Problem Solving

*   **Volumetric Flow Rate (Q):** The volume of fluid passing through a cross-section per unit time. $Q = AV$ (for uniform flow) or $Q = \int_A \mathbf{V} \cdot d\mathbf{A}$. Units: m³/s or ft³/s.
*   **Mass Flow Rate ($\dot{m}$):** The mass of fluid passing through a cross-section per unit time. $\dot{m} = \rho AV$ (for uniform flow) or $\dot{m} = \int_A \rho (\mathbf{V} \cdot d\mathbf{A})$. Units: kg/s or lb/s.
*   **Steady Flow:** Properties at a point do not change with time. $\frac{\partial}{\partial t} = 0$.
*   **Incompressible Flow:** Density is constant. $\rho = \text{constant}$.
*   **One-Dimensional Flow:** Properties vary along a single direction. Often solved using $A_1V_1 = A_2V_2$ for incompressible flow.
*   **Stream Function ($\psi$):** For 2D incompressible, irrotational flow, the stream function is defined such that the continuity equation is automatically satisfied.
    *   $u = \frac{\partial \psi}{\partial y}$
    *   $v = -\frac{\partial \psi}{\partial x}$
    *   For 2D incompressible flow, $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial}{\partial x}(\frac{\partial \psi}{\partial y}) + \frac{\partial}{\partial y}(-\frac{\partial \psi}{\partial x}) = \frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0$.

#### 3.2. Numerical Problems

**Problem 1: One-Dimensional Steady Incompressible Flow**

**Statement:** Water flows through a pipe that expands from a diameter of 0.1 m to 0.2 m. If the velocity in the smaller section is 2 m/s, what is the velocity in the larger section?

**Solution:**
*   **Identify:** Steady, incompressible flow in a pipe (1D).
*   **Formula:** $A_1 V_1 = A_2 V_2$
*   **Given:**
    *   $D_1 = 0.1$ m, so $R_1 = 0.05$ m. $A_1 = \pi R_1^2 = \pi (0.05)^2 = 0.0025\pi$ m².
    *   $V_1 = 2$ m/s.
    *   $D_2 = 0.2$ m, so $R_2 = 0.1$ m. $A_2 = \pi R_2^2 = \pi (0.1)^2 = 0.01\pi$ m².
*   **Calculate:**
    $V_2 = \frac{A_1 V_1}{A_2} = \frac{(0.0025\pi \text{ m}^2)(2 \text{ m/s})}{(0.01\pi \text{ m}^2)}$
    $V_2 = \frac{0.005\pi}{0.01\pi} \text{ m/s} = 0.5 \text{ m/s}$

**Answer:** The velocity in the larger section is 0.5 m/s.

---

**Problem 2: Steady Flow with Changing Density**

**Statement:** Air flows through a nozzle. At the inlet (section 1), the area is $A_1 = 0.1$ m², the velocity is $V_1 = 10$ m/s, and the density is $\rho_1 = 1.225$ kg/m³. At the outlet (section 2), the area is $A_2 = 0.05$ m² and the density is $\rho_2 = 0.75$ kg/m³. Calculate the velocity $V_2$ at the outlet, assuming steady flow.

**Solution:**
*   **Identify:** Steady flow (possibly compressible, as density changes).
*   **Formula:** $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$
*   **Given:**
    *   $A_1 = 0.1$ m²
    *   $V_1 = 10$ m/s
    *   $\rho_1 = 1.225$ kg/m³
    *   $A_2 = 0.05$ m²
    *   $\rho_2 = 0.75$ kg/m³
*   **Calculate:**
    $V_2 = \frac{\rho_1 A_1 V_1}{\rho_2 A_2} = \frac{(1.225 \text{ kg/m}^3)(0.1 \text{ m}^2)(10 \text{ m/s})}{(0.75 \text{ kg/m}^3)(0.05 \text{ m}^2)}$
    $V_2 = \frac{1.225}{0.0375} \text{ m/s} \approx 32.67 \text{ m/s}$

**Answer:** The velocity at the outlet is approximately 32.67 m/s.

---

**Problem 3: Two-Dimensional Incompressible Flow with Stream Function**

**Statement:** The velocity field for a two-dimensional incompressible flow is given by $u = 2x$ and $v = -2y$.
a) Verify if this flow satisfies the continuity equation.
b) Find the stream function $\psi(x, y)$.

**Solution:**
*   **Identify:** 2D, incompressible flow.
*   **Part a) Verify Continuity:**
    *   **Formula:** $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$
    *   **Given:** $u = 2x$, $v = -2y$
    *   **Calculate:**
        $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(2x) = 2$
        $\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(-2y) = -2$
        $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 2 + (-2) = 0$
    *   **Conclusion:** The flow satisfies the continuity equation.

*   **Part b) Find Stream Function:**
    *   **Definitions:** $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$
    *   **From u:** $2x = \frac{\partial \psi}{\partial y}$
        Integrate with respect to $y$:
        $\psi(x, y) = \int 2x \, dy = 2xy + f(x)$ (where $f(x)$ is an arbitrary function of $x$)
    *   **From v:** $-2y = -\frac{\partial \psi}{\partial x}$  => $2y = \frac{\partial \psi}{\partial x}$
        Differentiate the expression for $\psi$ with respect to $x$:
        $\frac{\partial \psi}{\partial x} = \frac{\partial}{\partial x}(2xy + f(x)) = 2y + f'(x)$
        Equate this to $2y$:
        $2y + f'(x) = 2y$
        $f'(x) = 0$
        Integrate $f'(x)$ to find $f(x)$:
        $f(x) = C$ (where C is an arbitrary constant)
    *   **Combine:**
        $\psi(x, y) = 2xy + C$

**Answer:**
a) The flow satisfies the continuity equation because $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$.
b) The stream function is $\psi(x, y) = 2xy + C$.

---

**Problem 4: Integral Form Application (Conceptual)**

**Statement:** Consider a steady, incompressible flow through a long pipe. If the velocity is uniform across each cross-section, is the volumetric flow rate $Q = AV$ constant along the length of the pipe? Explain using the continuity equation.

**Solution:**
*   **Identify:** Steady, incompressible flow.
*   **Princ:** Conservation of mass.
*   **Applicable Equation (1D, steady, incompressible):** $A_1 V_1 = A_2 V_2$.
*   **Explanation:**
    *   The term $AV$ represents the volumetric flow rate ($Q$).
    *   The equation $A_1 V_1 = A_2 V_2$ states that the volumetric flow rate at section 1 is equal to the volumetric flow rate at section 2.
    *   Since this holds true for any two sections along the pipe, the volumetric flow rate $Q$ is constant throughout the pipe for steady, incompressible flow. This is a direct consequence of mass being conserved and the fluid being incompressible.

**Answer:** Yes, the volumetric flow rate $Q = AV$ is constant along the length of the pipe for steady, incompressible flow.

---

### 4. Important Points to Remember

*   **Conservation of Mass:** The continuity equation is a direct manifestation of the conservation of mass principle.
*   **Eulerian vs. Lagrangian:** The continuity equation is derived and most often applied using the Eulerian description of fluid motion.
*   **Differential vs. Integral Form:** The differential form applies at every point in the flow, while the integral form applies to a finite control volume. The two are related via the Gauss Divergence Theorem.
*   **Incompressible Flow:** For incompressible flow ($\rho = \text{constant}$), the continuity equation simplifies significantly to $\nabla \cdot \mathbf{V} = 0$ in differential form.
*   **Steady Flow:** For steady flow, the time rate of change of density is zero ($\frac{\partial \rho}{\partial t} = 0$), simplifying the general equation.
*   **1D Flow Simplification:** The $A_1V_1 = A_2V_2$ form is a powerful simplification for many practical problems involving pipes and channels, assuming steady, incompressible flow and uniform velocity profiles across sections.
*   **Density Changes:** If density changes significantly (compressible flow), the continuity equation must account for these changes (e.g., $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$).
*   **Stream Function:** Useful for 2D, incompressible, irrotational flows to automatically satisfy continuity.

---

### 5. Practice Questions

1.  **Steady, Incompressible Flow:** Water flows through a horizontal pipe that narrows from a diameter of 15 cm to 5 cm. If the velocity in the wider section is 1 m/s, what is the velocity in the narrower section?
2.  **Compressible Flow:** Air at 15°C and 1 atm enters a diffuser with a velocity of 100 m/s and an area of 0.5 m². At the exit, the velocity is 20 m/s and the area is 1 m². Assuming the flow is steady and isothermal ($T=$ constant), calculate the exit density. (Density of air at 15°C and 1 atm is approximately 1.225 kg/m³).
3.  **2D Flow:** For a 2D incompressible flow, the velocity components are given by $u = x^2 - y^2$ and $v = -2xy$.
    a) Does this velocity field satisfy the continuity equation?
    b) If so, find the stream function $\psi(x, y)$.
4.  **True or False:** The continuity equation is derived from the conservation of momentum.
5.  **Concept Check:** Explain the difference between the Eulerian and Lagrangian descriptions of fluid motion and how each might be used to consider the continuity equation.

---

### Answers to Practice Questions

1.  **Answer:** Let $D_1 = 15$ cm $= 0.15$ m and $V_1 = 1$ m/s. Let $D_2 = 5$ cm $= 0.05$ m and $V_2$ be the velocity in the narrower section.
    $A_1 = \frac{\pi D_1^2}{4} = \frac{\pi (0.15)^2}{4}$
    $A_2 = \frac{\pi D_2^2}{4} = \frac{\pi (0.05)^2}{4}$
    Using $A_1 V_1 = A_2 V_2$:
    $V_2 = V_1 \frac{A_1}{A_2} = V_1 \frac{\pi D_1^2 / 4}{\pi D_2^2 / 4} = V_1 \left(\frac{D_1}{D_2}\right)^2 = 1 \text{ m/s} \left(\frac{0.15 \text{ m}}{0.05 \text{ m}}\right)^2 = 1 \text{ m/s} (3)^2 = 9 \text{ m/s}$.
    **The velocity in the narrower section is 9 m/s.**

2.  **Answer:** For steady, isothermal flow, $\rho_1 T_1 = \rho_2 T_2$. Since $T_1=T_2$, this implies $\rho_1 = \rho_2$. This suggests that the problem might be simplified if the density were constant, but let's use the general mass flow rate equation.
    Mass flow rate = $\rho AV$.
    $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$
    $\rho_2 = \rho_1 \frac{A_1 V_1}{A_2 V_2}$
    $\rho_2 = (1.225 \text{ kg/m}^3) \frac{(0.5 \text{ m}^2)(100 \text{ m/s})}{(1 \text{ m}^2)(20 \text{ m/s})} = 1.225 \frac{50}{20} = 1.225 \times 2.5 = 3.0625 \text{ kg/m}^3$.
    **The exit density is 3.0625 kg/m³.**

3.  **Answer:**
    a) Given $u = x^2 - y^2$ and $v = -2xy$.
    $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(x^2 - y^2) = 2x$
    $\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(-2xy) = -2x$
    $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 2x + (-2x) = 0$.
    **Yes, the velocity field satisfies the continuity equation.**

    b) From $u = \frac{\partial \psi}{\partial y} = x^2 - y^2$:
    $\psi(x, y) = \int (x^2 - y^2) \, dy = x^2 y - \frac{y^3}{3} + f(x)$.
    From $v = -\frac{\partial \psi}{\partial x} = -2xy$:
    $\frac{\partial \psi}{\partial x} = 2xy$.
    Differentiating our $\psi$ with respect to $x$:
    $\frac{\partial \psi}{\partial x} = \frac{\partial}{\partial x}(x^2 y - \frac{y^3}{3} + f(x)) = 2xy + f'(x)$.
    Equating: $2xy + f'(x) = 2xy \implies f'(x) = 0 \implies f(x) = C$.
    **The stream function is $\psi(x, y) = x^2 y - \frac{y^3}{3} + C$.**

4.  **Answer:** **False**. The continuity equation is derived from the conservation of mass. The conservation of momentum leads to the Navier-Stokes equations (or Euler equations for inviscid flow).

5.  **Answer:**
    *   **Eulerian Description:** Focuses on properties at fixed points in space. The continuity equation $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{V}) = 0$ is a statement about the spatial and temporal rates of change of density and velocity *at specific locations*. It's used to analyze the overall flow field.
    *   **Lagrangian Description:** Tracks individual fluid particles. While less common for directly deriving the continuity equation, it implies that the mass of any parcel of fluid remains constant as it moves. If you could track the volume and density of a specific particle over time, their product would remain constant, reflecting conservation of mass. However, the changing shape and orientation of the parcel as it moves make this approach more complex for expressing continuity in a general, usable form for analysis.

---
