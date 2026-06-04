---
title: "One dimensional axially loaded bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463857"
status: "completed"
scrapedAt: "2026-05-20T18:04:07.526Z"
---
# FINITE ELEMENT METHODS: Module 4 - Strong and Weak Form

## Topic: One-Dimensional Axially Loaded Bar

This module delves into the fundamental concepts of the strong and weak forms of governing differential equations and their application to a basic structural problem: the one-dimensional axially loaded bar. This forms the bedrock for understanding more complex FEM formulations.

---

### Module 4: Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **LO 4.1:** Understand the concept of Strong Form of a differential equation.
*   **LO 4.2:** Understand the concept of Weak Form of a differential equation.
*   **LO 4.3:** Derive the Strong Form for a one-dimensional axially loaded bar.
*   **LO 4.4:** Derive the Weak Form for a one-dimensional axially loaded bar using the Galerkin method.
*   **LO 4.5:** Relate the Strong and Weak forms to fundamental FEM concepts like stiffness matrices and load vectors.

---

### Module 4: Alignment with Course Outcomes (COs)

This topic directly contributes to the following Course Outcomes:

*   **CO1 (K2):** Understanding the governing equations of various physical phenomena and the basic procedure of FEM.
    *   *How this topic contributes:* We will learn to formulate the governing differential equation (Strong Form) for an axially loaded bar and then transform it into a weaker form, which is the basis for FEM discretization.
*   **CO2 (K3):** Applying coordinate transformation and formulation of shape functions of various elements.
    *   *How this topic contributes:* While shape functions are typically introduced in Module 5, the groundwork for element formulation, starting with the simple 1D bar, is laid here. The concepts of nodal values and spatial variation are implicitly introduced.
*   **CO3 (K4):** Formulating shape functions and element strain-displacement matrix of various elements.
    *   *How this topic contributes:* Similar to CO2, this topic provides the foundational problem for later understanding strain-displacement relationships within an element.
*   **CO4 (K5):** Evaluating element stress using energy methods and studying Galerkin weight residual formulations.
    *   *How this topic contributes:* The derivation of the Weak Form using the Galerkin method is a core part of this topic and directly addresses this CO.

---

### 1. The One-Dimensional Axially Loaded Bar

**Context:** Imagine a slender bar or rod subjected to axial forces at its ends or along its length. The primary deformation mode is stretching or compression along its axis.

**Key Concepts:**

*   **Axial Force ($P$):** The internal force acting along the longitudinal axis of the bar.
*   **Stress ($\sigma$):** Force per unit area ($\sigma = P/A$, where $A$ is the cross-sectional area).
*   **Strain ($\epsilon$):** Deformation per unit length ($\epsilon = du/dx$, where $u$ is the axial displacement and $x$ is the axial coordinate).
*   **Young's Modulus ($E$):** A material property relating stress and strain for elastic materials ($ \sigma = E \epsilon $).
*   **Displacement ($u(x)$):** The axial displacement of a point along the bar as a function of its original position $x$.

---

### 2. Strong Form of the Governing Differential Equation

The Strong Form is the original differential equation that the solution must satisfy *exactly* within the domain, along with any boundary conditions.

#### 2.1 Derivation for a 1D Axially Loaded Bar

Consider a small elemental segment of the bar of length $dx$ at position $x$.

*   **Forces acting on the element:**
    *   Axial force at the left face ($x$): $P(x)$
    *   Axial force at the right face ($x+dx$): $P(x+dx)$
    *   Body force per unit volume ($f$): If there's a distributed force acting on the material itself (e.g., gravity). The total body force on the element is $f \cdot A \cdot dx$.

*   **Force Equilibrium:** Sum of forces in the x-direction must be zero.
    $P(x+dx) - P(x) - (f \cdot A) dx = 0$

*   **Taylor Series Expansion:** For small $dx$, $P(x+dx) \approx P(x) + \frac{dP}{dx} dx$.
    Substituting this into the equilibrium equation:
    $(P(x) + \frac{dP}{dx} dx) - P(x) - f A dx = 0$
    $\frac{dP}{dx} dx - f A dx = 0$
    $\frac{dP}{dx} = f A$

*   **Relating Force to Displacement:** We know that $\sigma = E \epsilon$ and $\epsilon = du/dx$. Also, $\sigma = P/A$.
    Therefore, $P/A = E (du/dx)$.
    This gives $P = A E (du/dx)$.

*   **Substituting $P$ into the Equilibrium Equation:**
    $\frac{d}{dx} \left( A E \frac{du}{dx} \right) = f A$

    This is the **Strong Form** of the governing differential equation for a one-dimensional axially loaded bar.

**Important Considerations for the Strong Form:**

*   **Continuity Requirements:** The Strong Form requires the solution $u(x)$ to be at least twice continuously differentiable ($u \in C^2$). This means $u(x)$, $u'(x)$, and $u''(x)$ must be continuous within the domain.
*   **Boundary Conditions:**
    *   **Essential Boundary Conditions (Dirichlet):** Specify the displacement at the boundary, e.g., $u(0) = u_0$.
    *   **Natural Boundary Conditions (Neumann):** Specify the force at the boundary. These arise from the equilibrium equation. For example, at $x=L$, the force is $P(L) = AE(du/dx)|_{x=L}$. If a force $F_L$ is applied at $x=L$, then $AE(du/dx)|_{x=L} = F_L$. If the end is free, $AE(du/dx)|_{x=L} = 0$.

**Textbook References:**

*   **Reddy, Chapter 3.2:** Discusses the derivation of governing differential equations for mechanical vibrations and structural analysis, including elastic bars.
*   **Cook, Chapter 3:** Covers equilibrium, stress, and strain in one dimension, leading to the governing equation.
*   **Bhavikatti, Chapter 2.1:** Presents the differential equation for a one-dimensional elastic bar under axial load.

---

### 3. Weak Form of the Governing Differential Equation

The Weak Form is derived from the Strong Form by multiplying the equation by a *test function* (or *weight function*) and integrating over the domain. This process reduces the continuity requirements on the solution.

#### 3.1 Derivation using the Galerkin Method

**The Galerkin Method:**

1.  Start with the Strong Form: $\frac{d}{dx} \left( A E \frac{du}{dx} \right) - f A = 0$.
2.  Introduce a *weight function* or *test function*, $w(x)$. This function is typically assumed to be zero at the essential boundary conditions and is infinitely differentiable ($w \in C^\infty$).
3.  Multiply the Strong Form by the test function $w(x)$:
    $w \left( \frac{d}{dx} \left( A E \frac{du}{dx} \right) - f A \right) = 0$
4.  Integrate this equation over the domain of the bar, say from $x=0$ to $x=L$:
    $\int_{0}^{L} w \frac{d}{dx} \left( A E \frac{du}{dx} \right) dx - \int_{0}^{L} w (f A) dx = 0$

5.  Apply **Integration by Parts** to the first term. The integration by parts formula is:
    $\int_{a}^{b} u \, dv = uv \Big|_{a}^{b} - \int_{a}^{b} v \, du$
    Let $u = w$ and $dv = \frac{d}{dx} \left( A E \frac{du}{dx} \right) dx$.
    Then $du = \frac{dw}{dx} dx$ and $v = A E \frac{du}{dx}$.

    Applying this to the first integral:
    $\left[ w \left( A E \frac{du}{dx} \right) \right]_{0}^{L} - \int_{0}^{L} \left( A E \frac{du}{dx} \right) \frac{dw}{dx} dx - \int_{0}^{L} w (f A) dx = 0$

6.  Rearrange the terms:
    $\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx = \left[ w \left( A E \frac{du}{dx} \right) \right]_{0}^{L} + \int_{0}^{L} w (f A) dx$

7.  **Evaluate the boundary term:** $\left[ w \left( A E \frac{du}{dx} \right) \right]_{0}^{L} = w(L) \left( A E \frac{du}{dx} \right)_{x=L} - w(0) \left( A E \frac{du}{dx} \right)_{x=0}$

    *   Recall that the boundary term involves the flux ($AE \frac{du}{dx}$), which is related to the force.
    *   If we specify an essential boundary condition at $x=0$ (e.g., $u(0) = u_0$), then our test function $w(x)$ must be zero at $x=0$, so $w(0)=0$.
    *   If we specify a natural boundary condition at $x=L$ (e.g., a force $F_L$ applied), then $AE \frac{du}{dx}|_{x=L} = F_L$.
    *   If the end $x=L$ is free, $AE \frac{du}{dx}|_{x=L} = 0$.

    **Crucially, the way we choose the weight function and handle the boundary term is what incorporates the boundary conditions.**

    Let's consider a common scenario:
    *   Essential BC at $x=0$: $u(0) = u_0 \implies w(0) = 0$.
    *   Natural BC at $x=L$: Applied force $F_L$. So, $AE \frac{du}{dx}|_{x=L} = F_L$.

    The boundary term becomes: $w(L) F_L - 0 \cdot (\text{flux at } x=0)$.
    However, in Galerkin, we often choose the weight function to be zero at *both* ends if both ends have essential BCs. If one end has a natural BC, the corresponding term in the boundary integral appears on the right-hand side of the weak form.

    Let's reformulate by grouping external forces.
    The total external force on the body is $\int_{0}^{L} f A w \, dx$ plus the force applied at the boundary $x=L$, $F_L w(L)$. If the end $x=0$ has a specified force $F_0$, then the boundary term should be $-F_0 w(0)$.
    Assuming $w(0)=0$ and $w(L)=0$ for simplicity of now (e.g., clamped at both ends, no external forces), the boundary term is zero.

    The Weak Form becomes:
    $\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx = \int_{0}^{L} w (f A) dx$

    **With boundary forces:**
    If $u(0)=u_0$ (so $w(0)=0$) and a force $F_L$ is applied at $x=L$ (so $AE \frac{du}{dx}|_{x=L} = F_L$), the weak form is:
    $\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx + F_L w(L) = \int_{0}^{L} w (f A) dx$

    **This is the Weak Form.**

**Key Points about the Weak Form:**

*   **Continuity Requirements:** The Weak Form only requires the trial solution $u(x)$ to be once continuously differentiable ($u \in C^1$) and the weight function $w(x)$ to be continuous and zero at essential boundaries. This is a significant relaxation of the continuity requirements, making it suitable for FEM where piecewise polynomial approximations are used.
*   **Variational Principle:** The Weak Form can often be interpreted as a statement of a variational principle (e.g., Principle of Minimum Potential Energy).
*   **Incorporation of BCs:** Essential boundary conditions are imposed on the trial solution, while natural boundary conditions appear in the boundary integral terms of the weak form.

**Textbook References:**

*   **Reddy, Chapter 3.4:** Excellent coverage of weighted residual methods, including Galerkin, and the derivation of weak forms.
*   **Cook, Chapter 4:** Explains the concept of weak formulation and its advantages.
*   **Fish & Belytschko, Chapter 2.2:** Introduces the virtual work principle and its connection to the weak form.

---

### 4. Connecting Strong and Weak Forms to FEM Concepts

The Weak Form is the foundation for Finite Element Method because it allows us to approximate the solution using piecewise polynomials.

#### 4.1 Discretization into Elements

The continuous domain $[0, L]$ is divided into $N$ smaller subdomains called **elements**. Let these elements be $[x_{i-1}, x_i]$ for $i=1, \dots, N$. The points $x_0, x_1, \dots, x_N$ are called **nodes**.

#### 4.2 Approximation of the Solution

Within each element $e = [x_{i-1}, x_i]$, the displacement $u(x)$ is approximated by a function $\hat{u}(x)$. This approximation is typically a polynomial:
$\hat{u}(x) = \sum_{j=1}^{n_{el}} N_j(\xi) u_j$
where:
*   $N_j(\xi)$ are the **shape functions** (or basis functions) defined over the element in a local coordinate system $\xi$.
*   $u_j$ are the **nodal values** of the displacement at the nodes of the element.
*   $n_{el}$ is the number of nodes per element (e.g., 2 for a linear element).

#### 4.3 Applying the Galerkin Method to an Element

For each element $e$, the weak form is written for a piecewise polynomial approximation $\hat{u}(x)$. The weight function $w(x)$ is also approximated by a piecewise polynomial, and in the Galerkin method, these are chosen from the same space as the trial solution.

Specifically, we choose $w(x)$ to be the same shape functions $N_i(x)$ associated with each node $i$ in the discretization. This is because we want to ensure that the governing equation is satisfied in an average sense with respect to these "test functions."

Let's consider a single linear element $e = [x_0, x_1]$. The approximation is $\hat{u}(x) = N_0(x) u_0 + N_1(x) u_1$, where $N_0(x) = (x_1-x)/h$ and $N_1(x) = (x-x_0)/h$, with $h=x_1-x_0$.

We will have as many equations as there are nodes. For each node $i$, we choose the test function $w(x) = N_i(x)$ and substitute it into the weak form of the governing equation over the element domain.

The weak form for an element $e$ is:
$\int_{x_0}^{x_1} A E \frac{dN_i}{dx} \frac{du}{dx} dx = \int_{x_0}^{x_1} N_i (f A) dx + \text{Boundary Terms}$

Substituting $\hat{u}(x)$ for $u(x)$ and $N_k(x)$ for $w(x)$ for each node $k$:
$\int_{x_0}^{x_1} A E \frac{dN_i}{dx} \frac{d}{dx} \left( \sum_{j=1}^{n_{el}} N_j(x) u_j \right) dx = \int_{x_0}^{x_1} N_i (f A) dx + \text{Boundary Terms}_i$
$\sum_{j=1}^{n_{el}} \left( \int_{x_0}^{x_1} A E \frac{dN_i}{dx} \frac{dN_j}{dx} dx \right) u_j = \int_{x_0}^{x_1} N_i (f A) dx + \text{Boundary Terms}_i$

This can be written in matrix form for the element:
$[k^e] \{u^e\} = \{f^e\} + \{F_{BC}^e\}$

*   $[k^e]$ is the **element stiffness matrix**, where $k^e_{ij} = \int_{x_0}^{x_1} A E \frac{dN_i}{dx} \frac{dN_j}{dx} dx$. This matrix depends on the material property ($E$), geometry ($A$), and shape functions ($N_i, N_j$).
*   $\{u^e\}$ is the vector of nodal displacements for the element.
*   $\{f^e\}$ is the **element force vector** (or load vector), where $f^e_i = \int_{x_0}^{x_1} N_i (f A) dx$. This represents the distributed body forces.
*   $\{F_{BC}^e\}$ represents forces applied at the boundary of the element (e.g., concentrated forces).

**Example: Linear Element (2-node)**

For a linear element, $n_{el}=2$. The displacement is $\hat{u}(x) = N_1(x) u_1 + N_2(x) u_2$.
The derivatives of shape functions are $\frac{dN_1}{dx} = -1/h$ and $\frac{dN_2}{dx} = 1/h$.

The element stiffness matrix components are:
$k^e_{11} = \int_{x_0}^{x_1} A E (-\frac{1}{h}) (-\frac{1}{h}) dx = \frac{AE}{h} \int_{x_0}^{x_1} dx = \frac{AE}{h}$
$k^e_{12} = \int_{x_0}^{x_1} A E (-\frac{1}{h}) (\frac{1}{h}) dx = -\frac{AE}{h} \int_{x_0}^{x_1} dx = -\frac{AE}{h}$
$k^e_{21} = \int_{x_0}^{x_1} A E (\frac{1}{h}) (-\frac{1}{h}) dx = -\frac{AE}{h} \int_{x_0}^{x_1} dx = -\frac{AE}{h}$
$k^e_{22} = \int_{x_0}^{x_1} A E (\frac{1}{h}) (\frac{1}{h}) dx = \frac{AE}{h} \int_{x_0}^{x_1} dx = \frac{AE}{h}$

So, the element stiffness matrix for a linear 1D bar element is:
$[k^e] = \frac{AE}{h} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

The element force vector for a uniform distributed body force $f$ is:
$f^e_1 = \int_{x_0}^{x_1} N_1(x) (fA) dx = \int_{x_0}^{x_1} \frac{x_1-x}{h} (fA) dx = fA \left[ \frac{x_1 x}{h} - \frac{x^2}{2h} \right]_{x_0}^{x_1}$
$f^e_1 = fA \left[ (\frac{x_1^2}{h} - \frac{x_1^2}{2h}) - (\frac{x_1 x_0}{h} - \frac{x_0^2}{2h}) \right] = fA \left[ \frac{x_1^2}{2h} - \frac{x_1 x_0}{h} + \frac{x_0^2}{2h} \right]$
Since $h = x_1-x_0$, $x_1^2 - 2x_1 x_0 + x_0^2 = (x_1-x_0)^2 = h^2$.
$f^e_1 = fA \frac{1}{2h} [x_1^2 - 2x_1 x_0 + x_0^2] = fA \frac{h^2}{2h} = \frac{fA h}{2}$

Similarly,
$f^e_2 = \int_{x_0}^{x_1} N_2(x) (fA) dx = \int_{x_0}^{x_1} \frac{x-x_0}{h} (fA) dx = \frac{fA h}{2}$

So, the element force vector for a uniform distributed body force $f$ is:
$\{f^e\} = \frac{fA h}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
This shows that the distributed load is equally distributed to the nodes, which is a property of linear shape functions (they integrate to $h/2$).

**Assembly:** The element stiffness matrices and force vectors are assembled into a global stiffness matrix and global force vector, respectively, to form the system of equations for the entire structure:
$[K] \{u\} = \{F\}$

**Textbook References:**

*   **Reddy, Chapter 3.5 & 3.6:** Discusses weighted residual methods applied to assemble element equations and global system formation.
*   **Cook, Chapter 4 & 5:** Detail the process of generating element stiffness matrices and vectors, and assembling them globally.
*   **Bhavikatti, Chapter 2.2 & 2.3:** Covers shape functions, element stiffness matrices, and the assembly process.
*   **Fish & Belytschko, Chapter 2.2 & 3:** Discusses weak forms, variational principles, and the FEM formulation for bar elements.

---

### 5. Practice Questions and Exercises

**Question 1:**
Derive the Strong Form of the governing differential equation for a one-dimensional bar with a cross-sectional area $A(x)$, Young's modulus $E(x)$, subjected to a distributed axial load $f(x)$ per unit volume and body force $b(x)$ per unit length (e.g., gravity on the bar itself).

**Answer 1:**
Consider an elemental segment $dx$.
Forces:
*   Axial force at $x$: $P(x)$
*   Axial force at $x+dx$: $P(x+dx)$
*   Distributed axial load $b(x) dx$ (force per unit length * length)

Equilibrium: $P(x+dx) - P(x) - b(x) dx = 0$
Using Taylor expansion: $\frac{dP}{dx} dx - b(x) dx = 0 \implies \frac{dP}{dx} = b(x)$.

Stress-Strain relationship: $\sigma = E(x) \epsilon$
Strain definition: $\epsilon = \frac{du}{dx}$
Force-Area relationship: $\sigma = \frac{P(x)}{A(x)}$

Combining these: $\frac{P(x)}{A(x)} = E(x) \frac{du}{dx} \implies P(x) = A(x) E(x) \frac{du}{dx}$.

Substitute $P(x)$ into the equilibrium equation:
$\frac{d}{dx} \left( A(x) E(x) \frac{du}{dx} \right) = b(x)$.
This is the Strong Form.

---

**Question 2:**
Derive the Weak Form of the governing differential equation for a 1D bar from $x=0$ to $x=L$, with constant $A$ and $E$, and a distributed body force $f$ per unit volume. Assume no external forces are applied at the boundaries, and the bar is fixed at $x=0$.

**Answer 2:**
Strong Form: $\frac{d}{dx} \left( A E \frac{du}{dx} \right) - f A = 0$.

Multiply by a weight function $w(x)$ and integrate over $[0, L]$:
$\int_{0}^{L} w \left( \frac{d}{dx} \left( A E \frac{du}{dx} \right) - f A \right) dx = 0$
$\int_{0}^{L} w \frac{d}{dx} \left( A E \frac{du}{dx} \right) dx - \int_{0}^{L} w (f A) dx = 0$

Integrate by parts the first term:
$\left[ w \left( A E \frac{du}{dx} \right) \right]_{0}^{L} - \int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx - \int_{0}^{L} w (f A) dx = 0$

Boundary Conditions:
*   Fixed at $x=0$: $u(0) = 0$. This implies $w(0) = 0$.
*   No external forces at $x=L$: $A E \frac{du}{dx} |_{x=L} = 0$.

Boundary Term: $\left[ w \left( A E \frac{du}{dx} \right) \right]_{0}^{L} = w(L) \left( A E \frac{du}{dx} \right)_{x=L} - w(0) \left( A E \frac{du}{dx} \right)_{x=0}$
$= w(L) \cdot 0 - 0 \cdot (\text{flux at } x=0) = 0$.

So the Weak Form is:
$-\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx - \int_{0}^{L} w (f A) dx = 0$
Rearranging:
$\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} dx = -\int_{0}^{L} w (f A) dx$

---

**Question 3:**
For a 1D bar element of length $h$ with nodes 1 and 2 at its ends. The axial displacement is approximated by $\hat{u}(x) = N_1(x) u_1 + N_2(x) u_2$.
a) Write down the expressions for the linear shape functions $N_1(x)$ and $N_2(x)$ in terms of the local coordinate $x$ (measured from node 1) and element length $h$.
b) Derive the element stiffness matrix $[k^e]$ for this element, assuming constant $A$ and $E$.

**Answer 3:**
a) Let node 1 be at $x=0$ and node 2 be at $x=h$.
$N_1(x)$ should be 1 at $x=0$ and 0 at $x=h$.
$N_2(x)$ should be 0 at $x=0$ and 1 at $x=h$.
Linear shape functions are of the form $N_i(x) = a_i + b_i x$.

For $N_1(x)$:
$N_1(0) = a_1 + b_1(0) = 1 \implies a_1 = 1$.
$N_1(h) = a_1 + b_1(h) = 0 \implies 1 + b_1 h = 0 \implies b_1 = -1/h$.
So, $N_1(x) = 1 - x/h$.

For $N_2(x)$:
$N_2(0) = a_2 + b_2(0) = 0 \implies a_2 = 0$.
$N_2(h) = a_2 + b_2(h) = 1 \implies 0 + b_2 h = 1 \implies b_2 = 1/h$.
So, $N_2(x) = x/h$.

b) The element stiffness matrix is given by $k^e_{ij} = \int_{0}^{h} A E \frac{dN_i}{dx} \frac{dN_j}{dx} dx$.
We need the derivatives:
$\frac{dN_1}{dx} = -1/h$
$\frac{dN_2}{dx} = 1/h$

$k^e_{11} = \int_{0}^{h} A E (-\frac{1}{h}) (-\frac{1}{h}) dx = \frac{AE}{h^2} \int_{0}^{h} dx = \frac{AE}{h^2} [x]_{0}^{h} = \frac{AE}{h^2} (h) = \frac{AE}{h}$
$k^e_{12} = \int_{0}^{h} A E (-\frac{1}{h}) (\frac{1}{h}) dx = -\frac{AE}{h^2} \int_{0}^{h} dx = -\frac{AE}{h^2} [x]_{0}^{h} = -\frac{AE}{h^2} (h) = -\frac{AE}{h}$
$k^e_{21} = \int_{0}^{h} A E (\frac{1}{h}) (-\frac{1}{h}) dx = -\frac{AE}{h^2} \int_{0}^{h} dx = -\frac{AE}{h^2} [x]_{0}^{h} = -\frac{AE}{h^2} (h) = -\frac{AE}{h}$
$k^e_{22} = \int_{0}^{h} A E (\frac{1}{h}) (\frac{1}{h}) dx = \frac{AE}{h^2} \int_{0}^{h} dx = \frac{AE}{h^2} [x]_{0}^{h} = \frac{AE}{h^2} (h) = \frac{AE}{h}$

The element stiffness matrix is:
$[k^e] = \begin{bmatrix} \frac{AE}{h} & -\frac{AE}{h} \\ -\frac{AE}{h} & \frac{AE}{h} \end{bmatrix} = \frac{AE}{h} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

---

### 6. Important Points to Remember

*   **Strong Form:** The original differential equation, requiring higher-order continuity of the solution.
*   **Weak Form:** Derived by multiplying the Strong Form by a test function and integrating by parts. It requires lower-order continuity and is the basis for FEM.
*   **Galerkin Method:** A specific method to derive the Weak Form where the test functions are chosen from the same space as the trial solution.
*   **Continuity Requirements:** $C^2$ for Strong Form, $C^1$ for Weak Form (for the second-order ODE). This is why Weak Form is preferred in FEM.
*   **Boundary Conditions:** Essential BCs (displacement) are enforced on the trial solution ($u$), while Natural BCs (force) appear in the boundary integral of the Weak Form.
*   **Element Stiffness Matrix:** For a 1D bar, it's directly related to $AE/h$ and depends on the derivatives of shape functions.
*   **Shape Functions:** Piecewise polynomials that define the displacement within an element. Linear shape functions are the simplest for 1D problems.
*   **Integration by Parts:** The key mathematical tool for transforming the Strong Form into the Weak Form.

---

This concludes Module 4. The concepts of Strong and Weak forms are fundamental to understanding how the Finite Element Method approximates solutions to physical problems. The 1D bar serves as a simple yet powerful illustration of these principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
