---
title: "heat flow in a bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463858"
status: "completed"
scrapedAt: "2026-05-20T18:04:08.233Z"
---
# Finite Element Methods: Module 4 - Strong and Weak Forms

## Topic: Heat Flow in a Bar

### Introduction

This module delves into the fundamental concepts of formulating governing equations for physical phenomena using Finite Element Methods (FEM). We will focus on deriving the strong and weak forms of the governing equation for one-dimensional heat flow in a bar. This understanding is crucial for applying FEM to a wide range of engineering problems.

**Knowledge Level Alignment:**
*   **CO1 (K2):** Understanding governing equations of physical phenomena.

### Governing Equation for Heat Flow in a Bar

We consider a one-dimensional bar of length $L$, with cross-sectional area $A$ and thermal conductivity $k$. Heat flow is driven by a temperature gradient.

#### 1. Conservation of Energy (Mathematical Model)

The fundamental principle governing heat flow is the conservation of energy. Consider a small differential element of the bar with length $dx$.

*   **Heat flow into the element at $x$:** $q(x) = -kA \frac{dT}{dx}$
    *   Where $T$ is temperature and $\frac{dT}{dx}$ is the temperature gradient. The negative sign indicates heat flows from higher to lower temperature. (Reddy, 3rd Ed., Chapter 2)
*   **Heat flow out of the element at $x+dx$:** $q(x+dx) = q(x) + \frac{dq}{dx} dx$

*   **Heat generated within the element:** $Q(x) dx$, where $Q(x)$ is the volumetric heat generation rate.
*   **Change in internal energy:** $\rho A c \frac{\partial T}{\partial t} dx$, where $\rho$ is density and $c$ is specific heat capacity. This term accounts for transient heat storage.

Applying the conservation of energy principle to the differential element:

**Rate of Energy In - Rate of Energy Out + Rate of Energy Generation = Rate of Energy Accumulation**

$q(x) - q(x+dx) + Q(x) dx = \rho A c \frac{\partial T}{\partial t} dx$

Substituting $q(x+dx) = q(x) + \frac{dq}{dx} dx$:

$q(x) - (q(x) + \frac{dq}{dx} dx) + Q(x) dx = \rho A c \frac{\partial T}{\partial t} dx$

$-\frac{dq}{dx} dx + Q(x) dx = \rho A c \frac{\partial T}{\partial t} dx$

Dividing by $dx$:

$-\frac{dq}{dx} + Q(x) = \rho A c \frac{\partial T}{\partial t}$

Now, substitute the expression for heat flux $q(x) = -kA \frac{dT}{dx}$:

$-\frac{d}{dx} \left(-kA \frac{dT}{dx}\right) + Q(x) = \rho A c \frac{\partial T}{\partial t}$

If $k$ and $A$ are constant along the bar:

$kA \frac{d^2 T}{dx^2} + Q(x) = \rho A c \frac{\partial T}{\partial t}$

This is the general governing differential equation for transient heat conduction in a one-dimensional bar.

**For Steady-State Heat Flow:**
If the temperature does not change with time, $\frac{\partial T}{\partial t} = 0$.
The equation simplifies to:

$kA \frac{d^2 T}{dx^2} + Q(x) = 0$

or

$\frac{d^2 T}{dx^2} + \frac{Q(x)}{kA} = 0$

**For Steady-State Heat Flow with No Heat Generation ($Q(x) = 0$):**

$\frac{d^2 T}{dx^2} = 0$

This is a very simple second-order ordinary differential equation.

**Key Concepts:**
*   **Thermal Conductivity ($k$):** A material property representing its ability to conduct heat.
*   **Cross-sectional Area ($A$):** The area perpendicular to the direction of heat flow.
*   **Heat Flux ($q$):** The rate of heat transfer per unit area.
*   **Temperature Gradient ($\frac{dT}{dx}$):** The rate of change of temperature with respect to position.
*   **Heat Generation Rate ($Q$):** Heat produced internally per unit volume.
*   **Density ($\rho$):** Mass per unit volume.
*   **Specific Heat Capacity ($c$):** The amount of heat required to raise the temperature of a unit mass by one degree.

**Reference:** Reddy, 3rd Ed., Chapter 2; Cook, 3rd Ed., Chapter 2.

### Strong Form of the Governing Equation

The "strong form" of a differential equation is the equation itself, requiring continuity of the derivatives present in the equation. For heat flow in a bar, the strong form is the differential equation we derived.

**For Steady-State Heat Flow with No Heat Generation:**

$\frac{d^2 T}{dx^2} = 0$, for $0 < x < L$

**Boundary Conditions:**
To solve this differential equation, we need boundary conditions. For heat flow, these typically involve temperature or heat flux at the ends of the bar.

*   **Dirichlet Boundary Condition (Prescribed Temperature):**
    *   At $x=0$, $T(0) = T_0$ (fixed temperature)
    *   At $x=L$, $T(L) = T_L$ (fixed temperature)

*   **Neumann Boundary Condition (Prescribed Heat Flux):**
    *   At $x=0$, $-kA \frac{dT}{dx}|_{x=0} = q_0$ (prescribed heat flux into the bar)
    *   At $x=L$, $-kA \frac{dT}{dx}|_{x=L} = q_L$ (prescribed heat flux into the bar)
        *   Note: A positive $q_0$ means heat is entering the bar at $x=0$.

*   **Robin Boundary Condition (Convection):**
    *   At $x=0$, $-kA \frac{dT}{dx}|_{x=0} = h_0 (T(0) - T_{\infty,0})$ (convection to ambient)
    *   Where $h_0$ is the convection heat transfer coefficient and $T_{\infty,0}$ is the ambient temperature.

**The strong form must satisfy the differential equation in the interior of the domain and the specified boundary conditions.**

**Example (Strong Form):**
Consider a bar of length $L$ with constant thermal conductivity $k$ and area $A$. The bar has no heat generation ($Q=0$). The left end is held at a constant temperature $T_0$, and the right end has a heat flux of $q_L$ entering the bar.

*   **Strong Form:**
    *   $\frac{d^2 T}{dx^2} = 0$, for $0 < x < L$
    *   $T(0) = T_0$ (Dirichlet BC)
    *   $-kA \frac{dT}{dx}|_{x=L} = q_L$ (Neumann BC)

Solving this:
Integrate $\frac{d^2 T}{dx^2} = 0$ twice:
$\frac{dT}{dx} = C_1$
$T(x) = C_1 x + C_2$

Apply BC at $x=0$:
$T(0) = C_1(0) + C_2 = T_0 \Rightarrow C_2 = T_0$
So, $T(x) = C_1 x + T_0$

Apply BC at $x=L$:
$-kA \frac{d}{dx}(C_1 x + T_0)|_{x=L} = q_L$
$-kA (C_1)|_{x=L} = q_L$
$-kAC_1 = q_L \Rightarrow C_1 = -\frac{q_L}{kA}$

The solution is: $T(x) = -\frac{q_L}{kA} x + T_0$

**Important Point:** The strong form of the equation requires the second derivative of the temperature, which means we are looking for a solution that is at least twice continuously differentiable.

### Weak Form of the Governing Equation

The "weak form" of a differential equation is derived using the method of weighted residuals, specifically by integrating the strong form by parts. This process reduces the order of the derivatives required for the solution, allowing for solutions with lower continuity (e.g., once continuously differentiable). This is crucial for FEM, where we approximate the solution using piecewise polynomial functions.

**Derivation using Weighted Residuals (Galerkin Method):**

We aim to find a solution $T(x)$ such that it satisfies the strong form of the equation and the boundary conditions. The weighted residual method seeks a solution that minimizes the "residual" (the error) in a weighted average sense.

Let $R(x)$ be the residual of the differential equation. For steady-state heat flow with no generation:

Strong form: $\frac{d^2 T}{dx^2} = 0$
Residual: $R(x) = \frac{d^2 T}{dx^2}$

The weighted residual statement is:
$\int_{0}^{L} w(x) R(x) dx = 0$
Where $w(x)$ is a weight function.

Using the Galerkin method, the weight function $w(x)$ is chosen to be the same as the trial/approximation function. For FEM, these are typically the basis or shape functions.

$\int_{0}^{L} w(x) \frac{d^2 T}{dx^2} dx = 0$

Now, we use integration by parts to reduce the order of the derivative. The integration by parts formula is:
$\int_{a}^{b} u dv = [uv]_{a}^{b} - \int_{a}^{b} v du$

Let $u = w(x)$ and $dv = \frac{d^2 T}{dx^2} dx$.
Then $du = \frac{dw}{dx} dx$ and $v = \frac{dT}{dx}$.

$\int_{0}^{L} w(x) \frac{d^2 T}{dx^2} dx = \left[ w(x) \frac{dT}{dx} \right]_{0}^{L} - \int_{0}^{L} \frac{dT}{dx} \frac{dw}{dx} dx = 0$

$\left[ w(L) \frac{dT}{dx}|_{x=L} - w(0) \frac{dT}{dx}|_{x=0} \right] - \int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = 0$

Rearranging:
$\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = \left[ w(L) \frac{dT}{dx}|_{x=L} - w(0) \frac{dT}{dx}|_{x=0} \right]$

This is the weak form. The terms involving the derivative of $T$ are now first-order. The terms on the right-hand side involve the derivative of $T$ (heat flux) and the weight function, which can be related to the boundary conditions.

**Incorporating Boundary Conditions into the Weak Form:**

We need to relate the boundary terms to the specified boundary conditions.

1.  **Dirichlet BC (e.g., $T(0) = T_0$):** For the Galerkin method, the weight function $w(x)$ must be zero at the boundary where $T$ is specified. So, $w(0)=0$ and $w(L)=0$ if both ends have Dirichlet BCs. This means the boundary terms vanish automatically if the weight function is zero at those boundaries.

2.  **Neumann BC (e.g., $-kA \frac{dT}{dx}|_{x=0} = q_0$):**
    From the weak form: $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = w(L) \frac{dT}{dx}|_{x=L} - w(0) \frac{dT}{dx}|_{x=0}$

    Let's consider the case with the Neumann BC at $x=0$: $-kA \frac{dT}{dx}|_{x=0} = q_0$, so $\frac{dT}{dx}|_{x=0} = -\frac{q_0}{kA}$.
    The weak form becomes:
    $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = w(L) \frac{dT}{dx}|_{x=L} - w(0) (-\frac{q_0}{kA})$
    $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = w(L) \frac{dT}{dx}|_{x=L} + w(0) \frac{q_0}{kA}$

    The term $w(0) \frac{q_0}{kA}$ explicitly includes the Neumann boundary condition. For Galerkin, $w(0)=0$ if $T(0)$ is specified, which means the Neumann condition should be applied at $x=L$ if $T(0)$ is known.

    Let's re-evaluate the integration by parts term:
    $\left[ w(x) \frac{dT}{dx} \right]_{0}^{L} = w(L) \frac{dT}{dx}|_{x=L} - w(0) \frac{dT}{dx}|_{x=0}$

    We can rewrite the heat flux using the negative sign: $q(x) = -kA \frac{dT}{dx}$.
    So, $\frac{dT}{dx} = -\frac{q(x)}{kA}$.

    The boundary term becomes:
    $\left[ w(L) (-\frac{q(L)}{kA}) - w(0) (-\frac{q(0)}{kA}) \right]$
    $= -\frac{1}{kA} [w(L) q(L) - w(0) q(0)]$

    The weak form is:
    $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx - \frac{1}{kA} [w(L) q(L) - w(0) q(0)] = 0$

    Now, consider boundary conditions:
    *   If $T(0) = T_0$ (Dirichlet): Choose $w(0) = 0$.
    *   If $-kA \frac{dT}{dx}|_{x=0} = q_0$ (Neumann): Substitute $q(0) = q_0$.
        $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx - \frac{1}{kA} [w(L) q(L) - w(0) q(0)] = 0$

    Let's consider a common FEM scenario where we have a Dirichlet BC at one end and a Neumann BC at the other.
    Bar with $T(0) = T_0$ and $-kA \frac{dT}{dx}|_{x=L} = q_L$.

    For this, $w(0)=0$. The weak form becomes:
    $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = \frac{1}{kA} [w(L) q(L) - w(0) q(0)]$
    Since $w(0)=0$:
    $\int_{0}^{L} \frac{dw}{dx} \frac{dT}{dx} dx = \frac{1}{kA} w(L) q(L)$

    This looks incomplete. Let's be more precise with the integration by parts.
    Start with the strong form: $\frac{d^2 T}{dx^2} = 0$. Multiply by $w$: $w \frac{d^2 T}{dx^2} = 0$. Integrate over $L$: $\int_0^L w \frac{d^2 T}{dx^2} dx = 0$.
    Integration by parts:
    $\int_0^L w \frac{d^2 T}{dx^2} dx = \left[ w \frac{dT}{dx} \right]_0^L - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$
    $w(L) \frac{dT}{dx}|_L - w(0) \frac{dT}{dx}|_0 - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$

    Now, substitute boundary conditions for heat flux: $q = -kA \frac{dT}{dx}$.
    So, $\frac{dT}{dx} = -\frac{q}{kA}$.
    $w(L) (-\frac{q_L}{kA}) - w(0) (-\frac{q_0}{kA}) - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$
    $-\frac{w(L) q_L}{kA} + \frac{w(0) q_0}{kA} - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$

    Rearranging the integral term:
    $\int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = \frac{w(0) q_0}{kA} - \frac{w(L) q_L}{kA}$

    This is the weak form.

    **Case 1: Dirichlet BCs at both ends ($T(0)=T_0$, $T(L)=T_L$)**
    For these, $w(0)=0$ and $w(L)=0$. The weak form becomes:
    $\int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$
    This is the form used when approximating $T$ with shape functions $\phi_i$, where $w$ becomes $\phi_i$.

    **Case 2: Neumann BCs at both ends ($q_0$, $q_L$ specified)**
    The weak form is:
    $\int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = \frac{w(0) q_0}{kA} - \frac{w(L) q_L}{kA}$
    This form is used when the boundary conditions are natural (Neumann type).

    **Case 3: Mixed BCs ($T(0)=T_0$, $-kA \frac{dT}{dx}|_L = q_L$)**
    Here, $w(0)=0$. The term with $w(0)q_0$ vanishes.
    $\int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = - \frac{w(L) q_L}{kA}$
    This is the common form for heat conduction problems in FEM.

**Key Concepts:**
*   **Weighted Residuals:** Minimizing the error (residual) of the governing equation in an averaged sense using a weighting function.
*   **Galerkin Method:** A specific type of weighted residual method where the weight function is the same as the approximation (shape) function.
*   **Integration by Parts:** A mathematical technique used to reduce the order of derivatives in the differential equation, leading to the weak form.
*   **Weak Solution:** A solution that satisfies the weak form of the differential equation. These solutions are less restrictive on differentiability.
*   **Natural Boundary Conditions:** Boundary conditions that arise naturally from the integration by parts procedure (e.g., Neumann, Robin). They do not require special treatment during the discretization process.
*   **Essential Boundary Conditions:** Boundary conditions that must be imposed directly on the approximated solution (e.g., Dirichlet). These are enforced by setting the appropriate degrees of freedom.

**Reference:** Reddy, 3rd Ed., Chapter 5 (Weighted Residual Methods); Cook, 3rd Ed., Chapter 5 (Virtual Work and Variational Methods); Bhavikatti, 3rd Ed., Chapter 4 (Finite Element Formulation).

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding governing equations and the derivation of weak forms.

### Finite Element Discretization of the Weak Form

The weak form is the basis for FEM. The bar is divided into smaller elements. Within each element, the temperature is approximated using shape functions.

Let $T(x) \approx \hat{T}(x) = \sum_{i=1}^{n} N_i(x) T_i$, where $N_i(x)$ are the shape functions and $T_i$ are the nodal temperatures.
The weight function $w(x)$ is also expressed in terms of these shape functions. In the Galerkin method, $w(x) = N_j(x)$ for $j=1, \dots, n$.

Substituting these into the weak form:
$\int_0^L \frac{d N_j}{dx} \frac{d}{dx} \left( \sum_{i=1}^{n} N_i T_i \right) dx = \text{Boundary Term}$

$\sum_{i=1}^{n} \left( \int_0^L \frac{d N_j}{dx} \frac{d N_i}{dx} dx \right) T_i = \text{Boundary Term}$

This can be written in matrix form:

$\sum_{i=1}^{n} [K_{ji}] T_i = \{F_j\}$

Where:
*   $[K_{ji}] = \int_0^L \frac{d N_j}{dx} \frac{d N_i}{dx} dx$ is the element stiffness matrix component.
*   $\{F_j\}$ represents the contributions from the boundary terms.

**Example: Single Element (Bar of length $l$)**

Consider a bar discretized into a single element of length $l$. Let's use linear shape functions:
$N_1(\xi) = \frac{1-\xi}{2}$ and $N_2(\xi) = \frac{1+\xi}{2}$, where $\xi$ is the natural coordinate $-1 \le \xi \le 1$.
The relationship between $x$ and $\xi$ is $x = \frac{l}{2}(1+\xi)$, so $dx = \frac{l}{2} d\xi$.
$\frac{d}{dx} = \frac{d}{d\xi} \frac{d\xi}{dx} = \frac{d}{d\xi} (\frac{2}{l})$.

Let's use the weak form: $\int_0^l \frac{dw}{dx} \frac{dT}{dx} dx = \text{Boundary Term}$.

For a single element, $w$ can be $N_1$ or $N_2$. Let's choose $N_j$.
$\int_0^l \frac{d N_j}{dx} \frac{d N_i}{dx} dx$ for $i, j = 1, 2$.

$\frac{d N_1}{dx} = \frac{d}{d\xi}(\frac{1-\xi}{2}) \frac{d\xi}{dx} = -\frac{1}{2} \cdot \frac{2}{l} = -\frac{1}{l}$
$\frac{d N_2}{dx} = \frac{d}{d\xi}(\frac{1+\xi}{2}) \frac{d\xi}{dx} = \frac{1}{2} \cdot \frac{2}{l} = \frac{1}{l}$

The stiffness matrix $[K]$ components:
$K_{11} = \int_0^l (-\frac{1}{l}) (-\frac{1}{l}) dx = \int_0^l \frac{1}{l^2} dx = \frac{1}{l^2} [x]_0^l = \frac{1}{l^2} \cdot l = \frac{1}{l}$
$K_{12} = \int_0^l (-\frac{1}{l}) (\frac{1}{l}) dx = \int_0^l -\frac{1}{l^2} dx = -\frac{1}{l^2} [x]_0^l = -\frac{1}{l^2} \cdot l = -\frac{1}{l}$
$K_{21} = \int_0^l (\frac{1}{l}) (-\frac{1}{l}) dx = \int_0^l -\frac{1}{l^2} dx = -\frac{1}{l}$
$K_{22} = \int_0^l (\frac{1}{l}) (\frac{1}{l}) dx = \int_0^l \frac{1}{l^2} dx = \frac{1}{l}$

So, the element stiffness matrix for heat conduction in a bar is:
$[K^{(e)}] = \frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
(Note: The original derivation was missing the $kA$ term, as it was assumed constant. Let's re-insert it properly)

Let's redo with $k, A$ constants:
$[K_{ji}] = \int_0^l \frac{d N_j}{dx} (kA) \frac{d N_i}{dx} dx$
$K_{11} = \int_0^l (-\frac{1}{l}) (kA) (-\frac{1}{l}) dx = \frac{kA}{l^2} \int_0^l dx = \frac{kA}{l^2} \cdot l = \frac{kA}{l}$
$K_{12} = \int_0^l (-\frac{1}{l}) (kA) (\frac{1}{l}) dx = -\frac{kA}{l^2} \int_0^l dx = -\frac{kA}{l^2} \cdot l = -\frac{kA}{l}$
$K_{21} = \int_0^l (\frac{1}{l}) (kA) (-\frac{1}{l}) dx = -\frac{kA}{l^2} \int_0^l dx = -\frac{kA}{l^2} \cdot l = -\frac{kA}{l}$
$K_{22} = \int_0^l (\frac{1}{l}) (kA) (\frac{1}{l}) dx = \frac{kA}{l^2} \int_0^l dx = \frac{kA}{l^2} \cdot l = \frac{kA}{l}$

So, the element stiffness matrix is:
$[K^{(e)}] = \frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

This is a crucial result for analyzing heat conduction in bars using FEM.

**Boundary Term Contribution:**
For the case: $T(0)=T_0$, $-kA \frac{dT}{dx}|_L = q_L$.
The weak form was: $\int_0^L \frac{d N_j}{dx} \frac{d T}{dx} dx = - \frac{1}{kA} N_j(L) q_L$.
This gives $\sum_{i=1}^{n} [K_{ji}] T_i = \{F_j\}$, where $\{F_j\} = - \frac{1}{kA} N_j(L) q_L$.

For a single element with nodes 1 and 2 (at $x=0$ and $x=l$ respectively), and $T(0)=T_0$, $T(l)=T_l$:
The shape functions are $N_1(0)=1, N_2(0)=0$ and $N_1(l)=0, N_2(l)=1$.
The weak form for $j=1$ (node 1):
$\int_0^l \frac{d N_1}{dx} \frac{d T}{dx} dx = - \frac{1}{kA} N_1(l) q_L$
$K_{11} T_1 + K_{12} T_2 = - \frac{1}{kA} (0) q_L = 0$

For $j=2$ (node 2):
$\int_0^l \frac{d N_2}{dx} \frac{d T}{dx} dx = - \frac{1}{kA} N_2(l) q_L$
$K_{21} T_1 + K_{22} T_2 = - \frac{1}{kA} (1) q_L = -\frac{q_L}{kA}$

The system of equations for the element is:
$\frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} T_1 \\ T_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ -q_L/kA \end{Bmatrix}$

The Dirichlet condition $T(0)=T_0$ means $T_1 = T_0$. We substitute this into the first equation:
$\frac{kA}{l} (T_1 - T_2) = 0$
Since $T_1=T_0$, $\frac{kA}{l} (T_0 - T_2) = 0$. Since $kA/l \neq 0$, this implies $T_0 = T_2$, which is unlikely unless $q_L=0$ and $T_0=T_L$. This highlights the need to handle Dirichlet conditions by modifying the system, not just by substitution into the weak form.

**Correct Treatment of Dirichlet BCs:**
For a Dirichlet BC $T_k = T_{specified}$, we enforce this value. The equation for row $k$ is replaced by $T_k = T_{specified}$. For other rows $j \neq k$, the equations become:
$\sum_{i \neq k} [K_{ji}] T_i = \{F_j\} - [K_{jk}] T_{specified}$

This process is called "assembly" and "application of boundary conditions."

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding the fundamental FEM procedure starting from the weak form.
*   **CO2 (K3):** Formulation of shape functions (used in the discretization of the weak form).
*   **CO3 (K4):** This relates to strain-displacement, but the principle of forming element matrices from weak forms is the same.
*   **CO4 (K5):** The weak form formulation is a precursor to weighted residual methods and the evaluation of quantities.

### Practice Questions and Exercises

**Question 1:**
Derive the strong form of the governing differential equation for transient heat conduction in a one-dimensional bar with constant thermal conductivity $k$, cross-sectional area $A$, density $\rho$, specific heat $c$, and a heat generation rate $Q(x,t)$.
*(CO1 - K2)*

**Solution 1:**
Consider a differential element of length $dx$.
Rate of heat in at $x$: $q(x) = -kA \frac{\partial T}{\partial x}$
Rate of heat out at $x+dx$: $q(x+dx) = q(x) + \frac{\partial q}{\partial x} dx$
Rate of heat generation: $Q(x,t) dx$
Rate of change of internal energy: $\rho A c \frac{\partial T}{\partial t} dx$

Applying conservation of energy:
$q(x) - (q(x) + \frac{\partial q}{\partial x} dx) + Q(x,t) dx = \rho A c \frac{\partial T}{\partial t} dx$
$-\frac{\partial q}{\partial x} dx + Q(x,t) dx = \rho A c \frac{\partial T}{\partial t} dx$
Divide by $dx$:
$-\frac{\partial q}{\partial x} + Q(x,t) = \rho A c \frac{\partial T}{\partial t}$
Substitute $q = -kA \frac{\partial T}{\partial x}$:
$-\frac{\partial}{\partial x} \left(-kA \frac{\partial T}{\partial x}\right) + Q(x,t) = \rho A c \frac{\partial T}{\partial t}$
Assuming $k$ and $A$ are constant:
$kA \frac{\partial^2 T}{\partial x^2} + Q(x,t) = \rho A c \frac{\partial T}{\partial t}$
This is the strong form of the governing equation.

**Question 2:**
Derive the weak form of the governing equation for steady-state heat conduction in a one-dimensional bar with no heat generation, i.e., $\frac{d^2 T}{dx^2} = 0$, using the Galerkin method. Show the integration by parts.
*(CO1 - K2)*

**Solution 2:**
Strong form: $\frac{d^2 T}{dx^2} = 0$ for $0 < x < L$.
Let $w(x)$ be a weight function. Multiply by $w$ and integrate:
$\int_0^L w \frac{d^2 T}{dx^2} dx = 0$
Use integration by parts: $\int u dv = [uv] - \int v du$.
Let $u=w$ and $dv = \frac{d^2 T}{dx^2} dx$. Then $du = \frac{dw}{dx} dx$ and $v = \frac{dT}{dx}$.
$\left[ w \frac{dT}{dx} \right]_0^L - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$
$w(L) \frac{dT}{dx}|_L - w(0) \frac{\dT}{dx}|_0 - \int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = 0$
Rearranging the integral term:
$\int_0^L \frac{dw}{dx} \frac{dT}{dx} dx = w(L) \frac{dT}{dx}|_L - w(0) \frac{dT}{dx}|_0$
This is the weak form. For the Galerkin method, $w$ is chosen from the same space as $T$ (e.g., $w=N_j$).

**Question 3:**
For a one-dimensional bar element of length $l$, with temperature at node 1 as $T_1$ and node 2 as $T_2$, derive the element stiffness matrix $[K^{(e)}]$ for heat conduction, assuming constant thermal conductivity $k$ and cross-sectional area $A$. Use linear shape functions.
*(CO2 - K3, CO3 - K4 - analogous to stiffness matrix formulation)*

**Solution 3:**
The temperature within the element is approximated as $\hat{T}(x) = N_1(x) T_1 + N_2(x) T_2$.
Linear shape functions are: $N_1(x) = 1 - \frac{x}{l}$ and $N_2(x) = \frac{x}{l}$.
The weak form for a single element (assuming no boundary flux contribution for simplicity in matrix derivation) is:
$[K^{(e)}] \{T^{(e)}\} = \{F^{(e)}\}$ where $K_{ji}^{(e)} = \int_0^l kA \frac{d N_j}{dx} \frac{d N_i}{dx} dx$.

$\frac{d N_1}{dx} = -\frac{1}{l}$
$\frac{d N_2}{dx} = \frac{1}{l}$

$K_{11}^{(e)} = \int_0^l kA (-\frac{1}{l}) (-\frac{1}{l}) dx = \frac{kA}{l^2} \int_0^l dx = \frac{kA}{l^2} \cdot l = \frac{kA}{l}$
$K_{12}^{(e)} = \int_0^l kA (-\frac{1}{l}) (\frac{1}{l}) dx = -\frac{kA}{l^2} \int_0^l dx = -\frac{kA}{l^2} \cdot l = -\frac{kA}{l}$
$K_{21}^{(e)} = \int_0^l kA (\frac{1}{l}) (-\frac{1}{l}) dx = -\frac{kA}{l^2} \int_0^l dx = -\frac{kA}{l^2} \cdot l = -\frac{kA}{l}$
$K_{22}^{(e)} = \int_0^l kA (\frac{1}{l}) (\frac{1}{l}) dx = \frac{kA}{l^2} \int_0^l dx = \frac{kA}{l^2} \cdot l = \frac{kA}{l}$

Element stiffness matrix:
$[K^{(e)}] = \frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**Question 4:**
Consider a 2-node bar element where node 1 is at $x=0$ and node 2 is at $x=l$. The element has thermal conductivity $k$ and area $A$. The left end is at a fixed temperature $T_1 = T_A$, and the right end has a specified heat flux $q_2$ entering the element (so $-kA \frac{dT}{dx}|_l = q_2$). Derive the element force vector $\{F^{(e)}\}$ when using the weak form and applying these boundary conditions to the element.
*(CO1 - K2, CO4 - K5 - related to formulation of force vectors)*

**Solution 4:**
The weak form for steady-state heat conduction with no generation is:
$\int_0^l \frac{dw}{dx} \frac{dT}{dx} dx = w(l) \frac{dT}{dx}|_l - w(0) \frac{dT}{dx}|_0$

With boundary conditions: $T(0)=T_A$ (Dirichlet) and $-kA \frac{dT}{dx}|_l = q_2$ (Neumann).
For the Dirichlet condition at node 1 ($x=0$), we must have $w(0)=0$.
So the weak form becomes:
$\int_0^l \frac{dw}{dx} \frac{dT}{dx} dx = w(l) \frac{dT}{dx}|_l$

Substitute the Neumann condition: $\frac{dT}{dx}|_l = -\frac{q_2}{kA}$.
$\int_0^l \frac{dw}{dx} \frac{dT}{dx} dx = w(l) (-\frac{q_2}{kA})$

Now, let $T(x) \approx \hat{T}(x) = N_1(x) T_1 + N_2(x) T_2$.
And the weight function $w(x)$ is chosen as $N_j(x)$, for $j=1,2$.
The system is $\sum_{i=1}^{2} \left( \int_0^l kA \frac{d N_j}{dx} \frac{d N_i}{dx} dx \right) T_i = \{F_j^{(e)}\}$

The left side is $[K^{(e)}] \{T^{(e)}\}$. We need to find $\{F^{(e)}\}$.
For $j=1$:
$F_1^{(e)} = \int_0^l kA \frac{d N_1}{dx} \frac{d T}{dx} dx$ - this is not how the force vector is derived from the weak form.

Let's reconsider the weak form and boundary term:
$\int_0^l \frac{dw}{dx} \frac{dT}{dx} dx = w(l) (-\frac{q_2}{kA})$.
Substituting $w=N_j$:
$\sum_{i=1}^{2} \left( \int_0^l \frac{d N_j}{dx} \frac{d N_i}{dx} dx \right) T_i = N_j(l) (-\frac{q_2}{kA})$.

So, the right-hand side vector $\{F^{(e)}\}$ is:
For $j=1$: $F_1^{(e)} = N_1(l) (-\frac{q_2}{kA})$. Since $N_1(l) = 0$, $F_1^{(e)} = 0$.
For $j=2$: $F_2^{(e)} = N_2(l) (-\frac{q_2}{kA})$. Since $N_2(l) = 1$, $F_2^{(e)} = -\frac{q_2}{kA}$.

The element force vector is $\{F^{(e)}\} = \begin{Bmatrix} 0 \\ -q_2/kA \end{Bmatrix}$.

The system for the element, before applying the Dirichlet BC on $T_1$:
$\frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} T_1 \\ T_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ -q_2/kA \end{Bmatrix}$

**Important Point to Remember:**
The strong form requires differentiability of the solution, while the weak form only requires continuity. This is the fundamental advantage of the weak form for FEM.

### Summary and Key Takeaways

*   **Strong Form:** The original differential equation governing the physical phenomenon. It requires higher order continuity for the solution. For heat flow in a bar, it is a second-order ODE or PDE.
*   **Weak Form:** Derived from the strong form using weighted residuals and integration by parts. It reduces the order of derivatives, allowing for less strict continuity requirements. This is essential for FEM where piecewise polynomial approximations are used.
*   **Boundary Conditions:** Crucial for a unique solution. Dirichlet (prescribed value) and Neumann (prescribed flux) are common.
*   **Galerkin Method:** A weighted residual method where weight functions are the same as the approximation (shape) functions.
*   **Element Stiffness Matrix:** For heat conduction, it represents the relationship between temperature gradients and heat flux. For a 1D bar element, it is $\frac{kA}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.
*   **Element Force Vector:** Accounts for external influences like applied heat flux at boundaries or internal heat generation.

This module lays the groundwork for understanding how FEM solves partial differential equations by converting them into a system of algebraic equations based on the weak form and element formulations.

---
This concludes Module 4. The next module will build upon these concepts by discussing the assembly of element matrices and the solution of the global system of equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
