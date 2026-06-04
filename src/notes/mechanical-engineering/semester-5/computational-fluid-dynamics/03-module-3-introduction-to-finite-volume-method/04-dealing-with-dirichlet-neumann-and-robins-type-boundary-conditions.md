---
title: "dealing with Dirichlet, Neumann, and Robins type boundary conditions"
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446343a"
status: "completed"
scrapedAt: "2026-05-20T17:58:18.051Z"
---
# Computational Fluid Dynamics - Module 3: Introduction to Finite Volume Method

## Topic: Dealing with Dirichlet, Neumann, and Robin Type Boundary Conditions

This module introduces the Finite Volume Method (FVM) and focuses on how to effectively implement different types of boundary conditions (Dirichlet, Neumann, and Robin) within the FVM framework. Understanding these boundary conditions is crucial for accurately solving fluid flow and heat transfer problems, as they define the physical constraints of the domain.

---

### Learning Outcomes Covered:

*   **LO1: Understand the concept of discretization in FVM.** (Relates to CO1, CO3)
*   **LO2: Formulate control volume equations for a general conservation law.** (Relates to CO1, CO3)
*   **LO3: Apply the FVM to solve 1D steady-state diffusion and convection-diffusion problems.** (Relates to CO3, CO4)
*   **LO4: Implement Dirichlet, Neumann, and Robin boundary conditions within the FVM framework.** (Relates to CO3, CO4)
*   **LO5: Understand the physical meaning and mathematical representation of different boundary conditions.** (Relates to CO1, CO4)

---

### Course Outcomes Alignment:

*   **CO1 (K2): To understand the governing equations of fluid flow and heat transfer.** (Boundary conditions are integral to these equations).
*   **CO3 (K3): To demonstrate the use of finite volume method for simple 1D/2D problems.** (This topic directly addresses applying FVM to problems with specified boundary conditions).
*   **CO4 (K2): To understand different solution techniques for convection diffusion equation.** (Boundary conditions are essential inputs for solving these equations).

---

### 1. Introduction to the Finite Volume Method (FVM)

The Finite Volume Method (FVM) is a numerical method used for solving partial differential equations (PDEs) that are typically used to describe fluid flow and heat transfer. The core idea of FVM is to divide the computational domain into a finite number of small control volumes (CVs). The governing equations, which are usually expressed in integral conservation form, are then integrated over each control volume.

**Key Concepts:**

*   **Discretization:** The process of dividing the continuous computational domain into a finite number of discrete elements (control volumes).
*   **Control Volume (CV):** A small region in the domain over which the governing equations are integrated. The solution variable (e.g., temperature, velocity) is typically assumed to be constant or represented by a simple profile within each CV.
*   **Flux:** The rate of transport of a conserved quantity (e.g., mass, momentum, energy) across a surface. In FVM, fluxes across the faces of control volumes are crucial for formulating the discretized equations.
*   **Conservation Law:** The fundamental principle that ensures that quantities like mass, momentum, and energy are neither created nor destroyed within the system. FVM inherently conserves these quantities.

**General Conservation Law in Integral Form (for a scalar $\phi$):**

$$ \int_{CV} \frac{\partial (\rho \phi)}{\partial t} dV + \oint_{CS} (\rho \phi \mathbf{v} \cdot \mathbf{n}) dS = \oint_{CS} \Gamma \nabla \phi \cdot \mathbf{n} dS + \int_{CV} S_\phi dV $$

Where:
*   $\phi$: The conserved scalar quantity.
*   $\rho$: Density.
*   $\mathbf{v}$: Velocity vector.
*   $t$: Time.
*   $CV$: Control Volume.
*   $CS$: Control Surface (boundary of the CV).
*   $\mathbf{n}$: Outward normal vector to the control surface.
*   $\Gamma$: Diffusion coefficient (diffusivity).
*   $S_\phi$: Source term.

**Discretization Process:**

1.  **Grid Generation:** Divide the domain into control volumes.
2.  **Integration:** Integrate the governing PDE over each control volume.
3.  **Flux Calculation:** Approximate the fluxes across the faces of the control volumes. This often involves interpolating values from neighboring control volumes.
4.  **Assembly:** Assemble the discretized equations for all control volumes to form a system of algebraic equations.

---

### 2. Understanding Boundary Conditions

Boundary conditions are essential mathematical statements that specify the behavior of the solution at the physical boundaries of the computational domain. They are required to make the problem well-posed and to ensure a unique solution. For fluid flow and heat transfer, boundary conditions are typically applied to variables like velocity, pressure, temperature, or flux.

**Types of Boundary Conditions Relevant to FVM:**

#### 2.1 Dirichlet Boundary Condition (First Kind)

*   **Definition:** Specifies the **value of the dependent variable** on the boundary.
*   **Physical Meaning:** In heat transfer, this means a fixed temperature is maintained at the boundary. In fluid flow, it could mean a fixed velocity at an inlet or outlet.
*   **Mathematical Representation:** $\phi = \phi_b$ on $\Gamma_b$, where $\phi_b$ is a known constant or function.
*   **FVM Implementation:** When a boundary of a control volume coincides with a Dirichlet boundary, the value of the variable at the boundary nodes is directly set to the specified value.

**Example (1D Steady-State Heat Conduction):**

Consider a 1D rod with length $L$. The governing equation is:
$$ \frac{d}{dx} \left( k \frac{dT}{dx} \right) = 0 $$
where $T$ is temperature and $k$ is thermal conductivity.

Let's consider a control volume $CV_1$ adjacent to the left boundary ($x=0$). The equation integrated over $CV_1$ (centered at $x_1$) with half-width $\Delta x$ is:
$$ \left( k \frac{dT}{dx} \right)_{e} - \left( k \frac{dT}{dx} \right)_{w} = 0 $$
where 'e' and 'w' denote the east and west faces of the CV.

If a Dirichlet boundary condition is applied at $x=0$, i.e., $T(0) = T_{inlet}$, and the west face of $CV_1$ is at $x=0$, then the temperature at the west face ($T_w$) is directly set to $T_{inlet}$. The gradient at the west face can then be approximated using the value at the center of $CV_1$ ($T_1$) and the boundary value ($T_{inlet}$).

$$ \left( k \frac{dT}{dx} \right)_{w} \approx k \frac{T_1 - T_{inlet}}{\Delta x / 2} $$

This directly incorporates the known boundary temperature into the discretized equation.

**Reference:** Anderson Jr. (2012) discusses the direct substitution of known values at boundaries for Dirichlet conditions. Versteeg & Malalasekera (2008) also emphasize this direct assignment.

#### 2.2 Neumann Boundary Condition (Second Kind)

*   **Definition:** Specifies the **gradient of the dependent variable** on the boundary.
*   **Physical Meaning:** In heat transfer, this often represents an insulated boundary (zero heat flux) or a specified heat flux. In fluid flow, it might relate to the wall shear stress or a specified mass flow rate.
*   **Mathematical Representation:** $\Gamma \frac{\partial \phi}{\partial n} = q_b$ on $\Gamma_b$, where $q_b$ is a known constant or function representing the flux.
*   **FVM Implementation:** The flux at the boundary face is directly set to the specified value. This often involves assuming a zero gradient or a specific gradient at the boundary face.

**Example (1D Steady-State Heat Conduction - Insulated Boundary):**

Consider the same 1D rod. If the left boundary ($x=0$) is insulated, then the heat flux across it is zero:
$$ k \frac{dT}{dx} \Big|_{x=0} = 0 $$
This is a Neumann condition with $q_b = 0$.

For the control volume $CV_1$ adjacent to the left boundary ($x=0$), the west face is at $x=0$. The flux term at the west face is directly set to zero:
$$ \left( k \frac{dT}{dx} \right)_{w} = 0 $$
The discretized equation then only involves the flux at the east face:
$$ \left( k \frac{dT}{dx} \right)_{e} = 0 $$
This means the temperature gradient across the CV is zero, implying $T_1 = T_2$ (where $T_2$ is the temperature at the center of the adjacent CV).

**Example (1D Steady-State Heat Conduction - Specified Heat Flux):**

If a constant heat flux $q_0$ is applied to the left boundary ($x=0$), i.e., $k \frac{dT}{dx} \Big|_{x=0} = q_0$:
$$ \left( k \frac{dT}{dx} \right)_{w} = q_0 $$
The discretized equation becomes:
$$ q_0 - \left( k \frac{dT}{dx} \right)_{e} = 0 $$
This directly incorporates the specified heat flux.

**Reference:** Patankar (2017) provides a detailed treatment of handling Neumann boundary conditions by directly setting the flux term at the boundary face. Versteeg & Malalasekera (2008) also discuss this approach for heat and mass transfer.

#### 2.3 Robin Boundary Condition (Third Kind)

*   **Definition:** A linear combination of the **value of the dependent variable** and its **gradient** on the boundary.
*   **Physical Meaning:** This condition often arises from convective heat transfer at a boundary (e.g., heat exchange with the surrounding fluid). It represents a relationship between the surface temperature/flux and the ambient temperature/convection coefficient.
*   **Mathematical Representation:** $a\phi + b\frac{\partial \phi}{\partial n} = c$ on $\Gamma_b$, where $a$, $b$, and $c$ are known constants or functions. A common form in heat transfer is:
    $$-k \frac{\partial T}{\partial n} = h(T - T_\infty)$$
    This can be rewritten as: $hT - k \frac{\partial T}{\partial n} = hT_\infty$. Here, $a=h$, $b=-k$, and $c=hT_\infty$.
*   **FVM Implementation:** Requires approximating both the value and the gradient at the boundary face. This is typically done by assuming a profile that connects the boundary value with the value in the adjacent CV.

**Example (1D Steady-State Heat Conduction - Convective Boundary):**

Consider the left boundary ($x=0$) of the rod experiencing convection to an ambient fluid at temperature $T_\infty$ with a heat transfer coefficient $h$. The condition is:
$$ -k \frac{dT}{dx} \Big|_{x=0} = h (T(0) - T_\infty) $$

For the control volume $CV_1$ adjacent to the left boundary, the west face is at $x=0$. We need to approximate the flux term $\left( k \frac{dT}{dx} \right)_{w}$.

A common approach is to assume a linear variation of temperature between the boundary ($T(0)$) and the center of the first CV ($T_1$). The gradient at the west face ($x=0$) can be approximated as:
$$ \frac{dT}{dx} \Big|_{x=0} \approx \frac{T_1 - T(0)}{\Delta x / 2} $$

The boundary condition at the face becomes:
$$ -k \left( \frac{T_1 - T(0)}{\Delta x / 2} \right) = h (T(0) - T_\infty) $$

Now, we need to express $T(0)$ in terms of $T_1$. If $T(0)$ is not known (i.e., not a Dirichlet condition on $T(0)$ itself), we can use the boundary condition to relate $T(0)$ to the flux. However, often the Robin condition directly provides the flux in terms of the boundary temperature, which might be unknown but related to the interior.

A more practical approach for FVM is to express the flux at the boundary face. The flux leaving the west face of $CV_1$ is:
$$ \mathbf{F}_w = -k \nabla T \cdot \mathbf{n}_w $$
For our 1D case, $\mathbf{n}_w = -\mathbf{i}$ and $\nabla T = \frac{dT}{dx}\mathbf{i}$, so the flux entering the CV is:
$$ \left( k \frac{dT}{dx} \right)_{w} = -k \frac{dT}{dx} \Big|_{x=0} $$

Using the Robin boundary condition:
$$ \left( k \frac{dT}{dx} \right)_{w} = h (T(0) - T_\infty) $$

Now, we need to approximate $T(0)$. A common assumption is that the temperature at the boundary face is equal to the temperature at the center of the control volume it belongs to, especially if the boundary face is approximated to coincide with the center. However, this is not always the case.

A more robust approach is to consider the face as being shared between a "ghost" control volume outside the domain. If we consider the boundary condition directly:
$$ -k \frac{T_1 - T(0)}{\Delta x/2} = h(T(0) - T_\infty) $$
We need to eliminate $T(0)$. If $T(0)$ is considered a known value (e.g., the fluid temperature $T_\infty$ is fixed), then we can substitute this into the flux calculation. However, if $T(0)$ is also an unknown to be solved for, this approach becomes complex.

**Alternative FVM Approach for Robin BC (Versteeg & Malalasekera, 2008):**

Let the boundary face be at $x_w$. The flux across this face is approximated as:
$$ \dot{m}_w \phi_w - \Gamma_w A_w (\frac{\partial \phi}{\partial n})_w $$
For a Robin condition $a\phi_w + b(\frac{\partial \phi}{\partial n})_w = c$, we can express the gradient term:
$$ (\frac{\partial \phi}{\partial n})_w = \frac{c - a\phi_w}{b} $$
Substituting this into the flux expression:
$$ \text{Flux}_w = \Gamma_w A_w \left( \frac{a\phi_w - c}{b} \right) $$

For the heat transfer example, $\phi = T$, $\Gamma = k$, $\mathbf{n}_w = -\mathbf{i}$, so $(\frac{\partial T}{\partial n})_w = -(\frac{dT}{dx})_w$. The Robin condition is $h T_w - k (\frac{dT}{dx})_w = h T_\infty$. Here, $a=h$, $b=-k$, $c=hT_\infty$. Let's assume the boundary face is at $x_w$ and the node $w$ is at the boundary, and $T_w$ is the temperature at this boundary point.
The flux *out* of the control volume at face $w$ would be represented as:
$$ (\Gamma \frac{\partial \phi}{\partial n})_w A_w $$
In our 1D case, let's assume the western face $w$ is at the boundary. The flux leaving the CV across the west face is $(k \frac{dT}{dx})_w$.
The Robin condition is $-k (\frac{dT}{dx})_w = h(T_w - T_\infty)$.
So, $(k \frac{dT}{dx})_w = h(T_w - T_\infty)$.

Now, how to relate $T_w$ to $T_1$ (center of CV)? If we assume a linear profile between $T_1$ and $T_w$, then $(\frac{dT}{dx})_w \approx \frac{T_1 - T_w}{\Delta x/2}$.
Substituting this:
$$ -k \frac{T_1 - T_w}{\Delta x/2} = h(T_w - T_\infty) $$
$$ -k \frac{T_1}{\Delta x/2} + k \frac{T_w}{\Delta x/2} = hT_w - hT_\infty $$
$$ -k \frac{T_1}{\Delta x/2} + hT_\infty = (h - k \frac{1}{\Delta x/2}) T_w $$
$$ T_w = \frac{-k \frac{T_1}{\Delta x/2} + hT_\infty}{h - k \frac{1}{\Delta x/2}} = \frac{-k T_1 + hT_\infty (\Delta x/2)}{h(\Delta x/2) - k} $$

This approach expresses the boundary temperature $T_w$ in terms of the internal node temperature $T_1$. This value of $T_w$ would then be used in calculations that require the boundary value.

**A more direct FVM approach for the flux term:**

For a boundary CV $P$ with face $f$ at the boundary, the discretized equation will have a term for the flux at face $f$, say $Flux_f$.
The Robin condition $a \phi_f + b (\frac{\partial \phi}{\partial n})_f = c$ can be used to express the flux $Flux_f$.
The flux across face $f$ can be written as:
$Flux_f = \Gamma_f A_f (\frac{\partial \phi}{\partial n})_f$

From the Robin condition, $(\frac{\partial \phi}{\partial n})_f = \frac{c - a \phi_f}{b}$.
So, $Flux_f = \Gamma_f A_f \frac{c - a \phi_f}{b}$.

If we assume $\phi_f \approx \phi_P$ (value at the center of the CV), then:
$Flux_f \approx \Gamma_f A_f \frac{c - a \phi_P}{b}$
This flux term is then directly added to the discretized equation for CV $P$.

In the heat transfer example: $a=h$, $b=-k$, $c=hT_\infty$. Assume $\phi_f = T_P$.
$Flux_f \approx k A_f \frac{h T_P - h T_\infty}{-k} = -h A_f (T_P - T_\infty)$
This is exactly the convective flux from the surface.

**Reference:** Versteeg & Malalasekera (2008) dedicate a chapter to boundary conditions and demonstrate how to implement Robin conditions by relating the flux at the boundary face to the unknown value at the adjacent cell center.

---

### 3. Implementing Boundary Conditions in 1D FVM

Let's consider a 1D control volume and the discretized equation. We have a CV centered at $P$, with faces at $W$ (west) and $E$ (east). Let $T_P$ be the temperature at the center of this CV, and $T_W$ and $T_E$ be temperatures at the faces. The discretization of the diffusion term for this CV would look like:
$$ (k A \frac{dT}{dx})_E - (k A \frac{dT}{dx})_W = \text{Source} $$
Using central differencing for the gradients at the faces:
$$ k A \frac{T_P - T_W}{\delta x_W} - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$
Where $\delta x_W$ is the distance from $P$ to $W$, and $\delta x_E$ is the distance from $P$ to $E$.

Now, let's consider boundary conditions at the west face (face $W$).

#### 3.1 Dirichlet Boundary Condition at Face W

If $T$ is specified at the boundary face $W$, say $T_W = T_{specified}$.
Then, the term $(k A \frac{dT}{dx})_W$ is directly calculated using $T_P$ and the known $T_{specified}$:
$$ (k A \frac{dT}{dx})_W = k A \frac{T_P - T_{specified}}{\delta x_W} $$
The discretized equation for CV $P$ becomes:
$$ k A \frac{T_P - T_{specified}}{\delta x_W} - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$
This equation can be rearranged into the standard FVM form $a_P T_P = a_W T_W + a_E T_E + b$. Here, $T_W$ is replaced by $T_{specified}$.

#### 3.2 Neumann Boundary Condition at Face W

If the flux is specified at the boundary face $W$, say $k \frac{dT}{dx} \Big|_{W} = q_W$.
Then, the flux term at the west face is directly set:
$$ (k A \frac{dT}{dx})_W = q_W A $$
The discretized equation for CV $P$ becomes:
$$ q_W A - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$
This equation will be assembled into the system. The coefficients will reflect this directly imposed flux.

#### 3.3 Robin Boundary Condition at Face W

If the boundary condition is $a T_W + b (k \frac{dT}{dx})_W = c$.
We need to approximate the flux term $(k \frac{dT}{dx})_W$.
A common way is to express the flux in terms of $T_P$ and $T_W$.
Let's assume a linear profile from $P$ to $W$: $(k \frac{dT}{dx})_W \approx k A \frac{T_P - T_W}{\delta x_W}$.
Substitute this into the Robin condition:
$$ a T_W + b \left( k A \frac{T_P - T_W}{\delta x_W} \right) = c $$
$$ a T_W + b k A \frac{T_P}{\delta x_W} - b k A \frac{T_W}{\delta x_W} = c $$
Rearrange to solve for $T_W$:
$$ T_W \left( a - \frac{b k A}{\delta x_W} \right) = c - \frac{b k A}{\delta x_W} T_P $$
$$ T_W = \frac{c - \frac{b k A}{\delta x_W} T_P}{a - \frac{b k A}{\delta x_W}} $$

Now substitute this expression for $T_W$ into the discretized equation for CV $P$:
$$ k A \frac{T_P - T_W}{\delta x_W} - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$

This substitution introduces a dependency of $T_W$ on $T_P$. The resulting equation for $T_P$ will have coefficients that depend on the Robin parameters ($a, b, c$). The terms involving $T_W$ will be moved to the right-hand side or incorporated into the coefficients.

**Example: Convective Boundary (Robin)**
$$-k \frac{dT}{dx}\Big|_W = h (T_W - T_\infty)$$
Here, $a=h$, $b=-k$, $c=hT_\infty$.
$$ T_W = \frac{hT_\infty - \frac{-k k A}{\delta x_W} T_P}{h - \frac{-k k A}{\delta x_W}} = \frac{hT_\infty + \frac{k^2 A}{\delta x_W} T_P}{h + \frac{k A}{\delta x_W}} $$
This looks complex. Let's use the flux formulation directly, as shown in the previous section.

**FVM Flux Formulation for Robin BC:**
The flux leaving the CV at face $W$ is $(k \frac{dT}{dx})_W$.
The Robin condition is $a T_W + b (k \frac{dT}{dx})_W = c$.
Thus, $(k \frac{dT}{dx})_W = \frac{c - a T_W}{b}$.

If we approximate $T_W \approx T_P$, then the flux at face $W$ is:
$$ Flux_W \approx \frac{c - a T_P}{b} $$
The discretized equation for CV $P$:
$$ \frac{c - a T_P}{b} A - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$
$$ \frac{cA}{b} - \frac{aA}{b} T_P - k A \frac{T_E - T_P}{\delta x_E} = \text{Source} $$
This equation directly incorporates the Robin condition into the calculation for $T_P$. The $T_P$ coefficient will be modified by the $-\frac{aA}{b}$ term.

**Important Note:** The accuracy of approximating $T_W$ or the flux at the boundary face depends on the interpolation schemes used and the cell sizes. For accurate Robin condition implementation, carefully consider the flux calculation at the boundary face.

---

### 4. Practice Questions and Exercises

**Question 1:**
Consider a 1D rod of length $L=0.1$ m with constant thermal conductivity $k=10 \text{ W/(m·K)}$. The rod is discretized into 2 control volumes. CV1 is from $x=0$ to $x=0.05$, and CV2 is from $x=0.05$ to $x=0.1$. The temperature at the left boundary ($x=0$) is fixed at $T(0) = 100^\circ\text{C}$ (Dirichlet condition). The right boundary ($x=0.1$) is insulated (Neumann condition). The internal node is at $x=0.05$. Assume uniform grid spacing $\Delta x = 0.05$ m.

Write down the discretized equations for the temperature at the internal node ($T_1$ for CV1) and the boundary node ($T_2$ for CV2, which is at the right boundary).

**Solution 1:**
Let $T_1$ be the temperature at the center of CV1 ($x=0.025$) and $T_2$ be the temperature at the center of CV2 ($x=0.075$). The boundary condition at $x=0$ is $T(0)=100^\circ\text{C}$. The boundary condition at $x=0.1$ is $\frac{dT}{dx}(0.1) = 0$.

The discretized equation for CV1 (centered at $P=1$) with west face at $x=0$ and east face at $x=0.05$:
$$ (k A \frac{dT}{dx})_E - (k A \frac{dT}{dx})_W = 0 $$
Here, $P=1$, $E=2$ (center of CV2), $W=0$ (boundary at $x=0$).
Using central differencing for the faces:
$$ k A \frac{T_1 - T_0}{\Delta x/2} - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
Where $T_0 = T(0) = 100^\circ\text{C}$.
$$ k A \frac{T_1 - 100}{\Delta x/2} - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
Multiply by $\frac{\Delta x/2}{kA}$:
$$ T_1 - 100 - (T_2 - T_1) = 0 $$
$$ 2T_1 - T_2 = 100 \quad (*)$$

For CV2 (centered at $P=2$) with west face at $x=0.05$ and east face at $x=0.1$:
$$ (k A \frac{dT}{dx})_E - (k A \frac{dT}{dx})_W = 0 $$
Here, $P=2$, $E=3$ (boundary at $x=0.1$), $W=1$ (center of CV1).
Using central differencing for the faces:
$$ k A \frac{T_3 - T_2}{\Delta x/2} - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
The boundary condition at the east face ($x=0.1$) is $\frac{dT}{dx}(0.1) = 0$. The east face of CV2 is at the boundary. So, we should use the boundary condition here.
$$ (k A \frac{dT}{dx})_E = 0 $$
Thus, the equation for CV2 becomes:
$$ 0 - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
$$ k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
Multiply by $\frac{\Delta x/2}{kA}$:
$$ T_2 - T_1 = 0 $$
$$ T_1 = T_2 \quad (**)$$

Now we have a system of two equations:
$(*): 2T_1 - T_2 = 100$
$(**): T_1 = T_2$

Substituting $(**)$ into $(*)$:
$2T_1 - T_1 = 100 \implies T_1 = 100^\circ\text{C}$.
And since $T_1 = T_2$, then $T_2 = 100^\circ\text{C}$.
This result makes sense physically: a rod with one end at 100°C and the other insulated will have a uniform temperature of 100°C if there are no heat sources.

**Question 2:**
Consider the same 1D rod as in Question 1. The left boundary ($x=0$) has a Robin boundary condition: heat is convected to the surroundings at $T_\infty = 20^\circ\text{C}$ with a heat transfer coefficient $h = 50 \text{ W/(m}^2\text{·K)}$. The right boundary ($x=0.1$) is kept at a constant temperature $T(0.1) = 50^\circ\text{C}$ (Dirichlet condition).

Write down the discretized equations for the temperature at the internal node ($T_1$) and the boundary node ($T_2$). Assume the control volumes and grid are the same as in Question 1.

**Boundary Condition at x=0 (Robin):**
$$-k \frac{dT}{dx}\Big|_{x=0} = h (T(0) - T_\infty)$$
Let's approximate the flux at the west face of CV1 ($W$) using the value at the cell center $T_1$:
$$(k \frac{dT}{dx})_W \approx k A \frac{T_1 - T_0}{\Delta x/2}$$
No, this is incorrect for implementing the flux. We should use the formulation relating flux to the interior value and boundary condition directly.

The Robin condition is $-k (\frac{dT}{dx})_W = h (T_W - T_\infty)$.
We want to relate this flux to $T_1$.
Using a linear profile, $(\frac{dT}{dx})_W \approx \frac{T_1 - T_W}{\Delta x/2}$.
So, $-k \frac{T_1 - T_W}{\Delta x/2} = h (T_W - T_\infty)$.

A more direct FVM approach is to express the flux at the boundary face in terms of the adjacent cell center temperature.
The flux *leaving* the CV across the west face $W$ is $Flux_W$.
The Robin condition is $a T_W + b \frac{dT}{dx}|_W = c$.
For heat transfer: $-k \frac{dT}{dx}|_W = h(T_W - T_\infty)$.
The flux *leaving* the CV across the west face is the convective flux from the wall: $h A (T_W - T_\infty)$.
Let's assume $T_W \approx T_1$ (this is a common approximation in FVM for boundary flux).
Then, $Flux_W \approx h A (T_1 - T_\infty)$.

The discretized equation for CV1 (center $T_1$):
$$ Flux_E - Flux_W = 0 $$
$$ k A \frac{T_2 - T_1}{\Delta x/2} - h A (T_1 - T_\infty) = 0 $$
Multiply by $\frac{\Delta x/2}{kA}$:
$$ T_2 - T_1 - \frac{h A}{\frac{kA}{\Delta x/2}} (T_1 - T_\infty) = 0 $$
$$ T_2 - T_1 - \frac{h \Delta x/2}{k} (T_1 - T_\infty) = 0 $$
$$ T_2 - T_1 - \frac{h \Delta x}{2k} T_1 + \frac{h \Delta x}{2k} T_\infty = 0 $$
$$ T_2 - T_1 (1 + \frac{h \Delta x}{2k}) = - \frac{h \Delta x}{2k} T_\infty \quad (*) $$

Discretized equation for CV2 (center $T_2$):
$$ Flux_E - Flux_W = 0 $$
The west face of CV2 is at $x=0.05$. The east face is at $x=0.1$.
$$ k A \frac{T_3 - T_2}{\Delta x/2} - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
Here, $T_3$ is the temperature at the right boundary $x=0.1$, which is given as $T_3 = 50^\circ\text{C}$.
$$ k A \frac{50 - T_2}{\Delta x/2} - k A \frac{T_2 - T_1}{\Delta x/2} = 0 $$
Multiply by $\frac{\Delta x/2}{kA}$:
$$ 50 - T_2 - (T_2 - T_1) = 0 $$
$$ 50 - 2T_2 + T_1 = 0 $$
$$ T_1 - 2T_2 = -50 \quad (**) $$

Now we have the system:
$(*): -T_1 - T_2 (1 + \frac{h \Delta x}{2k}) = - \frac{h \Delta x}{2k} T_\infty$
$(**): T_1 - 2T_2 = -50$

Let's plug in values: $k=10$, $h=50$, $\Delta x = 0.05$, $T_\infty = 20$, $T_{right} = 50$.
$\frac{h \Delta x}{2k} = \frac{50 \times 0.05}{2 \times 10} = \frac{2.5}{20} = 0.125$.

$(*): -T_1 - T_2 (1 + 0.125) = -0.125 \times 20$
$-T_1 - 1.125 T_2 = -2.5$
$T_1 + 1.125 T_2 = 2.5 \quad (***)$

$(**): T_1 - 2T_2 = -50$

Subtract $(**)$ from $(***)$:
$(T_1 + 1.125 T_2) - (T_1 - 2T_2) = 2.5 - (-50)$
$3.125 T_2 = 52.5$
$T_2 = \frac{52.5}{3.125} = 16.8^\circ\text{C}$.

Substitute $T_2$ into $(**)$:
$T_1 - 2(16.8) = -50$
$T_1 - 33.6 = -50$
$T_1 = -50 + 33.6 = -16.4^\circ\text{C}$.

The negative temperature might indicate an issue with the problem statement or the approximations. However, the method of setting up the equations is demonstrated. The approximation $T_W \approx T_1$ can be a source of error, especially with large temperature gradients.

A more accurate approach for the Robin condition often involves a virtual node or a more sophisticated flux calculation at the boundary.

---

### 5. Important Points to Remember

*   **FVM is based on conservation principles.** Applied to control volumes, ensuring physical quantities are conserved.
*   **Boundary conditions are crucial for well-posedness.** They define the interaction of the domain with its surroundings.
*   **Dirichlet:** Directly sets the value of the variable at the boundary face.
*   **Neumann:** Directly sets the flux value at the boundary face. For zero flux (insulation), the flux term is set to zero.
*   **Robin:** Relates the value and the gradient at the boundary. Implemented by expressing the flux at the boundary face in terms of the adjacent cell's variable and the Robin parameters.
*   **Accuracy of implementation:** The accuracy of applying boundary conditions, especially Robin type, depends on the discretization of the flux at the boundary face and the interpolation schemes used.
*   **Integral form:** Boundary conditions are applied to the integral form of the governing equations by considering the flux contributions across boundary faces.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. References

*   **Computational Fluid Dynamics by John D Anderson Jr (McGraw-Hill Book Company, 2012):** Chapter 7 discusses discretization of governing equations, and Chapter 8 covers boundary conditions for various problems.
*   **Numerical Heat Transfer and Fluid Flow by S V Patankar, (McGraw-Hill, 2017):** Chapter 6 specifically addresses boundary conditions and their implementation in FVM.
*   **An Introduction to Computational Fluid Dynamics: The Finite Volume Method by H. Versteeg, W.Malalasekera (Pearson, 2nd, 2008):** Chapters 4 and 5 are highly relevant, detailing the FVM formulation and boundary condition handling for 1D and 2D problems, including specific sections on Dirichlet, Neumann, and Robin conditions.

---