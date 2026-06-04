---
title: "General transport equation"
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 1: Introduction to Computational Fluid Dynamics"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463428"
status: "completed"
scrapedAt: "2026-05-20T17:58:06.361Z"
---
# COMPUTATIONAL FLUID DYNAMICS - Module 1: Introduction to CFD

## Topic: General Transport Equation

---

### 1. Introduction to the General Transport Equation

The General Transport Equation is a fundamental concept in CFD that describes the movement and transformation of a conserved quantity (like mass, momentum, or energy) within a fluid. It's a mathematical statement that accounts for the net rate of change of this quantity due to convection, diffusion, and source/sink terms. Understanding this equation is crucial for developing numerical methods to solve fluid flow and heat transfer problems.

**Key Concept:** The General Transport Equation is essentially a statement of conservation for a specific quantity.

**Reference:** Anderson Jr. (2012) Chapter 2, Patankar (2017) Chapter 2, Versteeg & Malalasekera (2008) Chapter 2, Date (2005) Chapter 2.

---

### 2. Governing Principles and Conservation Laws

Fluid flow and heat transfer phenomena are governed by fundamental physical laws that express the conservation of:

*   **Mass:** The total mass of a system remains constant unless acted upon by external forces.
*   **Momentum:** The rate of change of momentum of a fluid element is equal to the sum of forces acting on it (Newton's Second Law).
*   **Energy:** Energy can neither be created nor destroyed, only transformed from one form to another.

These conservation laws form the basis for the governing partial differential equations (PDEs) that describe fluid dynamics and heat transfer. The General Transport Equation is a generalized form that can encompass any of these.

**Alignment with CO1:** "To understand the governing equations of fluid flow and heat transfer." This topic directly addresses this by providing the foundational framework.

---

### 3. Components of the General Transport Equation

The General Transport Equation, in its most general form, can be written as:

$$
\frac{\partial}{\partial t}(\rho \phi) + \nabla \cdot (\rho \mathbf{u} \phi) = \nabla \cdot \left(\Gamma \nabla \phi\right) + S_\phi
$$

Let's break down each term:

*   **$\frac{\partial}{\partial t}(\rho \phi)$ - Transient (Unsteady) Term:**
    *   Represents the rate of change of the quantity $\phi$ per unit volume with time.
    *   $\rho$: Density of the fluid (kg/m³).
    *   $\phi$: The conserved scalar quantity per unit mass (e.g., velocity component, temperature, species concentration).
    *   $\rho \phi$: The quantity $\phi$ per unit volume.
    *   This term is significant for unsteady or time-dependent problems.
    *   **Reference:** Anderson Jr. (2012) Chapter 2.1, Patankar (2017) Chapter 2.1.

*   **$\nabla \cdot (\rho \mathbf{u} \phi)$ - Convection (Advection) Term:**
    *   Represents the net rate at which the quantity $\phi$ is transported by the bulk motion (flow) of the fluid.
    *   $\mathbf{u}$: Velocity vector of the fluid (m/s).
    *   $\rho \mathbf{u} \phi$: The flux of $\phi$ due to convection.
    *   This term describes how $\phi$ is "carried along" by the fluid.
    *   **Reference:** Anderson Jr. (2012) Chapter 2.1, Patankar (2017) Chapter 2.1, Versteeg & Malalasekera (2008) Chapter 2.1.

*   **$\nabla \cdot (\Gamma \nabla \phi)$ - Diffusion Term:**
    *   Represents the net rate at which the quantity $\phi$ is transported due to random molecular motion or turbulent eddies.
    *   $\Gamma$: The diffusion coefficient (e.g., kinematic viscosity for momentum, thermal diffusivity for energy, diffusion coefficient for species). It's a measure of how effectively the quantity diffuses.
    *   $\nabla \phi$: The gradient of the quantity $\phi$, which drives diffusion from regions of high concentration to low concentration.
    *   This term accounts for spreading and smoothing of the quantity $\phi$.
    *   **Reference:** Anderson Jr. (2012) Chapter 2.1, Patankar (2017) Chapter 2.1, Versteeg & Malalasekera (2008) Chapter 2.1.

*   **$S_\phi$ - Source/Sink Term:**
    *   Represents the rate of generation or destruction of the quantity $\phi$ within the control volume.
    *   This term can include various physical processes like chemical reactions, heat generation due to friction, or mass addition.
    *   **Reference:** Anderson Jr. (2012) Chapter 2.1, Patankar (2017) Chapter 2.1, Versteeg & Malalasekera (2008) Chapter 2.1.

**Important Point to Remember:** The General Transport Equation is a PDE that describes the *balance* of a conserved quantity within a control volume.

---

### 4. Special Cases of the General Transport Equation

By substituting specific quantities for $\phi$ and $\Gamma$, the General Transport Equation reduces to well-known physical equations.

#### 4.1. Conservation of Mass (Continuity Equation)

*   **$\phi = 1$ (for incompressible flow) or $\phi = \text{species mass fraction}$ (for compressible flow)**
*   **$\Gamma = 0$ (no diffusion of mass)**
*   **$S_\phi = 0$ (no source/sink of mass)**

For an incompressible fluid ($\rho =$ constant):

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0 \quad \implies \quad \rho \frac{\partial (1)}{\partial t} + \nabla \cdot (\mathbf{u}) = 0 \quad \implies \quad \nabla \cdot \mathbf{u} = 0
$$

For a compressible fluid, the general mass conservation equation is:

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0
$$

**Reference:** Anderson Jr. (2012) Chapter 2.2, Patankar (2017) Chapter 2.2.

#### 4.2. Conservation of Momentum (Navier-Stokes Equations)

The momentum equation is a vector equation, and the General Transport Equation applies to each component of momentum. For a specific component of velocity, say $u$ (x-component):

*   **$\phi = u$**
*   **$\Gamma = \mu$ (dynamic viscosity for Newtonian fluids)**
*   **$S_\phi = -\frac{\partial p}{\partial x} + \frac{\partial}{\partial x}(\sigma_{xx}) + \frac{\partial}{\partial y}(\sigma_{yx}) + \frac{\partial}{\partial z}(\sigma_{zx}) + F_x$** (where $p$ is pressure, $\sigma$ are viscous stresses, and $F_x$ is body force per unit volume).

For a Newtonian fluid with constant viscosity and neglecting body forces, the x-component of momentum equation becomes:

$$
\frac{\partial (\rho u)}{\partial t} + \nabla \cdot (\rho \mathbf{u} u) = \nabla \cdot \left(\mu \nabla u\right) - \frac{\partial p}{\partial x}
$$

This is one of the Navier-Stokes equations. The full Navier-Stokes equations consist of three such equations (for u, v, w velocity components) along with the continuity equation.

**Alignment with CO1:** This shows how the general form leads to specific governing equations.
**Reference:** Anderson Jr. (2012) Chapter 2.3, Patankar (2017) Chapter 2.2.

#### 4.3. Conservation of Energy (Energy Equation)

For thermal energy:

*   **$\phi = T$ (temperature) or $\phi = h$ (enthalpy)**
*   **$\Gamma = \frac{k}{c_p}$ (thermal diffusivity, where $k$ is thermal conductivity and $c_p$ is specific heat capacity at constant pressure)**
*   **$S_\phi =$ Heat generation terms**

The energy equation can be written as:

$$
\frac{\partial (\rho c_p T)}{\partial t} + \nabla \cdot (\rho \mathbf{u} c_p T) = \nabla \cdot \left(k \nabla T\right) + S_T
$$

**Alignment with CO1:** Demonstrates the derivation of the energy equation.
**Reference:** Anderson Jr. (2012) Chapter 2.4, Patankar (2017) Chapter 2.2.

#### 4.4. Conservation of Species (Species Transport Equation)

For a specific chemical species $k$:

*   **$\phi = C_k$ (mass concentration of species k)**
*   **$\Gamma = D_k$ (diffusion coefficient for species k)**
*   **$S_\phi = R_k$ (rate of generation/consumption of species k due to chemical reactions)**

The species transport equation is:

$$
\frac{\partial (\rho C_k)}{\partial t} + \nabla \cdot (\rho \mathbf{u} C_k) = \nabla \cdot \left(D_k \nabla C_k\right) + R_k
$$

**Alignment with CO1:** Shows application to multi-component flows.
**Reference:** Anderson Jr. (2012) Chapter 2.5.

**Important Point to Remember:** All these fundamental equations can be cast into the general transport equation form. This unification is a cornerstone of CFD.

---

### 5. Dimensionality and Coordinate Systems

The General Transport Equation can be expressed in different coordinate systems (Cartesian, cylindrical, spherical) and for different spatial dimensions (1D, 2D, 3D).

*   **1D:**
    $$
    \frac{\partial}{\partial t}(\rho \phi) + \frac{\partial}{\partial x}(\rho u \phi) = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + S_\phi
    $$
    This is common for simple channel flows, heat conduction in a rod, etc.

*   **2D Cartesian:**
    $$
    \frac{\partial}{\partial t}(\rho \phi) + \frac{\partial}{\partial x}(\rho u \phi) + \frac{\partial}{\partial y}(\rho v \phi) = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + \frac{\partial}{\partial y}\left(\Gamma \frac{\partial \phi}{\partial y}\right) + S_\phi
    $$
    Used for flows in planes, heat transfer on flat surfaces.

*   **3D Cartesian:**
    $$
    \frac{\partial}{\partial t}(\rho \phi) + \frac{\partial}{\partial x}(\rho u \phi) + \frac{\partial}{\partial y}(\rho v \phi) + \frac{\partial}{\partial z}(\rho w \phi) = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + \frac{\partial}{\partial y}\left(\Gamma \frac{\partial \phi}{\partial y}\right) + \frac{\partial}{\partial z}\left(\Gamma \frac{\partial \phi}{\partial z}\right) + S_\phi
    $$
    Represents general 3D flows.

**Reference:** Versteeg & Malalasekera (2008) Chapter 2.2, Date (2005) Chapter 2.

**Alignment with CO2 & CO3:** Understanding these forms is a precursor to applying numerical methods like Finite Difference and Finite Volume to these equations.

---

### 6. Importance in CFD

The General Transport Equation is the backbone of CFD because:

*   **Unified Framework:** It provides a single mathematical framework to describe a wide range of physical phenomena.
*   **Numerical Discretization:** It can be discretized into algebraic equations using various numerical methods (Finite Difference, Finite Volume, Finite Element), which can then be solved by computers.
*   **Basis for Algorithms:** CFD codes are built around solving these discretized equations.
*   **Understanding Physical Processes:** It helps in understanding the relative importance of convection, diffusion, and source terms in different flow regimes.

**Alignment with CO4:** Understanding the components of the general transport equation is key to understanding solution techniques for the convection-diffusion equation.
**Alignment with CO2 & CO3:** The discretization of this equation into algebraic forms is what allows for numerical solutions.

---

### 7. Practice Questions and Exercises

**Question 1:**
Write down the General Transport Equation in its most general vector form. Identify and explain each term.

**Answer 1:**
The General Transport Equation is:
$$
\frac{\partial}{\partial t}(\rho \phi) + \nabla \cdot (\rho \mathbf{u} \phi) = \nabla \cdot \left(\Gamma \nabla \phi\right) + S_\phi
$$
*   **$\frac{\partial}{\partial t}(\rho \phi)$:** Transient term, rate of change of the quantity $\phi$ per unit volume with time.
*   **$\nabla \cdot (\rho \mathbf{u} \phi)$:** Convection term, transport of $\phi$ due to fluid motion.
*   **$\nabla \cdot \left(\Gamma \nabla \phi\right)$:** Diffusion term, transport of $\phi$ due to random molecular motion or turbulence.
*   **$S_\phi$:** Source/Sink term, rate of generation or destruction of $\phi$.

---

**Question 2:**
How does the General Transport Equation simplify for the steady-state conservation of mass for an incompressible fluid?

**Answer 2:**
For steady-state ($\frac{\partial}{\partial t} = 0$) and incompressible fluid ($\rho =$ constant), with no diffusion of mass ($\Gamma = 0$) and no source/sink of mass ($S_\phi = 0$), and $\phi = 1$ (representing mass conservation), the equation becomes:
$$
0 + \nabla \cdot (\rho \mathbf{u} \cdot 1) = 0 + 0
$$
$$
\nabla \cdot (\rho \mathbf{u}) = 0
$$
Since $\rho$ is constant:
$$
\rho \nabla \cdot \mathbf{u} = 0 \quad \implies \quad \nabla \cdot \mathbf{u} = 0
$$
This is the incompressible continuity equation.

---

**Question 3:**
Identify the quantity represented by $\phi$, the diffusion coefficient $\Gamma$, and the typical source term $S_\phi$ for the energy equation.

**Answer 3:**
*   **$\phi$**: Typically Temperature ($T$) or Enthalpy ($h$).
*   **$\Gamma$**: Thermal Diffusivity ($\alpha = \frac{k}{c_p}$), where $k$ is thermal conductivity and $c_p$ is specific heat capacity.
*   **$S_\phi$**: Heat generation rate per unit volume (e.g., from viscous dissipation, electrical heating, nuclear reactions).

---

**Question 4:**
Consider a 1D steady-state diffusion problem with no convection or source terms. Write the simplified General Transport Equation.

**Answer 4:**
The General Transport Equation is:
$$
\frac{\partial}{\partial t}(\rho \phi) + \frac{\partial}{\partial x}(\rho u \phi) = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + S_\phi
$$
For steady-state ($\frac{\partial}{\partial t} = 0$), no convection ($u=0$), and no source terms ($S_\phi = 0$):
$$
0 + 0 = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + 0
$$
$$
\frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) = 0
$$

---

**Question 5:**
In the context of the General Transport Equation, what physical phenomena does the convection term describe?

**Answer 5:**
The convection term, $\nabla \cdot (\rho \mathbf{u} \phi)$, describes the transport of the conserved quantity $\phi$ due to the bulk movement or flow of the fluid. It's how the quantity is "carried along" by the fluid.

---

### 8. Summary and Key Takeaways

*   The General Transport Equation is a fundamental PDE representing the conservation of a scalar quantity.
*   It comprises four key terms: transient, convection, diffusion, and source/sink.
*   It serves as a unifying framework from which specific governing equations (mass, momentum, energy, species) can be derived.
*   Understanding the components of this equation is essential for grasping how fluid flow and heat transfer phenomena are modeled and subsequently solved numerically.
*   The equation can be adapted for different dimensions and coordinate systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Further Reading/References

*   **Anderson Jr., J. D. (2012).** *Computational Fluid Dynamics*. McGraw-Hill Book Company. (Chapters 2)
*   **Patankar, S. V. (2017).** *Numerical Heat Transfer and Fluid Flow*. McGraw-Hill. (Chapters 2)
*   **Versteeg, H., & Malalasekera, W. (2008).** *An Introduction to Computational Fluid Dynamics: The Finite Volume Method*. Pearson. (Chapters 2)
*   **Date, A. W. (2005).** *Introduction to computational fluid dynamics*. Cambridge University Press. (Chapters 2)

---
This concludes the study notes for the General Transport Equation. Please refer to the listed textbooks for more detailed explanations and examples.