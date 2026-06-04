---
title: "heat flow in a bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a5"
status: "completed"
scrapedAt: "2026-05-20T18:13:06.357Z"
---
# Finite Element Methods - Module 4: Strong and Weak Form - Heat Flow in a Bar

## 1. Introduction to Heat Flow in a Bar

This module focuses on understanding the governing equation for heat conduction in a one-dimensional bar and how to derive its strong and weak forms, which are fundamental to the Finite Element Method (FEM).

**Learning Outcomes:**

*   Understand the governing equation for heat conduction in a bar.
*   Derive the strong form of the governing equation.
*   Derive the weak form of the governing equation using weighted residuals.
*   Apply the concept of variational methods to derive the weak form.

**Course Outcomes Alignment:**

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM.
    *   This section directly addresses understanding the governing equation for heat flow.
*   **CO4 (K5):** To study Galekin weight residual formulations.
    *   The derivation of the weak form will involve weighted residual methods, specifically the Galerkin method.

**Key Concepts & Definitions:**

*   **Heat Conduction:** The transfer of heat through a material by direct contact of particles.
*   **One-Dimensional Bar:** A slender rod where temperature variation is primarily along its length.
*   **Governing Equation:** A mathematical equation that describes the physical behavior of the system. For steady-state heat conduction, this is typically derived from Fourier's Law and the principle of conservation of energy.
*   **Temperature ($T$):** The dependent variable representing the thermal state of the material.
*   **Thermal Conductivity ($k$):** A material property that quantifies its ability to conduct heat.
*   **Heat Flux ($q$):** The rate of heat transfer per unit area.
*   **Source Term ($Q$):** Represents internal heat generation within the bar.
*   **Boundary Conditions:** Conditions specified at the boundaries of the domain, which are essential for a unique solution.

**Textbook References:**

*   **Reddy (2009):** Chapter on heat conduction, likely covers the derivation of the governing equation.
*   **Cook (2008):** May present heat conduction problems as an introductory FEM application.
*   **Bhavikatti (2008):** Likely includes heat conduction as a typical example for FEM formulation.
*   **Fish & Belytschko (2007):** May offer a more advanced perspective on deriving governing equations.

---

## 2. Derivation of the Governing Equation (Strong Form)

We will consider a one-dimensional bar of length $L$. The temperature distribution $T(x)$ along the bar is the unknown.

### 2.1 Physical Basis: Conservation of Energy

Consider a small differential element of the bar with length $dx$.

![Differential element for heat flow](https://i.imgur.com/9y9z1gO.png)
*(Conceptual illustration of a differential element for heat flow analysis)*

Applying the principle of conservation of energy to this element:

**Rate of Heat Entering - Rate of Heat Leaving + Rate of Heat Generated = Rate of Accumulation of Heat**

In the context of **steady-state heat conduction**, the rate of accumulation of heat is zero.

*   **Rate of Heat Entering at $x$:** $q(x)A$, where $A$ is the cross-sectional area.
*   **Rate of Heat Leaving at $x+dx$:** $q(x+dx)A$.
*   **Rate of Heat Generated within the element:** $Q(x)A dx$, where $Q(x)$ is the heat generation rate per unit volume.

Thus, for steady-state heat conduction:

$q(x)A - q(x+dx)A + Q(x)A dx = 0$

Expanding $q(x+dx)$ using Taylor series: $q(x+dx) \approx q(x) + \frac{\partial q}{\partial x} dx$.

$q(x)A - (q(x) + \frac{\partial q}{\partial x} dx)A + Q(x)A dx = 0$

$- \frac{\partial q}{\partial x} dx A + Q(x)A dx = 0$

Dividing by $A dx$:

$- \frac{\partial q}{\partial x} + Q(x) = 0$

$\frac{\partial q}{\partial x} = Q(x)$

### 2.2 Fourier's Law of Heat Conduction

Fourier's Law states that the heat flux is proportional to the negative temperature gradient:

$q(x) = -k \frac{dT}{dx}$

where $k$ is the thermal conductivity.

### 2.3 Combining Conservation and Fourier's Law

Substitute Fourier's Law into the conservation equation:

$\frac{\partial}{\partial x} \left( -k \frac{dT}{dx} \right) = Q(x)$

Assuming $k$ is constant, we get the **one-dimensional steady-state heat conduction equation (Strong Form)**:

$- \frac{d}{dx} \left( k \frac{dT}{dx} \right) + Q(x) = 0$

This is the governing differential equation for heat flow in a bar. It is called the "strong form" because it requires the solution $T(x)$ and its derivative $\frac{dT}{dx}$ to be continuous and satisfy the equation in a classical sense.

**Important Point to Remember:** The strong form is the original differential equation that describes the physical phenomenon.

---

## 3. Boundary Conditions

For a unique solution to the governing equation, boundary conditions must be specified. For heat flow in a bar, the common boundary conditions are:

1.  **Dirichlet Boundary Condition (Prescribed Temperature):** The temperature is specified at a boundary.
    *   $T(x) = T_0$ at $x=0$ or $x=L$.

2.  **Neumann Boundary Condition (Prescribed Heat Flux):** The heat flux is specified at a boundary.
    *   $-k \frac{dT}{dx} = q_0$ at $x=0$ or $x=L$.
    *   If $q_0 = 0$, it's an **insulated boundary** (no heat flow across the boundary).

3.  **Robin or Convection Boundary Condition:** Heat transfer by convection to/from the surroundings.
    *   $-k \frac{dT}{dx} = h(T - T_{amb})$ at $x=0$ or $x=L$, where $h$ is the convective heat transfer coefficient and $T_{amb}$ is the ambient temperature.

---

## 4. Derivation of the Weak Form using Weighted Residuals (Galerkin Method)

The strong form is difficult to satisfy directly for complex geometries and boundary conditions. The Finite Element Method seeks an approximate solution by converting the strong form into a "weak form." This is achieved using integral forms, which are less restrictive on the continuity of the solution.

The weighted residual method is a general approach to obtain weak forms. The core idea is to find an approximate solution $\tilde{T}(x)$ such that the residual $R(x)$ is minimized in some average sense.

$R(x) = - \frac{d}{dx} \left( k \frac{dT}{dx} \right) + Q(x)$

We want to find $\tilde{T}(x)$ such that $R(x) \approx 0$ over the domain $\Omega = [0, L]$.

The weighted residual statement requires finding a function $\tilde{T}(x)$ such that for any arbitrary "weight function" or "test function" $w(x)$, the integral of the product of the residual and the weight function over the domain is zero:

$\int_{\Omega} w(x) R(x) dx = 0$

$\int_{0}^{L} w(x) \left[ - \frac{d}{dx} \left( k \frac{dT}{dx} \right) + Q(x) \right] dx = 0$

This equation can be split into two parts:

$\int_{0}^{L} w(x) Q(x) dx - \int_{0}^{L} w(x) \frac{d}{dx} \left( k \frac{dT}{dx} \right) dx = 0$

### 4.1 Integration by Parts

To reduce the order of the derivative of the unknown $T(x)$, we use integration by parts on the second term. The integration by parts formula is: $\int u dv = uv - \int v du$.

Let $u = w(x)$ and $dv = \frac{d}{dx} \left( k \frac{dT}{dx} \right) dx$.
Then $du = \frac{dw}{dx} dx$ and $v = k \frac{dT}{dx}$.

So, $\int_{0}^{L} w(x) \frac{d}{dx} \left( k \frac{dT}{dx} \right) dx = \left[ w(x) k \frac{dT}{dx} \right]_{0}^{L} - \int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx$

Substituting this back into the weighted residual equation:

$\int_{0}^{L} w(x) Q(x) dx - \left[ w(x) k \frac{dT}{dx} \right]_{0}^{L} + \int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = 0$

Rearranging the terms:

$\int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = \int_{0}^{L} w(x) Q(x) dx + \left[ w(x) k \frac{dT}{dx} \right]_{0}^{L}$

### 4.2 Incorporating Boundary Conditions

Now, we interpret the boundary terms using the boundary conditions.

*   **At the boundaries ($x=0, L$):**
    The term $k \frac{dT}{dx}$ represents the heat flux $q$. So, $w(x) k \frac{dT}{dx}$ is $w(x)q$.

*   **Case 1: Neumann Boundary Condition at $x=L$ (prescribed flux $q_L$)**
    $-k \frac{dT}{dx} |_{x=L} = q_L \implies k \frac{dT}{dx} |_{x=L} = -q_L$
    The boundary term at $x=L$ becomes: $w(L) (-q_L)$.

*   **Case 2: Convection Boundary Condition at $x=L$**
    $-k \frac{dT}{dx} |_{x=L} = h(T - T_{amb}) |_{x=L}$
    If we are using an approximate solution $\tilde{T}$, the term becomes: $w(L) h(\tilde{T}(L) - T_{amb})$.

*   **Case 3: Insulated Boundary at $x=L$ (zero flux)**
    $-k \frac{dT}{dx} |_{x=L} = 0 \implies k \frac{dT}{dx} |_{x=L} = 0$
    The boundary term at $x=L$ becomes: $w(L) (0) = 0$.

The boundary term $\left[ w(x) k \frac{dT}{dx} \right]_{0}^{L}$ is: $w(L) k \frac{dT}{dx}|_{x=L} - w(0) k \frac{dT}{dx}|_{x=0}$.

Let's rewrite the weak form with the boundary terms explicitly considered:

$\int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = \int_{0}^{L} w(x) Q(x) dx + w(L) k \frac{dT}{dx}|_{x=L} - w(0) k \frac{dT}{dx}|_{x=0}$

If we assume the weight function $w(x)$ is chosen such that $w(x)=0$ at boundaries where the Dirichlet condition is specified (e.g., $T$ is prescribed at $x=0$), then those terms vanish.

For the **Galerkin method**, the weight functions $w(x)$ are chosen from the same family of functions as the approximate solution $\tilde{T}(x)$.

### 4.3 The Weak Form Equation

The **weak form** of the heat conduction equation is:

$\int_{0}^{L} k \frac{d\tilde{T}}{dx} \frac{dw}{dx} dx = \int_{0}^{L} w(x) Q(x) dx + \text{Boundary Terms}$

The "boundary terms" are integrated contributions from the specified Neumann or Robin boundary conditions.

**Example of Weak Form with Specific Boundary Conditions:**

Consider a bar with:
*   Fixed temperature at $x=0$: $T(0) = T_0$
*   Convection at $x=L$: $-k \frac{dT}{dx} |_{x=L} = h(T(L) - T_{amb})$
*   Internal heat generation $Q(x)$

The weak form becomes:

$\int_{0}^{L} k \frac{d\tilde{T}}{dx} \frac{dw}{dx} dx = \int_{0}^{L} w(x) Q(x) dx + w(L) \left[ -h(\tilde{T}(L) - T_{amb}) \right]$

Since $T(0)$ is prescribed, our trial solution $\tilde{T}(x)$ must satisfy $\tilde{T}(0) = T_0$. The weight function $w(x)$ must satisfy $w(0)=0$ to be consistent with the Dirichlet boundary condition. The term involving $w(0)$ in the integration by parts vanishes.

The final weak form for this case is:

$\int_{0}^{L} k \frac{d\tilde{T}}{dx} \frac{dw}{dx} dx = \int_{0}^{L} w(x) Q(x) dx - w(L) h(\tilde{T}(L) - T_{amb})$

**Key Differences between Strong and Weak Forms:**

*   **Continuity Requirements:** Strong form requires continuity of the solution and its first derivative. Weak form requires continuity of the solution and its first derivative is part of the integral, meaning lower continuity requirements for the approximation.
*   **Derivatives:** Strong form involves second derivatives. Weak form involves only first derivatives, which is beneficial for FEM.
*   **Boundary Conditions:** Natural boundary conditions (Neumann/Robin) are naturally incorporated into the weak form through integration by parts. Essential boundary conditions (Dirichlet) must be imposed on the trial solution.

**Important Point to Remember:** The weak form allows for a broader class of trial functions and simplifies the imposition of boundary conditions in FEM.

**Textbook References:**

*   **Reddy (2009):** Chapter 3 (Variational Methods) and Chapter 4 (Weighted Residual Methods) will extensively cover the derivation of weak forms for heat conduction.
*   **Cook (2008):** Likely demonstrates this derivation in chapters related to bar elements or heat transfer.
*   **Bhavikatti (2008):** Expected to have a dedicated section on weak formulation for heat conduction problems.
*   **Fish & Belytschko (2007):** May present this from a more theoretical or variational perspective.
*   **Segerlind (2010):** Chapter 5 (Variational Formulation) is highly relevant.
*   **Ramamurthi (2008):** Likely covers this in early chapters on FEM formulation.
*   **Hutton (2009):** Will cover weak forms, possibly as an introduction to FEM.

---

## 5. Variational Method for Deriving Weak Form (Optional but important context)

While weighted residuals are a general approach, for many physical problems, the weak form can also be derived from a variational principle, such as minimizing a functional (like potential energy in elasticity or a thermal energy functional).

For steady-state heat conduction, the problem can be framed as minimizing the following functional, $I(T)$:

$I(T) = \frac{1}{2} \int_{0}^{L} k \left( \frac{dT}{dx} \right)^2 dx - \int_{0}^{L} w(x) Q(x) dx - \text{Boundary Terms related to convection}$

The principle is that the solution $T(x)$ that satisfies the governing differential equation also minimizes this functional. To find the conditions for minimization, we can consider a variation $\delta T(x)$ around the solution: $T(x) = T_{actual}(x) + \epsilon \delta T(x)$.

Then, we require that the first variation of $I(T)$ with respect to $\epsilon$ be zero at $\epsilon=0$:

$\delta I = \frac{dI}{d\epsilon} \Big|_{\epsilon=0} = 0$

This process of taking the variation and setting it to zero after integration by parts leads to the same weak form derived using weighted residuals. This provides a physical interpretation for the weak form in terms of energy principles.

**Example of Functional for Convection:**

If we have convection at $x=L$, the functional would include a term:
$+\frac{1}{2} h T(L)^2 - h T_{amb} T(L)$ (This is derived by considering the work done by convection forces).

The variation of this part with respect to $T(L)$ would lead to the convection boundary term in the weak form.

**Textbook References:**

*   **Reddy (2009):** Chapter 3 (Variational Methods) is key here.
*   **Segerlind (2010):** Chapter 5 is dedicated to variational methods.
*   **Hutton (2009):** May present variational principles as an alternative derivation method.

---

## 6. Practice Questions and Exercises

**Question 1 (K2 - CO1):**
State the governing differential equation for one-dimensional steady-state heat conduction in a bar with internal heat generation $Q(x)$ and variable thermal conductivity $k(x)$.

**Answer:**
$-\frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) + Q(x) = 0$

**Question 2 (K2 - CO1):**
What are the three common types of boundary conditions encountered in heat conduction problems?

**Answer:**
1.  Dirichlet (Prescribed Temperature)
2.  Neumann (Prescribed Heat Flux)
3.  Robin/Convection

**Question 3 (K5 - CO4):**
Derive the weak form of the heat conduction equation for a bar of length $L$ with constant thermal conductivity $k$, no heat generation ($Q(x)=0$), and the following boundary conditions:
*   Prescribed temperature at $x=0$: $T(0) = T_0$
*   Insulated boundary at $x=L$: $-k \frac{dT}{dx}|_{x=L} = 0$

**Solution:**
The strong form is:
$-\frac{d}{dx} \left( k \frac{dT}{dx} \right) = 0$

The weighted residual statement is:
$\int_{0}^{L} w(x) \left[ -\frac{d}{dx} \left( k \frac{dT}{dx} \right) \right] dx = 0$

Integrate by parts:
$\left[ -w(x) k \frac{dT}{dx} \right]_{0}^{L} + \int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = 0$

Apply boundary conditions:
*   At $x=0$: $T(0)=T_0$. The weight function $w(0)=0$. So, $-w(0) k \frac{dT}{dx}|_{x=0} = 0$.
*   At $x=L$: $-k \frac{dT}{dx}|_{x=L} = 0$. So, $-w(L) k \frac{dT}{dx}|_{x=L} = -w(L) (0) = 0$.

The weak form becomes:
$\int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = 0$

**Question 4 (K5 - CO4):**
Consider the heat conduction equation for a bar with constant $k$, no heat generation, and boundary conditions:
*   Convection at $x=0$: $-k \frac{dT}{dx}|_{x=0} = h(T(0) - T_{amb})$
*   Prescribed flux at $x=L$: $-k \frac{dT}{dx}|_{x=L} = q_L$

Derive the weak form. Assume the trial solution $\tilde{T}(x)$ must satisfy the condition at $x=L$ (i.e., $\tilde{T}(L)$ can be anything, but the flux is prescribed). The condition at $x=0$ is convective, so $w(0)$ is not necessarily zero.

**Solution:**
The strong form is:
$-\frac{d}{dx} \left( k \frac{dT}{dx} \right) = 0$

Weighted residual statement:
$\int_{0}^{L} w(x) \left[ -\frac{d}{dx} \left( k \frac{dT}{dx} \right) \right] dx = 0$

Integrate by parts:
$\left[ -w(x) k \frac{dT}{dx} \right]_{0}^{L} + \int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = 0$

Substitute boundary conditions:
*   At $x=0$: $-k \frac{dT}{dx}|_{x=0} = h(T(0) - T_{amb})$. So, $w(0) k \frac{dT}{dx}|_{x=0} = w(0) [-h(T(0) - T_{amb})]$.
*   At $x=L$: $-k \frac{dT}{dx}|_{x=L} = q_L$. So, $-w(L) k \frac{dT}{dx}|_{x=L} = -w(L) q_L$.

The weak form becomes:
$-w(L) q_L - (-w(0) h(T(0) - T_{amb})) + \int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = 0$

Rearranging:
$\int_{0}^{L} k \frac{dT}{dx} \frac{dw}{dx} dx = w(L) q_L - w(0) h(T(0) - T_{amb})$

Using $\tilde{T}$ for the approximate solution:
$\int_{0}^{L} k \frac{d\tilde{T}}{dx} \frac{dw}{dx} dx = w(L) q_L - w(0) h(\tilde{T}(0) - T_{amb})$

This is the weak form for the specified boundary conditions. Note how the boundary conditions appear as source terms in the weak form.

---

## 7. Summary and Key Takeaways

*   **Governing Equation (Strong Form):** The fundamental differential equation describing heat flow, typically derived from conservation laws and constitutive relations (like Fourier's Law). For 1D steady-state heat conduction, it's $-\frac{d}{dx} \left( k \frac{dT}{dx} \right) + Q(x) = 0$.
*   **Boundary Conditions:** Essential for a unique solution. Common types include Dirichlet (temperature), Neumann (flux), and Robin (convection).
*   **Weak Form:** An integral formulation of the governing equation obtained using weighted residuals (e.g., Galerkin method) or variational principles. It lowers the continuity requirements of the solution.
*   **Integration by Parts:** The key mathematical tool to convert the strong form (requiring second derivatives) into the weak form (requiring first derivatives).
*   **Role of Weight Functions:** Arbitrary (but sufficiently smooth) functions used to "test" the residual. In the Galerkin method, they are chosen from the same function space as the approximate solution.
*   **Incorporation of Boundary Conditions:**
    *   **Essential (Dirichlet):** Imposed directly on the trial solution (e.g., $\tilde{T}(0)=T_0$) and on the weight functions ($w(0)=0$).
    *   **Natural (Neumann/Robin):** Naturally appear in the weak form as boundary integral terms after integration by parts.

Understanding the derivation and implications of both strong and weak forms is crucial for developing finite element formulations for heat transfer problems. The weak form is the direct precursor to discretizing the problem for FEM analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
